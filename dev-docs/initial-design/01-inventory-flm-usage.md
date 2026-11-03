# 01 — Inventory: how FLM is used today

Survey date: 2026-10-14. Sources read: this repo (`src/zooflm/`, `src/std/`,
`src/dbprocessor/flm*.js`, `src/resourcecollector/`, `src/dbdataloader/flmfilesdb.js`),
`../zoodb-example`, `eczoo_sitegen` (docs, `eczoodb/`, `site/src`, `jscomponents/`,
`previewtool/`, `eczoohelpers/`), `eczoo_handbook/mkeczhandbook/`.

The current layer is the Python FLM library transpiled with Transcrypt
(`flm-js-src/flm-js/`), wrapped by `src/zooflm/`. Everything below is phrased in terms of
*what the zoo needs*, so that it can be re-expressed over `flm-rs`.

## 1. The three phases of FLM work in a zoo

### Phase A — compile (Node, at zoo load; also in the browser preview apps)

1. **Field compilation.** `FLMSimpleContentCompiler` walks every object against its schema
   and replaces each field whose schema has `_flm:` by a parsed fragment, in place. The
   schema value chooses the parse mode: `full` (any construct), `standalone` (must render
   outside any document: no refs, cites, floats, footnotes; used for names/titles),
   `block_level` (force paragraphs), or an object `{enabled, standalone, is_block_level}`.
   Each fragment carries `resource_info = (object_type, object_id, source_file_path)` and a
   `what` string for messages. The list of compiled fields is kept in
   `obj._zoodb.flm_fields` for the data dump.
