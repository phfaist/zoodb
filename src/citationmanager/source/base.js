import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.sources.base');

import loMerge from 'lodash/merge.js';

import { path_or_url_to_url } from '../../util/url.js';
import { refresh_batching_spec_override } from './_specutil.js';


const RETRYABLE_STATUSES = new Set([
    429, // Too Many Requests
    500, // Internal Server Error
    502, // Bad Gateway
    503, // Service Unavailable
    504, // Gateway Timeout
]);

const FALLBACK_USER_AGENT = 'ZooDB-Citations-Fetcher/0.2 (https://github.com/phfaist/zoodb)';


function default_sleep(ms)
{
    return new Promise( (resolve) => setTimeout(resolve, ms) );
}

function jittered_backoff_ms(attempt, base_ms = 750, cap_ms = 30_000, min_ms = 3_000)
{
    return Math.max(
        min_ms,
        Math.min(cap_ms, base_ms * (2 ** attempt)) + 2 * base_ms * Math.random()
    );
}

function body_to_bytes(body)
{
    if (body == null) {
        return null;
    }
    if (body instanceof Uint8Array) {
        return body;
    }
    if (body instanceof ArrayBuffer) {
        return new Uint8Array(body);
    }
    if (ArrayBuffer.isView(body)) {
        return new Uint8Array(body.buffer, body.byteOffset, body.byteLength);
    }
    return new TextEncoder().encode(String(body));
}

function headers_to_plain_object(headers)
{
    const result = {};
    if (headers == null) {
        return result;
    }
    const entries = (typeof headers.entries === 'function' && !Array.isArray(headers))
          ? Array.from(headers.entries())
          : (Array.isArray(headers) ? headers : Object.entries(headers));
    for (const [k, v] of entries) {
        if (v == null) {
            continue;
        }
        result[String(k).toLowerCase()] = String(v);
    }
    return result;
}

function make_response_object(host_response)
{
    const status = host_response.status;
    const headers = Object.assign({}, host_response.headers ?? {});
    const body = host_response.body ?? new Uint8Array();
    return {
        status,
        ok: (status >= 200 && status < 300),
        headers,
        body,
        text() {
            return new TextDecoder('utf-8').decode(body);
        },
        json() {
            return JSON.parse(new TextDecoder('utf-8').decode(body));
        },
    };
}


/**
 * Base class for a *citation source*, i.e., an object that obtains
 * bibliographic citation information for citation keys of a given prefix.
 * (E.g., :class:`CitationSourceArxiv` obtains citation information for arXiv
 * identifiers from `the arXiv <https://arxiv.org>`_.)
 *
 * To write your own source, subclass this class and implement
 * `run_retrieve_chunk()`; see :ref:`citations-custom-source`.
 *
 * Options recognized by all sources:
 *
 * - ``cite_prefix`` - The citation prefix of this source.  The prefix under
 *   which the source is registered with the citation manager takes precedence.
 *
 * - ``source_name`` - A descriptive name for this source, used in messages.
 *   Normally set by the subclass.
 *
 * - ``chunk_size``, ``chunk_retrieve_delay_ms`` - Keys to retrieve are passed
 *   to `run_retrieve_chunk()` in lists of at most `chunk_size` keys, and two
 *   calls start at least `chunk_retrieve_delay_ms` milliseconds apart (to
 *   respect a server's rate limits).
 *
 * - ``cache_duration_ms`` (or ``cache_store_options.cache_duration_ms``) - How
 *   long the source's entries are kept in the cache before they are retrieved
 *   again, in milliseconds.  ``0`` means that entries are kept for the current
 *   run only.  If not set, the citation manager's
 *   ``cache_entry_default_duration_ms`` applies.
 *
 * - ``refresh_batching`` - How refetching stale cache entries is batched
 *   into requests: a few stale entries can be *deferred* (their cached copies
 *   are served meanwhile) until there are enough of them to be worth a
 *   request, and a request that goes out anyway can be *topped up* with
 *   entries that are nearly due.  Each source has its own default (the arXiv
 *   and DOI sources batch, a bibliography file refreshes all of its entries at
 *   once, other sources refetch exactly what is due).  The value is
 *   ``'eager'`` (refetch whatever is due, as soon as it is due),
 *   ``'default'``, or an object adjusting the source's default::
 *
 *       {
 *           eager: false,           // true: start from 'eager' instead
 *           min_batch: 50,          // wait for 50 stale entries...
 *           max_defer_days: 7,      // ...but at most 7 days past expiry
 *           top_up: {               // or false: never pull entries forward
 *               min_age_percent: 50, // entries half-way through their lifetime
 *               fill: 'chunk',       // up to the request's capacity, or a count
 *           },
 *       }
 *
 *   Settings that are not given keep the source's default.  This is the same
 *   structure as the ``refresh_batching`` option of the Python
 *   ``flm-citations`` package.  See :ref:`citations-refresh-batching`.
 *
 * - ``chains_to_sources`` - The prefixes of the sources to which this source
 *   may redirect citations with `store_citation_chained()` (e.g., the arXiv
 *   source redirects to ``doi``).  The citation manager checks that these
 *   sources are registered.
 *
 * - ``fs``, ``fsRootFilePath`` - An `fs`-compatible object used to read local
 *   files, and the directory relative to which local paths are resolved.  If
 *   no `fs` is given, the citation manager's is used.
 *
 * - ``use_user_agent``, ``user_agent`` - Whether to send a ``User-Agent``
 *   header with the requests of `fetch_url()`, and which one.  If not set, the
 *   citation manager's ``default_use_user_agent`` and ``default_user_agent``
 *   are used.
 *
 * - ``fetch_max_retries`` - How many times `fetch_url()` retries a request
 *   after a network error or an HTTP status 429, 500, 502, 503 or 504.
 *   Default 10.
 */
