import debug_module from 'debug';
const debug = debug_module('zoodb.citationmanager');
const debug_progress = debug_module('zoodb.citationmanager.progress');

import sha256 from 'hash.js/lib/hash/sha/256.js';

import { one_day } from './_cache.js';
import { load_autocitefetch_wasm } from './_load_wasm.js';
import { make_host_fetch, has_default_fetch } from './_hostfetch.js';
import {
    make_node_cache_fs, make_memory_cache_fs, check_cache_fs_methods
} from './_cachefs.js';
import { promisifyMethods } from '../util/prify.js';


const DEFAULT_USER_AGENT = 'ZooDB-Citations-Fetcher/0.2 (https://github.com/phfaist/zoodb)';

const LEGACY_CACHE_FILE_NAME = 'cache_downloaded_info.json';

const STORE_OUTSIDE_CHUNK_MESSAGE =
      "store_citation() must be called from within a source's run_retrieve_chunk()";

const NO_FETCH_MESSAGE = "No fetch() available; pass citation_manager_options.fetch";


function random_writer_id()
{
    const bytes = new Uint8Array(8);
    if (typeof globalThis.crypto?.getRandomValues === 'function') {
        globalThis.crypto.getRandomValues(bytes);
    } else {
        for (let i = 0; i < bytes.length; ++i) {
            bytes[i] = Math.floor(Math.random() * 256);
        }
    }
    return 'zoodb-' + Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function dirname(p)
{
    const s = String(p);
    const i = s.lastIndexOf('/');
    if (i === -1) {
        return '.';
    }
    if (i === 0) {
        return '/';
    }
    return s.slice(0, i);
}

function join_path(dir, name)
{
    if (dir === '' || dir === '.' || dir == null) {
        return name;
    }
    return dir.endsWith('/') ? `${dir}${name}` : `${dir}/${name}`;
}

function normalize_cache_dir(dir)
{
    if (dir == null || dir === '') {
        return '.';
    }
    return String(dir);
}

function valid_ttl_ms(value)
{
    return (typeof value === 'number' && !Number.isNaN(value) && value >= 0);
}

function snake_to_camel_options(obj, mapping)
{
    if (obj == null) {
        return undefined;
    }
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
        if (v === undefined) {
            continue;
        }
        result[mapping[k] ?? k] = v;
    }
    return result;
}


/**
 * The default progress sink: milestones and long waits
 * are logged through ``debug('zoodb.citationmanager.progress')`` (unless
 * `progress_debug` is false); backoff waits and failures served from an
 * expired cache entry are reported with `console.warn`.
 */
function make_default_progress_sink({ progress_debug })
{
    return (ev) => {
        const type = ev?.type;
        if (type === 'wait_started' && ev.wait === 'backoff') {
            const secs = (ev.expected_ms != null) ? ` for ${(ev.expected_ms / 1000).toFixed(1)}s` : '';
            console.warn(
                `Citations: request to ‘${ev.url}’ failed (attempt ${(ev.attempt ?? 0) + 1}); `
                + `retrying after a backoff wait${secs}`
            );
            return;
        }
        if (type === 'cite_failed' && ev.grace_served) {
            console.warn(
                `Citations: could not refresh ‘${ev.prefix}:${ev.key}’ (${ev.message}); `
                + `using the expired cached entry`
            );
            return;
        }
        if ( ! progress_debug || ! debug_progress.enabled ) {
            return;
        }
        switch (type) {
        case 'retrieve_started':
            debug_progress(`Retrieving ${ev.cites} citation(s)`);
            break;
        case 'pass_started':
            debug_progress(`Pass ${ev.pass}: ${ev.cached} cached, ${ev.to_fetch} to fetch`);
            break;
        case 'pass_finished':
            debug_progress(`Pass ${ev.pass} finished, ${ev.discovered} chained citation(s) discovered`);
            break;
        case 'retrieve_finished':
            debug_progress(`Retrieved citations: ${ev.considered} considered, ${ev.failed} failed`);
            break;
        case 'source_started':
            debug_progress(`Source ‘${ev.prefix}’: ${ev.keys} key(s) in ${ev.chunks} chunk(s)`);
            break;
        case 'source_progress':
            debug_progress(`Source ‘${ev.prefix}’: ${ev.done}/${ev.total}`);
            break;
        case 'source_finished':
            debug_progress(`Source ‘${ev.prefix}’ done (${ev.done})`);
            break;
        case 'cite_failed':
            debug_progress(`Failed ‘${ev.prefix}:${ev.key}’: ${ev.message}`);
            break;
        case 'wait_started':
            if (ev.expected_ms != null && ev.expected_ms >= 2000) {
                const what = (ev.wait === 'rate_limit') ? `rate limit of ‘${ev.prefix}’` : ev.wait;
                debug_progress(`Waiting ${(ev.expected_ms / 1000).toFixed(1)}s (${what})`);
            }
            break;
        default:
            break;
        }
    };
}


// Throw an error with a remedy hint if a source chains to a prefix under
// which no source is registered.
function check_chain_targets(specs)
{
    const registered = new Set(specs.map( (spec) => spec.prefix ));
    for (const spec of specs) {
        if (spec.kind === 'arxiv') {
            const target = (spec.chainDoisTo === undefined) ? 'doi' : spec.chainDoisTo;
            if (target != null && ! registered.has(target)) {
                throw new Error(
                    `Citation source ‘${spec.prefix}’ chains DOIs to prefix ‘${target}’, but no `
                    + `source is registered under ‘${target}’: enable the ‘${target}’ source `
                    + `(citations.sources.${target}: true) or construct CitationSourceArxiv `
                    + `with chain_to_doi: false`
                );
            }
        } else if (spec.kind === 'js') {
            for (const target of (spec.source?.chainsTo ?? spec.chainsTo ?? [])) {
                if ( ! registered.has(target) ) {
                    throw new Error(
                        `Citation source ‘${spec.prefix}’ declares chains_to_sources `
                        + `‘${target}’ but no source is registered under ‘${target}’`
                    );
                }
            }
        }
    }
}


/**
 * Retrieve and cache bibliographic citation information for citations of the
 * form ``cite_prefix:cite_key``.  See :doc:`zoodb.citationmanager` for an
 * overview.
 *
 * The first argument, `sources`, is an object mapping each citation prefix to
 * a citation source instance (e.g., :class:`CitationSourceArxiv`,
 * :class:`CitationSourceDoi`, or any subclass of :class:`CitationSourceBase`).
 *
 * Call and await `initialize()` before anything else.  Then, await
 * `retrieve_citations()` with the citations you need, and read them with
 * `get_citation()` or `get_citation_by_id()`.
 *
 * Options (the second argument):
 *
 * - ``cache_fs`` - an `fs`-compatible object used to read and write the cache
 *   (it must provide ``readFile``, ``writeFile``, ``appendFile``, ``rename``,
 *   ``readdir``, ``unlink`` and ``mkdir``, directly or under ``promises``).
 *   Not needed if `skip_save_cache` is set.
 *
 * - ``cache_dir`` - the directory holding the cache (default ``'.'``).  It is
 *   created if needed.
 *
 * - ``skip_save_cache`` - if true, the cache is kept in memory only and
 *   nothing is written to disk.
 *
 * - ``cache_entry_default_duration_ms`` - how long (in milliseconds) entries
 *   of custom sources that do not set a duration themselves are kept before
 *   being retrieved again (default: 30 days).  A falsy value, including ``0``,
 *   means the default; to keep a source's entries for the current run only,
 *   give that source the option ``cache_duration_ms: 0``.
 *
 * - ``default_user_agent``, ``default_use_user_agent`` - the ``User-Agent``
 *   header sent with requests to remote servers, and whether to send it at
 *   all (default: true).
 *
 * - ``cache_file`` - *deprecated*; use `cache_dir`.  If given (and
 *   `cache_dir` is not), the cache directory is the directory part of this
 *   path.
 *
 * Further options are listed in :ref:`citations-advanced-options`.
 */
export class CitationDatabaseManager
{
    constructor(sources, options)
    {
        options = Object.assign({}, options ?? {});

        options.default_user_agent ??= DEFAULT_USER_AGENT;
        options.default_use_user_agent ??= true;
        // a falsy value means the default (as in earlier versions)
        options.cache_entry_default_duration_ms ||= 30*one_day;

        this.options = options;

        this.sources = Object.assign({}, sources);

        for (const [cite_prefix, source] of Object.entries(this.sources))
        {
            source.set_citation_manager( this, cite_prefix );
        }

        this.cache_fs = options.cache_fs ?? null;

        let cache_dir = options.cache_dir;
        if (options.cache_file != null && options.cache_file !== '') {
            if (cache_dir == null || cache_dir === '') {
                cache_dir = dirname(options.cache_file);
                debug(`The ‘cache_file’ option of CitationDatabaseManager is deprecated; `
                      + `using its directory ‘${cache_dir}’ as the cache directory `
                      + `(cache file ‘${join_path(cache_dir, (options.cache_base ?? 'citations')
                                                  + '.jsonl')}’)`);
            } else {
                debug(`The deprecated ‘cache_file’ option of CitationDatabaseManager is `
                      + `ignored because ‘cache_dir’ is given`);
            }
        }
        this.cache_dir = normalize_cache_dir(cache_dir);
        this.cache_base = options.cache_base ?? 'citations';

        this.cache_entry_default_duration_ms = options.cache_entry_default_duration_ms;

        this.last_failures = [];

        this._retrieve_run = 0;
        this._wasm = null;
        this._prefixes = null;
        this._keys = [];
        this._keys_ticket = 0;
        this._items = new Map();
        this._init_promise = null;

        if ( ! options.skip_save_cache ) {
            debug(`Citation database will be saved in the cache directory ‘${this.cache_dir}’`);
        }
    }

    /**
     * Set up the sources and load the cache.  Must be called, and awaited,
     * before any other method.  Calling it again has no effect.
     *
     * @returns {Promise}
     */
    initialize()
    {
        this._init_promise ??= this._do_initialize();
        return this._init_promise;
    }

    async _do_initialize()
    {
        const options = this.options;
        const wasm = await load_autocitefetch_wasm();

        // --- cache filesystem ---
        let cache_fs;
        const cache_fs_persistent = ! options.skip_save_cache;
        if (cache_fs_persistent) {
            const missing = check_cache_fs_methods(this.cache_fs);
            if (missing.length) {
                throw new Error(
                    `CitationDatabaseManager: the ‘cache_fs’ object `
                    + `${(this.cache_fs == null) ? '(not given) ' : ''}`
                    + `is missing the method(s) ${missing.map( (m) => `‘${m}’` ).join(', ')} `
                    + `(or set skip_save_cache)`
                );
            }
            cache_fs = make_node_cache_fs(this.cache_fs);
            if (this.cache_dir !== '.') {
                const { mkdir } = promisifyMethods(this.cache_fs, ['mkdir']);
                await mkdir(this.cache_dir, { recursive: true });
            }
        } else {
            cache_fs = make_memory_cache_fs();
        }
        this._host_cache_fs = cache_fs;

        // --- host fetch ---
        if (options.fetch == null && ! has_default_fetch()) {
            throw new Error(NO_FETCH_MESSAGE);
        }
        const source_list = Object.entries(this.sources);
        const file_fs = options.fs ?? this.cache_fs
              ?? source_list.map( ([, s]) => s.options?.fs ).find( (f) => f != null )
              ?? null;
        const fs_root_path = options.fs_root_path
              ?? source_list.map( ([, s]) => s.options?.fsRootFilePath )
                  .find( (p) => p != null && p !== '' )
              ?? '';
        const host_fetch_options = {
            fetch_impl: options.fetch ?? undefined,
            user_agent: options.default_user_agent,
            use_user_agent: options.default_use_user_agent,
            timeout_ms: options.fetch_timeout_ms,
        };
        const host_fetch = make_host_fetch({
            ...host_fetch_options, fs: file_fs, fs_root_path,
        });

        // --- sources ---
        const specs = [];
        for (const [cite_prefix, source] of source_list) {
            const source_fs = source.options?.fs;
            source._host_fetch = (source_fs != null && source_fs !== file_fs)
                ? make_host_fetch({ ...host_fetch_options, fs: source_fs, fs_root_path })
                : host_fetch;
            const spec = Object.assign({}, await source.get_autocitefetch_spec());
            spec.prefix = cite_prefix;
            if (spec.kind === 'js' && ! valid_ttl_ms(spec.ttlMs)) {
                spec.ttlMs = this.cache_entry_default_duration_ms;
            }
            for (const k of ['chunkSize', 'minIntervalMs', 'ttlMs']) {
                if (spec[k] === undefined || spec[k] === null) {
                    delete spec[k];
                }
            }
            specs.push(spec);
        }

        check_chain_targets(specs);

        // --- legacy cache file warning ---
        if (cache_fs_persistent) {
            await this._warn_legacy_cache(cache_fs);
        }

        // --- progress events ---
        let on_event;
        if (typeof options.on_event === 'function') {
            const user_on_event = options.on_event;
            on_event = (ev) => {
                try {
                    user_on_event(ev);
                } catch (err) {
                    console.error(`Citation manager on_event callback threw an error:`, err);
                }
            };
        } else {
            const sink = make_default_progress_sink({
                progress_debug: options.progress_debug ?? true,
            });
            on_event = (ev) => {
                try {
                    sink(ev);
                } catch (err) {
                    debug(`Error in the default progress sink:`, err);
                }
            };
        }

        const host = {
            fetch: host_fetch,
            cacheFs: cache_fs,
            onEvent: on_event,
        };
        if (typeof options.sleep === 'function') {
            host.sleep = options.sleep;
        }
        if (typeof options.now === 'function') {
            host.now = options.now;
        }

        const config = {
            sources: specs,
            host,
            cacheDir: this.cache_dir,
            cacheBase: this.cache_base,
            writerId: options.writer_id ?? random_writer_id(),
            dropCslFields: [ ...(options.drop_csl_fields ?? ['reference']) ],
        };
        if (options.on_event != null) {
            config.throttleEventsMs = 0;
        }
        const retry = snake_to_camel_options(options.retry, {
            max_retries: 'maxRetries', base_ms: 'baseMs', cap_ms: 'capMs',
            honor_retry_after: 'honorRetryAfter',
        });
        if (retry != null) {
            config.retry = retry;
        }
        const ttl_policy = snake_to_camel_options(options.ttl_policy, {
            stale_percent: 'stalePercent', jitter_percent: 'jitterPercent',
            grace_days: 'graceDays',
        });
        if (ttl_policy != null) {
            config.ttlPolicy = ttl_policy;
        }
        if (options.max_chain_depth != null) {
            config.maxChainDepth = options.max_chain_depth;
        }

        this._wasm = await wasm.CitationManager.open(config);
        this._prefixes = new Set(this._wasm.prefixes);

        await this._refresh_keys();
        await this._load_missing_items();

        debug(`Citation manager initialized with sources ${[...this._prefixes].join(', ')}; `
              + `${this._keys.length} cached citation(s)`);
    }

