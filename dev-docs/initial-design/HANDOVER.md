# Handover note for continuing the build (written 2026-10-17, updated 2026-10-26, evening)

Read this first when continuing the ZooDb FLM redesign around flm-rs in a fresh session.
It says where things are, how each build step is run, the rules that bind, and what comes
next. The design itself is in `01`–`07`; the build briefs are `08`–`13`; the status log is
in `README.md` of this folder.

## Where things are

- **Repository and branch.** All work is in the git worktree
  `/Users/philippe/Research/projects/zoodb/zoodb/.worktrees/zoodb-flmrs`, branch
  `zoodb-flmrs` (based on `main` at `bb94f3e`). The main checkout at
  `/Users/philippe/Research/projects/zoodb/zoodb` stays untouched (`.worktrees/` is in
  `.git/info/exclude`). The shell's working directory is not reliable between commands:
  use absolute paths, or `cd <abs> && …` within one command.
- **Commits so far** (all with the trailers below): step zero `7960397`…`8b2c468`
  (prototype, 07); step 1 `e00e24a` (08); step 2 `98d8f40` (09); step 3 `6a545c9` (10);
  docs `41c673d`, `c435de5`; `053c8d6` (Philippe: the main checkout's `scratch/` moved
  here); step 4 parts A and B `19c428c` (11); step 4 part C and these notes `28df685`
  (its hash added in `7d5f273`); step 5 `e8f7c00` (12); these notes after step 5 and
  brief 13 `1f1f0f8`; step 6 part 0 (the package: term bodies and per-tree cited keys in
  the scan, per-call render options) and part A (the EC zoo clones, the data
  re-indented) `c6b11b9` (13); B1's results and closing with G6 fixed in the package
  `1d7230c` (13); B2's results with G7, G8 and G9 fixed in the package `cca3628` (13);
  C's results with G10 fixed in the package `6105fcb` (13); D's results with G12
  (per-call `render_options` of `render_latex()`) fixed in the package `1574e62` (13);
  E's results (the site's full build check against a fresh baseline build, the
  screenshots, dev mode), the consolidated questions for Philippe and these notes at the
  end of step 6, in the main session's final commit of the step (13).
- **What exists now.** `rust/` is a cargo workspace (`zoodb-autocitefetch-wasm`,
  `zoodb-flm-wasm`; flm-core since 2026-10-20 a git dependency on the branch `main-rs`
  of the public `https://github.com/phfaist/flm.git`, before by path from
  `/Users/philippe/projects/flm-rs/flm-core`; since 2026-10-26 the lock pins
  `e7b4ba17` and the committed module is built from it);
  the FLM module is committed as `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm` (5,223,643
  bytes since 2026-10-26) with its glue, loaders `src/zooflm/_load_wasm.js` (neutral) and
  `_load_wasm_node.js`;
  the engine `src/zooflm/engine.js` (+ `compose.js`, `fragment.js`, `diagnostics.js`;
  package export `./zooflm/engine`; since step 4 also `parse_fields()` and
  `html_scripts()`); the processor `src/dbprocessor/flmprocessor.js` with the adapted
  field compiler, searchable-text assembler, graphics processor and citation compiler;
  the standard setup `src/std/use_flm_engine.js`, `use_flm_processor.js`,
  `use_searchable_text_processor.js`, `stdzoodb.js`; the loaders of step 4: the strict
  `yaml` package (`js-yaml` gone), `src/dbdataloader/_yamlparse.js` (shared), the YAML
  loader with `obj._zoodb.flm_field_positions`, the FLM-files loader over the engine,
  the tool `tools/reindent_yaml.mjs` (bin `zoodb-reindent-yaml`); the test zoos
  `test/test_data/flm_zoo/`, `yaml_fixtures/`, `flm_files/`. Since step 5 the old
  transpiled layer is gone (`flm-js-src/`, the six old `src/zooflm/` modules, their
  tests, the old playground); `./zooflm` re-exports the engine, the citation compiler
  and the neutral loader (not the Node one); package `0.3.0` with `CHANGELOG.md` (new),
  `engines` `node >=20` and a `files` list (75 packed files); the API sample
  `playground/play_example.mjs`; `tools/build_wasm.mjs` remaps the build machine's
  paths, byte-checks the binaries and records `paths_remapped` and the flm-core
  source in `BUILD_INFO.json` (`flm_core_source`, the lock's git URL with the commit;
  a build by path records `flm_core_git: { commit, dirty }` instead); `doc/` rewritten.
- **The `zoodb-example` port** lives in a clone at `scratch/zoodb-example/` (ignored
  through `scratch/.gitignore`, with `*.tgz`), branch `zoodb-flmrs` there, commits
  `bc0a6ce`, `5cc0c68`, `2242062`, never pushed; its `website/_site/`, `node_modules/`
  and the citations cache copy (TTL of the arXiv entry extended) are left in place for
  quick rebuilds. The build check (pack the worktree, point the example's dependency at
  the tarball, install, build, restore `website/package.json` and `yarn.lock`) is spelled
  out in 11, Results, Part C; also clear the clone's root `.parcel-cache` first (the
  build script clears only `website/.parcel-cache`, and the root one puts an earlier
  build's bundles back into `_site/`). Last rebuilt on 2026-10-26 with flm-core
  `e7b4ba17`. The original `../zoodb-example` is read-only.
- **The EC zoo port** (step 6, brief 13) lives in three clones under `scratch/eczoo/`
  (ignored through `scratch/.gitignore`): `eczoo_sitegen`, `eczoo_data`,
  `eczoo_handbook`, each on a branch `zoodb-flmrs` with its push URL disabled, never
  pushed. The data clone holds A's `fd2a8d992` (the re-indent) and `60bbc93ae` (the
  `eq:parity` labels); the sitegen clone A's `8634846` and B1's `9311d27`, `9ff93ff`,
  `70558e5`, `7847ecc`, `5ae77b8`, `f2ec92c`, B2's thirteen (`00e4fe9` … `1c1cf55`), C's
  seven (`824d2ad` … `0ac4fb3`), E's `5281597` (the exporter's bundle rebuilt on the G12
  module) and the closing work's `793f2bf` (the site's paragraph margin kept off the
  engine's lists, F8), so it stands at `793f2bf`, 29 commits over the original's
  `a2ad583`; the handbook clone D's four (`9dfa0b2`, `34da9e4`, `d1f0248`, `8d44099`)
  and its review fixes' three (`1fbbb95`, `38141cc`, `d5ccdc5`), so it stands at
  `d5ccdc5`, 7 commits over `c73b681`. The sitegen runs on 0.3.0 from the tarball
  `scratch/zoodb-flmrs.tgz` (packed again with G12 in D) through a root `resolutions`
  overlay of its `package.json` and `yarn.lock`, restored before every commit; its
  installs keep Yarn's mirror out of `~/.yarn` with `YARN_GLOBAL_FOLDER` in the
  session's scratchpad (`YARN_ENABLE_MIRROR=0` cannot install offline from the copied
  caches), and a repack needs three stale copies removed first (13, Setup). Its
  full-data builds use the cache copy `_zoodb_citations_cache_LOCAL`
  (`ECZOO_CITATIONS_CACHE_DIR`), and `ECZOO_FLM_CONTINUE_WITH_ERRORS=1` gives inspection
  builds under `'continue'`, needed while F1 was open (below). The handbook clone installs the
  same tarball and the sitegen's four packages through a root overlay of its own (six
  resolutions, `yaml` 2.9.1 among them, put back by `reinstall_handbook.sh`) and builds
  offline under the sandbox profile `nonet.sb`, both in D's folder
  `/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/D/`,
  with TeX Live 2023 (`--latex-bin`; the class refuses any other) and the ignored cache
  copy `mkeczhandbook/_zoodb_citations_cache_LOCAL` (13, Results D, For E). The
  originals under `/Users/philippe/Research/projects/2021-qec-zoo/` are read-only (heads
  `a2ad583`, `7ade20a2f`, `c73b681`). E's baseline, a build of the original sitegen on
  zoodb 0.2.1 (a scratch `git clone --no-local` of it beside a clone of the data clone),
  and both built sites are in E's scratchpad folder (`E/baseline/`, `E/sites/`; 13,
  Results E), which may be gone: the new site is also the sitegen clone's `site/_site/`
  (since E's closing work a `yarn build-simple` build at `793f2bf`, the production
  build's pages but for the F8 stylesheet, hashed names and placeholders for the
  graphs), the original's own `site/_site/` (read-only) equals the baseline's but for
  the data change (13, Results E, The baseline), and the screenshots for Philippe are
  copied to `scratch/eczoo/screenshots/` (ignored; `index.html` shows the pairs side by
  side; 13 of the new site's retaken after the F8 fix, the earlier ones kept beside them
  as `<name>.before-f8.png`).
