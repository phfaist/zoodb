// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.doi');

import { CitationSourceBase } from './base.js';
import { builtin_spec_overrides } from './_specutil.js';


const one_day = 1000 * 3600 * 24;


/**
 * Fetch bibliographic citation information from `doi.org
 * <https://doi.org/>`_, for citations such as ``doi:10.1103/PhysRevA.52.R2493``.
 * DOIs are case-insensitive; they are stored in lowercase in the cache.
 *
 * By default, DOIs are queried one at a time, with at least 1.1 seconds
 * between requests, and entries are kept in the cache for 360 days.  The
 * ``reference`` field (the list of references of the cited paper) is removed
 * from the entries; see the citation manager's ``drop_csl_fields`` option.
 *
 * Options:
 *
 * - ``chunk_retrieve_delay_ms``, ``cache_duration_ms`` (or
 *   ``cache_store_options.cache_duration_ms``) - Override the defaults above.
 *
 * - See :class:`CitationSourceBase` for further options.
 */
export class CitationSourceDoi extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'DOI citation info source',
            chunk_size: 1, // can only fetch one DOI at a time
        };
        const default_options = {
            chunk_retrieve_delay_ms: 1000,
            cite_prefix: 'doi',
            cache_store_options: {
                cache_duration_ms: 360*one_day, // keep it for a year
            },
        };

        super(
            override_options,
            options,
            default_options,
        );
    }

    /**
     * Return the ``doi`` source specification for the ``autocitefetch``
     * retrieval engine: ``{ kind: 'doi', prefix, chunkSize: 1, ... }``.
     *
     * @private
     * @returns {Promise<Object>}
     */
    async get_autocitefetch_spec()
    {
        return Object.assign(
            { kind: 'doi', prefix: this.cite_prefix, chunkSize: 1 },
            builtin_spec_overrides(this, { chunk_size: false }),
        );
    }

}
