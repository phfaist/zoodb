import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.relations');

import {getfield, setfield, iterfield, concatlistfield, get_field_schema}
    from '../util/getfield.js';

import { ZooDbProcessorBase } from './base.js';

// -----------------------------------------------

/**
 * An instance of a relation in the database.
 *
 * @param object_type - The type of the object from which the relation is
 *     originating
 *
 * @param relation_spec - The *relation specification object* containing
 *    information about how this relation works (other object types,
 *    one-to-many, many-to-many, backreferences, etc.).  This is the content of
 *    the items of the `_zoo_relations:` field in the object schema (see
 *    :ref:`object-schemas` and see above).
 *
 * @param zoodb - The ZooDb instance where to look for other objects being
 *    referenced.
 */
export class ZooRelation
{
    constructor({object_type, relation_spec, zoodb})
    {
        this.object_type = object_type;
        this.relation_spec = relation_spec;

        this.zoodb = zoodb;

        this.object_field = relation_spec.object_field;
        this.to_object_type = relation_spec.to_object_type;

        // allow_null is used both for allowing the value of the
        // target_object_id relation object field to be null but also for the
        // relation object itself to be null or undefined.
        this.allow_null = relation_spec.allow_null ?? false;

        // TODO -- Option not to link to the actual object to avoid making the
        // data structure too complicated when not needed; e.g. for spaces where
        // we only specify space_id w/o actually populating in the space object
        // which doesn't contain any interesting info by itself
        //
        //this.check_valid_ref_only = relation_spec.check_valid_ref_only ?? false;

        this.relation_add_object_field = relation_spec.relation_add_object_field;
        this.relation_primary_key_field = relation_spec.relation_primary_key_field;

        // 'true' is a special value indicates that the relation object is
        // itself the target ID, not an object containing a key with the primary
        // ID
        this.value_is_shorthand_object_id = (this.relation_primary_key_field === true);

        const backreference = this.relation_spec.backreference;
        if (backreference) {
            this.use_backreference = true;
            this.backref_relation_primary_key_field =
                backreference.relation_primary_key_field ?? (this.object_type + '_id');
            this.backref_relation_object_field =
                backreference.relation_object_field ?? this.object_type;
            this.backref_field = backreference.field;
        } else {
            this.use_backreference = false;
        }

        if ( !Object.hasOwn(this.zoodb.objects, this.to_object_type) ) {
            throw new Error(`Invalid _zoo_relation definition in ‘${this.object_type}’: `
                            + `There is no such object type ‘${this.to_object_type}’`);
        }

        const relation_field_schema =
              get_field_schema(this.zoodb.schema(this.object_type), this.object_field);
        if (relation_field_schema == null) {
            throw new Error(
                `Invalid field ‘${this.object_field}’ in ‘${this.object_type}’ object `
                + `(in relation to ‘${this.to_object_type}’)`
            );
        }
        if (relation_field_schema.type === 'array') {
            this.source_has_multiple_relations = true;
            this.fully_specified_relation_add_object_field =
                this.object_field + '.[].' + this.relation_add_object_field;
        } else {
            this.source_has_multiple_relations = false;
            this.fully_specified_relation_add_object_field =
                this.object_field + '.' + this.relation_add_object_field;
        }
    }

    /** Return information about which fields of which object will be set as a
     * consequence of processing this relation object.
     *
     * Return a dictionary where keys are object types, and values are a
     * dictionary ``{ fieldname, msg, }``, where `fieldname` is the name of a
     * field of that object type that will be set automatically by this relation
     * instance and `msg` is an error message that you can display if the user
     * accidentally set that field instead of letting it be set automatically.
     *
     */
    get_computed_fields()
    {
        let computed_fields = {}
        computed_fields[this.object_type] = [
            { fieldname: this.fully_specified_relation_add_object_field,
              msg: `You are only expected to set ‘${this.relation_primary_key_field}’.`},
        ];

        // backreferences too
        if (this.use_backreference) {
            computed_fields[this.to_object_type] =
                ( computed_fields[this.to_object_type] ?? [] ).concat([
                    { fieldname: this.backref_field,
                      msg: `This field will be determined automatically.` }
                ]);
        }

        return computed_fields;
    }

