import debug_module from 'debug';
const debug = debug_module('zoodb.search.searchwidget');

import lunr from 'lunr';

import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css'; // for styling
import 'tippy.js/themes/light.css';

import './searchwidget.scss';

const default_context_length = 50; // chars

const max_num_results_for_mathjax = 100;



// const _html_escapes = {
//     '&': '&amp;',
//     '"': '&quot;',
//     "'": '&#39;';
//     '<': '&lt;',
//     '>': '&gt;',
// };
// const _html_esc_rx = /[&"'<>]/g;
//
// function escape_html(str)
// {
//     return str.replace( _html_esc_rx, (matchstr) => _html_escapes[matchstr] );
// }



function escape_html(str)
{
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}


function default_resolve_href(object_type, object_id, doc) {
    return doc._z_href;
}


/**
 * Manage an HTML widget that can search contents in the zoo, given an index
 * object (see :class:`SearchIndex`).
 *
 * The `search_index` argument is the :class:`SearchIndex` instance.
 *
 * The `options` argument is an object which can contain the following keys:
 *
 * - ``dom_container:`` the DOM container (e.g., returned by
 *   `document.getElementById()`) where to install the search widget.  If a
 *   string is given here and it begins with '#', then it is assumed to specify
 *   the ID of a DOM container which is looked up using
 *   `document.getElementById()`.
 *
 * - ``initial_search_query:`` a search query to initialize the widget with.
 *   Set to null, false, or an empty string to start with a blank widget.
 *
 * - ``auto_fuzz_min_word_length:`` Auto-fuzz will apply a fuzziness tolerance
 *   (edit distance tolerance) to all search terms that have a minimal length.
 *   Set `auto_fuzz_min_word_length` to specify the search term length starting
 *   from which we apply an automatic edit distance tolerance.
 *
 * - ``auto_fuzz_distance:`` Auto-fuzz will apply a fuzziness tolerance (edit
 *   distance tolerance) to all search terms that have a minimal length.  Set
 *   `auto_fuzz_distance` to specify the edit distance tolerance that is
 *   automatically enabled for search terms that whose length is at least
 *   `auto_fuzz_min_word_length`.
 *
 * - ``context_length:`` The number of characters of content to include in the
 *   search results before, and after, occurrences of the search term in
 *   documents.
 *
 * - ``resolve_href:`` a callback accepting arguments `(object_type, object_id,
 *   doc)` that returns an URL where we should go to if we want to look up the
 *   given object specified by its type and id.  (The `doc` argument provides
 *   the stored field values of that object, which we used for the search.)
 *
 * - ``getMathJax:`` to support MathJax, set this property to a function that
 *   returns a MathJax instance.
 *
 */
export class SearchWidget
{
    constructor(search_index, options = {})
    {
        this.search_index = search_index;

        this.resolve_href = options.resolve_href ?? default_resolve_href

        this.dom_container = options.dom_container;
        if (typeof this.dom_container === 'string' && this.dom_container.startswith('#')) {
            this.dom_container = window.document.getElementById(this.dom_container.slice(1));
        }

        this.initial_search_query = options.initial_search_query;

        this.auto_fuzz_min_word_length = options.auto_fuzz_min_word_length ?? 4;
        this.auto_fuzz_distance = options.auto_fuzz_distance ?? 1;
        debug("Auto fuzz distance is = ",
              this.auto_fuzz_distance,
              " to be applied to words of length at least = ",
              this.auto_fuzz_min_word_length);

        this.context_length = options.context_length ?? default_context_length;

        this.getMathJax = options.getMathJax ?? null;

        this._install();
    }

