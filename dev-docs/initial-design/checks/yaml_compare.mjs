// Check for Q15: does the `yaml` package (eemeli/yaml v2) parse the EC zoo's data files
// exactly as `js-yaml` 4 does, and does its document API give usable positions for the
// FLM fields?
//
// Usage (read-only on every path it touches):
//   ECZOO_DATA=<path to eczoo_data> NODE_MODULES=<a node_modules holding yaml and js-yaml> \
//     node dev-docs/initial-design/checks/yaml_compare.mjs
//
// Both libraries are loaded from NODE_MODULES by file URL, so this script needs no
// dependency of its own.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dataRoot = process.env.ECZOO_DATA;
const nodeModules = process.env.NODE_MODULES;
if (!dataRoot || !nodeModules) {
    console.error('set ECZOO_DATA and NODE_MODULES');
    process.exit(2);
}

const YAML = await import(pathToFileURL(path.join(nodeModules, 'yaml/dist/index.js')));
const jsyaml = await import(pathToFileURL(path.join(nodeModules, 'js-yaml/dist/js-yaml.mjs')));

// ---- collect files -------------------------------------------------------------------

function* walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        if (ent.name === '.git' || ent.name === '.github' || ent.name === 'node_modules') continue;
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) yield* walk(p);
        else if (/\.ya?ml$/i.test(ent.name)) yield p;
    }
}
const files = [...walk(dataRoot)].sort();

// ---- canonical form for comparison ---------------------------------------------------

function canon(v) {
    if (v instanceof Date) return { $date: v.toISOString() };
    if (Array.isArray(v)) return v.map(canon);
    if (v && typeof v === 'object') {
        const out = {};
        for (const k of Object.keys(v)) out[k] = canon(v[k]);   // keeps key order
        return out;
    }
    if (typeof v === 'number' && Number.isNaN(v)) return { $nan: true };
    return v;
}

function diffPaths(a, b, at, out) {
    if (out.length > 20) return;
    const ta = typeof a, tb = typeof b;
    if (a === null || b === null || ta !== 'object' || tb !== 'object') {
        if (JSON.stringify(a) !== JSON.stringify(b)) out.push({ at, jsyaml: a, yaml: b });
        return;
    }
    const ka = Object.keys(a), kb = Object.keys(b);
    if (JSON.stringify(ka) !== JSON.stringify(kb)) {
        out.push({ at, keys_jsyaml: ka, keys_yaml: kb });
        return;
    }
    for (const k of ka) diffPaths(a[k], b[k], at + '.' + k, out);
}

// ---- 1. parse with both, compare -----------------------------------------------------

const texts = new Map(files.map((f) => [f, fs.readFileSync(f, 'utf8')]));
const report = { files: files.length, jsyaml_errors: [], yaml_errors: [], mismatches: [] };

let t0 = performance.now();
const byJsyaml = new Map();
for (const f of files) {
    try { byJsyaml.set(f, jsyaml.load(texts.get(f))); }
    catch (e) { report.jsyaml_errors.push({ file: f, error: String(e).split('\n')[0] }); }
}
const tJsyaml = performance.now() - t0;

t0 = performance.now();
const byYaml = new Map();
for (const f of files) {
    try { byYaml.set(f, YAML.parse(texts.get(f))); }
    catch (e) { report.yaml_errors.push({ file: f, error: String(e).split('\n')[0] }); }
}
const tYaml = performance.now() - t0;

// yaml also reports warnings (e.g. for YAML 1.1 constructs) without throwing: count them.
let yamlWarnings = 0;
const warningSamples = [];
for (const f of files) {
    const doc = YAML.parseDocument(texts.get(f));
    if (doc.warnings.length || doc.errors.length) {
        yamlWarnings += doc.warnings.length + doc.errors.length;
        if (warningSamples.length < 8) {
            warningSamples.push({ file: path.relative(dataRoot, f),
                                  msgs: [...doc.errors, ...doc.warnings].map((w) => w.message.split('\n')[0]) });
        }
    }
}