    async _warn_legacy_cache(cache_fs)
    {
        let names;
        try {
            names = await cache_fs.list(this.cache_dir);
        } catch (err) {
            debug(`Could not list the cache directory ‘${this.cache_dir}’: ${err}`);
            return;
        }
        const jsonl_name = `${this.cache_base}.jsonl`;
        if ( ! names.includes(LEGACY_CACHE_FILE_NAME) || names.includes(jsonl_name) ) {
            return;
        }
        const legacy_path = join_path(this.cache_dir, LEGACY_CACHE_FILE_NAME);
        console.warn(
            `Found legacy citations cache ‘${legacy_path}’ but no ‘${jsonl_name}’; run `
            + `‘yarn zoodb-migrate-citations-cache --cache-dir ${this.cache_dir}’ to convert it, `
            + `otherwise all citations will be fetched again.`
        );
    }

    _check_initialized(what)
    {
        if (this._wasm == null) {
            throw new Error(
                `CitationDatabaseManager: call and await initialize() before ${what}()`
            );
        }
    }

    async _refresh_keys()
    {
        const ticket = ++this._keys_ticket;
        const keys = await this._wasm.keys();
        if (ticket === this._keys_ticket) {
            this._keys = keys;
        }
    }

    _store_item(id, obj)
    {
        const item = Object.assign({}, obj, { id });
        delete item._hash;
        item._hash = this._compute_entry_hash(item);
        this._items.set(id, item);
    }

    // make every id listed by keys() readable with get_citation_by_id()
    async _load_missing_items()
    {
        const missing = this._keys.filter( (id) => ! this._items.has(id) );
        if ( ! missing.length ) {
            return;
        }
        const pairs = missing.map( (id) => {
            const i = id.indexOf(':');
            return [ id.slice(0, i), id.slice(i + 1) ];
        } );
        const objs = await this._wasm.getMany(pairs);
        objs.forEach( (obj, j) => {
            if (obj != null) {
                this._store_item(missing[j], obj);
            }
        } );
    }

