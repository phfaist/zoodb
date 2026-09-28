//! wasm-bindgen binding of the `autocitefetch` citation retriever for
//! `@phfaist/zoodb`.
//!
//! See `README.md` in this directory and
//! `dev-docs/AutocitefetchImplementationPlan.md` at the repository root.
//! This is the WP0 scaffold: it exports `version()` only.

#![forbid(unsafe_code)]

// Link the core crate so the alloc-only / wasm32 build is actually exercised.
use autocitefetch as _;

use wasm_bindgen::prelude::*;

/// Version of this binding crate.
pub const BINDING_VERSION: &str = env!("CARGO_PKG_VERSION");

/// Version of the `autocitefetch` crate this binding was built against, read
/// from `Cargo.lock` by `build.rs`.
pub const AUTOCITEFETCH_VERSION: &str = env!("AUTOCITEFETCH_VERSION");

/// Installs the console panic hook when the `debug-panics` feature is on.
#[cfg(feature = "debug-panics")]
#[wasm_bindgen(start)]
pub fn start() {
    console_error_panic_hook::set_once();
}

/// Returns `{ binding, autocitefetch }` version strings as a plain JS object.
#[wasm_bindgen(unchecked_return_type = "{ binding: string; autocitefetch: string }")]
pub fn version() -> JsValue {
    let obj = js_sys::Object::new();
    // `Reflect::set` on a fresh plain object cannot fail.
    let _ = js_sys::Reflect::set(&obj, &"binding".into(), &BINDING_VERSION.into());
    let _ = js_sys::Reflect::set(&obj, &"autocitefetch".into(), &AUTOCITEFETCH_VERSION.into());
    obj.into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn versions_are_set() {
        assert_eq!(BINDING_VERSION, "0.1.0");
        assert!(AUTOCITEFETCH_VERSION.starts_with("0.1."), "{AUTOCITEFETCH_VERSION}");
    }
}
