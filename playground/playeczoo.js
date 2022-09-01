import fs from 'fs';
import path from 'path';

import * as zoodbdataloader from '../src/dbdataloader/index.js';
import _zoologger from '../src/_zoologger.js';
const logger = _zoologger.child({module: 'play'});

import * as zoodbrelations from '../src/dbprocessors/relations.js';
import * as zoodbllmcontent from '../src/dbprocessors/llmcontent.js';

import * as zoollm from '../src/zoollm/index.js';
const {$$kw, repr} = zoollm;

import * as zoollmscanner from '../src/zoollm/scanner.js';

import { CitationSourceArxiv } from '../src/citationmanager/sources/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/sources/doi.js';
import { CitationSourceManual } from '../src/citationmanager/sources/manual.js';
import { CitationSourceBibliographyFile } from '../src/citationmanager/sources/bibliographyfile.js';
import { CitationDatabaseManager } from '../src/citationmanager/index.js';

import CSL from 'citeproc';
//import { Driver } from '@citeproc-rs/wasm'; -- hmmm not sure how to make this work

import jsoncycle from 'cycle/cycle.js';



const eczoo_data_dir = process.env.ECZOO_DATA_DIR;
if (!eczoo_data_dir) {
    throw new Error("Please define process environment variable $ECZOO_DATA_DIR");
}
const eczoo_schema_dir = process.env.ECZOO_SCHEMA_DIR;
if (!eczoo_schema_dir) {
    throw new Error("Please define process environment variable $ECZOO_SCHEMA_DIR");
}



const loader = new zoodbdataloader.ZooDbDataLoader({
    objects: {
        code: {
            schema_name: 'ecc',
            data_src_path: 'codes/',
        },
    },
    object_defaults: {
        ignore_file_name_match:
        /(\~|^\.DS_Store|^\.gitignore|\.(bak|svg|tex|pdf|aux|log|dvi|xcf|ai|indd|afdesign|afpub|png|jpeg|jpg))$/i,
    },
    root_data_dir: eczoo_data_dir,
    schemas: {
        schema_root: `file://${eczoo_schema_dir}`,
        schema_rel_path: 'schemas/',
        schema_add_extension: '.yml',
    },
});


const zoodb = await loader.load(); // load!
logger.info("Zoo is now loaded!");


{ const jsondata = JSON.stringify( zoodb.data_dump() );
  fs.writeFileSync("zoo_dbdata_output.json", jsondata, {encoding:'utf8'});
  logger.info("Zoo saved as json."); }


//
// Populate relations fields, including backreferences!
//
{ let zoo_relations_populator = new zoodbrelations.RelationsPopulator(zoodb);
  zoo_relations_populator.check_all_clean_fields();
  zoo_relations_populator.populate_relations();
  // logger.debug("CSS code's first parent relation object is: ")
  // logger.debug(zoodb.objects.code.css.relations.parents[0]);
  logger.info("Zoo relations populated!"); }


//logger.info(zoodb);
{ const jsondata = JSON.stringify( jsoncycle.decycle(zoodb.data_dump()) );
  fs.writeFileSync("zoo_dbdata_output_relationsdecycled.json", jsondata, {encoding:'utf8'});
  logger.info("Zoo with relation data saved as JSON with $ref's"); }


// -----------------------------------------------------------------------------

// see if we can mix in some LLM processing
let zoollmenviron = zoollm.make_zoo_llm_environment();

// logger.debug("refs database is now ")
// logger.debug(zoollmenviron.external_ref_resolver.ref_instance_database);

// let frag = zoollmenviron.make_fragment(
//     zoodb.objects.code.css.description,
//     $$kw({
//         is_block_level: true,
//         resource_info: new zoollm.ZooLLMResourceInfo(
//             'code', 'css',
//             path.join('codes', zoodb.objects.code.css._zoodb.source_file_path)
//         )
//     })
// );
// let doc = zoollmenviron.make_document(frag.render);

// // We'll need this reference. Note we're specifying it after the relevant
// // fragment was parsed, and it still works.
// zoollmenviron.external_ref_resolver.add_ref(
//     zoollm.RefInstance($$kw({
//         ref_type: 'code',
//         ref_label: 'binary_linear',
//         formatted_ref_llm_text: 'Binary \\emph{linear} code',
//         target_href: 'https://errorcorrectionzoo.org/c/binary_linear',
//     }))
// );

// let [render_result, render_context] = doc.render( new zoollm.ZooHtmlFragmentRenderer() );
// logger.info("Rendered HTML: ");
// logger.info(render_result);


