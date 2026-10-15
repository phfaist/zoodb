// Step-zero check: parse every FLM field of a zoo's data files with the
// prototype wasm module, run the zoo-wide scan, render every object as one
// HTML document, and tally diagnostics and timings.
//
// Usage (read-only on every path it touches except OUT):
//   NODE_MODULES=<a node_modules holding yaml> node run_zoo.mjs \
//       --kind example --data <zoodb-example/data> --schemas <zoodb-example/schemas> [--out <dir>]
//   NODE_MODULES=... node run_zoo.mjs --kind eczoo --data <eczoodb/test_data> --schemas <eczoodb/schemas>

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';

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

// ---- schemas ---------------------------------------------------------------------------

const schemaCache = new Map();
function loadSchema(name) {
    if (!schemaCache.has(name)) {
        const text = fs.readFileSync(path.join(args.schemas, name + '.yml'), 'utf8');
        schemaCache.set(name, YAML.parse(text));
    }
    return schemaCache.get(name);
}
function deref(schema) {
    if (schema && schema.$ref) {
        const m = /^\/schemas\/([A-Za-z0-9_-]+)$/.exec(schema.$ref);
        if (!m) throw new Error(`unsupported $ref ${schema.$ref}`);
        return loadSchema(m[1]);
    }
    return schema;
}
function flmMode(annotation) {
    if (annotation == null || annotation === false) return null;
    if (annotation === true || annotation === 'full') return { layout: 'auto', standalone: false };
    if (annotation === 'standalone') return { layout: 'inline', standalone: true };
    if (annotation === 'block_level') return { layout: 'blocks', standalone: false };
    if (typeof annotation === 'object') {
        if (annotation.enabled === false) return null;
        return { layout: annotation.standalone ? 'inline' : 'auto', standalone: !!annotation.standalone };
    }
    throw new Error(`unknown _flm annotation ${JSON.stringify(annotation)}`);
}
// Yields { field, text, mode } for every FLM field of `value` under `schema`.
function* flmFields(schema, value, field) {
    schema = deref(schema);
    if (schema == null || value == null) return;
    const mode = flmMode(schema._flm);
    if (mode && typeof value === 'string') {
        yield { field, text: value, mode };
        return;
    }
    if (schema.type === 'object' || schema.properties) {
        for (const [k, sub] of Object.entries(schema.properties ?? {})) {
            if (Object.hasOwn(value, k)) yield* flmFields(sub, value[k], field ? `${field}.${k}` : k);
        }
    } else if (schema.type === 'array' && schema.items && Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) yield* flmFields(schema.items, value[i], `${field}[${i}]`);
    }
}

// ---- objects -----------------------------------------------------------------------------

function* ymlFiles(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) yield* ymlFiles(p);
        else if (/\.ya?ml$/.test(ent.name)) yield p;
    }
}
function readYaml(p) { return YAML.parse(fs.readFileSync(p, 'utf8')); }

// [{ type, id, file, data, schema }]
function loadObjects() {
    const out = [];
    const rel = (p) => path.relative(args.data, p);
    if (args.kind === 'example') {
        for (const p of ymlFiles(path.join(args.data, 'people'))) {
            const data = readYaml(p);
            out.push({ type: 'person', id: data.person_id, file: rel(p), data, schema: 'person' });
        }
    } else if (args.kind === 'eczoo') {
        for (const p of ymlFiles(path.join(args.data, 'codes'))) {
            const data = readYaml(p);
            out.push({ type: 'code', id: data.code_id, file: rel(p), data, schema: 'code' });
        }
        for (const p of ymlFiles(path.join(args.data, 'codelists'))) {
            const data = readYaml(p);
            out.push({ type: 'codelist', id: data.list_id, file: rel(p), data, schema: 'codelist' });
        }
        const lists = [
            ['space', 'code_extra/spaces.yml', (d) => d, (d) => d.space_id],
            ['domain', 'codetree/domains.yml', (d) => d, (d) => d.domain_id],
            ['user', 'users/users_db.yml', (d) => d, (d) => d.user_id],
        ];
        for (const [type, file, pick, idOf] of lists) {
            const p = path.join(args.data, file);
            if (!fs.existsSync(p)) continue;
            for (const data of pick(readYaml(p))) out.push({ type, id: idOf(data), file, data, schema: type });
        }
        const kp = path.join(args.data, 'codetree/kingdoms.yml');
        if (fs.existsSync(kp)) {
            const fdata = readYaml(kp);
            for (const [domain_id, kingdoms] of Object.entries(fdata.kingdoms_by_domain_id ?? {})) {
                for (const k of kingdoms) {
                    out.push({ type: 'kingdom', id: k.kingdom_id, file: 'codetree/kingdoms.yml',
                               data: Object.assign({ parent_domain: { domain_id } }, k), schema: 'kingdom' });
                }
            }
        }
    } else {
        throw new Error(`unknown kind ${args.kind}`);
    }
    return out;
}

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
const { ZooFlm } = loaded;

let t0 = performance.now();
const engine = new ZooFlm({ dollar_math: false });
const engine_ms = performance.now() - t0;
const build_diagnostics = engine.build_diagnostics();

const objects = loadObjects();
const parseTally = new Map();
let fields = 0, chars = 0;
t0 = performance.now();
for (const obj of objects) {
    obj.fragments = [];
    for (const f of flmFields(loadSchema(obj.schema), obj.data, '')) {
        const origin = `${obj.file}#${f.field}`;
        const parsed = engine.parse(f.text, origin, f.mode.layout);
        fields += 1; chars += f.text.length;
        tally(parseTally, parsed.diagnostics, origin);
        obj.fragments.push({ field: f.field, handle: parsed.handle, mode: f.mode });
    }
}
const parse_ms = performance.now() - t0;

const allHandles = objects.flatMap((o) => o.fragments.map((f) => f.handle));
t0 = performance.now();
const scan = engine.scan(allHandles);
const scan_ms = performance.now() - t0;
const scanTally = new Map();
tally(scanTally, scan.diagnostics, 'scan');
const scanSummary = {
    labels: scan.trees.reduce((n, t) => n + t.labels.length, 0),
    refs_resolved: scan.trees.reduce((n, t) => n + t.refs_resolved.length, 0),
    refs_unresolved: scan.trees.reduce((n, t) => n + t.refs_unresolved.length, 0),
    unresolved_sample: [...new Set(scan.trees.flatMap((t) => t.refs_unresolved))].slice(0, 12),
    graphics: scan.trees.flatMap((t) => t.graphics),
    cited: scan.cited.length,
    cited_sample: scan.cited.slice(0, 8).map(([k]) => k),
    duplicate_labels: scan.duplicate_labels,
};

const renderTally = new Map();
let render_ms = 0, html_chars = 0;
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
    render: { ms: Math.round(render_ms), html_chars, requires: [...requires],
              definitions_of_richest_page: (definitions ?? []).map((d) => `${d.kind} ${d.id} (${d.parts.map((p) => p.kind + (p.kind === 'url' ? ' ' + p.text : '')).join(', ')})`),
              diagnostics: tallyOut(renderTally) },
    node_rss_mb: Math.round(process.memoryUsage().rss / 1048576),
}, null, 1));