2. **Scanning.** `ZooFLMScanner` (a node visitor) records, per fragment and per object:
   - `citations`: (prefix, key) of every `\cite`;
   - `resources`: external files a node needs (`\includegraphics` paths, relative to the
     object's source file);
   - `referenceables`: every labeled thing (`\label{sec:..}`, `topic:`, defterm terms,
     floats), with its display text and `target_id`; for a `defterm`, also the body as a
     separate fragment (used by the glossary page);
   - `references`: every `\ref`/`\hyperref` target (type, label) and where it was used.
   It supports `unregister_all_from_object()` for incremental reloads.
3. **Auxiliary processing** (`ZooFLMProcessor.process_auxiliary_resources()`), run after all
   fields are compiled (and again after ad hoc fragments are added):
   - *Object references*: one `RefInstance` per zoo object, `ref_type = object_type`,
     `ref_label = object_id`, display text from a per-type function (default: the object's
     `name` FLM text), `target_href = zoodbobjectref:/type:id` (a placeholder scheme,
     resolved to a real URL at render time);
   - *Referenceables*: one `RefInstance` per scanned label, href = object placeholder +
     `#target_id`; zoo-wide uniqueness of labels like `sec:` and `topic:` is required;
   - *Citations*: keys → `CitationDatabaseManager` (autocitefetch in wasm, JS host I/O,
     cache `citations.jsonl`) → `CitationCompiler` (citeproc-js, CSL style, a custom `flm`
     output format, cache `cache_compiled_citations.json`) → FLM text per key →
     `CitationsProvider` (a map prefix → key → FLM text or fragment);
   - *Graphics*: each resource → `ResourceCollector` (filesystem retriever: finds the file
     trying extensions `['', .svg, .png, .jpeg, .jpg]`, renames by content hash,
     optionally copies) → `FLMGraphicsResourceProcessor` (JS image inspection:
     type vector/raster, pixel size, dpi, physical size; global scale factors) →
     `GraphicsResource` registered in `graphics_collection` keyed by source path.
4. **Ad hoc fragments** compiled outside the schema: handbook intro chapters (whole `.flm`
   files), code list descriptions (`description_flm`), computed `short_name`, citation
   entries, error-message fragments. These go through the same scanner.
5. **Reload**: `prepare_zoo_update_objects` unregisters the changed objects from the
   scanner; `process_zoo_update_objects` re-runs the full `process_zoo` (not incremental).

### Phase B — render (Node for the static site and the handbook; browser for apps)

1. **Page rendering** via `make_and_render_document({zoo_flm_environment, render_doc_fn,
   doc_metadata, render_endnotes, fragment_renderer, feature_render_options,
   flm_error_policy})`. The page template is a JS callback receiving a `render_context`;
   it builds an HTML string, interleaving its own markup with
   `rdr(fragment)` (inline), `rdrblock(fragment)` (forces `<p>`), `ref(type, id)` (link to
   a zoo object showing its name), `refhref(type, id)` (URL only), `rdr(string | number |
   array)`. The callback runs *inside* one FLM document render so that across the whole
   page: footnotes are numbered and listed where `<RENDER_ENDNOTES/>` appears (heading
   "References"), citations are numbered and listed as endnotes, figures/tables are
   numbered, in-page `\ref{figure:..}` resolve. Options used by eczoo: `render_endnotes:
   {annotations: [...]}` or `false`, `feature_render_options.refs.add_external_ref_resolvers`
   (placeholders for in-document refs when a snippet is rendered alone),
   `feature_render_options.endnotes.inhibit_render_endnote_marks` (snippets),
   `feature_render_options.graphics_resource_provider.override_get_graphics_resource`
   (browser preview), `doc_metadata`.
2. **Render-time URL resolution.** `ref_resolver.target_href_resolver` maps
   `zoodbobjectref:` to a real URL through `zoo_permalinks.object(type, id)`; the handbook
   maps codes in the book to `#code_<id>` and everything else to the public site. The
   graphics `src_url_resolver_fn` maps a resource to `zoo_permalinks.graphics_resource()`
   and optionally builds a Parcel-compatible `srcset` for raster images.
3. **Standalone snippets**: `render_html_standalone(fragment)` / `render_text_standalone`
   render a standalone-mode fragment with no document (names in lists, `<title>`,
   navigation links, Cytoscape graph labels, meta tags). Very frequent (thousands of
   calls per site build).
4. **Plain text**: `ZooTextFragmentRenderer` for the search index
   (`FLMSearchableDocTextValuesAssembler` renders all searchable fields of an object
   inside one text document, citations not as endnotes) and for the first-paragraph
   "recommendations" check in the preview app.
5. **HTML stylesheet**: `html_fragmentrenderer_get_style_information()` gives
   `css_global`, `css_content`, `js`, `body_end_js_scripts`; the sites emit it as a
   `/dynamic_style/flm.css` page and include MathJax 3 themselves (typesetting only
   `.display-math`/`.inline-math`).
6. **LaTeX (handbook)**: `FLMPureLatexRecomposer` (per-ref-type safe labels; `eq:` labels
   made global per source file; heading macro mapping `subsection → codesubsection`,
   `paragraph → codeparagraph`; `\flmCite` safe labels; `emit_flm_macro` for refs;
   `emit_flm_math_environment_macro`; fvextra verbatim; `href → \flmHref`), driven by
   `flm_to_latex(fragment | nodelist | string)` = `recomposer.subrecompose(nodes)`. Hacks:
   overriding `recompose_chars` to map `[[`, `]]`, `((`, `))` in math to
   `\llbracket` etc.; suppressing comments. Style: `package_suggested_defs` of the LaTeX
   fragment renderer + `default_purelatex_defs_makeatletter`. Bibliography: CSL → BibTeX
   via the citation records (`mk_bib_viacsl.js`). Figures converted to PDF with
   Inkscape/ImageMagick from the resource collector's list. `pdfexport/` in eczoo_sitegen
   is a semi-maintained relative.
7. **Direct access to parse trees**: `code.name.nodes.nodelist[0].__class__.__name__ ===
   'LatexMathNode'` (handbook index alias when a name starts with a formula);
   `fragment.get_first_paragraph()` (preview recommendations, random-code snippet);
   `fragment.flm_text` (regex checks, short names, data dump, ref display text).
8. **Error handling**: `flm_error_policy` `abort` (throw) or `continue` (compile an error
   message as a fake standalone fragment carrying `_flm_error_info`, rendered as a
   `<pre class="flm-error-message">` box). Located errors print a nesting "traceback" with
   line/column. The browser preview apps rely on `continue`.

### Phase C — dump and reload elsewhere (browser apps)

1. `zoodb.data_dump()` turns fragments back into FLM source (default), or into a
   pre-parsed dump (`FLMDataDumper`, `flm_fragments_to_flm_dump`), or keeps instances;
   it adds `refs_data = {refs: ref_instance_database, citations: citations_database (FLM
   text per key), graphics_collection}` (with `src_url` exported through
   `export_graphics_resource_url_fn`).
2. Browser code graph (`setup_eczoodb.js`): creates an environment with
   `use_flm_processor: false`, `allow_unresolved_references: true`,
   `continue_with_errors: true`; loads `refs_data` into the ref resolver / citations
   provider; loads the DB; compiles fields on demand with `FLMSimpleContentCompiler`
   (`flm_error_policy: 'continue'`); renders info panes with `make_and_render_document`;
   renders names to text for graph labels; truncates descriptions with `truncate_to`
   (a node-level cut at about N characters with a " …" marker; also used by
   `render_codelist.js` for columns and descriptions and by the random-code generator).
3. Preview apps (`previewtool`, `gitzoopreview`, via `@phfaist/zoodbtools_preview` and
   `_previewremote`): run the *full* processor in the browser over a remote/virtual fs,
   with citation sources replaced by `CitationSourceApiPlaceholder` (looks up the
   compiled-citations cache, else shows a placeholder), `allow_unresolved_citations`,
   `installZooFlmEnvironmentLinksAndGraphicsHandlers` (makes links/graphics work in the
   preview; code not accessible here, lives in zoodbtools).
4. Search widget (`@phfaist/zoodbtools_search`): client-side Lunr over the text index;
   snippets typeset with MathJax.

## 2. Features and configuration enabled today (`zooflm_default_environment_options`)

| feature | configuration in use |
|---|---|
| baseformatting | `\emph` `\textbf` `\textit`, literal chars, `\\`, unicode |
| href | `\href` `\url` `\email`; `target="_blank"` for external URLs (`ZooHtmlFragmentRenderer.use_link_target_blank`) |
| verbatim | `\verbcode`, `verbatimtext`, used also for error messages and citation placeholders |
| math | `\(..\)`, `\[..\]`, `align`/`gather`/`equation`/`split`, `\label{eq:}`, `\eqref`; MathJax in the browser; optional `dollar_inline_math_mode` |
| enumeration | `itemize` (bullets `• - ▸`), `enumerate`, `description` (`\item[label]`) |
| headings | level 2 `\section`, 3 `\subsection`, 4 `\paragraph` (inline/run-in); handbook adds level 0 `\part`; headings carry `\label{sec:}`/`topic:` |
| refs | `\ref{code:id}`, `\hyperref[code:id]{text}`, `\ref{sec:..}`, `\ref{figure:..}`, `\ref{topic:..}`; ref types = object types + `sec`, `topic`, `term`/defterm, float types, `eq`; resolvers: zoo `RefResolver`, optional "allow unresolved" (`<??>`), per-render placeholder resolvers |
| endnotes | one category `footnote` (alph counter, heading "Footnotes"); citations rendered as endnotes with heading "References" |
| citations | `FeatureExternalPrefixedCitations`: `\cite{arxiv:..,doi:..,manual:{..},preset:..,qecdborg:..}`, arabic numbers in `[ ]`, sort and compress, optional text `\cite[note]{}` |
| floats | `figure` (includegraphics), `table` (cells or includegraphics), Roman numerals, `\caption`, `\label{figure:..}` |
| defterm | `\begin{defterm}{Term}..\end{defterm}`, `\term{Term}`, `\term[Term]{shown}`, rendered with "Term: " prefix |
| graphics_collection | zoo-specific feature: resolves `\includegraphics` paths through the collection; `src_url_resolver_fn`; render-time override |
| cells (custom) | `\begin{cells} \celldata.. \cell.. \end{cells}` (handbook; site enables via `quote`/`cells` custom features) |
| quote (custom) | `quote`/`blockquote` (eczoo full options) |
| annotations | `\phf{..}`/`\vva{..}` in the handbook's intro chapters under the Python CLI preview config (`content/flmconfig.yaml`); not configured in `mkeczhandbook/main.js` — check whether the intro `.flm` files use them |
| not used | theorems, markup (text macros / semantic environments), substmacros, numbering (beyond defaults), markdown renderer |

Parsing options passed through `environment_options.parsing` (e.g. `dollar_inline_math_mode`,
`enable_comments`, `comment_start`, `extra_forbidden_characters`, `force_block_level`) and
`flm_environment_options` (`tolerant_parsing`, `parsing_mode_deltas`).

## 3. Data flowing around the FLM layer (what must survive the redesign)

- per fragment: source text, origin (object type, id, file path, field), layout mode,
  standalone-ness, parse diagnostics;
- zoo-wide: the set of labels defined (with display content and anchor), the set of
  references made (for "referenced in" lists and validation), cited keys (for retrieval,
  the `/references` page, BibTeX/CSL exports, `EczBibReferencesCollector`), images used;
- per output context: how an object's URL is written (site, handbook, preview), how an
  image's URL is written (plus srcset), which pieces to place (footnotes, bibliography);
- the HTML stylesheet/script requirements of the rendered content;
- the data dump for browser apps.

## 4. Public API surface that downstream code imports today

From `@phfaist/zoodb/zooflm`: `$$kw`, `repr`, `__class__`, `__super__`, `__get__`,
`isinstance`, `ZooFLMResourceInfo`, `ZooFLMEnvironment`, `zooflm_default_environment_options`,
`is_flm_fragment`, `RefResolver`, `CitationsProvider`, `FeatureZooGraphicsCollection`,
`RefInstance`, `ReferenceableInfo`, `SectionCommandInfo`, `EndnoteCategory`, `FloatType`,
`GraphicsResource`, `FLMDataDumper`, `FLMDataLoader`, `ZooHtmlFragmentRenderer`,
`ZooTextFragmentRenderer`, `html_fragmentrenderer_get_style_information`,
`render_html_standalone`, `render_text_standalone`, `render_value`, `value_not_empty`,
`make_render_shorthands`, `make_and_render_document`, `fn_unique_object_id`,
`is_pylatexenc_located_error`, `format_pylatexenc_located_error[_traceback]`, the raw
python modules (`flm_feature_*`, `pylatexenc_*`). From `@phfaist/zoodb/flm-js/*`: the
recomposer and LaTeX renderer (handbook). From `dbprocessor/flmsimplecontent`:
`FLMSimpleContentCompiler`. From `std/*`: `use_flm_environment`, `use_flm_processor`.

Downstream consumers: `zoodb-example`, `eczoo_sitegen` (eczoodb, site, jscomponents,
previewtool, scripts, eczoohelpers, pdfexport), `eczoo_handbook`, and the
`@phfaist/zoodbtools_*` packages (search, preview, previewremote, gitpreview; not read).
