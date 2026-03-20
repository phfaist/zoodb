import * as assert from 'assert';

import { ZooDb, ZooDbDataLoaderHandler } from '../src/index.js';

import { get_simple_test_data, schema_validator } from './_helperstest.js';


// A mock data loader that implements the loader interface
function createMockDataLoader(data) {
    return {
        load: async ({ schemas }) => {
            return data ?? get_simple_test_data();
        },
        reload: async (dbdata, { schemas }) => {
            return {
                dbdata: data ?? get_simple_test_data(),
                reload_info: {
                    reloaded_objects: {},
                },
            };
        },
    };
}

// A mock data loader that throws on load
function createFailingDataLoader(error) {
    return {
        load: async ({ schemas }) => {
            throw error ?? new Error('Mock load failure');
        },
        reload: async (dbdata, { schemas }) => {
            throw error ?? new Error('Mock reload failure');
        },
    };
}


describe('zoodb._zoodbloaderhandler', function () {

    describe('ZooDbDataLoaderHandler', function () {

        it('initial load populates schemas and objects', async function () {

            let zoodb = new ZooDb({ schema_validator });
            let loader = createMockDataLoader();
            let handler = new ZooDbDataLoaderHandler(loader);

            await zoodb.install_zoo_loader_handler(handler);
            await zoodb.load();

            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
            assert.strictEqual(zoodb.objects.dish.pasta.name, 'Pasta');
        });

        it('second call to load() triggers reload path', async function () {

            let loadCount = 0;
            let reloadCount = 0;

            const loader = {
                load: async ({ schemas }) => {
                    loadCount++;
                    return get_simple_test_data();
                },
                reload: async (dbdata, { schemas }) => {
                    reloadCount++;
                    return {
                        dbdata: get_simple_test_data(),
                        reload_info: { reloaded_objects: {} },
                    };
                },
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler(loader);

            await zoodb.install_zoo_loader_handler(handler);
            await zoodb.load();
            assert.strictEqual(loadCount, 1);
            assert.strictEqual(reloadCount, 0);

            await zoodb.load();
            assert.strictEqual(loadCount, 1);
            assert.strictEqual(reloadCount, 1);
        });

        it('REGRESSION: if load_data() throws, _currently_loading is properly reset', async function () {

            const loader = {
                load: async ({ schemas }) => {
                    throw new Error('Load always fails');
                },
                reload: async () => ({}),
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler(loader);

            await zoodb.install_zoo_loader_handler(handler);

            // First load should throw
            await assert.rejects(async () => {
                await zoodb.load();
            }, /Load always fails/);

            // _currently_loading must be reset even though load threw
            assert.strictEqual(handler._currently_loading, false);

            // A subsequent load attempt should NOT be blocked
            // (it should still fail with the same error, not with "already loading")
            await assert.rejects(async () => {
                await zoodb.load();
            }, /Load always fails/);
        });

        it('throw_reload_errors: true propagates reload errors', async function () {

            let firstLoad = true;
            const loader = {
                load: async ({ schemas }) => {
                    return get_simple_test_data();
                },
                reload: async (dbdata, { schemas }) => {
                    throw new Error('Reload failed!');
                },
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler(loader, {
                throw_reload_errors: true,
            });

            await zoodb.install_zoo_loader_handler(handler);
            await zoodb.load();

            await assert.rejects(async () => {
                await zoodb.load();
            }, /Reload failed/);
        });

        it('throw_reload_errors: false catches reload errors', async function () {

            const loader = {
                load: async ({ schemas }) => {
                    return get_simple_test_data();
                },
                reload: async (dbdata, { schemas }) => {
                    throw new Error('Reload failed silently');
                },
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler(loader, {
                throw_reload_errors: false,
            });

            await zoodb.install_zoo_loader_handler(handler);
            await zoodb.load();

            // Should NOT throw
            await zoodb.load();

            // Original data should still be there
            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
        });

        it('multiple data loaders: schemas and objects are merged', async function () {

            const loader1 = {
                load: async ({ schemas }) => ({
                    schemas: get_simple_test_data().schemas,
                    objects: {
                        utensil: get_simple_test_data().objects.utensil,
                    },
                }),
                reload: async () => ({ reload_info: { reloaded_objects: {} } }),
            };

            const loader2 = {
                load: async ({ schemas }) => ({
                    objects: {
                        dish: get_simple_test_data().objects.dish,
                    },
                }),
                reload: async () => ({ reload_info: { reloaded_objects: {} } }),
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler([loader1, loader2]);

            await zoodb.install_zoo_loader_handler(handler);
            await zoodb.load();

            assert.strictEqual(zoodb.objects.utensil.fork.name, 'Fork');
            assert.strictEqual(zoodb.objects.dish.pasta.name, 'Pasta');
        });

        it('conflict detection: same schema name from two loaders throws', async function () {

            const loader1 = {
                load: async () => ({
                    schemas: { utensil: get_simple_test_data().schemas.utensil },
                    objects: {},
                }),
            };

            const loader2 = {
                load: async () => ({
                    schemas: { utensil: get_simple_test_data().schemas.utensil },
                    objects: {},
                }),
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler([loader1, loader2]);

            await zoodb.install_zoo_loader_handler(handler);

            await assert.rejects(async () => {
                await zoodb.load();
            }, /Conflict.*same schema name/i);
        });

        it('conflict detection: same object ID from two loaders throws', async function () {

            const loader1 = {
                load: async () => ({
                    schemas: get_simple_test_data().schemas,
                    objects: {
                        utensil: { fork: get_simple_test_data().objects.utensil.fork },
                    },
                }),
            };

            const loader2 = {
                load: async () => ({
                    objects: {
                        utensil: { fork: get_simple_test_data().objects.utensil.fork },
                    },
                }),
            };

            let zoodb = new ZooDb({ schema_validator });
            let handler = new ZooDbDataLoaderHandler([loader1, loader2]);

            await zoodb.install_zoo_loader_handler(handler);

            await assert.rejects(async () => {
                await zoodb.load();
            }, /Conflict.*same object ID/i);
        });

    });

});
