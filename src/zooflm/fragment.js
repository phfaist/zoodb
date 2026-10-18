// Fragments of the FLM engine (src/zooflm/engine.js): one piece of FLM source
// parsed by the wasm core, held there by handle (D3 of
// dev-docs/initial-design/09-step2-engine.md). A fragment is made by
// `ZooFlmEngine.make_fragment()` and rendered by the engine; it carries no
// rendering of its own.
//
// Environment-neutral: imports only diagnostics.js, runs in browsers as it is.

import { line_col_at } from './diagnostics.js';


/**
 * The layouts of a fragment's top level: ``'auto'`` (inline unless it holds a
 * paragraph break or a block), ``'inline'`` (everything inline; a block is
 * reported) and ``'blocks'`` (paragraphs are built).
 */
export const LAYOUTS = Object.freeze(['auto', 'inline', 'blocks']);


/**
 * The canonical label of an origin: the label given, else
 * ``source_path#field`` (or ``source_path`` alone), else
 * ``object_type:object_id#field``, else ``null``.
 *
 * @param {object} origin
 * @returns {string|null}
 */
export function origin_label(origin)
{
    if (origin.label != null) {
        return String(origin.label);
    }
    const field = (origin.field != null) ? `#${origin.field}` : '';
    if (origin.source_path != null) {
        return `${origin.source_path}${field}`;
    }
    if (origin.object_type != null && origin.object_id != null) {
        return `${origin.object_type}:${origin.object_id}${field}`;
    }
    return null;
}


/**
 * Makes a fragment's origin: a frozen copy of ``origin`` (an object, or a
 * string taken as its label) with ``label`` set (:js:func:`origin_label`, or
 * ``fallback_label()`` when the origin names nothing).
 *
 * The keys the engine reads: ``object_type``, ``object_id``, ``field``,
 * ``source_path``, ``label``; and, for positions in the file the source was
 * read from, ``start_line`` and ``start_col`` (1-based, where the source's
 * first character is) and ``indent`` (the columns removed from each later
 * line, as in a YAML block scalar; default 0). ``truncated: true`` marks a
 * truncated preview (:js:meth:`ZooFlmEngine.truncate`), which keeps the
 * label of the fragment it was cut from. Other keys are kept as given.
 *
 * @param {object|string|null|undefined} origin
 * @param {function(): string} fallback_label
 * @returns {object}
 */
export function make_origin(origin, fallback_label)
{
    if (origin == null) {
        origin = {};
    } else if (typeof origin === 'string') {
        origin = { label: origin };
    } else if (typeof origin !== 'object') {
        throw new TypeError(`A fragment's origin is an object or a string, not ${typeof origin}`);
    }
    const label = origin_label(origin) ?? fallback_label();
    return Object.freeze({ ...origin, label });
}


/**
 * The origin of a source cut out of a fragment's source from the UTF-8 byte
 * offset ``start`` on (a term's body, from ``body_start``): the fragment's
 * origin with ``keys`` over it and its file position moved to where the cut
 * starts, so that the diagnostics of a fragment made from the cut text give
 * the file's lines and columns. ``start_line`` and ``start_col`` are moved by
 * the line and column of ``start`` in the source, as a diagnostic's are;
 * ``indent`` is kept, the cut's later lines being lines of the source.
 * ``approx: true`` is set when the fragment's positions are approximate or
 * absent. The label stays the fragment's unless ``keys`` gives one: the
 * graphics table is keyed by the canonical label, so the cut still finds the
 * images written in it.
 *
 * @param {ZooFlmFragment} fragment
 * @param {number} start - a UTF-8 byte offset into ``fragment.source``
 * @param {object} [keys] - keys set over the fragment's origin
 * @returns {object} an origin for :js:meth:`ZooFlmEngine.make_fragment`
 */
export function range_origin(fragment, start, keys = {})
{
    const { start_line, start_col, indent, approx } = fragment.origin;
    const origin = { ...fragment.origin, ...keys };
    if (start_line != null) {
        const { line, col } = line_col_at(fragment.source, start);
        origin.start_line = start_line + line - 1;
        if (start_col != null) {
            origin.start_col = (line === 1) ? start_col + col - 1 : col + (indent ?? 0);
        }
    }
    if (start_line == null || approx === true) {
        origin.approx = true;
    }
    return origin;
}


/**
 * A fragment: FLM source parsed by the engine's core, which keeps the tree
 * and addresses it by ``handle``. Made by
 * :js:meth:`ZooFlmEngine.make_fragment`; read-only.
 *
 * Properties:
 *
 * - ``source`` -- the FLM source text;
 * - ``origin`` -- ``{ object_type, object_id, field, source_path, label, ... }``,
 *   ``label`` always set (the canonical origin string the core and the
 *   diagnostics use);
 * - ``layout`` -- ``'auto'``, ``'inline'`` or ``'blocks'``;
 * - ``standalone`` -- whether the fragment is standalone: it holds nothing
 *   document-wide, renders the same anywhere, and is rendered through the
 *   snippet cache;
 * - ``handle`` -- the core's handle;
 * - ``diagnostics`` -- the diagnostics of the parse, mapped;
 * - ``empty`` -- the tree holds only whitespace, comments and paragraph
 *   breaks;
 * - ``released`` -- whether :js:meth:`ZooFlmEngine.release` freed it; a
 *   released fragment used again is a plain ``Error``.
 */
export class ZooFlmFragment
{
    /**
     * Not called directly: use :js:meth:`ZooFlmEngine.make_fragment`.
     *
     * @param {object} fields
     */
    constructor({ engine, source, origin, layout, standalone, handle, diagnostics, empty })
    {
        this.source = source;
        this.origin = origin;
        this.layout = layout;
        this.standalone = standalone;
        this.handle = handle;
        this.diagnostics = Object.freeze(diagnostics);
        this.empty = empty;
        // Internal to the engine: its owner, the handles of its layout
        // siblings (layout -> handle), its snippet cache entries (output ->
        // entry), and its state (whether it was released).
        Object.defineProperties(this, {
            _engine: { value: engine },
            _siblings: { value: new Map() },
            _snippets: { value: new Map() },
            _state: { value: { released: false } },
        });
        Object.freeze(this);
    }

    /**
     * Whether the fragment was released (:js:meth:`ZooFlmEngine.release`).
     *
     * @returns {boolean}
     */
    get released()
    {
        return this._state.released;
    }

    /**
     * A short description, for messages.
     *
     * @returns {string}
     */
    toString()
    {
        return `ZooFlmFragment(${this.origin.label})`;
    }
}


/**
 * Whether ``x`` is a :js:class:`ZooFlmFragment`.
 *
 * @param {*} x
 * @returns {boolean}
 */
export function is_fragment(x)
{
    return x instanceof ZooFlmFragment;
}
