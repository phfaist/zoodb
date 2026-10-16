# 08 — Step 1: the Rust workspace, the real crate, the loader and the build tool

Build order step 1 of `06-repo-change-map.md` (section N; the fates in section A). Brief
written 2026-10-16; implemented by an implementer agent and checked by a reviewer agent
(Philippe's instruction of 2026-10-16: agents do the build, on the Opus model), results at
the end of this file.

Acceptance, from 06: the crate moves from the prototype into `rust/`,
`tools/build_wasm.mjs` builds both modules, `src/zooflm/_wasm/` and `_load_wasm.js` exist,
one test loads the module; `yarn test` green.

## Rules that bind the implementation

- All edits in the worktree `.worktrees/zoodb-flmrs` (branch `zoodb-flmrs`). Absolute
  paths in every command (the shell's working directory is not reliable). No `git stash`.
  No commit: the main session commits after review.
- Read-only, never edited: `$HOME/projects/flm-rs/` (and nothing in its `playground/` is
  even read), `../zoodb-example`, the EC zoo repositories, the old FLM. Nothing outside
  the authorized folders is listed or read.
- No workarounds for anything that would need a change in flm-rs; the prototype's one
  such item (U2 in `05-upstream-requests.md`, medium-low priority) stays behind its cargo
  feature exactly as it is.
- Where flm-rs is referenced from is settled later (ruling): the path dependency on the
  local checkout stays, with its comment. Its consequence for CI is recorded, not worked
  around.

## Decisions taken for this step

- **D1, the linked stack.** The prototype set the 64 MiB wasm stack (R1: flm-core's
  recursion guard assumes a 64 MiB worker stack) in `.cargo/config.toml`, which in a
  workspace would apply to the citation module too. The real crate emits the linker
  argument from its own `build.rs` (`cargo:rustc-link-arg=-zstack-size=67108864`, only
  when `CARGO_CFG_TARGET_ARCH` is `wasm32`; it would break the host build of
  `cargo test`). The test checks the effect: linear memory of at least 64 MiB at
  instantiation. U1 (a configurable guard budget) is the way to lower it later.
- **D2, how the FLM module ships.** The `.wasm` file itself, committed under
  `src/zooflm/_wasm/` beside the glue (Q17 as measured in 07: 5.1 MB of wasm would be
  6.8 MB of base64 source, too heavy for the browser apps; the browser fetches the file,
  Node reads it). It is committed for the same reason the citation module is: the
  package is installed from git. The citation module stays base64-inlined (0.84 MB,
  works everywhere, untouched). Rebuild commits are kept to milestones so that the
  binary does not bloat the history at every edit.
- **D3, two loader entry points, no environment detection.** `src/zooflm/_load_wasm.js`
  is environment-neutral: it exports `wasm_url` (`new URL('./_wasm/zoodb_flm_wasm_bg.wasm',
  import.meta.url)`, the one form of `import.meta` that bundlers resolve as an asset) and
  `load_zoodb_flm_wasm(source)`, memoized, where `source` is anything wasm-bindgen's
  `init` accepts as `module_or_path` (bytes, a `WebAssembly.Module`, a `Response` or a
  promise of one, a URL) and, when absent, `wasm_url` is fetched (the browser default).
  With no `source` and a `file:` URL it throws a message naming the Node loader instead
  of letting `fetch` fail obscurely. `src/zooflm/_load_wasm_node.js` reads `wasm_url` with
  `node:fs/promises` and calls the neutral loader; Node callers (tests, later the
  standard setup under Node) use it. The forbidden-token rule of the citation module
  applies to the generated glue of both modules and to the neutral loader, with the one
  `new URL(…, import.meta.url)` allowed there.
- **D4, the wasm surface is unchanged.** The `ZooFlm` class and its methods are those of
  the prototype (07). Step 2 builds the JavaScript engine over it and reshapes the
  surface then, with TypeScript declarations (`typescript_custom_section`) at that point.
- **D5, workspace shape.** Virtual workspace at `rust/` (`resolver = "3"`), members
  `zoodb-autocitefetch-wasm/` (the existing crate moved as it is) and `zoodb-flm-wasm/`;
  one `Cargo.lock` and `rust-toolchain.toml` at `rust/`; the release profile at the root
  only (cargo ignores profiles in member manifests). `rust/target/` stays the one build
  directory (gitignored).

## What to do

1. **Workspace.** `git mv` the citation crate's `Cargo.toml`, `build.rs`, `README.md`,
   `src/` into `rust/zoodb-autocitefetch-wasm/`; write `rust/Cargo.toml` (workspace
   members, resolver, `[profile.release]` as the crates had it: `opt-level = "s"`, `lto`,
   `codegen-units = 1`, `panic = "abort"`); keep `rust/Cargo.lock` in place so that cargo
   extends it (existing locked versions kept) rather than resolving afresh. The citation
   crate's `build.rs` reads the lock from the workspace root (walk up from
   `CARGO_MANIFEST_DIR` to the first `Cargo.lock`; `rerun-if-changed` on that file).
   `[package.metadata.wasm-pack.*]` stays per crate.
2. **The crate `rust/zoodb-flm-wasm/`.** `git mv` the prototype's sources from
   `scratch/proto/zoodb-flm-wasm/` (the four modules and `lib.rs`), then: name
   `zoodb-flm-wasm`, version `0.1.0`, description for the real crate; no `[workspace]`
   table, no profiles; `build.rs` per D1 (and `cargo:rerun-if-changed=build.rs`); delete
   the prototype's `.cargo/config.toml` and `Cargo.lock`; `#![forbid(unsafe_code)]`; crate
   and module docs describe the real crate (no "prototype", no "step zero"); `cargo clippy
   --all-targets -- -D warnings` clean at the workspace root (the prototype has 8 lints:
   `cmp_owned`, `map_clone`, `clone_on_copy` in `engine.rs` and `truncate.rs`); `cargo
   test` green. Features `debug-panics` and `published-insert` (U2) kept with their
   comments. `start()` keeps `mark_worker_thread()` unconditionally.
3. **`tools/build_wasm.mjs`.** One table of two entries (crate directory, out name,
   output directory, how the binary ships); `yarn build:wasm` builds both, `yarn
   build:wasm citations` or `yarn build:wasm flm` one. Per entry: `wasm-pack build
   <crate dir> --release --target web --out-dir <absolute rust/target/pkg/<crate>>
   --out-name <name>`; glue and `.d.ts` copied with the banner; the default-path
   stripping; the forbidden-token check on the glue; for `citations` the base64 module
   as today; for `flm` the `.wasm` copied to `src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm`.
   `BUILD_INFO.json` per crate: for `flm`, `binding {name, version}`, `flm_core` (version
   from the lock, and `flm_core_source: "path"` since the lock carries no source for a
   path dependency), `wasm_bindgen`, `wasm_size_bytes`, `build_date`. Toolchain checks
   as today. Exit codes as today.
4. **Loaders** per D3 in `src/zooflm/`, and `package.json` exports `./zooflm/wasm` →
   `./src/zooflm/_load_wasm.js`, `./zooflm/wasm-node` → `./src/zooflm/_load_wasm_node.js`.
   `.eslintrc.json`: ignore `src/zooflm/_wasm/`. No version change (step 5).
5. **Test `test/test_zooflm_wasm_module.js`** (mocha, as `test_citationmanager_wasm_module.js`):
   loads through the Node loader; `ZooFlm.features()` lists at least 30 features by name,
   `math`, `citations` and `graphics` among them, each with its settings schema or none;
   `new ZooFlm({})` has no build diagnostics; `parse` then `render_html` of
   `Hello \emph{world}` yields HTML containing `<em>world</em>` and no diagnostics; a
   wrong setting (`{ settings: { math: { no_such_key: 1 } } }`) throws with the feature
   and key named; `scan` over two fragments, one with `\label{eq:x}` on a display
   equation and one with `\ref{eq:x}`, reports the label in the first tree's `labels`
   and the reference in the second tree's `refs_resolved` (one run, so it resolves);
   `render_text` of the same gives plain text; linear memory at least 64 MiB after
   instantiation (D1); `BUILD_INFO.json` consistent (binding version equals the lock's,
   `wasm_size_bytes` equals the file's size); the neutral loader called with the bytes
   returns the same namespace; the generated glue and the neutral loader pass the
   forbidden-token check (`_load_wasm.js`: `import.meta` only inside `new URL(`).
6. **Prototype runners.** Delete `scratch/proto/zoodb-flm-wasm/` (moved; history keeps
   it). `scratch/proto/js/load.mjs` loads the real module through
   `src/zooflm/_load_wasm_node.js` with the same return shape (`ZooFlm`,
   `wasm_size_bytes`, `instantiate_ms`, `memory_bytes_at_start`, `memory`); run
   `run_zoo.mjs --kind example` once (with `NODE_MODULES` pointing at
   `$ECZOO/eczoo_sitegen/node_modules`, the data at `../zoodb-example/data` and
   `../zoodb-example/schemas`) to confirm the runners work. A note at the top of 07 that
   the crate moved in step 1 and that the runners load the built module.
7. **CI** `.github/workflows/node-js-test.yml`, job `rust`: clippy and test over the
   workspace from `rust/`, then the two wasm-pack builds (build only). Record in the
   results that the job cannot pass until flm-rs is referenced from a location CI can
   reach (the path dependency, by ruling); do not add a workaround.
8. **Docs.** `rust/README.md` (the workspace: both crates, prerequisites, build, checks,
   the path dependency note); `rust/zoodb-autocitefetch-wasm/README.md` (paths only);
   `rust/zoodb-flm-wasm/README.md` (what the crate is, the modules, the `ZooFlm` surface
   in one table with the shapes from 07, host tables, the ZooDb feature, build, checks,
   invariants: no I/O of its own, no unsafe, `parallel` off, the stack link argument,
   U1/U2 pointers); `tools/README.md` (`build_wasm.mjs`); `CLAUDE.md` (Commands, the
   Rust and generated-module paragraphs: two crates, two modules, the forbidden tokens,
   the loader pair). `dev-docs/AutocitefetchImplementationPlan.md` untouched.
9. **Checks before handing back**, all green and their output summarized: from `rust/`,
   `cargo clippy --all-targets -- -D warnings` and `cargo test`; from the worktree root,
   `yarn install` (no node modules in the worktree yet), `yarn build:wasm`, `yarn test`,
   `yarn lint`, `git status --short` (nothing unintended; the citation module's
   regenerated files may differ in `build_date`, and in the binary only if the merged
   lock changed a dependency's version, to be reported).

## Results

Implementation, 2026-10-16 (Rust 1.97, wasm-pack 0.15, wasm-bindgen 0.2.127, node 23.7;
flm-core 0.5.0 at the local checkout). Reviewed the same day: both deviations accepted,
fixes under "Review fixes" at the end.

**What was built.** `rust/` is a virtual workspace (`resolver = "3"`, the two members,
the release profile `opt-level = "s"`, `lto`, `codegen-units = 1`, `panic = "abort"`);
the citation crate moved as it was into `rust/zoodb-autocitefetch-wasm/` (its profile
dropped, `build.rs` finds the workspace's `Cargo.lock` by walking up); the prototype's
sources moved into `rust/zoodb-flm-wasm/` (`zoodb-flm-wasm` 0.1.0, `build.rs` with the
stack link argument for `wasm32` only, `#![forbid(unsafe_code)]`, docs for the real
crate, the 8 clippy lints fixed, `debug-panics` and `published-insert` kept;
`published-insert` still fails to build on the missing `FromIterator`, as expected).
`scratch/proto/zoodb-flm-wasm/` is gone (its `.cargo/config.toml` and `Cargo.lock`
deleted, its 1.4 GB of build output removed). `tools/build_wasm.mjs` builds from a table
of two entries (`yarn build:wasm [citations|flm]...`, exit 0 or 1); `src/zooflm/_wasm/`
holds the glue, `.d.ts`, `zoodb_flm_wasm_bg.wasm` and `BUILD_INFO.json`; the loaders are
`src/zooflm/_load_wasm.js` (neutral, `wasm_url` and `load_zoodb_flm_wasm(source)`;
without a source and with a `file:` URL it rejects, naming the Node loader; a failed
instantiation is not memoized) and `src/zooflm/_load_wasm_node.js`; package exports
`./zooflm/wasm` and `./zooflm/wasm-node`; `test/test_zooflm_wasm_module.js` (11 tests);
`scratch/proto/js/load.mjs` loads the built module through the Node loader; CI job
`rust` and the docs (`rust/README.md`, both crate READMEs, `tools/README.md`,
`CLAUDE.md`, the note at the top of 07) updated.

**Numbers.**

| | |
|---|---|
| FLM module | 5,110,100 B (gzip -9 1,772,431; brotli -q 11 1,267,774) |
| citation module | 631,462 B, base64 module 842,026 B (+135 B, see below) |
| linear memory at instantiation | 68,026,368 B (the 64 MiB stack plus data; the test asserts ≥ 64 MiB) |
| load through the Node loader (read and instantiate) / `new ZooFlm({})` | 23–33 ms / 61–63 ms |
| `yarn build:wasm`, cold (empty `rust/target`) | 2 min 12 s: citations 22.2 s, flm 109.5 s |
| `yarn build:wasm`, warm (no source change) | 12.1 s: citations 1.8 s, flm 9.5 s (wasm-opt); both binaries byte-identical to the cold build |
| `cargo test` (workspace, and per crate) | 40 (citations) + 8 (flm) passed, no doc tests |
| `yarn test` | 397 passing (386 before plus the 11 new), 8.7 s |
| `run_zoo.mjs --kind example` | 5 objects, 11 fields, 1,424 chars; parse 5 ms, scan 11 ms, render 42 ms; the tallies of 07 (no parse diagnostic; 2 labels, 2 references resolved, 2 unresolved to `person:alice`, 4 cited keys, 1 image; render: 4 `flm.citations.no-entry` without the citations table, 2 `flm.refs.unresolved` warnings) |

**The lock.** Cargo extended `rust/Cargo.lock` (the new crate and 25 dependencies
added: `flm-core` without source, `techy`, `schemars`, `serde_path_to_error`, `fixed`,
…); no locked version changed, but two existing entries gained dependency lines from
the union of the members' features (`hashbrown` gained `allocator-api2` and
`equivalent`, `serde_json` gained `indexmap`), harmless for a build of one crate (cargo
resolves features per invocation). The FLM crate builds with the workspace's locked
versions, a little older than the prototype's own lock (wasm-bindgen 0.2.127 instead of 0.2.129, js-sys
0.3.104, serde_json 1.0.151, syn 3.0.6).

**Deviations from the brief.**

- *Checks per crate.* One cargo invocation over both members unifies the dependencies'
  features: `serde_json` gets `std` and `preserve_order` from `flm-core`, so the
  workspace-wide `cargo clippy`/`cargo test` compile the citation crate with
  `serde_json/std`, which it must never be built with (`cargo tree -e features -i
  serde_json` shows it; with `-p zoodb-autocitefetch-wasm` it does not). Both forms pass
  today, and wasm-pack builds each crate alone, so the modules are unaffected. The CI job
  and the docs (`rust/README.md`, the citation README, `CLAUDE.md`) run clippy and test
  per crate (`-p`); the workspace-wide commands of item 9 were run too and pass.
- *The citation binary changed* although no dependency version did: the panic location
  strings of the crate's own sources are now workspace-relative
  (`zoodb-autocitefetch-wasm/src/lib.rs` instead of `src/lib.rs`), +135 B. Glue and
  `.d.ts` unchanged. The regenerated files are kept; restoring them
  (`git checkout HEAD -- src/citationmanager/_wasm/`) is equally valid, the module being
  functionally the same.
- *The HTML test.* flm-core writes `<em class="flm-pres-span"
  data-flm-style="emph">world</em>`, so the test matches `<em …>world</em>` rather than
  the literal `<em>world</em>`.
- *`yarn lint` is not green, for reasons outside this step.* In the worktree, ESLint's
  eslintrc mode cascades into the main checkout's `.eslintrc.json` (the worktree is
  nested in it, under the dot directory `.worktrees/`) and then ignores every file
  ("all of the files matching the glob pattern are ignored"), with the original
  configuration as well. Run with the worktree's configuration as root (`eslint
  --no-eslintrc -c .eslintrc.json` on the same globs), the files of this step lint clean
  and 20 errors remain in 9 files this step does not touch (the old FLM layer,
  `computeddata.js`, `stdzoodb.js`, `getfield.js`, `_inspectimagefile.js`). `"root":
  true` was added to `.eslintrc.json` in the review (below).
- Smaller: the manifest comment of the path dependency lost "Prototype only" and names
  the CI consequence (the dependency line is unchanged); the build identity is
  `zoodb-flm-wasm 0.1.0` from the package metadata; the scan's doc comment, misplaced on
  `render_latex`, is back on `scan`; `TextOut.trees` is documented as the per-tree
  renders; the test also checks `wasm_url` and the refusal without a source (in a child
  process, the module being instantiated in the test's own).

**CI.** Cargo cannot load the workspace while the `flm-core` path does not exist
(checked on a copy of the workspace pointing elsewhere: "failed to load manifest for
workspace member `zoodb-flm-wasm` … failed to read `…/flm-core/Cargo.toml`"), so the
`rust` job fails at its first cargo command, the citation crate's checks included, until
flm-rs is referenced from a location CI can reach. For the same reason nobody without
that checkout can rebuild either module. The Node `test` job is unaffected (the modules
are committed). No workaround added, by ruling.

**For the next steps.**

- `render_text` with `per_tree` renders each tree alone: a reference to another tree
  does not resolve there (`See eq:x.` against `See Eq. (1).` in the whole run), and the
  per-tree runs' diagnostics are dropped. Step 2 decides what the text of a field is.
- The loaders resolve to the glue's namespace; the instance's exports (and `memory`)
  are reached with `await ns.default()` once instantiated, which the test and `load.mjs`
  use. Step 2 may want an accessor of its own.
- The binaries embed absolute paths of the build machine in panic location strings (in
  the FLM module: 106 under the flm-rs checkout, 55 under `~/.cargo/registry`, 27 under
  `~/.rustup`; the citation module already had the latter two). A path remapping
  (`--remap-path-prefix`) would make them machine-independent; to decide before the
  package ships the FLM module (step 5).
- `ZooFlm.features()` lists 33 features, 22 with settings (milestone 4 of 07 counted
  23); the flm-rs checkout may have moved since.
- The `.d.ts` is wasm-bindgen's (`any` for every `JsValue`); typed declarations come
  with the reshaped surface in step 2 (D4).

**Review fixes** (2026-10-16, after the review; the FLM module rebuilt, the citation
module not).

- *Option defaults.* `TextOptions` read from any options object turned
  `unresolved_refs_warning` to `false` (a field-level `#[serde(default)]` against the
  struct's `Default` of `true`). `#[serde(default)]` now sits on the struct for
  `EngineConfig`, `RenderOptions`, `LatexOptions`, `TextOptions` and `SrcsetConfig`, the
  field-level ones dropped (`TruncateOptions` keeps its own, `chars` being required). A
  native test checks that `{}` gives each struct's `Default`; the module test that
  `render_text` of an unresolved reference alone is a Warning with `{}` too.
- *`parse_fields`.* The body is taken from the spans: from the end of the name
  argument (its delimiters included) to the end of the verbatim body (`\end` for a
  closed field, the end of the text for an unclosed one, which the parse reports as
  `core.environments.missing-terminator`), sliced with `get`; a field whose name is not
  plain characters, is empty or has no position is the Error `zoodb.fields.malformed`
  at the field. The unbraced name before a non-ASCII character (`\begin{field}xé body…`,
  which trapped) and `\end {field}` (which is no terminator, so the body runs to the
  end) are in a native test. Found on the way: `\begin{field}\end{field}` (no name)
  aborts the parse in flm-core with `core.hooks.hook-failed` ("the specification of the
  command ‘end’ must be one of the FLM specification types…"), thrown as an `Error`
  like any aborted parse; noted, not worked around.
- *Unknown keys.* `#[serde(deny_unknown_fields)]` on `EngineConfig`, the four options
  structs, `SrcsetConfig`, `ExternalEntry`, `CitationEntry` and `GraphicsEntry`. Since
  `serde_wasm_bindgen` reads a plain struct by its declared fields only (as the citation
  crate notes), `from_js` now reads through a `serde_json::Value`, where every key is
  seen: ``the render_html options: unknown field `titel`, expected `title` or
  `unresolved_refs_warning` ``. A key set to `null` or `undefined` (which arrives as `null`)
  is dropped first and takes its default, except under `settings`, which flm-core reads
  as given (native test). Integers arrive as integers; a fractional `chars` is refused.
  The runners and the test pass only known keys; the crate README says so.
- *Loaders and docs.* The module test checks in its child process that a failed
  instantiation is forgotten (`CompileError` on four bytes, then the real bytes
  resolve); the neutral loader's comment says the retry is sound only for a failure
  before the glue finalizes the instance (a trap in `start()` would leave a module
  whose start never finished). `has_errors` added to the `render_latex` and
  `render_text` docs; `CLAUDE.md` lists `WebAssembly.Module` among the sources.
  `scratch/proto/js/load.mjs` reads the bytes first and times the instantiation alone
  (16.7 ms in the run below, comparable with 07).
- *Lint.* `"root": true` in `.eslintrc.json`: `yarn lint` now runs in the worktree and
  reports only the 20 pre-existing errors in the 9 untouched files, left for step 5,
  when the old FLM layer goes.
- *Numbers after the fixes.* FLM module 5,122,806 B (+12,706 B: the `serde_json` route,
  the unknown-field messages, the field reader); `yarn build:wasm flm` warm 12.7–16.9 s;
  `cargo clippy -p zoodb-flm-wasm` clean, `cargo test -p zoodb-flm-wasm` 11 passed;
  `yarn test` 398 passing (12 in the module test); `run_zoo.mjs --kind example` with
  the tallies of 07 (parse 5 ms, scan 11 ms, render 30 ms).
