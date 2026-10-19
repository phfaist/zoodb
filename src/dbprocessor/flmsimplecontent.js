import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.flmsimplecontent');

import { ZooDbProcessorBase } from './base.js';

import { getfield, setfield } from '../util/getfield.js';
import {
    iter_object_fields_recursive, iter_schema_fields_recursive
} from '../util/objectinspector.js';
import { apply_error_policy, check_error_policy, is_fragment } from '../zooflm/engine.js';


/**
 * Utility to normalize the value of the `_flm:` field in a schema.  Returns an
 * object with the structure ``{ enabled: true|false, standalone: true|false,
 * is_block_level: true|false|null }``.  The `schema` argument is the schema
 * object for this field, which is meant to include the property `_flm`.
 */
export function parse_schema_flm_options(schema)
{
    if (!schema || !schema._flm) {
        return { enabled: false, standalone: false };
    }

    const schema_flm = schema._flm;

    // check for shortcuts

    if (schema_flm === 'full' || schema_flm === true) {
        return { enabled: true, standalone: false };
    }

    if (schema_flm === 'standalone') {
        return { enabled: true, standalone: true };
    }

    if (schema_flm === 'block_level') {
        return { enabled: true, standalone: false, is_block_level: true };
    }

    if (typeof schema_flm === 'string') {
        throw new Error(
            `Invalid value for FLM field schema specification: ‘${schema_flm}’. `
            + `Expected 'full', 'standalone', 'block_level', or a dictionary.`
        );
    }

    // get values from flm schema field

    const {enabled, standalone, is_block_level} = schema_flm;

    return {
        enabled: enabled ?? false,
        standalone: standalone ?? false,
        is_block_level: is_block_level ?? null,
    };
}


/**
 * The layout of a fragment compiled with the given FLM options (as
 * :func:`parse_schema_flm_options` returns them): ``'blocks'`` when
 * ``is_block_level`` is true, ``'inline'`` when it is false or the field is
 * standalone, ``'auto'`` otherwise (inline unless the content holds a
 * paragraph break or a block).
 *
 * @param {Object} flm_options - ``{ standalone, is_block_level }``
 * @returns {string}
 */
export function flm_options_layout(flm_options)
{
    const is_block_level = flm_options?.is_block_level ?? null;
    if (is_block_level === true) {
        return 'blocks';
    }
    if (is_block_level === false || flm_options?.standalone) {
        return 'inline';
    }
    return 'auto';
}


/**
 * Where the value of an object's field was copied from, when the field lies
 * in a copy of another object's values: the relations populator records each
 * back-reference entry it makes in the target object's
 * ``_zoodb.copied_fields`` (the entry's path, as ``relations.children.0``,
 * mapped to ``{ object_type, object_id, field }``, the relation object it
 * copies; see :js:meth:`ZooRelation.process_object_relation`).
 *
 * @param {Object} object - the zoo object (its ``_zoodb`` is read)
 * @param {string} fieldname - the field's path, as in ``_zoodb.flm_fields``
 * @returns {Object|null} ``{ object_type, object_id, field }``, the field
 *     the value was copied from (``relations.parents.2.detail`` for the field
 *     ``relations.children.0.detail``), or ``null``
 */
export function copied_field_source(object, fieldname)
{
    const copied = object?._zoodb?.copied_fields;
    if (copied == null || fieldname == null) {
        return null;
    }
    const parts = String(fieldname).split('.');
    for (let n = parts.length; n > 0; --n) {
        const prefix = parts.slice(0, n).join('.');
        if (Object.hasOwn(copied, prefix)) {
            const { object_type, object_id, field } = copied[prefix];
            const rest = parts.slice(n);
            return { object_type, object_id, field: [field, ...rest].join('.') };
        }
    }
    return null;
}


/**
 * The origin of the fragment of an object's field: ``{ object_type,
 * object_id, field, source_path }``, plus the position of the field's value
 * in its source file when the loader recorded one in
 * ``object._zoodb.flm_field_positions[field]`` (``{ line, col, indent }``,
 * or the origin's own keys ``{ start_line, start_col, indent }``; ``approx``
 * kept).
 *
 * @param {string} object_type
 * @param {Object} object - the zoo object (its ``_zoodb`` is read)
 * @param {string} fieldname - the field's path, as in ``_zoodb.flm_fields``
 * @returns {Object}
 */
