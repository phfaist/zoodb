import _zoologger from '../_zoologger.js';
let logger = _zoologger.child({module:'zoodb.dbprocessors.relations'});


function get_field_schema(schema, field)
{
    if (typeof schema == 'undefined') {
        throw new Error("get_field_schema(): schema is undefined!");
    }

    const parts = field.split('.');
    const tail_part = parts.pop();
    for (const part of parts) {
        if (schema.type != 'object') {
            throw new Error(`get_field_schema(): cannot access ‘${part}’ of non-object `
                            +`type ‘${schema}’`);
        }
        schema = (schema.properties || {})[part] || {};
    }
    return (schema.properties || {})[tail_part]; // can be undefined
}

function getfield(obj, field)
{
    if (typeof obj == 'undefined') {
        throw new Error("getfield(): obj is undefined!");
    }

    const parts = field.split('.');
    const tail_part = parts.pop();
    for (const part of parts) {
        obj = obj[part] || {};
    }
    return obj[tail_part]; // can be undefined
};
function setfield(obj, field, setterfn)
{
    if (typeof obj == 'undefined') {
        throw new Error("setfield(): obj is undefined!");
    }

    const parts = field.split('.');
    const tail_part = parts.pop();
    for (const part of parts) {
        if (!obj.hasOwnProperty(part)) {
            obj[part] = {};
        }
        obj = obj[part];
    }
    if (!obj.hasOwnProperty(tail_part)) {
        obj[tail_part] = setterfn();
    } else {
        obj[tail_part] = setterfn(obj[tail_part]);
    }
};

function concatlistfield(obj, field, items)
{
    const setterfn = (value) => (value || []).concat(items);
    setfield(obj, field, setterfn);
}



export class RelationsPopulator
{
    constructor(zoodbdata, config)
    {
        this.zoodbdata = zoodbdata;
        this.config = config || {};

        this.config.object_names ||= Object.keys(this.zoodbdata.objects);
    }

    _process_object_relation(objectname, obj, zoo_relation_spec)
    {
        let zoodbdata = this.zoodbdata;
        const {object_field, to_object_type} = zoo_relation_spec;

        if ( !zoodbdata.objects.hasOwnProperty(to_object_type) ) {
            throw new Error(`Invalid _zoo_relation definition in ‘${objectname}’: `
                            +`There is no such object type ‘${to_object_type}’`);
        }

        const field_schema = get_field_schema(zoodbdata.schemas[objectname], object_field);
        if (field_schema.type == 'array') {
            const relation_objs = getfield(obj, object_field) || [];
            relation_objs.forEach(
                (relation_object) => {
                    this._process_single_relation(objectname, obj, relation_object,
                                                  zoo_relation_spec);
                }
            );
        } else {
            const relation_object = getfield(obj, object_field);
            process_single_relation(objectname, obj, relation_object, zoo_relation_spec);
        }
    }

    _process_single_relation(objectname, obj, relation_object, zoo_relation_spec)
    {
        let zoodbdata = this.zoodbdata;
        const object_names = this.config.object_names;

        const {object_field,
               to_object_type,
               relation_add_object_field,
               relation_primary_key_field,
               backreference} = zoo_relation_spec;

        const target_obj_id = relation_object[relation_primary_key_field];

        if ( !zoodbdata.objects[to_object_type].hasOwnProperty( target_obj_id ) ) {
            throw new Error(
                `In ${objectname} object ‘${obj._zoodb.id}’ `
                + `(‘${obj._zodb.source_file_path}’): Invalid reference in ‘${object_field}’ `
                + `to ${to_object_type} object with nonexistent ID ‘${target_obj_id}’`
            );
        }

        const target_object = zoodbdata.objects[to_object_type][target_obj_id];
        
        let rel_object_nopkobjfld =
            Object.fromEntries( Object.entries(relation_object).filter(  (ropair) => {
                const [relobjkey, relobjval] = ropair;
                return relobjkey != relation_primary_key_field;
            } ) );
        
        if (relation_add_object_field) {
            relation_object[relation_add_object_field] = target_object;
        }

        if (backreference && object_names.includes(to_object_type)) {

            const backref_object = Object.assign({}, rel_object_nopkobjfld);

            const backref_relation_primary_key_field =
                  backreference.relation_primary_key_field || (objectname + '_id');
            backref_object[backref_relation_primary_key_field] = obj._zoodb.id;

            const backref_relation_object_field =
                  backreference.relation_object_field || objectname;
            backref_object[backref_relation_object_field] = obj;

            const backref_field = backreference.field;
            if (!backref_field) {
                throw new Error(`Invalid field: in backreference: in relation object `
                                +`in ${objectname}`)
            }

            concatlistfield(target_object, backref_field, [ backref_object ]);

        }
    };


    populate_relations()
    {
        let zoodbdata = this.zoodbdata;
        const object_names = this.config.object_names;

        // explore all objects and populate relations
        object_names.forEach(
            (objectname) => {

                logger.debug(`Processing relations for ${objectname} object relations`);

                let objectsdict = zoodbdata.objects[objectname];
                
                const schema_zoo_relations = zoodbdata.schemas[objectname]._zoo_relations || [];
                if (!schema_zoo_relations) {
                    return;
                }

                // logger.debug(`Processing ${objectname}'s relations: `
                //              +`${JSON.stringify(schema_zoo_relations)}`);

                Object.values(objectsdict).forEach(
                    (obj) => {
                        schema_zoo_relations.forEach(
                            (zoo_relation_spec) => {
                                this._process_object_relation(objectname, obj,
                                                              zoo_relation_spec,);
                            }
                        );
                    }
                );
            }
        );
    };

};

