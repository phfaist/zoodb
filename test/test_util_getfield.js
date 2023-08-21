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
