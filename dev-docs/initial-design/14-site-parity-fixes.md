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

Four commits in the sitegen clone over `793f2bf`, one per item (in the order a, b, d, c):
`513fb94` (S1a), `bd2ef71` (S1b), `6c7bbcb` (S1d), `f1e73c7` (S1c); the clone's status
is clean, its root `package.json` and `yarn.lock` as committed, the probe code removed
from its test data, no `site/.11ty-parcel-temp/`; its `site/_site/` is the
`yarn build-simple` build of `f1e73c7`.

**Setup.** Scratch folder `scratchpad/14/S1/` (below `S1/`). The baseline is a copy of
the original's built site in `S1/baseline_site/` (118 MB, served from the copy only);
`S1/before_site/` is a `yarn build-simple` of `793f2bf` (the full data), and
`S1/s1a_site/`, `s1b_site/`, `s1d_site/`, `s1c_site/` the builds after each item (each
117 to 248 s, exit 0, the 43 `flm.citations.no-entry` lines of F1 only). Builds:
`S1/build_simple.sh <label>` and `S1/build_test.sh <label>` (the test data), with
`S1/env.sh` (the LOCAL citations cache, `ECZOO_FLM_CONTINUE_WITH_ERRORS=1`, `TMPDIR` in
`S1/tmp/`, the network switches) under `sandbox-exec -f S1/nonet.sb` (HANDOVER's five
lines). MathJax: the baseline loads
`https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-chtml.min.js` (its
`mathjax/setup.js`); flm-rs's `target/mathjax-probe/` is gone, and the clone's and the
original's `node_modules` hold no MathJax, so the harness answers that URL from a copy of
MathJax **3.2.2** (npm `mathjax`, `es5/`, from
`/Users/philippe/Research/util/llm-htmlpdf.JUNK/node_modules/mathjax`, read-only) and
the new site's `https://cdn.jsdelivr.net/npm/mathjax@4/…` and its font from copies of
MathJax 4.1.3 and `@mathjax/mathjax-newcm-font` 4.1.3 (from
`/Users/philippe/projects/techy-ext/techxt/web/node_modules/`, read-only), all copied
into `S1/mathjax/`. So the baseline's formulas are MathJax 3's (E's screenshots used
MathJax 4 on both sides): the container margins compared are the ones each site had
(MathJax 3: `margin: 1em 0`; MathJax 4: `margin: .7em 0; padding: .3em 2px`). Source
Sans 3 is installed on the machine, so Google Fonts' aborted stylesheet changes nothing.

