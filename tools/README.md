# Repository tools

ESM scripts for Node.js (they import only `node:` builtins and files of this
repository).

## `build_wasm.mjs`

Usage: `yarn build:wasm`

Builds the Rust binding of the `autocitefetch` citation retriever in `rust/`
with `wasm-pack` and regenerates the committed, environment-neutral module in
`src/citationmanager/_wasm/` (wasm-bindgen glue, the `.wasm` binary inlined as
base64, type declarations and `BUILD_INFO.json`). Only needed after changing
`rust/`; users of the package never run it. Requires Rust stable with the
`wasm32-unknown-unknown` target (`rustup target add wasm32-unknown-unknown`)
and `wasm-pack` (`cargo install wasm-pack`). Never edit the files in
`src/citationmanager/_wasm/` by hand.

## `migrate_citations_cache.mjs`

Usage: `zoodb-migrate-citations-cache --cache-dir <dir> [--legacy-file <path>] [--cache-base citations] [--prefix <name>=<kind>]... [--drop-field <name>]... [--dry-run] [--force] [--remove-legacy]`

Converts a legacy citations cache `cache_downloaded_info.json` (written by
`@phfaist/zoodb` before 0.2) into the `citations.jsonl` cache that the
citation manager now uses, so that a project does not have to fetch all its
citations again. Run it once per project, e.g. `yarn
zoodb-migrate-citations-cache --cache-dir _zoodb_citations_cache` (it is the
package's `bin`; in this repository, `node tools/migrate_citations_cache.mjs
...`). Nothing is fetched: the records are written by the wasm binding itself.
Cite prefixes `arxiv`, `doi`, `manual` and `preset` are mapped to the built-in
source kinds (`arxiv`, `doi`, `manual`, `bib`); any other prefix found in the
file is treated as a custom (`js`) source and listed in the output, and
`--prefix <name>=<kind>` overrides the mapping. Entries whose legacy expiry has
passed are skipped; entries without a valid expiry are kept for 365 days. The
CSL field `reference` is dropped unless `--drop-field` is given (which then
replaces that default). The tool prints `imported N, skipped M`. It refuses to
run if `<dir>/<base>.jsonl` (by default `<dir>/citations.jsonl`) already exists unless `--force` is given (then
entries already present are kept); `--dry-run` only reports the counts;
`--remove-legacy` deletes the legacy file after a successful import (by default
it is left untouched). Exit status: 0 on success, 1 on a usage error, 2 on an
import error. `--help` prints the full option list.

## `extend_citations_ttl.mjs`

Usage: `zoodb-extend-citations-ttl --cache-dir <dir> --prefix <name> [--prefix <name>]... --add <duration> [--cache-base citations] [--dry-run]`

Prolongs the time-to-live of all entries of `<dir>/citations.jsonl` whose cite
prefix is one of the given prefixes, e.g. `yarn zoodb-extend-citations-ttl
--cache-dir _zoodb_citations_cache --prefix arxiv --add 60d` adds 60 days to
all arXiv entries (it is a package `bin`; in this repository, `node
tools/extend_citations_ttl.mjs ...`). Both timestamps of a record
(`stale_after` and `expires`) are shifted by the duration (a number and a unit
`w`, `d`, `h` or `m`; negative values, as in `--add=-10d`, shorten it). Only
the timestamps at the end of the selected lines are rewritten; all other bytes
of the file are kept, and the file is replaced atomically. Chained entries are
selected by their own prefix only (an `arxiv` entry chained to a `doi` entry
does not extend the `doi` entry). The tool refuses to run while a sidecar log
`._<base>.*.log` exists, since its lines would override the edited ones at the
next compaction. `--dry-run` only reports the counts. Exit status: 0 on
success, 1 on a usage error, 2 on an error reading or writing the cache.

## `merge_citations_cache.mjs`

Usage: `zoodb-merge-citations-cache --cache-dir <dir> --from <file-or-dir> [--cache-base citations] [--dry-run]`

Updates `<dir>/citations.jsonl` with the entries of another citations cache
file, e.g. `yarn zoodb-merge-citations-cache --cache-dir
_zoodb_citations_cache --from ../other/_zoodb_citations_cache/citations.jsonl`
(it is a package `bin`; in this repository, `node
tools/merge_citations_cache.mjs ...`). If `--from` is a directory,
`<from>/<base>.jsonl` is used; that file is only read. Entries present in only
one file are kept; for an id present in both, the copy with the later
`expires` is kept (the one in `--cache-dir` on a tie). Lines are copied byte
for byte from the file they come from, and the output is sorted by id (UTF-8
byte order, as the crate writes it), so git diffs stay minimal. Within a file,
a later line for an id overrides an earlier one, and ephemeral records
(`stale_after >= expires`, never persisted by the crate) are dropped. Chained
entries are chosen by their own id, like all others. The tool refuses to run
while a sidecar log `._<base>.*.log` exists next to either file. The file is
replaced atomically, and only if some entry was added or updated;
`--dry-run` only reports the counts. Everything is done in memory with a
single pass over each file, so caches of tens of thousands of entries merge in
well under a second. Exit status: 0 on success, 1 on a usage error, 2 on an
error reading or writing the cache.
