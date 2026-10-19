// Tests of the FLM processor's index for an object type without pages: an
// object whose object_href returns null gets no index entry in that context
// (nor do the labels of its fields), the other types are indexed, a \ref to
// it is unresolved there (flm.refs.unresolved), and an href that is neither
// a string nor null is still refused by set_index().  Over the simple test
// data (dishes and utensils), without the standard setup.  No network.

import * as assert from 'assert';

import { ZooDb } from '../src/index.js';

import { ZooFlmProcessor } from '../src/dbprocessor/flmprocessor.js';
import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine, ZooFlmError } from '../src/zooflm/engine.js';

import { get_simple_test_data, schema_validator } from './_helperstest.js';


const load_wasm = load_zoodb_flm_wasm_node;

// The utensils have no page on the site (`default`), but one in the
// handbook (`handbook`).
const contexts = {
    default: {
        object_href: (object_type, object_id) => ((object_type === 'utensil') ? null : `/${object_type}/${object_id}`),
    },
    handbook: {
        object_href: (object_type, object_id) => `hb/${object_type}-${object_id}.html`,
    },
};

// The simple test data, with a label in a utensil's field, and references
// to the utensil and to that label from a dish and from the utensil itself.
function test_data()
{
    const data = get_simple_test_data();
    const { utensil, dish } = data.objects;
    utensil.spoon.description = 'A spoon.\n\n\\section{The handle}\\label{sec:spoon-handle}\n'
        + 'Held by \\ref{sec:spoon-handle}.';
    dish.soup.description = 'Soup, eaten with a \\ref{utensil:spoon} (see \\ref{sec:spoon-handle}) '
        + 'or like \\ref{dish:pasta}.';
    return data;
}

