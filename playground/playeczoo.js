import fs from 'fs';
import path from 'path';

import * as zoodbdataloader from '../src/dbdataloader/index.js';
import _zoologger from '../src/_zoologger.js';
const logger = _zoologger.child({module: 'play'});

import * as zoodbrelations from '../src/dbprocessors/relations.js';

import * as zoollm from '../src/zoollm/index.js';
const {$$kw, repr} = zoollm;

// import * as zoollmscanner from '../src/zoollm/scanner.js';
// import { CitationCompiler, install_csl_llm_output_format }
//     from '../src/zoollm/citationcompiler.js';

import { CitationSourceArxiv } from '../src/citationmanager/sources/arxiv.js';
import { CitationSourceDoi } from '../src/citationmanager/sources/doi.js';
import { CitationSourceManual } from '../src/citationmanager/sources/manual.js';
import { CitationSourceBibliographyFile } from '../src/citationmanager/sources/bibliographyfile.js';
//import { CitationDatabaseManager } from '../src/citationmanager/index.js';

import { FileResourceRetriever } from '../src/resourcecollector/file.js';

import { LLMGraphicsResourceProcessor } from '../src/resourcecollector/llmgraphicsprocessor.js';

import { ZooLLMZooProcessor } from '../src/zoollm/zooprocessor.js';

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
//             zoodb.objects.code.css._zoodb.source_file_path
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

// //
// // Compile all LLM content!
// //
// {
//     let zoo_relations_populator = new zoodbllmcontent.LLMContentCompiler(
//         zoodb,
//         {
//             llm_environment: zoollmenviron
//         }
//     );
//     logger.info("Populating zoo LLM content ...");
//     await zoo_relations_populator.compile_all_zoo();
//     logger.info("Zoo LLM content populated!");
// }

// // logger.debug("Now, for instance, we have steane.name = "
// //              + repr(zoodb.objects.code.steane.name));

// //
// // Scan LLM content in the zoo
// //
// const scanner = new zoollmscanner.ZooLLMScanner();
// scanner.scan_zoo(zoodb);

// logger.info(`List of graphics paths used: ${JSON.stringify(scanner.get_encountered('graphics_paths'))}`);
// logger.info(`Found ${scanner.get_encountered('citations').length} citation instances in total`);

// logger.debug(`Found ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='arxiv')).length} ‘arxiv:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='doi')).length} ‘doi:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='preset')).length} ‘preset:’ citations, ${scanner.get_encountered('citations').filter((c)=>(c.cite_prefix=='manual')).length} ‘manual:’ citations.`);


// //
// // Add ref targets
// //
// for (const [codeid,codeobj] of Object.entries(zoodb.objects.code)) {
//     logger.debug(`Adding ref for code ‘${codeid}’`);
//     zoollmenviron.external_ref_resolver.add_ref(
//         zoollm.RefInstance($$kw({
//             ref_type: 'code',
//             ref_label: codeid,
//             formatted_ref_llm_text: codeobj.name.llm_text,
//             target_href: `https://errorcorrectionzoo.org/c/${codeid}`,
//         }))
//     );
// }
// for (const encountered_referenceable of scanner.get_encountered('referenceables')) {
//     const { referenceable_info, encountered_in } = encountered_referenceable;
//     for (const lbl of referenceable_info.labels) {
//         const [ref_type, ref_label] = lbl;
//         zoollmenviron.external_ref_resolver.add_ref(
//             zoollm.RefInstance($$kw({
//                 ref_type: ref_type,
//                 ref_label: ref_label,
//                 formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text,
//                 // TODO, need to track on which page a referenceable is placed
//                 // --- done via eleventy?
//                 target_href: `#??????`,
//             }))
//         );
//     }
// }



//
// Process all Zoo LLM Content. Fetch citations, resolve some references, etc.
//

const cslfn = 'eczoo-bib-style.csl';
let csl_style = fs.readFileSync(`playground/${cslfn}`).toString();


let zoo_llm_processor = new ZooLLMZooProcessor({
    zoodb: zoodb,
    zoo_llm_environment: zoollmenviron,
    refs: {
        code: {
            formatted_ref_llm_text_fn: (codeid, code) => code.name.llm_text,
        },
    },
    citations: {
        sources: {
            arxiv: new CitationSourceArxiv({
                override_arxiv_dois_file: 'playground/overridearxivdois.yaml',
            }),
            doi: new CitationSourceDoi(),
            manual: new CitationSourceManual(),
            preset: new CitationSourceBibliographyFile({
                bibliography_file: 'playground/bibpreset.yaml'
            }),
        },
        default_user_agent: `ecczoogen-bibliography-build-script/0.1 `
            + `(https://github.com/errorcorrectionzoo)`,
        csl_style: csl_style,
    },
    resource_collector_options: {
        resource_retrievers: {
            'graphics_path': new FileResourceRetriever({
                source_directory: eczoo_data_dir,
                copy_to_target_directory: true,
                target_directory: './_output_resource_graphics_files/',
                extensions: [ '', '.svg', '.png', '.jpeg', '.jpg' ],
            }),
        },
        resource_processors: {
            'graphics_path': new LLMGraphicsResourceProcessor({
                zoo_llm_environment: zoollmenviron
            }),
        },
    }
});

await zoo_llm_processor.process_zoo();

