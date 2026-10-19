# Changelog

## 0.3.0 (unreleased)

A clean break: the FLM layer is rewritten, and zoos written for 0.2 need to be
ported.

- **FLM through flm-rs.** FLM content is processed by flm-rs, built to
  WebAssembly and bundled with the package (no Rust toolchain is needed to use
  it). The zoo holds one `ZooFlmEngine` (`zoodb.zoo_flm_engine`); pages are
  rendered with `engine.render_document()` and its composer helpers, and
  `engine.html_scripts()` gives the script tags for a page's `<head>` (MathJax
  4). The old layer is removed: the transpiled Python FLM (`flm-js-src/`), the
  package exports `./flm-js/*` and `./zooflm/scanner`, and the former API of
  `./zooflm` (`make_zoo_flm_environment()`, `ZooHtmlFragmentRenderer`,
  `ZooFLMScanner`, `ZooFLMResourceInfo`, the render utilities). In the
  standard setup, `use_flm_environment` is replaced by `use_flm_engine` and
  `flm_options.environment_options` by `flm_options.engine`.
- **Scan results and render options per run.** `engine.scan()` and
  `processor.object_scan()` report each fragment's term definitions with their
  bodies (for a glossary; `body_origin`, from the new `range_origin()`, gives a
  body's fragment the file position of the body) and every key it cites (with
  `cite_prefix` and `cite_key` in `object_scan()`); `render_document()`,
  `render_fragment()` and `render_latex()` take `render_options`, flm-rs
  render options for that run only (for `render_latex()`, for instance
  `math.emit_flm_math_environment_macro` or
  `latex-recomposed.unicode_overrides`, without changing the engine's
  settings). The core settings refuse the keys a run sets itself
  (`refs.unresolved`, `text.width`, `text.link_addresses`,
  `latex-recomposed.drop_comments`).
- **Package exports of the FLM layer.** `./zooflm` (environment-neutral: the
  engine, the citation compiler and the environment-neutral loader, for Node
  and browsers alike; it imports no `node:` module, though the citation
  compiler still reaches the `path` builtin through the atomic file writer, as
  before, so a bundler must provide it), `./zooflm/engine`, `./zooflm/wasm` (the
  environment-neutral loader of the WebAssembly module), `./zooflm/wasm-node`
  (the Node loader, which reads the module's file) and
  `./zooflm/citationcompiler`.
- **Strict YAML.** Data files are read with the `yaml` package, strict YAML
  1.2 with the core schema, in place of `js-yaml`: dates stay strings, and
  `<<` merge keys are not merged. A quoted value continued on a line indented
  no more than its key is refused; the new tool `zoodb-reindent-yaml` fixes
  such data once.
- **Field positions.** Objects loaded from YAML files carry
  `_zoodb.flm_field_positions` (the line and column of each string value in
  its file, which the FLM diagnostics report), and data dumps carry them too.
  Whether dumps keep them is not decided yet.
- **The loaders need the engine for `.flm` files.** `FlmFilesDbDataLoader`
  reads `.flm` files through the engine (`engine` in its config; the standard
  setup passes `zoodb.zoo_flm_engine`).
- **Objects without a page.** The `object_href` of a context of the FLM
  processor (in the standard setup, `zoo_permalinks.object`) may return `null`
  for an object that has no page: the object and the labels of its fields then
  get no index entry in that context, and a reference to them is unresolved in
  its renders (`flm.refs.unresolved`). Any other value that is not a string is
  still refused by `engine.set_index()`.
- **Truncation keeps commands whole.** `engine.truncate()` cuts a command
  only inside its last argument, and never inside what its element sets
  apart from the text (a `\cite`'s keys, a `\ref`'s or `\hyperref`'s
  target, a `\href`'s address) or inside verbatim content, so that a preview
  parses again without errors; a cut that would fall in an earlier argument
  leaves the command out.
- **The FLM fields of back-references.** A back-reference's copy of a
  relation's FLM field (a `detail`) holds the fragment of the relation's own
  field, compiled once, at every processing, a reload included; `object_scan()`
  counts its references, citations and images for both objects and its labels
  and terms for the relation's object. A reload with no change now gives the
  scan results, fragments and data dumps of a first load (before, a first load
  compiled the copy a second time, under the holder's file and without a
  position, and a reload counted it twice for the relation's object and not
  for the holder). Its diagnostics name the relation's file and position. The
  relations populator records the copies in `_zoodb.copied_fields`, left out
  of data dumps; `FLMSimpleContentCompiler.object_fragments()` leaves them
  out, the new `object_field_fragments()` flags them.
- **Cited works in the search text, as an option.** `engine.render_text()`
  takes `pieces: true`, which places each run's footnotes and list of cited
  works after its text, and `FLMSearchableDocTextValuesAssembler` takes
  `pieces` (in the standard setup `searchable_text_options.flm_pieces`), so
  that an object can be found by the works it cites, as the 0.2 text renderer
  allowed (it wrote each citation in full). By default a citation and a
  footnote are their marks alone in the search text.
- **Bundling with Parcel.** `./zooflm/engine` re-exports the fragment and
  diagnostics modules name by name instead of with `export * from`, which
  Parcel 2.13 mis-bundles with scope hoisting in a module that also imports
  from the re-exported module (browser code importing `is_fragment` or
  `check_error_policy` through the engine, as the field compiler does, then
  failed with `$…$exports is not defined`).
- **Node 20 or later** (`engines`). The unused dependencies `escape-html`,
  `glob` and `url` are dropped.
