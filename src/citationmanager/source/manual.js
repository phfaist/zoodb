import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.manual');


import { CitationSourceBase } from './base.js';

export class CitationSourceManual extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'Manual citation info source',
            chunk_size: Infinity,
            chunk_retrieve_delay_ms: 0,
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

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {

            this.citation_manager.store_citation(
                this.cite_prefix, key,
                {
                    _ready_formatted: {
                        llm: key
                    }
                },
                {
                    // do not keep in cache (it will stay though long enough for
                    // the zoo to be built)
                    cache_duration_ms: 0,
                }
            );

        }
    }

};
