import debug_mod from 'debug';
const debug = debug_mod("eczoodbjs.use_llm_processor");

import {
    $$kw, ZooTextFragmentRenderer, ZooLLMEnvironment, repr, CitationsProvider
} from '../zoollm/index.js';

import { ZooLLMProcessor } from '../dbprocessor/llmprocessor.js';


import { CitationSourceArxiv } from '../citationmanager/source/arxiv.js';
import { CitationSourceDoi } from '../citationmanager/source/doi.js';
import { CitationSourceManual } from '../citationmanager/source/manual.js';
import { CitationSourceBibliographyFile } from '../citationmanager/source/bibliographyfile.js';

import { FilesystemResourceRetriever } from '../resourcecollector/retriever/fs.js';

import { LLMGraphicsResourceProcessor } from '../resourcecollector/processor/llmgraphicsprocessor.js';

import loMerge from 'lodash/merge.js';



const default_figure_template_name =
      (f) => `fig-${f.basenameshort()}.${f.b32hash(4)}${f.lowerext()}`;


export function use_llm_processor(_this)
{
    if (_this.zoo_llm_environment == null) {
        throw new Error(`Cannot use ‘use_llm_processor()’ with no zoo_llm_environment set.`);
    }

    const llm_processor_options = _this.config.llm_processor_options ?? {};

    let llm_processor_config = {
        zoo_llm_environment: _this.zoo_llm_environment,
        llm_error_policy: _this.llm_error_policy,
        refs: {},
        citations: {
            sources: {
                arxiv: new CitationSourceArxiv({
                    override_arxiv_dois_file:
                        llm_processor_options.citations?.override_arxiv_dois_file,
                    fs: _this.config.fs,
                }),
                doi: new CitationSourceDoi(),
                manual: new CitationSourceManual(),
                preset: new CitationSourceBibliographyFile({
                    bibliography_files:
                        llm_processor_options.citations?.preset_bibliography_files,
                    fs: _this.config.fs,
                }),
            },
            default_user_agent:
              llm_processor_options.citations?.default_user_agent
              ?? `zoodb-bibliography-build-script/0.1 (https://github.com/phfaist/zoodb)`,
            csl_style: llm_processor_options.citations.csl_style,
        },
        resource_collector_options: {
            resource_types: ['graphics_path'],
            resource_retrievers: {
                graphics_path: new FilesystemResourceRetriever({
                    copy_to_target_directory: false,
                    rename_file_template:
                        llm_processor_options.resource_collector?.rename_figure_template
                        ?? default_figure_template_name,
                    extensions:
                        llm_processor_options.resource_collector?.figure_filename_extensions
                        ?? [ '', '.svg', '.png', '.jpeg', '.jpg' ],
                    //target_directory: './_output_resource_graphics_files/',
                    fs: _this.config.fs,
                    source_directory:
                        llm_processor_options.resource_collector?.graphics_resources_fs_data_dir
                }),
            },
            resource_processors: {
                'graphics_path': [
                    new LLMGraphicsResourceProcessor({
                        zoo_llm_environment: _this.zoo_llm_environment,
                        fs: _this.config.fs,
                    }),
                ],
            },
        }
    };

    let zoo_llm_processor = new ZooLLMProcessor(llm_processor_config);

    return zoo_llm_processor;
};
