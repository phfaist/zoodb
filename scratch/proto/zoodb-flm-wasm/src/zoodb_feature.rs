//! The ZooDb feature of the registry: what ZooDb adds beside the standard
//! features: the `srcset` publish stage (Q7, R8), the standalone check stage
//! (Q5) and the `field` environment of the FLM-files loader (Q16).
//!
//! The standard `graphics` feature registers `flm.graphics.publish.html`,
//! which writes `flm.graphics.published.html` (the address of each image and
//! its alternative sources, always none). This feature registers a second
//! writer of that table, `zoodb.graphics.publish.html`, which writes the same
//! address under the `reference` strategy (the resolver's address, else the
//! path as written) and, for a raster image, the alternative sources that
//! Parcel produces from a query string, as ZooDb computes them today. The
//! plan picks the writer the host prefers (`Overrides::prefer`).

use std::collections::BTreeSet;
use std::sync::Arc;

use serde::Deserialize;

use flm_core::core::data::store::StageOut;
use flm_core::core::data::table::{Table, TableName};
use flm_core::core::plan::PlanCx;
use flm_core::core::registry::{BuildError, CapabilityDef, FeatureBuilder, FeatureInfo, FlmFeature};
use flm_core::core::run::StageCx;
use flm_core::core::stage::{Effect, Needs, Scope, Stage, StageDecl};
use flm_core::lang::FlmOrigin;
use flm_core::lang::mint::{ArgDef, BodyDef, ElementDef, SyntaxDef};
use flm_core::model::addr::{NodeAddr, TreeId};
use flm_core::model::aspects::{BlockRole, BlockRoleAspect, FixedBlockRole};
use flm_core::model::element::{ElementSpec, element_of};
use flm_core::model::names::StageName;
use flm_core::stdcore::features::citations::{CITE, REFCITE};
use flm_core::stdcore::features::graphics::IMAGE_ELEMENT;
use flm_core::stdcore::features::index::ELEMENT_INDEX;
use flm_core::stdcore::features::refpoints::REFPOINTS;
use flm_core::stdcore::features::refs::REF_RESOLUTIONS;
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

// --- the standalone check (Q5) ---------------------------------------------------------

/// The external table the host installs per run: the trees parsed from
/// standalone fields.
pub const STANDALONE_TREES: TableName<StandaloneTrees> = TableName::new("zoodb.standalone.trees");
/// The capability the check stage provides; a plan that demands it runs the check.
pub const STANDALONE_CHECKED: &str = "zoodb.standalone.checked";
pub const STANDALONE_CHECK_STAGE: &str = "zoodb.standalone.check";

#[derive(Debug, Clone, Default)]
pub struct StandaloneTrees {
    pub trees: BTreeSet<TreeId>,
}

impl Table for StandaloneTrees {
    fn absorb(&mut self, piece: StandaloneTrees) {
        self.trees.extend(piece.trees);
    }
}

// --- the `field` environment of the FLM-files loader (Q16) ------------------------------

pub const FIELD_ELEMENT: &str = "zoodb.field";
pub const FIELD_ENVIRONMENT: &str = "field";
pub const FIELD_NAME_ARG: &str = "fieldname";

/// The per-value data of the `field` element, for the element index.
#[derive(Debug, Default, Clone, Copy)]
pub struct FieldElement;

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
        let owner = b.feature().clone();
        // Q5: the standalone check.
        b.external_table(STANDALONE_TREES, "the trees parsed from standalone fields, which the host names per run")?;
        b.capability(CapabilityDef::new(STANDALONE_CHECKED).docs("every standalone tree was checked to state no fact about the document"))?;
        b.stage(Arc::new(StandaloneCheckStage))?;
        // Q16: `\begin{field}{name} … \end{field}`, a verbatim body that the
        // FLM-files loader reads; never rendered.
        b.element(
            ElementDef::new(
                owner,
                [FIELD_ENVIRONMENT],
                SyntaxDef::Environment { args: vec![ArgDef::mandatory(FIELD_NAME_ARG)], body: BodyDef::new().verbatim() },
                Arc::new(
                    ElementSpec::new(FIELD_ELEMENT)
                        .docs("`\\begin{field}{name} … \\end{field}`: one field of a zoo object in an FLM data file, its body kept verbatim.")
                        .with::<dyn BlockRoleAspect>(Arc::new(FixedBlockRole(BlockRole::Block)))
                        .with_value(Arc::new(FieldElement)),
                ),
            )
            .docs("`\\begin{field}{name} … \\end{field}`: a field of an FLM data file."),
        )?;
        // Q7: the srcset publish stage.
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

/// Condition `zoodb.standalone.violation`, an Error: a standalone field holds
/// something that states a fact about the document (a reference point, a
/// reference, a citation, an image), so it cannot be shown anywhere.
#[derive(Debug, Clone, PartialEq, Eq, DiagnosticInfo)]
#[diagnostic(id = "zoodb.standalone.violation", message = "a standalone field holds {what}, which only a document can hold")]
struct StandaloneViolation {
    what: String,
}

/// The standalone check (Q5): for every tree the host marked standalone, one
/// pass over the reference points, the reference sites and the element index.
struct StandaloneCheckStage;

impl Stage for StandaloneCheckStage {
    fn decl(&self) -> StageDecl {
        StageDecl::new(StageName::from(STANDALONE_CHECK_STAGE), Effect::Check, Scope::Document)
            .provides(STANDALONE_CHECKED)
            .docs("Reports every reference point, reference, citation and image inside a standalone tree.")
    }

    fn needs(&self, _cx: &PlanCx<'_>) -> Needs {
        Needs::new().reads_opt(STANDALONE_TREES).reads(REFPOINTS).reads(REF_RESOLUTIONS).reads(ELEMENT_INDEX)
    }

    fn run(&self, cx: &StageCx<'_>, out: &mut StageOut<'_>) {
        let Ok(Some(standalone)) = cx.get(STANDALONE_TREES) else { return };
        let mut report = |span: flm_core::lang::FlmSpan, what: String| {
            out.diags.push(Diagnostic::error(StandaloneViolation { what }, span));
        };
        for &id in &standalone.trees {
            let Some(tree) = cx.frozen_tree(id) else { continue };
            if let Ok(Some(points)) = cx.get(REFPOINTS) {
                for record in points.of_tree(id) {
                    report(record.span.clone(), format!("a reference point ({:?})", record.point.kind));
                }
            }
            if let Ok(Some(resolutions)) = cx.get(REF_RESOLUTIONS) {
                for site in resolutions.sites.keys() {
                    if site.addr.tree == id {
                        if let Some(node) = tree.get(site.addr.node) {
                            report(node.span().clone(), String::from("a reference"));
                        }
                    }
                }
            }
            if let Ok(Some(index)) = cx.get(ELEMENT_INDEX) {
                for (node_id, _) in index.entries(id) {
                    let Some(node) = tree.get(*node_id) else { continue };
                    let name = element_of(&node).name.to_string();
                    let what = match name.as_str() {
                        CITE | REFCITE => "a citation",
                        IMAGE_ELEMENT => "an image",
                        _ => continue,
                    };
                    report(node.span().clone(), String::from(what));
                }
            }
        }
    }
}
