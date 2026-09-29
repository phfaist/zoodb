//! Turning source specs into registered sources.
//!
//! A spec is one object per citation prefix, e.g.
//!
//! ```js
//! { kind: 'arxiv', prefix: 'arxiv', chainDoisTo: 'doi' }
//! { kind: 'bib',   prefix: 'preset', files: ['file:///abs/refs.yaml'], format: 'auto' }
//! { kind: 'js',    prefix: 'custom', source: { retrieveChunk(keys, ctx) { … } }, ttlMs: 3600000 }
//! ```
//!
//! Two properties of the library shape this module (mirroring the pyo3
//! binding in `flm-citations`).
//!
//! **A source owns no prefix.** `(prefix, source)` is a binding the manager
//! holds, made by `register(prefix, source)`, so `kind` and `prefix` are
//! independent.
//!
//! **A chain target is configuration.** `ArxivSource::chain_dois_to` (and a
//! `js` source's `chainsTo`) name prefixes that nothing guarantees exist. The
//! library treats a dangling target as a per-citation failure at retrieval
//! time; for a config read once at startup it is much better to say so
//! immediately, which is what [`check_chain_targets`] does with
//! `Source::chains_to`.
//!
//! Every kind also takes the overrides `chunkSize`, `minIntervalMs` and
//! `ttlMs`, applied by the [`BoxedSource`] wrapper.

use std::collections::HashSet;
use std::time::Duration;

use js_sys::{Array, Function, Object, Reflect};
use serde::Deserialize;
use wasm_bindgen::{JsCast, JsValue};
use wasm_bindgen_futures::JsFuture;

use autocitefetch::source::{
    ArxivSource, BibliographyFileSource, DoiSource, ManualSource, Outcome, Resolution, RetrieveCtx,
    Source,
};
use autocitefetch::{BoxFuture, CslValue, Error, RefreshBatching};

use crate::config::{SourceSpec, chunk_size_from, duration_from_ms};
use crate::convert::{console_error, error_message, from_js};
use crate::formats::{self, Format};

/// The message of the `missing` failure recorded for a key a `js` source
/// returned no resolution for.
pub const NO_RESOLUTION_MESSAGE: &str = "source returned no resolution for this key";

/// One `(prefix, source)` binding.
pub struct Registration {
    pub prefix: String,
    pub source: BoxedSource,
}

impl std::fmt::Debug for Registration {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Registration")
            .field("prefix", &self.prefix)
            .field("chains_to", &self.source.chains_to())
            .finish_non_exhaustive()
    }
}

/// A `Box<dyn Source>` that is itself a [`Source`], with optional overrides
/// of `chunk_size`, `min_interval` and `default_ttl` (from the spec's
/// `chunkSize`, `minIntervalMs`, `ttlMs`).
///
/// `CitationManager::register` takes `impl Source + 'static`, and
/// `Box<dyn Source>` does not implement the trait it points at, hence the
/// newtype. **Every** trait method is forwarded, including the ones with
/// defaults: forgetting one would silently substitute the trait default and,
/// for `normalize_key`, quietly lowercase a manual citation's text or an
/// old-style arXiv id's subject class.
pub struct BoxedSource {
    inner: Box<dyn Source>,
    chunk_size: Option<usize>,
    min_interval: Option<Duration>,
    default_ttl: Option<Duration>,
}

impl Source for BoxedSource {
    fn chunk_size(&self) -> usize {
        self.chunk_size.unwrap_or_else(|| self.inner.chunk_size())
    }

    fn min_interval(&self) -> Duration {
        self.min_interval
            .unwrap_or_else(|| self.inner.min_interval())
    }

    fn default_ttl(&self) -> Duration {
        self.default_ttl.unwrap_or_else(|| self.inner.default_ttl())
    }

    fn normalize_key(&self, key: &str) -> String {
        self.inner.normalize_key(key)
    }

    fn chains_to(&self) -> Vec<&str> {
        self.inner.chains_to()
    }

