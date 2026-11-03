#!/usr/bin/env node
//
// zoodb-reindent-yaml: re-indent the continuation lines of the quoted YAML
// values that YAML 1.2 refuses and `js-yaml` accepted, so that the files load
// with the strict `yaml` package that ZooDb's loaders use since 0.3.
//
// The pattern: a single- or double-quoted value continued on lines that are
// not indented more than its key (or than the `-` of its list item), e.g.
//
//     relations:
//       parents:
//         - code_id: x
//           detail: 'a long text
//           that continues here'
//
// The tool lets the `yaml` package find these values (the loader's own test,
// `find_refused_quoted_scalar()` of src/dbdataloader/_yamlparse.js): it
// parses the file, takes the quoted value the parser cut short, finds its
// closing quote, re-indents each continuation line indented no more than the
// key's column to `--indent` columns (default 2) beyond the key's column, and
// parses again until no such value is left. Only the leading whitespace of
// those lines changes: every other byte of the file is kept. A file with
// another YAML error, or a value whose closing quote cannot be found, is left
// untouched and reported.
//
// Verification (of every file changed): the re-indented text must parse with
// `yaml` without error, and its data must be identical to that of the
// original text in which each re-indented value is replaced by its lenient
// reading written on one line. The lenient reading is a minimal one of the
// pattern itself: the value's source between its quotes folded as YAML folds
// a quoted scalar (first line's trailing and last line's leading whitespace
// dropped, inner lines trimmed, a line break between two lines read as a
// space, each empty line as a newline, in a double-quoted value an escaped
// line break joining the lines), whatever the indentation, then '' read as '
// (single quotes) or the escapes decoded by `yaml` (double quotes). This is
// what `js-yaml` read, except that `js-yaml` kept a space that ends a line
// before folding, which the specification (and `yaml`) drops.
//
// The line and column in a message are those of the original file: a later
// pass parses the re-indented text, whose lines are the original's with other
// leading whitespace, and the column is shifted back by the difference of
// that line's leading whitespace. A byte order mark at the start of a file is
// set aside while reading and written back as it was.
//
// Files: those given on the command line (a symbolic link given is
// followed), and the .yml and .yaml files found in the directories given;
// when walking a directory, hidden directories, `node_modules` and symbolic
// links (to files or to directories) are skipped. Exit status: 0 on
// success, 1 on a usage error, 2 when a file could not be fixed; an
// unexpected exception (a bug) ends the tool with node's default status 1,
// the same as a usage error.
//
// Node only. Imports `node:` builtins, the package dependency `yaml` and
// src/dbdataloader/_yamlparse.js; in this repository, run it through yarn
// (`yarn node tools/reindent_yaml.mjs ...`: Yarn PnP resolves `yaml`).
//

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs, isDeepStrictEqual } from 'node:util';

import { parseDocument, parse as yaml_parse, isPair, isSeq } from 'yaml';

import { find_closing_quote, find_refused_quoted_scalar } from '../src/dbdataloader/_yamlparse.js';


const PROG = 'zoodb-reindent-yaml';

const USAGE = `Usage: ${PROG} <file-or-dir>... [--dry-run] [--indent N]`;

const HELP = `${USAGE}

Re-indent the continuation lines of quoted YAML values that are indented no
more than their key, which YAML 1.2 (and ZooDb's loaders since 0.3) refuses:

    detail: 'a long text
    that continues here'

becomes

    detail: 'a long text
      that continues here'

Every .yml and .yaml file given, or found in the directories given (hidden
directories and node_modules skipped), is checked; only the leading
whitespace of the continuation lines changes.  Each re-indented file is
verified: it must parse, and its values must be those of the original read
leniently (the quoted values folded whatever their indentation).

Options:
  --indent N      columns beyond the key's column for the continuation
                  lines (default: 2)
  --dry-run       report the files that would change, write nothing
  -h, --help      show this help and exit

Exit status: 0 on success, 1 on a usage error, 2 when a file could not be
fixed (another YAML error, a value that could not be re-indented, a failed
verification, or a file that could not be read or written).`;


class UsageError extends Error {}
class FixError extends Error {}


function parse_command_line(argv)
{
    let parsed;
    try {
        parsed = parseArgs({
            args: argv,
            options: {
                'indent': { type: 'string' },
                'dry-run': { type: 'boolean' },
                'help': { type: 'boolean', short: 'h' },
            },
            strict: true,
            allowPositionals: true,
        });
    } catch (err) {
        throw new UsageError(err.message);
    }
    const v = parsed.values;
    if (v.help) {
        return { help: true };
    }
    let indent = 2;
    if (v.indent != null) {
        if (!/^\d+$/.test(v.indent) || Number(v.indent) < 1) {
            throw new UsageError(`invalid --indent ‘${v.indent}’, expected a positive integer`);
        }
        indent = Number(v.indent);
    }
    if (parsed.positionals.length === 0) {
        throw new UsageError('no file or directory given');
    }
    return { help: false, paths: parsed.positionals, indent, dry_run: Boolean(v['dry-run']) };
}


