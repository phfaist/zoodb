// Tests for tools/merge_citations_cache.mjs (the zoodb-merge-citations-cache
// tool): run it as a child process on small citations.jsonl files in a
// temporary directory, then check the file and open it with the wasm binding.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

import { load_autocitefetch_wasm } from '../src/citationmanager/_load_wasm.js';
import { make_node_cache_fs } from '../src/citationmanager/_cachefs.js';


const repo_root = fileURLToPath(new URL('..', import.meta.url));
const tool_path = 'tools/merge_citations_cache.mjs';

const DAY_MS = 24 * 3600 * 1000;

// timestamps in the future, so that nothing is expired when opening the file
const T0 = Date.now() + 100 * DAY_MS;

function entry_line(id, payload, stale_after, expires)
{
    return JSON.stringify({ id, rec: { payload, stale_after, expires } });
}

function concrete(id, title)
{
    return { concrete: { id, title, type: 'article-journal' } };
}

function jsonl(entries)
{
    return '{"schema":1}\n'
        + entries.map( ([id, payload, s, e]) => entry_line(id, payload, s, e) + '\n' ).join('');
}

const MAIN = [
    [ 'arxiv:1310.2984', concrete('arxiv:1310.2984', 'main A'), T0, T0 + 10 * DAY_MS ],
    [ 'arxiv:1902.07714',
      { chained: { prefix: 'doi', key: '10.1103/physrevx.10.041018',
                   set_properties: { arxivid: '1902.07714' } } },
      T0, T0 + 20 * DAY_MS ],
    [ 'doi:10.1/only-main', concrete('doi:10.1/only-main', 'main only'), T0, T0 + 5 * DAY_MS ],
];
const OTHER = [
    // newer: replaces the main copy
    [ 'arxiv:1310.2984', concrete('arxiv:1310.2984', 'other A'), T0, T0 + 30 * DAY_MS ],
    // older: the main copy is kept
    [ 'arxiv:1902.07714', concrete('arxiv:1902.07714', 'other B'), T0, T0 + 15 * DAY_MS ],
    // new
    [ 'doi:10.1103/physrevx.10.041018',
      concrete('doi:10.1103/physrevx.10.041018', 'Continuous symmetries'), T0, T0 + 12 * DAY_MS ],
    // ephemeral: dropped
    [ 'manual:x', concrete('manual:x', 'eph'), T0, T0 ],
];

const MAIN_JSONL = jsonl(MAIN);
const OTHER_JSONL = jsonl(OTHER);


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


