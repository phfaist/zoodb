/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:45
/* 000143 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._latexcontextdbbase';
/* 000038 */ export var LatexContextDbBase =  __class__ ('LatexContextDbBase', [object], {
/* 000038 */ 	__module__: __name__,
/* 000059 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000077 */ 		return null;
/* 000077 */ 	});},
/* 000079 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000099 */ 		return null;
/* 000099 */ 	});},
/* 000101 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000122 */ 		return null;
/* 000122 */ 	});},
/* 000124 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000143 */ 		return null;
/* 000143 */ 	});}
/* 000143 */ });
/* 000143 */ 
//# sourceMappingURL=pylatexenc.latexnodes._latexcontextdbbase.map