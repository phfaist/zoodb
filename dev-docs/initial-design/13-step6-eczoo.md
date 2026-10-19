# 13 — Step 6: the Error Correction Zoo on zoodb 0.3.0

Build order step 6 of `06-repo-change-map.md` (section M; section K lists what the EC zoo
needs that `zoodb-example` does not): the port of `eczoo_sitegen`, `eczoo_data` and
`eczoo_handbook` to the package as it stands after step 5 (`e8f7c00`, version 0.3.0) and
its flm-rs engine. Draft written 2026-10-17 from a read-only survey of the three
repositories (below) and the findings of steps 0 to 5. The parts are implemented by Opus
implementer agents, one part per agent, and checked by Opus reviewer agents; results at
the end.

**Working decisions of the main session, to be confirmed by Philippe** (they follow his
ruling of 2026-10-17 for the `zoodb-example` port, 11 C):

1. The ports are made in clones under `scratch/eczoo/` of the worktree
   (`eczoo_sitegen/`, `eczoo_data/`, `eczoo_handbook/`), cloned from the local read-only
   checkouts so that their local state is kept, each on a branch `zoodb-flmrs` made from
   its `main`, committed there by the agents with the two trailers (below), never pushed.
   `scratch/.gitignore` gains `eczoo/`. The originals are never touched.
2. The sitegen clone and the handbook clone depend on zoodb through the packed tarball
   of the worktree (11, Results, Part C), and the handbook on the sitegen through packed
   tarballs of the sitegen clone's workspaces; the clones' `package.json` and lock files
   are restored to their committed form (the git URLs) before anything is committed, as
   in the example's port.
