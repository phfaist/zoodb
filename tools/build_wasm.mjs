#!/usr/bin/env node
// Builds the Rust binding in rust/ with wasm-pack and regenerates the
// committed, environment-neutral module in src/citationmanager/_wasm/.
//
// Usage: yarn build:wasm
//
// Prerequisites: Rust stable with the wasm32-unknown-unknown target, and
// wasm-pack (which fetches a matching wasm-bindgen-cli and wasm-opt itself).
// See dev-docs/AutocitefetchImplementationPlan.md, section 7.2.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo_root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rust_dir = path.join(repo_root, 'rust');
const pkg_dir = path.join(rust_dir, 'target', 'pkg');
const out_dir = path.join(repo_root, 'src', 'citationmanager', '_wasm');
const out_name = 'autocitefetch_wasm';

const BANNER = '// GENERATED FILE — do not edit; run yarn build:wasm\n';

// Invariant 8 of the brief: tokens that must not appear in the shipped module.
// `Buffer` is matched as a whole word (the Node global): the wasm-bindgen glue
// legitimately calls the Fetch API's `Response.arrayBuffer()`.
const FORBIDDEN = /import\.meta|require\(|process\.|\bBuffer\b|__dirname|node:|\bfs\b/;

function fail(msg) {
    console.error(`build_wasm: error: ${msg}`);
    process.exit(1);
}

function run(cmd, args, opts = {}) {
    const res = spawnSync(cmd, args, { cwd: rust_dir, stdio: 'inherit', ...opts });
    if (res.error) {
        return { ok: false, error: res.error, res };
    }
    return { ok: res.status === 0, res };
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

// --- 1. wasm-pack build ------------------------------------------------------

{
    const r = run('wasm-pack', [
        'build', '--release', '--target', 'web',
        '--out-dir', 'target/pkg', '--out-name', out_name,
    ]);
    if (!r.ok) {
        fail(`wasm-pack build failed${r.error ? `: ${r.error.message}` : ''}.`);
    }
}

// --- 2. copy glue and types (6: never copy package.json/.gitignore/README) -----

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

// --- 5 (part). strip the default-path fallback if wasm-pack left it in --------

if (/import\.meta/.test(glue)) {
    console.warn('build_wasm: warning: glue contains `import.meta` '
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

// --- 3. base64 module ------------------------------------------------------------

const wasm_bytes = fs.readFileSync(wasm_src);
// The base64 alphabet can form a forbidden token by chance (e.g. `/fs+`
// matches `\bfs\b`). Escape the first character of any such accidental
// match as \uXXXX: the JS string value is unchanged, but the source text
// stays free of the tokens a textual check looks for.
const b64 = wasm_bytes.toString('base64').replace(
    /\b(?:Buffer|fs)\b/g,
    (m) => `\\u${m.charCodeAt(0).toString(16).padStart(4, '0')}${m.slice(1)}`
);
const b64_out = path.join(out_dir, `${out_name}_bg.b64.js`);
fs.writeFileSync(b64_out, `${BANNER}export default "${b64}";\n`);

// --- 5. verify invariant 8 -------------------------------------------------------

for (const f of [glue_out, b64_out]) {
    const text = fs.readFileSync(f, 'utf-8');
    const lines = text.split('\n');
    const bad = [];
    lines.forEach((line, i) => {
        const m = FORBIDDEN.exec(line);
        if (m) {
            bad.push(`  ${path.relative(repo_root, f)}:${i + 1}: \`${m[0]}\``);
        }
    });
    if (bad.length) {
        fail(`generated module is not environment-neutral (invariant 8):\n${bad.join('\n')}`);
    }
}

// --- 4. BUILD_INFO.json -------------------------------------------------------------

function lock_version(lock, name) {
    const re = new RegExp(`\\[\\[package\\]\\]\\s*\\nname = "${name.replace(/[-]/g, '\\-')}"\\s*\\nversion = "([^"]+)"`);
    const m = re.exec(lock);
    return m ? m[1] : null;
}

const lock = fs.readFileSync(path.join(rust_dir, 'Cargo.lock'), 'utf-8');
const build_info = {
    binding: {
        name: 'zoodb-autocitefetch-wasm',
        version: lock_version(lock, 'zoodb-autocitefetch-wasm'),
    },
    autocitefetch: lock_version(lock, 'autocitefetch'),
    wasm_bindgen: lock_version(lock, 'wasm-bindgen'),
    wasm_size_bytes: wasm_bytes.length,
    b64_module_size_bytes: fs.statSync(b64_out).size,
    build_date: new Date().toISOString(),
};
for (const [k, v] of Object.entries({
    binding: build_info.binding.version,
    autocitefetch: build_info.autocitefetch,
    wasm_bindgen: build_info.wasm_bindgen,
})) {
    if (!v) {
        fail(`could not read the ${k} version from rust/Cargo.lock.`);
    }
}
fs.writeFileSync(path.join(out_dir, 'BUILD_INFO.json'),
                 JSON.stringify(build_info, null, 4) + '\n');

console.log(`build_wasm: wrote ${path.relative(repo_root, out_dir)}/ `
            + `(wasm ${build_info.wasm_size_bytes} bytes, `
            + `base64 module ${build_info.b64_module_size_bytes} bytes)`);
