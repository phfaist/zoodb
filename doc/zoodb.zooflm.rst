FLM content compiling and rendering
===================================

ZooDb processes FLM content (see :ref:`zoodb-flm` for the markup) with flm-rs,
the Rust implementation of FLM, compiled to WebAssembly together with a feature
of ZooDb's own.  The compiled module is part of the package
(``src/zooflm/_wasm/``), so using ZooDb needs no Rust toolchain.

On the JavaScript side, the module is driven by the *engine*,
:js:class:`ZooFlmEngine`: one object per zoo that holds the parsed fragments
and the tables that rendering reads (the index of cross-references, the
compiled citations, the images), and that renders pages, single fragments and
snippets to HTML, plain text and LaTeX.

The engine knows nothing about files, the network, the zoo's objects or its
schemas.  That is the job of the FLM processor (see
:doc:`zoodb.dbprocessor-flm`), which compiles the objects' FLM fields into
fragments of the engine, scans them, and fills the engine's tables.  Under the
standard setup (see :ref:`zoodb-std`) the zoo's engine is
``zoodb.zoo_flm_engine``, and its tables are filled by the time the zoo is
loaded: a site's templates only render with it.

This API replaces the JavaScript transpilation of the Python FLM library that
ZooDb used up to version 0.2.


Modules
-------

.. code::

   // the engine, fragments, diagnostics and the composer's helpers
   import {
       ZooFlmEngine, ZooFlmFragment, ZooFlmError, format_diagnostic, value_not_empty,
   } from '@phfaist/zoodb/zooflm/engine';

   // the citation compiler (CSL into FLM text)
   import {
       CitationCompiler, install_csl_flm_output_format,
   } from '@phfaist/zoodb/zooflm/citationcompiler';

``@phfaist/zoodb/zooflm`` re-exports all of the above.  Code meant for a
browser may import it as well as the modules above (the citation compiler
reaches the ``path`` builtin through the atomic file writer, so a bundler must
provide it); see `The WebAssembly module`_ for the bundler.
The engine module re-exports the names of the fragment and diagnostics modules one by one rather
than with ``export * from``, so that Parcel 2 bundles code that imports them
through it (though note that Parcel 2.13 with scope hoisting
appears to mis-bundle a module that imports
names from a module it also re-exports with ``export *``).


Creating an engine
------------------

.. code::

   import { ZooFlmEngine } from '@phfaist/zoodb/zooflm/engine';

   const engine = await ZooFlmEngine.create({
       core: {
           settings: {
               userdefs: { macros: { zoo: { content: 'the Zoo' } } },
               graphics: { global: true },
           },
           off: [ 'annotations' ],
       },
       error_policy: 'abort',     // the default of every call
       unresolved: 'error',       // how references that resolve to nothing are reported
   });

:js:meth:`ZooFlmEngine.create` loads the core's WebAssembly module the first
time (see `The WebAssembly module`_) and builds the core's registry (the
language and the processing, fixed for the engine's life) from the core
configuration.  Its options:

- ``core`` -- the core's configuration, as data (next section).

- ``error_policy`` (``'abort'`` or ``'continue'``) and ``unresolved``
  (``'error'`` or ``'warn'``) -- the defaults of the calls that take these
  options (see `Diagnostics and the error policy`_).

- ``render_value_options`` -- how the composer's ``rdr()`` renders an array:
  ``list_joiner`` (default ``''``), ``list_item_wrapper`` (default: each item
  in ``<span class="paragraph-in-list">``) and ``list_full_wrapper``.

The standard setup creates the zoo's engine with ``use_flm_engine``, from
``flm_options.engine`` (the core configuration
below, and ``render_value_options``), ``allow_unresolved_references``
(``unresolved: 'warn'``) and ``continue_with_errors`` (``error_policy:
'continue'``).

An engine holds wasm memory: :js:meth:`ZooFlmEngine.free` releases it, after
which every call throws.


The core's settings as data
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The core configuration has five keys; a key left out, or ``null``, takes its
default:

