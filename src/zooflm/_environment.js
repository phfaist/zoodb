import debug_module from 'debug';
const debug = debug_module('zoodb.zooflm._environment');

import path from 'path';

import {$$kw, repr} from './flm-js/py.js';
import {__class__, __super__, __get__, isinstance} from './flm-js/org.transcrypt.__runtime__.js';

import { ParsingState, ParsingStateDelta } from './flm-js/pylatexenc.latexnodes.js';
import * as macrospec from './flm-js/pylatexenc.macrospec.js';

import { FLMFragment } from './flm-js/flm.flmfragment.js';

import * as flmenvironment from './flm-js/flm.flmenvironment.js';
import {
    FLMEnvironment,
    FLMParsingState,
    FLMParsingStateDeltaSetBlockLevel,
} from './flm-js/flm.flmenvironment.js';

import * as flm_feature from './flm-js/flm.feature.js';
import * as flm_feature_baseformatting from './flm-js/flm.feature.baseformatting.js';
import * as flm_feature_href from './flm-js/flm.feature.href.js';
import * as flm_feature_verbatim from './flm-js/flm.feature.verbatim.js';
import * as flm_feature_math from './flm-js/flm.feature.math.js';
import * as flm_feature_headings from './flm-js/flm.feature.headings.js';
import * as flm_feature_endnotes from './flm-js/flm.feature.endnotes.js';
import * as flm_feature_refs from './flm-js/flm.feature.refs.js';
import * as flm_feature_cite from './flm-js/flm.feature.cite.js';
import * as flm_feature_floats from './flm-js/flm.feature.floats.js';
import * as flm_feature_defterm from './flm-js/flm.feature.defterm.js';
import * as flm_feature_graphics from './flm-js/flm.feature.graphics.js';


export { FLMParsingState, ParsingStateDelta, FLMParsingStateDeltaSetBlockLevel };

export const SectionCommandSpec = flm_feature_headings.FeatureHeadings.SectionCommandSpec;

export const EndnoteCategory = flm_feature_endnotes.EndnoteCategory;

export const ReferenceableInfo = flm_feature_refs.ReferenceableInfo;
export const RefInstance = flm_feature_refs.RefInstance;

export const FloatType = flm_feature_floats.FloatType;

export const GraphicsResource = flm_feature_graphics.GraphicsResource;


// patch some objects that expose .asdict() to also enable .toJSON()
for (const Cls of [SectionCommandSpec,
                   EndnoteCategory,
                   ReferenceableInfo,
                   RefInstance,
                   FloatType,
                   GraphicsResource])
{
    // Remember, these are Transcrypt/Python's class objects; don't use the
    // .prototype field because these are not native JavaScript classes using
    // the JS protype chain.
    Cls.toJSON = function() { return this.asdict(); }
}




export function is_flm_fragment(obj)
{
    return isinstance(obj, FLMFragment);
}


export class RefResolver
{
    constructor(options)
    {
        this.options = options ?? {};
        // e.g., options = { ref_types: [ 'code', 'term', 'topic' ] }

        this.clear_all_refs();

        this.target_href_resolver = null;
    }

    clear_all_refs()
    {
        this.ref_instance_database = {};
        if (this.options.ref_types) {
            this.options.ref_types.forEach( (ref_type) => {
                this.ref_instance_database[ref_type] = {};
            } );
        }

        //debug(`cleared all refs, this.ref_instance_database =`, this.ref_instance_database);
    }

    add_ref(ref_instance)
    {
        const {ref_type, ref_label} = ref_instance;
        if (ref_type == null) { // undefined or null
            throw new Error(`Invalid ref_type:ref_label pair ‘${ref_type}:${ref_label}’`);
        }
        if (!this.ref_instance_database.hasOwnProperty(ref_type)) {
            if (this.options.ref_types !== undefined) {
                throw new Error(
                    `Invalid ref prefix ‘${ref_type}’ in ‘${ref_type}:${ref_label}’, `
                    + `expected one of ${this.options.ref_types}`
                );
            }
            // if options.ref_types is undefined, we dynamically grow the dict
            // to include whatever ref_type was given
            this.ref_instance_database[ref_type] = {};
        }
        if (this.ref_instance_database[ref_type].hasOwnProperty(ref_label)) {
            throw new Error(
                `Ref target ‘${ref_type}:${ref_label}’ already exists in ref instance `
                + `database, found `
                + `${JSON.stringify(this.ref_instance_database[ref_type][ref_label])}`
            );
        }
        //debug(`adding ref: ${ref_type}:${ref_label}`); // -> `, ref_instance);

        this.ref_instance_database[ref_type][ref_label] = ref_instance;

        //debug(`added ref, ref_instance_database =`, this.ref_instance_database);
    }
    
    get_ref(ref_type, ref_label, resource_info, render_context)
    {
        //debug(`RefResolver: resolving ref ‘${ref_type}:${ref_label}’ ...`);

        const ref_instance = this.ref_instance_database?.[ref_type]?.[ref_label];

        if (ref_instance == null) {
            // no such reference type
            debug(`No such reference in ref instance database — ${ref_type}:${ref_label}`);
            return null;
        }

        // debug(`Got ref ‘${ref_type}:${ref_label}’: ${repr(ref_instance)}`);

        if (this.target_href_resolver != null) {
            return new RefInstance( $$kw(
                Object.assign({}, ref_instance.asdict(), {
                    target_href: this.target_href_resolver(ref_instance, render_context)
                })
            ) );
        }

        return ref_instance;
    }

    // load/save references DB
    dump_database()
    {
        // RefInstance objects are exported correctly because RefInstance was
        // given a .toJSON() method (patched above).

        // FIXME: If RefInstance objects have FLM Fragment instances as
        // formatted text, export only the flm_text property so that it can be
        // serialized into JSON.

        return {
            ref_instance_database: this.ref_instance_database,
        };
    }
    load_database(data)
    {
        // create RefInstance object instances
        let ridb = {};
        for (const [ref_type, ref_type_db] of Object.entries(data.ref_instance_database)) {
            ridb[ref_type] = {};
            for (const [ref_label, ref_instance_data] of Object.entries(ref_type_db)) {
                ridb[ref_type][ref_label] = new RefInstance( $$kw(ref_instance_data) );
            }
        }
        this.ref_instance_database = ridb;
    }

};





export class CitationsProvider
{
    constructor()
    {
        this.clear_citations();
    }

    clear_citations()
    {
        this.citations_database = {};
    }

    /// The FLM argument can be either valid standalone FLM text given as a
    /// string or a precompiled FLM fragment object instance.
    add_citation(cite_prefix, cite_key, full_citation_flm_text)
    {
        if (!this.citations_database.hasOwnProperty(cite_prefix)) {
            this.citations_database[cite_prefix] = {};
        }
        if (this.citations_database[cite_prefix].hasOwnProperty(cite_key)) {
            throw new Error(
                `There is already a citation registered for ‘${cite_prefix}:${cite_key}’`
            );
        }
        this.citations_database[cite_prefix][cite_key] = full_citation_flm_text;
    }

    set_citations(iterable)
    {
        this.clear_citations();
        for (const {cite_prefix, cite_key, citation_text} of iterable) {
            this.add_citation(cite_prefix, cite_key, citation_text);
        }
    }

    get_citation_full_text_flm(cite_prefix, cite_key, resource_info)
    {
        if (!this.citations_database.hasOwnProperty(cite_prefix)) {
            return this.handle_unresolved_citation({
                cite_prefix, cite_key, resource_info,
                message:
                    `There is no citation registered for prefix ‘${cite_prefix}’ in query `
                    + `for ‘${cite_prefix}:${cite_key}’ in ${resource_info}`
            });
            
        }
        if (!this.citations_database[cite_prefix].hasOwnProperty(cite_key)) {
            return this.handle_unresolved_citation({
                cite_prefix, cite_key, resource_info,
                message:
                    `There is no citation registered for key ‘${cite_prefix}:${cite_key}’ `
                    + `in ${resource_info}`
            });
        }
        return this.citations_database[cite_prefix][cite_key];
    }

    handle_unresolved_citation({ cite_prefix, cite_key, message, resource_info })
    {
        // no, this will prevent processing with further citations providers!
        //throw new Error(message);
        debug(`Can't find citation ‘${cite_prefix}:${cite_key}’: ${message}`);
        return null;
    }

