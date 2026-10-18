// Tests of the FLM processor (src/dbprocessor/flmprocessor.js) through the
// standard setup, over the mini zoo of test/test_data/flm_zoo/: two object
// types (people, topics), cross-object \ref to objects, to a labeled section
// and to figures, a figure in two objects (one with a \cite in its caption),
// a section whose title holds a footnote, a small PNG, footnotes, a \cite
// served by a JavaScript citation source.  No network.

import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { ZooDb, ZooDbDataLoaderHandler } from '../src/index.js';

import { use_flm_engine, srcset_core_config, SRCSET_U2_WARNING } from '../src/std/use_flm_engine.js';
import { use_flm_processor } from '../src/std/use_flm_processor.js';
import { use_searchable_text_processor } from '../src/std/use_searchable_text_processor.js';
import { makeStandardZooDb } from '../src/std/stdzoodb.js';
import { makeStandardYamlDbDataLoader } from '../src/std/stdyamldbdataloader.js';

import { FLMSimpleContentCompiler } from '../src/dbprocessor/flmsimplecontent.js';
import { ZooFlmProcessor, flm_text_of_plain_text } from '../src/dbprocessor/flmprocessor.js';
import { CitationSourceBase } from '../src/citationmanager/source/base.js';
import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine, ZooFlmError, is_fragment, format_diagnostic } from '../src/zooflm/engine.js';

import { make_mock_host, make_mock_fetch_api } from './_helpers/citation_mock_host.js';
import { get_simple_test_data, schema_validator } from './_helperstest.js';


const test_data_dir = fileURLToPath(new URL('./test_data/', import.meta.url));
const zoo_dir = path.join(test_data_dir, 'flm_zoo');
const csl_style = fs.readFileSync(path.join(test_data_dir, 'american-physical-society-et-al--patched.csl'),
                                  { encoding: 'utf-8' });

const load_wasm = load_zoodb_flm_wasm_node;


// A JavaScript citation source serving ready-formatted FLM text for any key
// but `missing`; it records the keys it was asked for.
class CitationSourceCustomTest extends CitationSourceBase
{
    constructor(options)
    {
        super({ source_name: 'Custom test source', chunk_size: Infinity, chunk_retrieve_delay_ms: 0 },
              options ?? {}, { cite_prefix: 'custom' });
        this.asked = [];
    }

    async run_retrieve_chunk(id_list)
    {
        for (const key of id_list) {
            this.asked.push(key);
            if (key === 'missing') {
                continue;
            }
            await this.citation_manager.store_citation(
                this.cite_prefix, key,
                { _ready_formatted: { flm: `Custom reference \\emph{${key}}` } },
                this.cache_store_options,
            );
        }
    }
}


async function make_zoo({
    continue_with_errors = false, allow_unresolved_references = false, refs = {}, flm_options = {},
} = {})
{
    const host = make_mock_host();
    return await makeStandardZooDb({
        fs,
        fs_data_dir: zoo_dir,
        continue_with_errors,

        use_flm_engine,
        use_flm_processor,
        use_searchable_text_processor,

        flm_options: {
            load_wasm,
            allow_unresolved_references,
            refs,
            contexts: {
                handbook: { object_href: (object_type, object_id) => `hb/${object_type}-${object_id}.html` },
            },
            citations: {
                csl_style,
                sources: { arxiv: false, doi: false, manual: false, custom: new CitationSourceCustomTest() },
                cache_dir: '_zoodb_TEST_citation_info_cache',
                cache_dir_create: false,
                skip_save_cache: true,
                citation_manager_options: {
                    fetch: make_mock_fetch_api(host), sleep: host.sleep, now: host.now,
                },
            },
            ...flm_options,
        },

        searchable_text_options: { object_types: ['person'] },

        zoo_permalinks: {
            object: (object_type, object_id) => `/${object_type}/${object_id}`,
            graphics_resource(resource_data) {
                // a method, called on the permalinks object
                return `${this.pic_base}${resource_data.src_url}`;
            },
            pic_base: '/pic/',
        },

        schemas: { schema_root: zoo_dir, schema_rel_path: 'schemas/', schema_add_extension: '.json' },
    });
}

async function load_zoo(options)
{
    const zoodb = await make_zoo(options);
    const loader = await makeStandardYamlDbDataLoader(zoodb, {
        objects: {
            person: { schema_name: 'person', data_src_path: 'people/' },
            topic: { schema_name: 'topic', data_src_path: 'topics/' },
        },
    });
    await zoodb.install_zoo_loader_handler(new ZooDbDataLoaderHandler(loader));
    await zoodb.load();
    return zoodb;
}

// A person's page, as a site template writes it.
const compose_person = (person) => ({ rdr, rdrblock, ref, endnotes }) =>
    `<h1>${rdr(person.name)}</h1>\n${rdrblock(person.biography)}\n`
    + (person.topics ?? []).map( (t) => `<p>${ref('topic', t.topic_id)}: ${rdr(t.detail)}</p>\n` ).join('')
    + endnotes();

// In-memory objects for the error cases (no loader).
const carol = (fields = {}) => ({
    person_id: 'carol', name: 'Carol', biography: 'Carol is new.',
    _zoodb: { source_file_path: 'people/carol.yml' }, ...fields,
});

const alice_raw = (fields = {}) => ({
    person_id: 'alice', name: 'Alice', _zoodb: { source_file_path: 'people/alice.yml' }, ...fields,
});

const identifiers = (obj) => obj._zoodb.flm_diagnostics.map( (d) => `${d.severity} ${d.identifier}` );


