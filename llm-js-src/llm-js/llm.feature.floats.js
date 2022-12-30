/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:40
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {CellsEnvironment} from './llm.feature.cells.js';
/* 000024 */ import {SimpleIncludeGraphicsMacro} from './llm.feature.graphics.js';
/* 000023 */ import {Feature} from './llm.feature._base.js';
/* 000020 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000019 */ import {LLMEnvironmentSpecBase} from './llm.llmspecinfo.js';
/* 000018 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {MacroSpec, LatexWalkerParseError, LatexEnvironmentBodyContentsParser, LLMArgumentSpec, latexnodes_parsers, CellsEnvironment, ParsedArgumentsInfo, latexnodes_nodes, ParsingStateDeltaExtendLatexContextDb, Feature, SimpleIncludeGraphicsMacro, fmthelpers, LLMEnvironmentSpecBase};
/* 000001 */ var __name__ = 'llm.feature.floats';
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
/* 000052 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000054 */ 		return content_nodes;
/* 000054 */ 	});}
/* 000054 */ });
/* 000057 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000057 */ 	__module__: __name__,
/* 000059 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000060 */ 		(function () {
/* 000060 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000061 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000061 */ 		}) ();
/* 000061 */ 	});},
/* 000064 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000066 */ 		var content_nodes = (function () {
/* 000066 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000066 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000066 */ 		}) ();
/* 000070 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000071 */ 			var node = __getitem__ (content_nodes, 0);
/* 000072 */ 			if (__t__ (__t__ ((function () {
/* 000072 */ 				var __accu0__ = node;
/* 000072 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000072 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000075 */ 				return content_nodes;
/* 000075 */ 			}
/* 000075 */ 		}
/* 000077 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000077 */ 		__except0__.__cause__ = null;
/* 000077 */ 		throw __except0__;
/* 000077 */ 	});}
/* 000077 */ });
/* 000083 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000083 */ 	__module__: __name__,
/* 000085 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000086 */ 		(function () {
/* 000086 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000087 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000087 */ 		}) ();
/* 000087 */ 	});},
/* 000090 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000092 */ 		var content_nodes = (function () {
/* 000092 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000092 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000092 */ 		}) ();
/* 000096 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000097 */ 			var node = __getitem__ (content_nodes, 0);
/* 000098 */ 			if (__t__ (__t__ ((function () {
/* 000098 */ 				var __accu0__ = node;
/* 000098 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000098 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000101 */ 				return content_nodes;
/* 000101 */ 			}
/* 000101 */ 		}
/* 000103 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000103 */ 		__except0__.__cause__ = null;
/* 000103 */ 		throw __except0__;
/* 000103 */ 	});}
/* 000103 */ });
/* 000110 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000118 */ export var _make_content_handler = function (c) {
/* 000118 */ 	if (arguments.length) {
/* 000118 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 				switch (__attrib0__) {
/* 000118 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 	}
/* 000118 */ 	else {
/* 000118 */ 	}
/* 000119 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000120 */ 		return c;
/* 000120 */ 	}
/* 000121 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000122 */ 		var c = dict ({'name': c});
/* 000122 */ 	}
/* 000123 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000124 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000124 */ 			var __accu0__ = c;
/* 000124 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000124 */ 		}) ()));
/* 000124 */ 	}
/* 000125 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000125 */ 	__except0__.__cause__ = null;
/* 000125 */ 	throw __except0__;
/* 000125 */ };
/* 000129 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [LLMEnvironmentSpecBase], {
/* 000129 */ 	__module__: __name__,
/* 000131 */ 	is_block_level: true,
/* 000133 */ 	float_content_is_block_level: true,
/* 000135 */ 	float_content_render_at_environment_node_location: true,
/* 000143 */ 	allowed_in_standalone_mode: false,
/* 000145 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000145 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000145 */ 			var content_handlers = null;
/* 000145 */ 		};
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000150 */ 		if (__t__ (content_handlers === null)) {
/* 000151 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000151 */ 		}
/* 000152 */ 		var content_handlers = (function () {
/* 000152 */ 			var __accu0__ = [];
/* 000152 */ 			var __iterable0__ = content_handlers;
/* 000152 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 				(function () {
/* 000154 */ 					var __accu1__ = __accu0__;
/* 000153 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000153 */ 				}) ();
/* 000153 */ 			}
/* 000153 */ 			return __accu0__;
/* 000153 */ 		}) ();
/* 000156 */ 		self.float_type = float_type;
/* 000157 */ 		self.content_handlers = content_handlers;
/* 000157 */ 	});},
/* 000159 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000164 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000164 */ 			var __accu0__ = latexnodes_parsers;
/* 000164 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000171 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}))], environments: [], specials: []}));
/* 000181 */ 		var __iterable0__ = self.content_handlers;
/* 000181 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 			(function () {
/* 000182 */ 				var __accu0__ = content_handler;
/* 000182 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000182 */ 			}) ();
/* 000182 */ 		}
/* 000188 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000188 */ 	});},
/* 000192 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000198 */ 		node.llm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000199 */ 		node.llm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000201 */ 		var float_content_nodes = [];
/* 000203 */ 		var __iterable0__ = node.nodelist;
/* 000203 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 			if (__t__ ((function () {
/* 000204 */ 				var __accu0__ = n;
/* 000204 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000204 */ 			}) ())) {
/* 000206 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000208 */ 					__setitem__ (node.llm_float_label, 'label_node', n);
/* 000210 */ 					var ref_label_node_args = (function () {
/* 000210 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000210 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000210 */ 					}) ();
/* 000213 */ 					var ref_label_full = (function () {
/* 000213 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000213 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000213 */ 					}) ();
/* 000214 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000215 */ 						var __left0__ = (function () {
/* 000215 */ 							var __accu0__ = ref_label_full;
/* 000215 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000215 */ 						}) ();
/* 000215 */ 						var ref_label_prefix = __left0__ [0];
/* 000215 */ 						var ref_label = __left0__ [1];
/* 000215 */ 					}
/* 000216 */ 					else {
/* 000217 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000217 */ 						var ref_label_prefix = __left0__ [0];
/* 000217 */ 						var ref_label = __left0__ [1];
/* 000217 */ 					}
/* 000219 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000220 */ 						var __except0__ = __call__ (LatexWalkerParseError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000220 */ 						__except0__.__cause__ = null;
/* 000220 */ 						throw __except0__;
/* 000220 */ 					}
/* 000226 */ 					__setitem__ (node.llm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000227 */ 					__setitem__ (node.llm_float_label, 'ref_label', ref_label);
/* 000229 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000230 */ 						var __except0__ = __call__ (LatexWalkerParseError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000230 */ 						__except0__.__cause__ = null;
/* 000230 */ 						throw __except0__;
/* 000230 */ 					}
/* 000230 */ 					continue;
/* 000230 */ 				}
/* 000238 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000240 */ 					__setitem__ (node.llm_float_caption, 'caption_node', n);
/* 000242 */ 					var ref_caption_node_args = (function () {
/* 000242 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000242 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000242 */ 					}) ();
/* 000246 */ 					var ref_caption_nodelist = (function () {
/* 000246 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000246 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000246 */ 					}) ();
/* 000247 */ 					__setitem__ (node.llm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000247 */ 					continue;
/* 000247 */ 				}
/* 000247 */ 			}
/* 000251 */ 			(function () {
/* 000251 */ 				var __accu0__ = float_content_nodes;
/* 000251 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000251 */ 			}) ();
/* 000251 */ 		}
/* 000253 */ 		var float_content_nodes = (function () {
/* 000253 */ 			var __accu0__ = node.latex_walker;
/* 000253 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000253 */ 		}) ();
/* 000259 */ 		var errors = [];
/* 000260 */ 		var final_content_nodes = null;
/* 000261 */ 		var __iterable0__ = self.content_handlers;
/* 000261 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000261 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 			try {
/* 000263 */ 				var final_content_nodes = (function () {
/* 000263 */ 					var __accu0__ = content_handler;
/* 000263 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000263 */ 				}) ();
/* 000263 */ 			}
/* 000263 */ 			catch (__except0__) {
/* 000263 */ 				if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000263 */ 					var e = __except0__;
/* 000267 */ 					(function () {
/* 000267 */ 						var __accu0__ = errors;
/* 000267 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000267 */ 					}) ();
/* 000267 */ 				}
/* 000267 */ 				else {
/* 000267 */ 					throw __except0__;
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000270 */ 		if (__t__ (final_content_nodes === null)) {
/* 000276 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000276 */ 				var __accu0__ = '\n';
/* 000276 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000276 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000276 */ 			__except0__.__cause__ = null;
/* 000276 */ 			throw __except0__;
/* 000276 */ 		}
/* 000280 */ 		node.llm_float_content_nodelist = final_content_nodes;
/* 000284 */ 		return node;
/* 000284 */ 	});},
/* 000287 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000289 */ 		var floats_mgr = (function () {
/* 000289 */ 			var __accu0__ = render_context;
/* 000289 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000289 */ 		}) ();
/* 000291 */ 		// pass;
/* 000295 */ 		var ref_label_prefix = __getitem__ (node.llm_float_label, 'ref_label_prefix');
/* 000296 */ 		var ref_label = __getitem__ (node.llm_float_label, 'ref_label');
/* 000298 */ 		var numbered = true;
/* 000299 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000301 */ 			var numbered = false;
/* 000301 */ 		}
/* 000303 */ 		var float_instance = (function () {
/* 000303 */ 			var __accu0__ = floats_mgr;
/* 000303 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.llm_float_caption, 'caption_nodelist'), content_nodelist: node.llm_float_content_nodelist}));
/* 000303 */ 		}) ();
/* 000318 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000319 */ 			return (function () {
/* 000319 */ 				var __accu0__ = self;
/* 000319 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000319 */ 			}) ();
/* 000319 */ 		}
/* 000321 */ 		return (function () {
/* 000321 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000321 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)]}));
/* 000321 */ 		}) ();
/* 000321 */ 	});},
/* 000327 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000329 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000331 */ 		return (function () {
/* 000331 */ 			var __accu0__ = fragment_renderer;
/* 000331 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000331 */ 		}) ();
/* 000331 */ 	});}
/* 000331 */ });
/* 000338 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000338 */ 	__module__: __name__,
/* 000339 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000339 */ 		var float_type = null;
/* 000339 */ 		var float_type_info = null;
/* 000339 */ 		var number = null;
/* 000339 */ 		var formatted_counter_value_llm = null;
/* 000339 */ 		var ref_label_prefix = null;
/* 000339 */ 		var ref_label = null;
/* 000339 */ 		var target_id = null;
/* 000339 */ 		var caption_nodelist = null;
/* 000339 */ 		var content_nodelist = null;
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000351 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000352 */ 		self.float_type = float_type;
/* 000353 */ 		self.float_type_info = float_type_info;
/* 000354 */ 		self.number = number;
/* 000355 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000356 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000357 */ 		self.ref_label = ref_label;
/* 000358 */ 		self.target_id = target_id;
/* 000359 */ 		self.caption_nodelist = caption_nodelist;
/* 000360 */ 		self.content_nodelist = content_nodelist;
/* 000361 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_llm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000361 */ 	});},
/* 000366 */ 	get asdict () {return __get__ (this, function (self) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		return (function () {
/* 000367 */ 			var __accu0__ = [];
/* 000367 */ 			var __iterable0__ = self._fields;
/* 000367 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000367 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000367 */ 				(function () {
/* 000367 */ 					var __accu1__ = __accu0__;
/* 000367 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000367 */ 				}) ();
/* 000367 */ 			}
/* 000367 */ 			return dict (__accu0__);
/* 000367 */ 		}) ();
/* 000367 */ 	});},
/* 000369 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 		}
/* 000370 */ 		return (function () {
/* 000370 */ 			var __accu0__ = '{}({})';
/* 000372 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000372 */ 				var __accu1__ = ', ';
/* 000372 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000372 */ 					var __accu2__ = [];
/* 000372 */ 					var __iterable0__ = self._fields;
/* 000372 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 						(function () {
/* 000372 */ 							var __accu3__ = __accu2__;
/* 000372 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000372 */ 						}) ();
/* 000372 */ 					}
/* 000372 */ 					return __accu2__;
/* 000372 */ 				}) ());
/* 000372 */ 			}) ());
/* 000372 */ 		}) ();
/* 000372 */ 	});}
/* 000372 */ });
/* 000379 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000379 */ 	__module__: __name__,
/* 000380 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000380 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var float_caption_name = null;
/* 000380 */ 		};
/* 000380 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var counter_formatter = null;
/* 000380 */ 		};
/* 000380 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var content_handlers = null;
/* 000380 */ 		};
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000388 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000390 */ 		self.float_type = float_type;
/* 000392 */ 		if (__t__ (float_caption_name === null)) {
/* 000393 */ 			var float_caption_name = float_type;
/* 000393 */ 		}
/* 000395 */ 		self.float_caption_name = float_caption_name;
/* 000397 */ 		if (__t__ (counter_formatter === null)) {
/* 000398 */ 			var counter_formatter = 'arabic';
/* 000398 */ 		}
/* 000399 */ 		self.counter_formatter = (function () {
/* 000399 */ 			var __accu0__ = fmthelpers;
/* 000399 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter);
/* 000399 */ 		}) ();
/* 000401 */ 		self.content_handlers = content_handlers;
/* 000403 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000403 */ 	});},
/* 000406 */ 	get asdict () {return __get__ (this, function (self) {
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000407 */ 		return (function () {
/* 000407 */ 			var __accu0__ = [];
/* 000407 */ 			var __iterable0__ = self._fields;
/* 000407 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000407 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000407 */ 				(function () {
/* 000407 */ 					var __accu1__ = __accu0__;
/* 000407 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000407 */ 				}) ();
/* 000407 */ 			}
/* 000407 */ 			return dict (__accu0__);
/* 000407 */ 		}) ();
/* 000407 */ 	});},
/* 000409 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000410 */ 		return (function () {
/* 000410 */ 			var __accu0__ = '{}({})';
/* 000412 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000412 */ 				var __accu1__ = ', ';
/* 000412 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000412 */ 					var __accu2__ = [];
/* 000412 */ 					var __iterable0__ = self._fields;
/* 000412 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000412 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000412 */ 						(function () {
/* 000412 */ 							var __accu3__ = __accu2__;
/* 000412 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000412 */ 						}) ();
/* 000412 */ 					}
/* 000412 */ 					return __accu2__;
/* 000412 */ 				}) ());
/* 000412 */ 			}) ());
/* 000412 */ 		}) ();
/* 000412 */ 	});}
/* 000412 */ });
/* 000419 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000419 */ 	__module__: __name__,
/* 000421 */ 	feature_name: 'floats',
/* 000423 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000423 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000423 */ 			var float_types = null;
/* 000423 */ 		};
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000424 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000425 */ 		if (__t__ (float_types === null)) {
/* 000428 */ 			var float_types = [__call__ (FloatType, null, 'figure', 'Figure', 'arabic', ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', 'arabic', ['cells', 'includegraphics'])];
/* 000428 */ 		}
/* 000430 */ 		var _mkfloattypeobj = function (x) {
/* 000430 */ 			if (arguments.length) {
/* 000430 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 						switch (__attrib0__) {
/* 000430 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						}
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 			else {
/* 000430 */ 			}
/* 000431 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000432 */ 				return x;
/* 000432 */ 			}
/* 000433 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000433 */ 		};
/* 000434 */ 		self.float_types_list = (function () {
/* 000434 */ 			var __accu0__ = [];
/* 000434 */ 			var __iterable0__ = float_types;
/* 000434 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000434 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000434 */ 				(function () {
/* 000434 */ 					var __accu1__ = __accu0__;
/* 000434 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000434 */ 				}) ();
/* 000434 */ 			}
/* 000434 */ 			return __accu0__;
/* 000434 */ 		}) ();
/* 000435 */ 		self.float_types = (function () {
/* 000435 */ 			var __accu0__ = [];
/* 000435 */ 			var __iterable0__ = self.float_types_list;
/* 000435 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000437 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000437 */ 				(function () {
/* 000437 */ 					var __accu1__ = __accu0__;
/* 000437 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000437 */ 				}) ();
/* 000437 */ 			}
/* 000437 */ 			return dict (__accu0__);
/* 000437 */ 		}) ();
/* 000437 */ 	});},
/* 000440 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000441 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000441 */ 	});},
/* 000446 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000446 */ 		if (arguments.length) {
/* 000446 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000446 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000446 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000446 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000446 */ 					switch (__attrib0__) {
/* 000446 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 					}
/* 000446 */ 				}
/* 000446 */ 			}
/* 000446 */ 		}
/* 000446 */ 		else {
/* 000446 */ 		}
/* 000447 */ 		var environments = [];
/* 000448 */ 		var __iterable0__ = (function () {
/* 000448 */ 			var __accu0__ = self.float_types;
/* 000448 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000448 */ 		}) ();
/* 000448 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000448 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000448 */ 			var float_type = __left0__ [0];
/* 000448 */ 			var ftinfo = __left0__ [1];
/* 000449 */ 			(function () {
/* 000449 */ 				var __accu0__ = environments;
/* 000450 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000450 */ 					var __accu1__ = self;
/* 000450 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000450 */ 				}) ());
/* 000450 */ 			}) ();
/* 000450 */ 		}
/* 000452 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000454 */ 	});},
/* 000454 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000454 */ 		__module__: __name__,
/* 000456 */ 		get initialize () {return __get__ (this, function (self) {
/* 000456 */ 			if (arguments.length) {
/* 000456 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 						switch (__attrib0__) {
/* 000456 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						}
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 			else {
/* 000456 */ 			}
/* 000457 */ 			self.floats = (function () {
/* 000457 */ 				var __accu0__ = [];
/* 000459 */ 				var __iterable0__ = (function () {
/* 000459 */ 					var __accu1__ = self.feature.float_types;
/* 000459 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000459 */ 				}) ();
/* 000459 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000459 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000459 */ 					var float_type = __left0__ [0];
/* 000459 */ 					var ftinfo = __left0__ [1];
/* 000459 */ 					(function () {
/* 000459 */ 						var __accu1__ = __accu0__;
/* 000459 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000459 */ 					}) ();
/* 000459 */ 				}
/* 000459 */ 				return dict (__accu0__);
/* 000459 */ 			}) ();
/* 000461 */ 			self.float_counters = (function () {
/* 000461 */ 				var __accu0__ = [];
/* 000463 */ 				var __iterable0__ = (function () {
/* 000463 */ 					var __accu1__ = self.feature.float_types;
/* 000463 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000463 */ 				}) ();
/* 000463 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000463 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000463 */ 					var float_type = __left0__ [0];
/* 000463 */ 					var ftinfo = __left0__ [1];
/* 000463 */ 					(function () {
/* 000463 */ 						var __accu1__ = __accu0__;
/* 000463 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 1]);
/* 000463 */ 					}) ();
/* 000463 */ 				}
/* 000463 */ 				return dict (__accu0__);
/* 000463 */ 			}) ();
/* 000465 */ 			self.float_instances = dict ({});
/* 000465 */ 		});},
/* 000467 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000467 */ 			var numbered = true;
/* 000467 */ 			var ref_label_prefix = null;
/* 000467 */ 			var ref_label = null;
/* 000467 */ 			var caption_nodelist = null;
/* 000467 */ 			var content_nodelist = null;
/* 000467 */ 			if (arguments.length) {
/* 000467 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000467 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000467 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000467 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000467 */ 						switch (__attrib0__) {
/* 000467 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						}
/* 000467 */ 					}
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 			else {
/* 000467 */ 			}
/* 000479 */ 			var node_id = (function () {
/* 000479 */ 				var __accu0__ = self;
/* 000479 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000479 */ 			}) ();
/* 000481 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000483 */ 				return __getitem__ (self.float_instances, node_id);
/* 000483 */ 			}
/* 000485 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000487 */ 			// pass;
/* 000491 */ 			if (__t__ (numbered)) {
/* 000492 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000493 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000494 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000496 */ 				var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000497 */ 				var fmtvalue_llm = (function () {
/* 000497 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000497 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000497 */ 				}) ();
/* 000497 */ 			}
/* 000501 */ 			else {
/* 000503 */ 				var number = null;
/* 000504 */ 				var fmtvalue_llm = null;
/* 000504 */ 			}
/* 000506 */ 			var target_id = null;
/* 000507 */ 			if (__t__ (number !== null)) {
/* 000508 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000508 */ 			}
/* 000510 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_llm: fmtvalue_llm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000524 */ 			(function () {
/* 000524 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000524 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000524 */ 			}) ();
/* 000527 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000527 */ 				var __accu0__ = self.render_context;
/* 000527 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000527 */ 			}) ())) {
/* 000531 */ 				var refs_mgr = (function () {
/* 000531 */ 					var __accu0__ = self.render_context;
/* 000531 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000531 */ 				}) ();
/* 000533 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000533 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000537 */ 					var formatted_ref_llm_text = (function () {
/* 000537 */ 						var __accu0__ = self;
/* 000537 */ 						return __call__ (__accu0__.get_formatted_ref_llm_text, __accu0__, float_instance);
/* 000537 */ 					}) ();
/* 000539 */ 					(function () {
/* 000539 */ 						var __accu0__ = refs_mgr;
/* 000539 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: formatted_ref_llm_text, target_href: '#{}'.format (target_id)}));
/* 000539 */ 					}) ();
/* 000539 */ 				}
/* 000539 */ 			}
/* 000547 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000548 */ 			return float_instance;
/* 000548 */ 		});},
/* 000550 */ 		get get_formatted_ref_llm_text () {return __get__ (this, function (self, float_instance) {
/* 000550 */ 			if (arguments.length) {
/* 000550 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000550 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000550 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000550 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000550 */ 						switch (__attrib0__) {
/* 000550 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 						}
/* 000550 */ 					}
/* 000550 */ 				}
/* 000550 */ 			}
/* 000550 */ 			else {
/* 000550 */ 			}
/* 000551 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_llm.llm_text);
/* 000551 */ 		});}
/* 000551 */ 	})
/* 000551 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.floats.map