Loading data from source files
==============================


The Loader Handler Class
------------------------

.. code::

   import { ZooDbDataLoaderHandler } from '@phfaist/zoodb';

.. js:autoclass:: src/_zoodbloaderhandler.ZooDbDataLoaderHandler
   :short-name:
   :members:



Importing YAML Files
--------------------

.. code::

   import { YamlDbDataLoader } from '@phfaist/zoodb/dbdataloader/yamldb';

YAML files are read with the `yaml <https://eemeli.org/yaml/>`_ package,
strict YAML 1.2 (core schema: a date such as ``2021-01-01`` stays a string,
``yes`` is a string, a duplicate key is an error).  A parse error names the
file, the line and the column.  Since 0.3 (``js-yaml`` before), a quoted value
that continues on a line indented no more than its key is refused::

   detail: 'a long text
   that continues here'

with the message "a quoted value that continues on the next line must be
indented more than the key; run ``zoodb-reindent-yaml`` on the file".  The
package's tool ``zoodb-reindent-yaml <file-or-dir>... [--dry-run] [--indent
N]`` re-indents such continuation lines once (two columns beyond the key by
default), touching nothing else, and checks that every value it re-indents
reads as before.

The loader records where each string value of a YAML file starts, as
``obj._zoodb.flm_field_positions`` (see
:js:meth:`~YamlDbDataLoader.parse_file_data_with_positions`), so that the
diagnostics of the FLM fields give the line and column in the data file;
``(approx.)`` follows the position when the value folds the lines of the file
(a folded block, or a plain or quoted value on several lines) or is a quoted
value with an escape (``'it''s'``, ``"a\tb"``).


.. js:autoclass:: src/dbdataloader/yamldb.YamlDbDataLoader
   :short-name:
   :members:



Importing FLM Files
--------------------

.. code::

   import { FlmFilesDbDataLoader } from '@phfaist/zoodb/dbdataloader/flmfilesdb';

The FLM-files loader reads the ``\begin{field}{<name>} ... \end{field}``
blocks of a file through the zoo's FLM engine, which it takes as ``engine``
in its configuration (:func:`makeStandardYamlDbDataLoader` passes
``zoodb.zoo_flm_engine``).  Content outside the blocks, or a block that is not
closed, is an error that gives the file, the line and the column; the fields'
positions are recorded as for YAML files.


.. js:autoclass:: src/dbdataloader/flmfilesdb.FlmFilesDbDataLoader
   :short-name:
   :members:
