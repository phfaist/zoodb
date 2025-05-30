import path from 'path';

import * as flmdump from './_flm-js/flm.flmdump.js';

/**
 * .. code::
 * 
 *    const ri = new ZooFLMResourceInfo(object_type, object_id, source_path)
 * 
 * Store information about which source file an FLM fragment was encountered in.
 * Useful to find resources (eg. graphics files) with relative paths as well as
 * to track errors.  Objects of this type will be set in the `resource_info`
 * fields of FLM fragments.
 *
 * .. attribute:: object_type
 *
 * .. attribute:: object_id
 *
 * .. attribute:: source_path
 *
 */
export class ZooFLMResourceInfo
{
    /// source_path is used to resolve access to external files like graphics
    /// for figures
    constructor(object_type, object_id, source_path)
    {
        this.object_type = object_type;
        this.object_id = object_id;
        this.source_path = source_path;

        // to enable data dumps
        this._fields = ['object_type', 'object_id', 'source_path'];
        this.__class__ = {
            __name__: 'ZooFLMResourceInfo',
        };
    }

    get_source_directory(prefix='')
    {
        return path.join(prefix, path.dirname(this.source_path));
    }

    toString()
    {
        return `[${this.object_type} ‘${this.object_id}’ in ‘${this.source_path}’]`;
    }
    toJSON()
    {
        return {
            object_type: this.object_type,
            object_id: this.object_id,
            source_path: this.source_path,
        };
    }
}



// to enable data dumps
flmdump.known_object_types['ZooFLMResourceInfo'] = ZooFLMResourceInfo;
