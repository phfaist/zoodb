import fs from 'fs';

import zoodbdataloader from '../src/dbdataloader/index.js';
import _zoologger from '../src/_zoologger.js';
const logger = _zoologger.child({module: 'play'});

import zoodbrelations from '../src/dbprocessors/relations.js';

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
  fs.writeFileSync("zoo_dbdata_output.json", jsondata, {encoding:'utf8'}); }

logger.info("Zoo saved as json.");

//
// Populate relations fields, including backreferences!
//
{ let zoo_relations_populator = new zoodbrelations.RelationsPopulator(zoodbdata);
  zoo_relations_populator.populate_relations(); }
// logger.debug("CSS code's first parent relation object is: ")
// logger.debug(zoodbdata.objects.code.css.relations.parents[0]);

logger.info("Zoo relations populated!");

//logger.info(zoodbdata);
{ const jsondata = JSON.stringify( jsoncycle.decycle(zoodbdata) );
  fs.writeFileSync("zoo_dbdata_output_relationsdecycled.json", jsondata, {encoding:'utf8'}); }

logger.info("Zoo with relation data saved as JSON with $ref's");


// console.log("Zoo loaded!");
// console.log(zoodbdata);


// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1000);
