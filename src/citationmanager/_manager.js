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
 * The default progress sink (design decision D11): milestones and long waits
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
 * Manage a database of bibliographic references, as well as a collection of
 * source objects that are capable of fetching bibliographic citation
 * information from various sources.
 *
 * Citation retrieval, chaining (e.g., arXiv → DOI), rate limiting, retries and
 * the on-disk cache are handled by the Rust crate ``autocitefetch``, compiled
 * to WebAssembly and bundled with this package.  This class adapts it to the
 * historical API of ZooDb's citation manager: citation information is read
 * synchronously with `get_citation_by_id()` once it has been retrieved with
 * `retrieve_citations()`.
 *
 * The constructor should be given a collection of sources in the first argument
 * (`sources`).  The `sources` should be an object where the keys correspond to
 * a `cite_prefix` and where the values are citation source instances (e.g.,
 * :class:`CitationSourceArxiv` or :class:`CitationSourceBibliographyFile`, or
 * any subclass of :class:`CitationSourceBase`).
 *
 * The cache is stored in ``<cache_dir>/<cache_base>.jsonl`` (by default
 * ``citations.jsonl``).  Temporary files named ``._<cache_base>*`` may appear
 * in the same directory while the manager runs; they should be ignored by
 * version control.  A legacy cache file ``cache_downloaded_info.json`` is never
 * read; convert it once with the ``zoodb-migrate-citations-cache`` tool.
 *
 * Possible options:
 *
 * - ``cache_fs`` - 'fs'-compatible module object to provide filesystem access
 *   for the cache (it must provide ``readFile``, ``writeFile``,
 *   ``appendFile``, ``rename``, ``readdir``, ``unlink`` and ``mkdir``, either
 *   directly or under ``promises``).  Not needed if `skip_save_cache` is set.
 *
 * - ``cache_dir`` - the directory holding the cache (default ``'.'``).  It is
 *   created if needed.
 *
 * - ``cache_file`` - *deprecated*.  If given (and `cache_dir` is not), the
 *   cache directory is the directory part of this path.
 *
 * - ``cache_base`` - base name of the cache file (default ``'citations'``).
 *
 * - ``cache_entry_default_duration_ms`` - the default duration of time (in
 *   milliseconds) that citation information for an entry should be stored in
 *   cache before being re-queried again from the source.  Applies to custom
 *   (JavaScript) sources that do not specify a duration themselves (default:
 *   30 days).  A falsy value (including ``0``) means the default; to make a
 *   source's entries ephemeral, give that source ``cache_duration_ms: 0``.
 *
 * - ``default_use_user_agent``, ``default_user_agent`` - specify defaults
 *   as to whether or not to set a custom user agent when sources fetch
 *   remote content, and if so, then which user agent to specify.
 *
 * - ``skip_save_cache`` - if true, the cache is kept in memory only and
 *   nothing is written to disk.
 *
 * Additional options (these may be given through
 * ``flm_options.citations.citation_manager_options``):
 *
 * - ``fetch`` - a Fetch-API-compatible function ``(url, init) => Response``
 *   used for http(s) requests (default: ``globalThis.fetch``).  In a browser,
 *   a proxying fetch is needed to reach arXiv and doi.org.
 *
 * - ``fs``, ``fs_root_path`` - `fs`-compatible object and root directory used
 *   to read local files (``file:`` URLs and bare paths), e.g. bibliography
 *   files.  Default: `cache_fs` (or else the `fs` option of the first source
 *   that has one) and the first source's ``fsRootFilePath``.
 *
 * - ``fetch_timeout_ms`` - timeout of http(s) requests (default 120000).
 *
 * - ``retry`` - retry policy of the crate's sources, ``{ max_retries,
 *   base_ms, cap_ms, honor_retry_after }``.
 *
 * - ``ttl_policy`` - ``{ stale_percent, jitter_percent, grace_days }``.
 *
 * - ``max_chain_depth`` - maximal length of a chain of chained citations.
 *
 * - ``drop_csl_fields`` - CSL-JSON fields that are removed from fetched
 *   entries (default ``['reference']``).
 *
 * - ``on_event`` - a synchronous callback receiving progress events
 *   (``{ type: 'retrieve_started', ... }``, see the ``ProgressEvent`` type in
 *   ``_wasm/autocitefetch_wasm.d.ts``).  If given, it replaces the default
 *   progress reporting and events are not throttled.
 *
 * - ``progress_debug`` - if false, the default progress reporting does not
 *   log to ``debug('zoodb.citationmanager.progress')`` (warnings are still
 *   printed).  Default true.
 *
 * - ``writer_id`` - identifier of this process in the names of the cache's
 *   temporary files (default: a random token).
 *
 * - ``sleep``, ``now`` - replace the timer (``async (ms) => {}``) and the
 *   clock (``() => milliseconds since epoch``) used for rate limiting,
 *   backoff and cache expiry (mostly useful for tests).
 *
 * Changes with respect to earlier versions: `purge_expired()`, `load_cache()`
 * and `save_cache()` are asynchronous; `retrieve_citations()` returns the
 * failures instead of throwing; `store_citation()` and
 * `store_citation_chained()` throw (sources store citations through a
 * collector, see :class:`CitationSourceBase`); the attributes ``cache``,
 * ``cache_fsp`` and ``cache_file`` were removed.
 *
 * .. warning::
 *
 *    Do not forget to call and await the result of the `initialize()` method on
 *    the newly created object before retrieving citations.
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
     * Load the WebAssembly module, set up the host functions (fetch, cache
     * filesystem, progress reporting) and the sources, and open the cache.
     * Must be called (and awaited) before `retrieve_citations()`.  Calling it
     * again has no effect.
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
     * Kept for API compatibility; does nothing.  The cache is opened by
     * `initialize()`.
     */
    async load_cache()
    {
        debug(`load_cache() does nothing; the cache is loaded by initialize()`);
    }

    /**
     * Write buffered cache updates to the cache file
     * ``<cache_dir>/<cache_base>.jsonl``.  (Updates are also written when the
     * manager is done retrieving citations.)
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
     * Remove any citation information entries that have expired (past a grace
     * period) from the cache.  Returns a promise resolving to the number of
     * entries removed.  (It is safe not to await it before calling
     * `retrieve_citations()`: operations on the cache are run in order.)
     *
     * @returns {Promise<number>}
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
     * Return the citation information associated with the given citation key/id
     * with prefix.  The `id` argument is a string of the form
     * `cite_prefix:cite_key`, spelled as it was requested in
     * `retrieve_citations()` (or as listed by `keys()`).  Chained citations are
     * already resolved.
     *
     * Returns the JSON/CSL object data associated with the given citation
     * information.  Its ``id`` is the requested `id` and its ``_hash`` a hash
     * of the entry's contents; it may contain ``_ready_formatted`` instead of
     * CSL-JSON fields.
     *
     * An `Error` is thrown if the given id is not found in the current
     * database.  This method is synchronous.
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
     * Get the citation information object associated with the given
     * `cite_prefix` and `cite_key`.
     *
     * This method is a shorthand for concatenating the citation prefix and key
     * together with a colon and calling `get_citation_by_id()`.
     */
    get_citation(cite_prefix, cite_key)
    {
        const id = `${cite_prefix}:${cite_key}`;
        return this.get_citation_by_id(id);
    }

    /**
     * Return a list of all citation keys available in the cache.  The return
     * value is an array of strings of the form `cite_prefix:cite_key`, with the
     * keys normalized by their sources (e.g., DOIs in lowercase).  This method
     * is synchronous; the list is updated by `initialize()`,
     * `retrieve_citations()` and `purge_expired()`.
     */
    keys()
    {
        return [ ...this._keys ];
    }

    /**
     * Retrieve a number of citations from the respective sources.
     *
     * - `citations` is an array of objects of the form ``{cite_prefix:...,
     *   cite_key:..., encountered_in: {resource_info, what}}`` (where
     *   `encountered_in` is optional and used in error messages).
     *
     * Citations that are missing from the cache or whose cache entry is stale
     * are fetched from their sources, following chained citations.
     *
     * An error is thrown immediately if a citation's prefix has no registered
     * source.  Citations that cannot be retrieved do not cause an error:
     * they are reported with `console.error` (along with where they were
     * encountered), and returned as an array of failures ``{prefix, key,
     * message, origin}`` (``origin`` is the ``[prefix, key]`` of the requested
     * citation a failed chained citation descends from, or ``null``).  The
     * same array is stored in `this.last_failures`.
     *
     * Make sure you `await` this method before reading the citations.
     *
     * @returns {Promise<Array<Object>>} The failures.
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
     * Citations can no longer be stored directly in the manager.  A source's
     * `run_retrieve_chunk()` calls ``this.citation_manager.store_citation()``
     * on a collector object that stands in for the manager during the call
     * (see :class:`CitationSourceBase`).  Calling this method on the manager
     * itself throws an error.
     */
    store_citation(/*cite_prefix, cite_key, entry_csl_json, options*/)
    {
        throw new Error(STORE_OUTSIDE_CHUNK_MESSAGE);
    }

    /**
     * Citations can no longer be stored directly in the manager; see
     * `store_citation()`.  Calling this method on the manager itself throws an
     * error.
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
