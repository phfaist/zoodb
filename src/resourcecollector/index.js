import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.resourcecollector'});



export class ResourceCollector
{
    constructor(options)
    {
        options ||= {};

        this.resource_retrievers = options.resource_retrievers || {};
        this.resource_processors = options.resource_processors || {};

        this.resource_types = Object.keys(this.resource_retrievers);

        this.collected_resources = Object.fromEntries(
            this.resource_types.map( (resource_type) => [ resource_type, {} ] )
        );

        this.collect_working = false;
    }

    //
    // NOTE: collect() calls need to be awaited and shouldn't run
    // simultaneously!  (e.g. resources corresponding to different source
    // names/aliases should only be collected once)
    //
    async collect(resource_type, source)
    {
        if (this.collect_working) {
            throw new Error(`Please chain collect() calls and don't call them simultanously!`);
        }

        this.collect_working = true;
        try {

            logger.debug(`Resource collector — collecting ${resource_type} : ‘${source}’`);

            if (this.collected_resources[resource_type] &&
                this.collected_resources[resource_type].hasOwnProperty(source)) {
                // already collected
                logger.debug(`... already collected.`);
                return;
            }

            const resource_retriever = this.resource_retrievers[resource_type];

            const resolved_info = await resource_retriever.resolve(source);

            const { resolved_source } = resolved_info;

            if (this.collected_resources[resource_type] &&
                this.collected_resources[resource_type].hasOwnProperty(resolved_source)) {
                // already collected, only need to register second source
                this.collected_resources[resource_type][source] = Object.assign(
                    {},
                    this.collected_resources[resource_type][resolved_source],
                    {
                        resolved_source: resolved_source,
                        resolved_info: resolved_info,
                    }
                );
                return;
            }

            const target_info = await resource_retriever.retrieve(resolved_info, source);

            const resource_processor = this.resource_processors[resource_type];
            const processed_info =
                  resource_processor
                  ? await resource_processor.process(target_info, source)
                  : {};

            const resource_data = {
                target_info: target_info,
                processed_info: processed_info,
                source: source,
                resolved_source: null, // null = not an alias
            };

            this.collected_resources[resource_type][resolved_source] = resource_data;

            logger.debug(`... collected ${resolved_source}.`);

            if (resolved_source != source) {
                // register resource for original source name, too
                this.collected_resources[resource_type][source] = Object.assign(
                    {},
                    resource_data,
                    {
                        resolved_source: resolved_source,
                        resolved_info: resolved_info,
                    }
                );

                logger.debug(`... also stored info as ${source}.`);
            }

        } finally {
            this.collect_working = false;
        }

    }

    get_target_info(resource_type, source)
    {
        return this.collected_resources[resource_type][source];
    }

    async finish()
    {
        // call finished on all resource retrievers
        await Promise.all(
            Object.values(this.resource_retrievers).map( (retriever) => retriever.finish() )
        );
    }

};