3. The clones are siblings, so the site and the handbook find the data clone by their
   own default (`../eczoo_data` from the checkout's root; no setting).
4. Six parts in build order, each dimensioned for one Opus agent under about 500k tokens
   of context: A (the data), B1 (the zoo and its pages), B2 (presentation, exports,
   scripts, tests, dev mode), C (the browser apps and the first builds with Parcel), D
   (the handbook), E (the full build check of the site); B1 needs A, B2 needs B1, C needs
   B2, D and E need C. A candidate part 0 (package additions in this repository) is
   decided before B1: proposed by the main session, confirmed by Philippe (section "Gaps
   of the package", question 4).
5. The citation caches of the sitegen checkout are copied into the clone as they are;
   the builds must not reach the network beyond what the caches miss.

**Rules.** The rules of 08 ("Rules that bind the implementation") and of `HANDOVER.md`
apply unchanged, and for this step:

- Agents work in the worktree and in the clones only; absolute paths in every command.
  In this repository agents never commit; in the clones they commit on `zoodb-flmrs`,
  never push, never change another branch. No `git stash` anywhere.
- Read-only, never edited, never built: `/Users/philippe/Research/projects/2021-qec-zoo/`
  `eczoo_sitegen`, `eczoo_data`, `eczoo_handbook` (never list the parent folder; inside
  them, reading, grepping, `git log`, `git remote -v`, `du`, and `git clone --no-local`
  from them are fine; never `yarn` or a build). The clones are made with `--no-local` so
  that no file of an original is hard-linked.
- No workaround for anything that needs a change in flm-rs or in this package: a gap is
  reported to the main session (section "Gaps of the package"), never patched around in
  a clone. Nothing moves into flm-rs.
- No sweep of the EC zoo data: every data change is listed in A's table with its reason,
  and kept minimal (a discrepancy found by a later part is fixed in the data clone by a
  separate commit and added to that table).
- Commit trailers in the clones:
  `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>` and
  `Claude-Session: https://claude.ai/code/session_014E8o5tjoMsVYDAGRKzyvwU`.
- Long outputs (build logs, greps, page dumps) go to files under the session's
  scratchpad; the Results give counts and paths, not dumps.

## The survey (2026-10-17, read-only)

### The repositories

| | `eczoo_sitegen` | `eczoo_data` | `eczoo_handbook` |
|---|---|---|---|
| branch, state | `main` at `a2ad583` (2026-09-29 "cache"), equal to `origin/main` as of the last fetch (0 ahead, 0 behind; no fetch made); tree clean; 6 other local branches | `main` at `7ade20a` (2026-09-29), equal to `origin/main`; clean; 3 other local branches | `main` at `c73b681` (2026-06-09), equal to `origin/main`; clean; 1 other local branch |
| remotes | `origin` `errorcorrectionzoo/eczoo_sitegen` | `origin` `errorcorrectionzoo/eczoo_data`, `fork` `phfaist/eczoo_data`, `temp-remote` `phfaist/eczoo-playground-11ty` | `origin` `errorcorrectionzoo/eczoo_handbook`, `github-phfaist` `phfaist/eczoo_handbook` |
| size | 373 tracked files; `.yarn/cache` 172 MB (1,183 archives), `node_modules` 741 MB | 1,332 tracked files, 12 MB; `.git` 60 MB | 83 tracked files; `.yarn/cache` 49 MB |
| tooling | Yarn 3.3.0 (`packageManager`), `nodeLinker: node-modules`, 9 workspaces; Eleventy 3, Parcel 2.13, React 18, Cytoscape, Puppeteer 24.4 (Chrome 134 cached in `~/.cache/puppeteer`); CI: the `eczoodb` tests on Node 22 and 23 | YAML only; CI workflows (`build-and-deploy-site`, `devsite-build-and-deploy`, `quick-test-compile-zoo`) clone the sitegen's `main` and build the site | Yarn 4.6.0, `nodeLinker: node-modules`, 1 workspace `mkeczhandbook`; latexmk, Inkscape, ImageMagick (all present on this machine) |
| zoodb pin | `@phfaist/zoodb` by git URL `https://github.com/phfaist/zoodb.git` in 5 workspaces (`site`, `eczoodb` devDependencies, `pdfexport`, `previewtool`, `scripts`), `peerDependencies: "*"` in 5; the lock resolves 0.2.1 at `bb94f3e`, the commit `zoodb-flmrs` branches from; `@phfaist/zoodbtools_*` 0.1.0 at `93022a9` (peer dependency on zoodb) | — | zoodb 0.1.1 at `012ebed` (2026-06-02, 17 commits before `bb94f3e`, before the citation crate); the sitegen workspaces `eczoodb`, `eczoohelpers_eczcollectbib`, `jscomponents`, `_zoodb_citations_cache` by git URL (`#workspace=`) at `6bbebab` (20 commits behind the sitegen's `main`) |
| how the data is found | `site/eleventy.config.js`: `path.resolve(site, '..', '..', 'eczoo_data')`, or `eczoodb/test_data` with `ECZOO_USE_TEST_DATA=1`; `scripts/_helpers/helperEcZooLoader.js` the same sibling | — | `mkeczhandbook/main.js`: `--data-dir`, default the sibling `../eczoo_data`; `build-test` uses the installed eczoodb's `test_data` |

Counts, greps and lists of the survey: `/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/survey/`.

### Inventory: `eczoo_sitegen`

23 files import `@phfaist/zoodb/zooflm` (statically or with `await import`; 3 more in
commented-out lines only), 3 import a module of the deleted `flm-js` (`generatebibtex.js`,
`scripts/bibrefs/collectBibRefs.js`, `pdfexport/gen_latex.js`); about 40 files touch the
old FLM API in all (list: `survey/sitegen_flm_touching.txt`). Tally of the old calls:
`make_and_render_document` 11 (11 files), `make_render_shorthands` 12 (9),
`<RENDER_ENDNOTES/>` 6, `render_text_standalone` 8 (7), `.render_standalone(renderer)`
11 (9), `.flm_text` 25 (11), `get_first_paragraph()` 5 (4), `truncate_to()` 5 (3),
`scanner.get_encountered…` 6 (5), `RefInstance` 3, `add_external_ref_resolvers` 5,
`make_fragment` 5, `zoo_flm_environment` 65 (22 files).

| file(s) | what it uses today | what it becomes | part |
|---|---|---|---|
| `eczoodb/eczoodb.js` (1,076 lines) | `use_flm_environment`; `flm_options.environment_options: null`; the refs display functions return `code.name.flm_text` (a comment says: until the JSON serialization of `RefInstance` is fixed); the computed `short_name` makes a fragment through `zoo_flm_environment.make_fragment(…, $$kw({ standalone_mode }))`; messages with `.flm_text` | `use_flm_engine`; `environment_options` removed (the setup refuses it); the display functions return the fragment (`code.name`, `codelist.title`); `zoo_flm_engine.make_fragment(text, { origin, layout: 'inline', standalone: true })`; `.source` | B1 |
| `eczoodb/fullopts.js` (75) | `use_flm_environment`; `environment_options.custom_features: [FeatureQuote]` | `use_flm_engine`; nothing for the quote (stdcore's `quote` feature, 07 milestone 4); `flm_options.load_wasm: load_zoodb_flm_wasm_node` here (the Node-only option set), not in `eczoodb.js` (shared with the browser) | B1 |
| page renderers `eczoodb/render_code.js` (428), `render_codelist.js` (297), `render_domain.js` (117), `render_kingdom.js` (115) | `make_and_render_document({ render_doc_fn, render_endnotes: { annotations } })`, `make_render_shorthands`, `<RENDER_ENDNOTES/>`, `docrefs_placeholder_ref_resolver`, `get_first_paragraph()`, `truncate_to()`; `render_codelist` makes an ad hoc fragment per page (`heading + ': ' + description_flm`) | `engine.render_document({ compose })` with the same helpers, `endnotes()`; `engine.truncate(f, { first_paragraph, chars })` (a new fragment, released when done); the ad hoc fragment compiled once per code list (`compile_flm_fragment` at load, or made and released per page) | B1 |
| `eczoodb/render_code_hierarchy.js` (433), `compile_codelist.js` (560), `stats.js` (287) | `render_text_standalone`, a text renderer's `render_standalone`, `.flm_text` | `snippet(f, 'text')` for standalone fragments, `render_text([f])` for the others, `.source` | B1 |
| `eczoodb/render_utils.js` (59) | `docrefs_placeholder_ref_resolver` (`RefInstance`, `$$kw`): a reference to a figure or equation of another page shows `[figure]` | removed: labels are zoo-wide and resolve through the index (an anchor only when label-derived); what stays unresolved follows the engine's `unresolved` setting | B1 |
| site pages `site/src/c/c.11ty.js` (392), `index.11ty.js` (268), `lists.11ty.js`, `list/`, `domain/`, `kingdom/`, `fig/fig.11ty.js`, `templates/layout/base_page.11ty.js` (395) | snippets (titles, navigation, names), the code page through `render_code_page`, the meta description through a text-renderer document of the first paragraph, `code.name.flm_text` in the BibTeX snippet; `fig/` paginates `zoo_flm_processor.resource_collector.collected_resources.graphics_path` | snippets; `render_document`; `render_text` of the truncated first paragraph; `.source`; `fig/` unchanged (the example's `pic/` works the same way) | B1 |
| `site/src/concepts.11ty.js` (141), the glossary | `scanner.get_encountered('referenceables')` filtered on `defterm_body_flm`, `get_encountered_references_to_labels`, `refsmgr.get_ref` | `processor.scan_results` (labels with anchor and display, refs per object for "Referenced in"), `ref()`; the defterm bodies are gap G1 | B1 |
| `site/src/references.11ty.js` (83), `site/sitelib/prepare_eczoo_bibreferences.js`, `eczoohelpers/eczcollectbib/collectbib.js` (757) | `scanner.get_encountered('citations')` with every citing object (the backrefs of `/references`), `citation_manager`, `citation_compiler`, `options.citations.cache_dir` | `scan_results.cited` and `object_scan()`; the citing objects are gap G2 | B2 |
| `eczoohelpers/eczcollectbib/generatebibtex.js` (1,141) | `get_builtin_uni2latex_dict` of `flm-js` (pylatexenc's Unicode→LaTeX table, read at module load: the site's `dat/bibreferences.bib` page imports it), `make_fragment` + the recomposer for ready-formatted citations | `render_latex` of ad hoc fragments; the table is gap G4 | B2 |
| `jscomponents/randomcode/generate_data.js` (91, run at build time) | a subclass of `ZooHtmlFragmentRenderer` that drops floats, `inhibit_render_endnote_marks`, the placeholder resolver, `get_first_paragraph()` + `truncate_to(500)` | `truncate` + `render_document`; marks and floats in previews are gap G3 | B2 |
| `jscomponents/search/generate_index.js` (36), `site/src/dat/searchindex.11ty.js` | `@phfaist/zoodbtools_search` over the searchable-text fieldset; the FLM calls are commented out | unchanged; the texts come from the engine (compare) | B2 |
| `site/src/dat/eczoodata.11ty.js`, `site/eleventy.config.js` | `eczoodb.data_dump({})`, cached for the dump page and the headless exporter; the global data reloads with `load_or_reload_eczoodb()` (one zoo kept across rebuilds) | unchanged calls; the dump holds `zooflm` (`refs_data` is gone) | B2 |
| stylesheets: `site/stylesheets/flm-formatting.scss` (427 lines, about 50 old-class selectors: `.p-block`, `.paragraph-in-list`, `.enumeration`, `.heading-level-N`, `table.cells` and `.cellstyle-*`, `.verbatimcode`, `figure.float`, `.defterm`, `.display-math`, `.citation-marks`, `.quote…`), 6 more SCSS files with 1–7 such selectors (`genericpage`, `ecc-code-page`, `codelist-page`, `tiles-persons`, `variables`, `def-fixbaseline-superscript-text`), `jscomponents/codegraph/CodeGraphInformationPane_style.scss` | the site emits no FLM stylesheet: its own SCSS styles the old classes | the engine's `html_stylesheet()` delivered as a page that Parcel bundles (as the example's `dynamic_style/flm.css.11ty.js`); the EC zoo's own look re-expressed on the new HTML contract (classes `flm-pres-*`, attributes `data-flm-*`; flm-rs `docs/python-flm-migration.md`, "The HTML output", maps the old classes) | B2 |
| `jscomponents/mathjax/setup.js` (50), awaited by all 8 `site/jsc_profiles/*.js` | MathJax 3.2.0 from cdnjs, `pageReady` typesets `.display-math, .inline-math` only (the gap found in step 4's review) | `engine.html_scripts()` in the layout's `<head>` (MathJax 4 configured for `.flm-pres-math--passthrough`); `load()` waits for MathJax's startup instead of loading MathJax 3 | B2 |
| `jscomponents/codegraph/`: `setup_eczoodb.js` (71), `CodeGraphInformationPane.jsx` (499), `eczcodegraph.js` (1,246), `_headless_exporter_browser_code.js`; the committed bundle `codegraph/_headless_exporter_browser_code_dist/` (built by `yarn build` in `jscomponents`, the old FLM inside; run in Puppeteer, served by `sirv`, during the production build) | `use_flm_environment` with `use_flm_processor: false`; `refs_data` loaded into the ref resolver and the citations provider; `FLMSimpleContentCompiler` over the environment (`'continue'`); a `RefInstance` resolver that turns links to captured object types into `jsCallbackRef:TYPE/ID`; `truncate_to(700)`; the composer; `render_text_standalone` for graph labels; `MathJax.typesetPromise([node])` | level 1: `ZooFlmEngine.create({ core })` (the neutral loader; Parcel serves the `.wasm`), `engine.load(data.zooflm)`, the field compiler, a second index context with the `jsCallbackRef:` hrefs through `set_index(…, { context })`, `render_document({ context })`, snippets, `truncate`; the bundle rebuilt and committed | C |
| `jscomponents/gitzoopreview/` (`appSetup.jsx` 226, `renderObject.js` 293), `previewtool/` (`previewApp.jsx` 211, `runPreview.js`) | the full processor in the browser (level 2) over a virtual file system through `@phfaist/zoodbtools_preview` (its `renderFlm.js` uses the old API 14 times: `make_and_render_document`, `ZooHtmlFragmentRenderer`, `graphics_collection.src_url_resolver_fn`, `ref_resolver.target_href_resolver`), `refs_data.citations` | needs `zoodbtools` ported: gap G5 | C (status only) |
| `jscomponents/search/setup.js`, `popuptippy/`, `linkanchorvisualhighlight/`, `editcodelegacy/` | no FLM API; the search widget calls `MathJax.typesetPromise()` on its results | checked under the MathJax 4 configuration | C |
| scripts: `scripts/zooStats.js`, `query_bib_references.js`, `bibrefs/collectBibRefs.js` (`flm-js` LaTeX renderer and recomposer), `llm/gen_inputs_v1.js`, `_helpers/helperEcZooLoader.js`, `eczoodb/scripts/try_load_zoo.js` | the scanner, `.flm_text`, `flm-js`, `flm_options` | `scan_results`, `.source`, `render_latex`; not part of the site build | B2 |
| `pdfexport/` (semi-maintained per the repository's docs) | `flm-js` LaTeX renderer, the old composer | not ported (question for Philippe) | — |
| tests: `eczoodb/test/` (6 files, 75 `it`), `eczoohelpers/eczcollectbib/test/` (14 `it`) | `test_render_code.js` passes `zoo_flm_environment`; `test_eczoodb.js` reads `short_name.flm_text` | adapted; green | B2 |
| citation caches | `_zoodb_citations_cache/` (tracked: `citations.jsonl` 7,005 lines, 3,306 `arxiv`, 3,568 `doi`, 130 `preset`; `cache_compiled_citations.json` 2.2 MB; the legacy `cache_downloaded_info.json` 13 MB, no longer read; `_anystyle_manual_citations_cache.json` 0.75 MB); `_TEST_zoodb_citations_cache/` (ignored; 56 `doi` entries, fresh until 2027-02) | copied as they are (section "The citation caches") | setup |
| the last build | `site/_site/` of the read-only checkout (118 MB, 2026-09-29 12:35: 1,277 HTML pages, 1,155 code pages, 86 lists, 89 graph SVGs; `dat/eczoodata.json` 5.6 MB, `searchindex.json` 4.4 MB, `bibreferences.bib` 2.0 MB): built from `main` at `a2ad583` with zoodb `bb94f3e` and the data's present content (the only data commits since, `2a258edc6` and `7ade20a2f`, change CI workflows) | the baseline of E's comparison, read in place | E |

### Inventory: `eczoo_handbook`

6 of the 9 files of `mkeczhandbook/` (3,141 lines) import zoodb, each of them
`@phfaist/zoodb/zooflm` (`$$kw`, `ZooFLMResourceInfo`, `SectionCommandInfo`,
`flm_feature_cells`, `flm_feature_quote`, `render_text_standalone`, `value_not_empty`,
`is_flm_fragment`, `get_zooflm_error_string`); `main.js` imports two `flm-js` modules
(the pure-LaTeX recomposer and the LaTeX fragment renderer).

| file(s) | what it uses today | what it becomes |
|---|---|---|
| `mkeczhandbook/main.js` (958) | the zoo with `environment_options` (heading commands by level: 0 `\part`, 2 `\section`, 3 `\subsection`, 4 `\paragraph` run-in; `FeatureCells`, `FeatureQuote`), `zoo_permalinks` mapping the handbook's codes to `#code_<id>` and the rest to the public site, figures renamed to `fig-<hash>.pdf`; the intro chapters through `zoo_flm_processor.compile_flm_fragment()` + `process_auxiliary_resources()`; `flm_to_latex()` = the recomposer's `subrecompose()` per fragment, with patches: `[[`, `]]`, `((`, `))` in math → `\llbracket` etc., comments replaced by `%-`; `safe_label_ref_types` (object types, `eq` made global per source file); headings mapped (`subsection` → `\codesubsection`, `paragraph` → `\codeparagraph`); `\flmHref`, `\flmUrl`; fvextra; writes `flmlatexdefaults.sty` from the old renderer's definitions | the engine's settings for what flm-rs's defaults do not give (the headings' levels, if needed); `compile_flm_fragment()` kept; one `render_latex()` run over every fragment the handbook places, composed around markers (Q12 (A), 07 milestone 5; the prototype runner `scratch/proto/js/handbook_example.mjs` of the worktree does it on the test data), `raw_label_types` the object types, `drop_comments: true`; the run's style file `flmrecomposed.<hash>.sty` replaces `flmlatexdefaults.sty`; the ligatures in math stay the handbook's (07: mathematics passes through byte for byte) |
| `genltx_code.js` (183), `genltx_domains_kingdoms.js` (413), `genltx_handbook.js` (507), `genltx_notable_families.js` (575), `genltx_user.js` (11) | `flm_to_latex()` about 50 times, `get_first_paragraph()`, `render_text_standalone`, parse-tree access (`code.name.nodes.nodelist[0].__class__.__name__ === 'LatexMathNode'`: an index alias when a name starts with a formula), `recomposer.make_safe_label('ref', 'sec', 'IntroTaxonomy')` | markers into the run; `truncate`; snippets; a test on the source instead of the tree; a reference from the handbook's own LaTeX goes through a fragment placed in the run (safe labels exist only inside a run) |
| `mk_bib.js` (435), `mk_bib_viacsl.js` (24) | `make_fragment` + `subrecompose` for ready-formatted citations, `recomposer.make_safe_label('cite', …)` for the BibTeX keys, `get_zooflm_error_string` | the citation keys the run writes in its hooks (07: `\flmCite{arXiv:…}`), `render_latex` of the citation texts |
| `latexstyle/eczhandbook.dtx` and friends (29 files) | about 30 distinct `\flm…` hooks of the old recomposer (`\flmHref`, `\flmUrl`, `\flmMathEnvironment…`, `\flmFloat`, `\flmRefsHyperref`, `\flmDisplayTerm`, `\flmCells…`, …) | the hooks of flm-rs's `latex-recomposed` output (its style file defines the defaults; the handbook's class overrides what it styles) |
| `content/` (11 `.flm` files, 1,045 lines; 6 in `main.json`) | about 180 `%%` comment lines, 3 `\includegraphics` (all in floats), 1 `cells`; `\phf`/`\vva` only in `Methods.flm`, which `main.json` does not list | parsed by the engine; comments dropped in the LaTeX |
| `mkeczhandbook/_testrepo_zoodb_citations_cache/` | the legacy `cache_downloaded_info.json` and the compiled cache only, no `citations.jsonl` (the lock's zoodb predates the citation crate) | `zoodb-migrate-citations-cache` on the clone's copy, or the sitegen clone's test cache (D decides; no network for what a cache holds) |

### The data: what the switch meets

Counted by grep on the read-only `eczoo_data` (lines that are YAML comments left out),
except the first row (step 4's tool on a copy, 11).

| item | found | action |
|---|---|---|
| quoted values continued at the key's column (refused by the strict loader) | 127 files, 191 values (of 1,250 YAML files outside `.github/`) | `zoodb-reindent-yaml` (A) |
| labels written twice | `eq:parity` in 3 files: `codes/quantum/qubits/stabilizer/qubit_css.yml` (with an `\eqref` there), `qubits/subsystem/qubit_subsystem_css.yml`, `qudits/subsystem/qudit_subsystem_css.yml` (neither referenced). `figure:toric-code-operators` is defined once (`toric.yml`; the copy in `2d_color.yml` is inside a YAML comment) and `eq:gb_gv` once (`generalized_bicycle.yml`): 03 counted three duplicates, the data holds one today | rename the two subsystem labels (A); the zoo-wide scan of B1 is the authority (it also sees the term labels flm-rs computes from the 60 `defterm`s) |
| the list option `[{⇒}]` | not in `eczoo_data`; in the sitegen's test data, `eczoodb/test_data/codes/binary_linear.yml` line 40 (where 07 found it). The 5 list options of `eczoo_data` are short forms (`[(1)]` 4 times, `[(a)]` once), which flm-rs accepts | `[label={⇒}]` in the sitegen clone (A) |
| FLM comments | the old FLM used `%%` too (Python FLM's `comment_start = '%%'`; a lone `%` is `flm.lang.percent-forbidden`, 07 milestone 5). No FLM value in `eczoo_data` holds `%%` or a lone `%`: the 10 occurrences are in YAML comments of 3 files. So 05's text-output finding (`A %% c\nB`) does not reach the search index | nothing |
| `\includegraphics` outside a float | none: 27 in `eczoo_data`, 8 in the test data, 3 in the handbook's chapters, all inside `figure` or `table` (36 floats in the data) | `graphics.global` stays off |
| `~\cite` | 12, against 11,062 `\cite` | left as they are (05 finding: two no-break spaces) |
| other syntax flm-rs refuses | unknown: step 0 parsed the test data only (no sweep, by ruling) | B1's first full load reports them; each fixed in the data clone, minimal, listed in A's table |

### Gaps of the package found by the survey

What the port needs and the package does not give today. The agents confirm each on the
real data and report; none is worked around in a clone. G1 to G3 are changes in this
repository (the ZooDb crate or the engine, generic where easy, nothing in flm-rs):
before B1, the main session proposes which are made first (part 0, under the usual
implementer and reviewer, tests, the main session committing) and which are left, with
the affected pages listed as degraded, and Philippe confirms (question 4). G4 and G5 are
Philippe's.

| gap | who needs it | what exists | candidate |
|---|---|---|---|
| G1. The body of a term definition | the glossary (`concepts.11ty.js`): each `defterm` with its body, its anchor and the objects that refer to it | `engine.scan()` reports per tree the labels with `anchor` and `display` (the term), and the references; not the body | the crate's scan reports, for a label whose point is a `defterm`, the byte range of its body in the source (from the element index), so that JavaScript makes the body fragment from `fragment.source` |
| G2. Every object that cites a key | `/references` (the backrefs), `collectbib.js` (`encountered_in_list`), `scripts/query_bib_references.js` | the scan's `cited` comes from flm-core's `flm.citations.keys`: one entry per key, with the origin of its first citation; so `object_scan(type, id).cited` lists only the keys whose first citation in the zoo is in that object, although the processor's doc says "the keys it cites" (a finding in itself) | the crate's scan reports the cited keys per tree (the `flm.citations.cite` elements of the element index), as it does the images; `object_scan().cited` then complete |
| G3. Marks and floats in previews | the random code widget's data (no citation or footnote marks, no floats), the meta descriptions, the code graph's info pane | `render_document()` takes no per-call render options (the core merges the settings' render options into every run); a page without `endnotes()` gets `zoodb.compose.piece-not-placed` and keeps its marks | to confirm first: whether `truncate({ first_paragraph })` already leaves out the floats (the data's rule is a short first paragraph), and whether flm-rs has render options that drop marks; if it has, the engine passes per-call render options through; if not, a question for flm-rs, no request; B2: the random code previews render with `pieces.exclude` (the lists of footnotes and citations), their citation marks stay (443 of 1,155 previews; no flm-rs option) |
| G4. A Unicode→LaTeX table | `generatebibtex.js` (the site's BibTeX export, loaded with the module) and, commented out, the handbook's `mk_bib.js` | pylatexenc's `get_builtin_uni2latex_dict`, shipped in the deleted `flm-js-src/`; not FLM | a copy of the table as data in the sitegen (pylatexenc is MIT), an npm package, or `render_latex` with flm-rs's `unicode` render option of the recomposed output: Philippe's choice; B2: `render_latex` of an engine of the export's own with `latex-recomposed.unicode: 'replace'` (the BibTeX export equals the baseline's but for 4 of 5,217 entries, by a character's spelling); no copy of the table |
| G5. The preview apps | `previewtool/` (`yarn preview`, the live preview of data edits) and `/gitpreview.html` (`jscomponents/gitzoopreview/`) | both run through `@phfaist/zoodbtools_preview`, a package of the `zoodbtools` repository (not among the repositories of this step; its installed copy read in the sitegen's `node_modules`), on the old API | a clone and port of `zoodbtools` (a part F), or the two apps left on the old API until later: Philippe's choice |
| G6. An object type without pages (found by B1) | the EC zoo's `space` objects (14; no page, no FLM content refers to one) | the processor's index has one entry, with an href, per object of every type (`object_href(type, id)` for each), and `set_index()` refuses an entry whose href is not a string; the site's permalink function throws for `space` (“Unknown object type ‘space’”), which stops the load | done in the package (ruled 2026-10-18; B1's Closing): the processor leaves out of a context's index an object whose `object_href` returns `null`, and the labels of its fields (a reference to them is then unresolved in that context's renders, `flm.refs.unresolved`; any other href that is not a string is still refused by `set_index()`); the site's permalink returns `null` for `space` (sitegen `5ae77b8`), and B1's TEMPORARY placeholder href (`zoodbobjectref:/space:ID`) is gone |
| G7. Truncation inside a command's arguments (found by B2) | the random code data (each description's first paragraph cut at 500 characters) | `truncate()` (the crate's `truncate.rs`) descended into every argument of a command and could cut in any of them: 18 of the 1,155 previews failed to parse again (a `\cite` key, the note of a second call, a `\hyperref` target cut; 21 Errors, which `'abort'` would throw) | done in the package (B2, for the main session to commit): what a command's element declares apart from the text (flm-core's `apart_from_text_of()`: citation keys, reference targets, link addresses, footnotes) counts nothing and is never cut; a command is cut only inside its last argument, else left out whole; a verbatim group is kept whole or left out; a Rust test, an engine test, `doc/zoodb.zooflm.rst`, `CHANGELOG.md`, the module rebuilt |
| F2. The text of a formula in a term's lead-in (flm-rs, found by B2) | the search index's text (3 terms of the data hold a formula) | the text output writes `Construction A_4: …` for a `defterm` whose term is `Construction \(A_4\)`, while the running text keeps `\(A_4\)`; the HTML is right | a finding for 05's table (the main session's edit); nothing worked around |
| G8. Backreference details on the first load and after a reload (found by B2; its effects measured by B2's review) | the references page's "Appears in", collectbib's `encountered_in` and the glossary's "Referenced in" in dev mode (one zoo kept across rebuilds); the diagnostics of a relation's `detail` | the relations populator copies a relation's raw `detail` into the backreference before the FLM processor compiles the fields. On the first load each backreference detail (3,432 in the EC zoo: `relations.parent_of.N.detail` 1,117, `relations.cousin_of.N.detail` 2,315) was compiled a second time, as a field of the object it is copied to, under that object's file and without a position (15,356 live fragments): 5 of F1's 42 page lines named that file at a position counted from the field (`/c/fusion.html`: `…/mbqc/fusion.yml#relations.cousin_of.1.detail:1:74` for gkp.yml's `relations.cousins.3.detail` at 85:89; likewise `/c/convolutional.html`, `/c/griesmer.html`, `/c/dodecahedron.html`, `/c/icosahedron.html`). After a reload the backreference held the forward relation's own fragment, which the scan (grouping by `fragment.origin`) credited twice to the forward object and not to the object holding the backreference: on the full data, after a reload with no change, 949 objects' `cited` and 320 objects' `refs` differed from the first load's, the key–object pairs fell from 11,447 to 9,020 and the live fragments from 15,356 to 11,924 (test data: 3 objects' `refs`). In dev mode (Eleventy's watch rebuild after a touch of one code file, B2's package with G7) the references page then showed 9,012 "Appears in" links instead of a fresh build's 11,432, the glossary 582 "Referenced in" items instead of 736, the BibTeX and CSL-JSON exports the same 5,217 entries in another order, and the dump differed; the other 1,275 HTML pages and the other files were equal. The first load matched the baseline (11,432 links), a reload did not | done in the package (B2's review fixes, for the main session to commit), as the main session ruled (a detail compiled once, both objects credited, the diagnostics at the forward field): the relations populator records where each backreference entry's values come from (`_zoodb.copied_fields`, rebuilt with the backreferences, left out of dumps); the field compiler gives a copied field the fragment of the field it copies, compiled once as that object's field with its origin and position (first when the copy comes first in the zoo), and `object_fragments()` leaves the copy out; the scan, over the objects' fields, counts the fragment's references, citations and images for both objects, its labels and term definitions for the forward object only (a label in a detail is defined once). On the full data all 3,432 details are their relations' fragments, with 11,924 live fragments at every load and build; after a reload with no change 0 objects differ (`cited`, `refs`, `labels`, `terms`, `graphics`, diagnostics; 17,336 cited entries and 11,447 pairs both times) and the data dump is equal (test data likewise); the five lines name the place where the text is written; the full build's pages and exports are byte-identical to B2's (the dump's citations table holds the same 5,217 entries in another order); in dev mode every page and export after the touch and after the second and the fifth edit equals a fresh build's (`references.html` 11,432 links, `concepts.html` 736 items; the dump differs by its snippet cache, as before the fix, and after an edit its `db` also by the edited file's `source_file_modification_token`). Tests, `doc/zoodb.dbprocessor-flm.rst`, `doc/zoodb.dbprocessor-relations.rst`, `CHANGELOG.md` |
| G9. The cited works' texts in the search text (B2's question 13, ruled in the review fixes) | the search index (`dat/searchindex.json`): a code found by the authors and titles of the works it cites, as with the baseline's index | the searchable-text assembler renders each field's text with `engine.render_text()`, which placed no piece, so a citation and a footnote were their marks (`[1]`, `¹`); the crate's text runs can place them (`pieces: true`), the engine did not pass it on; the former text renderer wrote each citation in full | done in the package (B2's review fixes, for the main session to commit): `engine.render_text({ pieces })`, the assembler's option `pieces` and the standard setup's `searchable_text_options.flm_pieces` (default `false`): each field's text ends with its footnotes and the list of the works it cites, under the headings `Footnotes` and `References` (a standalone fragment holds neither: the standalone check); an engine test, a standard-setup test, `doc/zoodb.dbprocessor-searchable.rst`, `doc/zoodb.zooflm.rst`, `doc/std.rst`, `CHANGELOG.md`; the sitegen sets it (`1c1cf55`): the index is 4,605,733 bytes (baseline 4,443,321, marks alone 2,349,486), `introduced` 273,062 characters (235,118; 7,543), and five queries for a cited author or title give the baseline's numbers of results, with `approximate_qecc` or `qubits_into_qubits` at the baseline's rank or one place off (14th for `Zeng`, as in the baseline; 2nd or 3rd for the others), where the marks-only index missed the code in 3 of the 5 queries and ranked it lower in the other 2 (10th, 8th) |
| G10. The engine module in a Parcel bundle (found by C) | the code graph and the headless SVG exporter (any browser code that imports `is_fragment`, `check_error_policy` or `apply_error_policy` through `./zooflm/engine`, as the field compiler does) | `src/zooflm/engine.js` imported names from `./fragment.js` and `./diagnostics.js` and re-exported both with `export * from`; Parcel 2.13.3 with scope hoisting compiles the imports of those names through the engine module to a namespace object `$…$exports` that the bundle never defines: the exporter's bundle built, then failed in the browser (`ReferenceError: $…$exports is not defined`); reproduced on five files (C, `C/repro/parcel-exportstar/RESULTS.txt`) | done in the package (C, for the main session to commit): the two modules re-exported name by name (the 27 exports of the engine module unchanged), a comment saying why; a test (every export of the two modules is the engine module's, no `export * from` in its source), `doc/zoodb.zooflm.rst` ("Modules"), `CHANGELOG.md`; the exporter's bundle rebuilt on it (sitegen `fcefd2b`) |
| G11. Index addresses with a scheme in `ref()` and in `\ref` (found by C; not needed by the EC zoo) | a browser app whose output context gives objects addresses such as `jsCallbackRef:…` (the former code graph pane) or `invalid:…` (the preview apps, G5) | the composer's `ref()` and `refhref()` write an index entry's address as given (even `javascript:void(0)`), while flm-rs's HTML output, for the same entry met through `\ref` or `\hyperref` in content, refuses an address whose scheme is not `http`, `https`, `mailto`, `ftp`, `tel` or none: the link without its address and the Error `flm.html.refused-address` (C, `C/logs/href_schemes.txt`) | deferred to Philippe, not needed by the EC zoo (question 22): `ref()` and `refhref()` applying the same address policy, or the docs saying that an index's addresses are paths, fragments or web addresses; the code graph now uses `#jsCallbackRef:TYPE/ID` (sitegen `824d2ad`) |
| F3. The heading of the lists of notes and citations per render (flm-rs, found by C) | the code graph pane, which placed the lists of citations and footnotes without a heading | `endnotes()` places the lists with the heading the engine writes ("References", "Footnotes"); its text is `citations.heading_title` and `xnotes.kinds.*.title`, bound when the registry is built (a browser engine must keep the zoo's configuration to load the dump), and no render option leaves it out | a note for 05's table (the main session's edit), no request; the pane keeps the heading, sized small (C, question 18) |

### The citation caches

The EC zoo's arXiv source refreshes in batches (`min_batch: 300`, `max_defer_days: 30`),
the DOI source with `min_batch: 50`, `max_defer_days: 20`, and expired entries that
cannot be refreshed are used for 45 more days (`ttl_policy: { grace_days: 45 }`). On
2026-10-17 the tracked cache has 3 `arxiv` and 1 `doi` entries expired, 21 `doi` stale,
and its 130 `preset` entries expired (the preset source reads a file of the data: no
network). The example's port extended its copy's one arXiv entry with
`zoodb-extend-citations-ttl --prefix arxiv --add 60d` (11, Results, Part C), never the
original. Here: the clone's `_zoodb_citations_cache/` is tracked by git, so the builds
use a copy, `_zoodb_citations_cache_LOCAL/` (the CI's own name, read through
`ECZOO_CITATIONS_CACHE_DIR`), excluded in the clone's `.git/info/exclude`, whose `arxiv`
and `doi` entries are extended by 60 days before the first build; the tracked cache is
never modified or committed. The test cache is copied as it is. Every full-data build
of the site runs with `ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL`; the
test-data builds run without it (they default to `_TEST_zoodb_citations_cache`); the
handbook's full build passes `--citations-cache-dir` with the same LOCAL folder. A build
that reaches the network says so in its log (`Retrieved citations: N considered`); every
retrieval is counted in the Results.

## Setup (done once, by A's agent)

```sh
W=/Users/philippe/Research/projects/zoodb/zoodb/.worktrees/zoodb-flmrs
Z=/Users/philippe/Research/projects/2021-qec-zoo
E=$W/scratch/eczoo
# 1. scratch/.gitignore gains the line `eczoo/` (before anything is cloned)
mkdir -p $E
for r in eczoo_sitegen eczoo_data eczoo_handbook; do
    git clone --no-local --branch main $Z/$r $E/$r
    git -C $E/$r remote set-url --push origin no-push-from-this-clone
    git -C $E/$r switch -c zoodb-flmrs
done
# 2. what the clones need beyond git (ignored files of the originals, copied, never moved)
cp -R $Z/eczoo_sitegen/_TEST_zoodb_citations_cache $E/eczoo_sitegen/
cp -R $Z/eczoo_sitegen/eczoodb/_TEST_zoodb_citations_cache $E/eczoo_sitegen/eczoodb/  # the eczoodb tests' (added after B1)
mkdir -p $E/eczoo_sitegen/.yarn $E/eczoo_handbook/.yarn
cp -R $Z/eczoo_sitegen/.yarn/cache $E/eczoo_sitegen/.yarn/      # offline installs
cp -R $Z/eczoo_handbook/.yarn/cache $E/eczoo_handbook/.yarn/
cp -R $E/eczoo_sitegen/_zoodb_citations_cache $E/eczoo_sitegen/_zoodb_citations_cache_LOCAL
echo _zoodb_citations_cache_LOCAL/ >> $E/eczoo_sitegen/.git/info/exclude
cd $W && yarn node tools/extend_citations_ttl.mjs \
    --cache-dir $E/eczoo_sitegen/_zoodb_citations_cache_LOCAL --prefix arxiv --prefix doi --add 60d
# 3. the worktree packed (75 files since step 5; `scratch/.gitignore` lists *.tgz)
cd $W && yarn pack --out $W/scratch/zoodb-flmrs.tgz
```

The temporary dependency of the sitegen clone (Yarn 3.3.0 through corepack, which has it
cached): a root `resolutions` entry `"@phfaist/zoodb":
"file:$W/scratch/zoodb-flmrs.tgz"` in `$E/eczoo_sitegen/package.json`, then
`YARN_GLOBAL_FOLDER=$Y YARN_ENABLE_NETWORK=0 yarn install` at the clone's root, `$Y` a
folder `yarn-global` in the session's scratchpad (offline first: the copied cache should
hold every archive, the git-URL packages included; if not, the same with the network,
and the Results say which packages were fetched). By default (`enableMirror`) Yarn 3 and
Yarn 4 also write each archive they add to a project's cache into the global mirror
`~/.yarn/berry/cache`, outside the worktree (B1's install wrote two archives there);
`YARN_GLOBAL_FOLDER` moves that mirror into the scratchpad. `YARN_ENABLE_MIRROR=0` is no
way out: with the mirror off, Yarn 3.3.0 and 4.6.0 look a package up in the project's
cache under its versioned file name (`<slug>-8.zip` for Yarn 3) instead of the checksum
name the copied caches use, so an offline install misses every archive (B1's Closing).
The handbook's `.yarnrc.yml` sets `enableGlobalCache: false`, which does not turn the
mirror off. One edit replaces the five git URLs; if `resolutions` does not take, the
five `package.json` files are edited instead. Checked after each install: exactly one
`node_modules/@phfaist/zoodb`, version 0.3.0 (`find $E/eczoo_sitegen/node_modules -path
'*/@phfaist/zoodb/package.json'`), and its `src/` equal to the worktree's (`diff -rq
$E/eczoo_sitegen/node_modules/@phfaist/zoodb/src $W/src` empty). After a new pack of the
worktree, three stale copies go before the same install, since each of them makes the
install succeed with the previous package: the mirror's copy of the tarball
(`$Y/cache/@phfaist-zoodb-file-*.zip`), the lock's `@phfaist/zoodb@file:` entry (the
lock is the temporary one) and `node_modules/@phfaist/zoodb` (the linker does not relink
an unchanged locator). The root `package.json` and `yarn.lock` are never staged; each
part ends with `git -C $E/eczoo_sitegen checkout -- package.json yarn.lock` and a
`git status --short` that shows nothing but ignored output. The handbook clone does the
same with Yarn 4.6.0 and the same `YARN_GLOBAL_FOLDER` (D).

## A. The data

Depends on: the setup. Read: 11 Results, Parts A and B (the tool and its verification),
05 (findings), the data rows above, flm-rs `docs/language-syntax.md` ("Lists").

| change | where | how |
|---|---|---|
| re-indent | `eczoo_data` clone | `cd $W && yarn node tools/reindent_yaml.mjs $E/eczoo_data`: expected 191 values in 127 files, 1,250 files checked (the 3 under `.github/` skipped as hidden), every verification against the lenient reading passing; then every one of the 1,253 YAML files loads with the strict loader (a script in the scratchpad over `parse_yaml_text` of the worktree, run with `yarn node`), and the data equals `js-yaml`'s reading of the originals (the worktree's `js-yaml` 4.1.0, a transitive dependency; 11 found 1,251 equal and 2, `approximate_qecc.yml` and `qubits_into_qubits.yml`, differing by one space where a quoted line ends in a space before a fold). One commit, the tool's summary in its message |
| `eq:parity` | `eczoo_data` clone | the labels of `qubit_subsystem_css.yml` and `qudit_subsystem_css.yml` renamed, following the data's own pattern (`eq:parityq`, `eq:parityg` exist; any `\eqref` in the same file follows); one commit |
| `[{⇒}]` | sitegen clone, `eczoodb/test_data/codes/binary_linear.yml` | `\begin{itemize}[label={⇒}]`; one commit |
| what later parts find | data clone | a commit per kind of discrepancy, a row added here by the part that found it |

Checks: the counts above; the strict load of all files; `git -C … log --stat` of the new
commits; no other file changed. Results: the commits (hash, files, values), the
verification numbers, the two `js-yaml` differences confirmed or not, and whether the
data clone's branch is safe for the current production build (the re-indented files and
the renames read the same under `js-yaml` and the old FLM; this decides whether the data
can be merged before the sitegen).

## B1. The zoo and its pages

Depends on: A (part 0 if decided). Read: `doc/std.rst`, `doc/zoodb.dbprocessor-flm.rst`,
`doc/website11ty.rst` (the example as the worked port) and `doc/zoodb.zooflm.rst` of the
worktree; the example's port in `scratch/zoodb-example/` (`peopledbjs/myzoodb.js`,
`website/src/person/person.11ty.js`, `templates/layout/base_page.njk`,
`useMathjaxScript.njk`, `src/pic/pic.11ty.js`, `src/dat/zoodbdata.11ty.js`, the README's
recipe); 01 sections 1 and 2; the rows of the inventory marked B1. The build runs with
`ECZOO_RUN_11TY_PARCEL=0 ECZOO_DEVELOPMENT_MODE=1` (no Parcel, no Puppeteer: the
committed exporter bundle still holds the old FLM until C) in `site/`:
`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel` (the script sets the other two
variables but not this one), then `yarn build-simple-noparcel` on the full data.

| change | detail |
|---|---|
| the setup | `eczoodb.js` and `fullopts.js` as in the inventory; `continue_with_errors: false` stays (the `'abort'` policy: an FLM Error stops the build); the top-level `flm_allow_unresolved_references` and `flm_allow_unresolved_citations` keys of `eczoodb.js` checked against what `makeStandardZooDb()` reads now (`flm_options.allow_unresolved_references`), and moved if they are not read |
| the engine's settings | the defaults the EC zoo relied on (01 section 2) compared with flm-rs's, from `ZooFlmEngine.features()` (the settings schema per feature) and the baseline's HTML: floats numbered in Roman numerals ("Figure I"), the footnote counter (alph), citation marks `[1–3]` sorted and compressed, the bullets, `target="_blank"` on external links, the run-in `\paragraph`, the `defterm` lead-in. Each difference set through `flm_options.engine.settings` where a setting exists, or listed where none does |
| the first full load | the zoo loads (fields, scan, index, citations, graphics, snippets) with zero Errors; every warning counted by identifier with one example; every parse diagnostic in the data fixed in the data clone (A's table) or, if the content is right and flm-rs refuses it, reported (a finding, no workaround); the duplicate labels the scan reports (`zoodb.labels.duplicate`) fixed in the data; timings of each processor step (the debug log's lines) |
| the pages | the composer pages, snippets, truncations, ad hoc fragments and `scan_results` uses of the inventory's B1 rows; every template that calls `render_document()` prints its diagnostics (`format_diagnostic`, with the page's URL), as the example's person page does; ad hoc fragments a page makes are released when the page is done |
| the glossary | through `scan_results`; without G1, the body is left out and the page says so in a comment (listed as degraded), never re-parsed from the source by hand |

Checks: the two builds exit 0; no `<flm:` marker and no `flm:` followed by a digit in
`_site/`; zero `flm.*`/`zoodb.*` Errors in the log; the page counts equal the
baseline's (1,155 code pages, 86 lists, the domains, kingdoms and single pages); the
`eczoodb` tests run (`cd eczoodb && yarn test`) with their failures listed for B2.
Results: the files changed with a line each, the settings chosen, the warnings table,
the data fixes (in A's table), the load and build timings, what G1 to G3 change on the
real data, the commits.

## B2. Presentation, exports, scripts, tests, dev mode

Depends on: B1. Read: B1's Results; the inventory's B2 rows; flm-rs
`docs/python-flm-migration.md` ("The HTML output"); 05 (findings); 11 Results Part C
(the MathJax gap and `html_scripts()`).

| change | detail |
|---|---|
| stylesheet | the engine's stylesheet as an Eleventy page (`html_stylesheet()`, as the example's `src/dynamic_style/flm.css.11ty.js`) that the layout links and Parcel bundles; `flm-formatting.scss` rewritten on the new classes and attributes for what the EC zoo styles differently from the engine's defaults, and the other SCSS files' old selectors likewise; a table in the Results: each old selector, its new counterpart or "dropped: the engine's default" |
| MathJax | the layout (`base_page.11ty.js`) writes `engine.html_scripts()` in `<head>`; `jscomponents/mathjax/setup.js`'s `load()` no longer configures or loads MathJax 3 and resolves when MathJax 4 has started (the profiles keep calling it); no `mathjax@3`, `cdnjs…/mathjax/3`, `.inline-math` or `.display-math` left in the site's sources |
| bib exports | `collectbib.js`, `prepare_eczoo_bibreferences.js`, `references.11ty.js`, `generatebibtex.js` as in the inventory; with G2 open, the backrefs list what `object_scan()` gives and the page is listed as degraded; G4 as Philippe decides (until then the bib pages are listed as not built) |
| random code data | `generate_data.js` over `truncate` and `render_document`, G3 as decided |
| search index and dump | unchanged calls; the index's documents compared with the baseline's `searchindex.json` (the number of documents, three codes' texts diffed); the dump's size, its `zooflm` share and the share of `_zoodb.flm_field_positions` (11 Deferred (b), still Philippe's) |
| scripts | the renames of the inventory's script rows; `collectBibRefs.js` over `render_latex` if direct, else listed |
| tests | `eczoodb` and `eczcollectbib` tests adapted and green |
| dev mode | the EC zoo keeps one zoo and one engine across rebuilds (`load_or_reload_eczoodb()` caches the zoo; `load()` reloads through `update_objects`, and the processor releases the replaced fragments after a successful re-processing), unlike the example, which makes a new zoo and engine per rebuild that are never `free()`d. Measured with `yarn dev` on the full data (or a script that calls `load()` the same way): the module's linear memory, the JS heap and the process's resident size after the first load and after each of at least five reloads (one with no change, the others after touching one code file), and the number of live fragments if the engine exposes it. If memory grows per reload, find what holds it (ad hoc fragments of templates, truncations, computed `short_name`s are the suspects) and release it in the site's code, or report a leak of the package (a finding); a second engine anywhere is `free()`d when replaced |

Parcel cannot bundle the site before C: `jscomponents/codegraph/` imports names and a
module that 0.3.0 no longer has (`render_text_standalone`, `make_and_render_document`,
`std/use_flm_environment`, which cannot even be resolved), so Parcel fails on the
`code_graph` profile. B2's builds therefore stay without Parcel, as B1's.

Checks: `ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel` and `yarn
build-simple-noparcel` exit 0 with the B1 checks; the stylesheet page holds the engine's
stylesheet (compared with `html_stylesheet()` of an engine configured as the zoo's); the
site's SCSS compiles alone with the clone's `sass` (no error; no old-class selector left
but those the table keeps on purpose); the layout's `<head>` holds the MathJax 4
configuration and loader and nothing of MathJax 3; the tests green. Results: the
selector table, the MathJax change, the bib, search and dump numbers, the dev-mode
table, the commits.

## C. The browser apps

Depends on: B1, B2. Read: `doc/zoodb.dbprocessor-flm.rst` ("The data dump", the browser
app sample), `doc/zoodb.zooflm.rst` (the loaders, `load`, `set_index` with a context,
`truncate`), the inventory's C rows.

| app | level | change |
|---|---|---|
| code graph (`/code_graph`, the info pane, the graph labels) | 1 | as in the inventory; the engine created with the zoo's core configuration (`engine.load()` refuses another `settings_hash`); fields compiled on demand by `FLMSimpleContentCompiler({ engine })` under `'continue'`; MathJax for new content through the configuration's `flm:region-updated` event or `MathJax.typesetPromise([node])`, whichever the engine's script supports |
| headless SVG exporter | 1 | the same code in Puppeteer; `yarn build` in `jscomponents` rebuilds `codegraph/_headless_exporter_browser_code_dist/` (now with the `.wasm` file beside it; its size in the Results), committed |
| search widget, random code widget, popups, link highlight | 0 | the search results typeset under the MathJax 4 configuration; the random code data comes from B2 |
| `gitzoopreview`, `previewtool` | 2 | per Philippe's answer on G5; until then they stay on the old API and the Results say what fails (a Parcel error or a runtime error) |
| dev page `jscomponents/dev/codegraph/` | — | its two scripts import `use_flm_environment` from a path that no longer exists in `eczoodb`: listed, not ported |

Nothing else compiles FLM in the browser: an app that would need the processor (level 2)
is listed. Checks: `yarn build` in `jscomponents`; the first builds of the site with
Parcel (`yarn build-test-simple`, then `yarn build-simple` on the full data), exit 0
with the B1 checks; the bundle holds the engine's class selectors (as the example's
check did: the stylesheet of an engine configured as the zoo's, its `.flm-` selectors
looked up in Parcel's CSS); with the clone's Puppeteer, the built site served by `sirv`
and loaded headless: the code graph renders, an info pane renders a code with a formula
and a citation, the console has no error, MathJax has typeset on a code page, the
search page and the info pane (`mjx-container` elements present); the MathJax CDN and
the fonts need the network (if offline, not verified, and the Results say so). Results:
per app, its level, what it loads, the checks, the commits.

## D. The handbook

Depends on: B1, B2, C (the handbook imports `eczoodb`, `eczcollectbib` and the code
graph exporter of `jscomponents`). Read: 07 milestone 5,
`scratch/proto/js/handbook_example.mjs`, `doc/zoodb.zooflm.rst` (`render_latex`), 03
Q12, the handbook's inventory above, flm-rs `docs/python-flm-migration.md` (the LaTeX
output and its hooks).

- Dependencies: the sitegen clone's four workspaces packed (`yarn pack` in `eczoodb/`,
  `eczoohelpers/eczcollectbib/`, `jscomponents/`, `_zoodb_citations_cache/`, out to
  `$E/pack/`), and a `resolutions` block in the handbook clone's `package.json` for
  `@phfaist/zoodb` (the worktree's tarball) and the four packages (their tarballs),
  `YARN_GLOBAL_FOLDER=$Y YARN_ENABLE_NETWORK=0 yarn install` (Yarn 4.6.0, offline first
  with the copied cache; the mirror kept out of `~/.yarn` as in the Setup, not by
  `YARN_ENABLE_MIRROR=0`, which cannot install offline from the copied cache); one
  `node_modules/@phfaist/zoodb` (0.3.0) checked, so that the handbook and `eczoodb`
  share one engine class; restored before committing, as in the sitegen. The Results
  name the sitegen commit packed.
- The port as in the inventory: the zoo's options, the intro chapters, one
  `render_latex` run over every fragment the handbook places (the codes' fields, names,
  relation details, the domains' and kingdoms' texts, the chapters, the ready-formatted
  citations), the markers substituted (zero left), `raw_label_types` the object types,
  every other label a safe label unique over the run, `drop_comments: true`, the style
  file written to the work folder, the class adapted to the run's hooks, the bibliography
  keys matched to the run's citation hooks, the ligatures as the handbook decides (07),
  the parse-tree test replaced.
- Two zoo versions are jumped (0.1.1 to 0.3.0): the citation cache of the test build
  (above) and any non-FLM option that changed are handled and listed.

Checks: `yarn build-test` produces the PDF (latexmk), with zero FLM diagnostics and no
undefined reference or citation in the LaTeX log; the full generation (`yarn build`)
runs to the LaTeX file with zero FLM diagnostics, and to the PDF if time allows (the
time recorded); the numbers of 07 milestone 5's table for the full zoo (fragments, trees
in the run, safe labels written and distinct, raw references, citation hooks, the run's
time and memory). Results: the files changed, the hooks mapped, the decisions, the
numbers, the commits.

## E. The full build check of the site

Depends on: A, B1, B2, C (D is independent; if E changes the sitegen clone after D, D
re-packs and re-runs `yarn build-test`). Read: the Results of A to C.

- The production build `cd site && yarn build` (Parcel, the SVG exports through
  Puppeteer, `NODE_OPTIONS=--max-old-space-size=8192` as the script sets it) on the full
  data, timed, with the peak resident size (`/usr/bin/time -l`), the Eleventy benchmark
  lines and the processor's step timings.
- Diagnostics: zero, or every remaining one listed with its object and field
  (`format_diagnostic`), its identifier and why it stays.
- Comparison with the baseline `site/_site/` of the read-only checkout (read in place):
  the same set of pages; for a sample (20 code pages chosen across domains, with
  figures, tables, equations, defterms, footnotes and many citations; 3 code lists;
  the domains; 2 kingdoms; the home page, `concepts`, `references`, `team`), the visible
  text compared after stripping tags and normalizing white space, and per page the
  counts of links, citations, figures, formulas; every difference classified (expected:
  the markup, float and citation formats as settled in B1, `~\cite`'s two no-break
  spaces, references to figures of other pages that now link instead of showing
  `[figure]`) or listed as a defect. Screenshots of five pages, old and new, through
  Puppeteer, put in the scratchpad for Philippe.
- A baseline rebuild is not needed for the HTML. For time and memory, the sitegen
  clone's `main` can be built against zoodb 0.2.1 (the lock's git commit `bb94f3e`, not
  npm) in a `git worktree` of the clone beside a worktree of the data clone at the same
  data commit: feasible offline as far as the survey can tell (the copied Yarn cache
  holds the lock's archives, the git-URL packages included; corepack has Yarn 3.3.0;
  Puppeteer's Chrome 134 is cached), to be confirmed by `YARN_GLOBAL_FOLDER=$Y
  YARN_ENABLE_NETWORK=0 yarn install` (the Setup's form, not `YARN_ENABLE_MIRROR=0`; the
  six archives B1's install dropped from the clone's cache copied again from the
  original's); if it fails, E reports the new build's numbers alone.
- The search index (documents, size, three texts), the dump (`dat/eczoodata.json`:
  size, `zooflm` share, positions share), the BibTeX and CSL exports (if G4 is settled),
  the random code data, the 89 graph SVGs present; the apps loading the dump in
  Puppeteer as in C.

Results: the numbers above in tables, the diagnostics list, the comparison's
classification, the screenshots' paths, the build time and peak memory against the
baseline's if rebuilt.

## Checks before handing back

Each part: its own checks above; in the worktree `git status --short` shows only this
brief's Results and `scratch/.gitignore` (agents never commit here); in each clone
`git status --short` empty but for ignored output, the root `package.json` and lock in
their committed form, the branch `zoodb-flmrs` with the part's commits (trailers
checked with `git log -n N --format=%B`), nothing pushed (`git -C … log origin/main..`
lists only the new commits; the push URL is the disabled one). The originals: `git
status --short` empty and no file newer than the start of the part
(`find … -newer`).

## Questions for Philippe

1. The working decisions above (clones in `scratch/eczoo/`, branches never pushed, the
   tarball dependencies, six parts in this order), and whether the clone's `origin`
   should rather be the GitHub repositories.
2. Pushing the three `zoodb-flmrs` branches, and to which remote (`errorcorrectionzoo` or
   the `phfaist` forks); the agents never push.
3. The order of the merges: zoodb's `zoodb-flmrs` into `main` first (the clones' git
   URLs then point at the right code), then `eczoo_data` (if A confirms it reads the
   same under the deployed site: its CI builds the sitegen's `main`), `eczoo_sitegen`
   with its lock refreshed, the handbook last with its lock refreshed (it also moves
   from zoodb 0.1.1 and a sitegen of June).
4. G1 to G3: whether part 0 (the scan reporting term bodies and every citing object,
   per-call render options for previews) is added to the package before B1, or the
   glossary, the references' backrefs and the previews are accepted as degraded for now.
5. G4: where the Unicode→LaTeX table of the BibTeX export comes from.
6. G5: whether `zoodbtools` is cloned and ported in this step (the live preview and
   `/gitpreview`), or those two apps wait.
7. `pdfexport/`: ported, left on the old API, or removed.
8. The dump positions (11 Deferred (b)): E measures their share of `eczoodata.json`,
   which the code graph downloads.
9. The site's look: the SCSS rewrite changes the HTML the styles hang on; the
   screenshots of E are for his review.
10. The diagnostic switch `ECZOO_FLM_CONTINUE_WITH_ERRORS=1` of the sitegen clone (B1's
    Closing; inspection builds under `'continue'` while the flm-rs finding F1 is open):
    whether it is acceptable to keep, also once F1 is fixed, or removed then.

## Results

### Part 0. The package

Done 2026-10-17 by part 0's agent (Opus; the worktree at `1f1f0f8`, uncommitted),
reviewed (Opus, read-only), review fixes applied 2026-10-18. Logs and probes, beside
`partA/`: `part0/`, `review_part0/`, `fix_part0/`.

- **G1, term bodies.** The crate's scan reports per tree `terms`, one entry per
  `defterm`: `{ labels, anchor, display, body_start, body_end }`; the engine adds `body`
  (cut out of `fragment.source`, the UTF-8 offsets converted) and, since the review
  fixes, `body_origin`. A list of terms beside `labels`, because one `defterm` point
  carries several labels (`defterm:<term>`, one per `\aliasterm`, then the written
  `\label`s) and a glossary lists points. `labels` are the point's own, `anchor` the
  point's when one of its labels forms it, `display` the term's source; the body range is
  `node.body()`'s span without the `\label`/`\aliasterm` fields, `null` when empty or
  written through a user definition. `object_scan(type, id).terms` carries them with
  their `fragment`; a glossary takes the objects whose `refs` hold one of the labels
  (tested end to end, a citation in the body resolved).
- **G2, every object that cites a key.** The crate's scan reports per tree `cited`, each
  key once in order of first citation, read from the element index's `cite`/`refcite`
  nodes through flm-core's `read_chunk`. The zoo-wide `cited` (`flm.citations.keys`, the
  first citation per key) is unchanged and drives the retrieval. `object_scan().cited`
  holds one entry `{ key, cite_prefix, cite_key, origin, fragment }` per key and field;
  `scan_results.cited` has `cite_prefix`/`cite_key` too. The processor's doc ("the keys
  it cites") is now right.
- **G3, marks and floats in previews.** (a) `truncate({ first_paragraph: true })` keeps
  what precedes the first blank line: a float after it is left out, one written in the
  first paragraph is kept when it fits, and so are footnotes and citations; the EC zoo
  writes floats as separate paragraphs, so its previews lose them. (b) flm-rs has no
  render option that drops citation or footnote marks or floats (citation placement and
  xnotes are registry configuration), but `pieces.include`/`exclude` is bound to the
  render request: a run that excludes `flm.xnotes.list.footnote` and
  `flm.citations.bibliography` builds no endnotes and draws no
  `zoodb.compose.piece-not-placed`, the marks staying as links to notes not on the page.
  So `render_document({ render_options })` and `render_fragment(f, { render_options })`
  take flm-rs render options for that run only (`{ feature: { key: value } }` over the
  settings' render-bound keys, key by key); an unknown feature or key, a key fixed at
  build (`citations.placement`) or one the call sets itself throws a plain `Error`
  naming it. Dropping the marks stays a question for flm-rs (no request).
- **The settings layering bug, fixed.** Every html, text and LaTeX run replaced the
  settings' `HtmlRenderOptions`, `TextRenderOptions`, `LatexRecomposedRenderOptions` and
  `RefsRecomposeOptions` (and the text run's `pieces`) by the types' defaults, so
  `settings: { html: { heading_tags, root_heading_level, run_in_stop, … } }` never
  reached a page. Each run now starts from the settings' value of each type and sets
  only its own fields (tested for html, text and LaTeX).
- **Deviations.** G3's per-call options went in although no option drops the marks
  (the brief's alternative, rendering without endnotes, exists); the layering fix, in
  the same code; the per-tree `cited` is a list of keys in the crate and the engine (the
  processor adds origin, fragment, `cite_prefix`, `cite_key`); the binding's
  `drop_nulls` hands `render_options` to flm-core as it is, as it does `settings`.
- **Checks.** Rust: `zoodb-flm-wasm` clippy clean, 18 tests (3 new);
  `zoodb-autocitefetch-wasm` clippy clean, 40 tests. `yarn build:wasm flm`: path check
  green, module 5,148,202 bytes (+9,004), `flm_core_git` `2c219ec3`, not dirty. `yarn
  test` 466 passing (+6), `yarn lint` green, `playground/play_example.mjs` exit 0, the
  docs build without warning.

**Review fixes.** The review found three must-fix and two should-fix items; all are
applied.

- (must) A label entry got its point's anchor only when that same label formed it, so
  a point's later labels had `anchor: null`, and a defterm's `\label{topic:x}` got an
  index entry without `#defterm-…`. `Engine::scan` now groups `by_label` by point (the
  anchors its labels form), and every label keeps its point's anchor when one of the
  point's labels forms it. The display and the processor's display rule are unchanged:
  a later label's index entry gets the point's display, and a float stays `null`.
- (must) Tests. Rust: every label of a defterm point has `defterm-Markov_chain`, and a
  second label on a section, an equation and a figure gives `sec-intro` (with the
  display), `eq-x` and `null`. Processor: the index entry of `topic:dot` has
  `/person/carol#defterm-Dot` and the display of `defterm:Dot`.
- (must) The wording "the anchor when one of the labels of its point forms it", in
  `engine.rs`, `lib.rs` (and so the `.d.ts`), `engine.js`, `flmprocessor.js`, both doc
  pages, `CLAUDE.md` and HANDOVER's decision list. Also the crate's `README.md` (whose
  scan row also gained `terms` and the per-tree `cited`) and the ZooDb-side rule in 05.
  The `engine.js` paragraph that implied a float's `figure-3` was reported now says it
  is `null`.
- (should) A term's body fragment gets the field's file lines. `range_origin(fragment,
  start, keys)` (`src/zooflm/fragment.js`) gives the origin of a cut of a fragment's
  source: `start_line`/`start_col` moved by the cut's line and column, as a
  diagnostic's are, `indent` kept, and `approx: true` when the fragment's positions are
  approximate or absent. The scan's terms carry `body_origin = range_origin(f,
  body_start, { term: labels[0] })`, which the glossary example of
  `doc/zoodb.dbprocessor-flm.rst` uses. Done differently from the decision: the label
  stays the field's and `term` names the term. The graphics table is keyed by the
  canonical label, so a body under another label does not find its images
  (`flm.graphics.resolve-failed`, an Error; `fix_part0/p_body_label.mjs`); truncation
  keeps the label for the same reason. Engine test: the body's diagnostic is at the
  file line and column the field's own render gives (23:17), its image is found, and
  the approximate and absent cases are covered.
- (should) `Engine::new` refuses by name the settings keys that a run always sets:
  `refs.unresolved`, `text.width`, `text.link_addresses` and
  `latex-recomposed.drop_comments`. It reuses the reserved lists of the per-call options
  plus a new LaTeX list, and each error names the call's option that sets the key.
  `doc/zoodb.zooflm.rst` says so; Rust test added.
- Checks after the fixes. Rust: `zoodb-flm-wasm` clippy clean, 19 tests;
  `zoodb-autocitefetch-wasm` clippy clean, 40 tests. `yarn build:wasm flm` in 85 s:
  path check green, module 5,153,150 bytes (+4,948), and the new `flm_core_git`
  `5de1c198`, not dirty (flm-rs's HEAD; since `2c219ec3`, flm-core's `src` changed only
  the LaTeX file `flmx-headings.sty`, the rest being goldens and tests). `yarn test` 467
  passing, `yarn lint` green, the sample exit 0, the docs build without warning.
  `CHANGELOG.md`'s part-0 bullet names `body_origin`, `range_origin()` and the refused
  keys.

**Findings for later parts.**

- The scan does not see what user definitions write. A `\cite` in a macro is in neither
  the tree's nor the zoo's `cited`, so it is not retrieved and the render reports
  `flm.citations.no-entry`. Labels and term definitions in a template are not reported
  either (`review_part0/p6_userdefs_render.mjs`). The EC zoo defines none; recorded in
  HANDOVER.
- `html_definitions()`, and from it `html_scripts()` and `html_stylesheet()`, list the
  parts the features declare, while the runs honor the settings' `html.definitions`
  overrides. B2's MathJax setup must keep both consistent (recorded in HANDOVER).
- For B1 to check: the computed term labels (`defterm:<term>`) are labels like any
  other, so two objects defining one term are `zoodb.labels.duplicate` (the 61 EC zoo
  defterms); and a body's labels and citations are numbered in the glossary page that
  renders it.

### Setup

Done 2026-10-17 by A's agent (Opus; node 23.7, the worktree at `1f1f0f8`), steps 1 and
2 of the setup block; step 3 (the pack) and the sitegen clone's `yarn install` are left
to B1's agent, after part 0 is committed. Logs and scripts of this part:
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/partA/` (below `partA/`).

- `scratch/.gitignore` gained the line `eczoo/` before anything was cloned (`git
  check-ignore` names it for `scratch/eczoo/…`).
- The three clones were made as the setup block says (`git clone --no-local --branch
  main`, push URL `no-push-from-this-clone`, `git switch -c zoodb-flmrs`). The fetch URL
  of `origin` is the local path of the original. Each clone has `main` and `zoodb-flmrs`
  as local branches; the originals' other branches are only `origin/*` refs. The branches
  start at `a2ad583` (sitegen), `7ade20a2f` (data) and `c73b681` (handbook), the
  originals' `main`.
- What was copied (`cp -R`, each copy under 0.2 s): `_TEST_zoodb_citations_cache/`, both
  `.yarn/cache/` folders (1,183 and 520 archives, the same counts as the originals),
  and the tracked `_zoodb_citations_cache/` into `_zoodb_citations_cache_LOCAL/`. The
  clone's `.git/info/exclude` gained `_zoodb_citations_cache_LOCAL/`. The tracked
  `citations.jsonl` of the clone is byte-identical to the original's (`cmp`).
- The LOCAL cache's TTL, extended by `yarn node tools/extend_citations_ttl.mjs
  --cache-dir …/_zoodb_citations_cache_LOCAL --prefix arxiv --prefix doi --add 60d`
  ("extended 6874 entries by 60 day(s) (arxiv: 3306, doi: 3568)"). Counts made
  by `partA/cache_counts.mjs` at 2026-10-17 02:03 UTC (stale: `stale_after` passed and
  `expires` not):

  | prefix | entries | before: stale, expired | after: stale, expired | earliest `stale_after` after |
  |---|---|---|---|---|
  | `arxiv` | 3,306 | 0, 3 | 0, 0 | 2026-12-05 |
  | `doi` | 3,568 | 17, 1 | 0, 0 | 2026-12-11 |
  | `preset` | 130 | 0, 130 | 0, 130 (not extended; the preset source reads a file of the data, no network) | — |

  The survey counted 21 stale `doi` entries; this count gives 17 stale and 1 expired.
  The test cache was copied as it is: 56 `doi` entries, none stale before 2027-02-02.
- Times and sizes (`du -sh`, each path measured alone):

  | | clone time (wall) | size | of which |
  |---|---|---|---|
  | `eczoo_sitegen` | 29.4 s | 379 MB | `.git` 97 MB, `.yarn/cache` 170 MB, `_zoodb_citations_cache` 28 MB, `_zoodb_citations_cache_LOCAL` 28 MB, `_TEST_zoodb_citations_cache` 428 KB |
  | `eczoo_data` | 1.3 s | 26 MB | `.git` 14 MB (the original's is 60 MB) |
  | `eczoo_handbook` | 1.5 s | 80 MB | `.git` 20 MB, `.yarn/cache` 49 MB |
  | `scratch/eczoo/` in all | | 484 MB | |

- State after the setup: `git status --short` empty in the three clones;
  `--ignored` lists `.yarn/cache/`, `_TEST_zoodb_citations_cache/` and
  `_zoodb_citations_cache_LOCAL/` (sitegen) and `.yarn/` (handbook).

### A. The data

Done 2026-10-17 by A's agent (Opus). Three commits in the clones, with the two trailers;
nothing pushed (`git log origin/main..` lists only these commits; the push URLs are
the disabled one).

| clone | commit | subject | files | values |
|---|---|---|---|---|
| `eczoo_data` | `fd2a8d992` | Re-indent quoted values continued at their key's column (YAML 1.2) | 127 | 191 values; 283 lines gain leading spaces, nothing else changes |
| `eczoo_data` | `60bbc93ae` | Rename the eq:parity labels of the two subsystem CSS codes | 2 | `codes/quantum/qubits/subsystem/qubit_subsystem_css.yml`: `eq:parity` → `eq:paritys`; `codes/quantum/qudits/subsystem/qudit_subsystem_css.yml`: `eq:parity` → `eq:parityqs` (field `description`) |
| `eczoo_sitegen` | `8634846` | Test data: write the custom bullet of binary_linear.yml as label={⇒} | 1 | `eczoodb/test_data/codes/binary_linear.yml` line 40 (field `protection`): `\begin{itemize}[{⇒}]` → `\begin{itemize}[label={⇒}]` |

The data changes and their reasons, for the table of part A: the re-indent (the strict
loader refuses the pattern), the two labels (a label is zoo-wide, and `eq:parity` had
three definitions; `qubit_css.yml` keeps it and its `\eqref`), the list option (flm-rs
refuses `[{⇒}]`). The names follow the data's suffix per variant (`eq:parityq` for
modular qudits, `eq:parityg` for Galois qudits): `s` for subsystem, after `q` for the
qudit one. Neither renamed label is referred to in the data, the sitegen or the
handbook (grep). The handbook clone has no commit. On the data clone's branch, 127
files differ from `main`: the two renamed files are among the re-indented ones.

**Verification numbers.**

- *The tool* (`cd $W && yarn node tools/reindent_yaml.mjs $E/eczoo_data`; a dry run
  first gave the same numbers): "191 value(s) in 127 file(s) re-indented, 1250 file(s)
  checked", 1.2 s wall, exit 0, nothing on stderr (every verification passed); the 3
  files under `.github/` are skipped as hidden (1,253 YAML files in all). The diff:
  283 lines in 197 hunks, each line differing from the original only by added leading
  spaces (`git diff -w` empty, and a line-by-line check). Logs: `partA/reindent.log`,
  `partA/reindent.diff`.
- *The strict load* (`partA/strict_load_compare.mjs`, run with `cd $W && yarn node`:
  `parse_yaml_text` of the worktree with positions, the bytes through `decode_text`, as
  the loader reads them): all 1,253 files load, at the re-indent commit and at the
  branch head; 27,236 string positions (as in 11); 0.77 s for the 1,253 files, with the
  two `js-yaml` readings below.
- *The comparison with `js-yaml`* (4.1.0, resolved from the worktree through mocha's
  dependency; `jsyaml.load(bytes)` as zoodb 0.2.1 calls it; the originals are the
  clone's `main`, exported with `git archive`). At the re-indent commit, the strict data
  equals `js-yaml`'s reading of the originals for 1,251 files. The 2 differences are
  confirmed, one space each: `codes/quantum/properties/approximate_qecc.yml`
  (`features.decoders.6`) and `codes/quantum/qubits/qubits_into_qubits.yml`
  (`features.decoders.2`). There a quoted line ends with a space before a line break:
  `js-yaml` keeps that space and adds the folded one (two spaces), YAML 1.2 keeps one.
  This corrects 11: `qubits_into_qubits.yml` is not re-indented (its continuation lines
  were already indented past the `-`), so this is the YAML 1.2 reading, not the tool.
  `approximate_qecc.yml` is re-indented, and the value that differs is one of its three
  values. At the branch head the only other differences are the two renamed labels.
  Results: `partA/strict_load_compare_reindent.json`, `partA/strict_load_compare_final.json`.
- *Labels* (grep over the non-comment lines of the data clone, after the rename): 112
  `\label{…}`, all distinct; `figure:toric-code-operators` once (`toric.yml`),
  `eq:gb_gv` once (`generalized_bicycle.yml`), as the survey says. B1's zoo-wide scan
  stays the authority (it also sees the term labels flm-rs derives from `defterm`s).
- *The list option* (`partA/list_option_check.mjs`, the worktree's engine under
  `'continue'`): the `protection` field of the original renders with one Error, `‘⇒’ is
  not an option of ‘itemize’ … [flm.lists.unknown-key]`, and the default bullet. After
  the fix it renders with no diagnostic and the bullet `⇒`. The field's other option,
  `\begin{enumerate}[{(I]))}]`, is a short form (labels `(I]))`, `(II]))`) and stays
  as it is. Logs: `partA/list_option_check_before.txt`, `partA/list_option_check_after.txt`.
- *Clean state*: `git -C <clone> status --short` is empty in the three clones (ignored
  files only, as after the setup). `git -C <clone> log --stat zoodb-flmrs ^main` is saved
  as `partA/logstat_<clone>.txt`. The originals' `git status --short` (read with
  `--no-optional-locks`) and their branch heads are the same as before the part, and
  `find … -newer` finds no file newer than the part's start in any of the three.

**Is the data clone's branch safe for the current production build?** Yes, as far as
checked here: the data could be merged before the sitegen. The production build (the
sitegen's `main`, zoodb 0.2.1 at `bb94f3e`) reads YAML with `js-yaml` 4.1.0, the copy
hoisted in the sitegen's `node_modules` (no nested copy under `@phfaist/zoodb`). That
reader gives the same data for all 1,253 files after the re-indent (127 of them
re-indented) as for the originals, so the old FLM receives the same field values. The
renames change only the label text in two `description` fields. In the baseline pages
(`site/_site/c/qubit_subsystem_css.html`, `qudit_subsystem_css.html` of the read-only
checkout), the old FLM writes the label only inside the math handed to MathJax
(`\label{eq:parity} \tag*{(1)}`), and the equation's anchor is `id="equation-1"`. The
code pages therefore look the same. For these two codes, three things change by the
label name: the id MathJax 3 derives from the label (`tags: 'ams'`), the `description`
text in the search index (`dat/searchindex.json`) and the field's source text in the
dump (`dat/eczoodata.json`). The baseline index and dump each hold `\label{eq:parity}`
three times, for `qubit_css` and the two subsystem codes. Nothing in the zoo links to
the MathJax id. The search page shows raw excerpts of the index text (200 characters
around a match), so an excerpt that cuts the equation can show the new name; nothing
else visible or linked changes. Not done: a run of the old FLM itself. Its only
installed copy is in the read-only sitegen's `node_modules`, which this part does not
run.

**Deviations.** None from the brief's table. Two choices the brief left open: the
label names (above), and the trailers, which are the brief's (`Claude Fable 5.1`)
although the agent that wrote the commits is Opus.

**Open questions.**

- The names `eq:paritys` and `eq:parityqs`: Philippe (or the data's editors) may
  prefer others; a rename is a one-line commit.
- The two one-space differences of the YAML 1.2 reading need no data change: two
  spaces display as one in HTML. The text output (the search index) was not checked
  here. B2's comparison with the baseline's index diffs the texts of three codes only,
  so it checks these two values only if one of the three is `approximate_qecc` or
  `qubits_into_qubits` (the main session may ask B2 to take one of them).

**Review fixes.** The review (Opus, read-only) found no must-fix item and two should-fix
items, both about these Results; the three commits stand as they are.

- The editors' FLM guide of the sitegen, `flm_howto.md` line 82 (the clone's copy, the
  same as `main`), still teaches `\begin{itemize}[{⇒}]`, the form flm-rs refuses with
  `flm.lists.unknown-key` (the default bullet is drawn). The data's `README.md` (line
  87) and `CONTRIBUTING.md` (line 73) link to that guide. A finding for the sitegen
  port (B2, the site's documentation): line 82 becomes `\begin{itemize}[label={⇒}]`.
  Part A leaves the file as it is, since it is not data. The guide's three other list
  examples render as it says with the worktree's engine (`[(a)]`: `(a)`, `(b)`;
  `[i)]`: `i)`, `ii)`; `[{1]}]`: `1]`, `2]`; no diagnostic), and `[label={⇒}]` gives
  the bullet `⇒` with no diagnostic (`fix_A/howto_lists_label.mjs`, the reviewer's
  `review_A/howto_lists.mjs` with the `label=` form added; output
  `fix_A/howto_lists_label.txt`; `fix_A/` and `review_A/` are beside `partA/`).
- The second open question said that B2's comparison covers the two one-space values;
  it covers them only if B2 picks one of the two codes, and the question now says so.
- Two notes of the review, recorded and not acted on. The message of `fd2a8d992` puts
  "(not re-indented)" after both file names, although only `qubits_into_qubits.yml`
  is not re-indented; the commit is not amended (the rules), and these Results give
  the right reading. For question 3: if the data merges before the sitegen, later edits
  on `eczoo_data`'s `main` can bring the refused pattern back, since `js-yaml` accepts
  it; `zoodb-reindent-yaml --dry-run` on the data before the sitegen moves to 0.3.0
  finds them (on the clone's branch now: 0 values, 1,250 files checked).

**Review fixes, second round.** A second review (Opus, read-only, 2026-10-18; its
scripts in `review_A2/`) found no must-fix item and two should-fix items, both in the
safety paragraph above; the three commits stand as they are, and the verdict "safe"
stands. The scripts and outputs of this round are in `fix_A2/`.

- The paragraph said that only the id MathJax derives from the label changes. The
  baseline's search index and dump also carry the label text: `fix_A2/find_labels.mjs`
  finds `\label{eq:parity}` in three `description` strings of each, those of
  `qubit_css`, `qubit_subsystem_css` and `qudit_subsystem_css` (output
  `fix_A2/find_labels.txt`), so the two renamed codes change there by the label name.
  The search widget of the production site (`@phfaist/zoodbtools_search`, with
  `context_length: 200` in the sitegen's `jscomponents/search/setup.js`) shows raw
  substrings of that text around each match and has MathJax typeset them when there
  are fewer than 100 results, so an excerpt cut inside the equation can show the label
  name. The paragraph now says all of this.
- "the same data for all 1,253 re-indented files" now reads "for all 1,253 files after
  the re-indent (127 of them re-indented)".
- Three notes of the review, recorded and not acted on. For question 3: the code pages
  take `page.date` from `git log -1 --format=%at` of their file (zoodb 0.2.1's git
  last-modified processor, `site/src/c/c.11ty.js` line 150), and `sitemap.xml` writes it
  as `<lastmod>`; merging the data branch therefore moves the `<lastmod>` of the 127
  re-indented code pages to the commit's date, and no page displays that date (grep of
  `site/src`). The survey's "21 stale `doi`" and the setup's "17 stale and 1 expired"
  are both right: 21 `doi` entries have `stale_after` on or before 2026-10-17 UTC (the
  expired one included), and the setup counted at 02:03 UTC that day (rechecked on the
  tracked cache, `fix_A2/doi_stale_count.txt`). For B1: `scratch/zoodb-flmrs.tgz`
  already exists as a stale pack of 0.2.1 (360 files, from step 4's example check), so
  setup step 3 must overwrite it before the install.

### B1. The zoo and its pages

Done 2026-10-18 by B1's agent (Opus; node 23.7, the worktree at `c6b11b9`). Three
commits in the sitegen clone, with the two trailers; none in the data clone or the
handbook clone; nothing pushed. Logs, probes and page dumps:
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/B1/`
(below `B1/`; `B1/probes/` holds the scripts, run with plain `node` from the sitegen
clone, which import its modules by path).

