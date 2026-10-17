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
| G3. Marks and floats in previews | the random code widget's data (no citation or footnote marks, no floats), the meta descriptions, the code graph's info pane | `render_document()` takes no per-call render options (the core merges the settings' render options into every run); a page without `endnotes()` gets `zoodb.compose.piece-not-placed` and keeps its marks | to confirm first: whether `truncate({ first_paragraph })` already leaves out the floats (the data's rule is a short first paragraph), and whether flm-rs has render options that drop marks; if it has, the engine passes per-call render options through; if not, a question for flm-rs, no request |
| G4. A Unicode→LaTeX table | `generatebibtex.js` (the site's BibTeX export, loaded with the module) and, commented out, the handbook's `mk_bib.js` | pylatexenc's `get_builtin_uni2latex_dict`, shipped in the deleted `flm-js-src/`; not FLM | a copy of the table as data in the sitegen (pylatexenc is MIT), an npm package, or `render_latex` with flm-rs's `unicode` render option of the recomposed output: Philippe's choice |
| G5. The preview apps | `previewtool/` (`yarn preview`, the live preview of data edits) and `/gitpreview.html` (`jscomponents/gitzoopreview/`) | both run through `@phfaist/zoodbtools_preview`, a package of the `zoodbtools` repository (not among the repositories of this step; its installed copy read in the sitegen's `node_modules`), on the old API | a clone and port of `zoodbtools` (a part F), or the two apps left on the old API until later: Philippe's choice |

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

The temporary dependency of the sitegen clone (Yarn 3.3.0 through corepack, which has
it cached): a root `resolutions` entry `"@phfaist/zoodb": "file:$W/scratch/zoodb-flmrs.tgz"`
in `$E/eczoo_sitegen/package.json`, then `yarn install` at the clone's root (with
`YARN_ENABLE_NETWORK=0` first: the copied cache should hold every archive, the git-URL
packages included; if not, the install with the network, and the Results say which
packages were fetched). One edit replaces the five git URLs; if `resolutions` does not
take, the five `package.json` files are edited instead. Checked after each install:
exactly one `node_modules/@phfaist/zoodb`, version 0.3.0
(`find $E/eczoo_sitegen/node_modules -path '*/@phfaist/zoodb/package.json'`). After a
new pack of the worktree, `yarn install` again (a tarball's lock entry carries its hash).
The root `package.json` and `yarn.lock` are never staged; each part ends with `git -C
$E/eczoo_sitegen checkout -- package.json yarn.lock` and a `git status --short` that
shows nothing but ignored output. The handbook clone does the same with Yarn 4.6.0 (D).

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

- Dependencies: the sitegen clone's four workspaces packed (`yarn pack` in
  `eczoodb/`, `eczoohelpers/eczcollectbib/`, `jscomponents/`, `_zoodb_citations_cache/`,
  out to `$E/pack/`), and a `resolutions` block in the handbook clone's `package.json`
  for `@phfaist/zoodb` (the worktree's tarball) and the four packages (their tarballs),
  `yarn install` (Yarn 4.6.0, offline first with the copied cache); one
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
- A baseline rebuild is not needed for the HTML. For time and memory, the sitegen clone's
  `main` can be built against zoodb 0.2.1 (the lock's git commit `bb94f3e`, not npm) in
  a `git worktree` of the clone beside a worktree of the data clone at the same data
  commit: feasible offline as far as the survey can tell (the copied Yarn cache holds the
  lock's archives, the git-URL packages included; corepack has Yarn 3.3.0; Puppeteer's
  Chrome 134 is cached), to be confirmed by `YARN_ENABLE_NETWORK=0 yarn install`; if it
  fails, E reports the new build's numbers alone.
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

## Results
