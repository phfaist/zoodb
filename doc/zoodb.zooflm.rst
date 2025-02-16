FLM content compiling and rendering
===================================

Provides an interface to the python-based FLM library.  The library is
transpiled to Javascript using Transcrypt and some important entry points are
exposed in the modules described here.



The python-transpiled interface
-------------------------------

This part of the ZooDb library incorporates the `FLM python sources
<https://github.com/phfaist/flm>`_ transpiled into JavaScript using `Transcrypt
<https://transcrypt.org/>`_.  While this detail shouldn't matter for most uses,
there are some important differences to keep in mind:

- You can't use JavaScript class (prototype) inheritance with the python-based
  classes.  (Callbacks won't work, the parent class won't call the child method,
  etc.)  If you really need to subclass one of the classes from python's
  interface (or further derived classes like :class:`ZooFLMEnvironment`), you
  need to do it `the Transcrypt way
  <https://www.transcrypt.org/docs/html/what_why.html#id2>`_.

- To pass keyword arguments, use the syntax ``function(arg1, arg2, $$kw( {
  keyword_arg1: ..., keyword_arg2: ... } ))``.  The ``$kw(...)`` argument should
  be the last argument in the call.

- You cannot use the JS syntax ``x instanceof y`` with python-transcrypted
  classes.  Instead, you can import the ``isinstance()`` utility to check
  instances the python way, ``isinstance(x, y)``.  To check whether an object is
  a FLM fragment instance, use :func:`is_flm_fragment()`.

- You can convert objects to some representative string using the `repr()`
  function.

The relevant functions can be imported as follows:

.. code::

   import {
       $$kw, repr, __class__, __super__, __get__, isinstance
   } from '@phfaist/zoodb/zooflm';


- explain how to create subclasses..........


Overview of FLM-related definitions
-----------------------------------

ZooDb exposes a variety of classes, functions, and objects that enable you to
interact with FLM-related features.  We'll try to go over most of them in
the following sections.

Here are the main symbols you can expect to import from `@phfaist/zoodb/zooflm`:

.. code::

   import {
       ZooFLMResourceInfo,
       FeatureZooGraphicsCollection,

       ZooFLMEnvironment,
       zooflm_default_environment_options,

       is_flm_fragment,

       RefResolver,
       CitationsProvider,
       
       // expose FLM classes
       FLMParsingState, // flm.flmenvironment.FLMParsingState
       ParsingStateDelta, // pylatexenc.latexnodes.ParsingStateDelta
       FLMParsingStateDeltaSetBlockLevel,
       SectionCommandInfo, // flm.feature.headings.FeatureHeadings.SectionCommandInfo
       EndnoteCategory, // flm.feature.endnotes.EndnoteCategory
       ReferenceableInfo, // flm.feature.refs.ReferenceableInfo
       RefInstance, // flm.feature.refs.RefInstance
       FloatType, // flm.feature.floats.FloatType
       GraphicsResource, // flm.feature.graphics.GraphicsResource

   } from '@phfaist/zoodb/zooflm';



FLM environment
---------------

The `FLMEnvironment` is one of the central classes in the FLM package—it provides
access to features, creates FLM fragments, defines parsing options, etc.

In `ZooDb`, we have our own class :js:class:`ZooFLMEnvironment`, a
`FLMEnvironment` subclass, that is capable of defining a standard environment with
most features that you'd expect working out-of-the-box.