    _install()
    {
        //
        // Install on web page
        //

        console.log("Installing the search widget in the page.");

        // clear any existing content in the target app container
        this.dom_container.innerHTML = '';

        // set base CSS class
        this.dom_container.classList.add('zoodb-search-widget');

        // create the input text box
        const inputbox = document.createElement('input');
        inputbox.setAttribute('type', "text");
        inputbox.classList.add("search-input");
        inputbox.value = (this.initial_search_query || '');
        inputbox.placeholder = 'type & hit RETURN to search';
        this.dom_container.appendChild(inputbox);

        this.search_input = inputbox;

        // create the results pane
        const divresults = document.createElement('div');
        divresults.classList.add('search-results');
        this.dom_container.appendChild(divresults);

        this.search_results_container = divresults;

        // latch on to the input's "change" event
        this.search_input.addEventListener(
            'change',
            (event) => this._do_search_event(event)
        );
        
        // create a simple instructions widget
        let display_fields_html =
            this.search_index.info.fields.filter( (fld) => (fld.substr(0,1) != '_') )
            .map( (fld) => '<code>'+fld+'</code>' )
            .join(', ');
        let instructions_widget = document.createElement('div');
        instructions_widget.classList.add('search-instructions-tip');
        instructions_widget.innerHTML = 
           `<p>Type query term(s) and hit RETURN to search. </p>
            <p>Advanced usage:</p>
            <p class="search-instructions-item">
                <code>+term</code> or <code>-term</code> to force the presence
                or the abscence of a term;
            </p>
            <p class="search-instructions-item">
              <code>field:term</code> to restrict the search term to within
              the given <i>field</i>. Possible fields: ${display_fields_html}.
            </p>
            <p class="search-instructions-item">
              <code>term~4</code> to include all terms
              with edit distance 4 from the given term (use
              <code>term~0</code> to cancel default fuzziness);
            </p>
            <p class="search-instructions-item">
              <code>term^10</code> to &quot;boost&quot; the term, i.e., to make
              it contribute more to the final match score.
            </p>`;
        this.dom_container.appendChild(instructions_widget);

        // add a tippy widget for some simple instructions
        this.tippy_instance = tippy(
            this.search_input,
            {
                content: instructions_widget,
                allowHTML: true,
                trigger: 'focus',
                interactive: true,
                interactiveBorder: 30,
                maxWidth: '450px',
                placement: 'bottom',
                //flip: false,
                // popperOptions: {
                //     placement: 'bottom',
                // },
                theme: 'light',
            }
        );

        if (this.initial_search_query) {
            this.do_search(this.initial_search_query);
        }
    }

    _do_search_event(event)
    {
        const value = event.target.value;
        this.do_search(value);
    }

    do_search(search_str)
    {
        if (this.getMathJax != null) {
            this.getMathJax()?.typesetClear(this.search_results_container);
        }
        this.search_results_container.innerHTML = '';

        this.tippy_instance.hide();

        if (!search_str || search_str.trim().length == 0) {
            this._display_search_no_query_string();
            return;
        }

        console.log("Searching! search_str =", search_str);

        let _auto_fuzz_min_word_length = this.auto_fuzz_min_word_length;
        let _auto_fuzz_distance = this.auto_fuzz_distance;

        let results;
        try {

            let q = function (query) {
                let parser = new lunr.QueryParser(search_str, query);
                let qq = parser.parse();
                console.log("Query = ", qq);
                // tweak the query to add an edit distance to all terms
                for (let clause of qq.clauses) {
                    console.log("Processing clause: ", clause,
                                " auto_fuzz_min_word_length = ", _auto_fuzz_min_word_length,
                                " auto_fuzz_distance = ", _auto_fuzz_distance);
                    const term_length = clause.term.length;
                    if (clause.term.charAt(0) == '*') { --term_length; }
                    if (clause.term.charAt(clause.term.length - 1) == '*') { --term_length; }
                    if (typeof clause.editDistance === 'undefined'
                        && term_length >= _auto_fuzz_min_word_length) {
                        clause.editDistance = _auto_fuzz_distance;
                    }
                };
                console.log("Done processing clauses.");
                return qq;
            };

            results = this.search_index.idx.query(q);

        } catch (e) {
            if (e instanceof lunr.QueryParseError) {
                this._display_search_error(search_str, e);
                return
            } else {
                throw e;
            }
        }

        console.log('results =', results);

        this._display_search_results(search_str, results);
    }

    _display_search_no_query_string()
    {
        const p = document.createElement('p');
        p.classList.add('search-no-query-string');
        p.textContent =
            'Type one or more words above and hit “RETURN” to search.';

        this.search_results_container.appendChild(p);
    }

    _display_search_error(search_str, error)
    {
        console.error("Error in search.", error);

        const p = document.createElement('p');
        p.classList.add('search-results-error');
        
        const s1 = document.createElement('span');
        s1.textContent = 'Error in search query ‘'+search_str+'’: ';
        p.appendChild(s1);
        
        const s2 = document.createElement('span');
        s2.classList.add('search-results-error-message');
        s2.textContent = error.message;
        p.appendChild(s2);
        
        this.search_results_container.appendChild(p);
    }

