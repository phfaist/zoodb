import { $$kw, render_value, ZooTextFragmentRenderer } from '../zooflm/index.js';


// -----------------------------------------------------------------------------


/**
 * Assembles search-document values from a list of ``[key, value]`` pairs
 * where some values may be compiled FLM fragments.  Each fragment is rendered
 * to plain text inside an FLM document context so that citations and
 * cross-references resolve correctly.
 *
 * Pass an instance's `assemble_doc_text_values` method as the
 * `assemble_doc_text_values` option of :class:`SearchableTextFieldset` when
 * zoo objects contain FLM-formatted fields.
 *
 * Constructor parameters:
 *
 * - `zoo_flm_environment` *(required)* — the FLM environment used to create
 *   the rendering document.
 *
 * - `render_value_fn` — function called as ``render_value_fn(v,
 *   render_context)`` to convert a single field value to a string.  Defaults
 *   to the `render_value` helper from `zooflm`.
 *
 * - `doc_metadata` — metadata object forwarded to
 *   `zoo_flm_environment.make_document()`.  Defaults to `null`.
 *
 * - `text_fragment_renderer` — fragment renderer used to produce plain text.
 *   Defaults to a new :class:`ZooTextFragmentRenderer` instance.
 */
export class FLMSearchableDocTextValuesAssembler
{
    constructor({zoo_flm_environment, render_value_fn, doc_metadata,
                 text_fragment_renderer})
    {
        this.zoo_flm_environment = zoo_flm_environment;
        this.doc_metadata = doc_metadata ?? null;
        this.render_value_fn = render_value_fn ?? render_value;

        this.text_fragment_renderer =
            text_fragment_renderer ?? new ZooTextFragmentRenderer();
    }
    
    assemble_doc_text_values(doc_values)
    {
        const render_doc = (render_context) => {
            //return render_value(x, render_context);
            let doc = {}
            //debug('render search data; doc_values =', doc_values);
            for (const [k,v] of doc_values) {
                //debug("v = ", v);
                const value = this.render_value_fn(v, render_context);
                if (k in doc) {
                    doc[k] += '\n' + value;
                } else {
                    doc[k] = value;
                }
            }
            return doc;
        };

        const flmdoc = this.zoo_flm_environment.make_document(
            render_doc,
            $$kw({
                feature_document_options: {
                    citations: {
                        use_endnotes: false,
                    },
                },
                metadata: this.doc_metadata,
            }),
        );

        const [result, /*junk*/] = flmdoc.render(this.text_fragment_renderer);
        //debug('render field value --> result = ', result);
        return result;
    }
}
