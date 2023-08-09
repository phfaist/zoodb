/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 23:31:49
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
/* 000210 */ 		// pass;
/* 000214 */ 		if (__t__ (prepend)) {
/* 000215 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000215 */ 				if (arguments.length) {
/* 000215 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 							switch (__attrib0__) {
/* 000215 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 							}
/* 000215 */ 						}
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 				else {
/* 000215 */ 				}
/* 000215 */ 				return (function () {
/* 000215 */ 					var __accu0__ = listobj;
/* 000215 */ 					return __call__ (__accu0__.insert, __accu0__, 0, item);
/* 000215 */ 				}) ();
/* 000215 */ 			});
/* 000215 */ 		}
/* 000216 */ 		else if (__t__ (insert_before)) {
/* 000217 */ 			if (__t__ (__in__ (insert_before, self.category_list))) {
/* 000218 */ 				var i = (function () {
/* 000218 */ 					var __accu0__ = self.category_list;
/* 000218 */ 					return __call__ (__accu0__.index, __accu0__, insert_before);
/* 000218 */ 				}) ();
/* 000218 */ 			}
/* 000219 */ 			else {
/* 000220 */ 				var i = 0;
/* 000220 */ 			}
/* 000221 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000221 */ 				if (arguments.length) {
/* 000221 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 							switch (__attrib0__) {
/* 000221 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 							}
/* 000221 */ 						}
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 				else {
/* 000221 */ 				}
/* 000221 */ 				return (function () {
/* 000221 */ 					var __accu0__ = listobj;
/* 000221 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000221 */ 				}) ();
/* 000221 */ 			});
/* 000221 */ 		}
/* 000222 */ 		else if (__t__ (insert_after)) {
/* 000223 */ 			if (__t__ (__in__ (insert_after, self.category_list))) {
/* 000224 */ 				var i = __add__ ((function () {
/* 000224 */ 					var __accu0__ = self.category_list;
/* 000224 */ 					return __call__ (__accu0__.index, __accu0__, insert_after);
/* 000224 */ 				}) (), 1);
/* 000224 */ 			}
/* 000225 */ 			else {
/* 000226 */ 				var i = __call__ (len, null, self.category_list);
/* 000226 */ 			}
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
/* 000227 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000227 */ 				}) ();
/* 000227 */ 			});
/* 000227 */ 		}
/* 000228 */ 		else {
/* 000229 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000229 */ 				if (arguments.length) {
/* 000229 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 							switch (__attrib0__) {
/* 000229 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 							}
/* 000229 */ 						}
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 				else {
/* 000229 */ 				}
/* 000229 */ 				return (function () {
/* 000229 */ 					var __accu0__ = listobj;
/* 000229 */ 					return __call__ (__accu0__.append, __accu0__, item);
/* 000229 */ 				}) ();
/* 000229 */ 			});
/* 000229 */ 		}
/* 000231 */ 		__call__ (insert_fn, null, self.category_list, category);
/* 000232 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000232 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000232 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000233 */ 			__call__ (insert_fn, null, __getitem__ (self.lookup_chain_maps, which).maps, __getitem__ (category_dicts, which));
/* 000233 */ 		}
/* 000235 */ 		__setitem__ (self.d, category, category_dicts);
/* 000235 */ 	});},
/* 000238 */ 	get set_unknown_macro_spec () {return __get__ (this, function (self, macrospec) {
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000243 */ 		if (__t__ (self.frozen)) {
/* 000244 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000244 */ 			__except0__.__cause__ = null;
/* 000244 */ 			throw __except0__;
/* 000244 */ 		}
/* 000245 */ 		self.unknown_macro_spec = macrospec;
/* 000245 */ 	});},
/* 000247 */ 	get set_unknown_environment_spec () {return __get__ (this, function (self, environmentspec) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000252 */ 		if (__t__ (self.frozen)) {
/* 000253 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000253 */ 			__except0__.__cause__ = null;
/* 000253 */ 			throw __except0__;
/* 000253 */ 		}
/* 000254 */ 		self.unknown_environment_spec = environmentspec;
/* 000254 */ 	});},
/* 000256 */ 	get set_unknown_specials_spec () {return __get__ (this, function (self, specialsspec) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000263 */ 		if (__t__ (self.frozen)) {
/* 000264 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000264 */ 			__except0__.__cause__ = null;
/* 000264 */ 			throw __except0__;
/* 000264 */ 		}
/* 000265 */ 		self.unknown_specials_spec = specialsspec;
/* 000265 */ 	});},
/* 000267 */ 	get categories () {return __get__ (this, function (self) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000272 */ 		return __call__ (list, null, self.category_list);
/* 000272 */ 	});},
/* 000274 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname, raise_if_not_found) {
/* 000274 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000274 */ 			var raise_if_not_found = false;
/* 000274 */ 		};
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000288 */ 		try {
/* 000289 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'macros'), macroname);
/* 000289 */ 		}
/* 000289 */ 		catch (__except0__) {
/* 000289 */ 			if (isinstance (__except0__, KeyError)) {
/* 000291 */ 				if (__t__ (raise_if_not_found)) {
/* 000292 */ 					__except0__.__cause__ = null;
/* 000292 */ 					throw __except0__;
/* 000292 */ 				}
/* 000293 */ 				return self.unknown_macro_spec;
/* 000293 */ 			}
/* 000293 */ 			else {
/* 000293 */ 				throw __except0__;
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 	});},
/* 000295 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname, raise_if_not_found) {
/* 000295 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000295 */ 			var raise_if_not_found = false;
/* 000295 */ 		};
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000310 */ 		try {
/* 000311 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'environments'), environmentname);
/* 000311 */ 		}
/* 000311 */ 		catch (__except0__) {
/* 000311 */ 			if (isinstance (__except0__, KeyError)) {
/* 000313 */ 				if (__t__ (raise_if_not_found)) {
/* 000314 */ 					__except0__.__cause__ = null;
/* 000314 */ 					throw __except0__;
/* 000314 */ 				}
/* 000315 */ 				return self.unknown_environment_spec;
/* 000315 */ 			}
/* 000315 */ 			else {
/* 000315 */ 				throw __except0__;
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 	});},
/* 000317 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars, raise_if_not_found) {
/* 000317 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var raise_if_not_found = false;
/* 000317 */ 		};
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000340 */ 		try {
/* 000341 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'specials'), specials_chars);
/* 000341 */ 		}
/* 000341 */ 		catch (__except0__) {
/* 000341 */ 			if (isinstance (__except0__, KeyError)) {
/* 000343 */ 				if (__t__ (raise_if_not_found)) {
/* 000344 */ 					__except0__.__cause__ = null;
/* 000344 */ 					throw __except0__;
/* 000344 */ 				}
/* 000345 */ 				return self.unknown_specials_spec;
/* 000345 */ 			}
/* 000345 */ 			else {
/* 000345 */ 				throw __except0__;
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 	});},
/* 000347 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000347 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000347 */ 			var parsing_state = null;
/* 000347 */ 		};
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000358 */ 		var best_match_len = 0;
/* 000359 */ 		var best_match_s = null;
/* 000361 */ 		// pass;
/* 000365 */ 		var __iterable0__ = self.category_list;
/* 000365 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000367 */ 			var __iterable1__ = (function () {
/* 000367 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000367 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000367 */ 			}) ();
/* 000367 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000367 */ 				var specials_chars = __getitem__ (__iterable1__, __index1__);
/* 000368 */ 				// pass;
/* 000372 */ 				if (__t__ (__t__ (__gt__ (__call__ (len, null, specials_chars), best_match_len)) && (function () {
/* 000372 */ 					var __accu0__ = s;
/* 000372 */ 					return __call__ (__accu0__.startswith, __accu0__, specials_chars, pos);
/* 000372 */ 				}) ())) {
/* 000373 */ 					var best_match_s = __getitem__ (__getitem__ (__getitem__ (self.d, cat), 'specials'), specials_chars);
/* 000374 */ 					var best_match_len = __call__ (len, null, specials_chars);
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000378 */ 		return best_match_s;
/* 000378 */ 	});},
/* 000380 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000380 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var categories = null;
/* 000380 */ 		};
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000393 */ 		if (__t__ (categories === null)) {
/* 000394 */ 			var categories = self.category_list;
/* 000394 */ 		}
/* 000396 */ 		var __iterable0__ = categories;
/* 000396 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000396 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000397 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000399 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000399 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000399 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000399 */ 				}) ());
/* 000399 */ 				__except0__.__cause__ = null;
/* 000399 */ 				throw __except0__;
/* 000399 */ 			}
/* 000402 */ 			var __iterable1__ = (function () {
/* 000402 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000402 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000402 */ 			}) ();
/* 000402 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000402 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000402 */ 				yield spec;
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		});},
/* 000405 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000405 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000405 */ 			var categories = null;
/* 000405 */ 		};
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000419 */ 		if (__t__ (categories === null)) {
/* 000420 */ 			var categories = self.category_list;
/* 000420 */ 		}
/* 000422 */ 		var __iterable0__ = categories;
/* 000422 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000422 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000423 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000425 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000425 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000425 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000425 */ 				}) ());
/* 000425 */ 				__except0__.__cause__ = null;
/* 000425 */ 				throw __except0__;
/* 000425 */ 			}
/* 000428 */ 			var __iterable1__ = (function () {
/* 000428 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000428 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000428 */ 			}) ();
/* 000428 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000428 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000428 */ 				yield spec;
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		});},
/* 000431 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000431 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000431 */ 			var categories = null;
/* 000431 */ 		};
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000445 */ 		if (__t__ (categories === null)) {
/* 000446 */ 			var categories = self.category_list;
/* 000446 */ 		}
/* 000448 */ 		var __iterable0__ = categories;
/* 000448 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000448 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000449 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000451 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000451 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000451 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000451 */ 				}) ());
/* 000451 */ 				__except0__.__cause__ = null;
/* 000451 */ 				throw __except0__;
/* 000451 */ 			}
/* 000454 */ 			var __iterable1__ = (function () {
/* 000454 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000454 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000454 */ 			}) ();
/* 000454 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000454 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000454 */ 				yield spec;
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		});},
/* 000475 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000475 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000475 */ 			var keep_categories = [];
/* 000475 */ 		};
/* 000475 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000475 */ 			var exclude_categories = [];
/* 000475 */ 		};
/* 000475 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000475 */ 			var keep_which = [];
/* 000475 */ 		};
/* 000475 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000475 */ 			var create_class = null;
/* 000475 */ 		};
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000508 */ 		if (__t__ (create_class === null)) {
/* 000509 */ 			var create_class = self.__class__;
/* 000509 */ 		}
/* 000511 */ 		var new_context = __call__ (create_class, null);
/* 000513 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000514 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000515 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000517 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000518 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000519 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000521 */ 		var __iterable0__ = self.category_list;
/* 000521 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000521 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000522 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000522 */ 				continue;
/* 000522 */ 			}
/* 000524 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000524 */ 				continue;
/* 000524 */ 			}
/* 000528 */ 			(function () {
/* 000528 */ 				var __accu0__ = new_context;
/* 000530 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000530 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000530 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000531 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000531 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000531 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000532 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000532 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000532 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000532 */ 				}) () : [])}));
/* 000532 */ 			}) ();
/* 000532 */ 		}
/* 000535 */ 		return new_context;
/* 000535 */ 	});},
/* 000537 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000538 */ 		while (__t__ (true)) {
/* 000539 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000540 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000540 */ 				break;
/* 000540 */ 			}
/* 000542 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000542 */ 		}
/* 000544 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000544 */ 	});},
/* 000546 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000546 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000546 */ 			var category = null;
/* 000546 */ 		};
/* 000546 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000546 */ 			var macros = null;
/* 000546 */ 		};
/* 000546 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000546 */ 			var environments = null;
/* 000546 */ 		};
/* 000546 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000546 */ 			var specials = null;
/* 000546 */ 		};
/* 000546 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000546 */ 			var create_class = null;
/* 000546 */ 		};
/* 000546 */ 		var kwargs = dict ();
/* 000546 */ 		if (arguments.length) {
/* 000546 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000546 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000546 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000546 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000546 */ 					switch (__attrib0__) {
/* 000546 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000546 */ 					}
/* 000546 */ 				}
/* 000546 */ 				delete kwargs.__kwargtrans__;
/* 000546 */ 			}
/* 000546 */ 		}
/* 000546 */ 		else {
/* 000546 */ 		}
/* 000560 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000561 */ 			var __except0__ = ValueError;
/* 000561 */ 			__except0__.__cause__ = null;
/* 000561 */ 			throw __except0__;
/* 000561 */ 		}
/* 000563 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000564 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000564 */ 			__except0__.__cause__ = null;
/* 000564 */ 			throw __except0__;
/* 000564 */ 		}
/* 000569 */ 		if (__t__ (create_class === null)) {
/* 000570 */ 			var create_class = self.__class__;
/* 000570 */ 		}
/* 000572 */ 		var new_context = __call__ (create_class, null);
/* 000575 */ 		new_context.unknown_macro_spec = (function () {
/* 000575 */ 			var __accu0__ = kwargs;
/* 000575 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000575 */ 		}) ();
/* 000577 */ 		new_context.unknown_environment_spec = (function () {
/* 000577 */ 			var __accu0__ = kwargs;
/* 000577 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000577 */ 		}) ();
/* 000579 */ 		new_context.unknown_specials_spec = (function () {
/* 000579 */ 			var __accu0__ = kwargs;
/* 000579 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000579 */ 		}) ();
/* 000581 */ 		if (__t__ (macros === null)) {
/* 000581 */ 			var macros = [];
/* 000581 */ 		}
/* 000582 */ 		if (__t__ (environments === null)) {
/* 000582 */ 			var environments = [];
/* 000582 */ 		}
/* 000583 */ 		if (__t__ (specials === null)) {
/* 000583 */ 			var specials = [];
/* 000583 */ 		}
/* 000586 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000586 */ 			var __accu0__ = [];
/* 000586 */ 			var __iterable0__ = macros;
/* 000586 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000586 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000586 */ 				(function () {
/* 000586 */ 					var __accu1__ = __accu0__;
/* 000586 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000586 */ 				}) ();
/* 000586 */ 			}
/* 000586 */ 			return __accu0__;
/* 000587 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000587 */ 			var __accu0__ = [];
/* 000587 */ 			var __iterable0__ = environments;
/* 000587 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000587 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000587 */ 				(function () {
/* 000587 */ 					var __accu1__ = __accu0__;
/* 000587 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000587 */ 				}) ();
/* 000587 */ 			}
/* 000587 */ 			return __accu0__;
/* 000588 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000588 */ 			var __accu0__ = [];
/* 000588 */ 			var __iterable0__ = specials;
/* 000588 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000588 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000588 */ 				(function () {
/* 000588 */ 					var __accu1__ = __accu0__;
/* 000588 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000588 */ 				}) ();
/* 000588 */ 			}
/* 000588 */ 			return __accu0__;
/* 000588 */ 		}) ())});
/* 000591 */ 		new_context.category_list = self.category_list;
/* 000600 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000600 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000600 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000600 */ 		}) ())) {
/* 000603 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000604 */ 			var dd = __call__ (dict, null, self.d);
/* 000605 */ 			var d_cat = __getitem__ (dd, cat);
/* 000614 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000616 */ 			(function () {
/* 000616 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000616 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000616 */ 			}) ();
/* 000617 */ 			(function () {
/* 000617 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000617 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000617 */ 			}) ();
/* 000618 */ 			(function () {
/* 000618 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000618 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000618 */ 			}) ();
/* 000621 */ 			__setitem__ (dd, cat, d_cat);
/* 000622 */ 			new_context.d = dd;
/* 000624 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000624 */ 				var __accu0__ = _util;
/* 000624 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000628 */ 			}) (), 'environments': (function () {
/* 000628 */ 				var __accu0__ = _util;
/* 000628 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000632 */ 			}) (), 'specials': (function () {
/* 000632 */ 				var __accu0__ = _util;
/* 000632 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000632 */ 			}) ()});
/* 000637 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000640 */ 			new_context.frozen = true;
/* 000641 */ 			// pass;
/* 000650 */ 			return new_context;
/* 000650 */ 		}
/* 000652 */ 		if (__t__ (category === null)) {
/* 000653 */ 			var __left0__ = (function () {
/* 000653 */ 				var __accu0__ = self;
/* 000653 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000653 */ 			}) ();
/* 000653 */ 			var a = __left0__ [0];
/* 000653 */ 			var category = __left0__ [1];
/* 000654 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000654 */ 		}
/* 000655 */ 		else {
/* 000656 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000656 */ 		}
/* 000659 */ 		var dd = __call__ (dict, null, self.d);
/* 000660 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000662 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000664 */ 		new_context.d = dd;
/* 000672 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000672 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000672 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000675 */ 		}) (), 'environments': (function () {
/* 000675 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000675 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000678 */ 		}) (), 'specials': (function () {
/* 000678 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000678 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000678 */ 		}) ()});
/* 000682 */ 		new_context.frozen = true;
/* 000684 */ 		// pass;
/* 000695 */ 		return new_context;
/* 000695 */ 	});}
/* 000695 */ });
/* 000701 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000701 */ 	__module__: __name__,
/* 000714 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000714 */ 		var kwargs = dict ();
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 				delete kwargs.__kwargtrans__;
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000715 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['extend_latex_context', 'set_attributes'])}, kwargs)));
/* 000719 */ 		self.extend_latex_context = extend_latex_context;
/* 000719 */ 	});},
/* 000721 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000721 */ 		if (arguments.length) {
/* 000721 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000721 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000721 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000721 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000721 */ 					switch (__attrib0__) {
/* 000721 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 					}
/* 000721 */ 				}
/* 000721 */ 			}
/* 000721 */ 		}
/* 000721 */ 		else {
/* 000721 */ 		}
/* 000723 */ 		if (__t__ (self.extend_latex_context)) {
/* 000725 */ 			if (__t__ (self.set_attributes)) {
/* 000726 */ 				var set_attributes = self.set_attributes;
/* 000726 */ 			}
/* 000727 */ 			else {
/* 000728 */ 				var set_attributes = dict ({});
/* 000728 */ 			}
/* 000730 */ 			var latex_context = (function () {
/* 000730 */ 				var __accu0__ = parsing_state.latex_context;
/* 000730 */ 				return __call__ (__accu0__.extended_with, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000730 */ 			}) ();
/* 000735 */ 			return (function () {
/* 000735 */ 				var __accu0__ = parsing_state;
/* 000735 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context}, set_attributes)));
/* 000735 */ 			}) ();
/* 000735 */ 		}
/* 000739 */ 		else if (__t__ (self.set_attributes)) {
/* 000740 */ 			return (function () {
/* 000740 */ 				var __accu0__ = parsing_state;
/* 000740 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000740 */ 			}) ();
/* 000740 */ 		}
/* 000744 */ 		return parsing_state;
/* 000744 */ 	});}
/* 000744 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map