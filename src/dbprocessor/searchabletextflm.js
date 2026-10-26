import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.searchabletextflm');

import { check_error_policy, is_fragment } from '../zooflm/engine.js';


// The core's settings for the text runs that show each citation's entry in
// place of its mark.
const CITATIONS_IN_PLACE = Object.freeze({ citations: Object.freeze({ placement: 'in-place' }) });


// -----------------------------------------------------------------------------


/**
 * Assembles search-document values from a list of ``[key, value]`` pairs
 * where some values may be fragments of the zoo's FLM engine
 * (:js:class:`ZooFlmEngine`).  Each fragment becomes its plain text, rendered
 * alone: a standalone fragment through the snippet cache, the others through
 * one `engine.render_text()` over the object's fragments, each field's text
 * from ``trees`` (a fragment rendered alone, in which a reference to a label
 * of another field shows the label; the search index does not mind), each
 * citation shown as its entry in place of its mark unless the option
 * `citations_in_place` is `false`, with its pieces when the option `pieces`
 * is set.
 *
 * Pass an instance's `assemble_doc_text_values` method as the
 * `assemble_doc_text_values` option of :class:`SearchableTextFieldset` when
 * zoo objects contain FLM-formatted fields.
 *
 * Constructor parameters:
 *
 * - `engine` *(required)* — the zoo's FLM engine.
 *
 * - `render_value_fn` — function called as ``render_value_fn(v)`` to convert
 *   a value that is not a fragment to a string.  Defaults to ``String(v)``.
 *
 * - `error_policy` — the policy of the text renders (default
 *   ``'continue'``: the search text is made whatever the content holds; the
 *   FLM processor and the page renders report the content's errors).
 *
 * - `citations_in_place` — if `true` (the default), each citation is
 *   replaced by the cited work's entry, in brackets (``a code [A. Author, “A
 *   title”, arXiv:1234.5678].``), so that an object can be found by the
 *   authors and titles of the works it cites; the assembler renders with the
 *   engine setting ``citations.placement: 'in-place'``.  If `false`, a
 *   citation is shown by its mark alone (``[1]``).
 *
 * - `pieces` — if `true`, the text of each field ends with its footnotes
 *   and, when `citations_in_place` is `false`, with the list of the works it
 *   cites.  Default `false`: a footnote is shown by its mark alone, which
 *   keeps the index smaller.  A standalone fragment holds neither, so its
 *   snippet is used either way.
 */
export class FLMSearchableDocTextValuesAssembler
{
    constructor({ engine, render_value_fn, error_policy, citations_in_place, pieces } = {})
    {
        this.engine = engine;
        if (this.engine == null) {
            throw new Error(`FLMSearchableDocTextValuesAssembler: no engine provided (option ‘engine’)`);
        }
        this.render_value_fn = render_value_fn ?? ( (v) => String(v) );
        this.error_policy = check_error_policy(error_policy ?? 'continue');
        this.citations_in_place = Boolean(citations_in_place ?? true);
        this.pieces = Boolean(pieces ?? false);
    }

    _fragment_text(f, trees)
    {
        if (f.standalone) {
            return this.engine.snippet_entry(f, 'text')?.value
                ?? this.engine.render_fragment(f, { output: 'text', error_policy: this.error_policy }).text;
        }
        return trees.get(f) ?? '';
    }

    assemble_doc_text_values(doc_values)
    {
        // the fragments that are not standalone, rendered in one call
        const fragments = [];
        for (const [, v] of doc_values) {
            if (is_fragment(v) && !v.standalone && !fragments.includes(v)) {
                fragments.push(v);
            }
        }
        const trees = new Map();
        if (fragments.length > 0) {
            const out = this.engine.render_text(fragments, {
                per_fragment: true, pieces: this.pieces, error_policy: this.error_policy,
                render_options: this.citations_in_place ? CITATIONS_IN_PLACE : null,
            });
            if (out.diagnostics.length > 0) {
                debug(`search text: ${out.diagnostics.length} diagnostic(s)`);
            }
            fragments.forEach( (f, i) => trees.set(f, out.trees[i] ?? '') );
        }

        let doc = {};
        for (const [k, v] of doc_values) {
            const value = is_fragment(v) ? this._fragment_text(v, trees) : this.render_value_fn(v);
            if (k in doc) {
                doc[k] += '\n' + value;
            } else {
                doc[k] = value;
            }
        }
        return doc;
    }
}