.. js:class:: ZooFLMEnvironment(environment_options)

   The `ZooFLMEnvironment` class is the main FLM environment class in the
   context of the ZooDb library.
   
   Rather than directly instantiating this object, consider using the
   “standard” zoodb interface
   to create an environment instance, as this is likely to be simpler and more
   features will be handled under the hood (see :ref:`zoodb-std`).

   The options are pretty rich!  The following can appear as properties
   of the `environment_options` object, with corresponding values to
   adjust various configuration items:

   - `parsing: { (...object...) }` — options to provide to FLM's
     `standard_parsing_state()`, and which define options related to parsing
     of FLM code.  Possible properties include `force_block_level`,
     `enable_comments`, `comment_start`, `extra_forbidden_characters`, and
     `dollar_inline_math_mode`.

   - `flm_environment_options: { (...object...) }` — additional
     keyword options to specify
     to `FLMEnvironment`'s constructor, including `tolerant_parsing`
     and `parsing_mode_deltas`.  (It is strongly discouraged to set
     `tolerant_parsing` to true!)  Do not use this option to set
     `features`, `parsing_state`, and `latex_context`; we already
     provide these arguments and you can customize these objects
     with other options above and below.

   - `enable_features: { (...object...) }` — By default, `ZooFLMEnvironment`
     provides a set of FLM features with default settings without you
     explicitly asking for them.  This enables features like basic
     formatting (``\textbf{}``, ``\emph{}``, etc.), hyperlinks (``\url{...}``,
     …), math, etc. to work without too much effort on your end.  The
     configuration option `enable_features` gives you fine-grained control
     over which features to enable: Properties correspond to feature names
     and the corresponding value is a boolean indicating whether to enable
     that feature.  By default, all features are enabled.  The possible
     feature names are: ``baseformatting``, ``href``, ``verbatim``, ``math``,
     ``enumeration``, ``headings``, ``refs``, ``endnotes``, ``citations``,
     ``floats``, ``defterm``, and ``graphics_collection``.  In addition,
     you may specify the additional property ``default: true | false``,
     fixing the default value for any feature name not explicitly given.
     By default, ``default`` is set to ``true``, enabling all features
     by default.  If you prefer to selectively enable features and ensure
     that no other feature than the one(s) you selected are enabled, then
     you can set ``default: false`` and can be reassured that if new features
     are included in the future, they will not be enabled until you explicitly
     request them.

   In addition, a number of possible options directly influence settings
   for individual features:

   - `enumeration_environments` — will be passed on to
     `flm.feature.enumeration.FeatureEnumeration`;

   - `heading_section_commands_by_level` — will be passed on to
     `flm.feature.headings.FeatureHeadings`;

   - `ref_resolver` — will be used as an external reference resolver and
     passed on to `flm.feature.refs.FeatureRefs`.  If you don't specify such an
     object, a good default object will be automatically instantiated and
     provided to the refs feature;

   - `ref_resolver_options` — if `ref_resolver` is null (which typically is
     the case), a standard ref resolver object is instantiated (cf.
     :js:class:`RefResolver`).  Here, you can specify options to this class
     constructor;

   - `endnote_categories` — will be passed on to
     `flm.feature.endnotes.FeatureEndnotes`;

   - `citations_provider` — will be used as a provider for citations for the
     `flm.feature.cite.FeatureExternalPrefixedCitations` feature.
     If you don't specify such an object,
     a good default object will be automatically instantiated and provided to
     the cite feature.

   - `citations_options` — an object whose keyword arguments will be passed on
     directly to `flm.feature.cite.FeatureExternalPrefixedCitations`.  You can
     specify citations format with `counter_formatter`, delimiters with
     `citation_delimiters`, etc.;

   - `float_types` — will be passed on to
     `flm.feature.floats.FeatureFloats`.  Use this to define custom floats
     beyond figures and tables;

   - `defterm_options` — keyword arguments to pass on to
     `flm.feature.defterm.FeatureDefTerm`.


