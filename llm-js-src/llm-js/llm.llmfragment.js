/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:38
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {LLMStandaloneModeRenderContext} from './llm.llmrendercontext.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {latexnodes_parsers, LLMStandaloneModeRenderContext, latexnodes, latexnodes_nodes};
/* 000001 */ var __name__ = 'llm.llmfragment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000020 */ export var _llmfragment_attribute_fields = tuple (['is_block_level', 'resource_info', 'standalone_mode', 'silent', 'what', 'parsing_mode']);
/* 000030 */ export var LLMFragment =  __class__ ('LLMFragment', [object], {
/* 000030 */ 	__module__: __name__,
/* 000050 */ 	get __init__ () {return __get__ (this, function (self, llm_text, environment) {
/* 000050 */ 		var is_block_level = null;
/* 000050 */ 		var resource_info = null;
/* 000050 */ 		var standalone_mode = false;
/* 000050 */ 		var tolerant_parsing = false;
/* 000050 */ 		var what = '(unknown)';
/* 000050 */ 		var silent = false;
/* 000050 */ 		var parsing_mode = null;
/* 000050 */ 		var input_lineno_colno_offsets = null;
/* 000050 */ 		var _llm_text_if_loading_nodes = null;
/* 000050 */ 		if (arguments.length) {
/* 000050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 					switch (__attrib0__) {
/* 000050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case '_llm_text_if_loading_nodes': var _llm_text_if_loading_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000066 */ 		self.llm_text = llm_text;
/* 000067 */ 		self.environment = environment;
/* 000069 */ 		self.is_block_level = is_block_level;
/* 000070 */ 		self.resource_info = resource_info;
/* 000071 */ 		self.standalone_mode = standalone_mode;
/* 000072 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000073 */ 		self.what = what;
/* 000074 */ 		self.silent = silent;
/* 000075 */ 		self.parsing_mode = parsing_mode;
/* 000077 */ 		if (__t__ (__call__ (isinstance, null, llm_text, latexnodes_nodes.LatexNodeList))) {
/* 000080 */ 			self.nodes = self.llm_text;
/* 000081 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000082 */ 			if (__t__ (_llm_text_if_loading_nodes)) {
/* 000083 */ 				self.llm_text = _llm_text_if_loading_nodes;
/* 000083 */ 			}
/* 000084 */ 			else {
/* 000085 */ 				self.llm_text = (function () {
/* 000085 */ 					var __accu0__ = self.nodes;
/* 000085 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000085 */ 				}) ();
/* 000085 */ 			}
/* 000086 */ 			return ;
/* 000086 */ 		}
/* 000088 */ 		try {
/* 000090 */ 			var __left0__ = (function () {
/* 000090 */ 				var __accu0__ = LLMFragment;
/* 000090 */ 				return __call__ (__accu0__.parse, __accu0__, self.llm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000090 */ 			}) ();
/* 000090 */ 			self.latex_walker = __left0__ [0];
/* 000090 */ 			self.nodes = __left0__ [1];
/* 000090 */ 		}
/* 000090 */ 		catch (__except0__) {
/* 000090 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerParseError)) {
/* 000090 */ 				var e = __except0__;
/* 000102 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000103 */ 					var error_message = (function () {
/* 000103 */ 						var __accu0__ = self.environment;
/* 000103 */ 						return __call__ (__accu0__.get_parse_error_message, __accu0__, e);
/* 000103 */ 					}) ();
/* 000104 */ 					(function () {
/* 000104 */ 						var __accu0__ = logger;
/* 000104 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.llm_text));
/* 000104 */ 					}) ();
/* 000104 */ 				}
/* 000108 */ 				__except0__.__cause__ = null;
/* 000108 */ 				throw __except0__;
/* 000108 */ 			}
/* 000108 */ 			else if (isinstance (__except0__, Exception)) {
/* 000108 */ 				var e = __except0__;
/* 000110 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000111 */ 					(function () {
/* 000111 */ 						var __accu0__ = logger;
/* 000111 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.llm_text));
/* 000111 */ 					}) ();
/* 000111 */ 				}
/* 000113 */ 				__except0__.__cause__ = null;
/* 000113 */ 				throw __except0__;
/* 000113 */ 			}
/* 000113 */ 			else {
/* 000113 */ 				throw __except0__;
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 	});},
/* 000116 */ 	_attribute_fields: _llmfragment_attribute_fields,
/* 000118 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _llmfragment_attribute_fields))),
/* 000122 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000122 */ 		var kwargs = dict ();
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 				delete kwargs.__kwargtrans__;
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		var d = (function () {
/* 000123 */ 			var __accu0__ = [];
/* 000123 */ 			var __iterable0__ = self._attribute_fields;
/* 000123 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 				(function () {
/* 000125 */ 					var __accu1__ = __accu0__;
/* 000124 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000124 */ 			return dict (__accu0__);
/* 000124 */ 		}) ();
/* 000135 */ 		(function () {
/* 000135 */ 			var __accu0__ = d;
/* 000135 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000135 */ 		}) ();
/* 000136 */ 		return d;
/* 000136 */ 	});},
/* 000139 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000139 */ 		var kwargs = dict ();
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 				delete kwargs.__kwargtrans__;
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000140 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000145 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000147 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the LLMFragment constructor)');
/* 000147 */ 			__except0__.__cause__ = null;
/* 000147 */ 			throw __except0__;
/* 000147 */ 		}
/* 000152 */ 		var render_context = __call__ (LLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = self;
/* 000153 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000153 */ 		}) ();
/* 000153 */ 	});},
/* 000156 */ 	get parse () {return __getcm__ (this, function (cls, llm_text, environment) {
/* 000156 */ 		var standalone_mode = false;
/* 000156 */ 		var tolerant_parsing = null;
/* 000156 */ 		var is_block_level = null;
/* 000156 */ 		var parsing_mode = null;
/* 000156 */ 		var resource_info = null;
/* 000156 */ 		var what = null;
/* 000156 */ 		var input_lineno_colno_offsets = null;
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000163 */ 		// pass;
/* 000167 */ 		var latex_walker = (function () {
/* 000167 */ 			var __accu0__ = environment;
/* 000167 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, llm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000167 */ 		}) ();
/* 000178 */ 		var __left0__ = (function () {
/* 000178 */ 			var __accu0__ = latex_walker;
/* 000179 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000179 */ 				var __accu1__ = latexnodes_parsers;
/* 000179 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000179 */ 			}) ());
/* 000179 */ 		}) ();
/* 000179 */ 		var nodes = __left0__ [0];
/* 000179 */ 		var _ = __left0__ [1];
/* 000182 */ 		return tuple ([latex_walker, nodes]);
/* 000182 */ 	});},
/* 000185 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		(function () {
/* 000186 */ 			var __accu0__ = node_visitor;
/* 000186 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000186 */ 		}) ();
/* 000186 */ 	});},
/* 000189 */ 	get is_empty () {return __get__ (this, function (self) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000190 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000190 */ 			var __accu0__ = self.llm_text;
/* 000190 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000190 */ 		}) ()), 0);
/* 000190 */ 	});},
/* 000192 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000193 */ 		return !__t__ (((function () {
/* 000193 */ 			var __accu0__ = self;
/* 000193 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000193 */ 		}) ()));
/* 000193 */ 	});},
/* 000195 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000196 */ 		var thellmtext = self.llm_text;
/* 000197 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000198 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000198 */ 		}
/* 000199 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000199 */ 	});},
/* 000202 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000203 */ 		var new_fragment = (function () {
/* 000203 */ 			var __accu0__ = self.environment;
/* 000204 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000204 */ 				var __accu1__ = self.llm_text;
/* 000204 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000205 */ 			}) (), __kwargtrans__ ((function () {
/* 000205 */ 				var __accu1__ = self;
/* 000205 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000205 */ 			}) ()));
/* 000205 */ 		}) ();
/* 000207 */ 		return new_fragment;
/* 000207 */ 	});},
/* 000209 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000214 */ 		var nodelists_paragraphs = (function () {
/* 000214 */ 			var __accu0__ = self.nodes;
/* 000214 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000214 */ 				if (arguments.length) {
/* 000214 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 							switch (__attrib0__) {
/* 000214 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							}
/* 000214 */ 						}
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 				else {
/* 000214 */ 				}
/* 000215 */ 				return __t__ ((function () {
/* 000215 */ 					var __accu1__ = n;
/* 000215 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000215 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000215 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000215 */ 		}) ();
/* 000220 */ 		var nodelists_paragraphs = (function () {
/* 000220 */ 			var __accu0__ = [];
/* 000220 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000220 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000222 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000223 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000223 */ 					(function () {
/* 000223 */ 						var __accu1__ = __accu0__;
/* 000223 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000223 */ 					}) ();
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 			return __accu0__;
/* 000223 */ 		}) ();
/* 000226 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000227 */ 			return self;
/* 000227 */ 		}
/* 000229 */ 		// pass;
/* 000233 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000235 */ 		// pass;
/* 000238 */ 		return (function () {
/* 000238 */ 			var __accu0__ = self.environment;
/* 000240 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000240 */ 				var __accu1__ = self;
/* 000240 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000240 */ 			}) ())));
/* 000240 */ 		}) ();
/* 000240 */ 	});},
/* 000243 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000243 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000243 */ 			var min_chars = null;
/* 000243 */ 		};
/* 000243 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000243 */ 			var truncation_marker = ' …';
/* 000243 */ 		};
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000245 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000248 */ 		var newnodes = (function () {
/* 000248 */ 			var __accu0__ = trunc;
/* 000248 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000248 */ 		}) ();
/* 000250 */ 		return (function () {
/* 000250 */ 			var __accu0__ = self.environment;
/* 000252 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000252 */ 				var __accu1__ = self;
/* 000252 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000252 */ 			}) ())));
/* 000252 */ 		}) ();
/* 000252 */ 	});}
/* 000252 */ });
/* 000262 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000262 */ 	__module__: __name__,
/* 000263 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000263 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000263 */ 			var min_chars = null;
/* 000263 */ 		};
/* 000263 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000263 */ 			var truncation_marker = null;
/* 000263 */ 		};
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000265 */ 		self.chars = chars;
/* 000266 */ 		self.min_chars = min_chars;
/* 000267 */ 		self.truncation_marker = truncation_marker;
/* 000269 */ 		self.count = 0;
/* 000269 */ 	});},
/* 000271 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		self.count = 0;
/* 000273 */ 		var newnodes = (function () {
/* 000273 */ 			var __accu0__ = self;
/* 000273 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000273 */ 		}) ();
/* 000274 */ 		if (__t__ (newnodes === null)) {
/* 000275 */ 			return nodes;
/* 000275 */ 		}
/* 000276 */ 		return newnodes;
/* 000276 */ 	});},
/* 000278 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000279 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000279 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000279 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000279 */ 			var j = __left0__ [0];
/* 000279 */ 			var node = __left0__ [1];
/* 000280 */ 			var newnode = (function () {
/* 000280 */ 				var __accu0__ = self;
/* 000280 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000280 */ 			}) ();
/* 000281 */ 			if (__t__ (newnode !== null)) {
/* 000282 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000283 */ 				if (__t__ (newnode !== true)) {
/* 000284 */ 					(function () {
/* 000284 */ 						var __accu0__ = newnodes;
/* 000284 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000284 */ 					}) ();
/* 000284 */ 				}
/* 000285 */ 				return (function () {
/* 000285 */ 					var __accu0__ = nodes.latex_walker;
/* 000285 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000285 */ 				}) ();
/* 000285 */ 			}
/* 000285 */ 		}
/* 000290 */ 		return null;
/* 000290 */ 	});},
/* 000292 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000293 */ 		if (__t__ ((function () {
/* 000293 */ 			var __accu0__ = node;
/* 000293 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000293 */ 		}) ())) {
/* 000294 */ 			return (function () {
/* 000294 */ 				var __accu0__ = self;
/* 000294 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000294 */ 			}) ();
/* 000294 */ 		}
/* 000296 */ 		if (__t__ ((function () {
/* 000296 */ 			var __accu0__ = node;
/* 000296 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000296 */ 		}) ())) {
/* 000297 */ 			return (function () {
/* 000297 */ 				var __accu0__ = self;
/* 000297 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000297 */ 			}) ();
/* 000297 */ 		}
/* 000299 */ 		if (__t__ ((function () {
/* 000299 */ 			var __accu0__ = node;
/* 000299 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000299 */ 		}) ())) {
/* 000300 */ 			return (function () {
/* 000300 */ 				var __accu0__ = self;
/* 000300 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000300 */ 			}) ();
/* 000300 */ 		}
/* 000302 */ 		if (__t__ ((function () {
/* 000302 */ 			var __accu0__ = node;
/* 000302 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000302 */ 		}) ())) {
/* 000303 */ 			return (function () {
/* 000303 */ 				var __accu0__ = self;
/* 000303 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000303 */ 			}) ();
/* 000303 */ 		}
/* 000305 */ 		return (function () {
/* 000305 */ 			var __accu0__ = self;
/* 000305 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000305 */ 		}) ();
/* 000305 */ 	});},
/* 000307 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000307 */ 		if (arguments.length) {
/* 000307 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 					switch (__attrib0__) {
/* 000307 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 		}
/* 000307 */ 		else {
/* 000307 */ 		}
/* 000308 */ 		var groupnodelist = (function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000308 */ 		}) ();
/* 000309 */ 		if (__t__ (groupnodelist === null)) {
/* 000311 */ 			return null;
/* 000311 */ 		}
/* 000313 */ 		var groupnode = (function () {
/* 000313 */ 			var __accu0__ = node.latex_walker;
/* 000313 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000313 */ 		}) ();
/* 000321 */ 		return groupnode;
/* 000321 */ 	});},
/* 000324 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000325 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000326 */ 			return (function () {
/* 000326 */ 				var __accu0__ = self;
/* 000326 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000326 */ 			}) ();
/* 000326 */ 		}
/* 000327 */ 		return (function () {
/* 000327 */ 			var __accu0__ = self;
/* 000327 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000327 */ 		}) ();
/* 000327 */ 	});},
/* 000329 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000332 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000333 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000335 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000335 */ 				var __accu0__ = [];
/* 000335 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000335 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000335 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000335 */ 					var j = __left0__ [0];
/* 000335 */ 					var arg = __left0__ [1];
/* 000335 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000336 */ 						(function () {
/* 000336 */ 							var __accu1__ = __accu0__;
/* 000336 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000336 */ 						}) ();
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 				return py_iter (__accu0__);
/* 000336 */ 			}) ());
/* 000338 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000339 */ 			var text_arg_new = (function () {
/* 000339 */ 				var __accu0__ = self;
/* 000339 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000339 */ 			}) ();
/* 000340 */ 			if (__t__ (text_arg_new)) {
/* 000341 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000344 */ 				if (__t__ (text_arg_new !== null)) {
/* 000346 */ 					var newmacronode = (function () {
/* 000346 */ 						var __accu0__ = node.latex_walker;
/* 000350 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000350 */ 							var __accu1__ = latexnodes;
/* 000350 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000350 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000350 */ 					}) ();
/* 000361 */ 					var newmacronode = (function () {
/* 000361 */ 						var __accu0__ = node.spec;
/* 000361 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000361 */ 					}) ();
/* 000362 */ 					return newmacronode;
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000365 */ 		return null;
/* 000365 */ 	});},
/* 000367 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		var nodelist = (function () {
/* 000368 */ 			var __accu0__ = self;
/* 000368 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000368 */ 		}) ();
/* 000369 */ 		if (__t__ (nodelist === null)) {
/* 000371 */ 			return null;
/* 000371 */ 		}
/* 000373 */ 		var newnode = (function () {
/* 000373 */ 			var __accu0__ = node.latex_walker;
/* 000373 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000373 */ 		}) ();
/* 000382 */ 		var newnode = (function () {
/* 000382 */ 			var __accu0__ = node.spec;
/* 000382 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000382 */ 		}) ();
/* 000383 */ 		return newnode;
/* 000383 */ 	});},
/* 000385 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000388 */ 		var my_length = __call__ (len, null, (function () {
/* 000388 */ 			var __accu0__ = node;
/* 000388 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000388 */ 		}) ());
/* 000389 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000391 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000392 */ 			return null;
/* 000392 */ 		}
/* 000394 */ 		return true;
/* 000394 */ 	});},
/* 000396 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000398 */ 		var estimated_length = (function () {
/* 000398 */ 			var __accu0__ = self;
/* 000398 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000398 */ 		}) ();
/* 000400 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000402 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000403 */ 			return null;
/* 000403 */ 		}
/* 000406 */ 		if (__t__ ((function () {
/* 000406 */ 			var __accu0__ = node;
/* 000406 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000406 */ 		}) ())) {
/* 000408 */ 			var chars = node.chars;
/* 000409 */ 			var last_break_pos = 0;
/* 000410 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000410 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000410 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000410 */ 				var j = __left0__ [0];
/* 000410 */ 				var c = __left0__ [1];
/* 000411 */ 				if (__t__ (!__t__ (((function () {
/* 000411 */ 					var __accu0__ = c;
/* 000411 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000411 */ 				}) ())))) {
/* 000412 */ 					var last_break_pos = j;
/* 000412 */ 				}
/* 000413 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000414 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000414 */ 						break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 				continue;
/* 000414 */ 			}
/* 000420 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000422 */ 			var new_node = (function () {
/* 000422 */ 				var __accu0__ = node.latex_walker;
/* 000422 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000422 */ 			}) ();
/* 000429 */ 			return new_node;
/* 000429 */ 		}
/* 000433 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000435 */ 			return node;
/* 000435 */ 		}
/* 000438 */ 		return true;
/* 000438 */ 	});},
/* 000441 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000443 */ 		if (__t__ ((function () {
/* 000443 */ 			var __accu0__ = node;
/* 000443 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000443 */ 		}) ())) {
/* 000444 */ 			return __call__ (len, null, node.chars);
/* 000444 */ 		}
/* 000446 */ 		if (__t__ ((function () {
/* 000446 */ 			var __accu0__ = node;
/* 000446 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000446 */ 		}) ())) {
/* 000451 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000451 */ 				var __accu0__ = node;
/* 000451 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000451 */ 			}) ()), 2)), 3);
/* 000451 */ 		}
/* 000453 */ 		if (__t__ ((function () {
/* 000453 */ 			var __accu0__ = node;
/* 000453 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000453 */ 		}) ())) {
/* 000454 */ 			return 0;
/* 000454 */ 		}
/* 000456 */ 		return 0;
/* 000456 */ 	});}
/* 000456 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map