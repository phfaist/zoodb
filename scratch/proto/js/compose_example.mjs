// Milestone 1 of step zero: the marker composition of Q4.3/Q8 on the pages of
// zoodb-example, with the external index of object targets (Q4), the snippet
// run of standalone fields (Q9) and the host-built ref() (Q4).
//
// Usage: NODE_MODULES=<node_modules holding yaml> node compose_example.mjs \
//            --data <zoodb-example/data> --schemas <zoodb-example/schemas> [--out <dir>] [--index-size N]

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { loadZooFlm } from './load.mjs';
import { citationsFromCache, collectGraphics } from './host_tables.mjs';

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

const personSchema = YAML.parse(fs.readFileSync(path.join(args.schemas, 'person.yml'), 'utf8'));
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

// ---- the engine: fragments, snippet run, index -----------------------------------------------

const loaded = await loadZooFlm();
const engine = new loaded.ZooFlm({ dollar_math: false, srcset: args.srcset ? { image_max_zoom_factor: Number(args.srcset) } : undefined });
const timings = {};
const time = (name, f) => { const t0 = performance.now(); const r = f(); timings[name] = Math.round((performance.now() - t0) * 10) / 10; return r; };

// Each FLM field becomes a fragment handle; standalone fields are inline.
const fragments = new Map(); // "person_id.field" -> { handle, standalone }
const parseDiags = [];
time('parse', () => {
    for (const p of Object.values(people)) {
        const add = (field, text, standalone) => {
            const parsed = engine.parse(text, `${p._file}#${field}`, standalone ? 'inline' : 'auto');
            parseDiags.push(...parsed.diagnostics);
            fragments.set(`${p.person_id}.${field}`, { handle: parsed.handle, standalone });
        };
        add('name', p.name, true);
        add('biography', p.biography, false);
        (p.relations?.friends ?? []).forEach((r, i) => { if (r.friend_detail) add(`relations.friends[${i}].friend_detail`, r.friend_detail, false); });
        (p.relations?.friend_of ?? []).forEach((r, i) => { if (r.friend_detail) add(`relations.friend_of[${i}].friend_detail`, r.friend_detail, false); });
    }
});

// Milestone 2: the scan over every fragment, then the citations and graphics
// tables filled from what it reported (Q6, Q7).
const scan = time('scan', () => engine.scan([...fragments.values()].map((f) => f.handle), [...fragments.values()].filter((f) => f.standalone).map((f) => f.handle)));
const citationsCache = args.citations ?? path.join(args.data, '..', 'website', '_zoodb_citations_cache', 'cache_compiled_citations.json');
const hostTables = {};
time('host_tables', () => {
    const c = citationsFromCache(citationsCache, scan.cited.map(([k]) => k));
    engine.set_citations(c.entries);
    const g = collectGraphics(scan.trees.flatMap((t) => t.graphics), { dataDir: args.data, permalink: (name) => `/pic/${name}` });
    engine.set_graphics(g.entries);
    hostTables.citations = { cited: scan.cited.length, set: engine.citations_len(), missing: c.missing };
    hostTables.graphics = { refs: scan.trees.reduce((n, t) => n + t.graphics.length, 0), set: engine.graphics_len(), missing: g.missing };
});

// The snippet run (Q9 b): every standalone fragment rendered once, in one run.
const snippets = new Map(); // handle -> html
const snippetRun = time('snippet_run', () => {
    const handles = [...fragments.values()].filter((f) => f.standalone).map((f) => f.handle);
    const out = engine.render_html(handles, { unresolved_refs_warning: false });
    handles.forEach((h, i) => snippets.set(h, out.trees[i]));
    return out;
});

// The external index (Q4): one entry per object, display = the name's FLM source.
const indexEntries = Object.values(people).map((p) => ({ label: `person:${p.person_id}`, href: permalink('person', p.person_id), display: p.name }));
const indexDiags = time('set_index', () => engine.set_external_index(indexEntries));

// ---- the composer protocol (Q4.3, Q8) ----------------------------------------------------------

