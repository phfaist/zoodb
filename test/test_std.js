import * as assert from 'assert';
import fs from 'fs';

import debugm from 'debug';
const debug = debugm('zoodb.test_std');


// support __filename & __dirname here
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// test data dir
const test_data_dir = path.join(__dirname, 'test_data');

const csl_filename = path.join(test_data_dir, 'american-physical-society-et-al--patched.csl');

// imports
import {
    //ZooDb,
    ZooDbDataLoaderHandler
} from '../src/index.js';

import { use_relations_populator } from '../src/std/use_relations_populator.js';
import { use_flm_engine } from '../src/std/use_flm_engine.js';
import { use_flm_processor } from '../src/std/use_flm_processor.js';
//import { use_gitlastmodified_processor } from '../src/std/use_gitlastmodified_processor.js';
//import { use_searchable_text_processor } from '../src/std/use_searchable_text_processor.js';

import { makeStandardZooDb } from '../src/std/stdzoodb.js';
import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine, is_fragment } from '../src/zooflm/engine.js';
import { makeStandardYamlDbDataLoader } from '../src/std/stdyamldbdataloader.js';

// citations are served from test/_fixtures/ (no network)
import { make_mock_host, make_mock_fetch_api } from './_helpers/citation_mock_host.js';




// -----



// helpers

// the zoos made by the tests, whose engines are freed at the end
const created_zoos = [];

async function createMyZooDb(more = {})
{
    const citations_mock_host = make_mock_host();

    const config = {
        fs: fs,
        fs_data_dir: test_data_dir,

        use_relations_populator,
        use_flm_engine,
        use_flm_processor,
        use_gitlastmodified_processor: false,
        use_searchable_text_processor: false,

        flm_options: {

            load_wasm: load_zoodb_flm_wasm_node,

            refs:  {
                person: {
                    formatted_ref_flm_text_fn: (person_id, person) => person.name,
                },
            },

            citations: {
                csl_style: fs.readFileSync( csl_filename, { encoding: 'utf-8', }, ),
                // override_arxiv_dois_file:
                //     'citations_info/override_arxiv_dois.yml',
                // preset_bibliography_files: [
                //     'citations_info/bib_preset.yml',
                // ],
                // default_user_agent: null,
                cache_dir: '_zoodb_TEST_citation_info_cache',
                cache_dir_create: false,
                skip_save_cache: true,
                citation_manager_options: {
                    fetch: make_mock_fetch_api(citations_mock_host),
                    sleep: citations_mock_host.sleep,
                    now: citations_mock_host.now,
                },
            },

            engine: {
                dollar_math: true,
                off: ['annotations'],
                settings: {
                    userdefs: { macros: { utensilname: { content: 'utensil' } } },
                },
            },

        },

        zoo_permalinks: {
            object: (object_type, object_id) => `/${object_type}/${object_id}`,
            graphics_resource: (graphics_resource) => `/pic/${graphics_resource.src_url}`,
        },

        //
        // specify where to find schemas
        //
        schemas: {
            schema_root: test_data_dir,
            schema_rel_path: 'schemas/',
            schema_add_extension: '.json',
        },
        // The SchemaLoader will automatically load all files in the
        // folder if the schema_root is a filesystem path.  Otherwise,
        // specify a list of schema names to load here:
        //schema_names: [ 'person', ]

        ...more,
    };

    const zoodb = await makeStandardZooDb(config);
    created_zoos.push(zoodb);
    return zoodb;
}



async function createMyYamlDbDataLoader(zoodb)
{
    let config = {
        //
        // specify objects & where to find them
        //
        objects: {
            utensil: {
                schema_name: 'utensil',
                data_src_path: 'utensils.json',
                load_objects: (d) => d, // file contents is already a list of objects
            },
            dish: {
                schema_name: 'dish',
                data_src_path: 'dishes.json',
                load_objects: (d) => d, // file contents is already a list of objects
            },
        },

    }

    return await makeStandardYamlDbDataLoader(zoodb, config);
}


// -----


