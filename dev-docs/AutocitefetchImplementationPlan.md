# Rewiring ZooDb citations through `autocitefetch` (Rust, wasm inlined)

Implementation brief. Branch: `with-autocitefetch`. Written 2026-09-28.

This document is the contract for a supervisor agent that spawns implementer
agents and reviewer agents. Everything an implementer needs is either in this
file or at a path this file names. Reviewers check the implementation against
this file, not against their own preferences.

---

## 0. How to use this brief

- **Roles.** The supervisor sequences the work packages in section 8, spawns
  one implementer per work package (or per listed sub-package), then one
  reviewer per finished package. A reviewer reads the package's *acceptance
  criteria* and *reviewer checklist*, runs the listed commands, and reports
  pass/fail with evidence (command output, file paths, line numbers).
- **Decisions are made.** Section 5 lists design decisions with their adopted
  answer. Implementers follow them. If an implementer or reviewer finds a
  decision to be technically impossible or to contradict a hard invariant in
  section 6, they stop and report to the supervisor with evidence; the
  supervisor escalates to the user. They do not silently pick an alternative.
- **Hard invariants (section 6) beat everything else.** The most important
  one: no existing configuration key under `flm_options.citations` changes
  its name, type, or meaning.
- **No network in tests.** All tests use fixtures. One opt-in network test may
  exist behind the environment variable `ZOODB_TEST_NETWORK=1`.
- **Do not edit generated files by hand** (`src/citationmanager/_wasm/`).
  Regenerate them with `yarn build:wasm`.
- **Do not read or modify** `flm-js-src/` (transpiled FLM sources).
- **Report faithfully.** If a test fails or a step was skipped, say so.

Vocabulary used below: "the crate" is the Rust library `autocitefetch`; "the
binding" is the new Rust cdylib in this repo that wraps it for wasm; "the
adapter" is the JavaScript `CitationDatabaseManager` that wraps the binding;
"host functions" are the JavaScript callbacks (fetch, file ops, sleep, clock,
events) that the binding calls into.

---

## 1. Goal, scope, non-goals

**Goal.** Replace the JavaScript citation fetcher in `src/citationmanager/`
(arXiv, DOI, manual, bibliography-file sources, retry logic, JSON cache) with
the Rust crate `autocitefetch` compiled to WebAssembly, so that `@phfaist/zoodb`
keeps working unchanged on Node.js and in browsers, with zero new runtime npm
dependencies and zero build steps for downstream package users.

**In scope.**

1. A Rust cdylib crate in this repo binding `autocitefetch` to JavaScript via
   `wasm-bindgen`, with all host I/O (HTTP, files, timers, clock, progress)
   delegated to JavaScript callbacks.
2. A build pipeline that produces a self-contained ES module: wasm-bindgen glue
   plus the `.wasm` binary inlined as base64, committed to git under
   `src/citationmanager/_wasm/`.
3. A JavaScript adapter preserving the public API of
   `CitationDatabaseManager`, the four built-in source classes, and the
   `CitationSourceBase` subclassing protocol used by downstream custom sources.
4. Host implementations for Node (global `fetch`, `fs`) and for browsers or
   tests (global `fetch`, in-memory file store).
5. Integration into `ZooFLMProcessor` and `use_flm_processor` without changing
   configuration keys.
6. A command-line migration tool, `tools/migrate_citations_cache.mjs`, that
   converts the legacy cache file `cache_downloaded_info.json` into the
   crate's `citations.jsonl` format, exposed as a package `bin`.
7. Tests, docs, dependency cleanup, CI update, version bump.

**Non-goals.**

- Changing `CitationCompiler` (citeproc-js formatting) beyond what the adapter's
  synchronous read API already satisfies.
- Persisting the cache in the browser (IndexedDB). Browser hosts get an
  in-memory store; browser apps keep using placeholder sources and compiled
  caches as they do today.
- Working around CORS restrictions of arXiv and doi.org in browsers.
- Publishing a separate npm package for the binding.
- Cross-process locking on Node (see D9). Concurrent processes sharing one
  `cache_dir` are unsupported, as they are today.
- Editing the `autocitefetch` crate itself. If a crate change is genuinely
  required, report it; do not vendor a patched copy.

---

## 2. Reference material

Paths are absolute on the author's machine; the supervisor may need to copy
reference files into the workspace if agents cannot read outside the repo.

**This repository (JavaScript, ESM, yarn 4, mocha, eslint).**

- `CLAUDE.md` — project overview, commands, architecture.
- `src/citationmanager/_manager.js` — current `CitationDatabaseManager` (to be
  rewritten as the adapter).
- `src/citationmanager/_cache.js` — JSON cache helper; **stays** (still used by
  `CitationCompiler` for the compiled-citations cache).
- `src/citationmanager/source/{base,arxiv,doi,manual,bibliographyfile}.js` —
  current sources (to be rewritten as spec carriers plus the subclass shim).
- `src/zooflm/citationcompiler.js` — consumer; calls `get_citation_by_id(id)`
  synchronously from citeproc's `retrieveItem`, and `keys()`.
- `src/dbprocessor/flmprocessor.js` — constructs manager and compiler; calls
  `initialize()`, `purge_expired()`, `retrieve_citations()`.
- `src/std/use_flm_processor.js`, `src/std/stdzoodb.js` — config surface.
- `src/util/{url,prify,atomicfilewrite}.js` — helpers to reuse.
- `test/test_citationmanager_manager.js`, `test/test_citationmanager_source_arxiv.js`,
  `test/test_zooflm_citationcompiler.js`, `test/test_std.js` — existing tests.
- `test/_fixtures/` — `arxiv_response_1310.2984.xml`,
  `arxiv_response_1902.07714.xml`, `arxiv_response_quant-ph_0406196.xml`,
  `doi_response_1902.07714.json`, `doi_response_quant-ph_0406196.json`.
- `doc/zoodb.citationmanager.rst` — Sphinx docs to update.
- `.github/workflows/node-js-test.yml` — CI (Node 18, 20, 22).
- `.eslintrc.json`, `.gitignore` — need small additions.

**The crate (Rust).**

- Local checkout: `/Users/philippe/projects/autocitefetch` (workspace with
  `crates/autocitefetch` core, `crates/autocitefetch-std`,
  `crates/autocitefetch-cli`).
- Published: crates.io `autocitefetch = "0.1.0"`. Verified to contain
  everything this brief relies on: `report.rs` (Reporter, ThrottledReporter),
  `ManualSource::new(format_name)`, `CitationManager::with_dropped_csl_fields`,
  `with_policy`, `with_retry_policy`, `with_max_chain_depth`, `with_reporter`,
  `register`, `retrieve`, `get`, `prune`, `store()`, `FileCacheStore<Fs: CacheFs>`,
  `TtlPolicy::make_record`, `csl::{set_id, remove_fields}`.
- Must-read docs in the checkout: `README.md`, `ARCH.md`, `CLAUDE.md`, and the
  module docs of `crates/autocitefetch/src/{fetch,store,env,filecache,report,manager}.rs`
  and `src/source/mod.rs`.
- Template binding to copy structure from: the pyo3 binding in
  `/Users/philippe/Research/util/flm-citations/src/{manager,sources,convert,formats,reporter}.rs`.
  Its spec-dict design, `BoxedSource` newtype, `check_chain_targets`,
  `check_unique_prefixes`, YAML handling (`formats.rs`) and the event
  vocabulary (`reporter.rs::event_dict`) are to be mirrored.
- CLI reference for YAML: `/Users/philippe/projects/autocitefetch/crates/autocitefetch-cli/src/formats.rs`.

**Downstream consumers that must keep working without edits.**

- `/Users/philippe/Research/projects/eczoo/eczoo_sitegen/eczoodb/citeextsources.js`
  (`CiteSourceExternalQecdbOrg`, a `CitationSourceBase` subclass with prefix
  `qecdborg`, `chunk_size: Infinity`, `cache_store_options.cache_duration_ms: 0`,
  stores `{ _ready_formatted: { flm } }`).
- `/Users/philippe/Research/projects/zoodb/zoodbtools/zoodbpreview/citationapiplaceholder.js`
  (`CitationSourceApiPlaceholder`, same protocol, used in browsers for `arxiv`
  and `doi` prefixes).
- `/Users/philippe/Research/projects/eczoo/eczoo_sitegen/eczoodb/eczoodb.js`
  lines 62–83 (the `flm_options.citations` block) and `fullopts.js`
  (`cache_dir` pointing at the committed `_zoodb_citations_cache/` workspace).

**Toolchain present on the author's machine.** Node 23.7 (CI: 18/20/22), yarn
4.6, Rust 1.97 stable, target `wasm32-unknown-unknown` installed, `wasm-pack`
0.15.0. Crates already in the local registry: `wasm-bindgen 0.2.127`,
`wasm-bindgen-futures 0.4.77`, `js-sys 0.3.104`, `serde-wasm-bindgen 0.6.5`.

