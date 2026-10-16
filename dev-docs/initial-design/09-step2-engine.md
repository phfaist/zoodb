# 09 — Step 2: the engine (level 1 of Q18)

Build order step 2 of `06-repo-change-map.md` (section N; the fates in section B). Brief
written 2026-10-16 after step 1 (`08-step1-rust-workspace.md`); implemented by an
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
  a real string. Markers are `<flm:tree:N/>`, `<flm:piece:NAME/>` and `<flm:endnotes/>`
  (unknown empty tags, which `sqzhtml` and HTML tooling leave alone). After the run, each
  marker is replaced by its tree's or piece's HTML. A marker left over (not produced by
  this call's helpers) is an error diagnostic `zoodb.compose.stray-marker`; a marker
  copied by the composer is substituted wherever it appears.
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
7. Everything else as in 07; clippy clean, tests green, module rebuilt by
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
| `render_document({ compose, context, title, unresolved, error_policy })` | the composer protocol (below); returns `{ html, definitions, requires, diagnostics, has_errors }` |
| `render_fragment(f, { output, context, unresolved, error_policy })` | one tree, no composer; `{ html \| text, definitions, requires, diagnostics, has_errors }` |
| `render_text(fragments, options)` | D9 |
| `render_latex(fragments, options)` | the core's `render_latex`, fragments resolved; the handbook's (Q12) |
| `scan(fragments)` | the core's `scan` with the standalone fragments passed from the fragments' flags; `trees[i]` carries `fragment`; `standalone_violations` and `duplicate_labels` as the core gives them |
| `truncate(f, { chars, min_chars, marker, first_paragraph })` | a new fragment of the shortened source, same origin with `(truncated)` appended to the label; `{ fragment, truncated, cut_at }` |
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

(filled in after the implementation and the review)
