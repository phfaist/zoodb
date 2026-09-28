import init, * as wasm from './_wasm/autocitefetch_wasm.js';
import b64 from './_wasm/autocitefetch_wasm_bg.b64.js';

let ready = null;
function decode(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
}
export function load_autocitefetch_wasm() {
    ready ??= init({ module_or_path: decode(b64) }).then(() => wasm);
    return ready;
}
