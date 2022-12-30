/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:10:11
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000001 */ var __name__ = 'llm.fmthelpers';
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
/* 000124 */ export var parse_counter_formatter = function (counter_formatter, named_counter_formatters, str_use_tag_template, tag_template_initials_counters) {
/* 000124 */ 	if (typeof named_counter_formatters == 'undefined' || (named_counter_formatters != null && named_counter_formatters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 		var named_counter_formatters = standard_counter_formatters;
/* 000124 */ 	};
/* 000124 */ 	if (typeof str_use_tag_template == 'undefined' || (str_use_tag_template != null && str_use_tag_template.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 		var str_use_tag_template = false;
/* 000124 */ 	};
/* 000124 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000124 */ 	};
/* 000124 */ 	if (arguments.length) {
/* 000124 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 				switch (__attrib0__) {
/* 000124 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					case 'named_counter_formatters': var named_counter_formatters = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					case 'str_use_tag_template': var str_use_tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 	}
/* 000124 */ 	else {
/* 000124 */ 	}
/* 000130 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000131 */ 		return counter_formatter;
/* 000131 */ 	}
/* 000132 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000133 */ 		if (__t__ (__in__ (counter_formatter, named_counter_formatters))) {
/* 000134 */ 			return __getitem__ (named_counter_formatters, counter_formatter);
/* 000134 */ 		}
/* 000135 */ 		if (__t__ (str_use_tag_template)) {
/* 000136 */ 			return __call__ (_parse_counter_formatter_from_tag_template, null, counter_formatter, tag_template_initials_counters);
/* 000136 */ 		}
/* 000136 */ 	}
/* 000140 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000141 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000142 */ 			var tmpl = __getitem__ (counter_formatter, 'template');
/* 000144 */ 			var pat = (function () {
/* 000144 */ 				var __accu0__ = '|';
/* 000144 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000144 */ 					var __accu1__ = [];
/* 000144 */ 					var __iterable0__ = (function () {
/* 000144 */ 						var __accu2__ = named_counter_formatters;
/* 000144 */ 						return __call__ (__accu2__.py_keys, __accu2__);
/* 000144 */ 					}) ();
/* 000144 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000144 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000144 */ 						(function () {
/* 000144 */ 							var __accu2__ = __accu1__;
/* 000144 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000144 */ 								var __accu3__ = re;
/* 000144 */ 								return __call__ (__accu3__.escape, __accu3__, k);
/* 000144 */ 							}) ());
/* 000144 */ 						}) ();
/* 000144 */ 					}
/* 000144 */ 					return py_iter (__accu1__);
/* 000144 */ 				}) ());
/* 000144 */ 			}) ();
/* 000145 */ 			var _rx_counter = (function () {
/* 000145 */ 				var __accu0__ = re;
/* 000145 */ 				return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('\\$\\{(', pat), ')\\}'));
/* 000145 */ 			}) ();
/* 000146 */ 			return (function __lambda__ (n) {
/* 000146 */ 				if (arguments.length) {
/* 000146 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 							switch (__attrib0__) {
/* 000146 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 							}
/* 000146 */ 						}
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 				else {
/* 000146 */ 				}
/* 000147 */ 				return (function () {
/* 000147 */ 					var __accu0__ = _rx_counter;
/* 000147 */ 					return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000147 */ 						if (arguments.length) {
/* 000147 */ 							var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 								var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 								for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 									switch (__attrib0__) {
/* 000147 */ 										case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 									}
/* 000147 */ 								}
/* 000147 */ 							}
/* 000147 */ 						}
/* 000147 */ 						else {
/* 000147 */ 						}
/* 000148 */ 						return __call__ (__getitem__ (named_counter_formatters, (function () {
/* 000148 */ 							var __accu1__ = m;
/* 000148 */ 							return __call__ (__accu1__.group, __accu1__, 1);
/* 000148 */ 						}) ()), null, n);
/* 000148 */ 					}), tmpl);
/* 000148 */ 				}) ();
/* 000148 */ 			});
/* 000148 */ 		}
/* 000148 */ 	}
/* 000152 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (__call__ (repr, null, counter_formatter)));
/* 000152 */ 	__except0__.__cause__ = null;
/* 000152 */ 	throw __except0__;
/* 000152 */ };
/* 000154 */ export var _parse_counter_formatter_from_tag_template = function (tag_template, tag_template_initials_counters) {
/* 000154 */ 	if (typeof tag_template_initials_counters == 'undefined' || (tag_template_initials_counters != null && tag_template_initials_counters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000154 */ 		var tag_template_initials_counters = _standard_tag_template_initials_formatters;
/* 000154 */ 	};
/* 000154 */ 	if (arguments.length) {
/* 000154 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 				switch (__attrib0__) {
/* 000154 */ 					case 'tag_template': var tag_template = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					case 'tag_template_initials_counters': var tag_template_initials_counters = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 	}
/* 000154 */ 	else {
/* 000154 */ 	}
/* 000158 */ 	var rx = (function () {
/* 000158 */ 		var __accu0__ = re;
/* 000158 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('[', (function () {
/* 000158 */ 			var __accu1__ = '';
/* 000158 */ 			return __call__ (__accu1__.join, __accu1__, (function () {
/* 000158 */ 				var __accu2__ = tag_template_initials_counters;
/* 000158 */ 				return __call__ (__accu2__.py_keys, __accu2__);
/* 000158 */ 			}) ());
/* 000158 */ 		}) ()), ']'));
/* 000158 */ 	}) ();
/* 000159 */ 	var m = (function () {
/* 000159 */ 		var __accu0__ = rx;
/* 000159 */ 		return __call__ (__accu0__.search, __accu0__, tag_template);
/* 000159 */ 	}) ();
/* 000160 */ 	if (__t__ (m !== null)) {
/* 000162 */ 		var left = __getslice__ (tag_template, 0, (function () {
/* 000162 */ 			var __accu0__ = m;
/* 000162 */ 			return __call__ (__accu0__.start, __accu0__);
/* 000162 */ 		}) (), 1);
/* 000163 */ 		var right = __getslice__ (tag_template, (function () {
/* 000163 */ 			var __accu0__ = m;
/* 000163 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000163 */ 		}) (), null, 1);
/* 000164 */ 		var counter_formatter = __getitem__ (tag_template_initials_counters, (function () {
/* 000164 */ 			var __accu0__ = m;
/* 000164 */ 			return __call__ (__accu0__.group, __accu0__);
/* 000164 */ 		}) ());
/* 000165 */ 		return (function __lambda__ (n) {
/* 000165 */ 			if (arguments.length) {
/* 000165 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 						switch (__attrib0__) {
/* 000165 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						}
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 			else {
/* 000165 */ 			}
/* 000165 */ 			return __add__ (__add__ (left, __call__ (counter_formatter, null, n)), right);
/* 000165 */ 		});
/* 000165 */ 	}
/* 000168 */ 	return (function __lambda__ (n) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000168 */ 		return tag_template;
/* 000168 */ 	});
/* 000168 */ };
/* 000006 */ 
//# sourceMappingURL=llm.fmthelpers.map