// The FLM processor of a zoo (level 2 of Q18; dev-docs/initial-design/
// 10-step3-processor.md): over the zoo's FLM engine (src/zooflm/engine.js),
// it compiles every FLM field into a fragment, scans the zoo, builds the
// index of every output context, fills the engine's citations and graphics
// tables (through the citation manager and compiler, and the resource
// collector), fills the snippet cache, writes the engine's data in data dumps
// and handles reloads.
//
// It runs in browsers too (the preview apps run the whole processor over a
// virtual file system): file access goes through the `fs` objects of the
// options, never through a Node module.

import path from 'path';

import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.flmprocessor');

import { ZooDbProcessorBase } from './base.js';
import { FLMSimpleContentCompiler } from './flmsimplecontent.js';

import {
    ZooFlmError, apply_error_policy, check_error_policy, is_fragment, make_diagnostic, map_core_diagnostic,
} from '../zooflm/engine.js';
import { CitationCompiler, install_csl_flm_output_format } from '../zooflm/citationcompiler.js';

import { CitationDatabaseManager } from '../citationmanager/index.js';
import { ResourceCollector } from '../resourcecollector/index.js';

import { split_prefix_label } from '../util/prefixlabel.js';


const DEFAULT_CONTEXT = 'default';

const RX_FLM_SPECIAL = /[\\{}%#&$~]/;

/**
 * Plain text as FLM text: the characters FLM gives a meaning to (``\ { } %
 * # & $``) escaped, or the whole text as verbatim text when it holds a ``~``
 * (a non-breaking space in FLM). Only what FLM would read as markup is
 * escaped: a sequence the typesetting changes (``--`` as a dash, straight
 * quotes made curly) may still be typeset.
 *
 * @param {string} text
 * @returns {string}
 */
export function flm_text_of_plain_text(text)
{
    text = String(text);
    if (!RX_FLM_SPECIAL.test(text)) {
        return text;
    }
    if (text.includes('~') && !text.includes('\\end{verbatimtext}')) {
        return `\\begin{verbatimtext}${text}\\end{verbatimtext}`;
    }
    return text.replace(/[\\{}%#&$]/g, (c) => ((c === '\\') ? '\\textbackslash{}' : `\\${c}`));
}

/**
 * The placeholder citation text of a cited key without a compiled citation,
 * under ``allow_unresolved_citations``: the key as verbatim text.
 *
 * @param {string} key - ``prefix:key``
 * @returns {string}
 */
export function unresolved_citation_text(key)
{
    return `\\begin{verbatimtext}${key}\\end{verbatimtext}`;
}

// `prefix:key` with the prefix in lower case (as the engine's citations table
// and the citation manager's sources key it).
function normalize_cite_key(key)
{
    const [prefix, k] = split_prefix_label(key);
    return (prefix == null) ? { id: k, cite_prefix: null, cite_key: k }
        : { id: `${prefix.toLowerCase()}:${k}`, cite_prefix: prefix.toLowerCase(), cite_key: k };
}

function object_key(object_type, object_id)
{
    return `${object_type}:${object_id}`;
}


/**
 * Database processor that compiles the FLM content of the objects' fields
 * into fragments of the zoo's FLM engine (:js:class:`ZooFlmEngine`) and
 * provides what rendering them needs: the index of every output context
 * (cross-references to objects and to labels defined in other objects), the
 * compiled citations, the collected images, and the snippets of the
 * standalone fragments.
 *
 * At zoo load (`process_zoo()`) and at every reload:
 *
 * 1. **Fields.** Every FLM field (schema annotation ``_flm``) becomes a
 *    fragment in place (:class:`FLMSimpleContentCompiler`); the parse
 *    diagnostics go to ``obj._zoodb.flm_diagnostics``.
 * 2. **Scan.** One `engine.scan()` over every fragment of the zoo (and the
 *    ad hoc fragments of :meth:`compile_flm_fragment`): per object the labels
 *    it defines (with their anchors and display sources), the references it
 *    makes, the images it shows, the term definitions it holds (with their
 *    bodies), the keys each of its fields cites (:meth:`object_scan`).
 *    Labels are unique zoo-wide: a label defined twice is the Error
 *    ``zoodb.labels.duplicate``; a standalone field that holds a reference, a
 *    citation, a label or a note is the Error ``zoodb.standalone.violation``.
 *    Both go to the object's ``_zoodb.flm_diagnostics`` and follow the error
 *    policy.
 * 3. **Index.** For every output context of ``contexts``: one entry per
 *    object (label ``TYPE:ID``, href ``object_href(TYPE, ID)``, display the
 *    per-type display, default the object's ``name`` when it is a standalone
 *    fragment) and one per label defined in a field (href the object's href,
 *    with ``#`` and the anchor when one of the labels of its point forms it,
 *    ``type-label``, the same in every document: a point anchored on its
 *    number, a float or a theorem, gets the object's href alone; display the
 *    source of the content the label's point shows when the anchor is
 *    label-derived and that source is standalone, else the object's
 *    display), installed by `engine.set_index()`, the ``default`` context
 *    last.  A label in an ad hoc fragment gets an entry under its origin's
 *    ``href``.  A reference that resolves neither in the zoo nor through the
 *    index is the Warning ``zoodb.refs.unresolved`` on its object.
 * 4. **Citations.** The cited keys are retrieved by the citation manager and
 *    compiled by the citation compiler (CSL into FLM text, cached in
 *    ``cache_compiled_citations.json``), then installed by
 *    `engine.set_citations()`.  Under the ``'abort'`` policy, a citation that
 *    cannot be retrieved throws before anything is compiled; under
 *    ``'continue'``, the others are compiled, and each failure is the Warning
 *    ``zoodb.citations.retrieve-failed`` in :attr:`diagnostics`.  With
 *    ``allow_unresolved_citations``, a key without a compiled citation shows
 *    as verbatim text.
 * 5. **Graphics.** Each image path is resolved relative to the directory of
 *    the object's source file and collected by the resource collector
 *    (``collect('graphics_path', source)``), whose graphics processor
 *    inspects the file; the entries (with the address from
 *    ``graphics_address``) are installed by `engine.set_graphics()`.
 * 6. **Snippets.** The html and text snippets of the standalone fragments
 *    not cached yet, in one `engine.render_snippets()`.
 *
 * On a reload (`update_objects()`), the zoo is processed again: the fields
 * already compiled are kept, those of the new objects are compiled, and once
 * the processing succeeded the fragments of the replaced objects are
 * released (a reload that fails leaves the previous index, tables and
 * snippets usable).  The data dump (`process_data_dump()`) writes the
 * fragments as their FLM source and the engine's data as ``data.zooflm``.
 *
 * Options (constructor):
 *
 * - ``engine`` *(required)* -- the zoo's :js:class:`ZooFlmEngine`.
 *
 * - ``contexts`` -- the output contexts, ``{ NAME: { object_href(object_type,
 *   object_id) → string } }``; default one context ``default`` with
 *   ``/TYPE/ID``.
 *
 * - ``refs`` -- per-object-type options of the index entries, keyed by
 *   object type: ``formatted_ref_flm_text_fn(object_id, object)`` returns the
 *   display of a reference to the object (a standalone fragment, or FLM
 *   text; default: the object's ``name`` fragment, else its ID as text).
 *
 * - ``refs_defaults`` -- the options applied to all object types before
 *   those of ``refs``.
 *
 * - ``graphics_address(resource_data) → string`` -- the address written in
 *   the output for a collected image; ``resource_data`` is ``{ src_url, source,
 *   graphics, target_info, resolved_info, processed_info }`` (``src_url`` the
 *   retriever's target name, ``source`` the resolved source path, ``graphics``
 *   the entry data of the graphics processor).  Default: ``src_url``.
 *
 * - ``citations`` -- ``false`` or ``null`` (the default) for no citation
 *   manager (the cited keys then get no citation text, unless
 *   ``allow_unresolved_citations``); otherwise ``{ sources, csl_style,
 *   default_user_agent, cache_fs,
 *   cache_dir, cache_entry_default_duration_ms, skip_save_cache,
 *   citation_manager_options }``: ``sources`` maps citation prefixes to
 *   :class:`CitationSourceBase` instances, ``csl_style`` is the CSL style
 *   (XML), ``cache_dir`` the directory of the citation cache (default
 *   ``'.'``), ``skip_save_cache`` leaves the caches unwritten (tests), and
 *   ``citation_manager_options`` go to :class:`CitationDatabaseManager`.
 *
 * - ``allow_unresolved_citations`` -- a cited key without a compiled
 *   citation shows as verbatim text (``\begin{verbatimtext}prefix:key\end{verbatimtext}``)
 *   instead of being reported by the renders.
 *
 * - ``error_policy`` -- ``'abort'`` (default) or ``'continue'``: see the
 *   steps above.  Under ``'continue'``, every diagnostic is kept on the
 *   objects (``_zoodb.flm_diagnostics``) and in :attr:`diagnostics`, and the
 *   zoo loads.
 *
 * - ``skip_check_update_existing_citations`` -- a cited key already in the
 *   engine's citations table is not retrieved or compiled again (for
 *   reloads).
 *
 * - ``skip_check_update_existing_resources`` -- an image already collected
 *   is not collected again.
 *
 * - ``resource_collector`` -- a :class:`ResourceCollector` instance; when
 *   set, ``resource_collector_options`` is ignored.
 *
 * - ``resource_collector_options`` -- the options of the
 *   :class:`ResourceCollector` the processor creates otherwise (resource type
 *   ``graphics_path``, its retriever and its processors).  Without a
 *   ``graphics_path`` retriever, no image is collected (the renders report
 *   the images they cannot resolve).
 *
 * In normal usage this class is instantiated by :func:`use_flm_processor`,
 * which builds the citation sources and the resource collector from the
 * standard configuration.
 */
export class ZooFlmProcessor extends ZooDbProcessorBase
{
    constructor(options = {})
    {
        super();

        this.options = {
            refs: {},
            refs_defaults: {},
            contexts: null,
            graphics_address: null,
            citations: null,
            allow_unresolved_citations: false,
            error_policy: 'abort',
            skip_check_update_existing_citations: false,
            skip_check_update_existing_resources: false,
            resource_collector: null,
            resource_collector_options: {},
            ...options,
        };

        /** The zoo's FLM engine. */
        this.engine = this.options.engine;
        if (this.engine == null) {
            throw new Error(`ZooFlmProcessor: no engine provided (option ‘engine’)`);
        }

        /** The error policy: ``'abort'`` or ``'continue'``. */
        this.error_policy = check_error_policy(this.options.error_policy ?? 'abort');

        /** The output contexts: ``{ NAME: { object_href } }``. */
        this.contexts = this.options.contexts ?? {
            [DEFAULT_CONTEXT]: {
                object_href: (object_type, object_id) =>
                    `/${encodeURIComponent(object_type)}/${encodeURIComponent(object_id)}`,
            },
        };
        for (const [name, context] of Object.entries(this.contexts)) {
            if (typeof context?.object_href !== 'function') {
                throw new Error(`ZooFlmProcessor: the context ‘${name}’ has no object_href() function`);
            }
        }

        this.graphics_address = this.options.graphics_address ?? ( (resource_data) => resource_data.src_url );

        /** The field compiler. */
        this.flm_simple_content_compiler = new FLMSimpleContentCompiler({
            engine: this.engine,
            error_policy: this.error_policy,
        });

        //
        // Citations: the manager (retrieval, cache) and the compiler (CSL
        // into FLM text, cached)
        //
        const citations = this.options.citations;
        if (citations === false || citations == null) {
            this.citation_manager = null;
            this.citation_compiler = null;
        } else {
            const cache_dir = citations.cache_dir ?? '.';
            this.citation_manager = new CitationDatabaseManager(
                citations.sources ?? {},
                {
                    cache_fs: citations.cache_fs ?? null,
                    cache_dir,
                    default_user_agent: citations.default_user_agent,
                    cache_entry_default_duration_ms: citations.cache_entry_default_duration_ms,
                    skip_save_cache: citations.skip_save_cache ?? false,
                    ...(citations.citation_manager_options ?? {}),
                },
            );
            this.citation_compiler = new CitationCompiler({
                citation_manager: this.citation_manager,
                csl_style: citations.csl_style,
                cache_fs: citations.cache_fs,
                cache_file: path.join(cache_dir, 'cache_compiled_citations.json'),
                skip_save_cache: citations.skip_save_cache ?? false,
            });
        }

        //
        // Resource collector, e.g. for graphics
        //
        this.resource_collector = this.options.resource_collector
            ?? new ResourceCollector({ resource_types: ['graphics_path'], ...this.options.resource_collector_options });

        /** The ad hoc fragments of :meth:`compile_flm_fragment`. */
        this.extra_fragments = new Set();

        /**
         * What the last scan found (:meth:`process_auxiliary_resources`):
         * ``{ objects: Map('TYPE:ID' → { object_type, object_id, labels,
         * refs, cited, graphics, terms }), labels: Map(label → { label,
         * anchor, display, fragment }), cited, duplicate_labels, trees }``, or
         * ``null``. An object's entry is :meth:`object_scan`'s; ``cited``
         * lists each key cited in the zoo once, with its first citation (``{
         * key, cite_prefix, cite_key, origin, fragment }``), the keys the
         * citations are retrieved for; ``trees`` the engine's scan per
         * fragment (the ad hoc ones included).
         */
        this.scan_results = null;

        /**
         * The diagnostics of the last processing that belong to no object:
         * those of the ad hoc fragments (their parses included), of the
         * index displays, of the citations.
         */
        this.diagnostics = [];

        // the citation texts installed: normalized key -> text
        this._citation_texts = new Map();

        // the fragments compiled for the objects' fields, released once no
        // object holds them after a processing of the zoo that succeeded
        this._processed_fragments = new Set();
    }

    install_zoo(zoodb)
    {
        super.install_zoo(zoodb);
        this.flm_simple_content_compiler.install_zoo(zoodb);
    }

    async initialize_zoo(zoodb)
    {
        // the citation manager & compiler need to load their cache files
        await this.citation_manager?.initialize();
        await this.citation_compiler?.initialize();

        await this.flm_simple_content_compiler.initialize_zoo(zoodb);
    }

    async process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb object provided!`);
        }

        debug("Compiling all zoo FLM content ...");

        try {
            await this.flm_simple_content_compiler.process_zoo();

            await this.process_auxiliary_resources();
        } finally {
            // remember the fields compiled, also by a processing that failed
            for (const f of this._current_object_fragments()) {
                this._processed_fragments.add(f);
            }
        }

        this._release_replaced_fragments();

        debug("Zoo FLM processing done");
    }

    _current_object_fragments()
    {
        const current = new Set();
        for (const object_type of this.zoodb?.object_types ?? []) {
            for (const obj of Object.values(this.zoodb.objects[object_type] ?? {})) {
                for (const f of this.flm_simple_content_compiler.object_fragments(obj)) {
                    current.add(f);
                }
            }
        }
        return current;
    }

    // Releases the fragments compiled for the objects' fields that no object
    // holds any more (the fields of replaced objects), now that the index,
    // the tables and the snippets no longer use them.
    _release_replaced_fragments()
    {
        const current = this._current_object_fragments();
        const replaced = [...this._processed_fragments].filter( (f) => !current.has(f) && !f.released );
        if (replaced.length > 0) {
            debug(`Releasing ${replaced.length} fragment(s) of replaced objects`);
            this.engine.release(replaced);
        }
        this._processed_fragments = current;
    }

    /**
     * Compiles an ad hoc fragment, which no object field holds (a handbook
     * chapter, a computed field), and keeps it with the zoo's fragments: the
     * next :meth:`process_auxiliary_resources` (and every later processing of
     * the zoo) scans it, collects its citations and images, and fills its
     * snippets.  Release it with :meth:`release_flm_fragments` when it is no
     * longer needed.
     *
     * @param {string} flm_content
     * @param {object} [options]
     * @param {boolean} [options.standalone=false]
     * @param {boolean|null} [options.is_block_level=null]
     * @param {object|string} [options.origin] - the fragment's origin (see
     *     :js:meth:`ZooFlmEngine.make_fragment`); the labels it defines get
     *     index entries under the href of the object its ``object_type`` and
     *     ``object_id`` name, else under its ``href`` (``{ label, href }``:
     *     a handbook chapter); with neither, each label is the Warning
     *     ``zoodb.labels.no-href``
     * @returns {ZooFlmFragment}
     */
    compile_flm_fragment(flm_content, options = {})
    {
        const old_keys = ['resource_info', 'what', 'skip_scanner'].filter( (k) => Object.hasOwn(options ?? {}, k) );
        if (old_keys.length > 0) {
            throw new Error(
                `compile_flm_fragment(): the option(s) ${old_keys.join(', ')} of the old FLM layer are gone; `
                + `give the fragment's ‘origin’ ({ object_type, object_id, field, source_path, label, href })`
            );
        }
        const { standalone = false, is_block_level = null, origin = null } = options ?? {};
        const fragment = this.flm_simple_content_compiler.compile_flm_fragment(flm_content, {
            flm_options: { standalone, is_block_level },
            origin,
        });
        this.extra_fragments.add(fragment);
        return fragment;
    }

    /**
     * Releases ad hoc fragments made by :meth:`compile_flm_fragment`.
     *
     * @param {ZooFlmFragment|Iterable<ZooFlmFragment>} fragments
     */
    release_flm_fragments(fragments)
    {
        const list = is_fragment(fragments) ? [fragments] : Array.from(fragments);
        list.forEach( (f) => this.extra_fragments.delete(f) );
        this.engine.release(list.filter( (f) => !f.released ));
    }

    /**
     * Nothing to do before the objects are replaced: the fragments of the
     * replaced objects are released once the zoo is processed again
     * (`process_zoo_update_objects()`), so that a reload that fails leaves
     * the previous index, tables and snippets usable.
     */
    async prepare_zoo_update_objects(/*db_objects*/)
    {
    }

    /**
     * Processes the zoo again (the fields already compiled are kept as they
     * are; those of the new objects are compiled), then releases the
     * fragments of the objects that were replaced.
     */
    async process_zoo_update_objects(/*db_objects*/)
    {
        await this.process_zoo();
    }

    // ---

    /**
     * The fragments of the zoo: every object's FLM fields (in the order of
     * the object types, the objects and their fields), then the ad hoc
     * fragments.
     *
     * @returns {ZooFlmFragment[]}
     */
    zoo_fragments()
    {
        const fragments = [];
        for (const object_type of this.zoodb?.object_types ?? []) {
            for (const obj of Object.values(this.zoodb.objects[object_type] ?? {})) {
                fragments.push(...this.flm_simple_content_compiler.object_fragments(obj));
            }
        }
        for (const f of this.extra_fragments) {
            if (f.released) {
                this.extra_fragments.delete(f);
            } else {
                fragments.push(f);
            }
        }
        return fragments;
    }

    /**
     * What the last scan found in an object: ``{ object_type, object_id,
     * labels: [{ label, anchor, display, fragment }], refs: [{ label,
     * resolved, fragment }], cited: [{ key, cite_prefix, cite_key, origin,
     * fragment }], graphics: [{ path, origin, fragment }], terms: [{ labels,
     * anchor, display, body, body_origin, body_start, body_end, fragment }]
     * }``, or ``null``.
     *
     * ``cited`` holds every key the object cites: one entry per key and
     * field (``fragment``, ``origin`` its label), in the order of the fields
     * and of the first citation in each; ``cite_prefix`` (lowercase) and
     * ``cite_key`` are the key as the citation manager and the citation
     * compiler name it (``cite_prefix`` ``null`` for a key without a
     * prefix). ``terms`` holds the term definitions of the object's fields
     * (:js:meth:`ZooFlmEngine.scan`): a glossary entry is the term
     * (``display``), its link (the object's href, with ``#`` and
     * ``anchor`` when there is one), the body (a fragment made from
     * ``body``, the FLM source of the body, with the origin ``body_origin``,
     * whose file position is the body's), and the objects whose ``refs``
     * hold one of its ``labels``.
     *
     * @param {string} object_type
     * @param {string} object_id
     * @returns {object|null}
     */
    object_scan(object_type, object_id)
    {
        return this.scan_results?.objects.get(object_key(object_type, object_id)) ?? null;
    }

    /**
     * Steps 2 to 6 of the processing (the scan, the index, the citations, the
     * graphics, the snippets) over the zoo's fragments and the ad hoc ones.
     * Call it after compiling ad hoc fragments with
     * :meth:`compile_flm_fragment`; `process_zoo()` calls it.
     */
    async process_auxiliary_resources()
    {
        const fragments = this.zoo_fragments();
        this.diagnostics = [];

        // per object: the diagnostics of its fragments' parses, then those
        // the processing finds; the parse diagnostics of the fragments of no
        // object (ad hoc ones) go to this.diagnostics
        const object_diagnostics = new Map();
        for (const f of fragments) {
            const obj = this._object_of(f.origin);
            if (obj != null && obj._zoodb != null) {
                if (!object_diagnostics.has(obj)) {
                    object_diagnostics.set(obj, []);
                }
                object_diagnostics.get(obj).push(...f.diagnostics);
            } else {
                this.diagnostics.push(...f.diagnostics);
            }
        }
        const report = (diagnostics) => {
            for (const d of diagnostics) {
                const obj = this._object_of(d.origin);
                if (obj != null && object_diagnostics.has(obj)) {
                    object_diagnostics.get(obj).push(d);
                } else {
                    this.diagnostics.push(d);
                }
            }
        };
        const store = () => {
            for (const [obj, diagnostics] of object_diagnostics) {
                obj._zoodb.flm_diagnostics = diagnostics;
            }
        };

        // each step's diagnostics go to their objects (or to
        // this.diagnostics), then the policy applies
        const step = (diagnostics) => {
            report(diagnostics);
            this._apply_policy(diagnostics);
        };

        try {
            step(this._process_scan(fragments));
            step(this._process_index(report));
            step(await this._process_citations());
            step(await this._process_graphics());
            step(this._process_snippets(fragments));
        } finally {
            store();
        }
    }

    _apply_policy(diagnostics)
    {
        apply_error_policy(diagnostics, this.error_policy);
    }

    // --- 2. the scan --------------------------------------------------------------------

    // Runs the scan; returns the Errors it finds (the duplicate labels, the
    // standalone violations).
    _process_scan(fragments)
    {
        debug(`Scanning ${fragments.length} fragment(s) ...`);
        const scan = this.engine.scan(fragments, { error_policy: 'continue' });

        const objects = new Map();
        const object_entry = (fragment) => {
            const { object_type, object_id } = fragment?.origin ?? {};
            if (object_type == null || object_id == null) {
                return null;
            }
            const key = object_key(object_type, object_id);
            let entry = objects.get(key);
            if (entry == null) {
                entry = { object_type, object_id, labels: [], refs: [], cited: [], graphics: [], terms: [] };
                objects.set(key, entry);
            }
            return entry;
        };
        const cited_entry = (key, origin, fragment) => {
            const { cite_prefix, cite_key } = normalize_cite_key(key);
            return { key, cite_prefix, cite_key, origin, fragment };
        };
        const labels = new Map();
        for (const tree of scan.trees) {
            const entry = object_entry(tree.fragment);
            for (const l of tree.labels) {
                const info = { ...l, fragment: tree.fragment };
                labels.set(l.label, info);
                entry?.labels.push(info);
            }
            entry?.refs.push(...tree.refs.map( (r) => ({ ...r, fragment: tree.fragment }) ));
            entry?.graphics.push(...tree.graphics.map( (g) => ({ ...g, fragment: tree.fragment }) ));
            entry?.terms.push(...tree.terms.map( (t) => ({ ...t, fragment: tree.fragment }) ));
            // every key each field cites (the scan's own list has the first
            // citation of each key only)
            entry?.cited.push(...tree.cited.map( (key) => cited_entry(key, tree.fragment.origin.label, tree.fragment) ));
        }
        const cited = scan.cited.map( (c) => cited_entry(c.key, c.origin, c.fragment) );
        this.scan_results = { objects, labels, cited, duplicate_labels: scan.duplicate_labels, trees: scan.trees };

        const errors = [];
        // Labels are unique zoo-wide (Q12).
        for (const dup of scan.duplicate_labels) {
            const kept = labels.get(dup.label)?.fragment ?? null;
            errors.push(map_core_diagnostic({
                severity: 'error',
                identifier: 'zoodb.labels.duplicate',
                message: `the label ‘${dup.label}’ is already defined`
                    + ((kept != null) ? ` in ${kept.origin.label}` : '')
                    + '; labels are unique across the zoo',
                origin: dup.origin, start: dup.start, end: dup.end, line: null, col: null,
            }, (label) => ((dup.fragment != null && label === dup.fragment.origin.label) ? dup.fragment : null)));
        }
        // The standalone violations are Errors on their objects (Q5).
        for (const d of scan.diagnostics) {
            if (d.identifier === 'zoodb.standalone.violation') {
                errors.push({ ...d, severity: 'error' });
            }
        }
        debug(`Scan: ${labels.size} label(s), ${cited.length} cited key(s), `
              + `${scan.duplicate_labels.length} duplicate label(s), `
              + `${scan.standalone_violations} standalone violation(s)`);
        return errors;
    }

    // --- 3. the index -------------------------------------------------------------------

    /**
     * The display of a reference to an object: the per-type display function's
     * result (``refs[type].formatted_ref_flm_text_fn(object_id, object)``, a
     * standalone fragment or FLM text); by default the object's ``name`` when
     * it is a standalone fragment that is not empty, else its ``name`` when it
     * is a plain string (as FLM text), else its ID as FLM text.
     */
    _object_display(object_type, object_id, obj)
    {
        const options = { ...this.options.refs_defaults, ...(this.options.refs?.[object_type] ?? {}) };
        let display = null;
        if (options.formatted_ref_flm_text_fn != null) {
            display = options.formatted_ref_flm_text_fn(object_id, obj);
        } else if (is_fragment(obj?.name)) {
            // a name that is not standalone (an FLM field `full`) cannot be
            // a display: the ID instead
            display = (obj.name.standalone && !obj.name.empty) ? obj.name : null;
        } else if (typeof obj?.name === 'string' && obj.name !== '') {
            display = flm_text_of_plain_text(obj.name);
        }
        if (display == null || display === '') {
            display = flm_text_of_plain_text(object_id);
        }
        return display;
    }

    // The zoo object an origin names, or null.
    _object_of(origin)
    {
        if (origin?.object_type == null || origin?.object_id == null) {
            return null;
        }
        return this.zoodb?.objects?.[origin.object_type]?.[origin.object_id] ?? null;
    }

    /**
     * The index entries of the labels defined in the fragments, the same in
     * every context but for the href of their object: ``[{ label, anchor,
     * object: { object_type, object_id } | null, href: (string|null),
     * display }]``, ``href`` given for a label of an ad hoc fragment whose
     * origin has an ``href``.
     *
     * The display is the source of the content the label's point shows when
     * one of the labels of its point forms the anchor (``anchor`` not null)
     * and that source passes the standalone check (one scan over all the
     * candidate displays, each a standalone fragment, released after);
     * otherwise the display of the object (the object's own entry's), or for
     * an ad hoc fragment its origin label as text.  A candidate that is not standalone is the Warning
     * ``zoodb.index.display-not-standalone``; a label of an ad hoc fragment
     * with no object and no ``href`` is the Warning ``zoodb.labels.no-href``
     * and gets no entry; a label that is an object's label is the Warning
     * ``zoodb.labels.shadowed`` and gets no entry.
     */
    _label_entries(object_labels, diagnostics)
    {
        const entries = [];
        const candidates = [];
        for (const info of this.scan_results?.labels.values() ?? []) {
            const origin = info.fragment.origin;
            const obj = this._object_of(origin);
            let entry;
            if (obj != null) {
                entry = {
                    label: info.label, anchor: info.anchor, href: null,
                    object: { object_type: origin.object_type, object_id: origin.object_id },
                    display: this._object_display(origin.object_type, origin.object_id, obj),
                };
            } else if (typeof origin.href === 'string') {
                entry = {
                    label: info.label, anchor: info.anchor, href: origin.href, object: null,
                    display: flm_text_of_plain_text(origin.label),
                };
            } else {
                diagnostics.push(make_diagnostic({
                    severity: 'warning',
                    identifier: 'zoodb.labels.no-href',
                    message: `the label ‘${info.label}’ is defined in ${origin.label}, which belongs to no `
                        + 'object and whose origin has no href: references to it from other documents do '
                        + 'not resolve',
                    origin,
                }));
                continue;
            }
            if (object_labels.has(info.label)) {
                diagnostics.push(make_diagnostic({
                    severity: 'warning',
                    identifier: 'zoodb.labels.shadowed',
                    message: `the label ‘${info.label}’ is the label of a zoo object; a reference to it `
                        + 'from another object leads to that object',
                    origin,
                }));
                continue;
            }
            if (info.anchor != null && info.display != null) {
                candidates.push({ entry, source: info.display, info });
            }
            entries.push(entry);
        }

        // The standalone check of the candidate displays, in one scan.
        const checks = candidates.map( ({ entry, source }) => this.engine.make_fragment(source, {
            standalone: true, origin: { label: `index:${entry.label}` }, error_policy: 'continue',
        }) );
        try {
            if (checks.length > 0) {
                const scan = this.engine.scan(checks, { error_policy: 'continue' });
                const violations = new Map();
                for (const d of scan.diagnostics) {
                    if (d.identifier === 'zoodb.standalone.violation') {
                        const list = violations.get(d.origin.label) ?? [];
                        list.push(d.message);
                        violations.set(d.origin.label, list);
                    }
                }
                candidates.forEach( ({ entry, source, info }, i) => {
                    const check = checks[i];
                    const violated = violations.get(check.origin.label);
                    if (violated != null) {
                        const owner = (entry.object != null)
                            ? object_key(entry.object.object_type, entry.object.object_id)
                            : info.fragment.origin.label;
                        diagnostics.push(make_diagnostic({
                            severity: 'warning',
                            identifier: 'zoodb.index.display-not-standalone',
                            message: `the content the label ‘${entry.label}’ shows is not standalone `
                                + `(${violated.join('; ')}); a reference to it from another document shows `
                                + `the display of ${owner}`,
                            origin: info.fragment.origin,
                        }));
                    } else if (check.diagnostics.some( (d) => d.severity === 'error' )) {
                        debug(`The display of ‘${entry.label}’ does not parse alone; the object's instead`);
                    } else {
                        entry.display = source;
                    }
                } );
            }
        } finally {
            // the index takes the displays as text, which the engine parses again
            if (checks.length > 0) {
                this.engine.release(checks);
            }
        }
        return entries;
    }

    /**
     * The index entries of a context: one per object, and one per label
     * entry (:meth:`_label_entries`) with the href of its object (and ``#``
     * and the anchor when one of the labels of its point forms it).
     */
    _index_entries(context_name, label_entries)
    {
        const { object_href } = this.contexts[context_name];
        const entries = [];
        for (const object_type of this.zoodb?.object_types ?? []) {
            for (const [object_id, obj] of Object.entries(this.zoodb.objects[object_type] ?? {})) {
                entries.push({
                    label: object_key(object_type, object_id),
                    href: object_href(object_type, object_id),
                    display: this._object_display(object_type, object_id, obj),
                });
            }
        }
        for (const e of label_entries) {
            const href = e.href ?? object_href(e.object.object_type, e.object.object_id);
            entries.push({
                label: e.label,
                href: (e.anchor != null) ? `${href}#${e.anchor}` : href,
                display: e.display,
            });
        }
        return entries;
    }

    // Sets the index of every context, the default context last.
    //
    // Under 'abort', set_index is all-or-nothing per context: when a
    // context's displays have an Error, its ZooFlmError is thrown (its
    // diagnostics reported first) and that context keeps its previous
    // index; the contexts set before it carry the new entries, the `default`
    // context (set last) the previous ones. The fragments of the previous
    // processing are still alive then (their release waits for a processing
    // that succeeds), so the previous entries' displays still render.
    //
    // Then the references that resolve neither in the zoo nor through the
    // index are the Warning `zoodb.refs.unresolved` on their objects.
    _process_index(report)
    {
        const diagnostics = [];
        const object_labels = new Set();
        for (const object_type of this.zoodb?.object_types ?? []) {
            for (const object_id of Object.keys(this.zoodb.objects[object_type] ?? {})) {
                object_labels.add(object_key(object_type, object_id));
            }
        }
        const label_entries = this._label_entries(object_labels, diagnostics);

        const names = Object.keys(this.contexts);
        // the default context last: setting another one displaces it
        names.sort( (a, b) => (a === DEFAULT_CONTEXT) - (b === DEFAULT_CONTEXT) );
        for (const name of names) {
            const entries = this._index_entries(name, label_entries);
            debug(`Setting the index of the context ‘${name}’ (${entries.length} entries)`);
            try {
                diagnostics.push(...this.engine.set_index(entries, {
                    context: name, error_policy: this.error_policy,
                }).diagnostics);
            } catch (err) {
                if (err instanceof ZooFlmError) {
                    report([...diagnostics, ...err.diagnostics]);
                }
                throw err;
            }
        }

        // The references to nothing the index or the zoo defines.
        const index_labels = new Set([...object_labels, ...label_entries.map( (e) => e.label )]);
        const seen = new Set();
        for (const tree of this.scan_results?.trees ?? []) {
            for (const r of tree.refs) {
                const key = `${tree.fragment.origin.label}\u0000${r.label}`;
                if (r.resolved || index_labels.has(r.label) || seen.has(key)) {
                    continue;
                }
                seen.add(key);
                diagnostics.push(make_diagnostic({
                    severity: 'warning',
                    identifier: 'zoodb.refs.unresolved',
                    message: `${tree.fragment.origin.label} refers to ‘${r.label}’, which no object and no `
                        + 'label of the zoo defines',
                    origin: tree.fragment.origin,
                }));
            }
        }
        return diagnostics;
    }

    // --- 4. citations -------------------------------------------------------------------

    async _process_citations()
    {
        const cited = this.scan_results?.cited ?? [];
        // the distinct keys, with where each is cited
        const keys = new Map();
        for (const c of cited) {
            const n = normalize_cite_key(c.key);
            let k = keys.get(n.id);
            if (k == null) {
                k = { ...n, key: c.key, citations: [] };
                keys.set(n.id, k);
            }
            k.citations.push(c);
        }

        const diagnostics = [];
        if (this.citation_manager != null && keys.size > 0) {
            diagnostics.push(...await this._retrieve_and_compile(keys));
        }

        const entries = [];
        for (const k of keys.values()) {
            let text = null;
            if (k.cite_prefix != null && this.citation_compiler?.has_compiled_citation(k.cite_prefix, k.cite_key)) {
                text = this.citation_compiler.get_compiled_citation(k.cite_prefix, k.cite_key);
            } else if (this.options.skip_check_update_existing_citations) {
                text = this._citation_texts.get(k.id) ?? null;
            }
            if (text == null && this.options.allow_unresolved_citations) {
                debug(`Note: unresolved citation ‘${k.id}’`);
                text = unresolved_citation_text(k.id);
            }
            if (text != null) {
                entries.push({ key: k.id, text });
            }
        }
        this._citation_texts = new Map(entries.map( (e) => [e.key, e.text] ));
        this.engine.set_citations(entries);
        debug(`Installed ${entries.length} citation(s) of ${keys.size} cited key(s)`);
        return diagnostics;
    }

    // Retrieves and compiles the cited keys; returns the Warnings of the
    // citations that could not be retrieved (under 'continue').
    async _retrieve_and_compile(keys)
    {
        const diagnostics = [];
        // Normally, every cited key is retrieved again (the citation manager
        // refreshes what needs it); with skip_check_update_existing_citations,
        // a key already installed in the engine's citations table is left as
        // it is.
        let to_compile = Array.from(keys.values()).filter( (k) => k.cite_prefix != null );
        if (this.options.skip_check_update_existing_citations) {
            to_compile = to_compile.filter( (k) => !this._citation_texts.has(k.id) );
        }
        if (to_compile.length === 0) {
            return diagnostics;
        }
        const requests = to_compile.flatMap( (k) => k.citations.map( (c) => ({
            cite_prefix: k.cite_prefix,
            cite_key: k.cite_key,
            encountered_in: {
                resource_info: { source_path: c.fragment?.origin.source_path ?? null },
                what: c.origin ?? c.fragment?.origin.label ?? null,
            },
        }) ) );

        // make sure we purge any entries from earlier possible zoo processings
        await this.citation_manager.purge_expired();

        try {
            // Citations that cannot be retrieved do not make
            // retrieve_citations() throw; it returns them (and reports them
            // along with where they were encountered).
            const failures = await this.citation_manager.retrieve_citations(requests);

            if (failures.length && this.error_policy !== 'continue') {
                const failed_ids = failures.map(
                    ({ prefix, key, origin }) => (origin ?? [prefix, key]).join(':')
                );
                throw new Error(
                    `${failures.length} citation(s) could not be retrieved: `
                    + failed_ids.join(', ')
                );
            }

            let compile = to_compile;
            if (failures.length) {
                // the error policy is 'continue': compile those citations
                // that were retrieved
                compile = to_compile.filter( (k) => this._has_retrieved_citation(k.cite_prefix, k.cite_key) );
                debug(`${failures.length} citation(s) could not be retrieved; `
                      + `compiling the ${compile.length} other one(s)`);
                diagnostics.push(...failures.map( (failure) => this._retrieve_failed(failure, keys) ));
            }

            debug('Compiling citations ...');
            install_csl_flm_output_format({ parses: (text) => this.engine.parses(text) });
            this.citation_compiler.compile_citations(
                compile.map( ({ cite_prefix, cite_key }) => ({ cite_prefix, cite_key }) )
            );
            debug("Compiled citations ready!");

        } catch (err) {
            if (this.error_policy === 'continue') {
                debug(`Error while fetching and compiling citations; attempting to continue.`, err);
                diagnostics.push(make_diagnostic({
                    severity: 'warning',
                    identifier: 'zoodb.citations.retrieve-failed',
                    message: `the citations could not be retrieved and compiled: ${err.message ?? err}`,
                    origin: { label: 'citations' },
                }));
            } else {
                throw err;
            }
        }
        return diagnostics;
    }

    // The Warning of a citation that could not be retrieved, naming where the
    // requested citation is cited.
    _retrieve_failed({ prefix, key, message, origin }, keys)
    {
        const [oprefix, okey] = origin ?? [prefix, key];
        const id = `${String(oprefix).toLowerCase()}:${okey}`;
        const normalized = (k) => `${k.cite_prefix}:${String(k.cite_key).trim().toLowerCase()}`;
        const requested = keys.get(id)
            ?? Array.from(keys.values()).find( (k) => normalized(k) === `${String(oprefix).toLowerCase()}:${String(okey).trim().toLowerCase()}` )
            ?? null;
        const where = [...new Set((requested?.citations ?? []).map( (c) => c.origin ?? c.fragment?.origin.label ))]
            .filter( (w) => w != null );
        const chained = (origin != null) ? ` (through ‘${prefix}:${key}’)` : '';
        return make_diagnostic({
            severity: 'warning',
            identifier: 'zoodb.citations.retrieve-failed',
            message: `the citation ‘${requested?.key ?? id}’ could not be retrieved${chained}: ${message}`
                + ((where.length > 0) ? `; cited in ${where.join(', ')}` : ''),
            origin: { label: `citation:${id}` },
        });
    }

    _has_retrieved_citation(cite_prefix, cite_key)
    {
        try {
            this.citation_manager.get_citation(cite_prefix, cite_key);
            return true;
        } catch {
            return false;
        }
    }

    // --- 5. graphics --------------------------------------------------------------------

    async _process_graphics()
    {
        const diagnostics = [];
        const refs = [];
        const seen = new Set();
        for (const tree of this.scan_results?.trees ?? []) {
            for (const g of tree.graphics) {
                const key = `${g.origin}\u0000${g.path}`;
                if (seen.has(key)) {
                    continue;
                }
                seen.add(key);
                const source_path = tree.fragment.origin.source_path;
                const source = (source_path != null)
                    ? path.join(path.dirname(source_path), g.path)
                    : g.path;
                refs.push({ ...g, source, fragment: tree.fragment });
            }
        }

        if (this.resource_collector == null || refs.length === 0
            || this.resource_collector.resource_retrievers?.graphics_path == null) {
            if (refs.length > 0) {
                debug(`No graphics_path retriever in the resource collector; ${refs.length} image(s) `
                      + `not collected`);
            }
            this.engine.set_graphics([]);
            return diagnostics;
        }

        debug(`Collecting ${refs.length} image(s) ...`);
        for (const ref of refs) {
            try {
                if (this.options.skip_check_update_existing_resources
                    && this.resource_collector.get_resource_data('graphics_path', ref.source) != null) {
                    debug(`Image ‘${ref.source}’ already collected; skipping.`);
                    continue;
                }
                await this.resource_collector.collect('graphics_path', ref.source);
            } catch (err) {
                if (this.error_policy !== 'continue') {
                    throw err;
                }
                debug(`Failed to collect the image ‘${ref.source}’, attempting to continue.`, err);
                diagnostics.push(make_diagnostic({
                    severity: 'error',
                    identifier: 'zoodb.graphics.collect-failed',
                    message: `the image ‘${ref.path}’ (‘${ref.source}’) could not be collected: ${err.message ?? err}`,
                    origin: ref.fragment.origin,
                }));
            }
        }
        await this.resource_collector.finish();

        const entries = [];
        for (const ref of refs) {
            const data = this.resource_collector.get_resource_data('graphics_path', ref.source);
            const graphics = data?.processed_info?.graphics;
            if (graphics == null) {
                debug(`No graphics information for ‘${ref.source}’; no entry`);
                continue;
            }
            const address = this.graphics_address({
                src_url: data.target_info?.target_name ?? data.source,
                source: data.source,
                graphics,
                target_info: data.target_info,
                resolved_info: data.resolved_info,
                processed_info: data.processed_info,
            });
            entries.push({
                origin: ref.origin,
                path: ref.path,
                identity: data.source,
                media_type: graphics.media_type,
                address,
                kind: graphics.kind,
                width_px: graphics.width_px ?? null,
                height_px: graphics.height_px ?? null,
                dpi: graphics.dpi ?? null,
                width_pt: graphics.width_pt ?? null,
                height_pt: graphics.height_pt ?? null,
            });
        }
        this.engine.set_graphics(entries);
        debug(`Installed ${entries.length} graphics entr(y/ies)`);
        return diagnostics;
    }

    // --- 6. snippets --------------------------------------------------------------------

    _process_snippets(fragments)
    {
        const standalone = fragments.filter( (f) => f.standalone && (
            this.engine.snippet_entry(f, 'html') == null || this.engine.snippet_entry(f, 'text') == null
        ) );
        if (standalone.length === 0) {
            return [];
        }
        debug(`Rendering the snippets of ${standalone.length} standalone fragment(s) ...`);
        const { diagnostics } = this.engine.render_snippets(standalone, {
            outputs: ['html', 'text'], error_policy: 'continue',
        });
        // A run repeats the parse diagnostics of the fragments it places:
        // those were reported by the compilation already.
        const is_parse_diagnostic = (d) => d.origin?.label != null && standalone.some(
            (f) => f.origin === d.origin && f.diagnostics.some(
                (p) => p.identifier === d.identifier && p.start === d.start && p.end === d.end
            )
        );
        const own = [];
        for (const d of diagnostics) {
            if (!is_parse_diagnostic(d) && !own.some( (o) => o.origin === d.origin && o.identifier === d.identifier
                                                     && o.start === d.start && o.message === d.message )) {
                own.push(d);
            }
        }
        return own;
    }

    // ---

    /**
     * Prepares a data dump: the fragments become their FLM source (the
     * default, ``flm_fragments_to_flm_text``) or stay as they are
     * (``flm_fragments_keep_instances``), see
     * :meth:`FLMSimpleContentCompiler.process_data_dump`; and, unless
     * ``flm_include_zooflm_data`` is ``false``, ``data.zooflm`` holds the
     * engine's data for a browser app (:js:meth:`ZooFlmEngine.dump`: the
     * settings hash, the index of every context, the citations, the graphics,
     * the snippets), which a browser app installs with
     * :js:meth:`ZooFlmEngine.load`.  (The former option
     * ``flm_include_refs_data`` is refused, naming this one.)
     */
    async process_data_dump(data, options)
    {
        if (Object.hasOwn(options, 'flm_include_refs_data')) {
            throw new Error(
                `The data dump option flm_include_refs_data is gone: the engine's data is written as `
                + `data.zooflm, under the option flm_include_zooflm_data (default true)`
            );
        }

        await this.flm_simple_content_compiler.process_data_dump(data, options);

        if (options.flm_include_zooflm_data ?? true) {
            data.zooflm = this.engine.dump();
        }

        return data;
    }

}

