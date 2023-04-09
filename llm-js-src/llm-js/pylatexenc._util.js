/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:26
/* 000036 */ var bisect = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000133 */ import {ChainMap} from './collections.js';
/* 000036 */ import * as __module_bisect__ from './bisect.js';
/* 000036 */ __nest__ (bisect, '', __module_bisect__);
/* 000036 */ export {ChainMap};
/* 000001 */ var __name__ = 'pylatexenc._util';
/* 000037 */ export var bisect_right = bisect.bisect_right;
/* 000043 */ export var LineNumbersCalculator =  __class__ ('LineNumbersCalculator', [object], {
/* 000043 */ 	__module__: __name__,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, s, line_number_offset, first_line_column_offset, column_offset) {
/* 000047 */ 		if (typeof line_number_offset == 'undefined' || (line_number_offset != null && line_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var line_number_offset = 1;
/* 000047 */ 		};
/* 000047 */ 		if (typeof first_line_column_offset == 'undefined' || (first_line_column_offset != null && first_line_column_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var first_line_column_offset = 0;
/* 000047 */ 		};
/* 000047 */ 		if (typeof column_offset == 'undefined' || (column_offset != null && column_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var column_offset = 0;
/* 000047 */ 		};
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'line_number_offset': var line_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'first_line_column_offset': var first_line_column_offset = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'column_offset': var column_offset = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000049 */ 		__call__ (__call__ (__super__, null, LineNumbersCalculator, '__init__'), null, self);
/* 000051 */ 		self.line_number_offset = line_number_offset;
/* 000052 */ 		self.first_line_column_offset = first_line_column_offset;
/* 000053 */ 		self.column_offset = column_offset;
/* 000055 */ 		var find_all_new_lines = function* (x) {
/* 000055 */ 			if (arguments.length) {
/* 000055 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 						switch (__attrib0__) {
/* 000055 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						}
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 			else {
/* 000055 */ 			}
/* 000055 */ 			yield 0;
/* 000058 */ 			var k = 0;
/* 000059 */ 			while (__t__ (__lt__ (k, __call__ (len, null, x)))) {
/* 000060 */ 				var k = (function () {
/* 000060 */ 					var __accu0__ = x;
/* 000060 */ 					return __call__ (__accu0__.find, __accu0__, '\n', k);
/* 000060 */ 				}) ();
/* 000061 */ 				if (__t__ (__eq__ (k, __neg__ (1)))) {
/* 000062 */ 					return ;
/* 000062 */ 				}
/* 000063 */ 				var k = __call__ (__iadd__, null, k, 1);
/* 000063 */ 				yield k;
/* 000063 */ 			}
/* 000063 */ 			};
/* 000068 */ 		self._pos_new_lines = __call__ (list, null, __call__ (find_all_new_lines, null, s));
/* 000068 */ 	});},
/* 000071 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000071 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var as_dict = false;
/* 000071 */ 		};
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000082 */ 		if (__t__ (pos === null)) {
/* 000083 */ 			if (__t__ (as_dict)) {
/* 000084 */ 				return dict ({'lineno': null, 'colno': null});
/* 000084 */ 			}
/* 000085 */ 			return tuple ([null, null]);
/* 000085 */ 		}
/* 000090 */ 		var line_no = __sub__ (__call__ (bisect_right, null, self._pos_new_lines, pos), 1);
/* 000091 */ 		assert (__t__ (__ge__ (line_no, 0)) && __lt__ (line_no, __call__ (len, null, self._pos_new_lines)));
/* 000093 */ 		var col_no = __sub__ (pos, __getitem__ (self._pos_new_lines, line_no));
/* 000095 */ 		if (__t__ (__eq__ (line_no, 0))) {
/* 000096 */ 			var col_no = __call__ (__iadd__, null, col_no, self.first_line_column_offset);
/* 000096 */ 		}
/* 000097 */ 		else {
/* 000098 */ 			var col_no = __call__ (__iadd__, null, col_no, self.column_offset);
/* 000098 */ 		}
/* 000099 */ 		var line_no = __call__ (__iadd__, null, line_no, self.line_number_offset);
/* 000101 */ 		if (__t__ (as_dict)) {
/* 000102 */ 			return dict ({'lineno': line_no, 'colno': col_no});
/* 000102 */ 		}
/* 000103 */ 		return tuple ([line_no, col_no]);
/* 000103 */ 	});}
/* 000103 */ });
/* 000110 */ export var PushPropOverride =  __class__ ('PushPropOverride', [object], {
/* 000110 */ 	__module__: __name__,
/* 000111 */ 	get __init__ () {return __get__ (this, function (self, obj, propname, new_value) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'new_value': var new_value = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		__call__ (__call__ (__super__, null, PushPropOverride, '__init__'), null, self);
/* 000113 */ 		self.obj = obj;
/* 000114 */ 		self.propname = propname;
/* 000115 */ 		self.new_value = new_value;
/* 000115 */ 	});},
/* 000117 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		if (__t__ (self.new_value !== null)) {
/* 000119 */ 			self.initval = __call__ (getattr, null, self.obj, self.propname);
/* 000120 */ 			__call__ (setattr, null, self.obj, self.propname, self.new_value);
/* 000120 */ 		}
/* 000121 */ 		return self;
/* 000121 */ 	});},
/* 000123 */ 	get __exit__ () {return __get__ (this, function (self, py_metatype, value, traceback) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'py_metatype': var py_metatype = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000125 */ 		if (__t__ (self.new_value !== null)) {
/* 000126 */ 			__call__ (setattr, null, self.obj, self.propname, self.initval);
/* 000126 */ 		}
/* 000126 */ 	});}
/* 000126 */ });
/* 000132 */ try {
/* 000132 */ }
/* 000132 */ catch (__except0__) {
/* 000132 */ 	if (isinstance (__except0__, ImportError)) {
/* 000135 */ 		// pass;
/* 000135 */ 	}
/* 000135 */ 	else {
/* 000135 */ 		throw __except0__;
/* 000135 */ 	}
/* 000135 */ }
/* 000147 */ export var pylatexenc_deprecated_ver = (function __lambda__ () {
/* 000147 */ 	if (arguments.length) {
/* 000147 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000147 */ 	}
/* 000147 */ 	else {
/* 000147 */ 		var args = tuple ();
/* 000147 */ 	}
/* 000147 */ 	return null;
/* 000147 */ });
/* 000148 */ export var pylatexenc_deprecated_2 = (function __lambda__ () {
/* 000148 */ 	if (arguments.length) {
/* 000148 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000148 */ 	}
/* 000148 */ 	else {
/* 000148 */ 		var args = tuple ();
/* 000148 */ 	}
/* 000148 */ 	return null;
/* 000148 */ });
/* 000149 */ export var pylatexenc_deprecated_3 = (function __lambda__ () {
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
/* 000150 */ export var LazyDict = null;
/* 000036 */ 
//# sourceMappingURL=pylatexenc._util.map