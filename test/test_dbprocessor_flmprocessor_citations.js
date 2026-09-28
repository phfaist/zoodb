// Integration test (WP4): a standard zoo whose FLM content cites arXiv, DOI,
// manual, preset (bibliography file) and custom (JavaScript source)
// citations, retrieved through the autocitefetch-backed citation manager with
// a mock fetch (no network), compiled by the CitationCompiler, and registered
// in the FLM environment's citations provider.  Also covers the handling of
// citations that cannot be retrieved under both `flm_error_policy` values.

import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { ZooDbDataLoaderHandler } from '../src/index.js';

import { use_relations_populator } from '../src/std/use_relations_populator.js';
import { use_flm_environment } from '../src/std/use_flm_environment.js';
import { use_flm_processor } from '../src/std/use_flm_processor.js';
import { makeStandardZooDb } from '../src/std/stdzoodb.js';
import { makeStandardYamlDbDataLoader } from '../src/std/stdyamldbdataloader.js';

import { CitationSourceBase } from '../src/citationmanager/source/base.js';

import { make_mock_host, make_mock_fetch_api } from './_helpers/citation_mock_host.js';


const test_data_dir = fileURLToPath(new URL('./test_data/', import.meta.url));
const csl_filename = path.join(test_data_dir, 'american-physical-society-et-al--patched.csl');

// (the FLM scanner keeps the braces of \cite{manual:{...}} in the key)
const MANUAL_KEY = '{A. Author, \\emph{Some Manual Book} (2020)}';


// A custom citation source (the CitationSourceBase subclass protocol) serving
// ready-formatted FLM text for any key.
class CitationSourceCustomTest extends CitationSourceBase
{
    constructor(options)
    {
        super(
            {
                source_name: 'Custom test source',
                chunk_size: Infinity,
                chunk_retrieve_delay_ms: 0,
            },
            options ?? {},
            { cite_prefix: 'custom' },
        );
    }

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {
            await this.citation_manager.store_citation(
                this.cite_prefix, key,
                { _ready_formatted: { flm: `Custom reference \\emph{${key}} from the test source` } },
                this.cache_store_options,
            );
        }
    }
}


async function make_zoo({ data_file, flm_error_policy, host })
{
    const zoodb = await makeStandardZooDb({
        fs,
        fs_data_dir: test_data_dir,
        continue_with_errors: (flm_error_policy === 'continue'),

        use_relations_populator,
        use_flm_environment,
        use_flm_processor,
        use_gitlastmodified_processor: false,
        use_searchable_text_processor: false,

        flm_options: {
            citations: {
                csl_style: fs.readFileSync(csl_filename, { encoding: 'utf-8' }),
                preset_bibliography_files: [ '../_fixtures/bib_preset.yml' ],
                sources: {
                    arxiv: true,
                    doi: true,
                    manual: true,
                    preset: true,
                    custom: new CitationSourceCustomTest(),
                },
                cache_dir: '_zoodb_TEST_citation_info_cache',
                cache_dir_create: false,
                skip_save_cache: true,
                citation_manager_options: {
                    fetch: make_mock_fetch_api(host),
                    sleep: host.sleep,
                    now: host.now,
                },
            },
            environment_options: {
                enable_features: {
                    default: false,
                    baseformatting: true,
                    href: true,
                    math: true,
                    citations: true,
                },
            },
        },

        zoo_permalinks: {
            object: (object_type, object_id) => `/${object_type}/${object_id}`,
            graphics_resource: (graphics_resource) => `/pic/${graphics_resource.src_url}`,
        },

        schemas: {
            schema_root: test_data_dir,
            schema_rel_path: 'schemas/',
            schema_add_extension: '.json',
        },
    });

    const loader = await makeStandardYamlDbDataLoader(zoodb, {
        objects: {
            utensil: {
                schema_name: 'utensil',
                data_src_path: 'utensils.json',
                load_objects: (d) => d,
            },
            dish: {
                schema_name: 'dish',
                data_src_path: data_file,
                load_objects: (d) => d,
            },
        },
    });
    await zoodb.install_zoo_loader_handler(new ZooDbDataLoaderHandler(loader));

    return zoodb;
}

function provider_citations(zoodb)
{
    return zoodb.zoo_flm_environment.citations_provider.dump_database().citations_database;
}

