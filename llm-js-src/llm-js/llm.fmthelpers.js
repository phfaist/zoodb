/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:23:01
/* 000110 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'llm.fmthelpers';
/* 000009 */ export var alphacounter = function (n, lower) {
/* 000009 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000009 */ 		var lower = true;
/* 000009 */ 	};
/* 000009 */ 	if (arguments.length) {
/* 000009 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000009 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000009 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000009 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000009 */ 				switch (__attrib0__) {
/* 000009 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000009 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000009 */ 				}
/* 000009 */ 			}
/* 000009 */ 		}
/* 000009 */ 	}
/* 000009 */ 	else {
/* 000009 */ 	}
/* 000011 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000012 */ 	var w = __add__ (1, __floordiv__ (n, 26));
/* 000013 */ 	var m = __mod__ (n, 26);
/* 000015 */ 	var s = __mul__ (__call__ (chr, null, __add__ (97, m)), w);
/* 000016 */ 	if (__t__ (lower)) {
/* 000017 */ 		return s;
/* 000017 */ 	}
/* 000018 */ 	return (function () {
/* 000018 */ 		var __accu0__ = s;
/* 000018 */ 		return __call__ (__accu0__.upper, __accu0__);
/* 000018 */ 	}) ();
/* 000018 */ };
/* 000020 */ export var Alphacounter = function (n) {
/* 000020 */ 	if (arguments.length) {
/* 000020 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000020 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000020 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000020 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000020 */ 				switch (__attrib0__) {
/* 000020 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 				}
/* 000020 */ 			}
/* 000020 */ 		}
/* 000020 */ 	}
/* 000020 */ 	else {
/* 000020 */ 	}
/* 000021 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000021 */ };
/* 000024 */ export var _romancounterchars = tuple ([tuple ([1000, 'M']), tuple ([900, 'CM']), tuple ([500, 'D']), tuple ([400, 'CD']), tuple ([100, 'C']), tuple ([90, 'XC']), tuple ([50, 'L']), tuple ([40, 'XL']), tuple ([10, 'X']), tuple ([9, 'IX']), tuple ([5, 'V']), tuple ([4, 'IV']), tuple ([1, 'I'])]);
/* 000040 */ export var romancounter = function (n, lower, zero) {
/* 000040 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000040 */ 		var lower = true;
/* 000040 */ 	};
/* 000040 */ 	if (typeof zero == 'undefined' || (zero != null && zero.hasOwnProperty ("__kwargtrans__"))) {;
/* 000040 */ 		var zero = '';
/* 000040 */ 	};
/* 000040 */ 	if (arguments.length) {
/* 000040 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 				switch (__attrib0__) {
/* 000040 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					case 'zero': var zero = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 	}
/* 000040 */ 	else {
/* 000040 */ 	}
/* 000041 */ 	var s = '';
/* 000042 */ 	if (__t__ (__eq__ (n, 0))) {
/* 000043 */ 		return zero;
/* 000043 */ 	}
/* 000044 */ 	var __iterable0__ = _romancounterchars;
/* 000044 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000044 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000044 */ 		var romancharvalue = __left0__ [0];
/* 000044 */ 		var romanchar = __left0__ [1];
/* 000045 */ 		var s = __call__ (__iadd__, null, s, __mul__ (romanchar, __floordiv__ (n, romancharvalue)));
/* 000046 */ 		var n = __mod__ (n, romancharvalue);
/* 000046 */ 	}
/* 000048 */ 	if (__t__ (lower)) {
/* 000049 */ 		return (function () {
/* 000049 */ 			var __accu0__ = s;
/* 000049 */ 			return __call__ (__accu0__.lower, __accu0__);
/* 000049 */ 		}) ();
/* 000049 */ 	}
/* 000051 */ 	return s;
/* 000051 */ };
/* 000053 */ export var Romancounter = function (n) {
/* 000053 */ 	if (arguments.length) {
/* 000053 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 				switch (__attrib0__) {
/* 000053 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 	}
/* 000053 */ 	else {
/* 000053 */ 	}
/* 000054 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000054 */ };
/* 000056 */ export var _fnsymbols = ['*', '†', '‡', '§', '¶', '‖'];
/* 000065 */ export var fnsymbolcounter = function (n, symbols) {
/* 000065 */ 	if (typeof symbols == 'undefined' || (symbols != null && symbols.hasOwnProperty ("__kwargtrans__"))) {;
/* 000065 */ 		var symbols = _fnsymbols;
/* 000065 */ 	};
/* 000065 */ 	if (arguments.length) {
/* 000065 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 				switch (__attrib0__) {
/* 000065 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					case 'symbols': var symbols = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 	}
/* 000065 */ 	else {
/* 000065 */ 	}
/* 000067 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000068 */ 	var N = __call__ (len, null, symbols);
/* 000069 */ 	var w = __add__ (1, __floordiv__ (n, N));
/* 000070 */ 	var m = __mod__ (n, N);
/* 000071 */ 	var s = __mul__ (__getitem__ (symbols, m), w);
/* 000072 */ 	return s;
/* 000072 */ };
/* 000081 */ export var _unicodesuperscriptdigits = [__call__ (chr, null, 8304), __call__ (chr, null, 185), __call__ (chr, null, 178), __call__ (chr, null, 179), __call__ (chr, null, 8308), __call__ (chr, null, 8309), __call__ (chr, null, 8310), __call__ (chr, null, 8311), __call__ (chr, null, 8312), __call__ (chr, null, 8313)];
/* 000083 */ export var _unicodesubscriptdigits = (function () {
/* 000083 */ 	var __accu0__ = [];
/* 000083 */ 	for (var j = 0; j < 10; j++) {
/* 000085 */ 		(function () {
/* 000085 */ 			var __accu1__ = __accu0__;
/* 000084 */ 			return __call__ (__accu1__.append, __accu1__, __call__ (chr, null, __add__ (8320, j)));
/* 000084 */ 		}) ();
/* 000084 */ 	}
/* 000084 */ 	return __accu0__;
/* 000084 */ }) ();
/* 000089 */ export var customdigitscounter = function (n, digits) {
/* 000089 */ 	if (typeof digits == 'undefined' || (digits != null && digits.hasOwnProperty ("__kwargtrans__"))) {;
/* 000089 */ 		var digits = '0123456789';
/* 000089 */ 	};
/* 000089 */ 	if (arguments.length) {
/* 000089 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 				switch (__attrib0__) {
/* 000089 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					case 'digits': var digits = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 	}
/* 000089 */ 	else {
/* 000089 */ 	}
/* 000090 */ 	var base = __call__ (len, null, digits);
/* 000091 */ 	var s = '';
/* 000092 */ 	while (__t__ (n)) {
/* 000093 */ 		var __left0__ = tuple ([__floordiv__ (n, base), __mod__ (n, base)]);
/* 000093 */ 		var q = __left0__ [0];
/* 000093 */ 		var r = __left0__ [1];
/* 000094 */ 		var s = __add__ (__getitem__ (digits, r), s);
/* 000095 */ 		var n = q;
/* 000095 */ 	}
/* 000096 */ 	return (function () {
/* 000096 */ 		var __accu0__ = '';
/* 000096 */ 		return __call__ (__accu0__.join, __accu0__, s);
/* 000096 */ 	}) ();
/* 000096 */ };
/* 000098 */ export var unicodesuperscriptcounter = function (n) {
/* 000098 */ 	if (arguments.length) {
/* 000098 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 				switch (__attrib0__) {
/* 000098 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 	}
/* 000098 */ 	else {
/* 000098 */ 	}
/* 000099 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesuperscriptdigits}));
/* 000099 */ };
/* 000100 */ export var unicodesubscriptcounter = function (n) {
/* 000100 */ 	if (arguments.length) {
/* 000100 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 				switch (__attrib0__) {
/* 000100 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 	}
/* 000100 */ 	else {
/* 000100 */ 	}
/* 000101 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesubscriptdigits}));
/* 000101 */ };
/* 000104 */ export var standard_counter_formatters = dict ({'alph': (function __lambda__ (n) {
/* 000104 */ 	if (arguments.length) {
/* 000104 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 				switch (__attrib0__) {
/* 000104 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 	}
/* 000104 */ 	else {
/* 000104 */ 	}
/* 000105 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: true}));
/* 000105 */ }), 'Alph': (function __lambda__ (n) {
/* 000105 */ 	if (arguments.length) {
/* 000105 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 				switch (__attrib0__) {
/* 000105 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 	}
/* 000105 */ 	else {
/* 000105 */ 	}
/* 000106 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000106 */ }), 'roman': (function __lambda__ (n) {
/* 000106 */ 	if (arguments.length) {
/* 000106 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 				switch (__attrib0__) {
/* 000106 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 	}
/* 000106 */ 	else {
/* 000106 */ 	}
/* 000107 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: true}));
/* 000107 */ }), 'Roman': (function __lambda__ (n) {
/* 000107 */ 	if (arguments.length) {
/* 000107 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 				switch (__attrib0__) {
/* 000107 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 	}
/* 000107 */ 	else {
/* 000107 */ 	}
/* 000108 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000108 */ }), 'arabic': (function __lambda__ (n) {
/* 000108 */ 	if (arguments.length) {
/* 000108 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 				switch (__attrib0__) {
/* 000108 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 	}
/* 000108 */ 	else {
/* 000108 */ 	}
/* 000109 */ 	return __call__ (str, null, n);
/* 000109 */ }), 'fnsymbol': (function __lambda__ (n) {
/* 000109 */ 	if (arguments.length) {
/* 000109 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 				switch (__attrib0__) {
/* 000109 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 	}
/* 000109 */ 	else {
/* 000109 */ 	}
/* 000110 */ 	return __call__ (fnsymbolcounter, null, n);
/* 000110 */ }), 'unicodesuperscript': unicodesuperscriptcounter, 'unicodesubscript': unicodesubscriptcounter});
/* 000110 */ 
//# sourceMappingURL=llm.fmthelpers.map