# 10 — Step 3: the processor and the standard setup (level 2 of Q18)

Build order step 3 of `06-repo-change-map.md` (sections C, E, F, G). Brief written
2026-10-16 and adjusted to the results of step 2 (`09-step2-engine.md`, committed as
`98d8f40`): the engine's surface is the one in 09's engine table plus the additions its
Results list. Implemented by an implementer agent and checked by a reviewer agent
(Opus); results at the end.

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
   default: the object's `name` fragment when it is standalone, else the id as text)) and
   one entry per label defined in a field. Two rules settled in the review (2026-10-16):
   the label entry's `href` carries `#anchor` only when the anchor is derived from the
   label (the scan reports an anchor only when it equals flm-core's `label_anchor`; a
   number-anchored point such as a float, an equation line or a theorem is numbered
   differently on its own page, so it links to the object's page without an anchor); the
   label entry's `display` is the point's display source only when the anchor is
   label-derived and the source passes a standalone check (one processor-side scan over
   all candidate displays), else the object's display. Installed with
   `engine.set_index(entries, { context })`, the `default` context last.
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

Implementation, 2026-10-16 (Rust 1.97, wasm-pack 0.15, wasm-bindgen 0.2.127, node 23.7;
flm-core 0.5.0 at the local checkout). Reviewed the same day: the seven deviations
accepted, the open questions decided; the fixes are under "Review fixes" at the end (they
change some statements above: the anchors, the displays, the dump switch, the version in
the settings hash).

**What was built.**

- *The core* (`rust/zoodb-flm-wasm/src/engine.rs`, the one change): the scan plan
  demands `flm.anchors` and `flm.refs.targets` besides the tables of before; per tree,
  `labels` is `[{ label, anchor, display }]` (the labels whose point the tree holds, in
  point order; `anchor` from `flm.anchors`, `null` for a point without one; `display` the
  source text the root of the point's display content spans, from `flm.refs.targets`,
  `null` for a point with no content) and `refs` is `[{ label, resolved }]` (the sites in
  tree order, walked as the resolve stage walks them: the nodes whose element carries
  `Referencing`, each site's target, its resolution in `flm.refs.resolutions`);
  `duplicate_labels` is `[{ label, origin, start, end }]` (the later point, see the
  deviations). The `.d.ts` section (`ScanLabel`, `ScanRef`, `ScanDuplicate`), the crate
  README's surface table, one native test added and one adapted, `run_zoo.mjs` updated.
- *The engine* (`src/zooflm/engine.js`): `parses(text)` (an inline parse with no Error,
  released at once; a parse the core refuses is `false`); `settings_hash` (the core
  configuration as given to `create()`, the defaults of its four keys filled in and `off`
  sorted, as canonical JSON, hashed by `text_hash`: the two 32-bit lanes of cyrb53, 16 hex
  digits, exported); `dump()` (`{ settings_hash, index: { CONTEXT: [{ label, href,
  display }] }, citations, graphics, snippets: [{ label, layout, source_hash, html,
  requires, text }] }`, plain data) and `load(dump)` (refuses another `settings_hash`;
  installs the citations, the graphics and every context's index, `default` last; keeps
  the snippets by origin label and gives them to the standalone fragments held or made
  later with that label, layout and source hash); `scan()` passes the new shape through
  (`duplicate_labels` gain `fragment`).
- *The field compiler* (`src/dbprocessor/flmsimplecontent.js`): `FLMSimpleContentCompiler({
  engine, error_policy, object_types })`; the schema walk and `parse_schema_flm_options`
  unchanged; `flm_options_layout()` (`blocks` for `is_block_level: true`, `inline` for
  `false` or a standalone field, `auto` otherwise) and `field_origin()` (`{ object_type,
  object_id, field, source_path }`, plus `start_line`/`start_col`/`indent`/`approx` from
  `_zoodb.flm_field_positions[field]`, read as `{ line, col, indent, approx }` or the
  origin's own key names); `compile_object` parses every field under `continue`, keeps a
  value that is already a live fragment of the engine, stores `flm_fields` and
  `flm_diagnostics`, and under `abort` throws one `ZooFlmError` for the object after all
  its fields; `compile_flm`/`compile_flm_fragment` (the policy per fragment, the fragment
  released before throwing); `object_fragments(obj)`, `release_object(obj)`;
  `prepare_zoo_update_objects` releases the replaced objects' fragments (when the
  compiler is used alone); `process_data_dump` writes the source (default) or keeps the
  instances, `flm_fragments_to_flm_dump` is refused with a message.
- *The processor* (`src/dbprocessor/flmprocessor.js`): `ZooFlmProcessor({ engine,
  contexts, refs, refs_defaults, graphics_address, citations, allow_unresolved_citations,
  error_policy, skip_check_update_existing_citations, skip_check_update_existing_resources,
  resource_collector, resource_collector_options })`, items 1 to 9 of the brief, the same
  hooks. Per step, the diagnostics go to their objects' `_zoodb.flm_diagnostics` (the
  parse diagnostics of the object's fragments first, then what the processing found) or
  to `processor.diagnostics`, then the policy applies. The scan's results stay on the
  processor (`scan_results`, `object_scan(type, id)`: labels, refs, cited, graphics per
  object). Duplicate labels are the Error `zoodb.labels.duplicate` at the later point
  (its position from the core's byte range); the scan's `zoodb.standalone.violation`
  diagnostics are Errors on their objects; neither the scan's repeated parse
  diagnostics nor its `flm.refs.unresolved` warnings are counted. The index of each
  context: objects (`TYPE:ID`, `object_href`, the display of `refs[type]`
  (`formatted_ref_flm_text_fn`, a fragment or FLM text), default the `name` fragment,
  else a string name or the id as FLM text) and the labels of the objects' fragments
  (`href#anchor`, the display source, else the label as FLM text: `flm_text_of_plain_text`
  escapes `\ { } % # & $`, and writes a text with `~` as verbatim text); a label equal to
  an object label is left out with the Warning `zoodb.labels.shadowed` (once, not per
  context; a refused display is reported per context). Citations: the
  distinct cited keys (prefix lower-cased, as the table keys them), retrieved and compiled
  as today (the same messages), `install_csl_flm_output_format({ parses })` called before
  each compilation, the table set to the compiled texts of the cited keys (placeholders
  `\begin{verbatimtext}prefix:key\end{verbatimtext}` with
  `allow_unresolved_citations`). Graphics: each `(origin, path)` resolved against the
  directory of the fragment's `source_path`, collected (`skip_check_update_existing_resources`
  kept), the entries completed with `origin`, `path`, `identity` (the resolved source),
  `address` (`graphics_address(resource_data)`); a collection failure throws under
  `abort` (as today) and is the Error `zoodb.graphics.collect-failed` under `continue`.
  Snippets: one `render_snippets` over the standalone fragments that lack a cached entry
  (so a reload renders only the new ones), the repeated parse diagnostics dropped.
  `compile_flm_fragment(text, { standalone, is_block_level, origin })` keeps the ad hoc
  fragment in `extra_fragments` (scanned, cited, collected, snippets filled by every
  later processing) until `release_flm_fragments()`. `process_data_dump` writes the
  fields' source and `data.zooflm = engine.dump()` (switch `flm_include_refs_data`).
- *Searchable text* (`src/dbprocessor/searchabletextflm.js`):
  `FLMSearchableDocTextValuesAssembler({ engine, render_value_fn, error_policy })`, default
  policy `continue`.
- *Citation compiler* (`src/zooflm/citationcompiler.js`): the import of the old layer, the
  `flm_compile_fragments` and `flm_environment` options gone; `install_csl_flm_output_format({
  parses })`; the compiled text stays FLM source; the pid of the atomic write read through
  `globalThis.process?.pid` (environment-neutral; this removes the file's two
  pre-existing lint errors); a stray `console.log` of escaped text became a debug line.
- *Graphics processor* (`src/resourcecollector/processor/flmgraphicsprocessor.js`):
  `FLMGraphicsResourceProcessor({ fs, global_vector_scale, global_raster_scale })` returns
  `{ graphics: { kind, media_type, width_px, height_px, dpi, width_pt, height_pt } }`
  (absent or non-finite measures `null`; the scale applied to the physical size;
  `media_type` from the extension, `graphics_media_type()`).
- *Standard setup*: `src/std/use_flm_engine.js` (`use_flm_engine(_this)`, `srcset_core_config()`)
  replaces `use_flm_environment.js` (deleted; `src/std/index.js` exports the new file);
  `use_flm_processor.js` builds `ZooFlmProcessor` with `contexts: { default: {
  object_href: zoo_permalinks.object }, ...flm_options.contexts }`, `graphics_address`
  from `zoo_permalinks.graphics_resource`, `refs_defaults`, `allow_unresolved_citations`,
  the citations and resources options as today, the graphics processor without engine;
  `use_searchable_text_processor.js` passes the engine (the default assembly without
  one); `stdzoodb.js`: the entries `use_flm_engine`, `flm_options.load_wasm`,
  `flm_options.engine` (`dollar_math`, `settings`, `off`, `render_value_options`),
  `flm_options.contexts`, `refs_defaults`, the documentation of every FLM key,
  `flm_error_policy` set before the engine is made, `zoodb.zoo_flm_engine`; the old
  entries `use_flm_environment` and `flm_options.environment_options` are refused with a
  message naming the new ones.
- *Tests*: `test_dbprocessor_flmsimplecontent.js` rewritten (8: the cases of before but
  the node dump, plus positions and the release on reload); `test_dbprocessor_flmprocessor_citations.js`
  (4: the three cases over the engine's table and a page's bibliography, the scan's cited
  keys, and a placeholder case); new `test_dbprocessor_flmprocessor.js` (17, over
  `test/test_data/flm_zoo/`: two schemas, three YAML objects, a 20×10 PNG at 300 dpi;
  the scan, the two contexts' indexes, the tables, the snippets, the pages in both
  contexts, the searchable text, the dump round trip byte for byte in a second engine,
  ad hoc fragments, a reload and a failed reload, the processor without the standard
  setup, and the error cases: a field error, a standalone violation, a duplicate label, a
  refused display with an uncollectable image, under both policies, a label shadowed by
  an object);
  `test_std.js` (7: adapted, plus the engine's configuration and hash, the policies, the
  refused old entries); `test_zooflm_citationcompiler.js` (10: the new install call, plus
  the escaping with the last `parses` given); `test_zooflm_engine.js` (+3: `parses`, the
  settings hash, dump and load across engines) and `test_zooflm_wasm_module.js` adapted to
  the scan's shape; `test_std_use_flm_processor.js`, `test_resourcecollector.js` and the old
  `test_zooflm_*` tests unchanged and passing.
- *Docs*: JSDoc on every new or changed export; `CLAUDE.md` (the DB processors, ZooFLM,
  standard setup and resource collector paragraphs).

**Numbers.**

| | |
|---|---|
| FLM module | 5,142,189 B (+13,556 over step 2: the scan's new tables and the site walk); gzip -9 1,784,527; brotli -q 11 1,271,680 |
| `yarn build:wasm flm`, warm | 16–18 s; the final build is byte-identical (wasm, glue, `.d.ts`) to the build the tests ran against |
| `cargo test -p zoodb-flm-wasm` | 14 passed (13 before); clippy clean; citation crate 40 passed, clippy clean |
| `yarn test` | 453 passing (429 before), 6–8 s |
| `yarn lint` | 18 errors in 8 files (the 20 of before minus the 2 of `citationcompiler.js`): 7 untouched files and `src/std/stdzoodb.js`, a changed file whose 3 pre-existing errors are on unchanged lines (the `extra_db_processors` sort); none on a new or changed line |
| test zoo (`flm_zoo`: 3 objects, 7 fragments), standard setup, 3 runs | `makeStandardZooDb` (module, engine, citation manager, schemas) 204–228 ms; `zoodb.load()` 87–92 ms, of which `process_zoo` 61–65 ms: fields 2.3–2.5, scan 10.9–11.8 (the scan plan built), index 0.9–1.0, citations 26–28 (CSL engine, one JavaScript source), graphics 2.8–3.0, snippets 17.6–18.4 (the html plan built, 3 names); `process_zoo` again 10–13 ms (citations 9–10, snippets 0) |
| `zoodb-example` (5 people, 12 fragments, 4 citations from a copy of its cache, 1 image, srcset on), standard setup, 2 runs | setup 201–206 ms; `zoodb.load()` 104–112 ms, of which `process_zoo` 67–70 ms: fields 2.8, scan 10.9–11.2, index 0.7–0.8, citations 29–30, graphics 4.5–4.9, snippets 17–19; again 17–18 ms; no diagnostic; index 7 entries (5 people, `figure:AliceIsHappy`, `table:BobsFavoriteFoods`); Bob's page renders with no diagnostic; `run_zoo.mjs --kind example` gives the tallies of 07 and 08 |

**Deviations from the brief.**

- *The duplicates carry the later point* (core): `duplicate_labels` is `[{ label,
  origin, start, end }]` instead of the labels alone, so that the duplicate is an error on
  the object that repeats the label, with its position (the scan run reports no
  duplicate-label diagnostic: the label check is not in its plan). Beyond the brief's one
  core change; small and in the same function.
- *The release of replaced fragments is deferred.* `prepare_zoo_update_objects` releases
  nothing; `process_zoo` records every object fragment it compiled (also when it fails)
  and, once a processing succeeded, releases those no object holds any more. A reload that
  fails (`throw_reload_errors: false` in a development server) therefore leaves the
  previous index, displays and snippets usable instead of `ref()` throwing on released
  displays; the next successful reload releases both the old and the failed fragments.
  The field compiler alone still releases in `prepare_zoo_update_objects`.
- *`graphics_address`*, an option the brief's list lacks: the address of an image
  (`zoo_permalinks.graphics_resource(resource_data)` in the standard setup) needs a
  function; `resource_data` is `{ src_url, source, graphics, target_info, resolved_info,
  processed_info }`, `src_url` the retriever's target name as the old `GraphicsResource`
  had it, so existing permalink functions (`/pic/${r.src_url}`) work unchanged.
- *The dump's snippets* carry `layout`, `source_hash` and `requires` besides `{ label,
  html, text }`: the source hash and layout keep a snippet from a fragment whose source
  changed (a preview app's edit), `requires` is the html snippet's definitions, which a
  page's `requires` includes.
- *Search text of standalone fields* comes from the snippet cache (the same text: one
  fragment rendered alone), the `render_text` call covering the other fragments only;
  the assembler's renders use the `continue` policy by default.
- *Additions*: `flm_options.contexts` (further contexts in the standard setup) and
  `refs_defaults` passed through; the processor's default `citations` is `null` (no
  citation manager unless configured: one with no `cache_fs` would fail at
  initialization) and no image is collected without a `graphics_path` retriever;
  `scan_results`/`object_scan()`, `processor.diagnostics`, `release_flm_fragments()`;
  the Warning `zoodb.labels.shadowed` and the Error `zoodb.graphics.collect-failed`; the
  old configuration entries refused with a message.
- *Not done*: references that resolve neither in the zoo nor in the index are not
  reported at processing time (the renders report them as `flm.refs.unresolved`); the
  scan gives the sites as labels but no positions, and matching them with the scan's
  warnings by order would be fragile.

**What step 4 (`11-step4-loaders.md`) should know.**

- Field positions: the compiler reads `obj._zoodb.flm_field_positions[field]` (the name
  this brief gives; 11 drafts `field_positions`: one of the two must change) with `{
  line, col, indent, approx }` (or `start_line`/`start_col`), keyed by the compiler's field
  path, which is `iter_object_fields_recursive`'s form: dots and numeric indexes
  (`relations.parents.0.detail`), not `a.b[2].c`. `approx` reaches the origin;
  `format_diagnostic` does not write `(approx.)` yet (11 A.5).
- The engine exists as `zoodb.zoo_flm_engine` when `makeStandardZooDb()` returns, before
  any loader is made: the FLM-files loader can take it from there.
- The `zoodb-example` port: `use_flm_engine` and `flm_options.load_wasm:
  load_zoodb_flm_wasm_node` are the two required changes in `myzoodb.js`
  (`environment_options` is refused if left in; the example sets none); its `refs`
  (`formatted_ref_flm_text_fn: (id, person) => person.name`, the name fragment),
  `citations`, `resources` and `permalinks.js` work as they are. Its data processes with
  no diagnostic through the standard setup and Bob's page renders cleanly. `pic.11ty.js`
  reads the collector's data, whose shape is unchanged; `zoodbdata.11ty.js` gets
  `data.zooflm` where `refs_data` was.
- The cross-object reference to a float (`\ref{figure:AliceIsHappy}` from another
  object) gets the anchor of the zoo-wide scan's numbering (open questions).

**Open questions.**

- *Number anchors across objects.* A float (and any point whose element asks for a
  number anchor: theorems) is anchored on its number (`figure-3`), and the scan numbers
  the whole zoo as one document, while a page numbers its own content: the index's
  `href#anchor` of a float labeled in an object other than the first is wrong on that
  object's page (the anchor of a label, `sec-x`, `eq-x`, does not depend on the document).
  Options: per-object anchors (one small scan per object, assuming a page shows its
  object's fields first), the object's href without anchor for number-anchored points, or
  label anchors for labeled floats (an flm-rs option, not requested: no workaround).
- *Displays of floats.* A float's display content is its caption argument, written with
  its braces (`{A red dot.}`): valid FLM, rendered without the braces; a reference from
  another object shows the caption where the page would show `Figure 1`.
- `flm_include_refs_data` stays the name of the switch of `data.zooflm`; rename?

**Review fixes** (2026-10-16, after the review; the FLM module rebuilt).

- *Anchors (open question 1, decided: the object's href for number anchors).* The crate's
  scan reports a label's anchor only when it equals flm-core's `label_anchor(&label)`
  (`type-label`, the same in every document), `null` otherwise (a point anchored on its
  number: floats, tables, theorems; a title slug that was renumbered; a collision). The
  processor writes the label's index href as the object's href alone when the anchor is
  `null`. In the mini zoo the figures of Alice and Bob get `/person/alice` and
  `/person/bob`, the sections keep `#sec-alice-early`, `#sec-drawing-basics`; in
  `zoodb-example`, `figure:AliceIsHappy` and `table:BobsFavoriteFoods` get the person's
  href alone.
- *Displays (open question 2, decided).* A label's index display is the point's display
  source only when the label forms the anchor and the source is standalone; otherwise the
  object's display (the value of the object's own entry), or for an ad hoc fragment its
  origin label as text. The standalone check is one run in the processor: each candidate
  becomes a standalone fragment (`origin: { label: 'index:LABEL' }`), one `engine.scan()`
  checks them all, a violation is the Warning `zoodb.index.display-not-standalone`
  (naming the label and the object; the entry stays, with the object's display), and the
  fragments are released at once (the index takes the displays as text, which the engine
  parses again). In the mini zoo a figure whose caption cites (Bob's) is referenced from
  Alice's page and a section whose title holds a footnote (`sec:drawing-basics`) from
  Bob's: both pages render with no diagnostic, the second with the warning on the topic.
- *Braces.* The crate's `display_source` slices the inside of a content that is one braced
  group (a caption: `A red dot.` instead of `{A red dot.}`).
- *Names that are not standalone.* The default object display is the `name` only when it
  is a standalone, non-empty fragment, else a plain-string `name` as text, else the ID as
  text (a test schema `note.json` with a `full` name: the display and `\ref` show `n1`).
- *`compile_flm_fragment()`* refuses `resource_info`, `what` and `skip_scanner`, naming
  `origin`.
- *Ad hoc fragments with an href.* An origin may carry `href` (a handbook chapter): the
  labels of such a fragment get index entries (`href#anchor` by the anchor rule, the
  display by the display rule with the origin label as fallback); a label of an ad hoc
  fragment with neither an object nor an `href` is the Warning `zoodb.labels.no-href`.
- *`settings_hash` covers the module's build.* `ZooFlmCore.version()` (static) returns `{
  binding, flm_core }` (the crate's `CARGO_PKG_VERSION`; the flm-core version read from
  `rust/Cargo.lock` by `build.rs`, as the citation crate does for autocitefetch); the
  engine keeps it (`engine.core_version`) and hashes it with the configuration.
- *The graphics permalink as a method*: `use_flm_processor` calls
  `_this.config.zoo_permalinks.graphics_resource(rd)` on its object (the test's
  permalinks use `this`).
- *`processor.diagnostics`* holds the parse diagnostics of the ad hoc fragments of no
  object, and, under `continue`, the Warning `zoodb.citations.retrieve-failed` per
  citation that could not be retrieved (naming where it is cited, and the chained key
  that failed), or one for a retrieval that threw.
- *Unresolved references at processing time*: each reference of the scan that is neither
  resolved in the zoo nor an index label is the Warning `zoodb.refs.unresolved` on its
  object (one per fragment and label, no position), so that a build log shows it before
  any page renders.
- *The dump switch* is `flm_include_zooflm_data` (default `true`); `flm_include_refs_data`
  is refused with a message naming it.
- *Docs*: `flm_text_of_plain_text` (escapes what FLM gives a meaning to; `--` or quotes may
  still be typeset); the state of the contexts after a failed `set_index` under `abort`
  (the contexts set before carry the new entries, `default` keeps the old ones, safe with
  the deferred release); `install_csl_flm_output_format` (the installed `parses` belongs
  to its engine; the processor installs it before each compilation); `src/_zoodb.js`
  (`ZooFlmProcessor`, `ZooFlmFragment` in the `data_dump` warning); `CLAUDE.md`
  (`citationcompiler.js` beside both layers, the version, the index rules, the dump switch).
- *Tests*: `test_dbprocessor_flmprocessor.js` 23 (the mini zoo gains a figure in Bob's
  biography whose caption cites, a section whose title holds a footnote in the topic, a
  reference to each, and the schema `note.json`): the anchor and display rules, the
  method permalink, exact fragment counts on the reloads, a failed reload at the scan (a
  duplicate label under `abort`: the count goes up by the new object's fragments, `ref()`
  shows the previous name, the next good reload brings the count back down), the
  `srcset` translation, the two `skip_check_update_existing_*` options (no retrieval and
  no `collect()` on a second processing, the tables the same, a new key still retrieved),
  ad hoc fragments with and without `href`, the refused options and switch, a name that
  is not standalone, unresolved references, the ad hoc diagnostics and a citation not
  retrieved under `continue`. `test_std.js` creates no cache directory at the root
  (`cache_dir_create: false` everywhere) and frees its engines; the two empty, ignored
  directories earlier runs left at the root (`_zoodb_citations_cache/`,
  `_zoodb_TEST_citation_info_cache/`) removed. `test_zooflm_engine.js` and
  `test_zooflm_wasm_module.js` check `version()` and the new scan values; one native test
  added for the versions.
- *Found while testing `srcset`*: with `graphics_use_srcset_parceljs.enabled`, the core's
  publish stage cannot write a published image (`zoodb.graphics.publish-failed`, "no
  constructor for `GraphicsPublished` (U2)", then `flm.lowering.rule-failed`), so a page
  with an image renders no `<img>` and has Errors. This is the U2 block of 07 (the cargo
  feature `published-insert` stays as it is); the test asserts it. `zoodb-example` enables
  the option: its Alice page fails this way through the standard setup until U2 lands, so
  the step 4 port has to disable it (or wait for U2).
- *`srcset` accepted, not enabled* (decided after the finding above): `use_flm_engine`
  accepts `graphics_use_srcset_parceljs.enabled` but gives the core no `srcset` while U2 is
  open, so images are published without `srcset`, and it warns once per engine (the
  `debug` logger and `console.warn`, `SRCSET_U2_WARNING`), as its JSDoc and `stdzoodb.js`'s
  option docs say; `zoodb-example`'s Alice page renders its `<img>` again, and the step 4
  port can keep the option. The core's stage stays behind `published-insert` unchanged; an
  engine-level test documents the current U2 behaviour (a core configured with `srcset`
  reports `zoodb.graphics.publish-failed` on an image), and the standard-setup test
  asserts the `<img>` without `srcset` and the one warning (`yarn test` 461 passing, `yarn
  lint` the 18 pre-existing errors, no module rebuild).
- *Checks after the fixes.* `cargo clippy`/`cargo test` per crate clean and green (15 and
  40); `yarn build:wasm flm` 9.7–19 s, the final build byte-identical to the tested one;
  module 5,143,637 B (+1,448 over the reviewed build), gzip -9 1,785,077, brotli -q 11
  1,273,701; `yarn test` 460 passing; `yarn lint` the 18 pre-existing errors only;
  timings unchanged within noise (test zoo `process_zoo` 60–63 ms, `zoodb-example`
  64–68 ms).
