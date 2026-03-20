import * as assert from 'assert';

import { getfield, setfield } from '../src/util/getfield.js';


describe('zoodb.util.getfield', function () {

    describe('getfield', function () {

        it('gets a field value in nested object', async function () {

            let d = {
                a: 1,
                b: 2,
                c: { x: 0, y: 1 },
                d: [ { item: 0 }, { item: 1 }, { item: 2 } ],
            };

            assert.strictEqual(
                getfield(d, 'a'),
                1
            );
            assert.strictEqual(
                getfield(d, 'c.y'),
                1
            );
            assert.strictEqual(
                getfield(d, 'd.[1].item'),
                1
            );
        });

        it('returns undefined for missing intermediate properties', function () {
            let d = { a: 1, c: { x: 0 } };

            assert.strictEqual(
                getfield(d, 'nonexistent.y'),
                undefined
            );
            assert.strictEqual(
                getfield(d, 'c.nonexistent.deep'),
                undefined
            );
        });

        it('returns null when a null property is the final value', function () {
            let d = { a: null, c: { x: null } };

            assert.strictEqual(getfield(d, 'a'), null);
            assert.strictEqual(getfield(d, 'c.x'), null);
        });

        it('throws when accessing a property on a non-indexable value', function () {
            let d = { a: null, b: { x: null } };

            assert.throws(
                () => getfield(d, 'a.y'),
                /cannot be accessed/
            );
            assert.throws(
                () => getfield(d, 'b.x.deep'),
                /cannot be accessed/
            );
        });

        it('preserves falsy values like false, 0, and empty string', function () {
            let d = {
                flag: false,
                count: 0,
                label: '',
                nested: { flag: false, count: 0, label: '' },
            };

            assert.strictEqual(getfield(d, 'flag'), false);
            assert.strictEqual(getfield(d, 'count'), 0);
            assert.strictEqual(getfield(d, 'label'), '');
            assert.strictEqual(getfield(d, 'nested.flag'), false);
            assert.strictEqual(getfield(d, 'nested.count'), 0);
            assert.strictEqual(getfield(d, 'nested.label'), '');
        });

        it('handles numeric array index as the last part of the path', function () {
            let d = { items: [10, 20, 30] };

            assert.strictEqual(getfield(d, 'items.[0]'), 10);
            assert.strictEqual(getfield(d, 'items.[2]'), 30);
        });

    });

    describe('setfield', function () {

        it('can set a field value in a nested object', async function () {

            let d = {
                a: 1,
                b: 2,
                c: { x: 0, y: 1 },
                d: [ 'one', 'two', 'three' ],
                e: [ { item: 0 }, { item: 1 }, { item: 2 } ],
            };

            setfield(d, 'a', () => 10);
            assert.strictEqual(d.a, 10);

            setfield(d, 'c.y', (value) => value+10);
            assert.strictEqual(d.c.y, 11);

            setfield(d, 'd.[]', () => 'four');
            assert.deepStrictEqual(d.d, [ 'one', 'two', 'three', 'four' ]);

            setfield(d, 'e.[].item', () => -20);
            assert.deepStrictEqual(d.e,
                                   [ { item: 0 }, { item: 1 }, { item: 2 }, { item: -20 } ]);

        });
    });

});