- ``settings`` -- the settings of flm-rs's standard features, one map per
  feature, keyed by the feature's name, with the keys flm-rs defines for that
  feature.  For instance ``{ graphics: { global: true } }`` makes
  ``\includegraphics`` usable outside floats, ``{ cells: { global: true } }``
  does the same for the ``cells`` environment, and ``{ userdefs: { macros: {
  ... }, environments: { ... } } }`` declares user definitions (macros and
  environments defined by substitution; content cannot define its own).  The
  keys a feature binds to the render request (``html.heading_tags``,
  ``text.root_heading_level``, ``latex-recomposed.style_stem``, ...) apply to
  every run.  The keys that a run's own options set (``refs.unresolved`` by
  ``unresolved``, and ``text.width``, ``text.link_addresses`` and
  ``latex-recomposed.drop_comments`` by ``width``, ``link_addresses`` and
  ``drop_comments`` of the text and LaTeX runs) are refused in the settings,
  each named with the option that sets it.

- ``off`` -- the names of standard features to switch off, such as
  ``['annotations', 'theorems']``.

- ``dollar_math`` -- whether ``$...$`` and ``$$...$$`` delimit mathematics
  (default ``false``: a ``$`` in content is reported as ambiguous, and
  ``\$`` writes a dollar sign).

- ``srcset`` -- alternative image sources for raster images.  Leave it unset
  (the standard setup does not pass it): the ZooDb stage that writes them
  needs a change in flm-rs that is not available yet, and under this option
  every image is the Error ``zoodb.graphics.publish-failed``.

- ``link_target_blank`` -- whether links of ``\href``, ``\url`` and
  ``\email`` in the HTML output open in a new tab (default ``true``).  Such a
  link gets ``target="_blank"`` unless its address is within the site, that
  is, starts with ``#``, or with ``/`` but not ``//``.  A link that contains
  another link, or that is written inside one (such as an ``\href`` in the
  text of a ``\hyperref``), is written without it, because HTML does not allow
  a link inside a link.  The text and LaTeX outputs are not affected.

The standard features are ``textstyles``, ``literals``, ``blocks``,
``index``, ``refpoints``, ``numbering``, ``math``, ``refs``, ``headings``,
``verbatim``, ``lists``, ``xnotes``, ``href``, ``defterm``, ``theorems``,
``quote``, ``annotations``, ``graphics``, ``floats``, ``cells``,
``citations``, ``input``, ``userdefs``, ``lowering``, ``meta``, ``toc`` and
``pieces``, then those of the outputs and workflows (``text``, ``latex``,
``latex-recomposed``, ``latex-rendered``, ``html``, ``check``).
:js:meth:`ZooFlmEngine.features` lists them with the JSON Schema of each
one's settings.  An unknown key, feature or setting makes ``create()`` throw a
plain ``Error`` that names it.

:js:attr:`ZooFlmEngine.settings_hash` is a hash of the core configuration and
of the module's versions (:js:attr:`ZooFlmEngine.core_version`, ``{ binding,
flm_core }``): two engines with the same hash read and render FLM alike.
:js:attr:`ZooFlmEngine.build_diagnostics` holds the diagnostics of the
registry build.


The WebAssembly module
~~~~~~~~~~~~~~~~~~~~~~

The module is ``src/zooflm/_wasm/zoodb_flm_wasm_bg.wasm`` (about 5.3 MB, 1.8
MB gzipped), beside its JavaScript glue, its TypeScript declarations and
``BUILD_INFO.json`` (the versions it was built from).  These files are
generated by ``yarn build:wasm`` from the crate ``rust/zoodb-flm-wasm/`` and
committed; only a change to the crate needs the Rust toolchain.

The engine loads the module once, the first time an engine is created or the
features are listed.  Under Node it reads the file from disk.  A browser
bundle needs a bundler that honors the ``browser`` field of the package's
``package.json``, which selects the variant of the engine's loader that
fetches the file, and that copies the file named by
``new URL('./_wasm/zoodb_flm_wasm_bg.wasm', import.meta.url)`` as an asset.
Parcel 2 does both (verified with the Error Correction Zoo, whose code graph
creates the engine in the browser).  Parcel also needs ``packageExports:
true`` to resolve the package's subpath exports (``"@parcel/resolver-default":
{ "packageExports": true }`` in the project's ``package.json``).


Fragments
---------

A fragment (:js:class:`ZooFlmFragment`) is a piece of FLM source parsed by the
core, which keeps the parsed tree and refers to it by a handle.  A fragment is
parsed once and can be placed in any number of renders.  The FLM processor
makes one fragment per FLM field of every object; other code makes fragments
with :js:meth:`ZooFlmEngine.make_fragment`:

.. code::

   const f = engine.make_fragment('Bob is a friend of \\ref{person:alice}.', {
       origin: {
           object_type: 'person', object_id: 'bob', field: 'biography',
           source_path: 'people/bob.yml',
       },
       standalone: false,
   });

The options:

- ``origin`` -- where the source comes from: ``object_type``, ``object_id``,
  ``field``, ``source_path``, ``label``, all optional (a string is taken as the
  label).  The fragment's *canonical label* is the label given, else
  ``source_path#field``, else ``object_type:object_id#field``, else an
  anonymous ``fragment:N``.  The core, the scan's results and the graphics
  table refer to a fragment by this label, and diagnostics name it.  The keys
  ``start_line``, ``start_col``, ``indent`` and ``approx`` say where the source
  starts in its file (see `Diagnostics and the error policy`_).

- ``layout`` -- how the top level is laid out: ``'auto'`` (inline, unless the
  source holds a paragraph break or a block), ``'inline'`` (no paragraphs; a
  blank line or a block is reported) or ``'blocks'`` (paragraphs are built).
  The default is ``'inline'`` for a standalone fragment and ``'auto'``
  otherwise.

- ``standalone`` -- a standalone fragment holds nothing that belongs to a
  document as a whole: no label, no reference, no citation, no footnote,
  nothing numbered.  It renders the same in every document and on its own, so
  it is rendered through the snippet cache (see `Snippets`_).  Names and
  titles are standalone fields (the schema annotation ``_flm: standalone``).
  The scan checks it: a construct of that kind in a standalone fragment is the
  Error ``zoodb.standalone.violation``.

- ``error_policy`` -- applied to the parse diagnostics: under ``'abort'``, a
  parse Error throws a :js:class:`ZooFlmError` and no fragment is kept.

A fragment is read-only.  Its properties are ``source``, ``origin`` (with
``label`` always set), ``layout``, ``standalone``, ``handle``,
``diagnostics`` (those of the parse), ``empty`` (the source holds only
whitespace, comments and paragraph breaks) and ``released``.

:js:meth:`ZooFlmEngine.release` frees fragments (their handles and their
snippets; the FLM processor releases the fragments of replaced objects after a
reload); a released fragment used again is a plain ``Error``.
:js:meth:`ZooFlmEngine.parses` tells whether a text is valid FLM, keeping
nothing, and :js:func:`value_not_empty` whether a value (a fragment included)
holds anything.

:js:meth:`ZooFlmEngine.parse_fields` reads the fields of an FLM data file (its
``\begin{field}{NAME} ... \end{field}`` blocks) with their byte ranges; the
FLM-files data loader calls it.


Rendering a page: the composer protocol
---------------------------------------

A page is rendered by :js:meth:`ZooFlmEngine.render_document` with a
*composer*: a plain, synchronous JavaScript function that receives helpers and
returns the page's HTML as a string.  The FLM content the composer places is
rendered as one FLM document, so that across the page the footnotes and the
citations are numbered and listed together, equations and figures are
numbered, and references between the placed fragments resolve.  This is the
person page of the `zoodb-example <https://github.com/phfaist/zoodb-example>`_
site, shortened:

.. code::

   const { html, diagnostics } = zoodb.zoo_flm_engine.render_document({
       compose: ({ ne, rdr, rdrblock, ref, endnotes }) => {
           let s = `<h1>${ rdr(person.name) }</h1>`;
           s += `<div>${ rdrblock(person.biography) }</div>`;
           if (ne(person.relations?.spouse)) {
               s += `<p>Spouse: ${ ref('person', person.relations.spouse) }</p>`;
           }
           for (const friend of person.relations?.friends ?? []) {
               s += `<p>${ ref('person', friend.person_id) } ${ rdr(friend.friend_detail) }</p>`;
           }
           s += endnotes();
           return s;
       },
   });
   // under the 'abort' policy an Error has thrown; print the warnings
   for (const d of diagnostics) {
       console.warn(format_diagnostic(d));
   }

The engine calls the composer once.  ``rdr()`` of a fragment that is not
standalone *places* it as a tree of the document and returns a marker, an
empty tag of the form ``<flm:K:tree:N/>``; ``endnotes()`` and ``piece()``
return markers too, and every other helper returns its real string.  The
engine then renders the placed fragments as one document, in the order in
which they were first placed, with the index of the call's context, and
replaces each marker in the composer's string by the HTML of its tree or
piece.  ``K`` is a token of the call: a marker produced by another call is
never substituted, and any marker that the call did not produce is the Error
``zoodb.compose.stray-marker``.

