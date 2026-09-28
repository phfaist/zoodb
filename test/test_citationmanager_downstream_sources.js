// Acceptance test for the CitationSourceBase subclass protocol (invariant 4):
// two downstream custom sources, copied verbatim, driven through
// CitationDatabaseManager and the autocitefetch wasm binding.  No network.
//
// The two classes below are character-for-character copies of
//
//   - `CiteSourceExternalQecdbOrg` from
//     /Users/philippe/Research/projects/eczoo/eczoo_sitegen/eczoodb/citeextsources.js
//   - `CitationSourceApiPlaceholder` from
//     /Users/philippe/Research/projects/zoodb/zoodbtools/zoodbpreview/citationapiplaceholder.js
//
// Only the import line differs: both files import
// `{ CitationSourceBase } from '@phfaist/zoodb/citationmanager/source/base'`,
// which is replaced here by the relative import below.

import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';

import { CitationSourceBase } from '../src/citationmanager/source/base.js';

import { CitationDatabaseManager } from '../src/citationmanager/index.js';
import { make_mock_host, make_mock_fetch_api } from './_helpers/citation_mock_host.js';


// ---------------------------------------------------------------------------
// verbatim copy from eczoo_sitegen/eczoodb/citeextsources.js
// ---------------------------------------------------------------------------

export class CiteSourceExternalQecdbOrg extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'External DB: QECDB.ORG',
            chunk_size: Infinity,
            chunk_retrieve_delay_ms: 0,

            cache_store_options: {
                // Setting cache_duration_ms = 0 means do not keep in cache; it will stay though
                // long enough for the zoo to be built.
                cache_duration_ms: 0
            },
        };
        const default_options = {
            cite_prefix: 'qecdborg',
        };

        super(
            override_options,
            options,
            default_options,
        );

    }

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {

            // TODO: Maybe query the qecdb.org site to (1) check that this code exists, and (2) extract some metainformation to display in the citation line.  (Say, "Qecdb.org Database, [[49,1,3]] css code, ID XYZ")

            await this.citation_manager.store_citation(
                this.cite_prefix, key,
                {
                    _ready_formatted: {
                        flm: `\\emph{Qecdb.org Database}, \\href{https://qecdb.org/codes/${key}}{ID ${key}}`,
                    }
                },
                this.cache_store_options,
            );

        }
    }

}


// ---------------------------------------------------------------------------
// verbatim copy from zoodbtools/zoodbpreview/citationapiplaceholder.js
// ---------------------------------------------------------------------------

export class CitationSourceApiPlaceholder extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};
        options.placeholder_name ??= '[custom citation source api placeholder]';

        const override_options = {
            source_name: `${options.placeholder_name} (placeholder)`,
            chunk_size: Infinity,
            chunk_retrieve_delay_ms: 0,

            cache_store_options: {
                    cache_duration_ms: 0,
            },
        };
        const default_options = {
            cite_prefix: options.cite_prefix,

            search_in_compiled_cache: {}
        };

        super(
            override_options,
            options,
            default_options,
        );

        this.search_in_compiled_cache = this.options.search_in_compiled_cache ?? {};
    }

    async run_retrieve_chunk(id_list)
    {
        for (let cite_key of id_list) {
            cite_key = cite_key.trim();
            const cite_key_encoded = encodeURIComponent(cite_key);
            
            let cached_compiled_flm_text = (
                this.search_in_compiled_cache?.[`${this.cite_prefix}:${cite_key}`]
                ?.value?.citation_text
            );
            if (!cached_compiled_flm_text) {
                // other form of cache, e.g., JSON exported references
                cached_compiled_flm_text = (
                    this.search_in_compiled_cache?.[this.cite_prefix]?.[cite_key]
                );
            }

            if (cached_compiled_flm_text) {
                this.citation_manager.store_citation(
                    this.cite_prefix, cite_key,
                    { _ready_formatted: { flm: cached_compiled_flm_text } },
                    this.cache_store_options
                );
                continue;
            }

            let flm_text = null;
            if (typeof this.options.title === 'function') {
                flm_text = this.options.title(cite_key);
            } else {
                flm_text = `${this.options.title} \\verbcode{${cite_key}}`;
            }

            let test_url = this.options.test_url(this.cite_prefix, cite_key);
            if (test_url) {
                flm_text += ` — \\href{${test_url}}{TEST→}`;
            }

            let csljsondata = {
                _ready_formatted: {
                    flm: flm_text,
                }
            };

            this.citation_manager.store_citation(
                this.cite_prefix, cite_key, csljsondata, this.cache_store_options
            );
        }
    }
    
}


