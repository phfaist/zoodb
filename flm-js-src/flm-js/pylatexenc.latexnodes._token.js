/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 15:49:14
/* 000219 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._token';
/* 000041 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000041 */ 	return x;
/* 000041 */ });
/* 000052 */ export var LatexToken =  __class__ ('LatexToken', [object], {
/* 000052 */ 	__module__: __name__,
/* 000163 */ 	get __init__ () {return __get__ (this, function (self, tok, arg, pos, pos_end, pre_space, post_space) {
/* 000163 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000163 */ 			var pos_end = null;
/* 000163 */ 		};
/* 000163 */ 		if (typeof pre_space == 'undefined' || (pre_space != null && pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000163 */ 			var pre_space = '';
/* 000163 */ 		};
/* 000163 */ 		if (typeof post_space == 'undefined' || (post_space != null && post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000163 */ 			var post_space = '';
/* 000163 */ 		};
/* 000163 */ 		var kwargs = dict ();
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'post_space': var post_space = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 				delete kwargs.__kwargtrans__;
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000165 */ 		var len_ = (function () {
/* 000165 */ 			var __accu0__ = kwargs;
/* 000165 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000165 */ 		}) ();
/* 000167 */ 		self.tok = tok;
/* 000168 */ 		self.arg = arg;
/* 000169 */ 		self.pos = pos;
/* 000170 */ 		self.pos_end = pos_end;
/* 000171 */ 		self.pre_space = pre_space;
/* 000172 */ 		self.post_space = post_space;
/* 000174 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (len_ !== null) && pos !== null)) {
/* 000175 */ 			self.pos_end = __add__ (pos, len_);
/* 000175 */ 		}
/* 000177 */ 		if (__t__ (kwargs)) {
/* 000178 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected arguments to LatexToken(): ', __call__ (repr, null, kwargs)));
/* 000178 */ 			__except0__.__cause__ = null;
/* 000178 */ 			throw __except0__;
/* 000178 */ 		}
/* 000180 */ 		self._fields = ['tok', 'arg', 'pos', 'pos_end', 'pre_space'];
/* 000181 */ 		if (__t__ (__in__ (self.tok, tuple (['macro', 'comment'])))) {
/* 000182 */ 			(function () {
/* 000182 */ 				var __accu0__ = self._fields;
/* 000182 */ 				return __call__ (__accu0__.append, __accu0__, 'post_space');
/* 000182 */ 			}) ();
/* 000182 */ 		}
/* 000183 */ 		__call__ (__call__ (__super__, null, LatexToken, '__init__'), null, self);
/* 000183 */ 	});},
/* 000186 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000188 */ 			return null;
/* 000188 */ 		}
/* 000189 */ 		return __sub__ (self.pos_end, self.pos);
/* 000189 */ 	});},
/* 000191 */ 	get __unicode__ () {return __get__ (this, function (self) {
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
/* 000192 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000192 */ 		}) ());
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
/* 000197 */ 		return __add__ (__add__ ('LatexToken(', (function () {
/* 000197 */ 			var __accu0__ = ', ';
/* 000197 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000197 */ 				var __accu1__ = [];
/* 000197 */ 				var __iterable0__ = self._fields;
/* 000197 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 					(function () {
/* 000198 */ 						var __accu2__ = __accu1__;
/* 000197 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000197 */ 							var __accu3__ = '{}={!r}';
/* 000197 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000197 */ 						}) ());
/* 000197 */ 					}) ();
/* 000197 */ 				}
/* 000197 */ 				return __accu1__;
/* 000197 */ 			}) ());
/* 000197 */ 		}) ()), ')');
/* 000197 */ 	});},
/* 000202 */ 	get __str__ () {return __get__ (this, function (self) {
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
/* 000203 */ 		return (function () {
/* 000203 */ 			var __accu0__ = self;
/* 000203 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000203 */ 		}) ();
/* 000203 */ 	});},
/* 000205 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000206 */ 		return __call__ (all, null, (function () {
/* 000206 */ 			var __accu0__ = [];
/* 000207 */ 			var __iterable0__ = self._fields;
/* 000207 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000210 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000210 */ 				(function () {
/* 000210 */ 					var __accu1__ = __accu0__;
/* 000209 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000209 */ 				}) ();
/* 000209 */ 			}
/* 000209 */ 			return py_iter (__accu0__);
/* 000209 */ 		}) ());
/* 000217 */ 	});},
/* 000219 */ 	__hash__: null
/* 000219 */ });
/* 000219 */ Object.defineProperty (LatexToken, 'len', property.call (LatexToken, LatexToken._get_len));;
/* 000219 */ 
//# sourceMappingURL=pylatexenc.latexnodes._token.map