export class CitationSourceBase
{
    /**
     * Subclasses call this constructor with three sets of options, which are
     * merged recursively.
     *
     * @param {Object} override_options - Any options that should be set to the
     *     given values, regardless of any user options.
     * @param {Object} options - The options provided by the user.
     * @param {Object} default_options - Any option defaults that should be set
     *     if the user didn't provide any value.
     */
    constructor(override_options, options, default_options)
    {
        // Apply options in order of precedence.  Object.assign() is not
        // recursive, so use lodash/merge to ensure that any sub-option trees
        // are assigned correctly, too.
        this.options = loMerge(
            {
                fs: null,
                fsRootFilePath: null,

                fetch_max_retries: 10,
                cache_store_options: {},
            },
            default_options ?? {},
            options ?? {},
            override_options ?? {},
        );

        // remember which options the user specified explicitly (built-in
        // sources only pass those on to the Rust sources, so that the crate's
        // tuned defaults apply otherwise)
        this._user_options = Object.assign({}, options ?? {});

        if (this.options.fsRootFilePath != null && this.options.fsRootFilePath != '') {
            this._file_root = this.options.fsRootFilePath;
        } else {
            this._file_root = '';
        }

        this.chunk_size = this.options.chunk_size ?? 512;
        this.chunk_retrieve_delay_ms = this.options.chunk_retrieve_delay_ms ?? 1000;

        this.waiting_poll_timeout_ms = this.options.waiting_poll_timeout_ms ?? 500; // ignored

        this.cite_prefix = this.options.cite_prefix;
        this.chains_to_sources = this.options.chains_to_sources || [];
        this.source_name = this.options.source_name ?? '<unknown source>';

        this.cache_store_options = this.options.cache_store_options;

        this.citation_manager = null;

        // set by CitationDatabaseManager.initialize()
        this._host_fetch = null;
        // { manager, run } for which source_initialize_run() was last called
        this._initialized_run = null;
    }

    /**
     * Called by the citation manager when the source is registered with it
     * under the prefix `cite_prefix`.  Sets `this.citation_manager` and
     * `this.cite_prefix`.
     */
    set_citation_manager(citation_manager, cite_prefix)
    {
        this.citation_manager = citation_manager;
        if (cite_prefix !== undefined) {
            this.cite_prefix = cite_prefix;
        }
    }

