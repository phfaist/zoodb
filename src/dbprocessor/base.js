
export class ZooDbProcessorBase
{
    constructor()
    {
        this.zoodb = null;
    }

    install_zoo(zoodb)
    {
        this.zoodb = zoodb;
    }

    // Called *after* data is loaded into zoo, before process_zoo().  In the
    // future, we might call process_zoo() multiple times after data changes, in
    // which case the initialize_zoo() will not be called multiple times.
    initialize_zoo()
    {
    }

    process_zoo()
    {
        throw new Error(`Please reimplement me`);
    }


    prepare_zoo_update_objects(db_objects)
    {
        // by default do nothing
    }

    process_zoo_update_objects(db_objects)
    {
        // by default simply process_zoo() again.
        this.process_zoo();
    }

};
