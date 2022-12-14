import debug_module from 'debug';
const debug = debug_module('zoodb.zoollm._environment');

import path from 'path';

import {$$kw, repr} from './llm-js/py.js';
import {__class__, __super__, __get__, isinstance} from './llm-js/org.transcrypt.__runtime__.js';

import { ParsingStateDelta } from './llm-js/pylatexenc.latexnodes.js';

import { LLMFragment } from './llm-js/llm.llmfragment.js';


import * as llmstd from './llm-js/llm.llmstd.js';

import * as llm_feature from './llm-js/llm.feature.js';
import * as llm_feature_math from './llm-js/llm.feature.math.js';
import * as llm_feature_headings from './llm-js/llm.feature.headings.js';
import * as llm_feature_endnotes from './llm-js/llm.feature.endnotes.js';
import * as llm_feature_refs from './llm-js/llm.feature.refs.js';
import * as llm_feature_cite from './llm-js/llm.feature.cite.js';
import * as llm_feature_floats from './llm-js/llm.feature.floats.js';
import * as llm_feature_defterm from './llm-js/llm.feature.defterm.js';
import * as llm_feature_graphics from './llm-js/llm.feature.graphics.js';


export const SectionCommandSpec = llm_feature_headings.FeatureHeadings.SectionCommandSpec;

export const EndnoteCategory = llm_feature_endnotes.EndnoteCategory;

export const ReferenceableInfo = llm_feature_refs.ReferenceableInfo;
export const RefInstance = llm_feature_refs.RefInstance;

export const FloatType = llm_feature_floats.FloatType;

export const GraphicsResource = llm_feature_graphics.GraphicsResource;


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




export function is_llm_fragment(obj)
{
    return isinstance(obj, LLMFragment);
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
        debug(`adding ref: ${ref_type}:${ref_label}`); // -> `, ref_instance);

        this.ref_instance_database[ref_type][ref_label] = ref_instance;

        //debug(`added ref, ref_instance_database =`, this.ref_instance_database);
    }
    
    get_ref(ref_type, ref_label, resource_info, render_context)
    {
        debug(`Resolving ref ‘${ref_type}:${ref_label}’ ...`);

        if (!this.ref_instance_database.hasOwnProperty(ref_type)) {
            throw new Error(
                `Invalid reference, unknown reference prefix ‘${ref_type}’ `
                + `in request for ‘${ref_type}:${ref_label}’ in ${resource_info}`
            );
        }
        if (!this.ref_instance_database[ref_type].hasOwnProperty(ref_label)) {
            throw new Error(
                `Invalid reference ‘${ref_type}:${ref_label}’ `
                + `in ${resource_info}`
            );
        }

        const ref_instance = this.ref_instance_database[ref_type][ref_label];

        debug(`Got ref ‘${ref_type}:${ref_label}’: ${repr(ref_instance)}`);

        if (this.target_href_resolver != null) {
            return RefInstance( $$kw(
                Object.assign({}, ref_instance.asdict(), {
                    target_href: this.target_href_resolver(ref_instance, render_context)
                })
            ) );
        }

        return ref_instance;
    }

    // load/save DB
    dump_ref_instance_database()
    {
        return {
            ref_instance_database: this.ref_instance_database
        };
    }
    load_ref_instance_database(data)
    {
        this.ref_instance_database = data.ref_instance_database;
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

    add_citation(cite_prefix, cite_key, full_citation_llm_text)
    {
        if (!this.citations_database.hasOwnProperty(cite_prefix)) {
            this.citations_database[cite_prefix] = {};
        }
        if (this.citations_database[cite_prefix].hasOwnProperty(cite_key)) {
            throw new Error(
                `There is already a citation registered for ‘${cite_prefix}:${cite_key}’`
            );
        }
        this.citations_database[cite_prefix][cite_key] = full_citation_llm_text;
    }

    set_citations(iterable)
    {
        this.clear_citations();
        for (const {cite_prefix, cite_key, citation_text} of iterable) {
            this.add_citation(cite_prefix, cite_key, citation_text);
        }
    }

    get_citation_full_text_llm(cite_prefix, cite_key, resource_info)
    {
        if (!this.citations_database.hasOwnProperty(cite_prefix)) {
            throw new Error(
                `There is no citation registered for prefix ‘${cite_prefix}’ in query `
                + `for ‘${cite_prefix}:${cite_key}’ in ${resource_info}`
            );
        }
        if (!this.citations_database[cite_prefix].hasOwnProperty(cite_key)) {
            throw new Error(
                `There is no citation registered for key ‘${cite_prefix}:${cite_key}’ `
                + `in ${resource_info}`
            );
        }

        return this.citations_database[cite_prefix][cite_key];
    }
};


// we need to define this class the Transcrypt way because we want to inherit a
// Python-transcrypted class
export const FeatureZooGraphicsCollection = __class__(
    'FeatureZooGraphicsCollection', // class name
    [ llm_feature.Feature ], // base classes
    {
        // static members

 	__module__: 'zoodb.zoollm._environment',

        // static member - nested class definition
        RenderManager:  __class__(
            'RenderManager', // class name
            [ llm_feature.Feature.RenderManager ], // base classes
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





export function zoollm_default_options(footnote_counter_formatter='alph')
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




export var ZooLLMEnvironment = __class__(
    'ZooLLMEnvironment', // class name
    [ llmstd.LLMStandardEnvironment ], // base classes
    {
        // static members

        get __init__ () {return __get__ (this, function
        (self, zoollm_options) {

            zoollm_options ??= zoollm_default_options();

            self.citations_provider =
                zoollm_options.citations_provider ?? new CitationsProvider();
            self.ref_resolver =
                zoollm_options.ref_resolver
                ?? new RefResolver(zoollm_options.ref_resolver_options);
            
            self.graphics_collection =
                zoollm_options.graphics_collection ?? new FeatureZooGraphicsCollection();


            self.feature_math = new llm_feature_math.FeatureMath();

            self.feature_headings = new llm_feature_headings.FeatureHeadings(
                $$kw({section_commands_by_level:
                      zoollm_options.heading_section_commands_by_level}),
            )
            self.feature_refs = new llm_feature_refs.FeatureRefs(
                $$kw({external_ref_resolvers: [self.ref_resolver]}),
            )

            self.feature_endnotes = new llm_feature_endnotes.FeatureEndnotes(
                $$kw({categories: zoollm_options.endnote_categories})
            )
            
            self.feature_citations = new llm_feature_cite.FeatureExternalPrefixedCitations(
                $$kw({ external_citations_provider: self.citations_provider,
                       counter_formatter: zoollm_options.citation_counter_formatter,
                       citation_delimiters: zoollm_options.citation_delimiters, })
            )

            self.feature_floats = new llm_feature_floats.FeatureFloats(
                $$kw({float_types: zoollm_options.float_types})
            )

            self.feature_defterm = new llm_feature_defterm.FeatureDefTerm()
            self.feature_defterm.render_defterm_with_term =
                zoollm_options.defterm_render_defterm_with_term;
            self.feature_defterm.render_defterm_with_term_suffix =
                zoollm_options.defterm_render_defterm_with_term_suffix;

            const features =  [
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

            __super__(ZooLLMEnvironment, '__init__')(
                self,
                $$kw({
                    features: features,
                    parsing_mode_deltas: parsing_mode_deltas,
                })
            );
            
            // environment set up.
        });}

    }
);