    // load/save references DB
    dump_database()
    {
        let db = {};

        for (const [cite_prefix, prefix_db] of Object.entries(this.citations_database)) {
            db[cite_prefix] = {};
            for (let [cite_key, citation_text] of Object.entries(prefix_db)) {
                if (is_flm_fragment(citation_text)) {
                    citation_text = citation_text.flm_text;
                }
                db[cite_prefix][cite_key] = citation_text;
            }
        }

        return {
            citations_database: db,
        };
    }
    load_database(data)
    {
        this.citations_database = data.citations_database;
    }

};


// we need to define this class the Transcrypt way because we want to inherit a
// Python-transcrypted class
export const FeatureZooGraphicsCollection = __class__(
    'FeatureZooGraphicsCollection', // class name
    [ flm_feature.Feature ], // base classes
    {
        // static members

 	__module__: 'zoodb.zooflm._environment',

        // static member - nested class definition
        RenderManager:  __class__(
            'RenderManager', // class name
            [ flm_feature.Feature.RenderManager ], // base classes
            {
                // static members
                get get_graphics_resource () {return __get__(this, function
                (self, graphics_path, resource_info) {
                    
                    const feature = self.feature;

                    //
                    // compose full source path using the resource_info
                    //
                    const source_path = path.join(resource_info.get_source_directory(),
                                                  graphics_path);
                    if (!feature.graphics_collection.hasOwnProperty(source_path)) {
                        throw new Error(
                            `No such graphics ‘${source_path}’ (‘${graphics_path}’ `
                            + `relative to ${resource_info})`
                        );
                    }

                    const graphics_resource = feature.graphics_collection[source_path];

                    //debug(`Got graphics_resource = `, graphics_resource);

                    if (feature.src_url_resolver != null) {
                        const { src_url, srcset } = feature.src_url_resolver(
                            graphics_resource,
                            self.render_context
                        );
                        if (src_url === undefined) {
                            throw new Error(`src_url_resolver() did not return { src_url }.`);
                        }
                        return GraphicsResource($$kw(
                            Object.assign({}, graphics_resource.asdict(),
                                          { src_url, srcset, })
                        ));
                    }

                    return graphics_resource;
                });},

            }
        ), // RenderManager


        // constructor.  I'm not sure why we need the getters etc.
 	get __init__ () {return __get__ (this, function
        (self) {

            // call superclass constructor
            __super__(FeatureZooGraphicsCollection, '__init__')(self);

            // mapping of source paths (w.r.t. user-defined fixed reference dir) to
            // final (relative or absolute) URLs to use
            self.graphics_collection = {};

            // set the feature name
            self.feature_name = 'graphics_resource_provider';

            // can set a src_url resolver for generation-time url resolution
            self.src_url_resolver = null;

              //debug("FeatureZooGraphicsCollection constructor.  self = ", self);
        });},

        // methods

        get add_graphics () {return __get__(this, function
        (self, source_path, graphics_resource) {
            if (self.graphics_collection.hasOwnProperty(source_path)) {
                throw new Error(
                    `Graphics collection already has a graphics resource registered `
                    + ` for path ‘${source_path}’ (registered target `
                    + `‘${self.graphics_collection[source_path].src_url}’, new target `
                    + `‘${graphics_resource.src_url}’)`
                );
            }

            self.graphics_collection[source_path] = graphics_resource;
        });},

        get set_collection () {return __get__(this, function
        (self, collection) {

            Object.entries(collection).forEach( (grobjpair) => {
                const [source_path, graphics_resource] = grobjpair;
                self.add_graphics(source_path, graphics_resource);
            } );
        }); },

    }
);





export function zooflm_default_options(footnote_counter_formatter='alph')
{
    return {

        heading_section_commands_by_level: {
            // only 'subsection' and 'paragraph' available.
            2: SectionCommandSpec("section", $$kw({inline: false})),
            3: SectionCommandSpec("subsection", $$kw({inline: false})),
            4: SectionCommandSpec("paragraph", $$kw({inline: true})),
        },

        endnote_categories: [
            EndnoteCategory(
                'footnote',
                $$kw({ counter_formatter: footnote_counter_formatter,
                       heading_title: 'Footnotes',
                       endnote_command: 'footnote' })
            ),
        ],

        citation_counter_formatter: 'arabic',
        citation_delimiters: ['[', ']'],

        figure_filename_extensions: [ '', '.svg', '.png', '.jpg', '.jpeg' ],

        float_types: [
            FloatType('figure', 'Figure', $$kw({
                counter_formatter: 'Roman',
                content_handlers: ['includegraphics']
            })),
            FloatType('table', 'Table', $$kw({
                counter_formatter: 'Roman',
                content_handlers: ['cells', 'includegraphics']
            })),
        ],

        defterm_render_defterm_with_term: true,
        defterm_render_defterm_with_term_suffix: ': ',
    };
};




