#!/usr/bin/env node
// Builds the Rust bindings of the cargo workspace in rust/ with wasm-pack and
// regenerates the committed, environment-neutral modules:
//
//   citations  rust/zoodb-autocitefetch-wasm/  ->  src/citationmanager/_wasm/
//              (the .wasm inlined as base64)
//   flm        rust/zoodb-flm-wasm/            ->  src/zooflm/_wasm/
//              (the .wasm file itself, fetched or read by the loaders)
//
// Usage: yarn build:wasm [citations|flm]...   (no name: both)
//
// Prerequisites: Rust stable with the wasm32-unknown-unknown target, and
// wasm-pack (which fetches a matching wasm-bindgen-cli and wasm-opt itself).
// See rust/README.md, and dev-docs/AutocitefetchImplementationPlan.md,
// section 7.2.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo_root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rust_dir = path.join(repo_root, 'rust');
const lock_path = path.join(rust_dir, 'Cargo.lock');

const BANNER = '// GENERATED FILE — do not edit; run yarn build:wasm\n';

// Invariant 8 of the autocitefetch brief, for every generated glue file:
// tokens that must not appear in the shipped JavaScript. `Buffer` is matched
// as a whole word (the Node global): the wasm-bindgen glue legitimately calls
// the Fetch API's `Response.arrayBuffer()`.
const FORBIDDEN = /import\.meta|require\(|process\.|\bBuffer\b|__dirname|node:|\bfs\b/;

// One entry per crate of the workspace: the crate's directory under rust/
// (also its package name), wasm-pack's output name, the output directory of
// the committed module, and how the binary ships (`base64`: inlined in a JS
// module; `file`: the .wasm file copied beside the glue).
const TARGETS = {
    citations: {
        crate: 'zoodb-autocitefetch-wasm',
        out_name: 'autocitefetch_wasm',
        out_dir: path.join(repo_root, 'src', 'citationmanager', '_wasm'),
        ships: 'base64',
        crate_info: (lock) => ({ autocitefetch: lock_version(lock, 'autocitefetch') }),
    },
    flm: {
        crate: 'zoodb-flm-wasm',
        out_name: 'zoodb_flm_wasm',
        out_dir: path.join(repo_root, 'src', 'zooflm', '_wasm'),
        ships: 'file',
        crate_info: (lock) => ({
            flm_core: lock_version(lock, 'flm-core'),
            // A path dependency has no `source` in the lock.
            flm_core_source: lock_source(lock, 'flm-core') ?? 'path',
        }),
    },
};

function fail(msg) {
    console.error(`build_wasm: error: ${msg}`);
    process.exit(1);
}

function usage() {
    return `usage: yarn build:wasm [${Object.keys(TARGETS).join('|')}]...  (no name: all)`;
}

// --- arguments -----------------------------------------------------------------

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
    console.log(usage());
    process.exit(0);
}
for (const a of args) {
    if (!Object.hasOwn(TARGETS, a)) {
        fail(`unknown module \`${a}\`\n${usage()}`);
    }
}
const selected = args.length ? [...new Set(args)] : Object.keys(TARGETS);

// --- Cargo.lock ------------------------------------------------------------------

/** The `[[package]]` entries of a `Cargo.lock`: `{ name, version, source }`. */
function lock_packages(lock) {
    return lock.split(/^\[\[package\]\]$/m).slice(1).map( (block) => {
        const field = (key) => {
            const m = new RegExp(`^${key} = "([^"]*)"$`, 'm').exec(block);
            return m ? m[1] : null;
        };
        return { name: field('name'), version: field('version'), source: field('source') };
    } );
}

function lock_version(lock, name) {
    return lock_packages(lock).find( (p) => p.name === name )?.version ?? null;
}

function lock_source(lock, name) {
    return lock_packages(lock).find( (p) => p.name === name )?.source ?? null;
}

// --- 0. toolchain checks ---------------------------------------------------

{
    const r = spawnSync('wasm-pack', ['--version'], { cwd: rust_dir, encoding: 'utf-8' });
    if (r.error || r.status !== 0) {
        fail('`wasm-pack` was not found on PATH. Install it with `cargo install wasm-pack` '
             + '(see rust/README.md).');
    }
    console.log(`build_wasm: using ${r.stdout.trim()}`);
}
{
    // rust/rust-toolchain.toml requests the target; check that it is installed.
    const r = spawnSync('rustup', ['target', 'list', '--installed'],
                        { cwd: rust_dir, encoding: 'utf-8' });
    if (!r.error && r.status === 0) {
        if (!r.stdout.split(/\s+/).includes('wasm32-unknown-unknown')) {
            fail('the Rust target `wasm32-unknown-unknown` is not installed. '
                 + 'Install it with `rustup target add wasm32-unknown-unknown`.');
        }
    } else {
        console.warn('build_wasm: warning: `rustup` not available; cannot check that the '
                     + '`wasm32-unknown-unknown` target is installed.');
    }
}

// --- one module -------------------------------------------------------------------

