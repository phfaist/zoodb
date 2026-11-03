// Tests of the FLM fields of back-references: the relations populator copies
// a relation's values (an FLM `detail`) into a back-reference of the target
// object and records where they come from (`_zoodb.copied_fields`); the field
// compiler gives the copy the fragment of the relation's own field, compiled
// once (with its origin and its file position), and the scan counts the
// references and citations in it for both objects, its labels and terms for
// the relation's object only.  A reload, which copies the relations again,
// gives the scan results, the fragments and the dumps of a first load.  Over
// in-memory items, without the standard setup.  No network.

import * as assert from 'assert';

import { ZooDb } from '../src/index.js';

import { RelationsPopulator } from '../src/dbprocessor/relations.js';
import { ZooFlmProcessor } from '../src/dbprocessor/flmprocessor.js';
import { copied_field_source } from '../src/dbprocessor/flmsimplecontent.js';
import { ZooFlmEngine, format_diagnostic, is_fragment } from '../src/zooflm/engine.js';

import { schema_validator } from './_helperstest.js';


const relation_list = (fields = {}) => ({
    type: 'array',
    ...fields,
    items: {
        type: 'object',
        additionalProperties: false,
        properties: {
            item_id: { type: 'string' },
            detail: { type: 'string', _flm: 'full' },
            item: { _auto_populated: true },
        },
    },
});

const schemas = () => ({
    item: {
        _zoo_primarykey: 'item_id',
        _zoo_relations: [
            {
                object_field: 'relations.parents',
                to_object_type: 'item',
                relation_primary_key_field: 'item_id',
                relation_add_object_field: 'item',
                backreference: { field: 'relations.parent_of' },
            },
        ],
        type: 'object',
        additionalProperties: false,
        properties: {
            item_id: { type: 'string' },
            name: { type: 'string', _flm: 'standalone' },
            description: { type: 'string', _flm: 'full' },
            relations: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    parents: relation_list(),
                    parent_of: relation_list({ _auto_populated: true }),
                },
            },
        },
    },
});

// `a` is a child of `b`, and `c` a child of `a`.  a's relation has a detail
// (with a reference, a citation and a label), written at line 7, column 13 of
// a's file; b holds its copy, and comes after a in the zoo.  c's relation has
// a detail too, which a holds, and c comes after a: the copy is met before
// the field it copies.
const A_DETAIL = 'Below \\ref{item:c}, after \\cite{custom:xyz}.\n\n'
      + '\\begin{equation}\\label{eq:a-detail} x = 1 \\end{equation}';
const item_a = (detail = A_DETAIL) => ({
    item_id: 'a', name: 'A', description: 'Item A.',
    relations: { parents: [{ item_id: 'b', detail }] },
    _zoodb: {
        source_file_path: 'items/a.yml',
        flm_field_positions: { 'relations.parents.0.detail': { line: 7, col: 13 } },
    },
});
const item_b = (description = 'Item B.') => ({
    item_id: 'b', name: 'B', description, _zoodb: { source_file_path: 'items/b.yml' },
});
const item_c = (detail = 'Under \\ref{item:b}, see \\cite{custom:abc} and \\eqref{eq:a-detail}.') => ({
    item_id: 'c', name: 'C', description: 'Item C.',
    relations: { parents: [{ item_id: 'a', detail }] },
    _zoodb: {
        source_file_path: 'items/c.yml',
        flm_field_positions: { 'relations.parents.0.detail': { line: 3, col: 5 } },
    },
});

async function make_zoo({ error_policy = 'abort', a_detail } = {})
{
    const engine = await ZooFlmEngine.create();
    const processor = new ZooFlmProcessor({ engine, error_policy });
    const zoodb = new ZooDb({ processors: [new RelationsPopulator(), processor], schema_validator });
    await zoodb.load_data({
        schemas: schemas(),
        objects: { item: { a: item_a(a_detail), b: item_b(), c: item_c() } },
    });
    return { engine, processor, zoodb };
}

// What a page of references or a glossary reads: per object, the keys it
// cites (with the origin of each field), the labels it refers to, the labels
// and terms it defines, and its diagnostics.
function scan_snapshot(processor, zoodb)
{
    const snapshot = {};
    for (const entry of processor.scan_results.objects.values()) {
        snapshot[`${entry.object_type}:${entry.object_id}`] = {
            cited: entry.cited.map( (c) => `${c.key} @ ${c.origin}` ),
            refs: entry.refs.map( (r) => `${r.label} @ ${r.fragment.origin.label}` ),
            labels: entry.labels.map( (l) => l.label ),
            terms: entry.terms.map( (t) => t.labels[0] ),
            diagnostics: zoodb.objects[entry.object_type][entry.object_id]._zoodb.flm_diagnostics.map(
                (d) => format_diagnostic(d) ),
        };
    }
    return snapshot;
}

