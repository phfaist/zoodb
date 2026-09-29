// import debug_mod from 'debug';
// const debug = debug_mod("eczoodbjs.use_flm_processor");

import { ZooFLMProcessor } from '../dbprocessor/flmprocessor.js';

import { CitationSourceArxiv } from '../citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../citationmanager/source/doi.js';
import { CitationSourceManual } from '../citationmanager/source/manual.js';
import { CitationSourceBibliographyFile } from '../citationmanager/source/bibliographyfile.js';

import { FilesystemResourceRetriever } from '../resourcecollector/retriever/fs.js';

import { FLMGraphicsResourceProcessor } from '../resourcecollector/processor/flmgraphicsprocessor.js';

//import loMerge from 'lodash/merge.js';


const default_figure_template_name =
      (f) => `fig-${f.basenameshort()}.${f.b32hash(4)}${f.lowerext()}`;


const default_make_resource_retriever_graphics_path =
      (flm_options_resources, {fs, fs_data_dir, /*_this*/}) => {
          return new FilesystemResourceRetriever({
              copy_to_target_directory: false,
              rename_file_template:
              flm_options_resources?.rename_figure_template
                  ?? default_figure_template_name,
              rename_use_file_hash: flm_options_resources?.rename_use_file_hash,
              read_file_content: flm_options_resources?.read_file_content,
              extensions:
                  flm_options_resources?.figure_filename_extensions
                  ?? [ '', '.svg', '.png', '.jpeg', '.jpg' ],
              //target_directory: './_output_resource_graphics_files/',
              fs,
              source_directory:
                  flm_options_resources?.graphics_resources_fs_data_dir
                  ?? fs_data_dir
          });
      }
;

const default_make_resource_processors_graphics_path =
      (flm_options_resources, {fs, /*fs_data_dir,*/ _this}) => {
          return [
              new FLMGraphicsResourceProcessor({
                  zoo_flm_environment: _this.zoo_flm_environment,
                  fs,
                  global_vector_scale: flm_options_resources?.global_vector_scale,
                  global_raster_scale: flm_options_resources?.global_raster_scale,
              }),
          ];
      }
;



// The built-in citation sources of use_flm_processor(), with their default
// options.  `citations_options` is `flm_options.citations`; some of its keys
// are older shortcuts for options of the built-in sources.
const builtin_citation_sources = {
    arxiv: {
        source_class: CitationSourceArxiv,
        default_options: (citations_options) => ({
            override_arxiv_dois_file: citations_options.override_arxiv_dois_file,
        }),
    },
    doi: {
        source_class: CitationSourceDoi,
    },
    manual: {
        source_class: CitationSourceManual,
    },
    preset: {
        source_class: CitationSourceBibliographyFile,
        // only created by default if there are bibliography files
        enabled_by_default: (citations_options) =>
            citations_options.preset_bibliography_files != null,
        default_options: (citations_options) => ({
            bibliography_files: citations_options.preset_bibliography_files,
        }),
    },
};

function is_citation_source_instance(value)
{
    return typeof value?.get_autocitefetch_spec === 'function';
}

