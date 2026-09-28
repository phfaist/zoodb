// Direct tests of the autocitefetch wasm binding (rust/ → src/citationmanager/_wasm/),
// driven with mock host functions and the fixtures in test/_fixtures/.  No network.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

import { load_autocitefetch_wasm } from '../src/citationmanager/_load_wasm.js';
import { make_memory_cache_fs, make_node_cache_fs } from '../src/citationmanager/_cachefs.js';
import { make_mock_host } from './_helpers/citation_mock_host.js';


const citationmanager_dir = fileURLToPath(new URL('../src/citationmanager/', import.meta.url));
const wasm_dir = path.join(citationmanager_dir, '_wasm');

const NO_RESOLUTION_MESSAGE = 'source returned no resolution for this key';

const DOI_1902 = '10.1103/physrevx.10.041018'; // as in doi_response_1902.07714.json
const DOI_1902_ARXIV = '10.1103/PhysRevX.10.041018'; // as in arxiv_response_1902.07714.xml


let writer_counter = 0;

/** The `host` object for `open()` built from a mock host (only the keys the binding accepts). */
function host_of(mock, overrides = {})
{
    return {
        fetch: mock.fetch,
        cacheFs: mock.cacheFs,
        sleep: mock.sleep,
        now: mock.now,
        ...overrides,
    };
}

function config_of(mock, sources, extra = {})
{
    writer_counter += 1;
    return {
        sources,
        host: host_of(mock),
        cacheDir: '/cache',
        writerId: `test-writer-${writer_counter}`,
        ...extra,
    };
}

const ARXIV_DOI_SPECS = [
    { kind: 'arxiv', prefix: 'arxiv' },
    { kind: 'doi', prefix: 'doi' },
];

function is_plain_object(x)
{
    return x !== null && typeof x === 'object' && Object.getPrototypeOf(x) === Object.prototype;
}

async function assert_rejects_with(promise, pattern)
{
    await assert.rejects(promise, (err) => {
        assert.ok(err instanceof Error, `expected an Error instance, got ${err}`);
        assert.match(err.message, pattern);
        return true;
    });
}

/** A JS source object; `impl(keys, ctx)` returns the resolutions. */
function js_source(impl, extra = {})
{
    const calls = [];
    return {
        calls,
        source: {
            async retrieveChunk(keys, ctx) {
                calls.push({ keys: [...keys], ctx: { ...ctx } });
                return impl(keys, ctx);
            },
            ...extra,
        },
    };
}

function concrete_for_all(keys)
{
    return keys.map( (key) => ({ key, outcome: 'concrete', csl: { type: 'article', title: `Title ${key}` } }) );
}

function make_tmp_dir()
{
    return fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-wasm-test-'));
}


/** Replace `console.error` by a recorder while `fn` runs; returns the recorded calls. */
async function with_console_error_stub(fn)
{
    const calls = [];
    const orig = console.error;
    console.error = (...args) => { calls.push(args); };
    try {
        await fn(calls);
    } finally {
        console.error = orig;
    }
    return calls;
}

const EVENT_TYPES = new Set([
    'retrieve_started', 'pass_started', 'pass_finished', 'retrieve_finished',
    'source_started', 'source_progress', 'source_finished',
    'cite_resolved', 'cite_failed', 'wait_started', 'wait_finished',
    'request_started', 'request_finished', 'unknown',
]);


