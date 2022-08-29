/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 15:23:28
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000048 */ export var _autogen_category_prefix = '__lctxdb_new_category_';
/* 000053 */ export var LatexContextDb =  __class__ ('LatexContextDb', [object], {
/* 000053 */ 	__module__: __name__,
/* 000100 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000100 */ 		var kwargs = dict ();
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 				delete kwargs.__kwargtrans__;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		__call__ (__call__ (__super__, null, LatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000103 */ 		self.category_list = [];
/* 000104 */ 		self.d = dict ({});
/* 000106 */ 		self.frozen = false;
/* 000110 */ 		self.lookup_chain_maps = dict ({'macros': (function () {
/* 000110 */ 			var __accu0__ = _util;
/* 000110 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000111 */ 		}) (), 'environments': (function () {
/* 000111 */ 			var __accu0__ = _util;
/* 000111 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000112 */ 		}) (), 'specials': (function () {
/* 000112 */ 			var __accu0__ = _util;
/* 000112 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000112 */ 		}) ()});
/* 000115 */ 		self.unknown_macro_spec = null;
/* 000116 */ 		self.unknown_environment_spec = null;
/* 000117 */ 		self.unknown_specials_spec = null;
/* 000119 */ 		self._autogen_category_counter = 0;
/* 000119 */ 	});},
/* 000122 */ 	get freeze () {return __get__ (this, function (self) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000133 */ 		self.frozen = true;
/* 000133 */ 	});},
/* 000136 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000137 */ 		return (function () {
/* 000137 */ 			var __accu0__ = '<LatexContextDb {:#x}{}>';
/* 000138 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (id, null, self), (__t__ (self.frozen) ? '' : ' unfrozen'));
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000143 */ 	get add_context_category () {return __get__ (this, function (self, category, macros, environments, specials, prepend, insert_before, insert_after) {
/* 000143 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var macros = [];
/* 000143 */ 		};
/* 000143 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var environments = [];
/* 000143 */ 		};
/* 000143 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var specials = [];
/* 000143 */ 		};
/* 000143 */ 		if (typeof prepend == 'undefined' || (prepend != null && prepend.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var prepend = false;
/* 000143 */ 		};
/* 000143 */ 		if (typeof insert_before == 'undefined' || (insert_before != null && insert_before.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var insert_before = null;
/* 000143 */ 		};
/* 000143 */ 		if (typeof insert_after == 'undefined' || (insert_after != null && insert_after.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var insert_after = null;
/* 000143 */ 		};
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'prepend': var prepend = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'insert_before': var insert_before = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'insert_after': var insert_after = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000176 */ 		if (__t__ (self.frozen)) {
/* 000177 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000177 */ 			__except0__.__cause__ = null;
/* 000177 */ 			throw __except0__;
/* 000177 */ 		}
/* 000179 */ 		if (__t__ (__t__ (category !== null) && (function () {
/* 000179 */ 			var __accu0__ = category;
/* 000179 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000179 */ 		}) ())) {
/* 000180 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000180 */ 				var __accu0__ = 'Category name {} is unfortunately reserved for internal use';
/* 000180 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000180 */ 			}) ());
/* 000180 */ 			__except0__.__cause__ = null;
/* 000180 */ 			throw __except0__;
/* 000180 */ 		}
/* 000183 */ 		if (__t__ (category === null)) {
/* 000184 */ 			var __left0__ = (function () {
/* 000184 */ 				var __accu0__ = self;
/* 000184 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000184 */ 			}) ();
/* 000184 */ 			var _autogen_category_counter = __left0__ [0];
/* 000184 */ 			var category = __left0__ [1];
/* 000185 */ 			self._autogen_category_counter = __add__ (_autogen_category_counter, 1);
/* 000185 */ 		}
/* 000187 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000188 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000188 */ 				var __accu0__ = 'Category {} is already registered in the context database';
/* 000188 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000188 */ 			}) ());
/* 000188 */ 			__except0__.__cause__ = null;
/* 000188 */ 			throw __except0__;
/* 000188 */ 		}
/* 000192 */ 		if (__t__ (__gt__ (__call__ (len, null, (function () {
/* 000192 */ 			var __accu0__ = [];
/* 000192 */ 			var __iterable0__ = tuple ([prepend, insert_before, insert_after]);
/* 000192 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 				if (__t__ (x)) {
/* 000192 */ 					(function () {
/* 000192 */ 						var __accu1__ = __accu0__;
/* 000192 */ 						return __call__ (__accu1__.append, __accu1__, x);
/* 000192 */ 					}) ();
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 			return __accu0__;
/* 000192 */ 		}) ()), 1))) {
/* 000193 */ 			var __except0__ = __call__ (py_TypeError, null, 'add_context_category(): You may only specify one of prepend=True, insert_before=... or insert_after=...');
/* 000193 */ 			__except0__.__cause__ = null;
/* 000193 */ 			throw __except0__;
/* 000193 */ 		}
/* 000197 */ 		var category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000197 */ 			var __accu0__ = [];
/* 000197 */ 			var __iterable0__ = macros;
/* 000197 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000197 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000197 */ 				(function () {
/* 000197 */ 					var __accu1__ = __accu0__;
/* 000197 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000197 */ 				}) ();
/* 000197 */ 			}
/* 000197 */ 			return __accu0__;
/* 000198 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000198 */ 			var __accu0__ = [];
/* 000198 */ 			var __iterable0__ = environments;
/* 000198 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 				(function () {
/* 000198 */ 					var __accu1__ = __accu0__;
/* 000198 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000198 */ 			return __accu0__;
/* 000199 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000199 */ 			var __accu0__ = [];
/* 000199 */ 			var __iterable0__ = specials;
/* 000199 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 				(function () {
/* 000199 */ 					var __accu1__ = __accu0__;
/* 000199 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000199 */ 				}) ();
/* 000199 */ 			}
/* 000199 */ 			return __accu0__;
/* 000199 */ 		}) ())});
/* 000202 */ 		// pass;
/* 000206 */ 		if (__t__ (prepend)) {
/* 000207 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000207 */ 				if (arguments.length) {
/* 000207 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 							switch (__attrib0__) {
/* 000207 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 							}
/* 000207 */ 						}
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 				else {
/* 000207 */ 				}
/* 000207 */ 				return (function () {
/* 000207 */ 					var __accu0__ = listobj;
/* 000207 */ 					return __call__ (__accu0__.insert, __accu0__, 0, item);
/* 000207 */ 				}) ();
/* 000207 */ 			});
/* 000207 */ 		}
/* 000208 */ 		else if (__t__ (insert_before)) {
/* 000209 */ 			if (__t__ (__in__ (insert_before, self.category_list))) {
/* 000210 */ 				var i = (function () {
/* 000210 */ 					var __accu0__ = self.category_list;
/* 000210 */ 					return __call__ (__accu0__.index, __accu0__, insert_before);
/* 000210 */ 				}) ();
/* 000210 */ 			}
/* 000211 */ 			else {
/* 000212 */ 				var i = 0;
/* 000212 */ 			}
/* 000213 */ 			var insert_fn = (function __lambda__ (listobj, item, i) {
/* 000213 */ 				if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
/* 000213 */ 					var i = i;
/* 000213 */ 				};
/* 000213 */ 				if (arguments.length) {
/* 000213 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 							switch (__attrib0__) {
/* 000213 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 								case 'i': var i = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							}
/* 000213 */ 						}
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 				else {
/* 000213 */ 				}
/* 000213 */ 				return (function () {
/* 000213 */ 					var __accu0__ = listobj;
/* 000213 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000213 */ 				}) ();
/* 000213 */ 			});
/* 000213 */ 		}
/* 000214 */ 		else if (__t__ (insert_after)) {
/* 000215 */ 			if (__t__ (__in__ (insert_after, self.category_list))) {
/* 000216 */ 				var i = __add__ ((function () {
/* 000216 */ 					var __accu0__ = self.category_list;
/* 000216 */ 					return __call__ (__accu0__.index, __accu0__, insert_after);
/* 000216 */ 				}) (), 1);
/* 000216 */ 			}
/* 000217 */ 			else {
/* 000218 */ 				var i = __call__ (len, null, self.category_list);
/* 000218 */ 			}
/* 000219 */ 			var insert_fn = (function __lambda__ (listobj, item, i) {
/* 000219 */ 				if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
/* 000219 */ 					var i = i;
/* 000219 */ 				};
/* 000219 */ 				if (arguments.length) {
/* 000219 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 							switch (__attrib0__) {
/* 000219 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 								case 'i': var i = __allkwargs0__ [__attrib0__]; break;
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
/* 000220 */ 		else {
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
/* 000221 */ 					return __call__ (__accu0__.append, __accu0__, item);
/* 000221 */ 				}) ();
/* 000221 */ 			});
/* 000221 */ 		}
/* 000223 */ 		__call__ (insert_fn, null, self.category_list, category);
/* 000224 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000224 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000225 */ 			__call__ (insert_fn, null, __getitem__ (self.lookup_chain_maps, which).maps, __getitem__ (category_dicts, which));
/* 000225 */ 		}
/* 000227 */ 		__setitem__ (self.d, category, category_dicts);
/* 000227 */ 	});},
/* 000230 */ 	get set_unknown_macro_spec () {return __get__ (this, function (self, macrospec) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000235 */ 		if (__t__ (self.frozen)) {
/* 000236 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000236 */ 			__except0__.__cause__ = null;
/* 000236 */ 			throw __except0__;
/* 000236 */ 		}
/* 000237 */ 		self.unknown_macro_spec = macrospec;
/* 000237 */ 	});},
/* 000239 */ 	get set_unknown_environment_spec () {return __get__ (this, function (self, environmentspec) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000244 */ 		if (__t__ (self.frozen)) {
/* 000245 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000245 */ 			__except0__.__cause__ = null;
/* 000245 */ 			throw __except0__;
/* 000245 */ 		}
/* 000246 */ 		self.unknown_environment_spec = environmentspec;
/* 000246 */ 	});},
/* 000248 */ 	get set_unknown_specials_spec () {return __get__ (this, function (self, specialsspec) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000255 */ 		if (__t__ (self.frozen)) {
/* 000256 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000256 */ 			__except0__.__cause__ = null;
/* 000256 */ 			throw __except0__;
/* 000256 */ 		}
/* 000257 */ 		self.unknown_specials_spec = specialsspec;
/* 000257 */ 	});},
/* 000259 */ 	get categories () {return __get__ (this, function (self) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000264 */ 		return __call__ (list, null, self.category_list);
/* 000264 */ 	});},
/* 000266 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname, raise_if_not_found) {
/* 000266 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var raise_if_not_found = false;
/* 000266 */ 		};
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000280 */ 		try {
/* 000281 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'macros'), macroname);
/* 000281 */ 		}
/* 000281 */ 		catch (__except0__) {
/* 000281 */ 			if (isinstance (__except0__, KeyError)) {
/* 000283 */ 				if (__t__ (raise_if_not_found)) {
/* 000284 */ 					__except0__.__cause__ = null;
/* 000284 */ 					throw __except0__;
/* 000284 */ 				}
/* 000285 */ 				return self.unknown_macro_spec;
/* 000285 */ 			}
/* 000285 */ 			else {
/* 000285 */ 				throw __except0__;
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 	});},
/* 000287 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname, raise_if_not_found) {
/* 000287 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000287 */ 			var raise_if_not_found = false;
/* 000287 */ 		};
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000302 */ 		try {
/* 000303 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'environments'), environmentname);
/* 000303 */ 		}
/* 000303 */ 		catch (__except0__) {
/* 000303 */ 			if (isinstance (__except0__, KeyError)) {
/* 000305 */ 				if (__t__ (raise_if_not_found)) {
/* 000306 */ 					__except0__.__cause__ = null;
/* 000306 */ 					throw __except0__;
/* 000306 */ 				}
/* 000307 */ 				return self.unknown_environment_spec;
/* 000307 */ 			}
/* 000307 */ 			else {
/* 000307 */ 				throw __except0__;
/* 000307 */ 			}
/* 000307 */ 		}
/* 000307 */ 	});},
/* 000309 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars, raise_if_not_found) {
/* 000309 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var raise_if_not_found = false;
/* 000309 */ 		};
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000332 */ 		try {
/* 000333 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'specials'), specials_chars);
/* 000333 */ 		}
/* 000333 */ 		catch (__except0__) {
/* 000333 */ 			if (isinstance (__except0__, KeyError)) {
/* 000335 */ 				if (__t__ (raise_if_not_found)) {
/* 000336 */ 					__except0__.__cause__ = null;
/* 000336 */ 					throw __except0__;
/* 000336 */ 				}
/* 000337 */ 				return self.unknown_specials_spec;
/* 000337 */ 			}
/* 000337 */ 			else {
/* 000337 */ 				throw __except0__;
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 	});},
/* 000339 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000339 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000339 */ 			var parsing_state = null;
/* 000339 */ 		};
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000350 */ 		var best_match_len = 0;
/* 000351 */ 		var best_match_s = null;
/* 000352 */ 		var __iterable0__ = self.category_list;
/* 000352 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000354 */ 			var __iterable1__ = (function () {
/* 000354 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000354 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000354 */ 			}) ();
/* 000354 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000354 */ 				var specials_chars = __getitem__ (__iterable1__, __index1__);
/* 000355 */ 				if (__t__ (__t__ (__gt__ (__call__ (len, null, specials_chars), best_match_len)) && (function () {
/* 000355 */ 					var __accu0__ = s;
/* 000355 */ 					return __call__ (__accu0__.startswith, __accu0__, specials_chars, pos);
/* 000355 */ 				}) ())) {
/* 000356 */ 					var best_match_s = __getitem__ (__getitem__ (__getitem__ (self.d, cat), 'specials'), specials_chars);
/* 000357 */ 					var best_match_len = __call__ (len, null, specials_chars);
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000359 */ 		return best_match_s;
/* 000359 */ 	});},
/* 000361 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000361 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000361 */ 			var categories = null;
/* 000361 */ 		};
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000374 */ 		if (__t__ (categories === null)) {
/* 000375 */ 			var categories = self.category_list;
/* 000375 */ 		}
/* 000377 */ 		var __iterable0__ = categories;
/* 000377 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000378 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000380 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000380 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000380 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000380 */ 				}) ());
/* 000380 */ 				__except0__.__cause__ = null;
/* 000380 */ 				throw __except0__;
/* 000380 */ 			}
/* 000383 */ 			var __iterable1__ = (function () {
/* 000383 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000383 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000383 */ 			}) ();
/* 000383 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000383 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000383 */ 				yield spec;
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		});},
/* 000386 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000386 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000386 */ 			var categories = null;
/* 000386 */ 		};
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000400 */ 		if (__t__ (categories === null)) {
/* 000401 */ 			var categories = self.category_list;
/* 000401 */ 		}
/* 000403 */ 		var __iterable0__ = categories;
/* 000403 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000403 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000404 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000406 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000406 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000406 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000406 */ 				}) ());
/* 000406 */ 				__except0__.__cause__ = null;
/* 000406 */ 				throw __except0__;
/* 000406 */ 			}
/* 000409 */ 			var __iterable1__ = (function () {
/* 000409 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000409 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000409 */ 			}) ();
/* 000409 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000409 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000409 */ 				yield spec;
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		});},
/* 000412 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000412 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000412 */ 			var categories = null;
/* 000412 */ 		};
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000426 */ 		if (__t__ (categories === null)) {
/* 000427 */ 			var categories = self.category_list;
/* 000427 */ 		}
/* 000429 */ 		var __iterable0__ = categories;
/* 000429 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000429 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000430 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000432 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000432 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000432 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000432 */ 				}) ());
/* 000432 */ 				__except0__.__cause__ = null;
/* 000432 */ 				throw __except0__;
/* 000432 */ 			}
/* 000435 */ 			var __iterable1__ = (function () {
/* 000435 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000435 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000435 */ 			}) ();
/* 000435 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000435 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000435 */ 				yield spec;
/* 000435 */ 			}
/* 000435 */ 		}
/* 000435 */ 		});},
/* 000439 */ 	get filter_context () {return __get__ (this, function (self) {
/* 000439 */ 		var kwargs = dict ();
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 				delete kwargs.__kwargtrans__;
/* 000439 */ 			}
/* 000439 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 			var args = tuple ();
/* 000439 */ 		}
/* 000446 */ 		(function () {
/* 000446 */ 			var __accu0__ = _util;
/* 000446 */ 			return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, '`LatexContextDb.filter_context()` was renamed to `filtered_context()`.');
/* 000446 */ 		}) ();
/* 000448 */ 		return (function () {
/* 000448 */ 			var __accu0__ = self;
/* 000448 */ 			return __call__ (__accu0__.filtered_context, __accu0__, ...args, __kwargtrans__ (kwargs));
/* 000448 */ 		}) ();
/* 000448 */ 	});},
/* 000451 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000451 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000451 */ 			var keep_categories = [];
/* 000451 */ 		};
/* 000451 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000451 */ 			var exclude_categories = [];
/* 000451 */ 		};
/* 000451 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000451 */ 			var keep_which = [];
/* 000451 */ 		};
/* 000451 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000451 */ 			var create_class = null;
/* 000451 */ 		};
/* 000451 */ 		if (arguments.length) {
/* 000451 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000451 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000451 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000451 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000451 */ 					switch (__attrib0__) {
/* 000451 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 					}
/* 000451 */ 				}
/* 000451 */ 			}
/* 000451 */ 		}
/* 000451 */ 		else {
/* 000451 */ 		}
/* 000479 */ 		if (__t__ (create_class === null)) {
/* 000480 */ 			var create_class = self.__class__;
/* 000480 */ 		}
/* 000482 */ 		var new_context = __call__ (create_class, null);
/* 000484 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000485 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000486 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000488 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000489 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000490 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000492 */ 		var __iterable0__ = self.category_list;
/* 000492 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000492 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000493 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000493 */ 				continue;
/* 000493 */ 			}
/* 000495 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000495 */ 				continue;
/* 000495 */ 			}
/* 000499 */ 			(function () {
/* 000499 */ 				var __accu0__ = new_context;
/* 000501 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000501 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000501 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000502 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000502 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000502 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000503 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000503 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000503 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000503 */ 				}) () : [])}));
/* 000503 */ 			}) ();
/* 000503 */ 		}
/* 000506 */ 		return new_context;
/* 000506 */ 	});},
/* 000508 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000509 */ 		var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000509 */ 		assert (!__in__ (category, self.category_list));
/* 000511 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000511 */ 	});},
/* 000513 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000513 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000513 */ 			var category = null;
/* 000513 */ 		};
/* 000513 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000513 */ 			var macros = null;
/* 000513 */ 		};
/* 000513 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000513 */ 			var environments = null;
/* 000513 */ 		};
/* 000513 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000513 */ 			var specials = null;
/* 000513 */ 		};
/* 000513 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000513 */ 			var create_class = null;
/* 000513 */ 		};
/* 000513 */ 		var kwargs = dict ();
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 				delete kwargs.__kwargtrans__;
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000527 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000528 */ 			var __except0__ = ValueError;
/* 000528 */ 			__except0__.__cause__ = null;
/* 000528 */ 			throw __except0__;
/* 000528 */ 		}
/* 000530 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000531 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000531 */ 			__except0__.__cause__ = null;
/* 000531 */ 			throw __except0__;
/* 000531 */ 		}
/* 000536 */ 		if (__t__ (create_class === null)) {
/* 000537 */ 			var create_class = self.__class__;
/* 000537 */ 		}
/* 000539 */ 		var new_context = __call__ (create_class, null);
/* 000542 */ 		new_context.unknown_macro_spec = (function () {
/* 000542 */ 			var __accu0__ = kwargs;
/* 000542 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000542 */ 		}) ();
/* 000544 */ 		new_context.unknown_environment_spec = (function () {
/* 000544 */ 			var __accu0__ = kwargs;
/* 000544 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000544 */ 		}) ();
/* 000546 */ 		new_context.unknown_specials_spec = (function () {
/* 000546 */ 			var __accu0__ = kwargs;
/* 000546 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000546 */ 		}) ();
/* 000548 */ 		if (__t__ (__t__ (macros !== null) || __t__ (environments !== null) || specials !== null)) {
/* 000550 */ 			if (__t__ (macros === null)) {
/* 000550 */ 				var macros = [];
/* 000550 */ 			}
/* 000551 */ 			if (__t__ (environments === null)) {
/* 000551 */ 				var environments = [];
/* 000551 */ 			}
/* 000552 */ 			if (__t__ (specials === null)) {
/* 000552 */ 				var specials = [];
/* 000552 */ 			}
/* 000555 */ 			var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000555 */ 				var __accu0__ = [];
/* 000555 */ 				var __iterable0__ = macros;
/* 000555 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000555 */ 					var m = __getitem__ (__iterable0__, __index0__);
/* 000555 */ 					(function () {
/* 000555 */ 						var __accu1__ = __accu0__;
/* 000555 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000555 */ 					}) ();
/* 000555 */ 				}
/* 000555 */ 				return __accu0__;
/* 000556 */ 			}) ()), 'environments': __call__ (dict, null, (function () {
/* 000556 */ 				var __accu0__ = [];
/* 000556 */ 				var __iterable0__ = environments;
/* 000556 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000556 */ 					var e = __getitem__ (__iterable0__, __index0__);
/* 000556 */ 					(function () {
/* 000556 */ 						var __accu1__ = __accu0__;
/* 000556 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000556 */ 					}) ();
/* 000556 */ 				}
/* 000556 */ 				return __accu0__;
/* 000557 */ 			}) ()), 'specials': __call__ (dict, null, (function () {
/* 000557 */ 				var __accu0__ = [];
/* 000557 */ 				var __iterable0__ = specials;
/* 000557 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000557 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000557 */ 					(function () {
/* 000557 */ 						var __accu1__ = __accu0__;
/* 000557 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000557 */ 					}) ();
/* 000557 */ 				}
/* 000557 */ 				return __accu0__;
/* 000557 */ 			}) ())});
/* 000564 */ 			if (__t__ (__t__ (category === null) && __t__ (self.category_list) && (function () {
/* 000564 */ 				var __accu0__ = __getitem__ (self.category_list, 0);
/* 000564 */ 				return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000564 */ 			}) ())) {
/* 000567 */ 				var cat = __getitem__ (self.category_list, 0);
/* 000568 */ 				var dd = __call__ (dict, null, self.d);
/* 000569 */ 				var d_cat = __getitem__ (dd, cat);
/* 000575 */ 				var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros'), __kwargtrans__ (__getitem__ (new_category_dicts, 'macros'))), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments'), __kwargtrans__ (__getitem__ (new_category_dicts, 'environments'))), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'), __kwargtrans__ (__getitem__ (new_category_dicts, 'specials')))}));
/* 000578 */ 				__setitem__ (dd, cat, d_cat);
/* 000579 */ 				new_context.d = dd;
/* 000581 */ 				new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000581 */ 					var __accu0__ = _util;
/* 000581 */ 					return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000585 */ 				}) (), 'environments': (function () {
/* 000585 */ 					var __accu0__ = _util;
/* 000585 */ 					return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000589 */ 				}) (), 'specials': (function () {
/* 000589 */ 					var __accu0__ = _util;
/* 000589 */ 					return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000589 */ 				}) ()});
/* 000594 */ 				new_context._autogen_category_counter = self._autogen_category_counter;
/* 000597 */ 				new_context.frozen = true;
/* 000599 */ 				return new_context;
/* 000599 */ 			}
/* 000601 */ 			if (__t__ (category === null)) {
/* 000602 */ 				var __left0__ = (function () {
/* 000602 */ 					var __accu0__ = self;
/* 000602 */ 					return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000602 */ 				}) ();
/* 000602 */ 				var a = __left0__ [0];
/* 000602 */ 				var category = __left0__ [1];
/* 000603 */ 				new_context._autogen_category_counter = __add__ (a, 1);
/* 000603 */ 			}
/* 000604 */ 			else {
/* 000605 */ 				new_context._autogen_category_counter = self._autogen_category_counter;
/* 000605 */ 			}
/* 000608 */ 			var dd = __call__ (dict, null, self.d);
/* 000609 */ 			__setitem__ (dd, category, new_category_dicts);
/* 000611 */ 			new_context.category_list = __add__ ([category], self.category_list);
/* 000613 */ 			new_context.d = dd;
/* 000618 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000618 */ 				var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000618 */ 				return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000621 */ 			}) (), 'environments': (function () {
/* 000621 */ 				var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000621 */ 				return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000624 */ 			}) (), 'specials': (function () {
/* 000624 */ 				var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000624 */ 				return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000624 */ 			}) ()});
/* 000624 */ 		}
/* 000628 */ 		new_context.frozen = true;
/* 000630 */ 		return new_context;
/* 000630 */ 	});}
/* 000630 */ });
/* 000636 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000636 */ 	__module__: __name__,
/* 000649 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000649 */ 		var kwargs = dict ();
/* 000649 */ 		if (arguments.length) {
/* 000649 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000649 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000649 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000649 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000649 */ 					switch (__attrib0__) {
/* 000649 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000649 */ 					}
/* 000649 */ 				}
/* 000649 */ 				delete kwargs.__kwargtrans__;
/* 000649 */ 			}
/* 000649 */ 		}
/* 000649 */ 		else {
/* 000649 */ 		}
/* 000650 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000651 */ 		self.extend_latex_context = extend_latex_context;
/* 000652 */ 		self._fields = tuple (['extend_latex_context', 'set_attributes']);
/* 000652 */ 	});},
/* 000654 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000654 */ 		if (arguments.length) {
/* 000654 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000654 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000654 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000654 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000654 */ 					switch (__attrib0__) {
/* 000654 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000654 */ 					}
/* 000654 */ 				}
/* 000654 */ 			}
/* 000654 */ 		}
/* 000654 */ 		else {
/* 000654 */ 		}
/* 000656 */ 		if (__t__ (self.extend_latex_context)) {
/* 000658 */ 			if (__t__ (self.set_attributes)) {
/* 000659 */ 				var set_attributes = self.set_attributes;
/* 000659 */ 			}
/* 000660 */ 			else {
/* 000661 */ 				var set_attributes = dict ({});
/* 000661 */ 			}
/* 000663 */ 			return (function () {
/* 000663 */ 				var __accu0__ = parsing_state;
/* 000664 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: (function () {
/* 000664 */ 					var __accu1__ = parsing_state.latex_context;
/* 000664 */ 					return __call__ (__accu1__.extended_with, __accu1__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000664 */ 				}) ()}, set_attributes)));
/* 000664 */ 			}) ();
/* 000664 */ 		}
/* 000670 */ 		else if (__t__ (self.set_attributes)) {
/* 000671 */ 			return (function () {
/* 000671 */ 				var __accu0__ = parsing_state;
/* 000671 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000671 */ 			}) ();
/* 000671 */ 		}
/* 000675 */ 		return parsing_state;
/* 000675 */ 	});}
/* 000675 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map