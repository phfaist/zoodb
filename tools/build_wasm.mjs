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
//
// The build machine's paths: rustc writes source paths into the binaries
// (panic locations). Each build passes `--remap-path-prefix` flags, computed
// here and never committed, through CARGO_ENCODED_RUSTFLAGS: the workspace
// root becomes `zoodb-rust`, the root of each path dependency its package's
// name, cargo's registry sources `cargo-registry` (git checkouts `cargo-git`),
// the toolchain's sysroot `rust-sysroot`. Rust flags already given through
// CARGO_ENCODED_RUSTFLAGS, RUSTFLAGS or cargo's configuration environment
// variables are kept; rustflags in a cargo configuration file are refused
// (CARGO_ENCODED_RUSTFLAGS would silently replace them). Each binary is then
// checked: no `/Users/`, `/home/` or `C:\` left. Changing the flags makes
// cargo rebuild from scratch once.
//
// BUILD_INFO.json records, for each path dependency of the crate whose root is
// in a git checkout, the checkout's commit and whether the dependency's own
// directory had uncommitted changes (`<name>_git: { commit, dirty }`), since the
// version alone does not say which sources were built.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
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

// Byte strings that betray an absolute path of the build machine in a binary.
const BUILD_PATH_MARKERS = ['/Users/', '/home/', 'C:\\'];

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

// --- the build machine's paths -------------------------------------------------

/** Runs a command in rust/ and returns its standard output; fails on any error. */
function run_capture(cmd, cmd_args, what) {
    const r = spawnSync(cmd, cmd_args, {
        cwd: rust_dir, encoding: 'utf-8', maxBuffer: 256 * 1024 * 1024,
    });
    if (r.error || r.status !== 0) {
        fail(`${what} failed${r.error ? `: ${r.error.message}` : ''}`
             + `${r.stderr ? `\n${r.stderr.trim()}` : ''}`);
    }
    return r.stdout;
}

function cargo_home() {
    return process.env.CARGO_HOME || path.join(os.homedir(), '.cargo');
}

/** The output of `cargo metadata` for the workspace, for the wasm target. */
function cargo_metadata() {
    return JSON.parse(run_capture(
        'cargo', ['metadata', '--format-version', '1', '--filter-platform', 'wasm32-unknown-unknown'],
        '`cargo metadata`'
    ));
}

/**
 * The `[from, to]` pairs of the `--remap-path-prefix` flags, sorted so that
 * the more specific (longer) prefixes come last: rustc applies the last
 * remapping that matches.
 */
function compute_remappings(meta) {
    const remap = new Map();
    remap.set(meta.workspace_root, 'zoodb-rust');
    const members = new Set(meta.workspace_members);
    const registry_src = path.join(cargo_home(), 'registry', 'src');
    for (const pkg of meta.packages) {
        const pkg_dir = path.dirname(pkg.manifest_path);
        if (pkg.source == null) {
            // a path dependency (the members are under the workspace root)
            if (!members.has(pkg.id)) {
                remap.set(pkg_dir, pkg.name);
            }
        } else if (/^(registry|sparse)\+/.test(pkg.source)) {
            // $CARGO_HOME/registry/src/<index>/<name>-<version>/
            remap.set(path.dirname(pkg_dir), 'cargo-registry');
        }
    }
    // the registry's source directories already on this machine
    if (fs.existsSync(registry_src)) {
        for (const ent of fs.readdirSync(registry_src, { withFileTypes: true })) {
            if (ent.isDirectory()) {
                remap.set(path.join(registry_src, ent.name), 'cargo-registry');
            }
        }
    }
    remap.set(path.join(cargo_home(), 'git', 'checkouts'), 'cargo-git');
    const sysroot = run_capture('rustc', ['--print', 'sysroot'], '`rustc --print sysroot`').trim();
    if (!sysroot) {
        fail('`rustc --print sysroot` printed nothing.');
    }
    remap.set(sysroot, 'rust-sysroot');
    return [...remap].sort( ([a], [b]) => a.length - b.length );
}

