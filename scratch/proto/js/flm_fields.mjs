// Milestone 3 of step zero (Q16): the FLM-files loader's parse through the
// engine's `field` element. The fixtures and the expected objects are those of
// `test/test_dbdataloader_flmfilesdb.js`; the trim and the front matter are
// the loader's own (JavaScript stays in charge of both).
//
// Usage: node flm_fields.mjs

import assert from 'node:assert/strict';
import { loadZooFlm } from './load.mjs';

const { ZooFlm } = await loadZooFlm();
const engine = new ZooFlm({ dollar_math: false });

const trim = (x) => x.replace(/^[ \t]*\n?/, '').replace(/\n?[ \t]*$/, '');
function setPath(obj, dotted, value) {
    const parts = dotted.split('.');
    let o = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        if (parts[i + 1] === '[]') { (o[parts[i]] ??= []).push(value); return; }
        o = (o[parts[i]] ??= {});
    }
    o[parts[parts.length - 1]] = value;
}
function parseFile(text, origin, { yaml }) {
    const m = /^\n*---\s*\n((.|\n)*?)\n---\s*($|\n)/.exec(text);
    const data = m ? yaml(m[1]) : {};
    const bodyOffset = m ? m[0].length : 0;
    const body = text.slice(bodyOffset);
    const out = engine.parse_fields(body, origin);
    const errors = out.diagnostics.filter((d) => d.severity === 'error');
    if (errors.length) throw new Error(errors.map((d) => `${d.identifier} at ${origin}:${d.line + countLines(text, bodyOffset)}:${d.col}: ${d.message}`).join('\n'));
    for (const f of out.fields) setPath(data, f.name, trim(f.text));
    return { data, fields: out.fields.map((f) => ({ name: f.name, start: f.start + bodyOffset, end: f.end + bodyOffset })) };
}
const countLines = (text, upto) => (text.slice(0, upto).match(/\n/g) ?? []).length;

// A minimal YAML reader for the fixture's front matter (the real loader uses the yaml package).
const yaml = (t) => ({ obj_id: 'someIdGoesHere', key1: { innerkey: ['one', 'two'] } });

const fixture = `
---
obj_id: someIdGoesHere
key1:
  innerkey:
  - one
  - two
---

\\begin{field}{key2}
value2
\\end{field}

\\begin{field}{key3.subkey.subsubkey}
Another other value
\\end{field}

\\begin{field}{key1.subkey2} blah blah

Test also one-newline trim.

 \\end{field}

%%
%% Note that comments at this level are allowed.
%%

\\begin{field}{key1.innerkey.[]} three \\end{field}

`;
const expected = {
    obj_id: 'someIdGoesHere',
    key1: { innerkey: ['one', 'two', 'three'], subkey2: 'blah blah\n\nTest also one-newline trim.\n' },
    key2: 'value2',
    key3: { subkey: { subsubkey: 'Another other value' } },
};
const t0 = performance.now();
const r = parseFile(fixture, 'dummy/xyz.flm', { yaml });
const ms = performance.now() - t0;
assert.deepEqual(r.data, expected);

const noFront = parseFile('\n\\begin{field}{title}\nMy Title\n\\end{field}\n\n\\begin{field}{description}\nA description here.\n\\end{field}\n', 'd.flm', { yaml });
assert.deepEqual(noFront.data, { title: 'My Title', description: 'A description here.' });

let stray = null;
try { parseFile(fixture.replace('%%\n%% Note', 'invalid content here\n%%\n%% Note'), 'bad.flm', { yaml }); } catch (e) { stray = e.message; }
assert.match(stray ?? '', /stray-content.*invalid content here/);

let unclosed = null;
try { parseFile('\\begin{field}{a}\nno end\n', 'u.flm', { yaml }); } catch (e) { unclosed = e.message; }

console.log(JSON.stringify({ ok: true, ms: Math.round(ms * 10) / 10, fields: r.fields, stray, unclosed }, null, 1));
