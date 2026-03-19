Integration into the Eleventy website builder
=============================================

The `ZooDb` library is designed to easily be integrated into a static website
built with `Eleventy (11ty) <https://11ty.dev/>`_.  Check out our simple example
(see :ref:`example`).

The integration does not require any special 11ty plugin from ZooDb.  Instead,
you load the zoo database using :js:func:`makeStandardZooDb` (see
:ref:`zoodb-std`) and expose it to your 11ty templates via Eleventy's global
data mechanism.  Individual pages are then rendered using 11ty's JavaScript
templates (``*.11ty.js`` files), which can access zoo objects and use ZooFLM
rendering utilities to produce HTML.


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
the fully loaded :class:`ZooDb` instance.


Writing page templates
----------------------

Use `11ty JavaScript templates
<https://www.11ty.dev/docs/languages/javascript/>`_ (files ending in
``.11ty.js``) to render zoo content.  A template exports a ``data`` object and a
``render`` function.

For a single page that lists all objects of a given type:

.. code:: javascript

   import { render_html_standalone } from '@phfaist/zoodb/zooflm';

   const data = {
       title: "All people",
   };

   async function render(data) {
       const zoodb = data.zoodb;
       let html = '<ul>';
       for (const [person_id, person] of Object.entries(zoodb.objects.person)) {
           const name = render_html_standalone(person.name);
           html += `<li>${ name }</li>`;
       }
       html += '</ul>';
       return html;
   }

   export default { data, render };

The function :js:func:`render_html_standalone` renders a single FLM fragment to
HTML without needing a full document context.  It is suitable for short,
standalone content such as object names or titles.


Rendering full object pages
---------------------------

For pages that render richer FLM content (with cross-references, endnotes, and
citations), use 11ty's `pagination <https://www.11ty.dev/docs/pagination/>`_
feature together with :js:func:`make_and_render_document` and
:js:func:`make_render_shorthands`:

.. code:: javascript

   import {
       make_and_render_document,
       make_render_shorthands,
   } from '@phfaist/zoodb/zooflm';
   import { sqzhtml } from '@phfaist/zoodb/util/sqzhtml';

   const data = {
       pagination: {
           data: "zoodb.objects.person",
           size: 1,
           alias: "person_pair",
       },
       eleventyComputed: {
           permalink: (data) => {
               const [person_id] = data.person_pair;
               return `/person/${person_id}/`;
           },
           title: (data) => {
               const [, person] = data.person_pair;
               return render_html_standalone(person.name);
           },
       },
   };

   async function render(data) {
       const zoodb = data.zoodb;
       const [person_id, person] = data.person_pair;

       return make_and_render_document({
           zoo_flm_environment: zoodb.zoo_flm_environment,
           render_doc_fn: (render_context) => {
               const { ne, rdr, rdrblock, ref } =
                   make_render_shorthands({ render_context });

               let s = '';
               s += sqzhtml`<h1>${ rdr(person.name) }</h1>`;
               if (ne(person.biography)) {
                   s += sqzhtml`<div>${ rdrblock(person.biography) }</div>`;
               }
               s += `<RENDER_ENDNOTES/>`;
               return s;
           },
           render_endnotes: true,
       });
   }

   export default { data, render };

The :js:func:`make_render_shorthands` function returns a set of convenience
helpers for use inside a render callback:

- ``ne(x)`` — test if a value is non-empty (see :js:func:`value_not_empty`).
- ``rdr(x)`` — render a value (FLM fragment, string, or array) to HTML
  (see :js:func:`render_value`).
- ``rdrblock(x)`` — render a fragment in block-level mode (e.g. wrapped in
  ``<p>`` tags).
- ``ref(object_type, object_id)`` — render a hyperlink to another zoo object.
- ``refhref(object_type, object_id)`` — return the URL for another zoo object.

The placeholder ``<RENDER_ENDNOTES/>`` is replaced with the rendered endnotes
(references, citations) by :js:func:`make_and_render_document`.


Relevant API reference
----------------------

The rendering utilities used in 11ty templates are exported from the
``@phfaist/zoodb/zooflm`` subpackage:

- :js:func:`make_and_render_document`

- :js:func:`make_render_shorthands`

- :js:func:`render_value`

- :js:func:`value_not_empty`

- :js:func:`render_html_standalone`

