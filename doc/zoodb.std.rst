Zoo Standard Setup Tools
========================

Here is the API reference of the "standard ZooDb setup" related functions and
classes.  Please refer to :ref:`zoodb-std` for a little guide on using them to
create your zoo.

.. code::

   import { makeStandardZooDb } from '@phfaist/zoodb/stdzoodb';
   import {
       makeStandardYamlDbDataLoader
   } from '@phfaist/zoodb/std/stdyamldbdataloader';

   import { use_relations_populator } from '@phfaist/zoodb/use_relations_populator';
   import {
       use_flm_environment, default_target_href_resolver,
   } from '@phfaist/zoodb/use_flm_environment';
   import { use_flm_processor } from '@phfaist/zoodb/use_flm_processor';
   import {
       use_gitlastmodified_processor
   } from '@phfaist/zoodb/use_gitlastmodified_processor';
   import {
       use_searchable_text_processor
   } from '@phfaist/zoodb/use_searchable_text_processor';


.. js:autofunction:: src/std/stdzoodb.makeStandardZooDb
   :short-name:


Feature helpers
---------------

.. js:autofunction:: src/std/use_relations_populator.use_relations_populator
   :short-name:

.. js:autofunction:: src/std/use_flm_environment.use_flm_environment
   :short-name:

.. js:autofunction:: src/std/use_flm_environment.default_target_href_resolver
   :short-name:

.. js:autofunction:: src/std/use_flm_processor.use_flm_processor
   :short-name:

.. js:autofunction:: src/std/use_gitlastmodified_processor.use_gitlastmodified_processor
   :short-name:

.. js:autofunction:: src/std/use_searchable_text_processor.use_searchable_text_processor
   :short-name:


Data loader
-----------

This function will create a data loader class (:class:`YamlDbDataLoader`) that
you can then use in a :`ZooDbDataLoaderHandler` class, which will take care of
loading (and if requested, reloading) the data into the main zoo instance.

.. js:autofunction:: src/std/stdyamldbdataloader.makeStandardYamlDbDataLoader
   :short-name:


