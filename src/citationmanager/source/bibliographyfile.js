// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.bibliographyfile');

import { CitationSourceBase } from './base.js';

import { path_or_url_to_url } from '../../util/url.js';


/**
 * A citation source which looks up bibliographic citation information in one or
 * several bibliography files, in JSON-CSL citation format.  The files
 * themselves can be JSON or YAML data files, each containing a mapping of
 * citation keys to CSL-JSON entries (entries may also carry
 * ``_ready_formatted``).
 *
 * This source is the ``bib`` source of the Rust ``autocitefetch`` crate
 * (format ``'auto'``: JSON is tried first, then YAML).  The files are read
 * again (through the citation manager's host fetch) whenever entries need to
 * be retrieved, so that edits are picked up.
 *
 * Options:
 *
 * - ``bibliography_files`` - A list of JSON/CSL (or YAML/CSL) files in which to
 *   look for citations.  Local paths are relative to ``fsRootFilePath``; URLs
 *   are also accepted.  Required.
 *
 * - ``cache_duration_ms`` - How long entries are cached (milliseconds).  The
 *   default value `true` means 60 seconds if all files are local and 3 minutes
 *   if any file is remote.
 *
 * - See :class:`CitationSourceBase` for further options.
 *
 * The methods ``source_initialize_run()`` and ``run_retrieve_chunk()`` of
 * earlier versions were removed (the crate reads and parses the files), as
 * was the attribute ``bibdata``.
 */
export class CitationSourceBibliographyFile extends CitationSourceBase
{
    constructor(options)
    {
        options ??= {};

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

        this.have_remote = false;

        this.bibliography_files = this.options.bibliography_files;
        if (this.bibliography_files == null) { // undefined or null
            throw new Error(`You need to specify option {bibliography_files: ...}`);
        }
        this.bibliography_files_url = this.bibliography_files.map( (bibfile) => {
            const url = path_or_url_to_url(
                bibfile, { fs_root_path: this.options.fsRootFilePath }
            );
            if (url.protocol !== 'file:') {
                this.have_remote = true;
            }
            return url.href;
        } );

        if (this.options.cache_duration_ms === true) {
            // auto-detect cache duration time.
            if (this.have_remote) {
                this.options.cache_duration_ms = 3*60*1000; // 3 minutes
            } else {
                this.options.cache_duration_ms = 60*1000; // 60 seconds
            }
        }
    }

    /**
     * Return the ``bib`` source specification for the ``autocitefetch``
     * citation manager: ``{ kind: 'bib', prefix, files, format: 'auto', ttlMs
     * }`` where ``files`` are the URLs of the bibliography files.
     *
     * @returns {Promise<Object>}
     */
    async get_autocitefetch_spec()
    {
        return {
            kind: 'bib',
            prefix: this.cite_prefix,
            files: [ ...this.bibliography_files_url ],
            format: 'auto',
            ttlMs: this.options.cache_store_options?.cache_duration_ms
                ?? this.options.cache_duration_ms,
        };
    }

}
