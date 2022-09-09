import path from 'path';

import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoollm.zooprocessor'});

import * as zoollm from './index.js';
const {$$kw, repr} = zoollm;

import * as zoodbllmcontent from '../dbprocessors/llmcontent.js';

import * as zoollmscanner from './scanner.js';

import { CitationCompiler, install_csl_llm_output_format } from './citationcompiler.js';

import { CitationDatabaseManager } from '../citationmanager/index.js';
import { ResourceCollector } from '../resourcecollector/index.js';



export class ZooLLMZooProcessor
{
    constructor(options)
    {
        //
        // fix some options & defaults
        //
        this.options = options || {};
        this.options.refs ||= {};
        this.options.refs_defaults ||= {};

        this.options.citations ||= {};
        this.options.citations.sources ||= {};
        this.options.citations.default_user_agent ||= null;

        //
        // The ZooDb object
        //
        this.zoodb = this.options.zoodb;
        if (!this.zoodb) {
            throw new Error(`No zoodb object provided`);
        }

        this.zoo_llm_environment = this.options.zoo_llm_environment;
        if (!this.zoo_llm_environment) {
            throw new Error(`No zoo_llm_environment object provided`);
        }

        //
        // Scanner object will be created when necessary
        //
        this.scanner = null;

        //
        // Set up some citations related stuff
        //
        install_csl_llm_output_format(this.zoo_llm_environment);

        this.citation_manager = null;

        //
        // Resource collector, e.g. for graphics
        //
        this.resource_collector = this.options.resource_collector ||
            new ResourceCollector(this.options.resource_collector_options);
    }

    async process_zoo()
    {
        logger.info("Compiling all zoo LLM content ...");

        let zoo_relations_populator = new zoodbllmcontent.LLMContentCompiler(
            this.zoodb,
            {
                llm_environment: this.zoo_llm_environment
            }
        );
        await zoo_relations_populator.compile_all_zoo();
        //logger.info("Zoo LLM content populated!");

        this.scanner = new zoollmscanner.ZooLLMScanner();
        this.scanner.scan_zoo(this.zoodb);

        await this.setup_ref_targets();

        await this.setup_fetch_citations();
        await this.setup_compile_citations();

        await this.setup_collect_resources();

        logger.info("Zoo LLM processing done");
    }

    async setup_ref_targets()
    {
        await this.setup_ref_targets_objects();
        await this.setup_ref_targets_referenceables();
    }
    
    async setup_ref_targets_objects()
    {
        for (const [object_type, objectsdb] of Object.entries(this.zoodb.objects)) {

            const optionsrefs = Object.assign(
                {},
                this.options.refs_defaults,
                this.options.refs[object_type] || {},
            );

            const formatted_ref_llm_text_fn =
                  optionsrefs.formatted_ref_llm_text_fn
                  || ( (objid, obj) => ((obj.name||{}).llm_text || objid) )
            ;

            for (const [objid,obj] of Object.entries(objectsdb)) {
                logger.debug(`Adding ref for ${object_type} ‘${objid}’`);

                this.zoo_llm_environment.external_ref_resolver.add_ref(
                    zoollm.RefInstance($$kw({
                        ref_type: object_type,
                        ref_label: objid,
                        formatted_ref_llm_text: formatted_ref_llm_text_fn,
                        // target_href needs to be set later on.
                        target_href: null,
                    }))
                );
            }

        }
    }

    async setup_ref_targets_referenceables()
    {
        for (const encountered_referenceable
             of this.scanner.get_encountered('referenceables')) {
            const { referenceable_info, encountered_in } = encountered_referenceable;
            for (const lbl of referenceable_info.labels) {
                const [ref_type, ref_label] = lbl;
                this.zoo_llm_environment.external_ref_resolver.add_ref(
                    zoollm.RefInstance($$kw({
                        ref_type: ref_type,
                        ref_label: ref_label,
                        formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text,
                        // target_href needs to be set later on.
                        target_href: null,
                    }))
                );
            }
        }
    }

    async setup_fetch_citations()
    {
        logger.debug("Fetching citations ...");

        this.citation_manager = new CitationDatabaseManager(
            this.options.citations.sources,
            {
                default_user_agent: this.options.citations.default_user_agent
            },
        );

        const encountered_citations = this.scanner.get_encountered('citations');

        await this.citation_manager.query_citations( encountered_citations );

        // citations database ready
        logger.debug("Citation database ready!")
    }


    async setup_compile_citations()
    {
        const csl_style = this.options.citations.csl_style;

        let citecompiler = new CitationCompiler({
            citation_manager: this.citation_manager,
            compile_citations: this.scanner.get_encountered('citations'),
            csl_style: csl_style,
        });

        citecompiler.compile_citations_to_provider(
            this.zoo_llm_environment.external_citations_provider
        );
    }



    async setup_collect_resources()
    {
        const encountered_resources = this.scanner.get_encountered('resources');

        let collect_promises = [];

        for (const resource of encountered_resources) {

            // console.log('resource = ', resource);

            const source_directory =
                  resource.encountered_in.resource_info.get_source_directory();

            logger.debug(
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

            collect_promises.push(
                this.resource_collector.collect(
                    resource.resource_type,
                    source
                )
            );
        }

        await Promise.all(collect_promises);

        await this.resource_collector.finish();
    }

};
