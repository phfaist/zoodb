Zoo Standard Setup Tools
========================

.. code::

   import { StandardZooDb } from '@phfaist/zoodb/stdzoodb';

   import { use_relations_populator } from '@phfaist/zoodb/use_relations_populator';
   import {
       use_flm_environment, default_target_href_resolver,
   } from '@phfaist/zoodb/use_flm_environment';
   import { use_flm_processor, } from '@phfaist/zoodb/use_flm_processor';
   import {
       use_gitlastmodified_processor
   } from '@phfaist/zoodb/use_gitlastmodified_processor';
   import {
       use_searchable_text_processor
   } from '@phfaist/zoodb/use_searchable_text_processor';

   import {
       StandardZooDbYamlDataLoader
   } from '@phfaist/zoodb/load_yamldb';


.. js:autoclass:: src/std/stdzoodb.StandardZooDb
   :short-name:
   :members:


Feature helpers
---------------

.. js:autofunction:: src/std/use_flm_environment.use_flm_environment
   :short-name:

.. js:autofunction:: src/std/use_flm_environment.default_target_href_resolver
   :short-name:

.. js:autofunction:: src/std/use_flm_processor.use_flm_processor
   :short-name:


Data loader
-----------

.. js:autoclass:: src/std/load_yamldb.StandardZooDbYamlDataLoader
   :short-name:
   :members:


