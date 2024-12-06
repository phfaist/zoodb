import * as assert from 'assert';

import fs from 'fs';

import { ComputedDataProcessor } from '../src/dbprocessor/computeddata.js';

import { ZooDb } from '../src/index.js';


import { get_simple_test_data, schema_validator } from './_helperstest.js';


const MyZooDbComputedData = {
    dish: {
        utensils_summary: {
            fn: (dish) => {
                return dish.relations.eaten_with.map( (robj) => robj.utl_id).join("+");
            },
        },
    },
};

const MyZooDbComputedData_Bulk = {
    dish: {
        utensils_summary: {
            // the fn_bulk function can be set to bulk-compute the computed data for a
            // collection of objects.  This function is allowed to be async.
            fn_bulk: async (dish_db_objects) => {
                return Object.fromEntries(
                    Object.entries(dish_db_objects).map( ([dish_id, dish]) => {
                        return [
                            dish_id,
                            dish.relations.eaten_with.map( (robj) => robj.utl_id).join("+")
                        ];
                    } )
                )
            },
        },
    },
};


describe('zoodb.dbprocessor.computeddata', function () {

    describe('ComputedDataProcessor', function () {

        it('computes data and adds special accessor method', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData,
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(
                zoodb.dish_utensils_summary(zoodb.objects.dish.pasta),
                get_simple_test_data().objects.dish.pasta.relations.eaten_with
                    .map( (x) => x.utl_id ).join("+")
            );

        });

        it('computes data in bulk and adds special accessor method', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData_Bulk,
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(
                zoodb.dish_utensils_summary(zoodb.objects.dish.pasta),
                get_simple_test_data().objects.dish.pasta.relations.eaten_with
                    .map( (x) => x.utl_id ).join("+")
            );

        });

        it('uses a custom _zoodb property name', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData,
                        computed_data_fieldset_name: 'fdsjafhoaidsnjk',
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            const testValue = get_simple_test_data().objects.dish.pasta.relations.eaten_with
                .map( (x) => x.utl_id).join("+");

            assert.strictEqual(
                zoodb.objects.dish.pasta._zoodb.fdsjafhoaidsnjk.utensils_summary,
                testValue
            );

            // accessor function uses correct property name, too
            assert.strictEqual(
                zoodb.dish_utensils_summary(zoodb.objects.dish.pasta),
                testValue
            );
        });

        it('computes data lazily on call to special accessor method', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData,
                        lazy: true,
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(
                zoodb.objects.dish.pasta._zoodb.computed_data.utensils_summary,
                undefined
            );

            const testValue = get_simple_test_data().objects.dish.pasta.relations.eaten_with
                .map( (x) => x.utl_id).join("+") ;

            assert.strictEqual(
                zoodb.dish_utensils_summary(zoodb.objects.dish.pasta),
                testValue
            );

            // make sure that the value is actually stored in the _zoodb field
            assert.strictEqual(
                zoodb.objects.dish.pasta._zoodb.computed_data.utensils_summary,
                testValue
            );

        });

        it('will not lazily compute bulk calculated properties', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData_Bulk,
                        lazy: true,
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            const testValue = get_simple_test_data().objects.dish.pasta.relations.eaten_with
                .map( (x) => x.utl_id).join("+") ;

            assert.strictEqual(
                zoodb.objects.dish.pasta._zoodb.computed_data.utensils_summary,
                testValue
            );

            assert.strictEqual(
                zoodb.dish_utensils_summary(zoodb.objects.dish.pasta),
                testValue
            );

        });

    });

});
