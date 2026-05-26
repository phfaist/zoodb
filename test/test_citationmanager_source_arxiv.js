import * as assert from 'assert';
import fs from 'fs';
import { Readable } from 'stream';
import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_source_arxiv');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';


// --- Mock fixtures ---

const fixturesDir = new URL('./_fixtures/', import.meta.url);

function loadFixture(filename) {
    return fs.readFileSync(new URL(filename, fixturesDir));
}

// Pre-load fixture data
const arxivFixtures = {
    '1310.2984': loadFixture('arxiv_response_1310.2984.xml'),
    '1902.07714': loadFixture('arxiv_response_1902.07714.xml'),
    'quant-ph/0406196': loadFixture('arxiv_response_quant-ph_0406196.xml'),
};

const doiFixtures = {
    '10.1103/PhysRevX.10.041018': loadFixture('doi_response_1902.07714.json'),
    '10.1103/PhysRevA.70.052328': loadFixture('doi_response_quant-ph_0406196.json'),
};

/**
 * Create a mock _fetch that returns fixture data based on the URL.
 * For arXiv: matches id_list param to find the right XML fixture.
 * For DOI: matches the DOI in the URL path.
 */
function makeMockFetchArxiv() {
    return async (url, _options) => {
        const urlObj = new URL(url);
        const idList = urlObj.searchParams.get('id_list');
        const fixture = idList && arxivFixtures[idList];
        if (!fixture) {
            throw new Error(`No arXiv fixture for id_list=${idList} (url: ${url})`);
        }
        return {
            status: 200,
            body: Readable.from(fixture),
            headers: new Map(),
        };
    };
}

function makeMockFetchDoi() {
    return async (url, _options) => {
        // URL looks like https://doi.org/10.1103%2FPhysRevX.10.041018
        const urlObj = new URL(url);
        const doiEncoded = urlObj.pathname.slice(1); // remove leading /
        const doi = decodeURIComponent(doiEncoded);
        const fixture = doiFixtures[doi];
        if (!fixture) {
            throw new Error(`No DOI fixture for doi=${doi} (url: ${url})`);
        }
        return {
            status: 200,
            json: async () => JSON.parse(fixture.toString('utf-8')),
            headers: new Map(),
        };
    };
}


describe('zoodb.citationmanager.source.arxiv', function () {

    describe('CitationSourceArxiv', function () {

        it('fetches bib information from an arXiv source alone', async function () {

            let source = new CitationSourceArxiv({
                //api_get_method: 'post', // POST fails for some reason (2025/11) ... :/
            });
            source._fetch = makeMockFetchArxiv();

            let manager = new CitationDatabaseManager(
                {
                    arxiv: source,
                },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            // fetch a citation that doesn't chain to a DOI because we didn't install
            // a doi fetcher on this manager.

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1310.2984' },
            ])

            // ensure that the citation information was found
            let bibinfo = manager.get_citation('arxiv', '1310.2984');
            debug(`got bib info = `, bibinfo);
            assert.deepStrictEqual(
                bibinfo.title.toLowerCase(),
                'Fault-Tolerant Quantum Computation with Constant Overhead'.toLowerCase()
            );
        });

        it('fetches bib information from an arXiv source and chains to DOI', async function () {

            let arxivsource = new CitationSourceArxiv();
            arxivsource._fetch = makeMockFetchArxiv();

            let doisource = new CitationSourceDoi();
            doisource._fetch = makeMockFetchDoi();

            let manager = new CitationDatabaseManager(
                {
                    arxiv: arxivsource,
                    doi: doisource,
                },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
            ])

            // ensure that the citation information was found
            let bibinfo = manager.get_citation('arxiv', '1902.07714');
            debug(`got bib info = `, bibinfo);
            assert.deepStrictEqual(
                bibinfo.title.toLowerCase(),
                'Continuous symmetries and approximate quantum error correction'.toLowerCase()
            );
            assert.deepStrictEqual(
                bibinfo['container-title'],
                "Physical Review X"
            );

        });

        it('fetches bib information from an arXiv source (old-style ID) and chains to DOI',
            async function () {

            let arxivsource = new CitationSourceArxiv();
            arxivsource._fetch = makeMockFetchArxiv();

            let doisource = new CitationSourceDoi();
            doisource._fetch = makeMockFetchDoi();

            let manager = new CitationDatabaseManager(
                {
                    arxiv: arxivsource,
                    doi: doisource,
                },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/0406196' },
            ])

            // ensure that the citation information was found
            let bibinfo = manager.get_citation('arxiv', 'quant-ph/0406196');
            debug(`got bib info = `, bibinfo);
            assert.deepStrictEqual(
                bibinfo.title.toLowerCase(),
                'Improved Simulation of Stabilizer Circuits'.toLowerCase()
            );

        });

        it('throws an error upon malformed arXiv ID', async function () {

            let source = new CitationSourceArxiv();
            // No need to mock _fetch — this test fails before any HTTP call
            let manager = new CitationDatabaseManager(
                {
                    arxiv: source,
                },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            // fetch a malformed citation

            let promise = manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/050807' },
            ]);
            await assert.rejects(promise, /malformed/i);
        });

    });
});
