//! wasm-bindgen binding of the FLM engine `flm-core` for `@phfaist/zoodb`.
//!
//! The registry (the standard package built from settings given as data, the
//! `math_passthrough` package and the ZooDb feature) lives in the module's
//! memory; JavaScript parses fields into fragment handles and runs documents
//! made of handles through the html, text and recomposed-LaTeX workflows and
//! through a scan. The crate does no I/O of its own: what a run needs from the
//! host (compiled citations, collected images, the index of zoo objects) is
//! handed over as tables before the run. See `README.md` in this directory.
//!
//! Modules:
//!
//! * [`engine`] — the engine in plain Rust (no wasm types, so that it compiles
//!   and tests natively): configuration, fragments, plans, runs, and the
//!   serializable shapes of everything that crosses to JavaScript;
//! * [`host`] — the citations and graphics tables and the `flm-core` services
//!   that answer from them;
//! * [`zoodb_feature`] — the ZooDb feature of the registry: the `field`
//!   element, the standalone check stage, the `srcset` publish stage;
//! * [`truncate`] — the truncation helper for previews.
//!
//! This file is the wasm-bindgen wrapper [`ZooFlm`]. Tags such as Q5, R18 or
//! U2 refer to the design documents in `dev-docs/initial-design/` (design
//! questions, technical risks, upstream requests).

#![forbid(unsafe_code)]

pub mod engine;
pub mod host;
pub mod truncate;
pub mod zoodb_feature;

use serde::Serialize;
use wasm_bindgen::prelude::*;

use crate::engine::{Engine, EngineConfig, ExternalEntry, LatexOptions, RenderOptions, TextOptions, TruncateOptions};
use crate::host::{CitationEntry, GraphicsEntry};

#[wasm_bindgen(start)]
pub fn start() {
    // One thread, its stack sized at link time to what flm-core's recursion
    // guard assumes of a worker thread (see build.rs): mark it so that no entry
    // point tries to create a worker thread (R1).
    flm_core::lang::guard::mark_worker_thread();
    #[cfg(feature = "debug-panics")]
    console_error_panic_hook::set_once();
}

fn to_js<T: Serialize>(value: &T) -> Result<JsValue, JsError> {
    let serializer = serde_wasm_bindgen::Serializer::json_compatible();
    value.serialize(&serializer).map_err(|e| JsError::new(&e.to_string()))
}

/// Reads `value` through a `serde_json::Value`. `serde_wasm_bindgen`
/// deserializes a plain struct by looking up its declared fields only, so
/// `deny_unknown_fields` is not enforced on the direct path; through a `Value`
/// every key is seen, and a misspelled one is refused with its name. `what`
/// names the value in the message.
fn from_js<T: serde::de::DeserializeOwned>(value: JsValue, what: &str) -> Result<T, JsError> {
    let mut value: serde_json::Value =
        serde_wasm_bindgen::from_value(value).map_err(|e| JsError::new(&format!("{what}: {e}")))?;
    drop_nulls(&mut value);
    serde_json::from_value(value).map_err(|e| JsError::new(&format!("{what}: {e}")))
}

/// Leaves out of every object the keys whose value is `null` or `undefined`
/// (which arrives as `null`), so that they take their default as a key left
/// out does. The feature settings under `settings` are handed to flm-core as
/// they are.
fn drop_nulls(value: &mut serde_json::Value) {
    match value {
        serde_json::Value::Object(map) => {
            map.retain(|_, v| !v.is_null());
            for (key, v) in map.iter_mut() {
                if key != "settings" {
                    drop_nulls(v);
                }
            }
        }
        serde_json::Value::Array(items) => items.iter_mut().for_each(drop_nulls),
        _ => {}
    }
}

/// The engine as a JavaScript class: one registry, the fragments parsed with
/// it (addressed by handle), the cached plans and the host tables. Every
/// method returns plain JSON-compatible values; an error is thrown as a
/// JavaScript `Error` carrying the message.
#[wasm_bindgen]
pub struct ZooFlm {
    engine: Engine,
}

#[wasm_bindgen]
impl ZooFlm {
    #[wasm_bindgen(constructor)]
    pub fn new(config: JsValue) -> Result<ZooFlm, JsError> {
        let config: EngineConfig = if config.is_undefined() || config.is_null() { EngineConfig::default() } else { from_js(config, "the configuration")? };
        let engine = Engine::new(&config).map_err(|e| JsError::new(&e))?;
        Ok(ZooFlm { engine })
    }

    /// The standard features and the JSON Schema of each one's settings (Q14).
    pub fn features() -> Result<JsValue, JsError> {
        to_js(&Engine::features().map_err(|e| JsError::new(&e))?)
    }

    pub fn build_diagnostics(&self) -> Result<JsValue, JsError> {
        to_js(&self.engine.build_diagnostics())
    }

