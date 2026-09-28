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
3. **Lint script (WP0).** `ESLINT_USE_FLAT_CONFIG=false` prefixed to the
   `lint` script (see Baseline), plus an `overrides` entry in
   `.eslintrc.json` giving `tools/*.mjs` the node environment.

## Known limitations

(appendix D of the brief plus anything discovered)

## Open questions for the user

1. Confirm the `\bBuffer\b` reading of the invariant-8 grep (deviation 1).
   If the literal regex must hold, the only way is to post-process the
   wasm-bindgen glue in `tools/build_wasm.mjs`.

## Downstream verification (eczoo_sitegen)

(filled in at WP6)
