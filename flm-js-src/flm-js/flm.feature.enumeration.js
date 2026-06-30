/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000015 */ var logging = {};
/* 000015 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000047 */ import {get_safe_target_id} from './flm.feature.refs.js';
/* 000045 */ import {Feature} from './flm.feature._base.js';
/* 000042 */ import * as counter from './flm.counter.js';
/* 000038 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000032 */ import {FLMEnvironmentSpecBase, helper_collect_labels, label_arg} from './flm.flmspecinfo.js';
/* 000027 */ import {Any, Mapping, Sequence, TypeDictWithLatexContextDefinitions, TypeEnumerationCounterFormatterInput, TypeEnumerationCounterFormatterSingleSpec} from './flm._typing_helpers.js';
/* 000021 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000020 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000019 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000018 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as __module_logging__ from './logging.js';
/* 000015 */ __nest__ (logging, '', __module_logging__);
/* 000015 */ export {Feature, latexnodes_parsers, get_safe_target_id, TypeEnumerationCounterFormatterSingleSpec, Mapping, TypeEnumerationCounterFormatterInput, label_arg, LatexEnvironmentBodyContentsParser, counter, MacroSpec, latexnodes_nodes, ParsedArgumentsInfo, TypeDictWithLatexContextDefinitions, FLMEnvironmentSpecBase, FLMArgumentSpec, Any, LatexWalkerLocatedError, helper_collect_labels, ParsingStateDeltaExtendLatexContextDb, Sequence};
/* 000001 */ var __name__ = 'flm.feature.enumeration';
/* 000016 */ export var logger = (function () {
/* 000016 */ 	var __accu0__ = logging;
/* 000016 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000016 */ }) ();
/* 000052 */ var _default_enumeration_counter_formatter = [dict ({'template': '${arabic}.'}), dict ({'template': '(${roman})'}), dict ({'template': '${alph}-'})];
/* 000059 */ export var Enumeration =  __class__ ('Enumeration', [FLMEnvironmentSpecBase], {
/* 000059 */ 	__module__: __name__,
/* 000078 */ 	is_block_level: true,
/* 000080 */ 	body_contents_is_block_level: true,
/* 000082 */ 	allowed_in_standalone_mode: true,
/* 000086 */ 	allowed_item_label_prefixes: tuple (['item']),
/* 000089 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000089 */ 		var counter_formatter = null;
/* 000089 */ 		var annotations = null;
/* 000089 */ 		var kwargs = dict ();
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 				delete kwargs.__kwargtrans__;
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000109 */ 		__call__ (__call__ (__super__, null, Enumeration, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000109 */ 			var __accu0__ = latexnodes_parsers;
/* 000109 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000109 */ 		}) (), __kwargtrans__ ({argname: 'tag_template'}))]}, kwargs)));
/* 000118 */ 		if (__t__ (counter_formatter === null)) {
/* 000119 */ 			var counter_formatter = _default_enumeration_counter_formatter;
/* 000119 */ 		}
/* 000120 */ 		self.counter_formatter = counter_formatter;
/* 000121 */ 		self.annotations = annotations;
/* 000121 */ 	});},
/* 000123 */ 	_fields: tuple (['environmentname', 'counter_formatter', 'annotations']),
/* 000125 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000132 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'item', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'custom_tag'})), label_arg]}))]}))}))}));
/* 000132 */ 	});},
/* 000140 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000142 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_enumeration_items'))) {
/* 000143 */ 			// pass;
/* 000147 */ 			return node;
/* 000147 */ 		}
/* 000151 */ 		var item_nodelists = (function () {
/* 000151 */ 			var __accu0__ = node.nodelist;
/* 000151 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000151 */ 				if (arguments.length) {
/* 000151 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 							switch (__attrib0__) {
/* 000151 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 							}
/* 000151 */ 						}
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 				else {
/* 000151 */ 				}
/* 000152 */ 				return __t__ ((function () {
/* 000152 */ 					var __accu1__ = n;
/* 000152 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000152 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000152 */ 			}), __kwargtrans__ ({keep_separators: true, call_make_nodelist: false}));
/* 000152 */ 		}) ();
/* 000157 */ 		var enumeration_items = [];
/* 000158 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000158 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 			var j = __left0__ [0];
/* 000158 */ 			var item_nodelist = __left0__ [1];
/* 000159 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000159 */ 				continue;
/* 000159 */ 			}
/* 000161 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000162 */ 			if (__t__ (item_macro === null)) {
/* 000162 */ 				continue;
/* 000162 */ 			}
/* 000166 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && (__t__ (__t__ ((function () {
/* 000166 */ 				var __accu0__ = item_macro;
/* 000166 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000167 */ 			}) ()) && __eq__ ((function () {
/* 000167 */ 				var __accu0__ = item_macro.chars;
/* 000167 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000169 */ 			}) (), '')) || __t__ ((function () {
/* 000169 */ 				var __accu0__ = item_macro;
/* 000169 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000169 */ 			}) ()) && item_macro.spec.is_paragraph_break_marker))) {
/* 000169 */ 				continue;
/* 000169 */ 			}
/* 000176 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000176 */ 				var __accu0__ = item_macro;
/* 000176 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000176 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000178 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000178 */ 				__except0__.__cause__ = null;
/* 000178 */ 				throw __except0__;
/* 000178 */ 			}
/* 000182 */ 			var item_content_nodelist = (function () {
/* 000182 */ 				var __accu0__ = item_macro.latex_walker;
/* 000182 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000182 */ 			}) ();
/* 000186 */ 			// pass;
/* 000192 */ 			(function () {
/* 000192 */ 				var __accu0__ = enumeration_items;
/* 000192 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000192 */ 			}) ();
/* 000192 */ 		}
/* 000196 */ 		node.flm_enumeration_items = enumeration_items;
/* 000197 */ 		return node;
/* 000197 */ 	});},
/* 000200 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000202 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000204 */ 		var node_args = (function () {
/* 000204 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000204 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000204 */ 		}) ();
/* 000208 */ 		var state = (function () {
/* 000208 */ 			var __accu0__ = render_context;
/* 000208 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000208 */ 		}) ();
/* 000209 */ 		var nested_depth = (function () {
/* 000209 */ 			var __accu0__ = state;
/* 000209 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000209 */ 		}) ();
/* 000212 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000213 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000214 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000215 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000215 */ 			}
/* 000216 */ 			else {
/* 000217 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000217 */ 			}
/* 000217 */ 		}
/* 000219 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000219 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000219 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000219 */ 		}) ())) {
/* 000220 */ 			var tag_template_chars = (function () {
/* 000220 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000220 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000220 */ 			}) ();
/* 000221 */ 			var counter_formatter_spec = tag_template_chars;
/* 000221 */ 		}
/* 000223 */ 		var counter_formatter = (function () {
/* 000223 */ 			var __accu0__ = counter;
/* 000223 */ 			return __call__ (__accu0__.parse_counter_format_num, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000223 */ 		}) ();
/* 000228 */ 		var items_custom_tags = dict ({});
/* 000229 */ 		var items_custom_labels = dict ({});
/* 000230 */ 		var items_nodelists = [];
/* 000231 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_enumeration_items);
/* 000231 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000231 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 			var j = __left0__ [0];
/* 000231 */ 			var iteminfo = __left0__ [1];
/* 000232 */ 			var __left0__ = iteminfo;
/* 000232 */ 			var item_macro = __left0__ [0];
/* 000232 */ 			var item_content_nodelist = __left0__ [1];
/* 000233 */ 			(function () {
/* 000233 */ 				var __accu0__ = items_nodelists;
/* 000233 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000233 */ 			}) ();
/* 000235 */ 			var item_node_args = (function () {
/* 000235 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000235 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag', 'label']));
/* 000235 */ 			}) ();
/* 000239 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000239 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000239 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000239 */ 			}) ())) {
/* 000240 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000240 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000240 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000240 */ 				}) ());
/* 000240 */ 			}
/* 000241 */ 			if (__t__ (__t__ (__in__ ('label', item_node_args)) && (function () {
/* 000241 */ 				var __accu0__ = __getitem__ (item_node_args, 'label');
/* 000241 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000241 */ 			}) ())) {
/* 000242 */ 				__setitem__ (items_custom_labels, __add__ (1, j), __call__ (helper_collect_labels, null, __getitem__ (item_node_args, 'label'), self.allowed_item_label_prefixes));
/* 000242 */ 			}
/* 000242 */ 		}
/* 000247 */ 		var the_counter_formatter = function (n) {
/* 000247 */ 			if (arguments.length) {
/* 000247 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 						switch (__attrib0__) {
/* 000247 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						}
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 			else {
/* 000247 */ 			}
/* 000248 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000249 */ 				return __getitem__ (items_custom_tags, n);
/* 000249 */ 			}
/* 000250 */ 			return __call__ (counter_formatter, null, n);
/* 000250 */ 		};
/* 000252 */ 		var enum_items_target_ids = dict ({});
/* 000253 */ 		if (__t__ (__t__ (__call__ (len, null, items_custom_labels)) && (function () {
/* 000253 */ 			var __accu0__ = render_context;
/* 000253 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000253 */ 		}) ())) {
/* 000256 */ 			var mgr_refs = (function () {
/* 000256 */ 				var __accu0__ = render_context;
/* 000256 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000256 */ 			}) ();
/* 000259 */ 			var __iterable0__ = (function () {
/* 000259 */ 				var __accu0__ = items_custom_labels;
/* 000259 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000259 */ 			}) ();
/* 000259 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000259 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000259 */ 				var n = __left0__ [0];
/* 000259 */ 				var labels = __left0__ [1];
/* 000261 */ 				if (__t__ (__eq__ (__call__ (len, null, labels), 0))) {
/* 000261 */ 					continue;
/* 000261 */ 				}
/* 000264 */ 				if (__t__ (__in__ (n, items_custom_tags))) {
/* 000265 */ 					var item_tag_flm_text = __getitem__ (items_custom_tags, n);
/* 000265 */ 				}
/* 000266 */ 				else {
/* 000268 */ 					var item_tag_flm_text = __call__ (the_counter_formatter, null, n);
/* 000268 */ 				}
/* 000270 */ 				var __left0__ = __getitem__ (labels, 0);
/* 000270 */ 				var ref_type_0 = __left0__ [0];
/* 000270 */ 				var ref_label_0 = __left0__ [1];
/* 000272 */ 				var enum_item_tgtid = __call__ (get_safe_target_id, null, ref_type_0, ref_label_0);
/* 000273 */ 				var target_href = __add__ ('#', enum_item_tgtid);
/* 000274 */ 				__setitem__ (enum_items_target_ids, n, enum_item_tgtid);
/* 000276 */ 				var __iterable1__ = labels;
/* 000276 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000276 */ 					var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000276 */ 					var ref_type = __left0__ [0];
/* 000276 */ 					var ref_label = __left0__ [1];
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu0__ = mgr_refs;
/* 000277 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: item_tag_flm_text, node: node, target_href: target_href}));
/* 000277 */ 					}) ();
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000284 */ 		var item_target_id_generator = function (n) {
/* 000284 */ 			if (arguments.length) {
/* 000284 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 						switch (__attrib0__) {
/* 000284 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						}
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 			else {
/* 000284 */ 			}
/* 000285 */ 			if (__t__ (__in__ (n, enum_items_target_ids))) {
/* 000286 */ 				return __getitem__ (enum_items_target_ids, n);
/* 000286 */ 			}
/* 000287 */ 			return null;
/* 000287 */ 		};
/* 000289 */ 		var __withid0__ = (function () {
/* 000289 */ 			var __accu0__ = render_context;
/* 000289 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000289 */ 		}) ();
/* 000289 */ 		try {
/* 000289 */ 			__withid0__.__enter__ ();
/* 000292 */ 			var result = (function () {
/* 000292 */ 				var __accu0__ = fragment_renderer;
/* 000292 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth, target_id_generator: item_target_id_generator}));
/* 000292 */ 			}) ();
/* 000292 */ 			__withid0__.__exit__ ();
/* 000292 */ 		}
/* 000292 */ 		catch (__except0__) {
/* 000292 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000292 */ 				throw __except0__;
/* 000292 */ 			}
/* 000292 */ 		}
/* 000300 */ 		return result;
/* 000300 */ 	});},
/* 000303 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000307 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000308 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000308 */ 			var __accu0__ = recomposer;
/* 000308 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000308 */ 		}) ());
/* 000310 */ 		var __iterable0__ = node.flm_enumeration_items;
/* 000310 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 			var item_macro = __left0__ [0];
/* 000310 */ 			var item_content_nodelist = __left0__ [1];
/* 000312 */ 			var item_node_args = (function () {
/* 000312 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000312 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag', 'label']));
/* 000312 */ 			}) ();
/* 000316 */ 			var s = __call__ (__iadd__, null, s, '\\item');
/* 000318 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000318 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000318 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000318 */ 			}) ())) {
/* 000321 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('[{', (function () {
/* 000321 */ 					var __accu0__ = recomposer;
/* 000322 */ 					return __call__ (__accu0__.subrecompose, __accu0__, (function () {
/* 000322 */ 						var __accu1__ = __getitem__ (item_node_args, 'custom_tag');
/* 000322 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000322 */ 					}) ());
/* 000322 */ 				}) ()), '}]'));
/* 000322 */ 			}
/* 000325 */ 			else {
/* 000327 */ 				var s = __call__ (__iadd__, null, s, ' ');
/* 000327 */ 			}
/* 000328 */ 			if (__t__ (__t__ (__in__ ('label', item_node_args)) && (function () {
/* 000328 */ 				var __accu0__ = __getitem__ (item_node_args, 'label');
/* 000328 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000328 */ 			}) ())) {
/* 000329 */ 				var items_custom_labels = __call__ (helper_collect_labels, null, __getitem__ (item_node_args, 'label'), self.allowed_item_label_prefixes);
/* 000329 */ 				assert (items_custom_labels !== null);
/* 000334 */ 				var __iterable1__ = items_custom_labels;
/* 000334 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000334 */ 					var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000334 */ 					var ref_type = __left0__ [0];
/* 000334 */ 					var ref_label = __left0__ [1];
/* 000335 */ 					var safe_label_info = (function () {
/* 000335 */ 						var __accu0__ = recomposer;
/* 000335 */ 						return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000335 */ 					}) ();
/* 000338 */ 					var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000338 */ 				}
/* 000338 */ 			}
/* 000340 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000340 */ 				var __accu0__ = recomposer;
/* 000340 */ 				return __call__ (__accu0__.subrecompose, __accu0__, item_content_nodelist);
/* 000340 */ 			}) ());
/* 000340 */ 		}
/* 000342 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000343 */ 		return s;
/* 000343 */ 	});}
/* 000343 */ });
/* 000357 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000357 */ 	__module__: __name__,
/* 000364 */ 	feature_name: 'enumeration',
/* 000365 */ 	feature_title: 'Enumeration and itemization lists',
/* 000367 */ 	feature_default_config: dict ({'enumeration_environments': dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null}), 'description': dict ({'counter_formatter': ['<??>', '<??>', '<??>']})})}),
/* 000381 */ 	DocumentManager: null,
/* 000382 */ 	RenderManager: null,
/* 000385 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000385 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000385 */ 			var enumeration_environments = null;
/* 000385 */ 		};
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000387 */ 		if (__t__ (enumeration_environments === null)) {
/* 000392 */ 			var enumeration_environments = (function () {
/* 000392 */ 				var __accu0__ = self.feature_default_config;
/* 000392 */ 				return __call__ (__accu0__.py_get, __accu0__, 'enumeration_environments', dict ({}));
/* 000392 */ 			}) ();
/* 000392 */ 		}
/* 000393 */ 		self.enumeration_environments = enumeration_environments;
/* 000393 */ 	});},
/* 000395 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		return dict ({'environments': (function () {
/* 000396 */ 			var __accu0__ = [];
/* 000403 */ 			var __iterable0__ = (function () {
/* 000403 */ 				var __accu1__ = __call__ (dict, null, self.enumeration_environments);
/* 000403 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000403 */ 			}) ();
/* 000403 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000403 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000403 */ 				var envname = __left0__ [0];
/* 000403 */ 				var envinfo = __left0__ [1];
/* 000403 */ 				(function () {
/* 000403 */ 					var __accu1__ = __accu0__;
/* 000398 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000398 */ 				}) ();
/* 000398 */ 			}
/* 000398 */ 			return __accu0__;
/* 000398 */ 		}) ()});
/* 000398 */ 	});}
/* 000398 */ });
/* 000410 */ export var FeatureClass = FeatureEnumeration;
/* 000015 */ 
//# sourceMappingURL=flm.feature.enumeration.map