#!/usr/bin/env node
//
// zoodb-migrate-citations-cache: convert a legacy citations cache file
// `cache_downloaded_info.json` (written by @phfaist/zoodb before version 0.2)
// into the `citations.jsonl` cache of the autocitefetch citation retriever.
//
// The conversion goes through the autocitefetch wasm binding (`legacyEntries`
// in `CitationManager.open()`), so the on-disk records are produced by the
// crate itself.  Nothing is fetched.  See
// dev-docs/AutocitefetchImplementationPlan.md, section 7.7.
//
// Node only.  Imports only `node:` builtins and relative files, so that it runs
// both as `node tools/migrate_citations_cache.mjs` and through yarn (PnP).
//

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseArgs } from 'node:util';

import { load_autocitefetch_wasm } from '../src/citationmanager/_load_wasm.js';
import { make_node_cache_fs, make_memory_cache_fs } from '../src/citationmanager/_cachefs.js';


const PROG = 'zoodb-migrate-citations-cache';

const USAGE = `Usage: ${PROG} --cache-dir <dir> [--legacy-file <path>] [--cache-base citations] `
      + `[--prefix <name>=<kind>]... [--drop-field <name>]... [--dry-run] [--force] `
      + `[--remove-legacy]`;

const HELP = `${USAGE}

Convert a legacy citations cache file 'cache_downloaded_info.json' into the
'citations.jsonl' cache used by @phfaist/zoodb >= 0.2.  Nothing is fetched.
Entries whose legacy expiry time has passed are skipped (they are fetched again
by the next build); entries without a valid expiry time are kept for 365 days.

Options:
  --cache-dir <dir>         the citations cache directory (required), e.g.
                            '_zoodb_citations_cache'
  --legacy-file <path>      the legacy cache file
                            (default: <dir>/cache_downloaded_info.json)
  --cache-base <name>       base name of the new cache file (default:
                            'citations', i.e., <dir>/citations.jsonl)
  --prefix <name>=<kind>    declare the kind of the citation source of a cite
                            prefix; kind is one of arxiv, doi, manual, bib, js.
                            May be repeated.  Defaults: arxiv=arxiv, doi=doi,
                            manual=manual, preset=bib; any other prefix found
                            in the legacy file is treated as kind 'js' (custom
                            source; keys are only trimmed)
  --drop-field <name>       CSL-JSON field to remove from imported entries; may
                            be repeated (default: reference)
  --dry-run                 convert in memory and report the counts, but do not
                            write anything (the directory is only read)
  --force                   import even if <dir>/<base>.jsonl already exists;
                            entries already present in it are kept
  --remove-legacy           delete the legacy file after a successful import
  -h, --help                show this help and exit

Exit status: 0 on success, 1 on a usage error, 2 on an import error.`;

const KINDS = [ 'arxiv', 'doi', 'manual', 'bib', 'js' ];

const DEFAULT_PREFIXES = [
    [ 'arxiv', 'arxiv' ],
    [ 'doi', 'doi' ],
    [ 'manual', 'manual' ],
    [ 'preset', 'bib' ],
];

const DEFAULT_DROP_FIELDS = [ 'reference' ];


class UsageError extends Error {}


function parse_command_line(argv)
{
    let parsed;
    try {
        parsed = parseArgs({
            args: argv,
            options: {
                'cache-dir': { type: 'string' },
                'legacy-file': { type: 'string' },
                'cache-base': { type: 'string' },
                'prefix': { type: 'string', multiple: true },
                'drop-field': { type: 'string', multiple: true },
                'dry-run': { type: 'boolean' },
                'force': { type: 'boolean' },
                'remove-legacy': { type: 'boolean' },
                'help': { type: 'boolean', short: 'h' },
            },
            strict: true,
            allowPositionals: false,
        });
    } catch (err) {
        throw new UsageError(err.message);
    }
    const v = parsed.values;
    if (v.help) {
        return { help: true };
    }

    const cache_dir = v['cache-dir'];
    if (cache_dir == null || cache_dir === '') {
        throw new UsageError(`missing required option --cache-dir`);
    }
    const cache_base = v['cache-base'] ?? 'citations';
    if (cache_base === '' || /[/\\]/.test(cache_base)) {
        throw new UsageError(`invalid --cache-base ‘${cache_base}’`);
    }

    const prefixes = new Map(DEFAULT_PREFIXES);
    for (const p of (v.prefix ?? [])) {
        const m = /^([^=:\s]+)=([^=\s]+)$/.exec(p);
        if (m == null) {
            throw new UsageError(`invalid --prefix ‘${p}’, expected <name>=<kind>`);
        }
        const [ , name, kind ] = m;
        if ( ! KINDS.includes(kind) ) {
            throw new UsageError(
                `invalid kind ‘${kind}’ in --prefix ‘${p}’; expected one of ${KINDS.join(', ')}`
            );
        }
        prefixes.set(name, kind);
    }

    const drop_fields = (v['drop-field'] != null && v['drop-field'].length)
          ? [ ...v['drop-field'] ] : [ ...DEFAULT_DROP_FIELDS ];

    return {
        help: false,
        cache_dir,
        legacy_file: v['legacy-file'] ?? path.join(cache_dir, 'cache_downloaded_info.json'),
        cache_base,
        prefixes,
        drop_fields,
        dry_run: !!v['dry-run'],
        force: !!v.force,
        remove_legacy: !!v['remove-legacy'],
    };
}


function parse_expire(expire)
{
    if (typeof expire === 'number') {
        return Number.isFinite(expire) ? expire : null;
    }
    if (typeof expire === 'string' && expire.trim() !== '') {
        const n = Number(expire);
        return Number.isFinite(n) ? n : null;
    }
    return null;
}


function make_throwing_js_source(prefix)
{
    return {
        retrieveChunk: async () => {
            throw new Error(`${PROG}: no retrieval for prefix ‘${prefix}’ during migration`);
        },
        normalizeKey: (key) => String(key).trim(),
    };
}


function make_source_specs(prefixes)
{
    // The arXiv source chains DOIs to a 'doi' kind prefix; with no such prefix,
    // disable chaining (legacy chained entries carry their target explicitly).
    const doi_prefix = (prefixes.get('doi') === 'doi') ? 'doi'
          : (Array.from(prefixes).find( ([, kind]) => kind === 'doi' )?.[0] ?? null);
    const specs = [];
    for (const [ prefix, kind ] of prefixes) {
        switch (kind) {
        case 'arxiv':
            specs.push({ kind, prefix, chainDoisTo: doi_prefix });
            break;
        case 'doi':
            specs.push({ kind, prefix });
            break;
        case 'manual':
            specs.push({ kind, prefix, format: 'flm' });
            break;
        case 'bib':
            specs.push({ kind, prefix, entries: {} });
            break;
        case 'js':
            specs.push({ kind, prefix, source: make_throwing_js_source(prefix) });
            break;
        default:
            throw new UsageError(`unknown kind ‘${kind}’ for prefix ‘${prefix}’`);
        }
    }
    return specs;
}


// A cache fs for --dry-run: reads see the files on disk, writes stay in memory.
function make_dry_run_cache_fs(disk_fs)
{
    const mem = make_memory_cache_fs();
    const removed = new Set();
    return {
        ...mem,
        async read(p) {
            const data = await mem.read(p);
            if (data != null || removed.has(p)) {
                return data;
            }
            return await disk_fs.read(p);
        },
        async append(p, bytes) {
            if ( (await mem.read(p)) == null && ! removed.has(p) ) {
                const existing = await disk_fs.read(p);
                if (existing != null) {
                    await mem.atomicReplace(p, existing);
                }
            }
            removed.delete(p);
            await mem.append(p, bytes);
        },
        async atomicReplace(p, bytes) {
            removed.delete(p);
            await mem.atomicReplace(p, bytes);
        },
        async list(dir) {
            const names = new Set([ ...(await disk_fs.list(dir)), ...(await mem.list(dir)) ]);
            const d = String(dir).replace(/\/+$/, '');
            return [ ...names ].filter( (n) => ! removed.has(`${d}/${n}`) && ! removed.has(n) );
        },
        async remove(p) {
            removed.add(p);
            await mem.remove(p);
        },
    };
}


