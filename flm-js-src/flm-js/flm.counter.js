/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:26
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000001 */ var __name__ = 'flm.counter';
/* 000008 */ export var alphacounter = function (n, lower) {
/* 000008 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000008 */ 		var lower = true;
/* 000008 */ 	};
/* 000008 */ 	if (arguments.length) {
/* 000008 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000008 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000008 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000008 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000008 */ 				switch (__attrib0__) {
/* 000008 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000008 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000008 */ 				}
/* 000008 */ 			}
/* 000008 */ 		}
/* 000008 */ 	}
/* 000008 */ 	else {
/* 000008 */ 	}
/* 000017 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000018 */ 	var w = __add__ (1, __floordiv__ (n, 26));
/* 000019 */ 	var m = __mod__ (n, 26);
/* 000020 */ 	var s = __mul__ (__call__ (chr, null, __add__ (97, m)), w);
/* 000021 */ 	if (__t__ (lower)) {
/* 000022 */ 		return s;
/* 000022 */ 	}
/* 000023 */ 	return (function () {
/* 000023 */ 		var __accu0__ = s;
/* 000023 */ 		return __call__ (__accu0__.upper, __accu0__);
/* 000023 */ 	}) ();
/* 000023 */ };
/* 000025 */ export var Alphacounter = function (n) {
/* 000025 */ 	if (arguments.length) {
/* 000025 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 				switch (__attrib0__) {
/* 000025 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 		}
/* 000025 */ 	}
/* 000025 */ 	else {
/* 000025 */ 	}
/* 000029 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000029 */ };
/* 000032 */ export var _romancounterchars = tuple ([tuple ([1000, 'M']), tuple ([900, 'CM']), tuple ([500, 'D']), tuple ([400, 'CD']), tuple ([100, 'C']), tuple ([90, 'XC']), tuple ([50, 'L']), tuple ([40, 'XL']), tuple ([10, 'X']), tuple ([9, 'IX']), tuple ([5, 'V']), tuple ([4, 'IV']), tuple ([1, 'I'])]);
/* 000048 */ export var romancounter = function (n, lower, zero) {
/* 000048 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000048 */ 		var lower = true;
/* 000048 */ 	};
/* 000048 */ 	if (typeof zero == 'undefined' || (zero != null && zero.hasOwnProperty ("__kwargtrans__"))) {;
/* 000048 */ 		var zero = '';
/* 000048 */ 	};
/* 000048 */ 	if (arguments.length) {
/* 000048 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 				switch (__attrib0__) {
/* 000048 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 					case 'zero': var zero = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 				}
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 	}
/* 000048 */ 	else {
/* 000048 */ 	}
/* 000059 */ 	var s = '';
/* 000060 */ 	if (__t__ (__eq__ (n, 0))) {
/* 000061 */ 		return zero;
/* 000061 */ 	}
/* 000062 */ 	var __iterable0__ = _romancounterchars;
/* 000062 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000062 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000062 */ 		var romancharvalue = __left0__ [0];
/* 000062 */ 		var romanchar = __left0__ [1];
/* 000063 */ 		var s = __call__ (__iadd__, null, s, __mul__ (romanchar, __floordiv__ (n, romancharvalue)));
/* 000064 */ 		var n = __mod__ (n, romancharvalue);
/* 000064 */ 	}
/* 000066 */ 	if (__t__ (lower)) {
/* 000067 */ 		return (function () {
/* 000067 */ 			var __accu0__ = s;
/* 000067 */ 			return __call__ (__accu0__.lower, __accu0__);
/* 000067 */ 		}) ();
/* 000067 */ 	}
/* 000069 */ 	return s;
/* 000069 */ };
/* 000071 */ export var Romancounter = function (n) {
/* 000071 */ 	if (arguments.length) {
/* 000071 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 				switch (__attrib0__) {
/* 000071 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 	}
/* 000071 */ 	else {
/* 000071 */ 	}
/* 000075 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000075 */ };
/* 000077 */ export var _fnsymbols = ['*', '†', '‡', '§', '¶', '‖'];
/* 000086 */ export var fnsymbolcounter = function (n, symbols) {
/* 000086 */ 	if (typeof symbols == 'undefined' || (symbols != null && symbols.hasOwnProperty ("__kwargtrans__"))) {;
/* 000086 */ 		var symbols = _fnsymbols;
/* 000086 */ 	};
/* 000086 */ 	if (arguments.length) {
/* 000086 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 				switch (__attrib0__) {
/* 000086 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 					case 'symbols': var symbols = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 	}
/* 000086 */ 	else {
/* 000086 */ 	}
/* 000100 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000101 */ 	var N = __call__ (len, null, symbols);
/* 000102 */ 	var w = __add__ (1, __floordiv__ (n, N));
/* 000103 */ 	var m = __mod__ (n, N);
/* 000104 */ 	var s = __mul__ (__getitem__ (symbols, m), w);
/* 000105 */ 	return s;
/* 000105 */ };
/* 000114 */ export var _unicodesuperscriptdigits = [__call__ (chr, null, 8304), __call__ (chr, null, 185), __call__ (chr, null, 178), __call__ (chr, null, 179), __call__ (chr, null, 8308), __call__ (chr, null, 8309), __call__ (chr, null, 8310), __call__ (chr, null, 8311), __call__ (chr, null, 8312), __call__ (chr, null, 8313)];
/* 000116 */ export var _unicodesubscriptdigits = (function () {
/* 000116 */ 	var __accu0__ = [];
/* 000116 */ 	for (var j = 0; j < 10; j++) {
/* 000118 */ 		(function () {
/* 000118 */ 			var __accu1__ = __accu0__;
/* 000117 */ 			return __call__ (__accu1__.append, __accu1__, __call__ (chr, null, __add__ (8320, j)));
/* 000117 */ 		}) ();
/* 000117 */ 	}
/* 000117 */ 	return __accu0__;
/* 000117 */ }) ();
/* 000122 */ export var customdigitscounter = function (n, digits) {
/* 000122 */ 	if (typeof digits == 'undefined' || (digits != null && digits.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 		var digits = '0123456789';
/* 000122 */ 	};
/* 000122 */ 	if (arguments.length) {
/* 000122 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 				switch (__attrib0__) {
/* 000122 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					case 'digits': var digits = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 	}
/* 000122 */ 	else {
/* 000122 */ 	}
/* 000130 */ 	var base = __call__ (len, null, digits);
/* 000131 */ 	var s = '';
/* 000132 */ 	while (__t__ (n)) {
/* 000133 */ 		var __left0__ = tuple ([__floordiv__ (n, base), __mod__ (n, base)]);
/* 000133 */ 		var q = __left0__ [0];
/* 000133 */ 		var r = __left0__ [1];
/* 000134 */ 		var s = __add__ (__getitem__ (digits, r), s);
/* 000135 */ 		var n = q;
/* 000135 */ 	}
/* 000136 */ 	return s;
/* 000136 */ };
/* 000138 */ export var unicodesuperscriptcounter = function (n) {
/* 000138 */ 	if (arguments.length) {
/* 000138 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 				switch (__attrib0__) {
/* 000138 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 	}
/* 000138 */ 	else {
/* 000138 */ 	}
/* 000145 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesuperscriptdigits}));
/* 000145 */ };
/* 000147 */ export var unicodesubscriptcounter = function (n) {
/* 000147 */ 	if (arguments.length) {
/* 000147 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 				switch (__attrib0__) {
/* 000147 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 	}
/* 000147 */ 	else {
/* 000147 */ 	}
/* 000154 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesubscriptdigits}));
/* 000154 */ };
/* 000158 */ export var standard_counter_formatters = dict ({'alph': (function __lambda__ (n) {
/* 000158 */ 	if (arguments.length) {
/* 000158 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 				switch (__attrib0__) {
/* 000158 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 	}
/* 000158 */ 	else {
/* 000158 */ 	}
/* 000159 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: true}));
/* 000159 */ }), 'Alph': (function __lambda__ (n) {
/* 000159 */ 	if (arguments.length) {
/* 000159 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 				switch (__attrib0__) {
/* 000159 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 	}
/* 000159 */ 	else {
/* 000159 */ 	}
/* 000160 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000160 */ }), 'roman': (function __lambda__ (n) {
/* 000160 */ 	if (arguments.length) {
/* 000160 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 				switch (__attrib0__) {
/* 000160 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 	}
/* 000160 */ 	else {
/* 000160 */ 	}
/* 000161 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: true}));
/* 000161 */ }), 'Roman': (function __lambda__ (n) {
/* 000161 */ 	if (arguments.length) {
/* 000161 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 				switch (__attrib0__) {
/* 000161 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 	}
/* 000161 */ 	else {
/* 000161 */ 	}
/* 000162 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000162 */ }), 'arabic': str, 'fnsymbol': fnsymbolcounter, 'unicodesuperscript': unicodesuperscriptcounter, 'unicodesubscript': unicodesubscriptcounter});
/* 000177 */ export var _standard_tag_template_initials_formatters = dict ({'a': alphacounter, 'A': Alphacounter, 'i': romancounter, 'I': Romancounter, '1': str});
/* 000187 */ export var _rx_dollar_template = (function () {
/* 000187 */ 	var __accu0__ = re;
/* 000187 */ 	return __call__ (__accu0__.compile, __accu0__, '\\$\\{([a-zA-Z0-9_.]+)\\}');
/* 000187 */ }) ();
/* 000189 */ export var _replace_dollar_template = function (x, vrs) {
/* 000189 */ 	if (arguments.length) {
/* 000189 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 				switch (__attrib0__) {
/* 000189 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 	}
/* 000189 */ 	else {
/* 000189 */ 	}
/* 000190 */ 	return (function () {
/* 000190 */ 		var __accu0__ = _rx_dollar_template;
/* 000190 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000190 */ 			if (arguments.length) {
/* 000190 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 						switch (__attrib0__) {
/* 000190 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						}
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 			else {
/* 000190 */ 			}
/* 000190 */ 			return __getitem__ (vrs, (function () {
/* 000190 */ 				var __accu1__ = m;
/* 000190 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000190 */ 			}) ());
/* 000190 */ 		}), x);
/* 000190 */ 	}) ();
/* 000190 */ };
/* 000192 */ export var _replace_dollar_template_use_callable = function (x, get_var_value) {
/* 000192 */ 	if (arguments.length) {
/* 000192 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 				switch (__attrib0__) {
/* 000192 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					case 'get_var_value': var get_var_value = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 	}
/* 000192 */ 	else {
/* 000192 */ 	}
/* 000193 */ 	return (function () {
/* 000193 */ 		var __accu0__ = _rx_dollar_template;
/* 000193 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000193 */ 			if (arguments.length) {
/* 000193 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 						switch (__attrib0__) {
/* 000193 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						}
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 			else {
/* 000193 */ 			}
/* 000193 */ 			return __call__ (get_var_value, null, (function () {
/* 000193 */ 				var __accu1__ = m;
/* 000193 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000193 */ 			}) ());
/* 000193 */ 		}), x);
/* 000193 */ 	}) ();
/* 000193 */ };
/* 000195 */ export var _replace_dollar_template_delayed = function (x, vrs) {
/* 000195 */ 	if (arguments.length) {
/* 000195 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 				switch (__attrib0__) {
/* 000195 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 	}
/* 000195 */ 	else {
/* 000195 */ 	}
/* 000196 */ 	return (function __lambda__ (arg, numprefix) {
/* 000196 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000196 */ 			var numprefix = null;
/* 000196 */ 		};
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000198 */ 		return __add__ (__t__ (numprefix) || '', (function () {
/* 000198 */ 			var __accu0__ = _rx_dollar_template;
/* 000198 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000198 */ 				if (arguments.length) {
/* 000198 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 							switch (__attrib0__) {
/* 000198 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 							}
/* 000198 */ 						}
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 				else {
/* 000198 */ 				}
/* 000198 */ 				return __call__ (__getitem__ (vrs, (function () {
/* 000198 */ 					var __accu1__ = m;
/* 000198 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000198 */ 				}) ()), null, arg);
/* 000198 */ 			}), x);
/* 000198 */ 		}) ());
/* 000198 */ 	});
/* 000198 */ };
/* 000204 */ export var parse_counter_format_num = function (counter_formatter, named_counter_formatters, str_use_tag_template, tag_template_initials_counters) {
/* 000204 */ 	if (typeof named_counter_formatters == 'undefined' || (named_counter_formatters != null && named_counter_formatters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000204 */ 		var named_counter_formatters = standard_counter_formatters;
/* 000204 */ 	};
/* 000204 */ 	if (typeof str_use_tag_template == 'undefined' || (str_use_tag_template != null && str_use_tag_template.hasOwnProperty ("__kwargtrans__"))) {;
/* 000204 */ 		var str_use_tag_template = false;
/* 000204 */ 	};
/* 000204 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000204 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000204 */ 	};
/* 000204 */ 	if (arguments.length) {
/* 000204 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 				switch (__attrib0__) {
/* 000204 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					case 'named_counter_formatters': var named_counter_formatters = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					case 'str_use_tag_template': var str_use_tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 	}
/* 000204 */ 	else {
/* 000204 */ 	}
/* 000218 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000219 */ 		return counter_formatter;
/* 000219 */ 	}
/* 000220 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000221 */ 		if (__t__ (__in__ (counter_formatter, named_counter_formatters))) {
/* 000222 */ 			return (function __lambda__ (n, numprefix) {
/* 000222 */ 				if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000222 */ 					var numprefix = null;
/* 000222 */ 				};
/* 000222 */ 				if (arguments.length) {
/* 000222 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 							switch (__attrib0__) {
/* 000222 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 								case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 							}
/* 000222 */ 						}
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 				else {
/* 000222 */ 				}
/* 000223 */ 				return __add__ (__t__ (numprefix) || '', __call__ (__getitem__ (named_counter_formatters, counter_formatter), null, n));
/* 000223 */ 			});
/* 000223 */ 		}
/* 000225 */ 		if (__t__ (str_use_tag_template)) {
/* 000226 */ 			return __call__ (_parse_counter_formatter_from_tag_template, null, counter_formatter, tag_template_initials_counters);
/* 000226 */ 		}
/* 000226 */ 	}
/* 000231 */ 	var counter_formatter_template = null;
/* 000232 */ 	try {
/* 000235 */ 		var counter_formatter_template = __getitem__ (counter_formatter, 'template');
/* 000235 */ 	}
/* 000235 */ 	catch (__except0__) {
/* 000237 */ 		// pass;
/* 000237 */ 	}
/* 000238 */ 	if (__t__ (counter_formatter_template)) {
/* 000239 */ 		var tmpl = __getitem__ (counter_formatter, 'template');
/* 000241 */ 		return __call__ (_replace_dollar_template_delayed, null, tmpl, named_counter_formatters);
/* 000241 */ 	}
/* 000243 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000243 */ 	__except0__.__cause__ = null;
/* 000243 */ 	throw __except0__;
/* 000243 */ };
/* 000245 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000245 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000245 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000245 */ 	};
/* 000245 */ 	if (arguments.length) {
/* 000245 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 				switch (__attrib0__) {
/* 000245 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 	}
/* 000245 */ 	else {
/* 000245 */ 	}
/* 000249 */ 	var rx = (function () {
/* 000249 */ 		var __accu0__ = re;
/* 000249 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000249 */ 			var __accu1__ = '';
/* 000249 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000249 */ 				var __accu2__ = tag_template_initials_counters;
/* 000249 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000249 */ 			}) ());
/* 000249 */ 		}) ()), ']'));
/* 000249 */ 	}) ();
/* 000250 */ 	var m = (function () {
/* 000250 */ 		var __accu0__ = rx;
/* 000250 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000250 */ 	}) ();
/* 000251 */ 	if (__t__ (m !== null)) {
/* 000253 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000253 */ 			var __accu0__ = m;
/* 000253 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000253 */ 		}) (), 1);
/* 000254 */ 		var right = __getslice__ (tag_template, (function () {
/* 000254 */ 			var __accu0__ = m;
/* 000254 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000254 */ 		}) (), null, 1);
/* 000255 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000255 */ 			var __accu0__ = m;
/* 000255 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000255 */ 		}) ());
/* 000256 */ 		return (function __lambda__ (n, numprefix) {
/* 000256 */ 			if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 				var numprefix = null;
/* 000256 */ 			};
/* 000256 */ 			if (arguments.length) {
/* 000256 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 						switch (__attrib0__) {
/* 000256 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						}
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 			else {
/* 000256 */ 			}
/* 000257 */ 			return __add__ (__t__ (numprefix) || '', __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right));
/* 000257 */ 		});
/* 000257 */ 	}
/* 000261 */ 	return (function __lambda__ (n, numprefix) {
/* 000261 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000261 */ 			var numprefix = null;
/* 000261 */ 		};
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000261 */ 		return tag_template;
/* 000261 */ 	});
/* 000261 */ };
/* 000265 */ export var parse_counter_format_subnum = function (format_subnum) {
/* 000265 */ 	if (arguments.length) {
/* 000265 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 				switch (__attrib0__) {
/* 000265 */ 					case 'format_subnum': var format_subnum = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 	}
/* 000265 */ 	else {
/* 000265 */ 	}
/* 000266 */ 	if (__t__ (__call__ (callable, null, format_subnum))) {
/* 000267 */ 		return format_subnum;
/* 000267 */ 	}
/* 000269 */ 	if (__t__ (__t__ (__in__ ('format_num', format_subnum)) && __in__ ('prefix', format_subnum))) {
/* 000270 */ 		var _format_num_fn = __call__ (parse_counter_format_num, null, __getitem__ (format_subnum, 'format_num'));
/* 000270 */ 	}
/* 000271 */ 	else {
/* 000272 */ 		var _format_num_fn = __call__ (parse_counter_format_num, null, format_subnum);
/* 000272 */ 	}
/* 000274 */ 	var _format_subnum_fn = function (n) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000276 */ 		return dict ({'formatted': __call__ (_format_num_fn, null, n), 'prefix': __getitem__ (format_subnum, 'prefix')});
/* 000276 */ 	};
/* 000279 */ 	return _format_subnum_fn;
/* 000279 */ };
/* 000283 */ export var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and}\xa0', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and}\xa0', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
/* 000318 */ export var build_counter_formatter = function (counter_formatter, default_counter_formatter_spec) {
/* 000318 */ 	if (arguments.length) {
/* 000318 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 				switch (__attrib0__) {
/* 000318 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					case 'default_counter_formatter_spec': var default_counter_formatter_spec = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 	}
/* 000318 */ 	else {
/* 000318 */ 	}
/* 000326 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000327 */ 		var f = counter_formatter;
/* 000328 */ 		if (__t__ (f.counter_formatter_id === null)) {
/* 000329 */ 			f.counter_formatter_id = counter_formatter_id;
/* 000329 */ 		}
/* 000330 */ 		return f;
/* 000330 */ 	}
/* 000332 */ 	if (__t__ (counter_formatter === null)) {
/* 000333 */ 		var f = __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000334 */ 		if (__t__ (f.counter_formatter_id === null)) {
/* 000335 */ 			f.counter_formatter_id = counter_formatter_id;
/* 000335 */ 		}
/* 000336 */ 		return f;
/* 000336 */ 	}
/* 000338 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000340 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000341 */ 		var d = default_counter_formatter_spec;
/* 000342 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000343 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000344 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000344 */ 	}
/* 000346 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000347 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000348 */ 			var d = default_counter_formatter_spec;
/* 000349 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000350 */ 			__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000351 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000351 */ 		}
/* 000352 */ 		var d = default_counter_formatter_spec;
/* 000353 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000354 */ 		(function () {
/* 000354 */ 			var __accu0__ = d;
/* 000354 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000354 */ 		}) ();
/* 000355 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000355 */ 	}
/* 000357 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000357 */ 	__except0__.__cause__ = null;
/* 000357 */ 	throw __except0__;
/* 000357 */ };
/* 000360 */ export var _rx_safenumprefix = (function () {
/* 000360 */ 	var __accu0__ = re;
/* 000360 */ 	return __call__ (__accu0__.compile, __accu0__, '[^A-Za-z0-9_-]+');
/* 000360 */ }) ();
/* 000362 */ export var ValueWithSubNums =  __class__ ('ValueWithSubNums', [object], {
/* 000362 */ 	__module__: __name__,
/* 000363 */ 	get __init__ () {return __get__ (this, function (self, value, subnums) {
/* 000363 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000363 */ 			var subnums = tuple ([]);
/* 000363 */ 		};
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		self.values_tuple = null;
/* 000365 */ 		if (__t__ (__call__ (hasattr, null, value, 'values_tuple'))) {
/* 000366 */ 			self.values_tuple = __call__ (tuple, null, value.values_tuple);
/* 000366 */ 		}
/* 000367 */ 		else {
/* 000369 */ 			var values_list = [__call__ (_expect_int, null, value)];
/* 000370 */ 			var values_list = __call__ (__iadd__, null, values_list, __call__ (list, null, subnums));
/* 000371 */ 			self.values_tuple = __call__ (tuple, null, values_list);
/* 000371 */ 		}
/* 000371 */ 	});},
/* 000373 */ 	get get_num () {return __get__ (this, function (self) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		return __getitem__ (self.values_tuple, 0);
/* 000374 */ 	});},
/* 000375 */ 	get get_subnums () {return __get__ (this, function (self) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000376 */ 		return __getslice__ (self.values_tuple, 1, null, 1);
/* 000376 */ 	});},
/* 000378 */ 	get astuple () {return __get__ (this, function (self) {
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000379 */ 		return self.values_tuple;
/* 000379 */ 	});},
/* 000381 */ 	get targetidstr () {return __get__ (this, function (self, numprefix) {
/* 000381 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var numprefix = null;
/* 000381 */ 		};
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000383 */ 		return __add__ ((function () {
/* 000383 */ 			var __accu0__ = _rx_safenumprefix;
/* 000383 */ 			return __call__ (__accu0__.sub, __accu0__, '-', __t__ (numprefix) || '');
/* 000384 */ 		}) (), (function () {
/* 000384 */ 			var __accu0__ = '-';
/* 000384 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000384 */ 				var __accu1__ = [];
/* 000384 */ 				var __iterable0__ = self.values_tuple;
/* 000384 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000384 */ 					var x = __getitem__ (__iterable0__, __index0__);
/* 000384 */ 					(function () {
/* 000384 */ 						var __accu2__ = __accu1__;
/* 000384 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, x));
/* 000384 */ 					}) ();
/* 000384 */ 				}
/* 000384 */ 				return __accu1__;
/* 000384 */ 			}) ());
/* 000384 */ 		}) ());
/* 000384 */ 	});},
/* 000387 */ 	get does_immediately_succeed () {return __get__ (this, function (self, val2) {
/* 000387 */ 		if (arguments.length) {
/* 000387 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 					switch (__attrib0__) {
/* 000387 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'val2': var val2 = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 		}
/* 000387 */ 		else {
/* 000387 */ 		}
/* 000388 */ 		var val2p1 = __call__ (list, null, val2.values_tuple);
/* 000389 */ 		__setitem__ (val2p1, __sub__ (__call__ (len, null, val2p1), 1), __call__ (__iadd__, null, __getitem__ (val2p1, __sub__ (__call__ (len, null, val2p1), 1)), 1));
/* 000390 */ 		return __eq__ (self.values_tuple, __call__ (tuple, null, val2p1));
/* 000390 */ 	});},
/* 000392 */ 	get equals () {return __get__ (this, function (self, val2) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'val2': var val2 = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		return __eq__ (self.values_tuple, val2.values_tuple);
/* 000393 */ 	});},
/* 000395 */ 	get incremented () {return __get__ (this, function (self, subnum_level) {
/* 000395 */ 		if (typeof subnum_level == 'undefined' || (subnum_level != null && subnum_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000395 */ 			var subnum_level = null;
/* 000395 */ 		};
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'subnum_level': var subnum_level = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000397 */ 		if (__t__ (subnum_level === null)) {
/* 000398 */ 			var subnum_level = __sub__ (__call__ (len, null, self.values_tuple), 1);
/* 000398 */ 		}
/* 000400 */ 		var new_values_list = __call__ (list, null, self.values_tuple);
/* 000401 */ 		__setitem__ (new_values_list, subnum_level, __call__ (__iadd__, null, __getitem__ (new_values_list, subnum_level), 1));
/* 000402 */ 		for (var j = __add__ (subnum_level, 1); j < __call__ (len, null, new_values_list); j++) {
/* 000403 */ 			__setitem__ (new_values_list, j, 0);
/* 000403 */ 		}
/* 000405 */ 		return __call__ (ValueWithSubNums, null, __getitem__ (new_values_list, 0), __getslice__ (new_values_list, 1, null, 1));
/* 000405 */ 	});},
/* 000407 */ 	get extended_by_one () {return __get__ (this, function (self, subnum_value) {
/* 000407 */ 		if (typeof subnum_value == 'undefined' || (subnum_value != null && subnum_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000407 */ 			var subnum_value = 0;
/* 000407 */ 		};
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'subnum_value': var subnum_value = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000408 */ 		var new_value = __call__ (ValueWithSubNums, null, self);
/* 000409 */ 		new_value.values_tuple = __call__ (tuple, null, __add__ (__call__ (list, null, new_value.values_tuple), [subnum_value]));
/* 000410 */ 		return new_value;
/* 000410 */ 	});},
/* 000412 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000413 */ 		return __add__ (__add__ ('V{', __call__ (repr, null, self.values_tuple)), '}');
/* 000413 */ 	});}
/* 000413 */ });
/* 000423 */ var _lexicographical_array_cmp = (a, b) => { for (let i = 0; i < a.length && i < b.length; ++i) { if (a[i] < b[i]) { return -1; } if (a[i] > b[i]) { return +1; } } return a.length - b.length; }
/* 000424 */ var _sorted_values = (vals) => { let va = [...vals]; va.sort( (a, b) => _lexicographical_array_cmp(a.values_tuple, b.values_tuple) ); return va; };
/* 000428 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000428 */ 	__module__: __name__,
/* 000439 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link, repeat_numprefix_in_range, counter_formatter_id, subnums_format_nums) {
/* 000439 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var prefix_display = null;
/* 000439 */ 		};
/* 000439 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var delimiters = null;
/* 000439 */ 		};
/* 000439 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var join_spec = null;
/* 000439 */ 		};
/* 000439 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var name_in_link = true;
/* 000439 */ 		};
/* 000439 */ 		if (typeof repeat_numprefix_in_range == 'undefined' || (repeat_numprefix_in_range != null && repeat_numprefix_in_range.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var repeat_numprefix_in_range = false;
/* 000439 */ 		};
/* 000439 */ 		if (typeof counter_formatter_id == 'undefined' || (counter_formatter_id != null && counter_formatter_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var counter_formatter_id = null;
/* 000439 */ 		};
/* 000439 */ 		if (typeof subnums_format_nums == 'undefined' || (subnums_format_nums != null && subnums_format_nums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var subnums_format_nums = tuple ([]);
/* 000439 */ 		};
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'repeat_numprefix_in_range': var repeat_numprefix_in_range = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'subnums_format_nums': var subnums_format_nums = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000446 */ 		self.format_num = format_num;
/* 000447 */ 		self._format_num_fn = __call__ (parse_counter_format_num, null, format_num);
/* 000448 */ 		if (__t__ (prefix_display === null)) {
/* 000449 */ 			var prefix_display = dict ({'singular': '', 'plural': ''});
/* 000449 */ 		}
/* 000453 */ 		else if (__t__ (__call__ (isinstance, null, prefix_display, str))) {
/* 000454 */ 			var prefix_display = dict ({'singular': prefix_display, 'plural': prefix_display});
/* 000454 */ 		}
/* 000458 */ 		self.prefix_display = prefix_display;
/* 000459 */ 		self.delimiters = (__t__ (delimiters !== null) ? delimiters : tuple (['', '']));
/* 000460 */ 		var jd = __call__ (dict, null, __getitem__ (_default_formatter_join_spec, 'default'));
/* 000461 */ 		if (__t__ (join_spec !== null)) {
/* 000462 */ 			if (__t__ (__call__ (isinstance, null, join_spec, str))) {
/* 000463 */ 				(function () {
/* 000463 */ 					var __accu0__ = jd;
/* 000463 */ 					return __call__ (__accu0__.py_update, __accu0__, __getitem__ (_default_formatter_join_spec, join_spec));
/* 000463 */ 				}) ();
/* 000463 */ 			}
/* 000464 */ 			else {
/* 000465 */ 				(function () {
/* 000465 */ 					var __accu0__ = jd;
/* 000465 */ 					return __call__ (__accu0__.py_update, __accu0__, join_spec);
/* 000465 */ 				}) ();
/* 000465 */ 			}
/* 000465 */ 		}
/* 000466 */ 		self.join_spec = (function () {
/* 000466 */ 			var __accu0__ = [];
/* 000468 */ 			var __iterable0__ = (function () {
/* 000468 */ 				var __accu1__ = jd;
/* 000468 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000468 */ 			}) ();
/* 000468 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000468 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000468 */ 				var k = __left0__ [0];
/* 000468 */ 				var v = __left0__ [1];
/* 000468 */ 				(function () {
/* 000468 */ 					var __accu1__ = __accu0__;
/* 000467 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (_replace_dollar_template, null, v, jd)]);
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000467 */ 			return dict (__accu0__);
/* 000467 */ 		}) ();
/* 000470 */ 		self.name_in_link = name_in_link;
/* 000471 */ 		self.repeat_numprefix_in_range = repeat_numprefix_in_range;
/* 000472 */ 		self.subnums_format_nums = subnums_format_nums;
/* 000473 */ 		self._subnums_format_nums_fns = (function () {
/* 000473 */ 			var __accu0__ = [];
/* 000473 */ 			var __iterable0__ = self.subnums_format_nums;
/* 000473 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000475 */ 				var format_subnum = __getitem__ (__iterable0__, __index0__);
/* 000475 */ 				(function () {
/* 000475 */ 					var __accu1__ = __accu0__;
/* 000474 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (parse_counter_format_subnum, null, format_subnum));
/* 000474 */ 				}) ();
/* 000474 */ 			}
/* 000474 */ 			return __accu0__;
/* 000474 */ 		}) ();
/* 000478 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000484 */ 		self._fields = tuple (['format_num', 'prefix_display', 'delimiters', 'join_spec', 'name_in_link', 'repeat_numprefix_in_range', 'counter_formatter_id', 'subnums_format_nums']);
/* 000484 */ 	});},
/* 000492 */ 	get format_number () {return __get__ (this, function (self, n, numprefix, subnums) {
/* 000492 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000492 */ 			var numprefix = null;
/* 000492 */ 		};
/* 000492 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000492 */ 			var subnums = null;
/* 000492 */ 		};
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000493 */ 		var s = '';
/* 000494 */ 		var skipprefix = true;
/* 000495 */ 		if (__t__ (n !== null)) {
/* 000496 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000496 */ 				var __accu0__ = self;
/* 000496 */ 				return __call__ (__accu0__._format_num_fn, __accu0__, n, __kwargtrans__ ({numprefix: numprefix}));
/* 000496 */ 			}) ());
/* 000497 */ 			var skipprefix = false;
/* 000497 */ 		}
/* 000498 */ 		if (__t__ (__t__ (subnums) && __call__ (len, null, subnums))) {
/* 000499 */ 			var subnums_format_nums = (function () {
/* 000499 */ 				var __accu0__ = self;
/* 000499 */ 				return __call__ (__accu0__.get_subnums_format_nums, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000499 */ 			}) ();
/* 000502 */ 			for (var j = 0; j < __call__ (len, null, subnums); j++) {
/* 000503 */ 				if (__t__ (__getitem__ (subnums, j))) {
/* 000504 */ 					var sfmtted = __call__ (__getitem__ (subnums_format_nums, j), null, __getitem__ (subnums, j));
/* 000505 */ 					if (__t__ (!__t__ ((skipprefix)))) {
/* 000506 */ 						var s = __call__ (__iadd__, null, s, __getitem__ (sfmtted, 'prefix'));
/* 000506 */ 					}
/* 000507 */ 					var s = __call__ (__iadd__, null, s, __getitem__ (sfmtted, 'formatted'));
/* 000508 */ 					var skipprefix = false;
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000509 */ 		return s;
/* 000509 */ 	});},
/* 000511 */ 	get get_subnums_format_nums () {return __get__ (this, function (self, n) {
/* 000511 */ 		var numprefix = null;
/* 000511 */ 		var subnums = null;
/* 000511 */ 		if (arguments.length) {
/* 000511 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 					switch (__attrib0__) {
/* 000511 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 		}
/* 000511 */ 		else {
/* 000511 */ 		}
/* 000512 */ 		return self._subnums_format_nums_fns;
/* 000512 */ 	});},
/* 000514 */ 	get asdict () {return __get__ (this, function (self) {
/* 000514 */ 		if (arguments.length) {
/* 000514 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000514 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000514 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000514 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000514 */ 					switch (__attrib0__) {
/* 000514 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 					}
/* 000514 */ 				}
/* 000514 */ 			}
/* 000514 */ 		}
/* 000514 */ 		else {
/* 000514 */ 		}
/* 000515 */ 		return (function () {
/* 000515 */ 			var __accu0__ = [];
/* 000515 */ 			var __iterable0__ = self._fields;
/* 000515 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000515 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000515 */ 				(function () {
/* 000515 */ 					var __accu1__ = __accu0__;
/* 000515 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000515 */ 				}) ();
/* 000515 */ 			}
/* 000515 */ 			return dict (__accu0__);
/* 000515 */ 		}) ();
/* 000515 */ 	});},
/* 000517 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000520 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000520 */ 			var __accu0__ = ', ';
/* 000520 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000520 */ 				var __accu1__ = [];
/* 000520 */ 				var __iterable0__ = self._fields;
/* 000520 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000520 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000520 */ 					(function () {
/* 000520 */ 						var __accu2__ = __accu1__;
/* 000520 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000520 */ 					}) ();
/* 000520 */ 				}
/* 000520 */ 				return py_iter (__accu1__);
/* 000520 */ 			}) ());
/* 000520 */ 		}) ()), ')');
/* 000520 */ 	});},
/* 000524 */ 	get format_flm () {return __get__ (this, function (self, value, numprefix, subnums, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000524 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var numprefix = null;
/* 000524 */ 		};
/* 000524 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var subnums = null;
/* 000524 */ 		};
/* 000524 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var prefix_variant = null;
/* 000524 */ 		};
/* 000524 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var with_delimiters = true;
/* 000524 */ 		};
/* 000524 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var with_prefix = true;
/* 000524 */ 		};
/* 000524 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var wrap_format_num = null;
/* 000524 */ 		};
/* 000524 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000524 */ 			var wrap_link_fn = null;
/* 000524 */ 		};
/* 000524 */ 		if (arguments.length) {
/* 000524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000524 */ 					switch (__attrib0__) {
/* 000524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 					}
/* 000524 */ 				}
/* 000524 */ 			}
/* 000524 */ 		}
/* 000524 */ 		else {
/* 000524 */ 		}
/* 000533 */ 		var __left0__ = (function () {
/* 000533 */ 			var __accu0__ = self;
/* 000533 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000533 */ 		}) ();
/* 000533 */ 		var prefix = __left0__ [0];
/* 000533 */ 		var pre = __left0__ [1];
/* 000533 */ 		var post = __left0__ [2];
/* 000540 */ 		if (__t__ (__call__ (isinstance, null, value, ValueWithSubNums))) {
/* 000541 */ 			if (__t__ (subnums !== null)) {
/* 000545 */ 				var __except0__ = __call__ (ValueError, null, 'format_flm(): cannot specify both ValueWithSubNums instance and subnums= argument; got format_flm({}, subnums={})'.format (__call__ (repr, null, value), __call__ (repr, null, subnums)));
/* 000545 */ 				__except0__.__cause__ = null;
/* 000545 */ 				throw __except0__;
/* 000545 */ 			}
/* 000547 */ 			var __left0__ = tuple ([(function () {
/* 000547 */ 				var __accu0__ = value;
/* 000547 */ 				return __call__ (__accu0__.get_num, __accu0__);
/* 000547 */ 			}) (), (function () {
/* 000547 */ 				var __accu0__ = value;
/* 000547 */ 				return __call__ (__accu0__.get_subnums, __accu0__);
/* 000547 */ 			}) ()]);
/* 000547 */ 			var value = __left0__ [0];
/* 000547 */ 			var subnums = __left0__ [1];
/* 000547 */ 		}
/* 000549 */ 		var s_num = (function () {
/* 000549 */ 			var __accu0__ = self;
/* 000549 */ 			return __call__ (__accu0__.format_number, __accu0__, value, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000549 */ 		}) ();
/* 000550 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000551 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000551 */ 		}
/* 000552 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000553 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000554 */ 			return __call__ (wrap_link_fn, null, __kwargtrans__ ({n: value, s: s, numprefix: numprefix, subnums: subnums}));
/* 000554 */ 		}
/* 000555 */ 		return s;
/* 000555 */ 	});},
/* 000557 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000557 */ 		if (arguments.length) {
/* 000557 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000557 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000557 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000557 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000557 */ 					switch (__attrib0__) {
/* 000557 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 					}
/* 000557 */ 				}
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 		else {
/* 000557 */ 		}
/* 000559 */ 		var __left0__ = tuple (['', '', '']);
/* 000559 */ 		var prefix = __left0__ [0];
/* 000559 */ 		var pre = __left0__ [1];
/* 000559 */ 		var post = __left0__ [2];
/* 000561 */ 		if (__t__ (with_delimiters)) {
/* 000562 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000563 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000563 */ 		}
/* 000565 */ 		if (__t__ (with_prefix)) {
/* 000566 */ 			var prefixinfo = self.prefix_display;
/* 000567 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000568 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000568 */ 			}
/* 000569 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000570 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000570 */ 			}
/* 000571 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000572 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000572 */ 			}
/* 000573 */ 			else {
/* 000574 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000574 */ 			}
/* 000574 */ 		}
/* 000576 */ 		return tuple ([prefix, pre, post]);
/* 000576 */ 	});},
/* 000579 */ 	get format_many_flm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000579 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var prefix_variant = null;
/* 000579 */ 		};
/* 000579 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var with_delimiters = true;
/* 000579 */ 		};
/* 000579 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var with_prefix = true;
/* 000579 */ 		};
/* 000579 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var wrap_link_fn = null;
/* 000579 */ 		};
/* 000579 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var wrap_format_num = null;
/* 000579 */ 		};
/* 000579 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var get_raw_s_items = false;
/* 000579 */ 		};
/* 000579 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var s_items_join = null;
/* 000579 */ 		};
/* 000579 */ 		if (arguments.length) {
/* 000579 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000579 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000579 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000579 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000579 */ 					switch (__attrib0__) {
/* 000579 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 					}
/* 000579 */ 				}
/* 000579 */ 			}
/* 000579 */ 		}
/* 000579 */ 		else {
/* 000579 */ 		}
/* 000595 */ 		var join_spec = self.join_spec;
/* 000596 */ 		var name_in_link = self.name_in_link;
/* 000598 */ 		if (__t__ (s_items_join === null)) {
/* 000599 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000599 */ 				if (arguments.length) {
/* 000599 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000599 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000599 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000599 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000599 */ 							switch (__attrib0__) {
/* 000599 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000599 */ 							}
/* 000599 */ 						}
/* 000599 */ 					}
/* 000599 */ 				}
/* 000599 */ 				else {
/* 000599 */ 				}
/* 000599 */ 				return __add__ (a, b);
/* 000599 */ 			});
/* 000599 */ 		}
/* 000603 */ 		var py_values = __call__ (list, null, py_values);
/* 000605 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000606 */ 			return __getitem__ (join_spec, 'empty');
/* 000606 */ 		}
/* 000609 */ 		if (__t__ (__t__ (!__t__ ((__call__ (isinstance, null, __getitem__ (py_values, 0), tuple ([int, ValueWithSubNums]))))) && __t__ (__eq__ (__call__ (len, null, __getitem__ (py_values, 0)), 2)) && (__t__ (__call__ (isinstance, null, __getitem__ (__getitem__ (py_values, 0), 0), str)) || __getitem__ (__getitem__ (py_values, 0), 0) === null))) {
/* 000612 */ 			// pass;
/* 000612 */ 		}
/* 000613 */ 		else {
/* 000615 */ 			var py_values = [tuple ([null, py_values])];
/* 000615 */ 		}
/* 000623 */ 		var py_values = (function () {
/* 000623 */ 			var __accu0__ = [];
/* 000623 */ 			var __iterable0__ = py_values;
/* 000623 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000625 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000625 */ 				var valuenumprefix = __left0__ [0];
/* 000625 */ 				var valuelist = __left0__ [1];
/* 000625 */ 				(function () {
/* 000625 */ 					var __accu1__ = __accu0__;
/* 000624 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([valuenumprefix, __call__ (_sorted_values, null, (function () {
/* 000624 */ 						var __accu2__ = [];
/* 000624 */ 						var __iterable1__ = valuelist;
/* 000624 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000624 */ 							var v = __getitem__ (__iterable1__, __index1__);
/* 000624 */ 							(function () {
/* 000624 */ 								var __accu3__ = __accu2__;
/* 000624 */ 								return __call__ (__accu3__.append, __accu3__, __call__ (ValueWithSubNums, null, v));
/* 000624 */ 							}) ();
/* 000624 */ 						}
/* 000624 */ 						return __accu2__;
/* 000624 */ 					}) ())]));
/* 000624 */ 				}) ();
/* 000624 */ 			}
/* 000624 */ 			return __accu0__;
/* 000624 */ 		}) ();
/* 000630 */ 		var num_values = __call__ (sum, null, (function () {
/* 000630 */ 			var __accu0__ = [];
/* 000630 */ 			var __iterable0__ = py_values;
/* 000630 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000630 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000630 */ 				var _ = __left0__ [0];
/* 000630 */ 				var valuelist = __left0__ [1];
/* 000630 */ 				(function () {
/* 000630 */ 					var __accu1__ = __accu0__;
/* 000630 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, valuelist));
/* 000630 */ 				}) ();
/* 000630 */ 			}
/* 000630 */ 			return __accu0__;
/* 000630 */ 		}) ());
/* 000632 */ 		var only_one_value = false;
/* 000633 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000634 */ 			var only_one_value = true;
/* 000634 */ 		}
/* 000636 */ 		var list_of_ranges_with_numprefix = [];
/* 000637 */ 		var __iterable0__ = py_values;
/* 000637 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000637 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000637 */ 			var numprefix = __left0__ [0];
/* 000637 */ 			var valuelist = __left0__ [1];
/* 000638 */ 			var cur_range = null;
/* 000639 */ 			var __iterable1__ = valuelist;
/* 000639 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000639 */ 				var v = __getitem__ (__iterable1__, __index1__);
/* 000640 */ 				if (__t__ (cur_range === null)) {
/* 000641 */ 					var cur_range = tuple ([v, v]);
/* 000641 */ 					continue;
/* 000641 */ 				}
/* 000643 */ 				if (__t__ ((function () {
/* 000643 */ 					var __accu0__ = v;
/* 000643 */ 					return __call__ (__accu0__.does_immediately_succeed, __accu0__, __getitem__ (cur_range, 1));
/* 000643 */ 				}) ())) {
/* 000644 */ 					var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000644 */ 					continue;
/* 000644 */ 				}
/* 000646 */ 				(function () {
/* 000646 */ 					var __accu0__ = list_of_ranges_with_numprefix;
/* 000646 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([numprefix, cur_range]));
/* 000646 */ 				}) ();
/* 000647 */ 				var cur_range = tuple ([v, v]);
/* 000647 */ 			}
/* 000648 */ 			(function () {
/* 000648 */ 				var __accu0__ = list_of_ranges_with_numprefix;
/* 000648 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([numprefix, cur_range]));
/* 000648 */ 			}) ();
/* 000648 */ 		}
/* 000650 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 1))) {
/* 000651 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000651 */ 			var numprefix = __left0__ [0];
/* 000651 */ 			var single_range = __left0__ [1];
/* 000652 */ 			if (__t__ ((function () {
/* 000652 */ 				var __accu0__ = __getitem__ (single_range, 1);
/* 000652 */ 				return __call__ (__accu0__.does_immediately_succeed, __accu0__, __getitem__ (single_range, 0));
/* 000652 */ 			}) ())) {
/* 000655 */ 				var list_of_ranges_with_numprefix = [tuple ([numprefix, tuple ([__getitem__ (single_range, 0), __getitem__ (single_range, 0)])]), tuple ([numprefix, tuple ([__getitem__ (single_range, 1), __getitem__ (single_range, 1)])])];
/* 000655 */ 			}
/* 000655 */ 		}
/* 000660 */ 		var _format_val = function (val) {
/* 000660 */ 			var range_from = null;
/* 000660 */ 			if (arguments.length) {
/* 000660 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000660 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000660 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000660 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000660 */ 						switch (__attrib0__) {
/* 000660 */ 							case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 							case 'range_from': var range_from = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						}
/* 000660 */ 					}
/* 000660 */ 				}
/* 000660 */ 			}
/* 000660 */ 			else {
/* 000660 */ 			}
/* 000661 */ 			var n = __getitem__ (val.values_tuple, 0);
/* 000662 */ 			var subnums = __call__ (tuple, null, __getslice__ (val.values_tuple, 1, null, 1));
/* 000663 */ 			if (__t__ (range_from !== null)) {
/* 000664 */ 				var numprefix = null;
/* 000665 */ 				if (__t__ (__eq__ (__getitem__ (range_from.values_tuple, 0), n))) {
/* 000666 */ 					var n = null;
/* 000666 */ 				}
/* 000667 */ 				var v0subnums = __getslice__ (range_from.values_tuple, 1, null, 1);
/* 000668 */ 				for (var j = 0; j < __call__ (len, null, subnums); j++) {
/* 000669 */ 					if (__t__ (__eq__ (__getitem__ (subnums, j), __getitem__ (v0subnums, j)))) {
/* 000670 */ 						__setitem__ (subnums, j, null);
/* 000670 */ 					}
/* 000670 */ 				}
/* 000670 */ 			}
/* 000671 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000673 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000673 */ 					var __accu0__ = self;
/* 000673 */ 					return __call__ (__accu0__.format_number, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000673 */ 				}) (), __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000673 */ 			}
/* 000678 */ 			return (function () {
/* 000678 */ 				var __accu0__ = self;
/* 000678 */ 				return __call__ (__accu0__.format_number, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000678 */ 			}) ();
/* 000678 */ 		};
/* 000680 */ 		var _render_range_items = function (a, b, numprefix) {
/* 000680 */ 			if (arguments.length) {
/* 000680 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000680 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000680 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000680 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000680 */ 						switch (__attrib0__) {
/* 000680 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						}
/* 000680 */ 					}
/* 000680 */ 				}
/* 000680 */ 			}
/* 000680 */ 			else {
/* 000680 */ 			}
/* 000681 */ 			if (__t__ ((function () {
/* 000681 */ 				var __accu0__ = a;
/* 000681 */ 				return __call__ (__accu0__.equals, __accu0__, b);
/* 000681 */ 			}) ())) {
/* 000682 */ 				return [dict ({'s': __call__ (_format_val, null, a, __kwargtrans__ ({numprefix: numprefix})), 'n': a, 'np': numprefix})];
/* 000682 */ 			}
/* 000683 */ 			var is_pairmid = (function () {
/* 000683 */ 				var __accu0__ = b;
/* 000683 */ 				return __call__ (__accu0__.does_immediately_succeed, __accu0__, a);
/* 000683 */ 			}) ();
/* 000684 */ 			var s_a = __call__ (_format_val, null, a, __kwargtrans__ ({numprefix: numprefix}));
/* 000685 */ 			var s_b = __call__ (_format_val, null, b, __kwargtrans__ ({numprefix: numprefix, range_from: (__t__ (!__t__ ((__t__ (is_pairmid) || self.repeat_numprefix_in_range))) ? a : null)}));
/* 000690 */ 			if (__t__ (is_pairmid)) {
/* 000691 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000691 */ 			}
/* 000692 */ 			else {
/* 000693 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000693 */ 			}
/* 000694 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a, 'np': numprefix}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b, 'np': numprefix}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000694 */ 		};
/* 000702 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 1))) {
/* 000703 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000703 */ 			var numprefix = __left0__ [0];
/* 000703 */ 			var single_range = __left0__ [1];
/* 000706 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...single_range, __kwargtrans__ ({numprefix: numprefix}))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000706 */ 		}
/* 000709 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 2))) {
/* 000710 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000710 */ 			var first_numprefix = __left0__ [0];
/* 000710 */ 			var first_range = __left0__ [1];
/* 000711 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 1);
/* 000711 */ 			var second_numprefix = __left0__ [0];
/* 000711 */ 			var second_range = __left0__ [1];
/* 000716 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...first_range, __kwargtrans__ ({numprefix: first_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...second_range, __kwargtrans__ ({numprefix: second_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000716 */ 		}
/* 000718 */ 		else {
/* 000720 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000721 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges_with_numprefix, 0, __neg__ (1), 1));
/* 000721 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000721 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000721 */ 				var rngj = __left0__ [0];
/* 000721 */ 				var rnginfo = __left0__ [1];
/* 000722 */ 				var __left0__ = rnginfo;
/* 000722 */ 				var numprefix = __left0__ [0];
/* 000722 */ 				var rng = __left0__ [1];
/* 000723 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000724 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000724 */ 				}
/* 000725 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng, __kwargtrans__ ({numprefix: numprefix})));
/* 000725 */ 			}
/* 000727 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, __sub__ (__call__ (len, null, list_of_ranges_with_numprefix), 1));
/* 000727 */ 			var last_numprefix = __left0__ [0];
/* 000727 */ 			var last_range = __left0__ [1];
/* 000731 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...last_range, __kwargtrans__ ({numprefix: last_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000731 */ 		}
/* 000735 */ 		var __left0__ = (function () {
/* 000735 */ 			var __accu0__ = self;
/* 000735 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000735 */ 		}) ();
/* 000735 */ 		var s_prefix = __left0__ [0];
/* 000735 */ 		var s_pre = __left0__ [1];
/* 000735 */ 		var s_post = __left0__ [2];
/* 000739 */ 		var first_n = null;
/* 000740 */ 		var first_numprefix = null;
/* 000741 */ 		if (__t__ (!__t__ ((name_in_link)))) {
/* 000742 */ 			var first_n = false;
/* 000742 */ 		}
/* 000743 */ 		else {
/* 000744 */ 			var __iterable0__ = s_items;
/* 000744 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000744 */ 				var si = __getitem__ (__iterable0__, __index0__);
/* 000745 */ 				var nn = (function () {
/* 000745 */ 					var __accu0__ = si;
/* 000745 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000745 */ 				}) ();
/* 000746 */ 				if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000747 */ 					var first_n = nn;
/* 000748 */ 					var first_numprefix = __getitem__ (si, 'np');
/* 000748 */ 					break;
/* 000748 */ 				}
/* 000748 */ 			}
/* 000748 */ 		}
/* 000751 */ 		var s_pre_items = [];
/* 000752 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000753 */ 			(function () {
/* 000753 */ 				var __accu0__ = s_pre_items;
/* 000753 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n, 'np': first_numprefix}));
/* 000753 */ 			}) ();
/* 000753 */ 		}
/* 000754 */ 		(function () {
/* 000754 */ 			var __accu0__ = s_pre_items;
/* 000754 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (__t__ (name_in_link) && only_one_value) ? null : false)}));
/* 000754 */ 		}) ();
/* 000760 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000769 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000770 */ 			var s_all = [];
/* 000771 */ 			var cur_s = null;
/* 000772 */ 			var cur_n = false;
/* 000773 */ 			var cur_np = null;
/* 000774 */ 			var __iterable0__ = s_items;
/* 000774 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000774 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000775 */ 				var si = __getitem__ (s_item, 's');
/* 000776 */ 				var ni = (function () {
/* 000776 */ 					var __accu0__ = s_item;
/* 000776 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000776 */ 				}) ();
/* 000777 */ 				var np = (function () {
/* 000777 */ 					var __accu0__ = s_item;
/* 000777 */ 					return __call__ (__accu0__.py_get, __accu0__, 'np', null);
/* 000777 */ 				}) ();
/* 000778 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000779 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000779 */ 					continue;
/* 000779 */ 				}
/* 000783 */ 				if (__t__ (__t__ (cur_n !== false) && __t__ (ni !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __t__ (__eq__ (ni, cur_n)) && __call__ (_eqfornone, null, np, cur_np)))) {
/* 000785 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000786 */ 						var cur_n = ni;
/* 000787 */ 						var cur_np = np;
/* 000787 */ 					}
/* 000789 */ 					if (__t__ (cur_s === null)) {
/* 000790 */ 						var cur_s = si;
/* 000790 */ 					}
/* 000791 */ 					else {
/* 000793 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000793 */ 					}
/* 000793 */ 					continue;
/* 000793 */ 				}
/* 000796 */ 				if (__t__ (cur_s !== null)) {
/* 000797 */ 					(function () {
/* 000797 */ 						var __accu0__ = s_all;
/* 000797 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n, 'np': cur_np}));
/* 000797 */ 					}) ();
/* 000797 */ 				}
/* 000799 */ 				var cur_s = si;
/* 000800 */ 				var cur_n = ni;
/* 000801 */ 				var cur_np = np;
/* 000801 */ 			}
/* 000803 */ 			if (__t__ (cur_s !== null)) {
/* 000804 */ 				(function () {
/* 000804 */ 					var __accu0__ = s_all;
/* 000804 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n, 'np': cur_np}));
/* 000804 */ 				}) ();
/* 000804 */ 			}
/* 000806 */ 			var s_items = s_all;
/* 000806 */ 		}
/* 000810 */ 		if (__t__ (get_raw_s_items)) {
/* 000811 */ 			return s_items;
/* 000811 */ 		}
/* 000813 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000814 */ 			var _wrap_link_fn_call = function (x) {
/* 000814 */ 				if (arguments.length) {
/* 000814 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000814 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000814 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000814 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000814 */ 							switch (__attrib0__) {
/* 000814 */ 								case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 							}
/* 000814 */ 						}
/* 000814 */ 					}
/* 000814 */ 				}
/* 000814 */ 				else {
/* 000814 */ 				}
/* 000815 */ 				var n = __getitem__ (__getitem__ (x, 'n').values_tuple, 0);
/* 000816 */ 				var subnums = __getslice__ (__getitem__ (x, 'n').values_tuple, 1, null, 1);
/* 000817 */ 				return __call__ (wrap_link_fn, null, __kwargtrans__ ({n: n, s: __getitem__ (x, 's'), numprefix: __getitem__ (x, 'np'), subnums: subnums}));
/* 000817 */ 			};
/* 000818 */ 			var s = (function () {
/* 000818 */ 				var __accu0__ = '';
/* 000818 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000818 */ 					var __accu1__ = [];
/* 000818 */ 					var __iterable0__ = s_items;
/* 000818 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000822 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000822 */ 						(function () {
/* 000822 */ 							var __accu2__ = __accu1__;
/* 000819 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (_wrap_link_fn_call, null, x) : __getitem__ (x, 's')));
/* 000819 */ 						}) ();
/* 000819 */ 					}
/* 000819 */ 					return __accu1__;
/* 000819 */ 				}) ());
/* 000819 */ 			}) ();
/* 000819 */ 		}
/* 000822 */ 		else {
/* 000826 */ 			var s = (function () {
/* 000826 */ 				var __accu0__ = '';
/* 000826 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000826 */ 					var __accu1__ = [];
/* 000826 */ 					var __iterable0__ = s_items;
/* 000826 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000826 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000826 */ 						(function () {
/* 000826 */ 							var __accu2__ = __accu1__;
/* 000826 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000826 */ 						}) ();
/* 000826 */ 					}
/* 000826 */ 					return __accu1__;
/* 000826 */ 				}) ());
/* 000826 */ 			}) ();
/* 000826 */ 		}
/* 000828 */ 		return s;
/* 000828 */ 	});}
/* 000828 */ });
/* 000831 */ export var _eqfornone = function (a, b) {
/* 000831 */ 	if (arguments.length) {
/* 000831 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000831 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000831 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000831 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000831 */ 				switch (__attrib0__) {
/* 000831 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000831 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000831 */ 				}
/* 000831 */ 			}
/* 000831 */ 		}
/* 000831 */ 	}
/* 000831 */ 	else {
/* 000831 */ 	}
/* 000832 */ 	return __t__ (__t__ (a === null) && b === null) || __eq__ (a, b);
/* 000832 */ };
/* 000839 */ export var _expect_int = function (v) {
/* 000839 */ 	if (arguments.length) {
/* 000839 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000839 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000839 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000839 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000839 */ 				switch (__attrib0__) {
/* 000839 */ 					case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 				}
/* 000839 */ 			}
/* 000839 */ 		}
/* 000839 */ 	}
/* 000839 */ 	else {
/* 000839 */ 	}
/* 000840 */ 	try {
/* 000841 */ 		return __call__ (int, null, v);
/* 000841 */ 	}
/* 000841 */ 	catch (__except0__) {
/* 000841 */ 		if (isinstance (__except0__, py_TypeError)) {
/* 000843 */ 			var __except1__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000843 */ 			__except1__.__cause__ = null;
/* 000843 */ 			throw __except1__;
/* 000843 */ 		}
/* 000843 */ 		else {
/* 000843 */ 			throw __except0__;
/* 000843 */ 		}
/* 000843 */ 	}
/* 000843 */ };
/* 000006 */ 
//# sourceMappingURL=flm.counter.map