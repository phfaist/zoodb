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
run if `<dir>/citations.jsonl` already exists unless `--force` is given (then
entries already present are kept); `--dry-run` only reports the counts;
`--remove-legacy` deletes the legacy file after a successful import (by default
it is left untouched). Exit status: 0 on success, 1 on a usage error, 2 on an
import error. `--help` prints the full option list.
