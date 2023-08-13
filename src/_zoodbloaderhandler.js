import debugm from 'debug';
const debug = debugm('zoodb._zoodbloaderhandler');

import loMerge from 'lodash/merge.js';

/**
 * Doc........
 */
export class ZooDbDataLoaderHandler
{
    constructor(db_data_loader, options={})
    {
        this.options = loMerge(
            {
                throw_reload_errors: true
            },
            options,
        );

        this.db_data_loader = db_data_loader;

        this.zoodb = null;

        this._currently_loading = null;
        this._first_load_done = null;
    }

    initialize(zoodb)
    {
        this.zoodb = zoodb;

        this._currently_loading = false;
        this._first_load_done = false;
    }

    async load()
    {
        if (this._currently_loading) {
            console.error("The zoo is already currently being loaded! Please wait "
                          + "before trying to reload the zoo.");
            return;
        }

        if (this._first_load_done) {
            return this.reload();
        }

        debug(`Initiating loading the zoo data using our registered data db_data_loader`);

        this._currently_loading = true;

        //
        // Load the data files
        //
        const dbdata = await this.db_data_loader.load();

        //
        // Load the zoo from the data files
        //
        await this.zoodb.load_data( dbdata );

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

            const {
                // dbdata,
                reload_info
            } = await this.db_data_loader.reload(this.zoodb.db);

            await this.zoodb.update_objects(reload_info.reloaded_objects);

            debug("Re-Validating Zoo");

            await this.zoodb.validate();

            debug("Finished reloading Zoo.");

            return true;

        } catch (err) {
            console.error('ERROR RELOADING DATA: ', err);
            if (this.options.throw_reload_errors ?? false) {
                throw err;
            }
        } finally {
            this._currently_loading = false;
        }
    }

}
