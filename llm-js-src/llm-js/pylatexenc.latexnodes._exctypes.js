/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 22:20:44
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
/* 000060 */ export var __all__ = ['LatexWalkerError', 'LatexWalkerParseError', 'LatexWalkerParseErrorFormatter', 'LatexWalkerNodesParseError', 'LatexWalkerTokenParseError', 'LatexWalkerEndOfStream'];
/* 000071 */ export var LatexWalkerError =  __class__ ('LatexWalkerError', [Exception], {
/* 000071 */ 	__module__: __name__,
/* 000071 */ });
/* 000078 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerError], {
/* 000078 */ 	__module__: __name__,
/* 000122 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno, error_type_info) {
/* 000122 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var s = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var pos = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var lineno = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var colno = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof error_type_info == 'undefined' || (error_type_info != null && error_type_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var error_type_info = null;
/* 000122 */ 		};
/* 000122 */ 		var kwargs = dict ();
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'error_type_info': var error_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 				delete kwargs.__kwargtrans__;
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000125 */ 		self.input_source = (function () {
/* 000125 */ 			var __accu0__ = kwargs;
/* 000125 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000125 */ 		}) ();
/* 000126 */ 		self.msg = msg;
/* 000127 */ 		self.s = s;
/* 000128 */ 		self.pos = pos;
/* 000129 */ 		self.lineno = lineno;
/* 000130 */ 		self.colno = colno;
/* 000131 */ 		self.error_type_info = error_type_info;
/* 000132 */ 		self.open_contexts = (function () {
/* 000132 */ 			var __accu0__ = kwargs;
/* 000132 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000132 */ 		}) ();
/* 000134 */ 		if (__t__ (kwargs)) {
/* 000136 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerParseError(): ', __call__ (repr, null, kwargs)));
/* 000136 */ 			__except0__.__cause__ = null;
/* 000136 */ 			throw __except0__;
/* 000136 */ 		}
/* 000139 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseError, '__init__'), null, self, (function () {
/* 000139 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000139 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000139 */ 		}) ());
/* 000139 */ 	});},
/* 000142 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000143 */ 		return (function () {
/* 000143 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, self);
/* 000143 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000143 */ 		}) ();
/* 000143 */ 	});}
/* 000143 */ });
/* 000169 */ export var LatexWalkerParseErrorFormatter =  __class__ ('LatexWalkerParseErrorFormatter', [object], {
/* 000169 */ 	__module__: __name__,
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, exc) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		__call__ (__call__ (__super__, null, LatexWalkerParseErrorFormatter, '__init__'), null, self);
/* 000172 */ 		self.exc = exc;
/* 000172 */ 	});},
/* 000174 */ 	get format_open_blocks () {return __get__ (this, function (self) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		var exc = self.exc;
/* 000176 */ 		if (__t__ (!__t__ ((exc.open_contexts)))) {
/* 000177 */ 			return null;
/* 000177 */ 		}
/* 000178 */ 		var disp = '';
/* 000179 */ 		var __iterable0__ = __call__ (py_reversed, null, exc.open_contexts);
/* 000179 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000179 */ 			var context = __getitem__ (__iterable0__, __index0__);
/* 000180 */ 			var __left0__ = context;
/* 000180 */ 			var what = __left0__ [0];
/* 000180 */ 			var pos = __left0__ [1];
/* 000180 */ 			var lineno = __left0__ [2];
/* 000180 */ 			var colno = __left0__ [3];
/* 000181 */ 			var disp = __call__ (__iadd__, null, disp, (function () {
/* 000181 */ 				var __accu0__ = '{empty:4}{loc:<18}  {what}\n';
/* 000183 */ 				return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: __call__ (format_pos, null, pos, lineno, colno), what: what}));
/* 000183 */ 			}) ());
/* 000183 */ 		}
/* 000186 */ 		return disp;
/* 000186 */ 	});},
/* 000188 */ 	get format_pos () {return __get__ (this, function (self) {
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
/* 000189 */ 		return __call__ (format_pos, null, self.exc.pos, self.exc.lineno, self.exc.colno);
/* 000189 */ 	});},
/* 000191 */ 	get format_full_traceback () {return __get__ (this, function (self) {
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
/* 000192 */ 		var exc = self.exc;
/* 000193 */ 		var msg = '';
/* 000195 */ 		if (__t__ (exc.input_source)) {
/* 000196 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000196 */ 				var __accu0__ = '  in {}';
/* 000196 */ 				return __call__ (__accu0__.format, __accu0__, exc.input_source);
/* 000196 */ 			}) ());
/* 000196 */ 		}
/* 000198 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000198 */ 			var __accu0__ = ' {}';
/* 000198 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000198 */ 				var __accu1__ = self;
/* 000198 */ 				return __call__ (__accu1__.format_pos, __accu1__);
/* 000198 */ 			}) ());
/* 000198 */ 		}) ());
/* 000200 */ 		if (__t__ (exc.open_contexts)) {
/* 000201 */ 			var msg = __call__ (__iadd__, null, msg, '\nOpen LaTeX blocks:\n');
/* 000202 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000202 */ 				var __accu0__ = self;
/* 000202 */ 				return __call__ (__accu0__.format_open_blocks, __accu0__);
/* 000202 */ 			}) ());
/* 000202 */ 		}
/* 000204 */ 		return msg;
/* 000204 */ 	});},
/* 000206 */ 	get to_display_string () {return __get__ (this, function (self) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000207 */ 		var exc = self.exc;
/* 000209 */ 		var msg = exc.msg;
/* 000210 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000210 */ 			var __accu0__ = self;
/* 000210 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000210 */ 		}) ());
/* 000212 */ 		return msg;
/* 000212 */ 	});}
/* 000212 */ });
/* 000215 */ export var format_pos = function (pos, lineno, colno) {
/* 000215 */ 	if (arguments.length) {
/* 000215 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 				switch (__attrib0__) {
/* 000215 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 	}
/* 000215 */ 	else {
/* 000215 */ 	}
/* 000216 */ 	if (__t__ (lineno !== null)) {
/* 000217 */ 		if (__t__ (colno !== null)) {
/* 000218 */ 			return (function () {
/* 000218 */ 				var __accu0__ = '@ (line {}, col {})';
/* 000218 */ 				return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000218 */ 			}) ();
/* 000218 */ 		}
/* 000219 */ 		return (function () {
/* 000219 */ 			var __accu0__ = '@ line {}';
/* 000219 */ 			return __call__ (__accu0__.format, __accu0__, lineno);
/* 000219 */ 		}) ();
/* 000219 */ 	}
/* 000220 */ 	if (__t__ (pos !== null)) {
/* 000221 */ 		return (function () {
/* 000221 */ 			var __accu0__ = '@ char pos {}';
/* 000221 */ 			return __call__ (__accu0__.format, __accu0__, pos);
/* 000221 */ 		}) ();
/* 000221 */ 	}
/* 000222 */ 	return '@ <unknown>';
/* 000222 */ };
/* 000227 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000227 */ 	__module__: __name__,
/* 000251 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000251 */ 		var kwargs = dict ();
/* 000251 */ 		if (arguments.length) {
/* 000251 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 					switch (__attrib0__) {
/* 000251 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 				delete kwargs.__kwargtrans__;
/* 000251 */ 			}
/* 000251 */ 		}
/* 000251 */ 		else {
/* 000251 */ 		}
/* 000252 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000253 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000254 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000254 */ 	});}
/* 000254 */ });
/* 000257 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000257 */ 	__module__: __name__,
/* 000297 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_parsing_state_delta, recovery_at_token, recovery_past_token) {
/* 000297 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var recovery_nodes = null;
/* 000297 */ 		};
/* 000297 */ 		if (typeof recovery_parsing_state_delta == 'undefined' || (recovery_parsing_state_delta != null && recovery_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var recovery_parsing_state_delta = null;
/* 000297 */ 		};
/* 000297 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var recovery_at_token = null;
/* 000297 */ 		};
/* 000297 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var recovery_past_token = null;
/* 000297 */ 		};
/* 000297 */ 		var kwargs = dict ();
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'recovery_parsing_state_delta': var recovery_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 				delete kwargs.__kwargtrans__;
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000303 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000304 */ 		self.recovery_nodes = recovery_nodes;
/* 000305 */ 		self.recovery_parsing_state_delta = recovery_parsing_state_delta;
/* 000306 */ 		self.recovery_at_token = recovery_at_token;
/* 000307 */ 		self.recovery_past_token = recovery_past_token;
/* 000307 */ 	});}
/* 000307 */ });
/* 000312 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000312 */ 	__module__: __name__,
/* 000325 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000325 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000325 */ 			var final_space = '';
/* 000325 */ 		};
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000327 */ 		self.final_space = final_space;
/* 000327 */ 	});}
/* 000327 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map