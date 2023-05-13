/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:14:46
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000013 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {macrospec, ParsedArgumentsInfo, LatexWalkerParseError, FLMArgumentSpec, latexnodes_parsers, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.flmspecinfo';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000025 */ export var FLMSpecInfo =  __class__ ('FLMSpecInfo', [object], {
/* 000025 */ 	__module__: __name__,
/* 000032 */ 	delayed_render: false,
/* 000041 */ 	is_block_level: false,
/* 000048 */ 	is_block_heading: false,
/* 000057 */ 	is_paragraph_break_marker: false,
/* 000064 */ 	allowed_in_standalone_mode: false,
/* 000082 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000089 */ 		// pass;
/* 000089 */ 	});},
/* 000091 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000099 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000099 */ 		__except0__.__cause__ = null;
/* 000099 */ 		throw __except0__;
/* 000099 */ 	});},
/* 000101 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000106 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000106 */ 		__except0__.__cause__ = null;
/* 000106 */ 		throw __except0__;
/* 000106 */ 	});},
/* 000115 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000120 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000121 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000123 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000123 */ 				var __accu0__ = node;
/* 000123 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000123 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000123 */ 			__except0__.__cause__ = null;
/* 000123 */ 			throw __except0__;
/* 000123 */ 		}
/* 000127 */ 		node.flm_specinfo = self;
/* 000128 */ 		try {
/* 000129 */ 			(function () {
/* 000129 */ 				var __accu0__ = self;
/* 000129 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000129 */ 			}) ();
/* 000129 */ 		}
/* 000129 */ 		catch (__except0__) {
/* 000129 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000129 */ 				var e = __except0__;
/* 000132 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000133 */ 					e.pos = node.pos;
/* 000133 */ 				}
/* 000134 */ 				var __except1__ = e;
/* 000134 */ 				__except1__.__cause__ = null;
/* 000134 */ 				throw __except1__;
/* 000134 */ 			}
/* 000134 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000134 */ 				var e = __except0__;
/* 000137 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000137 */ 				__except1__.__cause__ = null;
/* 000137 */ 				throw __except1__;
/* 000137 */ 			}
/* 000137 */ 			else if (isinstance (__except0__, Exception)) {
/* 000137 */ 				var e = __except0__;
/* 000140 */ 				(function () {
/* 000140 */ 					var __accu0__ = logger;
/* 000140 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000140 */ 				}) ();
/* 000142 */ 				(function () {
/* 000142 */ 					var __accu0__ = logger;
/* 000143 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000143 */ 						var __accu1__ = node.latex_walker;
/* 000143 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000144 */ 					}) ()), (function () {
/* 000144 */ 						var __accu1__ = node;
/* 000144 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000144 */ 					}) ()));
/* 000144 */ 				}) ();
/* 000146 */ 				__except0__.__cause__ = null;
/* 000146 */ 				throw __except0__;
/* 000146 */ 			}
/* 000146 */ 			else {
/* 000146 */ 				throw __except0__;
/* 000146 */ 			}
/* 000146 */ 		}
/* 000148 */ 		node.flm_is_block_level = self.is_block_level;
/* 000149 */ 		node.flm_is_block_heading = self.is_block_heading;
/* 000150 */ 		node.flm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000155 */ 		return node;
/* 000155 */ 	});}
/* 000155 */ });
/* 000167 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000167 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000167 */ 		var kwargs_to_first_constructor = null;
/* 000167 */ 	};
/* 000167 */ 	if (arguments.length) {
/* 000167 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 				switch (__attrib0__) {
/* 000167 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 	}
/* 000167 */ 	else {
/* 000167 */ 	}
/* 000169 */ 	var kwargs1 = dict ({});
/* 000170 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000171 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000172 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000172 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000172 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000173 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000174 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000174 */ 					var __accu0__ = kwargs2;
/* 000174 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000174 */ 				}) ());
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 	}
/* 000175 */ 	(function () {
/* 000175 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000175 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000175 */ 	}) ();
/* 000176 */ 	(function () {
/* 000176 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000176 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000176 */ 	}) ();
/* 000176 */ };
/* 000183 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo, macrospec.MacroSpec], {
/* 000183 */ 	__module__: __name__,
/* 000184 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000184 */ 		var kwargs = dict ();
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 				delete kwargs.__kwargtrans__;
/* 000184 */ 			}
/* 000184 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 			var args = tuple ();
/* 000184 */ 		}
/* 000185 */ 		__call__ (_dobaseconstructors2argslast, null, FLMMacroSpecBase, self, args, kwargs);
/* 000185 */ 	});}
/* 000185 */ });
/* 000187 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo, macrospec.EnvironmentSpec], {
/* 000187 */ 	__module__: __name__,
/* 000188 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000188 */ 		var kwargs = dict ();
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 				delete kwargs.__kwargtrans__;
/* 000188 */ 			}
/* 000188 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 			var args = tuple ();
/* 000188 */ 		}
/* 000189 */ 		__call__ (_dobaseconstructors2argslast, null, FLMEnvironmentSpecBase, self, args, kwargs);
/* 000189 */ 	});}
/* 000189 */ });
/* 000191 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo, macrospec.SpecialsSpec], {
/* 000191 */ 	__module__: __name__,
/* 000192 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000192 */ 		var kwargs = dict ();
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 				delete kwargs.__kwargtrans__;
/* 000192 */ 			}
/* 000192 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 			var args = tuple ();
/* 000192 */ 		}
/* 000193 */ 		__call__ (_dobaseconstructors2argslast, null, FLMSpecialsSpecBase, self, args, kwargs);
/* 000193 */ 	});}
/* 000193 */ });
/* 000200 */ export var make_verb_argument = function (value) {
/* 000200 */ 	if (arguments.length) {
/* 000200 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 				switch (__attrib0__) {
/* 000200 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 	}
/* 000200 */ 	else {
/* 000200 */ 	}
/* 000201 */ 	var delim0 = null;
/* 000202 */ 	var __break0__ = false;
/* 000202 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000202 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000204 */ 			var delim0 = delim;
/* 000204 */ 			__break0__ = true;
/* 000204 */ 			break;
/* 000204 */ 		}
/* 000204 */ 	}
/* 000206 */ 	if (!__break0__) {
/* 000207 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000207 */ 		__except0__.__cause__ = null;
/* 000207 */ 		throw __except0__;
/* 000207 */ 	}
/* 000209 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000209 */ };
/* 000212 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000212 */ 	__module__: __name__,
/* 000214 */ 	allowed_in_standalone_mode: true,
/* 000216 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000217 */ 		return __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000217 */ 	});},
/* 000219 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000219 */ 		var kwargs = dict ();
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 				delete kwargs.__kwargtrans__;
/* 000219 */ 			}
/* 000219 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 			var args = tuple ();
/* 000219 */ 		}
/* 000220 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000221 */ 		self.value = value;
/* 000221 */ 	});},
/* 000223 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000224 */ 		return (function () {
/* 000224 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000224 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000224 */ 		}) ();
/* 000224 */ 	});}
/* 000224 */ });
/* 000227 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue, macrospec.MacroSpec], {
/* 000227 */ 	__module__: __name__,
/* 000228 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000228 */ 		var kwargs = dict ();
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 				delete kwargs.__kwargtrans__;
/* 000228 */ 			}
/* 000228 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 			var args = tuple ();
/* 000228 */ 		}
/* 000229 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueMacro, self, args, kwargs, tuple (['value']));
/* 000229 */ 	});}
/* 000229 */ });
/* 000231 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue, macrospec.SpecialsSpec], {
/* 000231 */ 	__module__: __name__,
/* 000232 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000232 */ 		var kwargs = dict ();
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 				delete kwargs.__kwargtrans__;
/* 000232 */ 			}
/* 000232 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 			var args = tuple ();
/* 000232 */ 		}
/* 000233 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueSpecials, self, args, kwargs, tuple (['value']));
/* 000233 */ 	});}
/* 000233 */ });
/* 000236 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000243 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000243 */ 	var __accu0__ = latexnodes_parsers;
/* 000243 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000243 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000252 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000252 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000252 */ 		var allow_unknown_macros = false;
/* 000252 */ 	};
/* 000252 */ 	if (arguments.length) {
/* 000252 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 				switch (__attrib0__) {
/* 000252 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 	}
/* 000252 */ 	else {
/* 000252 */ 	}
/* 000254 */ 	if (__t__ (!__t__ (((function () {
/* 000254 */ 		var __accu0__ = node_arg_label;
/* 000254 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000254 */ 	}) ())))) {
/* 000255 */ 		return null;
/* 000255 */ 	}
/* 000257 */ 	var the_labels = [];
/* 000258 */ 	var argnodes = (function () {
/* 000258 */ 		var __accu0__ = node_arg_label;
/* 000258 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000258 */ 	}) ();
/* 000259 */ 	var __iterable0__ = argnodes;
/* 000259 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000259 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000260 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000262 */ 			var the_label = (function () {
/* 000262 */ 				var __accu0__ = argnode.nodelist;
/* 000262 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000262 */ 			}) ();
/* 000263 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000264 */ 				var __left0__ = (function () {
/* 000264 */ 					var __accu0__ = the_label;
/* 000264 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000264 */ 				}) ();
/* 000264 */ 				var ref_type = __left0__ [0];
/* 000264 */ 				var ref_label = __left0__ [1];
/* 000264 */ 			}
/* 000265 */ 			else {
/* 000266 */ 				var __left0__ = tuple ([null, the_label]);
/* 000266 */ 				var ref_type = __left0__ [0];
/* 000266 */ 				var ref_label = __left0__ [1];
/* 000266 */ 			}
/* 000268 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000269 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000269 */ 				__except0__.__cause__ = null;
/* 000269 */ 				throw __except0__;
/* 000269 */ 			}
/* 000275 */ 			(function () {
/* 000275 */ 				var __accu0__ = the_labels;
/* 000275 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000275 */ 			}) ();
/* 000275 */ 			continue;
/* 000275 */ 		}
/* 000278 */ 		if (__t__ (allow_unknown_macros)) {
/* 000278 */ 			continue;
/* 000278 */ 		}
/* 000281 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000281 */ 		__except0__.__cause__ = null;
/* 000281 */ 		throw __except0__;
/* 000281 */ 	}
/* 000286 */ 	return the_labels;
/* 000286 */ };
/* 000292 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000292 */ 	__module__: __name__,
/* 000305 */ 	allowed_in_standalone_mode: true,
/* 000309 */ 	_flm_main_text_argument: 'text',
/* 000311 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000312 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000316 */ 		self.text_formats = text_formats;
/* 000316 */ 	});},
/* 000318 */ 	get get_flm_doc () {return __get__ (this, function (self) {
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
/* 000321 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000321 */ 			var __accu0__ = ' ';
/* 000321 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000321 */ 				var __accu1__ = [];
/* 000321 */ 				var __iterable0__ = self.text_formats;
/* 000321 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000321 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000321 */ 					(function () {
/* 000321 */ 						var __accu2__ = __accu1__;
/* 000321 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000321 */ 					}) ();
/* 000321 */ 				}
/* 000321 */ 				return py_iter (__accu1__);
/* 000321 */ 			}) ());
/* 000321 */ 		}) ());
/* 000321 */ 	});},
/* 000324 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000326 */ 		var node_args = (function () {
/* 000326 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000326 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000326 */ 		}) ();
/* 000330 */ 		return (function () {
/* 000330 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000332 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000332 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000332 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000332 */ 			}) (), render_context);
/* 000332 */ 		}) ();
/* 000332 */ 	});}
/* 000332 */ });
/* 000337 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000337 */ 	__module__: __name__,
/* 000339 */ 	is_block_level: true,
/* 000341 */ 	is_paragraph_break_marker: true,
/* 000343 */ 	allowed_in_standalone_mode: true,
/* 000345 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000346 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000346 */ 		__except0__.__cause__ = null;
/* 000346 */ 		throw __except0__;
/* 000346 */ 	});},
/* 000348 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000348 */ 		if (arguments.length) {
/* 000348 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000348 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000348 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000348 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000348 */ 					switch (__attrib0__) {
/* 000348 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 					}
/* 000348 */ 				}
/* 000348 */ 			}
/* 000348 */ 		}
/* 000348 */ 		else {
/* 000348 */ 		}
/* 000349 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000349 */ 	});}
/* 000349 */ });
/* 000351 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000351 */ 	__module__: __name__,
/* 000352 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000352 */ 		var kwargs = dict ();
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 				delete kwargs.__kwargtrans__;
/* 000352 */ 			}
/* 000352 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 			var args = tuple ();
/* 000352 */ 		}
/* 000353 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000353 */ 	});}
/* 000353 */ });
/* 000355 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000355 */ 	__module__: __name__,
/* 000356 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000356 */ 		var kwargs = dict ();
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 				delete kwargs.__kwargtrans__;
/* 000356 */ 			}
/* 000356 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 			var args = tuple ();
/* 000356 */ 		}
/* 000357 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000357 */ 	});}
/* 000357 */ });
/* 000362 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000362 */ 	__module__: __name__,
/* 000364 */ 	allowed_in_standalone_mode: true,
/* 000366 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000366 */ 		var error_msg = null;
/* 000366 */ 		var kwargs = dict ();
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 				delete kwargs.__kwargtrans__;
/* 000366 */ 			}
/* 000366 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 			var args = tuple ();
/* 000366 */ 		}
/* 000367 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000368 */ 		self.error_msg = error_msg;
/* 000368 */ 	});},
/* 000370 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000370 */ 		if (arguments.length) {
/* 000370 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 					switch (__attrib0__) {
/* 000370 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 		}
/* 000370 */ 		else {
/* 000370 */ 		}
/* 000371 */ 		if (__t__ (self.error_msg)) {
/* 000372 */ 			var msg = self.error_msg;
/* 000372 */ 		}
/* 000373 */ 		else {
/* 000374 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000374 */ 				var __accu0__ = (function () {
/* 000374 */ 					var __accu1__ = node;
/* 000374 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000374 */ 				}) ();
/* 000374 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000374 */ 			}) ());
/* 000374 */ 		}
/* 000376 */ 		(function () {
/* 000376 */ 			var __accu0__ = logger;
/* 000376 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000376 */ 		}) ();
/* 000378 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000378 */ 		__except0__.__cause__ = null;
/* 000378 */ 		throw __except0__;
/* 000378 */ 	});}
/* 000378 */ });
/* 000381 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError, macrospec.MacroSpec], {
/* 000381 */ 	__module__: __name__,
/* 000382 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000382 */ 		var kwargs = dict ();
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 				delete kwargs.__kwargtrans__;
/* 000382 */ 			}
/* 000382 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 			var args = tuple ();
/* 000382 */ 		}
/* 000383 */ 		__call__ (_dobaseconstructors2argslast, null, FLMMacroSpecError, self, args, kwargs);
/* 000383 */ 	});}
/* 000383 */ });
/* 000385 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000385 */ 	__module__: __name__,
/* 000386 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000386 */ 		var kwargs = dict ();
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 				delete kwargs.__kwargtrans__;
/* 000386 */ 			}
/* 000386 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 			var args = tuple ();
/* 000386 */ 		}
/* 000387 */ 		__call__ (_dobaseconstructors2argslast, null, FLMEnvironmentSpecError, self, args, kwargs);
/* 000387 */ 	});}
/* 000387 */ });
/* 000389 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000389 */ 	__module__: __name__,
/* 000390 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000390 */ 		var kwargs = dict ();
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 				delete kwargs.__kwargtrans__;
/* 000390 */ 			}
/* 000390 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 			var args = tuple ();
/* 000390 */ 		}
/* 000391 */ 		__call__ (_dobaseconstructors2argslast, null, FLMSpecialsSpecError, self, args, kwargs);
/* 000391 */ 	});}
/* 000391 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmspecinfo.map