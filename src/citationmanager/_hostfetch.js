// Host fetch implementation for the autocitefetch wasm binding.
//
// This module is environment-neutral: it must not reference Node-only globals
// or modules.  File access goes through a caller-provided `fs`-like object.

import { promisify } from '../util/prify.js';
import { path_or_url_to_url } from '../util/url.js';


const DEFAULT_TIMEOUT_MS = 120000;

const NO_FETCH_MESSAGE = "No fetch() available; pass citation_manager_options.fetch";


/**
 * Return `true` if a global `fetch()` function is available in this
 * environment (i.e., if :func:`make_host_fetch` can be used for `http:` /
 * `https:` requests without an explicit `fetch_impl`).
 *
 * @returns {boolean}
 */
export function has_default_fetch()
{
    return (typeof globalThis.fetch === 'function');
}


/**
 * Create an error with the given message and `retryable` flag.
 */
function make_host_error(message, { retryable, cause }={})
{
    const err = (cause !== undefined) ? new Error(message, { cause }) : new Error(message);
    err.retryable = !!retryable;
    return err;
}

function error_message(err)
{
    if (err == null) {
        return String(err);
    }
    let msg = (err.message != null) ? String(err.message) : String(err);
    const cause = err.cause;
    if (cause != null) {
        const cmsg = (cause.message != null) ? String(cause.message) : String(cause);
        if (cmsg && !msg.includes(cmsg)) {
            msg += ` (${cmsg})`;
        }
    }
    return msg;
}

function is_transport_error(err)
{
    if (err == null) {
        return false;
    }
    if (err instanceof TypeError) {
        return true;
    }
    const name = err.name;
    return (name === 'TypeError' || name === 'AbortError' || name === 'TimeoutError');
}

function to_plain_uint8array(data)
{
    if (data == null) {
        return new Uint8Array();
    }
    if (typeof data === 'string') {
        return new TextEncoder().encode(data);
    }
    if (data instanceof ArrayBuffer) {
        return new Uint8Array(data.slice(0));
    }
    // Uint8Array or a subclass thereof (e.g. a Node buffer object), or another
    // ArrayBufferView: copy into a plain Uint8Array.
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(
            data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
        );
    }
    return new Uint8Array(data);
}


/**
 * Build the host ``fetch`` function passed to the autocitefetch binding (see
 * ``HostFunctions.fetch`` in the implementation brief).
 *
 * The returned function has the signature ``async (req) => response`` where
 * ``req`` is ``{ url, method, headers, body }`` (``headers`` has lowercase
 * names; ``body`` is a ``Uint8Array`` or ``null``) and the resolved
 * ``response`` is ``{ status, headers, body }`` with lowercase header names and
 * a plain ``Uint8Array`` body.
 *
 * - ``file:`` URLs and bare paths (resolved relative to ``fs_root_path``) are
 *   read through ``fs`` (``fs.promises.readFile`` or a promisified
 *   ``fs.readFile``).  A missing file resolves to a 404 response; any other
 *   error (e.g. the path is a directory) is thrown with ``retryable = false``.
 *   If no ``fs`` was given, such a request throws a non-retryable error.
 *
 * - ``http:`` / ``https:`` URLs are fetched with ``fetch_impl`` (default:
 *   ``globalThis.fetch``, looked up at request time).  Non-2xx statuses are
 *   returned as responses, never thrown.  A thrown ``TypeError``,
 *   ``AbortError`` or ``TimeoutError`` is rethrown with ``retryable = true``
 *   (a transport failure); any other thrown error has ``retryable = false``.
 *   If no fetch function is available at all, constructing the host fetch
 *   does *not* throw; instead each http(s) request throws the non-retryable
 *   error ``"No fetch() available; pass citation_manager_options.fetch"``.
 *   Use :func:`has_default_fetch` to check beforehand.
 *
 * - Any other URL scheme throws a non-retryable error.
 *
 * @param {Object} [options]
 * @param {Function} [options.fetch_impl] - A Fetch-API-compatible function
 *     ``(url, init) => Promise<Response>``.  Defaults to ``globalThis.fetch``.
 * @param {Object} [options.fs] - A Node ``fs``-compatible object used to read
 *     local files.
 * @param {string} [options.fs_root_path] - Root path against which bare
 *     (relative) file paths are resolved.
 * @param {string} [options.user_agent] - User agent string to send with
 *     http(s) requests (as the ``user-agent`` header).  A ``user-agent``
 *     header already present in the request takes precedence.
 * @param {boolean} [options.use_user_agent=true] - If false, never add a
 *     ``user-agent`` header.
 * @param {number} [options.timeout_ms=120000] - Timeout for http(s) requests
 *     in milliseconds (via ``AbortSignal.timeout``, when available).
 * @returns {Function} ``async (req) => { status, headers, body }``
 */