    fn refresh_batching(&self) -> RefreshBatching {
        // The spec's `refreshBatching` is applied on the manager
        // (`with_refresh_batching`), on top of this default.
        self.inner.refresh_batching()
    }

    fn retrieve_chunk<'a>(
        &'a self,
        keys: Vec<String>,
        ctx: &'a RetrieveCtx<'a>,
    ) -> BoxFuture<'a, Vec<Resolution>> {
        self.inner.retrieve_chunk(keys, ctx)
    }
}

/// Build one registration from a parsed spec (plus the `source` object of a
/// `js` spec). Errors are prefixed with ``citation source `prefix:` ``.
pub fn build(spec: SourceSpec, js_source: Option<JsValue>) -> Result<Registration, String> {
    let prefix = spec.prefix().to_string();
    let what = format!("citation source `{prefix}:`");

    // `register` rejects these too, but only once every source is built;
    // saying it here names the offending spec.
    if prefix.is_empty() || prefix.contains(':') {
        return Err(format!(
            "{what}: a citation prefix must be non-empty and must not contain `:` \
             (citation ids are `prefix:key`, split at the first colon)"
        ));
    }

    let overrides = spec.overrides();
    let chunk_size = overrides
        .chunk_size
        .map(chunk_size_from)
        .transpose()
        .map_err(|e| format!("{what}: {e}"))?;
    let min_interval = overrides
        .min_interval_ms
        .map(|v| duration_from_ms(v, "minIntervalMs", false))
        .transpose()
        .map_err(|e| format!("{what}: {e}"))?;
    let default_ttl = overrides
        .ttl_ms
        .map(|v| duration_from_ms(v, "ttlMs", true))
        .transpose()
        .map_err(|e| format!("{what}: {e}"))?;

    let inner: Box<dyn Source> = match spec {
        SourceSpec::Arxiv {
            chain_dois_to,
            override_dois,
            ..
        } => {
            let mut source = ArxivSource::new();
            // Absent keeps the default (`doi`); explicit `null` disables
            // chaining — the pyo3 binding's handling of `chain_dois_to`.
            match chain_dois_to {
                None => {}
                Some(None) => source = source.chain_dois_to(None),
                Some(Some(target)) => source = source.chain_dois_to(Some(&target)),
            }
            if let Some(map) = override_dois {
                source = source.with_override_dois(map);
            }
            Box::new(source)
        }
        SourceSpec::Doi { .. } => Box::new(DoiSource::new()),
        SourceSpec::Manual { format, .. } => Box::new(ManualSource::new(format)),
        SourceSpec::Bib {
            files,
            entries,
            format,
            ..
        } => {
            // Validate the format name even when it is moot (entries).
            let format = match format {
                Some(name) => Format::parse(&name).map_err(|e| format!("{what}: {e}"))?,
                None => Format::Auto,
            };
            match (files, entries) {
                (Some(_), Some(_)) => {
                    return Err(format!(
                        "{what}: give either `files` or `entries`, not both"
                    ));
                }
                (None, None) => {
                    return Err(format!("{what}: a `bib` source needs `files` or `entries`"));
                }
                (Some(files), None) => Box::new(
                    BibliographyFileSource::new(files).with_parser(formats::parser_for(format)),
                ),
                (None, Some(entries)) => Box::new(BibliographyFileSource::from_entries(entries)),
            }
        }
        SourceSpec::Js { .. } => {
            let obj = js_source
                .ok_or_else(|| format!("{what}: a `js` source spec needs a `source` object"))?;
            Box::new(JsSource::from_object(obj).map_err(|e| format!("{what}: {e}"))?)
        }
    };

    Ok(Registration {
        prefix,
        source: BoxedSource {
            inner,
            chunk_size,
            min_interval,
            default_ttl,
        },
    })
}

