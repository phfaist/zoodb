/* 000001 */ // Transcrypt'ed from Python, 2023-08-14 17:27:47
/* 000003 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'functools';
/* 000002 */ export var partial = function (fn) {
/* 000002 */ 	var kwargs = dict ();
/* 000002 */ 	if (arguments.length) {
/* 000002 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000002 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000002 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000002 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000002 */ 				switch (__attrib0__) {
/* 000002 */ 					case 'fn': var fn = __allkwargs0__ [__attrib0__]; break;
/* 000002 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000002 */ 				}
/* 000002 */ 			}
/* 000002 */ 			delete kwargs.__kwargtrans__;
/* 000002 */ 		}
/* 000002 */ 		var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000002 */ 	}
/* 000002 */ 	else {
/* 000002 */ 		var args = tuple ();
/* 000002 */ 	}
/* 000003 */ 	return (function __lambda__ () {
/* 000003 */ 		var newkwargs = dict ();
/* 000003 */ 		if (arguments.length) {
/* 000003 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000003 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000003 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000003 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000003 */ 					switch (__attrib0__) {
/* 000003 */ 						default: newkwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000003 */ 					}
/* 000003 */ 				}
/* 000003 */ 				delete newkwargs.__kwargtrans__;
/* 000003 */ 			}
/* 000003 */ 			var newargs = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000003 */ 		}
/* 000003 */ 		else {
/* 000003 */ 			var newargs = tuple ();
/* 000003 */ 		}
/* 000003 */ 		return __call__ (fn, null, ...args, ...newargs, __kwargtrans__ (__call__ (dict, null, kwargs, __kwargtrans__ (newkwargs))));
/* 000003 */ 	});
/* 000003 */ };
/* 000003 */ 
//# sourceMappingURL=functools.map