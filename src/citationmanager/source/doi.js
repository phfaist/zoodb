// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.doi');

import { CitationSourceBase } from './base.js';


const one_day = 1000 * 3600 * 24;


/**
 * Fetch bibliographic citation information from a DOI (cf. https://doi.org/).
 *
 * See :class:`CitationSourceBase` for options.
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

    async run_retrieve_chunk(id_list)
    {
        if ( id_list.length != 1 ) {
            throw new Error(`doi run_retrieve_chunk(): can only retrieve one DOI at a time, `
                            + `requested ${JSON.stringify(id_list)}`);
        }

        // no trim, might cause mismatch because we'll look up citeprefix:citekey with the spaces...
        const doi = id_list[0]; //.trim();
        
        const doi_encoded = encodeURIComponent(doi);

        let response = await this.fetch_url( 'https://doi.org/' + doi_encoded, {
            get_response_object: true,
            method: 'get',
            headers: Object.assign({}, this._get_default_headers(), {
                // retrieve https://doi.org/<DOI> with Accept: csl+json type-->
                'Accept': 'application/vnd.citationstyles.csl+json',
            }),
        } );
        if (response.status !== 200) {
            console.error(`Error while fetching DOI ‘${doi}’ →`, response);
            throw new Error(`Fetching DOI citation ‘${doi}’ - bad status code.`);
        }

        let csljsondata = await response.json();

        // clean up the data a bit, we don't need the full list of references (!)
        csljsondata.reference = [];

        await this.citation_manager.store_citation(
            this.cite_prefix, doi, csljsondata, this.cache_store_options
        );
    }

}
