import * as assert from 'assert';

import fs from 'fs';
//import yaml from 'yaml';

import { ZooRelation, RelationsPopulator } from '../src/dbprocessor/relations.js';

import { ZooDb } from '../src/index.js';


import { get_simple_test_data, schema_validator } from './_helperstest.js';



describe('zoodb.dbprocessor.relations', function () {

    describe('RelationsPopulator', function () {

        it('populates relation objects on our simple test data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new RelationsPopulator(),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta.relations.eaten_with[0].utensil,
                               zoodb.objects.utensil.fork);
            assert.strictEqual(zoodb.objects.dish.soup.relations.eaten_with[0].utensil,
                               zoodb.objects.utensil.spoon);

        });

        it('removes auto-populated relation fields when dumping data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new RelationsPopulator(),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({ remove_zoodb_info: true });

            assert.deepStrictEqual(dump, { db: get_simple_test_data() });

        });

        it('REGRESSION: process_zoo() correctly skips object types with no relations and keeps processing subsequent types', async function () {

            // Create 3 object types: first has relations, second has none, third has relations
            const schemas = {
                source: {
                    _zoo_primarykey: "source_id",
                    _zoo_relations: [
                        {
                            object_field: "target_ref",
                            to_object_type: "target",
                            relation_primary_key_field: "target_id",
                            relation_add_object_field: "target",
                        },
                    ],
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        source_id: { type: "string" },
                        target_ref: {
                            type: "object",
                            additionalProperties: false,
                            properties: {
                                target_id: { type: "string" },
                            },
                        },
                    },
                },
                middle: {
                    // NO relations
                    _zoo_primarykey: "middle_id",
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        middle_id: { type: "string" },
                        value: { type: "string" },
                    },
                },
                target: {
                    _zoo_primarykey: "target_id",
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        target_id: { type: "string" },
                        label: { type: "string" },
                    },
                },
            };

            const objects = {
                source: {
                    s1: { source_id: "s1", target_ref: { target_id: "t1" } },
                },
                middle: {
                    m1: { middle_id: "m1", value: "hello" },
                },
                target: {
                    t1: { target_id: "t1", label: "Target One" },
                },
            };

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator: false,
            });

            await zoodb.load_data({ schemas, objects });

            // Verify that the relation on source type was populated even though
            // middle type has no relations
            assert.strictEqual(
                zoodb.objects.source.s1.target_ref.target,
                zoodb.objects.target.t1
            );
        });

        it('self-referential relations (object references itself)', async function () {

            const schemas = {
                node: {
                    _zoo_primarykey: "node_id",
                    _zoo_relations: [
                        {
                            object_field: "parent_ref",
                            to_object_type: "node",
                            relation_primary_key_field: "node_id",
                            relation_add_object_field: "parent",
                            allow_null: true,
                        },
                    ],
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        node_id: { type: "string" },
                        parent_ref: {
                            type: "object",
                            additionalProperties: false,
                            properties: {
                                node_id: { type: "string" },
                            },
                        },
                    },
                },
            };

            const objects = {
                node: {
                    root: { node_id: "root", parent_ref: { node_id: "root" } },
                },
            };

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator: false,
            });

            await zoodb.load_data({ schemas, objects });

            // root references itself
            assert.strictEqual(
                zoodb.objects.node.root.parent_ref.parent,
                zoodb.objects.node.root
            );
        });

        it('backreference population: verify _auto_populated fields are set', async function () {

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            // fork is referenced by pasta, so fork's can_eat_dishes should be populated
            assert.ok(zoodb.objects.utensil.fork.can_eat_dishes);
            assert.ok(zoodb.objects.utensil.fork.can_eat_dishes.length > 0);

            // Verify the backreference points to the right dish
            const backref = zoodb.objects.utensil.fork.can_eat_dishes.find(
                (br) => br.dish_id === 'pasta'
            );
            assert.ok(backref, 'Expected backreference from fork to pasta');
            assert.strictEqual(backref.dish, zoodb.objects.dish.pasta);
        });

        it('data dump: auto-populated fields are stripped in dumps', async function () {

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            // Verify backreferences are populated
            assert.ok(zoodb.objects.utensil.fork.can_eat_dishes);

            let dump = await zoodb.data_dump({ remove_zoodb_info: true });

            // After dump, auto-populated fields should be removed
            assert.deepStrictEqual(dump, { db: get_simple_test_data() });
        });

        it('relations with missing target object throws', async function () {

            const data = get_simple_test_data();
            // Reference a non-existent utensil
            data.objects.dish.pasta.relations.eaten_with[0].utl_id = 'nonexistent';

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator: false,
            });

            await assert.rejects(async () => {
                await zoodb.load_data(data);
            }, /nonexistent ID/i);
        });

    });

    describe('ZooRelation', function () {

        it('constructor sets basic properties', async function () {

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            const relation_spec = get_simple_test_data().schemas.dish._zoo_relations[0];
            const zr = new ZooRelation({
                object_type: 'dish',
                relation_spec,
                zoodb,
            });

            assert.strictEqual(zr.object_type, 'dish');
            assert.strictEqual(zr.to_object_type, 'utensil');
            assert.strictEqual(zr.object_field, 'relations.eaten_with');
            assert.strictEqual(zr.relation_primary_key_field, 'utl_id');
            assert.strictEqual(zr.use_backreference, true);
        });

        it('toString returns descriptive string', async function () {

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            const relation_spec = get_simple_test_data().schemas.dish._zoo_relations[0];
            const zr = new ZooRelation({
                object_type: 'dish',
                relation_spec,
                zoodb,
            });

            const str = zr.toString();
            assert.ok(str.includes('dish'));
            assert.ok(str.includes('utensil'));
        });

        it('get_computed_fields returns expected fields', async function () {

            let zoodb = new ZooDb({
                processors: [ new RelationsPopulator() ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            const relation_spec = get_simple_test_data().schemas.dish._zoo_relations[0];
            const zr = new ZooRelation({
                object_type: 'dish',
                relation_spec,
                zoodb,
            });

            const cf = zr.get_computed_fields();
            // Should have computed fields for both object types (dish and utensil)
            assert.ok(cf.dish);
            assert.ok(cf.utensil);
        });

    });

    describe('RelationsPopulator#process_data_dump', function () {

    });

});
