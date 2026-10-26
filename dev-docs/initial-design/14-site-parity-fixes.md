# 14 — Fixes after step 6: the EC zoo site as it was (2026-10-26)

Philippe's message of 2026-10-26, after reading brief 13's questions and the screenshots
(`scratch/eczoo/screenshots/index.html`):

> - Site choices deviating from existing behavior were mostly misguided. "links in FLM
>   content no longer opening a new tab; the 652 citation marks in random code previews;
>   the pane's small References heading" -> no. Expected behavior: external links open in
>   a new tab; random code previews strip/hide citation marks; don't change cosmetic
>   choices in site appearance/markup/layout, so don't include new headings.
> - Furthemore, from the screenshots: too much space around equations, approximate
>   previous behavior; some lists columns are no longer displayed in italic font (e.g.
>   /list/quantum_cyclic)
> - Important: citation text should be inline in plain-text search documents, as they
>   were before.

This answers brief 13's questions 31, 16, 18 and 13, and through its first rule also 15
(the `\paragraph` stop, the last cosmetic choice of the "Site choices" group). The rule
for everything below: **the site looks and behaves as it did on zoodb 0.2.1** (the
baseline: the original `eczoo_sitegen` at `a2ad583`, whose own built site
`/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/site/_site/` is read-only
and equals E's fresh baseline build but for the data change, 13 Results E).

The work has two parts: **P**, the package (this worktree), and **S**, the sitegen clone
`scratch/eczoo/eczoo_sitegen` (branch `zoodb-flmrs`, at `793f2bf`), split in S1 (the
stylesheet items, which need nothing new from the package) and S2 (the items that need
P, then the full build and the screenshots).

## What the main session found (the diagnosis of each item)

1. **New tab.** zoodb 0.2.1's `ZooHtmlFragmentRenderer` (`git show
   main:src/zooflm/_fragmentrenderers.js`) set `use_link_target_blank` to a function, so
   every link of FLM content got `target="_blank"` (and nothing else: no `rel`) unless
   its address was local: `_is_local_url(u)` = `u` starts with `#`, or with `/` but not
   `//`, or with `javascript:`. In the EC zoo that is every `\href`, `\url` and the links
   of the citation entries (arXiv, DOI, URL; the entries are FLM text with `\href`s
   from `CitationCompiler`). flm-core e7b4ba17 has no link-target option: its HTML
   backend writes `flm.pres.link` as `<a class="flm-pres-link" href=… data-flm-kind="url">`
   from a fixed convention table (`stdcore/backends/html/conventions.rs`, `emit.rs`
   `fn link`). It does have the documented means for a host to write an HTML tag of its
   own: a lowering rule that stages a construct node (`stdcore/backends/html/construct.rs`,
   `TAG`, `HtmlTagPayload`), chosen per backend by a lowering selection
   (`LoweringSelection::prefer`, `Overrides::lowering`, or a feature's
   `workflow_fields`). The standard rule of `\href`/`\url`/`\email` is
   `stdcore/features/href/mod.rs` (`LinkRule`, `RULE`, `LINK_ELEMENT`, `display()`);
   its helpers `read_address`, `command_of` and `report_not_characters` are `pub(crate)`,
   `chars_at_lowering`, `lower_arg_named_or_nothing`, `check_address`, `display`,
   `HrefCommand` and `LinkRule` are public (check). Post-processing the HTML string was
   rejected: it relies on the tag `a`, which flm-core's HTML contract leaves out of the
   contract.
2. **Random code previews.** zoodb 0.2.1's preview render passed
   `endnotes: { inhibit_render_endnote_marks: true }` (no citation or footnote mark at
   all). flm-core has no option to leave marks out. The engine writes a citation's
   no-break space and its mark as two spans, `flm-citations-space` and
   `flm-citations-mark` (the HTML contract), a footnote mark as `flm-xnotes-xnote-mark`;
   hiding them in the widget leaves no stray space. Philippe allows "strip/hide".
3. **The pane's heading.** The former pane passed `endnotes_heading_title: null` (no
   heading above its lists); the code pages keep their "References" heading (the same
   on both sites). In flm-core the heading is configuration fixed with the registry:
   `citations.heading_title` (`Option<String>`, `None` = no heading;
   `stdcore/features/citations/config.rs`) and, per xnote kind, `xnotes.kinds.<kind>.title`
   (`Option`, `stdcore/features/xnotes/config.rs`). So is `citations.placement` (item 6).
   The engine refuses such keys per call today (`Engine::run_render_options` in
   `rust/zoodb-flm-wasm/src/engine.rs`: "fixed when the engine is created").
