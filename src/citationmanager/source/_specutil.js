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
    Object.assign(spec, refresh_batching_spec_override(source));
    return spec;
}


const _refresh_batching_keys = {
    eager: 'eager',
    min_batch: 'minBatch',
    max_defer_days: 'maxDeferDays',
    top_up: 'topUp',
};
const _refresh_batching_top_up_keys = {
    min_age_percent: 'minAgePercent',
    fill: 'fill',
};

function _rename_keys(obj, mapping)
{
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
        if (v === undefined) {
            continue;
        }
        // Unknown keys are passed on unchanged, so that the engine's error
        // message names the key as the user spelled it.
        out[mapping[k] ?? k] = v;
    }
    return out;
}

/**
 * Convert a source's ``refresh_batching`` option (``'eager'``,
 * ``'default'``, or ``{ eager, min_batch, max_defer_days, top_up: false |
 * { min_age_percent, fill } }``) to the ``refreshBatching`` value of an
 * ``autocitefetch`` source spec.  Validation is left to the engine.
 *
 * @param {*} value
 * @returns {*} The spec value, or `undefined` if `value` is `undefined` or
 *     `null`.
 */
export function refresh_batching_spec(value)
{
    if (value == null) {
        return undefined;
    }
    if (typeof value !== 'object' || Array.isArray(value)) {
        return value; // 'eager', 'default', or an error for the engine to report
    }
    const spec = _rename_keys(value, _refresh_batching_keys);
    if (spec.topUp != null && typeof spec.topUp === 'object' && ! Array.isArray(spec.topUp)) {
        spec.topUp = _rename_keys(spec.topUp, _refresh_batching_top_up_keys);
    }
    return spec;
}

/**
 * Return ``{ refreshBatching }`` from a source's ``refresh_batching`` option,
 * or an empty object if the option is not set.
 *
 * @param {CitationSourceBase} source - The source instance.
 * @returns {Object}
 */
export function refresh_batching_spec_override(source)
{
    const rb = refresh_batching_spec(source.options?.refresh_batching);
    return (rb === undefined) ? {} : { refreshBatching: rb };
}
