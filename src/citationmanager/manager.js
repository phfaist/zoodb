import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.citationmanager.manager'});


import fs from 'fs';


import { Cache } from './_cache.js';


const one_day = 1000 * 3600 * 24;


export class CitationDatabaseManager
{
    /**
     *
     * Possible options:
     *
     * - cache_file
     *
     * - cache_entry_duration_ms
     *
     * - default_use_user_agent, default_user_agent
     */
    constructor(sources, options)
    {
        this.options = options || {};

        this.sources = Object.assign(sources);

        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            source.set_citation_manager( this, cite_prefix );
        }

        this.cache_file = this.options.cache_file || 'downloaded_citationinfo_cache.json';
        this.cache_entry_duration_ms = this.options.cache_entry_duration_ms || 30*one_day;
        this.cache = new Cache();

        this.load_cache();

        logger.debug(`Citation database will be regularly saved back to the `
                     + `cache file ‘${this.cache_file}’`);
    }

    load_cache()
    {
        if ( fs.existsSync(this.cache_file) ) {
            const json_data = fs.readFileSync(this.cache_file);
            this.cache.importJson(json_data);
            logger.debug(`Loaded citations cache from ‘${this.cache_file}’ `
                         + `(${this.cache.size()} items)`);
        }
    }

    save_cache()
    {
        // logger.debug(`Saving database to cache file ‘${this.cache_file}’`);
        // to this.cache_file
        fs.writeFileSync(this.cache_file, this.cache.exportJson());
    }

    get_citation_by_id(id)
    {
        let new_id = id;
        let cite_obj;
        while (true) {
            // logger.debug(`get_citation_by_id() -> cache get ${JSON.stringify(id)}`);
            cite_obj = this.cache.get(new_id);
            if ( ! cite_obj.chained ) {
                if (cite_obj.id != id) {
                    // as a result of chained objects, the last object's id
                    // field does not match the queried ID.  So fix it
                    return Object.assign({}, cite_obj, {id: id});
                }
                return cite_obj;
            }
            // chain!
            new_id = `${cite_obj.chained.cite_prefix}:${cite_obj.chained.cite_key}`;

            // logger.debug(`   --> chained to ${id} (via ${JSON.stringify(cite_obj)})`);
        }
    }

    get_citation(cite_prefix, cite_key)
    {
        const id = `${cite_prefix}:${cite_key}`;
        return this.get_citation_by_id(id);
    }

    keys()
    {
        return this.cache.keys();
    }

    async query_citations(citations)
    {
        // group citations by (lowercase) cite_prefix

        let keys_to_query = Object.fromEntries(
            Object.keys(this.sources).map( (cite_prefix) => [cite_prefix, new Set()] )
        );
        let process_citations = [...citations];
        while (process_citations.length)
        {
            const c = process_citations.pop();
            const {cite_prefix, cite_key} = c;

            //logger.debug(`Citation object is ${JSON.stringify(c)}`);
            
            if (!keys_to_query.hasOwnProperty(cite_prefix)) {
                throw new Error(
                    `No source registered for cite prefix ‘${cite_prefix}’ `
                    `(citation encountered in ${c.encountered_in.what})`
                );
            }

            const d = this.cache.get( `${cite_prefix}:${cite_key}` );
            if (d === null) {
                keys_to_query[cite_prefix].add( cite_key );
            }
            // if we already have an entry for this citation, there's no need to
            // query it.

            // Check if this citation is chained to another citation source; we
            // might need to process that one, too.
            if (d !== null && d.chained) {
                process_citations.push({
                    cite_prefix: d.chained.cite_prefix,
                    cite_key: d.chained.cite_key,
                    encountered_in: {
                        what: `Chained from ‘${cite_prefix}:${cite_key}’`,
                    }
                });
            }
        }

        // now, run the sources

        let source_run_promises = {};

        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            source.add_query( Array.from(keys_to_query[cite_prefix]) );
            source_run_promises[cite_prefix] = source.run();
        }

        // Figure out the order in which we can tell sources they're done.
        // Instead of any fancy graph dependency algorithm, simply go through
        // each source and see if it has dependents.
        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            let parent_chainers_promises = [];
            for (const [other_cite_prefix, other_source] of Object.entries(this.sources)) {
                if (other_source.chains_to_sources.includes(cite_prefix)) {
                    parent_chainers_promises.push( source_run_promises[other_cite_prefix] );
                }
            }
            if ( ! parent_chainers_promises.length ) {
                // there's no one feeding additional entries to this source, so
                // we end it right away
                source.add_query_done();
            } else {
                Promise.all( parent_chainers_promises ).then( () => {
                    source.add_query_done();
                } );
            }
        }

        await Promise.all( Object.values(source_run_promises) );
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

        logger.debug(`Storing citation for ‘${cite_prefix}:${cite_key}’`); // --- ${JSON.stringify(entry_csl_json)}`);

        if (entry_csl_json.chained) {
            const new_cite_prefix = entry_csl_json.chained.cite_prefix;
            const new_cite_key = entry_csl_json.chained.cite_key;

            if ( ! this.sources.hasOwnProperty(new_cite_prefix) ) {
                throw new Error(
                    `No source registered for cite prefix ‘${new_cite_prefix}’ in `
                    + `chained citation retreival for ‘${cite_prefix}:${cite_key}’`
                );
            }

            // if it's a chained citation retreival (e.g., arXiv->DOI), then
            // make sure we add this one to the stuff we need to query
            this.sources[new_cite_prefix].add_query( [ new_cite_key ] );
        }

        const entry = Object.assign({}, entry_csl_json, { id: cite_id });
        //logger.debug(`Storing entry ${JSON.stringify(entry)}`);

        this.cache.put(
            cite_id,
            entry,
            this.cache_entry_duration_ms
        );

        // save cache at each store
        this.save_cache();
    }

};
