import * as assert from 'assert';
import fs from 'fs';
import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_source_arxiv');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';


describe('zoodb.citationmanager.source.arxiv', function () {

    describe('CitationSourceArxiv', function () {

        it('fetches bib information from an arXiv source', async function () {

            let source = new CitationSourceArxiv();
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
            let doisource = new CitationSourceDoi();
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
            let doisource = new CitationSourceDoi();
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

            // fetch a malformed citation

            let promise = manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'arxiv:quant-ph/050807' },
            ]);
            await assert.rejects(promise, /malformed/i);
        });

    });
});
