import debug_module from 'debug';
const debug = debug_module('zoodb.zooflm.citationcompiler');

import * as zooflm from './index.js';
const {
    $$kw, // repr,
} = zooflm;

import { split_prefix_label } from '../util/index.js';
import { promisifyMethods } from '../util/prify.js';
import { writeFileAtomic } from '../util/atomicfilewrite.js';

import { Cache, one_day } from '../citationmanager/_cache.js';


import CSL from 'citeproc';

//import { Driver } from '@citeproc-rs/wasm'; -- hmmm not sure how to make this work



const _recharclassescape = (c) => (['^','-',']','\\'].includes(c) ? '\\'+c : c);

const flm_escape_chars = {
    '\\': '\\textbackslash ',
    '%': '\\%',
    '#': '\\#',
    '&': '\\&',
    '$': '\\$',
    '{': '\\{',
    '}': '\\}',
};
let _rx_flm_escape_chars = new RegExp(
    '[' + Object.keys(flm_escape_chars).map((c)=>_recharclassescape(c)).join('') + ']',
    'g'
);
function escape_flm(x)
{
    _rx_flm_escape_chars.lastIndex = 0;
    return x.replaceAll(_rx_flm_escape_chars, (m) => flm_escape_chars[m]);
}



const html_escape_chars = {
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '&': '&amp;',
};
let _rx_html_escape_chars = new RegExp(
    '[' + Object.keys(html_escape_chars).map((c)=>_recharclassescape(c)).join('') + ']',
    'g'
);
function escape_html(x)
{
    _rx_flm_escape_chars.lastIndex = 0;
    return x.replaceAll(_rx_html_escape_chars, (m) => html_escape_chars[m]);
}





/**
 * Extend the global CSL object (the citation formatter library) to enable FLM
 * code output.
 *
 * If you use the :class:`ZooFLMProcessor` (in most cases you should), then this
 * function is called automatically and you shouldn't worry about it.
 */
export function install_csl_flm_output_format(zooflmenviron)
{
    if (Object.hasOwn(CSL.Output.Formats, 'flm')) {
        // FLM format already exists, not re-installing it
        return;
    }

    //
    // Add support for generating citations in FLM format via citeproc-js -->
    //
    CSL.Output.Formats.flm = {
        //
        // text_escape: Format-specific function for escaping text destined
        // for output.  Takes the text to be escaped as sole argument.  Function
        // will be run only once across each portion of text to be escaped, it
        // need not be idempotent.
        //
        "text_escape": function (text) {

            if (!text) {
                text = "";
            }

            if (!text.strip()) {
                // it's only whitespace -- we don't need to process it further
                return text;
            }
            
            // do some transformations that will hopefully turn the given text
            // into valid FLM?
            
            const transform_mml_to_tex = (chunk) => {
                // really too simple ... basically a cheap conversion to text... :/
                return chunk.replace(/\s*<.*?>\s*/g, '');
            };
            text = text.replace(/<mml:math.*?<\/\s*mml:math>/g, transform_mml_to_tex);

            // fix lone '%' signs not preceded by a \ (maybe fixme: will misparse '\\%' ...)
            text = text.replace(/([^\\])%/g, '$1\\%');

            // change inline math $...$ -> \(...\)
            text = text.replace(/\$(.*?)\$/g, '\\($1\\)');

            // attempt to parse as FLM, just in case it works and in this case let's
            // use it!
            try {
                zooflmenviron.make_fragment(
                    text,
                    $$kw({
                        is_block_level: false,
                        standalone_mode: true,
                        silent: true,
                        // -- would only work if we could recompose the compiled
                        // -- nodes into valid strict FLM text
                        // parsing_mode: 'safer-latexier',
                        // tolerant_parsing: true,
                    }),
                );
                // `text` is valid FLM --- keep text directly
                //debug(`citation text chunk is valid FLM: ${JSON.stringify(text)}`);
            } catch (err) {
                debug(`Invalid FLM: ${JSON.stringify(text)}: ${zooflm.get_zooflm_error_string(err)}`);
                // not valid FLM -- escape anything suspicious and use that
                text = escape_flm(text);
                //text = `\\begin{verbatimtext}${text}\\end{verbatimtext}`;
                console.log('escaped text = ', text);
            }

            // if (text.length > 20) {
            //     console.log(`[debug] text = `, text);
            // }

            return text;
        },
        "bibstart": "",
        "bibend": "",
        "@font-style/italic": "\\textit{%%STRING%%}",
        "@font-style/oblique": "\\textit{%%STRING%%}",
        "@font-style/normal": "%%STRING%%",
        "@font-variant/small-caps": "%%STRING%%",
        "@passthrough/true": CSL.Output.Formatters.passthrough,
        "@font-variant/normal": "%%STRING%%",
        "@font-weight/bold": "\\textbf{%%STRING%%}",
        "@font-weight/normal": "%%STRING%%",
        "@font-weight/light": false,
        "@text-decoration/none": "%%STRING%%",
        "@text-decoration/underline": "%%STRING%%",
        "@vertical-align/sup": "\\({}^{\\text{%%STRING%%}}\\)",
        "@vertical-align/sub": "\\({}_{\\text{%%STRING%%}}\\)",
        "@vertical-align/baseline": "%%STRING%%",
        "@strip-periods/true": CSL.Output.Formatters.passthrough,
        "@strip-periods/false": CSL.Output.Formatters.passthrough,
        "@quotes/true": function (state, str) {
            if ("undefined" === typeof str) {
                return state.getTerm("open-quote");
            }
            return state.getTerm("open-quote") + str + state.getTerm("close-quote");
        },
        "@quotes/inner": function (state, str) {
            if ("undefined" === typeof str) {
                //
                // Mostly right by being wrong (for apostrophes)
                //
                return "\u2019";
            }
            return state.getTerm("open-inner-quote") + str + state.getTerm("close-inner-quote");
        },
        "@quotes/false": false,
        "@cite/entry": function (state, str) {
            return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt,
                                               this.suffix_txt);
        },
        "@bibliography/entry": function (state, str) {
            // Test for this.item_id to add decorations to
            // bibliography output of individual entries.
            //
            // Full item content can be obtained from
            // state.registry.registry[id].ref, using
            // CSL variable keys.
            //
            // Example:
            //
            //   print(state.registry.registry[this.item_id].ref["title"]);
            //
            // At present, for parallel citations, only the
            // id of the master item is supplied on this.item_id.
            var insert = "";
            if (state.sys.embedBibliographyEntry) {
                insert = state.sys.embedBibliographyEntry(this.item_id) + "\n";
            }
            //return "  <div class=\"csl-entry\">" + str + "</div>\n" + insert;
            return str + '\n' + insert;
        },
        "@display/block": function (state, str) {
            return str; //"\n\n    <div class=\"csl-block\">" + str + "</div>\n";
        },
        "@display/left-margin": function (state, str) {
            return str; // "\n    <div class=\"csl-left-margin\">" + str + "</div>";
        },
        "@display/right-inline": function (state, str) {
            return str; // "<div class=\"csl-right-inline\">" + str + "</div>\n  ";
        },
        "@display/indent": function (state, str) {
            return str; // "<div class=\"csl-indent\">" + str + "</div>\n  ";
        },
        "@showid/true": function (state, str, /*cslid*/) {
            return str;
        },
        "@URL/true": function (state, str) {
            return "\\url{" + str + "}";
        },
        "@DOI/true": function (state, str) {
            var doiurl = str;
            if (!str.match(/^https?:\/\//)) {
                doiurl = "https://doi.org/" + str;
            }
            return "\\href{" + doiurl + "}{DOI}";
        }
    };
}





