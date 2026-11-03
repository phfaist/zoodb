// Milestone 4 of step zero (Q14): settings and user definitions as data from
// JavaScript. Prints the standard features that take settings with the top-level
// keys of each one's JSON Schema, then builds an engine with a user macro, a
// per-mode definition and a feature switched off, and renders a fragment.
//
// Usage: node settings.mjs

import { loadZooFlm } from './load.mjs';

const { ZooFlmCore } = await loadZooFlm();

const features = ZooFlmCore.features();
const withSettings = features.filter((f) => f.schema).map((f) => ({
    name: f.name,
    keys: Object.keys(f.schema.properties ?? {}),
}));

const settings = {
    userdefs: {
        macros: {
            kw: { args: '{', content: '\\textbf{#1}', docs: 'A keyword.' },
            zoo: { content: { text: 'the Zoo', math: '\\mathcal{Z}' } },
        },
    },
};
let t0 = performance.now();
const engine = new ZooFlmCore({ dollar_math: false, settings, off: ['annotations'] });
const build_ms = Math.round((performance.now() - t0) * 10) / 10;
const parsed = engine.parse('A \\kw{term} of \\zoo, \\(\\zoo\\).', 'a.yml#x', 'inline');
const out = engine.render_html([parsed.handle], {});

let refused = null;
try { new ZooFlmCore({ settings: { math: { no_such_key: 1 } } }); } catch (e) { refused = e.message; }

console.log(JSON.stringify({
    features: features.length,
    with_settings: withSettings,
    build_ms,
    parse_diagnostics: parsed.diagnostics,
    html: out.trees[0],
    render_diagnostics: out.diagnostics.map((d) => d.identifier),
    refused,
}, null, 1));