.. js:class:: FeatureZooGraphicsCollection()

   Implements a graphics resource provider feature for FLM, enabling the use of
   ``\includegraphics{}``.

   The graphics resources must have been detected (e.g., using a
   :class:`ZooFLMScanner`, perhaps handled via a :class:`ZooFLMProcessor`), and
   the relevant graphics resource objects must have been compiled/fetched (see
   `flm.feature.graphics.GraphicsResource`).  You then set those graphics
   resource instances here to make them visible to the FLM renderers.

   You may set the `src_url_resolver` property to a function/lambda with
   signature `callback(graphics_resource, render_context)` and returning a URL
   specifying where the graphics resource should be linked to in the rendered
   output.  (This property is set e.g. in :func:`use_flm_environment()`.)

   You typically do not have to instantiate this object directly, as one is
   instantiated for you automatically if you construct a `ZooFLMEnvironment`
   (unless you've passed on options that disable this feature) or if one
   is constructed using the `zoodb.std` helpers.

   .. js:function:: add_graphics(source_path, graphics_resource)

      Register the given `graphics_resource` object associated with the given
      `source_path`.

   .. js:function:: set_collection(collection)

      Combines multiple calls to `add_graphics()`.  The `collection` is an array
      of pairs `[source_path, graphics_resource]`.  The `add_graphics()` method
      will be called for each pair.


.. js:autoclass:: src/zooflm/_resourceinfo.ZooFLMResourceInfo
   :short-name:
   :members:


.. js:autofunction:: src/zooflm/_environment.is_flm_fragment
   :short-name:

.. js:autofunction:: src/zooflm/_environment.zooflm_default_environment_options
   :short-name:



.. js:autoclass:: src/zooflm/_environment.RefResolver
   :short-name:
   :members:

.. js:autoclass:: src/zooflm/_environment.CitationsProvider
   :short-name:
   :members:






Rendering content
-----------------

.. code::

   import {
       // FLM fragment renderers & related tools
       ZooHtmlFragmentRenderer,
       ZooTextFragmentRenderer,
       html_fragmentrenderer_get_style_information,
       render_html_standalone,
       render_text_standalone,
       // render utilities
       make_render_shorthands,
       render_value,
       value_not_empty,
       make_and_render_document,
   } from '@phfaist/zoodb/zooflm';


.. class:: ZooHtmlFragmentRenderer()

   Subclass of FLM's `flm.fragmentrenderer.html.HtmlRenderer` with some options
   tweaked.


.. js:autofunction:: src/zooflm/_fragmentrenderers.html_fragmentrenderer_get_style_information
   :short-name:


.. class:: ZooTextFragmentRenderer()

   Subclass of FLM's `flm.fragmentrenderer.text.TextRenderer` with some options
   tweaked.


.. js:autofunction:: src/zooflm/_fragmentrenderers.render_html_standalone
   :short-name:

.. js:autofunction:: src/zooflm/_fragmentrenderers.render_text_standalone
   :short-name:


.. js:autofunction:: src/zooflm/_renderutils.make_render_shorthands
   :short-name:

.. js:autofunction:: src/zooflm/_renderutils.render_value
   :short-name:

.. js:autofunction:: src/zooflm/_renderutils.value_not_empty
   :short-name:

.. js:autofunction:: src/zooflm/_renderutils.make_and_render_document
   :short-name:


Scanning fragments
------------------

.. code::

   import {
       ZooFLMScanner, visitor_scan_object, visitor_scan_zoo,
   } from '@phfaist/zoodb/zooflm/scanner';


.. js:autoclass:: src/zooflm/scanner.ZooFLMScanner
   :short-name:
   :members:

.. js:autofunction:: src/zooflm/scanner.visitor_scan_object
   :short-name:

.. js:autofunction:: src/zooflm/scanner.visitor_scan_zoo
   :short-name:



Compiling citations
-------------------

.. code::

   import {
       CitationCompiler, install_csl_flm_output_format,
   } from '@phfaist/zoodb/zooflm/citationcompiler';



.. js:autoclass:: src/zooflm/citationcompiler.CitationCompiler
   :short-name:
   :members:

.. js:autofunction:: src/zooflm/citationcompiler.install_csl_flm_output_format
   :short-name:


