
export function get_field_schema(schema, field)
{
    if (typeof schema == 'undefined') {
        throw new Error("get_field_schema(): schema is undefined!");
    }

    const parts = field.split('.');
    const tail_part = parts.pop();
    for (const part of parts) {
        if (part == '[]' && schema.type == 'array') {
            schema = (schema.items || {});
        }
        if (schema.type != 'object') {
            throw new Error(`get_field_schema(): cannot access ‘${part}’ of non-object `
                            +`type ‘${schema}’`);
        }
        schema = (schema.properties || {})[part] || {};
    }
    return (schema.properties || {})[tail_part]; // can be undefined
}


// field can contain xyz.[].zz and [] are arrays that will be iterated over
export function *  iterfield(obj, field)
{
    if (typeof obj == 'undefined') {
        throw new Error("iterfield(): obj is undefined!");
    }

    const parts = field.split('.');
    for (let j = 0; j < parts.length; ++j) {
        const part = parts[j];
        if (part == '[]') {
            for (const objitem of (obj || [])) {
                const restfield = parts.slice(j+1).join('.')
                if (restfield) {
                    yield * iterfield(objitem, restfield);
                } else {
                    yield objitem;
                }
            }
            // & we're done
            return;
        }
        // otherwise, proceed one field down
        obj = (obj || {})[part];
    }
    yield obj;
}


export function getfield(obj, field)
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
export function setfield(obj, field, setterfn)
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

export function concatlistfield(obj, field, items)
{
    const setterfn = (value) => (value || []).concat(items);
    setfield(obj, field, setterfn);
}
