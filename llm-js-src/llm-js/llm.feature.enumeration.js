/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:24
/* 000007 */ var logging = {};
/* 000007 */ var re = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000030 */ import {Feature} from './llm.feature._base.js';
/* 000027 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000022 */ import {LLMArgumentSpec, LLMParsingStateDeltaSetBlockLevel} from './llm.llmenvironment.js';
/* 000021 */ import {LLMEnvironmentSpecBase} from './llm.llmspecinfo.js';
/* 000015 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000014 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000013 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as __module_re__ from './re.js';
/* 000010 */ __nest__ (re, '', __module_re__);
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {latexnodes_nodes, MacroSpec, ParsingStateDeltaExtendLatexContextDb, LatexEnvironmentBodyContentsParser, LLMArgumentSpec, latexnodes_parsers, LLMParsingStateDeltaSetBlockLevel, Feature, ParsedArgumentsInfo, LLMEnvironmentSpecBase, fmthelpers};
/* 000001 */ var __name__ = 'llm.feature.enumeration';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000034 */ export var _count_initials_formatters = dict ({'a': fmthelpers.alphacounter, 'A': fmthelpers.Alphacounter, 'i': fmthelpers.romancounter, 'I': fmthelpers.Romancounter, '1': str});
/* 000041 */ export var _rx_count_initial = (function () {
/* 000041 */ 	var __accu0__ = re;
/* 000041 */ 	return __call__ (__accu0__.compile, __accu0__, '[aA1iI]');
/* 000041 */ }) ();
/* 000042 */ export var _get_counter_formatter_from_tag_template = function (tag_template) {
/* 000042 */ 	if (arguments.length) {
/* 000042 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 				switch (__attrib0__) {
/* 000042 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 	}
/* 000042 */ 	else {
/* 000042 */ 	}
/* 000043 */ 	var m = (function () {
/* 000043 */ 		var __accu0__ = _rx_count_initial;
/* 000043 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000043 */ 	}) ();
/* 000044 */ 	if (__t__ (m !== null)) {
/* 000046 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000046 */ 			var __accu0__ = m;
/* 000046 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000046 */ 		}) (), 1);
/* 000047 */ 		var right = __getslice__ (tag_template, (function () {
/* 000047 */ 			var __accu0__ = m;
/* 000047 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000047 */ 		}) (), null, 1);
/* 000048 */ 		var counter_formatter = __getitem__ (_count_initials_formatters, (function () {
/* 000048 */ 			var __accu0__ = m;
/* 000048 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000048 */ 		}) ());
/* 000049 */ 		return (function __lambda__ (n) {
/* 000049 */ 			if (arguments.length) {
/* 000049 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 						switch (__attrib0__) {
/* 000049 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						}
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 			else {
/* 000049 */ 			}
/* 000049 */ 			return __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right);
/* 000049 */ 		});
/* 000049 */ 	}
/* 000052 */ 	return tag_template;
/* 000052 */ };
/* 000056 */ export var _default_enumeration_counter_formatter = [(function __lambda__ (n) {
/* 000056 */ 	if (arguments.length) {
/* 000056 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 				switch (__attrib0__) {
/* 000056 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 	}
/* 000056 */ 	else {
/* 000056 */ 	}
/* 000056 */ 	return '{}.'.format (n);
/* 000056 */ }), (function __lambda__ (n) {
/* 000056 */ 	if (arguments.length) {
/* 000056 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 				switch (__attrib0__) {
/* 000056 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 	}
/* 000056 */ 	else {
/* 000056 */ 	}
/* 000058 */ 	return '({})'.format ((function () {
/* 000058 */ 		var __accu0__ = fmthelpers;
/* 000058 */ 		return __call__ (__accu0__.romancounter, __accu0__, n);
/* 000058 */ 	}) ());
/* 000058 */ }), (function __lambda__ (n) {
/* 000058 */ 	if (arguments.length) {
/* 000058 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 				switch (__attrib0__) {
/* 000058 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 	}
/* 000058 */ 	else {
/* 000058 */ 	}
/* 000059 */ 	return '{}-'.format ((function () {
/* 000059 */ 		var __accu0__ = fmthelpers;
/* 000059 */ 		return __call__ (__accu0__.alphacounter, __accu0__, n);
/* 000059 */ 	}) ());
/* 000059 */ })];
/* 000063 */ export var Enumeration =  __class__ ('Enumeration', [LLMEnvironmentSpecBase], {
/* 000063 */ 	__module__: __name__,
/* 000080 */ 	is_block_level: true,
/* 000082 */ 	body_contents_is_block_level: true,
/* 000084 */ 	allowed_in_standalone_mode: true,
/* 000086 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000086 */ 		var counter_formatter = null;
/* 000086 */ 		var annotations = null;
/* 000086 */ 		var kwargs = dict ();
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 				delete kwargs.__kwargtrans__;
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000096 */ 		__call__ (__call__ (__super__, null, Enumeration, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, (function () {
/* 000096 */ 			var __accu0__ = latexnodes_parsers;
/* 000096 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000096 */ 		}) (), __kwargtrans__ ({argname: 'tag_template'}))]}, kwargs)));
/* 000105 */ 		if (__t__ (counter_formatter === null)) {
/* 000106 */ 			var counter_formatter = _default_enumeration_counter_formatter;
/* 000106 */ 		}
/* 000107 */ 		self.counter_formatter = counter_formatter;
/* 000108 */ 		self.annotations = annotations;
/* 000111 */ 		self.body_parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.is_block_level}));
/* 000111 */ 	});},
/* 000114 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000121 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'item', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'custom_tag'}))]}))]}))}))}));
/* 000121 */ 	});},
/* 000128 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000130 */ 		(function () {
/* 000130 */ 			var __accu0__ = logger;
/* 000130 */ 			return __call__ (__accu0__.debug, __accu0__, 'finalizing node: node = %r', node);
/* 000130 */ 		}) ();
/* 000131 */ 		var item_nodelists = (function () {
/* 000131 */ 			var __accu0__ = node.nodelist;
/* 000131 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000131 */ 				if (arguments.length) {
/* 000131 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 							switch (__attrib0__) {
/* 000131 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 							}
/* 000131 */ 						}
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 				else {
/* 000131 */ 				}
/* 000132 */ 				return __t__ ((function () {
/* 000132 */ 					var __accu1__ = n;
/* 000132 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000132 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000132 */ 			}), __kwargtrans__ ({keep_separators: true}));
/* 000132 */ 		}) ();
/* 000136 */ 		var enumeration_items = [];
/* 000137 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000137 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000137 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000137 */ 			var j = __left0__ [0];
/* 000137 */ 			var item_nodelist = __left0__ [1];
/* 000138 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000138 */ 				continue;
/* 000138 */ 			}
/* 000140 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000141 */ 			if (__t__ (item_macro === null)) {
/* 000141 */ 				continue;
/* 000141 */ 			}
/* 000144 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && __t__ ((function () {
/* 000144 */ 				var __accu0__ = item_macro;
/* 000144 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000145 */ 			}) ()) && __eq__ ((function () {
/* 000145 */ 				var __accu0__ = item_macro.chars;
/* 000145 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000145 */ 			}) (), ''))) {
/* 000145 */ 				continue;
/* 000145 */ 			}
/* 000148 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000148 */ 				var __accu0__ = item_macro;
/* 000148 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000148 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000150 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000150 */ 				__except0__.__cause__ = null;
/* 000150 */ 				throw __except0__;
/* 000150 */ 			}
/* 000154 */ 			var item_content_nodelist = (function () {
/* 000154 */ 				var __accu0__ = item_macro.latex_walker;
/* 000154 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000154 */ 			}) ();
/* 000158 */ 			(function () {
/* 000158 */ 				var __accu0__ = logger;
/* 000160 */ 				return __call__ (__accu0__.debug, __accu0__, 'item_content_nodelist = %r  (blocks = %r)', item_content_nodelist, __call__ (getattr, null, item_content_nodelist, 'llm_blocks', null));
/* 000160 */ 			}) ();
/* 000162 */ 			(function () {
/* 000162 */ 				var __accu0__ = enumeration_items;
/* 000162 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000162 */ 			}) ();
/* 000162 */ 		}
/* 000166 */ 		node.enumeration_items = enumeration_items;
/* 000167 */ 		return node;
/* 000167 */ 	});},
/* 000170 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000172 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000174 */ 		var node_args = (function () {
/* 000174 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000174 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000174 */ 		}) ();
/* 000178 */ 		var state = (function () {
/* 000178 */ 			var __accu0__ = render_context;
/* 000178 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000178 */ 		}) ();
/* 000179 */ 		var nested_depth = (function () {
/* 000179 */ 			var __accu0__ = state;
/* 000179 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000179 */ 		}) ();
/* 000182 */ 		var counter_formatter = self.counter_formatter;
/* 000183 */ 		if (__t__ (__t__ (!__t__ ((__call__ (isinstance, null, counter_formatter, str)))) && !__t__ ((__call__ (callable, null, counter_formatter))))) {
/* 000184 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter)))) {
/* 000185 */ 				var counter_formatter = __getitem__ (counter_formatter, __sub__ (__call__ (len, null, counter_formatter), 1));
/* 000185 */ 			}
/* 000186 */ 			else {
/* 000187 */ 				var counter_formatter = __getitem__ (counter_formatter, nested_depth);
/* 000187 */ 			}
/* 000187 */ 		}
/* 000189 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000189 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000189 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000189 */ 		}) ())) {
/* 000190 */ 			var tag_template_chars = (function () {
/* 000190 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000190 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000190 */ 			}) ();
/* 000192 */ 			var counter_formatter = __call__ (_get_counter_formatter_from_tag_template, null, tag_template_chars);
/* 000192 */ 		}
/* 000194 */ 		var items_custom_tags = dict ({});
/* 000195 */ 		var items_nodelists = [];
/* 000196 */ 		var __iterable0__ = __call__ (enumerate, null, node.enumeration_items);
/* 000196 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 			var j = __left0__ [0];
/* 000196 */ 			var iteminfo = __left0__ [1];
/* 000197 */ 			var __left0__ = iteminfo;
/* 000197 */ 			var item_macro = __left0__ [0];
/* 000197 */ 			var item_content_nodelist = __left0__ [1];
/* 000198 */ 			(function () {
/* 000198 */ 				var __accu0__ = items_nodelists;
/* 000198 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000198 */ 			}) ();
/* 000200 */ 			var item_node_args = (function () {
/* 000200 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000200 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag']));
/* 000200 */ 			}) ();
/* 000204 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000204 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000204 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000204 */ 			}) ())) {
/* 000205 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000205 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000205 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000205 */ 				}) ());
/* 000205 */ 			}
/* 000205 */ 		}
/* 000207 */ 		var the_counter_formatter = function (n) {
/* 000207 */ 			if (arguments.length) {
/* 000207 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 						switch (__attrib0__) {
/* 000207 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						}
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 			else {
/* 000207 */ 			}
/* 000208 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000209 */ 				return __getitem__ (items_custom_tags, n);
/* 000209 */ 			}
/* 000210 */ 			if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000211 */ 				return __call__ (counter_formatter, null, n);
/* 000211 */ 			}
/* 000212 */ 			return counter_formatter;
/* 000212 */ 		};
/* 000214 */ 		var __withid0__ = (function () {
/* 000214 */ 			var __accu0__ = render_context;
/* 000214 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000214 */ 		}) ();
/* 000214 */ 		try {
/* 000214 */ 			__withid0__.__enter__ ();
/* 000217 */ 			var result = (function () {
/* 000217 */ 				var __accu0__ = fragment_renderer;
/* 000217 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth}));
/* 000217 */ 			}) ();
/* 000217 */ 			__withid0__.__exit__ ();
/* 000217 */ 		}
/* 000217 */ 		catch (__except0__) {
/* 000217 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000217 */ 				throw __except0__;
/* 000217 */ 			}
/* 000217 */ 		}
/* 000224 */ 		return result;
/* 000224 */ 	});}
/* 000224 */ });
/* 000228 */ export var default_enumeration_environments = dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})});
/* 000237 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000237 */ 	__module__: __name__,
/* 000244 */ 	feature_name: 'enumeration',
/* 000246 */ 	DocumentManager: null,
/* 000247 */ 	RenderManager: null,
/* 000249 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000249 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 			var enumeration_environments = null;
/* 000249 */ 		};
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000251 */ 		if (__t__ (enumeration_environments === null)) {
/* 000252 */ 			var enumeration_environments = default_enumeration_environments;
/* 000252 */ 		}
/* 000253 */ 		self.enumeration_environments = enumeration_environments;
/* 000253 */ 	});},
/* 000255 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000256 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000256 */ 			var __accu0__ = [];
/* 000263 */ 			var __iterable0__ = (function () {
/* 000263 */ 				var __accu1__ = self.enumeration_environments;
/* 000263 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000263 */ 			}) ();
/* 000263 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000263 */ 				var envname = __left0__ [0];
/* 000263 */ 				var envinfo = __left0__ [1];
/* 000263 */ 				(function () {
/* 000263 */ 					var __accu1__ = __accu0__;
/* 000258 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000258 */ 				}) ();
/* 000258 */ 			}
/* 000258 */ 			return __accu0__;
/* 000258 */ 		}) ()}));
/* 000258 */ 	});}
/* 000258 */ });
/* 000007 */ 
//# sourceMappingURL=llm.feature.enumeration.map