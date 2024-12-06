import * as assert from 'assert';

import fs from 'fs';

import { ComputedDataProcessor } from '../src/dbprocessor/computeddata.js';

import { ZooDb } from '../src/index.js';


import { get_simple_test_data, schema_validator } from './_helperstest.js';


const MyZooDbComputedData = {
    dish: {
        utensils_summary: {
            fn: (dish) => {
                return dish.relations.eaten_with.map( (robj) => robj.ust_id).join("+");
            },
        },
        utensils_summary_bulk: {
            // the fn_bulk function can be set to bulk-compute the computed data for a
            // collection of objects.  This function is allowed to be async.
            fn_bulk: async (dish_db_objects) => {
                return Object.fromEntries(
                    Object.entries(dish_db_objects).map( (dish_id, dish) => {
                        return [
                            dish_id,
                            dish.relations.eaten_with.map( (robj) => robj.ust_id).join("&&")
                        ];
                    } )
                )
            },
        },
    },
};


describe('zoodb.dbprocessor.computeddata', function () {

    describe('ComputedDataProcessor', function () {

        it('computes data in our test data', async function () {

            let zoodb = new ZooDb({
                processors: [
                    new ComputedDataProcessor({
                        computed_data: MyZooDbComputedData,
                    }),
                ],
                schema_validator,
            });

            await zoodb.load_data(get_simple_test_data());

            assert.strictEqual(zoodb.objects.dish.pasta.description.flm_text,
                               get_simple_test_data().objects.dish.pasta.description);

        });

    });

});
