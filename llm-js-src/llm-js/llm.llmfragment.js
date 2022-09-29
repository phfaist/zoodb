/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 22:20:43
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
/* 000006 */ export {latexnodes_parsers, latexnodes_nodes, LLMStandaloneModeRenderContext, latexnodes};
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
/* 000050 */ 						case '_llm_text_if_loading_nodes': var _llm_text_if_loading_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000065 */ 		self.llm_text = llm_text;
/* 000066 */ 		self.environment = environment;
/* 000068 */ 		self.is_block_level = is_block_level;
/* 000069 */ 		self.resource_info = resource_info;
/* 000070 */ 		self.standalone_mode = standalone_mode;
/* 000071 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000072 */ 		self.what = what;
/* 000073 */ 		self.silent = silent;
/* 000074 */ 		self.parsing_mode = parsing_mode;
/* 000076 */ 		if (__t__ (__call__ (isinstance, null, llm_text, latexnodes_nodes.LatexNodeList))) {
/* 000079 */ 			self.nodes = self.llm_text;
/* 000080 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000081 */ 			if (__t__ (_llm_text_if_loading_nodes)) {
/* 000082 */ 				self.llm_text = _llm_text_if_loading_nodes;
/* 000082 */ 			}
/* 000083 */ 			else {
/* 000084 */ 				self.llm_text = (function () {
/* 000084 */ 					var __accu0__ = self.nodes;
/* 000084 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000084 */ 				}) ();
/* 000084 */ 			}
/* 000085 */ 			return ;
/* 000085 */ 		}
/* 000087 */ 		try {
/* 000089 */ 			var __left0__ = (function () {
/* 000089 */ 				var __accu0__ = LLMFragment;
/* 000089 */ 				return __call__ (__accu0__.parse, __accu0__, self.llm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode}));
/* 000089 */ 			}) ();
/* 000089 */ 			self.latex_walker = __left0__ [0];
/* 000089 */ 			self.nodes = __left0__ [1];
/* 000089 */ 		}
/* 000089 */ 		catch (__except0__) {
/* 000089 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerParseError)) {
/* 000089 */ 				var e = __except0__;
/* 000100 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000101 */ 					var error_message = (function () {
/* 000101 */ 						var __accu0__ = self.environment;
/* 000101 */ 						return __call__ (__accu0__.get_parse_error_message, __accu0__, e);
/* 000101 */ 					}) ();
/* 000102 */ 					(function () {
/* 000102 */ 						var __accu0__ = logger;
/* 000102 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.llm_text));
/* 000102 */ 					}) ();
/* 000102 */ 				}
/* 000106 */ 				__except0__.__cause__ = null;
/* 000106 */ 				throw __except0__;
/* 000106 */ 			}
/* 000106 */ 			else if (isinstance (__except0__, Exception)) {
/* 000106 */ 				var e = __except0__;
/* 000108 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000109 */ 					(function () {
/* 000109 */ 						var __accu0__ = logger;
/* 000109 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.llm_text));
/* 000109 */ 					}) ();
/* 000109 */ 				}
/* 000111 */ 				__except0__.__cause__ = null;
/* 000111 */ 				throw __except0__;
/* 000111 */ 			}
/* 000111 */ 			else {
/* 000111 */ 				throw __except0__;
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 	});},
/* 000114 */ 	_attribute_fields: _llmfragment_attribute_fields,
/* 000116 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _llmfragment_attribute_fields))),
/* 000120 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000120 */ 		var kwargs = dict ();
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 				delete kwargs.__kwargtrans__;
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		var d = (function () {
/* 000121 */ 			var __accu0__ = [];
/* 000121 */ 			var __iterable0__ = self._attribute_fields;
/* 000121 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000123 */ 				(function () {
/* 000123 */ 					var __accu1__ = __accu0__;
/* 000122 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000122 */ 			return dict (__accu0__);
/* 000122 */ 		}) ();
/* 000133 */ 		(function () {
/* 000133 */ 			var __accu0__ = d;
/* 000133 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000133 */ 		}) ();
/* 000134 */ 		return d;
/* 000134 */ 	});},
/* 000137 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000137 */ 		var kwargs = dict ();
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 				delete kwargs.__kwargtrans__;
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		return (function () {
/* 000138 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000138 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000143 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000145 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the LLMFragment constructor)');
/* 000145 */ 			__except0__.__cause__ = null;
/* 000145 */ 			throw __except0__;
/* 000145 */ 		}
/* 000150 */ 		var render_context = __call__ (LLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000151 */ 		return (function () {
/* 000151 */ 			var __accu0__ = self;
/* 000151 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000151 */ 		}) ();
/* 000151 */ 	});},
/* 000154 */ 	get parse () {return __getcm__ (this, function (cls, llm_text, environment) {
/* 000154 */ 		var standalone_mode = false;
/* 000154 */ 		var tolerant_parsing = null;
/* 000154 */ 		var is_block_level = null;
/* 000154 */ 		var parsing_mode = null;
/* 000154 */ 		var resource_info = null;
/* 000154 */ 		var what = null;
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000160 */ 		// pass;
/* 000164 */ 		var latex_walker = (function () {
/* 000164 */ 			var __accu0__ = environment;
/* 000164 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, llm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what}));
/* 000164 */ 		}) ();
/* 000174 */ 		var __left0__ = (function () {
/* 000174 */ 			var __accu0__ = latex_walker;
/* 000175 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000175 */ 				var __accu1__ = latexnodes_parsers;
/* 000175 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000175 */ 			}) ());
/* 000175 */ 		}) ();
/* 000175 */ 		var nodes = __left0__ [0];
/* 000175 */ 		var _ = __left0__ [1];
/* 000178 */ 		return tuple ([latex_walker, nodes]);
/* 000178 */ 	});},
/* 000181 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000182 */ 		(function () {
/* 000182 */ 			var __accu0__ = node_visitor;
/* 000182 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000182 */ 		}) ();
/* 000182 */ 	});},
/* 000185 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		return __gt__ (__call__ (len, null, self.llm_text), 0);
/* 000186 */ 	});},
/* 000188 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000189 */ 		var thellmtext = self.llm_text;
/* 000190 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000191 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000191 */ 		}
/* 000192 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000192 */ 	});},
/* 000195 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
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
/* 000196 */ 		var new_fragment = (function () {
/* 000196 */ 			var __accu0__ = self.environment;
/* 000197 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000197 */ 				var __accu1__ = self.llm_text;
/* 000197 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000198 */ 			}) (), __kwargtrans__ ((function () {
/* 000198 */ 				var __accu1__ = self;
/* 000198 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000198 */ 			}) ()));
/* 000198 */ 		}) ();
/* 000200 */ 		return new_fragment;
/* 000200 */ 	});},
/* 000202 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
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
/* 000207 */ 		var nodelists_paragraphs = (function () {
/* 000207 */ 			var __accu0__ = self.nodes;
/* 000207 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000207 */ 				if (arguments.length) {
/* 000207 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 							switch (__attrib0__) {
/* 000207 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 							}
/* 000207 */ 						}
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 				else {
/* 000207 */ 				}
/* 000208 */ 				return __t__ ((function () {
/* 000208 */ 					var __accu1__ = n;
/* 000208 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000208 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000208 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000208 */ 		}) ();
/* 000213 */ 		var nodelists_paragraphs = (function () {
/* 000213 */ 			var __accu0__ = [];
/* 000213 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000213 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000215 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000216 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000216 */ 					(function () {
/* 000216 */ 						var __accu1__ = __accu0__;
/* 000216 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000216 */ 					}) ();
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 			return __accu0__;
/* 000216 */ 		}) ();
/* 000219 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000220 */ 			return self;
/* 000220 */ 		}
/* 000222 */ 		// pass;
/* 000226 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000228 */ 		// pass;
/* 000231 */ 		return (function () {
/* 000231 */ 			var __accu0__ = self.environment;
/* 000233 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000233 */ 				var __accu1__ = self;
/* 000233 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000233 */ 			}) ())));
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000236 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000236 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000236 */ 			var min_chars = null;
/* 000236 */ 		};
/* 000236 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000236 */ 			var truncation_marker = ' …';
/* 000236 */ 		};
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000238 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000241 */ 		var newnodes = (function () {
/* 000241 */ 			var __accu0__ = trunc;
/* 000241 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000241 */ 		}) ();
/* 000243 */ 		return (function () {
/* 000243 */ 			var __accu0__ = self.environment;
/* 000245 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000245 */ 				var __accu1__ = self;
/* 000245 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000245 */ 			}) ())));
/* 000245 */ 		}) ();
/* 000245 */ 	});}
/* 000245 */ });
/* 000255 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000255 */ 	__module__: __name__,
/* 000256 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000256 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var min_chars = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var truncation_marker = null;
/* 000256 */ 		};
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000257 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000258 */ 		self.chars = chars;
/* 000259 */ 		self.min_chars = min_chars;
/* 000260 */ 		self.truncation_marker = truncation_marker;
/* 000262 */ 		self.count = 0;
/* 000262 */ 	});},
/* 000264 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000265 */ 		self.count = 0;
/* 000266 */ 		var newnodes = (function () {
/* 000266 */ 			var __accu0__ = self;
/* 000266 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000266 */ 		}) ();
/* 000267 */ 		if (__t__ (newnodes === null)) {
/* 000268 */ 			return nodes;
/* 000268 */ 		}
/* 000269 */ 		return newnodes;
/* 000269 */ 	});},
/* 000271 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
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
/* 000272 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000272 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000272 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000272 */ 			var j = __left0__ [0];
/* 000272 */ 			var node = __left0__ [1];
/* 000273 */ 			var newnode = (function () {
/* 000273 */ 				var __accu0__ = self;
/* 000273 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000273 */ 			}) ();
/* 000274 */ 			if (__t__ (newnode !== null)) {
/* 000275 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000276 */ 				if (__t__ (newnode !== true)) {
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu0__ = newnodes;
/* 000277 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000277 */ 					}) ();
/* 000277 */ 				}
/* 000278 */ 				return (function () {
/* 000278 */ 					var __accu0__ = nodes.latex_walker;
/* 000278 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000278 */ 				}) ();
/* 000278 */ 			}
/* 000278 */ 		}
/* 000283 */ 		return null;
/* 000283 */ 	});},
/* 000285 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000286 */ 		if (__t__ ((function () {
/* 000286 */ 			var __accu0__ = node;
/* 000286 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000286 */ 		}) ())) {
/* 000287 */ 			return (function () {
/* 000287 */ 				var __accu0__ = self;
/* 000287 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000287 */ 			}) ();
/* 000287 */ 		}
/* 000289 */ 		if (__t__ ((function () {
/* 000289 */ 			var __accu0__ = node;
/* 000289 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000289 */ 		}) ())) {
/* 000290 */ 			return (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000292 */ 		if (__t__ ((function () {
/* 000292 */ 			var __accu0__ = node;
/* 000292 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000292 */ 		}) ())) {
/* 000293 */ 			return (function () {
/* 000293 */ 				var __accu0__ = self;
/* 000293 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000293 */ 			}) ();
/* 000293 */ 		}
/* 000295 */ 		if (__t__ ((function () {
/* 000295 */ 			var __accu0__ = node;
/* 000295 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000295 */ 		}) ())) {
/* 000296 */ 			return (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000296 */ 			}) ();
/* 000296 */ 		}
/* 000298 */ 		return (function () {
/* 000298 */ 			var __accu0__ = self;
/* 000298 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000298 */ 		}) ();
/* 000298 */ 	});},
/* 000300 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000300 */ 		if (arguments.length) {
/* 000300 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000300 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000300 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000300 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000300 */ 					switch (__attrib0__) {
/* 000300 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 					}
/* 000300 */ 				}
/* 000300 */ 			}
/* 000300 */ 		}
/* 000300 */ 		else {
/* 000300 */ 		}
/* 000301 */ 		var groupnodelist = (function () {
/* 000301 */ 			var __accu0__ = self;
/* 000301 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000301 */ 		}) ();
/* 000302 */ 		if (__t__ (groupnodelist === null)) {
/* 000304 */ 			return ;
/* 000304 */ 		}
/* 000306 */ 		var groupnode = (function () {
/* 000306 */ 			var __accu0__ = node.latex_walker;
/* 000306 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000306 */ 		}) ();
/* 000314 */ 		return groupnode;
/* 000314 */ 	});},
/* 000317 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000318 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000319 */ 			return (function () {
/* 000319 */ 				var __accu0__ = self;
/* 000319 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000319 */ 			}) ();
/* 000319 */ 		}
/* 000320 */ 		return (function () {
/* 000320 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000320 */ 		}) ();
/* 000320 */ 	});},
/* 000322 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000325 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000326 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000328 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000328 */ 				var __accu0__ = [];
/* 000328 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000328 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000328 */ 					var j = __left0__ [0];
/* 000328 */ 					var arg = __left0__ [1];
/* 000328 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000329 */ 						(function () {
/* 000329 */ 							var __accu1__ = __accu0__;
/* 000329 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000329 */ 						}) ();
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 				return py_iter (__accu0__);
/* 000329 */ 			}) ());
/* 000331 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000332 */ 			var text_arg_new = (function () {
/* 000332 */ 				var __accu0__ = self;
/* 000332 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000332 */ 			}) ();
/* 000333 */ 			if (__t__ (text_arg_new)) {
/* 000334 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000337 */ 				if (__t__ (text_arg_new !== null)) {
/* 000339 */ 					var newmacronode = (function () {
/* 000339 */ 						var __accu0__ = node.latex_walker;
/* 000343 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000343 */ 							var __accu1__ = latexnodes;
/* 000343 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000343 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000343 */ 					}) ();
/* 000354 */ 					var newmacronode = (function () {
/* 000354 */ 						var __accu0__ = node.spec;
/* 000354 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000354 */ 					}) ();
/* 000355 */ 					return newmacronode;
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000358 */ 		return null;
/* 000358 */ 	});},
/* 000360 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		var nodelist = (function () {
/* 000361 */ 			var __accu0__ = self;
/* 000361 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000361 */ 		}) ();
/* 000362 */ 		if (__t__ (nodelist === null)) {
/* 000364 */ 			return ;
/* 000364 */ 		}
/* 000366 */ 		var newnode = (function () {
/* 000366 */ 			var __accu0__ = node.latex_walker;
/* 000366 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000366 */ 		}) ();
/* 000375 */ 		var newnode = (function () {
/* 000375 */ 			var __accu0__ = node.spec;
/* 000375 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000375 */ 		}) ();
/* 000376 */ 		return newnode;
/* 000376 */ 	});},
/* 000378 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000381 */ 		var my_length = __call__ (len, null, (function () {
/* 000381 */ 			var __accu0__ = node;
/* 000381 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000381 */ 		}) ());
/* 000382 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000384 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000385 */ 			return null;
/* 000385 */ 		}
/* 000387 */ 		return true;
/* 000387 */ 	});},
/* 000389 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000391 */ 		var estimated_length = (function () {
/* 000391 */ 			var __accu0__ = self;
/* 000391 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000391 */ 		}) ();
/* 000393 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000395 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000396 */ 			return null;
/* 000396 */ 		}
/* 000399 */ 		if (__t__ ((function () {
/* 000399 */ 			var __accu0__ = node;
/* 000399 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000399 */ 		}) ())) {
/* 000401 */ 			var chars = node.chars;
/* 000402 */ 			var last_break_pos = 0;
/* 000403 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000403 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000403 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000403 */ 				var j = __left0__ [0];
/* 000403 */ 				var c = __left0__ [1];
/* 000404 */ 				if (__t__ (!__t__ (((function () {
/* 000404 */ 					var __accu0__ = c;
/* 000404 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000404 */ 				}) ())))) {
/* 000405 */ 					var last_break_pos = j;
/* 000405 */ 				}
/* 000406 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000407 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000407 */ 						break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 				continue;
/* 000407 */ 			}
/* 000413 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000415 */ 			var new_node = (function () {
/* 000415 */ 				var __accu0__ = node.latex_walker;
/* 000415 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000415 */ 			}) ();
/* 000422 */ 			return new_node;
/* 000422 */ 		}
/* 000426 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000428 */ 			return node;
/* 000428 */ 		}
/* 000428 */ 	});},
/* 000432 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000434 */ 		if (__t__ ((function () {
/* 000434 */ 			var __accu0__ = node;
/* 000434 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000434 */ 		}) ())) {
/* 000435 */ 			return __call__ (len, null, node.chars);
/* 000435 */ 		}
/* 000437 */ 		if (__t__ ((function () {
/* 000437 */ 			var __accu0__ = node;
/* 000437 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000437 */ 		}) ())) {
/* 000442 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000442 */ 				var __accu0__ = node;
/* 000442 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000442 */ 			}) ()), 2)), 3);
/* 000442 */ 		}
/* 000444 */ 		if (__t__ ((function () {
/* 000444 */ 			var __accu0__ = node;
/* 000444 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000444 */ 		}) ())) {
/* 000445 */ 			return 0;
/* 000445 */ 		}
/* 000445 */ 	});}
/* 000445 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map