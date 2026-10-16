//! The prototype engine: flm-core driven from plain Rust, with no wasm types,
//! so that it compiles and tests natively and is wrapped by `lib.rs` for
//! WebAssembly.

use std::collections::BTreeMap;
use std::sync::Arc;

use serde::{Deserialize, Serialize};

use flm_core::core::plan::{Overrides, Plan, PlanRequest};
use flm_core::model::names::{BackendName, ElementName, StageName};
use flm_core::stdcore::features::citations::{CitationProvider, PROVIDERS_SLOT};
use flm_core::stdcore::features::graphics::{GraphicsInspector, GraphicsResolver, INSPECTOR_SLOT, RESOLVER_SLOT};

use crate::host::{CitationEntry, GraphicsEntry, HostCitations, HostGraphics, HostTables};
use crate::zoodb_feature::{FIELD_ELEMENT, FIELD_ENVIRONMENT, FIELD_NAME_ARG, PUBLISH_STAGE, STANDALONE_CHECKED, STANDALONE_TREES, SrcsetConfig, StandaloneTrees, ZoodbFeature};
use flm_core::model::element::element_of;
use flm_core::core::registry::{DefContent, FlmRegistry, RegistryBuilder, RegistryInputs};
use flm_core::core::run::{Externals, Run, RunOptions};
use flm_core::lang::{FlmDiagnostic, FlmOrigin, FlmParsing, FlmSource, ParseOptions, parse_fragment};
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
use flm_core::stdcore::features::citations::KEYS;
use flm_core::stdcore::features::refs::{RefsRecomposeOptions, SafeLabelMode};
use flm_core::core::lowering::chars_at_lowering;
use flm_core::stdcore::features::graphics::{GraphicsImage, PATH_ARG};
use flm_core::stdcore::features::index::ELEMENT_INDEX;
use flm_core::stdcore::features::refs::{
    EXTERNAL_INDEX, ExternalIndex, ExternalTarget, LABELS, REF_RESOLUTIONS, RefsRenderOptions, Resolution, UnresolvedRefs, value_of,
};
use flm_core::model::aspects::Label;
use flm_core::core::settings::PackageSettings;
use flm_core::stdcore;
use flm_core::techy::error::Severity;
use flm_core::techy::source::LineIndexCache;

// ---------------------------------------------------------------------------
// Configuration and outputs (all serializable: they cross to JavaScript)

