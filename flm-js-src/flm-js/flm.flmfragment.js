/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:40
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMStandaloneModeRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes, latexnodes_parsers, latexnodes_nodes, FLMStandaloneModeRenderContext};
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
/* 000120 */ 				var error_message = (function () {
/* 000120 */ 					var __accu0__ = self.environment;
/* 000120 */ 					return __call__ (__accu0__.get_located_error_message, __accu0__, e);
/* 000120 */ 				}) ();
/* 000121 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000122 */ 					var errfmt = (function () {
/* 000122 */ 						var __accu0__ = latexnodes;
/* 000122 */ 						return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, e);
/* 000122 */ 					}) ();
/* 000123 */ 					var errmsg = (function () {
/* 000123 */ 						var __accu0__ = errfmt;
/* 000123 */ 						return __call__ (__accu0__.to_display_string, __accu0__);
/* 000123 */ 					}) ();
/* 000124 */ 					if (__t__ (error_message !== null)) {
/* 000125 */ 						var errmsg = __add__ (__add__ (error_message, '\n'), errmsg);
/* 000125 */ 					}
/* 000126 */ 					(function () {
/* 000126 */ 						var __accu0__ = logger;
/* 000128 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, errmsg, __call__ (_abbrevtext, null, self.flm_text)));
/* 000128 */ 					}) ();
/* 000128 */ 				}
/* 000130 */ 				if (__t__ (error_message !== null)) {
/* 000131 */ 					e.msg = error_message;
/* 000131 */ 				}
/* 000132 */ 				__except0__.__cause__ = null;
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000132 */ 			else if (isinstance (__except0__, Exception)) {
/* 000132 */ 				var e = __except0__;
/* 000134 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000135 */ 					(function () {
/* 000135 */ 						var __accu0__ = logger;
/* 000137 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, __call__ (_abbrevtext, null, self.flm_text)));
/* 000137 */ 					}) ();
/* 000137 */ 				}
/* 000139 */ 				__except0__.__cause__ = null;
/* 000139 */ 				throw __except0__;
/* 000139 */ 			}
/* 000139 */ 			else {
/* 000139 */ 				throw __except0__;
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 	});},
/* 000142 */ 	_attribute_fields: _flmfragment_attribute_fields,
/* 000144 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _flmfragment_attribute_fields))),
/* 000148 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000148 */ 		var kwargs = dict ();
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 				delete kwargs.__kwargtrans__;
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000149 */ 		var d = (function () {
/* 000149 */ 			var __accu0__ = [];
/* 000149 */ 			var __iterable0__ = self._attribute_fields;
/* 000149 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000151 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000151 */ 				(function () {
/* 000151 */ 					var __accu1__ = __accu0__;
/* 000150 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000150 */ 				}) ();
/* 000150 */ 			}
/* 000150 */ 			return dict (__accu0__);
/* 000150 */ 		}) ();
/* 000153 */ 		(function () {
/* 000153 */ 			var __accu0__ = d;
/* 000153 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000153 */ 		}) ();
/* 000154 */ 		return d;
/* 000154 */ 	});},
/* 000157 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000157 */ 		var kwargs = dict ();
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 				delete kwargs.__kwargtrans__;
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		return (function () {
/* 000158 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000158 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000163 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000164 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000165 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the FLMFragment constructor)');
/* 000165 */ 			__except0__.__cause__ = null;
/* 000165 */ 			throw __except0__;
/* 000165 */ 		}
/* 000170 */ 		var render_context = __call__ (FLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000171 */ 		return (function () {
/* 000171 */ 			var __accu0__ = self;
/* 000171 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000171 */ 		}) ();
/* 000171 */ 	});},
/* 000174 */ 	get parse () {return __getcm__ (this, function (cls, flm_text, environment) {
/* 000174 */ 		var standalone_mode = false;
/* 000174 */ 		var tolerant_parsing = null;
/* 000174 */ 		var is_block_level = null;
/* 000174 */ 		var parsing_mode = null;
/* 000174 */ 		var resource_info = null;
/* 000174 */ 		var what = null;
/* 000174 */ 		var input_lineno_colno_offsets = null;
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000181 */ 		// pass;
/* 000185 */ 		var latex_walker = (function () {
/* 000185 */ 			var __accu0__ = environment;
/* 000185 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000185 */ 		}) ();
/* 000196 */ 		var __left0__ = (function () {
/* 000196 */ 			var __accu0__ = latex_walker;
/* 000197 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000197 */ 				var __accu1__ = latexnodes_parsers;
/* 000197 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000197 */ 			}) ());
/* 000197 */ 		}) ();
/* 000197 */ 		var nodes = __left0__ [0];
/* 000197 */ 		var _ = __left0__ [1];
/* 000200 */ 		return tuple ([latex_walker, nodes]);
/* 000200 */ 	});},
/* 000203 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		(function () {
/* 000204 */ 			var __accu0__ = node_visitor;
/* 000204 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000204 */ 		}) ();
/* 000204 */ 	});},
/* 000207 */ 	get is_empty () {return __get__ (this, function (self) {
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
/* 000208 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000208 */ 			var __accu0__ = self.flm_text;
/* 000208 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000208 */ 		}) ()), 0);
/* 000208 */ 	});},
/* 000210 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		return !__t__ (((function () {
/* 000211 */ 			var __accu0__ = self;
/* 000211 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000211 */ 		}) ()));
/* 000211 */ 	});},
/* 000213 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000214 */ 		var theflmtext = self.flm_text;
/* 000215 */ 		if (__t__ (__gt__ (__call__ (len, null, theflmtext), 50))) {
/* 000216 */ 			var theflmtext = __add__ (__getslice__ (theflmtext, 0, 49, 1), '…');
/* 000216 */ 		}
/* 000217 */ 		return '<{} {}>'.format (self.__class__.__name__, __call__ (repr, null, theflmtext));
/* 000217 */ 	});},
/* 000220 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000221 */ 		var new_fragment = (function () {
/* 000221 */ 			var __accu0__ = self.environment;
/* 000222 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000222 */ 				var __accu1__ = self.flm_text;
/* 000222 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000223 */ 			}) (), __kwargtrans__ ((function () {
/* 000223 */ 				var __accu1__ = self;
/* 000223 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000223 */ 			}) ()));
/* 000223 */ 		}) ();
/* 000225 */ 		return new_fragment;
/* 000225 */ 	});},
/* 000227 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000232 */ 		var nodelists_paragraphs = (function () {
/* 000232 */ 			var __accu0__ = self.nodes;
/* 000232 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000232 */ 				if (arguments.length) {
/* 000232 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 							switch (__attrib0__) {
/* 000232 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 							}
/* 000232 */ 						}
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 				else {
/* 000232 */ 				}
/* 000233 */ 				return __t__ ((function () {
/* 000233 */ 					var __accu1__ = n;
/* 000233 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000233 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000233 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000233 */ 		}) ();
/* 000238 */ 		var nodelists_paragraphs = (function () {
/* 000238 */ 			var __accu0__ = [];
/* 000238 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000238 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000240 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000241 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000241 */ 					(function () {
/* 000241 */ 						var __accu1__ = __accu0__;
/* 000241 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000241 */ 					}) ();
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 			return __accu0__;
/* 000241 */ 		}) ();
/* 000244 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000245 */ 			return self;
/* 000245 */ 		}
/* 000247 */ 		// pass;
/* 000251 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000253 */ 		// pass;
/* 000256 */ 		return (function () {
/* 000256 */ 			var __accu0__ = self.environment;
/* 000258 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: thenodes}, (function () {
/* 000258 */ 				var __accu1__ = self;
/* 000258 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000258 */ 			}) ())));
/* 000258 */ 		}) ();
/* 000258 */ 	});},
/* 000261 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000261 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000261 */ 			var min_chars = null;
/* 000261 */ 		};
/* 000261 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000261 */ 			var truncation_marker = ' …';
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
/* 000263 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000266 */ 		var newnodes = (function () {
/* 000266 */ 			var __accu0__ = trunc;
/* 000266 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000266 */ 		}) ();
/* 000268 */ 		return (function () {
/* 000268 */ 			var __accu0__ = self.environment;
/* 000270 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: newnodes}, (function () {
/* 000270 */ 				var __accu1__ = self;
/* 000270 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000270 */ 			}) ())));
/* 000270 */ 		}) ();
/* 000270 */ 	});}
/* 000270 */ });
/* 000280 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000280 */ 	__module__: __name__,
/* 000281 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000281 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000281 */ 			var min_chars = null;
/* 000281 */ 		};
/* 000281 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000281 */ 			var truncation_marker = null;
/* 000281 */ 		};
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000282 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000283 */ 		self.chars = chars;
/* 000284 */ 		self.min_chars = min_chars;
/* 000285 */ 		self.truncation_marker = truncation_marker;
/* 000287 */ 		self.count = 0;
/* 000287 */ 	});},
/* 000289 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		self.count = 0;
/* 000291 */ 		var newnodes = (function () {
/* 000291 */ 			var __accu0__ = self;
/* 000291 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000291 */ 		}) ();
/* 000292 */ 		if (__t__ (newnodes === null)) {
/* 000293 */ 			return nodes;
/* 000293 */ 		}
/* 000294 */ 		return newnodes;
/* 000294 */ 	});},
/* 000296 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000297 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000297 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000297 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000297 */ 			var j = __left0__ [0];
/* 000297 */ 			var node = __left0__ [1];
/* 000298 */ 			var newnode = (function () {
/* 000298 */ 				var __accu0__ = self;
/* 000298 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000298 */ 			}) ();
/* 000299 */ 			if (__t__ (newnode !== null)) {
/* 000300 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000301 */ 				if (__t__ (newnode !== true)) {
/* 000302 */ 					(function () {
/* 000302 */ 						var __accu0__ = newnodes;
/* 000302 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000302 */ 					}) ();
/* 000302 */ 				}
/* 000303 */ 				return (function () {
/* 000303 */ 					var __accu0__ = nodes.latex_walker;
/* 000303 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000303 */ 		}
/* 000308 */ 		return null;
/* 000308 */ 	});},
/* 000310 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000310 */ 		if (arguments.length) {
/* 000310 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000310 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000310 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000310 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000310 */ 					switch (__attrib0__) {
/* 000310 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 					}
/* 000310 */ 				}
/* 000310 */ 			}
/* 000310 */ 		}
/* 000310 */ 		else {
/* 000310 */ 		}
/* 000311 */ 		if (__t__ ((function () {
/* 000311 */ 			var __accu0__ = node;
/* 000311 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000311 */ 		}) ())) {
/* 000312 */ 			return (function () {
/* 000312 */ 				var __accu0__ = self;
/* 000312 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000312 */ 			}) ();
/* 000312 */ 		}
/* 000314 */ 		if (__t__ ((function () {
/* 000314 */ 			var __accu0__ = node;
/* 000314 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000314 */ 		}) ())) {
/* 000315 */ 			return (function () {
/* 000315 */ 				var __accu0__ = self;
/* 000315 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000315 */ 			}) ();
/* 000315 */ 		}
/* 000317 */ 		if (__t__ ((function () {
/* 000317 */ 			var __accu0__ = node;
/* 000317 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000317 */ 		}) ())) {
/* 000318 */ 			return (function () {
/* 000318 */ 				var __accu0__ = self;
/* 000318 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000318 */ 			}) ();
/* 000318 */ 		}
/* 000320 */ 		if (__t__ ((function () {
/* 000320 */ 			var __accu0__ = node;
/* 000320 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000320 */ 		}) ())) {
/* 000321 */ 			return (function () {
/* 000321 */ 				var __accu0__ = self;
/* 000321 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000321 */ 			}) ();
/* 000321 */ 		}
/* 000323 */ 		return (function () {
/* 000323 */ 			var __accu0__ = self;
/* 000323 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000325 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
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
/* 000326 */ 		var groupnodelist = (function () {
/* 000326 */ 			var __accu0__ = self;
/* 000326 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000326 */ 		}) ();
/* 000327 */ 		if (__t__ (groupnodelist === null)) {
/* 000329 */ 			return null;
/* 000329 */ 		}
/* 000331 */ 		var groupnode = (function () {
/* 000331 */ 			var __accu0__ = node.latex_walker;
/* 000331 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000331 */ 		}) ();
/* 000339 */ 		return groupnode;
/* 000339 */ 	});},
/* 000342 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000343 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000344 */ 			return (function () {
/* 000344 */ 				var __accu0__ = self;
/* 000344 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000344 */ 			}) ();
/* 000344 */ 		}
/* 000345 */ 		return (function () {
/* 000345 */ 			var __accu0__ = self;
/* 000345 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000345 */ 		}) ();
/* 000345 */ 	});},
/* 000347 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000350 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_flm_main_text_argument'))) {
/* 000351 */ 			var main_text_argname = node.spec._flm_main_text_argument;
/* 000353 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000353 */ 				var __accu0__ = [];
/* 000353 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000353 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000353 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000353 */ 					var j = __left0__ [0];
/* 000353 */ 					var arg = __left0__ [1];
/* 000353 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000354 */ 						(function () {
/* 000354 */ 							var __accu1__ = __accu0__;
/* 000354 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000354 */ 						}) ();
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 				return py_iter (__accu0__);
/* 000354 */ 			}) ());
/* 000356 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000357 */ 			var text_arg_new = (function () {
/* 000357 */ 				var __accu0__ = self;
/* 000357 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000357 */ 			}) ();
/* 000358 */ 			if (__t__ (text_arg_new)) {
/* 000359 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000362 */ 				if (__t__ (text_arg_new !== null)) {
/* 000364 */ 					var newmacronode = (function () {
/* 000364 */ 						var __accu0__ = node.latex_walker;
/* 000368 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000368 */ 							var __accu1__ = latexnodes;
/* 000368 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000368 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000368 */ 					}) ();
/* 000379 */ 					var newmacronode = (function () {
/* 000379 */ 						var __accu0__ = node.spec;
/* 000379 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000379 */ 					}) ();
/* 000380 */ 					return newmacronode;
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000383 */ 		return null;
/* 000383 */ 	});},
/* 000385 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
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
/* 000386 */ 		var nodelist = (function () {
/* 000386 */ 			var __accu0__ = self;
/* 000386 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000386 */ 		}) ();
/* 000387 */ 		if (__t__ (nodelist === null)) {
/* 000389 */ 			return null;
/* 000389 */ 		}
/* 000391 */ 		var newnode = (function () {
/* 000391 */ 			var __accu0__ = node.latex_walker;
/* 000391 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000391 */ 		}) ();
/* 000400 */ 		var newnode = (function () {
/* 000400 */ 			var __accu0__ = node.spec;
/* 000400 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000400 */ 		}) ();
/* 000401 */ 		return newnode;
/* 000401 */ 	});},
/* 000403 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000406 */ 		var my_length = __call__ (len, null, (function () {
/* 000406 */ 			var __accu0__ = node;
/* 000406 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000406 */ 		}) ());
/* 000407 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000409 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000410 */ 			return null;
/* 000410 */ 		}
/* 000412 */ 		return true;
/* 000412 */ 	});},
/* 000414 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000416 */ 		var estimated_length = (function () {
/* 000416 */ 			var __accu0__ = self;
/* 000416 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000416 */ 		}) ();
/* 000418 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000420 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000421 */ 			return null;
/* 000421 */ 		}
/* 000424 */ 		if (__t__ ((function () {
/* 000424 */ 			var __accu0__ = node;
/* 000424 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000424 */ 		}) ())) {
/* 000426 */ 			var chars = node.chars;
/* 000427 */ 			var last_break_pos = 0;
/* 000428 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000428 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000428 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000428 */ 				var j = __left0__ [0];
/* 000428 */ 				var c = __left0__ [1];
/* 000429 */ 				if (__t__ (!__t__ (((function () {
/* 000429 */ 					var __accu0__ = c;
/* 000429 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000429 */ 				}) ())))) {
/* 000430 */ 					var last_break_pos = j;
/* 000430 */ 				}
/* 000431 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000432 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000432 */ 						break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 				continue;
/* 000432 */ 			}
/* 000438 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000440 */ 			var new_node = (function () {
/* 000440 */ 				var __accu0__ = node.latex_walker;
/* 000440 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000440 */ 			}) ();
/* 000447 */ 			return new_node;
/* 000447 */ 		}
/* 000451 */ 		if (__t__ (__t__ (self.min_chars !== null) && __lt__ (self.count, self.min_chars))) {
/* 000453 */ 			return node;
/* 000453 */ 		}
/* 000456 */ 		return true;
/* 000456 */ 	});},
/* 000459 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 		}
/* 000461 */ 		if (__t__ ((function () {
/* 000461 */ 			var __accu0__ = node;
/* 000461 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000461 */ 		}) ())) {
/* 000462 */ 			return __call__ (len, null, node.chars);
/* 000462 */ 		}
/* 000464 */ 		if (__t__ ((function () {
/* 000464 */ 			var __accu0__ = node;
/* 000464 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000464 */ 		}) ())) {
/* 000469 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000469 */ 				var __accu0__ = node;
/* 000469 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000469 */ 			}) ()), 2)), 3);
/* 000469 */ 		}
/* 000471 */ 		if (__t__ ((function () {
/* 000471 */ 			var __accu0__ = node;
/* 000471 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000471 */ 		}) ())) {
/* 000472 */ 			return 0;
/* 000472 */ 		}
/* 000474 */ 		return 0;
/* 000474 */ 	});}
/* 000474 */ });
/* 000479 */ export var _abbrevtext = function (x, maxlen) {
/* 000479 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 000479 */ 		var maxlen = 100;
/* 000479 */ 	};
/* 000479 */ 	if (arguments.length) {
/* 000479 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000479 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000479 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000479 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000479 */ 				switch (__attrib0__) {
/* 000479 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 				}
/* 000479 */ 			}
/* 000479 */ 		}
/* 000479 */ 	}
/* 000479 */ 	else {
/* 000479 */ 	}
/* 000480 */ 	var x = __call__ (str, null, x);
/* 000481 */ 	return __add__ (__getslice__ (x, 0, maxlen, 1), (__t__ (__gt__ (__call__ (len, null, x), maxlen)) ? '…' : ''));
/* 000481 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmfragment.map