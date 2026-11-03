.. _zoodb-std:

Setting up a "Standard" ZooDb
=============================

Using the `ZooDb` class interface directly is relatively tedious, so I've
regrouped together some common options and initialization tasks into some
standard preset, see :func:`makeStandardZooDb` and
:func:`makeStandardYamlDbDataLoader`.

To set up a simple “standard zoo,” you can find inspiration from the following
boilerplate code:

.. code:: javascript

  import fs from 'fs';

  import loMerge from 'lodash/merge.js';

  import { ZooDb, ZooDbDataLoaderHandler } from '@phfaist/zoodb';

  import { makeStandardZooDb } from '@phfaist/zoodb/std/stdzoodb';
  
  import {
      use_relations_populator
  } from '@phfaist/zoodb/std/use_relations_populator';
  import {
      use_gitlastmodified_processor
  } from '@phfaist/zoodb/std/use_gitlastmodified_processor';
  import {
      use_flm_engine
  } from '@phfaist/zoodb/std/use_flm_engine';
  import {
      use_flm_processor
  } from '@phfaist/zoodb/std/use_flm_processor';
  import {
      use_searchable_text_processor
  } from '@phfaist/zoodb/std/use_searchable_text_processor';
  
  import { makeStandardYamlDbDataLoader } from '@phfaist/zoodb/std/stdyamldbdataloader';
  
  const csl_filename = .... // path to CSL citation formatting style to use
  const schemas_root_path = .... // path to folder that contains the 'schemas' folder

  //
  // We can define a custom `MyFancyZooDb` object that can add additional
  // properties to perform validation checks and/or to access zoo contents, etc.
  //
  export class MyFancyZooDb extends ZooDb
  {
      constructor(config)
      {
          super(config);
      }
  
      //
      // Perform any necessary zoo database validation
      //
      async validate()
      {
          // ...
      }

      // 
      // You can add here any functions that might be helpful to access computed
      // properties of objects in the zoo.
      //

      // a simple example of such a function--
      get_total_number_of_objects_of_type_foobar()
      {
          let foobar_objects_db = this.objects.foobar;
          return Object.keys(foobar_objects_db).length;
      }
    
  }

  export async function createMyFancyZooDb(config={}, { schema_root }={})
  {
      schema_root ??= schemas_root_path;

      const csl_style =
          await fs.promises.readFile( csl_filename, { encoding: 'utf-8', }, );
  
      config = loMerge({
    
          ZooDbClass: MyFancyZooDb,
  
          fs,
  
          fs_data_dir: ...., // Set the path where to find the database data!
    
          //
          // Enable the following standard features.  To disable (i.e., not
          // enable) any of these features, provide the value `null`: e.g.,
          // " use_flm_processor: null, ... ".  The FLM processor needs the
          // FLM engine.
          //
          use_relations_populator,
          use_gitlastmodified_processor,
          use_flm_engine,
          use_flm_processor,
          use_searchable_text_processor,

          //
          // An error in the FLM content aborts the zoo's processing.  Set
          // this to `true` to keep the diagnostics on the objects and go on
          // (e.g., for an editor's live preview).
          //
          continue_with_errors: false,
    
          //
          // Specify options for FLM text content:
          //
          flm_options: {

              // The configuration of the FLM engine, as data.
              engine: {
                  dollar_math: false, // whether $...$ delimits math
                  settings: {
                      // the settings of the standard features, e.g. a macro
                      // \myzoo for the content:
                      //userdefs: { macros: { myzoo: { content: 'My Fancy Zoo' } } },
                  },
              },
    
              refs:  {
                  // Specify how to refer to a given object (by its "name" or
                  // "title" or whatever object property you like)
                  myfancyobject: {
                      formatted_ref_flm_text_fn:
                          (object_id, object) => object.mynameproperty,
                  },
              },
    
              citations: {
                  // CSL citation formatting style to use:
                  csl_style: csl_style,
  
                  // YAML or JSON file manually specifying DOIs for arXiv
                  // identifiers to fix some broken arXiv entries:
                  override_arxiv_dois_file:
                      'citations_info/override_arxiv_dois.yml',
  
                  // Bibliography files where to find predefined citation
                  // entries.  Files are JSON/CSL or YAML/CSL.
                  preset_bibliography_files: [
                      'citations_info/bib_preset.yml',
                  ],
  
                  // User agent to use when querying remote citation information
                  // (e.g. on the arXiv.org API):
                  default_user_agent: null,
              },
              
              resources: {
                  // "null" means to use defaults
                  rename_figure_template: null,
                  figure_filename_extensions: null,
                  graphics_resources_fs_data_dir: null,
              },
    
          },
    
          searchable_text_options: {
              // which DB object types to search
              object_types: ['myfancyobject',....],
              // show each citation's entry in place of its mark in the search text (false: the mark alone, e.g. [1])
              flm_citations_in_place: true,
              // true: the search text of an FLM field also includes its footnotes (and, if flm_citations_in_place is false, the works it cites)
              flm_pieces: false,
          },
    
          zoo_permalinks: {
              // Specify the website URL locations where a given object, specified
              // by its type and ID, is to be found
              object:
                  (object_type, object_id) => `/${object_type}/${object_id}`,
              graphics_resource:
                  (graphics_resource) => `/fig/${graphics_resource.src_url}`,
          },

          
          //
          // Specify where to find our object schemas
          //
          schemas: {
              schema_root: schema_root,
              schema_rel_path: 'schemas/',
              schema_add_extension: '.yml',
          },
  
          // 
          // Specify which schemas to load.  Not necessary if you want to load
          // all .yml files in the schema_root (as long as it's a filesystem
          // folder)
          //
          //schema_names: [ 'myfancyobject', ]
    
      }, config);
  
      return await makeStandardZooDb(config);
  }


  // -----------------
  
  export async function createMyFancyYamlDbDataLoader(zoodb)
  {
      let config = {
          //
          // Specify object types & where to find the corresponding data.
          // Data file paths are relative to the StandardZooDb's
          // `fs_data_dir` config property.
          //
          objects: {
              myfancyobject: {
                  schema_name: 'myfancyobject',
                  data_src_path: 'myfancyobjects/',
              },
          },
          
      };

      return await makeStandardYamlDbDataLoader(zoodb, config);
  }

  // -----------------
  
  //
  // A convenience function to do everything necessary to load the zoo.
  //
  export async function load_my_fancy_zoo_db()
  {
      const zoodb = await createMyFancyZooDb();
      const loader = await createMyFancyYamlDbDataLoader(zoodb);

      const loader_handler = new ZooDbDataLoaderHandler(
          loader,
          {
              //throw_reload_errors: true,
          }
      );
      zoodb.install_zoo_loader_handler(loader_handler);

      await zoodb.load();

      return zoodb;
  }
  


Also, check out our simple example which we provide in a separate repo (see
:ref:`example`).  To render the zoo's pages, see :doc:`website11ty`.


What the standard zoo holds
---------------------------

:func:`makeStandardZooDb` creates the FLM engine along with the following
processors: the relations populator, the git last-modified processor, the FLM
processor, the searchable text processor, and the ``extra_db_processors`` (by
``priority``).  The returned zoo carries:

- ``zoodb.zoo_flm_engine``: the FLM engine (:js:class:`ZooFlmEngine`, see
  :doc:`zoodb.zooflm`), which the site can use to render pages
  (see ``render_document()``, ``snippet()``, ``html_stylesheet()``,
  ``html_scripts()``).  It exists as soon as :func:`makeStandardZooDb`
  returns, before any data is loaded.
- ``zoodb.zoo_flm_processor``: the FLM processor (:js:class:`ZooFlmProcessor`,
  see :doc:`zoodb.dbprocessor-flm`), with its scan results and its resource
  collector.
- ``zoodb.zoo_relations_populator``, ``zoodb.zoo_gitlastmodified_processor``,
  ``zoodb.searchable_text_processor``: the other processors (``null`` when not
  enabled); ``zoodb.zoodb_named_processors`` collects the installed processors
  by name.
- ``zoodb.zoo_permalinks`` and ``zoodb.zoo_object_permalink(object_type,
  object_id)``, from the config's ``zoo_permalinks``.
- ``zoodb.config``: the configuration, merged with its defaults.

Files are read through the config's ``fs`` via ``fs.promises``.


The FLM options
---------------

The configuration keys of the FLM features, all optional except where noted
(the full list of keys is with :func:`makeStandardZooDb`):

``use_flm_engine``
   The factory of the zoo's FLM engine, :func:`use_flm_engine`.  Needed by
   ``use_flm_processor`` and by the FLM-files loader; the searchable text
   renders the FLM fields through it.

