# 11 — Step 4: the loaders and the `zoodb-example` port

Build order step 4 of `06-repo-change-map.md` (sections D and L; the standard setup
moved to step 3, see `10-step3-processor.md`). Draft written 2026-10-16 while steps 2
and 3 were in progress; aligned to their results on 2026-10-17 and again on 2026-10-16
(this session) before the handoff: the engine's actual method names, the example's
git-URL dependency and the way the build check links the worktree. Implemented by an
implementer agent and checked by a reviewer agent (Opus), in two parts (A+B, then C);
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
   (1-based; for a block scalar the first content line, the one after the `|` or `>`
   header, at column `indent + 1`, even when that line is blank; for a quoted value the
   character after the opening quote), `style` (`literal`, `folded`, `plain`, `quoted`),
   and for a block scalar its `indent` (the number of columns removed from each line), so
   that a line `i` (0-based) of the value is the source line `line + i` at column `indent
   + 1` for `literal` (exact, verified in 03 Q15 on 1921 block scalars; this is the
   convention of the engine's mapping of step 2, `file_line = start_line + line - 1`,
   `file_col = col + indent` on later lines), and approximately so for `folded`, `plain`
   and `quoted` values that span several source lines (those styles fold lines; the
   position map marks them `approx: true`; a one-line plain or quoted value is exact and
   gets no `approx`, except a one-line quoted value with an escape (`''`, `\n`, `\t`: its
   source between the quotes differs from its value), which is `approx` too; `indent` is
   given for block scalars only). `parse_file_into_objects` stores the positions of the
   object's fields in `obj._zoodb.flm_field_positions` (the name the field compiler of
   step 3 reads; field path relative to the object). JSON files have no positions. `parse_file_data` keeps
   returning the plain data (subclasses and tests call it); the positions reach
   `parse_file_into_objects` through a new method that returns `{ data, positions }`
   (the implementer names and documents it; the default implementation calls
   `parse_file_data` so that a subclass overriding only that still works). The
   default `load_objects` is `(d) => [d]` (one object per file, the positions are the
   object's); when a custom `load_objects` returns several objects, the loader cannot
   follow the mapping and records no positions (a debug message says so).
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
construction fails with a message. The engine gets a thin method `parse_fields(text, {
origin })` over `this.core.parse_fields(text, origin)` (the engine's `core` getter) that
maps the core's diagnostics to the engine's shape with line and column in the file's
text (the mapping of `diagnostics.js`), so that the loader never talks to the core
directly; the loader turns the Error diagnostics into its thrown error through
`format_diagnostic`. The old import of `../zooflm/index.js` (the transpiled layer) goes.
The field positions of section A are recorded for the
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
  check through a packed tarball: in the worktree, `yarn pack --out
  <worktree>/scratch/zoodb-flmrs.tgz` (`scratch/.gitignore` also lists `*.tgz`; check
  with `yarn pack --dry-run` that neither `rust/target/`, 2.7 GB, nor
  `scratch/zoodb-example/` is in the archive: `yarn pack` honours `.gitignore`); in the
  clone, `website/package.json`'s dependency is set to `file:<absolute path of the
  tarball>` for the check only, `yarn install` is run at the clone's root (the
  workspace root; network needed for the other dependencies), the site is built, and
  `website/package.json` and `yarn.lock` are restored to the committed form (`git
  checkout -- …` in the clone) before committing there. The Results record the exact
  commands so that Philippe can repeat the check. A `portal:` or `link:` dependency on
  the worktree folder would not do (the worktree is a Yarn PnP project with no
  `node_modules`, and Node resolves a symlinked package's own imports from its real
  path), nor a `file:` dependency on the folder (Yarn would copy `rust/target/`).
- Commits in the clone are made by the implementer (the only repository where an agent
  commits), on the branch `zoodb-flmrs` there, with the two trailers; nothing is pushed.
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
  compose })` (no `title` option exists; `compose` receives the helpers object `{ ne,
  rdr, rdrblock, ref, refhref, endnotes, piece, escape }` and returns the page's HTML
  string; the call returns `{ html, definitions, requires, diagnostics, has_errors }`
  and the template uses `.html`; see `test/test_dbprocessor_flmprocessor.js` and
  `test/test_std.js` for working compositions) with the same `ne`, `rdr`, `rdrblock`,
  `ref` helpers, `<RENDER_ENDNOTES/>` → `endnotes()`, `render_text_standalone(data.person.name)`
  → `zoodb.zoo_flm_engine.snippet(data.person.name, 'text')` (after loading, `name` is
  a live fragment of the engine); the template's shape stays. The imports from
  `@phfaist/zoodb/zooflm` go (the templates reach the engine as `zoodb.zoo_flm_engine`);
  `sqzhtml` stays imported from `@phfaist/zoodb/util/sqzhtml`.
- `website/src/index.11ty.js`: `render_html_standalone(name)` → `snippet(name, 'html')`.
- `website/src/dynamic_style/flm.css.11ty.js`: `zoodb.zoo_flm_engine.html_stylesheet()`.
- `website/src/dat/zoodbdata.11ty.js` (the dump: `data.zooflm` replaces `refs_data`; the
  file passes the dump through unchanged), `pic/pic.11ty.js`, the search index: unchanged.
- The example's `website/package.json` depends on `@phfaist/zoodb` by git URL
  (`https://github.com/phfaist/zoodb.git`), not by a version range: the committed form
  stays as it is (it points at the right code once `zoodb-flmrs` is merged into zoodb's
  `main`); the clone's `README.md` gets one sentence saying that this branch of the
  example needs the `zoodb-flmrs` branch of zoodb (the coming `0.3.0`). The README's
  Node and Yarn requirements are checked against what the code needs
  (`import.meta.dirname` already needs Node 20.11; the module loaders need nothing
  more; the example is on Yarn 4, the README says Yarn 3) and adjusted.
- `graphics_use_srcset_parceljs` may stay enabled in `myzoodb.js`: the standard setup
  accepts it, leaves `srcset` off and warns once (10, review fixes); the Results note
  the warning in the build log.
- The example's 5 person files and the two `citations_info` files parse under the
  strict `yaml` package (checked 2026-10-15, 03 Q15).

## Files

| file | change |
|---|---|
| `package.json` | `yaml` in, `js-yaml` out; bin `zoodb-reindent-yaml` |
| `src/dbdataloader/yamldb.js` | A.2, A.3 |
| `src/dbdataloader/flmfilesdb.js` | B |
| `src/zooflm/engine.js` | B (`parse_fields(text, { origin })` over the core) |
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
| `scratch/.gitignore` | `zoodb-example/` (the clone) and `*.tgz` (the packed worktree) |
| `scratch/zoodb-example/` (branch `zoodb-flmrs` of the clone) | the port, committed there |

## Checks before handing back

`yarn test`, `yarn lint` (no new error), the example's site build in the clone, `git status --short` here and in the clone.

## Results

### Parts A and B

Implementation, 2026-10-16 (node 23.7, yarn 4.6, `yaml` 2.9.1; no change to the core or
the FLM module). Reviewed the same day; the fixes decided on the findings are under
"Review fixes" and the points left for later under "Deferred", at the end of this part
(the fixes change some statements above: the refused pattern's test, the `approx` of a
one-line quoted value with an escape, the front matter's regex, the FLM-files loader's
message, the tool's positions and byte order mark; the numbers above are those of the
implementation, the ones after the fixes are under "Review fixes").

**What was built.**

- *Dependency* (`package.json`, `yarn.lock`): `yaml` `^2.9.1` added, `js-yaml` removed
  (it stays in `yarn.lock` as a dependency of other packages); bin `zoodb-reindent-yaml`.
  Every use switched: `yamldb.js`, `flmfilesdb.js` (front matter), `arxiv.js` (the
  override file through `yaml`'s `parse`). Left: a commented-out `js-yaml` import in
  `src/schemaloader.js` (not a use; the file is outside this step).
- *`src/dbdataloader/_yamlparse.js`* (new, internal, environment-neutral; shared by both
  loaders and the tool): `parse_yaml_text(text, { file, first_line, with_positions })`
  (`parseDocument` with `keepSourceTokens`, `prettyErrors: false`; the first error of the
  document thrown as `Parse error in ‘FILE’ at line L, column C: MESSAGE`, with `file`,
  `line`, `col`, `yaml_errors` on the error; warnings to `debug`; `toJS()`; positions
  walked over the document: maps by key, sequences by index, string scalars only, keys
  that are not scalars and aliases skipped); `find_refused_quoted_scalar(doc, text)`;
  `make_locator(text)` (line starts, binary search, columns in code points);
  `decode_text()` (bytes through `TextDecoder`, which drops a BOM);
  `REFUSED_QUOTED_CONTINUATION_MESSAGE`.
- *Positions* (A.2), exactly the convention of the brief: block scalars `{ line, col,
  style: 'literal'|'folded', indent }` with `line` the line after the header and `col =
  indent + 1`, `indent` computed as `yaml` does (the parent's indentation plus an explicit
  indicator, else the first content line's indentation); plain `{ line, col, style:
  'plain' }` at the first character; quoted `{ …, style: 'quoted' }` after the opening
  quote; `approx: true` only for folded, plain and quoted values whose source spans
  several lines (and, since the review fixes, for a one-line quoted value with an
  escape); field paths `a.b.0.c`. Positions are a null-prototype object.
- *`YamlDbDataLoader`* (`yamldb.js`): `parse_file_data` keeps its signature and return
  value (YAML through `parse_yaml_text`; JSON and unknown types as before); new
  `parse_file_data_with_positions(file_content, objectconfig, root_path, rel_path)` →
  `{ data, positions }`, which calls `parse_file_data` and takes the positions that
  `parse_file_data` left for the data object it returned (a `WeakMap` keyed by that
  object): a subclass overriding only `parse_file_data` still loads, and keeps the
  positions when it returns its `super` call's data. `parse_file_into_objects` stores
  them in `obj._zoodb.flm_field_positions` when `load_objects` returns exactly one object
  that is the file's data itself (the default), else none, with a debug message. JSON
  files: `positions: null`. Class JSDoc: the YAML 1.2 reading, the positions, `engine`
  (ignored).
- *The refused pattern* (A.3). What `yaml` reports, measured on fixtures: the error
  `MISSING_CHAR` "Missing closing 'quote" (or `"quote`) at the end of the opening line
  (or of a blank line after it) when a closing quote comes later but a continuation line
  is not indented more than the key; a quote never closed gives the same error at the end
  of the input, and a forgotten closing quote gives it at the end of its line too when a
  later quote of the same kind follows. The loader takes the document's first error;
  when it is that error, non-blank text follows its position, and the quoted scalar that
  ends there (found by a visit of the partial document) has a closing quote, searched
  leniently from its opening quote (`find_closing_quote`), that ends a value (followed by
  optional spaces or tabs and then a `#` comment, a line break or the end of the input;
  also `,`, `]` or `}` in a flow collection, `:` after a key), it is the pattern, and the
  error is `Parse error in ‘FILE’ at line L, column C: a quoted value that continues on
  the next line must be indented more than the key; run `zoodb-reindent-yaml` on the
  file`, at the opening quote; otherwise `yaml`'s own error is reported. Not flagged
  (tested): a quote never closed, a forgotten closing quote before a later quoted value,
  a continuation indented more than the key, a multi-line plain value, a block scalar,
  other errors.
- *The tool* `tools/reindent_yaml.mjs` (A.4), `zoodb-reindent-yaml <file-or-dir>...
  [--dry-run] [--indent N]`: files given or found in directories (`.yml`/`.yaml`, hidden
  directories and `node_modules` skipped); per file, parse, take the quoted value `yaml`
  cut short (`find_refused_quoted_scalar`), find its closing quote (single: `''` skipped;
  double: escapes skipped), re-indent the non-blank continuation lines indented no more
  than the key's column (the `-`'s column for a bare list item) to that column plus
  `--indent` (default 2), only their leading whitespace changed; parse again until no
  such value is left. *Verification* (the choice the brief left open; header comment and
  `tools/README.md`): the re-indented text must parse, and its data must equal (deep
  equality) the data of the original in which every re-indented value is replaced by its
  lenient reading written as a one-line JSON string; the lenient reading folds the source
  between the quotes as YAML folds a quoted scalar, whatever the indentation (trims,
  break → space, each empty line → newline, escaped line breaks in double quotes), then
  `''` → `'` or the double-quoted escapes decoded by `yaml` segment by segment. A file
  with another YAML error, a value with no closing quote, a parent that is neither a key
  nor a list item, or a failed verification is reported on stderr and left unchanged.
  Prints one line per file changed (`re-indented FILE (N values)`, `would re-indent` under
  `--dry-run`) and a summary; exit 0, 1 (usage: no path, unknown option, `--indent` not
  a positive integer, a missing path, a file not `.yml`/`.yaml`), 2 (a file not fixed,
  or not readable or writable; the other files are still processed).
- *Diagnostics* (A.5, `diagnostics.js`): `map_core_diagnostic` sets `approx` (true when
  it computed a file position and the origin has `approx: true`); `make_diagnostic` gives
  `approx: false`; `format_diagnostic` writes ` (approx.)` after the file position when
  `approx` is set (`people/x.yml#name:3:21 (approx.): error: …`). `flmsimplecontent.js`
  needed no change (step 3 already reads `{ line, col, indent, approx }`).
- *The engine* (`engine.js`): `parse_fields(text, { origin })` over `this._core.parse_fields`
  (origin made as for `make_fragment`, anonymous label `fields:N`); returns `{ fields:
  [{ name, start, end, text }], diagnostics }`, the diagnostics mapped against the given
  origin and text (so `file_line`/`file_col` from the origin's `start_line`/`start_col`);
  no error policy; a core refusal is thrown as the core's plain `Error`. The class doc
  and the `core` getter's doc adjusted.
- *`FlmFilesDbDataLoader`* (`flmfilesdb.js`, rewritten; the transpiled layer's import and
  the environment spec class gone): `engine` required in the config (a clear `Error`
  otherwise, also for an object without `parse_fields`); the same configuration keys and
  defaults, the same trim; the front matter regex as before (with the `d` flag for the
  YAML text's offset), read by `parse_yaml_text` with its first line in the file (errors
  and positions in file lines); the body read by `engine.parse_fields(body, { origin: {
  source_path: FULLPATH, start_line, start_col: 1 } })`; any Error diagnostic throws a
  `ZooFlmError` (message: `format_diagnostic` lines, e.g. `/root/dummy/xyz.flm:10:1:
  error: content outside any field: `invalid content here` [zoodb.fields.stray-content]`;
  warnings to `debug`); a core refusal throws `Parse error in ‘FILE’: MESSAGE` with the
  core's error as `cause`; the "specified both" check and `setfield` as before. Body-field
  positions `{ line, col, style: 'field' }` at the first character of the trimmed value
  (exact; no `indent`), keyed by the concrete path (`key1.innerkey.[]` → `key1.innerkey.2`,
  computed before the value is set); with a custom trim function, the position is
  recorded only when the trimmed value is found in the block's text. Front-matter and
  body positions in one map, through `parse_file_data_with_positions`.
- *Standard setup* (`stdyamldbdataloader.js`): `engine: zoodb.zoo_flm_engine` always in
  the loader's config (the YAML loader ignores it); JSDoc.
- *Tests* (mocha):
  `test_dbdataloader_yamldb.js` (+8: YAML 1.2 types; an error's file, line, column; the
  refused pattern's exact message at its opening quote, and three more forms (double
  quotes at the top level, a bare list item, a blank line inside); what is not the
  pattern (a quote never closed, valid multi-line values, the tool's untouched fixture);
  positions through `load()` on the new fixture `yaml_fixtures/utensils/spoon.yml`
  (literal block, plain, folded approx, quoted in a list, and the literal value checked
  line by line against the file); multi-line plain and quoted approx, JSON without
  positions; a custom `load_objects` gets none; a subclass overriding `parse_file_data`
  only still loads); the 14 existing tests unchanged.
  `test_dbdataloader_flmfilesdb.js` (the 9 existing tests kept: the loader is now made
  with `{ engine }`, a shared engine made in `before()`; no assertion changed; +4: no
  engine and another environment name refused; the positions of the body fields
  (including an appended `[]` item) and of the front matter; stray content, an unclosed
  block, a front-matter YAML error and a core refusal with their file positions; an
  end-to-end load of the new fixture `flm_files/notes/n1.flm` through
  `makeStandardYamlDbDataLoader` (with `DbDataLoaderClass: FlmFilesDbDataLoader`, checking
  the engine is passed), a `ZooDbDataLoaderHandler` and the field compiler under
  `continue`: the diagnostics read `notes/n1.flm#name:3:13` (front matter, quoted) and
  `notes/n1.flm#text:10:18` (body)).
  `test_tools_reindent_yaml.js` (new, 7: `--help`; five usage errors; the pattern
  fixtures do not load and the untouched one does; `--dry-run` writes nothing; a run
  changes exactly the continuation lines (the whole of `pattern.yml` compared, the three
  changed lines of `pattern_in_list.yml`), the results load with the expected values and a
  second run finds nothing; `--indent 4`; exit 2 with two unfixable files left unchanged
  while the others are fixed). The tool runs as a child process on copies in a temporary
  directory; an `after` hook checks the fixtures were not modified.
  `test_zooflm_engine.js` (+3: a diagnostic in a literal block, `file_line`/`file_col`
  through `{ start_line, start_col, indent }`; an approx origin → `approx: true` and
  `(approx.)` in the line; no approx without a file position; `parse_fields`: fields and
  byte ranges with a multi-byte character, nothing kept; mapped diagnostics with
  `file_line` from the origin, an unclosed block, the anonymous label, a non-string text).
  Fixtures: `yaml_fixtures/reindent/{untouched,pattern,pattern_in_list}.yml` (the
  pattern at the key's column with `''`, an empty line inside, a double-quoted value with
  an escape and an escaped line break; in list items, as a compact first key, as a bare
  item), `yaml_fixtures/utensils/spoon.yml`, `flm_files/notes/n1.flm`.
- *Docs*: JSDoc on every new or changed export and method; `CLAUDE.md` (the Data Loaders
  and Tools paragraphs); `doc/zoodb.dbdataloader.rst` (a paragraph before each loader's
  autoclass: YAML 1.2, the refused pattern and the tool, the positions; the engine for
  the FLM-files loader); `tools/README.md` (the first sentence: this tool also imports
  `yaml` and runs through yarn in the repository; a section for the tool).

**Numbers.**

| | |
|---|---|
| `yarn test` | 483 passing (461 before: +8 yamldb, +4 flmfilesdb, +3 engine, +7 tool), about 10 s |
| `yarn lint` | 18 errors in the same 8 files as before (identical lines); none in a new or changed file |
| EC zoo data, a copy of the 1253 YAML files of `eczoo_data` in the scratchpad (the repository only read) | the strict loader refuses exactly 127 files, all with the new message, none for another reason; `zoodb-reindent-yaml` re-indents 191 values in those 127 files (1250 files checked: the 3 under `.github/` are skipped as hidden) in 1.7 s wall, every verification passing; afterwards all 1253 files load; their data equals `js-yaml` 4.1.0's reading of the original files for 1251, the 2 others (`approximate_qecc.yml`, `qubits_into_qubits.yml`, both re-indented) differ by one space where a quoted line ends in a space before a fold (`js-yaml` keeps it, the specification and `yaml` drop it; Q15 saw the second one) |
| positions on that data | 27236 string values; all 1939 literal blocks map line for line (value line i = file line `line + i` from column `indent + 1`, blank lines aside); all 24927 one-line plain and quoted values start at their position; 237 approximate (folded, multi-line plain or quoted) |
| time on that data | strict loader with positions 591–761 ms for the 1253 files (`js-yaml` 59–97 ms); Q15 measured 1.4 s with its own extraction |
| positions' size | as JSON, 1.66 MB for the EC zoo against 3.2 MB of data (see the open questions: dumps) |

**Deviations from the brief.**

- *`flm_field_environmentname`*: the key is kept, but only `'field'` (its default) is
  accepted; another value is refused at construction with a message. The core's element
  is `field`, compiled into the binding; making it configurable would be a change of
  `rust/zoodb-flm-wasm`, which this step does not make.
- *The refused pattern's extent.* The brief describes the continuation lines as
  "indented no more than the line holding the opening quote"; `yaml` refuses a
  continuation not indented more than the *key's* column (the enclosing block's
  indentation), which for a compact list item (`    - detail: 'x` continued at column 6)
  is beyond the line's indentation. The loader and the tool follow `yaml` (the tool
  re-indents lines indented no more than the key's column, or the `-`'s for a bare
  item), so the compact case is caught and fixed too.
- *The tool finds the values through `yaml`'s errors* rather than with a scanner of its
  own: it uses the loader's test (`find_refused_quoted_scalar`, imported from
  `src/dbdataloader/_yamlparse.js`) and parses again after each value; its only lenient
  code is the closing-quote search (in `_yamlparse.js` since the review fixes, shared
  with the loader's test) and the reading used for the verification.
- *An internal module* `src/dbdataloader/_yamlparse.js`, not in the Files table, holds
  the YAML reading shared by the two loaders and the tool.
- *Error messages.* A YAML error reports the document's first error only (later ones
  are usually its consequences), without `yaml`'s excerpt. The FLM-files loader's
  content errors are a `ZooFlmError` (its message the `format_diagnostic` lines, its
  `diagnostics` property); "specified both" names the full path instead of the relative
  one. `console.error` is still called before throwing, as before.
