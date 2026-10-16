# 10 — Step 3: the processor and the standard setup (level 2 of Q18)

Build order step 3 of `06-repo-change-map.md` (sections C, E, F, G). Brief written
2026-10-16 while step 2 (`09-step2-engine.md`) was being implemented; to be adjusted to
step 2's results before it is handed to an implementer. Implemented by an implementer
agent and checked by a reviewer agent (Opus); results at the end.

**Change to the build order.** 06 N put the standard setup (`src/std/`) in step 4 with the
loaders. The processor cannot be replaced while the standard setup still builds the old
environment: `use_flm_processor`, `test_std.js` and the citations integration test go
through the setup, and every step ends with `yarn test` green. So step 3 is the processor
*and* the standard setup (`use_flm_environment` becomes the engine factory,
`use_flm_processor` and `use_searchable_text_processor` build the new processors), and
step 4 keeps the loaders (the `yaml` switch with positions, `flmfilesdb` over the `field`
element) and the `zoodb-example` port.

The rules of 08 ("Rules that bind the implementation") apply unchanged. The old
`src/zooflm/` modules stay in place until step 5 but nothing under `src/dbprocessor/`,
`src/std/` or `src/resourcecollector/` imports them after this step.

## What the processor does (from 06 C and Q18 level 2)

Over the engine of step 2, at zoo load (`process_zoo`) and at reloads:

1. **Field compilation.** Every `_flm` field of every object, per the schema annotation
   (`full`, `standalone`, `block_level`, or `{ enabled, standalone, is_block_level }`),
   becomes a `ZooFlmFragment` in place (layout `blocks` when `is_block_level`, else
   `auto`; `standalone` from the annotation), with the origin `{ object_type, object_id,
   field, source_path }` (and `start_line`/`start_col` when the loader recorded them: step
   4 fills `obj._zoodb.flm_field_positions[field]`, read here if present). The list of
   compiled fields is `obj._zoodb.flm_fields` as today; the parse diagnostics are
   collected on `obj._zoodb.flm_diagnostics` (Q15). The policy: `abort` throws a
   `ZooFlmError` listing the errors of the object after all its fields are parsed;
   `continue` keeps every fragment (a parse never throws for content) and the
   diagnostics. The fake error fragments of today disappear.
2. **The scan.** One `engine.scan(all fragments)` for the zoo. From it: per object, the
   labels defined (with their anchors and display sources), the references made, the
   cited keys, the images used; the duplicate labels are an error (labels are unique
   zoo-wide, Q12); the standalone violations are errors on their objects.
