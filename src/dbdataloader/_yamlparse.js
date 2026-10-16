// Reading YAML for the data loaders (Q15 of dev-docs/initial-design/
// 03-design-questions.md, section A of 11-step4-loaders.md): the strict `yaml`
// package (YAML 1.2, core schema), the positions of the string values for the
// field compiler, and the one lenient pattern of older data refused with a
// message that says what to change. Used by `yamldb.js`, `flmfilesdb.js` and
// `tools/reindent_yaml.mjs`.
//
// Environment-neutral: no `node:` import, no file access.

import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader.yamlparse');

import { parseDocument, visit, isMap, isSeq, isScalar, Scalar } from 'yaml';


/**
 * What to change when a quoted value continues on a line that is not
 * indented more than its key (the pattern ``js-yaml`` accepted and YAML 1.2
 * refuses).
 */
export const REFUSED_QUOTED_CONTINUATION_MESSAGE =
    'a quoted value that continues on the next line must be indented more '
    + 'than the key; run `zoodb-reindent-yaml` on the file';


/**
 * The text of a file's content: a string as it is, bytes (a ``Buffer`` or a
 * ``Uint8Array``) decoded as UTF-8 (a byte order mark dropped).
 *
 * @param {string|Uint8Array} file_content
 * @returns {string}
 */
export function decode_text(file_content)
{
    if (typeof file_content === 'string') {
        return file_content;
    }
    if (file_content instanceof Uint8Array) {
        return new TextDecoder('utf-8').decode(file_content);
    }
    return String(file_content);
}


/**
 * A function giving the 1-based line and column of an index of ``text`` (a
 * JavaScript string index), the column counted in characters (code points),
 * as the FLM engine counts them.
 *
 * @param {string} text
 * @returns {function(number): {line: number, col: number}}
 */
export function make_locator(text)
{
    const line_starts = [0];
    for (let i = text.indexOf('\n'); i !== -1; i = text.indexOf('\n', i + 1)) {
        line_starts.push(i + 1);
    }
    return (index) => {
        // the last line start at or before index
        let lo = 0;
        let hi = line_starts.length - 1;
        while (lo < hi) {
            const mid = (lo + hi + 1) >> 1;
            if (line_starts[mid] <= index) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        const before = text.slice(line_starts[lo], index);
        const col = /[\uD800-\uDFFF]/.test(before) ? Array.from(before).length : before.length;
        return { line: lo + 1, col: col + 1 };
    };
}


/**
 * The index in ``text`` of the quote that closes the quoted value opened at
 * ``open``, read leniently (whatever the indentation of the lines in
 * between): for a single quote the next ``'`` that is not an escaped ``''``,
 * for a double quote the next ``"`` not escaped by a backslash; ``-1`` when
 * there is none.
 *
 * @param {string} text
 * @param {number} open - the index of the opening quote in ``text``
 * @returns {number}
 */
export function find_closing_quote(text, open)
{
    const quote = text[open];
    for (let i = open + 1; i < text.length; ++i) {
        const c = text[i];
        if (quote === '\'') {
            if (c === '\'') {
                if (text[i + 1] === '\'') {
                    ++i;
                    continue;
                }
                return i;
            }
        } else {
            if (c === '\\') {
                ++i;
                continue;
            }
            if (c === '"') {
                return i;
            }
        }
    }
    return -1;
}


/**
 * Whether the first error of a ``yaml`` document is a quoted value whose
 * continuation line is not indented more than its key or list item: the
 * ``yaml`` package then reports a missing closing quote at the end of the
 * opening line (or of a blank line that follows it) although the value is
 * closed later in the file. The error is taken for this pattern only when
 * the closing quote found leniently from the opening quote
 * (:js:func:`find_closing_quote`) ends the value: it is followed by optional
 * spaces or tabs and then a ``#`` comment, a line break or the end of the
 * input (or ``,``, ``]`` or ``}`` in a flow collection, or ``:`` when the
 * value is a key). A quote never closed, or a forgotten closing quote (the
 * lenient search then finds the opening quote of a later value, followed by
 * that value's text), is not this pattern (``null``: the document's own
 * error is to be reported).
 *
 * @param {object} doc - a document of ``parseDocument`` (with its errors)
 * @param {string} text - the text the document was parsed from
 * @returns {object|null} ``null``, or ``{ error, node, parent, offset }``:
 *     the ``yaml`` error, the quoted scalar node the parser cut short and
 *     its parent (a ``Pair`` or a ``YAMLSeq``; both ``null`` when not
 *     found), and the index in ``text`` of the opening quote (of the error
 *     when the node was not found)
 */
export function find_refused_quoted_scalar(doc, text)
{
    const error = doc.errors[0];
    if (error == null || error.code !== 'MISSING_CHAR'
        || !/^Missing closing ['"]quote/.test(error.message)) {
        return null;
    }
    const at = error.pos[0];
    if (text.slice(at).trim() === '') {
        return null;
    }
    let found = null;
    visit(doc, {
        Scalar(key, node, path) {
            if ((node.type === Scalar.QUOTE_SINGLE || node.type === Scalar.QUOTE_DOUBLE)
                && node.range?.[1] === at) {
                found = {
                    node,
                    parent: path[path.length - 1] ?? null,
                    is_key: (key === 'key'),
                    in_flow: path.some( (n) => (isMap(n) || isSeq(n)) && n.flow ),
                };
                return visit.BREAK;
            }
        },
    });
    if (found != null && !closing_quote_ends_value(text, found)) {
        return null;
    }
    return {
        error,
        node: found?.node ?? null,
        parent: found?.parent ?? null,
        offset: (found != null) ? found.node.range[0] : at,
    };
}

// Whether the lenient closing quote of the quoted value `node` ends the value
// (see find_refused_quoted_scalar()).
function closing_quote_ends_value(text, { node, is_key, in_flow })
{
    const close = find_closing_quote(text, node.range[0]);
    if (close === -1) {
        return false;
    }
    let i = close + 1;
    while (text[i] === ' ' || text[i] === '\t') {
        ++i;
    }
    const c = text[i];
    return (i >= text.length || c === '#' || c === '\n' || (c === '\r' && text[i + 1] === '\n')
            || (in_flow && (c === ',' || c === ']' || c === '}'))
            || (is_key && c === ':'));
}


/**
 * Parses YAML text with the ``yaml`` package (YAML 1.2, core schema; a
 * duplicate key is an error) into plain data and, optionally, the positions
 * of its string values.
 *
 * The positions map each string scalar's field path (keys and list indexes
 * joined with dots, ``relations.parents.0.detail``, as the field compiler
 * names fields) to ``{ line, col, style }`` (1-based; ``col`` in
 * characters): for a block scalar (``style`` ``'literal'`` or
 * ``'folded'``) the first line after the ``|`` or ``>`` header, at column
 * ``indent + 1``, plus ``indent`` (the columns removed from each line), so
 * that line ``i`` (0-based) of a literal value is the source line ``line +
 * i`` at column ``indent + 1``; for a plain value (``'plain'``) its first
 * character; for a quoted value (``'quoted'``) the character after the
 * opening quote. A folded, plain or quoted value that spans several source
 * lines folds them and gets ``approx: true``, and so does a one-line quoted
 * value with an escape (its source between the quotes differs from its
 * value, such as ``'it''s'`` or ``"a\tb"``: a column after the escape is
 * off). Aliases, keys and values that are not strings have no position.
 *
 * Errors throw an ``Error`` with the message ``Parse error in ‘FILE’ at line
 * L, column C: MESSAGE`` (the first error of the document); a quoted value
 * continued on a line not indented more than its key gets
 * ``refused_message`` at its opening quote. The error carries ``file``,
 * ``line``, ``col`` and ``yaml_errors``.
 *
 * @param {string} text - the YAML text
 * @param {object} [options]
 * @param {string} [options.file] - the file's name for the error messages
 * @param {number} [options.first_line=1] - the line of the file that holds
 *     the text's first line (a front matter's), added to every line
 * @param {boolean} [options.with_positions=true] - whether to compute the
 *     positions
 * @param {string} [options.refused_message] - the message for a quoted
 *     value continued on a line not indented more than its key (default:
 *     :js:data:`REFUSED_QUOTED_CONTINUATION_MESSAGE`, which names the tool
 *     ``zoodb-reindent-yaml``)
 * @returns {{data: *, positions: (Object|null)}} ``positions`` a
 *     null-prototype object, ``null`` without ``with_positions``
 */
export function parse_yaml_text(text, {
    file = null, first_line = 1, with_positions = true,
    refused_message = REFUSED_QUOTED_CONTINUATION_MESSAGE,
} = {})
{
    const doc = parseDocument(text, { keepSourceTokens: with_positions, prettyErrors: false });
    if (doc.errors.length > 0) {
        throw yaml_parse_error(doc, text, { file, first_line, refused_message });
    }
    for (const w of doc.warnings) {
        debug(`YAML warning in ‘${file}’: ${w.message} [${w.code}]`);
    }
    const data = doc.toJS();
    let positions = null;
    if (with_positions) {
        positions = Object.create(null);
        collect_positions(doc.contents, '', {
            text, locate: make_locator(text), line_shift: first_line - 1, out: positions,
        });
    }
    return { data, positions };
}


function yaml_parse_error(doc, text, { file, first_line, refused_message })
{
    const refused = find_refused_quoted_scalar(doc, text);
    const error = doc.errors[0];
    const at = (refused != null) ? refused.offset : error.pos[0];
    const message = (refused != null) ? refused_message : error.message;
    const { line, col } = make_locator(text)(at);
    const file_line = line + first_line - 1;
    const err = new Error(
        `Parse error in ‘${file}’ at line ${file_line}, column ${col}: ${message}`
    );
    err.file = file;
    err.line = file_line;
    err.col = col;
    err.yaml_errors = doc.errors;
    return err;
}


function join_path(path, part)
{
    return (path === '') ? part : `${path}.${part}`;
}

function collect_positions(node, path, ctx)
{
    if (isMap(node)) {
        for (const pair of node.items) {
            if (!isScalar(pair.key)) {
                continue; // a complex key: no field path
            }
            collect_positions(pair.value, join_path(path, String(pair.key.value)), ctx);
        }
    } else if (isSeq(node)) {
        node.items.forEach( (item, i) => collect_positions(item, join_path(path, String(i)), ctx) );
    } else if (isScalar(node) && typeof node.value === 'string' && path !== ''
               && node.range != null) {
        const position = scalar_position(node, ctx);
        if (position != null) {
            ctx.out[path] = position;
        }
    }
}

function scalar_position(node, { text, locate, line_shift })
{
    const [start, value_end] = node.range;
    const spans_lines = (s) => s.includes('\n');
    switch (node.type) {
    case Scalar.BLOCK_LITERAL:
    case Scalar.BLOCK_FOLDED: {
        const indent = block_scalar_indent(node);
        const folded = (node.type === Scalar.BLOCK_FOLDED);
        const position = {
            line: locate(start).line + 1 + line_shift,
            col: indent + 1,
            style: folded ? 'folded' : 'literal',
            indent,
        };
        const body = (node.srcToken?.source ?? text.slice(start, value_end)).replace(/\s+$/, '');
        if (folded && spans_lines(body)) {
            position.approx = true;
        }
        return position;
    }
    case Scalar.PLAIN:
    case Scalar.QUOTE_SINGLE:
    case Scalar.QUOTE_DOUBLE: {
        const quoted = (node.type !== Scalar.PLAIN);
        const { line, col } = locate(quoted ? start + 1 : start);
        const position = { line: line + line_shift, col, style: quoted ? 'quoted' : 'plain' };
        // several lines folded, or a quoted value with an escape (`value_end`
        // is just after the closing quote, a trailing comment excluded)
        if (spans_lines(text.slice(start, value_end))
            || (quoted && text.slice(start + 1, value_end - 1) !== node.value)) {
            position.approx = true;
        }
        return position;
    }
    default:
        return null;
    }
}

// The columns a block scalar removes from each line, as the yaml package
// computes them: the parent's indentation plus an explicit indentation
// indicator, else the indentation of the first line with content (leading
// blank lines more indented count).
function block_scalar_indent(node)
{
    const token = node.srcToken;
    const parent_indent = token?.indent ?? 0;
    const header = (token?.props ?? []).find( (p) => p.type === 'block-scalar-header' )?.source ?? '';
    const explicit = /[1-9]/.exec(header);
    if (explicit != null) {
        return parent_indent + Number(explicit[0]);
    }
    let indent = parent_indent;
    for (const line of (token?.source ?? '').split('\n')) {
        const spaces = /^ */.exec(line)[0].length;
        const content = line.slice(spaces);
        if (content === '' || content === '\r') {
            indent = Math.max(indent, spaces);
            continue;
        }
        return spaces;
    }
    return indent;
}
