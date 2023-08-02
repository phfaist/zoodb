
import {$$kw, repr} from './flm-js/py.js';
import {__class__, __super__, __get__} from './flm-js/org.transcrypt.__runtime__.js';

import {
    LatexWalkerLocatedErrorFormatter
} from './flm-js/pylatexenc.latexnodes.js';

import * as flm_fragmentrenderer_html from './flm-js/flm.fragmentrenderer.html.js'; 
import * as flm_fragmentrenderer_text from './flm-js/flm.fragmentrenderer.text.js';



function _is_local_url(urlstring)
{
    return urlstring.startsWith('#')
        || ( urlstring.startsWith('/') && ! urlstring.startsWith('//') )
        || urlstring.startsWith('javascript:');
}


// we need to define these classes the Transcrypt way because we want to inherit
// a Python-transcrypted class

export const ZooHtmlFragmentRenderer = __class__(
    'ZooHtmlFragmentRenderer', // class name
    [ flm_fragmentrenderer_html.HtmlFragmentRenderer ], // base classes
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

        get render_error_info_message () {return __get__(this, function
        (self, flm_error_info)
        {
            if (!flm_error_info) {
                return `[FLM Error; no information provided]`;
            }
            const fmt = new LatexWalkerLocatedErrorFormatter(flm_error_info.error_object);
            const flm_error_info_data = Object.assign(
                {}, flm_error_info, { error_object: null }
            );
            return `<pre class="flm-error-message" data-flm-error-info="${JSON.stringify(flm_error_info_data)}"><span class="flm-error-message-lead">Error: ${flm_error_info.msg}</span>\n<span class="flm-error-message-traceback">${fmt.format_full_traceback()}</pre>`;
        });},
    }
);

/**
 * Helper to get the default CSS definitions that is necessary in order to
 * display HTML-rendered FLM content.
 *
 * Returns a dictionary with the keys 'css_global', 'css_content', 'js', and
 * 'body_end_js_scripts', set to corresponding reasonable definitions and that
 * can be used in an HTML template.
 */
export function html_fragmentrenderer_get_style_information(fragment_renderer)
{
    return flm_fragmentrenderer_html.FragmentRendererInformation.get_style_information(
        fragment_renderer,
    );
}


export const ZooTextFragmentRenderer = __class__(
    'ZooTextFragmentRenderer', // class name
    [ flm_fragmentrenderer_text.TextFragmentRenderer ], // base classes
    {
        // static members

        display_href_urls: false,

        float_separator_top: '[figure]', // mark the figure like this simply
        float_separator_bottom: '', // no bottom marker needed
    }
);





//
// FIXME: MAKE render_**_standalone() methods of the environment, and get the
// standard fragment renderers as environment attributes!  In this way, users
// can customize the fragment renderers.
//

/**
 * Utility to render a standalone fragment to HTML.  No document instance or
 * render context is required.  This function will create a
 * :class:`ZooHtmlFragmentRenderer` instance under the hood.
 */
export function render_html_standalone(fragment)
{
    try {
        const html_renderer = new ZooHtmlFragmentRenderer();
        return fragment.render_standalone(html_renderer);
    } catch (err) {
        _report_render_error(err);
        throw err;
    }
}

/**
 * Utility to render a standalone fragment to HTML.  No document instance or
 * render context is required.  This function will create a
 * :class:`ZooTextFragmentRenderer` instance under the hood.
 */
export function render_text_standalone(fragment)
{
    try {
        const text_renderer = new ZooTextFragmentRenderer();
        return fragment.render_standalone(text_renderer);
    } catch (err) {
        _report_render_error(err);
        throw err;
    }
}



function _report_render_error(err)
{
    let errstr = null;
    try {
        errstr = ((err && err.__class__ != null) ? repr(err) : ''+err);
    } catch (tostrerr) {
        errstr = ''+err;
    }
    console.error("\n🚨🚨🚨 FLM RENDERING ERROR 🚨🚨🚨\n\n" + errstr, err);
}
