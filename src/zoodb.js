
export class ZooDb
{
    constructor(db)
    {
        this.load_data(db);
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

    data_dump()
    {
        return this.db;
    }
    
    load_data(db)
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
            if (!db.schemas.hasOwnProperty(object_type)) {
                throw new Error(
                    `Zoo DB data does not have schema for objects of type ‘${object_type}’`
                );
            }
        }

        this.db = Object.assign({}, db)
        this._object_types = Object.keys(db.objects);
    }
};

