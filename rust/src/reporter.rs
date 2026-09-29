//! Forwarding autocitefetch progress [`Event`]s to `host.onEvent`.
//!
//! [`JsReporter`] builds one plain JavaScript object per event, with the
//! snake_case vocabulary of the pyo3 binding's `event_dict`
//! (`flm-citations/src/reporter.rs`; appendix B of the implementation brief):
//! every object carries a `type` naming the variant, plus that variant's
//! fields under their own names. A variant this build does not know (the
//! crate's `Event` is `#[non_exhaustive]`) arrives as `{ type: 'unknown' }`
//! rather than being dropped, so a consumer can at least count it.
//!
//! # Constraints
//!
//! [`Reporter::report`] is **synchronous, `&self`, returns nothing and must not
//! panic**: it is called from inside the retrieval loop and must not be able to
//! influence control flow. So `onEvent` is called synchronously (its return
//! value, even a promise, is ignored — nothing is ever awaited here), and any
//! exception it throws is swallowed and logged through `console.error`: a
//! broken progress display must not abort a build.
//!
//! Throttling is the crate's [`ThrottledReporter`], wrapped around this
//! reporter by [`build`]: only *sample* events (`source_progress`, keyed by
//! prefix) are rate-limited; milestones always pass.

use std::rc::Rc;
use std::time::Duration;

use js_sys::{Array, Function, Object, Reflect};
use wasm_bindgen::JsValue;

use autocitefetch::{Event, Reporter, Resolved, ThrottledReporter, Wait};

use crate::convert::{console_error, error_message};
use crate::host::JsClock;

/// A [`Reporter`] calling `host.onEvent(ev)` with a plain object per event.
pub struct JsReporter {
    /// The host object, used as `this`.
    this: JsValue,
    on_event: Function,
}

impl JsReporter {
    pub fn new(this: JsValue, on_event: Function) -> Self {
        JsReporter { this, on_event }
    }
}

impl Reporter for JsReporter {
    fn report(&self, ev: &Event<'_>) {
        let obj = event_object(ev);
        if let Err(e) = self.on_event.call1(&self.this, &obj) {
            console_error(
                &format!(
                    "host.onEvent() threw while handling a `{}` event (ignored): {}",
                    event_type(ev),
                    error_message(&e)
                ),
                Some(&e),
            );
        }
    }
}

/// The reporter to install for `onEvent`: a [`JsReporter`], wrapped in the
/// crate's [`ThrottledReporter`] (at most one sample event per `min_gap` per
/// prefix, on `clock`) unless `min_gap` is zero.
pub fn build(
    this: JsValue,
    on_event: Function,
    clock: JsClock,
    min_gap: Duration,
) -> Rc<dyn Reporter> {
    let reporter = JsReporter::new(this, on_event);
    if min_gap.is_zero() {
        Rc::new(reporter)
    } else {
        Rc::new(ThrottledReporter::new(reporter, clock, min_gap))
    }
}

/// The `type` string of an event (appendix B).
pub fn event_type(ev: &Event<'_>) -> &'static str {
    match ev {
        Event::RetrieveStarted { .. } => "retrieve_started",
        Event::PassStarted { .. } => "pass_started",
        Event::PassFinished { .. } => "pass_finished",
        Event::RetrieveFinished { .. } => "retrieve_finished",
        Event::SourceStarted { .. } => "source_started",
        Event::SourceProgress { .. } => "source_progress",
        Event::SourceFinished { .. } => "source_finished",
        Event::CiteResolved { .. } => "cite_resolved",
        Event::CiteFailed { .. } => "cite_failed",
        Event::WaitStarted { .. } => "wait_started",
        Event::WaitFinished { .. } => "wait_finished",
        Event::RequestStarted { .. } => "request_started",
        Event::RequestFinished { .. } => "request_finished",
        Event::RefreshPlanned { .. } => "refresh_planned",
        _ => "unknown",
    }
}

/// The `wait` string of a [`Wait`] (appendix B).
pub fn wait_kind(what: &Wait<'_>) -> &'static str {
    match what {
        Wait::RateLimit { .. } => "rate_limit",
        Wait::Backoff { .. } => "backoff",
        Wait::CacheFlush => "cache_flush",
        _ => "unknown",
    }
}

/// `how` of a [`Resolved`]; like the pyo3 binding, anything that is not a
/// chain reads as `concrete`.
pub fn resolved_how(how: &Resolved<'_>) -> &'static str {
    match how {
        Resolved::Chained { .. } => "chained",
        _ => "concrete",
    }
}

fn set(obj: &Object, key: &str, value: impl Into<JsValue>) {
    // `Reflect.set` on a fresh plain object cannot fail.
    let _ = Reflect::set(obj, &JsValue::from_str(key), &value.into());
}

fn num(n: usize) -> JsValue {
    JsValue::from_f64(n as f64)
}

fn pair(a: &str, b: &str) -> JsValue {
    Array::of2(&JsValue::from_str(a), &JsValue::from_str(b)).into()
}

fn set_wait(obj: &Object, what: &Wait<'_>) {
    set(obj, "wait", wait_kind(what));
    match *what {
        Wait::RateLimit { prefix } => set(obj, "prefix", prefix),
        Wait::Backoff { url, attempt } => {
            set(obj, "url", url);
            set(obj, "attempt", attempt);
        }
        _ => {}
    }
}

/// The plain JavaScript object for one event (appendix B). Numbers are JS
/// numbers; pairs are 2-element arrays; `expected_ms` is a number or `null`.
pub fn event_object(ev: &Event<'_>) -> JsValue {
    let d = Object::new();
    set(&d, "type", event_type(ev));
    match *ev {
        Event::RetrieveStarted { cites } => set(&d, "cites", num(cites)),
        Event::PassStarted {
            pass,
            cached,
            to_fetch,
        } => {
            set(&d, "pass", num(pass));
            set(&d, "cached", num(cached));
            set(&d, "to_fetch", num(to_fetch));
        }
        Event::PassFinished { pass, discovered } => {
            set(&d, "pass", num(pass));
            set(&d, "discovered", num(discovered));
        }
        Event::RetrieveFinished { considered, failed } => {
            set(&d, "considered", num(considered));
            set(&d, "failed", num(failed));
        }
        Event::SourceStarted {
            prefix,
            keys,
            chunks,
        } => {
            set(&d, "prefix", prefix);
            set(&d, "keys", num(keys));
            set(&d, "chunks", num(chunks));
        }
        Event::SourceProgress {
            prefix,
            done,
            total,
        } => {
            set(&d, "prefix", prefix);
            set(&d, "done", num(done));
            set(&d, "total", num(total));
        }
        Event::SourceFinished { prefix, done } => {
            set(&d, "prefix", prefix);
            set(&d, "done", num(done));
        }
        Event::CiteResolved { prefix, key, how } => {
            set(&d, "prefix", prefix);
            set(&d, "key", key);
            set(&d, "how", resolved_how(&how));
            if let Resolved::Chained {
                prefix: tp,
                key: tk,
            } = how
            {
                set(&d, "target", pair(tp, tk));
            }
        }
        Event::CiteFailed {
            prefix,
            key,
            err,
            grace_served,
        } => {
            set(&d, "prefix", prefix);
            set(&d, "key", key);
            set(&d, "message", err.to_string());
            set(&d, "grace_served", grace_served);
        }
        Event::WaitStarted { what, expected } => {
            set_wait(&d, &what);
            let expected_ms = match expected {
                Some(e) => JsValue::from_f64(e.as_millis() as f64),
                None => JsValue::NULL,
            };
            set(&d, "expected_ms", expected_ms);
        }
        Event::WaitFinished { what } => set_wait(&d, &what),
        Event::RequestStarted { url, attempt } => {
            set(&d, "url", url);
            set(&d, "attempt", attempt);
        }
        Event::RequestFinished { url, result } => {
            set(&d, "url", url);
            match result {
                Ok(status) => set(&d, "status", status),
                Err(e) => set(&d, "error", e.to_string()),
            }
        }
        Event::RefreshPlanned {
            prefix,
            deferred,
            pulled_forward,
        } => {
            set(&d, "prefix", prefix);
            set(&d, "deferred", num(deferred));
            set(&d, "pulled_forward", num(pulled_forward));
        }
        _ => {}
    }
    d.into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn type_strings_follow_appendix_b() {
        let err = autocitefetch::Error::Source("x".into());
        let cases: Vec<(Event<'_>, &str)> = vec![
            (Event::RetrieveStarted { cites: 1 }, "retrieve_started"),
            (
                Event::PassStarted {
                    pass: 1,
                    cached: 0,
                    to_fetch: 1,
                },
                "pass_started",
            ),
            (
                Event::PassFinished {
                    pass: 1,
                    discovered: 0,
                },
                "pass_finished",
            ),
            (
                Event::RetrieveFinished {
                    considered: 1,
                    failed: 0,
                },
                "retrieve_finished",
            ),
            (
                Event::SourceStarted {
                    prefix: "a",
                    keys: 1,
                    chunks: 1,
                },
                "source_started",
            ),
            (
                Event::SourceProgress {
                    prefix: "a",
                    done: 1,
                    total: 1,
                },
                "source_progress",
            ),
            (
                Event::SourceFinished {
                    prefix: "a",
                    done: 1,
                },
                "source_finished",
            ),
            (
                Event::CiteResolved {
                    prefix: "a",
                    key: "k",
                    how: Resolved::Concrete,
                },
                "cite_resolved",
            ),
            (
                Event::CiteFailed {
                    prefix: "a",
                    key: "k",
                    err: &err,
                    grace_served: false,
                },
                "cite_failed",
            ),
            (
                Event::WaitStarted {
                    what: Wait::CacheFlush,
                    expected: None,
                },
                "wait_started",
            ),
            (
                Event::WaitFinished {
                    what: Wait::CacheFlush,
                },
                "wait_finished",
            ),
            (
                Event::RequestStarted {
                    url: "u",
                    attempt: 0,
                },
                "request_started",
            ),
            (
                Event::RequestFinished {
                    url: "u",
                    result: Ok(200),
                },
                "request_finished",
            ),
            (
                Event::RefreshPlanned {
                    prefix: "arxiv",
                    deferred: 3,
                    pulled_forward: 0,
                },
                "refresh_planned",
            ),
        ];
        for (ev, ty) in &cases {
            assert_eq!(event_type(ev), *ty);
        }
        assert_eq!(wait_kind(&Wait::RateLimit { prefix: "a" }), "rate_limit");
        assert_eq!(
            wait_kind(&Wait::Backoff {
                url: "u",
                attempt: 0
            }),
            "backoff"
        );
        assert_eq!(wait_kind(&Wait::CacheFlush), "cache_flush");
        assert_eq!(resolved_how(&Resolved::Concrete), "concrete");
        assert_eq!(
            resolved_how(&Resolved::Chained {
                prefix: "doi",
                key: "k"
            }),
            "chained"
        );
    }
}
