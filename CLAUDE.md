# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZooDb is a JavaScript (ESM) library for building small in-memory databases ("Zoos") with relations and formatted content. It powers the [Error Correction Zoo](https://errorcorrectionzoo.org/). Data is stored in YAML files, validated against JSON Schema, and content is formatted using FLM (a LaTeX-like markup). Integrates with 11ty for static site generation.

Published as `@phfaist/zoodb` on npm.

## Commands

- **Test:** `yarn test` (mocha)
- **Test with debug:** `yarn test-debug` (enables `DEBUG="zoodb*,mocha*"`)
- **Single test file:** `yarn mocha test/test_<name>.js`
- **Lint:** `yarn lint` (eslint on `src/**/*.js`)

## Architecture

**Core (`src/`):**
- `_zoodb.js` — `ZooDb` class: main database holding schemas, objects, and processors. Objects are keyed by `{object_type: {object_id: object}}`.
- `_zoodbloaderhandler.js` — `ZooDbDataLoaderHandler`: orchestrates loading/reloading data via data loaders, then validates.
- `schemaloader.js` — Loads and resolves JSON Schema definitions (with `$ref` support).

**DB Processors (`src/dbprocessor/`):** Pipeline of processors that transform data after loading. All extend `ZooDbProcessorBase` from `base.js`. Key processors:
- `relations.js` — Populates relation fields and backreferences between objects based on `_zoo_relations` schema annotations.
- `flmprocessor.js` / `flmsimplecontent.js` — Compile FLM markup in object fields into renderable fragments.
- `searchabletext.js` / `searchabletextflm.js` — Generate searchable plain text from FLM content.
- `computeddata.js` — Compute derived data fields.
- `getgitlastmodified.js` — Attach git last-modified timestamps to objects.

**Data Loaders (`src/dbdataloader/`):**
- `yamldb.js` — `YamlDbDataLoader`: loads objects from YAML files on disk, validates against schemas.
- `flmfilesdb.js` — Loads data from FLM-formatted files.

**ZooFLM (`src/zooflm/`):** FLM (Flexible LaTeX-like Markup) integration layer. Wraps the transpiled Python FLM library (in `flm-js-src/flm-js/`). Key files:
- `_environment.js` — Creates and configures FLM environments with zoo-specific features.
- `_fragmentrenderers.js` — HTML fragment renderers for FLM content.
- `scanner.js` — Scans FLM content for references, citations, resources.
- `citationcompiler.js` — Compiles citation information for rendering.

**Standard Setup (`src/std/`):** High-level convenience layer. `stdzoodb.js` exports `makeStandardZooDb()` which wires up a ZooDb with common processors via config. Other `use_*.js` files are config helpers for individual processors.

**Citation Manager (`src/citationmanager/`):** Manages bibliography/citation data. Sources in `source/` fetch from arXiv, DOI, etc.

**Resource Collector (`src/resourcecollector/`):** Handles external resources (images, files) referenced by zoo objects.

**Utilities (`src/util/`):** Helpers for field access (`getfield.js`), HTML minification (`sqzhtml.js`), lexicographic sorting, etc.

## Key Patterns

- **ESM only** — all files use `import`/`export`, no CommonJS. Package type is `"module"`.
- **Debug logging** — uses the `debug` npm package. Namespaced as `zoodb.<module>`. Enable with `DEBUG=zoodb*`.
- **Processor pipeline** — ZooDb calls processors in order: `initialize_zoo()` → `process_zoo()`. On reload: `prepare_zoo_update_objects()` → `process_zoo_update_objects()`. Data dumps reverse the processor order.
- **Null-prototype objects** — database objects use `Object.create(null)` (no prototype) to avoid key collisions. Use `Object.hasOwn()` instead of `hasOwnProperty()`.
- **`_zoodb` metadata** — each stored object gets a `_zoodb` property with internal metadata (id, source path). This is excluded from schema validation.
- **FLM JS sources** — `flm-js-src/flm-js/` contains auto-generated JavaScript transpiled from Python FLM. Do not edit these files directly; regenerate from the [flm](https://github.com/phfaist/flm) repo. Do not attempt to read and understand these transpiled files.
- **Backup files** — files ending in `~` are editor backups; ignore them.
