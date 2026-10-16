//! Per-source overrides of the library's refresh batching.
//!
//! [`RefreshBatching`] decides, per source, whether a few stale cache entries
//! are refetched now or deferred until there are enough to be worth a
//! (rate-limited) request, and whether a request going out anyway is topped up
//! with entries that are nearly due. Every built-in source declares its own
//! default (arXiv waits for 20, doi.org for 10, a bibliography file refreshes
//! everything at once, a `js` source is eager); a source spec's
//! `refreshBatching` entry adjusts it:
//!
//! ```js
//! 'eager'                                        // fetch what is due, when due
//! 'default'                                      // the source's own default
//! { minBatch: 50 }                               // change one setting, keep the rest
//! { eager: true, minBatch: 3 }                   // start from 'eager' instead
//! { maxDeferDays: 0.5 }                          // an expired entry waits at most 12 h
//! { topUp: false }                               // never pull entries forward
//! { topUp: { minAgePercent: 80, fill: 5 } }      // fill: 'chunk' or a count
//! ```
//!
//! This mirrors the `refresh_batching` option of the pyo3 binding
//! (`flm-citations/src/batching.rs`) and the CLI's `--refresh-batching
//! PREFIX:SETTINGS`: settings are applied on top of the source's default,
//! which is only known once the source is registered — hence the
//! parse/[`apply`](BatchingOverride::apply) split.
//!
//! The value is parsed from a [`serde_json::Value`] (converted from
//! JavaScript by [`config`](crate::config)), so the parser is unit-testable on
//! the host.

use std::time::Duration;

use serde_json::{Map, Value};

use autocitefetch::{Fill, RefreshBatching, TopUp};

const KEYS: &[&str] = &["eager", "minBatch", "maxDeferDays", "topUp"];
const TOP_UP_KEYS: &[&str] = &["minAgePercent", "fill"];

/// A parsed `refreshBatching` entry, not yet applied to a source default.
#[derive(Clone, Debug, Default, PartialEq)]
pub struct BatchingOverride {
    eager: bool,
    min_batch: Option<usize>,
    max_defer: Option<Duration>,
    top_up: Option<TopUpOverride>,
}

#[derive(Clone, Debug, PartialEq)]
enum TopUpOverride {
    Off,
    Set {
        min_age_percent: Option<u32>,
        fill: Option<Fill>,
    },
}

fn reject_unknown_keys(obj: &Map<String, Value>, allowed: &[&str], what: &str) -> Result<(), String> {
    let mut unknown: Vec<&str> = obj
        .keys()
        .map(String::as_str)
        .filter(|k| !allowed.contains(k))
        .collect();
    if unknown.is_empty() {
        return Ok(());
    }
    unknown.sort_unstable();
    Err(format!(
        "{what}: unknown key(s) {}; expected one of {}",
        unknown.join(", "),
        allowed.join(", ")
    ))
}

/// A present, non-null entry of `obj`.
fn opt<'a>(obj: &'a Map<String, Value>, key: &str) -> Option<&'a Value> {
    obj.get(key).filter(|v| !v.is_null())
}

/// A non-negative integer (JavaScript numbers may arrive as floats).
fn count(v: &Value, key: &str, what: &str) -> Result<usize, String> {
    match v.as_f64() {
        Some(n) if n >= 0.0 && n.is_finite() && n.fract() == 0.0 => Ok(n as usize),
        _ => Err(format!("{what}: `{key}` must be a non-negative integer, not {v}")),
    }
}

impl BatchingOverride {
    /// Parse a spec's `refreshBatching` value: `'eager'`, `'default'`, or an
    /// object of settings. `what` names the source, for error messages.
    pub fn parse(value: &Value, what: &str) -> Result<Self, String> {
        let what = format!("{what}: `refreshBatching`");
        let obj = match value {
            Value::String(s) => {
                return match s.as_str() {
                    "eager" => Ok(BatchingOverride {
                        eager: true,
                        ..Default::default()
                    }),
                    "default" => Ok(BatchingOverride::default()),
                    _ => Err(format!(
                        "{what}: expected 'eager', 'default' or an object of settings, got {s:?}"
                    )),
                };
            }
            Value::Object(obj) => obj,
            other => {
                return Err(format!(
                    "{what}: expected 'eager', 'default' or an object of settings, got {other}"
                ));
            }
        };
        reject_unknown_keys(obj, KEYS, &what)?;

        let eager = match opt(obj, "eager") {
            None => false,
            Some(Value::Bool(b)) => *b,
            Some(v) => return Err(format!("{what}: `eager` must be a boolean, not {v}")),
        };
        let min_batch = opt(obj, "minBatch")
            .map(|v| count(v, "minBatch", &what))
            .transpose()?;
        let max_defer = match opt(obj, "maxDeferDays") {
            None => None,
            Some(v) => match v.as_f64() {
                Some(days) if days >= 0.0 && days.is_finite() => {
                    Some(Duration::from_secs_f64(days * 24.0 * 60.0 * 60.0))
                }
                _ => {
                    return Err(format!(
                        "{what}: `maxDeferDays` must be a finite non-negative number, not {v}"
                    ));
                }
            },
        };
        // Not `opt()`: an explicit `null` here means "off", not "absent".
        let top_up = obj
            .get("topUp")
            .map(|v| parse_top_up(v, &what))
            .transpose()?;

        Ok(BatchingOverride {
            eager,
            min_batch,
            max_defer,
            top_up,
        })
    }

