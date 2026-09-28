# Autocitefetch implementation report

Branch: `with-autocitefetch`. Brief: `dev-docs/AutocitefetchImplementationPlan.md`.
Started 2026-09-28 from commit `e606f73 implementation plan`.

## Baseline

Toolchain: Node v23.7.0, yarn 4.6.0, cargo/rustc 1.97.0, target
`wasm32-unknown-unknown` installed, wasm-pack 0.15.0, no `wasm-opt` on PATH
(wasm-pack fetches its own). All reference paths of section 2 of the brief
exist. The yarn cache was missing packages; `yarn install` was run once
(no change to `yarn.lock` or `.pnp.*`).

`yarn test` (before any change): exit 0, `208 passing (9s)`. The existing
citation-manager test did not hit the network in this run.

`yarn lint` (before any change): exit 2, fails to run at all:

```
ESLint: 9.17.0
ESLint couldn't find an eslint.config.(js|mjs|cjs) file.
From ESLint v9.0.0, the default configuration file is now eslint.config.js.
```

The repository ships `.eslintrc.json`, which ESLint 9 only reads when
`ESLINT_USE_FLAT_CONFIG=false` is set. With that variable, the config loads
and reports 23 pre-existing errors, none caused by this work:

| File | Errors |
|---|---|
| `src/citationmanager/_manager.js` | 3 (`process` undefined ×2, unused `err`) — file is rewritten by WP3 |
| `src/dbprocessor/computeddata.js` | 8 |
| `src/resourcecollector/processor/_inspectimagefile.js` | 1 |
| `src/std/stdzoodb.js` | 3 (unused `k`, `ak`, `bk` at lines 277–279) |
| `src/util/getfield.js` | 1 |
| `src/zooflm/_environment.js` | 1 |
| `src/zooflm/_flmutils.js` | 2 |
| `src/zooflm/_fragmentrenderers.js` | 1 |
| `src/zooflm/_renderutils.js` | 1 |
| `src/zooflm/citationcompiler.js` | 2 |

Lint policy adopted for this work (per the supervisor instructions: do not
repair the lint setup beyond a one-line change; lint must not get worse):

- WP0 adds `ESLINT_USE_FLAT_CONFIG=false` to the `lint` script in
  `package.json` (one-line change) so that `.eslintrc.json`, which the brief
  edits in 7.8, is honored.
- "Lint green" for this work means: zero errors in every file created or
  rewritten by this work (`src/citationmanager/**`, `tools/*.mjs`,
  `src/dbprocessor/flmprocessor.js`), and the pre-existing error count in
  untouched files does not increase (20 errors remain outside the rewritten
  `_manager.js`; the 3 in `src/std/stdzoodb.js` are not docstring changes
  and are out of scope per section 10 item 4).

## Per-package summary

### WP0 — Scaffolding (1 implementer round, 1 review round, PASS)

Implementer: created `rust/` (Cargo.toml per 7.1 verbatim plus `build.rs`,
Cargo.lock, rust-toolchain.toml, stub `lib.rs` with `#![forbid(unsafe_code)]`,
`version()` and the `debug-panics` hook, README), `tools/build_wasm.mjs`
(7.2 steps 1–6), placeholder `tools/migrate_citations_cache.mjs`,
`src/citationmanager/_load_wasm.js` (verbatim 7.2), generated
`src/citationmanager/_wasm/` (stub: 17 KB wasm, 23 KB base64 module),
`package.json` (`build:wasm`, `bin`, `engines`, lint script), `.gitignore`,
`.eslintrc.json`, `CLAUDE.md`. The autocitefetch version reported by
`version()` comes from `Cargo.lock` via `build.rs` (the crate exposes no
version constant). Clippy/test/wasm32 check clean; `cargo tree -e features
-i serde_json` shows only `alloc`.

Reviewer: PASS. One should-fix (`yarn.lock` not updated for the new `bin`
field; an immutable CI install would fail), fixed by the supervisor with
`yarn install` before the commit. Notes: glue is byte-identical to wasm-pack
output modulo banner; `init({ module_or_path: bytes })` path confirmed (D4);
base64 escaping verified lossless by sha256 comparison.

### WP2 — Host implementations (JavaScript) (1 implementer round, 1 review round, PASS)

Run before WP1 (see deviation 3). Implementer: `src/citationmanager/_hostfetch.js`
(`make_host_fetch`, `has_default_fetch`), `src/citationmanager/_cachefs.js`
(`make_node_cache_fs`, `make_memory_cache_fs`, `check_cache_fs_methods`),
shared test mock host `test/_helpers/citation_mock_host.js` (routes arXiv
`id_list` and `doi.org` requests to `test/_fixtures/`, `url_map` overrides,
records requests/sleeps, settable `now`, memory cache fs), and 51 tests in
`test/test_citationmanager_hostfetch.js` and `test/test_citationmanager_cachefs.js`.
`yarn test`: 259 passing. Lint unchanged (23 pre-existing).

Reviewer: PASS; verified D9 lock methods never touch the filesystem, values
crossing to wasm are plain `Uint8Array`, methods work detached, mock host
URL shapes match the crate's `arxiv.rs`/`doi.rs`. One should-fix: the memory
cache fs lists an empty directory `''` as "bare names", whereas the crate
joins paths as `{dir}/{name}`, so `cacheDir: ''` would not round-trip. Not
changed in WP2 (its tests pin that semantics); instead WP3's adapter must
normalize an empty `cache_dir` to `'.'` before opening the store, which also
prevents the node fs from writing `/citations.jsonl` at the filesystem root.
Notes carried to known limitations: `atomicReplace` reuses `writeFileAtomic`
(staging file `.atomicwrite.citations.jsonl.<token>.<n>.tmp`, no fsync);
`list()` on a custom fs whose `readdir` lacks `withFileTypes` needs `stat`.

### WP1 — The binding crate

Split by the supervisor into WP1a (core: `host.rs`, `config.rs`,
`convert.rs`, `formats.rs`, `sources.rs`, `lib.rs`) and WP1b (`reporter.rs`,
`legacy.rs`, events and legacy mocha cases).

**WP1a** (1 implementer round, 1 review round, PASS). Implementer: full
`CitationManager` class (`open`, `prefixes`, `retrieve`, `get`, `getMany`,
`keys`, `prune`, `flush`), all five spec kinds, `BoxedSource` with overrides,
`JsSource`, host backends, formats; 26 host unit tests; 35 mocha cases in
`test/test_citationmanager_wasm_module.js` (including the two cases moved
from WP2: single-process run leaves exactly `citations.jsonl`; foreign
sidecar folded and kept, with the sidecar line obtained from a real flush).
wasm 588 018 bytes raw, 784 098 bytes base64 (budgets 900 KB / 1.2 MB).
`yarn test`: 294 passing. Notable implementation choices (all judged within
7.1 by the reviewer): `retrieve`/`prune`/`flush` are serialized through a
FIFO promise queue because the crate forbids `flush` concurrent with
`put`/`remove` (a JS source calling `retrieve`/`prune`/`flush` on the same
manager from inside `retrieveChunk` would deadlock; only collectors are
used there); top-level unknown config keys are checked by hand because
serde-wasm-bindgen does not enforce `deny_unknown_fields` on plain structs;
failure messages carry the crate's `source error: ` prefix; the crate's
arXiv source fetches malformed ids (404 → one failure) so the JS-side
`check_valid_arxiv_id` pre-check remains WP3's; an unregistered prefix is a
failure entry, not a rejection (the adapter validates first, 7.4).

Reviewer: PASS; every checklist item verified with file:line evidence,
independent scratch script confirmed chaining, plain objects, persistence
across two opens with zero fetches, and the exact-`citations.jsonl` layout.
One should-fix carried into WP1b: host fallbacks (`now()` throwing,
`sleep()` rejecting, `normalizeKey` throwing) fall back silently; they must
`console.error`. Note carried into WP1b: document the deadlock case above.

**WP1b** (1 implementer round, 1 review round, PASS). Implementer:
`rust/src/reporter.rs` (`JsReporter`, synchronous, appendix-B shapes,
wrapped in the crate's `ThrottledReporter` unless `throttleEventsMs` is 0,
installed only when `onEvent` is given; exceptions from `onEvent` logged via
`globalThis.console.error` and swallowed), `rust/src/legacy.rs` (7.7 binding
side; `legacyImport` getter), `console_error` helper in `convert.rs`, the
two carried-over findings fixed (fallbacks now log; re-entrancy rule
documented in the `.d.ts` and rustdoc), precise `ProgressEvent` union in the
`.d.ts`, 9 more host unit tests (35 total), 11 mocha cases added (45 in the
module test; `yarn test` 304 passing). wasm 603 337 bytes raw, 804 526
bytes base64. Choices within 7.7 (reviewer agreed): dropped CSL fields are
also stripped from a legacy chained entry's `set_properties` (as the crate
does for fresh chains); absent `expire` = `null` (365 d); non-numeric
`expire` skipped; under 1 ms remaining counts as expired; one `TtlPolicy`
built in `open` shared by the import and the manager.

Reviewer: PASS; every `Event` variant checked field by field against the
crate and the pyo3 `event_dict`; legacy list of 7.7 verified item by item
with line evidence; counts of the mocha data recomputed by hand;
independent script confirmed the node-fs legacy import writes only
`citations.jsonl` without `_hash`/`reference` and re-opens with zero
fetches. Note: an `async` `onEvent` that rejects produces an unhandled
rejection in the host (the contract is a synchronous callback; documented).

### WP3 — Adapter and sources (2 implementer rounds, 2 review rounds, PASS)

Implementer (round 1): `src/citationmanager/_manager.js` rewritten as the
adapter over the wasm binding (options and behavior per 7.4; sync
`get_citation_by_id`/`get_citation`/`keys`; async `purge_expired`/
`save_cache`/`load_cache`; `store_citation*` throw outside a chunk;
`retrieve_citations` returns failures per D7; legacy-file warning per 7.7;
D11 progress sink; empty `cache_dir` → `'.'`; `has_default_fetch` check);
`source/base.js` (subclass protocol kept; `add_retrieve`,
`add_retrieve_done`, `run`, `_fetch`, `_jittered_backoff` removed and listed
in the docstring; new `get_autocitefetch_spec`, `_make_js_source`,
`validate_cite_key`; `fetch_url` over the host fetch with a real retry
loop); `source/{arxiv,doi,manual,bibliographyfile}.js` as spec carriers
with unchanged constructors/options (`check_valid_arxiv_id` kept);
`source/_specutil.js` helper. Tests: `test_citationmanager_manager.js`
(30 + opt-in network block, which passed once when run with
`ZOODB_TEST_NETWORK=1`), `test_citationmanager_source_arxiv.js` (12),
`test_citationmanager_downstream_sources.js` (6; both downstream classes
copied verbatim, only the import line differs), fixtures `bib_preset.yml`,
`override_arxiv_dois.yml`, `legacy_cache_downloaded_info.json` (generated
with the legacy `Cache#exportJson`). `yarn test`: 340 passing; lint 20
(the 3 errors of the old `_manager.js` are gone; none in
`src/citationmanager/`).

