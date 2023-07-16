Managing bibliographic citations
================================

Citation manager
----------------

.. code::

   import { CitationDatabaseManager } from '@phfaist/zoodb/citationmanager';


Note: See also :class:`CitationCompiler` in the FLM-related modules.


.. js:autoclass:: src/citationmanager/_manager.CitationDatabaseManager
   :short-name:
   :members:




Citation Sources
----------------

.. code::

   import {
       CitationSourceArxiv
   } from '@phfaist/zoodb/citationmanager/source/arxiv.js';
   import {
       CitationSourceDoi
   } from '@phfaist/zoodb/citationmanager/source/doi.js';
   import {
       CitationSourceManual
   } from '@phfaist/zoodb/citationmanager/source/manual.js';
   import {
       CitationSourceBibliographyFile
   } from '@phfaist/zoodb/citationmanager/source/bibliographyfile.js';


.. js:autoclass:: src/citationmanager/source/arxiv.CitationSourceArxiv
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/doi.CitationSourceDoi
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/manual.CitationSourceManual
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/bibliographyfile.CitationSourceBibliographyFile
   :short-name:
   :members:


Citation Source Base Class
--------------------------

.. code::
   
   // base class, e.g. to write your own citation source implementation
   import {
       CitationSourceBase
   } from '@phfaist/zoodb/citationmanager/source/base.js';


.. js:autoclass:: src/citationmanager/source/base.CitationSourceBase
   :short-name:
   :members:
