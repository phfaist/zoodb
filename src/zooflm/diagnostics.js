// Diagnostics of the FLM engine (src/zooflm/engine.js): the shape every
// diagnostic the engine returns takes, its one-line format, the error thrown
// under the `abort` policy, and the policy itself (Q15, D7 of
// dev-docs/initial-design/09-step2-engine.md).
//
// Environment-neutral: imports nothing, runs in browsers as it is.


/**
 * The error policies a call of the engine takes: ``'abort'`` throws a
 * :js:class:`ZooFlmError` after the run when any diagnostic is an Error;
 * ``'continue'`` returns the output as the backend produced it (its own
 * recovery markup where something could not be produced) with the
 * diagnostics.
 */
export const ERROR_POLICIES = Object.freeze(['abort', 'continue']);

/**
 * How unresolved references are reported: ``'error'`` (an Error diagnostic)
 * or ``'warn'`` (a Warning; the label shown).
 */
export const UNRESOLVED_POLICIES = Object.freeze(['error', 'warn']);


/**
 * The error thrown under the ``'abort'`` policy when a call produced Error
 * diagnostics. Its message holds the formatted errors, one per line
 * (:js:func:`format_diagnostic`); its property ``diagnostics`` holds every
 * diagnostic of the call, the warnings included.
 */
export class ZooFlmError extends Error
{
    /**
     * @param {object[]} diagnostics - the diagnostics of the call
     * @param {object} [options]
     * @param {string} [options.message] - replaces the formatted errors
     */
    constructor(diagnostics, { message } = {})
    {
        const errors = diagnostics.filter( (d) => d.severity === 'error' );
        super(message ?? errors.map(format_diagnostic).join('\n'));
        this.name = 'ZooFlmError';
        this.diagnostics = diagnostics;
    }
}


/**
 * Where a diagnostic is, as written in its formatted line: ``PATH#FIELD``
 * when the origin names a source path, else the origin's label; ``null``
 * when it has neither.
 *
 * @param {object|null} origin - a diagnostic's origin
 * @returns {string|null}
 */
export function origin_location(origin)
{
    if (origin == null) {
        return null;
    }
    if (origin.source_path != null) {
        return (origin.field != null) ? `${origin.source_path}#${origin.field}` : origin.source_path;
    }
    return origin.label ?? null;
}


/**
 * Formats a diagnostic on one line:
 * ``PATH#FIELD:LINE:COL: SEVERITY: MESSAGE [IDENTIFIER]``, or the origin's
 * label in place of ``PATH#FIELD`` when the origin names no path. The
 * position is the one in the file (``file_line``, ``file_col``) when the
 * origin says where the field starts, else the one inside the fragment's
 * source (``line``, ``col``); it is left out when the diagnostic has none.
 * A file position that is approximate (``approx``: the field's value folds
 * the lines of its file, as a folded, plain or quoted multi-line YAML value
 * does) has `` (approx.)`` after it. A diagnostic in a truncated preview
 * (origin ``truncated: true``) has `` (truncated)`` after the position.
 *
 * @param {object} d - a diagnostic of the engine
 * @returns {string}
 */
export function format_diagnostic(d)
{
    const where = origin_location(d.origin);
    let position = '';
    if (d.file_line != null) {
        position = `:${d.file_line}` + ((d.file_col != null) ? `:${d.file_col}` : '')
            + ((d.approx === true) ? ' (approx.)' : '');
    } else if (d.line != null) {
        position = `:${d.line}` + ((d.col != null) ? `:${d.col}` : '');
    }
    const truncated = (d.origin?.truncated === true) ? ' (truncated)' : '';
    let lead;
    if (where != null) {
        lead = `${where}${position}${truncated}: `;
    } else if (position) {
        lead = `${position.slice(1)}${truncated}: `;
    } else {
        lead = truncated ? `${truncated.trim()}: ` : '';
    }
    return `${lead}${d.severity}: ${d.message} [${d.identifier}]`;
}


/**
 * Whether any of the diagnostics is an Error.
 *
 * @param {object[]} diagnostics
 * @returns {boolean}
 */
export function has_errors(diagnostics)
{
    return diagnostics.some( (d) => d.severity === 'error' );
}


/**
 * Checks an error policy value; throws a plain ``Error`` naming the allowed
 * values otherwise.
 *
 * @param {string} policy
 * @returns {string} the policy
 */
export function check_error_policy(policy)
{
    if (!ERROR_POLICIES.includes(policy)) {
        throw new Error(`Invalid FLM error policy ‘${policy}’, expected one of `
                        + ERROR_POLICIES.map( (p) => `'${p}'` ).join(', '));
    }
    return policy;
}


/**
 * Checks an ``unresolved`` value; throws a plain ``Error`` otherwise.
 *
 * @param {string} unresolved
 * @returns {string} the value
 */
export function check_unresolved(unresolved)
{
    if (!UNRESOLVED_POLICIES.includes(unresolved)) {
        throw new Error(`Invalid value for ‘unresolved’: ‘${unresolved}’, expected one of `
                        + UNRESOLVED_POLICIES.map( (p) => `'${p}'` ).join(', '));
    }
    return unresolved;
}


