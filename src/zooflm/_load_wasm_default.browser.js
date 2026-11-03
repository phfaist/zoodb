// Internal to the package: the browser variant of ./_load_wasm_default.js. A
// bundler building for a browser (a web worker included) substitutes this file
// for that one, through the `browser` field of the package's package.json. It
// instantiates the module from `wasm_url` of ./_load_wasm.js, which the glue
// fetches; bundlers copy the file that URL names as an asset. The two files
// export the same names. Environment-neutral, like ./_load_wasm.js.

import { wasm_url, instantiate_zoodb_flm_wasm } from './_load_wasm.js';

/**
 * Instantiates the module once from `wasm_url` and resolves to the glue's
 * namespace (`ZooFlmCore`, ...). Memoized; a failure is forgotten, so that a
 * later call may try again. Rejects with a plain `Error` when `wasm_url` is a
 * `file:` URL, which this variant cannot fetch.
 */
export function load_zoodb_flm_wasm() {
    if (wasm_url.protocol === 'file:') {
        return Promise.reject(new Error(
            '@phfaist/zoodb: the browser variant of the FLM module loader '
            + '(src/zooflm/_load_wasm_default.browser.js) cannot fetch the local file '
            + `${wasm_url.href}. A bundler selects this variant through the "browser" field `
            + 'of the package.json of @phfaist/zoodb; Node loads src/zooflm/_load_wasm_default.js.'
        ));
    }
    return instantiate_zoodb_flm_wasm(wasm_url);
}
