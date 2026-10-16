// Tests of the FLM engine (src/zooflm/engine.js) over a small zoo written
// here: two people with a name and a biography, a footnote, a cited key with
// its entry in the citations table, a \ref{person:alice} across objects, an
// equation with a label and an \eqref in another field of the same object, a
// figure with \includegraphics and its entry in the graphics table. No file is
// read but the module's.

import * as assert from 'assert';
import fs from 'fs';

import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import {
    ZooFlmEngine, ZooFlmFragment, ZooFlmError, format_diagnostic, value_not_empty,
} from '../src/zooflm/engine.js';


const load_wasm = load_zoodb_flm_wasm_node;

const PEOPLE = {
    alice: {
        name: 'Alice \\emph{Aaliz}',
        biography: 'Alice draws.\n\n'
            + '\\begin{figure}\\includegraphics{images/Smiley}\\caption{A smiley.}'
            + '\\label{figure:smiley}\\end{figure}\n\nSee Figure~\\ref{figure:smiley}.',
    },
    bob: {
        name: 'Bob \\(B_0\\)',
        biography: 'Bob is a friend of \\ref{person:alice}.\\footnote{Since \\zoo{} opened.} '
            + 'He wrote \\cite{arXiv:1234.5678}.\n\n'
            + '\\begin{equation}E = m c^2 \\label{eq:energy}\\end{equation}',
        notes: 'Bob proved \\eqref{eq:energy}.',
    },
};

const CITATIONS = [
    { key: 'arXiv:1234.5678', text: 'A. Author, \\emph{A title}, \\href{https://arxiv.org/abs/1234.5678}{arXiv:1234.5678} (2020)' },
];

const GRAPHICS = [{
    origin: 'people/alice.yml#biography', path: 'images/Smiley', identity: 'people/images/Smiley.png',
    media_type: 'image/png', address: '/pic/Smiley-0123abcd.png', kind: 'raster',
    width_px: 666, height_px: 333, dpi: 300,
}];

const CORE = { settings: { userdefs: { macros: { zoo: { content: 'the Zoo' } } } } };

const origin = (id, field, more = {}) => ({
    object_type: 'person', object_id: id, field, source_path: `people/${id}.yml`, ...more,
});


