The FLM processor
-----------------

.. code::

   import { ZooFlmProcessor } from '@phfaist/zoodb/dbprocessor/flmprocessor';


The FLM processor compiles the FLM content of the objects' fields into
fragments of the zoo's FLM engine (:js:class:`ZooFlmEngine`, see
:doc:`zoodb.zooflm`), and gives the engine what rendering them needs: the index
of every output context (the links to objects, and to labels defined in other
objects), the compiled citations, the collected images, and the snippets of the
standalone fields.  In the standard setup, :func:`use_flm_processor` creates it
over the engine ``zoodb.zoo_flm_engine`` (see :ref:`zoodb-std`); the processor
is then ``zoodb.zoo_flm_processor``.


Processing steps
~~~~~~~~~~~~~~~~

When the zoo is loaded (``process_zoo()``), the processor runs six steps:

1. **Fields.**  Every field that the schema marks with ``_flm`` becomes a
   fragment of the engine, in place (see `Compiling the FLM fields`_ below).
   The parse diagnostics go to ``obj._zoodb.flm_diagnostics``.

2. **Scan.**  One ``engine.scan()`` over all the fragments of the zoo finds, per
   object, the labels it defines (with their anchors and the source of what
   each label's point displays), the references it makes, the images it
   shows, the term definitions it holds (with their bodies) and the keys each
   of its fields cites (:js:meth:`~ZooFlmProcessor.object_scan`).  Labels are
   unique in the whole zoo: a label defined a second time is the Error
   ``zoodb.labels.duplicate``, on the object that defines it the second time.
   A standalone field that holds a reference, a citation, a label or a note is
   the Error ``zoodb.standalone.violation``.

3. **Index.**  For every output context, one entry per object and one per label
   defined in a field.  An object's entry has the label ``TYPE:ID``, the href
   that the context's ``object_href(TYPE, ID)`` returns, and a display: the
   result of ``refs[TYPE].formatted_ref_flm_text_fn(ID, object)`` (a standalone
   fragment or FLM text); by default the object's ``name`` when it is a
   standalone fragment, else its ID.  A label's entry links to the page of the
   object that defines it, with ``#`` and the anchor when one of the labels of
   its point forms it (``sec-…``, ``eq-…``: an anchor derived from a label, the
   same in every document, which every label of the point gets).  A point
   anchored on its number (a figure, a table, a theorem) links to the object's
   page alone, since each page numbers its own content.  The label's display
   is the source of the content its point shows (a section title, for
   instance) when the anchor is derived from a label and that source is
   standalone; otherwise it is the object's display.  The ``default`` context
   is installed last.  A reference that resolves neither in the zoo nor
   through the index is the Warning ``zoodb.refs.unresolved`` on its object.
   An object whose ``object_href`` returns ``null`` has no page in that
   context (an object type the site shows no page for): neither it nor the
   labels of its fields get an entry there.  A reference to it, or to one of
   those labels from another object, is then unresolved in that context's
   renders: the engine's ``flm.refs.unresolved`` (an Error, or a Warning when
   the engine's ``unresolved`` is ``'warn'``, as the standard setup's
   ``allow_unresolved_references`` sets it), and ``zoodb.ref.unresolved`` for
   the composer's ``ref()`` and ``refhref()``.  The processor's own check
   (``zoodb.refs.unresolved``) does not report it, since the object and its
   labels are in the zoo.  Any other value that is not a string is refused by
   ``engine.set_index()`` (a ``TypeError``), so that a forgotten ``return`` is
   caught.

4. **Citations.**  The cited keys are retrieved by the citation manager (see
   :doc:`zoodb.citationmanager`) and compiled by the citation compiler (CSL
   into FLM text, cached in ``cache_compiled_citations.json``), then installed
   with ``engine.set_citations()``.  With ``allow_unresolved_citations``, a key
   without a compiled citation shows as verbatim text.

5. **Graphics.**  Each image path is resolved against the directory of the
   object's source file and collected by the resource collector, whose graphics
   processor inspects the file (see :doc:`zoodb.resourcecollector`); the
   entries are installed with ``engine.set_graphics()``.