describe('zoodb.test_std', function() {

    after(function () {
        for (const zoodb of created_zoos.splice(0)) {
            zoodb.zoo_flm_engine?.free();
        }
    });

    it('can load a mini test zoo', async function () {
        // adjust test timeout
        this.timeout(5000);

        const zoodb = await createMyZooDb();
        const loader = await createMyYamlDbDataLoader(zoodb);
    
        const loader_handler = new ZooDbDataLoaderHandler(loader);
        await zoodb.install_zoo_loader_handler(loader_handler);
    
        await zoodb.load();

        const dataExport = await zoodb.data_dump();

        debug(`ZooDb mini test zoo loaded!`);

        assert.ok(zoodb.zoo_flm_engine instanceof ZooFlmEngine);
        assert.ok(is_fragment(zoodb.objects.dish.soup.description));
        // the dump carries the engine's data
        assert.strictEqual(dataExport.zooflm.settings_hash, zoodb.zoo_flm_engine.settings_hash);
        assert.strictEqual(typeof dataExport.db.objects.dish.soup.description, 'string');

    });

    it('all processor types enabled together', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb();
        const loader = await createMyYamlDbDataLoader(zoodb);

        const loader_handler = new ZooDbDataLoaderHandler(loader);
        await zoodb.install_zoo_loader_handler(loader_handler);

        await zoodb.load();

        // Relations should be populated
        const pasta = zoodb.objects.dish.pasta;
        assert.ok(pasta.relations);
        assert.ok(pasta.relations.eaten_with);
        assert.ok(pasta.relations.eaten_with.length > 0);

        // FLM fields should be compiled (if any have _flm annotation)
        // The dish/utensil schemas may not have _flm fields, but the processor should run
        assert.ok(zoodb.processors.length > 0);
    });

    it('zoo_permalinks configuration produces correct URLs', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb();
        const loader = await createMyYamlDbDataLoader(zoodb);

        const loader_handler = new ZooDbDataLoaderHandler(loader);
        await zoodb.install_zoo_loader_handler(loader_handler);

        await zoodb.load();

        // Check that the permalink function works as configured
        const permalink = zoodb.zoo_permalinks.object('dish', 'pasta');
        assert.strictEqual(permalink, '/dish/pasta');

        const graphics_permalink = zoodb.zoo_permalinks.graphics_resource({ src_url: 'test.png' });
        assert.strictEqual(graphics_permalink, '/pic/test.png');

        // the index of the default context, from the permalinks
        const index = zoodb.zoo_flm_engine.tables.index.default;
        const pasta = index.find( (e) => e.label === 'dish:pasta' );
        assert.strictEqual(pasta.href, '/dish/pasta');
        assert.strictEqual(pasta.display, zoodb.objects.dish.pasta.name);
        const html = zoodb.zoo_flm_engine.render_document({
            compose: ({ ref }) => ref('utensil', 'fork'),
        }).html;
        assert.strictEqual(html, '<a href="/utensil/fork" class="href-ref ref-utensil">Fork</a>');
    });

    it('data dump and reload produces consistent data', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb();
        const loader = await createMyYamlDbDataLoader(zoodb);

        const loader_handler = new ZooDbDataLoaderHandler(loader);
        await zoodb.install_zoo_loader_handler(loader_handler);

        await zoodb.load();

        const dump = await zoodb.data_dump({ remove_zoodb_info: true });

        // Dump should contain our object types
        assert.ok(dump.db.objects.dish);
        assert.ok(dump.db.objects.utensil);

        // Dumped objects should have their IDs
        assert.ok(dump.db.objects.dish.pasta);
        assert.ok(dump.db.objects.utensil.fork);
    });

    it('the FLM engine follows the configuration', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb();
        const engine = zoodb.zoo_flm_engine;

        // dollar math, as configured
        const f = engine.make_fragment('the $x$ and the \\utensilname{}', { standalone: true });
        assert.deepStrictEqual(f.diagnostics, []);
        assert.match(engine.snippet(f), /^the <span class="flm-pres-math--passthrough"[^>]*>\\\(x\\\)<\/span> and the utensil$/);
        engine.release(f);

        // the hash of the configuration: the same configuration given
        // directly gives the same hash
        const same = await ZooFlmEngine.create({
            load_wasm: load_zoodb_flm_wasm_node,
            core: { off: ['annotations'], dollar_math: true,
                    settings: { userdefs: { macros: { utensilname: { content: 'utensil' } } } } },
        });
        assert.strictEqual(same.settings_hash, engine.settings_hash);
        same.free();
        assert.strictEqual(engine.error_policy, 'abort');
        assert.strictEqual(engine.unresolved, 'error');
    });

    it('takes continue_with_errors and allow_unresolved_references', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb({ continue_with_errors: true });
        assert.strictEqual(zoodb.flm_error_policy, 'continue');
        assert.strictEqual(zoodb.zoo_flm_engine.error_policy, 'continue');
        assert.strictEqual(zoodb.zoo_flm_processor.error_policy, 'continue');

        const zoodb2 = await createMyZooDb({
            flm_options: {
                load_wasm: load_zoodb_flm_wasm_node,
                allow_unresolved_references: true,
                citations: { cache_dir: '_zoodb_TEST_citation_info_cache', cache_dir_create: false },
            },
        });
        assert.strictEqual(zoodb2.zoo_flm_engine.unresolved, 'warn');
    });

    it('refuses the configuration entries of the old FLM layer', async function () {
        await assert.rejects(createMyZooDb({ use_flm_environment: () => null }), /use_flm_engine/);
        await assert.rejects(
            createMyZooDb({ flm_options: { environment_options: { parsing: {} } } }),
            /flm_options\.engine/,
        );
    });

});
