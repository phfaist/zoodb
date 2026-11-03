// The person pages of zoodb-example composed through the engine
// (src/zooflm/engine.js, step 2): the composition of milestone 1 of step zero
// (07) through `ZooFlmEngine.render_document()`: fragments with origins, the
// scan, the citations and graphics tables filled from it (milestone 2), the
// snippet run of the standalone names, the index of the people, and one
// composer call per page with the helpers ne, rdr, rdrblock, ref, piece.
//
// Usage: NODE_MODULES=<node_modules holding yaml> node compose_example.mjs \
//            --data <zoodb-example/data> --schemas <zoodb-example/schemas> \
//            [--out <dir>] [--index-size N] [--srcset N] [--citations <cache_compiled_citations.json>]

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';
import { citationsFromCache, collectGraphics } from './host_tables.mjs';
import { load_zoodb_flm_wasm_node } from '../../../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine } from '../../../src/zooflm/engine.js';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]);
    return acc;
}, []));
const nodeModules = process.env.NODE_MODULES;
if (!nodeModules || !args.data || !args.schemas) {
    console.error('usage: NODE_MODULES=... node compose_example.mjs --data DIR --schemas DIR [--out DIR] [--index-size N]');
    process.exit(2);
}
const YAML = await import(pathToFileURL(path.join(nodeModules, 'yaml/dist/index.js')));

// ---- the zoo --------------------------------------------------------------------------------

const people = {};
for (const name of fs.readdirSync(path.join(args.data, 'people')).filter((n) => /\.ya?ml$/.test(n)).sort()) {
    const data = YAML.parse(fs.readFileSync(path.join(args.data, 'people', name), 'utf8'));
    people[data.person_id] = Object.assign({ _file: `people/${name}` }, data);
}
// back-references as the relations populator would make them
for (const p of Object.values(people)) {
    for (const rel of p.relations?.parents ?? []) {
        const other = people[rel.person_id];
        ((other.relations ??= {}).children ??= []).push({ person_id: p.person_id });
    }
    for (const rel of p.relations?.friends ?? []) {
        const other = people[rel.person_id];
        ((other.relations ??= {}).friend_of ??= []).push({ person_id: p.person_id, friend_detail: rel.friend_detail });
    }
}
const permalink = (type, id) => `/${type}/${id}`;

// ---- the engine: fragments, scan, tables, snippets, index ------------------------------------

const timings = {};
const ms = (t0) => Math.round((performance.now() - t0) * 10) / 10;
const time = (name, f) => { const t0 = performance.now(); const r = f(); timings[name] = ms(t0); return r; };

const loaded = await loadZooFlm();
let t0 = performance.now();
const engine = await ZooFlmEngine.create({
    load_wasm: load_zoodb_flm_wasm_node,
    core: { dollar_math: false, srcset: args.srcset ? { image_max_zoom_factor: Number(args.srcset) } : null },
});
timings.create_engine = ms(t0);

// Each FLM field becomes a fragment; the names are standalone (inline).
const F = {}; // person_id -> { name, biography, friend_detail: Map(other person_id -> fragment) }
const parseDiags = [];
time('parse', () => {
    for (const p of Object.values(people)) {
        const make = (field, text, standalone) => {
            const f = engine.make_fragment(text, {
                origin: { object_type: 'person', object_id: p.person_id, field, source_path: p._file },
                standalone, error_policy: 'continue',
            });
            parseDiags.push(...f.diagnostics);
            return f;
        };
        F[p.person_id] = { name: make('name', p.name, true), biography: make('biography', p.biography, false), details: new Map() };
        for (const [list, key] of [['friends', 'relations.friends'], ['friend_of', 'relations.friend_of']]) {
            (p.relations?.[list] ?? []).forEach((r, i) => {
                if (r.friend_detail) F[p.person_id].details.set(`${list}:${r.person_id}`, make(`${key}[${i}].friend_detail`, r.friend_detail, false));
            });
        }
    }
});
const allFragments = Object.values(F).flatMap((f) => [f.name, f.biography, ...f.details.values()]);

// The scan over every fragment, then the citations and graphics tables (Q6, Q7).
const scan = time('scan', () => engine.scan(allFragments, { error_policy: 'continue' }));
const citationsCache = args.citations ?? path.join(args.data, '..', 'website', '_zoodb_citations_cache', 'cache_compiled_citations.json');
const hostTables = {};
time('host_tables', () => {
    const c = citationsFromCache(citationsCache, scan.cited.map(({ key }) => key));
    engine.set_citations(c.entries);
    const g = collectGraphics(scan.trees.flatMap((t) => t.graphics), { dataDir: args.data, permalink: (name) => `/pic/${name}` });
    engine.set_graphics(g.entries);
    hostTables.citations = { cited: scan.cited.length, set: engine.core.citations_len(), missing: c.missing };
    hostTables.graphics = { refs: scan.trees.reduce((n, t) => n + t.graphics.length, 0), set: engine.core.graphics_len(), missing: g.missing };
});

// The snippet run (Q9 b): every standalone fragment, one html run (and the text snippets).
const names = Object.values(F).map((f) => f.name);
const snippetRun = time('snippet_run', () => engine.render_snippets(names, { outputs: ['html'], error_policy: 'continue' }));
const textSnippetRun = time('snippet_run_text', () => engine.render_snippets(names, { outputs: ['text'], error_policy: 'continue' }));

// The index (Q4): one entry per person, display = the name fragment.
const indexEntries = Object.keys(people).map((id) => ({ label: `person:${id}`, href: permalink('person', id), display: F[id].name }));
const index = time('set_index', () => engine.set_index(indexEntries));

