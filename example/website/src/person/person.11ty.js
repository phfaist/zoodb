const data = async () => {

    const zoollm = await import('@phfaist/zoodb/zoollm');

    return {
        pagination: {
            data: 'peopledb.objects.person',
            size: 1,
            resolve: 'values',
            addAllPagesToCollections: true,
            alias: 'person',
        },
        tags: 'person',
        eleventyComputed: {
            permalink: (data) =>
                data.peopledb.zoo_object_permalink('person', data.person.person_id) + '.html',
            title: (data) => zoollm.render_text_standalone(data.person.name),
        },
    };
};

const render = async (data) => {

    const { person, peopledb } = data;

    const zoo_llm_environment = peopledb.zoo_llm_environment;

    const zoollm = await import('@phfaist/zoodb/zoollm');
    const { sqzhtml } = await import('@phfaist/zoodb/util/sqzhtml');

    const render_doc_fn = (render_context) => {

        const { ne, rdr, rdrblock, ref } = zoollm.make_render_shorthands({ render_context });

        let s = '';

        s += sqzhtml`
<article>
<h1>${ rdr(person.name) }</h1>

<div style="font-style: italic">${ rdrblock(person.biography) }</div>`;

        const relations = person.relations ?? {};

        if (relations.spouse != null) {
            s += sqzhtml`
<div>Spouse: ${ ref('person', relations.spouse) }</div>`;
        }

        if (relations.parents != null && relations.parents.length) {
            s += sqzhtml`
<div>
  <p>Parents:</p>
  <ul>`;
            for (const parent_relation of relations.parents) {
                s += sqzhtml`
    <li>${ ref('person', parent_relation.person_id) }</li>
  `;
            }
            s += sqzhtml`
  </ul>
</div>`;
        }

        if (relations.children != null && relations.children.length) {
            s += sqzhtml`
<div>
  <p>Children:</p>
  <ul>`;
            for (const child_relation of relations.children) {
                s += sqzhtml`
    <li>${ ref('person', child_relation.person_id) }</li>
  `;
            }
            s += sqzhtml`
  </ul>
</div>`;
        }

        if (relations.friends != null && relations.friends.length) {
            s += sqzhtml`
<div>
  <p>Friends:</p>
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
</div>`;
        }

        s += sqzhtml`
<RENDER_ENDNOTES/>
</article>`;
        
        return s;
    }

    return zoollm.make_and_render_document({
        zoo_llm_environment,
        render_doc_fn,
        //doc_metadata: {},
        render_endnotes: {
            annotations: ['sectioncontent'],
        }
    });
};


module.exports = { data, render, };
