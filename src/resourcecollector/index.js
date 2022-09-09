

export class ResourceCollector
{
    constructor(options)
    {
        options ||= {};

        this.resource_retrievers = options.resource_retrievers || {};
        this.resource_processors = options.resource_processors || {};

        this.resource_types = Object.keys(this.resource_retrievers);

        this.collected_resources = Object.fromEntries(
            this.resource_types.map( (resource_type) => [ resource_type, [] ] )
        );
    }

    async collect(resource_type, source)
    {
        const target_info =
              await this.resource_retrievers[resource_type].retrieve(source);

        const resource_processor = this.resource_processors[resource_type];
        const processed_info =
              resource_processor
              ? await resource_processor.process(target_info, source)
              : {};

        this.collected_resources[resource_type].push(
            {
                target_info: target_info,
                processed_info: processed_info,
                source: source,
            }
        );
    }

    get_target_info(resource_type, source)
    {
        return this.collected_resources[resource_type].find(
            (element) => (element.source == source)
        );
    }

    async finish()
    {
        // call finished on all resource retrievers
        await Promise.all(
            Object.values(this.resource_retrievers).map( (retriever) => retriever.finish() )
        );
    }

};


