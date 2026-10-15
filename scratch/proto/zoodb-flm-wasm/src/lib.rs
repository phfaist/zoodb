//! Step-zero prototype: `flm-core` compiled to WebAssembly and driven from
//! JavaScript through wasm-bindgen. Not the real binding.

pub mod engine;

use serde::Serialize;
use wasm_bindgen::prelude::*;

use crate::engine::{Engine, EngineConfig, ExternalEntry, RenderOptions};

#[wasm_bindgen(start)]
pub fn start() {
    // One thread, sized at link time (see .cargo/config.toml): mark it so that
    // no entry point tries to create a worker thread (R1).
    flm_core::lang::guard::mark_worker_thread();
    #[cfg(feature = "debug-panics")]
    console_error_panic_hook::set_once();
}

fn to_js<T: Serialize>(value: &T) -> Result<JsValue, JsError> {
    let serializer = serde_wasm_bindgen::Serializer::json_compatible();
    value.serialize(&serializer).map_err(|e| JsError::new(&e.to_string()))
}

#[wasm_bindgen]
pub struct ZooFlm {
    engine: Engine,
}

#[wasm_bindgen]
impl ZooFlm {
    #[wasm_bindgen(constructor)]
    pub fn new(config: JsValue) -> Result<ZooFlm, JsError> {
        let config: EngineConfig = if config.is_undefined() || config.is_null() {
            EngineConfig::default()
        } else {
            serde_wasm_bindgen::from_value(config).map_err(|e| JsError::new(&e.to_string()))?
        };
        let engine = Engine::new(&config).map_err(|e| JsError::new(&e))?;
        Ok(ZooFlm { engine })
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
        let entries: Vec<ExternalEntry> = serde_wasm_bindgen::from_value(entries).map_err(|e| JsError::new(&e.to_string()))?;
        let out = self.engine.set_external_index(&entries).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    pub fn external_index_len(&self) -> u32 {
        self.engine.external_index_len() as u32
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
        let options: RenderOptions = if options.is_undefined() || options.is_null() {
            RenderOptions::default()
        } else {
            serde_wasm_bindgen::from_value(options).map_err(|e| JsError::new(&e.to_string()))?
        };
        let out = self.engine.render_html(&handles, &options).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }

    /// Runs the `check` workflow over the given fragments as one document and
    /// returns the scan tables.
    pub fn scan(&mut self, handles: Vec<u32>) -> Result<JsValue, JsError> {
        let out = self.engine.scan(&handles).map_err(|e| JsError::new(&e))?;
        to_js(&out)
    }
}
