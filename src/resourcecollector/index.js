import debug_module from 'debug';
const debug = debug_module('zoodb.resourcecollector');


/**
 * Main manager class for collecting external resources (e.g. graphics files)
 * referenced by zoo objects.
 *
 * Resources are keyed by *resource type* (an application-defined string such
 * as `'graphics'`).  For each type the collector delegates to:
 *
 * - A *resource retriever* (e.g. :class:`FilesystemResourceRetriever`) that
 *   locates the resource, copies it to a target location if needed, and
 *   returns a `target_info` object.
 *
 * - Zero or more *resource processors* that receive ``{ target_info, source,
 *   processed_info }`` and can add arbitrary properties to `processed_info`.
 *
 * Constructor options:
 *
 * - `resource_types` *(required)* — array of resource type name strings.
 *
 * - `resource_retrievers` — object mapping each resource type name to its
 *   retriever instance.
 *
 * - `resource_processors` — object mapping each resource type name to an
 *   array of processor instances.
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

    /**
     * Collect the resource identified by `source` of type `resource_type`.
     *
     * Resolves the source via the registered retriever, then runs all
     * registered processors for that type.  If the resource was already
     * collected (either by its canonical name or as an alias), this call is
     * a no-op.
     *
     * **Important:** `collect()` calls must be awaited and must not run
     * concurrently — if a second call is made before the first resolves, an
     * error is thrown.
     *
     * @param {string} resource_type - The resource type (must be listed in
     *     `options.resource_types`).
     * @param {string} source - The source identifier (e.g. a file path) for
     *     the resource to collect.
     * @returns {Promise<void>}
     */
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
                                                        processed_info});
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

    /**
     * Return the collected resource data object for the given `resource_type`
     * and `source`.  Alias sources are resolved to their canonical name
     * automatically.
     *
     * Returns `undefined` if the resource has not yet been collected.
     *
     * @param {string} resource_type - The resource type.
     * @param {string} source - The source identifier (may be an alias).
     * @returns {{ target_info: Object, processed_info: Object,
     *             resolved_info: Object, source: string } | undefined}
     */
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

    /**
     * Signal to all registered resource retrievers that collection is
     * complete.  Calls `retriever.finish()` on every retriever in parallel.
     *
     * @returns {Promise<void>}
     */
    async finish()
    {
        // call finished on all resource retrievers
        await Promise.all(
            Object.values(this.resource_retrievers).map( (retriever) => retriever.finish() )
        );
    }

}
