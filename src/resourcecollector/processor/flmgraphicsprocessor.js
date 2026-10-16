// import debug_module from 'debug';
// const debug = debug_module('zoodb.resourcecollector.processor.flmgraphicsprocessor');

import path from 'path';

import { parse_image_metadata } from './_inspectimagefile.js';


/**
 * The media types of the image files, by lower-case extension.
 */
export const GRAPHICS_MEDIA_TYPES = Object.freeze({
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.tif': 'image/tiff',
    '.tiff': 'image/tiff',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
});

/**
 * The media type of an image file, from its extension
 * (``application/octet-stream`` for an unknown one).
 *
 * @param {string} filename
 * @returns {string}
 */
export function graphics_media_type(filename)
{
    return GRAPHICS_MEDIA_TYPES[path.extname(filename ?? '').toLowerCase()] ?? 'application/octet-stream';
}


/**
 * Resource processor of the resource collector (type ``graphics_path``)
 * that inspects an image file and returns the data of the FLM engine's
 * graphics table entry (:js:meth:`ZooFlmEngine.set_graphics`) the file
 * gives: ``{ graphics: { kind, media_type, width_px, height_px, dpi,
 * width_pt, height_pt } }``, ``kind`` ``'raster'`` (the pixel size, the
 * resolution, and the physical size in points the resolution gives) or
 * ``'vector'`` (the physical size in points), each absent measure ``null``.
 * The FLM processor completes the entry with the origin, the path as
 * written, the file's identity and its address.
 *
 * Options:
 *
 * - ``fs`` *(required)* -- the file system object; ``fs.createReadStream()``
 *   reads the file.
 *
 * - ``global_vector_scale`` -- the factor applied to the physical size of a
 *   vector image (default 1.28: what makes 10pt Source Sans Pro in an SVG
 *   at 96 dpi per spec appear the same size as on a webpage with 16px text).
 *
 * - ``global_raster_scale`` -- the factor applied to the physical size of a
 *   raster image (default none).
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

    async process({ target_info /*, source, processed_info*/ })
    {
        // observe that filename (full_source_path) already includes any data
        // dir / source dir set by the retriever, so don't prefix and data dir
        // at this point.
        const filename = target_info.full_source_path;
        const stream = await this.fs.createReadStream( filename );

        const grdata = await parse_image_metadata(filename, stream);

        const scale = (grdata.graphics_type === 'vector')
            ? this.global_vector_scale : this.global_raster_scale;
        let physical = grdata.physical_dimensions ?? null;
        if (physical != null && scale) {
            physical = physical.map( (dim) => dim * scale );
        }

        const number = (x) => (Number.isFinite(x) ? x : null);
        const graphics = {
            kind: grdata.graphics_type,
            media_type: graphics_media_type(target_info.resolved_source ?? filename),
            width_px: number(grdata.pixel_dimensions?.[0]),
            height_px: number(grdata.pixel_dimensions?.[1]),
            dpi: number(grdata.dpi),
            width_pt: number(physical?.[0]),
            height_pt: number(physical?.[1]),
        };

        return { graphics };
    }
}
