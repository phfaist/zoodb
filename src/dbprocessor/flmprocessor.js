import path from 'path';

import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.flmprocessor');

import * as zooflm from '../zooflm/index.js';
const {$$kw, repr} = zooflm;

import { ZooDbProcessorBase } from './base.js';
import { FLMSimpleContentCompiler } from './flmsimplecontent.js';

import { ZooFLMScanner } from '../zooflm/scanner.js';

import { CitationCompiler, install_csl_flm_output_format } from '../zooflm/citationcompiler.js';

import { CitationDatabaseManager } from '../citationmanager/index.js';
import { ResourceCollector } from '../resourcecollector/index.js';


/**
 * Database processor that compiles FLM content in object fields all while
 * providing the relevant infrastructure to handle cross-references between
 * objects, collect external resources, and manage citations (fetching,
 * compiling, formatting).
 *
 */
export class ZooFLMProcessor extends ZooDbProcessorBase
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
        //this.options.citations.default_user_agent ||= null; // ### can leave undefined

        // 'abort' or 'continue'
        this.options.flm_error_policy ??= 'abort';

        this.zoo_flm_environment = this.options.zoo_flm_environment;
        if (!this.zoo_flm_environment) {
            throw new Error(`No zoo_flm_environment object provided`);
        }

        //
        // Scanner object
        //
        this.scanner = new ZooFLMScanner();

        //
        // Compile individual FLM fields in the database
        //
        this.flm_simple_content_compiler = new FLMSimpleContentCompiler(
            {
                flm_environment: this.zoo_flm_environment,
                content_scanner: this.scanner,
                flm_error_policy: this.options.flm_error_policy,
            }
        );

        //
        // Set up some citations related stuff
        //
        this.citation_manager = new CitationDatabaseManager(
            this.options.citations.sources,
            {
                default_user_agent: this.options.citations.default_user_agent,
                cache_fs: this.options.citations.cache_fs,
                cache_file: path.join(this.options.citations.cache_dir ?? '.',
                                      'cache_downloaded_info.json'),
                cache_entry_default_duration_ms:
                    this.options.citations.cache_entry_default_duration_ms,
            },
        );

        //
        // So that we can compile citations
        //

        install_csl_flm_output_format(this.zoo_flm_environment);

        const csl_style = this.options.citations.csl_style;

        this.citation_compiler = new CitationCompiler({
            citation_manager: this.citation_manager,
            csl_style: csl_style,
            flm_compile_fragments: true,
            flm_environment: this.zoo_flm_environment,
            cache_fs: this.options.citations.cache_fs,
            cache_file: path.join(this.options.citations.cache_dir ?? '.',
                                  'cache_compiled_citations.json'),
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
        this.flm_simple_content_compiler.install_zoo(zoodb);
    }

    initialize_zoo(zoodb)
    {
        this.flm_simple_content_compiler.initialize_zoo(zoodb);
    }

    async process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb object provided!`);
        }

        debug("Compiling all zoo FLM content ...");

        await this.flm_simple_content_compiler.process_zoo(); // process simple FLM fields
        //debug("Zoo FLM content populated!");

        this.zoo_flm_environment.ref_resolver.clear_all_refs();

        await this.process_ref_targets_objects();
        await this.process_ref_targets_referenceables();

        await this.process_citations();

        await this.process_collect_resources();

        debug("Zoo FLM processing done");
    }

    async prepare_zoo_update_objects(db_objects)
    {
        await this.flm_simple_content_compiler.prepare_zoo_update_objects(db_objects);
    }

    async process_zoo_update_objects(/*db_objects*/)
    {
        // simply re-process the full zoo.
        await this.process_zoo();
    }

    // ---


    get_object_target_href(object_type, object_id)
    {
        // create an URL target for where we should link to the given object.
        // Remember that target_href's can still be adjusted at a later stage by
        // setting a target_href_resolver in the zoo flm environment's
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

            const formatted_ref_flm_text_fn =
                  optionsrefs.formatted_ref_flm_text_fn
                  || ( (objid, obj) => obj?.name?.flm_text || objid )
            ;

            for (const [objid,obj] of Object.entries(objectsdb)) {
                //debug(`Adding ref for ${object_type} ‘${objid}’`);

                const formatted_ref_flm_text = formatted_ref_flm_text_fn(objid, obj);

                this.zoo_flm_environment.ref_resolver.add_ref(
                    zooflm.RefInstance($$kw({
                        ref_type: object_type,
                        ref_label: objid,
                        formatted_ref_flm_text: formatted_ref_flm_text,
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
                this.zoo_flm_environment.ref_resolver.add_ref(
                    zooflm.RefInstance($$kw({
                        ref_type: ref_type,
                        ref_label: ref_label,
                        formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text,
                        // target_href will need to be adjusted later on.
                        target_href: target_href,
                    }))
                );
            }
        }
    }

    async process_citations()
    {
        debug("Fetching citations ...");

        const encountered_citations = this.scanner.get_encountered('citations');

        // check to retrieve only citation information for citations we don't
        // already have in our compiled citations cache.  (If it's already in
        // the downloaded citations cache, the citation manager will pick it up
        // automatically.  But the manager doesn't know about the citations
        // compiler.)
        const new_citations_to_compile = encountered_citations.filter(
            ({ cite_prefix, cite_key }) => {
                if (this.zoo_flm_environment.citations_provider
                    .has_citation({cite_prefix, cite_key})) {
                    // don't need to retrieve this citation info, we already
                    // have the relevant compiled citaiton

                    // TODO -- Include check to see if the citation might be
                    // out-of-date!!  Actually, add a configuration flat that
                    // tells us if we should check (or not) for the information
                    // to be up-to-date.  The idea is that for an in-browser zoo
                    // loading, we should skip this check!
                    return false;
                }
                return true;
            }
        );

        // make sure we purge any entries from earlier possible zoo processings
        this.citation_manager.purge_expired();

        await this.citation_manager.retrieve_citations( new_citations_to_compile );

        //     // citations database ready
        //     debug("Citation database ready!")

        debug('Compiling citations ...');

        this.citation_compiler.compile_citations(
            new_citations_to_compile
        );

        this.zoo_flm_environment.citations_provider.set_citations(
            this.citation_compiler.iter_compiled_citations()
        );

        debug("Compiled citations ready!")
    }


    async process_collect_resources()
    {
        debug('Collecting external resources ...');

        const encountered_resources = this.scanner.get_encountered('resources');

        for (const resource of encountered_resources) {

            // TODO -- only collect resources that need to be collected !!!
            // check any already-collected resources !!!

            // TODO -- Add a configuration flat that tells us if we should check
            // (or not) for the collected resources to be up-to-date.  The idea
            // is that for an in-browser zoo loading, we should skip
            // checking/loading any known resources!
            //...

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

}
