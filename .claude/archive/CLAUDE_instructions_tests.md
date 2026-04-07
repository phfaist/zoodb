# Claude Code Instructions: Write Comprehensive Test Suite for ZooDb

## Overview

Write a comprehensive test suite for the ZooDb library. The library is an ESM-only
JavaScript package for building small in-memory databases with relations and FLM
(LaTeX-like markup) content. Tests use **Mocha** with **Node.js `assert`** module.

Run tests with `yarn test`. Run a single test file with `yarn mocha test/test_<name>.js`.

## Testing Conventions

- All test files go in `test/` and are named `test_<module>.js`
- Use ESM imports (`import`/`export`)
- Use `describe()` / `it()` blocks
- Use `assert` from `node:assert/strict`
- Use the existing test helper `test/_helperstest.js` which provides:
  - `schema_validator`: a jsonschema Validator instance
  - `get_simple_test_data()`: returns mock data with `utensil` and `dish` schemas/objects
- Test data fixtures are in `test/test_data/` (schemas in `test_data/schemas/`)
- Follow existing test patterns in the codebase (see e.g. `test/test_zoodb.js`)
- Database objects use null prototypes (`Object.create(null)`), use `Object.hasOwn()` not `hasOwnProperty()`

## Priority Order for Test Implementation

Write tests in this order, from highest to lowest priority. Each section lists the
source file, the public API to test, and specific test cases to write.

---

### PRIORITY 1: Core Database (expand existing tests)

#### 1A. `src/schemaloader.js` — `SchemaLoader` (NO EXISTING TESTS)

**File to create:** `test/test_schemaloader.js`

Create a small test fixture directory `test/test_data/test_schemas/` with 2-3 simple
JSON Schema files that use `$ref` to reference each other.

Test cases:
- `new SchemaLoader({ schemas: { schema_root, schema_rel_path }, fs })` constructs without error
- `load_schemas()` loads all schemas from the configured directory
- `load_schema_by_name(name)` loads a single schema
- Loaded schemas have `$ref` references resolved inline
- Error: loading a non-existent schema name throws
- Error: circular `$ref` is handled (or document what happens)
- `schema_add_extension` option appends extension to file names
- `schema_names` option limits which schemas are loaded

#### 1B. `src/_zoodb.js` — `ZooDb` (expand existing `test/test_zoodb.js`)

Add these test cases to the existing file:

- `schema_validator: false` disables validation without throwing
- `schema_validator` omitted (or `null`/`undefined`) throws a clear error
- `normalize_id_for_uniqueness_check` custom function is respected
- `update_objects()` correctly updates existing objects and runs processor pipeline
- `update_objects()` with a non-existent object type throws a clear error
- `validate()` can be overridden in a subclass
- `schema(object_type)` returns the correct schema
- `schema(nonexistent_type)` throws or returns undefined (document behavior)
- `object_types` getter returns all registered types
- `install_zoo_loader_handler()` installs the handler and makes `load()` available

#### 1C. `src/_zoodbloaderhandler.js` — `ZooDbDataLoaderHandler` (NO DEDICATED TESTS)

**File to create:** `test/test_zoodbloaderhandler.js`

Create a mock data loader that implements the loader interface.

Test cases:
- Initial load populates schemas and objects
- Second call to `load()` triggers `reload()` path
- `_currently_loading` flag prevents concurrent loads
- REGRESSION: If `load_data()` throws, `_currently_loading` is properly reset
  (via try/finally). Write a test that triggers a load error and verifies a
  subsequent load attempt is not blocked.
- `throw_reload_errors` option: when false, reload errors are caught; when true, they propagate
- Multiple data loaders: schemas and objects from different loaders are merged
- Conflict detection: same schema name from two loaders throws
- Conflict detection: same object ID from two loaders throws

---

### PRIORITY 2: Database Processors

#### 2A. `src/dbprocessor/relations.js` — `RelationsPopulator` (expand existing tests)

Add to `test/test_dbprocessor_relations.js`:

- REGRESSION: `process_zoo()` correctly skips object types with no relations using
  `continue` and keeps processing subsequent types. Write a test with 3+ object types
  where the middle one has no relations, and verify the last type's relations are
  still populated.
- Relations with missing target object (dangling reference) — what happens?
- Self-referential relations (object references itself)
- Backreference population: verify `_auto_populated` fields are set
- Data dump: auto-populated fields are stripped in dumps
- `ZooRelation` constructor and methods (currently skipped in tests)

#### 2B. `src/dbprocessor/searchabletext.js` — `SearchableTextProcessor` (NO TESTS)

**File to create:** `test/test_dbprocessor_searchabletext.js`

Test cases:
- Processor creates searchable text index for configured object types
- `SearchableTextFieldset` correctly identifies text fields from schema
- Fields annotated with `_flm` produce searchable text
- Plain string fields are included in searchable text
- `process_data_dump()` strips searchable text data from dumps
- Missing object types in `zoodb.objects` are skipped gracefully

#### 2C. `src/dbprocessor/computeddata.js` — expand `test/test_dbprocessor_computeddata.js`

Add:
- Error handling: computed data function throws — does it propagate?
- Computed data with dependencies on relations (ordering matters)
- `process_data_dump()` strips computed data

#### 2D. `src/dbprocessor/flmsimplecontent.js` — expand existing tests

Add:
- Nested FLM fields (object with nested objects containing FLM)
- FLM compilation error handling (malformed FLM input)
- `_flm: "standalone"` vs `_flm: "full"` vs `_flm: "block_level"` differences

---

