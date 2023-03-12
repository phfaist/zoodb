import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.stdzoodb");

import { ZooDb } from '../_zoodb.js';

import loMerge from 'lodash/merge.js';

// -----------------------------------------------------------------------------


export class StandardZooDb extends ZooDb
{
    constructor(config)
    {
        let _this = {};

        _this.config = loMerge(
            {
                continue_with_errors: false,

                // for any filesystem access, mostly for llm_processor
                fs: null,
                fs_data_dir: null,

                use_relations_populator: null,

                use_gitlastmodified_processor: null,

                use_llm_environment: null,
                zoo_llm_environment_options: null,

                use_llm_processor: null,
                llm_options: {

                    refs: {},

                    citations: {
                        csl_style: null, // CSL style (XML data)
                        override_arxiv_dois_file: null,
                        preset_bibliography_files: [],
                        default_user_agent: null,
                    },
                    
                    allow_unresolved_references: false,
                    allow_unresolved_citations: false,

                    resources: {
                        rename_figure_template: null,
                        figure_filename_extensions: null,
                        graphics_resources_fs_data_dir: null,
                        resource_file_extensions: null,
                    },
                },

                use_searchable_text_processor: null,

                searchable_text_options: {
                    object_types: [], // ['code',]  // only e.g. search for codes
                },

                zoo_permalinks: null, //{ object:, graphics_resource: }
                // e.g.  graphics_resource:  (gresource) => `/fig/${gresource.src_url}`,

            },
            config,
        );

        debug(`StandardZooDb: Using config =`,
              // stringify .fs property otherwise dumping Node's module in
              // console is very long
              Object.assign({}, _this.config, {fs: `(((${_this.config.fs})))`}),
             );
        debug(`StandardZooDb: config's llm_options are =`, _this.config.llm_options);

        if (_this.config.zoo_permalinks == null) {
            throw new Error(
                `StandardZooDb: The zoo_permalinks: config property is not set`
            );
        }

        // NOTE! read-only property, assining to this property won't take effect
        // later on because the property value is used already here in
        // use_llm_environment().
        _this.zoo_object_permalink = _this.config.zoo_permalinks.object;

        _this.zoo_llm_environment = null;
        if (_this.config.use_llm_environment) {
            _this.zoo_llm_environment = _this.config.use_llm_environment(_this);
        }

        _this.zoodb_processors = [];


        if (_this.config.use_relations_populator) {
            _this.zoo_relations_populator = _this.config.use_relations_populator(_this);
            _this.zoodb_processors.push(_this.zoo_relations_populator);
        } else {
            _this.zoo_relations_populator = null;
        }

        if (_this.config.use_gitlastmodified_processor) {
            _this.zoo_gitlastmodified_processor =
                _this.config.use_gitlastmodified_processor(_this);
            _this.zoodb_processors.push( _this.zoo_gitlastmodified_processor );
        } else {
            _this.zoo_gitlastmodified_processor = null;
        }

        _this.llm_error_policy = (_this.config.continue_with_errors ? 'continue' : 'abort');
        debug(`llm_error_policy = ${_this.llm_error_policy}`);

        //
        // LLM Processor
        //
        _this.zoo_llm_processor = null;
        if (_this.config.use_llm_processor) {
            _this.zoo_llm_processor = _this.config.use_llm_processor(_this);
            _this.zoodb_processors.push(_this.zoo_llm_processor);
        }

        //
        // Processor: make searchable text
        //
        _this.searchable_text_processor = null;
        if (_this.config.use_searchable_text_processor) {
            _this.searchable_text_processor =
                _this.config.use_searchable_text_processor(_this);
            _this.zoodb_processors.push(_this.searchable_text_processor);
        }

        //
        // Set up the ZooDb object - parent class
        //
        super({
            // database processors:
            processors: _this.zoodb_processors,
        });
       
        // set attributes we prepared from _this
        for (const [k,v] of Object.entries(_this)) {
            this[k] = v;
        }

        this.zoo_loader = null;
    }

    install_zoo_loader( zoo_loader )
    {
        this.zoo_loader = zoo_loader;
        this.zoo_loader.initialize(this);
    }

    async load(options=null)
    {
        // also use load() for reload updated data, etc.

        if (this.zoo_loader == null) {
            throw new Error(`No zoo loader installed, use StandardZooDb#install_zoo_loader()`);
        }
        await this.zoo_loader.load(options);
    }

};


