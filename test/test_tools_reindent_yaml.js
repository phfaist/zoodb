// Tests for tools/reindent_yaml.mjs (the zoodb-reindent-yaml tool): run it as
// a child process on copies of the fixtures of
// test/test_data/yaml_fixtures/reindent/ in a temporary directory (the
// fixtures themselves are never written), then read the results with the YAML
// loader.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

import { YamlDbDataLoader } from '../src/dbdataloader/yamldb.js';


const repo_root = fileURLToPath(new URL('..', import.meta.url));
const tool_path = 'tools/reindent_yaml.mjs';
const fixtures_dir = fileURLToPath(new URL('./test_data/yaml_fixtures/reindent/', import.meta.url));

const FIXTURES = ['pattern.yml', 'pattern_in_list.yml', 'untouched.yml'];


function run_tool(args)
{
    return new Promise( (resolve) => {
        execFile(
            process.execPath,
            [ tool_path, ...args ],
            { cwd: repo_root, timeout: 60000 },
            (err, stdout, stderr) => {
                let code = 0;
                if (err) {
                    code = (typeof err.code === 'number') ? err.code : -1;
                }
                resolve({ code, stdout, stderr });
            }
        );
    } );
}

function read(dir, name)
{
    return fs.readFileSync(path.join(dir, name), 'utf-8');
}

async function load_strict(dir, name)
{
    const loader = new YamlDbDataLoader({ objects: {} });
    return await loader.parse_file_data(fs.readFileSync(path.join(dir, name)), {}, dir, name);
}


