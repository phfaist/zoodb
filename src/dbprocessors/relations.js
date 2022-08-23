import _zoologger from '../_zoologger.js';
let logger = _zoologger.child({module:'zoodb.dbprocessors.relations'});


import {getfield, setfield, iterfield, concatlistfield, get_field_schema}
    from '../util/getfield.js';

// -----------------------------------------------

class ZooRelation
{
    constructor(object_type, relation_spec, zoodb)
    {
        this.object_type = object_type;
        this.relation_spec = relation_spec;

        this.object_field = relation_spec.object_field;
        this.to_object_type = relation_spec.to_object_type;
        this.relation_add_object_field = relation_spec.relation_add_object_field;
        this.relation_primary_key_field = relation_spec.relation_primary_key_field;

        const backreference = this.relation_spec.backreference;
        if (backreference) {
            this.use_backreference = true;
            this.backref_relation_primary_key_field =
                backreference.relation_primary_key_field || (this.object_type + '_id');
            this.backref_relation_object_field =
                backreference.relation_object_field || this.object_type;
            this.backref_field = backreference.field;
        } else {
            this.use_backreference = false;
        }

        this.zoodb = zoodb;
        
        if ( !this.zoodb.objects.hasOwnProperty(this.to_object_type) ) {
            throw new Error(`Invalid _zoo_relation definition in ‘${this.object_type}’: `
                            + `There is no such object type ‘${this.to_object_type}’`);
        }

        const relation_field_schema =
              get_field_schema(this.zoodb.schema(this.object_type), this.object_field);
        if (relation_field_schema.type == 'array') {
            this.source_has_multiple_relations = true;
            this.fully_specified_relation_add_object_field =
                this.object_field + '.[].' + this.relation_add_object_field;
        } else {
            this.source_has_multiple_relations = false;
            this.fully_specified_relation_add_object_field =
                this.object_field + '.' + this.relation_add_object_field;
        }
    }

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
                ( computed_fields[this.to_object_type] || [] ).concat([
                    { fieldname: this.backref_field,
                      msg: `This field will be determined automatically.` }
                ]);
        }

        return computed_fields;
    }

    get_object_relation_objects(obj)
    {
        if (this.source_has_multiple_relations) {
            return getfield(obj, this.object_field) || [];
        } else {
            return [ getfield(obj, this.object_field) ];
        }
    }

    process_object_relation(obj, options)
    {
        this.get_object_relation_objects(obj).forEach( (relation_object) => {
            this._process_single_relation(obj, relation_object, options);
        } );
    }

    _process_single_relation(obj, relation_object, options)
    {
        let zoodb = this.zoodb;
        const {process_object_types} = options;

        const target_obj_id = relation_object[this.relation_primary_key_field];

        if ( !zoodb.objects[this.to_object_type].hasOwnProperty( target_obj_id ) ) {
            throw new Error(
                `In ${this.object_type} object ‘${obj._zoodb.id}’ `
                + `(‘${obj._zodb.source_file_path}’): Invalid reference in `
                + ` ‘${this.object_field}’ `
                + `to ${this.to_object_type} object with nonexistent ID ‘${target_obj_id}’`
            );
        }

        const target_object = zoodb.objects[this.to_object_type][target_obj_id];
        
        let rel_object_copy_nopkfld =
            Object.fromEntries( Object.entries(relation_object).filter(  (ropair) => {
                const [relobjkey, relobjval] = ropair;
                return relobjkey != this.relation_primary_key_field;
            } ) );
        
        if (this.relation_add_object_field) {
            relation_object[this.relation_add_object_field] = target_object;
        }

        if (this.use_backreference
            && (typeof process_object_types == 'undefined'
                || process_object_types.includes(this.to_object_type))) {

            const backref_object = Object.assign({}, rel_object_copy_nopkfld);

            backref_object[this.backref_relation_primary_key_field] = obj._zoodb.id;

            backref_object[this.backref_relation_object_field] = obj;

            if (!this.backref_field) {
                throw new Error(`Invalid field: in backreference: in relation object `
                                +`in ${this.object_type}`)
            }

            concatlistfield(target_object, this.backref_field, [ backref_object ]);

        }
    }



};




// -----------------------------------------------


export class RelationsPopulator
{
    constructor(zoodb, config)
    {
        this.zoodb = zoodb;
        this.config = config || {};

        this.config.object_types ||= this.zoodb.object_types;

        this.relations = Object.fromEntries(
            this.config.object_types.map( (object_type) => {
                const rels = (this.zoodb.schema(object_type)._zoo_relations || []).map(
                    (relation_spec) =>
                        new ZooRelation(object_type, relation_spec, this.zoodb)
                );
                return [object_type, rels];
            } )
        );
    }

    check_all_clean_fields()
    {
        const all_relations_computed_fields = {};

        Object.entries(this.relations).forEach( (pair) => {
            const [object_type, relations] = pair;
            relations.forEach( (relation) => {
                const computed_fields = relation.get_computed_fields();
                for (const [fld_object_type, fld_infos] of Object.entries(computed_fields)) {
                    all_relations_computed_fields[fld_object_type] =
                        ( all_relations_computed_fields[fld_object_type] || [] )
                        .concat( fld_infos );
                }
            } );
        } );
        
        for (const [otype, ofields] of Object.entries(all_relations_computed_fields)) {
            for (const object of Object.values(this.zoodb.objects[otype])) {

                for (const fldinfo of ofields) {
                    for (const value of iterfield(object, fldinfo.fieldname)) {
                        if (typeof value != 'undefined') {
                            throw new Error(
                                `${otype} object's ‘${fldinfo.fieldname}’ field should not `
                                    + `be specified manually (got ${JSON.stringify(value)}). `
                                    + fldinfo.msg
                            );
                        }
                    }
                }
            }
        }
    }

    populate_relations()
    {
        let zoodb = this.zoodb;
        const object_types = this.config.object_types;

        if (!this.relations) {
            return;
        }

        const process_options = {
            process_object_types: this.config.object_types
        };

        // explore all objects and populate relations
        object_types.forEach(
            (object_type) => {

                logger.debug(`Processing relations for ${object_type} object relations`);

                if (!this.relations[object_type]) {
                    return;
                }

                //
                // now we populate the relations in all objects of this type
                //

                let objectsdict = zoodb.objects[object_type];
                
                // logger.debug(`Processing ${object_type}'s relations: `
                //              +`${JSON.stringify(schema_zoo_relations)}`);

                Object.values(objectsdict).forEach(
                    (obj) => {
                        this.relations[object_type].forEach(
                            (relation) => {
                                relation.process_object_relation(obj, process_options);
                            }
                        );
                    }
                );
            }
        );
    };

};