describe('ZooFlmEngine', function () {

    this.timeout(30000);

    let engine;
    const F = {}; // id -> { name, biography, notes }

    before(async function () {
        engine = await ZooFlmEngine.create({ load_wasm, core: CORE });
        for (const [id, person] of Object.entries(PEOPLE)) {
            F[id] = {};
            for (const [field, source] of Object.entries(person)) {
                F[id][field] = engine.make_fragment(source, {
                    origin: origin(id, field), standalone: (field === 'name'),
                });
            }
        }
        engine.set_citations(CITATIONS);
        engine.set_graphics(GRAPHICS);
        engine.render_snippets(Object.values(F).map( (f) => f.name ));
        engine.set_index(Object.keys(F).map( (id) => ({
            label: `person:${id}`, href: `/person/${id}`, display: F[id].name,
        }) ));
    });

    after(function () {
        engine?.free();
    });

    // The person page, as zoodb-example's person.11ty.js writes it.
    const compose_bob = ({ placement = 'endnotes' } = {}) => (R) => {
        const { ne, rdr, rdrblock, ref, refhref, endnotes, piece, escape } = R;
        let s = `<article>\n<h1>${rdr(F.bob.name)}</h1>\n<div>${rdrblock(F.bob.biography)}</div>`;
        if (ne(F.bob.notes)) {
            s += `\n<p class="notes">${rdr(F.bob.notes)}</p>`;
        }
        s += `\n<p class="friend">${ref('person', 'alice')} <a href="${escape(refhref('person', 'alice'))}">page</a></p>`;
        s += `\n<p class="list">${rdr(['x < y', 2, false])}</p>`;
        s += `\n<p>${escape('Tom & Jerry')}</p>`;
        if (placement === 'endnotes') {
            s += `\n${endnotes()}`;
        } else {
            s += `\n<section class="bib">${piece('flm.citations.bibliography')}</section>`
                + `\n<section class="notes">${piece('flm.xnotes.list.footnote')}</section>`;
        }
        return s + '\n</article>';
    };

    describe('creation', function () {

        it('the engine modules are environment-neutral', function () {
            const forbidden = /import\.meta|require\(|process\.|\bBuffer\b|__dirname|node:|\bfs\b/;
            for (const name of ['engine.js', 'fragment.js', 'diagnostics.js', 'compose.js']) {
                const text = fs.readFileSync(new URL(`../src/zooflm/${name}`, import.meta.url), 'utf-8');
                const imports = [...text.matchAll(/^\s*(?:import|export)\b[^;]*?\bfrom\s+'([^']+)'/gm)].map( (m) => m[1] );
                const allowed = ['./_load_wasm.js', './fragment.js', './diagnostics.js', './compose.js'];
                assert.deepStrictEqual(imports.filter( (i) => !allowed.includes(i) ), [], name);
                text.split('\n').forEach( (line, i) => {
                    if (!/^\s*(\/\/|\*)/.test(line)) {
                        assert.doesNotMatch(line, forbidden, `${name}:${i + 1}`);
                    }
                } );
            }
        });

        it('builds with settings as data, and lists the features', async function () {
            assert.deepStrictEqual(engine.build_diagnostics, []);
            assert.strictEqual(engine.error_policy, 'abort');
            assert.strictEqual(engine.unresolved, 'error');
            const features = await ZooFlmEngine.features({ load_wasm });
            assert.ok(features.some( (f) => f.name === 'userdefs' && f.schema != null ));
        });

        it('free() makes every later call a plain Error', async function () {
            const e = await ZooFlmEngine.create({ load_wasm });
            const f = e.make_fragment('x');
            e.free();
            assert.strictEqual(e.freed, true);
            for (const call of [
                () => e.make_fragment('y'), () => e.render_fragment(f), () => e.snippet_of_text('z'),
                () => e.tables, () => e.html_definitions(), () => e.core, () => e.free(),
                () => e.render_document({ compose: () => '' }), () => e.set_index([]),
            ]) {
                assert.throws(call, (err) => !(err instanceof ZooFlmError) && /freed/.test(err.message));
            }
        });

        it('refuses a wrong setting, naming the feature and the key', async function () {
            await assert.rejects(
                ZooFlmEngine.create({ load_wasm, core: { settings: { math: { no_such_key: 1 } } } }),
                (err) => {
                    assert.ok(!(err instanceof ZooFlmError));
                    assert.match(err.message, /`math`/);
                    assert.match(err.message, /no_such_key/);
                    return true;
                },
            );
            await assert.rejects(ZooFlmEngine.create({ load_wasm, core: { dolar_math: true } }), /dolar_math/);
            await assert.rejects(ZooFlmEngine.create({ load_wasm, error_policy: 'ignore' }), /ignore/);
        });
    });

    describe('fragments', function () {

        it('are made in the three layouts, with origins and emptiness', function () {
            const text = 'One paragraph.\n\nAnother.';
            const auto = engine.make_fragment(text, { origin: origin('carol', 'biography') });
            const blocks = engine.make_fragment(text, { origin: 'carol.yml#x', layout: 'blocks' });
            const inline = engine.make_fragment('A \\emph{name}', { standalone: true });
            assert.ok(auto instanceof ZooFlmFragment);
            assert.deepStrictEqual([auto.layout, blocks.layout, inline.layout], ['auto', 'blocks', 'inline']);
            assert.strictEqual(auto.origin.label, 'people/carol.yml#biography');
            assert.strictEqual(auto.origin.object_id, 'carol');
            assert.strictEqual(blocks.origin.label, 'carol.yml#x');
            assert.match(inline.origin.label, /^fragment:\d+$/);
            assert.ok(inline.standalone && !auto.standalone);
            assert.ok(Object.isFrozen(auto) && Object.isFrozen(auto.origin));
            assert.deepStrictEqual(auto.diagnostics, []);
            assert.strictEqual(auto.empty, false);
            // The auto layout with a paragraph break builds paragraphs.
            assert.match(engine.render_fragment(auto).html, /<p\b/);
            assert.doesNotMatch(engine.render_fragment(inline).html, /<p\b/);

            for (const [source, empty] of [['', true], ['  \n ', true], ['%% only a comment\n', true],
                                           ['\n\n', true], ['x', false], ['\\(x\\)', false]]) {
                const f = engine.make_fragment(source);
                assert.strictEqual(f.empty, empty, JSON.stringify(source));
                assert.strictEqual(value_not_empty(f), !empty);
                engine.release(f);
            }
            assert.throws( () => engine.make_fragment('x', { layout: 'paragraphs' }), /paragraphs/ );
            assert.throws( () => engine.make_fragment(null), TypeError );
            engine.release([auto, blocks, inline]);
        });

        it('release frees the handles; a released fragment used again is a plain Error', function () {
            const before_count = engine.core.fragment_count();
            const f = engine.make_fragment('Some \\emph{text}.', { origin: 'tmp.yml#a' });
            const s = engine.make_fragment('A name', { origin: 'tmp.yml#b', standalone: true });
            assert.strictEqual(engine.snippet(s), 'A name');
            // A placed blocks sibling shares the tree and is released with it.
            engine.render_document({ compose: ({ rdrblock }) => rdrblock(f) });
            assert.strictEqual(engine.core.fragment_count(), before_count + 3);
            const sibling = f._siblings.get('blocks');
            assert.strictEqual(engine.fragment_of(sibling), f);
            assert.strictEqual(engine.fragment_of(s.handle), s);
            engine.release([f, s]);
            assert.strictEqual(engine.fragment_of(sibling), null);
            assert.strictEqual(engine.core.fragment_count(), before_count);
            assert.ok(f.released && s.released);
            for (const use of [
                () => engine.render_fragment(f),
                () => engine.render_document({ compose: ({ rdr }) => rdr(f) }),
                () => engine.snippet(s),
                () => engine.release(f),
                () => engine.scan([f]),
            ]) {
                assert.throws(use, (err) => {
                    assert.ok(!(err instanceof ZooFlmError), err.name);
                    assert.match(err.message, /released/);
                    return true;
                });
            }
            // The core refuses the handle too.
            assert.throws( () => engine.core.render_html([f.handle], {}), /released/ );
        });
    });

    describe('render_document', function () {

        it('composes a page with every helper; the markers are all substituted', function () {
            const { html, definitions, requires, diagnostics, has_errors } = engine.render_document({
                compose: compose_bob(),
            });
            assert.deepStrictEqual(diagnostics, []);
            assert.strictEqual(has_errors, false);
            assert.doesNotMatch(html, /<flm:/);
            // The standalone name from the snippet cache.
            assert.match(html, /<h1>Bob <span class="flm-pres-math--passthrough"[^>]*>\\\(B_0\\\)<\/span><\/h1>/);
            // The biography placed with its blocks layout; the cross-object
            // link through the index, showing Alice's name.
            assert.match(html, /<div><p class="flm-pres-par">Bob is a friend of <a class="flm-pres-link" href="\/person\/alice"[^>]*>Alice <em[^>]*>Aaliz<\/em><\/a>/);
            // The user macro from the settings.
            assert.match(html, /Since the Zoo opened\./);
            // The equation and its \eqref in another field, numbered in one run.
            assert.match(html, /id="eq-energy"/);
            assert.match(html, /<p class="notes">Bob proved <a class="flm-pres-link" href="#eq-energy"[^>]*>\(1\)<\/a>\.<\/p>/);
            // The host-built ref() and refhref().
            assert.match(html, /<a href="\/person\/alice" class="href-ref ref-person">Alice <em[^>]*>Aaliz<\/em><\/a> <a href="\/person\/alice">page<\/a>/);
            // An array through rdr(), strings escaped.
            assert.match(html, /<p class="list"><span class="paragraph-in-list">x &lt; y<\/span><span class="paragraph-in-list">2<\/span><span class="paragraph-in-list">false<\/span><\/p>/);
            assert.match(html, /<p>Tom &amp; Jerry<\/p>/);
            // endnotes(): the footnote list, then the bibliography.
            const notes = html.indexOf('flm-xnotes-footnote-list');
            const bib = html.indexOf('flm-citations-bibliography');
            assert.ok(notes > 0 && bib > notes, html);
            assert.match(html, /A\. Author, <em[^>]*>A title<\/em>, <a [^>]*href="https:\/\/arxiv\.org\/abs\/1234\.5678"/);
            // What the content requires, the pieces' and the snippets' included.
            for (const id of ['flm.html.style.core', 'flm.html.style.lists', 'flm.html.style.math-passthrough',
                              'flm.xnotes.style', 'flm.citations.style']) {
                assert.ok(requires.includes(id), `${id} in ${requires}`);
            }
            assert.ok(!requires.includes('flm.html.style.page'));
            assert.deepStrictEqual(definitions.map( (d) => d.id ), requires);
        });

        it('places the figure with its address and size from the graphics table', function () {
            const { html, diagnostics } = engine.render_document({
                compose: ({ rdr, rdrblock }) => `<h1>${rdr(F.alice.name)}</h1>${rdrblock(F.alice.biography)}`,
            });
            assert.deepStrictEqual(diagnostics, []);
            // 666 px at 300 dpi: 159.84 pt.
            assert.match(html, /<img [^>]*src="\/pic\/Smiley-0123abcd\.png"[^>]*--flm-element-width: 159\.84pt/);
            assert.match(html, /<figure [^>]*id="figure-1"/);
            assert.match(html, /See Figure&#xA0;<a class="flm-pres-link" href="#figure-1"/);
        });

        it('places pieces by name with piece()', function () {
            const { html, diagnostics } = engine.render_document({ compose: compose_bob({ placement: 'pieces' }) });
            assert.deepStrictEqual(diagnostics, []);
            assert.doesNotMatch(html, /<flm:/);
            assert.match(html, /<section class="bib"><div class="flm-pres-block flm-citations-bibliography"/);
            assert.match(html, /<section class="notes"><div class="flm-pres-block flm-xnotes-footnote-list"/);
            // A piece the run does not have is replaced by nothing.
            const alice = engine.render_document({
                compose: ({ rdrblock, piece }) => `${rdrblock(F.alice.biography)}<i>${piece('flm.xnotes.list.footnote')}</i>`,
            });
            assert.match(alice.html, /<i><\/i>$/);
        });

        it('substitutes a copied marker and reports a stray one', function () {
            const r = engine.render_document({
                error_policy: 'continue',
                compose: ({ rdr }) => {
                    const m = rdr(F.bob.notes);
                    return `${m}|${m}|<flm:tree:7/>|<flm:piece:flm.citations.bibliography/>`;
                },
            });
            const parts = r.html.split('|');
            assert.strictEqual(parts[0], parts[1]);
            assert.match(parts[0], /Bob proved/);
            assert.deepStrictEqual(parts.slice(2), ['<flm:tree:7/>', '<flm:piece:flm.citations.bibliography/>']);
            assert.strictEqual(r.has_errors, true);
            const strays = r.diagnostics.filter( (d) => d.identifier === 'zoodb.compose.stray-marker' );
            assert.strictEqual(strays.length, 2);
            assert.ok(strays.every( (d) => d.severity === 'error' && d.origin.label === 'composer' ));
            // \eqref alone does not resolve: the run's own Error.
            assert.ok(r.diagnostics.some( (d) => d.identifier === 'flm.refs.unresolved' ));
            assert.throws(
                () => engine.render_document({ compose: () => '<flm:endnotes/>' }),
                (err) => err instanceof ZooFlmError && /zoodb\.compose\.stray-marker/.test(err.message),
            );
        });

        it('ref() with a custom display, and a missing target under both unresolved values', function () {
            const custom = engine.render_document({
                compose: ({ ref }) => ref('person', 'alice', { display_flm: 'my friend \\emph{A.}' }),
            });
            assert.match(custom.html,
                         /^<a href="\/person\/alice" class="href-ref ref-person">my friend <em\b[^>]*>A\.<\/em><\/a>$/);
            // A fragment as the custom display: its snippet.
            const custom_fragment = engine.render_document({
                compose: ({ ref }) => ref('person', 'alice', { display_flm: F.bob.name }),
            });
            assert.deepStrictEqual(custom_fragment.diagnostics, []);
            assert.strictEqual(custom_fragment.html,
                               `<a href="/person/alice" class="href-ref ref-person">${engine.snippet(F.bob.name)}</a>`);
            assert.ok(custom_fragment.requires.includes('flm.html.style.math-passthrough'));

            const missing = (unresolved, error_policy = 'continue') => engine.render_document({
                unresolved, error_policy,
                compose: ({ ref, refhref }) => `${ref('person', 'zed')}|${refhref('person', 'zed')}`,
            });
            const as_error = missing('error');
            assert.strictEqual(as_error.html, 'person:zed|null');
            assert.strictEqual(as_error.has_errors, true);
            assert.deepStrictEqual(as_error.diagnostics.map( (d) => `${d.severity} ${d.identifier}` ),
                                   ['error zoodb.ref.unresolved', 'error zoodb.ref.unresolved']);
            const as_warning = missing('warn');
            assert.strictEqual(as_warning.html, '<span class="href-ref ref-unresolved">person:zed</span>|null');
            assert.strictEqual(as_warning.has_errors, false);
            assert.deepStrictEqual(as_warning.diagnostics.map( (d) => d.severity ), ['warning', 'warning']);
            assert.throws( () => missing('error', 'abort'),
                           (err) => err instanceof ZooFlmError && /composer: error: ref\(\): no index entry for ‘person:zed’/.test(err.message) );
            // A missing target in another context.
            assert.throws( () => engine.render_document({ context: 'handbook', compose: ({ ref }) => ref('person', 'bob') }),
                           /context ‘handbook’/ );
        });

        it('reports a marker of another call as stray, never substituting it', function () {
            let kept = null;
            engine.render_document({ error_policy: 'continue', compose: ({ rdr }) => (kept = rdr(F.bob.notes)) });
            assert.match(kept, /^<flm:\d+:tree:0\/>$/);
            const second = engine.render_document({
                error_policy: 'continue', compose: ({ rdrblock }) => `${rdrblock(F.alice.biography)}|${kept}`,
            });
            const [first_part, tail] = second.html.split('|');
            assert.match(first_part, /Alice draws/);
            assert.strictEqual(tail, kept);
            assert.deepStrictEqual(second.diagnostics.map( (d) => d.identifier ), ['zoodb.compose.stray-marker']);
        });

        it('warns of a piece with content that no marker placed', function () {
            const name_of = (d) => /‘([^’]*)’/.exec(d.message)[1];
            const none = engine.render_document({ compose: ({ rdrblock }) => rdrblock(F.bob.biography) });
            assert.strictEqual(none.has_errors, false);
            assert.deepStrictEqual(none.diagnostics.map( (d) => `${d.severity} ${d.identifier} ${name_of(d)}` ), [
                'warning zoodb.compose.piece-not-placed flm.xnotes.list.footnote',
                'warning zoodb.compose.piece-not-placed flm.citations.bibliography',
            ]);
            const one = engine.render_document({
                compose: ({ rdrblock, piece }) => rdrblock(F.bob.biography) + piece('flm.citations.bibliography'),
            });
            assert.deepStrictEqual(one.diagnostics.map(name_of), ['flm.xnotes.list.footnote']);
        });

        it('rdr() renders an array holding standalone fragments, and names what it cannot render', function () {
            const r = engine.render_document({ compose: ({ rdr }) => rdr([F.alice.name, 'and', F.bob.name]) });
            assert.deepStrictEqual(r.diagnostics, []);
            assert.strictEqual(r.html, [engine.snippet(F.alice.name), 'and', engine.snippet(F.bob.name)]
                               .map( (x) => `<span class="paragraph-in-list">${x}</span>` ).join(''));
            assert.ok(r.requires.includes('flm.html.style.math-passthrough'));
            const zoo_object = Object.assign(Object.create(null), { name: F.alice.name, _zoodb: { id: 'alice' } });
            assert.throws( () => engine.render_document({ compose: ({ rdr }) => rdr(zoo_object) }),
                           (err) => err instanceof TypeError && /zoo object \(‘alice’\)/.test(err.message) );
            assert.throws( () => engine.render_document({ compose: ({ rdr }) => rdr({ name: 'x' }) }),
                           (err) => err instanceof TypeError && /an object \(Object, keys: name\)/.test(err.message) );
        });

        it('installs the index of the context the run asks for', function () {
            engine.set_index([{ label: 'person:alice', href: '/hb/alice', display: 'ALICE' }], { context: 'handbook' });
            const hb = engine.render_document({
                context: 'handbook', compose: ({ rdrblock, ref }) => `${rdrblock(F.bob.biography)}${ref('person', 'alice')}`,
            });
            assert.match(hb.html, /<a class="flm-pres-link" href="\/hb\/alice"[^>]*>ALICE<\/a>/);
            assert.match(hb.html, /<a href="\/hb\/alice" class="href-ref ref-person">ALICE<\/a>$/);
            const site = engine.render_document({ compose: ({ rdrblock }) => rdrblock(F.bob.biography) });
            assert.match(site.html, /href="\/person\/alice"/);
            assert.deepStrictEqual(Object.keys(engine.tables.index).sort(), ['default', 'handbook']);
            assert.deepStrictEqual(engine.tables.citations, CITATIONS);
            assert.strictEqual(engine.tables.graphics[0].address, '/pic/Smiley-0123abcd.png');
        });
    });

    describe('the index', function () {

        // Bob's biography (\ref{person:alice}) and ref('person', 'alice') under
        // the default context.
        const page = () => engine.render_document({
            error_policy: 'continue',
            compose: ({ rdrblock, ref, endnotes }) => `${rdrblock(F.bob.biography)}|${ref('person', 'alice')}${endnotes()}`,
        });

        it('set_index returns the displays\' diagnostics, under the policy', function () {
            const entries = [{ label: 'person:x', href: '/x', display: 'X \\nosuch' }];
            const r = engine.set_index(entries, { context: 'diag', error_policy: 'continue' });
            assert.strictEqual(r.has_errors, true);
            assert.deepStrictEqual(r.diagnostics.map( (d) => [d.severity, d.origin.label] ),
                                   [['error', 'index:person:x']]);
            assert.deepStrictEqual(engine.tables.index.diag.map( (e) => e.label ), ['person:x']);
            assert.throws( () => engine.set_index(entries, { context: 'diag2' }), ZooFlmError );
            assert.ok(!('diag2' in engine.tables.index));
            assert.deepStrictEqual(engine.set_index([], { context: 'empty' }), { diagnostics: [], has_errors: false });
        });

        it('a failed set_index leaves the engine as it was', function () {
            page();
            const default_entries = engine.tables.index.default;
            const contexts = Object.keys(engine.tables.index).sort();
            const installed = engine.core.external_index_len();
            const elsewhere = { label: 'person:alice', href: '/elsewhere', display: 'Elsewhere' };
            // Refused in JavaScript: a label that is not TYPE:ID.
            assert.throws( () => engine.set_index([elsewhere, { label: 'nocolon', href: '/n', display: 'N' }]),
                           (err) => !(err instanceof ZooFlmError) && /nocolon/.test(err.message) );
            // Refused by the core (a display whose parse aborts).
            assert.throws( () => engine.set_index([elsewhere, { label: 'person:z', href: '/z', display: '\\begin{field}\\end{field}' }]),
                           (err) => !(err instanceof ZooFlmError) );
            // An Error in a display under abort, in another context and in the installed one.
            const broken = [elsewhere, { label: 'person:y', href: '/y', display: 'Y \\nosuch' }];
            assert.throws( () => engine.set_index(broken, { context: 'other' }), ZooFlmError );
            assert.strictEqual(engine.core.external_index_len(), installed);
            assert.throws( () => engine.set_index(broken), ZooFlmError );
            assert.strictEqual(engine.core.external_index_len(), installed);
            assert.strictEqual(engine.tables.index.default, default_entries);
            assert.deepStrictEqual(Object.keys(engine.tables.index).sort(), contexts);
            // The \ref of the content and ref() still go through the old index.
            const after = page();
            const [content, link] = after.html.split('|');
            assert.match(content, /<a class="flm-pres-link" href="\/person\/alice"/);
            assert.match(link, /^<a href="\/person\/alice" class="href-ref ref-person">/);
            assert.doesNotMatch(after.html, /elsewhere/);
        });

        it('refuses a display that is not standalone, and ad hoc text that is not', function () {
            const r = engine.set_index([
                { label: 'person:bob', href: '/b', display: F.bob.notes },
                { label: 'person:alice', href: '/a', display: F.alice.name },
            ], { context: 'standalone', error_policy: 'continue' });
            assert.deepStrictEqual(r.diagnostics.map( (d) => [d.identifier, d.origin] ),
                                   [['zoodb.index.display-not-standalone', F.bob.notes.origin]]);
            assert.deepStrictEqual(engine.tables.index.standalone.map( (e) => e.label ), ['person:alice']);
            assert.throws( () => engine.set_index([{ label: 'person:bob', href: '/b', display: F.bob.notes }],
                                                  { context: 'standalone2' }), ZooFlmError );
            // An ad hoc display with a citation is not standalone.
            const cited = engine.render_document({
                error_policy: 'continue',
                compose: ({ ref }) => ref('person', 'alice', { display_flm: 'see \\cite{arXiv:1234.5678}' }),
            });
            assert.strictEqual(cited.has_errors, true);
            assert.ok(cited.diagnostics.some( (d) => d.identifier === 'zoodb.snippet.not-standalone'
                                              && /citation/.test(d.message) ), JSON.stringify(cited.diagnostics));
            assert.throws( () => engine.snippet_of_text('see \\cite{arXiv:1234.5678}'),
                           (err) => err instanceof ZooFlmError && /zoodb\.snippet\.not-standalone/.test(err.message) );
        });
    });

    describe('snippets', function () {

        it('are filled by a batch run, read from the cache, and rendered on a miss', function () {
            const entry = engine.snippet_entry(F.alice.name, 'html');
            assert.ok(entry != null, 'cached by the batch run');
            assert.match(entry.value, /^Alice <em\b[^>]*>Aaliz<\/em>$/);
            assert.deepStrictEqual(entry.diagnostics, []);
            assert.strictEqual(engine.snippet(F.alice.name), entry.value);
            assert.strictEqual(engine.snippet_entry(F.alice.name, 'html'), entry, 'a hit renders nothing');
            assert.strictEqual(engine.snippet(F.alice.name, 'text'), 'Alice Aaliz');
            assert.strictEqual(engine.snippet(F.bob.name, 'text'), 'Bob \\(B_0\\)');
            assert.ok(engine.snippet_entry(F.bob.name, 'html').requires.includes('flm.html.style.math-passthrough'));

            const fresh = engine.make_fragment('Carol \\textbf{C}', { origin: origin('carol', 'name'), standalone: true });
            assert.strictEqual(engine.snippet_entry(fresh, 'text'), null);
            assert.strictEqual(engine.snippet(fresh, 'text'), 'Carol C');
            assert.notStrictEqual(engine.snippet_entry(fresh, 'text'), null);
            assert.strictEqual(engine.snippet_entry(fresh, 'html'), null);
            engine.release(fresh);

            // Ad hoc text, cached by the text.
            assert.match(engine.snippet_of_text('ad \\emph{hoc}'), /^ad <em\b[^>]*>hoc<\/em>$/);
            assert.strictEqual(engine.snippet_of_text('ad \\emph{hoc}', 'text'), 'ad hoc');
        });

        it('refuse a fragment that is not standalone', function () {
            assert.throws( () => engine.snippet(F.bob.notes),
                           (err) => err instanceof ZooFlmError && /zoodb\.snippet\.not-standalone/.test(err.message) );
            const r = engine.render_snippets([F.bob.notes, F.bob.name], { error_policy: 'continue' });
            assert.strictEqual(r.has_errors, true);
            assert.deepStrictEqual(r.diagnostics.map( (d) => d.identifier ),
                                   ['zoodb.snippet.not-standalone', 'zoodb.snippet.not-standalone']);
            assert.strictEqual(r.diagnostics[0].origin, F.bob.notes.origin);
            assert.strictEqual(engine.snippet_entry(F.bob.notes), null);
            assert.throws( () => engine.render_snippets([F.bob.notes]), ZooFlmError );
        });
    });

    describe('render_fragment and render_text', function () {

        it('render_fragment gives the html or the text of one tree', function () {
            const html = engine.render_fragment(F.bob.biography);
            assert.match(html.html, /^<p class="flm-pres-par">Bob is a friend of <a class="flm-pres-link" href="\/person\/alice"/);
            assert.ok(html.requires.includes('flm.xnotes.style'));
            assert.ok(html.definitions.some( (d) => d.id === 'flm.html.style.core' ));
            assert.ok(!html.definitions.some( (d) => d.id === 'flm.html.style.page' ));
            assert.strictEqual(html.has_errors, false);
            const text = engine.render_fragment(F.alice.biography, { output: 'text' });
            assert.match(text.text, /^Alice draws\./);
            assert.match(text.text, /\/pic\/Smiley-0123abcd\.png/);
            assert.match(text.text, /A smiley\./);
            assert.doesNotMatch(text.text, /<[a-z]|\n$/);
            assert.deepStrictEqual([text.requires, text.definitions], [[], []]);
            assert.throws( () => engine.render_fragment(F.bob.notes), /eq:energy/ );
        });

        it('render_text of two fragments: one run, and each alone', function () {
            const out = engine.render_text([F.bob.biography, F.bob.notes]);
            assert.deepStrictEqual(out.diagnostics, []);
            assert.strictEqual(out.has_errors, false);
            assert.match(out.text, /Bob is a friend of Alice Aaliz\.¹ He wrote\u00a0\[1\]\./);
            assert.match(out.text, /Bob proved \(1\)\./);
            assert.doesNotMatch(out.text, /References|A title/);
            assert.strictEqual(out.trees.length, 2);
            // Alone, the \eqref does not resolve: shown as its label, reported
            // in the fragment's own diagnostics.
            assert.match(out.trees[1], /^Bob proved .*eq:energy/);
            assert.deepStrictEqual(out.tree_diagnostics[0], []);
            assert.deepStrictEqual(out.tree_diagnostics[1].map( (d) => [d.identifier, d.origin] ),
                                   [['flm.refs.unresolved', F.bob.notes.origin]]);
            const wrapped = engine.render_text([F.bob.biography], { width: 20, per_fragment: false });
            assert.match(wrapped.text, /^Bob is a friend of\nAlice Aaliz/);
            assert.deepStrictEqual(wrapped.trees, []);
        });

        it('render_latex gives the recomposed LaTeX of the fragments', function () {
            const out = engine.render_latex([F.bob.biography, F.bob.notes], { raw_label_types: ['person'] });
            assert.strictEqual(out.has_errors, false);
            assert.match(out.trees[0], /\\flmCite\{arXiv:1234\.5678\}/);
            assert.match(out.trees[1], /\\eqref\{ref1\}/);
            assert.match(out.style_name, /\.sty$/);
        });
    });

    describe('diagnostics', function () {

        it('an unknown macro under abort throws a ZooFlmError naming the origin', function () {
            assert.throws(
                () => engine.make_fragment('Hello\n  \\nosuchmacro{x}', { origin: origin('dave', 'biography') }),
                (err) => {
                    assert.ok(err instanceof ZooFlmError);
                    // The parts the engine writes (flm-core's message text is not stable).
                    assert.ok(err.message.startsWith('people/dave.yml#biography:2:3: error: '), err.message);
                    assert.ok(err.message.endsWith(' [core.specs.unresolvable-command]'), err.message);
                    assert.ok(!err.message.includes('\n'));
                    assert.strictEqual(err.diagnostics.length, 1);
                    return true;
                },
            );
        });

        it('under continue, the html holds the backend\'s recovery and the diagnostic is returned', function () {
            const f = engine.make_fragment('Hello \\nosuchmacro{x} there', {
                origin: origin('dave', 'name'), standalone: true, error_policy: 'continue',
            });
            assert.strictEqual(f.diagnostics.length, 1);
            const d = f.diagnostics[0];
            assert.strictEqual(d.origin, f.origin);
            assert.deepStrictEqual([d.severity, d.identifier, d.start, d.end, d.line, d.col],
                                   ['error', 'core.specs.unresolvable-command', 6, 18, 1, 7]);
            const out = engine.render_document({ error_policy: 'continue', compose: ({ rdrblock }) => rdrblock(f) });
            assert.match(out.html, /<span class="flm-pres-unknown"[^>]*>\\nosuchmacro<\/span>/);
            assert.strictEqual(out.has_errors, true);
            assert.deepStrictEqual(out.diagnostics.map( (d) => d.identifier ), ['core.specs.unresolvable-command']);
            assert.ok(out.requires.includes('flm.html.style.errors'));
            assert.throws( () => engine.render_document({ compose: ({ rdrblock }) => rdrblock(f) }), ZooFlmError );
            // A snippet with an Error is not cached.
            assert.match(engine.render_fragment(f, { error_policy: 'continue' }).html, /flm-pres-unknown/);
            engine.render_snippets([f], { error_policy: 'continue' });
            assert.strictEqual(engine.snippet_entry(f), null);
            engine.release(f);
        });

        it('gives positions in the file from an origin with start_line', function () {
            const f = engine.make_fragment('First line\nsecond — line \\nosuch', {
                origin: origin('erin', 'description', { start_line: 12, start_col: 5, indent: 4 }),
                error_policy: 'continue',
            });
            const [d] = f.diagnostics;
            // The column counts characters (the em dash is three bytes).
            assert.deepStrictEqual([d.line, d.col, d.file_line, d.file_col], [2, 15, 13, 19]);
            const line = format_diagnostic(d);
            assert.ok(line.startsWith('people/erin.yml#description:13:19: error: '), line);
            assert.ok(line.endsWith(' [core.specs.unresolvable-command]'), line);
            const g = engine.make_fragment('\\nosuch', {
                origin: origin('erin', 'name', { start_line: 3, start_col: 7 }), error_policy: 'continue',
            });
            assert.deepStrictEqual([g.diagnostics[0].file_line, g.diagnostics[0].file_col], [3, 7]);
            const h = engine.make_fragment('\\nosuch', { origin: 'ad hoc', error_policy: 'continue' });
            assert.deepStrictEqual([h.diagnostics[0].file_line, h.diagnostics[0].file_col], [null, null]);
            assert.match(format_diagnostic(h.diagnostics[0]), /^ad hoc:1:1: error: /);
            engine.release([f, g, h]);
        });
    });

    describe('stylesheet, truncation and scan', function () {

        it('html_definitions() lists every definition; html_stylesheet() leaves out the page', function () {
            const defs = engine.html_definitions();
            const ids = defs.map( (d) => d.id );
            for (const id of ['flm.html.style.core', 'flm.html.style.page', 'flm.html.mathjax']) {
                assert.ok(ids.includes(id), id);
            }
            const mathjax = defs.find( (d) => d.id === 'flm.html.mathjax' );
            assert.strictEqual(mathjax.kind, 'script');
            assert.deepStrictEqual(mathjax.parts.map( (p) => p.kind ), ['inline', 'url']);
            const css = engine.html_stylesheet();
            assert.match(css, /^\/\* flm\.html\.style\.core \*\/$/m);
            assert.match(css, /@layer flm/);
            assert.doesNotMatch(css, /^\/\* flm\.html\.style\.page/m);
            const page = defs.find( (d) => d.id === 'flm.html.style.page' ).parts[0].text;
            assert.ok(!css.includes(page.split('\n').slice(1).join('\n').trim()));
            const with_text = defs.filter( (d) => d.kind === 'style' && d.id !== 'flm.html.style.page'
                                           && d.parts.some( (p) => p.kind === 'inline' && p.text ) );
            assert.ok(with_text.length >= 10);
            for (const d of with_text) {
                assert.match(css, new RegExp(`^/\\* ${d.id.replace(/\./g, '\\.')}( |\\*)`, 'm'));
            }
        });

        it('truncate() makes a shortened fragment that parses and renders', function () {
            const long = engine.make_fragment(
                'A rather long description with \\emph{emphasized words inside} and more text after it.',
                { origin: origin('frank', 'description') },
            );
            const { fragment, truncated, cut_at } = engine.truncate(long, { chars: 30 });
            assert.ok(truncated && cut_at > 0 && cut_at < long.source.length);
            assert.strictEqual(fragment.source, 'A rather long description with \\emph{ …}');
            assert.deepStrictEqual(fragment.diagnostics, []);
            // The label is kept (the tables key on it); the origin says truncated.
            assert.strictEqual(fragment.origin.label, 'people/frank.yml#description');
            assert.strictEqual(fragment.origin.truncated, true);
            assert.strictEqual(fragment.origin.object_id, 'frank');
            const html = engine.render_fragment(fragment).html;
            assert.match(html, /^A rather long description with <em[^>]*> …<\/em>$/);
            // Cut inside the group, which is closed.
            const inside = engine.truncate(long, { chars: 40 }).fragment;
            assert.strictEqual(inside.source, 'A rather long description with \\emph{emphasized …}');
            assert.match(engine.render_fragment(inside).html, /<em[^>]*>emphasized …<\/em>$/);
            const whole = engine.truncate(long, { chars: 500 });
            assert.strictEqual(whole.truncated, false);
            assert.strictEqual(whole.fragment.source, long.source);
            engine.release([long, fragment, inside, whole.fragment]);
        });

        it('a truncated preview keeps its images and its label for the diagnostics', function () {
            const { fragment } = engine.truncate(F.alice.biography, { chars: 55 });
            assert.ok(fragment.source.includes('\\includegraphics{images/Smiley}'), fragment.source);
            assert.strictEqual(fragment.origin.label, F.alice.biography.origin.label);
            const out = engine.render_fragment(fragment);
            assert.deepStrictEqual(out.diagnostics, []);
            assert.match(out.html, /<img [^>]*src="\/pic\/Smiley-0123abcd\.png"/);
            // A second fragment with the label does not take the first's place
            // in the diagnostics map, and its release leaves the first's.
            engine.release(fragment);
            assert.strictEqual(engine._fragments_of_label.get(F.alice.biography.origin.label)[0], F.alice.biography);
            const bad = engine.make_fragment('x \\nosuch', { origin: origin('gina', 'f'), error_policy: 'continue' });
            const preview = engine.truncate(bad, { chars: 100, error_policy: 'continue' }).fragment;
            const line = format_diagnostic(preview.diagnostics[0]);
            assert.ok(line.startsWith('people/gina.yml#f:1:3 (truncated): error: '), line);
            engine.release([bad, preview]);
        });

        it('scan() reports the labels, references, cited keys and images per fragment', function () {
            const fragments = Object.values(F).flatMap( (fs) => Object.values(fs) );
            const scan = engine.scan(fragments);
            const tree = (f) => scan.trees.find( (t) => t.fragment === f );
            assert.strictEqual(scan.trees.length, fragments.length);
            assert.deepStrictEqual(tree(F.bob.biography).labels, ['eq:energy']);
            assert.deepStrictEqual(tree(F.alice.biography).labels, ['figure:smiley']);
            assert.deepStrictEqual(tree(F.bob.notes).refs_resolved, ['#eq-energy']);
            assert.deepStrictEqual(tree(F.bob.biography).refs_unresolved, ['person:alice']);
            assert.deepStrictEqual(tree(F.alice.biography).graphics,
                                   [{ path: 'images/Smiley', origin: 'people/alice.yml#biography' }]);
            assert.deepStrictEqual(scan.cited.map( ({ key, origin, fragment }) => [key, origin, fragment] ),
                                   [['arXiv:1234.5678', 'people/bob.yml#biography', F.bob.biography]]);
            assert.deepStrictEqual(scan.duplicate_labels, []);
            assert.strictEqual(scan.standalone_violations, 0);
            // The scan installs no index: the object reference is a Warning.
            assert.deepStrictEqual(scan.diagnostics.map( (d) => `${d.severity} ${d.identifier} ${d.origin.label}` ),
                                   ['warning flm.refs.unresolved people/bob.yml#biography']);
            assert.strictEqual(scan.has_errors, false);
        });
    });
});