const rx_yaml_file = /\.ya?ml$/i;

function collect_files(paths)
{
    const files = [];
    const walk = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true })
              .sort( (a, b) => (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)) );
        for (const ent of entries) {
            const p = path.join(dir, ent.name);
            if (ent.isDirectory()) {
                if (!ent.name.startsWith('.') && ent.name !== 'node_modules') {
                    walk(p);
                }
            } else if (ent.isFile() && rx_yaml_file.test(ent.name)) {
                files.push(p);
            }
        }
    };
    for (const p of paths) {
        let st;
        try {
            st = fs.statSync(p);
        } catch {
            throw new UsageError(`no such file or directory: ‘${p}’`);
        }
        if (st.isDirectory()) {
            walk(p);
        } else if (rx_yaml_file.test(p)) {
            files.push(p);
        } else {
            throw new UsageError(`not a .yml or .yaml file: ‘${p}’`);
        }
    }
    return files;
}


function line_starts_of(text)
{
    const starts = [0];
    for (let i = text.indexOf('\n'); i !== -1; i = text.indexOf('\n', i + 1)) {
        starts.push(i + 1);
    }
    return starts;
}

function line_index_of(starts, offset)
{
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (starts[mid] <= offset) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
}

/**
 * The re-indented text: ``{ text, fixed }``, ``fixed`` the opening quotes of
 * the values re-indented (``{ line, col }``, 0-based, unchanged by the
 * re-indentation). Throws a ``FixError`` when the file has another error or a
 * value cannot be re-indented.
 */
function reindent_text(text, indent_by)
{
    let current = text;
    const fixed = [];
    const original_starts = line_starts_of(text);
    const leading = (s, start) => {
        const rx = /[ \t]*/y;
        rx.lastIndex = start;
        return rx.exec(s)[0].length;
    };
    for (;;) {
        const doc = parseDocument(current, { prettyErrors: false });
        if (doc.errors.length === 0) {
            return { text: current, fixed };
        }
        const starts = line_starts_of(current);
        // the position in the original text: the same line, the column
        // shifted by the change of the line's leading whitespace
        const where = (offset) => {
            const l = line_index_of(starts, offset);
            const c = offset - starts[l];
            const lead = leading(current, starts[l]);
            const lead0 = leading(text, original_starts[l]);
            const c0 = (c >= lead) ? c - lead + lead0 : Math.min(c, lead0);
            return `line ${l + 1}, column ${c0 + 1}`;
        };
        const refused = find_refused_quoted_scalar(doc, current);
        if (refused == null) {
            const e = doc.errors[0];
            throw new FixError(`YAML error that is not a badly indented quoted value, at `
                               + `${where(e.pos[0])}: ${e.message}`);
        }
        let parent_col;
        if (isPair(refused.parent) && refused.parent.key?.range != null) {
            const k = refused.parent.key.range[0];
            parent_col = k - starts[line_index_of(starts, k)];
        } else if (isSeq(refused.parent) && refused.parent.range != null) {
            const s = refused.parent.range[0];
            parent_col = s - starts[line_index_of(starts, s)];
        } else {
            throw new FixError(`cannot re-indent the quoted value at ${where(refused.offset)}: `
                               + `it is not the value of a key or a list item`);
        }
        const open = refused.offset;
        const close = find_closing_quote(current, open);
        if (close === -1) {
            throw new FixError(`no closing quote for the quoted value at ${where(open)}`);
        }
        const open_line = line_index_of(starts, open);
        const close_line = line_index_of(starts, close);
        const target = ' '.repeat(parent_col + indent_by);
        let changed = false;
        let out = current.slice(0, starts[open_line + 1]);
        for (let l = open_line + 1; l <= close_line; ++l) {
            const line_end = (l + 1 < starts.length) ? starts[l + 1] : current.length;
            const line = current.slice(starts[l], line_end);
            const spaces = /^ */.exec(line)[0].length;
            if (line.trim() !== '' && spaces <= parent_col) {
                out += target + line.replace(/^[ \t]*/, '');
                changed = true;
            } else {
                out += line;
            }
        }
        out += current.slice((close_line + 1 < starts.length) ? starts[close_line + 1] : current.length);
        if (!changed) {
            throw new FixError(`cannot re-indent the quoted value at ${where(open)}`);
        }
        fixed.push({ line: open_line, col: open - starts[open_line] });
        current = out;
    }
}


// The lenient reading of a quoted value's source between its quotes: folded
// whatever the indentation (see the header).
function lenient_value(content, quote)
{
    const lines = content.split('\n').map( (l) => (l.endsWith('\r') ? l.slice(0, -1) : l) );
    let out = '';
    let empties = 0;
    let prev_escaped = false;
    for (let i = 0; i < lines.length; ++i) {
        const first = (i === 0);
        const last = (i === lines.length - 1);
        let t = lines[i];
        let escaped = false;
        if (quote === '"' && !last) {
            const m = /\\+$/.exec(t);
            if (m != null && m[0].length % 2 === 1) {
                escaped = true;
                t = t.slice(0, -1);
            }
        }
        if (!first) {
            t = t.replace(/^[ \t]+/, '');
        }
        if (!last && !escaped) {
            t = t.replace(/[ \t]+$/, '');
        }
        if (first) {
            out = t;
            prev_escaped = escaped;
            continue;
        }
        if (t === '' && !last && !escaped) {
            empties += 1;
            continue;
        }
        out += (prev_escaped || empties > 0) ? '\n'.repeat(empties) : ' ';
        out += t;
        empties = 0;
        prev_escaped = escaped;
    }
    if (quote === '\'') {
        return out.replace(/''/g, '\'');
    }
    return out.split('\n').map( (segment) => yaml_parse(`"${segment}"`) ).join('\n');
}


/**
 * Checks a re-indentation (see the header); throws a ``FixError`` if it does
 * not hold.
 */
function verify_reindented(original, result)
{
    const doc = parseDocument(result.text, { prettyErrors: false });
    if (doc.errors.length > 0) {
        throw new FixError(`verification failed: the re-indented file does not parse: `
                           + `${doc.errors[0].message}`);
    }
    const starts = line_starts_of(original);
    const spans = result.fixed.map( ({ line, col }) => {
        const open = starts[line] + col;
        const quote = original[open];
        const close = (quote === '\'' || quote === '"') ? find_closing_quote(original, open) : -1;
        if (close === -1) {
            throw new FixError(`verification failed: no quoted value at line ${line + 1}, `
                               + `column ${col + 1} of the original`);
        }
        return { open, close, quote };
    } ).sort( (a, b) => b.open - a.open );
    let flat = original;
    for (const { open, close, quote } of spans) {
        const value = lenient_value(original.slice(open + 1, close), quote);
        flat = flat.slice(0, open) + JSON.stringify(value) + flat.slice(close + 1);
    }
    const doc0 = parseDocument(flat, { prettyErrors: false });
    if (doc0.errors.length > 0) {
        throw new FixError(`verification failed: the original read leniently does not parse: `
                           + `${doc0.errors[0].message}`);
    }
    if (!isDeepStrictEqual(doc0.toJS(), doc.toJS())) {
        throw new FixError('verification failed: the re-indented file\'s values differ from '
                           + 'the original\'s read leniently');
    }
}


async function run(argv, { out, err })
{
    let opts;
    let files;
    try {
        opts = parse_command_line(argv);
        if (opts.help) {
            out(HELP);
            return 0;
        }
        files = collect_files(opts.paths);
    } catch (e) {
        if (e instanceof UsageError) {
            err(`${PROG}: ${e.message}`);
            err(USAGE);
            return 1;
        }
        throw e;
    }

    let failed = 0;
    let changed_files = 0;
    let changed_values = 0;
    for (const file of files) {
        try {
            let text;
            try {
                text = fs.readFileSync(file, 'utf8');
            } catch (e) {
                throw new FixError(`cannot read the file: ${e.message}`);
            }
            // a byte order mark is not part of the YAML text (it would shift
            // the columns of the first line); it is written back as it was
            const bom = text.startsWith('﻿') ? '﻿' : '';
            text = text.slice(bom.length);
            const result = reindent_text(text, opts.indent);
            if (result.fixed.length === 0) {
                continue;
            }
            verify_reindented(text, result);
            if (!opts.dry_run) {
                try {
                    fs.writeFileSync(file, bom + result.text);
                } catch (e) {
                    throw new FixError(`cannot write the file: ${e.message}`);
                }
            }
            changed_files += 1;
            changed_values += result.fixed.length;
            const n = result.fixed.length;
            out(`${opts.dry_run ? 'would re-indent' : 're-indented'} ${file} `
                + `(${n} value${n === 1 ? '' : 's'})`);
        } catch (e) {
            if (!(e instanceof FixError)) {
                throw e;
            }
            failed += 1;
            err(`${PROG}: ${file}: ${e.message}; the file is left unchanged`);
        }
    }
    out(`${changed_values} value(s) in ${changed_files} file(s) `
        + `${opts.dry_run ? 'would be re-indented' : 're-indented'}, ${files.length} file(s) checked`
        + (failed ? `, ${failed} file(s) could not be fixed` : '')
        + (opts.dry_run ? ' (dry run, nothing written)' : ''));
    return failed ? 2 : 0;
}


const code = await run(process.argv.slice(2), {
    out: (s) => console.log(s),
    err: (s) => console.error(s),
});
process.exitCode = code;
