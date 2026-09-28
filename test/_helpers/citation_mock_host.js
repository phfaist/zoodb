// Mock host functions for testing the autocitefetch binding / citation
// manager without network access.
//
// Usage:
//
//     import { make_mock_host } from './_helpers/citation_mock_host.js';
//     const host = make_mock_host();   // fixtures from test/_fixtures/
//     // host.fetch, host.sleep, host.now, host.set_now, host.cacheFs, host.requests
//
// Routing rules of `host.fetch(req)` (req = { url, method, headers, body }):
//
// * `url_map` entries (option): an exact match of `req.url` against a key of
//   `url_map` returns that entry.  The value may be a string or Uint8Array
//   (-> status 200, empty headers) or a full `{status, headers, body}` object
//   (`body` string or Uint8Array).  Checked first.  Useful for `file:` URLs
//   of bibliography files or override files, or to force error statuses.
//
// * arXiv API: `http(s)://export.arxiv.org/api/query?id_list=...` (GET, or POST
//   with an `application/x-www-form-urlencoded` body carrying `id_list`).  The
//   `id_list` is split on commas; each id is looked up (verbatim, after trim)
//   among the fixtures `arxiv_response_<id with / replaced by _>.xml`.  If
//   every id has a fixture, returns 200 with an Atom feed containing the
//   `<entry>` elements of all those fixtures (in the requested order;
//   `opensearch:totalResults` updated).  If any id has no fixture, returns
//   404.  `max_results` is ignored.
//
// * DOI: `http(s)://doi.org/<doi>` or `dx.doi.org`, with an `accept` header
//   containing `application/vnd.citationstyles.csl+json`.  The path is
//   percent-decoded and compared case-insensitively against the `DOI` field of
//   every `doi_response_*.json` fixture (and against the file name
//   convention `doi_response_<doi with / replaced by _>.json`).  Match -> 200
//   with the fixture body.  No match, or no CSL-JSON accept header -> 404.
//
// * Anything else -> { status: 404, headers: {}, body: new Uint8Array() }.
//
// Every request is pushed to `host.requests` before routing.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { make_memory_cache_fs } from '../../src/citationmanager/_cachefs.js';


export const MOCK_HOST_DEFAULT_NOW = 1_700_000_000_000;

const default_fixtures_dir = fileURLToPath(new URL('../_fixtures/', import.meta.url));

const CSL_JSON_MIME = 'application/vnd.citationstyles.csl+json';

const encoder = new TextEncoder();
const decoder = new TextDecoder();


function to_bytes(data)
{
    if (data == null) {
        return new Uint8Array();
    }
    if (typeof data === 'string') {
        return encoder.encode(data);
    }
    return new Uint8Array(data);
}

function not_found()
{
    return { status: 404, headers: {}, body: new Uint8Array() };
}


/**
 * Load the fixtures in `fixtures_dir`.  Returns `{ arxiv: Map<id, xmlString>,
 * doi: Map<lowercaseDoi, Uint8Array> }`.
 */
export function load_citation_fixtures(fixtures_dir = default_fixtures_dir)
{
    if (fixtures_dir instanceof URL) {
        fixtures_dir = fileURLToPath(fixtures_dir);
    }
    const arxiv = new Map();
    const doi = new Map();
    for (const fname of fs.readdirSync(fixtures_dir)) {
        let m = /^arxiv_response_(.+)\.xml$/.exec(fname);
        if (m) {
            const id = m[1].replace(/_/g, '/');
            arxiv.set(id, fs.readFileSync(path.join(fixtures_dir, fname), 'utf-8'));
            continue;
        }
        m = /^doi_response_(.+)\.json$/.exec(fname);
        if (m) {
            const data = new Uint8Array(fs.readFileSync(path.join(fixtures_dir, fname)));
            const by_name = m[1].replace(/_/g, '/').toLowerCase();
            doi.set(by_name, data);
            try {
                const obj = JSON.parse(decoder.decode(data));
                if (typeof obj?.DOI === 'string') {
                    doi.set(obj.DOI.toLowerCase(), data);
                }
            } catch (_err) {
                // not JSON; only reachable by its file name
            }
        }
    }
    return { arxiv, doi };
}


