import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.load_yamldb");

//import loMerge from 'lodash/merge.js';

import { YamlDbZooDataLoader } from '../dbdataloader/yamldb';


//
// Load & reload zoo from our YAML files database
//


// -----------------------------------------------------------------------------

/**
 * Doc........
 */
export class StandardZooDbYamlDataLoader
{
    constructor(config)
    {
        this.config = config ?? {};

        this._currently_loading = null;
        this._first_load_done = null;

        if (this.config.objects == null) {
            throw new Error(`Need to specify objects: {...} config parameter`);
        }
    }

    initialize(zoodb)
    {
        this.zoodb = zoodb;

        this.yamldb_loader = new YamlDbZooDataLoader({
            resource_file_extensions:
                this.zoodb.config.flm_options.resources.resource_file_extensions,
            objects: this.config.objects,

            object_defaults: { },
            root_data_dir: this.zoodb.config.fs_data_dir,
            schemas: this.config.schemas,

            fs: this.config.fs ?? this.zoodb.config.fs,
        });

        this._currently_loading = false;
        this._first_load_done = false;
    }

    async load()
    {
        if (this._currently_loading) {
            console.error("The zoo is already currently being loaded! Will not "
                          + "reload again at this time.");
            return;
        }

        if (this._first_load_done) {
            return this.reload();
        }

        debug(`Loading YAML data from ‘${this.zoodb.config.fs_data_dir}’`);

        this._currently_loading = true;

        //
        // Load the zoo from the data files
        //
        await this.zoodb.load_data( await this.yamldb_loader.load() );

        this._currently_loading = false;
        this._first_load_done = true;

        debug("Validating Zoo ...");

        //
        // & validate its contents
        //
        await this.zoodb.validate();

        debug("Zoo is now loaded!");
    }

    async reload()
    {
        if (this._currently_loading) {
            console.error("The zoo is already currently being loaded! Will not "
                          + "reload again at this time.");
            return;
        }
        this._currently_loading = true;

        try {

            debug("Reloading Zoo!");

            const { /*dbdata,*/ reload_info } =
                  await this.yamldb_loader.reload(this.zoodb.db);

            await this.zoodb.update_objects(reload_info.reloaded_objects);

            debug("Re-Validating Zoo");

            await this.zoodb.validate();

            debug("Finished reloading Zoo.");

            return true;

        } catch (err) {
            console.error('ERROR RELOADING DATA: ', err);
        } finally {
            this._currently_loading = false;
        }
    }

}