### PRIORITY 3: FLM Integration

#### 3A. `src/zooflm/_environment.js` — `ZooFLMEnvironment` (expand existing)

Add to `test/test_zooflm_environment.js`:

- Constructor with various `enable_features` combinations
- `make_fragment()` with inline vs block-level content
- Math rendering (`\( ... \)`)
- Headings, enumerations, hrefs
- `ref_resolver` integration: resolving `\ref{...}` references
- `citations_provider` integration: resolving `\cite{...}` citations
- Error handling: invalid FLM markup

#### 3B. `src/zooflm/_fragmentrenderers.js` — rendering (expand existing)

Add to `test/test_zooflm_fragmentrenderers.js`:

- `ZooHtmlFragmentRenderer`: render various FLM constructs to HTML
- `ZooTextFragmentRenderer`: render to plain text
- `render_html_standalone(fragment)` convenience function
- `render_text_standalone(fragment)` convenience function
- `html_fragmentrenderer_get_style_information()` returns CSS/JS info
- `render_value()` with different value types (string, fragment, null)
- `value_not_empty()` with various inputs
- `make_render_shorthands()` returns working shorthand functions

#### 3C. `src/zooflm/citationcompiler.js` — `CitationCompiler` (NO TESTS)

**File to create:** `test/test_zooflm_citationcompiler.js`

Test cases:
- REGRESSION: `install_csl_flm_output_format()` text_escape function correctly
  handles whitespace-only text (previously used `.strip()` instead of `.trim()`).
- Basic citation compilation with CSL style
- Citation with missing fields handled gracefully

#### 3D. `src/zooflm/scanner.js` — `ZooFLMScanner` (NO TESTS)

**File to create:** `test/test_zooflm_scanner.js`

Test cases:
- `visitor_scan_object()` finds references in FLM content
- `visitor_scan_object()` finds citations in FLM content
- `visitor_scan_zoo()` scans all objects in zoo
- Objects with no FLM content are skipped

---

### PRIORITY 4: Data Loaders

#### 4A. `src/dbdataloader/yamldb.js` — `YamlDbDataLoader` (NO DEDICATED TESTS)

**File to create:** `test/test_dbdataloader_yamldb.js`

Create small YAML fixture files in `test/test_data/yaml_fixtures/`.

Test cases:
- Load objects from YAML files matching `file_name_match` pattern
- `ignore_file_name_match` excludes files
- `object_defaults` are applied to loaded objects
- Schema validation occurs during load
- Invalid YAML throws descriptive error
- Schema validation failure throws with object ID and file path
- `resource_file_extensions` detects resource files

#### 4B. `src/dbdataloader/flmfilesdb.js` — expand existing tests

Add:
- Multiple field blocks in one FLM file
- FLM file with no YAML frontmatter
- Error: content outside field blocks (already tested, but expand edge cases)

---

### PRIORITY 5: Standard Setup & Integration

#### 5A. `src/std/stdzoodb.js` — `makeStandardZooDb` (expand `test/test_std.js`)

Add:
- All processor types enabled together
- Custom `ZooDbClass` subclass is used
- `zoo_permalinks` configuration produces correct URLs
- `continue_with_errors` option turns FLM errors into warnings
- `flm_options` configuration (refs, citations, resources)
- Data dump and reload round-trip with all processors active

#### 5B. `src/std/stdyamldbdataloader.js` — `makeStandardYamlDbDataLoader`

Add to integration tests:
- Create loader from standard zoodb and load YAML data
- Configuration passed through correctly

---

### PRIORITY 6: Utilities & Support

#### 6A. `src/util/getfield.js` — expand existing tests

Add:
- `iterfield()` generator: yields all positions for a field path
- `setfield()` creates intermediate objects/arrays as needed
- `concatlistfield()` appends to array fields
- `iter_object_fields_recursive()` walks all fields with schema
- `iter_schema_fields_recursive()` walks schema field definitions
- `copy_object_structure()` deep copies following schema
- Edge case: `iterfield` with `[]` on null/undefined (silent empty array creation — document behavior)

#### 6B. `src/resourcecollector/index.js` — `ResourceCollector` (NO TESTS)

**File to create:** `test/test_resourcecollector.js`

Test cases:
- `collect()` gathers resources from zoo objects
- `get_resource_data()` returns collected resources
- `get_resource_data()` with alias resolution
- `get_resource_data()` for non-existent resource returns undefined (flag if no error)
- Concurrent `collect()` calls throw error
- `finish()` finalizes collection

#### 6C. `src/citationmanager/` — expand existing tests

Add:
- `CitationSourceManual`: manual citation entries
- `CitationSourceBibliographyFile`: loading from YAML/JSON file
- Cache behavior in `CitationDatabaseManager`
- `get_citation_by_id("prefix:key")` parsing

#### 6D. `src/util/sqzhtml.js` — `sqzhtml` (NO TESTS)

**File to create:** `test/test_util_sqzhtml.js`

Test cases:
- Minifies whitespace in HTML template literals
- Preserves content within tags
- Handles empty input

---


## General Guidelines

- Keep tests focused and independent — each `it()` should test one thing
- Use descriptive test names that explain the expected behavior
- For async operations, always `await` and use `assert.rejects()` for expected errors
- Don't test private/internal methods directly; test through public API
- Don't test the transpiled FLM JS files in `flm-js-src/` — treat them as a black box
- When creating fixture data, keep it minimal but representative
- For network-dependent tests (citation fetching), use appropriate timeouts
- Mark tests that require network access clearly so they can be skipped in CI if needed
