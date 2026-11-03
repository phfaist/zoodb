# 02 — Mapping the current FLM layer onto flm-rs

flm-rs facts that shape everything (from `docs/ai-guide*.md`, 2026-10-13 state):

- `flm-core` does no I/O and never panics on content; the caller hands in text and reads
  values back. Registry (features, services, settings) is built once; plans are pure
  values of registry + demands; a *run* executes one plan over one *document*.
- A document is an ordered set of placed *fragments* (each one parse, shared by `Arc`,
  reusable across documents) plus document option values. Nothing a stage computes lives
  in the document: results are typed *tables* in the run's store.
- Hosts feed data in through *external tables* (installed per run; e.g.
  `flm.refs.external-index`: references to other documents are resolved from data, not
  through a callback) and through *services* (host code contributed at registry build
  and **called during the run** with what the document contains: the
  `flm.citations.retrieve` stage hands the cited keys to the citation providers, the
  `flm.graphics.inspect` stage hands each image path to the resolver and inspector, the
  publish stage asks the artifact namer). The `flm` program fetches citation records
  over the network and reads image files *inside* the run this way.
- In a wasm + JavaScript host, a service call is a synchronous Rust call. It may call JS
  synchronously; it cannot wait for a JS Promise. So each service is backed by a
  synchronous host facility (Node `readFileSync`, an in-memory cache), by a
  sync-over-async relay (a worker thread + `Atomics.wait`), or by data gathered outside
  the run (cache hit, else fetch and run again). flm-rs itself imposes no prefetch.
