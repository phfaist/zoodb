# 09 — Step 2: the engine (level 1 of Q18)

Build order step 2 of `06-repo-change-map.md` (section N; the fates in section B). Brief
written 2026-10-16, step 1 committed as `e00e24a` (`08-step1-rust-workspace.md`); implemented by an
implementer agent and checked by a reviewer agent (Opus), results at the end.

Scope, from 06: fragment handles, `render_document` with markers, `render_fragment`, the
snippet cache, the diagnostics mapping, the stylesheet call, the text backend. The engine
is the JavaScript object a zoo holds (one per zoo) that owns the wasm core, the external
tables and the fragments, and renders. It knows nothing about files, the network, the
zoo's objects or schemas: that is the processor (step 3). The old `src/zooflm/` files stay
untouched and working in this step (removed in step 5); the new files live beside them.

The rules of 08 ("Rules that bind the implementation") apply unchanged.

## Decisions taken for this step

- **D1, names.** The wasm-bindgen class becomes `ZooFlmCore` (it is the core the engine
  drives); the engine is `ZooFlmEngine` in `src/zooflm/engine.js`, a fragment is a
  `ZooFlmFragment` (`src/zooflm/fragment.js`), a diagnostic is a plain object, the error
  thrown by the `abort` policy is `ZooFlmError` (`src/zooflm/diagnostics.js`). Exported
  from the new package path `./zooflm/engine` (`src/zooflm/engine.js` re-exports the
  fragment and diagnostics modules); `./zooflm` keeps exporting the old API until step 5.
- **D2, the engine takes a loaded core, never loads a file.** `ZooFlmEngine.create({
  load_wasm, ... })` calls `load_wasm()` (default: the neutral loader of step 1, which
  fetches the module in a browser; Node callers pass the Node loader) and keeps the
  namespace. The engine's modules import nothing environment-specific, so the browser
  apps bundle them as they are.
