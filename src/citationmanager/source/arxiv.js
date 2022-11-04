import fs from 'fs';

import jsyaml from 'js-yaml';

import FeedParser from 'feedparser';

import { parseFullName } from 'parse-full-name';

import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.source.arxiv');


import { CitationSourceBase } from './base.js';


export class CitationSourceArxiv extends CitationSourceBase
{
    constructor(options)
    {
        options ||= {};
        const chain_to_doi = options.chain_to_doi ?? true;

        const override_options = {
            chains_to_sources: chain_to_doi ? ['doi'] : [],
            source_name: 'ArXiv API citation info source',
        };
        const default_options = {
            chunk_retrieve_delay_ms: 3100,
            cite_prefix: 'arxiv',
            cache_duration_ms: 10 * 24*3600*1000, // 10 days for arXiv entries by default
        };

        super(
            override_options,
            options,
            default_options,
        );

        this.chain_to_doi = chain_to_doi;
        this.data_for_versionless_arxivid = {};

        this.override_arxiv_dois_file = this.options.override_arxiv_dois_file || null;
        this.override_arxiv_dois = this.options.override_arxiv_dois || {};
    }

    add_retrieve(ids)
    {
        super.add_retrieve(ids);

        Object.assign(
            this.data_for_versionless_arxivid,
            Object.fromEntries(
                ids.filter( (id) => ! /v\d+$/i.test(id) )
                    .map( (id) => [id, []] )
            )
        );

    }

    source_initialize_run()
    {
        if (this.override_arxiv_dois_file) {
            Object.assign(
                this.override_arxiv_dois,
                // should work with both YAML & JSON given that JSON is a YAML subset
                jsyaml.load(fs.readFileSync(this.override_arxiv_dois_file))
            );
        }
    }

