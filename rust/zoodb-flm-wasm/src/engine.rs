//! The engine: `flm-core` driven from plain Rust, with no wasm types, so that
//! it compiles and tests natively and is wrapped by `lib.rs` for WebAssembly.
//!
//! One registry is built from the configuration (the standard package from
//! its settings as data, `math_passthrough`, the ZooDb feature, and the
//! services over the host tables); fragments are parsed with it and kept by
//! handle; each call places the given handles in one document and runs a plan
//! over it (cached per options key): the html, text or recomposed-LaTeX
//! workflow, or the scan (a bare plan request for the tables the host reads).
//! A render call that gives values of settings bound to the registry runs on
//! a variant: a registry built from the settings with those values over them,
//! cached with its plans (brief 14, P2). Diagnostics carry the origin
//! (`path#field`), the byte range and the line and column within the
//! fragment's text.

use std::collections::{BTreeMap, BTreeSet};
use std::sync::Arc;

use serde::{Deserialize, Serialize};

use flm_core::core::plan::{Overrides, Plan, PlanRequest};
use flm_core::model::names::{BackendName, ElementName, StageName};
use flm_core::stdcore::features::citations::{CitationProvider, PROVIDERS_SLOT};
use flm_core::stdcore::features::graphics::{GraphicsInspector, GraphicsResolver, INSPECTOR_SLOT, RESOLVER_SLOT};

use crate::host::{CitationEntry, GraphicsEntry, HostCitations, HostGraphics, HostTables};
use crate::zoodb_feature::{FIELD_ELEMENT, FIELD_NAME_ARG, PUBLISH_STAGE, STANDALONE_CHECKED, STANDALONE_TREES, SrcsetConfig, StandaloneTrees, ZoodbFeature};
use flm_core::model::element::element_of;
use flm_core::core::registry::{DefContent, FlmRegistry, RegistryBuilder, RegistryInputs};
use flm_core::core::run::{Externals, Run, RunOptions};
use flm_core::lang::{Flm, FlmDiagnostic, FlmGroupType, FlmOrigin, FlmParsing, FlmSource, ParseOptions, parse_fragment};
use flm_core::techy::core::node::{NodeKind, NodeRef};
use flm_core::model::addr::TreeId;
use flm_core::model::doc::{Doc, DocContent, Fragment, FragmentLayout};
use flm_core::model::options::OptionValues;
use flm_core::stdcore::backends::html::{
    self, DEFINITIONS_TABLE, DefinitionKind, DefinitionOverride, HtmlRenderOptions, OUTPUT_TABLE,
    PIECES_TABLE,
};
use flm_core::stdcore::backends::latex_recomposed::{
    self, DOCUMENT as LATEX_DOCUMENT, LatexRecomposedRenderOptions, OUTPUT_TABLE as LATEX_OUTPUT_TABLE, STYLE_FILE, style_artifact,
};
use flm_core::stdcore::backends::pieces::PiecesRenderOptions;
use flm_core::stdcore::backends::text::{self, TEXT_OUTPUT, TextRenderOptions};
use flm_core::stdcore::features::citations::{CitationElement, KEYS, Reading, read_chunk};
use flm_core::stdcore::features::defterm::{DeftermElement, TERM_ARG};
use flm_core::stdcore::features::href::FEATURE as HREF_FEATURE;
use flm_core::stdcore::features::refs::{RefsRecomposeOptions, SafeLabelMode};
use flm_core::core::lowering::chars_at_lowering;
use flm_core::stdcore::features::graphics::{GraphicsImage, PATH_ARG};
use flm_core::stdcore::features::index::ELEMENT_INDEX;
use flm_core::stdcore::features::refs::{
    ANCHORS, EXTERNAL_INDEX, ExternalIndex, ExternalTarget, LABELS, REF_RESOLUTIONS, REF_TARGETS, RefsRenderOptions, Resolution, SiteId,
    UnresolvedRefs, label_anchor, value_of,
};
use flm_core::model::aspects::{Label, PointId, Referenceable, Referencing};
use flm_core::model::options::{Bind, Options};
use flm_core::core::registry::PackageFactory;
use flm_core::techy::core::node::NodeTree;
use flm_core::core::settings::PackageSettings;
use flm_core::stdcore;
use flm_core::lang::structural::PARBREAK;
use flm_core::techy::error::Severity;
use flm_core::techy::source::{LineIndexCache, SourceOrigin};

// ---------------------------------------------------------------------------
// Configuration and outputs (all serializable: they cross to JavaScript)

#[derive(Debug, Clone, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct EngineConfig {
    /// Whether `$…$` delimits mathematics (the EC zoo writes `\(…\)`).
    pub dollar_math: bool,
    /// Alternative image sources for the html output (Q7); none when absent.
    /// With it, the ZooDb publish stage is preferred over the standard one.
    pub srcset: Option<SrcsetConfig>,
    /// The settings of the standard features as data (Q14): one map per
    /// feature, `{ feature: { key: value } }`, read through the feature's
    /// declaration (`stdcore::factory`). User definitions go under
    /// `userdefs` (`macros`, `environments`, `specials`).
    pub settings: serde_json::Map<String, serde_json::Value>,
    /// Standard features switched off by name.
    pub off: Vec<String>,
    /// Whether, in the html output, a `\href`, `\url` or `\email` to an
    /// address outside the site opens in a new tab (`target="_blank"`; the
    /// rule of [`crate::links`]). Default `true`.
    pub link_target_blank: bool,
}

impl Default for EngineConfig {
    fn default() -> EngineConfig {
        EngineConfig {
            dollar_math: false,
            srcset: None,
            settings: serde_json::Map::new(),
            off: Vec::new(),
            link_target_blank: true,
        }
    }
}

/// One feature of the standard package with its settings schema, for
/// documentation and validation on the JavaScript side.
#[derive(Debug, Clone, Serialize)]
pub struct FeatureInfoOut {
    pub name: String,
    pub schema: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize)]
pub struct DiagOut {
    pub identifier: String,
    pub severity: &'static str,
    pub message: String,
    /// The label of the source the diagnostic is in: its canonical path (a
    /// fragment's origin, `path#field`), or the label of a source the library
    /// created (`index:person:alice`, `citation:arxiv:…`); `None` when it has
    /// neither.
    pub origin: Option<String>,
    pub start: usize,
    pub end: usize,
    pub line: Option<usize>,
    pub col: Option<usize>,
}

/// One entry of the external index: a label of another document (a zoo
/// object, `person:bob`), where a link to it leads, and the FLM text a
/// reference to it shows.
#[derive(Debug, Clone, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct ExternalEntry {
    pub label: String,
    pub href: String,
    pub display: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct ParsedOut {
    pub handle: u32,
    /// The tree holds only whitespace, comments and paragraph breaks.
    pub empty: bool,
    pub diagnostics: Vec<DiagOut>,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct RenderOptions {
    pub title: Option<String>,
    /// Unresolved references are Warnings instead of Errors.
    pub unresolved_refs_warning: bool,
    /// Values of settings for this run only, as data (`{ feature: { key:
    /// value } }`, the shape of the settings): over the settings, key by key
    /// ([`Engine::call_settings`]). A key bound to the registry makes the run
    /// use a variant.
    pub render_options: serde_json::Map<String, serde_json::Value>,
}

/// Options of a recomposed-LaTeX run (Q12).
#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct LatexOptions {
    /// Label types written as the document spelled them (`code`, `domain`,
    /// `kingdom`: the handbook's aux definitions resolve them); every other
    /// type gets a safe label.
    pub raw_label_types: Vec<String>,
    pub drop_comments: bool,
    pub unresolved_refs_warning: bool,
    /// Values of settings for this run only, as for html
    /// ([`RenderOptions`]): `refs.unresolved` and
    /// `latex-recomposed.drop_comments` are refused (this struct's fields set
    /// them).
    pub render_options: serde_json::Map<String, serde_json::Value>,
}

#[derive(Debug, Clone, Serialize)]
pub struct LatexOut {
    /// One LaTeX text per handle given, in the same order.
    pub trees: Vec<String>,
    /// The style file the run produced (`<stem>.<hash>.sty`), if any.
    pub style_name: Option<String>,
    pub style: Option<String>,
    /// The whole document as the workflow's final stage assembles it (the
    /// handbook composes its own instead).
    pub document: Option<String>,
    pub diagnostics: Vec<DiagOut>,
    pub has_errors: bool,
}

/// Options of a plain-text run (Q11).
#[derive(Debug, Clone, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct TextOptions {
    /// The line width in columns; `None` never wraps.
    pub width: Option<u32>,
    pub link_addresses: bool,
    /// Unresolved references are Warnings instead of Errors (the default
    /// for text, unlike html and LaTeX).
    pub unresolved_refs_warning: bool,
    /// Also render each tree alone, for its own text (`trees`). The marks
    /// of the whole run's text cover only the lowered nodes that carry one
    /// (emphasis, links, mathematics), not plain text, so a tree's text cannot
    /// be cut out of the whole reliably.
    pub per_tree: bool,
    /// Whether the pieces (the list of cited works, the notes) are placed in
    /// the text; off, a citation is its mark alone, which is what a search
    /// index and a snippet want (Q11).
    pub pieces: bool,
    /// Values of settings for this run only, as for html
    /// ([`RenderOptions`]).
    pub render_options: serde_json::Map<String, serde_json::Value>,
}

