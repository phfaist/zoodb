import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.llmcontent');

import { iter_object_fields_recursive } from '../util/objectinspector.js';
import { ZooLLMResourceInfo, $$kw } from '../zoollm/index.js';


export class LLMContentCompiler
{
    constructor(zoodb, config)
    {
        this.zoodb = zoodb;
        this.config = Object.assign({}, config);

        this.config.object_types ||= this.zoodb.object_types;
        if (!this.config.llm_environment) {
            throw new Error(
                `You need to specify the config field ‘llm_environment’ for `
                + `LLMContentCompiler!`
            );
        }
    }
    
    compile_llm( llm_content, info )
    {
        const { object_type, schema, object, fieldname } = info;
        const object_id = object._zoodb.id;
        const source_file_path = object._zoodb.source_file_path;

        const resource_info = new ZooLLMResourceInfo(
            object_type,
            object_id,
            source_file_path,
        );

        const standalone_mode = (schema._llm == 'standalone');

        const what = resource_info.toString();

        llm_content = llm_content || '';

        try {
            return this.config.llm_environment.make_fragment(
                llm_content,
                $$kw({
                    what: what,
                    standalone_mode: standalone_mode,
                    resource_info: resource_info
                })
            );
        } catch (err) {
            console.error(
                `Error while compiling LLM content for ${resource_info} `
                + `— field ‘${fieldname}’: ` + err
            );
            throw err;
        }
    }

    compile_object(object_type, objid, obj, schema)
    {
        for (const {fieldname, fieldvalue, fieldschema, parent, parent_index}
             of iter_object_fields_recursive(obj, schema, {provide_parent: true})) {
            
            if (fieldschema._llm) {
                // this is an LLM field !

                // debug(
                //     `Compiling ${object_type} ${objid}'s LLM field ${fieldname}: `
                //     + `‘${fieldvalue}’`
                // );

                parent[parent_index] = this.compile_llm(
                    fieldvalue,
                    {
                        object_type: object_type,
                        schema: fieldschema,
                        object: obj,
                        fieldname: fieldname
                    }
                );

            }

        }
    }

    compile_all_zoo()
    {
        let promises = [];
        for (const object_type of this.config.object_types) {
            const schema = this.zoodb.schema(object_type);
            for (const [objid, obj] of Object.entries(this.zoodb.objects[object_type])) {
                this.compile_object(object_type, objid, obj, schema);
            }
        }
    }

}
