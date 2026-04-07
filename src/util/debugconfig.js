
const inspectCustom = Symbol.for('nodejs.util.inspect.custom');

const _defaultStringMaxLength = 256;
const _defaultStringTruncateTo = 50;
const _maxObjectKeys = 12;

function _summarizeObject(obj) {
    const keys = Object.keys(obj);
    const shown = keys.slice(0, _maxObjectKeys).join(', ');
    return `[Object (${keys.length} keys): ${shown}${keys.length > _maxObjectKeys ? ', ...' : ''}]`;
}

function _summarizeValue(value, depth, stringMaxLength, stringTruncateTo) {
    if (typeof value === 'string' && value.length > stringMaxLength) {
        return `${value.slice(0, stringTruncateTo)}… (${value.length} chars)`;
    }
    if (value != null && typeof value === 'object'
        && !Array.isArray(value) && typeof value[inspectCustom] !== 'function') {
        const keyCount = Object.keys(value).length;
        if (keyCount > _maxObjectKeys) {
            return { [inspectCustom]: () => _summarizeObject(value) };
        }
        if (depth > 0) {
            return _makeProxy(value, depth - 1, stringMaxLength, stringTruncateTo);
        }
    }
    return value;
}

function _makeProxy(obj, depth, stringMaxLength, stringTruncateTo) {
    return {
        [inspectCustom](inspectDepth, options, inspect) {
            const result = Object.create(null);
            for (const key of Object.keys(obj)) {
                result[key] = _summarizeValue(obj[key], depth, stringMaxLength, stringTruncateTo);
            }
            return inspect(result, { ...options, depth: inspectDepth });
        }
    };
}


/**
 * Return a lightweight wrapper around `config` that, when inspected by
 * `debug()`, summarises objects with many keys and truncates long strings.
 * No work is done unless the debug logger is enabled.
 *
 * Usage:
 * ```js
 * debug(`My config =`, debugconfig(debug, myConfig));
 * ```
 *
 * @param {Function} debug - A `debug` logger instance (from the `debug` npm
 *   package).  When `debug.enabled` is false the config is returned as-is
 *   (debug will discard it anyway).
 * @param {Object} config - The configuration object to summarise.
 * @param {Object} [options]
 * @param {number} [options.levels=2] - How many nesting levels to descend
 *   into for string truncation and object summarisation.
 * @param {number} [options.string_max_length=256] - Strings longer than
 *   this are truncated.
 * @param {number} [options.string_truncate_to=50] - Length to truncate
 *   long strings to.
 * @returns {Object} Either `config` itself (when debug is off) or a thin
 *   proxy that formats nicely on inspection.
 */
export function debugconfig(debug, config,
                            { levels, string_max_length, string_truncate_to } = {})
{
    if (!debug.enabled) {
        return config;
    }

    levels ??= 2;
    string_max_length ??= _defaultStringMaxLength;
    string_truncate_to ??= _defaultStringTruncateTo;

    return _makeProxy(config, levels, string_max_length, string_truncate_to);
}
