import debug_module from 'debug';
const debug = debug_module('zoodb.zoollm.scanner');

import {$$kw, repr} from '#llm-js/py.js';
import * as latexnodes_nodes from '#llm-js/pylatexenc.latexnodes.nodes.js';
import {LLMFragment} from '#llm-js/llm.llmfragment.js';

//import {getfield, setfield, concatlistfield, get_field_schema} from '../util/getfield.js';
import {iter_object_fields_recursive} from '../util/objectinspector.js';



function _abbrev(s, {length}={length:80})
{
    if (s.length <= length) {
        return s;
    }
    return s.slice(0, length-3) + '…';
}


// --- since it doesn't look like we can inherit a Transcrypt-ed class using
// JavaScript classes, we'll replicate all necessary definitions here directly:
// ---
class LatexNodesVisitorJS
{
    constructor() { }

    visit(node) { }

    visit_chars_node(node) { this.visit(node); }
    visit_group_node(node) { this.visit(node); }
    visit_comment_node(node) {this.visit(node); }
    visit_macro_node(node) { this.visit(node); }
    visit_environment_node(node) { this.visit(node); }
    visit_specials_node(node) { this.visit(node); }
    visit_math_node(node) { this.visit(node); }
    visit_node_list(nodes) { this.visit(nodes); }
    visit_parsed_arguments(parsed_args) { this.visit(parsed_args); }
    visit_unknown_node(node) { this.visit(node); }

    // ---

    start(node) {
        // r"""
        // A shortcut for calling `node.accept_node_visitor()` with this visitor
        // object.  It's a convenient starting point for your visiting pattern:
        //
        // .. code::
        //
        //    visitor = MyNodeVisitor()
        //    visitor.start(node)
        //
        // You probably shouldn't override this method in your visitor subclass.
        // """
        node.accept_node_visitor(this);
    }

};


const make_scanned_types_empty = () => ({
    // citation prefixes & keys for which we'll probably have to fetch
    // info & format full citations
    'citations': [],

    // resources that might need to be collected & pacakged along with
    // output
    'resources': [],
    
    // items that can be referenced from elsewhere in the zoo
    'referenceables': [],
});


// extends latexnodes_nodes.LatexNodesVisitor
export class ZooLLMScanner extends LatexNodesVisitorJS
{
    constructor(options)
    {
        super();

        this.encountered = make_scanned_types_empty();

        // store encountered items also by object type & object id (found from
        // resource_info), so that we can easily see what items are defined in a
        // specific object
        this.encountered_by_object = {};
    }

    get_encountered(scanned_type, {object_type, object_id} = {})
    {
        let encountered;
        if (object_type != null) { // not null or undefined
            encountered = ( this.encountered_by_object[object_type]
                            ?? {} )[object_id]; // maybe undefined
        } else {
            encountered = this.encountered;
        }

        if (encountered == null) { // null or undefined
            return [];
        }

        if (!encountered.hasOwnProperty(scanned_type)) {
            throw new Error(`No such scanned type ‘${scanned_type}’`);
        }
        return encountered[scanned_type];
    }

