//! The prototype engine: flm-core driven from plain Rust, with no wasm types,
//! so that it compiles and tests natively and is wrapped by `lib.rs` for
//! WebAssembly.

use std::collections::BTreeMap;
use std::sync::Arc;

use serde::{Deserialize, Serialize};

use flm_core::core::plan::{Overrides, Plan, PlanRequest};
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
use flm_core::stdcore::features::citations::KEYS;
use flm_core::stdcore::features::graphics::INFO;
use flm_core::stdcore::features::refs::{LABELS, REF_RESOLUTIONS, RefsRenderOptions, Resolution, UnresolvedRefs};
use flm_core::stdcore::{self, StdcoreConfig};
use flm_core::techy::error::Severity;
use flm_core::techy::source::LineIndexCache;

// ---------------------------------------------------------------------------
// Configuration and outputs (all serializable: they cross to JavaScript)

#[derive(Debug, Clone, Default, Deserialize)]
pub struct EngineConfig {
    /// Whether `$…$` delimits mathematics (the EC zoo writes `\(…\)`).
    #[serde(default)]
    pub dollar_math: bool,
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

#[derive(Debug, Clone, Default, Serialize)]
pub struct ScanTreeOut {
    pub labels: Vec<String>,
    pub refs_resolved: Vec<String>,
    pub refs_unresolved: Vec<String>,
    pub graphics: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ScanOut {
    /// One entry per handle given, in the same order.
    pub trees: Vec<ScanTreeOut>,
    /// Cited keys in order of first citation, with the origin of that citation.
    pub cited: Vec<(String, Option<String>)>,
    pub duplicate_labels: Vec<String>,
    pub diagnostics: Vec<DiagOut>,
    pub has_errors: bool,
}

// ---------------------------------------------------------------------------

pub struct Engine {
    registry: Arc<FlmRegistry>,
    fragments: Vec<Arc<Fragment>>,
    plans: BTreeMap<String, Arc<Plan>>,
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
        let mut builder = RegistryBuilder::new();
        builder.use_package(stdcore::package(StdcoreConfig::new()));
        builder.use_package(flm_core::math_passthrough::package());
        let mut inputs = RegistryInputs::new();
        inputs.parsing = FlmParsing { dollar_math: config.dollar_math, ..FlmParsing::default() };
        inputs.build_identity = Some(String::from("zoodb-flm-wasm-proto 0.0.1"));
        let registry = builder.build(&inputs).map_err(|e| e.render())?;
        Ok(Engine { registry, fragments: Vec::new(), plans: BTreeMap::new() })
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

    fn place(&self, handles: &[u32]) -> Result<(Arc<Doc>, Vec<TreeId>), String> {
        let mut content = DocContent::new();
        let mut ids = Vec::with_capacity(handles.len());
        for &h in handles {
            let fragment = self.fragments.get(h as usize).ok_or_else(|| format!("unknown fragment handle {h}"))?;
            ids.push(content.place(Arc::clone(fragment)));
        }
        Ok((Arc::new(Doc::new(content)), ids))
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
        let plan = self.plan(key, |registry| {
            let mut html_options = HtmlRenderOptions::default();
            if let Some(title) = &options.title {
                html_options.title = title.clone();
            }
            let refs_options = RefsRenderOptions {
                unresolved: if options.unresolved_refs_warning { UnresolvedRefs::Allow } else { UnresolvedRefs::Error },
            };
            let overrides = Overrides {
                render_options: OptionValues::new().with(html_options).with(refs_options),
                ..Overrides::none()
            };
            Plan::for_workflow(registry, html::WORKFLOW, &overrides).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = self.place(handles)?;
        let mut run = Run::new(doc, plan, Externals::none()).map_err(|e| e.to_string())?;
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

    pub fn scan(&mut self, handles: &[u32]) -> Result<ScanOut, String> {
        // A bare plan request (no workflow, so no `flm.validated`): the scan
        // demands the tables it reads and nothing else, so that no citation is
        // retrieved and no output is produced (R13).
        let plan = self.plan(String::from("scan"), |registry| {
            let request = PlanRequest {
                demands: vec!["flm.citations.keys".into(), "flm.labels".into(), "flm.refs.resolutions".into(), "flm.graphics.info".into()],
                ..PlanRequest::default()
            };
            Plan::build(registry, &request).map_err(|e| e.to_string())
        })?;
        let (doc, ids) = self.place(handles)?;
        let mut run = Run::new(doc, plan, Externals::none()).map_err(|e| e.to_string())?;
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
        if let Some(info) = run.table(INFO).map_err(|e| e.to_string())? {
            for (addr, record) in info.iter() {
                if let Some(&i) = index_of.get(&addr.tree) {
                    trees[i].graphics.push(record.path.clone());
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
        Ok(ScanOut { trees, cited, duplicate_labels, has_errors: view.has_errors(), diagnostics: diags_out(view.iter()) })
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

        let scan = engine.scan(&[a.handle, b.handle]).unwrap();
        assert_eq!(scan.cited.len(), 1);
        let scan_ids: Vec<&str> = scan.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(!scan_ids.iter().any(|id| id.starts_with("flm.citations.")), "{scan_ids:?}");
        assert_eq!(scan.trees[1].labels, vec!["figure:x"]);
        assert_eq!(scan.trees[0].refs_unresolved, vec!["person:bob"]);
        assert_eq!(scan.trees[1].graphics, vec!["images/Smiley"]);

        let out = engine
            .render_html(&[a.handle, b.handle], &RenderOptions { unresolved_refs_warning: true, ..Default::default() })
            .unwrap();
        assert!(out.trees[0].contains("<em"), "{}", out.trees[0]);
        assert!(!out.definitions.is_empty());
        let ids: Vec<&str> = out.diagnostics.iter().map(|d| d.identifier.as_str()).collect();
        assert!(ids.contains(&"flm.refs.unresolved"), "{ids:?}");
        for d in &out.diagnostics {
            assert!(d.origin.is_some(), "{d:?}");
        }
    }
}
