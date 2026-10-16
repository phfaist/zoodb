# 03 — Design questions to settle (ordered)

Each question: why it matters, the options, a recommendation, and a status line.
Earlier questions constrain later ones. Status values: *open*, *decided (date)*,
*deferred*. Answers are recorded here as they are given.

---

## Group A — scope and architecture (settle first)

### Q1. Compatibility stance: clean break or compatibility shim?

*Why.* The current API is shaped by Transcrypt (`$$kw`, `__class__`, `isinstance`,
python modules re-exported). None of that can be preserved over a wasm binding. The
downstream code (eczoo_sitegen, handbook, zoodbtools, zoodb-example) imports it
directly.

*Options.*
(a) Clean break: a new `zooflm` module with a new API; downstream ports once; major
version bump. Keep the *concepts* (schema `_flm:` markers, "standalone" fields, page
rendering with shorthands, scanner-like data, data dump) so that porting is mechanical.
(b) Keep the old API shape (`make_and_render_document`, `RefInstance`, …) implemented
over flm-rs as a shim.

*Recommendation.* (a). A shim would reproduce the render-callback-inside-a-render model,
which does not match flm-rs (documents are assembled before the run). Preserve names
only where the semantics match (`render_text_standalone`-like helpers, `is_flm_fragment`,
`value_not_empty`).

*Status.* decided 2026-10-14: (a) clean break. "There's no hope for a clean solution with (b)."

### Q2. Which Rust layer does the wasm binding wrap?

*Why.* Determines what configuration looks like and how much host logic is Rust.

*Options.*
(a) `flm-core` only, plus a `zoodb-flm` Rust crate holding zoo-specific features and
service implementations (citation provider over a host-filled map, graphics resolver
over host-provided bytes, the `\begin{field}` element for the FLM-files loader).
Configuration is built in Rust from a JSON object the host passes.
(b) `flm-main` without its `fs` feature (builds for wasm): gives settings-as-data with
the same keys and JSON schema as a front matter `flm:` block (`stdcore::factory`,
`PackageSettings`, the settings cascade), packages by name, compose templates; optionally
its `graphics` feature (pure-Rust image inspection: `image`, `png`, `lopdf`,
`roxmltree`) and `citations` feature (autocitefetch + hayagriva) with host-provided
`Files`/`Fetcher`.
(c) (b) plus `flm-ext`'s `data` engine, so a zoo can ship extensions written as data
(settings, userdefs, workflows).

*Recommendation.* Start from (a) for the core binding but take settings-as-data from
`flm-core` (`stdcore::factory` + `SettingsDecl::read` are in `flm-core`, not
`flm-main`), so `flm_options.features` in ZooDb config is written exactly like a front
matter `flm:` block. Add `flm-main`'s `graphics` module if it compiles to wasm (Q7),
and consider `citations-standard` later (Q6). Defer (c).

*Status.* decided 2026-10-14 (provisional, not a ruling): ZooDb-specific binding for now;
which components are generic enough for an flm-rs crate is decided per component, probably
towards the end of the design session. The base is flm-core. The binding's output does
**not** include composition into a final template: pieces (per-tree HTML, footnote lists,
bibliographies, stylesheet requirements) are composed by the ZooDb user's own templates
(11ty in zoodb-example and the EC zoo). Requests to flm-rs are kept to the absolute
minimum driven by necessity.

### Q3. What is a "document" in the zoo: unit of a run

*Why.* flm-rs numbers, cross-references and lists things per document. The zoo has
three granularities: a field, an object, a rendered page. Zoo-wide label uniqueness
(`sec:`, `topic:`, `term:` must be unique across the zoo) also needs a zoo-wide view.

*Options.*
(a) One document per *zoo object* (all its FLM fields placed in schema order).
(b) One document per *rendered page* (whatever the template places, in template order;
a code page shows the code's fields plus names/details of related objects).
(c) One document for the *whole zoo* (every fragment of every object).

*Recommendation.* Two kinds of runs, both over the same shared fragments:
1. A **zoo-wide scan run** over one document holding every field of every object, with
   a plan that demands just the tables wanted (`flm.labels`, `flm.anchors`,
   `flm.refs.resolutions`, `flm.citations.keys`, `flm.element-index`; a table's name is
   a capability) rather than the `check` workflow, which also runs the citation
   retrieve stage. It replaces the scanner for zoo-wide needs: the external index,
   duplicate-label detection, "referenced in" lists, the glossary and references pages.
   It is not needed to drive citation or image retrieval: the render runs' stages ask
   the services themselves. Reload cost: re-parse changed objects only (fragments are
   shared values), rerun the scan.
   Alternative to evaluate (Q13): one scan run per object, merged by the host.
2. **Per-page render runs** (option b): the page template places the fragments it
   shows; the external index (built from the scan) resolves links to other objects.
   Footnotes, citation lists and figure numbers are per page, as today.

*Status.* decided 2026-10-14: (b) per rendered page, or more precisely per *unit of
rendering chosen by the user's client code* (a user may compose one HTML page from two FLM
documents rendered separately and concatenated). Numbering of equations, headings and
figures is per unit, and the unit is what an incremental data update re-renders. The two
recommended run kinds (zoo-wide scan run with demanded tables; per-unit render runs with
the external index) are agreed.

### Q4. Cross-references to zoo objects and to labels defined in other objects

*Why.* Today `\ref{code:id}` and `\ref{sec:some-label}` work from any field, and the
URL is decided at render time per output context (site, handbook, browser preview).

