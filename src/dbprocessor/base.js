/**
 * Base class for a ZooDb database processor.
 *
 * Methods in this class are called at various points when loading (or
 * reloading) the zoo data; subclasses should reimplement them to do something
 * useful.
 */
export class ZooDbProcessorBase
{
    constructor()
    {
        this.zoodb = null;
    }

    /**
     * Will be called very early by the ZooDb object to make itself aware to the
     * database processor.  You don't need to reimplement this function.  It
     * simply stores the zoodb instance in `this.zoodb`.
     */
    install_zoo(zoodb)
    {
        this.zoodb = zoodb;
    }

    /**
     * This method is called *after* data is loaded into zoo, before
     * `process_zoo()`.
     *
     * In case the database processor does not handle reloads separately from
     * initial loads (e.g., if `process_zoo_update_objects()` is not
     * reimplemented), then both of those events call `process_zoo()`.  However,
     * the `initialize_zoo()` is only called once upon the initial zoo load
     * event.
     *
     * This method is `await`'ed when called by the main zoo instance, so it can
     * be declared `async` or return a `Promise`.
     */
    initialize_zoo()
    {
    }

    /**
     * Perform any processing on the zoo data that is relevant to this database
     * processor.  The zoodb instance is available as `this.zoodb`.
     *
     * Unless you reimplement `process_zoo_update_objects()`, this method is
     * also called when certain objects are reloaded and updated.  In this case,
     * make sure that this method can be called multiple times; don't assume
     * that the data in `this.zoodb` is fresh and hasn't been processed yet.
     *
     * This method is `await`'ed when called by the main zoo instance, so it can
     * be declared `async` or return a `Promise`.
     */
    process_zoo()
    {
        throw new Error(`Please reimplement me`);
    }

    /**
     * Called before certain objects are reloaded and updated to new values.
     * The argument `db_objects` has the structure
     * ``db_objects[object_type][object_id] = new_object_data`` and contains the
     * new, updated data that will be loaded into the zoo.  The current, old
     * object data that will be replaced is available in `this.zoodb.objects`.
     *
     * This method is `await`'ed when called by the main zoo instance, so it can
     * be declared `async` or return a `Promise`.
     */
    prepare_zoo_update_objects(db_objects) // eslint-disable-line no-unused-vars
    {
        // by default do nothing
    }

    /**
     * Perform any processing that is relevant to this database processor, on
     * the specified objects that have just been reloaded and updated in the
     * zoo.
     *
     * The default implementation calls `process_zoo()` to re-process the entire
     * zoo.
     *
     * The argument `db_objects` has the structure
     * ``db_objects[object_type][object_id] = new_object_data`` and contains the
     * new, updated data that will be loaded into the zoo.
     *
     * This method is `await`'ed when called by the main zoo instance, so it can
     * be declared `async` or return a `Promise`.
     */
    process_zoo_update_objects(db_objects) // eslint-disable-line no-unused-vars
    {
        // by default simply process_zoo() again.

        // !! Make sure we `return` the result of this method, in case it
        // !! returns a Promise that should be awaited by the caller !!
        return this.process_zoo();
    }

    // ---

    /**
     * Process the given `data`, which is a ZooDb raw export data, so as to
     * remove any annoying object instances in view of serialization.
     *
     * For instance, an FLM content processor will likely want to replace
     * `FLMFragment` objects by e.g. the corresponding FLM code representation.
     *
     * Return the data as properly modified.  You need to return the data even
     * if you modify it in-place (but read the warning below!).
     *
     * .. warning::
     *
     *    EXTRA CARE IS NECESSARY WHEN ANY MODIFICATIONS OF THE DATA ARE
     *    NECESSARY. **TL,DR: You can modify objects as long as you assign the
     *    object's fields (as declared in the schema) directly.** If the object
     *    field value is an object instance (through some db processor), do NOT
     *    directly modify that object, IT IS THE DBPROCESSOR'S RESPONSIBILITY TO
     *    MAKE A DEEP COPY OF THE FIELD'S VALUE.
     *
     * The zoodb's data dump procedure cannot begin by making a deep copy of the
     * data, because the field values might have been processed to custom object
     * instances e.g. with circular references, and we might not know how to
     * copy such objects.  It is therefore the database processor's
     * responsibility to make sure that suitable copies are made whenever
     * appropriate.
     *
     * The `data` itself and `data.db` are already new object instances.  The
     * `data.db.schemas` object is already a full deep copy of the original
     * schemas.  The `data.db.objects` is copied recursively only up to the
     * object properties that are fields as declared in the schema.  Fields that
     * are objects themselves and that have subfields declared in the schema are
     * also recursed into.  The `_zoodb` properties of each object is also
     * already a deep copy of the original data.  However the field values
     * cannot be copied at the beginning of the export by the ZooDb base dump
     * method, because we might not know how to copy the object.  In other
     * words, while the general object structure is copied, the object's field
     * values are not.
     *
     * In all cases, you need to return the resulting data.
     *
     * This method is `await`'ed when called by the main zoo instance, so it can
     * be declared `async` or return a `Promise`.
     */
    process_data_dump(data, options) // eslint-disable-line no-unused-vars
    {
        return data;
    }

}