- **Prototype runners** in `scratch/proto/js/` (run with
  `NODE_MODULES=/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/node_modules`,
  data `/Users/philippe/Research/projects/zoodb/zoodb-example/data` and `schemas`, or the
  EC zoo test data `/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/eczoodb/test_data`).

## How a build step is run (Philippe's instructions of 2026-10-16)

Since step 4 the steps run in **ultracode mode** (the Workflow tool) with few agents, all
on the **Opus model**, each dimensioned to stay well under about 500k tokens of context
(one part of a step per agent; long outputs to log files in the session's scratchpad).

1. The brief for the step is in this folder (`13-step6-eczoo.md` for step 6, one part
   per agent); adjust it to the previous step's Results before handing it off (each
   brief has a "Results" section the implementer fills in).
2. One workflow: an **implementer agent** (`model: 'opus'`) with the brief's path, the
   worktree path and the commit it starts from, the hard rules (below), the context files
   to read, the environment facts, the checks to run, what to put in the Results, the
   report shape (structured output); then, in the same workflow, a **reviewer agent**
   (Opus, read-only) over the uncommitted diff and the brief: findings as must-fix /
   should-fix / note with file and line, verdicts on every deviation and open question,
   the checks re-run.
3. The main session reads both reports, decides on every finding (and on the questions
   left to Philippe: ask him in prose, or defer and record), and runs a second workflow
   with one **fixer agent** (Opus) carrying the fix list and the decisions; it applies
   them, re-runs the checks and adds a "Review fixes" paragraph to the Results. Step 5
   added two variants worth keeping: when a step has independent parts, the implementer
   may be several agents on disjoint files (one for the code, two for the docs, each side
   with its own reviewer), and a read-only **verifier agent** after the fixer, in the
   same workflow, paid off.
4. The main session runs the checks itself, reads the substance of the diff, commits on
   the branch with the two trailers, adds a line to this folder's `README.md` status log,
   updates the memory file. Agents never commit in this repository; in the example's
   clone the agents commit (with the trailers; the model that wrote a commit may appear
   in its `Co-Authored-By`). A usage-limit interruption of a workflow is resumed with
   `resumeFromRunId`.

Commit trailers: the attribution lines of the current session (steps 0 to 6:
`Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>` and
`Claude-Session: https://claude.ai/code/session_014E8o5tjoMsVYDAGRKzyvwU`; brief 14:
`Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` and
`Claude-Session: https://claude.ai/code/session_01VvdThGsvMMSWmKY2D6CsRM`).

## Rules that bind (from Philippe; see also the memory files)

