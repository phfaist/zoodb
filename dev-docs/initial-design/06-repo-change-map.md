# 06 — Map of the changes in this repository

What each part of `@phfaist/zoodb` becomes under the decisions of `03-design-questions.md`,
and the order in which to build it. Nothing here is edited yet: the rule of the design
phase was that edits stayed in `scratch/`; since 2026-10-15 all edits go to the worktree
`.worktrees/zoodb-flmrs` on the branch `zoodb-flmrs`, with briefs in `dev-docs/initial-design/`. Line counts are today's,
for a sense of weight. Fates: **remove**, **replace** (new code, same role), **adapt**
(same code, changed at the edges), **keep**.

The first target is `zoodb-example` (section L); the EC zoo repositories come after
(section M).

## A. Rust crate and build (Q14, Q16, Q17)

| today | fate | becomes |
|---|---|---|
| `rust/` single package `zoodb-autocitefetch-wasm` | adapt | a cargo workspace with two members: the citation crate as it is, and a new `zoodb-flm-wasm` crate: `flm-core` plus the stdcore package, the ZooDb feature (the `field` element with verbatim body, the standalone check stage `zoodb.standalone.check`, the `srcset` publish stage `zoodb.graphics.publish.html`), the settings and user definitions taken as data, host services over JavaScript callbacks (citations lookup, graphics map lookup), the marker substitution, the diagnostic spans as byte offsets. `parallel` off. Guard budget per U1 once available. |
| `rust/build.rs`, `rust-toolchain.toml`, `Cargo.lock` | keep | shared by the workspace. |
| `tools/build_wasm.mjs` | adapt | builds both crates; same output layout per crate (glue, `.d.ts`, base64 or `.wasm` file after the R2 measurement, `BUILD_INFO.json`); same forbidden-token check. |
| `src/citationmanager/_wasm/`, `_load_wasm.js` | keep | the pattern is copied for the FLM module: `src/zooflm/_wasm/` and an environment-neutral `src/zooflm/_load_wasm.js`. |

## B. The FLM layer, `src/zooflm/` (Q2, Q4, Q5, Q8, Q9, Q10, Q11, Q18)

| today | fate | becomes |
|---|---|---|
| `flm-js-src/` (3.3 MB, 104 transpiled files), the symlink `src/zooflm/_flm-js`, `COPY_IN_FLM_JS_SOURCES.txt`, the `.gitignore` entry `flm-src`, the package export `./flm-js/*` | remove | nothing; the clean break of Q1. |
| `_environment.js` (946): `ZooFLMEnvironment`, features, `RefResolver`, `CitationsProvider`, `FeatureZooGraphicsCollection`, `zooflm_default_environment_options`, `RefInstance`, `ReferenceableInfo`, `FloatType`, `GraphicsResource`, `EndnoteCategory` | replace | the engine object (level 1 of Q18): instantiates the module with the zoo's settings and definitions, holds the external tables (index per output context, citations, graphics map, snippet cache), makes fragment handles, runs documents and fragments, maps diagnostics. The python-side classes disappear; the ref index is data built by the processor; `RefInstance` becomes the host-built `ref()` of Q4. |
| `_fragmentrenderers.js` (136): `ZooHtmlFragmentRenderer`, `ZooTextFragmentRenderer`, `html_fragmentrenderer_get_style_information` | remove | the HTML and text backends live in the module. The stylesheet comes from the HTML backend's definitions tables (Q10), exposed by the engine as one call that returns the CSS the rendered content requires. |
| `_renderutils.js` (355): `render_value`, `value_not_empty`, `make_render_shorthands` (`ne`, `rdr`, `rdrblock`, `ref`, `refhref`), `make_and_render_document`, `render_html_standalone`, `render_text_standalone` | replace | the composer protocol of Q4.3/Q8: `render_document({ compose, context, metadata })` runs the composer once with the same helper names; `rdr` of a non-standalone fragment returns a marker substituted after the run, `rdr` of a standalone fragment, `ref` and `refhref` return strings; pieces (endnotes, bibliography) placed by the composer through a helper instead of the `<RENDER_ENDNOTES/>` tag; the standalone renderers read the snippet cache (Q9). The helper set is the one of Q18. |
| `scanner.js` (383): `ZooFLMScanner` (`get_encountered`, `get_encountered_references_to_labels`) | replace | `scan()`: the zoo-wide scan run demanding the tables only (citation keys, labels and anchors, reference sites, graphics paths, terms, standalone violations), grouped per object and field. |
| `citationcompiler.js` (1317): `CitationCompiler`, `install_csl_flm_output_format` | adapt | kept as is (citeproc-js, the cache file, the CSL output format producing FLM text). The `flm_compile_fragments` and `flm_environment` options go; compiled citation text is installed into the engine's citations table as FLM source, parsed by the module. |
| `_resourceinfo.js` (61): `ZooFLMResourceInfo` | replace | the fragment origin: object type, id, field, source path (an `FlmOrigin` on the Rust side). |
| `_flmutils.js` (119): `decode_kwargs`, `get_zooflm_error_string` | remove | no transpiled calling convention remains; errors are diagnostics (Q15). |
| `index.js` (44): exports `$$kw`, `repr`, `__class__`, `__super__`, `__get__`, `isinstance`, `FLMDataDumper`, `FLMDataLoader`, `fn_unique_object_id`, and the above | replace | exports the engine, the composer helpers, the scan, the dump and load (Q13), the diagnostics helpers, the truncation helper (R18). |

## C. DB processors, `src/dbprocessor/` (Q3, Q6, Q7, Q13)

| today | fate | becomes |
|---|---|---|
| `flmprocessor.js` (574): `ZooFLMProcessor` (`process_ref_targets_objects`, `process_ref_targets_referenceables`, `process_citations`, `process_collect_resources`, `process_data_dump`, update hooks) | replace | the processor (level 2 of Q18) over the engine: parses every `_flm` field into a handle, runs `scan()`, builds the index per output context (object targets through the per-type display functions, labels and anchors), drives the citation manager and compiler into the citations table, drives the resource collector into the graphics map, runs the snippet run, writes the dump, handles reloads. The same `ZooDbProcessorBase` hooks. |
| `flmsimplecontent.js` (539): `FLMSimpleContentCompiler`, the `_flm` schema annotation (`full`, `standalone`, `block_level`) | adapt | the schema annotation and the field walk stay; a field becomes a fragment handle (layout from `block_level`, standalone flag from `standalone`) instead of a transpiled fragment object; diagnostics collected per object (Q15). |
| `searchabletextflm.js` (79): `FLMSearchableDocTextValuesAssembler` | adapt | renders through the text backend of the module (Q11) over fragment handles. |
| `searchabletext.js`, `relations.js`, `computeddata.js`, `getgitlastmodified.js`, `base.js` | keep | no FLM dependency. |

## D. Data loaders, `src/dbdataloader/` (Q15, Q16)

| today | fate | becomes |
|---|---|---|
| `yamldb.js` (551): `js-yaml` `load()` | adapt | the strict `yaml` package through its document API: values as today, plus the byte range and line of every `_flm` field recorded in the object's `_zoodb` metadata; a clear loader message for the one rejected pattern (a quoted value continued at the key's column). A one-time re-indent script under `tools/` for the 127 EC zoo files. |
| `flmfilesdb.js` (288): the latex-walker parse of `\begin{field}{name}…\end{field}` | replace | the module parses the file with the registry's language; the `field` element of the ZooDb feature returns the fields with their byte ranges; the loader's shape (one object per file, field values as strings) stays. |

## E. Standard setup, `src/std/` (Q15, Q18)

| today | fate | becomes |
|---|---|---|
| `stdzoodb.js` (345): config entries `use_flm_environment`, `use_flm_processor`, `flm_options.{environment_options, allow_unresolved_references, allow_unresolved_citations, refs, citations, resources}`, `continue_with_errors` | adapt | the two entries keep their shape under new names (engine, processor); `environment_options` becomes the settings and definitions data of Q14; `allow_unresolved_*` become the severity policy of Q15; `continue_with_errors` stays as the error policy switch; `refs`, `citations`, `resources` keep their keys. |
| `use_flm_environment.js` (223): `default_target_href_resolver`, the srcset rule, the fallbacks | replace | the engine factory: builds the engine, installs the permalink function as the href resolver of the index, the srcset rule as data for the publish stage, the severity policy. |
| `use_flm_processor.js` (350): `make_citation_sources`, the processor factory | adapt | `make_citation_sources` unchanged; the factory builds the new processor with the same `citations` and `resources` options. |
| `use_searchable_text_processor.js` (48) | adapt | passes the engine instead of the environment. |
| `stdyamldbdataloader.js`, `use_relations_populator.js`, `use_gitlastmodified_processor.js` | keep | |

## F. Resource collector, `src/resourcecollector/` (Q7)

| today | fate | becomes |
|---|---|---|
| `index.js` (187) `ResourceCollector`, `retriever/fs.js` (244), `processor/_inspectimagefile.js` (412) | keep | the collector, the retriever and the image inspector are FLM-independent. |
| `processor/flmgraphicsprocessor.js` (109): builds a transpiled `GraphicsResource` | replace | builds the graphics map entry the module's resolver reads: source path, published target, pixel size, physical size, and the alternative sources for `srcset`. |

## G. Core and citation manager

| today | fate | becomes |
|---|---|---|
| `_zoodb.js` (611), `_zoodbloaderhandler.js` (255), `schemaloader.js` | adapt | the dump contract of Q13 (FLM source per field, index data per context, snippet cache, compiled citations, graphics map, settings hash) goes through the existing `data_dump` and `load_data` and the processor's `process_data_dump`; `_zoodb` metadata gains field positions and `flm_diagnostics`. |
| `src/citationmanager/` | keep | untouched. |

## H. Package, tooling, housekeeping

| today | fate | becomes |
|---|---|---|
| `package.json` | adapt | drop `js-yaml`, add `yaml`; drop the `./flm-js/*` export; add `./zooflm/wasm`; keep `./zooflm`, `./zooflm/scanner` and `./zooflm/citationcompiler` only if they still export something; major version. |
| `.gitignore` | adapt | drop `flm-src` and `COPY_IN_FLM_JS_SOURCES.txt`; `rust/target/` already there. |
| `playground/playeczoo.js` | remove or rewrite | uses the old API; a sample over `zoodb-example` is more useful than one over the EC zoo. |
| `CLAUDE.md`, `README.md`, `tools/README.md`, `rust/README.md`, `dev-docs/` | adapt | the architecture sections for `zooflm`, the Rust workspace and the build. |

## I. Tests, `test/`

| today | fate |
|---|---|
| `test_zooflm_environment.js`, `test_zooflm_fragmentrenderers.js`, `test_zooflm_scanner.js`, `test_zooflm_citationcompiler.js`, `test_dbprocessor_flmsimplecontent.js`, `test_dbprocessor_flmprocessor_citations.js`, `test_dbdataloader_flmfilesdb.js`, `test_std.js`, `test_resourcecollector.js` | rewrite against the new API; the citation-compiler and the citations-processing tests keep their fixtures. |
| `test_dbdataloader_yamldb.js` | adapt to the `yaml` package; add the rejected pattern and the position mapping. |
| `test_std_use_flm_processor.js`, the `test_citationmanager_*` tests, the `test_tools_*` tests | keep. |
| new | the FLM wasm module loads in Node (like `test_citationmanager_wasm_module.js`); the composer with markers on a page of `zoodb-example`; the scan tables; the standalone check; diagnostics positions; the dump round trip; the truncation helper. |

## J. Documentation, `doc/`

| today | fate |
|---|---|
| `zoodb.zooflm.rst` (342), `zoodb.dbprocessor-flm.rst` (42) | rewrite. |
| `website11ty.rst` (174): writing page templates, rendering full object pages | rewrite the template part around the composer. |
| `std.rst` (238), `zoodb.dbdataloader.rst` (42), `zoodb.resourcecollector.rst` | adapt (config keys; YAML strictness and positions; graphics map). |
| `flm.rst`: the FLM syntax summary | adapt to what flm-rs's standard package accepts (R19). |
| others | keep. |