    get_encountered_referenceables_by_reftype(ref_type, {object_type, object_id} = {})
    {
        const encountered_referenceables =
              this.get_encountered('referenceables', {object_type, object_id});

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

    _register_encountered(scanned_type, encountered_info)
    {
        this.encountered[scanned_type].push( encountered_info );

        if (encountered_info.encountered_in != null
            && encountered_info.encountered_in.resource_info != null) {

            const {object_type, object_id} = encountered_info.encountered_in.resource_info;
            if (!this.encountered_by_object[object_type]) {
                this.encountered_by_object[object_type] = {};
            }
            if (!this.encountered_by_object[object_type][object_id]) {
                this.encountered_by_object[object_type][object_id] =
                    make_scanned_types_empty();
            }
            this.encountered_by_object[object_type][object_id][scanned_type]
                .push( encountered_info );
        }
    }

    // ---

    unregister_all_from_object(object_type, object_id)
    {
        //debug(`Unregistering all encountered items from ‘${object_type}:${object_id}’`);

        // traverse this.encountered and remove all matching stored information
        for (const scanned_type of Object.keys(this.encountered)) {
            let j = 0;
            while (j < this.encountered[scanned_type].length) {
                const encountered_info = this.encountered[scanned_type][j];
                const {object_type: this_object_type, object_id: this_object_id} =
                      encountered_info.encountered_in.resource_info;
                //debug(`... testing ${j} ‘${this_object_type}:${this_object_id}’ ?`, encountered_info);
                if (object_type === this_object_type && object_id === this_object_id) {
                    // remove from array
                    this.encountered[scanned_type].splice(j, 1);
                    //debug(`... removed `, encountered_info);
                } else {
                    ++j;
                }
            }
        }
        // remove also from this.encountered_by_object
        delete this.encountered_by_object[object_type][object_id];
    }

    // ---

    visit_macro_node(node)
    {
        this._visit_callable(node)

        super.visit_macro_node(node)
    }

    _visit_callable(node)
    {
        //debug(`Visiting callable node ${repr(node)}`);
        if (node.hasOwnProperty('llmarg_cite_items'))
        {
            // it's a citation node with citations to track
            node.llmarg_cite_items.forEach( (cite_item) => {
                const [cite_prefix, cite_key] = cite_item;
                this._register_encountered('citations', {
                    cite_prefix: cite_prefix,
                    cite_key: cite_key,
                    encountered_in: {
                        resource_info: node.latex_walker.resource_info,
                        what: node.latex_walker.what,
                    }
                });
            } );
        }

        if (node.hasOwnProperty('llm_resources'))
        {
            // this node depends on external resources that might need to be
            // collected and packaged along with the output
            const resources = node.llm_resources;
            for (const resource of resources) {
                this._register_encountered('resources', {
                    ...resource,
                    encountered_in: {
                        resource_info: node.latex_walker.resource_info,
                        what: node.latex_walker.what,
                    },
                } );
            }
        }

        if (node.hasOwnProperty('llm_referenceable_info'))
        {
            // it's something referenceable, like a defterm or a section heading
            const referenceable_info = node.llm_referenceable_info;

            debug(`Found referenceable in node=${_abbrev(repr(node))}: labels =`,
                  repr(referenceable_info.labels));

            this._register_encountered('referenceables', {
                referenceable_info: referenceable_info,
                encountered_in: {
                    resource_info: node.latex_walker.resource_info,
                    what: node.latex_walker.what,
                }
            } );
        }
    }

    visit_environment_node(node)
    {
        this._visit_callable(node);

        super.visit_environment_node(node);
    }

    scan_fragment(fragment, what=undefined)
    {
        fragment.start_node_visitor(this);
    }

    scan_object_with_schema(schema, what=undefined)
    {
        visitor_scan_object(this, object, schema, what);
    }

    scan_zoo(zoodbdata, options=undefined)
    {
        visitor_scan_zoo(this, zoodbdata, options);
    }
};



export function visitor_scan_object(visitor, obj, schema, what=undefined)
{
    debug(`Scanning object's LLM content (${what})`);

    for (const {fieldname, fieldvalue, fieldschema}
         of iter_object_fields_recursive(obj, schema)) {

        //debug(`\tfield: ${fieldname}`);

        if (fieldschema._llm) {
            if ( ! fieldvalue instanceof LLMFragment ) {
                throw new Error(
                    `Field ${fieldname} of object ${JSON.stringify(obj)} is not an `
                    + `LLM object, even though its schema claims so: ${fieldvalue}`
                );
            }

            fieldvalue.start_node_visitor(visitor);
        }
    }
}

export function visitor_scan_zoo(visitor, zoodbdata, options)
{
    options = options || {};

    const object_types = options.object_types || Object.keys(zoodbdata.objects);
    

    for (const object_type of object_types) {
        const schema = zoodbdata.schemas[object_type];
        for (const [objid,obj] of Object.entries(zoodbdata.objects[object_types])) {
            visitor_scan_object(visitor, obj, schema, `${object_type}:${objid}`);
        }
    }
}
