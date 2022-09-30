/* 000001 */ // Transcrypt'ed from Python, 2022-09-30 21:33:07
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
/* 000006 */ export {latexnodes, latexnodes_nodes, LLMStandaloneModeRenderContext, latexnodes_parsers};
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
/* 000185 */ 	get is_empty () {return __get__ (this, function (self) {
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
/* 000186 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000186 */ 			var __accu0__ = self.llm_text;
/* 000186 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000186 */ 		}) ()), 0);
/* 000186 */ 	});},
/* 000188 */ 	get __bool__ () {return __get__ (this, function (self) {
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
/* 000189 */ 		return !__t__ (((function () {
/* 000189 */ 			var __accu0__ = self;
/* 000189 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000189 */ 		}) ()));
/* 000189 */ 	});},
/* 000191 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000192 */ 		var thellmtext = self.llm_text;
/* 000193 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000194 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000194 */ 		}
/* 000195 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000195 */ 	});},
/* 000198 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		var new_fragment = (function () {
/* 000199 */ 			var __accu0__ = self.environment;
/* 000200 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000200 */ 				var __accu1__ = self.llm_text;
/* 000200 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000201 */ 			}) (), __kwargtrans__ ((function () {
/* 000201 */ 				var __accu1__ = self;
/* 000201 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000201 */ 			}) ()));
/* 000201 */ 		}) ();
/* 000203 */ 		return new_fragment;
/* 000203 */ 	});},
/* 000205 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000210 */ 		var nodelists_paragraphs = (function () {
/* 000210 */ 			var __accu0__ = self.nodes;
/* 000210 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000210 */ 				if (arguments.length) {
/* 000210 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 							switch (__attrib0__) {
/* 000210 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 							}
/* 000210 */ 						}
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 				else {
/* 000210 */ 				}
/* 000211 */ 				return __t__ ((function () {
/* 000211 */ 					var __accu1__ = n;
/* 000211 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000211 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000211 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000211 */ 		}) ();
/* 000216 */ 		var nodelists_paragraphs = (function () {
/* 000216 */ 			var __accu0__ = [];
/* 000216 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000216 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000218 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000219 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000219 */ 					(function () {
/* 000219 */ 						var __accu1__ = __accu0__;
/* 000219 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000219 */ 					}) ();
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 			return __accu0__;
/* 000219 */ 		}) ();
/* 000222 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000223 */ 			return self;
/* 000223 */ 		}
/* 000225 */ 		// pass;
/* 000229 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000231 */ 		// pass;
/* 000234 */ 		return (function () {
/* 000234 */ 			var __accu0__ = self.environment;
/* 000236 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000236 */ 				var __accu1__ = self;
/* 000236 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000236 */ 			}) ())));
/* 000236 */ 		}) ();
/* 000236 */ 	});},
/* 000239 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000239 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var min_chars = null;
/* 000239 */ 		};
/* 000239 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var truncation_marker = ' …';
/* 000239 */ 		};
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000241 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000244 */ 		var newnodes = (function () {
/* 000244 */ 			var __accu0__ = trunc;
/* 000244 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000244 */ 		}) ();
/* 000246 */ 		return (function () {
/* 000246 */ 			var __accu0__ = self.environment;
/* 000248 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000248 */ 				var __accu1__ = self;
/* 000248 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000248 */ 			}) ())));
/* 000248 */ 		}) ();
/* 000248 */ 	});}
/* 000248 */ });
/* 000258 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000258 */ 	__module__: __name__,
/* 000259 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000259 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 			var min_chars = null;
/* 000259 */ 		};
/* 000259 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 			var truncation_marker = null;
/* 000259 */ 		};
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000261 */ 		self.chars = chars;
/* 000262 */ 		self.min_chars = min_chars;
/* 000263 */ 		self.truncation_marker = truncation_marker;
/* 000265 */ 		self.count = 0;
/* 000265 */ 	});},
/* 000267 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		self.count = 0;
/* 000269 */ 		var newnodes = (function () {
/* 000269 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000269 */ 		}) ();
/* 000270 */ 		if (__t__ (newnodes === null)) {
/* 000271 */ 			return nodes;
/* 000271 */ 		}
/* 000272 */ 		return newnodes;
/* 000272 */ 	});},
/* 000274 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000275 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000275 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 			var j = __left0__ [0];
/* 000275 */ 			var node = __left0__ [1];
/* 000276 */ 			var newnode = (function () {
/* 000276 */ 				var __accu0__ = self;
/* 000276 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000276 */ 			}) ();
/* 000277 */ 			if (__t__ (newnode !== null)) {
/* 000278 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000279 */ 				if (__t__ (newnode !== true)) {
/* 000280 */ 					(function () {
/* 000280 */ 						var __accu0__ = newnodes;
/* 000280 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000280 */ 					}) ();
/* 000280 */ 				}
/* 000281 */ 				return (function () {
/* 000281 */ 					var __accu0__ = nodes.latex_walker;
/* 000281 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000281 */ 				}) ();
/* 000281 */ 			}
/* 000281 */ 		}
/* 000286 */ 		return null;
/* 000286 */ 	});},
/* 000288 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000288 */ 		if (arguments.length) {
/* 000288 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000288 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000288 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000288 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000288 */ 					switch (__attrib0__) {
/* 000288 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000288 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000288 */ 					}
/* 000288 */ 				}
/* 000288 */ 			}
/* 000288 */ 		}
/* 000288 */ 		else {
/* 000288 */ 		}
/* 000289 */ 		if (__t__ ((function () {
/* 000289 */ 			var __accu0__ = node;
/* 000289 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000289 */ 		}) ())) {
/* 000290 */ 			return (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000292 */ 		if (__t__ ((function () {
/* 000292 */ 			var __accu0__ = node;
/* 000292 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000292 */ 		}) ())) {
/* 000293 */ 			return (function () {
/* 000293 */ 				var __accu0__ = self;
/* 000293 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000293 */ 			}) ();
/* 000293 */ 		}
/* 000295 */ 		if (__t__ ((function () {
/* 000295 */ 			var __accu0__ = node;
/* 000295 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000295 */ 		}) ())) {
/* 000296 */ 			return (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000296 */ 			}) ();
/* 000296 */ 		}
/* 000298 */ 		if (__t__ ((function () {
/* 000298 */ 			var __accu0__ = node;
/* 000298 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000298 */ 		}) ())) {
/* 000299 */ 			return (function () {
/* 000299 */ 				var __accu0__ = self;
/* 000299 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000299 */ 			}) ();
/* 000299 */ 		}
/* 000301 */ 		return (function () {
/* 000301 */ 			var __accu0__ = self;
/* 000301 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000301 */ 		}) ();
/* 000301 */ 	});},
/* 000303 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000304 */ 		var groupnodelist = (function () {
/* 000304 */ 			var __accu0__ = self;
/* 000304 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000304 */ 		}) ();
/* 000305 */ 		if (__t__ (groupnodelist === null)) {
/* 000307 */ 			return ;
/* 000307 */ 		}
/* 000309 */ 		var groupnode = (function () {
/* 000309 */ 			var __accu0__ = node.latex_walker;
/* 000309 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000309 */ 		}) ();
/* 000317 */ 		return groupnode;
/* 000317 */ 	});},
/* 000320 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000321 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000322 */ 			return (function () {
/* 000322 */ 				var __accu0__ = self;
/* 000322 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000322 */ 			}) ();
/* 000322 */ 		}
/* 000323 */ 		return (function () {
/* 000323 */ 			var __accu0__ = self;
/* 000323 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000325 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000328 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000329 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000331 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000331 */ 				var __accu0__ = [];
/* 000331 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000331 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000331 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000331 */ 					var j = __left0__ [0];
/* 000331 */ 					var arg = __left0__ [1];
/* 000331 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000332 */ 						(function () {
/* 000332 */ 							var __accu1__ = __accu0__;
/* 000332 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000332 */ 						}) ();
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 				return py_iter (__accu0__);
/* 000332 */ 			}) ());
/* 000334 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000335 */ 			var text_arg_new = (function () {
/* 000335 */ 				var __accu0__ = self;
/* 000335 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000335 */ 			}) ();
/* 000336 */ 			if (__t__ (text_arg_new)) {
/* 000337 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000340 */ 				if (__t__ (text_arg_new !== null)) {
/* 000342 */ 					var newmacronode = (function () {
/* 000342 */ 						var __accu0__ = node.latex_walker;
/* 000346 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000346 */ 							var __accu1__ = latexnodes;
/* 000346 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000346 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000346 */ 					}) ();
/* 000357 */ 					var newmacronode = (function () {
/* 000357 */ 						var __accu0__ = node.spec;
/* 000357 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000357 */ 					}) ();
/* 000358 */ 					return newmacronode;
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000361 */ 		return null;
/* 000361 */ 	});},
/* 000363 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		var nodelist = (function () {
/* 000364 */ 			var __accu0__ = self;
/* 000364 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000364 */ 		}) ();
/* 000365 */ 		if (__t__ (nodelist === null)) {
/* 000367 */ 			return ;
/* 000367 */ 		}
/* 000369 */ 		var newnode = (function () {
/* 000369 */ 			var __accu0__ = node.latex_walker;
/* 000369 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000369 */ 		}) ();
/* 000378 */ 		var newnode = (function () {
/* 000378 */ 			var __accu0__ = node.spec;
/* 000378 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000378 */ 		}) ();
/* 000379 */ 		return newnode;
/* 000379 */ 	});},
/* 000381 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000384 */ 		var my_length = __call__ (len, null, (function () {
/* 000384 */ 			var __accu0__ = node;
/* 000384 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000384 */ 		}) ());
/* 000385 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000387 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000388 */ 			return null;
/* 000388 */ 		}
/* 000390 */ 		return true;
/* 000390 */ 	});},
/* 000392 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000394 */ 		var estimated_length = (function () {
/* 000394 */ 			var __accu0__ = self;
/* 000394 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000394 */ 		}) ();
/* 000396 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000398 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000399 */ 			return null;
/* 000399 */ 		}
/* 000402 */ 		if (__t__ ((function () {
/* 000402 */ 			var __accu0__ = node;
/* 000402 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000402 */ 		}) ())) {
/* 000404 */ 			var chars = node.chars;
/* 000405 */ 			var last_break_pos = 0;
/* 000406 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000406 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000406 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000406 */ 				var j = __left0__ [0];
/* 000406 */ 				var c = __left0__ [1];
/* 000407 */ 				if (__t__ (!__t__ (((function () {
/* 000407 */ 					var __accu0__ = c;
/* 000407 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000407 */ 				}) ())))) {
/* 000408 */ 					var last_break_pos = j;
/* 000408 */ 				}
/* 000409 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000410 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000410 */ 						break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 				continue;
/* 000410 */ 			}
/* 000416 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000418 */ 			var new_node = (function () {
/* 000418 */ 				var __accu0__ = node.latex_walker;
/* 000418 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000418 */ 			}) ();
/* 000425 */ 			return new_node;
/* 000425 */ 		}
/* 000429 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000431 */ 			return node;
/* 000431 */ 		}
/* 000431 */ 	});},
/* 000435 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000435 */ 		if (arguments.length) {
/* 000435 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000435 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000435 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000435 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000435 */ 					switch (__attrib0__) {
/* 000435 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 					}
/* 000435 */ 				}
/* 000435 */ 			}
/* 000435 */ 		}
/* 000435 */ 		else {
/* 000435 */ 		}
/* 000437 */ 		if (__t__ ((function () {
/* 000437 */ 			var __accu0__ = node;
/* 000437 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000437 */ 		}) ())) {
/* 000438 */ 			return __call__ (len, null, node.chars);
/* 000438 */ 		}
/* 000440 */ 		if (__t__ ((function () {
/* 000440 */ 			var __accu0__ = node;
/* 000440 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000440 */ 		}) ())) {
/* 000445 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000445 */ 				var __accu0__ = node;
/* 000445 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000445 */ 			}) ()), 2)), 3);
/* 000445 */ 		}
/* 000447 */ 		if (__t__ ((function () {
/* 000447 */ 			var __accu0__ = node;
/* 000447 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000447 */ 		}) ())) {
/* 000448 */ 			return 0;
/* 000448 */ 		}
/* 000448 */ 	});}
/* 000448 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map