/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:41
/* 000037 */ var logging = {};
/* 000037 */ var unique_object_id = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000110 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000110 */ 		var kwargs = dict ();
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 				delete kwargs.__kwargtrans__;
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		__call__ (__call__ (__super__, null, LatexContextDb, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000113 */ 		self.category_list = [];
/* 000114 */ 		self.d = dict ({});
/* 000116 */ 		self.frozen = false;
/* 000120 */ 		self.lookup_chain_maps = dict ({'macros': (function () {
/* 000120 */ 			var __accu0__ = _util;
/* 000120 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000121 */ 		}) (), 'environments': (function () {
/* 000121 */ 			var __accu0__ = _util;
/* 000121 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000122 */ 		}) (), 'specials': (function () {
/* 000122 */ 			var __accu0__ = _util;
/* 000122 */ 			return __call__ (__accu0__.ChainMap, __accu0__, dict ({}));
/* 000122 */ 		}) ()});
/* 000125 */ 		self.unknown_macro_spec = null;
/* 000126 */ 		self.unknown_environment_spec = null;
/* 000127 */ 		self.unknown_specials_spec = null;
/* 000129 */ 		self._autogen_category_counter = 0;
/* 000129 */ 	});},
/* 000132 */ 	get freeze () {return __get__ (this, function (self) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000143 */ 		self.frozen = true;
/* 000143 */ 	});},
/* 000146 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		return (function () {
/* 000147 */ 			var __accu0__ = '<LatexContextDb {:#x}{}>';
/* 000148 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self), (__t__ (self.frozen) ? '' : ' unfrozen'));
/* 000148 */ 		}) ();
/* 000148 */ 	});},
/* 000153 */ 	get add_context_category () {return __get__ (this, function (self, category, macros, environments, specials, prepend, insert_before, insert_after) {
/* 000153 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var macros = [];
/* 000153 */ 		};
/* 000153 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var environments = [];
/* 000153 */ 		};
/* 000153 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var specials = [];
/* 000153 */ 		};
/* 000153 */ 		if (typeof prepend == 'undefined' || (prepend != null && prepend.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var prepend = false;
/* 000153 */ 		};
/* 000153 */ 		if (typeof insert_before == 'undefined' || (insert_before != null && insert_before.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var insert_before = null;
/* 000153 */ 		};
/* 000153 */ 		if (typeof insert_after == 'undefined' || (insert_after != null && insert_after.hasOwnProperty ("__kwargtrans__"))) {;
/* 000153 */ 			var insert_after = null;
/* 000153 */ 		};
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'prepend': var prepend = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'insert_before': var insert_before = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'insert_after': var insert_after = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000186 */ 		if (__t__ (self.frozen)) {
/* 000187 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000187 */ 			__except0__.__cause__ = null;
/* 000187 */ 			throw __except0__;
/* 000187 */ 		}
/* 000189 */ 		if (__t__ (__t__ (category !== null) && (function () {
/* 000189 */ 			var __accu0__ = category;
/* 000189 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000189 */ 		}) ())) {
/* 000190 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000190 */ 				var __accu0__ = 'Category name {} is unfortunately reserved for internal use';
/* 000190 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000190 */ 			}) ());
/* 000190 */ 			__except0__.__cause__ = null;
/* 000190 */ 			throw __except0__;
/* 000190 */ 		}
/* 000193 */ 		if (__t__ (category === null)) {
/* 000194 */ 			var __left0__ = (function () {
/* 000194 */ 				var __accu0__ = self;
/* 000194 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000194 */ 			}) ();
/* 000194 */ 			var _autogen_category_counter = __left0__ [0];
/* 000194 */ 			var category = __left0__ [1];
/* 000195 */ 			self._autogen_category_counter = __add__ (_autogen_category_counter, 1);
/* 000195 */ 		}
/* 000197 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000198 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000198 */ 				var __accu0__ = 'Category {} is already registered in the context database';
/* 000198 */ 				return __call__ (__accu0__.format, __accu0__, category);
/* 000198 */ 			}) ());
/* 000198 */ 			__except0__.__cause__ = null;
/* 000198 */ 			throw __except0__;
/* 000198 */ 		}
/* 000202 */ 		if (__t__ (__gt__ (__call__ (len, null, (function () {
/* 000202 */ 			var __accu0__ = [];
/* 000202 */ 			var __iterable0__ = tuple ([prepend, insert_before, insert_after]);
/* 000202 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 				if (__t__ (x)) {
/* 000202 */ 					(function () {
/* 000202 */ 						var __accu1__ = __accu0__;
/* 000202 */ 						return __call__ (__accu1__.append, __accu1__, x);
/* 000202 */ 					}) ();
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 			return __accu0__;
/* 000202 */ 		}) ()), 1))) {
/* 000203 */ 			var __except0__ = __call__ (py_TypeError, null, 'add_context_category(): You may only specify one of prepend=True, insert_before=... or insert_after=...');
/* 000203 */ 			__except0__.__cause__ = null;
/* 000203 */ 			throw __except0__;
/* 000203 */ 		}
/* 000207 */ 		var category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000207 */ 			var __accu0__ = [];
/* 000207 */ 			var __iterable0__ = macros;
/* 000207 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000207 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000207 */ 				(function () {
/* 000207 */ 					var __accu1__ = __accu0__;
/* 000207 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000207 */ 				}) ();
/* 000207 */ 			}
/* 000207 */ 			return __accu0__;
/* 000208 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000208 */ 			var __accu0__ = [];
/* 000208 */ 			var __iterable0__ = environments;
/* 000208 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000208 */ 				(function () {
/* 000208 */ 					var __accu1__ = __accu0__;
/* 000208 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000208 */ 				}) ();
/* 000208 */ 			}
/* 000208 */ 			return __accu0__;
/* 000209 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000209 */ 			var __accu0__ = [];
/* 000209 */ 			var __iterable0__ = specials;
/* 000209 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000209 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 				(function () {
/* 000209 */ 					var __accu1__ = __accu0__;
/* 000209 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000209 */ 				}) ();
/* 000209 */ 			}
/* 000209 */ 			return __accu0__;
/* 000209 */ 		}) ())});
/* 000212 */ 		// pass;
/* 000216 */ 		if (__t__ (prepend)) {
/* 000217 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000217 */ 				if (arguments.length) {
/* 000217 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 							switch (__attrib0__) {
/* 000217 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							}
/* 000217 */ 						}
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 				else {
/* 000217 */ 				}
/* 000217 */ 				return (function () {
/* 000217 */ 					var __accu0__ = listobj;
/* 000217 */ 					return __call__ (__accu0__.insert, __accu0__, 0, item);
/* 000217 */ 				}) ();
/* 000217 */ 			});
/* 000217 */ 		}
/* 000218 */ 		else if (__t__ (insert_before)) {
/* 000219 */ 			if (__t__ (__in__ (insert_before, self.category_list))) {
/* 000220 */ 				var i = (function () {
/* 000220 */ 					var __accu0__ = self.category_list;
/* 000220 */ 					return __call__ (__accu0__.index, __accu0__, insert_before);
/* 000220 */ 				}) ();
/* 000220 */ 			}
/* 000221 */ 			else {
/* 000222 */ 				var i = 0;
/* 000222 */ 			}
/* 000223 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000223 */ 				if (arguments.length) {
/* 000223 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 							switch (__attrib0__) {
/* 000223 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 							}
/* 000223 */ 						}
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 				else {
/* 000223 */ 				}
/* 000223 */ 				return (function () {
/* 000223 */ 					var __accu0__ = listobj;
/* 000223 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000223 */ 				}) ();
/* 000223 */ 			});
/* 000223 */ 		}
/* 000224 */ 		else if (__t__ (insert_after)) {
/* 000225 */ 			if (__t__ (__in__ (insert_after, self.category_list))) {
/* 000226 */ 				var i = __add__ ((function () {
/* 000226 */ 					var __accu0__ = self.category_list;
/* 000226 */ 					return __call__ (__accu0__.index, __accu0__, insert_after);
/* 000226 */ 				}) (), 1);
/* 000226 */ 			}
/* 000227 */ 			else {
/* 000228 */ 				var i = __call__ (len, null, self.category_list);
/* 000228 */ 			}
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
/* 000229 */ 					return __call__ (__accu0__.insert, __accu0__, i, item);
/* 000229 */ 				}) ();
/* 000229 */ 			});
/* 000229 */ 		}
/* 000230 */ 		else {
/* 000231 */ 			var insert_fn = (function __lambda__ (listobj, item) {
/* 000231 */ 				if (arguments.length) {
/* 000231 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 							switch (__attrib0__) {
/* 000231 */ 								case 'listobj': var listobj = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 								case 'item': var item = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 							}
/* 000231 */ 						}
/* 000231 */ 					}
/* 000231 */ 				}
/* 000231 */ 				else {
/* 000231 */ 				}
/* 000231 */ 				return (function () {
/* 000231 */ 					var __accu0__ = listobj;
/* 000231 */ 					return __call__ (__accu0__.append, __accu0__, item);
/* 000231 */ 				}) ();
/* 000231 */ 			});
/* 000231 */ 		}
/* 000233 */ 		__call__ (insert_fn, null, self.category_list, category);
/* 000234 */ 		var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000234 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000234 */ 			var which = __getitem__ (__iterable0__, __index0__);
/* 000235 */ 			__call__ (insert_fn, null, __getitem__ (self.lookup_chain_maps, which).maps, __getitem__ (category_dicts, which));
/* 000235 */ 		}
/* 000237 */ 		__setitem__ (self.d, category, category_dicts);
/* 000237 */ 	});},
/* 000240 */ 	get set_unknown_macro_spec () {return __get__ (this, function (self, macrospec) {
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000245 */ 		if (__t__ (self.frozen)) {
/* 000246 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000246 */ 			__except0__.__cause__ = null;
/* 000246 */ 			throw __except0__;
/* 000246 */ 		}
/* 000247 */ 		self.unknown_macro_spec = macrospec;
/* 000247 */ 	});},
/* 000249 */ 	get set_unknown_environment_spec () {return __get__ (this, function (self, environmentspec) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000254 */ 		if (__t__ (self.frozen)) {
/* 000255 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000255 */ 			__except0__.__cause__ = null;
/* 000255 */ 			throw __except0__;
/* 000255 */ 		}
/* 000256 */ 		self.unknown_environment_spec = environmentspec;
/* 000256 */ 	});},
/* 000258 */ 	get set_unknown_specials_spec () {return __get__ (this, function (self, specialsspec) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000265 */ 		if (__t__ (self.frozen)) {
/* 000266 */ 			var __except0__ = __call__ (RuntimeError, null, 'You attempted to modify a frozen LatexContextDb object.');
/* 000266 */ 			__except0__.__cause__ = null;
/* 000266 */ 			throw __except0__;
/* 000266 */ 		}
/* 000267 */ 		self.unknown_specials_spec = specialsspec;
/* 000267 */ 	});},
/* 000269 */ 	get categories () {return __get__ (this, function (self) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000274 */ 		return __call__ (list, null, self.category_list);
/* 000274 */ 	});},
/* 000276 */ 	get get_macro_spec () {return __get__ (this, function (self, macroname, raise_if_not_found) {
/* 000276 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000276 */ 			var raise_if_not_found = false;
/* 000276 */ 		};
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000290 */ 		try {
/* 000291 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'macros'), macroname);
/* 000291 */ 		}
/* 000291 */ 		catch (__except0__) {
/* 000291 */ 			if (isinstance (__except0__, KeyError)) {
/* 000293 */ 				if (__t__ (raise_if_not_found)) {
/* 000294 */ 					__except0__.__cause__ = null;
/* 000294 */ 					throw __except0__;
/* 000294 */ 				}
/* 000295 */ 				return self.unknown_macro_spec;
/* 000295 */ 			}
/* 000295 */ 			else {
/* 000295 */ 				throw __except0__;
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 	});},
/* 000297 */ 	get get_environment_spec () {return __get__ (this, function (self, environmentname, raise_if_not_found) {
/* 000297 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var raise_if_not_found = false;
/* 000297 */ 		};
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000312 */ 		try {
/* 000313 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'environments'), environmentname);
/* 000313 */ 		}
/* 000313 */ 		catch (__except0__) {
/* 000313 */ 			if (isinstance (__except0__, KeyError)) {
/* 000315 */ 				if (__t__ (raise_if_not_found)) {
/* 000316 */ 					__except0__.__cause__ = null;
/* 000316 */ 					throw __except0__;
/* 000316 */ 				}
/* 000317 */ 				return self.unknown_environment_spec;
/* 000317 */ 			}
/* 000317 */ 			else {
/* 000317 */ 				throw __except0__;
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 	});},
/* 000319 */ 	get get_specials_spec () {return __get__ (this, function (self, specials_chars, raise_if_not_found) {
/* 000319 */ 		if (typeof raise_if_not_found == 'undefined' || (raise_if_not_found != null && raise_if_not_found.hasOwnProperty ("__kwargtrans__"))) {;
/* 000319 */ 			var raise_if_not_found = false;
/* 000319 */ 		};
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'raise_if_not_found': var raise_if_not_found = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000342 */ 		try {
/* 000343 */ 			return __getitem__ (__getitem__ (self.lookup_chain_maps, 'specials'), specials_chars);
/* 000343 */ 		}
/* 000343 */ 		catch (__except0__) {
/* 000343 */ 			if (isinstance (__except0__, KeyError)) {
/* 000345 */ 				if (__t__ (raise_if_not_found)) {
/* 000346 */ 					__except0__.__cause__ = null;
/* 000346 */ 					throw __except0__;
/* 000346 */ 				}
/* 000347 */ 				return self.unknown_specials_spec;
/* 000347 */ 			}
/* 000347 */ 			else {
/* 000347 */ 				throw __except0__;
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 	});},
/* 000349 */ 	get test_for_specials () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000349 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000349 */ 			var parsing_state = null;
/* 000349 */ 		};
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000360 */ 		var best_match_len = 0;
/* 000361 */ 		var best_match_s = null;
/* 000365 */ 		var __iterable0__ = self.category_list;
/* 000365 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000367 */ 			var __iterable1__ = (function () {
/* 000367 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000367 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000367 */ 			}) ();
/* 000367 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000367 */ 				var specials_chars = __getitem__ (__iterable1__, __index1__);
/* 000370 */ 				if (__t__ (__t__ (__gt__ (__call__ (len, null, specials_chars), best_match_len)) && (function () {
/* 000370 */ 					var __accu0__ = s;
/* 000370 */ 					return __call__ (__accu0__.startswith, __accu0__, specials_chars, pos);
/* 000370 */ 				}) ())) {
/* 000371 */ 					var best_match_s = __getitem__ (__getitem__ (__getitem__ (self.d, cat), 'specials'), specials_chars);
/* 000372 */ 					var best_match_len = __call__ (len, null, specials_chars);
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000376 */ 		return best_match_s;
/* 000376 */ 	});},
/* 000378 */ 	get iter_macro_specs () {return __get__ (this, function* (self, categories) {
/* 000378 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000378 */ 			var categories = null;
/* 000378 */ 		};
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000391 */ 		if (__t__ (categories === null)) {
/* 000392 */ 			var categories = self.category_list;
/* 000392 */ 		}
/* 000394 */ 		var __iterable0__ = categories;
/* 000394 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000394 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000395 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000397 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000397 */ 					var __accu0__ = 'Invalid latex macro spec db category: {!r} (Expected one of {!r})';
/* 000397 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000397 */ 				}) ());
/* 000397 */ 				__except0__.__cause__ = null;
/* 000397 */ 				throw __except0__;
/* 000397 */ 			}
/* 000400 */ 			var __iterable1__ = (function () {
/* 000400 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'macros');
/* 000400 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000400 */ 			}) ();
/* 000400 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000400 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000400 */ 				yield spec;
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		});},
/* 000403 */ 	get iter_environment_specs () {return __get__ (this, function* (self, categories) {
/* 000403 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000403 */ 			var categories = null;
/* 000403 */ 		};
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000417 */ 		if (__t__ (categories === null)) {
/* 000418 */ 			var categories = self.category_list;
/* 000418 */ 		}
/* 000420 */ 		var __iterable0__ = categories;
/* 000420 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000420 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000421 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000423 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000423 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000423 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000423 */ 				}) ());
/* 000423 */ 				__except0__.__cause__ = null;
/* 000423 */ 				throw __except0__;
/* 000423 */ 			}
/* 000426 */ 			var __iterable1__ = (function () {
/* 000426 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'environments');
/* 000426 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000426 */ 			}) ();
/* 000426 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000426 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000426 */ 				yield spec;
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		});},
/* 000429 */ 	get iter_specials_specs () {return __get__ (this, function* (self, categories) {
/* 000429 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000429 */ 			var categories = null;
/* 000429 */ 		};
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000443 */ 		if (__t__ (categories === null)) {
/* 000444 */ 			var categories = self.category_list;
/* 000444 */ 		}
/* 000446 */ 		var __iterable0__ = categories;
/* 000446 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 			var c = __getitem__ (__iterable0__, __index0__);
/* 000447 */ 			if (__t__ (!__in__ (c, self.category_list))) {
/* 000449 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000449 */ 					var __accu0__ = 'Invalid latex environment spec db category: {!r} (Expected one of {!r})';
/* 000449 */ 					return __call__ (__accu0__.format, __accu0__, c, self.category_list);
/* 000449 */ 				}) ());
/* 000449 */ 				__except0__.__cause__ = null;
/* 000449 */ 				throw __except0__;
/* 000449 */ 			}
/* 000452 */ 			var __iterable1__ = (function () {
/* 000452 */ 				var __accu0__ = __getitem__ (__getitem__ (self.d, c), 'specials');
/* 000452 */ 				return __call__ (__accu0__.py_values, __accu0__);
/* 000452 */ 			}) ();
/* 000452 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000452 */ 				var spec = __getitem__ (__iterable1__, __index1__);
/* 000452 */ 				yield spec;
/* 000452 */ 			}
/* 000452 */ 		}
/* 000452 */ 		});},
/* 000473 */ 	get filtered_context () {return __get__ (this, function (self, keep_categories, exclude_categories, keep_which, create_class) {
/* 000473 */ 		if (typeof keep_categories == 'undefined' || (keep_categories != null && keep_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000473 */ 			var keep_categories = [];
/* 000473 */ 		};
/* 000473 */ 		if (typeof exclude_categories == 'undefined' || (exclude_categories != null && exclude_categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000473 */ 			var exclude_categories = [];
/* 000473 */ 		};
/* 000473 */ 		if (typeof keep_which == 'undefined' || (keep_which != null && keep_which.hasOwnProperty ("__kwargtrans__"))) {;
/* 000473 */ 			var keep_which = [];
/* 000473 */ 		};
/* 000473 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000473 */ 			var create_class = null;
/* 000473 */ 		};
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'keep_categories': var keep_categories = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'exclude_categories': var exclude_categories = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'keep_which': var keep_which = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000506 */ 		if (__t__ (create_class === null)) {
/* 000507 */ 			var create_class = self.__class__;
/* 000507 */ 		}
/* 000509 */ 		var new_context = __call__ (create_class, null);
/* 000511 */ 		new_context.unknown_macro_spec = self.unknown_macro_spec;
/* 000512 */ 		new_context.unknown_environment_spec = self.unknown_environment_spec;
/* 000513 */ 		new_context.unknown_specials_spec = self.unknown_specials_spec;
/* 000515 */ 		var keep_macros = __t__ (!__t__ ((keep_which))) || __in__ ('macros', keep_which);
/* 000516 */ 		var keep_environments = __t__ (!__t__ ((keep_which))) || __in__ ('environments', keep_which);
/* 000517 */ 		var keep_specials = __t__ (!__t__ ((keep_which))) || __in__ ('specials', keep_which);
/* 000519 */ 		var __iterable0__ = self.category_list;
/* 000519 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000519 */ 			var cat = __getitem__ (__iterable0__, __index0__);
/* 000520 */ 			if (__t__ (__t__ (keep_categories) && !__in__ (cat, keep_categories))) {
/* 000520 */ 				continue;
/* 000520 */ 			}
/* 000522 */ 			if (__t__ (__t__ (exclude_categories) && __in__ (cat, exclude_categories))) {
/* 000522 */ 				continue;
/* 000522 */ 			}
/* 000526 */ 			(function () {
/* 000526 */ 				var __accu0__ = new_context;
/* 000528 */ 				return __call__ (__accu0__.add_context_category, __accu0__, cat, __kwargtrans__ ({macros: (__t__ (keep_macros) ? (function () {
/* 000528 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'macros');
/* 000528 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000529 */ 				}) () : []), environments: (__t__ (keep_environments) ? (function () {
/* 000529 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'environments');
/* 000529 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000530 */ 				}) () : []), specials: (__t__ (keep_specials) ? (function () {
/* 000530 */ 					var __accu1__ = __getitem__ (__getitem__ (self.d, cat), 'specials');
/* 000530 */ 					return __call__ (__accu1__.py_values, __accu1__);
/* 000530 */ 				}) () : [])}));
/* 000530 */ 			}) ();
/* 000530 */ 		}
/* 000533 */ 		return new_context;
/* 000533 */ 	});},
/* 000535 */ 	get _get_new_autogen_category () {return __get__ (this, function (self) {
/* 000535 */ 		if (arguments.length) {
/* 000535 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000535 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000535 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000535 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000535 */ 					switch (__attrib0__) {
/* 000535 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 					}
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 		}
/* 000535 */ 		else {
/* 000535 */ 		}
/* 000536 */ 		while (__t__ (true)) {
/* 000537 */ 			var category = __add__ (_autogen_category_prefix, __call__ (str, null, self._autogen_category_counter));
/* 000538 */ 			if (__t__ (!__in__ (category, self.category_list))) {
/* 000538 */ 				break;
/* 000538 */ 			}
/* 000540 */ 			self._autogen_category_counter = __call__ (__iadd__, null, self._autogen_category_counter, 1);
/* 000540 */ 		}
/* 000542 */ 		return tuple ([self._autogen_category_counter, category]);
/* 000542 */ 	});},
/* 000544 */ 	get extended_with () {return __get__ (this, function (self, category, macros, environments, specials, create_class) {
/* 000544 */ 		if (typeof category == 'undefined' || (category != null && category.hasOwnProperty ("__kwargtrans__"))) {;
/* 000544 */ 			var category = null;
/* 000544 */ 		};
/* 000544 */ 		if (typeof macros == 'undefined' || (macros != null && macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000544 */ 			var macros = null;
/* 000544 */ 		};
/* 000544 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000544 */ 			var environments = null;
/* 000544 */ 		};
/* 000544 */ 		if (typeof specials == 'undefined' || (specials != null && specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000544 */ 			var specials = null;
/* 000544 */ 		};
/* 000544 */ 		if (typeof create_class == 'undefined' || (create_class != null && create_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000544 */ 			var create_class = null;
/* 000544 */ 		};
/* 000544 */ 		var kwargs = dict ();
/* 000544 */ 		if (arguments.length) {
/* 000544 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000544 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000544 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000544 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000544 */ 					switch (__attrib0__) {
/* 000544 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'category': var category = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'macros': var macros = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'specials': var specials = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'create_class': var create_class = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000544 */ 					}
/* 000544 */ 				}
/* 000544 */ 				delete kwargs.__kwargtrans__;
/* 000544 */ 			}
/* 000544 */ 		}
/* 000544 */ 		else {
/* 000544 */ 		}
/* 000558 */ 		if (__t__ (__in__ (category, self.category_list))) {
/* 000559 */ 			var __except0__ = ValueError;
/* 000559 */ 			__except0__.__cause__ = null;
/* 000559 */ 			throw __except0__;
/* 000559 */ 		}
/* 000561 */ 		if (__t__ (!__t__ ((self.frozen)))) {
/* 000562 */ 			var __except0__ = __call__ (RuntimeError, null, "You can only call extended_with() on frozen objects, because extended objects keep references to the original objects' data");
/* 000562 */ 			__except0__.__cause__ = null;
/* 000562 */ 			throw __except0__;
/* 000562 */ 		}
/* 000567 */ 		if (__t__ (create_class === null)) {
/* 000568 */ 			var create_class = self.__class__;
/* 000568 */ 		}
/* 000570 */ 		var new_context = __call__ (create_class, null);
/* 000573 */ 		new_context.unknown_macro_spec = (function () {
/* 000573 */ 			var __accu0__ = kwargs;
/* 000573 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_macro_spec', self.unknown_macro_spec);
/* 000573 */ 		}) ();
/* 000575 */ 		new_context.unknown_environment_spec = (function () {
/* 000575 */ 			var __accu0__ = kwargs;
/* 000575 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_environment_spec', self.unknown_environment_spec);
/* 000575 */ 		}) ();
/* 000577 */ 		new_context.unknown_specials_spec = (function () {
/* 000577 */ 			var __accu0__ = kwargs;
/* 000577 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_specials_spec', self.unknown_specials_spec);
/* 000577 */ 		}) ();
/* 000579 */ 		if (__t__ (macros === null)) {
/* 000579 */ 			var macros = [];
/* 000579 */ 		}
/* 000580 */ 		if (__t__ (environments === null)) {
/* 000580 */ 			var environments = [];
/* 000580 */ 		}
/* 000581 */ 		if (__t__ (specials === null)) {
/* 000581 */ 			var specials = [];
/* 000581 */ 		}
/* 000584 */ 		var new_category_dicts = dict ({'macros': __call__ (dict, null, (function () {
/* 000584 */ 			var __accu0__ = [];
/* 000584 */ 			var __iterable0__ = macros;
/* 000584 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000584 */ 				var m = __getitem__ (__iterable0__, __index0__);
/* 000584 */ 				(function () {
/* 000584 */ 					var __accu1__ = __accu0__;
/* 000584 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([m.macroname, m]));
/* 000584 */ 				}) ();
/* 000584 */ 			}
/* 000584 */ 			return __accu0__;
/* 000585 */ 		}) ()), 'environments': __call__ (dict, null, (function () {
/* 000585 */ 			var __accu0__ = [];
/* 000585 */ 			var __iterable0__ = environments;
/* 000585 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000585 */ 				var e = __getitem__ (__iterable0__, __index0__);
/* 000585 */ 				(function () {
/* 000585 */ 					var __accu1__ = __accu0__;
/* 000585 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([e.environmentname, e]));
/* 000585 */ 				}) ();
/* 000585 */ 			}
/* 000585 */ 			return __accu0__;
/* 000586 */ 		}) ()), 'specials': __call__ (dict, null, (function () {
/* 000586 */ 			var __accu0__ = [];
/* 000586 */ 			var __iterable0__ = specials;
/* 000586 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000586 */ 				var s = __getitem__ (__iterable0__, __index0__);
/* 000586 */ 				(function () {
/* 000586 */ 					var __accu1__ = __accu0__;
/* 000586 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([s.specials_chars, s]));
/* 000586 */ 				}) ();
/* 000586 */ 			}
/* 000586 */ 			return __accu0__;
/* 000586 */ 		}) ())});
/* 000589 */ 		new_context.category_list = self.category_list;
/* 000598 */ 		if (__t__ (__t__ (category === null) && __t__ (__gt__ (__call__ (len, null, self.category_list), 0)) && (function () {
/* 000598 */ 			var __accu0__ = __getitem__ (self.category_list, 0);
/* 000598 */ 			return __call__ (__accu0__.startswith, __accu0__, _autogen_category_prefix);
/* 000598 */ 		}) ())) {
/* 000601 */ 			var cat = __getitem__ (self.category_list, 0);
/* 000602 */ 			var dd = __call__ (dict, null, self.d);
/* 000603 */ 			var d_cat = __getitem__ (dd, cat);
/* 000612 */ 			var d_cat = __call__ (dict, null, __kwargtrans__ ({macros: __call__ (dict, null, __getitem__ (d_cat, 'macros')), environments: __call__ (dict, null, __getitem__ (d_cat, 'environments')), specials: __call__ (dict, null, __getitem__ (d_cat, 'specials'))}));
/* 000614 */ 			(function () {
/* 000614 */ 				var __accu0__ = __getitem__ (d_cat, 'macros');
/* 000614 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000614 */ 			}) ();
/* 000615 */ 			(function () {
/* 000615 */ 				var __accu0__ = __getitem__ (d_cat, 'environments');
/* 000615 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000615 */ 			}) ();
/* 000616 */ 			(function () {
/* 000616 */ 				var __accu0__ = __getitem__ (d_cat, 'specials');
/* 000616 */ 				return __call__ (__accu0__.py_update, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000616 */ 			}) ();
/* 000619 */ 			__setitem__ (dd, cat, d_cat);
/* 000620 */ 			new_context.d = dd;
/* 000622 */ 			new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000622 */ 				var __accu0__ = _util;
/* 000622 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'macros'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'macros').maps, 1, null, 1));
/* 000626 */ 			}) (), 'environments': (function () {
/* 000626 */ 				var __accu0__ = _util;
/* 000626 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'environments'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'environments').maps, 1, null, 1));
/* 000630 */ 			}) (), 'specials': (function () {
/* 000630 */ 				var __accu0__ = _util;
/* 000630 */ 				return __call__ (__accu0__.ChainMap, __accu0__, __getitem__ (d_cat, 'specials'), ...__getslice__ (__getitem__ (self.lookup_chain_maps, 'specials').maps, 1, null, 1));
/* 000630 */ 			}) ()});
/* 000635 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000638 */ 			new_context.frozen = true;
/* 000639 */ 			// pass;
/* 000648 */ 			return new_context;
/* 000648 */ 		}
/* 000650 */ 		if (__t__ (category === null)) {
/* 000651 */ 			var __left0__ = (function () {
/* 000651 */ 				var __accu0__ = self;
/* 000651 */ 				return __call__ (__accu0__._get_new_autogen_category, __accu0__);
/* 000651 */ 			}) ();
/* 000651 */ 			var a = __left0__ [0];
/* 000651 */ 			var category = __left0__ [1];
/* 000652 */ 			new_context._autogen_category_counter = __add__ (a, 1);
/* 000652 */ 		}
/* 000653 */ 		else {
/* 000654 */ 			new_context._autogen_category_counter = self._autogen_category_counter;
/* 000654 */ 		}
/* 000657 */ 		var dd = __call__ (dict, null, self.d);
/* 000658 */ 		__setitem__ (dd, category, new_category_dicts);
/* 000660 */ 		new_context.category_list = __add__ ([category], self.category_list);
/* 000662 */ 		new_context.d = dd;
/* 000670 */ 		new_context.lookup_chain_maps = dict ({'macros': (function () {
/* 000670 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'macros');
/* 000670 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'macros'));
/* 000673 */ 		}) (), 'environments': (function () {
/* 000673 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'environments');
/* 000673 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'environments'));
/* 000676 */ 		}) (), 'specials': (function () {
/* 000676 */ 			var __accu0__ = __getitem__ (self.lookup_chain_maps, 'specials');
/* 000676 */ 			return __call__ (__accu0__.new_child, __accu0__, __getitem__ (new_category_dicts, 'specials'));
/* 000676 */ 		}) ()});
/* 000680 */ 		new_context.frozen = true;
/* 000682 */ 		// pass;
/* 000693 */ 		return new_context;
/* 000693 */ 	});}
/* 000693 */ });
/* 000699 */ export var ParsingStateDeltaExtendLatexContextDb =  __class__ ('ParsingStateDeltaExtendLatexContextDb', [ParsingStateDelta], {
/* 000699 */ 	__module__: __name__,
/* 000713 */ 	get __init__ () {return __get__ (this, function (self, extend_latex_context) {
/* 000713 */ 		var kwargs = dict ();
/* 000713 */ 		if (arguments.length) {
/* 000713 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000713 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000713 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000713 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000713 */ 					switch (__attrib0__) {
/* 000713 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000713 */ 					}
/* 000713 */ 				}
/* 000713 */ 				delete kwargs.__kwargtrans__;
/* 000713 */ 			}
/* 000713 */ 		}
/* 000713 */ 		else {
/* 000713 */ 		}
/* 000714 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaExtendLatexContextDb, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['extend_latex_context', 'set_attributes'])}, kwargs)));
/* 000718 */ 		self.extend_latex_context = extend_latex_context;
/* 000718 */ 	});},
/* 000720 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000720 */ 		if (arguments.length) {
/* 000720 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000720 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000720 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000720 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000720 */ 					switch (__attrib0__) {
/* 000720 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 					}
/* 000720 */ 				}
/* 000720 */ 			}
/* 000720 */ 		}
/* 000720 */ 		else {
/* 000720 */ 		}
/* 000722 */ 		if (__t__ (self.extend_latex_context)) {
/* 000724 */ 			if (__t__ (self.set_attributes)) {
/* 000725 */ 				var set_attributes = self.set_attributes;
/* 000725 */ 			}
/* 000726 */ 			else {
/* 000727 */ 				var set_attributes = dict ({});
/* 000727 */ 			}
/* 000729 */ 			var latex_context = (function () {
/* 000729 */ 				var __accu0__ = parsing_state.latex_context;
/* 000729 */ 				return __call__ (__accu0__.extended_with, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({category: null}, self.extend_latex_context)));
/* 000729 */ 			}) ();
/* 000734 */ 			return (function () {
/* 000734 */ 				var __accu0__ = parsing_state;
/* 000734 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context}, set_attributes)));
/* 000734 */ 			}) ();
/* 000734 */ 		}
/* 000738 */ 		else if (__t__ (self.set_attributes)) {
/* 000739 */ 			return (function () {
/* 000739 */ 				var __accu0__ = parsing_state;
/* 000739 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000739 */ 			}) ();
/* 000739 */ 		}
/* 000743 */ 		return parsing_state;
/* 000743 */ 	});}
/* 000743 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._latexcontextdb.map