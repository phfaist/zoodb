import _zoologger from '../_zoologger.js';
let logger = _zoologger.child({module:'zoodb.zoollm'});

import path from 'path'; // path.join()

import {$$kw, repr} from 'llm-js/py.js';
export {$$kw, repr};


import * as llm_fragmentrenderer_html from 'llm-js/llm.fragmentrenderer.html.js'; 
import * as llm_fragmentrenderer_text from 'llm-js/llm.fragmentrenderer.text.js';


export * from './environment.js';
// includes: { make_zoo_llm_environment, prep_llm_environ_features,
// zoollm_default_options, SectionCommandSpec, EndnoteCategory, RefInstance,
// FloatType, GraphicsResource }



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

    toString()
    {
        return `${this.object_type} ‘${this.object_id}’ in ‘${this.source_path}’`;
    }
};








function _is_local_url(urlstring)
{
    return urlstring.startsWith('#')
        || ( urlstring.startsWith('/') && ! urlstring.startsWith('//') );
}


export class ZooHtmlFragmentRenderer extends llm_fragmentrenderer_html.HtmlFragmentRenderer
{

    static use_link_target_blank(urlstring)
    {
        return ! _is_local_url(urlstring);
    }

    static inline_heading_add_space = false;

    static html_blocks_joiner = "::BLOCKJOINER::";
}



// llm_fragmentrenderer_text.TextFragmentRenderer