- *Bytes are decoded with `TextDecoder`* (a BOM dropped; `js-yaml` dropped it for YAML, the
  old FLM-files loader kept it and then missed a front matter after a BOM).

**Open questions.**

- *For the reviewer.* A field block without a name (`\begin{field}\end{field}`) makes
  the core throw (`core.hooks.hook-failed`: "the specification of the command ‘end’
  must be one of the FLM specification types, which carry an element") instead of
  returning a diagnostic (`zoodb.fields.malformed`?); the loader reports it as `Parse
  error in ‘FILE’: …` without a position. Whether this is the binding's `field` element
  (rust/zoodb-flm-wasm, fixable in ZooDb) or flm-core's hook machinery was not
  investigated (no core change in this step). Similarly, `\begin{field}` followed by a
  newline takes the next character as the name (`\begin{field}\nx…` is the field `x`).
- *Dumps* (Philippe). `_zoodb.flm_field_positions` holds every string value's position
  and `ZooDb.data_dump()` deep-copies `_zoodb`, so a dump that keeps `_zoodb` grows by
  about half (1.66 MB of positions for 3.2 MB of EC zoo data). Options: drop the
  positions in dumps by default (in `data_dump` or the field compiler's
  `process_data_dump`, as `flm_keep_zoodb_info_flm_fields` does for `flm_fields`), or keep
  only the FLM fields' positions after compilation. Not changed here.
- *One-line quoted values with escapes* (`'it''s'`, `"a\tb"`) are exact by the brief's
  convention (no `approx`), but a column after the escape is off by the escape's length;
  `approx` for them would be more truthful. Kept as the brief says. Decided in the
  review: `approx` (Review fixes, 3).
- *Keys containing a dot* make a field path ambiguous (`a.b` the key or the nesting); in
  the EC zoo only the keys of `code_extra/override_arxiv_dois.yml` (not zoo objects).
  As the field compiler names fields the same way, nothing to do unless a schema has
  such keys.
- *YAML 1.2 core schema vs `js-yaml`'s default schema*: dates stay strings (`js-yaml`
  made `Date` objects), merge keys `<<` are not merged. No EC zoo value changes (the
  comparison above); worth a line in the 0.3 release notes (step 5).
