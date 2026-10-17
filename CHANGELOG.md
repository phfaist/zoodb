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
- **Node 20 or later** (`engines`). The unused dependencies `escape-html`,
  `glob` and `url` are dropped.
