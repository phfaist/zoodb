import debug_module from 'debug';
const debug = debug_module('zoodb.zooflm._renderutils');

import html_escape from 'escape-html';

// provide $$kw({...}) and repr() to importers
import { $$kw, repr, dict } from './_flm-js/py.js';

import { is_flm_fragment } from './_environment.js';

import { ZooHtmlFragmentRenderer } from './_fragmentrenderers.js';

import { sqzhtml } from '../util/sqzhtml.js';


/**
 * Render the contents of a variable as a string.
 * 
 * This function is meant
 * to be called from within a FLMDocument's render callback function, i.e.
 * in the presence of a valid `render_context`.
 * 
 * The argument can be:
 * 
 * - null/undefined (renders to an empty string)
 * 
 * - a string, a number, a boolean - renders a string representation of
 *   the given value
 * 
 * - an FLM fragment - renders the fragment using the
 *   specified `render_context`
 * 
 * - an array - renders each element individually, and joins the elements
 *   using options provided in `render_value_options` (see below)
 * 
 * - most other things will raise an error.
 * 
 * The `render_value_options` can include the following properties:
 * `list_joiner` (a string), `list_item_wrapper` (callback ``(x) => x``),
 * `list_full_wrapper` (callback ``(list) => list``).
 * 
 */
export function render_value(x, render_context, render_value_options = {})
{
    if (x == null) {
        return '';
    }

    const { list_joiner, list_item_wrapper, list_full_wrapper } = Object.assign(
        {
            list_joiner: '\n',
            list_item_wrapper: ((x)=>x),
            list_full_wrapper: ((x)=>x),
        },
        render_value_options
    );

    if (typeof x === 'string') {
        return render_context.fragment_renderer.render_verbatim(x);
    }
    if (typeof x === 'number') {
        return render_context.fragment_renderer.render_verbatim( new Number(x).toString() );
    }
    if (typeof x === 'boolean') {
        return render_context.fragment_renderer.render_verbatim( new Boolean(x).toString() );
    }
    if (x && x.length) { // is an array
        return list_full_wrapper(
            x.map( (value) => list_item_wrapper(
                render_value(value, render_context, render_value_options)
            ) ).join(list_joiner)
        );
    }
    // a fragment that contains error information? -> see flmsimplecontent db processor
    if (x && x._flm_error_info
        && render_context.fragment_renderer.render_error_info_message) {
        const flm_error_info = x._flm_error_info;
        // use a special method in our custom fragment renderers to render error
        // messages (see _fragmentrenderers.js)
        // debug(`Rendering fragment error information -> `, flm_error_info);
        return render_context.fragment_renderer.render_error_info_message(flm_error_info);
    }
    if (x && 'render' in x) { // has a render method -> e.g., flm fragment
        // debug(`Rendering fragment -> `, x.flm_text, x);
        return x.render(render_context);
    }

    // catch internal ZooDb object references and display them in some
    // meaningful way.
    if (typeof x === 'object' && Object.hasOwn(x, '_zoodb')) {
        return html_escape(`<Reference to zoo entry ‘${x._zoodb?.id}’>`);
    }

    debug('Cannot render %O', x);
    throw new Error(`Cannot render value of unknown type: ${x}`);
}

/**
 * Determine whether the `value` contains an empty value.  If `value` is
 * an FLM fragment, we test whether the fragment is empty (see
 * `FLMFragment.is_empty()`).
 */
export function value_not_empty(value)
{
    if (value == null) { // null or undefined
        return false;
    }
    if (value === '') {
        return false;
    }
    // a flmfragment:
    if (is_flm_fragment(value) && !value.is_empty()) {
        return true;
    }
    // e.g., string or array:
    if (value.length !== undefined && value.length > 0) {
        return true;
    }
    return false;
}


/**
 * .. code::
 * 
 *    const R = make_render_shorthands({ render_context, render_value_options })
 * 
 * Produce a set of useful shorthand functions that are particularly useful
 * from within a FLMDocument's render callback function.
 * 
 * Returns an object with the following properties:
 * 
 * .. code::
 * 
 *    const {
 *      ne, rdr, rdrblock, ref, refhref,
 *      // also returns these as part of the object, for convenience:
 *      render_context, render_value_options
 *    } = make_render_shorthands({ render_context, render_value_options })
 * 
 * The shorthand functions are the following:
 * 
 * - ``ne(x)`` is an alias for :js:func:`value_not_empty`.
 * 
 * - ``rdr(x)`` is an alias for ``render_value(x, render_context, render_value_options)``
 *   where the render_context and render_value_options are those provided as arguments
 *   to `make_render_shorthands()`.  See :js:func:`render_value` for more details and
 *   for documentation on `render_value_options`.
 * 
 * - ``rdrblock(x)`` is an alias for rendering a fragment in block-level mode (ensuring
 *   it is enclosed by ``<p>...</p>`` tags, for example if you are outputting in HTML).
 *   Specifically, it is an alias for
 *   ``x.render(render_context, $$kw({ is_block_level: true }))``.
 * 
 * - ``ref(object_type, object_id [, display_flm])`` produces a link to the
 *   given object (specified by type and ID), using the object's name as display text
 *   unless you specified a custom display text as third argument.
 *   Specifically, this is an alias for
 *   ``render_context.feature_render_manager('refs').render_ref(object_type, object_id, display_flm ?? null, null)``.
 * 
 * - ``refhref(object_type, object_id)`` produces the URL that you should link to to
 *   point to the page associated with the given object (specified by type and ID).
 *   This could be suitable for use in an ``<a href={...}>`` attribute, for example.
 * 
 */
