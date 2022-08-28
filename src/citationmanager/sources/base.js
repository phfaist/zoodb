import _zoologger from '../../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.citationmanager.sources.base'});

import fs from 'fs';
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
        this.keys_to_query = [];
        this.keys_to_query_remaining = [];

        this.options = Object.assign({}, default_options, options || {}, override_options);

        this.total_queried = 0;

        this.chunk_size = this.options.chunk_size || 512;
        this.chunk_query_delay_ms = this.options.chunk_query_delay_ms || 1000;

        // When we queried all the IDs but the _query_more_done flag is not set,
        // we wait this amount of time (ms) before checking if we have new IDs
        // to query or if we're done
        this.waiting_poll_timeout_ms = this.options.waiting_poll_timeout_ms || 500;

        this.cite_prefix = this.options.cite_prefix;
        this.chains_to_sources = this.options.chains_to_sources || [];
        this.source_name = this.options.source_name || '<unknown source>';

        this._query_more_done = false;

        this._running = false;
    }

    set_citation_manager(citation_manager, cite_prefix)
    {
        this.citation_manager = citation_manager;
        this.cite_prefix = cite_prefix;
    }

    add_query(ids)
    {
        this.keys_to_query.push(...ids);
        this.keys_to_query_remaining.push(...ids);
        this._query_more_done = false;
    }

    add_query_done()
    {
        this._query_more_done = true;
    }

    async run()
    {
        if (this._running) {
            logger.debug(`Call to run() ignored as citation source is already run()ning`);
            return;
        }
        try {
            this._running = true;

            this.source_initialize_run();

            let last_chunk_query_hrtime = null;

            logger.info(`${this.source_name}: there are `
                        + `${this.keys_to_query_remaining.length} citation(s) to query`);
            while (true) {

                if (this.keys_to_query_remaining.length) {

                    // if applicable, wait before another chunk query call
                    if (this.chunk_query_delay_ms && last_chunk_query_hrtime !== null) {
                        const dt = process.hrtime( last_chunk_query_hrtime );
                        const dt_ms = (1000*dt[0]+dt[1]/1000000);
                        const dt_ms_to_wait = this.chunk_query_delay_ms - dt_ms;
                        if (dt_ms_to_wait > 0) {
                            await timeout( dt_ms_to_wait );
                        }
                    }

                    // create a chunk of IDs to query
                    const ids = this.keys_to_query_remaining.splice(0, this.chunk_size);

                    // query the chunk
                    last_chunk_query_hrtime = process.hrtime();
                    await this.run_query_chunk(ids);

                    // bookkeeping & logging
                    this.total_queried += ids.length;
                    logger.info(
                        `${this.source_name}: `
                        + `${this.total_queried}/${this.keys_to_query.length}`
                    );
                }

                if (this.keys_to_query_remaining.length == 0) {
                    if (this._query_more_done) {
                        // we're done!
                        break;
                    }
                    // check again in 500ms, until we have more entries to query
                    // or until we're actually done
                    await timeout(this.waiting_poll_timeout_ms);
                }
            }

            this.source_finalize_run();
        } finally {
            this._running = false;
        }
    }

    // helper: provide default query headers for remote queries
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
    fetch_url(url, fetch_options)
    {
        logger.debug(`Fetching URL ‘${url}’ ...`);
        if (url.startsWith('file://')) {
            // a local file.
            const urlobj = new URL(url);
            return fs.readFileSync(urlobj.pathname);
        }
        return fetch(url, fetch_options);
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
    async run_query_chunk()
    {
        throw new Error(`The method run_query_chunk() must be reimplemented by subclasses!`);
    }

};
