import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.flmsimplecontent');

import { ZooDbProcessorBase } from './base.js';

import { getfield, setfield } from '../util/getfield.js';
import {
    iter_object_fields_recursive, iter_schema_fields_recursive
} from '../util/objectinspector.js';
import {
    ZooFLMResourceInfo, $$kw, // repr,
    FLMDataDumper,
    is_flm_fragment, is_pylatexenc_located_error, format_pylatexenc_located_error,
} from '../zooflm/index.js';


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
 * A class that can compile FLM content fields into FLM fragments.
 *
 * Configuration options (`config` argument):
 *
 * - ``flm_environment`` - the environment object to use to create fragments
 *
 * - ``content_scanner`` - if set, it is assumed to be a :class:`ZooFLMScanner`
 *   instance, and all compiled FLM fragments are scanned.
 *
 * - ``flm_error_policy`` - one of 'abort' (the default) or 'continue'.  If
 *   'abort', then any errors that arise when compile FLM content cause a JS
 *   exception/error to be thrown.  If 'continue', then a warning is triggered,
 *   and the fragment contents is set to a text that contains a human-readable
 *   description of the error.  (The 'continue' is meant for use, for instance,
 *   in a visual editor application that provides an instant preview of the
 *   typed FLM code.)
 *
 * Parsing of DB fields follows the schema's ``_flm`` field.  The value of that
 * field can either be a dictionary, a string, `true`, `false`, or `null`.  If
 * it's a dictionary, then it should be of the form ``{ enabled: true|false,
 * standalone: true|false }`` (both fields default to `false` if omitted).  The
 * schema's ``_flm`` field can also be `true` or ``'full'`` (shorthands for ``{
 * enabled: true, standalone: false }``, ``'standalone'`` (a shorthand for ``{
 * enabled: true, standalone: true }``), or `false` or `null` (interpreted as
 * ``{ enabled: false }``).
 *
 * If ``enabled`` is true, then FLM processing is enabled for that field,
 * otherwise it is disabled.  If ``standalone`` is true, then any FLM processing
 * of that field happens in standalone mode.  Standalone mode = content that can
 * be rendered in any context = content that doesn't make use of citations,
 * cross-references or similar context-dependent content.  Standalone mode is
 * useful for pieces of text that you'd want to be able to render in multiple
 * different contexts (e.g. an object's name or title, which you might want to
 * reproduce in links to that object or in a list of objects).
 *
 */
