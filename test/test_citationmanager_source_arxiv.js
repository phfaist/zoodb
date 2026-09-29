// Tests of CitationSourceArxiv through CitationDatabaseManager and the
// autocitefetch wasm binding.  HTTP goes to the mock host in
// test/_helpers/citation_mock_host.js (fixtures in test/_fixtures/).
//
// Notes on what the mock host serves: arXiv API queries are answered by
// looking up every id of `id_list` verbatim among the fixtures
// `arxiv_response_<id>.xml` (version-less ids); other ids are served through
// exact-URL `url_map` entries.  DOI requests are answered from the
// `doi_response_*.json` fixtures, matched case-insensitively on their `DOI`
// field.

import * as assert from 'assert';
import fs from 'fs';
import { fileURLToPath } from 'url';
import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_source_arxiv');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceArxiv, check_valid_arxiv_id } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';

import { make_mock_host, make_mock_fetch_api } from './_helpers/citation_mock_host.js';


const fixtures_dir = fileURLToPath(new URL('./_fixtures/', import.meta.url));

function mock_env({ url_map } = {})
{
    const host = make_mock_host({ url_map });
    const options = {
        fetch: make_mock_fetch_api(host),
        sleep: host.sleep,
        now: host.now,
        skip_save_cache: true,
    };
    return { host, options };
}

