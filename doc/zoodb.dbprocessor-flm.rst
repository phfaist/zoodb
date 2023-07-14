High-level FLM content processing
---------------------------------

.. code::
   
   import { ZooFLMProcessor } from '@phfaist/zoodb/dbprocessor/flmprocessor';


The high-level FLM processor will automatically scan FLM content for labels,
citations, external resources, etc.  It will also create a citation manager and
a citation compiler/formatter.  It uses the :class:`FLMSimpleContentCompiler` DB
processor under the hood.



.. js:autoclass:: src/dbprocessor/flmprocessor.ZooFLMProcessor
   :short-name:
   :members:



Low-level FLM content object field compilation
----------------------------------------------

.. code::

   import {
       FLMSimpleContentCompiler
   } from '@phfaist/zoodb/dbprocessor/flmsimplecontent';


This database processor will only take care of converting FLM content fields of
objects into compiled FLM fragment objects.  Optionally, the field values are
scanned as they are being compiled




.. js:autoclass:: src/dbprocessor/flmsimplecontent.FLMSimpleContentCompiler
   :short-name:
   :members:
