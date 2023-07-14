/**
 * Split a string of the form ‘prefix:label’, commonly used in LaTeX reference
 * labels.  We also use such strings for citations (e.g. 'arXiv:1234.56789').
 *
 * This function returns a two-element list ``[prefix, label]`` where `prefix`
 * is the string before the ':' separator, and the `label` is the string after
 * the ':' separator.
 *
 * The argument `label` should be a string and should not be null or undefined.
 *
 * If the `label` contains a ':' character, the initial string up to the first
 * ':' is split off as a "prefix", the rest of the string without the separating
 * ':' is the "label".  Any additional ':' characters are considered as part of
 * the label.
 *
 * If the `label` does not contain any ':' character, then the prefix is `null`
 * and the entire string is considered to be the label.
 */
export function split_prefix_label(label)
{
    const idx = label.indexOf(':');
    if (idx == -1) {
        // not found
        return [ null, label ];
    }
    return [label.slice(0,idx), label.slice(idx+1)];
}
