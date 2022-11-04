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
            chunk_retrieve_delay_ms: 0,
        };
        const default_options = {
            cite_prefix: 'bib',
            cache_duration_ms: true, // true == means auto-detect if we have remotes
        };

        super(
            override_options,
            options,
            default_options,
        );

        let have_remote = false;

        this.bibliography_files = this.options.bibliography_files;
        if (this.bibliography_files == null) { // undefined or null
            throw new Error(`You need to specify option {bibliography_files: ...}`);
        }
        this.bibliography_files_url = this.bibliography_files.map( (bibfile) => {
            const url = new URL(bibfile, 'file://'+path.resolve('.')+'/');
            if (url.protocol !== 'file:') {
                have_remote = true;
            }
            return url.href;
        } );
        this.bibdata = {};

        if (this.options.cache_duration_ms === true) {
            // auto-detect cache duration time.
            if (have_remote) {
                this.options.cache_duration_ms = 3*60*1000; // 3 minutes
            } else {
                this.options.cache_duration_ms = 60*1000; // 60 seconds
            }
        }
    }

    source_initialize_run()
    {
        this.bibdata = {};
        
        for (const bib_file_url of this.bibliography_files_url) {

            let newbibdata = {};

            // load bibliography file to memory
            const bib_data_contents = this.fetch_url( bib_file_url );
            if ( /\.ya?ml$/i.test( bib_file_url ) ) {
                newbibdata = jsyaml.load( bib_data_contents );
            } else {
                newbibdata = JSON.parse( bib_data_contents );
            }

            Object.assign(this.bibdata, newbibdata);
        }
    }

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {
            const d = this.bibdata[key];
            if (typeof d == 'undefined' || d === null || !d) {
                throw new Error(
                    `No such citation key ‘${key}’ in `
                    + `‘${this.bibliography_files.join('’,‘')}’ `
                    + `(for prefix ‘{this.cite_prefix}’)`
                );
            }
            this.citation_manager.store_citation(
                this.cite_prefix, key,
                d,
                { cache_duration_ms: this.options.cache_duration_ms },
                this.cache_store_options
            );
        }
    }

};
