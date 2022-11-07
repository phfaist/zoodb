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
            doc[k] = v;
        }
    }
    return doc;
};





export class SearchIndex
{
    static create(zoodb, options)
    {
        debug(`setting up search index`);

        let object_types = options.object_types ?? Object.keys(zoodb.schemas);

        let exclude_fields = new Set(options.exclude_fields ?? []);

        //
        // fields the zoodb to extract fields.
        //
        let fields_set = new Set();
        for (const object_type of object_types) {
            const schema = zoodb.schema(object_type);
            const titlefield = schema._zoo_titlefield ?? 'name';
            for (let { fieldname, fieldschema }
                 of iter_schema_fields_recursive(schema, _iterfieldsopts)) {

                if (fieldname === schema._zoo_primarykey || fieldname === titlefield) {
                    // already got this one as 'id' or 'name'
                    if (fieldschema._zoo_search && fieldschema._zoo_search.field_name) {
                        console.warn(
                            `WARNING: Ignoring custom field name `
                            + `‘${fieldschema._zoo_search.field_name}’ in ${object_type}:`
                            + `${fieldname} because it is a special field (id or name/title)`
                        );
                    }
                    continue;
                }
                if (exclude_fields.has(fieldname)) {
                    continue;
                }
                //debug(`fieldname = `, fieldname, `; fieldschema = `, fieldschema);
                if (fieldschema._zoo_search &&
                    fieldschema._zoo_search.field_name != null) {
                    fieldname = fieldschema._zoo_search.field_name;
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
            object_types,
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
        let store = [];
        for (const object_type of object_types) {
            const object_db = zoodb.objects[object_type];
            const schema = zoodb.schema(object_type);
            const titlefield = schema._zoo_titlefield ?? 'name';
            for (const [object_id, object] of Object.entries(object_db)) {
                // create the search-index document to add to the LUNR index
                let doc_values = [
                    ['_z_stid', store.length],
                    ['_z_otype', object_type],
                    [field_name_id, object_id], // object ID field gets named 'id'
                    [field_name_title, object[ titlefield ]], // same with name -> 'title'
                ];
                const href = resolve_object_href(object_id, object);
                if (href != null) {
                    doc_values.push(['_z_href', href]);
                }
                for (let { fieldname, fieldvalue, fieldschema }
                     of iter_object_fields_recursive(object, schema, _iterfieldsopts)) {

                    // honor field name aliases
                    if (fieldschema._zoo_search != null &&
                        fieldschema._zoo_search.field_name != null) {
                        fieldname = fieldschema._zoo_search.field_name;
                    }

                    // skip any fields not included in the index (e.g.,
                    // auto-populated fields or fields that were manually
                    // excluded from index)
                    if (!fields_set.has(fieldname)) {
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

                store.push(doc);
            }
        }
        debug(`... done.`);

        return new SearchIndex(info, store, null);
    }

    build()
    {
        let info = this.info;
        let store = this.store;

        //
        // build the index!
        //
        debug(`building the index ...`);
        this.idx = lunr( function () {
            //
            // Function will build the index. Lunr's API is accessed via 'this'
            // (aliased to 'obj' here).
            //
            let obj = this;

            obj.ref('_z_stid');
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
            
            for (const doc of store) {
                //debug(`Adding doc =`, doc);
                obj.add(doc);
            }

        } );
        debug(`... done.`);
    }

    static load(search_index_data)
    {
        const {info, serialized_store, serialized_index} = search_index_data;

        const store = this._load_store(info, serialized_store);

        if (serialized_index != null) {
            const idx = this._load_idx_notnull(info, serialized_index);
            return new SearchIndex(info, store, idx);
        } else {
            let si = new SearchIndex(info, store, null);
            si.build();
            return si;
        }
    }

    toJSON()
    {
        return {
            info: this.info,
            serialized_store: this._dump_store(),
            serialized_index: this._dump_idx(),
        };
    }


    // you shouldn't have to use this directly
    constructor(info, store, idx)
    {
        this.info = info;
        this.store = store;
        this.idx = idx;
    }


    //
    // internal methods to load/dump index and store.
    //
    _dump_idx()
    {
        if (this.idx == null) {
            return null;
        }
        return this.idx.toJSON();
    }

    static _load_idx_notnull(info, serialized_idx)
    {
        return lunr.Index.load(serialized_index);
    }

    _dump_store()
    {
        // compress the store's representation to save data
        const store_size = this.store.length;
        const storefields = [].concat(['_z_otype', '_z_href'], this.info.fields);
        let serialized_store = Object.fromEntries(
            storefields
            .map( (fldname) => [fldname, new Array(store_size)] )
        );
        for (let j = 0; j < store_size; ++j) {
            const st_doc = this.store[j];
            if (j != st_doc._z_stid) {
                throw new Error(
                    `Internal error: inconsistency of store id: `
                    + `st_id=${st_id}, st_doc=${JSON.stringify(st_doc)}`
                );
            }
            for (const fieldname of storefields) {
                serialized_store[fieldname][j] = st_doc[fieldname];
            }
        }
        serialized_store._z_store_size = store_size;
        return serialized_store;
    }
    static _load_store(info, serialized_store)
    {
        const storefields = [].concat(['_z_otype', '_z_href'], info.fields);
        const store_size = serialized_store._z_store_size;
        let store = new Array(store_size);
        for (let j = 0; j < store_size; ++j) {
            store[j] = Object.fromEntries(
                storefields.map(
                    (fieldname) => [fieldname, serialized_store[fieldname][j]]
                )
            );
            store[j]._z_stid = j;
        }
        return store;
    }

};