3. **The index, per output context.** For each context in `options.contexts` (`{ name:
   { object_href(object_type, object_id) → string } }`; the standard setup gives
   `default` from `zoo_permalinks.object`): one entry per object (`label` = `type:id`,
   `href` = `object_href(type, id)`, `display` = the per-type display function's result
   (`refs[type].formatted_ref_flm_text_fn(id, obj)` as today, a fragment or FLM text;
   default: the object's `name` fragment, else the id as text)) and one entry per label
   defined in a field (`href` = the object's href + `#` + the label's anchor, `display` =
   the point's display source, else the label). Installed with
   `engine.set_index(entries, { context })`.
4. **Citations.** The cited keys go to the citation manager (retrieve, as today: the
   `abort` policy throws before compiling when some could not be retrieved; `continue`
   compiles the others) and the compiler (CSL through citeproc-js into FLM text, cached in
   `cache_compiled_citations.json`), then `engine.set_citations([{ key, text }])`. With
   `allow_unresolved_citations`, a key without a compiled text gets the verbatim
   placeholder text the old provider gave (`\begin{verbatimtext}prefix:key\end{verbatimtext}`).
5. **Graphics.** Each `(origin, path)` the scan reported is a source path relative to the
   object's source file; it goes through the resource collector as today (`collect(
   'graphics_path', source)`; the filesystem retriever finds the file with the extension
   list and names the target by the template), and the graphics processor of the
   collector inspects the image (`_inspectimagefile.js`, unchanged) and returns the data
   of the engine's entry: `kind` (`raster`/`vector`), `width_px`, `height_px`, `dpi`,
   `width_pt`, `height_pt`, `media_type`; the processor completes the entry with
   `origin`, `path`, `identity` (the resolved source), `address`
   (`zoo_permalinks.graphics_resource(resource_data)`, as today) and installs
   `engine.set_graphics(entries)`. The global vector and raster scale options stay.
6. **The snippet run.** `engine.render_snippets(standalone fragments, { outputs: ['html',
   'text'] })` once, after the tables are installed.
7. **Ad hoc fragments.** `compile_flm_fragment(text, { standalone, is_block_level,
   origin })` and `process_auxiliary_resources()` stay (the EC zoo uses them for
   handbook chapters and computed fields): the latter re-runs steps 2 to 6.
8. **Reload.** `prepare_zoo_update_objects(db_objects)` releases the old fragments of the
   objects being replaced (`engine.release`); `process_zoo_update_objects` re-runs
   `process_zoo` (as today; incremental later if needed).
9. **The dump** (Q13), through `process_data_dump(data, options)`: the fragments become
   their source (`flm_fragments_to_flm_text`, the default, and `flm_fragments_keep_instances`
   stay; `flm_fragments_to_flm_dump` goes), and `data.zooflm` replaces `refs_data`:
   `{ settings_hash, index: { context: entries with display as source }, citations,
   graphics, snippets: [{ origin label, html, text }] }`. The engine gains
   `engine.dump()` (the same object) and `engine.load(dump)` (refuses a dump whose
   `settings_hash` differs from the engine's: the hash of the core config), which
   installs the tables and fills the snippet cache for fragments made later with the
   same origin labels. A browser app at level 1 makes the engine, loads the zoo data,
   calls `engine.load(data.zooflm)`, compiles fields on demand with the field compiler
   and renders.

## What step 2 established for this step

From the engine's implementation (09, Results): the canonical origin label
`source_path#field` is the key of the scan's `graphics[].origin` and `cited[].origin`
(`scan().cited` is a list of `{ key, origin, fragment }`) and of the graphics table; a run
reports again the parse diagnostics of the fragments it places, so the processor takes
parse diagnostics from the fragments (compiled under `continue`, then the policy applied
per object) and does not count them again from renders or the scan; a context switch
re-installs the whole index (about 50 µs per entry), so the pages of one context are
rendered together; `set_index` installs at once and returns `{ diagnostics, has_errors }`;
text snippets are one run per fragment (a flm-core limit), HTML snippets one run;
`engine.snippet_entry(f, output)` and `engine.tables` exist for the dump, a snippet setter
keyed by origin label and the kept core config (for `settings_hash`) do not yet: the dump
and load of item 9 are built in this step, in `engine.js`; an index entry's display may be
a fragment, whose `.source` the dump writes; `engine.core.parse_fields` is the FLM-files
loader's entry (step 4). From the review of step 2: `render_snippets` runs no
standalone check, so the processor runs the scan and reports its standalone violations
before it fills the snippet cache; `rdr()` throws on a plain object (the old helper wrote
`<Reference to zoo entry …>`), so templates pass fields, not objects; setting a non-default
context displaces the installed index, so the processor sets the `default` context last;
the field compiler passes the layout explicitly (`inline` for a standalone field unless
`is_block_level`, `blocks` for `is_block_level`, `auto` otherwise).

## The core's change (Rust)

The scan reports, per label: the label, its anchor (from `flm.anchors`), and the FLM
source of the point's display content (the source slice of the content nodes the point
displays, when it has content; `null` for a point with a number and no content), so that
the index entries of item 3 can be built; and the references per tree as labels
(`refs: [{ label, resolved }]`) instead of hrefs. The scan plan demands `flm.anchors` (and
whatever table carries the point display) in addition to today's tables. Everything else
unchanged; module rebuilt once at the end.

## Files

| file | change |
|---|---|
| `src/dbprocessor/flmsimplecontent.js` | adapted: `FLMSimpleContentCompiler({ engine, error_policy })`; the schema walk and `parse_schema_flm_options` unchanged; `compile_object`, `compile_flm`, `compile_flm_fragment` make `ZooFlmFragment`s; `process_data_dump` as item 9 |
| `src/dbprocessor/flmprocessor.js` | replaced: `ZooFlmProcessor({ engine, refs, refs_defaults, contexts, citations, allow_unresolved_citations, error_policy, skip_check_update_existing_citations, skip_check_update_existing_resources, resource_collector, resource_collector_options })`, items 1 to 9; the same `ZooDbProcessorBase` hooks |
| `src/dbprocessor/searchabletextflm.js` | adapted: `FLMSearchableDocTextValuesAssembler({ engine })`; one `engine.render_text` over the object's fragments, each field's text from `trees` (rendered alone: a cross-reference shows its label, which the search index does not mind) |
| `src/zooflm/citationcompiler.js` | adapted: `flm_compile_fragments` and `flm_environment` go; `install_csl_flm_output_format({ parses })` takes the function that decides whether a text is valid FLM (the processor passes `(text) => engine.parses(text)`: a parse with no error diagnostic; engine addition); the compiled text stays FLM source; fixtures of `test_zooflm_citationcompiler.js` kept |
| `src/resourcecollector/processor/flmgraphicsprocessor.js` | replaced: `FLMGraphicsResourceProcessor({ fs, global_vector_scale, global_raster_scale })` returns `{ graphics: entry data }` from the inspector; no engine |
| `src/zooflm/engine.js` | additions: `parses(text)`, `dump()`, `load(dump)`, `settings_hash` |
| `src/std/use_flm_environment.js` | replaced by `src/std/use_flm_engine.js`: `ZooFlmEngine.create({ load_wasm: flm_options.load_wasm ?? the neutral loader, core: { dollar_math, srcset from resources.graphics_use_srcset_parceljs, settings: flm_options.engine?.settings, off }, error_policy, unresolved: allow_unresolved_references ? 'warn' : 'error' })`; the config entry is `use_flm_engine`, the state `_this.zoo_flm_engine` and `zoodb.zoo_flm_engine` |
| `src/std/use_flm_processor.js` | adapted: `make_citation_sources` unchanged; builds `ZooFlmProcessor` with `contexts: { default: { object_href: _this.zoo_object_permalink } }`, the citations and resources options as today |
| `src/std/use_searchable_text_processor.js` | passes the engine |
| `src/std/stdzoodb.js` | the config entries and docs: `use_flm_engine`, `flm_options.engine`, `flm_options.load_wasm`, `allow_unresolved_references`, `allow_unresolved_citations`, `continue_with_errors`; `zoodb.zoo_flm_engine` |
| `src/_zoodb.js` | nothing, unless the dump needs a hook it lacks |
| `package.json` | exports `./std/use_flm_engine` (the `./std/*` wildcard covers it); nothing else |

## Tests

- `test/test_dbprocessor_flmsimplecontent.js`: rewritten against the new compiler on the
  same fixtures (`test/test_data/dishes.json`, `utensils.json`, the schemas); the cases of
  today (simple data, block level, dump to text, nested fields, abort, continue, the three
  annotations) with the dump-to-node-dump case dropped.
- `test/test_dbprocessor_flmprocessor_citations.js`: the same fixtures and mock host; the
  three cases, the compiled text checked in the engine's citations table and in a rendered
  page's bibliography piece.
- new `test/test_dbprocessor_flmprocessor.js`: a mini zoo in `test/test_data/flm_zoo/`
  (two object types, a cross-object `\ref`, a labeled section in one object referenced from
  another, a figure with a small PNG fixture, a footnote, a `\cite` served by a JavaScript
  source): `process_zoo`, the index per context (two contexts with different hrefs), the
  graphics entry, the snippet cache filled, a page rendered through `render_document`
  with the cross-object link and the figure; the dump round trip (a second engine loads
  the dump, compiles the same fields on demand, renders the same page byte for byte); a
  reload of one object through `update_objects`; `abort` versus `continue` on a field
  with an error; the standalone violation; duplicate labels.
- `test/test_std.js`: adapted to the config names; `test_std_use_flm_processor.js`
  unchanged; `test_zooflm_citationcompiler.js` adapted to the new install call;
  `test_resourcecollector.js` unchanged.
- The old `test_zooflm_*` tests of the old modules keep running until step 5.

## Docs

JSDoc on the new processor and factories; `CLAUDE.md`: the DB processors, standard
setup and resource collector paragraphs. `doc/` is step 5.

## Checks before handing back

From `rust/`: the per-crate clippy and test; from the root: `yarn build:wasm flm`,
`yarn test`, `yarn lint` (no new error); `git status --short`.

## Results

(filled in after the implementation and the review)