// -----------------------------------------------------------------------------

//
// Compile all LLM content!
//
{
    let zoo_relations_populator = new zoodbllmcontent.LLMContentCompiler(
        zoodb,
        {
            llm_environment: zoollmenviron
        }
    );
    logger.info("Populating zoo LLM content ...");
    await zoo_relations_populator.compile_all_zoo();
    logger.info("Zoo LLM content populated!");
}

// logger.debug("Now, for instance, we have steane.name = "
//              + repr(zoodb.objects.code.steane.name));

//
// Scan LLM content in the zoo
//
const scanner = new zoollmscanner.ZooLLMScanner();
scanner.scan_zoo(zoodb);

logger.info(`List of graphics paths used: ${JSON.stringify(scanner.get_encountered('graphics_paths'))}`);
logger.info(`Found ${scanner.get_encountered('citations').length} citation instances in total`);

logger.debug(`Found ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='arxiv')).length} ‘arxiv:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='doi')).length} ‘doi:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='preset')).length} ‘preset:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='manual')).length} ‘manual:’ citations.`);


//
// Add ref targets
//
for (const [codeid,codeobj] of Object.entries(zoodb.objects.code)) {
    logger.debug(`Adding ref for code ‘${codeid}’`);
    zoollmenviron.external_ref_resolver.add_ref(
        zoollm.RefInstance($$kw({
            ref_type: 'code',
            ref_label: codeid,
            formatted_ref_llm_text: codeobj.name.llm_text,
            target_href: `https://errorcorrectionzoo.org/c/${codeid}`,
        }))
    );
}
for (const encountered_referenceable of scanner.get_encountered('referenceables')) {
    const { referenceable_info, encountered_in } = encountered_referenceable;
    for (const lbl of referenceable_info.labels) {
        const [ref_type, ref_label] = lbl;
        zoollmenviron.external_ref_resolver.add_ref(
            zoollm.RefInstance($$kw({
                ref_type: ref_type,
                ref_label: ref_label,
                formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text,
                // TODO, need to track on which page a referenceable is placed
                // --- done via eleventy?
                target_href: `#??????`,
            }))
        );
    }
}


//
// Fetch citations!
//
let citation_sources = {
    'arxiv': new CitationSourceArxiv({
        override_arxiv_dois_file: 'playground/overridearxivdois.yaml',
    }),
    'doi': new CitationSourceDoi(),
    'manual': new CitationSourceManual(),
    'preset': new CitationSourceBibliographyFile({
        bibliography_file: 'playground/bibpreset.yaml'
    }),
};
const uagent = `ecczoogen-bibliography-build-script/0.1 `
      + `(https://github.com/errorcorrectionzoo)`;

let citation_manager = new CitationDatabaseManager(
    citation_sources,
    {
        default_user_agent: uagent
    },
);

logger.debug("Fetching citations ...");
await citation_manager.query_citations(
    scanner.get_encountered('citations')
);
// citations database ready
logger.info("Citation database ready!")


//
// Create bibliography and populate the citation provider
//
let citeprocSys = {
    retrieveLocale: (lang) => {
        const locale_file = `playground/locale-${lang}.xml`;
        try {
            return fs.readFileSync(locale_file).toString();
        } catch (err) {
            logger.error(`Locale ‘${lang}’ not found.`);
            return false;
        }
    },
    retrieveItem: (id) => {
        const obj = citation_manager.get_citation_by_id(id);
        //console.log('Retrieved citation for', id, ', got:', obj);
        if (!obj) {
            throw new Error(`No citation found for ‘${id}’ in internal database!`);
        }
        return obj;
    }
};



const llm_escape_chars = {
    '\\': '\\textbackslash',
    '%': '\\%',
    '#': '\\#',
    '&': '\\&',
    '$': '\\$',
    '{': '\\{',
    '}': '\\}',
};

