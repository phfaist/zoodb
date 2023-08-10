import debug_module from 'debug';
const debug = debug_module('zoodb.zooflm.scanner');

import {$$kw, repr} from './_flm-js/py.js';

import {is_flm_fragment} from './_environment.js';

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

    visit(/*node*/) { }

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

}

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



/**
 * Visitor object that registers any encountered definitions of referenceable
 * things (labels), references to external resources, and bibliographic
 * citations.
 *
 * Interface-wise, this class can be thought of as extending
 * `pylatexenc.latexnodes.nodes.LatexNodesVisitor`.
 */
export class ZooFLMScanner extends LatexNodesVisitorJS
{
    constructor(/*options*/)
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

        if (!Object.hasOwn(encountered, scanned_type)) {
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
                return referenceables_by_reftype;
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
        if (Object.hasOwn(node, 'flmarg_cite_items'))
        {
            // it's a citation node with citations to track
            node.flmarg_cite_items.forEach( (cite_item) => {
                const cite_prefix = cite_item.prefix;
                const cite_key = cite_item.key;
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

        if (Object.hasOwn(node, 'flm_resources'))
        {
            // this node depends on external resources that might need to be
            // collected and packaged along with the output
            const resources = node.flm_resources;
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

        if (Object.hasOwn(node, 'flm_referenceable_infos'))
        {
            let extra_attributes = {};
            // special treatment for some nodes, to add additional information
            // to the encountered referenceable info object structure
            if (node.environmentname === 'defterm') {
                extra_attributes.defterm_body_flm =
                    node.latex_walker.flm_environment.make_fragment(
                        node.nodelist,
                        $$kw({
                            is_block_level: true,
                            resource_info: node.latex_walker.resource_info,
                            what: `defterm body`,
                        })
                    )
                ;
            }

            // it's something referenceable, like a defterm or a section heading
            for (const referenceable_info of node.flm_referenceable_infos) {

                debug(`Found referenceable in node=${_abbrev(repr(node))}: labels =`,
                      repr(referenceable_info.labels));

                this._register_encountered('referenceables', {
                    referenceable_info: referenceable_info,
                    encountered_in: {
                        resource_info: node.latex_walker.resource_info,
                        what: node.latex_walker.what,
                    },
                    ... extra_attributes,
                } );

            }
        }
    }

    visit_environment_node(node)
    {
        this._visit_callable(node);

        super.visit_environment_node(node);
    }

    scan_fragment(fragment, /*what=undefined*/)
    {
        fragment.start_node_visitor(this);
    }

    scan_object_with_schema(object, schema, what=undefined)
    {
        visitor_scan_object(this, object, schema, what);
    }

    scan_zoo(zoodbdata, options=undefined)
    {
        visitor_scan_zoo(this, zoodbdata, options);
    }
}



/**
 * Run a :class:`ZooFLMScanner` object on all FLM fields of a given object
 *
 * @param visitor - the :class:`ZooFLMScanner` object instance
 * @param obj - the object with the data fields; it should conform to the given `schema`
 * @param schema - the object schema, accessible for instance in a ZooDb
 *      object instance as `zoodb_instance.schema(object_type)`
 * @param what - brief label/description of object this is, only used for debug messages
 */
export function visitor_scan_object(visitor, obj, schema, what=undefined)
{
    debug(`Scanning object's FLM content (${what})`);

    for (const {fieldname, fieldvalue, fieldschema}
         of iter_object_fields_recursive(obj, schema)) {

        //debug(`\tfield: ${fieldname}`);

        if (fieldschema._flm) {
            if ( ! is_flm_fragment(fieldvalue) ) {
                throw new Error(
                    `Field ${fieldname} of object ${JSON.stringify(obj)} is not an `
                    + `FLM object, even though its schema claims so: ${fieldvalue}`
                );
            }

            fieldvalue.start_node_visitor(visitor);
        }
    }
}

/**
 * Run a :class:`ZooFLMScanner` object on all FLM fields of a zoo instance.
 *
 * The (optional) `options` argument is of the form ``{ object_types: ..., }``.
 * The option `object_types` is an array of object types to which the scanner
 * will be applied; if false or null then all existing object types are used.
 *
 * @param visitor - the :class:`ZooFLMScanner` object instance
 * @param zoodbdata - the ZooDb instance or database content.  Schemas and
 *     objects for a given `object_type` are accessed as `.schemas[object_type]` and
 *     `.objects[object_type]`.
 * @param options - an object, see above
 *
 */
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