impl Default for TextOptions {
    fn default() -> TextOptions {
        TextOptions {
            width: None,
            link_addresses: false,
            unresolved_refs_warning: true,
            per_tree: false,
            pieces: false,
            render_options: serde_json::Map::new(),
        }
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct TextOut {
    /// The whole printed text of the run.
    pub text: String,
    /// With `per_tree`, the text of each handle given, in the same order,
    /// each tree rendered alone; empty otherwise.
    pub trees: Vec<String>,
    /// With `per_tree`, the diagnostics of each tree's own run, in the same
    /// order as `trees`; empty otherwise. A reference to another tree does
    /// not resolve in a tree's own run, so these hold what `diagnostics`
    /// holds for the tree and such references besides.
    pub tree_diagnostics: Vec<Vec<DiagOut>>,
    /// The diagnostics of the run over all the trees.
    pub diagnostics: Vec<DiagOut>,
    pub has_errors: bool,
}

/// Options of the truncation helper (R18).
#[derive(Debug, Clone, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct TruncateOptions {
    pub chars: usize,
    #[serde(default)]
    pub min_chars: Option<usize>,
    #[serde(default = "default_marker")]
    pub marker: String,
    #[serde(default)]
    pub first_paragraph: bool,
}

fn default_marker() -> String {
    String::from(" …")
}

#[derive(Debug, Clone, Serialize)]
pub struct TruncateOut {
    pub source: String,
    pub truncated: bool,
    pub cut_at: Option<usize>,
    pub diagnostics: Vec<DiagOut>,
}

#[derive(Debug, Clone, Serialize)]
pub struct DefOut {
    pub id: String,
    pub kind: &'static str,
    pub owner: String,
    /// Each part: `{ kind: inline|file|url|table|host, text }`: the text, a
    /// file path, an address, the name of the table that supplies the text
    /// per document (in the registry's list only: a run resolves it to
    /// `inline`), or `host` (the host supplies the definition, in a run's
    /// list only).
    pub parts: Vec<DefPartOut>,
}

#[derive(Debug, Clone, Serialize)]
pub struct DefPartOut {
    pub kind: &'static str,
    pub text: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct PieceOut {
    pub name: String,
    /// `before-content` or `after-content`.
    pub place: &'static str,
    pub html: String,
    /// The identifiers of the definitions the piece's HTML requires.
    pub requires: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct HtmlOut {
    /// One HTML string per handle given, in the same order.
    pub trees: Vec<String>,
    /// The identifiers of the definitions each tree's HTML requires, in the
    /// same order as `trees`.
    pub tree_requires: Vec<Vec<String>>,
    pub pieces: Vec<PieceOut>,
    /// The union of `tree_requires`.
    pub requires: Vec<String>,
    pub definitions: Vec<DefOut>,
    pub diagnostics: Vec<DiagOut>,
    pub has_errors: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct GraphicsRefOut {
    /// The path as written.
    pub path: String,
    /// The canonical path of the source the image is written in: the key
    /// the host's graphics table uses.
    pub origin: Option<String>,
}

/// A label a tree defines, as the scan found it: what the host needs to
/// build the external index entry of the label (Q4).
#[derive(Debug, Clone, Serialize)]
pub struct ScanLabelOut {
    /// The label, `type:label`.
    pub label: String,
    /// The anchor the scan run gave the point that keeps the label
    /// (`flm.anchors`) when one of the labels of its point forms it
    /// (`label_anchor`: `type-label`, the same in any document), so that all
    /// the labels of a point get its anchor; `None` for a point anchored
    /// otherwise (on its number, as a float, an equation or a theorem; on a
    /// title slug that was renumbered; after a collision) or not at all,
    /// whose anchor depends on the document it is rendered in.
    pub anchor: Option<String>,
    /// The FLM source of the content the point shows (a heading's title):
    /// the source text the copied content nodes span, without the braces
    /// when it is one braced group. `None` for a point with no content (one
    /// shown by its number alone).
    pub display: Option<String>,
}

/// A reference site of a tree: the label it points at, and whether the scan
/// resolved it (to a point of the scanned document; the scan installs no
/// external index).
#[derive(Debug, Clone, Serialize)]
pub struct ScanRefOut {
    pub label: String,
    pub resolved: bool,
}

/// A label written for a second point: the label and where the later point
/// is (the origin label of its source and the byte range of its node).
#[derive(Debug, Clone, Serialize)]
pub struct ScanDuplicateOut {
    pub label: String,
    pub origin: Option<String>,
    pub start: usize,
    pub end: usize,
}

/// A term definition of a tree (`\begin{defterm}{term} … \end{defterm}`),
/// as the scan found it: what a glossary needs to list the term with its
/// body, its link and the references to it.
#[derive(Debug, Clone, Serialize)]
pub struct ScanTermOut {
    /// The labels of the term definition's point, in its order: the one
    /// computed from the term (`defterm:<term>`, which a term link targets),
    /// one per alias (`\aliasterm{…}`), then those written with `\label`.
    pub labels: Vec<String>,
    /// The point's anchor when one of its labels forms it (`type-label`,
    /// the same in every document), as for [`ScanLabelOut::anchor`].
    pub anchor: Option<String>,
    /// The FLM source of the term (the environment's argument, without its
    /// braces); `None` when it is blank or not in the tree's own source.
    pub display: Option<String>,
    /// The byte range of the body in the tree's source (the content after
    /// the term and the `\label` and `\aliasterm` fields, up to
    /// `\end{defterm}`); `None` for an empty body, or one not written in the
    /// tree's own source (through a user definition's template).
    pub body_start: Option<usize>,
    pub body_end: Option<usize>,
}

#[derive(Debug, Clone, Default, Serialize)]
pub struct ScanTreeOut {
    /// The labels the tree defines (those whose point the tree holds), in
    /// the order of their points.
    pub labels: Vec<ScanLabelOut>,
    /// The reference sites of the tree, in tree order.
    pub refs: Vec<ScanRefOut>,
    pub graphics: Vec<GraphicsRefOut>,
    /// The term definitions of the tree, in tree order.
    pub terms: Vec<ScanTermOut>,
    /// The citation keys the tree cites, each once, in order of first
    /// citation in the tree (read from its `\cite` and `\R` nodes as the
    /// collect stage of `flm.citations.keys` reads them).
    pub cited: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ScanOut {
    /// One entry per handle given, in the same order.
    pub trees: Vec<ScanTreeOut>,
    /// The cited keys of all the trees (`flm.citations.keys`), each once, in
    /// order of first citation, with the origin of that first citation; every
    /// tree that cites a key lists it in its own `cited`.
    pub cited: Vec<(String, Option<String>)>,
    /// The labels written more than once, each with the later point.
    pub duplicate_labels: Vec<ScanDuplicateOut>,
    /// The number of `zoodb.standalone.violation` diagnostics (Q5).
    pub standalone_violations: usize,
    pub diagnostics: Vec<DiagOut>,
    pub has_errors: bool,
}

/// One field of an FLM data file (Q16): its name and the byte range of its
/// verbatim body in the file's text.
#[derive(Debug, Clone, Serialize)]
pub struct FieldOut {
    pub name: String,
    pub start: usize,
    pub end: usize,
    pub text: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct FieldsOut {
    pub fields: Vec<FieldOut>,
    pub diagnostics: Vec<DiagOut>,
}

// ---------------------------------------------------------------------------

pub struct Engine {
    registry: Arc<FlmRegistry>,
    /// The fragments by handle (the index); a released handle keeps its
    /// slot, empty, so that a handle is never given out twice.
    fragments: Vec<Option<Arc<Fragment>>>,
    plans: BTreeMap<String, Arc<Plan>>,
    /// The external index installed in every render run (Q4): labels of zoo
    /// objects, with their link target and display content.
    external_index: ExternalIndex,
    /// The entries the external index was last built from, from which a
    /// variant builds its own, and the number of times they were replaced.
    external_entries: Vec<ExternalEntry>,
    external_generation: u64,
    /// The citations and graphics tables the services read (Q6, Q7).
    host: Arc<HostTables>,
    /// Whether the html plan prefers the ZooDb publish stage (srcset).
    prefer_zoodb_publish: bool,
    /// The option values the settings gave (Q14): set on every document and
    /// merged into every plan's render options, before the per-call ones.
    document_options: OptionValues,
    render_options: OptionValues,
    /// The configuration the engine was built from: its settings are the
    /// base of the values a call gives (G3), and a variant's registry is
    /// built from all of it.
    config: EngineConfig,
    /// The settings as the standard package reads them.
    package_settings: PackageSettings,
    /// The standard package's factory, whose declarations read the settings
    /// and the per-call render options.
    factory: PackageFactory,
    /// The variants (P2), by the key (`options_key`) of the registry-bound
    /// values that made them.
    variants: BTreeMap<String, Variant>,
}

/// A registry built from the engine's settings with the registry-bound
/// values a call gave over them (brief 14, P2), with its own plans and its
/// own external index (built from the engine's entries with the variant's
/// language, and the generation of the entries it was built from).
struct Variant {
    registry: Arc<FlmRegistry>,
    plans: BTreeMap<String, Arc<Plan>>,
    index: Option<(u64, ExternalIndex)>,
}

/// The option values and the registry of one run ([`Engine::call_settings`]).
struct CallSettings {
    render: OptionValues,
    document: OptionValues,
    /// The variant the call's registry-bound values make: its key and the
    /// package settings to build it from; `None` when the call gives none.
    variant: Option<(String, PackageSettings)>,
}

/// The value of the render option type `T` in `values`, or its default: the
/// base that a run sets its own fields on, so that the settings' other
/// fields of that type reach the run.
fn option_or_default<T: Options + Clone>(values: &OptionValues) -> T {
    values.get::<T>().cloned().unwrap_or_default()
}

/// The JSON text of `values` with the keys of every map sorted (flm-core
/// enables `serde_json/preserve_order`): equal data gives equal text.
fn options_key(values: &serde_json::Map<String, serde_json::Value>) -> String {
    let mut value = serde_json::Value::Object(values.clone());
    value.sort_all_objects();
    value.to_string()
}

/// Builds the registry of `config` with the standard package from
/// `package_settings` (the engine's, or a variant's), the services over the
/// host tables `host`.
fn build_registry(factory: &PackageFactory, package_settings: &PackageSettings, config: &EngineConfig, host: &Arc<HostTables>) -> Result<Arc<FlmRegistry>, String> {
    let mut builder = RegistryBuilder::new();
    builder.use_package(factory.build(package_settings).map_err(|e| e.to_string())?);
    builder.use_package(flm_core::math_passthrough::package());
    // The rule of links in a new tab lowers the `href` feature's element: not
    // registered without it.
    let link_target_blank = config.link_target_blank && !config.off.iter().any(|f| f == HREF_FEATURE);
    builder.feature(Arc::new(ZoodbFeature { srcset: config.srcset.clone(), link_target_blank }));
    // The services are lookups over the host tables (Q6, Q7).
    builder.contribute_to(PROVIDERS_SLOT, Arc::new(HostCitations(Arc::clone(host))) as Arc<dyn CitationProvider>);
    builder.contribute_to(RESOLVER_SLOT, Arc::new(HostGraphics(Arc::clone(host))) as Arc<dyn GraphicsResolver>);
    builder.contribute_to(INSPECTOR_SLOT, Arc::new(HostGraphics(Arc::clone(host))) as Arc<dyn GraphicsInspector>);
    let mut inputs = RegistryInputs::new();
    inputs.parsing = FlmParsing { dollar_math: config.dollar_math, ..FlmParsing::default() };
    inputs.build_identity = Some(String::from(concat!(env!("CARGO_PKG_NAME"), " ", env!("CARGO_PKG_VERSION"))));
    builder.build(&inputs).map_err(|e| e.render())
}

/// The external index of `entries` for runs on `registry`: each display text
/// parsed inline with the registry's language and copied into a synthesized
/// value, as the `ExternalTarget` documentation prescribes; with the parse
/// diagnostics of the display texts.
fn external_index_of(registry: &FlmRegistry, entries: &[ExternalEntry]) -> Result<(ExternalIndex, Vec<DiagOut>), String> {
    let mut index = ExternalIndex::new();
    let mut diagnostics = Vec::new();
    let guard = registry.lang().guard();
    for entry in entries {
        let label = Label::parse(&entry.label).ok_or_else(|| format!("`{}` is not a `type:label`", entry.label))?;
        let source = Arc::new(FlmSource::new(&entry.display).with_origin(FlmOrigin::synthetic(format!("index:{}", entry.label))));
        let fragment = parse_fragment(registry.lang(), source, FragmentLayout::Inline, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        diagnostics.extend(diags_out(fragment.diags().iter()));
        let root = fragment.tree().root();
        let children: Vec<_> = root.children().iter().collect();
        let display = value_of(&children, &root, guard).map_err(|e| format!("display of `{}`: {e:?}", entry.label))?;
        index = index.with(label, ExternalTarget { href: entry.href.clone(), display });
    }
    Ok((index, diagnostics))
}

/// The document of a run: `fragments` placed in order, with the run's
/// document option values; the trees' identifiers in the same order.
fn place(fragments: &[Arc<Fragment>], document_options: &OptionValues) -> (Arc<Doc>, Vec<TreeId>) {
    let mut content = DocContent::new();
    let ids = fragments.iter().map(|fragment| content.place(Arc::clone(fragment))).collect();
    (Arc::new(Doc::with_options(content, document_options.clone())), ids)
}

/// The keys of the render options that a run sets through the call's own
/// options, as `(feature, key, the option that sets it)`: refused per call
/// ([`Engine::call_settings`]) and in the settings ([`Engine::new`]),
/// so that a value never silently loses to the call's. A LaTeX run takes
/// no per-call render options: its list is checked against the settings.
const HTML_RESERVED: &[(&str, &str, &str)] = &[("refs", "unresolved", "the call's `unresolved`")];
const TEXT_RESERVED: &[(&str, &str, &str)] = &[
    ("refs", "unresolved", "the call's `unresolved`"),
    ("text", "width", "the call's `width`"),
    ("text", "link_addresses", "the call's `link_addresses`"),
];
const LATEX_RESERVED: &[(&str, &str, &str)] = &[
    ("refs", "unresolved", "the call's `unresolved`"),
    ("latex-recomposed", "drop_comments", "the call's `drop_comments`"),
];

fn severity_word(severity: Severity) -> &'static str {
    match severity {
        Severity::Error => "error",
        Severity::Warning => "warning",
        Severity::Note => "note",
    }
}

fn diag_out(diagnostic: &FlmDiagnostic, cache: &mut LineIndexCache<FlmOrigin>) -> DiagOut {
    let span = diagnostic.span();
    let source = span.source();
    let line_col = cache.line_col(source, span.start());
    DiagOut {
        identifier: diagnostic.identifier().to_string(),
        severity: severity_word(diagnostic.severity()),
        message: diagnostic.message().to_string(),
        origin: source.origin().label().map(|label| label.into_owned()),
        start: span.start(),
        end: span.end(),
        line: line_col.map(|(line, _)| line),
        col: line_col.map(|(_, col)| col),
    }
}

fn diags_out<'a>(diagnostics: impl IntoIterator<Item = &'a FlmDiagnostic>) -> Vec<DiagOut> {
    let mut cache = LineIndexCache::<FlmOrigin>::new();
    diagnostics.into_iter().map(|d| diag_out(d, &mut cache)).collect()
}

fn line_col(text: &str, at: usize) -> (usize, usize) {
    let before = text.get(..at.min(text.len())).unwrap_or(text);
    let line = before.matches('\n').count() + 1;
    let col = before.rsplit('\n').next().map(|l| l.chars().count()).unwrap_or(0) + 1;
    (line, col)
}

pub fn layout_of(name: &str) -> Result<FragmentLayout, String> {
    match name {
        "blocks" => Ok(FragmentLayout::Blocks),
        "inline" => Ok(FragmentLayout::Inline),
        "auto" | "" => Ok(FragmentLayout::InlineOrBlocks),
        other => Err(format!("unknown layout `{other}` (blocks, inline, auto)")),
    }
}

/// Whether a node of a parsed tree contributes nothing: whitespace, a
/// comment, a paragraph break, or a list of those.
fn is_blank(node: &NodeRef<'_, Flm>) -> bool {
    match node.kind() {
        NodeKind::Chars { .. } => node.chars().is_none_or(|text| text.trim().is_empty()),
        NodeKind::Comment(_) => true,
        NodeKind::List => node.children().iter().all(|child| is_blank(&child)),
        _ => element_of(node).name == PARBREAK,
    }
}

/// Whether a fragment's tree holds only whitespace, comments and paragraph
/// breaks.
fn is_empty_fragment(fragment: &Fragment) -> bool {
    fragment.tree().root().children().iter().all(|child| is_blank(&child))
}

fn def_part_out(part: &DefContent) -> DefPartOut {
    match part {
        DefContent::Inline(text) => DefPartOut { kind: "inline", text: text.clone() },
        DefContent::File(path) => DefPartOut { kind: "file", text: path.clone() },
        DefContent::Url(url) => DefPartOut { kind: "url", text: url.clone() },
        DefContent::Table(table) => DefPartOut { kind: "table", text: table.to_string() },
    }
}

/// One field of an FLM data file from its `zoodb.field` node: the name, and
/// the body as the text between the name argument (its delimiters included)
/// and the end of the verbatim body, that is `\\end` for a closed field and
/// the end of the text for an unclosed one (which the parse reports). The
/// verbatim body as parsed leaves out a newline right after the argument; the
/// loader reads it from the text, as the old FLM did. An error is the reason
/// the field cannot be read.
fn field_of(node: &NodeRef<'_, Flm>, text: &str) -> Result<FieldOut, String> {
    let name = match node.argument_content_nodes_named(FIELD_NAME_ARG) {
        Ok(Some(nodes)) => match chars_at_lowering(nodes.iter()) {
            Ok(Ok(name)) => name.trim().to_string(),
            _ => return Err(String::from("the name of a field must be plain characters")),
        },
        _ => return Err(String::from("the field has no name")),
    };
    if name.is_empty() {
        return Err(String::from("the field has an empty name"));
    }
    let start = match node.argument_nodes_named(FIELD_NAME_ARG) {
        Ok(Some(nodes)) => nodes.span().map(|span| span.end()),
        _ => None,
    }
    .ok_or_else(|| format!("the name of the field `{name}` has no position"))?;
    let end = node.body().and_then(|body| body.span()).map_or(start, |span| span.end());
    let body = text
        .get(start..end)
        .ok_or_else(|| format!("the body of the field `{name}` (bytes {start}..{end}) is not in the text"))?;
    Ok(FieldOut { name, start, end, text: body.to_string() })
}

/// The FLM source of a point's display content (a synthesized value copied
/// out of the document): the source text its root spans, from the first
/// copied node to the last, or, when the content is one braced group (a
/// caption argument), the text inside the braces; `None` when it spans
/// nothing but whitespace.
fn display_source(content: &NodeTree<Flm>) -> Option<String> {
    let root = content.root();
    let children: Vec<NodeRef<'_, Flm>> = root.children().iter().filter(|child| !is_blank(child)).collect();
    let text = match children.as_slice() {
        [only] => match only.kind() {
            NodeKind::Group(data) if matches!(data.group_type, Some(FlmGroupType::Content)) => {
                let source = only.span().source();
                let braces = data.open.resolve(source) == "{" && data.close.resolve(source) == "}";
                let whole = only.span().content();
                match whole.strip_prefix('{').and_then(|t| t.strip_suffix('}')) {
                    Some(inner) if braces => inner,
                    _ => root.span().content(),
                }
            }
            _ => root.span().content(),
        },
        _ => root.span().content(),
    };
    if text.trim().is_empty() { None } else { Some(text.to_string()) }
}

impl Engine {
    pub fn new(config: &EngineConfig) -> Result<Engine, String> {
        let host = Arc::new(HostTables::default());
        // The standard package from its settings as data (Q14).
        let factory = stdcore::factory().map_err(|e| e.to_string())?;
        let mut package_settings = PackageSettings::new();
        let mut document_options = OptionValues::new();
        let mut render_options = OptionValues::new();
        // The keys every run sets itself are refused by name.
        let mut refused: Vec<String> = Vec::new();
        for (feature, key, by) in HTML_RESERVED.iter().chain(TEXT_RESERVED).chain(LATEX_RESERVED) {
            let given = config.settings.get(*feature).and_then(|values| values.as_object()).is_some_and(|values| values.contains_key(*key));
            let message = format!("the setting `{feature}.{key}` is set by every run, from {by}, not by the settings");
            if given && !refused.contains(&message) {
                refused.push(message);
            }
        }
        if !refused.is_empty() {
            return Err(refused.join("; "));
        }
        for (feature, values) in &config.settings {
            let decl = factory.settings(feature).ok_or_else(|| format!("the feature `{feature}` takes no settings (or does not exist)"))?;
            let values = values.as_object().ok_or_else(|| format!("the settings of `{feature}` must be a map"))?;
            let read = decl.read(values).map_err(|errors| {
                errors.iter().map(|e| e.to_string()).collect::<Vec<_>>().join("; ")
            })?;
            document_options.merge_from(read.document_options());
            render_options.merge_from(read.render_options());
            package_settings.insert(read);
        }
        for feature in &config.off {
            package_settings.switch_off(feature.as_str());
        }
        let registry = build_registry(&factory, &package_settings, config, &host)?;
        Ok(Engine {
            registry,
            fragments: Vec::new(),
            plans: BTreeMap::new(),
            external_index: ExternalIndex::new(),
            external_entries: Vec::new(),
            external_generation: 0,
            host,
            prefer_zoodb_publish: config.srcset.is_some(),
            document_options,
            render_options,
            config: config.clone(),
            package_settings,
            factory,
            variants: BTreeMap::new(),
        })
    }

    /// The option values and the registry of one run (G3; brief 14, P2): the
    /// settings' own, or, with values given for the call (`{ feature: { key:
    /// value } }`), the settings of each feature the call names with the
    /// call's keys over them key by key (a key's value replaces the
    /// settings' whole, as one source of settings replaces another: an
    /// `xnotes.kinds` map replaces the settings' map), read through the
    /// feature's settings declaration. The render-bound values go to the
    /// run's render options, the document-bound ones (and those bound to
    /// either) to its document; a key bound to the registry makes the run use
    /// a variant, built from the settings with the call's registry-bound
    /// values over them. `reserved` lists the keys the call sets through its
    /// own options. Every problem is named in the error.
    fn call_settings(
        &self,
        per_call: &serde_json::Map<String, serde_json::Value>,
        reserved: &[(&str, &str, &str)],
    ) -> Result<CallSettings, String> {
        let mut call = CallSettings { render: self.render_options.clone(), document: self.document_options.clone(), variant: None };
        if per_call.is_empty() {
            return Ok(call);
        }
        let mut errors = Vec::new();
        // Per feature the call names: the settings with the call's keys over
        // them; and the call's registry-bound keys.
        let mut data: Vec<(&str, serde_json::Map<String, serde_json::Value>)> = Vec::new();
        let mut registry_bound = serde_json::Map::new();
        for (feature, values) in per_call {
            let Some(decl) = self.factory.settings(feature) else {
                errors.push(format!("the feature `{feature}` takes no settings (or does not exist)"));
                continue;
            };
            let Some(values) = values.as_object() else {
                errors.push(format!("the render options of `{feature}` must be a map"));
                continue;
            };
            let mut merged = self.config.settings.get(feature).and_then(|v| v.as_object()).cloned().unwrap_or_default();
            let mut bound = serde_json::Map::new();
            for (key, value) in values {
                if let Some((_, _, by)) = reserved.iter().find(|(f, k, _)| f == feature && k == key) {
                    errors.push(format!("the render option `{feature}.{key}` is set by {by}, not per call"));
                    continue;
                }
                match decl.key(key) {
                    None => errors.push(format!("the feature `{feature}` has no setting `{key}`")),
                    Some(k) => {
                        if k.bind == Bind::Registry {
                            bound.insert(key.clone(), value.clone());
                        }
                        merged.insert(key.clone(), value.clone());
                    }
                }
            }
            if !bound.is_empty() {
                registry_bound.insert(feature.clone(), serde_json::Value::Object(bound));
            }
            data.push((feature.as_str(), merged));
        }
        if !errors.is_empty() {
            return Err(format!("the render options: {}", errors.join("; ")));
        }
        let mut package_settings = (!registry_bound.is_empty()).then(|| self.package_settings.clone());
        for (feature, values) in &data {
            let Some(decl) = self.factory.settings(feature) else { continue };
            match decl.read(values) {
                Ok(read) => {
                    call.render.merge_from(read.render_options());
                    call.document.merge_from(read.document_options());
                    if let Some(package_settings) = package_settings.as_mut().filter(|_| registry_bound.contains_key(*feature)) {
                        package_settings.insert(read);
                    }
                }
                Err(problems) => errors.extend(problems.iter().map(|e| e.to_string())),
            }
        }
        if !errors.is_empty() {
            return Err(format!("the render options: {}", errors.join("; ")));
        }
        call.variant = package_settings.map(|settings| (options_key(&registry_bound), settings));
        Ok(call)
    }

    /// The variant of a call's registry-bound values (P2), built and cached
    /// on first use, its external index brought up to date with the engine's
    /// entries; returns its key, `None` for a call without such values. A
    /// variant whose build reports an Error the engine's registry does not
    /// have is refused, with the call.
    fn variant_for(&mut self, variant: Option<(String, PackageSettings)>) -> Result<Option<String>, String> {
        let Some((key, package_settings)) = variant else { return Ok(None) };
        if !self.variants.contains_key(&key) {
            let registry = build_registry(&self.factory, &package_settings, &self.config, &self.host)
                .map_err(|e| format!("the render options {key}: {e}"))?;
            let known: BTreeSet<(String, String)> = self
                .registry
                .build_diagnostics()
                .iter()
                .map(|d| (d.identifier().to_string(), d.message().to_string()))
                .collect();
            let errors: Vec<String> = registry
                .build_diagnostics()
                .iter()
                .filter(|d| d.severity() == Severity::Error && !known.contains(&(d.identifier().to_string(), d.message().to_string())))
                .map(|d| d.message().to_string())
                .collect();
            if !errors.is_empty() {
                return Err(format!("the render options {key}: {}", errors.join("; ")));
            }
            self.variants.insert(key.clone(), Variant { registry, plans: BTreeMap::new(), index: None });
        }
        let generation = self.external_generation;
        let Some(variant) = self.variants.get_mut(&key) else { return Err(format!("no variant {key}")) };
        if variant.index.as_ref().map(|(g, _)| *g) != Some(generation) {
            // The engine's display texts reported their diagnostics when the
            // index was set.
            let (index, _) = external_index_of(&variant.registry, &self.external_entries)?;
            variant.index = Some((generation, index));
        }
        Ok(Some(key))
    }

    /// The number of variants built (P2).
    pub fn variant_count(&self) -> usize {
        self.variants.len()
    }

    /// The standard features and, for each that takes settings, the JSON
    /// Schema of its settings.
    pub fn features() -> Result<Vec<FeatureInfoOut>, String> {
        let factory = stdcore::factory().map_err(|e| e.to_string())?;
        Ok(factory
            .features()
            .iter()
            .map(|f| FeatureInfoOut { name: f.name.to_string(), schema: f.settings.as_ref().map(|d| d.json_schema()) })
            .collect())
    }

    /// Replaces the citations table: `[{ key, text }]`, `text` being FLM.
    pub fn set_citations(&mut self, entries: Vec<CitationEntry>) {
        self.host.set_citations(entries);
    }

    pub fn citations_len(&self) -> usize {
        self.host.citations_len()
    }

    /// Replaces the graphics table (see `host::GraphicsEntry`).
    pub fn set_graphics(&mut self, entries: Vec<GraphicsEntry>) {
        self.host.set_graphics(entries);
    }

    pub fn graphics_len(&self) -> usize {
        self.host.graphics_len()
    }

    pub fn build_diagnostics(&self) -> Vec<DiagOut> {
        diags_out(self.registry.build_diagnostics().iter())
    }

    /// The number of fragments held (released ones not counted).
    pub fn fragment_count(&self) -> usize {
        self.fragments.iter().filter(|f| f.is_some()).count()
    }

    /// The fragment of `handle`; an error for a handle never given out or
    /// released.
    fn fragment(&self, handle: u32) -> Result<&Arc<Fragment>, String> {
        match self.fragments.get(handle as usize) {
            Some(Some(fragment)) => Ok(fragment),
            Some(None) => Err(format!("the fragment handle {handle} was released")),
            None => Err(format!("unknown fragment handle {handle}")),
        }
    }

    fn keep(&mut self, fragment: Fragment) -> u32 {
        let handle = self.fragments.len() as u32;
        self.fragments.push(Some(Arc::new(fragment)));
        handle
    }

    pub fn parse(&mut self, text: &str, origin: &str, layout: FragmentLayout) -> Result<ParsedOut, String> {
        let origin = if origin.is_empty() { FlmOrigin::none() } else { FlmOrigin::new(origin) };
        let source = Arc::new(FlmSource::new(text).with_origin(origin));
        let fragment = parse_fragment(self.registry.lang(), source, layout, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        let diagnostics = diags_out(fragment.diags().iter());
        let empty = is_empty_fragment(&fragment);
        let handle = self.keep(fragment);
        Ok(ParsedOut { handle, empty, diagnostics })
    }

    /// A new handle for the fragment of `handle` with another layout: the
    /// same tree, source and parse diagnostics, not parsed again.
    pub fn with_layout(&mut self, handle: u32, layout: FragmentLayout) -> Result<u32, String> {
        let fragment = self.fragment(handle)?;
        let sibling = Fragment::new(Arc::clone(fragment.source()), Arc::clone(fragment.tree()), fragment.diags().clone(), layout);
        Ok(self.keep(sibling))
    }

    /// Frees the fragments of `handles` (a sibling made by `with_layout`
    /// shares the tree, which lives until its last handle is released).
    /// Every handle is checked before any is released; a released handle
    /// used later is an error.
    pub fn release(&mut self, handles: &[u32]) -> Result<(), String> {
        for &handle in handles {
            self.fragment(handle)?;
        }
        for &handle in handles {
            self.fragments[handle as usize] = None;
        }
        Ok(())
    }

    /// Every style and script definition the registry declares, the styles
    /// first and then the scripts, each in the features' registration order
    /// (the order of a run's definitions table), with the parts as declared.
    pub fn html_definitions(&self) -> Vec<DefOut> {
        let styles = self.registry.styles().iter().map(|(owner, def)| DefOut {
            id: def.id.to_string(),
            kind: "style",
            owner: owner.to_string(),
            parts: def.content.iter().map(def_part_out).collect(),
        });
        let scripts = self.registry.scripts().iter().map(|(owner, def)| DefOut {
            id: def.id.to_string(),
            kind: "script",
            owner: owner.to_string(),
            parts: def.content.iter().map(def_part_out).collect(),
        });
        styles.chain(scripts).collect()
    }

    /// Replaces the external index. Each display text is parsed inline with
    /// the registry's language and copied into a synthesized value, as the
    /// `ExternalTarget` documentation prescribes. Returns the parse
    /// diagnostics of the display texts. The entries are kept: a variant
    /// builds its own index from them with its own language (P2).
    pub fn set_external_index(&mut self, entries: &[ExternalEntry]) -> Result<Vec<DiagOut>, String> {
        let (index, diagnostics) = external_index_of(&self.registry, entries)?;
        self.external_index = index;
        self.external_entries = entries.to_vec();
        self.external_generation += 1;
        Ok(diagnostics)
    }

    pub fn external_index_len(&self) -> usize {
        self.external_index.targets.len()
    }

    /// The externals of a run on the engine's registry or on `variant`: its
    /// external index, when it has entries.
    fn externals(&self, variant: Option<&str>) -> Result<Externals, String> {
        let index = match variant {
            None => &self.external_index,
            Some(key) => match self.variants.get(key).and_then(|v| v.index.as_ref()) {
                Some((_, index)) => index,
                None => return Err(format!("the variant {key} has no external index")),
            },
        };
        Ok(if index.targets.is_empty() { Externals::none() } else { Externals::none().install_unstamped(EXTERNAL_INDEX, index.clone()) })
    }

    /// The registry of a run: the engine's, or `variant`'s.
    fn registry_of(&self, variant: Option<&str>) -> Result<&Arc<FlmRegistry>, String> {
        match variant {
            None => Ok(&self.registry),
            Some(key) => self.variants.get(key).map(|v| &v.registry).ok_or_else(|| format!("no variant {key}")),
        }
    }

    /// The fragments of `handles` for a run: the engine's own, or, on a
    /// variant, each parsed again from its source with the variant's language
    /// and its layout (a tree is never run under a registry other than the
    /// one that parsed it: its nodes hold the elements of their parse).
    fn run_fragments(&self, handles: &[u32], variant: Option<&str>) -> Result<Vec<Arc<Fragment>>, String> {
        let registry = self.registry_of(variant)?;
        handles
            .iter()
            .map(|&h| {
                let fragment = self.fragment(h)?;
                if variant.is_none() {
                    return Ok(Arc::clone(fragment));
                }
                parse_fragment(registry.lang(), Arc::clone(fragment.source()), fragment.layout(), &ParseOptions::default())
                    .map(Arc::new)
                    .map_err(|e| e.diagnostic().message().to_string())
            })
            .collect()
    }

    /// The plan of `key` on the engine's registry or on `variant`, made by
    /// `make` and cached on first use.
    fn plan(&mut self, variant: Option<&str>, key: String, make: impl FnOnce(&Arc<FlmRegistry>) -> Result<Plan, String>) -> Result<Arc<Plan>, String> {
        let (registry, plans) = match variant {
            None => (&self.registry, &mut self.plans),
            Some(name) => match self.variants.get_mut(name) {
                Some(Variant { registry, plans, .. }) => (&*registry, plans),
                None => return Err(format!("no variant {name}")),
            },
        };
        if let Some(plan) = plans.get(&key) {
            return Ok(Arc::clone(plan));
        }
        let plan = Arc::new(make(registry)?);
        plans.insert(key, Arc::clone(&plan));
        Ok(plan)
    }

    pub fn render_html(&mut self, handles: &[u32], options: &RenderOptions) -> Result<HtmlOut, String> {
        // The per-call values are part of the plan's key.
        let key = format!(
            "html:{}:{}:{}",
            options.unresolved_refs_warning,
            options.title.as_deref().unwrap_or(""),
            options_key(&options.render_options),
        );
        let prefer_zoodb_publish = self.prefer_zoodb_publish;
        let call = self.call_settings(&options.render_options, HTML_RESERVED)?;
        let variant = self.variant_for(call.variant)?;
        let variant = variant.as_deref();
        let run_render_options = call.render;
        let plan = self.plan(variant, key, |registry| {
            // The call's own fields over the settings' (and the per-call)
            // values of the same option types, whose other fields are kept.
            let mut html_options: HtmlRenderOptions = option_or_default(&run_render_options);
            if let Some(title) = &options.title {
                html_options.title = title.clone();
            }
            let refs_options = RefsRenderOptions {
                unresolved: if options.unresolved_refs_warning { UnresolvedRefs::Allow } else { UnresolvedRefs::Error },
            };
            // The `field` environment of the FLM-files loader (Q16) is never
            // rendered: a data field holding one is reported at the node.
            let mut unsupported = BTreeMap::new();
            unsupported.insert(BackendName::from(html::BACKEND), vec![ElementName::from(FIELD_ELEMENT)]);
            // The settings' render options first, the per-call ones over them.
            let mut render_options = run_render_options;
            render_options.merge_from(&OptionValues::new().with(html_options).with(refs_options));
            let overrides = Overrides {
                render_options,
                prefer: if prefer_zoodb_publish { vec![StageName::from(PUBLISH_STAGE)] } else { Vec::new() },
                unsupported,
                ..Overrides::none()
            };
            Plan::for_workflow(registry, html::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = place(&self.run_fragments(handles, variant)?, &call.document);
        let mut run = Run::new(doc, plan, self.externals(variant)?).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;

        let fragments = run.table(OUTPUT_TABLE).map_err(|e| e.to_string())?.ok_or("the html workflow wrote no output table")?;
        let mut requires = std::collections::BTreeSet::new();
        let mut tree_requires = Vec::with_capacity(ids.len());
        let trees: Vec<String> = ids
            .iter()
            .map(|id| match fragments.trees.get(id) {
                Some(f) => {
                    let these: Vec<String> = f.requires.iter().map(|n| n.to_string()).collect();
                    requires.extend(these.iter().cloned());
                    tree_requires.push(these);
                    f.html()
                }
                None => {
                    tree_requires.push(Vec::new());
                    String::new()
                }
            })
            .collect();
        let pieces = run
            .table(PIECES_TABLE)
            .map_err(|e| e.to_string())?
            .map(|p| {
                p.pieces
                    .iter()
                    .map(|piece| PieceOut {
                        name: piece.name.to_string(),
                        place: piece.place.as_str(),
                        html: piece.fragment.html(),
                        requires: piece.fragment.requires.iter().map(|n| n.to_string()).collect(),
                    })
                    .collect()
            })
            .unwrap_or_default();
        let definitions = run
            .table(DEFINITIONS_TABLE)
            .map_err(|e| e.to_string())?
            .map(|defs| {
                defs.definitions
                    .iter()
                    .map(|d| DefOut {
                        id: d.id.to_string(),
                        kind: match d.kind {
                            DefinitionKind::Style => "style",
                            DefinitionKind::Script => "script",
                        },
                        owner: d.owner.to_string(),
                        parts: match &d.delivery {
                            DefinitionOverride::ProvidedByHost => vec![DefPartOut { kind: "host", text: String::new() }],
                            DefinitionOverride::Parts(parts) => parts.iter().map(def_part_out).collect(),
                        },
                    })
                    .collect()
            })
            .unwrap_or_default();
        let view = run.diagnostics();
        Ok(HtmlOut {
            trees,
            tree_requires,
            pieces,
            requires: requires.into_iter().collect(),
            definitions,
            has_errors: view.has_errors(),
            diagnostics: diags_out(view.iter()),
        })
    }

    /// Parses an FLM data file (Q16): returns every `\\begin{field}{name} …
    /// \\end{field}` with its name and the byte range of its body; content
    /// outside the fields other than whitespace and comments is a
    /// diagnostic, and so is a field whose name or body cannot be read
    /// (`zoodb.fields.malformed`).
    pub fn parse_fields(&self, text: &str, origin: &str) -> Result<FieldsOut, String> {
        let origin = if origin.is_empty() { FlmOrigin::none() } else { FlmOrigin::new(origin) };
        let source = Arc::new(FlmSource::new(text).with_origin(origin));
        let fragment = parse_fragment(self.registry.lang(), source, FragmentLayout::Blocks, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        let mut diagnostics = diags_out(fragment.diags().iter());
        let file_origin = fragment.tree().root().span().source().origin().canonical_path().map(str::to_owned);
        let mut fields = Vec::new();
        let mut covered: Vec<(usize, usize)> = Vec::new();
        let mut stack: Vec<_> = fragment.tree().root().children().iter().collect();
        while let Some(node) = stack.pop() {
            if element_of(&node).name == FIELD_ELEMENT {
                let span = node.span();
                covered.push((span.start(), span.end()));
                match field_of(&node, text) {
                    Ok(field) => fields.push(field),
                    Err(why) => {
                        let (l, c) = line_col(text, span.start());
                        diagnostics.push(DiagOut {
                            identifier: String::from("zoodb.fields.malformed"),
                            severity: "error",
                            message: why,
                            origin: file_origin.clone(),
                            start: span.start(),
                            end: span.end(),
                            line: Some(l),
                            col: Some(c),
                        });
                    }
                }
                continue;
            }
            stack.extend(node.children().iter());
        }
        fields.sort_by_key(|f| f.start);
        covered.sort();
        // Stray content: anything outside the fields that is not whitespace or a comment.
        let mut pos = 0;
        let mut ranges = covered.clone();
        ranges.push((text.len(), text.len()));
        for (start, end) in ranges {
            let gap = text.get(pos..start.max(pos)).unwrap_or_default();
            for (i, line) in gap.split_inclusive('\n').enumerate() {
                let trimmed = line.trim();
                if !trimmed.is_empty() && !trimmed.starts_with('%') {
                    let at = pos + gap.split_inclusive('\n').take(i).map(str::len).sum::<usize>();
                    let (l, c) = line_col(text, at);
                    diagnostics.push(DiagOut {
                        identifier: String::from("zoodb.fields.stray-content"),
                        severity: "error",
                        message: format!("content outside any field: `{}`", trimmed.chars().take(40).collect::<String>()),
                        origin: file_origin.clone(),
                        start: at,
                        end: at + line.len(),
                        line: Some(l),
                        col: Some(c),
                    });
                }
            }
            pos = end.max(pos);
        }
        Ok(FieldsOut { fields, diagnostics })
    }

    /// Renders the given fragments as one document with the
    /// `latex-recomposed` workflow (Q12): the handbook composes the LaTeX
    /// around the per-tree texts.
    pub fn render_latex(&mut self, handles: &[u32], options: &LatexOptions) -> Result<LatexOut, String> {
        // The per-call values are part of the plan's key, as for html (G12).
        let key = format!(
            "latex:{}:{}:{}:{}",
            options.unresolved_refs_warning,
            options.drop_comments,
            options.raw_label_types.join(","),
            options_key(&options.render_options),
        );
        let call = self.call_settings(&options.render_options, LATEX_RESERVED)?;
        let variant = self.variant_for(call.variant)?;
        let variant = variant.as_deref();
        let run_render_options = call.render;
        let plan = self.plan(variant, key, |registry| {
            // The call's own fields over the settings' (and the per-call)
            // values of the same option types, whose other fields are kept.
            let mut latex_options: LatexRecomposedRenderOptions = option_or_default(&run_render_options);
            latex_options.drop_comments = options.drop_comments;
            let mut recompose: RefsRecomposeOptions = option_or_default(&run_render_options);
            recompose
                .safe_label_types
                .extend(options.raw_label_types.iter().map(|t| (t.clone(), SafeLabelMode::Raw)));
            let refs_options = RefsRenderOptions {
                unresolved: if options.unresolved_refs_warning { UnresolvedRefs::Allow } else { UnresolvedRefs::Error },
            };
            let mut render_options = run_render_options;
            render_options.merge_from(&OptionValues::new().with(latex_options).with(recompose).with(refs_options));
            let mut unsupported = BTreeMap::new();
            unsupported.insert(BackendName::from(latex_recomposed::BACKEND), vec![ElementName::from(FIELD_ELEMENT)]);
            let overrides = Overrides { render_options, unsupported, ..Overrides::none() };
            Plan::for_workflow(registry, latex_recomposed::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = place(&self.run_fragments(handles, variant)?, &call.document);
        let mut run = Run::new(doc, plan, self.externals(variant)?).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;
        let fragments = run.table(LATEX_OUTPUT_TABLE).map_err(|e| e.to_string())?.ok_or("the latex-recomposed workflow wrote no output table")?;
        let trees: Vec<String> = ids.iter().map(|id| fragments.trees.get(id).map(|f| f.text.clone()).unwrap_or_default()).collect();
        let text_of = |bytes: Option<&[u8]>| bytes.map(|b| String::from_utf8_lossy(b).into_owned());
        let (style_name, style) = match run.table(STYLE_FILE).map_err(|e| e.to_string())?.and_then(|set| style_artifact(set).cloned()) {
            Some(artifact) => (Some(format!("{}.sty", artifact.id.name)), text_of(artifact.as_bytes())),
            None => (None, None),
        };
        let document = run.table(LATEX_DOCUMENT).map_err(|e| e.to_string())?.and_then(|set| set.entry().and_then(|a| text_of(a.as_bytes())));
        let view = run.diagnostics();
        Ok(LatexOut { trees, style_name, style, document, has_errors: view.has_errors(), diagnostics: diags_out(view.iter()) })
    }

    /// Renders the given fragments as one document with the `text` workflow
    /// (Q11); with `per_tree`, each tree is also rendered alone for its own
    /// text.
    pub fn render_text(&mut self, handles: &[u32], options: &TextOptions) -> Result<TextOut, String> {
        let key = format!(
            "text:{:?}:{}:{}:{}:{}",
            options.width,
            options.link_addresses,
            options.unresolved_refs_warning,
            options.pieces,
            options_key(&options.render_options),
        );
        let call = self.call_settings(&options.render_options, TEXT_RESERVED)?;
        let variant = self.variant_for(call.variant)?;
        let variant = variant.as_deref();
        let run_render_options = call.render;
        let plan = self.plan(variant, key, |registry| {
            // The call's own fields over the settings' (and the per-call)
            // values of the same option types, whose other fields are kept.
            let mut text_options: TextRenderOptions = option_or_default(&run_render_options);
            text_options.width = options.width;
            text_options.link_addresses = options.link_addresses;
            let refs_options = RefsRenderOptions {
                unresolved: if options.unresolved_refs_warning { UnresolvedRefs::Allow } else { UnresolvedRefs::Error },
            };
            let mut render_options = run_render_options;
            render_options.merge_from(&OptionValues::new().with(text_options).with(refs_options));
            if !options.pieces {
                // No piece may be placed on the text output: the host places none.
                let mut pieces: PiecesRenderOptions = option_or_default(&render_options);
                pieces.backends.insert(BackendName::from(text::BACKEND), Default::default());
                render_options.merge_from(&OptionValues::new().with(pieces));
            }
            let mut unsupported = BTreeMap::new();
            unsupported.insert(BackendName::from(text::BACKEND), vec![ElementName::from(FIELD_ELEMENT)]);
            let overrides = Overrides { render_options, unsupported, ..Overrides::none() };
            Plan::for_workflow(registry, text::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        // The fragments are parsed again once for all the runs on a variant.
        let fragments = self.run_fragments(handles, variant)?;
        let mut out = self.text_run(&fragments, &call.document, &plan, variant)?;
        if options.per_tree {
            let mut trees = Vec::with_capacity(handles.len());
            let mut tree_diagnostics = Vec::with_capacity(handles.len());
            for fragment in &fragments {
                let one = self.text_run(std::slice::from_ref(fragment), &call.document, &plan, variant)?;
                trees.push(one.text.trim_end_matches('\n').to_string());
                tree_diagnostics.push(one.diagnostics);
            }
            out.trees = trees;
            out.tree_diagnostics = tree_diagnostics;
        }
        Ok(out)
    }

    /// One run of the text workflow's `plan` over `fragments` as one
    /// document.
    fn text_run(&self, fragments: &[Arc<Fragment>], document_options: &OptionValues, plan: &Arc<Plan>, variant: Option<&str>) -> Result<TextOut, String> {
        let (doc, _) = place(fragments, document_options);
        let mut run = Run::new(doc, Arc::clone(plan), self.externals(variant)?).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;
        let output = run.table(TEXT_OUTPUT).map_err(|e| e.to_string())?.ok_or("the text workflow wrote no output table")?;
        let view = run.diagnostics();
        Ok(TextOut {
            text: output.text.clone(),
            trees: Vec::new(),
            tree_diagnostics: Vec::new(),
            has_errors: view.has_errors(),
            diagnostics: diags_out(view.iter()),
        })
    }

    /// Truncates `text` (R18): parses it with the given layout and returns
    /// the shortened source, to be parsed again as a preview fragment.
    pub fn truncate(&self, text: &str, origin: &str, layout: FragmentLayout, options: &TruncateOptions) -> Result<TruncateOut, String> {
        let origin = if origin.is_empty() { FlmOrigin::none() } else { FlmOrigin::new(origin) };
        let source = Arc::new(FlmSource::new(text).with_origin(origin));
        let fragment = parse_fragment(self.registry.lang(), source, layout, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        let diagnostics = diags_out(fragment.diags().iter());
        let t = crate::truncate::truncate(text, &fragment, options.chars, options.min_chars, &options.marker, options.first_paragraph);
        Ok(TruncateOut { source: t.source, truncated: t.truncated, cut_at: t.cut_at, diagnostics })
    }

    /// Runs the scan over `handles` as one document; `standalone` names the
    /// handles parsed from standalone fields, which the check stage of Q5
    /// verifies.
    pub fn scan(&mut self, handles: &[u32], standalone: &[u32]) -> Result<ScanOut, String> {
        // A bare plan request (no workflow, so no `flm.validated`): the scan
        // demands the tables it reads and nothing else, so that no citation is
        // retrieved, no image is resolved and no output is produced (R13).
        // Images are listed from the element index (Q7), not from
        // `flm.graphics.info`, whose stage would ask the resolver.
        let plan = self.plan(None, String::from("scan"), |registry| {
            let request = PlanRequest {
                demands: vec![
                    "flm.citations.keys".into(),
                    "flm.labels".into(),
                    "flm.anchors".into(),
                    "flm.refs.targets".into(),
                    "flm.refs.resolutions".into(),
                    "flm.element-index".into(),
                    STANDALONE_CHECKED.into(),
                ],
                ..PlanRequest::default()
            };
            Plan::build(registry, &request).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = place(&self.run_fragments(handles, None)?, &self.document_options);
        let standalone_trees = StandaloneTrees {
            trees: handles.iter().zip(ids.iter()).filter(|(h, _)| standalone.contains(h)).map(|(_, id)| *id).collect(),
        };
        let externals = Externals::none().install_unstamped(STANDALONE_TREES, standalone_trees);
        let mut run = Run::new(doc, plan, externals).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;

        let index_of: BTreeMap<TreeId, usize> = ids.iter().enumerate().map(|(i, id)| (*id, i)).collect();
        let mut trees: Vec<ScanTreeOut> = ids.iter().map(|_| ScanTreeOut::default()).collect();
        let mut duplicate_labels = Vec::new();
        let anchors = run.table(ANCHORS).map_err(|e| e.to_string())?;
        let targets = run.table(REF_TARGETS).map_err(|e| e.to_string())?;
        if let Some(labels) = run.table(LABELS).map_err(|e| e.to_string())? {
            // Only an anchor a label forms is the same in every document
            // (Q4): one formed from a number or a renumbered title follows
            // this document's content. Every label of a point keeps the
            // point's anchor when one of the point's labels forms it.
            let mut formed: BTreeMap<PointId, BTreeSet<String>> = BTreeMap::new();
            for (label, point) in &labels.by_label {
                formed.entry(*point).or_default().insert(label_anchor(label));
            }
            let mut points: Vec<Vec<(PointId, ScanLabelOut)>> = ids.iter().map(|_| Vec::new()).collect();
            for (label, point) in &labels.by_label {
                if let Some(&i) = index_of.get(&point.addr.tree) {
                    let anchor = anchors
                        .and_then(|a| a.id(*point))
                        .filter(|anchor| formed.get(point).is_some_and(|set| set.contains(*anchor)))
                        .map(str::to_owned);
                    let display = targets
                        .and_then(|t| t.by_label.get(label))
                        .and_then(|t| t.display.content.as_deref())
                        .and_then(display_source);
                    points[i].push((*point, ScanLabelOut { label: label.to_string(), anchor, display }));
                }
            }
            for (tree, mut list) in trees.iter_mut().zip(points) {
                list.sort_by(|(a, la), (b, lb)| a.cmp(b).then_with(|| la.label.cmp(&lb.label)));
                tree.labels = list.into_iter().map(|(_, l)| l).collect();
            }
            duplicate_labels.extend(labels.duplicates.iter().map(|d| ScanDuplicateOut {
                label: d.label.to_string(),
                origin: d.span.source().origin().label().map(|label| label.into_owned()),
                start: d.span.start(),
                end: d.span.end(),
            }));
        }
        let resolutions = run.table(REF_RESOLUTIONS).map_err(|e| e.to_string())?;
        if let Some(index) = run.table(ELEMENT_INDEX).map_err(|e| e.to_string())? {
            for (i, (&h, id)) in handles.iter().zip(ids.iter()).enumerate() {
                let tree = self.fragment(h)?.tree();
                // The sites as the resolve stage walks them (the nodes whose
                // element declares reference sites), each with its target.
                for (addr, node, referencing) in index.nodes_with::<dyn Referencing>(&self.registry, *id, tree) {
                    for (k, site) in referencing.sites(&node).into_iter().enumerate() {
                        let key = SiteId { addr, index: u32::try_from(k).unwrap_or(u32::MAX) };
                        let resolved = matches!(resolutions.and_then(|r| r.site(key)), Some(Resolution::Resolved { .. }));
                        trees[i].refs.push(ScanRefOut { label: site.target.to_string(), resolved });
                    }
                }
                for (_, node, _) in index.values_of::<GraphicsImage>(*id, tree) {
                    // The path as written, when it is characters (as the
                    // inspect stage and the image rules read it).
                    let Ok(Some(content)) = node.argument_content_nodes_named(PATH_ARG) else { continue };
                    let Ok(Ok(path)) = chars_at_lowering(content.iter()) else { continue };
                    let origin = node.span().source().origin().canonical_path().map(str::to_owned);
                    trees[i].graphics.push(GraphicsRefOut { path, origin });
                }
                // The term definitions (G1), with the byte range of their
                // body in the tree's source, which the host cuts out of the
                // fragment's source.
                let own_source = tree.root().span().source();
                for (addr, node, defterm) in index.values_of::<DeftermElement>(*id, tree) {
                    let Some(point) = defterm.points(&node).into_iter().next() else { continue };
                    let point_id = PointId { addr, index: 0 };
                    let anchor = anchors
                        .and_then(|a| a.id(point_id))
                        .filter(|anchor| point.labels.iter().any(|label| *anchor == label_anchor(label)))
                        .map(str::to_owned);
                    let display = match node.argument_content_nodes_named(TERM_ARG) {
                        Ok(Some(term)) => term
                            .span()
                            .filter(|span| Arc::ptr_eq(span.source(), own_source))
                            .and_then(|_| term.source_text())
                            .filter(|text| !text.trim().is_empty())
                            .map(str::to_owned),
                        _ => None,
                    };
                    let body = node.body().and_then(|body| body.span()).filter(|span| Arc::ptr_eq(span.source(), own_source));
                    trees[i].terms.push(ScanTermOut {
                        labels: point.labels.iter().map(|label| label.to_string()).collect(),
                        anchor,
                        display,
                        body_start: body.as_ref().map(|span| span.start()),
                        body_end: body.as_ref().map(|span| span.end()),
                    });
                }
                // The citation keys of the tree (G2), read from its citation
                // chunks as the collect stage reads the document's.
                for (_, node, _) in index.values_of::<CitationElement>(*id, tree) {
                    let Ok(chunk) = read_chunk(&node, Reading::InStage) else { continue };
                    for item in chunk.items {
                        if !trees[i].cited.contains(&item.key) {
                            trees[i].cited.push(item.key);
                        }
                    }
                }
            }
        }
        let cited = run
            .table(KEYS)
            .map_err(|e| e.to_string())?
            .map(|keys| {
                keys.iter()
                    .map(|(key, span)| (key.to_string(), span.source().origin().canonical_path().map(str::to_owned)))
                    .collect()
            })
            .unwrap_or_default();
        let view = run.diagnostics();
        let diagnostics = diags_out(view.iter());
        let standalone_violations = diagnostics.iter().filter(|d| d.identifier == "zoodb.standalone.violation").count();
        Ok(ScanOut { trees, cited, duplicate_labels, standalone_violations, has_errors: view.has_errors(), diagnostics })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn renders_a_fragment_to_html_and_scans_it() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let a = engine
            .parse("Hello \\emph{world}, see \\ref{person:bob} and \\cite{arxiv:1234.5678}.", "a.yml#name", FragmentLayout::Inline)
            .unwrap();
        let b = engine
            .parse(
                "A paragraph.\n\n\\begin{figure}\\includegraphics{images/Smiley}\\label{figure:x}\\end{figure}\n\nSee \\ref{figure:x}.",
                "a.yml#biography",
                FragmentLayout::InlineOrBlocks,
            )
            .unwrap();
        assert!(a.diagnostics.is_empty(), "{:?}", a.diagnostics);
        assert!(b.diagnostics.is_empty(), "{:?}", b.diagnostics);

        let scan = engine.scan(&[a.handle, b.handle], &[]).unwrap();
        assert_eq!(scan.cited.len(), 1);
        let scan_ids: Vec<&str> = scan.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(!scan_ids.iter().any(|id| id.starts_with("flm.citations.")), "{scan_ids:?}");
        let labels: Vec<&str> = scan.trees[1].labels.iter().map(|l| l.label.as_str()).collect();
        assert_eq!(labels, vec!["figure:x"]);
        let refs = |i: usize| -> Vec<(String, bool)> { scan.trees[i].refs.iter().map(|r| (r.label.clone(), r.resolved)).collect() };
        assert_eq!(refs(0), vec![(String::from("person:bob"), false)]);
        assert_eq!(refs(1), vec![(String::from("figure:x"), true)]);
        assert_eq!(scan.trees[1].graphics.len(), 1);
        assert_eq!(scan.trees[1].graphics[0].path, "images/Smiley");
        assert_eq!(scan.trees[1].graphics[0].origin.as_deref(), Some("a.yml#biography"));

        let out = engine
            .render_html(&[a.handle, b.handle], &RenderOptions { unresolved_refs_warning: true, ..Default::default() })
            .unwrap();
        assert!(out.trees[0].contains("<em"), "{}", out.trees[0]);

        // With the external index, the object reference resolves to a link
        // showing the parsed display content.
        let index_diags = engine
            .set_external_index(&[ExternalEntry {
                label: "person:bob".into(),
                href: "/person/bob".into(),
                display: "Bob \\emph{Bee}".into(),
            }])
            .unwrap();
        assert!(index_diags.is_empty(), "{index_diags:?}");
        // A diagnostic in a source the library created names its label.
        let bad = engine
            .set_external_index(&[ExternalEntry { label: "person:zed".into(), href: "/z".into(), display: "Zed \\nosuchmacro".into() }])
            .unwrap();
        assert!(!bad.is_empty() && bad.iter().all(|d| d.origin.as_deref() == Some("index:person:zed")), "{bad:?}");
        engine
            .set_external_index(&[ExternalEntry { label: "person:bob".into(), href: "/person/bob".into(), display: "Bob \\emph{Bee}".into() }])
            .unwrap();
        let out2 = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert!(out2.trees[0].contains("href=\"/person/bob\""), "{}", out2.trees[0]);
        assert!(out2.trees[0].contains("Bob <em"), "{}", out2.trees[0]);
        assert!(!out2.diagnostics.iter().any(|d| d.identifier == "flm.refs.unresolved"), "{:?}", out2.diagnostics);
        assert!(!out.definitions.is_empty());
        let ids: Vec<&str> = out.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(ids.contains(&"flm.refs.unresolved"), "{ids:?}");
        for d in &out.diagnostics {
            assert!(d.origin.is_some(), "{d:?}");
        }
        // Without host tables: no provider entry, no image size.
        assert!(ids.contains(&"flm.citations.no-entry"), "{ids:?}");
        assert!(ids.contains(&"flm.graphics.unknown-size") || ids.contains(&"flm.graphics.resolve-failed"), "{ids:?}");

        // With the host tables filled (Q6, Q7): the citation entry shows in
        // the bibliography piece, the image gets its address and size.
        engine.set_citations(vec![CitationEntry {
            key: "arXiv:1234.5678".into(),
            text: "A. Author, \\emph{A title}, \\href{https://arxiv.org/abs/1234.5678}{arXiv:1234.5678} (2020)".into(),
        }]);
        engine.set_graphics(vec![GraphicsEntry {
            origin: "a.yml#biography".into(),
            path: "images/Smiley".into(),
            identity: "people/images/Smiley.png".into(),
            media_type: "image/png".into(),
            address: "/pic/Smiley-0123abcd.png".into(),
            kind: "raster".into(),
            width_px: Some(400),
            height_px: Some(200),
            dpi: Some(192.0),
            width_pt: None,
            height_pt: None,
        }]);
        let out3 = engine.render_html(&[a.handle, b.handle], &RenderOptions::default()).unwrap();
        let ids3: Vec<&str> = out3.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(!ids3.iter().any(|id| id.starts_with("flm.citations.") || id.starts_with("flm.graphics.")), "{:?}", out3.diagnostics);
        let bib = out3.pieces.iter().find(|p| p.name == "flm.citations.bibliography").expect("bibliography piece");
        assert!(bib.html.contains("A title") && bib.html.contains("href=\"https://arxiv.org/abs/1234.5678\""), "{}", bib.html);
        assert!(out3.trees[1].contains("src=\"/pic/Smiley-0123abcd.png\""), "{}", out3.trees[1]);
        // 400 px at 192 dpi = 150 pt wide.
        assert!(out3.trees[1].contains("150pt") || out3.trees[1].contains("150"), "{}", out3.trees[1]);
    }

    /// Step 2: a layout sibling shares the tree and is not parsed again;
    /// released handles are refused; `empty` is reported.
    #[test]
    fn layout_siblings_release_and_empty() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let a = engine.parse("Some \\emph{text}", "a.yml#x", FragmentLayout::InlineOrBlocks).unwrap();
        assert!(!a.empty);
        let blocks = engine.with_layout(a.handle, FragmentLayout::Blocks).unwrap();
        assert_ne!(blocks, a.handle);
        let fa = Arc::clone(engine.fragment(a.handle).unwrap());
        let fb = Arc::clone(engine.fragment(blocks).unwrap());
        assert!(Arc::ptr_eq(fa.tree(), fb.tree()) && Arc::ptr_eq(fa.source(), fb.source()));
        assert_eq!(fb.layout(), FragmentLayout::Blocks);
        let out = engine.render_html(&[a.handle, blocks], &RenderOptions::default()).unwrap();
        assert!(!out.trees[0].contains("<p") && out.trees[1].contains("<p"), "{:?}", out.trees);
        assert_eq!(out.tree_requires.len(), 2);
        assert!(out.tree_requires[1].iter().all(|r| out.requires.contains(r)));
        assert_eq!(engine.fragment_count(), 2);

        // Released: every later use is an error, and the handle is not reused.
        engine.release(&[a.handle]).unwrap();
        assert_eq!(engine.fragment_count(), 1);
        for err in [
            engine.render_html(&[a.handle], &RenderOptions::default()).map(|_| ()).unwrap_err(),
            engine.with_layout(a.handle, FragmentLayout::Inline).map(|_| ()).unwrap_err(),
            engine.release(&[a.handle]).unwrap_err(),
            engine.release(&[blocks, 999]).unwrap_err(),
        ] {
            assert!(err.contains("released") || err.contains("unknown"), "{err}");
        }
        // The failed release of `[blocks, 999]` released nothing.
        assert!(engine.render_html(&[blocks], &RenderOptions::default()).is_ok());
        let c = engine.parse("x", "c", FragmentLayout::Inline).unwrap();
        assert!(c.handle > blocks);

        for (text, empty) in [("", true), ("  \n\t ", true), ("%% a comment\n\n  %% another\n", true), ("\n\n", true), ("~", false), ("\\(x\\)", false), ("%% c\nword", false)] {
            let parsed = engine.parse(text, "e", FragmentLayout::InlineOrBlocks).unwrap();
            assert_eq!(parsed.empty, empty, "{text:?}");
        }
    }

    /// Step 2: the registry's definitions, styles first, the page style among
    /// them; a run's pieces carry their requirements and place.
    #[test]
    fn definitions_of_the_registry() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let defs = engine.html_definitions();
        let first_script = defs.iter().position(|d| d.kind == "script").expect("a script definition");
        assert!(defs[..first_script].iter().all(|d| d.kind == "style") && defs[first_script..].iter().all(|d| d.kind == "script"));
        let ids: Vec<&str> = defs.iter().map(|d| d.id.as_str()).collect();
        assert!(ids.contains(&"flm.html.style.core") && ids.contains(&"flm.html.style.page") && ids.contains(&"flm.html.mathjax"), "{ids:?}");
        let core = defs.iter().find(|d| d.id == "flm.html.style.core").unwrap();
        assert_eq!(core.parts[0].kind, "inline");
        assert!(core.parts[0].text.starts_with("/* flm.html.style.core */"));

        let a = engine.parse("Text\\footnote{A note.}", "a.yml#x", FragmentLayout::InlineOrBlocks).unwrap();
        let out = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        let notes = out.pieces.iter().find(|p| p.name == "flm.xnotes.list.footnote").expect("footnote piece");
        assert_eq!(notes.place, "after-content");
        assert!(!notes.requires.is_empty(), "{notes:?}");
    }

    /// Q11: the text output, one run, and each tree's text rendered alone.
    #[test]
    fn plain_text_per_tree() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let a = engine.parse("A \\emph{name} with \\(x^2\\)", "a.yml#name", FragmentLayout::Inline).unwrap();
        let long = "This is a long paragraph that would wrap at eighty columns if the width were set, with a \\href{https://example.org/}{link} inside it.";
        let b = engine.parse(long, "a.yml#description", FragmentLayout::InlineOrBlocks).unwrap();
        let out = engine.render_text(&[a.handle, b.handle], &TextOptions { per_tree: true, ..Default::default() }).unwrap();
        // Mathematics passes through as its source (the math_passthrough package).
        assert_eq!(out.trees[0], "A name with \\(x^2\\)", "{:?}", out);
        assert!(out.trees[1].starts_with("This is a long paragraph") && out.trees[1].ends_with("link inside it."), "{:?}", out.trees[1]);
        assert!(!out.trees[1].contains('\n') && !out.trees[1].contains("example.org"), "{:?}", out.trees[1]);
        assert!(out.text.contains(&out.trees[1]) && out.text.contains(&out.trees[0]));
        let wrapped = engine.render_text(&[b.handle], &TextOptions { width: Some(40), link_addresses: true, per_tree: true, ..Default::default() }).unwrap();
        assert!(wrapped.trees[0].contains('\n') && wrapped.trees[0].contains("<https://example.org/>"), "{:?}", wrapped.trees[0]);
        // A citation is its mark alone: no list of cited works in the text.
        let c = engine.parse("Cited \\cite{arxiv:1}.", "a.yml#x", FragmentLayout::Inline).unwrap();
        let cited = engine.render_text(&[c.handle], &TextOptions { per_tree: true, ..Default::default() }).unwrap();
        // The citation feature writes a no-break space before the mark.
        assert!(cited.trees[0].starts_with("Cited\u{a0}[1]") && !cited.text.contains("References"), "{:?}", cited);
        let with_pieces = engine.render_text(&[c.handle], &TextOptions { pieces: true, ..Default::default() }).unwrap();
        assert!(with_pieces.text.contains("References"), "{:?}", with_pieces.text);

        // The per-tree runs' diagnostics: a reference to another tree
        // resolves in the whole run only.
        let d = engine.parse("An equation \\begin{equation}x\\label{eq:x}\\end{equation}", "d.yml#a", FragmentLayout::InlineOrBlocks).unwrap();
        let e = engine.parse("See \\eqref{eq:x}.", "d.yml#b", FragmentLayout::InlineOrBlocks).unwrap();
        let both = engine.render_text(&[d.handle, e.handle], &TextOptions { per_tree: true, ..Default::default() }).unwrap();
        assert!(both.diagnostics.is_empty(), "{:?}", both.diagnostics);
        assert_eq!(both.tree_diagnostics.len(), 2);
        assert!(both.tree_diagnostics[0].is_empty(), "{:?}", both.tree_diagnostics[0]);
        let ids: Vec<(&str, Option<&str>)> = both.tree_diagnostics[1].iter().map(|d| (d.identifier.as_str(), d.origin.as_deref())).collect();
        assert_eq!(ids, vec![("flm.refs.unresolved", Some("d.yml#b"))]);
        let whole = engine.render_text(&[d.handle, e.handle], &TextOptions::default()).unwrap();
        assert!(whole.trees.is_empty() && whole.tree_diagnostics.is_empty());
    }

    /// R18: truncation at the node level, groups closed, parses again.
    #[test]
    fn truncation_cuts_at_a_word_boundary_and_closes_groups() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let text = "Hello \\emph{big wide} world, see \\(x^2+y^2\\) and \\cite{arxiv:1} at the end of the text.";
        let t = engine.truncate(text, "a", FragmentLayout::Inline, &TruncateOptions { chars: 24, min_chars: None, marker: " …".into(), first_paragraph: false }).unwrap();
        assert!(t.truncated && t.source.starts_with("Hello \\emph{big wide} world") && t.source.ends_with(" …"), "{:?}", t.source);
        assert!(engine.parse(&t.source, "a", FragmentLayout::Inline).unwrap().diagnostics.is_empty());
        // A cut inside a brace group closes it.
        let t2 = engine.truncate("\\emph{a long emphasized sentence here} more", "a", FragmentLayout::Inline, &TruncateOptions { chars: 12, min_chars: None, marker: " …".into(), first_paragraph: false }).unwrap();
        assert!(t2.source.starts_with("\\emph{a long") && t2.source.ends_with(" …}"), "{:?}", t2.source);
        assert!(engine.parse(&t2.source, "a", FragmentLayout::Inline).unwrap().diagnostics.is_empty());
        // Math and environments are kept whole or left out.
        let t3 = engine.truncate("Short \\(a very long formula \\sum_{i=1}^{n} x_i\\) tail", "a", FragmentLayout::Inline, &TruncateOptions { chars: 10, min_chars: None, marker: "…".into(), first_paragraph: false }).unwrap();
        assert_eq!(t3.source, "Short…", "{:?}", t3.source);
        let t4 = engine.truncate("Intro \\begin{itemize}\\item one \\item two\\end{itemize} after", "a", FragmentLayout::InlineOrBlocks, &TruncateOptions { chars: 9, min_chars: None, marker: "…".into(), first_paragraph: false }).unwrap();
        assert_eq!(t4.source, "Intro…", "{:?}", t4.source);
        // Nothing to cut: the source comes back whole.
        let t5 = engine.truncate("Short text.", "a", FragmentLayout::Inline, &TruncateOptions { chars: 100, min_chars: None, marker: "…".into(), first_paragraph: false }).unwrap();
        assert!(!t5.truncated && t5.source == "Short text.");
        // The first paragraph only.
        let t6 = engine.truncate("Para one text.\n\nPara two text.", "a", FragmentLayout::InlineOrBlocks, &TruncateOptions { chars: 100, min_chars: None, marker: "…".into(), first_paragraph: true }).unwrap();
        assert_eq!(t6.source.trim(), "Para one text.", "{:?}", t6.source);
    }

    /// R18: a command is cut only inside its last argument, and what its
    /// element declares apart from the text (citation keys, reference
    /// targets, link addresses) is never cut: every truncation parses again
    /// without a diagnostic (found on the EC zoo data, step 6 B2).
    #[test]
    fn truncation_keeps_command_arguments_whole() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let options = |chars: usize| TruncateOptions { chars, min_chars: None, marker: " …".into(), first_paragraph: false };
        let cases: [(&str, usize, &[&str], &[&str]); 6] = [
            // The keys of a \cite count nothing and are never cut.
            ("See \\cite{arxiv:1108.0123} and some more words here.", 8, &["\\cite{arxiv:1108.0123}"], &[]),
            // A citation chunk (\\cite{a}\\cite{b}) is one command: a cut in
            // the note of its second call leaves the chunk out whole, rather
            // than that call without its keys.
            ("Text \\cite[Rem. 15.3.27]{preset:a}\\cite[Thm. 15.3.28]{preset:b} after.", 20, &["Text"], &["cite", "Thm", "preset"]),
            // A cut in the note of a single call leaves it out whole.
            ("Text and \\cite[A rather long note]{preset:a} after.", 14, &["Text and"], &["cite", "note", "preset"]),
            // The target of a \hyperref is never cut; its text may be.
            ("A \\hyperref[topic:quantum-weight-enumerator]{pure and simple} code with more text after it.", 9, &["\\hyperref[topic:quantum-weight-enumerator]{pure"], &["code"]),
            // The address of a \href is never cut; its text may be.
            ("\\href{https://example.org/a/long/path}{the link text here} tail", 8, &["\\href{https://example.org/a/long/path}{the link"], &["tail"]),
            // Verbatim content is kept whole or left out.
            ("Verbatim \\verbcode{some long code text} after", 12, &["Verbatim"], &["some long", "verbcode"]),
        ];
        for (text, chars, kept, left_out) in cases {
            assert!(engine.parse(text, "a", FragmentLayout::Inline).unwrap().diagnostics.is_empty(), "{text}");
            let t = engine.truncate(text, "a", FragmentLayout::Inline, &options(chars)).unwrap();
            assert!(t.truncated && (t.source.ends_with('…') || t.source.ends_with("…}")), "{:?}", t.source);
            for k in kept {
                assert!(t.source.contains(k), "{:?} should keep {k:?}", t.source);
            }
            for l in left_out {
                assert!(!t.source.contains(l), "{:?} should leave out {l:?}", t.source);
            }
            let reparsed = engine.parse(&t.source, "a", FragmentLayout::Inline).unwrap();
            assert!(reparsed.diagnostics.is_empty(), "{:?}: {:?}", t.source, reparsed.diagnostics);
        }
    }

    /// Q12: one recomposed-LaTeX run over several fragments: safe labels
    /// numbered once over the run, object references raw, citations as hooks,
    /// comments dropped, the style file produced.
    #[test]
    fn recomposed_latex_for_the_handbook() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        engine.set_external_index(&[ExternalEntry { label: "code:x".into(), href: "/c/x".into(), display: "The X code".into() }]).unwrap();
        let a = engine.parse("A code \\(E=mc^2\\) with \\begin{align}a=b\\label{eq:one}\\end{align} see \\eqref{eq:one} and \\cite{arXiv:1234.5678}.", "a.yml#description", FragmentLayout::InlineOrBlocks).unwrap();
        let b = engine.parse("Related to \\ref{code:x}; %% a comment\nand \\begin{align}c=d\\label{eq:two}\\end{align}\\ref{eq:two}, \\ref{eq:one}.", "b.yml#description", FragmentLayout::InlineOrBlocks).unwrap();
        assert!(a.diagnostics.is_empty() && b.diagnostics.is_empty(), "{:?} {:?}", a.diagnostics, b.diagnostics);
        let out = engine
            .render_latex(&[a.handle, b.handle], &LatexOptions { raw_label_types: vec!["code".into()], drop_comments: true, ..LatexOptions::default() })
            .unwrap();
        let ids: Vec<&str> = out.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(!ids.iter().any(|i| i.starts_with("flm.refs.")), "{:?}", out.diagnostics);
        // `\eqref` stays `\eqref` (LaTeX's own) over the safe label.
        assert!(out.trees[0].contains("\\flmLabels{\\label{ref1}}") && out.trees[0].contains("\\eqref{ref1}"), "{}", out.trees[0]);
        assert!(out.trees[1].contains("\\flmLabels{\\label{ref2}}") && out.trees[1].contains("\\flmRef{ref2}") && out.trees[1].contains("\\flmRef{ref1}"), "{}", out.trees[1]);
        assert!(out.trees[1].contains("code:x"), "{}", out.trees[1]);
        assert!(!out.trees[1].contains("a comment"), "{}", out.trees[1]);
        assert!(out.trees[0].contains("\\flmCite{arXiv:1234.5678}"), "{}", out.trees[0]);
        assert!(out.style.as_deref().map(|s| s.contains("flmRef")).unwrap_or(false), "{:?}", out.style_name);
        assert!(out.style_name.as_deref().map(|n| n.ends_with(".sty")).unwrap_or(false));
    }

    /// Q14: settings as data: a user macro, a feature switched off, a render
    /// option, and the schema of a feature's settings.
    #[test]
    fn settings_as_data_configure_the_registry() {
        let config: EngineConfig = serde_json::from_value(serde_json::json!({
            "settings": {
                "userdefs": {
                    "macros": {
                        "kw": { "args": "{", "content": "\\textbf{#1}", "docs": "A keyword." },
                        "zoo": { "content": { "text": "the Zoo", "math": "\\mathcal{Z}" } }
                    }
                }
            },
            "off": ["annotations"]
        }))
        .unwrap();
        let mut engine = Engine::new(&config).unwrap();
        assert!(engine.build_diagnostics().is_empty(), "{:?}", engine.build_diagnostics());
        let a = engine.parse("A \\kw{term} of \\zoo, \\(\\zoo\\).", "a.yml#x", FragmentLayout::Inline).unwrap();
        assert!(a.diagnostics.is_empty(), "{:?}", a.diagnostics);
        let out = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert!(out.trees[0].contains("<strong") && out.trees[0].contains("term") && out.trees[0].contains("the Zoo"), "{}", out.trees[0]);
        assert!(out.trees[0].contains("mathcal"), "{}", out.trees[0]);
        // The `quote` feature's default environments are on (the EC zoo's FeatureQuote).
        let q = engine.parse("\\begin{quote}Said.\\end{quote}", "a.yml#q", FragmentLayout::InlineOrBlocks).unwrap();
        assert!(q.diagnostics.is_empty(), "{:?}", q.diagnostics);

        let features = Engine::features().unwrap();
        let names: Vec<&str> = features.iter().map(|f| f.name.as_str()).collect();
        assert!(names.contains(&"userdefs") && names.contains(&"quote") && names.contains(&"citations"), "{names:?}");
        let userdefs = features.iter().find(|f| f.name == "userdefs").unwrap();
        assert!(userdefs.schema.as_ref().unwrap().to_string().contains("macros"));

        // An unknown key is refused with its path.
        let bad: EngineConfig = serde_json::from_value(serde_json::json!({ "settings": { "math": { "no_such_key": 1 } } })).unwrap();
        let err = match Engine::new(&bad) { Ok(_) => panic!("accepted an unknown key"), Err(e) => e };
        assert!(err.contains("no_such_key"), "{err}");
    }

    /// Q5: a standalone tree holding a reference, a citation, an image or a
    /// reference point is reported by the check stage of the scan.
    #[test]
    fn the_standalone_check_reports_document_facts() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let ok = engine.parse("A \\emph{plain} name \\(x^2\\)", "a.yml#name", FragmentLayout::Inline).unwrap();
        let bad = engine.parse("See \\ref{person:bob} and \\cite{arxiv:1}\\footnote{a note}", "b.yml#name", FragmentLayout::Inline).unwrap();
        let doc = engine.parse("A paragraph with \\ref{person:bob}.", "b.yml#biography", FragmentLayout::InlineOrBlocks).unwrap();
        assert!(ok.diagnostics.is_empty() && bad.diagnostics.is_empty() && doc.diagnostics.is_empty(), "{:?} {:?} {:?}", ok.diagnostics, bad.diagnostics, doc.diagnostics);
        let scan = engine.scan(&[ok.handle, bad.handle, doc.handle], &[ok.handle, bad.handle]).unwrap();
        let violations: Vec<&DiagOut> = scan.diagnostics.iter().filter(|d| d.identifier == "zoodb.standalone.violation").collect();
        assert_eq!(scan.standalone_violations, violations.len());
        assert!(violations.iter().all(|d| d.origin.as_deref() == Some("b.yml#name")), "{violations:?}");
        let whats: Vec<&str> = violations.iter().map(|d| d.message.as_str()).collect();
        assert!(whats.iter().any(|m| m.contains("a reference,")), "{whats:?}");
        assert!(whats.iter().any(|m| m.contains("a citation")), "{whats:?}");
        assert!(whats.iter().any(|m| m.contains("a reference point")), "{whats:?}");
        // A footnote is two reference points (the note and its mark).
        assert_eq!(violations.len(), 4, "{whats:?}");
        // Not marked standalone: nothing reported.
        let scan2 = engine.scan(&[bad.handle], &[]).unwrap();
        assert_eq!(scan2.standalone_violations, 0);
    }

    /// Q4: per label, the anchor and the display source the external index
    /// entries are built from; per tree, the references as labels; the
    /// duplicate labels with the later point.
    #[test]
    fn the_scan_reports_labels_with_anchors_and_displays_and_references_as_labels() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let a = engine
            .parse(
                "\\section{Intro \\emph{x}}\\label{sec:intro}\\label{sec:other}\n\nText \\begin{equation}x\\label{eq:x}\\label{eq:y}\\end{equation}\n\n\\begin{figure}\\includegraphics{a}\\caption{Cap}\\label{figure:f}\\label{figure:g}\\end{figure}",
                "a.yml#d",
                FragmentLayout::InlineOrBlocks,
            )
            .unwrap();
        let b = engine
            .parse(
                "B \\begin{equation}y\\label{eq:x}\\end{equation} see \\ref{eq:x}, \\hyperref[sec:intro]{here} and \\ref{person:z}",
                "b.yml#d",
                FragmentLayout::InlineOrBlocks,
            )
            .unwrap();
        let scan = engine.scan(&[a.handle, b.handle], &[]).unwrap();
        let label = |l: &str| scan.trees[0].labels.iter().find(|x| x.label == l).cloned().unwrap();
        let intro = label("sec:intro");
        assert_eq!(intro.anchor.as_deref(), Some("sec-intro"));
        assert_eq!(intro.display.as_deref(), Some("Intro \\emph{x}"));
        let eq = label("eq:x");
        assert_eq!(eq.anchor.as_deref(), Some("eq-x"));
        assert_eq!(eq.display, None);
        // A float is anchored on its number, which follows the scanned
        // document's numbering: no anchor reported. Its display is its
        // caption argument, without the braces.
        let figure = label("figure:f");
        assert_eq!(figure.anchor, None);
        assert_eq!(figure.display.as_deref(), Some("Cap"));
        // A later label of a point gets the point's anchor when one of the
        // point's labels forms it, and the point's display.
        let other = label("sec:other");
        assert_eq!(other.anchor.as_deref(), Some("sec-intro"));
        assert_eq!(other.display.as_deref(), Some("Intro \\emph{x}"));
        assert_eq!(label("eq:y").anchor.as_deref(), Some("eq-x"));
        assert_eq!(label("figure:g").anchor, None);
        assert!(scan.trees[1].labels.is_empty(), "{:?}", scan.trees[1].labels);
        let refs: Vec<(&str, bool)> = scan.trees[1].refs.iter().map(|r| (r.label.as_str(), r.resolved)).collect();
        assert_eq!(refs, vec![("eq:x", true), ("sec:intro", true), ("person:z", false)]);
        assert_eq!(scan.duplicate_labels.len(), 1);
        let dup = &scan.duplicate_labels[0];
        assert_eq!((dup.label.as_str(), dup.origin.as_deref()), ("eq:x", Some("b.yml#d")));
        assert!(dup.start < dup.end && dup.end <= "B \\begin{equation}y\\label{eq:x}\\end{equation}".len(), "{dup:?}");
    }

    /// Q16: the fields of an FLM data file, with their verbatim bodies.
    #[test]
    fn fields_of_a_data_file_are_read_verbatim() {
        let engine = Engine::new(&EngineConfig::default()).unwrap();
        let text = "\n\\begin{field}{key2}\nvalue2\n\\end{field}\n\n\\begin{field}{key3.subkey.subsubkey}\nAnother \\emph{other} value % not a comment\n\\end{field}\n\n%%\n%% Note that comments at this level are allowed.\n%%\n\n\\begin{field}{key1.innerkey.[]} three \\end{field}\n";
        let out = engine.parse_fields(text, "dummy/xyz.flm").unwrap();
        assert!(out.diagnostics.is_empty(), "{:?}", out.diagnostics);
        let got: Vec<(&str, &str)> = out.fields.iter().map(|f| (f.name.as_str(), f.text.as_str())).collect();
        assert_eq!(got, vec![("key2", "\nvalue2\n"), ("key3.subkey.subsubkey", "\nAnother \\emph{other} value % not a comment\n"), ("key1.innerkey.[]", " three ")]);
        for f in &out.fields {
            assert_eq!(&text[f.start..f.end], f.text);
        }
        let stray = engine.parse_fields("stray text\n\\begin{field}{a}x\\end{field}\n", "d.flm").unwrap();
        assert_eq!(stray.fields.len(), 1);
        assert!(stray.diagnostics.iter().any(|d| d.identifier == "zoodb.fields.stray-content"), "{:?}", stray.diagnostics);
    }

    /// A field whose name is not braced, whose body holds non-ASCII text, that
    /// is not closed, or whose name cannot be read is a diagnostic, never a
    /// panic; every body range lies in the text.
    #[test]
    fn malformed_fields_are_diagnostics() {
        let engine = Engine::new(&EngineConfig::default()).unwrap();
        let check_ranges = |text: &str, out: &FieldsOut| {
            for f in &out.fields {
                assert_eq!(text.get(f.start..f.end), Some(f.text.as_str()), "{f:?}");
            }
        };
        // An unbraced one-character name followed by a non-ASCII character.
        let text = "\\begin{field}x\u{e9} body\\end{field}";
        let out = engine.parse_fields(text, "f.flm").unwrap();
        assert!(out.diagnostics.is_empty(), "{:?}", out.diagnostics);
        let got: Vec<(&str, &str)> = out.fields.iter().map(|f| (f.name.as_str(), f.text.as_str())).collect();
        assert_eq!(got, vec![("x", "\u{e9} body")]);
        check_ranges(text, &out);
        // `\end {field}` does not close the field: the parse says so, and the
        // body runs to the end of the text (no byte arithmetic on the marker).
        let text = "\\begin{field}{a}body\\end {field}";
        let out = engine.parse_fields(text, "f.flm").unwrap();
        assert!(out.diagnostics.iter().any(|d| d.identifier == "core.environments.missing-terminator"), "{:?}", out.diagnostics);
        assert_eq!(out.fields.len(), 1);
        assert_eq!(out.fields[0].text, "body\\end {field}");
        check_ranges(text, &out);
        // An empty body.
        let out = engine.parse_fields("\\begin{field}{a}\\end{field}", "f.flm").unwrap();
        assert!(out.diagnostics.is_empty(), "{:?}", out.diagnostics);
        assert_eq!((out.fields[0].name.as_str(), out.fields[0].text.as_str()), ("a", ""));
        // A name that is not plain characters, and an empty name.
        for text in ["\\begin{field}{\\emph{x}}b\\end{field}", "\\begin{field}{ }b\\end{field}"] {
            let out = engine.parse_fields(text, "f.flm").unwrap();
            assert!(out.fields.is_empty(), "{:?}", out.fields);
            let malformed: Vec<&DiagOut> = out.diagnostics.iter().filter(|d| d.identifier == "zoodb.fields.malformed").collect();
            assert_eq!(malformed.len(), 1, "{:?}", out.diagnostics);
            assert_eq!(malformed[0].origin.as_deref(), Some("f.flm"));
        }
    }

    /// An options object read from JavaScript gives the struct's `Default`
    /// for every key it leaves out (a field-level default never disagrees with
    /// it), and an unknown key is refused with its name.
    #[test]
    fn options_default_like_their_structs_and_refuse_unknown_keys() {
        use serde_json::json;
        let text: TextOptions = serde_json::from_value(json!({})).unwrap();
        assert!(text.unresolved_refs_warning);
        assert_eq!(format!("{text:?}"), format!("{:?}", TextOptions::default()));
        let render: RenderOptions = serde_json::from_value(json!({})).unwrap();
        assert_eq!(format!("{render:?}"), format!("{:?}", RenderOptions::default()));
        let latex: LatexOptions = serde_json::from_value(json!({})).unwrap();
        assert_eq!(format!("{latex:?}"), format!("{:?}", LatexOptions::default()));
        let config: EngineConfig = serde_json::from_value(json!({})).unwrap();
        assert_eq!(format!("{config:?}"), format!("{:?}", EngineConfig::default()));
        let srcset: SrcsetConfig = serde_json::from_value(json!({})).unwrap();
        assert_eq!(format!("{srcset:?}"), format!("{:?}", SrcsetConfig::default()));
        let truncate: TruncateOptions = serde_json::from_value(json!({ "chars": 10 })).unwrap();
        assert_eq!((truncate.marker.as_str(), truncate.min_chars, truncate.first_paragraph), (" \u{2026}", None, false));

        fn refused<T: serde::de::DeserializeOwned>(value: serde_json::Value, key: &str) {
            match serde_json::from_value::<T>(value) {
                Ok(_) => panic!("`{key}` accepted"),
                Err(e) => assert!(e.to_string().contains(key), "{e}"),
            }
        }
        refused::<EngineConfig>(json!({ "dolar_math": true }), "dolar_math");
        refused::<EngineConfig>(json!({ "srcset": { "image_max_zoom": 2 } }), "image_max_zoom");
        refused::<RenderOptions>(json!({ "titel": "x" }), "titel");
        refused::<LatexOptions>(json!({ "drop_comment": true }), "drop_comment");
        refused::<TextOptions>(json!({ "per_trees": true }), "per_trees");
        refused::<TruncateOptions>(json!({ "chars": 10, "min_char": 2 }), "min_char");
        refused::<ExternalEntry>(json!({ "label": "a:b", "href": "/", "display": "B", "x": 1 }), "`x`");
        refused::<CitationEntry>(json!({ "key": "a:b", "text": "T", "txt": "T" }), "txt");
        refused::<GraphicsEntry>(
            json!({ "origin": "o", "path": "p", "identity": "i", "media_type": "image/png", "address": "/a", "kind": "raster", "width": 3 }),
            "width",
        );
    }

    /// R8: with the srcset configuration, the html plan prefers the ZooDb
    /// publish stage over the standard one (two writers of one table), and
    /// the stage runs. The table write itself is blocked (U2).
    #[test]
    fn the_zoodb_publish_stage_is_preferred_and_runs() {
        let config = EngineConfig { srcset: Some(SrcsetConfig { image_max_zoom_factor: Some(2), ..Default::default() }), ..Default::default() };
        let mut engine = Engine::new(&config).unwrap();
        let b = engine.parse("\\begin{figure}\\includegraphics{images/Smiley}\\end{figure}", "a.yml#biography", FragmentLayout::InlineOrBlocks).unwrap();
        engine.set_graphics(vec![GraphicsEntry {
            origin: "a.yml#biography".into(),
            path: "images/Smiley".into(),
            identity: "x".into(),
            media_type: "image/png".into(),
            address: "/pic/Smiley.png".into(),
            kind: "raster".into(),
            width_px: Some(400),
            height_px: Some(200),
            dpi: Some(192.0),
            width_pt: None,
            height_pt: None,
        }]);
        let out = engine.render_html(&[b.handle], &RenderOptions::default()).unwrap();
        let ids: Vec<&str> = out.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        if cfg!(feature = "published-insert") {
            assert!(out.trees[0].contains("srcset=\"/pic/Smiley.png?as=webp&amp;width=200&amp;height=100 1x\""), "{}", out.trees[0]);
        } else {
            assert!(ids.contains(&"zoodb.graphics.publish-failed"), "{ids:?}");
        }
        // Without the preference, two writers of one table: the plan refuses.
        engine.prefer_zoodb_publish = false;
        engine.plans.clear();
        let err = engine.render_html(&[b.handle], &RenderOptions::default()).unwrap_err();
        assert!(err.contains("zoodb.graphics.publish.html") && err.contains("flm.graphics.publish.html"), "{err}");
    }

    /// G1: per tree, the term definitions with their labels (the computed
    /// ones first), the anchor the first label forms, the term and the byte
    /// range of the body, which leaves out the `\label` and `\aliasterm`
    /// fields written after the term.
    #[test]
    fn the_scan_reports_term_definitions_with_their_bodies() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let text_a = "Intro.\n\n\\begin{defterm}{Markov chain}\\label{topic:markov}\\aliasterm{Markov chains}\n  A random process \\emph{without} memory, as \\term{Markov chains} are.\n\\end{defterm}\n\nAfter.";
        let a = engine.parse(text_a, "a.yml#d", FragmentLayout::InlineOrBlocks).unwrap();
        let text_b = "See \\term{Markov chain}, \\ref{topic:markov} and \\begin{defterm}{Café \\(\\alpha\\)}\\end{defterm}.";
        let b = engine.parse(text_b, "b.yml#d", FragmentLayout::InlineOrBlocks).unwrap();
        assert!(a.diagnostics.is_empty() && b.diagnostics.is_empty(), "{:?} {:?}", a.diagnostics, b.diagnostics);
        let scan = engine.scan(&[a.handle, b.handle], &[]).unwrap();
        assert_eq!(scan.trees[0].terms.len(), 1, "{:?}", scan.trees[0].terms);
        let term = &scan.trees[0].terms[0];
        assert_eq!(term.labels, vec!["defterm:Markov chain", "defterm:Markov chains", "topic:markov"]);
        assert_eq!(term.anchor.as_deref(), Some(label_anchor(&Label::new("defterm", "Markov chain")).as_str()));
        assert_eq!(term.display.as_deref(), Some("Markov chain"));
        let body = &text_a[term.body_start.unwrap()..term.body_end.unwrap()];
        assert_eq!(body.trim(), "A random process \\emph{without} memory, as \\term{Markov chains} are.");
        // Every label of the point is a label of the tree, as before, and
        // each has the point's anchor (the one the computed label forms).
        let labels: Vec<&str> = scan.trees[0].labels.iter().map(|l| l.label.as_str()).collect();
        assert!(labels.contains(&"defterm:Markov chain") && labels.contains(&"topic:markov"), "{labels:?}");
        let markov = label_anchor(&Label::new("defterm", "Markov chain"));
        assert!(scan.trees[0].labels.iter().all(|l| l.anchor.as_deref() == Some(markov.as_str())), "{:?}", scan.trees[0].labels);
        // A term with markup and a multibyte character, and an empty body.
        let empty = &scan.trees[1].terms[0];
        assert_eq!(empty.display.as_deref(), Some("Café \\(\\alpha\\)"));
        assert_eq!((empty.body_start, empty.body_end), (None, None));
        // The term links and the reference resolve to the definition.
        let refs: Vec<(&str, bool)> = scan.trees[1].refs.iter().map(|r| (r.label.as_str(), r.resolved)).collect();
        assert_eq!(refs, vec![("defterm:Markov chain", true), ("topic:markov", true)]);
        assert!(scan.trees[0].cited.is_empty() && scan.trees[1].terms.len() == 1);
    }

    /// G2: every tree lists the citation keys it cites, each once, in order
    /// of first citation in the tree (a chunk, further calls, `\R`); the
    /// document's list keeps one entry per key with its first citation.
    #[test]
    fn the_scan_reports_the_cited_keys_of_every_tree() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        let a = engine.parse("A \\cite{arxiv:1,doi:2}\\cite[p.~3]{arxiv:1} and \\R\\cite{arxiv:3}.", "a.yml#d", FragmentLayout::Inline).unwrap();
        let b = engine.parse("B cites \\cite{doi:2} again\\footnote{And \\cite{arxiv:4}.}.", "b.yml#d", FragmentLayout::Inline).unwrap();
        let c = engine.parse("C cites nothing.", "c.yml#d", FragmentLayout::Inline).unwrap();
        let scan = engine.scan(&[a.handle, b.handle, c.handle], &[]).unwrap();
        assert_eq!(scan.trees[0].cited, vec!["arxiv:1", "doi:2", "arxiv:3"]);
        assert_eq!(scan.trees[1].cited, vec!["doi:2", "arxiv:4"]);
        assert!(scan.trees[2].cited.is_empty());
        let first: Vec<(&str, Option<&str>)> = scan.cited.iter().map(|(k, o)| (k.as_str(), o.as_deref())).collect();
        assert_eq!(first, vec![("arxiv:1", Some("a.yml#d")), ("doi:2", Some("a.yml#d")), ("arxiv:3", Some("a.yml#d")), ("arxiv:4", Some("b.yml#d"))]);
    }

    fn per_call(value: serde_json::Value) -> serde_json::Map<String, serde_json::Value> {
        value.as_object().cloned().unwrap()
    }

    /// G3: render options given for one html or text run, over the
    /// settings' key by key; the settings' render options of the types the
    /// engine sets fields of reach every run (they were replaced by the
    /// types' defaults before); unknown and reserved keys and values that
    /// cannot be read are refused with their names.
    #[test]
    fn render_options_per_call_over_the_settings() {
        let config: EngineConfig = serde_json::from_value(serde_json::json!({
            "settings": {
                "html": { "heading_tags": { "section": "h5" } },
                "text": { "root_heading_level": 3 },
                "latex-recomposed": { "style_stem": "zoostyle" }
            }
        }))
        .unwrap();
        let mut engine = Engine::new(&config).unwrap();
        let a = engine.parse("\\section{Sec}\nText\\footnote{N.} \\cite{arxiv:1}.\n\n\\paragraph{Run} In.", "a.yml#d", FragmentLayout::InlineOrBlocks).unwrap();
        let out = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert!(out.trees[0].starts_with("<h5 "), "{}", out.trees[0]);
        let pieces: Vec<&str> = out.pieces.iter().map(|p| p.name.as_str()).collect();
        assert!(pieces.contains(&"flm.citations.bibliography") && pieces.contains(&"flm.xnotes.list.footnote"), "{pieces:?}");
        // Per call: the pieces left out, the tag of the settings kept.
        let options = RenderOptions {
            render_options: per_call(serde_json::json!({
                "pieces": { "exclude": ["flm.citations.bibliography", "flm.xnotes.list.footnote"] },
                "html": { "root_heading_level": 0 }
            })),
            ..RenderOptions::default()
        };
        let out = engine.render_html(&[a.handle], &options).unwrap();
        assert!(out.pieces.is_empty(), "{:?}", out.pieces.iter().map(|p| &p.name).collect::<Vec<_>>());
        assert!(out.trees[0].starts_with("<h5 "), "{}", out.trees[0]);
        // The marks stay: no render option drops them.
        assert!(out.trees[0].contains("href=\"#fn-1\"") && out.trees[0].contains("href=\"#citation-1\""), "{}", out.trees[0]);
        assert!(!out.diagnostics.iter().any(|d| d.severity == "error" && !d.identifier.starts_with("flm.citations.")), "{:?}", out.diagnostics);
        // The next call without them places the pieces again.
        let out = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert_eq!(out.pieces.len(), 2);
        // Text: the settings' root heading level reaches the run (a
        // paragraph heading, level 4, is the second level under a root of 3).
        let p = engine.parse("\\paragraph{Note} Some content.", "a.yml#p", FragmentLayout::InlineOrBlocks).unwrap();
        let text = engine.render_text(&[p.handle], &TextOptions::default()).unwrap();
        assert!(text.text.starts_with("Note\n----\n"), "{:?}", text.text);
        let text = engine
            .render_text(&[p.handle], &TextOptions { render_options: per_call(serde_json::json!({ "text": { "root_heading_level": 4 } })), ..TextOptions::default() })
            .unwrap();
        assert!(text.text.starts_with("Note\n====\n"), "{:?}", text.text);
        // LaTeX: the settings' style stem reaches the run.
        let latex = engine.render_latex(&[a.handle], &LatexOptions::default()).unwrap();
        assert!(latex.style_name.as_deref().is_some_and(|n| n.starts_with("zoostyle.")), "{:?}", latex.style_name);
        // Refused, each named.
        let refused = |engine: &mut Engine, value: serde_json::Value, needle: &str| {
            let err = engine.render_html(&[a.handle], &RenderOptions { render_options: per_call(value), ..RenderOptions::default() }).unwrap_err();
            assert!(err.contains(needle), "{err}");
        };
        refused(&mut engine, serde_json::json!({ "nosuchfeature": { "x": 1 } }), "`nosuchfeature`");
        refused(&mut engine, serde_json::json!({ "html": { "no_such_key": 1 } }), "`no_such_key`");
        // A registry-bound value that the feature cannot read is named too.
        refused(&mut engine, serde_json::json!({ "citations": { "placement": "sideways" } }), "citations.placement");
        refused(&mut engine, serde_json::json!({ "refs": { "unresolved": "allow" } }), "`refs.unresolved` is set by");
        refused(&mut engine, serde_json::json!({ "pieces": { "exclude": 3 } }), "pieces.exclude");
        refused(&mut engine, serde_json::json!({ "html": [] }), "must be a map");
        let err = engine
            .render_text(&[p.handle], &TextOptions { render_options: per_call(serde_json::json!({ "text": { "width": 20 } })), ..TextOptions::default() })
            .unwrap_err();
        assert!(err.contains("`text.width` is set by"), "{err}");
    }

    /// G12: render options given for one recomposed-LaTeX run (the
    /// handbook's), over the settings' key by key: the display-math
    /// environments through `\flmMathEnvironment`, a character's spelling,
    /// the settings' style stem kept; a later call without them is as
    /// before; reserved keys and values that cannot be read are refused,
    /// each named.
    #[test]
    fn render_latex_options_per_call() {
        let config: EngineConfig = serde_json::from_value(serde_json::json!({
            "settings": { "latex-recomposed": { "style_stem": "zoostyle" } }
        }))
        .unwrap();
        let mut engine = Engine::new(&config).unwrap();
        let a = engine
            .parse("Text\u{202F}here.\n\\begin{align}\n  x = 1\n\\end{align}", "a.yml#d", FragmentLayout::InlineOrBlocks)
            .unwrap();
        let unknown = |out: &LatexOut| out.diagnostics.iter().any(|d| d.identifier == "flm.latex-recomposed.unknown-character");
        let before = engine.render_latex(&[a.handle], &LatexOptions::default()).unwrap();
        assert!(before.trees[0].contains("\\begin{align}") && !before.trees[0].contains("\\flmMathEnvironment"), "{}", before.trees[0]);
        assert!(unknown(&before), "{:?}", before.diagnostics);
        let options = LatexOptions {
            render_options: per_call(serde_json::json!({
                "math": { "emit_flm_math_environment_macro": true },
                "latex-recomposed": { "unicode_overrides": { "\u{202F}": "\\," } }
            })),
            ..LatexOptions::default()
        };
        let out = engine.render_latex(&[a.handle], &options).unwrap();
        assert!(out.trees[0].contains("\\flmMathEnvironment{align}"), "{}", out.trees[0]);
        assert!(!unknown(&out), "{:?}", out.diagnostics);
        let style = out.style.as_deref().unwrap_or("");
        assert!(style.contains("\\newunicodechar{\u{202F}}{\\,}"), "{style}");
        assert!(out.style_name.as_deref().is_some_and(|n| n.starts_with("zoostyle.")), "{:?}", out.style_name);
        let again = engine.render_latex(&[a.handle], &LatexOptions::default()).unwrap();
        assert_eq!(again.trees, before.trees);
        let refused = |engine: &mut Engine, value: serde_json::Value, needle: &str| {
            let err = engine.render_latex(&[a.handle], &LatexOptions { render_options: per_call(value), ..LatexOptions::default() }).unwrap_err();
            assert!(err.contains(needle), "{err}");
        };
        refused(&mut engine, serde_json::json!({ "latex-recomposed": { "drop_comments": true } }), "`latex-recomposed.drop_comments` is set by");
        refused(&mut engine, serde_json::json!({ "refs": { "unresolved": "allow" } }), "`refs.unresolved` is set by");
        refused(&mut engine, serde_json::json!({ "math": { "numbered_equations": "yes" } }), "math.numbered_equations");
    }

    /// The settings keys a run always sets itself are refused when the
    /// engine is created, each named with the call's option that sets it.
    #[test]
    fn the_settings_refuse_the_keys_a_run_sets() {
        for (settings, needles) in [
            (serde_json::json!({ "refs": { "unresolved": "allow" } }), vec!["`refs.unresolved`", "`unresolved`"]),
            (serde_json::json!({ "text": { "width": 40 } }), vec!["`text.width`", "`width`"]),
            (serde_json::json!({ "text": { "link_addresses": true } }), vec!["`text.link_addresses`", "`link_addresses`"]),
            (serde_json::json!({ "latex-recomposed": { "drop_comments": true } }), vec!["`latex-recomposed.drop_comments`", "`drop_comments`"]),
        ] {
            let config: EngineConfig = serde_json::from_value(serde_json::json!({ "settings": settings })).unwrap();
            let err = Engine::new(&config).err().expect("the setting is refused");
            assert!(needles.iter().all(|needle| err.contains(needle)), "{err}");
            assert_eq!(err.matches("is set by every run").count(), 1, "{err}");
        }
        // The other keys of the same features are taken.
        let config: EngineConfig = serde_json::from_value(serde_json::json!({
            "settings": { "text": { "tab_width": 2 }, "latex-recomposed": { "style_stem": "s" } }
        }))
        .unwrap();
        assert!(Engine::new(&config).is_ok());
    }

    /// The deepest nesting of `<a` elements in `html`.
    fn link_depth(html: &str) -> usize {
        let (mut depth, mut deepest) = (0usize, 0usize);
        let mut rest = html;
        while let Some(at) = rest.find("<a ").into_iter().chain(rest.find("</a>")).min() {
            if rest[at..].starts_with("<a ") {
                depth += 1;
                deepest = deepest.max(depth);
            } else {
                depth = depth.saturating_sub(1);
            }
            rest = &rest[at + 3..];
        }
        deepest
    }

    /// Brief 14, P1: on html, a `\href`, `\url` or `\email` to an address
    /// outside the site opens in a new tab ([`crate::links::is_local`]), and is
    /// otherwise what flm-core writes (the engine without the rule, byte for
    /// byte); local and refused addresses, an address that is not
    /// characters, links in links and the text and LaTeX outputs are
    /// flm-core's.
    #[test]
    fn links_outside_the_site_open_in_a_new_tab() {
        let on: EngineConfig = serde_json::from_value(serde_json::json!({
            "settings": { "userdefs": { "macros": { "doi": { "args": "{", "content": "\\href{https://doi.org/#1}{#1}" } } } }
        }))
        .unwrap();
        let off = EngineConfig { link_target_blank: false, ..on.clone() };
        assert!(on.link_target_blank && EngineConfig::default().link_target_blank);
        // (the source, the number of links in a new tab)
        let cases: [(&str, usize); 9] = [
            ("See \\href{https://example.org/a?b=1&c=2}{the \\emph{site}}, \\url{https://example.org/x/}, \\email{a@b.org} and \\href{https://a.org}{\\(x^2\\)}.", 4),
            ("Here: \\href{#sec-s}{here}, \\href{/c/steane}{Steane}; elsewhere: \\href{//cdn.example.org/x}{another host}, \\href{figures/x.png}{relative}.", 2),
            ("Refused: \\href{javascript:alert(1)}{js}.", 0),
            ("A definition: \\doi{10.1/x}; not characters: \\doi{\\emph{x}}.", 1),
            // A link inside the text: the standard link around it.
            ("\\href{https://a.org}{see \\ref{person:bob}} and \\href{https://a.org}{a note\\footnote{N.}} and \\href{https://a.org}{\\cite{arxiv:1}}", 0),
            ("\\href{https://a.org}{\\href{https://b.org}{y}}", 0),
            ("\\href{https://a.org}{\\(\\text{see \\href{https://b.org}{b}}\\)}", 0),
            ("\\hyperref[sec:s]{see \\href{https://b.org}{z}}", 0),
            ("\\section{S}\\label{sec:s} The section.", 0),
        ];
        let mut outs = Vec::new();
        for config in [&on, &off] {
            let mut engine = Engine::new(config).unwrap();
            engine.set_external_index(&[ExternalEntry { label: "person:bob".into(), href: "/person/bob".into(), display: "Bob".into() }]).unwrap();
            engine.set_citations(vec![CitationEntry {
                key: "arxiv:1".into(),
                text: "A. Author, \\emph{A title}, \\href{https://arxiv.org/abs/1}{arXiv:1}".into(),
            }]);
            let handles: Vec<u32> = cases
                .iter()
                .enumerate()
                .map(|(i, (text, _))| engine.parse(text, &format!("a.yml#f{i}"), FragmentLayout::InlineOrBlocks).unwrap().handle)
                .collect();
            let html = engine.render_html(&handles, &RenderOptions::default()).unwrap();
            let text = engine.render_text(&handles, &TextOptions { per_tree: true, ..TextOptions::default() }).unwrap();
            let latex = engine.render_latex(&handles, &LatexOptions::default()).unwrap();
            outs.push((html, text, latex));
        }
        let [(html, text, latex), (std_html, std_text, std_latex)] = &outs[..] else { unreachable!() };
        let blank = " target=\"_blank\"";
        for (i, (source, count)) in cases.iter().enumerate() {
            let tree = &html.trees[i];
            assert_eq!(tree.matches(blank).count(), *count, "{source}\n{tree}");
            assert_eq!(tree.replace(blank, ""), std_html.trees[i], "{source}");
            assert!(link_depth(tree) <= 1, "{tree}");
        }
        assert!(
            html.trees[0].contains("<a class=\"flm-pres-link\" href=\"https://example.org/a?b=1&amp;c=2\" data-flm-kind=\"url\" target=\"_blank\">the <em"),
            "{}",
            html.trees[0]
        );
        assert!(html.trees[0].contains("href=\"mailto:a@b.org\" data-flm-kind=\"url\" target=\"_blank\">a@b.org</a>"), "{}", html.trees[0]);
        // The citation entry's link in the list of cited works.
        let bib = |out: &HtmlOut| out.pieces.iter().find(|p| p.name == "flm.citations.bibliography").map(|p| p.html.clone()).unwrap();
        assert!(bib(html).contains("href=\"https://arxiv.org/abs/1\" data-flm-kind=\"url\" target=\"_blank\">arXiv:1</a>"), "{}", bib(html));
        assert_eq!(bib(html).replace(blank, ""), bib(std_html));
        // The same requirements and diagnostics: the refused address and the
        // address that is not characters reported as flm-core reports them.
        assert_eq!((&html.requires, &html.tree_requires), (&std_html.requires, &std_html.tree_requires));
        // (flm-core reports the refused address in the source of the rule
        // that staged the link, which names the rule.)
        let ids = |out: &HtmlOut| out.diagnostics.iter().map(|d| (d.identifier.clone(), d.severity)).collect::<Vec<_>>();
        assert_eq!(ids(html), ids(std_html), "{:?}\n{:?}", html.diagnostics, std_html.diagnostics);
        let names: Vec<String> = ids(html).into_iter().map(|(id, _)| id).collect();
        assert_eq!(names, ["flm.href.address-not-characters", "flm.html.refused-address"]);
        // Text and LaTeX: flm-core's rules.
        assert_eq!((&text.text, &text.trees), (&std_text.text, &std_text.trees));
        assert_eq!(latex.trees, std_latex.trees);
    }

    /// Brief 14, P2: values of settings bound to the registry or to the
    /// document for one run. The run uses a variant, built once per distinct
    /// set of registry-bound values (in any key order), its fragments parsed
    /// again with the variant's language and its external index built from
    /// the engine's entries; the next run without them is as before; a value
    /// the feature cannot read is refused by name; a released fragment is
    /// refused on a variant as on the engine.
    #[test]
    fn registry_bound_values_per_call_run_on_a_variant() {
        let mut engine = Engine::new(&EngineConfig::default()).unwrap();
        engine.set_citations(vec![CitationEntry {
            key: "arxiv:1".into(),
            text: "A. Author, \\emph{A title}, \\href{https://arxiv.org/abs/1}{arXiv:1}".into(),
        }]);
        engine.set_external_index(&[ExternalEntry { label: "person:bob".into(), href: "/person/bob".into(), display: "Bob \\emph{Bee}".into() }]).unwrap();
        let a = engine.parse("Friend of \\ref{person:bob}, cites \\cite{arxiv:1}.\\footnote{A note.}", "a.yml#d", FragmentLayout::InlineOrBlocks).unwrap();
        let b = engine.parse("Also \\cite{arxiv:1}.", "a.yml#e", FragmentLayout::InlineOrBlocks).unwrap();
        let text_options = |render_options: serde_json::Value| TextOptions { per_tree: true, render_options: per_call(render_options), ..TextOptions::default() };

        // The citation entries in place, in a text run.
        let in_place = serde_json::json!({ "citations": { "placement": "in-place" } });
        let text = engine.render_text(&[a.handle, b.handle], &text_options(in_place.clone())).unwrap();
        assert!(text.diagnostics.is_empty(), "{:?}", text.diagnostics);
        assert_eq!(text.trees[0], "Friend of Bob Bee, cites\u{a0}[A. Author, A title, arXiv:1].¹", "{:?}", text.trees);
        assert_eq!(text.trees[1], "Also\u{a0}[A. Author, A title, arXiv:1].");
        assert_eq!(engine.variant_count(), 1);
        // The same values again, in html: no second variant.
        let html = engine.render_html(&[a.handle], &RenderOptions { render_options: per_call(in_place.clone()), ..RenderOptions::default() }).unwrap();
        assert!(html.trees[0].contains("A title") && !html.pieces.iter().any(|p| p.name == "flm.citations.bibliography"), "{:?}", html);
        assert_eq!(engine.variant_count(), 1);
        // Without them: the marks, the engine's registry.
        let marks = engine.render_text(&[a.handle], &text_options(serde_json::json!({}))).unwrap();
        assert_eq!(marks.trees[0], "Friend of Bob Bee, cites\u{a0}[1].¹");

        // The lists without their headings, in an html run; then with them
        // again. An xnote kind replaces the settings' map of kinds whole.
        let headings = |out: &HtmlOut| out.pieces.iter().map(|p| p.html.contains("<h")).collect::<Vec<_>>();
        let with = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert_eq!(headings(&with), vec![true, true], "{:?}", with.pieces);
        let no_headings = serde_json::json!({
            "xnotes": { "kinds": { "footnote": { "commands": ["footnote"], "label_type": "fn", "words": { "base": { "one": "Footnote~", "other": "Footnotes~" } }, "title": null } } },
            "citations": { "heading_title": null },
        });
        let without = engine.render_html(&[a.handle], &RenderOptions { render_options: per_call(no_headings.clone()), ..RenderOptions::default() }).unwrap();
        assert!(without.diagnostics.is_empty(), "{:?}", without.diagnostics);
        assert_eq!(without.pieces.len(), 2);
        assert_eq!(headings(&without), vec![false, false], "{:?}", without.pieces);
        assert_eq!(without.trees, with.trees);
        assert_eq!(engine.variant_count(), 2);
        let again = engine.render_html(&[a.handle], &RenderOptions::default()).unwrap();
        assert_eq!(headings(&again), vec![true, true]);
        // The same values in another key order: the same variant.
        let reordered = serde_json::json!({
            "citations": { "heading_title": null },
            "xnotes": { "kinds": { "footnote": { "title": null, "words": { "base": { "other": "Footnotes~", "one": "Footnote~" } }, "commands": ["footnote"], "label_type": "fn" } } },
        });
        engine.render_html(&[a.handle], &RenderOptions { render_options: per_call(reordered), ..RenderOptions::default() }).unwrap();
        assert_eq!(engine.variant_count(), 2);

        // A value bound to the document or to either site (`toc.depth`): on
        // the run's document, with no variant.
        let toc = engine.parse("\\section{Sec}\n\n\\subsection{Sub}\n\nText.", "a.yml#t", FragmentLayout::Blocks).unwrap();
        let mut entries = |depth: serde_json::Value| {
            let mut values = serde_json::json!({ "pieces": { "include": ["flm.toc"] } });
            if !depth.is_null() {
                values["toc"] = serde_json::json!({ "depth": depth });
            }
            let options = RenderOptions { render_options: per_call(values), ..RenderOptions::default() };
            let out = engine.render_html(&[toc.handle], &options).unwrap();
            let piece = out.pieces.iter().find(|p| p.name == "flm.toc").map(|p| p.html.clone()).unwrap_or_default();
            (piece.contains("Sec"), piece.contains("Sub"))
        };
        assert_eq!(entries(serde_json::Value::Null), (true, true));
        assert_eq!(entries(serde_json::json!(1)), (true, false));
        assert_eq!(engine.variant_count(), 2);

        // The external index of a variant follows the engine's.
        engine.set_external_index(&[ExternalEntry { label: "person:bob".into(), href: "/b".into(), display: "Robert".into() }]).unwrap();
        let text = engine.render_text(&[a.handle], &text_options(in_place.clone())).unwrap();
        assert!(text.trees[0].starts_with("Friend of Robert, cites\u{a0}[A. Author"), "{:?}", text.trees);

        // Refused, by name; a released fragment on a variant.
        let err = engine.render_text(&[a.handle], &text_options(serde_json::json!({ "citations": { "placement": "sideways" } }))).unwrap_err();
        assert!(err.contains("citations.placement"), "{err}");
        let err = engine.render_text(&[a.handle], &text_options(serde_json::json!({ "citations": { "no_such_key": 1 } }))).unwrap_err();
        assert!(err.contains("`no_such_key`"), "{err}");
        engine.release(&[b.handle]).unwrap();
        let err = engine.render_text(&[a.handle, b.handle], &text_options(in_place.clone())).unwrap_err();
        assert!(err.contains("released"), "{err}");
        assert!(engine.render_text(&[a.handle], &text_options(in_place)).is_ok());
        assert_eq!(engine.variant_count(), 2);
    }

    /// The key of per-call values is the same in any key order.
    #[test]
    fn options_key_sorts_the_keys() {
        let a = serde_json::json!({ "b": 1, "a": { "y": [1, { "q": null, "p": "x" }], "x": true } });
        let b = serde_json::json!({ "a": { "x": true, "y": [1, { "p": "x", "q": null }] }, "b": 1 });
        let (a, b) = (a.as_object().unwrap(), b.as_object().unwrap());
        assert_eq!(options_key(a), options_key(b));
        assert_eq!(options_key(a), r#"{"a":{"x":true,"y":[1,{"p":"x","q":null}]},"b":1}"#);
    }
}
