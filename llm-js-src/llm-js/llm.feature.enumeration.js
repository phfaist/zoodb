/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:37
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
/* 000007 */ export {Feature, latexnodes_nodes, LatexEnvironmentBodyContentsParser, LLMParsingStateDeltaSetBlockLevel, ParsingStateDeltaExtendLatexContextDb, fmthelpers, latexnodes_parsers, MacroSpec, LLMEnvironmentSpecBase, ParsedArgumentsInfo, LLMArgumentSpec};
/* 000001 */ var __name__ = 'llm.feature.enumeration';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000036 */ export var _default_enumeration_counter_formatter = [dict ({'template': '${arabic}.'}), dict ({'template': '(${roman})'}), dict ({'template': '${alph}-'})];
/* 000043 */ export var Enumeration =  __class__ ('Enumeration', [LLMEnvironmentSpecBase], {
/* 000043 */ 	__module__: __name__,
/* 000060 */ 	is_block_level: true,
/* 000062 */ 	body_contents_is_block_level: true,
/* 000064 */ 	allowed_in_standalone_mode: true,
/* 000066 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000066 */ 		var counter_formatter = null;
/* 000066 */ 		var annotations = null;
/* 000066 */ 		var kwargs = dict ();
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 				delete kwargs.__kwargtrans__;
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000076 */ 		__call__ (__call__ (__super__, null, Enumeration, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, (function () {
/* 000076 */ 			var __accu0__ = latexnodes_parsers;
/* 000076 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000076 */ 		}) (), __kwargtrans__ ({argname: 'tag_template'}))]}, kwargs)));
/* 000085 */ 		if (__t__ (counter_formatter === null)) {
/* 000086 */ 			var counter_formatter = _default_enumeration_counter_formatter;
/* 000086 */ 		}
/* 000087 */ 		self.counter_formatter = counter_formatter;
/* 000088 */ 		self.annotations = annotations;
/* 000091 */ 		self.body_parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.is_block_level}));
/* 000091 */ 	});},
/* 000094 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000101 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'item', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'custom_tag'}))]}))]}))}))}));
/* 000101 */ 	});},
/* 000108 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000110 */ 		(function () {
/* 000110 */ 			var __accu0__ = logger;
/* 000110 */ 			return __call__ (__accu0__.debug, __accu0__, 'finalizing node: node = %r', node);
/* 000110 */ 		}) ();
/* 000111 */ 		var item_nodelists = (function () {
/* 000111 */ 			var __accu0__ = node.nodelist;
/* 000111 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000111 */ 				if (arguments.length) {
/* 000111 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 							switch (__attrib0__) {
/* 000111 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 							}
/* 000111 */ 						}
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 				else {
/* 000111 */ 				}
/* 000112 */ 				return __t__ ((function () {
/* 000112 */ 					var __accu1__ = n;
/* 000112 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000112 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000112 */ 			}), __kwargtrans__ ({keep_separators: true}));
/* 000112 */ 		}) ();
/* 000116 */ 		var enumeration_items = [];
/* 000117 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000117 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000117 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000117 */ 			var j = __left0__ [0];
/* 000117 */ 			var item_nodelist = __left0__ [1];
/* 000118 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000118 */ 				continue;
/* 000118 */ 			}
/* 000120 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000121 */ 			if (__t__ (item_macro === null)) {
/* 000121 */ 				continue;
/* 000121 */ 			}
/* 000124 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && __t__ ((function () {
/* 000124 */ 				var __accu0__ = item_macro;
/* 000124 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000125 */ 			}) ()) && __eq__ ((function () {
/* 000125 */ 				var __accu0__ = item_macro.chars;
/* 000125 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000125 */ 			}) (), ''))) {
/* 000125 */ 				continue;
/* 000125 */ 			}
/* 000128 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000128 */ 				var __accu0__ = item_macro;
/* 000128 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000128 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000130 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000130 */ 				__except0__.__cause__ = null;
/* 000130 */ 				throw __except0__;
/* 000130 */ 			}
/* 000134 */ 			var item_content_nodelist = (function () {
/* 000134 */ 				var __accu0__ = item_macro.latex_walker;
/* 000134 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000134 */ 			}) ();
/* 000138 */ 			(function () {
/* 000138 */ 				var __accu0__ = logger;
/* 000140 */ 				return __call__ (__accu0__.debug, __accu0__, 'item_content_nodelist = %r  (blocks = %r)', item_content_nodelist, __call__ (getattr, null, item_content_nodelist, 'llm_blocks', null));
/* 000140 */ 			}) ();
/* 000142 */ 			(function () {
/* 000142 */ 				var __accu0__ = enumeration_items;
/* 000142 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000142 */ 			}) ();
/* 000142 */ 		}
/* 000146 */ 		node.enumeration_items = enumeration_items;
/* 000147 */ 		return node;
/* 000147 */ 	});},
/* 000150 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000152 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000154 */ 		var node_args = (function () {
/* 000154 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000154 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000154 */ 		}) ();
/* 000158 */ 		var state = (function () {
/* 000158 */ 			var __accu0__ = render_context;
/* 000158 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000158 */ 		}) ();
/* 000159 */ 		var nested_depth = (function () {
/* 000159 */ 			var __accu0__ = state;
/* 000159 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000159 */ 		}) ();
/* 000162 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000163 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000164 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000165 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000165 */ 			}
/* 000166 */ 			else {
/* 000167 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000167 */ 			}
/* 000167 */ 		}
/* 000169 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000169 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000169 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000169 */ 		}) ())) {
/* 000170 */ 			var tag_template_chars = (function () {
/* 000170 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000170 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000170 */ 			}) ();
/* 000171 */ 			var counter_formatter_spec = tag_template_chars;
/* 000171 */ 		}
/* 000173 */ 		var counter_formatter = (function () {
/* 000173 */ 			var __accu0__ = fmthelpers;
/* 000173 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000173 */ 		}) ();
/* 000178 */ 		var items_custom_tags = dict ({});
/* 000179 */ 		var items_nodelists = [];
/* 000180 */ 		var __iterable0__ = __call__ (enumerate, null, node.enumeration_items);
/* 000180 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000180 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000180 */ 			var j = __left0__ [0];
/* 000180 */ 			var iteminfo = __left0__ [1];
/* 000181 */ 			var __left0__ = iteminfo;
/* 000181 */ 			var item_macro = __left0__ [0];
/* 000181 */ 			var item_content_nodelist = __left0__ [1];
/* 000182 */ 			(function () {
/* 000182 */ 				var __accu0__ = items_nodelists;
/* 000182 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000182 */ 			}) ();
/* 000184 */ 			var item_node_args = (function () {
/* 000184 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000184 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag']));
/* 000184 */ 			}) ();
/* 000188 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000188 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000188 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000188 */ 			}) ())) {
/* 000189 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000189 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000189 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000189 */ 				}) ());
/* 000189 */ 			}
/* 000189 */ 		}
/* 000191 */ 		var the_counter_formatter = function (n) {
/* 000191 */ 			if (arguments.length) {
/* 000191 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 						switch (__attrib0__) {
/* 000191 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						}
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 			}
/* 000192 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000193 */ 				return __getitem__ (items_custom_tags, n);
/* 000193 */ 			}
/* 000194 */ 			return __call__ (counter_formatter, null, n);
/* 000194 */ 		};
/* 000196 */ 		var __withid0__ = (function () {
/* 000196 */ 			var __accu0__ = render_context;
/* 000196 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000196 */ 		}) ();
/* 000196 */ 		try {
/* 000196 */ 			__withid0__.__enter__ ();
/* 000199 */ 			var result = (function () {
/* 000199 */ 				var __accu0__ = fragment_renderer;
/* 000199 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth}));
/* 000199 */ 			}) ();
/* 000199 */ 			__withid0__.__exit__ ();
/* 000199 */ 		}
/* 000199 */ 		catch (__except0__) {
/* 000199 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000199 */ 				throw __except0__;
/* 000199 */ 			}
/* 000199 */ 		}
/* 000206 */ 		return result;
/* 000206 */ 	});}
/* 000206 */ });
/* 000210 */ export var default_enumeration_environments = dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})});
/* 000219 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000219 */ 	__module__: __name__,
/* 000226 */ 	feature_name: 'enumeration',
/* 000228 */ 	DocumentManager: null,
/* 000229 */ 	RenderManager: null,
/* 000231 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000231 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000231 */ 			var enumeration_environments = null;
/* 000231 */ 		};
/* 000231 */ 		if (arguments.length) {
/* 000231 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 					switch (__attrib0__) {
/* 000231 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 					}
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 		}
/* 000231 */ 		else {
/* 000231 */ 		}
/* 000232 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000233 */ 		if (__t__ (enumeration_environments === null)) {
/* 000234 */ 			var enumeration_environments = default_enumeration_environments;
/* 000234 */ 		}
/* 000235 */ 		self.enumeration_environments = enumeration_environments;
/* 000235 */ 	});},
/* 000237 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000238 */ 			var __accu0__ = [];
/* 000245 */ 			var __iterable0__ = (function () {
/* 000245 */ 				var __accu1__ = self.enumeration_environments;
/* 000245 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000245 */ 			}) ();
/* 000245 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000245 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000245 */ 				var envname = __left0__ [0];
/* 000245 */ 				var envinfo = __left0__ [1];
/* 000245 */ 				(function () {
/* 000245 */ 					var __accu1__ = __accu0__;
/* 000240 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000240 */ 				}) ();
/* 000240 */ 			}
/* 000240 */ 			return __accu0__;
/* 000240 */ 		}) ()}));
/* 000240 */ 	});}
/* 000240 */ });
/* 000007 */ 
//# sourceMappingURL=llm.feature.enumeration.map