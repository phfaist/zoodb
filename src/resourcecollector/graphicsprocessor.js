

const graphics_type_by_format = {
    svg: 'vector',
    png: 'raster',
    jpeg: 'raster',
    webp: 'raster',
    gif: 'raster',
};


export class GraphicsResourceProcessor
{
    constructor(options)
    {
        options ||= {};

        // Global scaling factor to set on all vector formats.  This number is
        // what you need such that 10pt Source Sans Pro in SVG (at 96dpi per
        // spec) appears the same size as on a webpage with 16px-sized text
        this.global_vector_scale = 1.28;

    }

    async process(target_info, source)
    {

        const grdata = get_graphics_resource_data(target_info_full_source_path);

        ..........

        return ..........

    }
};



function get_graphics_resource_data(fname)
{

        const metadata = await sharp(target_info.full_source_path).metadata();
        
        //
        // graphics type -- from format
        //
        const graphics_type = graphics_type_by_format[metadata.format];

        let grdata = {};

        if (graphics_type == 'raster') {
            //
            // DPI information
            //
            // round up to the equivalent of two decimal places (in binary)
            const dpi = Math.floor(metadata.density * 128 + 0.5) / 128;

            //
            // pixel width/height of the raster image
            //
            const pixel_dimensions = [ metadata.width, metadata.height ];

            //
            // Translate dimensions to physical dimensions.  (Don't use 96 here,
            // it's the DPI value that should reflect the value 96 that your
            // googling might have alerted you to.)
            //
            const physical_dimensions = [
                (metadata.width / dpi) * 72,
                (metadata.height / dpi) * 72
            ];

            Object.assign(grdata, { graphics_type, dpi,
                                    pixel_dimensions, physical_dimensions });

        } else {

            const ...........

            Object.assign(grdata, { graphics_type, dpi,
                                    pixel_dimensions, physical_dimensions });

        }

        
}
