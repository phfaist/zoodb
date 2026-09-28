// Tests of the CitationDatabaseManager adapter (src/citationmanager/_manager.js)
// over the autocitefetch wasm binding.  No network: HTTP goes to the mock host
// in test/_helpers/citation_mock_host.js (fixtures in test/_fixtures/), except
// for the opt-in block at the end (ZOODB_TEST_NETWORK=1).

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_manager');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceBase } from '../src/citationmanager/source/base.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';
import { CitationSourceManual } from '../src/citationmanager/source/manual.js';
import { CitationSourceBibliographyFile } from '../src/citationmanager/source/bibliographyfile.js';

import {
    make_mock_host, make_mock_fetch_api, MOCK_HOST_DEFAULT_NOW
} from './_helpers/citation_mock_host.js';


const fixtures_dir = fileURLToPath(new URL('./_fixtures/', import.meta.url));

const DOI_1902_ARXIV = '10.1103/PhysRevX.10.041018'; // as reported by the arXiv API
const DOI_1902 = '10.1103/physrevx.10.041018'; // normalized

const EVENT_TYPES = new Set([
    'retrieve_started', 'pass_started', 'pass_finished', 'retrieve_finished',
    'source_started', 'source_progress', 'source_finished',
    'cite_resolved', 'cite_failed', 'wait_started', 'wait_finished',
    'request_started', 'request_finished', 'unknown',
]);


/**
 * Mock host + manager options that route HTTP to the fixtures; `sleep`
 * resolves immediately and `now` is the mock host's settable clock.
 */
function mock_env({ url_map, ...extra } = {})
{
    const host = make_mock_host({ url_map });
    const options = {
        fetch: make_mock_fetch_api(host),
        sleep: host.sleep,
        now: host.now,
        skip_save_cache: true,
        ...extra,
    };
    return { host, options };
}

function arxiv_doi_sources()
{
    return {
        arxiv: new CitationSourceArxiv(),
        doi: new CitationSourceDoi(),
    };
}

function http_requests(host)
{
    return host.requests.filter( (r) => /^https?:/.test(r.url) );
}

async function with_console_stub(method, fn)
{
    const calls = [];
    const orig = console[method];
    console[method] = (...args) => { calls.push(args); };
    try {
        await fn(calls);
    } finally {
        console[method] = orig;
    }
    return calls;
}

const tmp_dirs = [];
function make_tmp_dir()
{
    const d = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-citmgr-test-'));
    tmp_dirs.push(d);
    return d;
}


