import fs from 'fs';

import loMerge from 'lodash/merge.js';


import { StandardZooDb } from '@phfaist/zoodb/std/stdzoodb';

import { use_relations_populator } from '@phfaist/zoodb/std/use_relations_populator';
import { use_gitlastmodified_processor } from '@phfaist/zoodb/std/use_gitlastmodified_processor';
import { use_flm_environment } from '@phfaist/zoodb/std/use_flm_environment';
import { use_flm_processor } from '@phfaist/zoodb/std/use_flm_processor';
import { use_searchable_text_processor } from '@phfaist/zoodb/std/use_searchable_text_processor';

import { StandardZooDbYamlDataLoader } from '@phfaist/zoodb/std/load_yamldb';




// support __filename & __dirname here
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const example_root_dir = path.resolve(__dirname, '..');


// -------------------------------------

const csl_filename = path.join(__dirname, 'american-physical-society-et-al--patched.csl');


// -----------------------------------------------------------------------------


// import the permalinks
import { permalinks } from './permalinks.js';


// -----------------------------------------------------------------------------


export class PeopleDb extends StandardZooDb
{
    constructor(config)
    {
        super(loMerge({

            fs,
            fs_data_dir: path.join(example_root_dir, 'data'),

            use_relations_populator,
            use_gitlastmodified_processor,
            use_flm_environment,
            use_flm_processor,
            use_searchable_text_processor,

            flm_options: {

                refs:  {
                    person: {
                        formatted_ref_flm_text_fn: (person_id, person) => person.name,
                    },
                },

                citations: {
                    csl_style: fs.readFileSync( csl_filename, { encoding: 'utf-8', }, ),
                    override_arxiv_dois_file:
                        'citations_info/override_arxiv_dois.yml',
                    preset_bibliography_files: [
                        'citations_info/bib_preset.yml',
                    ],
                    default_user_agent: null,
                },
                
                resources: {
                    // "null" means to use defaults
                    rename_figure_template: null,
                    figure_filename_extensions: null,
                    graphics_resources_fs_data_dir: null,
                },

            },

            searchable_text_options: {
                object_types: ['person',]  // which DB object types to search
            },

            zoo_permalinks: permalinks,

        }, config));
    }



    //
    // simple example of ZooDb validation -- check that spouses always report
    // the other spouse as their spouse
    //
    async validate()
    {
        for (const [person_id, person] of Object.entries(this.objects.person)) {
            if (person.relations != null && person.relations.spouse != null) {
                // remember, person.relations.spouse is the ID of the spouse
                // person, not the person object itself
                const other_person = this.objects.person[person.relations.spouse];
                if (other_person?.relations?.spouse !== person_id) {
                    throw new Error(
                        `Person ‘${person_id}’ lists ‘${person.relations.spouse}’ as their `
                        + `spouse but not the other way around`
                    );
                }
            }
        }
    }
};



// -----------------------------------------------------------------------------


export class PeopleDbYamlDataLoader extends StandardZooDbYamlDataLoader
{
    constructor()
    {
        const schema_root = `file://${example_root_dir}/`;
        super({
            //
            // specify objects & where to find them
            //
            objects: {
                person: {
                    schema_name: 'person',
                    data_src_path: 'people/',
                },
            },
            
            //
            // specify where to find schemas
            //
            schemas: {
                schema_root: schema_root,
                schema_rel_path: 'schemas/',
                schema_add_extension: '.yml',
            },

        });
        this.schema_root = schema_root;
    }
};

// -----------------------------------------------------------------------------

export async function load_people_db()
{
    const people_db = new PeopleDb();
    people_db.install_zoo_loader(new PeopleDbYamlDataLoader({ }));

    await people_db.load();

    return people_db;
}
