import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager');

import fs from 'fs';

import sha256 from 'hash.js/lib/hash/sha/256.js';

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
     * - cache_entry_default_duration_ms
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
        this.cache_entry_default_duration_ms =
            this.options.cache_entry_default_duration_ms || 30*one_day;
        this.cache = new Cache();

        this.load_cache();

        debug(`Citation database will be regularly saved back to the `
              + `cache file ‘${this.cache_file}’`);
    }

    load_cache()
    {
        if ( fs.existsSync(this.cache_file) ) {
            const json_data = fs.readFileSync(this.cache_file);
            this.cache.importJson(json_data);
            debug(`Loaded citations cache from ‘${this.cache_file}’ `
                  + `(${this.cache.size()} items)`);
        }
    }

    save_cache()
    {
        // debug(`Saving database to cache file ‘${this.cache_file}’`);
        // to this.cache_file
        fs.writeFileSync(this.cache_file, this.cache.exportJson());
    }

    purge_expired()
    {
        this.cache.purge_expired();
    }

    get_citation_by_id(id)
    {
        let new_id = id;
        let cite_obj;
        let set_properties_chained = {};
        while (true) {
            // debug(`get_citation_by_id() -> cache get ${JSON.stringify(id)}`);
            cite_obj = this.cache.get(new_id);
            if (cite_obj === null) {
                throw new Error(`Item ${new_id} not found in citations cache`);
            }
            if ( ! cite_obj.chained ) {
                if (cite_obj.id != id) {
                    // as a result of chained objects, the last object's id
                    // field does not match the queried ID.  So fix it
                    return Object.assign({}, cite_obj, set_properties_chained, {id: id});
                }
                return cite_obj;
            }
            // chain!
            new_id = `${cite_obj.chained.cite_prefix}:${cite_obj.chained.cite_key}`;

            // keep track of any new properties that we need to set on the chained object
            Object.assign(set_properties_chained, cite_obj.chained.set_properties || {});

            // debug(`   --> chained to ${id} (via ${JSON.stringify(cite_obj)})`);
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

    async retrieve_citations(citations)
    {
        // group citations by (lowercase) cite_prefix

        let keys_to_retrieve = Object.fromEntries(
            Object.keys(this.sources).map( (cite_prefix) => [cite_prefix, new Set()] )
        );
        let all_citations_to_retrieve_by_prefix = Object.fromEntries(
            Object.keys(this.sources).map( (cite_prefix) => [cite_prefix, [] ] )
        );

        let process_citations = [...citations];
        while (process_citations.length)
        {
            const c = process_citations.pop();
            const {cite_prefix, cite_key} = c;

            //debug(`Citation object is ${JSON.stringify(c)}`);
            
            if (!keys_to_retrieve.hasOwnProperty(cite_prefix)) {
                throw new Error(
                    `No source registered for cite prefix ‘${cite_prefix}’ `
                    `(citation encountered in ${c.encountered_in.what})`
                );
            }

            const d = this.cache.get( `${cite_prefix}:${cite_key}` );
            if (d === null) {
                keys_to_retrieve[cite_prefix].add( cite_key );
                all_citations_to_retrieve_by_prefix[cite_prefix].push( c );
            }
            // if we already have an entry for this citation, there's no need to
            // retrieve it.

            // Check if this citation is chained to another citation source; we
            // might need to process that one, too.
            if (d !== null && d.chained) {
                process_citations.push({
                    cite_prefix: d.chained.cite_prefix,
                    cite_key: d.chained.cite_key,
                    encountered_in: {
                        resource_info: d.chained.encountered_in?.resource_info,
                        what: `Chained from ‘${cite_prefix}:${cite_key}’`,
                    }
                });
            }
        }

        // now, run the sources

        let source_run_promises = {};

        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            source.add_retrieve( Array.from(keys_to_retrieve[cite_prefix]) );
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
                source.add_retrieve_done();
            } else {
                Promise.all( parent_chainers_promises ).then( () => {
                    source.add_retrieve_done();
                } );
            }
        }

        try {

            await Promise.all( Object.values(source_run_promises) );

        } catch (e) {
            //console.error(`Error while fetching citations`);

            // find the failures in `all_citations_to_retrieve_by_prefix` to
            // report usage locations
            // debug('error, will for failed citation search in ',
            //       { all_citations_to_retrieve_by_prefix } );

            const failure_citation_fetch = e.failure_citation_fetch;
            if (failure_citation_fetch != null) {
                const { cite_prefix, cite_keys } = failure_citation_fetch;
                console.error(`Source ‘${cite_prefix}’ failed to fetch IDs:`, cite_keys);
                for (const cite_key of cite_keys) {
                    // find where this id is used???
                    for (const a_citation_to_retrieve
                         of all_citations_to_retrieve_by_prefix[cite_key]) {

                        if (a_citation_to_retrieve.cite_prefix === cite_prefix
                            && a_citation_to_retrieve.cite_key === cite_key
                            && a_citation_to_retrieve.encountered_in != null) {
                            const source_path = (
                                a_citation_to_retrieve.encountered_in
                                    .resource_info?.source_path
                                ?? '(unknown)'
                            );
                            const source_where =
                                  encountered_citation.encountered_in.what ?? '(unknown)';
                            console.error(
                                `Citation ‘${cite_prefix}:${cite_key}’ was encountered in: `
                                + `‘${source_path}’ → ‘${source_where}’`
                            );
                        }
                    }
                }
            }

            throw e;
        }
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

    store_citation(cite_prefix, cite_key, entry_csl_json, {cache_duration_ms}={})
    {
        const cite_id = `${cite_prefix}:${cite_key}`;

        //debug(`Storing citation for ‘${cite_prefix}:${cite_key}’`);

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
            // make we retrieve the chained citation info one as well (unless we
            // happen to already have it in cache)
            const chained_citation_obj =
                  this.cache.get( `${new_cite_prefix}:${new_cite_key}` );
            if (chained_citation_obj == null) {
                this.sources[new_cite_prefix].add_retrieve( [ new_cite_key ] );
            }
        }

        const entry = Object.assign({}, entry_csl_json, { id: cite_id });
        //debug(`Storing entry ${JSON.stringify(entry)}`);

        // compute a hash of the object for later convenience (to see if the
        // citation has changed later)
        entry._hash = this.compute_entry_hash(entry);

        this.cache.put(
            cite_id,
            entry,
            cache_duration_ms ?? this.cache_entry_default_duration_ms
        );

        // save cache at each store
        this.save_cache();
    }



    compute_entry_hash(entry)
    {
        let hasher = sha256();

        let visit = (x) => {
            if (Array.isArray(x)) {
                x.forEach(visit);
            } else if (x instanceof Object) {
                for (const key of Object.keys(x).sort()) {
                    visit(key);
                    visit(x[key]);
                }
            } else {
                hasher.update(x);
            }
        };
        visit(entry);
        return hasher.digest('hex');
    }

};
