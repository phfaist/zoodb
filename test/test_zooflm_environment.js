import * as assert from 'assert';

import { $$kw } from '../src/zooflm/_flm-js/py.js';
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

        it('constructor with various enable_features combinations', function () {

            const env1 = new ZooFLMEnvironment({
                enable_features: {
                    default: false,
                    baseformatting: true,
                },
            });
            assert.ok(env1.feature_baseformatting);

            const env2 = new ZooFLMEnvironment({
                enable_features: {
                    default: false,
                    baseformatting: true,
                    math: true,
                },
            });
            assert.ok(env2.feature_baseformatting);
        });

        it('make_fragment() with inline content', function () {

            const environment = new ZooFLMEnvironment();

            const frag = environment.make_fragment(
                'inline \\textbf{bold}',
                $$kw({ is_block_level: false })
            );

            assert.ok(frag);
            assert.strictEqual(frag.flm_text, 'inline \\textbf{bold}');
        });

        it('make_fragment() with block-level content', function () {

            const environment = new ZooFLMEnvironment();

            const frag = environment.make_fragment(
                'A paragraph.\n\nAnother paragraph.',
                $$kw({ is_block_level: true })
            );

            assert.ok(frag);
            assert.strictEqual(frag.nodes.parsing_state.is_block_level, true);
        });

        it('math rendering with \\( ... \\)', function () {

            const environment = new ZooFLMEnvironment();

            const frag = environment.make_fragment(
                'The formula \\(x^2 + y^2 = z^2\\) is famous.',
                $$kw({ standalone_mode: true })
            );

            assert.ok(frag);
            assert.ok(frag.flm_text.includes('\\(x^2'));
        });

        it('href creation', function () {

            const environment = new ZooFLMEnvironment();

            const frag = environment.make_fragment(
                '\\href{https://example.com}{Example}',
                $$kw({ standalone_mode: true })
            );

            assert.ok(frag);
            assert.strictEqual(frag.flm_text, '\\href{https://example.com}{Example}');
        });

        it('error handling: invalid FLM markup throws', function () {

            const environment = new ZooFLMEnvironment();

            assert.throws(() => {
                environment.make_fragment('\\undefinedcommand{oops}');
            });
        });

    })
});
