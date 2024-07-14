import * as assert from 'assert';

import { dict, $$kw, repr } from '../src/zooflm/_flm-js/py.js';
import {
    ZooFLMEnvironment,
} from '../src/zooflm/_environment.js';
import {
    ZooHtmlFragmentRenderer,
} from '../src/zooflm/_fragmentrenderers.js';

describe('zooflm._fragmentrenderers', function () {
    describe('ZooHtmlFragmentRenderer', function () {
            
        it('can compile a simple FLM fragment with math to HTML', function () {

            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation(
                'arxiv', '1310.7536', '(Some citation text)'
            );

            const flm_text = `A nonlinear single-asymmetric-error code that generalize VT codes and that is constructed from an abelian group.\n\nA CR code for group \\(G\\) and fixed group element \\(g\\) consists of all binary strings \\(c=c_1c_2\\cdots c_n\\) that satisfy \\(\\sum_i c_i g_i = g\\) for some elements \\(g_i\\) \\cite{arxiv:1310.7536}.  Here, addition is the group operation, the multiplication \\(1 g_i = g_i\\), and \\(0 g_i = 0_G\\) where \\(0_G\\) is the identity element.`;
            const frag = environment.make_fragment(flm_text);

            assert.strictEqual(frag.flm_text, flm_text);

            const render_doc_fn = (render_context) => {
                const rendered_content = frag.render(render_context);
                // need dict() because flm will test for dict instance ...
                return dict({rendered_content, });
            };

            const document_kwargs = {};
            const feature_render_options = {};

            let fragment_renderer = new ZooHtmlFragmentRenderer();

            const doc = environment.make_document( render_doc_fn, $$kw(document_kwargs) );
            let [rendered_content_data, /*render_context*/] =
                doc.render( fragment_renderer, feature_render_options );
            let {rendered_content, } = rendered_content_data;

            assert.strictEqual(
                rendered_content,
                `<p>A nonlinear single-asymmetric-error code that generalize VT codes and that is constructed from an abelian group.</p><p>A CR code for group <span class="inline-math">\\(G\\)</span> and fixed group element <span class="inline-math">\\(g\\)</span> consists of all binary strings <span class="inline-math">\\(c=c_1c_2\\cdots c_n\\)</span> that satisfy <span class="inline-math">\\(\\sum_i c_i g_i = g\\)</span> for some elements <span class="inline-math">\\(g_i\\)</span> <span class="citation-marks"><a href="#citation-1" class="href-endnote endnote citation">[1]</a></span>. Here, addition is the group operation, the multiplication <span class="inline-math">\\(1 g_i = g_i\\)</span>, and <span class="inline-math">\\(0 g_i = 0_G\\)</span> where <span class="inline-math">\\(0_G\\)</span> is the identity element.</p>`
            );
        });
    });
});