function get_flm_processor(zoodb)
{
    const p = zoodb.processors.find( (proc) => proc.citation_manager != null );
    assert.ok(p, 'no FLM processor with a citation manager');
    return p;
}

function capture_console_error()
{
    const saved = console.error;
    const messages = [];
    console.error = (...args) => { messages.push(args.map(String).join(' ')); };
    return { messages, restore: () => { console.error = saved; } };
}


describe('ZooFLMProcessor citations (integration)', function () {

    this.timeout(20000);

    it('compiled citation text reaches the environment citations provider', async function () {
        const host = make_mock_host();
        const zoodb = await make_zoo({ data_file: 'citations_test/dishes.json', host });
        await zoodb.load();

        const db = provider_citations(zoodb);

        // arXiv, chained to the DOI (fixture data; the APS style prints no
        // titles)
        assert.match(db.arxiv['1902.07714'], /P\. Faist \\textit\{et al\.\}, Physical Review X/);
        assert.match(db.arxiv['1902.07714'], /arXiv:1902\.07714/);
        assert.match(db.arxiv['1902.07714'], /doi\.org\/10\.1103%2Fphysrevx\.10\.041018/);
        // DOI directly
        assert.match(db.doi['10.1103/physrevx.10.041018'],
                     /P\. Faist \\textit\{et al\.\}, Physical Review X/);
        // manual citation (ready-formatted FLM)
        assert.strictEqual(db.manual[MANUAL_KEY], MANUAL_KEY);
        // preset bibliography file entry (CSL-JSON formatted with citeproc)
        assert.match(db.preset.Doe2021, /Doe/);
        assert.match(db.preset.Doe2021, /Journal of Test Fixtures/);
        // custom JS source (ready-formatted FLM)
        assert.strictEqual(db.custom.xyz, 'Custom reference \\emph{xyz} from the test source');

        // the provider serves them to FLM
        const provider = zoodb.zoo_flm_environment.citations_provider;
        assert.ok(provider.has_citation({ cite_prefix: 'custom', cite_key: 'xyz' }));

        // everything was served by the mock host
        const urls = host.requests.map( (r) => r.url );
        assert.ok(urls.some( (u) => u.startsWith('https://export.arxiv.org/api/query') ), urls);
        assert.ok(urls.some( (u) => /doi\.org/.test(u) ), urls);

        const mgr = get_flm_processor(zoodb).citation_manager;
        assert.deepStrictEqual(mgr.last_failures, []);
    });

    it("flm_error_policy 'abort': processing rejects before compiling", async function () {
        const host = make_mock_host();
        const zoodb = await make_zoo({
            data_file: 'citations_test/dishes_with_failure.json',
            flm_error_policy: 'abort',
            host,
        });
        const cap = capture_console_error();
        try {
            await assert.rejects(
                zoodb.load(),
                /1 citation\(s\) could not be retrieved: doi:10\.9999\/nonexistent/
            );
        } finally {
            cap.restore();
        }
        // the failure was reported along with where the citation was encountered
        assert.ok(cap.messages.some( (m) => /10\.9999\/nonexistent/.test(m) ), cap.messages);
        // nothing was compiled
        assert.deepStrictEqual(provider_citations(zoodb), {});
    });

    it("flm_error_policy 'continue': the other citations are compiled", async function () {
        const host = make_mock_host();
        const zoodb = await make_zoo({
            data_file: 'citations_test/dishes_with_failure.json',
            flm_error_policy: 'continue',
            host,
        });
        const cap = capture_console_error();
        try {
            await zoodb.load();
        } finally {
            cap.restore();
        }
        assert.ok(cap.messages.some( (m) => /10\.9999\/nonexistent/.test(m) ), cap.messages);

        const db = provider_citations(zoodb);
        assert.match(db.arxiv['1902.07714'], /P\. Faist \\textit\{et al\.\}, Physical Review X/);
        assert.match(db.preset.Doe2021, /Journal of Test Fixtures/);
        assert.strictEqual(db.custom.xyz, 'Custom reference \\emph{xyz} from the test source');
        assert.ok( ! Object.hasOwn(db.doi ?? {}, '10.9999/nonexistent') );

        const failures = get_flm_processor(zoodb).citation_manager.last_failures;
        assert.strictEqual(failures.length, 1);
        assert.strictEqual(failures[0].prefix, 'doi');
        assert.strictEqual(failures[0].key, '10.9999/nonexistent');
    });

});
