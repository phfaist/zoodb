/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:27
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
/* 000184 */ export var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and}\xa0', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and}\xa0', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
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
/* 000221 */ 					case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 	}
/* 000221 */ 	else {
/* 000221 */ 	}
/* 000228 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000229 */ 		return counter_formatter;
/* 000229 */ 	}
/* 000231 */ 	if (__t__ (counter_formatter === null)) {
/* 000232 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000232 */ 	}
/* 000234 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000236 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000237 */ 		var d = default_counter_formatter_spec;
/* 000238 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000239 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000240 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000240 */ 	}
/* 000242 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000243 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000244 */ 			var d = default_counter_formatter_spec;
/* 000245 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000246 */ 			__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000247 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000247 */ 		}
/* 000248 */ 		var d = default_counter_formatter_spec;
/* 000249 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000250 */ 		(function () {
/* 000250 */ 			var __accu0__ = d;
/* 000250 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000250 */ 		}) ();
/* 000251 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000251 */ 	}
/* 000253 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000253 */ 	__except0__.__cause__ = null;
/* 000253 */ 	throw __except0__;
/* 000253 */ };
/* 000256 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000256 */ 	__module__: __name__,
/* 000257 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link, counter_formatter_id) {
/* 000257 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var prefix_display = null;
/* 000257 */ 		};
/* 000257 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var delimiters = null;
/* 000257 */ 		};
/* 000257 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var join_spec = null;
/* 000257 */ 		};
/* 000257 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var name_in_link = true;
/* 000257 */ 		};
/* 000257 */ 		if (typeof counter_formatter_id == 'undefined' || (counter_formatter_id != null && counter_formatter_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var counter_formatter_id = null;
/* 000257 */ 		};
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000260 */ 		self.format_num = __call__ (parse_counter_formatter, null, format_num);
/* 000261 */ 		if (__t__ (prefix_display === null)) {
/* 000262 */ 			var prefix_display = dict ({'singular': '', 'plural': ''});
/* 000262 */ 		}
/* 000266 */ 		else if (__t__ (__call__ (isinstance, null, prefix_display, str))) {
/* 000267 */ 			var prefix_display = dict ({'singular': prefix_display, 'plural': prefix_display});
/* 000267 */ 		}
/* 000271 */ 		self.prefix_display = prefix_display;
/* 000272 */ 		self.delimiters = (__t__ (delimiters !== null) ? delimiters : tuple (['', '']));
/* 000273 */ 		var jd = __call__ (dict, null, __getitem__ (_default_formatter_join_spec, 'default'));
/* 000274 */ 		if (__t__ (join_spec !== null)) {
/* 000275 */ 			if (__t__ (__call__ (isinstance, null, join_spec, str))) {
/* 000276 */ 				(function () {
/* 000276 */ 					var __accu0__ = jd;
/* 000276 */ 					return __call__ (__accu0__.py_update, __accu0__, __getitem__ (_default_formatter_join_spec, join_spec));
/* 000276 */ 				}) ();
/* 000276 */ 			}
/* 000277 */ 			else {
/* 000278 */ 				(function () {
/* 000278 */ 					var __accu0__ = jd;
/* 000278 */ 					return __call__ (__accu0__.py_update, __accu0__, join_spec);
/* 000278 */ 				}) ();
/* 000278 */ 			}
/* 000278 */ 		}
/* 000279 */ 		self.join_spec = (function () {
/* 000279 */ 			var __accu0__ = [];
/* 000281 */ 			var __iterable0__ = (function () {
/* 000281 */ 				var __accu1__ = jd;
/* 000281 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000281 */ 			}) ();
/* 000281 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000281 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000281 */ 				var k = __left0__ [0];
/* 000281 */ 				var v = __left0__ [1];
/* 000281 */ 				(function () {
/* 000281 */ 					var __accu1__ = __accu0__;
/* 000280 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (_replace_dollar_template, null, v, jd)]);
/* 000280 */ 				}) ();
/* 000280 */ 			}
/* 000280 */ 			return dict (__accu0__);
/* 000280 */ 		}) ();
/* 000283 */ 		self.name_in_link = name_in_link;
/* 000285 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000287 */ 		self._fields = tuple (['format_num', 'prefix_display', 'delimiters', 'join_spec', 'name_in_link', 'counter_formatter_id']);
/* 000287 */ 	});},
/* 000290 */ 	get asdict () {return __get__ (this, function (self) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000291 */ 		return (function () {
/* 000291 */ 			var __accu0__ = [];
/* 000291 */ 			var __iterable0__ = self._fields;
/* 000291 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000291 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000291 */ 				(function () {
/* 000291 */ 					var __accu1__ = __accu0__;
/* 000291 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000291 */ 				}) ();
/* 000291 */ 			}
/* 000291 */ 			return dict (__accu0__);
/* 000291 */ 		}) ();
/* 000291 */ 	});},
/* 000293 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000296 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000296 */ 			var __accu0__ = ', ';
/* 000296 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000296 */ 				var __accu1__ = [];
/* 000296 */ 				var __iterable0__ = self._fields;
/* 000296 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000296 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000296 */ 					(function () {
/* 000296 */ 						var __accu2__ = __accu1__;
/* 000296 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000296 */ 					}) ();
/* 000296 */ 				}
/* 000296 */ 				return py_iter (__accu1__);
/* 000296 */ 			}) ());
/* 000296 */ 		}) ()), ')');
/* 000296 */ 	});},
/* 000300 */ 	get format_llm () {return __get__ (this, function (self, value, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000300 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000300 */ 			var prefix_variant = null;
/* 000300 */ 		};
/* 000300 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000300 */ 			var with_delimiters = true;
/* 000300 */ 		};
/* 000300 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000300 */ 			var with_prefix = true;
/* 000300 */ 		};
/* 000300 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000300 */ 			var wrap_format_num = null;
/* 000300 */ 		};
/* 000300 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000300 */ 			var wrap_link_fn = null;
/* 000300 */ 		};
/* 000300 */ 		if (arguments.length) {
/* 000300 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000300 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000300 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000300 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000300 */ 					switch (__attrib0__) {
/* 000300 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 					}
/* 000300 */ 				}
/* 000300 */ 			}
/* 000300 */ 		}
/* 000300 */ 		else {
/* 000300 */ 		}
/* 000302 */ 		var __left0__ = (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000302 */ 		}) ();
/* 000302 */ 		var prefix = __left0__ [0];
/* 000302 */ 		var pre = __left0__ [1];
/* 000302 */ 		var post = __left0__ [2];
/* 000308 */ 		var s_num = (function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.format_num, __accu0__, value);
/* 000308 */ 		}) ();
/* 000309 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000310 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000310 */ 		}
/* 000311 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000312 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000313 */ 			return __call__ (wrap_link_fn, null, value, s);
/* 000313 */ 		}
/* 000314 */ 		return s;
/* 000314 */ 	});},
/* 000316 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000318 */ 		var __left0__ = tuple (['', '', '']);
/* 000318 */ 		var prefix = __left0__ [0];
/* 000318 */ 		var pre = __left0__ [1];
/* 000318 */ 		var post = __left0__ [2];
/* 000320 */ 		if (__t__ (with_delimiters)) {
/* 000321 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000322 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000322 */ 		}
/* 000324 */ 		if (__t__ (with_prefix)) {
/* 000325 */ 			var prefixinfo = self.prefix_display;
/* 000326 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000327 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000327 */ 			}
/* 000328 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000329 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000329 */ 			}
/* 000330 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000331 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000331 */ 			}
/* 000332 */ 			else {
/* 000333 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000333 */ 			}
/* 000333 */ 		}
/* 000335 */ 		return tuple ([prefix, pre, post]);
/* 000335 */ 	});},
/* 000338 */ 	get format_many_llm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000338 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var prefix_variant = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var with_delimiters = true;
/* 000338 */ 		};
/* 000338 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var with_prefix = true;
/* 000338 */ 		};
/* 000338 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var wrap_link_fn = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var wrap_format_num = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var get_raw_s_items = false;
/* 000338 */ 		};
/* 000338 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var s_items_join = null;
/* 000338 */ 		};
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000342 */ 		var join_spec = self.join_spec;
/* 000343 */ 		var name_in_link = self.name_in_link;
/* 000345 */ 		if (__t__ (s_items_join === null)) {
/* 000346 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000346 */ 				if (arguments.length) {
/* 000346 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 							switch (__attrib0__) {
/* 000346 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 							}
/* 000346 */ 						}
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				else {
/* 000346 */ 				}
/* 000346 */ 				return __add__ (a, b);
/* 000346 */ 			});
/* 000346 */ 		}
/* 000348 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000349 */ 			return __getitem__ (join_spec, 'empty');
/* 000349 */ 		}
/* 000351 */ 		var __iterable0__ = py_values;
/* 000351 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000351 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000352 */ 			try {
/* 000353 */ 				var v = __call__ (int, null, v);
/* 000353 */ 			}
/* 000353 */ 			catch (__except0__) {
/* 000353 */ 				if (isinstance (__except0__, py_TypeError)) {
/* 000355 */ 					var __except1__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000355 */ 					__except1__.__cause__ = null;
/* 000355 */ 					throw __except1__;
/* 000355 */ 				}
/* 000355 */ 				else {
/* 000355 */ 					throw __except0__;
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000359 */ 		var py_values = __call__ (sorted, null, py_values, __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000359 */ 			if (arguments.length) {
/* 000359 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 						switch (__attrib0__) {
/* 000359 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						}
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 			else {
/* 000359 */ 			}
/* 000359 */ 			return __call__ (int, null, x);
/* 000359 */ 		})}));
/* 000361 */ 		var num_values = __call__ (len, null, py_values);
/* 000363 */ 		var only_one_value = false;
/* 000364 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000365 */ 			var only_one_value = true;
/* 000365 */ 		}
/* 000367 */ 		var list_of_ranges = [];
/* 000368 */ 		var cur_range = null;
/* 000369 */ 		var __iterable0__ = py_values;
/* 000369 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000369 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 			if (__t__ (!__t__ ((cur_range)))) {
/* 000371 */ 				var cur_range = tuple ([v, v]);
/* 000371 */ 				continue;
/* 000371 */ 			}
/* 000373 */ 			if (__t__ (__eq__ (v, __add__ (__getitem__ (cur_range, 1), 1)))) {
/* 000374 */ 				var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000374 */ 				continue;
/* 000374 */ 			}
/* 000376 */ 			(function () {
/* 000376 */ 				var __accu0__ = list_of_ranges;
/* 000376 */ 				return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000376 */ 			}) ();
/* 000377 */ 			var cur_range = tuple ([v, v]);
/* 000377 */ 		}
/* 000379 */ 		(function () {
/* 000379 */ 			var __accu0__ = list_of_ranges;
/* 000379 */ 			return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000379 */ 		}) ();
/* 000380 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000381 */ 			if (__t__ (__eq__ (__add__ (__getitem__ (__getitem__ (list_of_ranges, 0), 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)))) {
/* 000384 */ 				var list_of_ranges = [tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 0), __getitem__ (__getitem__ (list_of_ranges, 0), 0)]), tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)])];
/* 000384 */ 			}
/* 000384 */ 		}
/* 000387 */ 		var _format_num = function (n) {
/* 000387 */ 			if (arguments.length) {
/* 000387 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 						switch (__attrib0__) {
/* 000387 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						}
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 			else {
/* 000387 */ 			}
/* 000388 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000389 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000389 */ 					var __accu0__ = self;
/* 000389 */ 					return __call__ (__accu0__.format_num, __accu0__, n);
/* 000389 */ 				}) ());
/* 000389 */ 			}
/* 000390 */ 			return (function () {
/* 000390 */ 				var __accu0__ = self;
/* 000390 */ 				return __call__ (__accu0__.format_num, __accu0__, n);
/* 000390 */ 			}) ();
/* 000390 */ 		};
/* 000392 */ 		var _render_range_items = function (a, b) {
/* 000392 */ 			if (arguments.length) {
/* 000392 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 						switch (__attrib0__) {
/* 000392 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						}
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 			else {
/* 000392 */ 			}
/* 000393 */ 			if (__t__ (__eq__ (a, b))) {
/* 000394 */ 				return [dict ({'s': __call__ (_format_num, null, a), 'n': a})];
/* 000394 */ 			}
/* 000395 */ 			var s_a = __call__ (_format_num, null, a);
/* 000396 */ 			var s_b = __call__ (_format_num, null, b);
/* 000397 */ 			if (__t__ (__eq__ (b, __add__ (a, 1)))) {
/* 000398 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000398 */ 			}
/* 000399 */ 			else {
/* 000400 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000400 */ 			}
/* 000401 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000401 */ 		};
/* 000409 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000412 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000412 */ 		}
/* 000415 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 2))) {
/* 000420 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 1))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000420 */ 		}
/* 000422 */ 		else {
/* 000424 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000425 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges, 0, __neg__ (1), 1));
/* 000425 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000425 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000425 */ 				var rngj = __left0__ [0];
/* 000425 */ 				var rng = __left0__ [1];
/* 000426 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000427 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000427 */ 				}
/* 000428 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng));
/* 000428 */ 			}
/* 000431 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, __neg__ (1)))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000431 */ 		}
/* 000435 */ 		var __left0__ = (function () {
/* 000435 */ 			var __accu0__ = self;
/* 000435 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000435 */ 		}) ();
/* 000435 */ 		var s_prefix = __left0__ [0];
/* 000435 */ 		var s_pre = __left0__ [1];
/* 000435 */ 		var s_post = __left0__ [2];
/* 000439 */ 		var first_n = null;
/* 000440 */ 		var __iterable0__ = s_items;
/* 000440 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000440 */ 			var si = __getitem__ (__iterable0__, __index0__);
/* 000441 */ 			var nn = (function () {
/* 000441 */ 				var __accu0__ = si;
/* 000441 */ 				return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000441 */ 			}) ();
/* 000442 */ 			if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000443 */ 				var first_n = nn;
/* 000443 */ 				break;
/* 000443 */ 			}
/* 000443 */ 		}
/* 000446 */ 		var s_pre_items = [];
/* 000447 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000448 */ 			(function () {
/* 000448 */ 				var __accu0__ = s_pre_items;
/* 000448 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n}));
/* 000448 */ 			}) ();
/* 000448 */ 		}
/* 000449 */ 		(function () {
/* 000449 */ 			var __accu0__ = s_pre_items;
/* 000449 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (only_one_value) ? null : false)}));
/* 000449 */ 		}) ();
/* 000452 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000461 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000462 */ 			var s_all = [];
/* 000463 */ 			var cur_s = null;
/* 000464 */ 			var cur_n = false;
/* 000465 */ 			var __iterable0__ = s_items;
/* 000465 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000465 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000466 */ 				var si = __getitem__ (s_item, 's');
/* 000467 */ 				var ni = (function () {
/* 000467 */ 					var __accu0__ = s_item;
/* 000467 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000467 */ 				}) ();
/* 000468 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000469 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000469 */ 					continue;
/* 000469 */ 				}
/* 000471 */ 				if (__t__ (__t__ (cur_n !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __eq__ (ni, cur_n)))) {
/* 000472 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000473 */ 						var cur_n = ni;
/* 000473 */ 					}
/* 000475 */ 					if (__t__ (cur_s === null)) {
/* 000476 */ 						var cur_s = si;
/* 000476 */ 					}
/* 000477 */ 					else {
/* 000479 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000479 */ 					}
/* 000479 */ 					continue;
/* 000479 */ 				}
/* 000482 */ 				if (__t__ (cur_s !== null)) {
/* 000483 */ 					(function () {
/* 000483 */ 						var __accu0__ = s_all;
/* 000483 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000483 */ 					}) ();
/* 000483 */ 				}
/* 000485 */ 				var cur_s = si;
/* 000486 */ 				var cur_n = ni;
/* 000486 */ 			}
/* 000488 */ 			if (__t__ (cur_s !== null)) {
/* 000489 */ 				(function () {
/* 000489 */ 					var __accu0__ = s_all;
/* 000489 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000489 */ 				}) ();
/* 000489 */ 			}
/* 000491 */ 			var s_items = s_all;
/* 000491 */ 		}
/* 000495 */ 		if (__t__ (get_raw_s_items)) {
/* 000496 */ 			return s_items;
/* 000496 */ 		}
/* 000498 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000499 */ 			var s = (function () {
/* 000499 */ 				var __accu0__ = '';
/* 000499 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000499 */ 					var __accu1__ = [];
/* 000499 */ 					var __iterable0__ = s_items;
/* 000499 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000503 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000503 */ 						(function () {
/* 000503 */ 							var __accu2__ = __accu1__;
/* 000500 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (wrap_link_fn, null, __getitem__ (x, 'n'), __getitem__ (x, 's')) : __getitem__ (x, 's')));
/* 000500 */ 						}) ();
/* 000500 */ 					}
/* 000500 */ 					return __accu1__;
/* 000500 */ 				}) ());
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000503 */ 		else {
/* 000507 */ 			var s = (function () {
/* 000507 */ 				var __accu0__ = '';
/* 000507 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000507 */ 					var __accu1__ = [];
/* 000507 */ 					var __iterable0__ = s_items;
/* 000507 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000507 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000507 */ 						(function () {
/* 000507 */ 							var __accu2__ = __accu1__;
/* 000507 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000507 */ 						}) ();
/* 000507 */ 					}
/* 000507 */ 					return __accu1__;
/* 000507 */ 				}) ());
/* 000507 */ 			}) ();
/* 000507 */ 		}
/* 000509 */ 		return s;
/* 000509 */ 	});}
/* 000509 */ });
/* 000516 */ export var Counter =  __class__ ('Counter', [object], {
/* 000516 */ 	__module__: __name__,
/* 000517 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000517 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var initial_value = 0;
/* 000517 */ 		};
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000518 */ 		self.formatter = counter_formatter;
/* 000519 */ 		self.value = initial_value;
/* 000519 */ 	});},
/* 000521 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000522 */ 		self.value = value;
/* 000523 */ 		return self.value;
/* 000523 */ 	});},
/* 000525 */ 	get step () {return __get__ (this, function (self) {
/* 000525 */ 		if (arguments.length) {
/* 000525 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 					switch (__attrib0__) {
/* 000525 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 			}
/* 000525 */ 		}
/* 000525 */ 		else {
/* 000525 */ 		}
/* 000526 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000527 */ 		return self.value;
/* 000527 */ 	});},
/* 000529 */ 	get reset () {return __get__ (this, function (self) {
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000530 */ 		self.value = self.initial_value;
/* 000531 */ 		return self.value;
/* 000531 */ 	});},
/* 000533 */ 	get format_llm () {return __get__ (this, function (self, value) {
/* 000533 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000533 */ 			var value = null;
/* 000533 */ 		};
/* 000533 */ 		var kwargs = dict ();
/* 000533 */ 		if (arguments.length) {
/* 000533 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000533 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000533 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000533 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000533 */ 					switch (__attrib0__) {
/* 000533 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000533 */ 					}
/* 000533 */ 				}
/* 000533 */ 				delete kwargs.__kwargtrans__;
/* 000533 */ 			}
/* 000533 */ 		}
/* 000533 */ 		else {
/* 000533 */ 		}
/* 000534 */ 		if (__t__ (value === null)) {
/* 000535 */ 			var value = self.value;
/* 000535 */ 		}
/* 000536 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000537 */ 		(function () {
/* 000537 */ 			var __accu0__ = kwargs2;
/* 000537 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000537 */ 		}) ();
/* 000538 */ 		return (function () {
/* 000538 */ 			var __accu0__ = self.formatter;
/* 000538 */ 			return __call__ (__accu0__.format_llm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000538 */ 		}) ();
/* 000538 */ 	});},
/* 000540 */ 	get step_and_format_llm () {return __get__ (this, function (self) {
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000541 */ 		var val = (function () {
/* 000541 */ 			var __accu0__ = self;
/* 000541 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000541 */ 		}) ();
/* 000542 */ 		return tuple ([val, (function () {
/* 000542 */ 			var __accu0__ = self;
/* 000542 */ 			return __call__ (__accu0__.format_llm, __accu0__, val);
/* 000542 */ 		}) ()]);
/* 000542 */ 	});}
/* 000542 */ });
/* 000545 */ export var CounterAlias =  __class__ ('CounterAlias', [object], {
/* 000545 */ 	__module__: __name__,
/* 000546 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, alias_counter) {
/* 000546 */ 		if (arguments.length) {
/* 000546 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000546 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000546 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000546 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000546 */ 					switch (__attrib0__) {
/* 000546 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 					}
/* 000546 */ 				}
/* 000546 */ 			}
/* 000546 */ 		}
/* 000546 */ 		else {
/* 000546 */ 		}
/* 000547 */ 		self.formatter = counter_formatter;
/* 000548 */ 		self.alias_counter = alias_counter;
/* 000548 */ 	});},
/* 000551 */ 	get _get_value () {return __get__ (this, function (self) {
/* 000551 */ 		if (arguments.length) {
/* 000551 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000551 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000551 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000551 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000551 */ 					switch (__attrib0__) {
/* 000551 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 					}
/* 000551 */ 				}
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 		else {
/* 000551 */ 		}
/* 000552 */ 		return self.alias_counter.value;
/* 000552 */ 	});},
/* 000554 */ 	get step () {return __get__ (this, function (self) {
/* 000554 */ 		if (arguments.length) {
/* 000554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000554 */ 					switch (__attrib0__) {
/* 000554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 					}
/* 000554 */ 				}
/* 000554 */ 			}
/* 000554 */ 		}
/* 000554 */ 		else {
/* 000554 */ 		}
/* 000555 */ 		return (function () {
/* 000555 */ 			var __accu0__ = self.alias_counter;
/* 000555 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000555 */ 		}) ();
/* 000555 */ 	});},
/* 000557 */ 	get reset () {return __get__ (this, function (self) {
/* 000557 */ 		if (arguments.length) {
/* 000557 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000557 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000557 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000557 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000557 */ 					switch (__attrib0__) {
/* 000557 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 					}
/* 000557 */ 				}
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 		else {
/* 000557 */ 		}
/* 000558 */ 		return (function () {
/* 000558 */ 			var __accu0__ = self.alias_counter;
/* 000558 */ 			return __call__ (__accu0__.reset, __accu0__);
/* 000558 */ 		}) ();
/* 000558 */ 	});},
/* 000560 */ 	get format_llm () {return __get__ (this, function (self, value) {
/* 000560 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000560 */ 			var value = null;
/* 000560 */ 		};
/* 000560 */ 		var kwargs = dict ();
/* 000560 */ 		if (arguments.length) {
/* 000560 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000560 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000560 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000560 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000560 */ 					switch (__attrib0__) {
/* 000560 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000560 */ 					}
/* 000560 */ 				}
/* 000560 */ 				delete kwargs.__kwargtrans__;
/* 000560 */ 			}
/* 000560 */ 		}
/* 000560 */ 		else {
/* 000560 */ 		}
/* 000561 */ 		if (__t__ (value === null)) {
/* 000562 */ 			var value = self.value;
/* 000562 */ 		}
/* 000563 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000564 */ 		(function () {
/* 000564 */ 			var __accu0__ = kwargs2;
/* 000564 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000564 */ 		}) ();
/* 000565 */ 		return (function () {
/* 000565 */ 			var __accu0__ = self.formatter;
/* 000565 */ 			return __call__ (__accu0__.format_llm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000565 */ 		}) ();
/* 000565 */ 	});},
/* 000567 */ 	get step_and_format_llm () {return __get__ (this, function (self) {
/* 000567 */ 		if (arguments.length) {
/* 000567 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 					switch (__attrib0__) {
/* 000567 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 		}
/* 000567 */ 		else {
/* 000567 */ 		}
/* 000568 */ 		var val = (function () {
/* 000568 */ 			var __accu0__ = self;
/* 000568 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000568 */ 		}) ();
/* 000569 */ 		return tuple ([val, (function () {
/* 000569 */ 			var __accu0__ = self;
/* 000569 */ 			return __call__ (__accu0__.format_llm, __accu0__, val);
/* 000569 */ 		}) ()]);
/* 000569 */ 	});}
/* 000569 */ });
/* 000569 */ Object.defineProperty (CounterAlias, 'value', property.call (CounterAlias, CounterAlias._get_value));;
/* 000006 */ 
//# sourceMappingURL=llm.counter.map