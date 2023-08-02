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

  import { StandardZooDb } from '@phfaist/zoodb/std/stdzoodb';
  
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
  
  import { StandardZooDbYamlDataLoader } from '@phfaist/zoodb/std/load_yamldb';
  
  const csl_filename = .... // path to CSL citation formatting style to use

  //
  // Here we define a `MyFancyZooDb` object that is set up exactly
  // as we'd like
  //
  export class MyFancyZooDb extends StandardZooDb
  {
      constructor(config)
      {
          super(loMerge({
  
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
                      csl_style:
                          fs.readFileSync( csl_filename, { encoding: 'utf-8', }, ),

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
  
          }, config));
      }
  
      //
      // Perform any necessary zoo database validation
      //
      async validate()
      {
          // ...
      }
    
  }

  // -----------------
  
  export class MyFancyZooDbYamlDataLoader extends StandardZooDbYamlDataLoader
  {
      constructor()
      {
          // Specify the path where we can find the schemas !
          const schema_root = `file://......./`;
          super({
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
  
          });
          this.schema_root = schema_root;
      }
  };
  
  // -----------------
  
  //
  // A convenience function to do everything necessary to load the zoo.
  //
  export async function load_my_fancy_zoo_db()
  {
      const myzoodb = new MyFancyZooDb();
      myzoodb.install_zoo_loader(new MyFancyZooDbYamlDataLoader({ }));
  
      await myzoodb.load();
  
      return myzoodb;
  }
  


Also, check out our simple example which we provide in a separate repo (see
:ref:`example`).