#[derive(Debug, Clone, Default, Deserialize)]
pub struct EngineConfig {
    /// Whether `$…$` delimits mathematics (the EC zoo writes `\(…\)`).
    #[serde(default)]
    pub dollar_math: bool,
    /// Alternative image sources for the html output (Q7); none when absent.
    /// With it, the ZooDb publish stage is preferred over the standard one.
    #[serde(default)]
    pub srcset: Option<SrcsetConfig>,
    /// The settings of the standard features as data (Q14): one map per
    /// feature, `{ feature: { key: value } }`, read through the feature's
    /// declaration (`stdcore::factory`). User definitions go under
    /// `userdefs` (`macros`, `environments`, `specials`).
    #[serde(default)]
    pub settings: serde_json::Map<String, serde_json::Value>,
    /// Standard features switched off by name.
    #[serde(default)]
    pub off: Vec<String>,
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
    /// The canonical path of the origin (the fragment's `path#field`), if any.
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
pub struct ExternalEntry {
    pub label: String,
    pub href: String,
    pub display: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct ParsedOut {
    pub handle: u32,
    pub diagnostics: Vec<DiagOut>,
}

#[derive(Debug, Clone, Default, Deserialize)]
pub struct RenderOptions {
    #[serde(default)]
    pub title: Option<String>,
    /// Unresolved references are Warnings instead of Errors.
    #[serde(default)]
    pub unresolved_refs_warning: bool,
}

/// Options of a recomposed-LaTeX run (Q12).
#[derive(Debug, Clone, Default, Deserialize)]
pub struct LatexOptions {
    /// Label types written as the document spelled them (`code`, `domain`,
    /// `kingdom`: the handbook's aux definitions resolve them); every other
    /// type gets a safe label.
    #[serde(default)]
    pub raw_label_types: Vec<String>,
    #[serde(default)]
    pub drop_comments: bool,
    #[serde(default)]
    pub unresolved_refs_warning: bool,
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

#[derive(Debug, Clone, Serialize)]
pub struct DefOut {
    pub id: String,
    pub kind: &'static str,
    pub owner: String,
    /// Each part: `{ kind: inline|file|url|table|host, text }`.
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
    pub place: String,
    pub html: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct HtmlOut {
    /// One HTML string per handle given, in the same order.
    pub trees: Vec<String>,
    pub pieces: Vec<PieceOut>,
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

#[derive(Debug, Clone, Default, Serialize)]
pub struct ScanTreeOut {
    pub labels: Vec<String>,
    pub refs_resolved: Vec<String>,
    pub refs_unresolved: Vec<String>,
    pub graphics: Vec<GraphicsRefOut>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ScanOut {
    /// One entry per handle given, in the same order.
    pub trees: Vec<ScanTreeOut>,
    /// Cited keys in order of first citation, with the origin of that citation.
    pub cited: Vec<(String, Option<String>)>,
    pub duplicate_labels: Vec<String>,
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
    fragments: Vec<Arc<Fragment>>,
    plans: BTreeMap<String, Arc<Plan>>,
    /// The external index installed in every render run (Q4): labels of zoo
    /// objects, with their link target and display content.
    external_index: ExternalIndex,
    /// The citations and graphics tables the services read (Q6, Q7).
    host: Arc<HostTables>,
    /// Whether the html plan prefers the ZooDb publish stage (srcset).
    prefer_zoodb_publish: bool,
    /// The option values the settings gave (Q14): set on every document and
    /// merged into every plan's render options, before the per-call ones.
    document_options: OptionValues,
    render_options: OptionValues,
}

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
        origin: source.origin().canonical_path().map(str::to_owned),
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
    let before = &text[..at.min(text.len())];
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

impl Engine {
    pub fn new(config: &EngineConfig) -> Result<Engine, String> {
        let host = Arc::new(HostTables::default());
        // The standard package from its settings as data (Q14).
        let factory = stdcore::factory().map_err(|e| e.to_string())?;
        let mut package_settings = PackageSettings::new();
        let mut document_options = OptionValues::new();
        let mut render_options = OptionValues::new();
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
        let mut builder = RegistryBuilder::new();
        builder.use_package(factory.build(&package_settings).map_err(|e| e.to_string())?);
        builder.use_package(flm_core::math_passthrough::package());
        builder.feature(Arc::new(ZoodbFeature { srcset: config.srcset.clone() }));
        // The services are lookups over the host tables (Q6, Q7).
        builder.contribute_to(PROVIDERS_SLOT, Arc::new(HostCitations(Arc::clone(&host))) as Arc<dyn CitationProvider>);
        builder.contribute_to(RESOLVER_SLOT, Arc::new(HostGraphics(Arc::clone(&host))) as Arc<dyn GraphicsResolver>);
        builder.contribute_to(INSPECTOR_SLOT, Arc::new(HostGraphics(Arc::clone(&host))) as Arc<dyn GraphicsInspector>);
        let mut inputs = RegistryInputs::new();
        inputs.parsing = FlmParsing { dollar_math: config.dollar_math, ..FlmParsing::default() };
        inputs.build_identity = Some(String::from("zoodb-flm-wasm-proto 0.0.1"));
        let registry = builder.build(&inputs).map_err(|e| e.render())?;
        Ok(Engine {
            registry,
            fragments: Vec::new(),
            plans: BTreeMap::new(),
            external_index: ExternalIndex::new(),
            host,
            prefer_zoodb_publish: config.srcset.is_some(),
            document_options,
            render_options,
        })
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

    pub fn fragment_count(&self) -> usize {
        self.fragments.len()
    }

    pub fn parse(&mut self, text: &str, origin: &str, layout: FragmentLayout) -> Result<ParsedOut, String> {
        let origin = if origin.is_empty() { FlmOrigin::none() } else { FlmOrigin::new(origin) };
        let source = Arc::new(FlmSource::new(text).with_origin(origin));
        let fragment = parse_fragment(self.registry.lang(), source, layout, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        let diagnostics = diags_out(fragment.diags().iter());
        let handle = self.fragments.len() as u32;
        self.fragments.push(Arc::new(fragment));
        Ok(ParsedOut { handle, diagnostics })
    }

    /// Replaces the external index. Each display text is parsed inline with
    /// the registry's language and copied into a synthesized value, as the
    /// `ExternalTarget` documentation prescribes. Returns the parse
    /// diagnostics of the display texts.
    pub fn set_external_index(&mut self, entries: &[ExternalEntry]) -> Result<Vec<DiagOut>, String> {
        let mut index = ExternalIndex::new();
        let mut diagnostics = Vec::new();
        let guard = self.registry.lang().guard();
        for entry in entries {
            let label = Label::parse(&entry.label).ok_or_else(|| format!("`{}` is not a `type:label`", entry.label))?;
            let source = Arc::new(FlmSource::new(&entry.display).with_origin(FlmOrigin::synthetic(format!("index:{}", entry.label))));
            let fragment = parse_fragment(self.registry.lang(), source, FragmentLayout::Inline, &ParseOptions::default())
                .map_err(|e| e.diagnostic().message().to_string())?;
            diagnostics.extend(diags_out(fragment.diags().iter()));
            let root = fragment.tree().root();
            let children: Vec<_> = root.children().iter().map(|n| n.clone()).collect();
            let display = value_of(&children, &root, guard).map_err(|e| format!("display of `{}`: {e:?}", entry.label))?;
            index = index.with(label, ExternalTarget { href: entry.href.clone(), display });
        }
        self.external_index = index;
        Ok(diagnostics)
    }

    pub fn external_index_len(&self) -> usize {
        self.external_index.targets.len()
    }

    fn externals(&self) -> Externals {
        if self.external_index.targets.is_empty() {
            Externals::none()
        } else {
            Externals::none().install_unstamped(EXTERNAL_INDEX, self.external_index.clone())
        }
    }

    fn place(&self, handles: &[u32]) -> Result<(Arc<Doc>, Vec<TreeId>), String> {
        let mut content = DocContent::new();
        let mut ids = Vec::with_capacity(handles.len());
        for &h in handles {
            let fragment = self.fragments.get(h as usize).ok_or_else(|| format!("unknown fragment handle {h}"))?;
            ids.push(content.place(Arc::clone(fragment)));
        }
        Ok((Arc::new(Doc::with_options(content, self.document_options.clone())), ids))
    }

    fn plan(&mut self, key: String, make: impl FnOnce(&Arc<FlmRegistry>) -> Result<Plan, String>) -> Result<Arc<Plan>, String> {
        if let Some(plan) = self.plans.get(&key) {
            return Ok(Arc::clone(plan));
        }
        let plan = Arc::new(make(&self.registry)?);
        self.plans.insert(key, Arc::clone(&plan));
        Ok(plan)
    }

    pub fn render_html(&mut self, handles: &[u32], options: &RenderOptions) -> Result<HtmlOut, String> {
        let key = format!("html:{}:{}", options.unresolved_refs_warning, options.title.as_deref().unwrap_or(""));
        let prefer_zoodb_publish = self.prefer_zoodb_publish;
        let settings_render_options = self.render_options.clone();
        let plan = self.plan(key, |registry| {
            let mut html_options = HtmlRenderOptions::default();
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
            let mut render_options = settings_render_options;
            render_options.merge_from(&OptionValues::new().with(html_options).with(refs_options));
            let overrides = Overrides {
                render_options,
                prefer: if prefer_zoodb_publish { vec![StageName::from(PUBLISH_STAGE)] } else { Vec::new() },
                unsupported,
                ..Overrides::none()
            };
            Plan::for_workflow(registry, html::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = self.place(handles)?;
        let mut run = Run::new(doc, plan, self.externals()).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;

        let fragments = run.table(OUTPUT_TABLE).map_err(|e| e.to_string())?.ok_or("the html workflow wrote no output table")?;
        let mut requires = std::collections::BTreeSet::new();
        let trees: Vec<String> = ids
            .iter()
            .map(|id| match fragments.trees.get(id) {
                Some(f) => {
                    requires.extend(f.requires.iter().map(|n| n.to_string()));
                    f.html()
                }
                None => String::new(),
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
                        place: format!("{:?}", piece.place),
                        html: piece.fragment.html(),
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
                            DefinitionOverride::Parts(parts) => parts
                                .iter()
                                .map(|p| match p {
                                    DefContent::Inline(text) => DefPartOut { kind: "inline", text: text.clone() },
                                    DefContent::File(path) => DefPartOut { kind: "file", text: path.clone() },
                                    DefContent::Url(url) => DefPartOut { kind: "url", text: url.clone() },
                                    other => DefPartOut { kind: "other", text: format!("{other:?}") },
                                })
                                .collect(),
                        },
                    })
                    .collect()
            })
            .unwrap_or_default();
        let view = run.diagnostics();
        Ok(HtmlOut {
            trees,
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
    /// diagnostic.
    pub fn parse_fields(&self, text: &str, origin: &str) -> Result<FieldsOut, String> {
        let origin = if origin.is_empty() { FlmOrigin::none() } else { FlmOrigin::new(origin) };
        let source = Arc::new(FlmSource::new(text).with_origin(origin));
        let fragment = parse_fragment(self.registry.lang(), source, FragmentLayout::Blocks, &ParseOptions::default())
            .map_err(|e| e.diagnostic().message().to_string())?;
        let mut diagnostics = diags_out(fragment.diags().iter());
        let end_marker = format!("\\end{{{FIELD_ENVIRONMENT}}}");
        let mut fields = Vec::new();
        let mut covered: Vec<(usize, usize)> = Vec::new();
        let mut stack: Vec<_> = fragment.tree().root().children().iter().map(|n| n.clone()).collect();
        while let Some(node) = stack.pop() {
            if element_of(&node).name.to_string() == FIELD_ELEMENT {
                let span = node.span();
                let Ok(Some(name_nodes)) = node.argument_content_nodes_named(FIELD_NAME_ARG) else { continue };
                let name = match chars_at_lowering(name_nodes.iter()) {
                    Ok(Ok(name)) => name.trim().to_string(),
                    _ => continue,
                };
                let arg_end = name_nodes.iter().map(|n| n.span().end()).max().unwrap_or(span.start()) + 1;
                let body_end = span.end().saturating_sub(end_marker.len()).max(arg_end);
                fields.push(FieldOut { name, start: arg_end, end: body_end, text: text[arg_end..body_end].to_string() });
                covered.push((span.start(), span.end()));
                continue;
            }
            stack.extend(node.children().iter().map(|n| n.clone()));
        }
        fields.sort_by_key(|f| f.start);
        covered.sort();
        // Stray content: anything outside the fields that is not whitespace or a comment.
        let mut pos = 0;
        let mut ranges = covered.clone();
        ranges.push((text.len(), text.len()));
        for (start, end) in ranges {
            let gap = &text[pos..start.max(pos)];
            for (i, line) in gap.split_inclusive('\n').enumerate() {
                let trimmed = line.trim();
                if !trimmed.is_empty() && !trimmed.starts_with('%') {
                    let at = pos + gap.split_inclusive('\n').take(i).map(str::len).sum::<usize>();
                    let (l, c) = line_col(text, at);
                    diagnostics.push(DiagOut {
                        identifier: String::from("zoodb.fields.stray-content"),
                        severity: "error",
                        message: format!("content outside any field: `{}`", trimmed.chars().take(40).collect::<String>()),
                        origin: fragment.tree().root().span().source().origin().canonical_path().map(str::to_owned),
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

    /// Runs the scan over `handles` as one document; `standalone` names the
    /// handles parsed from standalone fields, which the check stage of Q5
    /// verifies.
    /// Renders the given fragments as one document with the
    /// `latex-recomposed` workflow (Q12): the handbook composes the LaTeX
    /// around the per-tree texts.
    pub fn render_latex(&mut self, handles: &[u32], options: &LatexOptions) -> Result<LatexOut, String> {
        let key = format!("latex:{}:{}:{}", options.unresolved_refs_warning, options.drop_comments, options.raw_label_types.join(","));
        let settings_render_options = self.render_options.clone();
        let plan = self.plan(key, |registry| {
            let latex_options = LatexRecomposedRenderOptions { drop_comments: options.drop_comments, ..Default::default() };
            let recompose = RefsRecomposeOptions {
                safe_label_types: options.raw_label_types.iter().map(|t| (t.clone(), SafeLabelMode::Raw)).collect(),
                ..Default::default()
            };
            let refs_options = RefsRenderOptions {
                unresolved: if options.unresolved_refs_warning { UnresolvedRefs::Allow } else { UnresolvedRefs::Error },
            };
            let mut render_options = settings_render_options;
            render_options.merge_from(&OptionValues::new().with(latex_options).with(recompose).with(refs_options));
            let mut unsupported = BTreeMap::new();
            unsupported.insert(BackendName::from(latex_recomposed::BACKEND), vec![ElementName::from(FIELD_ELEMENT)]);
            let overrides = Overrides { render_options, unsupported, ..Overrides::none() };
            Plan::for_workflow(registry, latex_recomposed::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = self.place(handles)?;
        let mut run = Run::new(doc, plan, self.externals()).map_err(|e| e.to_string())?;
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

    pub fn scan(&mut self, handles: &[u32], standalone: &[u32]) -> Result<ScanOut, String> {
        // A bare plan request (no workflow, so no `flm.validated`): the scan
        // demands the tables it reads and nothing else, so that no citation is
        // retrieved, no image is resolved and no output is produced (R13).
        // Images are listed from the element index (Q7), not from
        // `flm.graphics.info`, whose stage would ask the resolver.
        let plan = self.plan(String::from("scan"), |registry| {
            let request = PlanRequest {
                demands: vec![
                    "flm.citations.keys".into(),
                    "flm.labels".into(),
                    "flm.refs.resolutions".into(),
                    "flm.element-index".into(),
                    STANDALONE_CHECKED.into(),
                ],
                ..PlanRequest::default()
            };
            Plan::build(registry, &request).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = self.place(handles)?;
        let standalone_trees = StandaloneTrees {
            trees: handles.iter().zip(ids.iter()).filter(|(h, _)| standalone.contains(h)).map(|(_, id)| *id).collect(),
        };
        let externals = Externals::none().install_unstamped(STANDALONE_TREES, standalone_trees);
        let mut run = Run::new(doc, plan, externals).map_err(|e| e.to_string())?;
        run.execute(&RunOptions::sequential()).map_err(|e| e.to_string())?;

        let index_of: BTreeMap<TreeId, usize> = ids.iter().enumerate().map(|(i, id)| (*id, i)).collect();
        let mut trees: Vec<ScanTreeOut> = ids.iter().map(|_| ScanTreeOut::default()).collect();
        let mut duplicate_labels = Vec::new();
        if let Some(labels) = run.table(LABELS).map_err(|e| e.to_string())? {
            for (label, point) in &labels.by_label {
                if let Some(&i) = index_of.get(&point.addr.tree) {
                    trees[i].labels.push(label.to_string());
                }
            }
            duplicate_labels.extend(labels.duplicates.iter().map(|d| d.label.to_string()));
        }
        if let Some(resolutions) = run.table(REF_RESOLUTIONS).map_err(|e| e.to_string())? {
            for (site, resolution) in &resolutions.sites {
                if let Some(&i) = index_of.get(&site.addr.tree) {
                    match resolution {
                        Resolution::Resolved { href, .. } => trees[i].refs_resolved.push(href.clone()),
                        Resolution::Unresolved { target } => trees[i].refs_unresolved.push(target.to_string()),
                    }
                }
            }
        }
        if let Some(index) = run.table(ELEMENT_INDEX).map_err(|e| e.to_string())? {
            for (i, (&h, id)) in handles.iter().zip(ids.iter()).enumerate() {
                let tree = self.fragments[h as usize].tree();
                for (_, node, _) in index.values_of::<GraphicsImage>(*id, tree) {
                    // The path as written, when it is characters (as the
                    // inspect stage and the image rules read it).
                    let Ok(Some(content)) = node.argument_content_nodes_named(PATH_ARG) else { continue };
                    let Ok(Ok(path)) = chars_at_lowering(content.iter()) else { continue };
                    let origin = node.span().source().origin().canonical_path().map(str::to_owned);
                    trees[i].graphics.push(GraphicsRefOut { path, origin });
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
        assert_eq!(scan.trees[1].labels, vec!["figure:x"]);
        assert_eq!(scan.trees[0].refs_unresolved, vec!["person:bob"]);
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
            .render_latex(&[a.handle, b.handle], &LatexOptions { raw_label_types: vec!["code".into()], drop_comments: true, unresolved_refs_warning: false })
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
}
