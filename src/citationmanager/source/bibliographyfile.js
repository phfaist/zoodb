// import debug_module from 'debug';
// const debug = debug_module('zoodb.citationmanager.source.bibliographyfile');

import { CitationSourceBase } from './base.js';
import { refresh_batching_spec_override } from './_specutil.js';

import { path_or_url_to_url } from '../../util/url.js';


/**
 * Look up citations in one or several bibliography files.  Each file is a
 * JSON or YAML file containing an object that maps citation keys to CSL-JSON
 * entries, e.g.:
 *
 * .. code-block:: yaml
 *
 *    Smith1943:
 *      type: article-journal
 *      title: "On weird stuff"
 *      author: [ { family: Smith, given: A. } ]
 *      container-title: "Journal of Weird Stuff"
 *      issued: { date-parts: [ [ 1943 ] ] }
 *
 * An entry may instead provide its citation text directly, in FLM, as
 * ``_ready_formatted: { flm: "..." }``.
 *
 * Entries are kept in the cache for a short time only (see
 * `cache_duration_ms`), so that edits to the files are picked up.
 *
 * Options:
 *
 * - ``bibliography_files`` - Required.  The list of bibliography files, as
 *   local paths (relative to ``fsRootFilePath``) or URLs.
 *
 * - ``cache_duration_ms`` - How long entries are kept in the cache, in
 *   milliseconds.  Default: 60 seconds if all files are local, 3 minutes
 *   otherwise.
 *
 * - See :class:`CitationSourceBase` for further options.
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
     * retrieval engine: ``{ kind: 'bib', prefix, files, format: 'auto', ttlMs
     * }``.
     *
     * @private
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
            ...refresh_batching_spec_override(this),
        };
    }

}