4. **Space around equations.** The engine closes the paragraph before a displayed
   formula (`…</p> <span class="flm-pres-math--passthrough" data-flm-display="display"
   …>\begin{align}…</span> <p class="flm-pres-par">…`), where 0.2.1 kept the formula
   inside the `<p>` (`<span class="display-math env-align">`). flm-core's
   `math-passthrough.css` makes the display box a block with `overflow-x: auto` (so
   MathJax's own container margins stay inside it) and margins
   `--flm-math-display-space-above/below`, which the site sets to `0px`; the paragraph's
   margin (`--flm-block-spacing` = `2 * $parskip-half-length` = 1em) now adds to MathJax's.
   Measured on the screenshots of `/c/steane` (1280 px wide): from the line before
   equation (1) to its first row 40 px → 55 px, from its last row to the next line 40 →
   56 px; equation (2): 45 → 62 above.
5. **Italics in list columns.** The code lists' data set column classes, 73 of them
   `cssclass: 'textit'` (`eczoo_data/codelists/**`, e.g. `list_quantum_cyclic.yml`'s
   description column). The site's own stylesheet defined `.emph, .textit { font-style:
   italic; } .textbf { font-weight: bold; }` in `site/stylesheets/flm-formatting.scss`;
   B2's restyling (sitegen `e516670`) removed them with the former FLM classes, but
   `textit`/`textbf` are also the site's classes for its data.
6. **Search text.** 0.2.1's `FLMSearchableDocTextValuesAssembler` rendered with
   `feature_document_options: { citations: { use_endnotes: false } }`: each citation's
   text in brackets in place of its mark. The baseline's `dat/searchindex.json` reads
   `…a single-qubit error [B. Shaw, M. M. Wilde, O. Oreshkov, I. Kremsky, and D. A.
   Lidar, “Encoding one logical qubit into six physical qubits”, Physical Review A 78,
   (2008) arXiv:0803.1495 DOI]. The code is …` and `… given by [Qiskit Community, “Qiskit
   QEC framework”, URL; ID 226] \begin{align}…`. flm-core's equivalent is
   `citations.placement: in-place` ("a citation mark shows the citation entries
   themselves, one group per item between the citation counter style's delimiters"),
   registry-bound (item 3). Step 6's G9 instead appended each field's list of cited
   works (`flm_pieces: true`, sitegen `1c1cf55`).
7. **`\paragraph`** (question 15): 0.2.1's site set `.heading-level-4` in italics,
   inline, followed by `content: '—'` with `margin: 0 .12em`; the engine writes its own
   run-in stop (`.`, the `html` feature's `run_in_stop`); the site now sets the run-in
   heading in italics only. No `\paragraph` in the data today.

## Part P — the package (one implementer; the worktree)

**P1. External links in a new tab.** In `rust/zoodb-flm-wasm` (the ZooDb feature,
`src/zoodb_feature.rs`, or a module of its own), a lowering rule for `flm.href.link` on
the HTML backend that stages a construct `<a>` carrying what flm-core's link carries
(`class="flm-pres-link"`, `href`, `data-flm-kind="url"`; compare byte for byte with the
standard rule's output in a test) plus `target="_blank"` when the address is not local
by 0.2.1's rule (item 1), no `rel`. Its display as flm-core's `LinkRule` (the `\href`
text lowered as content; `display(target)` for `\url` and `\email`), its address read
as flm-core reads it, the address policy applied by the rule itself (a construct node
bypasses it: `check_address(…, AddressUse::Link)`, and on refusal the text without a
link and an Error, as flm-core reports it), and the unreadable-address recovery as
flm-core's. **No nested `<a>`:** flm-core's emitter writes a link inside a link as a
`<span>` only inside its own `flm.pres.link`; where the text of an `\href` holds
anything that writes a link (a reference, a term, a citation, a footnote mark, another
`\href`; detect conservatively), the rule falls back to flm-core's own rule (no
`target`). Chosen for the HTML plans only (text and LaTeX keep flm-core's rule), without
replacing the lowering selections other packages already make for `html` (an
`Overrides::lowering` entry replaces the workflow's whole selection for that backend:
read what the registry's `html` workflow selects, e.g. through `math_passthrough`, and
keep it). On by default (0.2.1 always did it); one engine configuration key switches it
off (name it; `core` config of `ZooFlmEngine.create`, `flm_options.engine` in the
standard setup, part of `settings_hash`). Links of references (`\ref` to an object
whose index href is absolute) are out of scope: say in the Results what 0.2.1 did there
and what the engine does.

**P2. Per-call values of registry-bound settings.** Extend the per-call `render_options`
(`{ feature: { key: value } }`, today render-bound keys only) to the keys the core binds
to the registry or the document. A document-bound key goes into that run's document
options. A registry-bound key makes the call run on a **variant**: a registry built
from the engine's settings with the call's registry-bound values over them, key by key
as for the render keys (an `xnotes.kinds` value replaces the map as a whole, as in the
settings), built once per distinct set of such values and cached with its plans. The
call's fragments are parsed again with the variant's language for that run (their
sources, origins and layouts; a tree is never run under another registry than the one
that parsed it: flm-core's nodes hold the `ElementSpec` of their parse), the external
index is rebuilt for the variant from the entries last given to `set_external_index`
(keep them; rebuilt once per variant and index), the host tables (citations, graphics)
are the engine's own. Every render entry point that takes `render_options` (HTML
document and fragment, text, LaTeX). Errors for unknown keys and bad values as today,
named by key. `settings_hash` unchanged (per call). Measure and report: the variant's
build time in Node and, in S2, in the browser. Engine JSDoc, `doc/` (the engine's
page), `CHANGELOG.md`, the worktree's `CLAUDE.md` (the engine's description) updated.

**P3. Citations in place in the search text.** `FLMSearchableDocTextValuesAssembler`
(`src/dbprocessor/searchabletextflm.js`) renders the fields' text with
`citations: { placement: 'in-place' }` per call (P2), as 0.2.1 did; an option of the
assembler keeps the marks instead (name it; default: in place), passed by the standard
setup's `searchable_text_options` like `flm_pieces`. With the citations in place,
`pieces` holds the footnotes only: say so in the JSDoc. Check on the test zoo that the
text equals the baseline's form (item 6).

**Tests** (mocha, `test/`): P1 (a non-local `\href`, `\url` and a citation entry's
link get `target="_blank"`; `#…`, `/…`, `javascript:` (refused anyway) and `//…` as
0.2.1; the switch off gives flm-core's markup byte for byte; text and LaTeX outputs
unchanged; the nested case falls back); P2 (`citations.placement` in place in a text
run; `citations.heading_title: null` and an xnote kind's `title: null` give lists with
no heading in an HTML run, the next run without them has the headings again; a variant
is built once for two calls; a bad registry-bound value errors by name; a fragment
released between calls); P3 (the assembler's text with the entry in brackets).

**Checks:** the Rust checks per crate (`CLAUDE.md`); `yarn build:wasm flm` (the
committed module must match the crate; record its size); `yarn test`; `yarn lint`;
`yarn node playground/play_example.mjs`; the docs build read-only with the main
checkout's Sphinx (HANDOVER, Environment), output in the scratchpad, no warning.
Network: cargo needs no fetch (the lock pins `e7b4ba17`, in `~/.cargo/git`); use
`--offline`.

## Part S1 — the stylesheet items (one implementer; the sitegen clone; may run beside P)

On the clone's current install (the tarball of `a0beb95`'s module is not installed
there yet; the S1 items do not depend on the package). Each item compared with the
baseline in a browser (chrome-headless-shell of the clone's Puppeteer, the sites served
on 127.0.0.1, external requests aborted but MathJax, answered from a local read-only
copy; the earlier harness scripts under the previous session's scratchpad are gone:
write new ones in this session's scratchpad). The baseline site is a **copy** of the
original's `site/_site/` in the scratchpad (never served or written in place).

- **S1a** (item 2): the random code widget (`jscomponents/randomcode/`) hides
  `.flm-citations-space`, `.flm-citations-mark` and `.flm-xnotes-xnote-mark`; the comment
  in `generate_data.js` (G3's residual) updated. Check two previews: no mark, no space
  before the punctuation that followed a mark.
- **S1b** (item 4): the vertical space around displayed formulas as 0.2.1's, within about
  2 px, measured (bounding boxes of the text lines and of MathJax's container, not
  screenshots) on `/c/steane` (equations 1 and 2) and on at least four other pages with
  a formula after a paragraph, at a paragraph's start, between two paragraphs, inside
  a list item and after a heading if the data has one; the fix in the site's rules
  (`site/stylesheets/flm-formatting.scss`; the engine's custom properties, MathJax's
  container margin inside the engine's display box, or the paragraph margins next to a
  display: choose and justify), nothing else moves (check the page heights of the 12
  screenshot pages against the current build).
- **S1c** (item 5): the site's `.textit` and `.textbf` back; and every `cssclass` the data
  and the site's templates use, checked against the stylesheets (list what each one
  styles on both sites).
- **S1d** (item 7): `\paragraph` as 0.2.1 showed it (italic run-in title, then an em dash
  with `.12em` on each side), through the engine's setting or the stylesheet; checked on
  a probe page (a test-data code with a `\paragraph`, not committed) against 0.2.1's
  markup and CSS.

Build: `yarn build-simple` (no exporter) with the LOCAL citations cache, offline under
the sandbox profile (HANDOVER "No network"), or a narrower build if it suffices; F1 is
fixed only on the module not yet installed, so this build still needs
`ECZOO_FLM_CONTINUE_WITH_ERRORS=1`. Commit in the clone, one commit per item, with the
trailers below.

## Part S2 — the items on the new package, the build and the screenshots (after P)

- **Install**: repack the worktree (`yarn pack --out scratch/zoodb-flmrs.tgz`) and
  install it in the sitegen clone by the install form of HANDOVER ("If step 6 is
  reopened": the stale copies removed first, `YARN_GLOBAL_FOLDER` in this session's
  scratchpad, `YARN_ENABLE_NETWORK=0`, the overlay restored before every commit; one
  `node_modules/@phfaist/zoodb` 0.3.0 whose `src/` equals the worktree's).
- **S2a** (item 3): the code graph pane (`jscomponents/codegraph/CodeGraphInformationPane.jsx`)
  renders with `render_options` that remove both lists' headings
  (`citations.heading_title: null`; the footnote kind's `title: null`, with the zoo's
  xnote kinds otherwise unchanged, from the sitegen's settings in `eczoodb/eczoodb.js`,
  not copied by hand); the SCSS rule that styled the heading removed; the exporter's
  bundle rebuilt if it includes the pane (C, E: `jscomponents/codegraph/
  _headless_exporter_browser_code_dist/`). Measure the first pane render with and
  without (the variant's build in the browser).
- **S2b** (item 6): the search text with the citations in place (P3's default). Decide
  `searchable_text_options.flm_pieces` (B2's `1c1cf55`): compare `dat/searchindex.json`
  with the baseline's, field by field on a sample of codes (the citation texts in
  place, `[…]` as above; footnotes as the baseline had them), and B2's five queries
  plus "references"; aim at the baseline's content.
- **S2c** (item 1): nothing in the sitegen unless the engine's default changes; count
  the `target="_blank"` links against the baseline's 42,445 (13 Results E: 9,708 on the
  current build) and classify the difference.
- **Build**: the production build (`cd site && yarn build`) on the new module, offline,
  the LOCAL cache, **without** `ECZOO_FLM_CONTINUE_WITH_ERRORS` (F1 is fixed in
  `e7b4ba17`): exit status, time, diagnostics. If it fails, report; do not work around.
- **Screenshots**: the 27 pages and panes of `scratch/eczoo/screenshots/index.html`
  retaken on the new build (keep the current ones as `<name>.before-14.png`, the index
  showing baseline, before and after), and the comparison of 13 Results E repeated for
  the classes the items touch (links, marks in `randomcodedata.json`, search index,
  vertical positions of formulas, the italic columns, the pane's headings).

## Rules (every part)

- All edits in the worktree `/Users/philippe/Research/projects/zoodb/zoodb/.worktrees/zoodb-flmrs`
  (the clones under its `scratch/eczoo/` included). Never `git stash`. Agents never
  commit in the worktree (the main session does); in the sitegen clone they commit,
  with the trailers `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` and
  `Claude-Session: https://claude.ai/code/session_01VvdThGsvMMSWmKY2D6CsRM`, the root
  `package.json` and `yarn.lock` in their committed form. Never push.
- Read-only, never edit: `/Users/philippe/projects/flm-rs/` (never read its
  `playground/`); flm-core's sources in `~/.cargo/git/checkouts/flm-866cefd557963530/e7b4ba1/`
  (read freely); `/Users/philippe/Research/projects/zoodb/zoodb-example/`; the originals
  `/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen`, `…/eczoo_data`,
  `…/eczoo_handbook` (never list `/Users/philippe/Research/projects/2021-qec-zoo/`
  itself; git there only with `--no-optional-locks`); the main checkout.
- No workaround for anything that needs flm-rs; nothing new requested of flm-rs without
  the main session's agreement (05 lists the findings). No sweep of the EC zoo data.
- No network beyond 127.0.0.1: builds, installs and browser runs offline (HANDOVER "No
  network": the profile `nonet.sb`, `YARN_ENABLE_NETWORK=0`, `COREPACK_ENABLE_NETWORK=0`,
  `PUPPETEER_SKIP_DOWNLOAD=1`, `GIT_ALLOW_PROTOCOL=file`, `TMPDIR` in the scratchpad).
  Nothing written under `~/.yarn`, `~/.npm`, `~/.cache` (check with `find -newer`).
- Scratch files and logs in the session's scratchpad
  `/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/20fdef06-fa3f-4124-adda-c1d5de5cfae2/scratchpad/14/`
  (one folder per part). Long outputs to log files, not to the agent's context.
- Style of what is written: plain, precise, US English; code reads like the surrounding
  code (comment density, naming, idiom).

## Results

(Each part fills in its section: what was done, the files, the decisions with their
reasons, the measurements, the checks with their results, deviations, findings, open
questions.)

### Part P

Done by the implementer on 2026-10-26, uncommitted, on `851eae4`.

**Files.** Rust: `rust/zoodb-flm-wasm/src/links.rs` (new: the rule), `zoodb_feature.rs`
(registers it), `engine.rs` (the configuration key, the registry builder, per-call
settings, variants, tests), `lib.rs` (TypeScript declarations, `variant_count()`),
`README.md` of the crate. The module `src/zooflm/_wasm/` rebuilt. JavaScript:
`src/zooflm/engine.js`, `src/std/use_flm_engine.js`, `src/dbprocessor/searchabletextflm.js`,
`src/std/use_searchable_text_processor.js`. Tests: `test/test_zooflm_engine.js`,
`test/test_dbprocessor_flmprocessor.js`, `test/test_std.js`. Docs: `doc/zoodb.zooflm.rst`,
`doc/std.rst`, `doc/zoodb.dbprocessor-searchable.rst` (its "FIX ME" marker removed: the
behavior it flagged is the one P3 fixes), the worktree's `CLAUDE.md`.

**P1.** The rule `zoodb.href.link.lower.html` (`links.rs`) lowers `flm.href.link`. It reads
the command, the address (`chars_at_lowering`, else `flm.href.address-not-characters` and
the display alone) and the display (`lower_arg_named_or_nothing` / `display()`) as
`LinkRule` does (the `pub(crate)` helpers are re-written from the public pieces: 15 lines).
For an address that is not local by 0.2.1's rule and that `check_address(…, Link)` accepts,
it stages a construct `<a>` whose class, `href` and kind attributes come from the backend's
convention row for `flm.pres.link` (`conventions::row`), then `target="_blank"`, and
records the row's style requirement (`flm.html.style.core`). Otherwise it stages the
`flm.pres.link` that `LinkRule` stages around the same content (the content is lowered once,
so the fallback cannot call `LinkRule` itself). Fallbacks: a local address; a refused one
(the backend then refuses it, as for flm-core's rule: the same markup and Error); content
holding a link, an `<a>` construct or an element outside `html::native_elements()` (a later
round may make it a link; opaque content skipped as the driver's `non_native` does), read
from the staged nodes (`cx.builder().staged_nodes()`); and a node whose ancestors in its
own tree include another `\href`, a `\hyperref` or a `\term` (the inner link of two: a
construct does not become a `<span>` inside a link). The key is `link_target_blank`
(engine configuration, default `true`; `core` of `ZooFlmEngine.create`,
`flm_options.engine` of the standard setup, in `settings_hash`); off, or with the `href`
feature off, the rule is not registered.

- *Decision (deviation from the brief's mechanism).* The rule carries
  `DefaultMark::OnBackends([html])` instead of a plan preference: flm-core's guide says
  that a rule staging a construct element "is registered as the default on that format's
  backend" (`docs/extending.md`, "Format-native output"), such a rule is never a candidate
  on another backend, and no lowering selection is set, so other packages' selections are
  kept by construction (a selection preferring flm-core's rule by name would still win).
  Finding: at `e7b4ba17` the `html` workflow's combined selection is empty, and
  `math_passthrough::package()` makes none (its rules carry default marks).
- *0.2.1 and references.* 0.2.1's `use_link_target_blank` applied to every link its HTML
  renderer wrote (the `\ref` links, the marks and the citation entries too): a reference
  whose index `href` is absolute got `target="_blank"`. The EC zoo's index addresses are
  `/c/…` (local), so its references had none; the engine writes flm-core's link for
  every reference, never a target.

**P2.** `Engine::call_settings` (replacing `run_render_options`) reads each feature the
call names from the settings' map with the call's keys over it (a key's value whole), the
render values into the run's render options, the document ones and those bound to either
(`toc.depth`, `numbering.counters`: `SettingsDecl::read` files them on the document) into
the run's document; the call's registry-bound keys (their canonical JSON is the variant's
key) make `PackageSettings` with those features' readings. `variant_for` builds the
variant once (`build_registry`, shared with `Engine::new`: the same configuration, ZooDb
feature, `math_passthrough`, services over the same `HostTables`), refuses one whose build
reports an Error the engine's registry does not, and rebuilds its external index from the
entries kept by `set_external_index` when their generation changed. A variant keeps its
plans; a run on it parses the call's fragments again (source, origin, layout) with its
language (`run_fragments`; `render_text` parses once for its whole and per-tree runs). All
of `render_html`, `render_text`, `render_latex` (so `render_document`, `render_fragment`,
`render_text`, `render_latex` in JavaScript; `render_text` gained `render_options`). Errors
as before, named by key; `settings_hash` unchanged per call. `ZooFlmCore.variant_count()`.
Plan and variant keys are now JSON with sorted keys (`canonical_json`): flm-core enables
`serde_json/preserve_order`, so the old comment "the JSON of a map with sorted keys" was
wrong (keys came in the caller's order; only extra plans resulted).

- *Measured* (Node 23.7, default settings, 3 small fragments; medians of 7 rounds, scratch
  script `scratchpad/14/P/measure_variant.mjs`): `new ZooFlmCore({})` 4.5 ms; a text run
  with `citations.placement: 'in-place'` 10.1 ms the first time, 2.8 ms after (the base run
  3.2 ms); an html document with the headings off 10.5 ms first, 2.0 ms after (base
  2.5 ms). A variant costs about 7 to 8 ms (registry and plan) on the default settings;
  the EC zoo's settings and the browser are for S2.
- *Finding for S2a.* An `xnotes.kinds` entry given per call is read over
  `XnoteKind::numbered(name)`, not over the settings' entry: without `commands` the
  variant does not know `\footnote` (the run reports `core.specs.unresolvable-command`),
  without `label_type: 'fn'` the anchors become `footnote-1`. The pane must pass the zoo's
  kinds whole, with `title: null` on the footnote kind.

**P3.** The assembler's option `citations_in_place` (default `true`) passes
`{ citations: { placement: 'in-place' } }` to its `render_text`; the standard setup reads
`searchable_text_options.flm_citations_in_place`. With the citations in place there is no
list of cited works, so `pieces: true` adds the footnotes only (JSDoc, docs). On the test
zoo: `… and cites [Custom reference xyz].` and `Figure 1: Bob’s dot, after [Custom
reference xyz].`, the baseline's form (item 6); `flm_citations_in_place: false` gives
`[1]` as before. *Finding for S2b:* the citation feature puts a no-break space (U+00A0)
before the bracket (`cites […]`, `Figure 1`), where the baseline's index has a
plain space (`given by [Qiskit Community, …]`).

**Tests.** Rust (`engine.rs`): `links_outside_the_site_open_in_a_new_tab` (8 sources
rendered by the engine with and without the rule: per tree the count of new tabs, the
markup byte for byte once ` target="_blank"` is removed, no `<a>` in an `<a>`; the exact
`<a …>` of `\href` and `\email`; the citation entry's link in the bibliography piece; the
same requirements and diagnostics, the refused `javascript:` and the unreadable address
of a user definition's `\href`; text and LaTeX identical), `registry_bound_values_per_call_run_on_a_variant`
(in-place text, one variant for text and html and for another key order, the headings off
and back, `toc.depth` per call on the document, the variant's index following
`set_external_index`, a bad value and an unknown key named, a released handle refused),
`canonical_json_sorts_the_keys`; `links.rs`: `local_addresses_as_zoodb_0_2_1`. The two
tests that expected registry-bound keys to be refused now refuse unreadable values.
JavaScript: `links in a new tab` (3: `\href`/`\url`/`\email`/`//…`/relative get it,
`#…`, `/…`, `javascript:` and the nested cases do not, `link_target_blank: false` byte for
byte; the citation entry's link on a page; text and LaTeX unchanged), `values of
registry-bound settings for one run` (3: in-place text and one variant for two calls; the
lists' headings off in `render_document` and back; an unreadable value named, a released
fragment refused by the core), `settings_hash` with `link_target_blank`, the processor's
search text (in place by default; marks kept; footnotes with `flm_pieces`; the former
`flm_pieces` test with the marks kept), `test_std`'s list of engine keys.

**Checks.** `cargo clippy … -D warnings` and `cargo test` per crate, `--offline`:
`zoodb-autocitefetch-wasm` 40 passed, `zoodb-flm-wasm` 25 passed (21 before), no warning.
`yarn build:wasm flm` (`CARGO_NET_OFFLINE=true`): 30.1 s, `zoodb_flm_wasm_bg.wasm`
5,261,551 bytes (5,223,643 before, +37,908); no Rust source newer than the module.
`yarn test`: 495 passing (487 before), 0 failing. `yarn lint`: exit 0. `yarn node
playground/play_example.mjs`: exit 0, page as before (the mini zoo has no external
link). Docs: the main checkout's Sphinx 8.1.3, read-only, output in the scratchpad: exit
0, no warning. Nothing written under `~/.yarn`, `~/.npm`, `~/.cache` (`find -newer`);
wasm-pack touched its lock file `~/Library/Caches/.wasm-pack/.wasm-opt-….lock`, as every
build does.

**Deviations.** The selection mechanism of P1 (above). `CHANGELOG.md` not updated: it was
deleted in `3d12c9b` ("trying to fight against the slop…"), and is not recreated
(`package.json`'s `files` and `CLAUDE.md` still name it). Beyond the brief: the ancestor
check of P1 (the inner link of two), and `render_text` taking `render_options` in
JavaScript (needed by P3).

**Findings.**
- A link in content that another link shows elsewhere (a heading's title shown by
  `\ref`, an index display) is lowered inside a synthesized value, where neither check
  sees the outer link: it would be an `<a target>` inside the reference's `<a>`. flm-core
  gives a rule no way to know that its node will be placed in a link (the outer rule
  builds its link after lowering the content). None is known in the EC zoo's data.
- flm-core reports `flm.html.refused-address` in the source of the rule that staged the
  link (origin ``lowering rule `flm.href.link.lower.default` ``, line 1, column 1), not at
  the `\href`; with the new rule the origin names `zoodb.href.link.lower.html`.
- With the html render option `source_spans`, a construct `<a>` carries no
  `data-flm-source-span` (the emitter writes none on construct nodes). ZooDb does not set
  it.
- No key of the standard features is bound to the document alone at `e7b4ba17` (32
  registry, 45 render, 2 either).

**Open questions.** (1) `CHANGELOG.md`: recreate it, or drop it from `package.json`'s
`files` and from `CLAUDE.md`? (2) The residual nesting above: acceptable, or should a link
inside a synthesized value (`lw.tree_id().is_value()`) fall back too? That would also
drop the new tab from the citation entries' links in the list of cited works (spliced
values), and perhaps from user definitions' `\href`s (not checked), so it was not done. (3) Variants are kept for the engine's
lifetime, with no limit: fine for a site build with a few sets of values; an app that
varies them freely would grow.

**Review fixes** (2026-10-26, uncommitted). Docs and JSDoc rewritten for a reader of the
package, without the history of 0.2.1 and without "registry", "variant" or "its
language": `doc/zoodb.zooflm.rst` (the `link_target_blank` bullet; what `render_options`
is; the settings fixed when the engine is created, which their schemas mark
`"x-flm-bind": "registry"`, where "most keys" was wrong: 32 of 79; the sentence on
`render_text`), `doc/zoodb.dbprocessor-searchable.rst`, `doc/std.rst` (the comment over
`flm_citations_in_place` described `false`), the JSDoc of `ZooFlmEngine.create`, of
`render_options` in the four render methods (condensed in `render_document`, the others
refer to it), of `use_flm_engine` and of the assembler; `CLAUDE.md` and the crate's
README lose "as in 0.2.1". In code 0.2.1 is named at most once per file (`links.rs`'s
module comment keeps it; its test is now `local_addresses`). `canonical_json` is gone:
`options_key` sorts with `serde_json::Value::sort_all_objects()` (recursive under
`preserve_order`, serde_json 1.0.151) and keys both the plans and the variants; its test
is `options_key_sorts_the_keys`. Tests added: in `test_std`, `link_target_blank: null`
gives the default engine's `settings_hash` and `false` another; `render_latex runs on a
variant too` (an xnote kind with `latex_command: 'endnote'` changes the style file's
`\flmXNfootnote` definition, the trees unchanged, one variant for two calls); a formula
in a link's text. *Formula in a link:* `\href{https://a.org}{the \(x^2\) code}` (and
`$x$` under `dollar_math`) gets `target="_blank"`: `flm.pres.math-passthrough` is a
presentation element, in `html::native_elements()`, and is staged when the rule reads its
content, so `holds_link` needed no change; an `\href` inside `\text{…}` of such a
formula is still seen (the `flm.pres.math-text` node is content inside opaque content)
and the outer link falls back. Both cases are in the JavaScript test; the Rust test had
the first and gains the second (9 sources). The three findings above (the nested link, the origin of
`flm.html.refused-address`, `source_spans` on a construct node, checked in `emit.rs`:
`fn construct` writes no source span) are rows F6 to F8 of 05's findings table. Module
rebuilt: `zoodb_flm_wasm_bg.wasm` 5,259,021 bytes (−2,530), `BUILD_INFO.json` the same
size, no Rust source newer. Checks: clippy and tests per crate, `--offline`
(`zoodb-flm-wasm` 25 passed, `zoodb-autocitefetch-wasm` 40, no warning); `yarn build:wasm
flm` 17.7 s; `yarn test` 497 passing, 0 failing; `yarn lint` exit 0; `play_example.mjs`
exit 0; Sphinx 8.1.3 read-only into `scratchpad/14/P-fix/html`, exit 0, no warning;
nothing new under `~/.yarn`, `~/.npm` (but the logs of an unrelated `npm root --global`)
or `~/.cache`.

### Part S1

### Part S2