/// Reject a chain target with no source behind it.
///
/// The realistic mistake this catches: renaming the DOI source's prefix
/// without updating arXiv's `chainDoisTo`, which would otherwise turn every
/// chained arXiv citation into a retrieval failure long after the config was
/// read.
pub fn check_chain_targets(registrations: &[Registration]) -> Result<(), String> {
    let known: Vec<&str> = registrations.iter().map(|r| r.prefix.as_str()).collect();
    for reg in registrations {
        for target in reg.source.chains_to() {
            if !known.contains(&target) {
                return Err(format!(
                    "the `{}:` citation source chains to `{target}:`, but no citation source is \
                     registered under that prefix (registered: {})",
                    reg.prefix,
                    known.join(", "),
                ));
            }
        }
    }
    Ok(())
}

/// Reject two sources claiming one prefix.
///
/// `register` would silently let the later one replace the earlier —
/// reasonable for a library whose caller is code, wrong for a config where it
/// means one of the two sources is doing nothing.
pub fn check_unique_prefixes(registrations: &[Registration]) -> Result<(), String> {
    let mut seen: HashSet<&str> = HashSet::new();
    let mut dups: Vec<&str> = registrations
        .iter()
        .map(|r| r.prefix.as_str())
        .filter(|p| !seen.insert(p))
        .collect();
    if dups.is_empty() {
        return Ok(());
    }
    dups.sort_unstable();
    dups.dedup();
    Err(format!(
        "more than one citation source registered under the prefix(es) {}; \
         each prefix needs its own",
        dups.join(", ")
    ))
}

// --- JavaScript sources -----------------------------------------------------------

/// A resolution as returned by `retrieveChunk`, tagged by `outcome`.
#[derive(Debug, Deserialize)]
#[serde(
    tag = "outcome",
    rename_all = "lowercase",
    rename_all_fields = "camelCase",
    deny_unknown_fields
)]
enum JsResolution {
    Concrete {
        key: String,
        csl: CslValue,
        #[serde(default)]
        ttl_ms: Option<f64>,
    },
    Chained {
        key: String,
        prefix: String,
        target_key: String,
        #[serde(default)]
        set_properties: Option<CslValue>,
    },
    Failed {
        key: String,
        message: String,
    },
    Missing {
        key: String,
        message: String,
    },
}

impl JsResolution {
    fn into_resolution(self) -> Result<Resolution, String> {
        Ok(match self {
            JsResolution::Concrete { key, csl, ttl_ms } => {
                if !csl.is_object() {
                    return Err(format!("`csl` of key `{key}` must be an object"));
                }
                let ttl = ttl_ms
                    .map(|v| duration_from_ms(v, "ttlMs", true))
                    .transpose()
                    .map_err(|e| format!("key `{key}`: {e}"))?;
                Resolution {
                    key,
                    outcome: Outcome::Concrete { csl, ttl },
                }
            }
            JsResolution::Chained {
                key,
                prefix,
                target_key,
                set_properties,
            } => {
                let set_properties = match set_properties {
                    None | Some(CslValue::Null) => CslValue::Object(serde_json::Map::new()),
                    Some(v @ CslValue::Object(_)) => v,
                    Some(_) => {
                        return Err(format!("`setProperties` of key `{key}` must be an object"));
                    }
                };
                Resolution::chained(key, prefix, target_key, set_properties)
            }
            JsResolution::Failed { key, message } => {
                Resolution::failed(key, Error::Source(message))
            }
            JsResolution::Missing { key, message } => {
                Resolution::missing(key, Error::Source(message))
            }
        })
    }
}

