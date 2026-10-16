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

        it('parse_file_data reads YAML 1.2 (core schema)', async function () {
            const loader = new YamlDbDataLoader({ root_data_dir: yaml_fixtures_dir, objects: {}, fs });
            const parsed = await loader.parse_file_data(
                Buffer.from('a: 2021-01-01\nb: yes\nc: true\nd: ~\ne: 0x10\n'), {}, '/data', 'types.yml'
            );
            assert.deepStrictEqual(parsed, { a: '2021-01-01', b: 'yes', c: true, d: null, e: 16 });
        });

        it('parse_file_data names the file, line and column of a YAML error', async function () {
            const loader = new YamlDbDataLoader({ root_data_dir: yaml_fixtures_dir, objects: {}, fs });
            await assert.rejects(
                () => loader.parse_file_data('a: 1\na: 2\n', {}, '/data', 'dup.yml'),
                (err) => {
                    assert.strictEqual(
                        err.message, 'Parse error in ‘/data/dup.yml’ at line 2, column 1: Map keys must be unique'
                    );
                    assert.deepStrictEqual([err.file, err.line, err.col], ['/data/dup.yml', 2, 1]);
                    return true;
                }
            );
        });

        it('refuses a quoted value continued at its key\'s column, saying what to do', async function () {
            const loader = new YamlDbDataLoader({ root_data_dir: yaml_fixtures_dir, objects: {}, fs });
            const text = 'utensil_id: spoon\nrelations:\n  goes_with:\n    - utensil_id: fork\n'
                  + '      detail: \'Often next to\n      the fork.\'\n';
            await assert.rejects(
                () => loader.parse_file_data(text, {}, '/data', 'spoon.yml'),
                (err) => {
                    assert.strictEqual(
                        err.message,
                        'Parse error in ‘/data/spoon.yml’ at line 5, column 15: a quoted value that '
                        + 'continues on the next line must be indented more than the key; run '
                        + '`zoodb-reindent-yaml` on the file'
                    );
                    return true;
                }
            );
            // the pattern at the top level and in a bare list item, double quotes
            for (const [bad, line, col] of [
                [ 'name: "A name\non two lines"\n', 1, 7 ],
                [ 'items:\n  - \'one\n  two\'\n', 2, 5 ],
                [ 'a:\n  b: \'one\n\n  two\'\n', 2, 6 ],
            ]) {
                await assert.rejects(
                    () => loader.parse_file_data(bad, {}, '/data', 'x.yml'),
                    new RegExp(`Parse error in ‘/data/x\\.yml’ at line ${line}, column ${col}: `
                               + 'a quoted value that continues on the next line must be indented')
                );
            }
        });

        it('does not take other errors or valid multi-line values for the refused pattern', async function () {
            const loader = new YamlDbDataLoader({ root_data_dir: yaml_fixtures_dir, objects: {}, fs });
            // a quote never closed
            await assert.rejects(
                () => loader.parse_file_data('a: \'never closed\nb: 1\n', {}, '/data', 'x.yml'),
                /Parse error in ‘\/data\/x\.yml’ at line 3, column 1: Missing closing 'quote$/
            );
            // a forgotten closing quote, the next value quoted: yaml's own error, at the
            // end of the line
            await assert.rejects(
                () => loader.parse_file_data('name: \'Some code\ndescription: \'Something\'\n',
                                             {}, '/data', 'x.yml'),
                /Parse error in ‘\/data\/x\.yml’ at line 1, column 17: Missing closing 'quote$/
            );
            // a quoted value continued more indented than its key, a plain value on two
            // lines, a block scalar: all valid
            const parsed = await loader.parse_file_data(
                'a:\n  b: \'one\n    two\'\n  c: plain\n    on two lines\n  d: |\n    block\n',
                {}, '/data', 'x.yml'
            );
            assert.deepStrictEqual(parsed, { a: { b: 'one two', c: 'plain on two lines', d: 'block\n' } });
            // the fixtures of the re-indent tool: the untouched file loads
            const untouched = fs.readFileSync(path.join(yaml_fixtures_dir, 'reindent', 'untouched.yml'));
            const data = await loader.parse_file_data(untouched, {}, '/data', 'untouched.yml');
            assert.strictEqual(data.relations.parents[1].detail, 'A double-quoted detail on two lines.');
        });

        describe('field positions', function () {

            const utensil_schema = {
                _zoo_primarykey: 'utensil_id',
                type: 'object',
                properties: {
                    utensil_id: { type: 'string' },
                    name: { type: 'string' },
                    description: { type: 'string' },
                    summary: { type: 'string' },
                },
            };

            it('records the positions of the string values in obj._zoodb.flm_field_positions', async function () {
                const loader = new YamlDbDataLoader({
                    root_data_dir: yaml_fixtures_dir,
                    objects: { utensil: { data_src_path: 'utensils' } },
                    fs,
                });
                const dbdata = await loader.load({ schemas: { utensil: utensil_schema } });
                const spoon = dbdata.objects.utensil.spoon;
                const positions = spoon._zoodb.flm_field_positions;
                // a literal block: the first line after the header, column indent + 1
                assert.deepStrictEqual({ ...positions.description },
                                       { line: 4, col: 3, style: 'literal', indent: 2 });
                // a plain value on one line: exact
                assert.deepStrictEqual({ ...positions.name }, { line: 2, col: 7, style: 'plain' });
                // a folded block on two lines: approximate
                assert.deepStrictEqual({ ...positions.summary },
                                       { line: 9, col: 3, style: 'folded', indent: 2, approx: true });
                // in a list, with the field compiler's dotted path; quoted: after the quote
                assert.deepStrictEqual({ ...positions['relations.goes_with.0.detail'] },
                                       { line: 14, col: 16, style: 'quoted' });
                assert.deepStrictEqual({ ...positions['relations.goes_with.0.utensil_id'] },
                                       { line: 13, col: 19, style: 'plain' });
                // the literal value's line i is the file's line `line + i` at column indent + 1
                const file_lines = fs.readFileSync(
                    path.join(yaml_fixtures_dir, 'utensils', 'spoon.yml'), 'utf-8'
                ).split('\n');
                spoon.description.replace(/\n$/, '').split('\n').forEach( (l, i) => {
                    const fl = file_lines[positions.description.line - 1 + i];
                    assert.strictEqual(fl.slice(positions.description.col - 1), l);
                } );
            });

            it('gives multi-line values and escaped quoted values approx, and JSON files no positions', async function () {
                const loader = new YamlDbDataLoader({ root_data_dir: yaml_fixtures_dir, objects: {}, fs });
                const { data, positions } = await loader.parse_file_data_with_positions(
                    'a: plain\n  on two lines\nb: "quoted — on\n  two lines"\nc: 3\nd:\n  - é: \'x\'\n',
                    {}, '/data', 'x.yml'
                );
                assert.deepStrictEqual(data.a, 'plain on two lines');
                assert.deepStrictEqual({ ...positions.a }, { line: 1, col: 4, style: 'plain', approx: true });
                assert.deepStrictEqual({ ...positions.b }, { line: 3, col: 5, style: 'quoted', approx: true });
                assert.deepStrictEqual(Object.keys(positions), ['a', 'b', 'd.0.é']);
                // a one-line quoted value with an escape: approx; without one: exact (a
                // comment after the closing quote or not)
                const escaped = await loader.parse_file_data_with_positions(
                    'a: \'it\'\'s\'\nb: "one\\ntwo"  # a comment\nc: \'no escape\' # a comment\n'
                    + 'd: "no escape either"\n',
                    {}, '/data', 'x.yml'
                );
                assert.deepStrictEqual(escaped.data,
                                       { a: 'it\'s', b: 'one\ntwo', c: 'no escape', d: 'no escape either' });
                assert.deepStrictEqual({ ...escaped.positions.a }, { line: 1, col: 5, style: 'quoted', approx: true });
                assert.deepStrictEqual({ ...escaped.positions.b }, { line: 2, col: 5, style: 'quoted', approx: true });
                assert.deepStrictEqual({ ...escaped.positions.c }, { line: 3, col: 5, style: 'quoted' });
                assert.deepStrictEqual({ ...escaped.positions.d }, { line: 4, col: 5, style: 'quoted' });
                const json = await loader.parse_file_data_with_positions(
                    '{"a": "b"}', {}, '/data', 'x.json'
                );
                assert.deepStrictEqual(json, { data: { a: 'b' }, positions: null });
            });

            it('records no positions when load_objects does not return the file\'s data', async function () {
                const loader = new YamlDbDataLoader({
                    root_data_dir: yaml_fixtures_dir,
                    objects: { utensil: {
                        data_src_path: 'utensils',
                        load_objects: (d) => [ { ...d } ],
                    } },
                    fs,
                });
                const dbdata = await loader.load({ schemas: { utensil: utensil_schema } });
                const spoon = dbdata.objects.utensil.spoon;
                assert.strictEqual(spoon.name, 'Spoon');
                assert.strictEqual(spoon._zoodb.flm_field_positions, undefined);
            });

            it('a subclass overriding parse_file_data only still loads', async function () {
                class Upper extends YamlDbDataLoader {
                    async parse_file_data(...args) {
                        const d = await super.parse_file_data(...args);
                        return { ...d, name: d.name.toUpperCase() };
                    }
                }
                const loader = new Upper({
                    root_data_dir: yaml_fixtures_dir,
                    objects: { utensil: { data_src_path: 'utensils' } },
                    fs,
                });
                const dbdata = await loader.load({ schemas: { utensil: utensil_schema } });
                assert.strictEqual(dbdata.objects.utensil.spoon.name, 'SPOON');
                assert.strictEqual(dbdata.objects.utensil.spoon._zoodb.flm_field_positions, undefined);
            });
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