- All edits in the worktree. Never `git stash`. Commit regularly on `zoodb-flmrs`.
- Read-only, never edit: `/Users/philippe/projects/flm-rs/` (never read its
  `playground/`); `/Users/philippe/Research/projects/zoodb/zoodb-example/`;
  `/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen`, `.../eczoo_data`,
  `.../eczoo_handbook` (never list `/Users/philippe/Research/projects/2021-qec-zoo/`
  itself); the old Python FLM `/Users/philippe/Research/util/flm`; pylatexenc
  `/Users/philippe/Research/util/pylatexenc`. Nothing else outside the worktree without
  Philippe's authorization (ask). Copies of the EC zoo data in the session's scratchpad
  may be read and tested on (step 4 did), the repository itself is never written.
- No workarounds for anything that needs a change in flm-rs; requests to flm-rs are kept
  to the minimum (05; findings that are not requests go in its "Findings to report"
  table). Nothing moves into flm-rs for now. U1 agreed; U2 (a public constructor for
  `GraphicsPublished`, needed for `srcset`) ruled medium-low priority: the standard setup
  accepts `graphics_use_srcset_parceljs` but leaves `srcset` off and warns once until U2
  lands.
- flm-core comes from the branch `main-rs` of the public FLM repository
  `https://github.com/phfaist/flm.git` (Philippe, 2026-10-20), a git dependency whose
  commit `rust/Cargo.lock` pins (`cargo update -p flm-core` moves it).
- No sweep of the EC zoo data; discrepancies are fixed during the switch (step 6).
- Style with Philippe: questions in prose with full context, plain language, US English,
  never the block question tool; clear and unambiguous explanations.

## Environment and checks

