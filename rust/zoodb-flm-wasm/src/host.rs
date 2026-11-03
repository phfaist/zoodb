//! The host tables and the services that answer from them (Q6, Q7).
//!
//! A service of flm-core is fixed when the registry is built and runs
//! synchronously inside a run, so a wasm host cannot hand it a JavaScript
//! callback that awaits anything. Instead, the host fills these tables from
//! JavaScript *before* a run, from what the scan run reported (the cited keys,
//! the image paths with their origins), and the services are plain lookups:
//!
//! - the citation provider answers a cited key with the compiled citation
//!   text of the existing citation manager (FLM source), keyed by the key
//!   with its prefix in lower case, which is also the work's identity;
//! - the graphics resolver and inspector answer an image, keyed by the
//!   canonical path of the source the image is written in and the path as
//!   written, with what the JavaScript resource collector found: the file's
//!   identity, media type and address, and its measurements.
//!
//! A miss is a plain `flm.citations.no-entry` or `flm.graphics.*` diagnostic
//! of the run, which the host answers by collecting and running again.

use std::collections::BTreeMap;
use std::sync::{Arc, RwLock};

use serde::Deserialize;

use flm_core::lang::{FlmOrigin, FlmSource};
use flm_core::stdcore::backends::pres::{I48F16, Length, LengthUnit};
use flm_core::stdcore::features::citations::{
    CitationAnswer, CitationProvider, CitationRequest, CitationResult, ProviderCx,
};
use flm_core::stdcore::features::graphics::{
    Dimensions, GraphicsInspectError, GraphicsInspectRequest, GraphicsInspectedInformation,
    GraphicsInspector, GraphicsResolveError, GraphicsResolveRequest, GraphicsResolver, ImageFile,
    PixelSize,
};

/// One compiled citation, as the host's citation manager produces it.
#[derive(Debug, Clone, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct CitationEntry {
    /// `prefix:key`, the prefix in any letter case (`arXiv:1902.07714`).
    pub key: String,
    /// The citation entry as FLM inline source.
    pub text: String,
}

/// One image the host has collected and inspected.
#[derive(Debug, Clone, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct GraphicsEntry {
    /// The canonical path of the source the image is written in, as the scan
    /// reported it (`people/Alice.yml#biography`).
    pub origin: String,
    /// The path as written in `\includegraphics`.
    pub path: String,
    /// The file's identity in the host's form (its resolved path, a hash).
    pub identity: String,
    /// `image/png`, `image/svg+xml`, …
    pub media_type: String,
    /// The address written in the output under the `reference` strategy.
    pub address: String,
    /// `raster` or `vector`.
    pub kind: String,
    /// Raster: the size in pixels.
    #[serde(default)]
    pub width_px: Option<u32>,
    #[serde(default)]
    pub height_px: Option<u32>,
    /// Raster: the resolution in dots per inch, where the file states one.
    #[serde(default)]
    pub dpi: Option<f64>,
    /// Vector: the physical size in points.
    #[serde(default)]
    pub width_pt: Option<f64>,
    #[serde(default)]
    pub height_pt: Option<f64>,
}

/// The tables, shared between the engine (which replaces them) and the
/// services (which read them during a run).
#[derive(Default)]
pub struct HostTables {
    citations: RwLock<BTreeMap<String, String>>,
    graphics: RwLock<BTreeMap<(String, String), GraphicsEntry>>,
}

/// `prefix:rest` with the prefix in lower case; a key with no prefix is
/// returned as written.
pub fn normalize_key(key: &str) -> String {
    match key.split_once(':') {
        Some((prefix, rest)) => format!("{}:{}", prefix.to_ascii_lowercase(), rest),
        None => key.to_string(),
    }
}

impl HostTables {
    pub fn set_citations(&self, entries: Vec<CitationEntry>) {
        let mut table = self.citations.write().unwrap();
        *table = entries.into_iter().map(|e| (normalize_key(&e.key), e.text)).collect();
    }

