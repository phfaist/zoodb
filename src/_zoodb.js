import debug_module from 'debug';
const debug = debug_module('zoodb._zoodb');

import loCloneDeep from 'lodash/cloneDeep.js';
import loCloneDeepWith from 'lodash/cloneDeepWith.js';
import loAssignWith from 'lodash/assignWith.js';

import { copy_object_structure } from './util/objectinspector.js';


function cloneDeepWithEmptyPrototypeObjects(object)
{
    return loCloneDeepWith(object, (value) => {
        if (typeof value === 'object') {
            if (value === null) { // yes, typeof null === 'object' !!?!
                return null;
            }
            if (value instanceof Array) {
                return undefined; // use the default cloning procedure
            }
            return loAssignWith(
                Object.create(null),
                value,
                (existingValue, newValue) => {
                    return cloneDeepWithEmptyPrototypeObjects(newValue);
                }
            );
        }
        return undefined; // run the default cloning procedure
    });
}


/**
 * The main database class.
 *
 * 
 *
 * The constructor accepts a single object with the following properties:
 *
 * - ``processors`` - list of DB processors to install.  See module
 *   :ref:`zoodb.dbprocessor`.
 *
 * - ``schema_validator`` - [Optional] You can specify a schema validator, which
 *   should provide the method ``validate(object, schema)`` (such as a
 *   ``Validator`` object instance from the `jsonschema npm package
 *   <https://www.npmjs.com/package/jsonschema>`_).
 *
 * If you specify a schema validator, objects that are added to the database
 * will automatically be validated against the schema using the provided
 * validator.
 *
 * Note that if you use a :class:`YamlDbDataLoader` to load your data, then that
 * class already performs schema validation so you don't need to validate your
 * objects here again.  In this case, you may simply leave `schema_validator` be
 * `null` or undefined.
 *
 * @param {} options
 *
 */
export class ZooDb
{
    constructor({ processors, schema_validator,
                  normalize_id_for_uniqueness_check, silent })
    {
        this.processors = processors ?? [];
        this.processors_initialized = false;

        this.silent = silent ?? false;

        for (const processor of this.processors) {
            processor.install_zoo(this);
        }

        // the raw loaded data, before db processors start to process it
        this.raw_data_db = {
            schemas: {},
            objects: {},
        };

        this.schema_validator = schema_validator ?? null;
        if (this.schema_validator == null) {
            throw new Error(
                `No schema validator set on this ZooDb to perform schema validation. `
                + `To suppress this error and proceed without schema validation, `
                + `use the value ‘false’ for the schema_validator argument.`
            );
        }

        this.normalize_id_for_uniqueness_check =
            normalize_id_for_uniqueness_check ?? ((x) => (''+x).toLowerCase())
        ;

        this.zoo_loader_handler = null;

        this.db = {};

        // Place to store runtime, non-persistent data.  E.g. computed property
        // values.
        this.scratch = {};
    }

    /**
     * Get the schema associated with a given `object_type`.  Returns the schema
     * object.
     */
    schema(object_type)
    {
        if (!Object.hasOwn(this.db.schemas, object_type)) {
            throw new Error(
                `No zoo schema associated with object type ‘${object_type}’`
            );
        }
        return this.db.schemas[object_type];
    }

    /**
     * A list of object types that are stored in this database (read-only
     * property).
     */
    get object_types() { return Object.keys(this.db.objects); }

    /**
     * Read-only properties to access the dictionary of schemas.
     */
    get schemas() { return this.db.schemas; }
    /**
     * Read-only properties to access the dictionary of objects.  Access objects
     * as ``stored_object = zoodbobject.objects[object_type][object_id]``.
     */
    get objects() { return this.db.objects; }

    // ---

    async load_schemas({ schemas })
    {
        this.raw_data_db.schemas = loCloneDeep(schemas);
        this.db.schemas = cloneDeepWithEmptyPrototypeObjects(schemas);
        debug(`Loaded db schemas (${Object.keys(this.db.schemas).join(', ')})`);
    }