    async run_retrieve_chunk(id_list)
    {
        debug(`Running arXiv.org API retrieve for a chunk of ${id_list.length} IDs`);

        let response = await this.fetch_url( 'https://export.arxiv.org/api/query', {
            method: 'post',
            body: `max_results=${id_list.length}&id_list=${id_list.join(',')}`,
            headers: Object.assign({}, this._get_default_headers(), {
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        } );
        if (response.status !== 200) {
            console.error(response);
            throw new Error(`Fetching arXiv.org API, bad status code ${response.status}.`);
        }

        let _articles = [];

        await new Promise( (resolve, reject) => {
            let feedparser = new FeedParser();
            feedparser.on('error', (err) => {
                console.error(`Error parsing arXiv API's response: ${err}`);
                reject("Error parsing arXiv API's response");
            });
            feedparser.on('end', () => {
                debug('done parsing this chunk from arXiv API');
                resolve();
            });
            feedparser.on('readable', function () { // not arrow function, need 'this'
                let stream = this;
                let article;
                while (article = stream.read()) {
                    _articles.push(article);
                }
            });
            response.body.pipe(feedparser);
        } );

        // parse retreived articles
        for (const article of _articles)
        {
            this.handle_arxiv_article_response(article);
        }
    }

    get_author_csl(author_name)
    {
        const parts = parseFullName(author_name, 'all');
        let authorobj = {};
        authorobj.given = parts.first || '';
        if (parts.middle) {
            authorobj.given += ' ' + parts.middle;
        }
        authorobj.family = parts.last || '';
        if (parts.suffix) {
            authorobj.family += ' ' + parts.suffix;
        }
        return authorobj;
    }

    handle_arxiv_article_response(atom_article)
    {
        const arxivurl = atom_article['atom:id']['#'];
        const m = _arxivurlregexp.exec(arxivurl);
        if (m === null) {
            throw new Error(`Retreived arXiv entry does not have a valid id URL: `
                            +`‘${arxivurl}’, in ${JSON.stringify(atom_article)}`);
        }

        const arxivid = m.groups.arxivid;
        const arxivversionnum = m.groups.versionnum ? parseInt(m.groups.versionnum) : null;
        
        const issued_date = atom_article.date;

        const arxivid_with_version =
              arxivid + (arxivversionnum ? `v${arxivversionnum}` : '');

        const title = atom_article['title'];

        let author = atom_article['atom:author'];
        if (author.hasOwnProperty('name')) {
            author = [ author ];
        }

        const author_names = author.map( (authorobj) => authorobj.name['#'] );
        const author_csl = author_names.map(
            (author_name) => this.get_author_csl(author_name)
        );

        debug(`Got arXiv entry for ‘${arxivid}’: `
                     + `“${author_names.join(', ')}; ${title}”`);
        
        let doi = null;
        if (this.override_arxiv_dois.hasOwnProperty(arxivid)) {
            doi = this.override_arxiv_dois[arxivid];
        } else if (atom_article['arxiv:doi']) {
            doi = atom_article['arxiv:doi']['#'] || null;
        }

        const citeprocjsond = {
            // No need to specify `id` in JSON entry, will be added automatically
            // by citation manager:
            //id: `arxiv:${arxivid_with_version}`,
            type: 'article-journal',
            author: author_csl,
            title: title,
            issued: {
                'date-parts': [[
                    issued_date.getFullYear(), // NOT getYear()!
                    1+issued_date.getMonth(), // month is zero-based
                    issued_date.getDate(), // but date of the month is 1-based. NOT getDay()!
                ]],
            },
            doi: doi,
            arxivid: arxivid,
            arxiv_version_number: arxivversionnum,
        };

        // check if we were meant to look up the entry by ID with or without
        // version number
        if ( this.keys_to_retrieve.includes(arxivid_with_version) ) {
            // definitly store this entry directly, since this specific version
            // was requested.
            //
            // If a specific version was requested, we don't chain the citation
            // resolution to the DOI entry, because we want to print the info
            // associated with that specific arXiv version.
            this.citation_manager.store_citation(
                this.cite_prefix, arxividkey, citeprocjsond, this.cache_store_options
            );
        }

        if (this.data_for_versionless_arxivid.hasOwnProperty(arxivid)) {
            // the ID w/o version number was requested (possibly in addition to
            // the one with version number).  Store this result as a candidate
            // for that version.
            //
            // we'll store this citation using the store callback once we've
            // resolved which version to store.
            this.data_for_versionless_arxivid[arxivid].push(citeprocjsond);
        }
    }

    call_store_callback(arxividkey, citeprocjsond)
    {
        if (this.chain_to_doi && citeprocjsond.doi) {
            // chain citation call to DOI access
            this.citation_manager.store_citation_chained(
                this.cite_prefix, arxividkey,
                'doi', citeprocjsond.doi,
                { arxivid: arxividkey },
                this.cache_store_options
            );
        } else {
            this.citation_manager.store_citation(
                this.cite_prefix, arxividkey, citeprocjsond, this.cache_store_options
            );
        }
    }

    source_finalize_run()
    {
        debug(`Finalizing arXiv citation entries’`);

        for (const [arxivid,versionslist]
             of Object.entries(this.data_for_versionless_arxivid))
        {
            if (!versionslist || !versionslist.length) {
                console.error(
                    `No arXiv data received for arXiv id ‘${arxivid}’, what happened?!?`
                );
                throw new Error(`No arXiv data found for ‘${arxivid}’`);
            }
            const last_version_jsond = versionslist.reduce(
                (best, current) => {
                    if (best === null && current) {
                        return current;
                    }
                    // "arxiv_version_number === null" only happens if arXiv API
                    // responded with an article whose ID didn't have a version
                    // number -> use that one directly as it is the answer to
                    // our retrieve!
                    if (best.arxiv_version_number === null) {
                        return best;
                    }
                    if (current.arxiv_version_number === null) {
                        return current;
                    }
                    if (current.arxiv_version_number >= best.arxiv_version_number) {
                        return current;
                    }
                    return best;
                },
                null
            );
            this.call_store_callback(arxivid, last_version_jsond);
        }
    }

};

const _arxivurlregexp =
  /^https?:\/\/arxiv.org\/abs\/(?<arxivid>.*?)(?<versionnumstr>v(?<versionnum>\d+))?$/i;

