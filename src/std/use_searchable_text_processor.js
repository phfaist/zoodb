import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.use_searchable_text_processor");

import loMerge from 'lodash/merge';

import {
    SearchableTextFieldset,
    SearchableTextProcessor,
} from '../dbprocessor/searchabletext.js';
import {
    LLMSearchableDocTextValuesAssembler,
} from '../dbprocessor/searchabletextllm.js';



export function use_searchable_text_processor(_this)
{
    const searchable_text_options = _this.config.searchable_text_options ?? {};

    const searchable_text_doc_values_assembler =
          new LLMSearchableDocTextValuesAssembler({
              zoo_llm_environment: _this.zoo_llm_environment,
          });
    _this.searchable_text_fieldset = new SearchableTextFieldset({
        field_name_title: 'name',
        object_types: searchable_text_options.object_types,
        assemble_doc_text_values: (doc_values) => 
            searchable_text_doc_values_assembler.assemble_doc_text_values(doc_values),
        //
        // note that you can specify fields to be excluded from search in the schema.
    });
    let searchable_text_processor = new SearchableTextProcessor(
        _this.searchable_text_fieldset
    );
    return searchable_text_processor;
};
