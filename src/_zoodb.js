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
 */
export class ZooDb
{
    /**
     * Constructor.  Pass the database processors you want to install here.  See
     * module :ref:`zoodb.dbprocessor`.
     *
     * @param {} processors - list of DB processors to install
     *
     */
    constructor({ processors, schema_validator })
    {
        this.processors = processors ?? [];
        this.processors_initialized = false;

        for (const processor of this.processors) {
            processor.install_zoo(this);
        }

        // the raw loaded data, before db processors start to process it
        this.raw_data_db = {};

        this.schema_validator = schema_validator ?? null;
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

        if (!db || typeof db.schemas != 'object' || typeof db.objects != 'object') {
            throw new Error(
                `Invalid zoo DB data, expected db.schemas and db.objects to be objects, got `
                + `db=${db}`
            );
        }

        // Ensure that each object type has a schema.  (It's fine though if
        // there are additional schemas with no associated object types.)
        for (const object_type in db.objects) {
            if (db.schemas[object_type] == null) {
                throw new Error(
                    `Zoo DB data does not have schema for objects of type ‘${object_type}’`
                );
            }
        }

        //debug('load_data(): db = ', db);

        this.raw_data_db = loCloneDeep(db); //JSON.parse(JSON.stringify(this.db));
        //debug('raw_data_db = ', this.raw_data_db);

        //this.db = JSON.parse(JSON.stringify(db));
        this.db = {};
        this.db.schemas = cloneDeepWithEmptyPrototypeObjects(db.schemas);
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


    _sanitize_raw_object({object_type, object_id, object})
    {

        const obj_to_validate = Object.assign({}, object);
        delete obj_to_validate._zoodb; // remove any ._zoodb field from the object to validate

        const schema = this.schemas[object_type];
        if (this.schema_validator) {
            const validation_result = this.schema_validator.validate(obj_to_validate, schema);
            if (!validation_result.valid) {
                let addwhere = '';
                if (object_id) {
                    addwhere = ` with ID ‘${object_id}’`;
                }
                if (object._zoodb?.source_file_path) {
                    addwhere = ` in ‘${object._zoodb.source_file_path}’`;
                }
                let e = new Error(
                    `Schema validation failed for <${object_type}> object data`
                        + `${addwhere}:\n\n`
                        +`*** ${ validation_result.errors.join("\n*** ") }\n`
                );
                e.validation_result = validation_result;
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
            schemas: loCloneDeep(this.db.schemas), //JSON.parse(JSON.stringify(this.db.schemas)),
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

