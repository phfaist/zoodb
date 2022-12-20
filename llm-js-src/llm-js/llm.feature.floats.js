/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:36
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
/* 000006 */ export {Feature, latexnodes_nodes, LatexEnvironmentBodyContentsParser, ParsingStateDeltaExtendLatexContextDb, LatexWalkerParseError, fmthelpers, SimpleIncludeGraphicsMacro, latexnodes_parsers, MacroSpec, LLMEnvironmentSpecBase, ParsedArgumentsInfo, CellsEnvironment, LLMArgumentSpec};
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
/* 000291 */ 		(function () {
/* 000291 */ 			var __accu0__ = logger;
/* 000291 */ 			return __call__ (__accu0__.debug, __accu0__, 'Rendering float: node={}'.format (node));
/* 000291 */ 		}) ();
/* 000293 */ 		var ref_label_prefix = __getitem__ (node.llm_float_label, 'ref_label_prefix');
/* 000294 */ 		var ref_label = __getitem__ (node.llm_float_label, 'ref_label');
/* 000296 */ 		var numbered = true;
/* 000297 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000299 */ 			var numbered = false;
/* 000299 */ 		}
/* 000301 */ 		var float_instance = (function () {
/* 000301 */ 			var __accu0__ = floats_mgr;
/* 000301 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.llm_float_caption, 'caption_nodelist'), content_nodelist: node.llm_float_content_nodelist}));
/* 000301 */ 		}) ();
/* 000316 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000317 */ 			return (function () {
/* 000317 */ 				var __accu0__ = self;
/* 000317 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000317 */ 			}) ();
/* 000317 */ 		}
/* 000319 */ 		return (function () {
/* 000319 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000319 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)]}));
/* 000319 */ 		}) ();
/* 000319 */ 	});},
/* 000325 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000327 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000329 */ 		return (function () {
/* 000329 */ 			var __accu0__ = fragment_renderer;
/* 000329 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000329 */ 		}) ();
/* 000329 */ 	});}
/* 000329 */ });
/* 000336 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000336 */ 	__module__: __name__,
/* 000337 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000337 */ 		var float_type = null;
/* 000337 */ 		var float_type_info = null;
/* 000337 */ 		var number = null;
/* 000337 */ 		var formatted_counter_value_llm = null;
/* 000337 */ 		var ref_label_prefix = null;
/* 000337 */ 		var ref_label = null;
/* 000337 */ 		var target_id = null;
/* 000337 */ 		var caption_nodelist = null;
/* 000337 */ 		var content_nodelist = null;
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000349 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000350 */ 		self.float_type = float_type;
/* 000351 */ 		self.float_type_info = float_type_info;
/* 000352 */ 		self.number = number;
/* 000353 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000354 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000355 */ 		self.ref_label = ref_label;
/* 000356 */ 		self.target_id = target_id;
/* 000357 */ 		self.caption_nodelist = caption_nodelist;
/* 000358 */ 		self.content_nodelist = content_nodelist;
/* 000359 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_llm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000359 */ 	});},
/* 000364 */ 	get asdict () {return __get__ (this, function (self) {
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000365 */ 		return (function () {
/* 000365 */ 			var __accu0__ = [];
/* 000365 */ 			var __iterable0__ = self._fields;
/* 000365 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000365 */ 				(function () {
/* 000365 */ 					var __accu1__ = __accu0__;
/* 000365 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000365 */ 				}) ();
/* 000365 */ 			}
/* 000365 */ 			return dict (__accu0__);
/* 000365 */ 		}) ();
/* 000365 */ 	});},
/* 000367 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		return (function () {
/* 000368 */ 			var __accu0__ = '{}({})';
/* 000370 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000370 */ 				var __accu1__ = ', ';
/* 000370 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000370 */ 					var __accu2__ = [];
/* 000370 */ 					var __iterable0__ = self._fields;
/* 000370 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000370 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 						(function () {
/* 000370 */ 							var __accu3__ = __accu2__;
/* 000370 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000370 */ 						}) ();
/* 000370 */ 					}
/* 000370 */ 					return __accu2__;
/* 000370 */ 				}) ());
/* 000370 */ 			}) ());
/* 000370 */ 		}) ();
/* 000370 */ 	});}
/* 000370 */ });
/* 000377 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000377 */ 	__module__: __name__,
/* 000378 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000378 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000378 */ 			var float_caption_name = null;
/* 000378 */ 		};
/* 000378 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000378 */ 			var counter_formatter = null;
/* 000378 */ 		};
/* 000378 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000378 */ 			var content_handlers = null;
/* 000378 */ 		};
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000386 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000388 */ 		self.float_type = float_type;
/* 000390 */ 		if (__t__ (float_caption_name === null)) {
/* 000391 */ 			var float_caption_name = float_type;
/* 000391 */ 		}
/* 000393 */ 		self.float_caption_name = float_caption_name;
/* 000395 */ 		if (__t__ (counter_formatter === null)) {
/* 000396 */ 			var counter_formatter = 'arabic';
/* 000396 */ 		}
/* 000397 */ 		self.counter_formatter = (function () {
/* 000397 */ 			var __accu0__ = fmthelpers;
/* 000397 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter);
/* 000397 */ 		}) ();
/* 000399 */ 		self.content_handlers = content_handlers;
/* 000401 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000401 */ 	});},
/* 000404 */ 	get asdict () {return __get__ (this, function (self) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000405 */ 		return (function () {
/* 000405 */ 			var __accu0__ = [];
/* 000405 */ 			var __iterable0__ = self._fields;
/* 000405 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000405 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000405 */ 				(function () {
/* 000405 */ 					var __accu1__ = __accu0__;
/* 000405 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000405 */ 				}) ();
/* 000405 */ 			}
/* 000405 */ 			return dict (__accu0__);
/* 000405 */ 		}) ();
/* 000405 */ 	});},
/* 000407 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000408 */ 		return (function () {
/* 000408 */ 			var __accu0__ = '{}({})';
/* 000410 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000410 */ 				var __accu1__ = ', ';
/* 000410 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000410 */ 					var __accu2__ = [];
/* 000410 */ 					var __iterable0__ = self._fields;
/* 000410 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000410 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000410 */ 						(function () {
/* 000410 */ 							var __accu3__ = __accu2__;
/* 000410 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000410 */ 						}) ();
/* 000410 */ 					}
/* 000410 */ 					return __accu2__;
/* 000410 */ 				}) ());
/* 000410 */ 			}) ());
/* 000410 */ 		}) ();
/* 000410 */ 	});}
/* 000410 */ });
/* 000417 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000417 */ 	__module__: __name__,
/* 000419 */ 	feature_name: 'floats',
/* 000421 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000421 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000421 */ 			var float_types = null;
/* 000421 */ 		};
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000423 */ 		if (__t__ (float_types === null)) {
/* 000426 */ 			var float_types = [__call__ (FloatType, null, 'figure', 'Figure', 'arabic', ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', 'arabic', ['cells', 'includegraphics'])];
/* 000426 */ 		}
/* 000428 */ 		var _mkfloattypeobj = function (x) {
/* 000428 */ 			if (arguments.length) {
/* 000428 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 						switch (__attrib0__) {
/* 000428 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						}
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 			else {
/* 000428 */ 			}
/* 000429 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000430 */ 				return x;
/* 000430 */ 			}
/* 000431 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000431 */ 		};
/* 000432 */ 		self.float_types_list = (function () {
/* 000432 */ 			var __accu0__ = [];
/* 000432 */ 			var __iterable0__ = float_types;
/* 000432 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000432 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000432 */ 				(function () {
/* 000432 */ 					var __accu1__ = __accu0__;
/* 000432 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000432 */ 				}) ();
/* 000432 */ 			}
/* 000432 */ 			return __accu0__;
/* 000432 */ 		}) ();
/* 000433 */ 		self.float_types = (function () {
/* 000433 */ 			var __accu0__ = [];
/* 000433 */ 			var __iterable0__ = self.float_types_list;
/* 000433 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000435 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000435 */ 				(function () {
/* 000435 */ 					var __accu1__ = __accu0__;
/* 000435 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000435 */ 				}) ();
/* 000435 */ 			}
/* 000435 */ 			return dict (__accu0__);
/* 000435 */ 		}) ();
/* 000435 */ 	});},
/* 000438 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000439 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000439 */ 	});},
/* 000444 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000445 */ 		var environments = [];
/* 000446 */ 		var __iterable0__ = (function () {
/* 000446 */ 			var __accu0__ = self.float_types;
/* 000446 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000446 */ 		}) ();
/* 000446 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 			var float_type = __left0__ [0];
/* 000446 */ 			var ftinfo = __left0__ [1];
/* 000447 */ 			(function () {
/* 000447 */ 				var __accu0__ = environments;
/* 000448 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000448 */ 					var __accu1__ = self;
/* 000448 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000448 */ 				}) ());
/* 000448 */ 			}) ();
/* 000448 */ 		}
/* 000450 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000452 */ 	});},
/* 000452 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000452 */ 		__module__: __name__,
/* 000454 */ 		get initialize () {return __get__ (this, function (self) {
/* 000454 */ 			if (arguments.length) {
/* 000454 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 						switch (__attrib0__) {
/* 000454 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						}
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 			else {
/* 000454 */ 			}
/* 000455 */ 			self.floats = (function () {
/* 000455 */ 				var __accu0__ = [];
/* 000457 */ 				var __iterable0__ = (function () {
/* 000457 */ 					var __accu1__ = self.feature.float_types;
/* 000457 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000457 */ 				}) ();
/* 000457 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000457 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000457 */ 					var float_type = __left0__ [0];
/* 000457 */ 					var ftinfo = __left0__ [1];
/* 000457 */ 					(function () {
/* 000457 */ 						var __accu1__ = __accu0__;
/* 000457 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000457 */ 					}) ();
/* 000457 */ 				}
/* 000457 */ 				return dict (__accu0__);
/* 000457 */ 			}) ();
/* 000459 */ 			self.float_counters = (function () {
/* 000459 */ 				var __accu0__ = [];
/* 000461 */ 				var __iterable0__ = (function () {
/* 000461 */ 					var __accu1__ = self.feature.float_types;
/* 000461 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000461 */ 				}) ();
/* 000461 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000461 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000461 */ 					var float_type = __left0__ [0];
/* 000461 */ 					var ftinfo = __left0__ [1];
/* 000461 */ 					(function () {
/* 000461 */ 						var __accu1__ = __accu0__;
/* 000461 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 1]);
/* 000461 */ 					}) ();
/* 000461 */ 				}
/* 000461 */ 				return dict (__accu0__);
/* 000461 */ 			}) ();
/* 000463 */ 			self.float_instances = dict ({});
/* 000463 */ 		});},
/* 000465 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000465 */ 			var numbered = true;
/* 000465 */ 			var ref_label_prefix = null;
/* 000465 */ 			var ref_label = null;
/* 000465 */ 			var caption_nodelist = null;
/* 000465 */ 			var content_nodelist = null;
/* 000465 */ 			if (arguments.length) {
/* 000465 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000465 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000465 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000465 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000465 */ 						switch (__attrib0__) {
/* 000465 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 						}
/* 000465 */ 					}
/* 000465 */ 				}
/* 000465 */ 			}
/* 000465 */ 			else {
/* 000465 */ 			}
/* 000477 */ 			var node_id = (function () {
/* 000477 */ 				var __accu0__ = self;
/* 000477 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000477 */ 			}) ();
/* 000479 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000481 */ 				return __getitem__ (self.float_instances, node_id);
/* 000481 */ 			}
/* 000483 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000485 */ 			(function () {
/* 000485 */ 				var __accu0__ = logger;
/* 000485 */ 				return __call__ (__accu0__.debug, __accu0__, 'registering float ... ');
/* 000485 */ 			}) ();
/* 000487 */ 			if (__t__ (numbered)) {
/* 000488 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000489 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000490 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000492 */ 				var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000493 */ 				var fmtvalue_llm = (function () {
/* 000493 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000493 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000493 */ 				}) ();
/* 000493 */ 			}
/* 000497 */ 			else {
/* 000499 */ 				var number = null;
/* 000500 */ 				var fmtvalue_llm = null;
/* 000500 */ 			}
/* 000502 */ 			var target_id = null;
/* 000503 */ 			if (__t__ (number !== null)) {
/* 000504 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000504 */ 			}
/* 000506 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_llm: fmtvalue_llm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000520 */ 			(function () {
/* 000520 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000520 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000520 */ 			}) ();
/* 000523 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000523 */ 				var __accu0__ = self.render_context;
/* 000523 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000523 */ 			}) ())) {
/* 000527 */ 				var refs_mgr = (function () {
/* 000527 */ 					var __accu0__ = self.render_context;
/* 000527 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000527 */ 				}) ();
/* 000529 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000529 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000533 */ 					var formatted_ref_llm_text = (function () {
/* 000533 */ 						var __accu0__ = self;
/* 000533 */ 						return __call__ (__accu0__.get_formatted_ref_llm_text, __accu0__, float_instance);
/* 000533 */ 					}) ();
/* 000535 */ 					(function () {
/* 000535 */ 						var __accu0__ = refs_mgr;
/* 000535 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: formatted_ref_llm_text, target_href: '#{}'.format (target_id)}));
/* 000535 */ 					}) ();
/* 000535 */ 				}
/* 000535 */ 			}
/* 000543 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000544 */ 			return float_instance;
/* 000544 */ 		});},
/* 000546 */ 		get get_formatted_ref_llm_text () {return __get__ (this, function (self, float_instance) {
/* 000546 */ 			if (arguments.length) {
/* 000546 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000546 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000546 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000546 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000546 */ 						switch (__attrib0__) {
/* 000546 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						}
/* 000546 */ 					}
/* 000546 */ 				}
/* 000546 */ 			}
/* 000546 */ 			else {
/* 000546 */ 			}
/* 000547 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_llm.llm_text);
/* 000547 */ 		});}
/* 000547 */ 	})
/* 000547 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.floats.map