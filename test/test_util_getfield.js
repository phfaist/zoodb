import * as assert from 'assert';

import { getfield, setfield, iterfield, concatlistfield } from '../src/util/getfield.js';


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
        it('creates intermediate objects as needed', function () {
            let d = {};
            setfield(d, 'a.b.c', () => 42);
            assert.strictEqual(d.a.b.c, 42);
        });

        it('creates intermediate arrays as needed', function () {
            let d = {};
            setfield(d, 'items.[0].name', () => 'first');
            assert.strictEqual(d.items[0].name, 'first');
        });

        it('uses set_object_attribute_fn form to delete fields', function () {
            let d = { a: { b: 1, c: 2 } };
            setfield(d, 'a.b', {
                set_object_attribute_fn: (parent, key) => { delete parent[key]; }
            });
            assert.strictEqual(d.a.b, undefined);
            assert.strictEqual(d.a.c, 2);
        });

    });

    describe('iterfield', function () {

        it('yields all positions for a simple field path', function () {
            let d = { a: { b: 42 } };
            const results = [...iterfield(d, 'a.b')];
            assert.strictEqual(results.length, 1);
            assert.strictEqual(results[0].value, 42);
            assert.strictEqual(results[0].fieldnameidx, 'a.b');
        });

        it('yields all array items with [] in path', function () {
            let d = { items: [10, 20, 30] };
            const results = [...iterfield(d, 'items.[]')];
            assert.strictEqual(results.length, 3);
            assert.strictEqual(results[0].value, 10);
            assert.strictEqual(results[1].value, 20);
            assert.strictEqual(results[2].value, 30);
            assert.strictEqual(results[0].fieldnameidx, 'items.[0]');
        });

        it('yields nested array items', function () {
            let d = {
                groups: [
                    { name: 'a' },
                    { name: 'b' },
                ],
            };
            const results = [...iterfield(d, 'groups.[].name')];
            assert.strictEqual(results.length, 2);
            assert.strictEqual(results[0].value, 'a');
            assert.strictEqual(results[1].value, 'b');
        });

        it('yields empty for [] on null/undefined (silent empty array)', function () {
            let d = { items: null };
            const results = [...iterfield(d, 'items.[]')];
            assert.strictEqual(results.length, 0);
        });

        it('throws if obj is undefined', function () {
            assert.throws(() => {
                [...iterfield(undefined, 'a')];
            }, /undefined/i);
        });

    });

    describe('concatlistfield', function () {

        it('appends to an existing array field', function () {
            let d = { tags: ['a', 'b'] };
            concatlistfield(d, 'tags', ['c', 'd']);
            assert.deepStrictEqual(d.tags, ['a', 'b', 'c', 'd']);
        });

        it('creates a new array when field is absent', function () {
            let d = {};
            concatlistfield(d, 'tags', ['x', 'y']);
            assert.deepStrictEqual(d.tags, ['x', 'y']);
        });

        it('creates a new array when field is null', function () {
            let d = { tags: null };
            concatlistfield(d, 'tags', ['x']);
            assert.deepStrictEqual(d.tags, ['x']);
        });

        it('works with nested fields', function () {
            let d = { a: { items: [1] } };
            concatlistfield(d, 'a.items', [2, 3]);
            assert.deepStrictEqual(d.a.items, [1, 2, 3]);
        });

    });

});
