
module.exports = async () => {

    const { load_people_db } = await import('../../peopledbjs/peopledb.js');

    const peopledb = await load_people_db();

    //console.log('loaded peopledb.', { peopledb, });

    return peopledb;
};
