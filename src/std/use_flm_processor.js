import debug_mod from 'debug';
const debug = debug_mod("eczoodbjs.use_flm_processor");

import {
    $$kw, ZooTextFragmentRenderer, ZooFLMEnvironment, repr, CitationsProvider
} from '../zooflm/index.js';

import { ZooFLMProcessor } from '../dbprocessor/flmprocessor.js';


import { CitationSourceArxiv } from '../citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../citationmanager/source/doi.js';
import { CitationSourceManual } from '../citationmanager/source/manual.js';
import { CitationSourceBibliographyFile } from '../citationmanager/source/bibliographyfile.js';

import { FilesystemResourceRetriever } from '../resourcecollector/retriever/fs.js';

import { FLMGraphicsResourceProcessor } from '../resourcecollector/processor/flmgraphicsprocessor.js';

import loMerge from 'lodash/merge.js';



const default_figure_template_name =
      (f) => `fig-${f.basenameshort()}.${f.b32hash(4)}${f.lowerext()}`;


export function use_flm_processor(_this)
{
    if (_this.zoo_flm_environment == null) {
        throw new Error(`Cannot use ‘use_flm_processor()’ with no zoo_flm_environment set.`);
    }

    const flm_options = _this.config.flm_options ?? {};

    const fs = _this.config.fs;
    const fs_data_dir = _this.config.fs_data_dir;

    let flm_processor_config = {
        zoo_flm_environment: _this.zoo_flm_environment,
        flm_error_policy: _this.flm_error_policy,
        refs: flm_options.refs ?? {},
        citations: {
            sources: {
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
            },
            default_user_agent:
              flm_options.citations?.default_user_agent
              ?? `zoodb-bibliography-build-script/0.1 (https://github.com/phfaist/zoodb)`,
            csl_style: flm_options.citations.csl_style,
        },
        resource_collector_options: {
            resource_types: ['graphics_path'],
            resource_retrievers: {
                graphics_path: new FilesystemResourceRetriever({
                    copy_to_target_directory: false,
                    rename_file_template:
                        flm_options.resources?.rename_figure_template
                        ?? default_figure_template_name,
                    extensions:
                        flm_options.resources?.figure_filename_extensions
                        ?? [ '', '.svg', '.png', '.jpeg', '.jpg' ],
                    //target_directory: './_output_resource_graphics_files/',
                    fs,
                    source_directory:
                        flm_options.resources?.graphics_resources_fs_data_dir
                        ?? fs_data_dir
                }),
            },
            resource_processors: {
                'graphics_path': [
                    new FLMGraphicsResourceProcessor({
                        zoo_flm_environment: _this.zoo_flm_environment,
                        fs,
                    }),
                ],
            },
        }
    };

    let zoo_flm_processor = new ZooFLMProcessor(flm_processor_config);

    return zoo_flm_processor;
};
