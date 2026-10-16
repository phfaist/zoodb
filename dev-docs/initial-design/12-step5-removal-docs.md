# 12 — Step 5: removal of the old layer, package, documentation

Build order step 5 of `06-repo-change-map.md` (sections B first row, H, I, J, plus the
items added since: the path remapping of the binaries and the lint errors that predate
the branch). Draft written 2026-10-16 while step 3 was in progress; to be adjusted to
the results of steps 3 and 4 before it is handed to an implementer. Implemented by an
implementer agent and checked by a reviewer agent (Opus); results at the end.

The rules of 08 ("Rules that bind the implementation") apply unchanged. This step
deletes code: every deletion is listed here and nothing else is deleted; anything still
imported by remaining code is a finding to report, not something to patch around.

## A. Removal (Q1, the clean break)

| what | action |
|---|---|
| `flm-js-src/` (104 transpiled files), the symlink `src/zooflm/_flm-js`, `COPY_IN_FLM_JS_SOURCES.txt` if present, the `.gitignore` entries `flm-src` and `COPY_IN_FLM_JS_SOURCES.txt`, the `.eslintrc.json` ignore patterns for them | deleted |
| `src/zooflm/_environment.js`, `_fragmentrenderers.js`, `_renderutils.js`, `scanner.js`, `_resourceinfo.js`, `_flmutils.js` | deleted (replaced by `engine.js`, `compose.js`, `fragment.js`, `diagnostics.js` in step 2 and the processor's scan in step 3) |
| `src/zooflm/index.js` | rewritten: exports the engine modules (everything `engine.js` exports), `citationcompiler.js`, the loaders' two functions and `wasm_url`; nothing of the old API |
| `test/test_zooflm_environment.js`, `test_zooflm_fragmentrenderers.js`, `test_zooflm_scanner.js` | deleted (their subjects are gone; the engine tests of step 2 cover the replacements) |
| `playground/playeczoo.js` and its data files (`bibpreset.yaml`, `eczoo-bib-style.csl`, `locale-en-US.xml`, `overridearxivdois.yaml`, `test.json`) | replaced by `playground/play_example.mjs`: loads the mini zoo of `test/test_data/flm_zoo/` through the standard setup and prints one rendered page and one text snippet; a sample of the API, run with `node playground/play_example.mjs` |
| `package.json` | the `./flm-js/*` and `./zooflm/scanner` exports dropped; `./zooflm`, `./zooflm/engine`, `./zooflm/wasm`, `./zooflm/wasm-node`, `./zooflm/citationcompiler` kept; every dependency checked for a remaining use and dropped when none (`escape-html`, `lodash` modules, `hash.js`, `base32-encode`, `exif-parser`, `sax`, `stream-parser`, `url` are the candidates; `js-yaml` went in step 4); version `1.0.0` (the major version of Q1; Philippe confirms the number) |
| `.github/workflows/node-js-test.yml` | the example-build job stays as it is but is noted as pending the `zoodb-example` port (step 4's files applied there), with a comment |

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

## D. Documentation (`doc/`, `README.md`, `CLAUDE.md`)

The docs build is Sphinx with `sphinx_js` (`doc/conf.py`, `js_source_path = '..'`,
jsdoc config `doc/conf.json`): `js:autoclass` and `js:autofunction` directives pull the
JSDoc of the sources, so every directive must name a module path that exists after A.
Pages, with what each becomes:

| page | change |
|---|---|
| `doc/zoodb.zooflm.rst` (342) | rewritten: the engine (creation, the core's settings as data, the loaders and the wasm module), fragments, the composer protocol and its helpers, snippets, the index per context, citations and graphics tables, diagnostics and the error policy, text and LaTeX output, truncation; the citation compiler section kept and adapted; API through `js:autoclass`/`js:autofunction` on `src/zooflm/engine.js`, `compose.js`, `fragment.js`, `diagnostics.js`, `citationcompiler.js` |
| `doc/zoodb.dbprocessor-flm.rst` (42) | rewritten: the processor (what `process_zoo` does, the options, the dump), the field compiler and the `_flm` schema annotation |
| `doc/website11ty.rst` (174) | the "Writing page templates" and "Rendering full object pages" sections rewritten around `render_document` and the helpers (the `zoodb-example` port of step 4 is the worked example); "Loading the zoo as global data" adapted (`zoo_flm_engine`) |
| `doc/std.rst` (238), `doc/zoodb.std.rst` (64) | the config keys: `use_flm_engine`, `use_flm_processor`, `flm_options.engine`, `load_wasm`, `allow_unresolved_references`, `allow_unresolved_citations`, `continue_with_errors`, `refs`, `citations`, `resources` |
| `doc/zoodb.dbdataloader.rst` (42) | strict YAML and field positions, the re-indent tool, the FLM-files loader needing the engine |
| `doc/zoodb.resourcecollector.rst` (51) | the graphics processor's entry data |
| `doc/zoodb.dbprocessor-searchable.rst` (28) | the assembler over the engine |
| `doc/flm.rst` (228) | the syntax summary against what flm-rs's standard package accepts (R19): comments start with `%%`; list options syntax; `\includegraphics` inside floats unless `graphics.global`; MathJax 4 for the browser; the features of 01 section 2 with the flm-rs names; a pointer to flm-rs's own language reference |
| `doc/overview.rst` (152), `doc/index.rst` | the FLM paragraph: flm-rs compiled to WebAssembly, bundled, no Rust toolchain needed |
| `README.md` | the features list (FLM through flm-rs in WebAssembly; the citation retriever as before) |
| `CLAUDE.md` | the whole file against the repository as it then is: commands, the architecture sections (ZooFLM, DB processors, data loaders, standard setup, Rust workspace, generated modules, tools), the key patterns (the FLM JS sources pattern removed) |
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

(filled in after the implementation and the review)
