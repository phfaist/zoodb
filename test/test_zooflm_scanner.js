import * as assert from 'assert';

import { $$kw } from '../src/zooflm/_flm-js/py.js';
import {
    ZooFLMEnvironment,
} from '../src/zooflm/_environment.js';
import { ZooFLMResourceInfo } from '../src/zooflm/_resourceinfo.js';
import {
    ZooFLMScanner,
    visitor_scan_object,
    visitor_scan_zoo,
} from '../src/zooflm/scanner.js';


function makeResourceInfo(object_type, object_id) {
    return new ZooFLMResourceInfo(object_type, object_id, `/${object_type}/${object_id}.yaml`);
}


describe('zoodb.zooflm.scanner', function () {

    describe('ZooFLMScanner', function () {

        it('constructs with default options', function () {
            const scanner = new ZooFLMScanner();
            assert.ok(scanner.encountered);
            assert.deepStrictEqual(scanner.encountered.citations, []);
            assert.deepStrictEqual(scanner.encountered.references, []);
            assert.deepStrictEqual(scanner.encountered.resources, []);
            assert.deepStrictEqual(scanner.encountered.referenceables, []);
        });

        it('scans citations from \\cite commands', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation(
                'arxiv', '2301.00001', '(Some citation)'
            );

            const resource_info = makeResourceInfo('code', 'mycode');
            const frag = environment.make_fragment(
                'Some text \\cite{arxiv:2301.00001}.',
                $$kw({ resource_info, what: 'code:mycode .description' })
            );

            const scanner = new ZooFLMScanner();
            scanner.scan_fragment(frag);

            const citations = scanner.get_encountered('citations');
            assert.strictEqual(citations.length, 1);
            assert.strictEqual(citations[0].cite_prefix, 'arxiv');
            assert.strictEqual(citations[0].cite_key, '2301.00001');
            assert.strictEqual(citations[0].encountered_in.resource_info.object_type, 'code');
            assert.strictEqual(citations[0].encountered_in.resource_info.object_id, 'mycode');
        });

        it('scans multiple citations from one \\cite command', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '1111.1111', '(Ref 1)');
            environment.citations_provider.add_citation('arxiv', '2222.2222', '(Ref 2)');

            const resource_info = makeResourceInfo('code', 'testcode');
            const frag = environment.make_fragment(
                'See \\cite{arxiv:1111.1111,arxiv:2222.2222}.',
                $$kw({ resource_info, what: 'code:testcode .description' })
            );

            const scanner = new ZooFLMScanner();
            scanner.scan_fragment(frag);

            const citations = scanner.get_encountered('citations');
            assert.strictEqual(citations.length, 2);
            assert.strictEqual(citations[0].cite_key, '1111.1111');
            assert.strictEqual(citations[1].cite_key, '2222.2222');
        });

        it('get_encountered returns empty array for non-existent object', function () {
            const scanner = new ZooFLMScanner();
            const result = scanner.get_encountered('citations', {
                object_type: 'code', object_id: 'nonexistent'
            });
            assert.deepStrictEqual(result, []);
        });

        it('tracks encountered_by_object', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '0001.0001', '(Ref)');

            const resource_info = makeResourceInfo('code', 'alpha');
            const frag = environment.make_fragment(
                'Ref \\cite{arxiv:0001.0001}.',
                $$kw({ resource_info, what: 'code:alpha .description' })
            );

            const scanner = new ZooFLMScanner();
            scanner.scan_fragment(frag);

            const by_obj = scanner.get_encountered('citations', {
                object_type: 'code', object_id: 'alpha'
            });
            assert.strictEqual(by_obj.length, 1);
            assert.strictEqual(by_obj[0].cite_key, '0001.0001');
        });

        it('unregister_all_from_object removes entries', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '1111.1111', '(Ref 1)');
            environment.citations_provider.add_citation('doi', '10.1234/test', '(Ref 2)');

            const ri1 = makeResourceInfo('code', 'alpha');
            const ri2 = makeResourceInfo('code', 'beta');

            const frag1 = environment.make_fragment(
                'A \\cite{arxiv:1111.1111}.',
                $$kw({ resource_info: ri1, what: 'code:alpha .desc' })
            );
            const frag2 = environment.make_fragment(
                'B \\cite{doi:10.1234/test}.',
                $$kw({ resource_info: ri2, what: 'code:beta .desc' })
            );

            const scanner = new ZooFLMScanner();
            scanner.scan_fragment(frag1);
            scanner.scan_fragment(frag2);

            assert.strictEqual(scanner.get_encountered('citations').length, 2);

            scanner.unregister_all_from_object('code', 'alpha');

            const remaining = scanner.get_encountered('citations');
            assert.strictEqual(remaining.length, 1);
            assert.strictEqual(remaining[0].cite_key, '10.1234/test');
        });

        it('enable option disables scanning specific types', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '1111.1111', '(Ref)');

            const resource_info = makeResourceInfo('code', 'test');
            const frag = environment.make_fragment(
                'Text \\cite{arxiv:1111.1111}.',
                $$kw({ resource_info, what: 'code:test .desc' })
            );

            const scanner = new ZooFLMScanner({ enable: { citations: false } });
            scanner.scan_fragment(frag);

            // Citations scanning was disabled
            assert.throws(() => {
                scanner.get_encountered('citations');
            }, /disabled/i);
        });

        it('get_encountered throws for unknown scanned_type', function () {
            const scanner = new ZooFLMScanner();
            assert.throws(() => {
                scanner.get_encountered('nonexistent_type');
            }, /disabled|No such scanned type/);
        });

    });

    describe('visitor_scan_object', function () {

        it('scans FLM fields of an object using schema', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '9999.0001', '(Test)');

            const resource_info = makeResourceInfo('code', 'myobj');

            // Create a compiled FLM fragment (simulating what flmsimplecontent processor does)
            const frag = environment.make_fragment(
                'Description with \\cite{arxiv:9999.0001}.',
                $$kw({ resource_info, what: 'code:myobj .description' })
            );

            const obj = Object.create(null);
            obj.code_id = 'myobj';
            obj.name = 'My Object';
            obj.description = frag;

            const schema = {
                type: 'object',
                properties: {
                    code_id: { type: 'string' },
                    name: { type: 'string' },
                    description: { type: 'string', _flm: 'standalone' },
                },
            };

            const scanner = new ZooFLMScanner();
            visitor_scan_object(scanner, obj, schema, 'code:myobj');

            const citations = scanner.get_encountered('citations');
            assert.strictEqual(citations.length, 1);
            assert.strictEqual(citations[0].cite_prefix, 'arxiv');
            assert.strictEqual(citations[0].cite_key, '9999.0001');
        });

        it('skips non-FLM fields', function () {
            const environment = new ZooFLMEnvironment();

            const obj = Object.create(null);
            obj.code_id = 'test';
            obj.name = 'A regular string, not FLM';

            const schema = {
                type: 'object',
                properties: {
                    code_id: { type: 'string' },
                    name: { type: 'string' },  // no _flm annotation
                },
            };

            const scanner = new ZooFLMScanner();
            // Should not throw even though name is a plain string
            visitor_scan_object(scanner, obj, schema, 'code:test');

            assert.deepStrictEqual(scanner.get_encountered('citations'), []);
        });

    });

    describe('visitor_scan_zoo', function () {

        it('scans all objects across all types', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '0001.0001', '(Ref 1)');
            environment.citations_provider.add_citation('arxiv', '0002.0002', '(Ref 2)');

            const ri1 = makeResourceInfo('code', 'code1');
            const ri2 = makeResourceInfo('code', 'code2');

            const frag1 = environment.make_fragment(
                'Ref \\cite{arxiv:0001.0001}.',
                $$kw({ resource_info: ri1, what: 'code:code1 .description' })
            );
            const frag2 = environment.make_fragment(
                'Ref \\cite{arxiv:0002.0002}.',
                $$kw({ resource_info: ri2, what: 'code:code2 .description' })
            );

            const schema = {
                type: 'object',
                properties: {
                    code_id: { type: 'string' },
                    description: { type: 'string', _flm: 'standalone' },
                },
            };

            const code1 = Object.create(null);
            code1.code_id = 'code1';
            code1.description = frag1;

            const code2 = Object.create(null);
            code2.code_id = 'code2';
            code2.description = frag2;

            const zoodbdata = {
                schemas: { code: schema },
                objects: { code: { code1, code2 } },
            };

            const scanner = new ZooFLMScanner();
            visitor_scan_zoo(scanner, zoodbdata);

            const citations = scanner.get_encountered('citations');
            assert.strictEqual(citations.length, 2);
        });

        it('respects object_types option', function () {
            const environment = new ZooFLMEnvironment();

            environment.citations_provider.add_citation('arxiv', '1111.1111', '(Ref 1)');
            environment.citations_provider.add_citation('arxiv', '2222.2222', '(Ref 2)');

            const ri1 = makeResourceInfo('code', 'c1');
            const ri2 = makeResourceInfo('gate', 'g1');

            const frag1 = environment.make_fragment(
                'A \\cite{arxiv:1111.1111}.',
                $$kw({ resource_info: ri1, what: 'code:c1 .description' })
            );
            const frag2 = environment.make_fragment(
                'B \\cite{arxiv:2222.2222}.',
                $$kw({ resource_info: ri2, what: 'gate:g1 .description' })
            );

            const code_schema = {
                type: 'object',
                properties: {
                    code_id: { type: 'string' },
                    description: { type: 'string', _flm: 'standalone' },
                },
            };
            const gate_schema = {
                type: 'object',
                properties: {
                    gate_id: { type: 'string' },
                    description: { type: 'string', _flm: 'standalone' },
                },
            };

            const c1 = Object.create(null);
            c1.code_id = 'c1';
            c1.description = frag1;

            const g1 = Object.create(null);
            g1.gate_id = 'g1';
            g1.description = frag2;

            const zoodbdata = {
                schemas: { code: code_schema, gate: gate_schema },
                objects: { code: { c1 }, gate: { g1 } },
            };

            const scanner = new ZooFLMScanner();
            visitor_scan_zoo(scanner, zoodbdata, { object_types: ['code'] });

            const citations = scanner.get_encountered('citations');
            assert.strictEqual(citations.length, 1);
            assert.strictEqual(citations[0].cite_key, '1111.1111');
        });

    });

});