describe('autocitefetch wasm module', function () {

    this.timeout(10000);

    let wasm;
    before(async function () {
        wasm = await load_autocitefetch_wasm();
    });

    describe('generated files', function () {

        it('are environment-neutral (invariant 8)', function () {
            const forbidden = /import\.meta|require\(|process\.|\bBuffer\b|__dirname|node:|\bfs\b/;
            const files = fs.readdirSync(wasm_dir).filter( (f) => f.endsWith('.js') )
                  .map( (f) => path.join(wasm_dir, f) );
            files.push(path.join(citationmanager_dir, '_load_wasm.js'));
            assert.ok(files.length >= 3);
            for (const f of files) {
                const lines = fs.readFileSync(f, 'utf-8').split('\n');
                lines.forEach( (line, i) => {
                    const m = forbidden.exec(line);
                    assert.strictEqual(m, null, `${f}:${i + 1}: forbidden token ${m && m[0]}`);
                } );
            }
        });

        it('are within the size budgets', function () {
            const info = JSON.parse(fs.readFileSync(path.join(wasm_dir, 'BUILD_INFO.json'), 'utf-8'));
            assert.ok(info.wasm_size_bytes > 0);
            assert.ok(info.wasm_size_bytes <= 900 * 1024, `wasm is ${info.wasm_size_bytes} bytes`);
            assert.ok(info.b64_module_size_bytes <= 1.2 * 1024 * 1024,
                      `base64 module is ${info.b64_module_size_bytes} bytes`);
        });
    });

    it('version() returns the binding and crate versions', function () {
        const v = wasm.version();
        assert.strictEqual(typeof v.binding, 'string');
        assert.strictEqual(typeof v.autocitefetch, 'string');
        assert.match(v.autocitefetch, /^0\.1\./);
    });

    describe('arXiv and DOI sources', function () {

        it('retrieves an arXiv entry and follows its chain to the DOI', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            assert.deepStrictEqual(mgr.prefixes, ['arxiv', 'doi']);
            assert.strictEqual(mgr.legacyImport, null);

            const failures = await mgr.retrieve([['arxiv', '1902.07714']]);
            assert.deepStrictEqual(failures, []);

            const item = await mgr.get('arxiv', '1902.07714');
            assert.ok(is_plain_object(item));
            assert.strictEqual(item.id, 'arxiv:1902.07714');
            assert.strictEqual(item.arxivid, '1902.07714');
            // the chained item is doi.org's CSL-JSON (fixture spells the DOI in lowercase)
            assert.strictEqual(item.DOI, DOI_1902);
            assert.ok(!Object.hasOwn(item, 'doi'));
            assert.ok(is_plain_object(item.issued));

            const urls = mock.requests.map( (r) => r.url );
            assert.strictEqual(urls.filter( (u) => u.includes('export.arxiv.org') ).length, 1, urls.join());
            assert.strictEqual(urls.filter( (u) => u.includes('doi.org') ).length, 1, urls.join());
            // request shape
            const doi_req = mock.requests.find( (r) => r.url.includes('doi.org') );
            assert.strictEqual(doi_req.method, 'GET');
            assert.strictEqual(doi_req.body, null);
            for (const h of Object.keys(doi_req.headers)) {
                assert.strictEqual(h, h.toLowerCase());
            }

            const keys = await mgr.keys();
            assert.ok(keys.includes('arxiv:1902.07714'), keys.join());
            assert.ok(keys.includes(`doi:${DOI_1902}`), keys.join());

            // the DOI entry itself is readable with any spelling; id normalized
            const doi_item = await mgr.get('doi', DOI_1902_ARXIV);
            assert.strictEqual(doi_item.id, `doi:${DOI_1902}`);

            const many = await mgr.getMany([['arxiv', '1902.07714'], ['doi', '10.1/absent']]);
            assert.strictEqual(many.length, 2);
            assert.ok(is_plain_object(many[0]));
            assert.strictEqual(many[0].id, 'arxiv:1902.07714');
            assert.strictEqual(many[1], null);

            await assert_rejects_with(mgr.get('doi', '10.1/x'), /^doi:10\.1\/x: not in cache$/);
            mgr.free();
        });

        it('chainDoisTo: null keeps the arXiv metadata and fetches no DOI', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'arxiv', prefix: 'arxiv', chainDoisTo: null },
            ]));
            assert.deepStrictEqual(await mgr.retrieve([['arxiv', '1902.07714']]), []);
            assert.strictEqual(mock.requests.length, 1);
            assert.ok(mock.requests[0].url.includes('export.arxiv.org'));
            const item = await mgr.get('arxiv', '1902.07714');
            assert.strictEqual(item.id, 'arxiv:1902.07714');
            assert.strictEqual(item.DOI, DOI_1902_ARXIV);
            assert.ok(typeof item.title === 'string' && item.title.length > 0);
            assert.deepStrictEqual(await mgr.keys(), ['arxiv:1902.07714']);
        });

        it('a malformed arXiv id yields exactly one failure', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            const failures = await mgr.retrieve([['arxiv', 'not an id']]);
            assert.strictEqual(failures.length, 1);
            const f = failures[0];
            assert.ok(is_plain_object(f));
            assert.strictEqual(f.prefix, 'arxiv');
            assert.strictEqual(f.key, 'not an id');
            assert.strictEqual(typeof f.message, 'string');
            assert.strictEqual(f.origin, null);
        });

        it('an unregistered prefix is reported as a failure (no rejection)', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            const failures = await mgr.retrieve([['nope', 'x']]);
            assert.strictEqual(failures.length, 1);
            assert.strictEqual(failures[0].prefix, 'nope');
            assert.strictEqual(failures[0].key, 'x');
            assert.match(failures[0].message, /nope/);
            assert.strictEqual(failures[0].origin, null);
            assert.strictEqual(mock.requests.length, 0);
        });

        it('a failing chain target is attributed to the requested citation', async function () {
            // arXiv answers; doi.org has nothing for this DOI (404)
            const mock = make_mock_host();
            const fetch = async (req) => (req.url.includes('doi.org')
                ? { status: 404, headers: {}, body: new Uint8Array() }
                : mock.fetch(req));
            const cfg = config_of(mock, ARXIV_DOI_SPECS);
            cfg.host.fetch = fetch;
            const mgr = await wasm.CitationManager.open(cfg);
            const failures = await mgr.retrieve([['arxiv', '1902.07714']]);
            assert.strictEqual(failures.length, 1);
            assert.strictEqual(failures[0].prefix, 'doi');
            assert.deepStrictEqual(failures[0].origin, ['arxiv', '1902.07714']);
        });

        it('maps a retryable fetch rejection to a retried transport error', async function () {
            const mock = make_mock_host();
            let n = 0;
            const fetch = async (req) => {
                n += 1;
                if (n === 1) {
                    const err = new TypeError('network down');
                    err.retryable = true;
                    throw err;
                }
                return mock.fetch(req);
            };
            const cfg = config_of(mock, [{ kind: 'doi', prefix: 'doi' }]);
            cfg.host.fetch = fetch;
            const mgr = await wasm.CitationManager.open(cfg);
            assert.deepStrictEqual(await mgr.retrieve([['doi', DOI_1902]]), []);
            assert.strictEqual(n, 2);
            assert.ok(mock.sleeps.length >= 1, 'a backoff sleep went through host.sleep');
        });

        it('maps a non-retryable fetch rejection to a failure without retry', async function () {
            const mock = make_mock_host();
            let n = 0;
            const cfg = config_of(mock, [{ kind: 'doi', prefix: 'doi' }]);
            cfg.host.fetch = async () => {
                n += 1;
                throw new Error('forbidden by host');
            };
            const mgr = await wasm.CitationManager.open(cfg);
            const failures = await mgr.retrieve([['doi', DOI_1902]]);
            assert.strictEqual(n, 1);
            assert.strictEqual(failures.length, 1);
            assert.match(failures[0].message, /forbidden by host/);
        });
    });

    describe('JavaScript sources', function () {

        it('concrete, chained and omitted keys', async function () {
            const mock = make_mock_host();
            const src = js_source( (keys) => {
                const out = [];
                for (const key of keys) {
                    if (key === 'a') {
                        out.push({ key, outcome: 'concrete', csl: { type: 'book', title: 'Book A' } });
                    } else if (key === 'b') {
                        out.push({ key, outcome: 'chained', prefix: 'doi', targetKey: DOI_1902_ARXIV,
                                   setProperties: { note: 'via custom' } });
                    }
                    // 'c' omitted
                }
                return out;
            }, { chainsTo: ['doi'] });
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'custom', source: src.source, ttlMs: 3600000, minIntervalMs: 0 },
                { kind: 'doi', prefix: 'doi' },
            ]));

            const failures = await mgr.retrieve([['custom', 'a'], ['custom', 'b'], ['custom', 'c']]);
            assert.deepStrictEqual(failures.map( (f) => [f.prefix, f.key, f.origin] ),
                                   [['custom', 'c', null]]);
            assert.ok(failures[0].message.endsWith(NO_RESOLUTION_MESSAGE), failures[0].message);

            assert.strictEqual(src.calls.length, 1);
            assert.deepStrictEqual(src.calls[0].ctx, { prefix: 'custom' });
            assert.deepStrictEqual([...src.calls[0].keys].sort(), ['a', 'b', 'c']);

            const a = await mgr.get('custom', 'a');
            assert.ok(is_plain_object(a));
            assert.strictEqual(a.id, 'custom:a');
            assert.strictEqual(a.title, 'Book A');

            const b = await mgr.get('custom', 'b');
            assert.strictEqual(b.id, 'custom:b');
            assert.strictEqual(b.DOI, DOI_1902);
            assert.strictEqual(b.note, 'via custom');

            const keys = await mgr.keys();
            assert.ok(keys.includes('custom:a') && keys.includes('custom:b')
                      && keys.includes(`doi:${DOI_1902}`), keys.join());
            assert.ok(!keys.includes('custom:c'));
        });

        it('a rejected retrieveChunk fails every key of the chunk', async function () {
            const mock = make_mock_host();
            const src = js_source( () => { throw new Error('boom from source'); } );
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'custom', source: src.source, chunkSize: Infinity },
            ]));
            const failures = await mgr.retrieve([['custom', 'x'], ['custom', 'y']]);
            assert.deepStrictEqual(failures.map( (f) => f.key ).sort(), ['x', 'y']);
            for (const f of failures) {
                assert.match(f.message, /boom from source/);
            }
            assert.strictEqual(src.calls.length, 1, 'chunkSize: Infinity puts both keys in one chunk');
        });

        it('an invalid resolution fails every key of the chunk', async function () {
            const mock = make_mock_host();
            const src = js_source( (keys) => keys.map( (key) => ({ key, outcome: 'bogus' }) ) );
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'custom', source: src.source },
            ]));
            const failures = await mgr.retrieve([['custom', 'x']]);
            assert.strictEqual(failures.length, 1);
            assert.match(failures[0].message, /invalid resolution/);
        });

        it('default normalization trims only; normalizeKey is honored', async function () {
            const mock = make_mock_host();
            const src1 = js_source(concrete_for_all);
            const src2 = js_source(concrete_for_all, { normalizeKey: (k) => k.trim().toUpperCase() });
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'plain', source: src1.source },
                { kind: 'js', prefix: 'upper', source: src2.source },
            ]));
            assert.deepStrictEqual(
                await mgr.retrieve([['plain', ' MixedCase '], ['upper', ' abc ']]), []
            );
            assert.deepStrictEqual(src1.calls[0].keys, ['MixedCase']);
            assert.deepStrictEqual(src2.calls[0].keys, ['ABC']);
            assert.strictEqual((await mgr.get('plain', 'MixedCase')).id, 'plain:MixedCase');
            assert.strictEqual((await mgr.get('upper', 'abc')).id, 'upper:ABC');
        });

        it('chainsTo targets are validated at open', async function () {
            const mock = make_mock_host();
            const src = js_source(concrete_for_all, { chainsTo: ['nope'] });
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [
                    { kind: 'js', prefix: 'custom', source: src.source },
                ])),
                /`custom:`.*`nope:`/
            );
        });

        it('a js spec without a source object is rejected', async function () {
            const mock = make_mock_host();
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [{ kind: 'js', prefix: 'custom' }])),
                /citation source `custom:`.*source/
            );
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [
                    { kind: 'js', prefix: 'custom', source: { notRetrieveChunk() {} } },
                ])),
                /retrieveChunk/
            );
        });
    });

    describe('manual and bib sources', function () {

        it('manual citations resolve to _ready_formatted and are never persisted', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'manual', prefix: 'manual', format: 'flm' },
            ]));
            assert.deepStrictEqual(await mgr.retrieve([['manual', ' Some *Text* ']]), []);
            const item = await mgr.get('manual', ' Some *Text* ');
            assert.deepStrictEqual(item._ready_formatted, { flm: ' Some *Text* ' });
            await mgr.flush();
            const main = new TextDecoder().decode(mock.cacheFs.export().get('/cache/citations.jsonl'));
            assert.ok(!main.includes('Some'), main);
        });

        it('bib with entries', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'bib', prefix: 'preset',
                  entries: { Knuth84: { type: 'book', title: 'The TeXbook' } } },
            ]));
            const failures = await mgr.retrieve([['preset', 'Knuth84'], ['preset', 'knuth84']]);
            // keys are case-sensitive
            assert.deepStrictEqual(failures.map( (f) => f.key ), ['knuth84']);
            const item = await mgr.get('preset', 'Knuth84');
            assert.strictEqual(item.title, 'The TeXbook');
            assert.strictEqual(item.id, 'preset:Knuth84');
        });

        it('bib with JSON and YAML files (format auto)', async function () {
            const json_url = 'file:///virtual/refs.json';
            const yaml_url = 'file:///virtual/refs.yml';
            const mock = make_mock_host({ url_map: {
                [json_url]: JSON.stringify([{ id: 'j1', type: 'article', title: 'From JSON' }]),
                [yaml_url]: 'y1:\n  type: book\n  title: From YAML\n  issued:\n    date-parts: [[2001]]\n',
            } });
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'bib', prefix: 'bj', files: [json_url] },
                { kind: 'bib', prefix: 'by', files: [yaml_url], format: 'auto' },
                { kind: 'bib', prefix: 'byy', files: [yaml_url], format: 'yaml' },
            ]));
            assert.deepStrictEqual(await mgr.retrieve([['bj', 'j1'], ['by', 'y1'], ['byy', 'y1']]), []);
            assert.strictEqual((await mgr.get('bj', 'j1')).title, 'From JSON');
            const y = await mgr.get('by', 'y1');
            assert.strictEqual(y.title, 'From YAML');
            assert.deepStrictEqual(y.issued, { 'date-parts': [[2001]] });
            assert.strictEqual((await mgr.get('byy', 'y1')).title, 'From YAML');
            assert.ok(mock.requests.some( (r) => r.url === json_url ));
        });

        it('bib with a JSON-only format fails on a YAML file', async function () {
            const yaml_url = 'file:///virtual/refs.yml';
            const mock = make_mock_host({ url_map: { [yaml_url]: 'y1:\n  title: T\n' } });
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'bib', prefix: 'b', files: [yaml_url], format: 'json' },
            ]));
            const failures = await mgr.retrieve([['b', 'y1']]);
            assert.strictEqual(failures.length, 1);
            assert.match(failures[0].message, /invalid JSON/);
        });

        it('bib with both files and entries is rejected', async function () {
            const mock = make_mock_host();
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [
                    { kind: 'bib', prefix: 'bib', files: ['file:///x.json'], entries: {} },
                ])),
                /^citation source `bib:`: .*not both/
            );
        });
    });

    describe('config validation', function () {

        it('chunkSize: Infinity is accepted, 0 is rejected', async function () {
            const mock = make_mock_host();
            await wasm.CitationManager.open(config_of(mock, [
                { kind: 'doi', prefix: 'doi', chunkSize: Infinity },
            ]));
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [
                    { kind: 'doi', prefix: 'doi', chunkSize: 0 },
                ])),
                /citation source `doi:`.*chunkSize/
            );
        });

        it('unknown keys are rejected by name', async function () {
            const mock = make_mock_host();
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [{ kind: 'doi', prefix: 'doi', bogus: 1 }])),
                /citation source `doi:`.*bogus/
            );
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, { cacheFile: 'x' })),
                /cacheFile/
            );
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, { retry: { max_retries: 2 } })),
                /max_retries/
            );
            const cfg = config_of(mock, ARXIV_DOI_SPECS);
            cfg.host.extraThing = () => {};
            await assert_rejects_with(wasm.CitationManager.open(cfg), /host: .*extraThing/);
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [{ kind: 'nope', prefix: 'x' }])),
                /nope/
            );
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [{ kind: 'arxiv', prefix: 'arxiv' }])),
                /`arxiv:`.*`doi:`/  // default chainDoisTo 'doi' needs a doi source
            );
        });

        it('duplicate prefixes are rejected', async function () {
            const mock = make_mock_host();
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, [
                    { kind: 'doi', prefix: 'doi' }, { kind: 'doi', prefix: 'doi' },
                ])),
                /more than one citation source.*doi/
            );
        });

        it('undefined-valued keys count as absent', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'arxiv', prefix: 'arxiv', chainDoisTo: undefined, ttlMs: undefined },
                { kind: 'doi', prefix: 'doi' },
            ], { cacheBase: undefined }));
            await mgr.retrieve([['arxiv', '1902.07714']]);
            // chainDoisTo undefined kept the default: the DOI was fetched
            assert.ok(mock.requests.some( (r) => r.url.includes('doi.org') ));
        });

        it('options are accepted (policies, dropped fields, throttle, onEvent)', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, {
                cacheBase: 'mycites',
                ttlPolicy: { stalePercent: 80, jitterPercent: 0, graceDays: 1 },
                retry: { maxRetries: 1, baseMs: 1, capMs: 2, honorRetryAfter: false },
                maxChainDepth: 4,
                dropCslFields: ['reference', 'abstract'],
                throttleEventsMs: 0,
            }));
            assert.deepStrictEqual(await mgr.retrieve([['arxiv', '1902.07714']]), []);
            const item = await mgr.get('arxiv', '1902.07714');
            assert.ok(!Object.hasOwn(item, 'reference'));
            await mgr.flush();
            assert.ok(mock.cacheFs.export().has('/cache/mycites.jsonl'));
            // onEvent is accepted (events are tested under "progress events")
            const cfg = config_of(mock, ARXIV_DOI_SPECS);
            cfg.host.onEvent = () => {};
            await wasm.CitationManager.open(cfg);
        });

        it('legacyEntries: [] imports nothing and reports zero counts', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, { legacyEntries: [] }));
            assert.ok(is_plain_object(mgr.legacyImport));
            assert.deepStrictEqual(mgr.legacyImport, { imported: 0, skipped: 0 });
            await assert_rejects_with(
                wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, { legacyEntries: {} })),
                /legacyEntries.*array/
            );
        });

        it('malformed retrieve input is rejected', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            await assert_rejects_with(mgr.retrieve([['arxiv']]), /retrieve: .*\[prefix, key\]/);
            await assert_rejects_with(mgr.getMany('x'), /getMany: /);
        });
    });

    describe('cache: keys, prune, flush', function () {

        it('works with the memory cache fs and persists across opens', async function () {
            const mock = make_mock_host();
            const mgr = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            await mgr.retrieve([['arxiv', '1902.07714'], ['arxiv', 'quant-ph/0406196']]);
            const removed = await mgr.prune();
            assert.strictEqual(typeof removed, 'number');
            assert.strictEqual(removed, 0);
            await mgr.flush();

            const files = [...mock.cacheFs.export().keys()];
            assert.ok(files.includes('/cache/citations.jsonl'), files.join());
            assert.deepStrictEqual(files.filter( (f) => f.includes('._citations') ), []);

            const keys = await mgr.keys();
            assert.deepStrictEqual(keys, [...keys].sort());
            assert.ok(keys.includes('arxiv:quant-ph/0406196'), keys.join());
            assert.ok(keys.includes('doi:10.1103/physreva.70.052328'), keys.join());

            // a second manager over the same fs sees the entries without fetching
            const n_requests = mock.requests.length;
            const mgr2 = await wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS));
            assert.deepStrictEqual(await mgr2.keys(), keys);
            assert.deepStrictEqual(await mgr2.retrieve([['arxiv', '1902.07714']]), []);
            assert.strictEqual(mock.requests.length, n_requests);
            assert.strictEqual((await mgr2.get('arxiv', '1902.07714')).DOI, DOI_1902);
        });

        it('prune removes entries expired past the grace window', async function () {
            const mock = make_mock_host();
            const src = js_source(concrete_for_all);
            const specs = [{ kind: 'js', prefix: 'custom', source: src.source, ttlMs: 1000 }];
            const mgr = await wasm.CitationManager.open(config_of(mock, specs, {
                ttlPolicy: { graceDays: 0 },
            }));
            await mgr.retrieve([['custom', 'k']]);
            assert.strictEqual(await mgr.prune(), 0);
            mock.set_now(mock.now() + 10 * 1000);
            assert.strictEqual(await mgr.prune(), 1);
            assert.deepStrictEqual(await mgr.keys(), []);
        });

        it('overlapping retrieve calls do not interfere', async function () {
            const mock = make_mock_host();
            const src = js_source( async (keys) => {
                await new Promise( (resolve) => setTimeout(resolve, 5) );
                return concrete_for_all(keys);
            } );
            const mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'custom', source: src.source, minIntervalMs: 0 },
            ]));
            const results = await Promise.all([
                mgr.retrieve([['custom', 'one']]),
                mgr.retrieve([['custom', 'two']]),
                mgr.prune(),
                mgr.flush(),
                mgr.keys(),
                mgr.getMany([['custom', 'one']]),
            ]);
            assert.deepStrictEqual(results[0], []);
            assert.deepStrictEqual(results[1], []);
            assert.deepStrictEqual(await mgr.keys(), ['custom:one', 'custom:two']);
            await mgr.flush();
            const main = new TextDecoder().decode(mock.cacheFs.export().get('/cache/citations.jsonl'));
            assert.ok(main.includes('custom:one') && main.includes('custom:two'), main);
        });

        it('a js source may read the manager from within retrieveChunk', async function () {
            const mock = make_mock_host();
            let mgr = null;
            const src = js_source( async (keys) => {
                assert.deepStrictEqual(await mgr.getMany([['custom', 'zzz']]), [null]);
                await mgr.keys();
                return concrete_for_all(keys);
            } );
            mgr = await wasm.CitationManager.open(config_of(mock, [
                { kind: 'js', prefix: 'custom', source: src.source },
            ]));
            assert.deepStrictEqual(await mgr.retrieve([['custom', 'a']]), []);
        });
    });

    describe('node cache fs in a temporary directory', function () {

        const tmp_dirs = [];
        after(function () {
            for (const d of tmp_dirs) {
                fs.rmSync(d, { recursive: true, force: true });
            }
        });
        function tmp_dir() {
            const d = make_tmp_dir();
            tmp_dirs.push(d);
            return d;
        }

        async function open_node(dir, specs, writerId) {
            const mock = make_mock_host();
            const cfg = config_of(mock, specs, { cacheDir: dir });
            cfg.host.cacheFs = make_node_cache_fs(fs);
            if (writerId) {
                cfg.writerId = writerId;
            }
            return wasm.CitationManager.open(cfg);
        }

        const instant_specs = () => [
            { kind: 'js', prefix: 'custom', source: js_source(concrete_for_all).source, minIntervalMs: 0 },
        ];

        it('a single run leaves exactly citations.jsonl behind', async function () {
            const dir = tmp_dir();
            const mgr = await open_node(dir, instant_specs());
            assert.deepStrictEqual(await mgr.retrieve([['custom', 'a'], ['custom', 'b']]), []);
            await mgr.flush();
            assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
            const lines = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8')
                  .split('\n').filter( (l) => l !== '' );
            assert.strictEqual(lines.length, 3, lines.join('\n')); // header + 2 entries
        });

        it('a foreign sidecar log is folded in and left in place', async function () {
            // produce a valid entry line with the crate itself (never hand-written)
            const src_dir = tmp_dir();
            const mgr1 = await open_node(src_dir, instant_specs());
            await mgr1.retrieve([['custom', 'foreign']]);
            await mgr1.flush();
            const entry_line = fs.readFileSync(path.join(src_dir, 'citations.jsonl'), 'utf-8')
                  .split('\n').filter( (l) => l.includes('"custom:foreign"') );
            assert.strictEqual(entry_line.length, 1);

            const dir = tmp_dir();
            const foreign = path.join(dir, '._citations.other.log');
            fs.writeFileSync(foreign, entry_line[0] + '\n');

            const mgr = await open_node(dir, instant_specs());
            assert.ok((await mgr.keys()).includes('custom:foreign'));
            await mgr.retrieve([['custom', 'mine']]);
            await mgr.flush();

            assert.deepStrictEqual(fs.readdirSync(dir).sort(), ['._citations.other.log', 'citations.jsonl']);
            const main = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8');
            assert.ok(main.includes('"custom:foreign"'), main);
            assert.ok(main.includes('"custom:mine"'), main);
            assert.strictEqual(fs.readFileSync(foreign, 'utf-8'), entry_line[0] + '\n');
            assert.strictEqual((await mgr.get('custom', 'foreign')).title, 'Title foreign');
        });
    });

    describe('progress events (onEvent)', function () {

        function open_with_events(mock, specs, extra = {}) {
            const events = [];
            const cfg = config_of(mock, specs, extra);
            cfg.host.onEvent = (ev) => { events.push(ev); };
            return wasm.CitationManager.open(cfg).then( (mgr) => ({ mgr, events }) );
        }

        const of_type = (events, type) => events.filter( (e) => e.type === type );

        it('events have the appendix-B shapes (throttleEventsMs: 0)', async function () {
            const mock = make_mock_host();
            const { mgr, events } = await open_with_events(mock, ARXIV_DOI_SPECS, { throttleEventsMs: 0 });
            assert.strictEqual(events.length, 0, 'open emits nothing');
            assert.deepStrictEqual(await mgr.retrieve([['arxiv', '1902.07714']]), []);

            for (const ev of events) {
                assert.ok(is_plain_object(ev), `not a plain object: ${ev}`);
                assert.ok(EVENT_TYPES.has(ev.type), `unexpected type ${ev.type}`);
            }
            assert.deepStrictEqual(events[0], { type: 'retrieve_started', cites: 1 });
            assert.deepStrictEqual(events[events.length - 1],
                                   { type: 'retrieve_finished', considered: 2, failed: 0 });

            const passes = of_type(events, 'pass_started');
            assert.deepStrictEqual(passes[0], { type: 'pass_started', pass: 1, cached: 0, to_fetch: 1 });
            assert.deepStrictEqual(of_type(events, 'pass_finished')[0],
                                   { type: 'pass_finished', pass: 1, discovered: 1 });

            for (const prefix of ['arxiv', 'doi']) {
                assert.deepStrictEqual(
                    of_type(events, 'source_started').find( (e) => e.prefix === prefix ),
                    { type: 'source_started', prefix, keys: 1, chunks: 1 }
                );
                assert.deepStrictEqual(
                    of_type(events, 'source_progress').find( (e) => e.prefix === prefix ),
                    { type: 'source_progress', prefix, done: 1, total: 1 }
                );
                assert.deepStrictEqual(
                    of_type(events, 'source_finished').find( (e) => e.prefix === prefix ),
                    { type: 'source_finished', prefix, done: 1 }
                );
            }

            const resolved = of_type(events, 'cite_resolved');
            const r_arxiv = resolved.find( (e) => e.prefix === 'arxiv' );
            assert.deepStrictEqual(r_arxiv, {
                type: 'cite_resolved', prefix: 'arxiv', key: '1902.07714', how: 'chained',
                target: ['doi', DOI_1902],
            });
            assert.ok(Array.isArray(r_arxiv.target));
            assert.deepStrictEqual(resolved.find( (e) => e.prefix === 'doi' ), {
                type: 'cite_resolved', prefix: 'doi', key: DOI_1902, how: 'concrete',
            });

            const req_started = of_type(events, 'request_started');
            const req_finished = of_type(events, 'request_finished');
            assert.strictEqual(req_started.length, 2);
            assert.strictEqual(req_finished.length, 2);
            for (const e of req_started) {
                assert.deepStrictEqual(Object.keys(e).sort(), ['attempt', 'type', 'url']);
                assert.strictEqual(typeof e.url, 'string');
                assert.strictEqual(e.attempt, 0);
            }
            for (const e of req_finished) {
                assert.deepStrictEqual(Object.keys(e).sort(), ['status', 'type', 'url']);
                assert.strictEqual(e.status, 200);
            }
            assert.ok(req_started.some( (e) => e.url.includes('export.arxiv.org') ));
            assert.ok(req_finished.some( (e) => e.url.includes('doi.org') ));

            // each source runs once, so no rate-limit wait; the manager flushes at the end
            assert.deepStrictEqual(of_type(events, 'wait_started'),
                                   [{ type: 'wait_started', wait: 'cache_flush', expected_ms: null }]);
            assert.deepStrictEqual(of_type(events, 'wait_finished'),
                                   [{ type: 'wait_finished', wait: 'cache_flush' }]);
        });

        it('rate-limit waits carry prefix and expected_ms', async function () {
            const mock = make_mock_host();
            const { mgr, events } = await open_with_events(mock, [{ kind: 'doi', prefix: 'doi' }],
                                                           { throttleEventsMs: 0 });
            // chunk size 1: the second DOI waits for the source's 1100 ms interval
            await mgr.retrieve([['doi', DOI_1902], ['doi', '10.1/nope']]);
            assert.deepStrictEqual(
                of_type(events, 'wait_started').find( (e) => e.wait === 'rate_limit' ),
                { type: 'wait_started', wait: 'rate_limit', prefix: 'doi', expected_ms: 1100 }
            );
            assert.deepStrictEqual(
                of_type(events, 'wait_finished').find( (e) => e.wait === 'rate_limit' ),
                { type: 'wait_finished', wait: 'rate_limit', prefix: 'doi' }
            );
            assert.deepStrictEqual(mock.sleeps, [1100]);
        });

        it('a failing key produces cite_failed', async function () {
            const mock = make_mock_host();
            const { mgr, events } = await open_with_events(mock, [{ kind: 'doi', prefix: 'doi' }],
                                                           { throttleEventsMs: 0 });
            const failures = await mgr.retrieve([['doi', '10.1/nope']]);
            assert.strictEqual(failures.length, 1);
            const failed = of_type(events, 'cite_failed');
            assert.strictEqual(failed.length, 1);
            assert.deepStrictEqual(Object.keys(failed[0]).sort(),
                                   ['grace_served', 'key', 'message', 'prefix', 'type']);
            assert.strictEqual(failed[0].prefix, 'doi');
            assert.strictEqual(failed[0].key, '10.1/nope');
            assert.strictEqual(typeof failed[0].message, 'string');
            assert.ok(failed[0].message.length > 0);
            assert.strictEqual(failed[0].grace_served, false);
            assert.deepStrictEqual(of_type(events, 'request_finished').map( (e) => e.status ), [404]);
            assert.deepStrictEqual(events[events.length - 1],
                                   { type: 'retrieve_finished', considered: 1, failed: 1 });
        });

        it('a throwing onEvent does not break the retrieve and is logged', async function () {
            const mock = make_mock_host();
            let n = 0;
            const cfg = config_of(mock, ARXIV_DOI_SPECS);
            cfg.host.onEvent = () => { n += 1; throw new Error('display broke'); };
            const calls = await with_console_error_stub(async () => {
                const mgr = await wasm.CitationManager.open(cfg);
                assert.deepStrictEqual(await mgr.retrieve([['arxiv', '1902.07714']]), []);
                assert.strictEqual((await mgr.get('arxiv', '1902.07714')).arxivid, '1902.07714');
            });
            assert.ok(n > 0);
            assert.strictEqual(calls.length, n, 'one console.error per throwing call');
            assert.match(String(calls[0][0]), /onEvent.*retrieve_started.*display broke/);
        });

        it('default throttling drops only repeated source_progress samples', async function () {
            // The crate's ThrottledReporter rate-limits only *sample* events
            // (source_progress, keyed by prefix) to one per throttleEventsMs
            // (default 1000 ms) on the host clock; every milestone passes. The
            // mock clock stands still, so after the first source_progress of a
            // prefix the others are dropped; source_finished still carries the
            // final count.
            const specs = () => [
                { kind: 'js', prefix: 'custom', source: js_source(concrete_for_all).source,
                  chunkSize: 1, minIntervalMs: 0 },
            ];
            const cites = [['custom', 'a'], ['custom', 'b'], ['custom', 'c']];

            const unthrottled = await open_with_events(make_mock_host(), specs(), { throttleEventsMs: 0 });
            assert.deepStrictEqual(await unthrottled.mgr.retrieve(cites), []);
            const throttled = await open_with_events(make_mock_host(), specs());
            assert.deepStrictEqual(await throttled.mgr.retrieve(cites), []);

            assert.deepStrictEqual(of_type(unthrottled.events, 'source_progress').map( (e) => e.done ),
                                   [1, 2, 3]);
            assert.deepStrictEqual(of_type(throttled.events, 'source_progress').map( (e) => e.done ),
                                   [1]);
            // everything else is identical
            const milestones = (evs) => evs.filter( (e) => e.type !== 'source_progress' );
            assert.deepStrictEqual(milestones(throttled.events), milestones(unthrottled.events));
            for (const type of ['retrieve_started', 'pass_started', 'source_started', 'source_finished',
                                'cite_resolved', 'pass_finished', 'retrieve_finished']) {
                assert.ok(of_type(throttled.events, type).length > 0, type);
            }
            assert.deepStrictEqual(of_type(throttled.events, 'source_finished'),
                                   [{ type: 'source_finished', prefix: 'custom', done: 3 }]);
            assert.strictEqual(of_type(throttled.events, 'cite_resolved').length, 3);
        });
    });

    describe('legacyEntries import', function () {

        const NOW = 1_700_000_000_000;
        const DAY = 24 * 3600 * 1000;

        // A small legacy cache (the `cache_downloaded_info.json` shape), turned
        // into `legacyEntries` as the migration tool does.
        const legacy_cache = {
            'arxiv:1310.2984': {
                value: { id: 'arxiv:1310.2984', _hash: 'deadbeef', type: 'article',
                         title: 'Legacy arXiv title', arxivid: '1310.2984',
                         reference: [{ key: 'r1' }] },
                expire: NOW + 10 * DAY,
            },
            'arxiv:1902.07714': {
                value: { chained: { cite_prefix: 'doi', cite_key: DOI_1902_ARXIV,
                                    set_properties: { arxivid: '1902.07714' } } },
                expire: NOW + 5 * DAY,
            },
            [`doi:${DOI_1902_ARXIV}`]: {
                value: { id: `doi:${DOI_1902_ARXIV}`, _hash: 'cafe', type: 'article-journal',
                         DOI: DOI_1902_ARXIV, title: 'Legacy DOI title' },
                expire: 'NaN',
            },
            'doi:10.1/expired': {
                value: { id: 'doi:10.1/expired', title: 'Old' },
                expire: NOW - 1000,
            },
            'nope:thing': {
                value: { id: 'nope:thing', title: 'Unknown prefix' },
                expire: NOW + DAY,
            },
        };
        const legacy_entries = () => [
            ...Object.entries(legacy_cache).map( ([id, { value, expire }]) => ({
                id, value: structuredClone(value), expire: (expire === 'NaN') ? null : expire,
            }) ),
            'not an object',
            { id: 'nocolon', value: { title: 'x' }, expire: null },
        ];

        function open_legacy(mock, extra = {}) {
            return wasm.CitationManager.open(config_of(mock, ARXIV_DOI_SPECS, {
                dropCslFields: ['reference'],
                ...extra,
            }));
        }

        it('imports entries readable by get, persists them, and keeps existing ids', async function () {
            const mock = make_mock_host({ now: NOW });
            const mgr = await open_legacy(mock, { legacyEntries: legacy_entries() });
            assert.ok(is_plain_object(mgr.legacyImport));
            assert.deepStrictEqual(mgr.legacyImport, { imported: 3, skipped: 4 });
            assert.strictEqual(mock.requests.length, 0);
            // open flushed: the committed file exists, written by the crate
            assert.ok(mock.cacheFs.export().has('/cache/citations.jsonl'));

            const a = await mgr.get('arxiv', '1310.2984');
            assert.ok(is_plain_object(a));
            assert.strictEqual(a.id, 'arxiv:1310.2984');
            assert.strictEqual(a.title, 'Legacy arXiv title');
            assert.ok(!Object.hasOwn(a, '_hash'));
            assert.ok(!Object.hasOwn(a, 'reference'));

            const c = await mgr.get('arxiv', '1902.07714');
            assert.strictEqual(c.id, 'arxiv:1902.07714');
            assert.strictEqual(c.arxivid, '1902.07714');
            assert.strictEqual(c.title, 'Legacy DOI title');
            assert.strictEqual(c.DOI, DOI_1902_ARXIV);

            const d = await mgr.get('doi', DOI_1902_ARXIV);
            assert.strictEqual(d.id, `doi:${DOI_1902}`);
            assert.ok(!Object.hasOwn(d, '_hash'));

            assert.deepStrictEqual(
                await mgr.getMany([['doi', '10.1/expired'], ['nope', 'thing']]), [null, null]
            );
            assert.deepStrictEqual(await mgr.keys(),
                                   ['arxiv:1310.2984', 'arxiv:1902.07714', `doi:${DOI_1902}`]);

            // fresh: a retrieve fetches nothing
            assert.deepStrictEqual(
                await mgr.retrieve([['arxiv', '1310.2984'], ['arxiv', '1902.07714']]), []
            );
            assert.strictEqual(mock.requests.length, 0);
            await mgr.flush();

            // a second open on the same fs, without legacyEntries
            const mgr2 = await open_legacy(mock);
            assert.strictEqual(mgr2.legacyImport, null);
            assert.deepStrictEqual(
                await mgr2.retrieve([['arxiv', '1310.2984'], ['arxiv', '1902.07714'],
                                     ['doi', DOI_1902_ARXIV]]),
                []
            );
            assert.strictEqual(mock.requests.length, 0);
            assert.strictEqual((await mgr2.get('arxiv', '1902.07714')).arxivid, '1902.07714');
            assert.strictEqual((await mgr2.get('arxiv', '1310.2984')).title, 'Legacy arXiv title');

            // re-importing the same entries keeps the existing records
            const mgr3 = await open_legacy(mock, { legacyEntries: legacy_entries() });
            assert.deepStrictEqual(mgr3.legacyImport, { imported: 0, skipped: 7 });
            assert.deepStrictEqual(await mgr3.keys(), await mgr2.keys());
        });

        it('with the node cache fs, leaves exactly citations.jsonl', async function () {
            const dir = make_tmp_dir();
            try {
                const mock = make_mock_host({ now: NOW });
                const cfg = config_of(mock, ARXIV_DOI_SPECS, {
                    cacheDir: dir, dropCslFields: ['reference'], legacyEntries: legacy_entries(),
                });
                cfg.host.cacheFs = make_node_cache_fs(fs);
                const mgr = await wasm.CitationManager.open(cfg);
                assert.deepStrictEqual(mgr.legacyImport, { imported: 3, skipped: 4 });
                assert.deepStrictEqual(fs.readdirSync(dir), ['citations.jsonl']);
                const text = fs.readFileSync(path.join(dir, 'citations.jsonl'), 'utf-8');
                assert.ok(text.includes(`"doi:${DOI_1902}"`), text);
                assert.ok(!text.includes('deadbeef') && !text.includes('"reference"'), text);
            } finally {
                fs.rmSync(dir, { recursive: true, force: true });
            }
        });
    });

    describe('host fallbacks are logged', function () {

        it('a throwing now() and a rejecting sleep() still complete the retrieve', async function () {
            const mock = make_mock_host();
            let n = 0;
            const cfg = config_of(mock, [{ kind: 'doi', prefix: 'doi' }]);
            cfg.host.fetch = async (req) => {
                n += 1;
                if (n === 1) {
                    const err = new TypeError('network down');
                    err.retryable = true;
                    throw err;
                }
                return mock.fetch(req);
            };
            cfg.host.now = () => { throw new Error('clock broke'); };
            cfg.host.sleep = async () => { throw new Error('sleep broke'); };
            const calls = await with_console_error_stub(async () => {
                const mgr = await wasm.CitationManager.open(cfg);
                assert.deepStrictEqual(await mgr.retrieve([['doi', DOI_1902]]), []);
                assert.strictEqual((await mgr.get('doi', DOI_1902)).DOI, DOI_1902);
            });
            assert.strictEqual(n, 2, 'the backoff sleep "elapsed" and the request was retried');
            const messages = calls.map( (c) => String(c[0]) );
            assert.ok(messages.some( (m) => /host\.now\(\) threw \(clock broke\)/.test(m) ),
                      messages.join('\n'));
            assert.ok(messages.some( (m) => /host\.sleep\(.*\) failed \(sleep broke\)/.test(m) ),
                      messages.join('\n'));
        });

        it('a non-number now() is logged and Date.now() is used', async function () {
            const mock = make_mock_host();
            const cfg = config_of(mock, ARXIV_DOI_SPECS);
            cfg.host.now = () => 'soon';
            const calls = await with_console_error_stub(async () => {
                const mgr = await wasm.CitationManager.open(cfg);
                assert.deepStrictEqual(await mgr.retrieve([['arxiv', '1902.07714']]), []);
            });
            assert.ok(calls.some( (c) => /host\.now\(\) did not return a finite number/.test(String(c[0])) ));
        });

        it('a throwing normalizeKey falls back to trimming and is logged', async function () {
            const mock = make_mock_host();
            const src = js_source(concrete_for_all, { normalizeKey: () => { throw new Error('norm broke'); } });
            const calls = await with_console_error_stub(async () => {
                const mgr = await wasm.CitationManager.open(config_of(mock, [
                    { kind: 'js', prefix: 'custom', source: src.source },
                ]));
                assert.deepStrictEqual(await mgr.retrieve([['custom', ' Key ']]), []);
                assert.strictEqual((await mgr.get('custom', 'Key')).id, 'custom:Key');
            });
            assert.deepStrictEqual(src.calls[0].keys, ['Key']);
            assert.ok(calls.some( (c) => /normalizeKey.*threw \(norm broke\)/.test(String(c[0])) ));
        });
    });

    it('a memory cache fs made independently works too', async function () {
        const mock = make_mock_host();
        const cfg = config_of(mock, ARXIV_DOI_SPECS, { cacheDir: '.' });
        cfg.host.cacheFs = make_memory_cache_fs();
        const mgr = await wasm.CitationManager.open(cfg);
        await mgr.retrieve([['arxiv', '1902.07714']]);
        await mgr.flush();
        assert.ok(cfg.host.cacheFs.export().has('./citations.jsonl'));
    });
});
