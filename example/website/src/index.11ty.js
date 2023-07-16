
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

    const persons_pages = [... data.collections.person ];
    persons_pages.sort( (a,b) => a.data.person_name.localeCompare(b.data.person_name) )

    for (const person_page of persons_pages) {
        content += `
<li><a href="${ this.hrefUrl(person_page.url) }">${ person_page.data.title }</a></li>`;
    }

    content += `
</ul>
`;
    return content;
};


module.exports = { data, render, };
