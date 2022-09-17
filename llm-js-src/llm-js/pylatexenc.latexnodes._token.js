/* 000001 */ // Transcrypt'ed from Python, 2022-09-17 11:08:48
/* 000210 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000156 */ 	get __init__ () {return __get__ (this, function (self, tok, arg, pos, pos_end, pre_space, post_space) {
/* 000156 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var pos_end = null;
/* 000156 */ 		};
/* 000156 */ 		if (typeof pre_space == 'undefined' || (pre_space != null && pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var pre_space = '';
/* 000156 */ 		};
/* 000156 */ 		if (typeof post_space == 'undefined' || (post_space != null && post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var post_space = '';
/* 000156 */ 		};
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'post_space': var post_space = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000158 */ 		var len_ = (function () {
/* 000158 */ 			var __accu0__ = kwargs;
/* 000158 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000158 */ 		}) ();
/* 000160 */ 		self.tok = tok;
/* 000161 */ 		self.arg = arg;
/* 000162 */ 		self.pos = pos;
/* 000163 */ 		self.pos_end = pos_end;
/* 000164 */ 		self.pre_space = pre_space;
/* 000165 */ 		self.post_space = post_space;
/* 000167 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (len_ !== null) && pos !== null)) {
/* 000168 */ 			self.pos_end = __add__ (pos, len_);
/* 000168 */ 		}
/* 000170 */ 		if (__t__ (kwargs)) {
/* 000171 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected arguments to LatexToken(): ', __call__ (repr, null, kwargs)));
/* 000171 */ 			__except0__.__cause__ = null;
/* 000171 */ 			throw __except0__;
/* 000171 */ 		}
/* 000173 */ 		self._fields = ['tok', 'arg', 'pos', 'pos_end', 'pre_space'];
/* 000174 */ 		if (__t__ (__in__ (self.tok, tuple (['macro', 'comment'])))) {
/* 000175 */ 			(function () {
/* 000175 */ 				var __accu0__ = self._fields;
/* 000175 */ 				return __call__ (__accu0__.append, __accu0__, 'post_space');
/* 000175 */ 			}) ();
/* 000175 */ 		}
/* 000176 */ 		__call__ (__call__ (__super__, null, LatexToken, '__init__'), null, self);
/* 000176 */ 	});},
/* 000179 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000180 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000181 */ 			return null;
/* 000181 */ 		}
/* 000182 */ 		return __sub__ (self.pos_end, self.pos);
/* 000182 */ 	});},
/* 000184 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000185 */ 			var __accu0__ = self;
/* 000185 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000185 */ 		}) ());
/* 000185 */ 	});},
/* 000187 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000190 */ 		return __add__ (__add__ ('LatexToken(', (function () {
/* 000190 */ 			var __accu0__ = ', ';
/* 000190 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000190 */ 				var __accu1__ = [];
/* 000190 */ 				var __iterable0__ = self._fields;
/* 000190 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000191 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000191 */ 					(function () {
/* 000191 */ 						var __accu2__ = __accu1__;
/* 000190 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000190 */ 							var __accu3__ = '{}={!r}';
/* 000190 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000190 */ 						}) ());
/* 000190 */ 					}) ();
/* 000190 */ 				}
/* 000190 */ 				return __accu1__;
/* 000190 */ 			}) ());
/* 000190 */ 		}) ()), ')');
/* 000190 */ 	});},
/* 000195 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000196 */ 		return (function () {
/* 000196 */ 			var __accu0__ = self;
/* 000196 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000196 */ 		}) ();
/* 000196 */ 	});},
/* 000198 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		return __call__ (all, null, (function () {
/* 000199 */ 			var __accu0__ = [];
/* 000200 */ 			var __iterable0__ = self._fields;
/* 000200 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 				(function () {
/* 000203 */ 					var __accu1__ = __accu0__;
/* 000202 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000202 */ 				}) ();
/* 000202 */ 			}
/* 000202 */ 			return py_iter (__accu0__);
/* 000202 */ 		}) ());
/* 000202 */ 	});},
/* 000208 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000208 */ 		return NotImplemented;
/* 000208 */ 	});},
/* 000210 */ 	__hash__: null
/* 000210 */ });
/* 000210 */ Object.defineProperty (LatexToken, 'len', property.call (LatexToken, LatexToken._get_len));;
/* 000210 */ 
//# sourceMappingURL=pylatexenc.latexnodes._token.map