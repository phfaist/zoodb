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

        it('schema_validator: false disables validation without throwing', async function () {

            let simple_test_data = get_simple_test_data();
            // Make the data invalid against the schema
            simple_test_data.schemas.utensil.properties.name.type = 'array';

            let zoodb = new ZooDb({ schema_validator: false });
            // Should not throw — validation is disabled
            await zoodb.load_data(simple_test_data);

            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
        });

        it('schema_validator omitted (null/undefined) throws a clear error', function () {

            assert.throws(() => {
                new ZooDb({});
            }, /No schema validator/i);

            assert.throws(() => {
                new ZooDb({ schema_validator: null });
            }, /No schema validator/i);

            assert.throws(() => {
                new ZooDb({ schema_validator: undefined });
            }, /No schema validator/i);
        });

        it('normalize_id_for_uniqueness_check custom function is respected', async function () {

            // Use identity function so 'Fork' and 'fork' are different
            let zoodb = new ZooDb({
                schema_validator: false,
                normalize_id_for_uniqueness_check: (x) => x,
            });

            let data = get_simple_test_data();
            await zoodb.load_data(data);

            // With the identity normalizer, 'fork' and 'Fork' would be different IDs
            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
        });

        it('schema(object_type) returns the correct schema', async function () {

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(get_simple_test_data());

            let schema = zoodb.schema('utensil');
            assert.strictEqual(schema._zoo_primarykey, 'utl_id');
        });

        it('schema(nonexistent_type) throws', async function () {

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(get_simple_test_data());

            assert.throws(() => {
                zoodb.schema('nonexistent');
            }, /No zoo schema/i);
        });

        it('object_types getter returns all registered types', async function () {

            let zoodb = new ZooDb({ schema_validator });
            await zoodb.load_data(get_simple_test_data());

            let types = zoodb.object_types;
            assert.ok(types.includes('utensil'));
            assert.ok(types.includes('dish'));
            assert.strictEqual(types.length, 2);
        });

        it('update_objects() correctly updates existing objects', async function () {

            let zoodb = new ZooDb({ schema_validator: false });
            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');

            await zoodb.update_objects({
                utensil: {
                    fork: {
                        utl_id: 'fork',
                        name: 'Updated Fork',
                        description: 'An updated fork',
                        _zoodb: { id: 'fork' },
                    }
                }
            });

            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Updated Fork');
        });

        it('install_zoo_loader_handler() installs the handler and makes load() available', async function () {

            let zoodb = new ZooDb({ schema_validator: false });

            // Before installing, load() should throw
            await assert.rejects(async () => {
                await zoodb.load();
            }, /No zoo loader installed/i);

            // Create a mock loader handler
            const mockHandler = {
                initialize: async function(zdb) { this._zoodb = zdb; },
                load: async function() {
                    await this._zoodb.load_data(get_simple_test_data());
                },
            };

            await zoodb.install_zoo_loader_handler(mockHandler);
            assert.strictEqual(zoodb.zoo_loader_handler, mockHandler);

            // After installing, load() should work
            await zoodb.load();
            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
        });

        it('install_zoo_loader_handler() throws if handler already installed', async function () {

            let zoodb = new ZooDb({ schema_validator: false });

            const mockHandler = {
                initialize: async function() {},
                load: async function() {},
            };

            await zoodb.install_zoo_loader_handler(mockHandler);

            await assert.rejects(async () => {
                await zoodb.install_zoo_loader_handler(mockHandler);
            }, /already a loader handler/i);
        });

        it('install_zoo_loader_handler(null) removes the handler', async function () {

            let zoodb = new ZooDb({ schema_validator: false });

            const mockHandler = {
                initialize: async function() {},
                load: async function() {},
            };

            await zoodb.install_zoo_loader_handler(mockHandler);
            assert.ok(zoodb.zoo_loader_handler != null);

            await zoodb.install_zoo_loader_handler(null);
            assert.strictEqual(zoodb.zoo_loader_handler, null);
        });

    });
});
