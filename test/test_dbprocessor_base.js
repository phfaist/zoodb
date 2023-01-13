import * as assert from 'assert';

import { ZooDbProcessorBase } from '../src/dbprocessor/base.js';

describe('zoodb.dbprocessor.base', function () {

    describe('ZooDbProcessorBase', function () {

        it('initializes .zoodb to null upon construction', async function () {

            let dbprocbase = new ZooDbProcessorBase();

            assert.strictEqual(dbprocbase.zoodb, null);
        });

        describe('#install_zoo()', function () {
            it('sets .zoodb to the provided argument', async function () {

                let dummyZooDbInstance = function () { };

                let dbprocbase = new ZooDbProcessorBase();
                dbprocbase.install_zoo( dummyZooDbInstance );

                assert.strictEqual(dbprocbase.zoodb, dummyZooDbInstance);
            });
        });
        describe('#process_zoo_update_objects()', function () {
            it ('falls back to process_zoo() in the default implementation', async function () {

                let dummyZooDbInstance = function () { };

                let dbprocbase = new ZooDbProcessorBase();
                dbprocbase.install_zoo( dummyZooDbInstance );
                
                let _flag = false;
                dbprocbase.process_zoo = function () { _flag = true; };

                let db_objects = {};

                dbprocbase.process_zoo_update_objects(db_objects);

                assert.strictEqual(_flag, true);
            });
        });
    });
});