    /**
     * Reimplement to reject malformed citation keys before any request is
     * made.  Return `null` if the key is acceptable, or else an error message,
     * in which case the citation is reported as a failure by the manager's
     * `retrieve_citations()`.  The default implementation accepts every key.
     *
     * @param {string} cite_key - The citation key, without the prefix.
     * @returns {string|null}
     */
    validate_cite_key(/*cite_key*/)
    {
        return null;
    }

    // helper: provide default retrieve headers for remote queries
    _get_default_headers()
    {
        let headers = {};

        // set a custom user agent?
        if ( this.options.use_user_agent
             ?? this.citation_manager?.options?.default_use_user_agent
             ?? true ) {
            // yes, figure out the user agent to set ->
            headers['User-Agent'] = this._get_user_agent();
        }
        return headers;
    }

    // helper: provide a User-Agent for remote queries
    _get_user_agent()
    {
        if (this.options.user_agent) {
            return this.options.user_agent;
        }
        if (this.citation_manager?.options?.default_user_agent) {
            return this.citation_manager.options.default_user_agent;
        }
        return FALLBACK_USER_AGENT;
    }

    // -------------

    /**
     * Read a remote URL or a local file, for use in `run_retrieve_chunk()` or
     * `source_initialize_run()`.
     *
     * The `url` may be an ``http:``, ``https:`` or ``file:`` URL, or a local
     * path relative to the `fsRootFilePath` option.  Requests use the citation
     * manager's ``fetch``, ``fs`` and ``fetch_timeout_ms`` options.  After a
     * network error or an HTTP status 429, 500, 502, 503 or 504, the request
     * is retried up to `fetch_max_retries` times, after the delay requested by
     * the server's ``Retry-After`` header or else after an increasing delay.
     *
     * By default, the content is returned as a string (decoded as UTF-8), and
     * an error is thrown if the status is not 200.  With
     * ``get_response_object: true``, an object ``{ status, ok, headers, body,
     * text(), json() }`` is returned instead, whatever the status: ``headers``
     * is a plain object with lowercase names, ``body`` a ``Uint8Array``, and
     * ``text()`` and ``json()`` are synchronous.
     *
     * @param {string} url - The URL or local path to read.
     * @param {Object} [fetch_options] - May contain ``method`` (default
     *     ``'GET'``), ``headers`` (a plain object; default: the ``User-Agent``
     *     header, see the `use_user_agent` option), ``body`` (a string or
     *     bytes), and ``get_response_object``.
     * @returns {Promise<string|Object>}
     */
    async fetch_url(url, fetch_options=undefined)
    {
        fetch_options = Object.assign({}, fetch_options ?? {});

        const get_response_object = !!fetch_options.get_response_object;
        delete fetch_options.get_response_object;

        const host_fetch = this._host_fetch;
        if (host_fetch == null) {
            throw new Error(
                `fetch_url(): citation source ‘${this.source_name}’ is not attached to an `
                + `initialized CitationDatabaseManager (call and await initialize() on the `
                + `manager first)`
            );
        }

        const headers = headers_to_plain_object(
            fetch_options.headers ?? this._get_default_headers()
        );

        const urlobj = path_or_url_to_url(url, { fs_root_path: this._file_root });

        debug(`Fetching URL ‘${urlobj}’ ...`);

        const req = {
            url: urlobj.href,
            method: String(fetch_options.method ?? 'GET').toUpperCase(),
            headers,
            body: body_to_bytes(fetch_options.body),
        };

        const host_response = await this._fetch_with_retries(host_fetch, req);
        const response = make_response_object(host_response);

        if (get_response_object) {
            return response;
        }
        if (response.status !== 200) {
            throw new Error(`Status code ${response.status} when fetching ‘${url}’.`);
        }
        return response.text();
    }

