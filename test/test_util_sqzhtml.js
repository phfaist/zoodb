import * as assert from 'assert';

import { sqzhtml } from '../src/util/sqzhtml.js';


describe('zoodb.util.sqzhtml', function () {

    describe('sqzhtml', function () {

        it('minifies whitespace around HTML tags', function () {
            const result = sqzhtml`
                <div>
                    <p>Hello</p>
                </div>
            `;
            assert.strictEqual(result, '<div><p>Hello</p></div>');
        });

        it('preserves content within tags', function () {
            const result = sqzhtml`<p>Hello   world</p>`;
            assert.strictEqual(result, '<p>Hello   world</p>');
        });

        it('handles empty input', function () {
            const result = sqzhtml``;
            assert.strictEqual(result, '');
        });

        it('handles interpolated values', function () {
            const url = 'https://example.com';
            const result = sqzhtml`
                <a href="${url}">
                    Link
                </a>
            `;
            assert.strictEqual(result, `<a href="${url}">Link</a>`);
        });

        it('removes newlines between closing and opening tags', function () {
            const result = sqzhtml`
                <div>
                    content
                </div>
                <p>
                    more
                </p>
            `;
            assert.ok(!result.includes('>\n'));
        });

        it('preserves newlines not adjacent to tags', function () {
            const result = sqzhtml`<pre>line1
line2</pre>`;
            assert.ok(result.includes('line1\nline2'));
        });

    });

});
