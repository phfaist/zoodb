import fs from 'fs';
import path from 'path';

import * as zoodbdataloader from '../src/dbdataloader/index.js';
import _zoologger from '../src/_zoologger.js';
const logger = _zoologger.child({module: 'play'});

import * as zoodbrelations from '../src/dbprocessors/relations.js';
import * as zoollm from '../src/zoollm/index.js';
const $$kw = zoollm.$$kw;

import jsoncycle from 'cycle/cycle.js';


const eczoo_data_dir = process.env.ECZOO_DATA_DIR;
if (!eczoo_data_dir) {
    throw new Error("Please define process environment variable $ECZOO_DATA_DIR");
}



const loader = new zoodbdataloader.ZooDbDataLoader({
    objects: {
        code: {
            schema_name: 'ecc',
            data_src_path: 'codes/',
        },
    },
    object_defaults: {
        ignore_file_name_match:
        /(\~|^\.DS_Store|\.(bak|svg|tex|pdf|aux|log|dvi|xcf|ai|indd|afdesign|afpub))$/i,
    },
    root_data_dir: process.env.ECZOO_DATA_DIR,
    schemas: {
        schema_root: `file://${process.env.ECZOO_DATA_DIR}/../eczoo_generator/`,
        schema_rel_path: 'schemas/',
        schema_add_extension: '.yml',
    },
});


const zoodbdata = await loader.load(); // load!
logger.info("Zoo is now loaded!");


{ const jsondata = JSON.stringify( zoodbdata );
  fs.writeFileSync("zoo_dbdata_output.json", jsondata, {encoding:'utf8'});
  logger.info("Zoo saved as json."); }


//
// Populate relations fields, including backreferences!
//
{ let zoo_relations_populator = new zoodbrelations.RelationsPopulator(zoodbdata);
  zoo_relations_populator.check_all_clean_fields();
  zoo_relations_populator.populate_relations();
  // logger.debug("CSS code's first parent relation object is: ")
  // logger.debug(zoodbdata.objects.code.css.relations.parents[0]);
  logger.info("Zoo relations populated!"); }


//logger.info(zoodbdata);
{ const jsondata = JSON.stringify( jsoncycle.decycle(zoodbdata) );
  fs.writeFileSync("zoo_dbdata_output_relationsdecycled.json", jsondata, {encoding:'utf8'});
  logger.info("Zoo with relation data saved as JSON with $ref's"); }



// see if we can mix in some LLM processing
let zoollmenviron = new zoollm.ZooLLMEnvironment();

// logger.debug("refs database is now ")
// logger.debug(zoollmenviron.external_ref_resolver.ref_instance_database);

let frag = zoollmenviron.make_fragment(
    zoodbdata.objects.code.css.description,
    $$kw({
        is_block_level: true,
        resource_info: new zoollm.ZooLLMResourceInfo(
            'code', 'css',
            path.join('codes', zoodbdata.objects.code.css._zoodb.source_file_path)
        )
    })
);
let doc = zoollmenviron.make_document(frag.render);

// We'll need this reference. Note we're specifying it after the relevant
// fragment was parsed, and it still works.
zoollmenviron.external_ref_resolver.add_ref(
    zoollm.RefInstance($$kw({
        ref_type: 'code',
        ref_label: 'binary_linear',
        formatted_ref_llm_text: 'Binary \\emph{linear} code',
        target_href: 'https://errorcorrectionzoo.org/c/binary_linear',
    }))
);

let [render_result, render_context] = doc.render( new zoollm.ZooHtmlFragmentRenderer() );
logger.info("Rendered HTML: ");
logger.info(render_result);



// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1000);
