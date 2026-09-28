// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.manual');


import { CitationSourceBase } from './base.js';

/**
 * A citation "source" which interprets the "ID" directly as the FLM text
 * content of the citation.  The resulting entries are of the form
 * ``{ _ready_formatted: { flm: <key> } }`` and are only kept in memory for the
 * current run (they are never written to the cache file).
 *
 * This source is the ``manual`` source of the Rust ``autocitefetch`` crate
 * (with format ``'flm'``); keys are used verbatim (not even trimmed).
 *
 * See :class:`CitationSourceBase` for options.  The method
 * ``run_retrieve_chunk()`` of earlier versions was removed.
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
     * citation manager: ``{ kind: 'manual', prefix, format: 'flm', ttlMs: 0 }``.
     *
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