    /**
     * Does nothing; the cache is loaded by `initialize()`.  Kept for
     * compatibility with earlier versions.
     *
     * @private
     */
    async load_cache()
    {
        debug(`load_cache() does nothing; the cache is loaded by initialize()`);
    }

    /**
     * Write pending updates to the cache file.  You normally do not need to
     * call this method, since updates are written when `retrieve_citations()`
     * finishes.
     *
     * @returns {Promise}
     */
    async save_cache()
    {
        if (this._wasm == null) {
            debug(`save_cache() called before initialize(); nothing to do`);
            return;
        }
        await this._wasm.flush();
    }

    /**
     * Remove from the cache the entries that have expired, past their grace
     * period (see the `ttl_policy` option).
     *
     * @returns {Promise<number>} The number of entries removed.
     */
    async purge_expired()
    {
        if (this._wasm == null) {
            debug(`purge_expired() called before initialize(); nothing to do`);
            return 0;
        }
        const removed = await this._wasm.prune();
        // drop the in-memory items that the store no longer holds
        const ids = [ ...this._items.keys() ];
        if (ids.length) {
            const pairs = ids.map( (id) => {
                const i = id.indexOf(':');
                return [ id.slice(0, i), id.slice(i + 1) ];
            } );
            const objs = await this._wasm.getMany(pairs);
            objs.forEach( (obj, j) => {
                if (obj == null) {
                    this._items.delete(ids[j]);
                }
            } );
        }
        await this._refresh_keys();
        debug(`Purged ${removed} expired citation(s)`);
        return removed;
    }

    /**
     * Return the citation information of a citation that was retrieved with
     * `retrieve_citations()` (or that is in the cache).
     *
     * The returned object contains the entry's CSL-JSON fields.  Its ``id`` is
     * the given `id`, and ``_hash`` is a hash of the entry's contents.  A
     * citation that was redirected to another entry (an arXiv paper that has
     * a DOI) returns the data of that entry.  Entries that provide their
     * citation text directly, such as manual citations, contain
     * ``_ready_formatted`` (e.g., ``{ flm: '<citation text>' }``) instead of
     * CSL-JSON fields.
     *
     * This method is synchronous.
     *
     * @param {string} id - The citation, as ``cite_prefix:cite_key``, spelled
     *     as it was passed to `retrieve_citations()` or as returned by
     *     `keys()`.
     * @returns {Object}
     * @throws {Error} If the citation is not available.
     */
    get_citation_by_id(id)
    {
        const item = this._items.get(id);
        if (item === undefined) {
            throw new Error(`Item ‘${id}’ not found in citations cache`);
        }
        return item;
    }

    /**
     * Same as ``get_citation_by_id(`${cite_prefix}:${cite_key}`)``.
     *
     * @param {string} cite_prefix
     * @param {string} cite_key
     * @returns {Object}
     */
    get_citation(cite_prefix, cite_key)
    {
        const id = `${cite_prefix}:${cite_key}`;
        return this.get_citation_by_id(id);
    }

    /**
     * Return all citations available in the cache, as an array of strings
     * ``cite_prefix:cite_key``.  Keys are in their normalized form (e.g., DOIs
     * in lowercase), which can differ from the spelling that was requested.
     * This method is synchronous.
     *
     * @returns {Array<string>}
     */
    keys()
    {
        return [ ...this._keys ];
    }

    /**
     * Retrieve the given citations from their sources, unless they are
     * already in the cache and do not need to be refreshed.  Await this method
     * before reading the citations with `get_citation()`.
     *
     * Citations that cannot be retrieved do not cause an error.  They are
     * printed with `console.error`, along with where they were encountered,
     * and returned.  Each failure is an object ``{ prefix, key, message,
     * origin }``: ``prefix`` and ``key`` identify the citation that failed,
     * and if it was reached by redirection from a requested citation (e.g.,
     * the DOI of an arXiv paper), ``origin`` is the ``[prefix, key]`` of the
     * requested citation, else ``null``.  The failures are also stored in
     * `this.last_failures`.
     *
     * @param {Array<Object>} citations - The citations to retrieve, as objects
     *     ``{ cite_prefix, cite_key, encountered_in }``.  The optional
     *     ``encountered_in`` is ``{ resource_info, what }``, where
     *     ``resource_info.source_path`` and ``what`` describe where the
     *     citation appears, for error messages.
     * @returns {Promise<Array<Object>>} The citations that could not be
     *     retrieved.
     * @throws {Error} If a citation's prefix has no registered source.
     */
    async retrieve_citations(citations)
    {
        this._check_initialized('retrieve_citations');

        // group & dedupe citations by prefix:key
        const requests = new Map();
        for (const c of citations) {
            const { cite_prefix, cite_key } = c;
            if ( ! this._prefixes.has(cite_prefix) ) {
                throw new Error(
                    `No source registered for cite prefix ‘${cite_prefix}’ `
                    + `(citation encountered in ${c.encountered_in?.what})`
                );
            }
            const id = `${cite_prefix}:${cite_key}`;
            let r = requests.get(id);
            if (r === undefined) {
                r = { cite_prefix, cite_key: String(cite_key), id, citations: [] };
                requests.set(id, r);
            }
            r.citations.push(c);
        }

        // check keys with the sources (e.g., malformed arXiv IDs)
        const failures = [];
        const pairs = [];
        const pair_ids = [];
        for (const r of requests.values()) {
            const source = this.sources[r.cite_prefix];
            const invalid_message = source?.validate_cite_key?.(r.cite_key) ?? null;
            if (invalid_message != null) {
                failures.push({
                    prefix: r.cite_prefix, key: r.cite_key,
                    message: String(invalid_message), origin: null,
                });
                continue;
            }
            pairs.push([ r.cite_prefix, r.cite_key ]);
            pair_ids.push(r.id);
        }

        this._retrieve_run += 1;

        if (pairs.length) {
            debug(`Retrieving ${pairs.length} citation(s) ...`);
            failures.push( ...(await this._wasm.retrieve(pairs)) );

            const objs = await this._wasm.getMany(pairs);
            objs.forEach( (obj, j) => {
                if (obj != null) {
                    this._store_item(pair_ids[j], obj);
                }
            } );
        }

        for (const source of Object.values(this.sources)) {
            await source.source_finalize_run();
        }

        await this._refresh_keys();
        await this._load_missing_items();

        for (const failure of failures) {
            this._print_failure(failure, requests);
        }

        this.last_failures = failures;
        return failures;
    }

    _print_failure(failure, requests)
    {
        const { prefix, key, message } = failure;
        console.error(`Source ‘${prefix}’ failed to fetch ID ‘${key}’: ${message}`);
        const [ oprefix, okey ] = failure.origin ?? [ prefix, key ];
        let found = requests.get(`${oprefix}:${okey}`);
        if (found === undefined) {
            // the origin is given with a normalized key
            const nkey = String(okey).trim().toLowerCase();
            found = Array.from(requests.values()).find(
                (r) => r.cite_prefix === oprefix && r.cite_key.trim().toLowerCase() === nkey
            );
        }
        for (const c of (found?.citations ?? [])) {
            if (c.encountered_in == null) {
                continue;
            }
            const source_path = c.encountered_in.resource_info?.source_path ?? '(unknown)';
            const source_where = c.encountered_in.what ?? '(unknown)';
            console.error(
                `Citation of ‘${found.cite_prefix}:${found.cite_key}’ was encountered in: `
                + `‘${source_path}’ → ${source_where}`
            );
        }
    }


    /**
     * Throws an error: citations are stored by sources, from within their
     * `run_retrieve_chunk()` (see :class:`CitationSourceBase`).
     *
     * @private
     */
    store_citation(/*cite_prefix, cite_key, entry_csl_json, options*/)
    {
        throw new Error(STORE_OUTSIDE_CHUNK_MESSAGE);
    }

    /**
     * Throws an error; see `store_citation()`.
     *
     * @private
     */
    store_citation_chained(/*cite_prefix, cite_key, new_cite_prefix, new_cite_key,
                             set_properties*/)
    {
        throw new Error(STORE_OUTSIDE_CHUNK_MESSAGE);
    }


    _compute_entry_hash(entry)
    {
        let hasher = sha256();

        let visit = (x) => {
            if (Array.isArray(x)) {
                x.forEach(visit);
            } else if (x instanceof Object) {
                for (const key of Object.keys(x).sort()) {
                    visit(key);
                    visit(x[key]);
                }
            } else {
                hasher.update(x);
            }
        };
        visit(entry);
        return hasher.digest('hex');
    }

}
