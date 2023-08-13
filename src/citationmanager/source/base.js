import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.sources.base');

import process_hrtime from 'browser-process-hrtime';

import loMerge from 'lodash/merge.js';

import fetch from 'node-fetch';

import { timeout, promisify } from '../../util/prify.js';


/**
 * Base class for a *citation source*, i.e., an engine that is able to obtain
 * bibliographic citation information based on a citation key.  (E.g., the
 * :class:`CitationSourceArxiv` queries information from `the arXiv
 * <https://arxiv.org>`_ to obtain citation information for a given arXiv
 * identifier.)
 *
 * This class is meant to be subclassed to implement the relevant functions to
 * fetch bibliographic citation information.
 *
 * Subclasses should reimplement `run_retrieve_chunk()` to actually fetch
 * bibliographic information from the relevant source.  See documentation for
 * that method for more information.
 *
 * Furthermore, subclasses may reimplement `source_initialize_run()` and
 * `source_finalize_run()` to run additional initial and final steps.  These
 * callbacks will be invoked at the beginning and at the end of a call to
 * `run()`.
 *
 * Important options recognized by this base class are the following:
 *
 * - ``source_name`` - A descriptive name for this citation source.  Should
 *   normally be set by the subclass in the override options.  Mostly for use in
 *   debug messages.
 *
 * - ``fsRootFilePath`` - A filesystem path that should provide a reference root
 *   path for any filesystem access.
 *
 * - ``chunk_size``, ``chunk_retrieve_delay_ms`` - We'll split the citations to
 *   retrieve into chunks, each of size at most `chunk_size`.  We'll then make
 *   sure that the subclass' `run_retrieve_chunk()` is called once per chunk.
 *   After each chunk is retrieved, we make sure that at least
 *   `chunk_retrieve_delay_ms` milliseconds have passed between two chunk
 *   retrievals before calling `run_trieve_chunk()` again.
 *
 * - ``cite_prefix`` - The citation prefix we have been associated with.  An
 *   option value provided here will be overridden by `set_citation_manager()`.
 *   Mainly used for tracing errors/debugging.
 *
 * - ``chains_to_sources`` - An array of source names to which this source might
 *   “chain” to.  For instance, the 'arxiv' source chains to the 'doi' source,
 *   because querying the bibliographic information for an arxiv identifier that
 *   is published will cause a further DOI lookup to get the information of the
 *   corresponding published article.
 *
 * - ``waiting_poll_timeout_ms`` - When we queried all the IDs but
 *   `add_retrieve_done()` was not yet called, we wait this amount of time (in
 *   milliseconds) before checking if we have new IDs to retrieve or if we're
 *   done.
 *
 * - ``cache_store_options`` - Any options to use when calling the manager
 *   object's `store_citation()` method, for instance, ``{ cache_duration_ms:
 *   ... }``.  Subclasses should remember to pass this option on in calls to
 *   ``await this.citation_manager.store_citation(..., this.cache_store_options)``.
 *
 * - ``use_user_agent``, ``user_agent`` - Specify a custom user agent when
 *   fetching remote content with `fetch_url()`.  If `use_user_agent` is false,
 *   no custom user agent is set.  If it is true, then the user agent
 *   `user_agent` is used.  If either `use_user_agent` or `user_agent` are
 *   null/undefined, then the citation manager's `default_use_user_agent` and
 *   `default_user_agent` are used.
 */