## K. What the EC zoo needs that `zoodb-example` does not

Named so that the first build does not paint them out: the handbook's LaTeX output and
marker composer (Q12), the code-graph dump and truncation (Q13, R18), the preview apps'
in-browser processor (R12), the `quote` feature (stdcore has one), the data re-indent
(Q15), the three duplicate labels (Q12).

## L. `zoodb-example` (the first downstream port; `../zoodb-example` is read-only, the port is made on the branch `zoodb-flmrs` of a clone under `scratch/zoodb-example/`, ruling of 2026-10-17)

| file | change |
|---|---|
| `peopledbjs/myzoodb.js` | the two renamed config entries; `environment_options` becomes settings data; `refs`, `citations`, `resources` keys unchanged. |
| `website/src/person/person.11ty.js` | the composer: same `ne`, `rdr`, `rdrblock`, `ref` helpers, `make_and_render_document` becomes the engine's `render_document`, `<RENDER_ENDNOTES/>` becomes a piece helper, `render_text_standalone` becomes a snippet lookup. The shape of the template survives. |
| `website/src/index.11ty.js` | `render_html_standalone` becomes a snippet lookup. |
| `website/src/dynamic_style/flm.css.11ty.js` | the stylesheet from the engine instead of the fragment renderer. |
| `website/src/dat/zoodbdata.11ty.js`, `website/src/pic/pic.11ty.js`, the search index | unchanged calls (`data_dump`, the collector's data, the searchable text fieldset). |
| `data/` | the 9 YAML files parse under the strict `yaml` package (checked 2026-10-15). |

## M. Downstream after `zoodb-example`

`eczoo_sitegen` (eczoodb, site templates, jscomponents, previewtool, scripts, pdfexport),
`eczoo_handbook`, the `@phfaist/zoodbtools_*` packages (not read). Their inventory is in
`01-inventory-flm-usage.md`.

## N. Build order

Each step ends with `yarn test` green and, from step 4 on, `zoodb-example` building.
The prototypes of `04-technical-risks.md` gate the steps they belong to.

0. **Prototypes, in `scratch/proto/` of the worktree** (no package file touched): the
   `zoodb-flm-wasm` crate with a path dependency on `flm-core`, built with `wasm-pack`,
   to measure the module (R2), run the two test data sets (`zoodb-example/data`,
   `eczoodb/test_data`; no sweep of the EC zoo data, by ruling) through parse, scan and
   render (R5, R13, R11), try the marker composition on one `zoodb-example` page (R16),
   the standalone stage (R17), the handbook run on a few codes (R7) and the truncation
   helper (R18). Progress and results: `07-step0-prototype.md`.
1. **Rust workspace and build** (A): the crate moves from the prototype into `rust/`,
   `tools/build_wasm.mjs` builds both modules, `src/zooflm/_wasm/` and `_load_wasm.js`
   exist, one test loads the module.
2. **Engine** (B): fragment handles, `render_document` with markers, `render_fragment`,
   the snippet cache, diagnostics mapping, the stylesheet call, the text backend.
3. **Processor and standard setup** (C, E, F, G): the field compiler, `scan()`, the
   index, citations and graphics into the tables, the snippet run, dump and load; the
   renamed config entries and the engine factory of `src/std/` (moved here from step 4
   on 2026-10-16, see `10-step3-processor.md`: the setup and its tests go through the
   processor, so the two cannot change in different steps with the tests green).
4. **Loaders** (D): the `yaml` switch with positions and the re-indent tool,
   `flmfilesdb` over the `field` element; `zoodb-example` ported (L).
5. **Removal and documentation** (B first row, H, I, J): `flm-js-src` deleted, package
   exports and version, docs rewritten; the build machine's absolute paths remapped out
   of the two binaries before the package ships the FLM module (found in step 1, 08);
   the 20 lint errors that predate the branch cleared (9 files, 5 of them the old FLM
   layer that goes here).
6. **EC zoo** (M): outside this repository.
