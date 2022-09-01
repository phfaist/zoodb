/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:22:59
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
/* 000006 */ export {LLMStandaloneModeRenderContext, latexnodes, latexnodes_nodes, latexnodes_parsers};
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
/* 000037 */ 		var tolerant_parsing = false;
/* 000037 */ 		var what = '(unknown)';
/* 000037 */ 		var silent = false;
/* 000037 */ 		var parsing_mode = null;
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
/* 000037 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000051 */ 		self.llm_text = llm_text;
/* 000052 */ 		self.environment = environment;
/* 000054 */ 		self.is_block_level = is_block_level;
/* 000055 */ 		self.resource_info = resource_info;
/* 000056 */ 		self.standalone_mode = standalone_mode;
/* 000057 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000058 */ 		self.what = what;
/* 000059 */ 		self.silent = silent;
/* 000060 */ 		self.parsing_mode = parsing_mode;
/* 000062 */ 		if (__t__ (__call__ (isinstance, null, llm_text, latexnodes_nodes.LatexNodeList))) {
/* 000065 */ 			self.nodes = self.llm_text;
/* 000066 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000067 */ 			self.llm_text = (function () {
/* 000067 */ 				var __accu0__ = self.nodes;
/* 000067 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000067 */ 			}) ();
/* 000068 */ 			return ;
/* 000068 */ 		}
/* 000070 */ 		try {
/* 000072 */ 			var __left0__ = (function () {
/* 000072 */ 				var __accu0__ = LLMFragment;
/* 000072 */ 				return __call__ (__accu0__.parse, __accu0__, self.llm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode}));
/* 000072 */ 			}) ();
/* 000072 */ 			self.latex_walker = __left0__ [0];
/* 000072 */ 			self.nodes = __left0__ [1];
/* 000072 */ 		}
/* 000072 */ 		catch (__except0__) {
/* 000072 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerParseError)) {
/* 000072 */ 				var e = __except0__;
/* 000083 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000084 */ 					var error_message = (function () {
/* 000084 */ 						var __accu0__ = self.environment;
/* 000084 */ 						return __call__ (__accu0__.get_parse_error_message, __accu0__, e);
/* 000084 */ 					}) ();
/* 000085 */ 					(function () {
/* 000085 */ 						var __accu0__ = logger;
/* 000085 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.llm_text));
/* 000085 */ 					}) ();
/* 000085 */ 				}
/* 000089 */ 				__except0__.__cause__ = null;
/* 000089 */ 				throw __except0__;
/* 000089 */ 			}
/* 000089 */ 			else if (isinstance (__except0__, Exception)) {
/* 000089 */ 				var e = __except0__;
/* 000091 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000092 */ 					(function () {
/* 000092 */ 						var __accu0__ = logger;
/* 000092 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.llm_text));
/* 000092 */ 					}) ();
/* 000092 */ 				}
/* 000094 */ 				__except0__.__cause__ = null;
/* 000094 */ 				throw __except0__;
/* 000094 */ 			}
/* 000094 */ 			else {
/* 000094 */ 				throw __except0__;
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 	});},
/* 000097 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000097 */ 		var kwargs = dict ();
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 				delete kwargs.__kwargtrans__;
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		var d = __call__ (dict, null, __kwargtrans__ ({is_block_level: self.is_block_level, resource_info: self.resource_info, standalone_mode: self.standalone_mode, silent: self.silent, what: self.what, parsing_mode: self.parsing_mode}));
/* 000106 */ 		(function () {
/* 000106 */ 			var __accu0__ = d;
/* 000106 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000106 */ 		}) ();
/* 000107 */ 		return d;
/* 000107 */ 	});},
/* 000110 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000110 */ 		var kwargs = dict ();
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 				delete kwargs.__kwargtrans__;
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		return (function () {
/* 000111 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000111 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000111 */ 		}) ();
/* 000111 */ 	});},
/* 000116 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000118 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the LLMFragment constructor)');
/* 000118 */ 			__except0__.__cause__ = null;
/* 000118 */ 			throw __except0__;
/* 000118 */ 		}
/* 000123 */ 		var render_context = __call__ (LLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000124 */ 		return (function () {
/* 000124 */ 			var __accu0__ = self;
/* 000124 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000124 */ 		}) ();
/* 000124 */ 	});},
/* 000127 */ 	get parse () {return __getcm__ (this, function (cls, llm_text, environment) {
/* 000127 */ 		var standalone_mode = false;
/* 000127 */ 		var tolerant_parsing = null;
/* 000127 */ 		var is_block_level = null;
/* 000127 */ 		var parsing_mode = null;
/* 000127 */ 		var resource_info = null;
/* 000127 */ 		var what = null;
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000133 */ 		// pass;
/* 000137 */ 		var latex_walker = (function () {
/* 000137 */ 			var __accu0__ = environment;
/* 000137 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, llm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what}));
/* 000137 */ 		}) ();
/* 000147 */ 		var __left0__ = (function () {
/* 000147 */ 			var __accu0__ = latex_walker;
/* 000148 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000148 */ 				var __accu1__ = latexnodes_parsers;
/* 000148 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000148 */ 			}) ());
/* 000148 */ 		}) ();
/* 000148 */ 		var nodes = __left0__ [0];
/* 000148 */ 		var _ = __left0__ [1];
/* 000151 */ 		return tuple ([latex_walker, nodes]);
/* 000151 */ 	});},
/* 000154 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000155 */ 		(function () {
/* 000155 */ 			var __accu0__ = node_visitor;
/* 000155 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000155 */ 		}) ();
/* 000155 */ 	});},
/* 000158 */ 	get __bool__ () {return __get__ (this, function (self) {
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
/* 000159 */ 		return __gt__ (__call__ (len, null, self.llm_text), 0);
/* 000159 */ 	});},
/* 000161 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		var thellmtext = self.llm_text;
/* 000163 */ 		if (__t__ (__gt__ (__call__ (len, null, thellmtext), 50))) {
/* 000164 */ 			var thellmtext = __add__ (__getslice__ (thellmtext, 0, 49, 1), '…');
/* 000164 */ 		}
/* 000165 */ 		return '<{} {}>'.format (self.__class__.__name__, thellmtext);
/* 000165 */ 	});},
/* 000168 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000169 */ 		var new_fragment = (function () {
/* 000169 */ 			var __accu0__ = self.environment;
/* 000170 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000170 */ 				var __accu1__ = self.llm_text;
/* 000170 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000171 */ 			}) (), __kwargtrans__ ((function () {
/* 000171 */ 				var __accu1__ = self;
/* 000171 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000171 */ 			}) ()));
/* 000171 */ 		}) ();
/* 000173 */ 		return new_fragment;
/* 000173 */ 	});},
/* 000175 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000180 */ 		var nodelists_paragraphs = (function () {
/* 000180 */ 			var __accu0__ = self.nodes;
/* 000180 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000180 */ 				if (arguments.length) {
/* 000180 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 							switch (__attrib0__) {
/* 000180 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							}
/* 000180 */ 						}
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 				else {
/* 000180 */ 				}
/* 000181 */ 				return __t__ ((function () {
/* 000181 */ 					var __accu1__ = n;
/* 000181 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000181 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000181 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000181 */ 		}) ();
/* 000186 */ 		var nodelists_paragraphs = (function () {
/* 000186 */ 			var __accu0__ = [];
/* 000186 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000186 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000188 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000189 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000189 */ 					(function () {
/* 000189 */ 						var __accu1__ = __accu0__;
/* 000189 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000189 */ 					}) ();
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 			return __accu0__;
/* 000189 */ 		}) ();
/* 000192 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000193 */ 			return self;
/* 000193 */ 		}
/* 000195 */ 		// pass;
/* 000199 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000201 */ 		// pass;
/* 000204 */ 		return (function () {
/* 000204 */ 			var __accu0__ = self.environment;
/* 000206 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: thenodes}, (function () {
/* 000206 */ 				var __accu1__ = self;
/* 000206 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000206 */ 			}) ())));
/* 000206 */ 		}) ();
/* 000206 */ 	});},
/* 000209 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000209 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var min_chars = null;
/* 000209 */ 		};
/* 000209 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var truncation_marker = ' …';
/* 000209 */ 		};
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000211 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000214 */ 		var newnodes = (function () {
/* 000214 */ 			var __accu0__ = trunc;
/* 000214 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000214 */ 		}) ();
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = self.environment;
/* 000218 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({llm_text: newnodes}, (function () {
/* 000218 */ 				var __accu1__ = self;
/* 000218 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000218 */ 			}) ())));
/* 000218 */ 		}) ();
/* 000218 */ 	});}
/* 000218 */ });
/* 000228 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000228 */ 	__module__: __name__,
/* 000229 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000229 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000229 */ 			var min_chars = null;
/* 000229 */ 		};
/* 000229 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000229 */ 			var truncation_marker = null;
/* 000229 */ 		};
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000231 */ 		self.chars = chars;
/* 000232 */ 		self.min_chars = min_chars;
/* 000233 */ 		self.truncation_marker = truncation_marker;
/* 000235 */ 		self.count = 0;
/* 000235 */ 	});},
/* 000237 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		self.count = 0;
/* 000239 */ 		var newnodes = (function () {
/* 000239 */ 			var __accu0__ = self;
/* 000239 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000239 */ 		}) ();
/* 000240 */ 		if (__t__ (newnodes === null)) {
/* 000241 */ 			return nodes;
/* 000241 */ 		}
/* 000242 */ 		return newnodes;
/* 000242 */ 	});},
/* 000244 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000245 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000245 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000245 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000245 */ 			var j = __left0__ [0];
/* 000245 */ 			var node = __left0__ [1];
/* 000246 */ 			var newnode = (function () {
/* 000246 */ 				var __accu0__ = self;
/* 000246 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000246 */ 			}) ();
/* 000247 */ 			if (__t__ (newnode !== null)) {
/* 000248 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000249 */ 				if (__t__ (newnode !== true)) {
/* 000250 */ 					var newnodes = __call__ (__iadd__, null, newnodes, [newnode]);
/* 000250 */ 				}
/* 000251 */ 				return (function () {
/* 000251 */ 					var __accu0__ = nodes.latex_walker;
/* 000251 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000251 */ 				}) ();
/* 000251 */ 			}
/* 000251 */ 		}
/* 000256 */ 		return null;
/* 000256 */ 	});},
/* 000258 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		if (__t__ ((function () {
/* 000259 */ 			var __accu0__ = node;
/* 000259 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000259 */ 		}) ())) {
/* 000260 */ 			return (function () {
/* 000260 */ 				var __accu0__ = self;
/* 000260 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000260 */ 			}) ();
/* 000260 */ 		}
/* 000262 */ 		if (__t__ ((function () {
/* 000262 */ 			var __accu0__ = node;
/* 000262 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000262 */ 		}) ())) {
/* 000263 */ 			return (function () {
/* 000263 */ 				var __accu0__ = self;
/* 000263 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000263 */ 			}) ();
/* 000263 */ 		}
/* 000265 */ 		if (__t__ ((function () {
/* 000265 */ 			var __accu0__ = node;
/* 000265 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000265 */ 		}) ())) {
/* 000266 */ 			return (function () {
/* 000266 */ 				var __accu0__ = self;
/* 000266 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000268 */ 		if (__t__ ((function () {
/* 000268 */ 			var __accu0__ = node;
/* 000268 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000268 */ 		}) ())) {
/* 000269 */ 			return (function () {
/* 000269 */ 				var __accu0__ = self;
/* 000269 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000269 */ 			}) ();
/* 000269 */ 		}
/* 000271 */ 		return (function () {
/* 000271 */ 			var __accu0__ = self;
/* 000271 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000271 */ 		}) ();
/* 000271 */ 	});},
/* 000273 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000274 */ 		var groupnodelist = (function () {
/* 000274 */ 			var __accu0__ = self;
/* 000274 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000274 */ 		}) ();
/* 000275 */ 		if (__t__ (groupnodelist === null)) {
/* 000277 */ 			return ;
/* 000277 */ 		}
/* 000279 */ 		var groupnode = (function () {
/* 000279 */ 			var __accu0__ = node.latex_walker;
/* 000279 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000279 */ 		}) ();
/* 000287 */ 		return groupnode;
/* 000287 */ 	});},
/* 000290 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000291 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000292 */ 			return (function () {
/* 000292 */ 				var __accu0__ = self;
/* 000292 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000292 */ 			}) ();
/* 000292 */ 		}
/* 000293 */ 		return (function () {
/* 000293 */ 			var __accu0__ = self;
/* 000293 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000293 */ 		}) ();
/* 000293 */ 	});},
/* 000295 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000298 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_llm_main_text_argument'))) {
/* 000299 */ 			var main_text_argname = node.spec._llm_main_text_argument;
/* 000301 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000301 */ 				var __accu0__ = [];
/* 000301 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000301 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000301 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000301 */ 					var j = __left0__ [0];
/* 000301 */ 					var arg = __left0__ [1];
/* 000301 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000302 */ 						(function () {
/* 000302 */ 							var __accu1__ = __accu0__;
/* 000302 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000302 */ 						}) ();
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 				return py_iter (__accu0__);
/* 000302 */ 			}) ());
/* 000304 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000305 */ 			var text_arg_new = (function () {
/* 000305 */ 				var __accu0__ = self;
/* 000305 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000305 */ 			}) ();
/* 000306 */ 			if (__t__ (text_arg_new)) {
/* 000307 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000310 */ 				if (__t__ (text_arg_new !== null)) {
/* 000312 */ 					var newmacronode = (function () {
/* 000312 */ 						var __accu0__ = node.latex_walker;
/* 000316 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000316 */ 							var __accu1__ = latexnodes;
/* 000316 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000316 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000316 */ 					}) ();
/* 000327 */ 					var newmacronode = (function () {
/* 000327 */ 						var __accu0__ = node.spec;
/* 000327 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000327 */ 					}) ();
/* 000328 */ 					return newmacronode;
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000331 */ 		return null;
/* 000331 */ 	});},
/* 000333 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000334 */ 		var nodelist = (function () {
/* 000334 */ 			var __accu0__ = self;
/* 000334 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000334 */ 		}) ();
/* 000335 */ 		if (__t__ (nodelist === null)) {
/* 000337 */ 			return ;
/* 000337 */ 		}
/* 000339 */ 		var newnode = (function () {
/* 000339 */ 			var __accu0__ = node.latex_walker;
/* 000339 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000339 */ 		}) ();
/* 000348 */ 		var newnode = (function () {
/* 000348 */ 			var __accu0__ = node.spec;
/* 000348 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000348 */ 		}) ();
/* 000349 */ 		return newnode;
/* 000349 */ 	});},
/* 000351 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000354 */ 		var my_length = __call__ (len, null, (function () {
/* 000354 */ 			var __accu0__ = node;
/* 000354 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000354 */ 		}) ());
/* 000355 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000357 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000358 */ 			return null;
/* 000358 */ 		}
/* 000360 */ 		return true;
/* 000360 */ 	});},
/* 000362 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000364 */ 		var estimated_length = (function () {
/* 000364 */ 			var __accu0__ = self;
/* 000364 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000364 */ 		}) ();
/* 000366 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000368 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000369 */ 			return null;
/* 000369 */ 		}
/* 000372 */ 		if (__t__ ((function () {
/* 000372 */ 			var __accu0__ = node;
/* 000372 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000372 */ 		}) ())) {
/* 000374 */ 			var chars = node.chars;
/* 000375 */ 			var last_break_pos = 0;
/* 000376 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000376 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000376 */ 				var j = __left0__ [0];
/* 000376 */ 				var c = __left0__ [1];
/* 000377 */ 				if (__t__ (!__t__ (((function () {
/* 000377 */ 					var __accu0__ = c;
/* 000377 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000377 */ 				}) ())))) {
/* 000378 */ 					var last_break_pos = j;
/* 000378 */ 				}
/* 000379 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000380 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000380 */ 						break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 				continue;
/* 000380 */ 			}
/* 000386 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000388 */ 			var new_node = (function () {
/* 000388 */ 				var __accu0__ = node.latex_walker;
/* 000388 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000388 */ 			}) ();
/* 000395 */ 			return new_node;
/* 000395 */ 		}
/* 000399 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000401 */ 			return node;
/* 000401 */ 		}
/* 000401 */ 	});},
/* 000405 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000407 */ 		if (__t__ ((function () {
/* 000407 */ 			var __accu0__ = node;
/* 000407 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000407 */ 		}) ())) {
/* 000408 */ 			return __call__ (len, null, node.chars);
/* 000408 */ 		}
/* 000410 */ 		if (__t__ ((function () {
/* 000410 */ 			var __accu0__ = node;
/* 000410 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000410 */ 		}) ())) {
/* 000415 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000415 */ 				var __accu0__ = node;
/* 000415 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000415 */ 			}) ()), 2)), 3);
/* 000415 */ 		}
/* 000417 */ 		if (__t__ ((function () {
/* 000417 */ 			var __accu0__ = node;
/* 000417 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000417 */ 		}) ())) {
/* 000418 */ 			return 0;
/* 000418 */ 		}
/* 000418 */ 	});}
/* 000418 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmfragment.map