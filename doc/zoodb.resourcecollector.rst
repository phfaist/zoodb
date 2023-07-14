Collecting external resources
=============================

E.g., import external graphics or possibly other resources.

.. code::

   import { ResourceCollector } from '@phfaist/zoodb/resourcecollector';


.. js:autoclass:: src/resourcecollector/index.ResourceCollector
   :short-name:
   :members:


Resource Retrievers
-------------------

.. code::

   import {
       FilesystemResourceRetriever
   } from '@phfaist/zoodb/resourcecollector/retriever/fs';


(There might be more retrievers in the future.)


.. js:autoclass:: src/resourcecollector/retriever/fs.FilesystemResourceRetriever
   :short-name:
   :members:




Resource Processors
-------------------

.. code::
   
   import {
       FLMGraphicsResourceProcessor
   } from '@phfaist/zoodb/resourcecollector/processor/flmgraphicsprocessor';

(There might be more processors in the future.)


.. js:autoclass:: src/resourcecollector/processor/flmgraphicsprocessor.FLMGraphicsResourceProcessor
   :short-name:
   :members:

