#!/usr/bin/env node
//
// zoodb-merge-citations-cache: update a main `citations.jsonl` cache with the
// entries of another `citations.jsonl` file (e.g., the cache of another
// checkout, or one produced by a CI build).
//
// The file format is that of the autocitefetch crate's FileCacheStore: a
// header line `{"schema":1}`, then one entry per line, sorted by id,
// `{"id":"<prefix>:<key>","rec":{"payload":…,"stale_after":<ms>,"expires":<ms>}}`.
// An entry present in only one of the files is kept.  For an id present in
// both files, the copy that expires last is kept (the main file's copy on a
// tie).  Lines are copied byte for byte from the file they come from; the
// output is sorted by id like the files the crate writes.  Within one file, a
// later line for the same id overrides an earlier one (as when the crate reads
// the file), and ephemeral records (`stale_after >= expires`), which the crate
// never persists and drops on read, are dropped.
//
// Chained entries (e.g. `arxiv:… -> doi:…`) are resolved by id when the cache
// is read, so choosing each id independently keeps the result consistent: the
// target of a chain pointer taken from either file is present in the output
// whenever it was present in that file.
//
// As for zoodb-extend-citations-ttl, this tool refuses to run while a sidecar
// log `._<base>.*.log` exists next to either file: its lines are newer than
// the main file and would be missed (or, for the main cache, would override
// the merged lines at the next compaction).
//
// Node only.  Imports only `node:` builtins, so that it runs both as
// `node tools/merge_citations_cache.mjs` and through yarn (PnP).
//

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseArgs } from 'node:util';


const PROG = 'zoodb-merge-citations-cache';

const USAGE = `Usage: ${PROG} --cache-dir <dir> --from <file-or-dir> `
      + `[--cache-base citations] [--dry-run]`;

const HELP = `${USAGE}

Update the citations cache <dir>/<base>.jsonl with the entries of another
citations cache file.  Entries found in only one of the two files are kept.
For a citation found in both files, the copy that expires last is kept (the
copy in <dir>/<base>.jsonl if both expire at the same time).

Example: bring the cache of this checkout up to date with the one of another
checkout:

  ${PROG} --cache-dir _zoodb_citations_cache \\
      --from ../other-checkout/_zoodb_citations_cache/citations.jsonl

Options:
  --cache-dir <dir>     the citations cache directory to update (required),
                        e.g. '_zoodb_citations_cache'
  --from <path>         the citations cache file to take entries from
                        (required).  If <path> is a directory, the file
                        <path>/<base>.jsonl is used.  This file is only read
  --cache-base <name>   base name of the cache file (default: 'citations',
                        i.e., <dir>/citations.jsonl)
  --dry-run             report what would change, but do not write anything
  -h, --help            show this help and exit

The tool refuses to run if a sidecar log '._<base>.*.log' exists next to
either file: a build is running, or one was interrupted.  In the latter case,
run a build (which folds the log's contents into <base>.jsonl) and then
delete the leftover '._<base>*' files.

Exit status: 0 on success, 1 on a usage error, 2 on an error reading or
writing the cache.`;


class UsageError extends Error {}
class CacheError extends Error {}


