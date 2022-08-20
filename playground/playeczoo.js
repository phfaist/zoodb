
const loadzoodb = require('zoobase/loadzoodb')

const eczoo_data_dir = process.env.ECZOO_DATA_DIR;
if (!eczoo_data_dir) {
    throw new Error("Please define process environment variable $ECZOO_DATA_DIR");
}


const zoo = new loadzoodb.ZooDb({
    objects: {
      code: {
        //schema_name: 'code',
        data_src: 'codes/',
        //glob_pattern: '**'+'/'+'*.yml',
        //load_objects: (d) => [ d ] // single file data contents = single object
      },
    },
    root_data_dir: process.env.ECZOO_DATA_DIR,
    schema_root: process.env.ECZOO_DATA_DIR + '/../eczoo_generator/schemas/',
    schema_add_extension: '.json',
  });

zoo.load(); // load!
