/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:39
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000028 */ import {Feature} from './flm.feature._base.js';
/* 000025 */ import * as counter from './flm.counter.js';
/* 000021 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000020 */ import {FLMEnvironmentSpecBase} from './flm.flmspecinfo.js';
/* 000014 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000013 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {counter, LatexEnvironmentBodyContentsParser, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_nodes, ParsingStateDeltaExtendLatexContextDb, FLMEnvironmentSpecBase, Feature, latexnodes_parsers, LatexWalkerLocatedError, MacroSpec};
/* 000001 */ var __name__ = 'flm.feature.enumeration';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000034 */ export var _default_enumeration_counter_formatter = [dict ({'template': '${arabic}.'}), dict ({'template': '(${roman})'}), dict ({'template': '${alph}-'})];
/* 000041 */ export var Enumeration =  __class__ ('Enumeration', [FLMEnvironmentSpecBase], {
/* 000041 */ 	__module__: __name__,
/* 000058 */ 	is_block_level: true,
/* 000060 */ 	body_contents_is_block_level: true,
/* 000062 */ 	allowed_in_standalone_mode: true,
/* 000064 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000064 */ 		var counter_formatter = null;
/* 000064 */ 		var annotations = null;
/* 000064 */ 		var kwargs = dict ();
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 				delete kwargs.__kwargtrans__;
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, Enumeration, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000074 */ 			var __accu0__ = latexnodes_parsers;
/* 000074 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000074 */ 		}) (), __kwargtrans__ ({argname: 'tag_template'}))]}, kwargs)));
/* 000083 */ 		if (__t__ (counter_formatter === null)) {
/* 000084 */ 			var counter_formatter = _default_enumeration_counter_formatter;
/* 000084 */ 		}
/* 000085 */ 		self.counter_formatter = counter_formatter;
/* 000086 */ 		self.annotations = annotations;
/* 000086 */ 	});},
/* 000088 */ 	_fields: tuple (['environmentname', 'counter_formatter', 'annotations']),
/* 000090 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000097 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'item', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'custom_tag'}))]}))]}))}))}));
/* 000097 */ 	});},
/* 000104 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000106 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_enumeration_items'))) {
/* 000107 */ 			// pass;
/* 000111 */ 			return node;
/* 000111 */ 		}
/* 000115 */ 		var item_nodelists = (function () {
/* 000115 */ 			var __accu0__ = node.nodelist;
/* 000115 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000115 */ 				if (arguments.length) {
/* 000115 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 							switch (__attrib0__) {
/* 000115 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 							}
/* 000115 */ 						}
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 				else {
/* 000115 */ 				}
/* 000116 */ 				return __t__ ((function () {
/* 000116 */ 					var __accu1__ = n;
/* 000116 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000116 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000116 */ 			}), __kwargtrans__ ({keep_separators: true, call_make_nodelist: false}));
/* 000116 */ 		}) ();
/* 000121 */ 		var enumeration_items = [];
/* 000122 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000122 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000122 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000122 */ 			var j = __left0__ [0];
/* 000122 */ 			var item_nodelist = __left0__ [1];
/* 000123 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000123 */ 				continue;
/* 000123 */ 			}
/* 000125 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000126 */ 			if (__t__ (item_macro === null)) {
/* 000126 */ 				continue;
/* 000126 */ 			}
/* 000130 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && (__t__ (__t__ ((function () {
/* 000130 */ 				var __accu0__ = item_macro;
/* 000130 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000131 */ 			}) ()) && __eq__ ((function () {
/* 000131 */ 				var __accu0__ = item_macro.chars;
/* 000131 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000133 */ 			}) (), '')) || __t__ ((function () {
/* 000133 */ 				var __accu0__ = item_macro;
/* 000133 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000133 */ 			}) ()) && item_macro.spec.is_paragraph_break_marker))) {
/* 000133 */ 				continue;
/* 000133 */ 			}
/* 000140 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000140 */ 				var __accu0__ = item_macro;
/* 000140 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000140 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000142 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000142 */ 				__except0__.__cause__ = null;
/* 000142 */ 				throw __except0__;
/* 000142 */ 			}
/* 000146 */ 			var item_content_nodelist = (function () {
/* 000146 */ 				var __accu0__ = item_macro.latex_walker;
/* 000146 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000146 */ 			}) ();
/* 000150 */ 			// pass;
/* 000156 */ 			(function () {
/* 000156 */ 				var __accu0__ = enumeration_items;
/* 000156 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000156 */ 			}) ();
/* 000156 */ 		}
/* 000160 */ 		node.flm_enumeration_items = enumeration_items;
/* 000161 */ 		return node;
/* 000161 */ 	});},
/* 000164 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000166 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000168 */ 		var node_args = (function () {
/* 000168 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000168 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000168 */ 		}) ();
/* 000172 */ 		var state = (function () {
/* 000172 */ 			var __accu0__ = render_context;
/* 000172 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000172 */ 		}) ();
/* 000173 */ 		var nested_depth = (function () {
/* 000173 */ 			var __accu0__ = state;
/* 000173 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000173 */ 		}) ();
/* 000176 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000177 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000178 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000179 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000179 */ 			}
/* 000180 */ 			else {
/* 000181 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000181 */ 			}
/* 000181 */ 		}
/* 000183 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000183 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000183 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000183 */ 		}) ())) {
/* 000184 */ 			var tag_template_chars = (function () {
/* 000184 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000184 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000184 */ 			}) ();
/* 000185 */ 			var counter_formatter_spec = tag_template_chars;
/* 000185 */ 		}
/* 000187 */ 		var counter_formatter = (function () {
/* 000187 */ 			var __accu0__ = counter;
/* 000187 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000187 */ 		}) ();
/* 000192 */ 		var items_custom_tags = dict ({});
/* 000193 */ 		var items_nodelists = [];
/* 000194 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_enumeration_items);
/* 000194 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 			var j = __left0__ [0];
/* 000194 */ 			var iteminfo = __left0__ [1];
/* 000195 */ 			var __left0__ = iteminfo;
/* 000195 */ 			var item_macro = __left0__ [0];
/* 000195 */ 			var item_content_nodelist = __left0__ [1];
/* 000196 */ 			(function () {
/* 000196 */ 				var __accu0__ = items_nodelists;
/* 000196 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000196 */ 			}) ();
/* 000198 */ 			var item_node_args = (function () {
/* 000198 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000198 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag']));
/* 000198 */ 			}) ();
/* 000202 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000202 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000202 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000202 */ 			}) ())) {
/* 000203 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000203 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000203 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000203 */ 				}) ());
/* 000203 */ 			}
/* 000203 */ 		}
/* 000205 */ 		var the_counter_formatter = function (n) {
/* 000205 */ 			if (arguments.length) {
/* 000205 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 						switch (__attrib0__) {
/* 000205 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						}
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 			else {
/* 000205 */ 			}
/* 000206 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000207 */ 				return __getitem__ (items_custom_tags, n);
/* 000207 */ 			}
/* 000208 */ 			return __call__ (counter_formatter, null, n);
/* 000208 */ 		};
/* 000210 */ 		var __withid0__ = (function () {
/* 000210 */ 			var __accu0__ = render_context;
/* 000210 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000210 */ 		}) ();
/* 000210 */ 		try {
/* 000210 */ 			__withid0__.__enter__ ();
/* 000213 */ 			var result = (function () {
/* 000213 */ 				var __accu0__ = fragment_renderer;
/* 000213 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth}));
/* 000213 */ 			}) ();
/* 000213 */ 			__withid0__.__exit__ ();
/* 000213 */ 		}
/* 000213 */ 		catch (__except0__) {
/* 000213 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000213 */ 				throw __except0__;
/* 000213 */ 			}
/* 000213 */ 		}
/* 000220 */ 		return result;
/* 000220 */ 	});}
/* 000220 */ });
/* 000225 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000225 */ 	__module__: __name__,
/* 000232 */ 	feature_name: 'enumeration',
/* 000233 */ 	feature_title: 'Enumeration and itemization lists',
/* 000235 */ 	feature_default_config: dict ({'enumeration_environments': dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})})}),
/* 000245 */ 	DocumentManager: null,
/* 000246 */ 	RenderManager: null,
/* 000248 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000248 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enumeration_environments = null;
/* 000248 */ 		};
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000250 */ 		if (__t__ (enumeration_environments === null)) {
/* 000255 */ 			var enumeration_environments = (function () {
/* 000255 */ 				var __accu0__ = self.feature_default_config;
/* 000255 */ 				return __call__ (__accu0__.py_get, __accu0__, 'enumeration_environments', dict ({}));
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000256 */ 		self.enumeration_environments = enumeration_environments;
/* 000256 */ 	});},
/* 000258 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000259 */ 			var __accu0__ = [];
/* 000266 */ 			var __iterable0__ = (function () {
/* 000266 */ 				var __accu1__ = __call__ (dict, null, self.enumeration_environments);
/* 000266 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000266 */ 			}) ();
/* 000266 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000266 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000266 */ 				var envname = __left0__ [0];
/* 000266 */ 				var envinfo = __left0__ [1];
/* 000266 */ 				(function () {
/* 000266 */ 					var __accu1__ = __accu0__;
/* 000261 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000261 */ 				}) ();
/* 000261 */ 			}
/* 000261 */ 			return __accu0__;
/* 000261 */ 		}) ()}));
/* 000261 */ 	});}
/* 000261 */ });
/* 000273 */ export var FeatureClass = FeatureEnumeration;
/* 000007 */ 
//# sourceMappingURL=flm.feature.enumeration.map