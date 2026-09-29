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

## Layout

- `src/lib.rs` — the exported API: `version()` and the `CitationManager`
  class (`open(config)`, `prefixes`, `legacyImport`, `retrieve`, `get`,
  `getMany`, `keys`, `prune`, `flush`); `#![forbid(unsafe_code)]`.
- `src/config.rs` — the open config: serde spec types (camelCase,
  `deny_unknown_fields`) plus manual extraction of the JavaScript objects
  (`host`, `js` source objects, `legacyEntries`).
- `src/host.rs` — the crate's host traits over JavaScript callbacks:
  `JsFetcher`, `JsCacheFs`/`JsGuard`, `JsClock`, `JsTimer`.
- `src/sources.rs` — building and registering the sources from the specs,
  including `JsSource` (a source implemented in JavaScript).
- `src/formats.rs` — JSON/YAML parsing of bibliography files (`format:
  'auto' | 'json' | 'yaml'`).
- `src/reporter.rs` — `JsReporter`: crate progress events → plain snake_case
  objects for `host.onEvent`.
- `src/legacy.rs` — importing a legacy `cache_downloaded_info.json` (given
  as `legacyEntries`) into the crate's cache.
- `src/convert.rs` — value conversion across the Rust ↔ JavaScript boundary
  and error messages.
- `build.rs` — reads the resolved `autocitefetch` version from `Cargo.lock`.

## Host interface

The authoritative types are in the generated
`src/citationmanager/_wasm/autocitefetch_wasm.d.ts` (written from the
`typescript_custom_section` in `src/lib.rs`). In short,
`CitationManager.open({ sources, host, cacheDir, cacheBase?, writerId,
ttlPolicy?, retry?, maxChainDepth?, dropCslFields?, throttleEventsMs?,
legacyEntries? })` with:

- `host: HostFunctions` — `fetch(req) → Promise<{ status, headers, body }>`
  (`req = { url, method, headers, body }`, bodies as `Uint8Array`; non-2xx
  statuses are returned, transport errors thrown with a `retryable` flag),
  `cacheFs: HostCacheFs`, and optional `sleep(ms)`, `now()`, `onEvent(ev)`.
- `HostCacheFs` — `read(path)` (`null` if absent), `append(path, bytes)`,
  `atomicReplace(path, bytes)`, `list(dir)`, `remove(path)`,
  `lockExclusive(path)` and `tryLockExclusive(path)` (returning a guard
  `{ release() }`, or `null` from `tryLockExclusive` when not acquired).
- `sources: SourceSpec[]` — one spec per cite prefix, of kind `arxiv`
  (`chainDoisTo`, `overrideDois`), `doi`, `manual` (`format`), `bib`
  (`files` as URLs and/or inline `entries`, `format`) or `js` (`source:
  { retrieveChunk(keys, ctx), normalizeKey?, chainsTo? }` returning one
  resolution per key); every kind accepts `chunkSize`, `minIntervalMs`,
  `ttlMs` and `refreshBatching` (`'eager'`, `'default'` or `{ eager?,
  minBatch?, maxDeferDays?, topUp?: false | { minAgePercent?, fill?: 'chunk' |
  number } }`, applied on top of the source's default; see `src/batching.rs`).
  `CitationManager.refreshBatching(prefix)` returns the setting in effect.

The JavaScript implementations are `src/citationmanager/_hostfetch.js`,
`src/citationmanager/_cachefs.js` and the adapter
`src/citationmanager/_manager.js`.

## Invariants

- No I/O outside the host functions: no `std::fs`, no network, no clock or
  timer of its own.
- `#![forbid(unsafe_code)]`.
- `serde_json` without `std` (see Notes).
- `cargo clippy --all-targets -- -D warnings` and `cargo test` pass (also run
  by the `rust` job of `.github/workflows/node-js-test.yml`, which builds the
  wasm module too but does not compare it to the committed output).

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