/// A [`Source`] implemented by a JavaScript object:
///
/// ```ts
/// interface JsSourceObject {
///   retrieveChunk(keys: string[], ctx: { prefix: string }): Promise<JsResolution[]>;
///   normalizeKey?(key: string): string;     // default: trim
///   chainsTo?: string[];                    // default []
/// }
/// ```
///
/// One `Resolution` per key: keys with no resolution are reported `missing`
/// with [`NO_RESOLUTION_MESSAGE`]; a rejected promise (or synchronous throw)
/// or an unconvertible result fails **every** key of the chunk with that
/// message. JavaScript sources do their own retries (design decision D10):
/// they do not go through the crate's `RetryingFetcher`.
///
/// **Re-entrancy.** `retrieveChunk` runs inside the manager's `retrieve`. It
/// may call the read-only methods `get`, `getMany` and `keys` on the same
/// manager (they are served from memory and do not queue), but it must
/// **not** call `retrieve`, `prune` or `flush` on it: those are serialized
/// behind the running `retrieve` (see `Inner::exclusive` in `lib.rs`), so
/// awaiting one from inside `retrieveChunk` would deadlock.
pub struct JsSource {
    obj: JsValue,
    retrieve_chunk: Function,
    normalize: Option<Function>,
    chains_to: Vec<String>,
}

impl JsSource {
    /// Read the methods off a JS source object.
    pub fn from_object(obj: JsValue) -> Result<Self, String> {
        if !obj.is_object() && !obj.is_function() {
            return Err("`source` must be an object with a retrieveChunk() method".into());
        }
        let get = |k: &str| Reflect::get(&obj, &JsValue::from_str(k)).unwrap_or(JsValue::UNDEFINED);
        let retrieve_chunk = get("retrieveChunk")
            .dyn_into::<Function>()
            .map_err(|_| String::from("`source.retrieveChunk` must be a function"))?;
        let normalize = match get("normalizeKey") {
            v if v.is_undefined() || v.is_null() => None,
            v => Some(
                v.dyn_into::<Function>()
                    .map_err(|_| String::from("`source.normalizeKey` must be a function"))?,
            ),
        };
        let chains_to = match get("chainsTo") {
            v if v.is_undefined() || v.is_null() => Vec::new(),
            v if Array::is_array(&v) => v
                .unchecked_into::<Array>()
                .iter()
                .map(|p| {
                    p.as_string()
                        .ok_or_else(|| String::from("`source.chainsTo` must hold prefix strings"))
                })
                .collect::<Result<_, _>>()?,
            _ => return Err("`source.chainsTo` must be an array of prefix strings".into()),
        };
        Ok(JsSource {
            obj,
            retrieve_chunk,
            normalize,
            chains_to,
        })
    }

    /// Call `retrieveChunk(keys, {prefix})` and convert its result.
    async fn call(&self, keys: &[String], prefix: &str) -> Result<Vec<Resolution>, String> {
        let js_keys: Array = keys.iter().map(|k| JsValue::from_str(k)).collect();
        let ctx = Object::new();
        let _ = Reflect::set(
            &ctx,
            &JsValue::from_str("prefix"),
            &JsValue::from_str(prefix),
        );
        let ret = self
            .retrieve_chunk
            .call2(&self.obj, &js_keys, &ctx)
            .map_err(|e| error_message(&e))?;
        let value = JsFuture::from(js_sys::Promise::resolve(&ret))
            .await
            .map_err(|e| error_message(&e))?;
        if !Array::is_array(&value) {
            return Err("retrieveChunk() must resolve to an array of resolutions".into());
        }
        value
            .unchecked_into::<Array>()
            .iter()
            .enumerate()
            .map(|(i, item)| {
                from_js::<JsResolution>(item)
                    .and_then(JsResolution::into_resolution)
                    .map_err(|e| {
                        format!("retrieveChunk() returned an invalid resolution #{i}: {e}")
                    })
            })
            .collect()
    }
}

impl Source for JsSource {
    // `chunk_size`, `min_interval`, `default_ttl`: trait defaults, normally
    // overridden by the spec through `BoxedSource`.

    fn normalize_key(&self, key: &str) -> String {
        // Default (D12): trim only, never lowercase. A `normalizeKey` that
        // throws or returns a non-string falls back to the default, since the
        // trait method cannot fail; the problem is logged via `console.error`.
        let default = || key.trim().to_string();
        let Some(f) = &self.normalize else {
            return default();
        };
        match f.call1(&self.obj, &JsValue::from_str(key)) {
            Ok(v) => match v.as_string() {
                Some(s) => s,
                None => {
                    console_error(
                        &format!(
                            "source.normalizeKey({key:?}) did not return a string; \
                             using the trimmed key instead"
                        ),
                        Some(&v),
                    );
                    default()
                }
            },
            Err(e) => {
                console_error(
                    &format!(
                        "source.normalizeKey({key:?}) threw ({}); using the trimmed key instead",
                        error_message(&e)
                    ),
                    Some(&e),
                );
                default()
            }
        }
    }

