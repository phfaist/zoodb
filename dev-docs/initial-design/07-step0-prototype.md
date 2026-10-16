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

## Milestone 2: the citations and graphics tables, the services as lookups, `srcset` (2026-10-16)

A service of flm-core is fixed when the registry is built and runs synchronously
inside a run, so the wasm host cannot hand it a JavaScript callback that awaits
anything. The engine therefore holds two tables that JavaScript fills *before* a run
from what the scan reported, and the services are lookups over them (`src/host.rs`):

- `set_citations([{ key, text }])`: the compiled citation texts of the existing
  citation manager (`cache_compiled_citations.json`, FLM source with `\textit`,
  `\textbf`, `\href`), keyed by `prefix:key` with the prefix in lower case. The
  `CitationProvider` answers a cited key by that normalized key, parses the text with
  `ProviderCx::parse_entry`, and gives the normalized key as the work's identity, so
  `arXiv:…` and `arxiv:…` are one work. A key not in the table is "not mine", which
  flm-core reports as `flm.citations.no-entry` at the first citation: the signal for
  the collect-then-rerun fallback of Q6.
- `set_graphics([{ origin, path, identity, media_type, address, kind, width_px,
  height_px, dpi, width_pt, height_pt }])`: one entry per image the JavaScript resource
  collector found and inspected, keyed by the canonical path of the source the image
  is written in (`people/Alice.yml#biography`, which is what the inspect stage hands
  the services, following the provenance chain back to the first source with a
  canonical path) and the path as written. The `GraphicsResolver` returns the identity,
  media type and address; its `read` returns no content (the host inspected the file
  outside the run and the inspector does not read the content); the
  `GraphicsInspector` returns the pixel size and resolution of a raster image or the
  physical size of a vector image. A miss is `flm.graphics.resolve-failed`.

The scan now lists images from the element index (`flm.element-index`) instead of
`flm.graphics.info`, whose stage would ask the resolver before anything is collected;
each entry carries the path as written and the origin, the key of the graphics table.
`js/host_tables.mjs` fills both tables: the citations from a compiled cache, and the
images found beside the object's source file (extensions tried as the collector does),
hashed, addressed through a permalink function, and inspected with the measures of
ZooDb's collector (PNG `IHDR`/`pHYs`, JPEG `SOF`/JFIF density, SVG `width`/`height` or
`viewBox`). Run it through the two runners:

```sh
node js/run_zoo.mjs --kind example --data …/zoodb-example/data --schemas …/zoodb-example/schemas \
    --citations …/zoodb-example/website/_zoodb_citations_cache/cache_compiled_citations.json [--srcset 2]
node js/run_zoo.mjs --kind eczoo --data …/eczoodb/test_data --schemas …/eczoodb/schemas \
    --citations …/eczoodb/_TEST_zoodb_citations_cache/cache_compiled_citations.json
node js/compose_example.mjs --data … --schemas …   # the citations cache found beside the data
```

Results (runs alone, Node, the module of this milestone at 5,008,498 B, 59.7 KB more
than milestone 1 for the two services, the feature and the tables):

| | zoodb-example (5 objects, 11 fields) | eczoodb test_data (43 objects, 109 fields) |
|---|---|---|
| cited keys found / missing | 4 / 0 | 66 / 1 (`manual:{A. Smith …}`, absent from the test cache) |
| images found / missing | 1 / 0 (PNG 666 px, 300 dpi) | 6 distinct for 8 uses / 0 (PNG 600 dpi, JPEG 1050 dpi, two SVG) |
| fill both tables | 7 ms | 22–29 ms |
| parse / scan / render | 10–11 / 23–26 / 73–76 ms | 48–57 / 34–36 / 231–256 ms |
| `flm.citations.*` / `flm.graphics.*` in the render | none | one `no-entry` for the missing key; nothing for images |

Every `<img>` now carries the address the host gave and the size the inspector
reported (`src="/pic/Smiley-eba41315.png" style="--flm-element-width: 159.84pt; …"`:
666 px at 300 dpi), and the bibliography piece shows the compiled entries with their
italics, bold and links. Bob's composed page from milestone 1 renders with its four
citations resolved and Alice's with her figure. The citation table costs nothing
measurable per run (the EC zoo render is 217–256 ms with or without it). The EC zoo
render is slower than in milestone 0 (101–120 ms): the inspect stage and the
resolver now run for every image, and the runs were timed on a busier machine; worth
re-measuring in step 2, not a concern.

