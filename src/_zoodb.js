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

    data_dump()
    {
        let data = this.db;
        for (const processor of this.processors) {
            data = processor.process_data_dump(data);
        }
    }
    
    async load_data(db)
    {
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

        this.db = Object.assign({}, db)
        this._object_types = Object.keys(db.objects);

        if (!this.processors_initialized) {
            this.processors_initialized = true;
            for (const processor of this.processors) {
                await processor.initialize_zoo();
            }
        }
        for (const processor of this.processors) {
            await processor.process_zoo();
        }
    }

    async update_objects(db_objects)
    {
        // debug(`Updating zoo with db_objects =`, db_objects);
        // debug(`this.db.objects=`, this.db.objects);

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

