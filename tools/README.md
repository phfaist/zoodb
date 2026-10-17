# Repository tools

ESM scripts for Node.js. They import `node:` builtins and files of this
repository, and `reindent_yaml.mjs` also the package dependency `yaml`: in
this repository (Yarn PnP), run that one through yarn (`yarn node
tools/reindent_yaml.mjs ...`); the others also run as `node tools/<name>.mjs`.

## `build_wasm.mjs`

Usage: `yarn build:wasm [citations|flm]...` (no name: both)

Builds the Rust bindings of the cargo workspace in `rust/` with `wasm-pack`
and regenerates the committed, environment-neutral modules (see
`rust/README.md`):

| name | crate | output | the binary |
|---|---|---|---|
| `citations` | `rust/zoodb-autocitefetch-wasm/` | `src/citationmanager/_wasm/` | inlined as base64 (`autocitefetch_wasm_bg.b64.js`) |
| `flm` | `rust/zoodb-flm-wasm/` | `src/zooflm/_wasm/` | the file `zoodb_flm_wasm_bg.wasm` |

For each: `wasm-pack build <crate> --release --target web` into
`rust/target/pkg/<crate>/`, with the path remapping below; the binary checked
free of the build machine's paths before anything is written to `src/`; the
wasm-bindgen glue and type declarations copied with a "generated file" banner
(the default-path fallback stripped if present); the binary written as in the
table; the glue (and the base64 module) checked free of `import.meta`,
`require(`, `process.`, `Buffer`, `__dirname`, `node:` and `fs`; and
`BUILD_INFO.json` written from `rust/Cargo.lock` (the binding's name and
version, the `autocitefetch` version or the `flm-core` version with its
source, `"path"` for a path dependency, the `wasm-bindgen` version,
`"paths_remapped": true`, the sizes and the build date), plus, for each path
dependency of the crate whose directory is in a git checkout (today flm-core),
`<name>_git: { commit, dirty }`: the checkout's `HEAD` and whether `git status
--porcelain` listed anything under the dependency's own directory, the one of
its `Cargo.toml` (read with `--no-optional-locks`, so the checkout is not
written). Only needed after changing `rust/`; users of the package never run
it. Requires Rust stable with the `wasm32-unknown-unknown` target
(`rustup target add wasm32-unknown-unknown`), `wasm-pack` (`cargo install
wasm-pack`) and, for the
workspace to load at all, the local flm-rs checkout that `zoodb-flm-wasm`
depends on. Exit status: 0 on success, 1 on any error (a missing tool, a
failed build, a build machine path left in a binary, rustflags in a cargo
configuration file, a forbidden token, an unknown name). Never edit the
generated modules by hand.

The path remapping: rustc writes source paths into the binaries (panic
locations), so the tool passes `--remap-path-prefix` flags to rustc through
`CARGO_ENCODED_RUSTFLAGS`, computed at each build from `cargo metadata` and
`rustc --print sysroot` (and printed): the workspace root to `zoodb-rust`, the
root of each path dependency to its package name, cargo's registry sources to
`cargo-registry` (git checkouts to `cargo-git`), the sysroot to
`rust-sysroot`. Flags already given in `CARGO_ENCODED_RUSTFLAGS`, `RUSTFLAGS`,
`CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_RUSTFLAGS` or `CARGO_BUILD_RUSTFLAGS` are
kept (in cargo's order of precedence); rustflags in a cargo configuration file
make the tool fail, since `CARGO_ENCODED_RUSTFLAGS` would replace them. After
the build, a byte search of each binary (the citation module's before it is
inlined as base64) for `/Users/`, `/home/` and `C:\` must find nothing. The
flags are part of cargo's fingerprint, so the first build with them (and the
first after they change) rebuilds everything from scratch, once per machine.

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

## `reindent_yaml.mjs`

Usage: `zoodb-reindent-yaml <file-or-dir>... [--dry-run] [--indent N]`

Re-indents the continuation lines of the quoted YAML values that YAML 1.2
refuses and `js-yaml` (used by ZooDb before 0.3) accepted: a single- or
double-quoted value continued on lines that are not indented more than its
key (or than the `-` of its list item). The loaders of ZooDb (the `yaml`
package since 0.3) refuse such a file with the message "a quoted value that
continues on the next line must be indented more than the key; run
`zoodb-reindent-yaml` on the file" at the value's opening quote; run e.g.
`yarn zoodb-reindent-yaml codes/` once on the data (it is a package `bin`;
in this repository, `yarn node tools/reindent_yaml.mjs ...`). Every `.yml`
and `.yaml` file given or found in the directories given (hidden directories,
`node_modules` and symbolic links to files or directories skipped while
walking a directory; a link given on the command line is followed) is parsed
with `yaml`; each value the parser refuses for this reason has its
continuation lines that are indented no more than the key's column
re-indented to `--indent` columns (default 2) beyond the key's column; nothing
else changes (only those lines' leading whitespace).
Each file changed is verified before it is written: the re-indented text must
parse, and its data must equal that of the original in which each re-indented
value is replaced by its lenient reading (the source between the quotes folded
as YAML folds a quoted value, whatever the indentation: what `js-yaml` read,
except a space ending a line before a fold, which `js-yaml` kept and the
specification drops). The tool prints the files changed (with `--dry-run`,
the files that would change, and nothing is written) and a summary line. A
file with another YAML error, or whose value cannot be re-indented or
verified, is reported and left unchanged. Checked on a copy of the EC zoo's
data: 191 values in 127 files re-indented in under 2 seconds, after which all
its files load. Exit status: 0 on success, 1 on a usage error, 2 when a file
could not be fixed (or read or written); an unexpected exception (a bug) ends
the tool with node's default status 1, the same as a usage error.
