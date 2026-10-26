// import debug_mod from 'debug';
// const debug = debug_mod("zoodb.std.use_searchable_text_processor");

// import loMerge from 'lodash/merge.js';

import {
    SearchableTextFieldset,
    SearchableTextProcessor,
} from '../dbprocessor/searchabletext.js';
import {
    FLMSearchableDocTextValuesAssembler,
} from '../dbprocessor/searchabletextflm.js';



/**
 * Set up the StandardZooDb to include a :class:`SearchableTextProcessor`
 * database processor.
 *
 * A :class:`FLMSearchableDocTextValuesAssembler` over the zoo's FLM engine
 * (`_this.zoo_flm_engine`) is created to assemble the text documents for
 * searching.  A :class:`SearchableTextFieldset` is
 * created with standard settings.
 *
 * The ``searchable_text_options.object_types`` config option is inspected; set
 * this to an array of object type names that we'd like to be able to search
 * for.  In the text of an FLM field, each citation is shown as the cited
 * work's entry in place of its mark; with
 * ``searchable_text_options.flm_citations_in_place: false``, a citation is
 * its mark alone (the assembler's option `citations_in_place`).  With
 * ``searchable_text_options.flm_pieces: true``, the text of an FLM field also
 * holds its footnotes, and, with the marks kept, the works it cites (the
 * assembler's option `pieces`).
 */
export function use_searchable_text_processor(_this)
{
    const searchable_text_options = _this.config.searchable_text_options ?? {};

    // without an FLM engine, the fieldset's default assembly (the values as
    // strings)
    const searchable_text_doc_values_assembler = (_this.zoo_flm_engine != null)
          ? new FLMSearchableDocTextValuesAssembler({
              engine: _this.zoo_flm_engine,
              citations_in_place: searchable_text_options.flm_citations_in_place ?? true,
              pieces: searchable_text_options.flm_pieces ?? false,
          })
          : null;
    _this.searchable_text_fieldset = new SearchableTextFieldset({
        field_name_title: 'name',
        object_types: searchable_text_options.object_types,
        assemble_doc_text_values: (searchable_text_doc_values_assembler != null)
            ? (doc_values) => searchable_text_doc_values_assembler.assemble_doc_text_values(doc_values)
            : undefined,
        //
        // note that you can specify fields to be excluded from search in the schema.
    });
    let searchable_text_processor = new SearchableTextProcessor(
        _this.searchable_text_fieldset
    );
    return searchable_text_processor;
}