- Backends: `text`, `html`, `latex-rendered` (LuaLaTeX, resolved), `latex-recomposed`
  (author's LaTeX back, hooks). HTML gives per-tree HTML (`flm.output.html`), the
  pieces (footnote list, bibliography) and the style/script definitions the content
  needs, so a host composes its own page.
- WebAssembly: `flm-core --no-default-features` (sequential) and `flm-main` without `fs`
  build for `wasm32-unknown-unknown`. The recursion guard assumes a 64 MiB worker stack.
- Extensions: `data` engine (settings, userdefs, workflows, compose templates) and `js`
  engine (QuickJS inside a native host; off by default, not for wasm).

## Concept map

| today (zoodb/zooflm over python-FLM) | flm-rs |
|---|---|
| `ZooFLMEnvironment(environment_options)` | `RegistryBuilder` + `stdcore::package(StdcoreConfig)` or `stdcore::factory()` with settings as data; `RegistryInputs.parsing` for `$`-math, comments; zoo services contributed to slots |
| `make_fragment(text, {standalone_mode, is_block_level, resource_info, what})` | `parse_fragment(lang, FlmSource(text).with_origin(FlmOrigin(path#field)), FragmentLayout::{Blocks,Inline,Auto}, ParseOptions)` → `Arc<Fragment>`. *Standalone* has no counterpart: it is a property to check (does the tree use refs/cites/floats/xnotes), not a parse mode |
| `FLMDocument(render_doc_fn)`, `render_context`, feature document/render managers | `Doc::with_options(DocContent{placed fragments}, DocMeta, NumberingOptions)` + `Run::new(doc, plan, externals).execute()`; render options on the plan (`HtmlRenderOptions`, `TextRenderOptions`, `RefsRenderOptions`, `PiecesRenderOptions`, …) |
| `ZooFLMScanner` (citations, resources, referenceables, references) | tables of a run: `flm.citations.keys` (keys in order of first citation), `flm.refpoints` + `flm.labels` + `flm.anchors` (every labeled point: label, `PointDisplay{number, content}`, anchor), `flm.refs.resolutions`/`flm.refs.targets` (each reference site and what it resolved to), `flm.graphics.info` (each image), `flm.element-index` (nodes by element, e.g. every `flm.defterm`). Tree ids map back to (object, field) in the host |
| `RefResolver` + `RefInstance` + `zoodbobjectref:` + `target_href_resolver` | external table `flm.refs.external-index`: `Label → ExternalTarget{href: String, display: Arc<NodeTree>}`; hrefs are final strings, so the index is built per output context before the run (cheap: a map) |
| referenceable registration (labels of other objects) | the same external index, filled from the zoo-wide `flm.labels`/`flm.anchors` + object permalink + anchor |
| `CitationsProvider` (prefix → key → FLM text) | a `CitationProvider` service (Rust, in the binding) answering from a key → FLM-source map the host fills; `ProviderCx::parse_entry` / `build_entry`; `with_identity` merges spellings |
| `CitationDatabaseManager` + `CitationCompiler` (citeproc-js) | either kept as is (host prefetch + format, feeding the provider), or `flm-main`'s `citations-standard` (autocitefetch + hayagriva, host `Fetcher` + cache folder) compiled into the wasm |
| `graphics_collection` + `ResourceCollector` + `_inspectimagefile.js` + `src_url_resolver_fn` | services `flm.graphics.resolver` (path → `ImageFile{identity, media type, address}` + content), `flm.graphics.inspector` (→ size/dpi), `flm.graphics.converters`; `GraphicsRenderOptions` per output: `reference` / `copy` / `data-uri`; `ArtifactNamer` gives copied files their paths; `flm-main` has file-based implementations under its `graphics` feature |
| `ZooHtmlFragmentRenderer`, `html_fragmentrenderer_get_style_information` | `html` backend; `flm.output.html` (per-tree HTML + `requires`), `flm.output.html.pieces`, `flm.html.definitions` (styles/scripts with delivery), `HtmlRenderOptions{definitions, required_definitions, heading_tags, root_heading_level, source_spans}`; MathJax 4 definition |
| `ZooTextFragmentRenderer` | `text` backend, `TextRenderOptions{width: None, link_addresses: false}`; `flm.output.text` has text + position marks |
| `FLMPureLatexRecomposer` + `LatexFragmentRenderer` style info | `latex-recomposed` backend (raw tree, safe labels `ref1…`, hooks `\flmHeading`, `\flmRef`, `\flmCite`, style file with unicode declarations, `LatexRecomposedRenderOptions`, `HeadingsLatexOptions`, `MathRecomposeOptions`, `RefsRecomposeOptions`) — or `latex-rendered` (resolved, LuaLaTeX, `\flmx…` contract, template redefines by role) |
| `render_html_standalone(name)` ×1000s | one run per snippet, or many snippets placed in one document and read back per tree; results cached by fragment identity |
| `rdrblock(x)` | parse with `FragmentLayout::Blocks` (a fragment carries its layout) |
| `<RENDER_ENDNOTES/>` + `render_endnotes` options | pieces `flm.xnotes.list.footnote`, `flm.citations.bibliography`; `PiecesRenderOptions{include, exclude}`; host places the piece HTML |
| `feature_render_options.refs.add_external_ref_resolvers` placeholders | `RefsRenderOptions{unresolved: Warning}` + the backend's "unresolved" markup; or install a placeholder external index |
| `allow_unresolved_references` (`<??>`) | `RefsRenderOptions::unresolved = Warning` (shown as the label text, marked unresolved, never a link) |
| `allow_unresolved_citations` | diagnostics `flm.citations.no-entry`; the entry line shows "missing"; host decides what is an error |
| `FLMDataDumper`/`FLMDataLoader` | `dump::session` (lossless wire form, readable back) — or simply FLM source re-parsed in the browser |
| `is_pylatexenc_located_error`, traceback formatter | `FlmDiagnostic{severity, span, identifier, data}`; `DiagnosticsView::render_all`; match identifiers, never text |
| `_flm_error_info` fake fragments | the run still produces output with errors; backend marks error spans; host reads diagnostics |
| `fragment.get_first_paragraph()`, `nodes.nodelist[0]` | walk the frozen (structured) tree; `dump::project` gives a JSON projection; a binding helper can return the first block's source span |
| `fragment.flm_text` | `Fragment::source` |
| `FlmFilesDbDataLoader` `\begin{field}{name}` verbatim environments | a small Rust element (verbatim environment with one argument) in the binding's zoo feature, or a hand-written JS parser |
| `custom_features: [FeatureQuote(), FeatureCells()]` | stdcore features `quote`, `cells` (`CellsConfig.global`), switched on in config |
| `heading_section_commands_by_level` {2: section, 3: subsection, 4: paragraph(inline)} | `HeadingsConfig` kinds/commands/run-in levels + `HtmlRenderOptions.root_heading_level`/`heading_tags` |
| `endnote_categories` (footnote, alph) | `XnotesConfig` kinds + counter style via `NumberingConfig` |
| `float_types` (Roman) | `FloatsConfig` + counter styles |
| `defterm_options` (": ") | `DeftermConfig` lead-in template `#{term}: ` |
| `citation_counter_formatter`, `citation_delimiters`, endnotes | `CitationsConfig{placement: Listed, style, heading_title}` |
| `parsing.dollar_inline_math_mode` | `FlmParsing.dollar_math` |

## What flm-rs does not have (relevant to the zoo)

- No glossary piece: the concepts page must be built by the host from tables (as today).
- No multi-file HTML output: not needed, the host composes pages.
- No `srcset` / alternative image sources: the zoo's Parcel-based `srcset` trick has no
  hook today (an HTML attribute on `flm.pres` image nodes would be needed, or
  post-processing of the HTML).
- No image conversion other than ImageMagick (native host only); in wasm, conversion is a
  host job anyway (the handbook already runs Inkscape/magick itself).
- JavaScript extensions run in QuickJS inside a *native* host; they are not available in
  the wasm build. Zoo-specific behavior must be Rust (compiled into the binding),
  settings-as-data, or user definitions (template macros).
- The HTML contract is new (classes `flm-pres-…`, `data-flm-…` attributes, MathJax 4):
  site stylesheets written for the Python renderer do not apply.
- `standalone` parse mode: no counterpart; see Q5.
