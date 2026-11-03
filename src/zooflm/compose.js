// The composer protocol of the FLM engine (Q4.3, Q8; D4 and D5 of
// dev-docs/initial-design/09-step2-engine.md).
//
// `ZooFlmEngine.render_document({ compose })` calls the composer once with
// the helpers of a `ZooFlmComposition`: `rdr()` of a fragment that is not
// standalone places it as a tree of the document and returns a marker,
// `endnotes()` and `piece()` return markers, and every other helper returns a
// real string. The engine then runs the placed fragments as one document and
// the composition replaces each marker by its tree's or piece's HTML. Each
// call has its own token in its markers, so that a marker kept from another
// call is never taken for one of this call's.
//
// Environment-neutral: imports nothing environment-specific, runs in browsers
// as it is.

import { is_fragment } from './fragment.js';
import { make_diagnostic } from './diagnostics.js';


const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/**
 * Escapes a string for HTML text and attribute values (``&``, ``<``, ``>``,
 * ``"``, ``'``). Any other value is converted to a string first.
 *
 * @param {*} s
 * @returns {string}
 */
export function html_escape(s)
{
    return String(s).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}


/**
 * Whether a value is not empty: ``false`` for ``null``, ``undefined``,
 * ``''``, an empty array and an empty fragment (its tree holds only
 * whitespace, comments and paragraph breaks); ``true`` for anything else
 * (numbers and booleans included).
 *
 * @param {*} x
 * @returns {boolean}
 */
export function value_not_empty(x)
{
    if (x == null || x === '') {
        return false;
    }
    if (Array.isArray(x)) {
        return x.length > 0;
    }
    if (is_fragment(x)) {
        return !x.empty;
    }
    return true;
}


/**
 * The defaults of the options that control how ``rdr()`` renders an array:
 * the items are each wrapped by ``list_item_wrapper``, joined with
 * ``list_joiner``, and the whole is passed to ``list_full_wrapper``.
 */
export const DEFAULT_RENDER_VALUE_OPTIONS = Object.freeze({
    list_joiner: '',
    list_item_wrapper: (x) => `<span class="paragraph-in-list">${x}</span>`,
    list_full_wrapper: (x) => x,
});


/**
 * The marker of all the pieces placed after the content, in the composition
 * whose token is ``token``.
 *
 * @param {number} token
 * @returns {string}
 */
export function endnotes_marker(token)
{
    return `<flm:${token}:endnotes/>`;
}

/**
 * The marker of the ``n``-th tree placed in the composition whose token is
 * ``token``.
 *
 * @param {number} token
 * @param {number} n
 * @returns {string}
 */
export function tree_marker(token, n)
{
    return `<flm:${token}:tree:${n}/>`;
}

/**
 * The marker of the piece ``name`` in the composition whose token is
 * ``token``.
 *
 * @param {number} token
 * @param {string} name
 * @returns {string}
 */
export function piece_marker(token, name)
{
    return `<flm:${token}:piece:${name}/>`;
}

// Anything of the markers' form: those a composition did not issue are stray.
const RX_MARKER = /<flm:[^<>]*\/>/g;
const RX_ISSUED = /^<flm:\d+:(tree|piece|endnotes)(?::(.*))?\/>$/;
const RX_PIECE_NAME = /^[A-Za-z0-9_.:-]+$/;

/** The origin of the diagnostics the composer's helpers report. */
const COMPOSER_ORIGIN = Object.freeze({ label: 'composer' });

function describe(x)
{
    if (x === null) {
        return 'null';
    }
    if (typeof x === 'object' && x._zoodb != null && typeof x._zoodb === 'object') {
        const type = x._zoodb.object_type ?? x._zoodb.type ?? null;
        const id = x._zoodb.id ?? '?';
        return `a zoo object (${(type != null) ? `${type} ` : ''}‘${id}’); pass one of its fields`;
    }
    if (typeof x === 'object') {
        const name = Object.getPrototypeOf(x)?.constructor?.name;
        return `an object (${name ?? 'no prototype'}, keys: ${Object.keys(x).slice(0, 5).join(', ') || 'none'})`;
    }
    return `a value of type ${typeof x}`;
}


