import fs from 'fs';
import path from 'path';

import jsyaml from 'js-yaml';
import glob from 'glob';

import jsonschema from 'jsonschema';
import $RefParser from "@apidevtools/json-schema-ref-parser";
import json_refparser_resolver_http from "@apidevtools/json-schema-ref-parser/lib/resolvers/http.js";


/*
const zoodbdataloader = new ZooDbDataLoader({
    objects: {
      code: {
        schema_name: 'ecc',
        data_src_path: 'codes/',
        //glob_pattern: '**'+'/'+'*.yml',
        //load_objects: (d) => [ d ] // single file data contents = single object
      },
      domain: {
        //schema_name: 'domain',
        data_src_path: 'hierarchy/domains/',
      },
      kingdom: {
        //schema_name: 'kingdom',
        data_src_path: 'hierarchy/kingdoms/',
      },
      codelist: {
        //schema_name: 'codelist',
        data_src_path: 'code_lists/',
      },
      contributor: {
        schema_name: 'contributor',
        data_src_path: 'contributors/contributorsdb.yml',
        // load each root key in the file as a separate object, save key as 'contributorid' field
        load_objects:
            (d) => Object.entries(d).map( (k, v) => Object.extend({}, {contributorid: k}) ),
      }
    },
    data_root_dir: '/path/to/data/files/root/',
    object_defaults: {
      glob_pattern: '**'+'/'+'*.yml',
      load_objects: (d) => [ d ],
    }
    schemas: {
      schema_root: 'https://errorcorrectionzoo.org/schemas/',
      schema_add_extension: '.json',
    },
  });

const dbdata = zoodbdataloader.load();
*/


class ZooDbDataLoader
{

    constructor(config)
    {
        this.config = Object.assign({}, config);
        this.config.objects = Object.assign({}, this.config.objects || {});
        this.config.object_defaults = Object.assign({}, this.config.object_defaults || {});
        this.config.schemas = Object.assign({}, this.config.schemas || {}) : {};

        // set defaults in config
        this.config.object_defaults.glob_pattern ||= '**/*.{yml,yaml,json}';
        this.config.object_defaults.load_objects ||=  (d) => [ d ] ;
        Object.entries(this.config.objects).forEach(
            (objectname, objectconfig) => {
                objectconfig.schema_name ||= objectname;
                objectconfig.data_src_path ||= objectname + 's/'; // 'code' -> 'codes/'
                objectconfig.glob_pattern ||= this.object_defaults.glob_pattern;
                objectconfig.load_objects ||= this.object_defaults.load_objects;
            }
        );

        this.schema_validator = new jsonschema.Validator();
        this.schema_ref_parser = new $RefParser();

        
        this.schema_refparser_resolver_http = {
            ...json_refparser_resolver_http,
            order: 1,
            read(file) {
                if (! file.url.endsWith(this.config.schemas.schema_add_extension) ) {
                    file.url += this.config.schemas.schema_add_extension;
                }
            }
        };
    }

    // -------------------------------------------
    // methods to load zoo data
    // -------------------------------------------

    load()
    {
        const promises = Object.entries(config.objects).map(
            (o) => {
                const [objectname, objectconfig] = o;
                return this._load_objects_of_type(objectname, objectconfig);
            }
        );

        return Promise.all(promises).then( (results) => {
            // results = [ (objectname1, d1), (objectname2, d2), ... ]
            const dbdata = {
                //
                // Provide all the schema objects (contains circular refs!):
                //
                schemas: 
                  Object.entries(this.config.objects).map(
                      (objectname, objectconfig) =>
                          this.schema_validator.getSchema(objectconfig.schema_name)
                  ),
                //
                // Provide all the object data:
                //
                objects: Object.fromEntries( results ),
            };
            return dbdata;
        } );
    }

    async _get_schema_by_name(schema_name)
    {
        let full_schema_path = this.config.schemas.schema_root + schema_name;
        return await this.schema_ref_parser.dereference(
            full_schema_path,
            {
                resolve: {
                    http: false,
                    myhttp: this.schema_refparser_resolver_http,
                }
            }
        );
    }

    async _load_objects_of_type(loadconfig, objectname, objectconfig) {

        const schema_name = objectconfig.schema_name;
        const schema = await this._get_schema_by_name(schema_name);

        this.schema_validator.addSchema(schema);
        
        const data_src_files = this.gather_src_files(
            loadconfig,
            objectconfig.data_src_path,
            objectconfig.glob_pattern,
        );
        
        let loaded_objects = [];

        data_src_files.forEach( (data_file_name) => {
            const objects = this._parse_object_file_into_objects(data_file_name, objectname,
                                                                 objectconfig);
            objects.forEach( (o) => {
                // o == [objid,obj]
                loaded_objects.push(o);
            } );
        });

        let d = {};

        loaded_objects.forEach( (o) => {
            const [objid, obj] = o;
            if (d.hasOwnProperty(objid)) {
                throw new Error(
                    `ID ‘${objid}’ was assigned to multiple objects, in `
                    +`files ‘${d[objid].o.source_filename}’ and ‘${obj.o.source_filename}’`
                );
            }
        } );

        return [objectname, d];
    }

    gather_src_files(loadconfig, data_src_path, objectconfig)
    {
        const fullsrcpath = path.join(loadconfig.root_data_dir, data_src_path);
        if ( fs.statSync(fullsrcpath).isDirectory() ) {
            const the_glob_pattern = objectconfig.glob_pattern || '**/*.yml';
            return glob.sync( path.join( fullsrcpath, the_glob_pattern ) );
        } else {
            return [ fullsrcpath ];
        }
    }

    read_file_contents(path)
    {
        return fs.readFileSync(path);
    }
    parse_file_data(objectconfig, path, file_contents)
    {
        if (path.endsWith('.yml') || path.endsWith('.yaml')) {
            return jsyaml.load( file_contents );
        } else if (path.endsWith('.json')) {
            return JSON.parse( file_contents );
        } else {
            throw new Error(`Unknown file type for path ‘${path}’`);
        }
    }

    _parse_object_file_into_objects(data_file_name, objectname, objectconfig)
    {
        const load_objects = objectconfig.load_objects ||  (d) => [ d ] ;

        const file_contents = this.read_file_contents(data_file_name);
        const file_data = this.parse_file_data( objectconfig, data_file_name, file_contents );

        const objects_data = load_objects( file_data );

        
    }
}

