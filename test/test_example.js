import assert from 'assert';

import { load_people_db } from '../example/peopledbjs/peopledb.js';



describe('Our PeopleDb example', function () {

    // change default timeout for these tests
    this.timeout(10000);


    it('loads without errors', async function () {

        const people_db = await load_people_db();

    });

    it('provides back-references on Alice to her children', async function () {

        const people_db = await load_people_db();

        assert.strictEqual(
            people_db.objects.person.alice.relations.children.length,
            2
        );

        let children_ids = people_db.objects.person.alice.relations.children.map(
            (children_relation) => children_relation.person_id
        );
        children_ids.sort();

        assert.deepStrictEqual(children_ids, ['charlie', 'danielle']);
            

    });

});
