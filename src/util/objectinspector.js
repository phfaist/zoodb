
// Provide some easy functions to introspect an object with a given schema.
// E.g., iterate over all fields recursively.


export function * iter_object_fields_recursive(obj, schema, options, fieldname=undefined)
{
    const prependfieldname =
          (propname) => (fieldname ? (fieldname + '.' + propname) : propname);

    if (schema === false) {
        throw new Error(`Invalid object ‘${obj}${fieldname?('.'+fieldname):''}’ with `
                        + `schema ‘false’`);
    }
    if (typeof schema !== 'object') {
        throw new Error(`Expected schema of object type, got ‘${JSON.stringify(schema)}’`);
    }
    if (schema.type == 'object') {
        // if (schema.additionalProperties !== false) {
        //     throw new Error(`iter_fields_recursive (${obj}): `
        //                     + `additionalProperties!=false not supported`);
        // }
        for (const propname of obj) {
            const propschema =
                  (schema.properties||{})[propname] || schema.additionalProperties;
            const propvalue = obj[propname];
            yield * iter_object_fields_recursive(
                propvalue, propschema, options, prependfieldname(propname)
            );
        }
    } else if (this.schema.type == 'array') {
        for (let i = 0; i < obj.length; ++i) {
            yield * iter_object_fields_recursive(
                value[i], fieldschema, options, prependfieldname(i)
            );
        }
    } else {
        yield {fieldname: fieldname,
               fieldvalue: obj,
               fieldschema: schema};
    }
}
