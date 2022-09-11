import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.doi');


import { CitationSourceBase } from './base.js';

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
            chunk_query_delay_ms: 1000,
            cite_prefix: 'doi',
        };

        super(
            override_options,
            options,
            default_options,
        );
    }

    async run_query_chunk(id_list)
    {
        if ( id_list.length != 1 ) {
            throw new Error(`doi run_query_chunk(): can only query one DOI at a time, `
                            + `requested ${JSON.stringify(id_list)}`);
        }
        const doi = id_list[0].trim();
        const doi_encoded = encodeURIComponent(doi);

        let response = await this.fetch_url( 'https://doi.org/' + doi_encoded, {
            method: 'get',
            headers: Object.assign({}, this._get_default_headers(), {
                // query https://doi.org/<DOI> with Accept: csl+json type-->
                'Accept': 'application/vnd.citationstyles.csl+json',
            }),
        } );
        if (response.status !== 200) {
            console.error(result);
            throw new Error('Fetching DOI citation - bad status code.');
        }

        let csljsondata = await response.json();

        // clean up the data a bit, we don't need the full list of references (!)
        csljsondata.reference = [];

        this.citation_manager.store_citation(
            this.cite_prefix, doi, csljsondata
        );
    }

};
