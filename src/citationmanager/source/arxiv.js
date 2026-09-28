import jsyaml from 'js-yaml';

import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.arxiv');


import { CitationSourceBase } from './base.js';
import { builtin_spec_overrides } from './_specutil.js';


const _rx_arxiv = /^(\d{4}\.\d{4,}|[a-zA-Z.-]+\/\d{7})(v\d+)?$/;

/**
 * Checks if the `arxivid` looks like a valid arXiv identifier by testing it
 * against a regular expression.  Use this function to catch malformed arXiv
 * IDs before querying them to the server.
 */
export function check_valid_arxiv_id(arxivid)
{
    return _rx_arxiv.test(arxivid); // returns true or false
}

/**
 * Fetch bibliographic citation information from `the arXiv
 * <https://arxiv.org/>`_.
 *
 * The retrieval itself is performed by the ``arxiv`` source of the Rust
 * ``autocitefetch`` crate (arXiv API queries with the GET method, chunks of
 * 100 identifiers, at least 3.1 s between two queries, entries cached for 10
 * days by default).  This class describes that source; see
 * `get_autocitefetch_spec()`.
 *
 * Options:
 *
 * - ``chain_to_doi`` - If `true` (the default), then arXiv identifiers that
 *   refer to papers which have a DOI, i.e., which have been published in some
 *   publication venue, will be “chained” to the corresponding DOI citation.
 *   The chained citation has the `cite_prefix` 'doi' and carries the
 *   additional property ``arxivid``.
 *
 * - ``override_arxiv_dois``, ``override_arxiv_dois_file`` - Manually specify a
 *   list of DOIs that should be associated with certain arXiv IDs.  The
 *   `override_arxiv_dois` is an object whose keys are arXiv IDs and whose
 *   values are the corresponding DOI (or `null` to prevent chaining to a DOI).
 *   For a given arXiv identifier, if it is found in this object, then the DOI
 *   specified here overrides the DOI value that was fetched from the arXiv's
 *   API.  Instead of (or in addition to) `override_arxiv_dois`, you may set
 *   `override_arxiv_dois_file` to a local path (relative to
 *   `fsRootFilePath`) or URL of a JSON or YAML file that contains the mapping
 *   of arXiv identifiers to a DOI.  The file is read once, when the citation
 *   manager is initialized; entries of `override_arxiv_dois` take precedence
 *   over those of the file.
 *
 * - ``api_get_method`` - Accepted for compatibility.  Only the GET method is
 *   supported; setting this option to ``'post'`` prints a warning.
 *
 * - ``chunk_size``, ``chunk_retrieve_delay_ms``, ``cache_duration_ms`` (or
 *   ``cache_store_options.cache_duration_ms``) - If specified, override the
 *   defaults of the crate's arXiv source.
 *
 * - See :class:`CitationSourceBase` for further options.
 *
 * Malformed arXiv identifiers (see :func:`check_valid_arxiv_id`) are reported
 * as failures by the citation manager without any request being made (see
 * `validate_cite_key()`).
 *
 * Since the crate now parses the arXiv API responses, this class no longer
 * overrides ``source_initialize_run()`` (the base class's no-op is inherited;
 * the override file is now read by `load_override_arxiv_dois()`) nor
 * ``source_finalize_run()``.  Methods of earlier versions that were removed:
 * ``add_retrieve()``, ``run_retrieve_chunk()``, ``get_author_csl()``,
 * ``handle_arxiv_article_response()`` and ``call_store_callback()``; also the
 * attribute ``data_for_versionless_arxivid``.
 */
