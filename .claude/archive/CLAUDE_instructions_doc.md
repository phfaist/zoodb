You are filling out missing documentation for this TypeScript/JavaScript package.
Do NOT change any source logic, types, or configuration. Only add or edit
JSDoc comments and documentation files.

## Stage 1 — Inline documentation

- Before writing docs for any function or module, assess it briefly:
  - If the behavior is internally inconsistent, surprising, or likely a bug,
    do NOT document it as-is. Instead, add a comment flagged with `// REVIEW:`
    describing the issue, and skip writing JSDoc for that item.
  - If the structure is so unclear that documenting it would require inventing
    behavior, treat it the same way — flag with `// REVIEW:` and move on.
- For everything else: write JSDoc with @param, @returns, @throws where
  applicable, and one @example per public API entry point.
- Do not restate the type signature — explain the contract: what the caller must
  guarantee, what this function guarantees back.
- For non-obvious internal logic, add a brief inline comment explaining intent,
  not mechanics.

## Stage 2 — Sphinx documentation pages

- Read the entire `doc/` tree before writing anything:
  `find doc/ -type f | sort`
  Understand the Sphinx project structure: `conf.py`, `index.rst` or `index.md`,
  existing `.rst`/`.md` stubs, and any `.. toctree::` directives that define
  the intended structure.
- For each stub or placeholder page, fill it out following that page's apparent
  purpose and place in the overall narrative. A page in a "Getting Started"
  section should read differently from one in an "API Reference" or
  "Architecture" section — match the register.
- Cross-reference related pages and API symbols using Sphinx roles
  (`:func:`, `:class:`, `:mod:`, `:doc:`, etc.) wherever appropriate.
- Do not create new pages or alter `toctree` entries. Work within the existing
  structure. If a stub's intended content is ambiguous, add it to your
  consolidated question list (see Workflow step 2).

## README

- Structure: one-paragraph summary, installation, quick-start example, API overview
  (table or short descriptions linking to the relevant source), and a section on
  known limitations or caveats.
- Code examples must be copy-pasteable and correct — trace through them before writing.

## Style

- Before writing any documentation, scan all existing comments, JSDoc blocks,
  and filled-out Sphinx pages in the codebase. Infer the established style:
  capitalization, punctuation, verbosity, @tag usage, example format, and
  reStructuredText/MyST conventions. Match it exactly.
- If existing style is inconsistent, follow the majority pattern and note the
  inconsistency in your final summary.

## Workflow

1. Before writing anything:
   a. Read the source tree:
      `find . -name "*.ts" -o -name "*.js" | grep -v node_modules | grep -v dist`
      Check `package.json` "main"/"exports" to identify entry points.
   b. Read the `doc/` tree in full (conf.py, index, all stubs).
   c. Build a mental map of: public API surface, Sphinx page inventory,
      and how the two relate.
2. After that initial read, STOP and ask me one consolidated list of clarifying
   questions — covering both inline docs and Sphinx pages. Wait for my answers
   before proceeding.
3. Execute in order:
   - Stage 1: inline JSDoc, module by module, highest public API surface first.
   - Stage 2: Sphinx pages, following the toctree order.
4. When done, output a short summary covering:
   - Files touched (Stage 1 and Stage 2 separately)
   - All `// REVIEW:` flags with a one-line description of each issue
   - The inferred doc style and any inconsistencies found
   - Sphinx pages that were filled, partially filled, or skipped and why
   - Any remaining gaps

## Hard constraints

- Zero changes to source logic or types.
- Do not add or remove Sphinx pages or alter toctree structure.
- No new dependencies.
- Delete any temporary exploration scripts before finishing.
- Never invent behavior. If in doubt, flag with `// REVIEW:` and ask.
