# 11 — Step 4: the loaders and the `zoodb-example` port

Build order step 4 of `06-repo-change-map.md` (sections D and L; the standard setup
moved to step 3, see `10-step3-processor.md`). Draft written 2026-10-16 while steps 2
and 3 were in progress; to be adjusted to their results before it is handed to an
implementer. Implemented by an implementer agent and checked by a reviewer agent (Opus);
results at the end.

The rules of 08 ("Rules that bind the implementation") apply unchanged.

## A. The YAML loader (Q15)

Decided in Q15: the strict `yaml` package (YAML 1.2) replaces `js-yaml` everywhere;
positions of the FLM fields are recorded by the loader; the one lenient pattern the EC
zoo data uses (a quoted value continued on lines indented no more than the key) is
refused with a clear message and fixed in the data once by a tool.

1. **Dependency.** `package.json`: `yaml` (2.x) added, `js-yaml` removed; every use
   switched: `src/dbdataloader/yamldb.js` (`parse_file_data`), `src/dbdataloader/flmfilesdb.js`
   (the front matter; the loader itself is section B), `src/citationmanager/source/arxiv.js`
   (the override file, read with `YAML.parse`). The schema loader does not use it.
2. **Parsing with positions.** `YamlDbDataLoader.parse_file_data` parses through the
   document API (`parseDocument` with a `LineCounter`), reports the document's errors as
   the loader's parse error (file, line, column, the message), and returns the plain
   value as today plus, when the file is YAML, a map of the positions of every string
   scalar by its field path in the field compiler's dotted form (`a.b.2.c`, as
   `obj._zoodb.flm_fields` names fields): `{ line, col }` of the value's first character
   (1-based), `style` (`literal`, `folded`, `plain`, `quoted`), and for a block scalar its
   `indent` (the number of columns removed from each line) so that a line `i` (0-based) of
   the value is the source line `line + 1 + i` at column `indent + 1` for `literal` (exact,
   verified in 03 Q15 on 1921 block scalars), and approximately so for `folded`, `plain`
   and `quoted` (multi-line values of those styles fold lines; the position map marks them
   `approx: true`). `parse_file_into_objects` stores the positions of the object's fields
   in `obj._zoodb.flm_field_positions` (the name the field compiler of step 3 reads; field
   path relative to the object). JSON files have no positions.
3. **The refused pattern.** When `yaml` reports the error of a quoted scalar whose
   continuation line is not indented more than its parent (its message names the
   problem), the loader's error says in one sentence what to change ("a quoted value that
   continues on the next line must be indented more than the key; run
   `zoodb-reindent-yaml` on the file") and gives the file, line and column.