export class CitationSourceArxiv extends CitationSourceBase
{
    constructor(options)
    {
        options ??= {};
        const chain_to_doi = options.chain_to_doi ?? true;

        const api_get_method = options.api_get_method?.toLowerCase() ?? 'get'; // 'get' or 'post'

        const override_options = {
            chains_to_sources: chain_to_doi ? ['doi'] : [],
            source_name: 'ArXiv API citation info source',
        };
        const default_options = {
            // when using 'GET' method, try to keep the URL length below ~2000 chars, so change the default chunk length:
            chunk_size: (api_get_method !== 'post') ? 100 : 512,

            chunk_retrieve_delay_ms: 3100, // respect rate limit of 1 request per 3 seconds from arXiv API
            cite_prefix: 'arxiv',
            cache_duration_ms: 10 * 24*3600*1000, // 10 days for arXiv entries by default
        };

        super(
            override_options,
            options,
            default_options,
        );

        this.chain_to_doi = chain_to_doi;

        this.api_get_method = api_get_method;
        this.override_arxiv_dois_file = this.options.override_arxiv_dois_file ?? null;
        this.override_arxiv_dois = this.options.override_arxiv_dois ?? {};
    }

    /**
     * Reject malformed arXiv identifiers (see :func:`check_valid_arxiv_id`)
     * before any request is made.  If an ID isn't valid (has the wrong number
     * of digits, for instance), then arxiv.org simply responds with a "400 Bad
     * Request" which is tough to debug.
     */
    validate_cite_key(cite_key)
    {
        const arxivid = String(cite_key).trim();
        if ( ! check_valid_arxiv_id(arxivid) ) {
            return `Malformed arXiv identifier: ‘${arxivid}’ [key ‘${this.cite_prefix}:${arxivid}’]`;
        }
        return null;
    }

    /**
     * Load the DOI overrides: the contents of `override_arxiv_dois_file` (if
     * set; read with `fetch_url()` and parsed as YAML, which includes JSON),
     * updated with the entries of `override_arxiv_dois`.
     *
     * @returns {Promise<Object>} A mapping of arXiv ID to DOI (or `null`).
     */
    async load_override_arxiv_dois()
    {
        const overrides = {};
        const add = (mapping, what) => {
            if (mapping == null) {
                return;
            }
            if (typeof mapping !== 'object' || Array.isArray(mapping)) {
                throw new Error(
                    `arXiv DOI overrides (${what}) must be a mapping of arXiv IDs to DOIs`
                );
            }
            for (const [arxivid, doi] of Object.entries(mapping)) {
                overrides[String(arxivid).trim()] = (doi == null) ? null : String(doi).trim();
            }
        };
        if (this.override_arxiv_dois_file) {
            // should work with both YAML & JSON given that JSON is a YAML 1.2 subset
            const contents = await this.fetch_url(this.override_arxiv_dois_file);
            add(jsyaml.load(contents), `file ‘${this.override_arxiv_dois_file}’`);
        }
        add(this.override_arxiv_dois, 'override_arxiv_dois option');
        return overrides;
    }

    /**
     * Return the ``arxiv`` source specification for the ``autocitefetch``
     * citation manager: ``{ kind: 'arxiv', prefix, chainDoisTo, overrideDois,
     * ... }`` with ``chainDoisTo`` ``'doi'`` (or ``null`` if `chain_to_doi` is
     * false) and the DOI overrides of `load_override_arxiv_dois()`.
     *
     * @returns {Promise<Object>}
     */
    async get_autocitefetch_spec()
    {
        if (this.api_get_method === 'post') {
            console.warn(
                `CitationSourceArxiv: api_get_method ‘post’ is not supported any more; `
                + `the arXiv API is queried with GET requests.`
            );
        }

        const spec = {
            kind: 'arxiv',
            prefix: this.cite_prefix,
            chainDoisTo: this.chain_to_doi ? 'doi' : null,
        };

        const override_dois = await this.load_override_arxiv_dois();
        if (Object.keys(override_dois).length) {
            spec.overrideDois = override_dois;
        }
        debug(`arXiv source spec: ${Object.keys(override_dois).length} DOI override(s)`);

        Object.assign(spec, builtin_spec_overrides(this));
        return spec;
    }

}
