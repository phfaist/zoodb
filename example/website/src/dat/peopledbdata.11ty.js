//
// Dump all the PeopleDb data, including information about cross-references,
// citations, and graphics resources, in one big JSON file.
//

const data = {
    layout: null,
    permalink: 'dat/peopledbdata.json',
};

const render = async (data) => {

    const zoodb = data.peopledb;

    const db = zoodb.raw_data_db_dump();

    const refs_data = {
        refs:
            zoodb.zoo_flm_environment.ref_resolver.dump_database(),
        citations:
            zoodb.zoo_flm_environment.citations_provider.dump_database(),
        graphics_collection:
            zoodb.zoo_flm_environment.graphics_collection.dump_database(),
    };

    const dump = {
        refs_data,
        db,
    };

    return JSON.stringify(dump);

};

module.exports = { data, render, };
