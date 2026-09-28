# zoodb-autocitefetch-wasm

A `wasm-bindgen` binding of the Rust citation retriever
[`autocitefetch`](https://crates.io/crates/autocitefetch) for `@phfaist/zoodb`.
All host I/O (HTTP, cache files, timers, clock, progress events) is delegated
to JavaScript callbacks. The design and the exported JavaScript API are
specified in
[`dev-docs/AutocitefetchImplementationPlan.md`](../dev-docs/AutocitefetchImplementationPlan.md)
(section 7.1).

This is a plain cargo package (not a workspace). Run cargo commands from this
directory.

## Prerequisites

- Rust stable (`rust-toolchain.toml` pins the `stable` channel and requests
  the `wasm32-unknown-unknown` target):
  `rustup target add wasm32-unknown-unknown`
- `wasm-pack`: `cargo install wasm-pack` (on its first run it downloads a
  matching `wasm-bindgen-cli` and `wasm-opt`).

## Building

From the repository root:

```sh
yarn build:wasm
```

This runs `tools/build_wasm.mjs`, which builds this crate with
`wasm-pack build --release --target web` into `rust/target/pkg/` and
regenerates the committed module in `src/citationmanager/_wasm/` (glue, type
declarations, the `.wasm` inlined as base64, and `BUILD_INFO.json`). Never
edit `src/citationmanager/_wasm/` by hand. JavaScript loads the module through
`src/citationmanager/_load_wasm.js`.

Checks on the host target:

```sh
cargo clippy --all-targets -- -D warnings
cargo test
```

## Notes

- `serde_json` is used alloc-only (`default-features = false`). Never enable
  `serde_json/std`: the `autocitefetch` core is `#![no_std]`, and feature
  unification would compile it in a configuration it excludes. Check with
  `cargo tree -e features -i serde_json`.
- `version()` returns `{ binding, autocitefetch }`. The crate exposes no
  version constant, so `build.rs` reads the resolved `autocitefetch` version
  from `Cargo.lock` (committed) into `AUTOCITEFETCH_VERSION`.
- The optional feature `debug-panics` installs `console_error_panic_hook` at
  module start.
- `target/` is gitignored.
- Progress events: with `host.onEvent`, `src/reporter.rs` hands one plain
  object per crate `Event` to the callback (snake_case shapes of the Python
  binding, appendix B of the brief), synchronously; exceptions are logged
  with `console.error` and ignored. `source_progress` samples are throttled
  per prefix by the crate's `ThrottledReporter` (`throttleEventsMs`, default
  1000; 0 disables). Without `onEvent` no reporter is installed.
- Legacy import: `legacyEntries` (produced by
  `tools/migrate_citations_cache.mjs`) are converted by `src/legacy.rs` into
  `CacheRecord`s written by the crate's `FileCacheStore` (section 7.7 of the
  brief); `legacyImport` reports `{ imported, skipped }`.
