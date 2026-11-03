# 15 — The WebAssembly modules become internal (2026-11-03)

Philippe's ruling of 2026-11-03, after the main session explained why the package exported
`./citationmanager/wasm`, `./zooflm/wasm` and `./zooflm/wasm-node`:

> Implement the conditional default loader. Unless you find a strong reason I'm missing, I
> would completely hide the wasm exposure outside of zoodb (no wasm loader exports, no
> load_wasm: option); wasm remains completely internal to zoodb and the outside world
> cannot notice it from its public api.

And, while the brief was being written:

> Careful with '#...' imports: I'd like this package to still work if the user specifies
> custom parcel resolvers in their ".parcelrc" (you'll see this with the ec zoo)

The main session looked for a strong reason against the ruling and found none. The one
thing given up is that a caller can no longer hand the engine its own module bytes or URL,
for example for a bundler that does not copy `new URL(…, import.meta.url)` assets, or a
module served from another origin. No consumer does this. The EC zoo's headless exporter
serves its bundle over HTTP through `sirv`, so the browser path covers it.

## Why the choice is needed, and the mechanism

The citation module is inlined as base64 and loads the same way everywhere. Nothing
changes there except that its loader export goes. The FLM module is a 5.3 MB `.wasm` file
next to its glue code (D2 of 08). A browser fetches it from
`new URL('./_wasm/zoodb_flm_wasm_bg.wasm', import.meta.url)`, which bundlers turn into an
asset. Node cannot `fetch` a `file:` URL, so it has to read the file with
`node:fs/promises`. Browser code imports the engine, `./zooflm` and the standard setup, so
none of these may import a `node:` module in a browser bundle. Until now the caller made
the choice (`load_wasm`). From now on the package's `package.json` makes it.

**The mechanism is the `browser` field of `package.json`**, mapping a relative module to
its browser variant. Node ignores the field and loads the file itself. A bundler building
for a browser target, a web worker included, substitutes the variant. The EC zoo already
uses this pattern (`eczoodb/package.json`: `"./dirs_defaults.js": "./dirs_defaults.browser.js"`).
Its other entry there, `"alias"`, is a Parcel-only field that swaps a JS wrapper for the
JSON file it wraps. That is not an environment switch, and other bundlers ignore it.

**Not `#…` subpath imports** (the `imports` field with `node`/`default` conditions), even
though Node, Yarn PnP and Parcel's default resolver all handle them. In Parcel, a `#…`
specifier resolves only when the active resolver has package exports switched on. The EC
zoo's `site/.parcelrc` and `previewtool/.parcelrc` replace Parcel's resolvers with
`@phfaist/parcel-resolver-root` alone, and that plugin builds its own `NodeResolver` with
`packageExports` read from its own configuration key. The main session's probe ran Parcel
2.13.3 from the sitegen clone. It used a package with `exports` and an internal module
that has a Node variant (importing `node:fs/promises`) and a browser variant (with a
`new URL(…, import.meta.url)` asset). The probe is in
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/0199dcd1-6521-433d-af9e-24331cf513b1/scratchpad/parcel-cond-probe/`,
while that folder lasts.

| Parcel resolver configuration | `browser` field | `#…` import |
|---|---|---|
| default resolver, `packageExports: true` | browser variant, asset emitted | browser variant, asset emitted |
| default resolver, no `packageExports` | browser variant, asset emitted | **fails**: `Failed to resolve '#loader'` |
| `@phfaist/parcel-resolver-root` alone (as `site/`) | browser variant, asset emitted | browser variant, asset emitted |
| the same with its `packageExports: false` | browser variant, asset emitted | **fails** |
| the root resolver, then `"..."` (as `jscomponents/`) | browser variant, asset emitted | browser variant, asset emitted |

In every case Node loaded the Node variant.

## Part P — the package (the worktree)

### Loader files (`src/zooflm/`)

- **`_load_wasm.js`** stays environment-neutral and internal. It keeps `wasm_url` (still
  the one `new URL('./_wasm/zoodb_flm_wasm_bg.wasm', import.meta.url)` of the package) and
  the memoized instantiation, renamed `instantiate_zoodb_flm_wasm(source)`. `source` is
  required and is anything wasm-bindgen's `init` accepts as `module_or_path`. A failed
  instantiation is still forgotten so that a later call can try again; keep the comment on
  why that retry is sound. The branch for a missing source goes.
- **`_load_wasm_default.js`** is today's `_load_wasm_node.js`, moved with `git mv`. It is
  what Node, and any resolution that ignores the `browser` field, loads. It exports
  `load_zoodb_flm_wasm()` (no argument), which reads `wasm_url` with `node:fs/promises` and
  instantiates from the bytes. It stays memoized, with a failure forgotten.
- **`_load_wasm_default.browser.js`** is new. It exports `load_zoodb_flm_wasm()` (no
  argument), which instantiates from `wasm_url` (the glue fetches it). When `wasm_url` is a
  `file:` URL it rejects with a plain `Error` stating the fact: this browser variant cannot
  fetch a local file, a bundler selects it through the package's `browser` field, and Node
  loads `_load_wasm_default.js`. It is environment-neutral, with no `import.meta` at all.
  The two `_default` files export exactly the same names.
- **`package.json`**:
  - add `"browser": { "./src/zooflm/_load_wasm_default.js": "./src/zooflm/_load_wasm_default.browser.js" }`;
  - remove the exports `./citationmanager/wasm`, `./zooflm/wasm` and `./zooflm/wasm-node`;
  - change nothing else.

### Public API (`src/`)

- **`src/zooflm/engine.js`**:
  - import `load_zoodb_flm_wasm` from `./_load_wasm_default.js`;
  - `ZooFlmEngine.create()` loses `load_wasm`, and `ZooFlmEngine.features()` takes no
    options;
  - the internal `_load()` and its namespace check go if nothing needs them;
  - the public `core` getter goes. It hands out the raw wasm object, which contradicts the
    ruling. The engine keeps its internal accessor, and the tests that count fragments
    (`test_dbprocessor_flmprocessor_backrefs.js`) use that internal accessor, with a
    comment saying it is internal;
  - update the header comment's neutrality paragraph: the engine's only
    environment-specific import is the default loader, whose browser variant the `browser`
    field selects;
  - the JSDoc that reaches the API reference names no loader and no module object.
    `settings_hash` says "the version of the engine's core", not `ZooFlmCore.version()`;
    `free()` frees "the engine's core". Saying in prose that the core is flm-rs compiled
    to WebAssembly is fine where it helps.
- **`src/zooflm/index.js`**: stop re-exporting `load_zoodb_flm_wasm` and `wasm_url`, and
  update its header comment.
- **`src/std/use_flm_engine.js`** and **`src/std/stdzoodb.js`**: `flm_options.load_wasm`
  goes from the code, the defaults (`load_wasm: null`) and the JSDoc. There is no refusal
  message: 0.3.0 was never released with that option.
- **`src/citationmanager/`**: no code change. Check that no public documentation points to
  the removed export.

### Tests

- Drop every `load_wasm: load_zoodb_flm_wasm_node` and its import. Under mocha (Node) the
  default now resolves to the Node variant by itself.
- **`test/test_zooflm_wasm_module.js`**, adapted:
  - the generated JS, `_load_wasm.js` and `_load_wasm_default.browser.js` pass the
    forbidden-token check, with the one `new URL(…, import.meta.url)` allowed in
    `_load_wasm.js` only;
  - 64 MiB of linear memory;
  - in a fresh process: the browser variant rejects a `file:` URL with its message;
    `instantiate_zoodb_flm_wasm` rejects bad bytes with a `CompileError` and then resolves
    from the right bytes (the failure is forgotten);
  - `instantiate_zoodb_flm_wasm(bytes)` resolves to the same namespace as the default
    loader.
- **`test/test_zooflm_engine.js`**: the list of what `engine.js` may import gets
  `./_load_wasm_default.js` in place of `./_load_wasm.js`.
- **New: the package surface.**
  - `package.json`'s `browser` field maps exactly the one file to the other, both exist,
    and both export the same names. Importing the browser variant under Node runs nothing.
  - No `exports` key or target names a loader (`wasm` in the key, `_load_wasm` in the
    target).
  - The namespaces of `./zooflm`, `./zooflm/engine` and `./std` export no name containing
    `wasm`, ignoring case.
  - `ZooFlmEngine.prototype` has no `core` property.

### Documentation

- **`doc/`**: the loader sections and `load_wasm` mentions of `zoodb.zooflm.rst`,
  `std.rst`, `zoodb.dbprocessor-flm.rst` and `website11ty.rst` go. Remove the two
  `js:autofunction` directives for the loaders (`zoodb.zooflm.rst`, near line 722), since
  `sphinx_js` fails on a missing symbol.
  - Where the old loader text stood in `zoodb.zooflm.rst`, add a short paragraph on
    bundling. The engine's core is a WebAssembly file shipped with the package. Node reads
    it from disk. A browser bundle needs a bundler that honors the `browser` field of
    `package.json` and copies the file named by `new URL('…', import.meta.url)`. Parcel 2
    does both, verified with the EC zoo and the example; Parcel also needs
    `packageExports: true` for the package's subpath exports, as before.
  - Claim nothing about other bundlers that this step does not verify.
- **`README.md`, `CHANGELOG.md`, `rust/README.md`, `rust/zoodb-flm-wasm/README.md`**
  (lines 171–177) **and the worktree's `CLAUDE.md`**:
  - mention a loader or `load_wasm` only as internal, if at all;
  - in `CLAUDE.md`, the ZooFLM paragraph, the standard setup's `flm_options.load_wasm`
    and the "Generated wasm modules" paragraph describe the new arrangement: the three
    loader files, the `browser` field, no package export of either module;
  - the 0.3.0 notes in `CHANGELOG.md` say that the FLM module loads itself in Node and in
    browser bundles, and list the removal of `./citationmanager/wasm`, which 0.2.x
    exported, among the breaking changes;
  - grep `CHANGELOG.md` and `README.md` for `loader` and `wasm` as well.
- **Leave unchanged**: the historical briefs and notes, `dev-docs/` 07–14,
  `AutocitefetchImplementationPlan.md` and `AutocitefetchImplementationReport.md`, and
  `scratch/proto/`. The main session updates `HANDOVER.md` and the `README.md` log.

## Part C — the consumers (the two clones; after P)

**The `zoodb-example` clone** (`scratch/zoodb-example`, branch `zoodb-flmrs` at `cc1ac16`):

1. In `peopledbjs/myzoodb.js`, drop the Node loader's import, its comment and
   `load_wasm`. Grep the clone (outside `node_modules`, `_site` and caches) for any other
   mention, READMEs included.
2. Before building, copy the current `website/_site/` aside as the "before". It was built
   on 2026-11-03 at `cc1ac16` on the same module.
3. Run the build check of 11, Results, Part C: pack the worktree, point the example at
   the tarball, install, build. Clear the clone's root `.parcel-cache` and
   `website/.parcel-cache` first. Restore `website/package.json` and `yarn.lock` after.
4. `diff -r` before and after. The pages should be equal, and only the JS bundles that
   hold the engine should differ (the loader's code). Explain any other difference.
5. Commit the source change in the clone, with the trailers below.

**The sitegen clone** (`scratch/eczoo/eczoo_sitegen`, branch `zoodb-flmrs` at `92b8d4b`):

1. Edit three files:
   - `eczoodb/fullopts.js` and `eczoohelpers/eczcollectbib/generatebibtex.js`: drop the
     import and `load_wasm`;
   - `jscomponents/codegraph/setup_eczoodb.js`: `load_eczoodb_from_data` loses its
     `load_wasm` parameter and its doc comment (both callers pass none).
2. Grep the clone's sources and `docs/` for any other mention.
3. Install the new tarball the HANDOVER way ("The install form").
   - The root `package.json`/`yarn.lock` overlay and the modified
     `_zoodb_citations_cache/*` files are uncommitted. Leave them as you find them.
   - Never commit them: commit your own files by path.
   - Check that `node_modules/@phfaist/zoodb/src` equals the worktree's `src/`
     (`diff -rq`).
4. Run whatever tests the clone's packages have and that passed before. Say which.
5. Rebuild the headless exporter's bundle (`jscomponents`, `yarn build`, after removing
   the root `.parcel-cache`). Commit it with the source changes.
6. Run the production build. Before it, copy the current `site/_site/` aside as the
   "before" (production build of 2026-11-03 14:14 at `92b8d4b`; check this against the
   README log and say whether it holds).
   - Run `cd site && yarn build` with
     `ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL`, as in 14's S2 and the
     2026-11-03 build. It takes about 6.5 minutes, so log to the scratchpad.
   - It must exit 0 with no FLM diagnostic.
   - Compare after and before. The pages should be equal but for hashed asset names, and
     the code graph SVGs byte-identical.
   - In the bundles that hold the engine, find the browser variant's code, and no
     `readFile` or `node:fs`. The `.wasm` asset must be emitted.
   - This build is the check of Philippe's concern: `site/.parcelrc` uses
     `@phfaist/parcel-resolver-root` alone, and `jscomponents/.parcelrc` uses it before
     `"..."`.
7. Do a browser check. Serve the built site on 127.0.0.1 with the clone's `sirv`. Open
   one page whose app creates the FLM engine (the code graph page; `setup.js` calls
   `load_eczoodb_from_data`) in the clone's Puppeteer 24.4 with `headless: 'shell'`.
   Abort every request that is not to 127.0.0.1, except MathJax if the page needs it.
   - The page renders with no console error.
   - The `.wasm` is fetched with status 200.
8. The handbook clone has no mention of the loaders (main session's grep). It is not
   rebuilt; say so in the Results.

## Rules (both parts)

- **Where to edit.** Edit only:
  - the worktree `/Users/philippe/Research/projects/zoodb/zoodb/.worktrees/zoodb-flmrs`
    (branch `zoodb-flmrs`, at `4884459`, clean);
  - the files named above in the two clones;
  - the session's scratchpad
    `/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/0199dcd1-6521-433d-af9e-24331cf513b1/scratchpad/15/`,
    which holds every log, probe and "before" copy.
- **Read-only paths, never edited**: `/Users/philippe/projects/flm-rs/` (never read its
  `playground/`); `/Users/philippe/Research/projects/zoodb/zoodb-example/`; the EC zoo
  originals under `/Users/philippe/Research/projects/2021-qec-zoo/` (never list that
  folder itself); `/Users/philippe/Research/util/flm`; `/Users/philippe/Research/util/pylatexenc`.
- **No unrelated folders.** Never read, list, search or copy anything outside the
  worktree, the scratchpad and the read-only paths. No `mdfind`, no `find` over the home
  directory, no other processes' logs.
  - Downloads are fine: a missing tool or library is downloaded (npm into the scratchpad)
    or asked for, never searched for on the disk.
  - Exceptions: Yarn installs use `YARN_GLOBAL_FOLDER=<scratchpad>/15/yarn-global`, and
    the sphinx environment below is read-only.
- **Git.**
  - Never `git stash`. Use absolute paths; the shell's working directory is not reliable
    between commands.
  - Do not commit in the worktree; the main session commits.
  - Commit in the two clones, only your own files, with the trailers
    `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` and
    `Claude-Session: https://claude.ai/code/session_01Pmi6FWXSVT7xfZkQVn6tMh`.
- **Out of scope.**
  - No Rust change and no module rebuild (`yarn build:wasm`); the committed modules stay
    as they are.
  - No refactoring beyond this brief.
  - Anything you find that is out of scope goes under "Found, not done" in the Results.

## Checks

In the worktree:
- `yarn lint`: zero errors.
- `yarn test`: the count before and after. There were 497 before this step.
- `yarn node playground/play_example.mjs`, with `load_wasm` gone from it.
- The documentation build: the main checkout's
  `/Users/philippe/Library/Caches/pypoetry/virtualenvs/zoodb-doc-oZT3q19H-py3.13/bin/sphinx-build`,
  run read-only from the worktree's `doc/` with the output in the scratchpad. No warning.
- `yarn pack --out scratch/zoodb-flmrs.tgz`: give the packed file count (74 before, plus
  the one new loader file).
- A grep showing that, outside `dev-docs/` 07–14 and `scratch/proto/`, nothing in the
  worktree mentions:
  - `load_wasm`;
  - `load_zoodb_flm_wasm_node`;
  - `zooflm/wasm`;
  - `citationmanager/wasm`;
  - `_load_wasm_node`.

In the clones: the build checks of Part C.

## Results

Implementation, 2026-11-03 (node 23.7, yarn 4.6.0 in the worktree and the example, 3.3.0
in the sitegen clone). Nothing is committed in the worktree; the rename is staged by
`git mv`. Every log, probe and "before" copy is in the scratchpad folder
`/private/tmp/claude-501/-Users-philippe-Research-projects-zoodb-zoodb/0199dcd1-6521-433d-af9e-24331cf513b1/scratchpad/15/`
(below `15/`): `logs/` (the worktree's checks), `before-src/` and `before-doc/`,
`pack-before/` (the previous tarball, of `4884459`), `example/`, `sitegen/` (logs,
`asfound/`, `overlay/`, `prod_build.sh`, `compare_sites.py`, `browser_check.mjs`,
`browser/`, `site-before/`, `site-after/`, `exporter-dist-before/`), `nonet.sb`,
`yarn-global/`.

### Part P — the package

**Loader files.**

- `src/zooflm/_load_wasm.js`: internal and environment-neutral; `wasm_url` (the one
  `new URL('./_wasm/zoodb_flm_wasm_bg.wasm', import.meta.url)`) and
  `instantiate_zoodb_flm_wasm(source)`, `source` required (whatever `init` takes as
  `module_or_path`), memoized, a failure forgotten, with the comment on why the retry is
  sound kept. The branch for a missing source is gone (no check is left either: an absent
  source fails in the glue and is forgotten like any failure).
- `src/zooflm/_load_wasm_default.js`: `git mv` of `_load_wasm_node.js`;
  `load_zoodb_flm_wasm()` reads `wasm_url` with `node:fs/promises` and instantiates from
  the bytes; memoized, a failure forgotten.
- `src/zooflm/_load_wasm_default.browser.js` (new): `load_zoodb_flm_wasm()` instantiates
  from `wasm_url`; for a `file:` URL it rejects with a plain `Error`: `@phfaist/zoodb: the
  browser variant of the FLM module loader (src/zooflm/_load_wasm_default.browser.js)
  cannot fetch the local file file:///…. A bundler selects this variant through the
  "browser" field of the package.json of @phfaist/zoodb; Node loads
  src/zooflm/_load_wasm_default.js.` No `import.meta`, no `node:`. Both `_default` files
  export `load_zoodb_flm_wasm` only.
- `package.json`: the `browser` field (after `main`), exactly the one mapping; the exports
  `./citationmanager/wasm`, `./zooflm/wasm`, `./zooflm/wasm-node` removed; nothing else.

**Public API.**

- `src/zooflm/engine.js`: imports `load_zoodb_flm_wasm` from `./_load_wasm_default.js`;
  `create()` lost `load_wasm`, `features()` takes no options; `_load()` and its namespace
  check are gone; the public `core` getter is gone (the internal `_core` accessor stays);
  the header's neutrality paragraph rewritten; JSDoc: `create()` "Builds an engine,
  loading the engine's core (flm-rs compiled to WebAssembly, shipped with the package) the
  first time", `core_version` "The version of the engine's core: `{ binding, flm_core }`"
  (it named `ZooFlmCore.version()`), `settings_hash` "the version of the engine's core
  (core_version)" and "another version of the core", `free()` "Frees the engine's core".
- `src/zooflm/index.js`: no loader re-export; header rewritten (the default loader and its
  browser variant).
- `src/std/use_flm_engine.js`, `src/std/stdzoodb.js`: `flm_options.load_wasm` gone from
  the code, the defaults and the JSDoc (and the loader import of `use_flm_engine.js`).
- `src/citationmanager/`: no change; `doc/zoodb.citationmanager.rst` never named the
  removed export.

**Tests** (497 before, 504 after: the 7 of the new file).

- `load_wasm: load_zoodb_flm_wasm_node`, `const load_wasm = …` and the import dropped in
  9 files (`test_dbdataloader_flmfilesdb`, `test_dbprocessor_flmprocessor`, `_backrefs`,
  `_citations`, `_pageless`, `test_dbprocessor_flmsimplecontent`, `test_std`,
  `test_zooflm_citationcompiler`, `test_zooflm_engine`).
- `engine.core.…` → `engine._core.…` in the four files that read the core's counters
  (`test_dbprocessor_flmprocessor_backrefs`, `test_dbprocessor_flmsimplecontent`,
  `test_dbprocessor_flmprocessor`, `test_zooflm_engine`), each with a comment at the first
  use saying that `_core` is the engine's internal accessor, not part of the API; the
  freed-engine test calls `e._core /* internal */` instead of `e.core`.
- `test_zooflm_engine.js`: `./_load_wasm_default.js` in place of `./_load_wasm.js` in the
  imports `engine.js` may have.
- `test_zooflm_wasm_module.js` (14 tests, as before): the forbidden-token check over the
  generated JS, `_load_wasm.js` and `_load_wasm_default.browser.js`, the URL allowed once
  in `_load_wasm.js` only; 64 MiB; in a fresh process the browser variant's rejection
  (`Error`, the message's four parts matched), then `instantiate_zoodb_flm_wasm` on 4 bad
  bytes → `CompileError`, then on the file's bytes → resolves; in process,
  `instantiate_zoodb_flm_wasm(bytes)` is the default loader's namespace.
- `test/test_package_surface.js` (new, 7 tests): the `browser` field is exactly the one
  mapping and both files exist; both variants export the same names
  (`['load_zoodb_flm_wasm']`); importing the browser variant in a fresh Node process with
  `fetch` and WebAssembly's `compile`/`compileStreaming`/`instantiate`/
  `instantiateStreaming` recording their calls records nothing (an instantiation from the
  bytes afterwards shows the recording works); no export key contains `wasm` and no target
  `_load_wasm`; `@phfaist/zoodb/citationmanager/wasm`, `…/zooflm/wasm` and
  `…/zooflm/wasm-node` fail with `ERR_PACKAGE_PATH_NOT_EXPORTED`; the namespaces of
  `@phfaist/zoodb`, `…/citationmanager`, `…/zooflm`, `…/zooflm/engine` and `…/std` (by
  the package's own name) export no name matching `/wasm/i`; `'core' in
  ZooFlmEngine.prototype` is false.
- `playground/play_example.mjs`: the import and `load_wasm` gone.

**Documentation.**

- `doc/zoodb.zooflm.rst`: the loader imports and paragraph of "Modules" gone (the
  paragraph now points to the section below for bundlers); `load_wasm` gone from "Creating
  an engine" (example, prose, options, the standard setup's list); "The wasm module and
  its loaders" renamed "The WebAssembly module", its loader list replaced by the bundling
  paragraph (Node reads the file; a browser bundle needs a bundler that honors the
  `browser` field and copies the file named by the `new URL(…)`; Parcel 2 does both,
  verified with the EC zoo; `packageExports: true`, as before); the API reference's
  "The loaders of the wasm module" and its two `js:autofunction` directives removed.
- `doc/std.rst` (the import and option in the example, the "Under Node, …" paragraph, the
  `flm_options.load_wasm` entry), `doc/zoodb.dbprocessor-flm.rst` (the example),
  `doc/website11ty.rst` (the "As every script that runs under Node …" paragraph and its
  example).
- `rust/README.md` (the "loaded through" cells: the three files, the `browser` field,
  internal, not exported), `rust/zoodb-flm-wasm/README.md` (the passage of lines 170–177:
  the engine loads the module through the internal loaders), `CLAUDE.md` (the ZooFLM
  paragraph, `engine.js`'s `create()` and `settings_hash`, the standard setup's
  `flm_options.load_wasm` and its `node:` sentence, the "Generated wasm modules"
  paragraph: the three loader files, the `browser` field, no package export of either
  module).
- `README.md`: no `loader` or `wasm` (only "WebAssembly", for `autocitefetch`); unchanged.
- `CHANGELOG.md`: does not exist (deviation 1).

**Checks.**

| check | result |
|---|---|
| `yarn lint` | exit 0, no problem (only ESLint's notice on the eslintrc format) |
| `yarn test` | 497 passing before, 504 after (8 s); `logs/test-before.log`, `logs/test-after.log` |
| `yarn node playground/play_example.mjs` | exit 0, the page and the snippet printed (`logs/play_example.log`) |
| docs | the main checkout's Sphinx 8.1.3 (`…/zoodb-doc-oZT3q19H-py3.13/bin/sphinx-build`), read-only from the worktree's `doc/`, `-d` and output in `15/docs/`, `TMPDIR` in the scratchpad: "build succeeded", 0 warnings (run again after the last wording change, same result); no built page mentions `load_wasm`, `wasm-node`, `zooflm/wasm` or `load_zoodb_flm`; the API reference lists no `ZooFlmEngine.core` |
| `yarn pack --out scratch/zoodb-flmrs.tgz` | 75 files (74 before: `_load_wasm_node.js` replaced by `_load_wasm_default.js` and `_load_wasm_default.browser.js`), 2,403,191 bytes, SHA-256 `df17f16d7ef06929f813751fee2bcbf21eab9055590cb9ea3605eb441e0dd5c1`; the packed `package.json` has the `browser` field and no export key with `wasm` |
| the grep | `git ls-files -co --exclude-standard`, minus `dev-docs/initial-design/0[7-9]-*`, `1[0-4]-*` and `scratch/proto/` (234 files), searched for `\bload_wasm\b`, `load_zoodb_flm_wasm_node`, `zooflm/wasm`, `citationmanager/wasm`, `_load_wasm_node`: hits only in this brief (22), `HANDOVER.md` (2) and the `README.md` log (1) (the main session's), the historical notes left unchanged by the brief (`06-repo-change-map.md` 1, its tracked copy `scratch/06-repo-change-map.md` 1, `AutocitefetchImplementationPlan.md` 1, `AutocitefetchImplementationReport.md` 2), and `test/test_package_surface.js` (1: the three former subpaths, checked not to resolve; deviation 3) |

### Part C — the consumers

**`zoodb-example` clone** (commit `92e4f89` "The FLM engine loads its WebAssembly module
by itself", over `cc1ac16`).

- `peopledbjs/myzoodb.js`: the Node loader's import and its comment, and
  `flm_options.load_wasm` with its comment, removed (9 lines). The grep of the clone's
  tracked files (READMEs included) finds nothing else.
- "Before": `website/_site/` of 2026-11-03 12:53 (20 files), copied to
  `15/example/site-before/`.
- The check of 11: root `.parcel-cache` and `website/.parcel-cache` removed; the `sed` to
  the tarball; `YARN_GLOBAL_FOLDER=15/yarn-global yarn install`: exit 0, 8.2 s, the new
  Yarn folder filled with the 431 archives from the registry (444 MB, in the
  scratchpad); one `node_modules/@phfaist/zoodb`, 0.3.0, its `src/` equal to the
  worktree's (`diff -rq` empty); `cd website && yarn build`: exit 0, 3.3 s, "Wrote 13
  files"; no `flm.*` or ZooDb diagnostic identifier in the log (the srcset/U2 warning
  once, and Eleventy's plugin-version warning, both as before); `website/package.json`
  and `yarn.lock` restored (`git checkout --`), then the commit; `git status` clean.
- `diff -r` before and after: identical, all 20 files. No JS bundle differs because none
  holds the engine: the example's two bundles (`_site.*.js`, and `search.*.js` with 180
  sources) contain no module of `@phfaist/zoodb` at all. The example therefore checks the
  Node side only (deviation 4).

**Sitegen clone** (commit `744bcef` "The FLM engine loads its WebAssembly module by
itself; the exporter's bundle rebuilt", over `92b8d4b`).

- Edited: `eczoodb/fullopts.js` (the import, its comment, `load_wasm`),
  `eczoohelpers/eczcollectbib/generatebibtex.js` (the import, `load_wasm`),
  `jscomponents/codegraph/setup_eczoodb.js` (`load_eczoodb_from_data(eczoodbData)`, the
  doc comment's `load_wasm` paragraph, the spread of `load_wasm`; its two callers,
  `setup.js` and `_headless_exporter_browser_code.js`, pass none). `git grep` of the
  clone's sources and `docs/` (all tracked text files) for the loader names: nothing else.
- Install, the HANDOVER way: the stale copies removed (the Yarn folder's
  `@phfaist-zoodb-file-*.zip`, which was the example's Yarn 4 copy; the overlay lock's
  `@phfaist/zoodb@file:` entry; `node_modules/@phfaist/zoodb`), then
  `YARN_GLOBAL_FOLDER=15/yarn-global YARN_ENABLE_NETWORK=0 yarn install` (3.3.0): exit
  0, 1.8 s, `YN0013` the tarball only, `YN0019` the old archive removed from the project's
  cache; one `node_modules/@phfaist/zoodb`, 0.3.0, its `src/` equal to the worktree's
  (`diff -rq` empty). The overlay lock already held `yaml@npm:^2.9.1`. The overlay
  (`package.json` as found, `yarn.lock` as found but for the zoodb entry's checksum) is
  left in place (deviation 8); the `_zoodb_citations_cache/*` files are as found
  (SHA-256 checked before and after everything). Only my files were staged and
  committed.
- Tests that passed before: `cd eczoodb && yarn test` 75 passing, 2 pending (27.7 s);
  `cd eczoohelpers/eczcollectbib && yarn test` 16 passing; `git status --short --ignored`
  the same before and after; the test cache keeps its 111 lines.
- Exporter bundle: the root `.parcel-cache` removed, `cd jscomponents && yarn build`: exit
  0, 9.3 s; `_headless_exporter_browser_page.3842db7c.js` (892,816 B; was `22dae5fc`,
  893,139 B), its map, the page, and `zoodb_flm_wasm_bg.53c38510.wasm` (same name, equal
  to the package's file byte for byte). The bundle holds the browser variant (its message
  once) and nothing of the Node loader; the source map's sources include
  `_load_wasm_default.browser.js` and `_load_wasm.js`, not `_load_wasm_default.js`;
  `node:fs` and `fs/promises` 0 times; `readFile` 3 times, all outside the loader:
  json-schema-ref-parser's file resolver and ZooDb's schema loader through the config's
  `fs` (the previous bundle has the same 3).
- "Before": the current `site/_site/` (1,520 files, written 2026-11-03 14:13:02 to
  14:14:21, after `92b8d4b`'s commit at 13:53) copied to `15/sitegen/site-before/`. **It
  is not a production build** (deviation 7): its 108 code graphs are the 462-byte
  development-mode placeholder ("image not generated in devel mode for faster builds"),
  deduplicated into 96 files, so it is a `yarn build-simple` (`ECZOO_DEVELOPMENT_MODE=1`),
  and it was built on the tracked `_zoodb_citations_cache` rather than the LOCAL copy
  (that cache's `citations.jsonl` was written at 14:12:04 and holds the data the before's
  exports show). The README log's production build of 2026-11-03 (exit 0, SVGs
  byte-identical) must be an earlier `_site/`, since overwritten. The comparison below is
  made against it anyway; the SVG check cannot be.
- Production build (`15/sitegen/prod_build.sh`: `cd site && yarn build` with
  `ECZOO_CITATIONS_CACHE_DIR=_zoodb_citations_cache_LOCAL`, under `sandbox-exec -f
  nonet.sb` with `YARN_ENABLE_NETWORK=0`, `COREPACK_ENABLE_NETWORK=0`,
  `PUPPETEER_SKIP_DOWNLOAD=1`, `GIT_ALLOW_PROTOCOL=file`, `TMPDIR` in the scratchpad, as
  in 14's S2; log `sitegen/logs/prod-build.log`): **exit 0**, 423.5 s wall (14:41:32 to
  14:48:35; 677.6 s user), peak resident size 3,094,249,472 bytes; "Wrote 1424 files in
  420.00 seconds"; `Pass 1: 4739 cached, 478 to fetch`, `7341 considered, 0 failed`.
  **No FLM diagnostic**: no `ZooFlmError`, no `Code graph,` warning, no recovery markup;
  the only `flm.*` identifiers are 8 debug lines of the bibtex generator's character
  probe (`No LaTeX spelling for ‘ ’ (U+202F): flm.latex-recomposed.unknown-character`,
  and 7 alike), which asks the engine to spell one character under `'continue'` and
  writes `?` when it cannot; the other warning lines are the known ones (Eleventy's
  plugin version, the bibtex generator's brace warnings, the image retriever's tried
  extensions). The headless exporter fetched `/zoodb_flm_wasm_bg.53c38510.wasm` from its
  server. `_site/`: 1,532 files, 131,417,807 bytes, 1,276 pages, 108 graph SVGs (87
  lists, 18 kingdoms, 3 domains), as 14's S2 (1,532 files, 131,394,918 bytes, 108).
- Comparison (`compare_sites.py`, `sitegen/logs/compare.json`): 1,307 files identical at
  the same path. Pages: 1,276 in both; 1,274 equal once hashed asset names are made equal
  (109 of them differ only by those names: the graph SVGs and the code graph bundles); 2
  differ, `c/simplex_discrete.html` and `references.html`, by one citation,
  `arxiv:2402.14712`, `L ₁` before and `L₁` after: the compiled text in the tracked cache
  that the before used (`\textit{L}` between line breaks) against the LOCAL copy's (and
  the committed cache's) `\textit{L}₁`. The `dat/` exports differ by the same cause:
  `eczoodata.json` and `searchindex.json` by that citation, `bibreferences.bib` and
  `bibreferences_csl.json` by the two caches' citation data (DOI URLs in lower case
  before, as the tracked cache has them; the CSL `role` fields). Bundles: 22 of the 24 JS
  files are byte-identical by name; the two code graph bundles (module and `nomodule`)
  differ, each by 25 runs of a token diff (`;`, `,`, `{`, `}`), all of them this step's
  change: the loader (the old neutral loader's no-source branch and message replaced by
  the browser variant's), `create()` and `features()` without `load_wasm`, `_load()` and
  `get core()` gone, `use_flm_engine`'s `load_wasm` and the setup's default gone,
  `load_eczoodb_from_data` without `load_wasm`, and the minifier's renamed variables that
  follow. The `.wasm` asset `vv/zoodbflmwasm-53c38510.wasm` is emitted (same name as
  before, equal to the package's file). Graph SVGs: not comparable (placeholders before).
- This is the check of Philippe's concern: the site's bundles were built by
  `site/.parcelrc` (`@phfaist/parcel-resolver-root` alone) and the exporter's by
  `jscomponents/.parcelrc` (the root resolver, then `"..."`); both took the browser
  variant and emitted the `.wasm`.
- Browser check (`browser_check.mjs`, `sitegen/browser/`): the built site served on
  127.0.0.1 by the clone's `sirv` 3.0.0, `/code_graph#code_surface` opened in the clone's
  Puppeteer 24.4.0, `headless: 'shell'` (HeadlessChrome 134.0.6998.35); every request not
  to 127.0.0.1 aborted but MathJax 4's (12 requests to cdn.jsdelivr.net, let through to
  the network); the one aborted request was Google Fonts' stylesheet. The app was ready
  in 953 ms; `vv/zoodbflmwasm-53c38510.wasm` **200**, `application/wasm`; no page error;
  console: 1 error, Chrome's "Failed to load resource: net::ERR_FAILED" for the aborted
  font stylesheet, no other error (1 info, React's devtools note; 1 log, "Typesetting
  math..."); the engine `settings_hash` `d65b5461a77786b0`, `core_version` `{ binding:
  0.1.0, flm_core: 0.5.0 }`, `'core' in engine` false; 3 canvases; the pane of the
  surface code rendered by the engine (46 `flm-pres` elements, "Kitaev surface code
  [1–4] go to page →"), 9 formulas typeset (`code_graph.png`).
- The handbook clone was not rebuilt (it has no mention of the loaders).

### Deviations

1. `CHANGELOG.md` does not exist: Philippe deleted it in `3d12c9b` (2026-10-20, "trying
   to fight against the slop …"). The item (the 0.3.0 notes, the breaking change of
   `./citationmanager/wasm`) was stopped, not worked around; nothing was recreated.
2. The brief named one test file for `engine._core`; four read the core's counters
   through the removed getter, so all four use the internal accessor with the comment,
   and the freed-engine test lists `e._core`.
3. The surface test checks beyond the brief: the three former subpaths fail to resolve,
   and two more namespaces (`@phfaist/zoodb`, `…/citationmanager`) export no `wasm` name.
   The first makes that test file the one hit of the grep outside the excepted notes.
4. The bundling paragraph says "verified with the Error Correction Zoo", not "and the
   example": no bundle of the example holds the engine or any module of the package.
5. `core_version`'s JSDoc is rewritten too (it named `ZooFlmCore.version()`, a module
   object, in the API reference).
6. The grep searches `load_wasm` as a word (`\bload_wasm\b`): the file names
   `_load_wasm.js`, which the brief keeps, contain the string.
7. The sitegen's "before" is a development build on the tracked cache, not the production
   build of 14:14 the brief expected; the pages were compared against it, the SVG
   byte-identity check could not be made, and no substitute "before" was built.
8. The sitegen's overlay `yarn.lock` is left with the new tarball's checksum in its zoodb
   entry (the one line that differs from what I found), so that it matches
   `node_modules` and the tarball; the as-found copy is in `15/sitegen/asfound/`.
9. The production build ran under `nonet.sb`, as 14's S2 did (not asked; no network for
   the citation sources); the browser check let MathJax through to the network.

### Found, not done

- `CLAUDE.md` ("release notes in `CHANGELOG.md`", the `files` list) and the `files` list
  of `package.json` still name `CHANGELOG.md`, deleted on 2026-10-20 (`yarn pack` skips
  it silently).
- The module's size in `doc/zoodb.zooflm.rst` and `rust/README.md` ("about 5.2 MB") is
  5,296,941 bytes (5.3 MB) since `6f01616`.
- `load()`'s refusal message still says "another build of the module" (a runtime
  message, not the API reference; the tests match "another core configuration").
- The sitegen's ignored `_zoodb_citations_cache_LOCAL/` was written by the build
  (`citations.jsonl` 14:41:54, `cache_compiled_citations.json` 14:41:55,
  `_anystyle_manual_citations_cache.json` 14:42:13), as by every build; the tracked
  `_zoodb_citations_cache/*` were already modified by the 14:12 development build and are
  left as found.
- The production build's exporter launches Chrome for Testing, which rewrites its
  Crashpad `settings.dat` under `~/Library/Application Support/` (ruled and disclosed in
  13); the browser check used chrome-headless-shell from `~/.cache/puppeteer`, as before.
  Neither folder was opened by me.

### Questions for Philippe

1. Should a production "before" be built for the SVG check (the sitegen at `92b8d4b`, its
   committed exporter bundle, the previous tarball kept in `15/pack-before/`), or is the
   evidence enough (the bundles differ by this step's change only, the exporter ran, the
   108 graphs were written)?
2. `CHANGELOG.md`: recreate the 0.3.0 notes (with this step's breaking changes), or drop
   its mentions from `CLAUDE.md` and the `files` list?
3. Keep the surface test of the three former subpaths (the one grep hit), or drop it?

### Review fixes

Decided by the main session after the reviewer's report (verdict: no must-fix) and
Philippe's rulings of 2026-11-03: "CHANGELOG.md does not exist and should not exist. Do
not include breaking-change notes anywhere. No new test, it is not necessary." The
rulings void the brief's `CHANGELOG.md` item and its package-surface tests (and answer
questions 2 and 3 above). Applied in the worktree, not committed:

- A. `test/test_package_surface.js` deleted (it was untracked); none of its assertions
  moved elsewhere.
- B. `package.json`: `"/CHANGELOG.md"` removed from `files`; `CLAUDE.md:9`: "Version 0.3.0
  (unreleased), …" and "publishes `src/`, `tools/` and `README.md` only".
- C. The wording about earlier versions in this step's text: `src/zooflm/index.js:11` ends
  at "through `../util/atomicfilewrite.js`)" ("as the former `./zooflm` did" gone);
  `doc/zoodb.zooflm.rst:43-45` ("still … as before" gone); `doc/zoodb.zooflm.rst:172-174`
  "Parcel also needs ``packageExports: true`` to resolve the package's subpath exports
  (…)".
- D. The module loads once per process: `src/zooflm/engine.js:169` "Builds an engine,
  loading the core's WebAssembly module (flm-rs, shipped with the package) the first
  time"; `doc/zoodb.zooflm.rst:72` "loads the core's WebAssembly module the first time".
  "The engine's core" stays where the per-engine instance is meant (`free()`).
- E. "about 5.3 MB" (5,296,941 bytes) in `doc/zoodb.zooflm.rst:159` and
  `rust/README.md:10`.

Left deliberately: the reviewer's suggestion to put the `browser`-field assertions into an
existing test file (not done, per the ruling); the older history wording elsewhere
(`doc/zoodb.zooflm.rst:23-24`, `src/std/stdzoodb.js:71`, `CLAUDE.md` 27/56/58, test
comments, refusal messages), for Philippe; the weak but harmless memoization test at
`test/test_zooflm_wasm_module.js:134` (the module is already instantiated in that
process, so it only shows that the memoized namespace is returned); and
`doc/zoodb.citationmanager.rst:318`, which points to the internal
`src/citationmanager/_wasm/autocitefetch_wasm.d.ts` for the `ProgressEvent` fields, for
Philippe.

Checks after the fixes (logs in `15/review/`): `yarn lint` exit 0, no problem; `yarn test`
497 passing; `yarn node playground/play_example.mjs` exit 0; the docs build (the same
read-only Sphinx 8.1.3) "build succeeded", 0 warnings; `yarn pack --out
scratch/zoodb-flmrs.tgz` 75 files (the same list as the first pack), 2,403,166 bytes,
SHA-256 `6563ed7f1799e1f90eedd68dd981bde8b477106a8d4ccd91dd458a88300472cf`. The clones
were not reinstalled: their `node_modules/@phfaist/zoodb` is the first pack of this step,
which differs from the new one only by the comment of `src/zooflm/index.js`, the JSDoc
of `create()` and the `files` list of `package.json`.
