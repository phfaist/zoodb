import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.llmcontent');

import { ZooDbProcessorBase } from './base.js';

import { getfield } from '../util/getfield.js';
import { iter_object_fields_recursive } from '../util/objectinspector.js';
import { ZooLLMResourceInfo, $$kw, LLMDataDumper, LLMFragment } from '../zoollm/index.js';


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

        let promises = [];
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

    compile_llm( llm_content, { object_type, llm_options, object, fieldname } )
    {
        if (llm_content instanceof LLMFragment) {
            // it's already compiled!
            return llm_content;
        }

        const object_id = object._zoodb.id;
        const source_file_path = object._zoodb.source_file_path;

        const resource_info = new ZooLLMResourceInfo(
            object_type,
            object_id,
            source_file_path,
        );

        const what = resource_info.toString();

        llm_content = llm_content || '';

        let fragment = null;
        try {
            fragment = this.config.llm_environment.make_fragment(
                llm_content,
                $$kw({
                    standalone_mode: llm_options.standalone,
                    resource_info: resource_info,
                    what: what,
                })
            );
        } catch (err) {
            console.error(
                `Error while compiling LLM content for ${resource_info} `
                + `— field ‘${fieldname}’: ` + err
            );
            throw err;
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

    compile_object(object_type, objid, obj, schema)
    {
        obj._zoodb.llm_fields = [];

        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index, llm_options}
             of this._iter_llm_fields(obj, schema)) {

            // debug(
            //     `Compiling ${object_type} ${objid}'s LLM field ${fieldname}: `
            //     + `‘${fieldvalue}’`
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

}
