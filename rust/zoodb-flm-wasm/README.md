# zoodb-flm-wasm

The FLM engine of `@phfaist/zoodb`: the crate `flm-core` (of flm-rs) compiled
to WebAssembly with `wasm-bindgen`, with the ZooDb feature compiled in. One
registry lives in the module's memory (the standard package built from
settings given as data, `math_passthrough`, the ZooDb feature, and services
that answer from host tables); JavaScript parses fields into fragment handles
and runs documents made of handles through the `html`, `text` and
`latex-recomposed` workflows and through a scan. Tags such as Q5, R18 or U2
refer to `dev-docs/initial-design/` (design questions, technical risks,
upstream requests).

A member of the cargo workspace in `rust/` (see [`../README.md`](../README.md)
for the workspace, the prerequisites and the path dependency on flm-rs).

## Modules

- `src/lib.rs` — the wasm-bindgen wrapper, the class `ZooFlmCore`, and the
  TypeScript declarations of every shape that crosses to JavaScript;
  `#![forbid(unsafe_code)]`; `start()` marks the module's one thread as
  flm-core's worker thread.
- `src/engine.rs` — the engine in plain Rust (no wasm types: it compiles and
  tests natively): configuration, fragments by handle, plans cached per
  options key, runs, diagnostics, and the serializable shapes of everything
  that crosses to JavaScript. The native tests live here.
- `src/host.rs` — the citations and graphics tables and the services that
  answer from them.
- `src/zoodb_feature.rs` — the ZooDb feature of the registry.
- `src/truncate.rs` — the truncation helper for previews.
- `build.rs` — the stack link argument (see Invariants).

## The `ZooFlmCore` surface

The core is driven by the engine of `src/zooflm/engine.js` (`ZooFlmEngine`),
which owns one core per zoo; the core can be used directly too. Every value
crosses as plain JSON-compatible data; the generated `.d.ts` declares each
shape (`CoreConfig`, `ParsedOut`, `HtmlOut`, `TextOut`, `LatexOut`, `ScanOut`,
`TruncateOut`, `FieldsOut`, `Definition`, `CoreDiagnostic`, …). An error (a
wrong handle, a released one, a wrong option, a configuration refused) is
thrown as an `Error` with the message, never returned as content. A
configuration, an options object or a table entry with a key the method does
not know is refused, naming the key; a key left out, or set to `null` or
`undefined`, takes its default (the feature settings under `settings`
excepted, which reach flm-core as given). A diagnostic (`CoreDiagnostic`) is
`{ identifier, severity: 'error'|'warning'|'note', message, origin, start,
end, line, col }`: `origin` is the label of the source it is in (a fragment's
origin as given to `parse`, `path#field`, or the label of a source the library
created, such as `index:person:alice` or `citation:arxiv:…`; `null` when it
has neither), `start`/`end` are byte offsets into that source's text,
`line`/`col` are 1-based within it (the column in bytes; the engine recomputes
it in characters for the fragments it holds the source of). `free()` releases a
core.

