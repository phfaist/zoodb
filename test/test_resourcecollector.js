import * as assert from 'assert';

import { ResourceCollector } from '../src/resourcecollector/index.js';


// Mock resource retriever
function createMockRetriever() {
    return {
        resolve: async (source) => ({
            resolved_source: source.replace(/^alias:/, ''),
        }),
        retrieve: async (resolved_info, source) => ({
            path: `/output/${resolved_info.resolved_source}`,
        }),
        finish: async () => {},
    };
}


describe('zoodb.resourcecollector', function () {

    describe('ResourceCollector', function () {

        it('constructs with resource types', function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics', 'files'],
            });
            assert.ok(rc);
            assert.deepStrictEqual(rc.resource_types, ['graphics', 'files']);
        });

        it('collect() gathers resources from registered retriever', async function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
            });

            await rc.collect('graphics', 'image.png');

            const data = rc.get_resource_data('graphics', 'image.png');
            assert.ok(data);
            assert.strictEqual(data.source, 'image.png');
            assert.ok(data.target_info);
        });

        it('get_resource_data() returns collected resources', async function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
            });

            await rc.collect('graphics', 'photo.jpg');

            const data = rc.get_resource_data('graphics', 'photo.jpg');
            assert.ok(data);
            assert.strictEqual(data.target_info.path, '/output/photo.jpg');
        });

        it('get_resource_data() with alias resolution', async function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
            });

            // First collect with alias: prefix (resolves to without prefix)
            await rc.collect('graphics', 'alias:photo.jpg');

            // Should be accessible via the alias
            const data = rc.get_resource_data('graphics', 'alias:photo.jpg');
            assert.ok(data);
            assert.strictEqual(data.source, 'photo.jpg');
        });

        it('get_resource_data() for non-existent resource returns undefined', function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
            });

            const data = rc.get_resource_data('graphics', 'nonexistent.png');
            assert.strictEqual(data, undefined);
        });

        it('collect() is idempotent for same source', async function () {
            let retrieveCount = 0;
            const retriever = {
                resolve: async (source) => ({ resolved_source: source }),
                retrieve: async () => { retrieveCount++; return { path: '/out' }; },
                finish: async () => {},
            };

            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: retriever },
            });

            await rc.collect('graphics', 'image.png');
            await rc.collect('graphics', 'image.png');

            assert.strictEqual(retrieveCount, 1);
        });

        it('collect() throws for invalid resource type', async function () {
            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
            });

            await assert.rejects(async () => {
                await rc.collect('invalid_type', 'file.txt');
            }, /Invalid resource type/);
        });

        it('finish() calls finish on all retrievers', async function () {
            let finished = false;
            const retriever = {
                resolve: async (source) => ({ resolved_source: source }),
                retrieve: async () => ({ path: '/out' }),
                finish: async () => { finished = true; },
            };

            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: retriever },
            });

            await rc.finish();
            assert.strictEqual(finished, true);
        });

        it('runs resource processors after retrieval', async function () {
            let processed = false;
            const processor = {
                process: async ({ target_info, source, processed_info }) => {
                    processed = true;
                    return { dimensions: { width: 100, height: 200 } };
                },
            };

            const rc = new ResourceCollector({
                resource_types: ['graphics'],
                resource_retrievers: { graphics: createMockRetriever() },
                resource_processors: { graphics: [processor] },
            });

            await rc.collect('graphics', 'image.png');
            assert.strictEqual(processed, true);

            const data = rc.get_resource_data('graphics', 'image.png');
            assert.deepStrictEqual(data.processed_info.dimensions, { width: 100, height: 200 });
        });

    });

});
