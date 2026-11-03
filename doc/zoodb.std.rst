Zoo Standard Setup Tools
========================

Here is the API reference of the "standard ZooDb setup" related functions and
classes.  Please refer to :ref:`zoodb-std` for a little guide on using them to
create your zoo, and for the configuration keys of the FLM features.

.. code::

   import { makeStandardZooDb } from '@phfaist/zoodb/std/stdzoodb';
   import {
       makeStandardYamlDbDataLoader
   } from '@phfaist/zoodb/std/stdyamldbdataloader';

   import { use_relations_populator } from '@phfaist/zoodb/std/use_relations_populator';
   import { use_flm_engine } from '@phfaist/zoodb/std/use_flm_engine';
   import {
       use_flm_processor, make_citation_sources,
   } from '@phfaist/zoodb/std/use_flm_processor';
   import {
       use_gitlastmodified_processor
   } from '@phfaist/zoodb/std/use_gitlastmodified_processor';
   import {
       use_searchable_text_processor
   } from '@phfaist/zoodb/std/use_searchable_text_processor';

``@phfaist/zoodb/std`` also exports :func:`makeStandardZooDb`,
:func:`use_relations_populator`, :func:`use_flm_engine`,
:func:`use_flm_processor` and :func:`use_searchable_text_processor` together.


.. js:autofunction:: src/std/stdzoodb.makeStandardZooDb
   :short-name:


Feature helpers
---------------

Each helper is a factory that :func:`makeStandardZooDb` calls with its internal
state object (``_this``, whose ``config`` is the merged configuration) when the
helper is given as the value of its configuration key (``use_flm_engine:
use_flm_engine``, and so on).  :func:`use_flm_engine` runs first: the FLM
processor and the searchable text processor use the engine it creates
(``zoodb.zoo_flm_engine``).

.. js:autofunction:: src/std/use_relations_populator.use_relations_populator
   :short-name:

.. js:autofunction:: src/std/use_flm_engine.use_flm_engine
   :short-name:

.. js:autofunction:: src/std/use_flm_engine.srcset_core_config
   :short-name:

.. js:autofunction:: src/std/use_flm_processor.use_flm_processor
   :short-name:

.. js:autofunction:: src/std/use_flm_processor.make_citation_sources
   :short-name:

.. js:autofunction:: src/std/use_gitlastmodified_processor.use_gitlastmodified_processor
   :short-name:

.. js:autofunction:: src/std/use_searchable_text_processor.use_searchable_text_processor
   :short-name:


Data loader
-----------

This function will create a data loader class (:class:`YamlDbDataLoader`, or
the class given as ``DbDataLoaderClass``, such as
:class:`FlmFilesDbDataLoader`) that you can then use in a
:class:`ZooDbDataLoaderHandler`, which will take care of loading (and if
requested, reloading) the data into the main zoo instance.  It passes the zoo's
FLM engine to the loader as ``engine`` (see :doc:`zoodb.dbdataloader`).

.. js:autofunction:: src/std/stdyamldbdataloader.makeStandardYamlDbDataLoader
   :short-name:
