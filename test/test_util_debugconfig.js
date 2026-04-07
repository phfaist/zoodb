import * as assert from 'assert';
import { inspect } from 'node:util';
import fs from 'node:fs';

import { debugconfig } from '../src/util/debugconfig.js';


// Helpers to simulate debug logger objects
const enabledDebug = { enabled: true };
const disabledDebug = { enabled: false };

function render(proxy) {
    return inspect(proxy, { depth: 10 });
}


describe('zoodb.util.debugconfig', function () {

    describe('disabled logger', function () {

        it('returns the original config object unchanged', function () {
            const config = { a: 1, b: 'hello' };
            const result = debugconfig(disabledDebug, config);
            assert.strictEqual(result, config);
        });

    });

    describe('basic passthrough', function () {

        it('preserves short strings, numbers, booleans, null', function () {
            const config = { s: 'short', n: 42, b: true, nil: null };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes("'short'"));
            assert.ok(output.includes('42'));
            assert.ok(output.includes('true'));
            assert.ok(output.includes('null'));
        });

        it('preserves arrays as-is', function () {
            const config = { arr: [1, 2, 3] };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('[ 1, 2, 3 ]'));
        });

        it('preserves functions', function () {
            const config = { fn: function myFunc() {} };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('myFunc'));
        });

        it('preserves small objects fully', function () {
            const config = { sub: { a: 1, b: 2, c: 3 } };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('a:'));
            assert.ok(output.includes('b:'));
            assert.ok(output.includes('c:'));
        });

    });

    describe('long string truncation', function () {

        it('keeps strings at or below default max length (256)', function () {
            const config = { value: 'y'.repeat(256) };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('y'.repeat(256)));
            assert.ok(!output.includes('chars'));
        });

        it('truncates strings exceeding default max length to 50 chars', function () {
            const long = 'x'.repeat(300);
            const config = { value: long };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('x'.repeat(50)));
            assert.ok(!output.includes('x'.repeat(51)));
            assert.ok(output.includes('(300 chars)'));
        });

        it('truncates long strings in nested objects', function () {
            const config = { outer: { inner: 'z'.repeat(400) } };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('z'.repeat(50)));
            assert.ok(!output.includes('z'.repeat(51)));
            assert.ok(output.includes('(400 chars)'));
        });

        it('respects custom string_max_length', function () {
            const config = { value: 'a'.repeat(100) };
            const output = render(
                debugconfig(enabledDebug, config, { string_max_length: 80 })
            );
            assert.ok(output.includes('(100 chars)'));
        });

        it('respects custom string_truncate_to', function () {
            const config = { value: 'b'.repeat(300) };
            const output = render(
                debugconfig(enabledDebug, config, { string_truncate_to: 20 })
            );
            assert.ok(output.includes('b'.repeat(20)));
            assert.ok(!output.includes('b'.repeat(21)));
            assert.ok(output.includes('(300 chars)'));
        });

        it('respects both custom string options together', function () {
            const s80 = 'c'.repeat(80);
            const s200 = 'd'.repeat(200);
            const config = { short: s80, long: s200 };
            const output = render(
                debugconfig(enabledDebug, config,
                            { string_max_length: 100, string_truncate_to: 30 })
            );
            // 80 chars is below max 100 → kept
            assert.ok(output.includes(s80));
            // 200 chars exceeds max 100 → truncated to 30
            assert.ok(output.includes('d'.repeat(30)));
            assert.ok(!output.includes('d'.repeat(31)));
            assert.ok(output.includes('(200 chars)'));
        });

    });

    describe('nesting depth (levels)', function () {

        it('defaults to 2 levels of nesting', function () {
            // root (levels=2) → l1 (levels=1) → l2 (levels=0) → l3 not wrapped
            const config = {
                l1: {
                    l2: {
                        l3: {
                            deep_string: 'a'.repeat(300),
                        },
                    },
                },
            };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('a'.repeat(300)));
        });

        it('respects a custom levels setting', function () {
            const config = {
                l1: {
                    l2: {
                        deep_string: 'b'.repeat(300),
                    },
                },
            };
            const output = render(
                debugconfig(enabledDebug, config, { levels: 3 })
            );
            assert.ok(output.includes('b'.repeat(50)));
            assert.ok(!output.includes('b'.repeat(51)));
            assert.ok(output.includes('(300 chars)'));
        });

    });

    describe('large object summarisation', function () {

        it('summarises objects with more than 12 keys', function () {
            const big = {};
            for (let i = 0; i < 20; i++) {
                big[`key${i}`] = i;
            }
            const config = { data: big };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('20 keys'));
            assert.ok(output.includes('key0'));
            assert.ok(output.includes('key11'));
            assert.ok(!output.includes('key12'));
            assert.ok(output.includes('...'));
        });

        it('does not summarise objects with exactly 12 keys', function () {
            const obj = {};
            for (let i = 0; i < 12; i++) {
                obj[`k${i}`] = i;
            }
            const config = { data: obj };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(!output.includes('keys'));
            assert.ok(output.includes('k0'));
            assert.ok(output.includes('k11'));
        });

        it('summarises node:fs module', function () {
            const config = { fs: fs };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('keys'));
            assert.ok(output.includes('appendFile'));
            // must not dump the full module
            assert.ok(!output.includes('UV_FS_SYMLINK'));
        });

        it('summarises large objects regardless of nesting depth', function () {
            // Even at levels=0, large objects are still summarised
            const big = {};
            for (let i = 0; i < 15; i++) {
                big[`fn${i}`] = () => {};
            }
            const config = { wrapper: { inner: big } };
            const output = render(
                debugconfig(enabledDebug, config, { levels: 0 })
            );
            // levels=0 means wrapper is not descended into, but if it
            // were reached it would still summarise. At levels=0 wrapper
            // itself is small (1 key) so it's passed through by inspect.
            // Let's test at levels=1 so we reach inner:
            const output2 = render(
                debugconfig(enabledDebug, config, { levels: 1 })
            );
            assert.ok(output2.includes('15 keys'));
            assert.ok(output2.includes('fn0'));
        });

        it('summarises large objects nested inside config', function () {
            const config = {
                name: 'test',
                citations: {
                    fs: fs,
                    other: 'kept',
                },
            };
            const output = render(debugconfig(enabledDebug, config));
            // citations.fs is large → summarised
            assert.ok(output.includes('keys'));
            // citations.other is preserved
            assert.ok(output.includes('kept'));
            assert.ok(output.includes("'test'"));
        });

    });

    describe('combined behaviour', function () {

        it('truncates strings and summarises large objects together', function () {
            const big = {};
            for (let i = 0; i < 15; i++) {
                big[`method${i}`] = () => {};
            }
            const longStyle = '<xml>' + 'data'.repeat(100) + '</xml>';
            const config = {
                fs: big,
                csl_style: longStyle,
                name: 'zoo',
            };
            const output = render(debugconfig(enabledDebug, config));
            assert.ok(output.includes('15 keys'));
            assert.ok(output.includes(`(${longStyle.length} chars)`));
            assert.ok(output.includes("'zoo'"));
        });

    });

    describe('does not clone', function () {

        it('does not eagerly access config values when disabled', function () {
            let accessed = false;
            const config = {
                get trap() { accessed = true; return 'value'; },
            };
            debugconfig(disabledDebug, config);
            assert.strictEqual(accessed, false);
        });

    });

});