**Setup step 3.** `yarn pack` overwrote the stale tarball: 75 files, 2,343,589 bytes,
version 0.3.0. With the root `resolutions` entry, `YARN_ENABLE_NETWORK=0 yarn install`
failed: 0.3.0 needs `yaml@^2.9.1`, and the copied cache holds `yaml` 2.6.1 and 1.10.2.
`yarn install` with the network then fetched one package from the registry,
`yaml@2.9.1` (the tarball came from the disk), in 22 s. One `node_modules/@phfaist/zoodb`,
0.3.0. Two side effects: Yarn removed from the clone's copied cache the six archives
only the old zoodb used (`@phfaist-zoodb-https-f088586fcd`, `glob` 11.0.0, `jackspeak`
4.0.2, `lru-cache` 11.0.2, `minimatch` 10.0.1, `path-scurry` 2.0.0), so E's baseline
build against 0.2.1 needs them copied again from the original's cache; and Yarn 3's
global mirror (`enableMirror`, on by default) wrote two archives outside the worktree,
`~/.yarn/berry/cache/yaml-npm-2.9.1-d61da744fe-8.zip` and
`@phfaist-zoodb-file-8af460e1f9-8.zip` (step 4's example port left `-10c0` copies
there). Later installs should pass `YARN_ENABLE_MIRROR=0` (replaced at the Closing:
`YARN_ENABLE_MIRROR=0` cannot install offline from the copied caches; installs use
`YARN_GLOBAL_FOLDER=$Y YARN_ENABLE_NETWORK=0`, see the Setup). The build scripts of the
install (Puppeteer, sharp) wrote nothing in `~/.cache/puppeteer` or `~/.npm/_libvips`.
The root `package.json` and `yarn.lock` were restored before the first commit and stay
restored (the copies with the resolution: `B1/package.json.resolutions`,
`B1/yarn.lock.resolutions`); the builds run against the installed `node_modules`.

**Files changed** (sitegen clone, 22 files).

- `eczoodb/fullopts.js`: `use_flm_engine`; `flm_options.load_wasm` the Node loader;
  no custom quote feature (the engine's `quote`).
- `eczoodb/eczoodb.js`: `use_flm_engine`; `flm_options.allow_unresolved_references`
  and `allow_unresolved_citations` (both `false`) where `makeStandardZooDb()` reads
  them; the former top-level `flm_allow_unresolved_*` keys were not read by 0.2.1
  either; `flm_options.engine.settings` (below); the reference displays of codes and
  code lists are the `name` and `title` fragments; the computed `short_name` is
  `zoo_flm_engine.make_fragment(…, { origin, layout: 'inline', standalone: true })`,
  the origin the name's with `field: 'short_name'` (the cut is a prefix, so the file
  position holds); messages use `.source`. `continue_with_errors: false` kept.
- `eczoodb/compile_codelist.js`: the sort keys are `snippet(f, 'text')` for a
  standalone field, `render_text([f]).text` otherwise.
- `eczoodb/stats.js`: `kingdom.name.source` in a label.
- `eczoodb/permalinks.js`: TEMPORARY placeholder hrefs for the spaces (G6, above).
- `eczoodb/render_code.js`, `render_domain.js`, `render_kingdom.js`:
  `zoo_flm_engine.render_document({ compose })`, `endnotes()` for `<RENDER_ENDNOTES/>`;
  each returns the render's result (`{ html, diagnostics, … }`) and takes
  `render_document_options`; `doc_metadata` and `additional_setup_render_context`
  dropped (the old render context).
- `eczoodb/render_codelist.js`: the same; the truncated columns and descriptions
  through `engine.truncate(f, { first_paragraph, chars })` (`chars` the source length
  when only the first paragraph is asked for), the automatic description an ad hoc
  fragment (origin label `codelist:ID#auto_description`); all of them released once
  the page is rendered.
- `eczoodb/render_code_hierarchy.js`: the names' text from the snippets.
- `eczoodb/render_utils.js`: `docrefs_placeholder_ref_resolver` removed.
- `site/src/c/c.11ty.js`: snippets for the title, the navigation and the citation box;
  the meta description is `render_text` of `truncate(description, { first_paragraph })`,
  released; the page prints its diagnostics with its URL; `code.name.source` in the
  BibTeX snippet; the error message's code ID (`data.code_id`, always `undefined`) fixed.
- `site/src/list/list.11ty.js`, `domain/domain.11ty.js`, `kingdom/kingdom.11ty.js`:
  text snippets for the titles; the diagnostics printed with the page's URL.
- `site/src/index.11ty.js`, `lists.11ty.js`, `templates/layout/base_page.11ty.js`:
  HTML snippets; `.source` for the sort keys; `whitespace_stripped()` became a `trim()`
  of the snippet.
- `site/src/concepts.11ty.js`: the glossary through `scan_results` (below).
- Minimal changes for B1's build, marked TEMPORARY in the code: `site/eleventy.config.js`
  does not import the bibliography collector (`generatebibtex.js` imports
  `@phfaist/zoodb/flm-js/…`, gone: G4) and sets `site_ecz_bibliorefs_collector = null`,
  and ignores `src/references.11ty.js`, `src/dat/bibreferences_bib.11ty.js`,
  `bibreferences_csl.11ty.js` and `randomcodedata.11ty.js` (B2); `site/src/index.11ty.js`
  leaves out the random code data (B2); `jscomponents/codegraph/eczcodegraph.js` imports
  `is_fragment` and has a stand-in `render_text_standalone` that throws, so that the
  module stays importable (the graph pages and `list.11ty.js` import its options; C).