const _default_format_link_text = {
    'arxiv': function (arxivid) { return `arXiv:${arxivid}`; },
    'doi': function (/*doi*/) { return `DOI`; },
    'url': function (/*url*/) { return `URL`; },
};




/**
 * Format citations into FLM code using a citation manager.
 *
 * Options:
 *
 * - ``citation_manager``, ``locales``, ``csl_style``, ``add_cite_links``, ``output_format``, ``flm_compile_fragments``, ``flm_environment``, ``format_link_text``,  - ....
 *
 *
 * - ``cache_fs`` - a 'fs'-compatible module object providing filesystem access for the cache.
 *
 * - ``cache_file`` - the filesystem path where we should store a cache of the compiled
 *   citations.
 *
 * - ``cache_entry_duration_ms`` - Specify for how long (in milliseconds) to
 *   keep entries in the cache.
 *
 */
export class CitationCompiler
{
    constructor(options)
    {
        this.options = options || {};

        this.citation_manager = this.options.citation_manager;
        if ( ! this.citation_manager ) {
            throw new Error(`Please provide a citation manager object`);
        }

        // The caller/user should fetch these locales or read them from disk
        // beforehand.  The en-US locale is provided by default here.
        this.locales = this.options.locales || {};

        // If there is no locale named 'en-US', we provide the default one
        if (!this.locales['en-US']) {
            this.locales['en-US'] = citeproc_locales_en_US;
        }

        // The citation style file content.
        this.csl_style = this.options.csl_style;

        // Add citation links :)
        this.add_cite_links =
            this.options.add_cite_links
            ?? { arxiv: true,
                 doi: true,
                 url: 'only-if-no-other-link' };

        // The output format.  By default, FLM.
        this.output_format = this.options.output_format ?? 'flm';

        // Whether or not we should compile FLM fragment instances so they don't
        // have to be compiled later.  If flm_compile_fragments is set, then we
        // need to also give an FLM environment instance to use to compile these
        // fragments.
        this.flm_compile_fragments = this.options.flm_compile_fragments ?? false;
        this.flm_environment = this.options.flm_environment ?? null;

        // Options to format links
        this.format_link_text = Object.assign(
            {}, this.options.format_link_text, _default_format_link_text
        );

        // prepare citeproc's "sys" object, with callbacks to get citations and
        // locales.
        this.citeproc_sys_object = {
            retrieveLocale: (lang) => {
                return this.locales[lang] ?? false;
            },
            retrieveItem: (id) => {
                const obj = this.citation_manager.get_citation_by_id(id);
                //console.log('Retrieved citation for', id, ', got:', obj);
                if (!obj) {
                    throw new Error(`No citation found for ‘${id}’ in citations database!`);
                }
                return obj;
            }
        };

        // The database of compiled citations.  Stores FLM fragment instances.
        this.compiled_citations = {};

        // The cache stores the compiled FLM text.
        this.cache_fs = this.options.cache_fs;
        this.cache_fsp =
            this.cache_fs.promises
            ?? promisifyMethods(this.cache_fs, ['readFile', 'writeFile'])
        ;
        this.cache_file =
            this.options.cache_file ?? '_zoodb_cache_citations_compiled.json';
        this.cache_entry_default_duration_ms =
            this.options.cache_entry_default_duration_ms ?? 30*one_day;

        this.cache = new Cache();
    }