    fn chains_to(&self) -> Vec<&str> {
        self.chains_to.iter().map(String::as_str).collect()
    }

    fn retrieve_chunk<'a>(
        &'a self,
        keys: Vec<String>,
        ctx: &'a RetrieveCtx<'a>,
    ) -> BoxFuture<'a, Vec<Resolution>> {
        Box::pin(async move {
            match self.call(&keys, ctx.prefix).await {
                Ok(mut resolutions) => {
                    let answered: HashSet<String> =
                        resolutions.iter().map(|r| r.key.clone()).collect();
                    for key in keys {
                        if !answered.contains(&key) {
                            resolutions.push(Resolution::missing(
                                key,
                                Error::Source(NO_RESOLUTION_MESSAGE.into()),
                            ));
                        }
                    }
                    resolutions
                }
                Err(message) => keys
                    .into_iter()
                    .map(|k| Resolution::failed(k, Error::Source(message.clone())))
                    .collect(),
            }
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    fn reg(v: serde_json::Value) -> Result<Registration, String> {
        let spec: SourceSpec = serde_json::from_value(v).map_err(|e| e.to_string())?;
        build(spec, None)
    }

    #[test]
    fn arxiv_chains_to_doi_by_default_and_null_disables() {
        let r = reg(json!({"kind": "arxiv", "prefix": "arxiv"})).unwrap();
        assert_eq!(r.source.chains_to(), vec!["doi"]);
        let r = reg(json!({"kind": "arxiv", "prefix": "arxiv", "chainDoisTo": null})).unwrap();
        assert!(r.source.chains_to().is_empty());
        let r = reg(json!({"kind": "arxiv", "prefix": "arxiv", "chainDoisTo": "dx"})).unwrap();
        assert_eq!(r.source.chains_to(), vec!["dx"]);
    }

    #[test]
    fn boxed_source_forwards_and_overrides() {
        let r = reg(json!({"kind": "arxiv", "prefix": "arxiv"})).unwrap();
        assert_eq!(r.source.chunk_size(), 100);
        assert_eq!(r.source.min_interval(), Duration::from_millis(3100));
        // arXiv trims but does not lowercase.
        assert_eq!(
            r.source.normalize_key(" math.AG/0601001 "),
            "math.AG/0601001"
        );
        let r = reg(json!({"kind": "manual", "prefix": "m", "format": "flm"})).unwrap();
        assert_eq!(r.source.normalize_key(" As Is "), " As Is ");
        assert_eq!(r.source.default_ttl(), Duration::ZERO);
        let r = reg(json!({"kind": "doi", "prefix": "doi"})).unwrap();
        assert_eq!(r.source.normalize_key(" 10.1/AbC "), "10.1/abc");

        let r = reg(json!({"kind": "doi", "prefix": "doi", "chunkSize": 7,
                           "minIntervalMs": 0, "ttlMs": 0}))
        .unwrap();
        assert_eq!(r.source.chunk_size(), 7);
        assert_eq!(r.source.min_interval(), Duration::ZERO);
        assert_eq!(r.source.default_ttl(), Duration::ZERO);
    }

    #[test]
    fn chunk_size_zero_is_rejected_with_context() {
        let err = reg(json!({"kind": "doi", "prefix": "doi", "chunkSize": 0})).unwrap_err();
        assert!(err.contains("citation source `doi:`"), "{err}");
        assert!(err.contains("chunkSize"), "{err}");
    }

    #[test]
    fn bib_needs_exactly_one_of_files_and_entries() {
        let err =
            reg(json!({"kind": "bib", "prefix": "bib", "files": [], "entries": {}})).unwrap_err();
        assert!(err.contains("citation source `bib:`"), "{err}");
        assert!(err.contains("not both"), "{err}");
        let err = reg(json!({"kind": "bib", "prefix": "bib"})).unwrap_err();
        assert!(err.contains("`files` or `entries`"), "{err}");
        assert!(reg(json!({"kind": "bib", "prefix": "bib", "files": ["file:///a.json"]})).is_ok());
        assert!(reg(json!({"kind": "bib", "prefix": "bib", "entries": {"a": {}}})).is_ok());
        let err = reg(json!({"kind": "bib", "prefix": "bib", "files": [], "format": "bibtex"}))
            .unwrap_err();
        assert!(err.contains("bibtex"), "{err}");
    }

    #[test]
    fn bad_prefixes_are_rejected() {
        assert!(reg(json!({"kind": "doi", "prefix": ""})).is_err());
        assert!(
            reg(json!({"kind": "doi", "prefix": "a:b"}))
                .unwrap_err()
                .contains("`:`")
        );
    }

    #[test]
    fn chain_targets_must_be_registered() {
        let regs = vec![
            reg(json!({"kind": "arxiv", "prefix": "arxiv"})).unwrap(),
            reg(json!({"kind": "doi", "prefix": "doi"})).unwrap(),
        ];
        check_chain_targets(&regs).unwrap();
        let regs = vec![
            reg(json!({"kind": "arxiv", "prefix": "arxiv"})).unwrap(),
            reg(json!({"kind": "doi", "prefix": "dx"})).unwrap(),
        ];
        let err = check_chain_targets(&regs).unwrap_err();
        assert!(err.contains("`arxiv:`") && err.contains("`doi:`"), "{err}");
        let regs =
            vec![reg(json!({"kind": "arxiv", "prefix": "arxiv", "chainDoisTo": null})).unwrap()];
        check_chain_targets(&regs).unwrap();
    }

    #[test]
    fn prefixes_must_be_unique() {
        let regs = vec![
            reg(json!({"kind": "doi", "prefix": "doi"})).unwrap(),
            reg(json!({"kind": "manual", "prefix": "m", "format": "flm"})).unwrap(),
            reg(json!({"kind": "doi", "prefix": "doi"})).unwrap(),
        ];
        let err = check_unique_prefixes(&regs).unwrap_err();
        assert!(err.contains("doi"), "{err}");
        check_unique_prefixes(&regs[..2]).unwrap();
    }

    #[test]
    fn js_resolutions_parse_and_convert() {
        let parse = |v| {
            serde_json::from_value::<JsResolution>(v)
                .map_err(|e| e.to_string())
                .and_then(JsResolution::into_resolution)
        };
        let r = parse(
            json!({"key": "a", "outcome": "concrete", "csl": {"title": "T"},
                             "ttlMs": 0}),
        )
        .unwrap();
        assert!(matches!(r.outcome, Outcome::Concrete { ttl: Some(d), .. } if d.is_zero()));
        let r = parse(json!({"key": "b", "outcome": "chained", "prefix": "doi",
                             "targetKey": "10.1/x"}))
        .unwrap();
        match r.outcome {
            Outcome::Chained {
                prefix,
                key,
                set_properties,
            } => {
                assert_eq!((prefix.as_str(), key.as_str()), ("doi", "10.1/x"));
                assert_eq!(set_properties, json!({}));
            }
            other => panic!("{other:?}"),
        }
        let r = parse(json!({"key": "c", "outcome": "missing", "message": "gone"})).unwrap();
        assert!(matches!(r.outcome, Outcome::Missing(_)));
        assert!(parse(json!({"key": "d", "outcome": "concrete", "csl": 3})).is_err());
        assert!(parse(json!({"key": "d", "outcome": "weird"})).is_err());
        assert!(parse(json!({"key": "d", "outcome": "failed", "message": "m", "x": 1})).is_err());
    }
}
