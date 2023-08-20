import * as assert from 'assert';

import fs from 'fs';
//import yaml from 'yaml';

import { ZooRelation, RelationsPopulator } from '../src/dbprocessor/relations.js';

import { ZooDb } from '../src/index.js';


import { get_simple_test_data, schema_validator } from './_helperstest.js';



describe('zoodb.dbprocessor.relations', function () {

    describe('ZooRelation', function () {

        it.skip('has tests that are written and complete', async function () {
            assert.strictEqual(true, false);
        });

    });

    describe('ZooRelation#constructor', function () {

        // it('sets property object_field', function () {
        //     let zr = new ZooRelation('
        // });
        // it('sets property to_object_type', function () {
        // });

    });


    describe('RelationsPopulator', function () {

        it('populates relation objects on our simple test data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new RelationsPopulator(),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta.relations.eaten_with[0].ustensil,
                               zoodb.objects.ustensil.fork);
            assert.strictEqual(zoodb.objects.dish.soup.relations.eaten_with[0].ustensil,
                               zoodb.objects.ustensil.spoon);

        });

        it('removes auto-populated relation fields when dumping data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new RelationsPopulator(),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({ remove_zoodb_info: true });

            assert.deepStrictEqual(dump, { db: get_simple_test_data() });

        });

    });    

    describe('RelationsPopulator#process_data_dump', function () {

    });

});