const identifiers = (diagnostics) => diagnostics.map( (d) => `${d.severity} ${d.identifier}` );
const labels_of = (diagnostics) => diagnostics.map( (d) => d.message.match(/`([^`]*)`/)?.[1] );


describe('ZooFlmProcessor, an object type without pages', function () {

    this.timeout(30000);

    describe('object_href returns null', function () {

        let engine;
        let zoodb;
        let processor;

        before(async function () {
            engine = await ZooFlmEngine.create({ load_wasm });
            processor = new ZooFlmProcessor({ engine, contexts });
            zoodb = new ZooDb({ processors: [processor], schema_validator });
            await zoodb.load_data(test_data());
        });

        after(function () {
            engine?.free();
        });

        it('gives the object and the labels of its fields no index entry in that context', function () {
            const index = engine.tables.index;
            assert.deepStrictEqual(index.default.map( (e) => [e.label, e.href] ), [
                ['dish:pasta', '/dish/pasta'],
                ['dish:soup', '/dish/soup'],
            ]);
            // the other context indexes them
            assert.deepStrictEqual(index.handbook.map( (e) => [e.label, e.href] ), [
                ['utensil:fork', 'hb/utensil-fork.html'],
                ['utensil:knife', 'hb/utensil-knife.html'],
                ['utensil:spoon', 'hb/utensil-spoon.html'],
                ['dish:pasta', 'hb/dish-pasta.html'],
                ['dish:soup', 'hb/dish-soup.html'],
                ['sec:spoon-handle', 'hb/utensil-spoon.html#sec-spoon-handle'],
            ]);
            // the data dump carries the same index
            const zooflm = engine.dump();
            assert.deepStrictEqual(zooflm.index.default.map( (e) => e.label ), ['dish:pasta', 'dish:soup']);
            assert.strictEqual(zooflm.index.handbook.length, 6);
        });

        it('keeps the object in the zoo and in the scan results, and warns about nothing', function () {
            const spoon = zoodb.objects.utensil.spoon;
            assert.ok(spoon != null);
            assert.deepStrictEqual(identifiers(spoon._zoodb.flm_diagnostics), []);
            const scan = processor.object_scan('utensil', 'spoon');
            assert.deepStrictEqual(scan.labels.map( (l) => [l.label, l.anchor] ),
                                   [['sec:spoon-handle', 'sec-spoon-handle']]);
            assert.deepStrictEqual(scan.refs.map( (r) => r.label ), ['sec:spoon-handle']);
            // the references to it resolve in the zoo: no zoodb.refs.unresolved
            assert.deepStrictEqual(identifiers(zoodb.objects.dish.soup._zoodb.flm_diagnostics), []);
            assert.deepStrictEqual(identifiers(processor.diagnostics), []);
        });

        it('renders a \\ref to it as unresolved (flm.refs.unresolved) in that context only', function () {
            const soup = zoodb.objects.dish.soup;
            const compose = ({ rdrblock }) => rdrblock(soup.description);

            // the engine's default `unresolved: 'error'`: an Error, thrown under 'abort'
            assert.throws( () => engine.render_document({ compose }), (err) => {
                assert.ok(err instanceof ZooFlmError, err.stack);
                assert.match(err.message,
                             /the reference points at the label `utensil:spoon`, which is not defined \[flm\.refs\.unresolved\]/);
                return true;
            });
            const kept = engine.render_document({ compose, error_policy: 'continue' });
            assert.deepStrictEqual(identifiers(kept.diagnostics),
                                   ['error flm.refs.unresolved', 'error flm.refs.unresolved']);
            assert.deepStrictEqual(labels_of(kept.diagnostics), ['utensil:spoon', 'sec:spoon-handle']);
            assert.match(kept.html, /<span class="flm-pres-span" data-flm-style="unresolved-reference">utensil:spoon<\/span>/);
            assert.match(kept.html, /<a class="flm-pres-link" href="\/dish\/pasta"[^>]*>Pasta<\/a>/);

            // with `unresolved: 'warn'` (allow_unresolved_references): a Warning
            const warned = engine.render_document({ compose, unresolved: 'warn' });
            assert.deepStrictEqual(identifiers(warned.diagnostics),
                                   ['warning flm.refs.unresolved', 'warning flm.refs.unresolved']);
            assert.strictEqual(warned.html, kept.html);

            // the text output (the searchable text) likewise
            const text = engine.render_text([soup.description], { unresolved: 'warn' });
            assert.deepStrictEqual(identifiers(text.diagnostics),
                                   ['warning flm.refs.unresolved', 'warning flm.refs.unresolved']);

            // the composer's ref() to it
            const ref = engine.render_document({ compose: ({ ref }) => ref('utensil', 'spoon'), unresolved: 'warn' });
            assert.deepStrictEqual(identifiers(ref.diagnostics), ['warning zoodb.ref.unresolved']);
            assert.strictEqual(ref.html, '<span class="href-ref ref-unresolved">utensil:spoon</span>');
            let href;
            const refhref = engine.render_document({
                compose: ({ refhref }) => { href = refhref('utensil', 'spoon'); return ''; }, unresolved: 'warn',
            });
            assert.strictEqual(href, null);
            assert.deepStrictEqual(identifiers(refhref.diagnostics), ['warning zoodb.ref.unresolved']);

            // in the context where it has a page, it resolves
            const hb = engine.render_document({ compose, context: 'handbook' });
            assert.deepStrictEqual(identifiers(hb.diagnostics), []);
            assert.match(hb.html, /<a class="flm-pres-link" href="hb\/utensil-spoon\.html"[^>]*>Spoon<\/a>/);
            assert.match(hb.html,
                         /<a class="flm-pres-link" href="hb\/utensil-spoon\.html#sec-spoon-handle"[^>]*>The handle<\/a>/);
        });

        it('resolves a label of its fields in its own document', function () {
            const spoon = zoodb.objects.utensil.spoon;
            const out = engine.render_document({ compose: ({ rdrblock }) => rdrblock(spoon.description) });
            assert.deepStrictEqual(identifiers(out.diagnostics), []);
            assert.match(out.html, /Held by <a class="flm-pres-link" href="#sec-spoon-handle"[^>]*>The handle<\/a>/);
        });
    });

    describe('an href that is neither a string nor null', function () {

        for (const [what, value] of [['undefined (a forgotten return)', undefined], ['a number', 42],
                                     ['an object', { href: '/x' }]]) {
            it(`is refused by set_index() for ${what}`, async function () {
                const engine = await ZooFlmEngine.create({ load_wasm });
                try {
                    const processor = new ZooFlmProcessor({ engine, contexts: {
                        default: {
                            object_href: (object_type, object_id) =>
                                ((object_type === 'utensil') ? value : `/${object_type}/${object_id}`),
                        },
                    } });
                    const zoodb = new ZooDb({ processors: [processor], schema_validator });
                    let error = null;
                    try {
                        await zoodb.load_data(test_data());
                    } catch (err) {
                        error = err;
                    }
                    assert.ok(error instanceof TypeError, `expected a TypeError, got ${error?.stack ?? error}`);
                    assert.match(error.message, /^set_index\(\): an entry is \{ label, href, display \}, got /);
                    assert.match(error.message, /"label":"utensil:fork"/);
                    // no context's index was set
                    assert.deepStrictEqual(Object.keys(engine.tables.index), []);
                } finally {
                    engine.free();
                }
            });
        }
    });
});
