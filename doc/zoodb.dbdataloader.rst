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

YAML files are read with the `yaml <https://eemeli.org/yaml/>`_ package,
strict YAML 1.2 with the core schema: a date such as ``2021-01-01`` stays a
string, ``yes`` is a string, a duplicate key is an error, and ``<<`` merge keys
are not merged.  A parse error names the file, the line and the column.  Since
0.3 (``js-yaml`` before), a quoted value that continues on a line indented no
more than its key is refused:

.. code:: yaml

   detail: 'a long text
   that continues here'

with the message "a quoted value that continues on the next line must be
indented more than the key; run ``zoodb-reindent-yaml`` on the file".


Re-indenting YAML data
~~~~~~~~~~~~~~~~~~~~~~

The package's tool ``zoodb-reindent-yaml <file-or-dir>... [--dry-run]
[--indent N]`` re-indents such continuation lines once (two columns beyond the
key by default), touching nothing else, and checks that every value it
re-indents reads as before.  Run it over the data folder, first with
``--dry-run`` to list the files it would change:

.. code:: shell

   yarn zoodb-reindent-yaml --dry-run data/
   yarn zoodb-reindent-yaml data/

It reads the ``.yml`` and ``.yaml`` files given and those it finds in the
folders given (hidden folders and ``node_modules`` are skipped).  A file with
another YAML error, or whose value cannot be re-indented or verified, is
reported and left unchanged.  Exit status: 0 on success, 1 on a usage error, 2
when a file could not be fixed (or read or written).  The repository's
``tools/README.md`` describes the verification in detail.


Field positions
~~~~~~~~~~~~~~~

The loader records where each string value of a YAML file starts, as
``obj._zoodb.flm_field_positions`` (see
:js:meth:`~YamlDbDataLoader.parse_file_data_with_positions`), so that the
diagnostics of the FLM fields give the line and column in the data file;
``(approx.)`` follows the position when the value folds the lines of the file
(a folded block, or a plain or quoted value on several lines) or is a quoted
value with an escape (``'it''s'``, ``"a\tb"``):

.. code:: text

   people/bob.yml#biography:4:12: error: …
   people/bob.yml#name:2:7 (approx.): warning: …

The positions are keyed by the field's path, keys and list indexes joined with
dots (``relations.parents.0.detail``), the form of ``obj._zoodb.flm_fields``.
Each is ``{ line, col, style }`` (1-based, the column in characters), with
``indent`` for a block scalar (``|`` or ``>``, whose ``line`` is the first
content line) and ``approx: true`` where the column inside the value is
approximate.  They are recorded when the file's data is the object itself (the
default ``load_objects``); a custom ``load_objects`` that returns other
objects gets none, and so do JSON files.  A subclass that overrides
:js:meth:`~YamlDbDataLoader.parse_file_data` keeps the positions when it
returns the data its ``super`` call returned.


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
