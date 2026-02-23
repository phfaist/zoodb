/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:25
/* 000092 */ var re = {};
/* 000092 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000092 */ import * as __module_re__ from './re.js';
/* 000092 */ __nest__ (re, '', __module_re__);
/* 000001 */ var __name__ = 'flm._autounichars';
/* 000095 */ export var convert_auto_quotes = function (text) {
/* 000095 */ 	if (arguments.length) {
/* 000095 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 				switch (__attrib0__) {
/* 000095 */ 					case 'text': var text = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 	}
/* 000095 */ 	else {
/* 000095 */ 	}
/* 000100 */ 	var punct_class = '[!"#$%\'()*+,./:;<=>?@\\[\\\\\\]^_`{|}~-]';
/* 000111 */ 	var text = (function () {
/* 000111 */ 		var __accu0__ = re;
/* 000111 */ 		return __call__ (__accu0__.sub, __accu0__, __add__ (__add__ ("^'(?=", punct_class), '\\\\B|s\\b)'), '’', text);
/* 000111 */ 	}) ();
/* 000112 */ 	var text = (function () {
/* 000112 */ 		var __accu0__ = re;
/* 000112 */ 		return __call__ (__accu0__.sub, __accu0__, __add__ (__add__ ('^"(?=', punct_class), '\\\\B)'), '”', text);
/* 000112 */ 	}) ();
/* 000116 */ 	var text = (function () {
/* 000116 */ 		var __accu0__ = re;
/* 000116 */ 		return __call__ (__accu0__.sub, __accu0__, '"\'(?=\\w)', '“‘', text);
/* 000116 */ 	}) ();
/* 000117 */ 	var text = (function () {
/* 000117 */ 		var __accu0__ = re;
/* 000117 */ 		return __call__ (__accu0__.sub, __accu0__, '\'"(?=\\w)', '‘“', text);
/* 000117 */ 	}) ();
/* 000120 */ 	var text = (function () {
/* 000120 */ 		var __accu0__ = re;
/* 000120 */ 		return __call__ (__accu0__.sub, __accu0__, "\\b'(?=\\d{2}s)", '’', text);
/* 000120 */ 	}) ();
/* 000122 */ 	var close_class = '[^ \\t\\r\\n\\[{(-]';
/* 000127 */ 	var opening_single_quotes_regex = (function () {
/* 000127 */ 		var __accu0__ = re;
/* 000127 */ 		return __call__ (__accu0__.compile, __accu0__, "(\\s|[\xa0]|--|[–—-])'(?=\\w)");
/* 000127 */ 	}) ();
/* 000131 */ 	var text = (function () {
/* 000131 */ 		var __accu0__ = opening_single_quotes_regex;
/* 000131 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000131 */ 			if (arguments.length) {
/* 000131 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 						switch (__attrib0__) {
/* 000131 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						}
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 			else {
/* 000131 */ 			}
/* 000131 */ 			return __add__ ((function () {
/* 000131 */ 				var __accu1__ = m;
/* 000131 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000131 */ 			}) (), '‘');
/* 000131 */ 		}), text);
/* 000131 */ 	}) ();
/* 000133 */ 	var closing_single_quotes_regex = (function () {
/* 000133 */ 		var __accu0__ = re;
/* 000133 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('(', close_class), ")'(?!\\s|s\\b|\\d)"));
/* 000133 */ 	}) ();
/* 000136 */ 	var text = (function () {
/* 000136 */ 		var __accu0__ = closing_single_quotes_regex;
/* 000136 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000136 */ 			if (arguments.length) {
/* 000136 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 						switch (__attrib0__) {
/* 000136 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						}
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 			else {
/* 000136 */ 			}
/* 000136 */ 			return __add__ ((function () {
/* 000136 */ 				var __accu1__ = m;
/* 000136 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000136 */ 			}) (), '’');
/* 000136 */ 		}), text);
/* 000136 */ 	}) ();
/* 000138 */ 	var closing_single_quotes_regex = (function () {
/* 000138 */ 		var __accu0__ = re;
/* 000138 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('(', close_class), ")'(\\s|s\\b)"));
/* 000138 */ 	}) ();
/* 000141 */ 	var text = (function () {
/* 000141 */ 		var __accu0__ = closing_single_quotes_regex;
/* 000141 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000141 */ 			if (arguments.length) {
/* 000141 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 						switch (__attrib0__) {
/* 000141 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						}
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 			else {
/* 000141 */ 			}
/* 000141 */ 			return __add__ (__add__ ((function () {
/* 000141 */ 				var __accu1__ = m;
/* 000141 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000141 */ 			}) (), '’'), (function () {
/* 000141 */ 				var __accu1__ = m;
/* 000141 */ 				return __call__ (__accu1__.group, __accu1__, 2);
/* 000141 */ 			}) ());
/* 000141 */ 		}), text);
/* 000141 */ 	}) ();
/* 000144 */ 	var text = (function () {
/* 000144 */ 		var __accu0__ = re;
/* 000144 */ 		return __call__ (__accu0__.sub, __accu0__, "'", '‘', text);
/* 000144 */ 	}) ();
/* 000147 */ 	var opening_double_quotes_regex = (function () {
/* 000147 */ 		var __accu0__ = re;
/* 000147 */ 		return __call__ (__accu0__.compile, __accu0__, '(\\s|[\xa0]|--|[–—-])"(?=\\w)');
/* 000147 */ 	}) ();
/* 000150 */ 	var text = (function () {
/* 000150 */ 		var __accu0__ = opening_double_quotes_regex;
/* 000150 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000150 */ 			if (arguments.length) {
/* 000150 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 						switch (__attrib0__) {
/* 000150 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						}
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 			else {
/* 000150 */ 			}
/* 000150 */ 			return __add__ ((function () {
/* 000150 */ 				var __accu1__ = m;
/* 000150 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000150 */ 			}) (), '“');
/* 000150 */ 		}), text);
/* 000150 */ 	}) ();
/* 000153 */ 	var closing_double_quotes_regex = (function () {
/* 000153 */ 		var __accu0__ = re;
/* 000153 */ 		return __call__ (__accu0__.compile, __accu0__, '"(?=\\s)');
/* 000153 */ 	}) ();
/* 000156 */ 	var text = (function () {
/* 000156 */ 		var __accu0__ = closing_double_quotes_regex;
/* 000156 */ 		return __call__ (__accu0__.sub, __accu0__, '”', text);
/* 000156 */ 	}) ();
/* 000158 */ 	var closing_double_quotes_regex = (function () {
/* 000158 */ 		var __accu0__ = re;
/* 000158 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('^"(?=', punct_class), ')'));
/* 000158 */ 	}) ();
/* 000161 */ 	var text = (function () {
/* 000161 */ 		var __accu0__ = closing_double_quotes_regex;
/* 000161 */ 		return __call__ (__accu0__.sub, __accu0__, '”', text);
/* 000161 */ 	}) ();
/* 000163 */ 	var closing_double_quotes_regex = (function () {
/* 000163 */ 		var __accu0__ = re;
/* 000163 */ 		return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('(', close_class), ')"'));
/* 000163 */ 	}) ();
/* 000166 */ 	var text = (function () {
/* 000166 */ 		var __accu0__ = closing_double_quotes_regex;
/* 000166 */ 		return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000166 */ 			if (arguments.length) {
/* 000166 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 						switch (__attrib0__) {
/* 000166 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						}
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 			else {
/* 000166 */ 			}
/* 000166 */ 			return __add__ ((function () {
/* 000166 */ 				var __accu1__ = m;
/* 000166 */ 				return __call__ (__accu1__.group, __accu1__, 1);
/* 000166 */ 			}) (), '”');
/* 000166 */ 		}), text);
/* 000166 */ 	}) ();
/* 000169 */ 	var text = (function () {
/* 000169 */ 		var __accu0__ = re;
/* 000169 */ 		return __call__ (__accu0__.sub, __accu0__, '"', '“', text);
/* 000169 */ 	}) ();
/* 000171 */ 	return text;
/* 000171 */ };
/* 000175 */ export var convert_ligature_single_quotes = function (text) {
/* 000175 */ 	if (arguments.length) {
/* 000175 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 				switch (__attrib0__) {
/* 000175 */ 					case 'text': var text = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 	}
/* 000175 */ 	else {
/* 000175 */ 	}
/* 000181 */ 	var text = (function () {
/* 000181 */ 		var __accu0__ = re;
/* 000181 */ 		return __call__ (__accu0__.sub, __accu0__, '`', '‘', text);
/* 000181 */ 	}) ();
/* 000182 */ 	var text = (function () {
/* 000182 */ 		var __accu0__ = re;
/* 000182 */ 		return __call__ (__accu0__.sub, __accu0__, "'", '’', text);
/* 000182 */ 	}) ();
/* 000183 */ 	return text;
/* 000183 */ };
/* 000186 */ export var convert_ligature_double_quotes = function (text) {
/* 000186 */ 	if (arguments.length) {
/* 000186 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 				switch (__attrib0__) {
/* 000186 */ 					case 'text': var text = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 	}
/* 000186 */ 	else {
/* 000186 */ 	}
/* 000192 */ 	var text = (function () {
/* 000192 */ 		var __accu0__ = re;
/* 000192 */ 		return __call__ (__accu0__.sub, __accu0__, '``', '“', text);
/* 000192 */ 	}) ();
/* 000193 */ 	var text = (function () {
/* 000193 */ 		var __accu0__ = re;
/* 000193 */ 		return __call__ (__accu0__.sub, __accu0__, "''", '”', text);
/* 000193 */ 	}) ();
/* 000194 */ 	return text;
/* 000194 */ };
/* 000197 */ export var convert_ligature_dashes = function (text) {
/* 000197 */ 	if (arguments.length) {
/* 000197 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 				switch (__attrib0__) {
/* 000197 */ 					case 'text': var text = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 	}
/* 000197 */ 	else {
/* 000197 */ 	}
/* 000203 */ 	var text = (function () {
/* 000203 */ 		var __accu0__ = re;
/* 000203 */ 		return __call__ (__accu0__.sub, __accu0__, '---', '—', text);
/* 000203 */ 	}) ();
/* 000204 */ 	var text = (function () {
/* 000204 */ 		var __accu0__ = re;
/* 000204 */ 		return __call__ (__accu0__.sub, __accu0__, '--', '–', text);
/* 000204 */ 	}) ();
/* 000205 */ 	return text;
/* 000205 */ };
/* 000208 */ export var convert_ligature_ellipses = function (text) {
/* 000208 */ 	if (arguments.length) {
/* 000208 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 				switch (__attrib0__) {
/* 000208 */ 					case 'text': var text = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 	}
/* 000208 */ 	else {
/* 000208 */ 	}
/* 000209 */ 	var text = (function () {
/* 000209 */ 		var __accu0__ = re;
/* 000209 */ 		return __call__ (__accu0__.sub, __accu0__, '\\.\\.\\.', '…', text);
/* 000209 */ 	}) ();
/* 000210 */ 	return text;
/* 000210 */ };
/* 000092 */ 
//# sourceMappingURL=flm._autounichars.map