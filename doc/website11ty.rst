Integration into the Eleventy website builder
=============================================

The `ZooDb` library is designed to easily be integrated into a static website
built with `Eleventy (11ty) <https://11ty.dev/>`_.  Check out our simple example
(see :ref:`example`).

The integration does not require any special 11ty plugin from ZooDb.  Instead,
you load the zoo database using :js:func:`makeStandardZooDb` (see
:ref:`zoodb-std`) and expose it to your 11ty templates via Eleventy's global
data mechanism.  Individual pages are then rendered using 11ty's JavaScript
templates (``*.11ty.js`` files), which access the zoo's objects and render
their FLM content to HTML with the zoo's FLM engine, ``zoodb.zoo_flm_engine``
(:js:class:`ZooFlmEngine`, see :doc:`zoodb.zooflm`).


Loading the zoo as global data
------------------------------

In your ``eleventy.config.js``, import the function that creates and loads your
zoo (typically a wrapper around :js:func:`makeStandardZooDb` and
:class:`ZooDbDataLoaderHandler`).  Then register it as global data so that every
template can access the ``zoodb`` object:

.. code:: javascript

   import { load_zoodb } from './path/to/myzoodb.js';

   export default async function (eleventyConfig)
   {
       // Watch YAML data files so that changes trigger a rebuild.
       eleventyConfig.addDataExtension("yml, yaml", (contents) => ({}));
       eleventyConfig.addWatchTarget('../data/');

       // Expose the zoo database as global data.
       // The callback is re-executed on each rebuild in dev mode.
       eleventyConfig.addGlobalData("zoodb", async () => {
           return await load_zoodb();
       });

       // Loading the zoo can be slow; wait before reacting to file changes.
       eleventyConfig.setWatchThrottleWaitTime(2000);

       // ... rest of your 11ty configuration ...
   };

With this setup, every template receives a ``data.zoodb`` property containing
the fully loaded :class:`ZooDb` instance, and its FLM engine as
``data.zoodb.zoo_flm_engine``.


The FLM stylesheet and scripts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HTML of FLM content needs the engine's stylesheet, and its scripts in the
page's ``<head>``.  :js:meth:`ZooFlmEngine.html_scripts` returns the script tags:
today MathJax 4, its configuration for FLM content first, then its loader
(``<script src="…" async>``).  Use, for instance, as follows:

.. code:: html

   <!DOCTYPE HTML>
   <html>
   <head>
   <title>{{ title }}</title>
   <link rel="stylesheet" href="/dynamic_style/flm.css">
   {{ zoodb.zoo_flm_engine.html_scripts() | safe }}
   </head>
   <body>
   <main>{{ content | safe }}</main>
   </body>
   </html>

The method :js:meth:`ZooFlmEngine.html_stylesheet` returns the default stylesheet
that a template should include, possibly as a separate generated page:

.. code:: javascript

   // src/dynamic_style/flm.css.11ty.js
   const data = {
       layout: null,
       permalink: '/dynamic_style/flm.css',
   };

   const render = (data) => data.zoodb.zoo_flm_engine.html_stylesheet();

   export default { data, render };

(The example imports that file from its own stylesheet, which Parcel bundles,
instead of linking it from the layout.)


Writing page templates
----------------------

Use `11ty JavaScript templates
<https://www.11ty.dev/docs/languages/javascript/>`_ (files ending in
``.11ty.js``) to render zoo content.  A template exports a ``data`` object and a
``render`` function.

For a single page that lists all objects of a given type:

.. code:: javascript

   const data = {
       title: "All people",
   };

   async function render(data) {
       const zoodb = data.zoodb;
       const engine = zoodb.zoo_flm_engine;
       let html = '<ul>';
       for (const [person_id, person] of Object.entries(zoodb.objects.person)) {
           const href = zoodb.zoo_object_permalink('person', person_id);
           const name = engine.snippet(person.name, 'html');
           html += `<li><a href="${ href }">${ name }</a></li>`;
       }
       html += '</ul>';
       return html;
   }

   export default { data, render };

The method :js:meth:`ZooFlmEngine.snippet` returns a compiled version of a 
standalone FLM fragment field either as HTML (``'html'``) or as
plain text (``'text'``) of a standalone field. A standalone fragment is
content that is rendered on its own, without references,
citations or notes (the schema annotation ``_flm: standalone``).  The FLM
processor renders these snippets once when processing the zoo.  The ``snippet()``
method emits an error (``zoodb.snippet.not-standalone``) if the given field
is not standalone.


Rendering full object pages
---------------------------

For pages that render richer FLM content (with cross-references, footnotes,
figures and citations), use 11ty's `pagination
<https://www.11ty.dev/docs/pagination/>`_ feature together with
:js:meth:`ZooFlmEngine.render_document`.  This is the person page of the
example (``website/src/person/person.11ty.js``), shortened:

.. code:: javascript

   import { sqzhtml } from '@phfaist/zoodb/util/sqzhtml';
   import { format_diagnostic } from '@phfaist/zoodb/zooflm/engine';

   const data = {
       pagination: {
           data: 'zoodb.objects.person',
           size: 1,
           resolve: 'values',
           alias: 'person',
       },
       eleventyComputed: {
           permalink: (data) =>
               data.zoodb.zoo_object_permalink('person', data.person.person_id) + '.html',
           title: (data) => data.zoodb.zoo_flm_engine.snippet(data.person.name, 'text'),
       },
   };

   async function render(data) {
       const { person, zoodb } = data;

       // The composer of the page: it receives the helpers and returns the
       // page's HTML.
       const compose = ({ ne, rdr, rdrblock, ref, endnotes }) => {
           let s = '';
           s += sqzhtml`<h1>${ rdr(person.name) }</h1>`;
           if (ne(person.biography)) {
               s += sqzhtml`<div>${ rdrblock(person.biography) }</div>`;
           }
           if (person.relations?.spouse != null) {
               s += sqzhtml`<h2>Spouse</h2><p>${ ref('person', person.relations.spouse) }</p>`;
           }
           s += endnotes();
           return s;
       };

       const result = zoodb.zoo_flm_engine.render_document({ compose });
       // An error in the content already threw (the default policy is
       // 'abort'); the warnings are returned.
       for (const diagnostic of result.diagnostics) {
           console.warn(`${data.page.url}: ${format_diagnostic(diagnostic)}`);
       }
       return result.html;
   }

   export default { data, render };

The function :js:meth:`ZooFlmEngine.render_document` calls the composer once.
Use  ``rdr()`` and
``rdrblock()`` to mark the locations where specific dynamic content should
be rendered.  (These functions place a marker, rather than rendering the field
on the spot; do not attempt to read or parse their return value.)
When the composer returns, the engine renders every field
placed in the page as one document, resolving references between them and numbering
footnotes and figures across each page.

The result is ``{ html, definitions, requires, diagnostics, has_errors }``.
Under the default error policy (``'abort'``), an Error in the page's content
throws a :js:class:`ZooFlmError` that lists the diagnostics, which stops the
build; the warnings (an unresolved reference with
``allow_unresolved_references``, for instance) are only returned, so the
template prints them, with :js:func:`format_diagnostic`.  The option
``context`` renders the page with the links of another output context of the
index (``flm_options.contexts``).

The helpers that the composer receives (see :js:class:`ZooFlmComposition`):

- ``ne(x)`` — whether a value is not empty: ``null``, ``undefined``, ``''``, an
  empty list and an empty fragment are empty (see :js:func:`value_not_empty`).
- ``rdr(x)`` — renders a value: a field's fragment (a standalone one as its
  snippet), a string (HTML-escaped), a number, or a list (its items rendered
  and joined as ``flm_options.engine.render_value_options`` says).  Pass a
  field, not a zoo object: an object is a ``TypeError``.
- ``rdrblock(x)`` — as ``rdr()``, with the fragment laid out as blocks
  (paragraphs).  Place a field either with ``rdr()`` or with ``rdrblock()`` on a
  page, not with both: it would be placed twice, and its labels reported as
  defined twice.
- ``ref(object_type, object_id)`` — a link to another zoo object, ``<a
  href="…" class="href-ref ref-TYPE">``, showing the object's display (see the
  option ``refs`` in :ref:`zoodb-std`; ``{ display_flm }`` gives another one).
- ``refhref(object_type, object_id)`` — the URL of another zoo object.
- ``endnotes()`` — where the footnotes and the bibliography go.
- ``piece(name)`` — where one of them goes, by name
  (``'flm.xnotes.list.footnote'``, ``'flm.citations.bibliography'``), for a page
  that places them apart; ``endnotes()`` then places the others.
- ``escape(s)`` — HTML-escapes a string.


Images and data files
---------------------

The FLM processor collects the images referenced by constructs such as `\includegraphics{figure.png}`
(see :doc:`zoodb.resourcecollector`); the site copies each one to the address returned by
``zoo_permalinks.graphics_resource``.  For instance (cf. ``website/src/pic/pic.11ty.js`` in
the example repo):

.. code:: javascript

   import fsPromises from 'fs/promises';

   const data = {
       pagination: {
           data: 'zoodb.zoo_flm_processor.resource_collector.collected_resources.graphics_path',
           size: 1,
           resolve: 'values',
           alias: 'graphics_resource_data',
       },
       layout: null,
       eleventyComputed: {
           // the same address as zoo_permalinks.graphics_resource gives:
           // `/pic/${resource_data.src_url}`
           permalink: (data) => `/pic/${ data.graphics_resource_data.target_info.target_name }`,
       },
   };

   async function render(data) {
       return await fsPromises.readFile(
           data.graphics_resource_data.resolved_info.full_source_path
       );
   }

   export default { data, render };

A template can also write the zoo's data dump for browser apps
(``JSON.stringify(await zoodb.data_dump())``, cf.
``website/src/dat/zoodbdata.11ty.js`` in the example repo).  The dump
can be loaded in a browser app, see
:doc:`zoodb.dbprocessor-flm` for how to set this up.


Relevant API reference
----------------------

The rendering methods used in 11ty templates belong to the engine,
``zoodb.zoo_flm_engine`` (``@phfaist/zoodb/zooflm/engine``, see
:doc:`zoodb.zooflm`):

- :js:meth:`ZooFlmEngine.render_document`

- :js:class:`ZooFlmComposition` (the composer's helpers)

- :js:meth:`ZooFlmEngine.snippet`, :js:meth:`ZooFlmEngine.snippet_of_text`

- :js:meth:`ZooFlmEngine.html_stylesheet`, :js:meth:`ZooFlmEngine.html_scripts`

- :js:func:`format_diagnostic`

- :js:func:`value_not_empty`

- :js:func:`sqzhtml` (``@phfaist/zoodb/util/sqzhtml``)