    pub fn fragment_count(&self) -> u32 {
        self.engine.fragment_count() as u32
    }

    /// Replaces the external index: `[{ label, href, display }]`, `display`
    /// being FLM text. Returns the parse diagnostics of the display texts.
    pub fn set_external_index(&mut self, entries: JsValue) -> Result<JsValue, JsError> {
        let entries: Vec<ExternalEntry> = from_js(entries, "the external index")?;
        let out = self.engine.set_external_index(&entries).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    pub fn external_index_len(&self) -> u32 {
        self.engine.external_index_len() as u32
    }

    /// Replaces the citations table: `[{ key, text }]` (Q6).
    pub fn set_citations(&mut self, entries: JsValue) -> Result<(), JsError> {
        self.engine.set_citations(from_js::<Vec<CitationEntry>>(entries, "the citations table")?);
        Ok(())
    }

    pub fn citations_len(&self) -> u32 {
        self.engine.citations_len() as u32
    }

    /// Replaces the graphics table: `[{ origin, path, identity, media_type,
    /// address, kind, width_px, height_px, dpi, width_pt, height_pt }]` (Q7).
    pub fn set_graphics(&mut self, entries: JsValue) -> Result<(), JsError> {
        self.engine.set_graphics(from_js::<Vec<GraphicsEntry>>(entries, "the graphics table")?);
        Ok(())
    }

    pub fn graphics_len(&self) -> u32 {
        self.engine.graphics_len() as u32
    }

    /// Parses `text` as one fragment; `layout` is `blocks`, `inline` or `auto`.
    /// Returns `{ handle, diagnostics }`.
    pub fn parse(&mut self, text: &str, origin: &str, layout: &str) -> Result<JsValue, JsError> {
        let layout = engine::layout_of(layout).map_err(|e| JsError::new(&e))?;
        let out = self.engine.parse(text, origin, layout).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Renders the given fragments as one document with the `html` workflow.
    pub fn render_html(&mut self, handles: Vec<u32>, options: JsValue) -> Result<JsValue, JsError> {
        let options: RenderOptions = if options.is_undefined() || options.is_null() { RenderOptions::default() } else { from_js(options, "the render_html options")? };
        let out = self.engine.render_html(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Renders the given fragments as one document with the `latex-recomposed`
    /// workflow (Q12): `{ trees, style_name, style, document, diagnostics,
    /// has_errors }`.
    pub fn render_latex(&mut self, handles: Vec<u32>, options: JsValue) -> Result<JsValue, JsError> {
        let options: LatexOptions = if options.is_undefined() || options.is_null() { LatexOptions::default() } else { from_js(options, "the render_latex options")? };
        let out = self.engine.render_latex(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Renders the given fragments as one document with the `text` workflow
    /// (Q11): `{ text, trees, diagnostics, has_errors }`.
    pub fn render_text(&mut self, handles: Vec<u32>, options: JsValue) -> Result<JsValue, JsError> {
        let options: TextOptions = if options.is_undefined() || options.is_null() { TextOptions::default() } else { from_js(options, "the render_text options")? };
        let out = self.engine.render_text(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Truncates FLM source to about `options.chars` characters (R18):
    /// `{ source, truncated, cut_at, diagnostics }`; `options` also takes
    /// `min_chars`, `marker` and `first_paragraph`.
    pub fn truncate(&self, text: &str, origin: &str, layout: &str, options: JsValue) -> Result<JsValue, JsError> {
        let layout = engine::layout_of(layout).map_err(|e| JsError::new(&e))?;
        let options: TruncateOptions = from_js(options, "the truncate options")?;
        let out = self.engine.truncate(text, origin, layout, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Runs the scan (a bare plan over the tables the host reads) over the
    /// given fragments as one document and returns the scan tables;
    /// `standalone` lists the handles of standalone fields (Q5).
    pub fn scan(&mut self, handles: Vec<u32>, standalone: Vec<u32>) -> Result<JsValue, JsError> {
        let out = self.engine.scan(&handles, &standalone).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Reads the fields of an FLM data file (Q16): `{ fields: [{ name, start,
    /// end, text }], diagnostics }`.
    pub fn parse_fields(&self, text: &str, origin: &str) -> Result<JsValue, JsError> {
        let out = self.engine.parse_fields(text, origin).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }
}

#[cfg(test)]
mod tests {
    use super::drop_nulls;
    use serde_json::json;

    #[test]
    fn null_keys_are_left_out_except_in_the_settings() {
        let mut value = json!({
            "a": null,
            "b": { "c": null, "d": 1 },
            "settings": { "math": { "x": null } },
            "e": [{ "f": null, "g": "h" }, null],
        });
        drop_nulls(&mut value);
        assert_eq!(value, json!({
            "b": { "d": 1 },
            "settings": { "math": { "x": null } },
            "e": [{ "g": "h" }, null],
        }));
    }
}
