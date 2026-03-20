
/**
 * Return the JSON schema object for the field at the given dotted path within
 * `schema`.  The path may contain `[]` to traverse an array's item schema.
 * Returns `undefined` if the final segment is not found in the schema's
 * `properties`.
 *
 * @param {Object} schema - A JSON Schema object, typically the full object
 *     type schema retrieved from `zoodb.schema(object_type)`.
 * @param {string} field - A dotted field path such as `'relations.parents'` or
 *     `'items.[].name'`.
 * @returns {Object|undefined} The sub-schema for the requested field, or
 *     `undefined` when the final segment is absent.
 *
 * @example
 * const fieldSchema = get_field_schema(zoodb.schema('person'), 'address.city');
 */
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


/**
 * Generator that iterates over all concrete field positions within `obj` for
 * the given dotted field path.  The path may include `[]` to expand every
 * element of an array at that position.  Each yielded item has the shape
 * `{ value, fieldnameidx }`, where `fieldnameidx` is the concrete path string
 * with array indices substituted for `[]`.
 *
 * @param {Object} obj - The object to inspect.  Must not be `undefined`.
 * @param {string} field - A dotted field path, possibly containing `[]` for
 *     array expansion, e.g. `'relations.[].code_id'`.
 * @param {string} [fieldnameidx] - A prefix to prepend to the returned
 *     `fieldnameidx` strings; omit in normal usage.
 * @returns {Generator<{value: *, fieldnameidx: string}>}
 *
 * @example
 * for (const { value, fieldnameidx } of iterfield(obj, 'tags.[].label')) {
 *   console.log(fieldnameidx, value);
 * }
 */
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
                let newfieldnameidx = (fieldnameidx ? `${fieldnameidx}.` : '') + `[${k}]`;
                const restfield = parts.slice(j+1).join('.')
                if (restfield) {
                    yield * iterfield(objitem, restfield, newfieldnameidx);
                } else {
                    yield { value: objitem, fieldnameidx: newfieldnameidx };
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


/**
 * Return the value of the nested field at the given dotted path within `obj`.
 * The final segment's value is returned.
 * 
 * If any property along the property chain is not present, then `undefined`
 * is returned.
 * 
 * If any property along the property chain cannot be indexed with the
 * subsequent property name, an error is thrown.
 *
 * @param {Object} obj - The object to read from.  Must not be `undefined`.
 * @param {string} field - A dotted field path such as `'address.city'`.
 *     Numeric array indices may be provided as `[0]` within the path, still
 *     separated by dots from the other properties.
 * @returns {*} The value at the given path, or `undefined` if a segment is
 *     absent.
 *
 * @example
 * const first_city = getfield(person, 'address.city.[0]');
 */
export function getfield(obj, field)
{
    if (typeof obj == 'undefined') {
        throw new Error("getfield(): obj is undefined!");
    }

    const parts = field.split('.');
    for (let part of parts) {
        if (Array.isArray(obj)) {
            let m = /^\[(\d+)\]$/.exec(part);
            if (m != null) {
                part = parseInt(m[1]);
            }
        }
        try {
            obj = obj[part];
        } catch (e) {
            throw new Error(
                `Property ‘${part}’ cannot be accessed on ${obj} in call `
                + `to getfield(‘${field}’)`
            );
        }
        if (obj === undefined) {
            return undefined;
        }
    }
    return obj;
}

/**
 * Write a value into the nested field at the given dotted path within `obj`,
 * creating intermediate objects or arrays as needed.
 *
 * The `setterfn` argument controls what is written.  It accepts two forms:
 *
 * - A function `(oldValue) => newValue`: called with the current value of the
 *   leaf field (or `undefined` if absent) and its return value is stored.
 *   When the field did not previously exist, the function is called without
 *   arguments.
 *
 * - An options object `{ set_object_attribute_fn }`: the function
 *   `set_object_attribute_fn(parentObject, tailKey)` is called directly and
 *   is responsible for writing the value itself (e.g. using `delete`).
 *
 * The path may include `[]` to append a new element to an array at that
 * position, or `[n]` to write to a specific numeric index.
 *
 * Both `setterfn` forms are intentional and provided for convenience: the
 * plain-function form covers the common case of transforming a value, while the
 * `{ set_object_attribute_fn }` object form gives the caller direct access to
 * the parent object and key — useful for operations like `delete` that cannot
 * be expressed as a value transformation.  The two forms are distinguished by
 * `typeof setterfn`: `'function'` selects the first form, `'object'` the
 * second.
 *
 * @param {Object} obj - The object to mutate.  Must not be `undefined`.
 * @param {string} field - A dotted field path, possibly containing `[]` or
 *     `[n]` segments.
 * @param {Function|{set_object_attribute_fn: Function}} setterfn - See above.
 *
 * @example
 * // Increment a counter
 * setfield(obj, 'stats.count', (old) => (old ?? 0) + 1);
 *
 * // Delete the 'label' field in the 'tags' object
 * setfield(obj, 'tags.label', { set_object_attribute_fn: (p, k) => delete p[k] });
 */
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
        let m = /^\[(\d*)\]$/.exec(part);
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
    let tail_part = tail_part_info.part;
    if (tail_part === -1) {
        tail_part = obj.length;
    }

    return set_object_attribute_fn(obj, tail_part);
}

/**
 * Append the elements of `items` to the array stored at the nested field
 * path `field` within `obj`.  If the field is currently absent or falsy, a
 * new array containing `items` is stored.
 *
 * @param {Object} obj - The object to mutate.
 * @param {string} field - A dotted field path to an array-valued field.
 * @param {Array} items - The elements to append.
 *
 * @example
 * concatlistfield(person, 'relations.children', [newChildId]);
 */
export function concatlistfield(obj, field, items)
{
    const setterfn = (value) => (value || []).concat(items);
    setfield(obj, field, setterfn);
}