/**
 * One call of the composer protocol: the helpers handed to the composer,
 * what they recorded (the trees placed, in order of first placement; the
 * pieces asked for; the definitions the real strings require; the
 * diagnostics), and the substitution of the markers after the run.
 *
 * Made by :js:meth:`ZooFlmEngine.render_document`; the composer only sees
 * ``helpers``. Each composition has its own ``token``, written in its
 * markers (``<flm:K:tree:N/>``, ``<flm:K:piece:NAME/>``,
 * ``<flm:K:endnotes/>``): a marker of another call is stray here.
 *
 * A fragment is placed once per layout: placed through both ``rdr()`` and
 * ``rdrblock()`` on one page, it is two trees sharing one parse, so a label in
 * it is reported as a duplicate. A piece placed before the content (a table
 * of contents, the document's metadata) is reached only through ``piece()``;
 * ``endnotes()`` places those after the content.
 */
export class ZooFlmComposition
{
    /**
     * @param {ZooFlmEngine} engine - the engine the fragments belong to
     * @param {object} options
     * @param {number} options.token - this call's token, written in its markers
     * @param {string} options.context - the index context of ``ref()``
     * @param {string} options.unresolved - ``'error'`` or ``'warn'``
     * @param {object} options.render_value_options - how arrays are rendered
     */
    constructor(engine, { token, context, unresolved, render_value_options })
    {
        this.engine = engine;
        /** This call's token, written in its markers. */
        this.token = token;
        this.context = context;
        this.unresolved = unresolved;
        this.render_value_options = render_value_options;
        /** The handles placed, in order of first placement (the document order). */
        this.handles = [];
        /** The fragment of each placed handle, in the same order. */
        this.fragments = [];
        /** The definitions the helpers' real strings require (snippets). */
        this.requires = new Set();
        /** The diagnostics of the helpers (references, snippets rendered on a miss). */
        this.diagnostics = [];
        this._marker_of_handle = new Map();
        this._issued = new Set();
        this._pieces = new Set();

        const self = this;
        /**
         * The helpers handed to the composer: ``ne``, ``rdr``, ``rdrblock``,
         * ``ref``, ``refhref``, ``endnotes``, ``piece``, ``escape``.
         */
        this.helpers = Object.freeze({
            ne: value_not_empty,
            rdr: (x) => self.rdr(x),
            rdrblock: (x) => self.rdrblock(x),
            ref: (object_type, object_id, options) => self.ref(object_type, object_id, options),
            refhref: (object_type, object_id) => self.refhref(object_type, object_id),
            endnotes: () => self.endnotes(),
            piece: (name) => self.piece(name),
            escape: html_escape,
        });
    }

    /**
     * Renders a value: ``null`` and ``undefined`` as ``''``; a string
     * HTML-escaped; a number or a boolean as its text; an array as its items
     * through ``rdr``, wrapped and joined per the render value options; a
     * standalone fragment as its html snippet; any other fragment placed as
     * a tree of the document, returning its marker (placed once: a later
     * ``rdr()`` of it returns the same marker). Anything else throws a
     * ``TypeError`` naming what it got.
     *
     * The same fragment given to ``rdr()`` and to ``rdrblock()`` on one page is
     * placed twice, as two trees sharing one parse: a label in it is then
     * reported as a duplicate.
     *
     * @param {*} x
     * @returns {string}
     */
    rdr(x)
    {
        return this._render(x, null);
    }

    /**
     * As :js:meth:`rdr`, a fragment placed with its blocks layout (its
     * paragraphs built), standalone or not. A fragment also given to
     * ``rdr()`` on the same page is placed twice (see :js:meth:`rdr`).
     *
     * @param {*} x
     * @returns {string}
     */
    rdrblock(x)
    {
        return this._render(x, 'blocks');
    }

