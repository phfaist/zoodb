/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:22
/* 000037 */ var logging = {};
/* 000037 */ var unique_object_id = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000053 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000043 */ import * as __module_logging__ from './logging.js';
/* 000043 */ __nest__ (logging, '', __module_logging__);
/* 000040 */ import {ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ export {_util, ParsingStateDelta};
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
/* 000369 */ 					(function () {
/* 000369 */ 						var __accu0__ = logger;
/* 000369 */ 						return __call__ (__accu0__.debug, __accu0__, '        -> best_match_s={} best_match_len={}'.format (best_match_s, best_match_len));
/* 000369 */ 					}) ();
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000371 */ 		return best_match_s;
/* 000371 */ 	});},
/* 000373 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000373 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var categories = null;
/* 000373 */ 		};
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000386 */ 		if (__t__ (categories === null)) {
/* 000387 */ 			var categories = self.category_list;
/* 000387 */ 		}
/* 000389 */ 		var __iterable0__ = categories;
/* 000389 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000389 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000390 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000392 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000392 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000392 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000392 */ 				}) ());
/* 000392 */ 				__except0__.__cause__ = null;
/* 000392 */ 				throw __except0__;
/* 000392 */ 			}
/* 000395 */ 			var __iterable1__ = (function () {
/* 000395 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000395 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000395 */ 			}) ();
/* 000395 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000395 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000395 */ 				yield spec;
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		});},
/* 000398 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000398 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 			var categories = null;
/* 000398 */ 		};
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000412 */ 		if (__t__ (categories === null)) {
/* 000413 */ 			var categories = self.category_list;
/* 000413 */ 		}
/* 000415 */ 		var __iterable0__ = categories;
/* 000415 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000415 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000416 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000418 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000418 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000418 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000418 */ 				}) ());
/* 000418 */ 				__except0__.__cause__ = null;
/* 000418 */ 				throw __except0__;
/* 000418 */ 			}
/* 000421 */ 			var __iterable1__ = (function () {
/* 000421 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000421 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000421 */ 			}) ();
/* 000421 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000421 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000421 */ 				yield spec;
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		});},
/* 000424 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000424 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000424 */ 			var categories = null;
/* 000424 */ 		};
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000438 */ 		if (__t__ (categories === null)) {
/* 000439 */ 			var categories = self.category_list;
/* 000439 */ 		}
/* 000441 */ 		var __iterable0__ = categories;
/* 000441 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000441 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000442 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000444 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000444 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000444 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000444 */ 				}) ());
/* 000444 */ 				__except0__.__cause__ = null;
/* 000444 */ 				throw __except0__;
/* 000444 */ 			}
/* 000447 */ 			var __iterable1__ = (function () {
/* 000447 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000447 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000447 */ 			}) ();
/* 000447 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000447 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000447 */ 				yield spec;
/* 000447 */ 			}
/* 000447 */ 		}
/* 000447 */ 		});},
/* 000451 */ 	get filter_context () {return __get__ (this, function (self) {
/* 000451 */ 		var kwargs = dict ();
/* 000451 */ 		if (arguments.length) {
/* 000451 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000451 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000451 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000451 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000451 */ 					switch (__attrib0__) {
/* 000451 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000451 */ 					}
/* 000451 */ 				}
/* 000451 */ 				delete kwargs.__kwargtrans__;
/* 000451 */ 			}
/* 000451 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000451 */ 		}
/* 000451 */ 		else {
/* 000451 */ 			var args = tuple ();
/* 000451 */ 		}
/* 000458 */ 		(function () {
/* 000458 */ 			var __accu0__ = _util;
/* 000458 */ 			return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, '`LatexContextDb.filter_context()` was renamed to `filtered_context()`.');
/* 000458 */ 		}) ();
/* 000460 */ 		return (function () {
/* 000460 */ 			var __accu0__ = self;
/* 000460 */ 			return __call__ (__accu0__.filtered_context, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000460 */ 		}) ();
/* 000460 */ 	});},
/* 000463 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000463 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000463 */ 			var keep_categories = [];
/* 000463 */ 		};
/* 000463 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000463 */ 			var exclude_categories = [];
/* 000463 */ 		};
/* 000463 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000463 */ 			var keep_which = [];
/* 000463 */ 		};
/* 000463 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000463 */ 			var create_class = null;
/* 000463 */ 		};
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000491 */ 		if (__t__ (create_class === null)) {
/* 000492 */ 			var create_class = self.__class__;
/* 000492 */ 		}
/* 000494 */ 		var new_context = __call__ (create_class, null);
/* 000496 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000497 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000498 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000500 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000501 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000502 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000504 */ 		var __iterable0__ = self.category_list;
/* 000504 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000504 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000505 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000505 */ 				continue;
/* 000505 */ 			}
/* 000507 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000507 */ 				continue;
/* 000507 */ 			}
/* 000511 */ 			(function () {
/* 000511 */ 				var __accu0__ = new_context;
/* 000513 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000513 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000513 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000514 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000514 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000514 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000515 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000515 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000515 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000515 */ 				}) () : [])}));
/* 000515 */ 			}) ();
/* 000515 */ 		}
/* 000518 */ 		return new_context;
/* 000518 */ 	});},
/* 000520 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000521 */ 		while (__t__ (true)) {
/* 000522 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000523 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000523 */ 				break;
/* 000523 */ 			}
/* 000525 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000525 */ 		}
/* 000527 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000527 */ 	});},
/* 000529 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000529 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000529 */ 			var category = null;
/* 000529 */ 		};
/* 000529 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000529 */ 			var macros = null;
/* 000529 */ 		};
/* 000529 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000529 */ 			var environments = null;
/* 000529 */ 		};
/* 000529 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000529 */ 			var specials = null;
/* 000529 */ 		};
/* 000529 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000529 */ 			var create_class = null;
/* 000529 */ 		};
/* 000529 */ 		var kwargs = dict ();
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 				delete kwargs.__kwargtrans__;
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000543 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000544 */ 			var __except0__ = ValueError;
/* 000544 */ 			__except0__.__cause__ = null;
/* 000544 */ 			throw __except0__;
/* 000544 */ 		}
/* 000546 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000547 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000547 */ 			__except0__.__cause__ = null;
/* 000547 */ 			throw __except0__;
/* 000547 */ 		}
/* 000552 */ 		if (__t__ (create_class === null)) {
/* 000553 */ 			var create_class = self.__class__;
/* 000553 */ 		}
/* 000555 */ 		var new_context = __call__ (create_class, null);
/* 000558 */ 		new_context.unknown_macro_spec = (function () {
/* 000558 */ 			var __accu0__ = kwargs;
/* 000558 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000558 */ 		}) ();
/* 000560 */ 		new_context.unknown_environment_spec = (function () {
/* 000560 */ 			var __accu0__ = kwargs;
/* 000560 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000560 */ 		}) ();
/* 000562 */ 		new_context.unknown_specials_spec = (function () {
/* 000562 */ 			var __accu0__ = kwargs;
/* 000562 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000562 */ 		}) ();
/* 000564 */ 		if (__t__ (macros === null)) {
/* 000564 */ 			var macros = [];
/* 000564 */ 		}
/* 000565 */ 		if (__t__ (environments === null)) {
/* 000565 */ 			var environments = [];
/* 000565 */ 		}
/* 000566 */ 		if (__t__ (specials === null)) {
/* 000566 */ 			var specials = [];
/* 000566 */ 		}
/* 000569 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000569 */ 			var __accu0__ = [];
/* 000569 */ 			var __iterable0__ = macros;
/* 000569 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000569 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000569 */ 				(function () {
/* 000569 */ 					var __accu1__ = __accu0__;
/* 000569 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000569 */ 				}) ();
/* 000569 */ 			}
/* 000569 */ 			return __accu0__;
/* 000570 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000570 */ 			var __accu0__ = [];
/* 000570 */ 			var __iterable0__ = environments;
/* 000570 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000570 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000570 */ 				(function () {
/* 000570 */ 					var __accu1__ = __accu0__;
/* 000570 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000570 */ 				}) ();
/* 000570 */ 			}
/* 000570 */ 			return __accu0__;
/* 000571 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000571 */ 			var __accu0__ = [];
/* 000571 */ 			var __iterable0__ = specials;
/* 000571 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000571 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000571 */ 				(function () {
/* 000571 */ 					var __accu1__ = __accu0__;
/* 000571 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000571 */ 				}) ();
/* 000571 */ 			}
/* 000571 */ 			return __accu0__;
/* 000571 */ 		}) ())});
/* 000574 */ 		new_context.category_list = self.category_list;
/* 000583 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000583 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000583 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000583 */ 		}) ())) {
/* 000586 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000587 */ 			var dd = __call__ (dict, null, self.d);
/* 000588 */ 			var d_cat = __getitem__ (dd, cat);
/* 000597 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000599 */ 			(function () {
/* 000599 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000599 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000599 */ 			}) ();
/* 000600 */ 			(function () {
/* 000600 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000600 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000600 */ 			}) ();
/* 000601 */ 			(function () {
/* 000601 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000601 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000601 */ 			}) ();
/* 000604 */ 			__setitem__ (dd, cat, d_cat);
/* 000605 */ 			new_context.d = dd;
/* 000607 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000607 */ 				var __accu0__ = _util;
/* 000607 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000611 */ 			}) (), 'environments': (function () {
/* 000611 */ 				var __accu0__ = _util;
/* 000611 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000615 */ 			}) (), 'specials': (function () {
/* 000615 */ 				var __accu0__ = _util;
/* 000615 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000615 */ 			}) ()});
/* 000620 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000623 */ 			new_context.frozen = true;
/* 000624 */ 			(function () {
/* 000624 */ 				var __accu0__ = logger;
/* 000624 */ 				return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [extend auto-cat %s] ---> %r', self, (function () {
/* 000624 */ 					var __accu1__ = [];
/* 000627 */ 					var __iterable0__ = (function () {
/* 000627 */ 						var __accu2__ = new_category_dicts;
/* 000627 */ 						return __call__ (__accu2__.py_items, __accu2__);
/* 000627 */ 					}) ();
/* 000627 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000627 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000627 */ 						var k = __left0__ [0];
/* 000627 */ 						var v = __left0__ [1];
/* 000627 */ 						(function () {
/* 000627 */ 							var __accu2__ = __accu1__;
/* 000627 */ 							return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000627 */ 								var __accu3__ = v;
/* 000627 */ 								return __call__ (__accu3__.py_keys, __accu3__);
/* 000627 */ 							}) ())]);
/* 000627 */ 						}) ();
/* 000627 */ 					}
/* 000627 */ 					return dict (__accu1__);
/* 000627 */ 				}) (), cat, new_context);
/* 000627 */ 			}) ();
/* 000631 */ 			return new_context;
/* 000631 */ 		}
/* 000633 */ 		if (__t__ (category === null)) {
/* 000634 */ 			var __left0__ = (function () {
/* 000634 */ 				var __accu0__ = self;
/* 000634 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000634 */ 			}) ();
/* 000634 */ 			var a = __left0__ [0];
/* 000634 */ 			var category = __left0__ [1];
/* 000635 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000635 */ 		}
/* 000636 */ 		else {
/* 000637 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000637 */ 		}
/* 000640 */ 		var dd = __call__ (dict, null, self.d);
/* 000641 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000643 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000645 */ 		new_context.d = dd;
/* 000653 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000653 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000653 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000656 */ 		}) (), 'environments': (function () {
/* 000656 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000656 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000659 */ 		}) (), 'specials': (function () {
/* 000659 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000659 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000659 */ 		}) ()});
/* 000663 */ 		new_context.frozen = true;
/* 000665 */ 		(function () {
/* 000665 */ 			var __accu0__ = logger;
/* 000665 */ 			return __call__ (__accu0__.debug, __accu0__, 'Latex Context DB %r ---> extended with %r [new cat %s] ---> %r', self, (function () {
/* 000665 */ 				var __accu1__ = [];
/* 000668 */ 				var __iterable0__ = (function () {
/* 000668 */ 					var __accu2__ = new_category_dicts;
/* 000668 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000668 */ 				}) ();
/* 000668 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000668 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000668 */ 					var k = __left0__ [0];
/* 000668 */ 					var v = __left0__ [1];
/* 000668 */ 					(function () {
/* 000668 */ 						var __accu2__ = __accu1__;
/* 000668 */ 						return __call__ (__accu2__.append, __accu2__, [k, __call__ (list, null, (function () {
/* 000668 */ 							var __accu3__ = v;
/* 000668 */ 							return __call__ (__accu3__.py_keys, __accu3__);
/* 000668 */ 						}) ())]);
/* 000668 */ 					}) ();
/* 000668 */ 				}
/* 000668 */ 				return dict (__accu1__);
/* 000668 */ 			}) (), category, new_context);
/* 000668 */ 		}) ();
/* 000674 */ 		return new_context;
/* 000674 */ 	});}
/* 000674 */ });
/* 000680 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000680 */ 	__module__: __name__,
/* 000693 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000693 */ 		var kwargs = dict ();
/* 000693 */ 		if (arguments.length) {
/* 000693 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000693 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000693 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000693 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000693 */ 					switch (__attrib0__) {
/* 000693 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000693 */ 					}
/* 000693 */ 				}
/* 000693 */ 				delete kwargs.__kwargtrans__;
/* 000693 */ 			}
/* 000693 */ 		}
/* 000693 */ 		else {
/* 000693 */ 		}
/* 000694 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000695 */ 		self.extend_latex_context = extend_latex_context;
/* 000696 */ 		self._fields = tuple (['extend_latex_context', 'set_attributes']);
/* 000696 */ 	});},
/* 000698 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000700 */ 		if (__t__ (self.extend_latex_context)) {
/* 000702 */ 			if (__t__ (self.set_attributes)) {
/* 000703 */ 				var set_attributes = self.set_attributes;
/* 000703 */ 			}
/* 000704 */ 			else {
/* 000705 */ 				var set_attributes = dict ({});
/* 000705 */ 			}
/* 000707 */ 			var latex_context = (function () {
/* 000707 */ 				var __accu0__ = parsing_state.latex_context;
/* 000707 */ 				return __call__ (__accu0__.extended_with, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000707 */ 			}) ();
/* 000712 */ 			return (function () {
/* 000712 */ 				var __accu0__ = parsing_state;
/* 000712 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context}, set_attributes)));
/* 000712 */ 			}) ();
/* 000712 */ 		}
/* 000716 */ 		else if (__t__ (self.set_attributes)) {
/* 000717 */ 			return (function () {
/* 000717 */ 				var __accu0__ = parsing_state;
/* 000717 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000717 */ 			}) ();
/* 000717 */ 		}
/* 000721 */ 		return parsing_state;
/* 000721 */ 	});}
/* 000721 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map