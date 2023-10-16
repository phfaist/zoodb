import * as assert from 'assert';

import {
    ZooFLMEnvironment,
} from '../src/zooflm/_environment.js';


describe('zooflm._environment', function () {
    describe('ZooFLMEnvironment', function () {

        it('can compile a simple FLM fragment', function () {

            const environment = new ZooFLMEnvironment();

            const frag = environment.make_fragment('Hello, \\textit{world}!');

            assert.strictEqual(frag.flm_text, 'Hello, \\textit{world}!');
            assert.strictEqual([...frag.nodes].length, 3); // chars, macro, chars.

        });

    })
});
