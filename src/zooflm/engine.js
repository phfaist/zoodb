// The FLM engine of ZooDb (level 1 of Q18; dev-docs/initial-design/
// 09-step2-engine.md): the JavaScript object a zoo holds, one per zoo, that
// owns the wasm core (`ZooFlmCore` of rust/zoodb-flm-wasm), the external
// tables (the index per context, the citations, the graphics) and the
// fragments, and renders: documents through the composer protocol, single
// fragments, snippets through a cache, text and recomposed LaTeX; it scans,
// truncates and hands out the stylesheet. It knows nothing about files, the
// network, the zoo's objects or schemas: that is the processor's.
//
// Environment-neutral: the engine takes a loaded module and imports nothing
// environment-specific (the default loader fetches the module in a browser;
// Node callers pass `load_zoodb_flm_wasm_node` of ./_load_wasm_node.js).

import { load_zoodb_flm_wasm } from './_load_wasm.js';

import { ZooFlmFragment, LAYOUTS, make_origin, is_fragment, range_origin } from './fragment.js';
import {
    ZooFlmError, apply_error_policy, check_error_policy, check_unresolved, has_errors, make_diagnostic,
    map_core_diagnostic, utf8_offset_to_index,
} from './diagnostics.js';
import { ZooFlmComposition, DEFAULT_RENDER_VALUE_OPTIONS, html_escape } from './compose.js';

export * from './fragment.js';
export * from './diagnostics.js';
export {
    ZooFlmComposition, DEFAULT_RENDER_VALUE_OPTIONS, value_not_empty, html_escape,
} from './compose.js';


/** The style definition of the backend's own page, which the engine leaves out. */
export const STYLE_PAGE = 'flm.html.style.page';

/** The outputs of a snippet and of :js:meth:`ZooFlmEngine.render_fragment`. */
export const SNIPPET_OUTPUTS = Object.freeze(['html', 'text']);

const DEFAULT_CONTEXT = 'default';

function check_output(output)
{
    if (!SNIPPET_OUTPUTS.includes(output)) {
        throw new Error(`Invalid output ‘${output}’, expected one of `
                        + SNIPPET_OUTPUTS.map( (o) => `'${o}'` ).join(', '));
    }
    return output;
}

// The render options of one run as the core takes them (`{ feature: { key:
// value } }`), checked for their shape here; the core refuses what is not a
// render option, naming it.
function check_render_options(render_options, what)
{
    if (render_options == null) {
        return null;
    }
    if (typeof render_options !== 'object' || Array.isArray(render_options)) {
        throw new TypeError(`${what}: \`render_options\` must be an object `
                            + '({ feature: { key: value } }), or null');
    }
    return render_options;
}

function excerpt(text, n = 40)
{
    const chars = Array.from(text);
    return (chars.length > n) ? chars.slice(0, n).join('') + '…' : text;
}

function trim_text(text)
{
    return text.replace(/\n+$/, '');
}

/**
 * A 64-bit hash of a string, as 16 hexadecimal digits: the two 32-bit lanes
 * of cyrb53 over the string's UTF-16 code units. Not cryptographic; the engine
 * uses it to tell configurations and sources apart (the ``settings_hash``, the
 * sources of the dumped snippets).
 *
 * @param {string} text
 * @returns {string}
 */
