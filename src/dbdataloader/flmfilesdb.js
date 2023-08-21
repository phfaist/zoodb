import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader.flmfilesdb');

import jsyaml from 'js-yaml';

import loMerge from 'lodash/merge.js';

import * as zooflm from '../zooflm/index.js';

import { getfield, setfield } from '../util/getfield.js';
//import { escapeRegExp } from '../util/rx.js';

import { YamlDbDataLoader } from './yamldb.js';


//
// -----------------------------------------------------------------------------
// Special FLM parser definitions for our \begin{field}...\end{field} constructs
// -----------------------------------------------------------------------------
//

const { $$kw, repr, __class__, __super__, __get__ } = zooflm;
const LatexCharsGroupParser = zooflm.pylatexenc_latexnodes_parsers.LatexCharsGroupParser;

const FlmFieldValueEnvironmentSpec = __class__(
    'FlmFieldValueEnvironmentSpec', // class name
    [ zooflm.flm_feature_verbatim.VerbatimSpecInfo ], // base classes
    {
        // static members
        __module__: 'zoodb.dbdataloader.flmfilesdb',

        // constructor.
        get __init__ () {return __get__ (this, function
        (self, ...args) {
            const [environmentname] = zooflm.decode_kwargs(
                args,
                ['environmentname'],
            );

            __super__(FlmFieldValueEnvironmentSpec, '__init__')(self, $$kw({
                spec_node_parser_type: 'environment',
                environmentname: environmentname,
                is_block_level: true,
                arguments_spec_list: [
                    zooflm.flm_flmenvironment.FLMArgumentSpec($$kw({
                        parser: LatexCharsGroupParser($$kw({
                            delimiters: ['{', '}'],
                            enable_comments: false,
                            enable_groups: false,
                        })),
                        argname: 'fieldname',
                        flm_doc: 'The fully qualified name of the Zoo DB field whose value '
                        + 'is specified in the environment contents',
                    })),
                ],
            }));
        });},       
    }
);


// ### NO NO NO, we want a VERBATIM parser!! We aren't even sure that the field
// ### contents is valid FLM (we don't even check the schema currently)!  Plus
// ### this would be much faster!!

//
// // we need to define this class the Transcrypt way because we want to inherit a
// // Python-transcrypted class.
// const FlmFieldValueEnvironmentSpec = __class__(
//     'FlmFieldValueEnvironmentSpec', // class name
//     [ zooflm.flm_flmspecinfo.FLMEnvironmentSpecBase ], // base classes
//     {
//         // static members
//         __module__: 'zoodb.dbdataloader.flmfilesdb',

//         // constructor.
//         get __init__ () {return __get__ (this, function
//         (self, ...args) {
//             const [environmentname, main_body_parsing_state] = zooflm.decode_kwargs(
//                 args,
//                 ['environmentname', 'main_body_parsing_state'],
//             );

//             __super__(FlmFieldValueEnvironmentSpec, '__init__')(self, $$kw({
//                 environmentname: environmentname,
//                 arguments_spec_list: [
//                     zooflm.flm_flmenvironment.FLMArgumentSpec(
//                         parser=LatexCharsGroupParser($$kw({
//                             delimiters: ['{', '}'],
//                             enable_comments: false,
//                             enable_groups: false,
//                         })),
//                         argname='fieldname',
//                         flm_doc='The fully qualified name of the Zoo DB field whose value '
//                         + 'is specified in the environment contents',
//                     )
//                 ],
//             }));
//             self.main_body_parsing_state = main_body_parsing_state;
//         });},
//        
//         get make_body_parsing_state_delta () {return __get__(this, function
//         (self, /*...args*/) {
//             // const [token, nodeargd, arg_parsing_state_delta, latex_walker] =
//             //       zooflm.decode_kwargs(
//             //           args,
//             //           ['token', 'nodeargd', 'arg_parsing_state_delta', 'latex_walker']
//             //       );
//             return pylatexenc_latexnodes.ParsingStateDeltaReplaceParsingState(
//                 self.main_body_parsing_state
//             );
//         });},
//     }
// );

 




//
// -----------------------------------------------------------------------------
// The loader class
// -----------------------------------------------------------------------------
//



/**
 * Load object data from a collection of FLM source files with optional YAML
 * front matter.
 *
 * Includes validation of the input object data against the provided schemas.
 *
 * Doc........
 *
 * Configuration options .............
 *
 * See also :class:`makeStandardZooDbYamlDataLoader` for a simplified loading.
 */