6. **Snippets.**  The HTML and text snippets of the standalone fragments that
   are not cached yet, in one ``engine.render_snippets()``: lists of objects,
   links and page titles then take them from the cache.

What the last scan found stays on the processor, as ``scan_results`` and
through :js:meth:`~ZooFlmProcessor.object_scan`.  The fragments of all objects,
in order, are :js:meth:`~ZooFlmProcessor.zoo_fragments`.

``object_scan(TYPE, ID)`` gives ``{ object_type, object_id, labels, refs,
cited, graphics, terms }``, each entry with the ``fragment`` (the field) it
was found in:

- ``cited`` holds every key the object cites, one entry ``{ key, cite_prefix,
  cite_key, origin, fragment }`` per key and field, so that two objects that
  cite a key both list it (the backreferences of a bibliography page);
  ``cite_prefix`` (lowercase) and ``cite_key`` name the key as the citation
  manager and the citation compiler do.  ``scan_results.cited`` lists each
  key of the zoo once, with its first citation: the keys whose citations are
  retrieved.

- ``terms`` holds the term definitions of the object's fields, as
  :js:meth:`ZooFlmEngine.scan` reports them (``labels``, ``anchor``,
  ``display``, ``body``, ``body_origin``).  A glossary lists each with the
  term, a link to the object's page (with ``#`` and the anchor when there is
  one), a fragment made from ``body`` with the origin ``body_origin`` (the
  field's, with the file position of the body, so that the body's
  diagnostics give the file's lines and its images are found), and the
  objects whose ``refs`` hold one of the term's ``labels``:

.. code::

   for (const entry of processor.scan_results.objects.values()) {
       for (const term of entry.terms) {
           const href = zoodb.zoo_object_permalink(entry.object_type, entry.object_id)
               + ((term.anchor != null) ? `#${term.anchor}` : '');
           const body = (term.body != null)
               ? engine.make_fragment(term.body, { origin: term.body_origin, layout: 'blocks' })
               : null;
           const referenced_in = [...processor.scan_results.objects.values()].filter(
               (o) => o.refs.some( (r) => term.labels.includes(r.label) ) );
           // ... place term.display, href, body and referenced_in on the page;
           // release the body fragment when the page is done
       }
   }


Options
~~~~~~~

The constructor's options (each one is described in the class reference below):

- ``engine`` *(required)*: the zoo's :js:class:`ZooFlmEngine`.
- ``contexts``: the output contexts of the index, ``{ NAME: { object_href } }``;
  by default one context, ``default``, with the hrefs ``/TYPE/ID``.
  ``object_href`` returns a string, or ``null`` for an object without a page.
- ``refs``, ``refs_defaults``: per object type, the display of references to
  the objects (``formatted_ref_flm_text_fn``).
- ``graphics_address``: the address written in the output for a collected
  image (the standard setup uses ``zoo_permalinks.graphics_resource``).
- ``citations``: the citation sources, the CSL style and the cache options;
  without it, the processor creates no citation manager.
- ``allow_unresolved_citations``: a cited key without a compiled citation
  shows as verbatim text instead of being reported by the renders.
- ``error_policy``: ``'abort'`` (the default) or ``'continue'``.
- ``skip_check_update_existing_citations``,
  ``skip_check_update_existing_resources``: on a reload, the citations and
  images already in the tables are not retrieved or collected again.
- ``resource_collector`` or ``resource_collector_options``: the resource
  collector, or the options of the one the processor creates.  Without a
  ``graphics_path`` retriever, no image is collected.

The processor also works without the standard setup, for instance in a test:

.. code:: javascript

   import jsonschema from 'jsonschema';
   import { ZooDb } from '@phfaist/zoodb';
   import { ZooFlmEngine } from '@phfaist/zoodb/zooflm/engine';
   import { ZooFlmProcessor } from '@phfaist/zoodb/dbprocessor/flmprocessor';

   const engine = await ZooFlmEngine.create();
   const processor = new ZooFlmProcessor({ engine, allow_unresolved_citations: true });
   const zoodb = new ZooDb({
       processors: [ processor ],
       schema_validator: new jsonschema.Validator(),
   });
   await zoodb.load_data(data);   // { schemas, objects }


Errors and warnings
~~~~~~~~~~~~~~~~~~~

The error policy (the option ``error_policy``; ``continue_with_errors`` in the
standard setup) decides what an Error does:

- ``'abort'`` (the default): the processing throws a :js:class:`ZooFlmError`
  at the first step that found an Error, listing its diagnostics.  The parse
  errors of an object's fields are thrown once all of its fields are parsed.
- ``'continue'``: every diagnostic is kept and the zoo loads; the renders show
  the backend's recovery markup where the content has an error.

An object's diagnostics are in ``obj._zoodb.flm_diagnostics``: the parse
diagnostics of its fields first, then those the processing found.  Those that
belong to no object (the ad hoc fragments below, and under ``'continue'`` the
citations that could not be retrieved) are in the processor's ``diagnostics``.
:js:func:`format_diagnostic` writes a diagnostic as one line, with the line and
column in the data file when the loader recorded the field's position
(``people/bob.yml#biography:4:12: error: …``).

Besides the diagnostics of the FLM content itself (the ``flm.*`` identifiers),
the processor reports:

.. list-table::
   :header-rows: 1
   :widths: 30 10 60

   * - identifier
     - severity
     - when
   * - ``zoodb.labels.duplicate``
     - Error
     - a label is defined a second time in the zoo
   * - ``zoodb.standalone.violation``
     - Error
     - a standalone field holds a reference, a citation, a label or a note
   * - ``zoodb.graphics.collect-failed``
     - Error
     - under ``'continue'``, an image could not be collected (under
       ``'abort'``, the collector's error is thrown)
   * - ``zoodb.refs.unresolved``
     - Warning
     - a reference resolves neither in the zoo nor through the index
   * - ``zoodb.labels.shadowed``
     - Warning
     - a label is also an object's label (``person:alice``); the object's entry
       is kept
   * - ``zoodb.index.display-not-standalone``
     - Warning
     - the content a label's point shows is not standalone; the label's entry
       shows the object's display
   * - ``zoodb.labels.no-href``
     - Warning
     - a label in an ad hoc fragment that has neither an object nor an ``href``
   * - ``zoodb.citations.retrieve-failed``
     - Warning
     - under ``'continue'``, a citation could not be retrieved (under
       ``'abort'``, the processing throws before anything is compiled)


Reloads
~~~~~~~

On a reload (``zoodb.update_objects()``, which the loader handler calls when
the zoo is loaded again), the zoo is processed again: the fields already
compiled are kept, those of the new objects are compiled, and the fragments of
the replaced objects are released once the processing has succeeded.  The
back-references, which the relations populator makes again, hold the
fragments of the relations they copy again (see `The fragments and their
origins`_), so that the scan results, the fragments and the data dumps after a
reload are those of a first load.  A reload that fails (with the loader
handler's ``throw_reload_errors: false``, as in a development server) leaves
the previous index, tables and snippets usable.


Ad hoc fragments
~~~~~~~~~~~~~~~~

Content that no object field holds, such as a handbook chapter or a computed
field, is compiled with :js:meth:`~ZooFlmProcessor.compile_flm_fragment`.  The
processor keeps the fragment with the zoo's fragments: the next
:js:meth:`~ZooFlmProcessor.process_auxiliary_resources` (and every later
processing of the zoo) scans it, collects its citations and images, and fills
its snippets.  The labels it defines get index entries under the href of the
object its origin names, or under the origin's ``href``:

.. code:: javascript

   const processor = zoodb.zoo_flm_processor;
   const chapter = processor.compile_flm_fragment(chapter_flm_text, {
       is_block_level: true,
       origin: { label: 'handbook/intro.flm', href: '/handbook/intro' },
   });
   await processor.process_auxiliary_resources();

   // ... render it with zoodb.zoo_flm_engine.render_document() ...

   processor.release_flm_fragments(chapter);


The data dump
~~~~~~~~~~~~~

:js:meth:`ZooDb.data_dump` calls the processor's
:js:meth:`~ZooFlmProcessor.process_data_dump`, which takes these options:

- ``flm_fragments_to_flm_text`` (the default): each fragment becomes its FLM
  source.  ``flm_fragments_keep_instances`` keeps the fragments instead (for
  code in the same process).
- ``flm_keep_zoodb_info_flm_fields`` (default ``true``): whether
  ``obj._zoodb.flm_fields`` and ``obj._zoodb.flm_diagnostics`` stay in the
  dump.
- ``flm_include_zooflm_data`` (default ``true``): whether ``data.zooflm``
  holds the engine's data, :js:meth:`ZooFlmEngine.dump`: ``{ settings_hash,
  index, citations, graphics, snippets }`` (the index of every context, the
  citations and graphics tables, and the snippets of the standalone fields).

The rest of each object's ``_zoodb`` is dumped as it is, including the field
positions the loader recorded (``flm_field_positions``); the option
``remove_zoodb_info`` of :js:meth:`ZooDb.data_dump` leaves out the whole
``_zoodb``.

A browser app renders the zoo's content from such a dump without running the
processor.  It creates an engine with the same core configuration as the zoo's
(``flm_options.engine`` of the standard setup), installs ``data.zooflm``,
compiles the fields with the field compiler, and renders pages:

.. code:: javascript

   import { ZooFlmEngine } from '@phfaist/zoodb/zooflm/engine';
   import { FLMSimpleContentCompiler } from '@phfaist/zoodb/dbprocessor/flmsimplecontent';

   const data = await (await fetch('/dat/zoodbdata.json')).json();

   // the core configuration of the zoo's engine (here the defaults); in a
   // browser, the engine fetches its WebAssembly module itself
   const engine = await ZooFlmEngine.create({ core: {} });
   engine.load(data.zooflm);

   const compiler = new FLMSimpleContentCompiler({ engine });
   for (const [id, obj] of Object.entries(data.db.objects.person)) {
       compiler.compile_object('person', id, obj, data.db.schemas.person);
   }

   const person = data.db.objects.person.alice;
   const { html } = engine.render_document({
       compose: ({ rdr, rdrblock, endnotes }) =>
           `<h1>${rdr(person.name)}</h1>${rdrblock(person.biography)}${endnotes()}`,
   });

:js:meth:`ZooFlmEngine.load` refuses a dump made under another core
configuration or by another build of the WebAssembly module (its
``settings_hash`` differs from the engine's).  The standalone fields compiled
afterwards take their snippets from the dump.


Reference
~~~~~~~~~

.. js:autoclass:: src/dbprocessor/flmprocessor.ZooFlmProcessor
   :short-name:
   :members:
   :exclude-members: ZooFlmProcessor, _index_entries, _label_entries, _object_display

.. js:autofunction:: src/dbprocessor/flmprocessor.flm_text_of_plain_text
   :short-name:

.. js:autofunction:: src/dbprocessor/flmprocessor.unresolved_citation_text
   :short-name:



Compiling the FLM fields
------------------------

.. code::

   import {
       FLMSimpleContentCompiler
   } from '@phfaist/zoodb/dbprocessor/flmsimplecontent';


The field compiler turns the FLM fields of objects into fragments of the zoo's
FLM engine, in place.  The FLM processor runs it as its first step.  Used
alone, it serves code that has the zoo's data and an engine but no processor:
a browser app that compiles the fields of a data dump (see `The data dump`_
above), or a script that compiles one object (``compile_object()`` works
without a zoo).


The ``_flm`` schema annotation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The schema says which fields hold FLM content, with the annotation ``_flm`` on
the field (see :ref:`zoodb-schemas-flmcontent`):

.. code:: yaml

   properties:
     name:
       type: string
       _flm: standalone
     biography:
       type: string
       _flm: full

The annotation's values, and the layout of the fragment each one gives:

.. list-table::
   :header-rows: 1
   :widths: 30 45 25

   * - ``_flm``
     - the field
     - layout
   * - absent, ``false``, ``null``
     - is not FLM; its value stays as it is
     -
   * - ``true``, ``'full'``
     - full FLM: labels, references, citations, notes
     - ``auto`` (inline, unless the content holds a paragraph break or a
       block)
   * - ``'standalone'``
     - standalone FLM: no reference, citation, label or note, so that it can
       be rendered on its own (an object's name or title); rendered through
       the engine's snippet cache
     - ``inline``
   * - ``'block_level'``
     - full FLM, as blocks: paragraphs, lists, figures
     - ``blocks``
   * - ``{ enabled, standalone, is_block_level }``
     - as given; ``enabled`` and ``standalone`` default to ``false``,
       ``is_block_level`` to ``null``
     - ``blocks`` when ``is_block_level`` is ``true``; ``inline`` when it is
       ``false`` or the field is standalone; ``auto`` otherwise

:func:`parse_schema_flm_options` reads the annotation, and
:func:`flm_options_layout` gives the layout.


The fragments and their origins
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The origin of a field's fragment is ``{ object_type, object_id, field,
source_path }`` (:func:`field_origin`), and its label is ``source_path#field``:
``people/bob.yml#biography``, or ``people/bob.yml#topics.0.detail`` for a field
inside a list (keys and list indexes joined with dots).  When the loader
recorded where the field's value starts in its file
(``obj._zoodb.flm_field_positions``, see :doc:`zoodb.dbdataloader`), the origin
carries that position, and the diagnostics give the line and column in the data
file.

A back-reference made by the relations populator (see
:doc:`zoodb.dbprocessor-relations`) is a copy of another object's relation,
and the populator records it in the target object's ``_zoodb.copied_fields``
(read by :func:`copied_field_source`).  Its FLM fields (a relation's
``detail``) are not compiled on their own: at every processing of the zoo, a
reload included, such a field holds the fragment of the field it copies,
compiled once as that object's field (with its origin and its file position;
compiled first if the copy comes earlier in the zoo).  A diagnostic in it is
that object's and names the place in the data file where the text is written
(``people/alice.yml#relations.parents.0.detail:7:13``), in the processing and
in every page that renders the copy, and its images are found from that file.
In the scan (:js:meth:`~ZooFlmProcessor.object_scan`), the references, the
citations and the images in it count for both objects, as the text shows on
both objects' pages, and the labels and the term definitions it holds for the
relation's object only (they are defined once).
:js:meth:`~FLMSimpleContentCompiler.object_fragments` leaves such a field out
(its fragment is the other object's) and
:js:meth:`~FLMSimpleContentCompiler.object_field_fragments` flags it.

``compile_object()`` writes the paths of the compiled fields to
``obj._zoodb.flm_fields`` and their parse diagnostics to
``obj._zoodb.flm_diagnostics``.  A field that already holds a live fragment of
the engine is kept as it is.  A parse never throws for the content: under the
``'abort'`` policy (the default), once all the fields of an object are parsed,
a :js:class:`ZooFlmError` lists the object's errors; under ``'continue'``,
every fragment is kept.

The fragments are rendered through the engine: in a page, with
:js:meth:`ZooFlmEngine.render_document` and its composer helpers; a standalone
field also on its own, with :js:meth:`ZooFlmEngine.snippet` (see
:doc:`website11ty`).


Reference
~~~~~~~~~

.. js:autoclass:: src/dbprocessor/flmsimplecontent.FLMSimpleContentCompiler
   :short-name:
   :members:
   :exclude-members: FLMSimpleContentCompiler

.. js:autofunction:: src/dbprocessor/flmsimplecontent.parse_schema_flm_options
   :short-name:

.. js:autofunction:: src/dbprocessor/flmsimplecontent.flm_options_layout
   :short-name:

.. js:autofunction:: src/dbprocessor/flmsimplecontent.field_origin
   :short-name:

.. js:autofunction:: src/dbprocessor/flmsimplecontent.copied_field_source
   :short-name:
