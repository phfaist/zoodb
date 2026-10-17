# 12 — Step 5: removal of the old layer, package, documentation

Build order step 5 of `06-repo-change-map.md` (sections B first row, H, I, J, plus the
items added since: the path remapping of the binaries and the lint errors that predate
the branch). Draft written 2026-10-16 while step 3 was in progress; adjusted to the
results of steps 3 and 4 on 2026-10-17 (the list found in step 4 folded into A to D, but
for two items that went to Results, Deferred: the positions in dumps and the `</script`
guard).
Implemented by an implementer agent and checked by a reviewer agent (Opus); results at
the end.

The rules of 08 ("Rules that bind the implementation") apply unchanged. This step
deletes code: every deletion is listed here and nothing else is deleted; anything still
imported by remaining code is a finding to report, not something to patch around.

## A. Removal (Q1, the clean break)

| what | action |
|---|---|
| `flm-js-src/` (104 transpiled files), the symlink `src/zooflm/_flm-js`, `COPY_IN_FLM_JS_SOURCES.txt` if present, the `.gitignore` entries `flm-src` and `COPY_IN_FLM_JS_SOURCES.txt`, the `.eslintrc.json` ignore patterns for them; the `.gitignore` block `# playground test files` (`zoo_dbdata_output*.json`, `_output_resource_graphics_files/`, `out_test.html`, `out_test_2.html`, written only by the deleted `playeczoo.js`; added in the review) | deleted |
| `src/zooflm/_environment.js`, `_fragmentrenderers.js`, `_renderutils.js`, `scanner.js`, `_resourceinfo.js`, `_flmutils.js` | deleted (replaced by `engine.js`, `compose.js`, `fragment.js`, `diagnostics.js` in step 2 and the processor's scan in step 3) |
| `src/zooflm/index.js` | rewritten: exports the engine modules (everything `engine.js` exports), `citationcompiler.js`, the neutral loader's `load_zoodb_flm_wasm` and `wasm_url`, but not the Node loader: it imports `node:fs/promises`, and browser code imports `./zooflm` today, so the Node loader stays at `./zooflm/wasm-node` (decided in the review); nothing of the old API |
| `test/test_zooflm_environment.js`, `test_zooflm_fragmentrenderers.js`, `test_zooflm_scanner.js` | deleted (their subjects are gone; the engine tests of step 2 cover the replacements) |
| `playground/playeczoo.js` and its data files (`bibpreset.yaml`, `eczoo-bib-style.csl`, `locale-en-US.xml`, `overridearxivdois.yaml`, `test.json`) | replaced by `playground/play_example.mjs`: loads the mini zoo of `test/test_data/flm_zoo/` through the standard setup and prints one rendered page and one text snippet; a sample of the API, run with `node playground/play_example.mjs` |
| `package.json` | the `./flm-js/*` and `./zooflm/scanner` exports dropped; `./zooflm`, `./zooflm/engine`, `./zooflm/wasm`, `./zooflm/wasm-node`, `./zooflm/citationcompiler` kept; every dependency checked for a remaining use and dropped when none (`escape-html`, `lodash` modules, `hash.js`, `base32-encode`, `exif-parser`, `sax`, `stream-parser`, `url` are the candidates; `js-yaml` went in step 4); version `0.3.0` (ruling, Philippe 2026-10-17: no 1.0.0, the package stays pre-1.0 since the API is not guaranteed stable; the clean break of Q1 is the next minor, `0.2.1` → `0.3.0`); a `files` list so that the published archive holds what the package needs (`src/`, `tools/`, `README.md`, the licence, the release notes) and not `test/`, `doc/`, `rust/`, `scratch/`, `dev-docs/`, `playground/`, `.claude/`, `example/`, `CLAUDE.md`, `.eslintrc.json`, `.readthedocs.yaml` (the example's build check of step 4 packed 361 files), checked with a pack; `engines` at least `node >=20` (the dependency `glob` 11 declares `20 \|\| >=22`; the example's own README asks for 20.19+ or 22+ because of its build tools); `yarn install` afterwards, so that `yarn.lock` and the Plug'n'Play state follow |
| release notes | the 0.3.0 entry, where the package records release notes (no changelog exists so far: a new `CHANGELOG.md` holding only that entry, listed in `files`): the strict `yaml` package (YAML 1.2 core schema: dates stay strings, `<<` merge keys are not merged; a quoted value continued at the key's column is refused, `zoodb-reindent-yaml` fixes the data once); the clean break of the FLM API; the loaders need the engine for `.flm` files |
| `.github/workflows/node-js-test.yml` | the example-build job clones `zoodb-example`'s default branch, which the port of step 4 reaches only when its `zoodb-flmrs` branch is merged there; until then the job is noted as pending with a comment (the branch name it should use is `zoodb-flmrs`) |

## B. The build machine's paths in the binaries (08, found in step 1)

Both modules embed absolute paths of the build machine in panic location strings (the
FLM module: the flm-rs checkout, the cargo registry, the rustup toolchain). `tools/build_wasm.mjs`
passes `--remap-path-prefix` arguments to rustc through `CARGO_ENCODED_RUSTFLAGS` for
each build, computed at build time and never committed: the workspace root →
`zoodb-rust`, the root of every path dependency (from `cargo metadata`: today flm-core's
checkout) → the dependency's name, `$CARGO_HOME/registry/src/<index>` → `cargo-registry`,
`rustc --print sysroot` → `rust-sysroot`. The tool checks the output: no `/Users/`, `/home/`
or `C:\` string left in either `.wasm` (a byte search), and `BUILD_INFO.json` records
`paths_remapped: true`. Note in `rust/README.md` that changing the flags makes cargo
rebuild from scratch once per machine. (Cargo's own `trim-paths` is unstable; not used.)

## C. The lint errors that predate the branch (08)

Of the 20 errors `yarn lint` reports, 15 are in the five old `src/zooflm/` files deleted
in A. The other five are fixed: `src/dbprocessor/computeddata.js` (six
`no-unexpected-multiline` at property accesses split over lines, and two unused
variables), `src/resourcecollector/processor/_inspectimagefile.js`, `src/std/stdzoodb.js`
and `src/util/getfield.js` (unused catch or callback parameters). `yarn lint` is then
green, and the `test` job of the CI workflow runs it.

One doc line is fixed beside them: in `src/std/stdzoodb.js`, the doc of
`citations.skip_save_cache` says "skip writing"; the option also skips reading the
cache (the citation manager keeps it in memory only).

## D. Documentation (`doc/`, `README.md`, `CLAUDE.md`)

The docs build is Sphinx with `sphinx_js` (`doc/conf.py`, `js_source_path = '..'`,
jsdoc config `doc/conf.json`): `js:autoclass` and `js:autofunction` directives pull the
JSDoc of the sources, so every directive must name a module path that exists after A.
Pages, with what each becomes:

| page | change |
|---|---|
| `doc/zoodb.zooflm.rst` (342) | rewritten: the engine (creation, the core's settings as data, the loaders and the wasm module, `parse_fields` and `html_scripts` of step 4), fragments, the composer protocol and its helpers, snippets, the index per context, citations and graphics tables, diagnostics and the error policy, text and LaTeX output, truncation; the citation compiler section kept and adapted; API through `js:autoclass`/`js:autofunction` on `src/zooflm/engine.js`, `compose.js`, `fragment.js`, `diagnostics.js`, `citationcompiler.js` |
| `doc/zoodb.dbprocessor-flm.rst` (42) | rewritten: the processor (what `process_zoo` does, the options, the dump), the field compiler and the `_flm` schema annotation |
| `doc/website11ty.rst` (174) | the "Writing page templates" and "Rendering full object pages" sections rewritten around `render_document` and the helpers (the `zoodb-example` port of step 4 is the worked example: the layout prints `engine.html_scripts()` in the page's `<head>`, a page template prints the warnings `render_document()` returns); "Loading the zoo as global data" adapted (`zoo_flm_engine`) |
| `doc/std.rst` (238), `doc/zoodb.std.rst` (64) | the config keys: `use_flm_engine`, `use_flm_processor`, `flm_options.engine` (its keys `dollar_math`, `settings`, `off`, `render_value_options`; any other key throws, added in the review), `load_wasm`, `allow_unresolved_references`, `allow_unresolved_citations`, `continue_with_errors`, `refs`, `citations`, `resources` |
| `doc/zoodb.dbdataloader.rst` (42) | strict YAML and field positions, the re-indent tool, the FLM-files loader needing the engine: the loaders' paragraphs were rewritten in step 4 and the tool has its section in `tools/README.md`; what remains is checked against the sources |
| `doc/zoodb.resourcecollector.rst` (51) | the graphics processor's entry data |
| `doc/zoodb.dbprocessor-searchable.rst` (28) | the assembler over the engine |
| `doc/flm.rst` (228) | the syntax summary against what flm-rs's standard package accepts (R19): comments start with `%%`; list options syntax; `\includegraphics` inside floats unless `graphics.global`; MathJax 4 for the browser; the features of 01 section 2 with the flm-rs names; a pointer to flm-rs's own language reference |
| `doc/overview.rst` (152), `doc/index.rst` | the FLM paragraph: flm-rs compiled to WebAssembly, bundled, no Rust toolchain needed |
| `README.md` | the features list (FLM through flm-rs in WebAssembly; the citation retriever as before) |
| `CLAUDE.md` | the whole file against the repository as it then is: commands, the architecture sections (ZooFLM, DB processors, data loaders, standard setup, Rust workspace, generated modules, tools), the key patterns (the FLM JS sources pattern removed); the engine paragraph lists `html_scripts` (step 4) but not `parse_fields`; the Data Loaders and Tools paragraphs are current after step 4 |
| `tools/README.md`, `rust/README.md`, the crate READMEs | the path remapping (B); the build commands |
| `dev-docs/AutocitefetchImplementationPlan.md` | untouched |

If `poetry` and the docs' Python environment are available (`cd doc && poetry run make
html`), the docs are built and the warnings about missing directives resolved;
otherwise the directives are checked by hand against the sources and the build is
reported as not run.

## E. Checks before handing back

`yarn test`, `yarn lint` (green), `yarn build:wasm` (both modules, path check green),
the playground sample, `git status --short`; the module sizes before and after B.

## Results

Implementation of A, B and C, 2026-10-17 (from `7d5f273`; part D follows separately).

**A. Removal.**

- Deleted: `flm-js-src/` (106 tracked files: 103 transpiled `.js`, its `README.md`,
  `package.json`, `import_flm_modules.project`), the symlink `src/zooflm/_flm-js`, the six
  old `src/zooflm/` modules, the three old tests (28 tests), `playground/playeczoo.js` and
  its five data files; the `.gitignore` entry `flm-src` (with its comment) and
  `COPY_IN_FLM_JS_SOURCES.txt` (the file itself was not present); the two `.eslintrc.json`
  ignore patterns. 122 deletions in all, nothing else.
- Before the deletion, nothing that stays imported the deleted modules or `flm-js` (src/,
  test/, tools/, playground/, example/, .github/, doc/conf.*); `stdzoodb.js` and
  `test/test_std.js:308` name `use_flm_environment` only to refuse it.
- `src/zooflm/index.js` re-exports `engine.js` (with fragment, diagnostics and compose
  helpers), `citationcompiler.js`, `load_zoodb_flm_wasm`, `wasm_url` and
  `load_zoodb_flm_wasm_node`. Through the Node loader it imports `node:fs/promises`, so
  `./zooflm` is for Node; its header says that browser code imports `./zooflm/engine` and
  `./zooflm/wasm`. (The review fixes drop the Node loader from the index; see below.)
- `playground/play_example.mjs` loads `test/test_data/flm_zoo/` through the standard setup
  and prints Bob's page (cross-object links, a footnote, the figure, a citation) and the text
  snippet of Alice's name; run with `yarn node playground/play_example.mjs` (Plug'n'Play;
  `node …` where the dependencies are in `node_modules/`). It imports the package by name
  (self-reference), writes and fetches nothing, and defines a small JavaScript citation
  source for `custom:` with the test data's CSL style (both needed, see Findings).
- `package.json`: version `0.3.0`; exports `./zooflm/scanner` and `./flm-js/*` dropped;
  dependencies `escape-html` (used only by `_renderutils.js`), `url` (no import; the tests'
  `from 'url'` resolve to Node's builtin) and `glob` (no import; the last, commented out,
  went in `4384913`, 2023) dropped;
  `engines` `node >=20`; `files`: `src/`, `tools/`, `/README.md`, `/CHANGELOG.md`.
  `yarn install` removed 26 entries from `yarn.lock`.
- Kept, each still imported: `@apidevtools/json-schema-ref-parser`, `citeproc`, `debug`,
  `jsonschema`, `yaml`, `lodash` (`cloneDeep`, `cloneDeepWith`, `assignWith`, `merge`),
  `hash.js` (YAML loader, file retriever, citation manager), `base32-encode` (file
  retriever), `exif-parser`, `sax`, `stream-parser` (`_inspectimagefile.js`).
- `CHANGELOG.md` is new (there was no changelog) and holds only the 0.3.0 entry: the FLM
  layer over flm-rs, the strict YAML, the loaders needing the engine for `.flm` files,
  Node 20 and the dropped dependencies.
- The pack (`yarn pack --dry-run`, and `npm pack --dry-run` agrees) holds 75 files (step 4:
  361): `src/` (with `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm`), `tools/`, `README.md`,
  `CHANGELOG.md`, `package.json`.
- CI: the test job runs `yarn lint` before `yarn test`; a comment marks the example-build
  steps as pending until `zoodb-example`'s branch `zoodb-flmrs` is merged (or pushed, then
  cloned with `--branch zoodb-flmrs`); Node 18 left the matrix.

**B. Path remapping.** `tools/build_wasm.mjs` computes the `--remap-path-prefix` flags at
each build (workspace root → `zoodb-rust`; each non-member path package's root from `cargo
metadata` → its name, today flm-core; each registry index directory under
`$CARGO_HOME/registry/src/` → `cargo-registry`; `$CARGO_HOME/git/checkouts` →
`cargo-git`; `rustc --print sysroot` → `rust-sysroot`), sorted so that longer prefixes
come last, and passes them in `CARGO_ENCODED_RUSTFLAGS` after the flags already given in
`CARGO_ENCODED_RUSTFLAGS`, `RUSTFLAGS`, `CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_RUSTFLAGS` or
`CARGO_BUILD_RUSTFLAGS` (cargo's precedence). Rustflags in a cargo configuration file
(none exist: no `rust/.cargo/`, none in `~/.cargo`) make the tool fail with a message, since
the encoded flags would replace them. After each build and before anything is written to
`src/`, the binary (the citation module's before base64) is byte-searched for `/Users/`,
`/home/` and `C:\`; `BUILD_INFO.json` records `"paths_remapped": true`. Both failure paths
were exercised: the check on the old FLM binary lists its 188 paths; a temporary
`rust/.cargo/config.toml` with rustflags is refused before any build (removed again). The
rebuild note is in `rust/README.md` and `tools/README.md`; `rust/zoodb-flm-wasm/README.md`
lists `paths_remapped` among the `BUILD_INFO.json` fields.

| module | before | after | build machine paths before → after |
|---|---|---|---|
| FLM `zoodb_flm_wasm_bg.wasm` | 5,143,637 B | 5,139,198 B | 188 (flm-core 106, registry 55, toolchain 27) → 0 |
| citations `.wasm` | 631,462 B | 628,369 B | 58 (registry 44, toolchain 14) → 0 |
| citations base64 module | 842,026 B | 837,902 B | |

The glue and `.d.ts` files of both modules came out unchanged. The first build with the
flags recompiled everything (citations 15 s, FLM 84 s).

The FLM module was built from flm-rs commit `2c219ec3` (as `BUILD_INFO.json` now records
it, `flm_core_git`, since the review fixes). The step-3 build was from `023ca41a`, and
flm-core changed in between (5 files, +208/−7: `artifact.rs`, the registry's
`builder.rs`, `entities.rs` and `validate.rs`, and a test), so the FLM size change includes
those changes besides the remapping; the 459 tests pass on this build.

**C. Lint.** The 13 errors of the four files are fixed and `yarn lint` is green (18
errors before, 5 of them in deleted files). The three `no-unexpected-multiline` sites of
`computeddata.js` were each one member-access chain split over lines (no automatic
semicolon before `[`), now written on fewer lines with the same evaluation order:

- the accessor `create_zoo_methods` installs (non-lazy) returns
  `this.zoodb.scratch[computed_data_fieldset_name][object_type][obj._zoodb.id][computed_property_name]`
  at each call; now a block body that reads the type's values, then returns
  `[obj._zoodb.id][computed_property_name]` of them;
- the data dump reads `this.zoodb.scratch[computed_data_fieldset_name][object_type][obj_id]`
  into `computed_data_values`; now one line;
- `_access_lazy_property()` reads
  `this.zoodb.scratch[this.config.computed_data_fieldset_name][object_type][obj._zoodb.id]`
  into `obj_computed_data`; now the type's values first, then the object's.

The two unused loop variables became `for (const obj_id of Object.keys(obj_db))` (the same
keys in the same order as `Object.entries`); the unused catch parameters
(`_inspectimagefile.js`, `getfield.js`) became `catch {`; the unused destructured keys in
`stdzoodb.js` became holes (`[, v]`, `[, av], [, bv]`). The doc of
`citations.skip_save_cache` in `stdzoodb.js` now says that `citations.jsonl` is neither
read nor written (the citation manager keeps it in memory) and that the compiled citations'
cache is still read when present, never written (`CitationCompiler.load_cache()` runs
regardless).

**Deviations from the brief.**

- `glob` dropped although not among the candidates: the brief checks every dependency, and
  it has no import.
- `files` names `/README.md` and `/CHANGELOG.md` with a leading slash: yarn matches an entry
  without a slash at any depth, and `README.md` packed eleven nested READMEs (`scratch/`,
  `rust/target/pkg/`, `doc/`, …).
- Node 18 removed from the CI matrix, following `engines`.
- The remapping adds `cargo-git` for git checkouts (none today), so that a git dependency on
  flm-rs would not trip the check.
- Rustflags in cargo configuration files are refused rather than merged: there is no TOML
  parser in the tool and stable cargo cannot print the resolved configuration; flags from
  the environment are merged.
- The playground sample defines a citation source and reads a CSL style (see Findings).
- `rust/zoodb-flm-wasm/README.md` (a crate README, listed under D) got the one field that
  the tool's output gained.

**Findings.**

- Under `use_flm_processor.js`, the standard setup always creates a citation manager, so a
  `\cite` with a prefix without a source throws (`No source registered for cite prefix`),
  `allow_unresolved_citations` notwithstanding; and `CitationCompiler` always builds a CSL
  engine, so `citations.csl_style` is required even when every citation comes
  ready-formatted (citeproc throws on a missing style). Both predate this step.
- The doc of `skip_save_cache` in `src/std/use_flm_processor.js` (line 233) still says
  "skip writing" (not assigned here).
- The `.gitignore` entries of the old playground's outputs (`zoo_dbdata_output*.json`,
  `_output_resource_graphics_files/`, `out_test*.html`) remain: not on the list.
- There is no licence file in the repository (`package.json` says MIT), so `files` lists
  none; yarn and npm would pack a root `LICENSE` without listing it.
- The CI example-build steps fail against 0.3.0 until the example's port is merged; the
  brief asks only for the comment.
- For part D: `doc/zoodb.zooflm.rst` has `js:auto*` directives on four deleted modules
  (`_resourceinfo`, `_environment`, `_fragmentrenderers`, `_renderutils`; 24 mentions of
  the old layer); `doc/std.rst` (3), `doc/zoodb.std.rst` (4), `doc/website11ty.rst` (1) and
  `doc/zoodb.dbprocessor-flm.rst` (1) mention it; the `excludePattern` entry `./flm-src/.*`
  of `doc/conf.json` is obsolete.
- For part D, `CLAUDE.md`: the ZooFLM section ("two layers side by side", the old files),
  the "FLM JS sources" key pattern, `./zooflm` (now the new API, Node-only through the Node
  loader), the remapping in `yarn build:wasm`, `CHANGELOG.md`, the playground sample,
  Node 20. `README.md`: its FLM link points to the Python FLM.

**Deferred to Philippe.**

- Dumps keep `_zoodb.flm_field_positions` until he rules (11, Deferred (b)).
- A guard for `</script` in the inline texts of `html_scripts()`: not done (the texts are
  the registry's own today).

**Checks.** `yarn test`: 459 passing, 0 failing (487 before, minus the 28 tests of the
three deleted files). `yarn lint`: 0 errors (18 before). `yarn build:wasm`: both modules,
path check green. Rust, per crate: `zoodb-flm-wasm` clippy clean, 15 tests pass;
`zoodb-autocitefetch-wasm` clippy clean, 40 tests pass. The playground sample exits 0 (30
lines). Pack: 75 files. `git status --short`: 122 deleted, 19 modified, 2 new
(`CHANGELOG.md`, `playground/play_example.mjs`). The docs build was not run (part D).

**Part D. Documentation** (2026-10-17, two implementers: the FLM and engine pages; the
processor, standard setup, loader and resource pages and `CLAUDE.md`).

- `doc/zoodb.zooflm.rst` (342 → about 700 lines), rewritten around the engine: the
  modules and package exports, creating an engine, the core's settings as data (the
  feature names of `ZooFlmEngine.features()`, `settings_hash`), the wasm module and its two
  loaders, fragments and `parse_fields`, the composer protocol (the example's person page)
  and its helpers, `render_fragment`, snippets, the index per context, the citations and
  graphics tables, `dump`/`load`, `html_stylesheet`/`html_scripts`/`html_definitions`, text
  and LaTeX output, `scan`, `truncate`, diagnostics and the error policy, the citation
  compiler (adapted); the API through `js:autoclass`/`js:autofunction` on the five modules
  and the two loaders.
- `doc/flm.rst`, rewritten against flm-rs's standard package, every sample rendered
  through the engine (`%%` comments, math and line fields, lists, citations, references,
  footnotes, floats, `\includegraphics` in floats unless `graphics.global`, cells,
  verbatim, theorems, annotations), each section naming its flm-rs features; it names
  flm-rs's `docs/language-syntax.md` and `docs/python-flm-migration.md`.
- `doc/overview.rst`, `doc/index.rst`, `README.md`: the FLM paragraph (flm-rs in
  WebAssembly, bundled, no Rust toolchain); `README.md` links the docs' FLM page and
  `CHANGELOG.md`.
- `doc/zoodb.dbprocessor-flm.rst`, rewritten: the six steps of `process_zoo()`, the
  options, errors and warnings (the eight `zoodb.*` identifiers), reloads, ad hoc
  fragments, the data dump and a browser app over it; the field compiler and `_flm`.
- `doc/website11ty.rst`: the global data (`zoo_flm_engine`, the Node loader), the
  stylesheet and scripts, list pages through snippets, object pages through
  `render_document()` (the example's `person.11ty.js`), a new section "Images and data
  files".
- `doc/std.rst`, `doc/zoodb.std.rst`: the boilerplate, "What the standard zoo holds", "The
  FLM options" (the keys of D's row), the directives on the existing modules.
- `doc/zoodb.dbdataloader.rst`, `doc/zoodb.resourcecollector.rst`,
  `doc/zoodb.dbprocessor-searchable.rst`: the step-4 paragraphs completed (merge keys, the
  re-indent tool, field positions, the FLM-files loader), the graphics processor's entry
  data, the assembler over the engine.
- `CLAUDE.md`, checked against the tree (every path it names exists): a CI paragraph, an
  "Other folders" paragraph and the key pattern "Diagnostics and the error policy" added,
  "FLM JS sources" removed. `doc/conf.json`: `./flm-src/.*` removed, `/src/zooflm/_wasm/.*`
  excluded, `source.exclude` lists `../scratch`, `../.yarn` and `_build`.

Deviations: root folders excluded through `source.exclude` (a prefix match) rather than
`excludePattern` (a regex such as `/scratch/` matches the absolute path), and excluding
`scratch/` is needed for correctness (the example clone's `node_modules/` holds a copy of
`src/`, which would make every `js:auto*` path ambiguous); `:exclude-members:` on the
`js:autoclass` directives (sphinx_js lists the constructor as an empty member, and jsdoc
does not mark documented underscore helpers private); `js:autofunction` for the two
loaders and the exported helpers with JSDoc; no URL for flm-rs's reference (flm-rs is not
public), the README's FLM link going to the docs' FLM page; two broken literals of the old
`flm.rst` rewritten.

Docs build: the worktree's poetry environment has no Sphinx, so the build runs read-only
with Sphinx 8.1.3 of the main checkout's environment (`zoodb-doc-oZT3q19H-py3.13`, its
`bin/sphinx-build` run in the worktree's `doc/`, `PYTHONDONTWRITEBYTECODE=1`, `TMPDIR` and
the output in the session's scratchpad; `poetry -C <main checkout>/doc run` would build the
main checkout's pages). The first implementer checked the directives against jsdoc's
output instead; the second built with extra jsdoc excludes, the docs reviewer on the real
`doc/conf.json`: exit 0, every directive resolved; left were the two docutils messages from
the JSDoc of `stdzoodb.js` and unresolved references on four pages (fixed below).

**Review fixes** (2026-10-17; code review "ready": no must-fix, three should-fix; docs
review "fix first": two must-fix, nine should-fix).

- Must-fix (docs): the Transcrypt note of `doc/api.rst` deleted; `doc/flm.rst` says that
  `\verbcode` and `\verba` take an optional `[lang]` first, so only `\verbtext` can be
  delimited by brackets.
- Should-fix (code): Results B records the flm-rs commit and the flm-core changes (above);
  `./zooflm` no longer re-exports the Node loader (its header, A's row, `CHANGELOG.md`,
  `doc/zoodb.zooflm.rst`, `CLAUDE.md`; the index imports no `node:` module, though the
  citation compiler still imports the builtin `path` through `src/util/atomicfilewrite.js`,
  as the old `./zooflm` did); the `skip_save_cache` doc of `use_flm_processor.js` takes the
  wording of `stdzoodb.js`.
- Should-fix (docs): `set_index` in `doc/zoodb.zooflm.rst` (under `'continue'` an entry
  with a display that is not standalone is dropped and the rest installed; only a thrown
  `Error`, or a `ZooFlmError` under `'abort'`, leaves the engine as it was); floats and
  `\nonumber` in `doc/flm.rst`; the JSDoc of `compile_citations` (the scan's cited keys);
  the blank line before the `zoo_permalinks` list in `stdzoodb.js`; `ZooFlmProcessor` in
  `doc/schemas.rst`; `continue_with_errors: true` in `doc/zoodb.citationmanager.rst`; the
  unresolved references (`~YamlDbDataLoader.parse_file_data_with_positions` in `yamldb.js`,
  and in `flmfilesdb.js`, found in the rebuild; `parse_file_into_objects()` and
  `SRCSET_U2_WARNING` as literals); `use_flm_engine()` refuses keys of `flm_options.engine`
  other than the four it reads (an `Error` naming the key and the accepted ones; `null` or
  `undefined` for the object or a key still take the defaults), with a test in
  `test/test_std.js` and a word in `doc/std.rst`.
- Notes acted on: `tools/build_wasm.mjs` records `<name>_git: { commit, dirty }` for each
  path dependency in a git checkout (read with `git --no-optional-locks`, so the checkout
  is not written), listed in `tools/README.md` and the crate README; `yarn build:wasm flm`
  rebuilt: binary, glue and `.d.ts` byte-identical (cargo had nothing to recompile),
  `BUILD_INFO.json` gains `flm_core_git` (`2c219ec3`, `dirty: true`: the flm-rs checkout has
  uncommitted changes, none under `flm-core/` nor in a manifest), the path check green.
  Then `dirty` was narrowed to the dependency's own directory, the one of its `Cargo.toml`
  (`git status --porcelain -- <dir>`; the commit stays the checkout's `HEAD`), so it says
  whether that crate's files differ from the commit: rebuilt, `flm_core_git.dirty` is
  `false` and only `BUILD_INFO.json` changed.
  The header of this brief (two items to Deferred); the old playground's `.gitignore` block
  removed (added to A's first row); the sample's topics line printed only for a person with
  topics (`ne()`; Bob has none); the always-true Node condition of the CI example build
  removed; `CHANGELOG.md` names the five exports and says that YAML-loaded objects and
  dumps carry `_zoodb.flm_field_positions`; the text-output finding (`A %% c\nB`) in 05,
  checked through the engine; HANDOVER's index decision corrected (equation lines keep
  `#eq-…`: `engine.scan()` gives `eq-x` for lines of `align` and `equation`), with a dated
  correction in 10's Results; HANDOVER's "Later for Philippe" extended (the findings that
  predate this step, the image inspector's extensions, the `path` builtin, the order in
  which the example's branch and `doc/website11ty.rst` go live).
- Checks after the fixes: `yarn test` 460 passing (one new test), `yarn lint` green, the
  playground sample exits 0 (30 lines), the docs build exits 0 with no ERROR or WARNING and
  no unresolved reference in the HTML; under `rust/` only the FLM crate's README changed
  (its clippy clean, 15 tests pass).
- Open questions left (in HANDOVER, "Later for Philippe"): a `LICENSE` file (MIT; the
  copyright line is Philippe's), and the URL of flm-rs's language reference once flm-rs is
  public.