export var ZooFLMEnvironment = __class__(
    'ZooFLMEnvironment', // class name
    [ FLMEnvironment ], // base classes
    {
        // static members

        get __init__ () {return __get__ (this, function
        (self, zooflm_options) {

            zooflm_options = Object.assign({}, zooflm_default_options(), zooflm_options);

            const parsing_state = flmenvironment.standard_parsing_state($$kw(
                zooflm_options.parsing_state_options ?? {}
            ));

            self.citations_provider =
                zooflm_options.citations_provider ?? new CitationsProvider();
            self.ref_resolver =
                zooflm_options.ref_resolver
                ?? new RefResolver(zooflm_options.ref_resolver_options);

            self.graphics_collection =
                zooflm_options.graphics_collection ?? new FeatureZooGraphicsCollection();


            debug("ZooFLMEnvironment.__init__(): creating feature class instances ...");

            self.feature_baseformatting =
                new flm_feature_baseformatting.FeatureBaseFormatting();

            self.feature_href = new flm_feature_href.FeatureHref();

            self.feature_verbatim = new flm_feature_verbatim.FeatureVerbatim();

            self.feature_math = new flm_feature_math.FeatureMath();

            self.feature_headings = new flm_feature_headings.FeatureHeadings(
                $$kw({section_commands_by_level:
                      zooflm_options.heading_section_commands_by_level}),
            );
            self.feature_refs = new flm_feature_refs.FeatureRefs(
                [ self.ref_resolver ],
            );

            self.feature_endnotes = new flm_feature_endnotes.FeatureEndnotes(
                $$kw({categories: zooflm_options.endnote_categories})
            );
            
            self.feature_citations = new flm_feature_cite.FeatureExternalPrefixedCitations(
                $$kw({ external_citations_providers: [ self.citations_provider ],
                       counter_formatter: zooflm_options.citation_counter_formatter,
                       citation_delimiters: zooflm_options.citation_delimiters, })
            );

            self.feature_floats = new flm_feature_floats.FeatureFloats(
                $$kw({float_types: zooflm_options.float_types})
            );

            self.feature_defterm = new flm_feature_defterm.FeatureDefTerm();
            self.feature_defterm.render_defterm_with_term =
                zooflm_options.defterm_render_defterm_with_term;
            self.feature_defterm.render_defterm_with_term_suffix =
                zooflm_options.defterm_render_defterm_with_term_suffix;

            const features =  [
                self.feature_baseformatting,
                self.feature_href,
                self.feature_verbatim,
                self.feature_math,
                self.feature_headings,
                self.feature_refs,
                self.feature_endnotes,
                self.feature_citations,
                self.feature_floats,
                self.feature_defterm,
                self.graphics_collection,
            ];

            const parsing_mode_deltas = {
                // /// not sure how useful this is ...
                // 'safer-latexier': ParsingStateDelta( $$kw({
                //     set_attributes: {
                //         enable_comments: false,
                //         latex_inline_math_delimiters: [['$','$'], ['\\(', '\\)']],
                //         forbidden_characters: '',
                //     },
                // }) ),
                //
                // enable \begin{raw:html}...\end{raw:html},
                // \begin{raw:latex}...\end{raw:latex}, etc. TODO
                // 'enable-raw': ParsingStateDelta(
                //     // ...
                // ),
            };

            debug("ZooFLMEnvironment.__init__(): calling super constructor ...");

            __super__(ZooFLMEnvironment, '__init__')(
                self,
                features,
                parsing_state,
                new macrospec.LatexContextDb(),
                // $$kw({
                //     parsing_mode_deltas: parsing_mode_deltas,
                // })
            );


            const parsing_state_event_handler = 
                  new flmenvironment.FLMLatexWalkerMathContextParsingStateEventHandler();

            self.parsing_state_event_handler = parsing_state_event_handler

            self.environment_get_located_error_message =
                flmenvironment.standard_environment_get_located_error_message;
            
            // environment set up.
        });}

    }
);
