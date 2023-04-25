const data = async () => {

    const zooflm = await import('@phfaist/zoodb/zooflm');

    return {
        pagination: {
            data: 'peopledb.objects.person',
            size: 1,
            resolve: 'values',
            addAllPagesToCollections: true,
            alias: 'person',
        },
        date: '2000-01-01', // should be ignored
        tags: ['allPages', 'person'],
        eleventyComputed: {
            permalink: (data) =>
                data.peopledb.zoo_object_permalink('person', data.person.person_id) + '.html',
            title: (data) => zooflm.render_text_standalone(data.person.name),
            date: (data) => {
                // injection hack to get correct page date property!
                // https://github.com/11ty/eleventy/issues/2199#issuecomment-1027362151
                data.page.date = new Date(data.person._zoodb.git_last_modified_date);
                return data.page.date;
            }
        },
    };
};

const render = async (data) => {

    const { person, peopledb } = data;

    const zoo_flm_environment = peopledb.zoo_flm_environment;

    const zooflm = await import('@phfaist/zoodb/zooflm');
    const { sqzhtml } = await import('@phfaist/zoodb/util/sqzhtml');

    const render_doc_fn = (render_context) => {

        const { ne, rdr, rdrblock, ref } = zooflm.make_render_shorthands({ render_context });

        let s = '';

        s += sqzhtml`
<article>
<h1>${ rdr(person.name) }</h1>

<h2>Biography</h2>
<div style="margin: 1.5rem 0px">${ rdrblock(person.biography) }</div>`;

        const relations = person.relations ?? {};

        if (relations.spouse != null) {
            s += sqzhtml`
<h2>Spouse</h2>
<p>${ ref('person', relations.spouse) }</p>`;
        }

        if (relations.parents != null && relations.parents.length) {
            s += sqzhtml`
<h2>Parents</h2>
<ul>`;
            for (const parent_relation of relations.parents) {
                s += sqzhtml`
    <li>${ ref('person', parent_relation.person_id) }</li>
  `;
            }
            s += sqzhtml`
</ul>
`;
        }

        if (relations.children != null && relations.children.length) {
            s += sqzhtml`
<h2>Children</h2>
<ul>`;
            for (const child_relation of relations.children) {
                s += sqzhtml`
    <li><p>${ ref('person', child_relation.person_id) }</p></li>
  `;
            }
            s += sqzhtml`
</ul>
`;
        }

        if (relations.friends != null && relations.friends.length) {
            s += sqzhtml`
<h2>Friends</h2>
<ul>`;
            for (const friend_relation of relations.friends) {

                let friend_detail_text = '';
                if (friend_relation.friend_detail) {
                    friend_detail_text = `  (${rdr(friend_relation.friend_detail)})`;
                }

                s += sqzhtml`
    <li>${ ref('person', friend_relation.person_id) }${ friend_detail_text }</li>`;
            }
            s += sqzhtml`
</ul>
`;
        }

        s += sqzhtml`
<RENDER_ENDNOTES/>

<p class="last-edit">Last modified: ${ data.page.date.toString() }</p>
</article>`;
        
        return s;
    }

    return zooflm.make_and_render_document({
        zoo_flm_environment,
        render_doc_fn,
        //doc_metadata: {},
        render_endnotes: {
            annotations: ['sectioncontent'],
        }
    });
};


module.exports = { data, render, };
