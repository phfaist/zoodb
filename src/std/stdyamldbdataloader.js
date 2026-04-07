import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.stdyamldbloader");

//import loMerge from 'lodash/merge.js';


import { YamlDbDataLoader } from '../dbdataloader/yamldb.js';

import { debugconfig } from '../util/debugconfig.js';


/**
 * Create a :class:`YamlDbDataLoader` instance using standard settings derived
 * from a ZooDb instance that was created with :func:`makeStandardZooDb`.
 *
 * The `zoodb` argument must be a :class:`ZooDb` instance (or subclass) whose
 * `config` property has been populated by `makeStandardZooDb`.
 *
 * Config keys (the `config` argument):
 *
 * - `objects` *(required)* — object describing which YAML files to load for
 *   each object type; passed directly to :class:`YamlDbDataLoader` as its
 *   `objects` option.
 *
 * - `DbDataLoaderClass` — class to instantiate (default:
 *   :class:`YamlDbDataLoader`).  Use this to supply a custom subclass.
 *
 * - `fs_data_dir` — override the root data directory.  Defaults to
 *   `zoodb.config.fs_data_dir`.
 *
 * - `fs` — override the filesystem access object.  Defaults to
 *   `zoodb.config.fs`.
 *
 * The `resource_file_extensions` option forwarded to the data loader is taken
 * from `zoodb.config.flm_options.resources.resource_file_extensions`.
 *
 * @param {ZooDb} zoodb - A ZooDb instance created with `makeStandardZooDb`.
 * @param {Object} [config={}] - Configuration options; see above.
 * @returns {Promise<YamlDbDataLoader>} The constructed data loader instance.
 */
export async function makeStandardYamlDbDataLoader(zoodb, config={})
{
    if (config.objects == null) {
        throw new Error(`Need to specify objects: {...} config parameter`);
    }

    let zoo_config = zoodb.config ?? {};

    let DbDataLoaderClass = config.DbDataLoaderClass ?? YamlDbDataLoader;

    let loader_config = {
        resource_file_extensions:
            zoo_config.flm_options?.resources?.resource_file_extensions,

        objects: config.objects,

        object_defaults: { },
        root_data_dir: config.fs_data_dir ?? zoo_config?.fs_data_dir,

        fs: config.fs ?? zoo_config.fs,
    };

    debug(`Creating a ${DbDataLoaderClass.name} instance with config`, debugconfig(debug, loader_config));

    let yamldb_loader = new DbDataLoaderClass(loader_config);

    return yamldb_loader;
}
