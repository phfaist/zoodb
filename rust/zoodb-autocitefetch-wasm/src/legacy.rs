//! Importing a legacy (pre-autocitefetch) ZooDb citation cache.
//!
//! The legacy file `cache_downloaded_info.json` was a JSON object
//! `{ "<prefix:key>": { "value": <entry>, "expire": <ms> | "NaN" } }`, where
//! `<entry>` is CSL-JSON (with `id`, `_hash`, possibly `_ready_formatted`) or a
//! pointer `{ "chained": { "cite_prefix", "cite_key", "set_properties" } }`.
//! The migration tool turns it into the `legacyEntries` array of the open
//! config, `[{ id, value, expire }]` with `expire` a number or `null`, and this
//! module turns each entry into a [`CacheRecord`] that the crate's own
//! `FileCacheStore` writes — JavaScript never serializes a record (hard
//! invariant 9 of the brief).
//!
//! Rules (section 7.7 of the brief), applied before the sources are
//! registered, with the sources already built:
//!
//! * `id` is split at the first `:`; a prefix with no source → skipped;
//! * the key is normalized by that prefix's source (`normalize_key`);
//! * `value.chained` → [`Payload::Chained`] to the target prefix with the key
//!   normalized by the target's source; `set_properties` defaults to `{}`; an
//!   unknown target prefix → skipped;
//! * otherwise [`Payload::Concrete`]: `_hash` removed, the configured dropped
//!   CSL fields removed, `id` set to the normalized `prefix:key`;
//! * TTL: a finite `expire` gives `expire − now` (≤ 0 → skipped); `null` (or
//!   absent) gives 365 days; the record is built by the manager's
//!   [`TtlPolicy::make_record`];
//! * an id already in the store → skipped (existing records win);
//! * entries that are not objects, lack a string `id` or a `value`, have an
//!   `id` without `:`, a non-object `value`, or a non-numeric `expire`, count
//!   as skipped.

use std::time::Duration;

use js_sys::{Array, Reflect};
use wasm_bindgen::{JsCast, JsValue};

use autocitefetch::csl;
use autocitefetch::{CacheRecord, CacheStore, CslValue, Payload, Source, Timestamp, TtlPolicy};

use crate::convert::from_js;
use crate::sources::Registration;

/// TTL given to a legacy entry that had no expiry (`"NaN"` → `null`).
pub const NO_EXPIRY_TTL: Duration = Duration::from_secs(365 * 24 * 60 * 60);

/// One legacy entry, after the shape checks.
#[derive(Debug, Clone, PartialEq)]
pub struct LegacyEntry {
    pub id: String,
    pub value: CslValue,
    /// Expiry in ms since the epoch; `None` = no expiry.
    pub expire: Option<f64>,
}

/// What the import needs besides the entries.
pub struct ImportContext<'a> {
    pub sources: &'a [Registration],
    pub dropped_fields: &'a [String],
    pub policy: &'a TtlPolicy,
    pub now: Timestamp,
}

impl ImportContext<'_> {
    fn source(&self, prefix: &str) -> Option<&dyn Source> {
        self.sources
            .iter()
            .find(|r| r.prefix == prefix)
            .map(|r| &r.source as &dyn Source)
    }
}

/// Parse one entry given as JSON (`{ id, value, expire }`); `None` if it does
/// not have that shape. The same rules as [`entry_from_js`], for host tests.
#[cfg(test)]
pub fn entry_from_json(v: &serde_json::Value) -> Option<LegacyEntry> {
    let obj = v.as_object()?;
    let id = obj.get("id")?.as_str()?.to_string();
    let value = obj.get("value")?.clone();
    let expire = match obj.get("expire") {
        None | Some(serde_json::Value::Null) => None,
        Some(e) => Some(e.as_f64()?),
    };
    if value.is_null() {
        return None;
    }
    Some(LegacyEntry { id, value, expire })
}

/// Parse one entry given as a JavaScript object; `None` if it does not have
/// the `{ id, value, expire }` shape.
pub fn entry_from_js(v: &JsValue) -> Option<LegacyEntry> {
    if !v.is_object() {
        return None;
    }
    let get = |k: &str| Reflect::get(v, &JsValue::from_str(k)).unwrap_or(JsValue::UNDEFINED);
    let id = get("id").as_string()?;
    let raw_value = get("value");
    if raw_value.is_undefined() || raw_value.is_null() {
        return None;
    }
    let value: CslValue = from_js(raw_value).ok()?;
    let raw_expire = get("expire");
    let expire = if raw_expire.is_undefined() || raw_expire.is_null() {
        None
    } else {
        Some(raw_expire.as_f64()?)
    };
    Some(LegacyEntry { id, value, expire })
}