The composer may therefore only branch on data (``ne()``, relations, names),
and never on the rendered HTML obtained through render method calls.

The helpers:

- ``ne(x)`` -- :js:func:`value_not_empty`: ``false`` for ``null``,
  ``undefined``, ``''``, an empty array and an empty fragment, ``true``
  otherwise (numbers and booleans included).

- ``rdr(x)`` -- ``null`` and ``undefined`` give ``''``; a string is
  HTML-escaped; a number or a boolean gives its text; an array gives its items
  through ``rdr()``, wrapped and joined per the render value options; a
  standalone fragment gives its HTML snippet; any other fragment is placed and
  gives its marker (placed once: a later ``rdr()`` of it returns the same
  marker).  Anything else, such as a zoo object, throws a ``TypeError`` naming
  what it got.

- ``rdrblock(x)`` -- as ``rdr()``, a fragment placed with its paragraphs built
  (the ``'blocks'`` layout), standalone or not.  A fragment given to both
  ``rdr()`` and ``rdrblock()`` on one page is placed twice, so a label in it
  is reported as a duplicate.

- ``ref(object_type, object_id, { display_flm })`` -- a link to a zoo object
  through the context's index, built by ZooDb:
  ``<a href="HREF" class="href-ref ref-TYPE">DISPLAY</a>``, the display being
  the HTML snippet of the index entry's display, or of ``display_flm`` (FLM
  text or a standalone fragment).  A missing entry is the diagnostic
  ``zoodb.ref.unresolved``: under ``unresolved: 'error'`` an Error and the
  label written as text, under ``'warn'`` a Warning and
  ``<span class="href-ref ref-unresolved">TYPE:ID</span>``.

- ``refhref(object_type, object_id)`` -- the address alone, or ``null`` with
  the same diagnostic.

- ``endnotes()`` -- a marker for the pieces placed after the content, in the
  document's order: the list of footnotes, then the bibliography.

- ``piece(name)`` -- a marker for one piece by its name
  (``flm.xnotes.list.footnote``, ``flm.citations.bibliography``), replaced by
  nothing when the page has no such piece.  ``endnotes()`` leaves out the
  pieces placed by ``piece()``, and a piece with content that no marker places
  is the Warning ``zoodb.compose.piece-not-placed``.

- ``escape(s)`` -- HTML escaping.

