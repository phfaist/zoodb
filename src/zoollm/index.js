import _zoologger from '../_zoologger.js';
let logger = _zoologger.child({module:'zoodb.zoollm'});

import path from 'path'; // path.join()

import {$$kw, repr} from 'llm-js/py.js';
export {$$kw, repr};

import { ParsingStateDelta } from 'llm-js/pylatexenc.latexnodes.js';

import * as llmstd from 'llm-js/llm.llmstd.js';
import * as llm_feature from 'llm-js/llm.feature.js';
import * as llm_feature_headings from 'llm-js/llm.feature.headings.js';
import * as llm_feature_endnotes from 'llm-js/llm.feature.endnotes.js';
import * as llm_feature_refs from 'llm-js/llm.feature.refs.js';
import * as llm_feature_cite from 'llm-js/llm.feature.cite.js';
import * as llm_feature_floats from 'llm-js/llm.feature.floats.js';
import * as llm_feature_defterm from 'llm-js/llm.feature.defterm.js';
import * as llm_feature_graphics from 'llm-js/llm.feature.graphics.js';

import * as llm_fragmentrenderer_html from 'llm-js/llm.fragmentrenderer.html.js'; 
import * as llm_fragmentrenderer_text from 'llm-js/llm.fragmentrenderer.text.js';



export const SectionCommandSpec = llm_feature_headings.FeatureHeadings.SectionCommandSpec;

export const EndnoteCategory = llm_feature_endnotes.EndnoteCategory;

export const RefInstance = llm_feature_refs.RefInstance;

export const FloatType = llm_feature_floats.FloatType;

export const GraphicsResource = llm_feature_graphics.GraphicsResource;


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
            FloatType('figure', 'Figure', $$kw({counter_formatter: 'Roman'})),
            FloatType('table', 'Table', $$kw({counter_formatter: 'Roman'})),
        ],

        defterm_render_defterm_with_term: true,
        defterm_render_defterm_with_term_suffix: ': ',
    };
};


export class ZooLLMResourceInfo
{
    /// source_path is used to resolve access to external files like graphics
    /// for figures
    constructor(object_type, object_id, source_path)
    {
        this.object_type = object_type;
        this.object_id = object_id;
        this.source_path = source_path;
    }

    toString()
    {
        return `${this.object_type} ‘${this.object_id}’ in ‘${this.source_path}’`;
    }
};




export class ExternalRefResolver
{
    constructor(config)
    {
        this.config = config || {};
        // e.g., config = { ref_types: [ 'code', 'term', 'topic' ] }

        this.ref_instance_database = {};
        if (this.config.ref_types) {
            this.config.ref_types.forEach( (ref_type) => {
                this.ref_instance_database[ref_type] = {};
            } );
        }
    }

    add_ref(ref_instance)
    {
        const {ref_type, ref_label} = ref_instance;
        if ( typeof ref_type == 'undefined' || !ref_label) {
            throw new Error(`Invalid ref_type:ref_label pair ‘${ref_type}:${ref_label}’`);
        }
        if (!this.ref_instance_database.hasOwnProperty(ref_type)) {
            if (typeof this.config.ref_types != 'undefined') {
                throw new Error(
                    `Invalid ref prefix ‘${ref_type}’ in ‘${ref_type}:${ref_label}’`
                );
            }
            // if config.ref_types is undefined, we dynamically grow the dict
            // to include whatever ref_type was given
            this.ref_instance_database[ref_type] = {};
        }
        if (this.ref_instance_database[ref_type].hasOwnProperty(ref_label)) {
            throw new Error(
                `Ref target ‘${ref_type}:${ref_label}’ already exists in ref instance `
                + `database `
                + `(‘${JSON.stringify(this.ref_instance_database[ref_type][ref_label])}’)`
            );
        }
        this.ref_instance_database[ref_type][ref_label] = ref_instance;
    }
    
    get_ref(ref_type, ref_label, resource_info)
    {
        if (!this.ref_instance_database.hasOwnProperty(ref_type)) {
            throw new Error(
                `No reference information stored for unknown ref type ‘${ref_type}’ `
                + `in request for ‘${ref_type}:${ref_label}’ in ${resource_info}`
            );
        }
        if (!this.ref_instance_database[ref_type].hasOwnProperty(ref_label)) {
            throw new Error(
                `No reference information stored for ${ref_type} label ‘${ref_label}’ `
                + `in ${resource_info}`
            );
        }

        return this.ref_instance_database[ref_type][ref_label];
    }
};


export class CitationsProvider
{
    constructor()
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


export class FeatureZooGraphicsCollection extends llm_feature.Feature
{
    static feature_name = 'graphics_resource_provider';

    constructor()
    {
        super();

        // mapping of source paths (w.r.t. user-defined fixed reference dir) to
        // final (relative or absolute) URLs to use
        this.graphics_collection = {};

        // expose static property as instance properties, too
        this.feature_name = this.constructor.feature_name;
    }