    _display_search_results(search_str, results)
    {
        if (results.length == 0) {
            this._display_search_no_results(search_str);
        } else {
            results.forEach(
                (r) => this._add_display_result(r, this.search_results_container)
            );

            if ( (results.length < max_num_results_for_mathjax)
                 && this.getMathJax != null) {

                const MathJax = this.getMathJax();
                if (MathJax != null) {
                    // reset equation numbering & disable numbers (to avoid
                    // potentially multiply-defined labels)
                    MathJax.texReset();

                    // Setting tags to null here doesn't work, probably need to do
                    // this before loading MathJax
                    //
                    //this.getMathJax().config.tex.tags = null;

                    // typeset the math in our results
                    MathJax.typesetPromise();
                }
            }
        }
    }

    _display_search_no_results(search_str)
    {
        const p = document.createElement('p');
        p.classList.add('search-no-results');
        p.textContent = `Your search for ‘${search_str}’ did not yield any results.`;

        this.search_results_container.appendChild(p);
    }


    _add_display_result(result, container)
    {
        const doc = this.search_index.store[parseInt(result.ref)];

        const div = document.createElement('div');
        div.classList.add("search-result");

        let srt = document.createElement('div');
        srt.classList.add("search-result-title");
        div.appendChild(srt);
        let a = document.createElement('a');
        const doc_id = doc[this.search_index.info.field_name_id];
        a.setAttribute('href', this.resolve_href(doc._z_otype, doc_id, doc));
        a.classList.add("search-result-link");
        srt.appendChild(a);
        a.innerText = doc[this.search_index.info.field_name_title];

        const hipos = {}; // hipos[field] = [ (list of highlight positions) ]

        for (const [word, wordmatches] of Object.entries(result.matchData.metadata)) {
            for (const [fieldname, fieldmatches] of Object.entries(wordmatches)) {

                const poslist = fieldmatches.position;
                //console.log('word =', word, 'fieldname =', fieldname, 'poslist =', poslist);

                if ( ! hipos.hasOwnProperty(fieldname) ) {
                    hipos[fieldname] = [];
                }

                hipos[fieldname] = hipos[fieldname].concat(poslist);
            }
        }


        const context_length = this.context_length;

        // iterate over this.search_index.info.fields instead, to preserve field order
        for (const fieldname of this.search_index.info.fields) {

            if ( ! hipos.hasOwnProperty(fieldname) ) {
                // no such field in match
                continue;
            }

            const poslist = hipos[fieldname];

            // sort highlight positions by starting position
            poslist.sort( (a, b) => a[0] - b[0] );
            // make sure that end position does not overstep another starting position
            poslist.forEach( (x, index) => {
                if ( (index < poslist.length - 1)
                     && x[0]+x[1] > poslist[index+1][0] ) {
                    // oversteps onto next position; shorten
                    return [ x[0], poslist[index+1][0]-x[0] ];
                } else {
                    return [ x[0], x[1] ]; // all ok
                }
            });

            //console.log('fieldname =', fieldname, 'poslist =', poslist);

            const docfieldstr = doc[fieldname];

            let showhtml = '';
            let lastpos = 0;

            for (const pospair of poslist) {
                if ( (lastpos>0 && ((pospair[0] - lastpos) < 2*context_length))
                     || (lastpos==0 && (pospair[0] < context_length) ) ) {
                    // close to previous match (or string start), do not elide
                    showhtml += escape_html(docfieldstr.substr(lastpos, pospair[0]-lastpos));
                } else {
                    if (lastpos != 0) {
                        showhtml += escape_html(
                            docfieldstr.substr(lastpos, context_length)
                        );
                        showhtml += '…';
                    }
                    showhtml += ' …';
                    showhtml += escape_html(
                        docfieldstr.substr(pospair[0] - context_length, context_length)
                    );
                }
                showhtml += '<span class="sr-highlight">'
                    + escape_html( docfieldstr.substr(pospair[0], pospair[1]) )
                    + '</span>';
                lastpos = pospair[0] + pospair[1];
            }
            if (docfieldstr.length > (lastpos + context_length)) {
                showhtml += escape_html(
                    docfieldstr.substr(lastpos, context_length)
                ) + '…';
            } else {
                showhtml += escape_html(
                    docfieldstr.substr(lastpos)
                );
            }

            // field name
            showhtml += '<span class="search-result-display-field-name">'
                + escape_html(fieldname)
                + '</span>';

            const p = document.createElement('div');
            p.classList.add('search-result-field-display');
            let fieldnameclsname = fieldname.replace(/[^a-zA-Z0-9_-]/g, "");
            p.classList.add('search-result-field-display--' + fieldnameclsname);
            p.innerHTML = showhtml;

            div.appendChild(p);
        }

        container.appendChild(div);
    }

};
