/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:02
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMStandaloneModeRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FLMStandaloneModeRenderContext, latexnodes, latexnodes_parsers, latexnodes_nodes};
/* 000001 */ var __name__ = 'flm.flmfragment';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000019 */ export var _flmfragment_attribute_fields = tuple (['is_block_level', 'resource_info', 'standalone_mode', 'silent', 'what', 'parsing_mode']);
/* 000029 */ export var FLMFragment =  __class__ ('FLMFragment', [object], {
/* 000029 */ 	__module__: __name__,
/* 000056 */ 	get __init__ () {return __get__ (this, function (self, flm_text, environment) {
/* 000056 */ 		var is_block_level = null;
/* 000056 */ 		var resource_info = null;
/* 000056 */ 		var standalone_mode = false;
/* 000056 */ 		var tolerant_parsing = false;
/* 000056 */ 		var what = '(unknown)';
/* 000056 */ 		var silent = false;
/* 000056 */ 		var parsing_mode = null;
/* 000056 */ 		var input_lineno_colno_offsets = null;
/* 000056 */ 		var _flm_text_if_loading_nodes = null;
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case '_flm_text_if_loading_nodes': var _flm_text_if_loading_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000072 */ 		self.flm_text = flm_text;
/* 000073 */ 		self.environment = environment;
/* 000075 */ 		self.is_block_level = is_block_level;
/* 000076 */ 		self.resource_info = resource_info;
/* 000077 */ 		self.standalone_mode = standalone_mode;
/* 000078 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000079 */ 		self.what = what;
/* 000080 */ 		self.silent = silent;
/* 000081 */ 		self.parsing_mode = parsing_mode;
/* 000083 */ 		if (__t__ (__call__ (isinstance, null, flm_text, latexnodes_nodes.LatexNodeList))) {
/* 000086 */ 			self.nodes = self.flm_text;
/* 000087 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000088 */ 			if (__t__ (_flm_text_if_loading_nodes !== null)) {
/* 000089 */ 				self.flm_text = _flm_text_if_loading_nodes;
/* 000089 */ 			}
/* 000090 */ 			else {
/* 000091 */ 				self.flm_text = (function () {
/* 000091 */ 					var __accu0__ = self.nodes;
/* 000091 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000091 */ 				}) ();
/* 000091 */ 			}
/* 000092 */ 			return ;
/* 000092 */ 		}
/* 000094 */ 		try {
/* 000096 */ 			var __left0__ = (function () {
/* 000096 */ 				var __accu0__ = FLMFragment;
/* 000096 */ 				return __call__ (__accu0__.parse, __accu0__, self.flm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000096 */ 			}) ();
/* 000096 */ 			self.latex_walker = __left0__ [0];
/* 000096 */ 			self.nodes = __left0__ [1];
/* 000096 */ 		}
/* 000096 */ 		catch (__except0__) {
/* 000096 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerLocatedError)) {
/* 000096 */ 				var e = __except0__;
/* 000109 */ 				e.flm_fragment_resource_info = self.resource_info;
/* 000110 */ 				e.flm_fragment_what = self.what;
/* 000112 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'open_contexts')))) || !__t__ ((e.open_contexts)))) {
/* 000113 */ 					e.open_contexts = [];
/* 000113 */ 				}
/* 000114 */ 				(function () {
/* 000114 */ 					var __accu0__ = e.open_contexts;
/* 000115 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([__add__ ('parsing ', __call__ (str, null, self.what)), null, '', null]));
/* 000115 */ 				}) ();
/* 000120 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000121 */ 					var error_message = (function () {
/* 000121 */ 						var __accu0__ = self.environment;
/* 000121 */ 						return __call__ (__accu0__.get_located_error_message, __accu0__, e);
/* 000121 */ 					}) ();
/* 000122 */ 					(function () {
/* 000122 */ 						var __accu0__ = logger;
/* 000122 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.flm_text));
/* 000122 */ 					}) ();
/* 000122 */ 				}
/* 000126 */ 				__except0__.__cause__ = null;
/* 000126 */ 				throw __except0__;
/* 000126 */ 			}
/* 000126 */ 			else if (isinstance (__except0__, Exception)) {
/* 000126 */ 				var e = __except0__;
/* 000128 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000129 */ 					(function () {
/* 000129 */ 						var __accu0__ = logger;
/* 000129 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.flm_text));
/* 000129 */ 					}) ();
/* 000129 */ 				}
/* 000131 */ 				__except0__.__cause__ = null;
/* 000131 */ 				throw __except0__;
/* 000131 */ 			}
/* 000131 */ 			else {
/* 000131 */ 				throw __except0__;
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 	});},
/* 000134 */ 	_attribute_fields: _flmfragment_attribute_fields,
/* 000136 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _flmfragment_attribute_fields))),
/* 000140 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000140 */ 		var kwargs = dict ();
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 				delete kwargs.__kwargtrans__;
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		var d = (function () {
/* 000141 */ 			var __accu0__ = [];
/* 000141 */ 			var __iterable0__ = self._attribute_fields;
/* 000141 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000143 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000143 */ 				(function () {
/* 000143 */ 					var __accu1__ = __accu0__;
/* 000142 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000142 */ 				}) ();
/* 000142 */ 			}
/* 000142 */ 			return dict (__accu0__);
/* 000142 */ 		}) ();
/* 000145 */ 		(function () {
/* 000145 */ 			var __accu0__ = d;
/* 000145 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000145 */ 		}) ();
/* 000146 */ 		return d;
/* 000146 */ 	});},
/* 000149 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000149 */ 		var kwargs = dict ();
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 				delete kwargs.__kwargtrans__;
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		return (function () {
/* 000150 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000150 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000150 */ 		}) ();
/* 000150 */ 	});},
/* 000155 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000156 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000157 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the FLMFragment constructor)');
/* 000157 */ 			__except0__.__cause__ = null;
/* 000157 */ 			throw __except0__;
/* 000157 */ 		}
/* 000162 */ 		var render_context = __call__ (FLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000163 */ 		return (function () {
/* 000163 */ 			var __accu0__ = self;
/* 000163 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000163 */ 		}) ();
/* 000163 */ 	});},
/* 000166 */ 	get parse () {return __getcm__ (this, function (cls, flm_text, environment) {
/* 000166 */ 		var standalone_mode = false;
/* 000166 */ 		var tolerant_parsing = null;
/* 000166 */ 		var is_block_level = null;
/* 000166 */ 		var parsing_mode = null;
/* 000166 */ 		var resource_info = null;
/* 000166 */ 		var what = null;
/* 000166 */ 		var input_lineno_colno_offsets = null;
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000173 */ 		// pass;
/* 000177 */ 		var latex_walker = (function () {
/* 000177 */ 			var __accu0__ = environment;
/* 000177 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000177 */ 		}) ();
/* 000188 */ 		var __left0__ = (function () {
/* 000188 */ 			var __accu0__ = latex_walker;
/* 000189 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000189 */ 				var __accu1__ = latexnodes_parsers;
/* 000189 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000189 */ 			}) ());
/* 000189 */ 		}) ();
/* 000189 */ 		var nodes = __left0__ [0];
/* 000189 */ 		var _ = __left0__ [1];
/* 000192 */ 		return tuple ([latex_walker, nodes]);
/* 000192 */ 	});},
/* 000195 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000196 */ 		(function () {
/* 000196 */ 			var __accu0__ = node_visitor;
/* 000196 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000196 */ 		}) ();
/* 000196 */ 	});},
/* 000199 */ 	get is_empty () {return __get__ (this, function (self) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000200 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000200 */ 			var __accu0__ = self.flm_text;
/* 000200 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000200 */ 		}) ()), 0);
/* 000200 */ 	});},
/* 000202 */ 	get __bool__ () {return __get__ (this, function (self) {
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
/* 000203 */ 		return !__t__ (((function () {
/* 000203 */ 			var __accu0__ = self;
/* 000203 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000203 */ 		}) ()));
/* 000203 */ 	});},
/* 000205 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000206 */ 		var theflmtext = self.flm_text;
/* 000207 */ 		if (__t__ (__gt__ (__call__ (len, null, theflmtext), 50))) {
/* 000208 */ 			var theflmtext = __add__ (__getslice__ (theflmtext, 0, 49, 1), '…');
/* 000208 */ 		}
/* 000209 */ 		return '<{} {}>'.format (self.__class__.__name__, __call__ (repr, null, theflmtext));
/* 000209 */ 	});},
/* 000212 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		var new_fragment = (function () {
/* 000213 */ 			var __accu0__ = self.environment;
/* 000214 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000214 */ 				var __accu1__ = self.flm_text;
/* 000214 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000215 */ 			}) (), __kwargtrans__ ((function () {
/* 000215 */ 				var __accu1__ = self;
/* 000215 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000215 */ 			}) ()));
/* 000215 */ 		}) ();
/* 000217 */ 		return new_fragment;
/* 000217 */ 	});},
/* 000219 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000224 */ 		var nodelists_paragraphs = (function () {
/* 000224 */ 			var __accu0__ = self.nodes;
/* 000224 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000224 */ 				if (arguments.length) {
/* 000224 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 							switch (__attrib0__) {
/* 000224 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 							}
/* 000224 */ 						}
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 				else {
/* 000224 */ 				}
/* 000225 */ 				return __t__ ((function () {
/* 000225 */ 					var __accu1__ = n;
/* 000225 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000225 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000225 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000225 */ 		}) ();
/* 000230 */ 		var nodelists_paragraphs = (function () {
/* 000230 */ 			var __accu0__ = [];
/* 000230 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000230 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000232 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000233 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000233 */ 					(function () {
/* 000233 */ 						var __accu1__ = __accu0__;
/* 000233 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000233 */ 					}) ();
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 			return __accu0__;
/* 000233 */ 		}) ();
/* 000236 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000237 */ 			return self;
/* 000237 */ 		}
/* 000239 */ 		// pass;
/* 000243 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000245 */ 		// pass;
/* 000248 */ 		return (function () {
/* 000248 */ 			var __accu0__ = self.environment;
/* 000250 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: thenodes}, (function () {
/* 000250 */ 				var __accu1__ = self;
/* 000250 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000250 */ 			}) ())));
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000253 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000253 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var min_chars = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var truncation_marker = ' …';
/* 000253 */ 		};
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000255 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000258 */ 		var newnodes = (function () {
/* 000258 */ 			var __accu0__ = trunc;
/* 000258 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000258 */ 		}) ();
/* 000260 */ 		return (function () {
/* 000260 */ 			var __accu0__ = self.environment;
/* 000262 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: newnodes}, (function () {
/* 000262 */ 				var __accu1__ = self;
/* 000262 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000262 */ 			}) ())));
/* 000262 */ 		}) ();
/* 000262 */ 	});}
/* 000262 */ });
/* 000272 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000272 */ 	__module__: __name__,
/* 000273 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000273 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var min_chars = null;
/* 000273 */ 		};
/* 000273 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var truncation_marker = null;
/* 000273 */ 		};
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000274 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000275 */ 		self.chars = chars;
/* 000276 */ 		self.min_chars = min_chars;
/* 000277 */ 		self.truncation_marker = truncation_marker;
/* 000279 */ 		self.count = 0;
/* 000279 */ 	});},
/* 000281 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000282 */ 		self.count = 0;
/* 000283 */ 		var newnodes = (function () {
/* 000283 */ 			var __accu0__ = self;
/* 000283 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000283 */ 		}) ();
/* 000284 */ 		if (__t__ (newnodes === null)) {
/* 000285 */ 			return nodes;
/* 000285 */ 		}
/* 000286 */ 		return newnodes;
/* 000286 */ 	});},
/* 000288 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000288 */ 		if (arguments.length) {
/* 000288 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000288 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000288 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000288 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000288 */ 					switch (__attrib0__) {
/* 000288 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000288 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000288 */ 					}
/* 000288 */ 				}
/* 000288 */ 			}
/* 000288 */ 		}
/* 000288 */ 		else {
/* 000288 */ 		}
/* 000289 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000289 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000289 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000289 */ 			var j = __left0__ [0];
/* 000289 */ 			var node = __left0__ [1];
/* 000290 */ 			var newnode = (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000290 */ 			}) ();
/* 000291 */ 			if (__t__ (newnode !== null)) {
/* 000292 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000293 */ 				if (__t__ (newnode !== true)) {
/* 000294 */ 					(function () {
/* 000294 */ 						var __accu0__ = newnodes;
/* 000294 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000294 */ 					}) ();
/* 000294 */ 				}
/* 000295 */ 				return (function () {
/* 000295 */ 					var __accu0__ = nodes.latex_walker;
/* 000295 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000295 */ 				}) ();
/* 000295 */ 			}
/* 000295 */ 		}
/* 000300 */ 		return null;
/* 000300 */ 	});},
/* 000302 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000303 */ 		if (__t__ ((function () {
/* 000303 */ 			var __accu0__ = node;
/* 000303 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000303 */ 		}) ())) {
/* 000304 */ 			return (function () {
/* 000304 */ 				var __accu0__ = self;
/* 000304 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000304 */ 			}) ();
/* 000304 */ 		}
/* 000306 */ 		if (__t__ ((function () {
/* 000306 */ 			var __accu0__ = node;
/* 000306 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000306 */ 		}) ())) {
/* 000307 */ 			return (function () {
/* 000307 */ 				var __accu0__ = self;
/* 000307 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000307 */ 			}) ();
/* 000307 */ 		}
/* 000309 */ 		if (__t__ ((function () {
/* 000309 */ 			var __accu0__ = node;
/* 000309 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000309 */ 		}) ())) {
/* 000310 */ 			return (function () {
/* 000310 */ 				var __accu0__ = self;
/* 000310 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000310 */ 			}) ();
/* 000310 */ 		}
/* 000312 */ 		if (__t__ ((function () {
/* 000312 */ 			var __accu0__ = node;
/* 000312 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000312 */ 		}) ())) {
/* 000313 */ 			return (function () {
/* 000313 */ 				var __accu0__ = self;
/* 000313 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000313 */ 			}) ();
/* 000313 */ 		}
/* 000315 */ 		return (function () {
/* 000315 */ 			var __accu0__ = self;
/* 000315 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000315 */ 		}) ();
/* 000315 */ 	});},
/* 000317 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
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
/* 000318 */ 		var groupnodelist = (function () {
/* 000318 */ 			var __accu0__ = self;
/* 000318 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000318 */ 		}) ();
/* 000319 */ 		if (__t__ (groupnodelist === null)) {
/* 000321 */ 			return null;
/* 000321 */ 		}
/* 000323 */ 		var groupnode = (function () {
/* 000323 */ 			var __accu0__ = node.latex_walker;
/* 000323 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000323 */ 		}) ();
/* 000331 */ 		return groupnode;
/* 000331 */ 	});},
/* 000334 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000335 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000336 */ 			return (function () {
/* 000336 */ 				var __accu0__ = self;
/* 000336 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000336 */ 			}) ();
/* 000336 */ 		}
/* 000337 */ 		return (function () {
/* 000337 */ 			var __accu0__ = self;
/* 000337 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000337 */ 		}) ();
/* 000337 */ 	});},
/* 000339 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000342 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_flm_main_text_argument'))) {
/* 000343 */ 			var main_text_argname = node.spec._flm_main_text_argument;
/* 000345 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000345 */ 				var __accu0__ = [];
/* 000345 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000345 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000345 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000345 */ 					var j = __left0__ [0];
/* 000345 */ 					var arg = __left0__ [1];
/* 000345 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000346 */ 						(function () {
/* 000346 */ 							var __accu1__ = __accu0__;
/* 000346 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000346 */ 						}) ();
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				return py_iter (__accu0__);
/* 000346 */ 			}) ());
/* 000348 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000349 */ 			var text_arg_new = (function () {
/* 000349 */ 				var __accu0__ = self;
/* 000349 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000349 */ 			}) ();
/* 000350 */ 			if (__t__ (text_arg_new)) {
/* 000351 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000354 */ 				if (__t__ (text_arg_new !== null)) {
/* 000356 */ 					var newmacronode = (function () {
/* 000356 */ 						var __accu0__ = node.latex_walker;
/* 000360 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000360 */ 							var __accu1__ = latexnodes;
/* 000360 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000360 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000360 */ 					}) ();
/* 000371 */ 					var newmacronode = (function () {
/* 000371 */ 						var __accu0__ = node.spec;
/* 000371 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000371 */ 					}) ();
/* 000372 */ 					return newmacronode;
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000375 */ 		return null;
/* 000375 */ 	});},
/* 000377 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000378 */ 		var nodelist = (function () {
/* 000378 */ 			var __accu0__ = self;
/* 000378 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000378 */ 		}) ();
/* 000379 */ 		if (__t__ (nodelist === null)) {
/* 000381 */ 			return null;
/* 000381 */ 		}
/* 000383 */ 		var newnode = (function () {
/* 000383 */ 			var __accu0__ = node.latex_walker;
/* 000383 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000383 */ 		}) ();
/* 000392 */ 		var newnode = (function () {
/* 000392 */ 			var __accu0__ = node.spec;
/* 000392 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000392 */ 		}) ();
/* 000393 */ 		return newnode;
/* 000393 */ 	});},
/* 000395 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
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
/* 000398 */ 		var my_length = __call__ (len, null, (function () {
/* 000398 */ 			var __accu0__ = node;
/* 000398 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000398 */ 		}) ());
/* 000399 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000401 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000402 */ 			return null;
/* 000402 */ 		}
/* 000404 */ 		return true;
/* 000404 */ 	});},
/* 000406 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000408 */ 		var estimated_length = (function () {
/* 000408 */ 			var __accu0__ = self;
/* 000408 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000408 */ 		}) ();
/* 000410 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000412 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000413 */ 			return null;
/* 000413 */ 		}
/* 000416 */ 		if (__t__ ((function () {
/* 000416 */ 			var __accu0__ = node;
/* 000416 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000416 */ 		}) ())) {
/* 000418 */ 			var chars = node.chars;
/* 000419 */ 			var last_break_pos = 0;
/* 000420 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000420 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000420 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000420 */ 				var j = __left0__ [0];
/* 000420 */ 				var c = __left0__ [1];
/* 000421 */ 				if (__t__ (!__t__ (((function () {
/* 000421 */ 					var __accu0__ = c;
/* 000421 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000421 */ 				}) ())))) {
/* 000422 */ 					var last_break_pos = j;
/* 000422 */ 				}
/* 000423 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000424 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000424 */ 						break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 				continue;
/* 000424 */ 			}
/* 000430 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000432 */ 			var new_node = (function () {
/* 000432 */ 				var __accu0__ = node.latex_walker;
/* 000432 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000432 */ 			}) ();
/* 000439 */ 			return new_node;
/* 000439 */ 		}
/* 000443 */ 		if (__t__ (__t__ (self.min_chars !== null) && __lt__ (self.count, self.min_chars))) {
/* 000445 */ 			return node;
/* 000445 */ 		}
/* 000448 */ 		return true;
/* 000448 */ 	});},
/* 000451 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
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
/* 000453 */ 		if (__t__ ((function () {
/* 000453 */ 			var __accu0__ = node;
/* 000453 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000453 */ 		}) ())) {
/* 000454 */ 			return __call__ (len, null, node.chars);
/* 000454 */ 		}
/* 000456 */ 		if (__t__ ((function () {
/* 000456 */ 			var __accu0__ = node;
/* 000456 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000456 */ 		}) ())) {
/* 000461 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000461 */ 				var __accu0__ = node;
/* 000461 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000461 */ 			}) ()), 2)), 3);
/* 000461 */ 		}
/* 000463 */ 		if (__t__ ((function () {
/* 000463 */ 			var __accu0__ = node;
/* 000463 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000463 */ 		}) ())) {
/* 000464 */ 			return 0;
/* 000464 */ 		}
/* 000466 */ 		return 0;
/* 000466 */ 	});}
/* 000466 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmfragment.map