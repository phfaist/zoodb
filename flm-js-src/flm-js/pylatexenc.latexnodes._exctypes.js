/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:21
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._exctypes';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000042 */ export var _basestring = str;
/* 000043 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000043 */ 	if (arguments.length) {
/* 000043 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 				switch (__attrib0__) {
/* 000043 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 	}
/* 000043 */ 	else {
/* 000043 */ 	}
/* 000043 */ 	return x;
/* 000043 */ });
/* 000044 */ export var to_str = str;
/* 000062 */ export var __all__ = ['LatexWalkerError', 'LatexWalkerLocatedError', 'LatexWalkerParseError', 'LatexWalkerLocatedErrorFormatter', 'LatexWalkerNodesParseError', 'LatexWalkerTokenParseError', 'LatexWalkerEndOfStream'];
/* 000074 */ export var LatexWalkerError =  __class__ ('LatexWalkerError', [Exception], {
/* 000074 */ 	__module__: __name__,
/* 000074 */ });
/* 000082 */ export var LatexWalkerLocatedError =  __class__ ('LatexWalkerLocatedError', [LatexWalkerError], {
/* 000082 */ 	__module__: __name__,
/* 000128 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno, error_type_info) {
/* 000128 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 			var s = null;
/* 000128 */ 		};
/* 000128 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 			var pos = null;
/* 000128 */ 		};
/* 000128 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 			var lineno = null;
/* 000128 */ 		};
/* 000128 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 			var colno = null;
/* 000128 */ 		};
/* 000128 */ 		if (typeof error_type_info == 'undefined' || (error_type_info != null && error_type_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 			var error_type_info = null;
/* 000128 */ 		};
/* 000128 */ 		var kwargs = dict ();
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'error_type_info': var error_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 				delete kwargs.__kwargtrans__;
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000130 */ 		self.input_source = (function () {
/* 000130 */ 			var __accu0__ = kwargs;
/* 000130 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000130 */ 		}) ();
/* 000131 */ 		self.msg = msg;
/* 000132 */ 		self.s = s;
/* 000133 */ 		self.pos = pos;
/* 000134 */ 		self.lineno = lineno;
/* 000135 */ 		self.colno = colno;
/* 000136 */ 		self.error_type_info = error_type_info;
/* 000137 */ 		self.open_contexts = (function () {
/* 000137 */ 			var __accu0__ = kwargs;
/* 000137 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000137 */ 		}) ();
/* 000139 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000141 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerParseError(): ', __call__ (repr, null, kwargs)));
/* 000141 */ 			__except0__.__cause__ = null;
/* 000141 */ 			throw __except0__;
/* 000141 */ 		}
/* 000144 */ 		__call__ (__call__ (__super__, null, LatexWalkerLocatedError, '__init__'), null, self, (function () {
/* 000144 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, self);
/* 000144 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000144 */ 		}) ());
/* 000144 */ 	});},
/* 000147 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		return (function () {
/* 000148 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, self);
/* 000148 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000148 */ 		}) ();
/* 000148 */ 	});}
/* 000148 */ });
/* 000172 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerLocatedError], {
/* 000172 */ 	__module__: __name__,
/* 000172 */ });
/* 000181 */ export var LatexWalkerLocatedErrorFormatter =  __class__ ('LatexWalkerLocatedErrorFormatter', [object], {
/* 000181 */ 	__module__: __name__,
/* 000186 */ 	get __init__ () {return __get__ (this, function (self, exc) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		__call__ (__call__ (__super__, null, LatexWalkerLocatedErrorFormatter, '__init__'), null, self);
/* 000188 */ 		self.exc = exc;
/* 000188 */ 	});},
/* 000190 */ 	get format_open_blocks () {return __get__ (this, function (self) {
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
/* 000191 */ 		var exc = self.exc;
/* 000192 */ 		if (__t__ (!__t__ ((exc.open_contexts)))) {
/* 000193 */ 			return null;
/* 000193 */ 		}
/* 000194 */ 		var disp = '';
/* 000195 */ 		var __iterable0__ = __call__ (py_reversed, null, exc.open_contexts);
/* 000195 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 			var context = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 			var __left0__ = context;
/* 000196 */ 			var what = __left0__ [0];
/* 000196 */ 			var pos = __left0__ [1];
/* 000196 */ 			var lineno = __left0__ [2];
/* 000196 */ 			var colno = __left0__ [3];
/* 000197 */ 			var disp = __call__ (__iadd__, null, disp, (function () {
/* 000197 */ 				var __accu0__ = '{empty:4}{loc:<18}  {what}\n';
/* 000199 */ 				return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: __call__ (format_pos, null, pos, lineno, colno), what: what}));
/* 000199 */ 			}) ());
/* 000199 */ 		}
/* 000202 */ 		return disp;
/* 000202 */ 	});},
/* 000204 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000205 */ 		return __call__ (format_pos, null, self.exc.pos, self.exc.lineno, self.exc.colno);
/* 000205 */ 	});},
/* 000207 */ 	get format_full_traceback () {return __get__ (this, function (self) {
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
/* 000208 */ 		var exc = self.exc;
/* 000209 */ 		var msg = '';
/* 000211 */ 		if (__t__ (exc.input_source)) {
/* 000212 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000212 */ 				var __accu0__ = '  in {}';
/* 000212 */ 				return __call__ (__accu0__.format, __accu0__, exc.input_source);
/* 000212 */ 			}) ());
/* 000212 */ 		}
/* 000214 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000214 */ 			var __accu0__ = ' {}';
/* 000214 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000214 */ 				var __accu1__ = self;
/* 000214 */ 				return __call__ (__accu1__.format_pos, __accu1__);
/* 000214 */ 			}) ());
/* 000214 */ 		}) ());
/* 000216 */ 		if (__t__ (exc.open_contexts)) {
/* 000217 */ 			var msg = __call__ (__iadd__, null, msg, '\nOpen LaTeX blocks:\n');
/* 000218 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000218 */ 				var __accu0__ = self;
/* 000218 */ 				return __call__ (__accu0__.format_open_blocks, __accu0__);
/* 000218 */ 			}) ());
/* 000218 */ 		}
/* 000220 */ 		return msg;
/* 000220 */ 	});},
/* 000222 */ 	get to_display_string () {return __get__ (this, function (self) {
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000223 */ 		var exc = self.exc;
/* 000225 */ 		var msg = __call__ (to_str, null, exc.msg);
/* 000226 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000226 */ 			var __accu0__ = self;
/* 000226 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000226 */ 		}) ());
/* 000228 */ 		return msg;
/* 000228 */ 	});}
/* 000228 */ });
/* 000231 */ export var format_pos = function (pos, lineno, colno) {
/* 000231 */ 	if (arguments.length) {
/* 000231 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 				switch (__attrib0__) {
/* 000231 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 					case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 					case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 		}
/* 000231 */ 	}
/* 000231 */ 	else {
/* 000231 */ 	}
/* 000232 */ 	if (__t__ (lineno !== null)) {
/* 000233 */ 		if (__t__ (colno !== null)) {
/* 000234 */ 			return (function () {
/* 000234 */ 				var __accu0__ = '@ (line {}, col {})';
/* 000234 */ 				return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000234 */ 			}) ();
/* 000234 */ 		}
/* 000235 */ 		return (function () {
/* 000235 */ 			var __accu0__ = '@ line {}';
/* 000235 */ 			return __call__ (__accu0__.format, __accu0__, lineno);
/* 000235 */ 		}) ();
/* 000235 */ 	}
/* 000236 */ 	if (__t__ (pos !== null)) {
/* 000237 */ 		return (function () {
/* 000237 */ 			var __accu0__ = '@ char pos {}';
/* 000237 */ 			return __call__ (__accu0__.format, __accu0__, pos);
/* 000237 */ 		}) ();
/* 000237 */ 	}
/* 000238 */ 	return '@ <unknown>';
/* 000238 */ };
/* 000243 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000243 */ 	__module__: __name__,
/* 000267 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000267 */ 		var kwargs = dict ();
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 				delete kwargs.__kwargtrans__;
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000269 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000270 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000270 */ 	});}
/* 000270 */ });
/* 000273 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000273 */ 	__module__: __name__,
/* 000313 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_parsing_state_delta, recovery_at_token, recovery_past_token) {
/* 000313 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000313 */ 			var recovery_nodes = null;
/* 000313 */ 		};
/* 000313 */ 		if (typeof recovery_parsing_state_delta == 'undefined' || (recovery_parsing_state_delta != null && recovery_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000313 */ 			var recovery_parsing_state_delta = null;
/* 000313 */ 		};
/* 000313 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000313 */ 			var recovery_at_token = null;
/* 000313 */ 		};
/* 000313 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000313 */ 			var recovery_past_token = null;
/* 000313 */ 		};
/* 000313 */ 		var kwargs = dict ();
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'recovery_parsing_state_delta': var recovery_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 				delete kwargs.__kwargtrans__;
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000319 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000320 */ 		self.recovery_nodes = recovery_nodes;
/* 000321 */ 		self.recovery_parsing_state_delta = recovery_parsing_state_delta;
/* 000322 */ 		self.recovery_at_token = recovery_at_token;
/* 000323 */ 		self.recovery_past_token = recovery_past_token;
/* 000323 */ 	});}
/* 000323 */ });
/* 000328 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000328 */ 	__module__: __name__,
/* 000341 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000341 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000341 */ 			var final_space = '';
/* 000341 */ 		};
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000343 */ 		self.final_space = final_space;
/* 000343 */ 	});}
/* 000343 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map