    /**
     * Initialize the database processors and then directly load objects whose
     * data is given in the argument dictionary `db`.  We ensure that the
     * objects are copies of the probvided data, by serializing them &
     * deserializing them again from JSON.
     *
     * Note that this method is meant to load raw data that needs to be
     * processed.  You are not likely to be able to load data dumped using
     * `data_dump()`, unless you dumped that data by using raw data dump options
     * and skipping the db processors' fiddling.  See `data_dump()` for details.
     *
     * @param {Object} db - an object with keys 'schemas' and 'objects'.
     */
    async load_data(db)
    {
        debug('zoodb load_data');

        if (!db || typeof db !== 'object'
            || (db.schemas != null && typeof db.schemas !== 'object')
            || (db.objects != null && typeof db.objects !== 'object')
            || (db.objects == null && db.schemas == null)) {
            throw new Error(
                `Invalid zoo DB data, expected db.schemas and/or db.objects `
                + `to be objects, got db=${db}`
            );
        }

        if (db.schemas != null && Object.keys(db.schemas).length > 0) {
            // load schemas
            await this.load_schemas({ schemas: db.schemas });
        }

        if (db.objects == null || Object.keys(db.objects).length == 0) {
            debug(`No objects to load at this time.`);
            return;
        }

        if (this.db.schemas == null) {
            throw new Error(`No schemas loaded. It looks like you forgot to load `
                            +` the schemas before loading the object data`);
        }

        // Ensure that each object type has a schema.  (It's fine though if
        // there are additional schemas with no associated object types.)
        for (const object_type in db.objects ?? {}) {
            if (this.db.schemas[object_type] == null) {
                throw new Error(
                    `No schema loaded for objects of type ‘${object_type}’. It looks like `
                    + `you forgot to load schemas for this object type.`
                );
            }
        }

        this.raw_data_db.objects = loCloneDeep(db.objects);

        this.db.objects = cloneDeepWithEmptyPrototypeObjects(db.objects);

        this._object_types = Object.keys(this.db.objects);

        this._sanitize_raw_object_db(this.db.objects);


        if (!this.processors_initialized) {
            this.processors_initialized = true;
            for (const processor of this.processors) {
                await processor.initialize_zoo();
            }
        }
        for (const processor of this.processors) {
            await processor.process_zoo();
        }

        debug('zoodb load_data done.');
    }



    /**
     * Can be overridden to proceed to validatation of the zoo.  E.g., you can
     * enforce any constraints, sanity checks, etc.
     *
     * The base class applies checks that all IDs are unique modulo the
     * normalizer set as constructor argument.
     *
     * (Schema validation doesn't happen here, it happens instead directly when
     * loading the data in `load_data()` because the check can be performed
     * earlier.  The ID uniqueness check happens here because it must act
     * globally on the database.)
     *
     * .. warning:
     *
     *    This validation function is only called if you use a loader handler to
     *    handle the data loads (see :class:`ZooDbDataLoaderHandler`).
     *    Otherwise it's up to you to call this method manually whenever
     *    appropriate.
     */
    async validate()
    {
        for (const [object_type, object_db] of Object.entries(this.db.objects)) {
            // check that all object IDs are suitably unique
            let unique_ids_check_seen = {};
            let normalize_id_fn = this.normalize_id_for_uniqueness_check;
            for (const [objid, obj] of Object.entries(object_db)) {
                const object_id_unique_normalized = normalize_id_fn(objid);
                const other_object = unique_ids_check_seen[object_id_unique_normalized];
                if (other_object !== undefined) {
                    throw new Error(
                        `ID ‘${objid}’ was assigned to multiple objects of type `
                        + ` ${object_type} (duplicate ID), `
                        + `${this.display_object_source(other_object)} and `
                        + `${this.display_object_source(obj)}’ [normalized ID `
                        + `‘${object_id_unique_normalized}’]`
                    );
                }
                // register the "normalized" ID for the temporary ID uniqueness
                // check dictionary
                unique_ids_check_seen[object_id_unique_normalized] = obj;
            }
        }
    }


