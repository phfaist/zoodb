import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.computeddata');

import { ZooDbProcessorBase } from './base.js';


/**
 * A database processor for computing data derived from the database data
 *
 * This database processor is given an object that specifies which zoodb objects
 * have which properties that need to be computed, and which specifies functions
 * to compute them.  This database processor ensures the computed properties are
 * computed when loading the zoo (or when the property is requested; see the
 * `lazy` config option).
 * 
 * The computed properties are expected to be accessed not directly on the object,
 * but through special methods that are automatically installed on the `zoodb`
 * object.  For instance, if a `user` object has a computed property `short_name`,
 * the `zoodb` instance will be given a custom method `user_short_name(user)` that
 * takes a `user` object as single argument and which returns the computed property
 * value.  This special method accesses a cached value, making it efficient to be
 * called repeatedly.
 * 
 * After it is computed, the value of a computed property is stored on an internal
 * property within the object's `_zoodb` special property.  (Try accessing
 * `obj._zoodb.computed_data`, and see the `computed_data_fieldset_name` config
 * option below.)
 * If the `lazy` config option is set to false, then all computed property values
 * are computed when loading or reloading the zoo.  If the `lazy` option is set to
 * true, then any property that we can compute on-the-fly is only computed at the
 * time it is requested on a specific object (see below for more details
 * about which computed properties can be computed lazily).
 * 
 * There are two ways to specify how to compute a computed property's value in the
 * computed property spec object (more details on the global structure below).
 * You may specify a property named `fn` and set it to a function that computes the
 * property value for a single object.  Alternatively, you can specify a property
 * named `fn_bulk` that computes the property over many objects in bulk.  The major
 * difference is that `fn_bulk` can be made async, whereas `fn` cannot.  Because
 * `fn_bulk` can be async, however, computed properties defined with `fn_bulk`
 * cannot be lazy; they are always computed in their entirety when loading or
 * updating the zoo.  (Indeed, this is to guarantee that the property value can
 * always be accessed from a non-async scope.)
 * 
 *
 * Configuration options:
 * 
 *  - `config.computed_data`: An object that specifies how to compute
 *    all the relevant computed data for each object type.  The object's keys
 *    are object type names.  For each object type, the value is an object
 *    that specifies the computed properties of that object; each key name is
 *    a computed property name.  The value associated with each computed property
 *    name is an object that specifies how to compute the property.  That object
 *    should either have a property named `fn` or one named `fn_bulk`.
 * 
 *    If you set `fn`, it should be set to a function that takes a single object
 *    as its only argument.  It should return the computed property value.  The
 *    function may not be async.
 * 
 *    If you set `fn_bulk`, it should be set to a function that takes a dictionary
 *    (i.e. an Object) `obj_db` as single argument.  The `obj_db` argument is a
 *    dictionary of object id's to objects.  The function should return a dictionary
 *    of all the values of the computed property values of these objects for this
 *    computed property.
 * 
 *    In both cases, `this` is set to the zoodb object so that the zoodb object can
 *    be easily accessed from the function body.
 * 
 *  - `config.object_types`: a list of object type names to which the
 *    processing will be applied.  If empty or null, processing is applied
 *    to all object types.
 * 
 *  - `lazy`: if set to true, then we try to defer computing property values until
 *    they are requested by a call on the zoodb's special method. (By default, it is
 *    set to false.)  Computed properties with a bulk computing function (`fn_bulk`)
 *    cannot be lazily computed (because they are async) and are always computed when
 *    loading or updating the zoo.
 * 
 *  - `keep_computed_data_in_data_dumps`: if set to true, then data dumps of the zoodb
 *    will produce objects in which the computed properties are included as regular
 *    properties of the objects.  See also the `keep_computed_data` option of the 
 *    data dumper (... todo, doc. ...)
 * 
 *  - `create_zoo_methods`: if set to true (the default), then special methods named
 *    `<object_type>_<computed_property_name>(obj)` are installed on the main zoodb
 *    object and are expected to be used to access the computed properties.  Computation
 *    of lazily-computed property values is triggered by calling the corresponding
 *    special method on the zoodb object.
 * 
 *    WARNING: If `create_zoo_methods` is set to false, the only way to access the
 *    computed properties' values is through the `_zoodb.computed_data` special object
 *    property (or whatever `computed_data_fieldset_name` config option is set to).
 * 
 *    WARNING: If `create_zoo_methods` is set to false, the automatic computation of
 *    lazy properties will never automatically be triggered, and they might never be
 *    computed!
 * 
 *  - `computed_data_fieldset_name`: The name of the property to set on the objects'
 *    internal `_zoodb` property to store the computed data values.  By default, this
 *    is `computed_data`.  You should only change this if you have a good reason to,
 *    e.g., if it is essential to have multiple instances of `ComputedDataProcessor`
 *    on the same zoodb.  But that's probably really asking for trouble!
 * 
 *  - `create_zoodb_special_method`: A function taking named object arguments
 *    `({zoodb, object_type, computed_property_name, accessor_function})`
 *    that is responsible for creating the special method to access the computed
 *    properties' values.  The special method's implementation that needs to be
 *    called is provided as `accessor_function`.  By default, this function simply
 *    creates a property on the `zoodb` object named
 *    `<object_type>_<computed_property_name>` and with value `accessor_function`.
 *    You can override this behavior here, e.g., to change the special method's name
 *    or the object on which it is attached.  The default implementation goes like::
 * 
 *        create_zoodb_special_method: ({zoodb, object_type, computed_property_name, accessor_function}) => {
 *            zoodb[`${object_type}_${computed_property_name}`] = accessor_function;
 *        }
 *
 */