function parse_command_line(argv)
{
    let parsed;
    try {
        parsed = parseArgs({
            args: argv,
            options: {
                'cache-dir': { type: 'string' },
                'cache-base': { type: 'string' },
                'from': { type: 'string' },
                'dry-run': { type: 'boolean' },
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
    const from = v.from;
    if (from == null || from === '') {
        throw new UsageError(`missing required option --from`);
    }

    return {
        help: false,
        cache_dir,
        cache_base,
        from,
        dry_run: !!v['dry-run'],
    };
}


// Sidecar logs `._<base>.*.log` in `dir`, as a list of file names.
function find_sidecars(dir, base)
{
    const sidecar_prefix = `._${base}.`;
    return fs.readdirSync(dir).filter(
        (n) => n.startsWith(sidecar_prefix) && n.endsWith('.log')
    );
}


// Parse a main cache file into a Map id -> { line, expires }, where `line` is
// the (trimmed) original line.  A later line for an id overrides an earlier
// one; ephemeral records are dropped and counted.
function parse_cache_file(text, file_path)
{
    const entries = new Map();
    let num_ephemeral = 0;
    const lines = text.split('\n');
    for (let idx = 0; idx < lines.length; ++idx) {
        const s = lines[idx].trim();
        if (s === '') {
            continue;
        }
        let obj;
        try {
            obj = JSON.parse(s);
        } catch (e) {
            throw new CacheError(`${file_path}: line ${idx+1} is not valid JSON: ${e.message}`);
        }
        if (obj != null && typeof obj === 'object' && Object.hasOwn(obj, 'schema')
            && ! Object.hasOwn(obj, 'id')) {
            if (obj.schema !== 1) {
                throw new CacheError(
                    `${file_path}: line ${idx+1}: cache schema version ${obj.schema} `
                    + `is not supported by this tool (expected 1)`
                );
            }
            continue;
        }
        const id = obj?.id;
        const rec = obj?.rec;
        if (typeof id !== 'string' || rec == null || typeof rec !== 'object'
            || rec.payload == null
            || ! Number.isSafeInteger(rec.stale_after) || ! Number.isSafeInteger(rec.expires)) {
            throw new CacheError(
                `${file_path}: line ${idx+1} is neither a header nor a cache entry`
            );
        }
        if (rec.stale_after >= rec.expires) {
            // ephemeral record -- the crate drops it on read (and a later line
            // for the same id still overrides an earlier one)
            entries.delete(id);
            num_ephemeral += 1;
            continue;
        }
        entries.set(id, { line: s, expires: rec.expires });
    }
    return { entries, num_ephemeral };
}


function merge_entries(main_entries, from_entries)
{
    const merged = new Map(main_entries);
    let num_added = 0;
    let num_updated = 0;
    let num_kept = 0;
    for (const [ id, from_entry ] of from_entries) {
        const main_entry = main_entries.get(id);
        if (main_entry == null) {
            merged.set(id, from_entry);
            num_added += 1;
        } else if (from_entry.expires > main_entry.expires) {
            merged.set(id, from_entry);
            num_updated += 1;
        } else {
            num_kept += 1;
        }
    }
    return { merged, num_added, num_updated, num_kept };
}


// Serialize like the crate: header, then the entries sorted by id in UTF-8
// byte order (the order of a Rust `BTreeMap<String, _>`, which differs from
// JavaScript's UTF-16 string order for some non-BMP characters).
function serialize_cache(entries)
{
    const sorted = Array.from(entries, ([ id, { line } ]) => ({ key: Buffer.from(id), line }));
    sorted.sort( (a, b) => Buffer.compare(a.key, b.key) );
    return '{"schema":1}\n' + sorted.map( ({ line }) => line + '\n' ).join('');
}


function read_cache_file(file_path, what)
{
    try {
        return fs.readFileSync(file_path, 'utf-8');
    } catch (e) {
        throw new UsageError(`cannot read the ${what} ‘${file_path}’: ${e.message}`);
    }
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

    const { cache_dir, cache_base, dry_run } = args;
    const jsonl_path = path.join(cache_dir, `${cache_base}.jsonl`);

    let from_path = args.from;
    let from_is_dir;
    try {
        from_is_dir = fs.statSync(from_path).isDirectory();
    } catch (e) {
        err(`${PROG}: cannot read ‘${from_path}’: ${e.message}`);
        return 1;
    }
    if (from_is_dir) {
        from_path = path.join(from_path, `${cache_base}.jsonl`);
    }
    if (path.resolve(from_path) === path.resolve(jsonl_path)) {
        err(`${PROG}: --from designates the cache file to update itself, ‘${jsonl_path}’`);
        return 1;
    }

    // --- refuse to run next to unfolded sidecar logs ---
    const sidecar_checks = [ [ cache_dir, cache_base ] ];
    const from_base_m = /^(.+)\.jsonl$/.exec(path.basename(from_path));
    if (from_base_m != null) {
        sidecar_checks.push([ path.dirname(from_path), from_base_m[1] ]);
    }
    for (const [ dir, base ] of sidecar_checks) {
        let sidecars;
        try {
            sidecars = find_sidecars(dir, base);
        } catch (e) {
            err(`${PROG}: cannot read the cache directory ‘${dir}’: ${e.message}`);
            return 1;
        }
        if (sidecars.length) {
            err(`${PROG}: found sidecar log(s) ${sidecars.map((n) => `‘${n}’`).join(', ')} `
                + `in ‘${dir}’: a build is running, or one was interrupted.  Wait for `
                + `the build to finish; for an interrupted build, run a build again, then `
                + `delete the leftover ‘._${base}*’ files and retry.`);
            return 2;
        }
    }

    // --- read, merge, write ---
    let main_parsed, from_parsed;
    try {
        main_parsed = parse_cache_file(read_cache_file(jsonl_path, 'cache file'), jsonl_path);
        from_parsed = parse_cache_file(read_cache_file(from_path, '--from file'), from_path);
    } catch (e) {
        if (e instanceof UsageError) {
            err(`${PROG}: ${e.message}`);
            return 1;
        }
        if (e instanceof CacheError) {
            err(`${PROG}: ${e.message}`);
            return 2;
        }
        throw e;
    }

    const result = merge_entries(main_parsed.entries, from_parsed.entries);
    const changed = (result.num_added + result.num_updated) > 0;

    if ( ! dry_run && changed ) {
        // atomic replace; the `._<base>` prefix is covered by the ignore rule
        const tmp_path = path.join(
            cache_dir, `._${cache_base}.merge-${crypto.randomBytes(8).toString('hex')}.tmp`
        );
        try {
            fs.writeFileSync(tmp_path, serialize_cache(result.merged));
            fs.renameSync(tmp_path, jsonl_path);
        } catch (e) {
            try { fs.unlinkSync(tmp_path); } catch { /* ignore */ }
            err(`${PROG}: cannot write the cache file ‘${jsonl_path}’: ${e.message}`);
            return 2;
        }
    }

    const num_ephemeral = main_parsed.num_ephemeral + from_parsed.num_ephemeral;
    out(`added ${result.num_added}, updated ${result.num_updated}, `
        + `kept ${result.num_kept} (copy in the cache expires at the same time or later); `
        + `${result.merged.size} entries in total`
        + (num_ephemeral ? `; dropped ${num_ephemeral} ephemeral record(s)` : '')
        + (dry_run ? ' (dry run, nothing written)'
           : changed ? ` in ‘${jsonl_path}’` : ' (nothing to write)'));
    return 0;
}


const code = await run(process.argv.slice(2), {
    out: (s) => console.log(s),
    err: (s) => console.error(s),
});
process.exitCode = code;
