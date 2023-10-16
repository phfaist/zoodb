/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 20:52:36
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
/* 000007 */ export {latexnodes_parsers, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_nodes, LatexWalkerLocatedError, counter, MacroSpec, ParsingStateDeltaExtendLatexContextDb, LatexEnvironmentBodyContentsParser, Feature, FLMEnvironmentSpecBase};
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
/* 000107 */ 		var item_nodelists = (function () {
/* 000107 */ 			var __accu0__ = node.nodelist;
/* 000107 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000107 */ 				if (arguments.length) {
/* 000107 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 							switch (__attrib0__) {
/* 000107 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 							}
/* 000107 */ 						}
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 				else {
/* 000107 */ 				}
/* 000108 */ 				return __t__ ((function () {
/* 000108 */ 					var __accu1__ = n;
/* 000108 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000108 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000108 */ 			}), __kwargtrans__ ({keep_separators: true}));
/* 000108 */ 		}) ();
/* 000112 */ 		var enumeration_items = [];
/* 000113 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000113 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000113 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000113 */ 			var j = __left0__ [0];
/* 000113 */ 			var item_nodelist = __left0__ [1];
/* 000114 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000114 */ 				continue;
/* 000114 */ 			}
/* 000116 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000117 */ 			if (__t__ (item_macro === null)) {
/* 000117 */ 				continue;
/* 000117 */ 			}
/* 000121 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && (__t__ (__t__ ((function () {
/* 000121 */ 				var __accu0__ = item_macro;
/* 000121 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000122 */ 			}) ()) && __eq__ ((function () {
/* 000122 */ 				var __accu0__ = item_macro.chars;
/* 000122 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000124 */ 			}) (), '')) || __t__ ((function () {
/* 000124 */ 				var __accu0__ = item_macro;
/* 000124 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000124 */ 			}) ()) && item_macro.spec.is_paragraph_break_marker))) {
/* 000124 */ 				continue;
/* 000124 */ 			}
/* 000131 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000131 */ 				var __accu0__ = item_macro;
/* 000131 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000131 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000133 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000133 */ 				__except0__.__cause__ = null;
/* 000133 */ 				throw __except0__;
/* 000133 */ 			}
/* 000137 */ 			var item_content_nodelist = (function () {
/* 000137 */ 				var __accu0__ = item_macro.latex_walker;
/* 000137 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000137 */ 			}) ();
/* 000141 */ 			// pass;
/* 000147 */ 			(function () {
/* 000147 */ 				var __accu0__ = enumeration_items;
/* 000147 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000147 */ 			}) ();
/* 000147 */ 		}
/* 000151 */ 		node.flm_enumeration_items = enumeration_items;
/* 000152 */ 		return node;
/* 000152 */ 	});},
/* 000155 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000157 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000159 */ 		var node_args = (function () {
/* 000159 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000159 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000159 */ 		}) ();
/* 000163 */ 		var state = (function () {
/* 000163 */ 			var __accu0__ = render_context;
/* 000163 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000163 */ 		}) ();
/* 000164 */ 		var nested_depth = (function () {
/* 000164 */ 			var __accu0__ = state;
/* 000164 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000164 */ 		}) ();
/* 000167 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000168 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000169 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000170 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000170 */ 			}
/* 000171 */ 			else {
/* 000172 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000172 */ 			}
/* 000172 */ 		}
/* 000174 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000174 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000174 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000174 */ 		}) ())) {
/* 000175 */ 			var tag_template_chars = (function () {
/* 000175 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000175 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000175 */ 			}) ();
/* 000176 */ 			var counter_formatter_spec = tag_template_chars;
/* 000176 */ 		}
/* 000178 */ 		var counter_formatter = (function () {
/* 000178 */ 			var __accu0__ = counter;
/* 000178 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000178 */ 		}) ();
/* 000183 */ 		var items_custom_tags = dict ({});
/* 000184 */ 		var items_nodelists = [];
/* 000185 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_enumeration_items);
/* 000185 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000185 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000185 */ 			var j = __left0__ [0];
/* 000185 */ 			var iteminfo = __left0__ [1];
/* 000186 */ 			var __left0__ = iteminfo;
/* 000186 */ 			var item_macro = __left0__ [0];
/* 000186 */ 			var item_content_nodelist = __left0__ [1];
/* 000187 */ 			(function () {
/* 000187 */ 				var __accu0__ = items_nodelists;
/* 000187 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000187 */ 			}) ();
/* 000189 */ 			var item_node_args = (function () {
/* 000189 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000189 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag']));
/* 000189 */ 			}) ();
/* 000193 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000193 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000193 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000193 */ 			}) ())) {
/* 000194 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000194 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000194 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000194 */ 				}) ());
/* 000194 */ 			}
/* 000194 */ 		}
/* 000196 */ 		var the_counter_formatter = function (n) {
/* 000196 */ 			if (arguments.length) {
/* 000196 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 						switch (__attrib0__) {
/* 000196 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						}
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 			else {
/* 000196 */ 			}
/* 000197 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000198 */ 				return __getitem__ (items_custom_tags, n);
/* 000198 */ 			}
/* 000199 */ 			return __call__ (counter_formatter, null, n);
/* 000199 */ 		};
/* 000201 */ 		var __withid0__ = (function () {
/* 000201 */ 			var __accu0__ = render_context;
/* 000201 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000201 */ 		}) ();
/* 000201 */ 		try {
/* 000201 */ 			__withid0__.__enter__ ();
/* 000204 */ 			var result = (function () {
/* 000204 */ 				var __accu0__ = fragment_renderer;
/* 000204 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth}));
/* 000204 */ 			}) ();
/* 000204 */ 			__withid0__.__exit__ ();
/* 000204 */ 		}
/* 000204 */ 		catch (__except0__) {
/* 000204 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000204 */ 				throw __except0__;
/* 000204 */ 			}
/* 000204 */ 		}
/* 000211 */ 		return result;
/* 000211 */ 	});}
/* 000211 */ });
/* 000216 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000216 */ 	__module__: __name__,
/* 000223 */ 	feature_name: 'enumeration',
/* 000224 */ 	feature_title: 'Enumeration and itemization lists',
/* 000226 */ 	feature_default_config: dict ({'enumeration_environments': dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})})}),
/* 000236 */ 	DocumentManager: null,
/* 000237 */ 	RenderManager: null,
/* 000239 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000239 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var enumeration_environments = null;
/* 000239 */ 		};
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000241 */ 		if (__t__ (enumeration_environments === null)) {
/* 000246 */ 			var enumeration_environments = (function () {
/* 000246 */ 				var __accu0__ = self.feature_default_config;
/* 000246 */ 				return __call__ (__accu0__.py_get, __accu0__, 'enumeration_environments', dict ({}));
/* 000246 */ 			}) ();
/* 000246 */ 		}
/* 000247 */ 		self.enumeration_environments = enumeration_environments;
/* 000247 */ 	});},
/* 000249 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000250 */ 			var __accu0__ = [];
/* 000257 */ 			var __iterable0__ = (function () {
/* 000257 */ 				var __accu1__ = self.enumeration_environments;
/* 000257 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000257 */ 			}) ();
/* 000257 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000257 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000257 */ 				var envname = __left0__ [0];
/* 000257 */ 				var envinfo = __left0__ [1];
/* 000257 */ 				(function () {
/* 000257 */ 					var __accu1__ = __accu0__;
/* 000252 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000252 */ 				}) ();
/* 000252 */ 			}
/* 000252 */ 			return __accu0__;
/* 000252 */ 		}) ()}));
/* 000252 */ 	});}
/* 000252 */ });
/* 000264 */ export var FeatureClass = FeatureEnumeration;
/* 000007 */ 
//# sourceMappingURL=flm.feature.enumeration.map