const first_load_snapshot = {
    'item:a': {
        cited: [
            'custom:xyz @ items/a.yml#relations.parents.0.detail',
            'custom:abc @ items/c.yml#relations.parents.0.detail',
        ],
        refs: [
            'item:c @ items/a.yml#relations.parents.0.detail',
            'item:b @ items/c.yml#relations.parents.0.detail',
            'eq:a-detail @ items/c.yml#relations.parents.0.detail',
        ],
        labels: ['eq:a-detail'],
        terms: [],
        diagnostics: [],
    },
    'item:b': {
        cited: ['custom:xyz @ items/a.yml#relations.parents.0.detail'],
        refs: ['item:c @ items/a.yml#relations.parents.0.detail'],
        labels: [],
        terms: [],
        diagnostics: [],
    },
    'item:c': {
        cited: ['custom:abc @ items/c.yml#relations.parents.0.detail'],
        refs: [
            'item:b @ items/c.yml#relations.parents.0.detail',
            'eq:a-detail @ items/c.yml#relations.parents.0.detail',
        ],
        labels: [],
        terms: [],
        diagnostics: [],
    },
};

// The zoo's fragments: each once, none of them a copy.
function check_zoo_fragments(processor, zoodb)
{
    const fragments = processor.zoo_fragments();
    assert.strictEqual(new Set(fragments).size, fragments.length);
    const own = Object.values(zoodb.objects.item).map( (obj) => obj._zoodb.flm_fields.filter(
        (f) => copied_field_source(obj, f) == null ).length );
    assert.strictEqual(fragments.length, own.reduce( (x, y) => x + y, 0 ));
    return fragments;
}

async function dump_json(zoodb)
{
    return JSON.stringify(await zoodb.data_dump());
}


