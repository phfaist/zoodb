/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:23
/* 000018 */ var logging = {};
/* 000018 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {FLMStandaloneModeRenderContext} from './flm.flmrendercontext.js';
/* 000023 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000022 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000021 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000018 */ import * as __module_logging__ from './logging.js';
/* 000018 */ __nest__ (logging, '', __module_logging__);
/* 000018 */ export {FLMStandaloneModeRenderContext, latexnodes_nodes, latexnodes_parsers, latexnodes};
/* 000001 */ var __name__ = 'flm.flmfragment';
/* 000019 */ export var logger = (function () {
/* 000019 */ 	var __accu0__ = logging;
/* 000019 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000019 */ }) ();
/* 000031 */ export var _flmfragment_attribute_fields = tuple (['is_block_level', 'resource_info', 'standalone_mode', 'silent', 'what', 'parsing_mode']);
/* 000041 */ export var FLMFragment =  __class__ ('FLMFragment', [object], {
/* 000041 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, flm_text, environment) {
/* 000078 */ 		var is_block_level = null;
/* 000078 */ 		var resource_info = null;
/* 000078 */ 		var standalone_mode = false;
/* 000078 */ 		var tolerant_parsing = false;
/* 000078 */ 		var what = '(unknown)';
/* 000078 */ 		var silent = false;
/* 000078 */ 		var parsing_mode = null;
/* 000078 */ 		var input_lineno_colno_offsets = null;
/* 000078 */ 		var _flm_text_if_loading_nodes = null;
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case '_flm_text_if_loading_nodes': var _flm_text_if_loading_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000118 */ 		self.flm_text = flm_text;
/* 000119 */ 		self.environment = environment;
/* 000121 */ 		self.is_block_level = is_block_level;
/* 000122 */ 		self.resource_info = resource_info;
/* 000123 */ 		self.standalone_mode = standalone_mode;
/* 000124 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000125 */ 		self.what = what;
/* 000126 */ 		self.silent = silent;
/* 000127 */ 		self.parsing_mode = parsing_mode;
/* 000129 */ 		if (__t__ (__call__ (isinstance, null, flm_text, latexnodes_nodes.LatexNodeList))) {
/* 000132 */ 			self.nodes = self.flm_text;
/* 000133 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000134 */ 			if (__t__ (_flm_text_if_loading_nodes !== null)) {
/* 000135 */ 				self.flm_text = _flm_text_if_loading_nodes;
/* 000135 */ 			}
/* 000136 */ 			else {
/* 000137 */ 				self.flm_text = (function () {
/* 000137 */ 					var __accu0__ = self.nodes;
/* 000137 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000137 */ 				}) ();
/* 000137 */ 			}
/* 000138 */ 			return ;
/* 000138 */ 		}
/* 000140 */ 		try {
/* 000142 */ 			var __left0__ = (function () {
/* 000142 */ 				var __accu0__ = FLMFragment;
/* 000142 */ 				return __call__ (__accu0__.parse, __accu0__, self.flm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000142 */ 			}) ();
/* 000142 */ 			self.latex_walker = __left0__ [0];
/* 000142 */ 			self.nodes = __left0__ [1];
/* 000142 */ 		}
/* 000142 */ 		catch (__except0__) {
/* 000142 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerLocatedError)) {
/* 000142 */ 				var e = __except0__;
/* 000155 */ 				e.flm_fragment_resource_info = self.resource_info;
/* 000156 */ 				e.flm_fragment_what = self.what;
/* 000158 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'open_contexts')))) || !__t__ ((e.open_contexts)))) {
/* 000159 */ 					e.open_contexts = [];
/* 000159 */ 				}
/* 000160 */ 				(function () {
/* 000160 */ 					var __accu0__ = e.open_contexts;
/* 000161 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([__add__ ('parsing ', __call__ (str, null, self.what)), null, '', null]));
/* 000161 */ 				}) ();
/* 000166 */ 				var error_message = (function () {
/* 000166 */ 					var __accu0__ = self.environment;
/* 000166 */ 					return __call__ (__accu0__.get_located_error_message, __accu0__, e);
/* 000166 */ 				}) ();
/* 000167 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000168 */ 					var errfmt = (function () {
/* 000168 */ 						var __accu0__ = latexnodes;
/* 000168 */ 						return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, e);
/* 000168 */ 					}) ();
/* 000169 */ 					var errmsg = (function () {
/* 000169 */ 						var __accu0__ = errfmt;
/* 000169 */ 						return __call__ (__accu0__.to_display_string, __accu0__);
/* 000169 */ 					}) ();
/* 000170 */ 					if (__t__ (error_message !== null)) {
/* 000171 */ 						var errmsg = __add__ (__add__ (error_message, '\n'), errmsg);
/* 000171 */ 					}
/* 000172 */ 					(function () {
/* 000172 */ 						var __accu0__ = logger;
/* 000174 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, errmsg, __call__ (_abbrevtext, null, self.flm_text)));
/* 000174 */ 					}) ();
/* 000174 */ 				}
/* 000176 */ 				if (__t__ (error_message !== null)) {
/* 000177 */ 					e.msg = error_message;
/* 000177 */ 				}
/* 000178 */ 				__except0__.__cause__ = null;
/* 000178 */ 				throw __except0__;
/* 000178 */ 			}
/* 000178 */ 			else if (isinstance (__except0__, Exception)) {
/* 000178 */ 				var e = __except0__;
/* 000180 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu0__ = logger;
/* 000183 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, __call__ (_abbrevtext, null, self.flm_text)));
/* 000183 */ 					}) ();
/* 000183 */ 				}
/* 000185 */ 				__except0__.__cause__ = null;
/* 000185 */ 				throw __except0__;
/* 000185 */ 			}
/* 000185 */ 			else {
/* 000185 */ 				throw __except0__;
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 	});},
/* 000188 */ 	_attribute_fields: _flmfragment_attribute_fields,
/* 000190 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _flmfragment_attribute_fields))),
/* 000194 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000194 */ 		var kwargs = dict ();
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 				delete kwargs.__kwargtrans__;
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		var d = (function () {
/* 000195 */ 			var __accu0__ = [];
/* 000195 */ 			var __iterable0__ = self._attribute_fields;
/* 000195 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000197 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000197 */ 				(function () {
/* 000197 */ 					var __accu1__ = __accu0__;
/* 000196 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000196 */ 			return dict (__accu0__);
/* 000196 */ 		}) ();
/* 000199 */ 		(function () {
/* 000199 */ 			var __accu0__ = d;
/* 000199 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000199 */ 		}) ();
/* 000200 */ 		return d;
/* 000200 */ 	});},
/* 000203 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000203 */ 		var kwargs = dict ();
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 				delete kwargs.__kwargtrans__;
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000215 */ 		return (function () {
/* 000215 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000215 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000215 */ 		}) ();
/* 000215 */ 	});},
/* 000220 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000234 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000235 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the FLMFragment constructor)');
/* 000235 */ 			__except0__.__cause__ = null;
/* 000235 */ 			throw __except0__;
/* 000235 */ 		}
/* 000240 */ 		var render_context = __call__ (FLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000241 */ 		return (function () {
/* 000241 */ 			var __accu0__ = self;
/* 000241 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000241 */ 		}) ();
/* 000241 */ 	});},
/* 000244 */ 	get parse () {return __getcm__ (this, function (cls, flm_text, environment) {
/* 000244 */ 		var standalone_mode = false;
/* 000244 */ 		var tolerant_parsing = null;
/* 000244 */ 		var is_block_level = null;
/* 000244 */ 		var parsing_mode = null;
/* 000244 */ 		var resource_info = null;
/* 000244 */ 		var what = null;
/* 000244 */ 		var input_lineno_colno_offsets = null;
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000274 */ 		// pass;
/* 000278 */ 		var latex_walker = (function () {
/* 000278 */ 			var __accu0__ = environment;
/* 000278 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000278 */ 		}) ();
/* 000289 */ 		var __left0__ = (function () {
/* 000289 */ 			var __accu0__ = latex_walker;
/* 000290 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000290 */ 				var __accu1__ = latexnodes_parsers;
/* 000290 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000290 */ 			}) ());
/* 000290 */ 		}) ();
/* 000290 */ 		var nodes = __left0__ [0];
/* 000290 */ 		var _ = __left0__ [1];
/* 000293 */ 		return tuple ([latex_walker, nodes]);
/* 000293 */ 	});},
/* 000296 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000306 */ 		(function () {
/* 000306 */ 			var __accu0__ = node_visitor;
/* 000306 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000306 */ 		}) ();
/* 000306 */ 	});},
/* 000309 */ 	get is_empty () {return __get__ (this, function (self) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000316 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000316 */ 			var __accu0__ = self.flm_text;
/* 000316 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000316 */ 		}) ()), 0);
/* 000316 */ 	});},
/* 000318 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000319 */ 		return !__t__ (((function () {
/* 000319 */ 			var __accu0__ = self;
/* 000319 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000319 */ 		}) ()));
/* 000319 */ 	});},
/* 000321 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 		}
/* 000322 */ 		var theflmtext = self.flm_text;
/* 000323 */ 		if (__t__ (__gt__ (__call__ (len, null, theflmtext), 50))) {
/* 000324 */ 			var theflmtext = __add__ (__getslice__ (theflmtext, 0, 49, 1), '…');
/* 000324 */ 		}
/* 000325 */ 		return '<{} {}>'.format (self.__class__.__name__, __call__ (repr, null, theflmtext));
/* 000325 */ 	});},
/* 000328 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000333 */ 		var new_fragment = (function () {
/* 000333 */ 			var __accu0__ = self.environment;
/* 000334 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000334 */ 				var __accu1__ = self.flm_text;
/* 000334 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000335 */ 			}) (), __kwargtrans__ ((function () {
/* 000335 */ 				var __accu1__ = self;
/* 000335 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000335 */ 			}) ()));
/* 000335 */ 		}) ();
/* 000337 */ 		return new_fragment;
/* 000337 */ 	});},
/* 000339 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000344 */ 		var nodelists_paragraphs = (function () {
/* 000344 */ 			var __accu0__ = self.nodes;
/* 000344 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000344 */ 				if (arguments.length) {
/* 000344 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 							switch (__attrib0__) {
/* 000344 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 							}
/* 000344 */ 						}
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 				else {
/* 000344 */ 				}
/* 000345 */ 				return __t__ ((function () {
/* 000345 */ 					var __accu1__ = n;
/* 000345 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000345 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000345 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000345 */ 		}) ();
/* 000350 */ 		var nodelists_paragraphs = (function () {
/* 000350 */ 			var __accu0__ = [];
/* 000350 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000350 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000353 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000353 */ 					(function () {
/* 000353 */ 						var __accu1__ = __accu0__;
/* 000353 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000353 */ 					}) ();
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 			return __accu0__;
/* 000353 */ 		}) ();
/* 000356 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000357 */ 			return self;
/* 000357 */ 		}
/* 000359 */ 		// pass;
/* 000363 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000365 */ 		// pass;
/* 000368 */ 		return (function () {
/* 000368 */ 			var __accu0__ = self.environment;
/* 000370 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: thenodes}, (function () {
/* 000370 */ 				var __accu1__ = self;
/* 000370 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000370 */ 			}) ())));
/* 000370 */ 		}) ();
/* 000370 */ 	});},
/* 000373 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000373 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var min_chars = null;
/* 000373 */ 		};
/* 000373 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var truncation_marker = ' …';
/* 000373 */ 		};
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000389 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000392 */ 		var newnodes = (function () {
/* 000392 */ 			var __accu0__ = trunc;
/* 000392 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000392 */ 		}) ();
/* 000394 */ 		return (function () {
/* 000394 */ 			var __accu0__ = self.environment;
/* 000396 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: newnodes}, (function () {
/* 000396 */ 				var __accu1__ = self;
/* 000396 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000396 */ 			}) ())));
/* 000396 */ 		}) ();
/* 000396 */ 	});}
/* 000396 */ });
/* 000406 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000406 */ 	__module__: __name__,
/* 000407 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000407 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000407 */ 			var min_chars = null;
/* 000407 */ 		};
/* 000407 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000407 */ 			var truncation_marker = null;
/* 000407 */ 		};
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000408 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000409 */ 		self.chars = chars;
/* 000410 */ 		self.min_chars = min_chars;
/* 000411 */ 		self.truncation_marker = truncation_marker;
/* 000413 */ 		self.count = 0;
/* 000413 */ 	});},
/* 000415 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000416 */ 		self.count = 0;
/* 000417 */ 		var newnodes = (function () {
/* 000417 */ 			var __accu0__ = self;
/* 000417 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000417 */ 		}) ();
/* 000418 */ 		if (__t__ (newnodes === null)) {
/* 000419 */ 			return nodes;
/* 000419 */ 		}
/* 000420 */ 		return newnodes;
/* 000420 */ 	});},
/* 000422 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000423 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000423 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000423 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000423 */ 			var j = __left0__ [0];
/* 000423 */ 			var node = __left0__ [1];
/* 000424 */ 			var newnode = (function () {
/* 000424 */ 				var __accu0__ = self;
/* 000424 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000424 */ 			}) ();
/* 000425 */ 			if (__t__ (newnode !== null)) {
/* 000426 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000427 */ 				if (__t__ (newnode !== true)) {
/* 000428 */ 					(function () {
/* 000428 */ 						var __accu0__ = newnodes;
/* 000428 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000428 */ 					}) ();
/* 000428 */ 				}
/* 000429 */ 				return (function () {
/* 000429 */ 					var __accu0__ = nodes.latex_walker;
/* 000429 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000429 */ 				}) ();
/* 000429 */ 			}
/* 000429 */ 		}
/* 000434 */ 		return null;
/* 000434 */ 	});},
/* 000436 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		if (__t__ ((function () {
/* 000437 */ 			var __accu0__ = node;
/* 000437 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000437 */ 		}) ())) {
/* 000438 */ 			return (function () {
/* 000438 */ 				var __accu0__ = self;
/* 000438 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000438 */ 			}) ();
/* 000438 */ 		}
/* 000440 */ 		if (__t__ ((function () {
/* 000440 */ 			var __accu0__ = node;
/* 000440 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000440 */ 		}) ())) {
/* 000441 */ 			return (function () {
/* 000441 */ 				var __accu0__ = self;
/* 000441 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000441 */ 			}) ();
/* 000441 */ 		}
/* 000443 */ 		if (__t__ ((function () {
/* 000443 */ 			var __accu0__ = node;
/* 000443 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000443 */ 		}) ())) {
/* 000444 */ 			return (function () {
/* 000444 */ 				var __accu0__ = self;
/* 000444 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000444 */ 			}) ();
/* 000444 */ 		}
/* 000446 */ 		if (__t__ ((function () {
/* 000446 */ 			var __accu0__ = node;
/* 000446 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000446 */ 		}) ())) {
/* 000447 */ 			return (function () {
/* 000447 */ 				var __accu0__ = self;
/* 000447 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000447 */ 			}) ();
/* 000447 */ 		}
/* 000449 */ 		return (function () {
/* 000449 */ 			var __accu0__ = self;
/* 000449 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000449 */ 		}) ();
/* 000449 */ 	});},
/* 000451 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000451 */ 		if (arguments.length) {
/* 000451 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000451 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000451 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000451 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000451 */ 					switch (__attrib0__) {
/* 000451 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 					}
/* 000451 */ 				}
/* 000451 */ 			}
/* 000451 */ 		}
/* 000451 */ 		else {
/* 000451 */ 		}
/* 000452 */ 		var groupnodelist = (function () {
/* 000452 */ 			var __accu0__ = self;
/* 000452 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000452 */ 		}) ();
/* 000453 */ 		if (__t__ (groupnodelist === null)) {
/* 000455 */ 			return null;
/* 000455 */ 		}
/* 000457 */ 		var groupnode = (function () {
/* 000457 */ 			var __accu0__ = node.latex_walker;
/* 000457 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000457 */ 		}) ();
/* 000465 */ 		return groupnode;
/* 000465 */ 	});},
/* 000468 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000469 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000470 */ 			return (function () {
/* 000470 */ 				var __accu0__ = self;
/* 000470 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000470 */ 			}) ();
/* 000470 */ 		}
/* 000471 */ 		return (function () {
/* 000471 */ 			var __accu0__ = self;
/* 000471 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000471 */ 		}) ();
/* 000471 */ 	});},
/* 000473 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000476 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_flm_main_text_argument'))) {
/* 000477 */ 			var main_text_argname = node.spec._flm_main_text_argument;
/* 000479 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000479 */ 				var __accu0__ = [];
/* 000479 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000479 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000479 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000479 */ 					var j = __left0__ [0];
/* 000479 */ 					var arg = __left0__ [1];
/* 000479 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000480 */ 						(function () {
/* 000480 */ 							var __accu1__ = __accu0__;
/* 000480 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000480 */ 						}) ();
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 				return py_iter (__accu0__);
/* 000480 */ 			}) ());
/* 000482 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000483 */ 			var text_arg_new = (function () {
/* 000483 */ 				var __accu0__ = self;
/* 000483 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000483 */ 			}) ();
/* 000484 */ 			if (__t__ (text_arg_new)) {
/* 000485 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000488 */ 				if (__t__ (text_arg_new !== null)) {
/* 000490 */ 					var newmacronode = (function () {
/* 000490 */ 						var __accu0__ = node.latex_walker;
/* 000494 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000494 */ 							var __accu1__ = latexnodes;
/* 000494 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000494 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000494 */ 					}) ();
/* 000505 */ 					var newmacronode = (function () {
/* 000505 */ 						var __accu0__ = node.spec;
/* 000505 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000505 */ 					}) ();
/* 000506 */ 					return newmacronode;
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000509 */ 		return null;
/* 000509 */ 	});},
/* 000511 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000511 */ 		if (arguments.length) {
/* 000511 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 					switch (__attrib0__) {
/* 000511 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 		}
/* 000511 */ 		else {
/* 000511 */ 		}
/* 000512 */ 		var nodelist = (function () {
/* 000512 */ 			var __accu0__ = self;
/* 000512 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000512 */ 		}) ();
/* 000513 */ 		if (__t__ (nodelist === null)) {
/* 000515 */ 			return null;
/* 000515 */ 		}
/* 000517 */ 		var newnode = (function () {
/* 000517 */ 			var __accu0__ = node.latex_walker;
/* 000517 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000517 */ 		}) ();
/* 000526 */ 		var newnode = (function () {
/* 000526 */ 			var __accu0__ = node.spec;
/* 000526 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000526 */ 		}) ();
/* 000527 */ 		return newnode;
/* 000527 */ 	});},
/* 000529 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000532 */ 		var my_length = __call__ (len, null, (function () {
/* 000532 */ 			var __accu0__ = node;
/* 000532 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000532 */ 		}) ());
/* 000533 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000535 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000536 */ 			return null;
/* 000536 */ 		}
/* 000538 */ 		return true;
/* 000538 */ 	});},
/* 000540 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000542 */ 		var estimated_length = (function () {
/* 000542 */ 			var __accu0__ = self;
/* 000542 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000542 */ 		}) ();
/* 000544 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000546 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000547 */ 			return null;
/* 000547 */ 		}
/* 000550 */ 		if (__t__ ((function () {
/* 000550 */ 			var __accu0__ = node;
/* 000550 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000550 */ 		}) ())) {
/* 000552 */ 			var chars = node.chars;
/* 000553 */ 			var last_break_pos = 0;
/* 000554 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000554 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000554 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000554 */ 				var j = __left0__ [0];
/* 000554 */ 				var c = __left0__ [1];
/* 000555 */ 				if (__t__ (!__t__ (((function () {
/* 000555 */ 					var __accu0__ = c;
/* 000555 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000555 */ 				}) ())))) {
/* 000556 */ 					var last_break_pos = j;
/* 000556 */ 				}
/* 000557 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000558 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000558 */ 						break;
/* 000558 */ 					}
/* 000558 */ 				}
/* 000558 */ 				continue;
/* 000558 */ 			}
/* 000564 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000566 */ 			var new_node = (function () {
/* 000566 */ 				var __accu0__ = node.latex_walker;
/* 000566 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000566 */ 			}) ();
/* 000573 */ 			return new_node;
/* 000573 */ 		}
/* 000577 */ 		if (__t__ (__t__ (self.min_chars !== null) && __lt__ (self.count, self.min_chars))) {
/* 000579 */ 			return node;
/* 000579 */ 		}
/* 000582 */ 		return true;
/* 000582 */ 	});},
/* 000585 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000585 */ 		if (arguments.length) {
/* 000585 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000585 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000585 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000585 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000585 */ 					switch (__attrib0__) {
/* 000585 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 					}
/* 000585 */ 				}
/* 000585 */ 			}
/* 000585 */ 		}
/* 000585 */ 		else {
/* 000585 */ 		}
/* 000587 */ 		if (__t__ ((function () {
/* 000587 */ 			var __accu0__ = node;
/* 000587 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000587 */ 		}) ())) {
/* 000588 */ 			return __call__ (len, null, node.chars);
/* 000588 */ 		}
/* 000590 */ 		if (__t__ ((function () {
/* 000590 */ 			var __accu0__ = node;
/* 000590 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000590 */ 		}) ())) {
/* 000595 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000595 */ 				var __accu0__ = node;
/* 000595 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000595 */ 			}) ()), 2)), 3);
/* 000595 */ 		}
/* 000597 */ 		if (__t__ ((function () {
/* 000597 */ 			var __accu0__ = node;
/* 000597 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000597 */ 		}) ())) {
/* 000598 */ 			return 0;
/* 000598 */ 		}
/* 000600 */ 		return 0;
/* 000600 */ 	});}
/* 000600 */ });
/* 000605 */ export var _abbrevtext = function (x, maxlen) {
/* 000605 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 000605 */ 		var maxlen = 100;
/* 000605 */ 	};
/* 000605 */ 	if (arguments.length) {
/* 000605 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000605 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000605 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000605 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000605 */ 				switch (__attrib0__) {
/* 000605 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 				}
/* 000605 */ 			}
/* 000605 */ 		}
/* 000605 */ 	}
/* 000605 */ 	else {
/* 000605 */ 	}
/* 000606 */ 	var x = __call__ (str, null, x);
/* 000607 */ 	return __add__ (__getslice__ (x, 0, maxlen, 1), (__t__ (__gt__ (__call__ (len, null, x), maxlen)) ? '…' : ''));
/* 000607 */ };
/* 000018 */ 
//# sourceMappingURL=flm.flmfragment.map