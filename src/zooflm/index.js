//
// ZooDb's FLM layer (package export `./zooflm`): the engine over the wasm
// core of flm-rs, the citation compiler, and the environment-neutral loader of
// the wasm module.
//
// Browser code may import it: nothing here imports a `node:` module (the
// citation compiler imports the builtin `path` through
// `../util/atomicfilewrite.js`, as the former `./zooflm` did). The Node loader,
// which reads the module's file with `node:fs/promises`, is not re-exported:
// import it from `./zooflm/wasm-node`.
//

// ZooFlmEngine, and the modules it re-exports: fragments and origins
// (fragment.js), diagnostics and the error policy (diagnostics.js), the
// composer protocol's helpers (compose.js)
export * from './engine.js';

// CitationCompiler, install_csl_flm_output_format
export * from './citationcompiler.js';

// the environment-neutral loader of the wasm module (the Node loader is the
// package export `./zooflm/wasm-node`)
export { load_zoodb_flm_wasm, wasm_url } from './_load_wasm.js';