async function run(argv, { out, err })
{
    let args;
    try {
        args = parse_command_line(argv);
    } catch (e) {
        if (e instanceof UsageError) {
            err(`${PROG}: ${e.message}\n${USAGE}`);
            return 1;
        }
        throw e;
    }
    if (args.help) {
        out(HELP);
        return 0;
    }

    const { cache_dir, legacy_file, cache_base, drop_fields, dry_run, force } = args;

    // --- read the legacy file ---
    let legacy_text;
    try {
        legacy_text = fs.readFileSync(legacy_file, 'utf-8');
    } catch (e) {
        err(`${PROG}: cannot read the legacy cache file ‘${legacy_file}’: ${e.message}`);
        return 1;
    }
    let legacy;
    try {
        legacy = JSON.parse(legacy_text);
    } catch (e) {
        err(`${PROG}: the legacy cache file ‘${legacy_file}’ is not valid JSON: ${e.message}`);
        return 2;
    }
    if (legacy == null || typeof legacy !== 'object' || Array.isArray(legacy)) {
        err(`${PROG}: the legacy cache file ‘${legacy_file}’ does not contain a JSON object`);
        return 2;
    }

    // --- refuse to overwrite an existing cache ---
    const jsonl_name = `${cache_base}.jsonl`;
    const jsonl_path = path.join(cache_dir, jsonl_name);
    if (fs.existsSync(jsonl_path) && ! force) {
        err(`${PROG}: ‘${jsonl_path}’ already exists; refusing to import into it `
            + `(use --force to import only the entries it does not have yet)`);
        return 1;
    }

    // --- prefixes ---
    const prefixes = new Map(args.prefixes);
    const js_prefixes = [];
    for (const id of Object.keys(legacy)) {
        const i = id.indexOf(':');
        if (i <= 0) {
            continue;
        }
        const prefix = id.slice(0, i);
        if ( ! prefixes.has(prefix) ) {
            prefixes.set(prefix, 'js');
            js_prefixes.push(prefix);
        }
    }

    const legacy_entries = Object.entries(legacy).map( ([ id, rec ]) => ({
        id,
        value: rec?.value ?? {},
        expire: parse_expire(rec?.expire),
    }) );

    let specs;
    try {
        specs = make_source_specs(prefixes);
    } catch (e) {
        if (e instanceof UsageError) {
            err(`${PROG}: ${e.message}\n${USAGE}`);
            return 1;
        }
        throw e;
    }

    // --- import ---
    const cache_fs = dry_run ? make_dry_run_cache_fs(make_node_cache_fs(fs))
          : make_node_cache_fs(fs);
    if ( ! dry_run ) {
        fs.mkdirSync(cache_dir, { recursive: true });
    }

    let counts;
    let mgr = null;
    try {
        const wasm = await load_autocitefetch_wasm();
        mgr = await wasm.CitationManager.open({
            sources: specs,
            host: {
                fetch: async (req) => {
                    throw new Error(`${PROG}: no network access during migration (${req?.url})`);
                },
                cacheFs: cache_fs,
                onEvent: () => {},
            },
            cacheDir: cache_dir.replace(/\\/g, '/'),
            cacheBase: cache_base,
            writerId: `migrate-${crypto.randomBytes(8).toString('hex')}`,
            dropCslFields: drop_fields,
            legacyEntries: legacy_entries,
        });
        counts = mgr.legacyImport ?? { imported: 0, skipped: 0 };
    } catch (e) {
        err(`${PROG}: import failed: ${e?.message ?? e}`);
        return 2;
    } finally {
        mgr?.free();
    }

    out(`imported ${counts.imported}, skipped ${counts.skipped}`
        + (dry_run ? ' (dry run, nothing written)' : ` into ‘${jsonl_path}’`));
    if (js_prefixes.length) {
        out(`prefixes treated as custom sources (kind js): ${js_prefixes.join(', ')}`);
    }

    if (args.remove_legacy && ! dry_run) {
        try {
            fs.unlinkSync(legacy_file);
            out(`removed the legacy cache file ‘${legacy_file}’`);
        } catch (e) {
            err(`${PROG}: could not remove the legacy cache file ‘${legacy_file}’: ${e.message}`);
            return 2;
        }
    }

    return 0;
}


const code = await run(process.argv.slice(2), {
    out: (s) => console.log(s),
    err: (s) => console.error(s),
});
process.exitCode = code;
