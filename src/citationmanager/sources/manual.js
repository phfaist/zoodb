import _zoologger from '../../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.citationmanager.sources.manual'});


import { CitationSourceBase } from './base.js';

export class CitationSourceManual extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'Manual citation info source',
            chunk_size: Infinity,
            chunk_query_delay_ms: 0,
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

    async run_query_chunk(id_list)
    {
        for (const key of id_list) {

            this.citation_manager.store_citation(
                this.cite_prefix, key,
                {
                    _formatted_llm_text: key
                }
            );
        }
    }

};
