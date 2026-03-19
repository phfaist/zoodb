
/**
 * Escape all regular-expression metacharacters in `string` so that the result
 * can be embedded verbatim in a `RegExp` constructor call.
 *
 * @param {string} string - The literal string to escape.
 * @returns {string} The escaped string.
 *
 * @example
 * const rx = new RegExp(escapeRegExp('a.b+c'), 'g');
 * 'xa.b+cy'.match(rx); // ['a.b+c']
 */
export function escapeRegExp(string)
{
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
    return string.replaceAll(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