export class FlmFilesDbDataLoader extends YamlDbDataLoader
{
    constructor(config)
    {
        config = loMerge({
            object_defaults: {
                file_name_match: /\.flm$/i,
            },
            flm_field_environmentname: 'field',
            flm_field_value_trim: true,
        }, config);

        super(config);

        if (!this.config.flm_field_value_trim) {
            this.flm_field_value_trim = (x) => x;
        } else if (this.config.flm_field_value_trim === true) {
            this.flm_field_value_trim = (x) => (
                x.replace(/^[ \t]*\n?/, '').replace(/\n?[ \t]*$/, '')
            );
        } else {
            this.flm_field_value_trim = this.config.flm_field_value_trim;
        }

        // install our parser definitions as a parsing-mode in the zoo's environment

        let latex_context = new zooflm.pylatexenc_macrospec.LatexContextDb();
        latex_context.add_context_category('flmfiles_content_fields', $$kw({
            macros: [],
            environments: [
                new FlmFieldValueEnvironmentSpec($$kw({
                    environmentname: this.config.flm_field_environmentname,
                }))
            ],
            specials: [],
        }));
        latex_context.freeze();

        this.flmfiles_content_parsing_state = new zooflm.FLMParsingState($$kw({
            is_block_level: true,
            latex_context: latex_context,
            enable_comments: true,
            enable_groups: true,
            comment_start: '%%',
            latex_inline_math_delimiters: [],
            latex_display_math_delimiters: [],
        }));

        this.flmfiles_environment = new zooflm.flm_flmenvironment.FLMEnvironment($$kw({
            features: [],
            parsing_state: this.flmfiles_content_parsing_state,
            latex_context: null,
        }));
        this.flmfiles_environment.environment_get_located_error_message =
            zooflm.flm_flmenvironment.standard_environment_get_located_error_message;

    }

    async parse_file_data(file_content, objectconfig, root_path, rel_path)
    {
        debug(`Reading FLM file ‘${rel_path}’`);

        if (typeof file_content !== 'string') {
            file_content = file_content.toString('utf8');
        }

        // parse any front matter
        const frontmatter_rx_match = /^\n*---\s*\n((.|\n)*?)\n---\s*($|\n)/.exec(file_content);

        let obj_data = {};

        let body_text = file_content;
        if (frontmatter_rx_match != null) {
            const all_match = frontmatter_rx_match[0];
            const frontmatter_text = frontmatter_rx_match[1];
            obj_data = jsyaml.load( frontmatter_text );
            body_text = file_content.slice( all_match.length );

            // debug(`... got front matter data = `, obj_data);
        }
        // else {
        //   debug(`... no front matter`);
        // }

        // Don't parse fields in regexps in a crude way, as I'd have initially
        // thought, because it's complex!  We'd also need to track intermediate
        // comments, we should allow environment closing not at the beginning of
        // a line (but not in a comment, etc.), and it's simpler to directly use
        // our FLM parser, that's what it's for!
        //
        // However, we don't have a clean way of passing forward fragments to
        // the flm dbprocessors while keeping the raw source clean for database
        // dumps.  That's why we only keep the source for now.  More
        // resource-efficient handling of this is TODO!
        //
        // Plus we're not even sure at this point that the field values should
        // themselves be valid FLM content.  We don't check the schema!  So at
        // this point, we use a parser with verbatim blocks.

        let fragment = null;
        try {
            fragment = this.flmfiles_environment.make_fragment(body_text);
        } catch (err) {
            let errmsgstr = null;
            // if it's a LatexWalkerLocatedError, get a precise error message -> 
            if (zooflm.is_pylatexenc_located_error(err)) {
                errmsgstr = zooflm.format_pylatexenc_located_error(err);
            } else {
                errmsgstr = `${err}`;
            }
            console.error(`*** FLM file parsing error in ‘${rel_path}’: ${errmsgstr}`);
            throw err;
        }

        // pick out the given fields in the body text!

        for (const node of fragment.nodes) {
            if ( ! node.isNodeType(zooflm.pylatexenc_latexnodes_nodes.LatexEnvironmentNode)
                 || (node.environmentname !== this.config.flm_field_environmentname) ) {

                // see if there is a nonempty node? that would be an error.

                if (node.isNodeType(zooflm.pylatexenc_latexnodes_nodes.LatexCommentNode)) {
                    // all good, a comment
                    continue;
                }
                if (node.isNodeType(zooflm.pylatexenc_latexnodes_nodes.LatexCharsNode)) {
                    if (node.chars.trim() === '') {
                        // all good, simple whitespace chars
                        continue;
                    }
                }
                
                let [lineno, colno] = node.latex_walker.pos_to_lineno_colno(node.pos);
                let errmsg = (
                    `Invalid content in .flm file at line ${lineno} col ${colno}. `
                    + `The flm file root content should only contain blocks `
                    + `\\begin{${this.config.flm_field_environmentname}}{<fieldname>} ... `
                    + `\\end{${this.config.flm_field_environmentname}}.  Invalid node: `
                    + `${repr(node)}`
                );
                console.error(`Invalid node found in .flm file content!`, errmsg);
                throw new Error(errmsg);
            }

            const node_args = zooflm.pylatexenc_latexnodes.ParsedArgumentsInfo(node.nodeargd)
                .get_all_arguments_info( ['fieldname',] , );
            const field_name = node_args['fieldname'].get_content_as_chars();

            const existing_value = getfield(obj_data, field_name);
            if (existing_value != null) {
                throw new Error(
                    `In ‘${rel_path}’: field ‘${field_name}’ specified both in `
                    + `front matter and as in the FLM file contents`
                );
            }
            
            const field_value = this.flm_field_value_trim( node.nodelist.latex_verbatim() );

            // set the value
            setfield(obj_data, field_name, () => field_value);
            //debug(`Set ‘${field_name}’ to “${field_value}”`);
        }

        return obj_data;
    }


}

