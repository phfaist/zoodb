# Handover note for continuing the build (written 2026-10-17, updated 2026-10-16 after step 4)

Read this first when continuing the ZooDb FLM redesign around flm-rs in a fresh session.
It says where things are, how each build step is run, the rules that bind, and what comes
next. The design itself is in `01`–`07`; the build briefs are `08`–`12`; the status log is
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
  here); step 4 parts A and B `19c428c` (11); step 4 part C and these notes `28df685`.
  Working tree clean at the time of writing.
- **What exists now.** `rust/` is a cargo workspace (`zoodb-autocitefetch-wasm`,
  `zoodb-flm-wasm`; flm-core by path from `/Users/philippe/projects/flm-rs/flm-core`);
  the FLM module is committed as `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm` (5.14 MB)
  with its glue, loaders `src/zooflm/_load_wasm.js` (neutral) and `_load_wasm_node.js`;
  the engine `src/zooflm/engine.js` (+ `compose.js`, `fragment.js`, `diagnostics.js`;
  package export `./zooflm/engine`; since step 4 also `parse_fields()` and
  `html_scripts()`); the processor `src/dbprocessor/flmprocessor.js` with the adapted
  field compiler, searchable-text assembler, graphics processor and citation compiler;
  the standard setup `src/std/use_flm_engine.js`, `use_flm_processor.js`,
  `use_searchable_text_processor.js`, `stdzoodb.js`; the loaders of step 4: the strict
  `yaml` package (`js-yaml` gone), `src/dbdataloader/_yamlparse.js` (shared), the YAML
  loader with `obj._zoodb.flm_field_positions`, the FLM-files loader over the engine,
  the tool `tools/reindent_yaml.mjs` (bin `zoodb-reindent-yaml`); the test zoos
  `test/test_data/flm_zoo/`, `yaml_fixtures/`, `flm_files/`. The old transpiled layer
  (`flm-js-src/`, `src/zooflm/_environment.js` and friends, their tests) is still present
  and removed in step 5; nothing under `src/dbdataloader/`, `src/dbprocessor/`,
  `src/std/`, `src/resourcecollector/` imports it.
- **The `zoodb-example` port** lives in a clone at `scratch/zoodb-example/` (ignored
  through `scratch/.gitignore`, with `*.tgz`), branch `zoodb-flmrs` there, commits
  `bc0a6ce`, `5cc0c68`, `2242062`, never pushed; its `website/_site/`, `node_modules/`
  and the citations cache copy (TTL of the arXiv entry extended) are left in place for
  quick rebuilds. The build check (pack the worktree, point the example's dependency at
  the tarball, install, build, restore `website/package.json` and `yarn.lock`) is spelled
  out in 11, Results, Part C. The original `../zoodb-example` is read-only.
- **Prototype runners** in `scratch/proto/js/` (run with
  `NODE_MODULES=/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/node_modules`,
  data `/Users/philippe/Research/projects/zoodb/zoodb-example/data` and `schemas`, or the
  EC zoo test data `/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/eczoodb/test_data`).

## How a build step is run (Philippe's instructions of 2026-10-16)

Since step 4 the steps run in **ultracode mode** (the Workflow tool) with few agents, all
on the **Opus model**, each dimensioned to stay well under about 500k tokens of context
(one part of a step per agent; long outputs to log files in the session's scratchpad).

1. The brief for the step is in this folder (`12-step5-removal-docs.md` is next); adjust
   it to the previous step's Results before handing it off (each brief has a "Results"
   section the implementer fills in; 12 has a "From step 4" list to fold in).
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
   them, re-runs the checks and adds a "Review fixes" paragraph to the Results.
4. The main session runs the checks itself, reads the substance of the diff, commits on
   the branch with the two trailers, adds a line to this folder's `README.md` status log,
   updates the memory file. Agents never commit in this repository; in the example's
   clone the agents commit (with the trailers; the model that wrote a commit may appear
   in its `Co-Authored-By`). A usage-limit interruption of a workflow is resumed with
   `resumeFromRunId`.

Commit trailers: `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>` and
`Claude-Session: https://claude.ai/code/session_01M8stUK6fLR9cvYh32nU9rh`.

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
- The flm-core path dependency stays as it is; do not ask where flm-rs will live. The CI
  `rust` job cannot pass until then (recorded, not worked around).
- No sweep of the EC zoo data; discrepancies are fixed during the switch (step 6).
- Style with Philippe: questions in prose with full context, plain language, US English,
  never the block question tool; clear and unambiguous explanations.

## Environment and checks

cargo 1.97, wasm-pack 0.15, node 23.7, yarn 4.6 (PnP; `yarn install` done in the
worktree; scripts run with `yarn node`). Rust checks per crate (feature unification would
give the citation crate `serde_json/std`): `cd …/rust && cargo clippy -p zoodb-flm-wasm
--all-targets -- -D warnings && cargo test -p zoodb-flm-wasm` (and the same with `-p
zoodb-autocitefetch-wasm`). Module rebuild: `yarn build:wasm flm` (about 15 s warm, up
to 2 min cold); the committed module must match the crate (step 4 changed neither).
`yarn test` (487 passing after step 4), `yarn lint` (18 errors that predate the branch in
8 untouched files, cleared in step 5; new files must add none). The example's build
check: 11, Results, Part C (about 10 s once the clone's citations cache is fresh).

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
  keep `#sec-…`, `#eq-…`, corrected in step 5); its display is the
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

## Next

- **Step 5** = brief 12 (removal of the old layer and `flm-js-src`, exports and version
  0.3.0, path remapping of the binaries in `tools/build_wasm.mjs`, the old lint errors,
  the `doc/` rewrite, `CLAUDE.md`, `README.md`, the playground sample). Fold in its "From
  step 4" list first (a `files` list for the package, `engines` ≥ 20, the YAML 1.2
  release note, `parse_fields`/`html_scripts` in the docs, the positions-in-dumps
  decision, the `skip_save_cache` doc nuance). Ask Philippe for the go if he asked for a
  checkpoint; otherwise his instruction of 2026-10-16 ("continue the build") stands.
- **Step 6** = the EC zoo, outside this repository (no brief yet; write
  `13-step6-eczoo.md` from 01 and the findings): `eczoo_sitegen` and `eczoo_handbook`
  ports; code reading `zoo_flm_processor.scanner.get_encountered(...)` moves to
  `processor.scan_results`; the 127 YAML files re-indented with `zoodb-reindent-yaml`
  (191 values; verified on a copy); the three duplicate labels (`eq:parity`,
  `figure:toric-code-operators`, `eq:gb_gv`); the list option `[{⇒}]` in
  `binary_linear.yml`; `%%` comments; `\includegraphics` inside floats only unless
  `graphics.global`; the handbook over `render_latex` (07 milestone 5); the browser apps
  at level 1 through `engine.load(data.zooflm)`; the site's MathJax 3 setup and the SCSS
  targeting the old math classes (`jscomponents/mathjax/setup.js`,
  `site/stylesheets/flm-formatting.scss`) replaced by `html_scripts()` and the new
  classes (the gap found in step 4's review); dev mode: a new engine per rebuild is never
  `free()`d (measure); 12 `~\cite` in the data render two no-break spaces (05 findings).
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
  (which takes the port as its worked example) go live together, zoodb first.
