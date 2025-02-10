/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 21:22:04
/* 000049 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000109 */ import * as _uni2latexmap_xml from './pylatexenc.latexencode._uni2latexmap_xml.js';
/* 000077 */ import {uni2latex as _uni2latex} from './pylatexenc.latexencode._uni2latexmap.js';
/* 000049 */ import {RULE_CALLABLE, RULE_DICT, RULE_REGEX, UnicodeToLatexConversionRule} from './pylatexenc.latexencode._rule.js';
/* 000049 */ export {RULE_CALLABLE, _uni2latexmap_xml, UnicodeToLatexConversionRule, RULE_DICT, RULE_REGEX, _uni2latex};
/* 000001 */ var __name__ = 'pylatexenc.latexencode.get_builtin_rules';
/* 000039 */ export var _MappingProxyType = dict;
/* 000059 */ export var get_builtin_uni2latex_dict = function () {
/* 000059 */ 	if (arguments.length) {
/* 000059 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 	}
/* 000059 */ 	else {
/* 000059 */ 	}
/* 000078 */ 	return __call__ (_MappingProxyType, null, _uni2latex);
/* 000078 */ };
/* 000081 */ export var get_builtin_conversion_rules = function (builtin_name) {
/* 000081 */ 	if (arguments.length) {
/* 000081 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 				switch (__attrib0__) {
/* 000081 */ 					case 'builtin_name': var builtin_name = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 	}
/* 000081 */ 	else {
/* 000081 */ 	}
/* 000104 */ 	if (__t__ (__eq__ (builtin_name, 'defaults'))) {
/* 000106 */ 		return [__call__ (UnicodeToLatexConversionRule, null, __kwargtrans__ ({rule_type: RULE_DICT, rule: __call__ (get_builtin_uni2latex_dict, null)}))];
/* 000106 */ 	}
/* 000108 */ 	if (__t__ (__eq__ (builtin_name, 'unicode-xml'))) {
/* 000111 */ 		return [__call__ (UnicodeToLatexConversionRule, null, __kwargtrans__ ({rule_type: RULE_DICT, rule: _uni2latexmap_xml.uni2latex}))];
/* 000111 */ 	}
/* 000114 */ 	var __except0__ = __call__ (ValueError, null, (function () {
/* 000114 */ 		var __accu0__ = 'Unknown builtin rule set: {}';
/* 000114 */ 		return __call__ (__accu0__.format, __accu0__, builtin_name);
/* 000114 */ 	}) ());
/* 000114 */ 	__except0__.__cause__ = null;
/* 000114 */ 	throw __except0__;
/* 000114 */ };
/* 000049 */ 
//# sourceMappingURL=pylatexenc.latexencode.get_builtin_rules.map