const M0 = '', M1 = '';
function renderDocument({ compose, options }) {
    const order = [];           // handles in order of first rdr() call: the document order
    const marker = (handle) => { let i = order.indexOf(handle); if (i < 0) { i = order.length; order.push(handle); } return `${M0}tree:${i}${M1}`; };
    const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const P = {
        ne: (x) => x != null && x !== '' && !(Array.isArray(x) && !x.length),
        rdr: (key) => {
            if (key == null) return '';
            const f = fragments.get(key);
            if (!f) return escape(key);                       // a plain string
            if (f.standalone) return snippets.get(f.handle);  // real string (Q9)
            return marker(f.handle);                          // marker (Q4.3)
        },
        rdrblock: (key) => P.rdr(key),
        ref: (type, id) => `<a href="${permalink(type, id)}" class="zoo-ref">${snippets.get(fragments.get(`${id}.name`)?.handle) ?? escape(id)}</a>`,
        refhref: (type, id) => permalink(type, id),
        piece: (name) => `${M0}piece:${name}${M1}`,
    };
    const composed = compose(P);
    const out = engine.render_html(order, options);
    const html = composed.replace(/(tree|piece):([^]*)/g, (_, kind, what) =>
        kind === 'tree' ? out.trees[Number(what)] : (out.pieces.find((p) => p.name === what)?.html ?? ''));
    const leftover = (html.match(//g) ?? []).length;
    return { html, out, order, leftover };
}

// The person page, as zoodb-example's person.11ty.js writes it.
function composePerson(person) {
    return ({ ne, rdr, rdrblock, ref, piece }) => {
        const id = person.person_id, rel = person.relations ?? {};
        let s = `<article>\n<h1>${rdr(`${id}.name`)}</h1>\n<h2>Biography</h2>\n<div>${rdrblock(`${id}.biography`)}</div>`;
        if (rel.spouse != null) s += `\n<h2>Spouse</h2>\n<p>${ref('person', rel.spouse)}</p>`;
        for (const [title, list] of [['Parents', rel.parents], ['Children', rel.children]]) {
            if (ne(list)) s += `\n<h2>${title}</h2>\n<ul>` + list.map((r) => `<li>${ref('person', r.person_id)}</li>`).join('') + '</ul>';
        }
        const friends = [...(rel.friends ?? []).map((r, i) => [r, `${id}.relations.friends[${i}].friend_detail`]),
                         ...(rel.friend_of ?? []).map((r, i) => [r, `${id}.relations.friend_of[${i}].friend_detail`])];
        if (friends.length) {
            s += '\n<h2>Friends</h2>\n<ul>' + friends.map(([r, key]) => `<li>${ref('person', r.person_id)}${r.friend_detail ? ` (${rdr(key)})` : ''}</li>`).join('') + '</ul>';
        }
        s += `\n${piece('flm.xnotes.list.footnote')}\n${piece('flm.citations.bibliography')}\n</article>`;
        return s;
    };
}

const pages = {};
const renderDiags = new Map();
time('compose_all', () => {
    for (const p of Object.values(people)) {
        const r = renderDocument({ compose: composePerson(p), options: { unresolved_refs_warning: false, title: p.person_id } });
        pages[p.person_id] = r;
        for (const d of r.out.diagnostics) renderDiags.set(d.identifier, (renderDiags.get(d.identifier) ?? 0) + 1);
    }
});
if (args.out) {
    fs.mkdirSync(args.out, { recursive: true });
    for (const [id, r] of Object.entries(pages)) {
        const css = r.out.definitions.filter((d) => d.kind === 'style').flatMap((d) => d.parts.filter((p) => p.kind === 'inline').map((p) => p.text)).join('\n');
        fs.writeFileSync(path.join(args.out, `${id}.html`), `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${r.html}</body></html>\n`);
    }
}

// R14: a large index (synthetic entries) installed per run.
let big = null;
if (args['index-size']) {
    const n = Number(args['index-size']);
    const entries = [...indexEntries];
    for (let i = 0; i < n; i++) entries.push({ label: `code:c${i}`, href: `/c/c${i}`, display: `Code \\(C_{${i}}\\) \\emph{number ${i}}` });
    const set_ms = time('set_big_index', () => engine.set_external_index(entries)).length;
    const r = time('compose_bob_big_index', () => renderDocument({ compose: composePerson(people.bob), options: { title: 'bob' } }));
    big = { entries: entries.length, index_len: engine.external_index_len(), leftover: r.leftover, set_ms_diags: set_ms };
}

const bob = pages.bob;
console.log(JSON.stringify({
    timings,
    parse_diagnostics: parseDiags.length,
    snippet_run: { fragments: snippets.size, diagnostics: snippetRun.diagnostics.map((d) => d.identifier) },
    index: { entries: indexEntries.length, diagnostics: indexDiags.length },
    pages: Object.fromEntries(Object.entries(pages).map(([id, r]) => [id, { trees: r.order.length, leftover_markers: r.leftover, html_chars: r.html.length }])),
    host_tables: hostTables,
    scan: { diagnostics: scan.diagnostics.map((d) => d.identifier), standalone_violations: scan.standalone_violations },
    render_diagnostics: Object.fromEntries(renderDiags),
    bob_bibliography: bob.out.pieces.find((p) => p.name === 'flm.citations.bibliography')?.html.replace(/\s+/g, ' ').slice(0, 700) ?? null,
    alice_img: /<img\b[^>]*>/.exec(pages.alice.html)?.[0] ?? null,
    bob_links: [...bob.html.matchAll(/<a [^>]*href="\/person\/[^"]*"[^>]*>[^<]*(?:<[^a][^>]*>[^<]*)*<\/a>/g)].map((m) => m[0]).slice(0, 6),
    bob_figure: /<figure[^>]*>/.exec(bob.html)?.[0] ?? null,
    bob_pieces: bob.out.pieces.map((p) => `${p.name} (${p.place})`),
    big_index: big,
    memory_bytes_now: loaded.memory.buffer.byteLength,
}, null, 1));