describe('ZooFlmProcessor, the FLM fields of back-references', function () {

    this.timeout(30000);

    describe('a zoo with relations whose details are FLM', function () {

        let engine;
        let processor;
        let zoodb;
        let first_dump;

        before(async function () {
            ({ engine, processor, zoodb } = await make_zoo());
            first_dump = await dump_json(zoodb);
        });

        after(function () {
            engine?.free();
        });

        it('records where the values of each back-reference come from', function () {
            const { a, b, c } = zoodb.objects.item;
            assert.deepStrictEqual(b.relations.parent_of.map( (r) => r.item_id ), ['a']);
            assert.deepStrictEqual({ ...b._zoodb.copied_fields }, {
                'relations.parent_of.0': { object_type: 'item', object_id: 'a', field: 'relations.parents.0' },
            });
            assert.deepStrictEqual({ ...a._zoodb.copied_fields }, {
                'relations.parent_of.0': { object_type: 'item', object_id: 'c', field: 'relations.parents.0' },
            });
            assert.deepStrictEqual(copied_field_source(b, 'relations.parent_of.0.detail'),
                                   { object_type: 'item', object_id: 'a', field: 'relations.parents.0.detail' });
            assert.strictEqual(copied_field_source(b, 'description'), null);
            assert.strictEqual(c._zoodb.copied_fields, undefined);
        });

        it('gives the copy the fragment of the field it copies, compiled once with its file position', function () {
            const { a, b, c } = zoodb.objects.item;
            const forward = a.relations.parents[0].detail;
            assert.ok(is_fragment(forward) && !forward.released);
            assert.strictEqual(b.relations.parent_of[0].detail, forward);
            assert.deepStrictEqual({ ...forward.origin }, {
                object_type: 'item', object_id: 'a', field: 'relations.parents.0.detail',
                source_path: 'items/a.yml', start_line: 7, start_col: 13,
                label: 'items/a.yml#relations.parents.0.detail',
            });
            // met before the field it copies (c comes after a): the field is
            // compiled then, in its own object, with its own origin
            assert.strictEqual(a.relations.parent_of[0].detail, c.relations.parents[0].detail);
            assert.strictEqual(a.relations.parent_of[0].detail.origin.label, 'items/c.yml#relations.parents.0.detail');
            assert.strictEqual(a.relations.parent_of[0].detail.origin.start_line, 3);

            assert.ok(b._zoodb.flm_fields.includes('relations.parent_of.0.detail'));
            const b_fields = [...processor.flm_simple_content_compiler.object_field_fragments(b)];
            assert.deepStrictEqual(b_fields.map( ({ fieldname, copy }) => [fieldname, copy] ), [
                ['name', false], ['description', false], ['relations.parent_of.0.detail', true],
            ]);
            assert.ok(![...processor.flm_simple_content_compiler.object_fragments(b)].includes(forward));
            check_zoo_fragments(processor, zoodb);
        });

        it('counts the references and citations of a copy for its holder too, the labels for the relation\'s object', function () {
            assert.deepStrictEqual(scan_snapshot(processor, zoodb), first_load_snapshot);
            assert.deepStrictEqual(processor.scan_results.duplicate_labels, []);
            assert.strictEqual(processor.scan_results.labels.get('eq:a-detail').fragment,
                               zoodb.objects.item.a.relations.parents[0].detail);
        });

        it('gives after a reload with no change the scan results, the fragments and the dump of the first load', async function () {
            // engine._core: the engine's internal accessor to its core, not part of the
            // package's API (here and below, for the core's fragment counter)
            const count = engine._core.fragment_count();
            const fragments = processor.zoo_fragments();
            await zoodb.update_objects({});
            assert.deepStrictEqual(scan_snapshot(processor, zoodb), first_load_snapshot);
            assert.deepStrictEqual(processor.zoo_fragments(), fragments);
            assert.strictEqual(engine._core.fragment_count(), count);
            const { a, b } = zoodb.objects.item;
            assert.strictEqual(b.relations.parent_of[0].detail, a.relations.parents[0].detail);
            assert.strictEqual(await dump_json(zoodb), first_dump);
        });

        it('likewise after a reload of the holder, and follows a reload of the related object', async function () {
            const count = engine._core.fragment_count();
            await zoodb.update_objects({ item: { b: item_b() } });
            assert.deepStrictEqual(scan_snapshot(processor, zoodb), first_load_snapshot);
            assert.strictEqual(engine._core.fragment_count(), count);
            assert.strictEqual(await dump_json(zoodb), first_dump);

            // c replaced: a's copy is c's new fragment, compiled once
            const previous = zoodb.objects.item.c.relations.parents[0].detail;
            await zoodb.update_objects({ item: { c: item_c('Now \\ref{item:a} only.') } });
            const { a, c } = zoodb.objects.item;
            assert.ok(previous.released);
            assert.strictEqual(a.relations.parent_of[0].detail, c.relations.parents[0].detail);
            assert.strictEqual(c.relations.parents[0].detail.source, 'Now \\ref{item:a} only.');
            const snapshot = scan_snapshot(processor, zoodb);
            assert.deepStrictEqual(snapshot['item:a'].refs, [
                'item:c @ items/a.yml#relations.parents.0.detail',
                'item:a @ items/c.yml#relations.parents.0.detail',
            ]);
            assert.deepStrictEqual(snapshot['item:a'].cited, ['custom:xyz @ items/a.yml#relations.parents.0.detail']);
            assert.deepStrictEqual(snapshot['item:c'].refs, ['item:a @ items/c.yml#relations.parents.0.detail']);
            assert.strictEqual(engine._core.fragment_count(), count);
            check_zoo_fragments(processor, zoodb);
        });

        it('leaves the records and the back-references out of data dumps', async function () {
            const dump = await zoodb.data_dump();
            const b = dump.db.objects.item.b;
            assert.strictEqual(b.relations?.parent_of, undefined);
            assert.strictEqual(b._zoodb.copied_fields, undefined);
            // the zoo keeps them
            assert.ok(zoodb.objects.item.b._zoodb.copied_fields != null);
        });
    });

    describe('a diagnostic in a copied field', function () {

        it('is the relation\'s object\'s and names the place where the text is written, at the first load and after a reload', async function () {
            const { engine, processor, zoodb } = await make_zoo({ error_policy: 'continue', a_detail: 'See \\broken here.' });
            try {
                const where = (id) => zoodb.objects.item[id]._zoodb.flm_diagnostics.map(
                    (d) => format_diagnostic(d).split(': error')[0] );
                // a render of the holder's copy reports it at the same place
                const render_copy = () => engine.render_fragment(
                    zoodb.objects.item.b.relations.parent_of[0].detail, { error_policy: 'continue' }
                ).diagnostics.filter( (d) => d.severity === 'error' ).map(
                    (d) => format_diagnostic(d).split(': error')[0] );
                const check = () => {
                    assert.deepStrictEqual(where('a'), ['items/a.yml#relations.parents.0.detail:7:17']);
                    assert.deepStrictEqual(where('b'), []);
                    assert.deepStrictEqual(render_copy(), ['items/a.yml#relations.parents.0.detail:7:17']);
                };
                check();
                const snapshot = scan_snapshot(processor, zoodb);
                await zoodb.update_objects({});
                check();
                assert.deepStrictEqual(scan_snapshot(processor, zoodb), snapshot);
            } finally {
                engine.free();
            }
        });
    });
});
