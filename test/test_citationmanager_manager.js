import * as assert from 'assert';
import fs from 'fs';
import debugm from 'debug';
const debug = debugm('zoodb.test_citationmanager_manager');

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';
import { CitationSourceManual } from '../src/citationmanager/source/manual.js';


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

        it('CitationSourceManual stores manual citation entries', async function () {
            let manualsource = new CitationSourceManual();
            let manager = new CitationDatabaseManager(
                { manual: manualsource },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'manual', cite_key: 'J. Smith, "A paper", 2020.' },
            ]);

            const entry = manager.get_citation('manual', 'J. Smith, "A paper", 2020.');
            assert.ok(entry);
            assert.ok(entry._ready_formatted);
            assert.strictEqual(entry._ready_formatted.flm, 'J. Smith, "A paper", 2020.');
        });

        it('get_citation_by_id parses prefix:key format', async function () {
            let manualsource = new CitationSourceManual();
            let manager = new CitationDatabaseManager(
                { manual: manualsource },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'manual', cite_key: 'test_entry' },
            ]);

            const entry = manager.get_citation_by_id('manual:test_entry');
            assert.ok(entry);
            assert.strictEqual(entry.id, 'manual:test_entry');
        });

        it('get_citation_by_id throws for unknown citation', async function () {
            let manualsource = new CitationSourceManual();
            let manager = new CitationDatabaseManager(
                { manual: manualsource },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            assert.throws(() => {
                manager.get_citation_by_id('manual:nonexistent');
            }, /not found/i);
        });

        it('keys() returns all stored citation IDs', async function () {
            let manualsource = new CitationSourceManual();
            let manager = new CitationDatabaseManager(
                { manual: manualsource },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await manager.retrieve_citations([
                { cite_prefix: 'manual', cite_key: 'entry_a' },
                { cite_prefix: 'manual', cite_key: 'entry_b' },
            ]);

            const keys = manager.keys();
            assert.ok(keys.includes('manual:entry_a'));
            assert.ok(keys.includes('manual:entry_b'));
        });

        it('throws for unknown cite_prefix during retrieve', async function () {
            let manualsource = new CitationSourceManual();
            let manager = new CitationDatabaseManager(
                { manual: manualsource },
                {
                    cache_fs: fs,
                    cache_file: '_zoodb_test_nocache.junk.json',
                    skip_save_cache: true,
                }
            );
            await manager.initialize();

            await assert.rejects(async () => {
                await manager.retrieve_citations([
                    { cite_prefix: 'unknown_prefix', cite_key: 'some_key' },
                ]);
            }, /No source registered/i);
        });

    });
});
