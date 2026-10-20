Loading data from source files
==============================


The Loader Handler Class
------------------------

.. code::

   import { ZooDbDataLoaderHandler } from '@phfaist/zoodb';

.. js:autoclass:: src/_zoodbloaderhandler.ZooDbDataLoaderHandler
   :short-name:
   :members:
   :exclude-members: ZooDbDataLoaderHandler



Importing YAML Files
--------------------

.. code::

   import { YamlDbDataLoader } from '@phfaist/zoodb/dbdataloader/yamldb';

The YAML loader reads every ``.yml``, ``.yaml`` and ``.json`` file of each
object type's folder, one object per file by default, and validates the objects
against their schemas (see :doc:`datafiles`).  In the standard setup,
:func:`makeStandardYamlDbDataLoader` creates it.
The files are read as strict YAML 1.2 with the core schema.

This YAML forbids single-quoted strings on multiple lines; use block strings
instead.  The ``zoodb-reindent-yaml`` utility in this package can help you migrate
your YAML files to fix any such strings (try ``yaml zoodb-reindent-yaml --help``
for more information):

.. code::

    key: 'this string
    is invalid and will cause a parse error'

    key2: |-
      this string
      is valid; the parser will happily accept it.


.. js:autoclass:: src/dbdataloader/yamldb.YamlDbDataLoader
   :short-name:
   :members:
   :exclude-members: YamlDbDataLoader



Importing FLM Files
--------------------

.. code::

   import { FlmFilesDbDataLoader } from '@phfaist/zoodb/dbdataloader/flmfilesdb';

The FLM-files loader reads ``.flm`` files: an optional YAML front matter, then
``\begin{field}{<name>} ... \end{field}`` blocks (see :doc:`datafiles` for an
example).  It reads the blocks through the zoo's FLM engine
(:js:meth:`ZooFlmEngine.parse_fields`), which it takes as ``engine`` in its
configuration; :func:`makeStandardYamlDbDataLoader` passes
``zoodb.zoo_flm_engine``, so the zoo needs ``use_flm_engine`` in its
configuration:

.. code:: javascript

   import { makeStandardYamlDbDataLoader } from '@phfaist/zoodb/std/stdyamldbdataloader';
   import { FlmFilesDbDataLoader } from '@phfaist/zoodb/dbdataloader/flmfilesdb';

   const loader = await makeStandardYamlDbDataLoader(zoodb, {
       DbDataLoaderClass: FlmFilesDbDataLoader,
       objects: {
           note: { schema_name: 'note', data_src_path: 'notes/' },
       },
   });

The front matter is read as a YAML file is (strict YAML 1.2; a quoted value
continued at its key's column is refused there too, with a message that asks to
indent its continuation lines further).  Between the blocks, only whitespace
and comments (``%%``) are allowed: other content, or a block that is not
closed, is a :js:class:`ZooFlmError` that gives the file, the line and the
column.  The blocks' environment name is ``field``, the one the engine
declares.  The fields' positions are recorded as for YAML files: the front
matter's values as in a YAML file, each block's value at its first character
(``style: 'field'``, exact).


.. js:autoclass:: src/dbdataloader/flmfilesdb.FlmFilesDbDataLoader
   :short-name:
   :members:
   :exclude-members: FlmFilesDbDataLoader
