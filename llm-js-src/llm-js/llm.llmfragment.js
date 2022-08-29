/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 11:35:11
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
/* 000006 */ export {latexnodes_parsers, latexnodes_nodes, latexnodes, LLMStandaloneModeRenderContext};
/* 000001 */ var __name__ = 'llm.llmfragment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000017 */ export var LLMFragment =  __class__ ('LLMFragment', [object], {
/* 000017 */ 	__module__: __name__,
/* 000037 */ 	get __init__ () {return __get__ (this, function (self, llm_text, environment) {
/* 000037 */ 		var is_block_level = null;
/* 000037 */ 		var resource_info = null;
/* 000037 */ 		var standalone_mode = false;
/* 000037 */ 		var what = '(unknown)';
/* 000037 */ 		var silent = false;
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000049 */ 		self.llm_text = llm_text;
/* 000050 */ 		self.environment = environment;
/* 000052 */ 		self.is_block_level = is_block_level;
/* 000053 */ 		self.resource_info = resource_info;
/* 000054 */ 		self.standalone_mode = standalone_mode;
/* 000055 */ 		self.what = what;
/* 000056 */ 		self.silent = silent;
/* 000058 */ 		if (__t__ (__call__ (isinstance, null, llm_text, latexnodes_nodes.LatexNodeList))) {
/* 000061 */ 			self.nodes = self.llm_text;
/* 000062 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000063 */ 			self.llm_text = (function () {
/* 000063 */ 				var __accu0__ = self.nodes;
/* 000063 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000063 */ 			}) ();
/* 000064 */ 			return ;
/* 000064 */ 		}
/* 000066 */ 		try {
/* 000068 */ 			var __left0__ = (function () {
/* 000068 */ 				var __accu0__ = LLMFragment;
/* 000068 */ 				return __call__ (__accu0__.parse, __accu0__, self.llm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info}));
/* 000068 */ 			}) ();
/* 000068 */ 			self.latex_walker = __left0__ [0];
/* 000068 */ 			self.nodes = __left0__ [1];
/* 000068 */ 		}
/* 000068 */ 		catch (__except0__) {
/* 000068 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerParseError)) {
/* 000068 */ 				var e = __except0__;
/* 000077 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000078 */ 					var error_message = (function () {
/* 000078 */ 						var __accu0__ = self.environment;
/* 000078 */ 						return __call__ (__accu0__.get_parse_error_message, __accu0__, e);
/* 000078 */ 					}) ();
/* 000079 */ 					(function () {
/* 000079 */ 						var __accu0__ = logger;
/* 000079 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.llm_text));
/* 000079 */ 					}) ();
/* 000079 */ 				}
/* 000083 */ 				__except0__.__cause__ = null;
/* 000083 */ 				throw __except0__;
/* 000083 */ 			}
/* 000083 */ 			else if (isinstance (__except0__, Exception)) {
/* 000083 */ 				var e = __except0__;
/* 000085 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000086 */ 					(function () {
/* 000086 */ 						var __accu0__ = logger;
/* 000086 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.llm_text));
/* 000086 */ 					}) ();
/* 000086 */ 				}
/* 000088 */ 				__except0__.__cause__ = null;
/* 000088 */ 				throw __except0__;
/* 000088 */ 			}
/* 000088 */ 			else {
/* 000088 */ 				throw __except0__;
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 	});},
/* 000091 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000091 */ 		var kwargs = dict ();
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 				delete kwargs.__kwargtrans__;
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000092 */ 		var d = __call__ (dict, null, __kwargtrans__ ({is_block_level: self.is_block_level, resource_info: self.resource_info, standalone_mode: self.standalone_mode, silent: self.silent, what: self.what}));
/* 000099 */ 		(function () {
/* 000099 */ 			var __accu0__ = d;
/* 000099 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000099 */ 		}) ();
/* 000100 */ 		return d;
/* 000100 */ 	});},
/* 000103 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000103 */ 		var kwargs = dict ();
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 				delete kwargs.__kwargtrans__;
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return (function () {
/* 000104 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000104 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000104 */ 		}) ();
/* 000104 */ 	});},
/* 000109 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000110 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000111 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the LLMFragment constructor)');
/* 000111 */ 			__except0__.__cause__ = null;
/* 000111 */ 			throw __except0__;
/* 000111 */ 		}
/* 000116 */ 		var render_context = __call__ (LLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000117 */ 		return (function () {
/* 000117 */ 			var __accu0__ = self;
/* 000117 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000117 */ 		}) ();
/* 000117 */ 	});},
/* 000120 */ 	get parse () {return __getcm__ (this, function (cls, llm_text, environment) {
/* 000120 */ 		var standalone_mode = false;
/* 000120 */ 		var resource_info = null;
/* 000120 */ 		var is_block_level = null;
/* 000120 */ 		var what = null;
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000123 */ 		// pass;
/* 000127 */ 		var latex_walker = (function () {
/* 000127 */ 			var __accu0__ = environment;
/* 000127 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, llm_text, __kwargtrans__ ({resource_info: resource_info, standalone_mode: standalone_mode, what: what}));
/* 000127 */ 		}) ();
/* 000134 */ 		var parsing_state = (function () {
/* 000134 */ 			var __accu0__ = latex_walker;
/* 000134 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000134 */ 		}) ();
/* 000136 */ 		var __left0__ = (function () {
/* 000136 */ 			var __accu0__ = latex_walker;
/* 000137 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000137 */ 				var __accu1__ = latexnodes_parsers;
/* 000137 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000137 */ 			}) (), __kwargtrans__ ({parsing_state: parsing_state}));
/* 000137 */ 		}) ();
/* 000137 */ 		var nodes = __left0__ [0];
/* 000137 */ 		var _ = __left0__ [1];
/* 000141 */ 		return tuple ([latex_walker, nodes]);
/* 000141 */ 	});},
/* 000144 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		(function () {
/* 000145 */ 			var __accu0__ = node_visitor;
/* 000145 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000145 */ 		}) ();
/* 000145 */ 	});},
/* 000148 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000149 */ 		return __gt__ (__call__ (len, null, self.llm_text), 0);
/* 000149 */ 	});},
/* 000151 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000152 */ 		var thellmtext = self.llm_text;
/* 000153 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000154 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000154 */ 		}
/* 000155 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000155 */ 	});},
/* 000158 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000159 */ 		var new_fragment = (function () {
/* 000159 */ 			var __accu0__ = self.environment;
/* 000160 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000160 */ 				var __accu1__ = self.llm_text;
/* 000160 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000161 */ 			}) (), __kwargtrans__ ((function () {
/* 000161 */ 				var __accu1__ = self;
/* 000161 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000161 */ 			}) ()));
/* 000161 */ 		}) ();
/* 000163 */ 		return new_fragment;
/* 000163 */ 	});},
/* 000165 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000170 */ 		var nodelists_paragraphs = (function () {
/* 000170 */ 			var __accu0__ = self.nodes;
/* 000170 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000170 */ 				if (arguments.length) {
/* 000170 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 							switch (__attrib0__) {
/* 000170 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 							}
/* 000170 */ 						}
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 				else {
/* 000170 */ 				}
/* 000171 */ 				return __t__ ((function () {
/* 000171 */ 					var __accu1__ = n;
/* 000171 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000171 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000171 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000171 */ 		}) ();
/* 000176 */ 		var nodelists_paragraphs = (function () {
/* 000176 */ 			var __accu0__ = [];
/* 000176 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000176 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000179 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000179 */ 					(function () {
/* 000179 */ 						var __accu1__ = __accu0__;
/* 000179 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000179 */ 					}) ();
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 			return __accu0__;
/* 000179 */ 		}) ();
/* 000182 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000183 */ 			return self;
/* 000183 */ 		}
/* 000185 */ 		// pass;
/* 000189 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000191 */ 		// pass;
/* 000194 */ 		return (function () {
/* 000194 */ 			var __accu0__ = self.environment;
/* 000196 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000196 */ 				var __accu1__ = self;
/* 000196 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000196 */ 			}) ())));
/* 000196 */ 		}) ();
/* 000196 */ 	});},
/* 000199 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000199 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000199 */ 			var min_chars = null;
/* 000199 */ 		};
/* 000199 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000199 */ 			var truncation_marker = ' …';
/* 000199 */ 		};
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000201 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000204 */ 		var newnodes = (function () {
/* 000204 */ 			var __accu0__ = trunc;
/* 000204 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000204 */ 		}) ();
/* 000206 */ 		return (function () {
/* 000206 */ 			var __accu0__ = self.environment;
/* 000208 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000208 */ 				var __accu1__ = self;
/* 000208 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000208 */ 			}) ())));
/* 000208 */ 		}) ();
/* 000208 */ 	});}
/* 000208 */ });
/* 000218 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000218 */ 	__module__: __name__,
/* 000219 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000219 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000219 */ 			var min_chars = null;
/* 000219 */ 		};
/* 000219 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000219 */ 			var truncation_marker = null;
/* 000219 */ 		};
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000221 */ 		self.chars = chars;
/* 000222 */ 		self.min_chars = min_chars;
/* 000223 */ 		self.truncation_marker = truncation_marker;
/* 000225 */ 		self.count = 0;
/* 000225 */ 	});},
/* 000227 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		self.count = 0;
/* 000229 */ 		var newnodes = (function () {
/* 000229 */ 			var __accu0__ = self;
/* 000229 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000229 */ 		}) ();
/* 000230 */ 		if (__t__ (newnodes === null)) {
/* 000231 */ 			return nodes;
/* 000231 */ 		}
/* 000232 */ 		return newnodes;
/* 000232 */ 	});},
/* 000234 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000235 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000235 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000235 */ 			var j = __left0__ [0];
/* 000235 */ 			var node = __left0__ [1];
/* 000236 */ 			var newnode = (function () {
/* 000236 */ 				var __accu0__ = self;
/* 000236 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000236 */ 			}) ();
/* 000237 */ 			if (__t__ (newnode !== null)) {
/* 000238 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000239 */ 				if (__t__ (newnode !== true)) {
/* 000240 */ 					var newnodes = __call__ (__iadd__, null, newnodes, [newnode]);
/* 000240 */ 				}
/* 000241 */ 				return (function () {
/* 000241 */ 					var __accu0__ = nodes.latex_walker;
/* 000241 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000241 */ 				}) ();
/* 000241 */ 			}
/* 000241 */ 		}
/* 000246 */ 		return null;
/* 000246 */ 	});},
/* 000248 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		if (__t__ ((function () {
/* 000249 */ 			var __accu0__ = node;
/* 000249 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000249 */ 		}) ())) {
/* 000250 */ 			return (function () {
/* 000250 */ 				var __accu0__ = self;
/* 000250 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000250 */ 			}) ();
/* 000250 */ 		}
/* 000252 */ 		if (__t__ ((function () {
/* 000252 */ 			var __accu0__ = node;
/* 000252 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000252 */ 		}) ())) {
/* 000253 */ 			return (function () {
/* 000253 */ 				var __accu0__ = self;
/* 000253 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000253 */ 			}) ();
/* 000253 */ 		}
/* 000255 */ 		if (__t__ ((function () {
/* 000255 */ 			var __accu0__ = node;
/* 000255 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000255 */ 		}) ())) {
/* 000256 */ 			return (function () {
/* 000256 */ 				var __accu0__ = self;
/* 000256 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000256 */ 			}) ();
/* 000256 */ 		}
/* 000258 */ 		if (__t__ ((function () {
/* 000258 */ 			var __accu0__ = node;
/* 000258 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000258 */ 		}) ())) {
/* 000259 */ 			return (function () {
/* 000259 */ 				var __accu0__ = self;
/* 000259 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000261 */ 		return (function () {
/* 000261 */ 			var __accu0__ = self;
/* 000261 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000261 */ 		}) ();
/* 000261 */ 	});},
/* 000263 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		var groupnodelist = (function () {
/* 000264 */ 			var __accu0__ = self;
/* 000264 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000264 */ 		}) ();
/* 000265 */ 		if (__t__ (groupnodelist === null)) {
/* 000267 */ 			return ;
/* 000267 */ 		}
/* 000269 */ 		var groupnode = (function () {
/* 000269 */ 			var __accu0__ = node.latex_walker;
/* 000269 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000269 */ 		}) ();
/* 000277 */ 		return groupnode;
/* 000277 */ 	});},
/* 000280 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000281 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000282 */ 			return (function () {
/* 000282 */ 				var __accu0__ = self;
/* 000282 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000282 */ 			}) ();
/* 000282 */ 		}
/* 000283 */ 		return (function () {
/* 000283 */ 			var __accu0__ = self;
/* 000283 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000283 */ 		}) ();
/* 000283 */ 	});},
/* 000285 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
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
/* 000288 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000289 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000291 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000291 */ 				var __accu0__ = [];
/* 000291 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000291 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000291 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000291 */ 					var j = __left0__ [0];
/* 000291 */ 					var arg = __left0__ [1];
/* 000291 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000292 */ 						(function () {
/* 000292 */ 							var __accu1__ = __accu0__;
/* 000292 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000292 */ 						}) ();
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 				return py_iter (__accu0__);
/* 000292 */ 			}) ());
/* 000294 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000295 */ 			var text_arg_new = (function () {
/* 000295 */ 				var __accu0__ = self;
/* 000295 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000295 */ 			}) ();
/* 000296 */ 			if (__t__ (text_arg_new)) {
/* 000297 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000300 */ 				if (__t__ (text_arg_new !== null)) {
/* 000302 */ 					var newmacronode = (function () {
/* 000302 */ 						var __accu0__ = node.latex_walker;
/* 000306 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000306 */ 							var __accu1__ = latexnodes;
/* 000306 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000306 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000306 */ 					}) ();
/* 000317 */ 					var newmacronode = (function () {
/* 000317 */ 						var __accu0__ = node.spec;
/* 000317 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000317 */ 					}) ();
/* 000318 */ 					return newmacronode;
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000321 */ 		return null;
/* 000321 */ 	});},
/* 000323 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
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
/* 000324 */ 		var nodelist = (function () {
/* 000324 */ 			var __accu0__ = self;
/* 000324 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000324 */ 		}) ();
/* 000325 */ 		if (__t__ (nodelist === null)) {
/* 000327 */ 			return ;
/* 000327 */ 		}
/* 000329 */ 		var newnode = (function () {
/* 000329 */ 			var __accu0__ = node.latex_walker;
/* 000329 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000329 */ 		}) ();
/* 000338 */ 		var newnode = (function () {
/* 000338 */ 			var __accu0__ = node.spec;
/* 000338 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000338 */ 		}) ();
/* 000339 */ 		return newnode;
/* 000339 */ 	});},
/* 000341 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000344 */ 		var my_length = __call__ (len, null, (function () {
/* 000344 */ 			var __accu0__ = node;
/* 000344 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000344 */ 		}) ());
/* 000345 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000347 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000348 */ 			return null;
/* 000348 */ 		}
/* 000350 */ 		return true;
/* 000350 */ 	});},
/* 000352 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000354 */ 		var estimated_length = (function () {
/* 000354 */ 			var __accu0__ = self;
/* 000354 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000354 */ 		}) ();
/* 000356 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000358 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000359 */ 			return null;
/* 000359 */ 		}
/* 000362 */ 		if (__t__ ((function () {
/* 000362 */ 			var __accu0__ = node;
/* 000362 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000362 */ 		}) ())) {
/* 000364 */ 			var chars = node.chars;
/* 000365 */ 			var last_break_pos = 0;
/* 000366 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000366 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000366 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000366 */ 				var j = __left0__ [0];
/* 000366 */ 				var c = __left0__ [1];
/* 000367 */ 				if (__t__ (!__t__ (((function () {
/* 000367 */ 					var __accu0__ = c;
/* 000367 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000367 */ 				}) ())))) {
/* 000368 */ 					var last_break_pos = j;
/* 000368 */ 				}
/* 000369 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000370 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000370 */ 						break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 				continue;
/* 000370 */ 			}
/* 000376 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000378 */ 			var new_node = (function () {
/* 000378 */ 				var __accu0__ = node.latex_walker;
/* 000378 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000378 */ 			}) ();
/* 000385 */ 			return new_node;
/* 000385 */ 		}
/* 000389 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000391 */ 			return node;
/* 000391 */ 		}
/* 000391 */ 	});},
/* 000395 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000397 */ 		if (__t__ ((function () {
/* 000397 */ 			var __accu0__ = node;
/* 000397 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000397 */ 		}) ())) {
/* 000398 */ 			return __call__ (len, null, node.chars);
/* 000398 */ 		}
/* 000400 */ 		if (__t__ ((function () {
/* 000400 */ 			var __accu0__ = node;
/* 000400 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000400 */ 		}) ())) {
/* 000405 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000405 */ 				var __accu0__ = node;
/* 000405 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000405 */ 			}) ()), 2)), 3);
/* 000405 */ 		}
/* 000407 */ 		if (__t__ ((function () {
/* 000407 */ 			var __accu0__ = node;
/* 000407 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000407 */ 		}) ())) {
/* 000408 */ 			return 0;
/* 000408 */ 		}
/* 000408 */ 	});}
/* 000408 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map