describe('tools/merge_citations_cache.mjs', function () {

    this.timeout(60000);

    let tmp_root;
    let counter = 0;

    before(function () {
        tmp_root = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-test-merge-cache-'));
    });

    after(function () {
        if (tmp_root != null) {
            fs.rmSync(tmp_root, { recursive: true, force: true });
        }
    });

    function make_dirs(main_text = MAIN_JSONL, other_text = OTHER_JSONL)
    {
        const dir = path.join(tmp_root, `c${++counter}`);
        const other_dir = path.join(tmp_root, `c${counter}-other`);
        fs.mkdirSync(dir);
        fs.mkdirSync(other_dir);
        fs.writeFileSync(path.join(dir, 'citations.jsonl'), main_text);
        const other = path.join(other_dir, 'citations.jsonl');
        fs.writeFileSync(other, other_text);
        return { dir, other_dir, other };
    }

    it('--help prints the usage line and exits 0', async function () {
        const r = await run_tool(['--help']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /Usage: zoodb-merge-citations-cache --cache-dir <dir> --from/);
    });

    it('exits 1 on missing or invalid options', async function () {
        const { dir, other } = make_dirs();
        for (const args of [
            [],
            ['--cache-dir', dir],
            ['--from', other],
            ['--cache-dir', dir, '--from', path.join(tmp_root, 'does-not-exist.jsonl')],
            ['--cache-dir', path.join(tmp_root, 'does-not-exist'), '--from', other],
            ['--cache-dir', dir, '--from', dir],
            ['--cache-dir', dir, '--from', other, '--no-such-option'],
        ]) {
            const r = await run_tool(args);
            assert.strictEqual(r.code, 1, `args ${JSON.stringify(args)}: ${r.stderr}`);
        }
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), MAIN_JSONL);
    });

    it('--dry-run reports the counts and writes nothing', async function () {
        const { dir, other } = make_dirs();
        const r = await run_tool(['--cache-dir', dir, '--from', other, '--dry-run']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /added 1, updated 1, kept 1 .*4 entries in total; dropped 1 ephemeral.*dry run/);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), MAIN_JSONL);
        assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
    });

    it('keeps the copy that expires last', async function () {
        const { dir, other_dir } = make_dirs();
        // --from may be a directory
        const r = await run_tool(['--cache-dir', dir, '--from', other_dir]);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /added 1, updated 1, kept 1 /);
        assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
        // the --from file is untouched
        assert.strictEqual(fs.readFileSync(path.join(other_dir, 'citations.jsonl'), 'utf-8'),
                           OTHER_JSONL);

        // exactly what the crate would write: sorted, lines copied verbatim
        const expected = jsonl([ OTHER[0], MAIN[1], MAIN[2], OTHER[2] ]);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), expected);

        // the crate reads the file, and resolves the chain across the two sources
        const wasm = await load_autocitefetch_wasm();
        const mgr = await wasm.CitationManager.open({
            sources: [
                { kind: 'arxiv', prefix: 'arxiv', chainDoisTo: 'doi' },
                { kind: 'doi', prefix: 'doi' },
            ],
            host: {
                fetch: async (req) => { throw new Error(`unexpected fetch of ${req?.url}`); },
                cacheFs: make_node_cache_fs(fs),
                onEvent: () => {},
            },
            cacheDir: dir,
            writerId: 'test-reader',
        });
        try {
            assert.strictEqual((await mgr.keys()).length, 4);
            assert.strictEqual((await mgr.get('arxiv', '1310.2984')).title, 'other A');
            assert.strictEqual((await mgr.get('arxiv', '1902.07714')).title, 'Continuous symmetries');
        } finally {
            mgr.free();
        }
    });

    it('keeps the main copy on a tie, and writes nothing if nothing changes', async function () {
        const same = MAIN.map( ([id, , s, e]) => [ id, concrete(id, 'other'), s, e ] );
        const { dir, other } = make_dirs(MAIN_JSONL, jsonl(same));
        const r = await run_tool(['--cache-dir', dir, '--from', other]);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /added 0, updated 0, kept 3 .*nothing to write/);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), MAIN_JSONL);
    });

    it('a later line for an id overrides an earlier one', async function () {
        const dup = OTHER_JSONL + entry_line('arxiv:1310.2984', concrete('arxiv:1310.2984', 'x'),
                                             T0, T0 + DAY_MS) + '\n';
        const { dir, other } = make_dirs(MAIN_JSONL, dup);
        const r = await run_tool(['--cache-dir', dir, '--from', other]);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /added 1, updated 0, kept 2 /);
    });

    it('merges large caches', async function () {
        const N = 6000;
        const pad = (i) => String(i).padStart(5, '0');
        const main = [], oth = [];
        for (let i = 0; i < N; ++i) {
            // ids 0..N-1 in main, N/2..3N/2-1 in the other file; the other
            // copy is newer for even i
            const id = `doi:10.1/${pad(i)}`;
            main.push([ id, concrete(id, `main ${i}`), T0, T0 + 10 * DAY_MS ]);
        }
        for (let i = N / 2; i < 3 * N / 2; ++i) {
            const id = `doi:10.1/${pad(i)}`;
            oth.push([ id, concrete(id, `other ${i}`), T0, T0 + ((i % 2) ? 5 : 20) * DAY_MS ]);
        }
        const { dir, other } = make_dirs(jsonl(main), jsonl(oth.reverse()));
        const t = Date.now();
        const r = await run_tool(['--cache-dir', dir, '--from', other]);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.ok(Date.now() - t < 10000);
        assert.match(r.stdout, new RegExp(`added ${N/2}, updated ${N/4}, kept ${N/4} .* ${3*N/2} entries`));
        const lines = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8').trim().split('\n');
        assert.strictEqual(lines.length, 1 + 3 * N / 2);
        const ids = lines.slice(1).map( (l) => JSON.parse(l).id );
        assert.deepStrictEqual(ids, [...ids].sort());
    });

    it('refuses to run while a sidecar log exists next to either file', async function () {
        for (const which of [ 'dir', 'other_dir' ]) {
            const dirs = make_dirs();
            fs.writeFileSync(path.join(dirs[which], '._citations.w1.log'), '');
            const r = await run_tool(['--cache-dir', dirs.dir, '--from', dirs.other]);
            assert.strictEqual(r.code, 2);
            assert.match(r.stderr, /sidecar/);
            assert.strictEqual(fs.readFileSync(path.join(dirs.dir, 'citations.jsonl'), 'utf-8'),
                               MAIN_JSONL);
        }
    });

    it('exits 2 on an unreadable line and on an unknown schema version', async function () {
        let { dir, other } = make_dirs(MAIN_JSONL, OTHER_JSONL + 'garbage\n');
        let r = await run_tool(['--cache-dir', dir, '--from', other]);
        assert.strictEqual(r.code, 2);
        assert.match(r.stderr, /line 6/);

        ({ dir, other } = make_dirs(MAIN_JSONL.replace('"schema":1', '"schema":2')));
        r = await run_tool(['--cache-dir', dir, '--from', other]);
        assert.strictEqual(r.code, 2);
        assert.match(r.stderr, /schema version 2/);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'),
                           MAIN_JSONL.replace('"schema":1', '"schema":2'));
    });

});
