/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 12:39:31
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
/* 000133 */ 	get __init__ () {return __get__ (this, function (self, msg, s, pos, lineno, colno, error_type_info) {
/* 000133 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var s = null;
/* 000133 */ 		};
/* 000133 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var pos = null;
/* 000133 */ 		};
/* 000133 */ 		if (typeof lineno == 'undefined' || (lineno != null && lineno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var lineno = null;
/* 000133 */ 		};
/* 000133 */ 		if (typeof colno == 'undefined' || (colno != null && colno.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var colno = null;
/* 000133 */ 		};
/* 000133 */ 		if (typeof error_type_info == 'undefined' || (error_type_info != null && error_type_info.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var error_type_info = null;
/* 000133 */ 		};
/* 000133 */ 		var kwargs = dict ();
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'error_type_info': var error_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 				delete kwargs.__kwargtrans__;
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000135 */ 		self.input_source = (function () {
/* 000135 */ 			var __accu0__ = kwargs;
/* 000135 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'input_source', null);
/* 000135 */ 		}) ();
/* 000136 */ 		self.msg = msg;
/* 000137 */ 		self.s = s;
/* 000138 */ 		self.pos = pos;
/* 000139 */ 		self.lineno = lineno;
/* 000140 */ 		self.colno = colno;
/* 000141 */ 		self.error_type_info = error_type_info;
/* 000142 */ 		self.open_contexts = (function () {
/* 000142 */ 			var __accu0__ = kwargs;
/* 000142 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'open_contexts', []);
/* 000142 */ 		}) ();
/* 000144 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000146 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword argument(s) to LatexWalkerLocatedError(): ', __call__ (repr, null, kwargs)));
/* 000146 */ 			__except0__.__cause__ = null;
/* 000146 */ 			throw __except0__;
/* 000146 */ 		}
/* 000149 */ 		__call__ (__call__ (__super__, null, LatexWalkerLocatedError, '__init__'), null, self, (function () {
/* 000149 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, self);
/* 000149 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000149 */ 		}) ());
/* 000149 */ 	});},
/* 000152 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, self);
/* 000153 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000153 */ 		}) ();
/* 000153 */ 	});},
/* 000155 */ 	get set_pos_or_add_open_context_from_node () {return __get__ (this, function (self, node, what) {
/* 000155 */ 		if (typeof what == 'undefined' || (what != null && what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var what = null;
/* 000155 */ 		};
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000156 */ 		if (__t__ (node === null)) {
/* 000157 */ 			return ;
/* 000157 */ 		}
/* 000159 */ 		var pos = node.pos;
/* 000162 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'latex_walker')) && __t__ (node.latex_walker) && __call__ (hasattr, null, node.latex_walker, 'pos_to_lineno_colno'))) {
/* 000163 */ 			var __left0__ = (function () {
/* 000163 */ 				var __accu0__ = node.latex_walker;
/* 000163 */ 				return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos);
/* 000163 */ 			}) ();
/* 000163 */ 			var lineno = __left0__ [0];
/* 000163 */ 			var colno = __left0__ [1];
/* 000163 */ 		}
/* 000164 */ 		else {
/* 000165 */ 			var __left0__ = tuple ([null, null]);
/* 000165 */ 			var lineno = __left0__ [0];
/* 000165 */ 			var colno = __left0__ [1];
/* 000165 */ 		}
/* 000167 */ 		if (__t__ (what === null)) {
/* 000168 */ 			var what = (function () {
/* 000168 */ 				var __accu0__ = node;
/* 000168 */ 				return __call__ (__accu0__.display_str, __accu0__);
/* 000168 */ 			}) ();
/* 000168 */ 		}
/* 000170 */ 		if (__t__ (self.pos === null)) {
/* 000171 */ 			self.pos = pos;
/* 000172 */ 			self.lineno = lineno;
/* 000173 */ 			self.colno = colno;
/* 000174 */ 			return ;
/* 000174 */ 		}
/* 000176 */ 		if (__t__ (self.open_contexts === null)) {
/* 000177 */ 			self.open_contexts = [];
/* 000177 */ 		}
/* 000178 */ 		(function () {
/* 000178 */ 			var __accu0__ = self.open_contexts;
/* 000178 */ 			return __call__ (__accu0__.append, __accu0__, tuple ([what, pos, lineno, colno]));
/* 000178 */ 		}) ();
/* 000178 */ 	});}
/* 000178 */ });
/* 000204 */ export var LatexWalkerParseError =  __class__ ('LatexWalkerParseError', [LatexWalkerLocatedError], {
/* 000204 */ 	__module__: __name__,
/* 000204 */ });
/* 000213 */ export var LatexWalkerLocatedErrorFormatter =  __class__ ('LatexWalkerLocatedErrorFormatter', [object], {
/* 000213 */ 	__module__: __name__,
/* 000218 */ 	get __init__ () {return __get__ (this, function (self, exc) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000219 */ 		__call__ (__call__ (__super__, null, LatexWalkerLocatedErrorFormatter, '__init__'), null, self);
/* 000220 */ 		self.exc = exc;
/* 000220 */ 	});},
/* 000222 */ 	get format_open_blocks () {return __get__ (this, function (self) {
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
/* 000224 */ 		if (__t__ (!__t__ ((exc.open_contexts)))) {
/* 000225 */ 			return null;
/* 000225 */ 		}
/* 000226 */ 		var disp = '';
/* 000227 */ 		var __iterable0__ = __call__ (py_reversed, null, exc.open_contexts);
/* 000227 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000227 */ 			var context = __getitem__ (__iterable0__, __index0__);
/* 000228 */ 			var __left0__ = context;
/* 000228 */ 			var what = __left0__ [0];
/* 000228 */ 			var pos = __left0__ [1];
/* 000228 */ 			var lineno = __left0__ [2];
/* 000228 */ 			var colno = __left0__ [3];
/* 000229 */ 			var disp = __call__ (__iadd__, null, disp, (function () {
/* 000229 */ 				var __accu0__ = '{empty:4}{loc:<18}  {what}\n';
/* 000231 */ 				return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({empty: '', loc: __call__ (format_pos, null, pos, lineno, colno), what: what}));
/* 000231 */ 			}) ());
/* 000231 */ 		}
/* 000234 */ 		return disp;
/* 000234 */ 	});},
/* 000236 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		return __call__ (format_pos, null, self.exc.pos, self.exc.lineno, self.exc.colno);
/* 000237 */ 	});},
/* 000239 */ 	get format_full_traceback () {return __get__ (this, function (self) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		var exc = self.exc;
/* 000241 */ 		var msg = '';
/* 000243 */ 		if (__t__ (exc.input_source)) {
/* 000244 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000244 */ 				var __accu0__ = '  in {}';
/* 000244 */ 				return __call__ (__accu0__.format, __accu0__, exc.input_source);
/* 000244 */ 			}) ());
/* 000244 */ 		}
/* 000246 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000246 */ 			var __accu0__ = ' {}';
/* 000246 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000246 */ 				var __accu1__ = self;
/* 000246 */ 				return __call__ (__accu1__.format_pos, __accu1__);
/* 000246 */ 			}) ());
/* 000246 */ 		}) ());
/* 000248 */ 		if (__t__ (exc.open_contexts)) {
/* 000249 */ 			var msg = __call__ (__iadd__, null, msg, '\nOpen LaTeX blocks:\n');
/* 000250 */ 			var msg = __call__ (__iadd__, null, msg, (function () {
/* 000250 */ 				var __accu0__ = self;
/* 000250 */ 				return __call__ (__accu0__.format_open_blocks, __accu0__);
/* 000250 */ 			}) ());
/* 000250 */ 		}
/* 000252 */ 		return msg;
/* 000252 */ 	});},
/* 000254 */ 	get to_display_string () {return __get__ (this, function (self) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000255 */ 		var exc = self.exc;
/* 000257 */ 		var msg = __call__ (to_str, null, exc.msg);
/* 000258 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000258 */ 		}) ());
/* 000260 */ 		return msg;
/* 000260 */ 	});}
/* 000260 */ });
/* 000263 */ export var format_pos = function (pos, lineno, colno) {
/* 000263 */ 	if (arguments.length) {
/* 000263 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 				switch (__attrib0__) {
/* 000263 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					case 'colno': var colno = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 	}
/* 000263 */ 	else {
/* 000263 */ 	}
/* 000264 */ 	if (__t__ (lineno !== null)) {
/* 000265 */ 		if (__t__ (colno !== null)) {
/* 000266 */ 			return (function () {
/* 000266 */ 				var __accu0__ = '@ (line {}, col {})';
/* 000266 */ 				return __call__ (__accu0__.format, __accu0__, lineno, colno);
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000267 */ 		return (function () {
/* 000267 */ 			var __accu0__ = '@ line {}';
/* 000267 */ 			return __call__ (__accu0__.format, __accu0__, lineno);
/* 000267 */ 		}) ();
/* 000267 */ 	}
/* 000268 */ 	if (__t__ (pos !== null)) {
/* 000269 */ 		return (function () {
/* 000269 */ 			var __accu0__ = '@ char pos {}';
/* 000269 */ 			return __call__ (__accu0__.format, __accu0__, pos);
/* 000269 */ 		}) ();
/* 000269 */ 	}
/* 000270 */ 	return '@ <unknown>';
/* 000270 */ };
/* 000275 */ export var LatexWalkerTokenParseError =  __class__ ('LatexWalkerTokenParseError', [LatexWalkerParseError], {
/* 000275 */ 	__module__: __name__,
/* 000299 */ 	get __init__ () {return __get__ (this, function (self, recovery_token_placeholder, recovery_token_at_pos) {
/* 000299 */ 		var kwargs = dict ();
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_token_placeholder': var recovery_token_placeholder = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'recovery_token_at_pos': var recovery_token_at_pos = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 				delete kwargs.__kwargtrans__;
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000300 */ 		__call__ (__call__ (__super__, null, LatexWalkerTokenParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000301 */ 		self.recovery_token_placeholder = recovery_token_placeholder;
/* 000302 */ 		self.recovery_token_at_pos = recovery_token_at_pos;
/* 000302 */ 	});}
/* 000302 */ });
/* 000305 */ export var LatexWalkerNodesParseError =  __class__ ('LatexWalkerNodesParseError', [LatexWalkerParseError], {
/* 000305 */ 	__module__: __name__,
/* 000345 */ 	get __init__ () {return __get__ (this, function (self, recovery_nodes, recovery_parsing_state_delta, recovery_at_token, recovery_past_token) {
/* 000345 */ 		if (typeof recovery_nodes == 'undefined' || (recovery_nodes != null && recovery_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000345 */ 			var recovery_nodes = null;
/* 000345 */ 		};
/* 000345 */ 		if (typeof recovery_parsing_state_delta == 'undefined' || (recovery_parsing_state_delta != null && recovery_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000345 */ 			var recovery_parsing_state_delta = null;
/* 000345 */ 		};
/* 000345 */ 		if (typeof recovery_at_token == 'undefined' || (recovery_at_token != null && recovery_at_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000345 */ 			var recovery_at_token = null;
/* 000345 */ 		};
/* 000345 */ 		if (typeof recovery_past_token == 'undefined' || (recovery_past_token != null && recovery_past_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000345 */ 			var recovery_past_token = null;
/* 000345 */ 		};
/* 000345 */ 		var kwargs = dict ();
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'recovery_parsing_state_delta': var recovery_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'recovery_at_token': var recovery_at_token = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'recovery_past_token': var recovery_past_token = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 				delete kwargs.__kwargtrans__;
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000351 */ 		__call__ (__call__ (__super__, null, LatexWalkerNodesParseError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000352 */ 		self.recovery_nodes = recovery_nodes;
/* 000353 */ 		self.recovery_parsing_state_delta = recovery_parsing_state_delta;
/* 000354 */ 		self.recovery_at_token = recovery_at_token;
/* 000355 */ 		self.recovery_past_token = recovery_past_token;
/* 000355 */ 	});}
/* 000355 */ });
/* 000360 */ export var LatexWalkerEndOfStream =  __class__ ('LatexWalkerEndOfStream', [LatexWalkerError], {
/* 000360 */ 	__module__: __name__,
/* 000373 */ 	get __init__ () {return __get__ (this, function (self, final_space) {
/* 000373 */ 		if (typeof final_space == 'undefined' || (final_space != null && final_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var final_space = '';
/* 000373 */ 		};
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'final_space': var final_space = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		__call__ (__call__ (__super__, null, LatexWalkerEndOfStream, '__init__'), null, self);
/* 000375 */ 		self.final_space = final_space;
/* 000375 */ 	});}
/* 000375 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._exctypes.map