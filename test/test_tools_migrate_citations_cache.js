// Tests for tools/migrate_citations_cache.mjs (the zoodb-migrate-citations-cache
// tool): run it as a child process on a copy of the legacy cache fixture in a
// temporary directory, then open the result with the wasm binding.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

import { load_autocitefetch_wasm } from '../src/citationmanager/_load_wasm.js';
import { make_node_cache_fs } from '../src/citationmanager/_cachefs.js';


const repo_root = fileURLToPath(new URL('..', import.meta.url));
const tool_path = 'tools/migrate_citations_cache.mjs';
const legacy_fixture = fileURLToPath(
    new URL('./_fixtures/legacy_cache_downloaded_info.json', import.meta.url)
);

const LEGACY_NAME = 'cache_downloaded_info.json';

// The tool compares expiry times against the real clock, and the fixture
// (shared with test_citationmanager_manager.js, so it is not edited) has
// absolute expiry times (1.9e12 ms = 2030-03-17, 2e12 ms = 2033-05-18,
// 1.7e12 ms = Nov 2023).  So that the expected counts below do not depend on
// the current date, the temporary copies are rewritten by
// write_legacy_copy(): each numeric expire >= FUTURE_THRESHOLD becomes
// Date.now() + 365 days (the 2e12 one + 730 days, keeping the ordering), each
// smaller numeric expire becomes Date.now() - 1 day, and "NaN" stays "NaN".
//
// What the rewritten fixture yields:
//
// imported (7): arxiv:1310.2984 (concrete), arxiv:1902.07714 (chained to
//   doi:10.1103/PhysRevX.10.041018), doi:10.1103/PhysRevX.10.041018,
//   manual:..., preset:Doe2021, qecdborg:abc (kind js),
//   doi:10.1103/PhysRevA.70.052328 (expire "NaN" -> kept for 365 days);
// skipped (1): arxiv:quant-ph/0406196 (expired, rewritten to now - 1 day).
const EXPECTED_IMPORTED = 7;
const EXPECTED_SKIPPED = 1;
const EXPECTED_TOTAL = EXPECTED_IMPORTED + EXPECTED_SKIPPED;

const DAY_MS = 24 * 3600 * 1000;
const FUTURE_THRESHOLD = 1800000000000;

// Write the legacy fixture to `dest` with its numeric expiry times rewritten
// relative to Date.now() (see above), as compact JSON like the legacy
// _cache.js#exportJson output.
function write_legacy_copy(dest)
{
    const data = JSON.parse(fs.readFileSync(legacy_fixture, 'utf-8'));
    const now = Date.now();
    for (const rec of Object.values(data)) {
        if (typeof rec.expire !== 'number') {
            continue; // "NaN" stays as it is
        }
        if (rec.expire >= 2000000000000) {
            rec.expire = now + 730 * DAY_MS;
        } else if (rec.expire >= FUTURE_THRESHOLD) {
            rec.expire = now + 365 * DAY_MS;
        } else {
            rec.expire = now - DAY_MS;
        }
    }
    fs.writeFileSync(dest, JSON.stringify(data));
}


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

function throwing_fetch()
{
    return async (req) => {
        throw new Error(`unexpected fetch of ${req?.url} in test`);
    };
}

async function open_result(dir)
{
    const wasm = await load_autocitefetch_wasm();
    const js_source = {
        retrieveChunk: async () => { throw new Error('no retrieval in test'); },
    };
    return await wasm.CitationManager.open({
        sources: [
            { kind: 'arxiv', prefix: 'arxiv' },
            { kind: 'doi', prefix: 'doi' },
            { kind: 'manual', prefix: 'manual', format: 'flm' },
            { kind: 'bib', prefix: 'preset', entries: {} },
            { kind: 'js', prefix: 'qecdborg', source: js_source },
        ],
        host: {
            fetch: throwing_fetch(),
            cacheFs: make_node_cache_fs(fs),
            onEvent: () => {},
        },
        cacheDir: dir,
        writerId: 'test-reader',
    });
}