function doi_requests(host)
{
    return host.requests
        .filter( (r) => /^https?:\/\/(dx\.)?doi\.org\//.test(r.url) )
        .map( (r) => decodeURIComponent(new URL(r.url).pathname.slice(1)).toLowerCase() );
}

function arxiv_requests(host)
{
    return host.requests.filter( (r) => r.url.includes('export.arxiv.org') );
}

async function make_manager(sources, options)
{
    const manager = new CitationDatabaseManager(sources, options);
    await manager.initialize();
    return manager;
}


describe('zoodb.citationmanager.source.arxiv', function () {

    this.timeout(20000);

    describe('check_valid_arxiv_id', function () {
        it('accepts new-style, old-style and versioned ids', function () {
            assert.ok(check_valid_arxiv_id('1310.2984'));
            assert.ok(check_valid_arxiv_id('2201.01234v2'));
            assert.ok(check_valid_arxiv_id('quant-ph/0406196'));
            assert.ok(check_valid_arxiv_id('quant-ph/0406196v5'));
        });
        it('rejects malformed ids', function () {
            assert.ok( ! check_valid_arxiv_id('quant-ph/050807') );
            assert.ok( ! check_valid_arxiv_id('1310.298') );
            assert.ok( ! check_valid_arxiv_id('xyz abc') );
        });
    });

    describe('CitationSourceArxiv', function () {

        it('fetches bib information from an arXiv source alone (chain_to_doi: false)',
           async function () {
            const { host, options } = mock_env();
            const manager = await make_manager(
                { arxiv: new CitationSourceArxiv({ chain_to_doi: false }) }, options
            );

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1310.2984' },
            ]);
            assert.deepStrictEqual(failures, []);

            const bibinfo = manager.get_citation('arxiv', '1310.2984');
            debug(`got bib info = `, bibinfo);
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Fault-Tolerant Quantum Computation with Constant Overhead'.toLowerCase()
            );
            assert.strictEqual(bibinfo.id, 'arxiv:1310.2984');
            assert.strictEqual(arxiv_requests(host).length, 1);
            assert.deepStrictEqual(doi_requests(host), []);
        });

        it('fetches bib information from an arXiv source and chains to DOI', async function () {
            const { host, options } = mock_env();
            const manager = await make_manager(
                { arxiv: new CitationSourceArxiv(), doi: new CitationSourceDoi() }, options
            );

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ]);

            const bibinfo = manager.get_citation('arxiv', '1902.07714');
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Continuous symmetries and approximate quantum error correction'.toLowerCase()
            );
            assert.strictEqual(bibinfo['container-title'], 'Physical Review X');
            assert.strictEqual(bibinfo.arxivid, '1902.07714');
            assert.deepStrictEqual(doi_requests(host), ['10.1103/physrevx.10.041018']);
        });

        it('fetches bib information from an arXiv source (old-style ID) and chains to DOI',
           async function () {
            const { options } = mock_env();
            const manager = await make_manager(
                { arxiv: new CitationSourceArxiv(), doi: new CitationSourceDoi() }, options
            );

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/0406196' },
            ]);

            const bibinfo = manager.get_citation('arxiv', 'quant-ph/0406196');
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Improved Simulation of Stabilizer Circuits'.toLowerCase()
            );
            assert.strictEqual(bibinfo.id, 'arxiv:quant-ph/0406196');
        });

        it('retrieves a versioned arXiv id', async function () {
            // The binding sends the versioned id verbatim in `id_list`; serve the
            // 1310.2984 fixture (whose entry is 1310.2984v3) for that exact URL.
            const xml = fs.readFileSync(`${fixtures_dir}/arxiv_response_1310.2984.xml`, 'utf-8');
            const { host, options } = mock_env({
                url_map: {
                    'https://export.arxiv.org/api/query?id_list=1310.2984v3&max_results=1': xml,
                },
            });
            const manager = await make_manager(
                { arxiv: new CitationSourceArxiv(), doi: new CitationSourceDoi() }, options
            );
            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1310.2984v3' },
            ]);
            assert.deepStrictEqual(failures, []);
            const urls = arxiv_requests(host).map( (r) => r.url );
            assert.deepStrictEqual(
                urls, ['https://export.arxiv.org/api/query?id_list=1310.2984v3&max_results=1']
            );
            const bibinfo = manager.get_citation_by_id('arxiv:1310.2984v3');
            debug('versioned entry:', bibinfo);
            assert.strictEqual(bibinfo.id, 'arxiv:1310.2984v3');
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Fault-Tolerant Quantum Computation with Constant Overhead'.toLowerCase()
            );
            assert.ok(manager.keys().includes('arxiv:1310.2984v3'), manager.keys().join());
        });

        it('honors override_arxiv_dois_file (YAML, path relative to fsRootFilePath)',
           async function () {
            const { host, options } = mock_env();
            const manager = await make_manager(
                {
                    arxiv: new CitationSourceArxiv({
                        override_arxiv_dois_file: 'override_arxiv_dois.yml',
                        fs,
                        fsRootFilePath: fixtures_dir,
                    }),
                    doi: new CitationSourceDoi(),
                },
                options
            );

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/0406196' },
            ]);
            assert.deepStrictEqual(failures, []);

            // 1902.07714 chained to the overridden DOI; quant-ph/0406196 not chained
            assert.deepStrictEqual(doi_requests(host), ['10.1103/physreva.70.052328']);

            const a = manager.get_citation_by_id('arxiv:1902.07714');
            assert.strictEqual(a.DOI.toLowerCase(), '10.1103/physreva.70.052328');
            assert.strictEqual(a.arxivid, '1902.07714');

            const b = manager.get_citation_by_id('arxiv:quant-ph/0406196');
            assert.strictEqual(
                b.title.toLowerCase(), 'Improved Simulation of Stabilizer Circuits'.toLowerCase()
            );
            assert.ok( ! manager.keys().includes('doi:10.1103/physrevx.10.041018'),
                       manager.keys().join() );
        });

        it('lets inline override_arxiv_dois win over the file', async function () {
            const { host, options } = mock_env();
            const source = new CitationSourceArxiv({
                override_arxiv_dois_file: 'override_arxiv_dois.yml',
                override_arxiv_dois: { '1902.07714': '10.1103/PhysRevX.10.041018' },
                fs,
                fsRootFilePath: fixtures_dir,
            });
            const manager = await make_manager(
                { arxiv: source, doi: new CitationSourceDoi() }, options
            );
            const overrides = await source.load_override_arxiv_dois();
            assert.deepStrictEqual(overrides, {
                '1902.07714': '10.1103/PhysRevX.10.041018',
                'quant-ph/0406196': null,
            });

            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            assert.deepStrictEqual(doi_requests(host), ['10.1103/physrevx.10.041018']);
            assert.strictEqual(manager.get_citation('arxiv', '1902.07714')['container-title'],
                               'Physical Review X');
        });

        it('makes no DOI request with chain_to_doi: false', async function () {
            const { host, options } = mock_env();
            const manager = await make_manager(
                {
                    arxiv: new CitationSourceArxiv({ chain_to_doi: false }),
                    doi: new CitationSourceDoi(),
                },
                options
            );
            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            assert.deepStrictEqual(doi_requests(host), []);
            const bibinfo = manager.get_citation('arxiv', '1902.07714');
            assert.strictEqual(bibinfo.id, 'arxiv:1902.07714');
            assert.strictEqual(
                bibinfo.title.toLowerCase(),
                'Continuous symmetries and approximate quantum error correction'.toLowerCase()
            );
        });

        it('reports a malformed arXiv ID as a failure before any request', async function () {
            // D7: retrieve_citations() no longer throws for a bad citation; the
            // malformed id comes back as a failure (and the others are retrieved).
            const { host, options } = mock_env();
            const manager = await make_manager(
                { arxiv: new CitationSourceArxiv(), doi: new CitationSourceDoi() }, options
            );

            let failures;
            const orig_error = console.error;
            const errors = [];
            console.error = (...args) => { errors.push(args.join(' ')); };
            try {
                failures = await manager.retrieve_citations([
                    { cite_prefix: 'arxiv', cite_key: 'quant-ph/050807' },
                ]);
            } finally {
                console.error = orig_error;
            }
            assert.strictEqual(failures.length, 1);
            assert.strictEqual(failures[0].prefix, 'arxiv');
            assert.strictEqual(failures[0].key, 'quant-ph/050807');
            assert.match(failures[0].message, /malformed/i);
            assert.strictEqual(host.requests.length, 0);
            assert.ok(errors.some( (e) => /malformed/i.test(e) ), errors.join('\n'));
        });

        it('warns that api_get_method: post is not supported', async function () {
            const { options } = mock_env();
            const warnings = [];
            const orig_warn = console.warn;
            console.warn = (...args) => { warnings.push(args.join(' ')); };
            let manager;
            try {
                manager = await make_manager(
                    {
                        arxiv: new CitationSourceArxiv({ api_get_method: 'post' }),
                        doi: new CitationSourceDoi(),
                    },
                    options
                );
            } finally {
                console.warn = orig_warn;
            }
            assert.strictEqual(warnings.length, 1);
            assert.match(warnings[0], /post/i);
            assert.match(warnings[0], /GET/);
            // still works (with GET)
            await manager.retrieve_citations([ { cite_prefix: 'arxiv', cite_key: '1902.07714' } ]);
            assert.strictEqual(manager.get_citation('arxiv', '1902.07714').arxivid, '1902.07714');
        });

        it('passes explicit chunk_size / delay / duration options to the spec', async function () {
            const { options } = mock_env();
            const source = new CitationSourceArxiv({
                chunk_size: 10, chunk_retrieve_delay_ms: 5000, cache_duration_ms: 1234,
            });
            const doi = new CitationSourceDoi();
            new CitationDatabaseManager({ arxiv: source, doi }, options);
            const spec = await source.get_autocitefetch_spec();
            assert.deepStrictEqual(spec, {
                kind: 'arxiv', prefix: 'arxiv', chainDoisTo: 'doi',
                chunkSize: 10, minIntervalMs: 5000, ttlMs: 1234,
            });
            // defaults are left to the crate
            assert.deepStrictEqual(await doi.get_autocitefetch_spec(),
                                   { kind: 'doi', prefix: 'doi', chunkSize: 1 });
        });

        it('passes the refresh_batching option to the spec and the engine', async function () {
            const { options } = mock_env();
            const source = new CitationSourceArxiv({
                refresh_batching: { min_batch: 50, max_defer_days: 7,
                                    top_up: { min_age_percent: 60, fill: 'chunk' } },
            });
            const doi = new CitationSourceDoi({ refresh_batching: 'eager' });
            const manager = new CitationDatabaseManager({ arxiv: source, doi }, options);
            const spec = await source.get_autocitefetch_spec();
            assert.deepStrictEqual(spec.refreshBatching, {
                minBatch: 50, maxDeferDays: 7, topUp: { minAgePercent: 60, fill: 'chunk' },
            });
            assert.strictEqual((await doi.get_autocitefetch_spec()).refreshBatching, 'eager');
            await manager.initialize();
            assert.deepStrictEqual(manager.get_refresh_batching('arxiv'), {
                minBatch: 50, maxDeferDays: 7, topUp: { minAgePercent: 60, fill: 'chunk' },
            });
            assert.deepStrictEqual(manager.get_refresh_batching('doi'),
                                   { minBatch: 0, maxDeferDays: 0, topUp: null });
        });

        it('rejects an invalid refresh_batching option at initialization', async function () {
            const { options } = mock_env();
            const doi = new CitationSourceDoi({ refresh_batching: { min_btach: 3 } });
            const manager = new CitationDatabaseManager({ doi }, options);
            await assert.rejects(manager.initialize(), /refreshBatching.*min_btach/);
        });

    });
});
