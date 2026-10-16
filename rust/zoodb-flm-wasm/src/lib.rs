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
//! This file is the wasm-bindgen wrapper [`ZooFlmCore`], with the TypeScript
//! declarations of every shape that crosses to JavaScript. Tags such as Q5,
//! R18 or U2 refer to the design documents in `dev-docs/initial-design/`
//! (design questions, technical risks, upstream requests).

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

// The TypeScript declarations of the shapes that cross to JavaScript, so that
// the generated `.d.ts` documents the surface (wasm-bindgen writes `any` for a
// `JsValue`). They mirror the serializable structs of `engine.rs` and `host.rs`.
#[wasm_bindgen(typescript_custom_section)]
const TS_TYPES: &'static str = r#"
/** The severity of a diagnostic. */
export type Severity = 'error' | 'warning' | 'note';

/** A diagnostic as the core reports it. */
export interface CoreDiagnostic {
    /** The condition's stable identifier, such as `flm.refs.unresolved`. */
    identifier: string;
    severity: Severity;
    /** For a person; not a stable interface. */
    message: string;
    /** The label of the source the diagnostic is in: a fragment's origin as given to `parse` (`path#field`), or the label of a source the library created (`index:person:alice`, `citation:arxiv:…`); `null` when it has neither. */
    origin: string | null;
    /** Byte offsets into that source's text. */
    start: number;
    end: number;
    /** 1-based line of `start` within that source's text. */
    line: number | null;
    /** 1-based column of `start` in its line, counted in bytes. The engine (`src/zooflm/engine.js`) recomputes it in characters for the fragments it holds the source of; a diagnostic in a source the library created (`index:…`, `citation:…`) keeps the byte column. */
    col: number | null;
}

/** How the top level of a fragment is laid out: `auto` is inline unless it holds a paragraph break or a block. */
export type FragmentLayoutName = 'blocks' | 'inline' | 'auto';

/** The configuration of a core (every key optional; `null` takes the default). */
export interface CoreConfig {
    /** Whether `$…$` delimits mathematics. */
    dollar_math?: boolean | null;
    /** Alternative image sources for the html output (the ZooDb publish stage). */
    srcset?: { pixel_density_list?: number[] | null; image_max_zoom_factor?: number | null } | null;
    /** The settings of the standard features, one map per feature; user definitions under `userdefs`. */
    settings?: Record<string, Record<string, unknown>> | null;
    /** Standard features switched off by name. */
    off?: string[] | null;
}

/** A standard feature and the JSON Schema of its settings (`null`: it takes none). */
export interface FeatureInfo {
    name: string;
    schema: Record<string, unknown> | null;
}

/** The result of `parse`. */
export interface ParsedOut {
    handle: number;
    /** The tree holds only whitespace, comments and paragraph breaks. */
    empty: boolean;
    diagnostics: CoreDiagnostic[];
}

/** An entry of the external index: a label of another document, its link target and the FLM text a reference to it shows. */
export interface ExternalIndexEntry {
    label: string;
    href: string;
    display: string;
}

/** A compiled citation: `prefix:key` and the entry as FLM inline text. */
export interface CitationEntry {
    key: string;
    text: string;
}

/** An image the host collected and inspected, keyed by `origin` (the canonical path of the source it is written in) and `path` (as written). */
export interface GraphicsEntry {
    origin: string;
    path: string;
    identity: string;
    media_type: string;
    address: string;
    kind: 'raster' | 'vector';
    width_px?: number | null;
    height_px?: number | null;
    dpi?: number | null;
    width_pt?: number | null;
    height_pt?: number | null;
}

export interface RenderHtmlOptions {
    title?: string | null;
    /** Unresolved references are Warnings instead of Errors (default `false`). */
    unresolved_refs_warning?: boolean | null;
}

/** One part of a definition's delivery: a text, a file path, an address, the table that supplies the text per document (registry list only), or `host` (the host supplies it; a run's list only). */
export interface DefinitionPart {
    kind: 'inline' | 'file' | 'url' | 'table' | 'host';
    text: string;
}

/** A style or script definition. */
export interface Definition {
    id: string;
    kind: 'style' | 'script';
    /** The feature that declared it. */
    owner: string;
    parts: DefinitionPart[];
}

/** A piece of a run (the footnote list, the bibliography, …). */
export interface HtmlPiece {
    name: string;
    place: 'before-content' | 'after-content';
    html: string;
    requires: string[];
}