export class FLMSimpleContentCompiler extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();
        this.config = Object.assign({}, config);

        if (!this.config.flm_environment) {
            throw new Error(
                `You need to specify the config field ‘flm_environment’ for `
                + `FLMContentCompiler!`
            );
        }

        this.config.content_scanner ??= null;

        this.config.flm_error_policy ??= 'abort';
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
            for (const [objid, obj] of Object.entries(this.zoodb.objects[object_type])) {
                this.compile_object(object_type, objid, obj, schema);
            }
        }
    }

    prepare_zoo_update_objects(db_objects)
    {
        for (const [object_type, objectdb] of Object.entries(db_objects)) {
            for (const [object_id, /*obj*/] of Object.entries(objectdb)) {
                this.config.content_scanner.unregister_all_from_object(object_type, object_id);
            }
        }
    }

    // ----

    /**
     * Compile the given FLM content `flm_content` according to the options
     * `flm_options`.
     *
     * The fragment's `resource_info` and `what` properties are set according to
     * `object_type`, `object`, and `fieldname`.  We'll inspect `object._zoodb`
     * to get information like object ID, source file name, etc.
     *
     * The newly created FLM fragment is returned.  The `object` itself and its
     * properties are NOT modified.
     *
     * The FLM options should be an object as is returned by
     * `parse_schema_flm_options()`.  It specifies whether or not the fragment
     * is parsed in standalone mode.
     *
     * If you specify `flm_options` (not nullish), then the arguments
     * `fieldschema` and `object_schema` are not used.  If you don't specify
     * `flm_options` (nullish), the `fieldschema` option is used to parse the
     * FLM options.  If `flm_options` and `fieldschema` are both not specified
     * (nullish) then we find the corresponding field schema in `object_schema`
     * using the `fieldname` argument.
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
        if (is_flm_fragment(flm_content)) {
            // it's already compiled!
            return flm_content;
        }

        if (flm_options == null) {
            if (fieldschema == null) {
                // is there a better way to do this??
                let fldlist = iter_schema_fields_recursive(object_schema);
                for (const fld of fldlist) {
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
            flm_options = parse_schema_flm_options(fieldschema);
        }

        const object_id = object?._zoodb.id;
        const source_file_path = object?._zoodb?.source_file_path;

        const resource_info = new ZooFLMResourceInfo(
            object_type,
            object_id,
            source_file_path,
        );

        const what = resource_info.toString() + ` .${fieldname}`;

        return this.compile_flm_fragment(flm_content, { flm_options, resource_info, what })
    }

    /**
     * Compile the given string `flm_content` into an FLM fragment using
     * the current environment.  Will also apply any scanner, unless
     * `skip_scanner` is true.  Errors will be reported as per the
     * config's error policy.
     * 
     * - `flm_options` is an object with keys 'standalone' (defaults to
     *   false) and `is_block_level` (defaults to null to let FLMFragment's
     *   parser decide).
     * 
     * - `resource_info` is attached to the fragment.  If null, a `ZooFLMResource`
     *   info instance with null entries is created.
     * 
     * - `what` is a description of what is being compiled.  Useful for error
     *   messages.
     * 
     * - `skip_scanner` defaults to false, so that the fragment scanner defined in
     *   the configuration of this processor is applied to the fragment by default.
     *   If this argument is set to a truthy value, then the fragment scanner
     *   is not applied.
     * 
     * - `fieldname` can be set to the name of the object's field name that is
     *   being compiled.  It is used in error information reporting only.
     * 
     * Note: the API guarantees that compile_flm(), compile_flm_fragment(), and
     * compile_object() also work if no zoodb is set, and can be used w/o zoodb
     * if you want to compile a single ad hoc object.
     */
    compile_flm_fragment(flm_content, { 
        flm_options, resource_info, what, skip_scanner,
        fieldname, // fieldname is only used for reporting errors
    })
    {
        if (is_flm_fragment(flm_content)) {
            // it's already compiled!
            return flm_content;
        }
        flm_content ??= '';

        if (resource_info == null) {
            resource_info = new ZooFLMResourceInfo(null, null, null);
        }

        let fragment = null;
        try {
            fragment = this.config.flm_environment.make_fragment(
                flm_content,
                $$kw({
                    standalone_mode: flm_options.standalone ?? false,
                    resource_info: resource_info ?? null,
                    what: what,
                    is_block_level: flm_options.is_block_level ?? null,
                })
            );
        } catch (err) {
            const errmsgobj = (err.msg !== undefined) ? (err.msg + '\n' + err.stack) : err;
            console.error(
                `Error while compiling FLM content for ${what}: `,
                errmsgobj
            );
            let errmsgstr = null;
            // if it's a LatexWalkerLocatedError, get a precise error message -> 
            if (is_pylatexenc_located_error(err)) {
                errmsgstr = format_pylatexenc_located_error(err);
            } else {
                errmsgstr = `${errmsgobj}`;
            }
            if (this.config.flm_error_policy == 'abort') {
                debug(`FLM Error & policy is 'abort', aborting compilation`);
                throw new Error(`FLM Error compiling ${what}: ${errmsgstr}`);
            } else if (this.config.flm_error_policy == 'continue') {
                // report the error in the text field itself, as a fake fragment, so
                // it can be debugged.
                debug(`Continuing despite FLM Error (flm_error_policy is 'continue')`);
                fragment = this.config.flm_environment.make_fragment(
                    `\\textbf{FLM ERROR `
                    +   `(\\begin{verbatimtext}${what}\\end{verbatimtext}):} `
                    + '\n\n'
                    + `\\begin{verbatimtext}${errmsgstr}\\end{verbatimtext}`,
                    $$kw({
                        standalone_mode: true,
                        resource_info: resource_info,
                        what: `ERROR-MESSAGE:${what}`,
                    })
                );
                fragment._flm_error_info = {
                    what: what,
                    msg: err.msg,
                    fieldname: fieldname,
                    message_string: errmsgstr,
                    error_object: err,
                };
            } else {
                throw new Error(
                    `Invalid flm_error_policy: ‘${this.config.flm_error_policy}’, `
                    + `expected 'abort' or 'continue'`
                );
            }
        }

        if ( !skip_scanner && this.config.content_scanner != null) {
            this.config.content_scanner.scan_fragment(fragment);
        }

        return fragment;
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
     *
     * Note: the API guarantees that compile_flm() and compile_object() also
     * work if no zoodb is set, and can be used w/o zoodb if you want to compile
     * a single ad hoc object.
     */
    compile_object(object_type, objid, obj, schema)
    {
        debug(`Compiling FLM content - ${object_type} ‘${objid}’`);

        obj._zoodb.flm_fields = [];

        for (const {fieldname, fieldvalue, /*fieldschema,*/
                    parent, parent_index, flm_options}
             of this._iter_flm_fields(obj, schema)) {

            // debug(
            //     `Compiling ${object_type} ${objid}'s FLM field ${fieldname}: `
            //     + `‘${repr(fieldvalue)}’`
            // );

            // register this field as having FLM content
            obj._zoodb.flm_fields.push(fieldname);

            parent[parent_index] = this.compile_flm(
                fieldvalue,
                {
                    object_type: object_type,
                    flm_options: flm_options,
                    object: obj,
                    fieldname: fieldname
                }
            );

        }
    }



    // ---

    async process_data_dump(data, options)
    {
        let {
            flm_fragments_keep_instances,
            flm_fragments_to_flm_text,
            flm_fragments_to_flm_dump,

            flm_keep_zoodb_info_flm_fields,
        } = options;

        flm_fragments_keep_instances ??= false;
        flm_fragments_to_flm_text ??= false;
        flm_fragments_to_flm_dump ??= false;

        flm_keep_zoodb_info_flm_fields ??= true;

        if (!flm_fragments_keep_instances
            && !flm_fragments_to_flm_text
            && !flm_fragments_to_flm_dump) {
            // if neither option is set, use flm_text
            if (options.flm_fragments_to_flm_text === false) {
                // if the option was initially explicitly set to false, that's
                // an error
                throw new Error(
                    `For data dumps with FLMSimpleContentCompiler, you need `
                    + `to set one of the flm_fragemnts_** options.  The `
                    + `flm_fragments_to_flm_text defaults to being chosen if none `
                    + `is provided, but you explicitly set it to false.`
                );
            }
            flm_fragments_to_flm_text = true;
        }

        // error if more than one of these options is set
        if ( (0 + (+flm_fragments_keep_instances)
              + (+flm_fragments_to_flm_text)
              + (+flm_fragments_to_flm_dump) ) > 1 ) {
            throw new Error(
                `preparing data dump in FLMSimpleContentCompiler: at most one of `
                + `flm_fragments_keep_instances (=${flm_fragments_keep_instances}), `
                + `flm_fragments_to_flm_text (=${flm_fragments_to_flm_text}), and `
                + `flm_fragments_to_flm_dump (=${flm_fragments_to_flm_dump}) `
                + `may be set.`
            );
        }
        
        let flm_dumper = null;
        let flm_dumper_key_counter = 0;
        if (flm_fragments_to_flm_dump) {
            flm_dumper = new FLMDataDumper($$kw({
                environment: this.config.flm_environment
            }));
        }
            
        if (flm_fragments_keep_instances && flm_keep_zoodb_info_flm_fields) {
            // keep data as is
        } else {
            // we need to iterate over the data and fix it
            for (const object_type of this.config.object_types) {
                // const schema = this.zoodb.schema(object_type);
                const objects = data.db.objects[object_type];
                if (!objects || Object.keys(objects).length == 0) {
                    continue;
                }
                for (const [/*objid*/, obj] of Object.entries(objects)) {
                    for (const flm_field of obj._zoodb.flm_fields) {
                        // we need to process obj's field `flm_field`
                        const fragment = getfield(obj, flm_field);
                        if (flm_fragments_to_flm_text) {
                            setfield(obj, flm_field,
                                     () => fragment.flm_text);
                        }
                        if (flm_fragments_to_flm_dump) {
                            let flm_dumper_key = `flm.${flm_dumper_key_counter}`;
                            ++flm_dumper_key_counter;
                            flm_dumper.add_object_dump(flm_dumper_key, fragment);
                            setfield(obj, flm_field,
                                     () => ({'flm_fragment_key': flm_dumper_key}));
                        }
                    }
                    if (!flm_keep_zoodb_info_flm_fields) {
                        let zdbinf = obj._zoodb;
                        delete zdbinf.flm_fields;
                    }
                }
            }
        }

        if (flm_fragments_to_flm_dump) {
            data.flm_fragment_data = flm_dumper.get_data();
        }

        return data;
    }

}
