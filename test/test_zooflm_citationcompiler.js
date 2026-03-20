import * as assert from 'assert';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const test_data_dir = path.join(__dirname, 'test_data');

import {
    ZooFLMEnvironment,
} from '../src/zooflm/_environment.js';

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

        it('installs the FLM output format on CSL', function () {
            const env = new ZooFLMEnvironment();
            install_csl_flm_output_format(env);

            assert.ok(Object.hasOwn(CSL.Output.Formats, 'flm'));
        });

        it('REGRESSION: text_escape handles whitespace-only text', function () {
            const env = new ZooFLMEnvironment();
            install_csl_flm_output_format(env);

            const text_escape = CSL.Output.Formats.flm.text_escape;

            // Whitespace-only text should NOT throw (previously used .strip() instead of .trim())
            const result = text_escape('   ');
            assert.strictEqual(result, '   ');
        });

        it('text_escape handles empty string', function () {
            const env = new ZooFLMEnvironment();
            install_csl_flm_output_format(env);

            const text_escape = CSL.Output.Formats.flm.text_escape;
            const result = text_escape('');
            assert.strictEqual(result, '');
        });

        it('text_escape handles null/undefined', function () {
            const env = new ZooFLMEnvironment();
            install_csl_flm_output_format(env);

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