// ---------------------------------------------------------------------------
// tests
// ---------------------------------------------------------------------------

function mock_options(extra = {})
{
    const host = make_mock_host();
    return {
        host,
        options: {
            fetch: make_mock_fetch_api(host),
            sleep: host.sleep,
            now: host.now,
            skip_save_cache: true,
            ...extra,
        },
    };
}

function make_placeholder(cite_prefix, extra = {})
{
    return new CitationSourceApiPlaceholder({
        cite_prefix,
        placeholder_name: `${cite_prefix} placeholder`,
        title: `[${cite_prefix}]`,
        test_url: (prefix, key) => `https://example.org/test/${prefix}/${encodeURIComponent(key)}`,
        ...extra,
    });
}


describe('zoodb.citationmanager downstream custom sources (verbatim copies)', function () {

    this.timeout(20000);

    describe('CiteSourceExternalQecdbOrg', function () {

        it('stores _ready_formatted entries through the manager', async function () {
            const { host, options } = mock_options();
            const manager = new CitationDatabaseManager(
                { qecdborg: new CiteSourceExternalQecdbOrg() }, options
            );
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'qecdborg', cite_key: 'abc' },
                { cite_prefix: 'qecdborg', cite_key: 'xyz-123' },
            ]);
            assert.deepStrictEqual(failures, []);

            const item = manager.get_citation_by_id('qecdborg:abc');
            assert.deepStrictEqual(Object.keys(item).sort(), ['_hash', '_ready_formatted', 'id']);
            assert.strictEqual(item.id, 'qecdborg:abc');
            assert.match(item._hash, /^[0-9a-f]{64}$/);
            assert.deepStrictEqual(item._ready_formatted, {
                flm: '\\emph{Qecdb.org Database}, \\href{https://qecdb.org/codes/abc}{ID abc}',
            });
            assert.strictEqual(
                manager.get_citation('qecdborg', 'xyz-123')._ready_formatted.flm,
                '\\emph{Qecdb.org Database}, \\href{https://qecdb.org/codes/xyz-123}{ID xyz-123}'
            );
            assert.ok(manager.keys().includes('qecdborg:abc'), manager.keys().join());
            assert.strictEqual(host.requests.length, 0);
        });

        it('keeps its entries ephemeral (cache_duration_ms: 0) yet served during the run',
           async function () {
            const src = new CiteSourceExternalQecdbOrg();
            const spec = await src.get_autocitefetch_spec();
            assert.strictEqual(spec.kind, 'js');
            assert.strictEqual(spec.prefix, 'qecdborg');
            assert.strictEqual(spec.ttlMs, 0);
            assert.strictEqual(spec.chunkSize, Infinity);
            assert.strictEqual(spec.minIntervalMs, 0);

            // with a persistent cache: served, but never written to disk
            const cache_dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zoodb-downstream-test-'));
            try {
                const { options } = mock_options({ skip_save_cache: false, cache_fs: fs, cache_dir });
                const manager = new CitationDatabaseManager({ qecdborg: src }, options);
                await manager.initialize();
                await manager.retrieve_citations([ { cite_prefix: 'qecdborg', cite_key: 'abc' } ]);
                await manager.save_cache();
                assert.strictEqual(manager.get_citation_by_id('qecdborg:abc').id, 'qecdborg:abc');
                const jsonl = path.join(cache_dir, 'citations.jsonl');
                const contents = fs.existsSync(jsonl) ? fs.readFileSync(jsonl, 'utf-8') : '';
                assert.ok( ! contents.includes('qecdborg'), contents );
            } finally {
                fs.rmSync(cache_dir, { recursive: true, force: true });
            }
        });

    });

    describe('CitationSourceApiPlaceholder', function () {

        it('works under the arxiv and doi prefixes (store_citation without await)',
           async function () {
            const { host, options } = mock_options();
            const manager = new CitationDatabaseManager(
                {
                    arxiv: make_placeholder('arxiv'),
                    doi: make_placeholder('doi'),
                },
                options
            );
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1902.07714' },
                { cite_prefix: 'doi', cite_key: '10.1103/PhysRevX.10.041018' },
            ]);
            assert.deepStrictEqual(failures, []);

            const a = manager.get_citation_by_id('arxiv:1902.07714');
            assert.strictEqual(a.id, 'arxiv:1902.07714');
            assert.match(a._hash, /^[0-9a-f]{64}$/);
            assert.strictEqual(
                a._ready_formatted.flm,
                '[arxiv] \\verbcode{1902.07714} — \\href{https://example.org/test/arxiv/1902.07714}{TEST→}'
            );
            const d = manager.get_citation_by_id('doi:10.1103/PhysRevX.10.041018');
            assert.strictEqual(d.id, 'doi:10.1103/PhysRevX.10.041018');
            assert.match(d._ready_formatted.flm, /\\verbcode\{10\.1103\/PhysRevX\.10\.041018\}/);

            // the placeholder never reaches the network
            assert.strictEqual(host.requests.length, 0);
        });

        it('handles keys with surrounding whitespace (trim)', async function () {
            const { options } = mock_options();
            const manager = new CitationDatabaseManager(
                { arxiv: make_placeholder('arxiv') }, options
            );
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: ' 1310.2984 ' },
                { cite_prefix: 'arxiv', cite_key: '1310.2984' },
            ]);
            assert.deepStrictEqual(failures, []);

            // readable under the spelling encountered, id = requested id
            const spaced = manager.get_citation_by_id('arxiv: 1310.2984 ');
            assert.strictEqual(spaced.id, 'arxiv: 1310.2984 ');
            const plain = manager.get_citation_by_id('arxiv:1310.2984');
            assert.strictEqual(plain.id, 'arxiv:1310.2984');
            // the placeholder saw (and stored) the trimmed key
            assert.strictEqual(spaced._ready_formatted.flm, plain._ready_formatted.flm);
            assert.match(plain._ready_formatted.flm, /\\verbcode\{1310\.2984\}/);
            assert.ok(manager.keys().includes('arxiv:1310.2984'), manager.keys().join());
        });

        it('uses search_in_compiled_cache (both forms) and a title function', async function () {
            const { options } = mock_options();
            const manager = new CitationDatabaseManager(
                {
                    arxiv: make_placeholder('arxiv', {
                        search_in_compiled_cache: {
                            'arxiv:1111.1111': { value: { citation_text: 'Compiled \\emph{one}' } },
                            arxiv: { '2222.2222': 'Exported \\emph{two}' },
                        },
                        title: (key) => `Title for ${key}`,
                        test_url: () => null,
                    }),
                },
                options
            );
            await manager.initialize();

            const failures = await manager.retrieve_citations([
                { cite_prefix: 'arxiv', cite_key: '1111.1111' },
                { cite_prefix: 'arxiv', cite_key: '2222.2222' },
                { cite_prefix: 'arxiv', cite_key: '3333.3333' },
            ]);
            assert.deepStrictEqual(failures, []);
            assert.strictEqual(manager.get_citation('arxiv', '1111.1111')._ready_formatted.flm,
                               'Compiled \\emph{one}');
            assert.strictEqual(manager.get_citation('arxiv', '2222.2222')._ready_formatted.flm,
                               'Exported \\emph{two}');
            assert.strictEqual(manager.get_citation('arxiv', '3333.3333')._ready_formatted.flm,
                               'Title for 3333.3333');
        });

        it('works together with CiteSourceExternalQecdbOrg', async function () {
            const { options } = mock_options();
            const manager = new CitationDatabaseManager(
                {
                    arxiv: make_placeholder('arxiv'),
                    doi: make_placeholder('doi'),
                    qecdborg: new CiteSourceExternalQecdbOrg(),
                },
                options
            );
            await manager.initialize();
            const failures = await manager.retrieve_citations([
                { cite_prefix: 'qecdborg', cite_key: 'abc' },
                { cite_prefix: 'arxiv', cite_key: '1310.2984' },
                { cite_prefix: 'doi', cite_key: '10.1/x' },
            ]);
            assert.deepStrictEqual(failures, []);
            for (const id of ['qecdborg:abc', 'arxiv:1310.2984', 'doi:10.1/x']) {
                const item = manager.get_citation_by_id(id);
                assert.strictEqual(item.id, id);
                assert.strictEqual(typeof item._ready_formatted.flm, 'string');
            }
        });

    });

});
