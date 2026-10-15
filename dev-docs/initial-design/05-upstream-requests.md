# 05 — Requests and proposals for upstream flm-rs

Rule (Philippe, 2026-10-14): we work in this repo only and do not touch flm-rs, but the
design may formulate requests for changes or additions in flm-rs whenever that keeps our
design clean. No elaborate workarounds here. Code that any wasm-based host of FLM would
need may belong in flm-rs as a crate of its own; which components are generic enough is
decided per component, probably at the end of the design session. Requests are kept to
the absolute minimum driven by absolute necessity; a candidate that a ZooDb-side design
can avoid cleanly is withdrawn.

Ruling (Philippe, 2026-10-15): nothing is decided for flm-rs now ("it's too early to
decide"). Everything is written in ZooDb as zoodb-specific modules and crates. When
building, any part that can easily be written without zoo specifics is written
generically, within reason, but still here. What moves to flm-rs is decided after the
build has given a practical idea of what is generic enough. U1 stays the one agreed
request.

Status values: *candidate* (raised here, not yet agreed), *agreed* (Philippe agreed it is
worth asking for), *filed* (written up for flm-rs), *done*, *withdrawn*, *deferred*.

## Live requests

| id | request | why | status |
|---|---|---|---|
| U2 | **A way for a host stage to build a `GraphicsPublished` value.** `flm.graphics.published.<backend>` holds one `PublishedImage` (address and `srcset` candidates) per node address, but its map is private and the only public constructor is `Default` (empty); `absorb` takes another `GraphicsPublished`. A one-line addition suffices: `impl FromIterator<(NodeAddr, PublishedImage)> for GraphicsPublished` (or `GraphicsPublished::insert`). | The intended route for alternative sources is a host stage that replaces the standard publish stage as the writer of the published table, chosen by plan preference (verified in step zero, milestone 2: the plan refuses two writers without a preference and runs the preferred one). Without a constructor the ZooDb stage `zoodb.graphics.publish.html` computes the candidates and cannot write them. The alternatives are not clean: rewriting the emitted HTML to add `srcset` attributes, or a ZooDb image rule for the html backend that duplicates the standard rule's option and size logic (both are private). Q7, R8. | candidate (2026-10-16); the prototype names the constructor behind its cargo feature `published-insert` |
| U1 | **Meaningful control over the recursion guard's stack budget.** Make the budget a parameter of the guard policy (`GuardPolicy::StackBudget(bytes)` in `RegistryInputs.guard`, the current `STACK_BUDGET` constant as the default), size the worker thread that `run_with_worker_stack` spawns from it (budget plus the margin the constants encode today), and document `mark_worker_thread` against the configured budget, so that a single-threaded host (wasm) marks its one thread and links a shadow stack of the matching size. `DepthLimit` stays as it is. | A wasm module has no threads and sizes its stack at link time; a browser page should not reserve 64 MiB of linear memory because of a constant, and the guard's refusal should match the stack the host really gives. R1. | agreed (Philippe, 2026-10-14: "a legitimate flm-core ask") |

## Withdrawn or deferred candidates

Each former candidate, the case for it, and why it is not asked for. Kept so that the
reasoning is not redone.

| former id | request | the case for it | verdict |
|---|---|---|---|
| (was U6, then U1) restricted-scope parse | A public way to derive a parsing state that leaves out the packages of listed features, so that a standalone field refuses `\ref`, `\cite`, notes, floats, graphics and `\term` at parse time. The mechanism exists internally (`ScopeOp::ReplaceStack`, `push_provider`). | Parse-time enforcement as the old FLM did, with trees placeable in any document of the one registry. | **Withdrawn** (2026-10-14). Standalone is defined by what the tables hold: a ZooDb check stage over `flm.refpoints`, the reference sites and the element index, plus the `Inline` layout, gives the guarantee in the scan run with no change to flm-rs. Q5. |
| (was U2) generic `flm-wasm` crate | A wasm-bindgen host crate in flm-rs for the everyday embedding flow and the host services over JavaScript callbacks, which ZooDb would depend on. | One maintained binding for every JavaScript host instead of one per project. | **Deferred** per Q2: ZooDb-specific binding now; which parts are generic is decided per component at the end of the session. |
| (was U3) asynchronous services | Resumable runs at a service boundary, or a "requests table" protocol, so that a host could fulfil citation and image requests with Promises during a run. | A wasm service call cannot await a Promise. | **Withdrawn.** Q6 and Q7 gather all host data outside the run from the scan's tables (`flm.citations.keys`, the element index); the in-run services are lookups; a miss re-runs the unit. No in-run asynchrony is needed. |
| (was U4) flm-main `graphics`/`citations` for wasm | Build the pure-Rust parts of `flm-main`'s image inspection and citation formatting behind host-supplied `Files`/`Fetcher`/`CacheFs`, with wasm in CI. | A wasm host could reuse the standard inspector and provider. | **Withdrawn.** Q6 keeps citeproc-js and the existing manager; Q7 keeps the JavaScript collector and inspector. |
| (was U5) `srcset` from the resolver | Let the resolver's `ImageFile` carry alternative sources that the `reference` strategy publishes. | The chain exists downstream; only the start is missing. | **Withdrawn.** The resolver gives one main source; alternatives are deduced in the build by a ZooDb publish stage for the `html` backend that writes `flm.graphics.published.html` in place of the standard one, chosen by plan preference (the same mechanism as the `compose` feature replacing a final stage). Q7. |
| (not raised) per-tree label scope or safe-label prefix | A way to scope labels per tree, or a prefix or starting number for safe labels, so that many runs, or many units placed in one run, do not collide. | Handbook units reuse labels (3 duplicates in the EC zoo data); safe labels restart at `ref1` in every run. | **Not requested** (2026-10-15). Q12: one run for the whole handbook makes safe labels unique, and labels unique zoo-wide are enforced by the scan run; failing that, the handbook prefixes keys in LaTeX through the hooks. |
| (not raised) module size levers | Cargo features to leave out backends not needed by a host (the two LaTeX backends and the text backend are about 200 KB of `flm-core` code plus their monomorphizations) and the settings-as-data machinery (13% of the code: `serde_path_to_error`, `schemars`, `serde_json`); fewer distinct `BTreeMap` instantiations and a sort with a `dyn` comparator (about a tenth of the module; measured in 07). | The wasm module is 4.9 MB (1.2 MB brotli) and 68 MB of memory at start (R2, R1). | **Not requested** (2026-10-15): the size is workable by serving the `.wasm` file compressed; raised only if it proves a problem in practice. |
| (not raised) base position on `FlmOrigin` | A starting line and column on a source's origin so that flm-rs's own position rendering shows positions in the enclosing file. | Fields are embedded in YAML files. | **Not requested** (2026-10-15). Q15: the host maps byte offsets to positions inside the field and adds the field's start. |