/**
 * The path dependencies (packages without a `source` that are not workspace
 * members) that the workspace member `crate` builds with, directly or not,
 * dev-dependencies left out: `[{ name, root }]`, sorted by name.
 */
function path_dependencies(meta, crate) {
    const members = new Set(meta.workspace_members);
    const packages = new Map(meta.packages.map( (p) => [p.id, p] ));
    const nodes = new Map((meta.resolve?.nodes ?? []).map( (n) => [n.id, n] ));
    const start = meta.packages.find( (p) => p.name === crate && members.has(p.id) );
    if (start == null) {
        fail(`\`cargo metadata\` does not list the workspace member ${crate}.`);
    }
    const found = [];
    const seen = new Set();
    const stack = [start.id];
    while (stack.length) {
        const id = stack.pop();
        if (seen.has(id)) {
            continue;
        }
        seen.add(id);
        const pkg = packages.get(id);
        if (pkg.source == null && !members.has(id)) {
            found.push({ name: pkg.name, root: path.dirname(pkg.manifest_path) });
        }
        for (const dep of nodes.get(id)?.deps ?? []) {
            if (dep.dep_kinds.some( (k) => k.kind !== 'dev' )) {
                stack.push(dep.pkg);
            }
        }
    }
    return found.sort( (a, b) => a.name.localeCompare(b.name) );
}

/**
 * The git state of `dir` in the checkout that holds it: `{ commit, dirty }`
 * (`commit` the checkout's `HEAD`; `dirty` when `git status --porcelain -- dir`
 * lists anything, that is, when a file under `dir` differs from the commit), or
 * `null` when `dir` is not in a git checkout. Read-only: `--no-optional-locks`
 * keeps `git status` from refreshing the checkout's index.
 */
function git_state(dir) {
    const git = (git_args) => spawnSync('git', ['--no-optional-locks', '-C', dir, ...git_args],
                                        { encoding: 'utf-8', maxBuffer: 64 * 1024 * 1024 });
    const head = git(['rev-parse', '--verify', 'HEAD']);
    if (head.error || head.status !== 0) {
        return null;
    }
    const status = git(['status', '--porcelain', '--', dir]);
    if (status.error || status.status !== 0) {
        fail(`\`git status\` failed in ${dir}${status.stderr ? `:\n${status.stderr.trim()}` : ''}`);
    }
    return { commit: head.stdout.trim(), dirty: status.stdout.trim() !== '' };
}

/** The BUILD_INFO.json entries `<name>_git` of the crate's path dependencies. */
function path_dependencies_git_info(meta, crate) {
    const info = {};
    for (const { name, root } of path_dependencies(meta, crate)) {
        const state = git_state(root);
        if (state != null) {
            info[`${name.replace(/-/g, '_')}_git`] = state;
        }
    }
    return info;
}

/** The cargo configuration files that cargo would read for a build in `dir`. */
function cargo_config_files(dir) {
    const files = [];
    for (let d = path.resolve(dir); ; d = path.dirname(d)) {
        files.push(path.join(d, '.cargo', 'config.toml'), path.join(d, '.cargo', 'config'));
        if (path.dirname(d) === d) {
            break;
        }
    }
    files.push(path.join(cargo_home(), 'config.toml'), path.join(cargo_home(), 'config'));
    return [...new Set(files)];
}

/**
 * The Rust flags the builds get otherwise, which CARGO_ENCODED_RUSTFLAGS would
 * replace: kept in front of the remapping flags. Cargo's order of precedence:
 * CARGO_ENCODED_RUSTFLAGS, RUSTFLAGS, then its configuration (target rustflags
 * before build rustflags). Rustflags in a configuration file are refused.
 */