**`srcset` (R8): the plan mechanism is verified, the table write is blocked.** The
compiled-in ZooDb feature (`src/zoodb_feature.rs`, feature name `zoodb`) declares the
html published table as a peer table and registers `zoodb.graphics.publish.html`, a
per-tree stage that reads `flm.graphics.info` and computes, for each image, the
address by reference and Parcel's candidates as ZooDb computes them today
(`…?as=webp&width=W&height=H` with the descriptor `Nx` for each density below the
image's resolution; the `srcset` entry of the engine's configuration carries
`pixel_density_list` or `image_max_zoom_factor`). The native test confirms what the
design relied on: with the stage registered and no preference, the plan refuses the
html workflow, naming both writers (`flm.graphics.publish.html`,
`zoodb.graphics.publish.html`); with `Overrides::prefer` naming the ZooDb stage, the
plan builds and the stage runs for every tree. What it cannot do is write the value:
`GraphicsPublished` has a private map, and its only public constructor is `Default`
(empty); `absorb` takes another `GraphicsPublished`. The stage therefore reports
`zoodb.graphics.publish-failed` for a tree with images and writes an empty table
(the image rule then refuses the image, `flm.lowering.rule-failed`), and the complete
path is kept behind the cargo feature `published-insert`, which names the one-line
constructor requested upstream as **U2** (05). The engine registers and prefers the
stage only when `srcset` is configured, so every run without it is unaffected. The
alternatives were weighed and rejected in 05: rewriting the emitted HTML, or a ZooDb
image rule duplicating the standard rule's private option and size logic.