    async _fetch_with_retries(host_fetch, req)
    {
        const max_retries = this.options.fetch_max_retries ?? 10;
        const sleep = this.citation_manager?.options?.sleep ?? default_sleep;

        for (let attempt = 0; ; ++attempt) {
            let response;
            try {
                response = await host_fetch(req);
            } catch (err) {
                if ( ! err?.retryable || attempt >= max_retries ) {
                    throw err;
                }
                const wait_ms = jittered_backoff_ms(attempt);
                console.warn(
                    `Network error fetching ‘${req.url}’ on attempt ${attempt + 1}: `
                    + `${err?.message ?? err}.  Retrying in ${Math.round(wait_ms)}ms…`
                );
                await sleep(wait_ms);
                continue;
            }

            if ( ! RETRYABLE_STATUSES.has(response.status) ) {
                return response;
            }

            if (attempt >= max_retries) {
                throw new Error(
                    `Request to ‘${req.url}’ failed with status ${response.status} `
                    + `after ${max_retries} retries`
                );
            }

            let wait_ms = null;
            const retry_after = response.headers?.['retry-after'];
            if (retry_after != null && String(retry_after).trim() !== '') {
                const seconds = Number(retry_after);
                if (Number.isFinite(seconds) && seconds >= 0) {
                    wait_ms = seconds * 1000;
                } else {
                    const date_ms = Date.parse(retry_after);
                    if (Number.isFinite(date_ms)) {
                        wait_ms = Math.max(0, date_ms - Date.now());
                    }
                }
            }
            if (wait_ms == null) {
                wait_ms = jittered_backoff_ms(attempt);
            }

            console.warn(
                `Status ${response.status} received for ‘${req.url}’.  Retry `
                + `${attempt + 1}/${max_retries} after ${Math.round(wait_ms)}ms…`
            );
            await sleep(wait_ms);
        }
    }

    // -------------

    /**
     * Return the specification of this source for the ``autocitefetch``
     * retrieval engine (see ``SourceSpec`` in
     * ``src/citationmanager/_wasm/autocitefetch_wasm.d.ts``).  Called once by
     * :class:`CitationDatabaseManager` in its `initialize()` method.
     *
     * The default implementation describes a JavaScript source that calls
     * back into this object's `run_retrieve_chunk()`:
     * ``{ kind: 'js', prefix, source, chunkSize, minIntervalMs, ttlMs }``.
     * Built-in sources reimplement this method to describe one of the
     * engine's native sources.  Custom sources should not reimplement it.
     *
     * @private
     * @returns {Promise<Object>}
     */
    async get_autocitefetch_spec()
    {
        return {
            kind: 'js',
            prefix: this.cite_prefix,
            source: this._make_js_source(),
            chunkSize: this.chunk_size,
            minIntervalMs: this.chunk_retrieve_delay_ms,
            ttlMs: this.options.cache_store_options?.cache_duration_ms
                ?? this.options.cache_duration_ms
                ?? undefined,
            ...refresh_batching_spec_override(this),
        };
    }

    /**
     * Build the ``JsSourceObject`` handed to the ``autocitefetch`` binding.
     * Its ``retrieveChunk(keys, ctx)`` temporarily replaces
     * `this.citation_manager` by a collector that records `store_citation()`
     * and `store_citation_chained()` calls as resolutions, runs
     * `source_initialize_run()` once per retrieve run of the manager, then
     * `run_retrieve_chunk(keys)`, restores the manager and returns the
     * recorded resolutions.  If `run_retrieve_chunk()` throws, the keys that
     * were not resolved yet are reported as failed with the error's message.
     */
    _make_js_source()
    {
        const manager = this.citation_manager;
        return {
            retrieveChunk: async (keys, ctx) => {
                const prefix = ctx?.prefix ?? this.cite_prefix;
                const resolutions = [];
                const collector = make_collector({
                    manager, prefix, resolutions, source_name: this.source_name,
                });
                this.set_citation_manager(collector, prefix);
                try {
                    // once per retrieve run of *this* manager (the run
                    // counter restarts at 1 for each manager)
                    const run = manager?._retrieve_run ?? null;
                    if (run === null || this._initialized_run === null
                        || this._initialized_run.manager !== manager
                        || this._initialized_run.run !== run) {
                        this._initialized_run = { manager, run };
                        await this.source_initialize_run();
                    }
                    await this.run_retrieve_chunk(keys);
                } catch (err) {
                    const message = `${err?.message ?? err}`;
                    debug(`Source ‘${prefix}’: run_retrieve_chunk() failed: ${message}`);
                    const answered = new Set(resolutions.map( (r) => r.key ));
                    for (const key of keys) {
                        if ( ! answered.has(key) ) {
                            resolutions.push({ key, outcome: 'failed', message });
                        }
                    }
                } finally {
                    collector._closed = true;
                    this.set_citation_manager(manager, prefix);
                }
                return resolutions;
            },
            normalizeKey: (key) => String(key).trim(),
            chainsTo: [ ...(this.chains_to_sources ?? []) ],
        };
    }