describe('ZooFlmProcessor', function () {

    this.timeout(30000);

    describe('a zoo through the standard setup', function () {

        let zoodb;
        let engine;
        let processor;

        before(async function () {
            zoodb = await load_zoo();
            engine = zoodb.zoo_flm_engine;
            processor = zoodb.zoo_flm_processor;
        });

        after(function () {
            engine?.free();
        });

        it('compiles the fields and scans the zoo', function () {
            assert.ok(processor instanceof ZooFlmProcessor);
            const { alice, bob } = zoodb.objects.person;
            const drawing = zoodb.objects.topic.drawing;
            assert.ok(is_fragment(alice.biography) && is_fragment(alice.topics[0].detail));
            assert.strictEqual(alice.biography.origin.label, 'people/alice.yml#biography');
            assert.deepStrictEqual(alice._zoodb.flm_diagnostics, []);
            assert.deepStrictEqual(bob._zoodb.flm_diagnostics, []);
            // the section title holds a footnote: its display is not standalone
            assert.deepStrictEqual(identifiers(drawing), ['warning zoodb.index.display-not-standalone']);
            assert.match(drawing._zoodb.flm_diagnostics[0].message, /‘sec:drawing-basics’.*display of topic:drawing/);
            assert.deepStrictEqual(processor.diagnostics, []);

            const a = processor.object_scan('person', 'alice');
            // a float is anchored on its number: no anchor; its caption
            // without the braces
            assert.deepStrictEqual(a.labels.map( ({ label, anchor, display }) => ({ label, anchor, display }) ), [
                { label: 'sec:alice-early', anchor: 'sec-alice-early', display: 'Early life' },
                { label: 'figure:alice-dot', anchor: null, display: 'A red dot.' },
            ]);
            assert.deepStrictEqual(a.graphics.map( ({ path, origin }) => [path, origin] ),
                                   [['images/dot', 'people/alice.yml#biography']]);
            const b = processor.object_scan('person', 'bob');
            // in the scan, a label of another object resolves (one document);
            // an object does not (the scan installs no index)
            assert.deepStrictEqual(b.refs.map( ({ label, resolved }) => [label, resolved] ), [
                ['person:alice', false], ['sec:alice-early', true], ['topic:drawing', false],
                ['sec:drawing-basics', true],
            ]);
            assert.deepStrictEqual(b.cited.map( (c) => c.key ), ['custom:xyz']);
            assert.strictEqual(processor.object_scan('person', 'nobody'), null);
        });

        it('sets the index of each context: objects and labels, #anchor only for label anchors', function () {
            const index = engine.tables.index;
            const { alice, bob } = zoodb.objects.person;
            const drawing = zoodb.objects.topic.drawing;
            assert.deepStrictEqual(Object.keys(index).sort(), ['default', 'handbook']);
            const plain = (e) => ({ label: e.label, href: e.href, display: e.display });
            assert.deepStrictEqual(index.default.map(plain), [
                { label: 'person:alice', href: '/person/alice', display: alice.name },
                { label: 'person:bob', href: '/person/bob', display: bob.name },
                { label: 'topic:drawing', href: '/topic/drawing', display: drawing.name },
                { label: 'sec:alice-early', href: '/person/alice#sec-alice-early', display: 'Early life' },
                // number anchors: the object's href alone, the object's display
                { label: 'figure:alice-dot', href: '/person/alice', display: alice.name },
                { label: 'figure:bob-dot', href: '/person/bob', display: bob.name },
                // a title holding a footnote: the object's display
                { label: 'sec:drawing-basics', href: '/topic/drawing#sec-drawing-basics', display: drawing.name },
            ]);
            assert.deepStrictEqual(index.handbook.map( (e) => e.href ), [
                'hb/person-alice.html', 'hb/person-bob.html', 'hb/topic-drawing.html',
                'hb/person-alice.html#sec-alice-early', 'hb/person-alice.html', 'hb/person-bob.html',
                'hb/topic-drawing.html#sec-drawing-basics',
            ]);
        });

        it('fills the citations and graphics tables', function () {
            assert.deepStrictEqual(engine.tables.citations,
                                   [{ key: 'custom:xyz', text: 'Custom reference \\emph{xyz}' }]);
            assert.strictEqual(engine.tables.graphics.length, 2);
            const [g, h] = engine.tables.graphics;
            // the permalink method, called on its object
            assert.match(g.address, /^\/pic\/fig-dot\.[0-9a-z]{4}\.png$/);
            assert.deepStrictEqual({ ...g, address: null }, {
                origin: 'people/alice.yml#biography', path: 'images/dot', identity: 'people/images/dot.png',
                media_type: 'image/png', address: null, kind: 'raster',
                width_px: 20, height_px: 10, dpi: 300, width_pt: 4.8, height_pt: 2.4,
            });
            assert.deepStrictEqual({ ...h, origin: null }, { ...g, origin: null });
            assert.strictEqual(h.origin, 'people/bob.yml#biography');
            // the collector's data is there for the site (the image files)
            const data = processor.resource_collector.get_resource_data('graphics_path', 'people/images/dot');
            assert.strictEqual(data.resolved_info.full_source_path, path.join(zoo_dir, 'people/images/dot.png'));
        });

        it('fills the snippet cache of the standalone fields', function () {
            for (const obj of [...Object.values(zoodb.objects.person), ...Object.values(zoodb.objects.topic)]) {
                assert.ok(engine.snippet_entry(obj.name, 'html') != null, obj._zoodb.id);
                assert.ok(engine.snippet_entry(obj.name, 'text') != null, obj._zoodb.id);
            }
            assert.strictEqual(engine.snippet(zoodb.objects.person.alice.name, 'text'), 'Alice Aaliz');
        });

        it('renders pages with the cross-object links, the citations and the figures', function () {
            const { alice, bob } = zoodb.objects.person;
            const page = engine.render_document({ compose: compose_person(bob) });
            assert.deepStrictEqual(page.diagnostics, []);
            assert.doesNotMatch(page.html, /<flm:/);
            assert.match(page.html, /Bob is a friend of <a class="flm-pres-link" href="\/person\/alice"[^>]*>Alice <em[^>]*>Aaliz<\/em><\/a>/);
            assert.match(page.html, /<a class="flm-pres-link" href="\/person\/alice#sec-alice-early"[^>]*>Early life<\/a>/);
            assert.match(page.html, /<a class="flm-pres-link" href="\/topic\/drawing"[^>]*>Drawing<\/a>/);
            // the section whose title holds a footnote: the topic's name
            assert.match(page.html, /\(<a class="flm-pres-link" href="\/topic\/drawing#sec-drawing-basics"[^>]*>Drawing<\/a>\)/);
            assert.match(page.html, /flm-xnotes-footnote-list[\s\S]*Bob says so\./);
            assert.match(page.html, /flm-citations-bibliography[\s\S]*Custom reference <em[^>]*>xyz<\/em>/);
            // bob's own figure, its caption citing
            assert.match(page.html, /<figure [^>]*id="figure-1"[\s\S]*Bob’s dot, after/);

            const alice_page = engine.render_document({ compose: compose_person(alice) });
            assert.deepStrictEqual(alice_page.diagnostics, []);
            assert.match(alice_page.html, /<h1 class="flm-pres-block--heading" id="sec-alice-early"/);
            assert.match(alice_page.html, /<figure [^>]*id="figure-1"/);
            assert.match(alice_page.html, /<img [^>]*src="\/pic\/fig-dot\.[0-9a-z]{4}\.png"[^>]*--flm-element-width: 4\.8pt/);
            assert.doesNotMatch(alice_page.html, /srcset=/);
            // the figure of another object (its caption cites): bob's page, bob's name
            assert.match(alice_page.html, /Bob drew one too \(<a class="flm-pres-link" href="\/person\/bob"[^>]*>Bob <span class="flm-pres-math--passthrough"/);
            assert.match(alice_page.html, /<p><a href="\/topic\/drawing" class="href-ref ref-topic">Drawing<\/a>: Since /);

            // the other context
            const hb = engine.render_document({ context: 'handbook', compose: compose_person(bob) });
            assert.match(hb.html, /href="hb\/person-alice\.html#sec-alice-early"/);
            assert.doesNotMatch(hb.html, /href="\/person\//);
            // and back
            assert.strictEqual(engine.render_document({ compose: compose_person(bob) }).html, page.html);
        });

        it('makes the searchable text of the objects through the engine', function () {
            const doc = zoodb.objects.person.bob._zoodb.searchable_text_doc;
            assert.strictEqual(doc.name, 'Bob \\(B_0\\)');
            assert.match(doc.biography, /^Bob is a friend of Alice Aaliz, whose early life is told in Early life\.¹/);
            assert.match(zoodb.objects.person.alice._zoodb.searchable_text_doc.topics_detail, /^Since /);
        });

        it('dumps the zoo; a second engine loads the dump and renders the same page', async function () {
            const dump = JSON.parse(JSON.stringify(await zoodb.data_dump()));
            assert.strictEqual(typeof dump.db.objects.person.bob.biography, 'string');
            const zooflm = dump.zooflm;
            assert.strictEqual(zooflm.settings_hash, engine.settings_hash);
            assert.deepStrictEqual(Object.keys(zooflm.index).sort(), ['default', 'handbook']);
            assert.strictEqual(zooflm.index.default.find( (e) => e.label === 'person:alice' ).display,
                               'Alice \\emph{Aaliz}');
            assert.deepStrictEqual(zooflm.citations, engine.tables.citations);
            assert.strictEqual(zooflm.graphics[0].identity, 'people/images/dot.png');
            const alice_snippet = zooflm.snippets.find( (s) => s.label === 'people/alice.yml#name' );
            assert.match(alice_snippet.html, /^Alice <em/);
            assert.strictEqual(alice_snippet.text, 'Alice Aaliz');
            assert.strictEqual(zooflm.snippets.length, 3);
            // the switch, and the old one refused
            assert.ok(!('zooflm' in await zoodb.data_dump({ flm_include_zooflm_data: false })));
            await assert.rejects(zoodb.data_dump({ flm_include_refs_data: false }), /flm_include_zooflm_data/);

            // A browser app: the engine, the dump's tables, the fields compiled on demand.
            const engine2 = await ZooFlmEngine.create({ load_wasm, core: {} });
            try {
                assert.deepStrictEqual(engine2.load(zooflm), { diagnostics: [], has_errors: false });
                const compiler = new FLMSimpleContentCompiler({ engine: engine2 });
                const objects = dump.db.objects.person;
                for (const [id, obj] of Object.entries(objects)) {
                    compiler.compile_object('person', id, obj, dump.db.schemas.person);
                }
                // the snippets come from the dump
                assert.strictEqual(engine2.snippet_entry(objects.alice.name, 'html').value, alice_snippet.html);
                for (const id of ['alice', 'bob']) {
                    const original = engine.render_document({ compose: compose_person(zoodb.objects.person[id]) });
                    const again = engine2.render_document({ compose: compose_person(objects[id]) });
                    assert.deepStrictEqual(again.diagnostics, []);
                    assert.strictEqual(again.html, original.html, id);
                }
                // a changed source does not take the dumped snippet
                const changed = engine2.make_fragment('Alice changed', {
                    origin: objects.alice.name.origin, standalone: true,
                });
                assert.strictEqual(engine2.snippet_entry(changed, 'html'), null);
            } finally {
                engine2.free();
            }

            // another core configuration refuses the dump
            const engine3 = await ZooFlmEngine.create({ load_wasm, core: { dollar_math: true } });
            try {
                assert.throws( () => engine3.load(zooflm), /another core configuration/ );
            } finally {
                engine3.free();
            }
        });

        it('compiles ad hoc fragments and processes them with the zoo', async function () {
            const count = engine.core.fragment_count();
            const chapter = processor.compile_flm_fragment(
                '\\section{Intro}\\label{sec:chapter-intro}\n\nA chapter citing \\cite{custom:chapter}.',
                { origin: { label: 'handbook/chapter-1', href: 'hb/chapter-1.html' } },
            );
            const loose = processor.compile_flm_fragment('\\section{Loose}\\label{sec:loose}',
                                                         { origin: 'handbook/loose' });
            await processor.process_auxiliary_resources();
            assert.ok(engine.tables.citations.some( (c) => c.key === 'custom:chapter' ));
            assert.match(engine.render_document({ compose: ({ rdrblock, endnotes }) => rdrblock(chapter) + endnotes() }).html,
                         /Custom reference <em[^>]*>chapter<\/em>/);
            // a label of an ad hoc fragment with an href gets an index entry
            assert.deepStrictEqual({ ...engine.tables.index.default.find( (e) => e.label === 'sec:chapter-intro' ) },
                                   { label: 'sec:chapter-intro', href: 'hb/chapter-1.html#sec-chapter-intro',
                                     display: 'Intro' });
            // one without, a warning
            assert.ok(!engine.tables.index.default.some( (e) => e.label === 'sec:loose' ));
            assert.deepStrictEqual(processor.diagnostics.map( (d) => [d.severity, d.identifier, d.origin.label] ),
                                   [['warning', 'zoodb.labels.no-href', 'handbook/loose']]);
            // the old options are refused
            assert.throws( () => processor.compile_flm_fragment('x', { resource_info: {}, what: 'x' }),
                           /resource_info, what.*‘origin’/ );
            processor.release_flm_fragments([chapter, loose]);
            assert.ok(chapter.released && loose.released);
            // (the blocks sibling of the chapter, made by the render, is released with it)
            assert.strictEqual(engine.core.fragment_count(), count);
            await processor.process_auxiliary_resources();
            assert.ok(!engine.tables.citations.some( (c) => c.key === 'custom:chapter' ));
            assert.deepStrictEqual(processor.diagnostics, []);
        });

        it('reloads one object through update_objects', async function () {
            const { alice, bob } = zoodb.objects.person;
            const old_name = alice.name;
            const bob_name = bob.name;
            const bob_snippet = engine.snippet_entry(bob_name, 'html');
            const count = engine.core.fragment_count();
            await zoodb.update_objects({
                person: {
                    alice: alice_raw({
                        name: 'Alice \\textbf{Reloaded}',
                        biography: 'New biography.\n\n\\section{Later life}\\label{sec:alice-later}',
                    }),
                },
            });
            const new_alice = zoodb.objects.person.alice;
            assert.ok(old_name.released);
            assert.ok(is_fragment(new_alice.name) && !new_alice.name.released);
            // bob's fragments and cached snippets are kept
            assert.strictEqual(zoodb.objects.person.bob.name, bob_name);
            assert.strictEqual(engine.snippet_entry(bob_name, 'html'), bob_snippet);
            assert.ok(engine.snippet_entry(new_alice.name, 'html') != null);
            // alice's name, biography and its blocks sibling (rendered), and
            // her topic's detail, released; her new name and biography
            assert.strictEqual(engine.core.fragment_count(), count - 4 + 2);
            // the index follows: the new name, the new label; the old labels are gone
            const page = engine.render_document({ error_policy: 'continue', compose: compose_person(bob) });
            assert.match(page.html, /href="\/person\/alice"[^>]*>Alice <strong[^>]*>Reloaded<\/strong><\/a>/);
            assert.deepStrictEqual(page.diagnostics.map( (d) => [d.identifier, d.origin.label] ),
                                   [['flm.refs.unresolved', 'people/bob.yml#biography']]);
            assert.ok(engine.tables.index.default.some( (e) => e.label === 'sec:alice-later' ));
            assert.ok(!engine.tables.index.default.some( (e) => e.label === 'figure:alice-dot' ));
            assert.deepStrictEqual(engine.tables.graphics.map( (g) => g.origin ), ['people/bob.yml#biography']);
            // bob's reference to the label that is gone, reported at processing
            assert.deepStrictEqual(identifiers(zoodb.objects.person.bob), ['warning zoodb.refs.unresolved']);
            assert.match(zoodb.objects.person.bob._zoodb.flm_diagnostics[0].message, /‘sec:alice-early’/);
        });

        it('a reload that fails in the field compiler leaves the previous index usable', async function () {
            const alice = zoodb.objects.person.alice;
            const count = engine.core.fragment_count();
            await assert.rejects(zoodb.update_objects({
                person: { alice: alice_raw({ name: 'Alice \\broken', biography: 'x' }) },
            }), ZooFlmError);
            // the previous fragments are alive, and ref() shows the previous name
            assert.strictEqual(alice.name.released, false);
            assert.strictEqual(engine.core.fragment_count(), count + 2);
            const html = engine.render_document({ compose: ({ ref }) => ref('person', 'alice') }).html;
            assert.match(html, /^<a href="\/person\/alice" class="href-ref ref-person">Alice <strong/);
            // a reload that succeeds releases both the previous and the failed fragments
            const failed = zoodb.objects.person.alice;
            await zoodb.update_objects({ person: { alice: alice_raw() } });
            assert.ok(alice.name.released);
            assert.ok(failed.name.released);
            assert.strictEqual(engine.core.fragment_count(), count - 2 + 1);
            assert.strictEqual(engine.render_document({ compose: ({ ref }) => ref('person', 'alice') }).html,
                               '<a href="/person/alice" class="href-ref ref-person">Alice</a>');
        });

        it('a reload that fails at the scan (a duplicate label) leaves the previous index usable', async function () {
            const alice = zoodb.objects.person.alice;
            const count = engine.core.fragment_count();
            await assert.rejects(zoodb.update_objects({
                person: {
                    alice: alice_raw({ name: 'Alice Again', biography: '\\section{B}\\label{sec:drawing-basics}' }),
                },
            }), (err) => err instanceof ZooFlmError && /zoodb\.labels\.duplicate/.test(err.message));
            assert.strictEqual(engine.core.fragment_count(), count + 2);
            assert.strictEqual(engine.render_document({ compose: ({ ref }) => ref('person', 'alice') }).html,
                               '<a href="/person/alice" class="href-ref ref-person">Alice</a>');
            assert.strictEqual(alice.name.released, false);
            await zoodb.update_objects({ person: { alice: alice_raw({ name: 'Alice Three' }) } });
            assert.strictEqual(engine.core.fragment_count(), count - 1 + 1);
            assert.strictEqual(engine.render_document({ compose: ({ ref }) => ref('person', 'alice') }).html,
                               '<a href="/person/alice" class="href-ref ref-person">Alice Three</a>');
        });
    });

    describe('the standard options', function () {

        it('graphics_use_srcset_parceljs is accepted, not enabled while U2 is open, with one warning', async function () {
            assert.strictEqual(srcset_core_config(null), null);
            assert.strictEqual(srcset_core_config({ enabled: false, image_max_zoom_factor: 4 }), null);
            assert.deepStrictEqual(srcset_core_config({ enabled: true, image_max_zoom_factor: 2.5 }),
                                   { image_max_zoom_factor: 2 });
            assert.deepStrictEqual(srcset_core_config({ enabled: true, pixel_density_list: [1, 3], image_max_zoom_factor: 4 }),
                                   { pixel_density_list: [1, 3] });

            const warnings = [];
            const saved = console.warn;
            console.warn = (...args) => { warnings.push(args.map(String).join(' ')); };
            let zoodb;
            try {
                zoodb = await load_zoo({
                    flm_options: { resources: { graphics_use_srcset_parceljs: { enabled: true, image_max_zoom_factor: 2 } } },
                });
            } finally {
                console.warn = saved;
            }
            try {
                assert.deepStrictEqual(warnings, [SRCSET_U2_WARNING]);
                const engine = zoodb.zoo_flm_engine;
                assert.strictEqual(engine._core_config.srcset, null);
                const page = engine.render_document({ compose: compose_person(zoodb.objects.person.alice) });
                assert.deepStrictEqual(page.diagnostics, []);
                assert.match(page.html, /<img [^>]*src="\/pic\/fig-dot\.[0-9a-z]{4}\.png"/);
                assert.doesNotMatch(page.html, /srcset=/);
            } finally {
                zoodb.zoo_flm_engine.free();
            }
        });

        it('skip_check_update_existing_citations and _resources skip what is there', async function () {
            const count_calls = (zoodb) => {
                const processor = zoodb.zoo_flm_processor;
                const calls = { retrieve: 0, collect: 0 };
                const retrieve = processor.citation_manager.retrieve_citations.bind(processor.citation_manager);
                processor.citation_manager.retrieve_citations = (...args) => { calls.retrieve += 1; return retrieve(...args); };
                const collect = processor.resource_collector.collect.bind(processor.resource_collector);
                processor.resource_collector.collect = (...args) => { calls.collect += 1; return collect(...args); };
                return calls;
            };
            const skipping = await load_zoo({
                flm_options: { skip_check_update_existing_citations: true, skip_check_update_existing_resources: true },
            });
            const checking = await load_zoo();
            try {
                const skipped = count_calls(skipping);
                const checked = count_calls(checking);
                for (const zoodb of [skipping, checking]) {
                    await zoodb.zoo_flm_processor.process_zoo();
                }
                assert.deepStrictEqual(skipped, { retrieve: 0, collect: 0 });
                // one collect() per image written (two of the same file; the
                // collector answers the second from what it has)
                assert.deepStrictEqual(checked, { retrieve: 1, collect: 2 });
                // the tables are the same
                assert.deepStrictEqual(skipping.zoo_flm_engine.tables.citations, checking.zoo_flm_engine.tables.citations);
                assert.deepStrictEqual(skipping.zoo_flm_engine.tables.graphics, checking.zoo_flm_engine.tables.graphics);
                // a new key is still retrieved
                const f = skipping.zoo_flm_processor.compile_flm_fragment('\\cite{custom:new}', { origin: 'adhoc' });
                await skipping.zoo_flm_processor.process_auxiliary_resources();
                assert.strictEqual(skipped.retrieve, 1);
                assert.ok(skipping.zoo_flm_engine.tables.citations.some( (c) => c.key === 'custom:new' ));
                skipping.zoo_flm_processor.release_flm_fragments(f);
            } finally {
                skipping.zoo_flm_engine.free();
                checking.zoo_flm_engine.free();
            }
        });
    });

    describe('without the standard setup', function () {

        it('runs with its defaults (no citation manager, no image retriever)', async function () {
            const engine = await ZooFlmEngine.create({ load_wasm });
            try {
                const data = get_simple_test_data();
                data.objects.dish.soup.description = 'Soup, see \\ref{utensil:spoon} and \\cite{arxiv:1234.5678}.';
                const processor = new ZooFlmProcessor({ engine, allow_unresolved_citations: true });
                const zoodb = new ZooDb({ processors: [processor], schema_validator });
                await zoodb.load_data(data);
                const index = engine.tables.index.default;
                assert.strictEqual(index.find( (e) => e.label === 'dish:pasta' ).href, '/dish/pasta');
                assert.deepStrictEqual(engine.tables.citations, [
                    { key: 'arxiv:1234.5678', text: '\\begin{verbatimtext}arxiv:1234.5678\\end{verbatimtext}' },
                ]);
                const soup = zoodb.objects.dish.soup;
                const out = engine.render_document({ compose: ({ rdrblock, endnotes }) => rdrblock(soup.description) + endnotes() });
                assert.deepStrictEqual(out.diagnostics, []);
                assert.match(out.html, /<a class="flm-pres-link" href="\/utensil\/spoon"[^>]*>Spoon<\/a>/);
                const dump = await zoodb.data_dump({ flm_include_zooflm_data: false });
                assert.ok(!('zooflm' in dump));
            } finally {
                engine.free();
            }
        });
    });

    describe('the scan results of the objects', function () {

        let zoodb;

        before(async function () {
            zoodb = await make_zoo();
            await zoodb.load_data({ objects: {
                person: {
                    carol: carol({
                        biography: 'Carol defines.\n\n\\begin{defterm}{Dot}\\label{topic:dot}\n'
                            + '  A small round mark \\cite{custom:xyz}.\n\\end{defterm}',
                        topics: [{ topic_id: 'drawing', detail: 'With a \\term{Dot}, after \\cite{custom:xyz} and \\cite{custom:abc}.' }],
                    }),
                    dave: {
                        person_id: 'dave', name: 'Dave', biography: 'Dave draws a \\term{Dot} too \\cite{custom:xyz}.',
                        _zoodb: { source_file_path: 'people/dave.yml' },
                    },
                },
                topic: { drawing: { topic_id: 'drawing', name: 'Drawing' } },
            } });
        });

        after(function () {
            zoodb?.zoo_flm_engine.free();
        });

        it('lists every key an object cites, per field, so that two objects citing a key both list it', function () {
            const processor = zoodb.zoo_flm_processor;
            const cited = (id) => processor.object_scan('person', id).cited.map(
                ({ key, cite_prefix, cite_key, origin }) => [key, cite_prefix, cite_key, origin] );
            assert.deepStrictEqual(cited('carol'), [
                ['custom:xyz', 'custom', 'xyz', 'people/carol.yml#biography'],
                ['custom:xyz', 'custom', 'xyz', 'people/carol.yml#topics.0.detail'],
                ['custom:abc', 'custom', 'abc', 'people/carol.yml#topics.0.detail'],
            ]);
            assert.deepStrictEqual(cited('dave'), [['custom:xyz', 'custom', 'xyz', 'people/dave.yml#biography']]);
            assert.ok(processor.object_scan('person', 'dave').cited[0].fragment === zoodb.objects.person.dave.biography);
            // The zoo's list keeps each key once, with its first citation:
            // what the citations are retrieved for.
            assert.deepStrictEqual(processor.scan_results.cited.map( (c) => [c.key, c.cite_prefix, c.origin] ), [
                ['custom:xyz', 'custom', 'people/carol.yml#biography'],
                ['custom:abc', 'custom', 'people/carol.yml#topics.0.detail'],
            ]);
            assert.deepStrictEqual(zoodb.zoo_flm_engine.tables.citations.map( (c) => c.key ), ['custom:xyz', 'custom:abc']);
        });

        it('gives each term definition with its labels, anchor and body, for a glossary', function () {
            const processor = zoodb.zoo_flm_processor;
            const engine = zoodb.zoo_flm_engine;
            const [term] = processor.object_scan('person', 'carol').terms;
            assert.deepStrictEqual([term.labels, term.anchor, term.display, term.body.trim()], [
                ['defterm:Dot', 'topic:dot'], 'defterm-Dot', 'Dot', 'A small round mark \\cite{custom:xyz}.',
            ]);
            assert.strictEqual(term.fragment, zoodb.objects.person.carol.biography);
            assert.deepStrictEqual(processor.object_scan('person', 'dave').terms, []);
            // The objects referring to the term, through their refs.
            const referring = [...processor.scan_results.objects.values()]
                .filter( (o) => o.refs.some( (r) => term.labels.includes(r.label) ) )
                .map( (o) => o.object_id );
            assert.deepStrictEqual(referring, ['carol', 'dave']);
            // The term's link: its computed label forms the anchor, which
            // the point's other label gets too, with the same display.
            const index_entry = (label) => engine.tables.index.default.find( (e) => e.label === label );
            assert.strictEqual(index_entry('defterm:Dot').href, '/person/carol#defterm-Dot');
            assert.strictEqual(index_entry('topic:dot').href, '/person/carol#defterm-Dot');
            assert.strictEqual(index_entry('topic:dot').display, index_entry('defterm:Dot').display);
            assert.strictEqual(index_entry('defterm:Dot').display, 'Dot');
            // A glossary page renders the body as a fragment of its own, with
            // the field's origin naming the term.
            assert.strictEqual(term.body_origin.label, term.fragment.origin.label);
            assert.strictEqual(term.body_origin.term, 'defterm:Dot');
            const body = engine.make_fragment(term.body, { origin: term.body_origin, layout: 'blocks' });
            const page = engine.render_document({
                compose: ({ rdrblock, endnotes }) => `<dt>${engine.snippet_of_text(term.display)}</dt><dd>${rdrblock(body)}</dd>${endnotes()}`,
            });
            assert.deepStrictEqual(page.diagnostics, []);
            assert.match(page.html, /^<dt>Dot<\/dt><dd><p class="flm-pres-par">A small round mark/);
            assert.match(page.html, /Custom reference <em[^>]*>xyz<\/em>/);
            engine.release(body);
        });
    });

    describe('errors and warnings', function () {

        const zoos = [];
        const fresh = async (options) => {
            const zoodb = await make_zoo(options);
            zoos.push(zoodb);
            return zoodb;
        };

        after(function () {
            zoos.forEach( (z) => z.zoo_flm_engine.free() );
        });

        it('a field with an error: abort throws, continue keeps the fragment and the diagnostic', async function () {
            const objects = { person: { carol: carol({ biography: 'Carol \\nosuchmacro{x}.' }) }, topic: {} };

            const aborting = await fresh();
            await assert.rejects(aborting.load_data({ objects: structuredClone(objects) }), (err) => {
                assert.ok(err instanceof ZooFlmError, err.stack);
                assert.ok(err.message.startsWith('people/carol.yml#biography:1:7: error: '), err.message);
                return true;
            });

            const continuing = await fresh({ continue_with_errors: true });
            await continuing.load_data({ objects: structuredClone(objects) });
            const c = continuing.objects.person.carol;
            assert.deepStrictEqual(c._zoodb.flm_diagnostics.map( (d) => [d.severity, d.identifier] ),
                                   [['error', 'core.specs.unresolvable-command']]);
            const page = continuing.zoo_flm_engine.render_document({ compose: compose_person(c) });
            assert.strictEqual(page.has_errors, true);
            assert.match(page.html, /Carol <span class="flm-pres-unknown"/);
        });

        it('a standalone field holding a citation is an error on its object', async function () {
            const objects = { person: { carol: carol({ name: 'Carol \\cite{custom:xyz}' }) }, topic: {} };

            const aborting = await fresh();
            await assert.rejects(aborting.load_data({ objects: structuredClone(objects) }), (err) => {
                assert.ok(err instanceof ZooFlmError, err.stack);
                assert.match(err.message, /^people\/carol\.yml#name:1:7: error: .*\[zoodb\.standalone\.violation\]$/);
                return true;
            });
            assert.ok(aborting.objects.person.carol._zoodb.flm_diagnostics.some(
                (d) => d.identifier === 'zoodb.standalone.violation'));

            const continuing = await fresh({ continue_with_errors: true });
            await continuing.load_data({ objects: structuredClone(objects) });
            assert.deepStrictEqual(
                continuing.objects.person.carol._zoodb.flm_diagnostics.map( (d) => [d.severity, d.identifier] ),
                [['error', 'zoodb.standalone.violation']],
            );
        });

        it('a label defined twice in the zoo is an error on the second object', async function () {
            const objects = {
                person: {
                    alice: { person_id: 'alice', name: 'Alice', biography: '\\section{A}\\label{sec:same}',
                             _zoodb: { source_file_path: 'people/alice.yml' } },
                    carol: carol({ biography: 'Intro.\n\n\\section{B}\\label{sec:same}' }),
                },
                topic: {},
            };
            const aborting = await fresh();
            await assert.rejects(aborting.load_data({ objects: structuredClone(objects) }), (err) => {
                assert.ok(err instanceof ZooFlmError, err.stack);
                assert.match(err.message, /^people\/carol\.yml#biography:3:1: error: the label ‘sec:same’ is already defined in people\/alice\.yml#biography; labels are unique across the zoo \[zoodb\.labels\.duplicate\]$/);
                return true;
            });

            const continuing = await fresh({ continue_with_errors: true });
            await continuing.load_data({ objects: structuredClone(objects) });
            assert.deepStrictEqual(continuing.objects.person.alice._zoodb.flm_diagnostics, []);
            const [d] = continuing.objects.person.carol._zoodb.flm_diagnostics;
            assert.strictEqual(d.identifier, 'zoodb.labels.duplicate');
            assert.strictEqual(format_diagnostic(d).split(': error')[0], 'people/carol.yml#biography:3:1');
            // the first keeps the label
            assert.strictEqual(continuing.zoo_flm_engine.tables.index.default
                .find( (e) => e.label === 'sec:same' ).href, '/person/alice#sec-same');
        });

        it('an image that cannot be collected and a display that is not standalone', async function () {
            const objects = {
                person: { carol: carol({ biography: 'See:\n\n\\begin{figure}\\includegraphics{images/nosuchimage}\\end{figure}' }) },
                topic: {},
            };
            const refs = { person: { formatted_ref_flm_text_fn: (id, person) => person.biography } };
            const aborting = await fresh({ refs });
            await assert.rejects(aborting.load_data({ objects: structuredClone(objects) }),
                                 (err) => err instanceof ZooFlmError
                                     && /zoodb\.index\.display-not-standalone/.test(err.message));
            assert.ok(aborting.objects.person.carol._zoodb.flm_diagnostics.some(
                (d) => d.identifier === 'zoodb.index.display-not-standalone'));

            const continuing = await fresh({ continue_with_errors: true, refs });
            await continuing.load_data({ objects: structuredClone(objects) });
            assert.deepStrictEqual(
                continuing.objects.person.carol._zoodb.flm_diagnostics.map( (d) => d.identifier ),
                // one per context
                ['zoodb.index.display-not-standalone', 'zoodb.index.display-not-standalone',
                 'zoodb.graphics.collect-failed'],
            );
            assert.deepStrictEqual(continuing.zoo_flm_engine.tables.index.default, []);
            assert.deepStrictEqual(continuing.zoo_flm_engine.tables.graphics, []);
        });

        it('a label that is the label of an object is left out of the index, with a warning', async function () {
            const objects = {
                person: { carol: carol({ biography: '\\section{Topic}\\label{topic:drawing}' }) },
                topic: { drawing: { topic_id: 'drawing', name: 'Drawing' } },
            };
            const zoodb = await fresh();
            await zoodb.load_data({ objects: structuredClone(objects) });
            assert.deepStrictEqual(zoodb.objects.person.carol._zoodb.flm_diagnostics.map( (d) => [d.severity, d.identifier] ),
                                   [['warning', 'zoodb.labels.shadowed']]);
            assert.strictEqual(zoodb.zoo_flm_engine.tables.index.default
                .find( (e) => e.label === 'topic:drawing' ).href, '/topic/drawing');
        });

        it('a name that is not standalone is not a display: the ID instead', async function () {
            const zoodb = await fresh();
            await zoodb.load_data({ objects: {
                note: { n1: { note_id: 'n1', name: 'Note \\emph{one}', text: 'About \\ref{note:n1}.' } },
                person: {}, topic: {},
            } });
            const note = zoodb.objects.note.n1;
            assert.strictEqual(note.name.standalone, false);
            assert.strictEqual(zoodb.zoo_flm_engine.tables.index.default.find( (e) => e.label === 'note:n1' ).display,
                               'n1');
            const out = zoodb.zoo_flm_engine.render_document({
                compose: ({ ref, rdr }) => `${ref('note', 'n1')}|${rdr(note.text)}`,
            });
            assert.deepStrictEqual(out.diagnostics, []);
            assert.match(out.html, /^<a href="\/note\/n1" class="href-ref ref-note">n1<\/a>\|About <a class="flm-pres-link" href="\/note\/n1"[^>]*>n1<\/a>\.$/);
        });

        it('a reference to nothing is a warning on its object at processing', async function () {
            const zoodb = await fresh();
            await zoodb.load_data({ objects: {
                person: {
                    alice: alice_raw(),
                    carol: carol({ biography: 'See \\ref{sec:nowhere}, \\ref{person:alice} and \\ref{person:zed}.' }),
                },
                topic: {},
            } });
            const diagnostics = zoodb.objects.person.carol._zoodb.flm_diagnostics;
            assert.deepStrictEqual(diagnostics.map( (d) => `${d.severity} ${d.identifier}` ),
                                   ['warning zoodb.refs.unresolved', 'warning zoodb.refs.unresolved']);
            assert.match(diagnostics[0].message, /‘sec:nowhere’/);
            assert.match(diagnostics[1].message, /‘person:zed’/);
            assert.strictEqual(diagnostics[0].origin.label, 'people/carol.yml#biography');
        });

        it('under continue: the parse errors of ad hoc fragments and the citations not retrieved', async function () {
            const zoodb = await fresh({ continue_with_errors: true });
            await zoodb.load_data({ objects: { person: { carol: carol() }, topic: {} } });
            const processor = zoodb.zoo_flm_processor;
            const f = processor.compile_flm_fragment('Chapter \\nosuch, citing \\cite{custom:missing}.',
                                                     { origin: 'handbook/chapter-2' });
            const cap_saved = console.error;
            console.error = () => {};
            try {
                await processor.process_auxiliary_resources();
            } finally {
                console.error = cap_saved;
            }
            assert.deepStrictEqual(processor.diagnostics.map( (d) => [d.severity, d.identifier, d.origin.label] ), [
                ['error', 'core.specs.unresolvable-command', 'handbook/chapter-2'],
                ['warning', 'zoodb.citations.retrieve-failed', 'citation:custom:missing'],
            ]);
            assert.match(processor.diagnostics[1].message, /‘custom:missing’.*cited in handbook\/chapter-2/);
            processor.release_flm_fragments(f);
        });

        it('writes plain text as FLM text', function () {
            assert.strictEqual(flm_text_of_plain_text('code_id-1'), 'code_id-1');
            assert.strictEqual(flm_text_of_plain_text('a{b}%#&$\\'), 'a\\{b\\}\\%\\#\\&\\$\\textbackslash{}');
            assert.strictEqual(flm_text_of_plain_text('a~b'), '\\begin{verbatimtext}a~b\\end{verbatimtext}');
            // what FLM typesets is left as it is
            assert.strictEqual(flm_text_of_plain_text('a--b "c"'), 'a--b "c"');
        });
    });
});
