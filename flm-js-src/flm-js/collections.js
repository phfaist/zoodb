/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:12
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'collections';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000011 */ export var ChainMap =  __class__ ('ChainMap', [object], {
/* 000011 */ 	__module__: __name__,
/* 000025 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000025 */ 		if (arguments.length) {
/* 000025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 					switch (__attrib0__) {
/* 000025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 					}
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 			var maps = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 			var maps = tuple ();
/* 000025 */ 		}
/* 000030 */ 		self.maps = __t__ (__call__ (list, null, maps)) || [dict ({})];
/* 000030 */ 	});},
/* 000032 */ 	get __missing__ () {return __get__ (this, function (self, key) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		var __except0__ = __call__ (KeyError, null, key);
/* 000033 */ 		__except0__.__cause__ = null;
/* 000033 */ 		throw __except0__;
/* 000033 */ 	});},
/* 000036 */ 	get __getitem__ () {return __get__ (this, function (self, key) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000038 */ 		var __iterable0__ = self.maps;
/* 000038 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000038 */ 			var mapping = __getitem__ (__iterable0__, __index0__);
/* 000040 */ 			if (__t__ (!__in__ (key, mapping))) {
/* 000040 */ 				continue;
/* 000040 */ 			}
/* 000043 */ 			return __getitem__ (mapping, key);
/* 000043 */ 		}
/* 000045 */ 		return (function () {
/* 000045 */ 			var __accu0__ = self;
/* 000045 */ 			return __call__ (__accu0__.__missing__, __accu0__, key);
/* 000045 */ 		}) ();
/* 000045 */ 	});},
/* 000047 */ 	get py_get () {return __get__ (this, function (self, key, py_default) {
/* 000047 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var py_default = null;
/* 000047 */ 		};
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		return (__t__ (__in__ (key, self)) ? __getitem__ (self, key) : py_default);
/* 000048 */ 	});},
/* 000050 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000050 */ 		if (arguments.length) {
/* 000050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 					switch (__attrib0__) {
/* 000050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000051 */ 		return __call__ (len, null, (function () {
/* 000051 */ 			var __accu0__ = __call__ (set, null);
/* 000051 */ 			return __call__ (__accu0__.union, __accu0__, ...self.maps);
/* 000051 */ 		}) ());
/* 000051 */ 	});},
/* 000053 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		var d = dict ({});
/* 000055 */ 		var __iterable0__ = __call__ (py_reversed, null, self.maps);
/* 000055 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000055 */ 			var mapping = __getitem__ (__iterable0__, __index0__);
/* 000056 */ 			(function () {
/* 000056 */ 				var __accu0__ = d;
/* 000056 */ 				return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000056 */ 					var __accu1__ = dict;
/* 000056 */ 					return __call__ (__accu1__.fromkeys, __accu1__, mapping);
/* 000056 */ 				}) ());
/* 000056 */ 			}) ();
/* 000056 */ 		}
/* 000057 */ 		return __call__ (py_iter, null, d);
/* 000057 */ 	});},
/* 000057 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000059 */ 	get __contains__ () {return __get__ (this, function (self, key) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000060 */ 		return __call__ (any, null, (function () {
/* 000060 */ 			var __accu0__ = [];
/* 000060 */ 			var __iterable0__ = self.maps;
/* 000060 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000060 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000060 */ 				(function () {
/* 000060 */ 					var __accu1__ = __accu0__;
/* 000060 */ 					return __call__ (__accu1__.append, __accu1__, __in__ (key, m));
/* 000060 */ 				}) ();
/* 000060 */ 			}
/* 000060 */ 			return py_iter (__accu0__);
/* 000060 */ 		}) ());
/* 000060 */ 	});},
/* 000062 */ 	get __bool__ () {return __get__ (this, function (self) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		return __call__ (any, null, self.maps);
/* 000063 */ 	});},
/* 000065 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		return (function () {
/* 000066 */ 			var __accu0__ = '{!r}({!r})';
/* 000066 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.maps);
/* 000066 */ 		}) ();
/* 000066 */ 	});},
/* 000070 */ 	get fromkeys () {return __getcm__ (this, function (cls, iterable) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 			var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 			var args = tuple ();
/* 000070 */ 		}
/* 000072 */ 		return __call__ (cls, null, (function () {
/* 000072 */ 			var __accu0__ = dict;
/* 000072 */ 			return __call__ (__accu0__.fromkeys, __accu0__, iterable, ...args);
/* 000072 */ 		}) ());
/* 000072 */ 	});},
/* 000074 */ 	get copy () {return __get__ (this, function (self) {
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000076 */ 		return (function () {
/* 000076 */ 			var __accu0__ = self;
/* 000076 */ 			return __call__ (__accu0__.__class__, __accu0__, (function () {
/* 000076 */ 				var __accu1__ = __getitem__ (self.maps, 0);
/* 000076 */ 				return __call__ (__accu1__.copy, __accu1__);
/* 000076 */ 			}) (), ...__getslice__ (self.maps, 1, null, 1));
/* 000076 */ 		}) ();
/* 000076 */ 	});},
/* 000078 */ 	get __copy__ () {return __get__ (this, function (self) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000080 */ 		return (function () {
/* 000080 */ 			var __accu0__ = self;
/* 000080 */ 			return __call__ (__accu0__.__class__, __accu0__, (function () {
/* 000080 */ 				var __accu1__ = __getitem__ (self.maps, 0);
/* 000080 */ 				return __call__ (__accu1__.copy, __accu1__);
/* 000080 */ 			}) (), ...__getslice__ (self.maps, 1, null, 1));
/* 000080 */ 		}) ();
/* 000080 */ 	});},
/* 000082 */ 	get new_child () {return __get__ (this, function (self, m) {
/* 000082 */ 		if (typeof m == 'undefined' || (m != null && m.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var m = null;
/* 000082 */ 		};
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000086 */ 		if (__t__ (m === null)) {
/* 000087 */ 			var m = dict ({});
/* 000087 */ 		}
/* 000088 */ 		return (function () {
/* 000088 */ 			var __accu0__ = self;
/* 000088 */ 			return __call__ (__accu0__.__class__, __accu0__, m, ...self.maps);
/* 000088 */ 		}) ();
/* 000088 */ 	});},
/* 000091 */ 	get _get_parents () {return __get__ (this, function (self) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000093 */ 		return (function () {
/* 000093 */ 			var __accu0__ = self;
/* 000093 */ 			return __call__ (__accu0__.__class__, __accu0__, ...__getslice__ (self.maps, 1, null, 1));
/* 000093 */ 		}) ();
/* 000093 */ 	});},
/* 000095 */ 	get __setitem__ () {return __get__ (this, function (self, key, value) {
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000096 */ 		__setitem__ (__getitem__ (self.maps, 0), key, value);
/* 000096 */ 	});},
/* 000098 */ 	get __delitem__ () {return __get__ (this, function (self, key) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000099 */ 		try {
/* 000099 */ 			delete __getitem__ (__getitem__ (self.maps, 0), key);
/* 000099 */ 		}
/* 000099 */ 		catch (__except0__) {
/* 000099 */ 			if (isinstance (__except0__, KeyError)) {
/* 000102 */ 				var __except1__ = __call__ (KeyError, null, 'Key not found in the first mapping: {}'.format (key));
/* 000102 */ 				__except1__.__cause__ = null;
/* 000102 */ 				throw __except1__;
/* 000102 */ 			}
/* 000102 */ 			else {
/* 000102 */ 				throw __except0__;
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 	});},
/* 000104 */ 	get py_popitem () {return __get__ (this, function (self) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000106 */ 		try {
/* 000107 */ 			return (function () {
/* 000107 */ 				var __accu0__ = __getitem__ (self.maps, 0);
/* 000107 */ 				return __call__ (__accu0__.py_popitem, __accu0__);
/* 000107 */ 			}) ();
/* 000107 */ 		}
/* 000107 */ 		catch (__except0__) {
/* 000107 */ 			if (isinstance (__except0__, KeyError)) {
/* 000109 */ 				var __except1__ = __call__ (KeyError, null, 'No keys found in the first mapping.');
/* 000109 */ 				__except1__.__cause__ = null;
/* 000109 */ 				throw __except1__;
/* 000109 */ 			}
/* 000109 */ 			else {
/* 000109 */ 				throw __except0__;
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 	});},
/* 000111 */ 	get py_pop () {return __get__ (this, function (self, key) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 			var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 			var args = tuple ();
/* 000111 */ 		}
/* 000113 */ 		try {
/* 000114 */ 			return (function () {
/* 000114 */ 				var __accu0__ = __getitem__ (self.maps, 0);
/* 000114 */ 				return __call__ (__accu0__.py_pop, __accu0__, key, ...args);
/* 000114 */ 			}) ();
/* 000114 */ 		}
/* 000114 */ 		catch (__except0__) {
/* 000114 */ 			if (isinstance (__except0__, KeyError)) {
/* 000116 */ 				var __except1__ = __call__ (KeyError, null, 'Key not found in the first mapping: {}'.format (key));
/* 000116 */ 				__except1__.__cause__ = null;
/* 000116 */ 				throw __except1__;
/* 000116 */ 			}
/* 000116 */ 			else {
/* 000116 */ 				throw __except0__;
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 	});},
/* 000118 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000120 */ 		(function () {
/* 000120 */ 			var __accu0__ = __getitem__ (self.maps, 0);
/* 000120 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000120 */ 		}) ();
/* 000120 */ 	});},
/* 000122 */ 	get __ior__ () {return __get__ (this, function (self, other) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		(function () {
/* 000123 */ 			var __accu0__ = __getitem__ (self.maps, 0);
/* 000123 */ 			return __call__ (__accu0__.py_update, __accu0__, other);
/* 000123 */ 		}) ();
/* 000124 */ 		return self;
/* 000124 */ 	});},
/* 000126 */ 	get __or__ () {return __get__ (this, function (self, other) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, other, _collections_abc.Mapping))))) {
/* 000128 */ 			return NotImplemented;
/* 000128 */ 		}
/* 000129 */ 		var m = (function () {
/* 000129 */ 			var __accu0__ = self;
/* 000129 */ 			return __call__ (__accu0__.copy, __accu0__);
/* 000129 */ 		}) ();
/* 000130 */ 		(function () {
/* 000130 */ 			var __accu0__ = __getitem__ (m.maps, 0);
/* 000130 */ 			return __call__ (__accu0__.py_update, __accu0__, other);
/* 000130 */ 		}) ();
/* 000131 */ 		return m;
/* 000131 */ 	});},
/* 000133 */ 	get __ror__ () {return __get__ (this, function (self, other) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, other, _collections_abc.Mapping))))) {
/* 000135 */ 			return NotImplemented;
/* 000135 */ 		}
/* 000136 */ 		var m = __call__ (dict, null, other);
/* 000137 */ 		var __iterable0__ = __call__ (py_reversed, null, self.maps);
/* 000137 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000137 */ 			var child = __getitem__ (__iterable0__, __index0__);
/* 000138 */ 			(function () {
/* 000138 */ 				var __accu0__ = m;
/* 000138 */ 				return __call__ (__accu0__.py_update, __accu0__, child);
/* 000138 */ 			}) ();
/* 000138 */ 		}
/* 000139 */ 		return (function () {
/* 000139 */ 			var __accu0__ = self;
/* 000139 */ 			return __call__ (__accu0__.__class__, __accu0__, m);
/* 000139 */ 		}) ();
/* 000139 */ 	});}
/* 000139 */ });
/* 000139 */ Object.defineProperty (ChainMap, 'parents', property.call (ChainMap, ChainMap._get_parents));;
/* 000006 */ 
//# sourceMappingURL=collections.map