``use_flm_processor``
   The factory of the FLM processor, :func:`use_flm_processor`.

``continue_with_errors``
   ``false`` (the default): an Error in the FLM content aborts the zoo's
   processing with a :js:class:`ZooFlmError` that lists the diagnostics.
   ``true``: the error policy of the engine and of the processor is
   ``'continue'``; the diagnostics stay on the objects
   (``obj._zoodb.flm_diagnostics``) and the renders show the backend's
   recovery markup.

``flm_options.engine``
   The core's configuration, as data: ``dollar_math`` (whether ``$…$``
   delimits math; default ``false``), ``settings`` (the settings of the
   standard features, one map per feature; user definitions such as macros
   under ``userdefs``), ``off`` (standard features switched off, by name),
   ``link_target_blank`` (default ``true``: in the HTML output, a link to an
   address outside the site opens in a new tab, see :doc:`zoodb.zooflm`), and
   ``render_value_options`` (how the composer's ``rdr()`` renders a list).  An
   unknown key, feature or setting is an error that names it.  A browser app
   that renders the zoo's data dump creates its engine with the same
   configuration.

``flm_options.allow_unresolved_references``
   ``true``: a reference that resolves to nothing is a Warning (the label is
   shown) instead of an Error.

``flm_options.allow_unresolved_citations``
   ``true``: a cited key that has no compiled citation (under
   ``continue_with_errors``, one that could not be retrieved) shows as
   verbatim text instead of being reported by the renders.  A key whose cite
   prefix has no citation source is an error all the same.

``flm_options.refs``, ``flm_options.refs_defaults``
   Per object type, how a reference to an object is displayed:
   ``formatted_ref_flm_text_fn(object_id, object)`` returns a standalone
   fragment (such as ``object.name``) or FLM text.  By default, the object's
   ``name`` when it is a standalone FLM field or a plain string, else its ID.
   ``refs_defaults`` applies to all types before ``refs``.

``flm_options.contexts``
   Further output contexts of the index, ``{ NAME: { object_href(object_type,
   object_id) } }``, for pages rendered with other links; the context
   ``default`` uses ``zoo_permalinks.object``.

``flm_options.citations``
   The citations (see :doc:`zoodb.citationmanager`): ``csl_style`` (the CSL
   style, as XML text; needed as soon as the content cites anything, even
   citations that come already formatted), ``sources`` (the citation sources:
   ``arxiv``, ``doi``, ``manual``, ``preset``, and your own),
   ``override_arxiv_dois_file``, ``preset_bibliography_files``,
   ``default_user_agent``, ``cache_dir`` (default
   ``'_zoodb_citations_cache'``, created unless ``cache_dir_create`` is
   ``false``), ``cache_entry_default_duration_ms``, ``source_options``,
   ``citation_manager_options``.  With ``skip_save_cache: true``, the citation
   database is kept in memory only: ``citations.jsonl`` is neither read nor
   written; the cache of compiled citations is still read when present, never
   written.

``flm_options.resources``
   The images (see :doc:`zoodb.resourcecollector`):
   ``graphics_resources_fs_data_dir`` (where the image files are, default
   ``fs_data_dir``), ``figure_filename_extensions`` (the extensions tried),
   ``rename_figure_template`` (the target name of a file),
   ``rename_use_file_hash``, ``read_file_content``, ``global_vector_scale``
   and ``global_raster_scale`` (the factors of the images' physical size), and
   ``make_resource_retriever_graphics_path`` and
   ``make_resource_processors_graphics_path`` (to replace the retriever or the
   processors).  The option ``graphics_use_srcset_parceljs`` (a ``srcset`` of
   resized images for each raster image) is accepted but not yet enabled: the
   engine needs a constructor of flm-core that is not yet available (upstream
   request U2), so images are published without ``srcset`` for now, and the
   engine's creation prints a warning.

``zoo_permalinks`` *(required)*
   ``object(object_type, object_id)``, the href of an object's page (the
   ``default`` context of the index), and ``graphics_resource(resource_data)``,
   the address of a collected image (``resource_data.src_url`` is the target
   name the retriever gave the file).  ``object`` may return ``null`` for an
   object type without a page, in which case the FLM processor makes no index
   entry for those objects (nor for the labels of their fields), and references
   to them are unresolved (see :doc:`zoodb.dbprocessor-flm`).
