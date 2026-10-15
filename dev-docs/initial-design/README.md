# dev-docs/initial-design — ZooDb FLM redesign around flm-rs

Design documents and implementation briefs for redesigning ZooDb's FLM component around `flm-rs` (`flm-core`
compiled to WebAssembly, called from JavaScript in Node.js and in the browser).
Nothing in this folder is part of the published package. The documents were written in
`scratch/` of the main checkout during the design phase (2026-10-14/15) and moved here on
2026-10-15 when the work branch `zoodb-flmrs` (worktree `.worktrees/zoodb-flmrs`) was
created; prototypes live in `scratch/proto/` of that worktree and are not committed.

| file | what it holds |
|---|---|
| `01-inventory-flm-usage.md` | every way FLM is used today: in `@phfaist/zoodb`, in `zoodb-example`, in `eczoo_sitegen` (site, browser apps, scripts), in `eczoo_handbook`; the features enabled; the data that flows around the FLM layer |
| `02-mapping-to-flm-rs.md` | concept-by-concept map from the current (python-transpiled) FLM layer to `flm-rs` concepts, with what has no counterpart |
| `03-design-questions.md` | the ordered list of design decisions to settle, each with context, options, a recommendation and its status |
| `04-technical-risks.md` | things to verify with a prototype before the design is final |
| `05-upstream-requests.md` | requests and proposals for flm-rs that would simplify or clean up the design |
| `06-repo-change-map.md` | the fate of every part of this repository under the decisions (remove, replace, adapt, keep), the `zoodb-example` port, and the build order |
| `07-step0-prototype.md` | step zero of the build order: the prototype crate and scripts in `scratch/proto/`, how to run them, the measurements (module size, memory, timings, diagnostics on the two test data sets) and what they verified |
| `checks/` | small read-only scripts run to verify a claim in the design (each says how it is run and what it found) |

Status log:

- 2026-10-14: initial survey of the code bases; questions drafted, none settled yet.
- 2026-10-14: baseline corrected (services are called during the run); upstream request list started (05).
- 2026-10-14: Q1, Q2, Q3 decided (clean break; ZooDb-specific binding on flm-core, no page composition in the binding; per-unit-of-rendering documents + zoo-wide scan run).
- 2026-10-14: Q4–Q7 decided (JavaScript composes pages through a declare-run-substitute protocol over the per-tree HTML table; standalone fields enforced at parse time through a restricted scope, upstream U6; citations gathered outside the run, CSL left as is; graphics by reference from a host-filled map, `srcset` through upstream U5, agreed). Q8's shape follows from Q4.
- 2026-10-14: Q4.3 revised after the token protocol was rejected: two-pass model (record pass, run, compose pass), true JavaScript logic over real strings. Q5: feature-level restricted-scope parse is the one live upstream request (now U1); former U1–U5 withdrawn or deferred with their cases kept in 05. Q7: `srcset` by a ZooDb publish stage, no upstream request.
- 2026-10-14: `ref()` is host-built (index + snippets, extensible without touching `\ref`). Q5 settled: `Inline` layout plus a ZooDb standalone-check stage over the tables; the restricted-scope parse request withdrawn. U1 is again the guard stack budget, now agreed.
- 2026-10-14: Q4.3 marker variant written up against the two-pass model (recommendation: markers, Philippe to choose). Q9: comparison with a compute-stage-plus-table alternative (recommendation unchanged, Philippe to weigh). Q10 decided; Q11 accepted for now; Q12 decided (recomposed LaTeX, one run per handbook unit, the handbook composes).
- 2026-10-15: Q4.3 decided (marker approach). Q9 accepted for now (snippet run). Q12 reopened: one run for the whole handbook recommended over per-unit runs (safe labels are per document; labels must then be unique zoo-wide, 3 duplicates in the EC zoo data). Q13 accepted (the graph app renders previews and loads the wasm module; truncation helper R18). Q14 decided (everything compiled in; data interface for settings and user definitions). Q15 accepted (positions mapped by the host; the YAML loader has none today). A stray one-line `04-technical-risks.md` at the repo root was removed.
- 2026-10-15 (later): Q12 (A) accepted (not a ruling). Q15: the `yaml` package checked on all EC zoo data files: identical values but 127 files rejected for quoted values continued at the key's column; literal block scalars map line for line; loader choice open for Philippe. Q16 decided (Rust `field` element). Q17 decided (workspace, two crates, one module each).
- 2026-10-15 (evening): Q15 ruled (strict `yaml`, lenient multi-line strings disallowed). Q18: the two loading levels of today analyzed; one wasm module, three levels (data only, engine, processor); surface proposed. Ruling: nothing moves to flm-rs for now; generic where easy, all in ZooDb.
- 2026-10-15 (night): Q18 accepted; Q8 closed by it. All eighteen questions settled or accepted for now. `06-repo-change-map.md` written: the fate of every file, the `zoodb-example` port, the build order with a prototype step in `scratch/proto/`. R19 added (data-level syntax compatibility, checked by the first prototype's scan over all EC zoo data).
- 2026-10-15 (late): rulings: work branch `zoodb-flmrs` in worktree `.worktrees/zoodb-flmrs`, all edits there; design documents moved to `dev-docs/initial-design/`; prototypes in `scratch/proto/`; no sweep of the EC zoo data, the test data are `zoodb-example/data` and `eczoodb/test_data`. Step zero started: `flm-core` compiled to wasm, driven over both data sets (07): module 4.9 MB (1.2 MB brotli), 68 MB memory at start, both data sets parse clean, scan and render work, R13 verified, one list-syntax discrepancy found.
- 2026-10-15 (night): step zero milestone 1 done (07): the marker composition of the zoodb-example pages, the external index from JavaScript, the snippet cache and the host-built `ref()`; R16 and R14 settled. The standard-library share of the module measured (B-tree and sort monomorphizations) and the size levers parked in 05.
- 2026-10-16: step zero milestone 2 done (07): the citations and graphics tables filled from JavaScript before a run, the provider, resolver and inspector as lookups over them; both data sets render with every citation and image resolved; the scan lists images from the element index. R8: the plan preference between two writers of the published table verified; the `srcset` table write blocked on a missing constructor, requested as U2 (05, the one necessity found so far).
