/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 09:47:10
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000035 */ import {get_safe_target_id} from './flm.feature.refs.js';
/* 000033 */ import {Feature} from './flm.feature._base.js';
/* 000030 */ import * as counter from './flm.counter.js';
/* 000026 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000020 */ import {FLMEnvironmentSpecBase, helper_collect_labels, label_arg} from './flm.flmspecinfo.js';
/* 000014 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000013 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LatexWalkerLocatedError, latexnodes_nodes, Feature, get_safe_target_id, FLMArgumentSpec, LatexEnvironmentBodyContentsParser, ParsingStateDeltaExtendLatexContextDb, label_arg, ParsedArgumentsInfo, FLMEnvironmentSpecBase, MacroSpec, latexnodes_parsers, helper_collect_labels, counter};
/* 000001 */ var __name__ = 'flm.feature.enumeration';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000040 */ export var _default_enumeration_counter_formatter = [dict ({'template': '${arabic}.'}), dict ({'template': '(${roman})'}), dict ({'template': '${alph}-'})];
/* 000047 */ export var Enumeration =  __class__ ('Enumeration', [FLMEnvironmentSpecBase], {
/* 000047 */ 	__module__: __name__,
/* 000064 */ 	is_block_level: true,
/* 000066 */ 	body_contents_is_block_level: true,
/* 000068 */ 	allowed_in_standalone_mode: true,
/* 000072 */ 	allowed_item_label_prefixes: tuple (['item']),
/* 000075 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000075 */ 		var counter_formatter = null;
/* 000075 */ 		var annotations = null;
/* 000075 */ 		var kwargs = dict ();
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 				delete kwargs.__kwargtrans__;
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000085 */ 		__call__ (__call__ (__super__, null, Enumeration, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000085 */ 			var __accu0__ = latexnodes_parsers;
/* 000085 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000085 */ 		}) (), __kwargtrans__ ({argname: 'tag_template'}))]}, kwargs)));
/* 000094 */ 		if (__t__ (counter_formatter === null)) {
/* 000095 */ 			var counter_formatter = _default_enumeration_counter_formatter;
/* 000095 */ 		}
/* 000096 */ 		self.counter_formatter = counter_formatter;
/* 000097 */ 		self.annotations = annotations;
/* 000097 */ 	});},
/* 000099 */ 	_fields: tuple (['environmentname', 'counter_formatter', 'annotations']),
/* 000101 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000108 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'item', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'custom_tag'})), label_arg]}))]}))}))}));
/* 000108 */ 	});},
/* 000116 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000118 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_enumeration_items'))) {
/* 000119 */ 			// pass;
/* 000123 */ 			return node;
/* 000123 */ 		}
/* 000127 */ 		var item_nodelists = (function () {
/* 000127 */ 			var __accu0__ = node.nodelist;
/* 000127 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000127 */ 				if (arguments.length) {
/* 000127 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 							switch (__attrib0__) {
/* 000127 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 							}
/* 000127 */ 						}
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 				else {
/* 000127 */ 				}
/* 000128 */ 				return __t__ ((function () {
/* 000128 */ 					var __accu1__ = n;
/* 000128 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000128 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000128 */ 			}), __kwargtrans__ ({keep_separators: true, call_make_nodelist: false}));
/* 000128 */ 		}) ();
/* 000133 */ 		var enumeration_items = [];
/* 000134 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000134 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000134 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000134 */ 			var j = __left0__ [0];
/* 000134 */ 			var item_nodelist = __left0__ [1];
/* 000135 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000135 */ 				continue;
/* 000135 */ 			}
/* 000137 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000138 */ 			if (__t__ (item_macro === null)) {
/* 000138 */ 				continue;
/* 000138 */ 			}
/* 000142 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && (__t__ (__t__ ((function () {
/* 000142 */ 				var __accu0__ = item_macro;
/* 000142 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000143 */ 			}) ()) && __eq__ ((function () {
/* 000143 */ 				var __accu0__ = item_macro.chars;
/* 000143 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000145 */ 			}) (), '')) || __t__ ((function () {
/* 000145 */ 				var __accu0__ = item_macro;
/* 000145 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000145 */ 			}) ()) && item_macro.spec.is_paragraph_break_marker))) {
/* 000145 */ 				continue;
/* 000145 */ 			}
/* 000152 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000152 */ 				var __accu0__ = item_macro;
/* 000152 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000152 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000154 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000154 */ 				__except0__.__cause__ = null;
/* 000154 */ 				throw __except0__;
/* 000154 */ 			}
/* 000158 */ 			var item_content_nodelist = (function () {
/* 000158 */ 				var __accu0__ = item_macro.latex_walker;
/* 000158 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000158 */ 			}) ();
/* 000162 */ 			// pass;
/* 000168 */ 			(function () {
/* 000168 */ 				var __accu0__ = enumeration_items;
/* 000168 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000168 */ 			}) ();
/* 000168 */ 		}
/* 000172 */ 		node.flm_enumeration_items = enumeration_items;
/* 000173 */ 		return node;
/* 000173 */ 	});},
/* 000176 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000178 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000180 */ 		var node_args = (function () {
/* 000180 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000180 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000180 */ 		}) ();
/* 000184 */ 		var state = (function () {
/* 000184 */ 			var __accu0__ = render_context;
/* 000184 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000184 */ 		}) ();
/* 000185 */ 		var nested_depth = (function () {
/* 000185 */ 			var __accu0__ = state;
/* 000185 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000185 */ 		}) ();
/* 000188 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000189 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000190 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000191 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000191 */ 			}
/* 000192 */ 			else {
/* 000193 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000193 */ 			}
/* 000193 */ 		}
/* 000195 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000195 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000195 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000195 */ 		}) ())) {
/* 000196 */ 			var tag_template_chars = (function () {
/* 000196 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000196 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000196 */ 			}) ();
/* 000197 */ 			var counter_formatter_spec = tag_template_chars;
/* 000197 */ 		}
/* 000199 */ 		var counter_formatter = (function () {
/* 000199 */ 			var __accu0__ = counter;
/* 000199 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000199 */ 		}) ();
/* 000204 */ 		var items_custom_tags = dict ({});
/* 000205 */ 		var items_custom_labels = dict ({});
/* 000206 */ 		var items_nodelists = [];
/* 000207 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_enumeration_items);
/* 000207 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000207 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000207 */ 			var j = __left0__ [0];
/* 000207 */ 			var iteminfo = __left0__ [1];
/* 000208 */ 			var __left0__ = iteminfo;
/* 000208 */ 			var item_macro = __left0__ [0];
/* 000208 */ 			var item_content_nodelist = __left0__ [1];
/* 000209 */ 			(function () {
/* 000209 */ 				var __accu0__ = items_nodelists;
/* 000209 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000209 */ 			}) ();
/* 000211 */ 			var item_node_args = (function () {
/* 000211 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000211 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag', 'label']));
/* 000211 */ 			}) ();
/* 000215 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000215 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000215 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000215 */ 			}) ())) {
/* 000216 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000216 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000216 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000216 */ 				}) ());
/* 000216 */ 			}
/* 000217 */ 			if (__t__ (__t__ (__in__ ('label', item_node_args)) && (function () {
/* 000217 */ 				var __accu0__ = __getitem__ (item_node_args, 'label');
/* 000217 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000217 */ 			}) ())) {
/* 000218 */ 				__setitem__ (items_custom_labels, __add__ (1, j), __call__ (helper_collect_labels, null, __getitem__ (item_node_args, 'label'), self.allowed_item_label_prefixes));
/* 000218 */ 			}
/* 000218 */ 		}
/* 000223 */ 		var the_counter_formatter = function (n) {
/* 000223 */ 			if (arguments.length) {
/* 000223 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 						switch (__attrib0__) {
/* 000223 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						}
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 			else {
/* 000223 */ 			}
/* 000224 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000225 */ 				return __getitem__ (items_custom_tags, n);
/* 000225 */ 			}
/* 000226 */ 			return __call__ (counter_formatter, null, n);
/* 000226 */ 		};
/* 000228 */ 		var enum_items_target_ids = dict ({});
/* 000229 */ 		if (__t__ (__t__ (__call__ (len, null, items_custom_labels)) && (function () {
/* 000229 */ 			var __accu0__ = render_context;
/* 000229 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000229 */ 		}) ())) {
/* 000231 */ 			var mgr_enum = (function () {
/* 000231 */ 				var __accu0__ = render_context;
/* 000231 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'enumeration');
/* 000231 */ 			}) ();
/* 000232 */ 			var mgr_refs = (function () {
/* 000232 */ 				var __accu0__ = render_context;
/* 000232 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000232 */ 			}) ();
/* 000235 */ 			var __iterable0__ = (function () {
/* 000235 */ 				var __accu0__ = items_custom_labels;
/* 000235 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000235 */ 			}) ();
/* 000235 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000235 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000235 */ 				var n = __left0__ [0];
/* 000235 */ 				var labels = __left0__ [1];
/* 000237 */ 				if (__t__ (__eq__ (__call__ (len, null, labels), 0))) {
/* 000237 */ 					continue;
/* 000237 */ 				}
/* 000240 */ 				if (__t__ (__in__ (n, items_custom_tags))) {
/* 000241 */ 					var item_tag_flm_text = __getitem__ (item_custom_tags, n);
/* 000241 */ 				}
/* 000242 */ 				else {
/* 000244 */ 					var item_tag_flm_text = __call__ (the_counter_formatter, null, n);
/* 000244 */ 				}
/* 000246 */ 				var __left0__ = __getitem__ (labels, 0);
/* 000246 */ 				var ref_type_0 = __left0__ [0];
/* 000246 */ 				var ref_label_0 = __left0__ [1];
/* 000248 */ 				var enum_item_tgtid = __call__ (get_safe_target_id, null, ref_type_0, ref_label_0);
/* 000249 */ 				var target_href = __add__ ('#', enum_item_tgtid);
/* 000250 */ 				__setitem__ (enum_items_target_ids, n, enum_item_tgtid);
/* 000252 */ 				var __iterable1__ = labels;
/* 000252 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000252 */ 					var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000252 */ 					var ref_type = __left0__ [0];
/* 000252 */ 					var ref_label = __left0__ [1];
/* 000253 */ 					(function () {
/* 000253 */ 						var __accu0__ = mgr_refs;
/* 000253 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: item_tag_flm_text, node: node, target_href: target_href}));
/* 000253 */ 					}) ();
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000260 */ 		var item_target_id_generator = function (n) {
/* 000260 */ 			if (arguments.length) {
/* 000260 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 						switch (__attrib0__) {
/* 000260 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						}
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 			else {
/* 000260 */ 			}
/* 000261 */ 			if (__t__ (__in__ (n, enum_items_target_ids))) {
/* 000262 */ 				return __getitem__ (enum_items_target_ids, n);
/* 000262 */ 			}
/* 000263 */ 			return null;
/* 000263 */ 		};
/* 000265 */ 		var __withid0__ = (function () {
/* 000265 */ 			var __accu0__ = render_context;
/* 000265 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000265 */ 		}) ();
/* 000265 */ 		try {
/* 000265 */ 			__withid0__.__enter__ ();
/* 000268 */ 			var result = (function () {
/* 000268 */ 				var __accu0__ = fragment_renderer;
/* 000268 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth, target_id_generator: item_target_id_generator}));
/* 000268 */ 			}) ();
/* 000268 */ 			__withid0__.__exit__ ();
/* 000268 */ 		}
/* 000268 */ 		catch (__except0__) {
/* 000268 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000268 */ 				throw __except0__;
/* 000268 */ 			}
/* 000268 */ 		}
/* 000276 */ 		return result;
/* 000276 */ 	});},
/* 000279 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000283 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000284 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000284 */ 			var __accu0__ = recomposer;
/* 000284 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000284 */ 		}) ());
/* 000286 */ 		var __iterable0__ = node.flm_enumeration_items;
/* 000286 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000286 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000286 */ 			var item_macro = __left0__ [0];
/* 000286 */ 			var item_content_nodelist = __left0__ [1];
/* 000288 */ 			var item_node_args = (function () {
/* 000288 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000288 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag', 'label']));
/* 000288 */ 			}) ();
/* 000292 */ 			var s = __call__ (__iadd__, null, s, '\\item ');
/* 000294 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000294 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000294 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000294 */ 			}) ())) {
/* 000295 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000295 */ 					var __accu0__ = recomposer;
/* 000296 */ 					return __call__ (__accu0__.subrecompose, __accu0__, (function () {
/* 000296 */ 						var __accu1__ = __getitem__ (item_node_args, 'custom_tag');
/* 000296 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000296 */ 					}) ());
/* 000296 */ 				}) ());
/* 000296 */ 			}
/* 000298 */ 			if (__t__ (__t__ (__in__ ('label', item_node_args)) && (function () {
/* 000298 */ 				var __accu0__ = __getitem__ (item_node_args, 'label');
/* 000298 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000298 */ 			}) ())) {
/* 000299 */ 				var items_custom_labels = __call__ (helper_collect_labels, null, __getitem__ (item_node_args, 'label'), self.allowed_item_label_prefixes);
/* 000303 */ 				var __iterable1__ = items_custom_labels;
/* 000303 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000303 */ 					var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000303 */ 					var ref_type = __left0__ [0];
/* 000303 */ 					var ref_label = __left0__ [1];
/* 000304 */ 					var safe_label_info = (function () {
/* 000304 */ 						var __accu0__ = recomposer;
/* 000304 */ 						return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000304 */ 					}) ();
/* 000307 */ 					var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000307 */ 				}
/* 000307 */ 			}
/* 000309 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000309 */ 				var __accu0__ = recomposer;
/* 000309 */ 				return __call__ (__accu0__.subrecompose, __accu0__, item_content_nodelist);
/* 000309 */ 			}) ());
/* 000309 */ 		}
/* 000311 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000312 */ 		return s;
/* 000312 */ 	});}
/* 000312 */ });
/* 000316 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000316 */ 	__module__: __name__,
/* 000323 */ 	feature_name: 'enumeration',
/* 000324 */ 	feature_title: 'Enumeration and itemization lists',
/* 000326 */ 	feature_default_config: dict ({'enumeration_environments': dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})})}),
/* 000336 */ 	DocumentManager: null,
/* 000337 */ 	RenderManager: null,
/* 000340 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000340 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000340 */ 			var enumeration_environments = null;
/* 000340 */ 		};
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000342 */ 		if (__t__ (enumeration_environments === null)) {
/* 000347 */ 			var enumeration_environments = (function () {
/* 000347 */ 				var __accu0__ = self.feature_default_config;
/* 000347 */ 				return __call__ (__accu0__.py_get, __accu0__, 'enumeration_environments', dict ({}));
/* 000347 */ 			}) ();
/* 000347 */ 		}
/* 000348 */ 		self.enumeration_environments = enumeration_environments;
/* 000348 */ 	});},
/* 000350 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000351 */ 			var __accu0__ = [];
/* 000358 */ 			var __iterable0__ = (function () {
/* 000358 */ 				var __accu1__ = __call__ (dict, null, self.enumeration_environments);
/* 000358 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000358 */ 			}) ();
/* 000358 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000358 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000358 */ 				var envname = __left0__ [0];
/* 000358 */ 				var envinfo = __left0__ [1];
/* 000358 */ 				(function () {
/* 000358 */ 					var __accu1__ = __accu0__;
/* 000353 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000353 */ 				}) ();
/* 000353 */ 			}
/* 000353 */ 			return __accu0__;
/* 000353 */ 		}) ()}));
/* 000353 */ 	});}
/* 000353 */ });
/* 000365 */ export var FeatureClass = FeatureEnumeration;
/* 000007 */ 
//# sourceMappingURL=flm.feature.enumeration.map