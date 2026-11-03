Collecting external resources
=============================

The resource collector gathers the external resources that the zoo's content
uses, such as the image files that FLM content shows with
``\includegraphics``.  For each resource type, a *retriever* finds the file and
names its target, and *processors* inspect it.  The FLM processor (see
:doc:`zoodb.dbprocessor-flm`) uses one collector, with the resource type
``graphics_path``, the filesystem retriever and the graphics processor below;
:func:`use_flm_processor` sets them up from ``flm_options.resources`` (see
:ref:`zoodb-std`).

.. code::

   import { ResourceCollector } from '@phfaist/zoodb/resourcecollector';


.. js:autoclass:: src/resourcecollector/index.ResourceCollector
   :short-name:
   :members:
   :exclude-members: ResourceCollector


Images of FLM content
---------------------

For each image path that the FLM processor's scan finds in a fragment, the
path is resolved against the directory of the object's source file
(``\includegraphics{images/dot}`` in ``people/alice.yml`` gives
``people/images/dot``) and collected with ``collect('graphics_path',
source)``:

1. The filesystem retriever finds the file under its source directory
   (``graphics_resources_fs_data_dir``, by default the zoo's ``fs_data_dir``),
   trying each extension of its list (by default ``''``, ``.svg``, ``.png``,
   ``.jpeg``, ``.jpg``: here ``people/images/dot.png``), and names the target
   with its template (by default
   ``fig-NAME.HASH.EXT``, ``HASH`` from the file's content).

2. The graphics processor reads the file (PNG, JPEG, TIFF or SVG) and returns
   ``{ graphics: { kind, media_type, width_px, height_px, dpi, width_pt,
   height_pt } }``: ``kind`` is ``'raster'`` (the pixel size, the resolution,
   and the physical size in points that the resolution gives) or ``'vector'``
   (the physical size in points).  A measure the file does not give is
   ``null``.  The global scale options multiply the physical size: by default
   1.28 for vector images, nothing for raster images.

3. The FLM processor completes this data into an entry of the engine's
   graphics table (``engine.set_graphics()``):

   .. list-table::
      :header-rows: 1
      :widths: 25 75

      * - key
        - value
      * - ``origin``
        - the label of the fragment that shows the image
          (``people/alice.yml#biography``)
      * - ``path``
        - the path as written in the content (``images/dot``)
      * - ``identity``
        - the resolved source path (``people/images/dot.png``)
      * - ``address``
        - the address written in the output:
          ``graphics_address(resource_data)``, in the standard setup
          ``zoo_permalinks.graphics_resource(resource_data)``
      * - ``kind``, ``media_type``, ``width_px``, ``height_px``, ``dpi``,
          ``width_pt``, ``height_pt``
        - from the graphics processor

   ``resource_data`` is ``{ src_url, source, graphics, target_info,
   resolved_info, processed_info }``: ``src_url`` is the target name the
   retriever gave the file, ``source`` the resolved source path, ``graphics``
   the graphics processor's data.  A permalink function such as
   ``(resource_data) => `/pic/${resource_data.src_url}``` gives each image its
   address on the site.

The collector keeps what it collected: the site serves each image at its
address from
``zoodb.zoo_flm_processor.resource_collector.collected_resources.graphics_path``,
whose values carry the file's ``resolved_info.full_source_path`` and
``target_info.target_name`` (see :doc:`website11ty`).

An image that cannot be found or inspected stops the processing under the
``'abort'`` error policy; under ``'continue'``, it is the Error
``zoodb.graphics.collect-failed`` on its object, and the image gets no entry.
The option ``graphics_use_srcset_parceljs`` (a ``srcset`` of resized images
for each raster image) is accepted by the standard setup but not yet enabled:
images are published without ``srcset`` for now, and the engine's creation
prints a warning.


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
   :exclude-members: FilesystemResourceRetriever




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
   :exclude-members: FLMGraphicsResourceProcessor

.. js:autofunction:: src/resourcecollector/processor/flmgraphicsprocessor.graphics_media_type
   :short-name:
