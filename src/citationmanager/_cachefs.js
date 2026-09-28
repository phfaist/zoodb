// Cache filesystem implementations (``HostCacheFs``) for the autocitefetch
// wasm binding's ``FileCacheStore``.
//
// This module is environment-neutral: it must not reference Node-only globals
// or modules.  The Node implementation works over a caller-provided `fs`-like
// object.

import { promisifyMethods } from '../util/prify.js';
import { writeFileAtomic } from '../util/atomicfilewrite.js';


const REQUIRED_CACHE_FS_METHODS = [
    'readFile', 'writeFile', 'appendFile', 'rename', 'readdir', 'unlink', 'mkdir',
];


/**
 * Return the list of methods required by :func:`make_node_cache_fs` (and by
 * the citation manager's cache directory handling) that the given
 * ``fs``-compatible object does not provide.  A method counts as provided if
 * ``fs.promises[method]`` or ``fs[method]`` is a function.
 *
 * The required methods are ``readFile``, ``writeFile``, ``appendFile``,
 * ``rename``, ``readdir``, ``unlink`` and ``mkdir``.
 *
 * @param {Object} fs - A Node ``fs``-compatible object.
 * @returns {string[]} The names of the missing methods (empty if none are
 *     missing).
 */
export function check_cache_fs_methods(fs)
{
    if (fs == null) {
        return [ ...REQUIRED_CACHE_FS_METHODS ];
    }
    return REQUIRED_CACHE_FS_METHODS.filter(
        (m) => ( typeof fs.promises?.[m] !== 'function' && typeof fs[m] !== 'function' )
    );
}


function make_noop_guard()
{
    let released = false;
    return {
        release() {
            released = true;
        },
        get released() {
            return released;
        },
    };
}

function to_plain_uint8array(data)
{
    if (typeof data === 'string') {
        return new TextEncoder().encode(data);
    }
    // copy (a Node buffer object is a Uint8Array subclass, and may be a view into a
    // shared pool)
    return new Uint8Array(
        data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
    );
}

function random_token()
{
    let tok = '';
    if (typeof globalThis.crypto?.getRandomValues === 'function') {
        const a = new Uint32Array(2);
        globalThis.crypto.getRandomValues(a);
        tok = a[0].toString(36) + a[1].toString(36);
    } else {
        tok = Math.floor(Math.random() * 0xFFFFFFFF).toString(36)
            + Math.floor(Math.random() * 0xFFFFFFFF).toString(36);
    }
    return `zc${Date.now().toString(36)}${tok}`;
}


/**
 * Create a ``HostCacheFs`` implementation (see the implementation brief,
 * section 7.1) operating on the real filesystem through the given
 * ``fs``-compatible object (e.g. Node's ``fs`` module).  ``fs.promises`` is
 * used when available; otherwise the callback-style methods are promisified.
 *
 * All methods are ``async`` and may be called with ``this`` unbound.  Paths
 * are passed through unchanged.
 *
 * - ``read(path)`` resolves to a ``Uint8Array``, or ``null`` if the file does
 *   not exist.
 * - ``append(path, bytes)`` appends bytes, creating the file if needed.
 * - ``atomicReplace(path, bytes)`` writes a temporary file in the same
 *   directory and renames it over ``path``.
 * - ``list(dir)`` resolves to the names of the *files* (not directories) in
 *   ``dir``, or ``[]`` if ``dir`` does not exist.
 * - ``remove(path)`` deletes the file; a missing file is ignored.
 * - **No locking** (design decision D9): ``tryLockExclusive(path)`` always
 *   resolves to ``null`` and ``lockExclusive(path)`` resolves to a no-op guard
 *   whose ``release()`` is idempotent; neither touches the filesystem.
 *   Concurrent processes sharing one cache directory are therefore not
 *   supported.
 *
 * @param {Object} fs - A Node ``fs``-compatible object.  Use
 *     :func:`check_cache_fs_methods` to verify it offers the needed methods.
 * @returns {Object} A ``HostCacheFs`` object.
 */
