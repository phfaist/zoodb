/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:49
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMStandaloneModeRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_parsers, latexnodes_nodes, FLMStandaloneModeRenderContext, latexnodes};
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
/* 000108 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000109 */ 					var error_message = (function () {
/* 000109 */ 						var __accu0__ = self.environment;
/* 000109 */ 						return __call__ (__accu0__.get_located_error_message, __accu0__, e);
/* 000109 */ 					}) ();
/* 000110 */ 					(function () {
/* 000110 */ 						var __accu0__ = logger;
/* 000110 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.flm_text));
/* 000110 */ 					}) ();
/* 000110 */ 				}
/* 000114 */ 				__except0__.__cause__ = null;
/* 000114 */ 				throw __except0__;
/* 000114 */ 			}
/* 000114 */ 			else if (isinstance (__except0__, Exception)) {
/* 000114 */ 				var e = __except0__;
/* 000116 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000117 */ 					(function () {
/* 000117 */ 						var __accu0__ = logger;
/* 000117 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.flm_text));
/* 000117 */ 					}) ();
/* 000117 */ 				}
/* 000119 */ 				__except0__.__cause__ = null;
/* 000119 */ 				throw __except0__;
/* 000119 */ 			}
/* 000119 */ 			else {
/* 000119 */ 				throw __except0__;
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 	});},
/* 000122 */ 	_attribute_fields: _flmfragment_attribute_fields,
/* 000124 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _flmfragment_attribute_fields))),
/* 000128 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000128 */ 		var kwargs = dict ();
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 				delete kwargs.__kwargtrans__;
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		var d = (function () {
/* 000129 */ 			var __accu0__ = [];
/* 000129 */ 			var __iterable0__ = self._attribute_fields;
/* 000129 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000131 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000131 */ 				(function () {
/* 000131 */ 					var __accu1__ = __accu0__;
/* 000130 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000130 */ 				}) ();
/* 000130 */ 			}
/* 000130 */ 			return dict (__accu0__);
/* 000130 */ 		}) ();
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
/* 000145 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the FLMFragment constructor)');
/* 000145 */ 			__except0__.__cause__ = null;
/* 000145 */ 			throw __except0__;
/* 000145 */ 		}
/* 000150 */ 		var render_context = __call__ (FLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000151 */ 		return (function () {
/* 000151 */ 			var __accu0__ = self;
/* 000151 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000151 */ 		}) ();
/* 000151 */ 	});},
/* 000154 */ 	get parse () {return __getcm__ (this, function (cls, flm_text, environment) {
/* 000154 */ 		var standalone_mode = false;
/* 000154 */ 		var tolerant_parsing = null;
/* 000154 */ 		var is_block_level = null;
/* 000154 */ 		var parsing_mode = null;
/* 000154 */ 		var resource_info = null;
/* 000154 */ 		var what = null;
/* 000154 */ 		var input_lineno_colno_offsets = null;
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000161 */ 		// pass;
/* 000165 */ 		var latex_walker = (function () {
/* 000165 */ 			var __accu0__ = environment;
/* 000165 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
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
/* 000188 */ 			var __accu0__ = self.flm_text;
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
/* 000194 */ 		var theflmtext = self.flm_text;
/* 000195 */ 		if (__t__ (__gt__ (__call__ (len, null, theflmtext), 50))) {
/* 000196 */ 			var theflmtext = __add__ (__getslice__ (theflmtext, 0, 49, 1), '…');
/* 000196 */ 		}
/* 000197 */ 		return '<{} {}>'.format (self.__class__.__name__, __call__ (repr, null, theflmtext));
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
/* 000202 */ 				var __accu1__ = self.flm_text;
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
/* 000227 */ 		// pass;
/* 000231 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000233 */ 		// pass;
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = self.environment;
/* 000238 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: thenodes}, (function () {
/* 000238 */ 				var __accu1__ = self;
/* 000238 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000238 */ 			}) ())));
/* 000238 */ 		}) ();
/* 000238 */ 	});},
/* 000241 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000241 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000241 */ 			var min_chars = null;
/* 000241 */ 		};
/* 000241 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000241 */ 			var truncation_marker = ' …';
/* 000241 */ 		};
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000243 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000246 */ 		var newnodes = (function () {
/* 000246 */ 			var __accu0__ = trunc;
/* 000246 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000246 */ 		}) ();
/* 000248 */ 		return (function () {
/* 000248 */ 			var __accu0__ = self.environment;
/* 000250 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: newnodes}, (function () {
/* 000250 */ 				var __accu1__ = self;
/* 000250 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000250 */ 			}) ())));
/* 000250 */ 		}) ();
/* 000250 */ 	});}
/* 000250 */ });
/* 000260 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000260 */ 	__module__: __name__,
/* 000261 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000261 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000261 */ 			var min_chars = null;
/* 000261 */ 		};
/* 000261 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000261 */ 			var truncation_marker = null;
/* 000261 */ 		};
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000262 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000263 */ 		self.chars = chars;
/* 000264 */ 		self.min_chars = min_chars;
/* 000265 */ 		self.truncation_marker = truncation_marker;
/* 000267 */ 		self.count = 0;
/* 000267 */ 	});},
/* 000269 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000270 */ 		self.count = 0;
/* 000271 */ 		var newnodes = (function () {
/* 000271 */ 			var __accu0__ = self;
/* 000271 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000271 */ 		}) ();
/* 000272 */ 		if (__t__ (newnodes === null)) {
/* 000273 */ 			return nodes;
/* 000273 */ 		}
/* 000274 */ 		return newnodes;
/* 000274 */ 	});},
/* 000276 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000277 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000277 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000277 */ 			var j = __left0__ [0];
/* 000277 */ 			var node = __left0__ [1];
/* 000278 */ 			var newnode = (function () {
/* 000278 */ 				var __accu0__ = self;
/* 000278 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000278 */ 			}) ();
/* 000279 */ 			if (__t__ (newnode !== null)) {
/* 000280 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000281 */ 				if (__t__ (newnode !== true)) {
/* 000282 */ 					(function () {
/* 000282 */ 						var __accu0__ = newnodes;
/* 000282 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000282 */ 					}) ();
/* 000282 */ 				}
/* 000283 */ 				return (function () {
/* 000283 */ 					var __accu0__ = nodes.latex_walker;
/* 000283 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000283 */ 				}) ();
/* 000283 */ 			}
/* 000283 */ 		}
/* 000288 */ 		return null;
/* 000288 */ 	});},
/* 000290 */ 	get collect_node () {return __get__ (this, function (self, node) {
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
/* 000291 */ 		if (__t__ ((function () {
/* 000291 */ 			var __accu0__ = node;
/* 000291 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000291 */ 		}) ())) {
/* 000292 */ 			return (function () {
/* 000292 */ 				var __accu0__ = self;
/* 000292 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000292 */ 			}) ();
/* 000292 */ 		}
/* 000294 */ 		if (__t__ ((function () {
/* 000294 */ 			var __accu0__ = node;
/* 000294 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000294 */ 		}) ())) {
/* 000295 */ 			return (function () {
/* 000295 */ 				var __accu0__ = self;
/* 000295 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000295 */ 			}) ();
/* 000295 */ 		}
/* 000297 */ 		if (__t__ ((function () {
/* 000297 */ 			var __accu0__ = node;
/* 000297 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000297 */ 		}) ())) {
/* 000298 */ 			return (function () {
/* 000298 */ 				var __accu0__ = self;
/* 000298 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000298 */ 			}) ();
/* 000298 */ 		}
/* 000300 */ 		if (__t__ ((function () {
/* 000300 */ 			var __accu0__ = node;
/* 000300 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000300 */ 		}) ())) {
/* 000301 */ 			return (function () {
/* 000301 */ 				var __accu0__ = self;
/* 000301 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000301 */ 			}) ();
/* 000301 */ 		}
/* 000303 */ 		return (function () {
/* 000303 */ 			var __accu0__ = self;
/* 000303 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000303 */ 		}) ();
/* 000303 */ 	});},
/* 000305 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000306 */ 		var groupnodelist = (function () {
/* 000306 */ 			var __accu0__ = self;
/* 000306 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000306 */ 		}) ();
/* 000307 */ 		if (__t__ (groupnodelist === null)) {
/* 000309 */ 			return null;
/* 000309 */ 		}
/* 000311 */ 		var groupnode = (function () {
/* 000311 */ 			var __accu0__ = node.latex_walker;
/* 000311 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000311 */ 		}) ();
/* 000319 */ 		return groupnode;
/* 000319 */ 	});},
/* 000322 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
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
/* 000323 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000324 */ 			return (function () {
/* 000324 */ 				var __accu0__ = self;
/* 000324 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000324 */ 			}) ();
/* 000324 */ 		}
/* 000325 */ 		return (function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000325 */ 		}) ();
/* 000325 */ 	});},
/* 000327 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000330 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_flm_main_text_argument'))) {
/* 000331 */ 			var main_text_argname = node.spec._flm_main_text_argument;
/* 000333 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000333 */ 				var __accu0__ = [];
/* 000333 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000333 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000333 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000333 */ 					var j = __left0__ [0];
/* 000333 */ 					var arg = __left0__ [1];
/* 000333 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000334 */ 						(function () {
/* 000334 */ 							var __accu1__ = __accu0__;
/* 000334 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000334 */ 						}) ();
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 				return py_iter (__accu0__);
/* 000334 */ 			}) ());
/* 000336 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000337 */ 			var text_arg_new = (function () {
/* 000337 */ 				var __accu0__ = self;
/* 000337 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000337 */ 			}) ();
/* 000338 */ 			if (__t__ (text_arg_new)) {
/* 000339 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000342 */ 				if (__t__ (text_arg_new !== null)) {
/* 000344 */ 					var newmacronode = (function () {
/* 000344 */ 						var __accu0__ = node.latex_walker;
/* 000348 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000348 */ 							var __accu1__ = latexnodes;
/* 000348 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000348 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000348 */ 					}) ();
/* 000359 */ 					var newmacronode = (function () {
/* 000359 */ 						var __accu0__ = node.spec;
/* 000359 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000359 */ 					}) ();
/* 000360 */ 					return newmacronode;
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000363 */ 		return null;
/* 000363 */ 	});},
/* 000365 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000366 */ 		var nodelist = (function () {
/* 000366 */ 			var __accu0__ = self;
/* 000366 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000366 */ 		}) ();
/* 000367 */ 		if (__t__ (nodelist === null)) {
/* 000369 */ 			return null;
/* 000369 */ 		}
/* 000371 */ 		var newnode = (function () {
/* 000371 */ 			var __accu0__ = node.latex_walker;
/* 000371 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000371 */ 		}) ();
/* 000380 */ 		var newnode = (function () {
/* 000380 */ 			var __accu0__ = node.spec;
/* 000380 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000380 */ 		}) ();
/* 000381 */ 		return newnode;
/* 000381 */ 	});},
/* 000383 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000386 */ 		var my_length = __call__ (len, null, (function () {
/* 000386 */ 			var __accu0__ = node;
/* 000386 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000386 */ 		}) ());
/* 000387 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000389 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000390 */ 			return null;
/* 000390 */ 		}
/* 000392 */ 		return true;
/* 000392 */ 	});},
/* 000394 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000396 */ 		var estimated_length = (function () {
/* 000396 */ 			var __accu0__ = self;
/* 000396 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000396 */ 		}) ();
/* 000398 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000400 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000401 */ 			return null;
/* 000401 */ 		}
/* 000404 */ 		if (__t__ ((function () {
/* 000404 */ 			var __accu0__ = node;
/* 000404 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000404 */ 		}) ())) {
/* 000406 */ 			var chars = node.chars;
/* 000407 */ 			var last_break_pos = 0;
/* 000408 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000408 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000408 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000408 */ 				var j = __left0__ [0];
/* 000408 */ 				var c = __left0__ [1];
/* 000409 */ 				if (__t__ (!__t__ (((function () {
/* 000409 */ 					var __accu0__ = c;
/* 000409 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000409 */ 				}) ())))) {
/* 000410 */ 					var last_break_pos = j;
/* 000410 */ 				}
/* 000411 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000412 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000412 */ 						break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 				continue;
/* 000412 */ 			}
/* 000418 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000420 */ 			var new_node = (function () {
/* 000420 */ 				var __accu0__ = node.latex_walker;
/* 000420 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000420 */ 			}) ();
/* 000427 */ 			return new_node;
/* 000427 */ 		}
/* 000431 */ 		if (__t__ (__t__ (self.min_chars !== null) && __lt__ (self.count, self.min_chars))) {
/* 000433 */ 			return node;
/* 000433 */ 		}
/* 000436 */ 		return true;
/* 000436 */ 	});},
/* 000439 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000441 */ 		if (__t__ ((function () {
/* 000441 */ 			var __accu0__ = node;
/* 000441 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000441 */ 		}) ())) {
/* 000442 */ 			return __call__ (len, null, node.chars);
/* 000442 */ 		}
/* 000444 */ 		if (__t__ ((function () {
/* 000444 */ 			var __accu0__ = node;
/* 000444 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000444 */ 		}) ())) {
/* 000449 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000449 */ 				var __accu0__ = node;
/* 000449 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000449 */ 			}) ()), 2)), 3);
/* 000449 */ 		}
/* 000451 */ 		if (__t__ ((function () {
/* 000451 */ 			var __accu0__ = node;
/* 000451 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000451 */ 		}) ())) {
/* 000452 */ 			return 0;
/* 000452 */ 		}
/* 000454 */ 		return 0;
/* 000454 */ 	});}
/* 000454 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmfragment.map