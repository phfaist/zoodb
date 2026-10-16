// Step-zero check: parse every FLM field of a zoo's data files with the
// prototype wasm module, run the zoo-wide scan, render every object as one
// HTML document, and tally diagnostics and timings.
//
// Usage (read-only on every path it touches except OUT):
//   NODE_MODULES=<a node_modules holding yaml> node run_zoo.mjs \
//       --kind example --data <zoodb-example/data> --schemas <zoodb-example/schemas> [--out <dir>]
//   NODE_MODULES=... node run_zoo.mjs --kind eczoo --data <eczoodb/test_data> --schemas <eczoodb/schemas>
// Milestone 2 options: --citations <cache_compiled_citations.json> fills the citations
// table from the existing compiled cache; the graphics table is always filled from the
// files found beside the data; --srcset N enables Parcel srcset candidates up to density N.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';
import { citationsFromCache, collectGraphics } from './host_tables.mjs';

const args = Object.fromEntries(
    process.argv.slice(2).reduce((acc, a, i, arr) => {
        if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]);
        return acc;
    }, [])
);
const nodeModules = process.env.NODE_MODULES;
if (!nodeModules || !args.kind || !args.data || !args.schemas) {
    console.error('usage: NODE_MODULES=... node run_zoo.mjs --kind example|eczoo --data DIR --schemas DIR [--out DIR]');
    process.exit(2);
}
const YAML = await import(pathToFileURL(path.join(nodeModules, 'yaml/dist/index.js')));

// ---- the zoo data (shared with the other runners) ---------------------------------------
import { makeZooData } from './zoo_data.mjs';
const zoo = makeZooData({ YAML, kind: args.kind, dataDir: args.data, schemasDir: args.schemas });
const { loadSchema, flmFields, loadObjects } = zoo;

// ---- tallies -----------------------------------------------------------------------------

function tally(bucket, diagnostics, where) {
    for (const d of diagnostics) {
        const key = `${d.severity} ${d.identifier}`;
        const t = bucket.get(key) ?? { count: 0, example: null };
        t.count += 1;
        t.example ??= { message: d.message, origin: d.origin, line: d.line, col: d.col, where };
        bucket.set(key, t);
    }
}
const tallyOut = (bucket) => Object.fromEntries([...bucket.entries()].sort((a, b) => b[1].count - a[1].count));

// ---- run -----------------------------------------------------------------------------------

const loaded = await loadZooFlm();
const { ZooFlmCore } = loaded;

let t0 = performance.now();
const engine = new ZooFlmCore({ dollar_math: false, srcset: args.srcset ? { image_max_zoom_factor: Number(args.srcset) } : undefined });
const engine_ms = performance.now() - t0;
const build_diagnostics = engine.build_diagnostics();

const objects = loadObjects();
const parseTally = new Map();
let fields = 0, chars = 0;
t0 = performance.now();
for (const obj of objects) {
    obj.fragments = [];
    for (const f of flmFields(loadSchema(obj.schema), obj.data)) {
        const origin = `${obj.file}#${f.field}`;
        const parsed = engine.parse(f.text, origin, f.mode.layout);
        fields += 1; chars += f.text.length;
        tally(parseTally, parsed.diagnostics, origin);
        obj.fragments.push({ field: f.field, handle: parsed.handle, mode: f.mode });
    }
}
const parse_ms = performance.now() - t0;

const allHandles = objects.flatMap((o) => o.fragments.map((f) => f.handle));
const standaloneHandles = objects.flatMap((o) => o.fragments.filter((f) => f.mode.standalone).map((f) => f.handle));
t0 = performance.now();
const scan = engine.scan(allHandles, standaloneHandles);
const scan_ms = performance.now() - t0;
const scanTally = new Map();
tally(scanTally, scan.diagnostics, 'scan');
const scanSummary = {
    labels: scan.trees.reduce((n, t) => n + t.labels.length, 0),
    refs_resolved: scan.trees.reduce((n, t) => n + t.refs_resolved.length, 0),
    refs_unresolved: scan.trees.reduce((n, t) => n + t.refs_unresolved.length, 0),
    unresolved_sample: [...new Set(scan.trees.flatMap((t) => t.refs_unresolved))].slice(0, 12),
    graphics: scan.trees.flatMap((t) => t.graphics.map((g) => `${g.path} @ ${g.origin}`)),
    cited: scan.cited.length,
    cited_sample: scan.cited.slice(0, 8).map(([k]) => k),
    duplicate_labels: scan.duplicate_labels,
    standalone_fields: standaloneHandles.length,
    standalone_violations: scan.standalone_violations,
};

