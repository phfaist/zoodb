
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
export function *  iterfield(obj, field, fieldnameidx=undefined)
{
    if (typeof obj == 'undefined') {
        throw new Error("iterfield(): obj is undefined!");
    }

    const parts = field.split('.');
    for (let j = 0; j < parts.length; ++j) {
        const part = parts[j];
        if (part == '[]') {
            obj ||= []; 
            for (let k = 0; k < obj.length; ++k) {
                const objitem = obj[k];
                fieldnameidx = (fieldnameidx ? `${fieldnameidx}.` : '') + `[${k}]`;
                const restfield = parts.slice(j+1).join('.')
                if (restfield) {
                    yield * iterfield(objitem, restfield, fieldnameidx);
                } else {
                    yield { value: objitem, fieldnameidx };
                }
            }
            // & we're done
            return;
        }
        // otherwise, proceed one field down
        obj = (obj || {})[part];
        fieldnameidx = (fieldnameidx ? `${fieldnameidx}.` : '') + part;
    }
    yield { value: obj, fieldnameidx };
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
}

export function setfield(obj, field, setterfn)
{
    if (typeof obj == 'undefined') {
        throw new Error("setfield(): obj is undefined!");
    }

    let set_object_attribute_fn = null;
    if (typeof setterfn === 'object') {
        ({ set_object_attribute_fn } = setterfn);
    } else {
        set_object_attribute_fn = (obj, tail_part) => {
            if (!Object.hasOwn(obj, tail_part)) {
                obj[tail_part] = setterfn();
            } else {
                obj[tail_part] = setterfn(obj[tail_part]);
            }
        };
    }

    const parts = field.split('.');

    const parts_info = parts.map( (part, index) => {
        let isbeforelast = (index === (parts.length-2));
        let m = /^\[(\d+)*\]$/.exec(part);
        if (m != null) {
            // this part is an array index
            let arridxstr = m[1];
            if (arridxstr === '') {
                // part is "[]" -- interpret as "append to list"
                part = -1;
            } else {
                part = parseInt(arridxstr);
            }
            return {
                isarray: true,
                isbeforelast,
                part
            };
        }
        return { isarray: false, isbeforelast, part };
    } );

    // iterate over all but the last part
    for (let j = 0; j < parts_info.length-1; ++j) {

        const part_info = parts_info[j];
        let part = part_info.part;

        if (part === -1) {
            part = obj.length;
        }
        
        // obj[part] and Object.hasOwn(obj, part) both also work also if part is
        // an integer and obj is an array.

        if (!Object.hasOwn(obj, part)) {
            obj[part] = (parts_info[j+1].isarray ? [] : {});
        }

        obj = obj[part];
    }

    const tail_part_info = parts_info[parts_info.length - 1];
    const tail_part = tail_part_info.part;

    return set_object_attribute_fn(obj, tail_part);
}

export function concatlistfield(obj, field, items)
{
    const setterfn = (value) => (value || []).concat(items);
    setfield(obj, field, setterfn);
}
