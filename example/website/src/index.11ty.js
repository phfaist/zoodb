
const data = {
    title: "People DB home",
    tags: [ 'allPages' ],
    eleventyComputed: {
        // ---
        // injection hack to get correct page date property!
        // https://github.com/11ty/eleventy/issues/2199#issuecomment-1027362151
        date: (data) => {
            data.page.date = new Date(
                data.peopledb.zoo_gitlastmodified_processor.get_latest_modification_date()
            );
            return data.page.date;
        }
        // ---
    }
};

const render = function(data) {
    let content = `
<p>List of people:</p>`;

    content += `
<ul>`;

    const persons = [... data.collections.person ];
    persons.sort( (a, b) => (a.id < b.id ? -1 : (a.id > b.id ? 1 : 0)) );

    for (const person_page of persons) {
        content += `
<li><a href="${ this.hrefUrl(person_page.url) }">${ person_page.data.title }</a></li>`;
    }

    content += `
</ul>
`;
    return content;
};


module.exports = { data, render, };