Also learned: `\includegraphics` is declared inside floats only under
`StdcoreConfig::new()` (`GraphicsConfig::global` opens it at top level), and the
`DiagnosticInfo` derive expands to `::techy::…` paths, so a crate that declares a
diagnostic of its own lists `techy` as a dependency (same version as flm-core's).

## Milestone 3: the standalone check and the `field` element (2026-10-16)

Two more pieces of the compiled-in ZooDb feature (`src/zoodb_feature.rs`), both exercised
natively and through the module.

**The standalone check (Q5, R17).** The feature declares an external table
`zoodb.standalone.trees` (the set of tree identifiers parsed from standalone fields,
which the engine installs per scan run with `Externals::install_unstamped` from the
handles JavaScript names: `scan(handles, standalone_handles)`), a capability
`zoodb.standalone.checked`, and a `Check` stage of document scope,
`zoodb.standalone.check`, that provides it. The scan plan demands the capability. The
stage reads, for every standalone tree, `flm.refpoints` (every reference point of the
tree, `RefPoints::of_tree`), the sites of `flm.refs.resolutions` (`SiteId::addr`
carries the tree), and the element index for `flm.citations.cite`, `flm.citations.refcite`
and `flm.graphics.image`; each is the Error `zoodb.standalone.violation` at the node's
span, so the diagnostic carries the field through the tree's origin
(`b.yml#name`). Every point R17 listed to verify holds: the site identifier carries the
node address, an external table installs unstamped per run and reads as optional
(`Needs::reads_opt`, absent when no tree is marked), a stage reads the tables of three
standard features without declaring them, and the diagnostic names the field. A
footnote in a standalone field is reported twice, as the note and as its mark, since
both are reference points. Over the data: 5 standalone fields in `zoodb-example`, 25 in
the EC zoo test data, no violation; the scan's cost is unchanged (13 ms, 29 ms).

**The `field` element (Q16).** `\begin{field}{name} … \end{field}` is declared as an
environment with a mandatory argument and a verbatim body (`BodyDef::new().verbatim()`),
element `zoodb.field` with a block role, never rendered: the html plan lists it as
unsupported (`Overrides::unsupported`), so a data field that holds one is reported at
the node rather than refusing the plan. `parse_fields(text, origin)` parses the file
as blocks with the registry's language and returns each field's name and the byte
range of its body (between the closing brace of the name and `\end{field}`), plus the
parse diagnostics and one `zoodb.fields.stray-content` Error per line outside the
fields that is neither blank nor a comment. `js/flm_fields.mjs` applies the loader's
own trim, dotted-path assignment (`key1.innerkey.[]` appends) and front-matter split,
and reproduces the expected objects of `test/test_dbdataloader_flmfilesdb.js` exactly;
an unclosed field is `core.environments.missing-terminator` with its position. Parsing
the fixture takes 2 ms. Q15's positions come for free: every byte range is in the file's
own text.

Module size 5,033,996 B (+25.5 KB). Render timings on a quiet machine, both tables
filled: `zoodb-example` 34 ms, EC zoo test data 135 ms, so milestone 2's slower figures
were machine noise.

## Milestone 4: settings and user definitions as data (2026-10-16)

The engine now builds the standard package through `stdcore::factory()` instead of
`stdcore::package(StdcoreConfig::new())`: the configuration takes `settings`, one map
per feature as flm-core's settings-as-data route reads them (`{ feature: { key: value
} }`), and `off`, the standard features switched off by name. Each feature's map is read
through its declaration (`SettingsDecl::read`), which refuses an unknown key or a value
of the wrong shape with the key's path (`the feature `math` has no setting
`no_such_key``; `the value of `quote.environments.quote.sections` is invalid: invalid
type: map, expected a sequence`), and gives the feature's configuration (into the
package), its document options (set on every document the engine places) and its
render options (merged into every plan's request before the per-call ones). User
definitions go under `userdefs`: `macros`, `environments` and `specials`, each a map
from the name to `{ args, content, defaults, docs, … }`, `args` written as argument
codes (`"{"`, `"[{"`) and `content` one template or `{ text, math }`. `ZooFlm.features()`
returns the standard features and, for each that takes settings, the JSON Schema of its
settings, for documentation and for validation on the JavaScript side. `js/settings.mjs`
exercises it through the module:

- 33 standard features, 23 with settings; the top-level keys of each are listed in the
  script's output (`citations`: placement, mark, style, heading title and level, note
  separator; `refs`: join, unresolved, safe label types, protect; `graphics`: global,
  strategy, convert, magnification; `html`: title, lang, source spans, definitions, …).
- A macro `\kw{#1}` defined as data renders `\kw{term}` as `<strong …>term</strong>`; a
  per-mode definition `\zoo` gives `the Zoo` in text and `\mathcal{Z}` inside `\(…\)`;
  `annotations` is switched off; the unknown key is refused.
- The EC zoo's one custom feature (`FeatureQuote`) is the standard `quote` feature's
  default environments (`quote`, `blockquote`, `address`); `\begin{quote}` parses and
  renders without any setting. Its `environments` map takes a list of sections per
  environment; nothing needs to be set for the EC zoo.
- `dollar_math` stays a parsing input (`RegistryInputs.parsing`), not a setting.

Both data sets render as before through the factory-built registry. Module size
5,072,374 B (+38.4 KB for the settings declarations and the schema generator).

### Not covered yet (the remaining milestones of step zero)

1. ~~The citations table and the graphics map~~ Done in milestone 2, except the `srcset`
   table write, blocked on U2.
2. ~~The standalone check stage and the `field` element~~ Done in milestone 3.
## Milestone 5: the handbook's recomposed LaTeX in one run (2026-10-16)

`render_latex(handles, { raw_label_types, drop_comments, unresolved_refs_warning })`
runs the `latex-recomposed` workflow over the given fragments as one document, with the
external index installed as for HTML, the object label types marked `Raw`
(`RefsRecomposeOptions::safe_label_types`), every other type safe, and returns the
per-tree LaTeX (`flm.output.latex-recomposed`), the style file the run produced
(`flm.output.latex-recomposed.style`, `flmrecomposed.<hash>.sty`) and, for reference,
the whole document the workflow's final stage assembles. `js/handbook_example.mjs` does
what `genltx_code.js` does today over the EC zoo test data: `\eczcode{id}{name}{…}` and
`\codefieldsection{title}` as the handbook's own strings, each code's name from a snippet
run with the LaTeX output, every other field a marker, one run over all markers (the
shape (A) of Q12), and an `.eczaux` with one `\eczauxDefRefCode` per code.

| | EC zoo test data |
|---|---|
| codes / fragments / trees in the one run / snippets | 10 / 109 / 72 / 25 |
| parse / scan / snippet run / the run / substitution | 23 / 16 / 12 / 34 / 0.1 ms |
| LaTeX produced / style file / assembled document | 24.9 KB / 37.0 KB (`flmrecomposed.58ecd68c.sty`) / 21.9 KB |
| safe labels: written / distinct | 12 / 12 (`ref1`…`ref12`, unique over the run) |
| references: safe / raw object keys | 2 / 5 (`\flmRef{code:ecc}`, `\flmRef{topic:CSS-to-homology-correspondence}`, …) |
| citation hooks (`\flmCitePreSpace\flmCite{arXiv:…}`) | 61 |
| images | `\begin{flmFloat}…\flmIncludeGraphics{figures/testfigure-d6b1271c.png}`, the address from the graphics table |
| leftover markers / `[[` left in math | 0 / 6 |

What R7 asked to verify, as found: safe labels are numbered once over the run and stay
unique without any prefixing, so the handbook's global-key machinery goes away under (A);
a raw object type is written as the document spelled it, inside the same `\flmRef` hook
as a safe label, so `\flmRefsHyperref`'s dispatch on an aux definition works unchanged;
`\eqref` over a safe label stays `\eqref{ref1}`; `drop_comments` removes the comments
(flm-core requires `%%` to start one; a lone `%` is the Error `flm.lang.percent-forbidden`,
which the EC zoo data already obeys); the style file is one per run and requests
`zref-clever`, `hyperref`'s hooks and the rest through its package block, so it replaces
`flmlatexdefaults.sty`; the memory of the run stays at 71.5 MB. Not done by FLM: the
`[[`/`]]` ligatures of mathematics (6 left in these 10 codes), which the handbook
rewrote in its patched recomposer; mathematics is passed through byte for byte, so the
handbook either keeps a rewrite of its own over the math source or defines the ligature
in LaTeX. One full-size run over the whole zoo (R5) remains to be timed once the loaders
exist; the per-tree cost here (0.5 ms per tree) extrapolates to a few seconds.

3. ~~Settings and user definitions as data~~ Done in milestone 4.
4. ~~The handbook~~ Done in milestone 5 (the full-size run remains for R5).
5. The truncation helper over the parsed tree (R18) and the text backend (Q11).
