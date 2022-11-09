
import {$$kw, repr} from './llm-js/py.js';
import {__class__, __super__, __get__} from './llm-js/org.transcrypt.__runtime__.js';


import * as llm_fragmentrenderer_html from './llm-js/llm.fragmentrenderer.html.js'; 
import * as llm_fragmentrenderer_text from './llm-js/llm.fragmentrenderer.text.js';



function _is_local_url(urlstring)
{
    return urlstring.startsWith('#')
        || ( urlstring.startsWith('/') && ! urlstring.startsWith('//') );
}




// we need to define these classes the Transcrypt way because we want to inherit
// a Python-transcrypted class

export const ZooHtmlFragmentRenderer = __class__(
    'ZooHtmlFragmentRenderer', // class name
    [ llm_fragmentrenderer_html.HtmlFragmentRenderer ], // base classes
    {
        // static members

        inline_heading_add_space: false,

        html_blocks_joiner: "",

        // methods

        get use_link_target_blank () {return __get__(this, function
        (self, urlstring)
        {
            return ! _is_local_url(urlstring);
        });},

    }
);

export const ZooTextFragmentRenderer = __class__(
    'ZooTextFragmentRenderer', // class name
    [ llm_fragmentrenderer_text.TextFragmentRenderer ], // base classes
    {
        // static members

        display_href_urls: false,

        float_separator_top: '[figure]', // mark the figure like this simply
        float_separator_bottom: '', // no bottom marker needed
    }
);


export function render_text_standalone(fragment)
{
    const text_renderer = new ZooTextFragmentRenderer();
    return fragment.render_standalone(text_renderer);
}
