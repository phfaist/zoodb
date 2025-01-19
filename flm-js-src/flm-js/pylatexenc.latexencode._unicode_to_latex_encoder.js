/* 000001 */ // Transcrypt'ed from Python, 2025-01-19 14:47:57
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
/* 000033 */ export {RULE_DICT, RULE_CALLABLE, UnicodeToLatexConversionRule, RULE_REGEX};
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
/* 000295 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000295 */ 		var kwargs = dict ();
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 				delete kwargs.__kwargtrans__;
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000296 */ 		self.non_ascii_only = (function () {
/* 000296 */ 			var __accu0__ = kwargs;
/* 000296 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'non_ascii_only', false);
/* 000296 */ 		}) ();
/* 000297 */ 		self.conversion_rules = (function () {
/* 000297 */ 			var __accu0__ = kwargs;
/* 000297 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'conversion_rules', ['defaults']);
/* 000297 */ 		}) ();
/* 000298 */ 		self.replacement_latex_protection = (function () {
/* 000298 */ 			var __accu0__ = kwargs;
/* 000298 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'replacement_latex_protection', 'braces');
/* 000298 */ 		}) ();
/* 000299 */ 		self.unknown_char_policy = (function () {
/* 000299 */ 			var __accu0__ = kwargs;
/* 000299 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_char_policy', 'keep');
/* 000299 */ 		}) ();
/* 000300 */ 		self.unknown_char_warning = (function () {
/* 000300 */ 			var __accu0__ = kwargs;
/* 000300 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'unknown_char_warning', true);
/* 000300 */ 		}) ();
/* 000301 */ 		self.latex_string_class = (function () {
/* 000301 */ 			var __accu0__ = kwargs;
/* 000301 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_string_class', unicode_str);
/* 000301 */ 		}) ();
/* 000303 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000304 */ 			(function () {
/* 000304 */ 				var __accu0__ = logger;
/* 000304 */ 				return __call__ (__accu0__.warning, __accu0__, 'Ignoring unknown keyword arguments: %s', (function () {
/* 000304 */ 					var __accu1__ = ',';
/* 000304 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000304 */ 						var __accu2__ = kwargs;
/* 000304 */ 						return __call__ (__accu2__.py_keys, __accu2__);
/* 000304 */ 					}) ());
/* 000304 */ 				}) ());
/* 000304 */ 			}) ();
/* 000304 */ 		}
/* 000306 */ 		__call__ (__call__ (__super__, null, UnicodeToLatexEncoder, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000309 */ 		var expanded_conversion_rules = [];
/* 000314 */ 		var __iterable0__ = self.conversion_rules;
/* 000314 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 			var r = __getitem__ (__iterable0__, __index0__);
/* 000321 */ 			if (__t__ (__call__ (isinstance, null, r, basestring_cls))) {
/* 000322 */ 				(function () {
/* 000322 */ 					var __accu0__ = logger;
/* 000322 */ 					return __call__ (__accu0__.warning, __accu0__, 'The pylatexenc.latexencode module was preprocessed and/or transpiled without support for implicit/string-specified default rules.  Please import the pylatexenc.latexencode.get_builtin_rules module and specify the relevant rules manually.');
/* 000322 */ 				}) ();
/* 000322 */ 				continue;
/* 000322 */ 			}
/* 000330 */ 			(function () {
/* 000330 */ 				var __accu0__ = expanded_conversion_rules;
/* 000330 */ 				return __call__ (__accu0__.append, __accu0__, r);
/* 000330 */ 			}) ();
/* 000330 */ 		}
/* 000338 */ 		self._compiled_rules = [];
/* 000339 */ 		var __iterable0__ = expanded_conversion_rules;
/* 000339 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000339 */ 			var rule = __getitem__ (__iterable0__, __index0__);
/* 000340 */ 			if (__t__ (__eq__ (rule.rule_type, RULE_DICT))) {
/* 000341 */ 				(function () {
/* 000341 */ 					var __accu0__ = self._compiled_rules;
/* 000342 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000342 */ 						var __accu1__ = functools;
/* 000342 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_dict, rule.rule, rule);
/* 000342 */ 					}) ());
/* 000342 */ 				}) ();
/* 000342 */ 			}
/* 000344 */ 			else if (__t__ (__eq__ (rule.rule_type, RULE_REGEX))) {
/* 000345 */ 				(function () {
/* 000345 */ 					var __accu0__ = self._compiled_rules;
/* 000346 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000346 */ 						var __accu1__ = functools;
/* 000346 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_regex, rule.rule, rule);
/* 000346 */ 					}) ());
/* 000346 */ 				}) ();
/* 000346 */ 			}
/* 000348 */ 			else if (__t__ (__eq__ (rule.rule_type, RULE_CALLABLE))) {
/* 000349 */ 				var thecallable = rule.rule;
/* 000350 */ 				if (__t__ (__call__ (_callable_accepts_u2lobj_arg, null, thecallable))) {
/* 000352 */ 					var thecallable = (function () {
/* 000352 */ 						var __accu0__ = functools;
/* 000352 */ 						return __call__ (__accu0__.partial, __accu0__, rule.rule, __kwargtrans__ ({u2lobj: self}));
/* 000352 */ 					}) ();
/* 000352 */ 				}
/* 000353 */ 				(function () {
/* 000353 */ 					var __accu0__ = self._compiled_rules;
/* 000354 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000354 */ 						var __accu1__ = functools;
/* 000354 */ 						return __call__ (__accu1__.partial, __accu1__, self._apply_rule_callable, thecallable, rule);
/* 000354 */ 					}) ());
/* 000354 */ 				}) ();
/* 000354 */ 			}
/* 000355 */ 			else {
/* 000357 */ 				var __except0__ = __call__ (py_TypeError, null, (function () {
/* 000357 */ 					var __accu0__ = 'Invalid rule type: {}';
/* 000357 */ 					return __call__ (__accu0__.format, __accu0__, rule.rule_type);
/* 000357 */ 				}) ());
/* 000357 */ 				__except0__.__cause__ = null;
/* 000357 */ 				throw __except0__;
/* 000357 */ 			}
/* 000357 */ 		}
/* 000360 */ 		if (__t__ (__call__ (isinstance, null, self.unknown_char_policy, basestring_cls))) {
/* 000361 */ 			self._do_unknown_char = (function () {
/* 000361 */ 				var __accu0__ = self;
/* 000361 */ 				return __call__ (__accu0__._get_method_fn, __accu0__, 'do_unknown_char', self.unknown_char_policy, __kwargtrans__ ({what: 'unknown_char_policy'}));
/* 000361 */ 			}) ();
/* 000361 */ 		}
/* 000366 */ 		else if (__t__ (__call__ (callable, null, self.unknown_char_policy))) {
/* 000367 */ 			var fn = self.unknown_char_policy;
/* 000368 */ 			if (__t__ (__call__ (_callable_accepts_u2lobj_arg, null, fn))) {
/* 000370 */ 				self._do_unknown_char = (function () {
/* 000370 */ 					var __accu0__ = functools;
/* 000370 */ 					return __call__ (__accu0__.partial, __accu0__, self.unknown_char_policy, __kwargtrans__ ({u2lobj: self}));
/* 000370 */ 				}) ();
/* 000370 */ 			}
/* 000371 */ 			else {
/* 000372 */ 				self._do_unknown_char = self.unknown_char_policy;
/* 000372 */ 			}
/* 000372 */ 		}
/* 000373 */ 		else {
/* 000374 */ 			var __except0__ = __call__ (py_TypeError, null, (function () {
/* 000374 */ 				var __accu0__ = 'Invalid argument for unknown_char_policy: {}';
/* 000375 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.unknown_char_policy));
/* 000375 */ 			}) ());
/* 000375 */ 			__except0__.__cause__ = null;
/* 000375 */ 			throw __except0__;
/* 000375 */ 		}
/* 000378 */ 		if (__t__ (!__t__ ((self.unknown_char_warning)))) {
/* 000379 */ 			self._do_warn_unknown_char = (function __lambda__ (ch) {
/* 000379 */ 				if (arguments.length) {
/* 000379 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 							switch (__attrib0__) {
/* 000379 */ 								case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							}
/* 000379 */ 						}
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 				else {
/* 000379 */ 				}
/* 000379 */ 				return null;
/* 000379 */ 			});
/* 000379 */ 		}
/* 000380 */ 		else {
/* 000381 */ 			self._do_warn_unknown_char = self._do_warn_unknown_char_defaultimpl;
/* 000381 */ 		}
/* 000384 */ 		if (__t__ (self.non_ascii_only)) {
/* 000385 */ 			self._maybe_skip_ascii = self._check_do_skip_ascii;
/* 000385 */ 		}
/* 000386 */ 		else {
/* 000387 */ 			self._maybe_skip_ascii = (function __lambda__ (s, p) {
/* 000387 */ 				if (arguments.length) {
/* 000387 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 							switch (__attrib0__) {
/* 000387 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 								case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							}
/* 000387 */ 						}
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 				else {
/* 000387 */ 				}
/* 000387 */ 				return false;
/* 000387 */ 			});
/* 000387 */ 		}
/* 000390 */ 		self._apply_protection = (function () {
/* 000390 */ 			var __accu0__ = self;
/* 000390 */ 			return __call__ (__accu0__._get_replacement_latex_fn, __accu0__, self.replacement_latex_protection);
/* 000390 */ 		}) ();
/* 000390 */ 	});},
/* 000394 */ 	get _get_method_fn () {return __get__ (this, function (self, base, py_name, what) {
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'base': var base = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000395 */ 		var selfmethname = __add__ (__add__ (__add__ ('_', base), '_'), (function () {
/* 000395 */ 			var __accu0__ = py_name;
/* 000395 */ 			return __call__ (__accu0__.py_replace, __accu0__, '-', '_');
/* 000395 */ 		}) ());
/* 000396 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, self, selfmethname))))) {
/* 000397 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000397 */ 				var __accu0__ = 'Invalid {}: {}';
/* 000397 */ 				return __call__ (__accu0__.format, __accu0__, what, py_name);
/* 000397 */ 			}) ());
/* 000397 */ 			__except0__.__cause__ = null;
/* 000397 */ 			throw __except0__;
/* 000397 */ 		}
/* 000398 */ 		return __call__ (getattr, null, self, selfmethname);
/* 000398 */ 	});},
/* 000400 */ 	get _get_replacement_latex_fn () {return __get__ (this, function (self, replacement_latex_protection) {
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'replacement_latex_protection': var replacement_latex_protection = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000401 */ 		if (__t__ (__call__ (callable, null, replacement_latex_protection))) {
/* 000402 */ 			return replacement_latex_protection;
/* 000402 */ 		}
/* 000403 */ 		return (function () {
/* 000403 */ 			var __accu0__ = self;
/* 000403 */ 			return __call__ (__accu0__._get_method_fn, __accu0__, 'apply_protection', replacement_latex_protection, __kwargtrans__ ({what: 'replacement_latex_protection'}));
/* 000403 */ 		}) ();
/* 000403 */ 	});},
/* 000409 */ 	get unicode_to_latex () {return __get__ (this, function (self, s) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000415 */ 		var s = __call__ (unicode_str, null, s);
/* 000416 */ 		var s = (function () {
/* 000416 */ 			var __accu0__ = unicodedata;
/* 000416 */ 			return __call__ (__accu0__.normalize, __accu0__, 'NFC', s);
/* 000416 */ 		}) ();
/* 000418 */ 		var _NS = __class__ ('_NS', [object], {
/* 000418 */ 			__module__: __name__,
/* 000418 */ 		});
/* 000419 */ 		var p = __call__ (_NS, null);
/* 000420 */ 		p.latex = (function () {
/* 000420 */ 			var __accu0__ = self;
/* 000420 */ 			return __call__ (__accu0__.latex_string_class, __accu0__);
/* 000420 */ 		}) ();
/* 000421 */ 		p.pos = 0;
/* 000423 */ 		while (__t__ (__lt__ (p.pos, __call__ (len, null, s)))) {
/* 000425 */ 			if (__t__ ((function () {
/* 000425 */ 				var __accu0__ = self;
/* 000425 */ 				return __call__ (__accu0__._maybe_skip_ascii, __accu0__, s, p);
/* 000425 */ 			}) ())) {
/* 000425 */ 				continue;
/* 000425 */ 			}
/* 000428 */ 			var __break1__ = false;
/* 000428 */ 			var __iterable0__ = self._compiled_rules;
/* 000428 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000428 */ 				var compiledrule = __getitem__ (__iterable0__, __index0__);
/* 000429 */ 				if (__t__ (__call__ (compiledrule, null, s, p))) {
/* 000429 */ 					__break1__ = true;
/* 000429 */ 					break;
/* 000429 */ 				}
/* 000429 */ 			}
/* 000431 */ 			if (!__break1__) {
/* 000435 */ 				var ch = __getitem__ (s, p.pos);
/* 000436 */ 				var o = __call__ (ord, null, ch);
/* 000437 */ 				if (__t__ (__t__ (__t__ (__ge__ (o, 32)) && __le__ (o, 127)) || __in__ (ch, '\n\r\t'))) {
/* 000438 */ 					p.latex = __call__ (__iadd__, null, p.latex, ch);
/* 000439 */ 					p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000439 */ 				}
/* 000440 */ 				else {
/* 000441 */ 					(function () {
/* 000441 */ 						var __accu0__ = self;
/* 000441 */ 						return __call__ (__accu0__._do_warn_unknown_char, __accu0__, ch);
/* 000441 */ 					}) ();
/* 000442 */ 					p.latex = __call__ (__iadd__, null, p.latex, (function () {
/* 000442 */ 						var __accu0__ = self;
/* 000442 */ 						return __call__ (__accu0__._do_unknown_char, __accu0__, ch);
/* 000442 */ 					}) ());
/* 000443 */ 					p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000445 */ 		return p.latex;
/* 000445 */ 	});},
/* 000448 */ 	get _check_do_skip_ascii () {return __get__ (this, function (self, s, p) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000449 */ 		if (__t__ (__lt__ (__call__ (ord, null, __getitem__ (s, p.pos)), 127))) {
/* 000451 */ 			p.latex = __call__ (__iadd__, null, p.latex, __getitem__ (s, p.pos));
/* 000452 */ 			p.pos = __call__ (__iadd__, null, p.pos, 1);
/* 000453 */ 			return true;
/* 000453 */ 		}
/* 000454 */ 		return false;
/* 000454 */ 	});},
/* 000457 */ 	get _apply_rule_dict () {return __get__ (this, function (self, ruledict, rule, s, p) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'ruledict': var ruledict = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000458 */ 		var o = __call__ (ord, null, __getitem__ (s, p.pos));
/* 000459 */ 		if (__t__ (__in__ (o, ruledict))) {
/* 000460 */ 			(function () {
/* 000460 */ 				var __accu0__ = self;
/* 000460 */ 				return __call__ (__accu0__._apply_replacement, __accu0__, p, __getitem__ (ruledict, o), 1, rule);
/* 000460 */ 			}) ();
/* 000461 */ 			return true;
/* 000461 */ 		}
/* 000462 */ 		return null;
/* 000462 */ 	});},
/* 000463 */ 	get _apply_rule_regex () {return __get__ (this, function (self, ruleregexes, rule, s, p) {
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'ruleregexes': var ruleregexes = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000464 */ 		var __iterable0__ = ruleregexes;
/* 000464 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000464 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000464 */ 			var regex = __left0__ [0];
/* 000464 */ 			var repl = __left0__ [1];
/* 000465 */ 			var m = __call__ (regex_match_pos, null, regex, s, p.pos);
/* 000466 */ 			if (__t__ (m !== null)) {
/* 000467 */ 				if (__t__ (__call__ (callable, null, repl))) {
/* 000468 */ 					var replstr = __call__ (repl, null, m);
/* 000468 */ 				}
/* 000469 */ 				else {
/* 000470 */ 					var replstr = __call__ (re_match_expand, null, m, repl);
/* 000470 */ 				}
/* 000471 */ 				(function () {
/* 000471 */ 					var __accu0__ = self;
/* 000471 */ 					return __call__ (__accu0__._apply_replacement, __accu0__, p, replstr, __sub__ ((function () {
/* 000471 */ 						var __accu1__ = m;
/* 000471 */ 						return __call__ (__accu1__.end, __accu1__);
/* 000471 */ 					}) (), (function () {
/* 000471 */ 						var __accu1__ = m;
/* 000471 */ 						return __call__ (__accu1__.start, __accu1__);
/* 000471 */ 					}) ()), rule);
/* 000471 */ 				}) ();
/* 000472 */ 				return true;
/* 000472 */ 			}
/* 000472 */ 		}
/* 000473 */ 		return null;
/* 000473 */ 	});},
/* 000474 */ 	get _apply_rule_callable () {return __get__ (this, function (self, rulecallable, rule, s, p) {
/* 000474 */ 		if (arguments.length) {
/* 000474 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000474 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000474 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000474 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000474 */ 					switch (__attrib0__) {
/* 000474 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'rulecallable': var rulecallable = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'rule': var rule = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 					}
/* 000474 */ 				}
/* 000474 */ 			}
/* 000474 */ 		}
/* 000474 */ 		else {
/* 000474 */ 		}
/* 000475 */ 		var res = __call__ (rulecallable, null, s, p.pos);
/* 000476 */ 		if (__t__ (res === null)) {
/* 000477 */ 			return null;
/* 000477 */ 		}
/* 000478 */ 		var __left0__ = res;
/* 000478 */ 		var consumed = __left0__ [0];
/* 000478 */ 		var repl = __left0__ [1];
/* 000479 */ 		(function () {
/* 000479 */ 			var __accu0__ = self;
/* 000479 */ 			return __call__ (__accu0__._apply_replacement, __accu0__, p, repl, consumed, rule);
/* 000479 */ 		}) ();
/* 000480 */ 		return true;
/* 000480 */ 	});},
/* 000482 */ 	get _apply_replacement () {return __get__ (this, function (self, p, repl, numchars, ruleobj) {
/* 000482 */ 		if (arguments.length) {
/* 000482 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 					switch (__attrib0__) {
/* 000482 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'numchars': var numchars = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'ruleobj': var ruleobj = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 			}
/* 000482 */ 		}
/* 000482 */ 		else {
/* 000482 */ 		}
/* 000485 */ 		var protect_fn = self._apply_protection;
/* 000488 */ 		if (__t__ (ruleobj.replacement_latex_protection !== null)) {
/* 000489 */ 			var protect_fn = (function () {
/* 000489 */ 				var __accu0__ = self;
/* 000489 */ 				return __call__ (__accu0__._get_replacement_latex_fn, __accu0__, ruleobj.replacement_latex_protection);
/* 000489 */ 			}) ();
/* 000489 */ 		}
/* 000493 */ 		var repl = __call__ (protect_fn, null, repl);
/* 000494 */ 		p.latex = __call__ (__iadd__, null, p.latex, repl);
/* 000495 */ 		p.pos = __call__ (__iadd__, null, p.pos, numchars);
/* 000495 */ 	});},
/* 000497 */ 	get _apply_protection_none () {return __get__ (this, function (self, repl) {
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000499 */ 		return repl;
/* 000499 */ 	});},
/* 000500 */ 	get _apply_protection_braces () {return __get__ (this, function (self, repl) {
/* 000500 */ 		if (arguments.length) {
/* 000500 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 					switch (__attrib0__) {
/* 000500 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 			}
/* 000500 */ 		}
/* 000500 */ 		else {
/* 000500 */ 		}
/* 000501 */ 		var k = (function () {
/* 000501 */ 			var __accu0__ = repl;
/* 000501 */ 			return __call__ (__accu0__.rfind, __accu0__, '\\');
/* 000501 */ 		}) ();
/* 000502 */ 		if (__t__ (__t__ (__ge__ (k, 0)) && (function () {
/* 000502 */ 			var __accu0__ = __getslice__ (repl, __add__ (k, 1), null, 1);
/* 000502 */ 			return __call__ (__accu0__.isalpha, __accu0__);
/* 000502 */ 		}) ())) {
/* 000504 */ 			return __add__ (__add__ ('{', repl), '}');
/* 000504 */ 		}
/* 000505 */ 		return repl;
/* 000505 */ 	});},
/* 000506 */ 	get _apply_protection_braces_almost_all () {return __get__ (this, function (self, repl) {
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000507 */ 		if (__t__ (__eq__ (__getslice__ (repl, 0, 1, 1), '\\'))) {
/* 000508 */ 			return __add__ (__add__ ('{', repl), '}');
/* 000508 */ 		}
/* 000509 */ 		return repl;
/* 000509 */ 	});},
/* 000510 */ 	get _apply_protection_braces_all () {return __get__ (this, function (self, repl) {
/* 000510 */ 		if (arguments.length) {
/* 000510 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000510 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000510 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000510 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000510 */ 					switch (__attrib0__) {
/* 000510 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 					}
/* 000510 */ 				}
/* 000510 */ 			}
/* 000510 */ 		}
/* 000510 */ 		else {
/* 000510 */ 		}
/* 000511 */ 		return __add__ (__add__ ('{', repl), '}');
/* 000511 */ 	});},
/* 000512 */ 	get _apply_protection_braces_after_macro () {return __get__ (this, function (self, repl) {
/* 000512 */ 		if (arguments.length) {
/* 000512 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000512 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000512 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000512 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000512 */ 					switch (__attrib0__) {
/* 000512 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000512 */ 						case 'repl': var repl = __allkwargs0__ [__attrib0__]; break;
/* 000512 */ 					}
/* 000512 */ 				}
/* 000512 */ 			}
/* 000512 */ 		}
/* 000512 */ 		else {
/* 000512 */ 		}
/* 000513 */ 		var k = (function () {
/* 000513 */ 			var __accu0__ = repl;
/* 000513 */ 			return __call__ (__accu0__.rfind, __accu0__, '\\');
/* 000513 */ 		}) ();
/* 000514 */ 		if (__t__ (__t__ (__ge__ (k, 0)) && (function () {
/* 000514 */ 			var __accu0__ = __getslice__ (repl, __add__ (k, 1), null, 1);
/* 000514 */ 			return __call__ (__accu0__.isalpha, __accu0__);
/* 000514 */ 		}) ())) {
/* 000516 */ 			return __add__ (repl, '{}');
/* 000516 */ 		}
/* 000517 */ 		return repl;
/* 000517 */ 	});},
/* 000520 */ 	get _do_unknown_char_keep () {return __get__ (this, function (self, ch) {
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000521 */ 		return ch;
/* 000521 */ 	});},
/* 000523 */ 	get _do_unknown_char_replace () {return __get__ (this, function (self, ch) {
/* 000523 */ 		if (arguments.length) {
/* 000523 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000523 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000523 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000523 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000523 */ 					switch (__attrib0__) {
/* 000523 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 					}
/* 000523 */ 				}
/* 000523 */ 			}
/* 000523 */ 		}
/* 000523 */ 		else {
/* 000523 */ 		}
/* 000524 */ 		return '{\\bfseries ?}';
/* 000524 */ 	});},
/* 000526 */ 	get _do_unknown_char_ignore () {return __get__ (this, function (self, ch) {
/* 000526 */ 		if (arguments.length) {
/* 000526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000526 */ 					switch (__attrib0__) {
/* 000526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 		else {
/* 000526 */ 		}
/* 000527 */ 		return '';
/* 000527 */ 	});},
/* 000529 */ 	get _do_unknown_char_fail () {return __get__ (this, function (self, ch) {
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000531 */ 		var __except0__ = __call__ (ValueError, null, (function () {
/* 000531 */ 			var __accu0__ = 'No known latex representation for character: U+{} - ‘{}’';
/* 000532 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (HexstrN, null, __call__ (ord, null, ch), 4), ch);
/* 000532 */ 		}) ());
/* 000532 */ 		__except0__.__cause__ = null;
/* 000532 */ 		throw __except0__;
/* 000532 */ 	});},
/* 000535 */ 	get _do_unknown_char_unihex () {return __get__ (this, function (self, ch) {
/* 000535 */ 		if (arguments.length) {
/* 000535 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000535 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000535 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000535 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000535 */ 					switch (__attrib0__) {
/* 000535 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 					}
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 		}
/* 000535 */ 		else {
/* 000535 */ 		}
/* 000537 */ 		return __add__ (__add__ ('\\ensuremath{\\langle}\\texttt{U+', __call__ (HexstrN, null, __call__ (ord, null, ch), 4)), '}\\ensuremath{\\rangle}');
/* 000537 */ 	});},
/* 000541 */ 	get _do_warn_unknown_char_defaultimpl () {return __get__ (this, function (self, ch) {
/* 000541 */ 		if (arguments.length) {
/* 000541 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000541 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000541 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000541 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000541 */ 					switch (__attrib0__) {
/* 000541 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 						case 'ch': var ch = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 					}
/* 000541 */ 				}
/* 000541 */ 			}
/* 000541 */ 		}
/* 000541 */ 		else {
/* 000541 */ 		}
/* 000542 */ 		(function () {
/* 000542 */ 			var __accu0__ = logger;
/* 000543 */ 			return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000543 */ 				var __accu1__ = 'No known latex representation for character: U+{} - ‘{}’';
/* 000544 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (HexstrN, null, __call__ (ord, null, ch), 4), ch);
/* 000544 */ 			}) ());
/* 000544 */ 		}) ();
/* 000544 */ 	});}
/* 000544 */ });
/* 000033 */ 
//# sourceMappingURL=pylatexenc.latexencode._unicode_to_latex_encoder.map