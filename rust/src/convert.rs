//! Moving values across the Rust ↔ JavaScript boundary.
//!
//! * Outgoing values (CSL items, failure lists, key lists) are serialized with
//!   [`serde_wasm_bindgen::Serializer::json_compatible`], so JavaScript
//!   receives plain objects and arrays — never `Map`s or `BigInt`s — and
//!   `None` becomes `null`.
//! * Incoming data (CSL objects, spec dictionaries, resolutions) is
//!   deserialized with `serde_wasm_bindgen::from_value`.
//! * Every rejection handed to JavaScript is a `js_sys::Error` whose message
//!   carries context ([`js_error`]); every JavaScript exception caught on the
//!   Rust side is turned into a message with [`error_message`].
//! * Problems that cannot be returned to anyone (a throwing `onEvent`, a host
//!   `now()`/`sleep()` fallback, a throwing `normalizeKey`) are logged with
//!   [`console_error`], which looks up `globalThis.console.error` at call time
//!   (no `web-sys`, no logging crate).

use serde::Serialize;
use serde::de::DeserializeOwned;
use wasm_bindgen::{JsCast, JsValue};

use autocitefetch::CslValue;

/// Serialize `value` for JavaScript as plain JSON-compatible data.
pub fn to_js<T: Serialize + ?Sized>(value: &T) -> Result<JsValue, String> {
    value
        .serialize(&serde_wasm_bindgen::Serializer::json_compatible())
        .map_err(|e| format!("cannot convert value to JavaScript: {e}"))
}

/// Deserialize a JavaScript value into `T` (e.g. a [`CslValue`] or a spec).
pub fn from_js<T: DeserializeOwned>(value: JsValue) -> Result<T, String> {
    // The error wraps a JS `Error`; its `Display` would prefix "Error: ".
    serde_wasm_bindgen::from_value(value).map_err(|e| error_message(&JsValue::from(e)))
}

/// Convert a [`CslValue`] into a plain JavaScript value.
pub fn csl_to_js(value: &CslValue) -> Result<JsValue, String> {
    to_js(value)
}

/// A `js_sys::Error` carrying `message`, as a `JsValue` ready to reject a
/// promise with.
pub fn js_error(message: impl AsRef<str>) -> JsValue {
    js_sys::Error::new(message.as_ref()).into()
}

/// A human-readable message for a thrown JavaScript value: the `message` of an
/// `Error` (or of any object with a string `message`), the string itself for a
/// thrown string, else a debug rendering of the value.
pub fn error_message(value: &JsValue) -> String {
    if let Some(err) = value.dyn_ref::<js_sys::Error>() {
        return String::from(err.message());
    }
    if let Some(s) = value.as_string() {
        return s;
    }
    if value.is_object() {
        if let Ok(m) = js_sys::Reflect::get(value, &JsValue::from_str("message")) {
            if let Some(s) = m.as_string() {
                return s;
            }
        }
    }
    format!("{value:?}")
}

/// Log `message` (plus the offending JavaScript value, if any) through
/// `globalThis.console.error`, looked up at call time with `js_sys::Reflect`.
///
/// Used where an error has nowhere to go (a trait method that cannot fail, or
/// the synchronous reporter). Never throws and never panics: if there is no
/// `console.error`, or it throws, the message is dropped.
pub fn console_error(message: &str, detail: Option<&JsValue>) {
    let global: JsValue = js_sys::global().into();
    let Ok(console) = js_sys::Reflect::get(&global, &JsValue::from_str("console")) else {
        return;
    };
    if !console.is_object() {
        return;
    }
    let Ok(error) = js_sys::Reflect::get(&console, &JsValue::from_str("error")) else {
        return;
    };
    let Ok(error) = error.dyn_into::<js_sys::Function>() else {
        return;
    };
    let msg = JsValue::from_str(&format!("autocitefetch: {message}"));
    let _ = match detail {
        Some(d) => error.call2(&console, &msg, d),
        None => error.call1(&console, &msg),
    };
}
