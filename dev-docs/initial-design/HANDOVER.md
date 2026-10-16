# Handover note for continuing the build (written 2026-10-17)

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
  docs `41c673d` (rulings of 2026-10-17). Working tree clean at the time of writing.
- **What exists now.** `rust/` is a cargo workspace (`zoodb-autocitefetch-wasm`,
  `zoodb-flm-wasm`; flm-core by path from `/Users/philippe/projects/flm-rs/flm-core`);
  the FLM module is committed as `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm` (5.14 MB)
  with its glue, loaders `src/zooflm/_load_wasm.js` (neutral) and `_load_wasm_node.js`;
  the engine `src/zooflm/engine.js` (+ `compose.js`, `fragment.js`, `diagnostics.js`;
  package export `./zooflm/engine`); the processor `src/dbprocessor/flmprocessor.js`
  with the adapted field compiler, searchable-text assembler, graphics processor and
  citation compiler; the standard setup `src/std/use_flm_engine.js`,
  `use_flm_processor.js`, `use_searchable_text_processor.js`, `stdzoodb.js`; the test
  zoo `test/test_data/flm_zoo/`. The old transpiled layer (`flm-js-src/`,
  `src/zooflm/_environment.js` and friends, their tests) is still present and removed in
  step 5; nothing under `src/dbprocessor/`, `src/std/`, `src/resourcecollector/` imports it.
- **Prototype runners** in `scratch/proto/js/` (run with
  `NODE_MODULES=/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/node_modules`,
  data `/Users/philippe/Research/projects/zoodb/zoodb-example/data` and `schemas`, or the
  EC zoo test data `/Users/philippe/Research/projects/2021-qec-zoo/eczoo_sitegen/eczoodb/test_data`).

## How a build step is run (Philippe's instruction of 2026-10-16)

1. The brief for the step is in this folder (`11-step4-loaders.md` is next, then
   `12-step5-removal-docs.md`); adjust it to the previous step's Results before handing
   it off (each brief has a "Results" section the implementer fills in).
2. Spawn an **implementer agent on the Opus model** (`model: "opus"`, general-purpose)
   with: the brief's path; the worktree path and the commit it starts from; the hard
   rules (below); the context files to read; the environment facts; the checks to run;
   what to put in the Results section; the final report format (`git status --short`,
   check outputs, numbers, deviations, open questions). Agents never commit.
3. When it reports, spawn a **reviewer agent on Opus** over the uncommitted diff and the
   brief: findings as must-fix / should-fix / note with file and line, verdicts on every
   deviation and open question, the checks re-run; read-only, no fixes.
4. Send the fix list and the decisions back to the implementer (SendMessage to its id);
   it applies them, re-runs the checks, rebuilds the module if the crate changed.
5. Run the checks yourself, then commit on the branch with the two trailers, add a line
   to this folder's `README.md` status log, update the memory file. A usage-limit
   interruption of an agent is resumed by a SendMessage to the same agent.

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
  Philippe's authorization (ask).
- No workarounds for anything that needs a change in flm-rs; requests to flm-rs are kept
  to the minimum (05). Nothing moves into flm-rs for now. U1 agreed; U2 (a public
  constructor for `GraphicsPublished`, needed for `srcset`) ruled medium-low priority: the
  standard setup accepts `graphics_use_srcset_parceljs` but leaves `srcset` off and warns
  once until U2 lands.
- The flm-core path dependency stays as it is; do not ask where flm-rs will live. The CI
  `rust` job cannot pass until then (recorded, not worked around).
- No sweep of the EC zoo data; discrepancies are fixed during the switch (step 6).
- Style with Philippe: questions in prose with full context, plain language, US English,
  never the block question tool; clear and unambiguous explanations.

## Environment and checks

cargo 1.97, wasm-pack 0.15, node 23.7, yarn 4.6 (PnP; `yarn install` done in the
worktree). Rust checks per crate (feature unification would give the citation crate
`serde_json/std`): `cd …/rust && cargo clippy -p zoodb-flm-wasm --all-targets -- -D
warnings && cargo test -p zoodb-flm-wasm` (and the same with `-p
zoodb-autocitefetch-wasm`). Module rebuild: `yarn build:wasm flm` (about 15 s warm, up
to 2 min cold); the committed module must match the crate. `yarn test` (461 passing at
step 3), `yarn lint` (18 errors that predate the branch in 8 untouched files, cleared in
step 5; new files must add none).

## Decisions taken during the build (beyond 03)

- Rust checks per crate; the citation module's regenerated binary kept (step 1).
- The FLM module ships as a committed `.wasm` file; two loaders; `import.meta.url` only
  in the neutral loader's `new URL(…)` (step 1).
- Options read from JavaScript refuse unknown keys; `null`/`undefined` keys take defaults.
- Engine: no page `title` option; text snippets one run per fragment; markers carry a
  per-call token; `truncate()` keeps the origin label; `ne()` true for numbers and
  booleans; `rdr()` throws on plain objects (step 2).
- Index: a label entry's href carries `#anchor` only when the anchor is label-derived
  (floats, equation lines, theorems link to the object's page); its display is the
  point's source only when label-derived and standalone, else the object's display;
  the default object display is `name` only when standalone, else the id (step 3).
- Reload releases replaced fragments only after a successful re-processing (step 3).
- The dump is `data.zooflm` (switch `flm_include_zooflm_data`); `engine.load` checks a
  settings hash that includes the core's version (step 3).
- Rulings 2026-10-17: the `zoodb-example` port is made in a clone of
  `git+ssh://github.com/phfaist/zoodb-example.git` under `scratch/zoodb-example/`
  (gitignored here) on a branch `zoodb-flmrs` there, committed there, never pushed; the
  package version becomes `0.3.0`, never 1.0.0 (pre-1.0 API).

## Next

- **Awaiting Philippe's go for step 4** (he asked for a checkpoint after step 3 and then
  for the briefs to be updated only). Step 4 = brief 11: the strict `yaml` loader with
  field positions (`obj._zoodb.flm_field_positions`, dotted field paths), the re-indent
  tool `tools/reindent_yaml.mjs`, the FLM-files loader over the core's `parse_fields`,
  `format_diagnostic`'s `(approx.)`, and the `zoodb-example` port in the clone with the
  example's own site build as the check.
- Step 5 = brief 12 (removal of the old layer and `flm-js-src`, exports and version
  0.3.0, path remapping of the binaries in `tools/build_wasm.mjs`, the old lint errors,
  the `doc/` rewrite, `CLAUDE.md`, `README.md`, the playground sample).
- Step 6 = the EC zoo, outside this repository (no brief yet; write `13-step6-eczoo.md`
  from 01 and the findings): `eczoo_sitegen` and `eczoo_handbook` ports; code reading
  `zoo_flm_processor.scanner.get_encountered(...)` moves to `processor.scan_results`;
  the 127 YAML files re-indented with the tool; the three duplicate labels (`eq:parity`,
  `figure:toric-code-operators`, `eq:gb_gv`); the list option `[{⇒}]` in
  `binary_linear.yml`; `%%` comments; `\includegraphics` inside floats only unless
  `graphics.global`; the handbook over `render_latex` (07 milestone 5); the browser apps
  at level 1 through `engine.load(data.zooflm)`.
- Later for Philippe: U2 in flm-rs when he wants `srcset`; the float-anchor policy option
  (05, not raised); the flm-core finding on a `field` environment without a name (05).