**Measured.** A release cdylib linking the crate's manager with all four
sources, `opt-level = "s"`, LTO, no bindgen glue, no `wasm-opt`: 217 KB raw,
84 KB gzipped, 294 KB as base64.

---

## 3. Facts about the two sides

### 3.1 Current JavaScript design (what must be preserved from the outside)

- `CitationDatabaseManager(sources, options)`; `sources` is an object mapping
  cite prefix to a source instance. Methods: `initialize()`, `load_cache()`,
  `save_cache()`, `purge_expired()`, `get_citation_by_id(id)` **sync**,
  `get_citation(prefix, key)` **sync**, `keys()` **sync**,
  `retrieve_citations(citations)` async where each item is
  `{cite_prefix, cite_key, encountered_in?: {resource_info?, what?}}`,
  `store_citation(...)`, `store_citation_chained(...)`.
- Every stored entry carries `_hash` (sha256 over the sorted JSON of the entry)
  and `id` set to `prefix:key` as requested. `CitationCompiler` compares
  `_hash` against its compiled cache to skip recompiling.
- Entries may carry `_ready_formatted: { flm: '...' }`, which the compiler uses
  verbatim instead of running citeproc. Chained entries are pointers.
- Sources subclass `CitationSourceBase`, implement `run_retrieve_chunk(ids)` and
  call `await this.citation_manager.store_citation(prefix, key, csl, this.cache_store_options)`
  or `store_citation_chained(...)`. They may use `this.fetch_url(url, opts)`,
  which resolves bare paths relative to `options.fsRootFilePath` via `options.fs`
  and `file:` URLs, and otherwise uses HTTP.
- `ZooFLMProcessor` passes `citations.cache_fs`, `citations.cache_dir`,
  `citations.default_user_agent`, `cache_entry_default_duration_ms`,
  `skip_save_cache`, `citation_manager_options` to the manager and writes
  two files in `cache_dir`: `cache_downloaded_info.json` (manager) and
  `cache_compiled_citations.json` (compiler). Only the first one changes.
- Tests mock HTTP by assigning `source._fetch`.

### 3.2 The crate (what the binding builds on)

- `#![no_std]` + alloc; builds for `wasm32-unknown-unknown`. Executor-agnostic:
  every async trait method returns `BoxFuture<'a, T>` (non-`Send`).
- Host traits: `Fetcher::fetch(Request) -> Result<Response, FetchError>`,
  `CacheStore` (`get/put/remove/entries/flush`), `Clock::now() -> Timestamp`
  (ms since epoch), `Timer::sleep(Duration)`. Optional `Reporter::report(&Event)`
  which is **synchronous**.
- `FileCacheStore<Fs: CacheFs>` lives in the core and only needs a `CacheFs`
  (`read/append/atomic_replace/list/remove/lock_exclusive/try_lock_exclusive`,
  associated `Guard: CacheGuard`). Its `get` and `entries` are served from
  memory and resolve on first poll; `put`/`remove` append to a per-writer
  sidecar; `flush` compacts into `{dir}/{base}.jsonl`. Files it creates are
  `{base}.jsonl` (committable), `._{base}.<writer>.log`,
  `._{base}.<writer>.log.lock`, `._{base}.lock`; one gitignore rule
  `._{base}*` covers the throwaway ones.
- `FileCacheStore::open(fs, dir, base, writer_id)` is async.
- `CitationManager::new(fetcher, store, clock, timer)` then builder methods,
  then `.register(prefix, source)?` per prefix (rejects empty or `:`-containing
  prefixes). `retrieve(&[(prefix, key)]) -> RetrieveReport { failures }` never
  fails for a bad citation; each `CiteFailure { prefix, key, message, origin }`.
  `get(prefix, key) -> CslValue` follows chains and rewrites `id` to the
  normalized `prefix:key`. `prune() -> usize`.
- `Source` trait: `chunk_size()`, `min_interval()`, `default_ttl()`,
  `normalize_key(&str) -> String` (default trim + ASCII lowercase; arXiv and
  bib override to trim only; manual to identity), `chains_to()`,
  `retrieve_chunk(keys, &RetrieveCtx) -> Vec<Resolution>` returning exactly one
  `Resolution { key, outcome }` per key, `Outcome::{Concrete{csl, ttl}, Chained{prefix, key, set_properties}, Failed(Error), Missing(Error)}`.
  `RetrieveCtx { fetcher, timer, clock, prefix, reporter }` borrows.
- Built-in sources: `ArxivSource::new().chain_dois_to(Some("doi")).with_override_dois(iter of (String, Option<String>))`
  (GET only; chunk 100; 3100 ms; TTL 10 d), `DoiSource::new()` (chunk 1;
  1100 ms; TTL 360 d), `ManualSource::new(format_name)` (TTL 0 = ephemeral,
  memory-only), `BibliographyFileSource::new(urls).with_parser(fn).with_ttl(d)`
  or `::from_entries(iter)` (files fetched through the `Fetcher` as `file:`
  URLs; JSON built in; other formats via `with_parser`, a plain `fn` pointer).
- Retry/backoff is interposed by the manager (`RetryingFetcher`) around the
  host fetcher for all Rust sources. `RetryPolicy { max_retries, base, cap, honor_retry_after }`.
- `TtlPolicy { stale_percent, jitter_percent, grace }`; per-record TTL comes
  from the source (`default_ttl` or per-outcome override). Records with zero
  TTL are ephemeral (never written to disk).
- arXiv chained pointers carry `set_properties = { "arxivid": "<id>" }`; the
  CSL `DOI` field is uppercase and verbatim; cache ids are normalized.

---

## 4. Target architecture

```
ZooFLMProcessor (unchanged config)                 CitationCompiler (unchanged)
      │  new CitationDatabaseManager(sources, opts)        │ get_citation_by_id(id)  [sync]
      ▼                                                    │ keys()                 [sync]
src/citationmanager/_manager.js  ── adapter ───────────────┘
      │  builds specs from source instances; owns a Map id → CSL item (+_hash)
      │  host = { fetch, cacheFs, sleep?, now?, onEvent? }
      ▼
src/citationmanager/_load_wasm.js  ── async, memoized init of the inlined wasm
      ▼
src/citationmanager/_wasm/         ── GENERATED: bindgen glue + base64 wasm + .d.ts
      ▼
rust/                              ── the binding crate (cdylib), depends on crates.io autocitefetch
      │  JsFetcher / JsCacheFs / JsClock / JsTimer / JsReporter / JsSource
      ▼
autocitefetch core (worklist retrieval, chaining, TTL, retry, FileCacheStore)
```

Data flow for one build:

1. `initialize()`: load wasm; build host functions; for each source instance
   `await source.get_autocitefetch_spec()`; if `cache_dir/citations.jsonl` is
   absent and `cache_dir/cache_downloaded_info.json` exists, print a warning
   naming the migration tool (7.7); `await CitationManager.open(config)`;
   snapshot `keys()`.
2. `retrieve_citations(list)`: validate prefixes; `await mgr.retrieve(pairs)`;
   `await mgr.getMany(pairs)`; fill the item map (`id` = requested
   `prefix:key`, `_hash` computed); record failures; return failures.
3. Compiler reads items synchronously; compiled cache unchanged.

Directory layout after the work:

```
src/citationmanager/
  index.js                 (unchanged exports)
  _manager.js              adapter (rewritten)
  _cache.js                unchanged (compiler's compiled cache)
  _hostfetch.js            NEW: make_host_fetch(...)
  _cachefs.js              NEW: make_node_cache_fs(fs), make_memory_cache_fs()
  _load_wasm.js            NEW: hand-written loader (async, memoized)
  _wasm/                   GENERATED, committed:
    autocitefetch_wasm.js          wasm-bindgen glue (target web)
    autocitefetch_wasm.d.ts        types
    autocitefetch_wasm_bg.b64.js   `export default "<base64>"`
    BUILD_INFO.json                versions, sizes, build date
  source/
    base.js                shim: CitationSourceBase (subclass protocol kept) + JS-source bridge
    arxiv.js, doi.js, manual.js, bibliographyfile.js   spec carriers (class names/options kept)

rust/                      the binding crate (single cargo package at the repo top level)
  Cargo.toml, Cargo.lock, rust-toolchain.toml, README.md
  src/{lib,host,config,sources,formats,reporter,legacy,convert}.rs
  target/                  gitignored

tools/                     repository tools (ESM scripts, Node only)
  build_wasm.mjs           builds rust/ with wasm-pack and regenerates src/citationmanager/_wasm/
  migrate_citations_cache.mjs   converts a legacy cache_downloaded_info.json into citations.jsonl
```