    get_object_relation_objects(obj)
    {
        const stuff = getfield(obj, this.object_field);
        if (this.source_has_multiple_relations) {
            if (stuff && stuff.length) {
                return stuff;
            }
            return [];
        } else {
            if (!stuff) {
                if (!this.allow_null) {
                    throw new Error(
                        `Object ${this.object_type} ${obj._zoodb.id}: Relation object data `
                        + `is invalid (it might be null or undefined).  We expected a single `
                        + `target object relation because the field ‘${this.object_field}’ `
                        + `isn't of type array.  If it's a shorthand id field and it can be `
                        + `null, the relation specification's ‘allow_null’ must be set.`
                    );
                }
                return [];
            }
            return [ stuff ];
        }
    }

    process_object_relation(obj, options)
    {
        for (const relation_object of this.get_object_relation_objects(obj)) {
            this._process_single_relation(obj, relation_object, options);
        }
    }

    _process_single_relation(obj, relation_object, options)
    {
        let zoodb = this.zoodb;
        const { process_object_types } = options;

        let target_obj_id = null;
        if (this.value_is_shorthand_object_id) {
            target_obj_id = relation_object;
        } else {
            if (!relation_object) {
                throw new Error(
                    `Object ${this.object_type} ${obj._zoodb.id}: Relation object data `
                    + `is invalid (it might be null or undefined).`
                );
            }
            target_obj_id = relation_object[this.relation_primary_key_field];
        }

        if (target_obj_id == null && !this.allow_null) {
            throw new Error(
                `Target object ID in reference cannot be null in `
                + `${this.object_type} ‘${obj._zoodb?.id}’ .${this.object_field}: `
                + ` ${JSON.stringify(relation_object)}`
            );
        }

        let target_object = null;
        if (target_obj_id != null) {
            target_object = zoodb.objects[this.to_object_type][target_obj_id] ?? null;
        }
        
        if ( target_obj_id != null && target_object == null ) {
            throw new Error(
                `In ${this.object_type} object ‘${obj._zoodb.id}’ `
                + `(‘${obj._zoodb.source_file_path}’): Invalid reference in `
                + ` ‘${this.object_field}’ `
                + `to ${this.to_object_type} object with nonexistent ID ‘${target_obj_id}’`
            );
        }

        let rel_object_copy_nopkfld = null;
        if (this.value_is_shorthand_object_id) {
            rel_object_copy_nopkfld = {
                [this.to_object_type + '_id']: relation_object,
            };
        } else {
            rel_object_copy_nopkfld = Object.fromEntries(
                Object.entries(relation_object).filter(
                    ([relobjkey, /*relobjval*/]) =>
                        (relobjkey != this.relation_primary_key_field)
                )
            );
        }
        
        if (this.relation_add_object_field != null) {
            relation_object[this.relation_add_object_field] = target_object;
        }

        //debug('relations: Set relation object', {obj, relation_object, target_object});

        if (this.use_backreference
            && (process_object_types == null
                || process_object_types.includes(this.to_object_type))
            && target_object != null) {

            const backref_object = Object.assign({}, rel_object_copy_nopkfld);

            backref_object[this.backref_relation_primary_key_field] = obj._zoodb.id;

            backref_object[this.backref_relation_object_field] = obj;

            if (!this.backref_field) {
                throw new Error(`Invalid field: in backreference: in relation object `
                                +`in ${this.object_type}`);
            }

            //debug('relations: Adding backreference',
            //      {target_object, backref_object, backref_field: this.backref_field});

            concatlistfield(target_object, this.backref_field, [ backref_object ]);

        }
    }

}




// -----------------------------------------------


/**
 * A database processor that turns relevant object fields into references to
 * other objects, and possibly adds back-references, according to relations
 * specified in the object type's schema.
 */