function existing_rustflags(crate_dirs) {
    const env = process.env;
    if (env.CARGO_ENCODED_RUSTFLAGS != null) {
        return env.CARGO_ENCODED_RUSTFLAGS === '' ? [] : env.CARGO_ENCODED_RUSTFLAGS.split('\x1f');
    }
    if (env.RUSTFLAGS != null) {
        return env.RUSTFLAGS.split(/\s+/).filter(Boolean);
    }
    const with_rustflags = new Set();
    for (const dir of crate_dirs) {
        for (const f of cargo_config_files(dir)) {
            let text;
            try {
                text = fs.readFileSync(f, 'utf-8');
            } catch {
                continue;
            }
            if (text.split('\n').some( (line) => /\brustflags\b/.test(line.replace(/#.*/, '')) )) {
                with_rustflags.add(f);
            }
        }
    }
    if (with_rustflags.size) {
        fail(`rustflags are set in ${[...with_rustflags].join(', ')}; the build passes its `
             + 'path remapping through CARGO_ENCODED_RUSTFLAGS, which would replace them. '
             + 'Give them in RUSTFLAGS instead (they are then kept).');
    }
    const from_config = env.CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_RUSTFLAGS ?? env.CARGO_BUILD_RUSTFLAGS;
    return (from_config ?? '').split(/\s+/).filter(Boolean);
}

/** Fails when `bytes` (a binary about to be committed) holds a build machine path. */
function check_build_paths(bytes, what) {
    const found = [];
    for (const marker of BUILD_PATH_MARKERS) {
        const examples = [];
        let count = 0;
        for (let i = bytes.indexOf(marker); i !== -1; i = bytes.indexOf(marker, i + 1)) {
            count += 1;
            if (examples.length < 3) {
                let end = i;
                while (end < bytes.length && end - i < 160 && bytes[end] >= 0x20 && bytes[end] < 0x7f) {
                    end += 1;
                }
                examples.push(bytes.toString('latin1', i, end));
            }
        }
        if (count) {
            found.push(`  ${count} × \`${marker}\`, e.g. ${examples.map( (e) => `\`${e}\`` ).join(', ')}`);
        }
    }
    if (found.length) {
        fail(`${what} still holds absolute paths of the build machine (add a remapping to `
             + `tools/build_wasm.mjs):\n${found.join('\n')}`);
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

function build(key, rustflags, meta) {
    const { crate, out_name, out_dir, ships, crate_info } = TARGETS[key];
    const crate_dir = path.join(rust_dir, crate);
    const pkg_dir = path.join(rust_dir, 'target', 'pkg', crate);
    const t0 = Date.now();

    // 1. wasm-pack build
    console.log(`build_wasm: building ${key} (rust/${crate})`);
    const r = spawnSync('wasm-pack', [
        'build', crate_dir, '--release', '--target', 'web',
        '--out-dir', pkg_dir, '--out-name', out_name,
    ], {
        cwd: rust_dir, stdio: 'inherit',
        env: { ...process.env, CARGO_ENCODED_RUSTFLAGS: rustflags.join('\x1f') },
    });
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

    // the binary, checked before anything is written to src/
    const wasm_bytes = fs.readFileSync(wasm_src);
    check_build_paths(wasm_bytes, `the ${key} binary ${path.relative(repo_root, wasm_src)}`);

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
        ...path_dependencies_git_info(meta, crate),
        wasm_bindgen: lock_version(lock, 'wasm-bindgen'),
        paths_remapped: true,
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

// --- the builds ----------------------------------------------------------------------

const meta = cargo_metadata();
const remappings = compute_remappings(meta);
for (const [from, to] of remappings) {
    console.log(`build_wasm: remapping ${from} -> ${to}`);
}
const rustflags = [
    ...existing_rustflags(selected.map( (key) => path.join(rust_dir, TARGETS[key].crate) )),
    ...remappings.map( ([from, to]) => `--remap-path-prefix=${from}=${to}` ),
];

for (const key of selected) {
    build(key, rustflags, meta);
}
