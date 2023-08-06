import debug_module from 'debug';
const debug = debug_module('zoodb.resourcecollector');


/**
 * Main manager class for collecting external resources.
 *
 * Needs doc!!!..................
 */
export class ResourceCollector
{
    constructor(options)
    {
        options ||= {};

        this.resource_types = options.resource_types;
        this.resource_retrievers = options.resource_retrievers || {};
        this.resource_processors = options.resource_processors || {};

        this.collected_resources = Object.fromEntries(
            this.resource_types.map( (resource_type) => [ resource_type, {} ] )
        );
        this.collected_resources_aliases = Object.fromEntries(
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
            debug(`Resource collector — collecting ${resource_type} : ‘${source}’`);

            if (!this.resource_types.includes(resource_type)) {
                throw new Error(
                    `Invalid resource type ‘${resource_type}’, not included `
                    + `in options.resource_types`
                );
            }

            if (Object.hasOwn(this.collected_resources[resource_type], source)
               || Object.hasOwn(this.collected_resources_aliases[resource_type], source)) {
                // already collected
                debug(`... already collected.`);
                return;
            }

            const resource_retriever = this.resource_retrievers[resource_type];

            const resolved_info = await resource_retriever.resolve(source);

            const { resolved_source } = resolved_info;

            const do_register_the_alias = () => {
                this.collected_resources_aliases[resource_type][source] = {
                    source,
                    resolved_source,
                    resolved_info,
                };
            };

            if (this.collected_resources[resource_type] &&
                Object.hasOwn(this.collected_resources[resource_type], resolved_source)) {
                // already collected, only need to register the alias source
                do_register_the_alias();
                debug(`... registered ‘${source}’ as alias to already `
                      + `collected ‘${resolved_source}’.`);
                return;
            }

            const target_info = await resource_retriever.retrieve(resolved_info, source);

            let processed_info = {};
            const resource_processors = this.resource_processors[resource_type] ?? [];
            for (const resource_processor of resource_processors) {
                // run this processor
                const new_processed_info =
                      await resource_processor.process({target_info, source,
                                                        resolved_info, processed_info});
                // merge any processed_info properties
                Object.assign(processed_info, new_processed_info);
            }

            const resource_data = {
                target_info,
                processed_info,
                resolved_info,
                source: resolved_source,
            };

            this.collected_resources[resource_type][resolved_source] = resource_data;

            debug(`... collected ${resolved_source}.`);

            if (resolved_source != source) {
                // register resource for original source name, too
                do_register_the_alias();
                debug(`... also stored info as ${source}.`);
            }

        } finally {
            this.collect_working = false;
        }

    }

    get_resource_data(resource_type, source)
    {
        let alias_info = null;
        if (this.collected_resources_aliases[resource_type]) {
            alias_info = this.collected_resources_aliases[resource_type][source];
        }
        if (alias_info != null) { // not undefined or null
            source = alias_info.resolved_source;
        }
        return this.collected_resources[resource_type][source];
    }

    async finish()
    {
        // call finished on all resource retrievers
        await Promise.all(
            Object.values(this.resource_retrievers).map( (retriever) => retriever.finish() )
        );
    }

}
