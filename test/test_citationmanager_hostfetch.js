import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';

import { make_host_fetch, has_default_fetch } from '../src/citationmanager/_hostfetch.js';
import { make_mock_host, MOCK_HOST_DEFAULT_NOW } from './_helpers/citation_mock_host.js';


const decoder = new TextDecoder();


function make_fake_fetch({ status = 200, headers = {}, body = '', throws = null } = {})
{
    const calls = [];
    const fetch_impl = async (url, init) => {
        calls.push({ url, init });
        if (throws) {
            throw throws();
        }
        return {
            status,
            headers: new Headers(headers),
            arrayBuffer: async () => new TextEncoder().encode(body).buffer,
        };
    };
    return { fetch_impl, calls };
}

async function assert_rejects_retryable(promise, retryable)
{
    let caught = null;
    try {
        await promise;
    } catch (err) {
        caught = err;
    }
    assert.ok(caught != null, 'expected a rejection');
    assert.strictEqual(caught.retryable, retryable,
                       `retryable should be ${retryable}; error: ${caught}`);
    return caught;
}


describe('zoodb.citationmanager._hostfetch', function () {

    let tmpdir = null;

    before(async function () {
        tmpdir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'zoodb-hostfetch-'));
        await fs.promises.writeFile(path.join(tmpdir, 'hello.txt'), 'Hello, world!');
        await fs.promises.writeFile(path.join(tmpdir, 'with space é.json'), '{"a":1}');
        await fs.promises.mkdir(path.join(tmpdir, 'subdir'));
    });

    after(async function () {
        if (tmpdir) {
            await fs.promises.rm(tmpdir, { recursive: true, force: true });
        }
    });

    describe('local files', function () {

        it('reads a file: URL through the given fs', async function () {
            const f = make_host_fetch({ fs });
            const url = new URL(`file:${path.join(tmpdir, 'hello.txt')}`).href;
            const resp = await f({ url, method: 'GET', headers: {}, body: null });
            assert.strictEqual(resp.status, 200);
            assert.deepStrictEqual(resp.headers, {});
            assert.strictEqual(Object.getPrototypeOf(resp.body), Uint8Array.prototype);
            assert.strictEqual(decoder.decode(resp.body), 'Hello, world!');
        });

        it('decodes percent-encoded file: URLs', async function () {
            const f = make_host_fetch({ fs });
            const url = new URL(`file:${path.join(tmpdir, 'with space é.json')}`).href;
            assert.ok(url.includes('%20'));
            const resp = await f({ url, method: 'GET', headers: {}, body: null });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(decoder.decode(resp.body), '{"a":1}');
        });

        it('reads a bare path relative to fs_root_path', async function () {
            const f = make_host_fetch({ fs, fs_root_path: tmpdir });
            const resp = await f({ url: 'hello.txt', method: 'GET', headers: {}, body: null });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(decoder.decode(resp.body), 'Hello, world!');
            const resp2 = await f({ url: 'with space é.json', method: 'GET', headers: {},
                                    body: null });
            assert.strictEqual(decoder.decode(resp2.body), '{"a":1}');
        });

        it('reads an absolute bare path', async function () {
            const f = make_host_fetch({ fs });
            const resp = await f({ url: path.join(tmpdir, 'hello.txt'), method: 'GET',
                                   headers: {}, body: null });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(decoder.decode(resp.body), 'Hello, world!');
        });

        it('works with a callback-style fs (no fs.promises)', async function () {
            const cbfs = { readFile: (...args) => fs.readFile(...args) };
            const f = make_host_fetch({ fs: cbfs, fs_root_path: tmpdir });
            const resp = await f({ url: 'hello.txt', method: 'GET', headers: {}, body: null });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(decoder.decode(resp.body), 'Hello, world!');
        });

        it('returns 404 for a missing file', async function () {
            const f = make_host_fetch({ fs, fs_root_path: tmpdir });
            const resp = await f({ url: 'does-not-exist.txt', method: 'GET', headers: {},
                                   body: null });
            assert.strictEqual(resp.status, 404);
            assert.deepStrictEqual(resp.headers, {});
            assert.ok(resp.body instanceof Uint8Array);
            assert.strictEqual(resp.body.length, 0);
            const resp2 = await f({ url: new URL(`file:${path.join(tmpdir, 'nope')}`).href,
                                    method: 'GET', headers: {}, body: null });
            assert.strictEqual(resp2.status, 404);
        });

        it('throws a non-retryable error for a directory', async function () {
            const f = make_host_fetch({ fs, fs_root_path: tmpdir });
            await assert_rejects_retryable(
                f({ url: 'subdir', method: 'GET', headers: {}, body: null }),
                false
            );
        });

        it('throws a non-retryable error when no fs is given', async function () {
            const f = make_host_fetch({});
            const err = await assert_rejects_retryable(
                f({ url: 'file:///some/file.json', method: 'GET', headers: {}, body: null }),
                false
            );
            assert.match(err.message, /no fs/);
        });

        it('throws a non-retryable error for other URL schemes', async function () {
            const f = make_host_fetch({ fs });
            await assert_rejects_retryable(
                f({ url: 'ftp://example.com/x', method: 'GET', headers: {}, body: null }),
                false
            );
        });
    });

    describe('http(s)', function () {

        it('fetches with the given fetch_impl and returns the response', async function () {
            const { fetch_impl, calls } = make_fake_fetch({
                status: 200,
                headers: { 'Content-Type': 'application/json', 'X-Custom-Thing': 'yes' },
                body: '{"ok":true}',
            });
            const f = make_host_fetch({ fetch_impl, user_agent: 'TestAgent/1.0' });
            const resp = await f({ url: 'https://example.com/a?b=c', method: 'GET',
                                   headers: { accept: 'application/json' }, body: null });
            assert.strictEqual(resp.status, 200);
            assert.deepStrictEqual(resp.headers, {
                'content-type': 'application/json',
                'x-custom-thing': 'yes',
            });
            for (const k of Object.keys(resp.headers)) {
                assert.strictEqual(k, k.toLowerCase());
            }
            assert.strictEqual(Object.getPrototypeOf(resp.body), Uint8Array.prototype);
            assert.strictEqual(decoder.decode(resp.body), '{"ok":true}');

            assert.strictEqual(calls.length, 1);
            const { url, init } = calls[0];
            assert.strictEqual(url, 'https://example.com/a?b=c');
            assert.strictEqual(init.method, 'GET');
            assert.strictEqual(init.redirect, 'follow');
            assert.ok(init.signal instanceof AbortSignal);
            assert.ok(!('body' in init));
            assert.deepStrictEqual(init.headers, {
                'accept': 'application/json',
                'user-agent': 'TestAgent/1.0',
            });
        });

        it('lowercases response header names from a Map', async function () {
            const fetch_impl = async () => ({
                status: 200,
                headers: new Map([['Retry-After', '5']]),
                arrayBuffer: async () => new ArrayBuffer(0),
            });
            const f = make_host_fetch({ fetch_impl });
            const resp = await f({ url: 'http://example.com/', method: 'GET', headers: {},
                                   body: null });
            assert.deepStrictEqual(resp.headers, { 'retry-after': '5' });
        });

        it('does not add user-agent when use_user_agent is false', async function () {
            const { fetch_impl, calls } = make_fake_fetch();
            const f = make_host_fetch({ fetch_impl, user_agent: 'TestAgent/1.0',
                                        use_user_agent: false });
            await f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null });
            assert.ok(!('user-agent' in calls[0].init.headers));
        });

        it('does not add user-agent when none is configured', async function () {
            const { fetch_impl, calls } = make_fake_fetch();
            const f = make_host_fetch({ fetch_impl });
            await f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null });
            assert.deepStrictEqual(calls[0].init.headers, {});
        });

        it('keeps a user-agent header given in the request', async function () {
            const { fetch_impl, calls } = make_fake_fetch();
            const f = make_host_fetch({ fetch_impl, user_agent: 'TestAgent/1.0' });
            await f({ url: 'https://example.com/', method: 'GET',
                      headers: { 'user-agent': 'Mine/2.0' }, body: null });
            assert.strictEqual(calls[0].init.headers['user-agent'], 'Mine/2.0');
        });

        it('forwards the body of a POST request', async function () {
            const { fetch_impl, calls } = make_fake_fetch();
            const f = make_host_fetch({ fetch_impl });
            const body = new TextEncoder().encode('id_list=1234.5678');
            await f({ url: 'https://example.com/api', method: 'POST',
                      headers: { 'content-type': 'application/x-www-form-urlencoded' },
                      body });
            assert.strictEqual(calls[0].init.method, 'POST');
            assert.strictEqual(calls[0].init.body, body);
        });

        it('returns non-2xx statuses (429) as a response', async function () {
            const { fetch_impl } = make_fake_fetch({
                status: 429, headers: { 'Retry-After': '7' }, body: 'slow down',
            });
            const f = make_host_fetch({ fetch_impl });
            const resp = await f({ url: 'https://example.com/', method: 'GET', headers: {},
                                   body: null });
            assert.strictEqual(resp.status, 429);
            assert.deepStrictEqual(resp.headers, { 'retry-after': '7' });
            assert.strictEqual(decoder.decode(resp.body), 'slow down');
        });

        it('returns a 500 status as a response', async function () {
            const { fetch_impl } = make_fake_fetch({ status: 500 });
            const f = make_host_fetch({ fetch_impl });
            const resp = await f({ url: 'https://example.com/', method: 'GET', headers: {},
                                   body: null });
            assert.strictEqual(resp.status, 500);
        });

        it('marks a TypeError from fetch_impl as retryable', async function () {
            const { fetch_impl } = make_fake_fetch({
                throws: () => new TypeError('fetch failed', { cause: new Error('ECONNRESET') }),
            });
            const f = make_host_fetch({ fetch_impl });
            const err = await assert_rejects_retryable(
                f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null }),
                true
            );
            assert.match(err.message, /fetch failed/);
            assert.match(err.message, /ECONNRESET/);
        });

        for (const name of ['AbortError', 'TimeoutError']) {
            it(`marks an error named ${name} as retryable`, async function () {
                const { fetch_impl } = make_fake_fetch({
                    throws: () => {
                        const e = new Error('aborted');
                        e.name = name;
                        return e;
                    },
                });
                const f = make_host_fetch({ fetch_impl });
                await assert_rejects_retryable(
                    f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null }),
                    true
                );
            });
        }

        it('marks a DOMException TimeoutError as retryable', async function () {
            const { fetch_impl } = make_fake_fetch({
                throws: () => new DOMException('timed out', 'TimeoutError'),
            });
            const f = make_host_fetch({ fetch_impl });
            await assert_rejects_retryable(
                f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null }),
                true
            );
        });

        it('marks other errors as non-retryable', async function () {
            const { fetch_impl } = make_fake_fetch({
                throws: () => new Error('something else'),
            });
            const f = make_host_fetch({ fetch_impl });
            await assert_rejects_retryable(
                f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null }),
                false
            );
        });

        it('throws a non-retryable error when no fetch is available', async function () {
            const saved = globalThis.fetch;
            try {
                // construction must not throw even without any fetch
                delete globalThis.fetch;
                assert.strictEqual(has_default_fetch(), false);
                const f = make_host_fetch({});
                const err = await assert_rejects_retryable(
                    f({ url: 'https://example.com/', method: 'GET', headers: {}, body: null }),
                    false
                );
                assert.strictEqual(
                    err.message, 'No fetch() available; pass citation_manager_options.fetch'
                );
            } finally {
                globalThis.fetch = saved;
            }
            assert.strictEqual(has_default_fetch(), typeof saved === 'function');
        });
    });

    describe('mock host helper', function () {

        it('routes arXiv ids and DOIs to fixtures, 404 otherwise', async function () {
            const host = make_mock_host();

            let resp = await host.fetch({
                url: 'https://export.arxiv.org/api/query?id_list=quant-ph%2F0406196&max_results=1',
                method: 'GET', headers: {}, body: null,
            });
            assert.strictEqual(resp.status, 200);
            assert.match(decoder.decode(resp.body), /10\.1103\/PhysRevA\.70\.052328/);

            resp = await host.fetch({
                url: 'https://export.arxiv.org/api/query?id_list=1310.2984,1902.07714&max_results=2',
                method: 'GET', headers: {}, body: null,
            });
            assert.strictEqual(resp.status, 200);
            const merged = decoder.decode(resp.body);
            assert.strictEqual(merged.match(/<entry>/g).length, 2);
            assert.match(merged, /<opensearch:totalResults>2</);

            resp = await host.fetch({
                url: 'https://export.arxiv.org/api/query?id_list=1310.2984,9999.99999&max_results=2',
                method: 'GET', headers: {}, body: null,
            });
            assert.strictEqual(resp.status, 404);

            resp = await host.fetch({
                url: 'https://doi.org/10.1103/physrevx.10.041018',
                method: 'GET',
                headers: { accept: 'application/vnd.citationstyles.csl+json' },
                body: null,
            });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(JSON.parse(decoder.decode(resp.body)).DOI,
                               '10.1103/physrevx.10.041018');

            resp = await host.fetch({
                url: 'https://doi.org/10.1103%2FPhysRevA.70.052328',
                method: 'GET',
                headers: { accept: 'application/vnd.citationstyles.csl+json' },
                body: null,
            });
            assert.strictEqual(resp.status, 200);

            // no CSL accept header
            resp = await host.fetch({
                url: 'https://doi.org/10.1103/physrevx.10.041018',
                method: 'GET', headers: {}, body: null,
            });
            assert.strictEqual(resp.status, 404);

            resp = await host.fetch({
                url: 'https://doi.org/10.9999/unknown',
                method: 'GET',
                headers: { accept: 'application/vnd.citationstyles.csl+json' },
                body: null,
            });
            assert.strictEqual(resp.status, 404);

            resp = await host.fetch({ url: 'https://example.com/', method: 'GET', headers: {},
                                      body: null });
            assert.deepStrictEqual(resp, { status: 404, headers: {}, body: new Uint8Array() });

            assert.strictEqual(host.requests.length, 8);
        });

        it('serves url_map entries, and provides sleep/now/cacheFs', async function () {
            const host = make_mock_host({
                url_map: {
                    'file:///bib.json': '{"x":{}}',
                    'https://example.com/busy': { status: 429, headers: { 'retry-after': '1' } },
                },
            });
            let resp = await host.fetch({ url: 'file:///bib.json', method: 'GET', headers: {},
                                          body: null });
            assert.strictEqual(resp.status, 200);
            assert.strictEqual(decoder.decode(resp.body), '{"x":{}}');
            resp = await host.fetch({ url: 'https://example.com/busy', method: 'GET',
                                      headers: {}, body: null });
            assert.strictEqual(resp.status, 429);
            assert.strictEqual(resp.headers['retry-after'], '1');

            assert.strictEqual(host.now(), MOCK_HOST_DEFAULT_NOW);
            host.set_now(42);
            assert.strictEqual(host.now(), 42);
            await host.sleep(100000);
            assert.deepStrictEqual(host.sleeps, [100000]);
            await host.cacheFs.append('/c/x', new Uint8Array([1]));
            assert.deepStrictEqual(await host.cacheFs.list('/c'), ['x']);
        });
    });
});
