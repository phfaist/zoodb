import debugm from 'debug';
const debug = debugm('zoodb._zoodbloaderhandler');

import loMerge from 'lodash/merge.js';

/**
 * This class takes care of loading raw database data using a `dbdataloader`
 * (e.g. :class:`YamlDbDataLoader`) into a :class:`ZooDb` instance.  It can take
 * care of performing reloads, etc.
 *
 * You can install a `ZooDbDataLoaderHandler` in a :class:`ZooDb` instance by
 * calling :meth:`ZooDb.install_data_loader_handler()`.
 *
 * The reason for splitting off the logic of the loader handler is to avoid
 * bloating the `ZooDb` class definition, especially in case a user would like
 * to create a barebones `ZooDb`, e.g. with hard-coded JSON data, without
 * reloading features, in which case neither a loader nor a loader handler are
 * not necessary.
 *
 * This class will do a few more things other than directly calling the
 * `dbdataloader`'s load method and setting the data on the `zoodb` instance:
 *
 * - Checks if a loading operation is already currently in progress, and if
 *   so, declines to reload the data with an error message in the console.
 *
 * - Calls the `zoodb` instance's validate() function, to ensure that the loaded
 *   data conforms to any validation checks.
 *
 * - Provides a `load()` function that can be called repeatedly --- the method
 *   performs an initial zoo load the first time it is called and then performs
 *   reload operations on subsequent calls.
 *
 * Constructor arguments:
 *
 * - `db_data_loader` - the `dbdataloader` instance to use for loading the
 *   database data, for instance, a :class:`YamlDbDataLoader` instance.
 *
 * - `options` - [optional] an object with the following properties.
 *
 * Options:
 *
 * - ``throw_reload_errors`` - if set to `true`, then reload operation failures
 *   will cause an error to be thrown (regardless of whether they are initiated
 *   with a second call to load() or with a call to reload()).  If set to
 *   `false`, only an error message is printed to the console while the function
 *   returns normally.  Setting this option to `false` can be useful in
 *   development mode in eleventy, for instance, where you don't want to stop
 *   the development server by throwing an exception when reloading a database
 *   after a file modification is detected.
 *
 * @param {} db_data_loader
 * @param {} options
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

    /**
     * Initializes the loader handler, giving it the zoodb instance.
     *
     * **Normally, you don't need to call this method!** This function is
     * automatically called by the :class:`ZooDb` instance when you call
     * :meth:`ZooDb.install_data_loader_handler()`.
     */
    initialize(zoodb)
    {
        this.zoodb = zoodb;

        this._currently_loading = false;
        this._first_load_done = false;
    }

    /**
     * Load the data into the zoo, using the dbdataloader.  See the class
     * documentation for details.
     *
     * After the initial call to load(), any subsequent calls to load() will
     * automatically reload the zoo in the same was as directly calling
     * reload().
     */
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

    /**
     * Reload data into the zoo using the dbdataloader.  You must have called
     * load() at least once before, and that call must have completed.
     *
     * Usually you don't need to call reload() directly and simply call load()
     * instead.  After the initial call to load(), any subsequent calls to
     * load() will automatically reload the zoo in the same was as directly
     * calling reload().
     */
    async reload()
    {
        if (this._currently_loading) {
            console.error("The zoo is already currently being loaded! Will not "
                          + "reload again at this time.");
            return;
        }
        this._currently_loading = true;

        if (!this._first_load_done) {
            throw new Error(
                `Call to ZooDbDataLoaderHandler.reload() before having called load().  You `
                + `can only call reload() after having loaded the zoo earlier with load(). `
                + `if in doubt, simply call load() which will automatically perform a reload `
                + `operation if it detects the zoo was already loaded once.`
            );
        }

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