The result is ``{ html, definitions, requires, diagnostics, has_errors }``:
``requires`` lists the identifiers of the style and script definitions that
the page's content needs and ``definitions`` those definitions (see `The
stylesheet and the scripts`_).  ``render_document()`` also takes
``context`` (default ``'default'``), ``unresolved``, ``error_policy``,
``render_value_options`` (over the engine's) and ``render_options``.

``render_options`` overrides the engine's ``settings`` for this call only.  It
has the same shape (one object per feature), and each key it gives replaces
the corresponding setting as a whole (an ``xnotes.kinds`` map replaces the
whole map of kinds).  An unknown key, a value the feature cannot read, or a
key that another option of the call sets (``refs.unresolved``: use
``unresolved``) throws an ``Error`` that names it.  For instance, a preview
that places no endnotes can leave out the lists it would not place, which then
are not built and draw no ``zoodb.compose.piece-not-placed``:

.. code::

   engine.render_document({
       compose: ({ rdrblock }) => rdrblock(preview),
       render_options: {
           pieces: { exclude: ['flm.xnotes.list.footnote', 'flm.citations.bibliography'] },
       },
   });

The footnote and citation marks stay, linking to notes that are not on the
page: flm-rs has no render option that leaves them out.

Some settings, such as ``citations.placement``, ``citations.heading_title``
and ``xnotes.kinds``, are fixed when the engine is created (their schemas in
``ZooFlmEngine.features()`` mark them ``"x-flm-bind": "registry"``).  You can
still give them in ``render_options``, at a cost: the first call with a given
set of such values makes the engine build a second configuration for them (a
few milliseconds), which it keeps for later calls, and each such call parses
its fragments again.  For instance, a pane that shows the lists of notes and
cited works without their headings:

.. code::

   engine.render_document({
       compose: ({ rdrblock, endnotes }) => rdrblock(description) + endnotes(),
       render_options: {
           citations: { heading_title: null },
           xnotes: { kinds: { ...kinds, footnote: { ...kinds.footnote, title: null } } },
       },
   });

where ``kinds`` holds the engine's own settings of ``xnotes.kinds`` (or, for
the default settings, ``{ footnote: { commands: ['footnote'], label_type:
'fn', words: { base: { one: 'Footnote~', other: 'Footnotes~' } } } }``).

:js:meth:`ZooFlmEngine.render_fragment` renders one fragment alone, as one
tree, without a composer and without placing the pieces: ``{ html | text,
definitions, requires, diagnostics, has_errors }`` for ``output: 'html'`` (the
default) or ``'text'``.  It takes ``render_options`` as ``render_document()``
does (for text, ``text.width`` and ``text.link_addresses`` are refused as
well).


Snippets
--------

A standalone fragment renders the same everywhere, so it is rendered once per
output and kept: this is the snippet cache, which serves the names in lists,
the titles of pages, the displays of ``ref()`` and the labels of graphs.

- :js:meth:`ZooFlmEngine.render_snippets` fills the cache for many fragments
  at once (for ``html``, one run over all of them; for ``text``, one run per
  fragment).  The FLM processor calls it for every standalone field of the zoo
  after its scan.

- :js:meth:`ZooFlmEngine.snippet` gives the ``'html'`` or ``'text'`` snippet
  of a standalone fragment, from the cache, rendering and caching it on a miss.
  A fragment that is not standalone is the Error
  ``zoodb.snippet.not-standalone``.  For instance, a page title:
  ``engine.snippet(person.name, 'text')``.

- :js:meth:`ZooFlmEngine.snippet_of_text` gives the snippet of ad hoc FLM
  text, checked to be standalone and cached by the text.

- :js:meth:`ZooFlmEngine.snippet_entry` reads a cache entry without rendering.

A snippet with an Error is never cached.


The index per context
---------------------

The engine resolves references to other zoo objects, and to labels defined in
other objects' fields, through an *index*: entries ``{ label, href, display
}``, ``label`` of the form ``TYPE:ID`` (``person:alice``, ``sec:intro``),
``href`` the address the link points to, and ``display`` what the link shows,
a standalone fragment or FLM text.  The index serves both ``\ref{...}`` written
in content (for any label that no fragment of the page defines) and the
composer's ``ref()`` and ``refhref()``.

The addresses depend on where the output goes (the site, a printed handbook, a
browser preview), so the engine keeps one index per *output context*:
:js:meth:`ZooFlmEngine.set_index` sets the index of one context (default
``'default'``), and every render takes a ``context``.  The FLM processor builds
the index of every context it is configured with: one entry per object (its
display defaults to the object's ``name`` field when that field is
standalone) and one per label defined in a field.  Installing a context's
index takes time in proportion to its size, and a render whose context
differs from the last one installs its index again, so render the pages of
one context together.

A display given as a fragment must be standalone: one that is not is the
Error ``zoodb.index.display-not-standalone``.  Under ``'continue'``,
``set_index()`` leaves that entry out and installs the others.  Only an entry
refused with a thrown ``Error`` (not an object, a label not of the form
``TYPE:ID``, a display neither a fragment nor text, a released fragment), or a
:js:class:`ZooFlmError` under ``'abort'``, leaves the engine as it was (its
kept tables, and the index installed in the core).

A reference that resolves to nothing is reported according to ``unresolved``:
``'error'`` (the default) makes it an Error, and ``'warn'`` a Warning, the
label being shown, which suits previews.


Citations and graphics
----------------------

Two more tables hold what a render needs from outside FLM.  They are filled
before rendering, from what the scan found, because a render runs synchronously
inside the wasm module and cannot wait for a download:

- :js:meth:`ZooFlmEngine.set_citations` -- ``[{ key, text }]``, ``key`` the
  citation key ``prefix:key`` (the prefix in any letter case), ``text`` the
  formatted citation as FLM inline text (the output of the citation compiler,
  see `Compiling citations`_).  A cited key without an entry is the Error
  ``flm.citations.no-entry``.

- :js:meth:`ZooFlmEngine.set_graphics` -- one entry per image, keyed by
  ``origin`` (the canonical label of the fragment the image is written in) and
  ``path`` (as written in ``\includegraphics``), with the file's ``identity``,
  ``media_type`` and ``address`` (what the HTML's ``src`` holds), its ``kind``
  (``'raster'`` or ``'vector'``) and its sizes (``width_px``, ``height_px``,
  ``dpi``, ``width_pt``, ``height_pt``).  The FLM processor builds these
  entries from the resource collector (see :doc:`zoodb.resourcecollector`).
  An image without an entry is the Error ``flm.graphics.resolve-failed``.

:js:attr:`ZooFlmEngine.tables` gives the three tables as they were set.


Data for browser applications
-----------------------------

A browser application can render zoo content without running the FLM
processor: :js:meth:`ZooFlmEngine.dump` gives the engine's data as plain,
JSON-serializable data (the index of every context, the citations, the
graphics, and the cached snippets of the standalone fragments), and
:js:meth:`ZooFlmEngine.load` installs it in another engine.  Fragments made
afterwards with the same origin label, layout and source get their snippets
from the dump, so names and titles need no rendering at all.  The dump carries
the :js:attr:`ZooFlmEngine.settings_hash`, and ``load()`` refuses a dump made
under another core configuration or by another build of the module.  The FLM
processor writes the dump into the zoo's data dump as ``zooflm`` (unless the
data dump option ``flm_include_zooflm_data`` is ``false``).


The stylesheet and the scripts
------------------------------

FLM's HTML needs a stylesheet, and its mathematics needs MathJax 4 in the
browser.  The engine provides both from the definitions that the registry
declares:

- :js:meth:`ZooFlmEngine.html_stylesheet` gives the CSS of FLM content, to be
  served once per site (``zoodb-example`` writes it as
  ``/dynamic_style/flm.css``).

- :js:meth:`ZooFlmEngine.html_scripts` gives the script tags for a page's
  ``<head>``: the MathJax configuration that FLM's HTML needs, then the tag
  that loads MathJax 4 (``async``).

- :js:meth:`ZooFlmEngine.html_definitions` lists every style and script
  definition (``{ id, kind, owner, parts }``), for a site that delivers them
  its own way.

The result of a render lists the definitions its content requires
(``requires``, ``definitions``).


Text and LaTeX output
---------------------

:js:meth:`ZooFlmEngine.render_text` renders fragments as plain text: ``text``,
one run over all of them, in which references between them resolve; and, with
``per_fragment`` (the default), ``trees``, each fragment rendered alone, in
which a reference to another fragment shows its label.  Pieces are left out by
default, so a citation or a footnote is its mark alone; ``pieces: true``
places them after each run's text (the footnotes and the list of cited works,
under their headings; with ``per_fragment``, each tree gets its own).  The
other options are ``width`` (``null``, the default, never wraps),
``link_addresses`` (print the address after a link's text), ``context``,
``unresolved``, ``error_policy`` and ``render_options`` (as for
``render_document()``; ``text.width`` and ``text.link_addresses`` are refused
as well).  With ``render_options: { citations: { placement: 'in-place' } }``,
each citation is replaced by its entry between brackets; the searchable text
processor renders the search text this way.

:js:meth:`ZooFlmEngine.render_latex` renders fragments as one document of
recomposed LaTeX, LaTeX code written back from the FLM content for a printed
document: one text per fragment (``trees``), the name and content of the style
file that the LaTeX needs (``style_name``, ``style``) and a complete
``document``.  Labels of the types listed in ``raw_label_types`` are written as
the content spells them; every other label gets a safe label, numbered across
the run.  ``drop_comments`` leaves out the comments.  It takes
``render_options`` as ``render_document()`` does
(``latex-recomposed.drop_comments`` is refused as well: ``drop_comments`` sets
it), for instance ``{ math: { emit_flm_math_environment_macro: true },
'latex-recomposed': { unicode_overrides: { '\u202F': '\\,' } } }`` to write
the display-math environments through the hook ``\flmMathEnvironment`` and to
give a character a spelling for that run.


Scanning
--------

:js:meth:`ZooFlmEngine.scan` reads fragments as one document without
rendering them, and reports, per fragment (``trees``, one entry per fragment
given):

- ``labels`` -- the labels it defines, each with the anchor of its point,
  when one of the labels of its point forms it, and the FLM source of what
  the labeled point shows;
- ``refs`` -- the references it makes, and whether they resolve among the
  scanned fragments;
- ``graphics`` -- the images it shows;
- ``terms`` -- its term definitions (``\begin{defterm}{TERM} ...
  \end{defterm}``), each ``{ labels, anchor, display, body, body_origin,
  body_start, body_end }``: the labels of the definition (the one computed from the term,
  ``defterm:TERM``, which a term link ``\term{TERM}`` targets; one per alias
  written with ``\aliasterm``; then those written with ``\label``), the
  anchor when one of them forms it, the source of the term, and the source of
  the body, without the ``\label`` and ``\aliasterm`` fields (``body_start``
  and ``body_end`` are its UTF-8 byte offsets in the fragment's source;
  ``null`` for an empty body or one written through a user definition).  A
  glossary makes a fragment of ``body`` with the origin ``body_origin``:
  the fragment's origin (its canonical label kept, so that the body's images
  match the graphics table), with ``term`` (the term's first label) and the
  file position moved to where the body starts (:js:func:`range_origin`),
  so that the body's diagnostics give the lines of the file;
- ``cited`` -- the keys it cites, each once, in order of first citation in
  the fragment.

Over all the fragments, it reports the cited keys (``cited``, each key once,
with the fragment of its first citation: what the citations are retrieved
for), the labels defined more than once, and the standalone check of the
standalone fragments.  The FLM processor scans the whole zoo with it, to build
the index, to find the citations to retrieve and the images to collect, and to
check that labels are unique across the zoo; its results per object are
available from the processor.


Truncation
----------

:js:meth:`ZooFlmEngine.truncate` makes a shortened copy of a fragment for a
preview: the source is cut to about ``chars`` characters (at a word boundary;
mathematics, verbatim content and environments are kept whole or left out,
groups open at the cut are closed), ``marker`` (default ``' …'``) is appended,
and the result is parsed as a new fragment.  A command is cut only inside its
last argument (the text of ``\emph{…}`` or ``\href{…}{…}``); a cut that would
fall in an earlier argument, such as the note of ``\cite[note]{keys}``, leaves
the command out whole, and what a command's element declares apart from the
text around it (the keys of a ``\cite``, the target of a ``\ref`` or
``\hyperref``, the address of a ``\href``, a footnote's content) counts
nothing and is never cut.  It keeps the original's layout, standalone flag and
canonical label, so its images and citations still match the tables, and its
origin carries ``truncated: true``.  ``first_paragraph: true`` keeps only what
precedes the first paragraph break (a blank line): a float written after it is
left out, but one written in the first paragraph, with no blank line before
it, is kept when it fits, as are the footnotes and the citations.  The result
is ``{ fragment, truncated, cut_at }``.


Diagnostics and the error policy
--------------------------------

Every problem found in content is reported as a *diagnostic*; whether a call
then throws is decided by its error policy (below).  A diagnostic is a plain
object ``{ severity, identifier, message, origin, start, end, line, col,
file_line, file_col, approx }``:

- ``severity`` is ``'error'``, ``'warning'`` or ``'note'``, and ``identifier``
  a stable name such as ``core.specs.unresolvable-command`` or
  ``flm.refs.unresolved`` (from flm-rs) or ``zoodb.ref.unresolved`` (from
  ZooDb);
- ``origin`` is the origin of the fragment the problem is in (or ``{ label
  }``);
- ``start`` and ``end`` are byte offsets into the fragment's source, and
  ``line`` and ``col`` the position inside it, 1-based, the column counted in
  characters;
- ``file_line`` and ``file_col`` are the position in the data file, when the
  fragment's origin says where its source starts (``start_line``,
  ``start_col``, and ``indent``, the indentation removed from every later
  line, as in a YAML block scalar).  The YAML data loader records the
  position of every field it reads, and the field compiler passes it on.
  ``approx`` is ``true`` when that position is approximate (a folded, plain
  or quoted YAML value spanning several lines).

:js:func:`format_diagnostic` writes a diagnostic on one line:

.. code-block:: text

   people/dave.yml#biography:12:5: error: cannot resolve command ‘\nosuchmacro’ [core.specs.unresolvable-command]

Each call that reads or renders content applies an *error policy* to its
diagnostics: under ``'abort'`` (the engine's default) it throws a
:js:class:`ZooFlmError` when any of them is an Error (its message holds the
formatted errors, its ``diagnostics`` property all of them); under
``'continue'`` it returns its output as the backend produced it, with markup
that shows the problem in place, together with the diagnostics and
``has_errors``.  Warnings never throw: a caller prints them, as the example
above does.  ``render_document()``, ``render_fragment()``, ``render_text()``
and ``render_latex()`` take ``error_policy`` and ``unresolved``;
``make_fragment()``, ``set_index()``, ``render_snippets()``, ``scan()`` and
``truncate()`` take ``error_policy``; ``snippet()`` and ``snippet_of_text()``
apply the engine's defaults; ``parse_fields()`` returns its diagnostics and
applies no policy.  A browser preview typically uses ``'continue'``.

A mistake of the calling code (a wrong argument, a released fragment, a freed
engine) is thrown as a plain ``Error``, never returned as a diagnostic.


Compiling citations
-------------------

.. code::

   import {
       CitationCompiler, install_csl_flm_output_format,
   } from '@phfaist/zoodb/zooflm/citationcompiler';

The citation compiler formats the citations that the citation manager (see
:doc:`zoodb.citationmanager`) retrieved into the text of the engine's
citations table, with the citeproc-js CSL processor and a CSL style.  The FLM
processor runs it for the keys its scan found, caches the result in
``cache_compiled_citations.json`` in the citation cache directory, and
installs it with :js:meth:`ZooFlmEngine.set_citations`.  A citation that the
citation source provides already formatted (``_ready_formatted.flm``) is taken
as it is.

The compiler writes FLM through the citeproc-js output format ``'flm'``, which
:js:func:`install_csl_flm_output_format` installs.  The format keeps a chunk of
text that citeproc-js produces as it is when the chunk is valid FLM, and
escapes the characters FLM reads specially otherwise.  Whether a chunk is valid
FLM is asked of the function the call gives, such as ``(text) =>
engine.parses(text)``.  The format is installed once in citeproc-js's global
object and each call replaces the function, so install it again before
compiling with another engine (the FLM processor does so before each
compilation).


API reference
-------------

The engine
~~~~~~~~~~

.. js:autoclass:: src/zooflm/engine.ZooFlmEngine
   :short-name:
   :members:
   :exclude-members: _definitions_for, _layout_handle, _map, _ordered_requires, _render_one, _snippet_entry

.. js:autofunction:: src/zooflm/engine.text_hash
   :short-name:



Fragments and origins
~~~~~~~~~~~~~~~~~~~~~

.. js:autoclass:: src/zooflm/fragment.ZooFlmFragment
   :short-name:
   :members:

.. js:autofunction:: src/zooflm/fragment.is_fragment
   :short-name:

.. js:autofunction:: src/zooflm/fragment.origin_label
   :short-name:

.. js:autofunction:: src/zooflm/fragment.make_origin
   :short-name:

.. js:autofunction:: src/zooflm/fragment.range_origin
   :short-name:


The composer protocol
~~~~~~~~~~~~~~~~~~~~~

.. js:autoclass:: src/zooflm/compose.ZooFlmComposition
   :short-name:
   :members:

.. js:autofunction:: src/zooflm/compose.value_not_empty
   :short-name:

.. js:autofunction:: src/zooflm/compose.html_escape
   :short-name:

.. js:autofunction:: src/zooflm/compose.tree_marker
   :short-name:

.. js:autofunction:: src/zooflm/compose.piece_marker
   :short-name:

.. js:autofunction:: src/zooflm/compose.endnotes_marker
   :short-name:


Diagnostics
~~~~~~~~~~~

.. js:autoclass:: src/zooflm/diagnostics.ZooFlmError
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.format_diagnostic
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.origin_location
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.has_errors
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.apply_error_policy
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.check_error_policy
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.check_unresolved
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.make_diagnostic
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.map_core_diagnostic
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.line_col_at
   :short-name:

.. js:autofunction:: src/zooflm/diagnostics.utf8_offset_to_index
   :short-name:


The citation compiler
~~~~~~~~~~~~~~~~~~~~~

.. js:autoclass:: src/zooflm/citationcompiler.CitationCompiler
   :short-name:
   :members:

.. js:autofunction:: src/zooflm/citationcompiler.install_csl_flm_output_format
   :short-name:
