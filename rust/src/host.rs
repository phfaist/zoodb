//! The crate's host traits implemented over JavaScript callbacks.
//!
//! * [`JsFetcher`] — [`Fetcher`] over `host.fetch(req)`. The **only** network
//!   and bibliography-file I/O path of the Rust sources.
//! * [`JsCacheFs`] + [`JsGuard`] — [`CacheFs`] over `host.cacheFs`, the only
//!   file I/O path of the crate's `FileCacheStore`. Paths are passed through
//!   byte for byte (`String` ↔ JS string).
//! * [`JsClock`] — [`Clock`] over `host.now()` (default `Date.now()`); the
//!   only clock anywhere in the binding.
//! * [`JsTimer`] — [`Timer`] over `host.sleep(ms)` (default: a promise
//!   resolved by the global `setTimeout`).
//!
//! Every JavaScript call is made with the owning host object as `this`. A
//! callback may return a value or a promise (anything `Promise.resolve`
//! accepts); a synchronous throw is treated like a rejection.

use std::time::Duration;

use js_sys::{Array, Function, Object, Promise, Reflect, Uint8Array};
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::JsFuture;

use autocitefetch::fetch::{FetchError, Fetcher, Method, Request, Response};
use autocitefetch::filecache::{CacheFs, CacheGuard, FsError};
use autocitefetch::{BoxFuture, Clock, Timer, Timestamp};

use crate::convert::error_message;

#[wasm_bindgen]
extern "C" {
    /// The global `setTimeout` (Node and browsers alike).
    #[wasm_bindgen(js_name = setTimeout, catch)]
    fn set_timeout(handler: &Function, timeout: f64) -> Result<JsValue, JsValue>;
}

/// Call `func` with `this` and `args`, then await the result as a promise.
async fn call_async(func: &Function, this: &JsValue, args: &Array) -> Result<JsValue, JsValue> {
    let ret = func.apply(this, args)?;
    JsFuture::from(Promise::resolve(&ret)).await
}

fn get(obj: &JsValue, key: &str) -> JsValue {
    Reflect::get(obj, &JsValue::from_str(key)).unwrap_or(JsValue::UNDEFINED)
}

fn set(obj: &Object, key: &str, value: &JsValue) {
    // `Reflect.set` on a fresh plain object cannot fail.
    let _ = Reflect::set(obj, &JsValue::from_str(key), value);
}

/// Bytes of a JS `Uint8Array` (or any typed array / `ArrayBuffer`, or a
/// string, UTF-8 encoded). `null`/`undefined` → `None`.
fn bytes_of(value: &JsValue) -> Result<Option<Vec<u8>>, String> {
    if value.is_undefined() || value.is_null() {
        return Ok(None);
    }
    if let Some(a) = value.dyn_ref::<Uint8Array>() {
        return Ok(Some(a.to_vec()));
    }
    if let Some(s) = value.as_string() {
        return Ok(Some(s.into_bytes()));
    }
    if value.is_instance_of::<js_sys::ArrayBuffer>() || js_sys::ArrayBuffer::is_view(value) {
        let view = if let Some(buf) = value.dyn_ref::<js_sys::ArrayBuffer>() {
            Uint8Array::new(buf)
        } else {
            let offset = get(value, "byteOffset").as_f64().unwrap_or(0.0) as u32;
            let len = get(value, "byteLength").as_f64().unwrap_or(0.0) as u32;
            Uint8Array::new_with_byte_offset_and_length(&get(value, "buffer"), offset, len)
        };
        return Ok(Some(view.to_vec()));
    }
    Err("expected a Uint8Array".into())
}

// --- fetch -------------------------------------------------------------------

/// [`Fetcher`] over `host.fetch(req)`.
///
/// The request is `{ url, method: 'GET'|'POST', headers, body }` with
/// lowercase header names and a `Uint8Array` body or `null`. The response must
/// be `{ status, headers, body }`; non-2xx statuses are ordinary responses. A
/// rejection whose value has a truthy `retryable` property becomes
/// [`FetchError::Transport`] (retried by the crate's `RetryingFetcher`),
/// anything else [`FetchError::Other`].
pub struct JsFetcher {
    this: JsValue,
    fetch: Function,
}

impl JsFetcher {
    pub fn new(this: JsValue, fetch: Function) -> Self {
        JsFetcher { this, fetch }
    }

    fn request_object(req: &Request) -> JsValue {
        let obj = Object::new();
        set(&obj, "url", &JsValue::from_str(&req.url));
        let method = match req.method {
            Method::Get => "GET",
            Method::Post => "POST",
        };
        set(&obj, "method", &JsValue::from_str(method));
        let headers = Object::new();
        for (name, value) in &req.headers {
            set(
                &headers,
                &name.to_ascii_lowercase(),
                &JsValue::from_str(value),
            );
        }
        set(&obj, "headers", &headers);
        let body = match &req.body {
            Some(b) => Uint8Array::from(b.as_slice()).into(),
            None => JsValue::NULL,
        };
        set(&obj, "body", &body);
        obj.into()
    }

    fn response_from(value: &JsValue, url: &str) -> Result<Response, FetchError> {
        let bad = |what: &str| FetchError::Other(format!("host fetch({url}): {what}"));
        if !value.is_object() {
            return Err(bad("must resolve to a {status, headers, body} object"));
        }
        let status = get(value, "status")
            .as_f64()
            .filter(|s| s.fract() == 0.0 && (0.0..=999.0).contains(s))
            .ok_or_else(|| bad("`status` must be an integer HTTP status"))?
            as u16;

        let mut headers = hashbrown::HashMap::new();
        let raw = get(value, "headers");
        if raw.is_object() {
            // A Fetch API `Headers` (or a Map) is iterable over [name, value]
            // pairs; a plain object is not, so fall back to its own entries.
            let pairs: Vec<JsValue> = match js_sys::try_iter(&raw) {
                Ok(Some(it)) => it.filter_map(Result::ok).collect(),
                _ => Object::entries(raw.unchecked_ref::<Object>())
                    .iter()
                    .collect(),
            };
            for pair in pairs {
                let name = Reflect::get_u32(&pair, 0).ok().and_then(|v| v.as_string());
                let val = Reflect::get_u32(&pair, 1)
                    .ok()
                    .and_then(|v| v.as_string().or_else(|| v.as_f64().map(|n| n.to_string())));
                if let (Some(n), Some(v)) = (name, val) {
                    headers.insert(n, v);
                }
            }
        }

        let body = bytes_of(&get(value, "body"))
            .map_err(|e| bad(&format!("`body`: {e}")))?
            .unwrap_or_default();
        Ok(Response {
            status,
            headers,
            body,
        })
    }
}

impl Fetcher for JsFetcher {
    fn fetch(&self, req: Request) -> BoxFuture<'_, Result<Response, FetchError>> {
        Box::pin(async move {
            let obj = Self::request_object(&req);
            match call_async(&self.fetch, &self.this, &Array::of1(&obj)).await {
                Ok(value) => Self::response_from(&value, &req.url),
                Err(err) => {
                    let message = error_message(&err);
                    let retryable = err.is_object() && get(&err, "retryable").is_truthy();
                    Err(if retryable {
                        FetchError::Transport(message)
                    } else {
                        FetchError::Other(message)
                    })
                }
            }
        })
    }
}

// --- cache fs -------------------------------------------------------------------

/// A lock guard handed out by `cacheFs.lockExclusive` /
/// `cacheFs.tryLockExclusive`. Dropping it calls `release()` on the JS guard
/// (if it has one), ignoring any exception.
pub struct JsGuard {
    guard: JsValue,
}

impl CacheGuard for JsGuard {}

impl Drop for JsGuard {
    fn drop(&mut self) {
        if let Ok(release) = get(&self.guard, "release").dyn_into::<Function>() {
            let _ = release.call0(&self.guard);
        }
    }
}

/// [`CacheFs`] over the `host.cacheFs` object.
pub struct JsCacheFs {
    fs: JsValue,
}

impl JsCacheFs {
    pub fn new(fs: JsValue) -> Self {
        JsCacheFs { fs }
    }

    /// Call `cacheFs[method](...args)` and await it; errors carry
    /// `cacheFs.<method>(<path>)` context.
    async fn call(&self, method: &str, path: &str, args: Array) -> Result<JsValue, FsError> {
        let ctx = |msg: String| FsError(format!("cacheFs.{method}({path}): {msg}"));
        let func = get(&self.fs, method)
            .dyn_into::<Function>()
            .map_err(|_| ctx("not a function".into()))?;
        call_async(&func, &self.fs, &args)
            .await
            .map_err(|e| ctx(error_message(&e)))
    }
}

impl CacheFs for JsCacheFs {
    type Guard = JsGuard;

    fn read(&self, path: &str) -> BoxFuture<'_, Result<Option<Vec<u8>>, FsError>> {
        let path = path.to_string();
        Box::pin(async move {
            let v = self
                .call("read", &path, Array::of1(&JsValue::from_str(&path)))
                .await?;
            bytes_of(&v).map_err(|e| FsError(format!("cacheFs.read({path}): {e}")))
        })
    }

    fn append(&self, path: &str, bytes: &[u8]) -> BoxFuture<'_, Result<(), FsError>> {
        let path = path.to_string();
        let data: JsValue = Uint8Array::from(bytes).into();
        Box::pin(async move {
            self.call(
                "append",
                &path,
                Array::of2(&JsValue::from_str(&path), &data),
            )
            .await
            .map(|_| ())
        })
    }

    fn atomic_replace(&self, path: &str, bytes: &[u8]) -> BoxFuture<'_, Result<(), FsError>> {
        let path = path.to_string();
        let data: JsValue = Uint8Array::from(bytes).into();
        Box::pin(async move {
            self.call(
                "atomicReplace",
                &path,
                Array::of2(&JsValue::from_str(&path), &data),
            )
            .await
            .map(|_| ())
        })
    }

    fn list(&self, dir: &str) -> BoxFuture<'_, Result<Vec<String>, FsError>> {
        let dir = dir.to_string();
        Box::pin(async move {
            let v = self
                .call("list", &dir, Array::of1(&JsValue::from_str(&dir)))
                .await?;
            if v.is_undefined() || v.is_null() {
                return Ok(Vec::new());
            }
            if !Array::is_array(&v) {
                return Err(FsError(format!(
                    "cacheFs.list({dir}): must resolve to an array of file names"
                )));
            }
            v.unchecked_into::<Array>()
                .iter()
                .map(|n| {
                    n.as_string().ok_or_else(|| {
                        FsError(format!("cacheFs.list({dir}): file names must be strings"))
                    })
                })
                .collect()
        })
    }

    fn remove(&self, path: &str) -> BoxFuture<'_, Result<(), FsError>> {
        let path = path.to_string();
        Box::pin(async move {
            self.call("remove", &path, Array::of1(&JsValue::from_str(&path)))
                .await
                .map(|_| ())
        })
    }

    fn lock_exclusive(&self, path: &str) -> BoxFuture<'_, Result<Box<dyn CacheGuard>, FsError>> {
        let path = path.to_string();
        Box::pin(async move {
            let guard = self
                .call(
                    "lockExclusive",
                    &path,
                    Array::of1(&JsValue::from_str(&path)),
                )
                .await?;
            Ok(Box::new(JsGuard { guard }) as Box<dyn CacheGuard>)
        })
    }

    fn try_lock_exclusive(&self, path: &str) -> BoxFuture<'_, Result<Option<JsGuard>, FsError>> {
        let path = path.to_string();
        Box::pin(async move {
            let guard = self
                .call(
                    "tryLockExclusive",
                    &path,
                    Array::of1(&JsValue::from_str(&path)),
                )
                .await?;
            if guard.is_null() || guard.is_undefined() {
                Ok(None)
            } else {
                Ok(Some(JsGuard { guard }))
            }
        })
    }
}

// --- clock and timer ------------------------------------------------------------

/// [`Clock`] over `host.now()`, else `Date.now()`; truncated to integer ms.
/// A `host.now()` that throws or returns a non-number falls back to
/// `Date.now()` (the trait cannot fail).
#[derive(Clone)]
pub struct JsClock {
    this: JsValue,
    now: Option<Function>,
}

impl JsClock {
    pub fn new(this: JsValue, now: Option<Function>) -> Self {
        JsClock { this, now }
    }
}

impl Clock for JsClock {
    fn now(&self) -> Timestamp {
        let ms = self
            .now
            .as_ref()
            .and_then(|f| f.call0(&self.this).ok())
            .and_then(|v| v.as_f64())
            .filter(|v| v.is_finite())
            .unwrap_or_else(js_sys::Date::now);
        Timestamp::from_millis(ms as i64)
    }
}

/// [`Timer`] over `host.sleep(ms)`, else a promise resolved by the global
/// `setTimeout`. A rejected or throwing `host.sleep` counts as an elapsed
/// sleep (the trait cannot fail).
#[derive(Clone)]
pub struct JsTimer {
    this: JsValue,
    sleep: Option<Function>,
}

impl JsTimer {
    pub fn new(this: JsValue, sleep: Option<Function>) -> Self {
        JsTimer { this, sleep }
    }
}

/// `setTimeout` clamps delays above 2^31 - 1 ms to 1 ms; clamp ourselves.
const MAX_TIMEOUT_MS: f64 = 2_147_483_647.0;

impl Timer for JsTimer {
    fn sleep(&self, dur: Duration) -> BoxFuture<'_, ()> {
        let ms = (dur.as_secs_f64() * 1000.0).min(MAX_TIMEOUT_MS);
        Box::pin(async move {
            match &self.sleep {
                Some(f) => {
                    let _ = call_async(f, &self.this, &Array::of1(&JsValue::from_f64(ms))).await;
                }
                None => {
                    let promise = Promise::new(&mut |resolve, _reject| {
                        if set_timeout(&resolve, ms).is_err() {
                            // No `setTimeout` in this environment: do not hang.
                            let _ = resolve.call0(&JsValue::UNDEFINED);
                        }
                    });
                    let _ = JsFuture::from(promise).await;
                }
            }
        })
    }
}