export function make_node_cache_fs(fs)
{
    const fsp = promisifyMethods(
        fs,
        ['readFile', 'writeFile', 'appendFile', 'rename', 'readdir', 'unlink', 'stat']
    );
    const call = (m, ...args) => {
        const fn = fsp[m];
        if (typeof fn !== 'function') {
            throw new Error(`Cache fs object does not provide the method ‘${m}’`);
        }
        return fn(...args);
    };
    // object passed to writeFileAtomic(); it only calls writeFile() and rename()
    const atomic_fsp = {
        writeFile: (...args) => call('writeFile', ...args),
        rename: (...args) => call('rename', ...args),
    };
    // stands in for a process PID in temporary file names (this module must
    // not reference `process`)
    const instance_token = random_token();

    const is_file_entry = async (dir, entry) => {
        if (typeof entry === 'string') {
            const st = await call('stat', join_path(dir, entry));
            return st.isFile();
        }
        // fs.Dirent
        if (typeof entry.isSymbolicLink === 'function' && entry.isSymbolicLink()) {
            try {
                const st = await call('stat', join_path(dir, entry.name));
                return st.isFile();
            } catch (err) {
                if (err != null && err.code === 'ENOENT') {
                    return false; // dangling symlink
                }
                throw err;
            }
        }
        return entry.isFile();
    };

    return {
        async read(path) {
            let data;
            try {
                data = await call('readFile', path);
            } catch (err) {
                if (err != null && err.code === 'ENOENT') {
                    return null;
                }
                throw err;
            }
            return to_plain_uint8array(data);
        },
        async append(path, bytes) {
            await call('appendFile', path, bytes);
        },
        async atomicReplace(path, bytes) {
            await writeFileAtomic({
                fsp: atomic_fsp,
                fileName: path,
                data: bytes,
                processPid: instance_token,
            });
        },
        async list(dir) {
            let entries;
            try {
                entries = await call('readdir', dir, { withFileTypes: true });
            } catch (err) {
                if (err != null && err.code === 'ENOENT') {
                    return [];
                }
                throw err;
            }
            const names = [];
            for (const entry of entries) {
                if (await is_file_entry(dir, entry)) {
                    names.push( (typeof entry === 'string') ? entry : entry.name );
                }
            }
            return names;
        },
        async remove(path) {
            try {
                await call('unlink', path);
            } catch (err) {
                if (err != null && err.code === 'ENOENT') {
                    return;
                }
                throw err;
            }
        },
        async tryLockExclusive(/*path*/) {
            return null;
        },
        async lockExclusive(/*path*/) {
            return make_noop_guard();
        },
    };
}


function join_path(dir, name)
{
    if (dir === '' || dir == null) {
        return name;
    }
    return dir.endsWith('/') ? `${dir}${name}` : `${dir}/${name}`;
}

function normalize_dir(dir)
{
    let d = String(dir ?? '');
    while (d.length > 1 && d.endsWith('/')) {
        d = d.slice(0, -1);
    }
    if (d === '' || d === '.') {
        return '.';
    }
    return d;
}

function split_path(path)
{
    const i = path.lastIndexOf('/');
    if (i === -1) {
        return ['.', path];
    }
    const dir = (i === 0) ? '/' : path.slice(0, i);
    return [ normalize_dir(dir), path.slice(i + 1) ];
}


/**
 * Create an in-memory ``HostCacheFs`` implementation, used when cache
 * persistence is not wanted (e.g. ``skip_save_cache``) or when no usable
 * ``fs`` object is available (e.g. in a browser).
 *
 * Files are stored in a ``Map<string, Uint8Array>`` keyed by the path string
 * as given.  Paths are ``/``-separated; ``list(dir)`` returns the base names of
 * the stored files whose directory part equals ``dir`` (a trailing ``/`` on
 * ``dir`` is ignored; ``''`` and ``'.'`` both denote the directory of bare
 * relative names).  Paths are not otherwise normalized (``a//b`` or ``a/./b``
 * are distinct from ``a/b``).
 *
 * Locks are always acquired: ``tryLockExclusive`` and ``lockExclusive`` both
 * resolve to a guard whose ``release()`` is idempotent.
 *
 * All methods are ``async`` and may be called with ``this`` unbound.  In
 * addition to the ``HostCacheFs`` methods, the returned object has
 * ``export()``, returning a new ``Map`` with copies of all stored files, and
 * ``import(map)``, which stores copies of all entries of the given ``Map`` (or
 * plain object) of path to ``Uint8Array`` or string, replacing existing files
 * with the same path.
 *
 * @returns {Object} A ``HostCacheFs`` object.
 */
export function make_memory_cache_fs()
{
    const files = new Map();

    return {
        async read(path) {
            const data = files.get(path);
            if (data === undefined) {
                return null;
            }
            return data.slice();
        },
        async append(path, bytes) {
            const add = to_plain_uint8array(bytes);
            const existing = files.get(path);
            if (existing === undefined) {
                files.set(path, add);
                return;
            }
            const combined = new Uint8Array(existing.length + add.length);
            combined.set(existing, 0);
            combined.set(add, existing.length);
            files.set(path, combined);
        },
        async atomicReplace(path, bytes) {
            files.set(path, to_plain_uint8array(bytes));
        },
        async list(dir) {
            const ndir = normalize_dir(dir);
            const names = [];
            for (const path of files.keys()) {
                const [pdir, name] = split_path(path);
                if (pdir === ndir) {
                    names.push(name);
                }
            }
            return names;
        },
        async remove(path) {
            files.delete(path);
        },
        async tryLockExclusive(/*path*/) {
            return make_noop_guard();
        },
        async lockExclusive(/*path*/) {
            return make_noop_guard();
        },
        export() {
            const m = new Map();
            for (const [path, data] of files.entries()) {
                m.set(path, data.slice());
            }
            return m;
        },
        import(map) {
            const entries = (map instanceof Map) ? map.entries() : Object.entries(map);
            for (const [path, data] of entries) {
                files.set(path, to_plain_uint8array(data));
            }
        },
    };
}
