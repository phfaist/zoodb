The Zoo's Data Files
====================

The idea of a moderately-sized zoo database is that the source data can be
stored in a simple collection of source files.  You can place these files under
version control.  You can host your files in a repository on `github.com
<https://github.com/>`_, taking advantage of features such as issue tracking,
handling pull requests, reviews, action scripts for deployment, etc.

For example, the Error Correction Zoo's source files are in the github
repository https://github.com/errorcorrectionzoo/eczoo_data.git.


Collections of YAML files
-------------------------

A useful format to keep your data files is the YAML file format.  YAML is a
common markup language to store structured data.  You can also `google “YAML
tutorial” <https://google.com/search?q=YAML+tutorial>`_ or check out the
language's `Wikipedia page <https://en.wikipedia.org/wiki/YAML>`_.

YAML looks like this:

.. code:: yaml

   key1:
     subkey1: value1
     subkey2: value2

   # Comments are introduced with the ‘#’ char
   key2:
     - a
     - list
     - of
     - items
     - this: is
       another: key-value
       mapping: true

   key3: |-
     Long strings can be typeset over multiple lines,
     like this, using the "|-" syntax.

     This string field value consists of multiple
     paragraphs. Pay attention to indentation!

YAML is very convenient for storing data structures, as YAML files are both
human-readable and editable as well as machine-readable.

One of ZooDb's data loaders scans a specified folder recursively for YAML files,
and assumes that each file corresponds to an object to be loaded in the
database.  See the documentation for :class:`YamlDbDataLoader`.

(You can actually configure the loader in many different ways.  For instance,
you can load all objects from a single YAML file.)



Collections of JSON files
-------------------------

JSON files are valid YAML 1.2 files, so the YAML loader can also load JSON
files!


Collections of FLM files
------------------------

One of the downsides of typing YAML files is if you have to type long fields of
Flexible Latex-like Markup (FLM) content (see :ref:`zoodb-flm`).  In this case,
it is preferable to work in a file format that your editor can directly treat as
LaTeX-like code.

FLM files offer this possibility.  They are files whose content is directly FLM
code, with object field values delimited in specific
``\begin{field}{}...\end{field}`` environments.  The file also begins with a
“front matter” section consisting of YAML content that can directly set the
value of some simple fields.

The ZooDb library offers the :class:`FlmFilesDbDataLoader` class which behaves
very much like :class:`YamlDbDataLoader`, except that it scans for FLM files
(with extension '.flm') instead of YAML files.

Here's an example of how an FLM file would look like:

.. code:: latex

   ---
   # This is the YAML front matter.
   title: 'The title of my article'
   authors:
     - 'Philippe Faist'
   date: '2023-08-22'
   ---

   \begin{field}{short_description}
   Here's a brief description of the ZooDb object that this
   FLM file represents.
   \end{field}

   \begin{field}{content}
   
   Here's the main content of this ZooDb object.

   The object fields ‘title’, ‘authors’, and ‘date’ of the
   object are set in the YAML front matter.  I'm assuming
   that they are properly declared in this object type's
   schema!

   The object fields ‘short_description’ and ‘content’
   are not set in the YAML front matter, but instead,
   are set using this special FLM syntax with the “field”
   FLM environment.  (We could also have set these fields
   in the YAML front matter.  It would simply have been
   less convenient.)

   \end{field}
