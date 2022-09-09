import fs from 'fs';

import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.resourcecollector.llmgraphicsprocessor'});

import { GraphicsResource, $$kw } from '../zoollm/index.js';

import { parse_png_metadata, parse_svg_metadata } from './_inspectimagefile.js';


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
        // spec) appears the same size as on a webpage with 16px-sized text
        this.global_vector_scale = options.global_vector_scale ?? 1.28;

    }

    async process(target_info, source)
    {
        const grdata = await get_graphics_resource_data(target_info.full_source_path);
        //logger.debug(`DEBUG - got grdata = ${JSON.stringify(grdata)}`);
        return GraphicsResource(target_info.target_name ?? null, $$kw( grdata ));
    }
};



async function get_graphics_resource_data(fname)
{
    let stream = fs.createReadStream(fname);
    stream.on('error', (err)=>{ console.error(`Error (${fname}) -- `, err); });
    try {
        if (fname.endsWith('.png')) {
            return await parse_png_metadata(stream, { what: fname });
        }
        if (fname.endsWith('.svg')) {
            return await parse_svg_metadata(stream, { what: fname });
        }
        throw new Error(
            `File type ‘${fname}’ is not yet supported, currently only PNG and SVG`
        );
    } finally {
        stream.close();
    }
}
