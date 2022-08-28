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
        override_arxiv_dois_file: 'playground/biboverridearxivdois.yaml',
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
// Now render some code information
//

let doc = zoollmenviron.make_document(
    (render_context) => {
        const css = zoodb.objects.code.css;
        return `
<h2>Description</h2>
${css.description.render(render_context)}
<h2>Protection</h2>
${css.protection.render(render_context)}
`;
    } );
let [render_result, render_context] = doc.render( new zoollm.ZooHtmlFragmentRenderer() );
logger.info("Rendered HTML: ");
logger.info(render_result);










// finish printing out tasks etc.
setTimeout(() => { console.log("Timeout done!"); }, 1500);
