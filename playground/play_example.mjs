// A sample of ZooDb's API: loads the mini zoo of test/test_data/flm_zoo/ (two
// people, one topic, a figure with a small PNG) through the standard setup,
// then prints one rendered page and one text snippet.
//
// This repository uses Yarn Plug'n'Play, so run it with Yarn (from the
// repository's root):
//
//     yarn node playground/play_example.mjs
//
// Where the dependencies are installed in node_modules/ instead, plain
// `node playground/play_example.mjs` works. The imports name the
// package itself (`@phfaist/zoodb/...`), as a zoo's own code would.
//
// Nothing is written to disk and nothing is fetched: the citation cache stays
// in memory, the built-in citation sources (arXiv, DOI, ...) are off, and the
// one citation of the mini zoo (`custom:xyz`) comes from a small JavaScript
// citation source defined here.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ZooDbDataLoaderHandler } from '@phfaist/zoodb';
import {
    makeStandardZooDb, use_flm_engine, use_flm_processor, use_searchable_text_processor,
} from '@phfaist/zoodb/std';
import { makeStandardYamlDbDataLoader } from '@phfaist/zoodb/std/stdyamldbdataloader';
import { load_zoodb_flm_wasm_node } from '@phfaist/zoodb/zooflm/wasm-node';
import { CitationSourceBase } from '@phfaist/zoodb/citationmanager/source/base';


const test_data_dir = fileURLToPath(new URL('../test/test_data/', import.meta.url));
const zoo_dir = path.join(test_data_dir, 'flm_zoo');

// The CSL style that formats the citations (the citation compiler needs one)
const csl_style = fs.readFileSync(
    path.join(test_data_dir, 'american-physical-society-et-al--patched.csl'), { encoding: 'utf-8' }
);


//
// A citation source for the prefix `custom`: it serves every key a citation
// already formatted as FLM text (a real source would look the key up).
//
class CitationSourceCustom extends CitationSourceBase
{
    constructor(options)
    {
        super({ source_name: 'Custom source', chunk_size: Infinity, chunk_retrieve_delay_ms: 0 },
              options ?? {}, { cite_prefix: 'custom' });
    }

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {
            await this.citation_manager.store_citation(
                this.cite_prefix, key,
                { _ready_formatted: { flm: `A.~Author, \\emph{The reference ${key}} (2026).` } },
                this.cache_store_options,
            );
        }
    }
}


//
// The zoo: the standard setup with the FLM engine, the FLM processor and the
// searchable text.
//
const zoodb = await makeStandardZooDb({
    fs,
    fs_data_dir: zoo_dir,

    use_flm_engine,
    use_flm_processor,
    use_searchable_text_processor,

    flm_options: {
        // Node reads the wasm module from its file; a browser fetches it
        load_wasm: load_zoodb_flm_wasm_node,
        citations: {
            csl_style,
            sources: { arxiv: false, doi: false, manual: false, custom: new CitationSourceCustom() },
            cache_dir_create: false,
            skip_save_cache: true,
        },
    },

    searchable_text_options: { object_types: ['person'] },

    zoo_permalinks: {
        object: (object_type, object_id) => `/${object_type}/${object_id}`,
        graphics_resource: (resource_data) => `/pic/${resource_data.src_url}`,
    },

    schemas: {
        schema_root: zoo_dir, schema_rel_path: 'schemas/', schema_add_extension: '.json',
    },
});

const loader = await makeStandardYamlDbDataLoader(zoodb, {
    objects: {
        person: { schema_name: 'person', data_src_path: 'people/' },
        topic: { schema_name: 'topic', data_src_path: 'topics/' },
    },
});
await zoodb.install_zoo_loader_handler(new ZooDbDataLoaderHandler(loader));
await zoodb.load();


//
// One page: a person's page as a site template writes it, through the
// composer protocol of the engine.
//
const engine = zoodb.zoo_flm_engine;
const bob = zoodb.objects.person.bob;

const page = engine.render_document({
    compose: ({ ne, rdr, rdrblock, ref, endnotes }) =>
        `<h1>${rdr(bob.name)}</h1>\n`
        + `${rdrblock(bob.biography)}\n`
        // an optional field: the line only for a person with topics (Alice
        // has one, Bob none)
        + (ne(bob.topics)
           ? `<p>Topics: ${bob.topics.map( (t) => `${ref('topic', t.topic_id)} (${rdr(t.detail)})` ).join(', ')}</p>\n`
           : '')
        + endnotes(),
});

console.log(`--- The page of ${path.join('people', 'bob.yml')} (HTML) ---\n`);
console.log(page.html);
for (const d of page.diagnostics) {
    console.log(`(${d.severity}) ${d.message}`);
}

//
// One text snippet: a standalone field, rendered once into the engine's
// snippet cache when the zoo was processed.
//
const alice = zoodb.objects.person.alice;
console.log(`\n--- The name of ${alice.person_id} (text snippet) ---\n`);
console.log(engine.snippet(alice.name, 'text'));