| method | returns |
|---|---|
| `new ZooFlmCore(config)`, config `{ dollar_math?, settings?, off?, srcset? }`: `settings` one map per standard feature (`{ math: { … } }`, user definitions under `userdefs`: `macros`, `environments`, `specials`), `off` features switched off by name, `srcset` `{ pixel_density_list?, image_max_zoom_factor? }` | the core; throws on an unknown feature or setting, naming the feature and the key |
| `ZooFlmCore.features()` (static) | `[{ name, schema }]`, `schema` the JSON Schema of the feature's settings or `null` |
| `build_diagnostics()` | `[CoreDiagnostic]` |
| `parse(text, origin, layout)`, layout `'blocks'`, `'inline'` or `'auto'` | `{ handle, empty, diagnostics }`; `empty`: the tree holds only whitespace, comments and paragraph breaks |
| `with_layout(handle, layout)` | a new handle sharing the tree, source and parse diagnostics of `handle`, with another layout (not parsed again) |
| `release(handles)` | nothing; every handle is checked first (unknown or already released: an error, nothing released), and a released handle used later is an error; handles are never reused |
| `html_definitions()` | every style and script definition the registry declares, `[{ id, kind: 'style'\|'script', owner, parts: [{ kind: 'inline'\|'file'\|'url'\|'table', text }] }]`, the styles first, each in registration order (the order of a run's definitions table) |
| `render_html(handles, { title?, unresolved_refs_warning? })` | `{ trees: [html], tree_requires: [[definition id]], pieces: [{ name, place: 'before-content'\|'after-content', html, requires }], requires, definitions: [Definition], diagnostics, has_errors }`, one tree per handle in order; `requires` the union of `tree_requires`; `definitions` what the run's document requires, resolved (parts `inline`, `file`, `url`, or `host` for a definition the host supplies), the backend's page style included |
| `render_text(handles, { width?, link_addresses?, unresolved_refs_warning?, per_tree?, pieces? })` | `{ text, trees, tree_diagnostics, diagnostics, has_errors }`; with `per_tree`, `trees` and `tree_diagnostics` hold each tree rendered alone and that run's diagnostics (a reference to another tree does not resolve there) |
| `render_latex(handles, { raw_label_types?, drop_comments?, unresolved_refs_warning? })` | `{ trees, style_name, style, document, diagnostics, has_errors }` |
| `scan(handles, standalone_handles)` | `{ trees: [{ labels, refs_resolved: [href], refs_unresolved: [label], graphics: [{ path, origin }] }], cited: [[key, origin]], duplicate_labels, standalone_violations, diagnostics, has_errors }` |
| `truncate(text, origin, layout, { chars, min_chars?, marker?, first_paragraph? })` | `{ source, truncated, cut_at, diagnostics }`: the shortened FLM source, to be parsed again |
| `parse_fields(text, origin)` | `{ fields: [{ name, start, end, text }], diagnostics }`: the `\begin{field}{name} … \end{field}` of an FLM data file |
| `set_external_index([{ label, href, display }])` | `[CoreDiagnostic]` of the display texts (FLM, parsed inline; origin `index:LABEL`) |
| `set_citations([{ key, text }])`, `set_graphics([GraphicsEntry])` | nothing (see Host tables) |
| `fragment_count()` (live fragments), `external_index_len()`, `citations_len()`, `graphics_len()` | numbers |

A run's diagnostics include the parse diagnostics of the fragments it places
(flm-core's `Run::diagnostics`), as well as the stages'.

`unresolved_refs_warning` defaults to `false` (an unresolved reference is an
Error) for html and LaTeX, `true` for text. The scan is a bare plan request
for the tables the host reads (`flm.citations.keys`, `flm.labels`,
`flm.refs.resolutions`, `flm.element-index`, the standalone check): nothing is
retrieved, resolved or output.

## Host tables

A service of flm-core is fixed when the registry is built and runs
synchronously inside a run, so it cannot await JavaScript. The host fills two
tables before a run, from what the scan reported, and the services look them
up:

- citations, `set_citations([{ key, text }])`: `text` the compiled citation as
  FLM inline source, keyed by `prefix:key` with the prefix in lower case (also
  the work's identity). A missing key is `flm.citations.no-entry`.
- graphics, `set_graphics([{ origin, path, identity, media_type, address,
  kind: 'raster'|'vector', width_px?, height_px?, dpi?, width_pt?, height_pt?
  }])`: keyed by the canonical path of the source the image is written in and
  the path as written. The resolver gives the identity, media type and
  address (it reads no content); the inspector gives the pixel size and
  resolution of a raster image or the size in points of a vector image. A
  miss is `flm.graphics.resolve-failed`.

The external index (`set_external_index`) is installed in every render run:
labels of zoo objects (`person:alice`), their link target and display.

## The ZooDb feature (`zoodb`)

- The `field` environment (element `zoodb.field`, verbatim body, never
  rendered: the html, text and LaTeX plans report it at the node) read by
  `parse_fields`; content outside the fields is `zoodb.fields.stray-content`.
- The standalone check (Q5): the stage `zoodb.standalone.check` provides the
  capability `zoodb.standalone.checked`, which the scan demands; it reads the
  external table `zoodb.standalone.trees` (the handles given as
  `standalone_handles`) and reports every reference point, reference,
  citation and image in those trees as `zoodb.standalone.violation`.
- The `srcset` publish stage `zoodb.graphics.publish.html` (Q7, R8),
  registered and preferred over `flm.graphics.publish.html` only when the
  configuration has `srcset`. It cannot write its table until flm-core offers
  a constructor for `GraphicsPublished` (U2): it reports
  `zoodb.graphics.publish-failed`. The complete path is behind the cargo
  feature `published-insert`, which names that constructor and does not build
  today.

Cargo features: `debug-panics` (installs `console_error_panic_hook`),
`published-insert` (U2, above).

## Building

```sh
yarn build:wasm flm
```

builds into `rust/target/pkg/zoodb-flm-wasm/` and regenerates
`src/zooflm/_wasm/`: `zoodb_flm_wasm.js` (glue), `zoodb_flm_wasm.d.ts`,
`zoodb_flm_wasm_bg.wasm` and `BUILD_INFO.json` (`binding`, `flm_core` and
`flm_core_source`, `wasm_bindgen`, `wasm_size_bytes`, `build_date`). The
module is loaded with `load_zoodb_flm_wasm(source)` of
`src/zooflm/_load_wasm.js` (package export `@phfaist/zoodb/zooflm/wasm`;
`source` is the bytes, a `WebAssembly.Module`, a `Response` or a URL; without
it the browser fetches `wasm_url`) or `load_zoodb_flm_wasm_node()` of
`src/zooflm/_load_wasm_node.js` (`@phfaist/zoodb/zooflm/wasm-node`). Both
resolve to the glue's namespace (`ZooFlmCore`, …), instantiated once;
the engine `ZooFlmEngine.create({ load_wasm })` takes either.

## Checks

From `rust/`:

```sh
cargo clippy -p zoodb-flm-wasm --all-targets -- -D warnings
cargo test -p zoodb-flm-wasm
```

and the module through its loaders, and the engine over it, from the
repository root: `yarn mocha test/test_zooflm_wasm_module.js
test/test_zooflm_engine.js`.

## Invariants

- No I/O of its own: no `std::fs`, no network, no clock; whatever a run needs
  from the host comes in through the tables and the external index.
- `#![forbid(unsafe_code)]`.
- `flm-core` with `default-features = false`: its `parallel` feature (rayon)
  is off, and every run is sequential.
- The stack: flm-core's recursion guard assumes a worker thread with 64 MiB of
  stack. A wasm module has one thread, sized at link time: `build.rs` passes
  `-zstack-size=67108864` to the linker for `wasm32` targets only (not for the
  native build of `cargo test`), and `start()` marks the thread with
  `mark_worker_thread()`, so no entry point tries to spawn one. The module
  therefore reserves about 68 MB of linear memory at instantiation. A
  configurable guard budget in flm-core (U1 in
  `dev-docs/initial-design/05-upstream-requests.md`) is the way to lower it.
- The generated glue is environment-neutral (no `import.meta`, `require(`,
  `process.`, `Buffer`, `__dirname`, `node:`, `fs`), checked by
  `tools/build_wasm.mjs` and by the test.
