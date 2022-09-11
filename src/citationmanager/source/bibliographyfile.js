import path from 'path';

import jsyaml from 'js-yaml';

import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.bibliographyfile');

import { CitationSourceBase } from './base.js';

export class CitationSourceBibliographyFile extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};

        const override_options = {
            source_name: 'Bibliography file citation info source',
            chunk_size: Infinity,
            chunk_query_delay_ms: 0,
        };
        const default_options = {
            cite_prefix: 'bib',
        };

        super(
            override_options,
            options,
            default_options,
        );

        this.bibliography_file = this.options.bibliography_file;
        if (!this.bibliography_file) {
            throw new Error(`You need to specify option {bibliography_file: ...}`);
        }
        if (this.bibliography_file.startsWith('http://')
            || this.bibliography_file.startsWith('https://')
            || this.bibliography_file.startsWith('file://'))
        {
            this.bibliography_file_url = this.bibliography_file;
        } else {
            this.bibliography_file_url = `file://${path.resolve(this.bibliography_file)}`;
        }
        this.bibdata = {};
    }

    source_initialize_run()
    {
        // load bibliography file to memory
        const bib_data_contents = this.fetch_url( this.bibliography_file_url );
        if ( /\.ya?ml$/i.test(this.bibliography_file) ) {
            this.bibdata = jsyaml.load( bib_data_contents );
        } else {
            this.bibdata = JSON.parse( bib_data_contents );
        }
        // if ( /\.json$/i.test(this.bibliography_file) ) {
        // try to parse as JSON by default
        // this.bibdata = JSON.parse( bib_data_contents );
        // } else {
        //     throw new Error(`Unknown file type for path ‘${path}’`);
    }

    async run_query_chunk(id_list)
    {
        for (const key of id_list) {
            const d = this.bibdata[key];
            if (typeof d == 'undefined' || d === null || !d) {
                throw new Error(
                    `No such citation key ‘${key}’ in ‘${this.bibliography_file}’ `
                    + `(for prefix ‘{this.cite_prefix}’)`
                );
            }
            this.citation_manager.store_citation(this.cite_prefix, key, d);
        }
    }

};