cargo 1.97, wasm-pack 0.15, node 23.7, yarn 4.6 (PnP; `yarn install` done in the
worktree; scripts run with `yarn node`). Rust checks per crate (feature unification would
give the citation crate `serde_json/std`): `cd …/rust && cargo clippy -p zoodb-flm-wasm
--all-targets -- -D warnings && cargo test -p zoodb-flm-wasm` (and the same with `-p
zoodb-autocitefetch-wasm`). Module rebuild: `yarn build:wasm flm` (about 15 s warm, up
to 2 min cold; the first build with the remapping flags recompiles everything); the
committed module must match the crate (step 5 rebuilt both). The build reads the flm-rs
checkout's git state only for `BUILD_INFO.json` (read-only, `git --no-optional-locks`).
`yarn test` (487 passing in step 6), `yarn lint` (green since step 5 and run by the CI
test job; keep it at zero errors), the sample `yarn node playground/play_example.mjs`.
Docs: the worktree's `doc/` poetry environment has no packages installed, so step 5 ran
the main checkout's `~/Library/Caches/pypoetry/virtualenvs/zoodb-doc-oZT3q19H-py3.13/bin/sphinx-build`
(Sphinx 8.1.3) read-only from the worktree's `doc/`, output in the scratchpad (no warning;
the details in 12, Results, Part D); `cd doc && poetry install` would populate the
worktree's own, in poetry's cache outside the worktree. The example's build check: 11,
Results, Part C (about 10 s once the clone's citations cache is fresh).

## Decisions taken during the build (beyond 03)

- Rust checks per crate; the citation module's regenerated binary kept (step 1).
- The FLM module ships as a committed `.wasm` file; two loaders; `import.meta.url` only
  in the neutral loader's `new URL(…)` (step 1).
- Options read from JavaScript refuse unknown keys; `null`/`undefined` keys take defaults.
- Engine: no page `title` option; text snippets one run per fragment; markers carry a
  per-call token; `truncate()` keeps the origin label; `ne()` true for numbers and
  booleans; `rdr()` throws on plain objects (step 2).
- Index: a label entry's href carries `#anchor` only when the anchor is label-derived
  (numbered floats and theorems link to the object's page; sections and equation lines
  keep `#sec-…`, `#eq-…`, corrected in step 5), that is when one of the labels of its
  point forms it, so that every label of a point gets it (step 6); its display is the
  point's source only when label-derived and standalone, else the object's display;
  the default object display is `name` only when standalone, else the id (step 3).
- Reload releases replaced fragments only after a successful re-processing (step 3).
- The dump is `data.zooflm` (switch `flm_include_zooflm_data`); `engine.load` checks a
  settings hash that includes the core's version (step 3).
- Rulings 2026-10-17: the `zoodb-example` port is made in a clone of
  `git+ssh://github.com/phfaist/zoodb-example.git` under `scratch/zoodb-example/`
  (gitignored here) on a branch `zoodb-flmrs` there, committed there, never pushed; the
  package version becomes `0.3.0`, never 1.0.0 (pre-1.0 API).
- Step 4, positions: a block scalar's `line` is its first content line and `col` is
  `indent + 1`, so value line `i` is file line `line + i` (the mapping of step 2);
  `approx: true` for folded, plain and quoted values spanning several lines and for a
  one-line quoted value with an escape; `indent` for block scalars only; positions are
  recorded only when `load_objects` returns the file's data as its one object; dumps
  keep `flm_field_positions` for now (Philippe's call, 11 Deferred (b)).
- Step 4, the refused pattern: what YAML 1.2 refuses (a continuation not indented more
  than the key's column, the `-`'s for a bare item), detected through `yaml`'s own
  missing-quote error plus a lenient closing-quote check (a forgotten quote is not the
  pattern); the tool verifies each file against a lenient reading of the original.
- Step 4: `flm_field_environmentname` accepts only `field` (the core's element); the
  loader needs the engine (`parse_fields`); a nameless `field` block is a thrown core
  error (a binding diagnostic deferred, 11 Deferred (a)).
- Step 4, scripts (Q10): the site delivers the engine's script definitions through
  `engine.html_scripts()` (the MathJax 4 configuration, then the `async` loader); the
  example's layout calls it on the zoo's global data; a page template prints the
  warnings `render_document()` returns. The example's committed dependency stays the git
  URL (its lock pins an old zoodb commit: refresh after the merge); the pre-existing
  empty `<title>` fixed on the example's branch.
- Step 5: `./zooflm` environment-neutral (the Node loader only as `./zooflm/wasm-node`);
  the `files` entries `/README.md`, `/CHANGELOG.md` with a leading slash (else yarn packs
  every nested README); Node 18 out of the CI matrix (`engines` `node >=20`); rustflags
  in a cargo configuration file refused by `tools/build_wasm.mjs` (the encoded flags
  would replace them; no TOML parser), flags from the environment merged;
  `BUILD_INFO.json` records `<dep>_git: { commit, dirty }` per path dependency in a git
  checkout, `dirty` for the dependency's own directory; `use_flm_engine` refuses unknown
  keys of `flm_options.engine`; `CHANGELOG.md` is the release notes; the CI example-build
  steps kept, marked pending by a comment (not disabled) until the example's port reaches
  its default branch.

## Next

- **Step 5** done (12, `e8f7c00`).
- **Brief 14** done (2026-10-26, `14-site-parity-fixes.md`): Philippe's ruling that the
  EC zoo site looks and behaves as on 0.2.1. Package (`f23cb2c`): `\href`/`\url`/`\email`
  outside the site get `target="_blank"` (ZooDb lowering rule, `link_target_blank`);
  per-call `render_options` take registry-bound keys (a variant registry per set of
  values); the search text has the citations in place. Sitegen clone, 7 commits over
  `793f2bf` (now at `a744cc1`): random code previews hide the marks, displayed formulas
  spaced as before, `\paragraph` with its dash, `.textit`/`.textbf` back, the pane's lists
  without headings, the search text without the pieces, the exporter bundle rebuilt. The
  production build exits 0 **without** the switch (F1 fixed), 340.8 s, no FLM diagnostic;
  42,445 `target="_blank"` links as the baseline, page by page; the six search queries
  give the baseline's results. Screenshots retaken (`scratch/eczoo/screenshots/index.html`:
  baseline, before, after). Findings F6 to F10 added to 05. The previous session's
  scratchpad scripts are gone; brief 14's harness is in this session's scratchpad
  (`…/20fdef06-…/scratchpad/14/S1/harness/`, S2's copies in `14/S2/`), while it lasts.
- **Step 6** done (13): the EC zoo on 0.3.0, ported in the three clones above, in the
  parts 0, A, B1, B2, C, D and E; commits `c6b11b9` (part 0 and A), `1d7230c` (B1, G6),
  `cca3628` (B2, G7 to G9), `6105fcb` (C, G10), `1574e62` (D, G12) and the main
  session's final commit of the step (E, the consolidated questions, these notes). The
  package gained term bodies and per-tree cited keys in the scan, per-call render
  options for `render_document()`, `render_fragment()` and `render_latex()`, objects
  without a page, truncation that never cuts inside a command's arguments, a relation's
  detail compiled once for both objects, the cited works in the search text, the engine
  module's re-exports by name, and the settings' render options reaching every run; 487
  tests. The site's production build exits 0 with the switch (358.9 s against 1,285.3 s
  for a fresh baseline build on zoodb 0.2.1), and its pages, exports, code graphs and
  apps were compared with that baseline, every difference classified (13, Results E,
  both halves; the screenshots for Philippe in `scratch/eczoo/screenshots/index.html`,
  a copy of E's `E/screenshots/`). The handbook builds (728 pages, 0 diagnostics). F1 was
  the one open blocker: the default full build exited 1 at gray's meta description (in
  production mode it then hangs, question 30), and inspection builds passed
  `ECZOO_FLM_CONTINUE_WITH_ERRORS=1`. flm-core `e7b4ba17` fixes F1 (2026-10-26, checked
  with a probe on the rebuilt module); the EC zoo's full build has not been re-run on
  it. The tarball `scratch/zoodb-flmrs.tgz` was repacked with this module the same day,
  so the clones' next install needs the stale copies removed first (13, Setup).
- **Philippe's decisions** (no agent work is pending):
  - the consolidated questions of 13 ("Questions for Philippe": 34 numbers in six
    groups, the main session's rulings among them marked "ruling to confirm");
  - merging and pushing: the worktree's branch `zoodb-flmrs` into zoodb's `main` first
    (the clones' git URLs then point at the right code), then the clones' branches
    `zoodb-flmrs`: the data, the sitegen with its lock refreshed, the handbook last with
    its lock refreshed (questions 2 and 3); their push URLs are disabled
    (`no-push-from-this-clone`) and their `origin` is the local original; the
    `zoodb-example` branch goes live with zoodb's (below);
  - F1 is fixed upstream (`e7b4ba17`); whether the sitegen's switch stays (question 10),
    and whether F2 to F5 and the space of question 29 go upstream;
  - outside the worktree: the two archives B1's install wrote in `~/.yarn/berry/cache`
    (`@phfaist-zoodb-file-8af460e1f9-8.zip`, `yaml-npm-2.9.1-d61da744fe-8.zip`,
    2026-10-18 21:47), which he may delete; Chrome for Testing's
    `~/Library/Application Support/Google/Chrome for Testing/Crashpad/settings.dat`,
    rewritten at each launch of the production exporter (D's and E's builds; ruled,
    disclosed); cargo's `~/.cargo/.global-cache` and wasm-pack's lock file, their
    bookkeeping (B2, D, E);
  - outside the rule that nothing is downloaded: before D's sandbox profile existed, D's
    first agent reached the arXiv API on 2026-10-19 (`probe1` one request for three
    works at 15:15, `probe1full` likely one more at 15:18, `gen_test1` to `gen_test3`
    one work each at 15:47 to 15:50), the records kept only in ignored cache copies (13,
    Results D, deviation 6);
  - outside the rule that flm-rs's `playground/` is never read: the last check of E's
    review fixes, a `find -newer` at depth 3 over the flm-rs checkout, listed that
    folder's directory entries (no file of it opened; 13, Results E, Review fixes);
  - the `LICENSE` file and flm-rs's URL (below, "Later for Philippe").
- **If step 6 is reopened.** The session's scratchpad
  (`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/a1dd88e1-7168-44e0-92fc-0b56c08d4645/scratchpad/step6/`)
  may be gone; what a new part needs is here or in the worktree.
  - The clones `scratch/eczoo/{eczoo_sitegen,eczoo_data,eczoo_handbook}` (ignored) and
    their ignored state stay: the copied `.yarn/cache`, `node_modules`, the citations
    caches `_zoodb_citations_cache_LOCAL` (sitegen; its `arxiv` and `doi` entries
    extended by 60 days) and `mkeczhandbook/_zoodb_citations_cache_LOCAL`,
    `_testrepo_zoodb_citations_cache_LOCAL` (handbook), and the sitegen's `site/_site/`,
    a `yarn build-simple` build at `793f2bf` (E's closing work; E's production build, at
    `5281597`, is `E/sites/new_site/`). To make them again: 13, Setup
    (`git clone --no-local` from the read-only originals, the push URL disabled, branch
    `zoodb-flmrs`, the caches copied, never moved).
  - The install form. Pack the worktree (`yarn pack --out scratch/zoodb-flmrs.tgz`, 74
    files since `CHANGELOG.md` was deleted). In the sitegen clone a root
    `"resolutions": { "@phfaist/zoodb": "file:<worktree>/scratch/zoodb-flmrs.tgz" }` in
    `package.json`, then
    `YARN_GLOBAL_FOLDER=<a folder outside ~/.yarn> YARN_ENABLE_NETWORK=0 yarn install`
    (Yarn 3.3.0 through corepack; never `YARN_ENABLE_MIRROR=0`, which cannot install
    offline from the copied cache). After a new pack, first remove the folder's copy of
    the tarball (`<folder>/cache/@phfaist-zoodb-file-*.zip`), the lock's
    `@phfaist/zoodb@file:` entry and `node_modules/@phfaist/zoodb`. Check one
    `node_modules/@phfaist/zoodb`, version 0.3.0, its `src/` equal to the worktree's
    (`diff -rq`). The committed lock has no `yaml@npm:^2.9.1` entry, so the offline
    install also needs that entry added to the overlay lock (brief 14's
    `S2/install.sh` wrote it from the archive in the project cache). Restore `package.json` and `yarn.lock` (`git checkout --`) before any
    commit. The handbook clone (Yarn 4.6.0) likewise, with six resolutions:
    `@phfaist/zoodb` the tarball; `@errorcorrectionzoo/eczoodb`,
    `@errorcorrectionzoo/eczoohelpers_eczcollectbib`, `@errorcorrectionzoo/jscomponents`
    and `@errorcorrectionzoo/_zoodb_citations_cache` the tarballs
    `scratch/eczoo/pack/{eczoodb,eczcollectbib,jscomponents,_zoodb_citations_cache}.tgz`
    (`yarn pack --out` in the sitegen clone's workspaces); `yaml@npm:^2.9.1` the tarball
    `scratch/eczoo/pack/yaml-2.9.1.tgz`. Its builds keep the overlay in place (with the
    committed lock, `main.js`'s version lookup runs `git fetch` on GitHub) and restore
    the root files after.
  - Builds. The site's full-data builds with
    `ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL` and, on a module older
    than flm-core `e7b4ba17` (F1), `ECZOO_FLM_CONTINUE_WITH_ERRORS=1` (then F1's 43 `flm.citations.no-entry` lines are
    the only diagnostics); the production build is `cd site && yarn build`; remove
    `site/.11ty-parcel-temp/` after any `yarn dev`, and the root's `.parcel-cache`
    before `yarn build` in `jscomponents`. The handbook:
    `cd mkeczhandbook && node main.js` with
    `--citations-cache-dir=<a copy of the LOCAL folder>` and
    `--latex-bin=/usr/local/texlive/2023/bin/universal-darwin` (the class refuses any
    other TeX Live), Inkscape and ImageMagick through two wrappers that set `HOME` to a
    scratch folder; an inspection test build passes the switch on the command line
    (question 23).
  - No network. Every build and probe of E, and every build of D from 16:00 on
    2026-10-19, ran under the macOS sandbox profile `nonet.sb` (in D's folder, made at
    15:51); before it, D's first agent's `probe1`, likely `probe1full`, and its first
    three test generations reached the arXiv API (13, Results D, deviation 6). The
    profile has five lines: `(version 1)`, `(allow default)`, `(deny network-outbound)`,
    `(allow network-outbound (remote ip "localhost:*"))`,
    `(allow network-outbound (remote unix-socket))`; the runs go through
    `sandbox-exec -f nonet.sb <command>`, with `TMPDIR` in the scratchpad,
    `YARN_ENABLE_NETWORK=0`, `COREPACK_ENABLE_NETWORK=0`, `PUPPETEER_SKIP_DOWNLOAD=1`
    and `GIT_ALLOW_PROTOCOL=file`. Browser checks and screenshots: the clone's Puppeteer
    24.4 with `headless: 'shell'` (chrome-headless-shell 134.0.6998.35 in
    `~/.cache/puppeteer`, which leaves Crashpad alone), the site served by its `sirv` on
    127.0.0.1, every external request aborted but MathJax 4, answered from the read-only
    copy in flm-rs's `target/mathjax-probe/node_modules/@mathjax/`.
  - The scratchpad's layout, while it lasts: `step6/survey/`, `part0/`, `partA/`, `B1/`,
    `B1close/` (with `yarn-global/`, the Yarn folder of every install), `B2/`
    (`devmem/`, the dev-mode harness), `C/` (`probes/browser_check.mjs`), `D/`
    (`nonet.sb`, `env.sh`, `reinstall_handbook.sh`, `fix/run_builds.sh`, `bin/` the
    wrappers), `E/` (`env.sh`, `prod_build.sh`, `cmp/` the comparison scripts, `sites/`
    both built sites, `baseline/` the checkout on zoodb 0.2.1, `devmode/`,
    `screenshots/` with `index.html`, `half2/`); each part's Results name their files.
- Later for Philippe: U2 in flm-rs when he wants `srcset`; the float-anchor policy option
  (05, not raised); the flm-core finding on a `field` environment without a name (05);
  the `~\cite` tie (05); whether dumps drop the positions (11 Deferred (b)); the example's
  lock refresh and merge to its `main` once zoodb's `zoodb-flmrs` is merged; a guard for
  `</script` in `html_scripts()` if hosts ever register script definitions; the URL of
  flm-rs's language reference, to give in `doc/flm.rst` and `README.md` once flm-rs is
  public; a `LICENSE` file (MIT) for the package, not added since the copyright line is
  his (yarn and npm pack a root `LICENSE` without a `files` entry);
  `allow_unresolved_citations` does not cover a `\cite` whose prefix has no source (the
  processor throws), and `CitationCompiler` requires `citations.csl_style` even when every
  citation comes ready-formatted (both predate step 5); the image inspector chooses its
  parser by the case-sensitive extension (`.PNG`, `.tif` refused); `flmprocessor.js`
  imports the `path` builtin (as does `citationcompiler.js`, through
  `src/util/atomicfilewrite.js`, and with it `./zooflm`), so the standard setup reaches a
  Node builtin indirectly; the example's `zoodb-flmrs` branch and `doc/website11ty.rst`
  (which takes the port as its worked example) go live together, zoodb first; the scan
  does not see the citations, labels and term definitions that user definitions write
  (so such a citation is not retrieved; the EC zoo defines none; 13, Part 0);
  `html_definitions()`, `html_scripts()` and `html_stylesheet()` list the parts the
  features declare while the runs honor the settings' `html.definitions` overrides (13,
  Part 0).
