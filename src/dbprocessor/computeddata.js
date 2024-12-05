import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.computeddata');

import { ZooDbProcessorBase } from './base.js';


/**
 * A database processor for computing data derived from the database data
 *
 * Configuration options:
 * 
 *  - `config.computed_data`: An object that specifies how to compute
 *    all the relevant computed data for each object type.  ....
 * 
 *  - `config.object_types`: a list of object type names to which the
 *    processing will be applied.  If empty or null, processing is applied
 *    to all object types.
 *
 */
export class ComputedDataProcessor extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();
        this.config = Object.assign({}, config);

        this.computed_data_spec = this.config.computed_data;
    }

    initialize_zoo()
    {
        this.config.object_types ??= this.zoodb.object_types;
        .... need to recompute the computed data ...
    }

    process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }

        for (const object_type of this.config.object_types) {
            //.....
            .... need to recompute the computed data ...
        }
    }

    prepare_zoo_update_objects(db_objects)
    {
        for (const [object_type, objectdb] of Object.entries(db_objects)) {
            // ......
            .... need to recompute the computed data ...
        }
    }


    async process_data_dump(data, options)
    {
        let {
            searchabletext_remove_doc_info
        } = options;

        searchabletext_remove_doc_info ??= true;

        // remove obj._zoodb.searchable_text_doc which takes up too much content
        // volume
        if (searchabletext_remove_doc_info) {
            for (const object_type of this.searchable_text_fieldset.object_types) {
                const objects = data.db.objects[object_type];
                if (!objects || Object.keys(objects).length == 0) {
                    continue;
                }
                for (let [/*obj_id*/, obj] of Object.entries(objects)) {
                    let zoodbinfo = obj._zoodb;
                    delete zoodbinfo.searchable_text_doc;
                }
            }
        }
        
        return data;
    }

    // ----


}
