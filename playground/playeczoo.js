import fs from 'fs';

import zoodbdataloader from '../src/zoodbdataloader/index.js';
import _zoologger from '../src/_zoologger.js';
const logger = _zoologger.child({module: 'play'});

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
//logger.info(zoodbdata);
const jsondata = JSON.stringify(zoodbdata);
fs.writeFileSync("zoo_dbdata_output.json", jsondata, {encoding:'utf8'});


// console.log("Zoo loaded!");
// console.log(zoodbdata);


// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1000);