function is_plain_object(value)
{
    if (value == null || typeof value !== 'object') {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

/**
 * Build the citation source instances of `use_flm_processor()` from
 * ``flm_options.citations`` (see there for the accepted structure of
 * ``citations.sources``).
 *
 * @param {Object} citations_options - ``flm_options.citations``.
 * @param {Object} ctx - ``{ fs, fs_data_dir }``, used as the ``fs`` and
 *     ``fsRootFilePath`` options of sources created here (unless their options
 *     set them).
 * @returns {Object} An object mapping citation prefixes to source instances.
 */
export function make_citation_sources(citations_options, { fs, fs_data_dir })
{
    const sources_setting = citations_options.sources ?? {};
    const common_options = citations_options.source_options ?? {};

    const create = (name, source_class, default_options, user_options) => {
        const options = Object.assign(
            { fs, fsRootFilePath: fs_data_dir },
            common_options,
            default_options,
            user_options,
        );
        for (const k of Object.keys(options)) {
            if (options[k] === undefined) {
                delete options[k];
            }
        }
        try {
            return new source_class(options);
        } catch (err) {
            throw new Error(`Cannot create citation source ‘${name}’: ${err.message}`,
                            { cause: err });
        }
    };

    // Built-in sources first, then the others, in the order given.
    const names = new Set([
        ...Object.keys(builtin_citation_sources),
        ...Object.keys(sources_setting),
    ]);

    const citation_sources = {};
    for (const name of names) {
        const setting = sources_setting[name];
        const builtin = Object.hasOwn(builtin_citation_sources, name)
              ? builtin_citation_sources[name] : null;
        if (setting === false || setting === null) {
            continue; // disabled
        }
        if (setting === undefined
            && builtin?.enabled_by_default?.(citations_options) === false) {
            continue;
        }
        if (setting === true && builtin == null) {
            throw new Error(
                `Cannot activate source ‘${name}’ that is not known to use_flm_processor()`
            );
        }
        if (is_citation_source_instance(setting)) {
            citation_sources[name] = setting;
            continue;
        }
        if (setting !== undefined && setting !== true && ! is_plain_object(setting)) {
            throw new Error(
                `Invalid setting for citation source ‘${name}’: expected true, false/null, `
                + `an options object, or a citation source instance`
            );
        }
        const { source_class, ...user_options } = is_plain_object(setting) ? setting : {};
        if (source_class != null) {
            if (typeof source_class !== 'function') {
                throw new Error(
                    `Citation source ‘${name}’: ‘source_class’ must be a class (constructor)`
                );
            }
            citation_sources[name] = create(name, source_class, {}, user_options);
            continue;
        }
        if (builtin == null) {
            throw new Error(
                `Citation source ‘${name}’ is not a built-in source of use_flm_processor() `
                + `(${Object.keys(builtin_citation_sources).join(', ')}); give a source `
                + `instance, or an options object with a ‘source_class’`
            );
        }
        citation_sources[name] = create(
            name,
            builtin.source_class,
            builtin.default_options?.(citations_options) ?? {},
            user_options,
        );
    }

    return citation_sources;
}


/**
 * Factory function that creates and configures a :class:`ZooFLMProcessor` for
 * use with :func:`makeStandardZooDb`.
 *
 * Reads the following properties from `_this.config.flm_options` (the
 * `flm_options` key of the config passed to `makeStandardZooDb`):
 *
 * - `refs` — object forwarded to the :class:`ZooFLMProcessor` constructor's
 *   `refs` option.
 * - `citations.csl_style` — CSL style XML string for the citation formatter.
 * - `citations.override_arxiv_dois_file` — path to a file that overrides
 *   arXiv-to-DOI mappings, relative to `fs_data_dir`.  Shortcut for
 *   ``sources.arxiv.override_arxiv_dois_file``, which takes precedence.
 * - `citations.preset_bibliography_files` — array of bibliography file paths
 *   to pre-load into the `preset` citation source.  Shortcut for
 *   ``sources.preset.bibliography_files``, which takes precedence.
 * - `citations.default_user_agent` — HTTP User-Agent header value for
 *   citation fetch requests.
 * - `citations.cache_dir` — directory of the citation cache (default:
 *   `'_zoodb_citations_cache'`; see :ref:`citations-cache`).  Created
 *   automatically unless `citations.cache_dir_create` is `false`.
 * - `citations.cache_entry_default_duration_ms` — cache TTL in milliseconds.
 * - `citations.skip_save_cache` — set to `true` to skip writing the updated
 *   cache to disk.
 * - `citations.sources` — object mapping citation prefixes to source
 *   settings.  The built-in sources are `'arxiv'`, `'doi'`, `'manual'`, and
 *   `'preset'` (see :doc:`zoodb.citationmanager`).  Each value is one of:
 *
 *   - `true` — keep the built-in source with its default options;
 *   - `false` or `null` — remove the built-in source;
 *   - a plain options object — options for the built-in source of that name,
 *     merged over its defaults (e.g. ``{ refresh_batching: 'eager' }``);
 *   - a plain options object with a `source_class` key — create a source of
 *     that class with the remaining options (for a custom source, or to
 *     replace a built-in one);
 *   - a source instance — used as is.
 *
 *   The `preset` source is only created by default if
 *   `citations.preset_bibliography_files` is set; otherwise set
 *   ``preset: { bibliography_files: [...] }`` to enable it.
 *
 *   Sources created here receive the `fs` and `fsRootFilePath`
 *   (= `fs_data_dir`) options unless their options set them.  Example::
 *
 *       sources: {
 *           arxiv: { refresh_batching: { min_batch: 50 } },
 *           doi: { refresh_batching: 'eager' },
 *           preset: { bibliography_files: ['bib/preset.yml'] },
 *           manual: false,
 *           mydb: { source_class: MyCitationSource, api_url: '...' },
 *       }
 *
 * - `citations.source_options` — options applied to every source created by
 *   `use_flm_processor()` (i.e., not to source instances), before the
 *   source-specific ones (e.g. ``{ user_agent: '...' }``).
 * - `citations.citation_manager_options` — extra options forwarded to the
 *   :class:`CitationDatabaseManager` constructor.
 * - `resources.rename_figure_template` — function ``(accessor) → string``
 *   used to generate target filenames for graphics resources.
 * - `resources.figure_filename_extensions` — array of extensions to append
 *   when resolving a graphics source name (default: `['', '.svg', '.png',
 *   '.jpeg', '.jpg']`).
 * - `resources.graphics_resources_fs_data_dir` — source directory for
 *   graphics files (defaults to `_this.config.fs_data_dir`).
 * - `resources.rename_use_file_hash` / `resources.read_file_content` — see
 *   :class:`FilesystemResourceRetriever`.
 * - `resources.make_resource_retriever_graphics_path` — override the entire
 *   graphics retriever factory.
 * - `resources.make_resource_processors_graphics_path` — override the entire
 *   graphics processor factory.
 * - `skip_check_update_existing_citations` / `skip_check_update_existing_resources`
 *   — forwarded to the :class:`ZooFLMProcessor` constructor.
 *
 * Requires `_this.zoo_flm_environment` to be already set (i.e.,
 * `use_flm_environment` must run before `use_flm_processor`).
 *
 * @param {Object} _this - The internal state object from `makeStandardZooDb`.
 * @returns {Promise<ZooFLMProcessor>} The configured FLM processor instance.
 */
export async function use_flm_processor(_this)
{
    if (_this.zoo_flm_environment == null) {
        throw new Error(`Cannot use ‘use_flm_processor()’ with no zoo_flm_environment set.`);
    }

    const flm_options = _this.config.flm_options ?? {};

    const fs = _this.config.fs;
    const fsp = _this.config.fs.promises;
    const fs_data_dir = _this.config.fs_data_dir;

    const citations_cache_dir =
          flm_options.citations?.cache_dir ?? '_zoodb_citations_cache';

    if (flm_options.citations?.cache_dir_create ?? true) {
        await fsp.mkdir(citations_cache_dir, { recursive: true });
    }

    const make_resource_retriever_graphics_path =
          flm_options.resources?.make_resource_retriever_graphics_path
          ?? default_make_resource_retriever_graphics_path;
    const make_resource_processors_graphics_path =
          flm_options.resources?.make_resource_processors_graphics_path
          ?? default_make_resource_processors_graphics_path;

    const citation_sources = make_citation_sources(
        flm_options.citations ?? {},
        { fs, fs_data_dir }
    );

    let flm_processor_config = {
        zoo_flm_environment: _this.zoo_flm_environment,
        flm_error_policy: _this.flm_error_policy,
        refs: flm_options.refs ?? {},
        citations: {
            sources: citation_sources,
            default_user_agent:
              flm_options.citations?.default_user_agent
              ?? `zoodb-bibliography-build-script/0.1 (https://github.com/phfaist/zoodb)`,
            csl_style: flm_options.citations?.csl_style,
            cache_fs: fs,
            cache_dir: citations_cache_dir,
            cache_entry_default_duration_ms:
                flm_options.citations?.cache_entry_default_duration_ms,
            skip_save_cache: flm_options.citations?.skip_save_cache ?? false,
            citation_manager_options: flm_options.citations?.citation_manager_options,
        },
        resource_collector_options: {
            resource_types: ['graphics_path'],
            resource_retrievers: {
                graphics_path:
                    make_resource_retriever_graphics_path(
                        flm_options.resources ?? {},
                        { fs, fs_data_dir, _this }
                    )
            },
            resource_processors: {
                graphics_path:
                    make_resource_processors_graphics_path(
                        flm_options.resources ?? {},
                        { fs, fs_data_dir, _this }
                    )
            },
        },
        skip_check_update_existing_citations:
            flm_options.skip_check_update_existing_citations,
        skip_check_update_existing_resources:
            flm_options.skip_check_update_existing_resources,
    };

    let zoo_flm_processor = new ZooFLMProcessor(flm_processor_config);

    return zoo_flm_processor;
}
