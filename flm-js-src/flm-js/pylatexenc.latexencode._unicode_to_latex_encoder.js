/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 22:13:09
/* 000033 */ var functools = {};
/* 000033 */ var itertools = {};
/* 000033 */ var logging = {};
/* 000033 */ var unicodedata = {};
/* 000033 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000116 */ import {RULE_CALLABLE, RULE_DICT, RULE_REGEX, UnicodeToLatexConversionRule} from './pylatexenc.latexencode._rule.js';
/* 000037 */ import * as __module_unicodedata__ from './unicodedata.js';
/* 000037 */ __nest__ (unicodedata, '', __module_unicodedata__);
/* 000035 */ import * as __module_itertools__ from './itertools.js';
/* 000035 */ __nest__ (itertools, '', __module_itertools__);
/* 000034 */ import * as __module_functools__ from './functools.js';
/* 000034 */ __nest__ (functools, '', __module_functools__);
/* 000033 */ import * as __module_logging__ from './logging.js';
/* 000033 */ __nest__ (logging, '', __module_logging__);
/* 000033 */ export {UnicodeToLatexConversionRule, RULE_REGEX, RULE_DICT, RULE_CALLABLE};
/* 000001 */ var __name__ = 'pylatexenc.latexencode._unicode_to_latex_encoder';
/* 000041 */ export var unicode_str = function (s) {
/* 000041 */ 	if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000041 */ 		var s = null;
/* 000041 */ 	};
/* 000041 */ 	if (arguments.length) {
/* 000041 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 				switch (__attrib0__) {
/* 000041 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 	}
/* 000041 */ 	else {
/* 000041 */ 	}
/* 000042 */ 	if (__t__ (s === null)) {
/* 000043 */ 		return '';
/* 000043 */ 	}
/* 000044 */ 	return __call__ (str, null, s);
/* 000044 */ };
/* 000045 */ export var basestring_cls = str;
/* 000062 */ export var logger = (function () {
/* 000062 */ 	var __accu0__ = logging;
/* 000062 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000062 */ }) ();
/* 000067 */ export var _callable_accepts_u2lobj_arg = function (fn) {
/* 000067 */ 	if (arguments.length) {
/* 000067 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 				switch (__attrib0__) {
/* 000067 */ 					case 'fn': var fn = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 	}
/* 000067 */ 	else {
/* 000067 */ 	}
/* 000068 */ 	return true;
/* 000068 */ };
/* 000080 */ var HexstrN = (v, N=4) => (+v).toString(16).toUpperCase().padStart(N, "0")
/* 000101 */ 
/* 000101 */ var re_match_expand = (m, repl) => repl.replace(/\\((\d)|g<(\w+)>)/g, (esc, x, digit, gname) => m.group((digit != null) ? parseInt(digit) : gname)) ;
/* 000101 */ var regex_match_pos = (rx, s, pos) => rx.match(s.slice(pos)) ;
/* 000101 */ 
/* 000125 */ export var UnicodeToLatexEncoder =  __class__ ('UnicodeToLatexEncoder', [object], {
/* 000125 */ 	__module__: __name__,
/* 000294 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000294 */ 		var kwargs = dict ();
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				delete kwargs.__kwargtrans__;
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000295 */ 		self.non_ascii_only = (function () {
/* 000295 */ 			var __accu0__ = kwargs;
/* 000295 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'non_ascii_only', false);
/* 000295 */ 		}) ();
/* 000296 */ 		self.conversion_rules = (function () {
/* 000296 */ 			var __accu0__ = kwargs;
/* 000296 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'conversion_rules', ['defaults']);
/* 000296 */ 		}) ();
/* 000297 */ 		self.replacement_latex_protection = (function () {
/* 000297 */ 			var __accu0__ = kwargs;
/* 000297 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'replacement_latex_protection', 'braces');
/* 000297 */ 		}) ();
/* 000298 */ 		self.unknown_char_policy = (function () {
/* 000298 */ 			var __accu0__ = kwargs;
/* 000298 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_char_policy', 'keep');
/* 000298 */ 		}) ();
/* 000299 */ 		self.unknown_char_warning = (function () {
/* 000299 */ 			var __accu0__ = kwargs;
/* 000299 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_char_warning', true);
/* 000299 */ 		}) ();
/* 000300 */ 		self.latex_string_class = (function () {
/* 000300 */ 			var __accu0__ = kwargs;
/* 000300 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_string_class', unicode_str);
/* 000300 */ 		}) ();
/* 000302 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000303 */ 			(function () {
/* 000303 */ 				var __accu0__ = logger;
/* 000303 */ 				return __call__ (__accu0__.warning, __accu0__, 'Ignoring unknown keyword arguments: %s', (function () {
/* 000303 */ 					var __accu1__ = ',';
/* 000303 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000303 */ 						var __accu2__ = kwargs;
/* 000303 */ 						return __call__ (__accu2__.py_keys, __accu2__);
/* 000303 */ 					}) ());
/* 000303 */ 				}) ());
/* 000303 */ 			}) ();
/* 000303 */ 		}
/* 000305 */ 		__call__ (__call__ (__super__, null, UnicodeToLatexEncoder, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000308 */ 		var expanded_conversion_rules = [];
/* 000313 */ 		var __iterable0__ = self.conversion_rules;
/* 000313 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000313 */ 			var r = __getitem__ (__iterable0__, __index0__);
/* 000320 */ 			if (__t__ (__call__ (isinstance, null, r, basestring_cls))) {
/* 000321 */ 				(function () {
/* 000321 */ 					var __accu0__ = logger;
/* 000321 */ 					return __call__ (__accu0__.warning, __accu0__, 'The pylatexenc.latexencode module was preprocessed and/or transpiled without support for implicit/string-specified default rules.  Please import the pylatexenc.latexencode.get_builtin_rules module and specify the relevant rules manually.');
/* 000321 */ 				}) ();
/* 000321 */ 				continue;
/* 000321 */ 			}
/* 000329 */ 			(function () {
/* 000329 */ 				var __accu0__ = expanded_conversion_rules;
/* 000329 */ 				return __call__ (__accu0__.append, __accu0__, r);
/* 000329 */ 			}) ();
/* 000329 */ 		}
/* 000337 */ 		self._compiled_rules = [];
/* 000338 */ 		var __iterable0__ = expanded_conversion_rules;
/* 000338 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000338 */ 			var rule = __getitem__ (__iterable0__, __index0__);
/* 000339 */ 			if (__t__ (__eq__ (rule.rule_type, RULE_DICT))) {
/* 000340 */ 				(function () {
/* 000340 */ 					var __accu0__ = self._compiled_rules;
/* 000341 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000341 */ 						var __accu1__ = functools;
/* 000341 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_dict, rule.rule, rule);
/* 000341 */ 					}) ());
/* 000341 */ 				}) ();
/* 000341 */ 			}
/* 000343 */ 			else if (__t__ (__eq__ (rule.rule_type, RULE_REGEX))) {
/* 000344 */ 				(function () {
/* 000344 */ 					var __accu0__ = self._compiled_rules;
/* 000345 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000345 */ 						var __accu1__ = functools;
/* 000345 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_regex, rule.rule, rule);
/* 000345 */ 					}) ());
/* 000345 */ 				}) ();
/* 000345 */ 			}
/* 000347 */ 			else if (__t__ (__eq__ (rule.rule_type, RULE_CALLABLE))) {
/* 000348 */ 				var thecallable = rule.rule;
/* 000349 */ 				if (__t__ (__call__ (_callable_accepts_u2lobj_arg, null, thecallable))) {
/* 000351 */ 					var thecallable = (function () {
/* 000351 */ 						var __accu0__ = functools;
/* 000351 */ 						return __call__ (__accu0__.partial, __accu0__, rule.rule, __kwargtrans__ ({u2lobj: self}));
/* 000351 */ 					}) ();
/* 000351 */ 				}
/* 000352 */ 				(function () {
/* 000352 */ 					var __accu0__ = self._compiled_rules;
/* 000353 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000353 */ 						var __accu1__ = functools;
/* 000353 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_callable, thecallable, rule);
/* 000353 */ 					}) ());
/* 000353 */ 				}) ();
/* 000353 */ 			}
/* 000354 */ 			else {
/* 000356 */ 				var __except0__ = __call__ (py_TypeError, null, (function () {
/* 000356 */ 					var __accu0__ = 'Invalid rule type: {}';
/* 000356 */ 					return __call__ (__accu0__.format, __accu0__, rule.rule_type);
/* 000356 */ 				}) ());
/* 000356 */ 				__except0__.__cause__ = null;
/* 000356 */ 				throw __except0__;
/* 000356 */ 			}
/* 000356 */ 		}
/* 000359 */ 		if (__t__ (__call__ (isinstance, null, self.unknown_char_policy, basestring_cls))) {
/* 000360 */ 			self._do_unknown_char = (function () {
/* 000360 */ 				var __accu0__ = self;
/* 000360 */ 				return __call__ (__accu0__._get_method_fn, __accu0__, 'do_unknown_char', self.unknown_char_policy, __kwargtrans__ ({what: 'unknown_char_policy'}));
/* 000360 */ 			}) ();
/* 000360 */ 		}
/* 000365 */ 		else if (__t__ (__call__ (callable, null, self.unknown_char_policy))) {
/* 000366 */ 			var fn = self.unknown_char_policy;
/* 000367 */ 			if (__t__ (__call__ (_callable_accepts_u2lobj_arg, null, fn))) {
/* 000369 */ 				self._do_unknown_char = (function () {
/* 000369 */ 					var __accu0__ = functools;
/* 000369 */ 					return __call__ (__accu0__.partial, __accu0__, self.unknown_char_policy, __kwargtrans__ ({u2lobj: self}));
/* 000369 */ 				}) ();
/* 000369 */ 			}
/* 000370 */ 			else {
/* 000371 */ 				self._do_unknown_char = self.unknown_char_policy;
/* 000371 */ 			}
/* 000371 */ 		}
/* 000372 */ 		else {
/* 000373 */ 			var __except0__ = __call__ (py_TypeError, null, (function () {
/* 000373 */ 				var __accu0__ = 'Invalid argument for unknown_char_policy: {}';
/* 000374 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.unknown_char_policy));
/* 000374 */ 			}) ());
/* 000374 */ 			__except0__.__cause__ = null;
/* 000374 */ 			throw __except0__;
/* 000374 */ 		}
/* 000377 */ 		if (__t__ (!__t__ ((self.unknown_char_warning)))) {
/* 000378 */ 			self._do_warn_unknown_char = (function __lambda__ (ch) {
/* 000378 */ 				if (arguments.length) {
/* 000378 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 							switch (__attrib0__) {
/* 000378 */ 								case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 							}
/* 000378 */ 						}
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 				else {
/* 000378 */ 				}
/* 000378 */ 				return null;
/* 000378 */ 			});
/* 000378 */ 		}
/* 000379 */ 		else {
/* 000380 */ 			self._do_warn_unknown_char = self._do_warn_unknown_char_defaultimpl;
/* 000380 */ 		}
/* 000383 */ 		if (__t__ (self.non_ascii_only)) {
/* 000384 */ 			self._maybe_skip_ascii = self._check_do_skip_ascii;
/* 000384 */ 		}
/* 000385 */ 		else {
/* 000386 */ 			self._maybe_skip_ascii = (function __lambda__ (s, p) {
/* 000386 */ 				if (arguments.length) {
/* 000386 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 							switch (__attrib0__) {
/* 000386 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 							}
/* 000386 */ 						}
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 				else {
/* 000386 */ 				}
/* 000386 */ 				return false;
/* 000386 */ 			});
/* 000386 */ 		}
/* 000389 */ 		self._apply_protection = (function () {
/* 000389 */ 			var __accu0__ = self;
/* 000389 */ 			return __call__ (__accu0__._get_replacement_latex_fn, __accu0__, self.replacement_latex_protection);
/* 000389 */ 		}) ();
/* 000389 */ 	});},
/* 000393 */ 	get _get_method_fn () {return __get__ (this, function (self, base, py_name, what) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'base': var base = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000394 */ 		var selfmethname = __add__ (__add__ (__add__ ('_', base), '_'), (function () {
/* 000394 */ 			var __accu0__ = py_name;
/* 000394 */ 			return __call__ (__accu0__.py_replace, __accu0__, '-', '_');
/* 000394 */ 		}) ());
/* 000395 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, self, selfmethname))))) {
/* 000396 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000396 */ 				var __accu0__ = 'Invalid {}: {}';
/* 000396 */ 				return __call__ (__accu0__.format, __accu0__, what, py_name);
/* 000396 */ 			}) ());
/* 000396 */ 			__except0__.__cause__ = null;
/* 000396 */ 			throw __except0__;
/* 000396 */ 		}
/* 000397 */ 		return __call__ (getattr, null, self, selfmethname);
/* 000397 */ 	});},
/* 000399 */ 	get _get_replacement_latex_fn () {return __get__ (this, function (self, replacement_latex_protection) {
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'replacement_latex_protection': var replacement_latex_protection = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000400 */ 		if (__t__ (__call__ (callable, null, replacement_latex_protection))) {
/* 000401 */ 			return replacement_latex_protection;
/* 000401 */ 		}
/* 000402 */ 		return (function () {
/* 000402 */ 			var __accu0__ = self;
/* 000402 */ 			return __call__ (__accu0__._get_method_fn, __accu0__, 'apply_protection', replacement_latex_protection, __kwargtrans__ ({what: 'replacement_latex_protection'}));
/* 000402 */ 		}) ();
/* 000402 */ 	});},
/* 000408 */ 	get unicode_to_latex () {return __get__ (this, function (self, s) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000414 */ 		var s = __call__ (unicode_str, null, s);
/* 000415 */ 		var s = (function () {
/* 000415 */ 			var __accu0__ = unicodedata;
/* 000415 */ 			return __call__ (__accu0__.normalize, __accu0__, 'NFC', s);
/* 000415 */ 		}) ();
/* 000417 */ 		var _NS = __class__ ('_NS', [object], {
/* 000417 */ 			__module__: __name__,
/* 000417 */ 		});
/* 000418 */ 		var p = __call__ (_NS, null);
/* 000419 */ 		p.latex = (function () {
/* 000419 */ 			var __accu0__ = self;
/* 000419 */ 			return __call__ (__accu0__.latex_string_class, __accu0__);
/* 000419 */ 		}) ();
/* 000420 */ 		p.pos = 0;
/* 000422 */ 		while (__t__ (__lt__ (p.pos, __call__ (len, null, s)))) {
/* 000424 */ 			if (__t__ ((function () {
/* 000424 */ 				var __accu0__ = self;
/* 000424 */ 				return __call__ (__accu0__._maybe_skip_ascii, __accu0__, s, p);
/* 000424 */ 			}) ())) {
/* 000424 */ 				continue;
/* 000424 */ 			}
/* 000427 */ 			var __break1__ = false;
/* 000427 */ 			var __iterable0__ = self._compiled_rules;
/* 000427 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000427 */ 				var compiledrule = __getitem__ (__iterable0__, __index0__);
/* 000428 */ 				if (__t__ (__call__ (compiledrule, null, s, p))) {
/* 000428 */ 					__break1__ = true;
/* 000428 */ 					break;
/* 000428 */ 				}
/* 000428 */ 			}
/* 000430 */ 			if (!__break1__) {
/* 000434 */ 				var ch = __getitem__ (s, p.pos);
/* 000435 */ 				var o = __call__ (ord, null, ch);
/* 000436 */ 				if (__t__ (__t__ (__t__ (__ge__ (o, 32)) && __le__ (o, 127)) || __in__ (ch, '\n\r\t'))) {
/* 000437 */ 					p.latex = __call__ (__iadd__, null, p.latex, ch);
/* 000438 */ 					p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000438 */ 				}
/* 000439 */ 				else {
/* 000440 */ 					(function () {
/* 000440 */ 						var __accu0__ = self;
/* 000440 */ 						return __call__ (__accu0__._do_warn_unknown_char, __accu0__, ch);
/* 000440 */ 					}) ();
/* 000441 */ 					p.latex = __call__ (__iadd__, null, p.latex, (function () {
/* 000441 */ 						var __accu0__ = self;
/* 000441 */ 						return __call__ (__accu0__._do_unknown_char, __accu0__, ch);
/* 000441 */ 					}) ());
/* 000442 */ 					p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000444 */ 		return p.latex;
/* 000444 */ 	});},
/* 000447 */ 	get _check_do_skip_ascii () {return __get__ (this, function (self, s, p) {
/* 000447 */ 		if (arguments.length) {
/* 000447 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000447 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000447 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000447 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000447 */ 					switch (__attrib0__) {
/* 000447 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 					}
/* 000447 */ 				}
/* 000447 */ 			}
/* 000447 */ 		}
/* 000447 */ 		else {
/* 000447 */ 		}
/* 000448 */ 		if (__t__ (__lt__ (__call__ (ord, null, __getitem__ (s, p.pos)), 127))) {
/* 000450 */ 			p.latex = __call__ (__iadd__, null, p.latex, __getitem__ (s, p.pos));
/* 000451 */ 			p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000452 */ 			return true;
/* 000452 */ 		}
/* 000453 */ 		return false;
/* 000453 */ 	});},
/* 000456 */ 	get _apply_rule_dict () {return __get__ (this, function (self, ruledict, rule, s, p) {
/* 000456 */ 		if (arguments.length) {
/* 000456 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 					switch (__attrib0__) {
/* 000456 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'ruledict': var ruledict = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 		}
/* 000456 */ 		else {
/* 000456 */ 		}
/* 000457 */ 		var o = __call__ (ord, null, __getitem__ (s, p.pos));
/* 000458 */ 		if (__t__ (__in__ (o, ruledict))) {
/* 000459 */ 			(function () {
/* 000459 */ 				var __accu0__ = self;
/* 000459 */ 				return __call__ (__accu0__._apply_replacement, __accu0__, p, __getitem__ (ruledict, o), 1, rule);
/* 000459 */ 			}) ();
/* 000460 */ 			return true;
/* 000460 */ 		}
/* 000461 */ 		return null;
/* 000461 */ 	});},
/* 000462 */ 	get _apply_rule_regex () {return __get__ (this, function (self, ruleregexes, rule, s, p) {
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'ruleregexes': var ruleregexes = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000463 */ 		var __iterable0__ = ruleregexes;
/* 000463 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000463 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000463 */ 			var regex = __left0__ [0];
/* 000463 */ 			var repl = __left0__ [1];
/* 000464 */ 			var m = __call__ (regex_match_pos, null, regex, s, p.pos);
/* 000465 */ 			if (__t__ (m !== null)) {
/* 000466 */ 				if (__t__ (__call__ (callable, null, repl))) {
/* 000467 */ 					var replstr = __call__ (repl, null, m);
/* 000467 */ 				}
/* 000468 */ 				else {
/* 000469 */ 					var replstr = __call__ (re_match_expand, null, m, repl);
/* 000469 */ 				}
/* 000470 */ 				(function () {
/* 000470 */ 					var __accu0__ = self;
/* 000470 */ 					return __call__ (__accu0__._apply_replacement, __accu0__, p, replstr, __sub__ ((function () {
/* 000470 */ 						var __accu1__ = m;
/* 000470 */ 						return __call__ (__accu1__.end, __accu1__);
/* 000470 */ 					}) (), (function () {
/* 000470 */ 						var __accu1__ = m;
/* 000470 */ 						return __call__ (__accu1__.start, __accu1__);
/* 000470 */ 					}) ()), rule);
/* 000470 */ 				}) ();
/* 000471 */ 				return true;
/* 000471 */ 			}
/* 000471 */ 		}
/* 000472 */ 		return null;
/* 000472 */ 	});},
/* 000473 */ 	get _apply_rule_callable () {return __get__ (this, function (self, rulecallable, rule, s, p) {
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'rulecallable': var rulecallable = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000474 */ 		var res = __call__ (rulecallable, null, s, p.pos);
/* 000475 */ 		if (__t__ (res === null)) {
/* 000476 */ 			return null;
/* 000476 */ 		}
/* 000477 */ 		var __left0__ = res;
/* 000477 */ 		var consumed = __left0__ [0];
/* 000477 */ 		var repl = __left0__ [1];
/* 000478 */ 		(function () {
/* 000478 */ 			var __accu0__ = self;
/* 000478 */ 			return __call__ (__accu0__._apply_replacement, __accu0__, p, repl, consumed, rule);
/* 000478 */ 		}) ();
/* 000479 */ 		return true;
/* 000479 */ 	});},
/* 000481 */ 	get _apply_replacement () {return __get__ (this, function (self, p, repl, numchars, ruleobj) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'numchars': var numchars = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'ruleobj': var ruleobj = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000484 */ 		var protect_fn = self._apply_protection;
/* 000487 */ 		if (__t__ (ruleobj.replacement_latex_protection !== null)) {
/* 000488 */ 			var protect_fn = (function () {
/* 000488 */ 				var __accu0__ = self;
/* 000488 */ 				return __call__ (__accu0__._get_replacement_latex_fn, __accu0__, ruleobj.replacement_latex_protection);
/* 000488 */ 			}) ();
/* 000488 */ 		}
/* 000492 */ 		var repl = __call__ (protect_fn, null, repl);
/* 000493 */ 		p.latex = __call__ (__iadd__, null, p.latex, repl);
/* 000494 */ 		p.pos = __call__ (__iadd__, null, p.pos, numchars);
/* 000494 */ 	});},
/* 000496 */ 	get _apply_protection_none () {return __get__ (this, function (self, repl) {
/* 000496 */ 		if (arguments.length) {
/* 000496 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000496 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000496 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000496 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000496 */ 					switch (__attrib0__) {
/* 000496 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 					}
/* 000496 */ 				}
/* 000496 */ 			}
/* 000496 */ 		}
/* 000496 */ 		else {
/* 000496 */ 		}
/* 000498 */ 		return repl;
/* 000498 */ 	});},
/* 000499 */ 	get _apply_protection_braces () {return __get__ (this, function (self, repl) {
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000500 */ 		var k = (function () {
/* 000500 */ 			var __accu0__ = repl;
/* 000500 */ 			return __call__ (__accu0__.rfind, __accu0__, '\\');
/* 000500 */ 		}) ();
/* 000501 */ 		if (__t__ (__t__ (__ge__ (k, 0)) && (function () {
/* 000501 */ 			var __accu0__ = __getslice__ (repl, __add__ (k, 1), null, 1);
/* 000501 */ 			return __call__ (__accu0__.isalpha, __accu0__);
/* 000501 */ 		}) ())) {
/* 000503 */ 			return __add__ (__add__ ('{', repl), '}');
/* 000503 */ 		}
/* 000504 */ 		return repl;
/* 000504 */ 	});},
/* 000505 */ 	get _apply_protection_braces_almost_all () {return __get__ (this, function (self, repl) {
/* 000505 */ 		if (arguments.length) {
/* 000505 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000505 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000505 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000505 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000505 */ 					switch (__attrib0__) {
/* 000505 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 					}
/* 000505 */ 				}
/* 000505 */ 			}
/* 000505 */ 		}
/* 000505 */ 		else {
/* 000505 */ 		}
/* 000506 */ 		if (__t__ (__eq__ (__getslice__ (repl, 0, 1, 1), '\\'))) {
/* 000507 */ 			return __add__ (__add__ ('{', repl), '}');
/* 000507 */ 		}
/* 000508 */ 		return repl;
/* 000508 */ 	});},
/* 000509 */ 	get _apply_protection_braces_all () {return __get__ (this, function (self, repl) {
/* 000509 */ 		if (arguments.length) {
/* 000509 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000509 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000509 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000509 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000509 */ 					switch (__attrib0__) {
/* 000509 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 					}
/* 000509 */ 				}
/* 000509 */ 			}
/* 000509 */ 		}
/* 000509 */ 		else {
/* 000509 */ 		}
/* 000510 */ 		return __add__ (__add__ ('{', repl), '}');
/* 000510 */ 	});},
/* 000511 */ 	get _apply_protection_braces_after_macro () {return __get__ (this, function (self, repl) {
/* 000511 */ 		if (arguments.length) {
/* 000511 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 					switch (__attrib0__) {
/* 000511 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 		}
/* 000511 */ 		else {
/* 000511 */ 		}
/* 000512 */ 		var k = (function () {
/* 000512 */ 			var __accu0__ = repl;
/* 000512 */ 			return __call__ (__accu0__.rfind, __accu0__, '\\');
/* 000512 */ 		}) ();
/* 000513 */ 		if (__t__ (__t__ (__ge__ (k, 0)) && (function () {
/* 000513 */ 			var __accu0__ = __getslice__ (repl, __add__ (k, 1), null, 1);
/* 000513 */ 			return __call__ (__accu0__.isalpha, __accu0__);
/* 000513 */ 		}) ())) {
/* 000515 */ 			return __add__ (repl, '{}');
/* 000515 */ 		}
/* 000516 */ 		return repl;
/* 000516 */ 	});},
/* 000519 */ 	get _do_unknown_char_keep () {return __get__ (this, function (self, ch) {
/* 000519 */ 		if (arguments.length) {
/* 000519 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000519 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000519 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000519 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000519 */ 					switch (__attrib0__) {
/* 000519 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 					}
/* 000519 */ 				}
/* 000519 */ 			}
/* 000519 */ 		}
/* 000519 */ 		else {
/* 000519 */ 		}
/* 000520 */ 		return ch;
/* 000520 */ 	});},
/* 000522 */ 	get _do_unknown_char_replace () {return __get__ (this, function (self, ch) {
/* 000522 */ 		if (arguments.length) {
/* 000522 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000522 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000522 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000522 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000522 */ 					switch (__attrib0__) {
/* 000522 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 					}
/* 000522 */ 				}
/* 000522 */ 			}
/* 000522 */ 		}
/* 000522 */ 		else {
/* 000522 */ 		}
/* 000523 */ 		return '{\\bfseries ?}';
/* 000523 */ 	});},
/* 000525 */ 	get _do_unknown_char_ignore () {return __get__ (this, function (self, ch) {
/* 000525 */ 		if (arguments.length) {
/* 000525 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 					switch (__attrib0__) {
/* 000525 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 			}
/* 000525 */ 		}
/* 000525 */ 		else {
/* 000525 */ 		}
/* 000526 */ 		return '';
/* 000526 */ 	});},
/* 000528 */ 	get _do_unknown_char_fail () {return __get__ (this, function (self, ch) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000530 */ 		var __except0__ = __call__ (ValueError, null, (function () {
/* 000530 */ 			var __accu0__ = 'No known latex representation for character: U+{} - ‘{}’';
/* 000531 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (HexstrN, null, __call__ (ord, null, ch), 4), ch);
/* 000531 */ 		}) ());
/* 000531 */ 		__except0__.__cause__ = null;
/* 000531 */ 		throw __except0__;
/* 000531 */ 	});},
/* 000534 */ 	get _do_unknown_char_unihex () {return __get__ (this, function (self, ch) {
/* 000534 */ 		if (arguments.length) {
/* 000534 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000534 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000534 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000534 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000534 */ 					switch (__attrib0__) {
/* 000534 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 					}
/* 000534 */ 				}
/* 000534 */ 			}
/* 000534 */ 		}
/* 000534 */ 		else {
/* 000534 */ 		}
/* 000536 */ 		return __add__ (__add__ ('\\ensuremath{\\langle}\\texttt{U+', __call__ (HexstrN, null, __call__ (ord, null, ch), 4)), '}\\ensuremath{\\rangle}');
/* 000536 */ 	});},
/* 000540 */ 	get _do_warn_unknown_char_defaultimpl () {return __get__ (this, function (self, ch) {
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000541 */ 		(function () {
/* 000541 */ 			var __accu0__ = logger;
/* 000542 */ 			return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000542 */ 				var __accu1__ = 'No known latex representation for character: U+{} - ‘{}’';
/* 000543 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (HexstrN, null, __call__ (ord, null, ch), 4), ch);
/* 000543 */ 			}) ());
/* 000543 */ 		}) ();
/* 000543 */ 	});}
/* 000543 */ });
/* 000033 */ 
//# sourceMappingURL=pylatexenc.latexencode._unicode_to_latex_encoder.map