function check_forbidden(files) {
    const bad = [];
    for (const f of files) {
        const lines = fs.readFileSync(f, 'utf-8').split('\n');
        lines.forEach((line, i) => {
            const m = FORBIDDEN.exec(line);
            if (m) {
                bad.push(`  ${path.relative(repo_root, f)}:${i + 1}: \`${m[0]}\``);
            }
        });
    }
    if (bad.length) {
        fail(`generated module is not environment-neutral (invariant 8):\n${bad.join('\n')}`);
    }
}

function build(key) {
    const { crate, out_name, out_dir, ships, crate_info } = TARGETS[key];
    const crate_dir = path.join(rust_dir, crate);
    const pkg_dir = path.join(rust_dir, 'target', 'pkg', crate);
    const t0 = Date.now();

    // 1. wasm-pack build
    console.log(`build_wasm: building ${key} (rust/${crate})`);
    const r = spawnSync('wasm-pack', [
        'build', crate_dir, '--release', '--target', 'web',
        '--out-dir', pkg_dir, '--out-name', out_name,
    ], { cwd: rust_dir, stdio: 'inherit' });
    if (r.error || r.status !== 0) {
        fail(`wasm-pack build of rust/${crate} failed${r.error ? `: ${r.error.message}` : ''}.`);
    }

    // 2. copy glue and types (never package.json, .gitignore or README)
    fs.mkdirSync(out_dir, { recursive: true });
    const glue_src = path.join(pkg_dir, `${out_name}.js`);
    const dts_src = path.join(pkg_dir, `${out_name}.d.ts`);
    const wasm_src = path.join(pkg_dir, `${out_name}_bg.wasm`);
    for (const f of [glue_src, dts_src, wasm_src]) {
        if (!fs.existsSync(f)) {
            fail(`expected wasm-pack output ${path.relative(repo_root, f)} is missing.`);
        }
    }

    let glue = fs.readFileSync(glue_src, 'utf-8');
    // Strip the default-path fallback if wasm-pack left it in.
    if (/import\.meta/.test(glue)) {
        console.warn(`build_wasm: warning: ${key} glue contains \`import.meta\` `
                     + '(omit-default-module-path ignored?); stripping the default-path fallback.');
        glue = glue.replace(
            /\n[ \t]*if \(typeof module_or_path === ['"]undefined['"]\) \{\s*module_or_path = new URL\([^)]*import\.meta\.url\);\s*\}/g,
            ''
        );
    }
    const glue_out = path.join(out_dir, `${out_name}.js`);
    const dts_out = path.join(out_dir, `${out_name}.d.ts`);
    fs.writeFileSync(glue_out, BANNER + glue);
    fs.writeFileSync(dts_out, BANNER + fs.readFileSync(dts_src, 'utf-8'));

    // 3. the binary
    const wasm_bytes = fs.readFileSync(wasm_src);
    const checked = [glue_out];
    let b64_out = null;
    if (ships === 'base64') {
        // The base64 alphabet can form a forbidden token by chance (e.g. `/fs+`
        // matches `\bfs\b`). Escape the first character of any such accidental
        // match as \uXXXX: the JS string value is unchanged, but the source text
        // stays free of the tokens a textual check looks for.
        const b64 = wasm_bytes.toString('base64').replace(
            /\b(?:Buffer|fs)\b/g,
            (m) => `\\u${m.charCodeAt(0).toString(16).padStart(4, '0')}${m.slice(1)}`
        );
        b64_out = path.join(out_dir, `${out_name}_bg.b64.js`);
        fs.writeFileSync(b64_out, `${BANNER}export default "${b64}";\n`);
        checked.push(b64_out);
    } else {
        fs.writeFileSync(path.join(out_dir, `${out_name}_bg.wasm`), wasm_bytes);
    }

    // 4. verify invariant 8 on the generated JavaScript
    check_forbidden(checked);

    // 5. BUILD_INFO.json
    const lock = fs.readFileSync(lock_path, 'utf-8');
    const build_info = {
        binding: { name: crate, version: lock_version(lock, crate) },
        ...crate_info(lock),
        wasm_bindgen: lock_version(lock, 'wasm-bindgen'),
        wasm_size_bytes: wasm_bytes.length,
        ...(b64_out ? { b64_module_size_bytes: fs.statSync(b64_out).size } : {}),
        build_date: new Date().toISOString(),
    };
    for (const [k, v] of Object.entries({ ...build_info, binding: build_info.binding.version })) {
        if (v === null) {
            fail(`could not read the ${k} version from rust/Cargo.lock.`);
        }
    }
    fs.writeFileSync(path.join(out_dir, 'BUILD_INFO.json'),
                     JSON.stringify(build_info, null, 4) + '\n');

    const seconds = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`build_wasm: wrote ${path.relative(repo_root, out_dir)}/ `
                + `(wasm ${build_info.wasm_size_bytes} bytes`
                + (b64_out ? `, base64 module ${build_info.b64_module_size_bytes} bytes` : '')
                + `) in ${seconds} s`);
}

for (const key of selected) {
    build(key);
}
