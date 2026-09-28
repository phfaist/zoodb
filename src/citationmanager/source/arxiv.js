import jsyaml from 'js-yaml';

import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.arxiv');


import { CitationSourceBase } from './base.js';
import { builtin_spec_overrides } from './_specutil.js';


const _rx_arxiv = /^(\d{4}\.\d{4,}|[a-zA-Z.-]+\/\d{7})(v\d+)?$/;

/**
 * Return `true` if `arxivid` looks like a valid arXiv identifier (e.g.,
 * ``2101.01234``, ``quant-ph/9705052`` or ``2101.01234v2``), and `false`
 * otherwise.
 *
 * @param {string} arxivid
 * @returns {boolean}
 */
export function check_valid_arxiv_id(arxivid)
{
    return _rx_arxiv.test(arxivid); // returns true or false
}

/**
 * Fetch bibliographic citation information from `the arXiv
 * <https://arxiv.org/>`_, for citations such as ``arxiv:2101.01234`` or
 * ``arxiv:quant-ph/9705052`` (a version suffix such as ``v2`` is allowed).
 * Malformed identifiers are reported as failures without any request being
 * made.
 *
 * By default, the arXiv API is queried for up to 100 identifiers at a time,
 * with at least 3.1 seconds between queries, and entries are kept in the cache
 * for 10 days.
 *
 * Options:
 *
 * - ``chain_to_doi`` - If `true` (the default), the citation of a paper that
 *   has a DOI (i.e., that has been published) is redirected to the entry of
 *   that DOI in the ``doi`` source, so that the published version is cited.
 *   The DOI entry receives the additional property ``arxivid``.  The ``doi``
 *   source must then be registered with the citation manager.
 *
 * - ``override_arxiv_dois``, ``override_arxiv_dois_file`` - Correct the DOIs
 *   of arXiv papers whose DOI is missing or wrong on the arXiv.
 *   `override_arxiv_dois` is an object mapping arXiv identifiers to DOIs (or
 *   to `null`, to cite the arXiv entry even if the paper has a DOI).
 *   `override_arxiv_dois_file` is the path (relative to `fsRootFilePath`) or
 *   URL of a YAML or JSON file containing such a mapping.  The file is read
 *   when the citation manager is initialized.  Entries of
 *   `override_arxiv_dois` take precedence over those of the file.
 *
 * - ``chunk_size``, ``chunk_retrieve_delay_ms``, ``cache_duration_ms`` (or
 *   ``cache_store_options.cache_duration_ms``) - Override the defaults above.
 *
 * - ``api_get_method`` - Obsolete; only ``'get'`` is supported.
 *
 * - See :class:`CitationSourceBase` for further options.
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
     * Reject malformed arXiv identifiers (see :func:`check_valid_arxiv_id`).
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
     * Return the DOI overrides: the contents of `override_arxiv_dois_file` (if
     * set), updated with the entries of `override_arxiv_dois`.
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
     * retrieval engine: ``{ kind: 'arxiv', prefix, chainDoisTo, overrideDois,
     * ... }``.
     *
     * @private
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
