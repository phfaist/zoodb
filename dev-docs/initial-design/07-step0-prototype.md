# 07 — Step zero: the prototype (brief and results)

The first step of the build order of `06-repo-change-map.md`: before any file of the
package changes, a throwaway crate compiles `flm-core` to WebAssembly, a Node script
drives it over real zoo data, and the numbers and findings gate the next steps. Rulings
that shaped it (Philippe, 2026-10-15): prototypes live in `scratch/proto/` of the
worktree `.worktrees/zoodb-flmrs` (branch `zoodb-flmrs`); no sweep of the EC zoo data
now (the FLM syntax is the same or nearly so, and agents fix discrepancies during the
switch); the test data are `zoodb-example/data` and `eczoo_sitegen/eczoodb/test_data`.

## What the prototype is

`scratch/proto/` (not part of the package, ignored by git through its own `.gitignore`
for build output; the folder itself is untracked):

| path | what |
|---|---|
| `zoodb-flm-wasm/Cargo.toml` | the crate `zoodb-flm-wasm-proto`: a path dependency on the local `flm-rs/flm-core` checkout with `default-features = false` (no rayon), `wasm-bindgen`, `serde-wasm-bindgen`; release profile `opt-level = "s"`, `lto`, `panic = "abort"`, `wasm-opt -Os`, as the citation crate |
| `zoodb-flm-wasm/.cargo/config.toml` | links the wasm module with a 64 MiB stack (`-zstack-size=67108864`), the size `flm-core`'s worker-thread requirement assumes (R1) |
| `zoodb-flm-wasm/src/engine.rs` | the engine in plain Rust (compiles and tests natively): registry (`stdcore` + `math-passthrough`, parsing settings from a config), `parse` into fragment handles with origins `path#field`, `render_html` of a list of handles as one document (per-tree HTML, pieces, required definitions, the definitions table, diagnostics), `scan` of a list of handles through a bare plan request (cited keys, labels, duplicates, reference resolutions, graphics paths; no retrieve, no output), diagnostics mapped to identifier, severity, message, origin, byte range and line/column |
| `zoodb-flm-wasm/src/lib.rs` | the wasm-bindgen wrapper `ZooFlm` (`parse`, `render_html`, `scan`, `build_diagnostics`); `start` marks the single thread as the worker thread |
| `js/load.mjs` | loads the module in Node from the `.wasm` file and reports instantiation time and initial memory |
| `js/run_zoo.mjs` | loads a zoo's YAML files with the `yaml` package, walks each object with its schema to find the `_flm` fields (`full` → auto layout, `standalone` → inline, `block_level` → blocks), parses every field, runs the zoo-wide scan, renders every object as one HTML document, tallies diagnostics by identifier with one example each, writes one HTML file per object |
| `js/wasm_sizes.mjs` | sums a module's code section by crate and module from the `name` section (v0 symbol mangling) |

How to run (every path read-only except the output folder):

```sh
cd scratch/proto/zoodb-flm-wasm
cargo test --release                      # the native test of the engine
wasm-pack build --release --target web --out-dir pkg --out-name zoodb_flm_wasm_proto
cd ../js
NODE_MODULES=$ECZOO/eczoo_sitegen/node_modules node run_zoo.mjs --kind example \
    --data ../../../../zoodb-example/data --schemas ../../../../zoodb-example/schemas --out ../out/example
NODE_MODULES=$ECZOO/eczoo_sitegen/node_modules node run_zoo.mjs --kind eczoo \
    --data $ECZOO/eczoo_sitegen/eczoodb/test_data --schemas $ECZOO/eczoo_sitegen/eczoodb/schemas --out ../out/eczoo
node wasm_sizes.mjs ../zoodb-flm-wasm/target/wasm32-unknown-unknown/release/zoodb_flm_wasm_proto.wasm 2
```

## Results (2026-10-15, flm-rs at the local checkout, Rust 1.97, wasm-pack 0.15, wasm-opt 117)

### The module (R2)

