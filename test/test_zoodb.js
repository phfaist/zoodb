import * as assert from 'assert';

import { ZooDb } from '../src/_zoodb.js';

import { get_simple_test_data, schema_validator, } from './_helperstest.js';


describe('zoodb._zoodb', function () {

    describe('ZooDb', function () {

        it('can load schemas and data in one call to load_data', async function () {

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.schemas.utensil._zoo_primarykey, 'utl_id');
            assert.strictEqual(zoodb.objects.dish.pasta.name, 'Pasta');
        });

        it('can load schemas and data in separate calls to load_data', async function () {

            let zoodb = new ZooDb({ schema_validator });
            let data = get_simple_test_data();
            await zoodb.load_data({ schemas: data.schemas });
            await zoodb.load_data({ objects: data.objects });

            assert.strictEqual(zoodb.schemas.utensil._zoo_primarykey, 'utl_id');
            assert.strictEqual(zoodb.objects.dish.pasta.name, 'Pasta');
        });

        it('can load schemas and data in separate calls to load_schemas and load_data', async function () {

            let zoodb = new ZooDb({ schema_validator });
            let data = get_simple_test_data();
            await zoodb.load_schemas({ schemas: data.schemas });
            await zoodb.load_data({ objects: data.objects });

            assert.strictEqual(zoodb.schemas.utensil._zoo_primarykey, 'utl_id');
            assert.strictEqual(zoodb.objects.dish.pasta.name, 'Pasta');
        });

        it('refuses to load data without having loaded any schema', async function () {

            let zoodb = new ZooDb({ schema_validator });
            let data = get_simple_test_data();

            await assert.rejects( async () => {
                await zoodb.load_data({ objects: data.objects });
            }, /No schemas loaded/i );
        });

        it('refuses to load data without a corresponding schema', async function () {

            let zoodb = new ZooDb({ schema_validator });
            let data = get_simple_test_data();

            await zoodb.load_schemas({
                schemas: { myobjecttype: { type: 'array', items: {} } }
            });

            await assert.rejects( async () => {
                await zoodb.load_data({ objects: data.objects });
            }, /No schema loaded/i );
        });

        it('adds the _zoodb field to objects if necessary', async function () {

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta._zoodb?.id, 'pasta');
        });

        it('raises schema validation errors', async function () {

            let simple_test_data_error = get_simple_test_data();
            simple_test_data_error.schemas.utensil.properties.name.type = 'array';

            let zoodb = new ZooDb({ schema_validator, silent: true });

            await assert.rejects( async () => {
                await zoodb.load_data(simple_test_data_error);
            }, /Schema validation failed/i );

        });

        it('does not modify original data provided to load_data', async function () {

            let simple_test_data = get_simple_test_data();

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(simple_test_data);

            assert.deepStrictEqual(simple_test_data, get_simple_test_data());
        });

        it('dumps data that it was initialized with', async function () {

            let simple_test_data = get_simple_test_data();

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(simple_test_data);

            let dump = await zoodb.data_dump({ remove_zoodb_info: true });

            assert.deepEqual(dump, {db: get_simple_test_data()});

        });

        it('dumps data that it was initialized with, with _zoodb property', async function () {

            let simple_test_data = get_simple_test_data();

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(simple_test_data);

            let dump = await zoodb.data_dump();

            let dbref = get_simple_test_data();
            
            for (const [obj_type, objdb] of Object.entries(dbref.objects)) {
                for (const [obj_id, obj] of Object.entries(objdb)) {
                    obj._zoodb = {
                        id: obj_id,
                    };
                }
            }

            assert.deepEqual(dump, {db: dbref});

        });

        it('dumps data that it was initialized with, removing _zoodb.id', async function () {

            let simple_test_data_2 = get_simple_test_data();

            for (const [obj_type, objdb] of Object.entries(simple_test_data_2.objects)) {
                for (const [obj_id, obj] of Object.entries(objdb)) {
                    obj._zoodb = {
                        flag: 1234,
                    };
                }
            }

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(simple_test_data_2);

            let dump = await zoodb.data_dump({remove_zoodb_id: true});

            let dbref = simple_test_data_2;
            
            assert.deepEqual(dump, {db: dbref});

        });

    });
});