- *`CLAUDE.md`'s engine paragraph* does not list `parse_fields` yet (this step touched only
  the loaders' and tools' paragraphs); step 5's documentation pass.

**Review fixes** (2026-10-16, after the review; no change to the core or the FLM module).

1. *A forgotten closing quote is not the refused pattern* (`_yamlparse.js`, the tool).
   `find_closing_quote(text, open)` moved from the tool into `_yamlparse.js` (exported,
   listed in `CLAUDE.md`; the tool imports it). `find_refused_quoted_scalar` takes `yaml`'s missing-quote error
   for the pattern only when the closing quote found leniently from the cut-short
   scalar's opening quote ends a value: followed by optional spaces or tabs and then a
   `#` comment, a line break (`\r?\n`) or the end of the input, or `,`, `]` or `}` when
   an enclosing collection is a flow one, or `:` when the scalar is a key; otherwise it
   returns `null` and `yaml`'s own error is reported: `name: 'Some code\ndescription:
   'Something'\n` now gives `Parse error in ‘x.yml’ at line 1, column 17: Missing closing
   'quote` (it was reported as the pattern). The repro is in the yamldb test "does not
   take other errors or valid multi-line values for the refused pattern"; the JSDoc and
   the A.3 bullet above are reworded. The implementer's 28 probe texts give the same
   results as before except the two forgotten-quote ones (single and double quotes, now
   `yaml`'s error at line 1, column 17); still the pattern: the flow forms (`a: ['one\ntwo',
   b]`, `a: {k: 'one\ntwo'}`), a tab and a comment, CRLF, or the end of the input after
   the closing quote. *EC zoo, the original copy* (the reviewer's copy of the 1253 files;
   the repository not read again): the strict loader refuses exactly 127 files, all
   with the new message, none for another reason; the quoted scalar is found for all 127;
   the tool on a fresh copy of it re-indents 191 values in 127 files (1250 files
   checked) in 1.2 s wall, every verification passing, the result identical to the
   re-indented copies of the implementer and the reviewer.
2. *The FLM-files loader's message* (`_yamlparse.js`, `flmfilesdb.js`). `parse_yaml_text`
   takes `refused_message` (default `REFUSED_QUOTED_CONTINUATION_MESSAGE`, which names
   the tool); the FLM-files loader passes "a quoted value that continues on the next
   line must be indented more than the key; indent its continuation lines further" (the
   tool reads `.yml` and `.yaml` files only). One assertion in the flmfilesdb error test
   (the message at line 2, column 7 of the file).
3. *One-line quoted values with an escape are `approx`* (the open question above,
   decided). `scalar_position` sets `approx: true` for a quoted value whose source
   between the quotes (`text.slice(start + 1, value_end - 1)`, `value_end` just after
   the closing quote, a comment after it excluded) differs from its value. A.2's
   convention sentence, the JSDoc of `parse_yaml_text` and
   `parse_file_data_with_positions`, `CLAUDE.md` and `doc/zoodb.dbdataloader.rst` say so.
   The yamldb positions test gains `'it''s'` and `"one\ntwo"` (with a comment after it),
   both `approx`, and a single- and a double-quoted value without an escape (one with a
   comment after it), both exact. *EC zoo, the re-indented copy*: 27236 positions; the
   1939 literal blocks map line for line; 24844 one-line plain and quoted values are
   exact (a plain value's source starts with the value, a quoted value's source is the
   value followed by its closing quote); 320 `approx`: the 237 multi-line values of
   before and 83 one-line quoted values with an escape (24927 − 83 = 24844); its data
   equals `js-yaml`'s reading of the original for 1251 files, the same 2 differing.
4. *The tool's positions are the original file's.* When a later pass fails, the line and
   column of the message are mapped to the original text (the same line; the column
   shifted by the difference of the line's leading whitespace between the re-indented
   and the original text); one sentence in the header. Checked by hand: `a: ['one\ntwo',
   b: c: d]` is reported "at line 2, column 10: Block collections are not allowed within
   flow collections", the original's column.
5. *A byte order mark* is set aside when the tool reads a file and written back
   unchanged, so that it no longer shifts the top-level key's column; a test (a BOM file
   re-indented from the key's column, two spaces, the BOM kept, the result loads).
6. *`engine.js`*: the class doc's long line (140 characters) rewrapped.
7. *The front matter* (`flmfilesdb.js`): `rx_frontmatter` is now
   `/^(?:\r?\n)*---\s*\n([\s\S]*?)(?:\r?\n)?(?<=\n)---\s*($|\n)/d`: CRLF line breaks and an
   empty front matter (`---\n---\n`) are read; on 13 sample texts it gives the same YAML
   text and body offset as the old one wherever the old one matched, except
   `---\n---\nbody\n---\n…`, which the old one read as a front matter `---\nbody`. Two tests:
   a CRLF file (data and positions) and an empty front matter (an object with only the
   body's fields).
8. *The tool's documentation* (header and `tools/README.md`): an unexpected exception
   exits with node's default status 1 (the same as a usage error); symbolic links (to
   files or directories) are skipped when walking a directory, a link given on the
   command line is followed. No behaviour change.

*Checks after the fixes*: `yarn test` 486 passing (483 + 2 flmfilesdb tests, CRLF and
the empty front matter, + 1 tool test, the BOM; the other new assertions are in existing
tests); `yarn lint` the 18 pre-existing errors in the same 8 files only (identical
lines); `yarn node tools/reindent_yaml.mjs --dry-run test/test_data/yaml_fixtures/reindent`
6 values in 2 files would be re-indented, 3 files checked, the fixtures unchanged.

**Deferred.**

- (a) A field block with no name (`\begin{field}\end{field}`) makes the core throw
  `core.hooks.hook-failed`, which the binding maps to `Err(String)` in
  `rust/zoodb-flm-wasm/src/engine.rs` (`parse_fields`, around lines 812–815), so the
  loader reports `Parse error in ‘FILE’: …` without a position. A later step may map a
  parse abort in `parse_fields` to a `zoodb.fields.malformed` diagnostic (a binding
  change, not flm-rs).
- (b) `_zoodb.flm_field_positions` is deep-copied into data dumps (about 1.66 MB of
  positions for 3.2 MB of EC zoo data as JSON): whether dumps drop the positions by
  default (e.g. in `FLMSimpleContentCompiler.process_data_dump`, next to `flm_fields`) is
  Philippe's call, left for step 5 or 6.
- (c) The YAML 1.2 core schema differs from `js-yaml`'s default (dates stay strings, no
  `<<` merge keys): a line for the 0.3.0 release notes in step 5.
- (d) `CLAUDE.md`'s engine paragraph gains `parse_fields` in step 5's documentation pass.

### Part C

(to be filled in by the implementer of part C)