export class CitationSourceBase
{
    /**
     * Subclasses should call the superclass constructor with the following
     * arguments to set the options correctly.  Options are merged recursively
     * using `lodash/merge`.
     *
     * @param {Object} override_options - Any options that should be set to the
     *     given values, regardless of any user options.
     * @param {Object} options - The options provided by the user.
     * @param {Object} default_options - Any option defaults that should be set
     *     if the user didn't provide any value.
     */
    constructor(override_options, options, default_options)
    {
        this.keys_to_retrieve = [];
        this.keys_to_retrieve_remaining = [];

        // Apply options in order of precedence.  Object.assign() is not
        // recursive, so use lodash/merge to ensure that any sub-option trees
        // are assigned correctly, too.
        this.options = loMerge(
            {
                fs: { promises: {
                    readFile(/*fname*/) {
                        throw new Error(
                            `You did not specify fs: to your CitationSource `
                            + `instance but the source requested a local file.  You `
                            + `probably want `
                            + `"fs: { promises: { readFile(fname) { return ... } }}"`
                        );
                    }
                } },
                fsRootFilePath: null,

                cache_store_options: {},
            },
            default_options ?? {},
            options ?? {},
            override_options ?? {},
        );

        // ensure a promisified version of readFile
        this.fsp_readFile =
            this.options.fs.promises?.readFile || promisify(this.options.fs.readFile);

        if (this.options.fsRootFilePath != null && this.options.fsRootFilePath != '') {
            this._file_root = `//${this.options.fsRootFilePath}/`;
        } else {
            this._file_root = '';
        }

        this.total_queried = 0;

        this.chunk_size = this.options.chunk_size ?? 512;
        this.chunk_retrieve_delay_ms = this.options.chunk_retrieve_delay_ms ?? 1000;

        this.waiting_poll_timeout_ms = this.options.waiting_poll_timeout_ms ?? 500;

        this.cite_prefix = this.options.cite_prefix;
        this.chains_to_sources = this.options.chains_to_sources || [];
        this.source_name = this.options.source_name ?? '<unknown source>';

        this.cache_store_options = this.options.cache_store_options;

        this._retrieve_more_done = false;

        this._running = false;
    }

    /**
     * The citation manager object will call this method to identify itself.
     * The source stores a reference to the citation manager and registers the
     * citation prefix (`cite_prefix`) to be associated with.
     */
    set_citation_manager(citation_manager, cite_prefix)
    {
        this.citation_manager = citation_manager;
        if (cite_prefix !== undefined) {
            this.cite_prefix = cite_prefix;
        }
    }

    /**
     * Add a list of citation IDs to the list of citation keys to retrieve.  The
     * IDs do not include the citation prefix.  This method may be called
     * multiple times, as we become aware of more citation keys to retrieve in
     * this source.
     */
    add_retrieve(ids)
    {
        this.keys_to_retrieve.push(...ids);
        this.keys_to_retrieve_remaining.push(...ids);
        this._retrieve_more_done = false;
    }

    /**
     * Indicate that no further IDs to look up will be provided.  Once all
     * requested citation IDs are retrieved, the `run()` function may terminate
     * without waiting for any further IDs to be given to `add_retrieve()`.
     */
    add_retrieve_done()
    {
        this._retrieve_more_done = true;
    }

    /**
     * Run this citation source.  Any citation keys (IDs) to be retrieved set by
     * `add_retrieve()` will be retrieved.  Furthermore, this async function
     * will regularly pause and check whether new IDs were set to be retrieved
     * (by possible calls to `add_retrieve()`), until the `add_retrieve_done()`
     * function was called.  Then the async method terminates.
     *
     * The callback method `source_initialize_run()` is called at the beginning
     * of this method, and the `source_finalize_run()` is called at the end.
     *
     * Keys to be retrieved are organized in chunks of relevant size (see
     * options in the class documentation); each chunk causes a call to
     * `run_retrieve_chunk()`.  The latter method should be reimplemented by the
     * subclass to actually perform the retrieval operation.
     *
     * The subclass callbacks `source_initialize_run()`, `run_retrieve_chunk()`,
     * and `source_finalize_run()` are all `await`\ ed, so they can be defined
     * as async/they can return promises.
     */
    async run()
    {
        if (this._running) {
            debug(`Call to run() ignored as citation source is already run()ning`);
            return;
        }
        try {
            this._running = true;

            await this.source_initialize_run();

            let last_chunk_retrieve_hrtime = null;

            debug(`${this.source_name}: there are `
                  + `${this.keys_to_retrieve_remaining.length} citation(s) to retrieve`);
            for (;;) {

                if (this.keys_to_retrieve_remaining.length) {

                    // if applicable, wait before another chunk retrieve call
                    if (this.chunk_retrieve_delay_ms && last_chunk_retrieve_hrtime !== null) {
                        const dt = process_hrtime( last_chunk_retrieve_hrtime );
                        const dt_ms = (1000*dt[0]+dt[1]/1000000);
                        const dt_ms_to_wait = this.chunk_retrieve_delay_ms - dt_ms;
                        if (dt_ms_to_wait > 0) {
                            await timeout( dt_ms_to_wait );
                        }
                    }

                    // create a chunk of IDs to retrieve
                    const ids = this.keys_to_retrieve_remaining.splice(0, this.chunk_size);

                    // retrieve the chunk
                    last_chunk_retrieve_hrtime = process_hrtime();
                    try {
                        await this.run_retrieve_chunk(ids);
                    } catch (e) {
                        e.failure_citation_fetch = {
                            cite_prefix: this.cite_prefix,
                            cite_keys: ids,
                        };
                        throw e;
                    }

                    // bookkeeping & logging
                    this.total_queried += ids.length;
                    debug(`${this.source_name}: `
                          + `${this.total_queried}/${this.keys_to_retrieve.length}`);
                }

                if (this.keys_to_retrieve_remaining.length == 0) {
                    if (this._retrieve_more_done) {
                        // we're done!
                        break;
                    }
                    // check again if we have more entries to retrieve or if
                    // we're actually done, after some timeout
                    await timeout(this.waiting_poll_timeout_ms);
                }
            }

            await this.source_finalize_run();
        } finally {
            this._running = false;
        }
    }

