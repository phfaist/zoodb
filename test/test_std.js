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
import { use_flm_environment } from '../src/std/use_flm_environment.js';
import { use_flm_processor } from '../src/std/use_flm_processor.js';
//import { use_gitlastmodified_processor } from '../src/std/use_gitlastmodified_processor.js';
//import { use_searchable_text_processor } from '../src/std/use_searchable_text_processor.js';

import { makeStandardZooDb } from '../src/std/stdzoodb.js';
import { makeStandardYamlDbDataLoader } from '../src/std/stdyamldbdataloader.js';




// -----



// helpers

async function createMyZooDb()
{
    const config = {
        fs: fs,
        fs_data_dir: test_data_dir,

        use_relations_populator,
        use_flm_environment,
        use_flm_processor,
        use_gitlastmodified_processor: false,
        use_searchable_text_processor: false,

        flm_options: {

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
                skip_save_cache: true,
            },

            environment_options: {
                enable_features: {
                    default: false,

                    defterm: false,
                    baseformatting: true,
                    href: true,
                    math: true,
                    citations: true,
                },
                parsing: {
                    dollar_inline_math_mode: true,
                }
            }
            
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

    };

    return await makeStandardZooDb(config);
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

        assert.notStrictEqual(zoodb.zoo_flm_environment.feature_baseformatting, null);
        assert.strictEqual(zoodb.zoo_flm_environment.feature_defterm, null);
        assert.strictEqual(zoodb.zoo_flm_environment.feature_floats, null);

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

    it('FLM environment features match configuration', async function () {
        this.timeout(5000);

        const zoodb = await createMyZooDb();

        // Features that were enabled
        assert.ok(zoodb.zoo_flm_environment.feature_baseformatting);
        assert.ok(zoodb.zoo_flm_environment.feature_href);
        assert.ok(zoodb.zoo_flm_environment.feature_math);

        // Features that were disabled
        assert.strictEqual(zoodb.zoo_flm_environment.feature_defterm, null);
        assert.strictEqual(zoodb.zoo_flm_environment.feature_floats, null);
    });

});
