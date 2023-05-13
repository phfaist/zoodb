/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:21
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMStandaloneModeRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_parsers, latexnodes, latexnodes_nodes, FLMStandaloneModeRenderContext};
/* 000001 */ var __name__ = 'flm.flmfragment';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000019 */ export var _flmfragment_attribute_fields = tuple (['is_block_level', 'resource_info', 'standalone_mode', 'silent', 'what', 'parsing_mode']);
/* 000029 */ export var FLMFragment =  __class__ ('FLMFragment', [object], {
/* 000029 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self, flm_text, environment) {
/* 000049 */ 		var is_block_level = null;
/* 000049 */ 		var resource_info = null;
/* 000049 */ 		var standalone_mode = false;
/* 000049 */ 		var tolerant_parsing = false;
/* 000049 */ 		var what = '(unknown)';
/* 000049 */ 		var silent = false;
/* 000049 */ 		var parsing_mode = null;
/* 000049 */ 		var input_lineno_colno_offsets = null;
/* 000049 */ 		var _flm_text_if_loading_nodes = null;
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'silent': var silent = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case '_flm_text_if_loading_nodes': var _flm_text_if_loading_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000065 */ 		self.flm_text = flm_text;
/* 000066 */ 		self.environment = environment;
/* 000068 */ 		self.is_block_level = is_block_level;
/* 000069 */ 		self.resource_info = resource_info;
/* 000070 */ 		self.standalone_mode = standalone_mode;
/* 000071 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000072 */ 		self.what = what;
/* 000073 */ 		self.silent = silent;
/* 000074 */ 		self.parsing_mode = parsing_mode;
/* 000076 */ 		if (__t__ (__call__ (isinstance, null, flm_text, latexnodes_nodes.LatexNodeList))) {
/* 000079 */ 			self.nodes = self.flm_text;
/* 000080 */ 			self.latex_walker = self.nodes.latex_walker;
/* 000081 */ 			if (__t__ (_flm_text_if_loading_nodes)) {
/* 000082 */ 				self.flm_text = _flm_text_if_loading_nodes;
/* 000082 */ 			}
/* 000083 */ 			else {
/* 000084 */ 				self.flm_text = (function () {
/* 000084 */ 					var __accu0__ = self.nodes;
/* 000084 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000084 */ 				}) ();
/* 000084 */ 			}
/* 000085 */ 			return ;
/* 000085 */ 		}
/* 000087 */ 		try {
/* 000089 */ 			var __left0__ = (function () {
/* 000089 */ 				var __accu0__ = FLMFragment;
/* 000089 */ 				return __call__ (__accu0__.parse, __accu0__, self.flm_text, self.environment, __kwargtrans__ ({standalone_mode: self.standalone_mode, tolerant_parsing: self.tolerant_parsing, is_block_level: self.is_block_level, what: self.what, resource_info: self.resource_info, parsing_mode: self.parsing_mode, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000089 */ 			}) ();
/* 000089 */ 			self.latex_walker = __left0__ [0];
/* 000089 */ 			self.nodes = __left0__ [1];
/* 000089 */ 		}
/* 000089 */ 		catch (__except0__) {
/* 000089 */ 			if (isinstance (__except0__, latexnodes.LatexWalkerLocatedError)) {
/* 000089 */ 				var e = __except0__;
/* 000101 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000102 */ 					var error_message = (function () {
/* 000102 */ 						var __accu0__ = self.environment;
/* 000102 */ 						return __call__ (__accu0__.get_located_error_message, __accu0__, e);
/* 000102 */ 					}) ();
/* 000103 */ 					(function () {
/* 000103 */ 						var __accu0__ = logger;
/* 000103 */ 						return __call__ (__accu0__.error, __accu0__, 'Parse error in latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, error_message, self.flm_text));
/* 000103 */ 					}) ();
/* 000103 */ 				}
/* 000107 */ 				__except0__.__cause__ = null;
/* 000107 */ 				throw __except0__;
/* 000107 */ 			}
/* 000107 */ 			else if (isinstance (__except0__, Exception)) {
/* 000107 */ 				var e = __except0__;
/* 000109 */ 				if (__t__ (!__t__ ((self.silent)))) {
/* 000110 */ 					(function () {
/* 000110 */ 						var __accu0__ = logger;
/* 000110 */ 						return __call__ (__accu0__.error, __accu0__, 'Error parsing latex-like markup ‘{}’: {}\nGiven text was:\n‘{}’\n\n'.format (self.what, e, self.flm_text));
/* 000110 */ 					}) ();
/* 000110 */ 				}
/* 000112 */ 				__except0__.__cause__ = null;
/* 000112 */ 				throw __except0__;
/* 000112 */ 			}
/* 000112 */ 			else {
/* 000112 */ 				throw __except0__;
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 	});},
/* 000115 */ 	_attribute_fields: _flmfragment_attribute_fields,
/* 000117 */ 	_fields: __call__ (tuple, null, __add__ (['nodes'], __call__ (list, null, _flmfragment_attribute_fields))),
/* 000121 */ 	get _attributes () {return __get__ (this, function (self) {
/* 000121 */ 		var kwargs = dict ();
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 				delete kwargs.__kwargtrans__;
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000122 */ 		var d = (function () {
/* 000122 */ 			var __accu0__ = [];
/* 000122 */ 			var __iterable0__ = self._attribute_fields;
/* 000122 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000124 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000124 */ 				(function () {
/* 000124 */ 					var __accu1__ = __accu0__;
/* 000123 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000123 */ 				}) ();
/* 000123 */ 			}
/* 000123 */ 			return dict (__accu0__);
/* 000123 */ 		}) ();
/* 000134 */ 		(function () {
/* 000134 */ 			var __accu0__ = d;
/* 000134 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000134 */ 		}) ();
/* 000135 */ 		return d;
/* 000135 */ 	});},
/* 000138 */ 	get render () {return __get__ (this, function (self, render_context) {
/* 000138 */ 		var kwargs = dict ();
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 				delete kwargs.__kwargtrans__;
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		return (function () {
/* 000139 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000139 */ 			return __call__ (__accu0__.render_fragment, __accu0__, self, render_context, __kwargtrans__ (kwargs));
/* 000139 */ 		}) ();
/* 000139 */ 	});},
/* 000144 */ 	get render_standalone () {return __get__ (this, function (self, fragment_renderer) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		if (__t__ (!__t__ ((self.standalone_mode)))) {
/* 000146 */ 			var __except0__ = __call__ (ValueError, null, 'You can only use render_standalone() on a fragment that was parsed in standalone mode (use `standalone_mode=True` in the FLMFragment constructor)');
/* 000146 */ 			__except0__.__cause__ = null;
/* 000146 */ 			throw __except0__;
/* 000146 */ 		}
/* 000151 */ 		var render_context = __call__ (FLMStandaloneModeRenderContext, null, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000152 */ 		return (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.render, __accu0__, render_context);
/* 000152 */ 		}) ();
/* 000152 */ 	});},
/* 000155 */ 	get parse () {return __getcm__ (this, function (cls, flm_text, environment) {
/* 000155 */ 		var standalone_mode = false;
/* 000155 */ 		var tolerant_parsing = null;
/* 000155 */ 		var is_block_level = null;
/* 000155 */ 		var parsing_mode = null;
/* 000155 */ 		var resource_info = null;
/* 000155 */ 		var what = null;
/* 000155 */ 		var input_lineno_colno_offsets = null;
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000162 */ 		// pass;
/* 000166 */ 		var latex_walker = (function () {
/* 000166 */ 			var __accu0__ = environment;
/* 000166 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode, resource_info: resource_info, standalone_mode: standalone_mode, tolerant_parsing: tolerant_parsing, what: what, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000166 */ 		}) ();
/* 000177 */ 		var __left0__ = (function () {
/* 000177 */ 			var __accu0__ = latex_walker;
/* 000178 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000178 */ 				var __accu1__ = latexnodes_parsers;
/* 000178 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000178 */ 			}) ());
/* 000178 */ 		}) ();
/* 000178 */ 		var nodes = __left0__ [0];
/* 000178 */ 		var _ = __left0__ [1];
/* 000181 */ 		return tuple ([latex_walker, nodes]);
/* 000181 */ 	});},
/* 000184 */ 	get start_node_visitor () {return __get__ (this, function (self, node_visitor) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'node_visitor': var node_visitor = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		(function () {
/* 000185 */ 			var __accu0__ = node_visitor;
/* 000185 */ 			return __call__ (__accu0__.start, __accu0__, self.nodes);
/* 000185 */ 		}) ();
/* 000185 */ 	});},
/* 000188 */ 	get is_empty () {return __get__ (this, function (self) {
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
/* 000189 */ 		return __eq__ (__call__ (len, null, (function () {
/* 000189 */ 			var __accu0__ = self.flm_text;
/* 000189 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000189 */ 		}) ()), 0);
/* 000189 */ 	});},
/* 000191 */ 	get __bool__ () {return __get__ (this, function (self) {
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
/* 000192 */ 		return !__t__ (((function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.is_empty, __accu0__);
/* 000192 */ 		}) ()));
/* 000192 */ 	});},
/* 000194 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		var theflmtext = self.flm_text;
/* 000196 */ 		if (__t__ (__gt__ (__call__ (len, null, theflmtext), 50))) {
/* 000197 */ 			var theflmtext = __add__ (__getslice__ (theflmtext, 0, 49, 1), '…');
/* 000197 */ 		}
/* 000198 */ 		return '<{} {}>'.format (self.__class__.__name__, theflmtext);
/* 000198 */ 	});},
/* 000201 */ 	get whitespace_stripped () {return __get__ (this, function (self) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000202 */ 		var new_fragment = (function () {
/* 000202 */ 			var __accu0__ = self.environment;
/* 000203 */ 			return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000203 */ 				var __accu1__ = self.flm_text;
/* 000203 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000204 */ 			}) (), __kwargtrans__ ((function () {
/* 000204 */ 				var __accu1__ = self;
/* 000204 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:whitespace-stripped'.format (self.what)}));
/* 000204 */ 			}) ()));
/* 000204 */ 		}) ();
/* 000206 */ 		return new_fragment;
/* 000206 */ 	});},
/* 000208 */ 	get get_first_paragraph () {return __get__ (this, function (self) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000213 */ 		var nodelists_paragraphs = (function () {
/* 000213 */ 			var __accu0__ = self.nodes;
/* 000213 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000213 */ 				if (arguments.length) {
/* 000213 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 							switch (__attrib0__) {
/* 000213 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							}
/* 000213 */ 						}
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 				else {
/* 000213 */ 				}
/* 000214 */ 				return __t__ ((function () {
/* 000214 */ 					var __accu1__ = n;
/* 000214 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexSpecialsNode);
/* 000214 */ 				}) ()) && __eq__ (n.specials_chars, '\n\n');
/* 000214 */ 			}), __kwargtrans__ ({max_split: 1}));
/* 000214 */ 		}) ();
/* 000219 */ 		var nodelists_paragraphs = (function () {
/* 000219 */ 			var __accu0__ = [];
/* 000219 */ 			var __iterable0__ = nodelists_paragraphs;
/* 000219 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000221 */ 				var nls_p = __getitem__ (__iterable0__, __index0__);
/* 000222 */ 				if (__t__ (__gt__ (__call__ (len, null, nls_p), 0))) {
/* 000222 */ 					(function () {
/* 000222 */ 						var __accu1__ = __accu0__;
/* 000222 */ 						return __call__ (__accu1__.append, __accu1__, nls_p);
/* 000222 */ 					}) ();
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 			return __accu0__;
/* 000222 */ 		}) ();
/* 000225 */ 		if (__t__ (!__t__ ((nodelists_paragraphs)))) {
/* 000226 */ 			return self;
/* 000226 */ 		}
/* 000228 */ 		// pass;
/* 000232 */ 		var thenodes = __getitem__ (nodelists_paragraphs, 0);
/* 000234 */ 		// pass;
/* 000237 */ 		return (function () {
/* 000237 */ 			var __accu0__ = self.environment;
/* 000239 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: thenodes}, (function () {
/* 000239 */ 				var __accu1__ = self;
/* 000239 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:first-paragraph'.format (self.what)}));
/* 000239 */ 			}) ())));
/* 000239 */ 		}) ();
/* 000239 */ 	});},
/* 000242 */ 	get truncate_to () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000242 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000242 */ 			var min_chars = null;
/* 000242 */ 		};
/* 000242 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000242 */ 			var truncation_marker = ' …';
/* 000242 */ 		};
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000244 */ 		var trunc = __call__ (_NodeListTruncator, null, __kwargtrans__ ({chars: chars, min_chars: min_chars, truncation_marker: truncation_marker}));
/* 000247 */ 		var newnodes = (function () {
/* 000247 */ 			var __accu0__ = trunc;
/* 000247 */ 			return __call__ (__accu0__.truncate_node_list, __accu0__, self.nodes);
/* 000247 */ 		}) ();
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = self.environment;
/* 000251 */ 			return __call__ (__accu0__.make_fragment, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({flm_text: newnodes}, (function () {
/* 000251 */ 				var __accu1__ = self;
/* 000251 */ 				return __call__ (__accu1__._attributes, __accu1__, __kwargtrans__ ({what: '{}:tr-{}'.format (self.what, chars)}));
/* 000251 */ 			}) ())));
/* 000251 */ 		}) ();
/* 000251 */ 	});}
/* 000251 */ });
/* 000261 */ export var _NodeListTruncator =  __class__ ('_NodeListTruncator', [object], {
/* 000261 */ 	__module__: __name__,
/* 000262 */ 	get __init__ () {return __get__ (this, function (self, chars, min_chars, truncation_marker) {
/* 000262 */ 		if (typeof min_chars == 'undefined' || (min_chars != null && min_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000262 */ 			var min_chars = null;
/* 000262 */ 		};
/* 000262 */ 		if (typeof truncation_marker == 'undefined' || (truncation_marker != null && truncation_marker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000262 */ 			var truncation_marker = null;
/* 000262 */ 		};
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'min_chars': var min_chars = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'truncation_marker': var truncation_marker = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		__call__ (__call__ (__super__, null, _NodeListTruncator, '__init__'), null, self);
/* 000264 */ 		self.chars = chars;
/* 000265 */ 		self.min_chars = min_chars;
/* 000266 */ 		self.truncation_marker = truncation_marker;
/* 000268 */ 		self.count = 0;
/* 000268 */ 	});},
/* 000270 */ 	get truncate_node_list () {return __get__ (this, function (self, nodes) {
/* 000270 */ 		if (arguments.length) {
/* 000270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 					switch (__attrib0__) {
/* 000270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 			}
/* 000270 */ 		}
/* 000270 */ 		else {
/* 000270 */ 		}
/* 000271 */ 		self.count = 0;
/* 000272 */ 		var newnodes = (function () {
/* 000272 */ 			var __accu0__ = self;
/* 000272 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, nodes);
/* 000272 */ 		}) ();
/* 000273 */ 		if (__t__ (newnodes === null)) {
/* 000274 */ 			return nodes;
/* 000274 */ 		}
/* 000275 */ 		return newnodes;
/* 000275 */ 	});},
/* 000277 */ 	get collect_nodes () {return __get__ (this, function (self, nodes) {
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000278 */ 		var __iterable0__ = __call__ (enumerate, null, nodes);
/* 000278 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000278 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000278 */ 			var j = __left0__ [0];
/* 000278 */ 			var node = __left0__ [1];
/* 000279 */ 			var newnode = (function () {
/* 000279 */ 				var __accu0__ = self;
/* 000279 */ 				return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000279 */ 			}) ();
/* 000280 */ 			if (__t__ (newnode !== null)) {
/* 000281 */ 				var newnodes = __getslice__ (nodes, 0, j, 1);
/* 000282 */ 				if (__t__ (newnode !== true)) {
/* 000283 */ 					(function () {
/* 000283 */ 						var __accu0__ = newnodes;
/* 000283 */ 						return __call__ (__accu0__.extend, __accu0__, [newnode]);
/* 000283 */ 					}) ();
/* 000283 */ 				}
/* 000284 */ 				return (function () {
/* 000284 */ 					var __accu0__ = nodes.latex_walker;
/* 000284 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, newnodes, __kwargtrans__ ({parsing_state: nodes.parsing_state}));
/* 000284 */ 				}) ();
/* 000284 */ 			}
/* 000284 */ 		}
/* 000289 */ 		return null;
/* 000289 */ 	});},
/* 000291 */ 	get collect_node () {return __get__ (this, function (self, node) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		if (__t__ ((function () {
/* 000292 */ 			var __accu0__ = node;
/* 000292 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000292 */ 		}) ())) {
/* 000293 */ 			return (function () {
/* 000293 */ 				var __accu0__ = self;
/* 000293 */ 				return __call__ (__accu0__.collect_nodes_groupnode, __accu0__, node);
/* 000293 */ 			}) ();
/* 000293 */ 		}
/* 000295 */ 		if (__t__ ((function () {
/* 000295 */ 			var __accu0__ = node;
/* 000295 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000295 */ 		}) ())) {
/* 000296 */ 			return (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__.collect_nodes_macronode, __accu0__, node);
/* 000296 */ 			}) ();
/* 000296 */ 		}
/* 000298 */ 		if (__t__ ((function () {
/* 000298 */ 			var __accu0__ = node;
/* 000298 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000298 */ 		}) ())) {
/* 000299 */ 			return (function () {
/* 000299 */ 				var __accu0__ = self;
/* 000299 */ 				return __call__ (__accu0__.collect_nodes_environmentnode, __accu0__, node);
/* 000299 */ 			}) ();
/* 000299 */ 		}
/* 000301 */ 		if (__t__ ((function () {
/* 000301 */ 			var __accu0__ = node;
/* 000301 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000301 */ 		}) ())) {
/* 000302 */ 			return (function () {
/* 000302 */ 				var __accu0__ = self;
/* 000302 */ 				return __call__ (__accu0__.collect_nodes_specialsnode, __accu0__, node);
/* 000302 */ 			}) ();
/* 000302 */ 		}
/* 000304 */ 		return (function () {
/* 000304 */ 			var __accu0__ = self;
/* 000304 */ 			return __call__ (__accu0__.collect_nodes_simplenode, __accu0__, node);
/* 000304 */ 		}) ();
/* 000304 */ 	});},
/* 000306 */ 	get collect_nodes_groupnode () {return __get__ (this, function (self, node) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000307 */ 		var groupnodelist = (function () {
/* 000307 */ 			var __accu0__ = self;
/* 000307 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000307 */ 		}) ();
/* 000308 */ 		if (__t__ (groupnodelist === null)) {
/* 000310 */ 			return null;
/* 000310 */ 		}
/* 000312 */ 		var groupnode = (function () {
/* 000312 */ 			var __accu0__ = node.latex_walker;
/* 000312 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: node.delimiters, nodelist: groupnodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000312 */ 		}) ();
/* 000320 */ 		return groupnode;
/* 000320 */ 	});},
/* 000323 */ 	get collect_node_argument () {return __get__ (this, function (self, node) {
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
/* 000324 */ 		if (__t__ (__call__ (isinstance, null, node, latexnodes_nodes.LatexNodeList))) {
/* 000325 */ 			return (function () {
/* 000325 */ 				var __accu0__ = self;
/* 000325 */ 				return __call__ (__accu0__.collect_nodes, __accu0__, node);
/* 000325 */ 			}) ();
/* 000325 */ 		}
/* 000326 */ 		return (function () {
/* 000326 */ 			var __accu0__ = self;
/* 000326 */ 			return __call__ (__accu0__.collect_node, __accu0__, node);
/* 000326 */ 		}) ();
/* 000326 */ 	});},
/* 000328 */ 	get collect_nodes_macronode () {return __get__ (this, function (self, node) {
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000331 */ 		if (__t__ (__call__ (hasattr, null, node.spec, '_flm_main_text_argument'))) {
/* 000332 */ 			var main_text_argname = node.spec._flm_main_text_argument;
/* 000334 */ 			var arg_j = __call__ (py_next, null, (function () {
/* 000334 */ 				var __accu0__ = [];
/* 000334 */ 				var __iterable0__ = __call__ (enumerate, null, node.spec.arguments_spec_list);
/* 000334 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000334 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000334 */ 					var j = __left0__ [0];
/* 000334 */ 					var arg = __left0__ [1];
/* 000334 */ 					if (__t__ (__eq__ (arg.argname, main_text_argname))) {
/* 000335 */ 						(function () {
/* 000335 */ 							var __accu1__ = __accu0__;
/* 000335 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000335 */ 						}) ();
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 				return py_iter (__accu0__);
/* 000335 */ 			}) ());
/* 000337 */ 			var text_arg = __getitem__ (node.nodeargd.argnlist, arg_j);
/* 000338 */ 			var text_arg_new = (function () {
/* 000338 */ 				var __accu0__ = self;
/* 000338 */ 				return __call__ (__accu0__.collect_node_argument, __accu0__, text_arg);
/* 000338 */ 			}) ();
/* 000339 */ 			if (__t__ (text_arg_new)) {
/* 000340 */ 				var new_argnlist = __add__ (__add__ (__getslice__ (node.nodeargd.argnlist, 0, arg_j, 1), [text_arg_new]), __getslice__ (node.nodeargd.argnlist, __add__ (arg_j, 1), null, 1));
/* 000343 */ 				if (__t__ (text_arg_new !== null)) {
/* 000345 */ 					var newmacronode = (function () {
/* 000345 */ 						var __accu0__ = node.latex_walker;
/* 000349 */ 						return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: node.macroname, spec: node.spec, nodeargd: (function () {
/* 000349 */ 							var __accu1__ = latexnodes;
/* 000349 */ 							return __call__ (__accu1__.ParsedArguments, __accu1__, __kwargtrans__ ({arguments_spec_list: node.nodeargd.arguments_spec_list, argnlist: new_argnlist}));
/* 000349 */ 						}) (), macro_post_space: node.macro_post_space, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000349 */ 					}) ();
/* 000360 */ 					var newmacronode = (function () {
/* 000360 */ 						var __accu0__ = node.spec;
/* 000360 */ 						return __call__ (__accu0__.finalize_node, __accu0__, newmacronode);
/* 000360 */ 					}) ();
/* 000361 */ 					return newmacronode;
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000364 */ 		return null;
/* 000364 */ 	});},
/* 000366 */ 	get collect_nodes_environmentnode () {return __get__ (this, function (self, node) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		var nodelist = (function () {
/* 000367 */ 			var __accu0__ = self;
/* 000367 */ 			return __call__ (__accu0__.collect_nodes, __accu0__, node.nodelist);
/* 000367 */ 		}) ();
/* 000368 */ 		if (__t__ (nodelist === null)) {
/* 000370 */ 			return null;
/* 000370 */ 		}
/* 000372 */ 		var newnode = (function () {
/* 000372 */ 			var __accu0__ = node.latex_walker;
/* 000372 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexEnvironmentNode, __kwargtrans__ ({environmentname: node.environmentname, nodeargd: node.nodeargd, nodelist: nodelist, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000372 */ 		}) ();
/* 000381 */ 		var newnode = (function () {
/* 000381 */ 			var __accu0__ = node.spec;
/* 000381 */ 			return __call__ (__accu0__.finalize_node, __accu0__, newnode);
/* 000381 */ 		}) ();
/* 000382 */ 		return newnode;
/* 000382 */ 	});},
/* 000384 */ 	get collect_nodes_specialsnode () {return __get__ (this, function (self, node) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000387 */ 		var my_length = __call__ (len, null, (function () {
/* 000387 */ 			var __accu0__ = node;
/* 000387 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000387 */ 		}) ());
/* 000388 */ 		if (__t__ (__lt__ (my_length, __sub__ (self.chars, self.count)))) {
/* 000390 */ 			self.count = __call__ (__iadd__, null, self.count, my_length);
/* 000391 */ 			return null;
/* 000391 */ 		}
/* 000393 */ 		return true;
/* 000393 */ 	});},
/* 000395 */ 	get collect_nodes_simplenode () {return __get__ (this, function (self, node) {
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
/* 000397 */ 		var estimated_length = (function () {
/* 000397 */ 			var __accu0__ = self;
/* 000397 */ 			return __call__ (__accu0__.estimate_simple_node_char_count, __accu0__, node);
/* 000397 */ 		}) ();
/* 000399 */ 		if (__t__ (__lt__ (estimated_length, __sub__ (self.chars, self.count)))) {
/* 000401 */ 			self.count = __call__ (__iadd__, null, self.count, estimated_length);
/* 000402 */ 			return null;
/* 000402 */ 		}
/* 000405 */ 		if (__t__ ((function () {
/* 000405 */ 			var __accu0__ = node;
/* 000405 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000405 */ 		}) ())) {
/* 000407 */ 			var chars = node.chars;
/* 000408 */ 			var last_break_pos = 0;
/* 000409 */ 			var __iterable0__ = __call__ (enumerate, null, chars);
/* 000409 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000409 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000409 */ 				var j = __left0__ [0];
/* 000409 */ 				var c = __left0__ [1];
/* 000410 */ 				if (__t__ (!__t__ (((function () {
/* 000410 */ 					var __accu0__ = c;
/* 000410 */ 					return __call__ (__accu0__.isalpha, __accu0__);
/* 000410 */ 				}) ())))) {
/* 000411 */ 					var last_break_pos = j;
/* 000411 */ 				}
/* 000412 */ 				if (__t__ (__gt__ (__add__ (self.count, j), self.chars))) {
/* 000413 */ 					if (__t__ (__t__ (self.min_chars === null) || __ge__ (__add__ (self.count, last_break_pos), self.min_chars))) {
/* 000413 */ 						break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 				continue;
/* 000413 */ 			}
/* 000419 */ 			var newchars = __add__ (__getslice__ (chars, 0, last_break_pos, 1), self.truncation_marker);
/* 000421 */ 			var new_node = (function () {
/* 000421 */ 				var __accu0__ = node.latex_walker;
/* 000421 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: newchars, parsing_state: node.parsing_state, pos: node.pos, pos_end: node.pos_end}));
/* 000421 */ 			}) ();
/* 000428 */ 			return new_node;
/* 000428 */ 		}
/* 000432 */ 		if (__t__ (__lt__ (self.count, self.min_chars))) {
/* 000434 */ 			return node;
/* 000434 */ 		}
/* 000437 */ 		return true;
/* 000437 */ 	});},
/* 000440 */ 	get estimate_simple_node_char_count () {return __get__ (this, function (self, node) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000442 */ 		if (__t__ ((function () {
/* 000442 */ 			var __accu0__ = node;
/* 000442 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000442 */ 		}) ())) {
/* 000443 */ 			return __call__ (len, null, node.chars);
/* 000443 */ 		}
/* 000445 */ 		if (__t__ ((function () {
/* 000445 */ 			var __accu0__ = node;
/* 000445 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMathNode);
/* 000445 */ 		}) ())) {
/* 000450 */ 			return __floordiv__ ((__mul__ (__call__ (len, null, (function () {
/* 000450 */ 				var __accu0__ = node;
/* 000450 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000450 */ 			}) ()), 2)), 3);
/* 000450 */ 		}
/* 000452 */ 		if (__t__ ((function () {
/* 000452 */ 			var __accu0__ = node;
/* 000452 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000452 */ 		}) ())) {
/* 000453 */ 			return 0;
/* 000453 */ 		}
/* 000455 */ 		return 0;
/* 000455 */ 	});}
/* 000455 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmfragment.map