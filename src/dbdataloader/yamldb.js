
// import fs from 'fs';

import path from 'path';

import jsyaml from 'js-yaml';
// import glob from 'glob';

import jsonschema from 'jsonschema';
import $RefParser from "@apidevtools/json-schema-ref-parser";
import json_refparser_resolver_http from "@apidevtools/json-schema-ref-parser/dist/lib/resolvers/http.js";
//import json_refparser_resolver_file from "@apidevtools/json-schema-ref-parser/lib/resolvers/file.js";

import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader');

import { promisifyMethods } from '../util/prify.js';



// -----------------------------------------------------------------------------



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
    ".psd",
    ".png",
    ".jpeg",
    ".jpg",
];


function get_default_ignore_file_name_match(resource_file_extensions) {
    const pattern = (
        '('
        // ---
        // backup files / desktop services
        + '^\\.DS_Store|\\~|\\.bak|\\.bkp|'
        // autosave files (e.g., Emacs)
        + '^[.]?#.*|'
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
            (d) => Object.entries(d).map( (k, v) => Object.extend({}, v, {contributorid: k}) ),
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
    options: {
      normalize_id_for_uniqueness_check: (object_id) => object_id.toLowerCase()
    },
  });

const dbdata = zoodbdataloader.load();
*/


/**
 * Load schemas and object data from a collection of YAML (or JSON) source
 * files.
 *
 * Includes validation of the input object data against the provided schemas.
 *
 * Doc........
 *
 * Configuration options .............
 *
 * See also :class:`makeStandardZooDbYamlDataLoader` for a simplified loading.
 */
export class YamlDbDataLoader
{

