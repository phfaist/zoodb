// Internal helpers shared by the built-in citation sources (not part of the
// public API).


/**
 * Return the ``chunkSize``, ``minIntervalMs`` and ``ttlMs`` spec overrides of
 * a built-in source, from the options that the user specified explicitly in
 * the source's constructor (``chunk_size``, ``chunk_retrieve_delay_ms``,
 * ``cache_store_options.cache_duration_ms`` or ``cache_duration_ms``).  Options
 * that were not given explicitly are left to the crate's defaults.
 *
 * @param {CitationSourceBase} source - The source instance.
 * @param {Object} [options]
 * @param {boolean} [options.chunk_size=true] - Whether to consider the
 *     ``chunk_size`` option.
 * @returns {Object}
 */
export function builtin_spec_overrides(source, { chunk_size=true }={})
{
    const u = source._user_options ?? {};
    const spec = {};
    if (chunk_size && u.chunk_size != null) {
        spec.chunkSize = u.chunk_size;
    }
    if (u.chunk_retrieve_delay_ms != null) {
        spec.minIntervalMs = u.chunk_retrieve_delay_ms;
    }
    const ttl_ms = u.cache_store_options?.cache_duration_ms ?? u.cache_duration_ms;
    if (ttl_ms != null) {
        spec.ttlMs = ttl_ms;
    }
    return spec;
}
