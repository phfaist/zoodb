// Direct tests of the FLM wasm module (rust/zoodb-flm-wasm → src/zooflm/_wasm/),
// loaded through the package's internal default loader (under Node, the file
// that reads the binary).  The engine's own behaviour is tested natively
// (`cargo test` in rust/); these check the module, its internal loaders and
// its surface.

import * as assert from 'assert';
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { instantiate_zoodb_flm_wasm, wasm_url } from '../src/zooflm/_load_wasm.js';
import { load_zoodb_flm_wasm } from '../src/zooflm/_load_wasm_default.js';


const zooflm_dir = fileURLToPath(new URL('../src/zooflm/', import.meta.url));
const wasm_dir = path.join(zooflm_dir, '_wasm');
const wasm_file = path.join(wasm_dir, 'zoodb_flm_wasm_bg.wasm');
const lock_file = fileURLToPath(new URL('../rust/Cargo.lock', import.meta.url));

// The tokens the generated JavaScript, the neutral instantiation
// (_load_wasm.js) and the browser variant of the default loader must not
// contain (as for the citation module); _load_wasm.js alone may name the
// module's URL, in the one form `new URL(…, import.meta.url)`.
const FORBIDDEN = /import\.meta|require\(|process\.|\bBuffer\b|__dirname|node:|\bfs\b/;
const ALLOWED_IN_LOADER = /new URL\([^)]*import\.meta\.url\)/g;

function lock_version(lock, name)
{
    for (const block of lock.split(/^\[\[package\]\]$/m).slice(1)) {
        if (new RegExp(`^name = "${name}"$`, 'm').test(block)) {
            return /^version = "([^"]*)"$/m.exec(block)?.[1] ?? null;
        }
    }
    return null;
}


