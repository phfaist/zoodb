/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 23:31:50
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
/* 000222 */ 	var counter_formatter_template = null;
/* 000223 */ 	try {
/* 000224 */ 		var counter_formatter_template = __getitem__ (counter_formatter, 'template');
/* 000224 */ 	}
/* 000224 */ 	catch (__except0__) {
/* 000224 */ 		if (isinstance (__except0__, Exception)) {
/* 000225 */ 			// pass;
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 			throw __except0__;
/* 000225 */ 		}
/* 000225 */ 	}
/* 000226 */ 	if (__t__ (counter_formatter_template)) {
/* 000227 */ 		var tmpl = __getitem__ (counter_formatter, 'template');
/* 000229 */ 		return __call__ (_replace_dollar_template_delayed, null, tmpl, named_counter_formatters);
/* 000229 */ 	}
/* 000231 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000231 */ 	__except0__.__cause__ = null;
/* 000231 */ 	throw __except0__;
/* 000231 */ };
/* 000233 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000233 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000233 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000233 */ 	};
/* 000233 */ 	if (arguments.length) {
/* 000233 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 				switch (__attrib0__) {
/* 000233 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 	}
/* 000233 */ 	else {
/* 000233 */ 	}
/* 000237 */ 	var rx = (function () {
/* 000237 */ 		var __accu0__ = re;
/* 000237 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000237 */ 			var __accu1__ = '';
/* 000237 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000237 */ 				var __accu2__ = tag_template_initials_counters;
/* 000237 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000237 */ 			}) ());
/* 000237 */ 		}) ()), ']'));
/* 000237 */ 	}) ();
/* 000238 */ 	var m = (function () {
/* 000238 */ 		var __accu0__ = rx;
/* 000238 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000238 */ 	}) ();
/* 000239 */ 	if (__t__ (m !== null)) {
/* 000241 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000241 */ 			var __accu0__ = m;
/* 000241 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000241 */ 		}) (), 1);
/* 000242 */ 		var right = __getslice__ (tag_template, (function () {
/* 000242 */ 			var __accu0__ = m;
/* 000242 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000242 */ 		}) (), null, 1);
/* 000243 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000243 */ 			var __accu0__ = m;
/* 000243 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000243 */ 		}) ());
/* 000244 */ 		return (function __lambda__ (n) {
/* 000244 */ 			if (arguments.length) {
/* 000244 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 						switch (__attrib0__) {
/* 000244 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						}
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 			else {
/* 000244 */ 			}
/* 000244 */ 			return __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right);
/* 000244 */ 		});
/* 000244 */ 	}
/* 000247 */ 	return (function __lambda__ (n) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000247 */ 		return tag_template;
/* 000247 */ 	});
/* 000247 */ };
/* 000251 */ export var _default_formatter_join_spec = dict ({'default': dict ({'one_pre': '', 'one_post': '', 'pair_pre': '', 'pair_mid': ' ${and}\xa0', 'pair_post': '', 'range_pre': '', 'range_mid': '${endash}', 'range_pairmid': '${sep}', 'range_post': '', 'list_pre': '', 'list_mid': '${sep} ', 'list_midlast': '${sep} ${and}\xa0', 'list_post': '', 'and': 'and', 'sep': ',', 'endash': '–', 'empty': '(empty)'}), 'compact': dict ({'pair_mid': ',', 'range_mid': '–', 'range_pairmid': ',', 'list_mid': ',', 'list_midlast': ',', 'empty': '(empty)'})});
/* 000285 */ export var parse_counter_format_num = parse_counter_formatter;
/* 000291 */ export var build_counter_formatter = function (counter_formatter, default_counter_formatter_spec) {
/* 000291 */ 	if (arguments.length) {
/* 000291 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 				switch (__attrib0__) {
/* 000291 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					case 'default_counter_formatter_spec': var default_counter_formatter_spec = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 	}
/* 000291 */ 	else {
/* 000291 */ 	}
/* 000299 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, CounterFormatter))) {
/* 000300 */ 		return counter_formatter;
/* 000300 */ 	}
/* 000302 */ 	if (__t__ (counter_formatter === null)) {
/* 000303 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (default_counter_formatter_spec));
/* 000303 */ 	}
/* 000305 */ 	var default_counter_formatter_spec = __call__ (dict, null, default_counter_formatter_spec);
/* 000307 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000308 */ 		var d = default_counter_formatter_spec;
/* 000309 */ 		__setitem__ (d, 'format_num', counter_formatter);
/* 000310 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000311 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000311 */ 	}
/* 000313 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000314 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000315 */ 			var d = default_counter_formatter_spec;
/* 000316 */ 			__setitem__ (d, 'format_num', counter_formatter);
/* 000317 */ 			__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000318 */ 			return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000318 */ 		}
/* 000319 */ 		var d = default_counter_formatter_spec;
/* 000320 */ 		__setitem__ (d, 'counter_formatter_id', counter_formatter_id);
/* 000321 */ 		(function () {
/* 000321 */ 			var __accu0__ = d;
/* 000321 */ 			return __call__ (__accu0__.py_update, __accu0__, counter_formatter);
/* 000321 */ 		}) ();
/* 000322 */ 		return __call__ (CounterFormatter, null, __kwargtrans__ (d));
/* 000322 */ 	}
/* 000324 */ 	var __except0__ = __call__ (ValueError, null, __add__ ('Invalid counter_formatter specification: ', __call__ (repr, null, counter_formatter)));
/* 000324 */ 	__except0__.__cause__ = null;
/* 000324 */ 	throw __except0__;
/* 000324 */ };
/* 000327 */ export var CounterFormatter =  __class__ ('CounterFormatter', [object], {
/* 000327 */ 	__module__: __name__,
/* 000338 */ 	get __init__ () {return __get__ (this, function (self, format_num, prefix_display, delimiters, join_spec, name_in_link, counter_formatter_id) {
/* 000338 */ 		if (typeof prefix_display == 'undefined' || (prefix_display != null && prefix_display.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var prefix_display = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var delimiters = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof join_spec == 'undefined' || (join_spec != null && join_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var join_spec = null;
/* 000338 */ 		};
/* 000338 */ 		if (typeof name_in_link == 'undefined' || (name_in_link != null && name_in_link.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var name_in_link = true;
/* 000338 */ 		};
/* 000338 */ 		if (typeof counter_formatter_id == 'undefined' || (counter_formatter_id != null && counter_formatter_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var counter_formatter_id = null;
/* 000338 */ 		};
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'format_num': var format_num = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'prefix_display': var prefix_display = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'join_spec': var join_spec = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'name_in_link': var name_in_link = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000341 */ 		self.format_num = __call__ (parse_counter_formatter, null, format_num);
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
/* 000368 */ 		self._fields = tuple (['format_num', 'prefix_display', 'delimiters', 'join_spec', 'name_in_link', 'counter_formatter_id']);
/* 000368 */ 	});},
/* 000371 */ 	get asdict () {return __get__ (this, function (self) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000372 */ 		return (function () {
/* 000372 */ 			var __accu0__ = [];
/* 000372 */ 			var __iterable0__ = self._fields;
/* 000372 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 				(function () {
/* 000372 */ 					var __accu1__ = __accu0__;
/* 000372 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000372 */ 				}) ();
/* 000372 */ 			}
/* 000372 */ 			return dict (__accu0__);
/* 000372 */ 		}) ();
/* 000372 */ 	});},
/* 000374 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000377 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000377 */ 			var __accu0__ = ', ';
/* 000377 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000377 */ 				var __accu1__ = [];
/* 000377 */ 				var __iterable0__ = self._fields;
/* 000377 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 					(function () {
/* 000377 */ 						var __accu2__ = __accu1__;
/* 000377 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000377 */ 					}) ();
/* 000377 */ 				}
/* 000377 */ 				return py_iter (__accu1__);
/* 000377 */ 			}) ());
/* 000377 */ 		}) ()), ')');
/* 000377 */ 	});},
/* 000381 */ 	get format_flm () {return __get__ (this, function (self, value, prefix_variant, with_delimiters, with_prefix, wrap_format_num, wrap_link_fn) {
/* 000381 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var prefix_variant = null;
/* 000381 */ 		};
/* 000381 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var with_delimiters = true;
/* 000381 */ 		};
/* 000381 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var with_prefix = true;
/* 000381 */ 		};
/* 000381 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var wrap_format_num = null;
/* 000381 */ 		};
/* 000381 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var wrap_link_fn = null;
/* 000381 */ 		};
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000383 */ 		var __left0__ = (function () {
/* 000383 */ 			var __accu0__ = self;
/* 000383 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, 1, prefix_variant);
/* 000383 */ 		}) ();
/* 000383 */ 		var prefix = __left0__ [0];
/* 000383 */ 		var pre = __left0__ [1];
/* 000383 */ 		var post = __left0__ [2];
/* 000389 */ 		var s_num = (function () {
/* 000389 */ 			var __accu0__ = self;
/* 000389 */ 			return __call__ (__accu0__.format_num, __accu0__, value);
/* 000389 */ 		}) ();
/* 000390 */ 		if (__t__ (wrap_format_num !== null)) {
/* 000391 */ 			var s_num = __call__ (wrap_format_num, null, s_num);
/* 000391 */ 		}
/* 000392 */ 		var s = __add__ (__add__ (__add__ (prefix, pre), s_num), post);
/* 000393 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000394 */ 			return __call__ (wrap_link_fn, null, value, s);
/* 000394 */ 		}
/* 000395 */ 		return s;
/* 000395 */ 	});},
/* 000397 */ 	get _get_format_pre_post () {return __get__ (this, function (self, with_delimiters, with_prefix, num_values, prefix_variant) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'num_values': var num_values = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000399 */ 		var __left0__ = tuple (['', '', '']);
/* 000399 */ 		var prefix = __left0__ [0];
/* 000399 */ 		var pre = __left0__ [1];
/* 000399 */ 		var post = __left0__ [2];
/* 000401 */ 		if (__t__ (with_delimiters)) {
/* 000402 */ 			var pre = __getitem__ (self.delimiters, 0);
/* 000403 */ 			var post = __getitem__ (self.delimiters, 1);
/* 000403 */ 		}
/* 000405 */ 		if (__t__ (with_prefix)) {
/* 000406 */ 			var prefixinfo = self.prefix_display;
/* 000407 */ 			if (__t__ (__t__ (prefix_variant !== null) && __in__ (prefix_variant, self.prefix_display))) {
/* 000408 */ 				var prefixinfo = __getitem__ (self.prefix_display, prefix_variant);
/* 000408 */ 			}
/* 000409 */ 			if (__t__ (__eq__ (num_values, 1))) {
/* 000410 */ 				var prefix = __getitem__ (prefixinfo, 'singular');
/* 000410 */ 			}
/* 000411 */ 			else if (__t__ (__in__ (num_values, prefixinfo))) {
/* 000412 */ 				var prefix = __getitem__ (prefixinfo, num_values);
/* 000412 */ 			}
/* 000413 */ 			else {
/* 000414 */ 				var prefix = __getitem__ (prefixinfo, 'plural');
/* 000414 */ 			}
/* 000414 */ 		}
/* 000416 */ 		return tuple ([prefix, pre, post]);
/* 000416 */ 	});},
/* 000419 */ 	get format_many_flm () {return __get__ (this, function (self, py_values, prefix_variant, with_delimiters, with_prefix, wrap_link_fn, wrap_format_num, get_raw_s_items, s_items_join) {
/* 000419 */ 		if (typeof prefix_variant == 'undefined' || (prefix_variant != null && prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var prefix_variant = null;
/* 000419 */ 		};
/* 000419 */ 		if (typeof with_delimiters == 'undefined' || (with_delimiters != null && with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var with_delimiters = true;
/* 000419 */ 		};
/* 000419 */ 		if (typeof with_prefix == 'undefined' || (with_prefix != null && with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var with_prefix = true;
/* 000419 */ 		};
/* 000419 */ 		if (typeof wrap_link_fn == 'undefined' || (wrap_link_fn != null && wrap_link_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var wrap_link_fn = null;
/* 000419 */ 		};
/* 000419 */ 		if (typeof wrap_format_num == 'undefined' || (wrap_format_num != null && wrap_format_num.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var wrap_format_num = null;
/* 000419 */ 		};
/* 000419 */ 		if (typeof get_raw_s_items == 'undefined' || (get_raw_s_items != null && get_raw_s_items.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var get_raw_s_items = false;
/* 000419 */ 		};
/* 000419 */ 		if (typeof s_items_join == 'undefined' || (s_items_join != null && s_items_join.hasOwnProperty ("__kwargtrans__"))) {;
/* 000419 */ 			var s_items_join = null;
/* 000419 */ 		};
/* 000419 */ 		if (arguments.length) {
/* 000419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 					switch (__attrib0__) {
/* 000419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'py_values': var py_values = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'prefix_variant': var prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'with_delimiters': var with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'with_prefix': var with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'wrap_link_fn': var wrap_link_fn = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'wrap_format_num': var wrap_format_num = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'get_raw_s_items': var get_raw_s_items = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 's_items_join': var s_items_join = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 		}
/* 000419 */ 		else {
/* 000419 */ 		}
/* 000423 */ 		var join_spec = self.join_spec;
/* 000424 */ 		var name_in_link = self.name_in_link;
/* 000426 */ 		if (__t__ (s_items_join === null)) {
/* 000427 */ 			var s_items_join = (function __lambda__ (a, b) {
/* 000427 */ 				if (arguments.length) {
/* 000427 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 							switch (__attrib0__) {
/* 000427 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 							}
/* 000427 */ 						}
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 				else {
/* 000427 */ 				}
/* 000427 */ 				return __add__ (a, b);
/* 000427 */ 			});
/* 000427 */ 		}
/* 000429 */ 		if (__t__ (__eq__ (__call__ (len, null, py_values), 0))) {
/* 000430 */ 			return __getitem__ (join_spec, 'empty');
/* 000430 */ 		}
/* 000432 */ 		var py_values = (function () {
/* 000432 */ 			var __accu0__ = [];
/* 000432 */ 			var __iterable0__ = py_values;
/* 000432 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000432 */ 				var v = __getitem__ (__iterable0__, __index0__);
/* 000432 */ 				(function () {
/* 000432 */ 					var __accu1__ = __accu0__;
/* 000432 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_expect_int, null, v));
/* 000432 */ 				}) ();
/* 000432 */ 			}
/* 000432 */ 			return __accu0__;
/* 000432 */ 		}) ();
/* 000437 */ 		var py_values = __call__ (sorted, null, py_values, __kwargtrans__ ({key: int}));
/* 000439 */ 		var num_values = __call__ (len, null, py_values);
/* 000441 */ 		var only_one_value = false;
/* 000442 */ 		if (__t__ (__eq__ (num_values, 1))) {
/* 000443 */ 			var only_one_value = true;
/* 000443 */ 		}
/* 000445 */ 		var list_of_ranges = [];
/* 000446 */ 		var cur_range = null;
/* 000447 */ 		var __iterable0__ = py_values;
/* 000447 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000447 */ 			var v = __getitem__ (__iterable0__, __index0__);
/* 000448 */ 			if (__t__ (!__t__ ((cur_range)))) {
/* 000449 */ 				var cur_range = tuple ([v, v]);
/* 000449 */ 				continue;
/* 000449 */ 			}
/* 000451 */ 			if (__t__ (__eq__ (v, __add__ (__getitem__ (cur_range, 1), 1)))) {
/* 000452 */ 				var cur_range = tuple ([__getitem__ (cur_range, 0), v]);
/* 000452 */ 				continue;
/* 000452 */ 			}
/* 000454 */ 			(function () {
/* 000454 */ 				var __accu0__ = list_of_ranges;
/* 000454 */ 				return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000454 */ 			}) ();
/* 000455 */ 			var cur_range = tuple ([v, v]);
/* 000455 */ 		}
/* 000457 */ 		(function () {
/* 000457 */ 			var __accu0__ = list_of_ranges;
/* 000457 */ 			return __call__ (__accu0__.append, __accu0__, cur_range);
/* 000457 */ 		}) ();
/* 000458 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000459 */ 			if (__t__ (__eq__ (__add__ (__getitem__ (__getitem__ (list_of_ranges, 0), 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)))) {
/* 000462 */ 				var list_of_ranges = [tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 0), __getitem__ (__getitem__ (list_of_ranges, 0), 0)]), tuple ([__getitem__ (__getitem__ (list_of_ranges, 0), 1), __getitem__ (__getitem__ (list_of_ranges, 0), 1)])];
/* 000462 */ 			}
/* 000462 */ 		}
/* 000465 */ 		var _format_num = function (n) {
/* 000465 */ 			if (arguments.length) {
/* 000465 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000465 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000465 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000465 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000465 */ 						switch (__attrib0__) {
/* 000465 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000465 */ 						}
/* 000465 */ 					}
/* 000465 */ 				}
/* 000465 */ 			}
/* 000465 */ 			else {
/* 000465 */ 			}
/* 000466 */ 			if (__t__ (wrap_format_num !== null)) {
/* 000467 */ 				return __call__ (wrap_format_num, null, (function () {
/* 000467 */ 					var __accu0__ = self;
/* 000467 */ 					return __call__ (__accu0__.format_num, __accu0__, n);
/* 000467 */ 				}) ());
/* 000467 */ 			}
/* 000468 */ 			return (function () {
/* 000468 */ 				var __accu0__ = self;
/* 000468 */ 				return __call__ (__accu0__.format_num, __accu0__, n);
/* 000468 */ 			}) ();
/* 000468 */ 		};
/* 000470 */ 		var _render_range_items = function (a, b) {
/* 000470 */ 			if (arguments.length) {
/* 000470 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 						switch (__attrib0__) {
/* 000470 */ 							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						}
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 			else {
/* 000470 */ 			}
/* 000471 */ 			if (__t__ (__eq__ (a, b))) {
/* 000472 */ 				return [dict ({'s': __call__ (_format_num, null, a), 'n': a})];
/* 000472 */ 			}
/* 000473 */ 			var s_a = __call__ (_format_num, null, a);
/* 000474 */ 			var s_b = __call__ (_format_num, null, b);
/* 000475 */ 			if (__t__ (__eq__ (b, __add__ (a, 1)))) {
/* 000476 */ 				var mid = __getitem__ (join_spec, 'range_pairmid');
/* 000476 */ 			}
/* 000477 */ 			else {
/* 000478 */ 				var mid = __getitem__ (join_spec, 'range_mid');
/* 000478 */ 			}
/* 000479 */ 			return [dict ({'s': __getitem__ (join_spec, 'range_pre'), 'n': false}), dict ({'s': s_a, 'n': a}), dict ({'s': mid, 'n': false}), dict ({'s': s_b, 'n': b}), dict ({'s': __getitem__ (join_spec, 'range_post'), 'n': false})];
/* 000479 */ 		};
/* 000487 */ 		if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 1))) {
/* 000490 */ 			var s_items = __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'one_pre'), 'n': null})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'one_post'), 'n': null})]);
/* 000490 */ 		}
/* 000493 */ 		else if (__t__ (__eq__ (__call__ (len, null, list_of_ranges), 2))) {
/* 000498 */ 			var s_items = __add__ (__add__ (__add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'pair_pre'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 0))), [dict ({'s': __getitem__ (join_spec, 'pair_mid'), 'n': false})]), __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, 1))), [dict ({'s': __getitem__ (join_spec, 'pair_post'), 'n': false})]);
/* 000498 */ 		}
/* 000500 */ 		else {
/* 000502 */ 			var s_items = [dict ({'s': __getitem__ (join_spec, 'list_pre'), 'n': false})];
/* 000503 */ 			var __iterable0__ = __call__ (enumerate, null, __getslice__ (list_of_ranges, 0, __neg__ (1), 1));
/* 000503 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000503 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000503 */ 				var rngj = __left0__ [0];
/* 000503 */ 				var rng = __left0__ [1];
/* 000504 */ 				if (__t__ (__gt__ (rngj, 0))) {
/* 000505 */ 					var s_items = __call__ (__iadd__, null, s_items, [dict ({'s': __getitem__ (join_spec, 'list_mid'), 'n': false})]);
/* 000505 */ 				}
/* 000506 */ 				var s_items = __call__ (__iadd__, null, s_items, __call__ (_render_range_items, null, ...rng));
/* 000506 */ 			}
/* 000509 */ 			var s_items = __call__ (__iadd__, null, s_items, __add__ (__add__ ([dict ({'s': __getitem__ (join_spec, 'list_midlast'), 'n': false})], __call__ (_render_range_items, null, ...__getitem__ (list_of_ranges, __neg__ (1)))), [dict ({'s': __getitem__ (join_spec, 'list_post'), 'n': false})]));
/* 000509 */ 		}
/* 000513 */ 		var __left0__ = (function () {
/* 000513 */ 			var __accu0__ = self;
/* 000513 */ 			return __call__ (__accu0__._get_format_pre_post, __accu0__, with_delimiters, with_prefix, num_values, prefix_variant);
/* 000513 */ 		}) ();
/* 000513 */ 		var s_prefix = __left0__ [0];
/* 000513 */ 		var s_pre = __left0__ [1];
/* 000513 */ 		var s_post = __left0__ [2];
/* 000517 */ 		var first_n = null;
/* 000518 */ 		if (__t__ (!__t__ ((name_in_link)))) {
/* 000519 */ 			var first_n = false;
/* 000519 */ 		}
/* 000520 */ 		else {
/* 000521 */ 			var __iterable0__ = s_items;
/* 000521 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000521 */ 				var si = __getitem__ (__iterable0__, __index0__);
/* 000522 */ 				var nn = (function () {
/* 000522 */ 					var __accu0__ = si;
/* 000522 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000522 */ 				}) ();
/* 000523 */ 				if (__t__ (__t__ (nn !== null) && nn !== false)) {
/* 000524 */ 					var first_n = nn;
/* 000524 */ 					break;
/* 000524 */ 				}
/* 000524 */ 			}
/* 000524 */ 		}
/* 000527 */ 		var s_pre_items = [];
/* 000528 */ 		if (__t__ (__call__ (len, null, s_prefix))) {
/* 000529 */ 			(function () {
/* 000529 */ 				var __accu0__ = s_pre_items;
/* 000529 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'s': s_prefix, 'n': first_n}));
/* 000529 */ 			}) ();
/* 000529 */ 		}
/* 000530 */ 		(function () {
/* 000530 */ 			var __accu0__ = s_pre_items;
/* 000530 */ 			return __call__ (__accu0__.append, __accu0__, dict ({'s': s_pre, 'n': (__t__ (__t__ (name_in_link) && only_one_value) ? null : false)}));
/* 000530 */ 		}) ();
/* 000536 */ 		var s_items = __add__ (__add__ (s_pre_items, s_items), [dict ({'s': s_post, 'n': (__t__ (only_one_value) ? null : false)})]);
/* 000545 */ 		if (__t__ (__t__ (wrap_link_fn !== null) || get_raw_s_items)) {
/* 000546 */ 			var s_all = [];
/* 000547 */ 			var cur_s = null;
/* 000548 */ 			var cur_n = false;
/* 000549 */ 			var __iterable0__ = s_items;
/* 000549 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000549 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000550 */ 				var si = __getitem__ (s_item, 's');
/* 000551 */ 				var ni = (function () {
/* 000551 */ 					var __accu0__ = s_item;
/* 000551 */ 					return __call__ (__accu0__.py_get, __accu0__, 'n', null);
/* 000551 */ 				}) ();
/* 000552 */ 				if (__t__ (__t__ (ni === false) && __t__ (cur_n === false) && cur_s !== null)) {
/* 000553 */ 					var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000553 */ 					continue;
/* 000553 */ 				}
/* 000555 */ 				if (__t__ (__t__ (cur_n !== false) && (__t__ (ni === null) || __t__ (cur_n === null) || __eq__ (ni, cur_n)))) {
/* 000556 */ 					if (__t__ (__t__ (ni !== null) && cur_n === null)) {
/* 000557 */ 						var cur_n = ni;
/* 000557 */ 					}
/* 000559 */ 					if (__t__ (cur_s === null)) {
/* 000560 */ 						var cur_s = si;
/* 000560 */ 					}
/* 000561 */ 					else {
/* 000563 */ 						var cur_s = __call__ (s_items_join, null, cur_s, si);
/* 000563 */ 					}
/* 000563 */ 					continue;
/* 000563 */ 				}
/* 000566 */ 				if (__t__ (cur_s !== null)) {
/* 000567 */ 					(function () {
/* 000567 */ 						var __accu0__ = s_all;
/* 000567 */ 						return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000567 */ 					}) ();
/* 000567 */ 				}
/* 000569 */ 				var cur_s = si;
/* 000570 */ 				var cur_n = ni;
/* 000570 */ 			}
/* 000572 */ 			if (__t__ (cur_s !== null)) {
/* 000573 */ 				(function () {
/* 000573 */ 					var __accu0__ = s_all;
/* 000573 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'s': cur_s, 'n': cur_n}));
/* 000573 */ 				}) ();
/* 000573 */ 			}
/* 000575 */ 			var s_items = s_all;
/* 000575 */ 		}
/* 000579 */ 		if (__t__ (get_raw_s_items)) {
/* 000580 */ 			return s_items;
/* 000580 */ 		}
/* 000582 */ 		if (__t__ (wrap_link_fn !== null)) {
/* 000583 */ 			var s = (function () {
/* 000583 */ 				var __accu0__ = '';
/* 000583 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000583 */ 					var __accu1__ = [];
/* 000583 */ 					var __iterable0__ = s_items;
/* 000583 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000587 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000587 */ 						(function () {
/* 000587 */ 							var __accu2__ = __accu1__;
/* 000584 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (__t__ (__getitem__ (x, 'n') !== null) && __getitem__ (x, 'n') !== false) ? __call__ (wrap_link_fn, null, __getitem__ (x, 'n'), __getitem__ (x, 's')) : __getitem__ (x, 's')));
/* 000584 */ 						}) ();
/* 000584 */ 					}
/* 000584 */ 					return __accu1__;
/* 000584 */ 				}) ());
/* 000584 */ 			}) ();
/* 000584 */ 		}
/* 000587 */ 		else {
/* 000591 */ 			var s = (function () {
/* 000591 */ 				var __accu0__ = '';
/* 000591 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000591 */ 					var __accu1__ = [];
/* 000591 */ 					var __iterable0__ = s_items;
/* 000591 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000591 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000591 */ 						(function () {
/* 000591 */ 							var __accu2__ = __accu1__;
/* 000591 */ 							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 's'));
/* 000591 */ 						}) ();
/* 000591 */ 					}
/* 000591 */ 					return __accu1__;
/* 000591 */ 				}) ());
/* 000591 */ 			}) ();
/* 000591 */ 		}
/* 000593 */ 		return s;
/* 000593 */ 	});}
/* 000593 */ });
/* 000597 */ export var _expect_int = function (v) {
/* 000597 */ 	if (arguments.length) {
/* 000597 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000597 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000597 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000597 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000597 */ 				switch (__attrib0__) {
/* 000597 */ 					case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 				}
/* 000597 */ 			}
/* 000597 */ 		}
/* 000597 */ 	}
/* 000597 */ 	else {
/* 000597 */ 	}
/* 000598 */ 	try {
/* 000599 */ 		return __call__ (int, null, v);
/* 000599 */ 	}
/* 000599 */ 	catch (__except0__) {
/* 000599 */ 		if (isinstance (__except0__, py_TypeError)) {
/* 000601 */ 			var __except1__ = __call__ (ValueError, null, __add__ ('Invalid value, expected integer: ', __call__ (repr, null, v)));
/* 000601 */ 			__except1__.__cause__ = null;
/* 000601 */ 			throw __except1__;
/* 000601 */ 		}
/* 000601 */ 		else {
/* 000601 */ 			throw __except0__;
/* 000601 */ 		}
/* 000601 */ 	}
/* 000601 */ };
/* 000607 */ export var Counter =  __class__ ('Counter', [object], {
/* 000607 */ 	__module__: __name__,
/* 000613 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000613 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000613 */ 			var initial_value = 0;
/* 000613 */ 		};
/* 000613 */ 		if (arguments.length) {
/* 000613 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000613 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000613 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000613 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000613 */ 					switch (__attrib0__) {
/* 000613 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 					}
/* 000613 */ 				}
/* 000613 */ 			}
/* 000613 */ 		}
/* 000613 */ 		else {
/* 000613 */ 		}
/* 000614 */ 		self.formatter = counter_formatter;
/* 000615 */ 		self.value = initial_value;
/* 000615 */ 	});},
/* 000617 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000617 */ 		if (arguments.length) {
/* 000617 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000617 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000617 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000617 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000617 */ 					switch (__attrib0__) {
/* 000617 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 					}
/* 000617 */ 				}
/* 000617 */ 			}
/* 000617 */ 		}
/* 000617 */ 		else {
/* 000617 */ 		}
/* 000618 */ 		self.value = value;
/* 000619 */ 		return self.value;
/* 000619 */ 	});},
/* 000621 */ 	get step () {return __get__ (this, function (self) {
/* 000621 */ 		if (arguments.length) {
/* 000621 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000621 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000621 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000621 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000621 */ 					switch (__attrib0__) {
/* 000621 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000621 */ 					}
/* 000621 */ 				}
/* 000621 */ 			}
/* 000621 */ 		}
/* 000621 */ 		else {
/* 000621 */ 		}
/* 000622 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000623 */ 		return self.value;
/* 000623 */ 	});},
/* 000625 */ 	get reset () {return __get__ (this, function (self) {
/* 000625 */ 		if (arguments.length) {
/* 000625 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000625 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000625 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000625 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000625 */ 					switch (__attrib0__) {
/* 000625 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 					}
/* 000625 */ 				}
/* 000625 */ 			}
/* 000625 */ 		}
/* 000625 */ 		else {
/* 000625 */ 		}
/* 000626 */ 		self.value = self.initial_value;
/* 000627 */ 		return self.value;
/* 000627 */ 	});},
/* 000629 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000629 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000629 */ 			var value = null;
/* 000629 */ 		};
/* 000629 */ 		var kwargs = dict ();
/* 000629 */ 		if (arguments.length) {
/* 000629 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 					switch (__attrib0__) {
/* 000629 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000629 */ 					}
/* 000629 */ 				}
/* 000629 */ 				delete kwargs.__kwargtrans__;
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 		else {
/* 000629 */ 		}
/* 000630 */ 		if (__t__ (value === null)) {
/* 000631 */ 			var value = self.value;
/* 000631 */ 		}
/* 000632 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000633 */ 		(function () {
/* 000633 */ 			var __accu0__ = kwargs2;
/* 000633 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000633 */ 		}) ();
/* 000634 */ 		return (function () {
/* 000634 */ 			var __accu0__ = self.formatter;
/* 000634 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000634 */ 		}) ();
/* 000634 */ 	});},
/* 000636 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000636 */ 		if (arguments.length) {
/* 000636 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000636 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000636 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000636 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000636 */ 					switch (__attrib0__) {
/* 000636 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 					}
/* 000636 */ 				}
/* 000636 */ 			}
/* 000636 */ 		}
/* 000636 */ 		else {
/* 000636 */ 		}
/* 000637 */ 		var val = (function () {
/* 000637 */ 			var __accu0__ = self;
/* 000637 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000637 */ 		}) ();
/* 000638 */ 		return tuple ([val, (function () {
/* 000638 */ 			var __accu0__ = self;
/* 000638 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000638 */ 		}) ()]);
/* 000638 */ 	});}
/* 000638 */ });
/* 000641 */ export var CounterAlias =  __class__ ('CounterAlias', [object], {
/* 000641 */ 	__module__: __name__,
/* 000648 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, alias_counter) {
/* 000648 */ 		if (arguments.length) {
/* 000648 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000648 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000648 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000648 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000648 */ 					switch (__attrib0__) {
/* 000648 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 					}
/* 000648 */ 				}
/* 000648 */ 			}
/* 000648 */ 		}
/* 000648 */ 		else {
/* 000648 */ 		}
/* 000649 */ 		self.formatter = counter_formatter;
/* 000650 */ 		self.alias_counter = alias_counter;
/* 000650 */ 	});},
/* 000653 */ 	get _get_value () {return __get__ (this, function (self) {
/* 000653 */ 		if (arguments.length) {
/* 000653 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000653 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000653 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000653 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000653 */ 					switch (__attrib0__) {
/* 000653 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000653 */ 					}
/* 000653 */ 				}
/* 000653 */ 			}
/* 000653 */ 		}
/* 000653 */ 		else {
/* 000653 */ 		}
/* 000654 */ 		return self.alias_counter.value;
/* 000654 */ 	});},
/* 000656 */ 	get step () {return __get__ (this, function (self) {
/* 000656 */ 		if (arguments.length) {
/* 000656 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000656 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000656 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000656 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000656 */ 					switch (__attrib0__) {
/* 000656 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 					}
/* 000656 */ 				}
/* 000656 */ 			}
/* 000656 */ 		}
/* 000656 */ 		else {
/* 000656 */ 		}
/* 000657 */ 		return (function () {
/* 000657 */ 			var __accu0__ = self.alias_counter;
/* 000657 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000657 */ 		}) ();
/* 000657 */ 	});},
/* 000659 */ 	get reset () {return __get__ (this, function (self) {
/* 000659 */ 		if (arguments.length) {
/* 000659 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000659 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000659 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000659 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000659 */ 					switch (__attrib0__) {
/* 000659 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000659 */ 					}
/* 000659 */ 				}
/* 000659 */ 			}
/* 000659 */ 		}
/* 000659 */ 		else {
/* 000659 */ 		}
/* 000660 */ 		return (function () {
/* 000660 */ 			var __accu0__ = self.alias_counter;
/* 000660 */ 			return __call__ (__accu0__.reset, __accu0__);
/* 000660 */ 		}) ();
/* 000660 */ 	});},
/* 000662 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000662 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000662 */ 			var value = null;
/* 000662 */ 		};
/* 000662 */ 		var kwargs = dict ();
/* 000662 */ 		if (arguments.length) {
/* 000662 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000662 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000662 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000662 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000662 */ 					switch (__attrib0__) {
/* 000662 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000662 */ 					}
/* 000662 */ 				}
/* 000662 */ 				delete kwargs.__kwargtrans__;
/* 000662 */ 			}
/* 000662 */ 		}
/* 000662 */ 		else {
/* 000662 */ 		}
/* 000663 */ 		if (__t__ (value === null)) {
/* 000664 */ 			var value = self.value;
/* 000664 */ 		}
/* 000665 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000666 */ 		(function () {
/* 000666 */ 			var __accu0__ = kwargs2;
/* 000666 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000666 */ 		}) ();
/* 000667 */ 		return (function () {
/* 000667 */ 			var __accu0__ = self.formatter;
/* 000667 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000667 */ 		}) ();
/* 000667 */ 	});},
/* 000669 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000670 */ 		var val = (function () {
/* 000670 */ 			var __accu0__ = self;
/* 000670 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000670 */ 		}) ();
/* 000671 */ 		return tuple ([val, (function () {
/* 000671 */ 			var __accu0__ = self;
/* 000671 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000671 */ 		}) ()]);
/* 000671 */ 	});}
/* 000671 */ });
/* 000671 */ Object.defineProperty (CounterAlias, 'value', property.call (CounterAlias, CounterAlias._get_value));;
/* 000006 */ 
//# sourceMappingURL=flm.counter.map