    constructor(config)
    {
        this.config = Object.assign({}, config);
        this.config.objects = Object.assign({}, this.config.objects ?? {});
        this.config.object_defaults = Object.assign({}, this.config.object_defaults ?? {});
        this.config.schemas = Object.assign({}, this.config.schemas ?? {});

        this.fs = this.config.fs;
        this.fsPromises =
            this.config.fs.promises
            ?? promisifyMethods(this.config.fs, ['readData', 'readdir', 'stat', 'lstat',])
        ;

        this.config.options ??= {};
        this.config.options.normalize_id_for_uniqueness_check ??= ((x) => x.toLowerCase());

        // set defaults in config
        this.config.object_defaults.file_name_match ??= /\.(ya?ml|json)$/i;
        this.config.object_defaults.ignore_file_name_match
            ??= get_default_ignore_file_name_match(
                this.config.resource_file_extensions ?? default_resource_file_extensions
            );
        this.config.object_defaults.load_objects ??=  (d) => [ d ] ;
        this.config.object_defaults.expected_msg ??=
            `File name matching ‘/${this.config.object_defaults.file_name_match.source}/`
            +`${this.config.object_defaults.file_name_match.flags}’`;

        for (let [object_type, objectconfig] of Object.entries(this.config.objects))
        {
            objectconfig.object_type = object_type;
            objectconfig.schema_name ??= object_type;
            objectconfig.data_src_path ??= object_type + 's'; // 'code' -> 'codes/'
            objectconfig.file_name_match ??= this.config.object_defaults.file_name_match;
            objectconfig.ignore_file_name_match ??=
                this.config.object_defaults.ignore_file_name_match;
            objectconfig.expected_msg ??= this.config.object_defaults.expected_msg;
            objectconfig.load_objects ??= this.config.object_defaults.load_objects;
        }

        // simplify schema_root URL (e.g., remove x/y/../z -> x/z, will be
        // needed to compare when to add our custom extension)
        this.config.schemas.schema_root = new URL(this.config.schemas.schema_root).href;
        if (!this.config.schemas.schema_root.endsWith('/')) {
            throw new Error("Please include trailing slash in schemas.schema_root")
        }
        debug(`Using schema_root = ${this.config.schemas.schema_root}`);

        this.schema_validator = new jsonschema.Validator();
        this.schema_ref_parser = $RefParser;
        this.schemas_by_name = {};

        if (!this.config.schemas.schema_root) {
            throw new Error("You did not specify a schema_root: in your config!");
        }
        let _config = this.config;
        let fsPromises = this.fsPromises;
        this.schema_refparser_resolver = {
            ...json_refparser_resolver_http,
            order: 1,
            canRead(/*file*/) {
                //debug(`schema_refparser_rersolver.canRead: ${file.url}`);
                return true;
            },
            async read(file) {
                try {
                    debug(`schema_refparser_resolver.read() `, file);

                    let url = file.url;

                    if (url.startsWith('file://') &&
                        ! url.startsWith(_config.schemas.schema_root)) {
                        // a "/schemas/xyz" path was already interpreted as
                        // being a path relative to the root directory, make it
                        // relative to the schema_root:
                        url = (new URL(url)).pathname.substring(1); // skip leading '/'
                    }

                    let full_url = new URL(url, _config.schemas.schema_root).href;

                    // debug(`full_url = ${full_url} (from url=${url}); `,
                    //       {config_schemas: _config.schemas});

                    if (full_url.startsWith(_config.schemas.schema_root) &&
                        ! full_url.endsWith(_config.schemas.schema_add_extension) ) {
                        full_url += _config.schemas.schema_add_extension;
                        // debug(`with extension → full_url = ${full_url}`);
                    }

                    const newfile = {
                        url: full_url,
                        extension: path.extname(full_url),
                    };
                    const newfileurl = new URL(newfile.url);
                    const protocol = newfileurl.protocol;

                    debug(`Resolved schema URL ${file.url} → ${newfile.url} `
                          + `[extension=${newfile.extension} protocol=${protocol}]`);
                    
                    if ( protocol == 'file:' ) { 
                        //return json_refparser_resolver_file.read(newfile);
                        const filePathToRead = newfileurl.pathname;
                        // debug(`Finally! will read path `, filePathToRead);
                        const data = await fsPromises.readFile(filePathToRead,
                                                               { encoding: 'utf-8' });
                        // debug(` ---> retreived data = `, data);
                        return data;
                    } else {
                        return await json_refparser_resolver_http.read(newfile);
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

    async load()
    {
        debug(`Loading Zoo from ‘${this.config.root_data_dir}’ ...`);

        const { dbdata, /*reload_info*/ } = await this.reload();

        return dbdata;
    }

    async reload(dbdata)
    {
        debug(`(Re-)Loading Zoo from ‘${this.config.root_data_dir}’ ...`);
        
        dbdata ??= {
            objects: {},
        };

        let existing_dbdata_info = {
            dbdata: dbdata,
            source_modification_tokens: {},
            objects_by_source: {},
            reloaded_objects: Object.fromEntries(Object.keys(this.config.objects).map(
                (object_type) => [object_type, {}]
            )),
        };
        if (dbdata.objects != null && Object.keys(dbdata.objects).length) {
            for (const [object_type, objects_db] of Object.entries(dbdata.objects)) {
                for (const [object_id, object] of Object.entries(objects_db)) {
                    const { source_file_path, source_file_modification_token } = object._zoodb;
                    existing_dbdata_info.objects_by_source[source_file_path] ??= {};
                    existing_dbdata_info.objects_by_source[source_file_path][object_type] ??= [];
                    existing_dbdata_info.objects_by_source[source_file_path][object_type].push(
                        [object_id, object]
                    );
                    existing_dbdata_info.source_modification_tokens[source_file_path] ??=
                        source_file_modification_token;
                    if (existing_dbdata_info.source_modification_tokens[source_file_path]
                        != source_file_modification_token) {
                        throw new Error(
                            `Inconsistency in provided existing zoo dbdata, source file `
                            + `${source_file_path} has conflicting modification tokens `
                            + `${existing_dbdata_info.source_modification_tokens[source_file_path]}`
                            + `${source_file_modification_token} in different objects`
                        );
                    }
                }
            }
            // debug(`reload(): existing_dbdata_info is `, existing_dbdata_info);
            // debug(`reload(): sample is `,
            //       existing_dbdata_info.objects_by_source['codes/CSS.yml'].code);
        }

        // const objects_results = await Promise.all( Object.values(this.config.objects).map(
        //     async (objectconfig) => {
        //         const obj_results =
        //               await this._load_objects_of_type(objectconfig, existing_dbdata_info);
        //         // debug(`reload() object_type ‘${objectconfig.object_type}’ ->`, obj_results);
        //         return obj_results;
        //     }
        // ) );
        let objects_results = {};
        for (const [object_type, objectconfig] of Object.entries(this.config.objects)) {
            const obj_db =
                  await this._load_objects_of_type(objectconfig, existing_dbdata_info);
            objects_results[object_type] = obj_db;
        }


        const d = {
            dbdata: {
                //
                // Provide all the schema objects (might contain circular refs!):
                //
                schemas: Object.fromEntries(
                    Object.values(this.config.objects).map( (objectconfig) => {
                        return [objectconfig.object_type,
                                this.schemas_by_name[objectconfig.schema_name]];
                    } )
                ),
                //
                // Provide all the object data:
                //
                objects: objects_results,

            },
            //
            // Information about which objects were reloaded since last run
            //
            reload_info: {
                reloaded_objects: existing_dbdata_info.reloaded_objects,
            }
        };

        // debug(`(re)load(): d.dbdata.objects = `, d.dbdata.objects,
        //       `; d.reload_info.reloaded_objects = `, d.reload_info.reloaded_objects);

        return d;
    }



    async get_schema_by_name(schema_name)
    {
        if ( Object.hasOwn(this.schemas_by_name, schema_name) ) {
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

    async _load_objects_of_type(objectconfig, existing_dbdata_info)
    {
        debug(`Loading objects of type ${objectconfig.object_type} ...`);

        const schema_name = objectconfig.schema_name;
        const schema = await this.get_schema_by_name(schema_name);

        this.schema_validator.addSchema(schema);

        objectconfig.schema = schema;
        
        // const loaded_objects = [ ['aid',{ a: 'b', c: 'd' }],
        //                          ['bid',{ e: 'f', g: 'h' }] ];

        const loaded_objects_pair_with_id =
              await this.walk_src_files(objectconfig, existing_dbdata_info);

        let d = {};

        let unique_ids_check_seen = {};
        let normalize_id_fn = this.config.options.normalize_id_for_uniqueness_check;
        for (const [objid, obj] of loaded_objects_pair_with_id) {
            //debug(`Got object: objid=${objid}, obj=${JSON.stringify(obj)}`);
            const object_id_unique_normalized = normalize_id_fn(objid);
            const other_object = unique_ids_check_seen[object_id_unique_normalized];
            if (other_object !== undefined) {
                throw new Error(
                    `ID ‘${objid}’ was assigned to multiple objects (duplicate ID), in `
                    + `files ‘${other_object._zoodb.source_file_path}’ and `
                    + `‘${obj._zoodb.source_file_path}’ [normalized ID `
                    + `‘${object_id_unique_normalized}’]`
                );
            }
            // keep original ID in the database
            d[objid] = obj;
            // but use the "normalized" ID for the temporary ID uniqueness check
            // dictionary
            unique_ids_check_seen[object_id_unique_normalized] = obj;
        }

        //debug(`_load_objects_of_type() [${objectconfig.object_type}] --> ${JSON.stringify(d)}`);

        return d; //[objectconfig.object_type, d];
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
        // debug(`walk(), root_path=‘${root_path}’`);
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
            await dir_callback(root_path, rel_path, dirent);

            const pathname = path.join(root_path, rel_path);

            // avoid using "readdir(..., { withFileTypes: true })" because we
            // might want to use other fs interfaces that don't support this
            // option (e.g. fs-remote)
            const direntryfnames = await this.fsPromises.readdir(pathname);

            // list of recursive call results, each is itself a list; will need
            // to flatten (cf below)
            const results_list = await Promise.all(
                direntryfnames.map(
                    async (direntryfname) => {
                        let therelpath = path.join(rel_path, direntryfname);
                        let thefullpath = path.join(root_path, therelpath);
                        let dirent = await this.fsPromises.lstat(thefullpath);
                        dirent.name = direntryfname; //thefullpath;
                        return await do_walk_dir(therelpath, dirent);
                    }
                )
            );
            return results_list.flat();
        };
        let dirent = await this.fsPromises.lstat(root_path);
        dirent.name = path.basename(root_path);
        return await do_walk_dir('', dirent);
    }

    async walk_src_files(objectconfig, existing_dbdata_info)
    {
        const fullsrcpath = path.join(this.config.root_data_dir, objectconfig.data_src_path);

        const dir_callback = (root_path, rel_path, /*dirent*/) => {
            debug(`Looking for ${objectconfig.object_type} objects in ‘${rel_path}’ ...`);
        };
        const file_callback = async (root_path, rel_path, dirent) => {
            const filename = dirent.name;
            if ( objectconfig.file_name_match.test( filename ) ) {
                // is data file, collect it!
                //debug(`Loading data from ‘${rel_path}’ ...`);
                return await this.parse_file_into_objects(
                    root_path, rel_path, objectconfig, existing_dbdata_info
                );
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

        return await this.walk(
            fullsrcpath,
            // callback for directories:
            dir_callback,
            // callback for files:
            file_callback
        );
    }

    async get_file_modification_token(root_path, rel_path)
    {
        const fullpath = path.join(root_path, rel_path);
        const stat_info = await this.fsPromises.stat(fullpath);
        return stat_info.mtimeMs;
    }

    async read_file_contents(root_path, rel_path)
    {
        const fullpath = path.join(root_path, rel_path);
        //debug(`read_file_contents ${fullpath}`);
        return await this.fsPromises.readFile(fullpath);
    }

    parse_file_data(file_contents, objectconfig, root_path, rel_path)
    {
        // in case root_path is already a JSON/YAML file and rel_path is empty
        const fullpath = path.join(root_path, rel_path);
        try {
            if ( /\.ya?ml$/i.test(fullpath) ) {
                return jsyaml.load( file_contents );
            } else if ( /\.json$/i.test(fullpath) ) {
                return JSON.parse( file_contents );
            } else {
                throw new Error(`Unknown file type for path ‘${fullpath}’`);
            }
        } catch (err) {
            console.error(
                `Parse error in ‘${fullpath}’: ${err}`
            );
            throw new Error(`Parse error in ‘${fullpath}’: ${err}`);
        }
    }

    async parse_file_into_objects(root_path, rel_path, objectconfig, existing_dbdata_info)
    {
        const { object_type } = objectconfig;
        const source_file_path = path.join(objectconfig.data_src_path, rel_path);
        const source_file_modification_token =
              await this.get_file_modification_token(root_path, rel_path);

        if (source_file_path in existing_dbdata_info.objects_by_source
            && object_type in existing_dbdata_info.objects_by_source[source_file_path]) {

            // We already have data loaded from this source file.  Let's check
            // if we can keep the objects we've already seen or if the file has
            // been modified since.

            const old_modification_token =
                  existing_dbdata_info.source_modification_tokens[source_file_path];
            if (old_modification_token === source_file_modification_token) {
                // same token, file hasn't changed

                debug(`File ‘${source_file_path}’ has not changed, re-using existing objects`);

                let objects_data =
                    existing_dbdata_info.objects_by_source[source_file_path][object_type];

                return objects_data;
            }

            debug(`File ‘${source_file_path}’ has changed since last load, reloading`);

            // We need to reload the data, continue this function normally.

            // to help debugging, mark all old object instances, which we'll replace
            // here, as "STALE"
            for (const [ /*old_object_id*/ , old_object]
                 of existing_dbdata_info.objects_by_source[source_file_path][object_type]) {
                old_object.$STALE = true;
                old_object._zoodb.$STALE = true;
            }
        }

        debug(`Loading file ‘${rel_path}’ (from ${root_path})`);

        const file_contents = await this.read_file_contents(root_path, rel_path);
        const file_data = this.parse_file_data( file_contents, objectconfig,
                                                root_path, rel_path );

        let objects_data = objectconfig.load_objects( file_data );

        debug(`Loaded ${objects_data.length} ${objectconfig.object_type} object(s) `
              +`from ‘${path.join(objectconfig.data_src_path,rel_path)}’`);

        // add _zoodb field as appropriate
        for (let obj of objects_data) {
            this.finalize_object(
                obj, objectconfig,
                {root_path, rel_path, source_file_path, source_file_modification_token}
            );

            existing_dbdata_info.reloaded_objects[objectconfig.object_type][obj._zoodb.id]
                = obj;
        }

        // debug(`(re)loaded: ${object_type}: objects_data = `, objects_data);
        // debug(`and existing_dbdata_info.reloaded_objects = `,
        //       existing_dbdata_info.reloaded_objects);

        return objects_data.map( (obj) => [ obj._zoodb.id, obj ] );
    }

    finalize_object(obj, objectconfig,
                    { /*root_path, rel_path,*/
                      source_file_path, source_file_modification_token })
    {
        // validate according to the JSON schema

        const validation_result = this.schema_validator.validate(obj, objectconfig.schema);
        if (!validation_result.valid) {
            const validation_errors = validation_result.errors.map(
                (errorstr) => (''+errorstr).replace(
                    /^instance\b/,
                    () => `[${objectconfig.object_type.toUpperCase()}]`
                )
            );
            throw new Error(
                `Schema validation failed for ${objectconfig.object_type} object data in `
                +`‘${source_file_path}’:\n\n`
                +`*** ${ validation_errors.join("\n*** ") }\n`
            );
        }

        obj._zoodb = {
            id: obj[objectconfig.schema._zoo_primarykey],
            source_file_path: source_file_path,
            source_file_modification_token: source_file_modification_token,
        };

        // debug(`Finalized object, _zoodb -> ${JSON.stringify(obj._zoodb)}`);
    }

}

