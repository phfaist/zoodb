import fs from 'fs';
import path from 'path';

import { ZooDb } from '@phfaist/zoodb';
import * as zoodbdataloader from '@phfaist/zoodb/dbdataloader/yamldb';

const logger = {
    debug: (...args) => { console.log(...args); },
    info: (...args) => { console.log(...args); },
};

import * as zoodbrelations from '@phfaist/zoodb/dbprocessor/relations';
import { ZooLLMProcessor } from '@phfaist/zoodb/dbprocessor/llmprocessor';

import * as zoollm from '@phfaist/zoodb/zoollm';
const {$$kw, repr} = zoollm;

// import * as zoollmscanner from '@phfaist/zoodb/zoollm/scanner.js';
// import { CitationCompiler, install_csl_llm_output_format }
//     from '@phfaist/zoodb/zoollm/citationcompiler.js';

import { CitationSourceArxiv } from '@phfaist/zoodb/citationmanager/source/arxiv';
import { CitationSourceDoi } from '@phfaist/zoodb/citationmanager/source/doi';
import { CitationSourceManual } from '@phfaist/zoodb/citationmanager/source/manual';
import { CitationSourceBibliographyFile } from '@phfaist/zoodb/citationmanager/source/bibliographyfile';

import { FilesystemResourceRetriever } from '@phfaist/zoodb/resourcecollector/retriever/fs';

import { LLMGraphicsResourceProcessor } from '@phfaist/zoodb/resourcecollector/processor/llmgraphicsprocessor';





const eczoo_data_dir = process.env.ECZOO_DATA_DIR;
if (!eczoo_data_dir) {
    throw new Error("Please define process environment variable $ECZOO_DATA_DIR");
}
const eczoo_schema_dir = process.env.ECZOO_SCHEMA_DIR;
if (!eczoo_schema_dir) {
    throw new Error("Please define process environment variable $ECZOO_SCHEMA_DIR");
}



const loader = new zoodbdataloader.YamlDbZooDataLoader({
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


// -----------------------------------------------
// Prepare zoo processors
// -----------------------------------------------


//
// Populate relations in the zoo (parents, cousins, backreferences, etc.)
//
let zoo_relations_populator = new zoodbrelations.RelationsPopulator();


//
// Process all Zoo LLM Content. Fetch citations, resolve some references, etc.
//

// see if we can mix in some LLM processing
let zoollmenviron = new zoollm.ZooLLMEnvironment();


const cslfn = 'eczoo-bib-style.csl';
let csl_style = fs.readFileSync(`playground/${cslfn}`).toString();

let zoo_llm_processor = new ZooLLMProcessor({
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
                fs,
            }),
            doi: new CitationSourceDoi(),
            manual: new CitationSourceManual(),
            preset: new CitationSourceBibliographyFile({
                bibliography_files: ['playground/bibpreset.yaml',],
                fs,
            }),
        },
        default_user_agent: `ecczoogen-bibliography-build-script/0.1 `
            + `(https://github.com/errorcorrectionzoo)`,
        csl_style: csl_style,
    },
    resource_collector_options: {
        resource_types: [ 'graphics_path' ],
        resource_retrievers: {
            'graphics_path': new FilesystemResourceRetriever({
                source_directory: eczoo_data_dir,
                copy_to_target_directory: true,
                target_directory: './_output_resource_graphics_files/',
                extensions: [ '', '.svg', '.png', '.jpeg', '.jpg' ],
                fs,
            }),
        },
        resource_processors: {
            'graphics_path': [
                new LLMGraphicsResourceProcessor({
                    zoo_llm_environment: zoollmenviron,
                    fs,
                }),
            ],
        },
    }
});


// -----------------------------------------------


let zoodb = new ZooDb(
    {
        // database processors:
        processors: [
            zoo_relations_populator,
            zoo_llm_processor
        ],
    }
);

// load data:
await zoodb.load_data( await loader.load() );
logger.info("Zoo is now loaded!");


zoollmenviron.graphics_collection.src_url_resolver = (graphics_resource, render_context) => {
    const src_url = path.join('./_output_resource_graphics_files/', graphics_resource.src_url);
    return { src_url, srcset: null };
};

// target_href resolver
zoollmenviron.external_ref_resolver.target_href_resolver = (ref_instance, render_context) => {
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

const test_render_code = () => {

    //const mycode = zoodb.objects.code.css;
    const mycode = zoodb.objects.code.testcode;

    // simple standalone text rendering?

    logger.debug(
        "Simple standalone text rendering: ‘%s’",
        mycode.name.render_standalone(new zoollm.ZooTextFragmentRenderer())
    );

    logger.debug('mycode.name =', mycode.name);

    // full html rendering?

    let doc = zoollmenviron.make_document(
        (render_context) => {
            const thecode = mycode;
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

    return full_rendered_html;
};

fs.writeFileSync('out_test.html', test_render_code());



// Try to reload the zoo, simulating a file change
//await new Promise( (resolve) => setTimeout(resolve, 1000) ); // wait a moment
let pp = path.join(eczoo_data_dir, 'codes', 'CSS.yml');
//logger.debug(`Touching file ${pp}`);
fs.appendFileSync( pp, "\n" );
//await new Promise( (resolve) => setTimeout(resolve, 1000) ); // wait a moment


// reload!
const { dbdata, reload_info } = await loader.reload(zoodb.db);
await zoodb.update_objects(reload_info.reloaded_objects);


fs.writeFileSync('out_test_2.html', test_render_code());




// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1500);
