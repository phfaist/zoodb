import debug_module from 'debug';
const debug = debug_module('zoodb.search.searchindex');

import lunr from 'lunr';

import { iter_schema_fields_recursive, iter_object_fields_recursive }
    from '../util/objectinspector.js';


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
        if (fieldschema._zoo_search && fieldschema._zoo_search.skip_index) {
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
            doc[k] = v;
        }
    }
    return doc;
};





export class SearchIndex
{
    static build(zoodb, options)
    {
        debug(`setting up search index`);

        //
        // inspect the zoodb to extract fields.
        //
        let fields_set = new Set();
        for (const [object_type, schema] of Object.entries(zoodb.schemas)) {
            const titlefield = schema._zoo_titlefield ?? 'name';
            for (const { fieldname, fieldschema }
                 of iter_schema_fields_recursive(schema, _iterfieldsopts)) {
                if (fieldname === schema._zoo_primarykey
                    || fieldname === titlefield) {
                    // already got this one as 'id' or 'name'
                    continue;
                }
                fields_set.add(fieldname);
            }
        }
        const fields = Array.from(fields_set).sort();
        debug(`search index fields: ${fields.join(',')}`);

        const field_name_id = options.field_name_id ?? 'id';
        const field_name_title = options.field_name_title ?? 'title';
        // insert these field names at beginning of the fields array
        fields.splice(0, 0,  field_name_id, field_name_title);

        let fields_options = options.fields_options ?? {}
        fields_options.boost = Object.assign({ [field_name_title]: 40, }, fields_options.boost);

        const info = {
            fields,
            fields_options,
            field_name_id,
            field_name_title,
        };

        const resolve_object_href = options.resolve_object_href ??
              ((object_type, object_id) => null);

        // const convert_field_to_text =
        //       options.convert_field_to_text ?? ((x) => x.toString())
        // ;
        const assemble_doc_text_values =
              options.assemble_doc_text_values ?? default_assemble_doc_text_values;

        //
        // create the store of all documents
        //
        debug(`creating text data store ...`);
        let store = {};
        let counter = 1;
        for (const [object_type, object_db] of Object.entries(zoodb.objects)) {
            const schema = zoodb.schema(object_type);
            const titlefield = schema._zoo_titlefield ?? 'name';
            for (const [object_id, object] of Object.entries(object_db)) {
                // create the search-index document to add to the LUNR index
                let doc_values = [
                    ['_z_id', counter],
                    ['_z_otype', object_type],
                    [field_name_id, object_id], // object ID field gets named 'id'
                    [field_name_title, object[ titlefield ]], // same with name -> 'title'
                ];
                ++counter;
                const href = resolve_object_href(object_id, object);
                if (href != null) {
                    doc_values.push([_z_href, href]);
                }
                for (let { fieldname, fieldvalue }
                     of iter_object_fields_recursive(object, schema, _iterfieldsopts)) {
                    if (!fields_set.has(fieldname)) {
                        // skip any fields not included in the index (e.g.,
                        // auto-populated fields)
                        continue;
                    }
                    if (fieldvalue != null) {
                        //debug(`search index doc: field ${fieldname}, value =`, fieldvalue);
                        doc_values.push([fieldname, fieldvalue]);
                    }
                }
                // convert any special fields to text (eg. for LLM)
                const doc = assemble_doc_text_values(doc_values);
                
                //debug(`SearchIndex: crafted doc =`, doc);

                store[doc._z_id] = doc;
            }
        }

        //
        // build the index!
        //
        debug(`building the index ...`);
        const idx = lunr( function () {
            //
            // Function will build the index. Lunr's API is accessed via 'this'
            // (aliased to 'obj' here).
            //
            let obj = this;

            obj.ref('_z_id');
            obj.field('_z_otype');
            obj.field('_z_href');
            // these are included in info.fields
            // obj.field(this.field_name_id);
            // obj.field(this.field_name_title);
            for (const fldname of info.fields) {
                const { boost } = info.fields_options[fldname] ?? {};
                if (boost != null) {
                    obj.field(fldname, {boost: boost});
                } else {
                    obj.field(fldname);
                }
            }
            obj.metadataWhitelist = [ 'position' ];
            
            for (const doc of Object.values(store)) {
                //debug(`Adding doc =`, doc);
                obj.add(doc);
            }

        } );
        debug(`... done.`);

        return new SearchIndex(info, store, idx);
    }

    static load(index_data)
    {
        const idx = lunr.Index.load(index_data.serialized_index);
        return new SearchIndex(index_data.info, index_data.store, idx);
    }

    toJSON()
    {
        return {
            info: this.info,
            store: this.store,
            serialized_index: this.idx.toJSON(),
        };
    }


    // you shouldn't have to use this directly
    constructor(info, store, idx)
    {
        this.info = info;
        this.store = store;
        this.idx = idx;
    }

};