/**
 * Applies an error policy to the diagnostics of a call: under ``'abort'``,
 * throws a :js:class:`ZooFlmError` when any is an Error.
 *
 * @param {object[]} diagnostics
 * @param {string} policy - ``'abort'`` or ``'continue'``
 * @returns {boolean} whether any diagnostic is an Error (``has_errors``)
 */
export function apply_error_policy(diagnostics, policy)
{
    const errors = has_errors(diagnostics);
    if (errors && policy === 'abort') {
        throw new ZooFlmError(diagnostics);
    }
    return errors;
}


/**
 * Makes a diagnostic of the engine's own (a composer helper, a snippet
 * refused, ...), with no position.
 *
 * @param {object} d
 * @param {string} d.severity - ``'error'``, ``'warning'`` or ``'note'``
 * @param {string} d.identifier - such as ``zoodb.ref.unresolved``
 * @param {string} d.message
 * @param {object} [d.origin] - a fragment's origin, or ``{ label }``
 * @returns {object} the diagnostic
 */
export function make_diagnostic({ severity, identifier, message, origin = null })
{
    return {
        severity, identifier, message,
        origin: origin ?? { label: null },
        start: null, end: null, line: null, col: null, file_line: null, file_col: null,
        approx: false,
    };
}


// --- positions -----------------------------------------------------------------------

const RX_ASCII = /^[\x00-\x7f]*$/; // eslint-disable-line no-control-regex

/**
 * The index in the JavaScript string ``text`` of the UTF-8 byte offset
 * ``byte`` (the core's offsets are bytes; a JavaScript string is indexed in
 * UTF-16 code units). An offset past the end gives the length.
 *
 * @param {string} text
 * @param {number} byte
 * @returns {number}
 */
export function utf8_offset_to_index(text, byte)
{
    if (RX_ASCII.test(text)) {
        return Math.min(byte, text.length);
    }
    let b = 0;
    let index = 0;
    for (const ch of text) {
        if (b >= byte) {
            break;
        }
        const cp = ch.codePointAt(0);
        b += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
        index += ch.length;
    }
    return index;
}

/**
 * The 1-based line and column of the UTF-8 byte offset ``byte`` in ``text``,
 * the column counted in characters (code points).
 *
 * @param {string} text
 * @param {number} byte
 * @returns {{line: number, col: number}}
 */
export function line_col_at(text, byte)
{
    const before = text.slice(0, utf8_offset_to_index(text, byte));
    const last_newline = before.lastIndexOf('\n');
    let line = 1;
    for (let i = before.indexOf('\n'); i !== -1; i = before.indexOf('\n', i + 1)) {
        line += 1;
    }
    const col = Array.from(before.slice(last_newline + 1)).length + 1;
    return { line, col };
}


/**
 * Maps a diagnostic of the core (``{ identifier, severity, message, origin,
 * start, end, line, col }``, ``origin`` a label) to the engine's shape:
 * ``origin`` the fragment's origin object when the label is a fragment's,
 * else ``{ label }``; ``start``/``end`` byte offsets into the source;
 * ``line``/``col`` 1-based inside it; ``file_line``/``file_col`` when the
 * origin says where the source starts in its file (``start_line``,
 * ``start_col``, and ``indent``, the columns removed from each later line,
 * as in a YAML block scalar); ``approx`` true when that file position is
 * approximate (the origin's ``approx``: the source folds the file's lines).
 *
 * The core counts the column in bytes. The engine recomputes ``line`` and
 * ``col`` from the source, the column in characters (code points), only for
 * a fragment it holds the source of; a diagnostic in a source the library
 * created (origins ``index:…``, ``citation:…``) keeps the core's byte
 * column.
 *
 * @param {object} d - the core's diagnostic
 * @param {function(string): (object|null)} fragment_of - the fragment whose
 *     origin label is the given one, or ``null``
 * @returns {object} the engine's diagnostic
 */
export function map_core_diagnostic(d, fragment_of)
{
    const fragment = (d.origin != null) ? fragment_of(d.origin) : null;
    let line = d.line ?? null;
    let col = d.col ?? null;
    let file_line = null;
    let file_col = null;
    let approx = false;
    let origin;
    if (fragment != null) {
        origin = fragment.origin;
        if (d.start != null) {
            ({ line, col } = line_col_at(fragment.source, d.start));
        }
        if (origin.start_line != null && line != null) {
            file_line = origin.start_line + line - 1;
            if (origin.start_col != null && col != null) {
                file_col = (line === 1) ? origin.start_col + col - 1 : col + (origin.indent ?? 0);
            }
            approx = (origin.approx === true);
        }
    } else {
        origin = { label: d.origin ?? null };
    }
    return {
        severity: d.severity,
        identifier: d.identifier,
        message: d.message,
        origin,
        start: d.start ?? null,
        end: d.end ?? null,
        line, col, file_line, file_col, approx,
    };
}
