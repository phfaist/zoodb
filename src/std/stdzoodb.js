import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.stdzoodb");

import jsonschema from 'jsonschema';

import { ZooDb } from '../_zoodb.js';
import { SchemaLoader } from '../schemaloader.js';
import { debugconfig } from '../util/debugconfig.js';

import loMerge from 'lodash/merge.js';


/**
 * Create a :class:`ZooDb` instance (or a custom subclass instance) using
 * standard settings with higher-level options.
 *
 * To create an instance of a custom ZooDb subclass, set `config.ZooDbClass`
 * to the desired subclass.
 *
 * Top-level config keys:
 *
 * - `ZooDbClass` — class to instantiate (default: :class:`ZooDb`).
 * - `SchemaLoaderClass` — class used to load JSON Schemas (default:
 *   :class:`SchemaLoader`).  Set to `false` to skip schema loading.
 * - `continue_with_errors` — if `true`, FLM compilation errors become
 *   warnings instead of aborting (sets `flm_error_policy` to `'continue'`).
 *   Default: `false`.
 * - `fs` — filesystem access object (Node.js `fs` module or compatible).
 *   Required by the FLM processor for reading data and citation cache files.
 * - `fs_data_dir` — root directory for resolving data file paths.
 * - `zoo_permalinks` *(required)* — object with permalink-building functions
 *   (see below).
 * 
 * The `zoo_permalinks` object should expose the following methods:
 * - `object(object_type, object_id) → string` — builds a URL for a zoo
 *   object.
 * - `graphics_resource(gresource) → string` — builds a URL for a graphics
 *   resource.
 *
 * Processor activation keys (each accepts either `null`/`false` to disable or
 * a factory function ``(_this) → processorInstance``):
 *
 * - `use_relations_populator` — factory for :class:`RelationsPopulator`.
 *   Consumed by `use_relations_populator.js`.
 * - `use_gitlastmodified_processor` — factory for
 *   :class:`GetGitLastModifiedDbProcessor`.
 *   Consumed by `use_gitlastmodified_processor.js`.
 * - `use_flm_environment` — factory for :class:`ZooFLMEnvironment`.
 *   Consumed by `use_flm_environment.js`.
 * - `use_flm_processor` — factory for :class:`ZooFLMProcessor`.
 *   Consumed by `use_flm_processor.js`.
 * - `use_searchable_text_processor` — factory for
 *   :class:`SearchableTextProcessor`.
 *   Consumed by `use_searchable_text_processor.js`.
 *
 * FLM options (`flm_options` sub-object, used by `use_flm_environment.js` and
 * `use_flm_processor.js`):
 *
 * - `environment_options` — options forwarded to the :class:`ZooFLMEnvironment`
 *   constructor.  Consumed by `use_flm_environment.js`.
 * - `refs` — object mapping ref types to configuration; forwarded to
 *   :class:`ZooFLMProcessor`.  Consumed by `use_flm_processor.js`.
 * - `allow_unresolved_references` — when `true`, unresolved FLM cross-references
 *   render as `<??>` instead of throwing.  Consumed by `use_flm_environment.js`.
 * - `allow_unresolved_citations` — when `true`, unknown citation keys render
 *   verbatim.  Consumed by `use_flm_environment.js`.
 * - `citations.csl_style` — CSL style XML string for citation formatting.
 *   Consumed by `use_flm_processor.js`.
 * - `citations.override_arxiv_dois_file` — path to a file overriding arXiv DOI
 *   mappings.  Consumed by `use_flm_processor.js`.
 * - `citations.preset_bibliography_files` — array of bibliography file paths to
 *   pre-load.  Consumed by `use_flm_processor.js`.
 * - `citations.default_user_agent` — HTTP User-Agent string for citation HTTP
 *   requests.  Consumed by `use_flm_processor.js`.
 * - `citations.cache_dir` — directory for citation cache files (default:
 *   `'_zoodb_citations_cache'`).  Consumed by `use_flm_processor.js`.
 * - `citations.cache_dir_create` — whether to auto-create `cache_dir` (default:
 *   `true`).  Consumed by `use_flm_processor.js`.
 * - `citations.cache_entry_default_duration_ms` — cache TTL in milliseconds.
 *   Consumed by `use_flm_processor.js`.
 * - `citations.skip_save_cache` — skip writing updated citation cache to disk.
 *   Consumed by `use_flm_processor.js`.
 * - `citations.sources` — object mapping source names to source instances or
 *   `true`/`false`/`null` to enable or disable defaults.
 *   Consumed by `use_flm_processor.js`.
 * - `resources.rename_figure_template` — function producing a target filename
 *   for collected graphics resources.  Consumed by `use_flm_processor.js`.
 * - `resources.figure_filename_extensions` — array of extensions to try when
 *   resolving a graphics source name.  Consumed by `use_flm_processor.js`.
 * - `resources.graphics_resources_fs_data_dir` — base directory for graphics
 *   files (defaults to `fs_data_dir`).  Consumed by `use_flm_processor.js`.
 * - `resources.graphics_use_srcset_parceljs` — options for generating
 *   Parcel-compatible `srcset` attributes for raster images.
 *   Consumed by `use_flm_environment.js`.
 *
 * Other options:
 *
 * - `extra_db_processors` — object mapping processor keys to
 *   ``{ priority, instance }`` objects.  Lower `priority` values run earlier.
 *   Set `instance` to `null` to disable an entry.
 * - `custom_zoodb_properties` — object of extra properties to attach directly
 *   to the returned ZooDb instance.
 * - `searchable_text_options.object_types` — array of object types to include
 *   in the searchable text index.  Consumed by `use_searchable_text_processor.js`.
 * - `schemas` — passed to :class:`SchemaLoader`; must contain `schema_root`,
 *   `schema_rel_path`, and `schema_add_extension`.
 * - `schema_names` — array of schema names to load (or `null` to auto-detect
 *   from the schema directory).  Passed to :class:`SchemaLoader`.
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

            use_flm_processor: null,
            flm_options: {

                environment_options: null,

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

            // processor instance infos with custom keys, rather than an array of processors
            // -- facilitates merge of config with loMerge(), avoids merging arrays (which
            // can yield unexpected results) -- also sets a corresponding property on
            // the zoodb instance's 'zoodb_named_processors' property.
            //
            // Syntax: extra_db_processors: {
            //    myproc1: { priority: 30, instance: myDbProcessor },
            //    ...
            // }
            //
            // A lower 'priority' makes the processor go first in the zoodb's processors list.
            //
            extra_db_processors: {},

            // named properties
            custom_zoodb_properties: {},

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

    debug(`makeStandardZooDb: Using config =`, debugconfig(debug, _this.config, { level: 4 }));

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
    _this.zoodb_named_processors = {};


    if (_this.config.use_relations_populator) {
        _this.zoo_relations_populator = await _this.config.use_relations_populator(_this);
        _this.zoodb_named_processors.zoo_relations_populator = _this.zoo_relations_populator;
        _this.zoodb_processors.push(_this.zoo_relations_populator);
    } else {
        _this.zoo_relations_populator = null;
    }

    if (_this.config.use_gitlastmodified_processor) {
        _this.zoo_gitlastmodified_processor =
            await _this.config.use_gitlastmodified_processor(_this);
        _this.zoodb_named_processors.zoo_gitlastmodified_processor =
            _this.zoo_gitlastmodified_processor;
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
        _this.zoodb_named_processors.zoo_flm_processor = _this.zoo_flm_processor;
        _this.zoodb_processors.push(_this.zoo_flm_processor);
    }

    //
    // Processor: make searchable text
    //
    _this.searchable_text_processor = null;
    if (_this.config.use_searchable_text_processor) {
        _this.searchable_text_processor =
            await _this.config.use_searchable_text_processor(_this);
        _this.zoodb_named_processors.searchable_text_processor =
            _this.searchable_text_processor;
        _this.zoodb_processors.push(_this.searchable_text_processor);
    }

    //
    // Any user-defined DB processors to include
    //
    if (_this.config.extra_db_processors
        && Object.keys(_this.config.extra_db_processors).length > 0) {
        let extra_db_processors_entries =
            Object.entries(_this.config.extra_db_processors)
            .filter( ([k,v]) => (v != null) ) ;
        extra_db_processors_entries.sort(
            ([ak,av],[bk,bv]) => (av?.priority ?? 50) - (bv?.priority ?? 50)
        );
        for (const [db_processor_key, db_processor_spec] of extra_db_processors_entries) {
            const db_processor_instance = db_processor_spec.instance;
            if (db_processor_instance == null) {
                // Skip this entry.  An entry with a null processor is allowed here
                // so that we can easily remove db processors in a config-merge-chain
                // by setting { myprocessor: null } or { myprocessor: { instance: null } }
                continue;
            }
            _this.zoodb_named_processors[db_processor_key] = db_processor_instance;
            _this.zoodb_processors.push( db_processor_instance );
        }
    }

    //
    // Set up the main class & schema loader
    //
    
    let ZooDbClass = _this.config.ZooDbClass;
    let SchemaLoaderClass = _this.config.SchemaLoaderClass;

    let schema_validator = new jsonschema.Validator();

    debug(`Instantiating ZooDb instance object.`,
          { ZooDbClass, db_processors: _this.zoodb_processors });

    //
    // Set up the ZooDb object
    //
    let zoodb = new ZooDbClass({
        // database processors:
        processors: _this.zoodb_processors,
        schema_validator,
    });

    // set attributes we prepared from _this
    for (const [k, v] of Object.entries(_this)) {
        zoodb[k] = v;
    }
    // and set any additional custom properties
    if (_this.config.custom_zoodb_properties) {
        for (const [k, v] of Object.entries(_this.config.custom_zoodb_properties)) {
            zoodb[k] = v;
        }
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