export class ComputedDataProcessor extends ZooDbProcessorBase
{
    constructor(config)
    {
        super();
        this.config = Object.assign({

            lazy: false, // Note: only non-bulk properties can be computed lazily.

            create_zoo_methods: true,

            object_types: null,

            keep_computed_data_in_data_dumps: false,

            computed_data_fieldset_name: 'computed_data',

            create_zoodb_special_method:
                ({zoodb, object_type, computed_property_name, accessor_function}) => {
                // create method named <object_type>_<property_name> on zoodb ->
                zoodb[`${object_type}_${computed_property_name}`] = accessor_function;
            },
        }, config);

        this.computed_data_spec = this.config.computed_data;

        if (this.computed_data_spec == null) {
            console.warn('Warning: No computed_data set. This DB processor will do nothing.');
        }
        if (this.config.lazy && !this.config.create_zoo_methods) {
            console.warn(`WARNING: ComputedDataProcessor: config.lazy is set to true but `
                + `create_zoo_methods is set to false.  You'll need to compute the lazy `
                + `computed properties' values yourself as you won't be able to trigger `
                + `automatic computation by accessing them through the zoodb special `
                + `methods!`);
        }
    }

    async initialize_zoo()
    {
        this.config.object_types ??= this.zoodb.object_types;

        const { computed_data_fieldset_name } = this.config;

        // add accessor methods on the zoodb object for the computed data,
        // e.g. add a zoodb method `user_short_name(user_object)` if objects
        // of type `user` have a computed property named `short_name`
        if (this.config.create_zoo_methods) {
            for (
                const [object_type, computed_object_spec]
                of Object.entries(this.computed_data_spec)
            ) {
                for (const computed_property_name of Object.keys(computed_object_spec)) {
                    let accessor_function = null;
                    if (!this.config.lazy) {
                        accessor_function =
                            (obj) => obj._zoodb[computed_data_fieldset_name][computed_property_name] ;
                    } else {
                        const self = this;
                        accessor_function = (obj) => self._access_lazy_property(
                            object_type, obj, computed_property_name
                        ) ;
                    }
                    this.config.create_zoodb_special_method({
                        zoodb: this.zoodb,
                        object_type,
                        computed_property_name,
                        accessor_function,
                    });
                }
            }
        }
    }