/// Build the `(id, record)` for one entry, or `None` if it is to be skipped
/// (see the module docs). Does not look at the store.
pub fn build_record(entry: LegacyEntry, ctx: &ImportContext<'_>) -> Option<(String, CacheRecord)> {
    let (prefix, raw_key) = entry.id.split_once(':')?;
    let source = ctx.source(prefix)?;
    let key = source.normalize_key(raw_key);
    let id = format!("{prefix}:{key}");

    let ttl = match entry.expire {
        None => NO_EXPIRY_TTL,
        Some(expire) => {
            if !expire.is_finite() {
                return None;
            }
            let remaining = expire - ctx.now.as_millis() as f64;
            if remaining < 1.0 {
                // ≤ 0 is expired; below one ms rounds to a zero TTL, which the
                // crate would treat as ephemeral.
                return None;
            }
            Duration::try_from_secs_f64(remaining / 1000.0).ok()?
        }
    };

    let mut value = entry.value;
    let payload = match value.get("chained") {
        Some(chained) => {
            let target_prefix = chained.get("cite_prefix")?.as_str()?;
            let target_key = chained.get("cite_key")?.as_str()?;
            let target = ctx.source(target_prefix)?;
            let mut set_properties = match chained.get("set_properties") {
                None | Some(CslValue::Null) => CslValue::Object(serde_json::Map::new()),
                Some(v @ CslValue::Object(_)) => v.clone(),
                Some(_) => return None,
            };
            // As the manager does for fresh chains: a dropped field left in
            // `set_properties` would come back when merged over the target.
            csl::remove_fields(&mut set_properties, ctx.dropped_fields);
            Payload::Chained {
                prefix: target_prefix.to_string(),
                key: target.normalize_key(target_key),
                set_properties,
            }
        }
        None => {
            let obj = value.as_object_mut()?;
            obj.remove("_hash");
            csl::remove_fields(&mut value, ctx.dropped_fields);
            csl::set_id(&mut value, &id);
            Payload::Concrete(value)
        }
    };

    let record = ctx.policy.make_record(payload, ctx.now, ttl, &id);
    Some((id, record))
}