describe('tools/migrate_citations_cache.mjs', function () {

    this.timeout(60000);

    let tmp_root;
    let counter = 0;

    before(function () {
        tmp_root = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-test-migrate-'));
    });

    after(function () {
        if (tmp_root != null) {
            fs.rmSync(tmp_root, { recursive: true, force: true });
        }
    });

    // a fresh directory with a (date-rewritten) copy of the legacy fixture
    function make_dir()
    {
        const dir = path.join(tmp_root, `c${++counter}`);
        fs.mkdirSync(dir);
        write_legacy_copy(path.join(dir, LEGACY_NAME));
        return dir;
    }

    it('--help prints the usage line and exits 0', async function () {
        const r = await run_tool(['--help']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(
            r.stdout,
            /Usage: zoodb-migrate-citations-cache --cache-dir <dir> \[--legacy-file <path>\] \[--cache-base citations\] \[--prefix <name>=<kind>\]\.\.\. \[--drop-field <name>\]\.\.\. \[--dry-run\] \[--force\] \[--remove-legacy\]/
        );
    });

    it('exits 1 without --cache-dir', async function () {
        const r = await run_tool([]);
        assert.strictEqual(r.code, 1);
        assert.match(r.stderr, /--cache-dir/);
    });

    it('exits 1 on an unknown option, a bad --prefix, or a missing legacy file', async function () {
        const dir = make_dir();
        let r = await run_tool(['--cache-dir', dir, '--no-such-option']);
        assert.strictEqual(r.code, 1);
        r = await run_tool(['--cache-dir', dir, '--prefix', 'foo']);
        assert.strictEqual(r.code, 1);
        assert.match(r.stderr, /--prefix/);
        r = await run_tool(['--cache-dir', dir, '--prefix', 'foo=nosuchkind']);
        assert.strictEqual(r.code, 1);
        assert.match(r.stderr, /nosuchkind/);
        r = await run_tool(['--cache-dir', path.join(tmp_root, 'does-not-exist')]);
        assert.strictEqual(r.code, 1);
        assert.match(r.stderr, /cache_downloaded_info\.json/);
        // nothing was written
        assert.deepStrictEqual(fs.readdirSync(dir), [LEGACY_NAME]);
    });

    it('exits 2 when the legacy file cannot be parsed', async function () {
        const dir = make_dir();
        fs.writeFileSync(path.join(dir, LEGACY_NAME), '{ not json');
        const r = await run_tool(['--cache-dir', dir]);
        assert.strictEqual(r.code, 2);
        assert.deepStrictEqual(fs.readdirSync(dir), [LEGACY_NAME]);
    });

    it('--dry-run reports the counts and writes nothing', async function () {
        const dir = make_dir();
        const r = await run_tool(['--cache-dir', dir, '--dry-run']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, new RegExp(`imported ${EXPECTED_IMPORTED}, skipped ${EXPECTED_SKIPPED}`));
        assert.match(r.stdout, /qecdborg/);
        assert.deepStrictEqual(fs.readdirSync(dir), [LEGACY_NAME]);
    });

    describe('import', function () {

        let dir;
        let result;
        let legacy_bytes;

        before(async function () {
            dir = make_dir();
            legacy_bytes = fs.readFileSync(path.join(dir, LEGACY_NAME));
            result = await run_tool(['--cache-dir', dir]);
        });

        it('succeeds and reports the counts and the js prefixes', function () {
            assert.strictEqual(result.code, 0, result.stderr);
            assert.match(
                result.stdout,
                new RegExp(`imported ${EXPECTED_IMPORTED}, skipped ${EXPECTED_SKIPPED}`)
            );
            assert.match(result.stdout, /\(kind js\): qecdborg\s*$/m);
        });

        it('leaves exactly citations.jsonl and the untouched legacy file', function () {
            assert.deepStrictEqual(
                fs.readdirSync(dir).sort(),
                ['cache_downloaded_info.json', 'citations.jsonl']
            );
            assert.ok(fs.readFileSync(path.join(dir, LEGACY_NAME)).equals(legacy_bytes));
        });

        it('produces a cache the binding reads', async function () {
            const mgr = await open_result(dir);
            try {
                assert.strictEqual(mgr.legacyImport, null);

                // a concrete entry
                const a = await mgr.get('arxiv', '1310.2984');
                assert.strictEqual(a.id, 'arxiv:1310.2984');
                assert.strictEqual(a.title,
                                   'Fault-Tolerant Quantum Computation with Constant Overhead');
                assert.strictEqual(a._hash, undefined);

                // a chained arXiv entry, followed to its DOI target
                const c = await mgr.get('arxiv', '1902.07714');
                assert.strictEqual(c.id, 'arxiv:1902.07714');
                assert.strictEqual(c.arxivid, '1902.07714');
                assert.strictEqual(c.title,
                                   'Continuous Symmetries and Approximate Quantum Error Correction');
                assert.ok( ! Object.hasOwn(c, 'reference') );
                assert.strictEqual(c._hash, undefined);

                // ids are normalized (DOI keys lowercased)
                const keys = await mgr.keys();
                assert.ok(keys.includes('doi:10.1103/physrevx.10.041018'), keys.join(', '));
                assert.ok( ! keys.includes('doi:10.1103/PhysRevX.10.041018') );
                assert.ok(keys.includes('preset:Doe2021'));
                assert.ok(keys.includes('qecdborg:abc'));
                assert.ok(keys.includes('doi:10.1103/physreva.70.052328'));
                assert.strictEqual(keys.length, EXPECTED_IMPORTED);

                // the manual entry and the js-kind entry keep _ready_formatted
                const q = await mgr.get('qecdborg', 'abc');
                assert.match(q._ready_formatted.flm, /Qecdb\.org Database/);

                // the expired entry was skipped
                assert.deepStrictEqual(
                    await mgr.getMany([['arxiv', 'quant-ph/0406196']]),
                    [null]
                );
            } finally {
                mgr.free();
            }
        });

        it('refuses to run again without --force', async function () {
            const before_bytes = fs.readFileSync(path.join(dir, 'citations.jsonl'));
            const r = await run_tool(['--cache-dir', dir]);
            assert.strictEqual(r.code, 1);
            assert.match(r.stderr, /citations\.jsonl/);
            assert.match(r.stderr, /already exists/);
            assert.ok(fs.readFileSync(path.join(dir, 'citations.jsonl')).equals(before_bytes));
        });

        it('with --force keeps the existing ids (everything skipped)', async function () {
            const r = await run_tool(['--cache-dir', dir, '--force']);
            assert.strictEqual(r.code, 0, r.stderr);
            assert.match(r.stdout, new RegExp(`imported 0, skipped ${EXPECTED_TOTAL}`));
            assert.deepStrictEqual(
                fs.readdirSync(dir).sort(),
                ['cache_downloaded_info.json', 'citations.jsonl']
            );
        });

    });

    it('--remove-legacy deletes the legacy file after the import', async function () {
        const dir = make_dir();
        const r = await run_tool(['--cache-dir', dir, '--remove-legacy']);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.match(r.stdout, new RegExp(`imported ${EXPECTED_IMPORTED}, skipped ${EXPECTED_SKIPPED}`));
        assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
    });

    it('--legacy-file, --cache-base and --drop-field are honored', async function () {
        const dir = path.join(tmp_root, `c${++counter}`);
        fs.mkdirSync(dir);
        const legacy_file = path.join(tmp_root, `legacy-${counter}.json`);
        write_legacy_copy(legacy_file);
        const r = await run_tool([
            '--cache-dir', dir, '--legacy-file', legacy_file, '--cache-base', 'mycache',
            '--drop-field', 'funder', '--drop-field', 'license',
        ]);
        assert.strictEqual(r.code, 0, r.stderr);
        assert.deepStrictEqual(fs.readdirSync(dir), ['mycache.jsonl']);
        const text = fs.readFileSync(path.join(dir, 'mycache.jsonl'), 'utf-8');
        assert.ok( ! text.includes('"funder"') );
        assert.ok( ! text.includes('"license"') );
        // --drop-field replaces the default list, so 'reference' is kept
        assert.ok( text.includes('"reference"') );
    });

});
