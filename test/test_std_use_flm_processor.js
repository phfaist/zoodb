import * as assert from 'assert';
import fs from 'fs';

import { make_citation_sources } from '../src/std/use_flm_processor.js';

import { CitationSourceBase } from '../src/citationmanager/source/base.js';
import { CitationSourceArxiv } from '../src/citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/source/doi.js';
import { CitationSourceManual } from '../src/citationmanager/source/manual.js';
import { CitationSourceBibliographyFile } from '../src/citationmanager/source/bibliographyfile.js';


class MyCitationSource extends CitationSourceBase
{
    constructor(options)
    {
        super({ source_name: 'My source' }, options, { cite_prefix: 'mine' });
    }
}

const ctx = { fs, fs_data_dir: '/data' };


describe('use_flm_processor: make_citation_sources', function () {

    it('creates the built-in sources by default', function () {
        // 'preset' only if there are bibliography files
        assert.deepStrictEqual(Object.keys(make_citation_sources({}, ctx)),
                               ['arxiv', 'doi', 'manual']);
        assert.throws( () => make_citation_sources({ sources: { preset: true } }, ctx),
                       /‘preset’.*bibliography_files/ );
        const sources = make_citation_sources({ preset_bibliography_files: [] }, ctx);
        assert.deepStrictEqual(Object.keys(sources), ['arxiv', 'doi', 'manual', 'preset']);
        assert.ok(sources.arxiv instanceof CitationSourceArxiv);
        assert.ok(sources.doi instanceof CitationSourceDoi);
        assert.ok(sources.manual instanceof CitationSourceManual);
        assert.ok(sources.preset instanceof CitationSourceBibliographyFile);
        assert.strictEqual(sources.arxiv.options.fsRootFilePath, '/data');
        assert.strictEqual(sources.arxiv.options.fs.readFileSync, fs.readFileSync);
    });

    it('keeps the older shortcut options', function () {
        const sources = make_citation_sources({
            override_arxiv_dois_file: 'dois.yml',
            preset_bibliography_files: ['a.yml'],
        }, ctx);
        assert.strictEqual(sources.arxiv.override_arxiv_dois_file, 'dois.yml');
        assert.deepStrictEqual(sources.preset.bibliography_files, ['a.yml']);
    });

    it('merges options objects over the built-in defaults', async function () {
        const sources = make_citation_sources({
            override_arxiv_dois_file: 'dois.yml',
            preset_bibliography_files: ['a.yml'],
            source_options: { user_agent: 'UA/1', refresh_batching: 'default' },
            sources: {
                arxiv: { refresh_batching: { min_batch: 50 }, chain_to_doi: false },
                doi: { refresh_batching: 'eager', true_option: undefined },
                preset: { bibliography_files: ['b.yml'] },
                manual: true,
            },
        }, ctx);
        assert.deepStrictEqual(Object.keys(sources), ['arxiv', 'doi', 'manual', 'preset']);
        assert.strictEqual(sources.arxiv.chain_to_doi, false);
        assert.strictEqual(sources.arxiv.override_arxiv_dois_file, 'dois.yml');
        assert.deepStrictEqual(sources.preset.bibliography_files, ['b.yml']);
        assert.strictEqual(sources.doi.options.user_agent, 'UA/1');
        assert.ok( ! Object.hasOwn(sources.doi.options, 'true_option') );
        assert.deepStrictEqual(sources.arxiv.options.refresh_batching, { min_batch: 50 });
        assert.strictEqual((await sources.doi.get_autocitefetch_spec()).refreshBatching, 'eager');
        assert.strictEqual((await sources.manual.get_autocitefetch_spec()).refreshBatching,
                           'default');
    });

    it('removes, replaces and adds sources', function () {
        const instance = new MyCitationSource({});
        const sources = make_citation_sources({
            sources: {
                manual: false,
                preset: null,
                doi: { source_class: MyCitationSource, cache_duration_ms: 5 },
                mine: instance,
                other: { source_class: MyCitationSource, fsRootFilePath: '/elsewhere' },
            },
        }, ctx);
        assert.deepStrictEqual(Object.keys(sources), ['arxiv', 'doi', 'mine', 'other']);
        assert.ok(sources.doi instanceof MyCitationSource);
        assert.strictEqual(sources.doi.options.cache_duration_ms, 5);
        assert.ok( ! Object.hasOwn(sources.doi.options, 'source_class') );
        assert.strictEqual(sources.mine, instance);
        assert.strictEqual(sources.other.options.fsRootFilePath, '/elsewhere');
        assert.strictEqual(sources.other.options.fs.readFileSync, fs.readFileSync);
    });

    it('rejects invalid settings', function () {
        assert.throws( () => make_citation_sources({ sources: { nope: true } }, ctx),
                       /Cannot activate source ‘nope’/ );
        assert.throws( () => make_citation_sources({ sources: { nope: { a: 1 } } }, ctx),
                       /‘nope’ is not a built-in source.*source_class/ );
        assert.throws( () => make_citation_sources({ sources: { doi: 'yes' } }, ctx),
                       /Invalid setting for citation source ‘doi’/ );
        assert.throws( () => make_citation_sources(
            { sources: { x: { source_class: 'MyCitationSource' } } }, ctx),
                       /‘source_class’ must be a class/ );
    });
});