    _render(x, layout)
    {
        if (x == null) {
            return '';
        }
        if (typeof x === 'string') {
            return html_escape(x);
        }
        if (typeof x === 'number' || typeof x === 'boolean' || typeof x === 'bigint') {
            return html_escape(String(x));
        }
        if (Array.isArray(x)) {
            const { list_joiner, list_item_wrapper, list_full_wrapper } = this.render_value_options;
            return list_full_wrapper(
                x.map( (item) => list_item_wrapper(this._render(item, layout)) ).join(list_joiner)
            );
        }
        if (is_fragment(x)) {
            this.engine._check_fragment(x);
            if (layout == null && x.standalone) {
                return this._snippet_html(x);
            }
            return this._place(x, layout ?? x.layout);
        }
        throw new TypeError(`Cannot render ${describe(x)}: rdr() takes null, a string, a number, `
                            + `a boolean, an array or a ZooFlmFragment`);
    }

    _place(fragment, layout)
    {
        const handle = this.engine._layout_handle(fragment, layout);
        let marker = this._marker_of_handle.get(handle);
        if (marker == null) {
            marker = tree_marker(this.token, this.handles.length);
            this.handles.push(handle);
            this.fragments.push(fragment);
            this._marker_of_handle.set(handle, marker);
            this._issued.add(marker);
        }
        return marker;
    }

    _snippet_html(fragment)
    {
        const entry = this.engine._snippet_entry(fragment, 'html', this.diagnostics);
        entry.requires.forEach( (r) => this.requires.add(r) );
        return entry.value;
    }

    _text_snippet_html(text)
    {
        const entry = this.engine._text_snippet_entry(text, 'html', this.diagnostics);
        entry.requires.forEach( (r) => this.requires.add(r) );
        return entry.value;
    }

    _unresolved(helper, label)
    {
        this.diagnostics.push(make_diagnostic({
            severity: (this.unresolved === 'warn') ? 'warning' : 'error',
            identifier: 'zoodb.ref.unresolved',
            message: `${helper}(): no index entry for ‘${label}’ in the context ‘${this.context}’`,
            origin: COMPOSER_ORIGIN,
        }));
    }

    /**
     * A link to the index entry ``TYPE:ID`` of the composition's context:
     * ``<a href="HREF" class="href-ref ref-TYPE">DISPLAY</a>``, ``DISPLAY``
     * the html snippet of the entry's display (a fragment or FLM text), or of
     * ``display_flm`` when given (FLM text or a standalone fragment). A
     * missing entry is the diagnostic ``zoodb.ref.unresolved``: under
     * ``unresolved: 'error'`` an Error and the label written as text; under
     * ``'warn'`` a Warning and ``<span class="href-ref
     * ref-unresolved">TYPE:ID</span>``.
     *
     * @param {string} object_type
     * @param {string} object_id
     * @param {object} [options]
     * @param {string|ZooFlmFragment} [options.display_flm] - a custom display
     * @returns {string}
     */
    ref(object_type, object_id, { display_flm } = {})
    {
        const label = `${object_type}:${object_id}`;
        const entry = this.engine._index_entry(this.context, label);
        if (entry == null) {
            this._unresolved('ref', label);
            if (this.unresolved === 'warn') {
                return `<span class="href-ref ref-unresolved">${html_escape(label)}</span>`;
            }
            return html_escape(label);
        }
        const display = display_flm ?? entry.display;
        const display_html = is_fragment(display) ? this._snippet_html(display) : this._text_snippet_html(display);
        return `<a href="${html_escape(entry.href)}" class="href-ref ref-${html_escape(object_type)}">`
            + `${display_html}</a>`;
    }

    /**
     * The href of the index entry ``TYPE:ID`` of the composition's context,
     * or ``null`` with the diagnostic ``zoodb.ref.unresolved`` (as
     * :js:meth:`ref`).
     *
     * @param {string} object_type
     * @param {string} object_id
     * @returns {string|null}
     */
    refhref(object_type, object_id)
    {
        const label = `${object_type}:${object_id}`;
        const entry = this.engine._index_entry(this.context, label);
        if (entry == null) {
            this._unresolved('refhref', label);
            return null;
        }
        return entry.href;
    }

