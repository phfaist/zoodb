import debug_module from 'debug';
const debug = debug_module('zoodb._zoodb');


export class ZooDb
{
    constructor({ processors, })
    {
        this.processors = processors ?? [];
        this.processors_initialized = false;

        for (const processor of this.processors) {
            processor.install_zoo(this);
        }

        // the raw loaded data, before db processors start to process it
        this.raw_data_db = {};
    }

    schema(object_type)
    {
        if (!this.db.schemas.hasOwnProperty(object_type)) {
            throw new Error(
                `No zoo schema associated with object type ‘${object_type}’`
            );
        }
        return this.db.schemas[object_type];
    }

    get object_types() { return Object.keys(this.db.objects); }

    get schemas() { return this.db.schemas; }
    get objects() { return this.db.objects; }

    // ---

    data_dump(options = {})
    {
        let data = { db: this.db };
        // note iteration in reverse order, so that processors can "standardize"
        // or "partially undo" their transformations in the correct order.
        for (const processor of Array.from(this.processors).reverse()) {
            data = processor.process_data_dump(data, options);
        }
        return data;
    }
    
    raw_data_db_dump()
    {
        return {db: this.raw_data_db};
    }


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

        this.db = Object.assign({}, db);
        this._object_types = Object.keys(db.objects);

        this.raw_data_db = JSON.parse(JSON.stringify(this.db));

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

    async update_objects(db_objects)
    {
        // debug(`Updating zoo with db_objects =`, db_objects);
        // debug(`this.db.objects=`, this.db.objects);

        // update the raw data
        for (const [object_type, object_db] of Object.entries(db_objects)) {
            for (const [object_id, object] of Object.entries(object_db)) {
                this.raw_data_db[object_type][object_id] =
                    JSON.parse(JSON.stringify(db_objects[object_type][object_id]));
            }
        }

        // now prepare to update the data in db, including processors' work

        for (const processor of this.processors) {
            await processor.prepare_zoo_update_objects(db_objects);
        }

        for (const [object_type, object_db] of Object.entries(db_objects)) {
            for (const [object_id, object] of Object.entries(object_db)) {
                // update object
                this.update_object(this.db.objects[object_type], object_id, object);
            }
        }

        for (const processor of this.processors) {
            await processor.process_zoo_update_objects(db_objects);
        }
        
        // debug(`Finally, this.db.objects=`, this.db.objects);
    }

    update_object(object_db, object_id, new_object)
    {
        object_db[object_id] = new_object;
    }

};