- **D3, fragments are objects over handles.** A `ZooFlmFragment` holds `source`, `origin`
  (`{ object_type, object_id, field, source_path, label }`, all optional but `label`,
  the canonical origin string `source_path#field` or the label given), `layout`
  (`'auto' | 'inline' | 'blocks'`), `standalone`, `handle` (the core's), `diagnostics`
  (of the parse, mapped), `empty` (the tree holds only whitespace and comments). The
  core keeps the parsed tree; the engine keeps the map handle → fragment and canonical
  origin → fragment (for diagnostics). `engine.release(fragments)` frees handles (reloads).
  A fragment is never re-parsed for a layout change: `rdrblock` uses a sibling handle
  sharing the tree (core method `with_layout`).
- **D4, markers.** As decided in Q4.3: the composer runs once; `rdr()` of a placed fragment
  returns a marker, `endnotes()` and `piece()` return markers, every other helper returns
  a real string. Markers are `<flm:K:tree:N/>`, `<flm:K:piece:NAME/>` and
  `<flm:K:endnotes/>`, `K` a per-engine counter incremented per call (review fix: a
  marker kept from another call is never taken for one of this call's); they are unknown
  empty tags, which `sqzhtml` and HTML tooling leave alone. After the run, each
  marker is replaced by its tree's or piece's HTML. A marker left over (not produced by
  this call's helpers, another call's included) is an error diagnostic
  `zoodb.compose.stray-marker`; a marker copied by the composer is substituted wherever
  it appears.
- **D5, `ref()` is host-built** (Q4): `<a href="HREF" class="href-ref ref-TYPE">DISPLAY</a>`,
  the classes the old renderer wrote. `HREF` from the context's index entry for
  `TYPE:ID`; `DISPLAY` the snippet of the entry's display fragment, or of the custom
  `display_flm` (an ad hoc snippet, cached by source text). A missing entry follows the
  call's `unresolved` option: `'error'` adds the diagnostic `zoodb.ref.unresolved`
  (Error) and writes the label as text; `'warn'` the same diagnostic as a Warning and
  `<span class="href-ref ref-unresolved">TYPE:ID</span>`. `refhref()` returns the href
  or `null` with the same diagnostic.
- **D6, the snippet cache** (Q9): per fragment and output (`html`, `text`), filled by
  `render_snippets(fragments, { outputs })` (one run per output over all the given
  fragments, each as a tree, pieces computed but not placed) and read by `snippet(f,
  output)`; a miss runs `render_fragment` for that one fragment and caches it. Standalone
  fragments only (a non-standalone fragment asked as a snippet is an error
  `zoodb.snippet.not-standalone`). Ad hoc text snippets (`display_flm` of `ref()`, a plain
  string given where a fragment is expected) go through `snippet_of_text(text, output)`,
  cached by text.
- **D7, diagnostics** (Q15): every diagnostic the engine returns is `{ severity,
  identifier, message, origin, start, end, line, col, file_line, file_col }`: `origin` the
  fragment's origin object (or `{ label }` for the core's own origins), `start`/`end`
  byte offsets into the fragment's source, `line`/`col` 1-based inside the source,
  `file_line`/`file_col` set only when the origin carries `start_line`/`start_col` (the
  loaders of step 4 fill them). `format_diagnostic(d)` writes
  `PATH#FIELD:LINE:COL: SEVERITY: MESSAGE [IDENTIFIER]` (or the label when there is no
  path). The error policy is per call with the engine's default: `'abort'` throws
  `ZooFlmError` (message: the formatted errors, property `diagnostics`) after the run
  when any diagnostic is an Error; `'continue'` returns the output as the backend produced
  it (its own recovery markup: the `flm.pres.unsupported` node and the errors stylesheet)
  with the diagnostics. The engine never lets a core error (a thrown `JsError`: a wrong
  handle, a wrong option) pass as content: those are plain `Error`s.
- **D8, the stylesheet** (Q10): `engine.html_definitions()` lists every style and script
  definition the registry declares (core method over `FlmRegistry::styles()` and
  `scripts()`: `{ id, kind, owner, parts }`), and `engine.html_stylesheet()` concatenates
  the inline parts of the style definitions except `flm.html.style.page` (the backend's
  own page) in the table's order, with a comment line naming each definition. A rendered
  result also carries `definitions` (what that content requires) and `requires`.
- **D9, text** (Q11): `render_text(fragments, { width, link_addresses })` gives the joined
  `text` of one run over all the fragments (references between them resolve) and the
  text of each fragment separately (`trees`); pieces are left out. Step 1 found that the
  core's per-tree texts come from one run per tree, in which a reference to another
  fragment does not resolve (a warning, the label shown) and whose diagnostics the core
  drops: the core's `render_text` must return those diagnostics too, and the engine
  documents that a per-fragment text is rendered alone (the search index's use, where a
  cross-reference's text does not matter).

## The core's changes (Rust, `rust/zoodb-flm-wasm`)

1. Class `ZooFlmCore` (was `ZooFlm`); the prototype runners in `scratch/proto/js/`
   updated to the name.
2. `with_layout(handle, layout) → handle`: a fragment sharing the tree, source and parse
   diagnostics of `handle` with another layout (`Fragment::new`).
3. `release(handles)`: frees the fragments; a released handle used later is an error.
4. `parse` returns `empty` besides `handle` and `diagnostics`.
5. `html_definitions()`: every declared style and script definition (D8).
6. TypeScript declarations (`typescript_custom_section`, `unchecked_param_type` and
   `unchecked_return_type`) for every method's options and result, so that the `.d.ts`
   documents the surface.
7. `render_text` returns the diagnostics of the per-tree runs as well (D9), tagged by
   tree.
8. Everything else as in 07 and 08 (options refuse unknown keys; `null` and `undefined`
   keys take their defaults); clippy clean, tests green, module rebuilt by
   `yarn build:wasm flm` and committed (one rebuild, at the end).

## The engine (`src/zooflm/engine.js`, `fragment.js`, `diagnostics.js`, `compose.js`)

```js
import { ZooFlmEngine, ZooFlmError, format_diagnostic } from '@phfaist/zoodb/zooflm/engine';

const engine = await ZooFlmEngine.create({
    load_wasm,                     // () => Promise<namespace>; default: the neutral loader
    core: { dollar_math, srcset, settings, off },   // the core's config, as data (Q14)
    error_policy: 'abort',         // or 'continue'; the default of every call
    unresolved: 'error',           // or 'warn'; references to the index and ref()
    render_value_options: { list_joiner, list_item_wrapper, list_full_wrapper },
});
```

| member | does |
|---|---|
| `ZooFlmEngine.features()` | the core's `features()` (static, needs a loaded namespace: takes `load_wasm` too) |
| `make_fragment(source, { origin, layout, standalone })` | parses; returns a `ZooFlmFragment`; parse diagnostics on the fragment and subject to the error policy |
| `release(fragments)` | frees the handles and the cache entries |
| `set_index(entries, { context })` | `entries = [{ label, href, display }]`, `display` a fragment or FLM text; kept per context (default `'default'`); installed in the core before a run whose context differs from the installed one |
| `set_citations(entries)` | `[{ key, text }]`, text in FLM; kept and installed |
| `set_graphics(entries)` | the core's entries, kept and installed |
| `render_snippets(fragments, { outputs })`, `snippet(f, output)`, `snippet_of_text(text, output)` | D6 |
| `render_document({ compose, context, unresolved, error_policy })` | the composer protocol (below); returns `{ html, definitions, requires, diagnostics, has_errors }` |
| `render_fragment(f, { output, context, unresolved, error_policy })` | one tree, no composer; `{ html \| text, definitions, requires, diagnostics, has_errors }` |
| `render_text(fragments, options)` | D9 |
| `render_latex(fragments, options)` | the core's `render_latex`, fragments resolved; the handbook's (Q12) |
| `scan(fragments)` | the core's `scan` with the standalone fragments passed from the fragments' flags; `trees[i]` carries `fragment`; `standalone_violations` and `duplicate_labels` as the core gives them |
| `truncate(f, { chars, min_chars, marker, first_paragraph })` | a new fragment of the shortened source, same origin and label (the graphics and cited origins still match) with `truncated: true`, which `format_diagnostic` shows; `{ fragment, truncated, cut_at }` |
| `html_definitions()`, `html_stylesheet()` | D8 |
| `tables` | the kept index per context, citations and graphics (read by the dump of step 3) |

The composer protocol (`compose.js`): `render_document` calls `compose(R)` once with

| helper | returns |
|---|---|
| `ne(x)` | `value_not_empty`: false for `null`, `''`, an empty array, an empty fragment |
| `rdr(x)` | `null` → `''`; string → HTML-escaped; number, boolean → their text; array → the items through `rdr`, joined per `render_value_options` (defaults as `make_render_shorthands` had them: joiner `''`, item wrapper `<span class="paragraph-in-list">…</span>`); standalone fragment → its html snippet; other fragment → placed, a marker |
| `rdrblock(x)` | as `rdr` with the fragment's blocks-layout sibling (standalone or not, always placed) |
| `ref(type, id, { display_flm })`, `refhref(type, id)` | D5 |
| `endnotes()` | a marker for all pieces placed at the end, in the run's order (the footnote list, then the bibliography) |
| `piece(name)` | a marker for one piece by its table name |
| `escape(s)` | HTML escaping |

Then the run (the placed fragments in order of first placement, the context's index
installed, the options), then the substitution (D4), then the policy (D7).

## Tests

`test/test_zooflm_engine.js` over a small zoo written in the test (two people with a
name and a biography; a footnote; a citation key with an entry in the citations table; a
`\ref{person:alice}` across objects; an equation with a label and an `\eqref` in another
field of the same object; a figure with `\includegraphics` and an entry in the graphics
table; no file is read): engine creation with settings and with a wrong setting (the
error names the feature and key); `make_fragment` in the three layouts, `empty`; a
render through `render_document` with every helper used, the markers all substituted, the
cross-object link resolved, the footnote and bibliography pieces placed by `endnotes()`,
the figure's `<img>` with its address and size; the same page with `piece()`; a stray
marker reported; `ref()` with a custom display and with a missing target under both
`unresolved` values; the snippet cache: batch run, hit, miss, text and html, a
non-standalone fragment refused; `render_fragment` html and text; `render_text` of two
fragments; diagnostics: an unknown macro under `abort` (throws `ZooFlmError` whose message
holds the formatted diagnostic with the origin) and under `continue` (the html holds the
backend's recovery, the diagnostic is returned); `file_line` from an origin with
`start_line`; `release` then use (a plain `Error`); `html_stylesheet()` holds the core
stylesheet and not the page one; `truncate` to 30 characters parses and renders; `scan`
reports the label, the reference, the citation key and the image. `test_zooflm_wasm_module.js`
updated to the class name.

## Prototype runners

`scratch/proto/js/compose_example.mjs` rewritten over the engine (the same page shape,
through `render_document`), run once on `zoodb-example` as a check that the composition
of 07 milestone 1 is reproduced; the other runners only take the class name.

## Docs

JSDoc on every exported function and method (the `doc/` rewrite is step 5); `CLAUDE.md`'s
ZooFLM paragraph lists the new files beside the old ones; `rust/zoodb-flm-wasm/README.md`'s
surface table updated; `package.json` export `./zooflm/engine`.

## Checks before handing back

From `rust/`: `cargo clippy --all-targets -- -D warnings`, `cargo test`; from the root:
`yarn build:wasm flm`, `yarn test`, `yarn lint`; the two runners; `git status --short`.

## Results

Implementation, 2026-10-16 (Rust 1.97, wasm-pack 0.15, wasm-bindgen 0.2.127, node 23.7;
flm-core 0.5.0 at the local checkout). Reviewed the same day: no must-fix, every deviation
accepted; the fixes are under "Review fixes" at the end.

**What was built.**

- *The core* (`rust/zoodb-flm-wasm`): the class is `ZooFlmCore`; `with_layout(handle,
  layout)` (a `Fragment::new` sharing source, tree and parse diagnostics); `release(handles)`
  (the fragments are `Vec<Option<Arc<Fragment>>>`: a handle is never given out twice, every
  handle is checked before any is released, a released or unknown handle is an error
  naming it); `parse` returns `empty` (every top-level node is whitespace, a comment, a
  paragraph break, or a list of those); `html_definitions()` over `FlmRegistry::styles()`
  and `scripts()` (styles first, registration order, parts `inline`/`file`/`url`/`table`);
  `render_text` returns `tree_diagnostics` with `per_tree` (one list per handle, beside
  `trees`); a `typescript_custom_section` declaring every shape (`CoreConfig`,
  `ParsedOut`, `HtmlOut`, `TextOut`, `LatexOut`, `ScanOut`, `TruncateOut`, `FieldsOut`,
  `Definition`, `CoreDiagnostic`, …) and `unchecked_param_type`/`unchecked_return_type` on
  every method, so the `.d.ts` has no `any` left in the class. `fragment_count()` counts
  live fragments. Two native tests added (siblings, release and `empty`; the registry's
  definitions and the pieces' requirements), two extended (a synthetic origin's label;
  the per-tree diagnostics).
- *The engine* (`src/zooflm/engine.js`, `fragment.js`, `diagnostics.js`, `compose.js`,
  package export `./zooflm/engine`; environment-neutral: they import only each other and
  `_load_wasm.js`, which a test checks): `ZooFlmEngine.create({ load_wasm, core,
  error_policy, unresolved, render_value_options })`, `ZooFlmEngine.features({ load_wasm
  })`, and the members of the table above; `ZooFlmFragment` (frozen; `released`);
  `ZooFlmError`, `format_diagnostic`, `apply_error_policy`, `make_diagnostic`,
  `map_core_diagnostic`; `ZooFlmComposition` (the helpers, the markers, the substitution
  in one pass with a callback, so substituted HTML is never scanned again). Additions
  beyond the table: `engine.free()`, `engine.core` (the `ZooFlmCore`, for `parse_fields`
  and the counters), `engine.fragment_of(handle)` (the handle → fragment map of D3, the
  siblings' handles included), `engine.snippet_entry(f, output)` (`{ output, value,
  requires, diagnostics }` or `null`, without rendering: what the dump of step 3 reads),
  `engine.build_diagnostics`.
- *Tests*: `test/test_zooflm_engine.js`, 22 tests over the zoo of the brief (all the
  cases listed, plus the context switch of the index, `render_latex`, layout errors, the
  environment neutrality of the four files); `test_zooflm_wasm_module.js` takes the class
  name and checks the `.d.ts` (the declared interfaces, no `any` in the class).
- *Runners*: `compose_example.mjs` rewritten over the engine (the same person pages,
  `piece()` for the footnotes and the bibliography; it writes `flm.css` from
  `html_stylesheet()` beside the pages with `--out`, and with `--index-size N` sets the big
  index under its own context, renders Bob's page with it, then again under `default`);
  `load.mjs`, `run_zoo.mjs`, `settings.mjs`, `flm_fields.mjs`, `text_and_truncate.mjs` and
  `handbook_example.mjs` take the class name; all were run.
- *Docs*: JSDoc on every exported function, class and method; `CLAUDE.md` (the ZooFLM
  paragraph lists both layers, the Rust paragraph the class); the crate README's surface
  table (every method, the new shapes, a run's diagnostics include the parse ones); the
  loaders' comments.

**Numbers.**

| | |
|---|---|
| FLM module | 5,128,633 B (+5,827 B over step 1: the new methods and the TypeScript section); gzip -9 1,779,481; brotli -q 11 1,268,839 |
| `yarn build:wasm flm`, warm | 12.4 s; the final build is byte-identical (wasm, glue, `.d.ts`) to the build the tests ran against |
| `cargo test -p zoodb-flm-wasm` | 13 passed (11 before); clippy clean; per crate and workspace-wide (citations 40 passed) |
| `yarn test` | 421 passing (398 before: +1 in the module test, +22 engine tests), 7–9 s |
| `yarn lint` | the 20 pre-existing errors in the 9 untouched files; none in the new or changed files |
| `compose_example.mjs` on zoodb-example (3 runs) | engine created (module loaded, instantiated in 15–17 ms, registry built) 48–53 ms; parse 2.4–2.6 ms; scan 11.7–12.9 ms; host tables 1.9–4.2 ms; html snippet run of the 5 names 11.1–12.4 ms (it builds the html plan); text snippets 5.9–7.0 ms (one run per name); `set_index` 0.5–0.6 ms; the five pages 16.5–19.3 ms (Alice 7.1–7.8, Bob 7.5–8.8, the three others 0.4–1.7); 0 markers left, no render diagnostic (both tables filled), Bob's links, bibliography and Alice's `<img src="/pic/Smiley-eba41315.png" … 159.84pt>` as in 07; index of 2,005 entries set in 98–102 ms, Bob's page with it 4.3–4.5 ms, again under `default` (the 5-entry index installed again) 5.0–5.1 ms, the same page; 17 handles held (5 names, 5 biographies, 2 friend details, 5 blocks siblings); memory 75.8 MB; stylesheet 44,809 characters |
| 07 milestone 1, for comparison | parse 2.6 ms, snippet run 18.5 ms, five pages 22.7 ms; R14: 103 ms and 4.7 ms |
| `run_zoo.mjs --kind example` | parse 5 ms, scan 11 ms, render 29–33 ms; the tallies of 07 and 08 (no parse diagnostic; 2 labels, 2 references resolved, 2 unresolved to `person:alice`; 4 cited keys; 1 image; render: 4 `flm.citations.no-entry`, 2 `flm.refs.unresolved` warnings) |

**Deviations from the brief.**

- *No `title` in `render_document`.* `HtmlRenderOptions.title` sets only the `<title>` of
  the backend's own page, which the engine never reads (it reads the per-tree table), and
  the core's plan cache is keyed by it: one plan built and kept per distinct title, that
  is per page. Left out rather than passed through; nothing else in a page depends on it.
  A title for the page is the composer's to write.
- *Text snippets are one run per fragment*, not one run per output: the core cannot cut
  one tree's text out of a run's (07, milestone 6: the text marks cover only the lowered
  nodes that carry one), so `render_snippets` runs the html output once over all the
  fragments and the text output fragment by fragment (5.9–7.0 ms for 5 names). No
  workaround; one run would need text marks over every node in flm-core.
- *Core additions beyond the list*, each needed by the engine: `tree_requires` (per tree)
  in `render_html` and `requires` on each piece (a snippet's own requirements for the
  cache, and a page's requirements from the trees and pieces it actually shows: the
  footnote list needs `flm.html.style.lists` and `.headings`, which the trees do not);
  a piece's `place` as `before-content`/`after-content` (was Rust's `Debug` text); a
  diagnostic's `origin` is now the source's label (the canonical path, else the label of
  a source the library created, `index:person:x`, `citation:arxiv:…`), which D7's `{ label
  }` needs (it was `null` for those); a definition part of kind `table` replaces
  `other`.
- *Columns in characters.* The core's `col` counts bytes (`wörld \x` reports column 8);
  the engine recomputes `line`/`col` from the fragment's source, the column in
  characters (code points), and keeps `start`/`end` as byte offsets. `file_col` takes an
  optional `indent` on the origin (the columns removed from each later line, as in a YAML
  block scalar): `start_col + col - 1` on the first line, `col + indent` on the others.
  `format_diagnostic` writes the file position when the origin gives one, else the
  position inside the source.
- *`set_index` installs at once* (the context becomes the installed one) and returns `{
  diagnostics, has_errors }`, the displays' parse diagnostics under the policy, so that
  they are reported at the call and not at some later run; a later run whose context
  differs installs again, its diagnostics then dropped (already reported).
- *`render_text`*: an option `per_fragment` (default `true`; `false` skips the per-fragment
  runs) and `tree_diagnostics` (each fragment's own run, mapped, not subject to the
  policy: the whole run's diagnostics hold every content problem, and the per-fragment
  runs add only the references to other fragments, expected not to resolve there).
- *Smaller choices.* `endnotes()` leaves out the pieces placed by `piece()` (no piece
  twice); a piece the run lacks is replaced by nothing. A snippet entry with an Error
  is not cached (each use reports it under its own policy); a non-standalone fragment
  asked as a snippet is rendered alone and not cached under `continue`.
  `html_stylesheet()` adds a comment line only to a definition whose text does not begin
  with its own `/* ID */` line (flm-core's texts all do); definitions without inline
  text (`flm.headings.style` declares no part) are skipped. A result's `definitions` and
  `requires` leave out `flm.html.style.page` and follow the registry's order.
  `make_fragment` defaults the layout to `inline` for a standalone fragment; an origin
  may be a string (its label); with nothing to name it, the label is `fragment:N`.
  `ne()` is true for any value but `null`, `''`, `[]` and an empty fragment (the old
  `value_not_empty` was false for numbers and booleans). `scan().cited` is `[{ key, origin,
  fragment }]` instead of `[key, origin]` pairs; the graphics origins stay label strings
  (the graphics table's key). `scan` and `set_index` take `error_policy` too.

**What the processor (step 3) should know about the engine.**

- A fragment's canonical label is what the core, the scan's `graphics[].origin`, the
  `cited[].origin` and the graphics table key on: `source_path#field` from `{ source_path,
  field }`; give object fragments that origin (plus `object_type`, `object_id`, and
  `start_line`/`start_col`/`indent` when the loader has them).
- Per-object diagnostics: `make_fragment(source, { origin, standalone, error_policy:
  'continue' })` never throws for content; collect `f.diagnostics` per object and apply
  the policy with `apply_error_policy(diagnostics, policy)` (or `throw new
  ZooFlmError(diagnostics)`). **A run's diagnostics repeat the parse diagnostics of the
  fragments it places** (flm-core's `Run::diagnostics`), the scan's included; take the
  parse diagnostics from the fragments and the stages' from the runs, or dedupe.
- `set_index(entries, { context })`: `display` a standalone fragment (rendered through
  the snippet cache by `ref()`, parsed again from its source by the core for `\ref`) or FLM
  text. Each context switch between runs re-installs the whole index (about 50 µs per
  entry: 100 ms for 2,005), so render the pages of one context together.
- Snippets: `render_snippets(standalone fragments)` once after the tables; read entries
  with `snippet_entry(f, output)` for the dump. Loading a dump's snippets into an engine
  (`load()`) needs an engine-side setter keyed by origin label (not built: step 3).
  `tables` gives the kept index (display as given: a fragment or text; the dump wants
  `.source`), citations and graphics. The engine does not keep the core configuration,
  which the `settings_hash` of step 3 needs.
- Reload: `release(fragments)` frees each fragment, its layout siblings and its snippet
  entries; index entries whose display is a released fragment must be set again before
  `ref()` uses them (they throw a plain `Error`).
- `render_text(fragments)` gives `trees` (each fragment alone) for the search index;
  `render_fragment(f, { output: 'text' })` for one field.
- The FLM-files loader (step 4) reaches `parse_fields` through `engine.core`.

**Open questions** (all three decided in the review; see Review fixes).

- `title` (above): left out; is a page title wanted from FLM for anything?
- `truncate()` appends ` (truncated)` to the label, as the brief says; the graphics table
  is keyed by the label, so an image kept in a truncated preview does not resolve
  (`flm.graphics.resolve-failed`). Keeping the label (and marking the truncation in
  another origin key) would fix it; images in the first 700 characters of a description
  are rare.
- Markers are the same strings in every call (`<flm:tree:0/>`): a marker carried from one
  `render_document` call into another's output is substituted by the second call's tree
  of the same number, not reported. Inherent to the marker format of D4; a per-call
  nonce in the marker would close it.

**Review fixes** (2026-10-16, after the review; the FLM module rebuilt).

- *`set_index` is all-or-nothing.* Labels are checked in JavaScript as flm-core's
  `Label::parse` reads them (`TYPE:ID`) before the core is called; the entries go to the
  core first and the kept table and `_installed_context` change only on success; under
  `abort`, when the displays' diagnostics throw, the previously installed index is
  installed again. A thrown `set_index` (refused in JavaScript, refused by the core, or a
  `ZooFlmError`) leaves the kept tables and the core's index as they were (tested,
  including a display whose parse aborts in the core).
- *Markers carry a per-call token*: `<flm:K:tree:N/>`, `<flm:K:piece:NAME/>`,
  `<flm:K:endnotes/>`, `K` a per-engine counter; a marker of another call is a stray
  marker (D4 updated).
- *`truncate()` keeps the label* and adds `truncated: true` to the origin;
  `format_diagnostic` writes ` (truncated)` after the position (`PATH#FIELD:L:C
  (truncated): …`). The label → fragment map is a multimap (the live fragments of a
  label, oldest first; a diagnostic maps to the oldest), so a preview neither takes its
  original's place nor removes it on release. An image in a truncated preview resolves
  (tested). The truncate row of the engine table updated.
- *Standalone-ness.* `set_index` refuses a display fragment that is not standalone
  (`zoodb.index.display-not-standalone`, an Error under the policy; under `continue` the
  entry is left out). `snippet_of_text` runs the core's standalone check (`scan([h],
  [h])`) once per text, the result kept per text: each `zoodb.standalone.violation`
  becomes the Error `zoodb.snippet.not-standalone` with the violation's position and
  message, and the snippet is not cached. `render_snippets` runs no check (documented:
  the processor scans first).
- *Composition.* An after-content piece with content that no marker placed is the
  Warning `zoodb.compose.piece-not-placed`; before-content pieces are reachable only
  through `piece()` (documented). `rdr()` of an object that is not a fragment throws a
  `TypeError` naming its type and keys, or for a zoo object its type (when its `_zoodb`
  has one) and id. The double placement through `rdr()` and `rdrblock()` is documented.
- *`free()`* sets a flag (`engine.freed`): any later call, `free()` included, throws a
  plain `Error` saying the engine was freed.
- *Smaller.* `render_text().text` loses its trailing newline like `trees`; the JSDoc says
  which calls take which policy, describes the per-fragment text snippet runs, and the
  paragraph breaks of `ne()`; `title` left out of `render_document` (the engine table
  updated). The core's byte column is documented in `map_core_diagnostic` and in the
  `.d.ts` comment of `CoreDiagnostic.col`.
- *Tests.* The assertions on flm-core's message text and markup are loosened to the
  parts the engine writes (`ref()`'s own `<a … class="href-ref ref-TYPE">` stays exact);
  8 tests added (`free()`; the stray marker across calls; the piece-not-placed warning;
  an array of standalone fragments and the `rdr()` errors; `set_index`'s diagnostics
  and policy; the failed `set_index`; the refused displays and ad hoc text; the
  truncated preview with an image), and `ref()` with a fragment as `display_flm`.
- *The one Rust change* is the `.d.ts` comment of `CoreDiagnostic.col` (item 9, in the
  TypeScript section of `lib.rs`): after `yarn build:wasm flm` the `.wasm` and the glue
  are byte-identical to the reviewed build, the `.d.ts` differs by that comment.
- *Checks after the fixes.* `cargo clippy`/`cargo test` per crate clean and green (13 and
  40); `yarn test` 429 passing; `yarn lint` the 20 pre-existing errors only;
  `compose_example.mjs` on zoodb-example: no diagnostic, 0 markers left, five pages in
  16.6 ms, the big index set in 96 ms.
