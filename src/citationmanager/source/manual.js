// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.manual');


import { CitationSourceBase } from './base.js';

/**
 * A citation source whose keys are the citation text itself, in FLM, as in
 * ``\cite{manual:{A. Smith et al., \emph{J. Weird Stuff} 12, 1003 (1943)}}``.
 * The key is used verbatim.  Nothing is fetched, and the entries (of the form
 * ``{ _ready_formatted: { flm: <key> } }``) are not written to the cache.
 *
 * See :class:`CitationSourceBase` for options.
 */
export class CitationSourceManual extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'Manual citation info source',
            chunk_size: Infinity,
            chunk_retrieve_delay_ms: 0,

            cache_store_options: {
                // do not keep in cache (it will stay though long enough for the
                // zoo to be built)
                cache_duration_ms: 0,
            },
        };
        const default_options = {
            cite_prefix: 'manual',
        };

        super(
            override_options,
            options,
            default_options,
        );

    }

    /**
     * Return the ``manual`` source specification for the ``autocitefetch``
     * retrieval engine: ``{ kind: 'manual', prefix, format: 'flm', ttlMs: 0 }``.
     *
     * @private
     * @returns {Promise<Object>}
     */
    async get_autocitefetch_spec()
    {
        return {
            kind: 'manual',
            prefix: this.cite_prefix,
            format: 'flm',
            ttlMs: 0,
        };
    }

}
