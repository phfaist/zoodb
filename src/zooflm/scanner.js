import debug_module from 'debug';
const debug = debug_module('zoodb.zooflm.scanner');

import { 
    __class__, __super__, __get__, //isinstance
} from './_flm-js/org.transcrypt.__runtime__.js';
import { $$kw, repr } from './_flm-js/py.js';

import { is_flm_fragment, pylatexenc_latexnodes_nodes } from './_environment.js';

//import {getfield, setfield, concatlistfield, get_field_schema} from '../util/getfield.js';
import {iter_object_fields_recursive} from '../util/objectinspector.js';




function _abbrev(s, {length}={length:80})
{
    if (s.length <= length) {
        return s;
    }
    return s.slice(0, length-3) + '…';
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

    // references to something that is elsewhere else in the zoo
    'references': [],
});


/**
 * @class ZooFLMScanner
 * 
 * Visitor object that registers any encountered definitions of referenceable
 * things (labels), references to external resources, and bibliographic
 * citations.
 *
 * Interface-wise, this class can be thought of as extending
 * `pylatexenc.latexnodes.nodes.LatexNodesVisitor`.
 */
export const ZooFLMScanner = __class__(
    'ZooFLMScanner', // class name
    [ pylatexenc_latexnodes_nodes.LatexNodesVisitor ], // base classes
    {
        // static members
        __module__: 'zoodb.zooflm.scanner',

        // constructor.
        get __init__ () {return __get__ (this, function
        (self, options)
        {
            __super__(ZooFLMScanner, '__init__')(self);

            self.encountered = make_scanned_types_empty();

            // store encountered items also by object type & object id (found from
            // resource_info), so that we can easily see what items are defined in a
            // specific object
            self.encountered_by_object = {};
    
            self.options = options ?? {};
    
            self._enable_by_type = Object.fromEntries(
                Object.keys(self.encountered).map( (scanned_type) => {
                    const enabled = self.options.enable?.[scanned_type] ?? true;
                    return [ scanned_type, enabled ];
                })
            );
        })},

        get get_encountered () {return __get__ (this, function
        (self, scanned_type, {object_type, object_id} = {})
        {
            if (!self._enable_by_type[scanned_type]) {
                throw new Error(
                    `get_encountered(): Scanning disabled for scanned_type ‘${scanned_type}’`
                );
            }

            let encountered;
            if (object_type != null) { // not null or undefined
                encountered = ( self.encountered_by_object[object_type]
                                ?? {} )[object_id]; // maybe undefined
            } else {
                encountered = self.encountered;
            }

            if (encountered == null) { // null or undefined
                return [];
            }

            if (!Object.hasOwn(encountered, scanned_type)) {
                throw new Error(`No such scanned type ‘${scanned_type}’`);
            }
            return encountered[scanned_type];
        })},

        get get_encountered_referenceables () {return __get__ (this, function
        (self, {kind, object_type, object_id} = {})
        {
            const encountered_referenceables =
                self.get_encountered('referenceables', {object_type, object_id});
            let referenceables_by_kind = [];
            for (const encountered_referenceable of encountered_referenceables) {
                if (!kind || kind === encountered_referenceable.kind) {
                    referenceables_by_kind.push(encountered_referenceable);
                }
            }
            return referenceables_by_kind;
        })},

        get get_encountered_references_to_labels () {return __get__ (this, function
        (self, ref_type_label_list)
        {
            const encountered_references = self.get_encountered('references');
            let filtered_references = [];
            for (const encountered_reference of encountered_references) {
                for (const [ref_type, ref_label] of ref_type_label_list) {
                    if (encountered_reference.ref_type === ref_type
                        && encountered_reference.ref_label === ref_label) {
                        filtered_references.push(encountered_reference);
                        break;
                    }
                }
            }
            return filtered_references;
        })},

    // ---

        get _register_encountered () {return __get__ (this, function
        (self, scanned_type, encountered_info)
        {
            self.encountered[scanned_type].push( encountered_info );

            if (encountered_info.encountered_in != null
                && encountered_info.encountered_in.resource_info != null) {

                const {object_type, object_id} = encountered_info.encountered_in.resource_info;
                if (!self.encountered_by_object[object_type]) {
                    self.encountered_by_object[object_type] = {};
                }
                if (!self.encountered_by_object[object_type][object_id]) {
                    self.encountered_by_object[object_type][object_id] =
                        make_scanned_types_empty();
                }
                self.encountered_by_object[object_type][object_id][scanned_type]
                    .push( encountered_info );
            }
        })},

    // ---

        get unregister_all_from_object () {return __get__ (this, function
        (self, object_type, object_id)
        {
            //debug(`Unregistering all encountered items from ‘${object_type}:${object_id}’`);

            // traverse self.encountered and remove all matching stored information
            for (const scanned_type of Object.keys(self.encountered)) {
                let j = 0;
                while (j < self.encountered[scanned_type].length) {
                    const encountered_info = self.encountered[scanned_type][j];
                    const {object_type: self_object_type, object_id: self_object_id} =
                        encountered_info.encountered_in.resource_info;
                    //debug(`... testing ${j} ‘${self_object_type}:${self_object_id}’ ?`, encountered_info);
                    if (object_type === self_object_type && object_id === self_object_id) {
                        // remove from array
                        self.encountered[scanned_type].splice(j, 1);
                        //debug(`... removed `, encountered_info);
                    } else {
                        ++j;
                    }
                }
            }
            // remove also from self.encountered_by_object
            if (self.encountered_by_object[object_type]) {
                delete self.encountered_by_object[object_type][object_id];
            }
        })},

    // ---

        get visit_macro_node () {return __get__ (this, function
        (self, node)
        {
            self._visit_callable(node)
            __super__(ZooFLMScanner, 'visit_macro_node')(self, node)
        })},

        get _visit_callable () {return __get__ (this, function
        (self, node)
        {
            //debug(`Visiting callable node ${repr(node)}`);
            if (Object.hasOwn(node, 'flmarg_cite_items') && self._enable_by_type.citations)
            {
                // it's a citation node with citations to track
                node.flmarg_cite_items.forEach( (cite_item) => {
                    const cite_prefix = cite_item.prefix;
                    const cite_key = cite_item.key;
                    self._register_encountered('citations', {
                        cite_prefix: cite_prefix,
                        cite_key: cite_key,
                        encountered_in: {
                            resource_info: node.latex_walker.resource_info,
                            what: node.latex_walker.what,
                        }
                    });
                } );
            }

            if (Object.hasOwn(node, 'flm_resources') && self._enable_by_type.resources)
            {
                // self node depends on external resources that might need to be
                // collected and packaged along with the output
                const resources = node.flm_resources;
                for (const resource of resources) {
                    self._register_encountered('resources', {
                        ...resource,
                        encountered_in: {
                            resource_info: node.latex_walker.resource_info,
                            what: node.latex_walker.what,
                        },
                    } );
                }
            }

            if (Object.hasOwn(node, 'flm_referenceable_infos')
                && self._enable_by_type.referenceables)
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
                                what: `extracted defterm body (${node.flmarg_term_flm_ref_label_verbatim}) in ${node.latex_walker.what}`,
                            })
                        )
                    ;
                }

                // it's something referenceable, like a defterm or a section heading
                for (const referenceable_info of node.flm_referenceable_infos) {

                    debug(`Found referenceable in node=${_abbrev(repr(node))}: labels =`,
                        repr(referenceable_info.labels));

                    self._register_encountered('referenceables', {
                        referenceable_info: referenceable_info,
                        encountered_in: {
                            resource_info: node.latex_walker.resource_info,
                            what: node.latex_walker.what,
                        },
                        ... extra_attributes,
                    } );

                }
            }

            if (Object.hasOwn(node, 'flm_ref_info') && self._enable_by_type.references)
            {
                const ref_list = node.flm_ref_info.ref_list;
                for (const [ref_type, ref_label] of ref_list) {
                    const resource_info = node.latex_walker.resource_info;
                    self._register_encountered('references', {
                        resource_info,
                        ref_type,
                        ref_label,
                        encountered_in: {
                            resource_info,
                            what: node.latex_walker.what,
                        },
                    } );
                }
            }
        })},

        get visit_environment_node () {return __get__ (this, function
        (self, node)
        {
            self._visit_callable(node);
            __super__(ZooFLMScanner, 'visit_environment_node')(self, node);
        })},

        get scan_fragment () {return __get__ (this, function
        (self, fragment, /*what=undefined*/)
        {
            fragment.start_node_visitor(self);
        })},

        get scan_object_with_schema () {return __get__ (this, function
        (self, object, schema, what=undefined)
        {
            visitor_scan_object(self, object, schema, what);
        })},

        get scan_zoo () {return __get__ (this, function
        (self, zoodbdata, options=undefined)
        {
            visitor_scan_zoo(self, zoodbdata, options);
        })},
    }
);



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
