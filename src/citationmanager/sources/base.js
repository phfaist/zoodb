import _zoologger from '../../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.citationmanager.sources.base'});



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




export class CitationFetcherBase
{
    constructor(to_fetch, options, default_options)
    {
        this.to_fetch = [];
        this.to_fetch_remaining = [];

        this.options = Object.assign({}, default_options, options || {});

        this.total_fetched = 0;

        this.chunk_size = this.options.chunk_size || 512;
        this.chunk_fetch_delay_ms = this.options.chunk_fetch_delay_ms || 1000;

        // When we fetched all the IDs but the fetch_more_done flag is not set,
        // we wait this amount of time (ms) before checking if we have new IDs
        // to fetch or if we're done
        this.waiting_poll_timeout_ms = this.options.waiting_poll_timeout_ms || 500;

        this.cite_prefix = options.cite_prefix;
        this.chains_to_fetchers = options.chains_to_fetchers || [];
        this.fetcher_name = options.fetcher_name || '<unknown fetcher>';

        this.fetch_more_done = false;

        this._running = false;
    }

    set_citation_manager(citation_manager)
    {
        this.citation_manager = citation_manager;
    }

    add_fetch(ids)
    {
        this.to_fetch.push(...ids);
        this.to_fetch_remaining.push(...ids);
        this.fetch_more_done = false;
    }

    add_fetch_done()
    {
        this.fetch_more_done = true;
    }

    async run()
    {
        if (this._running) {
            logger.debug(`Call to run() ignored as citation fetcher is already run()ning`);
            return;
        }
        try {
            this._running = true;

            this.fetcher_initialize_run();

            let last_chunk_fetch_hrtime = null;

            logger.info(`${this.fetcher_name}: fetching citations`);
            while (true) {

                if ( this.to_fetch_remaining ) {

                    // if applicable, wait before another chunk fetch call
                    if (this.chunk_fetch_delay_ms && last_chunk_fetch_hrtime !== null) {
                        const dt = process.hrtime( last_chunk_fetch_hrtime );
                        const dt_ms = (1000*dt[0]+dt[1]/1000000);
                        const dt_ms_to_wait = this.chunk_fetch_delay_ms - dt_ms;
                        logger.debug(`Last chuck fetch hrtime is ${last_chunk_fetch_hrtime}; dt_ms since is ${dt_ms}; still need to wait ${dt_ms_to_wait} ms`);
                        if (dt_ms_to_wait > 0) {
                            await timeout( dt_ms_to_wait );
                        }
                    }

                    // create a chunk of IDs to fetch
                    const ids = this.to_fetch_remaining.splice(0, this.chunk_size);

                    // fetch the chunk
                    last_chunk_fetch_hrtime = process.hrtime();
                    await this.fetch_chunk(ids);

                    // bookkeeping & logging
                    this.total_fetched += ids.length;
                    logger.info(
                        `${this.fetcher_name}: ${this.total_fetched}/${this.to_fetch.length}`
                    );
                }

                if (this.to_fetch_remaining.length == 0) {
                    if (this.fetch_more_done) {
                        // we're done!
                        break;
                    }
                    // check again in 500ms, until we have more entries to fetch or
                    // until we're actually done
                    await timeout(this.waiting_poll_timeout_ms);
                }
            }

            this.fetcher_finalize_run();
        } finally {
            this._running = false;
        }
    }

    // -------------

    // can be reimplemented
    fetcher_initialize_run()
    {
    }

    fetcher_finalize_run()
    {
    }


};