    async initialize()
    {
        await this.load_cache();
    }


    produce_link = {
        flm: function (url, displaytext) {
            // do NOT do escapeURI(url), because url will already have %-escapes.
            return (
                `\\href{${url}}{${escape_flm(displaytext)}}`
            );
        },
        html: function (url, displaytext) {
            // do NOT do escapeURI(url), because url will already have %-escapes.
            return (
                `<a href="${escape_html(url)}" target="_blank">${escape_html(displaytext)}</a>`
            );
        },
    };


    /**
     * Load citation information from the cache file.  Does nothing if the cache
     * file does not exist.  This method is automatically called by the
     * constructor.
     */
    async load_cache()
    {
        const fsp = this.cache_fsp;
        let json_data = null;
        try {
            json_data = await fsp.readFile(this.cache_file);
        } catch (err) {
            debug(`Cache file does not exist or error loading cache file`, err);
        }
        if (json_data == null) {
            return;
        }

        this.cache.importJson(json_data);
        this.cache.purge_expired();
        debug(`Loaded compiled citations cache from ‘${this.cache_file}’ `
              + `(${this.cache.size()} items)`);

        // store from cache object to `this.compiled_citations` & compile
        // FLM fragments as necessary
        for (const cite_id of this.cache.keys()) {
            const c = this.cache.get(cite_id);
            this._save_compiled_citation(c, { put_in_cache: false });
        }
    }

    /**
     * Save the current citation information database to the cache file.
     * Automatically done after compiling citations.
     */
    async save_cache()
    {
        const fsp = this.cache_fsp;
        debug(`Saving compiled citations to cache file ‘${this.cache_file}’`);
        await writeFileAtomic({
            fsp,
            fileName: this.cache_file,
            data: this.cache.exportJson(),
            processPid: (process != null) ? process.pid : 'XX',
        });
    }



    * iter_compiled_citations()
    {
        for (const {cite_prefix, cite_key, citation_text}
             of Object.values(this.compiled_citations)) {
            yield {cite_prefix, cite_key, citation_text};
        }
    }
    
    /**
     * Return `true` if we have a compiled citation that is associated with the
     * given `cite_prefix:cite_key`, and `false` otherwise.
     */
    has_compiled_citation(cite_prefix, cite_key)
    {
        if (this.compiled_citations
            && this.compiled_citations[`${cite_prefix}:${cite_key}`] != null) {
            return true;
        }
        return false;
    }

    /**
     * Retrieve the citation text associated with the given `cite_prefix:cite_key`.
     */
    get_compiled_citation(cite_prefix, cite_key)
    {
        const {citation_text} = this.compiled_citations[`${cite_prefix}:${cite_key}`];
        return citation_text;
    }

