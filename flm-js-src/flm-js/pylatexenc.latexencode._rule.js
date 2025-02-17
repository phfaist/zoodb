/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 14:59:37
/* 000199 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexencode._rule';
/* 000041 */ export var RULE_DICT = 0;
/* 000051 */ export var RULE_REGEX = 1;
/* 000062 */ export var RULE_CALLABLE = 2;
/* 000073 */ export var UnicodeToLatexConversionRule =  __class__ ('UnicodeToLatexConversionRule', [object], {
/* 000073 */ 	__module__: __name__,
/* 000189 */ 	get __init__ () {return __get__ (this, function (self, rule_type, rule, replacement_latex_protection) {
/* 000189 */ 		if (typeof rule == 'undefined' || (rule != null && rule.hasOwnProperty ("__kwargtrans__"))) {;
/* 000189 */ 			var rule = null;
/* 000189 */ 		};
/* 000189 */ 		if (typeof replacement_latex_protection == 'undefined' || (replacement_latex_protection != null && replacement_latex_protection.hasOwnProperty ("__kwargtrans__"))) {;
/* 000189 */ 			var replacement_latex_protection = null;
/* 000189 */ 		};
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'rule_type': var rule_type = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'replacement_latex_protection': var replacement_latex_protection = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000192 */ 		self.rule_type = rule_type;
/* 000193 */ 		self.rule = rule;
/* 000194 */ 		self.replacement_latex_protection = replacement_latex_protection;
/* 000194 */ 	});},
/* 000196 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		return (function () {
/* 000197 */ 			var __accu0__ = '{}(rule_type={!r}, rule=<{}>, replacement_latex_protection={})';
/* 000199 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.rule_type, py_typeof (self.rule).__name__, __call__ (repr, null, self.replacement_latex_protection));
/* 000199 */ 		}) ();
/* 000199 */ 	});}
/* 000199 */ });
/* 000199 */ 
//# sourceMappingURL=pylatexenc.latexencode._rule.map