import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager');

//import fs from 'fs';

import sha256 from 'hash.js/lib/hash/sha/256.js';

import { Cache, one_day } from './_cache.js';



/**
 * Manage a database of bibliographic references, as well as a collection of
 * source objects that are capable of fetching bibliographic citation
 * information from various sources.
 *
 * The constructor should be given a collection of sources in the first argument
 * (`sources`).  The `sources` should be an object where the keys correspond to
 * a `cite_prefix` and where the values are citation source instances (e.g.,
 * :class:`CitationSourceArxiv` or :class:`CitationSourceBibliographyFile`).
 *
 * Possible options:
 *
 * - ``cache_fs`` - 'fs'-compatible module object to provide filesystem access
 *   for accessing the cache.
 *
 * - ``cache_file`` - the filesystem path where we should store the citation
 *   information cache.
 *
 * - ``cache_entry_default_duration_ms`` - the default duration of time (in
 *   milliseconds) that citation information for an entry should be stored
 *   in cache before being re-queried again from the source.
 *
 * - ``default_use_user_agent``, ``default_user_agent`` - specify defaults
 *   as to whether or not to set a custom user agent when source fetch
 *   remote content, and if so, then which user agent to specify.
 */
export class CitationDatabaseManager
{
    constructor(sources, options)
    {
        this.options = options || {};

        this.sources = Object.assign({}, sources);

        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            source.set_citation_manager( this, cite_prefix );
        }

        this.cache_fs = options.cache_fs;
        this.cache_file =
            this.options.cache_file || '_zoodb_cache_citations_downloaded_info.json';
        this.cache_entry_default_duration_ms =
            this.options.cache_entry_default_duration_ms || 30*one_day;
        this.cache = new Cache();

        this.load_cache();

