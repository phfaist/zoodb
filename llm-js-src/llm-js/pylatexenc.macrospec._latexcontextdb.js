/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:15
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
/* 000375 */ 					// pass;
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000379 */ 		return best_match_s;
/* 000379 */ 	});},
/* 000381 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000381 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000381 */ 			var categories = null;
/* 000381 */ 		};
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000394 */ 		if (__t__ (categories === null)) {
/* 000395 */ 			var categories = self.category_list;
/* 000395 */ 		}
/* 000397 */ 		var __iterable0__ = categories;
/* 000397 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000397 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000398 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000400 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000400 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000400 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000400 */ 				}) ());
/* 000400 */ 				__except0__.__cause__ = null;
/* 000400 */ 				throw __except0__;
/* 000400 */ 			}
/* 000403 */ 			var __iterable1__ = (function () {
/* 000403 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000403 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000403 */ 			}) ();
/* 000403 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000403 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000403 */ 				yield spec;
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		});},
/* 000406 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000406 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000406 */ 			var categories = null;
/* 000406 */ 		};
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000420 */ 		if (__t__ (categories === null)) {
/* 000421 */ 			var categories = self.category_list;
/* 000421 */ 		}
/* 000423 */ 		var __iterable0__ = categories;
/* 000423 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000423 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000424 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000426 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000426 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000426 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000426 */ 				}) ());
/* 000426 */ 				__except0__.__cause__ = null;
/* 000426 */ 				throw __except0__;
/* 000426 */ 			}
/* 000429 */ 			var __iterable1__ = (function () {
/* 000429 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000429 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000429 */ 			}) ();
/* 000429 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000429 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000429 */ 				yield spec;
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		});},
/* 000432 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000432 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000432 */ 			var categories = null;
/* 000432 */ 		};
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000446 */ 		if (__t__ (categories === null)) {
/* 000447 */ 			var categories = self.category_list;
/* 000447 */ 		}
/* 000449 */ 		var __iterable0__ = categories;
/* 000449 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000449 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000450 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000452 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000452 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000452 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000452 */ 				}) ());
/* 000452 */ 				__except0__.__cause__ = null;
/* 000452 */ 				throw __except0__;
/* 000452 */ 			}
/* 000455 */ 			var __iterable1__ = (function () {
/* 000455 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000455 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000455 */ 			}) ();
/* 000455 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000455 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000455 */ 				yield spec;
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		});},
/* 000459 */ 	get filter_context () {return __get__ (this, function (self) {
/* 000459 */ 		var kwargs = dict ();
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 				delete kwargs.__kwargtrans__;
/* 000459 */ 			}
/* 000459 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 			var args = tuple ();
/* 000459 */ 		}
/* 000466 */ 		(function () {
/* 000466 */ 			var __accu0__ = _util;
/* 000466 */ 			return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, '`LatexContextDb.filter_context()` was renamed to `filtered_context()`.');
/* 000466 */ 		}) ();
/* 000468 */ 		return (function () {
/* 000468 */ 			var __accu0__ = self;
/* 000468 */ 			return __call__ (__accu0__.filtered_context, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000468 */ 		}) ();
/* 000468 */ 	});},
/* 000471 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000471 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000471 */ 			var keep_categories = [];
/* 000471 */ 		};
/* 000471 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000471 */ 			var exclude_categories = [];
/* 000471 */ 		};
/* 000471 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000471 */ 			var keep_which = [];
/* 000471 */ 		};
/* 000471 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000471 */ 			var create_class = null;
/* 000471 */ 		};
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000499 */ 		if (__t__ (create_class === null)) {
/* 000500 */ 			var create_class = self.__class__;
/* 000500 */ 		}
/* 000502 */ 		var new_context = __call__ (create_class, null);
/* 000504 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000505 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000506 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000508 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000509 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000510 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000512 */ 		var __iterable0__ = self.category_list;
/* 000512 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000512 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000513 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000513 */ 				continue;
/* 000513 */ 			}
/* 000515 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000515 */ 				continue;
/* 000515 */ 			}
/* 000519 */ 			(function () {
/* 000519 */ 				var __accu0__ = new_context;
/* 000521 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000521 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000521 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000522 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000522 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000522 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000523 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000523 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000523 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000523 */ 				}) () : [])}));
/* 000523 */ 			}) ();
/* 000523 */ 		}
/* 000526 */ 		return new_context;
/* 000526 */ 	});},
/* 000528 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000529 */ 		while (__t__ (true)) {
/* 000530 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000531 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000531 */ 				break;
/* 000531 */ 			}
/* 000533 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000533 */ 		}
/* 000535 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000535 */ 	});},
/* 000537 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000537 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000537 */ 			var category = null;
/* 000537 */ 		};
/* 000537 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000537 */ 			var macros = null;
/* 000537 */ 		};
/* 000537 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000537 */ 			var environments = null;
/* 000537 */ 		};
/* 000537 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000537 */ 			var specials = null;
/* 000537 */ 		};
/* 000537 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000537 */ 			var create_class = null;
/* 000537 */ 		};
/* 000537 */ 		var kwargs = dict ();
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 				delete kwargs.__kwargtrans__;
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000551 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000552 */ 			var __except0__ = ValueError;
/* 000552 */ 			__except0__.__cause__ = null;
/* 000552 */ 			throw __except0__;
/* 000552 */ 		}
/* 000554 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000555 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000555 */ 			__except0__.__cause__ = null;
/* 000555 */ 			throw __except0__;
/* 000555 */ 		}
/* 000560 */ 		if (__t__ (create_class === null)) {
/* 000561 */ 			var create_class = self.__class__;
/* 000561 */ 		}
/* 000563 */ 		var new_context = __call__ (create_class, null);
/* 000566 */ 		new_context.unknown_macro_spec = (function () {
/* 000566 */ 			var __accu0__ = kwargs;
/* 000566 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000566 */ 		}) ();
/* 000568 */ 		new_context.unknown_environment_spec = (function () {
/* 000568 */ 			var __accu0__ = kwargs;
/* 000568 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000568 */ 		}) ();
/* 000570 */ 		new_context.unknown_specials_spec = (function () {
/* 000570 */ 			var __accu0__ = kwargs;
/* 000570 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000570 */ 		}) ();
/* 000572 */ 		if (__t__ (macros === null)) {
/* 000572 */ 			var macros = [];
/* 000572 */ 		}
/* 000573 */ 		if (__t__ (environments === null)) {
/* 000573 */ 			var environments = [];
/* 000573 */ 		}
/* 000574 */ 		if (__t__ (specials === null)) {
/* 000574 */ 			var specials = [];
/* 000574 */ 		}
/* 000577 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000577 */ 			var __accu0__ = [];
/* 000577 */ 			var __iterable0__ = macros;
/* 000577 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000577 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000577 */ 				(function () {
/* 000577 */ 					var __accu1__ = __accu0__;
/* 000577 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000577 */ 				}) ();
/* 000577 */ 			}
/* 000577 */ 			return __accu0__;
/* 000578 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000578 */ 			var __accu0__ = [];
/* 000578 */ 			var __iterable0__ = environments;
/* 000578 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000578 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000578 */ 				(function () {
/* 000578 */ 					var __accu1__ = __accu0__;
/* 000578 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000578 */ 				}) ();
/* 000578 */ 			}
/* 000578 */ 			return __accu0__;
/* 000579 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000579 */ 			var __accu0__ = [];
/* 000579 */ 			var __iterable0__ = specials;
/* 000579 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000579 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000579 */ 				(function () {
/* 000579 */ 					var __accu1__ = __accu0__;
/* 000579 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000579 */ 				}) ();
/* 000579 */ 			}
/* 000579 */ 			return __accu0__;
/* 000579 */ 		}) ())});
/* 000582 */ 		new_context.category_list = self.category_list;
/* 000591 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000591 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000591 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000591 */ 		}) ())) {
/* 000594 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000595 */ 			var dd = __call__ (dict, null, self.d);
/* 000596 */ 			var d_cat = __getitem__ (dd, cat);
/* 000605 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000607 */ 			(function () {
/* 000607 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000607 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000607 */ 			}) ();
/* 000608 */ 			(function () {
/* 000608 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000608 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000608 */ 			}) ();
/* 000609 */ 			(function () {
/* 000609 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000609 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000609 */ 			}) ();
/* 000612 */ 			__setitem__ (dd, cat, d_cat);
/* 000613 */ 			new_context.d = dd;
/* 000615 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000615 */ 				var __accu0__ = _util;
/* 000615 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000619 */ 			}) (), 'environments': (function () {
/* 000619 */ 				var __accu0__ = _util;
/* 000619 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000623 */ 			}) (), 'specials': (function () {
/* 000623 */ 				var __accu0__ = _util;
/* 000623 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000623 */ 			}) ()});
/* 000628 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000631 */ 			new_context.frozen = true;
/* 000632 */ 			// pass;
/* 000641 */ 			return new_context;
/* 000641 */ 		}
/* 000643 */ 		if (__t__ (category === null)) {
/* 000644 */ 			var __left0__ = (function () {
/* 000644 */ 				var __accu0__ = self;
/* 000644 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000644 */ 			}) ();
/* 000644 */ 			var a = __left0__ [0];
/* 000644 */ 			var category = __left0__ [1];
/* 000645 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000645 */ 		}
/* 000646 */ 		else {
/* 000647 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000647 */ 		}
/* 000650 */ 		var dd = __call__ (dict, null, self.d);
/* 000651 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000653 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000655 */ 		new_context.d = dd;
/* 000663 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000663 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000663 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000666 */ 		}) (), 'environments': (function () {
/* 000666 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000666 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000669 */ 		}) (), 'specials': (function () {
/* 000669 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000669 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000669 */ 		}) ()});
/* 000673 */ 		new_context.frozen = true;
/* 000675 */ 		// pass;
/* 000686 */ 		return new_context;
/* 000686 */ 	});}
/* 000686 */ });
/* 000692 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000692 */ 	__module__: __name__,
/* 000705 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000705 */ 		var kwargs = dict ();
/* 000705 */ 		if (arguments.length) {
/* 000705 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 					switch (__attrib0__) {
/* 000705 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 				delete kwargs.__kwargtrans__;
/* 000705 */ 			}
/* 000705 */ 		}
/* 000705 */ 		else {
/* 000705 */ 		}
/* 000706 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000707 */ 		self.extend_latex_context = extend_latex_context;
/* 000708 */ 		self._fields = tuple (['extend_latex_context', 'set_attributes']);
/* 000708 */ 	});},
/* 000710 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000710 */ 		if (arguments.length) {
/* 000710 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000710 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000710 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000710 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000710 */ 					switch (__attrib0__) {
/* 000710 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 					}
/* 000710 */ 				}
/* 000710 */ 			}
/* 000710 */ 		}
/* 000710 */ 		else {
/* 000710 */ 		}
/* 000712 */ 		if (__t__ (self.extend_latex_context)) {
/* 000714 */ 			if (__t__ (self.set_attributes)) {
/* 000715 */ 				var set_attributes = self.set_attributes;
/* 000715 */ 			}
/* 000716 */ 			else {
/* 000717 */ 				var set_attributes = dict ({});
/* 000717 */ 			}
/* 000719 */ 			return (function () {
/* 000719 */ 				var __accu0__ = parsing_state;
/* 000720 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: (function () {
/* 000720 */ 					var __accu1__ = parsing_state.latex_context;
/* 000720 */ 					return __call__ (__accu1__.extended_with, __accu1__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000720 */ 				}) ()}, set_attributes)));
/* 000720 */ 			}) ();
/* 000720 */ 		}
/* 000726 */ 		else if (__t__ (self.set_attributes)) {
/* 000727 */ 			return (function () {
/* 000727 */ 				var __accu0__ = parsing_state;
/* 000727 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000727 */ 			}) ();
/* 000727 */ 		}
/* 000731 */ 		return parsing_state;
/* 000731 */ 	});}
/* 000731 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map