    add_graphics(source_path, graphics_resource)
    {
        if (this.graphics_collection.hasOwnProperty(source_path)) {
            throw new Error(`Graphics collection already has a graphics registered for path `
                            + `‘${source_path}’ (registered target `
                            + `‘${this.graphics_collection[source_path].url}’, new target `
                            + `‘${graphics_resource.url}’)`);
        }

        this.graphics_collection[source_path] = graphics_resource;
    }

    set_collection(collection)
    {
        Object.entries(collection).forEach( (grobjpair) => {
            const [source_path, graphics_resource] = grobjpair;
            this.add_graphics(source_path, graphics_resource);
        } );
    }


    get_graphics_resource(graphics_path, resource_info)
    {
        // compose full source path using the resource_info
        const source_path = path.join(resource_info.source_path, graphics_path);
        if (!this.graphics_collection.hasOwnProperty(source_path)) {
            throw new Error(
                `No such graphics ‘${graphics_path}’ relative to ${resource_info}`
            );
        }

        return this.graphics_collection[source_path];
    }
};



function prep_llm_environ_features(zoollm_options)
{
    zoollm_options ||= zoollm_default_options();

    let props = {};

    props.external_citations_provider =
        zoollm_options.external_citations_provider || new CitationsProvider;
    props.external_ref_resolver =
        zoollm_options.external_ref_resolver
        || new ExternalRefResolver(zoollm_options.external_ref_resolver_config);
    
    props.graphics_collection =
        zoollm_options.graphics_collection || new FeatureZooGraphicsCollection();


    props.feature_headings = new llm_feature_headings.FeatureHeadings(
        $$kw({section_commands_by_level:
              zoollm_options.heading_section_commands_by_level}),
    )
    props.feature_refs = new llm_feature_refs.FeatureRefs(
        $$kw({external_ref_resolvers: [props.external_ref_resolver]}),
    )

    props.feature_endnotes = new llm_feature_endnotes.FeatureEndnotes(
        $$kw({categories: zoollm_options.endnote_categories})
    )
    
    props.feature_citations = new llm_feature_cite.FeatureExternalPrefixedCitations(
        $$kw({ external_citations_provider: props.external_citations_provider,
               counter_formatter: zoollm_options.citation_counter_formatter,
               citation_delimiters: zoollm_options.citation_delimiters, })
    )

    props.feature_floats = new llm_feature_floats.FeatureFloatsIncludeGraphicsOnly(
        $$kw({float_types: zoollm_options.float_types})
    )

    props.feature_defterm = new llm_feature_defterm.FeatureDefTerm()
    props.feature_defterm.render_defterm_with_term =
        zoollm_options.defterm_render_defterm_with_term;
    props.feature_defterm.render_defterm_with_term_suffix =
        zoollm_options.defterm_render_defterm_with_term_suffix;

    return props;
}


//export class ZooLLMEnvironment extends llmstd.LLMStandardEnvironment
export function make_zoo_llm_environment(zoollm_options)
{
    // since we cannot assign to this.xyz before calling the superclass
    // constructor, we prepare a temporary object (simple dictionary) with
    // the values we'd like to assign, and we'll assign them to 'this'
    // later below, after calling the superclass constructor.
    const _feature_props = prep_llm_environ_features(zoollm_options);

    const features =  [
        _feature_props.feature_headings,
        _feature_props.feature_refs,
        _feature_props.feature_endnotes,
        _feature_props.feature_citations,
        _feature_props.feature_floats,
        _feature_props.feature_defterm,
        _feature_props.graphics_collection,
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

        // enable \begin{raw:html}...\end{raw:html},
        // \begin{raw:latex}...\end{raw:latex}, etc. TODO
        'enable-raw': ParsingStateDelta(
            // ...
        ),
    };

    const zoollm_environ = llmstd.LLMStandardEnvironment(
        $$kw({
            features: features,
            parsing_mode_deltas: parsing_mode_deltas,
        })
    );
    
    // copy all properties from _feature_props. to the new object
    for (const [prop, value] of Object.entries(_feature_props)) {
        zoollm_environ[prop] = value;
    }

    return zoollm_environ;
}



function _is_local_url(urlstring)
{
    return urlstring.startsWith('#')
        || ( urlstring.startsWith('/') && ! urlstring.startsWith('//') );
}


export class ZooHtmlFragmentRenderer extends llm_fragmentrenderer_html.HtmlFragmentRenderer
{

    static use_link_target_blank(urlstring)
    {
        return ! _is_local_url(urlstring);
    }

    static inline_heading_add_space = false;

    static html_blocks_joiner = "::BLOCKJOINER::";
}



// llm_fragmentrenderer_text.TextFragmentRenderer