/** The result of `render_html`: one entry of `trees` and `tree_requires` per handle given, in order. */
export interface HtmlOut {
    trees: string[];
    tree_requires: string[][];
    pieces: HtmlPiece[];
    requires: string[];
    /** What the run's document requires (the backend's page style included), resolved. */
    definitions: Definition[];
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface RenderTextOptions {
    /** The line width in columns; `null` never wraps. */
    width?: number | null;
    link_addresses?: boolean | null;
    /** Default `true` for text. */
    unresolved_refs_warning?: boolean | null;
    /** Also render each tree alone, for `trees` and `tree_diagnostics`. */
    per_tree?: boolean | null;
    /** Place the pieces in the text (default `false`). */
    pieces?: boolean | null;
}

/** The result of `render_text`; `trees` and `tree_diagnostics` only with `per_tree`, one per handle given, each tree rendered alone. */
export interface TextOut {
    text: string;
    trees: string[];
    tree_diagnostics: CoreDiagnostic[][];
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface RenderLatexOptions {
    raw_label_types?: string[] | null;
    drop_comments?: boolean | null;
    unresolved_refs_warning?: boolean | null;
}

/** The result of `render_latex`: one entry of `trees` per handle given. */
export interface LatexOut {
    trees: string[];
    style_name: string | null;
    style: string | null;
    document: string | null;
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface TruncateOptions {
    chars: number;
    min_chars?: number | null;
    /** Default `' …'`. */
    marker?: string | null;
    first_paragraph?: boolean | null;
}

/** The result of `truncate`: the shortened FLM source, to be parsed again. */
export interface TruncateOut {
    source: string;
    truncated: boolean;
    cut_at: number | null;
    diagnostics: CoreDiagnostic[];
}

/** An image written in a tree: the path as written and the canonical path of its source (the graphics table's key). */
export interface ScanGraphicsRef {
    path: string;
    origin: string | null;
}

/** What the scan found in one tree. */
export interface ScanTree {
    labels: string[];
    /** The href of each resolved reference. */
    refs_resolved: string[];
    /** The label of each unresolved reference. */
    refs_unresolved: string[];
    graphics: ScanGraphicsRef[];
}

/** The result of `scan`: one entry of `trees` per handle given. */
export interface ScanOut {
    trees: ScanTree[];
    /** Cited keys in order of first citation, each with the origin of that citation. */
    cited: [string, string | null][];
    duplicate_labels: string[];
    standalone_violations: number;
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

/** A field of an FLM data file and the byte range of its body. */
export interface FieldOut {
    name: string;
    start: number;
    end: number;
    text: string;
}

export interface FieldsOut {
    fields: FieldOut[];
    diagnostics: CoreDiagnostic[];
}
"#;

/// The core as a JavaScript class: one registry, the fragments parsed with
/// it (addressed by handle), the cached plans and the host tables. Every
/// method returns plain JSON-compatible values; an error (a wrong handle, a
/// wrong option, a configuration refused) is thrown as a JavaScript `Error`
/// carrying the message, never returned as content. The engine of
/// `src/zooflm/engine.js` drives it.
#[wasm_bindgen]
pub struct ZooFlmCore {
    engine: Engine,
}

#[wasm_bindgen]
impl ZooFlmCore {
    /// Builds the registry from `config` (`CoreConfig`); throws on an unknown
    /// key, feature or setting, naming it.
    #[wasm_bindgen(constructor)]
    pub fn new(#[wasm_bindgen(unchecked_param_type = "CoreConfig | null | undefined")] config: JsValue) -> Result<ZooFlmCore, JsError> {
        let config: EngineConfig = if config.is_undefined() || config.is_null() { EngineConfig::default() } else { from_js(config, "the configuration")? };
        let engine = Engine::new(&config).map_err(|e| JsError::new(&e))?;
        Ok(ZooFlmCore { engine })
    }

    /// The standard features and the JSON Schema of each one's settings (Q14).
    #[wasm_bindgen(unchecked_return_type = "FeatureInfo[]")]
    pub fn features() -> Result<JsValue, JsError> {
        to_js(&Engine::features().map_err(|e| JsError::new(&e))?)
    }

    /// The diagnostics of the registry build (a successful build can carry
    /// Errors).
    #[wasm_bindgen(unchecked_return_type = "CoreDiagnostic[]")]
    pub fn build_diagnostics(&self) -> Result<JsValue, JsError> {
        to_js(&self.engine.build_diagnostics())
    }

    /// The number of fragments held (released ones not counted).
    pub fn fragment_count(&self) -> u32 {
        self.engine.fragment_count() as u32
    }

