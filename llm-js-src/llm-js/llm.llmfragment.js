/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:20
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
/* 000006 */ export {LLMStandaloneModeRenderContext, latexnodes_parsers, latexnodes, latexnodes_nodes};
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
/* 000163 */ 		(function () {
/* 000163 */ 			var __accu0__ = logger;
/* 000163 */ 			return __call__ (__accu0__.debug, __accu0__, 'Parsing LLM content %r', llm_text);
/* 000163 */ 		}) ();
/* 000165 */ 		var latex_walker = (function () {
/* 000165 */ 			var __accu0__ = environment;
/* 000165 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, llm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000165 */ 		}) ();
/* 000176 */ 		var __left0__ = (function () {
/* 000176 */ 			var __accu0__ = latex_walker;
/* 000177 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000177 */ 				var __accu1__ = latexnodes_parsers;
/* 000177 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000177 */ 			}) ());
/* 000177 */ 		}) ();
/* 000177 */ 		var nodes = __left0__ [0];
/* 000177 */ 		var _ = __left0__ [1];
/* 000180 */ 		return tuple ([latex_walker, nodes]);
/* 000180 */ 	});},
/* 000183 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		(function () {
/* 000184 */ 			var __accu0__ = node_visitor;
/* 000184 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000187 */ 	get is_empty () {return __get__ (this, function (self) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000188 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000188 */ 			var __accu0__ = self.llm_text;
/* 000188 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000188 */ 		}) ()), 0);
/* 000188 */ 	});},
/* 000190 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000191 */ 		return !__t__ (((function () {
/* 000191 */ 			var __accu0__ = self;
/* 000191 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000191 */ 		}) ()));
/* 000191 */ 	});},
/* 000193 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		var thellmtext = self.llm_text;
/* 000195 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000196 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000196 */ 		}
/* 000197 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000197 */ 	});},
/* 000200 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000201 */ 		var new_fragment = (function () {
/* 000201 */ 			var __accu0__ = self.environment;
/* 000202 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000202 */ 				var __accu1__ = self.llm_text;
/* 000202 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000203 */ 			}) (), __kwargtrans__ ((function () {
/* 000203 */ 				var __accu1__ = self;
/* 000203 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000203 */ 			}) ()));
/* 000203 */ 		}) ();
/* 000205 */ 		return new_fragment;
/* 000205 */ 	});},
/* 000207 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000212 */ 		var nodelists_paragraphs = (function () {
/* 000212 */ 			var __accu0__ = self.nodes;
/* 000212 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000212 */ 				if (arguments.length) {
/* 000212 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 							switch (__attrib0__) {
/* 000212 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 							}
/* 000212 */ 						}
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 				else {
/* 000212 */ 				}
/* 000213 */ 				return __t__ ((function () {
/* 000213 */ 					var __accu1__ = n;
/* 000213 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000213 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000213 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000213 */ 		}) ();
/* 000218 */ 		var nodelists_paragraphs = (function () {
/* 000218 */ 			var __accu0__ = [];
/* 000218 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000218 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000220 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000221 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000221 */ 					(function () {
/* 000221 */ 						var __accu1__ = __accu0__;
/* 000221 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000221 */ 					}) ();
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 			return __accu0__;
/* 000221 */ 		}) ();
/* 000224 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000225 */ 			return self;
/* 000225 */ 		}
/* 000227 */ 		(function () {
/* 000227 */ 			var __accu0__ = logger;
/* 000227 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodelists_paragraphs[0]={}'.format (__getitem__ (nodelists_paragraphs, 0)));
/* 000227 */ 		}) ();
/* 000229 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000231 */ 		(function () {
/* 000231 */ 			var __accu0__ = logger;
/* 000231 */ 			return __call__ (__accu0__.debug, __accu0__, 'First paragraph -> thenodes={}'.format (thenodes));
/* 000231 */ 		}) ();
/* 000232 */ 		return (function () {
/* 000232 */ 			var __accu0__ = self.environment;
/* 000234 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000234 */ 				var __accu1__ = self;
/* 000234 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000234 */ 			}) ())));
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000237 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000237 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000237 */ 			var min_chars = null;
/* 000237 */ 		};
/* 000237 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000237 */ 			var truncation_marker = ' …';
/* 000237 */ 		};
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000239 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000242 */ 		var newnodes = (function () {
/* 000242 */ 			var __accu0__ = trunc;
/* 000242 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000242 */ 		}) ();
/* 000244 */ 		return (function () {
/* 000244 */ 			var __accu0__ = self.environment;
/* 000246 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000246 */ 				var __accu1__ = self;
/* 000246 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000246 */ 			}) ())));
/* 000246 */ 		}) ();
/* 000246 */ 	});}
/* 000246 */ });
/* 000256 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000256 */ 	__module__: __name__,
/* 000257 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000257 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var min_chars = null;
/* 000257 */ 		};
/* 000257 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var truncation_marker = null;
/* 000257 */ 		};
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000259 */ 		self.chars = chars;
/* 000260 */ 		self.min_chars = min_chars;
/* 000261 */ 		self.truncation_marker = truncation_marker;
/* 000263 */ 		self.count = 0;
/* 000263 */ 	});},
/* 000265 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000266 */ 		self.count = 0;
/* 000267 */ 		var newnodes = (function () {
/* 000267 */ 			var __accu0__ = self;
/* 000267 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000267 */ 		}) ();
/* 000268 */ 		if (__t__ (newnodes === null)) {
/* 000269 */ 			return nodes;
/* 000269 */ 		}
/* 000270 */ 		return newnodes;
/* 000270 */ 	});},
/* 000272 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000273 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000273 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000273 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000273 */ 			var j = __left0__ [0];
/* 000273 */ 			var node = __left0__ [1];
/* 000274 */ 			var newnode = (function () {
/* 000274 */ 				var __accu0__ = self;
/* 000274 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000274 */ 			}) ();
/* 000275 */ 			if (__t__ (newnode !== null)) {
/* 000276 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000277 */ 				if (__t__ (newnode !== true)) {
/* 000278 */ 					(function () {
/* 000278 */ 						var __accu0__ = newnodes;
/* 000278 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000278 */ 					}) ();
/* 000278 */ 				}
/* 000279 */ 				return (function () {
/* 000279 */ 					var __accu0__ = nodes.latex_walker;
/* 000279 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000279 */ 				}) ();
/* 000279 */ 			}
/* 000279 */ 		}
/* 000284 */ 		return null;
/* 000284 */ 	});},
/* 000286 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000287 */ 		if (__t__ ((function () {
/* 000287 */ 			var __accu0__ = node;
/* 000287 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000287 */ 		}) ())) {
/* 000288 */ 			return (function () {
/* 000288 */ 				var __accu0__ = self;
/* 000288 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000288 */ 			}) ();
/* 000288 */ 		}
/* 000290 */ 		if (__t__ ((function () {
/* 000290 */ 			var __accu0__ = node;
/* 000290 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000290 */ 		}) ())) {
/* 000291 */ 			return (function () {
/* 000291 */ 				var __accu0__ = self;
/* 000291 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000291 */ 			}) ();
/* 000291 */ 		}
/* 000293 */ 		if (__t__ ((function () {
/* 000293 */ 			var __accu0__ = node;
/* 000293 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000293 */ 		}) ())) {
/* 000294 */ 			return (function () {
/* 000294 */ 				var __accu0__ = self;
/* 000294 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000294 */ 			}) ();
/* 000294 */ 		}
/* 000296 */ 		if (__t__ ((function () {
/* 000296 */ 			var __accu0__ = node;
/* 000296 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000296 */ 		}) ())) {
/* 000297 */ 			return (function () {
/* 000297 */ 				var __accu0__ = self;
/* 000297 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000297 */ 			}) ();
/* 000297 */ 		}
/* 000299 */ 		return (function () {
/* 000299 */ 			var __accu0__ = self;
/* 000299 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000299 */ 		}) ();
/* 000299 */ 	});},
/* 000301 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000302 */ 		var groupnodelist = (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000302 */ 		}) ();
/* 000303 */ 		if (__t__ (groupnodelist === null)) {
/* 000305 */ 			return ;
/* 000305 */ 		}
/* 000307 */ 		var groupnode = (function () {
/* 000307 */ 			var __accu0__ = node.latex_walker;
/* 000307 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000307 */ 		}) ();
/* 000315 */ 		return groupnode;
/* 000315 */ 	});},
/* 000318 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000319 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000320 */ 			return (function () {
/* 000320 */ 				var __accu0__ = self;
/* 000320 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000321 */ 		return (function () {
/* 000321 */ 			var __accu0__ = self;
/* 000321 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000321 */ 		}) ();
/* 000321 */ 	});},
/* 000323 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000326 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000327 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000329 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000329 */ 				var __accu0__ = [];
/* 000329 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000329 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000329 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000329 */ 					var j = __left0__ [0];
/* 000329 */ 					var arg = __left0__ [1];
/* 000329 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000330 */ 						(function () {
/* 000330 */ 							var __accu1__ = __accu0__;
/* 000330 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000330 */ 						}) ();
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 				return py_iter (__accu0__);
/* 000330 */ 			}) ());
/* 000332 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000333 */ 			var text_arg_new = (function () {
/* 000333 */ 				var __accu0__ = self;
/* 000333 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000333 */ 			}) ();
/* 000334 */ 			if (__t__ (text_arg_new)) {
/* 000335 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000338 */ 				if (__t__ (text_arg_new !== null)) {
/* 000340 */ 					var newmacronode = (function () {
/* 000340 */ 						var __accu0__ = node.latex_walker;
/* 000344 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000344 */ 							var __accu1__ = latexnodes;
/* 000344 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000344 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000344 */ 					}) ();
/* 000355 */ 					var newmacronode = (function () {
/* 000355 */ 						var __accu0__ = node.spec;
/* 000355 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000355 */ 					}) ();
/* 000356 */ 					return newmacronode;
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000359 */ 		return null;
/* 000359 */ 	});},
/* 000361 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000362 */ 		var nodelist = (function () {
/* 000362 */ 			var __accu0__ = self;
/* 000362 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000362 */ 		}) ();
/* 000363 */ 		if (__t__ (nodelist === null)) {
/* 000365 */ 			return ;
/* 000365 */ 		}
/* 000367 */ 		var newnode = (function () {
/* 000367 */ 			var __accu0__ = node.latex_walker;
/* 000367 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000367 */ 		}) ();
/* 000376 */ 		var newnode = (function () {
/* 000376 */ 			var __accu0__ = node.spec;
/* 000376 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000376 */ 		}) ();
/* 000377 */ 		return newnode;
/* 000377 */ 	});},
/* 000379 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000382 */ 		var my_length = __call__ (len, null, (function () {
/* 000382 */ 			var __accu0__ = node;
/* 000382 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000382 */ 		}) ());
/* 000383 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000385 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000386 */ 			return null;
/* 000386 */ 		}
/* 000388 */ 		return true;
/* 000388 */ 	});},
/* 000390 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000392 */ 		var estimated_length = (function () {
/* 000392 */ 			var __accu0__ = self;
/* 000392 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000392 */ 		}) ();
/* 000394 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000396 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000397 */ 			return null;
/* 000397 */ 		}
/* 000400 */ 		if (__t__ ((function () {
/* 000400 */ 			var __accu0__ = node;
/* 000400 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000400 */ 		}) ())) {
/* 000402 */ 			var chars = node.chars;
/* 000403 */ 			var last_break_pos = 0;
/* 000404 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000404 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000404 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000404 */ 				var j = __left0__ [0];
/* 000404 */ 				var c = __left0__ [1];
/* 000405 */ 				if (__t__ (!__t__ (((function () {
/* 000405 */ 					var __accu0__ = c;
/* 000405 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000405 */ 				}) ())))) {
/* 000406 */ 					var last_break_pos = j;
/* 000406 */ 				}
/* 000407 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000408 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000408 */ 						break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 				continue;
/* 000408 */ 			}
/* 000414 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000416 */ 			var new_node = (function () {
/* 000416 */ 				var __accu0__ = node.latex_walker;
/* 000416 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000416 */ 			}) ();
/* 000423 */ 			return new_node;
/* 000423 */ 		}
/* 000427 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000429 */ 			return node;
/* 000429 */ 		}
/* 000429 */ 	});},
/* 000433 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000435 */ 		if (__t__ ((function () {
/* 000435 */ 			var __accu0__ = node;
/* 000435 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000435 */ 		}) ())) {
/* 000436 */ 			return __call__ (len, null, node.chars);
/* 000436 */ 		}
/* 000438 */ 		if (__t__ ((function () {
/* 000438 */ 			var __accu0__ = node;
/* 000438 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000438 */ 		}) ())) {
/* 000443 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000443 */ 				var __accu0__ = node;
/* 000443 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000443 */ 			}) ()), 2)), 3);
/* 000443 */ 		}
/* 000445 */ 		if (__t__ ((function () {
/* 000445 */ 			var __accu0__ = node;
/* 000445 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000445 */ 		}) ())) {
/* 000446 */ 			return 0;
/* 000446 */ 		}
/* 000446 */ 	});}
/* 000446 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map