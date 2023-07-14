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



FLM environment
---------------

.. code::

   import {
       ZooFLMResourceInfo,
       FeatureZooGraphicsCollection,

       ZooFLMEnvironment,
       zooflm_default_options,

       is_flm_fragment,

       RefResolver,
       CitationsProvider,
       
       // expose FLM classes
       FLMParsingState, // flm.flmenvironment.FLMParsingState
       ParsingStateDelta, // pylatexenc.latexnodes.ParsingStateDelta
       FLMParsingStateDeltaSetBlockLevel,
       SectionCommandSpec, // flm.feature.headings.FeatureHeadings.SectionCommandSpec
       EndnoteCategory, // flm.feature.endnotes.EndnoteCategory
       ReferenceableInfo, // flm.feature.refs.ReferenceableInfo
       RefInstance, // flm.feature.refs.RefInstance
       FloatType, // flm.feature.floats.FloatType
       GraphicsResource, // flm.feature.graphics.GraphicsResource

   } from '@phfaist/zoodb';


.. js:class:: ZooFLMEnvironment(options)

   The `ZooFLMEnvironment` class is the main FLM environment class in the
   context of the ZooDb library.  Consider using the “standard” zoodb interface
   to create an environment instance, as this is likely to be simpler and more
   features will be handled under the hood (see :ref:`zoodb-std`).


.. js:autoclass:: src/zooflm/_resourceinfo.ZooFLMResourceInfo
   :short-name:
   :members:


.. js:autofunction:: src/zooflm/_environment.is_flm_fragment
   :short-name:

.. js:autofunction:: src/zooflm/_environment.zooflm_default_options
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
       ZooHtmlFragmentRenderer, ZooTextFragmentRenderer,
       html_fragmentrenderer_get_style_information,
       render_html_standalone, render_text_standalone
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
