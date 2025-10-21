/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 20:57:03
/* 000020 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'json';
/* 000002 */ export var loads = function (s, object_hook) {
/* 000002 */ 	if (typeof object_hook == 'undefined' || (object_hook != null && object_hook.hasOwnProperty ("__kwargtrans__"))) {;
/* 000002 */ 		var object_hook = null;
/* 000002 */ 	};
/* 000002 */ 	if (arguments.length) {
/* 000002 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000002 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000002 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000002 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000002 */ 				switch (__attrib0__) {
/* 000002 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000002 */ 					case 'object_hook': var object_hook = __allkwargs0__ [__attrib0__]; break;
/* 000002 */ 				}
/* 000002 */ 			}
/* 000002 */ 		}
/* 000002 */ 	}
/* 000002 */ 	else {
/* 000002 */ 	}
/* 000003 */ 	if (__t__ (!__t__ ((object_hook)))) {
/* 000004 */ 		return (function () {
/* 000004 */ 			var __accu0__ = JSON;
/* 000004 */ 			return __call__ (__accu0__.parse, __accu0__, s);
/* 000004 */ 		}) ();
/* 000004 */ 	}
/* 000005 */ 	
/* 000005 */ 	    var wrap_object_hook = (value) => {
/* 000005 */ 	       if (value instanceof Array || value instanceof Number || value instanceof String) {
/* 000005 */ 	           return value;
/* 000005 */ 	       }
/* 000005 */ 	       return object_hook(value);
/* 000005 */ 	    };
/* 000012 */ 	return (function () {
/* 000012 */ 		var __accu0__ = JSON;
/* 000012 */ 		return __call__ (__accu0__.parse, __accu0__, s, wrap_object_hook);
/* 000012 */ 	}) ();
/* 000012 */ };
/* 000015 */ export var dumps = function (d, indent) {
/* 000015 */ 	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000015 */ 		var indent = 0;
/* 000015 */ 	};
/* 000015 */ 	if (arguments.length) {
/* 000015 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000015 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000015 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000015 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000015 */ 				switch (__attrib0__) {
/* 000015 */ 					case 'd': var d = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 					case 'indent': var indent = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 				}
/* 000015 */ 			}
/* 000015 */ 		}
/* 000015 */ 	}
/* 000015 */ 	else {
/* 000015 */ 	}
/* 000016 */ 	return (function () {
/* 000016 */ 		var __accu0__ = JSON;
/* 000016 */ 		return __call__ (__accu0__.stringify, __accu0__, d, null, indent);
/* 000016 */ 	}) ();
/* 000016 */ };
/* 000019 */ export var dump = function (d, f, indent) {
/* 000019 */ 	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
/* 000019 */ 		var indent = 0;
/* 000019 */ 	};
/* 000019 */ 	if (arguments.length) {
/* 000019 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000019 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000019 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000019 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000019 */ 				switch (__attrib0__) {
/* 000019 */ 					case 'd': var d = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 					case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 					case 'indent': var indent = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 				}
/* 000019 */ 			}
/* 000019 */ 		}
/* 000019 */ 	}
/* 000019 */ 	else {
/* 000019 */ 	}
/* 000020 */ 	(function () {
/* 000020 */ 		var __accu0__ = f;
/* 000020 */ 		return __call__ (__accu0__.write, __accu0__, __call__ (dumps, null, d, indent));
/* 000020 */ 	}) ();
/* 000020 */ };
/* 000020 */ 
//# sourceMappingURL=json.map