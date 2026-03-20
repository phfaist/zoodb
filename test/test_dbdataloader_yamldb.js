import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const test_data_dir = path.join(__dirname, 'test_data');
const yaml_fixtures_dir = path.join(test_data_dir, 'yaml_fixtures');

import { YamlDbDataLoader } from '../src/dbdataloader/yamldb.js';


// Simple schemas for testing (no $ref, just basic structure)
const animal_schema = {
    _zoo_primarykey: 'animal_id',
    type: 'object',
    properties: {
        animal_id: { type: 'string' },
        name: { type: 'string' },
        relations: {
            type: 'object',
            properties: {
                lives_in: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: { habitat_id: { type: 'string' } },
                    },
                },
            },
        },
    },
};

const habitat_schema = {
    _zoo_primarykey: 'habitat_id',
    type: 'object',
    properties: {
        habitat_id: { type: 'string' },
        name: { type: 'string' },
        climate: { type: 'string' },
    },
};


describe('zoodb.dbdataloader.yamldb', function () {

    describe('YamlDbDataLoader', function () {

        it('constructs with config', function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    animal: { data_src_path: 'animals' },
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });
            assert.ok(loader);
            assert.ok(loader.config.objects.animal);
            assert.ok(loader.config.objects.habitat);
        });

        it('loads objects from YAML files', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });

            const schemas = { habitat: habitat_schema };
            const dbdata = await loader.load({ schemas });

            assert.ok(dbdata.objects.habitat);
            assert.ok(dbdata.objects.habitat.house);
            assert.strictEqual(dbdata.objects.habitat.house.name, 'House');
            assert.strictEqual(dbdata.objects.habitat.house.climate, 'temperate');
            assert.ok(dbdata.objects.habitat.yard);
            assert.strictEqual(dbdata.objects.habitat.yard.name, 'Yard');
        });

        it('attaches _zoodb metadata to loaded objects', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });

            const schemas = { habitat: habitat_schema };
            const dbdata = await loader.load({ schemas });

            const house = dbdata.objects.habitat.house;
            assert.ok(house._zoodb);
            assert.strictEqual(house._zoodb.id, 'house');
            assert.ok(house._zoodb.source_file_path);
            assert.ok(house._zoodb.source_file_modification_token);
        });

        it('loads objects from multiple types', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    animal: {
                        data_src_path: 'animals',
                        // only load cat.yml and dog.yml, skip invalid.yml
                        file_name_match: /^(cat|dog)\.yml$/,
                        ignore_file_name_match: /./,
                    },
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });

            const schemas = { animal: animal_schema, habitat: habitat_schema };
            const dbdata = await loader.load({ schemas });

            assert.ok(dbdata.objects.animal.cat);
            assert.ok(dbdata.objects.animal.dog);
            assert.ok(dbdata.objects.habitat.house);
            assert.ok(dbdata.objects.habitat.yard);
        });

        it('file_name_match controls which files are loaded', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: {
                        data_src_path: 'habitats',
                        file_name_match: /^house\.yml$/,
                        ignore_file_name_match: /./,  // ignore everything else
                    },
                },
                fs,
            });

            const schemas = { habitat: habitat_schema };
            const dbdata = await loader.load({ schemas });

            assert.ok(dbdata.objects.habitat.house);
            assert.strictEqual(dbdata.objects.habitat.yard, undefined);
        });

        it('ignore_file_name_match excludes non-data files silently', async function () {
            // ignore_file_name_match only applies to files that don't match
            // file_name_match. It is used for resource files (.png, .svg, etc.)
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });

            const ignore = loader.config.objects.habitat.ignore_file_name_match;
            // Resource files and backups are ignored by default
            assert.ok(ignore.test('diagram.png'));
            assert.ok(ignore.test('file.svg'));
            assert.ok(ignore.test('backup~'));
            assert.ok(ignore.test('.DS_Store'));
        });

        it('throws when schema is missing', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: { data_src_path: 'habitats' },
                },
                fs,
            });

            // Pass empty schemas — should throw because 'habitat' schema is missing
            await assert.rejects(async () => {
                await loader.load({ schemas: {} });
            }, /Schema.*was not loaded/i);
        });

        it('throws on duplicate object IDs', async function () {
            // Create a loader that loads from a path where both files
            // produce an object with the same primary key — we'll use
            // a custom load_objects that forces duplicate IDs.
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: {
                        data_src_path: 'habitats',
                        load_objects: (d) => [{ ...d, habitat_id: 'forced_same_id' }],
                    },
                },
                fs,
            });

            const schemas = { habitat: habitat_schema };
            await assert.rejects(async () => {
                await loader.load({ schemas });
            }, /duplicate/i);
        });

        it('default data_src_path appends "s" to object type', function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    animal: {},
                },
                fs,
            });

            assert.strictEqual(loader.config.objects.animal.data_src_path, 'animals');
        });

        it('default schema_name matches object type', function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    habitat: {},
                },
                fs,
            });

            assert.strictEqual(loader.config.objects.habitat.schema_name, 'habitat');
        });

        it('parse_file_data handles JSON files', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {},
                fs,
            });

            const json_content = '{"habitat_id": "test", "name": "Test"}';
            const parsed = await loader.parse_file_data(
                json_content, {}, '/data', 'test.json'
            );

            assert.strictEqual(parsed.habitat_id, 'test');
            assert.strictEqual(parsed.name, 'Test');
        });

        it('parse_file_data throws on unknown file type', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {},
                fs,
            });

            await assert.rejects(async () => {
                await loader.parse_file_data('data', {}, '/data', 'file.txt');
            }, /Unknown file type/);
        });

        it('parse_file_data throws on invalid YAML', async function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {},
                fs,
            });

            const bad_yaml = ':\n  : :\n  - :\n  invalid: [unclosed';
            await assert.rejects(async () => {
                await loader.parse_file_data(bad_yaml, {}, '/data', 'bad.yml');
            }, /Parse error/);
        });

        it('resource_file_extensions are ignored by default', function () {
            const loader = new YamlDbDataLoader({
                root_data_dir: yaml_fixtures_dir,
                objects: {
                    animal: { data_src_path: 'animals' },
                },
                fs,
            });

            const ignore = loader.config.objects.animal.ignore_file_name_match;
            // Default ignore pattern should match common resource extensions
            assert.ok(ignore.test('image.png'));
            assert.ok(ignore.test('photo.jpg'));
            assert.ok(ignore.test('diagram.svg'));
            // But not YAML files
            assert.ok(!ignore.test('data.yml'));
        });

    });

});