    pub fn citations_len(&self) -> usize {
        self.citations.read().unwrap().len()
    }

    pub fn set_graphics(&self, entries: Vec<GraphicsEntry>) {
        let mut table = self.graphics.write().unwrap();
        *table = entries.into_iter().map(|e| ((e.origin.clone(), e.path.clone()), e)).collect();
    }

    pub fn graphics_len(&self) -> usize {
        self.graphics.read().unwrap().len()
    }

    fn graphics_entry(&self, origin: &FlmOrigin, path: &str) -> Option<GraphicsEntry> {
        let origin = origin.canonical_path().unwrap_or("");
        self.graphics.read().unwrap().get(&(origin.to_string(), path.to_string())).cloned()
    }
}

/// The citation provider: a lookup in the citations table.
pub struct HostCitations(pub Arc<HostTables>);

impl CitationProvider for HostCitations {
    fn answer(&self, request: &CitationRequest, cx: &ProviderCx<'_>) -> CitationResult {
        let identity = normalize_key(&request.key);
        let text = match self.0.citations.read().unwrap().get(&identity) {
            Some(text) => text.clone(),
            None => return Ok(None),
        };
        let source = FlmSource::new(text.as_str()).with_origin(FlmOrigin::synthetic(format!("citation:{identity}")));
        cx.parse_entry(Arc::new(source)).map(|entry| Some(CitationAnswer::new(entry).with_identity(identity)))
    }
}

/// The graphics resolver and inspector: lookups in the graphics table.
pub struct HostGraphics(pub Arc<HostTables>);

impl GraphicsResolver for HostGraphics {
    fn resolve(&self, request: &GraphicsResolveRequest) -> Result<ImageFile, GraphicsResolveError> {
        match self.0.graphics_entry(&request.origin, &request.path) {
            Some(e) => Ok(ImageFile::new(e.identity, e.media_type, e.address)),
            None => Err(GraphicsResolveError::new(format!(
                "no collected image for `{}` written in `{}`",
                request.path,
                request.origin.canonical_path().unwrap_or("?")
            ))),
        }
    }

    /// The content is never available here (the host inspected the file
    /// outside the run), and the inspector below does not read it; the
    /// inspect stage asks for it whenever an inspector is registered.
    fn read(&self, _file: &ImageFile) -> Result<Vec<u8>, GraphicsResolveError> {
        Ok(Vec::new())
    }
}

fn points(value: f64) -> Length {
    Length::new(I48F16::from_num(value), LengthUnit::Points)
}

impl GraphicsInspector for HostGraphics {
    fn inspect(&self, request: &GraphicsInspectRequest) -> Result<GraphicsInspectedInformation, GraphicsInspectError> {
        let Some(e) = self.0.graphics_entry(&request.origin, &request.path) else {
            return Err(GraphicsInspectError::new(format!("no collected image for `{}`", request.path)));
        };
        match e.kind.as_str() {
            "raster" => {
                let (Some(width), Some(height)) = (e.width_px, e.height_px) else {
                    return Err(GraphicsInspectError::new(format!("no pixel size collected for `{}`", request.path)));
                };
                let physical_dimensions = match (e.width_pt, e.height_pt) {
                    (Some(w), Some(h)) => Some(Dimensions { width: points(w), height: points(h) }),
                    _ => None,
                };
                Ok(GraphicsInspectedInformation::Raster {
                    dpi: e.dpi.map(I48F16::from_num),
                    size: PixelSize { width, height },
                    physical_dimensions,
                })
            }
            "vector" => {
                let (Some(w), Some(h)) = (e.width_pt, e.height_pt) else {
                    return Err(GraphicsInspectError::new(format!("no physical size collected for `{}`", request.path)));
                };
                Ok(GraphicsInspectedInformation::Vector { physical_dimensions: Dimensions { width: points(w), height: points(h) } })
            }
            other => Err(GraphicsInspectError::new(format!("unknown image kind `{other}` for `{}`", request.path))),
        }
    }
}