CSL.Output.Formats.llm = {
    //
    // text_escape: Format-specific function for escaping text destined
    // for output.  Takes the text to be escaped as sole argument.  Function
    // will be run only once across each portion of text to be escaped, it
    // need not be idempotent.
    //
    "text_escape": function (text) {
        // Numeric entities, in case the output is processed as
        // xml in an environment in which HTML named entities are
        // not declared.
        if (!text) {
            text = "";
        }

        if (!text.strip()) {
            // only whitespace -- don't process it further
            return text;
        }
        
        // attempt to parse as LLM, just in case it works and in this case let's
        // use it!
        try {
            // do some transformations that will hopefully turn the given text
            // into valid LLM?
            
            const transform_mml_to_tex = (chunk) => {
                // really too simple ... basically a cheap conversion to text... :/
                return chunk.replace(/\s*\<.*?\>\s*/g, '');
            };
            text = text.replace(/<mml:math.*?<\/\s*mml:math>/g, transform_mml_to_tex);

            // fix lone '%' signs not preceded by a \ (maybe fixme: will misparse '\\%' ...)
            text = text.replace(/([^\\])%/g, '$1\\%');

            // change inline math $...$ -> \(...\)
            text = text.replace(/\$(.*?)\$/g, '\\($1\\)');

            zoollmenviron.make_fragment(
                text,
                $$kw({
                    is_block_level: false,
                    standalone_mode: true,
                    silent: true,
                    // -- would only work if we could recompose the compiled
                    // -- nodes into valid strict LLM text --- ### wait, try again
                    // parsing_mode: 'safer-latexier',
                    // tolerant_parsing: true,
                }),
            );
            // valid LLM --- keep text directly
        } catch (err) {
            // not valid LLM
            //text = text.replaceAll( /[\\%#&${}]/g , (match) => llm_escape_chars[match] );
            text = `\\begin{verbatimtext}${text}\\end{verbatimtext}`;
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
    "@vertical-align/sup": "\({}^{\\text{%%STRING%%}}\)",
    "@vertical-align/sub": "\({}_{\\text{%%STRING%%}}\)",
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
    "@showid/true": function (state, str, cslid) {
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




const cslfn = 'eczoo-bib-style.csl';

let cslstyle = fs.readFileSync(`playground/${cslfn}`).toString();

let cite_processor = new CSL.Engine(citeprocSys, cslstyle);
cite_processor.setOutputFormat('llm');

const add_cite_links = { 'arxiv': true, 'doi': true, 'url': 'only-if-no-other-link' };

for (const cid of citation_manager.keys() )
{
    // split(':',2) will also split at second semicolumn, just not return remaining parts !!
    const [cite_prefix, ...split_rest] = cid.split(':');
    const cite_key = split_rest.join(':'); 
    const obj = citation_manager.get_citation_by_id(cid);

    if (obj._formatted_llm_text) {
        zoollmenviron.external_citations_provider.add_citation(
            cite_prefix, cite_key, obj._formatted_llm_text
        );
        continue;
    }

    //console.log(`C: processing ${cite_prefix}:${cite_key} == ${JSON.stringify(cid)}`, cid);

    //console.log('updateItems', [cid]);
    cite_processor.updateItems( [ cid ] );
    const c_result = cite_processor.makeBibliography();
    //console.log(cid, 'c_result=', c_result);

    let result_llm = c_result[1].toString();

    if (!result_llm) {
        throw new Error(`Could not CSL-compile citation text for ‘${cid}’`);
    }

    // maybe add links?
    let has_link = false;
    if (add_cite_links.arxiv && obj.arxivid) {
        result_llm += ` \\href{https://arxiv.org/abs/${obj.arxivid}}{${obj.arxivid}}`;
        has_link = true;
    }
    const doi = obj.doi || obj.DOI;
    if (add_cite_links.doi && doi) {
        const doiurl = `https://doi.org/${encodeURIComponent(doi)}`;
        result_llm += ` \\href{${doiurl}}{DOI}`;
        has_link = true;
    }
    const url = obj.url || obj.URL;
    if (url && (add_cite_links.url
                || (add_cite_links == 'only-if-no-other-link' && !has_link))) {
        result_llm += ` \\href{${url}}{URL}`
    }

    //
    zoollmenviron.external_citations_provider.add_citation(
        cite_prefix, cite_key,
        result_llm.trim(),
    );
}


//
// Now render some code information
//

let doc = zoollmenviron.make_document(
    (render_context) => {
        const css = zoodb.objects.code.css;
        return `
<h1>${css.name.render(render_context)} ${css.introduced.render(render_context)}</h1>
<h2>Description</h2>
${css.description.render(render_context)}
<h2>Protection</h2>
${css.protection.render(render_context)}
`;
    } );
let [rendered_html, render_context] = doc.render( new zoollm.ZooHtmlFragmentRenderer() );
rendered_html += `
<h2>References</h2>
${render_context.feature_render_manager('endnotes').render_endnotes()}
`
logger.info("Rendered HTML: ");
logger.info(rendered_html);










// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1500);
