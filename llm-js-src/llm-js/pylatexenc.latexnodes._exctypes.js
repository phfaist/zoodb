/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:34
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
/* 000062 */ export var __all__ = ['LatexWalkerError', 'LatexWalkerParseError', 'LatexWalkerParseErrorFormatter', 'LatexWalkerNodesParseError', 'LatexWalkerTokenParseError', 'LatexWalkerEndOfStream'];
/* 000073 */ export var LatexWalkerError =  __class__ ('LatexWalkerError', [Exception], {
/* 000073 */ 	__module__: __name__,
/* 000073 */ });
/* 000080 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerError], {
/* 000080 */ 	__module__: __name__,
/* 000124 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno, error_type_info) {
/* 000124 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var s = null;
/* 000124 */ 		};
/* 000124 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var pos = null;
/* 000124 */ 		};
/* 000124 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var lineno = null;
/* 000124 */ 		};
/* 000124 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var colno = null;
/* 000124 */ 		};
/* 000124 */ 		if (typeof error_type_info == 'undefined' || (error_type_info != null && error_type_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var error_type_info = null;
/* 000124 */ 		};
/* 000124 */ 		var kwargs = dict ();
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'error_type_info': var error_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 				delete kwargs.__kwargtrans__;
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000127 */ 		self.input_source = (function () {
/* 000127 */ 			var __accu0__ = kwargs;
/* 000127 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000127 */ 		}) ();
/* 000128 */ 		self.msg = msg;
/* 000129 */ 		self.s = s;
/* 000130 */ 		self.pos = pos;
/* 000131 */ 		self.lineno = lineno;
/* 000132 */ 		self.colno = colno;
/* 000133 */ 		self.error_type_info = error_type_info;
/* 000134 */ 		self.open_contexts = (function () {
/* 000134 */ 			var __accu0__ = kwargs;
/* 000134 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000134 */ 		}) ();
/* 000136 */ 		if (__t__ (kwargs)) {
/* 000138 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerParseError(): ', __call__ (repr, null, kwargs)));
/* 000138 */ 			__except0__.__cause__ = null;
/* 000138 */ 			throw __except0__;
/* 000138 */ 		}
/* 000141 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseError, '__init__'), null, self, (function () {
/* 000141 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000141 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000141 */ 		}) ());
/* 000141 */ 	});},
/* 000144 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		return (function () {
/* 000145 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000145 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000145 */ 		}) ();
/* 000145 */ 	});}
/* 000145 */ });
/* 000171 */ export var LatexWalkerParseErrorFormatter =  __class__ ('LatexWalkerParseErrorFormatter', [object], {
/* 000171 */ 	__module__: __name__,
/* 000172 */ 	get __init__ () {return __get__ (this, function (self, exc) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseErrorFormatter, '__init__'), null, self);
/* 000174 */ 		self.exc = exc;
/* 000174 */ 	});},
/* 000176 */ 	get format_open_blocks () {return __get__ (this, function (self) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		var exc = self.exc;
/* 000178 */ 		if (__t__ (!__t__ ((exc.open_contexts)))) {
/* 000179 */ 			return null;
/* 000179 */ 		}
/* 000180 */ 		var disp = '';
/* 000181 */ 		var __iterable0__ = __call__ (py_reversed, null, exc.open_contexts);
/* 000181 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 			var context = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 			var __left0__ = context;
/* 000182 */ 			var what = __left0__ [0];
/* 000182 */ 			var pos = __left0__ [1];
/* 000182 */ 			var lineno = __left0__ [2];
/* 000182 */ 			var colno = __left0__ [3];
/* 000183 */ 			var disp = __call__ (__iadd__, null, disp, (function () {
/* 000183 */ 				var __accu0__ = '{empty:4}{loc:<18}  {what}\n';
/* 000185 */ 				return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: __call__ (format_pos, null, pos, lineno, colno), what: what}));
/* 000185 */ 			}) ());
/* 000185 */ 		}
/* 000188 */ 		return disp;
/* 000188 */ 	});},
/* 000190 */ 	get format_pos () {return __get__ (this, function (self) {
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
/* 000191 */ 		return __call__ (format_pos, null, self.exc.pos, self.exc.lineno, self.exc.colno);
/* 000191 */ 	});},
/* 000193 */ 	get format_full_traceback () {return __get__ (this, function (self) {
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
/* 000194 */ 		var exc = self.exc;
/* 000195 */ 		var msg = '';
/* 000197 */ 		if (__t__ (exc.input_source)) {
/* 000198 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000198 */ 				var __accu0__ = '  in {}';
/* 000198 */ 				return __call__ (__accu0__.format, __accu0__, exc.input_source);
/* 000198 */ 			}) ());
/* 000198 */ 		}
/* 000200 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000200 */ 			var __accu0__ = ' {}';
/* 000200 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000200 */ 				var __accu1__ = self;
/* 000200 */ 				return __call__ (__accu1__.format_pos, __accu1__);
/* 000200 */ 			}) ());
/* 000200 */ 		}) ());
/* 000202 */ 		if (__t__ (exc.open_contexts)) {
/* 000203 */ 			var msg = __call__ (__iadd__, null, msg, '\nOpen LaTeX blocks:\n');
/* 000204 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000204 */ 				var __accu0__ = self;
/* 000204 */ 				return __call__ (__accu0__.format_open_blocks, __accu0__);
/* 000204 */ 			}) ());
/* 000204 */ 		}
/* 000206 */ 		return msg;
/* 000206 */ 	});},
/* 000208 */ 	get to_display_string () {return __get__ (this, function (self) {
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
/* 000209 */ 		var exc = self.exc;
/* 000211 */ 		var msg = __call__ (to_str, null, exc.msg);
/* 000212 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000212 */ 			var __accu0__ = self;
/* 000212 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000212 */ 		}) ());
/* 000214 */ 		return msg;
/* 000214 */ 	});}
/* 000214 */ });
/* 000217 */ export var format_pos = function (pos, lineno, colno) {
/* 000217 */ 	if (arguments.length) {
/* 000217 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 				switch (__attrib0__) {
/* 000217 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 	}
/* 000217 */ 	else {
/* 000217 */ 	}
/* 000218 */ 	if (__t__ (lineno !== null)) {
/* 000219 */ 		if (__t__ (colno !== null)) {
/* 000220 */ 			return (function () {
/* 000220 */ 				var __accu0__ = '@ (line {}, col {})';
/* 000220 */ 				return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000220 */ 			}) ();
/* 000220 */ 		}
/* 000221 */ 		return (function () {
/* 000221 */ 			var __accu0__ = '@ line {}';
/* 000221 */ 			return __call__ (__accu0__.format, __accu0__, lineno);
/* 000221 */ 		}) ();
/* 000221 */ 	}
/* 000222 */ 	if (__t__ (pos !== null)) {
/* 000223 */ 		return (function () {
/* 000223 */ 			var __accu0__ = '@ char pos {}';
/* 000223 */ 			return __call__ (__accu0__.format, __accu0__, pos);
/* 000223 */ 		}) ();
/* 000223 */ 	}
/* 000224 */ 	return '@ <unknown>';
/* 000224 */ };
/* 000229 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000229 */ 	__module__: __name__,
/* 000253 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000253 */ 		var kwargs = dict ();
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 				delete kwargs.__kwargtrans__;
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000255 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000256 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000256 */ 	});}
/* 000256 */ });
/* 000259 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000259 */ 	__module__: __name__,
/* 000299 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_parsing_state_delta, recovery_at_token, recovery_past_token) {
/* 000299 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000299 */ 			var recovery_nodes = null;
/* 000299 */ 		};
/* 000299 */ 		if (typeof recovery_parsing_state_delta == 'undefined' || (recovery_parsing_state_delta != null && recovery_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000299 */ 			var recovery_parsing_state_delta = null;
/* 000299 */ 		};
/* 000299 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000299 */ 			var recovery_at_token = null;
/* 000299 */ 		};
/* 000299 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000299 */ 			var recovery_past_token = null;
/* 000299 */ 		};
/* 000299 */ 		var kwargs = dict ();
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_parsing_state_delta': var recovery_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 				delete kwargs.__kwargtrans__;
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000305 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000306 */ 		self.recovery_nodes = recovery_nodes;
/* 000307 */ 		self.recovery_parsing_state_delta = recovery_parsing_state_delta;
/* 000308 */ 		self.recovery_at_token = recovery_at_token;
/* 000309 */ 		self.recovery_past_token = recovery_past_token;
/* 000309 */ 	});}
/* 000309 */ });
/* 000314 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000314 */ 	__module__: __name__,
/* 000327 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000327 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var final_space = '';
/* 000327 */ 		};
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000328 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000329 */ 		self.final_space = final_space;
/* 000329 */ 	});}
/* 000329 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map