| variant | wasm | gzip -9 | brotli -q 11 | as base64 JS (×1.37) |
|---|---|---|---|---|
| `opt-level = "s"`, `wasm-opt -Os` (the citation crate's settings) | 4,948,846 | 1,708,917 | 1,224,630 | ≈ 6.8 MB |
| `opt-level = "z"`, `wasm-opt -Oz` | 4,050,059 | 1,479,898 | 1,088,330 | ≈ 5.5 MB |

For scale, the citation module is 631,327 bytes of wasm. Of the `-Os` module, the code
section is 4.04 MB and the data section 0.90 MB (about 0.55 MB of it readable text:
the stylesheets with their comments, messages, documentation strings of settings).

Code size by crate, measured on the unstripped artifact (4.96 MB of code before
`wasm-opt`, 17,182 functions):

| crate or module | share |
|---|---|
| `flm_core` | 42% (`stdcore` 27%: numbering 134 KB, html backend 91 KB, xnotes 78 KB, refs 78 KB, latex-rendered backend 68 KB, lowering 66 KB, graphics 63 KB, citations 63 KB, theorems 62 KB, lists 59 KB, latex-recomposed backend 57 KB, cells 54 KB, serdefs 53 KB, floats 48 KB, headings 47 KB, math 41 KB, text backend 39 KB, latex 38 KB, defterm 33 KB; `core` 8.6%; `lang` 4.5%) |
| `alloc` + `core` (Rust's standard library, monomorphized collections) | 32% |
| `techy` | 7.5% |
| `serde_path_to_error` + `schemars` + `serde_json` (the settings-as-data machinery, linked through every feature's `settings()` method) | 13% |
| everything else | 5% |

The standard library's share is monomorphization driven by `flm-core`'s and techy's
generic code, counted on the unstripped artifact: the B-tree maps are 2,570 functions
and 639 KB (12.9%; the node, map, entry, navigate and search code is instantiated once
per distinct key and value type pair, on the order of a hundred pairs); the slice sorts
are 732 functions and 291 KB (5.9%; the stable sort is instantiated once per distinct
element type and comparator closure, about 115 times at 2.5 KB each); `Vec` is 806
functions and 121 KB plus 89 KB of `collect`; drop glue is 739 functions and 63 KB.
Fewer distinct map instantiations (one key type, boxed or indexed values) and a sort
whose core takes a `dyn` comparator would cut perhaps half of the map code and most of
the sort code, roughly 400 to 500 KB of the 4.0 MB code section, about a tenth of the
module. That is flm-rs work, parked under the ruling; it is noted in
`05-upstream-requests.md`.

What follows for the design: the module cannot be inlined as base64 for the browser
apps (5.5 to 6.8 MB of JavaScript); it is served as a `.wasm` file, compressed by the
server and cached (1.1 to 1.7 MB on the wire), which settles the open choice of Q17 for
the browser. In Node the bytes are read from disk. The two optimization levels differ
by 18%; which one is used is a build setting to decide when the real crate exists. The
other levers are flm-rs cargo features (a backend or the settings schema machinery left
out) and are parked under the ruling that nothing is asked of flm-rs now; they are
listed in `05-upstream-requests.md` only if the size proves a problem in practice.

### Memory and start-up (R1)

The module's memory is 68,026,368 bytes at instantiation: the 64 MiB stack the link
reserves plus the data. Instantiation takes 20 to 44 ms in Node; building the registry
takes 67 to 81 ms once per engine. The library's guard worked as documented on one
marked thread: no worker thread was created, and no parse reported
`flm.lang.worker-thread-unavailable`. A smaller stack needs U1 (the configurable guard
budget), which stays the one agreed request.

### The two data sets

| | `zoodb-example` | `eczoodb/test_data` |
|---|---|---|
| objects / FLM fields / characters | 5 / 11 / 1,424 | 43 / 109 / 22,039 |
| parse (all fields) | 9 ms | 31–37 ms |
| scan (one run over all fields) | 14–17 ms | 20–45 ms |
| render (one HTML document per object) | 33 ms | 101–120 ms |
| parse diagnostics | none | none |
| scan: labels / references resolved / unresolved / cited keys / images | 2 / 2 / 2 / 4 / 1 | 13 / 9 / 8 / 69 / 8 |

Every unresolved reference points at a zoo object (`person:alice`, `code:css`,
`codelist:quantum`): the external index of Q4 is not wired yet, so these are the
expected warnings. Every citation key is reported as `flm.citations.no-entry` under the
render (no provider is wired yet, Q6) and not under the scan, which demands the keys
alone (the scan's only diagnostics are the unresolved references). Every image is reported as `flm.graphics.unknown-size` under the render (no
inspector yet, Q7). The one finding about content: `codes/binary_linear.yml`, field
`protection`, writes `\begin{itemize}[{⇒}]`, a custom bullet the python FLM accepted;
flm-rs's lists feature refuses it (`flm.lists.unknown-key`: a list takes `label=…` or
a short form). This is the kind of discrepancy the switch fixes in the data, as ruled.

Extrapolation for the EC zoo (3.7 MB of YAML in `eczoo_data`, 1,250 files, 1,155 of
them codes): at the measured rate of about 1.5 μs per character of field text, and
counting the whole YAML size as an upper bound on the field text, parsing everything
would take on the order of 5 s, the zoo-wide scan a few seconds more, and rendering
1,155 code pages at 2.7 ms each on the order of 3 s. To be measured on the real data
when the switch is made.

### What the prototype verified

- **Embedding flow on wasm** (Q2, Q14's engine): registry once, fragments as handles
  held in wasm memory, documents assembled per call from handles, plans cached per
  options key, results read from tables. Works as the AI guide describes.
- **R13, scan plan without retrieve**: a bare `PlanRequest` demanding
  `flm.citations.keys`, `flm.labels`, `flm.refs.resolutions` and `flm.graphics.info`
  plans without the citations retrieve stage and without any output stage. Verified
  natively and on wasm.
- **R11, positions**: every diagnostic carries the origin `path#field`, the byte range
  into the field and the line and column within the field.
- **Q5, standalone fields**: a field parsed with the `Inline` layout renders as inline
  HTML without a paragraph wrapper (`My Test <span …>\(x:y\)</span>-Code`).
- **Q10, the HTML contract**: classes `flm-pres-*`, attributes `data-flm-*`, anchors
  such as `#eq-stabilizers` and `#citation-1`, stylesheets delivered inline under
  `@layer flm` with CSS custom properties, and the one script definition
  `flm.html.mathjax` pointing at `https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js`.
- **The data**: both sets parse without a single parse diagnostic.

## Milestone 1: markers, the external index, the host-built `ref()` (2026-10-15)

`js/compose_example.mjs` composes the five person pages of `zoodb-example` the way its
`person.11ty.js` template does, through the composer protocol of Q4.3/Q8, and the
engine gained `set_external_index(entries)` (label, href, display as FLM text), which
parses each display inline and copies it into a synthesized value, and installs the
index in every render run. Run it with:

```sh
NODE_MODULES=$ECZOO/eczoo_sitegen/node_modules node compose_example.mjs \
    --data ../../../../zoodb-example/data --schemas ../../../../zoodb-example/schemas \
    --out ../out/compose --index-size 2000
```

What it does: parses the fields (names inline, the rest auto), renders every
standalone fragment once in one run (the snippet cache, Q9 b), installs the index of
the five people, then for each page runs the JavaScript composer once with helpers
`ne`, `rdr`, `rdrblock`, `ref`, `refhref`, `piece`: `rdr` of a standalone fragment
returns the cached HTML, `rdr` of any other fragment returns a marker and records the
fragment in document order, `ref(type, id)` builds the link from the permalink and the
snippet cache, `piece(name)` returns a marker; then one `render_html` over the recorded
fragments in that order, and the markers are replaced by the trees' HTML and the
pieces' HTML.

Results:

- Every marker of every page is substituted (zero left over); pages with two fragments
  (a friend detail after the biography) number and order as composed.
- An in-content `\ref{person:alice}` resolves through the index to
  `<a class="flm-pres-link" href="/person/alice" data-flm-kind="ref">Alice Aaliz</a>`,
  the display rendered from the parsed name (R6 verified); `\hyperref[person:alice]{…}`
  resolves too; the host-built `ref()` from the snippet cache gives the same text. No
  `flm.refs.unresolved` remains.
- The bibliography piece is placed where the composer put its marker (with
  `flm.citations.no-entry` markup inside, since no provider is wired yet); the footnote
  list piece is absent on pages without footnotes, as expected.
- R14: an index of 2,005 entries is built (every display parsed) in 103 ms and installed
  per run by cloning a map of shared trees; rendering a page with it installed takes
  4.7 ms, the same as without. Memory after everything: 76 MB.
- Timings: parse 2.6 ms, snippet run 18.5 ms, five pages composed and rendered 22.7 ms.

This settles R16 (the marker composition) and R14 (the index cost) for the shape of
Q4/Q8/Q9 as decided.

### Not covered yet (the remaining milestones of step zero)

1. The citations table and the graphics map filled from JavaScript before a run, with
   the provider, resolver and inspector as lookups over them (Q6, Q7), and the `srcset`
   publish stage (R8).
2. The standalone check stage over the tables (Q5, R17) and the `field` element for the
   FLM-files loader (Q16), the first two pieces of the compiled-in ZooDb feature.
3. Settings and user definitions given as data from JavaScript (Q14) through
   `stdcore::factory`, and the `quote` feature's configuration for the EC zoo.
4. The handbook: one `latex-recomposed` run over a handful of codes (Q12, R7).
5. The truncation helper over the parsed tree (R18) and the text backend (Q11).
