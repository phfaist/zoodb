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
     */
    process_zoo()
    {
        throw new Error(`Please reimplement me`);
    }

    /**
     * Called before certain objects are reloaded and updated to new values.
     * The argument `db_objects` has the structure
     * ``db_objects[object_type][object_id] = new_object_data`` and contains the
     * new, updated data that will be reloaded into the zoo.  The current, old
     * object data that will be replaced is available in `this.zoodb.objects`.
     */
    prepare_zoo_update_objects(db_objects)
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
     */
    process_zoo_update_objects(db_objects)
    {
        // by default simply process_zoo() again.
        this.process_zoo();
    }

    // ---

    /**
     * Process the given `data`, which is a ZooDb raw export data, so as to
     * remove any annoying object instances in view of serialization.
     *
     * For instance, an FLM content processor will likely want to replace
     * `FLMFragment` objects by e.g. the corresponding FLM code representation.
     *
     * Note: do not modify `data`! Return a new data structure if modifications
     * are needed please.
     *
     * In all cases, return the resulting data even if no modifications are
     * required.
     */
    process_data_dump(data, options)
    {
        return data;
    }

};
