import { $$kw, render_value, ZooTextFragmentRenderer } from '../zooflm/index.js';


// -----------------------------------------------------------------------------


/**
 * Doc.......
 *
 * For use in combination with a SearchableTextFieldset() instance...
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