    /// These settings applied on top of `base` (the source's default): first
    /// the `eager` reset, then each setting given.
    pub fn apply(&self, mut base: RefreshBatching, what: &str) -> Result<RefreshBatching, String> {
        if self.eager {
            base = RefreshBatching::EAGER;
        }
        if let Some(n) = self.min_batch {
            base.min_batch = n;
        }
        if let Some(d) = self.max_defer {
            base.max_defer = d;
        }
        match self.top_up {
            None => {}
            Some(TopUpOverride::Off) => base.top_up = None,
            Some(TopUpOverride::Set {
                min_age_percent,
                fill,
            }) => {
                let min_age_percent = min_age_percent
                    .or(base.top_up.map(|t| t.min_age_percent))
                    .ok_or_else(|| {
                        format!(
                            "{what}: `refreshBatching`: top-up is off for this source, so \
                             `topUp` needs a `minAgePercent` to turn it on"
                        )
                    })?;
                let fill = fill
                    .or(base.top_up.map(|t| t.fill))
                    .unwrap_or(Fill::ChunkBoundary);
                base.top_up = Some(TopUp {
                    min_age_percent,
                    fill,
                });
            }
        }
        Ok(base)
    }
}

fn parse_top_up(v: &Value, what: &str) -> Result<TopUpOverride, String> {
    let what = format!("{what}: `topUp`");
    let obj = match v {
        Value::Null | Value::Bool(false) => return Ok(TopUpOverride::Off),
        Value::String(s) if s == "off" => return Ok(TopUpOverride::Off),
        // `true` would have to invent a percentage; only `false` is meaningful.
        Value::Bool(true) => {
            return Err(format!(
                "{what}: `true` is not enough; give an object with `minAgePercent` \
                 (and optionally `fill`)"
            ));
        }
        Value::Object(obj) => obj,
        other => {
            return Err(format!(
                "{what} must be false/null to disable it, or an object with `minAgePercent` \
                 and/or `fill`, not {other}"
            ));
        }
    };
    reject_unknown_keys(obj, TOP_UP_KEYS, &what)?;

    let min_age_percent = match opt(obj, "minAgePercent") {
        None => None,
        Some(v) => {
            let p = count(v, "minAgePercent", &what)?;
            if p > 100 {
                return Err(format!(
                    "{what}: `minAgePercent` is a percentage (0-100), not {p}"
                ));
            }
            Some(p as u32)
        }
    };
    let fill = match opt(obj, "fill") {
        None => None,
        Some(Value::String(s)) if s == "chunk" => Some(Fill::ChunkBoundary),
        Some(v) => Some(Fill::Extra(count(v, "fill", &what).map_err(|_| {
            format!("{what}: `fill` must be 'chunk' or a non-negative integer, not {v}")
        })?)),
    };

    Ok(TopUpOverride::Set {
        min_age_percent,
        fill,
    })
}

