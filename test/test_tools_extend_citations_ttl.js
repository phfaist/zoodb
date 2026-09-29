// Tests for tools/extend_citations_ttl.mjs (the zoodb-extend-citations-ttl
// tool): run it as a child process on a small citations.jsonl in a temporary
// directory, then check the file and open it with the wasm binding.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

import { load_autocitefetch_wasm } from '../src/citationmanager/_load_wasm.js';
import { make_node_cache_fs } from '../src/citationmanager/_cachefs.js';


const repo_root = fileURLToPath(new URL('..', import.meta.url));
const tool_path = 'tools/extend_citations_ttl.mjs';

const DAY_MS = 24 * 3600 * 1000;

// timestamps in the future, so that nothing is expired when opening the file
const T0 = Date.now() + 100 * DAY_MS;

function entry_line(id, payload, stale_after, expires)
{
    return JSON.stringify({ id, rec: { payload, stale_after, expires } });
}

const ENTRIES = [
    [ 'arxiv:1310.2984',
      { concrete: { id: 'arxiv:1310.2984', title: 'Fault-Tolerant Quantum Computation',
                    type: 'article-journal' } },
      T0, T0 + 10 * DAY_MS ],
    [ 'arxiv:1902.07714',
      { chained: { prefix: 'doi', key: '10.1103/physrevx.10.041018',
                   set_properties: { arxivid: '1902.07714' } } },
      T0 + 1, T0 + 11 * DAY_MS ],
    [ 'doi:10.1103/physrevx.10.041018',
      { concrete: { id: 'doi:10.1103/physrevx.10.041018', DOI: '10.1103/physrevx.10.041018',
                    title: 'Continuous symmetries and approximate quantum error correction',
                    type: 'article-journal' } },
      T0 + 2, T0 + 12 * DAY_MS ],
];

const JSONL = '{"schema":1}\n'
      + ENTRIES.map( ([id, payload, s, e]) => entry_line(id, payload, s, e) + '\n' ).join('');


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

function read_records(dir)
{
    const lines = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8')
          .split('\n').filter( (l) => l.trim() !== '' );
    assert.strictEqual(lines[0], '{"schema":1}');
    return Object.fromEntries(
        lines.slice(1).map( (l) => JSON.parse(l) ).map( ({ id, rec }) => [ id, rec ] )
    );
}


describe('tools/extend_citations_ttl.mjs', function () {

    this.timeout(60000);

    let tmp_root;
    let counter = 0;

    before(function () {
        tmp_root = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-test-extend-ttl-'));
    });

    after(function () {
        if (tmp_root != null) {
            fs.rmSync(tmp_root, { recursive: true, force: true });
        }
    });

    function make_dir()
    {
        const dir = path.join(tmp_root, `c${++counter}`);
        fs.mkdirSync(dir);
        fs.writeFileSync(path.join(dir, 'citations.jsonl'), JSONL);
        return dir;
    }

    it('--help prints the usage line and exits 0', async function () {
        const r = await run_tool(['--help']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /Usage: zoodb-extend-citations-ttl --cache-dir <dir> --prefix <name>/);
    });

    it('exits 1 on missing or invalid options', async function () {
        const dir = make_dir();
        for (const args of [
            [],
            ['--cache-dir', dir, '--add', '60d'],
            ['--cache-dir', dir, '--prefix', 'arxiv'],
            ['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60'],
            ['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60y'],
            ['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d', '--no-such-option'],
            ['--cache-dir', path.join(tmp_root, 'does-not-exist'), '--prefix', 'arxiv', '--add', '1d'],
        ]) {
            const r = await run_tool(args);
            assert.strictEqual(r.code, 1, `args ${JSON.stringify(args)}: ${r.stderr}`);
        }
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), JSONL);
    });

    it('--dry-run reports the counts and writes nothing', async function () {
        const dir = make_dir();
        const r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d', '--dry-run']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /extended 2 entries by 60 day\(s\) \(arxiv: 2\) \(dry run/);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), JSONL);
        assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
    });

    it('extends only the entries of the given prefix', async function () {
        const dir = make_dir();
        const r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /extended 2 entries by 60 day\(s\) \(arxiv: 2\)/);
        assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);

        const recs = read_records(dir);
        for (const [ id, payload, s, e ] of ENTRIES) {
            const shift = id.startsWith('arxiv:') ? 60 * DAY_MS : 0;
            assert.deepStrictEqual(recs[id], { payload, stale_after: s + shift, expires: e + shift });
        }
        // untouched lines are kept byte for byte
        const text = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8');
        assert.ok(text.includes(entry_line(...ENTRIES[2]) + '\n'));

        // the crate still reads the file
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
            assert.deepStrictEqual(await mgr.keys(), ENTRIES.map( ([id]) => id ).sort());
            const c = await mgr.get('arxiv', '1902.07714');
            assert.strictEqual(c.DOI, '10.1103/physrevx.10.041018');
        } finally {
            mgr.free();
        }
    });

    it('accepts several prefixes and a negative duration', async function () {
        const dir = make_dir();
        const r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--prefix', 'doi',
                                  '--add=-12h']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, /extended 3 entries by -0\.5 day\(s\) \(arxiv: 2, doi: 1\)/);
        const recs = read_records(dir);
        for (const [ id, , s, e ] of ENTRIES) {
            assert.strictEqual(recs[id].stale_after, s - DAY_MS / 2);
            assert.strictEqual(recs[id].expires, e - DAY_MS / 2);
        }
    });

    it('refuses to run while a sidecar log exists', async function () {
        const dir = make_dir();
        fs.writeFileSync(path.join(dir, '._citations.w1.log'), '');
        const r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d']);
        assert.strictEqual(r.code, 2);
        assert.match(r.stderr, /sidecar/);
        assert.strictEqual(fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8'), JSONL);
    });

    it('exits 2 on an unreadable line and on an unknown schema version', async function () {
        let dir = make_dir();
        fs.appendFileSync(path.join(dir, 'citations.jsonl'), 'garbage\n');
        let r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d']);
        assert.strictEqual(r.code, 2);
        assert.match(r.stderr, /line 5/);

        dir = make_dir();
        fs.writeFileSync(path.join(dir, 'citations.jsonl'), JSONL.replace('"schema":1', '"schema":2'));
        r = await run_tool(['--cache-dir', dir, '--prefix', 'arxiv', '--add', '60d']);
        assert.strictEqual(r.code, 2);
        assert.match(r.stderr, /schema version 2/);
    });

});
