import path from 'path';

import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.llmprocessor');

import * as zoollm from '../zoollm/index.js';
const {$$kw, repr} = zoollm;

import { ZooDbProcessorBase } from './base.js';
import { LLMSimpleContentCompiler } from './llmsimplecontent.js';

import { ZooLLMScanner } from '../zoollm/scanner.js';

import { CitationCompiler, install_csl_llm_output_format } from '../zoollm/citationcompiler.js';

import { CitationDatabaseManager } from '../citationmanager/index.js';
import { ResourceCollector } from '../resourcecollector/index.js';



export class ZooLLMProcessor extends ZooDbProcessorBase
{
    constructor(options)
    {
        super();

        //
        // fix some options & defaults
        //
        this.options = options || {};
        this.options.refs ||= {};
        this.options.refs_defaults ||= {};

        this.options.citations ||= {};
        this.options.citations.sources ||= {};
        this.options.citations.default_user_agent ||= null;

        // 'abort' or 'continue'
        this.options.llm_error_policy ??= 'abort';

        this.zoo_llm_environment = this.options.zoo_llm_environment;
        if (!this.zoo_llm_environment) {
            throw new Error(`No zoo_llm_environment object provided`);
        }

        //
        // Scanner object
        //
        this.scanner = new ZooLLMScanner();

        //
        // Compile individual LLM fields in the database
        //
        this.llm_simple_content_compiler = new LLMSimpleContentCompiler(
            {
                llm_environment: this.zoo_llm_environment,
                content_scanner: this.scanner,
                llm_error_policy: this.options.llm_error_policy,
            }
        );

        //
        // Set up some citations related stuff
        //
        this.citation_manager = new CitationDatabaseManager(
            this.options.citations.sources,
            {
                default_user_agent: this.options.citations.default_user_agent
            },
        );

        //
        // So that we can compile citations
        //

        install_csl_llm_output_format(this.zoo_llm_environment);

        const csl_style = this.options.citations.csl_style;

        this.citation_compiler = new CitationCompiler({
            citation_manager: this.citation_manager,
            csl_style: csl_style,
            llm_compile_fragments: true,
            llm_environment: this.zoo_llm_environment,
        });

        //
        // Resource collector, e.g. for graphics
        //
        this.resource_collector = this.options.resource_collector ||
            new ResourceCollector(this.options.resource_collector_options);
    }

    install_zoo(zoodb)
    {
        super.install_zoo(zoodb);
        this.llm_simple_content_compiler.install_zoo(zoodb);
    }

    initialize_zoo(zoodb)
    {
        this.llm_simple_content_compiler.initialize_zoo(zoodb);
    }