function merge_arxiv_feeds(xmls)
{
    const entry_re = /<entry>[\s\S]*?<\/entry>/g;
    const first = xmls[0];
    const head_end = first.indexOf('<entry>');
    let head = (head_end === -1) ? first.replace(/<\/feed>\s*$/, '') : first.slice(0, head_end);
    const entries = [];
    for (const xml of xmls) {
        entries.push(...(xml.match(entry_re) ?? []));
    }
    head = head.replace(
        /<opensearch:totalResults>\d+<\/opensearch:totalResults>/,
        `<opensearch:totalResults>${entries.length}</opensearch:totalResults>`
    );
    return head + entries.join('\n  ') + '\n</feed>\n';
}


/**
 * Create mock host functions for the citation manager binding.
 *
 * @param {Object} [options]
 * @param {string|URL} [options.fixtures_dir] - Directory with the fixture
 *     files (default: `test/_fixtures/`).
 * @param {Object|Map} [options.url_map] - Exact-URL responses, see the module
 *     comment.
 * @param {number} [options.now] - Initial value returned by `now()`.
 * @returns {{fetch: Function, sleep: Function, now: Function,
 *     set_now: Function, cacheFs: Object, requests: Object[],
 *     sleeps: number[]}}
 */
export function make_mock_host({ fixtures_dir, url_map, now } = {})
{
    const fixtures = load_citation_fixtures(fixtures_dir ?? default_fixtures_dir);
    const url_responses = (url_map instanceof Map)
          ? url_map : new Map(Object.entries(url_map ?? {}));

    const requests = [];
    const sleeps = [];
    let now_value = now ?? MOCK_HOST_DEFAULT_NOW;

    const route_arxiv = (u, req) => {
        let id_list = u.searchParams.get('id_list');
        if (id_list == null && req.method === 'POST' && req.body != null) {
            id_list = new URLSearchParams(decoder.decode(req.body)).get('id_list');
        }
        if (id_list == null || id_list === '') {
            return not_found();
        }
        const ids = id_list.split(',').map( (s) => s.trim() );
        const xmls = [];
        for (const id of ids) {
            const xml = fixtures.arxiv.get(id);
            if (xml === undefined) {
                return not_found();
            }
            xmls.push(xml);
        }
        const xml = (xmls.length === 1) ? xmls[0] : merge_arxiv_feeds(xmls);
        return {
            status: 200,
            headers: { 'content-type': 'application/atom+xml; charset=utf-8' },
            body: encoder.encode(xml),
        };
    };

    const route_doi = (u, req) => {
        const accept = Object.entries(req.headers ?? {})
              .filter( ([k]) => k.toLowerCase() === 'accept' )
              .map( ([, v]) => String(v) ).join(',');
        if (!accept.includes(CSL_JSON_MIME)) {
            return not_found();
        }
        let doi;
        try {
            doi = decodeURIComponent(u.pathname.replace(/^\//, ''));
        } catch (_err) {
            return not_found();
        }
        const data = fixtures.doi.get(doi.toLowerCase());
        if (data === undefined) {
            return not_found();
        }
        return {
            status: 200,
            headers: { 'content-type': CSL_JSON_MIME },
            body: data.slice(),
        };
    };

    const fetch = async (req) => {
        requests.push(req);

        if (url_responses.has(req.url)) {
            const r = url_responses.get(req.url);
            if (typeof r === 'string' || r instanceof Uint8Array) {
                return { status: 200, headers: {}, body: to_bytes(r) };
            }
            return {
                status: r.status ?? 200,
                headers: { ...(r.headers ?? {}) },
                body: to_bytes(r.body),
            };
        }

        let u;
        try {
            u = new URL(req.url);
        } catch (_err) {
            return not_found();
        }
        if (u.protocol !== 'http:' && u.protocol !== 'https:') {
            return not_found();
        }
        if (u.hostname === 'export.arxiv.org' && u.pathname === '/api/query') {
            return route_arxiv(u, req);
        }
        if (u.hostname === 'doi.org' || u.hostname === 'dx.doi.org') {
            return route_doi(u, req);
        }
        return not_found();
    };

    return {
        fetch,
        sleep: async (ms) => { sleeps.push(ms); },
        now: () => now_value,
        set_now: (t) => { now_value = t; },
        cacheFs: make_memory_cache_fs(),
        requests,
        sleeps,
    };
}
