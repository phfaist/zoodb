
// Provide some easy functions to introspect an object with a given schema.
// E.g., iterate over all fields recursively.


function default_propfieldname(fieldname, propname)
{
    return (fieldname ? (fieldname + '.' + propname) : propname);
}
function default_arrayitemfieldname(fieldname, i='[]')
{
    return (fieldname ? (fieldname + '.' + i) : i);
}

/**
 * For each field specified by the schema (recursively), this method yields the
 * value of that field for `obj` along with field information.
 *
 * E.g.:
 * ```js
 * for (const {fieldname, fieldvalue, fieldschema}
 *      of iter_object_fields_recursive(obj, schema)) {
 *   ...
 * }
 * for (const {fieldname, fieldvalue, fieldschema, parent, parent_index}
 *      of iter_object_fields_recursive(obj, schema, {provide_parent: true})) {
 *   ...
 *   // the object's field value can be changed with:
 *   parent[parent_index] = new_value;
 * }
 *
 *
 */
export function * iter_object_fields_recursive(obj, schema, options, fieldname=undefined)
{
    options ??= {};
    const propfieldname = options.propfieldname ?? default_propfieldname;
    const arrayitemfieldname = options.arrayitemfieldname ?? default_arrayitemfieldname;
    const only_schema_properties = options.only_schema_properties ?? true;

    if (obj === undefined) {
        return; // no fields to expore or yield
    }

    if (schema === false) {
        throw new Error(`Invalid object ‘${obj??''}${fieldname?('.'+fieldname):''}’ with `
                        + `schema ‘false’`);
    }
    if (typeof schema !== 'object') {
        throw new Error(`Expected schema of object type, got ‘${JSON.stringify(schema)}’`);
    }

    if (fieldname !== undefined && options.visit_predicate != null &&
        !options.visit_predicate({fieldname, fieldschema: schema, fieldvalue: obj})) {
        return;
    }

    if (schema.type == 'object') {
        const keys =
              only_schema_properties ? Object.keys(schema.properties) : Object.keys(obj) ;
        for (const propname of keys) {
            const propschema =
                  (schema.properties??{})[propname] ?? schema.additionalProperties;
            const propvalue = obj[propname];

            let iter = iter_object_fields_recursive(
                propvalue, propschema, options, propfieldname(fieldname, propname)
            );

            if (options.provide_parent) {
                for ( const d of iter ) {
                    // with Object.assign with arguments in this order we make sure
                    // that only the deepest parent/parent_index are kept
                    yield Object.assign({ parent: obj, parent_index: propname }, d);
                }
            } else {
                // yield directly from iter
                yield * iter;
            }
        }
    } else if (schema.type == 'array') {
        for (let i = 0; i < obj.length; ++i) {
            let iter = iter_object_fields_recursive(
                obj[i], schema.items ?? {}, options, arrayitemfieldname(fieldname, i)
            );
            if (options.provide_parent) {
                for ( const d of iter ) {
                    // with Object.assign with arguments in this order we make sure
                    // that only the deepest parent/parent_index are kept
                    yield Object.assign({ parent: obj, parent_index: i }, d);
                }
            } else {
                // yield directly from iter
                yield * iter;
            }
        }
    } else {
        yield {fieldname: fieldname,
               fieldvalue: obj,
               fieldschema: schema};
    }
}


export function * iter_schema_fields_recursive(schema, options, fieldname=undefined)
{
    options ??= {};
    const propfieldname = options.propfieldname ?? default_propfieldname;
    const arrayitemfieldname = options.arrayitemfieldname ?? default_arrayitemfieldname;

    if (typeof schema !== 'object') {
        throw new Error(`Expected schema of object type, got ‘${JSON.stringify(schema)}’`);
    }

    if (fieldname !== undefined && options.visit_predicate != null &&
        !options.visit_predicate({fieldname, fieldschema: schema})) {
        return;
    }

    if (schema.type == 'object') {

        for (const [propname, propschema] of Object.entries(schema.properties)) {
            yield * iter_schema_fields_recursive(
                propschema, options, propfieldname(fieldname, propname)
            );
        }

    } else if (schema.type == 'array') {

        yield * iter_schema_fields_recursive(
            schema.items ?? {}, options, arrayitemfieldname(fieldname)
        );

    } else {

        yield {fieldname: fieldname,
               fieldschema: schema};

    }
}
