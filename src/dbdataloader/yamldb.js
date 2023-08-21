import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader.yamldb');

import path from 'path';

import jsyaml from 'js-yaml';

import sha256 from 'hash.js/lib/hash/sha/256.js';


import { promisifyMethods } from '../util/prify.js';
import { escapeRegExp } from '../util/rx.js';


// -----------------------------------------------------------------------------




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
  });

const dbdata = zoodbdataloader.load();
*/


/**
 * Load object data from a collection of YAML (or JSON) source files.
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

        // Allow an empty `fs` in case we only instantiate this class to use its
        // parse_file_content method (e.g. for flmfilesdb tests)
        this.fs = this.config.fs ?? {};
        this.fsPromises =
            this.fs.promises
            ?? promisifyMethods(this.fs, ['readFile', 'readdir', 'stat', 'lstat',])
        ;

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

    }

    // -------------------------------------------
    // methods to load zoo data
    // -------------------------------------------

    async load({ schemas })
    {
        debug(`Loading Zoo from ‘${this.config.root_data_dir}’ ...`);

        const { dbdata, /*reload_info*/ } = await this.reload(null, { schemas });

        return dbdata;
    }

    async reload(dbdata, { schemas })
    {
        debug(`(Re-)Loading Zoo from ‘${this.config.root_data_dir}’ ...`);
        
        dbdata ??= {
            objects: {},
        };

        //debug(`schemas = `, schemas)

        let existing_dbdata_info = {
            dbdata: dbdata,
            source_modification_tokens: {},
            objects_by_source: {},
            reloaded_objects: Object.fromEntries(Object.keys(this.config.objects).map(
                (object_type) => [object_type, {}]
            )),
            schemas,
        };
        if (dbdata.objects != null && Object.keys(dbdata.objects).length) {
            for (const [object_type, objects_db] of Object.entries(dbdata.objects)) {
                for (const [object_id, object] of Object.entries(objects_db)) {
                    const { source_file_path, source_file_modification_token } = object._zoodb;
                    existing_dbdata_info.objects_by_source[source_file_path] ??= {};
                    existing_dbdata_info.objects_by_source[source_file_path][object_type]
                        ??= [];
                    existing_dbdata_info.objects_by_source[source_file_path][object_type].push(
                        [object_id, object]
                    );
                    existing_dbdata_info.source_modification_tokens[source_file_path] ??=
                        source_file_modification_token;
                    if (existing_dbdata_info.source_modification_tokens[source_file_path]
                        != source_file_modification_token) {
                        console.error(
                            `*** Inconsistency in provided existing zoo dbdata, source file `
                            + `${source_file_path} has conflicting modification tokens `
                            + `${existing_dbdata_info.source_modification_tokens[source_file_path]}`
                            + `and ${source_file_modification_token} in different objects ***`
                        );
                    }
                }
            }
        }

        let objects_results = {};
        for (const [object_type, objectconfig] of Object.entries(this.config.objects)) {
            const obj_db =
                  await this._load_objects_of_type(objectconfig, existing_dbdata_info);
            objects_results[object_type] = obj_db;
        }


        const d = {
            dbdata: {
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


    // -------------------------------------------
    // Can be reimplemented (e.g., FlmFilesDbDataLoader)
    // -------------------------------------------


    async parse_file_data(file_content, objectconfig, root_path, rel_path)
    {
        // in case root_path is already a JSON/YAML file and rel_path is empty
        const fullpath = path.join(root_path, rel_path);
        try {
            if ( /\.ya?ml$/i.test(fullpath) ) {
                return jsyaml.load( file_content );
            } else if ( /\.json$/i.test(fullpath) ) {
                return JSON.parse( file_content );
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

    // -------------

    async read_file_content(root_path, rel_path)
    {
        const fullpath = path.join(root_path, rel_path);
        //debug(`read_file_content ${fullpath}`);
        return await this.fsPromises.readFile(fullpath);
    }

    // -------------

    async get_file_modification_token(root_path, rel_path, file_content)
    {
        // Don't use the file modification time, because it might be a reliable
        // indicator of modification from the internal loaded state (e.g., if
        // you do a git checkout to another branch, the file is "modified"
        // although the file on the other branch might have an anterior
        // modification time.)  Instead, hash the file contents.

        const hash = sha256().update( file_content ).digest('hex');
        return hash;

        // const fullpath = path.join(root_path, rel_path);
        // FIXME: we already 'stat'ed the file, no? We should reuse that information!!
        // const stat_info = await this.fsPromises.stat(fullpath);
        // // don't use stats.mtimeMs as it might not be available depending on the
        // // fs interface we're using (e.g. BrowserFS)
        // return stat_info.mtime ? stat_info.mtime.getTime() : Number.NaN ;
    }



    // -------------------------------------------
    // Internal implementation methods.
    // -------------------------------------------


    async _load_objects_of_type(objectconfig, existing_dbdata_info)
    {
        debug(`Loading objects of type ${objectconfig.object_type} ...`);

        const schemas = existing_dbdata_info.schemas;

        const schema_name = objectconfig.schema_name;
        const schema = schemas[schema_name];

        if (schema == null) {
            throw new Error(`Schema ‘${schema_name}’ was not loaded into the Zoo DB.`);
        }
        
        objectconfig.schema = schema;

        // const loaded_objects = [ ['aid',{ a: 'b', c: 'd' }],
        //                          ['bid',{ e: 'f', g: 'h' }] ];

        const loaded_objects_pair_with_id =
              await this.walk_src_files(objectconfig, existing_dbdata_info);

        let d = {};
        for (const [objid, obj] of loaded_objects_pair_with_id) {
            if (d[objid]) {
                const other_object = d[objid];
                throw new Error(
                    `ID ‘${objid}’ was assigned to multiple objects (duplicate ID), in `
                    + `files ‘${other_object._zoodb.source_file_path}’ and `
                    + `‘${obj._zoodb.source_file_path}’`
                );
            }
            d[objid] = obj;
        }

        return d;
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

    // -------------

    async parse_file_into_objects(root_path, rel_path, objectconfig, existing_dbdata_info)
    {
        const { object_type } = objectconfig;
        const source_file_path = path.join(objectconfig.data_src_path, rel_path);

        const file_content = await this.read_file_content(root_path, rel_path);

        const source_file_modification_token =
              await this.get_file_modification_token(root_path, rel_path, file_content);

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

        const file_data = await this.parse_file_data( file_content, objectconfig,
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


    // -------------


    finalize_object(obj, objectconfig,
                    { /*root_path, rel_path,*/
                      source_file_path, source_file_modification_token })
    {
        obj._zoodb = {
            id: obj[objectconfig.schema._zoo_primarykey],
            source_file_path: source_file_path,
            source_file_modification_token: source_file_modification_token,
        };

        // debug(`Finalized object, _zoodb -> ${JSON.stringify(obj._zoodb)}`);
    }


}