    /**
     * Reimplement to prepare a retrieval, e.g., to load data that
     * `run_retrieve_chunk()` needs.  Called once per call to the manager's
     * `retrieve_citations()`, before the first call to `run_retrieve_chunk()`,
     * and only if this source has citations to retrieve.  The default
     * implementation does nothing.
     */
    async source_initialize_run()
    {
    }

    /**
     * Reimplement to clean up after a retrieval.  Called for every source at
     * the end of each call to the manager's `retrieve_citations()`.  Citations
     * cannot be stored at this point.  The default implementation does
     * nothing.
     */
    async source_finalize_run()
    {
    }

    /**
     * Reimplement to retrieve the citation information of the keys in
     * `id_list` (keys without the prefix, trimmed of surrounding whitespace).
     * Use `fetch_url()` to read remote URLs or local files.
     *
     * For each key, call ``this.citation_manager.store_citation(
     * this.cite_prefix, key, csl_json, this.cache_store_options)`` with the
     * entry's CSL-JSON data, or ``this.citation_manager.store_citation_chained(
     * this.cite_prefix, key, new_cite_prefix, new_cite_key, set_properties)``
     * to redirect the citation to the entry ``new_cite_prefix:new_cite_key``
     * of another source, adding the properties `set_properties` to it.  Keys
     * for which nothing is stored are reported as failures.  If this method
     * throws, the keys that were not stored yet are reported as failures, with
     * the error's message.
     *
     * @param {Array<string>} id_list - The keys to retrieve.
     */
    async run_retrieve_chunk(/*id_list*/)
    {
        throw new Error(`The method run_retrieve_chunk() must be reimplemented by subclasses!`);
    }

}


function check_ttl(value)
{
    if (typeof value === 'number' && Number.isFinite(value) && value >= 0) {
        return value;
    }
    return undefined;
}


function make_collector({ manager, prefix, resolutions, source_name })
{
    const collector = {
        options: manager?.options ?? {},
        _closed: false,
        store_citation(cite_prefix, cite_key, entry_csl_json, options = {}) {
            if (collector._closed) {
                throw new Error(
                    `store_citation() must be called from within a source's run_retrieve_chunk()`
                );
            }
            if (cite_prefix !== prefix) {
                throw new Error(
                    `Citation source ‘${source_name}’ (prefix ‘${prefix}’) cannot store `
                    + `a citation for another prefix (‘${cite_prefix}:${cite_key}’)`
                );
            }
            if (entry_csl_json?.chained != null) {
                // legacy form of a chained citation
                const c = entry_csl_json.chained;
                return collector.store_citation_chained(
                    cite_prefix, cite_key, c.cite_prefix, c.cite_key, c.set_properties
                );
            }
            const csl = Object.assign({}, entry_csl_json);
            delete csl._hash;
            const res = { key: String(cite_key), outcome: 'concrete', csl };
            const ttl_ms = check_ttl(options?.cache_duration_ms);
            if (ttl_ms !== undefined) {
                res.ttlMs = ttl_ms;
            }
            resolutions.push(res);
            return Promise.resolve();
        },
        store_citation_chained(cite_prefix, cite_key, new_cite_prefix, new_cite_key,
                               set_properties /*, options */) {
            if (collector._closed) {
                throw new Error(
                    `store_citation() must be called from within a source's run_retrieve_chunk()`
                );
            }
            if (cite_prefix !== prefix) {
                throw new Error(
                    `Citation source ‘${source_name}’ (prefix ‘${prefix}’) cannot store `
                    + `a citation for another prefix (‘${cite_prefix}:${cite_key}’)`
                );
            }
            resolutions.push({
                key: String(cite_key),
                outcome: 'chained',
                prefix: String(new_cite_prefix),
                targetKey: String(new_cite_key),
                setProperties: Object.assign({}, set_properties ?? {}),
            });
            return Promise.resolve();
        },
    };
    return collector;
}