    display_object_source(object)
    {
        const zi = object._zoodb;
        if (zi) {
            if (zi.source_file_path) {
                return `in file ‘${zi.source_file_path}’`;
            }
            if (zi.source_url) {
                return `at ‘${zi.source_url}’`;
            }
            if (zi.id) {
                return `with ID ‘${zi.id}’`;
            }
        }
        return `(unknown source)`;
    }

    // -----------------------

    //
    // Methods for installing and using data loader handlers.
    //

    /** Install a zoo loader handler.
     *
     * The loader handler's task is to invoke a dbdataloader
     * (e.g. :class:`YamlDbDataLoader`) to obtain the database data from some
     * source (e.g. YAML files) and then to properly initialize and validate the
     * zoo with that data.
     *
     * The `zoo_loader_handler` is pretty much expected to be a
     * :class:`ZooDbDataLoaderHandler` instance.  If you specify `null` here,
     * any existing loader handler will be removed.
     *
     * The reason for splitting off the logic of the loader handler is to avoid
     * bloating the ZooDb class definition, especially in case a user would like
     * to create a barebones ZooDb, e.g. with hard-coded JSON data, without
     * reloading features, in which case neither a loader nor a loader handler
     * are not necessary.
     */
    async install_zoo_loader_handler( zoo_loader_handler )
    {
        if (zoo_loader_handler == null) {
            // remove any existing loader handler
            this.zoo_loader_handler = null;
            return;
        }
        if (this.zoo_loader_handler != null) {
            throw new Error(`There is already a loader handler installed.`);
        }
        this.zoo_loader_handler = zoo_loader_handler;
        await this.zoo_loader_handler.initialize(this);
    }

    /** Load or reload the zoo, using the loader handler that was installed via
     * `install_zoo_loader_handler()`.
     */
    async load(options={})
    {
        // also use load() for reload updated data, etc.

        if (this.zoo_loader_handler == null) {
            throw new Error(
                `No zoo loader installed, use ZooDb.install_zoo_loader_handler() to set one`
            );
        }
        await this.zoo_loader_handler.load(options);
    }

    

    // -----------------------


    _sanitize_raw_object({object_type, object_id, object})
    {

        const obj_to_validate = Object.assign({}, object);
        delete obj_to_validate._zoodb; // remove any ._zoodb field from the object to validate

        const schema = this.schemas[object_type];

        if (this.schema_validator) {
            const validation_result = this.schema_validator.validate(obj_to_validate, schema);
            if (!validation_result.valid) {
                const validation_errors = validation_result.errors.map(
                    (errorstr) => (''+errorstr).replace(
                        /^instance\b/,
                        () => `[${object_type.toUpperCase()}]`
                    )
                );
                const validation_errors_str = '*** ' + validation_errors.join("\n*** ");
                let addwhere = '';
                if (object_id) {
                    addwhere = ` with ID ‘${object_id}’`;
                }
                if (object._zoodb?.source_file_path) {
                    addwhere = ` in ‘${object._zoodb.source_file_path}’`;
                }
                let errormsg = 
                    `Schema validation failed for <${object_type}> object data`
                    + `${addwhere}:\n\n`
                    + `${validation_errors_str}\n`
                ;
                if (!this.silent) {
                    console.log('Validation failed for data:', obj_to_validate);
                    console.error(errormsg);
                }
                let e = new Error( errormsg );
                e.error_info = {
                    error_type: 'schema_validation_failure',
                    validation_result,
                }
                throw e;
            }
        }

        object._zoodb ??= {};
        if (!object._zoodb.id) {
            object._zoodb.id = object_id;
        }
        if (object._zoodb.id != object_id) {
            throw new Error(
                `Detected inconsistency in object ID: database key is ‘${object_id}’ `
                    + `but internal ID field is ‘${object._zoodb.id}’`
            );
        }
    }

    _sanitize_raw_object_db(db_objects)
    {
        // ensure that the _zoodb property is set on all objects, and that it
        // has at least the property 'id'
        for (const [object_type, object_db] of Object.entries(db_objects)) {
            for (const [object_id, object] of Object.entries(object_db)) {
                this._sanitize_raw_object({object_type, object_id, object});
            }
        }
    }


    // -------------


