import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.sources.base');

import loMerge from 'lodash/merge.js';

import fetch from 'node-fetch';


export function timeout(ms)
{
    // return new Promise((resolve, reject) => { setTimeout(resolve, ms); });

    let d = {};
    let promise = new Promise( (resolve, reject) => {
        d.resolve = resolve;
        d.reject = reject;
    } );

    const timerId = setTimeout( () => { d.resolve(); }, ms );
    let cancel = () => { clearTimeout(timerId); d.reject(); };

    promise.cancel_timeout = cancel;

    return promise;
    
    // inspired by cancellation token - thanks
    // https://stackoverflow.com/a/30235261/1694896
}




export class CitationSourceBase
{
    constructor(override_options, options, default_options)
    {
        this.keys_to_retrieve = [];
        this.keys_to_retrieve_remaining = [];

        // Apply options in order of precedence.  Object.assign() is not
        // recursive, so make sure that any sub-option trees are assigned
        // correctly, too.
        options ||= {};
        this.options = loMerge(
            {
                fs: {
                    readFileSync(fname) {
                        throw new Error(
                            `You did not specify fs: to your CitationSource `
                            + `instance but the source requested a local file.  You `
                            + `probably want `
                            + `"fs: { readFileSync(fname) { return fs.readFileSync(fname) }}"`
                        );
                    }
                },
                fsRootFilePath: null,

                cache_store_options: {},
            },
            default_options ?? {},
            options,
            override_options ?? {},
        );

        if (this.options.fsRootFilePath != null && this.options.fsRootFilePath != '') {
            this._file_root = `//${this.options.fsRootFilePath}/`;
        } else {
            this._file_root = '';
        }

        this.total_queried = 0;

        this.chunk_size = this.options.chunk_size ?? 512;
        this.chunk_retrieve_delay_ms = this.options.chunk_retrieve_delay_ms ?? 1000;

        // When we queried all the IDs but the _retrieve_more_done flag is not set,
        // we wait this amount of time (ms) before checking if we have new IDs
        // to retrieve or if we're done
        this.waiting_poll_timeout_ms = this.options.waiting_poll_timeout_ms ?? 500;

        this.cite_prefix = this.options.cite_prefix;
        this.chains_to_sources = this.options.chains_to_sources || [];
        this.source_name = this.options.source_name ?? '<unknown source>';

        // e.g. { cache_duration_ms: ... }.  Subclasses should remember to pass
        // this option on in calls to this.citation_manager.store_citation(...,
        // this.cache_store_options)
        this.cache_store_options = this.options.cache_store_options;

        this._retrieve_more_done = false;

        this._running = false;
    }

    set_citation_manager(citation_manager, cite_prefix)
    {
        this.citation_manager = citation_manager;
        this.cite_prefix = cite_prefix;
    }

    add_retrieve(ids)
    {
        this.keys_to_retrieve.push(...ids);
        this.keys_to_retrieve_remaining.push(...ids);
        this._retrieve_more_done = false;
    }

    add_retrieve_done()
    {
        this._retrieve_more_done = true;
    }

    async run()
    {
        if (this._running) {
            debug(`Call to run() ignored as citation source is already run()ning`);
            return;
        }
        try {
            this._running = true;

            this.source_initialize_run();

            let last_chunk_retrieve_hrtime = null;

            debug(`${this.source_name}: there are `
                  + `${this.keys_to_retrieve_remaining.length} citation(s) to retrieve`);
            while (true) {

                if (this.keys_to_retrieve_remaining.length) {

                    // if applicable, wait before another chunk retrieve call
                    if (this.chunk_retrieve_delay_ms && last_chunk_retrieve_hrtime !== null) {
                        const dt = process.hrtime( last_chunk_retrieve_hrtime );
                        const dt_ms = (1000*dt[0]+dt[1]/1000000);
                        const dt_ms_to_wait = this.chunk_retrieve_delay_ms - dt_ms;
                        if (dt_ms_to_wait > 0) {
                            await timeout( dt_ms_to_wait );
                        }
                    }

                    // create a chunk of IDs to retrieve
                    const ids = this.keys_to_retrieve_remaining.splice(0, this.chunk_size);

                    // retrieve the chunk
                    last_chunk_retrieve_hrtime = process.hrtime();
                    try {
                        await this.run_retrieve_chunk(ids);
                    } catch (e) {
                        e.failure_citation_fetch = {
                            source_name: this.source_name,
                            ids: ids,
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
                    // check again in 500ms, until we have more entries to retrieve
                    // or until we're actually done
                    await timeout(this.waiting_poll_timeout_ms);
                }
            }

            this.source_finalize_run();
        } finally {
            this._running = false;
        }
    }

    // helper: provide default retrieve headers for remote queries
    _get_default_headers()
    {
        let headers = {};
        if ( this.options.use_user_agent
             ?? ((this.citation_manager||{}).options||{}).default_use_user_agent
             ?? true ) {
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
        if (this.citation_manager && this.citation_manager.options.default_user_agent) {
            return this.citation_manager.options.default_user_agent;
        }
        return 'ZooDB-Citations-Fetcher/0.1 (https://github.com/phfaist/zoodb)';
    }

    // helper for fetch()
    fetch_url(url, fetch_options=undefined)
    {
        // convert simple fs paths to file:/// URLs
        const urlobj = new URL(url, `file:${this._file_root}`);
        debug(`Fetching URL ‘${urlobj}’ ...`);
        if (urlobj.protocol === 'file:') {
            // a local file.
            return this.options.fs.readFileSync(urlobj.pathname);
        }
        return fetch(urlobj.href, fetch_options);
    }


    // -------------

    // can be reimplemented
    source_initialize_run()
    {
    }

    source_finalize_run()
    {
    }

    // must be reimplemented
    async run_retrieve_chunk()
    {
        throw new Error(`The method run_retrieve_chunk() must be reimplemented by subclasses!`);
    }

};