4. **The re-indent tool** `tools/reindent_yaml.mjs` (package bin `zoodb-reindent-yaml
   <file-or-dir>... [--dry-run] [--indent N]`): for each `.yml`/`.yaml` file, finds the
   quoted scalars (single or double quotes) whose continuation lines are indented no more
   than the line holding the opening quote, and re-indents those continuation lines by
   `--indent` columns (default 2) beyond the key's column, touching no other byte;
   verifies by parsing the result with `yaml` and comparing the value with the value
   `js-yaml`-style lenient parsing gave (the tool carries a minimal lenient reading of the
   pattern itself, or compares the re-indented file's values against the original file's
   values read with the old pattern folded by hand: implementer's choice, documented);
   prints the files changed; exit 0, 1 on a usage error, 2 when a file could not be
   fixed. Tested on fixtures of the pattern in `test/test_data/yaml_fixtures/reindent/`
   (an untouched file, a file with the pattern, a file with the pattern inside a list
   item). The EC zoo's 127 files are fixed with it in step 6, outside this repository.
5. **Diagnostics with file positions.** The field compiler (step 3) already reads
   `obj._zoodb.flm_field_positions[field]` as `{ line, col, indent, approx }` into the
   fragment origin's `start_line`, `start_col`, `indent` and `approx`; the engine's
   diagnostics mapping (step 2, D7) gives `file_line` and `file_col` from them.
   `format_diagnostic` writes the file position when it is there and, still to do in
   this step, `(approx.)` when the style was not literal.

## B. The FLM-files loader (Q16)

`src/dbdataloader/flmfilesdb.js` is replaced: the same class `FlmFilesDbDataLoader
extends YamlDbDataLoader`, the same configuration (`flm_field_environmentname`,
`flm_field_value_trim`, `object_defaults.file_name_match`), the same shape of result (one
object per file; the front matter's fields plus one field per `\begin{field}{name} …
\end{field}` block, nested paths through `setfield`; a field in both is an error; content
outside the blocks other than whitespace and `%%` comments is an error with line and
column); the body is parsed by the engine's core (`parse_fields(text, origin)` of step 0,
milestone 3: fields with their byte ranges; `zoodb.fields.stray-content` and
`zoodb.fields.malformed` are errors). The loader therefore needs the engine: it takes
`engine` in its config (the standard setup passes `zoodb.zoo_flm_engine`); without one,
construction fails with a message. The field positions of section A are recorded for the
body's fields too (`line`, `col` of the body's first character, `style: 'field'`, exact),
and for the front matter's fields through the YAML document API. The fixtures of
`test/test_dbdataloader_flmfilesdb.js` are kept and must pass unchanged in substance
(the error messages are new).

## C. The `zoodb-example` port (06 L)

Ruling (Philippe, 2026-10-17): the port is made in a clone of the example inside the
worktree's scratch folder, on a branch of its own. `../zoodb-example` stays read-only.

- Clone `git+ssh://github.com/phfaist/zoodb-example.git` into `scratch/zoodb-example/`
  (the worktree's `scratch/.gitignore` gets the entry `zoodb-example/` first, so that the
  nested repository never shows in this repository's status) and create the branch
  `zoodb-flmrs` there from its default branch. All edits of the example go on that
  branch; commit there with the same trailers as in this repository (Co-Authored-By and
  Claude-Session lines); do not push.
- The example's dependency on `@phfaist/zoodb` points at this worktree for the build
  check (`yarn link`, or a `file:` or `portal:` dependency on the worktree path in the
  clone's `package.json`, whichever the example's Yarn setup takes; the committed
  `package.json` of the clone keeps the published dependency form, the local link is
  applied only for the check and reverted, or done through `resolutions` in a way that
  the Results document).
- The verification of the port is the example's own build: `yarn install` in the clone,
  then its site build (`website/`; read its `package.json` and README for the commands,
  Eleventy with Parcel), writing into the clone's output folder. Every person page and
  the index must build with no FLM diagnostic; the pages are checked against the counts of
  07 milestone 1 (every marker substituted, the links, Alice's image present, the
  bibliography on Bob's page) and the stylesheet page must hold the engine's CSS.

The port itself:

- `peopledbjs/myzoodb.js`: `use_flm_environment` → `use_flm_engine`; `flm_options.load_wasm:
  load_zoodb_flm_wasm_node` (from `@phfaist/zoodb/zooflm/wasm-node`); the commented
  `environment_options` block → a commented `engine: { settings: {…} }` block; `refs`,
  `citations`, `resources` unchanged (step 3 confirmed these are the only two changes
  the setup needs).
- `website/src/person/person.11ty.js`: the composer through `zoodb.zoo_flm_engine.render_document({
  compose, title })` with the same `ne`, `rdr`, `rdrblock`, `ref` helpers,
  `<RENDER_ENDNOTES/>` → `endnotes()`, `render_text_standalone(data.person.name)` →
  `zoodb.zoo_flm_engine.snippet(data.person.name, 'text')`; the template's shape stays.
- `website/src/index.11ty.js`: `render_html_standalone(name)` → `snippet(name, 'html')`.
- `website/src/dynamic_style/flm.css.11ty.js`: `zoodb.zoo_flm_engine.html_stylesheet()`.
- `website/src/dat/zoodbdata.11ty.js` (the dump: `data.zooflm` replaces `refs_data`; the
  file passes the dump through unchanged), `pic/pic.11ty.js`, the search index: unchanged.
- The example's `package.json`: the `@phfaist/zoodb` version range raised to the new
  minor (`^0.3.0`, see 12) once the package version is bumped; Node 18 is no longer
  enough for the FLM module loader if the example's README says so (check the README's
  Node requirement against what the loaders need and adjust the README).

## Files

| file | change |
|---|---|
| `package.json` | `yaml` in, `js-yaml` out; bin `zoodb-reindent-yaml` |
| `src/dbdataloader/yamldb.js` | A.2, A.3 |
| `src/dbdataloader/flmfilesdb.js` | B |
| `src/citationmanager/source/arxiv.js` | the override file through `yaml` |
| `src/dbprocessor/flmsimplecontent.js` | A.5 (origin positions) |
| `src/zooflm/diagnostics.js` | A.5 (`approx`) |
| `src/std/stdyamldbdataloader.js` | passes the engine to the loader class when it is the FLM-files loader (or always: harmless) |
| `tools/reindent_yaml.mjs`, `tools/README.md` | A.4 |
| `test/test_dbdataloader_yamldb.js` | the strict parser: the existing cases, the positions of a literal block field and of a plain field, the refused pattern's message |
| `test/test_dbdataloader_flmfilesdb.js` | kept in substance; the positions of a body field |
| `test/test_tools_reindent_yaml.js` | A.4 |
| `test/test_zooflm_engine.js` | one diagnostic with `file_line` through a `literal` position and one `approx` |
| `CLAUDE.md`, `doc/zoodb.dbdataloader.rst` | the loaders' paragraphs (`doc/` otherwise step 5) |
| `scratch/.gitignore` | `zoodb-example/` (the clone) |
| `scratch/zoodb-example/` (branch `zoodb-flmrs` of the clone) | the port, committed there |

## Checks before handing back

`yarn test`, `yarn lint` (no new error), the example's site build in the clone, `git status --short` here and in the clone.

## Results

(filled in after the implementation and the review)