    async process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }
        for (const object_type of this.config.object_types) {
            const obj_db = this.zoodb.objects[object_type];
            if (obj_db == null) {
                continue;
            }
            const computed_object_spec = this.computed_data_spec[object_type];
            if (computed_object_spec == null) {
                // no computed data for this object type.
                continue;
            }
            await this._process_object_db(object_type, obj_db, computed_object_spec);
        }
    }

    async prepare_zoo_update_objects(/*db_objects*/)
    {
    }

    async process_zoo_update_objects(db_objects)
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }
        for (const object_type of this.config.object_types) {
            const obj_db = db_objects[object_type];
            if (obj_db == null) {
                continue;
            }
            const computed_object_spec = this.computed_data_spec[object_type];
            if (computed_object_spec == null) {
                // no computed data for this object type.
                continue;
            }
            await this._process_object_db(object_type, obj_db, computed_object_spec);
        }
    }

    async process_data_dump(data, options)
    {
        let {
            keep_computed_data
        } = options;

        keep_computed_data ??= this.config.keep_computed_data_in_data_dumps;

        const { computed_data_fieldset_name } = this.config;

        // remove obj._zoodb.searchable_text_doc which takes up too much content
        // volume
        if (searchabletext_remove_doc_info) {
            for (const object_type of this.searchable_text_fieldset.object_types) {
                const objects = data.db.objects[object_type];
                if (!objects || Object.keys(objects).length == 0) {
                    continue;
                }
                for (let [/*obj_id*/, obj] of Object.entries(objects)) {
                    let zoodbinfo = obj._zoodb;
                    let computed_data = zoodbinfo[computed_data_fieldset_name];
                    delete zoodbinfo.computed_data;
                    // if we want to keep the computed data, set the computed fields
                    // as proper field in the data dump.
                    if (keep_computed_data) {
                        Object.assign(obj, computed_data);
                    }
                }
            }
        }
        
        return data;
    }

    // ----

    _access_lazy_property(
        object_type, obj, computed_property_name
    )
    {
        let obj_computed_data = obj._zoodb[this.config.computed_data_fieldset_name];
        if (Object.hasOwn(obj_computed_data, computed_property_name)) {
            return obj_computed_data[computed_property_name];
        }
        // We need to compute the lazy property now.
        const computed_property_spec =
            this.computed_data_spec[object_type][computed_property_name];
        const value = computed_property_spec.fn.call(this.zoodb, obj);
        obj_computed_data[computed_property_name] = value;
        return value;
    }

    async _process_object_computed_property(
        object_type, obj_db, computed_property_name, computed_property_spec
    )
    {
        debug(`Processing computed property ${object_type}.${computed_property_name}`);

        const { computed_data_fieldset_name } = this.config;
        // maybe we can bulk compute all object values? -- use this if the
        // computed data needs to run in an async/await method.
        if (computed_property_spec.fn_bulk != null) {
            debug(`Processing computed property ... is bulk!`);
            const value_db = await computed_property_spec.fn_bulk.call(this.zoodb, obj_db);
            for (const [obj_id, obj] of Object.entries(obj_db)) {
                const value = value_db[obj_id];
                obj._zoodb[computed_data_fieldset_name][computed_property_name] = value;
            }
            return;
        }

        if (this.config.lazy) {
            debug(`skipping computation of ‘${object_type.computed_property_name}’ (lazy)`);
            return;
        }

        for (const [obj_id, obj] of Object.entries(obj_db)) {
            // call the property computer, providing the zoodb as "this"
            const value = computed_property_spec.fn.call(this.zoodb, obj);
            obj._zoodb[computed_data_fieldset_name][computed_property_name] = value;
        }
    }

    async _process_object_db(object_type, obj_db, computed_object_spec)
    {
        const { computed_data_fieldset_name } = this.config;

        // ensure that all objects have a _zoodb.computed_data field.
        for (const [obj_id, obj] of Object.entries(obj_db)) {
            if (obj._zoodb[computed_data_fieldset_name] == null) {
                obj._zoodb[computed_data_fieldset_name] = Object.create(null);
            }
        }

        for (
            const [computed_property_name, computed_property_spec]
            of Object.entries(computed_object_spec)
        ) {
            await this._process_object_computed_property(
                object_type, obj_db, computed_property_name, computed_property_spec
            );
        }
    }
}
