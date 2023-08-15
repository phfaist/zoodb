.. _zoodb-std:

Setting up a "Standard" ZooDb
=============================

Using the `ZooDb` class interface directly is relatively tedious, so I've
regrouped together some common options and initialization tasks into some
standard presets.

To set up a simple “standard zoo,” you can find inspiration from the following
boilerplate code:

.. code::
   
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
      use_flm_environment
  } from '@phfaist/zoodb/std/use_flm_environment';
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

  export async function createMyFancyZooDb(config={})
  {
  
      const csl_style =
          await fs.promises.readFile( csl_filename, { encoding: 'utf-8', }, );
  
      config = loMerge({
    
          ZooDbClass: MyFancyZooDb,
  
          fs,
  
          fs_data_dir: ...., // Set the path where to find the database data!
    
          //
          // Enable the following standard features.  To disable (i.e., not
          // enable) any of these features, provide the value `null`: e.g.,
          // " use_flm_processor: null, ... ".
          //
          use_relations_populator,
          use_gitlastmodified_processor,
          use_flm_environment,
          use_flm_processor,
          use_searchable_text_processor,
    
          //
          // Specify options for FLM text content:
          //
          flm_options: {
    
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
              object_types: ['myfancyobject',....]
          },
    
          zoo_permalinks: {
              // Specify the website URL locations where a given object, specified
              // by its type and ID, is to be found
              object:
                  (object_type, object_id) => `/${object_type}/${object_id}`,
              graphics_resource:
                  (graphics_resource) => `/fig/${graphics_resource.src_url}`,
          },
    
      }, config);
  
      return await makeStandardZooDb(config);
  }


  // -----------------
  
  export async function createMyFancyYamlDbDataLoader(zoodb, { schema_root }={})
  {
      schema_root ??= `file://${schemas_root_path}/`;

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
          
          //
          // specify where to find schemas
          //
          schemas: {
              schema_root: schema_root,
              schema_rel_path: 'schemas/',
              schema_add_extension: '.yml',
          },
  
      };

      return await makeStandardYamlDbDataLoader(config);
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
:ref:`example`).

