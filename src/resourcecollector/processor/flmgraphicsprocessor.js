// import debug_module from 'debug';
// const debug = debug_module('zoodb.resourcecollector.processor.flmgraphicsprocessor');

import { GraphicsResource, $$kw } from '../../zooflm/index.js';

import { parse_image_metadata } from './_inspectimagefile.js';

import loCloneDeep from 'lodash/cloneDeep.js';


/**
 * Process graphics to extract physical image dimensions, resolution, and other
 * information.
 */
export class FLMGraphicsResourceProcessor
{
    constructor(options)
    {
        options ||= {};

        // Global scaling factor to set on all vector formats.  This number is
        // what you need such that 10pt Source Sans Pro in SVG (at 96dpi per
        // spec) appears the same size as on a webpage with 16px-sized text.
        // Adjust in options to your liking.
        this.global_vector_scale = options.global_vector_scale ?? 1.28;

        // similar option for raster graphics.  We probably won't have to scale these.
        this.global_raster_scale = options.global_raster_scale ?? null;

        this.zoo_flm_environment = options.zoo_flm_environment;

        this.fs = options.fs;

        if (this.fs == null) {
            throw new Error(
                `You did not specify fs for your shiny `
                + `new FLMGraphicsResourceProcessor instance.  If you're running on `
                + `node, you probably want `
                + `"fs: { createReadStream(fname) { return fs.createReadStream(fname) } }"`
            );
        }
    }

    async process({target_info, source, processed_info})
    {
        // observe that filename (full_source_path) already includes any data
        // dir / source dir set by the retriever, so don't prefix and data dir
        // at this point.
        const filename = target_info.full_source_path;
        const stream = await this.fs.createReadStream( filename );

        let grdata = await parse_image_metadata(filename, stream);
        //debug(`DEBUG - got grdata = ${JSON.stringify(grdata)}`);

        if (grdata.graphics_type == 'vector' && this.global_vector_scale) {
            Object.assign(grdata, {
                physical_dimensions:
                    grdata.physical_dimensions.map( (dim) => dim * this.global_vector_scale )
            });
        } else if (grdata.graphics_type == 'raster' && this.global_raster_scale) {
            Object.assign(grdata, {
                physical_dimensions:
                    grdata.physical_dimensions.map( (dim) => dim * this.global_raster_scale )
            });
        }

        grdata.source_info = {
            resolved_source: target_info.resolved_source,

            toJSON()
            {
                return Object.fromEntries(
                    // skip exporting file_content which can be a big file!
                    Object.entries(this).filter( ([k, /*v*/]) => (k != 'file_content') )
                );
                // return Object.fromEntries(
                //     Object.entries(this).map( ([k,v]) => {
                //         // for file_content, if present --
                //         if (typeof v === 'object' && v instanceof Buffer) {
                //             return [k, {'$type': 'Buffer', data: v.toString('base64')}];
                //         }
                //         return [k, v];
                //     } )
                // );
            }
        };
        if (target_info.file_content != null) {
            grdata.source_info.file_content = target_info.file_content;
        }
        if (processed_info != null && processed_info
            && typeof processed_info === 'object'
            && Object.keys(processed_info).length > 0) {
            grdata.source_info.processed_info = loCloneDeep(processed_info);
        }

        const graphics_resource =
              GraphicsResource(target_info.target_name ?? null, $$kw( grdata ));

        // debug(`flmgraphicsprocessor: Adding to the environment's graphics collection `
        //       + ` graphics_resource = `, graphics_resource);

        this.zoo_flm_environment.graphics_collection.add_graphics(
            source,
            graphics_resource
        );

        return { graphics_resource };
    }
}
