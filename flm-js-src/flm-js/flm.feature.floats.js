/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:50
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000024 */ import {CellsEnvironment} from './flm.feature.cells.js';
/* 000023 */ import {SimpleIncludeGraphicsMacro} from './flm.feature.graphics.js';
/* 000022 */ import {Feature} from './flm.feature._base.js';
/* 000020 */ import {Counter, build_counter_formatter} from './flm.counter.js';
/* 000019 */ import {FLMEnvironmentSpecBase, make_verb_argument} from './flm.flmspecinfo.js';
/* 000018 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LatexEnvironmentBodyContentsParser, Counter, FLMEnvironmentSpecBase, SimpleIncludeGraphicsMacro, ParsingStateDeltaExtendLatexContextDb, CellsEnvironment, LatexWalkerLocatedError, build_counter_formatter, make_verb_argument, Feature, FLMArgumentSpec, MacroSpec, latexnodes_parsers, latexnodes_nodes, ParsedArgumentsInfo};
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
/* 000051 */ 	_fields: tuple ([]),
/* 000053 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000055 */ 		return content_nodes;
/* 000055 */ 	});}
/* 000055 */ });
/* 000058 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000058 */ 	__module__: __name__,
/* 000060 */ 	_fields: tuple ([]),
/* 000062 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		(function () {
/* 000063 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000064 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000064 */ 		}) ();
/* 000064 */ 	});},
/* 000067 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000069 */ 		var content_nodes = (function () {
/* 000069 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000069 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000069 */ 		}) ();
/* 000073 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000074 */ 			var node = __getitem__ (content_nodes, 0);
/* 000075 */ 			if (__t__ (__t__ ((function () {
/* 000075 */ 				var __accu0__ = node;
/* 000075 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000075 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000078 */ 				return content_nodes;
/* 000078 */ 			}
/* 000078 */ 		}
/* 000080 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000080 */ 		__except0__.__cause__ = null;
/* 000080 */ 		throw __except0__;
/* 000080 */ 	});}
/* 000080 */ });
/* 000086 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000086 */ 	__module__: __name__,
/* 000088 */ 	_fields: tuple ([]),
/* 000090 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000091 */ 		(function () {
/* 000091 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000092 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000092 */ 		}) ();
/* 000092 */ 	});},
/* 000095 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000097 */ 		var content_nodes = (function () {
/* 000097 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000097 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000097 */ 		}) ();
/* 000101 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000102 */ 			var node = __getitem__ (content_nodes, 0);
/* 000103 */ 			if (__t__ (__t__ ((function () {
/* 000103 */ 				var __accu0__ = node;
/* 000103 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000103 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000106 */ 				return content_nodes;
/* 000106 */ 			}
/* 000106 */ 		}
/* 000108 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000108 */ 		__except0__.__cause__ = null;
/* 000108 */ 		throw __except0__;
/* 000108 */ 	});}
/* 000108 */ });
/* 000115 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000123 */ export var _make_content_handler = function (c) {
/* 000123 */ 	if (arguments.length) {
/* 000123 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 				switch (__attrib0__) {
/* 000123 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 	}
/* 000123 */ 	else {
/* 000123 */ 	}
/* 000124 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000125 */ 		return c;
/* 000125 */ 	}
/* 000126 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000127 */ 		var c = dict ({'name': c});
/* 000127 */ 	}
/* 000128 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000129 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000129 */ 			var __accu0__ = c;
/* 000129 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000129 */ 		}) ()));
/* 000129 */ 	}
/* 000130 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000130 */ 	__except0__.__cause__ = null;
/* 000130 */ 	throw __except0__;
/* 000130 */ };
/* 000136 */ export var float_label_arg = __call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000136 */ 	var __accu0__ = latexnodes_parsers;
/* 000136 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000136 */ }) (), argname: 'label'}))]}));
/* 000144 */ export var float_caption_arg = __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}));
/* 000151 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [FLMEnvironmentSpecBase], {
/* 000151 */ 	__module__: __name__,
/* 000153 */ 	is_block_level: true,
/* 000155 */ 	float_content_is_block_level: true,
/* 000157 */ 	float_content_render_at_environment_node_location: true,
/* 000166 */ 	allowed_in_standalone_mode: false,
/* 000168 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000168 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000168 */ 			var content_handlers = null;
/* 000168 */ 		};
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000169 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000173 */ 		if (__t__ (content_handlers === null)) {
/* 000174 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000174 */ 		}
/* 000175 */ 		var content_handlers = (function () {
/* 000175 */ 			var __accu0__ = [];
/* 000175 */ 			var __iterable0__ = content_handlers;
/* 000175 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000177 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000177 */ 				(function () {
/* 000177 */ 					var __accu1__ = __accu0__;
/* 000176 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000176 */ 				}) ();
/* 000176 */ 			}
/* 000176 */ 			return __accu0__;
/* 000176 */ 		}) ();
/* 000179 */ 		self.float_type = float_type;
/* 000180 */ 		self.content_handlers = content_handlers;
/* 000180 */ 	});},
/* 000182 */ 	_fields: tuple (['float_type', 'content_handlers']),
/* 000184 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [float_label_arg, float_caption_arg], environments: [], specials: []}));
/* 000194 */ 		var __iterable0__ = self.content_handlers;
/* 000194 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 			(function () {
/* 000195 */ 				var __accu0__ = content_handler;
/* 000195 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000195 */ 			}) ();
/* 000195 */ 		}
/* 000201 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000201 */ 	});},
/* 000205 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000211 */ 		node.flm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000212 */ 		node.flm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000214 */ 		var float_content_nodes = [];
/* 000216 */ 		var __iterable0__ = node.nodelist;
/* 000216 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 			if (__t__ ((function () {
/* 000217 */ 				var __accu0__ = n;
/* 000217 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000217 */ 			}) ())) {
/* 000219 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000221 */ 					__setitem__ (node.flm_float_label, 'label_node', n);
/* 000223 */ 					var ref_label_node_args = (function () {
/* 000223 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000223 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000223 */ 					}) ();
/* 000226 */ 					var ref_label_full = (function () {
/* 000226 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000226 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000226 */ 					}) ();
/* 000227 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000228 */ 						var __left0__ = (function () {
/* 000228 */ 							var __accu0__ = ref_label_full;
/* 000228 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000228 */ 						}) ();
/* 000228 */ 						var ref_label_prefix = __left0__ [0];
/* 000228 */ 						var ref_label = __left0__ [1];
/* 000228 */ 					}
/* 000229 */ 					else {
/* 000230 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000230 */ 						var ref_label_prefix = __left0__ [0];
/* 000230 */ 						var ref_label = __left0__ [1];
/* 000230 */ 					}
/* 000232 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000233 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000233 */ 						__except0__.__cause__ = null;
/* 000233 */ 						throw __except0__;
/* 000233 */ 					}
/* 000239 */ 					__setitem__ (node.flm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000240 */ 					__setitem__ (node.flm_float_label, 'ref_label', ref_label);
/* 000242 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000243 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000243 */ 						__except0__.__cause__ = null;
/* 000243 */ 						throw __except0__;
/* 000243 */ 					}
/* 000243 */ 					continue;
/* 000243 */ 				}
/* 000251 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000253 */ 					__setitem__ (node.flm_float_caption, 'caption_node', n);
/* 000255 */ 					var ref_caption_node_args = (function () {
/* 000255 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000255 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000255 */ 					}) ();
/* 000259 */ 					var ref_caption_nodelist = (function () {
/* 000259 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000259 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000259 */ 					}) ();
/* 000260 */ 					__setitem__ (node.flm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000260 */ 					continue;
/* 000260 */ 				}
/* 000260 */ 			}
/* 000264 */ 			(function () {
/* 000264 */ 				var __accu0__ = float_content_nodes;
/* 000264 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000264 */ 			}) ();
/* 000264 */ 		}
/* 000266 */ 		var float_content_nodes = (function () {
/* 000266 */ 			var __accu0__ = node.latex_walker;
/* 000266 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000266 */ 		}) ();
/* 000272 */ 		var errors = [];
/* 000273 */ 		var final_content_nodes = null;
/* 000274 */ 		var __iterable0__ = self.content_handlers;
/* 000274 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000274 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 			try {
/* 000276 */ 				var final_content_nodes = (function () {
/* 000276 */ 					var __accu0__ = content_handler;
/* 000276 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000276 */ 				}) ();
/* 000276 */ 			}
/* 000276 */ 			catch (__except0__) {
/* 000276 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000276 */ 					var e = __except0__;
/* 000280 */ 					(function () {
/* 000280 */ 						var __accu0__ = errors;
/* 000280 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000280 */ 					}) ();
/* 000280 */ 				}
/* 000280 */ 				else {
/* 000280 */ 					throw __except0__;
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000283 */ 		if (__t__ (final_content_nodes === null)) {
/* 000289 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000289 */ 				var __accu0__ = '\n';
/* 000289 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000289 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000289 */ 			__except0__.__cause__ = null;
/* 000289 */ 			throw __except0__;
/* 000289 */ 		}
/* 000293 */ 		node.flm_float_content_nodelist = final_content_nodes;
/* 000297 */ 		return node;
/* 000297 */ 	});},
/* 000300 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000300 */ 		if (arguments.length) {
/* 000300 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000300 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000300 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000300 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000300 */ 					switch (__attrib0__) {
/* 000300 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 					}
/* 000300 */ 				}
/* 000300 */ 			}
/* 000300 */ 		}
/* 000300 */ 		else {
/* 000300 */ 		}
/* 000302 */ 		var floats_mgr = (function () {
/* 000302 */ 			var __accu0__ = render_context;
/* 000302 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000302 */ 		}) ();
/* 000304 */ 		// pass;
/* 000308 */ 		var ref_label_prefix = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000309 */ 		var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000311 */ 		var numbered = true;
/* 000312 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000314 */ 			var numbered = false;
/* 000314 */ 		}
/* 000316 */ 		var float_instance = (function () {
/* 000316 */ 			var __accu0__ = floats_mgr;
/* 000316 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.flm_float_caption, 'caption_nodelist'), content_nodelist: node.flm_float_content_nodelist}));
/* 000316 */ 		}) ();
/* 000331 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000332 */ 			return (function () {
/* 000332 */ 				var __accu0__ = self;
/* 000332 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000332 */ 			}) ();
/* 000332 */ 		}
/* 000334 */ 		return (function () {
/* 000334 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000334 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)], render_context: render_context}));
/* 000334 */ 		}) ();
/* 000334 */ 	});},
/* 000341 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000343 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000345 */ 		return (function () {
/* 000345 */ 			var __accu0__ = fragment_renderer;
/* 000345 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000345 */ 		}) ();
/* 000345 */ 	});},
/* 000353 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000355 */ 		var recopt_floats = (function () {
/* 000355 */ 			var __accu0__ = recomposer;
/* 000355 */ 			return __call__ (__accu0__.get_options, __accu0__, 'floats');
/* 000355 */ 		}) ();
/* 000356 */ 		if (__t__ ((function () {
/* 000356 */ 			var __accu0__ = recopt_floats;
/* 000356 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000356 */ 		}) ())) {
/* 000357 */ 			return false;
/* 000357 */ 		}
/* 000360 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000364 */ 		var has_number = has_label;
/* 000365 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000367 */ 		var env_name = 'flmFloat';
/* 000368 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000369 */ 		if (__t__ (has_number)) {
/* 000370 */ 			if (__t__ (has_caption)) {
/* 000371 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000371 */ 			}
/* 000372 */ 			else {
/* 000373 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000373 */ 			}
/* 000373 */ 		}
/* 000375 */ 		else if (__t__ (has_caption)) {
/* 000376 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000376 */ 		}
/* 000377 */ 		else {
/* 000378 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000378 */ 		}
/* 000380 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000381 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000381 */ 			var __accu0__ = recomposer;
/* 000381 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000381 */ 		}) ());
/* 000385 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000385 */ 			var __accu0__ = recomposer;
/* 000385 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flm_float_content_nodelist);
/* 000385 */ 		}) ());
/* 000387 */ 		if (__t__ (has_caption)) {
/* 000388 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000388 */ 				var __accu0__ = recomposer;
/* 000388 */ 				return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000388 */ 			}) ());
/* 000388 */ 		}
/* 000392 */ 		if (__t__ (has_label)) {
/* 000393 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000394 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000395 */ 			var safe_label_info = (function () {
/* 000395 */ 				var __accu0__ = recomposer;
/* 000395 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000395 */ 			}) ();
/* 000398 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000398 */ 		}
/* 000400 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000402 */ 		return s;
/* 000402 */ 	});}
/* 000402 */ });
/* 000412 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000412 */ 	__module__: __name__,
/* 000413 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000413 */ 		var float_type = null;
/* 000413 */ 		var float_type_info = null;
/* 000413 */ 		var number = null;
/* 000413 */ 		var formatted_counter_value_flm = null;
/* 000413 */ 		var ref_label_prefix = null;
/* 000413 */ 		var ref_label = null;
/* 000413 */ 		var target_id = null;
/* 000413 */ 		var caption_nodelist = null;
/* 000413 */ 		var content_nodelist = null;
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000425 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000426 */ 		self.float_type = float_type;
/* 000427 */ 		self.float_type_info = float_type_info;
/* 000428 */ 		self.number = number;
/* 000429 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000430 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000431 */ 		self.ref_label = ref_label;
/* 000432 */ 		self.target_id = target_id;
/* 000433 */ 		self.caption_nodelist = caption_nodelist;
/* 000434 */ 		self.content_nodelist = content_nodelist;
/* 000435 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000435 */ 	});},
/* 000440 */ 	get asdict () {return __get__ (this, function (self) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000441 */ 		return (function () {
/* 000441 */ 			var __accu0__ = [];
/* 000441 */ 			var __iterable0__ = self._fields;
/* 000441 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000441 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000441 */ 				(function () {
/* 000441 */ 					var __accu1__ = __accu0__;
/* 000441 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000441 */ 				}) ();
/* 000441 */ 			}
/* 000441 */ 			return dict (__accu0__);
/* 000441 */ 		}) ();
/* 000441 */ 	});},
/* 000443 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000443 */ 		if (arguments.length) {
/* 000443 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000443 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000443 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000443 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000443 */ 					switch (__attrib0__) {
/* 000443 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 					}
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000443 */ 		else {
/* 000443 */ 		}
/* 000444 */ 		return (function () {
/* 000444 */ 			var __accu0__ = '{}({})';
/* 000446 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000446 */ 				var __accu1__ = ', ';
/* 000446 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000446 */ 					var __accu2__ = [];
/* 000446 */ 					var __iterable0__ = self._fields;
/* 000446 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 						(function () {
/* 000446 */ 							var __accu3__ = __accu2__;
/* 000446 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000446 */ 						}) ();
/* 000446 */ 					}
/* 000446 */ 					return __accu2__;
/* 000446 */ 				}) ());
/* 000446 */ 			}) ());
/* 000446 */ 		}) ();
/* 000446 */ 	});}
/* 000446 */ });
/* 000452 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000452 */ 	if (arguments.length) {
/* 000452 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 				switch (__attrib0__) {
/* 000452 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 		}
/* 000452 */ 	}
/* 000452 */ 	else {
/* 000452 */ 	}
/* 000453 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000454 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000454 */ 	}
/* 000462 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000463 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000463 */ 	}
/* 000469 */ 	else {
/* 000472 */ 		var float_type_cap = (function () {
/* 000472 */ 			var __accu0__ = float_type;
/* 000472 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000472 */ 		}) ();
/* 000473 */ 		var prefix_display = tuple ([dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')})]);
/* 000473 */ 	}
/* 000477 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000477 */ };
/* 000486 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000486 */ 	__module__: __name__,
/* 000487 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000487 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000487 */ 			var float_caption_name = null;
/* 000487 */ 		};
/* 000487 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000487 */ 			var counter_formatter = null;
/* 000487 */ 		};
/* 000487 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000487 */ 			var content_handlers = null;
/* 000487 */ 		};
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000495 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000497 */ 		self.float_type = float_type;
/* 000499 */ 		if (__t__ (float_caption_name === null)) {
/* 000500 */ 			var float_caption_name = float_type;
/* 000500 */ 		}
/* 000502 */ 		self.float_caption_name = float_caption_name;
/* 000504 */ 		if (__t__ (counter_formatter === null)) {
/* 000505 */ 			var counter_formatter = dict ({'format_num': 'arabic'});
/* 000505 */ 		}
/* 000509 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000513 */ 		self.content_handlers = content_handlers;
/* 000515 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000515 */ 	});},
/* 000518 */ 	get asdict () {return __get__ (this, function (self) {
/* 000518 */ 		if (arguments.length) {
/* 000518 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 					switch (__attrib0__) {
/* 000518 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 			}
/* 000518 */ 		}
/* 000518 */ 		else {
/* 000518 */ 		}
/* 000519 */ 		return (function () {
/* 000519 */ 			var __accu0__ = [];
/* 000519 */ 			var __iterable0__ = self._fields;
/* 000519 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000519 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000519 */ 				(function () {
/* 000519 */ 					var __accu1__ = __accu0__;
/* 000519 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000519 */ 				}) ();
/* 000519 */ 			}
/* 000519 */ 			return dict (__accu0__);
/* 000519 */ 		}) ();
/* 000519 */ 	});},
/* 000521 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000522 */ 		return (function () {
/* 000522 */ 			var __accu0__ = '{}({})';
/* 000524 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000524 */ 				var __accu1__ = ', ';
/* 000524 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000524 */ 					var __accu2__ = [];
/* 000524 */ 					var __iterable0__ = self._fields;
/* 000524 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000524 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000524 */ 						(function () {
/* 000524 */ 							var __accu3__ = __accu2__;
/* 000524 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000524 */ 						}) ();
/* 000524 */ 					}
/* 000524 */ 					return __accu2__;
/* 000524 */ 				}) ());
/* 000524 */ 			}) ());
/* 000524 */ 		}) ();
/* 000524 */ 	});}
/* 000524 */ });
/* 000536 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000544 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000544 */ 	__module__: __name__,
/* 000546 */ 	feature_name: 'floats',
/* 000547 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000549 */ 	feature_optional_dependencies: ['refs'],
/* 000551 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000551 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000551 */ 			var float_types = null;
/* 000551 */ 		};
/* 000551 */ 		if (arguments.length) {
/* 000551 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000551 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000551 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000551 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000551 */ 					switch (__attrib0__) {
/* 000551 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 					}
/* 000551 */ 				}
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 		else {
/* 000551 */ 		}
/* 000552 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000553 */ 		if (__t__ (float_types === null)) {
/* 000554 */ 			var float_types = _default_float_types;
/* 000554 */ 		}
/* 000555 */ 		var _mkfloattypeobj = function (x) {
/* 000555 */ 			if (arguments.length) {
/* 000555 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000555 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000555 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000555 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000555 */ 						switch (__attrib0__) {
/* 000555 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						}
/* 000555 */ 					}
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 			else {
/* 000555 */ 			}
/* 000556 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000557 */ 				return x;
/* 000557 */ 			}
/* 000558 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000558 */ 		};
/* 000559 */ 		self.float_types_list = (function () {
/* 000559 */ 			var __accu0__ = [];
/* 000559 */ 			var __iterable0__ = float_types;
/* 000559 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000559 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000559 */ 				(function () {
/* 000559 */ 					var __accu1__ = __accu0__;
/* 000559 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000559 */ 				}) ();
/* 000559 */ 			}
/* 000559 */ 			return __accu0__;
/* 000559 */ 		}) ();
/* 000560 */ 		self.float_types = (function () {
/* 000560 */ 			var __accu0__ = [];
/* 000560 */ 			var __iterable0__ = self.float_types_list;
/* 000560 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000562 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000562 */ 				(function () {
/* 000562 */ 					var __accu1__ = __accu0__;
/* 000562 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000562 */ 				}) ();
/* 000562 */ 			}
/* 000562 */ 			return dict (__accu0__);
/* 000562 */ 		}) ();
/* 000562 */ 	});},
/* 000565 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000566 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000566 */ 	});},
/* 000571 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000571 */ 		if (arguments.length) {
/* 000571 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000571 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000571 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000571 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000571 */ 					switch (__attrib0__) {
/* 000571 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000571 */ 					}
/* 000571 */ 				}
/* 000571 */ 			}
/* 000571 */ 		}
/* 000571 */ 		else {
/* 000571 */ 		}
/* 000572 */ 		var environments = [];
/* 000573 */ 		var __iterable0__ = (function () {
/* 000573 */ 			var __accu0__ = self.float_types;
/* 000573 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000573 */ 		}) ();
/* 000573 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000573 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000573 */ 			var float_type = __left0__ [0];
/* 000573 */ 			var ftinfo = __left0__ [1];
/* 000574 */ 			(function () {
/* 000574 */ 				var __accu0__ = environments;
/* 000575 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000575 */ 					var __accu1__ = self;
/* 000575 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000575 */ 				}) ());
/* 000575 */ 			}) ();
/* 000575 */ 		}
/* 000577 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000579 */ 	});},
/* 000579 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000579 */ 		__module__: __name__,
/* 000581 */ 		get initialize () {return __get__ (this, function (self) {
/* 000581 */ 			if (arguments.length) {
/* 000581 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000581 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000581 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000581 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000581 */ 						switch (__attrib0__) {
/* 000581 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						}
/* 000581 */ 					}
/* 000581 */ 				}
/* 000581 */ 			}
/* 000581 */ 			else {
/* 000581 */ 			}
/* 000582 */ 			self.floats = (function () {
/* 000582 */ 				var __accu0__ = [];
/* 000584 */ 				var __iterable0__ = (function () {
/* 000584 */ 					var __accu1__ = self.feature.float_types;
/* 000584 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000584 */ 				}) ();
/* 000584 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000584 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000584 */ 					var float_type = __left0__ [0];
/* 000584 */ 					var ftinfo = __left0__ [1];
/* 000584 */ 					(function () {
/* 000584 */ 						var __accu1__ = __accu0__;
/* 000584 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000584 */ 					}) ();
/* 000584 */ 				}
/* 000584 */ 				return dict (__accu0__);
/* 000584 */ 			}) ();
/* 000586 */ 			self.float_counters = (function () {
/* 000586 */ 				var __accu0__ = [];
/* 000588 */ 				var __iterable0__ = (function () {
/* 000588 */ 					var __accu1__ = self.feature.float_types;
/* 000588 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000588 */ 				}) ();
/* 000588 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000588 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000588 */ 					var float_type = __left0__ [0];
/* 000588 */ 					var ftinfo = __left0__ [1];
/* 000588 */ 					(function () {
/* 000588 */ 						var __accu1__ = __accu0__;
/* 000588 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 0]);
/* 000588 */ 					}) ();
/* 000588 */ 				}
/* 000588 */ 				return dict (__accu0__);
/* 000588 */ 			}) ();
/* 000590 */ 			self.float_instances = dict ({});
/* 000592 */ 			if (__t__ ((function () {
/* 000592 */ 				var __accu0__ = self.render_context;
/* 000592 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000592 */ 			}) ())) {
/* 000593 */ 				var refs_mgr = (function () {
/* 000593 */ 					var __accu0__ = self.render_context;
/* 000593 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000593 */ 				}) ();
/* 000594 */ 				var __iterable0__ = (function () {
/* 000594 */ 					var __accu0__ = self.feature.float_types;
/* 000594 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000594 */ 				}) ();
/* 000594 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000594 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000594 */ 					var float_type = __left0__ [0];
/* 000594 */ 					var ftinfo = __left0__ [1];
/* 000595 */ 					(function () {
/* 000595 */ 						var __accu0__ = refs_mgr;
/* 000595 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: ftinfo.counter_formatter}));
/* 000595 */ 					}) ();
/* 000595 */ 				}
/* 000595 */ 			}
/* 000595 */ 		});},
/* 000599 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000599 */ 			var numbered = true;
/* 000599 */ 			var ref_label_prefix = null;
/* 000599 */ 			var ref_label = null;
/* 000599 */ 			var caption_nodelist = null;
/* 000599 */ 			var content_nodelist = null;
/* 000599 */ 			if (arguments.length) {
/* 000599 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000599 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000599 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000599 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000599 */ 						switch (__attrib0__) {
/* 000599 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 						}
/* 000599 */ 					}
/* 000599 */ 				}
/* 000599 */ 			}
/* 000599 */ 			else {
/* 000599 */ 			}
/* 000611 */ 			var node_id = (function () {
/* 000611 */ 				var __accu0__ = self;
/* 000611 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000611 */ 			}) ();
/* 000613 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000615 */ 				return __getitem__ (self.float_instances, node_id);
/* 000615 */ 			}
/* 000617 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000619 */ 			// pass;
/* 000623 */ 			if (__t__ (numbered)) {
/* 000624 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000625 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000626 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000628 */ 				var fmtvalue_flm_text = (function () {
/* 000628 */ 					var __accu0__ = fmtcounter;
/* 000628 */ 					return __call__ (__accu0__.format_flm, __accu0__, number, __kwargtrans__ ({with_prefix: false}));
/* 000628 */ 				}) ();
/* 000629 */ 				var fmtvalue_flm = (function () {
/* 000629 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000629 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000629 */ 				}) ();
/* 000635 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000635 */ 			}
/* 000636 */ 			else {
/* 000638 */ 				var number = null;
/* 000639 */ 				var fmtvalue_flm = null;
/* 000640 */ 				var fmtcounter_id = null;
/* 000640 */ 			}
/* 000642 */ 			var target_id = null;
/* 000643 */ 			if (__t__ (number !== null)) {
/* 000644 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000644 */ 			}
/* 000646 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000660 */ 			(function () {
/* 000660 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000660 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000660 */ 			}) ();
/* 000663 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000663 */ 				var __accu0__ = self.render_context;
/* 000663 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000663 */ 			}) ())) {
/* 000667 */ 				var refs_mgr = (function () {
/* 000667 */ 					var __accu0__ = self.render_context;
/* 000667 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000667 */ 				}) ();
/* 000669 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000669 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000673 */ 					var formatted_ref_flm_text = (function () {
/* 000673 */ 						var __accu0__ = self;
/* 000673 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000673 */ 					}) ();
/* 000675 */ 					(function () {
/* 000675 */ 						var __accu0__ = refs_mgr;
/* 000675 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: number, counter_formatter_id: fmtcounter_id}));
/* 000675 */ 					}) ();
/* 000675 */ 				}
/* 000675 */ 			}
/* 000685 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000686 */ 			return float_instance;
/* 000686 */ 		});},
/* 000688 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000688 */ 			if (arguments.length) {
/* 000688 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000688 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000688 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000688 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000688 */ 						switch (__attrib0__) {
/* 000688 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 						}
/* 000688 */ 					}
/* 000688 */ 				}
/* 000688 */ 			}
/* 000688 */ 			else {
/* 000688 */ 			}
/* 000689 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_flm.flm_text);
/* 000689 */ 		});}
/* 000689 */ 	}),
/* 000697 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000697 */ 		if (arguments.length) {
/* 000697 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000697 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000697 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000697 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000697 */ 					switch (__attrib0__) {
/* 000697 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000697 */ 					}
/* 000697 */ 				}
/* 000697 */ 			}
/* 000697 */ 		}
/* 000697 */ 		else {
/* 000697 */ 		}
/* 000698 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000698 */ 	});},
/* 000701 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000701 */ 		if (arguments.length) {
/* 000701 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000701 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000701 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000701 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000701 */ 					switch (__attrib0__) {
/* 000701 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 					}
/* 000701 */ 				}
/* 000701 */ 			}
/* 000701 */ 		}
/* 000701 */ 		else {
/* 000701 */ 		}
/* 000708 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000719 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000723 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000728 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000728 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000728 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000729 */ 			var ftname = ft_env.environmentname;
/* 000730 */ 			var ch_list = ft_env.content_handlers;
/* 000731 */ 			var __iterable1__ = ch_list;
/* 000731 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000731 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000732 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000733 */ 				(function () {
/* 000733 */ 					var __accu0__ = ch;
/* 000733 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000733 */ 				}) ();
/* 000735 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000735 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000735 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000736 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000737 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000737 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000737 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000738 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000738 */ 							var whatname = __left0__ [0];
/* 000738 */ 							var _ = __left0__ [1];
/* 000740 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000741 */ 								(function () {
/* 000741 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000741 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000741 */ 								}) ();
/* 000742 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000742 */ 							}
/* 000743 */ 							else {
/* 000744 */ 								(function () {
/* 000744 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000744 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000744 */ 								}) ();
/* 000744 */ 							}
/* 000744 */ 						}
/* 000744 */ 					}
/* 000744 */ 				}
/* 000744 */ 			}
/* 000744 */ 		}
/* 000747 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000747 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000747 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000748 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000748 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000748 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000749 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000749 */ 				var whatname = __left0__ [0];
/* 000749 */ 				var whattext = __left0__ [1];
/* 000754 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000754 */ 					var __accu0__ = ', ';
/* 000754 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000754 */ 						var __accu1__ = [];
/* 000754 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000754 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000755 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000755 */ 							(function () {
/* 000755 */ 								var __accu2__ = __accu1__;
/* 000755 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000755 */ 							}) ();
/* 000755 */ 						}
/* 000755 */ 						return __accu1__;
/* 000755 */ 					}) ());
/* 000755 */ 				}) ()));
/* 000757 */ 				(function () {
/* 000757 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000757 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000757 */ 				}) ();
/* 000757 */ 			}
/* 000757 */ 		}
/* 000759 */ 		return defs;
/* 000759 */ 	});}
/* 000759 */ });
/* 000763 */ export var _whatname = function (m, which) {
/* 000763 */ 	if (arguments.length) {
/* 000763 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000763 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000763 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000763 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000763 */ 				switch (__attrib0__) {
/* 000763 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000763 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000763 */ 				}
/* 000763 */ 			}
/* 000763 */ 		}
/* 000763 */ 	}
/* 000763 */ 	else {
/* 000763 */ 	}
/* 000764 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000765 */ 		var whatname = m.macroname;
/* 000766 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000766 */ 	}
/* 000767 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000768 */ 		var whatname = m.environmentname;
/* 000769 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000769 */ 	}
/* 000770 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000771 */ 		var whatname = m.specials_chars;
/* 000772 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000772 */ 	}
/* 000773 */ 	else {
/* 000774 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000774 */ 		__except0__.__cause__ = null;
/* 000774 */ 		throw __except0__;
/* 000774 */ 	}
/* 000775 */ 	return tuple ([whatname, whattext]);
/* 000775 */ };
/* 000777 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000777 */ 	if (arguments.length) {
/* 000777 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000777 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000777 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000777 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000777 */ 				switch (__attrib0__) {
/* 000777 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000777 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000777 */ 				}
/* 000777 */ 			}
/* 000777 */ 		}
/* 000777 */ 	}
/* 000777 */ 	else {
/* 000777 */ 	}
/* 000778 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000779 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000779 */ 			if (arguments.length) {
/* 000779 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000779 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000779 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000779 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000779 */ 					}
/* 000779 */ 				}
/* 000779 */ 			}
/* 000779 */ 			else {
/* 000779 */ 			}
/* 000779 */ 			return add_flm_doc;
/* 000779 */ 		});
/* 000780 */ 		return mdef;
/* 000780 */ 	}
/* 000781 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000782 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000782 */ 		if (arguments.length) {
/* 000782 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000782 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000782 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000782 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000782 */ 				}
/* 000782 */ 			}
/* 000782 */ 		}
/* 000782 */ 		else {
/* 000782 */ 		}
/* 000782 */ 		return (function () {
/* 000783 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000785 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000785 */ 		}) ();
/* 000785 */ 	});
/* 000787 */ 	return mdef;
/* 000787 */ };
/* 000794 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map