    /// Replaces the external index: `[{ label, href, display }]`, `display`
    /// being FLM text, parsed inline. Returns the parse diagnostics of the
    /// display texts (origin `index:LABEL`).
    #[wasm_bindgen(unchecked_return_type = "CoreDiagnostic[]")]
    pub fn set_external_index(&mut self, #[wasm_bindgen(unchecked_param_type = "ExternalIndexEntry[]")] entries: JsValue) -> Result<JsValue, JsError> {
        let entries: Vec<ExternalEntry> = from_js(entries, "the external index")?;
        let out = self.engine.set_external_index(&entries).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    pub fn external_index_len(&self) -> u32 {
        self.engine.external_index_len() as u32
    }

    /// Replaces the citations table: `[{ key, text }]` (Q6).
    pub fn set_citations(&mut self, #[wasm_bindgen(unchecked_param_type = "CitationEntry[]")] entries: JsValue) -> Result<(), JsError> {
        self.engine.set_citations(from_js::<Vec<CitationEntry>>(entries, "the citations table")?);
        Ok(())
    }

    pub fn citations_len(&self) -> u32 {
        self.engine.citations_len() as u32
    }

    /// Replaces the graphics table (Q7).
    pub fn set_graphics(&mut self, #[wasm_bindgen(unchecked_param_type = "GraphicsEntry[]")] entries: JsValue) -> Result<(), JsError> {
        self.engine.set_graphics(from_js::<Vec<GraphicsEntry>>(entries, "the graphics table")?);
        Ok(())
    }

    pub fn graphics_len(&self) -> u32 {
        self.engine.graphics_len() as u32
    }

    /// Parses `text` as one fragment with the canonical origin `origin`
    /// (empty: none). Returns `{ handle, empty, diagnostics }`.
    #[wasm_bindgen(unchecked_return_type = "ParsedOut")]
    pub fn parse(&mut self, text: &str, origin: &str, #[wasm_bindgen(unchecked_param_type = "FragmentLayoutName")] layout: &str) -> Result<JsValue, JsError> {
        let layout = engine::layout_of(layout).map_err(|e| JsError::new(&e))?;
        let out = self.engine.parse(text, origin, layout).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// A new handle for the fragment of `handle` with another layout: the
    /// same tree, source and parse diagnostics, not parsed again.
    pub fn with_layout(&mut self, handle: u32, #[wasm_bindgen(unchecked_param_type = "FragmentLayoutName")] layout: &str) -> Result<u32, JsError> {
        let layout = engine::layout_of(layout).map_err(|e| JsError::new(&e))?;
        self.engine.with_layout(handle, layout).map_err(|e| JsError::new(&e))
    }

    /// Frees the fragments of `handles`; every handle is checked first, and a
    /// released handle used later throws.
    pub fn release(&mut self, #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] handles: Vec<u32>) -> Result<(), JsError> {
        self.engine.release(&handles).map_err(|e| JsError::new(&e))
    }

    /// Every style and script definition the registry declares, the styles
    /// first, each in registration order, with the parts as declared (D8).
    #[wasm_bindgen(unchecked_return_type = "Definition[]")]
    pub fn html_definitions(&self) -> Result<JsValue, JsError> {
        to_js(&self.engine.html_definitions())
    }

    /// Renders the given fragments as one document with the `html` workflow.
    #[wasm_bindgen(unchecked_return_type = "HtmlOut")]
    pub fn render_html(
        &mut self,
        #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] handles: Vec<u32>,
        #[wasm_bindgen(unchecked_param_type = "RenderHtmlOptions | null | undefined")] options: JsValue,
    ) -> Result<JsValue, JsError> {
        let options: RenderOptions = if options.is_undefined() || options.is_null() { RenderOptions::default() } else { from_js(options, "the render_html options")? };
        let out = self.engine.render_html(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Renders the given fragments as one document with the `latex-recomposed`
    /// workflow (Q12).
    #[wasm_bindgen(unchecked_return_type = "LatexOut")]
    pub fn render_latex(
        &mut self,
        #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] handles: Vec<u32>,
        #[wasm_bindgen(unchecked_param_type = "RenderLatexOptions | null | undefined")] options: JsValue,
    ) -> Result<JsValue, JsError> {
        let options: LatexOptions = if options.is_undefined() || options.is_null() { LatexOptions::default() } else { from_js(options, "the render_latex options")? };
        let out = self.engine.render_latex(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Renders the given fragments as one document with the `text` workflow
    /// (Q11); with `per_tree`, also each tree alone, with that run's
    /// diagnostics.
    #[wasm_bindgen(unchecked_return_type = "TextOut")]
    pub fn render_text(
        &mut self,
        #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] handles: Vec<u32>,
        #[wasm_bindgen(unchecked_param_type = "RenderTextOptions | null | undefined")] options: JsValue,
    ) -> Result<JsValue, JsError> {
        let options: TextOptions = if options.is_undefined() || options.is_null() { TextOptions::default() } else { from_js(options, "the render_text options")? };
        let out = self.engine.render_text(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Truncates FLM source to about `options.chars` characters (R18).
    #[wasm_bindgen(unchecked_return_type = "TruncateOut")]
    pub fn truncate(
        &self,
        text: &str,
        origin: &str,
        #[wasm_bindgen(unchecked_param_type = "FragmentLayoutName")] layout: &str,
        #[wasm_bindgen(unchecked_param_type = "TruncateOptions")] options: JsValue,
    ) -> Result<JsValue, JsError> {
        let layout = engine::layout_of(layout).map_err(|e| JsError::new(&e))?;
        let options: TruncateOptions = from_js(options, "the truncate options")?;
        let out = self.engine.truncate(text, origin, layout, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Runs the scan (a bare plan over the tables the host reads) over the
    /// given fragments as one document; `standalone` lists the handles of
    /// standalone fields (Q5).
    #[wasm_bindgen(unchecked_return_type = "ScanOut")]
    pub fn scan(
        &mut self,
        #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] handles: Vec<u32>,
        #[wasm_bindgen(unchecked_param_type = "Uint32Array | number[]")] standalone: Vec<u32>,
    ) -> Result<JsValue, JsError> {
        let out = self.engine.scan(&handles, &standalone).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Reads the fields of an FLM data file (Q16).
    #[wasm_bindgen(unchecked_return_type = "FieldsOut")]
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