describe('zoodb.citationmanager._manager', function () {

    this.timeout(20000);

    after(function () {
        for (const d of tmp_dirs) {
            fs.rmSync(d, { recursive: true, force: true });
        }
    });

    describe('CitationDatabaseManager', function () {

        it('serves get_citation_by_id() synchronously after retrieve_citations()', async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);
            assert.deepStrictEqual(failures, []);

            const bibinfo = manager.get_citation_by_id('arxiv:1902.07714');
            assert.ok( ! (bibinfo instanceof Promise) );
            assert.strictEqual(typeof bibinfo, 'object');
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Continuous symmetries and approximate quantum error correction'.toLowerCase()
            );
            assert.strictEqual(bibinfo['container-title'], 'Physical Review X');
            assert.strictEqual(bibinfo.arxivid, '1902.07714');
            // dropped by default (drop_csl_fields: ['reference'])
            assert.ok( ! Object.hasOwn(bibinfo, 'reference') );
            // get_citation() composes the id
            assert.strictEqual(manager.get_citation('arxiv', '1902.07714'), bibinfo);

            // one arXiv and one DOI request
            const urls = http_requests(host).map( (r) => r.url );
            assert.strictEqual(urls.filter( (u) => u.includes('export.arxiv.org') ).length, 1);
            assert.strictEqual(urls.filter( (u) => u.includes('doi.org') ).length, 1);
        });

        it('sets id to the requested id and adds a _hash', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'doi', cite_key: DOI_1902_ARXIV },
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);

            const doi_item = manager.get_citation_by_id(`doi:${DOI_1902_ARXIV}`);
            assert.strictEqual(doi_item.id, `doi:${DOI_1902_ARXIV}`);
            assert.match(doi_item._hash, /^[0-9a-f]{64}$/);

            const arxiv_item = manager.get_citation_by_id('arxiv:1902.07714');
            assert.strictEqual(arxiv_item.id, 'arxiv:1902.07714');
            assert.match(arxiv_item._hash, /^[0-9a-f]{64}$/);
            assert.notStrictEqual(arxiv_item._hash, doi_item._hash);

            // _hash is the hash of the entry without _hash, as before
            const { _hash, ...rest } = arxiv_item;
            assert.strictEqual(manager._compute_entry_hash(rest), _hash);
        });

        it('keys() returns the normalized ids', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { ...arxiv_doi_sources(), manual: new CitationSourceManual() }, options
            );
            assert.deepStrictEqual(manager.keys(), []);
            await manager.initialize();
            assert.deepStrictEqual(manager.keys(), []);

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                { cite_prefix: 'manual', cite_key: 'entry_a' },
            ]);

            const keys = manager.keys();
            debug('keys =', keys);
            assert.ok(keys.includes('arxiv:1902.07714'), keys.join());
            assert.ok(keys.includes(`doi:${DOI_1902}`), keys.join());
            for (const k of keys) {
                assert.strictEqual(typeof k, 'string');
                assert.match(k, /^[a-z]+:./);
                // every listed id can be read synchronously
                assert.strictEqual(manager.get_citation_by_id(k).id, k);
            }
        });

        it('passes _ready_formatted entries through (manual source)', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { manual: new CitationSourceManual() }, options
            );
            await manager.initialize();

            const key = 'J. Smith, \\emph{A paper}, 2020.';
            await manager.retrieve_citations([
                { cite_prefix: 'manual', cite_key: key },
            ]);

            const entry = manager.get_citation('manual', key);
            assert.strictEqual(entry.id, `manual:${key}`);
            assert.deepStrictEqual(entry._ready_formatted, { flm: key });
            assert.match(entry._hash, /^[0-9a-f]{64}$/);
        });

        it('resolves preset bibliography files (YAML) through fs', async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(
                {
                    preset: new CitationSourceBibliographyFile({
                        bibliography_files: ['bib_preset.yml'],
                        fs,
                        fsRootFilePath: fixtures_dir,
                    }),
                },
                options
            );
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'preset', cite_key: 'Doe2021' },
                { cite_prefix: 'preset', cite_key: 'NielsenChuang' },
            ]);
            assert.deepStrictEqual(failures, []);

            const doe = manager.get_citation_by_id('preset:Doe2021');
            assert.strictEqual(doe.id, 'preset:Doe2021');
            assert.strictEqual(doe.title, 'A Preset Article About Quantum Codes');
            assert.deepStrictEqual(doe.issued, { 'date-parts': [[2021, 3, 14]] });

            const nc = manager.get_citation_by_id('preset:NielsenChuang');
            assert.match(nc._ready_formatted.flm, /Quantum Computation and Quantum Information/);

            // read through fs, no HTTP request
            assert.strictEqual(http_requests(host).length, 0);
        });

        it('throws the legacy error for an unknown cite prefix', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { manual: new CitationSourceManual() }, options
            );
            await manager.initialize();

            await assert.rejects(
                manager.retrieve_citations([
                    { cite_prefix: 'manual', cite_key: 'ok' },
                    { cite_prefix: 'unknown_prefix', cite_key: 'some_key',
                      encountered_in: { what: 'object ‘x’ field ‘description’' } },
                ]),
                (err) => {
                    assert.strictEqual(
                        err.message,
                        'No source registered for cite prefix ‘unknown_prefix’ '
                        + '(citation encountered in object ‘x’ field ‘description’)'
                    );
                    return true;
                }
            );
        });

        it('returns failures without throwing, and reports where they were encountered',
           async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();

            let failures;
            const errors = await with_console_stub('error', async () => {
                failures = await manager.retrieve_citations([
                    { cite_prefix: 'doi', cite_key: '10.9999/does-not-exist',
                      encountered_in: {
                          resource_info: { source_path: 'codes/some_code.yml' },
                          what: 'code ‘some_code’ field ‘description’',
                      } },
                    { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                ]);
            });

            assert.strictEqual(failures.length, 1);
            const f = failures[0];
            assert.strictEqual(f.prefix, 'doi');
            assert.strictEqual(f.key, '10.9999/does-not-exist');
            assert.strictEqual(typeof f.message, 'string');
            assert.ok(f.message.length > 0);
            assert.strictEqual(manager.last_failures, failures);

            // the successful citation is available
            assert.strictEqual(manager.get_citation_by_id('arxiv:1902.07714').id, 'arxiv:1902.07714');
            // the failed one is not
            assert.throws( () => manager.get_citation_by_id('doi:10.9999/does-not-exist'),
                           /not found/ );

            const text = errors.map( (args) => args.join(' ') ).join('\n');
            debug('console.error output:', text);
            assert.match(text, /‘doi’.*10\.9999\/does-not-exist/);
            assert.ok(
                text.includes('Citation of ‘doi:10.9999/does-not-exist’ was encountered in: '
                              + '‘codes/some_code.yml’ → code ‘some_code’ field ‘description’'),
                text
            );
            assert.ok(http_requests(host).some( (r) => r.url.includes('10.9999') ));
        });

        it('attributes a failed chained citation to the requested citation', async function () {
            // the arXiv entry chains to a DOI that doi.org does not know
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                {
                    arxiv: new CitationSourceArxiv({
                        override_arxiv_dois: { '1902.07714': '10.9999/unknown-doi' },
                    }),
                    doi: new CitationSourceDoi(),
                },
                options
            );
            await manager.initialize();

            let failures;
            const errors = await with_console_stub('error', async () => {
                failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: '1902.07714',
                      encountered_in: { resource_info: { source_path: 'a.yml' }, what: 'here' } },
                ]);
            });
            debug('failures =', failures);
            assert.ok(failures.length >= 1);
            const f = failures.find( (x) => x.prefix === 'doi' );
            assert.ok(f, JSON.stringify(failures));
            assert.deepStrictEqual(f.origin, ['arxiv', '1902.07714']);
            const text = errors.map( (args) => args.join(' ') ).join('\n');
            assert.ok(text.includes('Citation of ‘arxiv:1902.07714’ was encountered in: ‘a.yml’ → here'),
                      text);
        });

        it('does not refetch citations requested again', async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);
            const n = http_requests(host).length;
            assert.strictEqual(n, 2);

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                { cite_prefix: 'doi', cite_key: DOI_1902_ARXIV },
                { cite_prefix: 'doi', cite_key: DOI_1902 },
            ]);
            assert.deepStrictEqual(failures, []);
            assert.strictEqual(http_requests(host).length, n);
            assert.strictEqual(manager.get_citation_by_id(`doi:${DOI_1902}`).id, `doi:${DOI_1902}`);
        });

        it('purge_expired() removes expired entries', async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(
                {
                    preset: new CitationSourceBibliographyFile({
                        bibliography_files: ['bib_preset.yml'],
                        fs,
                        fsRootFilePath: fixtures_dir,
                    }),
                },
                options
            );
            await manager.initialize();
            // nothing to purge; also callable without await (as flmprocessor does)
            const p = manager.purge_expired();
            assert.ok(p instanceof Promise);
            assert.strictEqual(await p, 0);

            await manager.retrieve_citations([
                { cite_prefix: 'preset', cite_key: 'Doe2021' },
            ]);
            assert.ok(manager.keys().includes('preset:Doe2021'));

            // bib entries from local files are kept for 60 seconds by default
            host.set_now(MOCK_HOST_DEFAULT_NOW + 365 * 24 * 3600 * 1000);
            const removed = await manager.purge_expired();
            assert.ok(removed >= 1, `removed = ${removed}`);
            assert.ok( ! manager.keys().includes('preset:Doe2021'), manager.keys().join() );
        });

        it('an un-awaited purge_expired() does not disturb a following retrieve', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            manager.purge_expired();
            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);
            assert.deepStrictEqual(failures, []);
            assert.ok(manager.keys().includes('arxiv:1902.07714'));
        });

        it('produces the same _hash in two runs sharing a cache directory', async function () {
            const cache_dir = make_tmp_dir();

            const run = async () => {
                const { host, options } = mock_env({
                    skip_save_cache: false, cache_fs: fs, cache_dir,
                });
                const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
                await manager.initialize();
                const failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                    { cite_prefix: 'doi', cite_key: DOI_1902_ARXIV },
                ]);
                assert.deepStrictEqual(failures, []);
                await manager.save_cache();
                return {
                    host,
                    arxiv: manager.get_citation_by_id('arxiv:1902.07714'),
                    doi: manager.get_citation_by_id(`doi:${DOI_1902_ARXIV}`),
                };
            };

            const r1 = await run();
            assert.strictEqual(http_requests(r1.host).length, 2);
            assert.ok(fs.readdirSync(cache_dir).includes('citations.jsonl'),
                      fs.readdirSync(cache_dir).join());

            const r2 = await run();
            // served from the cache file
            assert.strictEqual(http_requests(r2.host).length, 0);
            assert.strictEqual(r2.arxiv._hash, r1.arxiv._hash);
            assert.strictEqual(r2.doi._hash, r1.doi._hash);
            assert.deepStrictEqual(r2.arxiv, r1.arxiv);
        });

        it('warns about a legacy cache file without converting it', async function () {
            const cache_dir = make_tmp_dir();
            const legacy_path = path.join(cache_dir, 'cache_downloaded_info.json');
            fs.copyFileSync(path.join(fixtures_dir, 'legacy_cache_downloaded_info.json'), legacy_path);
            const legacy_contents = fs.readFileSync(legacy_path, 'utf-8');

            const { options } = mock_env({ skip_save_cache: false, cache_fs: fs, cache_dir });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);

            const warnings = await with_console_stub('warn', async () => {
                await manager.initialize();
            });
            assert.deepStrictEqual(warnings, [[
                `Found legacy citations cache ‘${cache_dir}/cache_downloaded_info.json’ but no `
                + `‘citations.jsonl’; run ‘yarn zoodb-migrate-citations-cache --cache-dir `
                + `${cache_dir}’ to convert it, otherwise all citations will be fetched again.`
            ]]);

            // no conversion
            assert.deepStrictEqual(manager.keys(), []);
            assert.throws( () => manager.get_citation_by_id('arxiv:1310.2984'), /not found/ );
            assert.deepStrictEqual(fs.readdirSync(cache_dir), ['cache_downloaded_info.json']);
            assert.strictEqual(fs.readFileSync(legacy_path, 'utf-8'), legacy_contents);

            // no warning once citations.jsonl exists
            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            await manager.save_cache();
            assert.ok(fs.readdirSync(cache_dir).includes('citations.jsonl'));
            const manager2 = new CitationDatabaseManager(
                arxiv_doi_sources(), mock_env({ skip_save_cache: false, cache_fs: fs, cache_dir }).options
            );
            const warnings2 = await with_console_stub('warn', async () => {
                await manager2.initialize();
            });
            assert.deepStrictEqual(warnings2, []);
        });

        it('does not warn about a legacy cache file with skip_save_cache', async function () {
            const cache_dir = make_tmp_dir();
            fs.copyFileSync(path.join(fixtures_dir, 'legacy_cache_downloaded_info.json'),
                            path.join(cache_dir, 'cache_downloaded_info.json'));
            const { options } = mock_env({ skip_save_cache: true, cache_fs: fs, cache_dir });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            const warnings = await with_console_stub('warn', async () => {
                await manager.initialize();
            });
            assert.deepStrictEqual(warnings, []);
        });

        it('accepts the deprecated cache_file option (its directory is the cache dir)',
           async function () {
            const cache_dir = make_tmp_dir();
            const { options } = mock_env({
                skip_save_cache: false,
                cache_fs: fs,
                cache_file: path.join(cache_dir, 'cache_downloaded_info.json'),
            });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            assert.strictEqual(manager.cache_dir, cache_dir);
            await manager.initialize();
            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            await manager.save_cache();

            const files = fs.readdirSync(cache_dir);
            assert.deepStrictEqual(files, ['citations.jsonl']);
            const lines = fs.readFileSync(path.join(cache_dir, 'citations.jsonl'), 'utf-8')
                  .split('\n').filter( (l) => l.trim() );
            assert.ok(lines.length >= 2, lines.join('\n'));
        });

        it('writes nothing with skip_save_cache', async function () {
            const cache_dir = make_tmp_dir();
            const { options } = mock_env({ skip_save_cache: true, cache_fs: fs, cache_dir });
            const manager = new CitationDatabaseManager(
                { ...arxiv_doi_sources(), manual: new CitationSourceManual() }, options
            );
            await manager.initialize();
            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                { cite_prefix: 'manual', cite_key: 'x' },
            ]);
            await manager.purge_expired();
            await manager.save_cache();
            assert.strictEqual(manager.get_citation_by_id('arxiv:1902.07714').id, 'arxiv:1902.07714');
            assert.deepStrictEqual(fs.readdirSync(cache_dir), []);
        });

        it('initialize() twice is a no-op', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            const wasm_mgr = manager._wasm;
            await manager.initialize();
            assert.strictEqual(manager._wasm, wasm_mgr);
        });

        it('retrieve_citations() before initialize() throws', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await assert.rejects(
                manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]),
                /initialize\(\)/
            );
        });

        it('names the methods missing from cache_fs', async function () {
            const { options } = mock_env({
                skip_save_cache: false,
                cache_fs: { readFile() {}, writeFile() {} },
                cache_dir: 'nonexistent-never-created',
            });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await assert.rejects(manager.initialize(), (err) => {
                for (const m of ['appendFile', 'rename', 'readdir', 'unlink', 'mkdir']) {
                    assert.ok(err.message.includes(`‘${m}’`), err.message);
                }
                assert.ok( ! err.message.includes('‘readFile’'), err.message);
                return true;
            });
        });

        it('get_citation_by_id() throws for an unknown id', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { manual: new CitationSourceManual() }, options
            );
            await manager.initialize();
            assert.throws(
                () => manager.get_citation_by_id('manual:nonexistent'),
                (err) => {
                    assert.strictEqual(err.message,
                                       'Item ‘manual:nonexistent’ not found in citations cache');
                    return true;
                }
            );
        });

        it('store_citation() on the manager itself throws', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { manual: new CitationSourceManual() }, options
            );
            await manager.initialize();
            const msg = "store_citation() must be called from within a source's run_retrieve_chunk()";
            assert.throws( () => manager.store_citation('manual', 'x', {}), { message: msg } );
            assert.throws( () => manager.store_citation_chained('manual', 'x', 'doi', 'y', {}),
                           { message: msg } );
        });

        it('forwards progress events to on_event', async function () {
            const events = [];
            const { options } = mock_env({ on_event: (ev) => { events.push(ev); } });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);
            const types = events.map( (ev) => ev.type );
            debug('event types:', types);
            for (const t of types) {
                assert.ok(EVENT_TYPES.has(t), t);
            }
            assert.strictEqual(types[0], 'retrieve_started');
            assert.ok(types.includes('retrieve_finished'));
            assert.ok(types.includes('source_started'));
            const resolved = events.filter( (ev) => ev.type === 'cite_resolved' );
            assert.ok(resolved.some( (ev) => ev.prefix === 'arxiv' && ev.key === '1902.07714'
                                     && ev.how === 'chained'
                                     && Array.isArray(ev.target) && ev.target[0] === 'doi' ),
                      JSON.stringify(resolved));
            const started = events.find( (ev) => ev.type === 'retrieve_started' );
            assert.strictEqual(started.cites, 1);
        });

        it('survives an on_event callback that throws', async function () {
            const { options } = mock_env({ on_event: () => { throw new Error('boom'); } });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            const errors = await with_console_stub('error', async () => {
                const failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                ]);
                assert.deepStrictEqual(failures, []);
            });
            assert.ok(errors.length > 0);
        });

        it('the default progress sink logs through debug and does not throw', async function () {
            const logged = [];
            const prev_namespaces = debugm.disable();
            const prev_log = debugm.log;
            debugm.log = (...args) => { logged.push(args.join(' ')); };
            debugm.enable('zoodb.citationmanager.progress');
            try {
                const { options } = mock_env();
                const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
                await manager.initialize();
                const failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                ]);
                assert.deepStrictEqual(failures, []);
            } finally {
                debugm.log = prev_log;
                debugm.disable();
                if (prev_namespaces) {
                    debugm.enable(prev_namespaces);
                }
            }
            assert.ok(logged.some( (l) => l.includes('Retrieving 1 citation(s)') ), logged.join('\n'));

            // progress_debug: false silences it
            logged.length = 0;
            const { options } = mock_env({ progress_debug: false });
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            assert.deepStrictEqual(logged, []);
        });

        it('throws a clear error when no fetch() is available', async function () {
            const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'fetch');
            try {
                delete globalThis.fetch;
                assert.strictEqual(typeof globalThis.fetch, 'undefined');
                const { options } = mock_env();
                delete options.fetch;
                const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
                await assert.rejects(manager.initialize(), (err) => {
                    assert.strictEqual(err.message,
                                       'No fetch() available; pass citation_manager_options.fetch');
                    return true;
                });
            } finally {
                if (descriptor !== undefined) {
                    Object.defineProperty(globalThis, 'fetch', descriptor);
                }
            }
            assert.strictEqual(typeof globalThis.fetch, 'function');
        });

        it('reports an unregistered chain target when opening', async function () {
            const { options } = mock_env();
            const manager = new CitationDatabaseManager(
                { arxiv: new CitationSourceArxiv() }, options
            );
            await assert.rejects(manager.initialize(), (err) => {
                assert.match(err.message, /chains DOIs to prefix ‘doi’/);
                assert.match(err.message, /citations\.sources\.doi: true/);
                assert.match(err.message, /chain_to_doi: false/);
                return true;
            });
            // chain_to_doi: false needs no doi source
            const manager2 = new CitationDatabaseManager(
                { arxiv: new CitationSourceArxiv({ chain_to_doi: false }) }, options
            );
            await manager2.initialize();
        });

        it('reports an unregistered chain target of a custom source', async function () {
            class ChainSource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'Chain source' }, options,
                          { cite_prefix: 'ch', chains_to_sources: ['other'] });
                }
                async run_retrieve_chunk() {}
            }
            const { options } = mock_env();
            const manager = new CitationDatabaseManager({ ch: new ChainSource() }, options);
            await assert.rejects(manager.initialize(), (err) => {
                assert.strictEqual(
                    err.message,
                    'Citation source ‘ch’ declares chains_to_sources ‘other’ but no source '
                    + 'is registered under ‘other’'
                );
                return true;
            });
        });

        it('initializes a source reused by a new manager once per run', async function () {
            let n_init = 0;
            let n_chunks = 0;
            class MySource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'My source', chunk_size: 1, chunk_retrieve_delay_ms: 0 },
                          options, { cite_prefix: 'my' });
                }
                async source_initialize_run() { n_init += 1; }
                async run_retrieve_chunk(ids) {
                    n_chunks += 1;
                    for (const id of ids) {
                        this.citation_manager.store_citation(
                            this.cite_prefix, id, { type: 'book', title: `Title ${id}` }
                        );
                    }
                }
            }
            const src = new MySource();
            const keys = ['a', 'b', 'c'];
            for (const round of [1, 2]) {
                const { options } = mock_env();
                const manager = new CitationDatabaseManager({ my: src }, options);
                await manager.initialize();
                const failures = await manager.retrieve_citations(
                    keys.map( (k) => ({ cite_prefix: 'my', cite_key: `${k}${round}` }) )
                );
                assert.deepStrictEqual(failures, []);
                assert.strictEqual(n_chunks, 3 * round);
                assert.strictEqual(n_init, round);
            }
        });

        it('treats a falsy cache_entry_default_duration_ms as the default', async function () {
            const manager = new CitationDatabaseManager(
                {}, { skip_save_cache: true, cache_entry_default_duration_ms: 0 }
            );
            assert.strictEqual(manager.cache_entry_default_duration_ms, 30 * 24 * 3600 * 1000);
        });

        it('purge_expired() drops pruned entries from memory', async function () {
            class TtlSource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'TTL source', chunk_retrieve_delay_ms: 0 }, options,
                          { cite_prefix: 'ttl', cache_duration_ms: 1000 });
                }
                async run_retrieve_chunk(ids) {
                    for (const id of ids) {
                        this.citation_manager.store_citation(
                            this.cite_prefix, id, { type: 'book', title: `Title ${id}` }
                        );
                    }
                }
            }
            const { host, options } = mock_env({ ttl_policy: { grace_days: 0 } });
            const manager = new CitationDatabaseManager({ ttl: new TtlSource() }, options);
            await manager.initialize();
            assert.deepStrictEqual(
                await manager.retrieve_citations([ { cite_prefix: 'ttl', cite_key: 'k' } ]), []
            );
            assert.strictEqual(manager.get_citation_by_id('ttl:k').title, 'Title k');
            assert.strictEqual(await manager.purge_expired(), 0);
            assert.strictEqual(manager.get_citation_by_id('ttl:k').title, 'Title k');
            host.set_now(host.now() + 10 * 1000);
            assert.strictEqual(await manager.purge_expired(), 1);
            assert.throws( () => manager.get_citation_by_id('ttl:k'),
                           { message: 'Item ‘ttl:k’ not found in citations cache' } );
            assert.ok( ! manager.keys().includes('ttl:k') );
        });

        it('runs a custom source with source_initialize_run/source_finalize_run', async function () {
            const calls = [];
            class MySource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'My source', chunk_size: 2, chunk_retrieve_delay_ms: 0 },
                          options, { cite_prefix: 'my' });
                }
                async source_initialize_run() { calls.push('init'); }
                async source_finalize_run() {
                    calls.push('finalize');
                    assert.throws( () => this.citation_manager.store_citation('my', 'z', {}),
                                   /run_retrieve_chunk/ );
                }
                async run_retrieve_chunk(ids) {
                    calls.push(['chunk', [...ids]]);
                    for (const id of ids) {
                        if (id === 'bad') {
                            throw new Error('bad key!');
                        }
                        await this.citation_manager.store_citation(
                            this.cite_prefix, id, { type: 'book', title: `Title ${id}` },
                            this.cache_store_options
                        );
                    }
                }
            }
            const src = new MySource();
            const { options } = mock_env();
            const manager = new CitationDatabaseManager({ my: src }, options);
            await manager.initialize();

            let failures;
            await with_console_stub('error', async () => {
                failures = await manager.retrieve_citations([
                    { cite_prefix: 'my', cite_key: 'a' },
                    { cite_prefix: 'my', cite_key: 'b' },
                    { cite_prefix: 'my', cite_key: 'c' },
                    { cite_prefix: 'my', cite_key: 'bad' },
                ]);
            });
            assert.deepStrictEqual(calls[0], 'init');
            assert.strictEqual(calls.filter( (c) => c === 'init' ).length, 1);
            assert.strictEqual(calls[calls.length - 1], 'finalize');
            assert.strictEqual(calls.filter( (c) => Array.isArray(c) ).length, 2);
            assert.strictEqual(failures.length, 1);
            assert.strictEqual(failures[0].key, 'bad');
            assert.match(failures[0].message, /bad key!/);
            assert.strictEqual(manager.get_citation_by_id('my:c').title, 'Title c');
            // the real manager is restored after each chunk
            assert.strictEqual(src.citation_manager, manager);

            // a second run initializes again
            await manager.retrieve_citations([ { cite_prefix: 'my', cite_key: 'd' } ]);
            assert.strictEqual(calls.filter( (c) => c === 'init' ).length, 2);
        });

        it('fetch_url() retries retryable statuses honoring Retry-After', async function () {
            let calls = 0;
            const sleeps = [];
            const fake_fetch = async (url, init) => {
                calls += 1;
                if (url.startsWith('https://api.example.org/busy') && calls < 3) {
                    return new Response('busy', { status: 429, headers: { 'Retry-After': '2' } });
                }
                if (url.startsWith('https://api.example.org/missing')) {
                    return new Response('nope', { status: 404 });
                }
                return new Response(JSON.stringify({ title: `T ${url}`, ua: init.headers['user-agent'] }),
                                    { status: 200, headers: { 'content-type': 'application/json' } });
            };
            class ApiSource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'API source' }, options,
                          { cite_prefix: 'api', chunk_retrieve_delay_ms: 0, fetch_max_retries: 5 });
                }
                async run_retrieve_chunk(ids) {
                    for (const id of ids) {
                        const text = await this.fetch_url(`https://api.example.org/${id}`);
                        const data = JSON.parse(text);
                        const resp = await this.fetch_url(`https://api.example.org/missing/${id}`,
                                                          { get_response_object: true });
                        assert.strictEqual(resp.status, 404);
                        assert.strictEqual(resp.text(), 'nope');
                        this.citation_manager.store_citation(
                            this.cite_prefix, id, { type: 'webpage', title: data.title, note: data.ua }
                        );
                    }
                }
            }
            const manager = new CitationDatabaseManager(
                { api: new ApiSource() },
                {
                    fetch: fake_fetch,
                    sleep: async (ms) => { sleeps.push(ms); },
                    skip_save_cache: true,
                    default_user_agent: 'TestAgent/1.0',
                }
            );
            await manager.initialize();
            let failures;
            await with_console_stub('warn', async () => {
                failures = await manager.retrieve_citations([ { cite_prefix: 'api', cite_key: 'busy' } ]);
            });
            assert.deepStrictEqual(failures, []);
            assert.deepStrictEqual(sleeps, [2000, 2000]);
            const item = manager.get_citation_by_id('api:busy');
            assert.strictEqual(item.title, 'T https://api.example.org/busy');
            assert.strictEqual(item.note, 'TestAgent/1.0');
            assert.strictEqual(calls, 4);
        });

        it('fetch_url() throws when retries are exhausted, failing the chunk', async function () {
            const sleeps = [];
            const fake_fetch = async () => new Response('down', { status: 503 });
            class ApiSource extends CitationSourceBase {
                constructor(options) {
                    super({ source_name: 'API source' }, options,
                          { cite_prefix: 'api', chunk_retrieve_delay_ms: 0, fetch_max_retries: 2 });
                }
                async run_retrieve_chunk(ids) {
                    await this.fetch_url(`https://api.example.org/${ids[0]}`);
                }
            }
            const manager = new CitationDatabaseManager(
                { api: new ApiSource() },
                { fetch: fake_fetch, sleep: async (ms) => { sleeps.push(ms); }, skip_save_cache: true }
            );
            await manager.initialize();
            let failures;
            await with_console_stub('warn', async () => {
                await with_console_stub('error', async () => {
                    failures = await manager.retrieve_citations([ { cite_prefix: 'api', cite_key: 'x' } ]);
                });
            });
            assert.strictEqual(failures.length, 1);
            assert.match(failures[0].message, /503 after 2 retries/);
            assert.strictEqual(sleeps.length, 2);
        });

        it('rejects malformed arXiv identifiers without any request', async function () {
            const { host, options } = mock_env();
            const manager = new CitationDatabaseManager(arxiv_doi_sources(), options);
            await manager.initialize();
            let failures;
            await with_console_stub('error', async () => {
                failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: 'quant-ph/050807' },
                ]);
            });
            assert.strictEqual(failures.length, 1);
            assert.match(failures[0].message, /malformed/i);
            assert.strictEqual(host.requests.length, 0);
        });

    });

});


// Opt-in network test: ZOODB_TEST_NETWORK=1 yarn mocha test/test_citationmanager_manager.js
if (process.env.ZOODB_TEST_NETWORK === '1') {

    describe('zoodb.citationmanager._manager (network)', function () {

        this.timeout(120000);

        it('fetches a real arXiv id and a real DOI', async function () {
            const manager = new CitationDatabaseManager(
                arxiv_doi_sources(),
                { skip_save_cache: true, progress_debug: true }
            );
            await manager.initialize();
            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/9705052' },
                { cite_prefix: 'doi', cite_key: '10.1103/PhysRevLett.102.110502' },
            ]);
            assert.deepStrictEqual(failures, []);
            const a = manager.get_citation('arxiv', 'quant-ph/9705052');
            assert.strictEqual(a.title.toLowerCase(),
                               'Stabilizer Codes and Quantum Error Correction'.toLowerCase());
            const d = manager.get_citation('doi', '10.1103/PhysRevLett.102.110502');
            assert.strictEqual(d.id, 'doi:10.1103/PhysRevLett.102.110502');
            assert.match(d._hash, /^[0-9a-f]{64}$/);
        });

    });

}
