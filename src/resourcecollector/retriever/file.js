import fs from 'fs';
import * as fsPromises from 'fs/promises';

import path from 'path';

import sha256 from 'hash.js/lib/hash/sha/256.js';
import base32Encode from 'base32-encode';


import debug_module from 'debug';
const debug = debug_module('zoodb.resourcecollector.retriever.file');



export class FileResourceRetriever
{
    constructor(options)
    {
        options ||= {};

        this.copy_to_target_directory = options.copy_to_target_directory ?? false;

        this.source_directory = options.source_directory || '.';
        this.target_directory = options.target_directory || './_output_file_resources/';
        this.rename_file_template =
            options.rename_file_template || ( (f) => `fig-${f.b32hash(24)}${f.lowerext()}` );

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
            const resolved_source = source + extension;
            const full_source_path = path.resolve(this.source_directory, resolved_source);
            try {
                await fsPromises.access( full_source_path );
                // file exists!
                debug(`located ‘${source}’ at ‘${full_source_path}’`);
                return { resolved_source: resolved_source,
                         full_source_path: full_source_path };
            } catch (err) {
                // file does not exist, try next extension
                debug(`resolving ‘${source}’, tried ‘${full_source_path}’`);
                continue
            }
        }
        throw new Error(`Failed to resolve source path ‘${source}’`);
    }

    async retrieve(resolved_info, source)
    {
        if (this.mkdir_promise) {
            await this.mkdir_promise;
            this.mkdir_promise = null;
        }

        // Find the file. We might have to try different extensions, for instance.
        const {resolved_source, full_source_path} = resolved_info;
        
        const target_name = this.rename_file_template(
            new FilePropertiesAccessor(resolved_source, full_source_path)
        );

        const target_full_path = path.resolve(this.target_directory, target_name);
        
        if (this.copy_to_target_directory) {
            // actually copy the file (await in case we have to process it after
            // retrieval...)
            await fsPromises.copyFile(full_source_path, target_full_path);
        }

        return {
            resolved_source: resolved_source,
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
    constructor(resolved_source, full_source_path)
    {
        this.resolved_source = resolved_source;
        this.full_source_path = full_source_path;
    }

    fullname()
    {
        return this.resolved_source;
    }

    basename()
    {
        return path.basename(this.resolved_source);
    }

    basenameshort()
    {
        return path.basename(this.resolved_source, this.extname());
    }

    extname()
    {
        return path.extname(this.resolved_source);
    }

    lowerext()
    {
        return this.extname().toLowerCase();
    }

    dirname()
    {
        return path.dirname(this.resolved_source);
    }

    binary_hash()
    {
        return sha256().update( fs.readFileSync(this.full_source_path) ).digest();
    }

    // hash the actual file contents
    hexhash(len)
    {
        const res = sha256().update( fs.readFileSync(this.full_source_path) ).digest('hex');
        if (len) {
            return res.slice(0, len);
        }
        return res;
    }
    B32HASH(len)
    {
        const arr = Uint8Array.from(this.binary_hash());
        const res = base32Encode(arr, 'Crockford', { padding: false });
        if (len) {
            return res.slice(0, len);
        }
        return res;
    }
    b32hash(len)
    {
        return this.B32HASH(len).toLowerCase();
    }
    b64hash(len)
    {
        const arr = this.binary_hash();
        const strbinary = arr.reduce((res, c) => res + String.fromCharCode(c), '')
        let res = btoa(strbinary);
        // replace /+ by other friendlier chars
        res = res.replace('/', '_').replace('+', '-');
        if (len) {
            return res.slice(0, len);
        }
        return res;
    }
};