export function field_origin(object_type, object, fieldname)
{
    const zoodbinfo = object?._zoodb ?? {};
    const origin = {
        object_type: object_type ?? null,
        object_id: zoodbinfo.id ?? null,
        field: fieldname ?? null,
        source_path: zoodbinfo.source_file_path ?? null,
    };
    const position = zoodbinfo.flm_field_positions?.[fieldname];
    if (position != null) {
        const start_line = position.start_line ?? position.line;
        const start_col = position.start_col ?? position.col;
        if (start_line != null) {
            origin.start_line = start_line;
        }
        if (start_col != null) {
            origin.start_col = start_col;
        }
        if (position.indent != null) {
            origin.indent = position.indent;
        }
        if (position.approx != null) {
            origin.approx = position.approx;
        }
    }
    return origin;
}


/**
 * A class that compiles the FLM content fields of zoo objects into fragments
 * of the zoo's FLM engine (:js:class:`ZooFlmEngine`), in place.
 *
 * Configuration options (`config` argument):
 *
 * - ``engine`` *(required)* -- the :js:class:`ZooFlmEngine` that parses the
 *   fields and holds the fragments.
 *
 * - ``error_policy`` -- ``'abort'`` (the default) or ``'continue'``.  A field
 *   is always parsed into a fragment (a parse never throws for its content),
 *   and the parse diagnostics of an object's fields are collected on
 *   ``obj._zoodb.flm_diagnostics``.  Under ``'abort'``, once all the fields
 *   of an object are parsed, a :js:class:`ZooFlmError` listing the object's
 *   errors is thrown.  Under ``'continue'``, every fragment is kept and the
 *   errors are rendered by the backend's recovery markup (meant for, e.g., a
 *   visual editor with an instant preview).
 *
 * - ``object_types`` -- the object types whose fields are compiled (default:
 *   all of the zoo's).
 *
 * Parsing of DB fields follows the schema's ``_flm`` field.  The value of that
 * field can either be a dictionary, a string, `true`, `false`, or `null`.  If
 * it's a dictionary, then it should be of the form ``{ enabled: true|false,
 * standalone: true|false, is_block_level: true|false|null }`` (all fields
 * default to `false` if omitted, except ``is_block_level`` which defaults to
 * `null`).  The schema's ``_flm`` field can also be `true` or ``'full'``
 * (shorthands for ``{ enabled: true, standalone: false }``), ``'standalone'``
 * (a shorthand for ``{ enabled: true, standalone: true }``),
 * ``'block_level'`` (a shorthand for ``{ enabled: true, standalone: false,
 * is_block_level: true }``), or `false` or `null` (interpreted as ``{
 * enabled: false }``).
 *
 * If ``enabled`` is true, then FLM processing is enabled for that field,
 * otherwise it is disabled.  If ``standalone`` is true, the field's fragment
 * is standalone: content that can be rendered in any context, which uses no
 * citations, cross-references or similar context-dependent content (an
 * object's name or title, reproduced in links to that object and in lists of
 * objects); it is rendered through the engine's snippet cache.  The layout
 * of the fragment (:func:`flm_options_layout`) is ``'blocks'`` when
 * ``is_block_level`` is true (paragraphs, lists, figures, ...), ``'inline'``
 * when it is false or the field is standalone, and ``'auto'`` otherwise (the
 * content decides).
 *
 * Each fragment's origin is ``{ object_type, object_id, field,
 * source_path }`` (:func:`field_origin`); its canonical label is
 * ``source_path#field``.
 *
 * A field of a back-reference, a copy of another object's relation that the
 * relations populator records (:func:`copied_field_source`), is not compiled
 * on its own: it holds the fragment of the field it copies (compiled once, as
 * that object's field, with its origin and its file position), at every
 * processing, a reload included.  :meth:`object_fragments` leaves such a copy
 * out (the fragment is its source object's), :meth:`object_field_fragments`
 * flags it.
 */
