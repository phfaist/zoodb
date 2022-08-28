import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.citationmanager.manager'});


import fs from 'fs';

// we might as well directly use instead fetch('https://doi.org/XXXXX', ... with
// Accept: csl-json type .....)
//
// import { Cite } from '@citation-js/core';
// import '@citation-js/plugin-doi';
// import '@citation-js/plugin-csl';

//let c = new Cite('10.1103/PRXQuantum.3.010329', {forceType:'@doi/id'})
//c.format('bibliography', { template: 'apa', lang: 'en-US', format: 'html' })
//csljson = c.format('data', {type:'object'}) [0];


import { Cache } from 'memory-cache';


const one_day = 1000 * 3600 * 24;


export class CitationDatabaseManager
{
    constructor(fetchers, options)
    {
        options ||= {};

        this.fetchers = Object.assign(fetchers);

        for (const [cite_prefix, fetcher] of Object.entries(this.fetchers))
        {
            fetcher.set_citation_manager( this );
        }

        this.cache_file = options.cache_file || 'downloaded_citationinfo_cache.json';
        this.cache_entry_duration_ms = options.cache_entry_duration_ms || 30*one_day;
        this.cache = new Cache();

        this.load_cache();
    }

    load_cache()
    {
        if ( fs.existsSync(this.cache_file) ) {
            this.cache.importJson(fs.readFileSync(this.cache_file));
        }
    }

    save_cache()
    {
        logger.debug(`Saving database to cache file ‘${this.cache_file}’`);
        // to this.cache_file
        fs.writeFileSync(this.cache_file, this.cache.exportJson());
    }

    async fetch_citations(citations)
    {
        // group citations by (lowercase) cite_prefix

        let to_fetch = Object.fromEntries(
            Object.keys(this.fetchers).map( (cite_prefix) => [cite_prefix, []] )
        );
        for (const c of citations) {
            const {cite_prefix, cite_key} = c;
            
            if (!to_fetch.hasOwnProperty(cite_prefix)) {
                throw new Error(
                    `No fetcher registered for cite prefix ‘${cite_prefix}’ `
                    `(citation encountered in ${c.encountered_in.what})`
                );
            }

            if (this.cache.get( `${cite_prefix}:${cite_key}` ) !== null) {
                // we already have an entry for this citation, no need to fetch it
                continue;
            }

            to_fetch[cite_prefix].push( cite_key );
        }

        // now, run the fetchers

        let fetch_run_promises = {};

        for (const [cite_prefix, fetcher] of Object.entries(this.fetchers))
        {
            fetcher.add_fetch( to_fetch[cite_prefix] );
            fetch_run_promises[cite_prefix] = fetcher.run();
        }

        // Figure out the order in which we can tell fetchers they're done.
        // Instead of any fancy graph dependency algorithm, simply go through
        // each fetcher and see if it has dependents.
        for (const [cite_prefix, fetcher] of Object.entries(this.fetchers))
        {
            let parent_chainers_promises = [];
            for (const [other_cite_prefix, other_fetcher] of Object.entries(this.fetchers)) {
                if (other_fetcher.chains_to_fetchers.includes(cite_prefix)) {
                    parent_chainers_promises.push( fetch_run_promises[other_cite_prefix] );
                }
            }
            if ( ! parent_chainers_promises ) {
                // there's no one feeding additional entries to this fetcher, so
                // we end it right away
                fetcher.add_fetch_done();
            } else {
                Promise.all( parent_chainers_promises ).then( () => {
                    fetcher.add_fetch_done();
                } );
            }
        }

        await Promise.all( Object.values(fetch_run_promises) );
    }


    store_citation_chained(cite_prefix, cite_key, new_cite_prefix, new_cite_key,
                           set_properties)
    {
        this.store_citation(
            cite_prefix,
            cite_key,
            // special JSON entry to store in cache
            {
                chained: {
                    cite_prefix: new_cite_prefix,
                    cite_key: new_cite_key,
                    set_properties: Object.assign({}, set_properties),
                }
            },
        );
    }

    store_citation(cite_prefix, cite_key, entry_csl_json)
    {
        const cite_id = `${cite_prefix}:${cite_key}`;

        logger.debug(`Storing citation for ‘${cite_prefix}:${cite_key}’ --- ${JSON.stringify(entry_csl_json)}`);

        if (entry_csl_json.chained) {
            const new_cite_prefix = entry_csl_json.chained.cite_prefix;
            const new_cite_key = entry_csl_json.chained.cite_key;

            if ( ! this.fetchers.hasOwnProperty(new_cite_prefix) ) {
                throw new Error(
                    `No fetcher registered for cite prefix ‘${new_cite_prefix}’ in `
                    + `chained citation retreival for ‘${cite_prefix}:${cite_key}’`
                );
            }

            // if it's a chained citation retreival (e.g., arXiv->DOI), then
            // make sure we add this one to the stuff we need to fetch
            this.fetchers[new_cite_prefix].add_fetch(
                [ new_cite_key ]
            );
        }

        const entry = Object.assign({}, entry_csl_json, { id: cite_id });
        logger.debug(`Storing entry ${JSON.stringify(entry)}`);

        this.cache.put(
            cite_id,
            entry,
            this.cache_entry_duration_ms
        );

        // save cache at each store
        this.save_cache();
    }

};
