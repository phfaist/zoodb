import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { SchemaLoader } from '../src/schemaloader.js';

const test_schemas_dir = path.join(__dirname, 'test_data', 'test_schemas');


describe('zoodb.schemaloader', function () {

    describe('SchemaLoader', function () {

        it('constructs without error', function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });
            assert.ok(loader);
        });

        it('throws if schema_root is not provided', function () {
            assert.throws(() => {
                new SchemaLoader({
                    schemas: {},
                    fs,
                });
            }, /schema_root/i);
        });

        it('load_schemas() loads all schemas from the configured directory', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            const result = await loader.load_schemas();

            assert.ok(result.schemas);
            assert.ok(result.schemas.animal);
            assert.ok(result.schemas.habitat);
            assert.strictEqual(result.schemas.animal._zoo_primarykey, 'animal_id');
        });

        it('load_schema_by_name() loads a single schema', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            const schema = await loader.load_schema_by_name('animal');
            assert.strictEqual(schema._zoo_primarykey, 'animal_id');
            assert.strictEqual(schema.type, 'object');
        });

        it('caches loaded schemas on subsequent calls', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            const schema1 = await loader.load_schema_by_name('animal');
            const schema2 = await loader.load_schema_by_name('animal');
            assert.strictEqual(schema1, schema2);
        });

        it('resolves $ref references inline', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            const schema = await loader.load_schema_by_name('animal');

            // The $ref to habitat_ref should be resolved inline
            const habitat_prop =
                schema.properties.relations.properties.lives_in.items;
            assert.ok(habitat_prop);
            assert.ok(habitat_prop.properties.habitat_id);
        });

        it('schema_add_extension option appends extension to file names', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            // This implicitly tests that .json extension is appended
            const schema = await loader.load_schema_by_name('animal');
            assert.ok(schema);
        });

        it('schema_names option limits which schemas are loaded', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                schema_names: ['animal'],
                fs,
            });

            const result = await loader.load_schemas();

            assert.ok(result.schemas.animal);
            assert.strictEqual(result.schemas.habitat, undefined);
        });

        it('throws when loading a non-existent schema name', async function () {
            const loader = new SchemaLoader({
                schemas: {
                    schema_root: test_schemas_dir,
                    schema_rel_path: '',
                    schema_add_extension: '.json',
                },
                fs,
            });

            await assert.rejects(
                async () => await loader.load_schema_by_name('nonexistent'),
                /Error/
            );
        });

    });

});
