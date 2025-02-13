import * as assert from 'assert';

import { makeLexicographicCompareFn } from '../src/util/lexicographic.js';

            
// let a = [
//     [3, 'apple'],
//     [1, 'zombie', 45],
//     [2, 'apple', 50, 23],
//     [1, 'yombie', 55],
//     [2, 'apple', 50, 23, -1],
// ];

describe('zoodb.util', function () {

    describe('lexicographic', function () {

        it('compares arrays with reasonable defaults', async function () {

            let cmp = makeLexicographicCompareFn();

            assert.strictEqual(
                cmp([1, 'zombie', 45], [2, 'apple', 50, 23]),
                -1
            );
            assert.strictEqual(
                cmp([2, 'apple', 50, 23], [1, 'zombie', 45]),
                1
            );
            assert.strictEqual(
                cmp([1, 'zombie', 45], [1, 'apple', 50, 23]),
                1
            );
            assert.strictEqual(
                cmp([2, 'apple', 50, 23], [2, 'apple', 50, 23]),
                0
            );
            assert.strictEqual(
                cmp([1, 'apple', 45], [1, 'apple']),
                1
            );

        } );

        it('compares arrays with given std sort functions', async function () {

            let cmp = makeLexicographicCompareFn(
                ['number', 'string'],
                { cmpOpDefault: 'int' }
            );

            assert.strictEqual(
                cmp([1, 'zombie', 45], [2, 'apple', 50, 23]),
                -1
            );
            assert.strictEqual(
                cmp([2, 'apple', 50, 23], [1, 'zombie', 45]),
                1
            );
            assert.strictEqual(
                cmp([1, 'zombie', 45], [1, 'apple', 50, 23]),
                1
            );
            assert.strictEqual(
                cmp([2, 'apple', 50, 23], [2, 'apple', 50, 23]),
                0
            );
            assert.strictEqual(
                cmp([1, 'apple', 45], [1, 'apple']),
                1
            );

        } );


        it('compares arrays with custom sort function', async function () {

            let cmp = makeLexicographicCompareFn(
                ['whackynumber', 'whackystring'],
                {
                    cmpOpDefault: 'whackydefault',
                    cmpOps: {
                        whackynumber: (a, b) => b - a, // reverse direction
                        whackystring: (a, b) => 0, // simply ignores this one
                        whackydefault: (a, b) => (''+a).localeCompare(''+b), // string
                    }
                }
            );

            assert.strictEqual(
                cmp([1, 'zombie', 45], [2, 'apple', 50, 23]),
                1,
            );
            assert.strictEqual(
                cmp([1, 'zombie', 45], [1, 'apple', 500, 23]), // "45"  '<='  "500"
                -1,
            );

        } );

    } );
} );
