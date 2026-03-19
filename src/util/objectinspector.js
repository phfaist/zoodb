
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
 * Generator that recursively yields every leaf field within `obj` according to
 * the structure described by `schema`.  Each yielded value has the shape
 * `{ fieldname, fieldvalue, fieldschema }`.  When `options.provide_parent` is
 * `true`, the yielded objects additionally include `parent` and `parent_index`
 * so that the caller can update the field in-place with
 * `parent[parent_index] = newValue`.
 *
 * Recognised `options` properties:
 *
 * - `provide_parent` — when `true`, include `parent` and `parent_index` in
 *   each yielded object.
 * - `only_schema_properties` — when `true` (the default), only iterate over
 *   properties declared in `schema.properties` instead of `Object.keys(obj)`.
 * - `visit_predicate({ fieldname, fieldschema, fieldvalue })` — optional
 *   function; return `false` to skip a field and its children.
 * - `propfieldname(fieldname, propname)` — optional function to build the
 *   dotted field name for an object property.
 * - `arrayitemfieldname(fieldname, i)` — optional function to build the
 *   field name for an array element.
 *
 * @param {Object} obj - The database object to inspect.
 * @param {Object} schema - The JSON Schema for `obj`.
 * @param {Object} [options] - See above.
 * @param {string} [fieldname] - Internal recursion prefix; omit in normal usage.
 * @returns {Generator<{fieldname: string, fieldvalue: *, fieldschema: Object}>}
 *
 * @example
 * for (const { fieldname, fieldvalue, fieldschema }
 *      of iter_object_fields_recursive(obj, schema)) {
 *   // process each leaf field
 * }
 * for (const { fieldname, fieldvalue, fieldschema, parent, parent_index }
 *      of iter_object_fields_recursive(obj, schema, { provide_parent: true })) {
 *   // mutate the field in-place:
 *   parent[parent_index] = transform(fieldvalue);
 * }
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
        const schema_properties = schema.properties ?? {};
        const keys =
              only_schema_properties ? Object.keys(schema_properties) : Object.keys(obj) ;
        for (const propname of keys) {
            const propschema =
                  schema_properties[propname] ?? schema.additionalProperties ?? {};
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


/**
 * Generator that recursively yields every leaf field declared in `schema`,
 * without requiring an actual object.  Each yielded value has the shape
 * `{ fieldname, fieldschema }`.
 *
 * Recognised `options` properties are the same as for
 * `iter_object_fields_recursive()`: `visit_predicate`, `propfieldname`, and
 * `arrayitemfieldname`.
 *
 * @param {Object} schema - A JSON Schema object to traverse.
 * @param {Object} [options] - See above.
 * @param {string} [fieldname] - Internal recursion prefix; omit in normal usage.
 * @returns {Generator<{fieldname: string, fieldschema: Object}>}
 *
 * @example
 * for (const { fieldname, fieldschema } of iter_schema_fields_recursive(schema)) {
 *   if (fieldschema._flm) { console.log(fieldname, 'is an FLM field'); }
 * }
 */
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



/**
 * Return a shallow structural copy of `obj` according to `schema`, recursively
 * creating new plain objects and arrays for each object/array level while
 * leaving leaf values as-is (shared references).
 *
 * Options:
 *
 * - `only_schema_properties` — when `true`, only copy properties declared in
 *   the schema (default: `false`).
 * - `create_object` — factory function `() => {}` for new object nodes.
 * - `create_array` — factory function `() => []` for new array nodes.
 *
 * @param {Object|null} obj - The object to copy; returned unchanged if `null`.
 * @param {Object} schema - The JSON Schema describing `obj`'s structure.
 * @param {Object} [options] - See above.
 * @returns {Object|null} A structural shallow copy of `obj`.
 */
export function copy_object_structure(obj, schema, options={})
{
    let {
        only_schema_properties,
        create_object,
        create_array,
    } = options;
    
    only_schema_properties ??= false;
    create_object ??= () => ({});
    create_array ??= () => [];

    if (obj == null) {
        return obj; // no fields to expore or yield
    }
    if (schema.type == 'object') {

        let new_obj = create_object();

        const schema_properties = schema.properties ?? {};
        const keys =
              only_schema_properties ? Object.keys(schema_properties) : Object.keys(obj) ;
        for (const propname of keys) {
            const propschema =
                  schema_properties[propname] ?? schema.additionalProperties ?? {};
            const propvalue = obj[propname];
            new_obj[propname] = copy_object_structure(propvalue, propschema, options);
        }
        return new_obj;

    }
    if (schema.type == 'array') {

        let new_obj = create_array();

        const schema_items = schema.items ?? {};

        for (let i = 0; i < obj.length; ++i) {

            new_obj.push(
                copy_object_structure(obj[i], schema_items, options)
            );

        }
        return new_obj;
        
    }

    return obj;
}
