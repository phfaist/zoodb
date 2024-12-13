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

    });    

    describe('RelationsPopulator#process_data_dump', function () {

    });

});