Conventions for `rust/`: it is a plain cargo package (`[package]` in
`rust/Cargo.toml`), not a workspace. If a second crate is ever needed, turn
`rust/` into a workspace with `rust/crates/<name>/` at that time. Cargo
commands are run from `rust/` (or with `--manifest-path rust/Cargo.toml`).

---

## 5. Design decisions (adopted; override only via the user)

| # | Decision | Adopted answer | Why |
|---|---|---|---|
| D1 | Where the Rust code lives | Top-level `rust/`, a standalone cargo package; generated output in `src/citationmanager/_wasm/`; loader `src/citationmanager/_load_wasm.js`; build and migration scripts in `tools/` | The usual layout for a JS package with a Rust component. `rust/target/` is gitignored, which also keeps it out of the npm tarball (no `.npmignore` exists, so npm follows `.gitignore`). |
| D2 | Crate dependency | `autocitefetch = "0.1"` from crates.io, `Cargo.lock` committed | 0.1.0 has every API this brief needs (verified). Reproducible without git access. |
| D3 | Generated artifacts | Committed to git, like `flm-js-src/`. `yarn build:wasm` regenerates. CI builds the crate to prove it builds but does **not** diff against the committed output. | Downstream users and CI need no Rust toolchain. `wasm-opt` output is not byte-reproducible across versions, so a diff check would be flaky. |
| D4 | Binary delivery | Single `wasm-pack --target web` build; `.wasm` inlined as base64; instantiated with the glue's async `init({ module_or_path: bytes })`. No `import.meta.url` in shipped code. | Bundler-proof and Node-proof. Async instantiation avoids main-thread synchronous-compile limits some browsers impose. |
| D5 | Cache file name | Crate default base `citations` → `cache_dir/citations.jsonl`; throwaway files `._citations*` | Matches the crate's documented layout and the ignore rule downstream users will read about in the crate docs. |
| D6 | Legacy cache | Converted by an explicit tool, `tools/migrate_citations_cache.mjs` (package bin `zoodb-migrate-citations-cache`). The adapter never migrates on its own; when it finds a legacy file and no `citations.jsonl` it prints a warning naming the tool and proceeds. Conversion goes through the binding (`legacyEntries` in the open config), so the on-disk schema is produced by the crate itself. Old file left untouched unless `--remove-legacy`. | An explicit step is easier to reason about and to run once per project; refetching eczoo's DOIs at one per 1.1 s would take hours, so the warning is loud. |
| D7 | Failure semantics | `retrieve_citations` does **not** throw for per-citation failures; it returns the failure list and stores it in `last_failures`. `ZooFLMProcessor.process_citations` logs each failure with where the citation was encountered; under `flm_error_policy: 'abort'` it throws before compiling (as today); under `'continue'` it compiles the successes and continues. It still throws immediately for an unregistered prefix, as today. | Strictly better than today under `continue` (today nothing gets compiled on any failure). |
| D8 | Dropped CSL fields | Adapter default `drop_csl_fields: ['reference']` | Preserves today's `csljsondata.reference = []` behavior of the DOI source and keeps the cache small. |
| D9 | File locking on Node | **No locking.** `tryLockExclusive` always resolves to `null` (the crate's documented conservative answer: "treat the holder as alive"), so the store never creates companion lock files and never reaps another writer's sidecar; `lockExclusive` resolves to a no-op guard. Documented limitation: concurrent processes sharing one `cache_dir` are unsupported (today's JS clobbers the JSON file in that case too). A run interrupted mid-way leaves its `._citations.<writer>.log`, which later flushes fold but never delete; users delete `._citations*` by hand when no build is running. | Node's `fs` has no advisory locks; an emulation with lock files and pid checks was judged too fragile to be worth it. |
| D10 | Custom JS sources and retry | JS sources call the host fetch through `fetch_url`, which keeps a small retry loop honoring `fetch_max_retries`; they do not go through the Rust `RetryingFetcher`. | Passing the borrowed `RetrieveCtx` fetcher to JS would need unsafe lifetime tricks. |
| D11 | Event vocabulary | Same snake_case shapes as the Python binding's `event_dict` (see appendix B). Default sink: `debug('zoodb.citationmanager.progress')`, plus `console.warn` for backoff waits and grace-served failures. Throttled to one sample event per second per prefix unless `on_event` is given. | One vocabulary across all hosts of the crate. |
| D12 | Default key normalization for JS sources | trim only, overridable via `normalizeKey` on the JS source object | Matches legacy behavior closely; never lowercases user-visible text keys. |
| D13 | Browser persistence | None. `make_memory_cache_fs()` is used when `skip_save_cache` is true or when no usable `fs` is given. | Out of scope; browser apps use compiled caches. |
| D14 | Versioning and engines | `@phfaist/zoodb` → `0.2.0`; `engines.node >= 18`; CI matrix unchanged (18/20/22) | On-disk cache format changes. Node 18 has global `fetch`, `atob`, `AbortSignal.timeout`, `TextDecoder`, `FinalizationRegistry`. |
| D15 | Rust code style | `cargo clippy --all-targets -- -D warnings` clean; `rustfmt` allowed (unlike the crate repo, whose CLAUDE.md forbids it there). `#![forbid(unsafe_code)]`. | Ecosystem standard. |
| D16 | YAML | The binding depends on `serde_yaml_ng` and mirrors the CLI's `formats.rs`: bib files use `format: 'auto'` (JSON first, then YAML); the arXiv override file is read and parsed **in JavaScript** with `js-yaml` and passed as data. | Bib files must still be fetched per run through the crate's `Fetcher` so edits are picked up; the override map is data by the crate's own design. |

---

## 6. Hard invariants (compatibility contract)

1. **Config keys.** Every key documented in `src/std/stdzoodb.js` and
   `src/std/use_flm_processor.js` under `flm_options.citations` keeps its name,
   type, default and meaning: `csl_style`, `override_arxiv_dois_file`,
   `preset_bibliography_files`, `default_user_agent`, `cache_dir`,
   `cache_dir_create`, `cache_entry_default_duration_ms`, `skip_save_cache`,
   `sources` (values `true` / `false` / `null` / instance), and
   `citation_manager_options`. Top-level `fs` and `fs_data_dir` unchanged. New
   knobs go **inside** `citation_manager_options` only.
2. **Public JS API.** `CitationDatabaseManager` keeps constructor signature and
   the methods listed in 3.1, with these permitted changes: `purge_expired()`,
   `load_cache()`, `save_cache()` become async (callers in this repo are
   updated to `await`); `store_citation` / `store_citation_chained` on the
   manager throw an explanatory error when called outside a source chunk.
   `retrieve_citations` returns the failure array (see D7).
3. **Source classes.** `CitationSourceArxiv`, `CitationSourceDoi`,
   `CitationSourceManual`, `CitationSourceBibliographyFile`,
   `CitationSourceBase` keep their names, module paths, constructor signatures
   and option names. `check_valid_arxiv_id` stays exported from `arxiv.js`.
4. **Subclass protocol.** A downstream class extending `CitationSourceBase`
   that only implements `run_retrieve_chunk(id_list)` and calls
   `this.citation_manager.store_citation(...)` / `store_citation_chained(...)`
   with `this.cite_prefix` and `this.cache_store_options`, optionally using
   `this.fetch_url(...)`, works with no edits. The two files named in section 2
   under "Downstream consumers" are the acceptance fixtures for this (copy them
   into a test).
5. **Compiler contract.** Items returned by `get_citation_by_id(id)` are plain
   objects with `id === requested id`, a `_hash` string, and either CSL-JSON
   fields or `_ready_formatted`. `keys()` returns strings `prefix:key`.
6. **Package exports.** All entries in `package.json#exports` keep resolving.
7. **No new runtime dependencies** in `package.json`. The shipped wasm module
   has no imports other than its own generated files.
8. **Generated module is environment-neutral.** No `import.meta`, `require(`,
   `process.`, `Buffer`, `__dirname`, `node:` or `fs` references in
   `src/citationmanager/_wasm/*.js` or `_load_wasm.js`.
9. **On-disk schema is the crate's.** `citations.jsonl` is only ever written by
   the crate's `FileCacheStore` (through the binding). JavaScript never
   serializes records itself.

---

## 7. Detailed specifications

### 7.1 The binding crate: `rust/`

**Cargo.toml (essentials).**

```toml
[package]
name = "zoodb-autocitefetch-wasm"
version = "0.1.0"
edition = "2024"
rust-version = "1.86"
license = "MIT"
publish = false
description = "wasm-bindgen binding of the autocitefetch citation retriever for @phfaist/zoodb"

[lib]
crate-type = ["cdylib", "rlib"]     # rlib so `cargo test` can link unit tests on the host

[dependencies]
autocitefetch = "0.1"
wasm-bindgen = "0.2"
wasm-bindgen-futures = "0.4"
js-sys = "0.3"
serde = { version = "1", default-features = false, features = ["alloc", "derive"] }
serde_json = { version = "1", default-features = false, features = ["alloc"] }   # alloc-only, as the crate requires
serde-wasm-bindgen = "0.6"
serde_yaml_ng = "0.10"
hashbrown = { version = "0.15", default-features = false, features = ["default-hasher"] }
console_error_panic_hook = { version = "0.1", optional = true }

[features]
default = []
debug-panics = ["dep:console_error_panic_hook"]

[profile.release]
opt-level = "s"
lto = true
codegen-units = 1
panic = "abort"

[package.metadata.wasm-pack.profile.release]
wasm-opt = ["-Os"]

[package.metadata.wasm-pack.profile.release.wasm-bindgen]
omit-default-module-path = true
```

`rust-toolchain.toml`: `channel = "stable"`, `targets = ["wasm32-unknown-unknown"]`.
`Cargo.lock` committed. Do **not** enable `serde_json/std` anywhere (the crate
is built alloc-only; feature unification would otherwise compile it against a
configuration it excludes, exactly as the pyo3 binding's Cargo.toml explains).

**Modules.**

- `lib.rs` — `#![forbid(unsafe_code)]`; exports `version()` and the
  `CitationManager` class; optional panic hook setup behind `debug-panics`.
- `host.rs` — `JsFetcher`, `JsCacheFs` + `JsGuard`, `JsClock`, `JsTimer`.
- `config.rs` — serde types for the open config and source specs
  (`#[serde(deny_unknown_fields, rename_all = "camelCase")]`), plus the
  manual extraction of `host`, `sources[i].source` (a JS object) and
  `legacyEntries`, which serde cannot deserialize.
- `sources.rs` — spec → `Box<dyn Source>`; `BoxedSource` newtype (forwarding
  every trait method, as in the pyo3 binding) extended with optional overrides
  for `chunk_size`, `min_interval`, `default_ttl`; `JsSource`;
  `check_unique_prefixes`, `check_chain_targets` (copied).
- `formats.rs` — JSON/YAML parsing, copied from the CLI's `formats.rs`.
- `reporter.rs` — `JsReporter` building plain JS objects (appendix B), wrapped
  in `ThrottledReporter` (1000 ms, keyed by the crate's own throttle logic)
  unless `throttleEventsMs` is 0.
- `legacy.rs` — conversion of legacy entries into `CacheRecord`s.
- `convert.rs` — `CslValue` ↔ `JsValue` via `serde_wasm_bindgen` using
  `Serializer::json_compatible()` (plain objects, never `Map`), and error →
  `js_sys::Error` helpers.

**Exported JavaScript API** (TypeScript notation; this is what
`autocitefetch_wasm.d.ts` should end up declaring, modulo bindgen's own style).

```ts
export function version(): { binding: string; autocitefetch: string };

export class CitationManager {
  static open(config: OpenConfig): Promise<CitationManager>;
  readonly prefixes: string[];
  readonly legacyImport: { imported: number; skipped: number } | null;
  retrieve(cites: [string, string][]): Promise<CiteFailure[]>;
  get(prefix: string, key: string): Promise<object>;            // rejects if absent
  getMany(cites: [string, string][]): Promise<(object | null)[]>; // null where absent
  keys(): Promise<string[]>;
  prune(): Promise<number>;
  flush(): Promise<void>;
  free(): void;                                                  // bindgen-generated
}

interface OpenConfig {
  sources: SourceSpec[];
  host: HostFunctions;
  cacheDir: string;                 // '/'-separated
  cacheBase?: string;               // default 'citations'
  writerId: string;                 // unique per process run; supplied by JS
  ttlPolicy?: { stalePercent?: number; jitterPercent?: number; graceDays?: number };
  retry?: { maxRetries?: number; baseMs?: number; capMs?: number; honorRetryAfter?: boolean };
  maxChainDepth?: number;
  dropCslFields?: string[];
  throttleEventsMs?: number;        // default 1000; 0 disables throttling
  legacyEntries?: LegacyEntry[];    // see 7.7
}

interface HostFunctions {
  fetch(req: HostRequest): Promise<HostResponse>;    // required
  cacheFs: HostCacheFs;                               // required
  sleep?(ms: number): Promise<void>;                  // default: setTimeout
  now?(): number;                                     // default: Date.now()
  onEvent?(ev: ProgressEvent): void;                  // sync; must not throw (errors are swallowed and console.error'd)
}
interface HostRequest  { url: string; method: 'GET' | 'POST'; headers: Record<string,string>; body: Uint8Array | null }
interface HostResponse { status: number; headers: Record<string,string>; body: Uint8Array }
// A thrown value with `retryable === true` maps to FetchError::Transport; anything else to FetchError::Other.

interface HostCacheFs {
  read(path: string): Promise<Uint8Array | null>;        // null = absent
  append(path: string, bytes: Uint8Array): Promise<void>;
  atomicReplace(path: string, bytes: Uint8Array): Promise<void>;
  list(dir: string): Promise<string[]>;                   // file names only; [] if dir absent
  remove(path: string): Promise<void>;                    // no-op if absent
  lockExclusive(path: string): Promise<HostGuard>;
  tryLockExclusive(path: string): Promise<HostGuard | null>;
}
interface HostGuard { release(): void }                   // called from Rust Drop; must not throw

type SourceSpec =
  | { kind: 'arxiv';  prefix: string; chainDoisTo?: string | null; overrideDois?: Record<string, string | null>; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
  | { kind: 'doi';    prefix: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
  | { kind: 'manual'; prefix: string; format: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
  | { kind: 'bib';    prefix: string; files?: string[]; entries?: Record<string, object>; format?: 'auto' | 'json' | 'yaml'; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
  | { kind: 'js';     prefix: string; source: JsSourceObject; chunkSize?: number; minIntervalMs?: number; ttlMs?: number };

interface JsSourceObject {
  retrieveChunk(keys: string[], ctx: { prefix: string }): Promise<JsResolution[]>;
  normalizeKey?(key: string): string;     // default: trim
  chainsTo?: string[];                    // default []
}
type JsResolution =
  | { key: string; outcome: 'concrete'; csl: object; ttlMs?: number }
  | { key: string; outcome: 'chained';  prefix: string; targetKey: string; setProperties?: object }
  | { key: string; outcome: 'failed';   message: string }
  | { key: string; outcome: 'missing';  message: string };

interface CiteFailure { prefix: string; key: string; message: string; origin: [string, string] | null }
```

**Behavioral requirements for the binding.**

- `open` is a static returning a `Promise` (`wasm_bindgen_futures::future_to_promise`).
  Instance methods hold `Rc<Inner>` and return promises built from a cloned
  `Rc`, so no `&mut self` across awaits and no borrow panics under concurrent
  calls. Order inside `open`: parse config → build host backends → open
  `FileCacheStore` → build sources → validate unique prefixes and chain targets
  → if `legacyEntries` present, import them (7.7) and `flush()` → create the
  manager with policies, reporter, dropped fields → `register` each source.
- `chainDoisTo` absent means `"doi"`; explicit `null` disables chaining
  (mirror the pyo3 handling exactly).
- `chunkSize`: JavaScript `Infinity` or any non-finite → `usize::MAX`; `0` or
  negative → error. `minIntervalMs`, `ttlMs` → `Duration` from milliseconds;
  `ttlMs: 0` is legal (ephemeral).
- `bib` spec: exactly one of `files` / `entries`; `files` are URL strings passed
  verbatim (`file:` or `http(s):`); parser chosen by `format` (default `auto`).
- `JsSource`: calls `retrieveChunk(keys, {prefix})`, awaits the promise via
  `JsFuture`, converts each element. Keys with no resolution are reported as
  `missing` with message `"source returned no resolution for this key"`. A
  rejected promise or a conversion error maps **every** key of the chunk to
  `failed` with the error message. `normalizeKey` result is used as
  `Source::normalize_key`; `chainsTo` as `Source::chains_to`.
- `JsFetcher`: builds `HostRequest` with lowercase header names and a
  `Uint8Array` body (or `null`); response headers copied as given (Fetch API
  already lowercases them). A rejection whose value has a truthy `retryable`
  property → `FetchError::Transport(message)`, otherwise `FetchError::Other`.
- `JsCacheFs`: byte-for-byte pass-through of paths; `Guard = JsGuard` whose
  `Drop` calls `release()` and ignores any exception; `lock_exclusive` returns
  `Box<dyn CacheGuard>` wrapping the same guard type.
- `JsClock`: `now()` → `host.now()` if given else `js_sys::Date::now()`,
  truncated to `i64` ms. `JsTimer`: `host.sleep(ms)` if given else a promise
  resolved by global `setTimeout` (declare the extern on the global object so
  it works in Node and browsers).
- Reporter: build the event object per appendix B; call `onEvent`; swallow
  exceptions (log with `console.error` via `web_sys`-free `js_sys::Function`
  lookup of `globalThis.console.error`). The crate's `Reporter::report` is
  synchronous; never await inside it.
- All rejections are `js_sys::Error` instances whose message includes context
  (`"citation source `bib:`: ..."`, `"doi:10.1/x: not in cache"`).
- `get`/`getMany` return plain objects (`json_compatible()`), never `Map`.

**Host-side unit tests (`cargo test`).** Pure-logic tests only (spec parsing
from `serde_json::Value`, legacy record construction with a fixed `now`,
formats). The crate compiles on the host target; wasm-only paths are exercised
by the mocha tests.

### 7.2 Build pipeline and loader

`tools/build_wasm.mjs` (run by `yarn build:wasm`; Node only, may import
`node:` modules):

1. `wasm-pack build --release --target web --out-dir target/pkg --out-name autocitefetch_wasm`
   with `rust/` as the working directory (wasm-pack installs a matching
   `wasm-bindgen-cli` and `wasm-opt` itself; fail with a clear message if
   `wasm-pack` or the `wasm32-unknown-unknown` target is missing).
2. Copy `rust/target/pkg/autocitefetch_wasm.js` and `.d.ts` into
   `src/citationmanager/_wasm/`, prepending a `// GENERATED FILE — do not edit; run yarn build:wasm` banner.
3. Write `src/citationmanager/_wasm/autocitefetch_wasm_bg.b64.js` containing
   `export default "<base64 of rust/target/pkg/autocitefetch_wasm_bg.wasm>";`
   with the same banner.
4. Write `BUILD_INFO.json`: binding and crate versions (from `Cargo.lock`),
   wasm-bindgen version, raw and base64 sizes, ISO date.
5. Verify: the copied glue contains no `import.meta`; if it does (wasm-pack
   ignored `omit-default-module-path`), strip the default-path fallback with a
   targeted regex and re-verify; fail the build if any of the forbidden tokens
   of invariant 8 remain.
6. Never copy wasm-pack's generated `package.json`, `.gitignore`, or
   `README.md` from `rust/target/pkg`.

`src/citationmanager/_load_wasm.js` (hand-written, environment-neutral):

```js
import init, * as wasm from './_wasm/autocitefetch_wasm.js';
import b64 from './_wasm/autocitefetch_wasm_bg.b64.js';

let ready = null;
function decode(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
}
export function load_autocitefetch_wasm() {
    ready ??= init({ module_or_path: decode(b64) }).then(() => wasm);
    return ready;
}
```

Budgets (asserted by a test reading `BUILD_INFO.json`): raw wasm ≤ 900 KB,
base64 module ≤ 1.2 MB.

### 7.3 Host implementations (JavaScript)

`src/citationmanager/_hostfetch.js` — `make_host_fetch({ fetch_impl, fs, fs_root_path, user_agent, use_user_agent, timeout_ms })`:

- Returns `async (req) => HostResponse`.
- `file:` URLs and bare paths: resolve with `path_or_url_to_url` from
  `src/util/url.js` (relative to `fs_root_path`), decode the pathname, read
  with `fs.promises.readFile` (or promisified `fs.readFile`). Missing file →
  `{status: 404, headers: {}, body: new Uint8Array()}`; other errors → throw
  with `retryable = false`.
- `http(s):` → `fetch_impl(url, { method, headers, body, redirect: 'follow', signal: AbortSignal.timeout(timeout_ms ?? 120000) })`.
  Add `User-Agent` when `use_user_agent` (default true) and `user_agent` is
  set (browsers drop it silently; that is fine). Any thrown `TypeError`,
  `AbortError`, `TimeoutError` → rethrow with `retryable = true`; anything else
  `retryable = false`. Non-2xx statuses are **returned**, never thrown.
- Response: `{status, headers: Object.fromEntries(response.headers), body: new Uint8Array(await response.arrayBuffer())}`.
- Default `fetch_impl` is `globalThis.fetch`; if absent, `initialize()` throws
  `"No fetch() available; pass citation_manager_options.fetch"`.

`src/citationmanager/_cachefs.js`:

- `make_node_cache_fs(fs)`: implements `HostCacheFs` over `fs.promises` (fall
  back to `promisifyMethods` from `src/util/prify.js`). The module stays
  environment-neutral: no `node:` imports.
  - `read` → `readFile` (ENOENT → null); `append` → `appendFile`;
    `atomicReplace` → reuse `writeFileAtomic` from `src/util/atomicfilewrite.js`;
    `list` → `readdir` (ENOENT → []), files only; `remove` → `unlink` (ENOENT
    ignored).
  - **No locking (D9).** `tryLockExclusive(path)` always resolves to `null`
    without touching the filesystem: the crate reads that as "some other
    holder has it", so it never creates a companion lock file for its own
    sidecar and never reaps any other writer's sidecar. `lockExclusive(path)`
    resolves to a guard whose `release()` is a no-op, also without touching the
    filesystem. Consequently a completed run leaves only `citations.jsonl`
    (the crate deletes its own sidecar unconditionally), an interrupted run
    leaves its `._citations.<writer>.log` behind to be folded, never deleted,
    by later runs, and two processes flushing the same directory at once can
    lose each other's entries, which is the documented single-process
    assumption.
  - Requires the `fs` object to offer `readFile`, `writeFile`, `appendFile`,
    `rename`, `readdir`, `unlink`, `mkdir`; the adapter checks these at
    `initialize()` and throws a message naming the missing ones.
- `make_memory_cache_fs()`: `Map<string, Uint8Array>`; locks always acquired;
  `list` filters by directory prefix. Optional `export()` / `import(map)` for
  tests.

### 7.4 The adapter: `src/citationmanager/_manager.js`

```js
export class CitationDatabaseManager {
    constructor(sources, options)
```

Options (existing ones keep their meaning): `cache_fs` (fs-like object),
`cache_file` (**deprecated**; if given, `cache_dir = dirname(cache_file)` and a
`debug` note is emitted; `cache_base` stays `citations`), `cache_dir`
(default `'.'`), `cache_base` (default `'citations'`),
`cache_entry_default_duration_ms` (default 30 days; used as `ttlMs` for
sources that do not state a duration, i.e. JS sources), `default_use_user_agent`
(default true), `default_user_agent` (default
`'ZooDB-Citations-Fetcher/0.2 (https://github.com/phfaist/zoodb)'`),
`skip_save_cache` (→ memory cache fs). New optional keys (all reachable from
`flm_options.citations.citation_manager_options`): `fetch`, `fs` (for `file:`
URLs; default `cache_fs`), `fs_root_path` (default: the first source's
`fsRootFilePath`, else `''`), `retry`, `ttl_policy`, `max_chain_depth`,
`drop_csl_fields` (default `['reference']`), `on_event`, `progress_debug`
(default true), `writer_id`, `fetch_timeout_ms`.

Behavior:

- `constructor`: stores options; calls `source.set_citation_manager(this, prefix)`
  for each source (kept so sources can read `this.citation_manager.options`).
  No I/O.
- `async initialize()`: `await load_autocitefetch_wasm()`; validate `cache_fs`
  methods (7.3) unless `skip_save_cache`; build host fetch and cache fs; for
  each source: set `source._host_fetch = host_fetch` (used by `fetch_url`) and
  `spec = await source.get_autocitefetch_spec()`; legacy-file warning (7.7);
  `this._wasm = await CitationManager.open({...})`; `this._keys = await this._wasm.keys()`;
  `this._items = new Map()`. Calling `initialize()` twice is a no-op.
- `async retrieve_citations(citations)`: group and dedupe by `prefix:key`; for
  any prefix not in `this._wasm.prefixes` throw
  `` `No source registered for cite prefix ‘${cite_prefix}’ (citation encountered in ${c.encountered_in?.what})` ``
  (same text as today); bump `this._retrieve_run += 1` (sources use it to run
  `source_initialize_run` once per run); `failures = await this._wasm.retrieve(pairs)`;
  `items = await this._wasm.getMany(pairs)`; for each non-null item: copy,
  set `id` to the requested `prefix:key`, compute `_hash` with the existing
  `_compute_entry_hash`, store in `this._items`; refresh `this._keys`; for
  each failure, `console.error` the message and each `encountered_in`
  location of the request it descends from (`origin ?? [prefix, key]`),
  mirroring today's `print_citation_fetch_error`; set `this.last_failures`;
  return the failures array (plain objects, see `CiteFailure`).
- `get_citation_by_id(id)`: sync; from `this._items`; throws
  `` `Item ‘${id}’ not found in citations cache` `` if absent.
  `get_citation(prefix, key)` composes the id.
- `keys()`: sync; returns the last snapshot.
- `async purge_expired()`: `await this._wasm.prune()`.
- `async save_cache()`: `await this._wasm.flush()`. `async load_cache()`: no-op
  with a debug note (kept for API compatibility).
- `store_citation`, `store_citation_chained`: throw
  `"store_citation() must be called from within a source's run_retrieve_chunk()"`.
- `_compute_entry_hash`: unchanged (keeps the `hash.js` dependency).
- Progress: if `on_event` given, forward; else default sink per D11.

### 7.5 Sources

`source/base.js` — `CitationSourceBase`:

- Constructor `(override_options, options, default_options)` and the merge
  order are unchanged. Recognized options unchanged: `source_name`, `fs`,
  `fsRootFilePath`, `chunk_size`, `chunk_retrieve_delay_ms`, `cite_prefix`,
  `chains_to_sources`, `waiting_poll_timeout_ms` (accepted, ignored),
  `cache_store_options`, `use_user_agent`, `user_agent`, `fetch_max_retries`,
  `cache_duration_ms`.
- Removed (they belonged to the old scheduler): `add_retrieve`,
  `add_retrieve_done`, `run`. Document in the class docstring.
- Kept: `set_citation_manager`, `_get_default_headers`, `_get_user_agent`,
  `source_initialize_run`, `source_finalize_run`, `run_retrieve_chunk`
  (abstract), `fetch_url(url, fetch_options)`.
- `fetch_url`: over `this._host_fetch` (set by the adapter). Bare paths resolve
  relative to `fsRootFilePath` via the host fetch's `file:` support (pass
  through `path_or_url_to_url` with the source's own `fsRootFilePath`). Default
  returns the body as a UTF-8 string; `get_response_object: true` returns
  `{status, headers, body, text(), json()}`. Keeps a retry loop for network
  errors and statuses 429/500/502/503/504 honoring numeric `Retry-After`, up to
  `fetch_max_retries`, with the `sleep` bug fixed (actually await the delay).
- New `async get_autocitefetch_spec()`: default implementation returns
  `{ kind: 'js', prefix: this.cite_prefix, source: this._make_js_source(), chunkSize: this.chunk_size, minIntervalMs: this.chunk_retrieve_delay_ms, ttlMs: this.options.cache_store_options?.cache_duration_ms ?? this.options.cache_duration_ms ?? undefined }`.
- `_make_js_source()` returns an object whose `retrieveChunk(keys, ctx)`:
  creates a *collector* `{ options: manager.options, store_citation(prefix, key, csl, opts), store_citation_chained(prefix, key, new_prefix, new_key, set_properties, opts) }`
  that pushes `JsResolution`s (`ttlMs` from `opts?.cache_duration_ms`, else
  the spec's `ttlMs`); calls `this.set_citation_manager(collector, ctx.prefix)`;
  runs `await this.source_initialize_run()` once per adapter retrieve run;
  `await this.run_retrieve_chunk(keys)`; restores the real manager reference;
  returns the collected resolutions (keys not resolved are left for the
  binding to mark `missing`). `normalizeKey` = trim; `chainsTo` =
  `chains_to_sources`. `source_finalize_run` is called by the adapter after
  the whole retrieve; calling `store_citation` from it throws.

Built-in classes (constructors and options unchanged; they override
`get_autocitefetch_spec` and no longer implement `run_retrieve_chunk`):

- `CitationSourceArxiv`: `chain_to_doi` (default true) → `chainDoisTo: 'doi'`
  or `null`; `override_arxiv_dois` (object) and `override_arxiv_dois_file`
  (path or URL, YAML or JSON, read via `fetch_url` and `jsyaml.load` inside
  `get_autocitefetch_spec`) → merged into `overrideDois` (file first, inline
  wins); `api_get_method: 'post'` → `console.warn` that only GET is supported;
  `chunk_size` / `chunk_retrieve_delay_ms` / `cache_duration_ms` → overrides.
  `check_valid_arxiv_id` stays exported (the binding's arXiv source validates
  too; the JS function is kept for callers).
- `CitationSourceDoi`: `{ kind: 'doi' }` + overrides (`chunk_size` is forced
  to 1 as today).
- `CitationSourceManual`: `{ kind: 'manual', format: 'flm' }`, `ttlMs: 0`.
- `CitationSourceBibliographyFile`: `bibliography_files` required (same
  error text); each entry → `path_or_url_to_url(f, {fs_root_path: fsRootFilePath}).href`;
  `format: 'auto'`; `cache_duration_ms === true` keeps today's auto rule
  (60 s if all local, 3 min if any remote) → `ttlMs`.

### 7.6 Integration

`src/dbprocessor/flmprocessor.js`:

- Construct the manager with `cache_fs`, `cache_dir: this.options.citations.cache_dir`,
  `default_user_agent`, `cache_entry_default_duration_ms`, `skip_save_cache`,
  then spread `citation_manager_options` (unchanged precedence). Stop passing
  `cache_file`.
- `process_citations`: `await this.citation_manager.purge_expired()`; then
  `const failures = await retrieve_citations(...)`; if `failures.length` and
  `flm_error_policy === 'abort'`, throw
  `new Error(`${failures.length} citation(s) could not be retrieved: ...`)`
  listing `prefix:key` (origin-attributed) — before compiling; otherwise
  compile as today. Keep the existing try/catch for other errors.
- Docstring: `cache_dir` now holds `citations.jsonl` and
  `cache_compiled_citations.json`; mention the `._citations*` ignore rule.

`src/std/use_flm_processor.js`: no configuration change. Keep building the
four default sources with `fs` and `fsRootFilePath: fs_data_dir`. Pass
`citation_manager_options` through as today. Update the docstring's file
names.

`src/std/stdzoodb.js`: docstring only (cache file name).

### 7.7 Legacy cache migration

Legacy file: `cache_dir/cache_downloaded_info.json`, a JSON object
`{ "<prefix:key>": { "value": <entry>, "expire": <ms since epoch> | "NaN" } }`
written by `src/citationmanager/_cache.js#exportJson`. `<entry>` is either a
CSL-JSON object (with `id`, `_hash`, possibly `_ready_formatted`) or
`{ "chained": { "cite_prefix", "cite_key", "set_properties" } }`.

Adapter side (`initialize()`): if `skip_save_cache` is false, the cache fs
can read, `cache_dir/citations.jsonl` is absent and the legacy file exists,
print one `console.warn`:
`Found legacy citations cache ‘<path>’ but no ‘citations.jsonl’; run ‘yarn zoodb-migrate-citations-cache --cache-dir <dir>’ to convert it, otherwise all citations will be fetched again.`
Then proceed normally. The adapter never converts and never deletes anything.

Tool side (`tools/migrate_citations_cache.mjs`, package bin
`zoodb-migrate-citations-cache`; Node only, may import `node:` modules):

- Usage: `zoodb-migrate-citations-cache --cache-dir <dir> [--legacy-file <path>] [--cache-base citations] [--prefix <name>=<kind>]... [--drop-field <name>]... [--dry-run] [--force] [--remove-legacy]`.
  Defaults: legacy file `<dir>/cache_downloaded_info.json`; prefixes
  `arxiv=arxiv`, `doi=doi`, `manual=manual`, `preset=bib`; any other prefix
  found in the legacy file is treated as kind `js` (trim normalization) and
  listed in the output; `--drop-field reference` by default (the adapter's
  default). Argument parsing with `parseArgs` from `node:util`.
- It reads the legacy JSON, builds `legacyEntries: [{ id, value, expire }]`
  (`expire` as a number, or `null` for `"NaN"`), and calls the binding's
  `CitationManager.open` with: the prefix specs above (bib as
  `{ entries: {} }`, manual as `{ format: 'flm' }`, js with a source object
  whose `retrieveChunk` throws), a host `fetch` that throws, the node cache fs
  from 7.3, `cacheDir`, `cacheBase`, `dropCslFields`, and `legacyEntries`.
  `open` performs the import and flushes; the tool prints
  `imported N, skipped M` and the list of prefixes treated as `js`. With
  `--dry-run` it uses the memory cache fs and writes nothing.
- Refuses to run if `<dir>/<base>.jsonl` already exists, unless `--force`,
  in which case existing ids are kept and only missing ones are imported (the
  binding already guarantees this).
- `--remove-legacy` deletes the legacy file after a successful import;
  otherwise it is left untouched.
- Exit status 0 on success, 1 on a usage error, 2 on an import error.
- Only the tool ever passes `legacyEntries`; the adapter never does.

Binding side (`legacy.rs`), before `register`, with the sources already built:

- Split `id` at the first `:`; unknown prefix → skipped.
- Normalize the key with that prefix's source `normalize_key`.
- `value.chained` → `Payload::Chained { prefix, key: normalize(target source), set_properties }`
  (`set_properties` default `{}`); target prefix unknown → skipped.
- Otherwise `Payload::Concrete(value)` after removing `_hash`, applying
  `csl::remove_fields` for the configured dropped fields, and
  `csl::set_id(normalized id)`.
- TTL: `expire` finite → `expire − now`; ≤ 0 → skipped; `null` → 365 days.
  Record via `TtlPolicy::make_record(payload, now, ttl, &id)` using the
  manager's policy. Existing id in the store → skipped.
- `store.put` each; `store.flush()` once at the end.

### 7.8 Packaging, lint, CI

- `package.json`: `version: 0.2.0`; remove dependencies `feedparser`, `sax`,
  `stream-parser`, `parse-full-name`, `browser-process-hrtime`, `node-fetch`;
  remove the `browser` field; add `"build:wasm": "node tools/build_wasm.mjs"`;
  add `"bin": { "zoodb-migrate-citations-cache": "./tools/migrate_citations_cache.mjs" }`
  (the script starts with `#!/usr/bin/env node`); add
  `"engines": { "node": ">=18" }`; add export
  `"./citationmanager/wasm": "./src/citationmanager/_load_wasm.js"`. Verify
  with `grep -rn` that no removed package is imported anywhere under `src/`.
  Run `yarn install` so `yarn.lock` and the PnP files update.
- `.gitignore`: add `rust/target/`, `**/._citations*`,
  `_zoodb_TEST_citation_info_cache/`.
- `.eslintrc.json`: `"ignorePatterns": ["src/citationmanager/_wasm/"]`; the
  `lint` script also covers `tools/*.mjs`.
- CI `node-js-test.yml`: keep the Node matrix; add a job `rust` that installs
  stable Rust with the wasm32 target and `wasm-pack`, runs
  `cargo clippy --all-targets -- -D warnings`, `cargo test`, and
  `wasm-pack build --release --target web` with `rust/` as the working
  directory (build only; no diff against committed output).
- `CLAUDE.md`: add the Rust crate and generated directory to the architecture
  section, the `yarn build:wasm` command, the toolchain prerequisites, and
  "do not edit `_wasm/` by hand".

### 7.9 Documentation

- `doc/zoodb.citationmanager.rst`: keep the autoclass directives (class and
  module names are unchanged); add a section "How citations are fetched"
  (Rust crate, wasm, host functions), "Cache files" (`citations.jsonl`,
  ignore rule, legacy migration), "Writing a custom source" (protocol from
  7.5, the two new limitations: one resolution per requested key; no stores
  from `source_finalize_run`), and "Options" listing the new
  `citation_manager_options` keys.
- `rust/README.md`: how to build, layout, host interface summary, link to this
  brief.
- `tools/README.md`: one paragraph per tool with its usage line; the migration
  tool's usage is repeated in `doc/zoodb.citationmanager.rst` under "Cache
  files".
- Docstrings in all rewritten JS files (the Sphinx build reads them).

---

## 8. Work packages

Order: WP0 → WP1 → WP2 → WP3 → WP4 → WP5 → WP6. WP1 and the host-side part
of WP3 (`_hostfetch.js`, `_cachefs.js`) can run in parallel since they only
share the interface in 7.1. Each implementer commits on the branch with a
message prefixed by the package id. Reviewers do not modify code; they report.

### WP0 — Scaffolding

Deliverables: directory skeleton of 7.1 and 7.2 (`rust/`, `tools/`,
`src/citationmanager/_wasm/`); `rust/Cargo.toml`, `rust/rust-toolchain.toml`,
empty-but-compiling `rust/src/lib.rs` exporting `version()`;
`tools/build_wasm.mjs` runnable end to end producing `_wasm/` for that stub;
`_load_wasm.js`; `.gitignore`, `.eslintrc.json`, `package.json` script, bin
entry pointing at a placeholder script, and engines; `CLAUDE.md` notes.

Acceptance: `yarn build:wasm` succeeds; `node -e "import('./src/citationmanager/_load_wasm.js').then(m=>m.load_autocitefetch_wasm()).then(w=>console.log(w.version()))"`
prints versions; `git status` shows `target/` ignored; `yarn lint` passes.

Reviewer checklist: invariant 8 tokens absent from `_wasm/*.js` and
`_load_wasm.js` (`grep -nE "import\.meta|require\(|process\.|Buffer|__dirname|node:|\bfs\b"`);
`Cargo.lock` committed; no `serde_json/std` in `Cargo.lock` feature set for
the crate (`cargo tree -e features -i serde_json` shows no `std`).

### WP1 — The binding crate

Sub-packages (one implementer each is fine): WP1a `host.rs`, `config.rs`,
`convert.rs`, `lib.rs` (open/retrieve/get/getMany/keys/prune/flush); WP1b
`sources.rs`, `formats.rs`, `reporter.rs`, `legacy.rs`.

Acceptance: `cargo clippy --all-targets -- -D warnings` and `cargo test` pass;
`yarn build:wasm` succeeds; a scratch mocha test (kept as
`test/test_citationmanager_wasm_module.js`, see section 9) drives the module
directly with mock host functions and the fixtures and shows: arXiv chunk
parsed from the XML fixture; chain to DOI resolved from the JSON fixture;
`get` returns a plain object with uppercase `DOI`, `arxivid`, normalized `id`;
a bad arXiv id yields one failure with `origin` null; a JS source's
`chained` resolution is followed; a JS source omitting a key yields a
`missing` failure; `legacyEntries` produce records readable by `get`; events
arrive with the appendix-B shapes; `keys()`, `prune()`, `flush()` work with
the memory cache fs; the same test with `make_node_cache_fs(fs)` and a temp
dir leaves exactly `citations.jsonl` in the directory after `flush()`.

Reviewer checklist: every `Source` method forwarded in `BoxedSource`;
`chainDoisTo: null` disables chaining; `Infinity` chunk size accepted, `0`
rejected; `json_compatible()` used for every value crossing to JS; no
`&mut self` async methods; reporter never awaits; errors carry context; the
crate's `ARCH.md` invariants respected (no I/O outside `Fetcher`, no ambient
clock, no logging crates).

### WP2 — Host implementations (JavaScript)

Deliverables: `_hostfetch.js`, `_cachefs.js`, tests
`test/test_citationmanager_hostfetch.js`, `test/test_citationmanager_cachefs.js`.

Acceptance: `file:` and bare paths read through a given `fs`; missing file →
404; a directory → non-retryable throw; `TypeError` from `fetch_impl` →
`retryable === true`; 429 returned as a response; headers lowercase; node
cache fs round-trips append/read/list/remove; memory cache fs passes the same
suite. Locking, node cache fs in a temp dir: `tryLockExclusive` resolves to
`null` and creates no file; `lockExclusive` resolves to a guard, creates no
file, and `release()` twice does not throw. Once WP1's module exists: a single
process that opens a `cache_dir`, retrieves through a JS source that resolves
instantly, and flushes leaves exactly `citations.jsonl` in the directory; a
pre-existing foreign `._citations.other.log` with one valid entry line is
folded into `citations.jsonl` and is still present afterwards.

### WP3 — Adapter and sources

Deliverables: `_manager.js`, `source/*.js` per 7.4 and 7.5; tests
`test/test_citationmanager_manager.js` (rewritten) and
`test/test_citationmanager_source_arxiv.js` (adapted); new fixtures
`test/_fixtures/bib_preset.yml`, `test/_fixtures/override_arxiv_dois.yml`,
`test/_fixtures/legacy_cache_downloaded_info.json`; a test file containing
verbatim copies of `CiteSourceExternalQecdbOrg` and
`CitationSourceApiPlaceholder` (section 2) registered under their prefixes.

Acceptance: all invariants in section 6 demonstrated by tests: sync
`get_citation_by_id` after `retrieve_citations`; `id` equals requested id;
`_hash` present and stable across two runs; `_ready_formatted` pass-through;
unknown prefix throws with the legacy message; `retrieve_citations` returns
failures without throwing; `keys()`; `purge_expired()`; the two downstream
classes work unmodified; `override_arxiv_dois_file` YAML honored;
`preset_bibliography_files` YAML resolved; a legacy file with no
`citations.jsonl` produces the warning (captured `console.warn`) and no
conversion; `cache_file` deprecation path works; `skip_save_cache` writes
nothing.
Tests inject `sleep: async () => {}` and a fake `now` through
`citation_manager_options` so rate limits do not slow the suite.

Reviewer checklist: diff the public method list of `CitationDatabaseManager`
and the four source classes against `git show main:src/citationmanager/...`;
every removed method is listed in 7.5; docstrings updated; no reference to
removed npm packages.

### WP4 — Integration

Deliverables: `flmprocessor.js`, `use_flm_processor.js`, `stdzoodb.js`
changes per 7.6; the migration tool `tools/migrate_citations_cache.mjs` per
7.7 with `test/test_tools_migrate_citations_cache.js` (runs the tool as a
child process against a copy of `test/_fixtures/legacy_cache_downloaded_info.json`
in a temp dir, then opens the result with the binding and checks a concrete
entry, a chained arXiv entry, a lowercased DOI id, a skipped expired entry,
`--dry-run` writing nothing, and refusal when `citations.jsonl` exists);
`test/test_std.js` still passing; a new integration test
that builds a standard zoo with `citations: { sources: { arxiv: true, doi: true, manual: true, preset: true, custom: <js source> } }`,
a mock fetch, `skip_save_cache: true`, and checks compiled citation text
reaches the environment's citations provider; an abort-policy test and a
continue-policy test for failures.

Acceptance: `yarn test` green; `git diff main -- src/std/stdzoodb.js src/std/use_flm_processor.js`
touches only docstrings and the removed `cache_file` plumbing.

Reviewer checklist: invariant 1 by reading the diff; failure handling per D7.

### WP5 — Dependencies, CI, docs, version

Deliverables per 7.8 and 7.9; `yarn install` run; `yarn.lock` updated.

Acceptance: `yarn test`, `yarn lint` green; `grep -rn "node-fetch\|feedparser\|parse-full-name\|browser-process-hrtime\|stream-parser\|'sax'" src test` empty;
`node --check` on every file in `src/citationmanager/`; docs build if
`cd doc && poetry run make html` is available (otherwise report skipped).

### WP6 — Final verification and handoff

- Fresh clone simulation: `git stash -u` nothing pending; `rm -rf .yarn/cache node_modules` is **not** needed (PnP); run `yarn && yarn test` on the
  committed artifacts without running `yarn build:wasm`.
- Run the opt-in network test once (`ZOODB_TEST_NETWORK=1 yarn mocha test/test_citationmanager_manager.js`)
  and report the result; failure here is informational.
- Produce a short `dev-docs/AutocitefetchImplementationReport.md`: what was
  done, deviations, known limitations (appendix D), and the exact commands
  the user should run in `eczoo_sitegen` to verify downstream (run
  `yarn zoodb-migrate-citations-cache --cache-dir _zoodb_citations_cache`
  once; run `yarn build` of the site with the linked zoodb; inspect
  `_zoodb_citations_cache/citations.jsonl`; confirm the qecdborg source
  works).

---

## 9. Test plan (summary)

| Test file | Covers |
|---|---|
| `test/test_citationmanager_wasm_module.js` | static checks on generated files (invariant 8, budgets from `BUILD_INFO.json`), `version()`, direct binding tests with mock hosts |
| `test/test_citationmanager_hostfetch.js` | 7.3 fetch adapter |
| `test/test_citationmanager_cachefs.js` | 7.3 node and memory cache fs, on-disk file family |
| `test/test_citationmanager_manager.js` | adapter API and invariants; opt-in network test behind `ZOODB_TEST_NETWORK` |
| `test/test_citationmanager_source_arxiv.js` | arXiv specifics: versioned ids, overrides file, chaining, malformed id error before any fetch |
| `test/test_citationmanager_downstream_sources.js` | verbatim downstream classes |
| `test/test_tools_migrate_citations_cache.js` | 7.7 migration tool, end to end |
| `test/test_std.js`, `test/test_zooflm_citationcompiler.js` | unchanged expectations still hold |
| `test/test_dbprocessor_flmprocessor_citations.js` | WP4 integration, abort/continue policies |

Mock host for tests: `fetch` routes by URL to the fixture files (arXiv XML by
`id_list`, DOI JSON by path), returns 404 otherwise; `sleep` resolves
immediately; `now` is a settable number; `cacheFs` from `make_memory_cache_fs()`.

---

## 10. Definition of done

1. All work packages accepted by their reviewers with evidence.
2. `yarn test` and `yarn lint` pass on Node 18, 20, 22 (CI) using the
   committed `_wasm/` artifacts; the CI `rust` job passes.
3. Section 6 invariants each have at least one test.
4. `git diff main --stat` shows no changes outside: `rust/`, `tools/`,
   `src/citationmanager/`, `src/dbprocessor/flmprocessor.js`, `src/std/*.js`
   (docstrings + `cache_file` plumbing), `test/`, `doc/`, `dev-docs/`,
   `package.json`, `yarn.lock`, `.pnp.*`, `.gitignore`, `.eslintrc.json`,
   `.github/workflows/`, `CLAUDE.md`, `README.md`.
5. The implementation report exists and lists deviations honestly.

---

## Appendix A — Option mapping

| Legacy (unchanged name) | Where it goes now |
|---|---|
| `flm_options.citations.sources.<name>: true/false/null/instance` | `use_flm_processor` builds the same four defaults; instance → `await instance.get_autocitefetch_spec()` |
| `citations.override_arxiv_dois_file` | read + parsed in JS, → `overrideDois` |
| `citations.preset_bibliography_files` | → `bib` spec `files` (`file:` URLs), `format: 'auto'` |
| `citations.default_user_agent` | host fetch `User-Agent` |
| `citations.cache_dir` | `cacheDir`; file `citations.jsonl` |
| `citations.cache_entry_default_duration_ms` | `ttlMs` default for JS sources |
| `citations.skip_save_cache` | memory cache fs |
| `citations.citation_manager_options.{fetch, fs, fs_root_path, retry, ttl_policy, max_chain_depth, drop_csl_fields, on_event, progress_debug, writer_id, fetch_timeout_ms, cache_base}` | new, optional |
| source option `chunk_size` / `chunk_retrieve_delay_ms` / `cache_duration_ms` | `chunkSize` / `minIntervalMs` / `ttlMs` overrides on any kind |
| source option `chains_to_sources` | `chainsTo` (validation only) |
| source option `fetch_max_retries` | `fetch_url` retry loop for JS sources only |
| source option `waiting_poll_timeout_ms`, arXiv `api_get_method: 'post'` | accepted, ignored (warning for `post`) |
| manager method `purge_expired()` | `prune()` (now async) |

## Appendix B — Event object shapes (snake_case, as the Python binding)

`{type:'retrieve_started', cites}`, `{type:'pass_started', pass, cached, to_fetch}`,
`{type:'pass_finished', pass, discovered}`, `{type:'retrieve_finished', considered, failed}`,
`{type:'source_started', prefix, keys, chunks}`, `{type:'source_progress', prefix, done, total}`,
`{type:'source_finished', prefix, done}`,
`{type:'cite_resolved', prefix, key, how:'concrete'|'chained', target?:[prefix,key]}`,
`{type:'cite_failed', prefix, key, message, grace_served}`,
`{type:'wait_started', wait:'rate_limit'|'backoff'|'cache_flush'|'unknown', prefix?, url?, attempt?, expected_ms: number|null}`,
`{type:'wait_finished', wait, prefix?, url?, attempt?}`,
`{type:'request_started', url, attempt}`, `{type:'request_finished', url, status?}` or `{..., error}`,
`{type:'unknown'}` for variants this build does not know.

Default sink formatting mirrors the Python reporter at verbosity 1
(milestones and waits ≥ 2 s via `debug`; backoff waits and grace-served
failures via `console.warn`).

## Appendix C — Commands

```sh
# toolchain (once)
rustup target add wasm32-unknown-unknown
cargo install wasm-pack          # 0.15 present on the author's machine

# build the binding and regenerate committed artifacts
yarn build:wasm

# rust checks
( cd rust && cargo clippy --all-targets -- -D warnings && cargo test )

# convert a project's legacy citation cache (once per project)
yarn zoodb-migrate-citations-cache --cache-dir _zoodb_citations_cache

# js
yarn test
yarn lint
ZOODB_TEST_NETWORK=1 yarn mocha test/test_citationmanager_manager.js   # optional, hits arXiv/doi.org
```

## Appendix D — Known limitations to document

- Concurrent processes sharing one `cache_dir` are unsupported (D9); the
  library does no locking on Node. An interrupted run leaves a
  `._citations.<writer>.log` that later runs fold but never delete; remove
  `._citations*` files by hand when no build is running.
- Browser hosts cannot reach arXiv or doi.org directly because of CORS; use a
  proxying `fetch` in `citation_manager_options.fetch`, or placeholder sources.
- JS custom sources: one resolution per requested key; no stores from
  `source_finalize_run`; no Rust-side retry (their `fetch_url` retries instead).
- `cache_downloaded_info.json` is never read by the library; convert it once
  with `zoodb-migrate-citations-cache` (which can delete it with
  `--remove-legacy`); otherwise the first build refetches everything after a
  warning.
- `keys()` returns normalized ids (`doi:` keys lowercased); `get_citation_by_id`
  accepts the spelling encountered in FLM.
