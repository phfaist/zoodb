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


    });
});
