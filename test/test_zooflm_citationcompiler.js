import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const test_data_dir = path.join(__dirname, 'test_data');

import { load_zoodb_flm_wasm_node } from '../src/zooflm/_load_wasm_node.js';
import { ZooFlmEngine } from '../src/zooflm/engine.js';

import {
    install_csl_flm_output_format,
    CitationCompiler,
} from '../src/zooflm/citationcompiler.js';

import CSL from 'citeproc';


const csl_style = fs.readFileSync(
    path.join(test_data_dir, 'american-physical-society-et-al--patched.csl'),
    { encoding: 'utf-8' },
);

// Mock citation manager
function createMockCitationManager(citations) {
    const db = {};
    for (const c of citations) {
        db[c.id] = c;
    }
    return {
        get_citation_by_id: (id) => db[id] ?? null,
        keys: () => Object.keys(db),
    };
}


describe('zoodb.zooflm.citationcompiler', function () {

    describe('install_csl_flm_output_format', function () {

        let engine;
        let parses;

        before(async function () {
            engine = await ZooFlmEngine.create({ load_wasm: load_zoodb_flm_wasm_node });
            parses = (text) => engine.parses(text);
        });

        after(function () {
            engine?.free();
        });

        it('installs the FLM output format on CSL', function () {
            install_csl_flm_output_format({ parses });

            assert.ok(Object.hasOwn(CSL.Output.Formats, 'flm'));
            assert.throws( () => install_csl_flm_output_format({}), /parses/ );
        });

        it('text_escape keeps valid FLM and escapes the rest, with the last parses() given', function () {
            install_csl_flm_output_format({ parses });
            const text_escape = CSL.Output.Formats.flm.text_escape;
            assert.strictEqual(text_escape('A \\emph{title}'), 'A \\emph{title}');
            assert.strictEqual(text_escape('50 % off'), '50 \\% off');
            assert.strictEqual(text_escape('inline $x$ math'), 'inline \\(x\\) math');
            // an unknown macro is not valid FLM: escaped
            assert.strictEqual(text_escape('a \\nosuch{b}'), 'a \\textbackslash nosuch\\{b\\}');
            // every call sets the function used
            const seen = [];
            install_csl_flm_output_format({ parses: (text) => { seen.push(text); return true; } });
            assert.strictEqual(text_escape('a \\nosuch{b}'), 'a \\nosuch{b}');
            assert.deepStrictEqual(seen, ['a \\nosuch{b}']);
            install_csl_flm_output_format({ parses });
        });

        it('REGRESSION: text_escape handles whitespace-only text', function () {
            install_csl_flm_output_format({ parses });

            const text_escape = CSL.Output.Formats.flm.text_escape;

            // Whitespace-only text should NOT throw (previously used .strip() instead of .trim())
            const result = text_escape('   ');
            assert.strictEqual(result, '   ');
        });

        it('text_escape handles empty string', function () {
            install_csl_flm_output_format({ parses });

            const text_escape = CSL.Output.Formats.flm.text_escape;
            const result = text_escape('');
            assert.strictEqual(result, '');
        });

        it('text_escape handles null/undefined', function () {
            install_csl_flm_output_format({ parses });

            const text_escape = CSL.Output.Formats.flm.text_escape;
            const result = text_escape(null);
            assert.strictEqual(result, '');
        });

    });

    describe('CitationCompiler', function () {

        it('throws without citation_manager', function () {
            assert.throws(() => {
                new CitationCompiler({
                    cache_fs: fs,
                });
            }, /citation manager/i);
        });

        it('basic citation compilation with CSL style', function () {

            const citations = [{
                id: 'manual:test1',
                type: 'article-journal',
                title: 'A Test Article',
                author: [{ family: 'Smith', given: 'John' }],
                issued: { 'date-parts': [[2020]] },
                'container-title': 'Test Journal',
                volume: '1',
                page: '1-10',
                _hash: 'hash1',
            }];

            const cm = createMockCitationManager(citations);

            const compiler = new CitationCompiler({
                citation_manager: cm,
                csl_style,
                cache_fs: fs,
                skip_save_cache: true,
                output_format: 'html',
            });

            compiler.compile_citations([
                { cite_prefix: 'manual', cite_key: 'test1' },
            ]);

            assert.ok(compiler.has_compiled_citation('manual', 'test1'));
            const text = compiler.get_compiled_citation('manual', 'test1');
            assert.ok(text);
            assert.ok(text.includes('Smith'));
        });

        it('citation with missing fields handled gracefully', function () {

            const citations = [{
                id: 'manual:minimal',
                type: 'article-journal',
                title: 'Minimal Entry',
                _hash: 'hash2',
            }];

            const cm = createMockCitationManager(citations);

            const compiler = new CitationCompiler({
                citation_manager: cm,
                csl_style,
                cache_fs: fs,
                skip_save_cache: true,
                output_format: 'html',
            });

            // Should not throw even with minimal citation data
            compiler.compile_citations([
                { cite_prefix: 'manual', cite_key: 'minimal' },
            ]);

            assert.ok(compiler.has_compiled_citation('manual', 'minimal'));
        });

        it('has_compiled_citation returns false for unknown citation', function () {

            const cm = createMockCitationManager([]);

            const compiler = new CitationCompiler({
                citation_manager: cm,
                csl_style,
                cache_fs: fs,
                skip_save_cache: true,
            });

            assert.strictEqual(compiler.has_compiled_citation('arxiv', 'nonexistent'), false);
        });

        it('iter_compiled_citations yields compiled entries', function () {

            const citations = [{
                id: 'manual:test1',
                type: 'article-journal',
                title: 'Article One',
                author: [{ family: 'Doe', given: 'Jane' }],
                issued: { 'date-parts': [[2021]] },
                _hash: 'h1',
            }];

            const cm = createMockCitationManager(citations);

            const compiler = new CitationCompiler({
                citation_manager: cm,
                csl_style,
                cache_fs: fs,
                skip_save_cache: true,
                output_format: 'html',
            });

            compiler.compile_citations([
                { cite_prefix: 'manual', cite_key: 'test1' },
            ]);

            const compiled = [...compiler.iter_compiled_citations()];
            assert.strictEqual(compiled.length, 1);
            assert.strictEqual(compiled[0].cite_prefix, 'manual');
            assert.strictEqual(compiled[0].cite_key, 'test1');
        });

    });

});
