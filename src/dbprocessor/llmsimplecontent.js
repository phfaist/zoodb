import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.llmcontent');

import { ZooDbProcessorBase } from './base.js';

import { getfield } from '../util/getfield.js';
import {
    iter_object_fields_recursive, iter_schema_fields_recursive
} from '../util/objectinspector.js';
import {
    ZooLLMResourceInfo, $$kw, repr, LLMDataDumper, is_llm_fragment
} from '../zoollm/index.js';


function parse_schema_llm_options(schema)
{
    const schema_llm = schema._llm;

    if (!schema_llm) {
        return {enabled: false, standalone: false};
    }
    
    // check for shortcuts
    
    if (schema_llm === 'full' || schema_llm === true) {
        return { enabled: true, standalone: false };
    }

    if (schema_llm === 'standalone') {
        return { enabled: true, standalone: true };
    }

    // get values from llm schema field

    const {enabled, standalone} = schema_llm;

    return { enabled: enabled ?? false,
             standalone: standalone ?? false };
}


/**
 *
 * Parsing of DB fields follows the schema's _llm field.  The value of that
 * field can be:
 *
 *   - <dict>  --> enable LLM with given options
 *
 * A few shortcuts:
 *   - 'full'          --> parse as full LLM content
 *   - 'standalone'    --> shortcut for " - { standalone: true }"
 *
 * Options can be:
 *   - enabled: true|false
 *   - standalone: true|false
 *
 */
export class LLMSimpleContentCompiler extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();
        this.config = Object.assign({}, config);

        if (!this.config.llm_environment) {
            throw new Error(
                `You need to specify the config field ‘llm_environment’ for `
                + `LLMContentCompiler!`
            );
        }

        this.config.content_scanner ??= null;

        this.config.llm_error_policy ??= 'abort';
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
            for (const [object_id, obj] of Object.entries(objectdb)) {
                this.config.content_scanner.unregister_all_from_object(object_type, object_id);
            }
        }
    }

    // ----

    /**
     * Compile the given LLM content `llm_content` according to the options
     * `llm_options`.
     *
     * The fragment's `resource_info` and `what` properties are set according to
     * `object_type`, `object`, and `fieldname`.  We'll inspect `object._zoodb`
     * to get information like object ID, source file name, etc.
     *
     * The newly created LLM fragment is returned.  The `object` itself and its
     * properties are NOT modified.
     *
     *  The LLM options should be an object as is returned by
     * `parse_schema_llm_options()`.  It specifies whether or not the fragment
     * is parsed in standalone mode.
     *
     * If you specify `llm_options` (not nullish), then the arguments
     * `fieldschema` and `object_schema` are not used.  If you don't specify
     * `llm_options` (nullish), the `fieldschema` option is used to parse the
     * LLM options.  If `llm_options` and `fieldschema` are both not specified
     * (nullish) then we find the corresponding field schema in `object_schema`
     * using the `fieldname` argument.
     *
     * Note: the API guarantees that compile_llm() and compile_object() also
     * work if no zoodb is set, and can be used w/o zoodb if you want to compile
     * a single ad hoc object.
     */
    compile_llm( llm_content, {
        llm_options,
        fieldschema,
        object_schema,
        object_type,
        object,
        fieldname,
    } )
    {
        if (is_llm_fragment(llm_content)) {
            // it's already compiled!
            return llm_content;
        }

        if (llm_options == null) {
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
            llm_options = parse_schema_llm_options(fieldschema);
        }

        const object_id = object?._zoodb.id;
        const source_file_path = object?._zoodb?.source_file_path;

        const resource_info = new ZooLLMResourceInfo(
            object_type,
            object_id,
            source_file_path,
        );

        const what = resource_info.toString() + ` .${fieldname}`;

        llm_content ??= '';

        let fragment = null;
        try {
            fragment = this.config.llm_environment.make_fragment(
                llm_content,
                $$kw({
                    standalone_mode: llm_options.standalone ?? false,
                    resource_info: resource_info,
                    what: what,
                })
            );
        } catch (err) {
            const errmsgobj = (err.msg !== undefined) ? (err.msg + '\n' + err.stack) : err;
            console.error(
                `Error while compiling LLM content for ${resource_info} `
                + `— field ‘${fieldname}’: `,
                errmsgobj
            );
            if (this.config.llm_error_policy == 'abort') {
                debug(`LLM Error & policy is 'abort', aborting compilation`);
                throw err;
            } else if (this.config.llm_error_policy == 'continue') {
                // report the error in the text field itself, as a fake fragment, so
                // it can be debugged.
                debug(`Continuing despite LLM Error (llm_error_policy is 'continue')`);
                fragment = this.config.llm_environment.make_fragment(
                    `\\textbf{LLM ERROR `
                    +   `(\\begin{verbatimtext}${what} (‘${fieldname}’)\\end{verbatimtext}):} `
                    + `\\begin{verbatimtext}${errmsgobj}\\end{verbatimtext}`,
                    $$kw({
                        standalone_mode: true,
                        resource_info: resource_info,
                        what: `ERROR-MESSAGE:${what}`,
                    })
                );
            } else {
                throw new Error(
                    `Invalid llm_error_policy: ‘${this.config.llm_error_policy}’, `
                    + `expected 'abort' or 'continue'`
                );
            }
        }

        if (this.config.content_scanner != null) {
            this.config.content_scanner.scan_fragment(fragment);
        }

        return fragment;
    }

    * _iter_llm_fields(obj, schema)
    {
        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index}
             of iter_object_fields_recursive(obj, schema, {provide_parent: true})) {

            const llm_options = parse_schema_llm_options(fieldschema);

            if ( llm_options.enabled ) {

                // this is an LLM field !

                yield {fieldname, fieldvalue, fieldschema, parent, parent_index, llm_options};

            }
        }
    }

    /**
     *
     * Note: the API guarantees that compile_llm() and compile_object() also
     * work if no zoodb is set, and can be used w/o zoodb if you want to compile
     * a single ad hoc object.
     */
    compile_object(object_type, objid, obj, schema)
    {
        debug(`Compiling LLM content - ${object_type} ‘${objid}’`);

        obj._zoodb.llm_fields = [];

        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index, llm_options}
             of this._iter_llm_fields(obj, schema)) {

            // debug(
            //     `Compiling ${object_type} ${objid}'s LLM field ${fieldname}: `
            //     + `‘${repr(fieldvalue)}’`
            // );

            // register this field as having LLM content
            obj._zoodb.llm_fields.push(fieldname);

            parent[parent_index] = this.compile_llm(
                fieldvalue,
                {
                    object_type: object_type,
                    llm_options: llm_options,
                    object: obj,
                    fieldname: fieldname
                }
            );

        }
    }



    // ---
    prepare_data_dump(data, options)
    {
        if (options.llm_keep_fragment_instances) {
            return data;
        }
        // remove object pointers in relations, to avoid cyclic references, and
        // instead list all relations separately.

        throw new Error(`Operation not supported!`);
    }

}