describe('FLM wasm module', function () {

    this.timeout(30000);

    let wasm;
    before(async function () {
        wasm = await load_zoodb_flm_wasm();
    });

    describe('generated files and loaders', function () {

        it('are environment-neutral', function () {
            const files = fs.readdirSync(wasm_dir).filter( (f) => f.endsWith('.js') )
                  .map( (f) => path.join(wasm_dir, f) );
            assert.ok(files.length >= 1);
            files.push(path.join(zooflm_dir, '_load_wasm.js'),
                       path.join(zooflm_dir, '_load_wasm_default.browser.js'));
            let urls = 0;
            for (const f of files) {
                const is_loader = f.endsWith('_load_wasm.js');
                const lines = fs.readFileSync(f, 'utf-8').split('\n');
                lines.forEach( (line, i) => {
                    if (is_loader) {
                        urls += (line.match(ALLOWED_IN_LOADER) ?? []).length;
                        line = line.replace(ALLOWED_IN_LOADER, '');
                    }
                    const m = FORBIDDEN.exec(line);
                    assert.strictEqual(m, null, `${f}:${i + 1}: forbidden token ${m && m[0]}`);
                } );
            }
            assert.strictEqual(urls, 1, '_load_wasm.js names the module URL once');
        });

        it('BUILD_INFO.json is consistent with the lock and the binary', function () {
            const info = JSON.parse(fs.readFileSync(path.join(wasm_dir, 'BUILD_INFO.json'), 'utf-8'));
            const lock = fs.readFileSync(lock_file, 'utf-8');
            assert.strictEqual(info.binding.name, 'zoodb-flm-wasm');
            assert.strictEqual(info.binding.version, lock_version(lock, 'zoodb-flm-wasm'));
            assert.strictEqual(info.flm_core, lock_version(lock, 'flm-core'));
            assert.strictEqual(info.wasm_bindgen, lock_version(lock, 'wasm-bindgen'));
            assert.strictEqual(info.wasm_size_bytes, fs.statSync(wasm_file).size);
            assert.strictEqual(typeof info.flm_core_source, 'string');
        });

        it('the .d.ts declares the shapes of every method', function () {
            const dts = fs.readFileSync(path.join(wasm_dir, 'zoodb_flm_wasm.d.ts'), 'utf-8');
            for (const name of ['CoreDiagnostic', 'CoreConfig', 'ParsedOut', 'HtmlOut', 'TextOut', 'LatexOut',
                                'ScanOut', 'TruncateOut', 'FieldsOut', 'Definition']) {
                assert.match(dts, new RegExp(`export interface ${name} \\{`), name);
            }
            const methods = dts.slice(dts.indexOf('export class ZooFlmCore'), dts.indexOf('export function start'));
            assert.match(methods, /parse\(text: string, origin: string, layout: FragmentLayoutName\): ParsedOut;/);
            assert.match(methods, /render_html\(handles: Uint32Array \| number\[\], options: RenderHtmlOptions \| null \| undefined\): HtmlOut;/);
            assert.doesNotMatch(methods, /\): any;|: any\b/);
        });

        it('wasm_url points at the binary', function () {
            assert.strictEqual(fileURLToPath(wasm_url), wasm_file);
        });

        it('instantiates with at least 64 MiB of linear memory (the linked stack)', async function () {
            // Once instantiated, the glue's init returns the instance's exports.
            const exports = await wasm.default();
            assert.ok(exports.memory.buffer.byteLength >= 64 * 1024 * 1024,
                      `linear memory is ${exports.memory.buffer.byteLength} bytes`);
        });

        it('the browser variant refuses a file: URL; the instantiation forgets a failure', function () {
            // In a fresh process: in this one the module is already instantiated.
            const neutral = new URL('../src/zooflm/_load_wasm.js', import.meta.url).href;
            const browser = new URL('../src/zooflm/_load_wasm_default.browser.js', import.meta.url).href;
            const r = spawnSync(process.execPath, [
                '--input-type=module', '-e',
                `import { readFileSync } from 'fs';
                 import { instantiate_zoodb_flm_wasm } from ${JSON.stringify(neutral)};
                 import { load_zoodb_flm_wasm } from ${JSON.stringify(browser)};
                 const outcome = (p) => p.then( (ns) => ({ resolved: typeof ns.ZooFlmCore }),
                                                (err) => ({ rejected: err.constructor.name, message: err.message }) );
                 const file_url = await outcome(load_zoodb_flm_wasm());
                 const bad_bytes = await outcome(instantiate_zoodb_flm_wasm(new Uint8Array([0, 1, 2, 3])));
                 const bytes = await outcome(instantiate_zoodb_flm_wasm(readFileSync(${JSON.stringify(wasm_file)})));
                 console.log(JSON.stringify({ file_url, bad_bytes, bytes }));`,
            ], { encoding: 'utf-8' });
            assert.strictEqual(r.status, 0, r.stderr);
            const { file_url, bad_bytes, bytes } = JSON.parse(r.stdout);
            assert.strictEqual(file_url.rejected, 'Error');
            assert.match(file_url.message, /browser variant/);
            assert.match(file_url.message, /cannot fetch the local file file:\/\//);
            assert.match(file_url.message, /"browser" field/);
            assert.match(file_url.message, /Node loads src\/zooflm\/_load_wasm_default\.js/);
            assert.strictEqual(bad_bytes.rejected, 'CompileError');
            assert.deepStrictEqual(bytes, { resolved: 'function' });
        });

        it('the instantiation from the bytes resolves to the default loader\'s namespace', async function () {
            const ns = await instantiate_zoodb_flm_wasm(fs.readFileSync(wasm_file));
            assert.strictEqual(ns, wasm);
            assert.strictEqual(typeof ns.ZooFlmCore, 'function');
        });
    });

    describe('ZooFlmCore', function () {

        let engine;
        before(function () {
            engine = new wasm.ZooFlmCore({});
        });
        after(function () {
            engine.free();
        });

        it('version() gives the binding\'s and flm-core\'s versions, as in Cargo.lock', function () {
            const lock = fs.readFileSync(lock_file, 'utf-8');
            assert.deepStrictEqual(wasm.ZooFlmCore.version(), {
                binding: lock_version(lock, 'zoodb-flm-wasm'),
                flm_core: lock_version(lock, 'flm-core'),
            });
        });

        it('features() lists the standard features with their settings schemas', function () {
            const features = wasm.ZooFlmCore.features();
            assert.ok(Array.isArray(features));
            assert.ok(features.length >= 30, `${features.length} features`);
            for (const f of features) {
                assert.strictEqual(typeof f.name, 'string');
                assert.ok(f.schema === null || (typeof f.schema === 'object' && !Array.isArray(f.schema)),
                          `schema of ${f.name}`);
            }
            const names = features.map( (f) => f.name );
            for (const name of ['math', 'citations', 'graphics']) {
                assert.ok(names.includes(name), `${name} in ${names.join(', ')}`);
            }
            assert.ok(features.some( (f) => f.schema !== null ));
        });

        it('builds without diagnostics', function () {
            assert.deepStrictEqual(engine.build_diagnostics(), []);
        });

        it('parses and renders HTML', function () {
            const parsed = engine.parse('Hello \\emph{world}', 'test.yml#name', 'inline');
            assert.strictEqual(typeof parsed.handle, 'number');
            assert.deepStrictEqual(parsed.diagnostics, []);
            const out = engine.render_html([parsed.handle]);
            assert.deepStrictEqual(out.diagnostics, []);
            assert.strictEqual(out.has_errors, false);
            assert.strictEqual(out.trees.length, 1);
            // flm-core writes its presentation attributes on the element.
            assert.match(out.trees[0], /^Hello <em\b[^>]*>world<\/em>$/);
        });

        it('a misspelled key is refused with its name', function () {
            assert.throws( () => new wasm.ZooFlmCore({ dolar_math: true }), /dolar_math/ );
            // A key set to undefined or null is a key left out.
            new wasm.ZooFlmCore({ dollar_math: undefined, srcset: null }).free();
            assert.throws( () => new wasm.ZooFlmCore({ srcset: { image_max_zoom: 2 } }), /image_max_zoom/ );
            const parsed = engine.parse('x', 'test.yml#name', 'inline');
            assert.throws( () => engine.render_html([parsed.handle], { titel: 'x' }), /titel/ );
            assert.throws( () => engine.render_text([parsed.handle], { per_trees: true }), /per_trees/ );
            assert.throws( () => engine.set_citations([{ key: 'a:b', txt: 'T' }]), /txt/ );
        });

        it('a wrong setting throws, naming the feature and the key', function () {
            assert.throws(
                () => new wasm.ZooFlmCore({ settings: { math: { no_such_key: 1 } } }),
                (err) => {
                    assert.ok(err instanceof Error);
                    assert.match(err.message, /`math`/);
                    assert.match(err.message, /no_such_key/);
                    return true;
                }
            );
        });

        it('scans two fragments as one document, then renders their text', function () {
            const a = engine.parse('A display \\begin{equation}x=1\\label{eq:x}\\end{equation} here.',
                                   'a.yml#description', 'auto');
            const b = engine.parse('See \\ref{eq:x}.', 'b.yml#description', 'auto');
            assert.deepStrictEqual([a.diagnostics, b.diagnostics], [[], []]);

            const scan = engine.scan([a.handle, b.handle], []);
            assert.deepStrictEqual(scan.diagnostics, []);
            assert.strictEqual(scan.trees.length, 2);
            assert.deepStrictEqual(scan.trees[0].labels, [{ label: 'eq:x', anchor: 'eq-x', display: null }]);
            assert.deepStrictEqual(scan.trees[1].refs, [{ label: 'eq:x', resolved: true }]);
            assert.deepStrictEqual(scan.duplicate_labels, []);

            const text = engine.render_text([a.handle, b.handle]);
            assert.deepStrictEqual(text.diagnostics, []);
            assert.strictEqual(typeof text.text, 'string');
            assert.ok(text.text.includes('A display') && text.text.includes('See'), text.text);
            assert.ok(!/<[a-z]/i.test(text.text), `no markup: ${text.text}`);
            assert.ok(!text.text.includes('\\ref') && !text.text.includes('eq:x'),
                      `the reference resolves: ${text.text}`);

            // Alone, the reference does not resolve: a Warning for text, also
            // when an options object is given (the struct's default applies).
            for (const options of [undefined, {}, { width: null },
                                   { per_tree: undefined, unresolved_refs_warning: null }]) {
                const alone = engine.render_text([b.handle], options);
                assert.strictEqual(alone.has_errors, false, JSON.stringify(options));
                assert.deepStrictEqual(alone.diagnostics.map( (d) => `${d.severity} ${d.identifier}` ),
                                       ['warning flm.refs.unresolved']);
            }
        });
    });
});
