/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:42:37
/* 000037 */ var logging = {};
/* 000037 */ var unique_object_id = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000053 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000043 */ import * as __module_logging__ from './logging.js';
/* 000043 */ __nest__ (logging, '', __module_logging__);
/* 000040 */ import {ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ export {ParsingStateDelta, _util};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._latexcontextdb';
/* 000044 */ export var logger = (function () {
/* 000044 */ 	var __accu0__ = logging;
/* 000044 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000044 */ }) ();
/* 000048 */ export var _autogen_category_prefix = '__lctxdb_cat_';
/* 000054 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000061 */ export var LatexContextDb =  __class__ ('LatexContextDb', [object], {
/* 000061 */ 	__module__: __name__,
/* 000108 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000108 */ 		var kwargs = dict ();
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 				delete kwargs.__kwargtrans__;
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		__call__ (__call__ (__super__, null, LatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000111 */ 		self.category_list = [];
/* 000112 */ 		self.d = dict ({});
/* 000114 */ 		self.frozen = false;
/* 000118 */ 		self.lookup_chain_maps = dict ({'macros': (function () {
/* 000118 */ 			var __accu0__ = _util;
/* 000118 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000119 */ 		}) (), 'environments': (function () {
/* 000119 */ 			var __accu0__ = _util;
/* 000119 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000120 */ 		}) (), 'specials': (function () {
/* 000120 */ 			var __accu0__ = _util;
/* 000120 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000120 */ 		}) ()});
/* 000123 */ 		self.unknown_macro_spec = null;
/* 000124 */ 		self.unknown_environment_spec = null;
/* 000125 */ 		self.unknown_specials_spec = null;
/* 000127 */ 		self._autogen_category_counter = 0;
/* 000127 */ 	});},
/* 000130 */ 	get freeze () {return __get__ (this, function (self) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000141 */ 		self.frozen = true;
/* 000141 */ 	});},
/* 000144 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		return (function () {
/* 000145 */ 			var __accu0__ = '<LatexContextDb {:#x}{}>';
/* 000146 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self), (__t__ (self.frozen) ? '' : ' unfrozen'));
/* 000146 */ 		}) ();
/* 000146 */ 	});},
/* 000151 */ 	get add_context_category () {return __get__ (this, function (self, category, macros, environments, specials, prepend, insert_before, insert_after) {
/* 000151 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var macros = [];
/* 000151 */ 		};
/* 000151 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var environments = [];
/* 000151 */ 		};
/* 000151 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var specials = [];
/* 000151 */ 		};
/* 000151 */ 		if (typeof prepend == 'undefined' || (prepend != null && prepend.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var prepend = false;
/* 000151 */ 		};
/* 000151 */ 		if (typeof insert_before == 'undefined' || (insert_before != null && insert_before.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var insert_before = null;
/* 000151 */ 		};
/* 000151 */ 		if (typeof insert_after == 'undefined' || (insert_after != null && insert_after.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var insert_after = null;
/* 000151 */ 		};
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'prepend': var prepend = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'insert_before': var insert_before = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'insert_after': var insert_after = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000184 */ 		if (__t__ (self.frozen)) {
/* 000185 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000185 */ 			__except0__.__cause__ = null;
/* 000185 */ 			throw __except0__;
/* 000185 */ 		}
/* 000187 */ 		if (__t__ (__t__ (category !== null) && (function () {
/* 000187 */ 			var __accu0__ = category;
/* 000187 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000187 */ 		}) ())) {
/* 000188 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000188 */ 				var __accu0__ = 'Category name {} is unfortunately reserved for internal use';
/* 000188 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000188 */ 			}) ());
/* 000188 */ 			__except0__.__cause__ = null;
/* 000188 */ 			throw __except0__;
/* 000188 */ 		}
/* 000191 */ 		if (__t__ (category === null)) {
/* 000192 */ 			var __left0__ = (function () {
/* 000192 */ 				var __accu0__ = self;
/* 000192 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000192 */ 			}) ();
/* 000192 */ 			var _autogen_category_counter = __left0__ [0];
/* 000192 */ 			var category = __left0__ [1];
/* 000193 */ 			self._autogen_category_counter = __add__ (_autogen_category_counter, 1);
/* 000193 */ 		}
/* 000195 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000196 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000196 */ 				var __accu0__ = 'Category {} is already registered in the context database';
/* 000196 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000196 */ 			}) ());
/* 000196 */ 			__except0__.__cause__ = null;
/* 000196 */ 			throw __except0__;
/* 000196 */ 		}
/* 000200 */ 		if (__t__ (__gt__ (__call__ (len, null, (function () {
/* 000200 */ 			var __accu0__ = [];
/* 000200 */ 			var __iterable0__ = tuple ([prepend, insert_before, insert_after]);
/* 000200 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 				if (__t__ (x)) {
/* 000200 */ 					(function () {
/* 000200 */ 						var __accu1__ = __accu0__;
/* 000200 */ 						return __call__ (__accu1__.append, __accu1__, x);
/* 000200 */ 					}) ();
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 			return __accu0__;
/* 000200 */ 		}) ()), 1))) {
/* 000201 */ 			var __except0__ = __call__ (py_TypeError, null, 'add_context_category(): You may only specify one of prepend=True, insert_before=... or insert_after=...');
/* 000201 */ 			__except0__.__cause__ = null;
/* 000201 */ 			throw __except0__;
/* 000201 */ 		}
/* 000205 */ 		var category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000205 */ 			var __accu0__ = [];
/* 000205 */ 			var __iterable0__ = macros;
/* 000205 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 				(function () {
/* 000205 */ 					var __accu1__ = __accu0__;
/* 000205 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000205 */ 				}) ();
/* 000205 */ 			}
/* 000205 */ 			return __accu0__;
/* 000206 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000206 */ 			var __accu0__ = [];
/* 000206 */ 			var __iterable0__ = environments;
/* 000206 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 				(function () {
/* 000206 */ 					var __accu1__ = __accu0__;
/* 000206 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000206 */ 				}) ();
/* 000206 */ 			}
/* 000206 */ 			return __accu0__;
/* 000207 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000207 */ 			var __accu0__ = [];
/* 000207 */ 			var __iterable0__ = specials;
/* 000207 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000207 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000207 */ 				(function () {
/* 000207 */ 					var __accu1__ = __accu0__;
/* 000207 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000207 */ 				}) ();
/* 000207 */ 			}
/* 000207 */ 			return __accu0__;
/* 000207 */ 		}) ())});
/* 000210 */ 		(function () {
/* 000210 */ 			var __accu0__ = logger;
/* 000210 */ 			return __call__ (__accu0__.debug, __accu0__, 'Adding category context in db: %r', category_dicts);
/* 000210 */ 		}) ();
/* 000212 */ 		if (__t__ (prepend)) {
/* 000213 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000213 */ 				if (arguments.length) {
/* 000213 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 							switch (__attrib0__) {
/* 000213 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							}
/* 000213 */ 						}
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 				else {
/* 000213 */ 				}
/* 000213 */ 				return (function () {
/* 000213 */ 					var __accu0__ = listobj;
/* 000213 */ 					return __call__ (__accu0__.insert, __accu0__, 0, item);
/* 000213 */ 				}) ();
/* 000213 */ 			});
/* 000213 */ 		}
/* 000214 */ 		else if (__t__ (insert_before)) {
/* 000215 */ 			if (__t__ (__in__ (insert_before, self.category_list))) {
/* 000216 */ 				var i = (function () {
/* 000216 */ 					var __accu0__ = self.category_list;
/* 000216 */ 					return __call__ (__accu0__.index, __accu0__, insert_before);
/* 000216 */ 				}) ();
/* 000216 */ 			}
/* 000217 */ 			else {
/* 000218 */ 				var i = 0;
/* 000218 */ 			}
/* 000219 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000219 */ 				if (arguments.length) {
/* 000219 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 							switch (__attrib0__) {
/* 000219 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 							}
/* 000219 */ 						}
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 				else {
/* 000219 */ 				}
/* 000219 */ 				return (function () {
/* 000219 */ 					var __accu0__ = listobj;
/* 000219 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000219 */ 				}) ();
/* 000219 */ 			});
/* 000219 */ 		}
/* 000220 */ 		else if (__t__ (insert_after)) {
/* 000221 */ 			if (__t__ (__in__ (insert_after, self.category_list))) {
/* 000222 */ 				var i = __add__ ((function () {
/* 000222 */ 					var __accu0__ = self.category_list;
/* 000222 */ 					return __call__ (__accu0__.index, __accu0__, insert_after);
/* 000222 */ 				}) (), 1);
/* 000222 */ 			}
/* 000223 */ 			else {
/* 000224 */ 				var i = __call__ (len, null, self.category_list);
/* 000224 */ 			}
/* 000225 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000225 */ 				if (arguments.length) {
/* 000225 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 							switch (__attrib0__) {
/* 000225 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 							}
/* 000225 */ 						}
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 				else {
/* 000225 */ 				}
/* 000225 */ 				return (function () {
/* 000225 */ 					var __accu0__ = listobj;
/* 000225 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000225 */ 				}) ();
/* 000225 */ 			});
/* 000225 */ 		}
/* 000226 */ 		else {
/* 000227 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000227 */ 				if (arguments.length) {
/* 000227 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 							switch (__attrib0__) {
/* 000227 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 							}
/* 000227 */ 						}
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 				else {
/* 000227 */ 				}
/* 000227 */ 				return (function () {
/* 000227 */ 					var __accu0__ = listobj;
/* 000227 */ 					return __call__ (__accu0__.append, __accu0__, item);
/* 000227 */ 				}) ();
/* 000227 */ 			});
/* 000227 */ 		}
/* 000229 */ 		__call__ (insert_fn, null, self.category_list, category);
/* 000230 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000230 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 			__call__ (insert_fn, null, __getitem__ (self.lookup_chain_maps, which).maps, __getitem__ (category_dicts, which));
/* 000231 */ 		}
/* 000233 */ 		__setitem__ (self.d, category, category_dicts);
/* 000233 */ 	});},
/* 000236 */ 	get set_unknown_macro_spec () {return __get__ (this, function (self, macrospec) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000241 */ 		if (__t__ (self.frozen)) {
/* 000242 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000242 */ 			__except0__.__cause__ = null;
/* 000242 */ 			throw __except0__;
/* 000242 */ 		}
/* 000243 */ 		self.unknown_macro_spec = macrospec;
/* 000243 */ 	});},
/* 000245 */ 	get set_unknown_environment_spec () {return __get__ (this, function (self, environmentspec) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000250 */ 		if (__t__ (self.frozen)) {
/* 000251 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000251 */ 			__except0__.__cause__ = null;
/* 000251 */ 			throw __except0__;
/* 000251 */ 		}
/* 000252 */ 		self.unknown_environment_spec = environmentspec;
/* 000252 */ 	});},
/* 000254 */ 	get set_unknown_specials_spec () {return __get__ (this, function (self, specialsspec) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000261 */ 		if (__t__ (self.frozen)) {
/* 000262 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000262 */ 			__except0__.__cause__ = null;
/* 000262 */ 			throw __except0__;
/* 000262 */ 		}
/* 000263 */ 		self.unknown_specials_spec = specialsspec;
/* 000263 */ 	});},
/* 000265 */ 	get categories () {return __get__ (this, function (self) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000270 */ 		return __call__ (list, null, self.category_list);
/* 000270 */ 	});},
/* 000272 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname, raise_if_not_found) {
/* 000272 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 			var raise_if_not_found = false;
/* 000272 */ 		};
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000286 */ 		try {
/* 000287 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'macros'), macroname);
/* 000287 */ 		}
/* 000287 */ 		catch (__except0__) {
/* 000287 */ 			if (isinstance (__except0__, KeyError)) {
/* 000289 */ 				if (__t__ (raise_if_not_found)) {
/* 000290 */ 					__except0__.__cause__ = null;
/* 000290 */ 					throw __except0__;
/* 000290 */ 				}
/* 000291 */ 				return self.unknown_macro_spec;
/* 000291 */ 			}
/* 000291 */ 			else {
/* 000291 */ 				throw __except0__;
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 	});},
/* 000293 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname, raise_if_not_found) {
/* 000293 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000293 */ 			var raise_if_not_found = false;
/* 000293 */ 		};
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000308 */ 		try {
/* 000309 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'environments'), environmentname);
/* 000309 */ 		}
/* 000309 */ 		catch (__except0__) {
/* 000309 */ 			if (isinstance (__except0__, KeyError)) {
/* 000311 */ 				if (__t__ (raise_if_not_found)) {
/* 000312 */ 					__except0__.__cause__ = null;
/* 000312 */ 					throw __except0__;
/* 000312 */ 				}
/* 000313 */ 				return self.unknown_environment_spec;
/* 000313 */ 			}
/* 000313 */ 			else {
/* 000313 */ 				throw __except0__;
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 	});},
/* 000315 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars, raise_if_not_found) {
/* 000315 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000315 */ 			var raise_if_not_found = false;
/* 000315 */ 		};
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000338 */ 		try {
/* 000339 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'specials'), specials_chars);
/* 000339 */ 		}
/* 000339 */ 		catch (__except0__) {
/* 000339 */ 			if (isinstance (__except0__, KeyError)) {
/* 000341 */ 				if (__t__ (raise_if_not_found)) {
/* 000342 */ 					__except0__.__cause__ = null;
/* 000342 */ 					throw __except0__;
/* 000342 */ 				}
/* 000343 */ 				return self.unknown_specials_spec;
/* 000343 */ 			}
/* 000343 */ 			else {
/* 000343 */ 				throw __except0__;
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 	});},
/* 000345 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000345 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000345 */ 			var parsing_state = null;
/* 000345 */ 		};
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000356 */ 		var best_match_len = 0;
/* 000357 */ 		var best_match_s = null;
/* 000359 */ 		(function () {
/* 000359 */ 			var __accu0__ = logger;
/* 000359 */ 			return __call__ (__accu0__.debug, __accu0__, 'test_for_specials() category_list=%r', self.category_list);
/* 000359 */ 		}) ();
/* 000361 */ 		var __iterable0__ = self.category_list;
/* 000361 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000361 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000363 */ 			var __iterable1__ = (function () {
/* 000363 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000363 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000363 */ 			}) ();
/* 000363 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000363 */ 				var specials_chars = __getitem__ (__iterable1__, __index1__);
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu0__ = logger;
/* 000364 */ 					return __call__ (__accu0__.debug, __accu0__, 'test_for_specials() ‘%s...’ testing %r', __getslice__ (s, pos, __add__ (pos, 4), 1), specials_chars);
/* 000364 */ 				}) ();
/* 000366 */ 				if (__t__ (__t__ (__gt__ (__call__ (len, null, specials_chars), best_match_len)) && (function () {
/* 000366 */ 					var __accu0__ = s;
/* 000366 */ 					return __call__ (__accu0__.startswith, __accu0__, specials_chars, pos);
/* 000366 */ 				}) ())) {
/* 000367 */ 					var best_match_s = __getitem__ (__getitem__ (__getitem__ (self.d, cat), 'specials'), specials_chars);
/* 000368 */ 					var best_match_len = __call__ (len, null, specials_chars);
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000372 */ 		return best_match_s;
/* 000372 */ 	});},
/* 000374 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000374 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000374 */ 			var categories = null;
/* 000374 */ 		};
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000387 */ 		if (__t__ (categories === null)) {
/* 000388 */ 			var categories = self.category_list;
/* 000388 */ 		}
/* 000390 */ 		var __iterable0__ = categories;
/* 000390 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000390 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000391 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000393 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000393 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000393 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000393 */ 				}) ());
/* 000393 */ 				__except0__.__cause__ = null;
/* 000393 */ 				throw __except0__;
/* 000393 */ 			}
/* 000396 */ 			var __iterable1__ = (function () {
/* 000396 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000396 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000396 */ 			}) ();
/* 000396 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000396 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000396 */ 				yield spec;
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		});},
/* 000399 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000399 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000399 */ 			var categories = null;
/* 000399 */ 		};
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000413 */ 		if (__t__ (categories === null)) {
/* 000414 */ 			var categories = self.category_list;
/* 000414 */ 		}
/* 000416 */ 		var __iterable0__ = categories;
/* 000416 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000416 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000417 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000419 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000419 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000419 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000419 */ 				}) ());
/* 000419 */ 				__except0__.__cause__ = null;
/* 000419 */ 				throw __except0__;
/* 000419 */ 			}
/* 000422 */ 			var __iterable1__ = (function () {
/* 000422 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000422 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000422 */ 			}) ();
/* 000422 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000422 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000422 */ 				yield spec;
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		});},
/* 000425 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000425 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000425 */ 			var categories = null;
/* 000425 */ 		};
/* 000425 */ 		if (arguments.length) {
/* 000425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 					switch (__attrib0__) {
/* 000425 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 			}
/* 000425 */ 		}
/* 000425 */ 		else {
/* 000425 */ 		}
/* 000439 */ 		if (__t__ (categories === null)) {
/* 000440 */ 			var categories = self.category_list;
/* 000440 */ 		}
/* 000442 */ 		var __iterable0__ = categories;
/* 000442 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000442 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000443 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000445 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000445 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000445 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000445 */ 				}) ());
/* 000445 */ 				__except0__.__cause__ = null;
/* 000445 */ 				throw __except0__;
/* 000445 */ 			}
/* 000448 */ 			var __iterable1__ = (function () {
/* 000448 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000448 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000448 */ 			}) ();
/* 000448 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000448 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000448 */ 				yield spec;
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		});},
/* 000469 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000469 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000469 */ 			var keep_categories = [];
/* 000469 */ 		};
/* 000469 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000469 */ 			var exclude_categories = [];
/* 000469 */ 		};
/* 000469 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000469 */ 			var keep_which = [];
/* 000469 */ 		};
/* 000469 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000469 */ 			var create_class = null;
/* 000469 */ 		};
/* 000469 */ 		if (arguments.length) {
/* 000469 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000469 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000469 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000469 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000469 */ 					switch (__attrib0__) {
/* 000469 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 					}
/* 000469 */ 				}
/* 000469 */ 			}
/* 000469 */ 		}
/* 000469 */ 		else {
/* 000469 */ 		}
/* 000502 */ 		if (__t__ (create_class === null)) {
/* 000503 */ 			var create_class = self.__class__;
/* 000503 */ 		}
/* 000505 */ 		var new_context = __call__ (create_class, null);
/* 000507 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000508 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000509 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000511 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000512 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000513 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000515 */ 		var __iterable0__ = self.category_list;
/* 000515 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000515 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000516 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000516 */ 				continue;
/* 000516 */ 			}
/* 000518 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000518 */ 				continue;
/* 000518 */ 			}
/* 000522 */ 			(function () {
/* 000522 */ 				var __accu0__ = new_context;
/* 000524 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000524 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000524 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000525 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000525 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000525 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000526 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000526 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000526 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000526 */ 				}) () : [])}));
/* 000526 */ 			}) ();
/* 000526 */ 		}
/* 000529 */ 		return new_context;
/* 000529 */ 	});},
/* 000531 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000532 */ 		while (__t__ (true)) {
/* 000533 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000534 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000534 */ 				break;
/* 000534 */ 			}
/* 000536 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000536 */ 		}
/* 000538 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000538 */ 	});},
/* 000540 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000540 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var category = null;
/* 000540 */ 		};
/* 000540 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var macros = null;
/* 000540 */ 		};
/* 000540 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var environments = null;
/* 000540 */ 		};
/* 000540 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var specials = null;
/* 000540 */ 		};
/* 000540 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var create_class = null;
/* 000540 */ 		};
/* 000540 */ 		var kwargs = dict ();
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 				delete kwargs.__kwargtrans__;
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000554 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000555 */ 			var __except0__ = ValueError;
/* 000555 */ 			__except0__.__cause__ = null;
/* 000555 */ 			throw __except0__;
/* 000555 */ 		}
/* 000557 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000558 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000558 */ 			__except0__.__cause__ = null;
/* 000558 */ 			throw __except0__;
/* 000558 */ 		}
/* 000563 */ 		if (__t__ (create_class === null)) {
/* 000564 */ 			var create_class = self.__class__;
/* 000564 */ 		}
/* 000566 */ 		var new_context = __call__ (create_class, null);
/* 000569 */ 		new_context.unknown_macro_spec = (function () {
/* 000569 */ 			var __accu0__ = kwargs;
/* 000569 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000569 */ 		}) ();
/* 000571 */ 		new_context.unknown_environment_spec = (function () {
/* 000571 */ 			var __accu0__ = kwargs;
/* 000571 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000571 */ 		}) ();
/* 000573 */ 		new_context.unknown_specials_spec = (function () {
/* 000573 */ 			var __accu0__ = kwargs;
/* 000573 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000573 */ 		}) ();
/* 000575 */ 		if (__t__ (macros === null)) {
/* 000575 */ 			var macros = [];
/* 000575 */ 		}
/* 000576 */ 		if (__t__ (environments === null)) {
/* 000576 */ 			var environments = [];
/* 000576 */ 		}
/* 000577 */ 		if (__t__ (specials === null)) {
/* 000577 */ 			var specials = [];
/* 000577 */ 		}
/* 000580 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000580 */ 			var __accu0__ = [];
/* 000580 */ 			var __iterable0__ = macros;
/* 000580 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000580 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000580 */ 				(function () {
/* 000580 */ 					var __accu1__ = __accu0__;
/* 000580 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000580 */ 				}) ();
/* 000580 */ 			}
/* 000580 */ 			return __accu0__;
/* 000581 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000581 */ 			var __accu0__ = [];
/* 000581 */ 			var __iterable0__ = environments;
/* 000581 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000581 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000581 */ 				(function () {
/* 000581 */ 					var __accu1__ = __accu0__;
/* 000581 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000581 */ 				}) ();
/* 000581 */ 			}
/* 000581 */ 			return __accu0__;
/* 000582 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000582 */ 			var __accu0__ = [];
/* 000582 */ 			var __iterable0__ = specials;
/* 000582 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000582 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000582 */ 				(function () {
/* 000582 */ 					var __accu1__ = __accu0__;
/* 000582 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000582 */ 				}) ();
/* 000582 */ 			}
/* 000582 */ 			return __accu0__;
/* 000582 */ 		}) ())});
/* 000585 */ 		new_context.category_list = self.category_list;
/* 000594 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000594 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000594 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000594 */ 		}) ())) {
/* 000597 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000598 */ 			var dd = __call__ (dict, null, self.d);
/* 000599 */ 			var d_cat = __getitem__ (dd, cat);
/* 000608 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000610 */ 			(function () {
/* 000610 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000610 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000610 */ 			}) ();
/* 000611 */ 			(function () {
/* 000611 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000611 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000611 */ 			}) ();
/* 000612 */ 			(function () {
/* 000612 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000612 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000612 */ 			}) ();
/* 000615 */ 			__setitem__ (dd, cat, d_cat);
/* 000616 */ 			new_context.d = dd;
/* 000618 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000618 */ 				var __accu0__ = _util;
/* 000618 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000622 */ 			}) (), 'environments': (function () {
/* 000622 */ 				var __accu0__ = _util;
/* 000622 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000626 */ 			}) (), 'specials': (function () {
/* 000626 */ 				var __accu0__ = _util;
/* 000626 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000626 */ 			}) ()});
/* 000631 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000634 */ 			new_context.frozen = true;
/* 000635 */ 			(function () {
/* 000635 */ 				var __accu0__ = logger;
/* 000635 */ 				return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [extend auto-cat %s] ---> %r', self, (function () {
/* 000635 */ 					var __accu1__ = [];
/* 000638 */ 					var __iterable0__ = (function () {
/* 000638 */ 						var __accu2__ = new_category_dicts;
/* 000638 */ 						return __call__ (__accu2__.py_items, __accu2__);
/* 000638 */ 					}) ();
/* 000638 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000638 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000638 */ 						var k = __left0__ [0];
/* 000638 */ 						var v = __left0__ [1];
/* 000638 */ 						(function () {
/* 000638 */ 							var __accu2__ = __accu1__;
/* 000638 */ 							return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000638 */ 								var __accu3__ = v;
/* 000638 */ 								return __call__ (__accu3__.py_keys, __accu3__);
/* 000638 */ 							}) ())]);
/* 000638 */ 						}) ();
/* 000638 */ 					}
/* 000638 */ 					return dict (__accu1__);
/* 000638 */ 				}) (), cat, new_context);
/* 000638 */ 			}) ();
/* 000642 */ 			return new_context;
/* 000642 */ 		}
/* 000644 */ 		if (__t__ (category === null)) {
/* 000645 */ 			var __left0__ = (function () {
/* 000645 */ 				var __accu0__ = self;
/* 000645 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000645 */ 			}) ();
/* 000645 */ 			var a = __left0__ [0];
/* 000645 */ 			var category = __left0__ [1];
/* 000646 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000646 */ 		}
/* 000647 */ 		else {
/* 000648 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000648 */ 		}
/* 000651 */ 		var dd = __call__ (dict, null, self.d);
/* 000652 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000654 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000656 */ 		new_context.d = dd;
/* 000664 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000664 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000664 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000667 */ 		}) (), 'environments': (function () {
/* 000667 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000667 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000670 */ 		}) (), 'specials': (function () {
/* 000670 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000670 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000670 */ 		}) ()});
/* 000674 */ 		new_context.frozen = true;
/* 000676 */ 		(function () {
/* 000676 */ 			var __accu0__ = logger;
/* 000676 */ 			return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [new cat %s] ---> %r', self, (function () {
/* 000676 */ 				var __accu1__ = [];
/* 000679 */ 				var __iterable0__ = (function () {
/* 000679 */ 					var __accu2__ = new_category_dicts;
/* 000679 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000679 */ 				}) ();
/* 000679 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000679 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000679 */ 					var k = __left0__ [0];
/* 000679 */ 					var v = __left0__ [1];
/* 000679 */ 					(function () {
/* 000679 */ 						var __accu2__ = __accu1__;
/* 000679 */ 						return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000679 */ 							var __accu3__ = v;
/* 000679 */ 							return __call__ (__accu3__.py_keys, __accu3__);
/* 000679 */ 						}) ())]);
/* 000679 */ 					}) ();
/* 000679 */ 				}
/* 000679 */ 				return dict (__accu1__);
/* 000679 */ 			}) (), category, new_context);
/* 000679 */ 		}) ();
/* 000685 */ 		return new_context;
/* 000685 */ 	});}
/* 000685 */ });
/* 000691 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000691 */ 	__module__: __name__,
/* 000704 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000704 */ 		var kwargs = dict ();
/* 000704 */ 		if (arguments.length) {
/* 000704 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000704 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000704 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000704 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000704 */ 					switch (__attrib0__) {
/* 000704 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000704 */ 					}
/* 000704 */ 				}
/* 000704 */ 				delete kwargs.__kwargtrans__;
/* 000704 */ 			}
/* 000704 */ 		}
/* 000704 */ 		else {
/* 000704 */ 		}
/* 000705 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['extend_latex_context', 'set_attributes'])}, kwargs)));
/* 000709 */ 		self.extend_latex_context = extend_latex_context;
/* 000709 */ 	});},
/* 000711 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000711 */ 		if (arguments.length) {
/* 000711 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000711 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000711 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000711 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000711 */ 					switch (__attrib0__) {
/* 000711 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 					}
/* 000711 */ 				}
/* 000711 */ 			}
/* 000711 */ 		}
/* 000711 */ 		else {
/* 000711 */ 		}
/* 000713 */ 		if (__t__ (self.extend_latex_context)) {
/* 000715 */ 			if (__t__ (self.set_attributes)) {
/* 000716 */ 				var set_attributes = self.set_attributes;
/* 000716 */ 			}
/* 000717 */ 			else {
/* 000718 */ 				var set_attributes = dict ({});
/* 000718 */ 			}
/* 000720 */ 			var latex_context = (function () {
/* 000720 */ 				var __accu0__ = parsing_state.latex_context;
/* 000720 */ 				return __call__ (__accu0__.extended_with, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000720 */ 			}) ();
/* 000725 */ 			return (function () {
/* 000725 */ 				var __accu0__ = parsing_state;
/* 000725 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context}, set_attributes)));
/* 000725 */ 			}) ();
/* 000725 */ 		}
/* 000729 */ 		else if (__t__ (self.set_attributes)) {
/* 000730 */ 			return (function () {
/* 000730 */ 				var __accu0__ = parsing_state;
/* 000730 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000730 */ 			}) ();
/* 000730 */ 		}
/* 000734 */ 		return parsing_state;
/* 000734 */ 	});}
/* 000734 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map