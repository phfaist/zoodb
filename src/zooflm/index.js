//
// ZooDb's FLM layer (package export `./zooflm`): the engine over the wasm
// core of flm-rs and the citation compiler.
//
// Browser code may import it. The engine loads its core through the internal
// default loader (./_load_wasm_default.js), which reads the module's file
// with `node:fs/promises` under Node; a bundler building for a browser
// substitutes its browser variant, which fetches the file, through the
// `browser` field of the package's package.json. Nothing else here imports a
// `node:` module (the citation compiler imports the builtin `path` through
// `../util/atomicfilewrite.js`).
//

// ZooFlmEngine, and the modules it re-exports: fragments and origins
// (fragment.js), diagnostics and the error policy (diagnostics.js), the
// composer protocol's helpers (compose.js)
export * from './engine.js';

// CitationCompiler, install_csl_flm_output_format
export * from './citationcompiler.js';
