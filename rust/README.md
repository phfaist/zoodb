# The Rust bindings of `@phfaist/zoodb`

A cargo workspace of two crates, each compiled to WebAssembly with
`wasm-bindgen` and committed as a generated module under `src/`, so that users
of the package never need Rust:

| crate | what | generated module | the binary ships as | loaded through |
|---|---|---|---|---|
| [`zoodb-autocitefetch-wasm/`](zoodb-autocitefetch-wasm/README.md) | the citation retriever [`autocitefetch`](https://crates.io/crates/autocitefetch); all host I/O over JavaScript callbacks | `src/citationmanager/_wasm/` | base64 inlined in a JavaScript module (about 0.84 MB) | `src/citationmanager/_load_wasm.js` |
| [`zoodb-flm-wasm/`](zoodb-flm-wasm/README.md) | the FLM engine `flm-core` with the ZooDb feature; no I/O of its own | `src/zooflm/_wasm/` | the `.wasm` file itself (about 5.2 MB), fetched by the browser or read from disk under Node | `src/zooflm/_load_wasm.js` (any environment, given the bytes or a URL) and `src/zooflm/_load_wasm_node.js` (Node) |

Layout: `Cargo.toml` is the virtual workspace (`resolver = "3"`, the two
members, and the one `[profile.release]`: cargo ignores profiles in member
manifests); `Cargo.lock` and `rust-toolchain.toml` are shared and committed;
`target/` is the one build directory (gitignored). The wasm-pack settings
(`[package.metadata.wasm-pack.*]`: `wasm-opt -Os`, no default module path in
the glue) stay in each crate's manifest. Run cargo commands from this
directory.

## Prerequisites

Only to rebuild a module (not to use or test the package):

- Rust stable (`rust-toolchain.toml` pins the `stable` channel and requests
  the `wasm32-unknown-unknown` target):
  `rustup target add wasm32-unknown-unknown`
- `wasm-pack`: `cargo install wasm-pack` (on its first run it downloads a
  matching `wasm-bindgen-cli` and `wasm-opt`).
- Network access the first time: cargo fetches flm-rs from its git repository
  (see below) into `~/.cargo/git/`.

## Building

From the repository root:

```sh
yarn build:wasm             # both modules
yarn build:wasm citations   # zoodb-autocitefetch-wasm only
yarn build:wasm flm         # zoodb-flm-wasm only
```

`tools/build_wasm.mjs` runs `wasm-pack build <crate> --release --target web`
into `target/pkg/<crate>/` and regenerates the module in `src/` (glue, type
declarations, the binary, `BUILD_INFO.json`); see `tools/README.md`. Never
edit the generated modules by hand. A release build of `zoodb-flm-wasm` takes
one to three minutes; rebuilt binaries are committed at milestones only, so
that the history does not grow at every edit.

The binaries carry no path of the build machine. rustc writes source paths
into them (panic locations), so `tools/build_wasm.mjs` passes
`--remap-path-prefix` flags through `CARGO_ENCODED_RUSTFLAGS`, computed at
each build and never committed: this workspace's root becomes `zoodb-rust`,
the root of each path dependency (none today) its package name, cargo's
registry sources `cargo-registry`, its git checkouts (flm-rs) `cargo-git`,
and the toolchain's sysroot (`rustc --print sysroot`) `rust-sysroot`. Flags
already given in `CARGO_ENCODED_RUSTFLAGS` or `RUSTFLAGS` (or cargo's
`CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_RUSTFLAGS`, `CARGO_BUILD_RUSTFLAGS`) are
kept; rustflags in a cargo configuration file are refused, since
`CARGO_ENCODED_RUSTFLAGS` would replace them. The tool fails if `/Users/`,
`/home/` or `C:\` is left in a binary, and `BUILD_INFO.json` records
`"paths_remapped": true`. The flags are part of cargo's fingerprint: the first
build with them, and the first build after they change (the workspace or the
toolchain moved), rebuilds everything from scratch,
once per machine. Cargo's own `trim-paths` is unstable and not used. Plain
`cargo` and `wasm-pack` commands (the checks below, the CI job) run without
these flags; their output is never committed.

## Checks

One crate at a time, from this directory:

```sh
cargo clippy -p zoodb-autocitefetch-wasm --all-targets -- -D warnings && cargo test -p zoodb-autocitefetch-wasm
cargo clippy -p zoodb-flm-wasm --all-targets -- -D warnings && cargo test -p zoodb-flm-wasm
```

A single invocation over the workspace (`cargo clippy --all-targets -- -D
warnings`, `cargo test`) also passes, but it unifies the dependencies'
features across both crates: `serde_json` then gets `std` (and
`preserve_order`) from `flm-core`, and the citation crate, which must never be
built with `serde_json/std`, is compiled in a configuration it does not ship
in. The modules are unaffected: `wasm-pack` builds each crate alone. The
`rust` job of `.github/workflows/node-js-test.yml` runs the per-crate checks
and both wasm-pack builds (build only).

## The dependency on flm-rs

`zoodb-flm-wasm` takes `flm-core` from the branch `main-rs` of the public FLM
repository, `https://github.com/phfaist/flm.git` (a git dependency).
`Cargo.lock` pins the commit a build uses (the `source` line of `flm-core`,
`git+https://github.com/phfaist/flm.git?branch=main-rs#<commit>`); from this
directory, `cargo update -p flm-core` moves it to the branch's current head.
The module's `BUILD_INFO.json` copies that source, commit included, into
`flm_core_source`.