    /**
     *
     * The argument `compile_citations` is a list of citation keys to compile.
     * If set to non-null, we'll only compile these citations and not all the
     * citations of the database.  An empty list signifies to compile nothing.
     * Each list element should be an object that provides the keys
     * 'cite_prefix' and 'cite_key'.  (E.g., as returned by
     * :class:`ZooFLMScanner` via `scanner.get_encountered('citations')`)
     */
    compile_citations(compile_citations)
    {
        compile_citations ??= this.citation_manager.keys().map(_split_to_cite_prefix_key);

        //debug(`compile_citations:`, compile_citations);

        if (!compile_citations || compile_citations.length == 0) {
            return;
        }

        //console.log(`Will compile citations for ${JSON.stringify(compile_citations)}`);

        let cite_processor = new CSL.Engine(this.citeproc_sys_object, this.csl_style);
        cite_processor.setOutputFormat(this.output_format);

        let seen_ids = new Set();

        for (const {cite_prefix, cite_key} of compile_citations) {

            const citeid = _compose_id_from_cite_prefix_key(cite_prefix, cite_key);

            if (seen_ids.has(citeid)) {
                // skip, we've already done this one
                continue;
            }
            seen_ids.add(citeid);

            const obj = this.citation_manager.get_citation_by_id(citeid);

            // check if this citation is already compiled and up to date (e.g.,
            // from an earlier run)
            if (this.compiled_citations[citeid] != null
                && obj._hash == this.compiled_citations[citeid].hash) {
                // already compiled!
                continue;
            }

            if (obj._ready_formatted && obj._ready_formatted[this.output_format]) {
                const c = {
                    hash: obj._hash,
                    cite_prefix,
                    cite_key,
                    citation_text: obj._ready_formatted[this.output_format],
                };
                this._save_compiled_citation(c);
                continue;
            }

            //console.log(`C: processing ${cite_prefix}:${cite_key} == `
            //            `${JSON.stringify(citeid)}`, citeid);

            //console.log('updateItems', [citeid]);
            cite_processor.updateItems( [ citeid ] );
            const c_result = cite_processor.makeBibliography();
            //console.log(citeid, 'c_result=', c_result);

            let result_formatted = null;
            if (c_result) {
                result_formatted = c_result[1].toString();
            }

            if (!result_formatted) {
                throw new Error(`Could not CSL-compile citation text for ‘${citeid}’`);
            }

            // maybe add links?
            let has_link = false;
            if (this.add_cite_links.arxiv && obj.arxivid) {
                result_formatted += ' ' + this.produce_link[this.output_format](
                    `https://arxiv.org/abs/${obj.arxivid}`,
                    this.format_link_text.arxiv(obj.arxivid),
                );
                has_link = true;
            }
            const doi = obj.doi || obj.DOI;
            if (this.add_cite_links.doi && doi) {
                const doiurl = `https://doi.org/${encodeURIComponent(doi)}`;
                result_formatted += ' ' + this.produce_link[this.output_format](
                    doiurl,
                    this.format_link_text.doi(doi)
                );
                has_link = true;
            }
            const url = obj.url || obj.URL;
            if (url
                && (this.add_cite_links.url === true
                    || (this.add_cite_links == 'only-if-no-other-link' && !has_link))) {
                result_formatted += ' ' + this.produce_link[this.output_format](
                    url,
                    this.format_link_text.url(url)
                );
            }

            const c = {
                hash: obj._hash,
                cite_prefix,
                cite_key,
                citation_text: result_formatted.trim()
            };
            this._save_compiled_citation(c);
        }

        // finally, save our cache
        if ( ! this.options.skip_save_cache ) {
            this.save_cache();
        }
    }

    _save_compiled_citation(c, { put_in_cache } = {})
    {
        const { cite_prefix, cite_key } = c;
        const cite_id = _compose_id_from_cite_prefix_key(cite_prefix, cite_key);
        if (put_in_cache ?? true) {
            const c_cache = {
                hash: c.hash,
                cite_prefix,
                cite_key,
                citation_text: c.citation_text?.flm_text ?? c.citation_text
            };
            this.cache.put(
                cite_id,
                c_cache,
                this.cache_entry_default_duration_ms
            );
        }

        // copy object because we might call this function directly with the
        // cache object (in load_cache()), in which case we don't want the cache
        // object to be directly modified.
        c = Object.assign({}, c);

        if (this.output_format === 'flm' && this.flm_compile_fragments
            && this.flm_environment != null) {
            c.citation_text = this.flm_environment.make_fragment(
                c.citation_text,
                $$kw({
                    is_block_level: false,
                    standalone_mode: true,
                    what: `Citation text for ${c.cite_prefix}:${c.cite_key}`,
                }),
            )
        }

        this.compiled_citations[cite_id] = c;
    }

}


function _compose_id_from_cite_prefix_key(cite_prefix, cite_key)
{
    if (typeof cite_prefix == 'undefined' || cite_prefix === null) {
        return cite_key;
    }
    return `${cite_prefix}:${cite_key}`;
}

function _split_to_cite_prefix_key(id)
{
    const [cite_prefix, cite_key] = split_prefix_label(id);
    return {cite_prefix, cite_key};
}