**The harness** (`S1/harness/`, plain `node` under the sandbox, the clone's Puppeteer
24.4 imported by path, `headless: 'shell'`): `lib.mjs` (a static server on 127.0.0.1
with an ephemeral port, `/x` → `x.html`; the browser, 1280 × 900; every request off
127.0.0.1 aborted but MathJax's, answered from `S1/mathjax/`; the wait for MathJax and
the fonts; `measure_displays()`, the boxes around each displayed formula: the bottom of
the last line of text before it and the top of the first line after it from the text
nodes' Range rects, marks and formulas left out, and MathJax's `mjx-container` and
`mjx-math` rects). Chrome's own sandbox cannot start inside `sandbox-exec` ("sandbox
initialization failed"), so the browser runs with `--no-sandbox`, confined by
`nonet.sb`. Scripts: `measure_math.mjs` (+ `compare_math.mjs`, `summary_math.mjs`;
`survey_displays.mjs` classifies each formula's place in the static HTML),
`check_randomcode.mjs`, `check_classes.mjs`, `css_classes.mjs`, `unstyled_classes.mjs`,
`cmp_sites.mjs` (two builds compared, the bundles' hashed names made equal),
`probe_runin.mjs`, `inject_description.mjs`, `check_exporter.mjs`, and `pages.mjs` (the
27 pages and panes of `scratch/eczoo/screenshots/`: heights, and with `--shots <folder>`
the screenshots, a page cut at 16,000 px, a pane alone; the random code widget forced to
a code with its own `_show_code()`, a pane's formulas waited for). `run_checks.sh <site
folder> <label> [--shots <folder>]` runs them all against the baseline (about 16 min;
logs in `S1/logs/<label>-*`). For S2: copy the new build's `site/_site/` to a folder,
then `S1/harness/run_checks.sh <folder> new --shots <shots folder>`.

**S1a, the random code widget** (`513fb94`). `randomcode.scss` hides, inside
`.random-code-content` (the preview, not the code's name), `.flm-citations-space`,
`.flm-citations-mark` and `.flm-xnotes-xnote-mark`; the comment of the preview's render
options in `generate_data.js` says so (G3's residual). Hiding rather than stripping
keeps the preview's HTML as the engine writes it and needs no parsing. Checked in the
browser on all 1,155 previews in turn (each formula counted as one letter):

| | baseline | before | after |
|---|---|---|---|
| previews with marks in their HTML | 0 | 443 | 443 |
| marks shown | 0 | 1,304 (443 previews) | 0 |
| spaces before punctuation | 550 (406 previews) | 0 | 1 (`w_state`) |

The one left is the data's own tie, `W state~\cite{…}.` (05's `~\cite` finding): the
engine writes the tie's no-break space before its own. Steane reads "…to correct a
single-qubit error. The code is…", Golay "…e.g., lattices and sporadic simple groups. Up
to equivalence, it is unique for its parameters. … even-weight subcode." (0.2.1 left
"error ." and "groups .").

**S1b, the space around displayed formulas** (`bd2ef71`). The engine writes
`<p>…</p> <span … data-flm-display="display">…</span> <p>…</p>`; 0.2.1 kept
the formula inside its `<p>`, in a block that scrolls sideways (so MathJax's container
margins stayed inside it), and the site's `p` has no margin as a first or last child.
The fix is in the paragraph margins next to a display: `flm-formatting.scss` sets the engine's
`--flm-math-display-space-above/below` to the site's paragraph skip (1em) and adds two
rules, no margin between a display box and a `.flm-pres-par` or display box next to it
(both sides of the junction), none at a display box's first or last child position (as
`p:first-child`/`p:last-child` in `fonts-basic-appearance.scss`). So the text runs on
around the formula as in 0.2.1, spaced by MathJax's container margins inside the
engine's display box, and a formula that begins or ends a run of text has a paragraph's
margins (a heading, a "Defined in" line, a figure next to it). Not chosen: the custom
properties alone (a positive margin collapses with the paragraph's and cannot remove it;
a negative one makes two formulas in a row overlap and pulls a formula into what is
above it), or MathJax's container margin set to zero inside the box (MathJax 4's own
padding stays, two formulas in a row touch, the formula at the end of a field loses its
space). The rules use `:has()` (Chrome 105, Safari 15.4, Firefox 121). Measured (px,
above / below: from the last line of text to the formula, from the formula to the next
line):

| formula | its place on 0.2.1 | baseline | before | after |
|---|---|---|---|---|
| `/c/steane` (1) | text runs on after it | 18.4 / 16.6 | 34.4 / 33.6 | 18.4 / 17.6 |
| `/c/steane` (2) | ends its paragraph, a new one follows | 18.4 / 32.6 | 34.4 / 33.6 | 18.4 / 17.6 |
| `/c/binary_linear` (1) | the same | 18.4 / 32.6 | 34.4 / 33.6 | 18.4 / 17.6 |
| `/c/qubits_into_qubits` (1–3) | three in a row | 18.4 / 171.6, 95.9 / 94.1, 173.4 / 16.6 | +16 / +17 each | 18.4 / 172.6, 95.9 / 95.1, 173.4 / 17.6 |
| `/concepts` (2) | ends a term's body, "Defined in" follows | 18.4 / 33.6 | 34.4 / 17.6 | 18.4 / 33.6 |
| `/c/ampdamp_numopt` (2) | ends a field, a heading follows | 18.4 / 29.4 | 34.4 / 29.4 | 18.4 / 29.4 |
| `/c/approximate_oaecc` (3) | ends a paragraph, `\subsection` follows | 18.4 / 36.6 | 34.4 / 36.6 | 18.4 / 36.6 |
| `/c/ira` (1) | in a list of the code's features | 18.4 / 16.6 | 34.4 / 33.6 | 18.4 / 17.6 |
| `/list/classical_with_rate` (1) | in a table cell | 17.6 / 15.8 | 32.0 / 30.2 | 17.6 / 15.8 |
| `/c/chuang-leung-yamamoto` (1) | in an inline-layout field (protection) | 18.4 / 16.6 | 34.4 / 33.6 | 18.4 / 17.6 |

Over all 513 displayed formulas of the 311 pages that have one: before, the space above
was 14.4 to 16 px larger than on 0.2.1 (1em at the text's size; 21.6 under the taller
inline formula below) and 413 formulas had 14.4 to 18.1 px more below; after, the space
above is within 1 px for 511 (2 are 4.9 and 5.6 px lower, under a line that ends in an
inline formula taller in MathJax 4), the space below within 2.1 px for 480 (471 within
1 px); the other 33 end their paragraph in the data and a new paragraph follows, a break the
engine's HTML does not show (the same markup as text running on), and are 13.4 to 16 px
closer to it than on 0.2.1. The probe page (below) has the cases the data lacks: a
formula after a heading and in a list item (at its start, or with text around it) equal
0.2.1's within 0.1 px; a formula that starts a paragraph or stands between two paragraph
breaks is 16 px closer on the break's side, for the same reason. Page heights (the 12
screenshot pages): only the formula pages change, by the formulas' space (32 px per
paragraph-formula-paragraph run: `/c/steane` 9,161 → 9,097, baseline 9,039;
`/c/qubit_stabilizer` 24,176 → 24,080; `/c/approximate_qecc` 9,141 → 8,789;
`/concepts` 33,617 → 32,529); the home page, the two random code boxes, the kingdom,
`/references`, `/search?q=golay` and the code graph unchanged; among the 15 panes, the
four with a displayed formula are 29 to 30 px shorter (pane text 14.7 px), the others
unchanged.

**S1c, `.textit` and `.textbf`** (`f1e73c7`). `flm-formatting.scss` defines them again,
as 0.2.1 did, in a section of their own before the FLM rules (the site's classes for its
data, not FLM's); `.emph` stays out (FLM's former class, used by no data nor template).
The `cssclass` values of the data (`eczoo_data/codelists/**`, the only data with classes;
written by `render_codelist.js` on the table and on its cells) and what styles them:

| class | where (uses) | baseline | before | after |
|---|---|---|---|---|
| `textit` | column (73) | `.emph, .textit { font-style: italic }` | no rule | `.textit { font-style: italic }` |
| `xtra-xtra-stretch` | table (83) | `table.codelistpage-table.xtra-xtra-stretch td { padding: .5rem .25rem }` | same | same |
| `top`, `left` | column (`top` 94, `left` 83: `'top left'`, `'small top'`, `'small left top'`) | `td.top { vertical-align: top }`, `td.left { text-align: left }` | same | same |
| `small` | column (22) | `td.small { font-size: .9rem }` | same | same |
| `hlines`, `center` (commented out), `xtra-stretch` (test data) | table, column | rules of `codelist-page.scss` | same | same |
| `textbf` | none | `.textbf { font-weight: bold }` | no rule | `.textbf { font-weight: bold }` |

All in `codelist-page.scss` but `textit`/`textbf`, unchanged since `a2ad583`. Over all
the classes of the built pages, the only class that a page carries and whose rule the
baseline had but the new site lacked was `textit` (2,894 elements on the 72 code list
pages); `ecc-codelist-page` shows up too, but its baseline rule is the preview app's
(`.ZooDbPreviewComponent …`, `gitpreview.html`, which these builds leave out). In the
browser on the 72 code list pages: 2,894 `textit` cells, 0 in italics before, 2,894
after (the baseline: 3,427 of 3,427, its FLM `\textit` included); each page's height
changes by its table's only (47 pages, −1,962 px in all; `/list/quantum_cyclic` 3,897 →
3,874, baseline 4,159), the tables nearer the baseline's height on 45 pages.

**S1d, `\paragraph`** (`6c7bbcb`). 0.2.1 wrote `<span id="sec--A-run-in-title"
class="heading-level-4 heading-inline">A run-in title</span>Text…` and styled it
`.heading-level-4 { font-style: italic; display: inline } ::after { content: '—';
margin: 0 .12em; display: inline-block }` (rendered by 0.2.1's own FLM layer, run from
the original's read-only `node_modules` by `S1/probe021/render021.mjs`). The engine
wrote `<span class="flm-pres-deco-runin"><span class="flm-pres-runin--heading" …>A
run-in title</span>.</span>Text…`: a period in the decoration's bold, then its 0.5em
gap. Now `eczoodb.js` sets `html.run_in_stop: ''` (the engine writes no stop;
`\paragraph` is the site's only run-in heading kind and a defined term's lead-in ends in
a colon, so nothing else changes) and `flm-formatting.scss` writes 0.2.1's `::after`
dash on the title, with `--flm-runin-gap: 0px` on the decoration that holds it
(`:has()`). The stop is the engine's setting, so the dash stays generated content as on
0.2.1, written also after a title ending in punctuation. Probe page: a test-data code
(`S1/probe/probe_s1.yml`, copied into `eczoodb/test_data/codes/` for two
`build-test-simple` builds and removed) against the same FLM rendered by 0.2.1 and put
into a copy of a 0.2.1 code page (`S1/probe/baseline_probe_site/`):

| | 0.2.1 | before | after |
|---|---|---|---|
| title | italic, 400 | italic, 400 | italic, 400 |
| after the title | `::after` "—", inline-block, 1.92 px each side, italic 400 | "." in the decoration, weight 700, gap 8 px | `::after` "—", inline-block, 1.92 px each side, italic 400; decoration gap 0 |
| title's end to the text | 16.13 px | 12.81 px (`Why?`: 8 px, no stop) | 16.13 px (both) |

The screenshots of the two paragraphs (`S1/shots/runin-d/`) look alike; the second is
byte-identical, the first 41 px high instead of 42 (the paragraph's fractional offset on
the page). The settings hash changes with the setting, and the headless SVG exporter's
committed bundle carries the configuration (`engine.load()` refuses a dump of another
hash), so the commit rebuilds it (`yarn build` in `jscomponents`, the root's
`.parcel-cache` removed first, 7 s, offline, on the installed module): it differs from
the previous one by `run_in_stop:""` and its hashed name, the `.wasm` unchanged. In
chrome-headless-shell (`check_exporter.mjs`, the bundle's page driven as
`CodeGraphSvgExporter` drives it): the previous bundle refuses the new dump ("settings
hash bdc71f68567c821c instead of this engine's 333140776b39fc4f"), the new one exports
the qubits_into_qubits kingdom graph from it to an SVG byte-identical to the previous
bundle's from the previous dump. `cmp_sites.mjs`: the full builds before and after S1d
differ only in the main stylesheet and the dump's `settings_hash`.

**Checks.** Each item built in full and compared with the baseline in the browser
(above); the builds after S1c and S1d against each other and the one before
(`cmp_sites.mjs`: S1c changes the main stylesheet only); `run_checks.sh` once more on the
build of `f1e73c7`: the same figures for the 513 formulas, the 1,155 previews,
the 2,894 cells and the heights of the 27 pages and panes; `find -newer` the start marker:
nothing under `~/.yarn` or `~/.cache`, and under `~/.npm` only the logs of the unrelated
`npm root --global` (cwd `/Users/philippe/Research/lecturenotes/QEC`); no Chrome for
Testing data touched (the exporter checked in chrome-headless-shell).

**Deviations.** (1) The baseline's MathJax is 3.2.2, standing in for the CDN's 3.2.0 (no
local 3.2.0). (2) Chrome's sandbox off inside `sandbox-exec` (above). (3) S1d also
rebuilds the exporter's bundle, which S2 rebuilds again on the new module (S2a). (4) The
commits are in the order a, b, d, c (S1b and S1d were measured together on the probe
build). (5) A mistyped command wrote an empty `/tmp/null` (16:07), removed at once.

**Findings.** (1) The engine's HTML does not show a paragraph break next to a displayed
formula: "text, formula, more text of the paragraph" and "text, formula, new
paragraph" (and a formula starting a paragraph or standing alone) are the same `</p>
<span …> <p>`, so a stylesheet cannot give them 0.2.1's different spaces; 33 formulas of
the data are 1em closer to the paragraph after them than on 0.2.1. A candidate for 05's
findings table (a marker of a paragraph that goes on after a block), not a request. (2)
Any change of `eczoo_flm_engine_settings` changes the settings hash and needs the
exporter's bundle rebuilt, or the production build's SVG export throws at
`engine.load()`; the site's docs do not say so. (3) Under a line ending in an inline
formula MathJax 4's taller box moves a displayed formula down by about 5 px (2
formulas), and MathJax 4's formula boxes leave up to 2.1 px more below some formulas:
MathJax, not the stylesheet. (4) `run_in_stop` is the HTML backend's; the text backend
keeps its "." (the probe build's search text reads `A run-in title. Text after…`).

**Open questions.** (1) Accept the 33 formulas closer to the next paragraph, or ask
flm-rs for the paragraph-break marker (finding 1)? (2) The `:has()` selectors of S1b and
S1d: acceptable for the site's browsers? (3) Should the text backend's `run_in_stop`
follow (the search text, S2b)?

### Part S2

Done by the implementer on 2026-10-26, on the worktree at `aea2dea` (its `src/` that of
`f23cb2c`). Three commits in the sitegen clone over `f1e73c7`: `5d473b1` (S2a), `8aa472c`
(S2b), `a744cc1` (the exporter's bundle, on its own: it does not hold the pane); S2c needed
no change. The clone's status is clean, its root `package.json` and `yarn.lock` as
committed; its `site/_site/` is the production build of `a744cc1`. Scratch folder
`scratchpad/14/S2/` (below `S2/`): `env.sh` (S1's without the switch, with `TMPDIR` and
`YARN_GLOBAL_FOLDER` in `S2/`), `nonet.sb` (S1's), `install.sh`, `restore.sh` and
`overlay.sh` (the root files committed or overlaid), `build_simple.sh`, `prod_build.sh`,
`cmp/` (comparison scripts), `harness/` (browser scripts over S1's `lib.mjs`, and
`run_checks.sh`: S1's checks run from S1's folder, logs in `S2/logs/`), `sites/` (copies of
the builds `A`, `C` and `final`), `shots/`, `logs/`.

**Install.** `yarn pack --out scratch/zoodb-flmrs.tgz` (offline, under the sandbox): 74
files (75 before: `CHANGELOG.md` is gone since `3d12c9b`), 2,381,832 bytes, SHA-256
`22d8229f…`. The Yarn folder is a new `S2/yarn-global/` (B1close's is empty, nothing to
copy); the stale copies: `node_modules/@phfaist/zoodb` removed, no mirror copy, no
`@phfaist/zoodb@file:` entry in the committed lock. *Deviation:* the committed lock has no
entry for the package's `yaml@npm:^2.9.1`, which the earlier overlay locks carried (B1
resolved it online), so the offline install stopped (`YN0001 … Request to
'https://registry.yarnpkg.com/yaml' has been blocked`); `install.sh` adds that entry to the
overlay lock as Yarn writes it, from the archive the project's cache holds
(`yaml-npm-2.9.1-d61da744fe-583253ce00.zip`, `checksum` its SHA-512). Then
`YARN_ENABLE_NETWORK=0 yarn install` (Yarn 3.3.0): exit 0 in 1.7 s, the only `YN0013` the
tarball, the old tarball's archive dropped from the project's cache (`YN0019`), the mirror
copy written in `S2/yarn-global/cache/`; one `node_modules/@phfaist/zoodb`, 0.3.0, its
`src/` equal to the worktree's (`diff -rq` empty), with its own `yaml` 2.9.1. The overlay is
saved in `S2/overlay/`; the root files were restored before each commit and put back for
the builds.

**S2a, the pane's lists without headings** (`5d473b1`). `CodeGraphInformationPane.jsx`:
every render of the pane (the shared `render` of `mkRenderWrapUtils`, as 0.2.1 passed its
endnote options there) gives `render_options` from `mkPaneRenderOptions()`:
`citations: { heading_title: null }` and `xnotes.kinds` the zoo's own map with
`footnote: { …, title: null }`. The kinds are read from the zoo's configuration,
`eczoodb.config.flm_options.engine.settings.xnotes.kinds`, which is
`eczoo_flm_engine_settings` merged into the config that `use_flm_engine` creates the engine
from, so nothing is copied and no new export is needed (*deviation* from "exported if
needed": the clone's `CLAUDE.md` asks for no new API, and the config is what the engine
really has). The rule for `> .flm-pres-block--heading` is gone from
`CodeGraphInformationPane_style.scss` (the lists keep their font size and color). Measured
in chrome-headless-shell on build C (`yarn build-simple` with S2a and S2b; `S2/harness/
pane_timing.mjs`: `/code_graph#code_<id>` in a fresh page per round, the engine's
`render_document()` wrapped as soon as the page sets `window.eczCodeGraph`, before the
pane's first render; "without" = the same bundle with the options taken out of each call;
the two modes alternated, 10 rounds each; `logs/pane_timing-summary.txt`):

| | without the options | with them (variant) |
|---|---|---|
| steane, first pane render | 35.0 ms (33.3–42.0) | 56.2 ms (54.1–66.4) |
| qubit_stabilizer, first pane render | 47.3 ms (46.4–56.7) | 69.1 ms (64.4–89.2) |
| the next pane (a relation's code clicked in the pane) | 10.6 / 9.2 ms | 10.4 / 11.0 ms |
| the pane's HTML in the page, from the navigation | 878 ms | 880 / 888 ms |
| headings in the pane | 1 (the citations' list) | 0 |

Directly in the page (steane's description and its endnotes, `context: 'codegraph'`): 3.2 to
3.7 ms without options, 25.5 and 27.1 ms with a set of registry-bound values not used yet
(the variant's build, about 22 ms; P measured 7 to 8 ms in Node on the default settings),
3.5 to 3.8 ms for that set again. So the variant costs about 21 ms once, at the first pane;
the time to the pane is the data's load and the graph's layout either way.

**S2b, the search text** (`8aa472c`). Build A (`yarn build-simple` on the new package at
`f1e73c7`, still with `flm_pieces: true`) against the baseline's index (`S1/baseline_site/`;
`cmp/searchidx.py`, `cmp/searchidx_classes.py`, characters counted as code points over the
24 fields of the 1,155 documents, so B2's figures, counted otherwise, are not comparable):

| | baseline | before brief 14 (S1's build) | A, final |
|---|---|---|---|
| `searchindex.json` | 4,443,321 bytes | 4,605,733 | 4,461,214 |
| characters, all fields | 4,193,135 | 4,299,122 | 4,199,254 |
| `description` | 1,135,802 | 1,104,256 | 1,140,535 |
| `introduced` | 232,303 | 264,235 | 233,232 |
| fields equal to the baseline's (of 27,720) | | 22,636, and 343 up to white space | 22,637, and 4,617 up to white space |

The same `info`, store fields and ids in the same order. The 5,083 field values that are not
equal fall into these classes, taken out one after the other: white space (4,617: the
engine's no-break space before the bracket where the baseline has a plain space, P's
finding, and runs of white space); the end of a displayed formula's source (258: `~.
\tag*{(1)}\end{align}` → `~.\tag*{(1)} \end{align}`, and the numbers of equations, which the
baseline counted over all the fields of a code and the engine per field); the order of the
entries of one `\cite` with several keys (123: the engine writes them in the order of their
numbers, the baseline in the source's; the same words); figure placeholders (24: `[figure]
[/fig/…]` → `[image: /fig/…]`); heading underlines (12: `~~~` → `---`); and 49 left, every
one of a class already in the index before brief 14 (checked there): the text of formulas
(spaces at the edges of `\text{ … }` lost, `\text{ Paulis }P` → `\text{Paulis}P`; a formula
inside a text command of a formula dropped, `\textup{\(\alpha\)-dits}` → `\textup{-dits}`;
`\label{…}` left out of the source; the term of a `defterm` written without its formula's
delimiters, `\(\mathbb{F}_4\) representation` → `{F}_4 representation`), table floats as
text tables in place of `[figure]`, `melas`'s corrected quotation mark, and the no-break
space before a citation attached in the source (`Ref.[M.` → `Ref. [M.`, `([T.` → `( [T.`).
The 39 sample codes (`logs/search_sample.txt`: steane, approximate_qecc,
qubits_into_qubits, golay, binary_linear, qubit_stabilizer, w_state, gray, melas,
chuang-leung-yamamoto, ira and every 40th code) were read in full
(`logs/searchidx-baseline-A.txt`): the citation texts stand in place in brackets as on the
baseline, `… a single-qubit error [B. Shaw, …, Physical Review A 78, (2008) arXiv:0803.1495
DOI]. The code is …`. Queried with the site's own code (`cmp/search_query.mjs`:
`SearchIndex.load()` with the site's lunr options, `query()` as the widget calls it), B2's
five queries and "references" give the baseline's result lists, the same codes in the same
order (before brief 14: the same numbers, but `Cao Zeng Laflamme`, `Surviving` and
`Gottesman Surviving` one rank off, and `references` 1,115 results):

| query | baseline | A, final |
|---|---|---|
| `Zeng` | 53, `approximate_qecc` 14th | 53, 14th |
| `valence-bond-solid` | 27, `approximate_qecc` 2nd | 27, 2nd |
| `Cao Zeng Laflamme` | 89, `approximate_qecc` 4th | 89, 4th |
| `Surviving` | 34, `qubits_into_qubits` 2nd | 34, 2nd |
| `Gottesman Surviving` | 86, `qubits_into_qubits` 2nd | 86, 2nd |
| `references` | 54 | 54 |

*Decision:* `flm_pieces` dropped, the line back to the original's. With the citations in
place the option adds only the footnotes, under a heading "Footnotes"; the baseline's search
text had their marks only (probe: 0.2.1's assembler writes `A code with a note.a The code is
good.b End.`, `S2/probe021/text021.mjs`; the new engine without pieces `note.ᵃ … good.ᵇ`, with
them the same followed by `Footnotes`, `---------` and the notes' texts,
`S2/probes/footnote_text.mjs`). The data has no footnote: a `yarn build-simple-noparcel`
without the option wrote a `searchindex.json` byte-identical to A's, and so did the
production build. No `\paragraph` either, so the text backend's run-in stop (S1's open
question 3) does not reach the index.

**S2c, links in a new tab** (no change). `cmp/links.py` (Python's HTML tokenizer over every
page) on the production build against the baseline:

| | baseline | before Part P (S1's build) | final |
|---|---|---|---|
| `target="_blank"` (the text, all pages) | 42,445 | 9,708 | 42,445 |
| on links of FLM content (0.2.1 `href-href`; the engine's `flm-pres-link`, kind `url`) | 32,737 | 0 (32,730 without) | 32,737 |
| on the site's own links (6,236 without class, 3 × 1,155 on the code pages, 7 on the team page) | 9,708 | 9,708 | 9,708 |
| `<a>` inside another `<a>` | 0 | 0 | 0 |

Per page, the counts by kind and the multiset of the addresses that carry the target are
the baseline's on all 1,276 common pages; no local address has it, no external link of FLM
content lacks it, no `rel` (the 1,274 `rel="license"` are the site's own links). The
difference with the build before Part P is wholly P1's: its 32,730 FLM links plus the 7 of
the reference entries that F1 dropped there.

**The exporter's bundle** (`a744cc1`). The package's `settings_hash` includes
`link_target_blank` and the module changed, so the committed bundle refused the new dump
(`engine.load()`: "settings hash d65b5461a77786b0 instead of this engine's
bdc71f68567c821c"). `yarn build` in `jscomponents` (the root's `.parcel-cache` removed
first, offline, the overlay in place): exit 0 in 7.3 s, peak 847 MB;
`_headless_exporter_browser_page.651c1379.js` 893,139 bytes (was 892,904), its map, the
page, and `zoodb_flm_wasm_bg.2e7f930a.wasm` 5,259,021 bytes, the package's byte for byte; it
differs from the previous one by the engine module's new code (`variant_count`,
`link_target_blank`, `render_text`'s `render_options`), the hashed names and the zoo's
configuration without `flm_pieces` (built after S2b, since the bundle carries
`default_config`). It does not hold the pane. S1's `check_exporter.mjs` (copied to
`S2/harness/`, its scratch folder in `S2/tmp/`): from the new dump the qubits_into_qubits
kingdom graph exports to an SVG byte-identical to S1d's export (322,366 characters); the
previous bundle refuses the dump.

**The production build** (`S2/prod_build.sh final`: `cd site && yarn build` with the
LOCAL cache, without `ECZOO_FLM_CONTINUE_WITH_ERRORS`, under the sandbox and
`/usr/bin/time -l`, the root's `.parcel-cache` removed first): **exit 0**, 340.8 s wall,
618.3 s user (E: 358.9 s with the switch), peak resident size 3,472,097,280 bytes (the
largest process; E: 3,518,578,688); load average 7.1 at its start, 17.1 at its end. 1,424
files written in 338.4 s; `_site/` 1,532 files, 1,276 HTML pages, 131,394,918 bytes (E:
130,913,156); the 108 graph SVGs (87 lists, 18 kingdoms, 3 domains). The zoo loaded in
25.5 s (the FLM processor 3.8 s, then the search text and the last processors 8.9 s);
`Pass 1: 4739 cached, 478 to fetch`, `Pass 2: 2124 cached, 0 to fetch`, `7341 considered,
0 failed`, 5,217 citations installed. Its
`dat/` files are byte-identical to build A's and its 1,276 pages to build C's (hashed bundle
names made equal). Diagnostics (`cmp/diag_lines.py`, `logs/prod-final-diag.txt`): **no FLM
diagnostic** (F1's 43 `flm.citations.no-entry` lines are gone, and no other Error or
Warning); no recovery markup (`flm-pres-dropped`, `-unknown`, `-unsupported`) on any page
(41 dropped entries before); no `<flm:` or `flm:` followed by a digit in any HTML, JSON, CSS
or XML file. The warning and error lines, all known: 1 Eleventy warning (the Parcel
plugin's version range, as in every build); 9 `generatebibtex WARNING` (brace balance of 9
BibTeX texts) and 8 `flm.latex-recomposed.unknown-character` lines (the BibTeX
generation's speller has no spelling for U+01CE, U+1EAF, U+1EC5, U+202F, U+FFFD and the
combining U+0301, U+0303, U+0308; G4's class), the same 17 lines as in S1's builds; 108 `[Cannot stringify value for debug message!]`
debug lines of the exporter's page, one per export (`jscomponents/codegraph/style.js`
lines 318 to 323, unchanged since the original, catching a debug value it cannot
stringify); 1 `Failed to load resource: … 404` in the exporter's page (its
`/favicon.ico`). Chrome for Testing rewrote its Crashpad `settings.dat` (18:00; ruled,
disclosed). The `yarn build-simple` builds, all without the switch and without an FLM
diagnostic: A (the new package at `f1e73c7`) 144.8 s, peak 3,225,223,168 bytes; the
no-parcel build without `flm_pieces` 47 s; C (`5d473b1` + `8aa472c`) 135.3 s, peak
3,207,348,224 bytes.

Against S1's build (the old module), once the new tab is taken out of the engine's links,
38 pages differ, by two causes of the new flm-core: the 41 reference entries that F1
dropped are rendered (30 pages), and a `~\cite` no longer gets two no-break spaces (17
places on 10 pages before, none now: `W state~\cite{…}` reads `W state [1]` as on the
baseline; 05's `~\cite` finding). `randomcodedata.json`: 443 previews still hold 652
citation marks in their HTML (hidden by the widget since S1a), the same as before but for
w_state's preview, whose tie's double space is gone.

**Screenshots** (`scratch/eczoo/screenshots/`). The 27 new-site images renamed
`<name>.before-14.png` and their log `new/_log.before-14.json` (the `.before-f8` files left
alone); the 27 retaken on the production build by S1's harness (`S2/harness/run_checks.sh
S2/sites/final after --shots S2/shots`, one run for the baseline and the new site), the two
random code rows again with the widget's box alone as brief 13 showed it (`S2/harness/
pages.mjs`, S1's with that change); the new site's into `new/<name>.png` with `new/_log.json`,
the baseline's (MathJax 3.2.2, its own major version, where brief 13's baseline column had
MathJax 4.1.3) into a new folder `baseline_mj3/` with its `_log.json`. `index.html` is
regenerated (`S2/cmp/make_index.py`; the previous one in `S2/logs/index.before-14.html`):
per row the baseline, before and after images with each run's measures under them, and
links to brief 13's baseline image (MathJax 4), the baseline without MathJax and the
`.before-f8` image where there is one; the notes say what each column is and what to look
for. Checked in chrome-headless-shell (`S2/harness/check_index.mjs`): the 81 images load,
the 158 links (131 files) answer 200, the 27 anchors resolve; no horizontal scroll at 400
px.

**S1's checks on the production build** (`S2/logs/after-*`). Formulas: the 513 displayed
formulas of the 311 pages against the baseline, the same distribution as S1's final build
(above: 511 within 1 px, 2 more than 4 px lower; below: 471 within 1 px, 6 within 2 px, 3
within 4 px, 33 more than 4 px closer, the formulas that end a paragraph; the summary file
equal to S1's line for line). Random code widget: 1,155 previews, 443 with marks in their
HTML, none shown, and no space before punctuation (S1's final: 1, w_state's tie, gone with
the tie's double space). Code lists: 2,894 `textit` cells on the 72 pages, all italic (the
baseline 3,427 of 3,427, its FLM `\textit` included). Heights of the 27 pages and panes
against S1's final build: equal but for `/list/quantum_cyclic` (4,162 against 3,874;
baseline 4,159) and the kingdom page (986 against 1,076; baseline 1,017), whose production
pages hold the code graph where `build-simple` has a placeholder, and `/search?q=golay`
(14,233 against 14,221; baseline 14,135; the result snippets come from the search text,
now with the citations in place; 34 results on all three); the panes' content is 25 to
26 px shorter in the 15 panes that place a list (the heading), polygon's (no list)
unchanged. Pane headings (`S2/harness/pane_headings.mjs`, 20 codes): before brief 14 a
"References" `h2` above the list in the 19 panes with one, now none, the same lists and
entries; on the baseline none (4 codes without a figure; its panes of the 16 others show
its "FLM ERROR" box).

**Checks.** The three commits each made with the root files in their committed form; the
clone's status clean at the end, the overlay removed; no
`site/.11ty-parcel-temp/`; no background process left. Nothing written under `~/.yarn` or
`~/.cache` (`find -newer` the start marker); under `~/.npm/_logs` only 22 logs of the
unrelated `npm root --global` (cwd `/Users/philippe/Research/lecturenotes/QEC`) and one of
`npm install types-registry@latest` (cwd `~/Library/Caches/typescript/5.9`: an editor's
TypeScript server), neither mine. Chrome for Testing's Crashpad `settings.dat` rewritten by
the production exporter (ruled). Nothing changed in the worktree but
`scratch/zoodb-flmrs.tgz`, the screenshots folder and this section.

**Deviations.** (1) The overlay lock's `yaml@npm:^2.9.1` entry written by `install.sh` (Yarn
could not resolve the range offline). (2) The pane reads the zoo's xnote kinds from its
configuration instead of an export of `eczoo_flm_engine_settings`. (3) The baseline column
of the screenshots now has MathJax 3.2.2 (S1's harness), brief 13's MathJax-4 images linked.
(4) The random code rows shot by a copy of S1's `pages.mjs` that shoots the widget's box
alone. (5) The exporter's bundle committed on its own, after S2b (it carries the zoo's
configuration, not the pane).

**Findings.** (1) flm-core `e7b4ba17` also ends the doubled no-break space of `~\cite` (05's
`~\cite` finding): 17 places on 10 pages before, none now, w_state's preview included. (2)
The text output of formulas, in the search text since step 6 (not new, not of S2b's
making; candidates for 05's table): spaces at the edges of `\text{ … }` dropped, a formula
inside a text command of a formula dropped (`\textup{\(\alpha\)-dits}` → `\textup{-dits}`, content lost), `\label{…}`
left out, a defterm's term with a formula written as `{F}_4 representation`. (3) A
footnote mark in the search text is a superscript letter (`ᵃ`, U+1D43), where 0.2.1 wrote a
plain `a` (no data has a footnote). (4) The committed lock lacks
`yaml@npm:^2.9.1`, so HANDOVER's install form, offline, needs that entry (or a resolution to
`scratch/eczoo/pack/yaml-2.9.1.tgz`, as the handbook has). (5) The tarball has 74 files
(HANDOVER says 75: `CHANGELOG.md` is gone). (6) The variant costs about 22 ms in the
browser on the EC zoo's settings, three times P's Node figure on the default settings.

**Open questions.** (1) The xnote kinds read from the zoo's configuration
(`eczoodb.config.flm_options.engine.settings`) rather than an exported
`eczoo_flm_engine_settings`: acceptable? (2) Should HANDOVER's install form record the
`yaml` entry of finding 4 (or the clones' `package.json` resolution of it)? (3) The 49
search-text values of finding 2: report the formula-text items to flm-rs (05), or leave
them?
