import * as assert from 'assert';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { FlmFilesDbDataLoader } from '../src/dbdataloader/flmfilesdb.js';
import { ZooFlmEngine, ZooFlmError, format_diagnostic } from '../src/zooflm/engine.js';
import { ZooDb, ZooDbDataLoaderHandler } from '../src/index.js';
import { FLMSimpleContentCompiler } from '../src/dbprocessor/flmsimplecontent.js';
import { makeStandardYamlDbDataLoader } from '../src/std/stdyamldbdataloader.js';

const flm_files_dir = fileURLToPath(new URL('./test_data/flm_files/', import.meta.url));

const FIXTURE = `
---
obj_id: someIdGoesHere
key1:
  innerkey:
  - one
  - two
---

\\begin{field}{key2}
value2
\\end{field}

\\begin{field}{key3.subkey.subsubkey}
Another other value
\\end{field}

\\begin{field}{key1.subkey2} blah blah

Test also one-newline trim.

 \\end{field}

%%
%% Note that comments at this level are allowed.
%%

\\begin{field}{key1.innerkey.[]} three \\end{field}

`;

describe('zoodb.dbdataloader.flmfilesdb', function () {

    this.timeout(30000);

    // the loader reads the files' bodies through the zoo's FLM engine
    let engine;
    before(async function () {
        engine = await ZooFlmEngine.create();
    });
    after(function () {
        engine.free();
    });

    describe('FlmFilesDbDataLoader', function () {

        it('parses a .flm file contents with front matter and no content', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: someIdGoesHere
key1:
  innerkey:
  - one
  - two
---
`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            assert.deepStrictEqual(
                d,
                {
                    obj_id: 'someIdGoesHere',
                    key1: {
                        innerkey: ['one', 'two'],
                    },
                }
            );

        });


        it('populates fields from the flm contents', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: someIdGoesHere
key1:
  innerkey:
  - one
  - two
---

\\begin{field}{key2}
value2
\\end{field}

\\begin{field}{key3.subkey.subsubkey}
Another other value
\\end{field}

\\begin{field}{key1.subkey2} blah blah

Test also one-newline trim.

 \\end{field}

%%
%% Note that comments at this level are allowed.
%%

\\begin{field}{key1.innerkey.[]} three \\end{field}

`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            assert.deepStrictEqual(
                d,
                {
                    obj_id: 'someIdGoesHere',
                    key1: {
                        innerkey: ['one', 'two', 'three'],
                        // note final \n not trimmed off:
                        subkey2: 'blah blah\n\nTest also one-newline trim.\n',
                    },
                    key2: 'value2',
                    key3: {
                        subkey: {
                            subsubkey: 'Another other value',
                        },
                    },
                }
            );

        });



        it('errors if chars are encountered in the flm content', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: someIdGoesHere
key1:
  innerkey:
  - one
  - two
---

invalid content here
`;
            await assert.rejects( async () => {
                await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            }, /invalid content/i );

        });

        it('parses FLM file with no YAML frontmatter', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
\\begin{field}{title}
My Title
\\end{field}

\\begin{field}{description}
A description here.
\\end{field}
`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            assert.deepStrictEqual(d, {
                title: 'My Title',
                description: 'A description here.',
            });
        });

        it('parses multiple field blocks at various nesting levels', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: nested_test
---

\\begin{field}{a.b}
value_ab
\\end{field}

\\begin{field}{a.c}
value_ac
\\end{field}

\\begin{field}{d}
value_d
\\end{field}
`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            assert.strictEqual(d.obj_id, 'nested_test');
            assert.strictEqual(d.a.b, 'value_ab');
            assert.strictEqual(d.a.c, 'value_ac');
            assert.strictEqual(d.d, 'value_d');
        });

        it('errors if field is specified in both frontmatter and body', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: conflict_test
title: from frontmatter
---

\\begin{field}{title}
from body
\\end{field}
`;
            await assert.rejects(async () => {
                await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            }, /specified both/i);
        });

        it('allows %% comments in root content', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
---
obj_id: comments_test
---

%% This is a comment

\\begin{field}{name}
Test
\\end{field}

%% Another comment
`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            assert.strictEqual(d.obj_id, 'comments_test');
            assert.strictEqual(d.name, 'Test');
        });

        it('trims leading/trailing newlines from field values by default', async function () {

            let f = new FlmFilesDbDataLoader({ engine });
            let file_content = `
\\begin{field}{name}
hello world
\\end{field}
`;
            let d = await f.parse_file_data(file_content, {}, '/root', 'dummy/xyz.flm');
            // Default trim removes leading \n and trailing \n around the value
            assert.strictEqual(d.name, 'hello world');
        });

        it('default file_name_match is .flm', function () {
            let f = new FlmFilesDbDataLoader({
                objects: { code: {} },
                engine,
            });
            assert.ok(f.config.objects.code.file_name_match.test('test.flm'));
            assert.ok(!f.config.objects.code.file_name_match.test('test.yml'));
        });

        it('needs the engine, and reads \\begin{field} blocks only', function () {
            assert.throws( () => new FlmFilesDbDataLoader(), /needs the zoo's FLM engine as ‘engine’/ );
            assert.throws( () => new FlmFilesDbDataLoader({ engine: {} }), /needs the zoo's FLM engine/ );
            assert.throws(
                () => new FlmFilesDbDataLoader({ engine, flm_field_environmentname: 'zoofield' }),
                /flm_field_environmentname ‘zoofield’ is not supported/
            );
        });

        it('records the positions of the body\'s fields and of the front matter', async function () {
            let f = new FlmFilesDbDataLoader({ engine });
            const { data, positions } = await f.parse_file_data_with_positions(
                FIXTURE, {}, '/root', 'dummy/xyz.flm'
            );
            assert.strictEqual(data.key2, 'value2');
            // a body field: the first character of the trimmed value, exact
            assert.deepStrictEqual({ ...positions.key2 }, { line: 11, col: 1, style: 'field' });
            assert.deepStrictEqual({ ...positions['key3.subkey.subsubkey'] },
                                   { line: 15, col: 1, style: 'field' });
            assert.deepStrictEqual({ ...positions['key1.subkey2'] }, { line: 18, col: 29, style: 'field' });
            // `[]` appends: the position is under the item's index
            assert.deepStrictEqual({ ...positions['key1.innerkey.2'] }, { line: 28, col: 33, style: 'field' });
            // the front matter's values, in the file's lines
            assert.deepStrictEqual({ ...positions.obj_id }, { line: 3, col: 9, style: 'plain' });
            assert.deepStrictEqual({ ...positions['key1.innerkey.1'] }, { line: 7, col: 5, style: 'plain' });
            const lines = FIXTURE.split('\n');
            assert.ok(lines[18 - 1].slice(29 - 1).startsWith(data.key1.subkey2.split('\n')[0]));
        });

        it('gives the file position of content outside the fields and of an unclosed block', async function () {
            let f = new FlmFilesDbDataLoader({ engine });
            await assert.rejects(
                () => f.parse_file_data(FIXTURE.replace('%%\n%% Note', 'stray text\n%%\n%% Note'),
                                        {}, '/root', 'dummy/xyz.flm'),
                (err) => {
                    assert.ok(err instanceof ZooFlmError);
                    assert.strictEqual(
                        err.message,
                        '/root/dummy/xyz.flm:24:1: error: content outside any field: `stray text` '
                        + '[zoodb.fields.stray-content]'
                    );
                    assert.deepStrictEqual([err.diagnostics[0].file_line, err.diagnostics[0].file_col], [24, 1]);
                    return true;
                }
            );
            await assert.rejects(
                () => f.parse_file_data('---\nobj_id: x\n---\n\n\\begin{field}{a}\nno end\n',
                                        {}, '/root', 'u.flm'),
                (err) => {
                    assert.ok(err instanceof ZooFlmError);
                    assert.match(err.message, /^\/root\/u\.flm:5:1: error: .* \[core\.environments\.missing-terminator\]$/);
                    return true;
                }
            );
            // the front matter is read as a YAML file, with the file's lines
            await assert.rejects(
                () => f.parse_file_data('---\nobj_id: x\nobj_id: y\n---\n', {}, '/root', 'd.flm'),
                /Parse error in ‘\/root\/d\.flm’ at line 3, column 1: Map keys must be unique/
            );
            // the refused quoted value: the message does not name the tool, which reads
            // .yml and .yaml files only
            await assert.rejects(
                () => f.parse_file_data('---\nname: \'A name\non two lines\'\n---\n', {}, '/root', 'q.flm'),
                (err) => {
                    assert.strictEqual(
                        err.message,
                        'Parse error in ‘/root/q.flm’ at line 2, column 7: a quoted value that continues '
                        + 'on the next line must be indented more than the key; indent its continuation '
                        + 'lines further'
                    );
                    return true;
                }
            );
            // a block whose name is missing: the core refuses the text
            await assert.rejects(
                () => f.parse_file_data('\\begin{field}\\end{field}\n', {}, '/root', 'm.flm'),
                /^Error: Parse error in ‘\/root\/m\.flm’: /
            );
        });

        it('reads a front matter with CRLF line breaks', async function () {
            let f = new FlmFilesDbDataLoader({ engine });
            const { data, positions } = await f.parse_file_data_with_positions(
                '---\r\nobj_id: x\r\nkey1:\r\n  a: one\r\n---\r\n\r\n'
                + '\\begin{field}{key2}value2\\end{field}\r\n',
                {}, '/root', 'dummy/crlf.flm'
            );
            assert.deepStrictEqual(data, { obj_id: 'x', key1: { a: 'one' }, key2: 'value2' });
            assert.deepStrictEqual({ ...positions['key1.a'] }, { line: 4, col: 6, style: 'plain' });
            assert.deepStrictEqual({ ...positions.key2 }, { line: 7, col: 20, style: 'field' });
        });

        it('reads an empty front matter', async function () {
            let f = new FlmFilesDbDataLoader({ engine });
            const { data, positions } = await f.parse_file_data_with_positions(
                '---\n---\n\\begin{field}{a}\nvalue\n\\end{field}\n', {}, '/root', 'dummy/empty.flm'
            );
            assert.deepStrictEqual(data, { a: 'value' });
            assert.deepStrictEqual({ ...positions.a }, { line: 4, col: 1, style: 'field' });
        });

        it('places the diagnostics of the fields in the file, through the field compiler', async function () {
            const note_schema = {
                _zoo_primarykey: 'note_id',
                type: 'object',
                additionalProperties: false,
                properties: {
                    note_id: { type: 'string' },
                    name: { type: 'string', _flm: 'standalone' },
                    text: { type: 'string', _flm: 'full' },
                },
            };
            const zoodb = new ZooDb({
                processors: [ new FLMSimpleContentCompiler({ engine, error_policy: 'continue' }) ],
                schema_validator: false,
            });
            await zoodb.load_schemas({ schemas: { note: note_schema } });
            // the standard setup passes the zoo's engine to the loader class
            const loader = await makeStandardYamlDbDataLoader(
                { config: { fs, fs_data_dir: flm_files_dir }, zoo_flm_engine: engine },
                { objects: { note: { data_src_path: 'notes' } }, DbDataLoaderClass: FlmFilesDbDataLoader },
            );
            assert.ok(loader instanceof FlmFilesDbDataLoader);
            assert.strictEqual(loader.engine, engine);
            await zoodb.install_zoo_loader_handler(new ZooDbDataLoaderHandler(loader));
            await zoodb.load();
            const n1 = zoodb.objects.note.n1;
            assert.deepStrictEqual(
                n1._zoodb.flm_diagnostics.map(format_diagnostic).map( (l) => l.replace(/: error: .*$/, '') ),
                ['notes/n1.flm#name:3:13', 'notes/n1.flm#text:10:18']
            );
            engine.release([n1.name, n1.text]);
        });

    });
});