// The following locale XML file contents was downloaded from
//
//   https://github.com/citation-style-language/locales
//
// (Download link is:
// https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-US.xml)
//
// Licensing: “All the locale files in this repository are released under the
// Creative Commons Attribution-ShareAlike 3.0 Unported license. For
// attribution, any software using CSL locale files from this repository must
// include a clear mention of the CSL project and a link to
// CitationStyles.org. When distributing these locale files, the listings of
// translators in the locale metadata must be kept as is.”
//
const citeproc_locales_en_US = `<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="en-US">
  <info>
    <translator>
      <name>Andrew Dunning</name>
    </translator>
    <translator>
      <name>Sebastian Karcher</name>
    </translator>
    <translator>
      <name>Rintze M. Zelle</name>
    </translator>
    <translator>
      <name>Denis Meier</name>
    </translator>
    <translator>
      <name>Brenton M. Wiernik</name>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2015-10-10T23:31:02+00:00</updated>
  </info>
  <style-options punctuation-in-quote="true"/>
  <date form="text">
    <date-part name="month" suffix=" "/>
    <date-part name="day" suffix=", "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="month" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="day" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="year"/>
  </date>
  <terms>
    <term name="advance-online-publication">advance online publication</term>
    <term name="album">album</term>
    <term name="audio-recording">audio recording</term>
    <term name="film">film</term>
    <term name="henceforth">henceforth</term>
    <term name="loc-cit">loc. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="no-place">no place</term>
    <term name="no-place" form="short">n.p.</term>
    <term name="no-publisher">no publisher</term> <!-- sine nomine -->
    <term name="no-publisher" form="short">n.p.</term>
    <term name="on">on</term>
    <term name="op-cit">op. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="original-work-published">original work published</term>
    <term name="personal-communication">personal communication</term>
    <term name="podcast">podcast</term>
    <term name="podcast-episode">podcast episode</term>
    <term name="preprint">preprint</term>
    <term name="radio-broadcast">radio broadcast</term>
    <term name="radio-series">radio series</term>
    <term name="radio-series-episode">radio series episode</term>
    <term name="special-issue">special issue</term>
    <term name="special-section">special section</term>
    <term name="television-broadcast">television broadcast</term>
    <term name="television-series">television series</term>
    <term name="television-series-episode">television series episode</term>
    <term name="video">video</term>
    <term name="working-paper">working paper</term>
    <term name="accessed">accessed</term>
    <term name="and">and</term>
    <term name="and others">and others</term>
    <term name="anonymous">anonymous</term>
    <term name="anonymous" form="short">anon.</term>
    <term name="at">at</term>
    <term name="available at">available at</term>
    <term name="by">by</term>
    <term name="circa">circa</term>
    <term name="circa" form="short">c.</term>
    <term name="cited">cited</term>
    <term name="edition">
      <single>edition</single>
      <multiple>editions</multiple>
    </term>
    <term name="edition" form="short">ed.</term>
    <term name="et-al">et al.</term>
    <term name="forthcoming">forthcoming</term>
    <term name="from">from</term>
    <term name="ibid">ibid.</term>
    <term name="in">in</term>
    <term name="in press">in press</term>
    <term name="internet">internet</term>
    <term name="interview">interview</term>
    <term name="letter">letter</term>
    <term name="no date">no date</term>
    <term name="no date" form="short">n.d.</term>
    <term name="online">online</term>
    <term name="presented at">presented at the</term>
    <term name="reference">
      <single>reference</single>
      <multiple>references</multiple>
    </term>
    <term name="reference" form="short">
      <single>ref.</single>
      <multiple>refs.</multiple>
    </term>
    <term name="retrieved">retrieved</term>
    <term name="scale">scale</term>
    <term name="version">version</term>

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">preprint</term>
    <term name="article-journal">journal article</term>
    <term name="article-magazine">magazine article</term>
    <term name="article-newspaper">newspaper article</term>
    <term name="bill">bill</term>
    <term name="book">book</term>
    <term name="broadcast">broadcast</term>
    <term name="chapter">book chapter</term>
    <term name="classic">classic</term>
    <term name="collection">collection</term>
    <term name="dataset">dataset</term>
    <term name="document">document</term>
    <term name="entry">entry</term>
    <term name="entry-dictionary">dictionary entry</term>
    <term name="entry-encyclopedia">encyclopedia entry</term>
    <term name="event">event</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">graphic</term>
    <term name="hearing">hearing</term>
    <term name="interview">interview</term>
    <term name="legal_case">legal case</term>
    <term name="legislation">legislation</term>
    <term name="manuscript">manuscript</term>
    <term name="map">map</term>
    <term name="motion_picture">video recording</term>
    <term name="musical_score">musical score</term>
    <term name="pamphlet">pamphlet</term>
    <term name="paper-conference">conference paper</term>
    <term name="patent">patent</term>
    <term name="performance">performance</term>
    <term name="periodical">periodical</term>
    <term name="personal_communication">personal communication</term>
    <term name="post">post</term>
    <term name="post-weblog">blog post</term>
    <term name="regulation">regulation</term>
    <term name="report">report</term>
    <term name="review">review</term>
    <term name="review-book">book review</term>
    <term name="software">software</term>
    <term name="song">audio recording</term>
    <term name="speech">presentation</term>
    <term name="standard">standard</term>
    <term name="thesis">thesis</term>
    <term name="treaty">treaty</term>
    <term name="webpage">webpage</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <term name="article-journal" form="short">journal art.</term>
    <term name="article-magazine" form="short">mag. art.</term>
    <term name="article-newspaper" form="short">newspaper art.</term>
    <term name="book" form="short">bk.</term>
    <term name="chapter" form="short">bk. chap.</term>
    <term name="document" form="short">doc.</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">graph.</term>
    <term name="interview" form="short">interv.</term>
    <term name="manuscript" form="short">MS</term>
    <term name="motion_picture" form="short">video rec.</term>
    <term name="report" form="short">rep.</term>
    <term name="review" form="short">rev.</term>
    <term name="review-book" form="short">bk. rev.</term>
    <term name="song" form="short">audio rec.</term>

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad">AD</term>
    <term name="bc">BC</term>
    <term name="bce">BCE</term>
    <term name="ce">CE</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">“</term>
    <term name="close-quote">”</term>
    <term name="open-inner-quote">‘</term>
    <term name="close-inner-quote">’</term>
    <term name="page-range-delimiter">–</term>
    <term name="colon">:</term>
    <term name="comma">,</term>
    <term name="semicolon">;</term>

    <!-- ORDINALS -->
    <term name="ordinal">th</term>
    <term name="ordinal-01">st</term>
    <term name="ordinal-02">nd</term>
    <term name="ordinal-03">rd</term>
    <term name="ordinal-11">th</term>
    <term name="ordinal-12">th</term>
    <term name="ordinal-13">th</term>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">first</term>
    <term name="long-ordinal-02">second</term>
    <term name="long-ordinal-03">third</term>
    <term name="long-ordinal-04">fourth</term>
    <term name="long-ordinal-05">fifth</term>
    <term name="long-ordinal-06">sixth</term>
    <term name="long-ordinal-07">seventh</term>
    <term name="long-ordinal-08">eighth</term>
    <term name="long-ordinal-09">ninth</term>
    <term name="long-ordinal-10">tenth</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">			 
      <single>act</single>
      <multiple>acts</multiple>						 
    </term>
    <term name="appendix">			 
      <single>appendix</single>
      <multiple>appendices</multiple>						 
    </term>
    <term name="article-locator">			 
      <single>article</single>
      <multiple>articles</multiple>						 
    </term>
    <term name="canon">			 
      <single>canon</single>
      <multiple>canons</multiple>						 
    </term>
    <term name="elocation">			 
      <single>location</single>
      <multiple>locations</multiple>						 
    </term>
    <term name="equation">			 
      <single>equation</single>
      <multiple>equations</multiple>						 
    </term>
    <term name="rule">			 
      <single>rule</single>
      <multiple>rules</multiple>						 
    </term>
    <term name="scene">			 
      <single>scene</single>
      <multiple>scenes</multiple>						 
    </term>
    <term name="table">			 
      <single>table</single>
      <multiple>tables</multiple>						 
    </term>
    <term name="timestamp"> <!-- generally blank -->
      <single></single>
      <multiple></multiple>						 
    </term>
    <term name="title-locator">			 
      <single>title</single>
      <multiple>titles</multiple>						 
    </term>
    <term name="book">
      <single>book</single>
      <multiple>books</multiple>
    </term>
    <term name="chapter">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="column">
      <single>column</single>
      <multiple>columns</multiple>
    </term>
    <term name="figure">
      <single>figure</single>
      <multiple>figures</multiple>
    </term>
    <term name="folio">
      <single>folio</single>
      <multiple>folios</multiple>
    </term>
    <term name="issue">
      <single>number</single>
      <multiple>numbers</multiple>
    </term>
    <term name="line">
      <single>line</single>
      <multiple>lines</multiple>
    </term>
    <term name="note">
      <single>note</single>
      <multiple>notes</multiple>
    </term>
    <term name="opus">
      <single>opus</single>
      <multiple>opera</multiple>
    </term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="number-of-pages">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="paragraph">
      <single>paragraph</single>
      <multiple>paragraphs</multiple>
    </term>
    <term name="part">
      <single>part</single>
      <multiple>parts</multiple>
    </term>
    <term name="section">
      <single>section</single>
      <multiple>sections</multiple>
    </term>
    <term name="sub-verbo">
      <single>sub verbo</single>
      <multiple>sub verbis</multiple>
    </term>
    <term name="verse">
      <single>verse</single>
      <multiple>verses</multiple>
    </term>
    <term name="volume">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>

    <!-- SHORT LOCATOR FORMS -->
    <term name="appendix" form="short">			 
      <single>app.</single>
      <multiple>apps.</multiple>						 
    </term>
    <term name="article-locator" form="short">			 
      <single>art.</single>
      <multiple>arts.</multiple>
    </term>
    <term name="elocation" form="short">			 
      <single>loc.</single>
      <multiple>locs.</multiple>
    </term>
    <term name="equation" form="short">			 
      <single>eq.</single>
      <multiple>eqs.</multiple>
    </term>
    <term name="rule" form="short">			 
      <single>r.</single>
      <multiple>rr.</multiple>						 
    </term>
    <term name="scene" form="short">			 
      <single>sc.</single>
      <multiple>scs.</multiple>						 
    </term>
    <term name="table" form="short">			 
      <single>tbl.</single>
      <multiple>tbls.</multiple>						 
    </term>
    <term name="timestamp" form="short"> <!-- generally blank -->
      <single></single>
      <multiple></multiple>						 
    </term>
    <term name="title-locator" form="short">			 
      <single>tit.</single>
      <multiple>tits.</multiple>
    </term>
    <term name="book" form="short">
      <single>bk.</single>
      <multiple>bks.</multiple>
    </term>
    <term name="chapter" form="short">
      <single>chap.</single>
      <multiple>chaps.</multiple>
    </term>
    <term name="column" form="short">
      <single>col.</single>
      <multiple>cols.</multiple>
    </term>
    <term name="figure" form="short">
      <single>fig.</single>
      <multiple>figs.</multiple>
    </term>
    <term name="folio" form="short">
      <single>fol.</single>
      <multiple>fols.</multiple>
    </term>
    <term name="issue" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="line" form="short">
      <single>l.</single>
      <multiple>ll.</multiple>
    </term>
    <term name="note" form="short">
      <single>n.</single>
      <multiple>nn.</multiple>
    </term>
    <term name="opus" form="short">
      <single>op.</single>
      <multiple>opp.</multiple>
    </term>
    <term name="page" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="paragraph" form="short">
      <single>para.</single>
      <multiple>paras.</multiple>
    </term>
    <term name="part" form="short">
      <single>pt.</single>
      <multiple>pts.</multiple>
    </term>
    <term name="section" form="short">
      <single>sec.</single>
      <multiple>secs.</multiple>
    </term>
    <term name="sub-verbo" form="short">
      <single>s.v.</single>
      <multiple>s.vv.</multiple>
    </term>
    <term name="verse" form="short">
      <single>v.</single>
      <multiple>vv.</multiple>
    </term>
    <term name="volume" form="short">
      <single>vol.</single>
      <multiple>vols.</multiple>
    </term>

    <!-- SYMBOL LOCATOR FORMS -->
    <term name="paragraph" form="symbol">
      <single>¶</single>
      <multiple>¶¶</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§§</multiple>
    </term>

    <!-- LONG ROLE FORMS -->
    <term name="chair">
      <single>chair</single>
      <multiple>chairs</multiple>
    </term>
    <term name="compiler">
      <single>compiler</single>
      <multiple>compilers</multiple>
    </term>
    <term name="contributor">
      <single>contributor</single>
      <multiple>contributors</multiple>
    </term>
    <term name="curator">
      <single>curator</single>
      <multiple>curators</multiple>
    </term>
    <term name="executive-producer">
      <single>executive producer</single>
      <multiple>executive producers</multiple>
    </term>
    <term name="guest">
      <single>guest</single>
      <multiple>guests</multiple>
    </term>
    <term name="host">
      <single>host</single>
      <multiple>hosts</multiple>
    </term>
    <term name="narrator">
      <single>narrator</single>
      <multiple>narrators</multiple>
    </term>
    <term name="organizer">
      <single>organizer</single>
      <multiple>organizers</multiple>
    </term>
    <term name="performer">
      <single>performer</single>
      <multiple>performers</multiple>
    </term>
    <term name="producer">
      <single>producer</single>
      <multiple>producers</multiple>
    </term>
    <term name="script-writer">
      <single>writer</single>
      <multiple>writers</multiple>
    </term>
    <term name="series-creator">
      <single>series creator</single>
      <multiple>series creators</multiple>
    </term>
    <term name="director">
      <single>director</single>
      <multiple>directors</multiple>
    </term>
    <term name="editor">
      <single>editor</single>
      <multiple>editors</multiple>
    </term>
    <term name="editorial-director">
      <single>editor</single>
      <multiple>editors</multiple>
    </term>
    <term name="illustrator">
      <single>illustrator</single>
      <multiple>illustrators</multiple>
    </term>
    <term name="translator">
      <single>translator</single>
      <multiple>translators</multiple>
    </term>
    <term name="editortranslator">
      <single>editor &amp; translator</single>
      <multiple>editors &amp; translators</multiple>
    </term>

    <!-- SHORT ROLE FORMS -->
    <term name="compiler" form="short">
      <single>comp.</single>
      <multiple>comps.</multiple>
    </term>
    <term name="contributor" form="short">
      <single>contrib.</single>
      <multiple>contribs.</multiple>
    </term>
    <term name="curator" form="short">
      <single>cur.</single>
      <multiple>curs.</multiple>
    </term>
    <term name="executive-producer" form="short">
      <single>exec. prod.</single>
      <multiple>exec. prods.</multiple>
    </term>
    <term name="narrator" form="short">
      <single>narr.</single>
      <multiple>narrs.</multiple>
    </term>
    <term name="organizer" form="short">
      <single>org.</single>
      <multiple>orgs.</multiple>
    </term>
    <term name="performer" form="short">
      <single>perf.</single>
      <multiple>perfs.</multiple>
    </term>
    <term name="producer" form="short">
      <single>prod.</single>
      <multiple>prods.</multiple>
    </term>
    <term name="script-writer" form="short">
      <single>writ.</single>
      <multiple>writs.</multiple>
    </term>
    <term name="series-creator" form="short">
      <single>cre.</single>
      <multiple>cres.</multiple>
    </term>
    <term name="director" form="short">
      <single>dir.</single>
      <multiple>dirs.</multiple>
    </term>
    <term name="editor" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="editorial-director" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="illustrator" form="short">
      <single>ill.</single>
      <multiple>ills.</multiple>
    </term>
    <term name="translator" form="short">
      <single>tran.</single>
      <multiple>trans.</multiple>
    </term>
    <term name="editortranslator" form="short">
      <single>ed. &amp; tran.</single>
      <multiple>eds. &amp; trans.</multiple>
    </term>

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">chaired by</term>
    <term name="compiler" form="verb">compiled by</term>
    <term name="contributor" form="verb">with</term>
    <term name="curator" form="verb">curated by</term>
    <term name="executive-producer" form="verb">executive produced by</term>
    <term name="guest" form="verb">with guest</term>
    <term name="host" form="verb">hosted by</term>
    <term name="narrator" form="verb">narrated by</term>
    <term name="organizer" form="verb">organized by</term>
    <term name="performer" form="verb">performed by</term>
    <term name="producer" form="verb">produced by</term>
    <term name="script-writer" form="verb">written by</term>
    <term name="series-creator" form="verb">created by</term>
    <term name="container-author" form="verb">by</term>
    <term name="director" form="verb">directed by</term>
    <term name="editor" form="verb">edited by</term>
    <term name="editorial-director" form="verb">edited by</term>
    <term name="illustrator" form="verb">illustrated by</term>
    <term name="interviewer" form="verb">interview by</term>
    <term name="recipient" form="verb">to</term>
    <term name="reviewed-author" form="verb">by</term>
    <term name="translator" form="verb">translated by</term>
    <term name="editortranslator" form="verb">edited &amp; translated by</term>

    <!-- SHORT VERB ROLE FORMS -->
    <term name="compiler" form="verb-short">comp. by</term>
    <term name="contributor" form="verb-short">w.</term>
    <term name="curator" form="verb-short">cur. by</term>
    <term name="executive-producer" form="verb-short">exec. prod. by</term>
    <term name="guest" form="verb-short">w. guest</term>
    <term name="host" form="verb-short">hosted by</term>
    <term name="narrator" form="verb-short">narr. by</term>
    <term name="organizer" form="verb-short">org. by</term>
    <term name="performer" form="verb-short">perf. by</term>
    <term name="producer" form="verb-short">prod. by</term>
    <term name="script-writer" form="verb-short">writ. by</term>
    <term name="series-creator" form="verb-short">cre. by</term>
    <term name="director" form="verb-short">dir. by</term>
    <term name="editor" form="verb-short">ed. by</term>
    <term name="editorial-director" form="verb-short">ed. by</term>
    <term name="illustrator" form="verb-short">illus. by</term>
    <term name="translator" form="verb-short">trans. by</term>
    <term name="editortranslator" form="verb-short">ed. &amp; trans. by</term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01">January</term>
    <term name="month-02">February</term>
    <term name="month-03">March</term>
    <term name="month-04">April</term>
    <term name="month-05">May</term>
    <term name="month-06">June</term>
    <term name="month-07">July</term>
    <term name="month-08">August</term>
    <term name="month-09">September</term>
    <term name="month-10">October</term>
    <term name="month-11">November</term>
    <term name="month-12">December</term>

    <!-- SHORT MONTH FORMS -->
    <term name="month-01" form="short">Jan.</term>
    <term name="month-02" form="short">Feb.</term>
    <term name="month-03" form="short">Mar.</term>
    <term name="month-04" form="short">Apr.</term>
    <term name="month-05" form="short">May</term>
    <term name="month-06" form="short">Jun.</term>
    <term name="month-07" form="short">Jul.</term>
    <term name="month-08" form="short">Aug.</term>
    <term name="month-09" form="short">Sep.</term>
    <term name="month-10" form="short">Oct.</term>
    <term name="month-11" form="short">Nov.</term>
    <term name="month-12" form="short">Dec.</term>

    <!-- SEASONS -->
    <term name="season-01">Spring</term>
    <term name="season-02">Summer</term>
    <term name="season-03">Autumn</term>
    <term name="season-04">Winter</term>
  </terms>
</locale>
`;

