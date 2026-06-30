/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000009 */ import {Mapping, Sequence, TypeCounterFormatterInput, TypeCounterFormatterSpecDict, TypeFormatNumFn, TypeFormatNumName, TypeFormatNumSpec, TypeFormatSubnumSpec, TypeJoinSpecDict, TypeJoinSpecInput, TypeJoinSpecName, TypePrefixDisplayInput, TypeStandardCounterFormattersDict} from './flm._typing_helpers.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {TypeJoinSpecInput, TypeJoinSpecName, TypeJoinSpecDict, TypeStandardCounterFormattersDict, TypeFormatNumSpec, TypeFormatSubnumSpec, TypeFormatNumFn, TypeCounterFormatterSpecDict, Sequence, TypePrefixDisplayInput, TypeCounterFormatterInput, Mapping, TypeFormatNumName};
/* 000001 */ var __name__ = 'flm.counter';
/* 000026 */ export var alphacounter = function (n, lower) {
/* 000026 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000026 */ 		var lower = true;
/* 000026 */ 	};
/* 000026 */ 	if (arguments.length) {
/* 000026 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 				switch (__attrib0__) {
/* 000026 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 	}
/* 000026 */ 	else {
/* 000026 */ 	}
/* 000035 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000036 */ 	var w = __add__ (1, __floordiv__ (n, 26));
/* 000037 */ 	var m = __mod__ (n, 26);
/* 000038 */ 	var s = __mul__ (__call__ (chr, null, __add__ (97, m)), w);
/* 000039 */ 	if (__t__ (lower)) {
/* 000040 */ 		return s;
/* 000040 */ 	}
/* 000041 */ 	return (function () {
/* 000041 */ 		var __accu0__ = s;
/* 000041 */ 		return __call__ (__accu0__.upper, __accu0__);
/* 000041 */ 	}) ();
/* 000041 */ };
/* 000043 */ export var Alphacounter = function (n) {
/* 000043 */ 	if (arguments.length) {
/* 000043 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 				switch (__attrib0__) {
/* 000043 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 	}
/* 000043 */ 	else {
/* 000043 */ 	}
/* 000047 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000047 */ };
/* 000050 */ export var _romancounterchars = tuple ([tuple ([1000, 'M']), tuple ([900, 'CM']), tuple ([500, 'D']), tuple ([400, 'CD']), tuple ([100, 'C']), tuple ([90, 'XC']), tuple ([50, 'L']), tuple ([40, 'XL']), tuple ([10, 'X']), tuple ([9, 'IX']), tuple ([5, 'V']), tuple ([4, 'IV']), tuple ([1, 'I'])]);
/* 000066 */ export var romancounter = function (n, lower, zero) {
/* 000066 */ 	if (typeof lower == 'undefined' || (lower != null && lower.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 		var lower = true;
/* 000066 */ 	};
/* 000066 */ 	if (typeof zero == 'undefined' || (zero != null && zero.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 		var zero = '';
/* 000066 */ 	};
/* 000066 */ 	if (arguments.length) {
/* 000066 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 				switch (__attrib0__) {
/* 000066 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					case 'lower': var lower = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					case 'zero': var zero = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 	}
/* 000066 */ 	else {
/* 000066 */ 	}
/* 000077 */ 	var s = '';
/* 000078 */ 	if (__t__ (__eq__ (n, 0))) {
/* 000079 */ 		return zero;
/* 000079 */ 	}
/* 000080 */ 	var __iterable0__ = _romancounterchars;
/* 000080 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000080 */ 		var romancharvalue = __left0__ [0];
/* 000080 */ 		var romanchar = __left0__ [1];
/* 000081 */ 		var s = __call__ (__iadd__, null, s, __mul__ (romanchar, __floordiv__ (n, romancharvalue)));
/* 000082 */ 		var n = __mod__ (n, romancharvalue);
/* 000082 */ 	}
/* 000084 */ 	if (__t__ (lower)) {
/* 000085 */ 		return (function () {
/* 000085 */ 			var __accu0__ = s;
/* 000085 */ 			return __call__ (__accu0__.lower, __accu0__);
/* 000085 */ 		}) ();
/* 000085 */ 	}
/* 000087 */ 	return s;
/* 000087 */ };
/* 000089 */ export var Romancounter = function (n) {
/* 000089 */ 	if (arguments.length) {
/* 000089 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 				switch (__attrib0__) {
/* 000089 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 	}
/* 000089 */ 	else {
/* 000089 */ 	}
/* 000093 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000093 */ };
/* 000095 */ export var _fnsymbols = ['*', '†', '‡', '§', '¶', '‖'];
/* 000104 */ export var fnsymbolcounter = function (n, symbols) {
/* 000104 */ 	if (typeof symbols == 'undefined' || (symbols != null && symbols.hasOwnProperty ("__kwargtrans__"))) {;
/* 000104 */ 		var symbols = _fnsymbols;
/* 000104 */ 	};
/* 000104 */ 	if (arguments.length) {
/* 000104 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 				switch (__attrib0__) {
/* 000104 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					case 'symbols': var symbols = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 	}
/* 000104 */ 	else {
/* 000104 */ 	}
/* 000118 */ 	var n = __call__ (__isub__, null, n, 1);
/* 000119 */ 	var N = __call__ (len, null, symbols);
/* 000120 */ 	var w = __add__ (1, __floordiv__ (n, N));
/* 000121 */ 	var m = __mod__ (n, N);
/* 000122 */ 	var s = __mul__ (__getitem__ (symbols, m), w);
/* 000123 */ 	return s;
/* 000123 */ };
/* 000132 */ export var _unicodesuperscriptdigits = [__call__ (chr, null, 8304), __call__ (chr, null, 185), __call__ (chr, null, 178), __call__ (chr, null, 179), __call__ (chr, null, 8308), __call__ (chr, null, 8309), __call__ (chr, null, 8310), __call__ (chr, null, 8311), __call__ (chr, null, 8312), __call__ (chr, null, 8313)];
/* 000134 */ export var _unicodesubscriptdigits = (function () {
/* 000134 */ 	var __accu0__ = [];
/* 000134 */ 	for (var j = 0; j < 10; j++) {
/* 000136 */ 		(function () {
/* 000136 */ 			var __accu1__ = __accu0__;
/* 000135 */ 			return __call__ (__accu1__.append, __accu1__, __call__ (chr, null, __add__ (8320, j)));
/* 000135 */ 		}) ();
/* 000135 */ 	}
/* 000135 */ 	return __accu0__;
/* 000135 */ }) ();
/* 000140 */ export var customdigitscounter = function (n, digits) {
/* 000140 */ 	if (typeof digits == 'undefined' || (digits != null && digits.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 		var digits = '0123456789';
/* 000140 */ 	};
/* 000140 */ 	if (arguments.length) {
/* 000140 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 				switch (__attrib0__) {
/* 000140 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					case 'digits': var digits = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 	}
/* 000140 */ 	else {
/* 000140 */ 	}
/* 000148 */ 	var base = __call__ (len, null, digits);
/* 000149 */ 	var s = '';
/* 000150 */ 	while (__t__ (n)) {
/* 000151 */ 		var __left0__ = tuple ([__floordiv__ (n, base), __mod__ (n, base)]);
/* 000151 */ 		var q = __left0__ [0];
/* 000151 */ 		var r = __left0__ [1];
/* 000152 */ 		var s = __add__ (__getitem__ (digits, r), s);
/* 000153 */ 		var n = q;
/* 000153 */ 	}
/* 000154 */ 	return s;
/* 000154 */ };
/* 000156 */ export var unicodesuperscriptcounter = function (n) {
/* 000156 */ 	if (arguments.length) {
/* 000156 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 				switch (__attrib0__) {
/* 000156 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 	}
/* 000156 */ 	else {
/* 000156 */ 	}
/* 000163 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesuperscriptdigits}));
/* 000163 */ };
/* 000165 */ export var unicodesubscriptcounter = function (n) {
/* 000165 */ 	if (arguments.length) {
/* 000165 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 				switch (__attrib0__) {
/* 000165 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 	}
/* 000165 */ 	else {
/* 000165 */ 	}
/* 000172 */ 	return __call__ (customdigitscounter, null, n, __kwargtrans__ ({digits: _unicodesubscriptdigits}));
/* 000172 */ };
/* 000176 */ var _standard_counter_formatters = dict ({'alph': (function __lambda__ (n) {
/* 000176 */ 	if (arguments.length) {
/* 000176 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 				switch (__attrib0__) {
/* 000176 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 	}
/* 000176 */ 	else {
/* 000176 */ 	}
/* 000177 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: true}));
/* 000177 */ }), 'Alph': (function __lambda__ (n) {
/* 000177 */ 	if (arguments.length) {
/* 000177 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 				switch (__attrib0__) {
/* 000177 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 	}
/* 000177 */ 	else {
/* 000177 */ 	}
/* 000178 */ 	return __call__ (alphacounter, null, n, __kwargtrans__ ({lower: false}));
/* 000178 */ }), 'roman': (function __lambda__ (n) {
/* 000178 */ 	if (arguments.length) {
/* 000178 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 				switch (__attrib0__) {
/* 000178 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 	}
/* 000178 */ 	else {
/* 000178 */ 	}
/* 000179 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: true}));
/* 000179 */ }), 'Roman': (function __lambda__ (n) {
/* 000179 */ 	if (arguments.length) {
/* 000179 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 				switch (__attrib0__) {
/* 000179 */ 					case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 	}
/* 000179 */ 	else {
/* 000179 */ 	}
/* 000180 */ 	return __call__ (romancounter, null, n, __kwargtrans__ ({lower: false}));
/* 000180 */ }), 'arabic': str, 'fnsymbol': fnsymbolcounter, 'unicodesuperscript': unicodesuperscriptcounter, 'unicodesubscript': unicodesubscriptcounter});
/* 000187 */ export var standard_counter_formatters = _standard_counter_formatters;
/* 000197 */ export var _standard_tag_template_initials_formatters = dict ({'a': alphacounter, 'A': Alphacounter, 'i': romancounter, 'I': Romancounter, '1': str});
/* 000207 */ export var _rx_dollar_template = (function () {
/* 000207 */ 	var __accu0__ = re;
/* 000207 */ 	return __call__ (__accu0__.compile, __accu0__, '\\$\\{([a-zA-Z0-9_.]+)\\}');
/* 000207 */ }) ();
/* 000209 */ export var _replace_dollar_template = function (x, vrs) {
/* 000209 */ 	if (arguments.length) {
/* 000209 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 				switch (__attrib0__) {
/* 000209 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 	}
/* 000209 */ 	else {
/* 000209 */ 	}
/* 000210 */ 	return (function () {
/* 000210 */ 		var __accu0__ = _rx_dollar_template;
/* 000210 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000210 */ 			if (arguments.length) {
/* 000210 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 						switch (__attrib0__) {
/* 000210 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						}
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 			else {
/* 000210 */ 			}
/* 000210 */ 			return __getitem__ (vrs, (function () {
/* 000210 */ 				var __accu1__ = m;
/* 000210 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000210 */ 			}) ());
/* 000210 */ 		}), x);
/* 000210 */ 	}) ();
/* 000210 */ };
/* 000212 */ export var _replace_dollar_template_use_callable = function (x, get_var_value) {
/* 000212 */ 	if (arguments.length) {
/* 000212 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 				switch (__attrib0__) {
/* 000212 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					case 'get_var_value': var get_var_value = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 	}
/* 000212 */ 	else {
/* 000212 */ 	}
/* 000213 */ 	return (function () {
/* 000213 */ 		var __accu0__ = _rx_dollar_template;
/* 000213 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000213 */ 			if (arguments.length) {
/* 000213 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 						switch (__attrib0__) {
/* 000213 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						}
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 			else {
/* 000213 */ 			}
/* 000213 */ 			return __call__ (get_var_value, null, (function () {
/* 000213 */ 				var __accu1__ = m;
/* 000213 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000213 */ 			}) ());
/* 000213 */ 		}), x);
/* 000213 */ 	}) ();
/* 000213 */ };
/* 000215 */ export var _replace_dollar_template_delayed = function (x, vrs) {
/* 000215 */ 	if (arguments.length) {
/* 000215 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 				switch (__attrib0__) {
/* 000215 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 	}
/* 000215 */ 	else {
/* 000215 */ 	}
/* 000216 */ 	return (function __lambda__ (arg, numprefix) {
/* 000216 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 			var numprefix = null;
/* 000216 */ 		};
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000218 */ 		return __add__ (__t__ (numprefix) || '', (function () {
/* 000218 */ 			var __accu0__ = _rx_dollar_template;
/* 000218 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000218 */ 				if (arguments.length) {
/* 000218 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 							switch (__attrib0__) {
/* 000218 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							}
/* 000218 */ 						}
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 				else {
/* 000218 */ 				}
/* 000218 */ 				return __call__ (__getitem__ (vrs, (function () {
/* 000218 */ 					var __accu1__ = m;
/* 000218 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000218 */ 				}) ()), null, arg);
/* 000218 */ 			}), x);
/* 000218 */ 		}) ());
/* 000218 */ 	});
/* 000218 */ };
/* 000224 */ export var parse_counter_format_num = function (counter_formatter, named_counter_formatters, str_use_tag_template, tag_template_initials_counters) {
/* 000224 */ 	if (typeof named_counter_formatters == 'undefined' || (named_counter_formatters != null && named_counter_formatters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 		var named_counter_formatters = standard_counter_formatters;
/* 000224 */ 	};
/* 000224 */ 	if (typeof str_use_tag_template == 'undefined' || (str_use_tag_template != null && str_use_tag_template.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 		var str_use_tag_template = false;
/* 000224 */ 	};
/* 000224 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000224 */ 	};
/* 000224 */ 	if (arguments.length) {
/* 000224 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 				switch (__attrib0__) {
/* 000224 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					case 'named_counter_formatters': var named_counter_formatters = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					case 'str_use_tag_template': var str_use_tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 	}
/* 000224 */ 	else {
/* 000224 */ 	}
/* 000234 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000235 */ 		return counter_formatter;
/* 000235 */ 	}
/* 000236 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000237 */ 		if (__t__ (__in__ (counter_formatter, named_counter_formatters))) {
/* 000238 */ 			return (function __lambda__ (n, numprefix) {
/* 000238 */ 				if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000238 */ 					var numprefix = null;
/* 000238 */ 				};
/* 000238 */ 				if (arguments.length) {
/* 000238 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 							switch (__attrib0__) {
/* 000238 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 								case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 							}
/* 000238 */ 						}
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 				else {
/* 000238 */ 				}
/* 000239 */ 				return __add__ (__t__ (numprefix) || '', __call__ (__getitem__ (named_counter_formatters, counter_formatter), null, n));
/* 000239 */ 			});
/* 000239 */ 		}
/* 000241 */ 		if (__t__ (str_use_tag_template)) {
/* 000242 */ 			return __call__ (_parse_counter_formatter_from_tag_template, null, counter_formatter, tag_template_initials_counters);
/* 000242 */ 		}
/* 000242 */ 	}
/* 000247 */ 	var counter_formatter_template = null;
/* 000248 */ 	try {
/* 000251 */ 		var counter_formatter_template = __getitem__ (counter_formatter, 'template');
/* 000251 */ 	}
/* 000251 */ 	catch (__except0__) {
/* 000253 */ 		// pass;
/* 000253 */ 	}
/* 000254 */ 	if (__t__ (counter_formatter_template)) {
/* 000256 */ 		return __call__ (_replace_dollar_template_delayed, null, counter_formatter_template, named_counter_formatters);
/* 000256 */ 	}
/* 000258 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000258 */ 	__except0__.__cause__ = null;
/* 000258 */ 	throw __except0__;
/* 000258 */ };
/* 000260 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000260 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000260 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000260 */ 	};
/* 000260 */ 	if (arguments.length) {
/* 000260 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 				switch (__attrib0__) {
/* 000260 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 	}
/* 000260 */ 	else {
/* 000260 */ 	}
/* 000264 */ 	var rx = (function () {
/* 000264 */ 		var __accu0__ = re;
/* 000264 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000264 */ 			var __accu1__ = '';
/* 000264 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000264 */ 				var __accu2__ = tag_template_initials_counters;
/* 000264 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000264 */ 			}) ());
/* 000264 */ 		}) ()), ']'));
/* 000264 */ 	}) ();
/* 000265 */ 	var m = (function () {
/* 000265 */ 		var __accu0__ = rx;
/* 000265 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000265 */ 	}) ();
/* 000266 */ 	if (__t__ (m !== null)) {
/* 000268 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000268 */ 			var __accu0__ = m;
/* 000268 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000268 */ 		}) (), 1);
/* 000269 */ 		var right = __getslice__ (tag_template, (function () {
/* 000269 */ 			var __accu0__ = m;
/* 000269 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000269 */ 		}) (), null, 1);
/* 000270 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000270 */ 			var __accu0__ = m;
/* 000270 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000270 */ 		}) ());
/* 000271 */ 		return (function __lambda__ (n, numprefix) {
/* 000271 */ 			if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000271 */ 				var numprefix = null;
/* 000271 */ 			};
/* 000271 */ 			if (arguments.length) {
/* 000271 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 						switch (__attrib0__) {
/* 000271 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						}
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 			else {
/* 000271 */ 			}
/* 000272 */ 			return __add__ (__t__ (numprefix) || '', __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right));
/* 000272 */ 		});
/* 000272 */ 	}
/* 000276 */ 	return (function __lambda__ (n, numprefix) {
/* 000276 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000276 */ 			var numprefix = null;
/* 000276 */ 		};
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000276 */ 		return tag_template;
/* 000276 */ 	});
/* 000276 */ };
/* 000280 */ export var parse_counter_format_subnum = function (format_subnum) {
/* 000280 */ 	if (arguments.length) {
/* 000280 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 				switch (__attrib0__) {
/* 000280 */ 					case 'format_subnum': var format_subnum = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 	}
/* 000280 */ 	else {
/* 000280 */ 	}
/* 000281 */ 	if (__t__ (__call__ (callable, null, format_subnum))) {
/* 000282 */ 		return format_subnum;
/* 000282 */ 	}
/* 000284 */ 	if (__t__ (__t__ (__in__ ('format_num', format_subnum)) && __in__ ('prefix', format_subnum))) {
/* 000285 */ 		var _format_num_fn = __call__ (parse_counter_format_num, null, __getitem__ (format_subnum, 'format_num'));
/* 000285 */ 	}
/* 000286 */ 	else {
/* 000287 */ 		var _format_num_fn = __call__ (parse_counter_format_num, null, format_subnum);
/* 000287 */ 	}
/* 000289 */ 	var _format_subnum_fn = function (n) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000291 */ 		return dict ({'formatted': __call__ (_format_num_fn, null, n), 'prefix': __getitem__ (format_subnum, 'prefix')});
/* 000291 */ 	};
/* 000294 */ 	return _format_subnum_fn;
/* 000294 */ };
/* 000298 */ var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and}\xa0', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and}\xa0', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
/* 000333 */ export var build_counter_formatter = function (counter_formatter, default_counter_formatter_spec) {
/* 000333 */ 	if (arguments.length) {
/* 000333 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 				switch (__attrib0__) {
/* 000333 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					case 'default_counter_formatter_spec': var default_counter_formatter_spec = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 	}
/* 000333 */ 	else {
/* 000333 */ 	}
/* 000342 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000343 */ 		var f = counter_formatter;
/* 000344 */ 		if (__t__ (f.counter_formatter_id === null)) {
/* 000345 */ 			f.counter_formatter_id = counter_formatter_id;
/* 000345 */ 		}
/* 000346 */ 		return f;
/* 000346 */ 	}
/* 000348 */ 	if (__t__ (counter_formatter === null)) {
/* 000349 */ 		var f = __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000350 */ 		if (__t__ (f.counter_formatter_id === null)) {
/* 000351 */ 			f.counter_formatter_id = counter_formatter_id;
/* 000351 */ 		}
/* 000352 */ 		return f;
/* 000352 */ 	}
/* 000354 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000356 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000357 */ 		var d = default_counter_formatter_spec;
/* 000358 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000359 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000360 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000360 */ 	}
/* 000362 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000363 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000364 */ 			var d = default_counter_formatter_spec;
/* 000365 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000366 */ 			__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000367 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000367 */ 		}
/* 000368 */ 		var d = default_counter_formatter_spec;
/* 000369 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000370 */ 		(function () {
/* 000370 */ 			var __accu0__ = d;
/* 000370 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000370 */ 		}) ();
/* 000371 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000371 */ 	}
/* 000373 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000373 */ 	__except0__.__cause__ = null;
/* 000373 */ 	throw __except0__;
/* 000373 */ };
/* 000376 */ export var _rx_safenumprefix = (function () {
/* 000376 */ 	var __accu0__ = re;
/* 000376 */ 	return __call__ (__accu0__.compile, __accu0__, '[^A-Za-z0-9_-]+');
/* 000376 */ }) ();
/* 000378 */ export var ValueWithSubNums =  __class__ ('ValueWithSubNums', [object], {
/* 000378 */ 	__module__: __name__,
/* 000379 */ 	get __init__ () {return __get__ (this, function (self, value, subnums) {
/* 000379 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000379 */ 			var subnums = tuple ([]);
/* 000379 */ 		};
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000380 */ 		if (__t__ (__call__ (hasattr, null, value, 'values_tuple'))) {
/* 000381 */ 			self.values_tuple = __call__ (tuple, null, value.values_tuple);
/* 000381 */ 		}
/* 000382 */ 		else {
/* 000384 */ 			var values_list = [__call__ (_expect_int, null, value)];
/* 000385 */ 			var values_list = __call__ (__iadd__, null, values_list, __call__ (list, null, subnums));
/* 000386 */ 			self.values_tuple = __call__ (tuple, null, values_list);
/* 000386 */ 		}
/* 000386 */ 	});},
/* 000388 */ 	get get_num () {return __get__ (this, function (self) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000389 */ 		return __getitem__ (self.values_tuple, 0);
/* 000389 */ 	});},
/* 000390 */ 	get get_subnums () {return __get__ (this, function (self) {
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000391 */ 		return __getslice__ (self.values_tuple, 1, null, 1);
/* 000391 */ 	});},
/* 000393 */ 	get astuple () {return __get__ (this, function (self) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000394 */ 		return self.values_tuple;
/* 000394 */ 	});},
/* 000396 */ 	get targetidstr () {return __get__ (this, function (self, numprefix) {
/* 000396 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000396 */ 			var numprefix = null;
/* 000396 */ 		};
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000398 */ 		return __add__ ((function () {
/* 000398 */ 			var __accu0__ = _rx_safenumprefix;
/* 000398 */ 			return __call__ (__accu0__.sub, __accu0__, '-', __t__ (numprefix) || '');
/* 000399 */ 		}) (), (function () {
/* 000399 */ 			var __accu0__ = '-';
/* 000399 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000399 */ 				var __accu1__ = [];
/* 000399 */ 				var __iterable0__ = self.values_tuple;
/* 000399 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000399 */ 					var x = __getitem__ (__iterable0__, __index0__);
/* 000399 */ 					(function () {
/* 000399 */ 						var __accu2__ = __accu1__;
/* 000399 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, x));
/* 000399 */ 					}) ();
/* 000399 */ 				}
/* 000399 */ 				return __accu1__;
/* 000399 */ 			}) ());
/* 000399 */ 		}) ());
/* 000399 */ 	});},
/* 000402 */ 	get does_immediately_succeed () {return __get__ (this, function (self, val2) {
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'val2': var val2 = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000403 */ 		var val2p1 = __call__ (list, null, val2.values_tuple);
/* 000404 */ 		__setitem__ (val2p1, __sub__ (__call__ (len, null, val2p1), 1), __call__ (__iadd__, null, __getitem__ (val2p1, __sub__ (__call__ (len, null, val2p1), 1)), 1));
/* 000405 */ 		return __eq__ (self.values_tuple, __call__ (tuple, null, val2p1));
/* 000405 */ 	});},
/* 000407 */ 	get equals () {return __get__ (this, function (self, val2) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'val2': var val2 = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000408 */ 		return __eq__ (self.values_tuple, val2.values_tuple);
/* 000408 */ 	});},
/* 000410 */ 	get incremented () {return __get__ (this, function (self, subnum_level) {
/* 000410 */ 		if (typeof subnum_level == 'undefined' || (subnum_level != null && subnum_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000410 */ 			var subnum_level = null;
/* 000410 */ 		};
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'subnum_level': var subnum_level = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000412 */ 		if (__t__ (subnum_level === null)) {
/* 000413 */ 			var subnum_level = __sub__ (__call__ (len, null, self.values_tuple), 1);
/* 000413 */ 		}
/* 000415 */ 		var new_values_list = __call__ (list, null, self.values_tuple);
/* 000416 */ 		__setitem__ (new_values_list, subnum_level, __call__ (__iadd__, null, __getitem__ (new_values_list, subnum_level), 1));
/* 000417 */ 		for (var j = __add__ (subnum_level, 1); j < __call__ (len, null, new_values_list); j++) {
/* 000418 */ 			__setitem__ (new_values_list, j, 0);
/* 000418 */ 		}
/* 000420 */ 		return __call__ (ValueWithSubNums, null, __getitem__ (new_values_list, 0), __getslice__ (new_values_list, 1, null, 1));
/* 000420 */ 	});},
/* 000422 */ 	get extended_by_one () {return __get__ (this, function (self, subnum_value) {
/* 000422 */ 		if (typeof subnum_value == 'undefined' || (subnum_value != null && subnum_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000422 */ 			var subnum_value = 0;
/* 000422 */ 		};
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'subnum_value': var subnum_value = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000423 */ 		var new_value = __call__ (ValueWithSubNums, null, self);
/* 000424 */ 		new_value.values_tuple = __call__ (tuple, null, __add__ (__call__ (list, null, new_value.values_tuple), [subnum_value]));
/* 000425 */ 		return new_value;
/* 000425 */ 	});},
/* 000427 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		return __add__ (__add__ ('V{', __call__ (repr, null, self.values_tuple)), '}');
/* 000428 */ 	});}
/* 000428 */ });
/* 000438 */ var _lexicographical_array_cmp = (a, b) => { for (let i = 0; i < a.length && i < b.length; ++i) { if (a[i] < b[i]) { return -1; } if (a[i] > b[i]) { return +1; } } return a.length - b.length; }
/* 000439 */ var _sorted_values = (vals) => { let va = [...vals]; va.sort( (a, b) => _lexicographical_array_cmp(a.values_tuple, b.values_tuple) ); return va; };
/* 000443 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000443 */ 	__module__: __name__,
/* 000454 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link, repeat_numprefix_in_range, counter_formatter_id, subnums_format_nums) {
/* 000454 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var prefix_display = null;
/* 000454 */ 		};
/* 000454 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var delimiters = null;
/* 000454 */ 		};
/* 000454 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var join_spec = null;
/* 000454 */ 		};
/* 000454 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var name_in_link = true;
/* 000454 */ 		};
/* 000454 */ 		if (typeof repeat_numprefix_in_range == 'undefined' || (repeat_numprefix_in_range != null && repeat_numprefix_in_range.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var repeat_numprefix_in_range = false;
/* 000454 */ 		};
/* 000454 */ 		if (typeof counter_formatter_id == 'undefined' || (counter_formatter_id != null && counter_formatter_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var counter_formatter_id = null;
/* 000454 */ 		};
/* 000454 */ 		if (typeof subnums_format_nums == 'undefined' || (subnums_format_nums != null && subnums_format_nums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var subnums_format_nums = tuple ([]);
/* 000454 */ 		};
/* 000454 */ 		if (arguments.length) {
/* 000454 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 					switch (__attrib0__) {
/* 000454 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'repeat_numprefix_in_range': var repeat_numprefix_in_range = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'subnums_format_nums': var subnums_format_nums = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		else {
/* 000454 */ 		}
/* 000466 */ 		self.format_num = format_num;
/* 000467 */ 		self._format_num_fn = __call__ (parse_counter_format_num, null, format_num);
/* 000468 */ 		if (__t__ (prefix_display === null)) {
/* 000469 */ 			var prefix_display = dict ({'singular': '', 'plural': ''});
/* 000469 */ 		}
/* 000473 */ 		else if (__t__ (__call__ (isinstance, null, prefix_display, str))) {
/* 000474 */ 			var prefix_display = dict ({'singular': prefix_display, 'plural': prefix_display});
/* 000474 */ 		}
/* 000478 */ 		self.prefix_display = prefix_display;
/* 000479 */ 		self.delimiters = (__t__ (delimiters !== null) ? delimiters : tuple (['', '']));
/* 000480 */ 		var jd = __call__ (dict, null, __getitem__ (_default_formatter_join_spec, 'default'));
/* 000481 */ 		if (__t__ (join_spec !== null)) {
/* 000482 */ 			if (__t__ (__call__ (isinstance, null, join_spec, str))) {
/* 000483 */ 				(function () {
/* 000483 */ 					var __accu0__ = jd;
/* 000483 */ 					return __call__ (__accu0__.py_update, __accu0__, __getitem__ (_default_formatter_join_spec, join_spec));
/* 000483 */ 				}) ();
/* 000483 */ 			}
/* 000484 */ 			else {
/* 000485 */ 				(function () {
/* 000485 */ 					var __accu0__ = jd;
/* 000485 */ 					return __call__ (__accu0__.py_update, __accu0__, join_spec);
/* 000485 */ 				}) ();
/* 000485 */ 			}
/* 000485 */ 		}
/* 000486 */ 		self.join_spec = (function () {
/* 000486 */ 			var __accu0__ = [];
/* 000488 */ 			var __iterable0__ = (function () {
/* 000488 */ 				var __accu1__ = jd;
/* 000488 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000488 */ 			}) ();
/* 000488 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000488 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000488 */ 				var k = __left0__ [0];
/* 000488 */ 				var v = __left0__ [1];
/* 000488 */ 				(function () {
/* 000488 */ 					var __accu1__ = __accu0__;
/* 000487 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (_replace_dollar_template, null, v, jd)]);
/* 000487 */ 				}) ();
/* 000487 */ 			}
/* 000487 */ 			return dict (__accu0__);
/* 000487 */ 		}) ();
/* 000490 */ 		self.name_in_link = name_in_link;
/* 000491 */ 		self.repeat_numprefix_in_range = repeat_numprefix_in_range;
/* 000492 */ 		self.subnums_format_nums = subnums_format_nums;
/* 000493 */ 		self._subnums_format_nums_fns = (function () {
/* 000493 */ 			var __accu0__ = [];
/* 000493 */ 			var __iterable0__ = self.subnums_format_nums;
/* 000493 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000495 */ 				var format_subnum = __getitem__ (__iterable0__, __index0__);
/* 000495 */ 				(function () {
/* 000495 */ 					var __accu1__ = __accu0__;
/* 000494 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (parse_counter_format_subnum, null, format_subnum));
/* 000494 */ 				}) ();
/* 000494 */ 			}
/* 000494 */ 			return __accu0__;
/* 000494 */ 		}) ();
/* 000498 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000504 */ 		self._fields = tuple (['format_num', 'prefix_display', 'delimiters', 'join_spec', 'name_in_link', 'repeat_numprefix_in_range', 'counter_formatter_id', 'subnums_format_nums']);
/* 000504 */ 	});},
/* 000513 */ 	_flmtyping_is: 'CounterFormatter',
/* 000516 */ 	get format_number () {return __get__ (this, function (self, n, numprefix, subnums) {
/* 000516 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000516 */ 			var numprefix = null;
/* 000516 */ 		};
/* 000516 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000516 */ 			var subnums = null;
/* 000516 */ 		};
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		var s = '';
/* 000518 */ 		var skipprefix = true;
/* 000519 */ 		if (__t__ (n !== null)) {
/* 000520 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000520 */ 				var __accu0__ = self;
/* 000520 */ 				return __call__ (__accu0__._format_num_fn, __accu0__, n, __kwargtrans__ ({numprefix: numprefix}));
/* 000520 */ 			}) ());
/* 000521 */ 			var skipprefix = false;
/* 000521 */ 		}
/* 000522 */ 		if (__t__ (__t__ (subnums) && __call__ (len, null, subnums))) {
/* 000523 */ 			var subnums_format_nums = (function () {
/* 000523 */ 				var __accu0__ = self;
/* 000523 */ 				return __call__ (__accu0__.get_subnums_format_nums, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000523 */ 			}) ();
/* 000526 */ 			for (var j = 0; j < __call__ (len, null, subnums); j++) {
/* 000527 */ 				if (__t__ (__getitem__ (subnums, j))) {
/* 000528 */ 					var sfmtted = __call__ (__getitem__ (subnums_format_nums, j), null, __getitem__ (subnums, j));
/* 000529 */ 					if (__t__ (!__t__ ((skipprefix)))) {
/* 000530 */ 						var s = __call__ (__iadd__, null, s, __getitem__ (sfmtted, 'prefix'));
/* 000530 */ 					}
/* 000531 */ 					var s = __call__ (__iadd__, null, s, __getitem__ (sfmtted, 'formatted'));
/* 000532 */ 					var skipprefix = false;
/* 000532 */ 				}
/* 000532 */ 			}
/* 000532 */ 		}
/* 000533 */ 		return s;
/* 000533 */ 	});},
/* 000535 */ 	get get_subnums_format_nums () {return __get__ (this, function (self, n) {
/* 000535 */ 		var numprefix = null;
/* 000535 */ 		var subnums = null;
/* 000535 */ 		if (arguments.length) {
/* 000535 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000535 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000535 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000535 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000535 */ 					switch (__attrib0__) {
/* 000535 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 					}
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 		}
/* 000535 */ 		else {
/* 000535 */ 		}
/* 000536 */ 		return self._subnums_format_nums_fns;
/* 000536 */ 	});},
/* 000538 */ 	get asdict () {return __get__ (this, function (self) {
/* 000538 */ 		if (arguments.length) {
/* 000538 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000538 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000538 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000538 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000538 */ 					switch (__attrib0__) {
/* 000538 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 					}
/* 000538 */ 				}
/* 000538 */ 			}
/* 000538 */ 		}
/* 000538 */ 		else {
/* 000538 */ 		}
/* 000539 */ 		return (function () {
/* 000539 */ 			var __accu0__ = [];
/* 000539 */ 			var __iterable0__ = self._fields;
/* 000539 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000539 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000539 */ 				(function () {
/* 000539 */ 					var __accu1__ = __accu0__;
/* 000539 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000539 */ 				}) ();
/* 000539 */ 			}
/* 000539 */ 			return dict (__accu0__);
/* 000539 */ 		}) ();
/* 000539 */ 	});},
/* 000541 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000541 */ 		if (arguments.length) {
/* 000541 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000541 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000541 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000541 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000541 */ 					switch (__attrib0__) {
/* 000541 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 					}
/* 000541 */ 				}
/* 000541 */ 			}
/* 000541 */ 		}
/* 000541 */ 		else {
/* 000541 */ 		}
/* 000544 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000544 */ 			var __accu0__ = ', ';
/* 000544 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000544 */ 				var __accu1__ = [];
/* 000544 */ 				var __iterable0__ = self._fields;
/* 000544 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000544 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000544 */ 					(function () {
/* 000544 */ 						var __accu2__ = __accu1__;
/* 000544 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000544 */ 					}) ();
/* 000544 */ 				}
/* 000544 */ 				return py_iter (__accu1__);
/* 000544 */ 			}) ());
/* 000544 */ 		}) ()), ')');
/* 000544 */ 	});},
/* 000548 */ 	get format_flm () {return __get__ (this, function (self, value, numprefix, subnums, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000548 */ 		if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var numprefix = null;
/* 000548 */ 		};
/* 000548 */ 		if (typeof subnums == 'undefined' || (subnums != null && subnums.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var subnums = null;
/* 000548 */ 		};
/* 000548 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var prefix_variant = null;
/* 000548 */ 		};
/* 000548 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var with_delimiters = true;
/* 000548 */ 		};
/* 000548 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var with_prefix = true;
/* 000548 */ 		};
/* 000548 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var wrap_format_num = null;
/* 000548 */ 		};
/* 000548 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000548 */ 			var wrap_link_fn = null;
/* 000548 */ 		};
/* 000548 */ 		if (arguments.length) {
/* 000548 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000548 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000548 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000548 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000548 */ 					switch (__attrib0__) {
/* 000548 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'subnums': var subnums = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 					}
/* 000548 */ 				}
/* 000548 */ 			}
/* 000548 */ 		}
/* 000548 */ 		else {
/* 000548 */ 		}
/* 000557 */ 		var __left0__ = (function () {
/* 000557 */ 			var __accu0__ = self;
/* 000557 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000557 */ 		}) ();
/* 000557 */ 		var prefix = __left0__ [0];
/* 000557 */ 		var pre = __left0__ [1];
/* 000557 */ 		var post = __left0__ [2];
/* 000564 */ 		if (__t__ (__call__ (isinstance, null, value, ValueWithSubNums))) {
/* 000565 */ 			if (__t__ (subnums !== null)) {
/* 000569 */ 				var __except0__ = __call__ (ValueError, null, 'format_flm(): cannot specify both ValueWithSubNums instance and subnums= argument; got format_flm({}, subnums={})'.format (__call__ (repr, null, value), __call__ (repr, null, subnums)));
/* 000569 */ 				__except0__.__cause__ = null;
/* 000569 */ 				throw __except0__;
/* 000569 */ 			}
/* 000571 */ 			var __left0__ = tuple ([(function () {
/* 000571 */ 				var __accu0__ = value;
/* 000571 */ 				return __call__ (__accu0__.get_num, __accu0__);
/* 000571 */ 			}) (), (function () {
/* 000571 */ 				var __accu0__ = value;
/* 000571 */ 				return __call__ (__accu0__.get_subnums, __accu0__);
/* 000571 */ 			}) ()]);
/* 000571 */ 			var value = __left0__ [0];
/* 000571 */ 			var subnums = __left0__ [1];
/* 000571 */ 		}
/* 000573 */ 		var s_num = (function () {
/* 000573 */ 			var __accu0__ = self;
/* 000573 */ 			return __call__ (__accu0__.format_number, __accu0__, value, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000573 */ 		}) ();
/* 000574 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000575 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000575 */ 		}
/* 000576 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000577 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000578 */ 			return __call__ (wrap_link_fn, null, __kwargtrans__ ({n: value, s: s, numprefix: numprefix, subnums: subnums}));
/* 000578 */ 		}
/* 000579 */ 		return s;
/* 000579 */ 	});},
/* 000581 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000581 */ 		if (arguments.length) {
/* 000581 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000581 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000581 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000581 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000581 */ 					switch (__attrib0__) {
/* 000581 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 					}
/* 000581 */ 				}
/* 000581 */ 			}
/* 000581 */ 		}
/* 000581 */ 		else {
/* 000581 */ 		}
/* 000583 */ 		var __left0__ = tuple (['', '', '']);
/* 000583 */ 		var prefix = __left0__ [0];
/* 000583 */ 		var pre = __left0__ [1];
/* 000583 */ 		var post = __left0__ [2];
/* 000585 */ 		if (__t__ (with_delimiters)) {
/* 000586 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000587 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000587 */ 		}
/* 000589 */ 		if (__t__ (with_prefix)) {
/* 000590 */ 			var prefixinfo = self.prefix_display;
/* 000591 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000592 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000592 */ 			}
/* 000593 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000594 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000594 */ 			}
/* 000595 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000596 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000596 */ 			}
/* 000597 */ 			else {
/* 000598 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000598 */ 			}
/* 000598 */ 		}
/* 000600 */ 		return tuple ([prefix, pre, post]);
/* 000600 */ 	});},
/* 000603 */ 	get format_many_flm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000603 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var prefix_variant = null;
/* 000603 */ 		};
/* 000603 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var with_delimiters = true;
/* 000603 */ 		};
/* 000603 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var with_prefix = true;
/* 000603 */ 		};
/* 000603 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var wrap_link_fn = null;
/* 000603 */ 		};
/* 000603 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var wrap_format_num = null;
/* 000603 */ 		};
/* 000603 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var get_raw_s_items = false;
/* 000603 */ 		};
/* 000603 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000603 */ 			var s_items_join = null;
/* 000603 */ 		};
/* 000603 */ 		if (arguments.length) {
/* 000603 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000603 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000603 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000603 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000603 */ 					switch (__attrib0__) {
/* 000603 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 					}
/* 000603 */ 				}
/* 000603 */ 			}
/* 000603 */ 		}
/* 000603 */ 		else {
/* 000603 */ 		}
/* 000619 */ 		var join_spec = self.join_spec;
/* 000620 */ 		var name_in_link = self.name_in_link;
/* 000622 */ 		if (__t__ (s_items_join === null)) {
/* 000623 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000623 */ 				if (arguments.length) {
/* 000623 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 							switch (__attrib0__) {
/* 000623 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 							}
/* 000623 */ 						}
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 				else {
/* 000623 */ 				}
/* 000623 */ 				return __add__ (a, b);
/* 000623 */ 			});
/* 000623 */ 		}
/* 000627 */ 		var py_values = __call__ (list, null, py_values);
/* 000629 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000630 */ 			return __getitem__ (join_spec, 'empty');
/* 000630 */ 		}
/* 000633 */ 		if (__t__ (__t__ (!__t__ ((__call__ (isinstance, null, __getitem__ (py_values, 0), tuple ([int, ValueWithSubNums]))))) && __t__ (__eq__ (__call__ (len, null, __getitem__ (py_values, 0)), 2)) && (__t__ (__call__ (isinstance, null, __getitem__ (__getitem__ (py_values, 0), 0), str)) || __getitem__ (__getitem__ (py_values, 0), 0) === null))) {
/* 000636 */ 			// pass;
/* 000636 */ 		}
/* 000637 */ 		else {
/* 000639 */ 			var py_values = [tuple ([null, py_values])];
/* 000639 */ 		}
/* 000647 */ 		var py_values = (function () {
/* 000647 */ 			var __accu0__ = [];
/* 000647 */ 			var __iterable0__ = py_values;
/* 000647 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000649 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000649 */ 				var valuenumprefix = __left0__ [0];
/* 000649 */ 				var valuelist = __left0__ [1];
/* 000649 */ 				(function () {
/* 000649 */ 					var __accu1__ = __accu0__;
/* 000648 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([valuenumprefix, __call__ (_sorted_values, null, (function () {
/* 000648 */ 						var __accu2__ = [];
/* 000648 */ 						var __iterable1__ = valuelist;
/* 000648 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000648 */ 							var v = __getitem__ (__iterable1__, __index1__);
/* 000648 */ 							(function () {
/* 000648 */ 								var __accu3__ = __accu2__;
/* 000648 */ 								return __call__ (__accu3__.append, __accu3__, __call__ (ValueWithSubNums, null, v));
/* 000648 */ 							}) ();
/* 000648 */ 						}
/* 000648 */ 						return __accu2__;
/* 000648 */ 					}) ())]));
/* 000648 */ 				}) ();
/* 000648 */ 			}
/* 000648 */ 			return __accu0__;
/* 000648 */ 		}) ();
/* 000654 */ 		var num_values = __call__ (sum, null, (function () {
/* 000654 */ 			var __accu0__ = [];
/* 000654 */ 			var __iterable0__ = py_values;
/* 000654 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000654 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000654 */ 				var _ = __left0__ [0];
/* 000654 */ 				var valuelist = __left0__ [1];
/* 000654 */ 				(function () {
/* 000654 */ 					var __accu1__ = __accu0__;
/* 000654 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, valuelist));
/* 000654 */ 				}) ();
/* 000654 */ 			}
/* 000654 */ 			return __accu0__;
/* 000654 */ 		}) ());
/* 000656 */ 		var only_one_value = false;
/* 000657 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000658 */ 			var only_one_value = true;
/* 000658 */ 		}
/* 000660 */ 		var list_of_ranges_with_numprefix = [];
/* 000661 */ 		var __iterable0__ = py_values;
/* 000661 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000661 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000661 */ 			var numprefix = __left0__ [0];
/* 000661 */ 			var valuelist = __left0__ [1];
/* 000662 */ 			var cur_range = null;
/* 000663 */ 			var __iterable1__ = valuelist;
/* 000663 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000663 */ 				var v = __getitem__ (__iterable1__, __index1__);
/* 000664 */ 				if (__t__ (cur_range === null)) {
/* 000665 */ 					var cur_range = tuple ([v, v]);
/* 000665 */ 					continue;
/* 000665 */ 				}
/* 000667 */ 				if (__t__ ((function () {
/* 000667 */ 					var __accu0__ = v;
/* 000667 */ 					return __call__ (__accu0__.does_immediately_succeed, __accu0__, __getitem__ (cur_range, 1));
/* 000667 */ 				}) ())) {
/* 000668 */ 					var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000668 */ 					continue;
/* 000668 */ 				}
/* 000670 */ 				(function () {
/* 000670 */ 					var __accu0__ = list_of_ranges_with_numprefix;
/* 000670 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([numprefix, cur_range]));
/* 000670 */ 				}) ();
/* 000671 */ 				var cur_range = tuple ([v, v]);
/* 000671 */ 			}
/* 000672 */ 			(function () {
/* 000672 */ 				var __accu0__ = list_of_ranges_with_numprefix;
/* 000672 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([numprefix, cur_range]));
/* 000672 */ 			}) ();
/* 000672 */ 		}
/* 000674 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 1))) {
/* 000675 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000675 */ 			var numprefix = __left0__ [0];
/* 000675 */ 			var single_range = __left0__ [1];
/* 000676 */ 			if (__t__ ((function () {
/* 000676 */ 				var __accu0__ = __getitem__ (single_range, 1);
/* 000676 */ 				return __call__ (__accu0__.does_immediately_succeed, __accu0__, __getitem__ (single_range, 0));
/* 000676 */ 			}) ())) {
/* 000679 */ 				var list_of_ranges_with_numprefix = [tuple ([numprefix, tuple ([__getitem__ (single_range, 0), __getitem__ (single_range, 0)])]), tuple ([numprefix, tuple ([__getitem__ (single_range, 1), __getitem__ (single_range, 1)])])];
/* 000679 */ 			}
/* 000679 */ 		}
/* 000684 */ 		var _format_val = function (val) {
/* 000684 */ 			var range_from = null;
/* 000684 */ 			if (arguments.length) {
/* 000684 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000684 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000684 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000684 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000684 */ 						switch (__attrib0__) {
/* 000684 */ 							case 'val': var val = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 							case 'range_from': var range_from = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 						}
/* 000684 */ 					}
/* 000684 */ 				}
/* 000684 */ 			}
/* 000684 */ 			else {
/* 000684 */ 			}
/* 000685 */ 			var n = __getitem__ (val.values_tuple, 0);
/* 000686 */ 			var subnums = __call__ (list, null, __getslice__ (val.values_tuple, 1, null, 1));
/* 000687 */ 			if (__t__ (range_from !== null)) {
/* 000688 */ 				var numprefix = null;
/* 000689 */ 				if (__t__ (__eq__ (__getitem__ (range_from.values_tuple, 0), n))) {
/* 000690 */ 					var n = null;
/* 000690 */ 				}
/* 000691 */ 				var v0subnums = __getslice__ (range_from.values_tuple, 1, null, 1);
/* 000692 */ 				for (var j = 0; j < __call__ (len, null, subnums); j++) {
/* 000693 */ 					if (__t__ (__eq__ (__getitem__ (subnums, j), __getitem__ (v0subnums, j)))) {
/* 000694 */ 						__setitem__ (subnums, j, null);
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000695 */ 			var subnums = __call__ (tuple, null, subnums);
/* 000696 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000698 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000698 */ 					var __accu0__ = self;
/* 000698 */ 					return __call__ (__accu0__.format_number, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000698 */ 				}) (), __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000698 */ 			}
/* 000703 */ 			return (function () {
/* 000703 */ 				var __accu0__ = self;
/* 000703 */ 				return __call__ (__accu0__.format_number, __accu0__, n, __kwargtrans__ ({numprefix: numprefix, subnums: subnums}));
/* 000703 */ 			}) ();
/* 000703 */ 		};
/* 000705 */ 		var _render_range_items = function (a, b, numprefix) {
/* 000705 */ 			if (arguments.length) {
/* 000705 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 						switch (__attrib0__) {
/* 000705 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						}
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 			}
/* 000705 */ 			else {
/* 000705 */ 			}
/* 000706 */ 			if (__t__ ((function () {
/* 000706 */ 				var __accu0__ = a;
/* 000706 */ 				return __call__ (__accu0__.equals, __accu0__, b);
/* 000706 */ 			}) ())) {
/* 000707 */ 				return [dict ({'s': __call__ (_format_val, null, a, __kwargtrans__ ({numprefix: numprefix})), 'n': a, 'np': numprefix})];
/* 000707 */ 			}
/* 000708 */ 			var is_pairmid = (function () {
/* 000708 */ 				var __accu0__ = b;
/* 000708 */ 				return __call__ (__accu0__.does_immediately_succeed, __accu0__, a);
/* 000708 */ 			}) ();
/* 000709 */ 			var s_a = __call__ (_format_val, null, a, __kwargtrans__ ({numprefix: numprefix}));
/* 000710 */ 			var s_b = __call__ (_format_val, null, b, __kwargtrans__ ({numprefix: numprefix, range_from: (__t__ (!__t__ ((__t__ (is_pairmid) || self.repeat_numprefix_in_range))) ? a : null)}));
/* 000715 */ 			if (__t__ (is_pairmid)) {
/* 000716 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000716 */ 			}
/* 000717 */ 			else {
/* 000718 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000718 */ 			}
/* 000719 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a, 'np': numprefix}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b, 'np': numprefix}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000719 */ 		};
/* 000727 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 1))) {
/* 000728 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000728 */ 			var numprefix = __left0__ [0];
/* 000728 */ 			var single_range = __left0__ [1];
/* 000731 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...single_range, __kwargtrans__ ({numprefix: numprefix}))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000731 */ 		}
/* 000734 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges_with_numprefix), 2))) {
/* 000735 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 0);
/* 000735 */ 			var first_numprefix = __left0__ [0];
/* 000735 */ 			var first_range = __left0__ [1];
/* 000736 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, 1);
/* 000736 */ 			var second_numprefix = __left0__ [0];
/* 000736 */ 			var second_range = __left0__ [1];
/* 000741 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...first_range, __kwargtrans__ ({numprefix: first_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...second_range, __kwargtrans__ ({numprefix: second_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000741 */ 		}
/* 000743 */ 		else {
/* 000745 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000746 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges_with_numprefix, 0, __neg__ (1), 1));
/* 000746 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000746 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000746 */ 				var rngj = __left0__ [0];
/* 000746 */ 				var rnginfo = __left0__ [1];
/* 000747 */ 				var __left0__ = rnginfo;
/* 000747 */ 				var numprefix = __left0__ [0];
/* 000747 */ 				var rng = __left0__ [1];
/* 000748 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000749 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000749 */ 				}
/* 000750 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng, __kwargtrans__ ({numprefix: numprefix})));
/* 000750 */ 			}
/* 000752 */ 			var __left0__ = __getitem__ (list_of_ranges_with_numprefix, __sub__ (__call__ (len, null, list_of_ranges_with_numprefix), 1));
/* 000752 */ 			var last_numprefix = __left0__ [0];
/* 000752 */ 			var last_range = __left0__ [1];
/* 000756 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...last_range, __kwargtrans__ ({numprefix: last_numprefix}))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000756 */ 		}
/* 000760 */ 		var __left0__ = (function () {
/* 000760 */ 			var __accu0__ = self;
/* 000760 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000760 */ 		}) ();
/* 000760 */ 		var s_prefix = __left0__ [0];
/* 000760 */ 		var s_pre = __left0__ [1];
/* 000760 */ 		var s_post = __left0__ [2];
/* 000764 */ 		var first_n = null;
/* 000765 */ 		var first_numprefix = null;
/* 000766 */ 		if (__t__ (!__t__ ((name_in_link)))) {
/* 000767 */ 			var first_n = false;
/* 000767 */ 		}
/* 000768 */ 		else {
/* 000769 */ 			var __iterable0__ = s_items;
/* 000769 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000769 */ 				var si = __getitem__ (__iterable0__, __index0__);
/* 000770 */ 				var nn = (function () {
/* 000770 */ 					var __accu0__ = si;
/* 000770 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000770 */ 				}) ();
/* 000771 */ 				if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000772 */ 					var first_n = nn;
/* 000773 */ 					var first_numprefix = __getitem__ (si, 'np');
/* 000773 */ 					break;
/* 000773 */ 				}
/* 000773 */ 			}
/* 000773 */ 		}
/* 000776 */ 		var s_pre_items = [];
/* 000777 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000778 */ 			(function () {
/* 000778 */ 				var __accu0__ = s_pre_items;
/* 000778 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n, 'np': first_numprefix}));
/* 000778 */ 			}) ();
/* 000778 */ 		}
/* 000779 */ 		(function () {
/* 000779 */ 			var __accu0__ = s_pre_items;
/* 000779 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (__t__ (name_in_link) && only_one_value) ? null : false)}));
/* 000779 */ 		}) ();
/* 000785 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000794 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000795 */ 			var s_all = [];
/* 000796 */ 			var cur_s = null;
/* 000797 */ 			var cur_n = false;
/* 000798 */ 			var cur_np = null;
/* 000799 */ 			var __iterable0__ = s_items;
/* 000799 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000799 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000800 */ 				var si = __getitem__ (s_item, 's');
/* 000801 */ 				var ni = (function () {
/* 000801 */ 					var __accu0__ = s_item;
/* 000801 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000801 */ 				}) ();
/* 000802 */ 				var np = (function () {
/* 000802 */ 					var __accu0__ = s_item;
/* 000802 */ 					return __call__ (__accu0__.py_get, __accu0__, 'np', null);
/* 000802 */ 				}) ();
/* 000803 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000804 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000804 */ 					continue;
/* 000804 */ 				}
/* 000808 */ 				if (__t__ (__t__ (cur_n !== false) && __t__ (ni !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __t__ (__eq__ (ni, cur_n)) && __call__ (_eqfornone, null, np, cur_np)))) {
/* 000810 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000811 */ 						var cur_n = ni;
/* 000812 */ 						var cur_np = np;
/* 000812 */ 					}
/* 000814 */ 					if (__t__ (cur_s === null)) {
/* 000815 */ 						var cur_s = si;
/* 000815 */ 					}
/* 000816 */ 					else {
/* 000818 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000818 */ 					}
/* 000818 */ 					continue;
/* 000818 */ 				}
/* 000821 */ 				if (__t__ (cur_s !== null)) {
/* 000822 */ 					(function () {
/* 000822 */ 						var __accu0__ = s_all;
/* 000822 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n, 'np': cur_np}));
/* 000822 */ 					}) ();
/* 000822 */ 				}
/* 000824 */ 				var cur_s = si;
/* 000825 */ 				var cur_n = ni;
/* 000826 */ 				var cur_np = np;
/* 000826 */ 			}
/* 000828 */ 			if (__t__ (cur_s !== null)) {
/* 000829 */ 				(function () {
/* 000829 */ 					var __accu0__ = s_all;
/* 000829 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n, 'np': cur_np}));
/* 000829 */ 				}) ();
/* 000829 */ 			}
/* 000831 */ 			var s_items = s_all;
/* 000831 */ 		}
/* 000835 */ 		if (__t__ (get_raw_s_items)) {
/* 000836 */ 			return s_items;
/* 000836 */ 		}
/* 000838 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000839 */ 			var _wrap_link_fn_call = function (x) {
/* 000839 */ 				if (arguments.length) {
/* 000839 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000839 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000839 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000839 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000839 */ 							switch (__attrib0__) {
/* 000839 */ 								case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 							}
/* 000839 */ 						}
/* 000839 */ 					}
/* 000839 */ 				}
/* 000839 */ 				else {
/* 000839 */ 				}
/* 000840 */ 				var n = __getitem__ (__getitem__ (x, 'n').values_tuple, 0);
/* 000841 */ 				var subnums = __getslice__ (__getitem__ (x, 'n').values_tuple, 1, null, 1);
/* 000842 */ 				return __call__ (wrap_link_fn, null, __kwargtrans__ ({n: n, s: __getitem__ (x, 's'), numprefix: __getitem__ (x, 'np'), subnums: subnums}));
/* 000842 */ 			};
/* 000843 */ 			var s = (function () {
/* 000843 */ 				var __accu0__ = '';
/* 000843 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000843 */ 					var __accu1__ = [];
/* 000843 */ 					var __iterable0__ = s_items;
/* 000843 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000847 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000847 */ 						(function () {
/* 000847 */ 							var __accu2__ = __accu1__;
/* 000844 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (_wrap_link_fn_call, null, x) : __getitem__ (x, 's')));
/* 000844 */ 						}) ();
/* 000844 */ 					}
/* 000844 */ 					return __accu1__;
/* 000844 */ 				}) ());
/* 000844 */ 			}) ();
/* 000844 */ 		}
/* 000847 */ 		else {
/* 000851 */ 			var s = (function () {
/* 000851 */ 				var __accu0__ = '';
/* 000851 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000851 */ 					var __accu1__ = [];
/* 000851 */ 					var __iterable0__ = s_items;
/* 000851 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000851 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000851 */ 						(function () {
/* 000851 */ 							var __accu2__ = __accu1__;
/* 000851 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000851 */ 						}) ();
/* 000851 */ 					}
/* 000851 */ 					return __accu1__;
/* 000851 */ 				}) ());
/* 000851 */ 			}) ();
/* 000851 */ 		}
/* 000853 */ 		return s;
/* 000853 */ 	});}
/* 000853 */ });
/* 000856 */ export var _eqfornone = function (a, b) {
/* 000856 */ 	if (arguments.length) {
/* 000856 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000856 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000856 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000856 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000856 */ 				switch (__attrib0__) {
/* 000856 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 				}
/* 000856 */ 			}
/* 000856 */ 		}
/* 000856 */ 	}
/* 000856 */ 	else {
/* 000856 */ 	}
/* 000857 */ 	return __t__ (__t__ (a === null) && b === null) || __eq__ (a, b);
/* 000857 */ };
/* 000864 */ export var _expect_int = function (v) {
/* 000864 */ 	if (arguments.length) {
/* 000864 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000864 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000864 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000864 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000864 */ 				switch (__attrib0__) {
/* 000864 */ 					case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000864 */ 				}
/* 000864 */ 			}
/* 000864 */ 		}
/* 000864 */ 	}
/* 000864 */ 	else {
/* 000864 */ 	}
/* 000865 */ 	try {
/* 000866 */ 		return __call__ (int, null, v);
/* 000866 */ 	}
/* 000866 */ 	catch (__except0__) {
/* 000866 */ 		if (isinstance (__except0__, py_TypeError)) {
/* 000868 */ 			var __except1__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000868 */ 			__except1__.__cause__ = null;
/* 000868 */ 			throw __except1__;
/* 000868 */ 		}
/* 000868 */ 		else {
/* 000868 */ 			throw __except0__;
/* 000868 */ 		}
/* 000868 */ 	}
/* 000868 */ };
/* 000006 */ 
//# sourceMappingURL=flm.counter.map