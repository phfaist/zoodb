#!/usr/bin/env node
//
// zoodb-extend-citations-ttl: prolong the time-to-live of the entries of a
// `citations.jsonl` cache whose cite prefix is one of the given prefixes, e.g.
// "add 60 days to all arXiv entries".
//
// The file format is that of the autocitefetch crate's FileCacheStore: a
// header line `{"schema":1}`, then one entry per line,
// `{"id":"<prefix>:<key>","rec":{"payload":…,"stale_after":<ms>,"expires":<ms>}}`.
// Both timestamps of each selected entry are shifted by the given duration, so
// the entry stays fresh (and is not revalidated) for that much longer.  All
// other lines are copied byte for byte.
//
// The crate folds the per-writer sidecar logs `._<base>.*.log` into the main
// file when it flushes, and a sidecar line beats the main-file copy of the same
// id.  This tool therefore refuses to run while such a log exists (a build is
// running, or one was interrupted: its log stays until deleted by hand).
//
// Node only.  Imports only `node:` builtins, so that it runs both as
// `node tools/extend_citations_ttl.mjs` and through yarn (PnP).
//

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseArgs } from 'node:util';


const PROG = 'zoodb-extend-citations-ttl';

const USAGE = `Usage: ${PROG} --cache-dir <dir> --prefix <name> [--prefix <name>]... `
      + `--add <duration> [--cache-base citations] [--dry-run]`;

const HELP = `${USAGE}

Prolong the time-to-live of the entries of the citations cache
<dir>/<base>.jsonl whose citation prefix is one of the given prefixes.  Both
the time after which an entry is revalidated and its expiry time are moved
later by the given duration.  Other entries are left untouched.

Example: add 60 days to all arXiv entries:

  ${PROG} --cache-dir _zoodb_citations_cache --prefix arxiv --add 60d

Options:
  --cache-dir <dir>     the citations cache directory (required), e.g.
                        '_zoodb_citations_cache'
  --prefix <name>       citation prefix of the entries to extend, e.g. 'arxiv'
                        or 'doi' (required; may be repeated).  An arXiv entry
                        that chains to a DOI entry is an 'arxiv' entry; the
                        DOI entry it points to is not extended unless 'doi' is
                        also given
  --add <duration>      the time to add: a number followed by a unit, 'w'
                        (weeks), 'd' (days), 'h' (hours) or 'm' (minutes),
                        e.g. '60d' (required).  A negative duration
                        ('--add=-10d') shortens the time-to-live
  --cache-base <name>   base name of the cache file (default: 'citations',
                        i.e., <dir>/citations.jsonl)
  --dry-run             report what would change, but do not write anything
  -h, --help            show this help and exit

The tool refuses to run if a sidecar log '<dir>/._<base>.*.log' exists: a
build is running, or one was interrupted.  In the latter case, run a build
(which folds the log's contents into <base>.jsonl) and then delete the
leftover '._<base>*' files.

Exit status: 0 on success, 1 on a usage error, 2 on an error reading or
writing the cache.`;

const UNIT_MS = {
    w: 7 * 24 * 3600 * 1000,
    d: 24 * 3600 * 1000,
    h: 3600 * 1000,
    m: 60 * 1000,
};


class UsageError extends Error {}
class CacheError extends Error {}


function parse_duration(s)
{
    const m = /^\s*([+-]?\d+(?:\.\d+)?)\s*([wdhm])\s*$/.exec(s);
    if (m == null) {
        throw new UsageError(
            `invalid --add ‘${s}’, expected a number and a unit w, d, h or m (e.g. 60d)`
        );
    }
    const ms = Math.round(Number(m[1]) * UNIT_MS[m[2]]);
    if ( ! Number.isSafeInteger(ms) ) {
        throw new UsageError(`--add ‘${s}’ is out of range`);
    }
    return ms;
}


function parse_command_line(argv)
{
    let parsed;
    try {
        parsed = parseArgs({
            args: argv,
            options: {
                'cache-dir': { type: 'string' },
                'cache-base': { type: 'string' },
                'prefix': { type: 'string', multiple: true },
                'add': { type: 'string' },
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
    const prefixes = new Set();
    for (const p of (v.prefix ?? [])) {
        if ( ! /^[^:\s]+$/.test(p) ) {
            throw new UsageError(`invalid --prefix ‘${p}’`);
        }
        prefixes.add(p);
    }
    if (prefixes.size === 0) {
        throw new UsageError(`missing required option --prefix`);
    }
    if (v.add == null) {
        throw new UsageError(`missing required option --add`);
    }

    return {
        help: false,
        cache_dir,
        cache_base,
        prefixes,
        add_ms: parse_duration(v.add),
        dry_run: !!v['dry-run'],
    };
}


// Shift the timestamps of one entry line.  The crate writes the fields of a
// record in the order payload, stale_after, expires, so the timestamps end the
// line; they are replaced in place, which keeps the rest of the line byte for
// byte.  A line in another (hand-edited) layout is re-serialized.
function shift_entry_line(line, rec, add_ms)
{
    const stale_after = rec.stale_after + add_ms;
    const expires = rec.expires + add_ms;
    const re = /,\s*"stale_after"\s*:\s*-?\d+\s*,\s*"expires"\s*:\s*-?\d+\s*\}\s*\}\s*$/;
    if (re.test(line)) {
        return line.replace(re, `,"stale_after":${stale_after},"expires":${expires}}}`);
    }
    return null;
}


function extend_ttl(text, { prefixes, add_ms, jsonl_path })
{
    const lines = text.split('\n');
    const counts = new Map( Array.from(prefixes).map( (p) => [ p, 0 ] ) );
    let total = 0;
    const out_lines = lines.map( (line, idx) => {
        const s = line.trim();
        if (s === '') {
            return line;
        }
        let obj;
        try {
            obj = JSON.parse(s);
        } catch (e) {
            throw new CacheError(`${jsonl_path}: line ${idx+1} is not valid JSON: ${e.message}`);
        }
        if (obj != null && typeof obj === 'object' && Object.hasOwn(obj, 'schema')
            && ! Object.hasOwn(obj, 'id')) {
            if (obj.schema !== 1) {
                throw new CacheError(
                    `${jsonl_path}: line ${idx+1}: cache schema version ${obj.schema} `
                    + `is not supported by this tool (expected 1)`
                );
            }
            return line;
        }
        const id = obj?.id;
        const rec = obj?.rec;
        if (typeof id !== 'string' || rec == null || typeof rec !== 'object'
            || ! Number.isSafeInteger(rec.stale_after) || ! Number.isSafeInteger(rec.expires)) {
            throw new CacheError(
                `${jsonl_path}: line ${idx+1} is neither a header nor a cache entry`
            );
        }
        const i = id.indexOf(':');
        const prefix = (i > 0) ? id.slice(0, i) : null;
        if (prefix == null || ! prefixes.has(prefix)) {
            return line;
        }
        let new_line = shift_entry_line(s, rec, add_ms);
        if (new_line == null) {
            new_line = JSON.stringify({
                ...obj,
                rec: {
                    ...rec,
                    stale_after: rec.stale_after + add_ms,
                    expires: rec.expires + add_ms,
                },
            });
        }
        counts.set(prefix, counts.get(prefix) + 1);
        total += 1;
        return new_line;
    } );
    return { new_text: out_lines.join('\n'), counts, total };
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

    const { cache_dir, cache_base, prefixes, add_ms, dry_run } = args;
    const jsonl_path = path.join(cache_dir, `${cache_base}.jsonl`);

    // --- refuse to run next to unfolded sidecar logs ---
    let names;
    try {
        names = fs.readdirSync(cache_dir);
    } catch (e) {
        err(`${PROG}: cannot read the cache directory ‘${cache_dir}’: ${e.message}`);
        return 1;
    }
    const sidecar_prefix = `._${cache_base}.`;
    const sidecars = names.filter(
        (n) => n.startsWith(sidecar_prefix) && n.endsWith('.log')
    );
    if (sidecars.length) {
        err(`${PROG}: found sidecar log(s) ${sidecars.map((n) => `‘${n}’`).join(', ')} `
            + `in ‘${cache_dir}’: a build is running, or one was interrupted.  Wait for `
            + `the build to finish; for an interrupted build, run a build again, then `
            + `delete the leftover ‘._${cache_base}*’ files and retry.`);
        return 2;
    }

    // --- read, shift, write ---
    let text;
    try {
        text = fs.readFileSync(jsonl_path, 'utf-8');
    } catch (e) {
        err(`${PROG}: cannot read the cache file ‘${jsonl_path}’: ${e.message}`);
        return 1;
    }
    let result;
    try {
        result = extend_ttl(text, { prefixes, add_ms, jsonl_path });
    } catch (e) {
        if (e instanceof CacheError) {
            err(`${PROG}: ${e.message}`);
            return 2;
        }
        throw e;
    }

    if ( ! dry_run && result.total > 0 ) {
        // atomic replace; the `._<base>` prefix is covered by the ignore rule
        const tmp_path = path.join(
            cache_dir, `._${cache_base}.extend-${crypto.randomBytes(8).toString('hex')}.tmp`
        );
        try {
            fs.writeFileSync(tmp_path, result.new_text);
            fs.renameSync(tmp_path, jsonl_path);
        } catch (e) {
            try { fs.unlinkSync(tmp_path); } catch { /* ignore */ }
            err(`${PROG}: cannot write the cache file ‘${jsonl_path}’: ${e.message}`);
            return 2;
        }
    }

    const days = add_ms / UNIT_MS.d;
    const per_prefix = Array.from(result.counts)
          .map( ([ p, n ]) => `${p}: ${n}` ).join(', ');
    out(`extended ${result.total} entr${result.total === 1 ? 'y' : 'ies'} by `
        + `${Number(days.toFixed(4))} day(s) (${per_prefix})`
        + (dry_run ? ' (dry run, nothing written)' : ` in ‘${jsonl_path}’`));
    return 0;
}


const code = await run(process.argv.slice(2), {
    out: (s) => console.log(s),
    err: (s) => console.error(s),
});
process.exitCode = code;