/// Import `entries` (a JavaScript array of `{ id, value, expire }`) into
/// `store`, then flush it once. Returns `(imported, skipped)`.
///
/// Rejects only on a cache store error.
pub async fn import<S: CacheStore>(
    store: &S,
    entries: &JsValue,
    ctx: &ImportContext<'_>,
) -> Result<(u32, u32), String> {
    let entries: &Array = entries
        .dyn_ref::<Array>()
        .ok_or_else(|| String::from("`legacyEntries` must be an array"))?;
    let mut imported = 0u32;
    let mut skipped = 0u32;
    for raw in entries.iter() {
        let Some((id, record)) = entry_from_js(&raw).and_then(|e| build_record(e, ctx)) else {
            skipped += 1;
            continue;
        };
        let existing = store
            .get(&id)
            .await
            .map_err(|e| format!("legacyEntries: cache store error reading `{id}`: {e}"))?;
        if existing.is_some() {
            skipped += 1;
            continue;
        }
        store
            .put(&id, record)
            .await
            .map_err(|e| format!("legacyEntries: cache store error writing `{id}`: {e}"))?;
        imported += 1;
    }
    store
        .flush()
        .await
        .map_err(|e| format!("legacyEntries: cache store error on flush: {e}"))?;
    Ok((imported, skipped))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::config::SourceSpec;
    use crate::sources;
    use serde_json::json;

    const NOW: i64 = 1_700_000_000_000;
    const DAY_MS: f64 = 24.0 * 60.0 * 60.0 * 1000.0;

    fn regs() -> Vec<Registration> {
        [
            json!({"kind": "arxiv", "prefix": "arxiv"}),
            json!({"kind": "doi", "prefix": "doi"}),
            json!({"kind": "manual", "prefix": "manual", "format": "flm"}),
        ]
        .into_iter()
        .map(|v| {
            let spec: SourceSpec = serde_json::from_value(v).unwrap();
            sources::build(spec, None).unwrap()
        })
        .collect()
    }

    fn policy() -> TtlPolicy {
        TtlPolicy {
            stale_percent: 80,
            jitter_percent: 0,
            grace: Duration::ZERO,
        }
    }

    fn build(v: serde_json::Value) -> Option<(String, CacheRecord)> {
        let regs = regs();
        let dropped = vec!["reference".to_string()];
        let policy = policy();
        let ctx = ImportContext {
            sources: &regs,
            dropped_fields: &dropped,
            policy: &policy,
            now: Timestamp::from_millis(NOW),
        };
        entry_from_json(&v).and_then(|e| build_record(e, &ctx))
    }

    #[test]
    fn concrete_entry_is_cleaned_and_keeps_its_expiry() {
        let (id, rec) = build(json!({
            "id": "arxiv:1310.2984",
            "value": {"id": "arxiv:1310.2984", "_hash": "abc", "title": "T",
                      "reference": [1, 2], "note": {"_hash": "nested stays"}},
            "expire": NOW as f64 + 10.0 * DAY_MS,
        }))
        .unwrap();
        assert_eq!(id, "arxiv:1310.2984");
        match rec.payload {
            Payload::Concrete(v) => {
                assert_eq!(
                    v,
                    json!({"id": "arxiv:1310.2984", "title": "T",
                           "note": {"_hash": "nested stays"}})
                );
            }
            other => panic!("{other:?}"),
        }
        assert_eq!(
            rec.expires.as_millis(),
            NOW + (10.0 * DAY_MS) as i64,
            "no jitter in this policy"
        );
        assert_eq!(rec.stale_after.as_millis(), NOW + (8.0 * DAY_MS) as i64);
    }

    #[test]
    fn chained_entry_points_at_the_normalized_target() {
        let (id, rec) = build(json!({
            "id": "arxiv:1902.07714",
            "value": {"chained": {"cite_prefix": "doi", "cite_key": "10.1103/PhysRevX.10.041018",
                                  "set_properties": {"arxivid": "1902.07714", "reference": []}}},
            "expire": null,
        }))
        .unwrap();
        assert_eq!(id, "arxiv:1902.07714");
        match rec.payload {
            Payload::Chained {
                prefix,
                key,
                set_properties,
            } => {
                assert_eq!(prefix, "doi");
                assert_eq!(key, "10.1103/physrevx.10.041018");
                assert_eq!(set_properties, json!({"arxivid": "1902.07714"}));
            }
            other => panic!("{other:?}"),
        }
        // `null` expire → 365 days
        assert_eq!(rec.expires.as_millis(), NOW + 365 * DAY_MS as i64);

        // set_properties defaults to {}
        let (_, rec) = build(json!({
            "id": "arxiv:1902.07714",
            "value": {"chained": {"cite_prefix": "doi", "cite_key": "10.1/x"}},
            "expire": null,
        }))
        .unwrap();
        assert!(matches!(rec.payload,
                         Payload::Chained { set_properties, .. } if set_properties == json!({})));
    }

    #[test]
    fn expired_entries_are_skipped() {
        let v =
            |expire: f64| json!({"id": "doi:10.1/x", "value": {"title": "T"}, "expire": expire});
        assert!(build(v(NOW as f64 - 1.0)).is_none());
        assert!(build(v(NOW as f64)).is_none());
        assert!(build(v(NOW as f64 + 5000.0)).is_some());
    }

    #[test]
    fn null_expire_gives_365_days() {
        let (_, rec) =
            build(json!({"id": "doi:10.1/x", "value": {"title": "T"}, "expire": null})).unwrap();
        assert_eq!(
            rec.expires.as_millis() - NOW,
            NO_EXPIRY_TTL.as_millis() as i64
        );
        // absent counts as null
        assert!(build(json!({"id": "doi:10.1/x", "value": {"title": "T"}})).is_some());
    }

    #[test]
    fn unknown_prefixes_are_skipped() {
        assert!(build(json!({"id": "nope:x", "value": {"title": "T"}, "expire": null})).is_none());
        // unknown chain target
        assert!(
            build(json!({"id": "arxiv:1902.07714",
                         "value": {"chained": {"cite_prefix": "nope", "cite_key": "k"}},
                         "expire": null}))
            .is_none()
        );
    }

    #[test]
    fn doi_ids_are_normalized() {
        let (id, rec) = build(json!({
            "id": "doi:10.1103/PhysRevX.10.041018",
            "value": {"id": "doi:10.1103/PhysRevX.10.041018", "DOI": "10.1103/PhysRevX.10.041018",
                      "_hash": "h"},
            "expire": null,
        }))
        .unwrap();
        assert_eq!(id, "doi:10.1103/physrevx.10.041018");
        match rec.payload {
            Payload::Concrete(v) => {
                assert_eq!(v["id"], json!("doi:10.1103/physrevx.10.041018"));
                // the CSL `DOI` field itself is data: kept verbatim
                assert_eq!(v["DOI"], json!("10.1103/PhysRevX.10.041018"));
                assert!(v.get("_hash").is_none());
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn malformed_entries_are_skipped() {
        assert!(build(json!("doi:10.1/x")).is_none());
        assert!(build(json!({"value": {"title": "T"}})).is_none());
        assert!(build(json!({"id": "doi:10.1/x"})).is_none());
        assert!(build(json!({"id": "doi:10.1/x", "value": null})).is_none());
        assert!(build(json!({"id": "no-colon", "value": {"title": "T"}})).is_none());
        assert!(build(json!({"id": "doi:10.1/x", "value": "text"})).is_none());
        assert!(build(json!({"id": "doi:10.1/x", "value": {"t": 1}, "expire": "NaN"})).is_none());
    }

    #[test]
    fn manual_keys_are_not_normalized() {
        let (id, _) =
            build(json!({"id": "manual: As Is ", "value": {"title": "T"}, "expire": null}))
                .unwrap();
        assert_eq!(id, "manual: As Is ");
    }
}
