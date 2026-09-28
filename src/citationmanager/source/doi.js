// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.doi');

import { CitationSourceBase } from './base.js';
import { builtin_spec_overrides } from './_specutil.js';


const one_day = 1000 * 3600 * 24;


/**
 * Fetch bibliographic citation information from a DOI (cf. https://doi.org/).
 *
 * The retrieval itself is performed by the ``doi`` source of the Rust
 * ``autocitefetch`` crate (CSL-JSON content negotiation with doi.org, one DOI
 * per request, at least 1.1 s between two requests, entries cached for 360
 * days by default).  DOI keys are normalized to lowercase in the cache.  The
 * ``reference`` field is dropped from the CSL-JSON data (see the citation
 * manager's ``drop_csl_fields`` option).
 *
 * Options ``chunk_retrieve_delay_ms`` and ``cache_duration_ms`` (or
 * ``cache_store_options.cache_duration_ms``), if specified, override the
 * crate's defaults; ``chunk_size`` is always 1.  See
 * :class:`CitationSourceBase` for further options.
 *
 * The method ``run_retrieve_chunk()`` of earlier versions was removed (the
 * crate performs the requests).
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
     * citation manager: ``{ kind: 'doi', prefix, chunkSize: 1, ... }``.
     *
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
