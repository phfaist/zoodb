import * as assert from 'assert';

import fs from 'fs';

import { FLMSimpleContentCompiler } from '../src/dbprocessor/flmsimplecontent.js';

import { ZooFLMEnvironment } from '../src/zooflm/index.js';

import { ZooDb } from '../src/index.js';


import { get_simple_test_data, schema_validator } from './_helperstest.js';



describe('zoodb.dbprocessor.flmsimplecontent', function () {

    describe('FLMSimpleContentCompiler', function () {

        let flm_environment = new ZooFLMEnvironment();

        it('compiles fragment objects on our simple test data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta.description.flm_text,
                               get_simple_test_data().objects.dish.pasta.description);
            assert.strictEqual(zoodb.objects.utensil.fork.description.flm_text,
                               get_simple_test_data().objects.utensil.fork.description);

        });

        it('compiles fragment objects in block level mode as per schema', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(
                zoodb.objects.dish.pasta.description.nodes.parsing_state.is_block_level,
                true
            );

        });

        it('can turn FLMFragment instances to flm_text in data dumps', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({
                // flm_fragments_to_flm_text: true, // it's the default
                remove_zoodb_info: true,
            });

            assert.deepStrictEqual(dump, { db: get_simple_test_data() });

        });

        it('can turn FLMFragment instances to flm node dumps in data dumps', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({
                flm_fragments_to_flm_dump: true,
                remove_zoodb_info: true,
            });

            let flm_key = dump.db.objects.dish.pasta.description.flm_fragment_key;
            assert.notEqual(flm_key, null);

            let flm_fragment_dump = dump.flm_fragment_data.dumps[flm_key];

            assert.deepStrictEqual(zoodb.objects.dish.pasta.description.flm_text,
                                   flm_fragment_dump.flm_text);

        });

        it('compiles nested FLM fields (relation objects with FLM)', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            // The 'how' field inside relations.eaten_with items has _flm: "full"
            const how_frag = zoodb.objects.dish.pasta.relations.eaten_with[0].how;
            assert.ok(how_frag);
            assert.ok(how_frag.flm_text);
            assert.strictEqual(how_frag.flm_text,
                get_simple_test_data().objects.dish.pasta.relations.eaten_with[0].how);
        });

        it('FLM compilation error handling with abort policy throws', async function () {

            const data = get_simple_test_data();
            // Introduce malformed FLM
            data.objects.utensil.fork.description = '\\invalidcommand{broken}';

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({
                        flm_environment,
                        flm_error_policy: 'abort',
                    }),
                ],
                schema_validator: false,
            });

            await assert.rejects(async () => {
                await zoodb.load_data(data);
            }, /FLM Error/);
        });

        it('FLM compilation error with continue policy produces error fragment', async function () {

            const data = get_simple_test_data();
            data.objects.utensil.fork.description = '\\invalidcommand{broken}';

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({
                        flm_environment,
                        flm_error_policy: 'continue',
                    }),
                ],
                schema_validator: false,
            });

            await zoodb.load_data(data);

            // Should have an error info attached
            const frag = zoodb.objects.utensil.fork.description;
            assert.ok(frag._flm_error_info);
            assert.ok(frag._flm_error_info.message_string);
        });

        it('_flm: "standalone" vs "full" vs "block_level" differences', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new FLMSimpleContentCompiler({ flm_environment, }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            // name has _flm: "standalone" — standalone_mode should be true
            const name_frag = zoodb.objects.utensil.fork.name;
            assert.ok(name_frag.standalone_mode);

            // utensil description has _flm: "full" — standalone_mode should be false
            const desc_frag = zoodb.objects.utensil.fork.description;
            assert.strictEqual(desc_frag.standalone_mode, false);

            // dish description has _flm: "block_level" — is_block_level should be true
            assert.strictEqual(
                zoodb.objects.dish.pasta.description.nodes.parsing_state.is_block_level,
                true
            );
        });

    });

});
