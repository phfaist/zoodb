/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:15
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
/* 000006 */ export {make_verb_argument, LatexWalkerLocatedError, MacroSpec, build_counter_formatter, ParsingStateDeltaExtendLatexContextDb, Counter, SimpleIncludeGraphicsMacro, Feature, CellsEnvironment, FLMEnvironmentSpecBase, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_parsers, LatexEnvironmentBodyContentsParser, latexnodes_nodes};
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
/* 000353 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000353 */ 		var kwargs = dict ();
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 				delete kwargs.__kwargtrans__;
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000357 */ 		var recopt_floats = (function () {
/* 000357 */ 			var __accu0__ = recomposer;
/* 000357 */ 			return __call__ (__accu0__.get_options, __accu0__, 'floats');
/* 000357 */ 		}) ();
/* 000358 */ 		if (__t__ ((function () {
/* 000358 */ 			var __accu0__ = recopt_floats;
/* 000358 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000358 */ 		}) ())) {
/* 000359 */ 			return false;
/* 000359 */ 		}
/* 000362 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000366 */ 		var has_number = has_label;
/* 000367 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000369 */ 		var env_name = 'flmFloat';
/* 000370 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000371 */ 		if (__t__ (has_number)) {
/* 000372 */ 			if (__t__ (has_caption)) {
/* 000373 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000373 */ 			}
/* 000374 */ 			else {
/* 000375 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000375 */ 			}
/* 000375 */ 		}
/* 000377 */ 		else if (__t__ (has_caption)) {
/* 000378 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000378 */ 		}
/* 000379 */ 		else {
/* 000380 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000380 */ 		}
/* 000382 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000383 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000383 */ 			var __accu0__ = '';
/* 000383 */ 			return __call__ (__accu0__.join, __accu0__, visited_results_arguments);
/* 000383 */ 		}) ());
/* 000388 */ 		var s = __call__ (__iadd__, null, s, __getitem__ ((function () {
/* 000388 */ 			var __accu0__ = recomposer;
/* 000388 */ 			return __call__ (__accu0__.recompose_pure_latex, __accu0__, node.flm_float_content_nodelist);
/* 000388 */ 		}) (), 'latex'));
/* 000390 */ 		if (__t__ (has_caption)) {
/* 000391 */ 			var s = __call__ (__iadd__, null, s, __getitem__ ((function () {
/* 000391 */ 				var __accu0__ = recomposer;
/* 000391 */ 				return __call__ (__accu0__.recompose_pure_latex, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000391 */ 			}) (), 'latex'));
/* 000391 */ 		}
/* 000395 */ 		if (__t__ (has_label)) {
/* 000396 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000397 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000398 */ 			var safe_label_info = (function () {
/* 000398 */ 				var __accu0__ = recomposer;
/* 000398 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000398 */ 			}) ();
/* 000399 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000399 */ 		}
/* 000401 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000403 */ 		return s;
/* 000403 */ 	});}
/* 000403 */ });
/* 000413 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000413 */ 	__module__: __name__,
/* 000414 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000414 */ 		var float_type = null;
/* 000414 */ 		var float_type_info = null;
/* 000414 */ 		var number = null;
/* 000414 */ 		var formatted_counter_value_flm = null;
/* 000414 */ 		var ref_label_prefix = null;
/* 000414 */ 		var ref_label = null;
/* 000414 */ 		var target_id = null;
/* 000414 */ 		var caption_nodelist = null;
/* 000414 */ 		var content_nodelist = null;
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000426 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000427 */ 		self.float_type = float_type;
/* 000428 */ 		self.float_type_info = float_type_info;
/* 000429 */ 		self.number = number;
/* 000430 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000431 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000432 */ 		self.ref_label = ref_label;
/* 000433 */ 		self.target_id = target_id;
/* 000434 */ 		self.caption_nodelist = caption_nodelist;
/* 000435 */ 		self.content_nodelist = content_nodelist;
/* 000436 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000436 */ 	});},
/* 000441 */ 	get asdict () {return __get__ (this, function (self) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000442 */ 		return (function () {
/* 000442 */ 			var __accu0__ = [];
/* 000442 */ 			var __iterable0__ = self._fields;
/* 000442 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000442 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000442 */ 				(function () {
/* 000442 */ 					var __accu1__ = __accu0__;
/* 000442 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000442 */ 				}) ();
/* 000442 */ 			}
/* 000442 */ 			return dict (__accu0__);
/* 000442 */ 		}) ();
/* 000442 */ 	});},
/* 000444 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000445 */ 		return (function () {
/* 000445 */ 			var __accu0__ = '{}({})';
/* 000447 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000447 */ 				var __accu1__ = ', ';
/* 000447 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000447 */ 					var __accu2__ = [];
/* 000447 */ 					var __iterable0__ = self._fields;
/* 000447 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000447 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000447 */ 						(function () {
/* 000447 */ 							var __accu3__ = __accu2__;
/* 000447 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000447 */ 						}) ();
/* 000447 */ 					}
/* 000447 */ 					return __accu2__;
/* 000447 */ 				}) ());
/* 000447 */ 			}) ());
/* 000447 */ 		}) ();
/* 000447 */ 	});}
/* 000447 */ });
/* 000453 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000453 */ 	if (arguments.length) {
/* 000453 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000453 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000453 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000453 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000453 */ 				switch (__attrib0__) {
/* 000453 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000453 */ 				}
/* 000453 */ 			}
/* 000453 */ 		}
/* 000453 */ 	}
/* 000453 */ 	else {
/* 000453 */ 	}
/* 000454 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000455 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000455 */ 	}
/* 000463 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000464 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000464 */ 	}
/* 000470 */ 	else {
/* 000473 */ 		var float_type_cap = (function () {
/* 000473 */ 			var __accu0__ = float_type;
/* 000473 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000473 */ 		}) ();
/* 000474 */ 		var prefix_display = tuple ([dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')})]);
/* 000474 */ 	}
/* 000478 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000478 */ };
/* 000487 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000487 */ 	__module__: __name__,
/* 000488 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000488 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000488 */ 			var float_caption_name = null;
/* 000488 */ 		};
/* 000488 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000488 */ 			var counter_formatter = null;
/* 000488 */ 		};
/* 000488 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000488 */ 			var content_handlers = null;
/* 000488 */ 		};
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000496 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000498 */ 		self.float_type = float_type;
/* 000500 */ 		if (__t__ (float_caption_name === null)) {
/* 000501 */ 			var float_caption_name = float_type;
/* 000501 */ 		}
/* 000503 */ 		self.float_caption_name = float_caption_name;
/* 000505 */ 		if (__t__ (counter_formatter === null)) {
/* 000506 */ 			var counter_formatter = dict ({'format_num': 'arabic'});
/* 000506 */ 		}
/* 000510 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000514 */ 		self.content_handlers = content_handlers;
/* 000516 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000516 */ 	});},
/* 000519 */ 	get asdict () {return __get__ (this, function (self) {
/* 000519 */ 		if (arguments.length) {
/* 000519 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000519 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000519 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000519 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000519 */ 					switch (__attrib0__) {
/* 000519 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 					}
/* 000519 */ 				}
/* 000519 */ 			}
/* 000519 */ 		}
/* 000519 */ 		else {
/* 000519 */ 		}
/* 000520 */ 		return (function () {
/* 000520 */ 			var __accu0__ = [];
/* 000520 */ 			var __iterable0__ = self._fields;
/* 000520 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000520 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000520 */ 				(function () {
/* 000520 */ 					var __accu1__ = __accu0__;
/* 000520 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000520 */ 				}) ();
/* 000520 */ 			}
/* 000520 */ 			return dict (__accu0__);
/* 000520 */ 		}) ();
/* 000520 */ 	});},
/* 000522 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000522 */ 		if (arguments.length) {
/* 000522 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000522 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000522 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000522 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000522 */ 					switch (__attrib0__) {
/* 000522 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 					}
/* 000522 */ 				}
/* 000522 */ 			}
/* 000522 */ 		}
/* 000522 */ 		else {
/* 000522 */ 		}
/* 000523 */ 		return (function () {
/* 000523 */ 			var __accu0__ = '{}({})';
/* 000525 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000525 */ 				var __accu1__ = ', ';
/* 000525 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000525 */ 					var __accu2__ = [];
/* 000525 */ 					var __iterable0__ = self._fields;
/* 000525 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000525 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000525 */ 						(function () {
/* 000525 */ 							var __accu3__ = __accu2__;
/* 000525 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000525 */ 						}) ();
/* 000525 */ 					}
/* 000525 */ 					return __accu2__;
/* 000525 */ 				}) ());
/* 000525 */ 			}) ());
/* 000525 */ 		}) ();
/* 000525 */ 	});}
/* 000525 */ });
/* 000537 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000545 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000545 */ 	__module__: __name__,
/* 000547 */ 	feature_name: 'floats',
/* 000548 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000550 */ 	feature_optional_dependencies: ['refs'],
/* 000552 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000552 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000552 */ 			var float_types = null;
/* 000552 */ 		};
/* 000552 */ 		if (arguments.length) {
/* 000552 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000552 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000552 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000552 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000552 */ 					switch (__attrib0__) {
/* 000552 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 					}
/* 000552 */ 				}
/* 000552 */ 			}
/* 000552 */ 		}
/* 000552 */ 		else {
/* 000552 */ 		}
/* 000553 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000554 */ 		if (__t__ (float_types === null)) {
/* 000555 */ 			var float_types = _default_float_types;
/* 000555 */ 		}
/* 000556 */ 		var _mkfloattypeobj = function (x) {
/* 000556 */ 			if (arguments.length) {
/* 000556 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 						switch (__attrib0__) {
/* 000556 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						}
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 			}
/* 000556 */ 			else {
/* 000556 */ 			}
/* 000557 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000558 */ 				return x;
/* 000558 */ 			}
/* 000559 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000559 */ 		};
/* 000560 */ 		self.float_types_list = (function () {
/* 000560 */ 			var __accu0__ = [];
/* 000560 */ 			var __iterable0__ = float_types;
/* 000560 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000560 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000560 */ 				(function () {
/* 000560 */ 					var __accu1__ = __accu0__;
/* 000560 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000560 */ 				}) ();
/* 000560 */ 			}
/* 000560 */ 			return __accu0__;
/* 000560 */ 		}) ();
/* 000561 */ 		self.float_types = (function () {
/* 000561 */ 			var __accu0__ = [];
/* 000561 */ 			var __iterable0__ = self.float_types_list;
/* 000561 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000563 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000563 */ 				(function () {
/* 000563 */ 					var __accu1__ = __accu0__;
/* 000563 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000563 */ 				}) ();
/* 000563 */ 			}
/* 000563 */ 			return dict (__accu0__);
/* 000563 */ 		}) ();
/* 000563 */ 	});},
/* 000566 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000566 */ 		if (arguments.length) {
/* 000566 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000566 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000566 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000566 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000566 */ 					switch (__attrib0__) {
/* 000566 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 					}
/* 000566 */ 				}
/* 000566 */ 			}
/* 000566 */ 		}
/* 000566 */ 		else {
/* 000566 */ 		}
/* 000567 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000567 */ 	});},
/* 000572 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000572 */ 		if (arguments.length) {
/* 000572 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000572 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000572 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000572 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000572 */ 					switch (__attrib0__) {
/* 000572 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000572 */ 					}
/* 000572 */ 				}
/* 000572 */ 			}
/* 000572 */ 		}
/* 000572 */ 		else {
/* 000572 */ 		}
/* 000573 */ 		var environments = [];
/* 000574 */ 		var __iterable0__ = (function () {
/* 000574 */ 			var __accu0__ = self.float_types;
/* 000574 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000574 */ 		}) ();
/* 000574 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000574 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000574 */ 			var float_type = __left0__ [0];
/* 000574 */ 			var ftinfo = __left0__ [1];
/* 000575 */ 			(function () {
/* 000575 */ 				var __accu0__ = environments;
/* 000576 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000576 */ 					var __accu1__ = self;
/* 000576 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000576 */ 				}) ());
/* 000576 */ 			}) ();
/* 000576 */ 		}
/* 000578 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000580 */ 	});},
/* 000580 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000580 */ 		__module__: __name__,
/* 000582 */ 		get initialize () {return __get__ (this, function (self) {
/* 000582 */ 			if (arguments.length) {
/* 000582 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000582 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000582 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000582 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000582 */ 						switch (__attrib0__) {
/* 000582 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						}
/* 000582 */ 					}
/* 000582 */ 				}
/* 000582 */ 			}
/* 000582 */ 			else {
/* 000582 */ 			}
/* 000583 */ 			self.floats = (function () {
/* 000583 */ 				var __accu0__ = [];
/* 000585 */ 				var __iterable0__ = (function () {
/* 000585 */ 					var __accu1__ = self.feature.float_types;
/* 000585 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000585 */ 				}) ();
/* 000585 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000585 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000585 */ 					var float_type = __left0__ [0];
/* 000585 */ 					var ftinfo = __left0__ [1];
/* 000585 */ 					(function () {
/* 000585 */ 						var __accu1__ = __accu0__;
/* 000585 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000585 */ 					}) ();
/* 000585 */ 				}
/* 000585 */ 				return dict (__accu0__);
/* 000585 */ 			}) ();
/* 000587 */ 			self.float_counters = (function () {
/* 000587 */ 				var __accu0__ = [];
/* 000589 */ 				var __iterable0__ = (function () {
/* 000589 */ 					var __accu1__ = self.feature.float_types;
/* 000589 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000589 */ 				}) ();
/* 000589 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000589 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000589 */ 					var float_type = __left0__ [0];
/* 000589 */ 					var ftinfo = __left0__ [1];
/* 000589 */ 					(function () {
/* 000589 */ 						var __accu1__ = __accu0__;
/* 000589 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 0]);
/* 000589 */ 					}) ();
/* 000589 */ 				}
/* 000589 */ 				return dict (__accu0__);
/* 000589 */ 			}) ();
/* 000591 */ 			self.float_instances = dict ({});
/* 000593 */ 			if (__t__ ((function () {
/* 000593 */ 				var __accu0__ = self.render_context;
/* 000593 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000593 */ 			}) ())) {
/* 000594 */ 				var refs_mgr = (function () {
/* 000594 */ 					var __accu0__ = self.render_context;
/* 000594 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000594 */ 				}) ();
/* 000595 */ 				var __iterable0__ = (function () {
/* 000595 */ 					var __accu0__ = self.feature.float_types;
/* 000595 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000595 */ 				}) ();
/* 000595 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000595 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000595 */ 					var float_type = __left0__ [0];
/* 000595 */ 					var ftinfo = __left0__ [1];
/* 000596 */ 					(function () {
/* 000596 */ 						var __accu0__ = refs_mgr;
/* 000596 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: ftinfo.counter_formatter}));
/* 000596 */ 					}) ();
/* 000596 */ 				}
/* 000596 */ 			}
/* 000596 */ 		});},
/* 000600 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000600 */ 			var numbered = true;
/* 000600 */ 			var ref_label_prefix = null;
/* 000600 */ 			var ref_label = null;
/* 000600 */ 			var caption_nodelist = null;
/* 000600 */ 			var content_nodelist = null;
/* 000600 */ 			if (arguments.length) {
/* 000600 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000600 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000600 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000600 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000600 */ 						switch (__attrib0__) {
/* 000600 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 						}
/* 000600 */ 					}
/* 000600 */ 				}
/* 000600 */ 			}
/* 000600 */ 			else {
/* 000600 */ 			}
/* 000612 */ 			var node_id = (function () {
/* 000612 */ 				var __accu0__ = self;
/* 000612 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000612 */ 			}) ();
/* 000614 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000616 */ 				return __getitem__ (self.float_instances, node_id);
/* 000616 */ 			}
/* 000618 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000620 */ 			// pass;
/* 000624 */ 			if (__t__ (numbered)) {
/* 000625 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000626 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000627 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000629 */ 				var fmtvalue_flm_text = (function () {
/* 000629 */ 					var __accu0__ = fmtcounter;
/* 000629 */ 					return __call__ (__accu0__.format_flm, __accu0__, number, __kwargtrans__ ({with_prefix: false}));
/* 000629 */ 				}) ();
/* 000630 */ 				var fmtvalue_flm = (function () {
/* 000630 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000630 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000630 */ 				}) ();
/* 000636 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000636 */ 			}
/* 000637 */ 			else {
/* 000639 */ 				var number = null;
/* 000640 */ 				var fmtvalue_flm = null;
/* 000641 */ 				var fmtcounter_id = null;
/* 000641 */ 			}
/* 000643 */ 			var target_id = null;
/* 000644 */ 			if (__t__ (number !== null)) {
/* 000645 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000645 */ 			}
/* 000647 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000661 */ 			(function () {
/* 000661 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000661 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000661 */ 			}) ();
/* 000664 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000664 */ 				var __accu0__ = self.render_context;
/* 000664 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000664 */ 			}) ())) {
/* 000668 */ 				var refs_mgr = (function () {
/* 000668 */ 					var __accu0__ = self.render_context;
/* 000668 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000668 */ 				}) ();
/* 000670 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000670 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000674 */ 					var formatted_ref_flm_text = (function () {
/* 000674 */ 						var __accu0__ = self;
/* 000674 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000674 */ 					}) ();
/* 000676 */ 					(function () {
/* 000676 */ 						var __accu0__ = refs_mgr;
/* 000676 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: number, counter_formatter_id: fmtcounter_id}));
/* 000676 */ 					}) ();
/* 000676 */ 				}
/* 000676 */ 			}
/* 000686 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000687 */ 			return float_instance;
/* 000687 */ 		});},
/* 000689 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000689 */ 			if (arguments.length) {
/* 000689 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000689 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000689 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000689 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000689 */ 						switch (__attrib0__) {
/* 000689 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						}
/* 000689 */ 					}
/* 000689 */ 				}
/* 000689 */ 			}
/* 000689 */ 			else {
/* 000689 */ 			}
/* 000690 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_flm.flm_text);
/* 000690 */ 		});}
/* 000690 */ 	}),
/* 000698 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000699 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000699 */ 	});},
/* 000702 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000702 */ 		if (arguments.length) {
/* 000702 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000702 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000702 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000702 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000702 */ 					switch (__attrib0__) {
/* 000702 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000702 */ 		}
/* 000702 */ 		else {
/* 000702 */ 		}
/* 000709 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000720 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000724 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000729 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000729 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000729 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000730 */ 			var ftname = ft_env.environmentname;
/* 000731 */ 			var ch_list = ft_env.content_handlers;
/* 000732 */ 			var __iterable1__ = ch_list;
/* 000732 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000732 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000733 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000734 */ 				(function () {
/* 000734 */ 					var __accu0__ = ch;
/* 000734 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000734 */ 				}) ();
/* 000736 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000736 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000736 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000737 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000738 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000738 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000738 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000739 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000739 */ 							var whatname = __left0__ [0];
/* 000739 */ 							var _ = __left0__ [1];
/* 000741 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000742 */ 								(function () {
/* 000742 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000742 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000742 */ 								}) ();
/* 000743 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000743 */ 							}
/* 000744 */ 							else {
/* 000745 */ 								(function () {
/* 000745 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000745 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000745 */ 								}) ();
/* 000745 */ 							}
/* 000745 */ 						}
/* 000745 */ 					}
/* 000745 */ 				}
/* 000745 */ 			}
/* 000745 */ 		}
/* 000748 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000748 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000748 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000749 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000749 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000749 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000750 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000750 */ 				var whatname = __left0__ [0];
/* 000750 */ 				var whattext = __left0__ [1];
/* 000755 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000755 */ 					var __accu0__ = ', ';
/* 000755 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000755 */ 						var __accu1__ = [];
/* 000755 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000755 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000756 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000756 */ 							(function () {
/* 000756 */ 								var __accu2__ = __accu1__;
/* 000756 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000756 */ 							}) ();
/* 000756 */ 						}
/* 000756 */ 						return __accu1__;
/* 000756 */ 					}) ());
/* 000756 */ 				}) ()));
/* 000758 */ 				(function () {
/* 000758 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000758 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000758 */ 				}) ();
/* 000758 */ 			}
/* 000758 */ 		}
/* 000760 */ 		return defs;
/* 000760 */ 	});}
/* 000760 */ });
/* 000764 */ export var _whatname = function (m, which) {
/* 000764 */ 	if (arguments.length) {
/* 000764 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 				switch (__attrib0__) {
/* 000764 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 	}
/* 000764 */ 	else {
/* 000764 */ 	}
/* 000765 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000766 */ 		var whatname = m.macroname;
/* 000767 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000767 */ 	}
/* 000768 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000769 */ 		var whatname = m.environmentname;
/* 000770 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000770 */ 	}
/* 000771 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000772 */ 		var whatname = m.specials_chars;
/* 000773 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000773 */ 	}
/* 000774 */ 	else {
/* 000775 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000775 */ 		__except0__.__cause__ = null;
/* 000775 */ 		throw __except0__;
/* 000775 */ 	}
/* 000776 */ 	return tuple ([whatname, whattext]);
/* 000776 */ };
/* 000778 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000778 */ 	if (arguments.length) {
/* 000778 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000778 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000778 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000778 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000778 */ 				switch (__attrib0__) {
/* 000778 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000778 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000778 */ 				}
/* 000778 */ 			}
/* 000778 */ 		}
/* 000778 */ 	}
/* 000778 */ 	else {
/* 000778 */ 	}
/* 000779 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000780 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000780 */ 			if (arguments.length) {
/* 000780 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000780 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000780 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000780 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000780 */ 					}
/* 000780 */ 				}
/* 000780 */ 			}
/* 000780 */ 			else {
/* 000780 */ 			}
/* 000780 */ 			return add_flm_doc;
/* 000780 */ 		});
/* 000781 */ 		return mdef;
/* 000781 */ 	}
/* 000782 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000783 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000783 */ 		if (arguments.length) {
/* 000783 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000783 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000783 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000783 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000783 */ 				}
/* 000783 */ 			}
/* 000783 */ 		}
/* 000783 */ 		else {
/* 000783 */ 		}
/* 000783 */ 		return (function () {
/* 000784 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000786 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000786 */ 		}) ();
/* 000786 */ 	});
/* 000788 */ 	return mdef;
/* 000788 */ };
/* 000795 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map