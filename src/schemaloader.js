import path from 'path';

import jsyaml from 'js-yaml';

import $RefParser from "@apidevtools/json-schema-ref-parser";
import json_refparser_resolver_http from "@apidevtools/json-schema-ref-parser/dist/lib/resolvers/http.js";

import debug_module from 'debug';
const debug = debug_module('zoodb.schemaloader');


import { promisifyMethods } from './util/prify.js';
import { path_or_url_to_url } from './util/url.js';




/**
 * Load schema object data from a collection of YAML or JSON source files, and
 * dereference any { '$ref': ... } internal and external references.
 *
 * Doc........
 *
 * Configuration options:
 *
 * * ``schemas`` - an object with the following properties:
 *
 *   - ``schemas.schema_root`` - a filesystem path or URL where to look
 *     for schemas.
 *
 *   - ``schemas.schema_rel_path`` - a relative path to prefix any schema name
 *     that we might want to look up.  It will be interpreted as a path relative
 *     to the schema_root.
 *
 *   - ``schemas.schema_add_extension`` - a filename extension to add to the
 *     bare schema name when looking up the schema.  E.g. '.json' or '.yml'.
 *
 *   Example::
 *
 *       schemas: {
 *           schema_root: 'https://errorcorrectionzoo.org/',
 *           schema_rel_path: '/schemas/',
 *           schema_add_extension: '.json',
 *       }
 *
 * * ``schema_names`` - a list of names of schemas to load for the zoo database.
 *   If null or undefined and the schema_root is a filesystem path, then the
 *   corresponding directory contents is inspected and files matching the given
 *   `schema_add_extension` are loaded as schemas.
 *
 * * ``fs`` - the filesystem access handle.  We need the method `readFile()` for
 *   any requested filesystem paths.  We also need the `readdir()` method if
 *   `schema_names` is null or undefined.
 *
 * See also :class:`makeStandardZooDbYamlDataLoader` for a simplified loading.
 */
export class SchemaLoader
{
    constructor(config)
    {
        this.config = Object.assign({}, config ?? {});
        // make copy of schemas: object
        this.config.schemas = Object.assign({}, this.config.schemas);

        // might be null/undefined for filesystem root schema paths, in which
        // case we'll load all relevant files in the folder
        this.schema_names = config.schema_names;

        this.fs = this.config.fs;
        this.fsPromises =
            this.fs.promises ?? promisifyMethods(this.fs, ['readFile', 'readdir'])
        ;

        if (!this.config.schemas.schema_root) {
            throw new Error("You did not specify a schema_root: in your config!");
        }

        this.config.schemas.schema_root =
            path_or_url_to_url(this.config.schemas.schema_root);

        // simplify schema_root URL (e.g., remove x/y/../z -> x/z, will be
        // needed to compare when to add our custom extension)
        this.config.schemas.schema_root = new URL(this.config.schemas.schema_root).href;
        if (!this.config.schemas.schema_root.endsWith('/')) {
            //throw new Error("Please include trailing slash in schemas.schema_root")
            this.config.schemas.schema_root += '/';
        }
        debug(`Using schema_root = ${this.config.schemas.schema_root}`);

        this.schemas_by_name = {};

        // --- worry about the ref parser ---

        this.schema_ref_parser = $RefParser;

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
                debug(`schema_refparser_resolver.read(), url ${file.url}`);

                let url = file.url;

                try {

                    // undo our workaround fix -- see call to dereference()
                    // below in the definition of get_schema_by_name()
                    url = url.replace(/^fspath:/, 'file:');


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

                    // debug(`Resolved schema URL ${url} → ${newfile.url} `
                    //       + `[extension=${newfile.extension} protocol=${protocol}]`);
                    
                    if ( protocol == 'file:' ) { 
                        //return json_refparser_resolver_file.read(newfile);
                        const filePathToRead = decodeURIComponent(
                            newfileurl.pathname
                        );
                        debug(`Resolved schema URL ${url} → ${filePathToRead} on filesystem`);
                        //debug(`Finally! will read path ‘${filePathToRead}’`);
                        const data = await fsPromises.readFile(
                            filePathToRead,
                            { encoding: 'utf-8' }
                        );
                        // debug(` ---> retreived data = `, data);
                        return data;
                    } else {
                        debug(`Resolved schema URL ${url} → URL ${newfile.url} `
                              + `[extension=${newfile.extension} protocol=${protocol}]`);
                        return await json_refparser_resolver_http.read(newfile);
                    }

                } catch (err) {
                    console.error(`Error reading ${url}: ${err}`);
                    throw err;
                }
            }
        };

    }

    async load_schemas()
    {
        debug(`Loading schemas in ‘${this.config.schemas.schema_root}’ ...`);

        let schemas = {};

        let schema_names = this.schema_names;
        if (schema_names == null) {
            // read filesystem dir contents
            const schema_root_url = new URL(this.config.schemas.schema_root);
            if (schema_root_url.protocol !== 'file:') {
                throw new Error(
                    `schema_names is not set but schema_root is not a filesystem path`
                );
            }
            let dirname = decodeURIComponent(schema_root_url.pathname);
            dirname = path.join(dirname, this.config.schemas.schema_rel_path);
            const ext = this.config.schemas.schema_add_extension;
            schema_names = [];
            debug(`Listing contents of ‘${dirname}’ and looking for files ending in ‘${ext}’`);
            for (const fname of await this.fs.promises.readdir(dirname)) {
                if (fname.endsWith(ext)) {
                    schema_names.push( fname.slice(0, -ext.length) );
                }
            }
        }

        debug(`Loading schema names: ${schema_names.join(', ')}`);

        for (const schema_name of schema_names) {
            schemas[schema_name] = await this.load_schema_by_name(schema_name);
            debug(`Loaded schema ‘${schema_name}’`);
        }

        return {
            //
            // Provide all the schema objects
            //
            schemas,
        };
    }

    async load_schema_by_name(schema_name)
    {
        if ( Object.hasOwn(this.schemas_by_name, schema_name) ) {
            return this.schemas_by_name[schema_name];
        }

        let schema_rel_path =
            path.posix.join(this.config.schemas.schema_rel_path, schema_name);
        let schema_path =
            new URL(schema_rel_path, this.config.schemas.schema_root).href;

        debug(`Requesting schema for ‘${schema_name}’ → path=‘${schema_path}’`);

        if (schema_path.startsWith('file://')) {
            // work around a bug in $RefResolver where filesystem paths get
            // escaped a second time.  This is likely due to the following
            // lines:
            // https://github.com/APIDevTools/json-schema-ref-parser/blob/a5b3946fbb62683ab69e3747a8893014591726af/lib/index.ts#L100-L102
            //
            // Our workaround is to avoid $RefParser detecting that this is, in
            // fact, a filesystem path.
            schema_path = schema_path.replace( /^file:/, 'fspath:' );

            //debug(`Will use ‘${schema_path}’ as a workaround to a bug in $RefParser`);
        }

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

}
