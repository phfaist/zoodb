import fs from 'fs';
import path from 'path';

import jsyaml from 'js-yaml';
import glob from 'glob';

import jsonschema from 'jsonschema';
import $RefParser from "@apidevtools/json-schema-ref-parser";
import json_refparser_resolver_http from "@apidevtools/json-schema-ref-parser/lib/resolvers/http.js";
import json_refparser_resolver_file from "@apidevtools/json-schema-ref-parser/lib/resolvers/file.js";

import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader');






// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}


const default_resource_file_extensions = [
    ".svg",
    ".tex",
    ".pdf",
    ".xcf",
    ".ai",
    ".indd",
    ".afdesign",
    ".afpub",
    ".png",
    ".jpeg",
    ".jpg"
];


function get_default_ignore_file_name_match(resource_file_extensions) {
    const pattern = (
        '('
        // ---
        // backup files / desktop services
        + '^\\.DS_Store|\\~|\\.bak|\\.bkp|'
        // .git, .gitignore, .gitattributes, .gitmodules, etc.
        + '^\\.git.*|'
        // any latex temporary files lying around
        + '\\.dvi|\\.aux|\\.log|\\.fdb_latexmk|\\.fls|'
        // external resources!
        + resource_file_extensions.map( (ext) => escapeRegExp(ext) ).join('|')
        // ---
        + ')$'
    );
    return new RegExp(pattern, 'i'); // ignore upper/lower case in patterns
}




/*
const zoodbdataloader = new ZooDbDataLoader({
    objects: {
      code: {
        schema_name: 'ecc',
        data_src_path: 'codes', // Search ‘codes/’ folder in the root data dir
        //file_name_match: /\.yml$/,
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
    root_data_dir: '/path/to/data/files/root/',
    object_defaults: {
      file_name_match: /\.(ya?ml|json)$/i,
      ignore_file_name_match: /(\~|\.bak|^\.DS_Store)$/i,
      load_objects: (d) => [ d ],
    }
    schemas: {
      schema_root: 'https://errorcorrectionzoo.org/',
      schema_rel_path: '/schemas/',
      schema_add_extension: '.json',
    },
  });

const dbdata = zoodbdataloader.load();
*/


export class ZooDbDataLoader
{

    constructor(config)
    {
        this.config = Object.assign({}, config);
        this.config.objects = Object.assign({}, this.config.objects || {});
        this.config.object_defaults = Object.assign({}, this.config.object_defaults || {});
        this.config.schemas = Object.assign({}, this.config.schemas || {});

        // set defaults in config
        this.config.object_defaults.file_name_match ||= /\.(ya?ml|json)$/i;
        this.config.object_defaults.ignore_file_name_match
            ||= get_default_ignore_file_name_match(
                this.config.resource_file_extensions ?? default_resource_file_extensions
            );
        this.config.object_defaults.load_objects ||=  (d) => [ d ] ;
        this.config.object_defaults.expected_msg ||=
            `File name matching ‘/${this.config.object_defaults.file_name_match.source}/`
            +`${this.config.object_defaults.file_name_match.flags}’`;
        Object.entries(this.config.objects).forEach(
            (objpair) => {
                let [objectname, objectconfig] = objpair;
                objectconfig.objectname = objectname;
                objectconfig.schema_name ||= objectname;
                objectconfig.data_src_path ||= objectname + 's'; // 'code' -> 'codes/'
                objectconfig.file_name_match ||= this.config.object_defaults.file_name_match;
                objectconfig.ignore_file_name_match ||=
                    this.config.object_defaults.ignore_file_name_match;
                objectconfig.expected_msg ||= this.config.object_defaults.expected_msg;
                objectconfig.load_objects ||= this.config.object_defaults.load_objects;
            }
        );

        // simplify schema_root URL (e.g., remove x/y/../z -> x/z, will be
        // needed to compare when to add our custom extension)
        this.config.schemas.schema_root = new URL(this.config.schemas.schema_root).href;
        if (!this.config.schemas.schema_root.endsWith('/')) {
            throw new Error("Please include trailing slash in schemas.schema_root")
        }

        this.schema_validator = new jsonschema.Validator();
        this.schema_ref_parser = new $RefParser();
        this.schemas_by_name = {};

        if (!this.config.schemas.schema_root) {
            throw new Error("You did not specify a schema_root: in your config!");
        }
        let _config = this.config;
        this.schema_refparser_resolver = {
            ...json_refparser_resolver_http,
            order: 1,
            canRead(file) { return true; },
            read(file) {
                try {
                    debug(`file.url = ${file.url}, `
                          +`schema_root = ${_config.schemas.schema_root}`);

                    let url = file.url;
                    if (url.startsWith('file://') &&
                        ! url.startsWith(_config.schemas.schema_root)) {
                        // a "/schemas/xyz" path was already interpreted as
                        // being a path relative to the root directory, make it
                        // relative to the schema_root:
                        url = (new URL(url)).pathname.substring(1); // skip leading '/'
                    }

                    let full_url =
                        new URL(url, _config.schemas.schema_root).href;

                    debug(`full_url = ${full_url} (from url=${url})`);

                    if (full_url.startsWith(_config.schemas.schema_root) &&
                        ! full_url.endsWith(_config.schemas.schema_add_extension) ) {
                        full_url += _config.schemas.schema_add_extension;
                    }

                    const newfile = {
                        url: full_url,
                        extension: path.extname(full_url),
                    };
                    const protocol = (new URL(newfile.url)).protocol;

                    debug(`Resolved schema URL ${file.url} → ${newfile.url} `
                          + `extension=${newfile.extension} protocol=${protocol}`);
                    
                    if ( protocol == 'file:' ) { 
                        return json_refparser_resolver_file.read(newfile);
                    } else {
                        return json_refparser_resolver_http.read(newfile);
                    }
                } catch (err) {
                    console.error(`Error reading ${file.url}: ${err}`);
                    throw err;
                }
            }
        };
    }

    // -------------------------------------------
    // methods to load zoo data
    // -------------------------------------------

    // returns promise (as if async)
    async load()
    {
        debug(`Loading Zoo from ‘${this.config.root_data_dir}’ ...`);

        const objects_promises = Object.values(this.config.objects).map(
            async (objectconfig) => {
                return await this._load_objects_of_type(objectconfig);
            }
        );

        // debug(`load() objects_promises = ${objects_promises}`);

        return await Promise.all(objects_promises).then( (objects_results) => {
            // results = [ (objectname1, d1), (objectname2, d2), ... ]
            // debug(
            //     `load() -> got final objects_results=${JSON.stringify(objects_results)}`
            // );
            const dbdata = {
                //
                // Provide all the schema objects (might contain circular refs!):
                //
                schemas: Object.fromEntries(
                    Object.values(this.config.objects).map( (objectconfig) => {
                        return [objectconfig.objectname,
                                this.schemas_by_name[objectconfig.schema_name]];
                    } )
                ),
                //
                // Provide all the object data:
                //
                objects: Object.fromEntries( objects_results ),
            };
            //debug(`load() -> got final data=${JSON.stringify(dbdata)}`);
            return dbdata;
        } );
    }

    async get_schema_by_name(schema_name)
    {
        if ( this.schemas_by_name.hasOwnProperty(schema_name) ) {
            return this.schemas_by_name[schema_name];
        }

        let schema_path = path.posix.join(this.config.schemas.schema_rel_path, schema_name);
        schema_path = new URL(schema_path, this.config.schemas.schema_root).href;

        debug(`Requesting schema for ‘${schema_name}’ → path=‘${schema_path}’`);

        const schema = await this.schema_ref_parser.dereference(
            schema_path,
            {
                resolve: {
                    file: false,
                    http: false,
                    myresolver: this.schema_refparser_resolver,
                }
            }
        );
        this.schemas_by_name[schema_name] = schema;
        return schema;
    }

    async _load_objects_of_type(objectconfig)
    {
        debug(`Loading objects of type ${objectconfig.objectname} ...`);

        const schema_name = objectconfig.schema_name;
        const schema = await this.get_schema_by_name(schema_name);

        this.schema_validator.addSchema(schema);

        objectconfig.schema = schema;
        
        // const loaded_objects = [ ['aid',{ a: 'b', c: 'd' }],
        //                          ['bid',{ e: 'f', g: 'h' }] ];

        const loaded_objects = await this.walk_src_files(objectconfig);

        //debug(`_load_objects_of_type() [${objectconfig.objectname}] --> loaded_objects = ${JSON.stringify(loaded_objects)}`);

        let d = {};

        loaded_objects.forEach( (o) => {
            const [objid, obj] = o;
            //debug(`Got object: objid=${objid}, obj=${JSON.stringify(obj)}`);
            if (d.hasOwnProperty(objid)) {
                throw new Error(
                    `ID ‘${objid}’ was assigned to multiple objects, in `
                    +`files ‘${d[objid]._zoodb.source_file_path}’ and `
                    +`‘${obj._zoodb.source_file_path}’`
                );
            }
            d[objid] = obj;
        } );

        //debug(`_load_objects_of_type() [${objectconfig.objectname}] --> ${JSON.stringify(d)}`);

        return [objectconfig.objectname, d];
    }

