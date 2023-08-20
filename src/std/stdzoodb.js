import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.stdzoodb");

import { ZooDb } from '../_zoodb.js';
import { SchemaLoader } from '../schemaloader.js';

import loMerge from 'lodash/merge.js';


/**
 * Create a :class:`ZooDb` instance (or a custom subclass instance) using 
 * standard settings with higher-level options.
 *
 * To create an instance of a custom ZooDb subclass, set the config value
 * `config.ZooDbClass` to the subclass of ZooDb you want to use (see
 * :ref:`example`).
 *
 * TODO: Document the higher-level options !!
 */
export async function makeStandardZooDb(config)
{
    let _this = {};

    _this.config = loMerge(
        {
            ZooDbClass: ZooDb,
            SchemaLoaderClass: SchemaLoader,

            continue_with_errors: false,

            // for any filesystem access, mostly for flm_processor
            fs: null,
            fs_data_dir: null,

            use_relations_populator: null,

            use_gitlastmodified_processor: null,

            use_flm_environment: null,
            zoo_flm_environment_options: null,

            use_flm_processor: null,
            flm_options: {

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

                    graphics_use_srcset_parceljs: {
                        enabled: false,
                        // if `pixel_density_list` is set, it should be a
                        // list of pixel densities for which to generate
                        // images.  Otherwise, we generate images for 1x,
                        // 2x, etc. up until `image_max_zoom_factor`.
                        pixel_density_list: null,
                        image_max_zoom_factor: 4,
                    },
                },
            },

            use_searchable_text_processor: null,

            searchable_text_options: {
                object_types: [], // ['code',]  // only e.g. search for codes
            },

            zoo_permalinks: null, //{ object:, graphics_resource: }
            // e.g.  graphics_resource:  (gresource) => `/fig/${gresource.src_url}`,

            // set schemas: false  to forbid creating a SchemaLoader instance
            schemas: {
                schema_root: null,
                schema_rel_path: null,
                schema_add_extension: null,
            },
            schema_names: null,

        },
        config,
    );

    debug(`makeStandardZooDb: Using config =`,
          _this.config,
          // stringify .fs property otherwise dumping Node's module in
          // console is very long
          // Object.assign({}, _this.config, {fs: `(((${_this.config.fs})))`}),
         );
    debug(`StandardZooDb: config's flm_options are =`, _this.config.flm_options);

    if (_this.config.zoo_permalinks == null) {
        throw new Error(
            `StandardZooDb: The zoo_permalinks: config property is not set`
        );
    }

    // NOTE! read-only properties, assining to this property won't take
    // effect later on because the property value is used here already in
    // use_flm_environment().
    _this.zoo_permalinks = Object.assign({}, _this.config.zoo_permalinks);
    _this.zoo_object_permalink = _this.zoo_permalinks.object;

    _this.zoo_flm_environment = null;
    if (_this.config.use_flm_environment) {
        _this.zoo_flm_environment = await _this.config.use_flm_environment(_this);
    }

    _this.zoodb_processors = [];


    if (_this.config.use_relations_populator) {
        _this.zoo_relations_populator = await _this.config.use_relations_populator(_this);
        _this.zoodb_processors.push(_this.zoo_relations_populator);
    } else {
        _this.zoo_relations_populator = null;
    }

    if (_this.config.use_gitlastmodified_processor) {
        _this.zoo_gitlastmodified_processor =
            await _this.config.use_gitlastmodified_processor(_this);
        _this.zoodb_processors.push( _this.zoo_gitlastmodified_processor );
    } else {
        _this.zoo_gitlastmodified_processor = null;
    }

    _this.flm_error_policy = (_this.config.continue_with_errors ? 'continue' : 'abort');
    debug(`flm_error_policy = ${_this.flm_error_policy}`);

    //
    // FLM Processor
    //
    _this.zoo_flm_processor = null;
    if (_this.config.use_flm_processor) {
        _this.zoo_flm_processor = await _this.config.use_flm_processor(_this);
        _this.zoodb_processors.push(_this.zoo_flm_processor);
    }

    //
    // Processor: make searchable text
    //
    _this.searchable_text_processor = null;
    if (_this.config.use_searchable_text_processor) {
        _this.searchable_text_processor =
            await _this.config.use_searchable_text_processor(_this);
        _this.zoodb_processors.push(_this.searchable_text_processor);
    }

    let ZooDbClass = _this.config.ZooDbClass;
    let SchemaLoaderClass = _this.config.SchemaLoaderClass;

    //
    // Set up the ZooDb object
    //
    let zoodb = new ZooDbClass({
        // database processors:
        processors: _this.zoodb_processors,
    });

    // set attributes we prepared from _this
    for (const [k, v] of Object.entries(_this)) {
        zoodb[k] = v;
    }

    if (_this.config.schemas && SchemaLoaderClass) {
        //
        // Load the schemas
        //
        const schema_loader = new SchemaLoaderClass({
            fs: _this.config.fs,
            schemas: _this.config.schemas,
            schema_names: _this.config.schema_names,
        });
        zoodb.schema_loader = schema_loader;
        const schemas_data = await schema_loader.load_schemas();
        await zoodb.load_data({
            schemas: schemas_data.schemas,
        });
        debug(`Created schema loader and loaded the schemas`);
    }

    return zoodb;
}
