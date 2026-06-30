/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000012 */ var logging = {};
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000035 */ import {CellsEnvironment} from './flm.feature.cells.js';
/* 000034 */ import {SimpleIncludeGraphicsMacro} from './flm.feature.graphics.js';
/* 000032 */ import * as numbering from './flm.feature.numbering.js';
/* 000030 */ import {Feature} from './flm.feature._base.js';
/* 000028 */ import {Any, Mapping, Sequence, TypeCounterFormatterInput, TypeCounterFormatterSpecDict} from './flm._typing_helpers.js';
/* 000026 */ import {build_counter_formatter} from './flm.counter.js';
/* 000025 */ import {FLMEnvironmentSpecBase, make_verb_argument} from './flm.flmspecinfo.js';
/* 000024 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000018 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000017 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000016 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000015 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000012 */ export {Feature, latexnodes_parsers, TypeCounterFormatterSpecDict, make_verb_argument, TypeCounterFormatterInput, Mapping, SimpleIncludeGraphicsMacro, build_counter_formatter, LatexEnvironmentBodyContentsParser, MacroSpec, latexnodes_nodes, ParsedArgumentsInfo, CellsEnvironment, FLMEnvironmentSpecBase, FLMArgumentSpec, Any, LatexWalkerLocatedError, ParsingStateDeltaExtendLatexContextDb, Sequence, numbering};
/* 000001 */ var __name__ = 'flm.feature.floats';
/* 000013 */ export var logger = (function () {
/* 000013 */ 	var __accu0__ = logging;
/* 000013 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000013 */ }) ();
/* 000041 */ export var FloatContentHandlerBase =  __class__ ('FloatContentHandlerBase', [object], {
/* 000041 */ 	__module__: __name__,
/* 000047 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000058 */ 		// pass;
/* 000058 */ 	});},
/* 000060 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000076 */ 		var __except0__ = __call__ (RuntimeError, null, 'This method needs to be reimplemented in subclasses!'.format ());
/* 000076 */ 		__except0__.__cause__ = null;
/* 000076 */ 		throw __except0__;
/* 000076 */ 	});}
/* 000076 */ });
/* 000081 */ export var FloatContentAnyContent =  __class__ ('FloatContentAnyContent', [FloatContentHandlerBase], {
/* 000081 */ 	__module__: __name__,
/* 000083 */ 	_fields: tuple ([]),
/* 000085 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000087 */ 		return content_nodes;
/* 000087 */ 	});}
/* 000087 */ });
/* 000090 */ export var FloatContentIncludeGraphics =  __class__ ('FloatContentIncludeGraphics', [FloatContentHandlerBase], {
/* 000090 */ 	__module__: __name__,
/* 000092 */ 	_fields: tuple ([]),
/* 000094 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000095 */ 		(function () {
/* 000095 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000096 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000096 */ 		}) ();
/* 000096 */ 	});},
/* 000099 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000101 */ 		var content_nodes = (function () {
/* 000101 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000101 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000101 */ 		}) ();
/* 000105 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000106 */ 			var node = __getitem__ (content_nodes, 0);
/* 000107 */ 			if (__t__ (__t__ ((function () {
/* 000107 */ 				var __accu0__ = node;
/* 000107 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000107 */ 			}) ()) && __eq__ (node.macroname, 'includegraphics'))) {
/* 000110 */ 				return content_nodes;
/* 000110 */ 			}
/* 000110 */ 		}
/* 000112 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\includegraphics command'.format (), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000112 */ 		__except0__.__cause__ = null;
/* 000112 */ 		throw __except0__;
/* 000112 */ 	});}
/* 000112 */ });
/* 000118 */ export var FloatContentCells =  __class__ ('FloatContentCells', [FloatContentHandlerBase], {
/* 000118 */ 	__module__: __name__,
/* 000120 */ 	_fields: tuple ([]),
/* 000122 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		(function () {
/* 000123 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'environments');
/* 000124 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (CellsEnvironment, null));
/* 000124 */ 		}) ();
/* 000124 */ 	});},
/* 000127 */ 	get float_handle_content_nodes () {return __get__ (this, function (self, float_node, content_nodes) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000129 */ 		var content_nodes = (function () {
/* 000129 */ 			var __accu0__ = content_nodes.latex_walker;
/* 000129 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, content_nodes);
/* 000129 */ 		}) ();
/* 000133 */ 		if (__t__ (__eq__ (__call__ (len, null, content_nodes), 1))) {
/* 000134 */ 			var node = __getitem__ (content_nodes, 0);
/* 000135 */ 			if (__t__ (__t__ ((function () {
/* 000135 */ 				var __accu0__ = node;
/* 000135 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000135 */ 			}) ()) && __eq__ (node.environmentname, 'cells'))) {
/* 000138 */ 				return content_nodes;
/* 000138 */ 			}
/* 000138 */ 		}
/* 000140 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'expected exactly one \\begin{}cells{}...\\end{}cells{} environment'.format ('{', '}', '{', '}'), __kwargtrans__ ({pos: content_nodes.pos}));
/* 000140 */ 		__except0__.__cause__ = null;
/* 000140 */ 		throw __except0__;
/* 000140 */ 	});}
/* 000140 */ });
/* 000147 */ export var available_content_handlers = dict ({'any': FloatContentAnyContent, 'includegraphics': FloatContentIncludeGraphics, 'cells': FloatContentCells});
/* 000155 */ export var _make_content_handler = function (c) {
/* 000155 */ 	if (arguments.length) {
/* 000155 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 				switch (__attrib0__) {
/* 000155 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 	}
/* 000155 */ 	else {
/* 000155 */ 	}
/* 000156 */ 	if (__t__ (__call__ (isinstance, null, c, FloatContentHandlerBase))) {
/* 000157 */ 		return c;
/* 000157 */ 	}
/* 000158 */ 	if (__t__ (__call__ (isinstance, null, c, str))) {
/* 000159 */ 		var c = dict ({'name': c});
/* 000159 */ 	}
/* 000160 */ 	if (__t__ (__in__ (__getitem__ (c, 'name'), available_content_handlers))) {
/* 000161 */ 		return __call__ (__getitem__ (available_content_handlers, __getitem__ (c, 'name')), null, __kwargtrans__ ((function () {
/* 000161 */ 			var __accu0__ = c;
/* 000161 */ 			return __call__ (__accu0__.py_get, __accu0__, 'config', dict ({}));
/* 000161 */ 		}) ()));
/* 000161 */ 	}
/* 000162 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid float handler specification: {}'.format (__call__ (repr, null, c)));
/* 000162 */ 	__except0__.__cause__ = null;
/* 000162 */ 	throw __except0__;
/* 000162 */ };
/* 000168 */ export var float_label_arg = __call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000168 */ 	var __accu0__ = latexnodes_parsers;
/* 000168 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000168 */ }) (), argname: 'label'}))]}));
/* 000176 */ export var float_caption_arg = __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}));
/* 000183 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [FLMEnvironmentSpecBase], {
/* 000183 */ 	__module__: __name__,
/* 000193 */ 	is_block_level: true,
/* 000195 */ 	float_content_is_block_level: true,
/* 000197 */ 	float_content_render_at_environment_node_location: true,
/* 000206 */ 	allowed_in_standalone_mode: false,
/* 000208 */ 	get __init__ () {return __get__ (this, function (self, float_type, content_handlers) {
/* 000208 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000208 */ 			var content_handlers = null;
/* 000208 */ 		};
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000219 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000223 */ 		if (__t__ (content_handlers === null)) {
/* 000224 */ 			var content_handlers = ['includegraphics', 'cells'];
/* 000224 */ 		}
/* 000225 */ 		var content_handlers = (function () {
/* 000225 */ 			var __accu0__ = [];
/* 000225 */ 			var __iterable0__ = content_handlers;
/* 000225 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000227 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000227 */ 				(function () {
/* 000227 */ 					var __accu1__ = __accu0__;
/* 000226 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_make_content_handler, null, c));
/* 000226 */ 				}) ();
/* 000226 */ 			}
/* 000226 */ 			return __accu0__;
/* 000226 */ 		}) ();
/* 000229 */ 		self.float_type = float_type;
/* 000230 */ 		self.content_handlers = content_handlers;
/* 000230 */ 	});},
/* 000232 */ 	_fields: tuple (['float_type', 'content_handlers']),
/* 000234 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [float_label_arg, float_caption_arg], environments: [], specials: []}));
/* 000244 */ 		var __iterable0__ = self.content_handlers;
/* 000244 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000245 */ 			(function () {
/* 000245 */ 				var __accu0__ = content_handler;
/* 000245 */ 				return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000251 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000251 */ 	});},
/* 000255 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000261 */ 		node.flm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000262 */ 		node.flm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000264 */ 		var float_content_nodes = [];
/* 000266 */ 		var __iterable0__ = node.nodelist;
/* 000266 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000266 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000267 */ 			if (__t__ ((function () {
/* 000267 */ 				var __accu0__ = n;
/* 000267 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000267 */ 			}) ())) {
/* 000269 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000271 */ 					__setitem__ (node.flm_float_label, 'label_node', n);
/* 000273 */ 					var ref_label_node_args = (function () {
/* 000273 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000273 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000273 */ 					}) ();
/* 000276 */ 					var ref_label_full = (function () {
/* 000276 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000276 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000276 */ 					}) ();
/* 000277 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000278 */ 						var __left0__ = (function () {
/* 000278 */ 							var __accu0__ = ref_label_full;
/* 000278 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000278 */ 						}) ();
/* 000278 */ 						var ref_label_prefix = __left0__ [0];
/* 000278 */ 						var ref_label = __left0__ [1];
/* 000278 */ 					}
/* 000279 */ 					else {
/* 000280 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000280 */ 						var ref_label_prefix = __left0__ [0];
/* 000280 */ 						var ref_label = __left0__ [1];
/* 000280 */ 					}
/* 000282 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000283 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000283 */ 						__except0__.__cause__ = null;
/* 000283 */ 						throw __except0__;
/* 000283 */ 					}
/* 000289 */ 					__setitem__ (node.flm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000290 */ 					__setitem__ (node.flm_float_label, 'ref_label', ref_label);
/* 000292 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000293 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000293 */ 						__except0__.__cause__ = null;
/* 000293 */ 						throw __except0__;
/* 000293 */ 					}
/* 000293 */ 					continue;
/* 000293 */ 				}
/* 000301 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000303 */ 					__setitem__ (node.flm_float_caption, 'caption_node', n);
/* 000305 */ 					var ref_caption_node_args = (function () {
/* 000305 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000305 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000305 */ 					}) ();
/* 000309 */ 					var ref_caption_nodelist = (function () {
/* 000309 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000309 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000309 */ 					}) ();
/* 000310 */ 					__setitem__ (node.flm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000310 */ 					continue;
/* 000310 */ 				}
/* 000310 */ 			}
/* 000314 */ 			(function () {
/* 000314 */ 				var __accu0__ = float_content_nodes;
/* 000314 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000314 */ 			}) ();
/* 000314 */ 		}
/* 000316 */ 		var float_content_nodes = (function () {
/* 000316 */ 			var __accu0__ = node.latex_walker;
/* 000316 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_nodes, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000316 */ 		}) ();
/* 000322 */ 		var errors = [];
/* 000323 */ 		var final_content_nodes = null;
/* 000324 */ 		var __iterable0__ = self.content_handlers;
/* 000324 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 			var content_handler = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 			try {
/* 000326 */ 				var final_content_nodes = (function () {
/* 000326 */ 					var __accu0__ = content_handler;
/* 000326 */ 					return __call__ (__accu0__.float_handle_content_nodes, __accu0__, node, float_content_nodes);
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000326 */ 			catch (__except0__) {
/* 000326 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000326 */ 					var e = __except0__;
/* 000330 */ 					(function () {
/* 000330 */ 						var __accu0__ = errors;
/* 000330 */ 						return __call__ (__accu0__.append, __accu0__, '*** {} error: {}'.format (content_handler.__class__.__name__, __call__ (str, null, e)));
/* 000330 */ 					}) ();
/* 000330 */ 				}
/* 000330 */ 				else {
/* 000330 */ 					throw __except0__;
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000333 */ 		if (__t__ (final_content_nodes === null)) {
/* 000339 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ("Invalid {} contents! The following content handler(s) were unable to parse the float's content [other than possible \\caption and \\label commands]:\n".format (self.float_type), (function () {
/* 000339 */ 				var __accu0__ = '\n';
/* 000339 */ 				return __call__ (__accu0__.join, __accu0__, errors);
/* 000339 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000339 */ 			__except0__.__cause__ = null;
/* 000339 */ 			throw __except0__;
/* 000339 */ 		}
/* 000343 */ 		node.flm_float_content_nodelist = final_content_nodes;
/* 000347 */ 		return node;
/* 000347 */ 	});},
/* 000350 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000352 */ 		var floats_mgr = (function () {
/* 000352 */ 			var __accu0__ = render_context;
/* 000352 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000352 */ 		}) ();
/* 000354 */ 		// pass;
/* 000358 */ 		var ref_label_prefix = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000359 */ 		var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000361 */ 		var numbered = true;
/* 000362 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000364 */ 			var numbered = false;
/* 000364 */ 		}
/* 000366 */ 		var float_instance = (function () {
/* 000366 */ 			var __accu0__ = floats_mgr;
/* 000366 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.flm_float_caption, 'caption_nodelist'), content_nodelist: node.flm_float_content_nodelist}));
/* 000366 */ 		}) ();
/* 000381 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000382 */ 			return (function () {
/* 000382 */ 				var __accu0__ = self;
/* 000382 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000382 */ 			}) ();
/* 000382 */ 		}
/* 000384 */ 		return (function () {
/* 000384 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000384 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)], render_context: render_context}));
/* 000384 */ 		}) ();
/* 000384 */ 	});},
/* 000391 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000393 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000395 */ 		return (function () {
/* 000395 */ 			var __accu0__ = fragment_renderer;
/* 000395 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000395 */ 		}) ();
/* 000395 */ 	});},
/* 000403 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000405 */ 		var recopt_floats = (function () {
/* 000405 */ 			var __accu0__ = recomposer;
/* 000405 */ 			return __call__ (__accu0__.get_options, __accu0__, 'floats');
/* 000405 */ 		}) ();
/* 000406 */ 		var keep_as_is = (function () {
/* 000406 */ 			var __accu0__ = recopt_floats;
/* 000406 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000406 */ 		}) ();
/* 000407 */ 		var captioncmd_for_num_only = (function () {
/* 000407 */ 			var __accu0__ = recopt_floats;
/* 000407 */ 			return __call__ (__accu0__.py_get, __accu0__, 'captioncmd_for_num_only', '\\caption{}');
/* 000407 */ 		}) ();
/* 000409 */ 		if (__t__ (keep_as_is)) {
/* 000410 */ 			return false;
/* 000410 */ 		}
/* 000413 */ 		var has_label = __t__ (__getitem__ (node.flm_float_label, 'ref_label_prefix') !== null) || __getitem__ (node.flm_float_label, 'ref_label') !== null;
/* 000417 */ 		var has_number = has_label;
/* 000418 */ 		var has_caption = __getitem__ (node.flm_float_caption, 'caption_nodelist') !== null;
/* 000420 */ 		var env_name = 'flmFloat';
/* 000421 */ 		var env_args = __add__ (__add__ ('{', __call__ (str, null, node.environmentname)), '}');
/* 000422 */ 		if (__t__ (has_number)) {
/* 000423 */ 			if (__t__ (has_caption)) {
/* 000424 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumCap}');
/* 000424 */ 			}
/* 000425 */ 			else {
/* 000426 */ 				var env_args = __call__ (__iadd__, null, env_args, '{NumOnly}');
/* 000426 */ 			}
/* 000426 */ 		}
/* 000428 */ 		else if (__t__ (has_caption)) {
/* 000429 */ 			var env_args = __call__ (__iadd__, null, env_args, '{CapOnly}');
/* 000429 */ 		}
/* 000430 */ 		else {
/* 000431 */ 			var env_args = __call__ (__iadd__, null, env_args, '{Bare}');
/* 000431 */ 		}
/* 000433 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_args);
/* 000434 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000434 */ 			var __accu0__ = recomposer;
/* 000434 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000434 */ 		}) ());
/* 000438 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000438 */ 			var __accu0__ = recomposer;
/* 000438 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flm_float_content_nodelist);
/* 000438 */ 		}) ());
/* 000440 */ 		if (__t__ (has_caption)) {
/* 000441 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000441 */ 				var __accu0__ = recomposer;
/* 000441 */ 				return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flm_float_caption, 'caption_node'));
/* 000441 */ 			}) ());
/* 000441 */ 		}
/* 000445 */ 		if (__t__ (has_label)) {
/* 000446 */ 			if (__t__ (!__t__ ((has_caption)))) {
/* 000449 */ 				var s = __call__ (__iadd__, null, s, captioncmd_for_num_only);
/* 000449 */ 			}
/* 000450 */ 			var ref_type = __getitem__ (node.flm_float_label, 'ref_label_prefix');
/* 000451 */ 			var ref_label = __getitem__ (node.flm_float_label, 'ref_label');
/* 000452 */ 			var safe_label_info = (function () {
/* 000452 */ 				var __accu0__ = recomposer;
/* 000452 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000452 */ 			}) ();
/* 000455 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000455 */ 		}
/* 000457 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', env_name), '}'));
/* 000459 */ 		return s;
/* 000459 */ 	});}
/* 000459 */ });
/* 000469 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000469 */ 	__module__: __name__,
/* 000477 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000477 */ 		var float_type = null;
/* 000477 */ 		var float_type_info = null;
/* 000477 */ 		var counter_value = null;
/* 000477 */ 		var counter_numprefix = null;
/* 000477 */ 		var formatted_counter_value_flm = null;
/* 000477 */ 		var ref_label_prefix = null;
/* 000477 */ 		var ref_label = null;
/* 000477 */ 		var target_id = null;
/* 000477 */ 		var caption_nodelist = null;
/* 000477 */ 		var content_nodelist = null;
/* 000477 */ 		if (arguments.length) {
/* 000477 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000477 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000477 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000477 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000477 */ 					switch (__attrib0__) {
/* 000477 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 					}
/* 000477 */ 				}
/* 000477 */ 			}
/* 000477 */ 		}
/* 000477 */ 		else {
/* 000477 */ 		}
/* 000510 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000511 */ 		self.float_type = float_type;
/* 000512 */ 		self.float_type_info = float_type_info;
/* 000513 */ 		self.counter_value = counter_value;
/* 000514 */ 		self.counter_numprefix = counter_numprefix;
/* 000515 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000516 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000517 */ 		self.ref_label = ref_label;
/* 000518 */ 		self.target_id = target_id;
/* 000519 */ 		self.caption_nodelist = caption_nodelist;
/* 000520 */ 		self.content_nodelist = content_nodelist;
/* 000521 */ 		self._fields = tuple (['float_type', 'float_type_info', 'counter_value', 'counter_numprefix', 'formatted_counter_value_flm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000521 */ 	});},
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
/* 000533 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000533 */ 						}) ();
/* 000533 */ 					}
/* 000533 */ 					return __accu2__;
/* 000533 */ 				}) ());
/* 000533 */ 			}) ());
/* 000533 */ 		}) ();
/* 000533 */ 	});}
/* 000533 */ });
/* 000539 */ export var _float_default_counter_formatter_spec = function (float_type) {
/* 000539 */ 	if (arguments.length) {
/* 000539 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000539 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000539 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000539 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000539 */ 				switch (__attrib0__) {
/* 000539 */ 					case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 				}
/* 000539 */ 			}
/* 000539 */ 		}
/* 000539 */ 	}
/* 000539 */ 	else {
/* 000539 */ 	}
/* 000540 */ 	if (__t__ (__eq__ (float_type, 'figure'))) {
/* 000541 */ 		var prefix_display = dict ({'singular': 'Fig.~', 'plural': 'Figs.~', 'capital': dict ({'singular': 'Figure~', 'plural': 'Figures~'})});
/* 000541 */ 	}
/* 000549 */ 	else if (__t__ (__eq__ (float_type, 'table'))) {
/* 000550 */ 		var prefix_display = dict ({'singular': 'Tab.~', 'plural': 'Tabs.~', 'capital': dict ({'singular': 'Table~', 'plural': 'Tables~'})});
/* 000550 */ 	}
/* 000556 */ 	else {
/* 000559 */ 		var float_type_cap = (function () {
/* 000559 */ 			var __accu0__ = float_type;
/* 000559 */ 			return __call__ (__accu0__.capitalize, __accu0__);
/* 000559 */ 		}) ();
/* 000560 */ 		var prefix_display = dict ({'singular': __add__ (float_type_cap, '~'), 'plural': __add__ (float_type_cap, 's~')});
/* 000560 */ 	}
/* 000564 */ 	return dict ({'format_num': dict ({'template': '${Roman}'}), 'prefix_display': prefix_display, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000564 */ };
/* 000573 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000573 */ 	__module__: __name__,
/* 000574 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter, content_handlers) {
/* 000574 */ 		if (typeof float_caption_name == 'undefined' || (float_caption_name != null && float_caption_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000574 */ 			var float_caption_name = null;
/* 000574 */ 		};
/* 000574 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000574 */ 			var counter_formatter = null;
/* 000574 */ 		};
/* 000574 */ 		if (typeof content_handlers == 'undefined' || (content_handlers != null && content_handlers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000574 */ 			var content_handlers = null;
/* 000574 */ 		};
/* 000574 */ 		if (arguments.length) {
/* 000574 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000574 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000574 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000574 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000574 */ 					switch (__attrib0__) {
/* 000574 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'content_handlers': var content_handlers = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 					}
/* 000574 */ 				}
/* 000574 */ 			}
/* 000574 */ 		}
/* 000574 */ 		else {
/* 000574 */ 		}
/* 000593 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000595 */ 		self.float_type = float_type;
/* 000597 */ 		if (__t__ (float_caption_name === null)) {
/* 000598 */ 			var float_caption_name = float_type;
/* 000598 */ 		}
/* 000600 */ 		self.float_caption_name = float_caption_name;
/* 000604 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, __call__ (_float_default_counter_formatter_spec, null, float_type), __kwargtrans__ ({counter_formatter_id: float_type}));
/* 000608 */ 		self.content_handlers = content_handlers;
/* 000610 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter', 'content_handlers']);
/* 000610 */ 	});},
/* 000613 */ 	get asdict () {return __get__ (this, function (self) {
/* 000613 */ 		if (arguments.length) {
/* 000613 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000613 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000613 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000613 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000613 */ 					switch (__attrib0__) {
/* 000613 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 					}
/* 000613 */ 				}
/* 000613 */ 			}
/* 000613 */ 		}
/* 000613 */ 		else {
/* 000613 */ 		}
/* 000614 */ 		return (function () {
/* 000614 */ 			var __accu0__ = [];
/* 000614 */ 			var __iterable0__ = self._fields;
/* 000614 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000614 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000614 */ 				(function () {
/* 000614 */ 					var __accu1__ = __accu0__;
/* 000614 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000614 */ 				}) ();
/* 000614 */ 			}
/* 000614 */ 			return dict (__accu0__);
/* 000614 */ 		}) ();
/* 000614 */ 	});},
/* 000616 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000617 */ 		return (function () {
/* 000617 */ 			var __accu0__ = '{}({})';
/* 000619 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000619 */ 				var __accu1__ = ', ';
/* 000619 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000619 */ 					var __accu2__ = [];
/* 000619 */ 					var __iterable0__ = self._fields;
/* 000619 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000619 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000619 */ 						(function () {
/* 000619 */ 							var __accu3__ = __accu2__;
/* 000619 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000619 */ 						}) ();
/* 000619 */ 					}
/* 000619 */ 					return __accu2__;
/* 000619 */ 				}) ());
/* 000619 */ 			}) ());
/* 000619 */ 		}) ();
/* 000619 */ 	});}
/* 000619 */ });
/* 000631 */ export var _default_float_types = [__call__ (FloatType, null, 'figure', 'Figure', dict ({'format_num': 'arabic'}), ['includegraphics']), __call__ (FloatType, null, 'table', 'Table', dict ({'format_num': 'arabic'}), ['cells', 'includegraphics'])];
/* 000652 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000652 */ 	__module__: __name__,
/* 000660 */ 	feature_name: 'floats',
/* 000661 */ 	feature_title: 'Floating elements (figures & tables)',
/* 000663 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000665 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000665 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000665 */ 			var float_types = null;
/* 000665 */ 		};
/* 000665 */ 		if (arguments.length) {
/* 000665 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000665 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000665 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000665 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000665 */ 					switch (__attrib0__) {
/* 000665 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000665 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000665 */ 					}
/* 000665 */ 				}
/* 000665 */ 			}
/* 000665 */ 		}
/* 000665 */ 		else {
/* 000665 */ 		}
/* 000666 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000667 */ 		// pass;
/* 000670 */ 		if (__t__ (float_types === null)) {
/* 000671 */ 			var float_types = _default_float_types;
/* 000671 */ 		}
/* 000672 */ 		var _mkfloattypeobj = function (x) {
/* 000672 */ 			if (arguments.length) {
/* 000672 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000672 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000672 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000672 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000672 */ 						switch (__attrib0__) {
/* 000672 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						}
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000672 */ 			else {
/* 000672 */ 			}
/* 000673 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000674 */ 				var ft = x;
/* 000674 */ 			}
/* 000675 */ 			else {
/* 000676 */ 				var ft = __call__ (FloatType, null, __kwargtrans__ (x));
/* 000676 */ 			}
/* 000677 */ 			// pass;
/* 000680 */ 			return ft;
/* 000680 */ 		};
/* 000681 */ 		self.float_types_list = (function () {
/* 000681 */ 			var __accu0__ = [];
/* 000681 */ 			var __iterable0__ = float_types;
/* 000681 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000681 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000681 */ 				(function () {
/* 000681 */ 					var __accu1__ = __accu0__;
/* 000681 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000681 */ 				}) ();
/* 000681 */ 			}
/* 000681 */ 			return __accu0__;
/* 000681 */ 		}) ();
/* 000682 */ 		self.float_types = (function () {
/* 000682 */ 			var __accu0__ = [];
/* 000682 */ 			var __iterable0__ = self.float_types_list;
/* 000682 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000684 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000684 */ 				(function () {
/* 000684 */ 					var __accu1__ = __accu0__;
/* 000684 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000684 */ 				}) ();
/* 000684 */ 			}
/* 000684 */ 			return dict (__accu0__);
/* 000684 */ 		}) ();
/* 000686 */ 		// pass;
/* 000686 */ 	});},
/* 000690 */ 	get make_float_environment_spec () {return __get__ (this, function (self, float_type) {
/* 000690 */ 		if (arguments.length) {
/* 000690 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000690 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000690 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000690 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000690 */ 					switch (__attrib0__) {
/* 000690 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 					}
/* 000690 */ 				}
/* 000690 */ 			}
/* 000690 */ 		}
/* 000690 */ 		else {
/* 000690 */ 		}
/* 000691 */ 		return __call__ (FloatEnvironment, null, float_type, __kwargtrans__ ({content_handlers: __getitem__ (self.float_types, float_type).content_handlers}));
/* 000691 */ 	});},
/* 000696 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000696 */ 		if (arguments.length) {
/* 000696 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000696 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000696 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000696 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000696 */ 					switch (__attrib0__) {
/* 000696 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 					}
/* 000696 */ 				}
/* 000696 */ 			}
/* 000696 */ 		}
/* 000696 */ 		else {
/* 000696 */ 		}
/* 000697 */ 		var environments = [];
/* 000698 */ 		var __iterable0__ = (function () {
/* 000698 */ 			var __accu0__ = self.float_types;
/* 000698 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000698 */ 		}) ();
/* 000698 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000698 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000698 */ 			var float_type = __left0__ [0];
/* 000698 */ 			var ftinfo = __left0__ [1];
/* 000699 */ 			(function () {
/* 000699 */ 				var __accu0__ = environments;
/* 000700 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000700 */ 					var __accu1__ = self;
/* 000700 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000700 */ 				}) ());
/* 000700 */ 			}) ();
/* 000700 */ 		}
/* 000702 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000704 */ 	});},
/* 000704 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000704 */ 		__module__: __name__,
/* 000706 */ 		get initialize () {return __get__ (this, function (self) {
/* 000706 */ 			if (arguments.length) {
/* 000706 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000706 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000706 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000706 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000706 */ 						switch (__attrib0__) {
/* 000706 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						}
/* 000706 */ 					}
/* 000706 */ 				}
/* 000706 */ 			}
/* 000706 */ 			else {
/* 000706 */ 			}
/* 000707 */ 			self.floats = (function () {
/* 000707 */ 				var __accu0__ = [];
/* 000709 */ 				var __iterable0__ = (function () {
/* 000709 */ 					var __accu1__ = self.feature.float_types;
/* 000709 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000709 */ 				}) ();
/* 000709 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000709 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000709 */ 					var float_type = __left0__ [0];
/* 000709 */ 					var ftinfo = __left0__ [1];
/* 000709 */ 					(function () {
/* 000709 */ 						var __accu1__ = __accu0__;
/* 000709 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000709 */ 					}) ();
/* 000709 */ 				}
/* 000709 */ 				return dict (__accu0__);
/* 000709 */ 			}) ();
/* 000711 */ 			var refs_mgr = null;
/* 000712 */ 			if (__t__ ((function () {
/* 000712 */ 				var __accu0__ = self.render_context;
/* 000712 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000712 */ 			}) ())) {
/* 000713 */ 				var refs_mgr = (function () {
/* 000713 */ 					var __accu0__ = self.render_context;
/* 000713 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000713 */ 				}) ();
/* 000713 */ 			}
/* 000715 */ 			self.float_counter_ifaces = dict ({});
/* 000716 */ 			var __iterable0__ = (function () {
/* 000716 */ 				var __accu0__ = self.feature.float_types;
/* 000716 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000716 */ 			}) ();
/* 000716 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000716 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000716 */ 				var float_type = __left0__ [0];
/* 000716 */ 				var ftinfo = __left0__ [1];
/* 000717 */ 				__setitem__ (self.float_counter_ifaces, float_type, (function () {
/* 000717 */ 					var __accu0__ = numbering;
/* 000717 */ 					return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: ftinfo.counter_formatter.counter_formatter_id, counter_formatter: ftinfo.counter_formatter}));
/* 000717 */ 				}) ());
/* 000722 */ 				if (__t__ (refs_mgr !== null)) {
/* 000723 */ 					(function () {
/* 000723 */ 						var __accu0__ = refs_mgr;
/* 000723 */ 						return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: __getitem__ (self.float_counter_ifaces, float_type).formatter}));
/* 000723 */ 					}) ();
/* 000723 */ 				}
/* 000723 */ 			}
/* 000727 */ 			self.float_instances = dict ({});
/* 000727 */ 		});},
/* 000730 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000730 */ 			var numbered = true;
/* 000730 */ 			var ref_label_prefix = null;
/* 000730 */ 			var ref_label = null;
/* 000730 */ 			var caption_nodelist = null;
/* 000730 */ 			var content_nodelist = null;
/* 000730 */ 			if (arguments.length) {
/* 000730 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000730 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000730 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000730 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000730 */ 						switch (__attrib0__) {
/* 000730 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000730 */ 						}
/* 000730 */ 					}
/* 000730 */ 				}
/* 000730 */ 			}
/* 000730 */ 			else {
/* 000730 */ 			}
/* 000742 */ 			var node_id = (function () {
/* 000742 */ 				var __accu0__ = self;
/* 000742 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000742 */ 			}) ();
/* 000744 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000746 */ 				return __getitem__ (self.float_instances, node_id);
/* 000746 */ 			}
/* 000748 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000750 */ 			// pass;
/* 000754 */ 			if (__t__ (numbered)) {
/* 000756 */ 				var value_info = (function () {
/* 000756 */ 					var __accu0__ = __getitem__ (self.float_counter_ifaces, float_type);
/* 000756 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000756 */ 				}) ();
/* 000757 */ 				var value = __getitem__ (value_info, 'value');
/* 000758 */ 				var numprefix = __getitem__ (value_info, 'numprefix');
/* 000760 */ 				var fmtvalue_flm_text = __getitem__ (value_info, 'formatted_value');
/* 000761 */ 				var fmtvalue_flm = (function () {
/* 000761 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000764 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, (function () {
/* 000764 */ 						var __accu1__ = value;
/* 000764 */ 						return __call__ (__accu1__.targetidstr, __accu1__, __kwargtrans__ ({numprefix: numprefix}));
/* 000764 */ 					}) ())}));
/* 000764 */ 				}) ();
/* 000767 */ 				var fmtcounter = __getitem__ (self.float_counter_ifaces, float_type).formatter;
/* 000768 */ 				var fmtcounter_id = fmtcounter.counter_formatter_id;
/* 000768 */ 			}
/* 000769 */ 			else {
/* 000772 */ 				var value = null;
/* 000773 */ 				var numprefix = null;
/* 000774 */ 				var fmtvalue_flm = null;
/* 000775 */ 				var fmtcounter_id = null;
/* 000775 */ 			}
/* 000777 */ 			var target_id = null;
/* 000778 */ 			if (__t__ (value !== null)) {
/* 000779 */ 				var target_id = '{}-{}'.format (float_type, (function () {
/* 000779 */ 					var __accu0__ = value;
/* 000779 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: numprefix}));
/* 000779 */ 				}) ());
/* 000779 */ 			}
/* 000781 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, counter_value: value, counter_numprefix: numprefix, formatted_counter_value_flm: fmtvalue_flm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000796 */ 			(function () {
/* 000796 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000796 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000796 */ 			}) ();
/* 000799 */ 			if (__t__ (__t__ (value !== null) && (function () {
/* 000799 */ 				var __accu0__ = self.render_context;
/* 000799 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000799 */ 			}) ())) {
/* 000803 */ 				var refs_mgr = (function () {
/* 000803 */ 					var __accu0__ = self.render_context;
/* 000803 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000803 */ 				}) ();
/* 000805 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000805 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000809 */ 					var formatted_ref_flm_text = (function () {
/* 000809 */ 						var __accu0__ = self;
/* 000809 */ 						return __call__ (__accu0__.get_formatted_ref_flm_text, __accu0__, float_instance);
/* 000809 */ 					}) ();
/* 000811 */ 					(function () {
/* 000811 */ 						var __accu0__ = refs_mgr;
/* 000811 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (target_id), counter_value: value, counter_numprefix: numprefix, counter_formatter_id: fmtcounter_id}));
/* 000811 */ 					}) ();
/* 000811 */ 				}
/* 000811 */ 			}
/* 000822 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000823 */ 			return float_instance;
/* 000823 */ 		});},
/* 000825 */ 		get get_formatted_ref_flm_text () {return __get__ (this, function (self, float_instance) {
/* 000825 */ 			if (arguments.length) {
/* 000825 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 						switch (__attrib0__) {
/* 000825 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						}
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 			}
/* 000825 */ 			else {
/* 000825 */ 			}
/* 000826 */ 			return (function () {
/* 000826 */ 				var __accu0__ = __getitem__ (self.float_counter_ifaces, float_instance.float_type).formatter;
/* 000826 */ 				return __call__ (__accu0__.format_flm, __accu0__, float_instance.counter_value, __kwargtrans__ ({numprefix: float_instance.counter_numprefix, with_prefix: true}));
/* 000826 */ 			}) ();
/* 000826 */ 		});}
/* 000826 */ 	}),
/* 000839 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000839 */ 		if (arguments.length) {
/* 000839 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000839 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000839 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000839 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000839 */ 					switch (__attrib0__) {
/* 000839 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 					}
/* 000839 */ 				}
/* 000839 */ 			}
/* 000839 */ 		}
/* 000839 */ 		else {
/* 000839 */ 		}
/* 000840 */ 		return 'Floating items, such as figures and tables, along with\n        captions, are supported by the environments described here.';
/* 000840 */ 	});},
/* 000843 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000843 */ 		if (arguments.length) {
/* 000843 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000843 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000843 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000843 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000843 */ 					switch (__attrib0__) {
/* 000843 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000843 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000843 */ 					}
/* 000843 */ 				}
/* 000843 */ 			}
/* 000843 */ 		}
/* 000843 */ 		else {
/* 000843 */ 		}
/* 000850 */ 		var defs = dict ({'macros': [float_label_arg, float_caption_arg], 'environments': [], 'specials': []});
/* 000861 */ 		var ch_defs = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000865 */ 		var ch_defs_fts = dict ({'macros': dict ({}), 'environments': dict ({}), 'specials': dict ({})});
/* 000870 */ 		var __iterable0__ = __getitem__ (base_feature_definitions, 'environments');
/* 000870 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000870 */ 			var ft_env = __getitem__ (__iterable0__, __index0__);
/* 000871 */ 			var ftname = ft_env.environmentname;
/* 000872 */ 			var ch_list = ft_env.content_handlers;
/* 000873 */ 			var __iterable1__ = ch_list;
/* 000873 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000873 */ 				var ch = __getitem__ (__iterable1__, __index1__);
/* 000874 */ 				var d = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000875 */ 				(function () {
/* 000875 */ 					var __accu0__ = ch;
/* 000875 */ 					return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, d);
/* 000875 */ 				}) ();
/* 000877 */ 				var __iterable2__ = tuple (['macros', 'environments', 'specials']);
/* 000877 */ 				for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000877 */ 					var which = __getitem__ (__iterable2__, __index2__);
/* 000878 */ 					if (__t__ (__call__ (len, null, __getitem__ (d, which)))) {
/* 000879 */ 						var __iterable3__ = __getitem__ (d, which);
/* 000879 */ 						for (var __index3__ = 0; __index3__ < len (__iterable3__); __index3__++) {
/* 000879 */ 							var m = __getitem__ (__iterable3__, __index3__);
/* 000880 */ 							var __left0__ = __call__ (_whatname, null, m, which);
/* 000880 */ 							var whatname = __left0__ [0];
/* 000880 */ 							var _ = __left0__ [1];
/* 000882 */ 							if (__t__ (!__in__ (whatname, __getitem__ (ch_defs_fts, which)))) {
/* 000883 */ 								(function () {
/* 000883 */ 									var __accu0__ = __getitem__ (ch_defs, which);
/* 000883 */ 									return __call__ (__accu0__.append, __accu0__, m);
/* 000883 */ 								}) ();
/* 000884 */ 								__setitem__ (__getitem__ (ch_defs_fts, which), whatname, [ftname]);
/* 000884 */ 							}
/* 000885 */ 							else {
/* 000886 */ 								(function () {
/* 000886 */ 									var __accu0__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000886 */ 									return __call__ (__accu0__.append, __accu0__, ftname);
/* 000886 */ 								}) ();
/* 000886 */ 							}
/* 000886 */ 						}
/* 000886 */ 					}
/* 000886 */ 				}
/* 000886 */ 			}
/* 000886 */ 		}
/* 000889 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000889 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000889 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000890 */ 			var __iterable1__ = __getitem__ (ch_defs, which);
/* 000890 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000890 */ 				var mdef = __getitem__ (__iterable1__, __index1__);
/* 000891 */ 				var __left0__ = __call__ (_whatname, null, mdef, which);
/* 000891 */ 				var whatname = __left0__ [0];
/* 000891 */ 				var whattext = __left0__ [1];
/* 000896 */ 				__call__ (_extend_mdef_flm_doc, null, mdef, __add__ (__add__ (__add__ (__add__ ('The ', whattext), ' is made available in the '), 'following float environment(s): '), (function () {
/* 000896 */ 					var __accu0__ = ', ';
/* 000896 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000896 */ 						var __accu1__ = [];
/* 000896 */ 						var __iterable2__ = __getitem__ (__getitem__ (ch_defs_fts, which), whatname);
/* 000896 */ 						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000897 */ 							var ftname = __getitem__ (__iterable2__, __index2__);
/* 000897 */ 							(function () {
/* 000897 */ 								var __accu2__ = __accu1__;
/* 000897 */ 								return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘\\verbcode+', ftname), '+’'));
/* 000897 */ 							}) ();
/* 000897 */ 						}
/* 000897 */ 						return __accu1__;
/* 000897 */ 					}) ());
/* 000897 */ 				}) ()));
/* 000899 */ 				(function () {
/* 000899 */ 					var __accu0__ = __getitem__ (defs, which);
/* 000899 */ 					return __call__ (__accu0__.append, __accu0__, mdef);
/* 000899 */ 				}) ();
/* 000899 */ 			}
/* 000899 */ 		}
/* 000901 */ 		return defs;
/* 000901 */ 	});}
/* 000901 */ });
/* 000905 */ export var _whatname = function (m, which) {
/* 000905 */ 	if (arguments.length) {
/* 000905 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000905 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000905 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000905 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000905 */ 				switch (__attrib0__) {
/* 000905 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000905 */ 					case 'which': var which = __allkwargs0__ [__attrib0__]; break;
/* 000905 */ 				}
/* 000905 */ 			}
/* 000905 */ 		}
/* 000905 */ 	}
/* 000905 */ 	else {
/* 000905 */ 	}
/* 000906 */ 	if (__t__ (__eq__ (which, 'macros'))) {
/* 000907 */ 		var whatname = m.macroname;
/* 000908 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.macroname)), ' macro');
/* 000908 */ 	}
/* 000909 */ 	else if (__t__ (__eq__ (which, 'environments'))) {
/* 000910 */ 		var whatname = m.environmentname;
/* 000911 */ 		var whattext = __add__ (__add__ ('\\verbcode|{', m.environmentname), '}| environment');
/* 000911 */ 	}
/* 000912 */ 	else if (__t__ (__eq__ (which, 'specials'))) {
/* 000913 */ 		var whatname = m.specials_chars;
/* 000914 */ 		var whattext = __add__ (__add__ ('\\verbcode', __call__ (make_verb_argument, null, m.specials_chars)), ' specials');
/* 000914 */ 	}
/* 000915 */ 	else {
/* 000916 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('invalid which = ', __call__ (repr, null, which)));
/* 000916 */ 		__except0__.__cause__ = null;
/* 000916 */ 		throw __except0__;
/* 000916 */ 	}
/* 000917 */ 	return tuple ([whatname, whattext]);
/* 000917 */ };
/* 000919 */ export var _extend_mdef_flm_doc = function (mdef, add_flm_doc) {
/* 000919 */ 	if (arguments.length) {
/* 000919 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000919 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000919 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000919 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000919 */ 				switch (__attrib0__) {
/* 000919 */ 					case 'mdef': var mdef = __allkwargs0__ [__attrib0__]; break;
/* 000919 */ 					case 'add_flm_doc': var add_flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000919 */ 				}
/* 000919 */ 			}
/* 000919 */ 		}
/* 000919 */ 	}
/* 000919 */ 	else {
/* 000919 */ 	}
/* 000920 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, mdef, 'get_flm_doc'))))) {
/* 000921 */ 		mdef.get_flm_doc = (function __lambda__ () {
/* 000921 */ 			if (arguments.length) {
/* 000921 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000921 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000921 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000921 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000921 */ 					}
/* 000921 */ 				}
/* 000921 */ 			}
/* 000921 */ 			else {
/* 000921 */ 			}
/* 000921 */ 			return add_flm_doc;
/* 000921 */ 		});
/* 000922 */ 		return mdef;
/* 000922 */ 	}
/* 000923 */ 	var _get_flm_doc_raw = mdef.get_flm_doc;
/* 000924 */ 	mdef.get_flm_doc = (function __lambda__ () {
/* 000924 */ 		if (arguments.length) {
/* 000924 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000924 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000924 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000924 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000924 */ 				}
/* 000924 */ 			}
/* 000924 */ 		}
/* 000924 */ 		else {
/* 000924 */ 		}
/* 000924 */ 		return (function () {
/* 000925 */ 			var __accu0__ = __add__ (__add__ (__call__ (_get_flm_doc_raw, null), '\n\n'), add_flm_doc);
/* 000927 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000927 */ 		}) ();
/* 000927 */ 	});
/* 000929 */ 	return mdef;
/* 000929 */ };
/* 000936 */ export var FeatureClass = FeatureFloats;
/* 000012 */ 
//# sourceMappingURL=flm.feature.floats.map