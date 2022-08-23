import * as latexnodes_nodes from 'llm-js/pylatexenc.latexnodes.nodes.js';
import {LLMFragment} from 'llm-js/llm.llmfragment.js';

//import {getfield, setfield, concatlistfield, get_field_schema} from '../util/getfield.js';
import {iter_object_fields_recursive} from '../util/objectinspector.js';



export class ZooLLMScanner extends latexnodes_nodes.LatexNodesVisitor
{
    constructor()
    {
        super()
        this.encountered = {
            'citations': [],
            'graphics_paths': [],
            'refs': [],
            'referenceables': [],
        }
    }

    get_encountered(scanned_type)
    {
        if (!this.encountered.hasOwnProperty(scanned_type)) {
            throw new Error(`No such scanned type ‘${scanned_type}’`);
        }
        return this.encountered[scanned_type];
    }

    // get_encountered_in_resource_info(scanned_type, resource_info)
    // {
    //     return this.get_encountered(scanned_type).filter(
    //         (x) => (x.encountered_resource_info == resource_info)
    //     );
    // }

    get_encountered_referenceables_by_reftype(ref_type)
    {
        const encountered_referenceables = this.get_encountered('referenceables');

        return encountered_referenceables.reduce(
            (referenceables_by_reftype, encountered_referenceable) => {
                encountered_referenceable.referenceable_info.labels.forEach( 
                    (lblpair) => {
                        const [l_ref_type, l_ref_label] = lblpair;
                        if (l_ref_type == ref_type) {
                            referenceables_by_reftype.push(
                                {
                                    ref_type: l_ref_type,
                                    ref_label: l_ref_label,
                                    ...encountered_referenceable
                                }
                            );
                        }
                    }
                );
                return referenceable_dicts;
            },
            [] // referenceables_by_reftype initial value for reduce()
        );
    }

    // ---

    visit_macro_node(node)
    {
        if (node.hasOwnProperty('llmarg_graphics_path'))
        {
            // it's a graphics node, e.g., \includegraphics
            const graphics_options_value = node.llmarg_graphics_options_value;
            const graphics_path = node.llmarg_graphics_path;

            this.encountered['graphics_paths'].append(
                {
                    image_filename: graphics_path,
                    encountered_in: {
                        resource_info: node.latex_walker.resource_info,
                        what: node.latex_walker.what,
                    },
                }
            );
        }

        if (node.hasOwnProperty('llmarg_cite_items'))
        {
            // it's a citation node with citations to track
            node.llmarg_cite_items.forEach( (cite_item) => {
                const [cite_prefix, cite_key] = cite_item;
                this.encountered['citations'].append(
                    {
                        cite_prefix: cite_prefix,
                        cite_key: cite_key,
                        encountered_in: {
                            resource_info: node.latex_walker.resource_info,
                            what: node.latex_walker.what,
                        }
                    }
                );
            } );
        }

        this._visit_check_referenceable(node)

        super.visit_macro_node(node)
    }

    _visit_check_referenceable(node)
    {
        if (node.hasOwnProperty('llm_referenceable_info'))
        {
            // it's something referenceable, like a defterm or a section heading
            const [referenceable] = node.llm_referenceable_info;
            this.encountered['referenceables'].append(
                {
                    referenceable_info: node.llm_referenceable_info,
                    encountered_in: {
                        resource_info: node.latex_walker.resource_info,
                        what: node.latex_walker.what,
                    }
                }
            );
        }
    }

    visit_environment_node(node)
    {
        this._visit_check_referenceable(node);

        super.visit_environment_node(node);
    }

    scan_object_with_schema(obj, schema, what=undefined)
    {
        visitor_scan_schemadatalike_obj(this, obj, schema, what);
    }
};



export function visitor_scan_schemadatalike_obj(visitor, obj, schema, what=undefined)
{
    for (const {fieldname, fieldvalue, fieldschema}
         of iter_object_fields_recursive(obj, schema)) {

        if (fieldschema._llm) {
            if (! fieldvalue instanceof LLMFragment ) {
                throw new Error(
                    `Field ${fieldname} of object ${JSON.stringify(obj)} is not an `
                    + `LLM object: ${fieldvalue}`
                );
            }

            fieldvalue.start_node_visitor(this);
        }

    }

}