    async process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb object provided!`);
        }

        debug("Compiling all zoo LLM content ...");

        await this.llm_simple_content_compiler.process_zoo(); // process simple LLM fields
        //debug("Zoo LLM content populated!");

        this.zoo_llm_environment.ref_resolver.clear_all_refs();

        await this.process_ref_targets_objects();
        await this.process_ref_targets_referenceables();

        await this.process_fetch_citations();
        await this.process_compile_citations();

        await this.process_collect_resources();

        debug("Zoo LLM processing done");
    }

    async prepare_zoo_update_objects(db_objects)
    {
        await this.llm_simple_content_compiler.prepare_zoo_update_objects(db_objects);
    }

    async process_zoo_update_objects(db_objects)
    {
        // simply re-process the full zoo.
        await this.process_zoo();
    }

    // ---


    get_object_target_href(object_type, object_id)
    {
        // create an URL target for where we should link to the given object.
        // Remember that target_href's can still be adjusted at a later stage by
        // setting a target_href_resolver in the zoo llm environment's
        // ref_resolver instance.
        return `zoodbobjectref:/${object_type}:${object_id}`;
    }
    
    async process_ref_targets_objects()
    {
        debug('setting up ref targets for objects ...');
        for (const [object_type, objectsdb] of Object.entries(this.zoodb.objects)) {

            const optionsrefs = Object.assign(
                {},
                this.options.refs_defaults,
                this.options.refs[object_type] || {},
            );

            const formatted_ref_llm_text_fn =
                  optionsrefs.formatted_ref_llm_text_fn
                  || ( (objid, obj) => obj?.name?.llm_text || objid )
            ;

            for (const [objid,obj] of Object.entries(objectsdb)) {
                //debug(`Adding ref for ${object_type} ‘${objid}’`);

                const formatted_ref_llm_text = formatted_ref_llm_text_fn(objid, obj);

                this.zoo_llm_environment.ref_resolver.add_ref(
                    zoollm.RefInstance($$kw({
                        ref_type: object_type,
                        ref_label: objid,
                        formatted_ref_llm_text: formatted_ref_llm_text,
                        // target_href might need to be adjusted later on.
                        target_href: this.get_object_target_href(object_type, objid),
                    }))
                );
            }

        }
    }

    async process_ref_targets_referenceables()
    {
        debug('setting up ref targets for referenceables ...');

        const referenceables = this.scanner.get_encountered('referenceables');

        for (const encountered_referenceable of referenceables) {
            const { referenceable_info, encountered_in } = encountered_referenceable;
            let target_href = null;
            if (encountered_in && encountered_in.resource_info
                && encountered_in.resource_info.object_type) {
                const { object_type, object_id } = encountered_in.resource_info;
                target_href =
                    this.get_object_target_href(object_type, object_id);
                const referenceable_info_target_id = referenceable_info.get_target_id();
                if (referenceable_info_target_id != null) {
                    target_href += '#' + referenceable_info_target_id;
                }
            }
            debug(`\treferenceable: ${repr(referenceable_info)}  -> ${target_href}`);
            for (const lbl of referenceable_info.labels) {
                const [ref_type, ref_label] = lbl;
                debug(`\t\tlabel: ${ref_type}:${ref_label}`);
                this.zoo_llm_environment.ref_resolver.add_ref(
                    zoollm.RefInstance($$kw({
                        ref_type: ref_type,
                        ref_label: ref_label,
                        formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text,
                        // target_href will need to be adjusted later on.
                        target_href: target_href,
                    }))
                );
            }
        }
    }

    async process_fetch_citations()
    {
        debug("Fetching citations ...");

        const encountered_citations = this.scanner.get_encountered('citations');

        // make sure we purge any entries from earlier possible zoo processings
        this.citation_manager.purge_expired();

        try {

            await this.citation_manager.retrieve_citations( encountered_citations );

        } catch (e) {
            console.error(`Error while fetching citations.`);

            failure_citation_fetch = e.failure_citation_fetch;
            if (failure_citation_fetch != null) {
                const { source_name, ids } = failure_citation_fetch;
                console.error(`Source ‘${source_name}’ failed to fetch IDs:`, ids);
                for (const id of ids) {
                    // find where this id is used???
                    for (const encountered_citation of encountered_citations) {
                        if (encountered_citation.cite_prefix === source_name
                            && encountered_citation.cite_key === id) {
                            console.error(
                                `Citation ‘${source_name}:${id}’ was encountered in `,
                                encountered_citation.encountered_in?.resource_info?.source_path
                            );
                        }
                    }
                }
            }

            throw e;
        }

        // citations database ready
        debug("Citation database ready!")
    }


    async process_compile_citations()
    {
        debug('Compiling citations ...');

        this.citation_compiler.compile_citations(
            this.scanner.get_encountered('citations')
        );

        this.zoo_llm_environment.citations_provider.set_citations(
            this.citation_compiler.iter_compiled_citations()
        );
    }


    async process_collect_resources()
    {
        debug('Collecting external resources ...');

        const encountered_resources = this.scanner.get_encountered('resources');

        for (const resource of encountered_resources) {

            // debug('resource = ', resource);

            const source_directory =
                  resource.encountered_in.resource_info.get_source_directory();

            debug(
                `Collecting resource of type ‘${resource.resource_type}’ with source `
                + `type ‘${resource.resource_source_type}’ and source `
                + `‘${resource.resource_source}’; calling item's source_directory is `
                + `‘${source_directory}’`
            );

            let source;
            if (resource.resource_source_type == 'file' && resource.encountered_in) {
                source = path.join(
                    source_directory,
                    resource.resource_source,
                );
            } else {
                source = resource.resource_source;
            }

            await this.resource_collector.collect(
                resource.resource_type,
                source
            );
        }

        await this.resource_collector.finish();
    }

};
