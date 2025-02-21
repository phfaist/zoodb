/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:04
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000188 */ export var _replace_dollar_template = function (x, vrs) {
/* 000188 */ 	if (arguments.length) {
/* 000188 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 				switch (__attrib0__) {
/* 000188 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 	}
/* 000188 */ 	else {
/* 000188 */ 	}
/* 000189 */ 	return (function () {
/* 000189 */ 		var __accu0__ = _rx_dollar_template;
/* 000189 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000189 */ 			if (arguments.length) {
/* 000189 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 						switch (__attrib0__) {
/* 000189 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						}
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 			else {
/* 000189 */ 			}
/* 000189 */ 			return __getitem__ (vrs, (function () {
/* 000189 */ 				var __accu1__ = m;
/* 000189 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000189 */ 			}) ());
/* 000189 */ 		}), x);
/* 000189 */ 	}) ();
/* 000189 */ };
/* 000190 */ export var _replace_dollar_template_delayed = function (x, vrs) {
/* 000190 */ 	if (arguments.length) {
/* 000190 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 				switch (__attrib0__) {
/* 000190 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					case 'vrs': var vrs = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 	}
/* 000190 */ 	else {
/* 000190 */ 	}
/* 000191 */ 	return (function __lambda__ (arg) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000192 */ 		return (function () {
/* 000192 */ 			var __accu0__ = _rx_dollar_template;
/* 000192 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000192 */ 				if (arguments.length) {
/* 000192 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 							switch (__attrib0__) {
/* 000192 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 							}
/* 000192 */ 						}
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 				else {
/* 000192 */ 				}
/* 000192 */ 				return __call__ (__getitem__ (vrs, (function () {
/* 000192 */ 					var __accu1__ = m;
/* 000192 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000192 */ 				}) ()), null, arg);
/* 000192 */ 			}), x);
/* 000192 */ 		}) ();
/* 000192 */ 	});
/* 000192 */ };
/* 000196 */ export var parse_counter_formatter = function (counter_formatter, named_counter_formatters, str_use_tag_template, tag_template_initials_counters) {
/* 000196 */ 	if (typeof named_counter_formatters == 'undefined' || (named_counter_formatters != null && named_counter_formatters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000196 */ 		var named_counter_formatters = standard_counter_formatters;
/* 000196 */ 	};
/* 000196 */ 	if (typeof str_use_tag_template == 'undefined' || (str_use_tag_template != null && str_use_tag_template.hasOwnProperty ("__kwargtrans__"))) {;
/* 000196 */ 		var str_use_tag_template = false;
/* 000196 */ 	};
/* 000196 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000196 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000196 */ 	};
/* 000196 */ 	if (arguments.length) {
/* 000196 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 				switch (__attrib0__) {
/* 000196 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'named_counter_formatters': var named_counter_formatters = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'str_use_tag_template': var str_use_tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 	}
/* 000196 */ 	else {
/* 000196 */ 	}
/* 000207 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000208 */ 		return counter_formatter;
/* 000208 */ 	}
/* 000209 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000210 */ 		if (__t__ (__in__ (counter_formatter, named_counter_formatters))) {
/* 000211 */ 			return __getitem__ (named_counter_formatters, counter_formatter);
/* 000211 */ 		}
/* 000212 */ 		if (__t__ (str_use_tag_template)) {
/* 000213 */ 			return __call__ (_parse_counter_formatter_from_tag_template, null, counter_formatter, tag_template_initials_counters);
/* 000213 */ 		}
/* 000213 */ 	}
/* 000218 */ 	var counter_formatter_template = null;
/* 000219 */ 	try {
/* 000222 */ 		var counter_formatter_template = __getitem__ (counter_formatter, 'template');
/* 000222 */ 	}
/* 000222 */ 	catch (__except0__) {
/* 000224 */ 		// pass;
/* 000224 */ 	}
/* 000225 */ 	if (__t__ (counter_formatter_template)) {
/* 000226 */ 		var tmpl = __getitem__ (counter_formatter, 'template');
/* 000228 */ 		return __call__ (_replace_dollar_template_delayed, null, tmpl, named_counter_formatters);
/* 000228 */ 	}
/* 000230 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000230 */ 	__except0__.__cause__ = null;
/* 000230 */ 	throw __except0__;
/* 000230 */ };
/* 000232 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000232 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000232 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000232 */ 	};
/* 000232 */ 	if (arguments.length) {
/* 000232 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 				switch (__attrib0__) {
/* 000232 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 	}
/* 000232 */ 	else {
/* 000232 */ 	}
/* 000236 */ 	var rx = (function () {
/* 000236 */ 		var __accu0__ = re;
/* 000236 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000236 */ 			var __accu1__ = '';
/* 000236 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000236 */ 				var __accu2__ = tag_template_initials_counters;
/* 000236 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000236 */ 			}) ());
/* 000236 */ 		}) ()), ']'));
/* 000236 */ 	}) ();
/* 000237 */ 	var m = (function () {
/* 000237 */ 		var __accu0__ = rx;
/* 000237 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000237 */ 	}) ();
/* 000238 */ 	if (__t__ (m !== null)) {
/* 000240 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000240 */ 			var __accu0__ = m;
/* 000240 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000240 */ 		}) (), 1);
/* 000241 */ 		var right = __getslice__ (tag_template, (function () {
/* 000241 */ 			var __accu0__ = m;
/* 000241 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000241 */ 		}) (), null, 1);
/* 000242 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000242 */ 			var __accu0__ = m;
/* 000242 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000242 */ 		}) ());
/* 000243 */ 		return (function __lambda__ (n) {
/* 000243 */ 			if (arguments.length) {
/* 000243 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 						switch (__attrib0__) {
/* 000243 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						}
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 			else {
/* 000243 */ 			}
/* 000243 */ 			return __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right);
/* 000243 */ 		});
/* 000243 */ 	}
/* 000246 */ 	return (function __lambda__ (n) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000246 */ 		return tag_template;
/* 000246 */ 	});
/* 000246 */ };
/* 000250 */ export var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and}\xa0', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and}\xa0', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
/* 000284 */ export var parse_counter_format_num = parse_counter_formatter;
/* 000290 */ export var build_counter_formatter = function (counter_formatter, default_counter_formatter_spec) {
/* 000290 */ 	if (arguments.length) {
/* 000290 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 				switch (__attrib0__) {
/* 000290 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					case 'default_counter_formatter_spec': var default_counter_formatter_spec = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 	}
/* 000290 */ 	else {
/* 000290 */ 	}
/* 000298 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000299 */ 		return counter_formatter;
/* 000299 */ 	}
/* 000301 */ 	if (__t__ (counter_formatter === null)) {
/* 000302 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000302 */ 	}
/* 000304 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000306 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000307 */ 		var d = default_counter_formatter_spec;
/* 000308 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000309 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000310 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000310 */ 	}
/* 000312 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000313 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000314 */ 			var d = default_counter_formatter_spec;
/* 000315 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000316 */ 			__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000317 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000317 */ 		}
/* 000318 */ 		var d = default_counter_formatter_spec;
/* 000319 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000320 */ 		(function () {
/* 000320 */ 			var __accu0__ = d;
/* 000320 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000320 */ 		}) ();
/* 000321 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000321 */ 	}
/* 000323 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000323 */ 	__except0__.__cause__ = null;
/* 000323 */ 	throw __except0__;
/* 000323 */ };
/* 000326 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000326 */ 	__module__: __name__,
/* 000337 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link, counter_formatter_id) {
/* 000337 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var prefix_display = null;
/* 000337 */ 		};
/* 000337 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var delimiters = null;
/* 000337 */ 		};
/* 000337 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var join_spec = null;
/* 000337 */ 		};
/* 000337 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var name_in_link = true;
/* 000337 */ 		};
/* 000337 */ 		if (typeof counter_formatter_id == 'undefined' || (counter_formatter_id != null && counter_formatter_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var counter_formatter_id = null;
/* 000337 */ 		};
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000341 */ 		self._format_num_fn = __call__ (parse_counter_formatter, null, format_num);
/* 000342 */ 		if (__t__ (prefix_display === null)) {
/* 000343 */ 			var prefix_display = dict ({'singular': '', 'plural': ''});
/* 000343 */ 		}
/* 000347 */ 		else if (__t__ (__call__ (isinstance, null, prefix_display, str))) {
/* 000348 */ 			var prefix_display = dict ({'singular': prefix_display, 'plural': prefix_display});
/* 000348 */ 		}
/* 000352 */ 		self.prefix_display = prefix_display;
/* 000353 */ 		self.delimiters = (__t__ (delimiters !== null) ? delimiters : tuple (['', '']));
/* 000354 */ 		var jd = __call__ (dict, null, __getitem__ (_default_formatter_join_spec, 'default'));
/* 000355 */ 		if (__t__ (join_spec !== null)) {
/* 000356 */ 			if (__t__ (__call__ (isinstance, null, join_spec, str))) {
/* 000357 */ 				(function () {
/* 000357 */ 					var __accu0__ = jd;
/* 000357 */ 					return __call__ (__accu0__.py_update, __accu0__, __getitem__ (_default_formatter_join_spec, join_spec));
/* 000357 */ 				}) ();
/* 000357 */ 			}
/* 000358 */ 			else {
/* 000359 */ 				(function () {
/* 000359 */ 					var __accu0__ = jd;
/* 000359 */ 					return __call__ (__accu0__.py_update, __accu0__, join_spec);
/* 000359 */ 				}) ();
/* 000359 */ 			}
/* 000359 */ 		}
/* 000360 */ 		self.join_spec = (function () {
/* 000360 */ 			var __accu0__ = [];
/* 000362 */ 			var __iterable0__ = (function () {
/* 000362 */ 				var __accu1__ = jd;
/* 000362 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000362 */ 			}) ();
/* 000362 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000362 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000362 */ 				var k = __left0__ [0];
/* 000362 */ 				var v = __left0__ [1];
/* 000362 */ 				(function () {
/* 000362 */ 					var __accu1__ = __accu0__;
/* 000361 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (_replace_dollar_template, null, v, jd)]);
/* 000361 */ 				}) ();
/* 000361 */ 			}
/* 000361 */ 			return dict (__accu0__);
/* 000361 */ 		}) ();
/* 000364 */ 		self.name_in_link = name_in_link;
/* 000366 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000369 */ 		self._fields = tuple (['format_num', 'prefix_display', 'delimiters', 'join_spec', 'name_in_link', 'counter_formatter_id']);
/* 000369 */ 	});},
/* 000375 */ 	get format_num () {return __get__ (this, function (self, n) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000376 */ 		return (function () {
/* 000376 */ 			var __accu0__ = self;
/* 000376 */ 			return __call__ (__accu0__._format_num_fn, __accu0__, n);
/* 000376 */ 		}) ();
/* 000376 */ 	});},
/* 000378 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000379 */ 		return (function () {
/* 000379 */ 			var __accu0__ = [];
/* 000379 */ 			var __iterable0__ = self._fields;
/* 000379 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000379 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000379 */ 				(function () {
/* 000379 */ 					var __accu1__ = __accu0__;
/* 000379 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000379 */ 				}) ();
/* 000379 */ 			}
/* 000379 */ 			return dict (__accu0__);
/* 000379 */ 		}) ();
/* 000379 */ 	});},
/* 000381 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000384 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000384 */ 			var __accu0__ = ', ';
/* 000384 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000384 */ 				var __accu1__ = [];
/* 000384 */ 				var __iterable0__ = self._fields;
/* 000384 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000384 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000384 */ 					(function () {
/* 000384 */ 						var __accu2__ = __accu1__;
/* 000384 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000384 */ 					}) ();
/* 000384 */ 				}
/* 000384 */ 				return py_iter (__accu1__);
/* 000384 */ 			}) ());
/* 000384 */ 		}) ()), ')');
/* 000384 */ 	});},
/* 000388 */ 	get format_flm () {return __get__ (this, function (self, value, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000388 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var prefix_variant = null;
/* 000388 */ 		};
/* 000388 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var with_delimiters = true;
/* 000388 */ 		};
/* 000388 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var with_prefix = true;
/* 000388 */ 		};
/* 000388 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var wrap_format_num = null;
/* 000388 */ 		};
/* 000388 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var wrap_link_fn = null;
/* 000388 */ 		};
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000390 */ 		var __left0__ = (function () {
/* 000390 */ 			var __accu0__ = self;
/* 000390 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000390 */ 		}) ();
/* 000390 */ 		var prefix = __left0__ [0];
/* 000390 */ 		var pre = __left0__ [1];
/* 000390 */ 		var post = __left0__ [2];
/* 000396 */ 		var s_num = (function () {
/* 000396 */ 			var __accu0__ = self;
/* 000396 */ 			return __call__ (__accu0__.format_num, __accu0__, value);
/* 000396 */ 		}) ();
/* 000397 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000398 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000398 */ 		}
/* 000399 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000400 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000401 */ 			return __call__ (wrap_link_fn, null, value, s);
/* 000401 */ 		}
/* 000402 */ 		return s;
/* 000402 */ 	});},
/* 000404 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000406 */ 		var __left0__ = tuple (['', '', '']);
/* 000406 */ 		var prefix = __left0__ [0];
/* 000406 */ 		var pre = __left0__ [1];
/* 000406 */ 		var post = __left0__ [2];
/* 000408 */ 		if (__t__ (with_delimiters)) {
/* 000409 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000410 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000410 */ 		}
/* 000412 */ 		if (__t__ (with_prefix)) {
/* 000413 */ 			var prefixinfo = self.prefix_display;
/* 000414 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000415 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000415 */ 			}
/* 000416 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000417 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000417 */ 			}
/* 000418 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000419 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000419 */ 			}
/* 000420 */ 			else {
/* 000421 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000421 */ 			}
/* 000421 */ 		}
/* 000423 */ 		return tuple ([prefix, pre, post]);
/* 000423 */ 	});},
/* 000426 */ 	get format_many_flm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000426 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var prefix_variant = null;
/* 000426 */ 		};
/* 000426 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var with_delimiters = true;
/* 000426 */ 		};
/* 000426 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var with_prefix = true;
/* 000426 */ 		};
/* 000426 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var wrap_link_fn = null;
/* 000426 */ 		};
/* 000426 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var wrap_format_num = null;
/* 000426 */ 		};
/* 000426 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var get_raw_s_items = false;
/* 000426 */ 		};
/* 000426 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var s_items_join = null;
/* 000426 */ 		};
/* 000426 */ 		if (arguments.length) {
/* 000426 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000426 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000426 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000426 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000426 */ 					switch (__attrib0__) {
/* 000426 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 					}
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		else {
/* 000426 */ 		}
/* 000430 */ 		var join_spec = self.join_spec;
/* 000431 */ 		var name_in_link = self.name_in_link;
/* 000433 */ 		if (__t__ (s_items_join === null)) {
/* 000434 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000434 */ 				if (arguments.length) {
/* 000434 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 							switch (__attrib0__) {
/* 000434 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 							}
/* 000434 */ 						}
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 				else {
/* 000434 */ 				}
/* 000434 */ 				return __add__ (a, b);
/* 000434 */ 			});
/* 000434 */ 		}
/* 000436 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000437 */ 			return __getitem__ (join_spec, 'empty');
/* 000437 */ 		}
/* 000439 */ 		var py_values = (function () {
/* 000439 */ 			var __accu0__ = [];
/* 000439 */ 			var __iterable0__ = py_values;
/* 000439 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000439 */ 				var v = __getitem__ (__iterable0__, __index0__);
/* 000439 */ 				(function () {
/* 000439 */ 					var __accu1__ = __accu0__;
/* 000439 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_expect_int, null, v));
/* 000439 */ 				}) ();
/* 000439 */ 			}
/* 000439 */ 			return __accu0__;
/* 000439 */ 		}) ();
/* 000444 */ 		var py_values = __call__ (sorted, null, py_values, __kwargtrans__ ({key: int}));
/* 000446 */ 		var num_values = __call__ (len, null, py_values);
/* 000448 */ 		var only_one_value = false;
/* 000449 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000450 */ 			var only_one_value = true;
/* 000450 */ 		}
/* 000452 */ 		var list_of_ranges = [];
/* 000453 */ 		var cur_range = null;
/* 000454 */ 		var __iterable0__ = py_values;
/* 000454 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000454 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000455 */ 			if (__t__ (!__t__ ((cur_range)))) {
/* 000456 */ 				var cur_range = tuple ([v, v]);
/* 000456 */ 				continue;
/* 000456 */ 			}
/* 000458 */ 			if (__t__ (__eq__ (v, __add__ (__getitem__ (cur_range, 1), 1)))) {
/* 000459 */ 				var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000459 */ 				continue;
/* 000459 */ 			}
/* 000461 */ 			(function () {
/* 000461 */ 				var __accu0__ = list_of_ranges;
/* 000461 */ 				return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000461 */ 			}) ();
/* 000462 */ 			var cur_range = tuple ([v, v]);
/* 000462 */ 		}
/* 000464 */ 		(function () {
/* 000464 */ 			var __accu0__ = list_of_ranges;
/* 000464 */ 			return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000464 */ 		}) ();
/* 000465 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000466 */ 			if (__t__ (__eq__ (__add__ (__getitem__ (__getitem__ (list_of_ranges, 0), 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)))) {
/* 000469 */ 				var list_of_ranges = [tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 0), __getitem__ (__getitem__ (list_of_ranges, 0), 0)]), tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)])];
/* 000469 */ 			}
/* 000469 */ 		}
/* 000472 */ 		var _format_num = function (n) {
/* 000472 */ 			if (arguments.length) {
/* 000472 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000472 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000472 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000472 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000472 */ 						switch (__attrib0__) {
/* 000472 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000472 */ 						}
/* 000472 */ 					}
/* 000472 */ 				}
/* 000472 */ 			}
/* 000472 */ 			else {
/* 000472 */ 			}
/* 000473 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000474 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000474 */ 					var __accu0__ = self;
/* 000474 */ 					return __call__ (__accu0__.format_num, __accu0__, n);
/* 000474 */ 				}) ());
/* 000474 */ 			}
/* 000475 */ 			return (function () {
/* 000475 */ 				var __accu0__ = self;
/* 000475 */ 				return __call__ (__accu0__.format_num, __accu0__, n);
/* 000475 */ 			}) ();
/* 000475 */ 		};
/* 000477 */ 		var _render_range_items = function (a, b) {
/* 000477 */ 			if (arguments.length) {
/* 000477 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000477 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000477 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000477 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000477 */ 						switch (__attrib0__) {
/* 000477 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						}
/* 000477 */ 					}
/* 000477 */ 				}
/* 000477 */ 			}
/* 000477 */ 			else {
/* 000477 */ 			}
/* 000478 */ 			if (__t__ (__eq__ (a, b))) {
/* 000479 */ 				return [dict ({'s': __call__ (_format_num, null, a), 'n': a})];
/* 000479 */ 			}
/* 000480 */ 			var s_a = __call__ (_format_num, null, a);
/* 000481 */ 			var s_b = __call__ (_format_num, null, b);
/* 000482 */ 			if (__t__ (__eq__ (b, __add__ (a, 1)))) {
/* 000483 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000483 */ 			}
/* 000484 */ 			else {
/* 000485 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000485 */ 			}
/* 000486 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000486 */ 		};
/* 000494 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000497 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000497 */ 		}
/* 000500 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 2))) {
/* 000505 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 1))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000505 */ 		}
/* 000507 */ 		else {
/* 000509 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000510 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges, 0, __neg__ (1), 1));
/* 000510 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000510 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000510 */ 				var rngj = __left0__ [0];
/* 000510 */ 				var rng = __left0__ [1];
/* 000511 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000512 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000512 */ 				}
/* 000513 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng));
/* 000513 */ 			}
/* 000516 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, __neg__ (1)))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000516 */ 		}
/* 000520 */ 		var __left0__ = (function () {
/* 000520 */ 			var __accu0__ = self;
/* 000520 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000520 */ 		}) ();
/* 000520 */ 		var s_prefix = __left0__ [0];
/* 000520 */ 		var s_pre = __left0__ [1];
/* 000520 */ 		var s_post = __left0__ [2];
/* 000524 */ 		var first_n = null;
/* 000525 */ 		if (__t__ (!__t__ ((name_in_link)))) {
/* 000526 */ 			var first_n = false;
/* 000526 */ 		}
/* 000527 */ 		else {
/* 000528 */ 			var __iterable0__ = s_items;
/* 000528 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000528 */ 				var si = __getitem__ (__iterable0__, __index0__);
/* 000529 */ 				var nn = (function () {
/* 000529 */ 					var __accu0__ = si;
/* 000529 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000529 */ 				}) ();
/* 000530 */ 				if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000531 */ 					var first_n = nn;
/* 000531 */ 					break;
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000534 */ 		var s_pre_items = [];
/* 000535 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000536 */ 			(function () {
/* 000536 */ 				var __accu0__ = s_pre_items;
/* 000536 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n}));
/* 000536 */ 			}) ();
/* 000536 */ 		}
/* 000537 */ 		(function () {
/* 000537 */ 			var __accu0__ = s_pre_items;
/* 000537 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (__t__ (name_in_link) && only_one_value) ? null : false)}));
/* 000537 */ 		}) ();
/* 000543 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000552 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000553 */ 			var s_all = [];
/* 000554 */ 			var cur_s = null;
/* 000555 */ 			var cur_n = false;
/* 000556 */ 			var __iterable0__ = s_items;
/* 000556 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000556 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000557 */ 				var si = __getitem__ (s_item, 's');
/* 000558 */ 				var ni = (function () {
/* 000558 */ 					var __accu0__ = s_item;
/* 000558 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000558 */ 				}) ();
/* 000559 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000560 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000560 */ 					continue;
/* 000560 */ 				}
/* 000562 */ 				if (__t__ (__t__ (cur_n !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __eq__ (ni, cur_n)))) {
/* 000563 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000564 */ 						var cur_n = ni;
/* 000564 */ 					}
/* 000566 */ 					if (__t__ (cur_s === null)) {
/* 000567 */ 						var cur_s = si;
/* 000567 */ 					}
/* 000568 */ 					else {
/* 000570 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000570 */ 					}
/* 000570 */ 					continue;
/* 000570 */ 				}
/* 000573 */ 				if (__t__ (cur_s !== null)) {
/* 000574 */ 					(function () {
/* 000574 */ 						var __accu0__ = s_all;
/* 000574 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000574 */ 					}) ();
/* 000574 */ 				}
/* 000576 */ 				var cur_s = si;
/* 000577 */ 				var cur_n = ni;
/* 000577 */ 			}
/* 000579 */ 			if (__t__ (cur_s !== null)) {
/* 000580 */ 				(function () {
/* 000580 */ 					var __accu0__ = s_all;
/* 000580 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000580 */ 				}) ();
/* 000580 */ 			}
/* 000582 */ 			var s_items = s_all;
/* 000582 */ 		}
/* 000586 */ 		if (__t__ (get_raw_s_items)) {
/* 000587 */ 			return s_items;
/* 000587 */ 		}
/* 000589 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000590 */ 			var s = (function () {
/* 000590 */ 				var __accu0__ = '';
/* 000590 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000590 */ 					var __accu1__ = [];
/* 000590 */ 					var __iterable0__ = s_items;
/* 000590 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000594 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000594 */ 						(function () {
/* 000594 */ 							var __accu2__ = __accu1__;
/* 000591 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (wrap_link_fn, null, __getitem__ (x, 'n'), __getitem__ (x, 's')) : __getitem__ (x, 's')));
/* 000591 */ 						}) ();
/* 000591 */ 					}
/* 000591 */ 					return __accu1__;
/* 000591 */ 				}) ());
/* 000591 */ 			}) ();
/* 000591 */ 		}
/* 000594 */ 		else {
/* 000598 */ 			var s = (function () {
/* 000598 */ 				var __accu0__ = '';
/* 000598 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000598 */ 					var __accu1__ = [];
/* 000598 */ 					var __iterable0__ = s_items;
/* 000598 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000598 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000598 */ 						(function () {
/* 000598 */ 							var __accu2__ = __accu1__;
/* 000598 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000598 */ 						}) ();
/* 000598 */ 					}
/* 000598 */ 					return __accu1__;
/* 000598 */ 				}) ());
/* 000598 */ 			}) ();
/* 000598 */ 		}
/* 000600 */ 		return s;
/* 000600 */ 	});}
/* 000600 */ });
/* 000604 */ export var _expect_int = function (v) {
/* 000604 */ 	if (arguments.length) {
/* 000604 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 				switch (__attrib0__) {
/* 000604 */ 					case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 	}
/* 000604 */ 	else {
/* 000604 */ 	}
/* 000605 */ 	try {
/* 000606 */ 		return __call__ (int, null, v);
/* 000606 */ 	}
/* 000606 */ 	catch (__except0__) {
/* 000606 */ 		if (isinstance (__except0__, py_TypeError)) {
/* 000608 */ 			var __except1__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000608 */ 			__except1__.__cause__ = null;
/* 000608 */ 			throw __except1__;
/* 000608 */ 		}
/* 000608 */ 		else {
/* 000608 */ 			throw __except0__;
/* 000608 */ 		}
/* 000608 */ 	}
/* 000608 */ };
/* 000634 */ export var Counter =  __class__ ('Counter', [object], {
/* 000634 */ 	__module__: __name__,
/* 000640 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000640 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000640 */ 			var initial_value = 0;
/* 000640 */ 		};
/* 000640 */ 		if (arguments.length) {
/* 000640 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000640 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000640 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000640 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000640 */ 					switch (__attrib0__) {
/* 000640 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 					}
/* 000640 */ 				}
/* 000640 */ 			}
/* 000640 */ 		}
/* 000640 */ 		else {
/* 000640 */ 		}
/* 000641 */ 		self.formatter = counter_formatter;
/* 000642 */ 		self.value = initial_value;
/* 000642 */ 	});},
/* 000644 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000644 */ 		if (arguments.length) {
/* 000644 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000644 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000644 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000644 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000644 */ 					switch (__attrib0__) {
/* 000644 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000644 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000644 */ 					}
/* 000644 */ 				}
/* 000644 */ 			}
/* 000644 */ 		}
/* 000644 */ 		else {
/* 000644 */ 		}
/* 000645 */ 		self.value = value;
/* 000646 */ 		return self.value;
/* 000646 */ 	});},
/* 000648 */ 	get step () {return __get__ (this, function (self) {
/* 000648 */ 		if (arguments.length) {
/* 000648 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000648 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000648 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000648 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000648 */ 					switch (__attrib0__) {
/* 000648 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 					}
/* 000648 */ 				}
/* 000648 */ 			}
/* 000648 */ 		}
/* 000648 */ 		else {
/* 000648 */ 		}
/* 000649 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000650 */ 		return self.value;
/* 000650 */ 	});},
/* 000652 */ 	get reset () {return __get__ (this, function (self) {
/* 000652 */ 		if (arguments.length) {
/* 000652 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000652 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000652 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000652 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000652 */ 					switch (__attrib0__) {
/* 000652 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000652 */ 					}
/* 000652 */ 				}
/* 000652 */ 			}
/* 000652 */ 		}
/* 000652 */ 		else {
/* 000652 */ 		}
/* 000653 */ 		self.value = self.initial_value;
/* 000654 */ 		return self.value;
/* 000654 */ 	});},
/* 000656 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000656 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000656 */ 			var value = null;
/* 000656 */ 		};
/* 000656 */ 		var kwargs = dict ();
/* 000656 */ 		if (arguments.length) {
/* 000656 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000656 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000656 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000656 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000656 */ 					switch (__attrib0__) {
/* 000656 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000656 */ 					}
/* 000656 */ 				}
/* 000656 */ 				delete kwargs.__kwargtrans__;
/* 000656 */ 			}
/* 000656 */ 		}
/* 000656 */ 		else {
/* 000656 */ 		}
/* 000657 */ 		if (__t__ (value === null)) {
/* 000658 */ 			var value = self.value;
/* 000658 */ 		}
/* 000659 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000660 */ 		(function () {
/* 000660 */ 			var __accu0__ = kwargs2;
/* 000660 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000660 */ 		}) ();
/* 000661 */ 		return (function () {
/* 000661 */ 			var __accu0__ = self.formatter;
/* 000661 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000661 */ 		}) ();
/* 000661 */ 	});},
/* 000663 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000663 */ 		if (arguments.length) {
/* 000663 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000663 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000663 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000663 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000663 */ 					switch (__attrib0__) {
/* 000663 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 					}
/* 000663 */ 				}
/* 000663 */ 			}
/* 000663 */ 		}
/* 000663 */ 		else {
/* 000663 */ 		}
/* 000664 */ 		var val = (function () {
/* 000664 */ 			var __accu0__ = self;
/* 000664 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000664 */ 		}) ();
/* 000665 */ 		return tuple ([val, (function () {
/* 000665 */ 			var __accu0__ = self;
/* 000665 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000665 */ 		}) ()]);
/* 000665 */ 	});}
/* 000665 */ });
/* 000668 */ export var CounterAlias =  __class__ ('CounterAlias', [object], {
/* 000668 */ 	__module__: __name__,
/* 000675 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, alias_counter) {
/* 000675 */ 		if (arguments.length) {
/* 000675 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000675 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000675 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000675 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000675 */ 					switch (__attrib0__) {
/* 000675 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 					}
/* 000675 */ 				}
/* 000675 */ 			}
/* 000675 */ 		}
/* 000675 */ 		else {
/* 000675 */ 		}
/* 000676 */ 		self.formatter = counter_formatter;
/* 000677 */ 		self.alias_counter = alias_counter;
/* 000677 */ 	});},
/* 000680 */ 	get _get_value () {return __get__ (this, function (self) {
/* 000680 */ 		if (arguments.length) {
/* 000680 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000680 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000680 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000680 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000680 */ 					switch (__attrib0__) {
/* 000680 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 					}
/* 000680 */ 				}
/* 000680 */ 			}
/* 000680 */ 		}
/* 000680 */ 		else {
/* 000680 */ 		}
/* 000681 */ 		return self.alias_counter.value;
/* 000681 */ 	});},
/* 000683 */ 	get step () {return __get__ (this, function (self) {
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000684 */ 		return (function () {
/* 000684 */ 			var __accu0__ = self.alias_counter;
/* 000684 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000684 */ 		}) ();
/* 000684 */ 	});},
/* 000686 */ 	get reset () {return __get__ (this, function (self) {
/* 000686 */ 		if (arguments.length) {
/* 000686 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000686 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000686 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000686 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000686 */ 					switch (__attrib0__) {
/* 000686 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 					}
/* 000686 */ 				}
/* 000686 */ 			}
/* 000686 */ 		}
/* 000686 */ 		else {
/* 000686 */ 		}
/* 000687 */ 		return (function () {
/* 000687 */ 			var __accu0__ = self.alias_counter;
/* 000687 */ 			return __call__ (__accu0__.reset, __accu0__);
/* 000687 */ 		}) ();
/* 000687 */ 	});},
/* 000689 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000689 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000689 */ 			var value = null;
/* 000689 */ 		};
/* 000689 */ 		var kwargs = dict ();
/* 000689 */ 		if (arguments.length) {
/* 000689 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000689 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000689 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000689 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000689 */ 					switch (__attrib0__) {
/* 000689 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000689 */ 					}
/* 000689 */ 				}
/* 000689 */ 				delete kwargs.__kwargtrans__;
/* 000689 */ 			}
/* 000689 */ 		}
/* 000689 */ 		else {
/* 000689 */ 		}
/* 000690 */ 		if (__t__ (value === null)) {
/* 000691 */ 			var value = self.value;
/* 000691 */ 		}
/* 000692 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000693 */ 		(function () {
/* 000693 */ 			var __accu0__ = kwargs2;
/* 000693 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000693 */ 		}) ();
/* 000694 */ 		return (function () {
/* 000694 */ 			var __accu0__ = self.formatter;
/* 000694 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000694 */ 		}) ();
/* 000694 */ 	});},
/* 000696 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000696 */ 		if (arguments.length) {
/* 000696 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000696 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000696 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000696 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000696 */ 					switch (__attrib0__) {
/* 000696 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 					}
/* 000696 */ 				}
/* 000696 */ 			}
/* 000696 */ 		}
/* 000696 */ 		else {
/* 000696 */ 		}
/* 000697 */ 		var val = (function () {
/* 000697 */ 			var __accu0__ = self;
/* 000697 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000697 */ 		}) ();
/* 000698 */ 		return tuple ([val, (function () {
/* 000698 */ 			var __accu0__ = self;
/* 000698 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000698 */ 		}) ()]);
/* 000698 */ 	});}
/* 000698 */ });
/* 000698 */ Object.defineProperty (CounterAlias, 'value', property.call (CounterAlias, CounterAlias._get_value));;
/* 000006 */ 
//# sourceMappingURL=flm.counter.map