    // helper: provide default retrieve headers for remote queries
    _get_default_headers()
    {
        let headers = {};

        // set a custom user agent?
        if ( this.options.use_user_agent
             ?? this.citation_manager?.options?.default_use_user_agent
             ?? true ) {
            // yes, figure out the user agent to set ->
            headers['User-Agent'] = this._get_user_agent();
        }
        return headers;
    }

    // helper: provide a User-Agent for remote queries
    _get_user_agent()
    {
        if (this.options.user_agent) {
            return this.options.user_agent;
        }
        if (this.citation_manager?.options?.default_user_agent) {
            return this.citation_manager.options.default_user_agent;
        }
        return 'ZooDB-Citations-Fetcher/0.1 (https://github.com/phfaist/zoodb)';
    }

    // -------------

    /**
     * Utility method to fetch data from a remote source.  Returns a promise
     * that resolves to the requested data.
     *
     * The `url` may be any URL or even simply a local path.  If a local path is
     * specified, it is interpreted as a path that is relative to the
     * `fsRootFilePath` folder set in the class options.
     *
     * .. note::
     *
     *    Make sure you use `await` on the return value of this function!
     *
     * The `fetch_options` are options that are directly specified to the
     * `fetch()` method which is either directly provided by the browser or
     * pulled in via node-fetch.  (For instance: ``{ method: 'post', body:
     * `max_results=${id_list.length}&id_list=${id_list.join(',')}`, headers:
     * ... }``.)
     */
    async fetch_url(url, fetch_options=undefined)
    {
        let get_response_object = false;
        if (fetch_options != null) {
            get_response_object = fetch_options.get_response_object ?? false;
            delete fetch_options.get_response_object;
        }

        // convert simple fs paths to file:/// URLs
        const urlobj = new URL(url, `file:${this._file_root}`);
        debug(`Fetching URL ‘${urlobj}’ ...`);

        if (urlobj.protocol === 'file:') {
            // a local file.
            if (get_response_object) {
                throw new Error(
                    `fetch_url() can't get response object for a local filesystem access to `
                    + `‘${url}’`
                );
            }
            return await this.fsp_readFile(urlobj.pathname);
        }
        const response = await fetch(urlobj.href, fetch_options);
        if (get_response_object) {
            return response;
        }
        if (response.status !== 200) {
            console.error(response);
            throw new Error(`Status code ${response.status} when fetching ‘${url}’.`);
        }
        return await response.text();
    }


    // -------------

    /**
     * Reimplement to perform any required processing at the beginning of the
     * source run.  The default implementation does nothing.
     */
    async source_initialize_run()
    {
    }

    /**
     * Reimplement to perform any required processing at the end of the source
     * run.  The default implementation does nothing.
     */
    async source_finalize_run()
    {
    }

    /**
     * Reimplement to actually retrieve a chunk of citation keys/IDs.
     *
     * Consider using the utility method `fetch_url()` if you need to read data
     * from a local file path or from a remote URL.
     *
     * Once the citation information for a citation key/ID is retrieved, then we
     * need to call ``await this.citation_manager.store_citation(...)``.  See
     * the corresponding documentation for :class:`CitationManager`.  Use the
     * cite prefix stored in `this.cite_prefix`.  Don't forget to pass on the
     * options stored in `this.cache_store_options`!
     *
     */
    async run_retrieve_chunk(/*id_list*/)
    {
        throw new Error(`The method run_retrieve_chunk() must be reimplemented by subclasses!`);
    }

}
