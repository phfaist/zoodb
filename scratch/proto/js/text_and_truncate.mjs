// Milestone 6 of step zero (Q11, R18): plain text per field through one text
// run per object, and the truncation helper over every description's first
// paragraph (what the random-code app does with `truncate_to(500)`).
//
// Usage: NODE_MODULES=... node text_and_truncate.mjs --kind eczoo --data DIR --schemas DIR [--chars N]

import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';
import { makeZooData } from './zoo_data.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, arr) => { if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]); return acc; }, []));
const nodeModules = process.env.NODE_MODULES;
if (!nodeModules || !args.kind || !args.data || !args.schemas) {
    console.error('usage: NODE_MODULES=... node text_and_truncate.mjs --kind example|eczoo --data DIR --schemas DIR');
    process.exit(2);
}
const YAML = await import(pathToFileURL(path.join(nodeModules, 'yaml/dist/index.js')));
const zoo = makeZooData({ YAML, kind: args.kind, dataDir: args.data, schemasDir: args.schemas });
const { ZooFlmCore } = await loadZooFlm();
const engine = new ZooFlmCore({ dollar_math: false });

const objects = zoo.loadObjects();
for (const obj of objects) {
    obj.fragments = [];
    for (const f of zoo.flmFields(zoo.loadSchema(obj.schema), obj.data)) {
        const parsed = engine.parse(f.text, `${obj.file}#${f.field}`, f.mode.layout);
        obj.fragments.push({ field: f.field, text: f.text, handle: parsed.handle, layout: f.mode.layout });
    }
}

// ---- text: one run per object over all its FLM fields -----------------------------------
let t0 = performance.now();
const textDiags = {};
let fields = 0, chars = 0, sample = null;
for (const obj of objects) {
    if (!obj.fragments.length) continue;
    const out = engine.render_text(obj.fragments.map((f) => f.handle), { width: null, link_addresses: false, unresolved_refs_warning: true, per_tree: true });
    for (const d of out.diagnostics) textDiags[d.identifier] = (textDiags[d.identifier] ?? 0) + 1;
    fields += out.trees.length;
    chars += out.trees.reduce((n, t) => n + t.length, 0);
    if (sample == null && obj.fragments.length > 3) sample = { object: `${obj.type}:${obj.id}`, fields: obj.fragments.map((f, i) => [f.field, out.trees[i].slice(0, 80)]).slice(0, 5) };
}
const text_ms = Math.round(performance.now() - t0);

// ---- truncation: every description's first paragraph to 500 chars -------------------------
t0 = performance.now();
let truncated = 0, kept = 0, reparseErrors = 0, truncSample = null;
for (const obj of objects) {
    const f = obj.fragments.find((f) => f.field === 'description') ?? obj.fragments.find((f) => f.field === 'biography');
    if (!f) continue;
    const t = engine.truncate(f.text, `${obj.file}#description`, f.layout, { chars: Number(args.chars ?? 500), first_paragraph: true });
    if (t.truncated) truncated += 1; else kept += 1;
    const again = engine.parse(t.source, `${obj.file}#description:tr`, f.layout);
    if (again.diagnostics.some((d) => d.severity === 'error')) { reparseErrors += 1; console.error(`reparse failed for ${obj.id}:`, again.diagnostics, t.source.slice(-120)); }
    if (truncSample == null && t.truncated && t.cut_at != null) truncSample = { object: `${obj.type}:${obj.id}`, original_chars: f.text.length, cut_at: t.cut_at, tail: t.source.slice(-160) };
}
const truncate_ms = Math.round((performance.now() - t0) * 10) / 10;

console.log(JSON.stringify({
    objects: objects.length,
    text: { ms: text_ms, fields, chars, diagnostics: textDiags, sample },
    truncate: { ms: truncate_ms, truncated, kept_whole: kept, reparse_errors: reparseErrors, sample: truncSample },
}, null, 1));