/// A [`RefreshBatching`] as the plain data `CitationManager.refreshBatching()`
/// returns: `{ minBatch, maxDeferDays, topUp: null | { minAgePercent, fill } }`
/// with `fill` either `'chunk'` or a count — the same shape `refreshBatching`
/// accepts, so the result can be fed back as an override.
pub fn to_value(b: &RefreshBatching) -> Value {
    let top_up = match b.top_up {
        None => Value::Null,
        Some(t) => serde_json::json!({
            "minAgePercent": t.min_age_percent,
            "fill": match t.fill {
                Fill::ChunkBoundary => Value::from("chunk"),
                Fill::Extra(n) => Value::from(n as f64),
            },
        }),
    };
    serde_json::json!({
        "minBatch": b.min_batch as f64,
        "maxDeferDays": b.max_defer.as_secs_f64() / (24.0 * 60.0 * 60.0),
        "topUp": top_up,
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    const DAY: u64 = 24 * 60 * 60;

    fn base() -> RefreshBatching {
        RefreshBatching {
            min_batch: 20,
            max_defer: Duration::from_secs(2 * DAY),
            top_up: Some(TopUp {
                min_age_percent: 50,
                fill: Fill::ChunkBoundary,
            }),
        }
    }

    fn apply(v: serde_json::Value) -> Result<RefreshBatching, String> {
        BatchingOverride::parse(&v, "src")?.apply(base(), "src")
    }

    #[test]
    fn strings() {
        assert_eq!(apply(json!("eager")).unwrap(), RefreshBatching::EAGER);
        assert_eq!(apply(json!("default")).unwrap(), base());
        assert!(apply(json!("lazy")).unwrap_err().contains("lazy"));
        assert!(apply(json!(3)).unwrap_err().contains("refreshBatching"));
    }

    #[test]
    fn settings_adjust_the_default() {
        let b = apply(json!({"minBatch": 50})).unwrap();
        assert_eq!(b, RefreshBatching { min_batch: 50, ..base() });
        let b = apply(json!({"maxDeferDays": 0.5})).unwrap();
        assert_eq!(b.max_defer, Duration::from_secs(DAY / 2));
        assert_eq!(b.min_batch, 20);
        let b = apply(json!({"topUp": false})).unwrap();
        assert_eq!(b.top_up, None);
        assert_eq!(apply(json!({"topUp": null})).unwrap().top_up, None);
        assert_eq!(apply(json!({"topUp": "off"})).unwrap().top_up, None);
        let b = apply(json!({"topUp": {"fill": 5.0}})).unwrap();
        assert_eq!(
            b.top_up,
            Some(TopUp {
                min_age_percent: 50,
                fill: Fill::Extra(5)
            })
        );
        // null-valued settings are absent
        assert_eq!(apply(json!({"minBatch": null, "eager": null})).unwrap(), base());
    }

    #[test]
    fn eager_then_settings() {
        let b = apply(json!({"eager": true, "minBatch": 3})).unwrap();
        assert_eq!(
            b,
            RefreshBatching {
                min_batch: 3,
                ..RefreshBatching::EAGER
            }
        );
        // turning top-up on from eager needs a percentage
        let err = apply(json!({"eager": true, "topUp": {"fill": "chunk"}})).unwrap_err();
        assert!(err.contains("minAgePercent"), "{err}");
        let b = apply(json!({"eager": true, "topUp": {"minAgePercent": 80}})).unwrap();
        assert_eq!(
            b.top_up,
            Some(TopUp {
                min_age_percent: 80,
                fill: Fill::ChunkBoundary
            })
        );
    }

    #[test]
    fn rejections_name_the_problem() {
        let err = apply(json!({"min_batch": 3})).unwrap_err();
        assert!(err.contains("min_batch") && err.contains("minBatch"), "{err}");
        let err = apply(json!({"topUp": {"percent": 3}})).unwrap_err();
        assert!(err.contains("percent"), "{err}");
        assert!(apply(json!({"minBatch": -1})).unwrap_err().contains("minBatch"));
        assert!(apply(json!({"minBatch": 2.5})).unwrap_err().contains("minBatch"));
        assert!(apply(json!({"maxDeferDays": -1})).unwrap_err().contains("maxDeferDays"));
        assert!(apply(json!({"eager": 1})).unwrap_err().contains("eager"));
        assert!(apply(json!({"topUp": true})).unwrap_err().contains("minAgePercent"));
        assert!(
            apply(json!({"topUp": {"minAgePercent": 101}}))
                .unwrap_err()
                .contains("0-100")
        );
        assert!(apply(json!({"topUp": {"fill": "all"}})).unwrap_err().contains("fill"));
    }

    #[test]
    fn to_value_round_trips() {
        for b in [
            base(),
            RefreshBatching::EAGER,
            RefreshBatching {
                min_batch: 10,
                max_defer: Duration::from_secs(30 * DAY),
                top_up: Some(TopUp {
                    min_age_percent: 80,
                    fill: Fill::Extra(0),
                }),
            },
        ] {
            let v = to_value(&b);
            let back = BatchingOverride::parse(&v, "x")
                .unwrap()
                .apply(RefreshBatching::EAGER, "x")
                .unwrap();
            assert_eq!(back, b, "{v}");
        }
    }
}
