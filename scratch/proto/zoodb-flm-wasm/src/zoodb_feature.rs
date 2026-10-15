//! The ZooDb feature of the registry: what ZooDb adds beside the standard
//! features. In this milestone, the `srcset` publish stage (Q7, R8).
//!
//! The standard `graphics` feature registers `flm.graphics.publish.html`,
//! which writes `flm.graphics.published.html` (the address of each image and
//! its alternative sources, always none). This feature registers a second
//! writer of that table, `zoodb.graphics.publish.html`, which writes the same
//! address under the `reference` strategy (the resolver's address, else the
//! path as written) and, for a raster image, the alternative sources that
//! Parcel produces from a query string, as ZooDb computes them today. The
//! plan picks the writer the host prefers (`Overrides::prefer`).

use std::sync::Arc;

use serde::Deserialize;

use flm_core::core::data::store::StageOut;
use flm_core::core::plan::PlanCx;
use flm_core::core::registry::{BuildError, FeatureBuilder, FeatureInfo, FlmFeature};
use flm_core::core::run::StageCx;
use flm_core::core::stage::{Effect, Needs, Scope, Stage, StageDecl};
use flm_core::lang::FlmOrigin;
use flm_core::model::addr::NodeAddr;
use flm_core::model::names::StageName;
use flm_core::stdcore::backends::html;
use flm_core::stdcore::backends::pres::SrcsetCandidate;
use flm_core::stdcore::features::graphics::{
    GraphicsInspectedInformation, GraphicsPublished, GraphicsRecord, INFO, PublishedImage, names_scheme,
    published_table,
};
use flm_core::techy::error::{Diagnostic, DiagnosticInfo};
use flm_core::techy::source::{Source, SourceSpan};

pub const FEATURE: &str = "zoodb";
pub const PUBLISH_STAGE: &str = "zoodb.graphics.publish.html";

/// How alternative sources are produced: the `graphics_use_srcset_parceljs`
/// option of ZooDb today.
#[derive(Debug, Clone, Default, Deserialize)]
pub struct SrcsetConfig {
    /// The pixel densities to offer (`[1, 2]`); `1..=image_max_zoom_factor`
    /// when absent.
    #[serde(default)]
    pub pixel_density_list: Option<Vec<u32>>,
    #[serde(default)]
    pub image_max_zoom_factor: Option<u32>,
}

impl SrcsetConfig {
    fn densities(&self) -> Vec<u32> {
        match &self.pixel_density_list {
            Some(list) => list.clone(),
            None => (1..=self.image_max_zoom_factor.unwrap_or(1)).collect(),
        }
    }
}

pub struct ZoodbFeature {
    pub srcset: Option<SrcsetConfig>,
}

impl FlmFeature for ZoodbFeature {
    fn info(&self) -> FeatureInfo {
        FeatureInfo::new(FEATURE, "ZooDb").docs("What ZooDb adds beside the standard features: the srcset publish stage.")
    }

    fn register(&self, b: &mut FeatureBuilder<'_>) -> Result<(), BuildError> {
        b.peer_backend(html::BACKEND, "the html backend, whose published image addresses this feature writes")?;
        b.peer_table::<GraphicsPublished>(
            published_table(html::BACKEND).name().clone(),
            "the address and alternative sources the html backend writes for each image",
        )?;
        // Registered only when configured: a second writer of the published
        // table must be preferred by the plan, and the engine prefers it
        // exactly when srcset is configured.
        match &self.srcset {
            Some(srcset) => b.stage(Arc::new(PublishStage { srcset: srcset.clone() })),
            None => Ok(()),
        }
    }
}

/// Condition `zoodb.graphics.publish-failed`, an Error: the stage could not
/// read or write a table.
#[derive(Debug, Clone, PartialEq, Eq, DiagnosticInfo)]
#[diagnostic(id = "zoodb.graphics.publish-failed", message = "the stage `{stage}` failed: {detail}")]
struct PublishFailed {
    stage: String,
    detail: String,
}

