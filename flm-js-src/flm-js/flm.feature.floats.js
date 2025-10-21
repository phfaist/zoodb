/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 17:57:21
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {CellsEnvironment} from './flm.feature.cells.js';
/* 000024 */ import {SimpleIncludeGraphicsMacro} from './flm.feature.graphics.js';
/* 000023 */ import {Counter} from './flm.feature.numbering.js';
/* 000022 */ import {Feature} from './flm.feature._base.js';
/* 000020 */ import {build_counter_formatter} from './flm.counter.js';
/* 000019 */ import {FLMEnvironmentSpecBase, make_verb_argument} from './flm.flmspecinfo.js';
/* 000018 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_nodes, SimpleIncludeGraphicsMacro, latexnodes_parsers, ParsedArgumentsInfo, LatexWalkerLocatedError, MacroSpec, build_counter_formatter, FLMArgumentSpec, LatexEnvironmentBodyContentsParser, make_verb_argument, Feature, ParsingStateDeltaExtendLatexContextDb, Counter, CellsEnvironment, FLMEnvironmentSpecBase};
/* 000001 */ var __name__ = 'flm.feature.floats';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000031 */ export var FloatContentHandlerBase =  __class__ ('FloatContentHandlerBase', [object], {
/* 000031 */ 	__module__: __name__,
/* 000033 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000034 */ 		// pass;
/* 000034 */ 	});},
/* 000036 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000045 */ 		var __except0__ = __call__ (RuntimeError, null, 'This method needs to be reimplemented in subclasses!'.format ());
/* 000045 */ 		__except0__.__cause__ = null;
/* 000045 */ 		throw __except0__;
/* 000045 */ 	});}
/* 000045 */ });
/* 000050 */ export var FloatContentAnyContent =  __class__ ('FloatContentAnyContent', [FloatContentHandlerBase], {
/* 000050 */ 	__module__: __name__,
/* 000052 */ 	_fields: tuple ([]),
/* 000054 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000056 */ 		return content_nodes;
/* 000056 */ 	});}
/* 000056 */ });
/* 000059 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000059 */ 	__module__: __name__,
/* 000061 */ 	_fields: tuple ([]),
/* 000063 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000064 */ 		(function () {
/* 000064 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000065 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000065 */ 		}) ();
/* 000065 */ 	});},
/* 000068 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000070 */ 		var content_nodes = (function () {
/* 000070 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000070 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000070 */ 		}) ();
/* 000074 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000075 */ 			var node = __getitem__ (content_nodes, 0);
/* 000076 */ 			if (__t__ (__t__ ((function () {
/* 000076 */ 				var __accu0__ = node;
/* 000076 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000076 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000079 */ 				return content_nodes;
/* 000079 */ 			}
/* 000079 */ 		}
/* 000081 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000081 */ 		__except0__.__cause__ = null;
/* 000081 */ 		throw __except0__;
/* 000081 */ 	});}
/* 000081 */ });
/* 000087 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000087 */ 	__module__: __name__,
/* 000089 */ 	_fields: tuple ([]),
/* 000091 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000092 */ 		(function () {
/* 000092 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000093 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000093 */ 		}) ();
/* 000093 */ 	});},
/* 000096 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000098 */ 		var content_nodes = (function () {
/* 000098 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000098 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000098 */ 		}) ();
/* 000102 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000103 */ 			var node = __getitem__ (content_nodes, 0);
/* 000104 */ 			if (__t__ (__t__ ((function () {
/* 000104 */ 				var __accu0__ = node;
/* 000104 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000104 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000107 */ 				return content_nodes;
/* 000107 */ 			}
/* 000107 */ 		}
/* 000109 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000109 */ 		__except0__.__cause__ = null;
/* 000109 */ 		throw __except0__;
/* 000109 */ 	});}
/* 000109 */ });
/* 000116 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000124 */ export var _make_content_handler = function (c) {
/* 000124 */ 	if (arguments.length) {
/* 000124 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 				switch (__attrib0__) {
/* 000124 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 	}
/* 000124 */ 	else {
/* 000124 */ 	}
/* 000125 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000126 */ 		return c;
/* 000126 */ 	}
/* 000127 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000128 */ 		var c = dict ({'name': c});
/* 000128 */ 	}
/* 000129 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000130 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000130 */ 			var __accu0__ = c;
/* 000130 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000130 */ 		}) ()));
/* 000130 */ 	}
/* 000131 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000131 */ 	__except0__.__cause__ = null;
/* 000131 */ 	throw __except0__;
/* 000131 */ };
/* 000137 */ export var float_label_arg = __call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000137 */ 	var __accu0__ = latexnodes_parsers;
/* 000137 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000137 */ }) (), argname: 'label'}))]}));
/* 000145 */ export var float_caption_arg = __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}));
/* 000152 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [FLMEnvironmentSpecBase], {
/* 000152 */ 	__module__: __name__,
/* 000154 */ 	is_block_level: true,
/* 000156 */ 	float_content_is_block_level: true,
/* 000158 */ 	float_content_render_at_environment_node_location: true,
/* 000167 */ 	allowed_in_standalone_mode: false,
/* 000169 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000169 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000169 */ 			var content_handlers = null;
/* 000169 */ 		};
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000174 */ 		if (__t__ (content_handlers === null)) {
/* 000175 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000175 */ 		}
/* 000176 */ 		var content_handlers = (function () {
/* 000176 */ 			var __accu0__ = [];
/* 000176 */ 			var __iterable0__ = content_handlers;
/* 000176 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 				(function () {
/* 000178 */ 					var __accu1__ = __accu0__;
/* 000177 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000177 */ 				}) ();
/* 000177 */ 			}
/* 000177 */ 			return __accu0__;
/* 000177 */ 		}) ();
/* 000180 */ 		self.float_type = float_type;
/* 000181 */ 		self.content_handlers = content_handlers;
/* 000181 */ 	});},
/* 000183 */ 	_fields: tuple (['float_type', 'content_handlers']),
/* 000185 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [float_label_arg, float_caption_arg], environments: [], specials: []}));
/* 000195 */ 		var __iterable0__ = self.content_handlers;
/* 000195 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 			(function () {
/* 000196 */ 				var __accu0__ = content_handler;
/* 000196 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000196 */ 			}) ();
/* 000196 */ 		}
/* 000202 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000202 */ 	});},
/* 000206 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000212 */ 		node.flm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000213 */ 		node.flm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000215 */ 		var float_content_nodes = [];
/* 000217 */ 		var __iterable0__ = node.nodelist;
/* 000217 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000217 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000218 */ 			if (__t__ ((function () {
/* 000218 */ 				var __accu0__ = n;
/* 000218 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000218 */ 			}) ())) {
/* 000220 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000222 */ 					__setitem__ (node.flm_float_label, 'label_node', n);
/* 000224 */ 					var ref_label_node_args = (function () {
/* 000224 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000224 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000224 */ 					}) ();
/* 000227 */ 					var ref_label_full = (function () {
/* 000227 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000227 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000227 */ 					}) ();
/* 000228 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000229 */ 						var __left0__ = (function () {
/* 000229 */ 							var __accu0__ = ref_label_full;
/* 000229 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000229 */ 						}) ();
/* 000229 */ 						var ref_label_prefix = __left0__ [0];
/* 000229 */ 						var ref_label = __left0__ [1];
/* 000229 */ 					}
/* 000230 */ 					else {
/* 000231 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000231 */ 						var ref_label_prefix = __left0__ [0];
/* 000231 */ 						var ref_label = __left0__ [1];
/* 000231 */ 					}
/* 000233 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000234 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000234 */ 						__except0__.__cause__ = null;
/* 000234 */ 						throw __except0__;
/* 000234 */ 					}
/* 000240 */ 					__setitem__ (node.flm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000241 */ 					__setitem__ (node.flm_float_label, 'ref_label', ref_label);
/* 000243 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000244 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000244 */ 						__except0__.__cause__ = null;
/* 000244 */ 						throw __except0__;
/* 000244 */ 					}
/* 000244 */ 					continue;
/* 000244 */ 				}
/* 000252 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000254 */ 					__setitem__ (node.flm_float_caption, 'caption_node', n);
/* 000256 */ 					var ref_caption_node_args = (function () {
/* 000256 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000256 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000256 */ 					}) ();
/* 000260 */ 					var ref_caption_nodelist = (function () {
/* 000260 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000260 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000260 */ 					}) ();
/* 000261 */ 					__setitem__ (node.flm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000261 */ 					continue;
/* 000261 */ 				}
/* 000261 */ 			}
/* 000265 */ 			(function () {
/* 000265 */ 				var __accu0__ = float_content_nodes;
/* 000265 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000265 */ 			}) ();
/* 000265 */ 		}
/* 000267 */ 		var float_content_nodes = (function () {
/* 000267 */ 			var __accu0__ = node.latex_walker;
/* 000267 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000267 */ 		}) ();
/* 000273 */ 		var errors = [];
/* 000274 */ 		var final_content_nodes = null;
/* 000275 */ 		var __iterable0__ = self.content_handlers;
/* 000275 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 			try {
/* 000277 */ 				var final_content_nodes = (function () {
/* 000277 */ 					var __accu0__ = content_handler;
/* 000277 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000277 */ 				}) ();
/* 000277 */ 			}
/* 000277 */ 			catch (__except0__) {
/* 000277 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000277 */ 					var e = __except0__;
/* 000281 */ 					(function () {
/* 000281 */ 						var __accu0__ = errors;
/* 000281 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000281 */ 					}) ();
/* 000281 */ 				}
/* 000281 */ 				else {
/* 000281 */ 					throw __except0__;
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000284 */ 		if (__t__ (final_content_nodes === null)) {
/* 000290 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000290 */ 				var __accu0__ = '\n';
/* 000290 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000290 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000290 */ 			__except0__.__cause__ = null;
/* 000290 */ 			throw __except0__;
/* 000290 */ 		}
/* 000294 */ 		node.flm_float_content_nodelist = final_content_nodes;
/* 000298 */ 		return node;
/* 000298 */ 	});},
/* 000301 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000303 */ 		var floats_mgr = (function () {
/* 000303 */ 			var __accu0__ = render_context;
/* 000303 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000303 */ 		}) ();
/* 000305 */ 		// pass;
/* 000309 */ 		var ref_label_prefix = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000310 */ 		var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000312 */ 		var numbered = true;
/* 000313 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000315 */ 			var numbered = false;
/* 000315 */ 		}
/* 000317 */ 		var float_instance = (function () {
/* 000317 */ 			var __accu0__ = floats_mgr;
/* 000317 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.flm_float_caption, 'caption_nodelist'), content_nodelist: node.flm_float_content_nodelist}));
/* 000317 */ 		}) ();
/* 000332 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000333 */ 			return (function () {
/* 000333 */ 				var __accu0__ = self;
/* 000333 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000333 */ 			}) ();
/* 000333 */ 		}
/* 000335 */ 		return (function () {
/* 000335 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000335 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)], render_context: render_context}));
/* 000335 */ 		}) ();
/* 000335 */ 	});},
/* 000342 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000344 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000346 */ 		return (function () {
/* 000346 */ 			var __accu0__ = fragment_renderer;
/* 000346 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000346 */ 		}) ();
/* 000346 */ 	});},
/* 000354 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000356 */ 		var recopt_floats = (function () {
/* 000356 */ 			var __accu0__ = recomposer;
/* 000356 */ 			return __call__ (__accu0__.get_options, __accu0__, 'floats');
/* 000356 */ 		}) ();
/* 000357 */ 		var keep_as_is = (function () {
/* 000357 */ 			var __accu0__ = recopt_floats;
/* 000357 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000357 */ 		}) ();
/* 000358 */ 		var captioncmd_for_num_only = (function () {
/* 000358 */ 			var __accu0__ = recopt_floats;
/* 000358 */ 			return __call__ (__accu0__.py_get, __accu0__, 'captioncmd_for_num_only', '\\caption{}');
/* 000358 */ 		}) ();
/* 000360 */ 		if (__t__ (keep_as_is)) {
/* 000361 */ 			return false;
/* 000361 */ 		}
/* 000364 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000368 */ 		var has_number = has_label;
/* 000369 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000371 */ 		var env_name = 'flmFloat';
/* 000372 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000373 */ 		if (__t__ (has_number)) {
/* 000374 */ 			if (__t__ (has_caption)) {
/* 000375 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000375 */ 			}
/* 000376 */ 			else {
/* 000377 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000377 */ 			}
/* 000377 */ 		}
/* 000379 */ 		else if (__t__ (has_caption)) {
/* 000380 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000380 */ 		}
/* 000381 */ 		else {
/* 000382 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000382 */ 		}
/* 000384 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000385 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000385 */ 			var __accu0__ = recomposer;
/* 000385 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000385 */ 		}) ());
/* 000389 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000389 */ 			var __accu0__ = recomposer;
/* 000389 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flm_float_content_nodelist);
/* 000389 */ 		}) ());
/* 000391 */ 		if (__t__ (has_caption)) {
/* 000392 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000392 */ 				var __accu0__ = recomposer;
/* 000392 */ 				return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000392 */ 			}) ());
/* 000392 */ 		}
/* 000396 */ 		if (__t__ (has_label)) {
/* 000397 */ 			if (__t__ (!__t__ ((has_caption)))) {
/* 000400 */ 				var s = __call__ (__iadd__, null, s, captioncmd_for_num_only);
/* 000400 */ 			}
/* 000401 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000402 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000403 */ 			var safe_label_info = (function () {
/* 000403 */ 				var __accu0__ = recomposer;
/* 000403 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000403 */ 			}) ();
/* 000406 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000406 */ 		}
/* 000408 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000410 */ 		return s;
/* 000410 */ 	});}
/* 000410 */ });
/* 000420 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000420 */ 	__module__: __name__,
/* 000421 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000421 */ 		var float_type = null;
/* 000421 */ 		var float_type_info = null;
/* 000421 */ 		var number = null;
/* 000421 */ 		var formatted_counter_value_flm = null;
/* 000421 */ 		var ref_label_prefix = null;
/* 000421 */ 		var ref_label = null;
/* 000421 */ 		var target_id = null;
/* 000421 */ 		var caption_nodelist = null;
/* 000421 */ 		var content_nodelist = null;
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000433 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000434 */ 		self.float_type = float_type;
/* 000435 */ 		self.float_type_info = float_type_info;
/* 000436 */ 		self.number = number;
/* 000437 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000438 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000439 */ 		self.ref_label = ref_label;
/* 000440 */ 		self.target_id = target_id;
/* 000441 */ 		self.caption_nodelist = caption_nodelist;
/* 000442 */ 		self.content_nodelist = content_nodelist;
/* 000443 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000443 */ 	});},
/* 000448 */ 	get asdict () {return __get__ (this, function (self) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000449 */ 		return (function () {
/* 000449 */ 			var __accu0__ = [];
/* 000449 */ 			var __iterable0__ = self._fields;
/* 000449 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000449 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000449 */ 				(function () {
/* 000449 */ 					var __accu1__ = __accu0__;
/* 000449 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000449 */ 				}) ();
/* 000449 */ 			}
/* 000449 */ 			return dict (__accu0__);
/* 000449 */ 		}) ();
/* 000449 */ 	});},
/* 000451 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000451 */ 		if (arguments.length) {
/* 000451 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000451 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000451 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000451 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000451 */ 					switch (__attrib0__) {
/* 000451 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 					}
/* 000451 */ 				}
/* 000451 */ 			}
/* 000451 */ 		}
/* 000451 */ 		else {
/* 000451 */ 		}
/* 000452 */ 		return (function () {
/* 000452 */ 			var __accu0__ = '{}({})';
/* 000454 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000454 */ 				var __accu1__ = ', ';
/* 000454 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000454 */ 					var __accu2__ = [];
/* 000454 */ 					var __iterable0__ = self._fields;
/* 000454 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000454 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000454 */ 						(function () {
/* 000454 */ 							var __accu3__ = __accu2__;
/* 000454 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000454 */ 						}) ();
/* 000454 */ 					}
/* 000454 */ 					return __accu2__;
/* 000454 */ 				}) ());
/* 000454 */ 			}) ());
/* 000454 */ 		}) ();
/* 000454 */ 	});}
/* 000454 */ });
/* 000460 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000460 */ 	if (arguments.length) {
/* 000460 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 				switch (__attrib0__) {
/* 000460 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 	}
/* 000460 */ 	else {
/* 000460 */ 	}
/* 000461 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000462 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000462 */ 	}
/* 000470 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000471 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000471 */ 	}
/* 000477 */ 	else {
/* 000480 */ 		var float_type_cap = (function () {
/* 000480 */ 			var __accu0__ = float_type;
/* 000480 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000480 */ 		}) ();
/* 000481 */ 		var prefix_display = tuple ([dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')})]);
/* 000481 */ 	}
/* 000485 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000485 */ };
/* 000494 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000494 */ 	__module__: __name__,
/* 000495 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000495 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000495 */ 			var float_caption_name = null;
/* 000495 */ 		};
/* 000495 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000495 */ 			var counter_formatter = null;
/* 000495 */ 		};
/* 000495 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000495 */ 			var content_handlers = null;
/* 000495 */ 		};
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000503 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000505 */ 		self.float_type = float_type;
/* 000507 */ 		if (__t__ (float_caption_name === null)) {
/* 000508 */ 			var float_caption_name = float_type;
/* 000508 */ 		}
/* 000510 */ 		self.float_caption_name = float_caption_name;
/* 000512 */ 		if (__t__ (counter_formatter === null)) {
/* 000513 */ 			var counter_formatter = dict ({'format_num': 'arabic'});
/* 000513 */ 		}
/* 000517 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000521 */ 		self.content_handlers = content_handlers;
/* 000523 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000523 */ 	});},
/* 000526 */ 	get asdict () {return __get__ (this, function (self) {
/* 000526 */ 		if (arguments.length) {
/* 000526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000526 */ 					switch (__attrib0__) {
/* 000526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 		else {
/* 000526 */ 		}
/* 000527 */ 		return (function () {
/* 000527 */ 			var __accu0__ = [];
/* 000527 */ 			var __iterable0__ = self._fields;
/* 000527 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000527 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000527 */ 				(function () {
/* 000527 */ 					var __accu1__ = __accu0__;
/* 000527 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000527 */ 				}) ();
/* 000527 */ 			}
/* 000527 */ 			return dict (__accu0__);
/* 000527 */ 		}) ();
/* 000527 */ 	});},
/* 000529 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000530 */ 		return (function () {
/* 000530 */ 			var __accu0__ = '{}({})';
/* 000532 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000532 */ 				var __accu1__ = ', ';
/* 000532 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000532 */ 					var __accu2__ = [];
/* 000532 */ 					var __iterable0__ = self._fields;
/* 000532 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000532 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000532 */ 						(function () {
/* 000532 */ 							var __accu3__ = __accu2__;
/* 000532 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000532 */ 						}) ();
/* 000532 */ 					}
/* 000532 */ 					return __accu2__;
/* 000532 */ 				}) ());
/* 000532 */ 			}) ());
/* 000532 */ 		}) ();
/* 000532 */ 	});}
/* 000532 */ });
/* 000544 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000552 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000552 */ 	__module__: __name__,
/* 000554 */ 	feature_name: 'floats',
/* 000555 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000557 */ 	feature_optional_dependencies: ['refs'],
/* 000559 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000559 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000559 */ 			var float_types = null;
/* 000559 */ 		};
/* 000559 */ 		if (arguments.length) {
/* 000559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000559 */ 					switch (__attrib0__) {
/* 000559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 					}
/* 000559 */ 				}
/* 000559 */ 			}
/* 000559 */ 		}
/* 000559 */ 		else {
/* 000559 */ 		}
/* 000560 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000561 */ 		if (__t__ (float_types === null)) {
/* 000562 */ 			var float_types = _default_float_types;
/* 000562 */ 		}
/* 000563 */ 		var _mkfloattypeobj = function (x) {
/* 000563 */ 			if (arguments.length) {
/* 000563 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000563 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000563 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000563 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000563 */ 						switch (__attrib0__) {
/* 000563 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						}
/* 000563 */ 					}
/* 000563 */ 				}
/* 000563 */ 			}
/* 000563 */ 			else {
/* 000563 */ 			}
/* 000564 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000565 */ 				return x;
/* 000565 */ 			}
/* 000566 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000566 */ 		};
/* 000567 */ 		self.float_types_list = (function () {
/* 000567 */ 			var __accu0__ = [];
/* 000567 */ 			var __iterable0__ = float_types;
/* 000567 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000567 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000567 */ 				(function () {
/* 000567 */ 					var __accu1__ = __accu0__;
/* 000567 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000567 */ 				}) ();
/* 000567 */ 			}
/* 000567 */ 			return __accu0__;
/* 000567 */ 		}) ();
/* 000568 */ 		self.float_types = (function () {
/* 000568 */ 			var __accu0__ = [];
/* 000568 */ 			var __iterable0__ = self.float_types_list;
/* 000568 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000570 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000570 */ 				(function () {
/* 000570 */ 					var __accu1__ = __accu0__;
/* 000570 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000570 */ 				}) ();
/* 000570 */ 			}
/* 000570 */ 			return dict (__accu0__);
/* 000570 */ 		}) ();
/* 000570 */ 	});},
/* 000573 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000574 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000574 */ 	});},
/* 000579 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000579 */ 		if (arguments.length) {
/* 000579 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000579 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000579 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000579 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000579 */ 					switch (__attrib0__) {
/* 000579 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 					}
/* 000579 */ 				}
/* 000579 */ 			}
/* 000579 */ 		}
/* 000579 */ 		else {
/* 000579 */ 		}
/* 000580 */ 		var environments = [];
/* 000581 */ 		var __iterable0__ = (function () {
/* 000581 */ 			var __accu0__ = self.float_types;
/* 000581 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000581 */ 		}) ();
/* 000581 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000581 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000581 */ 			var float_type = __left0__ [0];
/* 000581 */ 			var ftinfo = __left0__ [1];
/* 000582 */ 			(function () {
/* 000582 */ 				var __accu0__ = environments;
/* 000583 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000583 */ 					var __accu1__ = self;
/* 000583 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000583 */ 				}) ());
/* 000583 */ 			}) ();
/* 000583 */ 		}
/* 000585 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000587 */ 	});},
/* 000587 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000587 */ 		__module__: __name__,
/* 000589 */ 		get initialize () {return __get__ (this, function (self) {
/* 000589 */ 			if (arguments.length) {
/* 000589 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 						switch (__attrib0__) {
/* 000589 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						}
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 			else {
/* 000589 */ 			}
/* 000590 */ 			self.floats = (function () {
/* 000590 */ 				var __accu0__ = [];
/* 000592 */ 				var __iterable0__ = (function () {
/* 000592 */ 					var __accu1__ = self.feature.float_types;
/* 000592 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000592 */ 				}) ();
/* 000592 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000592 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000592 */ 					var float_type = __left0__ [0];
/* 000592 */ 					var ftinfo = __left0__ [1];
/* 000592 */ 					(function () {
/* 000592 */ 						var __accu1__ = __accu0__;
/* 000592 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000592 */ 					}) ();
/* 000592 */ 				}
/* 000592 */ 				return dict (__accu0__);
/* 000592 */ 			}) ();
/* 000594 */ 			self.float_counters = (function () {
/* 000594 */ 				var __accu0__ = [];
/* 000596 */ 				var __iterable0__ = (function () {
/* 000596 */ 					var __accu1__ = self.feature.float_types;
/* 000596 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000596 */ 				}) ();
/* 000596 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000596 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000596 */ 					var float_type = __left0__ [0];
/* 000596 */ 					var ftinfo = __left0__ [1];
/* 000596 */ 					(function () {
/* 000596 */ 						var __accu1__ = __accu0__;
/* 000596 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 0]);
/* 000596 */ 					}) ();
/* 000596 */ 				}
/* 000596 */ 				return dict (__accu0__);
/* 000596 */ 			}) ();
/* 000598 */ 			self.float_instances = dict ({});
/* 000600 */ 			if (__t__ ((function () {
/* 000600 */ 				var __accu0__ = self.render_context;
/* 000600 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000600 */ 			}) ())) {
/* 000601 */ 				var refs_mgr = (function () {
/* 000601 */ 					var __accu0__ = self.render_context;
/* 000601 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000601 */ 				}) ();
/* 000602 */ 				var __iterable0__ = (function () {
/* 000602 */ 					var __accu0__ = self.feature.float_types;
/* 000602 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000602 */ 				}) ();
/* 000602 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000602 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000602 */ 					var float_type = __left0__ [0];
/* 000602 */ 					var ftinfo = __left0__ [1];
/* 000603 */ 					(function () {
/* 000603 */ 						var __accu0__ = refs_mgr;
/* 000603 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: ftinfo.counter_formatter}));
/* 000603 */ 					}) ();
/* 000603 */ 				}
/* 000603 */ 			}
/* 000603 */ 		});},
/* 000607 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000607 */ 			var numbered = true;
/* 000607 */ 			var ref_label_prefix = null;
/* 000607 */ 			var ref_label = null;
/* 000607 */ 			var caption_nodelist = null;
/* 000607 */ 			var content_nodelist = null;
/* 000607 */ 			if (arguments.length) {
/* 000607 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 						switch (__attrib0__) {
/* 000607 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						}
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 			else {
/* 000607 */ 			}
/* 000619 */ 			var node_id = (function () {
/* 000619 */ 				var __accu0__ = self;
/* 000619 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000619 */ 			}) ();
/* 000621 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000623 */ 				return __getitem__ (self.float_instances, node_id);
/* 000623 */ 			}
/* 000625 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000627 */ 			// pass;
/* 000631 */ 			if (__t__ (numbered)) {
/* 000632 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000633 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000634 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000636 */ 				var fmtvalue_flm_text = (function () {
/* 000636 */ 					var __accu0__ = fmtcounter;
/* 000636 */ 					return __call__ (__accu0__.format_flm, __accu0__, number, __kwargtrans__ ({with_prefix: false}));
/* 000636 */ 				}) ();
/* 000637 */ 				var fmtvalue_flm = (function () {
/* 000637 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000637 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000637 */ 				}) ();
/* 000643 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000643 */ 			}
/* 000644 */ 			else {
/* 000646 */ 				var number = null;
/* 000647 */ 				var fmtvalue_flm = null;
/* 000648 */ 				var fmtcounter_id = null;
/* 000648 */ 			}
/* 000650 */ 			var target_id = null;
/* 000651 */ 			if (__t__ (number !== null)) {
/* 000652 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000652 */ 			}
/* 000654 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000668 */ 			(function () {
/* 000668 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000668 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000668 */ 			}) ();
/* 000671 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000671 */ 				var __accu0__ = self.render_context;
/* 000671 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000671 */ 			}) ())) {
/* 000675 */ 				var refs_mgr = (function () {
/* 000675 */ 					var __accu0__ = self.render_context;
/* 000675 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000675 */ 				}) ();
/* 000677 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000677 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000681 */ 					var formatted_ref_flm_text = (function () {
/* 000681 */ 						var __accu0__ = self;
/* 000681 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000681 */ 					}) ();
/* 000683 */ 					(function () {
/* 000683 */ 						var __accu0__ = refs_mgr;
/* 000683 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: number, counter_formatter_id: fmtcounter_id}));
/* 000683 */ 					}) ();
/* 000683 */ 				}
/* 000683 */ 			}
/* 000693 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000694 */ 			return float_instance;
/* 000694 */ 		});},
/* 000696 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000696 */ 			if (arguments.length) {
/* 000696 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000696 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000696 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000696 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000696 */ 						switch (__attrib0__) {
/* 000696 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 						}
/* 000696 */ 					}
/* 000696 */ 				}
/* 000696 */ 			}
/* 000696 */ 			else {
/* 000696 */ 			}
/* 000697 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_flm.flm_text);
/* 000697 */ 		});}
/* 000697 */ 	}),
/* 000705 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000705 */ 		if (arguments.length) {
/* 000705 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 					switch (__attrib0__) {
/* 000705 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 			}
/* 000705 */ 		}
/* 000705 */ 		else {
/* 000705 */ 		}
/* 000706 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000706 */ 	});},
/* 000709 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000709 */ 		if (arguments.length) {
/* 000709 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000709 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000709 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000709 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000709 */ 					switch (__attrib0__) {
/* 000709 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 					}
/* 000709 */ 				}
/* 000709 */ 			}
/* 000709 */ 		}
/* 000709 */ 		else {
/* 000709 */ 		}
/* 000716 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000727 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000731 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000736 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000736 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000736 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000737 */ 			var ftname = ft_env.environmentname;
/* 000738 */ 			var ch_list = ft_env.content_handlers;
/* 000739 */ 			var __iterable1__ = ch_list;
/* 000739 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000739 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000740 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000741 */ 				(function () {
/* 000741 */ 					var __accu0__ = ch;
/* 000741 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000741 */ 				}) ();
/* 000743 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000743 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000743 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000744 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000745 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000745 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000745 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000746 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000746 */ 							var whatname = __left0__ [0];
/* 000746 */ 							var _ = __left0__ [1];
/* 000748 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000749 */ 								(function () {
/* 000749 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000749 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000749 */ 								}) ();
/* 000750 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000750 */ 							}
/* 000751 */ 							else {
/* 000752 */ 								(function () {
/* 000752 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000752 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000752 */ 								}) ();
/* 000752 */ 							}
/* 000752 */ 						}
/* 000752 */ 					}
/* 000752 */ 				}
/* 000752 */ 			}
/* 000752 */ 		}
/* 000755 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000755 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000755 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000756 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000756 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000756 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000757 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000757 */ 				var whatname = __left0__ [0];
/* 000757 */ 				var whattext = __left0__ [1];
/* 000762 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000762 */ 					var __accu0__ = ', ';
/* 000762 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000762 */ 						var __accu1__ = [];
/* 000762 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000762 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000763 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000763 */ 							(function () {
/* 000763 */ 								var __accu2__ = __accu1__;
/* 000763 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000763 */ 							}) ();
/* 000763 */ 						}
/* 000763 */ 						return __accu1__;
/* 000763 */ 					}) ());
/* 000763 */ 				}) ()));
/* 000765 */ 				(function () {
/* 000765 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000765 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000765 */ 				}) ();
/* 000765 */ 			}
/* 000765 */ 		}
/* 000767 */ 		return defs;
/* 000767 */ 	});}
/* 000767 */ });
/* 000771 */ export var _whatname = function (m, which) {
/* 000771 */ 	if (arguments.length) {
/* 000771 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000771 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000771 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000771 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000771 */ 				switch (__attrib0__) {
/* 000771 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 				}
/* 000771 */ 			}
/* 000771 */ 		}
/* 000771 */ 	}
/* 000771 */ 	else {
/* 000771 */ 	}
/* 000772 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000773 */ 		var whatname = m.macroname;
/* 000774 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000774 */ 	}
/* 000775 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000776 */ 		var whatname = m.environmentname;
/* 000777 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000777 */ 	}
/* 000778 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000779 */ 		var whatname = m.specials_chars;
/* 000780 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000780 */ 	}
/* 000781 */ 	else {
/* 000782 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000782 */ 		__except0__.__cause__ = null;
/* 000782 */ 		throw __except0__;
/* 000782 */ 	}
/* 000783 */ 	return tuple ([whatname, whattext]);
/* 000783 */ };
/* 000785 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000785 */ 	if (arguments.length) {
/* 000785 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000785 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000785 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000785 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000785 */ 				switch (__attrib0__) {
/* 000785 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000785 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000785 */ 				}
/* 000785 */ 			}
/* 000785 */ 		}
/* 000785 */ 	}
/* 000785 */ 	else {
/* 000785 */ 	}
/* 000786 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000787 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000787 */ 			if (arguments.length) {
/* 000787 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000787 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000787 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000787 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000787 */ 					}
/* 000787 */ 				}
/* 000787 */ 			}
/* 000787 */ 			else {
/* 000787 */ 			}
/* 000787 */ 			return add_flm_doc;
/* 000787 */ 		});
/* 000788 */ 		return mdef;
/* 000788 */ 	}
/* 000789 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000790 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000790 */ 		if (arguments.length) {
/* 000790 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000790 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000790 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000790 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000790 */ 				}
/* 000790 */ 			}
/* 000790 */ 		}
/* 000790 */ 		else {
/* 000790 */ 		}
/* 000790 */ 		return (function () {
/* 000791 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000793 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000793 */ 		}) ();
/* 000793 */ 	});
/* 000795 */ 	return mdef;
/* 000795 */ };
/* 000802 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map