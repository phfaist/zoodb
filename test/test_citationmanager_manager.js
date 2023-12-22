import * as assert from 'assert';
import fs from 'fs';
import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_manager');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';


describe('zoodb.citationmanager._manager', function() {
    describe('CitationDatabaseManager', function () {

        it('loads citations from multiple remote sources (arxiv & doi)', async function () {
            // adjust timeout for this test
            this.timeout(5000);

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
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: 'quant-ph/9705052' },
                { cite_prefix: 'doi', cite_key: '10.1103/PhysRevLett.102.110502' },
            ]);

            // ensure that citation information was found - check the first one here
            let bibinfo = manager.get_citation('arxiv', 'quant-ph/9705052');
            debug(`got bib info = `, bibinfo);
            assert.deepStrictEqual(
                bibinfo.title.toLowerCase(),
                'Stabilizer Codes and Quantum Error Correction'.toLowerCase()
            );

        });


        it('can handle an error from a source w/o hanging chained sources', async function () {
            // adjust timeout for this test
            this.timeout(5000);

            // This test checks that an error in the arXiv source (which causes it to fail)
            // will properly be handled and reported, and that all dependent sources (here, the
            // doi source) will be terminated as well.  I had a bug earlier where compilations
            // hang indefinitely because the manager forgot to terminate the other sources if
            // a dependee source threw an exception.

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
            await manager.initialize();

            await assert.rejects(
                async () => {
                    await manager.retrieve_citations([
                        { cite_prefix: 'arxiv', cite_key: 'xyzabc/0123456' },
                        { cite_prefix: 'doi', cite_key: '10.1103/PhysRevLett.102.110502' },
                    ]);
                }
            );

            debug(`Yay, got error as expected from server.`);
            
        });


        it('can handle an error from a source w/o hanging chained sources with noncanonical ID',
           async function () {
            // adjust timeout for this test
            this.timeout(5000);

            // This test checks that an error in the arXiv source (which causes it to fail)
            // will properly be handled and reported, and that all dependent sources (here, the
            // doi source) will be terminated as well.  I had a bug earlier where compilations
            // hang indefinitely because the manager forgot to terminate the other sources if
            // a dependee source threw an exception.

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
            await manager.initialize();

            await assert.rejects(
                async () => {
                    await manager.retrieve_citations([
                        { cite_prefix: 'arxiv', cite_key: '1806.1032' },
                    ]);
                }
            );

            debug(`Yay, got error as expected from server.`);
            
        });
    });
});
