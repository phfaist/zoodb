import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.stdyamldbloader");

//import loMerge from 'lodash/merge.js';


import { YamlDbDataLoader } from '../dbdataloader/yamldb.js';



export async function makeStandardYamlDbDataLoader(zoodb, config={})
{
    if (config.objects == null) {
        throw new Error(`Need to specify objects: {...} config parameter`);
    }

    let zoo_config = zoodb.config ?? {};

    let loader_config = {
        resource_file_extensions:
            zoo_config.flm_options?.resources?.resource_file_extensions,

        objects: config.objects,

        object_defaults: { },
        root_data_dir: config.fs_data_dir ?? zoo_config?.fs_data_dir,
        schemas: config.schemas,

        fs: config.fs ?? zoo_config.fs,
    };

    debug(`Creating a YamlDbZooDataLoader with config`, loader_config);

    let yamldb_loader = new YamlDbDataLoader(loader_config);

    return yamldb_loader;
}
