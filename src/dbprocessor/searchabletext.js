import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.searchabletext');

import { ZooDbProcessorBase } from './base.js';

import { getfield } from '../util/getfield.js';
import { iter_schema_fields_recursive, iter_object_fields_recursive } from '../util/objectinspector.js';



const _iterfieldsopts = {

    propfieldname(fieldname, propname) {
        // e.g. "features_rate"
        return (fieldname ? (fieldname + '_' + propname) : propname);
    },

    arrayitemfieldname(fieldname, i) {
        // don't keep array indices or '[]', flatten them out
        return fieldname ?? '';
    },

    visit_predicate({fieldname, fieldschema, fieldvalue}) {
        // skip fields that are computed from other field (e.g.,
        // resolved references to code objects)
        if (fieldschema._auto_populated) {
            return false;
        }
        if (fieldschema._zoo_search && !(fieldschema._zoo_search.include_in_index ?? true)) {
            return false;
        }
        // skip "private" fields like "_meta"
        if (fieldname.startsWith('_')) {
            return false;
        }
        return true;
    }
};


function default_assemble_doc_text_values(doc_values) {
    let doc = {}
    for (const [k, v] of doc_values) {
        if (k in doc) {
            doc[k] += '\n' + v;
        } else {
            doc[k] = '' + v;
        }
    }
    return doc;
};



function searchable_field_name(fieldname, fieldschema)
{
    //debug(`fieldname = `, fieldname, `; fieldschema = `, fieldschema);
    if (!fieldschema._zoo_searchable) {
        return fieldname;
    }
    if (fieldschema._zoo_searchable.field_name != null) { // not null or undefined
        return fieldschema._zoo_searchable.field_name;
    }
    return fieldname;
}



// -----------------------------------------------------------------------------


export class SearchableTextFieldset
{
    constructor(config)
    {
        this.config = Object.assign({}, config ?? {});

        this.field_name_id = this.config.field_name_id ?? 'id';
        this.field_name_title = this.config.field_name_title ?? 'title';

        this.assemble_doc_text_values =
            this.config.assemble_doc_text_values ?? default_assemble_doc_text_values;

        // the searchable fieldset name is used e.g. to decide which property of
        // the objects' _zoodb field to set; by default it's
        // "object._zoodb.searchable_text_doc".
        this.searchable_text_fieldset_name =
            this.config.searchable_text_fieldset_name ?? 'searchable_text_doc';

        // will be computed automatically in initialize() if applicable
        this.object_types = this.config.object_types ?? null;

        this.exclude_fields = new Set(this.config.exclude_fields ?? []);


        //
        // The following fields will be set in initialize().
        //

        // - `fields_set` is a set; it does not include '_z_otype', [id],
        //   [name/title] fields.
        //
        // - `fields` is an array; it includes [id] and [name/title] fields but
        //   not '_z_otype'
        this.fields_set = null;
        this.fields = null;
    }

    initialize(zoodb)
    {
        const config = this.config;

        if (this.object_types == null) {
            this.object_types = Object.keys(zoodb.schemas);
        }

        //
        // fields the zoodb to extract fields.
        //
        let fields_set = new Set();
        for (const object_type of this.object_types) {
            const schema = zoodb.schema(object_type);
            const titlefield = schema._zoo_titlefield ?? 'name';
            for (let {fieldname, fieldschema}
                 of iter_schema_fields_recursive(schema, _iterfieldsopts)) {

                const s_fieldname = searchable_field_name(fieldname, fieldschema);

                if (s_fieldname === schema._zoo_primarykey || s_fieldname === titlefield) {
                    // already got this one as 'id' or 'name'
                    continue;
                }
                if (this.exclude_fields.has(s_fieldname)) {
                    continue;
                }

                fields_set.add(s_fieldname);
            }
        }
        const fields = Array.from(fields_set).sort();

        // insert ID and NAME/TITLE field names at beginning of the fields array
        fields.splice(0, 0,  this.field_name_id, this.field_name_title);

        debug(`all searchable fields: ${fields.join(',')}`);

        this.fields_set = fields_set;
        this.fields = fields;
    }

    get_object_searchable_text_doc({object_type, object_id, object, schema, titlefield})
    {
        const config = this.config;
        
        // create the search-index document to add to the LUNR index
        let doc_values = [
            ['_z_otype', object_type],
            [this.field_name_id, object_id], // object ID field gets named 'id'
            [this.field_name_title, object[ titlefield ]], // same with name -> 'title'
        ];
        for (let { fieldname, fieldvalue, fieldschema }
             of iter_object_fields_recursive(object, schema, _iterfieldsopts)) {

            let s_fieldname = searchable_field_name(fieldname, fieldschema);

            // skip any fields not included in the index (e.g.,
            // auto-populated fields or fields that were manually
            // excluded from index)
            if (!this.fields_set.has(fieldname)) {
                continue;
            }

            if (fieldvalue != null) {
                //debug(`search index doc: field ${fieldname}, value =`, fieldvalue);
                doc_values.push([fieldname, fieldvalue]);
            }
        }

        // convert any special fields to text with a user-defined function
        // (eg. for LLM).  Also combine array fields into a single string.
        const doc = this.assemble_doc_text_values(doc_values);
                
        //debug(`crafted searchable doc =`, doc);

        return doc;
    }
}



/**
 *
 */
export class SearchableTextProcessor extends ZooDbProcessorBase
{
    constructor(searchable_text_fieldset, options = {})
    {
        super();

        this.searchable_text_fieldset = searchable_text_fieldset;
    }

    initialize_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }

        this.searchable_text_fieldset.initialize(this.zoodb);
    }

    process_zoo()
    {
        for (const object_type of this.searchable_text_fieldset.object_types) {
            const thistype_objects_db = this.zoodb.objects[object_type];
            if (thistype_objects_db !== undefined) {
                this._process_objects_db(object_type, thistype_objects_db);
            }
        }
    }

    prepare_zoo_update_objects(db_objects)
    {
    }

    process_zoo_update_objects(db_objects)
    {
        for (const object_type of this.searchable_text_fieldset.object_types) {
            const thistype_objects_db = db_objects[object_type];
            if (thistype_objects_db !== undefined) {
                this._process_objects_db(object_type, thistype_objects_db);
            }
        }
    }

    //
    // process the fields of given objects and make a textual representation
    //

    _process_objects_db(object_type, objects_db)
    {
        const searchable_text_fieldset = this.searchable_text_fieldset;

        const schema = this.zoodb.schema(object_type);
        const titlefield = schema._zoo_titlefield ?? 'name';
        
        for (const [object_id, object] of Object.entries(objects_db)) {

            const searchable_text_doc =
                  searchable_text_fieldset.get_object_searchable_text_doc(
                      {object_type, object_id, object, schema, titlefield}
                  )
            ;

            object._zoodb[searchable_text_fieldset.searchable_text_fieldset_name] =
                searchable_text_doc;
        }
    }

};




