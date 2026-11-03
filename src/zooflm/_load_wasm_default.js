// Internal to the package: the default loader of the FLM wasm module, the one
// the engine imports. Node loads this file, as does any resolution that
// ignores the `browser` field of the package's package.json: it reads the
// binary beside the glue (`wasm_url` of ./_load_wasm.js) with
// node:fs/promises and instantiates the module from its bytes. A bundler
// building for a browser substitutes ./_load_wasm_default.browser.js, which
// fetches the binary; the two files export the same names.

import { readFile } from 'node:fs/promises';

import { wasm_url, instantiate_zoodb_flm_wasm } from './_load_wasm.js';

let ready = null;

/**
 * Instantiates the module once and resolves to the glue's namespace
 * (`ZooFlmCore`, ...). Memoized; a failure is forgotten, so that a later call
 * may try again.
 */
export function load_zoodb_flm_wasm() {
    ready ??= readFile(wasm_url)
        .then( (bytes) => instantiate_zoodb_flm_wasm(bytes) )
        .catch( (err) => {
            ready = null;
            throw err;
        } );
    return ready;
}