Design choices (reviewer judged them within 7.4/7.5): the arXiv malformed-id
pre-check lives in a new `validate_cite_key` hook and yields a D7 failure
entry with zero requests (the crate does not validate ids); after
`initialize()` and each retrieve the adapter preloads every cached entry
into memory under its normalized id so `CitationCompiler.compile_citations(null)`
keeps working; built-in sources pass `chunkSize`/`minIntervalMs`/`ttlMs`
only when set explicitly (so DOI spacing is the crate's 1100 ms instead of
the legacy 1000 ms; arXiv TTL is the crate's 10 d); a throwing
`run_retrieve_chunk` keeps the entries stored before the throw and marks
only the remaining keys failed, with the error message in the failure
entries and on `console.error`.

Reviewer (round 1): PASS; invariants 2–7 and 9 each mapped to test titles
with line evidence; independent end-to-end script confirmed sync reads,
exact `citations.jsonl` layout, and a second manager on the same directory
serving the same `_hash` with zero fetches; confirmed with a fetch-blocking
preload that only `test/test_std.js` (pre-existing, via
`test/test_data/dishes.json` citing `arxiv:1211.3141`) touches the network.
Two should-fix findings sent to a fix round: (1) a source instance reused
by a second manager skipped `source_initialize_run` (run counter restarted
at 1); (2) the chain-target error lacked a remedy hint. Also fixed in the
round: `cache_entry_default_duration_ms` falsy handling restored to the
legacy `||` semantics (invariant 1); purged entries are now dropped from
the in-memory map; an arXiv docstring inaccuracy.

Reviewer (round 2): PASS; each fix verified with scratch scripts (source
reuse across two managers with a second run, colon-containing keys under
purge, un-awaited purge followed by retrieve as in `flmprocessor.js`). One
should-fix (the new helper function sat between the class docblock and the
class, detaching the Sphinx autoclass description) was fixed by the
supervisor by moving the helper above the docblock. `yarn test`: 344
passing.

Notes kept as known limitations: a per-source `user_agent` option no longer
applies to the built-in crate sources (the single host fetch uses the
manager's `default_user_agent`); `get_response_object: true` returns the
plain `{status, ok, headers, body, text(), json()}` object of 7.5 rather
than a Fetch `Response`; the two spellings of one id (requested vs
normalized) are separate in-memory items with different `_hash` values,
as in the legacy manager.

## Deviations from the brief

1. **Invariant-8 check regex (WP0).** The brief's reviewer grep
   `import\.meta|require\(|process\.|Buffer|__dirname|node:|\bfs\b` matches
   one line of the stock wasm-bindgen `--target web` glue,
   `const bytes = await module.arrayBuffer();` (the Fetch API `Response`
   method in the branch that accepts a `Response`). That is not a reference
   to Node's `Buffer`, which is what invariant 8 forbids. The supervisor
   adopted `\bBuffer\b` for the gate check and for the check in
   `tools/build_wasm.mjs`; with it the grep prints nothing. Rewriting the
   generated glue to dodge the literal regex was rejected as hand-patching
   generated code. Listed under open questions for confirmation.
2. **Base64 module escaping (WP0).** `\bfs\b` and `\bBuffer\b` can match by
   chance inside a base64 literal (e.g. `/fs+`). `tools/build_wasm.mjs`
   escapes the first character of any such accidental match as `\uXXXX`
   inside the JS string literal; the decoded bytes are unchanged. This keeps
   the invariant-8 grep deterministic across rebuilds.
3. **Sequencing.** WP2 (`_hostfetch.js`, `_cachefs.js`, their tests and a
   shared test mock host) was run before WP1, because WP1's acceptance test
   needs `make_node_cache_fs` / `make_memory_cache_fs` and WP2's last two
   acceptance items need WP1's module. The brief (section 8) states that
   WP1 and these host-side files can run in parallel; running WP2 first
   makes each package fully testable at its gate. The two WP2 acceptance
   items that need the wasm module ("single process leaves exactly
   `citations.jsonl`"; "foreign `._citations.other.log` folded and kept")
   are delivered and reviewed as part of WP1.
4. **Lint script (WP0).** `ESLINT_USE_FLAT_CONFIG=false` prefixed to the
   `lint` script (see Baseline), plus an `overrides` entry in
   `.eslintrc.json` giving `tools/*.mjs` the node environment.

## Known limitations

(appendix D of the brief plus anything discovered)

## Open questions for the user

1. Confirm the `\bBuffer\b` reading of the invariant-8 grep (deviation 1).
   If the literal regex must hold, the only way is to post-process the
   wasm-bindgen glue in `tools/build_wasm.mjs`.
2. **Chain-target strictness (WP3).** The binding validates chain targets at
   `open` (7.1, `check_chain_targets` copied from the pyo3 binding). An
   arXiv source with its default `chain_to_doi: true` and no `doi` source
   registered now fails at `initialize()` with an explicit error, whereas
   the legacy manager failed lazily and only for papers that had a DOI. A
   configuration `citations.sources: { arxiv: true, doi: false }` therefore
   needs either `doi: true` or an arXiv instance with `chain_to_doi: false`.
   Not changed by the supervisor because it is the brief's specified
   behavior and `src/std/` may only change docstrings (WP4 documents it).

## Downstream verification (eczoo_sitegen)

(filled in at WP6)