        debug(`Citation database will be regularly saved back to the `
              + `cache file ‘${this.cache_file}’`);
    }

    /**
     * Load citation information from the cache file.  Does nothing if the cache
     * file does not exist.  This method is automatically called by the
     * constructor.
     */
    load_cache()
    {
        const fs = this.cache_fs;
        if ( fs.existsSync(this.cache_file) ) {
            const json_data = fs.readFileSync(this.cache_file);
            this.cache.importJson(json_data);
            debug(`Loaded citations cache from ‘${this.cache_file}’ `
                  + `(${this.cache.size()} items)`);
        }
    }

    /**
     * Save the current citation information database to the cache file.
     */
    save_cache()
    {
        const fs = this.cache_fs;
        // debug(`Saving database to cache file ‘${this.cache_file}’`);
        // to this.cache_file
        fs.writeFileSync(this.cache_file, this.cache.exportJson());
    }

    /**
     * Remove any citation information entries whose expiration time has past.
     */
    purge_expired()
    {
        this.cache.purge_expired();
    }

    /**
     * Return the citation information associated with the given citation key/id
     * with prefix.  The `id` argument is a string of the form
     * `cite_prefix:cite_key`.
     *
     * This method will look up the given id in the citation database and will
     * follow chained citations as necessary.
     *
     * Returns the JSON/CSL object data associated with the given citation
     * information.
     *
     * An `Error` is thrown if the given id is not found in the current
     * database.
     */
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

    /**
     * Get the citation information object associated with the given
     * `cite_prefix` and `cite_key`.
     *
     * This method is a shorthand for concatenating the citation prefix and key
     * together with a colon and calling `get_citation_by_id()`.
     */
    get_citation(cite_prefix, cite_key)
    {
        const id = `${cite_prefix}:${cite_key}`;
        return this.get_citation_by_id(id);
    }

    /**
     * Return a list of all citation keys available.  The return value is an
     * array of strings of the form `cite_prefix:cite_key`.
     */
    keys()
    {
        return this.cache.keys();
    }

    /**
     * Retrieve a number of citations from the respective sources.
     *
     * This method handles dispatching the citation pairs to the correct sources
     * and calling the relevant methods on the sources (`add_retrieve()`,
     * `run()`, `add_retrieve_done()`, etc.).
     *
     * This method returns a promise.  Make sure you `await` this method if you
     * want to make sure that the citation manager's database is correctly
     * populated.
     *
     * - `citations` is an array of objects of the form ``{cite_prefix:...,
     *   cite_key:...}``.
     */
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
                    + `(citation encountered in ${c.encountered_in?.what})`
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
                        resource_info: c.encountered_in?.resource_info,
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
            // debug('error, will look for failed citation search in ',
            //       { all_citations_to_retrieve_by_prefix } );

            const failure_citation_fetch = e.failure_citation_fetch;
            if (failure_citation_fetch != null) {
                const { cite_prefix, cite_keys } = failure_citation_fetch;
                console.error(`Source ‘${cite_prefix}’ failed to fetch IDs:`, cite_keys);
                for (const cite_key of cite_keys) {
                    // find where this id is used???
                    for (const a_citation_to_retrieve
                         of all_citations_to_retrieve_by_prefix[cite_prefix]) {

                        if (a_citation_to_retrieve.cite_prefix === cite_prefix
                            && a_citation_to_retrieve.cite_key === cite_key
                            && a_citation_to_retrieve.encountered_in != null) {
                            const source_path = (
                                a_citation_to_retrieve.encountered_in
                                    .resource_info?.source_path
                                ?? '(unknown)'
                            );
                            const source_where =
                                  a_citation_to_retrieve.encountered_in.what ?? '(unknown)';
                            console.error(
                                `Citation of ‘${cite_prefix}:${cite_key}’ was encountered in: `
                                + `‘${source_path}’ → ${source_where}`
                            );
                        }
                    }
                }
            }

            throw e;
        }
    }


    /**
     * Store citation information for the associated citation prefix and
     * citation key.
     *
     * This method will update the citation database to associate with the
     * citation prefix/key pair `(cite_prefix, cite_key)` the citation
     * information provided in `entry_csl_json`.  The citation information in
     * `entry_csl_json` should be provided as JSON/CSL object data.
     *
     * To store a “chained” citation, see `store_citation_chained()`.
     *
     * You may specify some options in the fourth argument:
     *
     * - ``cache_duration_ms`` - the number of milliseconds which this
     *   information may be stored in the citation cache.  If it is
     *   resource-intensive to query this citation information, or if the
     *   information is not likely to change any time soon, consider setting a
     *   large value here.  Do this especially if you might be worried about
     *   hitting rate limits of the API wherever you are fetching the citation
     *   information.  On the other hand, you might set a shorter cache duration
     *   for information that is easily fetched or that might change in the near
     *   future.
     *
     */
    store_citation(cite_prefix, cite_key, entry_csl_json, options={})
    {
        const cite_id = `${cite_prefix}:${cite_key}`;

        const {cache_duration_ms} = options;

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

            // if it's a chained citation retreival (e.g., arXiv->DOI), then we
            // retrieve the chained citation info one as well (unless we happen
            // to already have it in cache)
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
        entry._hash = this._compute_entry_hash(entry);

        this.cache.put(
            cite_id,
            entry,
            cache_duration_ms ?? this.cache_entry_default_duration_ms
        );

        // save cache at each store
        this.save_cache();
    }


    /**
     * Store a ‘chained citation.’  The pair `(cite_prefix, cite_key)` is
     * registered to refer to the same citation information as
     * `(new_cite_prefix, new_cite_key)` with any properties given in
     * `set_properties` additionally set.
     *
     * An example of a chained citation would be an arXiv reference to a paper
     * that is published with a DOI.  The arxiv citation source object will
     * query the citation ``('arxiv', '1234.56789')``; if the corresponding
     * entry has a valid DOI, then a chained citation is registered to ``('doi',
     * '10.1234/abcdef')`` with `set_properties` set to ``{ arxivid:
     * 'arxiv:1234.56789' }``.  As a consequence, a citation to
     * `arXiv:1234.56789` will use the citation information that was retrieved
     * from `doi:10.1234/abcdef` with the additional property `arxivid` set.
     */
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




    _compute_entry_hash(entry)
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
