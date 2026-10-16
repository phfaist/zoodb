# The Rust bindings of `@phfaist/zoodb`

A cargo workspace of two crates, each compiled to WebAssembly with
`wasm-bindgen` and committed as a generated module under `src/`, so that users
of the package never need Rust:

| crate | what | generated module | the binary ships as | loaded through |
|---|---|---|---|---|
| [`zoodb-autocitefetch-wasm/`](zoodb-autocitefetch-wasm/README.md) | the citation retriever [`autocitefetch`](https://crates.io/crates/autocitefetch); all host I/O over JavaScript callbacks | `src/citationmanager/_wasm/` | base64 inlined in a JavaScript module (about 0.84 MB) | `src/citationmanager/_load_wasm.js` |
| [`zoodb-flm-wasm/`](zoodb-flm-wasm/README.md) | the FLM engine `flm-core` with the ZooDb feature; no I/O of its own | `src/zooflm/_wasm/` | the `.wasm` file itself (about 5.1 MB), fetched by the browser or read from disk under Node | `src/zooflm/_load_wasm.js` (any environment, given the bytes or a URL) and `src/zooflm/_load_wasm_node.js` (Node) |

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
- The local checkout of flm-rs that `zoodb-flm-wasm` depends on (see below).

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

## The path dependency on flm-rs

`zoodb-flm-wasm` depends on `flm-core` through a path to a local checkout of
flm-rs (`/Users/philippe/projects/flm-rs/flm-core`), which is read only.
Where flm-rs is referenced from (a git dependency, a registry, a vendored
copy) is settled later. Until then:

- cargo cannot load the workspace where that path does not exist, so neither
  crate builds or checks there, the citation crate included;
- the `rust` CI job fails at its first cargo command;
- `Cargo.lock` records no source for `flm-core`, and the module's
  `BUILD_INFO.json` says `"flm_core_source": "path"`.