zoollmenviron.graphics_collection.src_url_resolver = (graphics_resource) => {
    return path.join('./_output_resource_graphics_files/', graphics_resource.src_url);
};

// target_href resolver
zoollmenviron.external_ref_resolver.target_href_resolver = (ref_instance) => {
    if (ref_instance.target_href) {
        return ref_instance.target_href;
    }
    if (ref_instance.ref_type == 'code') {
        return `https://errorcorrectionzoo.org/c/${ref_instance.ref_label}`;
    }
    return `javascript:alert("link not available");`;
};


//
// Now render some code information
//

let doc = zoollmenviron.make_document(
    (render_context) => {
        const thecode = zoodb.objects.code.testcode;
        //const thecode = zoodb.objects.code.css;
        return `
<h1>${thecode.name.render(render_context)} ${thecode.introduced.render(render_context)}</h1>
<h2>Description</h2>
${thecode.description.render(render_context)}
<h2>Protection</h2>
${thecode.protection.render(render_context)}
`;
    } );
let [rendered_html, render_context] = doc.render( new zoollm.ZooHtmlFragmentRenderer() );
rendered_html += `
<h2>References</h2>
${render_context.feature_render_manager('endnotes').render_endnotes()}
`
logger.info("Rendered HTML: ");
logger.info(rendered_html);

const full_rendered_html = `
<!doctype html>
<html>
<head>
  <title>LLM Document</title>
  <style type="text/css">
/* ------------------ */
html, body {
  font-size: 16px;
  line-height: 1.3em;
}

article {
  max-width: 640px;
  margin: 0px auto;
}

p, ul, ol {
  margin: 1em 0px;
}
p:first-child, ul:first-child, ol:first-child {
  margin-top: 0px;
}
p:last-child, ul:last-child, ol:last-child {
  margin-bottom: 0px;
}

a, a:link, a:hover, a:active, a:visited {
  color: #3232c8;
  text-decoration: none;
}
a:hover {
  color: #22228a;
}

.emph, .textit {
  font-style: italic;
}
.textbf {
  font-weight: bold;
}

h1 {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 1em 0px;
}
h2 {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1em 0px;
}
h3 {
  font-size: 1rem;
  font-weight: bold;
  margin: 1em 0px;
}

.heading-level-4 {
  font-style: italic;
  display: inline;
}
.heading-level-4::after {
  display: inline-block;
  margin: 0px .12em;
  content: '—';
}

.heading-level-5 {
  font-style: italic;
  font-size: .9em;
  display: inline;
}
.heading-level-5::after {
  display: inline-block;
  margin-right: .12em;
  content: '';
}

.heading-level-6 {
  font-style: italic;
  font-size: .8em;
  display: inline;
}
.heading-level-6::after {
  display: inline-block;
  margin-right: .06em;
  content: '';
}

dl.enumeration {
  display: grid;
  grid-template-columns: 0fr 1fr;
  gap: 0.5em;
}
dl.enumeration > dt {
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: right;
  margin: 0px;
}
dl.enumeration > dd {
  grid-column-start: 2;
  grid-column-end: 3;
  margin: 0px;
}

figure.float {
  width: 100%;
  border-width: 1px 0px 1px 0px;
  border-style: solid none solid none;
  border-color: rgba(120, 120, 140, 0.15);
  margin: 0.5rem 0px;
  padding: 0.5rem 0px;
}

figure.float .float-contents {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

figure.float .float-contents img {
  display: block;
  margin: 0pt;
  padding: 0pt;
  border: 0pt;
  margin: 0px auto;
}

figure.float figcaption {
  display: block;
  margin-top: 0.5em;
  margin: 0.75em 2em 0px;
  text-align: center;
}

figure.float figcaption > span {
  display: inline-block;
  font-style: italic;
  text-align: left;
}

.defterm {
  font-style: italic;
}

.defterm .defterm-term {
  font-style: italic;
  font-weight: bold;
}

.display-math {
  width: 100%;
  max-width: 100%;
  display: block;
  overflow-x: auto;
}

.citation {
  font-size: 0.8em;
  display: inline-block;
  vertical-align: 0.3em;
  margin-top: -0.3em;
}
.footnote {
  font-size: 0.8em;
  display: inline-block;
  vertical-align: 0.3em;
  margin-top: -0.3em;
}
dl.citation-list > dt, dl.footnote-list > dt {
  font-size: 0.8em;
  display: inline-block;
  vertical-align: 0.3em;
  margin-top: -0.3em;
}
/* ------------------ */
  </style>
  <script>
MathJax = {
    tex: {
        inlineMath: [['\\\\(', '\\\\)']],
        displayMath: [['\\\\[', '\\\\]']],
        processEnvironments: true,
        processRefs: true,

        // equation numbering on
        tags: 'ams'
    },
    options: {
        // all MathJax content is marked with CSS classes
        // skipHtmlTags: 'body',
        // processHtmlClass: 'display-math|inline-math',
    },
    startup: {
        pageReady: function() {
            // override the default "typeset everything on the page" behavior to
            // only typeset whatever we have explicitly marked as math
            return typesetPageMathPromise();
        }
    }
};
function typesetPageMathPromise()
{
    var elements = document.querySelectorAll('.display-math, .inline-math');
    return MathJax.typesetPromise(elements);
}
  </script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
<article>
${rendered_html}
</article>
</body>
</html>
`;

fs.writeFileSync('out_test.html', full_rendered_html);








// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1500);