- `site/package.json`: `shopt -s nullglob` in `private_add_use_strict_to_site_js_files`.
  Without Parcel, `_site/vv/*.js` matches nothing and `grep` exits 2, so
  `build-test-noparcel` exited 2 before this part as well.

**The engine's settings** (`eczoo_flm_engine_settings` in `eczoodb.js`, shared with the
browser apps so that `settings_hash` matches; each map given replaces the feature's
default map, so every entry is written out). Checked on 10 code pages against the
baseline (`B1/pages_new/`) and counted over the 1,155 code pages of both builds.

| item | baseline | engine default | set |
|---|---|---|---|
| float numbers | Figure I, Table I | Figure 1 | `floats.types.{figure,table}.number_format: { initial: 'I' }`: 26 figure and 8 table numbers, as the baseline; references `Fig. I` |
| headings in a field | `\subsection` `<h3>` | `<h2>` (`root_heading_level` 1) | `html.heading_tags: { section: h2, subsection: h3, subsubsection: h4 }`: 42 `<h3>`, as the baseline; the References and Footnotes headings stay `<h2>` |
| footnote counter | a, b, c | 1, 2, 3 | `xnotes.kinds.footnote` with `#{alph}` (no footnote in the data) |
| `\paragraph` | run-in | block `<h4>` | `headings.headings.paragraph.run_in: true` (no `\paragraph` in the data) |
| citation marks | `[1–4]`, `[4,5]`, sorted and compressed | the same | nothing: 13,431 marks in both |
| bullets | • - ▸ | the same | nothing (all 7 enumerates of the data give their labels) |
| `defterm` lead-in | `Term: ` | `#{term}: ` | nothing: 60 definitions in both |
| equation numbers | `(1)` | the same | nothing: 492 in both |
| external links | `target="_blank"` | no target | none exists (flm-rs has no link-target option) |

Differences left, none settable: the anchors are flm-rs's (`defterm-Finite_20Xfields`
→ `defterm-Finite_fields`, `sec--Finite-field-alphabet` → `sec--Finite-field_alphabet`,
`equation-1` → `eq-gen-singleton` for a labeled equation); the site's own links follow,
links from outside to the old anchors break. A no-break space before a citation mark
(the old a space; `~\cite` gives two, 05). Display math closes its paragraph. The whole
HTML contract (classes, attributes, images sized by CSS variables, image addresses
`/fig/…` before Parcel) is B2's stylesheet. The `sectioncontent` annotation of the
endnotes block is gone (the code page's `code-bibliography` division keeps its
classes). The meta descriptions equal the baseline's for 1,154 of 1,155 codes after
normalizing white space. The one difference is a correction: in `melas`, the source
`'\(\star\)'` (straight quotes; the YAML writes them `''`) now gives ‘\star’, while the
baseline typeset the closing quote as an opening one, ‘\star‘
(`B1/meta_description_diffs.txt`).

