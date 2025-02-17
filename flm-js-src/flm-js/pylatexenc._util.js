/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 12:22:07
/* 000036 */ var bisect = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000135 */ import {ChainMap} from './collections.js';
/* 000036 */ import * as __module_bisect__ from './bisect.js';
/* 000036 */ __nest__ (bisect, '', __module_bisect__);
/* 000036 */ export {ChainMap};
/* 000001 */ var __name__ = 'pylatexenc._util';
/* 000037 */ export var bisect_right = bisect.bisect_right;
/* 000045 */ export var LineNumbersCalculator =  __class__ ('LineNumbersCalculator', [object], {
/* 000045 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self, s, line_number_offset, first_line_column_offset, column_offset) {
/* 000049 */ 		if (typeof line_number_offset == 'undefined' || (line_number_offset != null && line_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000049 */ 			var line_number_offset = 1;
/* 000049 */ 		};
/* 000049 */ 		if (typeof first_line_column_offset == 'undefined' || (first_line_column_offset != null && first_line_column_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000049 */ 			var first_line_column_offset = 0;
/* 000049 */ 		};
/* 000049 */ 		if (typeof column_offset == 'undefined' || (column_offset != null && column_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000049 */ 			var column_offset = 0;
/* 000049 */ 		};
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'line_number_offset': var line_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'first_line_column_offset': var first_line_column_offset = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'column_offset': var column_offset = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000051 */ 		__call__ (__call__ (__super__, null, LineNumbersCalculator, '__init__'), null, self);
/* 000053 */ 		self.line_number_offset = line_number_offset;
/* 000054 */ 		self.first_line_column_offset = first_line_column_offset;
/* 000055 */ 		self.column_offset = column_offset;
/* 000057 */ 		var find_all_new_lines = function* (x) {
/* 000057 */ 			if (arguments.length) {
/* 000057 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 						switch (__attrib0__) {
/* 000057 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						}
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 			else {
/* 000057 */ 			}
/* 000057 */ 			yield 0;
/* 000060 */ 			var k = 0;
/* 000061 */ 			while (__t__ (__lt__ (k, __call__ (len, null, x)))) {
/* 000062 */ 				var k = (function () {
/* 000062 */ 					var __accu0__ = x;
/* 000062 */ 					return __call__ (__accu0__.find, __accu0__, '\n', k);
/* 000062 */ 				}) ();
/* 000063 */ 				if (__t__ (__eq__ (k, __neg__ (1)))) {
/* 000064 */ 					return ;
/* 000064 */ 				}
/* 000065 */ 				var k = __call__ (__iadd__, null, k, 1);
/* 000065 */ 				yield k;
/* 000065 */ 			}
/* 000065 */ 			};
/* 000070 */ 		self._pos_new_lines = __call__ (list, null, __call__ (find_all_new_lines, null, s));
/* 000070 */ 	});},
/* 000073 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000073 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var as_dict = false;
/* 000073 */ 		};
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000084 */ 		if (__t__ (pos === null)) {
/* 000085 */ 			if (__t__ (as_dict)) {
/* 000086 */ 				return dict ({'lineno': null, 'colno': null});
/* 000086 */ 			}
/* 000087 */ 			return tuple ([null, null]);
/* 000087 */ 		}
/* 000092 */ 		var line_no = __sub__ (__call__ (bisect_right, null, self._pos_new_lines, pos), 1);
/* 000093 */ 		assert (__t__ (__ge__ (line_no, 0)) && __lt__ (line_no, __call__ (len, null, self._pos_new_lines)));
/* 000095 */ 		var col_no = __sub__ (pos, __getitem__ (self._pos_new_lines, line_no));
/* 000097 */ 		if (__t__ (__eq__ (line_no, 0))) {
/* 000098 */ 			var col_no = __call__ (__iadd__, null, col_no, self.first_line_column_offset);
/* 000098 */ 		}
/* 000099 */ 		else {
/* 000100 */ 			var col_no = __call__ (__iadd__, null, col_no, self.column_offset);
/* 000100 */ 		}
/* 000101 */ 		var line_no = __call__ (__iadd__, null, line_no, self.line_number_offset);
/* 000103 */ 		if (__t__ (as_dict)) {
/* 000104 */ 			return dict ({'lineno': line_no, 'colno': col_no});
/* 000104 */ 		}
/* 000105 */ 		return tuple ([line_no, col_no]);
/* 000105 */ 	});}
/* 000105 */ });
/* 000112 */ export var PushPropOverride =  __class__ ('PushPropOverride', [object], {
/* 000112 */ 	__module__: __name__,
/* 000113 */ 	get __init__ () {return __get__ (this, function (self, obj, propname, new_value) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'new_value': var new_value = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		__call__ (__call__ (__super__, null, PushPropOverride, '__init__'), null, self);
/* 000115 */ 		self.obj = obj;
/* 000116 */ 		self.propname = propname;
/* 000117 */ 		self.new_value = new_value;
/* 000117 */ 	});},
/* 000119 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000120 */ 		if (__t__ (self.new_value !== null)) {
/* 000121 */ 			self.initval = __call__ (getattr, null, self.obj, self.propname);
/* 000122 */ 			__call__ (setattr, null, self.obj, self.propname, self.new_value);
/* 000122 */ 		}
/* 000123 */ 		return self;
/* 000123 */ 	});},
/* 000125 */ 	get __exit__ () {return __get__ (this, function (self, py_metatype, value, traceback) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'py_metatype': var py_metatype = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000127 */ 		if (__t__ (self.new_value !== null)) {
/* 000128 */ 			__call__ (setattr, null, self.obj, self.propname, self.initval);
/* 000128 */ 		}
/* 000128 */ 	});}
/* 000128 */ });
/* 000134 */ try {
/* 000134 */ }
/* 000134 */ catch (__except0__) {
/* 000134 */ 	if (isinstance (__except0__, ImportError)) {
/* 000137 */ 		// pass;
/* 000137 */ 	}
/* 000137 */ 	else {
/* 000137 */ 		throw __except0__;
/* 000137 */ 	}
/* 000137 */ }
/* 000149 */ export var pylatexenc_deprecated_ver = (function __lambda__ () {
/* 000149 */ 	if (arguments.length) {
/* 000149 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000149 */ 	}
/* 000149 */ 	else {
/* 000149 */ 		var args = tuple ();
/* 000149 */ 	}
/* 000149 */ 	return null;
/* 000149 */ });
/* 000150 */ export var pylatexenc_deprecated_2 = (function __lambda__ () {
/* 000150 */ 	if (arguments.length) {
/* 000150 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000150 */ 	}
/* 000150 */ 	else {
/* 000150 */ 		var args = tuple ();
/* 000150 */ 	}
/* 000150 */ 	return null;
/* 000150 */ });
/* 000151 */ export var pylatexenc_deprecated_3 = (function __lambda__ () {
/* 000151 */ 	if (arguments.length) {
/* 000151 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000151 */ 	}
/* 000151 */ 	else {
/* 000151 */ 		var args = tuple ();
/* 000151 */ 	}
/* 000151 */ 	return null;
/* 000151 */ });
/* 000152 */ export var LazyDict = null;
/* 000036 */ 
//# sourceMappingURL=pylatexenc._util.map