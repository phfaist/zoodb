/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:36
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
/* 000452 */ 	get filter_context () {return __get__ (this, function (self) {
/* 000452 */ 		var kwargs = dict ();
/* 000452 */ 		if (arguments.length) {
/* 000452 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 					switch (__attrib0__) {
/* 000452 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 				delete kwargs.__kwargtrans__;
/* 000452 */ 			}
/* 000452 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000452 */ 		}
/* 000452 */ 		else {
/* 000452 */ 			var args = tuple ();
/* 000452 */ 		}
/* 000459 */ 		(function () {
/* 000459 */ 			var __accu0__ = _util;
/* 000459 */ 			return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, '`LatexContextDb.filter_context()` was renamed to `filtered_context()`.');
/* 000459 */ 		}) ();
/* 000461 */ 		return (function () {
/* 000461 */ 			var __accu0__ = self;
/* 000461 */ 			return __call__ (__accu0__.filtered_context, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000461 */ 		}) ();
/* 000461 */ 	});},
/* 000464 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000464 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000464 */ 			var keep_categories = [];
/* 000464 */ 		};
/* 000464 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000464 */ 			var exclude_categories = [];
/* 000464 */ 		};
/* 000464 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000464 */ 			var keep_which = [];
/* 000464 */ 		};
/* 000464 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000464 */ 			var create_class = null;
/* 000464 */ 		};
/* 000464 */ 		if (arguments.length) {
/* 000464 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000464 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000464 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000464 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000464 */ 					switch (__attrib0__) {
/* 000464 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 					}
/* 000464 */ 				}
/* 000464 */ 			}
/* 000464 */ 		}
/* 000464 */ 		else {
/* 000464 */ 		}
/* 000492 */ 		if (__t__ (create_class === null)) {
/* 000493 */ 			var create_class = self.__class__;
/* 000493 */ 		}
/* 000495 */ 		var new_context = __call__ (create_class, null);
/* 000497 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000498 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000499 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000501 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000502 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000503 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000505 */ 		var __iterable0__ = self.category_list;
/* 000505 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000505 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000506 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000506 */ 				continue;
/* 000506 */ 			}
/* 000508 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000508 */ 				continue;
/* 000508 */ 			}
/* 000512 */ 			(function () {
/* 000512 */ 				var __accu0__ = new_context;
/* 000514 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000514 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000514 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000515 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000515 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000515 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000516 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000516 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000516 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000516 */ 				}) () : [])}));
/* 000516 */ 			}) ();
/* 000516 */ 		}
/* 000519 */ 		return new_context;
/* 000519 */ 	});},
/* 000521 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000522 */ 		while (__t__ (true)) {
/* 000523 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000524 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000524 */ 				break;
/* 000524 */ 			}
/* 000526 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000526 */ 		}
/* 000528 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000528 */ 	});},
/* 000530 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000530 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000530 */ 			var category = null;
/* 000530 */ 		};
/* 000530 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000530 */ 			var macros = null;
/* 000530 */ 		};
/* 000530 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000530 */ 			var environments = null;
/* 000530 */ 		};
/* 000530 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000530 */ 			var specials = null;
/* 000530 */ 		};
/* 000530 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000530 */ 			var create_class = null;
/* 000530 */ 		};
/* 000530 */ 		var kwargs = dict ();
/* 000530 */ 		if (arguments.length) {
/* 000530 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000530 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000530 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000530 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000530 */ 					switch (__attrib0__) {
/* 000530 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000530 */ 					}
/* 000530 */ 				}
/* 000530 */ 				delete kwargs.__kwargtrans__;
/* 000530 */ 			}
/* 000530 */ 		}
/* 000530 */ 		else {
/* 000530 */ 		}
/* 000544 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000545 */ 			var __except0__ = ValueError;
/* 000545 */ 			__except0__.__cause__ = null;
/* 000545 */ 			throw __except0__;
/* 000545 */ 		}
/* 000547 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000548 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000548 */ 			__except0__.__cause__ = null;
/* 000548 */ 			throw __except0__;
/* 000548 */ 		}
/* 000553 */ 		if (__t__ (create_class === null)) {
/* 000554 */ 			var create_class = self.__class__;
/* 000554 */ 		}
/* 000556 */ 		var new_context = __call__ (create_class, null);
/* 000559 */ 		new_context.unknown_macro_spec = (function () {
/* 000559 */ 			var __accu0__ = kwargs;
/* 000559 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000559 */ 		}) ();
/* 000561 */ 		new_context.unknown_environment_spec = (function () {
/* 000561 */ 			var __accu0__ = kwargs;
/* 000561 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000561 */ 		}) ();
/* 000563 */ 		new_context.unknown_specials_spec = (function () {
/* 000563 */ 			var __accu0__ = kwargs;
/* 000563 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000563 */ 		}) ();
/* 000565 */ 		if (__t__ (macros === null)) {
/* 000565 */ 			var macros = [];
/* 000565 */ 		}
/* 000566 */ 		if (__t__ (environments === null)) {
/* 000566 */ 			var environments = [];
/* 000566 */ 		}
/* 000567 */ 		if (__t__ (specials === null)) {
/* 000567 */ 			var specials = [];
/* 000567 */ 		}
/* 000570 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000570 */ 			var __accu0__ = [];
/* 000570 */ 			var __iterable0__ = macros;
/* 000570 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000570 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000570 */ 				(function () {
/* 000570 */ 					var __accu1__ = __accu0__;
/* 000570 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000570 */ 				}) ();
/* 000570 */ 			}
/* 000570 */ 			return __accu0__;
/* 000571 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000571 */ 			var __accu0__ = [];
/* 000571 */ 			var __iterable0__ = environments;
/* 000571 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000571 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000571 */ 				(function () {
/* 000571 */ 					var __accu1__ = __accu0__;
/* 000571 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000571 */ 				}) ();
/* 000571 */ 			}
/* 000571 */ 			return __accu0__;
/* 000572 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000572 */ 			var __accu0__ = [];
/* 000572 */ 			var __iterable0__ = specials;
/* 000572 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000572 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000572 */ 				(function () {
/* 000572 */ 					var __accu1__ = __accu0__;
/* 000572 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000572 */ 				}) ();
/* 000572 */ 			}
/* 000572 */ 			return __accu0__;
/* 000572 */ 		}) ())});
/* 000575 */ 		new_context.category_list = self.category_list;
/* 000584 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000584 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000584 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000584 */ 		}) ())) {
/* 000587 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000588 */ 			var dd = __call__ (dict, null, self.d);
/* 000589 */ 			var d_cat = __getitem__ (dd, cat);
/* 000598 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000600 */ 			(function () {
/* 000600 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000600 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000600 */ 			}) ();
/* 000601 */ 			(function () {
/* 000601 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000601 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000601 */ 			}) ();
/* 000602 */ 			(function () {
/* 000602 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000602 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000602 */ 			}) ();
/* 000605 */ 			__setitem__ (dd, cat, d_cat);
/* 000606 */ 			new_context.d = dd;
/* 000608 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000608 */ 				var __accu0__ = _util;
/* 000608 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000612 */ 			}) (), 'environments': (function () {
/* 000612 */ 				var __accu0__ = _util;
/* 000612 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000616 */ 			}) (), 'specials': (function () {
/* 000616 */ 				var __accu0__ = _util;
/* 000616 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000616 */ 			}) ()});
/* 000621 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000624 */ 			new_context.frozen = true;
/* 000625 */ 			(function () {
/* 000625 */ 				var __accu0__ = logger;
/* 000625 */ 				return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [extend auto-cat %s] ---> %r', self, (function () {
/* 000625 */ 					var __accu1__ = [];
/* 000628 */ 					var __iterable0__ = (function () {
/* 000628 */ 						var __accu2__ = new_category_dicts;
/* 000628 */ 						return __call__ (__accu2__.py_items, __accu2__);
/* 000628 */ 					}) ();
/* 000628 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000628 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000628 */ 						var k = __left0__ [0];
/* 000628 */ 						var v = __left0__ [1];
/* 000628 */ 						(function () {
/* 000628 */ 							var __accu2__ = __accu1__;
/* 000628 */ 							return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000628 */ 								var __accu3__ = v;
/* 000628 */ 								return __call__ (__accu3__.py_keys, __accu3__);
/* 000628 */ 							}) ())]);
/* 000628 */ 						}) ();
/* 000628 */ 					}
/* 000628 */ 					return dict (__accu1__);
/* 000628 */ 				}) (), cat, new_context);
/* 000628 */ 			}) ();
/* 000632 */ 			return new_context;
/* 000632 */ 		}
/* 000634 */ 		if (__t__ (category === null)) {
/* 000635 */ 			var __left0__ = (function () {
/* 000635 */ 				var __accu0__ = self;
/* 000635 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000635 */ 			}) ();
/* 000635 */ 			var a = __left0__ [0];
/* 000635 */ 			var category = __left0__ [1];
/* 000636 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000636 */ 		}
/* 000637 */ 		else {
/* 000638 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000638 */ 		}
/* 000641 */ 		var dd = __call__ (dict, null, self.d);
/* 000642 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000644 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000646 */ 		new_context.d = dd;
/* 000654 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000654 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000654 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000657 */ 		}) (), 'environments': (function () {
/* 000657 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000657 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000660 */ 		}) (), 'specials': (function () {
/* 000660 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000660 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000660 */ 		}) ()});
/* 000664 */ 		new_context.frozen = true;
/* 000666 */ 		(function () {
/* 000666 */ 			var __accu0__ = logger;
/* 000666 */ 			return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [new cat %s] ---> %r', self, (function () {
/* 000666 */ 				var __accu1__ = [];
/* 000669 */ 				var __iterable0__ = (function () {
/* 000669 */ 					var __accu2__ = new_category_dicts;
/* 000669 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000669 */ 				}) ();
/* 000669 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000669 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000669 */ 					var k = __left0__ [0];
/* 000669 */ 					var v = __left0__ [1];
/* 000669 */ 					(function () {
/* 000669 */ 						var __accu2__ = __accu1__;
/* 000669 */ 						return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000669 */ 							var __accu3__ = v;
/* 000669 */ 							return __call__ (__accu3__.py_keys, __accu3__);
/* 000669 */ 						}) ())]);
/* 000669 */ 					}) ();
/* 000669 */ 				}
/* 000669 */ 				return dict (__accu1__);
/* 000669 */ 			}) (), category, new_context);
/* 000669 */ 		}) ();
/* 000675 */ 		return new_context;
/* 000675 */ 	});}
/* 000675 */ });
/* 000681 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000681 */ 	__module__: __name__,
/* 000694 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000694 */ 		var kwargs = dict ();
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 				delete kwargs.__kwargtrans__;
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000695 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['extend_latex_context', 'set_attributes'])}, kwargs)));
/* 000699 */ 		self.extend_latex_context = extend_latex_context;
/* 000699 */ 	});},
/* 000701 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000701 */ 		if (arguments.length) {
/* 000701 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000701 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000701 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000701 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000701 */ 					switch (__attrib0__) {
/* 000701 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 					}
/* 000701 */ 				}
/* 000701 */ 			}
/* 000701 */ 		}
/* 000701 */ 		else {
/* 000701 */ 		}
/* 000703 */ 		if (__t__ (self.extend_latex_context)) {
/* 000705 */ 			if (__t__ (self.set_attributes)) {
/* 000706 */ 				var set_attributes = self.set_attributes;
/* 000706 */ 			}
/* 000707 */ 			else {
/* 000708 */ 				var set_attributes = dict ({});
/* 000708 */ 			}
/* 000710 */ 			var latex_context = (function () {
/* 000710 */ 				var __accu0__ = parsing_state.latex_context;
/* 000710 */ 				return __call__ (__accu0__.extended_with, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000710 */ 			}) ();
/* 000715 */ 			return (function () {
/* 000715 */ 				var __accu0__ = parsing_state;
/* 000715 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context}, set_attributes)));
/* 000715 */ 			}) ();
/* 000715 */ 		}
/* 000719 */ 		else if (__t__ (self.set_attributes)) {
/* 000720 */ 			return (function () {
/* 000720 */ 				var __accu0__ = parsing_state;
/* 000720 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000720 */ 			}) ();
/* 000720 */ 		}
/* 000724 */ 		return parsing_state;
/* 000724 */ 	});}
/* 000724 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map