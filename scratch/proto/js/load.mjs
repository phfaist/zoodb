// Loads the FLM wasm module built by `yarn build:wasm` (rust/zoodb-flm-wasm ->
// src/zooflm/_wasm/) in Node and reports its size, the time to instantiate it
// and its initial memory. The bytes are read first, from the file the Node
// loader reads (`wasm_url`), and handed to the neutral loader, as
// `load_zoodb_flm_wasm_node()` does, so that `instantiate_ms` times the
// instantiation alone, as in step zero (07).
import fs from 'node:fs';

import { wasm_url, load_zoodb_flm_wasm } from '../../../src/zooflm/_load_wasm.js';

export async function loadZooFlm() {
    const bytes = fs.readFileSync(wasm_url);
    const t0 = performance.now();
    const glue = await load_zoodb_flm_wasm(bytes);
    const instantiate_ms = performance.now() - t0;
    // Once instantiated, the glue's init returns the instance's exports.
    const exports = await glue.default();
    return {
        ZooFlmCore: glue.ZooFlmCore,
        wasm_size_bytes: bytes.length,
        instantiate_ms,
        memory_bytes_at_start: exports.memory.buffer.byteLength,
        memory: exports.memory,
    };
}
