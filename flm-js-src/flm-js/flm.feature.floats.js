/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 20:57:03
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000026 */ import {CellsEnvironment} from './flm.feature.cells.js';
/* 000025 */ import {SimpleIncludeGraphicsMacro} from './flm.feature.graphics.js';
/* 000023 */ import * as numbering from './flm.feature.numbering.js';
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
/* 000006 */ export {FLMArgumentSpec, FLMEnvironmentSpecBase, MacroSpec, ParsingStateDeltaExtendLatexContextDb, build_counter_formatter, CellsEnvironment, make_verb_argument, ParsedArgumentsInfo, numbering, LatexEnvironmentBodyContentsParser, latexnodes_nodes, SimpleIncludeGraphicsMacro, Feature, LatexWalkerLocatedError, latexnodes_parsers};
/* 000001 */ var __name__ = 'flm.feature.floats';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000032 */ export var FloatContentHandlerBase =  __class__ ('FloatContentHandlerBase', [object], {
/* 000032 */ 	__module__: __name__,
/* 000034 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		// pass;
/* 000035 */ 	});},
/* 000037 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000046 */ 		var __except0__ = __call__ (RuntimeError, null, 'This method needs to be reimplemented in subclasses!'.format ());
/* 000046 */ 		__except0__.__cause__ = null;
/* 000046 */ 		throw __except0__;
/* 000046 */ 	});}
/* 000046 */ });
/* 000051 */ export var FloatContentAnyContent =  __class__ ('FloatContentAnyContent', [FloatContentHandlerBase], {
/* 000051 */ 	__module__: __name__,
/* 000053 */ 	_fields: tuple ([]),
/* 000055 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000057 */ 		return content_nodes;
/* 000057 */ 	});}
/* 000057 */ });
/* 000060 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000060 */ 	__module__: __name__,
/* 000062 */ 	_fields: tuple ([]),
/* 000064 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000065 */ 		(function () {
/* 000065 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000066 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000066 */ 		}) ();
/* 000066 */ 	});},
/* 000069 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000071 */ 		var content_nodes = (function () {
/* 000071 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000071 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000071 */ 		}) ();
/* 000075 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000076 */ 			var node = __getitem__ (content_nodes, 0);
/* 000077 */ 			if (__t__ (__t__ ((function () {
/* 000077 */ 				var __accu0__ = node;
/* 000077 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000077 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000080 */ 				return content_nodes;
/* 000080 */ 			}
/* 000080 */ 		}
/* 000082 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000082 */ 		__except0__.__cause__ = null;
/* 000082 */ 		throw __except0__;
/* 000082 */ 	});}
/* 000082 */ });
/* 000088 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000088 */ 	__module__: __name__,
/* 000090 */ 	_fields: tuple ([]),
/* 000092 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		(function () {
/* 000093 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000094 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000094 */ 		}) ();
/* 000094 */ 	});},
/* 000097 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000099 */ 		var content_nodes = (function () {
/* 000099 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000099 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000099 */ 		}) ();
/* 000103 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000104 */ 			var node = __getitem__ (content_nodes, 0);
/* 000105 */ 			if (__t__ (__t__ ((function () {
/* 000105 */ 				var __accu0__ = node;
/* 000105 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000105 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000108 */ 				return content_nodes;
/* 000108 */ 			}
/* 000108 */ 		}
/* 000110 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000110 */ 		__except0__.__cause__ = null;
/* 000110 */ 		throw __except0__;
/* 000110 */ 	});}
/* 000110 */ });
/* 000117 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000125 */ export var _make_content_handler = function (c) {
/* 000125 */ 	if (arguments.length) {
/* 000125 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 				switch (__attrib0__) {
/* 000125 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 	}
/* 000125 */ 	else {
/* 000125 */ 	}
/* 000126 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000127 */ 		return c;
/* 000127 */ 	}
/* 000128 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000129 */ 		var c = dict ({'name': c});
/* 000129 */ 	}
/* 000130 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000131 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000131 */ 			var __accu0__ = c;
/* 000131 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000131 */ 		}) ()));
/* 000131 */ 	}
/* 000132 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000132 */ 	__except0__.__cause__ = null;
/* 000132 */ 	throw __except0__;
/* 000132 */ };
/* 000138 */ export var float_label_arg = __call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000138 */ 	var __accu0__ = latexnodes_parsers;
/* 000138 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000138 */ }) (), argname: 'label'}))]}));
/* 000146 */ export var float_caption_arg = __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}));
/* 000153 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [FLMEnvironmentSpecBase], {
/* 000153 */ 	__module__: __name__,
/* 000155 */ 	is_block_level: true,
/* 000157 */ 	float_content_is_block_level: true,
/* 000159 */ 	float_content_render_at_environment_node_location: true,
/* 000168 */ 	allowed_in_standalone_mode: false,
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000170 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000170 */ 			var content_handlers = null;
/* 000170 */ 		};
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000175 */ 		if (__t__ (content_handlers === null)) {
/* 000176 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000176 */ 		}
/* 000177 */ 		var content_handlers = (function () {
/* 000177 */ 			var __accu0__ = [];
/* 000177 */ 			var __iterable0__ = content_handlers;
/* 000177 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000179 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000179 */ 				(function () {
/* 000179 */ 					var __accu1__ = __accu0__;
/* 000178 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000178 */ 				}) ();
/* 000178 */ 			}
/* 000178 */ 			return __accu0__;
/* 000178 */ 		}) ();
/* 000181 */ 		self.float_type = float_type;
/* 000182 */ 		self.content_handlers = content_handlers;
/* 000182 */ 	});},
/* 000184 */ 	_fields: tuple (['float_type', 'content_handlers']),
/* 000186 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [float_label_arg, float_caption_arg], environments: [], specials: []}));
/* 000196 */ 		var __iterable0__ = self.content_handlers;
/* 000196 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000197 */ 			(function () {
/* 000197 */ 				var __accu0__ = content_handler;
/* 000197 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000197 */ 			}) ();
/* 000197 */ 		}
/* 000203 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000203 */ 	});},
/* 000207 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000213 */ 		node.flm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000214 */ 		node.flm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000216 */ 		var float_content_nodes = [];
/* 000218 */ 		var __iterable0__ = node.nodelist;
/* 000218 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000218 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000219 */ 			if (__t__ ((function () {
/* 000219 */ 				var __accu0__ = n;
/* 000219 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000219 */ 			}) ())) {
/* 000221 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000223 */ 					__setitem__ (node.flm_float_label, 'label_node', n);
/* 000225 */ 					var ref_label_node_args = (function () {
/* 000225 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000225 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000225 */ 					}) ();
/* 000228 */ 					var ref_label_full = (function () {
/* 000228 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000228 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000228 */ 					}) ();
/* 000229 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000230 */ 						var __left0__ = (function () {
/* 000230 */ 							var __accu0__ = ref_label_full;
/* 000230 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000230 */ 						}) ();
/* 000230 */ 						var ref_label_prefix = __left0__ [0];
/* 000230 */ 						var ref_label = __left0__ [1];
/* 000230 */ 					}
/* 000231 */ 					else {
/* 000232 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000232 */ 						var ref_label_prefix = __left0__ [0];
/* 000232 */ 						var ref_label = __left0__ [1];
/* 000232 */ 					}
/* 000234 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000235 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000235 */ 						__except0__.__cause__ = null;
/* 000235 */ 						throw __except0__;
/* 000235 */ 					}
/* 000241 */ 					__setitem__ (node.flm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000242 */ 					__setitem__ (node.flm_float_label, 'ref_label', ref_label);
/* 000244 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000245 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000245 */ 						__except0__.__cause__ = null;
/* 000245 */ 						throw __except0__;
/* 000245 */ 					}
/* 000245 */ 					continue;
/* 000245 */ 				}
/* 000253 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000255 */ 					__setitem__ (node.flm_float_caption, 'caption_node', n);
/* 000257 */ 					var ref_caption_node_args = (function () {
/* 000257 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000257 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000257 */ 					}) ();
/* 000261 */ 					var ref_caption_nodelist = (function () {
/* 000261 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000261 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000261 */ 					}) ();
/* 000262 */ 					__setitem__ (node.flm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000262 */ 					continue;
/* 000262 */ 				}
/* 000262 */ 			}
/* 000266 */ 			(function () {
/* 000266 */ 				var __accu0__ = float_content_nodes;
/* 000266 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000268 */ 		var float_content_nodes = (function () {
/* 000268 */ 			var __accu0__ = node.latex_walker;
/* 000268 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000268 */ 		}) ();
/* 000274 */ 		var errors = [];
/* 000275 */ 		var final_content_nodes = null;
/* 000276 */ 		var __iterable0__ = self.content_handlers;
/* 000276 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000277 */ 			try {
/* 000278 */ 				var final_content_nodes = (function () {
/* 000278 */ 					var __accu0__ = content_handler;
/* 000278 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000278 */ 				}) ();
/* 000278 */ 			}
/* 000278 */ 			catch (__except0__) {
/* 000278 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000278 */ 					var e = __except0__;
/* 000282 */ 					(function () {
/* 000282 */ 						var __accu0__ = errors;
/* 000282 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000282 */ 					}) ();
/* 000282 */ 				}
/* 000282 */ 				else {
/* 000282 */ 					throw __except0__;
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000285 */ 		if (__t__ (final_content_nodes === null)) {
/* 000291 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000291 */ 				var __accu0__ = '\n';
/* 000291 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000291 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000291 */ 			__except0__.__cause__ = null;
/* 000291 */ 			throw __except0__;
/* 000291 */ 		}
/* 000295 */ 		node.flm_float_content_nodelist = final_content_nodes;
/* 000299 */ 		return node;
/* 000299 */ 	});},
/* 000302 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000304 */ 		var floats_mgr = (function () {
/* 000304 */ 			var __accu0__ = render_context;
/* 000304 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000304 */ 		}) ();
/* 000306 */ 		// pass;
/* 000310 */ 		var ref_label_prefix = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000311 */ 		var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000313 */ 		var numbered = true;
/* 000314 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000316 */ 			var numbered = false;
/* 000316 */ 		}
/* 000318 */ 		var float_instance = (function () {
/* 000318 */ 			var __accu0__ = floats_mgr;
/* 000318 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.flm_float_caption, 'caption_nodelist'), content_nodelist: node.flm_float_content_nodelist}));
/* 000318 */ 		}) ();
/* 000333 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000334 */ 			return (function () {
/* 000334 */ 				var __accu0__ = self;
/* 000334 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000334 */ 			}) ();
/* 000334 */ 		}
/* 000336 */ 		return (function () {
/* 000336 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000336 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)], render_context: render_context}));
/* 000336 */ 		}) ();
/* 000336 */ 	});},
/* 000343 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 		}
/* 000345 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000347 */ 		return (function () {
/* 000347 */ 			var __accu0__ = fragment_renderer;
/* 000347 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000347 */ 		}) ();
/* 000347 */ 	});},
/* 000355 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000357 */ 		var recopt_floats = (function () {
/* 000357 */ 			var __accu0__ = recomposer;
/* 000357 */ 			return __call__ (__accu0__.get_options, __accu0__, 'floats');
/* 000357 */ 		}) ();
/* 000358 */ 		var keep_as_is = (function () {
/* 000358 */ 			var __accu0__ = recopt_floats;
/* 000358 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000358 */ 		}) ();
/* 000359 */ 		var captioncmd_for_num_only = (function () {
/* 000359 */ 			var __accu0__ = recopt_floats;
/* 000359 */ 			return __call__ (__accu0__.py_get, __accu0__, 'captioncmd_for_num_only', '\\caption{}');
/* 000359 */ 		}) ();
/* 000361 */ 		if (__t__ (keep_as_is)) {
/* 000362 */ 			return false;
/* 000362 */ 		}
/* 000365 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000369 */ 		var has_number = has_label;
/* 000370 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000372 */ 		var env_name = 'flmFloat';
/* 000373 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000374 */ 		if (__t__ (has_number)) {
/* 000375 */ 			if (__t__ (has_caption)) {
/* 000376 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000376 */ 			}
/* 000377 */ 			else {
/* 000378 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000378 */ 			}
/* 000378 */ 		}
/* 000380 */ 		else if (__t__ (has_caption)) {
/* 000381 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000381 */ 		}
/* 000382 */ 		else {
/* 000383 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000383 */ 		}
/* 000385 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000386 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000386 */ 			var __accu0__ = recomposer;
/* 000386 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000386 */ 		}) ());
/* 000390 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000390 */ 			var __accu0__ = recomposer;
/* 000390 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flm_float_content_nodelist);
/* 000390 */ 		}) ());
/* 000392 */ 		if (__t__ (has_caption)) {
/* 000393 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000393 */ 				var __accu0__ = recomposer;
/* 000393 */ 				return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000393 */ 			}) ());
/* 000393 */ 		}
/* 000397 */ 		if (__t__ (has_label)) {
/* 000398 */ 			if (__t__ (!__t__ ((has_caption)))) {
/* 000401 */ 				var s = __call__ (__iadd__, null, s, captioncmd_for_num_only);
/* 000401 */ 			}
/* 000402 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000403 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000404 */ 			var safe_label_info = (function () {
/* 000404 */ 				var __accu0__ = recomposer;
/* 000404 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000404 */ 			}) ();
/* 000407 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000407 */ 		}
/* 000409 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000411 */ 		return s;
/* 000411 */ 	});}
/* 000411 */ });
/* 000421 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000421 */ 	__module__: __name__,
/* 000422 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000422 */ 		var float_type = null;
/* 000422 */ 		var float_type_info = null;
/* 000422 */ 		var counter_value = null;
/* 000422 */ 		var counter_numprefix = null;
/* 000422 */ 		var formatted_counter_value_flm = null;
/* 000422 */ 		var ref_label_prefix = null;
/* 000422 */ 		var ref_label = null;
/* 000422 */ 		var target_id = null;
/* 000422 */ 		var caption_nodelist = null;
/* 000422 */ 		var content_nodelist = null;
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000435 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000436 */ 		self.float_type = float_type;
/* 000437 */ 		self.float_type_info = float_type_info;
/* 000438 */ 		self.counter_value = counter_value;
/* 000439 */ 		self.counter_numprefix = counter_numprefix;
/* 000440 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000441 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000442 */ 		self.ref_label = ref_label;
/* 000443 */ 		self.target_id = target_id;
/* 000444 */ 		self.caption_nodelist = caption_nodelist;
/* 000445 */ 		self.content_nodelist = content_nodelist;
/* 000446 */ 		self._fields = tuple (['float_type', 'float_type_info', 'counter_value', 'counter_numprefix', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000446 */ 	});},
/* 000452 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000453 */ 			var __accu0__ = [];
/* 000453 */ 			var __iterable0__ = self._fields;
/* 000453 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000453 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000453 */ 				(function () {
/* 000453 */ 					var __accu1__ = __accu0__;
/* 000453 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000453 */ 			return dict (__accu0__);
/* 000453 */ 		}) ();
/* 000453 */ 	});},
/* 000455 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000455 */ 		if (arguments.length) {
/* 000455 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000455 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000455 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000455 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000455 */ 					switch (__attrib0__) {
/* 000455 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 					}
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		else {
/* 000455 */ 		}
/* 000456 */ 		return (function () {
/* 000456 */ 			var __accu0__ = '{}({})';
/* 000458 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000458 */ 				var __accu1__ = ', ';
/* 000458 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000458 */ 					var __accu2__ = [];
/* 000458 */ 					var __iterable0__ = self._fields;
/* 000458 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000458 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000458 */ 						(function () {
/* 000458 */ 							var __accu3__ = __accu2__;
/* 000458 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000458 */ 						}) ();
/* 000458 */ 					}
/* 000458 */ 					return __accu2__;
/* 000458 */ 				}) ());
/* 000458 */ 			}) ());
/* 000458 */ 		}) ();
/* 000458 */ 	});}
/* 000458 */ });
/* 000464 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000464 */ 	if (arguments.length) {
/* 000464 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000464 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000464 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000464 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000464 */ 				switch (__attrib0__) {
/* 000464 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 				}
/* 000464 */ 			}
/* 000464 */ 		}
/* 000464 */ 	}
/* 000464 */ 	else {
/* 000464 */ 	}
/* 000465 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000466 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000466 */ 	}
/* 000474 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000475 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000475 */ 	}
/* 000481 */ 	else {
/* 000484 */ 		var float_type_cap = (function () {
/* 000484 */ 			var __accu0__ = float_type;
/* 000484 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000484 */ 		}) ();
/* 000485 */ 		var prefix_display = dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')});
/* 000485 */ 	}
/* 000489 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000489 */ };
/* 000498 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000498 */ 	__module__: __name__,
/* 000499 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000499 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000499 */ 			var float_caption_name = null;
/* 000499 */ 		};
/* 000499 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000499 */ 			var counter_formatter = null;
/* 000499 */ 		};
/* 000499 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000499 */ 			var content_handlers = null;
/* 000499 */ 		};
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000507 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000509 */ 		self.float_type = float_type;
/* 000511 */ 		if (__t__ (float_caption_name === null)) {
/* 000512 */ 			var float_caption_name = float_type;
/* 000512 */ 		}
/* 000514 */ 		self.float_caption_name = float_caption_name;
/* 000518 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000522 */ 		self.content_handlers = content_handlers;
/* 000524 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000524 */ 	});},
/* 000527 */ 	get asdict () {return __get__ (this, function (self) {
/* 000527 */ 		if (arguments.length) {
/* 000527 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000527 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000527 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000527 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000527 */ 					switch (__attrib0__) {
/* 000527 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 					}
/* 000527 */ 				}
/* 000527 */ 			}
/* 000527 */ 		}
/* 000527 */ 		else {
/* 000527 */ 		}
/* 000528 */ 		return (function () {
/* 000528 */ 			var __accu0__ = [];
/* 000528 */ 			var __iterable0__ = self._fields;
/* 000528 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000528 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000528 */ 				(function () {
/* 000528 */ 					var __accu1__ = __accu0__;
/* 000528 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000528 */ 				}) ();
/* 000528 */ 			}
/* 000528 */ 			return dict (__accu0__);
/* 000528 */ 		}) ();
/* 000528 */ 	});},
/* 000530 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000530 */ 		if (arguments.length) {
/* 000530 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000530 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000530 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000530 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000530 */ 					switch (__attrib0__) {
/* 000530 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 					}
/* 000530 */ 				}
/* 000530 */ 			}
/* 000530 */ 		}
/* 000530 */ 		else {
/* 000530 */ 		}
/* 000531 */ 		return (function () {
/* 000531 */ 			var __accu0__ = '{}({})';
/* 000533 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000533 */ 				var __accu1__ = ', ';
/* 000533 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000533 */ 					var __accu2__ = [];
/* 000533 */ 					var __iterable0__ = self._fields;
/* 000533 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000533 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000533 */ 						(function () {
/* 000533 */ 							var __accu3__ = __accu2__;
/* 000533 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000533 */ 						}) ();
/* 000533 */ 					}
/* 000533 */ 					return __accu2__;
/* 000533 */ 				}) ());
/* 000533 */ 			}) ());
/* 000533 */ 		}) ();
/* 000533 */ 	});}
/* 000533 */ });
/* 000545 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000553 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000553 */ 	__module__: __name__,
/* 000555 */ 	feature_name: 'floats',
/* 000556 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000558 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000560 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000560 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000560 */ 			var float_types = null;
/* 000560 */ 		};
/* 000560 */ 		if (arguments.length) {
/* 000560 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000560 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000560 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000560 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000560 */ 					switch (__attrib0__) {
/* 000560 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 					}
/* 000560 */ 				}
/* 000560 */ 			}
/* 000560 */ 		}
/* 000560 */ 		else {
/* 000560 */ 		}
/* 000561 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000562 */ 		// pass;
/* 000565 */ 		if (__t__ (float_types === null)) {
/* 000566 */ 			var float_types = _default_float_types;
/* 000566 */ 		}
/* 000567 */ 		var _mkfloattypeobj = function (x) {
/* 000567 */ 			if (arguments.length) {
/* 000567 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 						switch (__attrib0__) {
/* 000567 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						}
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 			else {
/* 000567 */ 			}
/* 000568 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000569 */ 				var ft = x;
/* 000569 */ 			}
/* 000570 */ 			else {
/* 000571 */ 				var ft = __call__ (FloatType, null, __kwargtrans__ (x));
/* 000571 */ 			}
/* 000572 */ 			// pass;
/* 000575 */ 			return ft;
/* 000575 */ 		};
/* 000576 */ 		self.float_types_list = (function () {
/* 000576 */ 			var __accu0__ = [];
/* 000576 */ 			var __iterable0__ = float_types;
/* 000576 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000576 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000576 */ 				(function () {
/* 000576 */ 					var __accu1__ = __accu0__;
/* 000576 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000576 */ 				}) ();
/* 000576 */ 			}
/* 000576 */ 			return __accu0__;
/* 000576 */ 		}) ();
/* 000577 */ 		self.float_types = (function () {
/* 000577 */ 			var __accu0__ = [];
/* 000577 */ 			var __iterable0__ = self.float_types_list;
/* 000577 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000579 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000579 */ 				(function () {
/* 000579 */ 					var __accu1__ = __accu0__;
/* 000579 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000579 */ 				}) ();
/* 000579 */ 			}
/* 000579 */ 			return dict (__accu0__);
/* 000579 */ 		}) ();
/* 000581 */ 		// pass;
/* 000581 */ 	});},
/* 000585 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000585 */ 		if (arguments.length) {
/* 000585 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000585 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000585 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000585 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000585 */ 					switch (__attrib0__) {
/* 000585 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 					}
/* 000585 */ 				}
/* 000585 */ 			}
/* 000585 */ 		}
/* 000585 */ 		else {
/* 000585 */ 		}
/* 000586 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000586 */ 	});},
/* 000591 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000591 */ 		if (arguments.length) {
/* 000591 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000591 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000591 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000591 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000591 */ 					switch (__attrib0__) {
/* 000591 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 					}
/* 000591 */ 				}
/* 000591 */ 			}
/* 000591 */ 		}
/* 000591 */ 		else {
/* 000591 */ 		}
/* 000592 */ 		var environments = [];
/* 000593 */ 		var __iterable0__ = (function () {
/* 000593 */ 			var __accu0__ = self.float_types;
/* 000593 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000593 */ 		}) ();
/* 000593 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000593 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000593 */ 			var float_type = __left0__ [0];
/* 000593 */ 			var ftinfo = __left0__ [1];
/* 000594 */ 			(function () {
/* 000594 */ 				var __accu0__ = environments;
/* 000595 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000595 */ 					var __accu1__ = self;
/* 000595 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000595 */ 				}) ());
/* 000595 */ 			}) ();
/* 000595 */ 		}
/* 000597 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000599 */ 	});},
/* 000599 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000599 */ 		__module__: __name__,
/* 000601 */ 		get initialize () {return __get__ (this, function (self) {
/* 000601 */ 			if (arguments.length) {
/* 000601 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000601 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000601 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000601 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000601 */ 						switch (__attrib0__) {
/* 000601 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 						}
/* 000601 */ 					}
/* 000601 */ 				}
/* 000601 */ 			}
/* 000601 */ 			else {
/* 000601 */ 			}
/* 000602 */ 			self.floats = (function () {
/* 000602 */ 				var __accu0__ = [];
/* 000604 */ 				var __iterable0__ = (function () {
/* 000604 */ 					var __accu1__ = self.feature.float_types;
/* 000604 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000604 */ 				}) ();
/* 000604 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000604 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000604 */ 					var float_type = __left0__ [0];
/* 000604 */ 					var ftinfo = __left0__ [1];
/* 000604 */ 					(function () {
/* 000604 */ 						var __accu1__ = __accu0__;
/* 000604 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000604 */ 					}) ();
/* 000604 */ 				}
/* 000604 */ 				return dict (__accu0__);
/* 000604 */ 			}) ();
/* 000606 */ 			var refs_mgr = null;
/* 000607 */ 			if (__t__ ((function () {
/* 000607 */ 				var __accu0__ = self.render_context;
/* 000607 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000607 */ 			}) ())) {
/* 000608 */ 				var refs_mgr = (function () {
/* 000608 */ 					var __accu0__ = self.render_context;
/* 000608 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000608 */ 				}) ();
/* 000608 */ 			}
/* 000610 */ 			self.float_counter_ifaces = dict ({});
/* 000611 */ 			var __iterable0__ = (function () {
/* 000611 */ 				var __accu0__ = self.feature.float_types;
/* 000611 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000611 */ 			}) ();
/* 000611 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000611 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000611 */ 				var float_type = __left0__ [0];
/* 000611 */ 				var ftinfo = __left0__ [1];
/* 000612 */ 				__setitem__ (self.float_counter_ifaces, float_type, (function () {
/* 000612 */ 					var __accu0__ = numbering;
/* 000612 */ 					return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: ftinfo.counter_formatter.counter_formatter_id, counter_formatter: ftinfo.counter_formatter}));
/* 000612 */ 				}) ());
/* 000617 */ 				if (__t__ (refs_mgr !== null)) {
/* 000618 */ 					(function () {
/* 000618 */ 						var __accu0__ = refs_mgr;
/* 000618 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: __getitem__ (self.float_counter_ifaces, float_type).formatter}));
/* 000618 */ 					}) ();
/* 000618 */ 				}
/* 000618 */ 			}
/* 000622 */ 			self.float_instances = dict ({});
/* 000622 */ 		});},
/* 000625 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000625 */ 			var numbered = true;
/* 000625 */ 			var ref_label_prefix = null;
/* 000625 */ 			var ref_label = null;
/* 000625 */ 			var caption_nodelist = null;
/* 000625 */ 			var content_nodelist = null;
/* 000625 */ 			if (arguments.length) {
/* 000625 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000625 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000625 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000625 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000625 */ 						switch (__attrib0__) {
/* 000625 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						}
/* 000625 */ 					}
/* 000625 */ 				}
/* 000625 */ 			}
/* 000625 */ 			else {
/* 000625 */ 			}
/* 000637 */ 			var node_id = (function () {
/* 000637 */ 				var __accu0__ = self;
/* 000637 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000637 */ 			}) ();
/* 000639 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000641 */ 				return __getitem__ (self.float_instances, node_id);
/* 000641 */ 			}
/* 000643 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000645 */ 			// pass;
/* 000649 */ 			if (__t__ (numbered)) {
/* 000651 */ 				var value_info = (function () {
/* 000651 */ 					var __accu0__ = __getitem__ (self.float_counter_ifaces, float_type);
/* 000651 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000651 */ 				}) ();
/* 000652 */ 				var value = __getitem__ (value_info, 'value');
/* 000653 */ 				var numprefix = __getitem__ (value_info, 'numprefix');
/* 000655 */ 				var fmtvalue_flm_text = __getitem__ (value_info, 'formatted_value');
/* 000656 */ 				var fmtvalue_flm = (function () {
/* 000656 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000659 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, (function () {
/* 000659 */ 						var __accu1__ = value;
/* 000659 */ 						return __call__ (__accu1__.targetidstr, __accu1__, __kwargtrans__ ({numprefix: numprefix}));
/* 000659 */ 					}) ())}));
/* 000659 */ 				}) ();
/* 000662 */ 				var fmtcounter = __getitem__ (self.float_counter_ifaces, float_type).formatter;
/* 000663 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000663 */ 			}
/* 000664 */ 			else {
/* 000667 */ 				var value = null;
/* 000668 */ 				var numprefix = null;
/* 000669 */ 				var fmtvalue_flm = null;
/* 000670 */ 				var fmtcounter_id = null;
/* 000670 */ 			}
/* 000672 */ 			var target_id = null;
/* 000673 */ 			if (__t__ (value !== null)) {
/* 000674 */ 				var target_id = '{}-{}'.format (float_type, (function () {
/* 000674 */ 					var __accu0__ = value;
/* 000674 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: numprefix}));
/* 000674 */ 				}) ());
/* 000674 */ 			}
/* 000676 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, counter_value: value, counter_numprefix: numprefix, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000691 */ 			(function () {
/* 000691 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000691 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000691 */ 			}) ();
/* 000694 */ 			if (__t__ (__t__ (value !== null) && (function () {
/* 000694 */ 				var __accu0__ = self.render_context;
/* 000694 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000694 */ 			}) ())) {
/* 000698 */ 				var refs_mgr = (function () {
/* 000698 */ 					var __accu0__ = self.render_context;
/* 000698 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000698 */ 				}) ();
/* 000700 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000700 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000704 */ 					var formatted_ref_flm_text = (function () {
/* 000704 */ 						var __accu0__ = self;
/* 000704 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000704 */ 					}) ();
/* 000706 */ 					(function () {
/* 000706 */ 						var __accu0__ = refs_mgr;
/* 000706 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: value, counter_numprefix: numprefix, counter_formatter_id: fmtcounter_id}));
/* 000706 */ 					}) ();
/* 000706 */ 				}
/* 000706 */ 			}
/* 000717 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000718 */ 			return float_instance;
/* 000718 */ 		});},
/* 000720 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000720 */ 			if (arguments.length) {
/* 000720 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000720 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000720 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000720 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000720 */ 						switch (__attrib0__) {
/* 000720 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						}
/* 000720 */ 					}
/* 000720 */ 				}
/* 000720 */ 			}
/* 000720 */ 			else {
/* 000720 */ 			}
/* 000721 */ 			return (function () {
/* 000721 */ 				var __accu0__ = __getitem__ (self.float_counter_ifaces, float_instance.float_type).formatter;
/* 000721 */ 				return __call__ (__accu0__.format_flm, __accu0__, float_instance.counter_value, __kwargtrans__ ({numprefix: float_instance.counter_numprefix, with_prefix: true}));
/* 000721 */ 			}) ();
/* 000721 */ 		});}
/* 000721 */ 	}),
/* 000734 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000734 */ 		if (arguments.length) {
/* 000734 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000734 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000734 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000734 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000734 */ 					switch (__attrib0__) {
/* 000734 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000734 */ 					}
/* 000734 */ 				}
/* 000734 */ 			}
/* 000734 */ 		}
/* 000734 */ 		else {
/* 000734 */ 		}
/* 000735 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000735 */ 	});},
/* 000738 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000738 */ 		if (arguments.length) {
/* 000738 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000738 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000738 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000738 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000738 */ 					switch (__attrib0__) {
/* 000738 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000738 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000738 */ 					}
/* 000738 */ 				}
/* 000738 */ 			}
/* 000738 */ 		}
/* 000738 */ 		else {
/* 000738 */ 		}
/* 000745 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000756 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000760 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000765 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000765 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000765 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000766 */ 			var ftname = ft_env.environmentname;
/* 000767 */ 			var ch_list = ft_env.content_handlers;
/* 000768 */ 			var __iterable1__ = ch_list;
/* 000768 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000768 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000769 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000770 */ 				(function () {
/* 000770 */ 					var __accu0__ = ch;
/* 000770 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000770 */ 				}) ();
/* 000772 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000772 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000772 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000773 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000774 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000774 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000774 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000775 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000775 */ 							var whatname = __left0__ [0];
/* 000775 */ 							var _ = __left0__ [1];
/* 000777 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000778 */ 								(function () {
/* 000778 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000778 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000778 */ 								}) ();
/* 000779 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000779 */ 							}
/* 000780 */ 							else {
/* 000781 */ 								(function () {
/* 000781 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000781 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000781 */ 								}) ();
/* 000781 */ 							}
/* 000781 */ 						}
/* 000781 */ 					}
/* 000781 */ 				}
/* 000781 */ 			}
/* 000781 */ 		}
/* 000784 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000784 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000784 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000785 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000785 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000785 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000786 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000786 */ 				var whatname = __left0__ [0];
/* 000786 */ 				var whattext = __left0__ [1];
/* 000791 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000791 */ 					var __accu0__ = ', ';
/* 000791 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000791 */ 						var __accu1__ = [];
/* 000791 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000791 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000792 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000792 */ 							(function () {
/* 000792 */ 								var __accu2__ = __accu1__;
/* 000792 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000792 */ 							}) ();
/* 000792 */ 						}
/* 000792 */ 						return __accu1__;
/* 000792 */ 					}) ());
/* 000792 */ 				}) ()));
/* 000794 */ 				(function () {
/* 000794 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000794 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000794 */ 				}) ();
/* 000794 */ 			}
/* 000794 */ 		}
/* 000796 */ 		return defs;
/* 000796 */ 	});}
/* 000796 */ });
/* 000800 */ export var _whatname = function (m, which) {
/* 000800 */ 	if (arguments.length) {
/* 000800 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000800 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000800 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000800 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000800 */ 				switch (__attrib0__) {
/* 000800 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000800 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000800 */ 				}
/* 000800 */ 			}
/* 000800 */ 		}
/* 000800 */ 	}
/* 000800 */ 	else {
/* 000800 */ 	}
/* 000801 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000802 */ 		var whatname = m.macroname;
/* 000803 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000803 */ 	}
/* 000804 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000805 */ 		var whatname = m.environmentname;
/* 000806 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000806 */ 	}
/* 000807 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000808 */ 		var whatname = m.specials_chars;
/* 000809 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000809 */ 	}
/* 000810 */ 	else {
/* 000811 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000811 */ 		__except0__.__cause__ = null;
/* 000811 */ 		throw __except0__;
/* 000811 */ 	}
/* 000812 */ 	return tuple ([whatname, whattext]);
/* 000812 */ };
/* 000814 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000814 */ 	if (arguments.length) {
/* 000814 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000814 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000814 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000814 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000814 */ 				switch (__attrib0__) {
/* 000814 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 				}
/* 000814 */ 			}
/* 000814 */ 		}
/* 000814 */ 	}
/* 000814 */ 	else {
/* 000814 */ 	}
/* 000815 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000816 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000816 */ 			if (arguments.length) {
/* 000816 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000816 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000816 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000816 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000816 */ 					}
/* 000816 */ 				}
/* 000816 */ 			}
/* 000816 */ 			else {
/* 000816 */ 			}
/* 000816 */ 			return add_flm_doc;
/* 000816 */ 		});
/* 000817 */ 		return mdef;
/* 000817 */ 	}
/* 000818 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000819 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000819 */ 		if (arguments.length) {
/* 000819 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000819 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000819 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000819 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000819 */ 				}
/* 000819 */ 			}
/* 000819 */ 		}
/* 000819 */ 		else {
/* 000819 */ 		}
/* 000819 */ 		return (function () {
/* 000820 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000822 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000822 */ 		}) ();
/* 000822 */ 	});
/* 000824 */ 	return mdef;
/* 000824 */ };
/* 000831 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map