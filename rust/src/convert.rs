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
