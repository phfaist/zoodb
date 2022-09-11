
import debug_module from 'debug';
const debug = debug_module('zoodb.resourcecollector.processor.llmgraphicsprocessor');

import { GraphicsResource, $$kw } from '../../zoollm/index.js';

import { parse_image_metadata } from './_inspectimagefile.js';


const graphics_type_by_format = {
    svg: 'vector',
    png: 'raster',
    jpeg: 'raster',
};



export class LLMGraphicsResourceProcessor
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

        this.zoo_llm_environment = options.zoo_llm_environment;
    }

    async process(target_info, source)
    {
        let grdata = await parse_image_metadata(target_info.full_source_path);
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

        const graphics_resource =
              GraphicsResource(target_info.target_name ?? null, $$kw( grdata ));

        this.zoo_llm_environment.graphics_collection.add_graphics(
            source,
            graphics_resource
        );

        return { graphics_resource };
    }
};




