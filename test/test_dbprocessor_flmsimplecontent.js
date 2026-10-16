// Tests of the field compiler (src/dbprocessor/flmsimplecontent.js) over the
// simple test data of _helperstest.js: the FLM fields of the objects become
// fragments of the FLM engine, per the schema annotation.

import * as assert from 'assert';

import { FLMSimpleContentCompiler, flm_options_layout, field_origin } from '../src/dbprocessor/flmsimplecontent.js';

import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine, ZooFlmError, is_fragment, format_diagnostic } from '../src/zooflm/engine.js';

import { ZooDb } from '../src/index.js';

import { get_simple_test_data, schema_validator } from './_helperstest.js';


describe('zoodb.dbprocessor.flmsimplecontent', function () {

    this.timeout(20000);

    let engine;

    before(async function () {
        engine = await ZooFlmEngine.create({ load_wasm: load_zoodb_flm_wasm_node });
    });

    after(function () {
        engine?.free();
    });

    const make_zoo = (options = {}) => new ZooDb({
        processors: [ new FLMSimpleContentCompiler({ engine, ...options }) ],
        schema_validator: options.schema_validator ?? schema_validator,
    });

    describe('FLMSimpleContentCompiler', function () {

        it('compiles fragment objects on our simple test data', async function () {
            const zoodb = make_zoo();
            await zoodb.load_data(get_simple_test_data());

            const pasta = zoodb.objects.dish.pasta;
            assert.ok(is_fragment(pasta.description));
            assert.strictEqual(pasta.description.source,
                               get_simple_test_data().objects.dish.pasta.description);
            assert.strictEqual(zoodb.objects.utensil.fork.description.source,
                               get_simple_test_data().objects.utensil.fork.description);
            // the origin of a field's fragment, its canonical label
            assert.deepStrictEqual(
                { ...pasta.description.origin },
                { object_type: 'dish', object_id: 'pasta', field: 'description', source_path: null,
                  label: 'dish:pasta#description' },
            );
            assert.deepStrictEqual(pasta._zoodb.flm_fields,
                                   ['name', 'description', 'relations.eaten_with.0.how',
                                    'relations.eaten_with.1.how']);
            assert.deepStrictEqual(pasta._zoodb.flm_diagnostics, []);
            assert.match(engine.render_fragment(zoodb.objects.utensil.fork.description).html,
                         /^Has <em[^>]*>pointy<\/em> spikes/);
        });

        it('compiles fragment objects in block level mode as per schema', async function () {
            const zoodb = make_zoo();
            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta.description.layout, 'blocks');
            assert.match(engine.render_fragment(zoodb.objects.dish.pasta.description).html,
                         /^<p class="flm-pres-par">Like, you know/);
        });

        it('can turn fragments to their FLM source in data dumps', async function () {
            const zoodb = make_zoo();
            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({
                // flm_fragments_to_flm_text: true, // it's the default
                remove_zoodb_info: true,
            });
            assert.deepStrictEqual(dump, { db: get_simple_test_data() });

            // keep the instances
            dump = await zoodb.data_dump({ flm_fragments_keep_instances: true });
            assert.strictEqual(dump.db.objects.dish.pasta.description, zoodb.objects.dish.pasta.description);
            assert.deepStrictEqual(dump.db.objects.dish.pasta._zoodb.flm_fields.length, 4);

            // the dump to node dumps is gone
            await assert.rejects(zoodb.data_dump({ flm_fragments_to_flm_dump: true }),
                                 /flm_fragments_to_flm_dump is no longer supported/);
            // without the bookkeeping
            dump = await zoodb.data_dump({ flm_keep_zoodb_info_flm_fields: false });
            assert.ok(!('flm_fields' in dump.db.objects.dish.pasta._zoodb));
            assert.ok(!('flm_diagnostics' in dump.db.objects.dish.pasta._zoodb));
            assert.ok('flm_fields' in zoodb.objects.dish.pasta._zoodb, 'the zoo itself is left alone');
        });

        it('compiles nested FLM fields (relation objects with FLM)', async function () {
            const zoodb = make_zoo();
            await zoodb.load_data(get_simple_test_data());

            // The 'how' field inside relations.eaten_with items has _flm: "full"
            const how_frag = zoodb.objects.dish.pasta.relations.eaten_with[0].how;
            assert.ok(is_fragment(how_frag));
            assert.strictEqual(how_frag.source,
                               get_simple_test_data().objects.dish.pasta.relations.eaten_with[0].how);
            assert.strictEqual(how_frag.origin.field, 'relations.eaten_with.0.how');
            assert.strictEqual(how_frag.layout, 'auto');
        });

        it('FLM compilation error handling with abort policy throws', async function () {
            const data = get_simple_test_data();
            // Introduce malformed FLM
            data.objects.utensil.fork.description = 'Fine \\invalidcommand{broken}';
            data.objects.utensil.fork.name = 'Fork \\alsonotacommand';

            const zoodb = make_zoo({ error_policy: 'abort', schema_validator: false });

            await assert.rejects(zoodb.load_data(data), (err) => {
                assert.ok(err instanceof ZooFlmError, err.stack);
                // both errors of the object, after all its fields are parsed
                const lines = err.message.split('\n');
                assert.strictEqual(lines.length, 2, err.message);
                assert.ok(lines[0].startsWith('utensil:fork#name:1:6: error: '), lines[0]);
                assert.ok(lines[1].startsWith('utensil:fork#description:1:6: error: '), lines[1]);
                return true;
            });
            // the diagnostics are on the object
            assert.strictEqual(zoodb.objects.utensil.fork._zoodb.flm_diagnostics.length, 2);
        });

        it('FLM compilation error with continue policy keeps the fragment and the diagnostics', async function () {
            const data = get_simple_test_data();
            data.objects.utensil.fork.description = 'Fine \\invalidcommand{broken}';

            const zoodb = make_zoo({ error_policy: 'continue', schema_validator: false });
            await zoodb.load_data(data);

            const frag = zoodb.objects.utensil.fork.description;
            assert.ok(is_fragment(frag));
            assert.strictEqual(frag.source, data.objects.utensil.fork.description);
            const diagnostics = zoodb.objects.utensil.fork._zoodb.flm_diagnostics;
            assert.deepStrictEqual(diagnostics.map( (d) => [d.severity, d.identifier] ),
                                   [['error', 'core.specs.unresolvable-command']]);
            assert.strictEqual(diagnostics[0].origin, frag.origin);
            assert.match(format_diagnostic(diagnostics[0]), /^utensil:fork#description:1:6: error: /);
            // the backend's recovery markup, no fake error fragment
            const out = engine.render_fragment(frag, { error_policy: 'continue' });
            assert.match(out.html, /^Fine <span class="flm-pres-unknown"/);
        });

        it('_flm: "standalone" vs "full" vs "block_level" differences', async function () {
            const zoodb = make_zoo();
            await zoodb.load_data(get_simple_test_data());

            // name has _flm: "standalone"
            const name_frag = zoodb.objects.utensil.fork.name;
            assert.strictEqual(name_frag.standalone, true);
            assert.strictEqual(name_frag.layout, 'inline');

            // utensil description has _flm: "full"
            const desc_frag = zoodb.objects.utensil.fork.description;
            assert.strictEqual(desc_frag.standalone, false);
            assert.strictEqual(desc_frag.layout, 'auto');

            // dish description has _flm: "block_level"
            assert.strictEqual(zoodb.objects.dish.pasta.description.standalone, false);
            assert.strictEqual(zoodb.objects.dish.pasta.description.layout, 'blocks');

            assert.deepStrictEqual(
                [{ standalone: true }, { standalone: true, is_block_level: true }, { is_block_level: false },
                 {}, { is_block_level: null }].map(flm_options_layout),
                ['inline', 'blocks', 'inline', 'auto', 'auto'],
            );
        });

        it('takes the field positions the loader recorded, and releases replaced objects', async function () {
            const zoodb = make_zoo({ error_policy: 'continue', schema_validator: false });
            const data = get_simple_test_data();
            data.objects.utensil.fork._zoodb = {
                source_file_path: 'utensils/fork.yml',
                flm_field_positions: { description: { line: 7, col: 3, indent: 2, style: 'literal' } },
            };
            data.objects.utensil.fork.description = 'One line\nand \\nosuch';
            await zoodb.load_data(data);
            const fork = zoodb.objects.utensil.fork;
            const origin = field_origin('utensil', fork, 'description');
            assert.deepStrictEqual(origin, {
                object_type: 'utensil', object_id: 'fork', field: 'description',
                source_path: 'utensils/fork.yml', start_line: 7, start_col: 3, indent: 2,
            });
            assert.strictEqual(fork.description.origin.label, 'utensils/fork.yml#description');
            const [d] = fork._zoodb.flm_diagnostics;
            assert.deepStrictEqual([d.file_line, d.file_col], [8, 7]);
            assert.match(format_diagnostic(d), /^utensils\/fork\.yml#description:8:7: error: /);

            // a reload releases the fragments of the objects it replaces
            const old_fragments = [fork.name, fork.description];
            const count = engine.core.fragment_count();
            await zoodb.update_objects({
                utensil: { fork: { utl_id: 'fork', name: 'Fork 2', description: 'New', _zoodb: {} } },
            });
            assert.ok(old_fragments.every( (f) => f.released ));
            assert.strictEqual(zoodb.objects.utensil.fork.name.source, 'Fork 2');
            assert.strictEqual(engine.core.fragment_count(), count);
            // the fragments of the other objects are kept
            assert.strictEqual(zoodb.objects.utensil.knife.name.released, false);
        });

    });

});