fn failed(out: &mut StageOut<'_>, detail: impl ToString) {
    let source = Arc::new(Source::new("").with_origin(FlmOrigin::synthetic(PUBLISH_STAGE)));
    out.diags.push(Diagnostic::error(
        PublishFailed { stage: PUBLISH_STAGE.to_string(), detail: detail.to_string() },
        SourceSpan::new(&source, 0..0),
    ));
}

struct PublishStage {
    srcset: SrcsetConfig,
}

impl PublishStage {
    /// Parcel's candidates, as ZooDb computes them today: for each density
    /// `f` whose `96 f` dpi stays below the image's resolution, the image
    /// resampled to that resolution, with the descriptor `fx`.
    fn srcset_of(&self, src: &str, record: &GraphicsRecord) -> Vec<SrcsetCandidate> {
        let config = &self.srcset;
        let Some(GraphicsInspectedInformation::Raster { dpi: Some(dpi), size, .. }) = record.inspected else {
            return Vec::new();
        };
        let dpi: f64 = dpi.to_num();
        let mut candidates = Vec::new();
        for factor in config.densities() {
            let target = 96.0 * f64::from(factor);
            if target >= dpi {
                break;
            }
            let width = (f64::from(size.width) * target / dpi).round() as u64;
            let height = (f64::from(size.height) * target / dpi).round() as u64;
            candidates.push(SrcsetCandidate {
                src: format!("{src}?as=webp&width={width}&height={height}"),
                descriptor: format!("{factor}x"),
            });
        }
        candidates
    }
}

impl Stage for PublishStage {
    fn decl(&self) -> StageDecl {
        StageDecl::new(StageName::from(PUBLISH_STAGE), Effect::Compute, Scope::PerTree)
            .writes(published_table(html::BACKEND))
            .docs("Writes the address of each image by reference and Parcel's srcset candidates into `flm.graphics.published.html`.")
    }

    fn needs(&self, _cx: &PlanCx<'_>) -> Needs {
        Needs::new().reads(INFO)
    }

    fn run(&self, cx: &StageCx<'_>, out: &mut StageOut<'_>) {
        let Some(id) = cx.tree_id() else { return };
        let info = match cx.get(INFO) {
            Ok(Some(info)) => info,
            Ok(None) => return,
            Err(error) => return failed(out, error),
        };
        let entries: Vec<(NodeAddr, PublishedImage)> = info
            .iter()
            .filter(|(addr, _)| addr.tree == id)
            .map(|(addr, record)| {
                let src = match &record.file {
                    Some(file) if !names_scheme(&record.path) => file.address.clone(),
                    _ => record.path.clone(),
                };
                let srcset = self.srcset_of(&src, record);
                (addr, PublishedImage { src, srcset })
            })
            .collect();
        let published = match build_published(entries) {
            Ok(published) => published,
            Err(detail) => {
                failed(out, detail);
                GraphicsPublished::default()
            }
        };
        match out.table(&published_table(html::BACKEND)) {
            Ok(table) => *table = published,
            Err(error) => failed(out, error),
        }
    }
}

/// Builds the table's value from the entries. **Blocked (U2):** flm-core
/// gives a host no way to put an entry into a `GraphicsPublished` (its map is
/// private; only `Default` and `absorb` are public), so this stage cannot
/// write what it computed. With the cargo feature `published-insert` the
/// call below names the constructor requested in U2; without it the stage
/// reports the block and writes an empty table.
fn build_published(entries: Vec<(NodeAddr, PublishedImage)>) -> Result<GraphicsPublished, String> {
    if entries.is_empty() {
        return Ok(GraphicsPublished::default());
    }
    #[cfg(feature = "published-insert")]
    {
        Ok(entries.into_iter().collect())
    }
    #[cfg(not(feature = "published-insert"))]
    {
        Err(format!(
            "cannot write {} published image(s): flm-core offers no constructor for `GraphicsPublished` (U2)",
            entries.len()
        ))
    }
}