describe('tools/reindent_yaml.mjs', function () {

    this.timeout(60000);

    const originals = Object.fromEntries(FIXTURES.map( (f) => [f, read(fixtures_dir, f)] ));
    let tmp;

    beforeEach(function () {
        tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-reindent-'));
        for (const f of FIXTURES) {
            fs.copyFileSync(path.join(fixtures_dir, f), path.join(tmp, f));
        }
    });

    afterEach(function () {
        fs.rmSync(tmp, { recursive: true, force: true });
    });

    after(function () {
        // the fixtures were never modified
        for (const f of FIXTURES) {
            assert.strictEqual(read(fixtures_dir, f), originals[f], f);
        }
    });

    it('--help prints the usage and exits 0', async function () {
        const { code, stdout } = await run_tool(['--help']);
        assert.strictEqual(code, 0);
        assert.match(stdout, /^Usage: zoodb-reindent-yaml <file-or-dir>\.\.\. \[--dry-run\] \[--indent N\]/);
    });

    it('exits 1 on a usage error', async function () {
        for (const args of [ [], ['--indent', '0', tmp], ['--bogus', tmp], [path.join(tmp, 'nothere.yml')],
                             [path.join(tmp, 'x.txt')] ]) {
            if (args[0]?.endsWith('x.txt')) {
                fs.writeFileSync(args[0], 'a: b\n');
            }
            const { code, stderr } = await run_tool(args);
            assert.strictEqual(code, 1, `${args.join(' ')}: ${stderr}`);
            assert.match(stderr, /Usage: zoodb-reindent-yaml/);
        }
    });

    it('the fixtures with the pattern do not load, the untouched one does', async function () {
        for (const f of ['pattern.yml', 'pattern_in_list.yml']) {
            await assert.rejects( () => load_strict(tmp, f), /must be indented more than the key/ );
        }
        await load_strict(tmp, 'untouched.yml');
    });

    it('--dry-run lists the files that would change and writes nothing', async function () {
        const { code, stdout, stderr } = await run_tool(['--dry-run', tmp]);
        assert.strictEqual(code, 0, stderr);
        assert.ok(stdout.includes(`would re-indent ${path.join(tmp, 'pattern.yml')} (3 values)`), stdout);
        assert.ok(stdout.includes(`would re-indent ${path.join(tmp, 'pattern_in_list.yml')} (3 values)`), stdout);
        assert.ok(!stdout.includes('untouched.yml'), stdout);
        assert.match(stdout, /6 value\(s\) in 2 file\(s\) would be re-indented, 3 file\(s\) checked \(dry run/);
        for (const f of FIXTURES) {
            assert.strictEqual(read(tmp, f), originals[f], f);
        }
    });

    it('re-indents the continuation lines only, and the files then load', async function () {
        const { code, stdout, stderr } = await run_tool([tmp]);
        assert.strictEqual(code, 0, stderr);
        assert.ok(stdout.includes(`re-indented ${path.join(tmp, 'pattern.yml')} (3 values)`), stdout);
        assert.ok(stdout.includes(`re-indented ${path.join(tmp, 'pattern_in_list.yml')} (3 values)`), stdout);

        assert.strictEqual(read(tmp, 'untouched.yml'), originals['untouched.yml']);

        assert.strictEqual(read(tmp, 'pattern.yml'), [
            '# A quoted value continued on lines indented no more than its key.',
            'code_id: pattern',
            'name: \'A name that continues',
            '  on the next line at the key\'\'s column\'',
            'notes:',
            '  short: \'A note that continues',
            '    at the key\'\'s column,',
            '',
            '    with an empty line inside.\'',
            '  long: "Double quotes,',
            '    with an escape \\u00e9 and an escaped line break \\',
            '    and more."',
            'description: |',
            '  A literal block scalar, untouched.',
            '',
        ].join('\n'));

        // the list items: the key's column + 2 (a compact first key too), the
        // dash's column + 2 for a bare item; the line already indented enough is kept
        const fixed = read(tmp, 'pattern_in_list.yml').split('\n');
        const before = originals['pattern_in_list.yml'].split('\n');
        assert.strictEqual(fixed.length, before.length);
        const changed = fixed.map( (l, i) => [i + 1, l] ).filter( ([i, l]) => l !== before[i - 1] );
        assert.deepStrictEqual(changed, [
            [7, '        where the detail continues at the key\'\'s column.\''],
            [12, '        continued at the key\'\'s column\''],
            [16, '      continued at the dash\'\'s column\''],
        ]);

        assert.deepStrictEqual(await load_strict(tmp, 'pattern.yml'), {
            code_id: 'pattern',
            name: 'A name that continues on the next line at the key\'s column',
            notes: {
                short: 'A note that continues at the key\'s column,\nwith an empty line inside.',
                long: 'Double quotes, with an escape é and an escaped line break and more.',
            },
            description: 'A literal block scalar, untouched.\n',
        });
        const in_list = await load_strict(tmp, 'pattern_in_list.yml');
        assert.deepStrictEqual(in_list.relations.parents.map( (p) => p.detail ), [
            'This code is a special case where the detail continues at the key\'s column.',
            'A detail indented correctly on its second line.',
            'A detail that is the first key of its item continued at the key\'s column',
        ]);
        assert.deepStrictEqual(in_list.relations.cousins, ['A bare list item continued at the dash\'s column']);

        // a second run finds nothing to do
        const again = await run_tool([tmp]);
        assert.strictEqual(again.code, 0, again.stderr);
        assert.match(again.stdout, /^0 value\(s\) in 0 file\(s\) re-indented, 3 file\(s\) checked\n$/);
    });

    it('--indent N sets the columns beyond the key\'s', async function () {
        const file = path.join(tmp, 'pattern.yml');
        const { code, stderr } = await run_tool(['--indent', '4', file]);
        assert.strictEqual(code, 0, stderr);
        assert.ok(read(tmp, 'pattern.yml').includes('\n    on the next line at the key\'\'s column\'\n'));
        assert.ok(read(tmp, 'pattern.yml').includes('\n      at the key\'\'s column,\n'));
    });

    it('keeps a byte order mark, which does not shift the key\'s column', async function () {
        const file = path.join(tmp, 'bom.yml');
        fs.writeFileSync(file, '\uFEFFname: \'A name\non two lines\'\nb: 1\n');
        const { code, stderr } = await run_tool([file]);
        assert.strictEqual(code, 0, stderr);
        assert.strictEqual(read(tmp, 'bom.yml'), '\uFEFFname: \'A name\n  on two lines\'\nb: 1\n');
        assert.deepStrictEqual(await load_strict(tmp, 'bom.yml'), { name: 'A name on two lines', b: 1 });
    });

    it('exits 2 and leaves a file it cannot fix unchanged, fixing the others', async function () {
        const unclosed = 'a: \'never closed\nb: 1\n';
        const broken = 'a: [x\n';
        fs.writeFileSync(path.join(tmp, 'unclosed.yml'), unclosed);
        fs.writeFileSync(path.join(tmp, 'broken.yml'), broken);
        const { code, stdout, stderr } = await run_tool([tmp]);
        assert.strictEqual(code, 2);
        assert.match(stderr, /unclosed\.yml: YAML error that is not a badly indented quoted value, at line 3, column 1: Missing closing 'quote; the file is left unchanged/);
        assert.match(stderr, /broken\.yml: YAML error that is not a badly indented quoted value/);
        assert.match(stdout, /6 value\(s\) in 2 file\(s\) re-indented, 5 file\(s\) checked, 2 file\(s\) could not be fixed/);
        assert.strictEqual(read(tmp, 'unclosed.yml'), unclosed);
        assert.strictEqual(read(tmp, 'broken.yml'), broken);
        await load_strict(tmp, 'pattern.yml');
    });
});
