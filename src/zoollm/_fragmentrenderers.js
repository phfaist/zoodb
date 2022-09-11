

import * as llm_fragmentrenderer_html from 'llm-js/llm.fragmentrenderer.html.js'; 
import * as llm_fragmentrenderer_text from 'llm-js/llm.fragmentrenderer.text.js';



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