// ---- the pages, as zoodb-example's person.11ty.js writes them --------------------------------

function composePerson(person, placed) {
    return ({ ne, rdr, rdrblock, ref, piece }) => {
        const id = person.person_id, rel = person.relations ?? {}, f = F[id];
        const place = (fragment, block) => { placed.add(fragment); return block ? rdrblock(fragment) : rdr(fragment); };
        let s = `<article>\n<h1>${rdr(f.name)}</h1>\n<h2>Biography</h2>\n<div>${place(f.biography, true)}</div>`;
        if (rel.spouse != null) s += `\n<h2>Spouse</h2>\n<p>${ref('person', rel.spouse)}</p>`;
        for (const [title, list] of [['Parents', rel.parents], ['Children', rel.children]]) {
            if (ne(list)) s += `\n<h2>${title}</h2>\n<ul>` + list.map((r) => `<li>${ref('person', r.person_id)}</li>`).join('') + '</ul>';
        }
        const friends = [...(rel.friends ?? []).map((r) => [r, f.details.get(`friends:${r.person_id}`)]),
                         ...(rel.friend_of ?? []).map((r) => [r, f.details.get(`friend_of:${r.person_id}`)])];
        if (friends.length) {
            s += '\n<h2>Friends</h2>\n<ul>' + friends.map(([r, detail]) => `<li>${ref('person', r.person_id)}${ne(detail) ? ` (${place(detail, false)})` : ''}</li>`).join('') + '</ul>';
        }
        s += `\n${piece('flm.xnotes.list.footnote')}\n${piece('flm.citations.bibliography')}\n</article>`;
        return s;
    };
}

const pages = {};
const renderDiags = new Map();
time('compose_all', () => {
    for (const p of Object.values(people)) {
        const placed = new Set();
        const t1 = performance.now();
        const r = engine.render_document({ compose: composePerson(p, placed), error_policy: 'continue' });
        pages[p.person_id] = { ...r, trees: placed.size, ms: ms(t1) };
        for (const d of r.diagnostics) renderDiags.set(d.identifier, (renderDiags.get(d.identifier) ?? 0) + 1);
    }
});
if (args.out) {
    fs.mkdirSync(args.out, { recursive: true });
    fs.writeFileSync(path.join(args.out, 'flm.css'), engine.html_stylesheet());
    for (const [id, r] of Object.entries(pages)) {
        fs.writeFileSync(path.join(args.out, `${id}.html`),
                         `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="flm.css"></head><body>${r.html}</body></html>\n`);
    }
}

// R14: a large index (synthetic entries, displays as FLM text) installed per run.
let big = null;
if (args['index-size']) {
    const n = Number(args['index-size']);
    const entries = [...indexEntries];
    for (let i = 0; i < n; i++) entries.push({ label: `code:c${i}`, href: `/c/c${i}`, display: `Code \\(C_{${i}}\\) \\emph{number ${i}}` });
    const set = time('set_big_index', () => engine.set_index(entries, { context: 'big' }));
    const r = time('compose_bob_big_index', () => engine.render_document({ context: 'big', compose: composePerson(people.bob, new Set()) }));
    // Back to the default context: the index is installed again before the run.
    const back = time('compose_bob_default_again', () => engine.render_document({ compose: composePerson(people.bob, new Set()) }));
    big = { entries: entries.length, index_len: engine.core.external_index_len(), set_diagnostics: set.diagnostics.length,
            leftover: (r.html.match(/<flm:/g) ?? []).length, same_page: r.html === back.html };
}

const bob = pages.bob;
console.log(JSON.stringify({
    timings,
    module: { wasm_size_bytes: loaded.wasm_size_bytes, instantiate_ms: Math.round(loaded.instantiate_ms * 10) / 10 },
    parse_diagnostics: parseDiags.length,
    snippet_run: { fragments: names.length, diagnostics: [...snippetRun.diagnostics, ...textSnippetRun.diagnostics].map((d) => d.identifier) },
    index: { entries: indexEntries.length, diagnostics: index.diagnostics.length },
    pages: Object.fromEntries(Object.entries(pages).map(([id, r]) => [id, {
        trees: r.trees, leftover_markers: (r.html.match(/<flm:/g) ?? []).length, html_chars: r.html.length,
        requires: r.requires.length, ms: r.ms,
    }])),
    host_tables: hostTables,
    scan: { diagnostics: scan.diagnostics.map((d) => `${d.identifier} ${d.origin.label}`), standalone_violations: scan.standalone_violations },
    render_diagnostics: Object.fromEntries(renderDiags),
    bob_bibliography: /<div class="flm-pres-block flm-citations-bibliography"[^]*?<\/div>/.exec(bob.html)?.[0].replace(/\s+/g, ' ').slice(0, 700) ?? null,
    alice_img: /<img\b[^>]*>/.exec(pages.alice.html)?.[0] ?? null,
    bob_links: [...bob.html.matchAll(/<a [^>]*href="\/person\/[^"]*"[^>]*>.*?<\/a>/g)].map((m) => m[0]).slice(0, 6),
    bob_figure: /<figure[^>]*>/.exec(bob.html)?.[0] ?? null,
    bob_requires: bob.requires,
    stylesheet_chars: engine.html_stylesheet().length,
    big_index: big,
    fragments_held: engine.core.fragment_count(),
    memory_bytes_now: loaded.memory.buffer.byteLength,
}, null, 1));
