import * as assert from 'assert';

import jsonschema from 'jsonschema';

import { ZooDb } from '../src/_zoodb.js';

import { get_simple_test_data } from './_helperstest.js';


describe('zoodb._zoodb', function () {

    describe('ZooDb', function () {

        it('adds the _zoodb field to objects if necessary', async function () {

            let zoodb = new ZooDb({});
            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta._zoodb?.id, 'pasta');
        });

        it('raises schema validation errors', async function () {

            let simple_test_data_error = get_simple_test_data();
            simple_test_data_error.schemas.ustensil.properties.name.type = 'array';

            let zoodb = new ZooDb({
                shema_validator: new jsonschema.Validator()
            });

            assert.rejects( async () => {
                await zoodb.load_data(simple_test_data_error);
            }, /Schema validation failed/i );

        });

        it('does not modify original data provided to load_data', async function () {

            let simple_test_data = get_simple_test_data();

            let zoodb = new ZooDb({});
            await zoodb.load_data(simple_test_data);

            assert.deepStrictEqual(simple_test_data, get_simple_test_data());
        });

        it('dumps data that it was initialized with', async function () {

            let simple_test_data = get_simple_test_data();

            let zoodb = new ZooDb({});
            await zoodb.load_data(simple_test_data);

            let dump = await zoodb.data_dump({ remove_zoodb_info: true });

            assert.deepEqual(dump, {db: get_simple_test_data()});

        });
    });
});