**The first full load.** Zero diagnostics on the test data and on the full data, under
`'continue'` and under `'abort'` (`B1/load_full_abort.log`): 1,155 codes, 87 code
lists, 3 domains, 18 kingdoms, 156 users, 14 spaces; 14,526 fragments; 170 labels (60
`defterm`, 56 `topic`, 26 `figure`, 20 `eq`, 8 `table`), 0 duplicates, 0 standalone
violations; 5,217 citations installed; 27 images; 2,027 snippets. No parse diagnostic,
so no data fix (A's table unchanged). The "61 defterms" are 61 `\begin{defterm}` in
the data, one in a YAML comment (`codes/classical/bits/cyclic/binary_cyclic.yml` line
23): 60 definitions, 60 distinct `defterm:` labels. The scan alone does not render the
fields: the renders meet the Errors below.

**Diagnostics of the builds.** No Warning in either build or in the load (no `flm.*`,
no `zoodb.*`). The Errors, all of one kind (measured under `'continue'`, below;
`B1/build_full_continue_diags.txt`, `B1/noentry_occurrences.tsv`):

| identifier | severity | count | example |
|---|---|---|---|
| `flm.citations.no-entry` | Error | 42: 25 citations in 22 data files, on 22 code pages, 8 code-list pages (`/all` included) and 1 meta description | ``codes/classical/bits/nonlinear/gray_map/gray.yml#description:14:23: error: the cited key `manual:{F. Gray, “Pulse Code Communication”, U.S. Patent 2632058 (1953)}` must have a bibliography entry`` |

This is an flm-rs finding (F1), not a data error. A citation key is read twice with
`spelling_identity`: at lowering, for `flm.citations.keys` and the scan, where it is
the key as written, and in a stage after the typography rewrite, for the lookup of the
render, where `"` and `'` have become `“ ” ’` and `--` has become `–`. The citations are
retrieved and installed under the written key, so the render does not find the 18
`manual:{…}` keys of the data that hold a straight quote or an apostrophe
(`B1/noentry_keys.txt`; reproduced on a bare engine, `B1/probes/manual_quotes.mjs`).
The content is right (the baseline's bibliography shows these entries typeset), so no
data change was made and nothing was worked around: under `'abort'` the full build stops
at the first of them (gray's meta description). The way out under the rules is a fix
in flm-rs (both readings at the same stage), Philippe's call. A data commit writing these
18 keys with the typographic characters would render the same, but it would work around
an flm-rs bug, which B1's row on the first full load rules out ("if the content is right
and flm-rs refuses it, reported (a finding, no workaround)"), so it needs his explicit
ruling and a row in A's table. A key with `--` fails the same way (the review's probe
`B1/review/probes/f1_check.txt`: `manual:{A--B}`); the data's one key with `--` and no
quote (`codes/classical/bits/covering/nearly_perfect.yml` line 25) is in a YAML comment.

**Load and build timings** (full data, warm). Load 23.6 s: YAML files 0.45 s, citation
manager 1.4 s, relations 0.02 s, git last-modified 9.4 s, FLM processor 4.1 s (fields
1.06, scan 0.52, index 0.63, retrieval 0.86 and compilation 0.05 from the caches,
graphics 0.25, snippets 0.74), searchable text 7.1 s, computed data 0.77 s; the first,
cold load took 43.8 s. Test build (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`):
4.9 s, 61 files, exit 0. Full build (`ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL
yarn build-simple-noparcel`) as committed: exit 1 after 31 s (F1). The measurement build,
the same with `continue_with_errors: true` in `eczoodb.js` (an uncommitted one-line
change, reverted; `git status` clean afterwards): exit 0, 44.2 s, peak resident size
748 MB (`/usr/bin/time -l`), 1,420 files; Eleventy's render 9.8 s, of which the code
pages 5.2 s (1,155) and the code lists 4.4 s (87); the zoo's load inside it 28.6 s.

**The pages.** Every `render_document()` page prints its diagnostics with its URL
(`format_diagnostic`); the ad hoc fragments (code-list truncations and descriptions,
the meta descriptions' truncations, the glossary's terms and bodies) are released when
the page is done. In the measurement build's `_site/`: no `<flm:` marker, no `flm:`
followed by a digit, no `zoodbobjectref:` in any HTML page (the 14 placeholder hrefs
are in `dat/eczoodata.json`, the dump's index).

| pages | baseline | B1 |
|---|---|---|
| HTML in all | 1,277 | 1,276 |
| code pages `/c/` | 1,155 | 1,155 |
| code lists `/list/` (and `/all`) | 86 (+1) | 86 (+1) |
| domains, kingdoms | 3, 18 | 3, 18 |
| single pages | 15 | 14: `references.html` not built (B2) |
| `dat/` | 5 | 2: `eczoodata.json`, `searchindex.json` (the BibTeX, CSL and random code data are B2's) |

**The glossary.** `scan_results.objects`, in the zoo's order: per term, the link to
the object's page with `#` and the anchor, the term (`display`) and the body (`body`
with `body_origin`, layout `blocks`) as fragments of the page, the defining object's
name, and the other objects whose `refs` hold one of the term's labels. Against the
baseline's `/concepts`: 60 terms, the same terms in the same order, 60 bodies, 736
"Referenced in" entries, 159 citations. The terms are now typeset (the old page showed
them as verbatim text: `Construction \(A_4\)` raw).

**What G1 to G3 change on the real data** (`B1/gaps_numbers.txt`). G1: the 60 terms
all have a body and an anchor; 53 carry a second label (`topic:…`), which the entry's
"Referenced in" counts. G2: 5,233 cited keys in the zoo, 11,447 object–key pairs,
2,278 keys cited by more than one object; a list of first citations only would miss
6,214 pairs (the references page's backrefs, B2). G3: not used by B1's pages (the code
lists place their endnotes, as `render_endnotes: true` did; the meta description is
text, without pieces). Of the 1,155 descriptions, 610 have more than one paragraph; no
first paragraph holds a float, a footnote or a `\label`; 454 hold a citation and 164 a
reference.

**Retrievals.** Both builds: `Pass 1: 4739 cached, 478 to fetch` (the local `manual`
348 and `preset` 130 sources, no network), `Pass 2: 2124 cached, 0 to fetch`,
`Retrieved citations: 7341 considered, 0 failed`; no network. The `eczoodb` tests
reached the network: their cache folder is relative to the working directory
(`eczoodb/_TEST_zoodb_citations_cache/`, ignored, present in the original checkout,
not among the setup's copies), so the first run retrieved 109 entries (53 `arxiv`, 56
`doi`) into a new copy in the clone. The install fetched `yaml@2.9.1`.

**The `eczoodb` tests for B2** (`cd eczoodb && yarn test`, 76 s; `B1/eczoodb_tests.log`):
72 passing, 2 pending, 3 failing. `test_eczoodb.js` "should have correct computed
property values" reads `short_name.flm_text` (`.source` now); `test_render_code.js` and
`test_render_codelist.js` call `.startsWith` on the renderers' result, now `{ html, … }`.
The tests still pass the top-level `flm_allow_unresolved_*` keys (never read).

**For B2 and C.** The searchable-text assembler logs 17 objects with a diagnostic, by
count only (its own `'continue'`): most likely F1's keys (22 code pages hold them). The
search index is 2.35 MB (baseline 4.44 MB) and the dump 7.65 MB (baseline 5.63 MB). The
computed `short_name`s (1,155 fragments per load) are made again on each reload and
never released (dev mode). `jscomponents/gitzoopreview/renderObject.js` and
`randomcode/generate_data.js` import the removed `docrefs_placeholder_ref_resolver`.

**Deviations.** (1) The spaces' placeholder hrefs (G6) are a workaround in the clone,
marked TEMPORARY: without them nothing loads, and the package has no way to leave an
object without a page out of the index. (2) The full build as committed does not exit
0 (F1); the B1 checks on the full data come from the measurement build under
`'continue'`, an uncommitted change. (3) The first commit is checked by loading the zoo
(the site's pages were still on the old API); the second builds the test data with the
glossary ignored, the third builds it all. (4) The minimal B2/C changes listed above,
and the `nullglob` fix of a pre-existing script bug. (5) Yarn's global mirror wrote two
archives outside the worktree (Setup step 3 above; since the Closing, later installs set
`YARN_GLOBAL_FOLDER=$Y YARN_ENABLE_NETWORK=0`, which moves the mirror into the
scratchpad). (6) The `eczoodb` tests retrieved 109 entries over the network
(53 `arxiv`, 56 `doi`): they read their cache from `eczoodb/_TEST_zoodb_citations_cache/`,
relative to their working directory, and the setup had not copied it. The setup block
now copies it for any later setup. The clone's copy, written by that first run, has 111
lines, as the original's does, and serves the tests offline, so it was not copied again.

**Open questions.** G6: the package change (an object whose `object_href` returns
`null` gets no index entry) or another href for the spaces (answered: the package
change, see the Closing below). F1: an flm-rs fix
(Philippe's call; F1 goes in 05's "Findings to report" table, the main session's edit),
or the data commit of the 18 keys (prepared in `B1/noentry_occurrences.tsv`, not made).
That commit would be a workaround of the flm-rs bug under B1's own row, so it can be
made only on Philippe's explicit ruling, with a row in A's table; a key with `--` is
affected as well. Until F1 is decided, full-data builds under `'abort'` exit 1.
`target="_blank"` for external links: a site script, or left as it is. (Whether the
setup copies `eczoodb/_TEST_zoodb_citations_cache/` is settled: it does, deviation (6).)

**Commits** (sitegen clone, branch `zoodb-flmrs`): `9311d27` The zoo on zoodb 0.3.0:
the FLM engine, its settings, the setup (5 files); `9ff93ff` The pages on the FLM
engine: render_document(), snippets, truncations (16 files); `70558e5` The glossary
from the FLM processor's scan results (2 files).

**Review fixes.** The review (Opus, read-only, 2026-10-18; its scripts and its copy of
the measurement build's `_site/` in `B1/review/`) gave the verdict "fix first": two
must-fix items, both waiting on rulings and not done here, and five should-fix items,
all done. One commit in the sitegen clone, with the two trailers: `7847ecc` The glossary
releases its fragments whatever throws (1 file). No data change (A's table unchanged).
The scripts and logs of this round are in `B1/fix/`.

- *G6 (must-fix, not done).* The spaces' placeholder hrefs work around a package gap,
  which the rules forbid; marking them TEMPORARY does not change that, and they also
  make the site-wide `zoo_object_permalink()` stop throwing for `space`. The review
  accepts them only until the main session rules on G6, and recommends the package
  change: the processor leaves out of the index an object whose `object_href` returns
  `null` (a test, a line in the docs, a `CHANGELOG.md` entry), the worktree packed and
  installed again, then `permalinks.js` returns `null` for `space`, with the TEMPORARY
  comment removed. That change is in the worktree's `src/`, which this round may not
  edit, so the placeholder stays. Keeping a placeholder for good needs Philippe's
  explicit ruling.
- *F1 (must-fix, not done).* B1's check "the two builds exit 0" fails on the full data
  until F1 is decided; re-run here, the full build as committed still exits 1 at gray's
  meta description. The review confirmed F1 in the crate: the key of the
  `CitationRequest` reaches the provider (`rust/zoodb-flm-wasm/src/host.rs:124`) after
  the typography rewrite, while `flm.citations.keys` reports it as written. The paragraph
  on the diagnostics and the open questions now say that the data commit would be a
  workaround and that `--` is affected too. Recording F1 in 05's "Findings to report"
  table is the main session's edit.
- *The glossary's fragments (done, `7847ecc`).* `concepts.11ty.js` made the term and
  body fragments before its `try`, so a `make_fragment` (or a permalink) that throws
  partway, such as an Error in a body under `'abort'`, left the fragments made so far
  unreleased (B2 measures dev-mode memory across rebuilds). The `try` now opens before
  the loop; only code lines are re-indented, the text of the templates is unchanged
  (`git diff -w`: 3 lines in, 2 out). On a mock engine whose third `make_fragment`
  throws (`B1/fix/probes/concepts_release.mjs`, output `concepts_release.txt`), the new
  template releases the two fragments made, the committed one none; without a throw
  both release all four.
- *melas (done).* The sentence on the meta descriptions read as if the new output were
  wrong; it now says that the baseline's was (above).
- *The tests' citations cache (done).* Deviation (6) added; the setup block copies
  `eczoodb/_TEST_zoodb_citations_cache/` for any later setup.
- *F1's open question (done).* Reworded as above.
- *Yarn's global mirror (done).* The setup text made every later install, sitegen and
  handbook, `YARN_ENABLE_MIRROR=0 yarn install`; the Closing replaced that with
  `YARN_GLOBAL_FOLDER=$Y YARN_ENABLE_NETWORK=0 yarn install`, since with the mirror off
  Yarn misses every copied archive offline. **For Philippe:** B1's install wrote two
  files outside the worktree, which agents may not delete; they are still there (dated
  2026-10-18 21:47) and can be deleted:
  `/Users/philippe/.yarn/berry/cache/yaml-npm-2.9.1-d61da744fe-8.zip` and
  `/Users/philippe/.yarn/berry/cache/@phfaist-zoodb-file-8af460e1f9-8.zip`.

The review's verdicts on the open questions: G6, the package change; F1, a fix in
flm-rs (the data commit only on Philippe's ruling; until then B2 measures under
`'continue'`, as B1 did); `target="_blank"`, Philippe's call (a site script that adds
it would work around flm-rs, so either the difference is accepted or it is listed as a
possible flm-rs option, with no request now); the tests' cache, copied in any later
setup (done above). It accepts deviations (2) to (4), the `nullglob` fix included; it
calls (6) a setup omission, and the writes of (5) a break of the rule that nothing
outside the worktree is written, though unintended (the fetch of `yaml@2.9.1` itself is
the brief's fallback).

Checks re-run at `7847ecc` (logs in `B1/fix/`):

| check | result |
|---|---|
| test build (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`) | exit 0, 61 files (35 HTML) in 17.3 s, peak resident size 507 MB; no diagnostic, no Warning; no `<flm:`, no `flm:` followed by a digit; `Pass 1: 63 cached, 4 to fetch` (local sources), `Retrieved citations: 113 considered, 0 failed` (`build_test.log`) |
| full build as committed (`'abort'`, LOCAL cache) | exit 1 at gray's meta description (F1), 47.9 s, 785 MB (`build_full_abort.log`) |
| measurement build (`continue_with_errors: true` for the run only, set and reverted with `sed`; `git status` clean after) | exit 0, 1,420 files in 38.6 s, 793 MB; 43 `flm.citations.no-entry` lines (the 42 Errors, gray's printed twice), no Warning; `_site/` equal file for file to the review's copy of the earlier measurement build (`diff -rq` empty, 1,276 HTML pages; `concepts.html` byte-identical: 60 terms, 736 "Referenced in" items); no marker; `zoodbobjectref` in no HTML page (`build_full_continue.log`) |
| retrievals | both full builds: `Pass 1: 4739 cached, 478 to fetch` (the local `manual` and `preset` sources), `Pass 2: 2124 cached, 0 to fetch`, `Retrieved citations: 7341 considered, 0 failed`; no network |
| `eczoodb` tests (`cd eczoodb && yarn test`) | 72 passing, 2 pending, 3 failing (the same three, for B2), offline: each of the manager's 14 runs fetched 3 or 4 entries from the local sources (`manual`, `preset`, `qecdborg`), 113 considered, 0 failed; the test cache keeps its 111 lines (`eczoodb_tests.log`) |
| git state | sitegen clone: `status --short` empty, root `package.json` and `yarn.lock` equal `main`, `7847ecc` on top of `70558e5`; data and handbook clones unchanged; nothing pushed; the originals: `status` empty, heads `a2ad583`, `7ade20a2f`, `c73b681` (read with `--no-optional-locks`) |

Notes of the review, recorded and not acted on. At 22:28:12 an entry was created and
removed in the original `eczoo_sitegen/.git` folder (its mtime changed; no file inside
is newer, status and HEAD unchanged), most likely a git command without
`--no-optional-locks`: agents should pass the flag on the originals (this round's only
git calls there, a final `status` and `rev-parse`, did). Eleventy computes a code page's
`page_description_text` twice, so each meta description is truncated and rendered twice
(worth memoizing per code, B2). `eczoodb/compile_codelist.js:214`: the sort keys'
`render_text([value])` drops its diagnostics silently. The `\paragraph` run-in gap comes
from the engine's stylesheet, which B2 delivers. The searchable-text assembler's 17
objects are not verified as F1's (B2 lists them). When B2 moves the tests'
`flm_allow_unresolved_*` keys into `flm_options`, the tests start allowing unresolved
references and citations, and their expectations may change. The 14 placeholder hrefs
are in `dat/eczoodata.json`'s index, which C's apps load (they go with G6). The other
"Table I" counts (plain text) differ by one across code pages (37 against 36), for E's
comparison.

**Closing.** Done 2026-10-19 by B1's closing agent (Opus; node 23.7, the worktree at
`c6b11b9`), which took over the uncommitted work of a first closing run cut off by a
usage limit, checked it against the rulings and finished it. Logs, probes and that run's
diffs (`prev_run/`):
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/B1close/`
(below `B1close/`). The main session ruled on the review's two must-fix items on
2026-10-18: G6 is fixed in the package; F1 gets no workaround (the data is not changed
and no key is rewritten anywhere), goes into 05's "Findings to report" table, and the
sitegen clone gets an explicit diagnostic switch, so that B2 to E can build and inspect
the full site while F1 is open.

*The package change (G6; committed by the main session as `1d7230c`).* In
`src/dbprocessor/flmprocessor.js` (`_index_entries`), an object whose `object_href`
returns exactly `null` gets no index entry in that context, and neither do the labels of
its fields (their href would be the object's). Any other value that is not a string
still goes to `engine.set_index()`, which refuses it with its `TypeError` (`set_index():
an entry is { label, href, display }, got …`, the entry's label included), so a
forgotten `return` is still caught. The first closing run's draft (91 lines: a
`TypeError` of the processor's own, a per-context map of the labels left out, and a new
`zoodb.refs.unresolved` Warning for the references to them) was more than the ruling
needs and was replaced by this one (23 lines in, 6 out, 14 of them documentation). The
other consumers of the hrefs, checked: `object_scan()` and `scan_results` hold no href
(the object stays in the zoo and in the scan results, unchanged); the dump's index is
the installed one (`engine.dump()`), so it has no entry for such an object, whose data
is dumped as before; `_zoodb` holds no href; the searchable text renders through the
same index (`render_text`), where a reference to such an object is unresolved as in
HTML; the standard setup passes `zoo_permalinks.object` as the `default` context's
`object_href` as it is (its descriptions in `src/std/stdzoodb.js` and `doc/std.rst` do
not mention `null`; not edited, outside this round's files).

What a `\ref` to such an object (or, from another object, to a label of its fields)
gives: in that context's renders the engine's `flm.refs.unresolved` ("the reference
points at the label `utensil:spoon`, which is not defined"), an Error under the default
`unresolved: 'error'` (thrown under `'abort'`) and a Warning under `'warn'` (the
standard setup's `allow_unresolved_references`), the label shown in a
`data-flm-style="unresolved-reference"` span; the composer's `ref()` and `refhref()`
give `zoodb.ref.unresolved` (`refhref()` returns `null`). The processor's own check does
not report it: `zoodb.refs.unresolved` is for a label that neither the zoo nor the index
defines, and the object is in the zoo. A context where the object has a page resolves
it, and a label of its fields resolves within its own document. The new
`test/test_dbprocessor_flmprocessor_pageless.js` (7 tests over the simple test data, the
utensils without a page in `default` and with one in a second context): the `null` tests
fail on the committed processor (their `before` hook meets the `set_index()` refusal),
all pass on the new one. Also: a paragraph in step 3 and a sentence on the `contexts`
option in `doc/zoodb.dbprocessor-flm.rst`, an entry under 0.3.0 in `CHANGELOG.md`, the
processor's JSDoc, and G6's row of the gaps table set to done. `yarn lint` clean,
`yarn test` 474 passing (467 before, 7 new).

*F1.* A row in 05's "Findings to report" table: the two readings of the key, flm-core's
`elements.rs` and `entries.rs` at `5de1c198` and the crate's `HostCitations::answer`,
the probes `B1/probes/manual_quotes.mjs` and `B1/review/probes/f1_check.txt`, the counts
(18 keys, 25 citations in 22 data files, 42 Errors), the ruling and the switch. The data
clone is untouched.

*The switch* (sitegen `f2ec92c`). With `ECZOO_FLM_CONTINUE_WITH_ERRORS=1` in the
environment, `eczoodb/eczoodb.js` sets the zoo's `continue_with_errors` to `true` (the
error policy `'continue'`); unset, it stays `false`, as committed. It is read as
`((globalThis.process?.env?.ECZOO_FLM_CONTINUE_WITH_ERRORS ?? 0) != 0)`, in the style of
the other `ECZOO_*` variables of `site/eleventy.config.js`, through `globalThis` so that
a browser bundle neither inlines nor polyfills it; a comment names F1. `docs/site.md`,
where the other `ECZOO_*` variables are described, gains a row and a paragraph: the
switch is for inspection builds while F1 is open, and the site itself is built without
it. The pages still print their diagnostics.

*The permalinks* (sitegen `5ae77b8`). `eczoodb/permalinks.js` returns `null` for
`space`, the TEMPORARY comment and the `zoodbobjectref:` placeholder removed. Its
callers: every other call of `zoo_object_permalink()` names a code, a domain, a kingdom
or a code list, and the search widget resolves codes only (the searchable text's
`object_types` is `['code']`); the two loaders that prefix the site's address to the
permalink (`eczoodb/scripts/try_load_zoo.js`, `scripts/_helpers/helperEcZooLoader.js`)
pass `null` through (else `https://errorcorrectionzoo.orgnull` would be the spaces'
index href); the glossary throws if a term is ever defined in an object without a page
(the spaces define none). `pdfexport/main.js` prefixes the same way but is on the old
API (question 7) and was left. Nothing relied on the former throw for `space`.

*Pack and install.* `yarn pack`: 75 files, 2,344,001 bytes, version 0.3.0
(`pack_final.log`, its SHA-256 in `pack_final.sha256`). `YARN_ENABLE_MIRROR=0
YARN_ENABLE_NETWORK=0 yarn install` failed: all 1,190 archives "can't be found in the
cache", though the copied cache holds them (`install_final1.log`). With the mirror off,
Yarn looks a package up in the project's cache under its versioned file name
(`<slug>-8.zip`) instead of the checksum name the copied cache uses
(`<slug>-<checksum>.zip`), as the sources of Yarn 3.3.0 and 4.6.0 show
(`getLocatorPath()`), so the handbook's install (D) would fail the same way. The
fallback the task names, the network with the mirror off, would have fetched the whole
tree again and dropped the copied archives as unused, so it was not run. The install ran
offline with the mirror on and moved into the scratchpad,
`YARN_GLOBAL_FOLDER=…/B1close/yarn-global YARN_ENABLE_NETWORK=0 yarn install`: nothing
fetched, nothing written outside the worktree and the scratchpad. Two stale copies had
to go first, each of which let an install succeed with the previous package: the
mirror's copy of the earlier tarball
(`yarn-global/cache/@phfaist-zoodb-file-8af460e1f9-8.zip`, from the first closing run,
which Yarn reused for the same locator, so that the lock got the old checksum back) and,
once the cache held the new archive, the linked `node_modules/@phfaist/zoodb`, which the
linker does not relink for an unchanged locator; the overlay lock's
`@phfaist/zoodb@file:` entry was removed as well. Then one
`node_modules/@phfaist/zoodb`, version 0.3.0, whose `src/` equals the worktree's
(`diff -rq` empty; `install_final2.log` to `install_final4.log`). The Setup paragraph
above now gives this procedure, and D and E name it in their install commands, where the
review's nit asked for `YARN_ENABLE_MIRROR=0`. `~/.yarn/berry/cache`: no file newer than
B1's two archives (`@phfaist-zoodb-file-8af460e1f9-8.zip`, 2026-10-18 21:47:15, and
`yaml-npm-2.9.1-d61da744fe-8.zip`, 21:47:33).

Checks (logs in `B1close/`):

| check | result |
|---|---|
| package | `yarn lint` clean, `yarn test` 474 passing (`lint_test_final.log`) |
| test build (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`) | exit 0, 61 files (35 HTML) in 3.7 s, peak resident size 514 MB; no diagnostic, no `<flm:`, no `flm:` followed by a digit; `Pass 1: 63 cached, 4 to fetch` (local sources), `Retrieved citations: 113 considered, 0 failed` (`build_test_final.log`) |
| full build with the switch (`ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL ECZOO_FLM_CONTINUE_WITH_ERRORS=1 yarn build-simple-noparcel`) | exit 0, 1,420 files (1,276 HTML) in 40.4 s, peak 831 MB; 43 diagnostic lines, all `flm.citations.no-entry` Errors (F1's 42, gray's printed twice), 0 Warnings, no other diagnostic; no marker; `dat/eczoodata.json` holds no `zoodbobjectref`, its index 1,589 entries (1,419 objects and 170 labels), none for the 14 spaces, which the dump's objects keep; against the review's copy of the measurement build only `eczoodata.json` differs, by the 14 spaces' entries (objects, citations, graphics, snippets and settings hash equal); retrievals as in B1, `Pass 1: 4739 cached, 478 to fetch`, `Pass 2: 2124 cached, 0 to fetch`, `7341 considered, 0 failed`, no network (`build_full_switch.log`, `build_full_switch_diags.txt`, `dump_index_check_final.txt`, `dump_diff_vs_review.txt`); run again last, 37.8 s, 849 MB, the same counts, so `site/_site/` holds this build |
| full build as committed (no switch, `'abort'`) | exit 1 after 29.0 s, peak 797 MB, "Wrote 0 files": the `ZooFlmError` of gray's meta description (`flm.citations.no-entry`, the key `manual:{F. Gray, “Pulse Code Communication”, …}`), F1 (`build_full_default.log`) |
| `eczoodb` tests (`cd eczoodb && yarn test`) | 72 passing, 2 pending, 3 failing (the same three, for B2), 14.1 s; offline: the manager's 14 runs read the local sources only (`manual`, `qecdborg` through a `file:` URL, `preset`), 113 considered, 0 failed; the test cache keeps its 111 lines (`eczoodb_tests_final.log`, `eczoodb_tests_final_debug.log`) |
| git state | worktree: the processor, the new test, the doc page, `CHANGELOG.md`, this brief, 05 and `HANDOVER.md` modified, nothing else; sitegen clone: `5ae77b8` and `f2ec92c` on `7847ecc`, `status --short` empty, root `package.json` and `yarn.lock` equal `main` (the overlay copies in `B1close/package.json.resolutions` and `yarn.lock.resolutions`); data and handbook clones unchanged; nothing pushed; the originals: `status` empty, heads `a2ad583`, `7ade20a2f`, `c73b681`, no file newer than this round's start |

The default full build still exits 1, at gray's meta description, because of F1, and
will until flm-rs reads a citation key the same way for the scan and for the render;
until then the later parts build the full site with the switch. Of B1's open questions,
G6 is answered (the package change above); F1 stays for Philippe (a fix in flm-rs; the
data commit of the 18 keys only on his explicit ruling), with the switch for the time
between; `target="_blank"` stays his call. New, for Philippe (question 10): whether the
switch may stay. Deviations: (1) the processor change is simpler than the first closing
run's draft (above); (2) the installs keep Yarn's mirror on, moved into the scratchpad,
instead of `YARN_ENABLE_MIRROR=0`, which cannot install offline from the copied caches,
and the network fallback was not run; D and E say so instead of naming
`YARN_ENABLE_MIRROR=0`.

### B2. Presentation, exports, scripts, tests, dev mode

Done 2026-10-19 by B2's agent (Opus; node 23.7, the worktree at `1d7230c`). Nine commits
in the sitegen clone, with the two trailers; none in the data clone or the handbook
clone; nothing pushed. One package change in the worktree (G7 below; uncommitted, for
the main session), and two more by the review fixes (G8 and G9, at the end). Logs,
probes and the copy of the final full build's `_site/`:
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/B2/`
(below `B2/`; `B2/probes/` holds the scripts, run with plain `node` from the sitegen
clone; `B2/site_final/_site/` the full build compared below). Every build, test and
probe ran with `TMPDIR` set to `B2/tmp/` (the bibliography's Anystyle helper makes a
temporary folder there, and Node keeps its compile cache there).

**Bookkeeping.** The hash of the G6 package commit, `1d7230c`, is filled in B1's Closing
and in `HANDOVER.md` (two places there).

**The install at the start.** The installed package's `src/` differed from the
worktree's at `1d7230c` in one file: the tarball predated the commit's JSDoc lines in
`src/std/stdzoodb.js` (`object()` may return `null`). The worktree was packed and
installed again by the Setup's procedure (`B2/repack_install.sh`: the overlay of the
root `package.json` and `yarn.lock` from `B1close/`, the lock's `@phfaist/zoodb@file:`
entry, the mirror's copy of the tarball and `node_modules/@phfaist/zoodb` removed,
`YARN_GLOBAL_FOLDER=…/B1close/yarn-global YARN_ENABLE_NETWORK=0 yarn install`, the root
files restored); then once more after G7. Each time: nothing fetched, one
`node_modules/@phfaist/zoodb`, 0.3.0, its `src/` equal to the worktree's.

**Commits** (sitegen clone, branch `zoodb-flmrs`, on `f2ec92c`):

- `00e4fe9` The bibliography exports on the FLM engine: references page, BibTeX,
  CSL-JSON (7 files). `eczoohelpers/eczcollectbib/collectbib.js`:
  `collectFromZooFlmProcessorEncountered()` reads every key each object cites from
  `scan_results.objects` (`cited`, one entry per key and field), each described as
  before (`encountered_in.resource_info` `{ object_type, object_id, source_path }`,
  `what` the field's origin label; serializable), so the scripts' filters keep working.
  `generatebibtex.js`: the import of the deleted `flm-js` table replaced by a
  `LatexSpeller`, an FLM engine of its own with `latex-recomposed: { unicode: 'replace'
  }`, one `render_latex()` per distinct character, cached; LaTeX's six syntax characters
  (`\ % # $ _ ^`) keep the spellings the former table gave them; a character the engine
  cannot spell is `?`, as before. `generateBibtex()` (and `generateBibtexEntries()`) is
  now async: it creates the speller's engine and frees it before it returns. The
  ready-formatted citations (`collectBibRefs.js --keep-manual`) are written by that
  engine's `render_latex()` (the hooks `\flmHref`, `\flmUrl`, which the former
  recomposer wrote too). `site/src/references.11ty.js`: `render_document({ compose })`,
  the compiled citation texts as ad hoc fragments released when the page is done, the
  backrefs through `ref()`, an object without a page left out (none cites).
  `site/eleventy.config.js` imports `prepareEczooBibReferences` again and no longer
  ignores the three bibliography pages; `bibreferences_bib.11ty.js` awaits the entries;
  `scripts/bibrefs/collectBibRefs.js` loses the `flm-js` recomposer. The eczcollectbib
  tests gain two (a speller run; a non-ASCII character outside `generateBibtex()`
  throws).
- `30a6016` The random code data on the FLM engine; the B1 scaffolding of the site's
  configuration removed (3 files). `jscomponents/randomcode/generate_data.js`: the first
  paragraph of each description cut at 500 characters by `engine.truncate()`, rendered
  by `render_document({ compose, render_options })` (G3 below), released; `snippet(name,
  'html')`; the import of the removed `docrefs_placeholder_ref_resolver` gone.
  `site/src/index.11ty.js` embeds the data again; `eleventy.config.js` is back to the
  original's (no ignore left).
- `346c4b6` Meta descriptions computed once per code; sort keys' warnings printed;
  computed short names released on reload (3 files). `site/src/c/c.11ty.js`:
  `page_description_text` memoized per code in a `WeakMap` keyed by the processor's
  `scan_results` (replaced by every processing of the zoo, a reload included, so a
  description that refers to an object that changed is computed again).
  `eczoodb/compile_codelist.js`: the sort keys print the warnings of their
  `render_text()` with the list and the code (an Error throws, as everywhere under
  `'abort'`). `eczoodb/eczoodb.js`: the computed `short_name` marks the fragments it
  makes (a `WeakSet`), and `EcZooDb.update_objects()` releases those of the codes a
  reload replaces, once the update has succeeded.
- `efd561a` The random code data computed once per processing of the zoo (1 file): the
  same memo for the home page and `dat/randomcodedata.json`.
- `e516670` The presentation on the FLM engine's HTML: its stylesheet, the EC zoo's
  look, MathJax 4 (10 files). `site/src/dynamic_style/flm.css.11ty.js` (new):
  `/dynamic_style/flm.css`, one comment line and `html_stylesheet()`;
  `templates/layout/base_page.11ty.js` links it before `main.scss` and writes
  `html_scripts()` in `<head>` (unsqueezed); `flm-formatting.scss` rewritten,
  `genericpage.scss`, `codelist-page.scss` and
  `jscomponents/codegraph/CodeGraphInformationPane_style.scss` likewise (the table
  below); `jscomponents/mathjax/setup.js` rewritten (below); `docs/site.md`,
  `docs/jscomponents.md`, `docs/architecture.md` follow.
- `20ad41e` The eczoodb tests on the FLM engine (6 files): below.
- `fa6bab1` The scripts on the FLM processor's scan results; the FLM howto's custom
  bullet (4 files). `scripts/zooStats.js` counts the references to each code from
  `scan_results` (each object's `refs` by label) and prints `.source`; the obsolete
  `query_bib_references.js` reads every object's cited keys from `scan_results`;
  `llm/gen_inputs_v1.js` reads `introduced.source`. `flm_howto.md` line 82:
  `\begin{itemize}[label={⇒}]`.
- `5012e97` BibTeX export: a character without a LaTeX spelling logged by its identifier
  (1 file): the speller's debug line names the code point and the identifiers, so that
  no line of a build log reads as an FLM error (8 such characters in the full data:
  U+01CE, U+0301, U+0303, U+0308, U+1EAF, U+1EC5, U+202F, U+FFFD).
- `ce83723` The background of code through the FLM engine's custom property (1 file):
  `--flm-verbatim-background`, so that code as a block gets the translucent background
  too.

The scripts are not run: their loader (`scripts/_helpers/helperEcZooLoader.js`) reads
the tracked `_zoodb_citations_cache/`, which a run would write to and whose stale
entries could reach the network; they are linted (no error).

**The package change (G7; for the main session to commit).** The random code data meets
a defect of the package's truncation, which no earlier page met (B1's truncations keep
the whole first paragraph or the code lists' long budgets). `truncate()` (the crate's
`rust/zoodb-flm-wasm/src/truncate.rs`) descended into every argument of a command and
cut in any of them, closing the group: on the full data 18 previews of 1,155 failed to
parse again with 21 Errors (`\cite{arxiv:1108.0 …}`, a citation key cut:
`flm.citations.no-entry` ×16; a note of a second `\cite` cut, its keys lost:
`core.arguments.missing-mandatory-argument` ×3 and `flm.citations.no-key` ×2;
`\hyperref[topic:quantum …]`, a target cut: `flm.refs.unresolved` ×1;
`B2/logs/randomcode_diags_before.txt`), which under `'abort'` would stop the default
build once F1 is fixed. The old FLM's truncator descended only into a command's main
text argument and kept the others whole. The fix, with flm-core's public
`apart_from_text_of()` (`model::aspects`), the aspect flm-core already uses for the
plain text of titles: what a command's element declares apart from the text around it (a
`\cite`'s keys, a `\ref`'s or `\hyperref`'s target, a `\href`'s address, a footnote's
content) counts nothing and is never cut; a command is cut only inside its last
argument, and a cut that would fall in an earlier one leaves the command out whole (a
citation chunk `\cite{a}\cite{b}` is one command); a verbatim group is kept whole or
left out, as mathematics. Files: `rust/zoodb-flm-wasm/src/truncate.rs` (the rule),
`rust/zoodb-flm-wasm/src/engine.rs` (a test, 6 cases, each truncation parsed again
without a diagnostic), `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm` and `BUILD_INFO.json`
(`yarn build:wasm flm`, 13.3 s: 5,157,363 bytes, +4,213; `flm_core_git` `5de1c198`, not
dirty; path check green), `src/zooflm/engine.js` (the JSDoc of `truncate`),
`test/test_zooflm_engine.js` (a test: a key, a target and an earlier argument never
cut), `doc/zoodb.zooflm.rst` ("Truncation"), `CHANGELOG.md` (a bullet). After it, the
random code data has one diagnostic on the full data, gray's F1 Error.

**Settings and options against the baseline.** The zoo's engine settings are unchanged
(`eczoo_flm_engine_settings` of B1; settings hash unchanged). New options: the BibTeX
speller's engine `{ settings: { 'latex-recomposed': { unicode: 'replace' } } }` (the
zoo's engine writes characters as UTF-8 with the default `declare`, and `render_latex()`
takes no per-call render options, so the zoo's settings would have had to change, and
with them the handbook's, D); the random code previews' `render_options: { pieces: {
exclude: ['flm.xnotes.list.footnote', 'flm.citations.bibliography'] } }`.

*G3, what each preview leaves out.* The random code data: the lists of footnotes and of
citations (not built, no `zoodb.compose.piece-not-placed`), and the floats by the cut to
the first paragraph (no preview holds a `<figure>`); its citation marks stay, linking to
`#citation-N`, which is not on the home page: 443 of the 1,155 previews carry marks,
which the former renderer inhibited (`inhibit_render_endnote_marks`), and flm-rs has no
render option that leaves them out (Part 0; no request). The meta descriptions: text
(`render_text`), which leaves out every piece; a citation is its number, as in the
baseline. The code lists' truncated descriptions (B1) exclude nothing: the list page
places their endnotes, as `render_endnotes: true` did. The code graph's information pane
is C's.

*The stylesheet.* The pages link `/dynamic_style/flm.css`, 15 of the engine's 17 style
definitions: all but the backend's page style (`flm.html.style.page`, which
`html_stylesheet()` leaves out) and `flm.headings.style`, which has no parts, all in
`@layer flm`, then `main.scss`. Every rule of
the site is outside that layer, so it wins over the engine's whatever its specificity,
and so do the site's element rules (`p`, `a`, `h2`, `code`, `dt`: the site's link
colors, paragraph spacing and heading sizes stay). The table maps each old selector (the
survey's about 50 in `flm-formatting.scss`, and those of the other files):

| old selector | new counterpart |
|---|---|
| `.paragraph-in-list` (and `:first-child`, `:last-child`, `::before`) | kept: the site's own class (the value lists of `render_code.js`), not FLM's |
| `.p-block`, `.p-block:first-child`, `.p-block:last-child` | `:root { --flm-block-spacing: 2*$parskip-half-length }` (the engine's `.flm-pres-par, .flm-pres-block` margins); the first and last child: the engine's default |
| `.emph, .textit`, `.textbf` | dropped: the engine's default (`.flm-pres-span[data-flm-style=…]`) |
| `.enumeration > dt` (upright) | `.flm-pres-list > dt` (terms lists; none in the data) |
| `.enumeration.enumerate, .enumeration.itemize` (row gap, `dt` margin) | `.flm-pres-list[data-flm-kind~="enumerate"]`, `…~="itemize"]`: `--flm-list-indent: 0.8em`, `--flm-list-label-gap: 1rem`, `--flm-list-entry-spacing: 0.5em` (the engine's list grid) |
| `.heading-level-3` (the data's `\subsection`) | `.flm-pres-block--heading[data-flm-heading="subsection"]` |
| `.heading-level-4` and its `::after` dash (`\paragraph`) | `.flm-pres-runin--heading[data-flm-heading="paragraph"]` (italic, not bold); the dash dropped: the engine writes its run-in stop `.` (setting `html.run_in_stop`; no `\paragraph` in the data) |
| `table.cells` (margins, `max-width`) | `.flm-pres-cells`; `border-collapse`: the engine's (`collapse`) |
| `table.cells td, th` | dropped: the engine's default (the same padding) |
| `.cellstyle-H` | dropped: the engine's `th[scope="col"]` rule |
| `.cellstyle-rH` | dropped (empty) |
| `.cellstyle-l`, `-c`, `-r` | dropped: the engine's `[data-flm-align]` |
| `.cellstyle-green`, `-blue`, `-yellow`, `-red` | `:root { --flm-cells-green: … }` etc., the site's translucent colors (the engine's are opaque, wrong in the dark scheme) |
| `.cellstyle-lvert`, `-rvert` | dropped: the engine's `[data-flm-rules~="left"]`, `[data-flm-rules~="right"]` |
| `.celltbledge-top`, `-bottom` | dropped: the engine's outline on the table (`--flm-cells-outline`) |
| `.verbatimcode` | `.flm-pres-verbatim[data-flm-kind="code"][data-flm-display="inline"]`; the background `--flm-verbatim-background` |
| `.verbatima` | `.flm-pres-verbatim[data-flm-kind="a"]`: the text's font and size (it is a `<code>` now, which the site's `code` rule sets in monospace); the italics: the engine's |
| `.verbatimcode-environment` | `.flm-pres-verbatim[data-flm-display="block"]` (font, margins; `pre` and scrolling: the engine's) |
| `figure.float`, `figure.float.float-table` | `.flm-pres-block.flm-floats-float`, `…[data-flm-kind~="table"]` |
| `.float-contents`, `.float-contents img`, `.float-contents table.cells` | `> .flm-floats-float-content`, `> .flm-pres-image`, `> .flm-pres-cells` |
| `figcaption`, `figcaption > span` | `> .flm-floats-float-caption`, `> .flm-pres-par`; `--flm-floats-caption-size: 1em`, `--flm-floats-caption-spacing: 0.75em` |
| `.defterm .defterm-term` | `.flm-defterm .flm-defterm-leadin`; `--flm-runin-gap: 0` (the lead-in writes its own space) |
| `.display-math` | dropped: the engine's (a block, scrolling); `--flm-math-display-space-above/below: 0` (MathJax's container spaces it, as before) |
| `.endnote-marks, .citation-marks` | `.flm-xnotes-xnote-mark, .flm-citations-mark` |
| `.quote, .address, .blockquote` | `.flm-pres-block.flm-quote` (each kind by `[data-flm-kind~=…]`) |
| `.quote`, `.quote::before` | `.flm-pres-block.flm-quote[data-flm-kind~="quote"]`, `::before` |
| `.quote .quote-lines`, `.quote .quote-text`, `+ .quote-lines` | `> .flm-quote-lines`, `> .flm-quote-text` (with their own first and last child margins), `+ .flm-quote-lines` |
| `.quote .quote-lines .quote-lines-indent` | `--flm-tab: 2.5em` (the engine writes a line's indentation as `--flm-element-indent-left`) |
| `.quote-attributed`; `.quote .quote-attributed::before` (dash) | `.flm-quote > .flm-quote-attributed`; the dash dropped: the engine's `--flm-quote-attributed-lead` |
| `.quote-block` | `--flm-quote-block-rule`, `--flm-quote-block-padding` |
| `.address .quote-lines` | dropped: the engine's default (`--flm-quote-address-size: 0.933em`) |
| `.blockquote` | `.flm-pres-block.flm-quote[data-flm-kind~="blockquote"]` |
| the alternatives commented out (the first block, options A and C) | translated, still commented out (their attribution dash would double the engine's) |
| `#endnotes` (`genericpage.scss`) | `.flm-citations-bibliography, .flm-xnotes-footnote-list` |
| `#endnotes dl`, `dd`, `dt, dd` (transition) | `> .flm-pres-list` (margins; `--flm-list-indent: 0px`, `--flm-list-label-gap: 5px`, `--flm-list-entry-spacing: 0.4em`), `> li` |
| `#endnotes dt` (upright, right-aligned) | dropped: the engine's labels are spans, right-aligned |
| `#endnotes #footnotes dt` | `.flm-xnotes-footnote-list .flm-xnotes-entry-mark`; `--flm-xnotes-list-rule: none` (no line above the list, as before) |
| `.page_style_cards #endnotes`, its `dt` (no page uses the class) | `.page_style_cards .flm-citations-bibliography, …`, `.flm-pres-list-label` |
| `.codelist-autodescription .enumeration.enumerate, .enumeration.itemize` | `--flm-list-entry-spacing: .1em` on `… .flm-pres-list[data-flm-kind~="enumerate"]`, `…~="itemize"]` |
| `.CodeGraphInformationPane .endnotes`; `.flm-html-error` (and `> pre`, dark) | `.flm-citations-bibliography, .flm-xnotes-footnote-list`; `.flm-pres-unknown, .flm-pres-unsupported, .flm-pres-dropped` (C checks the pane's HTML) |
| `$endnote-superscript-font-size` (`variables.scss`, `tiles-persons.scss`, `def-fixbaseline-superscript-text.scss`); `.sectioncontent`, `.code-href-references` (`ecc-code-page.scss`) | kept: the site's own variable, mixin and classes; `href-ref ref-*` is still written by ZooDb's composer (`ref()`) |
| `.visual-highlight + dd` (`visual-highlight.scss`) | dropped (review fixes, `030d469`): the anchored entry is now the engine's `<li id="citation-N">`, which holds its label and its text and which `.visual-highlight` highlights whole; no anchor of the site is a `<dt>` any more |

Not set, the engine's default kept: the spacing of the heading above a list of
references or footnotes where the site sets none (the site's `h2` declares an invalid
margin), outside the code pages (whose `.ecc-code-page h2` styles it as before). The
look was not checked in a browser (no Parcel before C; E takes the screenshots).

*MathJax.* What the pages deliver: in `<head>`, after the stylesheet links and before
the profile's module script, `html_scripts()` of the zoo's engine: the definition
`flm.html.mathjax`, its inline part (4,209 characters: `window.MathJax` with
`startup.elements: ['.flm-pres-math--passthrough']`, `tags: 'none'`, the `texhtml`
package, the click listener and the `flm:region-updated` code), then `<script
src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js" async>`. The zoo's settings
override no `html.definitions`, so the parts `html_definitions()` lists are the ones the
runs use (18 definitions: 17 styles, 1 script; part 0's finding needs nothing here).
`mathjax/setup.js`'s `load()` configures and loads nothing: if MathJax has loaded
(`MathJax.version` and `startup.promise`) it awaits `startup.promise`, else it chains
`startup.ready` (calling the configuration's own or `defaultReady()`) and then awaits
the promise; it throws if the page carries no configuration. No `mathjax@3`,
`cdnjs…/mathjax/3`, `.inline-math` or `.display-math` is left in the site's sources
(`eczoodb`, `site/src`, `templates`, `jsc_profiles`, `sitelib`, `stylesheets`,
`jscomponents`). The per-render `definitions` and `requires` are not used (every page
links the whole stylesheet).

**The eczoodb tests** (`20ad41e`). `test_eczoodb.js` reads `short_name.source`;
`test_render_code.js` and `test_render_codelist.js` take `.html` of the renderers'
results, pass `zoo_flm_engine` (not the former environment and `doc_metadata`) and check
that `diagnostics` is empty. The top-level `flm_allow_unresolved_*` keys of four files
(five places) move into `flm_options` (`allow_unresolved_citations`,
`allow_unresolved_references`), and `test/_loadeczoodb.js` merges the test's options
deeply (`lodash/merge`), else the test's `flm_options` would replace the full options'
(the Node loader, the citations). No expectation changes: the test data has no
unresolved reference or citation (under `'abort'` one would have thrown before), and the
same 72 tests pass as before, with the three fixed: 75 passing, 2 pending (skipped in
`test_load_yamldb.js`, `test_stats.js`), 0 failing. `yarn eslint` on the test folder
reports the one error and two warnings that predate this part (two top-level suites, the
skipped tests).

**The search index and the dump** (B2's full build before the review fixes;
`B2/searchidx/`, `B2/dump/`; the final index, 4,605,733 bytes: G9 and the Review fixes
below).

- *Search index*: 4,443,321 → 2,349,486 bytes; the same `info`, the same 28 store
  fields, 1,155 documents with the same ids in the same order. The difference is
  content: the former text output wrote each citation as its full formatted reference in
  brackets (`[D. Gottesman, Surviving as a Quantum Computer in a Classical World (2024)
  URL]`), the engine's text output writes its mark (`[1]`, after a no-break space). Over
  all fields, the differing runs are 19,277 citation texts become numbers, 14,760
  no-break or white space, 792 citation numbers, 1 quotation mark (melas, B1's
  correction), and 1,983 others, of which 205 are not next to a citation: the text
  layout of the engine (a heading underlined with `---` for `~~~`, an image as `[image:
  /fig/…]` for `[figure]`, tables laid out in columns) and F2 below. `introduced`,
  mostly a `\cite`, falls from 235,118 to 7,543 characters; `description` from 1,165,932
  to 815,535 (87 equal, 287 equal but for white space, 781 otherwise different); names,
  ids, short names and the plain fields are equal. Three codes diffed:
  `approximate_qecc.description` 543 → 338 characters (a no-break space; the citation
  text of `arxiv:2105.14777` → its number), `qubits_into_qubits.description` 636 → 560
  (a no-break space; Gottesman's book → `1`), `rotor.description` 400 → 399 (one space).
  A's two one-space values (`approximate_qecc` `features.decoders.6`,
  `qubits_into_qubits` `features.decoders.2`) do not show: the search text has no double
  space in either build (the text output collapses white space). So a code is no longer
  found by the authors or titles of the works it cites (question 13 below; since the
  review fixes it is again, G9 and the Review fixes below).
- *Dump* (`dat/eczoodata.json`): 5,633,320 → 7,652,206 bytes. `db.objects` 3,932,369 →
  5,586,753, of which `_zoodb.flm_field_positions` 1,595,724 (20.9 % of the dump; 11
  Deferred (b)) and `_zoodb.flm_diagnostics` 2,866 (F1's Errors, stored under the
  switch); `zooflm` 2,047,011 (26.8 %: citations 1,398,581 for 5,217 keys, snippets
  480,075 for 2,008, index 157,639, graphics 10,634) where the baseline's `refs_data`
  held 1,682,506 (citations 1,291,475, refs 382,091, graphics 8,895). The growth is the
  positions (+1.60 MB) and the snippets (+0.48 MB), less the smaller index (−0.22 MB).

**The 17 objects of the searchable-text assembler** (`B2/logs/search_diags.txt`,
`engine.render_text()` wrapped during a full load): all 17 are F1's, 18
`flm.citations.no-entry` diagnostics for the 18 `manual:{…}` keys: the codes `hexagonal`
(`protection`), `perfect_binary` (2, `description`), `bch`, `ira`, `qc_ldpc`,
`cross_interleaved_reed_solomon`, `current_mirror` (`introduced`), `extended_golay`,
`quasi_cyclic`, `projective`, `gkp` (a cousin's `detail`), `gray`, `perfect`
(`description`), `locally_recoverable` (`realizations.1`), `ag` (`features.rate`),
`generalized_reed_solomon` (`features.decoders.3`), `stellated_dodecahedron_css`
(`features.decoders.0`). Nothing else. With `flm_pieces` true (G9, the review fixes),
the search index holds 22 `[dropped: bibliography entry]` placeholders in 19 fields of
these 17 codes (`gray.introduced`: `[1] [dropped: bibliography entry]`): the text
output's stand-in, in the cited-works piece, for a key without an entry, rendered under
`'continue'`; the marks-only index had none. An effect of F1 in the inspection builds,
gone once F1 is fixed; not worked around.

**Duplicate computed term labels across objects.** None: the scan's 60 `defterm:` labels
are distinct, no term is defined in two objects, and the zoo-wide scan reports no
duplicate label.

**The two no-break spaces of `~\cite`.** The data writes `~\cite` 12 times; the engine
writes the author's `~` as a no-break space and then, before an attached mark, its own
(`<span class="flm-pres-span flm-citations-space">&#xA0;</span>`, flm-rs's citations
feature), regardless of the `~`: `W state&#xA0;<span …>&#xA0;</span>[1]` (11 in the code
pages' HTML; the meta description reads `W state  [1].`), where the baseline had one
space (`B2/probes/tilde_cite.mjs`: `Text~\cite{…}` gives two, `Text \cite{…}` and
`Text\cite{…}` one). This is flm-rs's, the finding of 05 already recorded in step 4; no
data change.

**The bibliography exports and the random code data against the baseline** (the
original's `site/_site/`, read in place; `B2/bib/`).

- `dat/bibreferences.bib`: 5,217 entries in both, the same keys in the same order, 5,213
  identical; the other 4 differ by a character's spelling, the engine's table against
  pylatexenc's: Cyrillic letters written `{\fontencoding{T2A}\selectfont\CYRK}` for
  `{\CYRK}` (one entry, 15 letters), `⟨⟩` as `\ensuremath{\langle}` for `{\textlangle}`,
  a subscript `₁` as `\ensuremath{_1}` for `?`, and a combining diaeresis as `?` for
  `\ensuremath{\ddot{}}`. So no data copy of pylatexenc's table was needed (G4).
- `dat/bibreferences_csl.json`: byte-identical.
- `references.html`: 5,217 entries, the same sort keys in the same order, the same
  11,432 "Appears in" links; the visible text equal after decoding entities and
  normalizing spaces (the 9 entries left differ only in my normalizer's handling of
  `\text{…}` inside formulas, which the engine writes as HTML content).
- `dat/randomcodedata.json`: 516,525 → 812,339 bytes (the markup's longer classes and
  the marks); 1,155 codes, the same ids in the same order, the names' text equal; with
  the citation marks and white space left aside, 1,085 descriptions equal, 66 equal up
  to the cut (the budget is counted differently), 4 others: `melas` (B1's quotation
  mark) and `cmr`, `zrm`, `bosonic_rotation` (text inside a formula, `\textnormal{…}`,
  written as HTML content). Computed once per processing in 0.85 s.

**Dev mode** (`B2/devmem/`, and for the review fixes `B2/fix/devmem/`,
`B2/fix/once/devmem/` and `B2/fix2/devmem/`). `yarn dev` runs Parcel, which cannot
bundle before C, so the measurement ran Eleventy in watch mode with the site's own
configuration wrapped by `B2/devmem/devmem.config.js` (`--watch`, no Parcel, the full
data, the LOCAL cache, the switch, `NODE_OPTIONS=--expose-gc`): after each zoo load and
each build it logs the resident size, the JS heap after two `gc()`, the module's linear
memory and the live fragments (`engine.core.fragment_count()`), then changes the data: a
touch of `codes/quantum/qubits/stabilizer/qubit_css.yml` (no change of content), then
five edits (a YAML comment line appended each time); at the end it writes the file back
(`git status` of the data clone empty). The "after build" measure is taken in the
`eleventy.after` handler, while the build's results (about 165 to 170 MB, Eleventy's
`eventsArg.results`) are still referenced from the stack. Runs: before (`before.jsonl`,
the computed short names not released) and after (`after.jsonl`) this part's fixes; with
the review fixes' first G8 fix, which compiled the copies again at every processing
(replaced since, see the gaps table; `fix/devmem/g8.jsonl`, with heap snapshots after
the first load and builds 1, 2, 5 and 7), and then also the search index generator
loaded with the configuration (`fix/devmem/lunr.jsonl`; heap snapshots after the first
load and builds 1 and 2); then G8 fixed by compiling each detail once,
with `_site/` copied after builds 1, 2, 4 and 7 to compare with a fresh build
(`fix/once/devmem/after2.jsonl`, "G8 fixed" below; the same with no G8 fix:
`fix/once/devmem/before.jsonl`, the touch and two edits); and the final state, with G9
as well (the search texts with the cited works), `_site/` copied after builds 2 and 7
and heap snapshots after builds 1, 2, 6 and 7 (`fix2/devmem/final.jsonl`). The wasm and
resident sizes are the final run's:

| after | live fragments: B2 before / B2 / final | JS heap MB: B2 / first G8 fix / with `b219ad1` / G8 fixed / final | wasm MB (final) | resident MB (final) |
|---|---|---|---|---|
| first load | 15,356 / 15,356 / 11,924 | 213.5 / 215.9 / 216.2 / 211.3 / 216.5 | 117.9 | 687.9 |
| first build | 15,356 / 15,356 / 11,924 | 505.5 / 508.0 / 508.0 / 503.1 / 512.5 | 158.5 | 934.3 |
| reload, no change; build | 11,924 / 11,924 / 11,924 | 498.4; 772.9 / 499.6; 779.4 / 498.6; 511.2 / 493.6; 506.6 / 502.9; 515.8 | 158.5 | 1,045.6; 1,052.9 |
| edit 1, build | 11,939 / 11,938 / 11,924 | 774.1 / 781.1 / 512.3 / 507.6 / 516.8 | 158.5 | 1,320.4 |
| edit 2, build | 11,940 / 11,938 / 11,924 | 775.3 / 782.3 / 513.3 / 508.4 / 517.9 | 158.5 | 1,488.0 |
| edit 3, build | 11,941 / 11,938 / 11,924 | 776.5 / 783.8 / 514.7 / 509.8 / 519.3 | 158.5 | 1,348.2 |
| edit 4, build | 11,942 / 11,938 / 11,924 | 777.5 / 784.6 / 515.7 / 510.7 / 520.2 | 158.5 | 1,193.5 |
| edit 5, build | 11,943 / 11,938 / 11,924 | 778.0 / 785.5 / 516.5 / 511.4 / 520.7 | 158.5 | 1,601.2 |

So the zoo, the engine and the module stay one across rebuilds, and every build releases
what it makes. The one leak of fragments was the computed short name of each code a
reload replaces (one fragment per edited code and reload, not 1,155 per reload: the
computed data processor recomputes only the updated objects), released since B2. The
drop of B2's runs at the first reload, 15,356 to 11,924, was G8: on the first load the
3,432 backreference details (`relations.parent_of.N.detail` 1,117,
`relations.cousin_of.N.detail` 2,315) were compiled a second time, as fields of the
objects they are copied to, and after a reload they were the forward relation's own
fragments, which the scan counted twice for the forward object and not for the holder;
B2's 14 new fragments at the first edit were the edited code's backreferences, compiled
as copies again. So the pages after a reload differed from a fresh build. Without the
fix (`fix/once/devmem/before/`), the first build equals a fresh one (B2's `site_final`),
but after the touch `references.html` has 9,012 "Appears in" links (a fresh build:
11,432) and `concepts.html` 582 "Referenced in" items (736); `bibreferences.bib` and
`bibreferences_csl.json` hold the same 5,217 entries in another order (two CSL ids that
two `manual` keys share then take the other key's entry); the dump differs; the other
1,275 HTML pages and files are equal. After the second edit the counts are 9,041 and
587. With G8 fixed (each detail compiled once), the 3,432 details are their relations'
fragments and the live fragments stay at 11,924 after every load and build. Every page
and export after the touch and after the second and the fifth edit equals the fresh full
inspection build's (`fix/once/logs/cmp_after2.txt`, and likewise in a first run,
`cmp_after.txt`); `references.html` and `concepts.html` are byte-identical. Only
`dat/eczoodata.json` differs, before and after the fix alike, in its `zooflm.snippets`
(2,800 entries after the touch, 2,799 after an edit, against 2,008): the engine's
snippet cache keeps the snippets of the computed short names that the previous build's
pages rendered, and a fresh build writes the dump before those pages. After an edit its
`db` also differs, by the edited file's `source_file_modification_token`. The module's
memory grows once, in the first build, and not after. In one of the three runs with G8
fixed (`fix/once/devmem/after.jsonl`), the JS heap grew by about 169 MB per build from
the first edit on (506.6 to 1,350.0 MB after edit 5), about one build's results each
time. Two runs of the same package did not show it: `after2` with the same edits and
copies, and `heap`, with three edits, snapshots after builds 2 to 4 and no copies, which
grew by about 1 MB per build; nor did the final run, with G9 (about 1 MB per build). The
growth was not reproduced, so its retainer was not traced. In the final run too every
page and export after the touch and after the fifth edit equals the fresh full
inspection build's, the search index included (`fix2/logs/cmp_devmem_build2.txt`,
`cmp_devmem_build7.txt`); the dump differs by its snippet cache, as above, and after the
edits also by the edited file's `source_file_modification_token`, which the edit
changes.

The JS heap, traced with heap snapshots (`B2/fix/probes/heapsnap.mjs`: the nodes of a
snapshot grouped by the earlier snapshot that first saw their ids, each group attributed
to the nearest older object on its shortest path from the GC roots;
`B2/fix/devmem/analysis_S*.txt`; for the final state `B2/fix2/probes/heapsnap.mjs`, the
same with a mode `count` of the objects of a type, and `B2/fix2/devmem/analysis_S2.txt`,
`analysis_S7.txt`, `objects_S1_S2.txt`, `modules_S7_all.txt`):

- *The step of about 270 MB at the second build* was the first build's output kept for
  the rest of the process. After the second build, 286 MB of objects made by the first
  build were still alive, 267 MB of them under the first build's
  `TemplateMap.collectionsData` (the content of every page), reached from the GC roots
  only through lunr's module: `lunr.QueryParseError.prototype` is an `Error` made when
  lunr is first loaded (`lunr.js` line 2982, `= new Error`), and V8 keeps the call sites
  of an Error's stack trace, with the objects they were called on, until its `stack` is
  read; one of them was a call on that TemplateMap (the site's configuration sets
  `Error.stackTraceLimit = 999`, so every frame is kept). lunr (through
  `@phfaist/zoodbtools_search`) was first loaded by the `import()` of
  `src/dat/searchindex.11ty.js`, during the first build. The site's configuration now
  imports the search index generator before any build (sitegen `b219ad1`): after the
  second build, the objects of the first build still alive are 17.8 MB (the Eleventy
  state of the current build replaces them), and the heap after a rebuild is 511 to
  517 MB instead of 779 to 786 MB (506.6 to 511.4 MB with G8 fixed, 515.8 to 520.7 MB
  in the final run, whose search texts are longer). In the final run's snapshot after
  build 2, the one `TemplateMap`, the one `TemplateWriter` and the one bibliography
  collector (`EczBibReferencesCollector`) alive are build 2's; those of build 1 are
  freed. What build 2 made and is alive then (381.4 MB) is the current build's state:
  its results on the stack (172.0 MB), Eleventy's `TemplateWriter` (100.4 MB), the
  bibliography collector (66.0 MB), the scan results (10.2 MB), the templates' rendered
  promises (9.2 MB), the cached data dump (7.9 MB). The same pin existed before the port
  (the template and lunr are unchanged since the original).
- *The growth of about 1.1 MB per rebuild*, before and after the fixes alike: in the
  snapshot after build 7, what builds 3 to 5 made and is still alive is 8.5 MB of
  snapshot self size, mostly compiled code, scripts and 66 ES module records (22
  templates per build). These are Eleventy's: at every watch rebuild it imports each
  `.11ty.js` template again under a new URL (`?_cache_bust=<time>`, its
  `Util/Require.js`), and Node never frees a module. The rest is 0.9 MB of `cite_locales`
  arrays of the CSL engines that citation-js's `plugin-csl` caches by template and
  locale (`engines.js`; the bibliography collector uses it). Neither is the package's or
  the site's; not changed. The final run gives the same picture: from the build after
  the touch to the fifth edit's, the heap after a build grows from 515.8 to 520.7 MB,
  1.0 MB per rebuild. In the snapshot after build 7, what builds 3 to 6 made and is
  still alive is 6.5 MB of self size: 2.2 MB under 100 module records and most of the
  3.3 MB of compiled code; 15 templates have 7 module records each, one per build
  (`c.11ty.js`, `list.11ty.js`, `references.11ty.js`, `searchindex.11ty.js`, …;
  Eleventy 3.1.5, `src/Util/Require.js` line 135 sets `_cache_bust`). The other 0.9 MB
  in that group are element stores of the engine's `_fragments_of_label` arrays, which
  V8 replaces as the fragments of a label are added and released; each array has one,
  and the numbers of labels and of fragments stay at 11,884 and 11,924 after every
  build, so this is no growth. In the final run's snapshots nothing of the package or of
  the site accumulates (one earlier run kept about one build's state per rebuild: the
  dev-mode paragraph above, and left open below).

A rebuild took 20 to 30 s in B2's runs (the reload 14 to 24 s: every reload processes
the whole zoo again, a touch included); in the review fixes' runs the reload took 21 to
61 s and the build 28 to 69 s (snapshots written, the machine busier), and in the final
run 15.8 to 16.4 s and 20.8 to 22.6 s. No second engine stays alive: the BibTeX
speller's is created and freed in each build.

**Deviations.**

1. A package change (G7), a Rust change with the wasm module rebuilt, which the rules
   require for a gap of the package (worktree files listed above; the main session
   commits). Cargo and wasm-pack updated their own bookkeeping outside the worktree
   while building: `~/.cargo/.global-cache` (cargo's last-use database, written by every
   cargo call) and `~/Library/Caches/.wasm-pack/.wasm-opt-50385c9e73ccee70.lock`;
   nothing was downloaded. No way around these was found for a module build.
2. The installed package was packed and installed again at the start (its `src/` lacked
   a JSDoc change of `1d7230c`), and again after G7.
3. G4 through a second FLM engine created and freed by each `generateBibtex()` call, not
   the zoo's engine: `render_latex()` takes no per-call render options and the setting
   changes all of an engine's LaTeX runs (question 12). The six syntax characters keep
   hand-written spellings (LaTeX's escapes, as pylatexenc gave them), since FLM cannot
   take them as bare text.
4. Not asked for: the random code data memoized per processing (the home page and the
   data page each computed it, and printed gray's F1 Error twice); the references page
   leaves out a backref to an object without a page (none in the data); the speller's
   debug line reworded (`5012e97`).
5. The dev-mode measurement through a wrapper of the site's configuration in watch mode
   instead of `yarn dev` (Parcel); its data changes are temporary edits of a file of the
   data clone, written back at the end.
6. `TMPDIR` set to the scratchpad for every run (the Anystyle helper's `mkdtemp` and
   Node's compile cache would otherwise write to the system's temporary folder).
7. The code graph pane's stylesheet (C's app) updated with the others, since the brief's
   stylesheet row lists it; C checks it against the pane's new HTML.
8. The `\paragraph` dash of the old look dropped (the engine writes its run-in stop; no
   `\paragraph` in the data).

**Findings** (also in the gaps table above).

- G7 (package, fixed): truncation inside a command's arguments (above).
- F2 (flm-rs, text output): a formula in a term definition's lead-in loses its
  delimiters in the text output (`Construction A_4: …` where the running text keeps
  `\(A_4\)`; the HTML is right; `B2/probes/defterm_math.mjs`); 3 terms of the data hold
  a formula; it reaches the search index's text. Not reported upstream (a finding for
  05's table, the main session's edit).
- G3's residual (flm-rs, known since Part 0): the citation marks of a preview cannot be
  left out; 443 random code previews show marks linking to notes not on the page.
- The search index no longer holds the cited works' texts (above): the engine's text
  output leaves out the pieces by design; `render_text` of the core could place them
  (`pieces: true`, which the engine does not pass). Question 13; G9 since the review
  fixes, which place them as the main session ruled.
- G8 (package; fixed by the review fixes, below): the relations populator copies a
  relation's raw `detail` into the backreference before the FLM processor compiles the
  fields. On the first load each backreference detail was compiled a second time, as a
  field of the object it is copied to (3,432 extra fragments, under that object's file
  and without a position: 5 of F1's 42 page lines named the wrong file); after a reload
  the backreference held the forward relation's fragment, which the scan credited twice
  to the forward object and not to the holder, so that dev-mode pages after a reload
  differed from a fresh build: after a touch of one code file, the references page lost
  2,420 of its 11,432 "Appears in" links and the glossary 154 of its 736 "Referenced in"
  items, and the bibliography exports changed their order (the scan's counts are in the
  gaps table). B2 first wrote here that nothing was visible on the data; the review
  measured otherwise. Fixed as the main session ruled: one fragment per detail, counted
  for both objects; the five lines name gkp.yml, quasi_cyclic.yml, projective.yml and
  extended_golay.yml at the positions of the text; a reload gives the first load's scan
  results, fragments and dump, and the dev-mode pages equal a fresh build's.
- The howto's manual citation example (`… 1003--1592 (1943)`) would meet F1 (a key with
  `--`); not changed. Its claim that `\ref{figure:…}` gives "Figure X" predates the port
  (the baseline reads `Fig. I` too); corrected in the review fixes (`6c37737`). The other
  examples of the howto render
  without a diagnostic on the zoo's engine (`B2/logs/howto_check.txt`: the example,
  styles, escapes, mathematics, the four lists, references and links, sections and
  terms, the table syntax of every cells example), the bracket form `[{⇒}]` alone
  refused.
- `render_latex()` takes no `render_options`, unlike `render_document()` and
  `render_fragment()` (question 12).

**Checks** (logs in `B2/logs/`).

| check | result |
|---|---|
| test build (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`) | exit 0, 66 files written (36 HTML, B1's 35 and `references.html`; with `dat/bibreferences.bib`, `bibreferences_csl.json`, `randomcodedata.json`, `dynamic_style/flm.css`), 3.8 s, peak resident size 594 MB; no diagnostic, no Warning; no `<flm:`, no `flm:` followed by a digit; `Pass 1: 63 cached, 4 to fetch` (64 and 3 in one run; local sources), `Retrieved citations: 113 considered, 0 failed` (`build_test_final.log`); every commit's tree built this way with exit 0 (`20ad41e` only together with `fa6bab1`) |
| full inspection build (`ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL ECZOO_FLM_CONTINUE_WITH_ERRORS=1 yarn build-simple-noparcel`, `/usr/bin/time -l`) | exit 0 in four runs, 44.2 to 65.9 s (B1: 37.8 to 40.4 s), peak resident size 1,016 to 1,350 MB (B1: 831 to 849); the last: 55.6 s, 1,100 MB, 1,425 files written, 1,428 in `_site/` (`build_full_final4.log`); the bibliography page 4.2 s, the references page 0.8 s, the home page 0.8 s (Eleventy's benchmark) |
| pages against the baseline | the same 1,277 HTML pages, path for path (1,155 code pages, 86 lists and `/all`, 3 domains, 18 kingdoms, the single pages with `references.html`); `dat/` the same 5 files; `dynamic_style/flm.css` new; the sitemap's 1,274 locations in both |
| diagnostics of the full inspection build | 43 lines, all `flm.citations.no-entry` Errors of F1's 18 `manual:{…}` keys: 42 in the pages, each once (B1's 43 printed gray's meta description twice), and 1 in the random code data (gray; a page B1 did not build); 0 Warnings, no other diagnostic; no `<flm:`, no `flm:` followed by a digit (`build_full_final_diags.txt`) |
| full build as committed (no switch) | exit 1 after 27.6 s, peak 1,053 MB, "Wrote 0 files": gray's meta description (F1), as in B1 (`build_full_default.log`) |
| retrievals | every full build: `Pass 2: 2124 cached, 0 to fetch`, `Retrieved citations: 7341 considered, 0 failed`; `Pass 1: 4739 cached, 478 to fetch` (the local `manual` and `preset` sources) in all runs but one, `4869 cached, 348 to fetch`, when the 130 `preset` entries of the LOCAL cache were still fresh from an earlier run; no network; the bibliography's Anystyle cache answered all 478 look-ups (no run of `anystyle`) |
| dev mode | the table above (`devmem/before.jsonl`, `after.jsonl`) |
| `eczoodb` tests (`cd eczoodb && yarn test`) | 75 passing, 2 pending, 0 failing, 14.5 s; offline: the manager's 14 runs each `Pass 1: 64 cached, 3 to fetch` from the local `manual` (2) and `qecdborg` (1, a `file:` URL), `113 considered, 0 failed`; the test cache keeps its 111 lines (`eczoodb_tests_after.log`, `eczoodb_tests_after_debug.log`) |
| `eczcollectbib` tests | 16 passing (14 and 2 new) |
| the stylesheet page | `_site/dynamic_style/flm.css`, 44,882 bytes: one comment line and exactly `html_stylesheet()` (44,809 bytes) of a new engine created with the zoo's core configuration (the same settings hash) (`probes/stylesheet_cmp.mjs`) |
| the SCSS alone | `site/stylesheets/main.scss` and the pane's stylesheet compile with the clone's `sass` 1.83.0, no error, no warning (`B2/sass/`); no old-class selector in the compiled CSS but those the table keeps |
| the layout's `<head>` | the MathJax 4 configuration and loader, the link to `/dynamic_style/flm.css`; nothing of MathJax 3 |
| the bibliography exports, the random code data, the search index, the dump | above |
| package (worktree) | `yarn lint` clean; `yarn test` 475 passing (474 and 1); `zoodb-flm-wasm` clippy clean, 20 tests (19 and 1); `yarn build:wasm flm` path check green; `yarn node playground/play_example.mjs` exit 0; the docs build without a warning (the main checkout's Sphinx 8.1.3, read-only, output in `B2/docbuild/`); `yarn pack` 75 files, 2,346,424 bytes (SHA-256 `97b3583a…`, `logs/pack_trunc.sha256`) |
| git state | worktree: the brief, `HANDOVER.md` and the package files of G7 modified, nothing else; sitegen clone: `00e4fe9` to `ce83723` on `f2ec92c`, `status --short` empty, root `package.json` and `yarn.lock` equal to the committed form, 16 commits over `origin/main` (A's one, B1's six, these nine; trailers checked), push URL the disabled one; installed `src/` equal to the worktree's; data and handbook clones unchanged (`60bbc93ae`, `c73b681`); the originals: `status` empty, heads `a2ad583`, `7ade20a2f`, `c73b681` (read with `--no-optional-locks`), no file newer than this part's start; nothing new under `~/.yarn`, `~/.cache` or `/tmp` from this part (cargo's and wasm-pack's two bookkeeping files: deviation 1) |

**Open questions** (numbered after the brief's ten).

11. F1 stays Philippe's; with this part the random code data also shows gray's F1 Error
    (one line more in the inspection builds).
12. Should `render_latex()` take per-call `render_options`, as `render_document()` does
    (a crate and engine addition), so that the BibTeX export can use the zoo's engine
    instead of a second one? Not needed now.
13. The search index (reworded after the review fixes): the site indexes the cited
    works' texts again, as the baseline did (the main session's ruling; G9,
    `searchable_text_options.flm_pieces: true`). Keep this, or index the citation marks
    alone (`flm_pieces: false`): an index about half the size (2,349,486 bytes instead
    of 4,605,733), but a code is then no longer found by the authors or titles of the
    works it cites. A side effect of the texts: the words of the two headings
    (`References`, `Footnotes`) are in every field that cites or has a footnote, so a
    search for "references" matches 1,115 codes (54 in the baseline).
14. F2 for 05's table. (G8, asked here first, is fixed in the package by the review
    fixes, for the main session to commit.)
15. The `\paragraph` stop: keep the engine's `.` or set `html.run_in_stop` to the old
    dash (no `\paragraph` in the data today).

**For C, D and E.**

- C: the code graph pane's stylesheet now selects the engine's classes
  (`.flm-citations-bibliography`, `.flm-xnotes-footnote-list`, `.flm-pres-unknown`, …);
  the profiles' `mathjax.load()` waits for MathJax 4 (the search widget and the random
  code widget still call `MathJax.typesetPromise()` on new content, which the engine's
  `flm:region-updated` event could replace); Parcel meets `/dynamic_style/flm.css`
  (`@layer`) and the inline MathJax configuration in every page's `<head>` for the first
  time; the random code previews carry citation marks; `gitzoopreview` still imports
  `docrefs_placeholder_ref_resolver` (excluded, G5); the TEMPORARY stand-in of
  `eczcodegraph.js` is left as it was.
- D: `generateBibtex()` is async now and makes its own engine (the handbook's
  `mk_bib.js` calls it, commented out); the zoo's engine settings are unchanged
  (`latex-recomposed.unicode` stays `declare` for the handbook's own run);
  `test/_loadeczoodb.js` merges options deeply.
- E: the look on the new HTML is unchecked in a browser (the screenshots); the
  comparison should classify the citation marks in the random code widget, the search
  index's content (since the review fixes each field's text followed by its footnotes
  and cited works, where the baseline wrote each citation in full in place; G9), the
  references page and the glossary after a dev-mode reload (G8), the image sizes now set
  by the engine's stylesheet, the double no-break space of `~\cite`; the build is 5 to
  25 s slower and about 200 to 500 MB larger at its peak than B1's, with the
  bibliography pages, the references page and the random code data built again; the
  default build still stops at F1. While F1 lasts, the search index also holds 22
  `[dropped: bibliography entry]` placeholders (G9), gone once F1 is fixed. E should
  watch the heap in its dev-mode runs: one of B2's four runs kept about one build's
  state per rebuild, not reproduced and with no retainer found (left open below),
  possibly another `Error` whose stack pins a build, as lunr's did.

**Review fixes** (2026-10-19). The review (Opus, read-only; its probes and logs in
`B2/review/`) gave the verdict "fix first": two must-fix items (the statements about G8
in this brief, and G8 itself, a defect of the package), three should-fix items (the JS
heap in dev mode, `.visual-highlight + dd`, the howto on `\ref` of a float), notes, and
"accepted" for the eight deviations. The main session ruled G8 (each detail compiled
once, both objects credited, the diagnostics at the relation's own field) and question
13 (the cited works' texts indexed again, as in the baseline). Three fixer agents
(Opus) did the round: a first one, stopped by a usage limit before it reported
(`B2/fix/`); a second one for G8 (`B2/fix/once/`, with a copy of the first one's
worktree state in `once/first_fixer/`); and a third one for the rest, the checks and
this paragraph (`B2/fix2/`). Four commits in the sitegen clone on `ce83723`, each with
the two trailers and with the root `package.json` and `yarn.lock` in their committed
form: `030d469`, `6c37737` and `b219ad1` (the first fixer), `1c1cf55` (the third). Two
package changes in the worktree, uncommitted, for the main session: G8 and G9 (gaps
table). Nothing in the data clone or the handbook clone; nothing pushed.

- (must) *The statements about G8.* B2 wrote that G8 showed nothing on the data. The
  review measured two effects (`B2/review/probes/reload_cited.mjs`). On the first load,
  5 of F1's 42 page lines named the file of the object holding the backreference, at a
  position counted from the field. After a reload with no change, the scan credited
  every backreference detail twice to the relation's own object and not to the holder:
  on the full data `cited` differed for 949 objects and `refs` for 320, the key–object
  pairs fell from 11,447 to 9,020 and the fragments from 15,356 to 11,924 (test data: 3
  objects' `refs`). The second fixer rewrote the G8 row of the gaps table, the G8
  finding and the dev-mode paragraph and table with these counts, and with what they
  did to the pages in dev mode, measured on the package without the fix: after a touch
  of one code file, the references page had 9,012 "Appears in" links instead of a fresh
  build's 11,432, and the glossary 582 "Referenced in" items instead of 736.
- (must) *G8 in the package.* The first fixer compiled every backreference copy again
  at each processing, as the holder's own fragment with the position of the source. The
  second fixer kept that fixer's record of the copies (`src/dbprocessor/relations.js`:
  `_zoodb.copied_fields`, rebuilt with the relation fields, left out of dumps; its test
  in `test/test_dbprocessor_relations.js`) and replaced the rest, as ruled. The field
  compiler (`src/dbprocessor/flmsimplecontent.js`) gives a copied field the live
  fragment of the field it copies (`copied_field_source()`); if the source is not
  compiled yet, it compiles the source's field in place first, as that object's field,
  with its origin, position and schema options. `object_fragments()` leaves the copy out
  (the new `object_field_fragments()` flags it), so that every fragment is listed and
  released once. The scan (`src/dbprocessor/flmprocessor.js`, `_process_scan()`) builds
  each object's entry over its fields, so that a copy credits its holder with the
  fragment's references, citations and images, while its labels and term definitions
  stay with the relation's object. The first fixer's route was dropped because it
  compiled each detail twice (3,432 extra fragments: 15,356 live instead of 11,924),
  defined a label written in a detail twice (`zoodb.labels.duplicate` in the new test)
  and reported a detail's diagnostics on both objects. Tests:
  `test/test_dbprocessor_flmprocessor_backrefs.js`, 7 tests (the record; the copy is the
  relation's fragment with its position, also when the copy comes first in the zoo; the
  scan's credits, with no duplicate label; equal snapshots, fragments and dump after a
  reload with no change; a reload of the holder, then of the source; dumps; a diagnostic
  in a detail on the relation's object only, at
  `items/a.yml#relations.parents.0.detail:7:17`, before and after a reload); a variant
  without the label fails 7 of 7 on `1d7230c`'s `src/` and 5 of 7 on the first fixer's.
  Also `doc/zoodb.dbprocessor-flm.rst`, `doc/zoodb.dbprocessor-relations.rst` and a
  `CHANGELOG.md` bullet. On the full data (`B2/fix/once/probes/reload_once.mjs`), a
  first load and a reload with no change agree in every object's `cited`, `refs`,
  `labels`, `terms`, `graphics` and diagnostics (17,336 cited entries and 11,447 pairs
  both times) and in the dump; there are 11,924 live fragments at every load and build;
  the five lines name the file and position where the text is written (checks below).
  In dev mode, every page and export after the touch and after the second and the fifth
  edit equals a fresh build's (the dump aside, left open below).
- (should) *The JS heap in dev mode* (the dev-mode paragraph above). The first fixer
  traced it with heap snapshots: the step of about 265 MB after the first reload was the
  first build's `TemplateMap`, with the content of every page, held for the rest of the
  process by lunr's `QueryParseError.prototype`, an `Error` made when lunr is first
  loaded, whose stack trace kept a call on that `TemplateMap`; lunr was first loaded by
  `src/dat/searchindex.11ty.js` during the first build. `b219ad1` imports the search
  index generator from `site/eleventy.config.js`, before any build, with a comment that
  says why. It stays: it is the site's own code, it changes no output, and the `Error`
  then keeps only the frames of the configuration's loading. The growth of about 1 MB
  per rebuild is Eleventy's: it imports every `.11ty.js` template again at each watch
  rebuild (`?_cache_bust=`), and Node never frees a module record. The third fixer
  checked both on the final state, with G8 and G9 (snapshots after builds 1, 2, 6 and
  7): after the touch's build the one `TemplateMap`, `TemplateWriter` and bibliography
  collector alive are build 2's; the heap after a build goes from 515.8 to 520.7 MB over
  the five edits; what builds 3 to 6 left is 6.5 MB, mostly module records and their
  compiled code, 15 templates having one module record per build. The growth is
  recorded, not changed: its holder is Eleventy's, neither the package's nor the site's.
  The run that grew by about 169 MB per build (the second fixer's `after`) was not
  reproduced in three further runs.
- (should) *`.visual-highlight + dd`*, dropped from
  `site/stylesheets/visual-highlight.scss` by `030d469`. Checked: the commit removes
  that one rule and nothing else. The site's script
  (`jscomponents/linkanchorvisualhighlight/`) adds the class to the target of a `#`
  link, which on a list of citations is the engine's `<li id="citation-N">`, holding the
  label and the text; no `<dt>` of the built site has an `id`. `main.scss` and the
  pane's SCSS compile with sass 1.83.0 without an error or a warning, the CSS differing
  from B2's by that rule (`B2/fix/sass/`). The selector table has a row for it.
- (should) *The howto* (`flm_howto.md`, `6c37737`). Checked: it changes the two places
  and nothing else. With the zoo's settings, `\ref{figure:…}` gives *Fig. I* and
  `\ref{table:…}` *Tab. I*, and `\ref[S]{…}` gives *Figure I* and *Table I*
  (`B2/fix/probes/howto_refs.mjs`, `B2/fix/logs/howto_refs.txt`). The F1 example and the
  sentence on the legend of a float without a caption (*Figure X*, which the engine
  writes as `Figure II`) are unchanged.
- (ruling) *The cited works in the search text* (G9; question 13 reworded). In the
  package: `engine.render_text()` takes `pieces` (`src/zooflm/engine.js`; the crate's
  text runs could already place them), `FLMSearchableDocTextValuesAssembler` takes the
  option `pieces` (`src/dbprocessor/searchabletextflm.js`), and the standard setup reads
  `searchable_text_options.flm_pieces` (`src/std/use_searchable_text_processor.js`,
  `src/std/stdzoodb.js`; default `false`). Tests: in `test/test_zooflm_engine.js`, each
  tree ends with its footnotes and its cited works, a tree without them has no piece,
  and the whole run's text places them once; in `test/test_dbprocessor_flmprocessor.js`,
  with the option a field's search text holds its footnote and its cited work, while a
  standalone field and a field without a piece are unchanged, and by default it holds
  neither. Docs: `doc/zoodb.dbprocessor-searchable.rst`, `doc/zoodb.zooflm.rst`,
  `doc/std.rst`; a `CHANGELOG.md` bullet. The sitegen sets `flm_pieces: true` in
  `eczoodb/eczoodb.js` (`1c1cf55`). A field's search text is now its text, then its
  footnotes under `Footnotes` and its cited works under `References`
  (`qubits_into_qubits.description` ends `… [1; Ch. 2].`, then `[1] D. Gottesman,
  Surviving as a Quantum Computer in a Classical World (2024) URL`); the baseline wrote
  each citation in full where it stands, so a work cited twice in a field is now listed
  once. Against the baseline (`B2/fix2/searchidx/`, `logs/searchidx_cmp_pieces.txt`):
  4,605,733 bytes (baseline 4,443,321; with the marks alone 2,349,486); the same `info`,
  28 store fields and 1,155 ids in the same order; `introduced` 273,062 characters
  (235,118; 7,543), `description` 1,141,693 (1,165,932; 815,535). Queried as the site's
  client queries it (`SearchIndex.load` with the site's lunr options;
  `B2/fix2/probes/search_query.mjs`, `logs/search_queries.txt`, `search_queries2.txt`),
  words that only the cited works hold give the baseline's numbers of results, each rank
  of the two codes the baseline's or one place off; the index of marks alone missed the
  code in 3 of the 5 queries and ranked it lower in the other 2 (10th, 8th):

  | query | baseline | marks alone | cited works (now) |
  |---|---|---|---|
  | `Zeng` | 53 results, `approximate_qecc` 14th | 1, not found | 53, 14th |
  | `valence-bond-solid` | 27, `approximate_qecc` 2nd | 15, not found | 27, 2nd |
  | `Cao Zeng Laflamme` | 89, `approximate_qecc` 4th | 15, 10th | 89, 3rd |
  | `Surviving` | 34, `qubits_into_qubits` 2nd | 3, not found | 34, 3rd |
  | `Gottesman Surviving` | 86, `qubits_into_qubits` 2nd | 14, 8th | 86, 3rd |
  | `references` | 54 | 43 | 1,115 |

  The last row is the side effect of the two headings, whose words are in every field
  that cites or has a footnote (question 13). The zoo load's searchable-text step (from
  the FLM processor's last line to the next processor's first) took 9.7 s, against
  10.9 s with the marks alone in the second fixer's build.
- (notes) The first fixer corrected the stylesheet sentence (15 of the 17 style
  definitions, `flm.headings.style` having no parts). Deviation 1's two bookkeeping
  writes (`~/.cargo/.global-cache`, the wasm-opt lock) are recorded for Philippe as a
  side effect of building the module, like B1's yarn archives; another process also
  writes the cargo file (it changed again at 11:37 during this round, which ran no
  cargo command). The memos keyed by `scan_results` are left as they are; a documented
  processing generation of the package, and a release by `ComputedDataProcessor` of the
  fragment values it replaces, stay suggestions.

Checks of the final state (the worktree with G7, G8 and G9, the sitegen clone at
`1c1cf55`; by the third fixer, logs in `B2/fix2/logs/`; every run with `TMPDIR` in the
scratchpad):

| check | result |
|---|---|
| package | `yarn lint` clean; `yarn test` 485 passing (483 with G8, and G9's 2), `git status` unchanged by the suite; `yarn node playground/play_example.mjs` exit 0; Sphinx 8.1.3 (the main checkout's environment, read-only) on `doc/`, output in `B2/fix2/docbuild/`: no warning |
| pack and install | `B2/fix2/repack_install.sh` (the Setup's procedure): 75 files, 2,350,269 bytes, SHA-256 `b0a639fd…` (`pack_pieces.sha256`); offline, the only `YN0013` the tarball read from disk; one `node_modules/@phfaist/zoodb`, 0.3.0, its `src/` equal to the worktree's; the root files restored |
| test build (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`) | exit 0, 66 files written (36 HTML, 69 in `_site/`), 4.1 s, peak resident size 563 MB; no FLM diagnostic, no `<flm:`, no `flm:` followed by a digit; `Pass 1: 63 cached, 4 to fetch` (local sources), `113 considered, 0 failed`; the one generatebibtex brace warning of every earlier run |
| full inspection build (the switch, the LOCAL cache) | exit 0, 89.9 s, peak resident size 931 MB (the machine's load average was 15 to 21 from other processes: the bibliography page alone took 18.5 s, 6.1 s in the second fixer's run), 1,425 files written, 1,428 in `_site/`, 1,277 HTML; 43 lines, all `flm.citations.no-entry` of F1's 18 keys and the same as the second fixer's (`f1_lines_short.txt`), the five G8 lines at the place of the text (`/c/fusion.html` at `gkp.yml#relations.cousins.3.detail:85:89`, and `/c/convolutional.html`, `/c/griesmer.html`, `/c/dodecahedron.html`, `/c/icosahedron.html` at quasi_cyclic.yml, projective.yml and extended_golay.yml); no other diagnostic, no marker; `Pass 1: 4739 cached, 478 to fetch`, `Pass 2: 2124 cached, 0 to fetch`, `7341 considered, 0 failed` |
| full build against the earlier ones | `diff -rq` against the second fixer's fresh build (`B2/fix/once/site_fresh/`): only `dat/searchindex.json` (G9); against B2's `site_final`, the second fixer found only the order of the dump's `zooflm.citations` (the same 5,217 entries); a copy is in `B2/fix2/site_fresh/` |
| search index | above (G9) |
| default build (no switch) | not re-run (it would empty the inspection `_site/` that C uses); the first fixer's: exit 1 after 38.4 s, at gray's meta description (F1) |
| dev mode | the final column of the table above (`B2/fix2/devmem/final.jsonl`; the four snapshots, about 310 MB each, kept in `B2/fix2/devmem/final/`); every page and export after the touch and after the fifth edit equals the fresh build's, the search index included; the dump differs by `zooflm.snippets` (2,800 and 2,799 entries against 2,008) and after the edits by the edited file's modification token; the data clone's status empty at the end |
| `eczoodb` tests (`cd eczoodb && yarn test`) | 75 passing, 2 pending, 0 failing, 16.3 s; 14 manager runs with `113 considered, 0 failed` each (13 at 64 cached and 3 to fetch, one at 63 and 4: the preset entry, whose TTL is seconds; local sources); the test cache keeps its 111 lines |
| `eczcollectbib` tests | 16 passing |
| the clone's eslint | `eczoodb/eczoodb.js` and `site/eleventy.config.js`: no error, no warning |
| not re-run | the Rust checks and `yarn build:wasm` (G8 and G9 change no Rust; G7's ran in B2) |
| git and home state | worktree at `1d7230c`: the brief, `HANDOVER.md` and the package files of G7, G8 and G9 modified, `test/test_dbprocessor_flmprocessor_backrefs.js` new, nothing else; sitegen clone at `1c1cf55`, `status --short` empty, root `package.json` and `yarn.lock` in their committed form, 20 commits over `origin/main` (B2's nine and the four above with both trailers; none touches the root files), push URL the disabled one, `site/_site/` the fresh full inspection build again (the dev-mode run rebuilt it; `diff -rq` against `B2/fix2/site_fresh/` empty); data clone `60bbc93ae` and handbook clone `c73b681`, both clean; the originals at `a2ad583`, `7ade20a2f`, `c73b681`, `status` empty, no file newer than this round's start (read with `--no-optional-locks`); nothing new under `~/.yarn`, `~/.cache` or `/tmp` from this round (the new `~/.npm/_logs` entries are `npm root --global` runs in another folder, by another process) |

Left open, and why. F2 (05's table, the main session's edit) and questions 11, 12, 13
(reworded: keep the cited works' texts or index the marks alone, about half the size)
and 15, all Philippe's. In dev mode the dump's snippet cache holds the snippets of the
previous build's computed short names (2,800 entries against a fresh build's 2,008);
it predates G8 and changes no page, the main session's call whether it matters. Two CSL
ids shared by two `manual` keys each take the entry of the key met first (the
"Duplicate citation key" lines); a different order of encounter swaps them, as the
package without the G8 fix showed in dev mode; this predates G8. `docs/architecture.md`
line 49 of the sitegen still says that FLM is the JS-transpiled version, left for C or
E. The worktree's `CLAUDE.md` describes the searchable-text assembler as
`FLMSearchableDocTextValuesAssembler({ engine })`; its option `pieces` could be added
there by the main session (agents leave `CLAUDE.md` alone). One of the four dev-mode
runs (`B2/fix/once/devmem/after.jsonl`, with G8 fixed) kept about one build's state per
rebuild: the JS heap after each build from the touch's on was 506.6, 675.8, 844.0,
1,013.0, 1,181.7 and 1,350.0 MB, the growth surviving the next zoo load; it did not
reproduce in the three other runs and no retainer was found, so E watches the heap in
its dev-mode runs.

### C. The browser apps

Done 2026-10-19 by C's agent (Opus; node 23.7, the worktree at `cca3628`, the sitegen
clone at `1c1cf55`). Four commits in the sitegen clone, with the two trailers; none in
the data clone or the handbook clone; nothing pushed. One package change in the worktree
(G10 below; uncommitted, for the main session). Logs, probes and the browser profiles:
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/C/`
(below `C/`; `C/probes/` holds the scripts, run with plain `node` from the sitegen
clone, which import its modules by path; `C/logs/` the logs). Every build, test and
probe ran with `TMPDIR` set to `C/tmp/`, every yarn call in the clone with
`YARN_GLOBAL_FOLDER=…/B1close/yarn-global`, `YARN_ENABLE_NETWORK=0` and
`YARN_ENABLE_TELEMETRY=0` (`C/env.sh`).

**The install.** At the start the installed package's `src/` equalled the worktree's
(tarball `b0a639fd…`). After G10 the worktree was packed and installed again by the
Setup's procedure (`C/repack_install.sh`, B2's script with its logs in `C/logs/`): 75
files, 2,350,670 bytes, SHA-256 `40dc1569…` (`C/logs/pack_reexport.sha256`); offline,
the only `YN0013` the tarball read from disk; one `node_modules/@phfaist/zoodb`, 0.3.0,
its `src/` equal to the worktree's; the root `package.json` and `yarn.lock` restored.

**Commits** (sitegen clone, branch `zoodb-flmrs`, on `1c1cf55`):

- `824d2ad` The code graph on the FLM engine: the zoo from the data dump, its labels and
  its pane (5 files). `jscomponents/codegraph/setup_eczoodb.js`:
  `load_eczoodb_from_data(data, { load_wasm })` creates the zoo with the relations
  populator and `use_flm_engine` (the engine of the zoo's own core configuration,
  `flm_options.engine` of `eczoodb.js`, so that `engine.load()` accepts the dump; in a
  browser the neutral loader fetches the module, Node passes `load_wasm`), no FLM
  processor, `continue_with_errors: true` (`'continue'`) and
  `allow_unresolved_references: true` (`unresolved: 'warn'`); it refuses a dump without
  `zooflm` (a zoodb 0.2 dump) with a message; it installs `data.zooflm`
  (`engine.load()`), then the index of a second output context, `codegraph`
  (`set_index(…, { context })`): the dump's `default` index, the entries of codes,
  domains and kingdoms given the address `#jsCallbackRef:TYPE/ID` (deviation 2); it
  loads the dump's `db`, keeps a field compiler on the zoo
  (`eczoodb.codegraph_flm_compiler`, `FLMSimpleContentCompiler({ engine, error_policy:
  'continue' })`) and compiles the `name` fields of the codes, domains and kingdoms in
  place (1,176 fragments, whose text and HTML snippets come from the dump: nothing is
  rendered for them). `eczcodegraph.js`: B1's TEMPORARY stand-in is gone; a name's text
  is the fragment's text snippet (`engine.snippet(f, 'text')`), and FLM text stays as
  it is (the computed short names, strings in the browser's zoo, as before the port).
  `CodeGraphInformationPane.jsx`: the pane through `render_document({ compose, context:
  'codegraph' })` with `rdr`, `ref` and `endnotes()`; the fields shown are compiled for
  each rendering (`compile_flm`; the names are fragments already), the description is
  truncated by `engine.truncate(f, { chars: 700 })` (the former `truncate_to(700)`), and
  the fragments made for a rendering are released once its HTML is rendered (in a
  `finally`); the render's diagnostics go to the console (`console.warn`,
  `format_diagnostic`); the formulas are typeset through the event `flm:region-updated`
  dispatched on the pane (bubbling, `detail: { region: null, artifacts: [] }`) instead
  of `MathJax.typesetPromise([pane])`; a captured link is matched as
  `#jsCallbackRef:TYPE/ID`, gets its click callback and loses its `href`, as before. The
  pane's prop `captureLinksToObjectTypes` is gone, and `ui.jsx` no longer passes it (the
  context fixes the captured types). `CodeGraphInformationPane_style.scss`: the heading
  the engine writes at the top of each list (`.flm-citations-bibliography >
  .flm-pres-block--heading`, likewise for the footnotes) at the list's size (question
  18).
- `d7a2580` The random code widget typesets its formulas through the FLM engine's event
  (1 file): `RandomCodeShower._show_code()` dispatches `flm:region-updated` on its box
  once the new code is in place (`detail.region` the box's id), in place of
  `MathJax.texReset()` and `MathJax.typesetPromise([box])`. Before MathJax has started
  the configuration's listener does nothing, and MathJax typesets the page when it
  starts.
- `4f73710` The preview apps left on zoodb 0.2's FLM layer (G5): /gitpreview not built;
  docs (6 files). `site/eleventy.config.js` ignores `src/gitpreview.html`, with a
  comment naming G5 and this brief; `previewtool/runPreview.js` and
  `jscomponents/dev/codegraph/codegraphdev_setup.js` gain a comment (not ported, and
  why); `docs/jscomponents.md` (the code graph on the dump's FLM data and its `.wasm`
  file, the random code widget's event, the two apps and the dev page not built,
  Parcel's cache at the repository's root), `docs/site.md` (`gitpreview.html` not
  built), `docs/architecture.md` (FLM through flm-rs, the line 49 B2 left).
- `fcefd2b` The headless SVG exporter's bundle rebuilt on the FLM engine (6 files):
  `yarn build` in `jscomponents` with the root's `.parcel-cache` removed first (finding
  5): `_headless_exporter_browser_page.dd6757e8.js` 892,639 bytes (the former, with the
  transpiled FLM layer: 1,918,959), its source map 3,962,130 bytes (8,029,957), the
  page, and the engine's module beside them, `zoodb_flm_wasm_bg.a0cffaf1.wasm`,
  5,157,363 bytes, which the browser code fetches from the exporter's local server.

**The package change (G10; for the main session to commit).** The first Parcel build of
the exporter succeeded, but in Puppeteer the bundle failed when the code graph loaded
the zoo: `ReferenceError: $fcd8dccdb75109a6$exports is not defined` in the field
compiler's constructor. `src/zooflm/engine.js` both imported names from `./fragment.js`
and `./diagnostics.js` and re-exported the two modules with `export * from`; Parcel
2.13.3 with scope hoisting (its default for production builds) then compiles every
import of those names through the engine module (`check_error_policy`,
`apply_error_policy`, `is_fragment` in `flmsimplecontent.js`, `is_fragment` in
`eczcodegraph.js`) to a member of a namespace object `$…$exports` that the bundle never
defines. Reproduced on five files in `C/repro/parcel-exportstar/` (`RESULTS.txt`): a
module that imports from a module it also re-exports with `export *` fails; `export *`
alone, explicit named re-exports, or `export { … }` of the imported bindings work. The
fix, generic and in the package as the rules ask: `engine.js` re-exports the six names
of `fragment.js` and the thirteen of `diagnostics.js` by name, with a comment saying
why; the package's API is unchanged (27 exports of the engine module, each the same
binding as before). Files: `src/zooflm/engine.js`, `test/test_zooflm_engine.js` (a test:
every export of the two modules is the engine module's, and its source has no `export *
from`; it fails on `cca3628`'s `engine.js`, by its second check), `doc/zoodb.zooflm.rst`
(the "Modules" section), `CHANGELOG.md` (a bullet). `yarn lint` clean, `yarn test` 486
passing (485 and the new one), `yarn node playground/play_example.mjs` exit 0, the docs
built without a warning (the main checkout's Sphinx 8.1.3 run read-only from the
worktree's `doc/`, output in `C/docbuild/`). No other module of the package has the
pattern (`src/index.js`, `std/index.js`, `util/index.js`, `zooflm/index.js` re-export
with `export *` but import nothing from those modules).

**The apps.**

| app | level | what it loads | result |
|---|---|---|---|
| code graph (`/code_graph`, its pane, its labels) | 1 | `jsc_profiles/code_graph.js` → `codegraph/setup.js`: the dump `/dat/eczoodata.json` (7,652,206 bytes), the engine's module (`vv/zoodbflmwasm-a0cffaf1.wasm`, 5,157,363 bytes, 1,802,015 gzipped), the bundles (`codegraph-*.js` 875,666 and 3 shared chunks, 1,242,489 bytes in all; the baseline's page loaded 2,332,493 bytes of scripts and a dump of 5,633,320) | in the browser: 1,176 nodes, the labels from the snippets (the 1,155 codes' labels in 1.7 ms under Node; 3 differ from the baseline's raw-source labels, each a correction: `Gauss’ law code`, `B&C` twice), the pane renders with its formulas typeset, its captured links switch the pane; the zoo loads in 551 ms under Node (`C/logs/codegraph_node_full.txt`), a pane renders in 5.7 to 49 ms and releases what it made (1,176 live fragments before and after) |
| headless SVG exporter | 1 | the same code in Puppeteer, from `codegraph/_headless_exporter_browser_code_dist/` | rebuilt and committed (`fcefd2b`); a kingdom graph (`qubits_into_qubits`) exported to SVG on the full data in 1.7 s, 322,366 bytes, 73 distinct labels, 72 equal to the baseline's `vv/grqubitsinto-9205c06a.svg` and one corrected (`B&C` for `B\&C`); the production build's 89 graphs are E's |
| random code widget (home page) | 0 | the data B2 embeds in the page | formulas typeset at load and after each refresh (the event); 443 of the 1,155 previews carry citation marks (652 marks, no footnote mark), linking to `#citation-N`, which the home page does not have (G3's residual; question 16) |
| search widget | 0 | `@phfaist/zoodbtools_search` (unchanged, outside the clone's sources), `/dat/searchindex.json` | `MathJax.typesetClear()`, `texReset()` and `typesetPromise()` work under MathJax 4: `?q=Golay` 34 results, 175 formulas typeset, no delimiter left; `?q=Steane` 69 results, 202 typeset, one result with a raw `\(` (its context window cuts a formula, as before the port); a query with 100 results or more is not typeset at all (the widget's `max_num_results_for_mathjax`, as before) |
| popups, link highlight | 0 | no FLM API | load without an error on the code pages; the highlight acts on the engine's `<li id="citation-N">` (B2's `030d469`) |
| `/gitpreview` (`gitzoopreview/`), `previewtool/` | 2 | `@phfaist/zoodbtools_preview` on the old API | excluded (G5, `4f73710`); what fails and what each needs: below |
| dev page `jscomponents/dev/codegraph/` | none | its committed `eczoodata.json` (a zoodb 0.2 dump) | not ported, as the brief says (excluded, in no build): below |

**MathJax for content updated in place.** The engine's documented mechanism (flm-rs
`docs/rendering.md`, "A page updated in place", and the comments of the configuration
`html_scripts()` writes) is the event `flm:region-updated`, dispatched on the element
whose content is new and bubbling to `document`, where the configuration's listener
typesets, chained on `MathJax.startup.promise`, the formulas of that element
(`.flm-pres-math--passthrough`) that carry no `data-flm-original-html` record. It fits
the pane and the random code widget, whose new content is the engine's HTML; it does
not fit the search widget, whose results are plain text with `\(…\)` delimiters (the
search index's text) and no formula element, so `typesetPromise()` stays there (and is
not the clone's code). `mathjax.load()` (B2) is unchanged; the code graph's profile
awaits it before the graph loads, so the graph never loads on a page where MathJax
cannot load (as before the port).

**Parcel, the stylesheet link and the inline script.** Parcel resolves the layout's
`<link rel="stylesheet" href="/dynamic_style/flm.css">` through the root resolver to the
file Eleventy wrote (`site/_site/dynamic_style/flm.css`), runs it through its CSS
pipeline (lightningcss, the site's browserslist targets) and writes it as
`vv/flm-f1fe95a9.css`, 14,101 bytes from 44,882 (the comments removed, the 15 blocks
`@layer flm { … }` merged into one), the link rewritten in place, before `main.css`;
nothing of the engine's stylesheet is lost (38 of 38 `.flm-` class selectors, 107 of 107
`--flm-` custom properties, 11 of 11 `data-flm-` attributes; in the browser one
`CSSLayerBlockRule`), and `/dynamic_style/` itself is not in the output (not an entry).
The inline MathJax configuration stays inline, in place, minified by terser (its
comment header and the HTML comment `<!-- flm.html.mathjax (feature html) -->` removed,
the code unchanged in substance), and the CDN loader after it keeps its URL and `async`;
Parcel inserts its shared bundles (module and nomodule scripts, a stylesheet) before the
inline script, so the configuration still precedes the loader. In dev mode (Parcel's
dev server) nothing is minified. The link is the better form here, and B2's choice
stays (Parcel requires no change): one stylesheet for every page, cached once, loaded in
`<head>` before the page renders (no unstyled FLM content), in an explicit order before
`main.scss`, and independent of the pages' JavaScript profiles; imported from
JavaScript, as the example does (its main stylesheet is imported from JavaScript too,
for tippy's CSS), the rules would go into the CSS bundles of each of the 7 profiles
that pages use (deduplicated into shared bundles at Parcel's discretion) and depend on
the module scripts.

**G5: what fails, and what each preview app would need.** With `src/gitpreview.html`
built (the ignore reverted for one run, the file restored), the test build with Parcel
exits 1: Parcel's nine errors `node_modules/@phfaist/zoodb/src/zooflm/index.js does not
export …` (`RefInstance`, `$$kw`, `make_render_shorthands` twice,
`ZooTextFragmentRenderer`, `make_and_render_document` twice,
`html_fragmentrenderer_get_style_information`, `ZooHtmlFragmentRenderer`;
`C/logs/build_test_parcel_with_gitpreview.log`), which Eleventy reports as `ENOENT …
rename '.11ty-parcel-temp' -> '_site'` (finding 6). `previewtool/` (a Parcel build of
`previewApp.html` into the scratchpad, `C/logs/previewtool_parcel.log`): exit 1, the
same nine errors, five in `jscomponents/gitzoopreview/renderObject.js` (lines 55, 86,
92, 95) and four in `@phfaist/zoodbtools_preview`'s `dist/module/all.js`. Both apps
need `@phfaist/zoodbtools_preview` ported (its `renderFlm.js`, 14 uses of the old API)
and, for `/gitpreview`, `@phfaist/zoodbtools_gitpreview`; then
`gitzoopreview/renderObject.js` on `render_document()` and the site's renderers (which
take the engine since B1) without `docrefs_placeholder_ref_resolver`, `RefInstance`,
`$$kw` and the text renderer; `installZooFlmEnvironmentLinksAndGraphicsHandlers()` of
both apps replaced by the engine's tables (image addresses as `blob:` or `data:` URLs
in the graphics table; the preview's links through an index context with addresses
without a scheme, since their `invalid:zooObjectLink/…` permalinks would meet
`flm.html.refused-address` as `jsCallbackRef:` did); and the full FLM processor in the
browser (level 2): the citation manager's module (the inlined `autocitefetch`, about
0.84 MB of base64) and citeproc in the bundle, the CORS placeholders for arXiv and DOI
(`CitationSourceApiPlaceholder`) as JavaScript sources of the manager, the CSL style,
the virtual file system as `fs`, the neutral loader. `previewtool/` also serves the app
through `@phfaist/zoodbtools_previewremote`.

**The dev page of the code graph** (`jscomponents/dev/codegraph/`, Parcel target
`dev-codegraph`, built only by `yarn dev-codegraph-build`): excluded, as the brief says
(listed, not ported). Its page runs the ported `codegraph/setup.js` on its committed
`eczoodata.json` (6,600,927 bytes, a zoodb 0.2 dump with `refs_data` and no `zooflm`,
which `load_eczoodb_from_data()` now refuses with a message) and writes no MathJax
configuration (which `mathjax.load()` requires); `try_mk_json.js` and `try_mk_svg_2.js`
import `@errorcorrectionzoo/eczoodb/use_relations_populator.js` and
`use_flm_environment.js`, which the original's `eczoodb` never had, and pass the
top-level `flm_allow_unresolved_*` keys. Porting it means a dump of a build copied in
(7.65 MB more in git) and the engine's scripts in its page; the comment in
`codegraphdev_setup.js` says so.

**The browser check.** Puppeteer 24.4.0 of the clone launched Chrome for Testing
134.0.6998.35, already installed in `~/.cache/puppeteer` (nothing downloaded), headless,
with its profile, disk cache and crash dumps in `C/browser/` (`--disable-crash-reporter
--disable-breakpad`), on the built `_site/` served by the clone's `sirv` on 127.0.0.1,
every request intercepted (`C/probes/browser_check.mjs`): local ones served, MathJax 4's
files (`https://cdn.jsdelivr.net/npm/mathjax@4/…` and the `@mathjax/mathjax-newcm-font`
files) answered from the read-only local copy of MathJax 4.1.3 in flm-rs's
`target/mathjax-probe/node_modules/@mathjax/` (deviation 4), everything else aborted
(only Google Fonts' stylesheet was asked for). Pages: the home page (then three
refreshes of the random code), a code page, `/code_graph#code_ID` (then a click on a
captured link of the pane), `/search?q=…`; the console's errors and warnings, page
errors and HTTP errors recorded, and per page the formulas typeset (`mjx-container`
inside `.flm-pres-math--passthrough`). On the final full build and on the test build,
and on the dev server: no page error; the only console error is the aborted Google
Fonts stylesheet (`net::ERR_FAILED`), and on the full build's code graph page, for the
pane of `triangular_color`, the 404 of `/fig/fig-triangular_color.tpmk.svg` (finding 3,
question 17; on the dev server that image is broken too, without an error); every
formula typeset on every page checked. Numbers in the Checks table.

**Deviations.**

1. A package change (G10), which the rules require for a gap of the package (worktree
   files listed above; the main session commits).
2. The pane's captured links have the address `#jsCallbackRef:TYPE/ID`, not the brief's
   `jsCallbackRef:TYPE/ID`: the engine's HTML output refuses an address whose scheme is
   not `http`, `https`, `mailto`, `ftp`, `tel` or none in a reference written in
   content (`\ref{code:…}`, `\hyperref`), writing the link without its address and the
   Error `flm.html.refused-address` (`C/logs/href_schemes.txt`; on the full data the
   pane of `surface` met it). The address of a fragment has no scheme. This is
   flm-rs's address policy, not a defect, so no workaround of flm-rs; the composer's
   `ref()` writes either form (finding 2).
3. The pane places its lists with the heading the engine writes ("References",
   "Footnotes"); the former pane placed them without one. The title is the
   registry-bound setting `citations.heading_title` (likewise `xnotes.kinds.*.title`),
   which the browser's engine cannot change without leaving the zoo's configuration
   (`engine.load()` would refuse the dump), and no render option leaves it out (F3). The
   pane's stylesheet sizes the heading to the list's text (13.6 px in the browser);
   question 18.
4. MathJax in the browser check came from a local read-only copy (4.1.3, in flm-rs's
   `target/mathjax-probe/`, read only), answered through request interception, since no
   download is allowed; the CDN's `mathjax@4` may be a later 4.x. The fonts of Google
   Fonts were not loaded (aborted).
5. The browser runs updated one file outside the worktree and the scratchpad:
   `~/Library/Application Support/Google/Chrome for Testing/Crashpad/settings.dat` (40
   bytes, in a folder dated 2025-03-07, rewritten at each launch), although every
   profile, cache and crash folder was given in the scratchpad and the crash reporter
   disabled; nothing else (finding 7). The write was avoidable (found by the review):
   Puppeteer's `headless: 'shell'` launches the chrome-headless-shell 134.0.6998.35
   installed beside Chrome for Testing in `~/.cache/puppeteer`, which ran the same
   checks with the same results and left the file alone (Review fixes).
6. The exporter's check is a probe of mine in Puppeteer (one kingdom graph), not the
   site's production build, which is E's.
7. Not asked for: the `docs/` updates; the comments in `previewtool/runPreview.js` and
   `codegraphdev_setup.js`; the pane's diagnostics on the console (the former pane
   printed none; they are F1's under `'continue'`, e.g. on `gray`).
8. Dev mode with the production build's heap (question 21, ruled by the main session
   after the review fixes): the site's `dev` and `dev-test` scripts set
   `NODE_OPTIONS=--max-old-space-size=8192` as its `build` script does (sitegen
   `0ac4fb3`, `site/package.json` alone; the root `package.json` and `yarn.lock` in
   their committed form). Not run since: E runs dev mode with it and measures the peak
   against the baseline's.

**Findings** (G10, G11 and F3 also in the gaps table above).

1. G10 (package, fixed): Parcel 2.13 mis-bundles `export * from` in a module that also
   imports from the re-exported module (above).
2. G11 (package, not fixed; deferred to Philippe, not needed by the EC zoo: question
   22): the composer's `ref()` and `refhref()` write an index entry's address as given,
   while the same entry, met through `\ref` in content, goes through flm-rs's address
   policy: an index whose addresses have another scheme (`jsCallbackRef:`, `invalid:`,
   `javascript:`) gives links from `ref()` and links without an address plus an Error
   from `\ref` (`C/logs/href_schemes.txt`: `javascript:void(0)` passes `ref()`). The EC
   zoo's addresses are paths and fragments.
3. The code graph pane shows a float when it falls within the description's first 700
   characters: 15 of the 1,176 panes (`pless_symmetry`, `polygon`, `120cell`, `24cell`,
   `600cell`, `disphenoidal288cell`, `hessian_polyhedron`, `simplex_spherical`,
   `2t_qutrit`, `hessian_qsc`, `css_4_1_2`, `stab_6_4_2`, `4612_color`, `488_color`,
   `triangular_color`; `C/logs/pane_images.txt`). Its image's address comes from the
   dump's graphics table, `/fig/fig-….svg`, which the Parcel-built site does not serve
   (Parcel moves the images it meets in the pages to `vv/` under hashed names and keeps
   no `fig/`), so the image is a 404 and a console error. Only the build without Parcel
   serves `/fig/` and shows the image. In dev mode the image is broken too, without a 404
   (corrected by the review; this finding said `/fig/` was served there): the Eleventy
   dev server with Parcel's middleware, on 8080 as on Parcel's 3000, answers
   `/fig/fig-triangular_color.tpmk.svg` with the home page's HTML (status 200,
   `text/html`, 885,491 bytes, the body of `/`), as it answers `/dynamic_style/flm.css`
   and any path that is neither a page nor a bundle, although Eleventy wrote the file
   (`_site/fig/fig-triangular_color.tpmk.svg`, 16,389 bytes; Parcel's
   `.11ty-parcel-temp/` has no `fig/`). The baseline's pane showed no image for these
   either (the zoodb 0.2 dump's graphics had `src_url: null`). Not worked around
   (question 17).
4. F3 (flm-rs, a note for 05's table, no request): the lists of footnotes and citations
   carry a heading whose text is fixed when the registry is built; no render option
   places them without it (deviation 3).
5. The `build` script of `jscomponents` removes `jscomponents/.parcel-cache`, but Parcel
   keeps its cache at the repository's root, beside `yarn.lock`: after the package's
   reinstall, `yarn build` reused the previous build (same bundle hash, "Built in
   719ms") and the result did not even load in Puppeteer; with the root's cache removed
   the build was right. Predates the port; flagged in `docs/jscomponents.md`, the script
   left as it is (question 19).
6. Two behaviors of `@kitschpatrol/eleventy-plugin-parcel` that predate the port: a
   Parcel error is reported by Eleventy as `ENOENT … rename '.11ty-parcel-temp' ->
   '_site'` (the real errors are in the log above it); and `yarn dev`'s Parcel writes
   into `site/.11ty-parcel-temp/`, which stays when the server is stopped, so the next
   `yarn build*` (whose scripts remove `_site` and the root cache, not that folder)
   builds into it and moves it to `_site/` with the dev run's pages: the test build
   after the dev run had 1,284 HTML pages instead of 35 (`C/logs/
   build_test_parcel_after_dev_stale.log`); run again with the folder gone (the rename
   had moved it), it had 35 (question 19).
7. Chrome for Testing on macOS rewrites its Crashpad `settings.dat` in `~/Library`
   whatever its profile folder (deviation 5); chrome-headless-shell, which Puppeteer
   launches for `headless: 'shell'`, does not (the review's and the review fixes'
   browser runs: the file kept its time of 13:26:21). The production exporter
   (`jscomponents/codegraph/headlessGraphExporter.js:113`, `headless: "new"`, no
   `userDataDir`, so its profile goes to `TMPDIR`) launches Chrome for Testing and will
   rewrite the file in E's `yarn build`, and in D's handbook generation as well:
   `mkeczhandbook/genltx_handbook.js` imports `CodeGraphSvgExporter` from
   `@errorcorrectionzoo/jscomponents/codegraph/headlessGraphExporter.js`, whose
   `setup()` makes that launch. The agents' own probes use `headless: 'shell'` (the
   installed chrome-headless-shell). Ruled by the main session: the production exporter
   runs as is in D and E (Philippe's own builds do the same), and the write is
   disclosed, not avoided (For D and E).
8. The full build with Parcel peaks at about 3.1 GB resident (the Parcel run of 1,485
   bundles in 71 to 84 s), against B2's 0.9 to 1.35 GB without Parcel; the dev server
   with Parcel reached 4.38 GB over its first build, one rebuild and the page requests.
   That run was the lucky one (corrected by the review): Eleventy and Parcel's dev
   server run in one Node process, whose JS heap V8 caps at about 4,080 MB by default
   here, and three of four runs of the same steps crashed with `JavaScript heap out of
   memory` in Parcel's rebuild for the first page request after Eleventy's rebuild. The
   site's `build` script sets `NODE_OPTIONS=--max-old-space-size=8192`; `dev`,
   `dev-test` and `build-simple` do not. With that option the run survived two rebuilds
   (Checks; question 21).

**Checks** (logs in `C/logs/`).

| check | result |
|---|---|
| package | `yarn lint` clean; `yarn test` 486 passing (`pkg_test.log`); `play_example.mjs` exit 0; Sphinx: build succeeded, no warning (`docbuild.log`); pack 75 files, 2,350,670 bytes, SHA-256 `40dc1569…`; install offline, `src/` equal |
| `yarn build` in `jscomponents` | exit 0 in 5.6 s, peak resident size 876 MB, Parcel 4.3 s (`jsc_build3.log`); before G10 the bundle built (`jsc_build1.log`) but failed at runtime with the `ReferenceError` above |
| the exporter in Puppeteer | Chrome 134.0.6998.35; the page, its bundle and the `.wasm` served locally, nothing else requested; `qubits_into_qubits` to SVG in 1,707 ms, 322,366 bytes, 73 distinct labels (72 as the baseline's, 1 corrected); the only console error the page's `/favicon.ico` 404 (the dist has none, as before) |
| test build without Parcel (`ECZOO_DEVELOPMENT_MODE=1 yarn build-test-noparcel`) | exit 0, 65 files written (one less than B2's: `gitpreview.html`), 68 in `_site/`, 35 HTML, 3.9 s, peak 530 MB; no diagnostic; no `<flm:`, no `flm:` followed by a digit (`build_test_noparcel_final.log`) |
| test build with Parcel (`yarn build-test-simple`) | exit 0, Parcel 126 bundles in 20.9 s, 65 files written, 171 in `_site/`, 35 HTML, 24.9 s, peak 3,044,950,016 bytes (a first run: 28.7 s, 1.89 GB); no diagnostic; no marker in the HTML, data or stylesheets (the strings `<flm:` and `flm:` with a digit occur only in the engine's own code in the two `codegraph-*.js` bundles, its marker templates and patterns); the 319 references to 36 local scripts and stylesheets all present; 24 bundles parse (`node --check`, module bundles as ES modules); retrievals `Pass 1: 63 cached, 4 to fetch`, `113 considered, 0 failed` (`build_test_parcel_final.log`) |
| test build with `gitpreview.html` | exit 1: Parcel's nine "does not export" errors (G5 above) |
| full inspection build with Parcel (`ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL ECZOO_FLM_CONTINUE_WITH_ERRORS=1 yarn build-simple`, `/usr/bin/time -l`) | exit 0, 119.3 s, peak resident size 3,133,145,088 bytes; Parcel 1,485 bundles in 71.1 s; 1,424 files written, 1,520 in `_site/` (`build_full_parcel_final.log`); a first run: 135.6 s, 3,073,769,472 bytes, Parcel 84.0 s, the same output |
| pages against the baseline | 1,276 HTML (baseline 1,277: `gitpreview.html` not built, G5), path for path otherwise: 1,155 code pages, 86 lists and `/all`, 3 domains, 18 kingdoms, 14 single pages (15); `dat/` the same 5 files, each byte-identical to B2's fresh full build (`B2/fix2/site_fresh/`) |
| diagnostics | 43 lines, all `flm.citations.no-entry` of F1, the same 43 (page and place) as B2's (`f1_lines_short.txt`); no other diagnostic; no marker in HTML, data or stylesheets; retrievals `Pass 1: 4739 cached, 478 to fetch`, `Pass 2: 2124 cached, 0 to fetch`, `7341 considered, 0 failed`, no network |
| scripts, stylesheets, images the pages reference | 12,537 references to 36 local scripts and stylesheets, 135 to local images: none missing; the external ones: the Google Fonts stylesheet and the MathJax loader, on each of the 1,276 pages (`full_check_site.txt`) |
| bundles parse | 24 of 24 (`node --check`; `full_bundles_parse.txt`) |
| bundles against the baseline's (`vv/`, both copies, module and nomodule, in bytes) | `codegraph` 587,725 / 588,226 → 877,864 / 875,666; `gitpreview` 2,113,374 / 2,114,564 → not built; `about`, `default` 2,367 / 2,382 → 2,248 / 2,263; `codepage` 3,839 / 3,824 → 3,705 / 3,720; `home` 4,677 / 4,692 → 4,627 / 4,612; `search` 54,792 / 54,807 → 54,715 / 54,700; `editcodelega` 927,266 / 927,108 → 926,890 / 927,048; `setup` 978 / 993 unchanged; shared scripts 10 → 8 (the two of 1,379,150 and 1,377,740, which held the transpiled FLM layer for the code graph and the git preview, gone; 342,358 / 342,712 → 342,153 / 342,507); `main.css` 40,050 → 40,773; shared stylesheets 8 → 7; new `flm-f1fe95a9.css` 14,104 and `zoodbflmwasm-a0cffaf1.wasm` 5,157,363; 34 files and 9,802,856 bytes against 37 and 11,044,934 (`bundles_cmp_final.txt`) |
| the stylesheet bundle | 38 of 38 class selectors, 107 of 107 custom properties, 11 of 11 `data-flm-` attributes of the engine's stylesheet (an engine of the zoo's configuration, the one that loads the dump); 15 `@layer flm` blocks merged into 1 (`css_check_full.txt`) |
| the entry points in the bundles | home: `random-code-box`, `flm:region-updated`; code page: `info-popup-button-zone`, `visual-highlight`; code graph: `flm:region-updated`, `jsCallbackRef`, `zoodbflmwasm-`, `set_index`, `eczoodata.json`, cytoscape; search: `EczooSearchWidget`, `typesetPromise`; every profile `startup.promise` (`entry_points_full.txt`) |
| the code graph's data | `dat/eczoodata.json` parses: 1,155 codes, 14 spaces, 3 domains, 18 kingdoms, 87 code lists, 156 users; `zooflm` with settings hash `333140776b39fc4f`, accepted by the browser zoo's engine (`engine.load()` under Node, the same code); its index 1,589 entries, 5,217 citations, 27 images, 2,008 snippets, each with its text |
| browser, full build (`browser_fullfinal*.json`) | home: MathJax 4.1.3 started, the random code's formulas typeset at load and after 3 refreshes; `/c/steane`: 84 of 84 formulas typeset, 79 citation marks, the FLM stylesheet one layer rule; `/c/gray` (`browser_full2.json`, the first full build, the same bundles): 49 of 49; `/code_graph#code_steane`: 1,176 nodes, label `[[7,1,3]] Steane code`, the pane with 21 of 21 formulas typeset, 28 captured links and no `#jsCallbackRef` address left, 3 citation marks and 4 references under the heading (13.6 px), a click on a child code switched the pane (4 of 4 typeset); `#code_gray`: the pane with F1's recovery markup (`.flm-pres-dropped`) and its diagnostic as the console's one warning (`browser_full2.json`); search `Golay` 34 results, 175 formulas typeset, `Steane` 69 and 202 (one result's two fields keep a `\(` that the context window cuts, as before the port); console errors: the aborted fonts, and the 404 of finding 3 on the code graph page; no page error |
| browser, test build and dev server | test build (`browser_testfinal.json`): `/c/css` 71 of 71, the code graph 14 nodes, the pane 13 of 13 and after the click 7 of 7, search `stabilizer` 4 results and 43 formulas typeset; dev server (`browser_dev.json`): as the full build, and the pane's image of `triangular_color` broken too, though without a 404 (the server answers it with the home page's HTML; corrected by the review, finding 3) |
| dev mode with Parcel (`yarn dev`, the full data, the LOCAL cache, the switch) | first build 49.0 s (1,424 files), then Eleventy's server on 8080 and Parcel's dev server on 3000; the first page request waited 45.6 s for Parcel, later ones 0.01 to 0.02 s (the four pages 200; in the browser check no HTTP error, bundles and the `.wasm` file included); a touch of `codes/quantum/qubits/stabilizer/qubit_css.yml` rebuilt in 32.7 s, the next request waited 62.9 s for Parcel; 86 diagnostic lines, F1's 43 twice; peak resident size 4,383,457,280 bytes over 410 s; stopped with SIGINT, then SIGTERM for the Parcel watcher left holding ports 3000 and 3001 (exit 129); the data clone's status empty after (`dev_parcel.log`). Not reliable (found by the review): the same steps crashed in three of four runs (the review's two, `C/review/logs/dev.log` and `dev2.log`, and the review fixes' one, `C/fix/logs/dev.log` with `dev_events.txt`): Parcel's rebuild for the first request after Eleventy's rebuild ran out of JS heap at about 4,080 MB (`FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`), the request got no answer after 62 to 91 s, later requests were refused, yarn exited 129; with `NODE_OPTIONS=--max-old-space-size=8192` the review's run survived two rebuilds (3 builds, F1's 43 lines three times, peak 3,882,860,544 bytes; `dev3.log`); question 21 |
| `eczoodb` tests, `eczcollectbib` tests | 75 passing, 2 pending; 16 passing; the test cache keeps its 111 lines |
| the clone's eslint | the seven changed JavaScript files of `824d2ad`, `d7a2580` and `4f73710` but the dev page's: no error, no warning; `codegraphdev_setup.js`: the 5 `no-unused-vars` errors it had before (its unused alternative options) |
| git and home state | worktree at `cca3628`: this brief and the package files of G10 modified, nothing else; sitegen clone at `fcefd2b`, `status --short` empty, root `package.json` and `yarn.lock` equal to `main`, 24 commits over `origin/main` (these four with both trailers), push URL the disabled one, `site/_site/` the final full inspection build with Parcel; installed `src/` equal to the worktree's; data clone `60bbc93ae`, handbook clone `c73b681`, both clean; the originals at `a2ad583`, `7ade20a2f`, `c73b681`, `status` empty, no file newer than this part's start (read with `--no-optional-locks`); nothing new under `~/.yarn` or `~/.cache`; under `~/.npm/_logs` only other processes' `npm` runs (their logs name other working folders); under `/tmp` nothing of this part (the one new entry, a socket `zeb_def_ipc_65498`, is one of 1,864 such sockets since July of another program); `~/Library/…/Chrome for Testing/Crashpad/settings.dat` rewritten (deviation 5) |

**Open questions** (numbered after B2's).

16. The random code previews (G3's residual): 443 of the 1,155 previews carry citation
    marks (652 in all) that link to `#citation-N`, which the home page does not have;
    flm-rs has no option to leave the marks out (05), and the HTML is not patched or
    the marks hidden. Keep them, ask flm-rs for such an option, or show the previews
    without citations some other way?
17. The 15 code graph panes whose description shows a float in its first 700 characters
    show a broken image on the site built with Parcel (a 404) and in dev mode (the dev
    server answers the image's address with the home page's HTML); only the build
    without Parcel shows them (finding 3). Serve `/fig/` in the built site
    (the dump's image addresses would then resolve for every app that loads it), cut
    the pane's preview at the description's first paragraph as the random code previews
    do (which leaves the floats out, and shortens the 610 descriptions of several
    paragraphs), or leave it?
18. The pane's lists of references and footnotes now come with their heading (deviation
    3, F3), sized small. Keep?
19. The sitegen's build scripts and Parcel's leftovers (findings 5 and 6, predating the
    port): should `jscomponents`' `build` remove the root's `.parcel-cache`, and the
    site's `build*` scripts remove `site/.11ty-parcel-temp/`? Not changed here (the
    sitegen's own instructions ask to flag such issues).
20. G5 stays Philippe's (port `zoodbtools` in a part of its own, or leave the two apps
    for later); what each needs is above. G11 is deferred to Philippe, not needed by
    the EC zoo (question 22).
21. Dev mode with Parcel on the full data (finding 8, found by the review): with the
    default heap, three of four runs of `yarn dev` with a touch of a code file crashed
    at the first page request after Eleventy's rebuild (`JavaScript heap out of memory`
    at about 4,080 MB); with `NODE_OPTIONS=--max-old-space-size=8192`, which the
    `build` script has, the run survived two rebuilds. Give `dev` and `dev-test` (and
    `build-simple`, whose Parcel builds peak at 3.1 to 3.5 GB) the same option, or first
    find what makes the rebuild peak (Parcel's dev server keeps its graph in Eleventy's
    process; B2 measured Eleventy's own heap, without Parcel, at about 0.5 GB after each
    build, but saw one dev run grow by about 169 MB per build, B2's open item of heap
    retention)? Whether the port raised the peak is not known (the baseline's dev mode
    with Parcel was never measured). Ruled by the main session: `dev` and `dev-test` get
    the `NODE_OPTIONS=--max-old-space-size=8192` that the production `build` script sets
    (sitegen `0ac4fb3`, deviation 8; `build-simple` unchanged). It stays a question for
    Philippe: keep the option, or reduce the peak?
22. G11 (deferred to Philippe; not needed by the EC zoo, whose addresses are paths and
    fragments): should the composer's `ref()` and `refhref()` apply the same address
    allowlist as the engine's HTML output (`http`, `https`, `mailto`, `ftp`, `tel`, or
    no scheme), refusing for example `javascript:void(0)`?

**For D and E.**

- D: pack the sitegen clone at `b72901a` or later (the review fixes' two commits on
  `fcefd2b`), and the worktree with G10 (the
  tarball `40dc1569…` or the main session's commit): the handbook's exporter, and any
  bundle of the engine, needs G10. `jscomponents`' package now carries the `.wasm` file
  beside the exporter's bundle (5.16 MB), served by the exporter's `sirv`. The
  handbook's generation runs that exporter (`mkeczhandbook/genltx_handbook.js` imports
  `CodeGraphSvgExporter` from
  `@errorcorrectionzoo/jscomponents/codegraph/headlessGraphExporter.js`, whose `setup()`
  launches Puppeteer with `headless: "new"` and no `userDataDir`), so Chrome for Testing
  rewrites its Crashpad `settings.dat` in `~/Library` in D as in E's `yarn build`
  (finding 7). Ruled by the main session: the production exporter runs as is in D and E
  (Philippe's own builds do the same), and the write is disclosed, not avoided; the
  agents' own probes use `headless: 'shell'` (the installed chrome-headless-shell),
  which leaves the file alone.
- E: the production build (`yarn build`) runs the exporter (verified here on one graph
  only); remove `site/.11ty-parcel-temp/` after any `yarn dev` and the root's
  `.parcel-cache` before `yarn build` in `jscomponents`; expect 1,276 pages (no
  `gitpreview.html`), the bundles above, about 3.1 GB of peak resident size with
  Parcel, 15 broken pane images (with Parcel and in dev mode) until question 17 is
  decided, the pane's headings, the
  search widget not typesetting a result list of 100 or more (as before), the code
  graph page loading 1.24 MB of scripts, a 5.16 MB `.wasm` file (1.80 MB gzipped) and a
  7.65 MB dump (baseline 2.33 MB and 5.63 MB). Its screenshots need MathJax and the
  fonts: either the network (Philippe's call) or a local MathJax as here (fonts
  missing); Chrome for Testing rewrites its Crashpad settings file in `~/Library` at
  each launch, chrome-headless-shell does not (below).
- E: `yarn dev` and `yarn dev-test` set `NODE_OPTIONS=--max-old-space-size=8192` since
  sitegen `0ac4fb3` (question 21, ruled; three of four runs with the default heap
  crashed at the first request after a rebuild): E runs dev mode with it and measures
  the peak resident size against the baseline's (a dev run of the baseline with the
  same option, if E rebuilds it, tells whether the port raised the peak).
  `build-simple` has no heap option (its Parcel builds peak at 3.1 to 3.5 GB).
- E: the probes launch chrome-headless-shell (`headless: 'shell'`), which leaves
  `~/Library` alone; the production exporter (`headlessGraphExporter.js:113`, `headless:
  "new"`, no `userDataDir`, its profile in `TMPDIR`) launches Chrome for Testing, which
  rewrites its Crashpad `settings.dat` at each launch: it runs as is and E discloses the
  write (the main session's ruling, in D's item).
- E: the production exporter calls `load_eczoodb_from_data()` once per graph (89), so it
  makes 89 zoos and engines that are never `free()`d; the glue's `FinalizationRegistry`
  frees the cores on GC (12 sequential loads under Node stayed at about 80 MB external),
  but a page that keeps every graph alive costs about 18 MB of heap and 4.5 MB of wasm
  per graph (the review's measures under Node): E watches the exporter page's memory
  over the 89 exports.

**Review fixes** (2026-10-19). The review (Opus, read-only; its probes and logs in
`C/review/`) gave the verdict "fix first": two must-fix items (dev mode with Parcel
reported as working, and the pane images said to show in dev mode), two should-fix
items (the Crashpad write presented as unavoidable, the diagnostics of the dump's
loading discarded), notes, and "accepted" for the seven deviations. One fixer (Opus;
its probes and logs in `C/fix/`, every build and probe with `TMPDIR` in `C/fix/tmp/`,
every yarn call offline with the Setup's `YARN_GLOBAL_FOLDER`) made all four; only the
choice of a fix for dev mode needs a ruling (question 21, new). Two commits in the
sitegen clone on `fcefd2b`, each with the two trailers and with the root `package.json`
and `yarn.lock` in their committed form: `ac69074` and `b72901a`. No package change
(the installed `src/` still equals the worktree's, tarball `40dc1569…`); nothing in the
data clone or the handbook clone; nothing pushed.

- (must) *Dev mode with Parcel.* The review ran `yarn dev` twice as C had (the full
  data, the LOCAL cache, the switch, a touch of
  `codes/quantum/qubits/stabilizer/qubit_css.yml`, then a page request): both runs
  crashed with `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed
  - JavaScript heap out of memory` at about 4,080 MB of JS heap, during Parcel's rebuild
  for the first request after Eleventy's rebuild; the request got no answer after 62 to
  82 s and yarn exited 129 (`C/review/logs/dev.log`, `dev2.log`). With
  `NODE_OPTIONS=--max-old-space-size=8192` the same run survived two rebuilds (3 builds,
  F1's 43 lines three times, peak 3,882,860,544 bytes; `dev3.log`). The fixer ran it
  once more with the default heap (`C/fix/probes/dev_run.sh`; `C/fix/logs/dev.log` and
  `dev_events.txt`): first build 50.3 s, the first request answered after 68.8 s
  (Parcel's first build), the touch's rebuild 63.5 s (the machine was loaded: load
  average 7 to 28), then the request for `/c/qubit_css` got no answer after 91 s,
  Parcel's rebuild ran out of heap (a mark-compact at 4,080.7 MB), the server was gone
  and yarn exited 129; F1's 43 lines twice, no other diagnostic. Three of four runs
  crashed; C's run was the lucky one. Finding 8, the Checks row, question 21 and the
  items for E now say so. The scripts are left as they are: they are the sitegen's own,
  and the choice between the heap option and an investigation of the peak is question
  21.
- (must) *The pane images in dev mode.* Confirmed with curl in the fixer's dev run,
  before the touch: on 8080 and on Parcel's 3000, `/fig/fig-triangular_color.tpmk.svg`,
  `/dynamic_style/flm.css` and a missing `/no/such/file.svg` all answer 200,
  `text/html`, 885,491 bytes, the body of `/` (the same MD5), while Eleventy wrote
  `_site/fig/fig-triangular_color.tpmk.svg` (16,389 bytes) and Parcel's
  `.11ty-parcel-temp/` has no `fig/`; the review's browser run on the dev server found
  the image not loaded. Finding 3, the Checks row, the browser check's paragraph,
  question 17 and the items for E are corrected: the 15 images show only in the build
  without Parcel.
- (should) *The Crashpad file.* Deviation 5 and finding 7 now say that the write is
  avoidable with `headless: 'shell'`, and that the production exporter's launch
  (`headlessGraphExporter.js:113`, `headless: "new"`) is E's to accept or to put to
  Philippe (For D and E). The fixer's probes (the browser checks and the exporter's)
  all launched chrome-headless-shell 134.0.6998.35: `settings.dat` kept its time of
  13:26:21 through them.
- (should) *The diagnostics of the dump's loading.* `ac69074`:
  `load_eczoodb_from_data()` prints what `engine.load()` and the `codegraph` context's
  `set_index()` return on the console (`warn_diagnostics()`, `format_diagnostic`,
  `console.warn`, prefixed `Code graph, …`), as the pane does for its renders. Under
  Node (`C/fix/probes/load_warn.mjs`, `C/fix/logs/load_warn_full.txt`): the full dump
  gives no warning (the zoo loaded in 550 ms, 1,155 codes); a copy of it whose index
  display of `code:approximate_oaecc` has an unclosed group gives the Error twice, once
  for the dump's `default` index and once for the `codegraph` context
  (`index:code:approximate_oaecc:1:10: error: unclosed group: expected ‘}’ before end of
  input [core.groups.unclosed-group]`). The clone's eslint on the file: clean. The
  exporter's bundle holds this code, so `b72901a` rebuilds it (`yarn build` in
  `jscomponents`, the root's `.parcel-cache` removed first; 6.2 s, peak 877,592,576
  bytes): `_headless_exporter_browser_page.cdd65f0e.js` 892,825 bytes (was 892,639),
  its source map 3,963,037 (3,962,130), the page; the `.wasm` file unchanged. In
  chrome-headless-shell the kingdom graph `qubits_into_qubits` exported to an SVG
  byte-identical to C's (322,366 bytes, 73 labels), with only local requests and no
  console message (`C/fix/logs/exporter_probe.txt`).

The checks run again (`C/fix/logs/`). Test build with Parcel (`yarn build-test-simple`,
`build_test_parcel.log`): exit 0, Parcel 126 bundles in 47.8 s, 65 files written, 171 in
`_site/`, 35 HTML, 54.5 s, peak 1,818,230,784 bytes (the machine loaded); no diagnostic,
no marker; the 319 references to local scripts, stylesheets and icons and the 844 local
links all resolve; 24 of 24 bundles parse; the stylesheet bundle 38/38 classes, 107/107
custom properties, 11/11 attributes, 15 `@layer` blocks into 1; retrievals 113
considered, 0 failed; `vv/` equal to the review's test build but for the two
`codegraph-*.js` bundles (878,044 and 875,846 bytes, 180 more each); in the browser
(`browser_test_shell.json`) `/c/css` 71 of 71 formulas typeset, the code graph 14
nodes, the pane 13 of 13 and after a click 16 of 16, search `stabilizer` 4 results and
43 typeset, the console's only error the aborted fonts. Full inspection build with
Parcel (`build_full_parcel.log`): exit 0, 136.5 s, peak 2,535,276,544 bytes, Parcel
1,485 bundles in 84.4 s, 1,424 files written, 1,520 in `_site/`, 1,276 HTML; against C's
final `_site/` (the review's copy) the only differences are the two `codegraph-*.js`
bundles and `code_graph.html`, equal once their names are mapped; `dat/` byte-identical;
the 43 diagnostic lines identical to the review's list, all F1's; retrievals `4739
cached, 478 to fetch`, `2124 cached, 0 to fetch`, 7,341 considered, 0 failed. Static
checks (`full_check_site.json`, `full_bundles_parse.txt`, `css_check_full.txt`): 12,537
references to local scripts and stylesheets and 135 to images, none missing; 90,558
local links resolve; no marker; 24 of 24 bundles parse; the stylesheet bundle 38/38,
107/107, 11/11, 15 blocks into 1; in the head of `/c/steane` the MathJax 4
configuration before its loader, `flm.css` before `main.css`, no MathJax 3; the bundles
34 files and 9,803,216 bytes (C's table plus the 360 bytes the two `codegraph` bundles
gained: 878,044 / 875,846). In the browser
(`browser_full_shell.json`, chrome-headless-shell): the home page's random codes typeset
over four refreshes; `/c/steane` 84 of 84, 79 citation marks; the code graph 1,176
nodes, the pane of `steane` 21 of 21 with 28 captured links and the heading at 13.6 px,
after the click (`triangular_color`) 4 of 4 and its image the 404; the kingdom, domain
and empty panes and their clicks; search `Golay` 34 results, 175 typeset; no console
warning (so nothing printed by the loading), the console's errors the aborted fonts and
that 404; no page error. `site/_site/` holds this full build; the dev run's
`site/.11ty-parcel-temp/` was removed; the data clone's status stayed empty (the touch
changes only the time).

Left open: question 21 (Philippe's, or a ruling of the main session); the production
exporter's Crashpad write (E's, or Philippe's); the review's notes for E (the 89 zoos and
engines of the exporter page, `build-simple` without a heap option), carried into the
items for E. The review noticed that the original `eczoo_sitegen/.git` folder's time had
changed today (14:06:17) with its index, `HEAD` and `FETCH_HEAD` unchanged; during this
round it changed again (14:21:46), the index still of 2026-10-14. The original is open
in Philippe's Zed editor (its ESLint, vtsls and Tailwind language servers run with the
original as their working folder since 2026-10-16), whose git integration likely runs
`git status` there without `--no-optional-locks` (which creates and removes
`index.lock`, changing the folder's time and not the index's); no command of this round
writes there (every git command on the originals passed `--no-optional-locks`).
