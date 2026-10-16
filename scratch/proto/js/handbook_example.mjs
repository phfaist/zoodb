// Milestone 5 of step zero (Q12, R7): the handbook's shape over the EC zoo
// test data. One `latex-recomposed` run over every FLM field of every code,
// the handbook's own LaTeX (its \eczcode, \codefieldsection, aux definitions)
// composed around markers exactly as the HTML composer of milestone 1 does;
// names and other standalone fields come from a snippet run with the same
// output. Object label types are raw; the rest get safe labels, unique over
// the run.
//
// Usage: NODE_MODULES=... node handbook_example.mjs --data <eczoodb/test_data> --schemas <eczoodb/schemas> [--out <dir>]

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';
import { makeZooData } from './zoo_data.mjs';
import { citationsFromCache, collectGraphics } from './host_tables.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, arr) => { if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]); return acc; }, []));
const nodeModules = process.env.NODE_MODULES;
if (!nodeModules || !args.data || !args.schemas) {
    console.error('usage: NODE_MODULES=... node handbook_example.mjs --data DIR --schemas DIR [--out DIR] [--citations FILE]');
    process.exit(2);
}
const YAML = await import(pathToFileURL(path.join(nodeModules, 'yaml/dist/index.js')));
const zoo = makeZooData({ YAML, kind: 'eczoo', dataDir: args.data, schemasDir: args.schemas });

const loaded = await loadZooFlm();
const engine = new loaded.ZooFlmCore({ dollar_math: false });
const timings = {};
const time = (name, f) => { const t0 = performance.now(); const r = f(); timings[name] = Math.round((performance.now() - t0) * 10) / 10; return r; };

// ---- fragments ------------------------------------------------------------------------------
const objects = zoo.loadObjects();
const codes = objects.filter((o) => o.type === 'code');
const parseDiags = [];
time('parse', () => {
    for (const obj of objects) {
        obj.fragments = [];
        for (const f of zoo.flmFields(zoo.loadSchema(obj.schema), obj.data)) {
            const parsed = engine.parse(f.text, `${obj.file}#${f.field}`, f.mode.layout);
            parseDiags.push(...parsed.diagnostics);
            obj.fragments.push({ field: f.field, title: f.title, handle: parsed.handle, standalone: f.mode.standalone });
        }
    }
});
const all = objects.flatMap((o) => o.fragments);
const scan = time('scan', () => engine.scan(all.map((f) => f.handle), all.filter((f) => f.standalone).map((f) => f.handle)));
if (args.citations) engine.set_citations(citationsFromCache(args.citations, scan.cited.map(([k]) => k)).entries);
engine.set_graphics(collectGraphics(scan.trees.flatMap((t) => t.graphics), { dataDir: args.data, permalink: (n) => `figures/${n}` }).entries);
engine.set_external_index(objects.filter((o) => o.type === 'code').map((o) => ({ label: `code:${o.id}`, href: `#code-${o.id}`, display: o.data.name ?? o.id })));

const latexOptions = { raw_label_types: ['code', 'domain', 'kingdom', 'topic'], drop_comments: true, unresolved_refs_warning: true };

// The snippet run: every standalone fragment, LaTeX output (Q9 with Q12).
const snippets = new Map();
const snippetRun = time('snippet_run', () => {
    const handles = all.filter((f) => f.standalone).map((f) => f.handle);
    const out = engine.render_latex(handles, latexOptions);
    handles.forEach((h, i) => snippets.set(h, out.trees[i]));
    return out;
});

// ---- the handbook's composer (genltx_code.js, as strings around markers) ------------------
const M0 = '', M1 = '';
const order = [];
const marker = (handle) => { let i = order.indexOf(handle); if (i < 0) { i = order.length; order.push(handle); } return `${M0}tree:${i}${M1}`; };
const rdr = (f) => (f.standalone ? snippets.get(f.handle) : marker(f.handle));
let body = '';
const aux = [];
time('compose', () => {
    for (const code of codes) {
        const byField = new Map(code.fragments.map((f) => [f.field, f]));
        const name = byField.get('name') ? rdr(byField.get('name')) : code.id;
        aux.push(`\\eczauxDefRefCode{code:${code.id}}{${code.id}}{${name}}`);
        body += `\n\n\\eczcode{${code.id}}{${name}}{${byField.get('introduced') ? '~' + rdr(byField.get('introduced')) : ''}}\n`;
        for (const f of code.fragments) {
            if (f.field === 'name' || f.field === 'introduced') continue;
            body += `\\codefieldsection{${f.title ?? f.field}}\n${rdr(f)}\n`;
        }
    }
});
const run = time('latex_run', () => engine.render_latex(order, latexOptions));
const latex = time('substitute', () => body.replace(/tree:(\d+)/g, (_, i) => run.trees[Number(i)]));
const leftover = (latex.match(//g) ?? []).length;

// ---- checks ----------------------------------------------------------------------------------
const labels = [...latex.matchAll(/\\label\{([^}]*)\}/g)].map((m) => m[1]);
const refs = [...latex.matchAll(/\\flmRef(?:\[[^\]]*\])?\{([^}]*)\}/g)].map((m) => m[1]);
const safeLabels = labels.filter((l) => /^ref\d+$/.test(l));
const rawRefs = refs.filter((r) => /^(code|domain|kingdom|topic):/.test(r));
const cites = (latex.match(/\\flmCite(?:\[[^\]]*\])?\{/g) ?? []).length;
const mathBrackets = (latex.match(/\[\[/g) ?? []).length;
const diagTally = {};
for (const d of [...snippetRun.diagnostics, ...run.diagnostics]) diagTally[`${d.severity} ${d.identifier}`] = (diagTally[`${d.severity} ${d.identifier}`] ?? 0) + 1;

if (args.out) {
    fs.mkdirSync(args.out, { recursive: true });
    fs.writeFileSync(path.join(args.out, 'handbook-body.tex'), latex);
    fs.writeFileSync(path.join(args.out, 'handbook.eczaux'), aux.join('\n') + '\n');
    if (run.style) fs.writeFileSync(path.join(args.out, run.style_name), run.style);
    if (run.document) fs.writeFileSync(path.join(args.out, 'flm-document.tex'), run.document);
}

console.log(JSON.stringify({
    timings,
    codes: codes.length, fragments: all.length, trees_in_run: order.length, snippets: snippets.size,
    parse_diagnostics: parseDiags.length,
    latex_chars: latex.length, leftover_markers: leftover,
    labels: { total: labels.length, safe: safeLabels.length, distinct_safe: new Set(safeLabels).size, raw: labels.filter((l) => !/^ref\d+$/.test(l)) },
    refs: { total: refs.length, raw_object_refs: rawRefs.length, raw_sample: [...new Set(rawRefs)].slice(0, 6), safe: refs.filter((r) => /^ref\d+$/.test(r)).length },
    citations_hooks: cites,
    double_brackets_left: mathBrackets,
    style: run.style_name, style_chars: run.style?.length ?? 0, document_chars: run.document?.length ?? 0,
    diagnostics: diagTally,
    sample: latex.slice(0, 900),
    memory_bytes_now: loaded.memory.buffer.byteLength,
}, null, 1));
