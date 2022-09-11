import path from 'path';



export class ZooLLMResourceInfo
{
    /// source_path is used to resolve access to external files like graphics
    /// for figures
    constructor(object_type, object_id, source_path)
    {
        this.object_type = object_type;
        this.object_id = object_id;
        this.source_path = source_path;
    }

    get_source_directory(prefix='')
    {
        return path.join(prefix, path.dirname(this.source_path));
    }

    toString()
    {
        return `${this.object_type} ‘${this.object_id}’ in ‘${this.source_path}’`;
    }
};