export class RelationsPopulator extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();

        this.config = config ?? {};
        this.relations = null;
    }

    initialize_zoo()
    {
        this.config.object_types ??= this.zoodb.object_types;

        // get all the relation objects.
        this.relations = Object.fromEntries(
            this.config.object_types.map( (object_type) => {
                const rels = (this.zoodb.schema(object_type)._zoo_relations ?? []).map(
                    (relation_spec) =>
                        new ZooRelation({object_type, relation_spec, zoodb: this.zoodb})
                );
                return [object_type, rels];
            } )
        );

        this.check_all_clean_fields();
    }


    process_zoo()
    {
        let zoodb = this.zoodb;

        // let's clear all of our relation fields so we can re-build them all
        this.clear_all_relation_fields();

        const object_types = this.config.object_types;

        if (!this.relations) {
            return;
        }

        const process_options = {
            process_object_types: this.config.object_types
        };

        // explore all objects and populate relations
        for (const object_type of object_types) {

            debug(`Processing relations for ${object_type} object relations`);

            if (!this.relations[object_type]) {
                return;
            }

            //
            // now we populate the relations in all objects of this type
            //

            let objectsdict = zoodb.objects[object_type];
            
            // debug(`Processing ${object_type}'s relations: `
            //              +`${JSON.stringify(schema_zoo_relations)}`);

            for (const obj of Object.values(objectsdict)) {
                for (const relation of this.relations[object_type]) {
                    relation.process_object_relation(obj, process_options);
                }
            }
        }
    }

    // If we're going to update objects, then we clear everything and rebuild
    // all relations.
    prepare_zoo_update_objects(/*db_objects*/)
    {
        this.clear_all_relation_fields();
    }


    // ---

    clear_all_relation_fields({ dbobjects } = {})
    {
        const clear_field =
              ({object, fieldnameidx,}) => {
                  setfield(object, fieldnameidx, {
                      set_object_attribute_fn: (parent_object, fieldname) => {
                          delete parent_object[fieldname];
                      }
                  });
              };
        this.check_all_clean_fields({ action: clear_field, dbobjects });
    }

    check_all_clean_fields({ action, dbobjects } = {})
    {
        dbobjects ??= this.zoodb.objects;

        if (action == null) { // null or undefined
            action = ({object_type, /*object,*/ computed_relation_fieldinfo,
                       fieldnameidx, value}) => {
                throw new Error(
                    `${object_type} object's ‘${fieldnameidx}’ `
                    + `field should not be specified manually (got ${JSON.stringify(value)}). `
                    + computed_relation_fieldinfo.msg
                );
            };
        }

        const all_relations_computed_fields = {};

        for (const [/*object_type*/, relations] of Object.entries(this.relations)) {
            for (const relation of relations) {
                const computed_fields = relation.get_computed_fields();
                for (const [fld_object_type, fld_infos] of Object.entries(computed_fields)) {
                    all_relations_computed_fields[fld_object_type] =
                        ( all_relations_computed_fields[fld_object_type] ?? [] )
                        .concat( fld_infos );
                }
            }
        }
        
        for (const [object_type, ofields] of Object.entries(all_relations_computed_fields)) {
            for (const object of Object.values(dbobjects[object_type])) {

                for (const computed_relation_fieldinfo of ofields) {
                    const { fieldname } = computed_relation_fieldinfo;

                    for (const { value, fieldnameidx } of iterfield(object, fieldname)) {

                        if (value !== undefined) {
                            action({ object_type, object,
                                     computed_relation_fieldinfo, fieldnameidx,
                                     value });
                        }
                    }
                }
            }
        }
    }



    // ---
    process_data_dump(data, options)
    {
        let {
            relations_keep_object_property_pointers
        } = options;

        relations_keep_object_property_pointers ??= false;


        if (relations_keep_object_property_pointers) {
            return data;
        }

        // remove object pointers in relations (to avoid cyclic references)

        debug(`About to clear all relation fields in objects `, data.db.objects);
        this.clear_all_relation_fields({ dbobjects: data.db.objects });
        debug(`Cleared all relation fields in objects -> `, data.db.objects);

        return data;
    }

}

