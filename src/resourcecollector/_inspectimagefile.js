import stream from 'stream';
import stream_parser from 'stream-parser';

import sax from 'sax';

import _zoologger from '../_zoologger.js';
const logger = _zoologger.child({module: 'zoodb.resourcecollector._inspectimagefile'});




// round to the equivalent of two decimal places (but do that in binary)
function dpiround(dpi) {
    return Math.floor(dpi * 128 + 0.5) / 128;
}


// -----------------------------------------------------------------------------
//
// adapted some bits from
// https://github.com/nodeca/probe-image-size/blob/master/lib/parse_stream/png.js
// (MIT license)
//

function str2arr(s) {
    return [...s].map( (c) => c.charCodeAt(0) );
}
function arr2str(a) {
    return Array.prototype.map.apply(a, [ (cc) => String.fromCharCode(cc) ] ).join('');
}
function sliceEq(a, offset, b)
{
    for (let j = 0; j < b.length; ++j) {
        if (a[offset+j] !== b[j]) {
            return false;
        }
    }
    return true;
}

const SIG_PNG  = str2arr('\x89PNG\r\n\x1a\n'); // length = 8
const SIG_IHDR = str2arr('IHDR');
const SIG_pHYs = str2arr('pHYs');

class PngMetaDataParser extends stream.Writable
{
    constructor(options)
    {
        super();
        // install the stream-parser methods here
        stream_parser(this);

        this.options = options || {};

        this.metadata = {};

        this.chunk_types_handlers = {
            IHDR: this._handle_chunk_header,
            pHYs: this._handle_chunk_pHYs,
            IEND: this._handle_chunk_end,
        };

        this.parse_promise_resolve = null;
        this.parse_promise = new Promise( (resolve) => {
            this.parse_promise_resolve = resolve;
        } );
    }

    parse() {
        // start by reading the magic beginning of the file
        //logger.debug("Starting to parse the PNG file");
        this._read_magic();
        return this.parse_promise;
    }

    _read_magic() {
        this._bytes(SIG_PNG.length, this.read_png_magic);
    }

    read_png_magic(data) {
        if (!sliceEq(data, 0, SIG_PNG)) {
            throw new Error(`File contents is not PNG: ${this.options.what}`);
        }
        this._read_next_chunk();
    }

    _read_next_chunk()
    {
        this._bytes(8, this.read_png_chunk_start);
    }

    read_png_chunk_start(data) {
        const chunk_len = data.readUInt32BE(0);
        const chunk_type = arr2str(data.slice(4,8));
        //logger.debug(`Got PNG chunk ‘${chunk_type}’ of length ${chunk_len}`);
        const handler = this.chunk_types_handlers[chunk_type];
        if (handler == null) { // not null or undefined
            this._skipBytes(chunk_len+4, this._read_next_chunk);
        } else {
            this._bytes(chunk_len+4, handler);
        }
    }

    _handle_chunk_header(data) {
        this.metadata.png_header = {
            width: data.readUInt32BE(0),
            height: data.readUInt32BE(4),
        };
        //console.log(`Got PNG header! ${JSON.stringify(this.metadata.png_header)}`);
        this._read_next_chunk();
    }

    _handle_chunk_pHYs(data) {
        this.metadata.png_phys = {
            x_ppu: data.readUInt32BE(0),
            y_ppu: data.readUInt32BE(4),
            unit_is_meters: data[8],
        };
        // we got all the relevant information, we can skip the rest
        //console.log(`Got pHYs chunk! ${JSON.stringify(this.metadata.png_phys)}`);
        this.done();
    }

    _handle_chunk_end(data) {
    }

    done()
    {
        this.parse_promise_resolve();
        this._skipBytes(Infinity);
    }

};


