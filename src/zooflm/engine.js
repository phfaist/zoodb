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

import { ZooFlmFragment, LAYOUTS, make_origin, is_fragment } from './fragment.js';
import {
    ZooFlmError, apply_error_policy, check_error_policy, check_unresolved, has_errors, make_diagnostic,
    map_core_diagnostic,
} from './diagnostics.js';
import { ZooFlmComposition, DEFAULT_RENDER_VALUE_OPTIONS } from './compose.js';

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

function excerpt(text, n = 40)
{
    const chars = Array.from(text);
    return (chars.length > n) ? chars.slice(0, n).join('') + '…' : text;
}

function trim_text(text)
{
    return text.replace(/\n+$/, '');
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
 * apply). A wrong argument, a released fragment, a freed engine or an error
 * of the core itself is thrown as a plain ``Error``, never returned as
 * content.
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
    constructor({ core, error_policy = 'abort', unresolved = 'error', render_value_options = null })
    {
        this.__core = core;
        this._freed = false;
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
     * The wasm core (``ZooFlmCore``), for what the engine does not wrap
     * (``parse_fields``, the counters). Handles the engine holds are not to be
     * released through it.
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
     * diagnostics, definitions }``.
     */
    _render_one(f, output, unresolved)
    {
        const handle = f.handle;
        if (output === 'html') {
            const out = this._core.render_html([handle], {
                unresolved_refs_warning: unresolved === 'warn',
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
            unresolved_refs_warning: unresolved === 'warn', per_tree: false, pieces: false,
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
     * @returns {object} ``{ html | text, definitions, requires, diagnostics,
     *     has_errors }`` (``definitions`` and ``requires`` empty for text)
     */
    render_fragment(f, {
        output = 'html', context = DEFAULT_CONTEXT, unresolved = null, error_policy = null,
    } = {})
    {
        this._check_fragment(f);
        check_output(output);
        const policy = this._policy(error_policy);
        unresolved = this._unresolved_of(unresolved);
        this._ensure_context(context);
        const one = this._render_one(f, output, unresolved);
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
     * @returns {object} ``{ html, definitions, requires, diagnostics,
     *     has_errors }``: ``requires`` what the page's content requires (the
     *     substituted trees and pieces and the snippets), ``definitions``
     *     those definitions, in the registry's order
     */
    render_document({
        compose, context = DEFAULT_CONTEXT, unresolved = null, error_policy = null,
        render_value_options = null,
    } = {})
    {
        this._live();
        if (typeof compose !== 'function') {
            throw new TypeError('render_document(): `compose` must be a function');
        }
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
            out = this._core.render_html(composition.handles, { unresolved_refs_warning: unresolved === 'warn' });
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

    // --- scan and truncation -----------------------------------------------------------

    /**
     * Scans fragments as one document (no index installed, nothing retrieved,
     * resolved or output): per fragment the labels, the references
     * resolved (their hrefs) and unresolved (their labels), the images; the
     * cited keys; the duplicate labels; the standalone check over the
     * standalone fragments.
     *
     * @param {Iterable<ZooFlmFragment>} fragments
     * @param {object} [options]
     * @param {string} [options.error_policy]
     * @returns {object} ``{ trees: [{ fragment, labels, refs_resolved,
     *     refs_unresolved, graphics: [{ path, origin }] }], cited: [{ key,
     *     origin, fragment }], duplicate_labels, standalone_violations,
     *     diagnostics, has_errors }``, ``origin`` the canonical label (the
     *     graphics table's key)
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
        return {
            trees: out.trees.map( (t, i) => ({ fragment: list[i], ...t }) ),
            cited: out.cited.map( ([key, origin]) => ({
                key, origin, fragment: (origin != null) ? (by_label.get(origin) ?? null) : null,
            }) ),
            duplicate_labels: out.duplicate_labels,
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
