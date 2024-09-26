/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 17:30:24
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
/* 000006 */ export {MacroSpec, FLMArgumentSpec, LatexWalkerLocatedError, CellsEnvironment, latexnodes_nodes, build_counter_formatter, LatexEnvironmentBodyContentsParser, make_verb_argument, FLMEnvironmentSpecBase, Counter, SimpleIncludeGraphicsMacro, ParsedArgumentsInfo, ParsingStateDeltaExtendLatexContextDb, latexnodes_parsers, Feature};
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
/* 000378 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000382 */ 		var has_number = has_label;
/* 000383 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000385 */ 		var env_name = 'flmFloat';
/* 000386 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000387 */ 		if (__t__ (has_number)) {
/* 000388 */ 			if (__t__ (has_caption)) {
/* 000389 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000389 */ 			}
/* 000390 */ 			else {
/* 000391 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000391 */ 			}
/* 000391 */ 		}
/* 000393 */ 		else if (__t__ (has_caption)) {
/* 000394 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000394 */ 		}
/* 000395 */ 		else {
/* 000396 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000396 */ 		}
/* 000398 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000399 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000399 */ 			var __accu0__ = '';
/* 000399 */ 			return __call__ (__accu0__.join, __accu0__, visited_results_arguments);
/* 000399 */ 		}) ());
/* 000404 */ 		var s = __call__ (__iadd__, null, s, __getitem__ ((function () {
/* 000404 */ 			var __accu0__ = recomposer;
/* 000404 */ 			return __call__ (__accu0__.recompose_pure_latex, __accu0__, node.flm_float_content_nodelist);
/* 000404 */ 		}) (), 'latex'));
/* 000406 */ 		if (__t__ (has_caption)) {
/* 000407 */ 			var s = __call__ (__iadd__, null, s, __getitem__ ((function () {
/* 000407 */ 				var __accu0__ = recomposer;
/* 000407 */ 				return __call__ (__accu0__.recompose_pure_latex, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000407 */ 			}) (), 'latex'));
/* 000407 */ 		}
/* 000411 */ 		if (__t__ (has_label)) {
/* 000412 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000413 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000414 */ 			var safe_label_info = (function () {
/* 000414 */ 				var __accu0__ = recomposer;
/* 000414 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000414 */ 			}) ();
/* 000415 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000415 */ 		}
/* 000417 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000419 */ 		return s;
/* 000419 */ 	});}
/* 000419 */ });
/* 000429 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000429 */ 	__module__: __name__,
/* 000430 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000430 */ 		var float_type = null;
/* 000430 */ 		var float_type_info = null;
/* 000430 */ 		var number = null;
/* 000430 */ 		var formatted_counter_value_flm = null;
/* 000430 */ 		var ref_label_prefix = null;
/* 000430 */ 		var ref_label = null;
/* 000430 */ 		var target_id = null;
/* 000430 */ 		var caption_nodelist = null;
/* 000430 */ 		var content_nodelist = null;
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000442 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000443 */ 		self.float_type = float_type;
/* 000444 */ 		self.float_type_info = float_type_info;
/* 000445 */ 		self.number = number;
/* 000446 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000447 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000448 */ 		self.ref_label = ref_label;
/* 000449 */ 		self.target_id = target_id;
/* 000450 */ 		self.caption_nodelist = caption_nodelist;
/* 000451 */ 		self.content_nodelist = content_nodelist;
/* 000452 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000452 */ 	});},
/* 000457 */ 	get asdict () {return __get__ (this, function (self) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000458 */ 		return (function () {
/* 000458 */ 			var __accu0__ = [];
/* 000458 */ 			var __iterable0__ = self._fields;
/* 000458 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000458 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000458 */ 				(function () {
/* 000458 */ 					var __accu1__ = __accu0__;
/* 000458 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000458 */ 				}) ();
/* 000458 */ 			}
/* 000458 */ 			return dict (__accu0__);
/* 000458 */ 		}) ();
/* 000458 */ 	});},
/* 000460 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000461 */ 		return (function () {
/* 000461 */ 			var __accu0__ = '{}({})';
/* 000463 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000463 */ 				var __accu1__ = ', ';
/* 000463 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000463 */ 					var __accu2__ = [];
/* 000463 */ 					var __iterable0__ = self._fields;
/* 000463 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000463 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000463 */ 						(function () {
/* 000463 */ 							var __accu3__ = __accu2__;
/* 000463 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000463 */ 						}) ();
/* 000463 */ 					}
/* 000463 */ 					return __accu2__;
/* 000463 */ 				}) ());
/* 000463 */ 			}) ());
/* 000463 */ 		}) ();
/* 000463 */ 	});}
/* 000463 */ });
/* 000469 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000469 */ 	if (arguments.length) {
/* 000469 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000469 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000469 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000469 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000469 */ 				switch (__attrib0__) {
/* 000469 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 				}
/* 000469 */ 			}
/* 000469 */ 		}
/* 000469 */ 	}
/* 000469 */ 	else {
/* 000469 */ 	}
/* 000470 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000471 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000471 */ 	}
/* 000479 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000480 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000480 */ 	}
/* 000486 */ 	else {
/* 000489 */ 		var float_type_cap = (function () {
/* 000489 */ 			var __accu0__ = float_type;
/* 000489 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000489 */ 		}) ();
/* 000490 */ 		var prefix_display = tuple ([dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')})]);
/* 000490 */ 	}
/* 000494 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000494 */ };
/* 000503 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000503 */ 	__module__: __name__,
/* 000504 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000504 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var float_caption_name = null;
/* 000504 */ 		};
/* 000504 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var counter_formatter = null;
/* 000504 */ 		};
/* 000504 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var content_handlers = null;
/* 000504 */ 		};
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000512 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000514 */ 		self.float_type = float_type;
/* 000516 */ 		if (__t__ (float_caption_name === null)) {
/* 000517 */ 			var float_caption_name = float_type;
/* 000517 */ 		}
/* 000519 */ 		self.float_caption_name = float_caption_name;
/* 000521 */ 		if (__t__ (counter_formatter === null)) {
/* 000522 */ 			var counter_formatter = dict ({'format_num': 'arabic'});
/* 000522 */ 		}
/* 000526 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000530 */ 		self.content_handlers = content_handlers;
/* 000532 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000532 */ 	});},
/* 000535 */ 	get asdict () {return __get__ (this, function (self) {
/* 000535 */ 		if (arguments.length) {
/* 000535 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000535 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000535 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000535 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000535 */ 					switch (__attrib0__) {
/* 000535 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 					}
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 		}
/* 000535 */ 		else {
/* 000535 */ 		}
/* 000536 */ 		return (function () {
/* 000536 */ 			var __accu0__ = [];
/* 000536 */ 			var __iterable0__ = self._fields;
/* 000536 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000536 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000536 */ 				(function () {
/* 000536 */ 					var __accu1__ = __accu0__;
/* 000536 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000536 */ 				}) ();
/* 000536 */ 			}
/* 000536 */ 			return dict (__accu0__);
/* 000536 */ 		}) ();
/* 000536 */ 	});},
/* 000538 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000538 */ 		if (arguments.length) {
/* 000538 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000538 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000538 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000538 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000538 */ 					switch (__attrib0__) {
/* 000538 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 					}
/* 000538 */ 				}
/* 000538 */ 			}
/* 000538 */ 		}
/* 000538 */ 		else {
/* 000538 */ 		}
/* 000539 */ 		return (function () {
/* 000539 */ 			var __accu0__ = '{}({})';
/* 000541 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000541 */ 				var __accu1__ = ', ';
/* 000541 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000541 */ 					var __accu2__ = [];
/* 000541 */ 					var __iterable0__ = self._fields;
/* 000541 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000541 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000541 */ 						(function () {
/* 000541 */ 							var __accu3__ = __accu2__;
/* 000541 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000541 */ 						}) ();
/* 000541 */ 					}
/* 000541 */ 					return __accu2__;
/* 000541 */ 				}) ());
/* 000541 */ 			}) ());
/* 000541 */ 		}) ();
/* 000541 */ 	});}
/* 000541 */ });
/* 000553 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000561 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000561 */ 	__module__: __name__,
/* 000563 */ 	feature_name: 'floats',
/* 000564 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000566 */ 	feature_optional_dependencies: ['refs'],
/* 000568 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000568 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var float_types = null;
/* 000568 */ 		};
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000569 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000570 */ 		if (__t__ (float_types === null)) {
/* 000571 */ 			var float_types = _default_float_types;
/* 000571 */ 		}
/* 000572 */ 		var _mkfloattypeobj = function (x) {
/* 000572 */ 			if (arguments.length) {
/* 000572 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000572 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000572 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000572 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000572 */ 						switch (__attrib0__) {
/* 000572 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000572 */ 						}
/* 000572 */ 					}
/* 000572 */ 				}
/* 000572 */ 			}
/* 000572 */ 			else {
/* 000572 */ 			}
/* 000573 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000574 */ 				return x;
/* 000574 */ 			}
/* 000575 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
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
/* 000579 */ 	});},
/* 000582 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000582 */ 		if (arguments.length) {
/* 000582 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000582 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000582 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000582 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000582 */ 					switch (__attrib0__) {
/* 000582 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 					}
/* 000582 */ 				}
/* 000582 */ 			}
/* 000582 */ 		}
/* 000582 */ 		else {
/* 000582 */ 		}
/* 000583 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000583 */ 	});},
/* 000588 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000588 */ 		if (arguments.length) {
/* 000588 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000588 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000588 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000588 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000588 */ 					switch (__attrib0__) {
/* 000588 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 					}
/* 000588 */ 				}
/* 000588 */ 			}
/* 000588 */ 		}
/* 000588 */ 		else {
/* 000588 */ 		}
/* 000589 */ 		var environments = [];
/* 000590 */ 		var __iterable0__ = (function () {
/* 000590 */ 			var __accu0__ = self.float_types;
/* 000590 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000590 */ 		}) ();
/* 000590 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000590 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000590 */ 			var float_type = __left0__ [0];
/* 000590 */ 			var ftinfo = __left0__ [1];
/* 000591 */ 			(function () {
/* 000591 */ 				var __accu0__ = environments;
/* 000592 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000592 */ 					var __accu1__ = self;
/* 000592 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000592 */ 				}) ());
/* 000592 */ 			}) ();
/* 000592 */ 		}
/* 000594 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000596 */ 	});},
/* 000596 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000596 */ 		__module__: __name__,
/* 000598 */ 		get initialize () {return __get__ (this, function (self) {
/* 000598 */ 			if (arguments.length) {
/* 000598 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000598 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000598 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000598 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000598 */ 						switch (__attrib0__) {
/* 000598 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						}
/* 000598 */ 					}
/* 000598 */ 				}
/* 000598 */ 			}
/* 000598 */ 			else {
/* 000598 */ 			}
/* 000599 */ 			self.floats = (function () {
/* 000599 */ 				var __accu0__ = [];
/* 000601 */ 				var __iterable0__ = (function () {
/* 000601 */ 					var __accu1__ = self.feature.float_types;
/* 000601 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000601 */ 				}) ();
/* 000601 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000601 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000601 */ 					var float_type = __left0__ [0];
/* 000601 */ 					var ftinfo = __left0__ [1];
/* 000601 */ 					(function () {
/* 000601 */ 						var __accu1__ = __accu0__;
/* 000601 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000601 */ 					}) ();
/* 000601 */ 				}
/* 000601 */ 				return dict (__accu0__);
/* 000601 */ 			}) ();
/* 000603 */ 			self.float_counters = (function () {
/* 000603 */ 				var __accu0__ = [];
/* 000605 */ 				var __iterable0__ = (function () {
/* 000605 */ 					var __accu1__ = self.feature.float_types;
/* 000605 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000605 */ 				}) ();
/* 000605 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000605 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000605 */ 					var float_type = __left0__ [0];
/* 000605 */ 					var ftinfo = __left0__ [1];
/* 000605 */ 					(function () {
/* 000605 */ 						var __accu1__ = __accu0__;
/* 000605 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 0]);
/* 000605 */ 					}) ();
/* 000605 */ 				}
/* 000605 */ 				return dict (__accu0__);
/* 000605 */ 			}) ();
/* 000607 */ 			self.float_instances = dict ({});
/* 000609 */ 			if (__t__ ((function () {
/* 000609 */ 				var __accu0__ = self.render_context;
/* 000609 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000609 */ 			}) ())) {
/* 000610 */ 				var refs_mgr = (function () {
/* 000610 */ 					var __accu0__ = self.render_context;
/* 000610 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000610 */ 				}) ();
/* 000611 */ 				var __iterable0__ = (function () {
/* 000611 */ 					var __accu0__ = self.feature.float_types;
/* 000611 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000611 */ 				}) ();
/* 000611 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000611 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000611 */ 					var float_type = __left0__ [0];
/* 000611 */ 					var ftinfo = __left0__ [1];
/* 000612 */ 					(function () {
/* 000612 */ 						var __accu0__ = refs_mgr;
/* 000612 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: ftinfo.counter_formatter}));
/* 000612 */ 					}) ();
/* 000612 */ 				}
/* 000612 */ 			}
/* 000612 */ 		});},
/* 000616 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000616 */ 			var numbered = true;
/* 000616 */ 			var ref_label_prefix = null;
/* 000616 */ 			var ref_label = null;
/* 000616 */ 			var caption_nodelist = null;
/* 000616 */ 			var content_nodelist = null;
/* 000616 */ 			if (arguments.length) {
/* 000616 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 						switch (__attrib0__) {
/* 000616 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						}
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 			else {
/* 000616 */ 			}
/* 000628 */ 			var node_id = (function () {
/* 000628 */ 				var __accu0__ = self;
/* 000628 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000628 */ 			}) ();
/* 000630 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000632 */ 				return __getitem__ (self.float_instances, node_id);
/* 000632 */ 			}
/* 000634 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000636 */ 			// pass;
/* 000640 */ 			if (__t__ (numbered)) {
/* 000641 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000642 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000643 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000645 */ 				var fmtvalue_flm_text = (function () {
/* 000645 */ 					var __accu0__ = fmtcounter;
/* 000645 */ 					return __call__ (__accu0__.format_flm, __accu0__, number, __kwargtrans__ ({with_prefix: false}));
/* 000645 */ 				}) ();
/* 000646 */ 				var fmtvalue_flm = (function () {
/* 000646 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000646 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000646 */ 				}) ();
/* 000652 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000652 */ 			}
/* 000653 */ 			else {
/* 000655 */ 				var number = null;
/* 000656 */ 				var fmtvalue_flm = null;
/* 000657 */ 				var fmtcounter_id = null;
/* 000657 */ 			}
/* 000659 */ 			var target_id = null;
/* 000660 */ 			if (__t__ (number !== null)) {
/* 000661 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000661 */ 			}
/* 000663 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000677 */ 			(function () {
/* 000677 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000677 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000677 */ 			}) ();
/* 000680 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000680 */ 				var __accu0__ = self.render_context;
/* 000680 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000680 */ 			}) ())) {
/* 000684 */ 				var refs_mgr = (function () {
/* 000684 */ 					var __accu0__ = self.render_context;
/* 000684 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000684 */ 				}) ();
/* 000686 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000686 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000690 */ 					var formatted_ref_flm_text = (function () {
/* 000690 */ 						var __accu0__ = self;
/* 000690 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000690 */ 					}) ();
/* 000692 */ 					(function () {
/* 000692 */ 						var __accu0__ = refs_mgr;
/* 000692 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: number, counter_formatter_id: fmtcounter_id}));
/* 000692 */ 					}) ();
/* 000692 */ 				}
/* 000692 */ 			}
/* 000702 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000703 */ 			return float_instance;
/* 000703 */ 		});},
/* 000705 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000705 */ 			if (arguments.length) {
/* 000705 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 						switch (__attrib0__) {
/* 000705 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						}
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 			}
/* 000705 */ 			else {
/* 000705 */ 			}
/* 000706 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_flm.flm_text);
/* 000706 */ 		});}
/* 000706 */ 	}),
/* 000714 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000715 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000715 */ 	});},
/* 000718 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000718 */ 		if (arguments.length) {
/* 000718 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000718 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000718 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000718 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000718 */ 					switch (__attrib0__) {
/* 000718 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 					}
/* 000718 */ 				}
/* 000718 */ 			}
/* 000718 */ 		}
/* 000718 */ 		else {
/* 000718 */ 		}
/* 000725 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000736 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000740 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000745 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000745 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000745 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000746 */ 			var ftname = ft_env.environmentname;
/* 000747 */ 			var ch_list = ft_env.content_handlers;
/* 000748 */ 			var __iterable1__ = ch_list;
/* 000748 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000748 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000749 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000750 */ 				(function () {
/* 000750 */ 					var __accu0__ = ch;
/* 000750 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000750 */ 				}) ();
/* 000752 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000752 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000752 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000753 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000754 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000754 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000754 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000755 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000755 */ 							var whatname = __left0__ [0];
/* 000755 */ 							var _ = __left0__ [1];
/* 000757 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000758 */ 								(function () {
/* 000758 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000758 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000758 */ 								}) ();
/* 000759 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000759 */ 							}
/* 000760 */ 							else {
/* 000761 */ 								(function () {
/* 000761 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000761 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000761 */ 								}) ();
/* 000761 */ 							}
/* 000761 */ 						}
/* 000761 */ 					}
/* 000761 */ 				}
/* 000761 */ 			}
/* 000761 */ 		}
/* 000764 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000764 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000764 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000765 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000765 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000765 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000766 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000766 */ 				var whatname = __left0__ [0];
/* 000766 */ 				var whattext = __left0__ [1];
/* 000771 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000771 */ 					var __accu0__ = ', ';
/* 000771 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000771 */ 						var __accu1__ = [];
/* 000771 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000771 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000772 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000772 */ 							(function () {
/* 000772 */ 								var __accu2__ = __accu1__;
/* 000772 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000772 */ 							}) ();
/* 000772 */ 						}
/* 000772 */ 						return __accu1__;
/* 000772 */ 					}) ());
/* 000772 */ 				}) ()));
/* 000774 */ 				(function () {
/* 000774 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000774 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000774 */ 				}) ();
/* 000774 */ 			}
/* 000774 */ 		}
/* 000776 */ 		return defs;
/* 000776 */ 	});}
/* 000776 */ });
/* 000780 */ export var _whatname = function (m, which) {
/* 000780 */ 	if (arguments.length) {
/* 000780 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000780 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000780 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000780 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000780 */ 				switch (__attrib0__) {
/* 000780 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000780 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000780 */ 				}
/* 000780 */ 			}
/* 000780 */ 		}
/* 000780 */ 	}
/* 000780 */ 	else {
/* 000780 */ 	}
/* 000781 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000782 */ 		var whatname = m.macroname;
/* 000783 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000783 */ 	}
/* 000784 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000785 */ 		var whatname = m.environmentname;
/* 000786 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000786 */ 	}
/* 000787 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000788 */ 		var whatname = m.specials_chars;
/* 000789 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000789 */ 	}
/* 000790 */ 	else {
/* 000791 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000791 */ 		__except0__.__cause__ = null;
/* 000791 */ 		throw __except0__;
/* 000791 */ 	}
/* 000792 */ 	return tuple ([whatname, whattext]);
/* 000792 */ };
/* 000794 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000794 */ 	if (arguments.length) {
/* 000794 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000794 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000794 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000794 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000794 */ 				switch (__attrib0__) {
/* 000794 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000794 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000794 */ 				}
/* 000794 */ 			}
/* 000794 */ 		}
/* 000794 */ 	}
/* 000794 */ 	else {
/* 000794 */ 	}
/* 000795 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000796 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000796 */ 			if (arguments.length) {
/* 000796 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 			}
/* 000796 */ 			else {
/* 000796 */ 			}
/* 000796 */ 			return add_flm_doc;
/* 000796 */ 		});
/* 000797 */ 		return mdef;
/* 000797 */ 	}
/* 000798 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000799 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000799 */ 		if (arguments.length) {
/* 000799 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000799 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000799 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000799 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000799 */ 				}
/* 000799 */ 			}
/* 000799 */ 		}
/* 000799 */ 		else {
/* 000799 */ 		}
/* 000799 */ 		return (function () {
/* 000800 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000802 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000802 */ 		}) ();
/* 000802 */ 	});
/* 000804 */ 	return mdef;
/* 000804 */ };
/* 000811 */ export var FeatureClass = FeatureFloats;
/* 000006 */ 
//# sourceMappingURL=flm.feature.floats.map