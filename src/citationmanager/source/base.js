import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager.sources.base');

import loMerge from 'lodash/merge.js';

import { path_or_url_to_url } from '../../util/url.js';


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
 * Base class for a *citation source*, i.e., an engine that is able to obtain
 * bibliographic citation information based on a citation key.  (E.g., the
 * :class:`CitationSourceArxiv` queries information from `the arXiv
 * <https://arxiv.org>`_ to obtain citation information for a given arXiv
 * identifier.)
 *
 * Citation retrieval is performed by the Rust ``autocitefetch`` crate
 * (compiled to WebAssembly) behind :class:`CitationDatabaseManager`.  Each
 * source hands the manager a *source specification* through
 * `get_autocitefetch_spec()`.  The built-in sources
 * (:class:`CitationSourceArxiv`, :class:`CitationSourceDoi`,
 * :class:`CitationSourceManual`, :class:`CitationSourceBibliographyFile`)
 * describe one of the crate's native sources.  Any other subclass is run as a
 * *JavaScript source*: the crate calls back into the subclass'
 * `run_retrieve_chunk()` for each chunk of citation keys to retrieve.
 *
 * **Writing a custom source.**  Subclass this class and reimplement
 * `run_retrieve_chunk(id_list)`.  For each key, call
 * ``this.citation_manager.store_citation(this.cite_prefix, key, csl_json,
 * this.cache_store_options)`` or ``this.citation_manager.store_citation_chained(
 * this.cite_prefix, key, new_cite_prefix, new_cite_key, set_properties)``.
 * (While `run_retrieve_chunk()` runs, `this.citation_manager` is a collector
 * object that records these calls synchronously; awaiting them is allowed but
 * not required.  It also exposes the manager's ``options``.)  Use
 * `fetch_url()` to read local files or remote URLs.  Subclasses may also
 * reimplement `source_initialize_run()` (called once per call to the
 * manager's `retrieve_citations()`, before the first chunk of this source is
 * retrieved) and `source_finalize_run()` (called after every call to
 * `retrieve_citations()`).
 *
 * Limitations of custom sources: exactly one resolution is recorded per
 * requested key (keys that were not stored are reported as failures); a
 * source may only store citations for its own prefix; citations cannot be
 * stored from `source_finalize_run()`; and the Rust-side retry policy does not
 * apply to them (`fetch_url()` has its own retry loop instead).
 *
 * The following methods of earlier versions of this class were removed along
 * with the JavaScript scheduler they belonged to: ``add_retrieve()``,
 * ``add_retrieve_done()``, ``run()``, as well as the internal helpers
 * ``_fetch()`` and ``_jittered_backoff()`` and the scheduler's attributes
 * (``keys_to_retrieve``, ``keys_to_retrieve_remaining``, ``total_queried``,
 * ``fsp_readFile``).  Chunking, rate limiting and chaining are now handled by
 * the citation manager.  New: `get_autocitefetch_spec()` and
 * `validate_cite_key()`.
 *
 * Important options recognized by this base class are the following:
 *
 * - ``source_name`` - A descriptive name for this citation source.  Should
 *   normally be set by the subclass in the override options.  Mostly for use in
 *   debug messages.
 *
 * - ``fs``, ``fsRootFilePath`` - An `fs`-compatible object used to read local
 *   files in `fetch_url()`, and a filesystem path that provides the reference
 *   root path for relative file paths.  If no `fs` is given, local files are
 *   read through the citation manager's `fs`.
 *
 * - ``chunk_size``, ``chunk_retrieve_delay_ms`` - The citations to retrieve
 *   are split into chunks of at most `chunk_size` keys, and each chunk causes
 *   one call to `run_retrieve_chunk()`.  At least `chunk_retrieve_delay_ms`
 *   milliseconds separate the start of two chunk retrievals.
 *
 * - ``cite_prefix`` - The citation prefix we have been associated with.  An
 *   option value provided here will be overridden by `set_citation_manager()`.
 *
 * - ``chains_to_sources`` - An array of source names (citation prefixes) to
 *   which this source might “chain” to.  For instance, the 'arxiv' source
 *   chains to the 'doi' source.  The manager checks that these prefixes are
 *   registered.
 *
 * - ``waiting_poll_timeout_ms`` - Accepted for compatibility and ignored.
 *
 * - ``cache_store_options`` - Options to use when calling the manager's
 *   `store_citation()` method, for instance, ``{ cache_duration_ms: ... }``.
 *   Its `cache_duration_ms` (else the ``cache_duration_ms`` option) is the
 *   default cache duration of this source's entries; a duration of 0 means
 *   that entries are kept in memory for the current run only.  If neither is
 *   set, the manager's ``cache_entry_default_duration_ms`` applies.
 *
 * - ``use_user_agent``, ``user_agent`` - Specify a custom user agent when
 *   fetching remote content with `fetch_url()`.  If `use_user_agent` is false,
 *   no custom user agent is set.  If it is true, then the user agent
 *   `user_agent` is used.  If either `use_user_agent` or `user_agent` are
 *   null/undefined, then the citation manager's `default_use_user_agent` and
 *   `default_user_agent` are used.
 *
 * - ``fetch_max_retries`` - The maximum number of retries of `fetch_url()`
 *   upon a network error or a retryable HTTP status (429, 500, 502, 503, 504).
 *   Default 10.
 */
export class CitationSourceBase
{
    /**
     * Subclasses should call the superclass constructor with the following
     * arguments to set the options correctly.  Options are merged recursively
     * using `lodash/merge`.
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
     * The citation manager object will call this method to identify itself.
     * The source stores a reference to the citation manager and registers the
     * citation prefix (`cite_prefix`) to be associated with.
     */
    set_citation_manager(citation_manager, cite_prefix)
    {
        this.citation_manager = citation_manager;
        if (cite_prefix !== undefined) {
            this.cite_prefix = cite_prefix;
        }
    }

    /**
     * Check a citation key before it is sent to the citation manager's
     * retrieval engine.  Return `null` if the key is acceptable, or an error
     * message (string) if it is not; in the latter case the citation is
     * reported as a failure by `retrieve_citations()` and no request is made
     * for it.  The default implementation accepts every key.
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
     * Utility method to fetch data from a local file or a remote URL.  Returns
     * a promise that resolves to the requested data.
     *
     * The `url` may be any URL (``http:``, ``https:``, ``file:``) or simply a
     * local path.  A local path is interpreted relative to the
     * `fsRootFilePath` folder set in the class options.  Requests go through
     * the citation manager's host fetch function (see the manager's `fetch`,
     * `fs` and `fetch_timeout_ms` options), so this method can only be called
     * once the manager has been initialized (e.g., from
     * `run_retrieve_chunk()`, `source_initialize_run()` or
     * `get_autocitefetch_spec()`).
     *
     * .. note::
     *
     *    Make sure you use `await` on the return value of this function!
     *
     * The `fetch_options` may contain ``method`` (default ``'GET'``),
     * ``headers`` (a plain object; if absent, the default headers including
     * the user agent are used) and ``body`` (a string or bytes).
     *
     * By default, the content of the resource is returned as a string decoded
     * as UTF-8, and a status other than 200 causes an error to be thrown.  If
     * `get_response_object` is set to true in the `fetch_options`, then an
     * object ``{status, ok, headers, body, text(), json()}`` is returned
     * instead, whatever the status (``headers`` is a plain object with
     * lowercase names, ``body`` a ``Uint8Array``, and ``text()`` and
     * ``json()`` are synchronous).
     *
     * Network errors and the HTTP statuses 429, 500, 502, 503 and 504 are
     * retried up to `fetch_max_retries` times, honoring a ``Retry-After``
     * header and otherwise waiting with an exponential backoff.
     *
     * @param {string} url - The URL or local path to fetch.
     * @param {Object} [fetch_options]
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
     * citation manager (see ``SourceSpec`` in
     * ``src/citationmanager/_wasm/autocitefetch_wasm.d.ts``).  Called once by
     * :class:`CitationDatabaseManager` in its `initialize()` method.
     *
     * The default implementation describes a JavaScript source that calls
     * back into this object's `run_retrieve_chunk()`:
     * ``{ kind: 'js', prefix, source, chunkSize, minIntervalMs, ttlMs }``,
     * where ``ttlMs`` is ``cache_store_options.cache_duration_ms`` or the
     * ``cache_duration_ms`` option (``undefined`` if neither is set, in which
     * case the manager applies its ``cache_entry_default_duration_ms``).
     * Built-in sources reimplement this method to describe a native source
     * of the crate.
     *
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
     * Reimplement to perform any required processing at the beginning of a
     * retrieve run (a call to the manager's `retrieve_citations()`), before
     * the first chunk of this source is retrieved.  Only called for sources
     * that have citations to retrieve in that run.  The default implementation
     * does nothing.
     */
    async source_initialize_run()
    {
    }

    /**
     * Reimplement to perform any required processing at the end of a retrieve
     * run.  Called by the manager for every source after each call to
     * `retrieve_citations()`.  Citations can no longer be stored at this point.
     * The default implementation does nothing.
     */
    async source_finalize_run()
    {
    }

    /**
     * Reimplement to actually retrieve a chunk of citation keys/IDs (without
     * the cite prefix).  Keys are trimmed of surrounding whitespace.
     *
     * Consider using the utility method `fetch_url()` if you need to read data
     * from a local file path or from a remote URL.
     *
     * Once the citation information for a citation key/ID is retrieved, call
     * ``this.citation_manager.store_citation(this.cite_prefix, key, csl_json,
     * this.cache_store_options)`` (or `store_citation_chained()`).  Keys for
     * which nothing is stored are reported as missing.  Throwing an error
     * marks all keys of the chunk that were not stored yet as failed.
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