export function make_host_fetch({ fetch_impl, fs, fs_root_path, user_agent,
                                  use_user_agent, timeout_ms }={})
{
    use_user_agent = use_user_agent ?? true;
    timeout_ms = timeout_ms ?? DEFAULT_TIMEOUT_MS;

    let fsp_readFile = null;
    if (fs != null) {
        if (typeof fs.promises?.readFile === 'function') {
            fsp_readFile = (...args) => fs.promises.readFile(...args);
        } else if (typeof fs.readFile === 'function') {
            fsp_readFile = promisify( (...args) => fs.readFile(...args) );
        }
    }

    const get_fetch = () => {
        if (fetch_impl != null) {
            return fetch_impl;
        }
        if (typeof globalThis.fetch === 'function') {
            return (...args) => globalThis.fetch(...args);
        }
        return null;
    };

    const fetch_file = async (url, orig_url) => {
        if (fsp_readFile == null) {
            throw make_host_error(
                `Cannot read local file ‘${orig_url}’: no fs object with readFile() `
                + `was provided to the citation manager host`,
                { retryable: false }
            );
        }
        const file_path = decodeURIComponent(url.pathname);
        let data;
        try {
            data = await fsp_readFile(file_path);
        } catch (err) {
            if (err != null && err.code === 'ENOENT') {
                return { status: 404, headers: {}, body: new Uint8Array() };
            }
            throw make_host_error(
                `Error reading local file ‘${file_path}’: ${error_message(err)}`,
                { retryable: false, cause: err }
            );
        }
        return { status: 200, headers: {}, body: to_plain_uint8array(data) };
    };

    const fetch_http = async (url_str, req) => {
        const fetch_fn = get_fetch();
        if (fetch_fn == null) {
            throw make_host_error(NO_FETCH_MESSAGE, { retryable: false });
        }

        const headers = {};
        for (const [k, v] of Object.entries(req.headers ?? {})) {
            headers[String(k).toLowerCase()] = v;
        }
        if (use_user_agent && user_agent && !Object.hasOwn(headers, 'user-agent')) {
            headers['user-agent'] = user_agent;
        }

        const init = {
            method: req.method ?? 'GET',
            headers,
            redirect: 'follow',
        };
        if (req.body != null) {
            init.body = req.body;
        }
        if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function'
            && Number.isFinite(timeout_ms) && timeout_ms > 0) {
            init.signal = AbortSignal.timeout(timeout_ms);
        }

        let response;
        let body;
        try {
            response = await fetch_fn(url_str, init);
            body = new Uint8Array(await response.arrayBuffer());
        } catch (err) {
            throw make_host_error(
                `Error fetching ‘${url_str}’: ${error_message(err)}`,
                { retryable: is_transport_error(err), cause: err }
            );
        }

        const resp_headers = {};
        if (response.headers != null) {
            for (const [k, v] of Object.entries(Object.fromEntries(response.headers))) {
                resp_headers[String(k).toLowerCase()] = v;
            }
        }
        return { status: response.status, headers: resp_headers, body };
    };

    return async (req) => {
        const orig_url = req.url;
        let url;
        try {
            url = path_or_url_to_url(orig_url, { fs_root_path });
        } catch (err) {
            throw make_host_error(
                `Invalid URL or path ‘${orig_url}’: ${error_message(err)}`,
                { retryable: false, cause: err }
            );
        }
        const protocol = url.protocol;
        if (protocol === 'file:') {
            return await fetch_file(url, orig_url);
        }
        if (protocol === 'http:' || protocol === 'https:') {
            return await fetch_http(orig_url, req);
        }
        throw make_host_error(
            `Unsupported URL scheme ‘${protocol}’ in ‘${orig_url}’ (only file:, `
            + `http: and https: URLs and bare file paths are supported)`,
            { retryable: false }
        );
    };
}
