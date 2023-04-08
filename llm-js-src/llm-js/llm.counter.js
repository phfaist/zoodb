/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:42
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000001 */ var __name__ = 'llm.counter';
/* 000010 */ export var alphacounter = function (n, lower) {
/* 000010 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000010 */ 		var lower = true;
/* 000010 */ 	};
/* 000010 */ 	if (arguments.length) {
/* 000010 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000010 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000010 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000010 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000010 */ 				switch (__attrib0__) {
/* 000010 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000010 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000010 */ 				}
/* 000010 */ 			}
/* 000010 */ 		}
/* 000010 */ 	}
/* 000010 */ 	else {
/* 000010 */ 	}
/* 000012 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000013 */ 	var w = __add__ (1, __floordiv__ (n, 26));
/* 000014 */ 	var m = __mod__ (n, 26);
/* 000016 */ 	var s = __mul__ (__call__ (chr, null, __add__ (97, m)), w);
/* 000017 */ 	if (__t__ (lower)) {
/* 000018 */ 		return s;
/* 000018 */ 	}
/* 000019 */ 	return (function () {
/* 000019 */ 		var __accu0__ = s;
/* 000019 */ 		return __call__ (__accu0__.upper, __accu0__);
/* 000019 */ 	}) ();
/* 000019 */ };
/* 000021 */ export var Alphacounter = function (n) {
/* 000021 */ 	if (arguments.length) {
/* 000021 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000021 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000021 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000021 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000021 */ 				switch (__attrib0__) {
/* 000021 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000021 */ 				}
/* 000021 */ 			}
/* 000021 */ 		}
/* 000021 */ 	}
/* 000021 */ 	else {
/* 000021 */ 	}
/* 000022 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000022 */ };
/* 000025 */ export var _romancounterchars = tuple ([tuple ([1000, 'M']), tuple ([900, 'CM']), tuple ([500, 'D']), tuple ([400, 'CD']), tuple ([100, 'C']), tuple ([90, 'XC']), tuple ([50, 'L']), tuple ([40, 'XL']), tuple ([10, 'X']), tuple ([9, 'IX']), tuple ([5, 'V']), tuple ([4, 'IV']), tuple ([1, 'I'])]);
/* 000041 */ export var romancounter = function (n, lower, zero) {
/* 000041 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000041 */ 		var lower = true;
/* 000041 */ 	};
/* 000041 */ 	if (typeof zero == 'undefined' || (zero != null && zero.hasOwnProperty ("__kwargtrans__"))) {;
/* 000041 */ 		var zero = '';
/* 000041 */ 	};
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 					case 'zero': var zero = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000042 */ 	var s = '';
/* 000043 */ 	if (__t__ (__eq__ (n, 0))) {
/* 000044 */ 		return zero;
/* 000044 */ 	}
/* 000045 */ 	var __iterable0__ = _romancounterchars;
/* 000045 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000045 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000045 */ 		var romancharvalue = __left0__ [0];
/* 000045 */ 		var romanchar = __left0__ [1];
/* 000046 */ 		var s = __call__ (__iadd__, null, s, __mul__ (romanchar, __floordiv__ (n, romancharvalue)));
/* 000047 */ 		var n = __mod__ (n, romancharvalue);
/* 000047 */ 	}
/* 000049 */ 	if (__t__ (lower)) {
/* 000050 */ 		return (function () {
/* 000050 */ 			var __accu0__ = s;
/* 000050 */ 			return __call__ (__accu0__.lower, __accu0__);
/* 000050 */ 		}) ();
/* 000050 */ 	}
/* 000052 */ 	return s;
/* 000052 */ };
/* 000054 */ export var Romancounter = function (n) {
/* 000054 */ 	if (arguments.length) {
/* 000054 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 				switch (__attrib0__) {
/* 000054 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 	}
/* 000054 */ 	else {
/* 000054 */ 	}
/* 000055 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000055 */ };
/* 000057 */ export var _fnsymbols = ['*', '†', '‡', '§', '¶', '‖'];
/* 000066 */ export var fnsymbolcounter = function (n, symbols) {
/* 000066 */ 	if (typeof symbols == 'undefined' || (symbols != null && symbols.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 		var symbols = _fnsymbols;
/* 000066 */ 	};
/* 000066 */ 	if (arguments.length) {
/* 000066 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 				switch (__attrib0__) {
/* 000066 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					case 'symbols': var symbols = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 	}
/* 000066 */ 	else {
/* 000066 */ 	}
/* 000068 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000069 */ 	var N = __call__ (len, null, symbols);
/* 000070 */ 	var w = __add__ (1, __floordiv__ (n, N));
/* 000071 */ 	var m = __mod__ (n, N);
/* 000072 */ 	var s = __mul__ (__getitem__ (symbols, m), w);
/* 000073 */ 	return s;
/* 000073 */ };
/* 000082 */ export var _unicodesuperscriptdigits = [__call__ (chr, null, 8304), __call__ (chr, null, 185), __call__ (chr, null, 178), __call__ (chr, null, 179), __call__ (chr, null, 8308), __call__ (chr, null, 8309), __call__ (chr, null, 8310), __call__ (chr, null, 8311), __call__ (chr, null, 8312), __call__ (chr, null, 8313)];
/* 000084 */ export var _unicodesubscriptdigits = (function () {
/* 000084 */ 	var __accu0__ = [];
/* 000084 */ 	for (var j = 0; j < 10; j++) {
/* 000086 */ 		(function () {
/* 000086 */ 			var __accu1__ = __accu0__;
/* 000085 */ 			return __call__ (__accu1__.append, __accu1__, __call__ (chr, null, __add__ (8320, j)));
/* 000085 */ 		}) ();
/* 000085 */ 	}
/* 000085 */ 	return __accu0__;
/* 000085 */ }) ();
/* 000090 */ export var customdigitscounter = function (n, digits) {
/* 000090 */ 	if (typeof digits == 'undefined' || (digits != null && digits.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 		var digits = '0123456789';
/* 000090 */ 	};
/* 000090 */ 	if (arguments.length) {
/* 000090 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 				switch (__attrib0__) {
/* 000090 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					case 'digits': var digits = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 	}
/* 000090 */ 	else {
/* 000090 */ 	}
/* 000091 */ 	var base = __call__ (len, null, digits);
/* 000092 */ 	var s = '';
/* 000093 */ 	while (__t__ (n)) {
/* 000094 */ 		var __left0__ = tuple ([__floordiv__ (n, base), __mod__ (n, base)]);
/* 000094 */ 		var q = __left0__ [0];
/* 000094 */ 		var r = __left0__ [1];
/* 000095 */ 		var s = __add__ (__getitem__ (digits, r), s);
/* 000096 */ 		var n = q;
/* 000096 */ 	}
/* 000097 */ 	return (function () {
/* 000097 */ 		var __accu0__ = '';
/* 000097 */ 		return __call__ (__accu0__.join, __accu0__, s);
/* 000097 */ 	}) ();
/* 000097 */ };
/* 000099 */ export var unicodesuperscriptcounter = function (n) {
/* 000099 */ 	if (arguments.length) {
/* 000099 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 				switch (__attrib0__) {
/* 000099 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 	}
/* 000099 */ 	else {
/* 000099 */ 	}
/* 000100 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesuperscriptdigits}));
/* 000100 */ };
/* 000101 */ export var unicodesubscriptcounter = function (n) {
/* 000101 */ 	if (arguments.length) {
/* 000101 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 				switch (__attrib0__) {
/* 000101 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 	}
/* 000101 */ 	else {
/* 000101 */ 	}
/* 000102 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesubscriptdigits}));
/* 000102 */ };
/* 000105 */ export var standard_counter_formatters = dict ({'alph': (function __lambda__ (n) {
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
/* 000106 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: true}));
/* 000106 */ }), 'Alph': (function __lambda__ (n) {
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
/* 000107 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000107 */ }), 'roman': (function __lambda__ (n) {
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
/* 000108 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: true}));
/* 000108 */ }), 'Roman': (function __lambda__ (n) {
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
/* 000109 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000109 */ }), 'arabic': (function __lambda__ (n) {
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
/* 000110 */ 	return __call__ (str, null, n);
/* 000110 */ }), 'fnsymbol': (function __lambda__ (n) {
/* 000110 */ 	if (arguments.length) {
/* 000110 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 				switch (__attrib0__) {
/* 000110 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 	}
/* 000110 */ 	else {
/* 000110 */ 	}
/* 000111 */ 	return __call__ (fnsymbolcounter, null, n);
/* 000111 */ }), 'unicodesuperscript': unicodesuperscriptcounter, 'unicodesubscript': unicodesubscriptcounter});
/* 000116 */ export var _standard_tag_template_initials_formatters = dict ({'a': alphacounter, 'A': Alphacounter, 'i': romancounter, 'I': Romancounter, '1': str});
/* 000126 */ export var _rx_dollar_template = (function () {
/* 000126 */ 	var __accu0__ = re;
/* 000126 */ 	return __call__ (__accu0__.compile, __accu0__, '\\$\\{([a-zA-Z0-9_.]+)\\}');
/* 000126 */ }) ();
/* 000127 */ export var _replace_dollar_template = function (x, vrs) {
/* 000127 */ 	if (arguments.length) {
/* 000127 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 				switch (__attrib0__) {
/* 000127 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 	}
/* 000127 */ 	else {
/* 000127 */ 	}
/* 000128 */ 	return (function () {
/* 000128 */ 		var __accu0__ = _rx_dollar_template;
/* 000128 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000128 */ 			if (arguments.length) {
/* 000128 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 						switch (__attrib0__) {
/* 000128 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						}
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 			else {
/* 000128 */ 			}
/* 000128 */ 			return __getitem__ (vrs, (function () {
/* 000128 */ 				var __accu1__ = m;
/* 000128 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000128 */ 			}) ());
/* 000128 */ 		}), x);
/* 000128 */ 	}) ();
/* 000128 */ };
/* 000129 */ export var _replace_dollar_template_delayed = function (x, vrs) {
/* 000129 */ 	if (arguments.length) {
/* 000129 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 				switch (__attrib0__) {
/* 000129 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 	}
/* 000129 */ 	else {
/* 000129 */ 	}
/* 000130 */ 	return (function __lambda__ (arg) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000131 */ 		return (function () {
/* 000131 */ 			var __accu0__ = _rx_dollar_template;
/* 000131 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000131 */ 				if (arguments.length) {
/* 000131 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 							switch (__attrib0__) {
/* 000131 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 							}
/* 000131 */ 						}
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 				else {
/* 000131 */ 				}
/* 000131 */ 				return __call__ (__getitem__ (vrs, (function () {
/* 000131 */ 					var __accu1__ = m;
/* 000131 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000131 */ 				}) ()), null, arg);
/* 000131 */ 			}), x);
/* 000131 */ 		}) ();
/* 000131 */ 	});
/* 000131 */ };
/* 000135 */ export var parse_counter_formatter = function (counter_formatter, named_counter_formatters, str_use_tag_template, tag_template_initials_counters) {
/* 000135 */ 	if (typeof named_counter_formatters == 'undefined' || (named_counter_formatters != null && named_counter_formatters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 		var named_counter_formatters = standard_counter_formatters;
/* 000135 */ 	};
/* 000135 */ 	if (typeof str_use_tag_template == 'undefined' || (str_use_tag_template != null && str_use_tag_template.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 		var str_use_tag_template = false;
/* 000135 */ 	};
/* 000135 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000135 */ 	};
/* 000135 */ 	if (arguments.length) {
/* 000135 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 				switch (__attrib0__) {
/* 000135 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					case 'named_counter_formatters': var named_counter_formatters = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					case 'str_use_tag_template': var str_use_tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 	}
/* 000135 */ 	else {
/* 000135 */ 	}
/* 000141 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000142 */ 		return counter_formatter;
/* 000142 */ 	}
/* 000143 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000144 */ 		if (__t__ (__in__ (counter_formatter, named_counter_formatters))) {
/* 000145 */ 			return __getitem__ (named_counter_formatters, counter_formatter);
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (str_use_tag_template)) {
/* 000147 */ 			return __call__ (_parse_counter_formatter_from_tag_template, null, counter_formatter, tag_template_initials_counters);
/* 000147 */ 		}
/* 000147 */ 	}
/* 000151 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000152 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000153 */ 			var tmpl = __getitem__ (counter_formatter, 'template');
/* 000155 */ 			return __call__ (_replace_dollar_template_delayed, null, tmpl, named_counter_formatters);
/* 000155 */ 		}
/* 000155 */ 	}
/* 000164 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000164 */ 	__except0__.__cause__ = null;
/* 000164 */ 	throw __except0__;
/* 000164 */ };
/* 000166 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000166 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000166 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000166 */ 	};
/* 000166 */ 	if (arguments.length) {
/* 000166 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 				switch (__attrib0__) {
/* 000166 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 	}
/* 000166 */ 	else {
/* 000166 */ 	}
/* 000170 */ 	var rx = (function () {
/* 000170 */ 		var __accu0__ = re;
/* 000170 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000170 */ 			var __accu1__ = '';
/* 000170 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000170 */ 				var __accu2__ = tag_template_initials_counters;
/* 000170 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000170 */ 			}) ());
/* 000170 */ 		}) ()), ']'));
/* 000170 */ 	}) ();
/* 000171 */ 	var m = (function () {
/* 000171 */ 		var __accu0__ = rx;
/* 000171 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000171 */ 	}) ();
/* 000172 */ 	if (__t__ (m !== null)) {
/* 000174 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000174 */ 			var __accu0__ = m;
/* 000174 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000174 */ 		}) (), 1);
/* 000175 */ 		var right = __getslice__ (tag_template, (function () {
/* 000175 */ 			var __accu0__ = m;
/* 000175 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000175 */ 		}) (), null, 1);
/* 000176 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000176 */ 			var __accu0__ = m;
/* 000176 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000176 */ 		}) ());
/* 000177 */ 		return (function __lambda__ (n) {
/* 000177 */ 			if (arguments.length) {
/* 000177 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 						switch (__attrib0__) {
/* 000177 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						}
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 			else {
/* 000177 */ 			}
/* 000177 */ 			return __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right);
/* 000177 */ 		});
/* 000177 */ 	}
/* 000180 */ 	return (function __lambda__ (n) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000180 */ 		return tag_template;
/* 000180 */ 	});
/* 000180 */ };
/* 000184 */ export var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and} ', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and} ', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
/* 000218 */ export var parse_counter_format_num = parse_counter_formatter;
/* 000221 */ export var build_counter_formatter = function (counter_formatter, default_counter_formatter_spec) {
/* 000221 */ 	if (arguments.length) {
/* 000221 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 				switch (__attrib0__) {
/* 000221 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					case 'default_counter_formatter_spec': var default_counter_formatter_spec = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 	}
/* 000221 */ 	else {
/* 000221 */ 	}
/* 000227 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000228 */ 		return counter_formatter;
/* 000228 */ 	}
/* 000230 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000232 */ 	if (__t__ (counter_formatter === null)) {
/* 000233 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000233 */ 	}
/* 000235 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000236 */ 		var d = __call__ (dict, null, default_counter_formatter_spec);
/* 000237 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000238 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000238 */ 	}
/* 000240 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000241 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000242 */ 			var d = __call__ (dict, null, default_counter_formatter_spec);
/* 000243 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000244 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000244 */ 		}
/* 000245 */ 		var d = __call__ (dict, null, default_counter_formatter_spec);
/* 000246 */ 		(function () {
/* 000246 */ 			var __accu0__ = d;
/* 000246 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000246 */ 		}) ();
/* 000247 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000247 */ 	}
/* 000249 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000249 */ 	__except0__.__cause__ = null;
/* 000249 */ 	throw __except0__;
/* 000249 */ };
/* 000252 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000252 */ 	__module__: __name__,
/* 000253 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link) {
/* 000253 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var prefix_display = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var delimiters = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var join_spec = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var name_in_link = true;
/* 000253 */ 		};
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000255 */ 		self.format_num = __call__ (parse_counter_formatter, null, format_num);
/* 000256 */ 		if (__t__ (prefix_display === null)) {
/* 000257 */ 			var prefix_display = dict ({'singular': '', 'plural': ''});
/* 000257 */ 		}
/* 000261 */ 		else if (__t__ (__call__ (isinstance, null, prefix_display, str))) {
/* 000262 */ 			var prefix_display = dict ({'singular': prefix_display, 'plural': prefix_display});
/* 000262 */ 		}
/* 000266 */ 		self.prefix_display = prefix_display;
/* 000267 */ 		self.delimiters = (__t__ (delimiters !== null) ? delimiters : tuple (['', '']));
/* 000268 */ 		var jd = __call__ (dict, null, __getitem__ (_default_formatter_join_spec, 'default'));
/* 000269 */ 		if (__t__ (join_spec !== null)) {
/* 000270 */ 			if (__t__ (__call__ (isinstance, null, join_spec, str))) {
/* 000271 */ 				(function () {
/* 000271 */ 					var __accu0__ = jd;
/* 000271 */ 					return __call__ (__accu0__.py_update, __accu0__, __getitem__ (_default_formatter_join_spec, join_spec));
/* 000271 */ 				}) ();
/* 000271 */ 			}
/* 000272 */ 			else {
/* 000273 */ 				(function () {
/* 000273 */ 					var __accu0__ = jd;
/* 000273 */ 					return __call__ (__accu0__.py_update, __accu0__, join_spec);
/* 000273 */ 				}) ();
/* 000273 */ 			}
/* 000273 */ 		}
/* 000274 */ 		self.join_spec = (function () {
/* 000274 */ 			var __accu0__ = [];
/* 000276 */ 			var __iterable0__ = (function () {
/* 000276 */ 				var __accu1__ = jd;
/* 000276 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000276 */ 			}) ();
/* 000276 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 				var k = __left0__ [0];
/* 000276 */ 				var v = __left0__ [1];
/* 000276 */ 				(function () {
/* 000276 */ 					var __accu1__ = __accu0__;
/* 000275 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (_replace_dollar_template, null, v, jd)]);
/* 000275 */ 				}) ();
/* 000275 */ 			}
/* 000275 */ 			return dict (__accu0__);
/* 000275 */ 		}) ();
/* 000278 */ 		self.name_in_link = name_in_link;
/* 000278 */ 	});},
/* 000280 */ 	get format_llm () {return __get__ (this, function (self, value, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000280 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var prefix_variant = null;
/* 000280 */ 		};
/* 000280 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var with_delimiters = true;
/* 000280 */ 		};
/* 000280 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var with_prefix = true;
/* 000280 */ 		};
/* 000280 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var wrap_format_num = null;
/* 000280 */ 		};
/* 000280 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var wrap_link_fn = null;
/* 000280 */ 		};
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000282 */ 		var __left0__ = (function () {
/* 000282 */ 			var __accu0__ = self;
/* 000282 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000282 */ 		}) ();
/* 000282 */ 		var prefix = __left0__ [0];
/* 000282 */ 		var pre = __left0__ [1];
/* 000282 */ 		var post = __left0__ [2];
/* 000288 */ 		var s_num = (function () {
/* 000288 */ 			var __accu0__ = self;
/* 000288 */ 			return __call__ (__accu0__.format_num, __accu0__, value);
/* 000288 */ 		}) ();
/* 000289 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000290 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000290 */ 		}
/* 000291 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000292 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000293 */ 			return __call__ (wrap_link_fn, null, value, s);
/* 000293 */ 		}
/* 000294 */ 		return s;
/* 000294 */ 	});},
/* 000296 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000298 */ 		var __left0__ = tuple (['', '', '']);
/* 000298 */ 		var prefix = __left0__ [0];
/* 000298 */ 		var pre = __left0__ [1];
/* 000298 */ 		var post = __left0__ [2];
/* 000300 */ 		if (__t__ (with_delimiters)) {
/* 000301 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000302 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000302 */ 		}
/* 000304 */ 		if (__t__ (with_prefix)) {
/* 000305 */ 			var prefixinfo = self.prefix_display;
/* 000306 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000307 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000307 */ 			}
/* 000308 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000309 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000309 */ 			}
/* 000310 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000311 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000311 */ 			}
/* 000312 */ 			else {
/* 000313 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000313 */ 			}
/* 000313 */ 		}
/* 000315 */ 		return tuple ([prefix, pre, post]);
/* 000315 */ 	});},
/* 000318 */ 	get format_many_llm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000318 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var prefix_variant = null;
/* 000318 */ 		};
/* 000318 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var with_delimiters = true;
/* 000318 */ 		};
/* 000318 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var with_prefix = true;
/* 000318 */ 		};
/* 000318 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var wrap_link_fn = null;
/* 000318 */ 		};
/* 000318 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var wrap_format_num = null;
/* 000318 */ 		};
/* 000318 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var get_raw_s_items = false;
/* 000318 */ 		};
/* 000318 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000318 */ 			var s_items_join = null;
/* 000318 */ 		};
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000322 */ 		var join_spec = self.join_spec;
/* 000323 */ 		var name_in_link = self.name_in_link;
/* 000325 */ 		if (__t__ (s_items_join === null)) {
/* 000326 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000326 */ 				if (arguments.length) {
/* 000326 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 							switch (__attrib0__) {
/* 000326 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							}
/* 000326 */ 						}
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 				else {
/* 000326 */ 				}
/* 000326 */ 				return __add__ (a, b);
/* 000326 */ 			});
/* 000326 */ 		}
/* 000328 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000329 */ 			return __getitem__ (join_spec, 'empty');
/* 000329 */ 		}
/* 000331 */ 		var __iterable0__ = py_values;
/* 000331 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000331 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000332 */ 			if (__t__ (!__t__ ((__call__ (isinstance, null, v, int))))) {
/* 000333 */ 				var __except0__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000333 */ 				__except0__.__cause__ = null;
/* 000333 */ 				throw __except0__;
/* 000333 */ 			}
/* 000333 */ 		}
/* 000337 */ 		var py_values = __call__ (sorted, null, py_values, __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000337 */ 			if (arguments.length) {
/* 000337 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 						switch (__attrib0__) {
/* 000337 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						}
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 			else {
/* 000337 */ 			}
/* 000337 */ 			return __call__ (int, null, x);
/* 000337 */ 		})}));
/* 000339 */ 		var num_values = __call__ (len, null, py_values);
/* 000341 */ 		var only_one_value = false;
/* 000342 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000343 */ 			var only_one_value = true;
/* 000343 */ 		}
/* 000345 */ 		var list_of_ranges = [];
/* 000346 */ 		var cur_range = null;
/* 000347 */ 		var __iterable0__ = py_values;
/* 000347 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000347 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000348 */ 			if (__t__ (!__t__ ((cur_range)))) {
/* 000349 */ 				var cur_range = tuple ([v, v]);
/* 000349 */ 				continue;
/* 000349 */ 			}
/* 000351 */ 			if (__t__ (__eq__ (v, __add__ (__getitem__ (cur_range, 1), 1)))) {
/* 000352 */ 				var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000352 */ 				continue;
/* 000352 */ 			}
/* 000354 */ 			(function () {
/* 000354 */ 				var __accu0__ = list_of_ranges;
/* 000354 */ 				return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000354 */ 			}) ();
/* 000355 */ 			var cur_range = tuple ([v, v]);
/* 000355 */ 		}
/* 000357 */ 		(function () {
/* 000357 */ 			var __accu0__ = list_of_ranges;
/* 000357 */ 			return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000357 */ 		}) ();
/* 000358 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000359 */ 			if (__t__ (__eq__ (__add__ (__getitem__ (__getitem__ (list_of_ranges, 0), 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)))) {
/* 000362 */ 				var list_of_ranges = [tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 0), __getitem__ (__getitem__ (list_of_ranges, 0), 0)]), tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)])];
/* 000362 */ 			}
/* 000362 */ 		}
/* 000365 */ 		var _format_num = function (n) {
/* 000365 */ 			if (arguments.length) {
/* 000365 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 						switch (__attrib0__) {
/* 000365 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						}
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 			else {
/* 000365 */ 			}
/* 000366 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000367 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000367 */ 					var __accu0__ = self;
/* 000367 */ 					return __call__ (__accu0__.format_num, __accu0__, n);
/* 000367 */ 				}) ());
/* 000367 */ 			}
/* 000368 */ 			return (function () {
/* 000368 */ 				var __accu0__ = self;
/* 000368 */ 				return __call__ (__accu0__.format_num, __accu0__, n);
/* 000368 */ 			}) ();
/* 000368 */ 		};
/* 000370 */ 		var _render_range_items = function (a, b) {
/* 000370 */ 			if (arguments.length) {
/* 000370 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 						switch (__attrib0__) {
/* 000370 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						}
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 			else {
/* 000370 */ 			}
/* 000371 */ 			if (__t__ (__eq__ (a, b))) {
/* 000372 */ 				return [dict ({'s': __call__ (_format_num, null, a), 'n': a})];
/* 000372 */ 			}
/* 000373 */ 			var s_a = __call__ (_format_num, null, a);
/* 000374 */ 			var s_b = __call__ (_format_num, null, b);
/* 000375 */ 			if (__t__ (__eq__ (b, __add__ (a, 1)))) {
/* 000376 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000376 */ 			}
/* 000377 */ 			else {
/* 000378 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000378 */ 			}
/* 000379 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000379 */ 		};
/* 000387 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000390 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000390 */ 		}
/* 000393 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 2))) {
/* 000398 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 1))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000398 */ 		}
/* 000400 */ 		else {
/* 000402 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000403 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges, 0, __neg__ (1), 1));
/* 000403 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000403 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000403 */ 				var rngj = __left0__ [0];
/* 000403 */ 				var rng = __left0__ [1];
/* 000404 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000405 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000405 */ 				}
/* 000406 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng));
/* 000406 */ 			}
/* 000409 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, __neg__ (1)))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000409 */ 		}
/* 000413 */ 		var __left0__ = (function () {
/* 000413 */ 			var __accu0__ = self;
/* 000413 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000413 */ 		}) ();
/* 000413 */ 		var s_prefix = __left0__ [0];
/* 000413 */ 		var s_pre = __left0__ [1];
/* 000413 */ 		var s_post = __left0__ [2];
/* 000417 */ 		var first_n = null;
/* 000418 */ 		var __iterable0__ = s_items;
/* 000418 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000418 */ 			var si = __getitem__ (__iterable0__, __index0__);
/* 000419 */ 			var nn = (function () {
/* 000419 */ 				var __accu0__ = si;
/* 000419 */ 				return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000419 */ 			}) ();
/* 000420 */ 			if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000421 */ 				var first_n = nn;
/* 000421 */ 				break;
/* 000421 */ 			}
/* 000421 */ 		}
/* 000424 */ 		var s_pre_items = [];
/* 000425 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000426 */ 			(function () {
/* 000426 */ 				var __accu0__ = s_pre_items;
/* 000426 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n}));
/* 000426 */ 			}) ();
/* 000426 */ 		}
/* 000427 */ 		(function () {
/* 000427 */ 			var __accu0__ = s_pre_items;
/* 000427 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (only_one_value) ? null : false)}));
/* 000427 */ 		}) ();
/* 000430 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000439 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000440 */ 			var s_all = [];
/* 000441 */ 			var cur_s = null;
/* 000442 */ 			var cur_n = false;
/* 000443 */ 			var __iterable0__ = s_items;
/* 000443 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000443 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000444 */ 				var si = __getitem__ (s_item, 's');
/* 000445 */ 				var ni = (function () {
/* 000445 */ 					var __accu0__ = s_item;
/* 000445 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000445 */ 				}) ();
/* 000446 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000447 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000447 */ 					continue;
/* 000447 */ 				}
/* 000449 */ 				if (__t__ (__t__ (cur_n !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __eq__ (ni, cur_n)))) {
/* 000450 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000451 */ 						var cur_n = ni;
/* 000451 */ 					}
/* 000453 */ 					if (__t__ (cur_s === null)) {
/* 000454 */ 						var cur_s = si;
/* 000454 */ 					}
/* 000455 */ 					else {
/* 000457 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000457 */ 					}
/* 000457 */ 					continue;
/* 000457 */ 				}
/* 000460 */ 				if (__t__ (cur_s !== null)) {
/* 000461 */ 					(function () {
/* 000461 */ 						var __accu0__ = s_all;
/* 000461 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000461 */ 					}) ();
/* 000461 */ 				}
/* 000463 */ 				var cur_s = si;
/* 000464 */ 				var cur_n = ni;
/* 000464 */ 			}
/* 000466 */ 			if (__t__ (cur_s !== null)) {
/* 000467 */ 				(function () {
/* 000467 */ 					var __accu0__ = s_all;
/* 000467 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000469 */ 			var s_items = s_all;
/* 000469 */ 		}
/* 000473 */ 		if (__t__ (get_raw_s_items)) {
/* 000474 */ 			return s_items;
/* 000474 */ 		}
/* 000476 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000477 */ 			var s = (function () {
/* 000477 */ 				var __accu0__ = '';
/* 000477 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000477 */ 					var __accu1__ = [];
/* 000477 */ 					var __iterable0__ = s_items;
/* 000477 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000481 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000481 */ 						(function () {
/* 000481 */ 							var __accu2__ = __accu1__;
/* 000478 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (wrap_link_fn, null, __getitem__ (x, 'n'), __getitem__ (x, 's')) : __getitem__ (x, 's')));
/* 000478 */ 						}) ();
/* 000478 */ 					}
/* 000478 */ 					return __accu1__;
/* 000478 */ 				}) ());
/* 000478 */ 			}) ();
/* 000478 */ 		}
/* 000481 */ 		else {
/* 000485 */ 			var s = (function () {
/* 000485 */ 				var __accu0__ = '';
/* 000485 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000485 */ 					var __accu1__ = [];
/* 000485 */ 					var __iterable0__ = s_items;
/* 000485 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000485 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000485 */ 						(function () {
/* 000485 */ 							var __accu2__ = __accu1__;
/* 000485 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000485 */ 						}) ();
/* 000485 */ 					}
/* 000485 */ 					return __accu1__;
/* 000485 */ 				}) ());
/* 000485 */ 			}) ();
/* 000485 */ 		}
/* 000487 */ 		return s;
/* 000487 */ 	});}
/* 000487 */ });
/* 000494 */ export var Counter =  __class__ ('Counter', [object], {
/* 000494 */ 	__module__: __name__,
/* 000495 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000495 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000495 */ 			var initial_value = 0;
/* 000495 */ 		};
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000496 */ 		self.formatter = counter_formatter;
/* 000497 */ 		self.value = initial_value;
/* 000497 */ 	});},
/* 000499 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000500 */ 		self.value = value;
/* 000501 */ 		return self.value;
/* 000501 */ 	});},
/* 000503 */ 	get step () {return __get__ (this, function (self) {
/* 000503 */ 		if (arguments.length) {
/* 000503 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000503 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000503 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000503 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000503 */ 					switch (__attrib0__) {
/* 000503 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 					}
/* 000503 */ 				}
/* 000503 */ 			}
/* 000503 */ 		}
/* 000503 */ 		else {
/* 000503 */ 		}
/* 000504 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000505 */ 		return self.value;
/* 000505 */ 	});},
/* 000507 */ 	get reset () {return __get__ (this, function (self) {
/* 000507 */ 		if (arguments.length) {
/* 000507 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000507 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000507 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000507 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000507 */ 					switch (__attrib0__) {
/* 000507 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 					}
/* 000507 */ 				}
/* 000507 */ 			}
/* 000507 */ 		}
/* 000507 */ 		else {
/* 000507 */ 		}
/* 000508 */ 		self.value = self.initial_value;
/* 000509 */ 		return self.value;
/* 000509 */ 	});},
/* 000511 */ 	get format_llm () {return __get__ (this, function (self, value) {
/* 000511 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000511 */ 			var value = null;
/* 000511 */ 		};
/* 000511 */ 		if (arguments.length) {
/* 000511 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 					switch (__attrib0__) {
/* 000511 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 		}
/* 000511 */ 		else {
/* 000511 */ 		}
/* 000512 */ 		if (__t__ (value === null)) {
/* 000513 */ 			var value = self.value;
/* 000513 */ 		}
/* 000514 */ 		return (function () {
/* 000514 */ 			var __accu0__ = self.formatter;
/* 000514 */ 			return __call__ (__accu0__.format_llm, __accu0__, value, __kwargtrans__ ({with_prefix: false}));
/* 000514 */ 		}) ();
/* 000514 */ 	});},
/* 000516 */ 	get step_and_format_llm () {return __get__ (this, function (self) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		var val = (function () {
/* 000517 */ 			var __accu0__ = self;
/* 000517 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000517 */ 		}) ();
/* 000518 */ 		return tuple ([val, (function () {
/* 000518 */ 			var __accu0__ = self;
/* 000518 */ 			return __call__ (__accu0__.format_llm, __accu0__, val);
/* 000518 */ 		}) ()]);
/* 000518 */ 	});}
/* 000518 */ });
/* 000006 */ 
//# sourceMappingURL=llm.counter.map