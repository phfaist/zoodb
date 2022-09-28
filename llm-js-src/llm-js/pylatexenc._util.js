/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:15
/* 000036 */ var bisect = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000122 */ import {ChainMap} from './collections.js';
/* 000036 */ import * as __module_bisect__ from './bisect.js';
/* 000036 */ __nest__ (bisect, '', __module_bisect__);
/* 000036 */ export {ChainMap};
/* 000001 */ var __name__ = 'pylatexenc._util';
/* 000037 */ export var bisect_right = bisect.bisect_right;
/* 000043 */ export var LineNumbersCalculator =  __class__ ('LineNumbersCalculator', [object], {
/* 000043 */ 	__module__: __name__,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		__call__ (__call__ (__super__, null, LineNumbersCalculator, '__init__'), null, self);
/* 000050 */ 		var find_all_new_lines = function* (x) {
/* 000050 */ 			if (arguments.length) {
/* 000050 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 						switch (__attrib0__) {
/* 000050 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						}
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 			else {
/* 000050 */ 			}
/* 000050 */ 			yield 0;
/* 000053 */ 			var k = 0;
/* 000054 */ 			while (__t__ (__lt__ (k, __call__ (len, null, x)))) {
/* 000055 */ 				var k = (function () {
/* 000055 */ 					var __accu0__ = x;
/* 000055 */ 					return __call__ (__accu0__.find, __accu0__, '\n', k);
/* 000055 */ 				}) ();
/* 000056 */ 				if (__t__ (__eq__ (k, __neg__ (1)))) {
/* 000057 */ 					return ;
/* 000057 */ 				}
/* 000058 */ 				var k = __call__ (__iadd__, null, k, 1);
/* 000058 */ 				yield k;
/* 000058 */ 			}
/* 000058 */ 			};
/* 000063 */ 		self._pos_new_lines = __call__ (list, null, __call__ (find_all_new_lines, null, s));
/* 000063 */ 	});},
/* 000066 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000066 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var as_dict = false;
/* 000066 */ 		};
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000077 */ 		if (__t__ (pos === null)) {
/* 000078 */ 			if (__t__ (as_dict)) {
/* 000079 */ 				return dict ({'lineno': null, 'colno': null});
/* 000079 */ 			}
/* 000080 */ 			return tuple ([null, null]);
/* 000080 */ 		}
/* 000085 */ 		var line_no = __sub__ (__call__ (bisect_right, null, self._pos_new_lines, pos), 1);
/* 000086 */ 		assert (__t__ (__ge__ (line_no, 0)) && __lt__ (line_no, __call__ (len, null, self._pos_new_lines)));
/* 000088 */ 		var col_no = __sub__ (pos, __getitem__ (self._pos_new_lines, line_no));
/* 000090 */ 		if (__t__ (as_dict)) {
/* 000091 */ 			return dict ({'lineno': __add__ (1, line_no), 'colno': col_no});
/* 000091 */ 		}
/* 000092 */ 		return tuple ([__add__ (1, line_no), col_no]);
/* 000092 */ 	});}
/* 000092 */ });
/* 000099 */ export var PushPropOverride =  __class__ ('PushPropOverride', [object], {
/* 000099 */ 	__module__: __name__,
/* 000100 */ 	get __init__ () {return __get__ (this, function (self, obj, propname, new_value) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'new_value': var new_value = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		__call__ (__call__ (__super__, null, PushPropOverride, '__init__'), null, self);
/* 000102 */ 		self.obj = obj;
/* 000103 */ 		self.propname = propname;
/* 000104 */ 		self.new_value = new_value;
/* 000104 */ 	});},
/* 000106 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000107 */ 		if (__t__ (self.new_value !== null)) {
/* 000108 */ 			self.initval = __call__ (getattr, null, self.obj, self.propname);
/* 000109 */ 			__call__ (setattr, null, self.obj, self.propname, self.new_value);
/* 000109 */ 		}
/* 000110 */ 		return self;
/* 000110 */ 	});},
/* 000112 */ 	get __exit__ () {return __get__ (this, function (self, py_metatype, value, traceback) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'py_metatype': var py_metatype = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000114 */ 		if (__t__ (self.new_value !== null)) {
/* 000115 */ 			__call__ (setattr, null, self.obj, self.propname, self.initval);
/* 000115 */ 		}
/* 000115 */ 	});}
/* 000115 */ });
/* 000121 */ try {
/* 000121 */ }
/* 000121 */ catch (__except0__) {
/* 000121 */ 	if (isinstance (__except0__, ImportError)) {
/* 000124 */ 		// pass;
/* 000124 */ 	}
/* 000124 */ 	else {
/* 000124 */ 		throw __except0__;
/* 000124 */ 	}
/* 000124 */ }
/* 000136 */ export var pylatexenc_deprecated_ver = (function __lambda__ () {
/* 000136 */ 	if (arguments.length) {
/* 000136 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000136 */ 	}
/* 000136 */ 	else {
/* 000136 */ 		var args = tuple ();
/* 000136 */ 	}
/* 000136 */ 	return null;
/* 000136 */ });
/* 000137 */ export var pylatexenc_deprecated_2 = (function __lambda__ () {
/* 000137 */ 	if (arguments.length) {
/* 000137 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000137 */ 	}
/* 000137 */ 	else {
/* 000137 */ 		var args = tuple ();
/* 000137 */ 	}
/* 000137 */ 	return null;
/* 000137 */ });
/* 000138 */ export var pylatexenc_deprecated_3 = (function __lambda__ () {
/* 000138 */ 	if (arguments.length) {
/* 000138 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000138 */ 	}
/* 000138 */ 	else {
/* 000138 */ 		var args = tuple ();
/* 000138 */ 	}
/* 000138 */ 	return null;
/* 000138 */ });
/* 000139 */ export var LazyDict = null;
/* 000036 */ 
//# sourceMappingURL=pylatexenc._util.map