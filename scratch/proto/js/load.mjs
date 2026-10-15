// Loads the prototype wasm module in Node (the real loader will be
// environment-neutral and inline or fetch the bytes; see Q17).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const pkg = path.join(here, '..', 'zoodb-flm-wasm', 'pkg');

export async function loadZooFlm() {
    const glue = await import(path.join(pkg, 'zoodb_flm_wasm_proto.js'));
    const wasmPath = path.join(pkg, 'zoodb_flm_wasm_proto_bg.wasm');
    const bytes = fs.readFileSync(wasmPath);
    const t0 = performance.now();
    const exports = await glue.default({ module_or_path: new Uint8Array(bytes) });
    const instantiate_ms = performance.now() - t0;
    return {
        ZooFlm: glue.ZooFlm,
        wasm_size_bytes: bytes.length,
        instantiate_ms,
        memory_bytes_at_start: exports.memory.buffer.byteLength,
        memory: exports.memory,
    };
}