    /**
     * The marker of all the pieces placed after the content, in the run's
     * order (the footnote list, then the bibliography), except those placed
     * by :js:meth:`piece`. A piece placed before the content is reached only
     * through :js:meth:`piece`.
     *
     * @returns {string}
     */
    endnotes()
    {
        const marker = endnotes_marker(this.token);
        this._issued.add(marker);
        return marker;
    }

    /**
     * The marker of one piece by its table name (``flm.xnotes.list.footnote``,
     * ``flm.citations.bibliography``, or a piece placed before the content);
     * replaced by nothing when the run has no such piece (a page without
     * footnotes).
     *
     * @param {string} name
     * @returns {string}
     */
    piece(name)
    {
        if (typeof name !== 'string' || !RX_PIECE_NAME.test(name)) {
            throw new TypeError(`piece(): invalid piece name ${JSON.stringify(name)}`);
        }
        const marker = piece_marker(this.token, name);
        this._pieces.add(name);
        this._issued.add(marker);
        return marker;
    }

    /**
     * Replaces every marker the helpers issued, wherever it appears in
     * ``composed``, by its tree's or piece's HTML from the run's output
     * ``out`` (the core's ``render_html`` result, or ``null`` when no tree
     * was placed); each marker of the markers' form that the helpers did not
     * issue (another call's included) is left in place and reported as the
     * Error ``zoodb.compose.stray-marker``. A piece the run produced with
     * content, placed after the content (the footnote list, the
     * bibliography), that no marker placed is the Warning
     * ``zoodb.compose.piece-not-placed``.
     *
     * @param {string} composed - the composer's result
     * @param {object|null} out
     * @returns {{html: string, requires: Set<string>, diagnostics: object[]}}
     *     the page, the definitions it requires (the substituted trees and
     *     pieces, and the helpers' snippets), the helpers' diagnostics and
     *     the stray markers'
     */
    substitute(composed, out)
    {
        const trees = out?.trees ?? [];
        const tree_requires = out?.tree_requires ?? [];
        const pieces = out?.pieces ?? [];
        const piece_of = new Map(pieces.map( (p) => [p.name, p] ));
        const requires = new Set(this.requires);
        const add_requires = (list) => (list ?? []).forEach( (r) => requires.add(r) );
        const strays = new Map();
        const placed_pieces = new Set();

        const html = composed.replace(RX_MARKER, (marker) => {
            if (!this._issued.has(marker)) {
                strays.set(marker, (strays.get(marker) ?? 0) + 1);
                return marker;
            }
            const [, kind, what] = RX_ISSUED.exec(marker);
            if (kind === 'endnotes') {
                const end = pieces.filter( (p) => p.place === 'after-content' && !this._pieces.has(p.name) );
                end.forEach( (p) => {
                    add_requires(p.requires);
                    placed_pieces.add(p.name);
                } );
                return end.map( (p) => p.html ).join('\n');
            }
            if (kind === 'tree') {
                const n = Number(what);
                add_requires(tree_requires[n]);
                return trees[n] ?? '';
            }
            const piece = piece_of.get(what);
            if (piece == null) {
                return '';
            }
            add_requires(piece.requires);
            placed_pieces.add(piece.name);
            return piece.html;
        });

        const diagnostics = [...this.diagnostics];
        for (const p of pieces) {
            if (p.place === 'after-content' && p.html.trim() !== '' && !placed_pieces.has(p.name)) {
                diagnostics.push(make_diagnostic({
                    severity: 'warning',
                    identifier: 'zoodb.compose.piece-not-placed',
                    message: `the run produced the piece ‘${p.name}’, which no marker placed `
                        + '(use endnotes() or piece())',
                    origin: COMPOSER_ORIGIN,
                }));
            }
        }
        for (const [marker, count] of strays) {
            diagnostics.push(make_diagnostic({
                severity: 'error',
                identifier: 'zoodb.compose.stray-marker',
                message: `the composed page holds the marker ‘${marker}’`
                    + ((count > 1) ? ` (${count} times)` : '')
                    + ', which no helper of this render_document() call produced',
                origin: COMPOSER_ORIGIN,
            }));
        }
        return { html, requires, diagnostics };
    }
}
