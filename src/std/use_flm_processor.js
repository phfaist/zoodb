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
 *   arXiv-to-DOI mappings, relative to `fs_data_dir`.
 * - `citations.preset_bibliography_files` — array of bibliography file paths
 *   to pre-load into the `preset` citation source.
 * - `citations.default_user_agent` — HTTP User-Agent header value for
 *   citation fetch requests.
 * - `citations.cache_dir` — directory for the citations disk cache (default:
 *   `'_zoodb_citations_cache'`).  Created automatically unless
 *   `citations.cache_dir_create` is `false`.
 * - `citations.cache_entry_default_duration_ms` — cache TTL in milliseconds.
 * - `citations.skip_save_cache` — set to `true` to skip writing the updated
 *   cache to disk.
 * - `citations.sources` — object mapping citation source names to source
 *   instances.  Setting a key to `false` or `null` removes the built-in
 *   source of that name; setting it to `true` keeps the built-in default.
 *   The built-in sources are `'arxiv'`, `'doi'`, `'manual'`, and `'preset'`.
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

    let citation_sources = {
        arxiv: new CitationSourceArxiv({
            override_arxiv_dois_file:
            flm_options.citations?.override_arxiv_dois_file,
            fs,
            fsRootFilePath: fs_data_dir,
        }),
        doi: new CitationSourceDoi(),
        manual: new CitationSourceManual(),
        preset: new CitationSourceBibliographyFile({
            bibliography_files:
            flm_options.citations?.preset_bibliography_files,
            fs,
            fsRootFilePath: fs_data_dir,
        }),
    };
    for (const [source_name, source_setting]
         of Object.entries(flm_options.citations?.sources ?? {})) {
        if (source_setting === false || source_setting === null) {
            delete citation_sources[source_name];
            continue;
        }
        if (source_setting === true) {
            if (citation_sources[source_name] == null) {
                throw new Error(
                    `Cannot activate source ‘${source_name}’ that is not known to `
                    + `use_flm_processor()`
                );
            }
            // keep this source in citation_sources as is
            continue;
        }
        // at this point, it has to be a source object instance
        citation_sources[source_name] = source_setting;
    }

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