for (const f of files) {
    if (!byJsyaml.has(f) || !byYaml.has(f)) continue;
    const a = canon(byJsyaml.get(f)), b = canon(byYaml.get(f));
    const out = [];
    diffPaths(a, b, '', out);
    if (out.length) report.mismatches.push({ file: path.relative(dataRoot, f), diffs: out.slice(0, 5) });
}

// ---- 2. positions through the document API --------------------------------------------

const pos = { scalars: 0, literal: 0, literal_exact: 0, literal_inexact: [], folded: 0, plain_multiline: 0,
              plain_single: 0, quoted: 0, fields: {} };

function fieldPath(pathNodes, key) {
    const parts = [];
    for (const n of pathNodes) {
        if (YAML.isPair(n)) parts.push(String(n.key?.value ?? n.key));
    }
    return parts.join('.');
}

t0 = performance.now();
for (const f of files) {
    const text = texts.get(f);
    const lineCounter = new YAML.LineCounter();
    const doc = YAML.parseDocument(text, { lineCounter, keepSourceTokens: true });
    YAML.visit(doc, {
        Scalar(key, node, pathNodes) {
            if (key === 'key') return;            // only values
            if (typeof node.value !== 'string') return;
            pos.scalars += 1;
            const fp = fieldPath(pathNodes);
            const last = fp.split('.').pop();
            pos.fields[last] = (pos.fields[last] ?? 0) + 1;
            const [start, valueEnd] = node.range;
            if (node.type === 'BLOCK_LITERAL') {
                pos.literal += 1;
                // the value's lines are the source lines after the header line, each
                // with the block's indentation removed
                const bodyStart = text.indexOf('\n', start) + 1;
                const body = text.slice(bodyStart, valueEnd);
                const bodyLines = body.split('\n');
                const indent = Math.min(...bodyLines.filter((l) => l.trim() !== '').map((l) => l.match(/^ */)[0].length));
                const valueLines = node.value.replace(/\n+$/, '').split('\n');
                let ok = true;
                for (let i = 0; i < valueLines.length; i++) {
                    const bl = bodyLines[i] ?? null;
                    if (bl === null) { ok = false; break; }
                    const expect = bl.trim() === '' ? '' : bl.slice(indent);
                    if (expect !== valueLines[i]) { ok = false; break; }
                }
                if (ok) pos.literal_exact += 1;
                else if (pos.literal_inexact.length < 5) {
                    pos.literal_inexact.push({ file: path.relative(dataRoot, f), field: fp,
                                               header: lineCounter.linePos(start) });
                }
            } else if (node.type === 'BLOCK_FOLDED') {
                pos.folded += 1;
            } else if (node.type === 'PLAIN') {
                if (text.slice(start, valueEnd).includes('\n')) pos.plain_multiline += 1;
                else pos.plain_single += 1;
            } else {
                pos.quoted += 1;
            }
        },
    });
}
const tDoc = performance.now() - t0;

// ---- report ----------------------------------------------------------------------------

console.log(JSON.stringify({
    files: report.files,
    time_ms: { jsyaml_load: Math.round(tJsyaml), yaml_parse: Math.round(tYaml), yaml_parseDocument_with_positions: Math.round(tDoc) },
    jsyaml_errors: report.jsyaml_errors.length, jsyaml_error_samples: report.jsyaml_errors.slice(0, 3),
    yaml_errors: report.yaml_errors.length, yaml_error_samples: report.yaml_errors.slice(0, 3).map((e) => ({ file: path.relative(dataRoot, e.file), error: e.error })),
    yaml_warnings: yamlWarnings, yaml_warning_samples: warningSamples,
    mismatching_files: report.mismatches.length,
    mismatch_samples: report.mismatches.slice(0, 10),
    positions: { ...pos, fields: Object.fromEntries(Object.entries(pos.fields).sort((a, b) => b[1] - a[1]).slice(0, 12)) },
}, null, 1));