export class FLMSimpleContentCompiler extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();
        this.config = Object.assign({}, config);

        this.engine = this.config.engine;
        if (this.engine == null) {
            throw new Error(
                `You need to specify the config field ‘engine’ (a ZooFlmEngine) for `
                + `FLMSimpleContentCompiler!`
            );
        }

        this.error_policy = check_error_policy(this.config.error_policy ?? 'abort');
    }

    initialize_zoo()
    {
        this.config.object_types ??= this.zoodb.object_types;
    }

    process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }

        for (const object_type of this.config.object_types) {
            const schema = this.zoodb.schema(object_type);
            for (const [objid, obj] of Object.entries(this.zoodb.objects[object_type] ?? {})) {
                this.compile_object(object_type, objid, obj, schema);
            }
        }
    }

    /**
     * Releases the fragments of the objects that `db_objects` replaces (the
     * objects currently in the zoo under the same type and ID), so that the
     * engine frees them.
     */
    prepare_zoo_update_objects(db_objects)
    {
        for (const [object_type, objectdb] of Object.entries(db_objects)) {
            for (const [object_id, new_obj] of Object.entries(objectdb)) {
                const old_obj = this.zoodb?.objects?.[object_type]?.[object_id];
                if (old_obj == null || old_obj === new_obj) {
                    continue;
                }
                this.release_object(old_obj);
            }
        }
    }

    /**
     * Releases the fragments of an object's FLM fields (those listed in
     * ``obj._zoodb.flm_fields`` that this engine holds; not the fragments its
     * back-references hold, which are other objects' fields).
     *
     * @param {Object} obj
     */
    release_object(obj)
    {
        const fragments = Array.from(this.object_fragments(obj));
        if (fragments.length > 0) {
            debug(`Releasing ${fragments.length} fragment(s) of ‘${obj._zoodb?.id}’`);
            this.engine.release(fragments);
        }
    }

    /**
     * The live fragments (of this engine, not released) of the FLM fields of
     * an object, in the order of ``obj._zoodb.flm_fields``; a field that
     * holds the fragment of the field it copies (a back-reference's
     * ``detail``) is left out, since that fragment is the other object's.
     *
     * @param {Object} obj
     * @returns {Generator<ZooFlmFragment>}
     */
    * object_fragments(obj)
    {
        for (const { fragment, copy } of this.object_field_fragments(obj)) {
            if (!copy) {
                yield fragment;
            }
        }
    }

    /**
     * The live fragments of the FLM fields of an object, in the order of
     * ``obj._zoodb.flm_fields``, each as ``{ fieldname, fragment, copy }``:
     * ``copy`` is true for a field that holds the fragment of the field it
     * copies (:func:`copied_field_source`, a back-reference), whose fragment
     * belongs to that other object.
     *
     * @param {Object} obj
     * @returns {Generator<Object>}
     */
    * object_field_fragments(obj)
    {
        for (const fieldname of obj?._zoodb?.flm_fields ?? []) {
            const fragment = getfield(obj, fieldname);
            if (this._is_live_fragment(fragment)) {
                const source = this._copied_field_source_object(obj, fieldname);
                const copy = (source != null && getfield(source.object, source.fieldname) === fragment);
                yield { fieldname, fragment, copy };
            }
        }
    }

    _is_live_fragment(f)
    {
        return is_fragment(f) && f._engine === this.engine && !f.released;
    }

    // The object whose field a copied field copies (`copied_field_source()`),
    // when this compiler compiles that object's type: { object_type, object,
    // fieldname }, or null (no copy, no zoo, or another object type).
    _copied_field_source_object(obj, fieldname)
    {
        const source = copied_field_source(obj, fieldname);
        if (source == null || this.zoodb == null
            || !(this.config.object_types ?? []).includes(source.object_type)) {
            return null;
        }
        const object = this.zoodb.objects?.[source.object_type]?.[source.object_id];
        return (object == null) ? null
            : { object_type: source.object_type, object, fieldname: source.field };
    }

    // The fragment of the field a copied field copies, compiled in place as
    // that object's field (with its origin and file position) if it is not
    // yet (its object comes later in the zoo, or was replaced by a reload);
    // null when the field is no copy, or when the field it copies is not an
    // FLM field (the copy is then compiled as a field of its own).  Its
    // diagnostics are reported with that object's (compile_object()).
    _copied_field_fragment(obj, fieldname)
    {
        const source = this._copied_field_source_object(obj, fieldname);
        if (source == null) {
            return null;
        }
        const value = getfield(source.object, source.fieldname);
        if (this._is_live_fragment(value)) {
            return value;
        }
        const schema = this.zoodb.schema(source.object_type);
        for (const { fieldname: f, fieldvalue, parent, parent_index, flm_options }
             of this._iter_flm_fields(source.object, schema)) {
            if (f === source.fieldname) {
                const fragment = this._make_fragment(fieldvalue, {
                    flm_options,
                    origin: field_origin(source.object_type, source.object, source.fieldname),
                });
                parent[parent_index] = fragment;
                return fragment;
            }
        }
        return null;
    }

    // ----

    /**
     * Compile the given FLM content `flm_content` of an object's field
     * according to the options `flm_options`, and apply the error policy to
     * its parse diagnostics.
     *
     * The fragment's origin is made from `object_type`, `object` (its
     * ``_zoodb`` gives the ID, the source file and the field positions) and
     * `fieldname` (:func:`field_origin`).
     *
     * The newly created fragment is returned.  The `object` itself and its
     * properties are NOT modified.
     *
     * The FLM options should be an object as is returned by
     * `parse_schema_flm_options()`.  If you specify `flm_options` (not
     * nullish), then the arguments `fieldschema` and `object_schema` are not
     * used.  If you don't specify `flm_options` (nullish), the `fieldschema`
     * option is used to parse the FLM options.  If `flm_options` and
     * `fieldschema` are both not specified (nullish) then we find the
     * corresponding field schema in `object_schema` using the `fieldname`
     * argument.
     *
     * Note: the API guarantees that compile_flm(), compile_flm_fragment(), and
     * compile_object() also work if no zoodb is set, and can be used w/o zoodb
     * if you want to compile a single ad hoc object.
     */
    compile_flm( flm_content, {
        flm_options,
        fieldschema,
        object_schema,
        object_type,
        object,
        fieldname,
    } )
    {
        if (this._is_live_fragment(flm_content)) {
            // it's already compiled!
            return flm_content;
        }

        flm_options ??= this._find_flm_options({ fieldschema, object_schema, fieldname });

        return this.compile_flm_fragment(flm_content, {
            flm_options,
            origin: field_origin(object_type, object, fieldname),
        });
    }

    _find_flm_options({ fieldschema, object_schema, fieldname })
    {
        if (fieldschema == null) {
            for (const fld of iter_schema_fields_recursive(object_schema)) {
                if (fld.fieldname === fieldname) {
                    fieldschema = fld.fieldschema;
                    break;
                }
            }
            if (fieldschema == null) {
                throw new Error(
                    `Couldn't find field schema for ‘${fieldname}’ in object_schema`
                );
            }
        }
        return parse_schema_flm_options(fieldschema);
    }

    /**
     * Compile the given string `flm_content` into a fragment of the engine,
     * and apply the error policy to its parse diagnostics: under ``'abort'``,
     * a parse Error releases the fragment and throws a :js:class:`ZooFlmError`.
     *
     * - `flm_options` is an object with keys `standalone` (defaults to false)
     *   and `is_block_level` (defaults to null); see
     *   :func:`flm_options_layout` for the layout they give.
     *
     * - `origin` is the fragment's origin (``{ object_type, object_id, field,
     *   source_path, label, ... }`` or a label string); see
     *   :js:meth:`ZooFlmEngine.make_fragment`.
     *
     * A value that is already a fragment of the engine is returned as is; a
     * nullish value is compiled as the empty string.
     */
    compile_flm_fragment(flm_content, { flm_options, origin } = {})
    {
        const f = this._make_fragment(flm_content, { flm_options, origin });
        if (f.diagnostics.length > 0) {
            try {
                apply_error_policy(f.diagnostics, this.error_policy);
            } catch (err) {
                this.engine.release(f);
                throw err;
            }
        }
        return f;
    }

    // Parses a field into a fragment, never throwing for its content.
    _make_fragment(flm_content, { flm_options, origin })
    {
        if (this._is_live_fragment(flm_content)) {
            return flm_content;
        }
        if (is_fragment(flm_content)) {
            // a fragment of another engine, or released: parse its source again
            flm_content = flm_content.source;
        }
        flm_content ??= '';
        if (typeof flm_content !== 'string') {
            throw new TypeError(
                `Cannot compile FLM content of type ${typeof flm_content} `
                + `(${JSON.stringify(origin)}): expected a string`
            );
        }
        return this.engine.make_fragment(flm_content, {
            origin,
            layout: flm_options_layout(flm_options),
            standalone: Boolean(flm_options?.standalone),
            error_policy: 'continue',
        });
    }

    * _iter_flm_fields(obj, schema)
    {
        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index}
             of iter_object_fields_recursive(obj, schema, {provide_parent: true})) {

            const flm_options = parse_schema_flm_options(fieldschema);

            if ( flm_options.enabled ) {

                // this is an FLM field !

                yield {fieldname, fieldvalue, fieldschema, parent, parent_index, flm_options};

            }
        }
    }

    /**
     * Compile all FLM-enabled fields of the database object `obj` in place,
     * replacing each field's string value with its fragment (a value that is
     * already a fragment of the engine is kept).  A field that copies another
     * object's field (:func:`copied_field_source`, a back-reference) gets that
     * field's fragment, compiled in that object first if needed; its
     * diagnostics are that object's.
     *
     * The list of compiled field names is stored in `obj._zoodb.flm_fields` so
     * that later stages (e.g. `process_data_dump()`) know which fields to
     * serialise back to text.  The parse diagnostics of the fields are
     * collected on `obj._zoodb.flm_diagnostics`; under the ``'abort'`` error
     * policy, a :js:class:`ZooFlmError` listing the object's errors is thrown
     * once all the fields are parsed (the fragments stay in place).
     *
     * Note: `compile_flm()`, `compile_flm_fragment()`, and `compile_object()`
     * also work if no zoodb is attached; they can be used to compile a
     * stand-alone ad hoc object.
     *
     * @param {string} object_type - The type name of the object being compiled.
     * @param {string} objid - The ID of the object being compiled.
     * @param {Object} obj - The database object whose FLM fields are compiled
     *     in place.
     * @param {Object} schema - The JSON Schema for `object_type`, used to
     *     discover which fields carry FLM content.
     */
    compile_object(object_type, objid, obj, schema)
    {
        debug(`Compiling FLM content - ${object_type} ‘${objid}’`);

        obj._zoodb ??= {};
        obj._zoodb.id ??= objid;
        obj._zoodb.flm_fields = [];
        const diagnostics = [];

        for (const {fieldname, fieldvalue, parent, parent_index, flm_options}
             of this._iter_flm_fields(obj, schema)) {

            // register this field as having FLM content
            obj._zoodb.flm_fields.push(fieldname);

            // a copy of another object's field (a back-reference's detail)
            // holds that field's fragment, compiled once; its diagnostics
            // are that object's
            const copied = this._copied_field_fragment(obj, fieldname);
            if (copied != null) {
                parent[parent_index] = copied;
                continue;
            }

            const f = this._make_fragment(fieldvalue, {
                flm_options,
                origin: field_origin(object_type, obj, fieldname),
            });
            parent[parent_index] = f;
            diagnostics.push(...f.diagnostics);
        }

        obj._zoodb.flm_diagnostics = diagnostics;

        if (diagnostics.length > 0) {
            debug(`${diagnostics.length} diagnostic(s) in ${object_type} ‘${objid}’`);
            apply_error_policy(diagnostics, this.error_policy);
        }
    }



    // ---

    /**
     * Prepare a data dump by converting the fragments of the objects' FLM
     * fields back to a serialisable form.  One of the following options may
     * be chosen (defaulting to `flm_fragments_to_flm_text`):
     *
     * - `flm_fragments_keep_instances` — keep the fragment objects in the
     *   dump as-is (useful for in-process consumers that can operate
     *   directly on fragments).
     *
     * - `flm_fragments_to_flm_text` — replace each fragment with its FLM
     *   source string.  This is the default.
     *
     * (The former `flm_fragments_to_flm_dump` is gone: the source is the dump
     * form of a fragment, and the data a browser app needs to render it is
     * the engine's dump, written by the FLM processor as ``data.zooflm``.)
     *
     * The additional option `flm_keep_zoodb_info_flm_fields` (default `true`)
     * controls whether `obj._zoodb.flm_fields` and
     * `obj._zoodb.flm_diagnostics` are retained in the dump.  Set it to
     * `false` to strip that internal bookkeeping.
     *
     * @param {Object} data - The data object being assembled for the dump.
     * @param {Object} options - Dump options; see above.
     * @returns {Promise<Object>} The (mutated) `data` object.
     */
    async process_data_dump(data, options)
    {
        let {
            flm_fragments_keep_instances,
            flm_fragments_to_flm_text,
            flm_keep_zoodb_info_flm_fields,
        } = options;

        if (options.flm_fragments_to_flm_dump) {
            throw new Error(
                `The data dump option flm_fragments_to_flm_dump is no longer supported: `
                + `fragments are dumped as their FLM source (flm_fragments_to_flm_text), `
                + `and the FLM processor writes the engine's data as data.zooflm`
            );
        }

        flm_fragments_keep_instances ??= false;
        flm_fragments_to_flm_text ??= false;

        flm_keep_zoodb_info_flm_fields ??= true;

        if (!flm_fragments_keep_instances && !flm_fragments_to_flm_text) {
            // if neither option is set, use flm_text
            if (options.flm_fragments_to_flm_text === false) {
                // if the option was initially explicitly set to false, that's
                // an error
                throw new Error(
                    `For data dumps with FLMSimpleContentCompiler, you need `
                    + `to set one of the flm_fragments_** options.  The `
                    + `flm_fragments_to_flm_text defaults to being chosen if none `
                    + `is provided, but you explicitly set it to false.`
                );
            }
            flm_fragments_to_flm_text = true;
        }

        if (flm_fragments_keep_instances && flm_fragments_to_flm_text) {
            throw new Error(
                `preparing data dump in FLMSimpleContentCompiler: at most one of `
                + `flm_fragments_keep_instances and flm_fragments_to_flm_text may be set.`
            );
        }

        if (flm_fragments_keep_instances && flm_keep_zoodb_info_flm_fields) {
            // keep data as is
            return data;
        }

        // we need to iterate over the data and fix it
        for (const object_type of this.config.object_types ?? Object.keys(data.db.objects)) {
            const objects = data.db.objects[object_type];
            if (!objects || Object.keys(objects).length == 0) {
                continue;
            }
            for (const [/*objid*/, obj] of Object.entries(objects)) {
                for (const flm_field of obj._zoodb?.flm_fields ?? []) {
                    // we need to process obj's field `flm_field`
                    const fragment = getfield(obj, flm_field);
                    if (fragment == null) {
                        // do not throw an error, let's try to get
                        // a usable dump.  Maybe the user is saving
                        // precious information we don't want to lose?
                        console.warn(
                            `No such field on object: ${flm_field}.  (Internal inconsistency?)`
                        );
                        continue;
                    }
                    if (flm_fragments_to_flm_text && is_fragment(fragment)) {
                        setfield(obj, flm_field, () => fragment.source);
                    }
                }
                if (!flm_keep_zoodb_info_flm_fields && obj._zoodb != null) {
                    delete obj._zoodb.flm_fields;
                    delete obj._zoodb.flm_diagnostics;
                }
            }
        }

        return data;
    }

}