*Design in flm-rs terms.* Every object becomes an external target `Label(object_type,
object_id) → {href, display}`; every labeled point found by the scan becomes
`Label(type, label) → {href: object_href + '#' + anchor, display: the point's content}`.
`display` is a node tree: use the already-parsed `name` fragment (per-type "display
function" as today, defaulting to `name`). Since hrefs are final strings, the host
builds the index once per output context from a permalink function; the same scan
serves all contexts. In a page run, labels of the page itself resolve internally; the
index is consulted only for labels no placed tree defines.

*Decided.*
1. Every object type is a reference type; the label is the object id. The display
   content comes from a per-type function returning a fragment, defaulting to `name`.
2. The external index is built once per output context (site, handbook, browser app)
   from the scan's labels and anchors plus the object list, through the user's
   permalink function. One scan, several indexes.
3. **JavaScript composes the final content**, with true JavaScript logic over real
   rendered strings (Philippe: "I want javascript logic to compose the final content";
   "I want true JavaScript logic at this stage"; the logic in
   `eczoo_sitegen/eczoodb/render_code.js` must stay writable in that form). The
   helpers `rdr()`, `rdrblock()`, `ref()`, `refhref()`, `ne()`, `endnotes()` and a
   definitions getter are provided by the binding's JavaScript layer. The marker
   proposal and the two-pass model are compared below. In either, the helpers return
   strings and the composer is ordinary code. `ref(type, id,
   {display_flm, …})` is **host-built** and gets no special treatment (Philippe:
   "ref() can be more powerful than \ref{..} in code, it can have a custom display
   string … I want to be able to support such extensions without having to change
   FLM's \ref command"): the href comes from the context's index, the display is the
   object's display fragment (per-type function, default `name`) or the custom FLM
   display text, each rendered as a standalone snippet (Q9), and the link markup is
   ZooDb's own; further parameters are ZooDb's to add. A missing target follows the
   context's unresolved policy in JavaScript. `\ref{type:id}` written in content
   stays FLM's, through the external index.
4. Unresolved references are a render option per context (`RefsRenderOptions.unresolved`:
   Error in production builds, Warning shown as the label text in browser apps and
   previews). This replaces the `<??>` resolver.

*The two-pass model (settles the shape of Q8).* Where flm-rs puts page assembly is
the host: the HTML backend writes each tree's HTML into `flm.output.html`
(`HtmlFragments`: per tree, HTML segments plus the definitions it requires), each
placed piece into `flm.output.html.pieces`, the definitions into
`flm.html.definitions`. The `flm` program assembles its page from whole *regions*
through its `compose` feature, whose engine sees the content as one region and
cannot compose per tree. So ZooDb's composition is neither a backend, nor lowering
rules, nor a refinement of the HTML backend: it is host-side assembly over the
per-tree table, in JavaScript, with no Rust involved.

The one constraint: a document's trees are fixed before the run (frozen trees), and
no stage can add a tree while it runs. So the binding must know, before the run,
which non-standalone fragments the composer renders and in which order (the order is
the document order: equation and figure numbers follow it). The robust way to learn
it is to run the composer itself, as the old FLM document did (`FLMDocument.render()`
called the render callback in a first pass, then substituted delayed markers or ran a
second pass):

1. *Record pass.* The composer is called once with recording helpers. `rdr(f)` of a
   non-standalone fragment places it as a tree, in call order, and returns an empty
   string; `rdr(f)` of a standalone fragment returns its real HTML (a standalone
   fragment needs no document: it comes from the snippet renderer of Q9, so the
   logic sees the same names in both passes); `ref()` and `refhref()` are
   answered for real in both passes (index and snippets, nothing placed); `endnotes()` records that the endnotes and bibliography
   pieces are placed, and returns an empty string. The returned text is discarded.
2. *Run.* One document: the recorded trees in order, the document options
   (numbering, metadata), the render options (unresolved policy, pieces selection,
   HTML options), the external index of the context; a plan demanding the per-tree
   table, the pieces table and the definitions table (no page, no final stage).
3. *Compose pass.* The composer is called again with real helpers: `rdr(f)` returns
   the HTML of the n-th placement of `f` (placed-tree segments spliced), `endnotes()`
   the pieces' HTML, and the result is the page's content.
   The binding checks that the compose pass asked for the same sequence as the
   record pass and reports a clear error otherwise ("the composer is not a function
   of the data alone"). Branching on the rendered HTML of a non-standalone fragment
   is therefore not supported; branching on data (`ne(value)`, names, relations) is,
   which is what `render_code.js` does.

The composer is a plain synchronous function; the whole render is synchronous in
production (every citation and image is known from the scan). A miss (ad hoc
fragment, preview) surfaces as a typed "needs" result; an async wrapper gathers and
retries. The compose pass runs after the wasm run returns, not as a JavaScript
service called from inside it: the composer sees no difference, and the wasm run stays
free of re-entrant calls (a snippet render during the compose pass would re-enter it).
Should the page one day need to be an artifact of the run, a ZooDb final stage can
wrap the compose pass.

*Marker variant (python-flm's delayed markers).* Philippe asked (2026-10-14) whether
the first proposal was python-flm's placement of a placeholder in the composer's output
with substitution afterwards, or an object-based template API spelling out pieces. It
was the former; no object-based API was ever proposed. The marker variant: one call
of the composer; `rdr(f)` of a non-standalone fragment places `f` as a tree and
returns a marker such as `<FLM:TREE:7/>`; `endnotes()` returns `<FLM:PIECES/>`;
standalone snippets and `ref()` return real HTML; after the run the binding replaces
each marker by its tree's or pieces' HTML, exactly as python-flm's HTML renderer
replaced `<FLM:DLYD:n/>` with a regular expression, and as `<RENDER_ENDNOTES/>` was
already replaced in ZooDb. Compared with the two-pass model:

- *What the composer may do with rendered text.* Two-pass: in the compose pass every
  `rdr()` is real HTML, so slicing, wrapping or measuring it is possible, as long as
  the sequence of FLM requests does not depend on it. Markers: a non-standalone
  fragment's HTML is never in the composer's hands. Under python-flm the HTML
  renderer's output already carried delayed markers, so no ZooDb or EC-zoo composer
  ever post-processed rendered content reliably; none does today (checked
  `eczoo_sitegen`'s sources).
- *Side effects and cost.* Markers: the composer runs once, so a counter, a log line
  or an in-place sort happens once. Two-pass: everything runs twice, the record pass
  must be harmless to repeat, and the binding checks that both passes requested the
  same sequence.
- *Robustness of the marker.* An unknown empty tag survives `sqzhtml` (which only
  squeezes whitespace next to tags) and HTML-oriented processing; it does not survive
  uppercasing or truncation of the string that holds it, which would break the HTML
  anyway.

*Recommendation.* The marker variant: it is the contract the composers were written
under, it runs the logic once, and the substitution is exact. The two-pass model
remains the alternative if post-processing of rendered non-standalone HTML in the
composer is ever wanted.

What `render_code_page` looks like in this model (the body of the callback is the
code of today, including the nested helpers and `render_code_hierarchy_content`):

```js
export function render_code_page(code, { zooflm, eczoodb, doc_metadata, ... }) {
    const compose = (R) => {
        const { ne, rdr, ref, endnotes } = R;
        let html = sqzhtml`<h1 class="code-name">${rdr(code.name)}</h1>`;   // standalone: real in both passes
        if (ne(code.introduced)) html += `<span class="code-introduced">${rdr(code.introduced)}</span>`;
        for (const { domain } of code.relations?.root_for_domain ?? []) {
            html += `Root code for the ${ref('domain', domain.domain_id)}`;          // host-built link, real in both passes
            if (ne(domain.description)) html += rdr(domain.description);          // another object's field: placed here
        }
        html += display_field('description');                                    // rdr(code.description)
        for (const rel of cousins) html += `<li>${ref('code', rel.code_id)} — ${rdr(rel.detail)}</li>`;
        html += render_code_hierarchy_content({ code, hierarchy_items, eczoodb, R });
        html += `<div class="sectioncontent code-bibliography">${endnotes()}</div>`;
        return html;
    };
    return zooflm.render_document({ compose, context: 'site', metadata: doc_metadata });
    // → { html, definitions, diagnostics }
}
```

An explicit declaration (`fragments: [...]`) was considered and set aside: the list
would have to mirror the logic (fields of this object, fields of related objects,
the hierarchy module) and its order would have to be the display order; running the
logic once is the introspection that cannot drift. A caller that renders exactly one
fragment uses `render_fragment(f, options)` (one tree, no composer), which also
serves the first-paragraph text snippet of `c.11ty.js`.

*Status.* decided 2026-10-14 (points 1, 2, 4 as recommended; point 3 as Philippe
directed). Point 3 settled 2026-10-15: the marker approach (Philippe: "keep the
placeholder approach"). The two-pass model stays in the text only as the fallback
if a composer ever needs to post-process rendered HTML. Verify R16 (marker variant).

### Q5. The `standalone` field mode

*Why.* Today `standalone` is a parse mode: the fragment refuses constructs that need a
document, so that it can be rendered anywhere (names, titles). In the old FLM this was
a per-command flag `allowed_in_standalone_mode` checked when a node was finalized.

*What standalone means.* Philippe (2026-10-14): "what we really want to define a
standalone mode is that it provides no document-wide information like labels,
anchors, numbered elements, and this might best be checked by simply verifying that
the tables that collect that information hold nothing for those particular fragments
marked as standalone." A standalone fragment therefore renders the same in every
document and on its own.

*Decided.*
1. **Layout.** Standalone fields are parsed with `FragmentLayout::Inline`. Under it
   flm-rs refuses every block element at the block-structure rewrite, display math
   included, with a diagnostic in the scan run. (Nothing else is needed against
   display math; the earlier mention of excluding it was this same layout rule.)
2. **A standalone-check stage** in the ZooDb feature (Rust, in the binding),
   `zoodb.standalone.check`, demanded by the scan plan. It reads, for every tree
   marked standalone: `flm.refpoints` (every reference point: a labeled, anchored or
   numbered element, so headings, equations, floats, notes, defined terms), the
   reference sites of `flm.refs.resolutions` (any `\ref`, `\term` and the like), and
   the element index for citation (`flm.citations.cite`) and image elements. Any
   entry is the Error `zoodb.standalone.violation` at the node's span, naming the
   field. Which trees are standalone is an external table the ZooDb feature
   declares (`external_table`; "a table the host computes itself") and the host
   installs per run (`Externals::install_unstamped`) from the schema's `_flm`
   markers. The check costs one pass over three tables.
3. No parse-time restriction, no upstream request: the restricted-scope parse
   (formerly U1) is withdrawn; its case is kept in 05.

*Status.* decided 2026-10-14.

### Q6. Citations: who retrieves, who formats, who answers the run?

*Why.* In flm-rs the retrieve stage hands every cited key to the providers *during the
run* (once per distinct key, every run, `check` included); the `flm` program fetches
over the network right there, synchronously. In a wasm + JavaScript host the provider
call is synchronous and cannot await a Promise, so the data must be gathered outside
the run. Formatting (CSL) is independent of the run.

*Decided flow.*
1. The scan run's cited-keys table (`flm.citations.keys`, written without any provider)
   lists every key of the zoo. ZooDb's `CitationDatabaseManager` (autocitefetch wasm,
   JavaScript sources such as eczoo's `qecdborg`, the cache) retrieves them
   asynchronously, and `CitationCompiler` formats them with citeproc-js, as today.
2. The binding's `CitationProvider` answers from a host-filled map key → entry and
   records the keys it could not answer. Production builds have no misses; ad hoc
   fragments and browser previews may miss, then the host fetches (or uses
   placeholders) and re-runs the unit.
3. The answer's identity is the manager's normalized id, so two spellings of one key
   are one numbered work.

*CSL output.* Left as it is for now: the citeproc `flm` output format produces FLM
text, which the provider hands to `ProviderCx::parse_entry`. Philippe: "The current
CSL stuff is terribly patchy and not well designed. We either design this properly
(which might mean a shift towards hayagriva), or leave it as is for now. I lean leave
… since it has been fine-tuned over years in the ec zoo." The pieces-based entry
(`build_entry`) stays available for preset and placeholder entries. hayagriva, and
`flm-main`'s provider in wasm, are not pursued; the provider interface is kept such
that they remain possible.

*Status.* decided 2026-10-14.

### Q7. Graphics and external resources

*Why.* Today: scan finds image paths → JS collects/renames/inspects files → render
resolves URLs (+ Parcel `srcset`). flm-rs: resolver and inspector services, publish
strategies, artifact namer.

*Decided flow.*
1. The scan run's element index lists every image node (`flm.graphics.image`, path
   argument, origin). The existing JavaScript resource collector finds, hashes,
   renames and inspects the files asynchronously, as today.
2. The binding's `GraphicsResolver` and `GraphicsInspector` answer from a host-filled
   map: source path (relative to the object's source) → identity, media type, address
   per output context (from the user's permalink function), pixel size, resolution,
   physical size. Strategy `reference` on every output; the binding publishes nothing;
   the 11ty picture page keeps serving the collected files. Misses follow the same
   collect-then-rerun fallback as citations.
3. `global_vector_scale` maps to `GraphicsRenderOptions.magnification` (`vector`,
   `raster`, per output); semantics to check.

*`srcset`: a ZooDb stage, no upstream request.* flm-rs carries alternative sources end
to end (the image payload's `srcset`, the HTML emitter, the published table's field)
and the standard image rule copies `published.srcset` into the payload; only the
standard publish stage writes an empty list. The resolver answers one main source,
as Philippe wants; the alternatives are *deduced* in the build. flm-rs's intended
route is a custom stage, and the precedent is exact: the `compose` feature's stage
writes the same table as the backend's final stage and the plan picks one writer by
preference (`PlanRequest.prefer`; a table has one writer per plan). So the ZooDb
feature registers `zoodb.graphics.publish.html`, a per-tree stage that writes
`flm.graphics.published.html` (declared as a peer table), reading the element index
and `flm.graphics.info` (each record holds the resolver's `ImageFile` with the
address, and the inspected pixel size and resolution): `src` is the address, as the
`reference` strategy writes it; `srcset` is computed as today from the pixel size and
resolution with Parcel's query-string candidates (`?width=…` and a density
descriptor) when the ZooDb option `graphics_use_srcset_parceljs` is on, else empty.
ZooDb's plan prefers this stage over `flm.graphics.publish.html`. The standard image
rule, options parsing and size logic are untouched. Former request U5 withdrawn.

*Not pursued.* `flm-main`'s `graphics` module in wasm.

*Status.* decided 2026-10-14.

### Q8. The page rendering model (replacing the render callback)

*Why.* flm-rs needs the document assembled *before* the run; the current API runs a JS
template callback *inside* the render. Both must give page-wide numbering, footnote and
bibliography lists, and in-page references.

*Proposal.* A two-phase model with placeholder tokens:
1. The template (a JS function, as today) receives a page object `P` and builds an HTML
   string. `P.rdr(fragment)` / `P.rdrblock(fragment)` place the fragment in the document
   and return an opaque token; `P.ref(type, id)` places a `\ref{type:id}` fragment;
   `P.piece('footnotes')`, `P.piece('bibliography')` return tokens for pieces;
   `P.rdr(string|number|array)` escapes/joins as today.
2. `P.render({output: 'html'|'text', context})` runs once (external index, citation
   entries, graphics, render options from `context`) and substitutes every token by the
   tree's HTML (from `flm.output.html`) or the piece's HTML.
3. The result also exposes diagnostics and the `requires` definitions of the page.

This keeps eczoo's `render_code.js` almost unchanged in shape (the `R = {ne, rdr,
rdrblock, ref, refhref}` idiom survives), and makes a page exactly one run.

*Questions.* Confirm the token model over an explicit "build document, then compose"
API; whether `refhref` (URL only) is still needed (yes: computed from the index without
a run); whether pieces are placed by the host (recommended) or by the backend's own
page (no).

*Status.* open, but its shape is settled by the Q4 marker approach (2026-10-15): the
composer runs once; `rdr()` of a non-standalone fragment returns a marker that the
binding replaces with the rendered HTML after the run; standalone snippets, `ref()`
and `refhref()` return real strings; one composer per document; the binding never
composes pages. The helper set and option plumbing are those of the Q18 surface,
accepted 2026-10-15; nothing remains open here.

### Q9. Snippet rendering (names, titles, labels) at scale

*Why.* Thousands of `render_text_standalone(name)` / `render_html_standalone(name)`
calls per site build and in the browser graph, plus the composer's `rdr()` of
standalone fragments and `ref()` displays (Q4). Each would be a run.

*Options.*
(a) One run per snippet, memoized by fragment identity and output.
(b) A snippet run per output (`text`, `html`, and `latex-recomposed` for the
handbook): every standalone fragment of the zoo as a tree of one document, right
after the scan; the per-tree output read into a cache on the fragment (HTML plus the
definitions it requires); ad hoc text (a custom `ref()` display) falls back to (a).
Safe because a standalone fragment holds nothing document-wide (Q5), so trees of one
document do not interact.
(c) Philippe's alternative (2026-10-14): a compute stage in the pipeline that renders
every standalone fragment into a table, which the lowering of such a fragment in any
later document reads instead of rendering again (the table carried over as an
external table; "results carried over from a previous run" is a documented use of
external tables).

*Comparison of (b) and (c).* Rendering in flm-rs is the lowering and emit stages of a
backend over trees; a stage of its own cannot render, so (c)'s stage would synthesize
one value per fragment and lower and emit each through the backend's machinery for
values, which is what placing the fragments as trees of one document does with no
code. On the consuming side, (c) needs a point where "the lowering of a standalone
fragment in a document" can be short-circuited: a tree has no root element to hang a
rule on, so each standalone fragment would have to be wrapped in a ZooDb element whose
HTML rule stages the stored markup through `flm.pres.html.tag` with a trusted
`Markup` body (which exists), with one table per backend. And the only places a
standalone fragment is lowered inside a document are the display trees of `\ref`
targets from the external index, which the `refs` feature lowers itself (changing that
is an upstream change), and `rdr()` in a composer, which the two-pass or marker model
answers on the host side without placing the fragment at all. So (c) would save
re-lowering trees of a few nodes and cost a ZooDb element, a rule per backend and
tables carried across runs. (b) is the same data produced by the standard pipeline
and kept by the host, which it must keep anyway for the browser dump and reload.

*Recommendation.* (b) with (a) as fallback. Reload invalidates only the fragments
that changed. Measure the run cost (R5).

*Status.* accepted for now, 2026-10-15 (Philippe: "Okay (not a ruling)"): (b), one
snippet run per output context over all standalone fragments, cached per fragment,
with (a) as the fallback for a cache miss.

---

## Group B — outputs

### Q10. HTML output and the site stylesheet

*Why.* flm-rs's HTML contract is new (`flm-pres-…` classes, `data-flm-…` attributes,
`<figure>`, `<ol>` lists, `role="doc-…"`, MathJax 4 as a script definition whose delivery
the host decides). eczoo_sitegen has ~29 SCSS files, some targeting the old classes
(`flm-formatting.scss`, math classes, footnote lists), plus MathJax 3 loaded by the site.

*Decided.* (1) The new contract is accepted; the site CSS is rewritten against it, page
by page, as site work. (2) `flm.html.definitions` replaces
`html_fragmentrenderer_get_style_information`: the site's `flm.css` page concatenates
the style definitions once; the composer's result carries the definitions its trees
require. (3) Scripts, MathJax included, are delivered by the site's own bundle through
`HtmlRenderOptions.definitions` (deliveries given by the host), so flm-rs emits no
script tags of its own. (4) MathJax 3 → 4 for both sites.

*Status.* decided 2026-10-14.

### Q11. Plain text output (search index, titles, graph labels)

`text` backend with `width: None`, `link_addresses: false`, `root_heading_level`
suitable for snippets. Standalone text from the Q9 snippet run with the text output.
The search assembler becomes one text run per object over its searchable fields
(citations as marks only: `PiecesRenderOptions.exclude`). To verify: the text emitter
builds one layout document per run, so per-field text is cut out through the
position marks of `flm.output.text`. Position marks could later improve search
snippets.

*Status.* accepted for now, 2026-10-14 (Philippe: "okay for now (not a ruling)").

### Q12. LaTeX for the handbook: `latex-recomposed` or `latex-rendered`?

*Why.* The handbook uses pdflatex, a REVTeX-based class, its own macros for headings,
refs (`\flmRefsHyperref`), citations through BibTeX, and index entries. Today
`mkeczhandbook/main.js` builds one `FLMPureLatexRecomposer` and calls
`subrecompose(fragment)` per fragment; `genltx_*.js` compose the LaTeX themselves,
adding sections, hierarchy pieces and aux definitions (`\eczauxDefRefCode`) that
resolve references to codes; equation labels are made unique by a global key per
source file (`::source_path::eq:label`); comments are suppressed and `[[`/`]]` in math
become `\llbracket`/`\rrbracket` by patching the recomposer.

*Decided.* `latex-recomposed` ("of course"). The handbook composes the LaTeX itself, as
it does today: its own sections, hierarchy pieces and aux definitions are plain strings
written by the handbook's JavaScript and never parsed by FLM. Only the fragments are
rendered, through the Q4 marker approach over the `latex-recomposed` backend.

*Reopened 2026-10-15: one run, or one run per unit.* Philippe: rendering per unit "might
mean we need to render everything in one go, e.g., to make sure we have consistent
safe-labels across the entire document." Facts verified in flm-rs:

- Safe labels are numbered once per document by the stage `flm.refs.safe-labels`, which
  walks every tree in placement order and allocates `ref1`, `ref2`, … at the first mention
  of a label (forward references included). There is no prefix or starting-number option;
  every run starts again at `ref1`.
- A label is document-wide. Two trees of one run carrying the same label give the
  diagnostic `flm.refs.duplicate-label`, one safe label for the key, and `\label{refN}`
  written twice. The EC zoo data today has 3 labels used in more than one code file
  (`eq:parity` in 3 files, `figure:toric-code-operators` and `eq:gb_gv` in 2 each); the
  per-file global key of today's handbook is what keeps them apart.
- A reference is written as the single hook `\flmRef[options]{key}` and a label as
  `\flmLabels{\label{key}}`; `label_hooks` is a boolean, there is no per-type hook. The key
  is the safe label, or the label as written for a type marked `Raw` in
  `RefsRecomposeOptions.safe_label_types`. The handbook's LaTeX therefore tells an object
  key (`code:x`, raw) from a safe label (`ref12`) itself, by testing whether its aux
  definition exists, as `\flmRefsHyperref` does today.
- The per-tree output table is `flm.output.latex-recomposed` (`LatexFragments { trees }`:
  one `text` per tree, plus the declared characters and `requires`). The style file, the
  package list and the preamble are per run.

Two ways to get consistent labels across the handbook:

(A) **One run for the whole handbook.** The handbook's composer places every fragment it
renders in one run; the handbook's own LaTeX stays outside FLM as composer strings. Safe
labels are then unique over the handbook with no prefixing, and one style file, one
package list and one preamble come out of the run. Required: labels unique zoo-wide,
which the zoo-wide scan run (Q3) checks for free when it demands `flm.refs.targets`
(the duplicate check belongs to the refs scan), and which the EC zoo data must satisfy
(3 labels to rename). Cost: the largest run of the build, several thousand trees in one
wasm run, to measure (R5, R7). The external index is installed as for any run, so a
`\ref{code:x}` to a code outside the handbook's selection is reported as today.

(B) **One run per unit, labels prefixed in LaTeX.** Today's structure. Each run writes
`ref1`, …; the handbook emits a unit id before each unit's LaTeX and redefines `\flmRef`
and `\flmLabels` to prefix the key with it (a few lines of LaTeX in the handbook's style),
which is the role of today's `ref_to_global_key`. No zoo-wide constraint on labels and
small runs, but every reference and label passes through the handbook's own prefixing,
and the style file must be shared across runs (identical options give an identical
`<stem>.<hash>.sty`, to verify).

*Recommendation.* (A). The marker composer makes one run the natural shape; consistent
labels become a property of the run instead of a property of the handbook's macros; and
zoo-wide unique labels are a reasonable rule that the scan enforces and that the HTML
site benefits from too (two objects rendered on one page can never collide).

*Mapping to flm-rs, to verify on one code (R7).* Object label types (`code`, `kingdom`,
`domain`, `topic`, …) are marked `Raw` and resolved by the handbook's aux definitions as
today; equation, figure and section labels stay safe. Comments: `drop_comments`. The
ligatures: no option seen yet; a candidate for the handbook's own rewrite of math source
or an encoder override, to check. The style file (`<stem>.<hash>.sty`) replaces
`flmlatexdefaults.sty`. Equation numbering is LaTeX's own in recomposed output, so
continuous numbers need nothing from FLM. Standalone snippets (names in
`\eczauxDefRefCode`, section titles) come from the Q9 snippet run with the
`latex-recomposed` output.

*Status.* backend decided 2026-10-14; run structure (A) accepted 2026-10-15 (Philippe:
zoo-wide unique labels for equations and figures "sounds a bit strong to me, but let's
go that way because it's easier for now (not a ruling)"); verify R7. If the rule proves
too strong in practice, (B) is the fallback.

---

## Group C — data, extensibility, errors, reload

### Q13. Data dump for browser apps and incremental reload

*Why.* The code graph app, the search widget and the preview apps load a dump of the zoo
in the browser.

*What the browser apps render (verified 2026-10-15).* The code graph app is not a
labels-only consumer. Its information pane (`CodeGraphInformationPane.jsx`) renders a
code's name, its "introduced" field, its description truncated to about 700 characters,
its relation lists, and a domain's or kingdom's description, all as full fragments with
references and citations, through the same shorthands as a page (`rdr`, `ref`). Graph
labels are names rendered to text. The search widget uses the text index only. The
preview apps run the whole processor.

*Decisions.* The dump carries, per object and field, the FLM source (as today), and beside
it the data the renders need: the external index data per output context (labels,
anchors, object ids; built into an index on load), the snippet cache of the Q9 run (text
and HTML per standalone fragment, with the definitions each requires), the compiled
citations, and the graphics map (Q7). Apps that render only names and links (graph
labels, link lists) read the snippet cache and never run FLM. Apps that render content
(the information pane, the previews) load the wasm module, install the index, the
citations and the graphics data as external tables, and run documents as the site does,
with the `continue` error policy and unresolved references as warnings. The pre-parsed
dump form (`FLMDataDumper`) goes away: parsing is fast and the source is the smallest
form.

*Truncation.* `truncate_to` (old FLM: cut the node list at about N characters, at word
boundaries, append " …", make a new fragment) is used by the graph pane, by the code
lists (`render_codelist.js`, columns and descriptions) and by the random-code data.
flm-rs has no such facility. Recommendation: a ZooDb helper over the parsed tree that
returns the cut position in the source (the end of the last top-level node that fits, or
a word boundary inside a text node), appends the marker and parses the shortened source
as a new fragment. It needs the binding to expose node spans of a parsed fragment (R18).
No upstream request.

*Reload.* On an object change, its fragments are re-parsed, the scan is re-run for the
object (Q3), the index is rebuilt from the scan tables, and the object's snippet cache
entries are invalidated and re-rendered at the next snippet run.

*Status.* accepted in principle 2026-10-15 (Philippe: "Okay", with the correction that
the graph app renders previews and so loads the wasm module). Measure the module size for
the browser (R2); truncation helper (R18).

### Q14. Extensibility for ZooDb users (custom features)

*Why.* Today a zoo passes python-transcrypted feature instances
(`custom_features`), and `environment_options` in the old library's vocabulary.

*Available in the wasm build.* (a) settings-as-data for every stdcore feature (same
keys as a front matter, JSON schema available); (b) user definitions as data (template
macros with arguments, per-mode text/math templates; replaces the old `markup`/`substmacros`
feature for most cases); (c) Rust features compiled into the ZooDb binding (zoo-specific
elements such as the `\begin{field}` environment; opt-in by name); (d) *not* available:
JavaScript extensions (QuickJS is native-host only) — a future `wasm`/host-JS engine is
listed in flm-rs's plans.

*Verified 2026-10-15: custom features in use.* The EC zoo passes one custom feature,
zoodb's transpiled `FeatureQuote` (`\begin{quote}`), which flm-rs's stdcore has as the
`quote` feature. ZooDb itself adds `FeatureZooGraphicsCollection` (graphics management,
replaced by the Q7 map) and zoo implementations of the reference resolver and the
citations provider (replaced by the external index and the citations table). No zoo
defines macros through `substmacros` or a LaTeX context database. So the first build
needs no extension mechanism beyond flm-rs's standard package.

*Decision.* Everything is compiled into the wasm module: flm-core's standard package and
the ZooDb feature (the standalone check, the srcset publish stage, later the FLM-files
field element of Q16). Configuration goes through a plain data interface: the binding
takes settings as data (feature options, user definitions, the standard keys with their
JSON schema) from JavaScript objects; `flm-ext` and its YAML reading are not pulled in.
JavaScript extensions and user-contributed Rust features are a later question, if ZooDb
users need them (Philippe: "we'll have to deal with this later down the road").

*Status.* decided 2026-10-15.

### Q15. Error policy, diagnostics, positions

*Why.* `abort`/`continue` must survive; browser previews need `continue`; diagnostics
should point into the data file.

*Positions, verified 2026-10-15.* Two loaders, two situations. The YAML loader
(`yamldb.js`) calls `js-yaml`'s `load()`, which returns plain values with no positions, so
today a diagnostic knows the file and the field, and the line and column inside the
field's text (the located errors of the old parser), but not where the field starts in
the file. The FLM-files loader (`flmfilesdb.js`) has file positions through the old latex
walker. In flm-rs a diagnostic's span is a byte range into the source it was parsed from;
line and column are computed from the source text by the host (the CLI does so in
`dump/project.rs`); `FlmOrigin` carries a canonical path and a label and no starting
position. So absolute positions are the host's job: ZooDb maps the byte offset to a line
and column inside the field's text and adds the field's start in the file. No upstream
request (a base position on the origin would save one addition on the host).

*The `yaml` package, checked on the data (2026-10-15, `checks/yaml_compare.mjs`).*
Philippe remembered that `yaml` and `js-yaml` are both used in the zoo for a reason. The
reason is recorded in `jscomponents/editcodelegacy`: `yaml` writes YAML there (its
formatting options), `js-yaml` reads it, with the comment that `yaml`'s parser "doesn't
seem it can parse multi-line strings". Measured over the 1250 YAML files of `eczoo_data`
with `yaml` 2.6.1 and `js-yaml` 4.1.0:

- `js-yaml` parses every file. `yaml` rejects 127 of them, all for one cause: a
  single-quoted value continued on a following line that is indented no more than the
  line holding the opening quote (typically a relation's `detail: 'text` continued at the
  key's own column). YAML 1.2 requires the continuation lines of a quoted value to be
  indented more than the enclosing block. `js-yaml` is lenient about it; `yaml` is not
  and has no option to relax it.
- On the 1123 files both parse, the values are identical except one, in
  `qubits_into_qubits.yml`, where a quoted line ends in a space: `js-yaml` keeps it
  before folding, `yaml` drops it as the specification says. Harmless for FLM.
- Positions: `yaml`'s document API gives every scalar's byte range and, with
  `keepSourceTokens`, the block scalar's source. The 1921 literal block scalars (`|`,
  the form of 1111 of the 1157 `description` fields and of most `protection` fields) map
  line for line: value line i is source line (header line + 1 + i) with the block's
  indentation removed; a whitespace-only line keeps its spaces beyond the indentation.
  Folded (`>`, 155 of them) and quoted multi-line values map approximately.
- Time over the whole zoo: 0.16 s for `js-yaml`, 1.1 s for `yaml`, 1.4 s with positions.
  Negligible against FLM.
- `zoodb-example`'s 9 files: no difference between the two.
- `js-yaml` has an undocumented `listener` option (`open` and `close` events carrying
  the parser state) from which positions could be reconstructed. Not proposed: a
  workaround on an undocumented hook.

*Options for YAML positions.* (1) Switch the loader to `yaml`, strict YAML 1.2: fix the
127 EC zoo files once (re-indent the continuation lines, a mechanical rewrite), give the
pattern a clear message in the loader, and take positions from the document API. (2) Keep
`js-yaml` and no positions in YAML files: diagnostics name the file and the field and
give line and column inside the field, as today. *Recommendation.* (1), as part of the
major release, because positions are what contributors read first; the strictness is a
policy change for contributors (the EC zoo's compile check on pull requests catches it),
which is Philippe's call.

*Decisions.* A run never throws for content; the host decides: `abort` throws when the
diagnostics hold an error (listing identifier, message, origin `path#field`, line and
column), `continue` renders the backend's own error markup and collects diagnostics on
the object (`obj._zoodb.flm_diagnostics`). The fake error fragments disappear. Severity
policy: unresolved references Warning in previews, Error in production
(`RefsRenderOptions`); missing citation entries Error unless `allow_unresolved_citations`.
Every fragment's origin names the object and the field so that diagnostics group per
object.

*Status.* decided 2026-10-15: error policy as above; YAML loader option (1), the strict
`yaml` package, the lenient form disallowed (Philippe: "Okay to disallow multi-line
strings as they are currently typed in those files"): the 127 EC zoo files are
re-indented once and the loader gives the pattern a clear message.

### Q16. The FLM-files data loader (`\begin{field}{name} … \end{field}`)

*Options.* (a) a Rust verbatim-environment element in the binding's zoo feature, parsed
with the registry's language (keeps exact error positions, nested braces); (b) a small
hand-written JS parser (no Rust, simpler). *Recommendation.* (a) if the binding has a
zoo feature crate anyway (Q2), else (b).

*Status.* decided 2026-10-15 (Philippe: "ok"): (a), a `field` element with a verbatim
body in the compiled-in ZooDb feature; the binding parses the file with the registry's
language and returns the fields with their byte ranges, so Q15 positions come for free.

### Q17. Repository layout and build

- `rust/`: turn into a cargo workspace with `zoodb-autocitefetch-wasm` and a new
  `zoodb-flm-wasm` crate (or one crate exporting both; Q6 decides whether autocitefetch
  stays separate). Generated module under `src/zooflm/_wasm/` (committed, environment
  neutral, base64-inlined as today) — measure size first (risk R2).
- `tools/build_wasm.mjs` generalized to build both.
- flm-rs referenced by path until it has a permanent home (per the user: settle later).
- The old `flm-js-src/` and the `./flm-js/*` package export go away in the major
  release; `doc/zoodb.zooflm.rst`, `doc/flm.rst` rewritten.

*Status.* decided 2026-10-15 as recommended: `rust/` becomes a cargo workspace with the
existing citation crate and a new `zoodb-flm-wasm` crate; one generated, environment-
neutral module per crate under `src/`; `tools/build_wasm.mjs` builds both; module sizes
measured (R2) before choosing base64 inlining or a fetched `.wasm` file; where flm-rs is
referenced from is settled later.

### Q18. Naming and shape of the new JavaScript API

*The two levels today (verified 2026-10-15).* `makeStandardZooDb` loads FLM at two
levels, chosen by two config entries.

- **`use_flm_environment`** creates the `ZooFLMEnvironment`: the features and parsing
  setup, and three data holders that rendering reads: the reference resolver (one
  `RefInstance` per target, with the object-permalink href resolver), the citations
  provider (citation FLM text per key) and the graphics collection (resources with the
  src URL resolver and the Parcel `srcset` rule). It also installs the `<??>` fallback
  for unresolved references and the verbatim fallback for unresolved citations when the
  options allow them. The environment can make fragments and render documents, and the
  holders can be filled from a dump (`load_database`). It knows nothing about files, the
  network or the zoo's objects.
- **`use_flm_processor`** creates the `ZooFLMProcessor`, a DB processor that needs the
  environment, `fs`, the data directory, the citation cache directory and the network:
  it compiles every `_flm` field per the schema (full, standalone, block level) through
  the `FLMSimpleContentCompiler` with the scanner, then registers object targets (per
  type display functions) and referenceables, retrieves and compiles citations
  (sources, cache, citeproc-js) into the provider, collects and inspects graphics into
  the collection, writes the dump and handles incremental updates. With the processor
  off, fields stay strings (`eczoodb.js` tests `config.use_flm_processor` to know
  whether `code.name` is a fragment) and content is compiled on demand.

*How the EC zoo uses them.* Processor level: the site build, `pdfexport`, the preview
apps (`gitzoopreview` runs the full processor in the browser over an IndexedDB file
system with a placeholder citation source), the bibliography scripts, the code-graph
generator, the tests. Environment level only (`use_flm_processor: false`): the code
graph app, which loads a dump plus `refs_data` into the holders and renders its
information pane on demand; and `helperEcZooLoader` for scripts that need the data but
not the content (`ancestorsTools`, `zooStats` without reference counts: "a minute"
instead of "several minutes").

*In the new design: three levels, one wasm module.*

0. **Data only.** The zoo is loaded and no FLM is touched: fields stay strings and the
   wasm module is never loaded. This is what the environment-only scripts want today.
1. **Engine.** The wasm module is instantiated with the zoo's settings (registry, plans,
   user definitions) and the external data tables are installed from a dump or by the
   processor: the index data per output context, the citations table, the graphics map,
   the snippet cache. Fragments can be made from strings and rendered on demand through
   the composer protocol, with the `continue` policy and unresolved references as
   warnings. This replaces the environment level and serves the code graph app and any
   preview.
2. **Processor.** The DB processor over the engine: parses every `_flm` field into a
   fragment handle, runs the zoo-wide scan, builds the index (object targets through the
   per-type display functions, labels, anchors), gathers citations (manager, compiler)
   and graphics (collector, inspector) into the tables, runs the snippet run, writes the
   dump, handles reloads. Needs `fs` and the network as today.

Level 2 is JavaScript machinery around the same engine, plus the separate citation
wasm module (autocitefetch), citeproc-js and the image libraries, none of which are in
the FLM module. So a second FLM build for the lighter level would save nothing but what
level 2 adds, and that is not in the module at all. `flm-core` has no cargo feature per
backend to drop either; its only feature is `parallel` (rayon), which the wasm build
turns off. One module for both levels; measure its size (R2; the citation module is a
yardstick at 0.63 MB of wasm, 0.84 MB inlined). A dump records the settings hash so
that an engine loading it refuses data parsed under other settings.

*Proposed surface (2026-10-15, for Philippe's reaction).*

- One `ZooFlm` object per zoo, built from the zoo's FLM options: the registry, the
  plans for each output, the settings and user definitions as data (level 1).
- Fragments as handles, not strings: source, origin as object and field, layout,
  standalone flag, the parsed tree kept in wasm memory so that a fragment is parsed once
  and placed in many runs.
- `scan(zoo)`: the zoo-wide scan, returning tables grouped per object: citation keys,
  labels and anchors, graphics paths, terms, standalone violations (level 2).
- `render_document({ compose, context, metadata })`: one unit with a JavaScript
  composer, returning HTML (or LaTeX), definitions and diagnostics, the marker
  substitution inside (Q4, Q8, Q12).
- `render_fragment(fragment, options)` for the single-fragment cases; the snippet run
  behind a cache that `ref()` and the dump read (Q9).
- `dump()` and `load()` for the browser apps (Q13).
- The old `use_flm_environment`/`use_flm_processor` pair keeps its shape as the two
  config entries of the standard setup, renamed with the new API.

*Status.* accepted 2026-10-15 (Philippe: "okay"): one module, three loading levels, the
surface above; names to settle when building. The repository map that follows from all
questions is `06-repo-change-map.md`.
