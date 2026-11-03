// Sums the code-section size of a wasm module by function-name prefix, using the
// `name` custom section (present in a wasm-pack --profiling build).
// Usage: node wasm_sizes.mjs <file.wasm> [depth]
import fs from 'node:fs';

const buf = fs.readFileSync(process.argv[2]);
const depth = Number(process.argv[3] ?? 2);
let pos = 8; // magic + version
function u32() { let r = 0, s = 0, b; do { b = buf[pos++]; r |= (b & 0x7f) << s; s += 7; } while (b & 0x80); return r >>> 0; }
function str(n) { const s = buf.toString('utf8', pos, pos + n); pos += n; return s; }

let importedFns = 0, fnSizes = [], names = new Map(), total = buf.length, sections = [];
while (pos < buf.length) {
    const id = buf[pos++]; const size = u32(); const start = pos, end = pos + size;
    sections.push([id, size]);
    if (id === 2) { // imports
        const n = u32();
        for (let i = 0; i < n; i++) { str(u32()); str(u32()); const kind = buf[pos++]; if (kind === 0) { importedFns++; u32(); } else if (kind === 1) { pos++; const f = buf[pos++]; u32(); if (f & 1) u32(); } else if (kind === 2) { const f = buf[pos++]; u32(); if (f & 1) u32(); } else if (kind === 3) { pos++; pos++; } }
    } else if (id === 10) { // code
        const n = u32();
        for (let i = 0; i < n; i++) { const sz = u32(); fnSizes.push(sz); pos += sz; }
    } else if (id === 0) { // custom
        const name = str(u32());
        if (name === 'name') {
            while (pos < end) {
                const sub = buf[pos++]; const subSize = u32(); const subEnd = pos + subSize;
                if (sub === 1) { const n = u32(); for (let i = 0; i < n; i++) { const idx = u32(); names.set(idx, str(u32())); } }
                pos = subEnd;
            }
        }
    }
    pos = end;
}
// Rust symbols in the name section are demangled by wasm-bindgen/wasm-opt (`flm_core::lang::...`)
// or still mangled (`_ZN8flm_core...`); handle both roughly.
function crateOf(name) {
    let n = name;
    const v0 = /C(?:s[0-9A-Za-z]+_)?(\d+)/.exec(n);
    if (n.startsWith('_R') && v0) { // v0 mangling: the first crate root, then its path segments
        let i = v0.index + v0[0].length, parts = [];
        let len = +v0[1];
        parts.push(n.slice(i, i + len)); i += len;
        for (;;) { const m = /^(\d+)/.exec(n.slice(i)); if (!m) break; const l = +m[1]; i += m[1].length; let id = n.slice(i, i + l); if (id.startsWith('u')) id = id.slice(1); parts.push(id); i += l; }
        return parts.slice(0, depth).join('::');
    }
    const m = /^_ZN(.*)E$/.exec(n);
    if (m) { // legacy mangling: <len><ident>...
        let s = m[1], parts = []; let i = 0;
        while (i < s.length) { const lm = /^(\d+)/.exec(s.slice(i)); if (!lm) break; const len = +lm[1]; i += lm[1].length; parts.push(s.slice(i, i + len)); i += len; }
        n = parts.filter((p) => !/^(h[0-9a-f]{16}|_\$|\$)/.test(p)).join('::');
    }
    n = n.replace(/^<(.*?) as .*?>::/, (_, t) => t + '::').replace(/^<(.*?)>::/, '$1::').replace(/^(\w+)\.\.\.?/, '$1::');
    const parts = n.split('::');
    return parts.slice(0, depth).join('::');
}
const by = new Map(); const counts = new Map(); let codeTotal = 0, unnamed = 0;
fnSizes.forEach((sz, i) => {
    codeTotal += sz;
    const name = names.get(i + importedFns);
    if (!name) { unnamed += sz; return; }
    const k = crateOf(name);
    by.set(k, (by.get(k) ?? 0) + sz); counts.set(k, (counts.get(k) ?? 0) + 1);
});
const rows = [...by.entries()].sort((a, b) => b[1] - a[1]);
console.log(`file ${total} bytes; code section ${codeTotal} bytes in ${fnSizes.length} functions; unnamed ${unnamed}`);
console.log('sections:', sections.map(([id, s]) => `${id}:${s}`).join(' '));
const limit = Number(process.env.LIMIT ?? 40), filter = process.env.FILTER ?? '';
for (const [k, v] of rows.filter(([k]) => k.startsWith(filter)).slice(0, limit)) console.log(String(v).padStart(9), (100 * v / codeTotal).toFixed(1).padStart(5) + '%', String(counts.get(k)).padStart(5) + ' fns', k);
