import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.flmsimplecontent');

import { ZooDbProcessorBase } from './base.js';

import { getfield } from '../util/getfield.js';
import {
    iter_object_fields_recursive, iter_schema_fields_recursive
} from '../util/objectinspector.js';
import {
    ZooFLMResourceInfo, $$kw, repr, FLMDataDumper, is_flm_fragment
} from '../zooflm/index.js';


function parse_schema_flm_options(schema)
{
    const schema_flm = schema._flm;

    if (!schema_flm) {
        return {enabled: false, standalone: false};
    }
    
    // check for shortcuts
    
    if (schema_flm === 'full' || schema_flm === true) {
        return { enabled: true, standalone: false };
    }

    if (schema_flm === 'standalone') {
        return { enabled: true, standalone: true };
    }

    // get values from flm schema field

    const {enabled, standalone} = schema_flm;

    return { enabled: enabled ?? false,
             standalone: standalone ?? false };
}


/**
 *
 * Parsing of DB fields follows the schema's _flm field.  The value of that
 * field can be:
 *
 *   - <dict>  --> enable FLM with given options
 *
 * A few shortcuts:
 *   - 'full'          --> parse as full FLM content
 *   - 'standalone'    --> shortcut for " - { standalone: true }"
 *
 * Options can be:
 *   - enabled: true|false
 *   - standalone: true|false
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
            for (const [object_id, obj] of Object.entries(objectdb)) {
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
     *  The FLM options should be an object as is returned by
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
     * Note: the API guarantees that compile_flm() and compile_object() also
     * work if no zoodb is set, and can be used w/o zoodb if you want to compile
     * a single ad hoc object.
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

        flm_content ??= '';

        let fragment = null;
        try {
            fragment = this.config.flm_environment.make_fragment(
                flm_content,
                $$kw({
                    standalone_mode: flm_options.standalone ?? false,
                    resource_info: resource_info,
                    what: what,
                })
            );
        } catch (err) {
            const errmsgobj = (err.msg !== undefined) ? (err.msg + '\n' + err.stack) : err;
            console.error(
                `Error while compiling FLM content for ${resource_info} `
                + `— field ‘${fieldname}’: `,
                errmsgobj
            );
            if (this.config.flm_error_policy == 'abort') {
                debug(`FLM Error & policy is 'abort', aborting compilation`);
                throw err;
            } else if (this.config.flm_error_policy == 'continue') {
                // report the error in the text field itself, as a fake fragment, so
                // it can be debugged.
                debug(`Continuing despite FLM Error (flm_error_policy is 'continue')`);
                fragment = this.config.flm_environment.make_fragment(
                    `\\textbf{FLM ERROR `
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
                    `Invalid flm_error_policy: ‘${this.config.flm_error_policy}’, `
                    + `expected 'abort' or 'continue'`
                );
            }
        }

        if (this.config.content_scanner != null) {
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

        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index, flm_options}
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
    prepare_data_dump(data, options)
    {
        if (options.flm_keep_fragment_instances) {
            return data;
        }
        // remove object pointers in relations, to avoid cyclic references, and
        // instead list all relations separately.

        throw new Error(`Operation not supported!`);
    }

}
