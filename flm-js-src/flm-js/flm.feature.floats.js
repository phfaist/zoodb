/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:23
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000024 */ import {CellsEnvironment} from './flm.feature.cells.js';
/* 000023 */ import {SimpleIncludeGraphicsMacro} from './flm.feature.graphics.js';
/* 000022 */ import {Feature} from './flm.feature._base.js';
/* 000020 */ import {Counter, build_counter_formatter} from './flm.counter.js';
/* 000019 */ import {FLMEnvironmentSpecBase} from './flm.flmspecinfo.js';
/* 000018 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsingStateDeltaExtendLatexContextDb, MacroSpec, LatexWalkerLocatedError, LatexEnvironmentBodyContentsParser, SimpleIncludeGraphicsMacro, Feature, build_counter_formatter, Counter, ParsedArgumentsInfo, latexnodes_parsers, FLMArgumentSpec, FLMEnvironmentSpecBase, latexnodes_nodes, CellsEnvironment};
/* 000001 */ var __name__ = 'flm.feature.floats';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000030 */ export var FloatContentHandlerBase =  __class__ ('FloatContentHandlerBase', [object], {
/* 000030 */ 	__module__: __name__,
/* 000032 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		// pass;
/* 000033 */ 	});},
/* 000035 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000044 */ 		var __except0__ = __call__ (RuntimeError, null, 'This method needs to be reimplemented in subclasses!'.format ());
/* 000044 */ 		__except0__.__cause__ = null;
/* 000044 */ 		throw __except0__;
/* 000044 */ 	});}
/* 000044 */ });
/* 000049 */ export var FloatContentAnyContent =  __class__ ('FloatContentAnyContent', [FloatContentHandlerBase], {
/* 000049 */ 	__module__: __name__,
/* 000051 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000053 */ 		return content_nodes;
/* 000053 */ 	});}
/* 000053 */ });
/* 000056 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000056 */ 	__module__: __name__,
/* 000058 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		(function () {
/* 000059 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000060 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000060 */ 		}) ();
/* 000060 */ 	});},
/* 000063 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000065 */ 		var content_nodes = (function () {
/* 000065 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000065 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000065 */ 		}) ();
/* 000069 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000070 */ 			var node = __getitem__ (content_nodes, 0);
/* 000071 */ 			if (__t__ (__t__ ((function () {
/* 000071 */ 				var __accu0__ = node;
/* 000071 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000071 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000074 */ 				return content_nodes;
/* 000074 */ 			}
/* 000074 */ 		}
/* 000076 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000076 */ 		__except0__.__cause__ = null;
/* 000076 */ 		throw __except0__;
/* 000076 */ 	});}
/* 000076 */ });
/* 000082 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000082 */ 	__module__: __name__,
/* 000084 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		(function () {
/* 000085 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000086 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000086 */ 		}) ();
/* 000086 */ 	});},
/* 000089 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000091 */ 		var content_nodes = (function () {
/* 000091 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000091 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000091 */ 		}) ();
/* 000095 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000096 */ 			var node = __getitem__ (content_nodes, 0);
/* 000097 */ 			if (__t__ (__t__ ((function () {
/* 000097 */ 				var __accu0__ = node;
/* 000097 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000097 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000100 */ 				return content_nodes;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000102 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000102 */ 		__except0__.__cause__ = null;
/* 000102 */ 		throw __except0__;
/* 000102 */ 	});}
/* 000102 */ });
/* 000109 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000117 */ export var _make_content_handler = function (c) {
/* 000117 */ 	if (arguments.length) {
/* 000117 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 				switch (__attrib0__) {
/* 000117 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 	}
/* 000117 */ 	else {
/* 000117 */ 	}
/* 000118 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000119 */ 		return c;
/* 000119 */ 	}
/* 000120 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000121 */ 		var c = dict ({'name': c});
/* 000121 */ 	}
/* 000122 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000123 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000123 */ 			var __accu0__ = c;
/* 000123 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000123 */ 		}) ()));
/* 000123 */ 	}
/* 000124 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000124 */ 	__except0__.__cause__ = null;
/* 000124 */ 	throw __except0__;
/* 000124 */ };
/* 000130 */ export var float_label_arg = __call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000130 */ 	var __accu0__ = latexnodes_parsers;
/* 000130 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000130 */ }) (), argname: 'label'}))]}));
/* 000138 */ export var float_caption_arg = __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}));
/* 000145 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [FLMEnvironmentSpecBase], {
/* 000145 */ 	__module__: __name__,
/* 000147 */ 	is_block_level: true,
/* 000149 */ 	float_content_is_block_level: true,
/* 000151 */ 	float_content_render_at_environment_node_location: true,
/* 000159 */ 	allowed_in_standalone_mode: false,
/* 000161 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000161 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000161 */ 			var content_handlers = null;
/* 000161 */ 		};
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000166 */ 		if (__t__ (content_handlers === null)) {
/* 000167 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000167 */ 		}
/* 000168 */ 		var content_handlers = (function () {
/* 000168 */ 			var __accu0__ = [];
/* 000168 */ 			var __iterable0__ = content_handlers;
/* 000168 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000170 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000170 */ 				(function () {
/* 000170 */ 					var __accu1__ = __accu0__;
/* 000169 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000169 */ 				}) ();
/* 000169 */ 			}
/* 000169 */ 			return __accu0__;
/* 000169 */ 		}) ();
/* 000172 */ 		self.float_type = float_type;
/* 000173 */ 		self.content_handlers = content_handlers;
/* 000173 */ 	});},
/* 000175 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000176 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [float_label_arg, float_caption_arg], environments: [], specials: []}));
/* 000185 */ 		var __iterable0__ = self.content_handlers;
/* 000185 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000185 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000186 */ 			(function () {
/* 000186 */ 				var __accu0__ = content_handler;
/* 000186 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000186 */ 			}) ();
/* 000186 */ 		}
/* 000192 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000192 */ 	});},
/* 000196 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000202 */ 		node.flm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000203 */ 		node.flm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000205 */ 		var float_content_nodes = [];
/* 000207 */ 		var __iterable0__ = node.nodelist;
/* 000207 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000207 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000208 */ 			if (__t__ ((function () {
/* 000208 */ 				var __accu0__ = n;
/* 000208 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000208 */ 			}) ())) {
/* 000210 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000212 */ 					__setitem__ (node.flm_float_label, 'label_node', n);
/* 000214 */ 					var ref_label_node_args = (function () {
/* 000214 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000214 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000214 */ 					}) ();
/* 000217 */ 					var ref_label_full = (function () {
/* 000217 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000217 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000217 */ 					}) ();
/* 000218 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000219 */ 						var __left0__ = (function () {
/* 000219 */ 							var __accu0__ = ref_label_full;
/* 000219 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000219 */ 						}) ();
/* 000219 */ 						var ref_label_prefix = __left0__ [0];
/* 000219 */ 						var ref_label = __left0__ [1];
/* 000219 */ 					}
/* 000220 */ 					else {
/* 000221 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000221 */ 						var ref_label_prefix = __left0__ [0];
/* 000221 */ 						var ref_label = __left0__ [1];
/* 000221 */ 					}
/* 000223 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000224 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000224 */ 						__except0__.__cause__ = null;
/* 000224 */ 						throw __except0__;
/* 000224 */ 					}
/* 000230 */ 					__setitem__ (node.flm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000231 */ 					__setitem__ (node.flm_float_label, 'ref_label', ref_label);
/* 000233 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000234 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000234 */ 						__except0__.__cause__ = null;
/* 000234 */ 						throw __except0__;
/* 000234 */ 					}
/* 000234 */ 					continue;
/* 000234 */ 				}
/* 000242 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000244 */ 					__setitem__ (node.flm_float_caption, 'caption_node', n);
/* 000246 */ 					var ref_caption_node_args = (function () {
/* 000246 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000246 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000246 */ 					}) ();
/* 000250 */ 					var ref_caption_nodelist = (function () {
/* 000250 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000250 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000250 */ 					}) ();
/* 000251 */ 					__setitem__ (node.flm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000251 */ 					continue;
/* 000251 */ 				}
/* 000251 */ 			}
/* 000255 */ 			(function () {
/* 000255 */ 				var __accu0__ = float_content_nodes;
/* 000255 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000257 */ 		var float_content_nodes = (function () {
/* 000257 */ 			var __accu0__ = node.latex_walker;
/* 000257 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000257 */ 		}) ();
/* 000263 */ 		var errors = [];
/* 000264 */ 		var final_content_nodes = null;
/* 000265 */ 		var __iterable0__ = self.content_handlers;
/* 000265 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000265 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000266 */ 			try {
/* 000267 */ 				var final_content_nodes = (function () {
/* 000267 */ 					var __accu0__ = content_handler;
/* 000267 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000267 */ 				}) ();
/* 000267 */ 			}
/* 000267 */ 			catch (__except0__) {
/* 000267 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000267 */ 					var e = __except0__;
/* 000271 */ 					(function () {
/* 000271 */ 						var __accu0__ = errors;
/* 000271 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000271 */ 					}) ();
/* 000271 */ 				}
/* 000271 */ 				else {
/* 000271 */ 					throw __except0__;
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000274 */ 		if (__t__ (final_content_nodes === null)) {
/* 000280 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000280 */ 				var __accu0__ = '\n';
/* 000280 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000280 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000280 */ 			__except0__.__cause__ = null;
/* 000280 */ 			throw __except0__;
/* 000280 */ 		}
/* 000284 */ 		node.flm_float_content_nodelist = final_content_nodes;
/* 000288 */ 		return node;
/* 000288 */ 	});},
/* 000291 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000293 */ 		var floats_mgr = (function () {
/* 000293 */ 			var __accu0__ = render_context;
/* 000293 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000293 */ 		}) ();
/* 000295 */ 		// pass;
/* 000299 */ 		var ref_label_prefix = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000300 */ 		var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000302 */ 		var numbered = true;
/* 000303 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000305 */ 			var numbered = false;
/* 000305 */ 		}
/* 000307 */ 		var float_instance = (function () {
/* 000307 */ 			var __accu0__ = floats_mgr;
/* 000307 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.flm_float_caption, 'caption_nodelist'), content_nodelist: node.flm_float_content_nodelist}));
/* 000307 */ 		}) ();
/* 000322 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000323 */ 			return (function () {
/* 000323 */ 				var __accu0__ = self;
/* 000323 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000323 */ 			}) ();
/* 000323 */ 		}
/* 000325 */ 		return (function () {
/* 000325 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000325 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)], render_context: render_context}));
/* 000325 */ 		}) ();
/* 000325 */ 	});},
/* 000332 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000334 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000336 */ 		return (function () {
/* 000336 */ 			var __accu0__ = fragment_renderer;
/* 000336 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000336 */ 		}) ();
/* 000336 */ 	});}
/* 000336 */ });
/* 000343 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000343 */ 	__module__: __name__,
/* 000344 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000344 */ 		var float_type = null;
/* 000344 */ 		var float_type_info = null;
/* 000344 */ 		var number = null;
/* 000344 */ 		var formatted_counter_value_flm = null;
/* 000344 */ 		var ref_label_prefix = null;
/* 000344 */ 		var ref_label = null;
/* 000344 */ 		var target_id = null;
/* 000344 */ 		var caption_nodelist = null;
/* 000344 */ 		var content_nodelist = null;
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000356 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000357 */ 		self.float_type = float_type;
/* 000358 */ 		self.float_type_info = float_type_info;
/* 000359 */ 		self.number = number;
/* 000360 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000361 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000362 */ 		self.ref_label = ref_label;
/* 000363 */ 		self.target_id = target_id;
/* 000364 */ 		self.caption_nodelist = caption_nodelist;
/* 000365 */ 		self.content_nodelist = content_nodelist;
/* 000366 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000366 */ 	});},
/* 000371 */ 	get asdict () {return __get__ (this, function (self) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000372 */ 		return (function () {
/* 000372 */ 			var __accu0__ = [];
/* 000372 */ 			var __iterable0__ = self._fields;
/* 000372 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 				(function () {
/* 000372 */ 					var __accu1__ = __accu0__;
/* 000372 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000372 */ 				}) ();
/* 000372 */ 			}
/* 000372 */ 			return dict (__accu0__);
/* 000372 */ 		}) ();
/* 000372 */ 	});},
/* 000374 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		return (function () {
/* 000375 */ 			var __accu0__ = '{}({})';
/* 000377 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000377 */ 				var __accu1__ = ', ';
/* 000377 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000377 */ 					var __accu2__ = [];
/* 000377 */ 					var __iterable0__ = self._fields;
/* 000377 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 						(function () {
/* 000377 */ 							var __accu3__ = __accu2__;
/* 000377 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000377 */ 						}) ();
/* 000377 */ 					}
/* 000377 */ 					return __accu2__;
/* 000377 */ 				}) ());
/* 000377 */ 			}) ());
/* 000377 */ 		}) ();
/* 000377 */ 	});}
/* 000377 */ });
/* 000383 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000383 */ 	if (arguments.length) {
/* 000383 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 				switch (__attrib0__) {
/* 000383 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 	}
/* 000383 */ 	else {
/* 000383 */ 	}
/* 000384 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000385 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000385 */ 	}
/* 000393 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000394 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000394 */ 	}
/* 000400 */ 	else {
/* 000403 */ 		var float_type_cap = (function () {
/* 000403 */ 			var __accu0__ = float_type;
/* 000403 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000403 */ 		}) ();
/* 000404 */ 		var prefix_display = tuple ([dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')})]);
/* 000404 */ 	}
/* 000408 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000408 */ };
/* 000417 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000417 */ 	__module__: __name__,
/* 000418 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000418 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000418 */ 			var float_caption_name = null;
/* 000418 */ 		};
/* 000418 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000418 */ 			var counter_formatter = null;
/* 000418 */ 		};
/* 000418 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000418 */ 			var content_handlers = null;
/* 000418 */ 		};
/* 000418 */ 		if (arguments.length) {
/* 000418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000418 */ 					switch (__attrib0__) {
/* 000418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 					}
/* 000418 */ 				}
/* 000418 */ 			}
/* 000418 */ 		}
/* 000418 */ 		else {
/* 000418 */ 		}
/* 000426 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000428 */ 		self.float_type = float_type;
/* 000430 */ 		if (__t__ (float_caption_name === null)) {
/* 000431 */ 			var float_caption_name = float_type;
/* 000431 */ 		}
/* 000433 */ 		self.float_caption_name = float_caption_name;
/* 000435 */ 		if (__t__ (counter_formatter === null)) {
/* 000436 */ 			var counter_formatter = dict ({'format_num': 'arabic'});
/* 000436 */ 		}
/* 000440 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000444 */ 		self.content_handlers = content_handlers;
/* 000446 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000446 */ 	});},
/* 000449 */ 	get asdict () {return __get__ (this, function (self) {
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000450 */ 		return (function () {
/* 000450 */ 			var __accu0__ = [];
/* 000450 */ 			var __iterable0__ = self._fields;
/* 000450 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000450 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000450 */ 				(function () {
/* 000450 */ 					var __accu1__ = __accu0__;
/* 000450 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000450 */ 				}) ();
/* 000450 */ 			}
/* 000450 */ 			return dict (__accu0__);
/* 000450 */ 		}) ();
/* 000450 */ 	});},
/* 000452 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000452 */ 		if (arguments.length) {
/* 000452 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 					switch (__attrib0__) {
/* 000452 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 		}
/* 000452 */ 		else {
/* 000452 */ 		}
/* 000453 */ 		return (function () {
/* 000453 */ 			var __accu0__ = '{}({})';
/* 000455 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000455 */ 				var __accu1__ = ', ';
/* 000455 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000455 */ 					var __accu2__ = [];
/* 000455 */ 					var __iterable0__ = self._fields;
/* 000455 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000455 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000455 */ 						(function () {
/* 000455 */ 							var __accu3__ = __accu2__;
/* 000455 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000455 */ 						}) ();
/* 000455 */ 					}
/* 000455 */ 					return __accu2__;
/* 000455 */ 				}) ());
/* 000455 */ 			}) ());
/* 000455 */ 		}) ();
/* 000455 */ 	});}
/* 000455 */ });
/* 000467 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000475 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000475 */ 	__module__: __name__,
/* 000477 */ 	feature_name: 'floats',
/* 000478 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000480 */ 	feature_optional_dependencies: ['refs'],
/* 000482 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000482 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000482 */ 			var float_types = null;
/* 000482 */ 		};
/* 000482 */ 		if (arguments.length) {
/* 000482 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 					switch (__attrib0__) {
/* 000482 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 			}
/* 000482 */ 		}
/* 000482 */ 		else {
/* 000482 */ 		}
/* 000483 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000484 */ 		if (__t__ (float_types === null)) {
/* 000485 */ 			var float_types = _default_float_types;
/* 000485 */ 		}
/* 000486 */ 		var _mkfloattypeobj = function (x) {
/* 000486 */ 			if (arguments.length) {
/* 000486 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000486 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000486 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000486 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000486 */ 						switch (__attrib0__) {
/* 000486 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 						}
/* 000486 */ 					}
/* 000486 */ 				}
/* 000486 */ 			}
/* 000486 */ 			else {
/* 000486 */ 			}
/* 000487 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000488 */ 				return x;
/* 000488 */ 			}
/* 000489 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000489 */ 		};
/* 000490 */ 		self.float_types_list = (function () {
/* 000490 */ 			var __accu0__ = [];
/* 000490 */ 			var __iterable0__ = float_types;
/* 000490 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000490 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000490 */ 				(function () {
/* 000490 */ 					var __accu1__ = __accu0__;
/* 000490 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000490 */ 				}) ();
/* 000490 */ 			}
/* 000490 */ 			return __accu0__;
/* 000490 */ 		}) ();
/* 000491 */ 		self.float_types = (function () {
/* 000491 */ 			var __accu0__ = [];
/* 000491 */ 			var __iterable0__ = self.float_types_list;
/* 000491 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000493 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000493 */ 				(function () {
/* 000493 */ 					var __accu1__ = __accu0__;
/* 000493 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000493 */ 				}) ();
/* 000493 */ 			}
/* 000493 */ 			return dict (__accu0__);
/* 000493 */ 		}) ();
/* 000493 */ 	});},
/* 000496 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000496 */ 		if (arguments.length) {
/* 000496 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000496 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000496 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000496 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000496 */ 					switch (__attrib0__) {
/* 000496 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 					}
/* 000496 */ 				}
/* 000496 */ 			}
/* 000496 */ 		}
/* 000496 */ 		else {
/* 000496 */ 		}
/* 000497 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000497 */ 	});},
/* 000502 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000502 */ 		if (arguments.length) {
/* 000502 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000502 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000502 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000502 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000502 */ 					switch (__attrib0__) {
/* 000502 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 					}
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 		}
/* 000502 */ 		else {
/* 000502 */ 		}
/* 000503 */ 		var environments = [];
/* 000504 */ 		var __iterable0__ = (function () {
/* 000504 */ 			var __accu0__ = self.float_types;
/* 000504 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000504 */ 		}) ();
/* 000504 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000504 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000504 */ 			var float_type = __left0__ [0];
/* 000504 */ 			var ftinfo = __left0__ [1];
/* 000505 */ 			(function () {
/* 000505 */ 				var __accu0__ = environments;
/* 000506 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000506 */ 					var __accu1__ = self;
/* 000506 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000506 */ 				}) ());
/* 000506 */ 			}) ();
/* 000506 */ 		}
/* 000508 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000510 */ 	});},
/* 000510 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000510 */ 		__module__: __name__,
/* 000512 */ 		get initialize () {return __get__ (this, function (self) {
/* 000512 */ 			if (arguments.length) {
/* 000512 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000512 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000512 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000512 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000512 */ 						switch (__attrib0__) {
/* 000512 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000512 */ 						}
/* 000512 */ 					}
/* 000512 */ 				}
/* 000512 */ 			}
/* 000512 */ 			else {
/* 000512 */ 			}
/* 000513 */ 			self.floats = (function () {
/* 000513 */ 				var __accu0__ = [];
/* 000515 */ 				var __iterable0__ = (function () {
/* 000515 */ 					var __accu1__ = self.feature.float_types;
/* 000515 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000515 */ 				}) ();
/* 000515 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000515 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000515 */ 					var float_type = __left0__ [0];
/* 000515 */ 					var ftinfo = __left0__ [1];
/* 000515 */ 					(function () {
/* 000515 */ 						var __accu1__ = __accu0__;
/* 000515 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000515 */ 					}) ();
/* 000515 */ 				}
/* 000515 */ 				return dict (__accu0__);
/* 000515 */ 			}) ();
/* 000517 */ 			self.float_counters = (function () {
/* 000517 */ 				var __accu0__ = [];
/* 000519 */ 				var __iterable0__ = (function () {
/* 000519 */ 					var __accu1__ = self.feature.float_types;
/* 000519 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000519 */ 				}) ();
/* 000519 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000519 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000519 */ 					var float_type = __left0__ [0];
/* 000519 */ 					var ftinfo = __left0__ [1];
/* 000519 */ 					(function () {
/* 000519 */ 						var __accu1__ = __accu0__;
/* 000519 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 0]);
/* 000519 */ 					}) ();
/* 000519 */ 				}
/* 000519 */ 				return dict (__accu0__);
/* 000519 */ 			}) ();
/* 000521 */ 			self.float_instances = dict ({});
/* 000523 */ 			if (__t__ ((function () {
/* 000523 */ 				var __accu0__ = self.render_context;
/* 000523 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000523 */ 			}) ())) {
/* 000524 */ 				var refs_mgr = (function () {
/* 000524 */ 					var __accu0__ = self.render_context;
/* 000524 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000524 */ 				}) ();
/* 000525 */ 				var __iterable0__ = (function () {
/* 000525 */ 					var __accu0__ = self.feature.float_types;
/* 000525 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000525 */ 				}) ();
/* 000525 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000525 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000525 */ 					var float_type = __left0__ [0];
/* 000525 */ 					var ftinfo = __left0__ [1];
/* 000526 */ 					(function () {
/* 000526 */ 						var __accu0__ = refs_mgr;
/* 000526 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: ftinfo.counter_formatter}));
/* 000526 */ 					}) ();
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		});},
/* 000530 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000530 */ 			var numbered = true;
/* 000530 */ 			var ref_label_prefix = null;
/* 000530 */ 			var ref_label = null;
/* 000530 */ 			var caption_nodelist = null;
/* 000530 */ 			var content_nodelist = null;
/* 000530 */ 			if (arguments.length) {
/* 000530 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000530 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000530 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000530 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000530 */ 						switch (__attrib0__) {
/* 000530 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						}
/* 000530 */ 					}
/* 000530 */ 				}
/* 000530 */ 			}
/* 000530 */ 			else {
/* 000530 */ 			}
/* 000542 */ 			var node_id = (function () {
/* 000542 */ 				var __accu0__ = self;
/* 000542 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000542 */ 			}) ();
/* 000544 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000546 */ 				return __getitem__ (self.float_instances, node_id);
/* 000546 */ 			}
/* 000548 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000550 */ 			// pass;
/* 000554 */ 			if (__t__ (numbered)) {
/* 000555 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000556 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000557 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000559 */ 				var fmtvalue_flm_text = (function () {
/* 000559 */ 					var __accu0__ = fmtcounter;
/* 000559 */ 					return __call__ (__accu0__.format_flm, __accu0__, number, __kwargtrans__ ({with_prefix: false}));
/* 000559 */ 				}) ();
/* 000560 */ 				var fmtvalue_flm = (function () {
/* 000560 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000560 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000560 */ 				}) ();
/* 000566 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000566 */ 			}
/* 000567 */ 			else {
/* 000569 */ 				var number = null;
/* 000570 */ 				var fmtvalue_flm = null;
/* 000571 */ 				var fmtcounter_id = null;
/* 000571 */ 			}
/* 000573 */ 			var target_id = null;
/* 000574 */ 			if (__t__ (number !== null)) {
/* 000575 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000575 */ 			}
/* 000577 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000591 */ 			(function () {
/* 000591 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000591 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000591 */ 			}) ();
/* 000594 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000594 */ 				var __accu0__ = self.render_context;
/* 000594 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000594 */ 			}) ())) {
/* 000598 */ 				var refs_mgr = (function () {
/* 000598 */ 					var __accu0__ = self.render_context;
/* 000598 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000598 */ 				}) ();
/* 000600 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000600 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000604 */ 					var formatted_ref_flm_text = (function () {
/* 000604 */ 						var __accu0__ = self;
/* 000604 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000604 */ 					}) ();
/* 000606 */ 					(function () {
/* 000606 */ 						var __accu0__ = refs_mgr;
/* 000606 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: number, counter_formatter_id: fmtcounter_id}));
/* 000606 */ 					}) ();
/* 000606 */ 				}
/* 000606 */ 			}
/* 000616 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000617 */ 			return float_instance;
/* 000617 */ 		});},
/* 000619 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000619 */ 			if (arguments.length) {
/* 000619 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000619 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000619 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000619 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000619 */ 						switch (__attrib0__) {
/* 000619 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 						}
/* 000619 */ 					}
/* 000619 */ 				}
/* 000619 */ 			}
/* 000619 */ 			else {
/* 000619 */ 			}
/* 000620 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_flm.flm_text);
/* 000620 */ 		});}
/* 000620 */ 	}),
/* 000628 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000628 */ 		if (arguments.length) {
/* 000628 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000628 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000628 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000628 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000628 */ 					switch (__attrib0__) {
/* 000628 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000628 */ 					}
/* 000628 */ 				}
/* 000628 */ 			}
/* 000628 */ 		}
/* 000628 */ 		else {
/* 000628 */ 		}
/* 000629 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000629 */ 	});},
/* 000632 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self) {
/* 000632 */ 		if (arguments.length) {
/* 000632 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000632 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000632 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000632 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000632 */ 					switch (__attrib0__) {
/* 000632 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 					}
/* 000632 */ 				}
/* 000632 */ 			}
/* 000632 */ 		}
/* 000632 */ 		else {
/* 000632 */ 		}
/* 000645 */ 		return dict ({'macros': [float_label_arg, float_caption_arg, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'}))], 'environments': [__call__ (CellsEnvironment, null)]});
/* 000645 */ 	});}
/* 000645 */ });
/* 000652 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map