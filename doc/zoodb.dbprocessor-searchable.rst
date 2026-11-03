Index searchable content
------------------------

.. code::

   import {
       SearchableTextFieldset, SearchableTextProcessor
   } from '@phfaist/zoodb/dbprocessor/searchabletext';

   import {
       FLMSearchableDocTextValuesAssembler
   } from '@phfaist/zoodb/dbprocessor/searchabletextflm';


The searchable text processor attaches to every object of the chosen types a flat
search document, ``{ _z_otype, id, title, FIELD: text, ... }`` containing the object
type, the ID, the title (the field that the schema's ``_zoo_titlefield`` names,
by default ``name``) and the text of each searchable field.  The document is
stored as ``obj._zoodb.searchable_text_doc``.  A site builds its search index
from these documents, for instance with a client-side search library such as
`Lunr.js <https://lunrjs.com/>`_.

A :class:`SearchableTextFieldset` specifies which fields go into the documents and
how their values become text.  By default, every field of the schemas goes in,
except the auto-populated ones (``_auto_populated``), those whose name starts
with ``_``, those marked ``_zoo_search: { include_in_index: false }`` in the
schema, and those listed in its option ``exclude_fields``.  Nested fields are
flattened in the search document's keys, with the nested keys combined with
an underscore (e.g.,  ``relations: { parents: {...}}`` is mapped to
``relations_parents``).  List items are concatenated into one field.
The :class:`SearchableTextProcessor` builds the documents when the zoo is
loaded, and again for the objects of each reload.  A data dump leaves them out
unless the dump option ``searchabletext_remove_doc_info`` is ``false``.


FLM fields
~~~~~~~~~~

The values of FLM fields are fragments of the zoo's FLM engine (see
:doc:`zoodb.dbprocessor-flm`).  :class:`FLMSearchableDocTextValuesAssembler`
turns them into plain text through the engine:

- a standalone fragment (an object's name, say) gives the text snippet that
  the FLM processor cached;
- the other fragments of a document are rendered as text in one
  ``engine.render_text()`` call, each field's text rendered alone: a reference
  to a label defined in another field shows the label, which a search index
  does not mind.

In the search text, each citation is replaced by the cited work's entry,
between brackets (``a code [A. Author, “A title”, arXiv:1234.5678].``), so
that an object can be found by the authors and titles of the works it cites.
With the option ``citations_in_place: false``, a citation is shown by its mark
alone (``[1]``).  A footnote is shown by its mark alone (``¹``); with the
option ``pieces: true``, each field's text ends with its footnotes and, if the
citation marks are kept, with the list of the works it cites.  A standalone
fragment holds neither a citation nor a footnote, so its snippet serves either
way.

Its renders use the ``'continue'`` error policy by default, so that the search
text is made whatever the content holds; the FLM processor and the page renders
report the content's errors.  The searchable text processor needs the fields
compiled, so it comes after the FLM processor in the zoo's processors.

In the standard setup, :func:`use_searchable_text_processor` creates the
assembler over ``zoodb.zoo_flm_engine`` (its option ``citations_in_place``
from ``searchable_text_options.flm_citations_in_place``, default ``true``, and
``pieces`` from ``searchable_text_options.flm_pieces``, default ``false``),
the fieldset (with the title under the key ``name`` instead of ``title``, and
the object types of ``searchable_text_options.object_types``) and the
processor, after the FLM processor.  Without the standard setup:

.. code:: javascript

   const assembler = new FLMSearchableDocTextValuesAssembler({ engine });
   const fieldset = new SearchableTextFieldset({
       field_name_title: 'name',
       object_types: [ 'person' ],
       assemble_doc_text_values:
           (doc_values) => assembler.assemble_doc_text_values(doc_values),
   });
   const searchable_text_processor = new SearchableTextProcessor(fieldset);

   // in the zoo's processors, after the FLM processor:
   //   processors: [ flm_processor, searchable_text_processor ]


Reference
~~~~~~~~~

.. js:autoclass:: src/dbprocessor/searchabletext.SearchableTextFieldset
   :short-name:
   :members:
   :exclude-members: SearchableTextFieldset

.. js:autoclass:: src/dbprocessor/searchabletext.SearchableTextProcessor
   :short-name:
   :members:
   :exclude-members: SearchableTextProcessor

.. js:autoclass:: src/dbprocessor/searchabletextflm.FLMSearchableDocTextValuesAssembler
   :short-name:
   :members:
   :exclude-members: FLMSearchableDocTextValuesAssembler
