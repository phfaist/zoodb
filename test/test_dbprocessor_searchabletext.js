import * as assert from 'assert';

import { SearchableTextProcessor, SearchableTextFieldset } from '../src/dbprocessor/searchabletext.js';

import { ZooDb } from '../src/index.js';

import { get_simple_test_data, schema_validator } from './_helperstest.js';


describe('zoodb.dbprocessor.searchabletext', function () {

    describe('SearchableTextFieldset', function () {

        it('initializes and identifies text fields from schema', function () {

            let zoodb = new ZooDb({ schema_validator: false });
            zoodb.load_data(get_simple_test_data());

            let fieldset = new SearchableTextFieldset();
            fieldset.initialize(zoodb);

            assert.ok(fieldset.fields);
            assert.ok(fieldset.fields.length > 0);
            // id and title should be first
            assert.strictEqual(fieldset.fields[0], 'id');
            assert.strictEqual(fieldset.fields[1], 'title');
        });

        it('gets searchable text doc for an object', async function () {

            let zoodb = new ZooDb({ schema_validator: false });
            await zoodb.load_data(get_simple_test_data());

            let fieldset = new SearchableTextFieldset();
            fieldset.initialize(zoodb);

            const schema = zoodb.schema('utensil');
            const doc = fieldset.get_object_searchable_text_doc({
                object_type: 'utensil',
                object_id: 'fork',
                object: zoodb.objects.utensil.fork,
                schema,
                titlefield: 'name',
            });

            assert.strictEqual(doc.id, 'fork');
            assert.strictEqual(doc.title, 'Fork');
            assert.ok(doc.description);
        });

    });

    describe('SearchableTextProcessor', function () {

        it('creates searchable text index for configured object types', async function () {

            let fieldset = new SearchableTextFieldset();
            let zoodb = new ZooDb({
                processors: [
                    new SearchableTextProcessor(fieldset),
                ],
                schema_validator: false,
            });

            await zoodb.load_data(get_simple_test_data());

            // Searchable text doc should be stored in _zoodb
            assert.ok(zoodb.objects.utensil.fork._zoodb.searchable_text_doc);
            assert.strictEqual(
                zoodb.objects.utensil.fork._zoodb.searchable_text_doc.id,
                'fork'
            );
        });

        it('plain string fields are included in searchable text', async function () {

            let fieldset = new SearchableTextFieldset();
            let zoodb = new ZooDb({
                processors: [
                    new SearchableTextProcessor(fieldset),
                ],
                schema_validator: false,
            });

            await zoodb.load_data(get_simple_test_data());

            const doc = zoodb.objects.utensil.fork._zoodb.searchable_text_doc;
            assert.ok(doc.description);
        });

        it('process_data_dump() strips searchable text data from dumps', async function () {

            let fieldset = new SearchableTextFieldset();
            let zoodb = new ZooDb({
                processors: [
                    new SearchableTextProcessor(fieldset),
                ],
                schema_validator: false,
            });

            await zoodb.load_data(get_simple_test_data());

            // Verify it's there before dump
            assert.ok(zoodb.objects.utensil.fork._zoodb.searchable_text_doc);

            let dump = await zoodb.data_dump();

            // After dump, searchable_text_doc should be removed (default behavior)
            assert.strictEqual(
                dump.db.objects.utensil.fork._zoodb.searchable_text_doc,
                undefined
            );
        });

        it('process_data_dump() keeps searchable text when option set', async function () {

            let fieldset = new SearchableTextFieldset();
            let zoodb = new ZooDb({
                processors: [
                    new SearchableTextProcessor(fieldset),
                ],
                schema_validator: false,
            });

            await zoodb.load_data(get_simple_test_data());

            let dump = await zoodb.data_dump({
                searchabletext_remove_doc_info: false,
            });

            assert.ok(dump.db.objects.utensil.fork._zoodb.searchable_text_doc);
        });

        it('missing object types in zoodb.objects are skipped gracefully', async function () {

            // Use both valid types but only load utensil objects
            let fieldset = new SearchableTextFieldset({
                object_types: ['utensil', 'dish'],
            });
            let zoodb = new ZooDb({
                processors: [
                    new SearchableTextProcessor(fieldset),
                ],
                schema_validator: false,
            });

            // Load schemas for both but objects for only one
            await zoodb.load_data({
                schemas: get_simple_test_data().schemas,
                objects: { utensil: get_simple_test_data().objects.utensil },
            });

            // Should not throw — dish type has no objects but is handled gracefully
            assert.ok(zoodb.objects.utensil.fork._zoodb.searchable_text_doc);
        });

    });

});