    async update_objects(db_objects)
    {
        // debug(`Updating zoo with db_objects =`, db_objects);
        // debug(`this.db.objects=`, this.db.objects);

        // update the raw data
        for (const [object_type, object_db] of Object.entries(db_objects)) {
            for (const [object_id, /*object*/] of Object.entries(object_db)) {
                this.raw_data_db.objects[object_type][object_id] =
                    loCloneDeep(db_objects[object_type][object_id]);
                    // JSON.parse(JSON.stringify(db_objects[object_type][object_id]));
            }
        }

        // now prepare to update the data in db, including processors' work

        for (const processor of this.processors) {
            await processor.prepare_zoo_update_objects(db_objects);
        }

        for (const [object_type, object_db] of Object.entries(db_objects)) {
            for (const [object_id, object] of Object.entries(object_db)) {
                // update object
                this.update_object({
                    object_db: this.db.objects[object_type],
                    object_type,
                    object_id,
                    new_object: object,
                });
            }
        }

        for (const processor of this.processors) {
            await processor.process_zoo_update_objects(db_objects);
        }
        
        // debug(`Finally, this.db.objects=`, this.db.objects);
    }

    // internal.
    update_object({object_db, object_type, object_id, new_object})
    {
        this._sanitize_raw_object({object_id, object_type, object: new_object})

        object_db[object_id] = new_object;
    }


    // -------------


    /**
     * Produce a serializable data dump of the contents of the database.
     *
     * WARNING: Depending on the options provided here and any installed
     * database processors, YOU MIGHT BE GETTING ACCESS TO THE RAW OBJECTS IN
     * THE DATABASE.  For instance, you might have access to the original
     * `FLMFragment` instances if you're using a FLM content processor and
     * provide the relevant `options`.  ANY MODIFICATIONS MIGHT AFFECT THE
     * ORIGINAL DATABASE CONTENT.
     *
     * This method will call all database processors' `process_data_dump()`
     * methods to ensure that the database is prepared for serialization.
     */
    async data_dump(options = {})
    {
        let {
            use_raw_db_data,
            skip_db_processors,
            remove_zoodb_id,
            remove_zoodb_info,
        } = options;

        use_raw_db_data ??= false;
        skip_db_processors ??= false;
        remove_zoodb_id ??= false;
        remove_zoodb_info ??= false;

        let data = {};

        if (use_raw_db_data) {

            data.db = this.raw_data_db;
            return data;

        }
        
        data.db = {
            objects: {},
            schemas: loCloneDeep(this.db.schemas),
        }
        
        // Make shallow copies of each object, including their declared
        // properties.  This is important because we'll want to modify these
        // objects through the database processors, and us too with
        // remove_zoodb_info!
        for (const [object_type, object_db] of Object.entries(this.db.objects)) {
            data.db.objects[object_type] = {};
            const schema = this.db.schemas[object_type];
            for (const [object_id, object] of Object.entries(object_db)) {
                // ensure that all declared fields, even recursively, are copied
                // (at least shallowly)
                let new_object = copy_object_structure(object, schema);
                // Let's deep clone to make sure we avoid issues with db processor
                // information being messed up
                new_object._zoodb = loCloneDeep(object._zoodb);
                data.db.objects[object_type][object_id] = new_object;
            }
        }

        if ( ! (skip_db_processors ?? false) ) {
            // note iteration in reverse order, so that processors can "standardize"
            // or "partially undo" their transformations in the correct order.
            for (const processor of Array.from(this.processors).reverse()) {
                data = await processor.process_data_dump(data, options);
            }
        }

        if (remove_zoodb_id) {
            for (const [ /*object_type*/, object_db] of Object.entries(data.db.objects)) {
                for (const [ /*object_id*/, object] of Object.entries(object_db)) {
                    let zdbinf = object._zoodb;
                    delete zdbinf.id;
                }
            }
        }
        if (remove_zoodb_info) {
            for (const [ /*object_type*/, object_db] of Object.entries(data.db.objects)) {
                for (const [ /*object_id*/, object] of Object.entries(object_db)) {
                    delete object._zoodb;
                }
            }
        }

        return data;
    }
    


}