    /// Recursively explores the given directory `root_path` and calls
    /// `dir_callback(root_path, rel_path, dirent)` for each encountered
    /// directory and `file_callback(root_path, rel_path, dirent)` for each
    /// encountered file.  The `file_callback()` is assumed async and must
    /// return an array.  The return value is a merged array of all the values
    /// returned by each call to `file_callback()`.  Any values returned from
    /// `dir_callback()` are ignored.
    ///
    /// If `root_path` is a file, then the `file_callback()` is called and its
    /// value returned in a length-1 array.
    async walk(root_path, dir_callback, file_callback)
    {
        debug(`walk(), root_path=‘${root_path}’`);
        // heavily inspired by
        // https://git.rootprojects.org/root/walk.js/src/branch/main/walk.js
        const do_walk_dir = async (rel_path, dirent) => {
            if (!dirent.isDirectory()) {
                const result = await file_callback(root_path, rel_path, dirent);
                // note, result must be list.
                console.assert(result instanceof Array, result);
                return result;
            }
            //debug(`Walking ‘${root_path}’ → directory ${rel_path}`);
            dir_callback(root_path, rel_path, dirent);
            const pathname = path.join(root_path, rel_path);
            const direntries = fs.readdirSync(pathname, { withFileTypes: true });
            // list of recursive call results, each is itself a list; will need
            // to flatten (cf below)
            const results_list = await Promise.all(
                direntries.map(
                    (dirent) => do_walk_dir(path.join(rel_path, dirent.name), dirent)
                )
            );
            return results_list.flat();
        };
        let dirent = fs.lstatSync(root_path);
        dirent.name = path.basename(root_path);
        return await do_walk_dir('', dirent);
    }

    async walk_src_files(objectconfig)
    {
        const fullsrcpath = path.join(this.config.root_data_dir, objectconfig.data_src_path);

        const dir_callback = (root_path, rel_path, dirent) => {
            debug(`Looking for ${objectconfig.objectname} objects in ‘${rel_path}’ ...`);
        };
        const file_callback = async (root_path, rel_path, dirent) => {
            const filename = dirent.name;
            if ( objectconfig.file_name_match.test( filename ) ) {
                // is data file, collect it!
                //debug(`Loading data from ‘${rel_path}’ ...`);
                return await this.parse_file_into_objects( root_path, rel_path, objectconfig );
            } else if ( objectconfig.ignore_file_name_match.test( filename ) ) {
                debug(`Ignored file ‘${filename}’`);
                return [];
            } else {
                throw new Error(
                    `Encountered unknown file ‘${filename}’ in `
                        +`‘${path.dirname(rel_path)}’.  Expected: `
                        +`${objectconfig.expected_msg}.`
                );
            }
        };

        return await Promise.all(
            await this.walk(
                fullsrcpath,
                // callback for directories:
                dir_callback,
                // callback for files:
                file_callback
            )
        );
    }

    read_file_contents(root_path, rel_path)
    {
        const fullpath = path.join(root_path, rel_path);
        return fs.readFileSync(fullpath);
    }
    parse_file_data(file_contents, objectconfig, root_path, rel_path)
    {
        try {
            if ( /\.ya?ml$/i.test(rel_path) ) {
                return jsyaml.load( file_contents );
            } else if ( /\.json$/i.test(rel_path) ) {
                return JSON.parse( file_contents );
            } else {
                throw new Error(`Unknown file type for path ‘${path}’`);
            }
        } catch (err) {
            console.error(
                `Parse error in ‘${rel_path}’: ${err}`
            );
            throw err;
        }
    }

    async parse_file_into_objects(root_path, rel_path, objectconfig)
    {
        const file_contents = this.read_file_contents(root_path, rel_path);
        const file_data = this.parse_file_data( file_contents, objectconfig,
                                                root_path, rel_path );

        let objects_data = objectconfig.load_objects( file_data );

        debug(`Loaded ${objects_data.length} ${objectconfig.objectname} object(s) `
                     +`from ‘${path.join(objectconfig.data_src_path,rel_path)}’`);

        // add _object field:
        objects_data.forEach( (obj) => {
            this.finalize_object(obj, objectconfig, root_path, rel_path);
        } );

        return objects_data.map( (obj) => [ obj._zoodb.id, obj ] );
    }

    finalize_object(obj, objectconfig, root_path, rel_path)
    {
        // validate according to the JSON schema
        const validation_result = this.schema_validator.validate(obj, objectconfig.schema);
        if (!validation_result.valid) {
            throw new Error(
                `Invalid ${objectconfig.objectname} object data in `
                +`‘${path.join(objectconfig.data_src_path,rel_path)}’:\n\n`
                +`*** ${ validation_result.errors.join("\n*** ") }\n`
            );
        }
        //debug(`Validated ${JSON.stringify(obj)} against `
        //             +`${JSON.stringify(objectconfig.schema)}`);

        obj._zoodb = {
            id: obj[objectconfig.schema._zoo_primarykey],
            source_file_path: path.join(objectconfig.data_src_path, rel_path),
        };
    }
};

