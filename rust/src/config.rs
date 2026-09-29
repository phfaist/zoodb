//! The configuration handed to `CitationManager.open(config)`.
//!
//! Two layers:
//!
//! * **Plain data** ([`OpenConfigData`], [`SourceSpec`], [`TtlPolicySpec`],
//!   [`RetrySpec`]) — serde types with `deny_unknown_fields` and camelCase
//!   field names, deserialized through `serde_wasm_bindgen` (and, in the host
//!   unit tests, from `serde_json::Value`). A typo in a key is a rejection
//!   naming the key, never a silently ignored option.
//! * **JavaScript objects** that serde cannot deserialize — the `host`
//!   functions, each `sources[i].source` object of a `js` spec, and the
//!   `legacyEntries` array — are pulled out by hand in [`parse_open_config`]
//!   before the rest goes through serde, exactly as the pyo3 binding pulls
//!   Python objects out of its spec dicts. The keys `sources`, `host` and
//!   `legacyEntries` are therefore absent from [`OpenConfigData`] on purpose.
//!
//! JavaScript `undefined`-valued keys in the top-level config and in each
//! source spec are treated as absent (so `{ ttlMs: undefined }` means "no
//! override" and `{ chainDoisTo: undefined }` keeps the default `"doi"`); an
//! explicit `null` is a value (`chainDoisTo: null` disables DOI chaining).
//!
//! The numeric conversion helpers ([`chunk_size_from`], [`duration_from_ms`])
//! live here too, since JavaScript numbers (`Infinity` included) arrive as
//! `f64`.

use std::collections::BTreeMap;
use std::time::Duration;

use js_sys::{Array, Function, Object, Reflect};
use serde::{Deserialize, Deserializer};
use wasm_bindgen::{JsCast, JsValue};

use autocitefetch::{CslValue, RetryPolicy, TtlPolicy};

use crate::batching::BatchingOverride;
use crate::convert::from_js;

// --- plain data ----------------------------------------------------------------

/// The serde-deserializable part of the open config (everything except
/// `sources`, `host` and `legacyEntries`, which [`parse_open_config`] extracts
/// by hand).
#[derive(Debug, Deserialize)]
#[serde(deny_unknown_fields, rename_all = "camelCase")]
pub struct OpenConfigData {
    /// Directory holding the cache files, `/`-separated.
    pub cache_dir: String,
    /// Base name of the cache files (default `citations`).
    #[serde(default)]
    pub cache_base: Option<String>,
    /// Unique per process run; names this writer's sidecar log.
    pub writer_id: String,
    #[serde(default)]
    pub ttl_policy: Option<TtlPolicySpec>,
    #[serde(default)]
    pub retry: Option<RetrySpec>,
    #[serde(default)]
    pub max_chain_depth: Option<u32>,
    #[serde(default)]
    pub drop_csl_fields: Option<Vec<String>>,
    /// Minimum gap between *sample* progress events, in ms (default 1000; 0
    /// disables throttling). Parsed and validated here; consumed by the
    /// reporter (WP1b).
    #[serde(default)]
    pub throttle_events_ms: Option<f64>,
}

/// `ttlPolicy: { stalePercent?, jitterPercent?, graceDays? }`.
#[derive(Debug, Default, Deserialize)]
#[serde(deny_unknown_fields, rename_all = "camelCase")]
pub struct TtlPolicySpec {
    #[serde(default)]
    pub stale_percent: Option<u32>,
    #[serde(default)]
    pub jitter_percent: Option<u32>,
    #[serde(default)]
    pub grace_days: Option<f64>,
}

/// `retry: { maxRetries?, baseMs?, capMs?, honorRetryAfter? }`.
#[derive(Debug, Default, Deserialize)]
#[serde(deny_unknown_fields, rename_all = "camelCase")]
pub struct RetrySpec {
    #[serde(default)]
    pub max_retries: Option<u32>,
    #[serde(default)]
    pub base_ms: Option<f64>,
    #[serde(default)]
    pub cap_ms: Option<f64>,
    #[serde(default)]
    pub honor_retry_after: Option<bool>,
}

/// One citation source spec, tagged by `kind`. The `source` object of a `js`
/// spec is extracted by hand and is not part of this type.
#[derive(Debug, Deserialize)]
#[serde(
    tag = "kind",
    rename_all = "lowercase",
    rename_all_fields = "camelCase",
    deny_unknown_fields
)]
pub enum SourceSpec {
    Arxiv {
        prefix: String,
        /// Absent → `Some("doi")` default is kept (outer `None`); explicit
        /// `null` → `Some(None)`, chaining disabled.
        #[serde(default, deserialize_with = "double_option")]
        chain_dois_to: Option<Option<String>>,
        #[serde(default)]
        override_dois: Option<BTreeMap<String, Option<String>>>,
        #[serde(default)]
        chunk_size: Option<f64>,
        #[serde(default)]
        min_interval_ms: Option<f64>,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
    Doi {
        prefix: String,
        #[serde(default)]
        chunk_size: Option<f64>,
        #[serde(default)]
        min_interval_ms: Option<f64>,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
    Manual {
        prefix: String,
        format: String,
        #[serde(default)]
        chunk_size: Option<f64>,
        #[serde(default)]
        min_interval_ms: Option<f64>,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
    Bib {
        prefix: String,
        #[serde(default)]
        files: Option<Vec<String>>,
        #[serde(default)]
        entries: Option<serde_json::Map<String, CslValue>>,
        #[serde(default)]
        format: Option<String>,
        #[serde(default)]
        chunk_size: Option<f64>,
        #[serde(default)]
        min_interval_ms: Option<f64>,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
    Js {
        prefix: String,
        #[serde(default)]
        chunk_size: Option<f64>,
        #[serde(default)]
        min_interval_ms: Option<f64>,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
}

/// The overrides every spec kind accepts.
#[derive(Clone, Copy, Debug, Default, PartialEq)]
pub struct CommonOverrides {
    pub chunk_size: Option<f64>,
    pub min_interval_ms: Option<f64>,
    pub ttl_ms: Option<f64>,
}

impl SourceSpec {
    /// The spec's `kind` name.
    pub fn kind(&self) -> &'static str {
        match self {
            SourceSpec::Arxiv { .. } => "arxiv",
            SourceSpec::Doi { .. } => "doi",
            SourceSpec::Manual { .. } => "manual",
            SourceSpec::Bib { .. } => "bib",
            SourceSpec::Js { .. } => "js",
        }
    }

    /// The prefix the source is to be registered under.
    pub fn prefix(&self) -> &str {
        match self {
            SourceSpec::Arxiv { prefix, .. }
            | SourceSpec::Doi { prefix, .. }
            | SourceSpec::Manual { prefix, .. }
            | SourceSpec::Bib { prefix, .. }
            | SourceSpec::Js { prefix, .. } => prefix,
        }
    }

    /// `chunkSize` / `minIntervalMs` / `ttlMs`, whatever the kind.
    pub fn overrides(&self) -> CommonOverrides {
        match *self {
            SourceSpec::Arxiv {
                chunk_size,
                min_interval_ms,
                ttl_ms,
                ..
            }
            | SourceSpec::Doi {
                chunk_size,
                min_interval_ms,
                ttl_ms,
                ..
            }
            | SourceSpec::Manual {
                chunk_size,
                min_interval_ms,
                ttl_ms,
                ..
            }
            | SourceSpec::Bib {
                chunk_size,
                min_interval_ms,
                ttl_ms,
                ..
            }
            | SourceSpec::Js {
                chunk_size,
                min_interval_ms,
                ttl_ms,
                ..
            } => CommonOverrides {
                chunk_size,
                min_interval_ms,
                ttl_ms,
            },
        }
    }
}

/// Deserialize a present field into `Some(..)`, so that `Option<Option<T>>`
/// distinguishes an absent key (`None`, via `#[serde(default)]`) from an
/// explicit `null` (`Some(None)`).
fn double_option<'de, D, T>(de: D) -> Result<Option<Option<T>>, D::Error>
where
    D: Deserializer<'de>,
    T: Deserialize<'de>,
{
    Option::<T>::deserialize(de).map(Some)
}

// --- numeric conversions ----------------------------------------------------

/// A JavaScript `chunkSize` → `usize`. `Infinity` → `usize::MAX`; a positive
/// integer → itself (saturating); `0`, negatives, `-Infinity`, `NaN` and
/// non-integers are rejected.
pub fn chunk_size_from(v: f64) -> Result<usize, String> {
    if v.is_nan() {
        return Err("`chunkSize` must be a positive integer or Infinity, not NaN".into());
    }
    if v == f64::INFINITY {
        return Ok(usize::MAX);
    }
    if v < 1.0 || v.fract() != 0.0 {
        return Err(format!(
            "`chunkSize` must be a positive integer or Infinity, not {v}"
        ));
    }
    // `as` saturates for floats beyond usize::MAX.
    Ok(v as usize)
}

/// A JavaScript millisecond count → [`Duration`]. Must be `>= 0` and not
/// `NaN`; `+Infinity` is accepted (→ [`Duration::MAX`]) only when
/// `allow_infinite` is set.
pub fn duration_from_ms(v: f64, what: &str, allow_infinite: bool) -> Result<Duration, String> {
    if v.is_nan() || v < 0.0 {
        return Err(format!(
            "`{what}` must be a non-negative number of milliseconds, not {v}"
        ));
    }
    if v.is_infinite() {
        return if allow_infinite {
            Ok(Duration::MAX)
        } else {
            Err(format!("`{what}` must be a finite number of milliseconds"))
        };
    }
    Duration::try_from_secs_f64(v / 1000.0)
        .map_err(|e| format!("`{what}`: {v} ms is not a valid duration ({e})"))
}

// --- policies ---------------------------------------------------------------

impl TtlPolicySpec {
    /// The crate's default policy with the given fields overridden.
    pub fn build(&self) -> Result<TtlPolicy, String> {
        let mut policy = TtlPolicy::default();
        if let Some(v) = self.stale_percent {
            policy.stale_percent = v;
        }
        if let Some(v) = self.jitter_percent {
            policy.jitter_percent = v;
        }
        if let Some(days) = self.grace_days {
            if !days.is_finite() || days < 0.0 {
                return Err(format!(
                    "ttlPolicy: `graceDays` must be a finite non-negative number, not {days}"
                ));
            }
            policy.grace = Duration::try_from_secs_f64(days * 24.0 * 60.0 * 60.0)
                .map_err(|e| format!("ttlPolicy: `graceDays`: {e}"))?;
        }
        Ok(policy)
    }
}

impl RetrySpec {
    /// The crate's default retry policy with the given fields overridden.
    pub fn build(&self) -> Result<RetryPolicy, String> {
        let mut policy = RetryPolicy::default();
        if let Some(v) = self.max_retries {
            policy.max_retries = v;
        }
        if let Some(v) = self.base_ms {
            policy.base = duration_from_ms(v, "retry.baseMs", false)?;
        }
        if let Some(v) = self.cap_ms {
            policy.cap = duration_from_ms(v, "retry.capMs", false)?;
        }
        if let Some(v) = self.honor_retry_after {
            policy.honor_retry_after = v;
        }
        Ok(policy)
    }
}

impl OpenConfigData {
    /// Checks that do not need any JavaScript object.
    pub fn validate(&self) -> Result<(), String> {
        if self.cache_dir.is_empty() {
            return Err("`cacheDir` must not be empty (use '.' for the current directory)".into());
        }
        if let Some(base) = &self.cache_base {
            if base.is_empty() || base.contains('/') {
                return Err(format!(
                    "`cacheBase` must be a non-empty file base name without '/', not {base:?}"
                ));
            }
        }
        if self.writer_id.is_empty() || self.writer_id.contains('/') {
            return Err(format!(
                "`writerId` must be a non-empty name without '/', not {:?}",
                self.writer_id
            ));
        }
        if let Some(ms) = self.throttle_events_ms {
            duration_from_ms(ms, "throttleEventsMs", false)?;
        }
        Ok(())
    }

    /// `cacheBase`, defaulting to the crate's conventional `citations`.
    pub fn cache_base(&self) -> &str {
        self.cache_base.as_deref().unwrap_or("citations")
    }

    /// `throttleEventsMs` as a [`Duration`] (default 1000 ms; zero means
    /// "do not throttle"). For the reporter (WP1b).
    pub fn throttle_events(&self) -> Duration {
        self.throttle_events_ms
            .and_then(|ms| duration_from_ms(ms, "throttleEventsMs", false).ok())
            .unwrap_or(Duration::from_millis(1000))
    }
}

// --- JavaScript extraction ------------------------------------------------

/// The `host` functions, pulled out of the config by hand.
pub struct HostConfig {
    /// The `host` object itself; functions are called with it as `this`.
    pub this: JsValue,
    pub fetch: Function,
    /// The `cacheFs` object; its methods are looked up per call.
    pub cache_fs: JsValue,
    pub sleep: Option<Function>,
    pub now: Option<Function>,
    /// Synchronous progress callback, consumed by the reporter (WP1b).
    pub on_event: Option<Function>,
}

/// One source spec plus the JavaScript `source` object of a `js` spec and the
/// parsed `refreshBatching` override (both extracted by hand).
pub struct SpecEntry {
    pub spec: SourceSpec,
    pub js_source: Option<JsValue>,
    pub refresh_batching: Option<BatchingOverride>,
}

/// Everything `open` needs, parsed and validated.
pub struct ParsedConfig {
    pub data: OpenConfigData,
    pub sources: Vec<SpecEntry>,
    pub host: HostConfig,
    /// The raw `legacyEntries` array, if given (non-null). Imported by WP1b.
    pub legacy_entries: Option<JsValue>,
}

/// The keys of [`OpenConfigData`], [`TtlPolicySpec`] and [`RetrySpec`].
///
/// `serde_wasm_bindgen` deserializes a plain struct by looking up its declared
/// fields only, so `deny_unknown_fields` is not enforced on that path (it is
/// for the internally tagged [`SourceSpec`], which goes through
/// `deserialize_any`). [`reject_unknown_keys`] checks these lists by hand; the
/// `open_config_key_lists_match_the_structs` test keeps them in sync with the
/// serde types.
const OPEN_CONFIG_KEYS: &[&str] = &[
    "cacheDir",
    "cacheBase",
    "writerId",
    "ttlPolicy",
    "retry",
    "maxChainDepth",
    "dropCslFields",
    "throttleEventsMs",
];
const TTL_POLICY_KEYS: &[&str] = &["stalePercent", "jitterPercent", "graceDays"];
const RETRY_KEYS: &[&str] = &["maxRetries", "baseMs", "capMs", "honorRetryAfter"];

const HOST_KEYS: &[&str] = &["fetch", "cacheFs", "sleep", "now", "onEvent"];
const CACHE_FS_METHODS: &[&str] = &[
    "read",
    "append",
    "atomicReplace",
    "list",
    "remove",
    "lockExclusive",
    "tryLockExclusive",
];

fn get(obj: &JsValue, key: &str) -> JsValue {
    Reflect::get(obj, &JsValue::from_str(key)).unwrap_or(JsValue::UNDEFINED)
}

/// A shallow copy of a plain object's own enumerable properties, without the
/// keys in `remove` and without keys whose value is `undefined`.
fn shallow_copy(obj: &JsValue, remove: &[&str]) -> Object {
    let copy = Object::assign(&Object::new(), obj.unchecked_ref::<Object>());
    for key in Object::keys(&copy).iter() {
        let drop = match key.as_string() {
            Some(k) => remove.contains(&k.as_str()) || get(&copy, &k).is_undefined(),
            None => false,
        };
        if drop {
            let _ = Reflect::delete_property(&copy, &key);
        }
    }
    copy
}

/// An optional function-valued property: `undefined`/`null` → `None`.
fn opt_function(obj: &JsValue, key: &str, what: &str) -> Result<Option<Function>, String> {
    let v = get(obj, key);
    if v.is_undefined() || v.is_null() {
        return Ok(None);
    }
    v.dyn_into::<Function>()
        .map(Some)
        .map_err(|_| format!("{what}: `{key}` must be a function"))
}

/// Reject own enumerable keys of `obj` not in `allowed`, naming them.
fn reject_unknown_keys(obj: &JsValue, allowed: &[&str], what: &str) -> Result<(), String> {
    if !obj.is_object() {
        return Ok(()); // a type error is serde's to report
    }
    let mut unknown: Vec<String> = Object::keys(obj.unchecked_ref::<Object>())
        .iter()
        .filter_map(|k| k.as_string())
        .filter(|k| !allowed.contains(&k.as_str()))
        .collect();
    if unknown.is_empty() {
        return Ok(());
    }
    unknown.sort();
    Err(format!(
        "{what}: unknown key(s) {}; expected one of {}",
        unknown.join(", "),
        allowed.join(", ")
    ))
}

fn parse_host(host: JsValue) -> Result<HostConfig, String> {
    if !host.is_object() {
        return Err("`host` must be an object with the host functions".into());
    }
    reject_unknown_keys(&host, HOST_KEYS, "host")?;
    let fetch = opt_function(&host, "fetch", "host")?
        .ok_or_else(|| String::from("host: missing `fetch` function"))?;
    let cache_fs = get(&host, "cacheFs");
    if !cache_fs.is_object() {
        return Err("host: missing `cacheFs` object".into());
    }
    let missing: Vec<&str> = CACHE_FS_METHODS
        .iter()
        .copied()
        .filter(|m| !get(&cache_fs, m).is_function())
        .collect();
    if !missing.is_empty() {
        return Err(format!(
            "host.cacheFs: missing method(s) {}",
            missing.join(", ")
        ));
    }
    Ok(HostConfig {
        sleep: opt_function(&host, "sleep", "host")?,
        now: opt_function(&host, "now", "host")?,
        on_event: opt_function(&host, "onEvent", "host")?,
        fetch,
        cache_fs,
        this: host,
    })
}

fn parse_spec(index: usize, raw: JsValue) -> Result<SpecEntry, String> {
    if !raw.is_object() {
        return Err(format!(
            "citation source #{index}: a source spec must be an object"
        ));
    }
    let what = match get(&raw, "prefix").as_string() {
        Some(p) => format!("citation source `{p}:`"),
        None => format!("citation source #{index}"),
    };
    let source = get(&raw, "source");
    let js_source = if source.is_undefined() {
        None
    } else {
        Some(source)
    };
    let refresh_batching = parse_refresh_batching(get(&raw, "refreshBatching"), &what)?;
    let copy = shallow_copy(&raw, &["source", "refreshBatching"]);
    let spec: SourceSpec = from_js(copy.into()).map_err(|e| format!("{what}: {e}"))?;
    match (&spec, &js_source) {
        (SourceSpec::Js { .. }, None) => {
            return Err(format!(
                "{what}: a `js` source spec needs a `source` object"
            ));
        }
        (SourceSpec::Js { .. }, Some(_)) => {}
        (other, Some(_)) => {
            return Err(format!(
                "{what}: unknown field `source` for a `{}` spec (only `js` specs take one)",
                other.kind()
            ));
        }
        (_, None) => {}
    }
    Ok(SpecEntry {
        spec,
        js_source,
        refresh_batching,
    })
}

/// A spec's `refreshBatching` (`undefined`/`null` → none). `undefined`-valued
/// keys are dropped first, so `{ topUp: undefined }` leaves top-up alone rather
/// than reading as `null` (which turns it off).
fn parse_refresh_batching(raw: JsValue, what: &str) -> Result<Option<BatchingOverride>, String> {
    if raw.is_undefined() || raw.is_null() {
        return Ok(None);
    }
    let raw = if raw.is_object() && !Array::is_array(&raw) {
        let copy = shallow_copy(&raw, &[]);
        let top_up = get(&copy, "topUp");
        if top_up.is_object() && !Array::is_array(&top_up) {
            let _ = Reflect::set(&copy, &"topUp".into(), &shallow_copy(&top_up, &[]).into());
        }
        copy.into()
    } else {
        raw
    };
    let value: serde_json::Value =
        from_js(raw).map_err(|e| format!("{what}: `refreshBatching`: {e}"))?;
    BatchingOverride::parse(&value, what).map(Some)
}

/// Parse and validate the `open` config object.
pub fn parse_open_config(config: &JsValue) -> Result<ParsedConfig, String> {
    if !config.is_object() {
        return Err("the open config must be an object".into());
    }

    let host = parse_host(get(config, "host"))?;

    let legacy = get(config, "legacyEntries");
    let legacy_entries = if legacy.is_undefined() || legacy.is_null() {
        None
    } else if Array::is_array(&legacy) {
        Some(legacy)
    } else {
        return Err("`legacyEntries` must be an array".into());
    };

    let sources_raw = get(config, "sources");
    if !Array::is_array(&sources_raw) {
        return Err("`sources` must be an array of source specs".into());
    }
    let mut sources = Vec::new();
    for (i, raw) in sources_raw.unchecked_into::<Array>().iter().enumerate() {
        sources.push(parse_spec(i, raw)?);
    }

    let copy = shallow_copy(config, &["host", "legacyEntries", "sources"]);
    reject_unknown_keys(&copy, OPEN_CONFIG_KEYS, "open config")?;
    reject_unknown_keys(&get(&copy, "ttlPolicy"), TTL_POLICY_KEYS, "ttlPolicy")?;
    reject_unknown_keys(&get(&copy, "retry"), RETRY_KEYS, "retry")?;
    let data: OpenConfigData = from_js(copy.into()).map_err(|e| format!("open config: {e}"))?;
    data.validate()?;

    Ok(ParsedConfig {
        data,
        sources,
        host,
        legacy_entries,
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    fn spec(v: serde_json::Value) -> Result<SourceSpec, String> {
        serde_json::from_value(v).map_err(|e| e.to_string())
    }

    #[test]
    fn arxiv_chain_dois_to_absent_null_and_string() {
        match spec(json!({"kind": "arxiv", "prefix": "arxiv"})).unwrap() {
            SourceSpec::Arxiv { chain_dois_to, .. } => assert_eq!(chain_dois_to, None),
            other => panic!("{other:?}"),
        }
        match spec(json!({"kind": "arxiv", "prefix": "arxiv", "chainDoisTo": null})).unwrap() {
            SourceSpec::Arxiv { chain_dois_to, .. } => assert_eq!(chain_dois_to, Some(None)),
            other => panic!("{other:?}"),
        }
        match spec(json!({"kind": "arxiv", "prefix": "arxiv", "chainDoisTo": "dx"})).unwrap() {
            SourceSpec::Arxiv { chain_dois_to, .. } => {
                assert_eq!(chain_dois_to, Some(Some("dx".into())))
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn arxiv_override_dois_accepts_null_values() {
        let s = spec(json!({
            "kind": "arxiv", "prefix": "arxiv",
            "overrideDois": {"1211.1037": "10.1/x", "0704.0001": null}
        }))
        .unwrap();
        let SourceSpec::Arxiv {
            override_dois: Some(map),
            ..
        } = s
        else {
            panic!("{s:?}")
        };
        assert_eq!(map["1211.1037"], Some("10.1/x".into()));
        assert_eq!(map["0704.0001"], None);
    }

    #[test]
    fn common_overrides_are_read_for_every_kind() {
        for kind in ["arxiv", "doi", "js"] {
            let s = spec(json!({"kind": kind, "prefix": "p", "chunkSize": 3,
                                "minIntervalMs": 10.5, "ttlMs": 0}))
            .unwrap();
            assert_eq!(s.kind(), kind);
            assert_eq!(s.prefix(), "p");
            assert_eq!(
                s.overrides(),
                CommonOverrides {
                    chunk_size: Some(3.0),
                    min_interval_ms: Some(10.5),
                    ttl_ms: Some(0.0)
                }
            );
        }
    }

    #[test]
    fn unknown_keys_are_rejected_by_name() {
        let err = spec(json!({"kind": "doi", "prefix": "doi", "chunk_size": 1})).unwrap_err();
        assert!(err.contains("chunk_size"), "{err}");
        // A field of another kind is unknown here too.
        let err = spec(json!({"kind": "doi", "prefix": "doi", "files": []})).unwrap_err();
        assert!(err.contains("files"), "{err}");
        let err = spec(json!({"kind": "nope", "prefix": "x"})).unwrap_err();
        assert!(err.contains("nope"), "{err}");
    }

    #[test]
    fn manual_requires_format_and_bib_takes_files_entries_format() {
        assert!(
            spec(json!({"kind": "manual", "prefix": "m"}))
                .unwrap_err()
                .contains("format")
        );
        let s = spec(
            json!({"kind": "bib", "prefix": "b", "files": ["file:///x.yaml"],
                            "format": "auto"}),
        )
        .unwrap();
        let SourceSpec::Bib {
            files,
            entries,
            format,
            ..
        } = s
        else {
            panic!()
        };
        assert_eq!(files.unwrap(), vec!["file:///x.yaml".to_string()]);
        assert!(entries.is_none());
        assert_eq!(format.as_deref(), Some("auto"));
        let s = spec(json!({"kind": "bib", "prefix": "b",
                            "entries": {"k": {"title": "T"}}}))
        .unwrap();
        let SourceSpec::Bib {
            entries: Some(entries),
            ..
        } = s
        else {
            panic!()
        };
        assert_eq!(entries["k"]["title"], "T");
    }

    #[test]
    fn open_config_data_parses_and_rejects_unknown_keys() {
        let d: OpenConfigData = serde_json::from_value(json!({
            "cacheDir": "/cache", "writerId": "w1",
            "ttlPolicy": {"stalePercent": 70, "graceDays": 1.5},
            "retry": {"maxRetries": 2, "baseMs": 10, "capMs": 100, "honorRetryAfter": false},
            "maxChainDepth": 4, "dropCslFields": ["reference"], "throttleEventsMs": 0
        }))
        .unwrap();
        d.validate().unwrap();
        assert_eq!(d.cache_base(), "citations");
        assert_eq!(d.throttle_events(), Duration::ZERO);
        let ttl = d.ttl_policy.as_ref().unwrap().build().unwrap();
        assert_eq!(ttl.stale_percent, 70);
        assert_eq!(ttl.jitter_percent, TtlPolicy::default().jitter_percent);
        assert_eq!(ttl.grace, Duration::from_secs(36 * 3600));
        let retry = d.retry.as_ref().unwrap().build().unwrap();
        assert_eq!(retry.max_retries, 2);
        assert_eq!(retry.base, Duration::from_millis(10));
        assert_eq!(retry.cap, Duration::from_millis(100));
        assert!(!retry.honor_retry_after);

        let err = serde_json::from_value::<OpenConfigData>(json!({
            "cacheDir": ".", "writerId": "w", "cacheFile": "x"
        }))
        .unwrap_err()
        .to_string();
        assert!(err.contains("cacheFile"), "{err}");
        let err = serde_json::from_value::<OpenConfigData>(json!({
            "cacheDir": ".", "writerId": "w", "retry": {"max_retries": 1}
        }))
        .unwrap_err()
        .to_string();
        assert!(err.contains("max_retries"), "{err}");
    }

    #[test]
    fn open_config_data_validation() {
        let d = |v| {
            serde_json::from_value::<OpenConfigData>(v)
                .unwrap()
                .validate()
        };
        assert!(
            d(json!({"cacheDir": "", "writerId": "w"}))
                .unwrap_err()
                .contains("cacheDir")
        );
        assert!(
            d(json!({"cacheDir": ".", "writerId": ""}))
                .unwrap_err()
                .contains("writerId")
        );
        assert!(
            d(json!({"cacheDir": ".", "writerId": "w", "cacheBase": "a/b"}))
                .unwrap_err()
                .contains("cacheBase")
        );
        assert!(
            d(json!({"cacheDir": ".", "writerId": "w", "throttleEventsMs": -1}))
                .unwrap_err()
                .contains("throttleEventsMs")
        );
        let dd: OpenConfigData =
            serde_json::from_value(json!({"cacheDir": ".", "writerId": "w"})).unwrap();
        assert_eq!(dd.throttle_events(), Duration::from_millis(1000));
    }

    #[test]
    fn open_config_key_lists_match_the_structs() {
        // Every listed key is accepted by serde...
        let mut all = serde_json::Map::new();
        for k in OPEN_CONFIG_KEYS {
            all.insert((*k).into(), serde_json::Value::Null);
        }
        all.insert("cacheDir".into(), json!("."));
        all.insert("writerId".into(), json!("w"));
        serde_json::from_value::<OpenConfigData>(serde_json::Value::Object(all)).unwrap();
        let obj = |keys: &[&str]| {
            serde_json::Value::Object(
                keys.iter()
                    .map(|k| ((*k).to_string(), serde_json::Value::Null))
                    .collect(),
            )
        };
        serde_json::from_value::<TtlPolicySpec>(obj(TTL_POLICY_KEYS)).unwrap();
        serde_json::from_value::<RetrySpec>(obj(RETRY_KEYS)).unwrap();
        // ...and serde knows no others: its "expected one of" list matches.
        let err = serde_json::from_value::<OpenConfigData>(json!({"zzz": 1}))
            .unwrap_err()
            .to_string();
        for k in OPEN_CONFIG_KEYS {
            assert!(err.contains(&format!("`{k}`")), "{k} missing from {err}");
        }
        assert_eq!(
            err.matches('`').count(),
            2 * (OPEN_CONFIG_KEYS.len() + 1),
            "{err}"
        );
        let err = serde_json::from_value::<TtlPolicySpec>(json!({"zzz": 1}))
            .unwrap_err()
            .to_string();
        assert_eq!(
            err.matches('`').count(),
            2 * (TTL_POLICY_KEYS.len() + 1),
            "{err}"
        );
        let err = serde_json::from_value::<RetrySpec>(json!({"zzz": 1}))
            .unwrap_err()
            .to_string();
        assert_eq!(
            err.matches('`').count(),
            2 * (RETRY_KEYS.len() + 1),
            "{err}"
        );
    }

    #[test]
    fn chunk_size_conversion() {
        assert_eq!(chunk_size_from(f64::INFINITY), Ok(usize::MAX));
        assert_eq!(chunk_size_from(1.0), Ok(1));
        assert_eq!(chunk_size_from(100.0), Ok(100));
        assert_eq!(chunk_size_from(1e300), Ok(usize::MAX));
        assert!(chunk_size_from(0.0).is_err());
        assert!(chunk_size_from(-3.0).is_err());
        assert!(chunk_size_from(f64::NEG_INFINITY).is_err());
        assert!(chunk_size_from(f64::NAN).is_err());
        assert!(chunk_size_from(2.5).is_err());
    }

    #[test]
    fn duration_conversion() {
        assert_eq!(duration_from_ms(0.0, "ttlMs", true), Ok(Duration::ZERO));
        assert_eq!(
            duration_from_ms(1500.0, "ttlMs", true),
            Ok(Duration::from_millis(1500))
        );
        assert_eq!(
            duration_from_ms(f64::INFINITY, "ttlMs", true),
            Ok(Duration::MAX)
        );
        assert!(duration_from_ms(f64::INFINITY, "minIntervalMs", false).is_err());
        assert!(
            duration_from_ms(-1.0, "ttlMs", true)
                .unwrap_err()
                .contains("ttlMs")
        );
        assert!(duration_from_ms(f64::NAN, "ttlMs", true).is_err());
    }

    #[test]
    fn ttl_policy_rejects_negative_grace() {
        let p = TtlPolicySpec {
            grace_days: Some(-1.0),
            ..Default::default()
        };
        assert!(p.build().unwrap_err().contains("graceDays"));
    }
}
