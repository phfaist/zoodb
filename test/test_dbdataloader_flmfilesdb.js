import * as assert from 'assert';

import { FlmFilesDbDataLoader } from '../src/dbdataloader/flmfilesdb.js';

describe('zoodb.dbdataloader.flmfilesdb', function () {

    describe('FlmFilesDbDataLoader', function () {

        it('parses a .flm file contents with front matter and no content', async function () {

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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

            let f = new FlmFilesDbDataLoader();
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
            });
            assert.ok(f.config.objects.code.file_name_match.test('test.flm'));
            assert.ok(!f.config.objects.code.file_name_match.test('test.yml'));
        });

    });
});
