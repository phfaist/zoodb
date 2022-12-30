/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:41
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
/* 000007 */ export {MacroSpec, fmthelpers, LatexEnvironmentBodyContentsParser, LLMArgumentSpec, latexnodes_parsers, ParsedArgumentsInfo, LLMParsingStateDeltaSetBlockLevel, latexnodes_nodes, ParsingStateDeltaExtendLatexContextDb, Feature, LLMEnvironmentSpecBase};
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
/* 000110 */ 		// pass;
/* 000113 */ 		var item_nodelists = (function () {
/* 000113 */ 			var __accu0__ = node.nodelist;
/* 000113 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000113 */ 				if (arguments.length) {
/* 000113 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 							switch (__attrib0__) {
/* 000113 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 							}
/* 000113 */ 						}
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 				else {
/* 000113 */ 				}
/* 000114 */ 				return __t__ ((function () {
/* 000114 */ 					var __accu1__ = n;
/* 000114 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000114 */ 				}) ()) && __eq__ (n.macroname, 'item');
/* 000114 */ 			}), __kwargtrans__ ({keep_separators: true}));
/* 000114 */ 		}) ();
/* 000118 */ 		var enumeration_items = [];
/* 000119 */ 		var __iterable0__ = __call__ (enumerate, null, item_nodelists);
/* 000119 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000119 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000119 */ 			var j = __left0__ [0];
/* 000119 */ 			var item_nodelist = __left0__ [1];
/* 000120 */ 			if (__t__ (!__t__ ((item_nodelist)))) {
/* 000120 */ 				continue;
/* 000120 */ 			}
/* 000122 */ 			var item_macro = __getitem__ (item_nodelist, 0);
/* 000123 */ 			if (__t__ (item_macro === null)) {
/* 000123 */ 				continue;
/* 000123 */ 			}
/* 000126 */ 			if (__t__ (__t__ (__eq__ (j, 0)) && __t__ ((function () {
/* 000126 */ 				var __accu0__ = item_macro;
/* 000126 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000127 */ 			}) ()) && __eq__ ((function () {
/* 000127 */ 				var __accu0__ = item_macro.chars;
/* 000127 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000127 */ 			}) (), ''))) {
/* 000127 */ 				continue;
/* 000127 */ 			}
/* 000130 */ 			if (__t__ (__t__ (!__t__ (((function () {
/* 000130 */ 				var __accu0__ = item_macro;
/* 000130 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000130 */ 			}) ()))) || __ne__ (item_macro.macroname, 'item'))) {
/* 000132 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Expected ‘\\item’ in enumeration environment: {}'.format (item_macro), pos: item_macro.pos}));
/* 000132 */ 				__except0__.__cause__ = null;
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000136 */ 			var item_content_nodelist = (function () {
/* 000136 */ 				var __accu0__ = item_macro.latex_walker;
/* 000136 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __getslice__ (item_nodelist.nodelist, 1, null, 1), __kwargtrans__ ({parsing_state: item_macro.parsing_state}));
/* 000136 */ 			}) ();
/* 000140 */ 			// pass;
/* 000146 */ 			(function () {
/* 000146 */ 				var __accu0__ = enumeration_items;
/* 000146 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([item_macro, item_content_nodelist]));
/* 000146 */ 			}) ();
/* 000146 */ 		}
/* 000150 */ 		node.enumeration_items = enumeration_items;
/* 000151 */ 		return node;
/* 000151 */ 	});},
/* 000154 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000156 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000158 */ 		var node_args = (function () {
/* 000158 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000158 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_template']));
/* 000158 */ 		}) ();
/* 000162 */ 		var state = (function () {
/* 000162 */ 			var __accu0__ = render_context;
/* 000162 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'enumeration');
/* 000162 */ 		}) ();
/* 000163 */ 		var nested_depth = (function () {
/* 000163 */ 			var __accu0__ = state;
/* 000163 */ 			return __call__ (__accu0__.py_get, __accu0__, 'nested_depth', 0);
/* 000163 */ 		}) ();
/* 000166 */ 		var counter_formatter_spec = self.counter_formatter;
/* 000167 */ 		if (__t__ (__call__ (isinstance, null, counter_formatter_spec, tuple ([list, tuple])))) {
/* 000168 */ 			if (__t__ (__ge__ (nested_depth, __call__ (len, null, counter_formatter_spec)))) {
/* 000169 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, __sub__ (__call__ (len, null, counter_formatter_spec), 1));
/* 000169 */ 			}
/* 000170 */ 			else {
/* 000171 */ 				var counter_formatter_spec = __getitem__ (counter_formatter_spec, nested_depth);
/* 000171 */ 			}
/* 000171 */ 		}
/* 000173 */ 		if (__t__ (__t__ (__in__ ('tag_template', node_args)) && (function () {
/* 000173 */ 			var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000173 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000173 */ 		}) ())) {
/* 000174 */ 			var tag_template_chars = (function () {
/* 000174 */ 				var __accu0__ = __getitem__ (node_args, 'tag_template');
/* 000174 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000174 */ 			}) ();
/* 000175 */ 			var counter_formatter_spec = tag_template_chars;
/* 000175 */ 		}
/* 000177 */ 		var counter_formatter = (function () {
/* 000177 */ 			var __accu0__ = fmthelpers;
/* 000177 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter_spec, __kwargtrans__ ({str_use_tag_template: true}));
/* 000177 */ 		}) ();
/* 000182 */ 		var items_custom_tags = dict ({});
/* 000183 */ 		var items_nodelists = [];
/* 000184 */ 		var __iterable0__ = __call__ (enumerate, null, node.enumeration_items);
/* 000184 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000184 */ 			var j = __left0__ [0];
/* 000184 */ 			var iteminfo = __left0__ [1];
/* 000185 */ 			var __left0__ = iteminfo;
/* 000185 */ 			var item_macro = __left0__ [0];
/* 000185 */ 			var item_content_nodelist = __left0__ [1];
/* 000186 */ 			(function () {
/* 000186 */ 				var __accu0__ = items_nodelists;
/* 000186 */ 				return __call__ (__accu0__.append, __accu0__, item_content_nodelist);
/* 000186 */ 			}) ();
/* 000188 */ 			var item_node_args = (function () {
/* 000188 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: item_macro}));
/* 000188 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['custom_tag']));
/* 000188 */ 			}) ();
/* 000192 */ 			if (__t__ (__t__ (__in__ ('custom_tag', item_node_args)) && (function () {
/* 000192 */ 				var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000192 */ 				return __call__ (__accu0__.was_provided, __accu0__);
/* 000192 */ 			}) ())) {
/* 000193 */ 				__setitem__ (items_custom_tags, __add__ (1, j), (function () {
/* 000193 */ 					var __accu0__ = __getitem__ (item_node_args, 'custom_tag');
/* 000193 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000193 */ 				}) ());
/* 000193 */ 			}
/* 000193 */ 		}
/* 000195 */ 		var the_counter_formatter = function (n) {
/* 000195 */ 			if (arguments.length) {
/* 000195 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 						switch (__attrib0__) {
/* 000195 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						}
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 			else {
/* 000195 */ 			}
/* 000196 */ 			if (__t__ (__in__ (n, items_custom_tags))) {
/* 000197 */ 				return __getitem__ (items_custom_tags, n);
/* 000197 */ 			}
/* 000198 */ 			return __call__ (counter_formatter, null, n);
/* 000198 */ 		};
/* 000200 */ 		var __withid0__ = (function () {
/* 000200 */ 			var __accu0__ = render_context;
/* 000200 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'enumeration', 'nested_depth', __add__ (nested_depth, 1));
/* 000200 */ 		}) ();
/* 000200 */ 		try {
/* 000200 */ 			__withid0__.__enter__ ();
/* 000203 */ 			var result = (function () {
/* 000203 */ 				var __accu0__ = fragment_renderer;
/* 000203 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, items_nodelists, the_counter_formatter, __kwargtrans__ ({render_context: render_context, annotations: self.annotations, nested_depth: nested_depth}));
/* 000203 */ 			}) ();
/* 000203 */ 			__withid0__.__exit__ ();
/* 000203 */ 		}
/* 000203 */ 		catch (__except0__) {
/* 000203 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000203 */ 				throw __except0__;
/* 000203 */ 			}
/* 000203 */ 		}
/* 000210 */ 		return result;
/* 000210 */ 	});}
/* 000210 */ });
/* 000214 */ export var default_enumeration_environments = dict ({'itemize': dict ({'counter_formatter': ['•', '-', '▸']}), 'enumerate': dict ({'counter_formatter': null})});
/* 000223 */ export var FeatureEnumeration =  __class__ ('FeatureEnumeration', [Feature], {
/* 000223 */ 	__module__: __name__,
/* 000230 */ 	feature_name: 'enumeration',
/* 000232 */ 	DocumentManager: null,
/* 000233 */ 	RenderManager: null,
/* 000235 */ 	get __init__ () {return __get__ (this, function (self, enumeration_environments) {
/* 000235 */ 		if (typeof enumeration_environments == 'undefined' || (enumeration_environments != null && enumeration_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000235 */ 			var enumeration_environments = null;
/* 000235 */ 		};
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		__call__ (__call__ (__super__, null, FeatureEnumeration, '__init__'), null, self);
/* 000237 */ 		if (__t__ (enumeration_environments === null)) {
/* 000238 */ 			var enumeration_environments = default_enumeration_environments;
/* 000238 */ 		}
/* 000239 */ 		self.enumeration_environments = enumeration_environments;
/* 000239 */ 	});},
/* 000241 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000242 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: (function () {
/* 000242 */ 			var __accu0__ = [];
/* 000249 */ 			var __iterable0__ = (function () {
/* 000249 */ 				var __accu1__ = self.enumeration_environments;
/* 000249 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000249 */ 			}) ();
/* 000249 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000249 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000249 */ 				var envname = __left0__ [0];
/* 000249 */ 				var envinfo = __left0__ [1];
/* 000249 */ 				(function () {
/* 000249 */ 					var __accu1__ = __accu0__;
/* 000244 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (Enumeration, null, __kwargtrans__ ({environmentname: envname, counter_formatter: __getitem__ (envinfo, 'counter_formatter'), annotations: [envname]})));
/* 000244 */ 				}) ();
/* 000244 */ 			}
/* 000244 */ 			return __accu0__;
/* 000244 */ 		}) ()}));
/* 000244 */ 	});}
/* 000244 */ });
/* 000007 */ 
//# sourceMappingURL=llm.feature.enumeration.map