export function make_render_shorthands({ render_context, render_value_options })
{
    if (render_context == null) {
        throw new Error(`render_context is not defined`);
    }

    render_value_options = Object.assign({
        list_joiner: '',
        list_item_wrapper: (x) => `<span class="paragraph-in-list">${x}</span>`,
    }, render_value_options ?? {});

    const ne = value_not_empty;

    const rdr = (x) => render_value(x, render_context, render_value_options);

    const rdrblock = (x) => x.render(render_context, $$kw({ is_block_level: true }));

    const refsmgr = (
        render_context.supports_feature('refs')
        ? render_context.feature_render_manager('refs')
        : null
    );

    const ref = (object_type, object_id, {display_flm}={}) => {
        return refsmgr.render_ref(object_type, object_id, display_flm ?? null, null);
    };

    const refhref = (object_type, object_id) => {
        const ref_instance = refsmgr.get_ref(object_type, object_id, null);
        return ref_instance.target_href;
    };

    return {
        ne, rdr, rdrblock, ref, refhref,
        // keep access to render_context, too.
        render_context,
        render_value_options
    };
}


/**
 * .. code::
 * 
 *    const result = make_and_render_document({
 *        zoo_flm_environment,
 *        render_doc_fn,
 *        doc_metadata,
 *        render_endnotes,
 *        render_endnotes_integrate_string,
 *        fragment_renderer,
 *        flm_error_policy,
 *        feature_document_options,
 *        feature_render_options,
 *    }
 * 
 * Helper function to create an FLMDocument instance from a render callback, perform
 * various menial preparation and finalization tasks, and render the "document" to
 * HTML (or to the format of your choosing, if you provide a fragment renderer
 * instance).
 * 
 * Example:
 * .. code::
 * 
 *      // ...
 *      const zoo_flm_environment = zoodb.zoo_flm_environment;
 * 
 *      const render_doc_fn = (render_context) => {
 *          const { ne, rdr, rdrblock, ref } = make_render_shorthands({ render_context });
 *          let s = '';
 *          s += `<article><h1>${ rdr(person.name) }</h1>`;
 *          s += `<h2>Biography</h2><div>${ rdrblock(person.biography) }</div>`;
 *
 *          const relations = person.relations ?? {};
 *          if (relations.spouse != null) {
 *              s += `<h2>Spouse</h2><p>${ ref('person', relations.spouse) }</p>`;
 *          }
 * 
 *          // ...
 *         
 *          s += `<RENDER_ENDNOTES/></article>`;
 *          return s;
 *      }
 *
 *      return make_and_render_document({
 *          zoo_flm_environment,
 *          render_doc_fn,
 *          doc_metadata: {
 *              // ...
 *          },
 *          render_endnotes: {
 *              annotations: ['mycustomhtmlclass'],
 *          }
 *      });
 * 
 */
export function make_and_render_document({
    zoo_flm_environment,
    render_doc_fn,
    doc_metadata,
    render_endnotes,
    render_endnotes_integrate_string,
    fragment_renderer,
    flm_error_policy,
    feature_document_options,
    feature_render_options,
})
{
    // argument defaults
    flm_error_policy ??= 'abort';
    fragment_renderer ??= new ZooHtmlFragmentRenderer();

    render_endnotes_integrate_string ??= (rendered_content, rendered_endnotes) => 
        rendered_content.replace('<RENDER_ENDNOTES/>', rendered_endnotes)
        ;

    let kwargs = {};
    if (doc_metadata != null) {
        kwargs.metadata = doc_metadata;
    }
    if (feature_document_options != null) {
        kwargs.feature_document_options = feature_document_options;
    }

    const internal_render_doc_fn = (render_context) => {
        const rendered_content = render_doc_fn(render_context);
        let rendered_endnotes = null;
        if (render_endnotes) {
            let endnotes_kwargs = {
                endnotes_heading_title: 'References',
                endnotes_heading_level: 2,
                //annotations: [], //render_endnotes_block_annotations,
            };
            if (typeof render_endnotes === 'object') {
                Object.assign(endnotes_kwargs, render_endnotes);
            }
            rendered_endnotes =
                render_context.feature_render_manager('endnotes').render_endnotes($$kw(
                    endnotes_kwargs,
                ));
        }
        // need dict() because flm will test for dict instance ...
        return dict({rendered_content, rendered_endnotes});
    };

    const doc = zoo_flm_environment.make_document( internal_render_doc_fn, $$kw(kwargs) );
    try {
        let [rendered_content_data, /*render_context*/] =
            doc.render( fragment_renderer, feature_render_options );
        let {rendered_content, rendered_endnotes} = rendered_content_data;
        if (rendered_endnotes != null) {
            rendered_content = render_endnotes_integrate_string(
                rendered_content,
                rendered_endnotes,
            );
        }
        return rendered_content;
    } catch (err) {
        let errstr = '<??>';
        try {
            errstr = ((err && err.__class__ != null) ? repr(err) : ''+err);
        } catch (tostrerr) {
            debug(`(Can't get error string), will proceed with what we got`);
        }
        console.error("\n🚨🚨🚨 FLM RENDERING ERROR 🚨🚨🚨\n\n" + errstr, err);

        if (flm_error_policy === 'abort') {
            debug(`FLM Error & policy is 'abort', aborting compilation`);
            throw err;
        } else if (flm_error_policy == 'continue') {
            // report the error in the resulting text itself so it can be
            // debugged.
            debug(`Continuing despite FLM Error (flm_error_policy is 'continue')`);
            return sqzhtml`
  <div class="flm-html-error">
    <b>🚨 FLM ERROR 🚨</b>
    <pre>${html_escape(errstr)}</pre>
  </div>`;
        } else {
            throw new Error(
                `Invalid flm_error_policy: ‘${flm_error_policy}’, `
                    + `expected 'abort' or 'continue'`
            );
        }
    }
}


