// Node loader of the FLM wasm module: reads the binary beside the glue
// (`wasm_url` of the environment-neutral ./_load_wasm.js) and instantiates it
// through that loader. Node only.

import { readFile } from 'node:fs/promises';

import { wasm_url, load_zoodb_flm_wasm } from './_load_wasm.js';

let ready = null;

/**
 * Instantiates the module once and resolves to the glue's namespace
 * (`ZooFlmCore`, ...), the same one `load_zoodb_flm_wasm()` resolves to.
 */
export function load_zoodb_flm_wasm_node() {
    ready ??= readFile(wasm_url)
        .then( (bytes) => load_zoodb_flm_wasm(bytes) )
        .catch( (err) => {
            ready = null;
            throw err;
        } );
    return ready;
}