export function text_hash(text)
{
    let h1 = 0xdeadbeef;
    let h2 = 0x41c6ce57;
    for (let i = 0; i < text.length; ++i) {
        const c = text.charCodeAt(i);
        h1 = Math.imul(h1 ^ c, 2654435761);
        h2 = Math.imul(h2 ^ c, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    const hex = (h) => (h >>> 0).toString(16).padStart(8, '0');
    return hex(h2) + hex(h1);
}

// JSON with the keys of every object sorted (`undefined` left out, as
// JSON.stringify does), so that equal data gives equal text.
function canonical_json(value)
{
    if (Array.isArray(value)) {
        return '[' + value.map( (v) => (v === undefined) ? 'null' : canonical_json(v) ).join(',') + ']';
    }
    if (value !== null && typeof value === 'object') {
        const keys = Object.keys(value).filter( (k) => value[k] !== undefined ).sort();
        return '{' + keys.map( (k) => `${JSON.stringify(k)}:${canonical_json(value[k])}` ).join(',') + '}';
    }
    return JSON.stringify(value) ?? 'null';
}

// The core configuration with the defaults of its four keys filled in (`null`
// and a missing key take the default, as the core reads them), `off` sorted.
function normalized_core_config(core)
{
    const c = { ...(core ?? {}) };
    c.dollar_math = Boolean(c.dollar_math ?? false);
    c.srcset = c.srcset ?? null;
    c.settings = c.settings ?? {};
    c.off = [...(c.off ?? [])].sort();
    return c;
}

// A label of the index: `TYPE:ID`, both parts non-empty once trimmed (as
// flm-core's `Label::parse` reads it).
function is_index_label(label)
{
    const i = label.indexOf(':');
    return i > 0 && label.slice(0, i).trim() !== '' && label.slice(i + 1).trim() !== '';
}


/**
 * The FLM engine: one wasm core (registry, plans, fragments by handle, host
 * tables), the tables kept on the JavaScript side, the fragments and the
 * snippet cache. Create it with :js:meth:`ZooFlmEngine.create`.
 *
 * The calls take an ``error_policy`` (``'abort'``: throw a
 * :js:class:`ZooFlmError` when the call produced an Error diagnostic;
 * ``'continue'``: return the output as the backend produced it with the
 * diagnostics) and an ``unresolved`` (``'error'`` or ``'warn'``: how a
 * reference that resolves to nothing is reported), each defaulting to the
 * engine's: ``render_document``, ``render_fragment``, ``render_text`` and
 * ``render_latex`` take both; ``make_fragment``, ``set_index``,
 * ``render_snippets``, ``scan`` and ``truncate`` take ``error_policy`` only;
 * ``snippet`` and ``snippet_of_text`` take neither (the engine's defaults
 * apply); ``parse_fields`` returns its diagnostics and applies no policy. A
 * wrong argument, a released fragment, a freed engine or an error of the
 * core itself is thrown as a plain ``Error``, never returned as content.
 */
export class ZooFlmEngine
{
    /**
     * Loads the module (``load_wasm()``) and builds an engine.
     *
     * @param {object} [options]
     * @param {function(): Promise<object>} [options.load_wasm] - resolves to the
     *     module's namespace; default: the environment-neutral loader of
     *     ``./_load_wasm.js``, which fetches the module (a browser); under Node,
     *     pass ``load_zoodb_flm_wasm_node`` of ``./_load_wasm_node.js``
     * @param {object} [options.core] - the core's configuration as data:
     *     ``{ dollar_math, srcset, settings, off }`` (``settings`` one map per
     *     standard feature, user definitions under ``userdefs``; ``off`` the
     *     features switched off). An unknown key, feature or setting throws,
     *     naming it.
     * @param {string} [options.error_policy='abort'] - the default of every call
     * @param {string} [options.unresolved='error'] - the default of every call
     * @param {object} [options.render_value_options] - how ``rdr()`` renders
     *     an array: ``list_joiner``, ``list_item_wrapper``, ``list_full_wrapper``
     * @returns {Promise<ZooFlmEngine>}
     */
    static async create({
        load_wasm = load_zoodb_flm_wasm,
        core = null,
        error_policy = 'abort',
        unresolved = 'error',
        render_value_options = null,
    } = {})
    {
        const ns = await ZooFlmEngine._load(load_wasm);
        const engine = new ZooFlmEngine({
            core: new ns.ZooFlmCore(core ?? {}),
            core_config: core,
            core_version: ns.ZooFlmCore.version(),
            error_policy, unresolved, render_value_options,
        });
        try {
            apply_error_policy(engine.build_diagnostics, engine.error_policy);
        } catch (err) {
            engine.free();
            throw err;
        }
        return engine;
    }

    /**
     * The standard features and the JSON Schema of each one's settings
     * (``[{ name, schema }]``, ``schema`` ``null`` for a feature without
     * settings).
     *
     * @param {object} [options]
     * @param {function(): Promise<object>} [options.load_wasm] - as for
     *     :js:meth:`create`
     * @returns {Promise<object[]>}
     */
    static async features({ load_wasm = load_zoodb_flm_wasm } = {})
    {
        const ns = await ZooFlmEngine._load(load_wasm);
        return ns.ZooFlmCore.features();
    }

    static async _load(load_wasm)
    {
        const ns = await load_wasm();
        if (typeof ns?.ZooFlmCore !== 'function') {
            throw new Error('load_wasm() did not resolve to the FLM module (no ZooFlmCore class)');
        }
        return ns;
    }

    /**
     * Not called directly: use :js:meth:`create`.
     *
     * @param {object} options
     */
    constructor({
        core, core_config = null, core_version = null, error_policy = 'abort', unresolved = 'error',
        render_value_options = null,
    })
    {
        this.__core = core;
        this._freed = false;
        // The core configuration as given and the module's versions (for the
        // settings hash).
        this._core_config = normalized_core_config(core_config);
        this._core_version = Object.freeze({ ...(core_version ?? {}) });
        this._settings_hash = null;
        // From a loaded dump: origin label -> the snippets of a standalone
        // fragment (`{ layout, source_hash, html, requires, text }`), given
        // to the fragments made later with that label, layout and source.
        this._loaded_snippets = new Map();
        this._error_policy = check_error_policy(error_policy);
        this._unresolved = check_unresolved(unresolved);
        this._render_value_options = Object.freeze({
            ...DEFAULT_RENDER_VALUE_OPTIONS, ...(render_value_options ?? {}),
        });
        // handle -> fragment (the fragment's own handle and its siblings')
        this._fragment_of_handle = new Map();
        // canonical origin label -> the live fragments made with it, oldest
        // first (a truncated preview shares its original's label): a
        // diagnostic with that label maps to the oldest
        this._fragments_of_label = new Map();
        // the token of the last composition (render_document call)
        this._compositions = 0;
        // FLM text -> the standalone check of its ad hoc snippet (diagnostics)
        this._text_snippet_checks = new Map();
        // context -> { entries, by_label }
        this._index = new Map();
        this._installed_context = null;
        this._citations = [];
        this._graphics = [];
        // output -> Map(FLM text -> entry)
        this._text_snippets = new Map(SNIPPET_OUTPUTS.map( (o) => [o, new Map()] ));
        this._definitions = null;
        this._definition_order = null;
        this._anonymous = 0;
        /** The diagnostics of the registry build, mapped. */
        this.build_diagnostics = this._map(core.build_diagnostics(), []);
    }

    /** The default error policy of the calls. */
    get error_policy() { return this._error_policy; }

    /** The default ``unresolved`` of the calls. */
    get unresolved() { return this._unresolved; }

    /** The default render value options of :js:meth:`render_document`. */
    get render_value_options() { return this._render_value_options; }

    /**
     * The versions of the module the engine runs: ``{ binding, flm_core }``
     * (``ZooFlmCore.version()``).
     *
     * @returns {object}
     */
    get core_version()
    {
        return this._core_version;
    }

    /**
     * The hash of the core configuration the engine was created with
     * (``dollar_math``, ``srcset``, ``settings``, ``off``; a missing key and
     * ``null`` count as the default) and of the module's versions
     * (:js:attr:`core_version`): two engines with the same hash read and
     * render FLM alike. A dump (:js:meth:`dump`) carries it, and
     * :js:meth:`load` refuses a dump made under another configuration or by
     * another build of the module.
     *
     * @returns {string}
     */
    get settings_hash()
    {
        this._settings_hash ??= text_hash(canonical_json({
            core: this._core_config, version: this._core_version,
        }));
        return this._settings_hash;
    }

    /**
     * The wasm core (``ZooFlmCore``), for what the engine does not wrap
     * (the counters). Handles the engine holds are not to be released
     * through it.
     */
    get core() { return this._core; }

    /** Whether :js:meth:`free` was called. */
    get freed() { return this._freed; }

    /**
     * Frees the wasm core; the engine and its fragments are unusable after:
     * any later call throws a plain ``Error`` saying the engine was freed.
     */
    free()
    {
        const core = this._core;
        this._freed = true;
        this.__core = null;
        core.free();
    }

    // The core, unless the engine was freed.
    get _core()
    {
        this._live();
        return this.__core;
    }

    _live()
    {
        if (this._freed) {
            throw new Error('ZooFlmEngine: the engine was freed');
        }
    }

    // --- options and checks ------------------------------------------------------------

    _policy(error_policy)
    {
        return (error_policy == null) ? this._error_policy : check_error_policy(error_policy);
    }

    _unresolved_of(unresolved)
    {
        return (unresolved == null) ? this._unresolved : check_unresolved(unresolved);
    }

    _check_fragment(f)
    {
        this._live();
        if (!is_fragment(f)) {
            throw new TypeError(`Expected a ZooFlmFragment, got ${(f === null) ? 'null' : typeof f}`);
        }
        if (f._engine !== this) {
            throw new Error(`${f} belongs to another engine`);
        }
        if (f.released) {
            throw new Error(`${f} was released`);
        }
        return f;
    }

    _fragment_list(fragments)
    {
        const list = is_fragment(fragments) ? [fragments] : Array.from(fragments);
        list.forEach( (f) => this._check_fragment(f) );
        return list;
    }

    /**
     * Maps the core's diagnostics: a label of one of ``fragments`` first (the
     * run's), then of any fragment of the engine.
     */
    _map(core_diagnostics, fragments)
    {
        const local = new Map(fragments.map( (f) => [f.origin.label, f] ));
        const fragment_of = (label) => local.get(label) ?? this._fragments_of_label.get(label)?.[0] ?? null;
        return core_diagnostics.map( (d) => map_core_diagnostic(d, fragment_of) );
    }

    // --- fragments ---------------------------------------------------------------------

    /**
     * Parses FLM source into a fragment.
     *
     * @param {string} source - the FLM source
     * @param {object} [options]
     * @param {object|string} [options.origin] - ``{ object_type, object_id,
     *     field, source_path, label, start_line, start_col, indent }``, all
     *     optional (a string is a label); the canonical label is the label
     *     given, else ``source_path#field``, else ``object_type:object_id#field``,
     *     else an anonymous ``fragment:N``
     * @param {string} [options.layout] - ``'auto'``, ``'inline'`` or
     *     ``'blocks'``; default ``'inline'`` for a standalone fragment,
     *     ``'auto'`` otherwise
     * @param {boolean} [options.standalone=false]
     * @param {string} [options.error_policy] - applied to the parse
     *     diagnostics (under ``'abort'``, a parse Error throws and no fragment
     *     is kept)
     * @returns {ZooFlmFragment}
     */
    make_fragment(source, { origin = null, layout = null, standalone = false, error_policy = null } = {})
    {
        this._live();
        if (typeof source !== 'string') {
            throw new TypeError(`make_fragment(): the source must be a string, not ${typeof source}`);
        }
        const policy = this._policy(error_policy);
        standalone = Boolean(standalone);
        layout ??= standalone ? 'inline' : 'auto';
        if (!LAYOUTS.includes(layout)) {
            throw new Error(`make_fragment(): invalid layout ‘${layout}’, expected one of ${LAYOUTS.join(', ')}`);
        }
        const fragment_origin = make_origin(origin, () => `fragment:${++this._anonymous}`);
        const parsed = this._core.parse(source, fragment_origin.label, layout);
        // The parse diagnostics are the fragment's own: mapped against its
        // origin and source.
        const own = { origin: fragment_origin, source };
        const diagnostics = parsed.diagnostics.map(
            (d) => map_core_diagnostic(d, (label) => (label === fragment_origin.label) ? own : null)
        );
        try {
            apply_error_policy(diagnostics, policy);
        } catch (err) {
            this._core.release([parsed.handle]);
            throw err;
        }
        const fragment = new ZooFlmFragment({
            engine: this, source, origin: fragment_origin, layout, standalone,
            handle: parsed.handle, diagnostics, empty: parsed.empty,
        });
        this._fragment_of_handle.set(fragment.handle, fragment);
        if (standalone && this._loaded_snippets.size > 0) {
            this._apply_loaded_snippets(fragment);
        }
        const same_label = this._fragments_of_label.get(fragment_origin.label);
        if (same_label != null) {
            same_label.push(fragment);
        } else {
            this._fragments_of_label.set(fragment_origin.label, [fragment]);
        }
        return fragment;
    }

    /**
     * Frees fragments: their handles in the core (their layout siblings'
     * too) and their snippet cache entries. A released fragment used later
     * (rendered, placed, released again) is a plain ``Error``.
     *
     * @param {ZooFlmFragment|Iterable<ZooFlmFragment>} fragments
     */
    release(fragments)
    {
        const list = this._fragment_list(fragments);
        const handles = list.flatMap( (f) => [f.handle, ...f._siblings.values()] );
        this._core.release(handles);
        for (const f of list) {
            this._fragment_of_handle.delete(f.handle);
            for (const h of f._siblings.values()) {
                this._fragment_of_handle.delete(h);
            }
            const same_label = this._fragments_of_label.get(f.origin.label) ?? [];
            const i = same_label.indexOf(f);
            if (i !== -1) {
                same_label.splice(i, 1);
            }
            if (same_label.length === 0) {
                this._fragments_of_label.delete(f.origin.label);
            }
            f._siblings.clear();
            f._snippets.clear();
            f._state.released = true;
        }
    }

    /**
     * The fragment of a core handle: its own handle or one of its layout
     * siblings' (for results of the core keyed by handle); ``null`` for a
     * handle the engine does not hold.
     *
     * @param {number} handle
     * @returns {ZooFlmFragment|null}
     */
    fragment_of(handle)
    {
        this._live();
        return this._fragment_of_handle.get(handle) ?? null;
    }

    /**
     * Whether ``text`` is valid FLM: it parses (inline) with no Error
     * diagnostic. Nothing is kept. The citation compiler asks it of the
     * chunks of text the CSL formatter produces
     * (:js:func:`install_csl_flm_output_format`).
     *
     * @param {string} text
     * @returns {boolean}
     */
    parses(text)
    {
        this._live();
        if (typeof text !== 'string') {
            throw new TypeError(`parses(): the text must be a string, not ${typeof text}`);
        }
        let parsed;
        try {
            parsed = this._core.parse(text, 'parses', 'inline');
        } catch {
            // the core refused the text (a parse that aborts)
            return false;
        }
        this._core.release([parsed.handle]);
        return !parsed.diagnostics.some( (d) => d.severity === 'error' );
    }

    /**
     * Reads the fields of an FLM data file (Q16): the ``\begin{field}{NAME}
     * … \end{field}`` blocks of ``text``, parsed by the core with the
     * registry's language, the bodies verbatim. Nothing is kept. Content
     * outside the blocks other than whitespace and ``%%`` comments is the
     * Error ``zoodb.fields.stray-content`` (one per line); an unclosed block
     * is the parser's Error (``core.environments.missing-terminator``). The
     * FLM-files loader (:js:class:`FlmFilesDbDataLoader`) calls it on the
     * file's body.
     *
     * @param {string} text - the text holding the blocks (a file's body)
     * @param {object} [options]
     * @param {object|string} [options.origin] - as for :js:meth:`make_fragment`:
     *     the diagnostics' origin; ``start_line`` and ``start_col`` say where
     *     ``text`` starts in its file (the diagnostics then carry
     *     ``file_line`` and ``file_col``)
     * @returns {{fields: object[], diagnostics: object[]}} ``fields`` in the
     *     text's order, each ``{ name, start, end, text }``: the field's name
     *     (the block's argument), the UTF-8 byte range of its body in
     *     ``text`` and the body itself; ``diagnostics`` in the engine's
     *     shape, line and column in ``text``
     */
    parse_fields(text, { origin = null } = {})
    {
        this._live();
        if (typeof text !== 'string') {
            throw new TypeError(`parse_fields(): the text must be a string, not ${typeof text}`);
        }
        const fields_origin = make_origin(origin, () => `fields:${++this._anonymous}`);
        const out = this._core.parse_fields(text, fields_origin.label);
        const own = { origin: fields_origin, source: text };
        return {
            fields: out.fields.map( ({ name, start, end, text }) => ({ name, start, end, text }) ),
            diagnostics: out.diagnostics.map(
                (d) => map_core_diagnostic(d, (label) => (label === fields_origin.label) ? own : null)
            ),
        };
    }

    /** The handle of ``f`` with the given layout: its own, or a sibling sharing the tree. */
    _layout_handle(f, layout)
    {
        if (layout === f.layout) {
            return f.handle;
        }
        let handle = f._siblings.get(layout);
        if (handle == null) {
            handle = this._core.with_layout(f.handle, layout);
            f._siblings.set(layout, handle);
            this._fragment_of_handle.set(handle, f);
        }
        return handle;
    }

    // --- tables ------------------------------------------------------------------------

    /**
     * Sets the index of a context: the targets of ``\ref`` to other objects
     * and of the composer's ``ref()``. Kept per context and installed in the
     * core now and again before any run whose context differs from the
     * installed one.
     *
     * A display given as a fragment that is not standalone is the Error
     * ``zoodb.index.display-not-standalone`` and its entry is left out. The
     * displays are parsed again by the core (inline, origin ``index:LABEL``)
     * for ``\ref``; their parse diagnostics are returned. The call is
     * all-or-nothing: an entry refused with a thrown ``Error`` (not an
     * object, no ``TYPE:ID`` label, a display neither a fragment nor text, a
     * released fragment) or a ``ZooFlmError`` under ``'abort'`` leaves the
     * engine as it was (the kept tables, and the index installed in the core).
     *
     * @param {Iterable<object>} entries - ``[{ label, href, display }]``,
     *     ``label`` ``TYPE:ID``, ``display`` a standalone fragment or FLM text
     * @param {object} [options]
     * @param {string} [options.context='default']
     * @param {string} [options.error_policy] - applied to the diagnostics of
     *     the displays
     * @returns {{diagnostics: object[], has_errors: boolean}}
     */
    set_index(entries, { context = DEFAULT_CONTEXT, error_policy = null } = {})
    {
        this._live();
        const policy = this._policy(error_policy);
        const refused = [];
        const list = [];
        for (const e of entries) {
            if (typeof e?.label !== 'string' || typeof e.href !== 'string') {
                throw new TypeError(`set_index(): an entry is { label, href, display }, got ${JSON.stringify(e)}`);
            }
            if (!is_index_label(e.label)) {
                throw new Error(`set_index(): the label ‘${e.label}’ is not of the form TYPE:ID`);
            }
            if (is_fragment(e.display)) {
                this._check_fragment(e.display);
                if (!e.display.standalone) {
                    refused.push(make_diagnostic({
                        severity: 'error',
                        identifier: 'zoodb.index.display-not-standalone',
                        message: `the display of the index entry ‘${e.label}’ (context ‘${context}’) is `
                            + `${e.display.origin.label}, which is not standalone; the entry is left out`,
                        origin: e.display.origin,
                    }));
                    continue;
                }
            } else if (typeof e.display !== 'string') {
                throw new TypeError(`set_index(): the display of ‘${e.label}’ is a fragment or FLM text`);
            }
            list.push(Object.freeze({ label: e.label, href: e.href, display: e.display }));
        }
        // In the core first: if the core refuses the entries (it throws), it
        // keeps its index and nothing here has changed.
        const previous = this._installed_context;
        const core_diagnostics = this._core.set_external_index(this._core_index_entries(list));
        const diagnostics = [...refused, ...this._map(core_diagnostics, [])];
        const errors = has_errors(diagnostics);
        if (errors && policy === 'abort') {
            // Leave the engine as it was: the previous index back in the core.
            this._install_index(previous);
            throw new ZooFlmError(diagnostics);
        }
        this._index.set(context, {
            entries: Object.freeze(list),
            by_label: new Map(list.map( (e) => [e.label, e] )),
        });
        this._installed_context = context;
        return { diagnostics, has_errors: errors };
    }

    _core_index_entries(entries)
    {
        return entries.map( (e) => ({
            label: e.label,
            href: e.href,
            display: is_fragment(e.display) ? e.display.source : e.display,
        }) );
    }

    // Installs the kept index of `context` in the core (`null`: none).
    _install_index(context)
    {
        const entries = (context != null) ? (this._index.get(context)?.entries ?? []) : [];
        const core_diagnostics = this._core.set_external_index(this._core_index_entries(entries));
        this._installed_context = context;
        return core_diagnostics;
    }

    _ensure_context(context)
    {
        if (context !== this._installed_context) {
            this._install_index(context);
        }
    }

    _index_entry(context, label)
    {
        return this._index.get(context)?.by_label.get(label) ?? null;
    }

    /**
     * Replaces the citations table: ``[{ key, text }]``, ``key``
     * ``prefix:key`` (the prefix in any letter case), ``text`` the compiled
     * citation as FLM inline text.
     *
     * @param {Iterable<object>} entries
     */
    set_citations(entries)
    {
        const list = Array.from(entries);
        this._core.set_citations(list);
        this._citations = Object.freeze(list);
    }

    /**
     * Replaces the graphics table: ``[{ origin, path, identity, media_type,
     * address, kind, width_px, height_px, dpi, width_pt, height_pt }]``,
     * keyed by ``origin`` (the canonical label of the fragment the image is
     * written in, as :js:meth:`scan` reports it) and ``path`` (as written).
     *
     * @param {Iterable<object>} entries
     */
    set_graphics(entries)
    {
        const list = Array.from(entries);
        this._core.set_graphics(list);
        this._graphics = Object.freeze(list);
    }

    /**
     * The kept tables: ``{ index: { CONTEXT: entries }, citations, graphics }``,
     * as they were given.
     */
    get tables()
    {
        this._live();
        const index = Object.create(null);
        for (const [context, { entries }] of this._index) {
            index[context] = entries;
        }
        return { index, citations: this._citations, graphics: this._graphics };
    }

    // --- definitions -------------------------------------------------------------------

    /**
     * Every style and script definition the registry declares (``[{ id,
     * kind, owner, parts }]``, ``parts`` ``[{ kind, text }]`` with ``kind``
     * ``'inline'``, ``'file'``, ``'url'`` or ``'table'``), the styles first,
     * each in the features' registration order.
     *
     * @returns {object[]}
     */
    html_definitions()
    {
        this._live();
        if (this._definitions == null) {
            this._definitions = Object.freeze(this._core.html_definitions());
            this._definition_order = new Map(this._definitions.map( (d, i) => [d.id, i] ));
        }
        return this._definitions;
    }

    /**
     * The stylesheet of FLM content: the inline parts of every style
     * definition except the backend's own page (``flm.html.style.page``), in
     * the registry's order, each definition named by a comment line (the
     * backend's texts begin with one; any other gets one). A definition
     * delivered only as a file or an address has no text here.
     *
     * @returns {string}
     */
    html_stylesheet()
    {
        const blocks = [];
        for (const d of this.html_definitions()) {
            if (d.kind !== 'style' || d.id === STYLE_PAGE) {
                continue;
            }
            const text = d.parts.filter( (p) => p.kind === 'inline' ).map( (p) => p.text ).join('\n');
            if (!text) {
                continue;
            }
            const named = text.startsWith(`/* ${d.id} */`);
            blocks.push((named ? '' : `/* ${d.id} (feature ${d.owner}) */\n`) + text.replace(/\n+$/, ''));
        }
        return blocks.join('\n\n') + '\n';
    }

    /**
     * The script tags of FLM content, for a page's ``<head>``: every script
     * definition (MathJax's: its configuration, then its loader), in the
     * registry's order, each named by an HTML comment line
     * (``<!-- ID (feature OWNER) -->``), its parts in their declared order:
     * an inline part as ``<script>`` holding the text on its own lines, an
     * address as ``<script src="…" async></script>`` (``async`` keeps the
     * page from waiting on a large script; the inline parts before it run
     * first all the same). A part delivered as a file or by a table gives no
     * tag: the host serves the file itself.
     *
     * @returns {string} the tags, one per line and a final newline; ``''``
     *     when no definition is a script
     */
    html_scripts()
    {
        const lines = [];
        for (const d of this.html_definitions()) {
            if (d.kind !== 'script') {
                continue;
            }
            lines.push(`<!-- ${d.id} (feature ${d.owner}) -->`);
            for (const p of d.parts) {
                if (p.kind === 'inline') {
                    lines.push(`<script>\n${p.text.replace(/\n+$/, '')}\n</script>`);
                } else if (p.kind === 'url') {
                    lines.push(`<script src="${html_escape(p.text)}" async></script>`);
                }
            }
        }
        return (lines.length > 0) ? lines.join('\n') + '\n' : '';
    }

    /** The given requirements in the registry's order (unknown ones last). */
    _ordered_requires(requires)
    {
        this.html_definitions();
        const order = this._definition_order;
        const rank = (id) => order.get(id) ?? order.size;
        return [...requires].sort( (a, b) => (rank(a) - rank(b)) || ((a < b) ? -1 : (a > b) ? 1 : 0) );
    }

    /**
     * The definitions of the given requirements, in the registry's order,
     * the page style left out: the run's resolved rows where the run has them,
     * else the registry's.
     */
    _definitions_for(requires, run_definitions)
    {
        const run = new Map((run_definitions ?? []).map( (d) => [d.id, d] ));
        return this.html_definitions()
            .filter( (d) => d.id !== STYLE_PAGE && requires.has(d.id) )
            .map( (d) => run.get(d.id) ?? d );
    }

    // --- single fragments and snippets -------------------------------------------------

    /**
     * One fragment rendered alone, as one tree: ``{ output, value, requires,
     * diagnostics, definitions }``; ``render_options`` those of this run only
     * (``null`` for the snippets).
     */
    _render_one(f, output, unresolved, render_options = null)
    {
        const handle = f.handle;
        if (output === 'html') {
            const out = this._core.render_html([handle], {
                unresolved_refs_warning: unresolved === 'warn', render_options,
            });
            const requires = out.tree_requires[0] ?? [];
            return {
                output,
                value: out.trees[0] ?? '',
                requires,
                diagnostics: this._map(out.diagnostics, [f]),
                definitions: this._definitions_for(new Set(requires), out.definitions),
            };
        }
        const out = this._core.render_text([handle], {
            unresolved_refs_warning: unresolved === 'warn', per_tree: false, pieces: false, render_options,
        });
        return {
            output,
            value: trim_text(out.text),
            requires: [],
            diagnostics: this._map(out.diagnostics, [f]),
            definitions: [],
        };
    }

    /**
     * Renders one fragment alone, as one tree (no composer, no pieces placed).
     *
     * @param {ZooFlmFragment} f
     * @param {object} [options]
     * @param {string} [options.output='html'] - ``'html'`` or ``'text'``
     * @param {string} [options.context='default'] - the index of the run
     * @param {string} [options.unresolved]
     * @param {string} [options.error_policy]
     * @param {object} [options.render_options] - the core's render options
     *     of this run only, as for :js:meth:`render_document` (for text,
     *     ``text.width`` and ``text.link_addresses`` are refused as well)
     * @returns {object} ``{ html | text, definitions, requires, diagnostics,
     *     has_errors }`` (``definitions`` and ``requires`` empty for text)
     */
    render_fragment(f, {
        output = 'html', context = DEFAULT_CONTEXT, unresolved = null, error_policy = null,
        render_options = null,
    } = {})
    {
        this._check_fragment(f);
        check_output(output);
        render_options = check_render_options(render_options, 'render_fragment()');
        const policy = this._policy(error_policy);
        unresolved = this._unresolved_of(unresolved);
        this._ensure_context(context);
        const one = this._render_one(f, output, unresolved, render_options);
        const has_errors = apply_error_policy(one.diagnostics, policy);
        return {
            [output]: one.value,
            definitions: one.definitions,
            requires: one.requires,
            diagnostics: one.diagnostics,
            has_errors,
        };
    }

    _snippet_cacheable(entry)
    {
        return !entry.diagnostics.some( (d) => d.severity === 'error' );
    }

    _not_standalone(f, output)
    {
        return make_diagnostic({
            severity: 'error',
            identifier: 'zoodb.snippet.not-standalone',
            message: `a ${output} snippet of ${f.origin.label} was asked for, but the fragment is not `
                + 'standalone (it is rendered alone instead, and not cached)',
            origin: f.origin,
        });
    }

    /**
     * The snippet cache entry of ``f`` for ``output``, rendered on a miss.
     * The diagnostics of a miss go to ``sink`` when given, else they are
     * subject to the engine's error policy here. An entry with an Error is
     * not cached.
     */
    _snippet_entry(f, output, sink)
    {
        this._check_fragment(f);
        check_output(output);
        if (!f.standalone) {
            const one = this._render_one(f, output, this._unresolved);
            const diagnostics = [this._not_standalone(f, output), ...one.diagnostics];
            if (sink != null) {
                sink.push(...diagnostics);
            } else {
                apply_error_policy(diagnostics, this._error_policy);
            }
            return { output, value: one.value, requires: one.requires, diagnostics };
        }
        const cached = f._snippets.get(output);
        if (cached != null) {
            return cached;
        }
        const one = this._render_one(f, output, this._unresolved);
        const entry = Object.freeze({
            output, value: one.value, requires: Object.freeze(one.requires),
            diagnostics: Object.freeze(one.diagnostics),
        });
        if (sink != null) {
            sink.push(...entry.diagnostics);
        } else {
            apply_error_policy(entry.diagnostics, this._error_policy);
        }
        if (this._snippet_cacheable(entry)) {
            f._snippets.set(output, entry);
        }
        return entry;
    }

    /**
     * Renders the snippets of standalone fragments into the cache: for
     * ``html``, one run over all the fragments, each a tree; for ``text``,
     * one run per fragment, each alone (the core cannot cut one tree's text
     * out of a run's). Pieces are never placed. A fragment not marked
     * standalone is the Error ``zoodb.snippet.not-standalone`` and is left
     * out; an entry with an Error is not cached. No standalone check is run
     * on the fragments' content (a reference, a citation, a label in them):
     * the processor runs :js:meth:`scan`, which checks every standalone
     * fragment, first.
     *
     * @param {Iterable<ZooFlmFragment>} fragments
     * @param {object} [options]
     * @param {string[]|string} [options.outputs=['html', 'text']]
     * @param {string} [options.error_policy]
     * @returns {{diagnostics: object[], has_errors: boolean}}
     */
    render_snippets(fragments, { outputs = SNIPPET_OUTPUTS, error_policy = null } = {})
    {
        this._live();
        const list = [...new Set(this._fragment_list(fragments))];
        const outs = Array.from((typeof outputs === 'string') ? [outputs] : outputs, check_output);
        const policy = this._policy(error_policy);
        const warn = this._unresolved === 'warn';
        const diagnostics = [];
        const standalone = [];
        for (const f of list) {
            if (f.standalone) {
                standalone.push(f);
            } else {
                for (const output of outs) {
                    diagnostics.push(this._not_standalone(f, output));
                }
            }
        }
        const store = (f, output, value, requires, entry_diagnostics) => {
            const entry = Object.freeze({
                output, value, requires: Object.freeze(requires), diagnostics: Object.freeze(entry_diagnostics),
            });
            if (this._snippet_cacheable(entry)) {
                f._snippets.set(output, entry);
            } else {
                f._snippets.delete(output);
            }
        };
        for (const output of outs) {
            if (standalone.length === 0) {
                break;
            }
            if (output === 'html') {
                const out = this._core.render_html(standalone.map( (f) => f.handle ),
                                                   { unresolved_refs_warning: warn });
                const mapped = this._map(out.diagnostics, standalone);
                diagnostics.push(...mapped);
                standalone.forEach( (f, i) => store(
                    f, output, out.trees[i] ?? '', out.tree_requires[i] ?? [],
                    mapped.filter( (d) => d.origin === f.origin ),
                ) );
            } else {
                for (const f of standalone) {
                    const one = this._render_one(f, output, this._unresolved);
                    diagnostics.push(...one.diagnostics);
                    store(f, output, one.value, one.requires, one.diagnostics);
                }
            }
        }
        const has_errors = apply_error_policy(diagnostics, policy);
        return { diagnostics, has_errors };
    }

    /**
     * The snippet of a standalone fragment (its html or text, rendered
     * alone), from the cache, or rendered and cached on a miss, the miss's
     * diagnostics subject to the engine's error policy. A fragment that is not
     * standalone is the Error ``zoodb.snippet.not-standalone`` (under
     * ``'continue'``, it is rendered alone and not cached).
     *
     * @param {ZooFlmFragment} f
     * @param {string} [output='html'] - ``'html'`` or ``'text'``
     * @returns {string}
     */
    snippet(f, output = 'html')
    {
        return this._snippet_entry(f, output, null).value;
    }

    /**
     * The snippet cache entry of a fragment, without rendering: ``{ output,
     * value, requires, diagnostics }``, or ``null`` when it is not cached.
     *
     * @param {ZooFlmFragment} f
     * @param {string} [output='html']
     * @returns {object|null}
     */
    snippet_entry(f, output = 'html')
    {
        this._check_fragment(f);
        return f._snippets.get(check_output(output)) ?? null;
    }

    _text_snippet_entry(text, output, sink)
    {
        if (is_fragment(text)) {
            return this._snippet_entry(text, output, sink);
        }
        this._live();
        if (typeof text !== 'string') {
            throw new TypeError(`A snippet's FLM text must be a string, not ${(text === null) ? 'null' : typeof text}`);
        }
        check_output(output);
        const cache = this._text_snippets.get(output);
        const cached = cache.get(text);
        if (cached != null) {
            return cached;
        }
        const f = this.make_fragment(text, {
            origin: { label: `snippet ${JSON.stringify(excerpt(text))}` },
            layout: 'inline', standalone: true, error_policy: 'continue',
        });
        let one;
        let check = this._text_snippet_checks.get(text);
        try {
            if (check == null) {
                // The standalone check of the core (the scan's), once per text.
                const scan = this._core.scan([f.handle], [f.handle]);
                check = this._map(
                    scan.diagnostics.filter( (d) => d.identifier === 'zoodb.standalone.violation' ), [f],
                ).map( (d) => Object.freeze({
                    ...d, severity: 'error', identifier: 'zoodb.snippet.not-standalone',
                    message: `the ad hoc snippet is not standalone: ${d.message}`,
                }) );
                this._text_snippet_checks.set(text, check);
            }
            one = this._render_one(f, output, this._unresolved);
        } finally {
            this.release(f);
        }
        const entry = Object.freeze({
            output, value: one.value, requires: Object.freeze(one.requires),
            diagnostics: Object.freeze([...check, ...one.diagnostics]),
        });
        if (sink != null) {
            sink.push(...entry.diagnostics);
        } else {
            apply_error_policy(entry.diagnostics, this._error_policy);
        }
        if (this._snippet_cacheable(entry)) {
            cache.set(text, entry);
        }
        return entry;
    }

    /**
     * The snippet of ad hoc FLM text (a custom display, a plain string given
     * where a fragment is expected): parsed inline as a standalone fragment,
     * checked by the core's standalone check (once per text: a reference,
     * a citation, a label or a note in it is the Error
     * ``zoodb.snippet.not-standalone``), rendered alone, and cached by the
     * text unless it has an Error; the diagnostics are subject to the
     * engine's error policy.
     *
     * @param {string} text - FLM text
     * @param {string} [output='html'] - ``'html'`` or ``'text'``
     * @returns {string}
     */
    snippet_of_text(text, output = 'html')
    {
        return this._text_snippet_entry(text, output, null).value;
    }

    // --- documents ---------------------------------------------------------------------

    /**
     * Renders a page through the composer protocol: calls ``compose(R)`` once
     * with the helpers ``R`` (``ne``, ``rdr``, ``rdrblock``, ``ref``,
     * ``refhref``, ``endnotes``, ``piece``, ``escape``; see
     * :js:class:`ZooFlmComposition`), runs the fragments the composer placed
     * as one document (in order of first placement, the context's index
     * installed), replaces the markers by the trees' and pieces' HTML, and
     * applies the error policy. The markers carry a token of this call: a
     * marker of another call is a stray marker here, never substituted.
     *
     * @param {object} options
     * @param {function(object): string} options.compose - the composer
     * @param {string} [options.context='default'] - the index of the run and
     *     of ``ref()``
     * @param {string} [options.unresolved]
     * @param {string} [options.error_policy]
     * @param {object} [options.render_value_options] - over the engine's
     *     (how ``rdr()`` renders an array)
     * @param {object} [options.render_options] - the core's render options
     *     of this run only, in the shape of the core's settings: one object
     *     per feature, of the keys the feature binds to the render request
     *     (``{ pieces: { exclude: ['flm.citations.bibliography',
     *     'flm.xnotes.list.footnote'] } }`` builds no list of cited works and
     *     no footnote list; the marks stay), set over the settings' keys one
     *     by one; a key that is unknown, fixed when the engine is created, or
     *     ``refs.unresolved`` (``unresolved`` sets it) throws a plain
     *     ``Error`` naming it
     * @returns {object} ``{ html, definitions, requires, diagnostics,
     *     has_errors }``: ``requires`` what the page's content requires (the
     *     substituted trees and pieces and the snippets), ``definitions``
     *     those definitions, in the registry's order
     */
    render_document({
        compose, context = DEFAULT_CONTEXT, unresolved = null, error_policy = null,
        render_value_options = null, render_options = null,
    } = {})
    {
        this._live();
        if (typeof compose !== 'function') {
            throw new TypeError('render_document(): `compose` must be a function');
        }
        render_options = check_render_options(render_options, 'render_document()');
        const policy = this._policy(error_policy);
        unresolved = this._unresolved_of(unresolved);
        const composition = new ZooFlmComposition(this, {
            token: ++this._compositions, context, unresolved,
            render_value_options: { ...this._render_value_options, ...(render_value_options ?? {}) },
        });
        const composed = compose(composition.helpers);
        if (typeof composed !== 'string') {
            throw new TypeError(`render_document(): the composer returned ${typeof composed}, not a string`);
        }
        let out = null;
        if (composition.handles.length > 0) {
            this._ensure_context(context);
            out = this._core.render_html(composition.handles, {
                unresolved_refs_warning: unresolved === 'warn', render_options,
            });
        }
        const { html, requires, diagnostics: composer_diagnostics } = composition.substitute(composed, out);
        const diagnostics = [
            ...((out != null) ? this._map(out.diagnostics, composition.fragments) : []),
            ...composer_diagnostics,
        ];
        const has_errors = apply_error_policy(diagnostics, policy);
        return {
            html,
            definitions: this._definitions_for(requires, out?.definitions),
            requires: this._ordered_requires(requires),
            diagnostics,
            has_errors,
        };
    }

    /**
     * Renders fragments as plain text: one run over all of them (references
     * between them resolve) for ``text``, and, with ``per_fragment``, each
     * fragment alone for ``trees`` (the search index's use: a reference to
     * another fragment does not resolve there, and shows its label). Pieces
     * are left out (a citation is its mark alone). The error policy applies
     * to the whole run's diagnostics; ``tree_diagnostics`` are each
     * fragment's own run's, reported as they are.
     *
     * @param {Iterable<ZooFlmFragment>} fragments
     * @param {object} [options]
     * @param {number|null} [options.width=null] - columns; ``null`` never wraps
     * @param {boolean} [options.link_addresses=false] - print a link's address
     * @param {boolean} [options.per_fragment=true]
     * @param {string} [options.context='default']
     * @param {string} [options.unresolved]
     * @param {string} [options.error_policy]
     * @returns {object} ``{ text, trees, tree_diagnostics, diagnostics,
     *     has_errors }``, the texts without a trailing newline
     */
    render_text(fragments, {
        width = null, link_addresses = false, per_fragment = true, context = DEFAULT_CONTEXT,
        unresolved = null, error_policy = null,
    } = {})
    {
        const list = this._fragment_list(fragments);
        const policy = this._policy(error_policy);
        unresolved = this._unresolved_of(unresolved);
        this._ensure_context(context);
        const out = this._core.render_text(list.map( (f) => f.handle ), {
            width, link_addresses, unresolved_refs_warning: unresolved === 'warn',
            per_tree: Boolean(per_fragment), pieces: false,
        });
        const diagnostics = this._map(out.diagnostics, list);
        const tree_diagnostics = out.tree_diagnostics.map( (ds, i) => this._map(ds, [list[i]]) );
        const has_errors = apply_error_policy(diagnostics, policy);
        return { text: trim_text(out.text), trees: out.trees, tree_diagnostics, diagnostics, has_errors };
    }

    /**
     * Renders fragments as one document with the recomposed-LaTeX workflow
     * (the handbook's, Q12), the context's index installed.
     *
     * @param {Iterable<ZooFlmFragment>} fragments
     * @param {object} [options]
     * @param {string[]} [options.raw_label_types] - label types written as
     *     the document spells them; every other type gets a safe label
     * @param {boolean} [options.drop_comments=false]
     * @param {string} [options.context='default']
     * @param {string} [options.unresolved]
     * @param {string} [options.error_policy]
     * @returns {object} ``{ trees, style_name, style, document, diagnostics,
     *     has_errors }``, one entry of ``trees`` per fragment
     */
    render_latex(fragments, {
        raw_label_types = [], drop_comments = false, context = DEFAULT_CONTEXT,
        unresolved = null, error_policy = null,
    } = {})
    {
        const list = this._fragment_list(fragments);
        const policy = this._policy(error_policy);
        unresolved = this._unresolved_of(unresolved);
        this._ensure_context(context);
        const out = this._core.render_latex(list.map( (f) => f.handle ), {
            raw_label_types: Array.from(raw_label_types), drop_comments: Boolean(drop_comments),
            unresolved_refs_warning: unresolved === 'warn',
        });
        const diagnostics = this._map(out.diagnostics, list);
        const has_errors = apply_error_policy(diagnostics, policy);
        return {
            trees: out.trees, style_name: out.style_name, style: out.style, document: out.document,
            diagnostics, has_errors,
        };
    }

    // --- dump and load -----------------------------------------------------------------

    /**
     * The engine's data for a browser app (Q13): ``{ settings_hash, index: {
     * CONTEXT: [{ label, href, display }] }, citations: [{ key, text }],
     * graphics: [entry], snippets: [{ label, layout, source_hash, html,
     * requires, text }] }``, plain data (JSON-serializable). An index
     * display is its FLM source (a fragment's ``source``). ``snippets`` holds
     * the cached snippets of the live standalone fragments, one per origin
     * label (the oldest fragment with the label that is not a truncated
     * preview and has a snippet cached), ``html`` and ``text`` ``null``
     * when not cached, ``requires`` the html snippet's definitions;
     * ``source_hash`` (:js:func:`text_hash` of the source) and ``layout``
     * tell :js:meth:`load` which later fragments the snippets are valid for.
     *
     * @returns {object}
     */
    dump()
    {
        this._live();
        const index = {};
        for (const [context, { entries }] of this._index) {
            index[context] = entries.map( (e) => ({
                label: e.label, href: e.href, display: is_fragment(e.display) ? e.display.source : e.display,
            }) );
        }
        const snippets = [];
        for (const [label, fragments] of this._fragments_of_label) {
            const f = fragments.find( (x) => x.standalone && x.origin.truncated !== true && x._snippets.size > 0 );
            if (f == null) {
                continue;
            }
            const html = f._snippets.get('html') ?? null;
            const text = f._snippets.get('text') ?? null;
            snippets.push({
                label, layout: f.layout, source_hash: text_hash(f.source),
                html: html?.value ?? null, requires: [...(html?.requires ?? [])], text: text?.value ?? null,
            });
        }
        return {
            settings_hash: this.settings_hash,
            index,
            citations: this._citations.map( (c) => ({ ...c }) ),
            graphics: this._graphics.map( (g) => ({ ...g }) ),
            snippets,
        };
    }

    /**
     * Installs the data of a dump (:js:meth:`dump`): the citations and
     * graphics tables, the index of every context (``default`` installed
     * last), and the snippets, which go to the cache of the standalone
     * fragments made later (or held already) with the same origin label,
     * layout and source. A dump made under another core configuration (its
     * ``settings_hash`` differs from the engine's) is refused with a plain
     * ``Error``.
     *
     * @param {object} dump
     * @param {object} [options]
     * @param {string} [options.error_policy] - applied to the diagnostics of
     *     the index displays (:js:meth:`set_index`)
     * @returns {{diagnostics: object[], has_errors: boolean}}
     */
    load(dump, { error_policy = null } = {})
    {
        this._live();
        if (dump == null || typeof dump !== 'object') {
            throw new TypeError(`load(): expected the object dump() returns, got ${(dump === null) ? 'null' : typeof dump}`);
        }
        if (dump.settings_hash !== this.settings_hash) {
            throw new Error(`load(): the dump was made under another core configuration or by another build `
                            + `of the module (settings hash ${dump.settings_hash} instead of this engine's `
                            + `${this.settings_hash})`);
        }
        this.set_citations(dump.citations ?? []);
        this.set_graphics(dump.graphics ?? []);
        const contexts = Object.keys(dump.index ?? {});
        contexts.sort( (a, b) => (a === DEFAULT_CONTEXT) - (b === DEFAULT_CONTEXT) );
        const diagnostics = [];
        for (const context of contexts) {
            diagnostics.push(...this.set_index(dump.index[context], { context, error_policy }).diagnostics);
        }
        this._loaded_snippets = new Map((dump.snippets ?? []).map( (sn) => [sn.label, sn] ));
        for (const [label, fragments] of this._fragments_of_label) {
            if (this._loaded_snippets.has(label)) {
                fragments.filter( (f) => f.standalone ).forEach( (f) => this._apply_loaded_snippets(f) );
            }
        }
        return { diagnostics, has_errors: has_errors(diagnostics) };
    }

    // Fills the snippet cache of a standalone fragment from the loaded dump,
    // when the dump holds snippets for its label, layout and source.
    _apply_loaded_snippets(f)
    {
        const loaded = this._loaded_snippets.get(f.origin.label);
        if (loaded == null || f.origin.truncated === true || loaded.layout !== f.layout
            || loaded.source_hash !== text_hash(f.source)) {
            return;
        }
        const entry = (output, value, requires) => Object.freeze({
            output, value, requires: Object.freeze([...requires]), diagnostics: Object.freeze([]),
        });
        if (loaded.html != null) {
            f._snippets.set('html', entry('html', loaded.html, loaded.requires ?? []));
        }
        if (loaded.text != null) {
            f._snippets.set('text', entry('text', loaded.text, []));
        }
    }

    // --- scan and truncation -----------------------------------------------------------

    /**
     * Scans fragments as one document (no index installed, nothing retrieved,
     * resolved or output): per fragment the labels it defines, each with the
     * anchor of its point (below) and the FLM source of the content the
     * point shows (``display``, ``null`` for a point shown by its number
     * alone), the references it makes (their labels, and whether they
     * resolved inside the scanned fragments), the images, the term
     * definitions (``\begin{defterm}{term} … \end{defterm}``) with their
     * bodies, and the keys it cites; over all of them, the cited keys with
     * their first citation; the labels written more than once, each with the
     * later point; the standalone check over the standalone fragments.
     *
     * A label's ``anchor`` is the anchor the scan gave its point when one of
     * the labels of its point forms it (``sec-intro``, ``eq-x``: the same in
     * any document), so that every label of the point has it; it is ``null``
     * for a point anchored otherwise, as on its number (a float:
     * ``figure-3``, which follows the scanned document's numbering).
     *
     * A term's ``labels`` are those of its point: the one computed from the
     * term (``defterm:<term>``, the target of a term link ``\term{…}``), one
     * per alias (``\aliasterm{…}``), then those written with ``\label``;
     * ``anchor`` is the point's when one of these labels forms it; ``display``
     * is the source of the term (``null`` when blank); ``body`` is the source
     * of the body, cut out of the fragment's source (``body_start`` and
     * ``body_end`` are its byte offsets there), without the ``\label`` and
     * ``\aliasterm`` fields, ``null`` for an empty body or one written
     * through a user definition; ``body_origin`` is the origin to make the
     * body's fragment with (:js:func:`range_origin`: the fragment's, with
     * ``term``, the term's first label, and the file position moved to where
     * the body starts), ``null`` with ``body``. A glossary makes the body's
     * fragment from ``body`` and ``body_origin``.
     *
     * A fragment's ``cited`` lists each key it cites once, in order of first
     * citation in the fragment; the scan's ``cited`` lists each key once over
     * all the fragments, with the fragment of its first citation.
     *
     * @param {Iterable<ZooFlmFragment>} fragments
     * @param {object} [options]
     * @param {string} [options.error_policy]
     * @returns {object} ``{ trees: [{ fragment, labels: [{ label, anchor,
     *     display }], refs: [{ label, resolved }], graphics: [{ path, origin
     *     }], terms: [{ labels, anchor, display, body, body_origin,
     *     body_start, body_end }], cited: [key] }], cited: [{ key, origin, fragment }],
     *     duplicate_labels: [{ label, origin, fragment, start, end }],
     *     standalone_violations, diagnostics, has_errors }``, ``origin`` the
     *     canonical label (the graphics table's key), ``start``/``end`` byte
     *     offsets into the source of the later point
     */
    scan(fragments, { error_policy = null } = {})
    {
        const list = this._fragment_list(fragments);
        const policy = this._policy(error_policy);
        const out = this._core.scan(
            list.map( (f) => f.handle ),
            list.filter( (f) => f.standalone ).map( (f) => f.handle ),
        );
        const by_label = new Map(list.map( (f) => [f.origin.label, f] ));
        const diagnostics = this._map(out.diagnostics, list);
        const has_errors = apply_error_policy(diagnostics, policy);
        const fragment_of = (origin) => (origin != null) ? (by_label.get(origin) ?? null) : null;
        const term_of = (f, t) => {
            const cut = (t.body_start != null && t.body_end != null);
            return {
                ...t,
                body: cut
                    ? f.source.slice(utf8_offset_to_index(f.source, t.body_start), utf8_offset_to_index(f.source, t.body_end))
                    : null,
                body_origin: cut ? range_origin(f, t.body_start, { term: t.labels[0] ?? null }) : null,
            };
        };
        return {
            trees: out.trees.map( (t, i) => ({
                fragment: list[i], ...t, terms: t.terms.map( (term) => term_of(list[i], term) ),
            }) ),
            cited: out.cited.map( ([key, origin]) => ({ key, origin, fragment: fragment_of(origin) }) ),
            duplicate_labels: out.duplicate_labels.map( (d) => ({ ...d, fragment: fragment_of(d.origin) }) ),
            standalone_violations: out.standalone_violations,
            diagnostics,
            has_errors,
        };
    }

    /**
     * A shortened copy of a fragment for previews: the source cut to about
     * ``chars`` characters at the node level (a word boundary in text;
     * mathematics and environments kept whole or left out; groups open at the
     * cut closed; ``marker`` appended), parsed again as a new fragment with
     * the same layout, standalone flag and origin, the canonical label
     * unchanged (so that its images and citations still match the graphics
     * and citations tables) and ``truncated: true`` added (shown by
     * :js:func:`format_diagnostic`).
     *
     * @param {ZooFlmFragment} f
     * @param {object} options
     * @param {number} options.chars
     * @param {number} [options.min_chars]
     * @param {string} [options.marker=' …']
     * @param {boolean} [options.first_paragraph=false] - keep what precedes
     *     the first paragraph break only
     * @param {string} [options.error_policy] - applied to the new parse
     * @returns {{fragment: ZooFlmFragment, truncated: boolean, cut_at: (number|null)}}
     *     ``cut_at`` a byte offset into the original source
     */
    truncate(f, { chars, min_chars = null, marker = null, first_paragraph = false, error_policy = null } = {})
    {
        this._check_fragment(f);
        const out = this._core.truncate(f.source, f.origin.label, f.layout, {
            chars, min_chars, marker, first_paragraph,
        });
        const fragment = this.make_fragment(out.source, {
            origin: { ...f.origin, truncated: true },
            layout: f.layout, standalone: f.standalone, error_policy,
        });
        return { fragment, truncated: out.truncated, cut_at: out.cut_at };
    }
}
