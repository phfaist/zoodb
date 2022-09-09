import fs from 'fs';
import * as fsPromises from 'fs/promises';

import path from 'path';

import sha256 from 'hash.js/lib/hash/sha/256.js';


import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.resourcecollector.copyfile'});



export class FileResourceRetriever
{
    constructor(options)
    {
        options ||= {};

        this.copy_to_target_directory = options.copy_to_target_directory ?? false;

        this.source_directory = options.source_directory || '.';
        this.target_directory = options.target_directory || './_output_file_resources/';
        this.rename_file_template =
            options.rename_file_template || ( (f) => `r${f.hexhash(16)}${f.lowerext()}` );

        // don't forget to include the empty string in this list in case you'd
        // like to support the situation where the source already specifies the
        // full file name with extension.
        this.extensions = options.extensions || [ '' ];

        if (this.copy_to_target_directory) {
            this.mkdir_promise = fsPromises.mkdir(this.target_directory, { recursive: true });
        } else {
            this.mkdir_promise = null;
        }
    }

    async resolve(source)
    {
        for (const extension of this.extensions) {
            const full_source_name = source + extension;
            const full_source_path = path.resolve(this.source_directory, full_source_name);
            try {
                await fsPromises.access( full_source_path );
                // file exists!
                logger.debug(`located ‘${source}’ at ‘${full_source_path}’`);
                return { full_source_name: full_source_name,
                         full_source_path: full_source_path };
            } catch (err) {
                // file does not exist, try next extension
                logger.debug(`resolving ‘${source}’, tried ‘${full_source_path}’`);
                continue
            }
        }
        throw new Error(`Failed to resolve source path ‘${source}’`);
    }

    async retrieve(source)
    {
        if (this.mkdir_promise) {
            await this.mkdir_promise;
            this.mkdir_promise = null;
        }

        // Find the file. We might have to try different extensions, for instance.
        const {full_source_name, full_source_path} = await this.resolve(source);
        
        const target_name = this.rename_file_template(
            new FilePropertiesAccessor(full_source_name, full_source_path)
        );

        const target_full_path = path.resolve(this.target_directory, target_name);
        
        if (this.copy_to_target_directory) {
            // actually copy the file (await in case we have to process it after
            // retrieval...)
            await fsPromises.copyFile(full_source_path, target_full_path);
        }

        return {
            full_source_name: full_source_name,
            full_source_path: full_source_path,
            target_name: target_name,
            target_full_path: target_full_path,
        };
    }

    async finish()
    {
    }
};


class FilePropertiesAccessor
{
    constructor(full_source_name, full_source_path)
    {
        this.full_source_name = full_source_name;
        this.full_source_path = full_source_path;
    }

    basename()
    {
        return path.basename(this.full_source_name);
    }

    extname()
    {
        return path.extname(this.full_source_name);
    }

    lowerext()
    {
        return this.extname().toLowerCase();
    }

    dirname()
    {
        return path.dirname(this.full_source_name);
    }

    // hash the actual file contents
    hexhash(len)
    {
        const res = sha256().update( fs.readFileSync(this.full_source_path) ).digest('hex');
        if ( typeof len != 'undefined' ) {
            return res.slice(len);
        }
        return res;
    }
};