export async function parse_png_metadata(stream, options={})
{
    let parser = new PngMetaDataParser(options.what);
    stream.pipe(parser);

    await parser.parse();

    const pixel_dimensions =
          [ parser.metadata.png_header.width, parser.metadata.png_header.height ];
    const mp = parser.metadata.png_phys;

    let x_dpi, y_dpi;
    if (mp.unit_is_meters) {
        if (mp.x_ppu != mp.y_ppu) {
            logger.warning(`horizontal and vertical resolutions differ in ‘${options.what}’ `
                           `— image is likely to appear distorted`);
        }
        //we want dpi = dots_per_meter * (meter / inch), with (meter/inch)=0.0254
        x_dpi = dpiround(mp.x_ppu * 0.0254);
        y_dpi = dpiround(mp.y_ppu * 0.0254);
    } else {
        // unknown units -- assume 96dpi along the X axis.
        logger.warning(`Unknown units in ‘${options.what}’ — will assume 96 dpi`);
        x_dpi = 96;
        y_dpi = 96;
    }
    const dpi = x_dpi; // need to pick one :/
    return {
        graphics_type: 'raster',
        pixel_dimensions,
        dpi,
        physical_dimensions: [
            pixel_dimensions[0]*72/x_dpi,
            pixel_dimensions[1]*72/y_dpi,
        ]
    };
}



// -----------------------------------------------------------------------------


const _pt_per_u = {
    // 1 pt = 1 pt
    'pt': 1,

    // SVG pixels should be interpreted at 96DPI so 1 px = 1/(96) in = 72/96 pt
    'px': 72/96,
    
    // 1 in = 72 pt
    'in': 72,
    
    // 1 cm = (1/2.54) in = 72/2.54 pt
    'cm': 72/2.54,

    // 1 mm = (1/25.4) in = 72/25.4 pt
    'mm': 72/25.4,

    // 1 m = (1/0.0254) in = 72/0.0254 pt
    'm': 72/0.0254,
}

const _rx_dimen = new RegExp(
    '^\\s*(?<dimension>[0-9.e+-]+)\\s*(?<unit>'
    + Object.keys(_pt_per_u).join("|")
    + ')?\\s*$'
);


export async function parse_svg_metadata(stream, options)
{
    //console.log(`Parsing metadata in SVG file ${options.what}`);

    let svg_attrs = {};

    let token = {};
    let promise_parsing_done = new Promise(
        (resolve, reject) => { token.resolve = resolve; token.reject = reject; }
    );

    let parser = new sax.createStream(false, {
        trim: true,
        normalize: true,
        lowercase: true,
    });
    parser.on('error', (e) => {
        console.error(`Error parsing ‘${options.what}’: ${e}`);
        token.reject();
    });
    parser.on('end', (e) => {
        token.reject();
    });
    parser.on('opentag', (node) => {
        //console.log("got opentag, ", node)
        // opened a tag.  node has "name" and "attributes"
        if (node.name == 'svg' || node.name.endsWith(':svg')) {
            //console.log("parsing <svg ...> tag")
            // collect svg tag attributes
            Object.assign(svg_attrs, {
                width: node.attributes.width,
                height: node.attributes.height,
                viewbox: node.attributes.viewbox,
            });
            // done, we can destroy the stream -- not sure how to do this
            //cleanly??  stream.close();
            token.resolve();
        }
    });
    stream.pipe(parser);

    //console.log(`Parsing metadata in SVG file ${options.what} -- awaiting promise`);

    await promise_parsing_done;

    //console.log(`Parsing metadata in SVG file ${options.what} -- await done!`);
    
    const m_width = _rx_dimen.exec(svg_attrs.width);
    const m_height = _rx_dimen.exec(svg_attrs.height);
    
    if (m_width == null || m_height == null) {
        throw new Error(`Failed to parse SVG image dimensions in ‘${options.what}‘: `
                        + `‘${svg_attrs.width}’, ‘${svg_attrs.height}’`);
    }

    const width_unit = m_width.groups.unit || 'pt'
    const height_unit = m_height.groups.unit || 'pt';

    const width_dimension_u = parseFloat(m_width.groups.dimension)
    const height_dimension_u = parseFloat(m_height.groups.dimension)

    const width_pt = width_dimension_u * _pt_per_u[width_unit];
    const height_pt = height_dimension_u * _pt_per_u[height_unit];

    return {
        'graphics_type': 'vector',
        'physical_dimensions': [ width_pt, height_pt ]
    };
}