// Milestone 2: the host tables, filled from what the scan reported (Q6, Q7).
const hostTables = {};
t0 = performance.now();
if (args.citations) {
    const c = citationsFromCache(args.citations, scan.cited.map(([k]) => k));
    engine.set_citations(c.entries);
    hostTables.citations = { set: engine.citations_len(), missing: c.missing };
}
{
    const g = collectGraphics(scan.trees.flatMap((t) => t.graphics), { dataDir: args.data, permalink: (name) => `/pic/${name}` });
    engine.set_graphics(g.entries);
    hostTables.graphics = { set: engine.graphics_len(), missing: g.missing, entries: g.entries.map(({ origin, path: p, media_type, address, kind, width_px, height_px, dpi, width_pt, height_pt }) => ({ origin, path: p, media_type, address, kind, width_px, height_px, dpi, width_pt, height_pt })) };
}
hostTables.ms = Math.round(performance.now() - t0);

const renderTally = new Map();
let render_ms = 0, html_chars = 0, img_tags = [];
const outDir = args.out ?? null;
if (outDir) fs.mkdirSync(outDir, { recursive: true });
let requires = new Set(), definitions = null;
for (const obj of objects) {
    const handles = obj.fragments.map((f) => f.handle);
    if (!handles.length) continue;
    t0 = performance.now();
    const out = engine.render_html(handles, { unresolved_refs_warning: true, title: `${obj.type}:${obj.id}` });
    render_ms += performance.now() - t0;
    tally(renderTally, out.diagnostics, `${obj.type}:${obj.id}`);
    out.requires.forEach((r) => requires.add(r));
    if (definitions == null || out.requires.length > definitions.requires_count) definitions = Object.assign(out.definitions, { requires_count: out.requires.length });
    html_chars += out.trees.reduce((n, t) => n + t.length, 0);
    for (const t of out.trees) img_tags.push(...(t.match(/<img\b[^>]*>/g) ?? []));
    if (outDir) {
        const css = out.definitions.filter((d) => d.kind === 'style').flatMap((d) => d.parts.filter((p) => p.kind === 'inline').map((p) => p.text)).join('\n');
        const body = obj.fragments.map((f, i) => `<section data-field="${f.field}">${out.trees[i]}</section>`).join('\n');
        const pieces = out.pieces.map((p) => `<aside data-piece="${p.name}" data-place="${p.place}">${p.html}</aside>`).join('\n');
        fs.writeFileSync(path.join(outDir, `${obj.type}-${obj.id}.html`),
            `<!doctype html><html><head><meta charset="utf-8"><title>${obj.type}:${obj.id}</title><style>${css}</style></head><body>${body}\n${pieces}</body></html>\n`);
    }
}

console.log(JSON.stringify({
    kind: args.kind,
    wasm: { size_bytes: loaded.wasm_size_bytes, instantiate_ms: Math.round(loaded.instantiate_ms * 10) / 10,
            memory_bytes_at_start: loaded.memory_bytes_at_start, memory_bytes_now: loaded.memory.buffer.byteLength },
    engine: { build_ms: Math.round(engine_ms * 10) / 10, build_diagnostics: build_diagnostics.length },
    objects: objects.length, fields, chars,
    parse: { ms: Math.round(parse_ms), diagnostics: tallyOut(parseTally) },
    scan: { ms: Math.round(scan_ms), ...scanSummary, diagnostics: tallyOut(scanTally) },
    host_tables: hostTables,
    render: { ms: Math.round(render_ms), html_chars, img_tags, requires: [...requires],
              definitions_of_richest_page: (definitions ?? []).map((d) => `${d.kind} ${d.id} (${d.parts.map((p) => p.kind + (p.kind === 'url' ? ' ' + p.text : '')).join(', ')})`),
              diagnostics: tallyOut(renderTally) },
    node_rss_mb: Math.round(process.memoryUsage().rss / 1048576),
}, null, 1));
