/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:40
/* 000009 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'unicodedata';
/* 000004 */ export var normalize = function (form, unistr) {
/* 000004 */ 	if (arguments.length) {
/* 000004 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000004 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000004 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000004 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000004 */ 				switch (__attrib0__) {
/* 000004 */ 					case 'form': var form = __allkwargs0__ [__attrib0__]; break;
/* 000004 */ 					case 'unistr': var unistr = __allkwargs0__ [__attrib0__]; break;
/* 000004 */ 				}
/* 000004 */ 			}
/* 000004 */ 		}
/* 000004 */ 	}
/* 000004 */ 	else {
/* 000004 */ 	}
/* 000009 */ 	return (function () {
/* 000009 */ 		var __accu0__ = String.prototype.normalize;
/* 000009 */ 		return __call__ (__accu0__.call, __accu0__, unistr, form);
/* 000009 */ 	}) ();
/* 000009 */ };
/* 000009 */ 
//# sourceMappingURL=unicodedata.map