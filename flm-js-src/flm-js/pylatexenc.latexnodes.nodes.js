/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:45
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000040 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {ParsedArguments, LatexWalkerParseError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.nodes';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000045 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000045 */ 	if (arguments.length) {
/* 000045 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 				switch (__attrib0__) {
/* 000045 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 	}
/* 000045 */ 	else {
/* 000045 */ 	}
/* 000045 */ 	return x;
/* 000045 */ });
/* 000056 */ export var _display_abbrev_str = function (s, maxlen) {
/* 000056 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 000056 */ 		var maxlen = 40;
/* 000056 */ 	};
/* 000056 */ 	if (arguments.length) {
/* 000056 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 				switch (__attrib0__) {
/* 000056 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 	}
/* 000056 */ 	else {
/* 000056 */ 	}
/* 000057 */ 	var s = __call__ (str, null, s);
/* 000058 */ 	if (__t__ (__t__ (!__t__ ((maxlen))) || __lt__ (maxlen, 2))) {
/* 000059 */ 		var maxlen = 2;
/* 000059 */ 	}
/* 000060 */ 	if (__t__ (__lt__ (__call__ (len, null, s), maxlen))) {
/* 000061 */ 		return s;
/* 000061 */ 	}
/* 000062 */ 	return __add__ (__getslice__ (s, 0, __sub__ (maxlen, 2), 1), '…');
/* 000062 */ };
/* 000065 */ export var _display_str_delimiters = function (delimiters) {
/* 000065 */ 	if (arguments.length) {
/* 000065 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 				switch (__attrib0__) {
/* 000065 */ 					case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 	}
/* 000065 */ 	else {
/* 000065 */ 	}
/* 000067 */ 	var open_delim = '<??>';
/* 000068 */ 	var close_delim = '<??>';
/* 000070 */ 	try {
/* 000071 */ 		var __left0__ = delimiters;
/* 000071 */ 		var open_delim = __left0__ [0];
/* 000071 */ 		var close_delim = __left0__ [1];
/* 000071 */ 	}
/* 000071 */ 	catch (__except0__) {
/* 000073 */ 		// pass;
/* 000073 */ 	}
/* 000075 */ 	if (__t__ (open_delim === null)) {
/* 000076 */ 		var open_delim = '';
/* 000076 */ 	}
/* 000077 */ 	if (__t__ (close_delim === null)) {
/* 000078 */ 		var close_delim = '';
/* 000078 */ 	}
/* 000080 */ 	return tuple ([__call__ (str, null, open_delim), __call__ (str, null, close_delim)]);
/* 000080 */ };
/* 000092 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000092 */ 	__module__: __name__,
/* 000160 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000160 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 			var _redundant_fields = null;
/* 000160 */ 		};
/* 000160 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 			var parsing_state = null;
/* 000160 */ 		};
/* 000160 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 			var pos = null;
/* 000160 */ 		};
/* 000160 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 			var pos_end = null;
/* 000160 */ 		};
/* 000160 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 			var latex_walker = null;
/* 000160 */ 		};
/* 000160 */ 		var kwargs = dict ();
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 				delete kwargs.__kwargtrans__;
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000164 */ 		var len_ = (function () {
/* 000164 */ 			var __accu0__ = kwargs;
/* 000164 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000164 */ 		}) ();
/* 000170 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000172 */ 		self.parsing_state = parsing_state;
/* 000173 */ 		self.latex_walker = latex_walker;
/* 000174 */ 		self.pos = pos;
/* 000175 */ 		self.pos_end = pos_end;
/* 000177 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000178 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000178 */ 		}
/* 000181 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000182 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000184 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000184 */ 		}
/* 000185 */ 		else {
/* 000186 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000186 */ 		}
/* 000186 */ 	});},
/* 000188 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000195 */ 		return LatexNode;
/* 000195 */ 	});},
/* 000197 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000203 */ 		return __call__ (isinstance, null, self, t);
/* 000203 */ 	});},
/* 000206 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000207 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000208 */ 			return null;
/* 000208 */ 		}
/* 000209 */ 		return __sub__ (self.pos_end, self.pos);
/* 000209 */ 	});},
/* 000211 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000217 */ 		if (__t__ (self.latex_walker === null)) {
/* 000218 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000218 */ 			__except0__.__cause__ = null;
/* 000218 */ 			throw __except0__;
/* 000218 */ 		}
/* 000220 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000220 */ 	});},
/* 000222 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000226 */ 		return __t__ (other !== null) && __t__ (__call__ (isinstance, null, other, LatexNode)) && __t__ ((function () {
/* 000226 */ 			var __accu0__ = self;
/* 000226 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000226 */ 		}) () === (function () {
/* 000226 */ 			var __accu0__ = other;
/* 000226 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000234 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000234 */ 			var __accu0__ = [];
/* 000235 */ 			var __iterable0__ = self._fields;
/* 000235 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000238 */ 				(function () {
/* 000238 */ 					var __accu1__ = __accu0__;
/* 000237 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000237 */ 			return py_iter (__accu0__);
/* 000237 */ 		}) ());
/* 000237 */ 	});},
/* 000244 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000244 */ 		return NotImplemented;
/* 000244 */ 	});},
/* 000246 */ 	__hash__: null,
/* 000248 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000249 */ 		}) ());
/* 000249 */ 	});},
/* 000250 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000251 */ 		return (function () {
/* 000251 */ 			var __accu0__ = self;
/* 000251 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000251 */ 		}) ();
/* 000251 */ 	});},
/* 000252 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000254 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000254 */ 			var __accu0__ = self;
/* 000254 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000255 */ 		}) ().__name__, '('), (function () {
/* 000255 */ 			var __accu0__ = ', ';
/* 000255 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000255 */ 				var __accu1__ = [];
/* 000255 */ 				var __iterable0__ = self._fields;
/* 000255 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000255 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000255 */ 					(function () {
/* 000255 */ 						var __accu2__ = __accu1__;
/* 000255 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000255 */ 							var __accu3__ = '{}={!r}';
/* 000255 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000255 */ 						}) ());
/* 000255 */ 					}) ();
/* 000255 */ 				}
/* 000255 */ 				return __accu1__;
/* 000255 */ 			}) ());
/* 000255 */ 		}) ()), ')');
/* 000255 */ 	});},
/* 000259 */ 	get display_str () {return __get__ (this, function (self) {
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
/* 000260 */ 		return __add__ ('<UNKNOWN NODE TYPE>: ', __call__ (repr, null, self));
/* 000260 */ 	});},
/* 000262 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		return (function () {
/* 000263 */ 			var __accu0__ = visitor;
/* 000263 */ 			return __call__ (__accu0__.node_standard_process_unknown, __accu0__, self);
/* 000263 */ 		}) ();
/* 000263 */ 	});},
/* 000265 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000267 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000271 */ 		var __iterable0__ = self._fields;
/* 000271 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000271 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000272 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000274 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000274 */ 			}
/* 000275 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000277 */ 				// pass;
/* 000277 */ 			}
/* 000278 */ 			else {
/* 000279 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000279 */ 			}
/* 000279 */ 		}
/* 000280 */ 		(function () {
/* 000280 */ 			var __accu0__ = d;
/* 000280 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000280 */ 				var __accu1__ = latexwalker;
/* 000280 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000280 */ 			}) ());
/* 000280 */ 		}) ();
/* 000281 */ 		return d;
/* 000281 */ 	});},
/* 000283 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000284 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000285 */ 			return (function () {
/* 000285 */ 				var __accu0__ = self.latex_walker;
/* 000285 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000285 */ 			}) ();
/* 000285 */ 		}
/* 000286 */ 		return (function () {
/* 000286 */ 			var __accu0__ = '[@ pos {}]';
/* 000286 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000286 */ 		}) ();
/* 000286 */ 	});}
/* 000286 */ });
/* 000286 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000289 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000289 */ 	__module__: __name__,
/* 000298 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000298 */ 		var kwargs = dict ();
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 				delete kwargs.__kwargtrans__;
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000299 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000303 */ 		self.chars = chars;
/* 000303 */ 	});},
/* 000305 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000306 */ 		return LatexCharsNode;
/* 000306 */ 	});},
/* 000308 */ 	get display_str () {return __get__ (this, function (self) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		return __add__ (__add__ ('chars ‘', __call__ (_display_abbrev_str, null, self.chars)), '’');
/* 000309 */ 	});},
/* 000311 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000312 */ 		return (function () {
/* 000312 */ 			var __accu0__ = visitor;
/* 000312 */ 			return __call__ (__accu0__.node_standard_process_chars, __accu0__, self);
/* 000312 */ 		}) ();
/* 000312 */ 	});}
/* 000312 */ });
/* 000316 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000316 */ 	__module__: __name__,
/* 000341 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000341 */ 		var kwargs = dict ();
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 				delete kwargs.__kwargtrans__;
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		var delimiters = (function () {
/* 000342 */ 			var __accu0__ = kwargs;
/* 000342 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000342 */ 		}) ();
/* 000343 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000347 */ 		self.nodelist = nodelist;
/* 000348 */ 		self.delimiters = delimiters;
/* 000348 */ 	});},
/* 000350 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		return LatexGroupNode;
/* 000351 */ 	});},
/* 000353 */ 	get display_str () {return __get__ (this, function (self) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000354 */ 		var open_delim = __left0__ [0];
/* 000354 */ 		var close_delim = __left0__ [1];
/* 000355 */ 		return __add__ (__add__ (__add__ (__add__ ('group ‘', __call__ (str, null, open_delim)), '…'), __call__ (str, null, close_delim)), '’');
/* 000355 */ 	});},
/* 000357 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		return (function () {
/* 000358 */ 			var __accu0__ = visitor;
/* 000358 */ 			return __call__ (__accu0__.node_standard_process_group, __accu0__, self);
/* 000358 */ 		}) ();
/* 000358 */ 	});}
/* 000358 */ });
/* 000361 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000361 */ 	__module__: __name__,
/* 000375 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000375 */ 		var kwargs = dict ();
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 				delete kwargs.__kwargtrans__;
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000376 */ 		var comment_post_space = (function () {
/* 000376 */ 			var __accu0__ = kwargs;
/* 000376 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000376 */ 		}) ();
/* 000378 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000383 */ 		self.comment = comment;
/* 000384 */ 		self.comment_post_space = comment_post_space;
/* 000384 */ 	});},
/* 000386 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000387 */ 		return LatexCommentNode;
/* 000387 */ 	});},
/* 000389 */ 	get display_str () {return __get__ (this, function (self) {
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000390 */ 		return __add__ (__add__ ('comment ‘', __call__ (_display_abbrev_str, null, (function () {
/* 000390 */ 			var __accu0__ = self.comment;
/* 000390 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000390 */ 		}) ())), '’');
/* 000390 */ 	});},
/* 000392 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		return (function () {
/* 000393 */ 			var __accu0__ = visitor;
/* 000393 */ 			return __call__ (__accu0__.node_standard_process_comment, __accu0__, self);
/* 000393 */ 		}) ();
/* 000393 */ 	});}
/* 000393 */ });
/* 000396 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000396 */ 	__module__: __name__,
/* 000460 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000460 */ 		var kwargs = dict ();
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 				delete kwargs.__kwargtrans__;
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000461 */ 		var nodeargd = (function () {
/* 000461 */ 			var __accu0__ = kwargs;
/* 000461 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000461 */ 		}) ();
/* 000462 */ 		var macro_post_space = (function () {
/* 000462 */ 			var __accu0__ = kwargs;
/* 000462 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000462 */ 		}) ();
/* 000463 */ 		var spec = (function () {
/* 000463 */ 			var __accu0__ = kwargs;
/* 000463 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000463 */ 		}) ();
/* 000465 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000470 */ 		self.macroname = macroname;
/* 000471 */ 		self.spec = spec;
/* 000472 */ 		self.nodeargd = nodeargd;
/* 000473 */ 		self.macro_post_space = macro_post_space;
/* 000473 */ 	});},
/* 000475 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000476 */ 		return LatexMacroNode;
/* 000476 */ 	});},
/* 000478 */ 	get display_str () {return __get__ (this, function (self) {
/* 000478 */ 		if (arguments.length) {
/* 000478 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000478 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000478 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000478 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000478 */ 					switch (__attrib0__) {
/* 000478 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 					}
/* 000478 */ 				}
/* 000478 */ 			}
/* 000478 */ 		}
/* 000478 */ 		else {
/* 000478 */ 		}
/* 000479 */ 		return __add__ (__add__ ('macro ‘\\', __call__ (str, null, __t__ (self.macroname) || '??')), '’');
/* 000479 */ 	});},
/* 000481 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000482 */ 		return (function () {
/* 000482 */ 			var __accu0__ = visitor;
/* 000482 */ 			return __call__ (__accu0__.node_standard_process_macro, __accu0__, self);
/* 000482 */ 		}) ();
/* 000482 */ 	});}
/* 000482 */ });
/* 000505 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000505 */ 	__module__: __name__,
/* 000571 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000571 */ 		var kwargs = dict ();
/* 000571 */ 		if (arguments.length) {
/* 000571 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000571 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000571 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000571 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000571 */ 					switch (__attrib0__) {
/* 000571 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000571 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000571 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000571 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000571 */ 					}
/* 000571 */ 				}
/* 000571 */ 				delete kwargs.__kwargtrans__;
/* 000571 */ 			}
/* 000571 */ 		}
/* 000571 */ 		else {
/* 000571 */ 		}
/* 000572 */ 		var nodeargd = (function () {
/* 000572 */ 			var __accu0__ = kwargs;
/* 000572 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000572 */ 		}) ();
/* 000573 */ 		var spec = (function () {
/* 000573 */ 			var __accu0__ = kwargs;
/* 000573 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000573 */ 		}) ();
/* 000578 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000583 */ 		self.environmentname = environmentname;
/* 000584 */ 		self.spec = spec;
/* 000585 */ 		self.nodelist = nodelist;
/* 000586 */ 		self.nodeargd = nodeargd;
/* 000586 */ 	});},
/* 000602 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000602 */ 		if (arguments.length) {
/* 000602 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000602 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000602 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000602 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000602 */ 					switch (__attrib0__) {
/* 000602 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 					}
/* 000602 */ 				}
/* 000602 */ 			}
/* 000602 */ 		}
/* 000602 */ 		else {
/* 000602 */ 		}
/* 000603 */ 		return LatexEnvironmentNode;
/* 000603 */ 	});},
/* 000605 */ 	get display_str () {return __get__ (this, function (self) {
/* 000605 */ 		if (arguments.length) {
/* 000605 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000605 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000605 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000605 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000605 */ 					switch (__attrib0__) {
/* 000605 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 					}
/* 000605 */ 				}
/* 000605 */ 			}
/* 000605 */ 		}
/* 000605 */ 		else {
/* 000605 */ 		}
/* 000606 */ 		return __add__ (__add__ ('environment ‘{', __call__ (str, null, self.environmentname)), '}’');
/* 000606 */ 	});},
/* 000608 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000608 */ 		if (arguments.length) {
/* 000608 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000608 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000608 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000608 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000608 */ 					switch (__attrib0__) {
/* 000608 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 					}
/* 000608 */ 				}
/* 000608 */ 			}
/* 000608 */ 		}
/* 000608 */ 		else {
/* 000608 */ 		}
/* 000609 */ 		return (function () {
/* 000609 */ 			var __accu0__ = visitor;
/* 000609 */ 			return __call__ (__accu0__.node_standard_process_environment, __accu0__, self);
/* 000609 */ 		}) ();
/* 000609 */ 	});}
/* 000609 */ });
/* 000613 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000613 */ 	__module__: __name__,
/* 000651 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000651 */ 		var kwargs = dict ();
/* 000651 */ 		if (arguments.length) {
/* 000651 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000651 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000651 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000651 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000651 */ 					switch (__attrib0__) {
/* 000651 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000651 */ 					}
/* 000651 */ 				}
/* 000651 */ 				delete kwargs.__kwargtrans__;
/* 000651 */ 			}
/* 000651 */ 		}
/* 000651 */ 		else {
/* 000651 */ 		}
/* 000653 */ 		var spec = (function () {
/* 000653 */ 			var __accu0__ = kwargs;
/* 000653 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000653 */ 		}) ();
/* 000654 */ 		var nodeargd = (function () {
/* 000654 */ 			var __accu0__ = kwargs;
/* 000654 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000654 */ 		}) ();
/* 000656 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000660 */ 		self.specials_chars = specials_chars;
/* 000661 */ 		self.spec = spec;
/* 000662 */ 		self.nodeargd = nodeargd;
/* 000662 */ 	});},
/* 000664 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000665 */ 		return LatexSpecialsNode;
/* 000665 */ 	});},
/* 000667 */ 	get display_str () {return __get__ (this, function (self) {
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000668 */ 		return __add__ (__add__ ('specials ‘', __call__ (str, null, self.specials_chars)), '’');
/* 000668 */ 	});},
/* 000670 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000670 */ 		if (arguments.length) {
/* 000670 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000670 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000670 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000670 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000670 */ 					switch (__attrib0__) {
/* 000670 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 					}
/* 000670 */ 				}
/* 000670 */ 			}
/* 000670 */ 		}
/* 000670 */ 		else {
/* 000670 */ 		}
/* 000671 */ 		return (function () {
/* 000671 */ 			var __accu0__ = visitor;
/* 000671 */ 			return __call__ (__accu0__.node_standard_process_specials, __accu0__, self);
/* 000671 */ 		}) ();
/* 000671 */ 	});}
/* 000671 */ });
/* 000674 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000674 */ 	__module__: __name__,
/* 000700 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000700 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000700 */ 			var nodelist = [];
/* 000700 */ 		};
/* 000700 */ 		var kwargs = dict ();
/* 000700 */ 		if (arguments.length) {
/* 000700 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000700 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000700 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000700 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000700 */ 					switch (__attrib0__) {
/* 000700 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000700 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000700 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000700 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000700 */ 					}
/* 000700 */ 				}
/* 000700 */ 				delete kwargs.__kwargtrans__;
/* 000700 */ 			}
/* 000700 */ 		}
/* 000700 */ 		else {
/* 000700 */ 		}
/* 000701 */ 		var delimiters = (function () {
/* 000701 */ 			var __accu0__ = kwargs;
/* 000701 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000701 */ 		}) ();
/* 000703 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000708 */ 		self.displaytype = displaytype;
/* 000709 */ 		self.nodelist = nodelist;
/* 000710 */ 		self.delimiters = delimiters;
/* 000710 */ 	});},
/* 000712 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000712 */ 		if (arguments.length) {
/* 000712 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000712 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000712 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000712 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000712 */ 					switch (__attrib0__) {
/* 000712 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000712 */ 					}
/* 000712 */ 				}
/* 000712 */ 			}
/* 000712 */ 		}
/* 000712 */ 		else {
/* 000712 */ 		}
/* 000713 */ 		return LatexMathNode;
/* 000713 */ 	});},
/* 000715 */ 	get display_str () {return __get__ (this, function (self) {
/* 000715 */ 		if (arguments.length) {
/* 000715 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000715 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000715 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000715 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000715 */ 					switch (__attrib0__) {
/* 000715 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000715 */ 					}
/* 000715 */ 				}
/* 000715 */ 			}
/* 000715 */ 		}
/* 000715 */ 		else {
/* 000715 */ 		}
/* 000716 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000716 */ 		var open_delim = __left0__ [0];
/* 000716 */ 		var close_delim = __left0__ [1];
/* 000717 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (self.displaytype, ' math ‘'), open_delim), '…'), close_delim), '’');
/* 000717 */ 	});},
/* 000719 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000719 */ 		if (arguments.length) {
/* 000719 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000719 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000719 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000719 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000719 */ 					switch (__attrib0__) {
/* 000719 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 					}
/* 000719 */ 				}
/* 000719 */ 			}
/* 000719 */ 		}
/* 000719 */ 		else {
/* 000719 */ 		}
/* 000720 */ 		return (function () {
/* 000720 */ 			var __accu0__ = visitor;
/* 000720 */ 			return __call__ (__accu0__.node_standard_process_math, __accu0__, self);
/* 000720 */ 		}) ();
/* 000720 */ 	});}
/* 000720 */ });
/* 000728 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000728 */ 	__module__: __name__,
/* 000770 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000770 */ 		var kwargs = dict ();
/* 000770 */ 		if (arguments.length) {
/* 000770 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000770 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000770 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000770 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000770 */ 					switch (__attrib0__) {
/* 000770 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000770 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000770 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000770 */ 					}
/* 000770 */ 				}
/* 000770 */ 				delete kwargs.__kwargtrans__;
/* 000770 */ 			}
/* 000770 */ 		}
/* 000770 */ 		else {
/* 000770 */ 		}
/* 000772 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000773 */ 			var obj = nodelist;
/* 000774 */ 			self.nodelist = obj.nodelist;
/* 000775 */ 			self.parsing_state = obj.parsing_state;
/* 000776 */ 			self.latex_walker = obj.latex_walker;
/* 000777 */ 			self.pos = obj.pos;
/* 000778 */ 			self.pos_end = obj.pos_end;
/* 000779 */ 			return ;
/* 000779 */ 		}
/* 000781 */ 		self.nodelist = nodelist;
/* 000783 */ 		if (__t__ (self.nodelist === null)) {
/* 000784 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot create a LatexNodeList with nodelist=None');
/* 000784 */ 			__except0__.__cause__ = null;
/* 000784 */ 			throw __except0__;
/* 000784 */ 		}
/* 000786 */ 		self.parsing_state = (function () {
/* 000786 */ 			var __accu0__ = kwargs;
/* 000786 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000786 */ 		}) ();
/* 000787 */ 		self.latex_walker = (function () {
/* 000787 */ 			var __accu0__ = kwargs;
/* 000787 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000787 */ 		}) ();
/* 000788 */ 		self.pos = (function () {
/* 000788 */ 			var __accu0__ = kwargs;
/* 000788 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000788 */ 		}) ();
/* 000789 */ 		self.pos_end = (function () {
/* 000789 */ 			var __accu0__ = kwargs;
/* 000789 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000789 */ 		}) ();
/* 000791 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000793 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000793 */ 			__except0__.__cause__ = null;
/* 000793 */ 			throw __except0__;
/* 000793 */ 		}
/* 000796 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000796 */ 		self.pos = __left0__ [0];
/* 000796 */ 		self.pos_end = __left0__ [1];
/* 000796 */ 	});},
/* 000799 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000803 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000803 */ 		if (arguments.length) {
/* 000803 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000803 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000803 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000803 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000803 */ 					switch (__attrib0__) {
/* 000803 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 					}
/* 000803 */ 				}
/* 000803 */ 			}
/* 000803 */ 		}
/* 000803 */ 		else {
/* 000803 */ 		}
/* 000804 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000805 */ 			return null;
/* 000805 */ 		}
/* 000806 */ 		return __sub__ (self.pos_end, self.pos);
/* 000806 */ 	});},
/* 000809 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000809 */ 		if (arguments.length) {
/* 000809 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000809 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000809 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000809 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000809 */ 					switch (__attrib0__) {
/* 000809 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000809 */ 					}
/* 000809 */ 				}
/* 000809 */ 			}
/* 000809 */ 		}
/* 000809 */ 		else {
/* 000809 */ 		}
/* 000810 */ 		if (__t__ (self.nodelist === null)) {
/* 000811 */ 			return __call__ (py_iter, null, []);
/* 000811 */ 		}
/* 000812 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000812 */ 	});},
/* 000812 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000815 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000815 */ 		if (arguments.length) {
/* 000815 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000815 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000815 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000815 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000815 */ 					switch (__attrib0__) {
/* 000815 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 					}
/* 000815 */ 				}
/* 000815 */ 			}
/* 000815 */ 		}
/* 000815 */ 		else {
/* 000815 */ 		}
/* 000826 */ 		try {
/* 000827 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000828 */ 				var __left0__ = index;
/* 000828 */ 				var lower = __left0__ [0];
/* 000828 */ 				var upper = __left0__ [1];
/* 000828 */ 				var step = __left0__ [2];
/* 000829 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000829 */ 			}
/* 000829 */ 		}
/* 000829 */ 		catch (__except0__) {
/* 000831 */ 			// pass;
/* 000831 */ 		}
/* 000834 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000835 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000835 */ 		}
/* 000837 */ 		return __getitem__ (self.nodelist, index);
/* 000837 */ 	});},
/* 000840 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000840 */ 		if (arguments.length) {
/* 000840 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000840 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000840 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000840 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000840 */ 					switch (__attrib0__) {
/* 000840 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 					}
/* 000840 */ 				}
/* 000840 */ 			}
/* 000840 */ 		}
/* 000840 */ 		else {
/* 000840 */ 		}
/* 000841 */ 		return __call__ (len, null, self.nodelist);
/* 000841 */ 	});},
/* 000844 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000844 */ 		if (arguments.length) {
/* 000844 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000844 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000844 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000844 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000844 */ 					switch (__attrib0__) {
/* 000844 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 					}
/* 000844 */ 				}
/* 000844 */ 			}
/* 000844 */ 		}
/* 000844 */ 		else {
/* 000844 */ 		}
/* 000851 */ 		return (function () {
/* 000851 */ 			var __accu0__ = '';
/* 000851 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000851 */ 				var __accu1__ = [];
/* 000851 */ 				var __iterable0__ = self.nodelist;
/* 000851 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000853 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000853 */ 					if (__t__ (n !== null)) {
/* 000854 */ 						(function () {
/* 000854 */ 							var __accu2__ = __accu1__;
/* 000852 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000852 */ 								var __accu3__ = n;
/* 000852 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000852 */ 							}) ());
/* 000852 */ 						}) ();
/* 000852 */ 					}
/* 000852 */ 				}
/* 000852 */ 				return __accu1__;
/* 000852 */ 			}) ());
/* 000852 */ 		}) ();
/* 000852 */ 	});},
/* 000858 */ 	get display_str () {return __get__ (this, function (self) {
/* 000858 */ 		if (arguments.length) {
/* 000858 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000858 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000858 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000858 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000858 */ 					switch (__attrib0__) {
/* 000858 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000858 */ 					}
/* 000858 */ 				}
/* 000858 */ 			}
/* 000858 */ 		}
/* 000858 */ 		else {
/* 000858 */ 		}
/* 000862 */ 		if (__t__ (self.nodelist === null)) {
/* 000863 */ 			var list_len = 'null list';
/* 000864 */ 			var list_preview = '';
/* 000864 */ 		}
/* 000865 */ 		else {
/* 000866 */ 			var list_len = __call__ (len, null, self.nodelist);
/* 000869 */ 			var list_preview = __add__ (__add__ (': ', (function () {
/* 000869 */ 				var __accu0__ = ', ';
/* 000869 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000869 */ 					var __accu1__ = [];
/* 000869 */ 					var __iterable0__ = __getslice__ (self.nodelist, 0, 2, 1);
/* 000869 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000871 */ 						var n = __getitem__ (__iterable0__, __index0__);
/* 000871 */ 						(function () {
/* 000871 */ 							var __accu2__ = __accu1__;
/* 000870 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (n !== null) ? (function () {
/* 000870 */ 								var __accu3__ = n;
/* 000870 */ 								return __call__ (__accu3__.display_str, __accu3__);
/* 000870 */ 							}) () : 'None'));
/* 000870 */ 						}) ();
/* 000870 */ 					}
/* 000870 */ 					return __accu1__;
/* 000870 */ 				}) ());
/* 000870 */ 			}) ()), (__t__ (__gt__ (list_len, 2)) ? ' …' : ''));
/* 000870 */ 		}
/* 000875 */ 		return __add__ (__add__ (__add__ ('list of nodes (', __call__ (str, null, list_len)), ')'), list_preview);
/* 000875 */ 	});},
/* 000877 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000877 */ 		if (arguments.length) {
/* 000877 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000877 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000877 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000877 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000877 */ 					switch (__attrib0__) {
/* 000877 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 					}
/* 000877 */ 				}
/* 000877 */ 			}
/* 000877 */ 		}
/* 000877 */ 		else {
/* 000877 */ 		}
/* 000878 */ 		return (function () {
/* 000878 */ 			var __accu0__ = visitor;
/* 000878 */ 			return __call__ (__accu0__.node_standard_process_list, __accu0__, self);
/* 000878 */ 		}) ();
/* 000878 */ 	});},
/* 000881 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000881 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000881 */ 			var node_predicate_fn = null;
/* 000881 */ 		};
/* 000881 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000881 */ 			var skip_none = true;
/* 000881 */ 		};
/* 000881 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000881 */ 			var skip_comments = false;
/* 000881 */ 		};
/* 000881 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000881 */ 			var skip_whitespace_char_nodes = false;
/* 000881 */ 		};
/* 000881 */ 		if (arguments.length) {
/* 000881 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000881 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000881 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000881 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000881 */ 					switch (__attrib0__) {
/* 000881 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 					}
/* 000881 */ 				}
/* 000881 */ 			}
/* 000881 */ 		}
/* 000881 */ 		else {
/* 000881 */ 		}
/* 000884 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000885 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000885 */ 		}
/* 000886 */ 		else {
/* 000887 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000887 */ 				var kwargs = dict ();
/* 000887 */ 				if (arguments.length) {
/* 000887 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 							switch (__attrib0__) {
/* 000887 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000887 */ 							}
/* 000887 */ 						}
/* 000887 */ 						delete kwargs.__kwargtrans__;
/* 000887 */ 					}
/* 000887 */ 				}
/* 000887 */ 				else {
/* 000887 */ 				}
/* 000887 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000887 */ 			});
/* 000887 */ 		}
/* 000889 */ 		var filter_full_predicate_fn = function (n) {
/* 000889 */ 			if (arguments.length) {
/* 000889 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000889 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000889 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000889 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000889 */ 						switch (__attrib0__) {
/* 000889 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						}
/* 000889 */ 					}
/* 000889 */ 				}
/* 000889 */ 			}
/* 000889 */ 			else {
/* 000889 */ 			}
/* 000890 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000891 */ 				return false;
/* 000891 */ 			}
/* 000892 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000892 */ 				var __accu0__ = n;
/* 000892 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000892 */ 			}) ())) {
/* 000893 */ 				return false;
/* 000893 */ 			}
/* 000894 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000894 */ 				var __accu0__ = n;
/* 000894 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000895 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000895 */ 				var __accu0__ = n.chars;
/* 000895 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000895 */ 			}) ()), 0))) {
/* 000896 */ 				return false;
/* 000896 */ 			}
/* 000897 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000898 */ 				return __call__ (node_predicate_fn, null, n);
/* 000898 */ 			}
/* 000899 */ 			return true;
/* 000899 */ 		};
/* 000901 */ 		var filtered_nodes = (function () {
/* 000901 */ 			var __accu0__ = [];
/* 000901 */ 			var __iterable0__ = self.nodelist;
/* 000901 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000903 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000904 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000904 */ 					(function () {
/* 000904 */ 						var __accu1__ = __accu0__;
/* 000904 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000904 */ 					}) ();
/* 000904 */ 				}
/* 000904 */ 			}
/* 000904 */ 			return __accu0__;
/* 000904 */ 		}) ();
/* 000913 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000913 */ 	});},
/* 000917 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split, call_make_nodelist) {
/* 000917 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000917 */ 			var skip_none = true;
/* 000917 */ 		};
/* 000917 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000917 */ 			var keep_separators = false;
/* 000917 */ 		};
/* 000917 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000917 */ 			var max_split = null;
/* 000917 */ 		};
/* 000917 */ 		if (typeof call_make_nodelist == 'undefined' || (call_make_nodelist != null && call_make_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000917 */ 			var call_make_nodelist = true;
/* 000917 */ 		};
/* 000917 */ 		if (arguments.length) {
/* 000917 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000917 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000917 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000917 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000917 */ 					switch (__attrib0__) {
/* 000917 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 						case 'call_make_nodelist': var call_make_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000917 */ 					}
/* 000917 */ 				}
/* 000917 */ 			}
/* 000917 */ 		}
/* 000917 */ 		else {
/* 000917 */ 		}
/* 000920 */ 		var nodelists_list = [[]];
/* 000922 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000923 */ 			var no_more_splits = true;
/* 000923 */ 		}
/* 000924 */ 		else {
/* 000925 */ 			var no_more_splits = false;
/* 000925 */ 		}
/* 000927 */ 		var __iterable0__ = self.nodelist;
/* 000927 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000927 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000928 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000928 */ 				continue;
/* 000928 */ 			}
/* 000930 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000931 */ 				if (__t__ (keep_separators)) {
/* 000932 */ 					(function () {
/* 000932 */ 						var __accu0__ = nodelists_list;
/* 000932 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000932 */ 					}) ();
/* 000932 */ 				}
/* 000933 */ 				else {
/* 000934 */ 					(function () {
/* 000934 */ 						var __accu0__ = nodelists_list;
/* 000934 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000934 */ 					}) ();
/* 000934 */ 				}
/* 000936 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000937 */ 					var no_more_splits = true;
/* 000937 */ 				}
/* 000937 */ 			}
/* 000938 */ 			else {
/* 000939 */ 				(function () {
/* 000939 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000939 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000939 */ 				}) ();
/* 000939 */ 			}
/* 000939 */ 		}
/* 000941 */ 		if (__t__ (__t__ (call_make_nodelist) && self.latex_walker !== null)) {
/* 000942 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000942 */ 		}
/* 000943 */ 		else {
/* 000944 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000944 */ 				var kwargs = dict ();
/* 000944 */ 				if (arguments.length) {
/* 000944 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000944 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000944 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000944 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000944 */ 							switch (__attrib0__) {
/* 000944 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000944 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000944 */ 							}
/* 000944 */ 						}
/* 000944 */ 						delete kwargs.__kwargtrans__;
/* 000944 */ 					}
/* 000944 */ 				}
/* 000944 */ 				else {
/* 000944 */ 				}
/* 000944 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000944 */ 			});
/* 000944 */ 		}
/* 000946 */ 		return (function () {
/* 000946 */ 			var __accu0__ = [];
/* 000946 */ 			var __iterable0__ = nodelists_list;
/* 000946 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000948 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000948 */ 				(function () {
/* 000948 */ 					var __accu1__ = __accu0__;
/* 000947 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000947 */ 				}) ();
/* 000947 */ 			}
/* 000947 */ 			return __accu0__;
/* 000947 */ 		}) ();
/* 000947 */ 	});},
/* 000951 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000951 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000951 */ 			var max_split = null;
/* 000951 */ 		};
/* 000951 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000951 */ 			var keep_empty = false;
/* 000951 */ 		};
/* 000951 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000951 */ 			var skip_none = true;
/* 000951 */ 		};
/* 000951 */ 		if (arguments.length) {
/* 000951 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000951 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000951 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000951 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000951 */ 					switch (__attrib0__) {
/* 000951 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 					}
/* 000951 */ 				}
/* 000951 */ 			}
/* 000951 */ 		}
/* 000951 */ 		else {
/* 000951 */ 		}
/* 000990 */ 		var split_node_lists = [];
/* 000992 */ 		var get_split_match_start_end = function (m, offset) {
/* 000992 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000992 */ 				var offset = 0;
/* 000992 */ 			};
/* 000992 */ 			if (arguments.length) {
/* 000992 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000992 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000992 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000992 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000992 */ 						switch (__attrib0__) {
/* 000992 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000992 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000992 */ 						}
/* 000992 */ 					}
/* 000992 */ 				}
/* 000992 */ 			}
/* 000992 */ 			else {
/* 000992 */ 			}
/* 000993 */ 			if (__t__ (m === null)) {
/* 000994 */ 				return tuple ([__neg__ (1), null]);
/* 000994 */ 			}
/* 000995 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000996 */ 				return tuple ([__add__ (offset, (function () {
/* 000996 */ 					var __accu0__ = m;
/* 000996 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000996 */ 				}) ()), __add__ (offset, (function () {
/* 000996 */ 					var __accu0__ = m;
/* 000996 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000996 */ 				}) ())]);
/* 000996 */ 			}
/* 000997 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000998 */ 				return tuple ([__neg__ (1), null]);
/* 000998 */ 			}
/* 000999 */ 			var __left0__ = m;
/* 000999 */ 			var start = __left0__ [0];
/* 000999 */ 			var end = __left0__ [1];
/* 001000 */ 			if (__t__ (start === null)) {
/* 001001 */ 				var start = __neg__ (1);
/* 001001 */ 			}
/* 001002 */ 			else {
/* 001003 */ 				var start = __add__ (offset, start);
/* 001003 */ 			}
/* 001004 */ 			var end = __add__ (offset, end);
/* 001005 */ 			return tuple ([start, end]);
/* 001005 */ 		};
/* 001007 */ 		var get_next_split = function (chars, pos) {
/* 001007 */ 			if (arguments.length) {
/* 001007 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001007 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001007 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001007 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001007 */ 						switch (__attrib0__) {
/* 001007 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001007 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001007 */ 						}
/* 001007 */ 					}
/* 001007 */ 				}
/* 001007 */ 			}
/* 001007 */ 			else {
/* 001007 */ 			}
/* 001009 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 001010 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 001010 */ 			}
/* 001012 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 001018 */ 				var m = (function () {
/* 001018 */ 					var __accu0__ = sep_chars;
/* 001018 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 001018 */ 				}) ();
/* 001019 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 001019 */ 			}
/* 001021 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 001022 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 001023 */ 				return __call__ (get_split_match_start_end, null, m);
/* 001023 */ 			}
/* 001025 */ 			var idx = (function () {
/* 001025 */ 				var __accu0__ = chars;
/* 001025 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 001025 */ 			}) ();
/* 001026 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 001027 */ 				return tuple ([__neg__ (1), null]);
/* 001027 */ 			}
/* 001028 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 001028 */ 		};
/* 001031 */ 		var lw = self.latex_walker;
/* 001032 */ 		if (__t__ (lw !== null)) {
/* 001033 */ 			var make_node = lw.make_node;
/* 001034 */ 			var make_nodelist = lw.make_nodelist;
/* 001034 */ 		}
/* 001035 */ 		else {
/* 001036 */ 			var make_node = (function __lambda__ (cls) {
/* 001036 */ 				var kwargs = dict ();
/* 001036 */ 				if (arguments.length) {
/* 001036 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001036 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001036 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001036 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001036 */ 							switch (__attrib0__) {
/* 001036 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 001036 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001036 */ 							}
/* 001036 */ 						}
/* 001036 */ 						delete kwargs.__kwargtrans__;
/* 001036 */ 					}
/* 001036 */ 				}
/* 001036 */ 				else {
/* 001036 */ 				}
/* 001036 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 001036 */ 			});
/* 001037 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001037 */ 				var kwargs = dict ();
/* 001037 */ 				if (arguments.length) {
/* 001037 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001037 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001037 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001037 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001037 */ 							switch (__attrib0__) {
/* 001037 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001037 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001037 */ 							}
/* 001037 */ 						}
/* 001037 */ 						delete kwargs.__kwargtrans__;
/* 001037 */ 					}
/* 001037 */ 				}
/* 001037 */ 				else {
/* 001037 */ 				}
/* 001037 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001037 */ 			});
/* 001037 */ 		}
/* 001039 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 001039 */ 			if (arguments.length) {
/* 001039 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001039 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001039 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001039 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001039 */ 						switch (__attrib0__) {
/* 001039 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 						}
/* 001039 */ 					}
/* 001039 */ 				}
/* 001039 */ 			}
/* 001039 */ 			else {
/* 001039 */ 			}
/* 001040 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 001040 */ 		};
/* 001046 */ 		var flush_nodes = function (nodes, pos_end) {
/* 001046 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 001046 */ 				var pos_end = null;
/* 001046 */ 			};
/* 001046 */ 			if (arguments.length) {
/* 001046 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001046 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001046 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001046 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001046 */ 						switch (__attrib0__) {
/* 001046 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001046 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001046 */ 						}
/* 001046 */ 					}
/* 001046 */ 				}
/* 001046 */ 			}
/* 001046 */ 			else {
/* 001046 */ 			}
/* 001050 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 001053 */ 			(function () {
/* 001053 */ 				var __accu0__ = split_node_lists;
/* 001053 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 001053 */ 			}) ();
/* 001053 */ 		};
/* 001055 */ 		var pending_nodes = [];
/* 001057 */ 		var __iterable0__ = self.nodelist;
/* 001057 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001057 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001059 */ 			if (__t__ (n === null)) {
/* 001060 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001061 */ 					(function () {
/* 001061 */ 						var __accu0__ = pending_nodes;
/* 001061 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001061 */ 					}) ();
/* 001061 */ 				}
/* 001061 */ 				continue;
/* 001061 */ 			}
/* 001064 */ 			if (__t__ ((function () {
/* 001064 */ 				var __accu0__ = n;
/* 001064 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001064 */ 			}) ())) {
/* 001066 */ 				var next_sep_end = 0;
/* 001068 */ 				while (__t__ (true)) {
/* 001069 */ 					var prev_sep_end = next_sep_end;
/* 001070 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001070 */ 					var next_sep_idx = __left0__ [0];
/* 001070 */ 					var next_sep_end = __left0__ [1];
/* 001072 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001073 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001074 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001083 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001084 */ 								(function () {
/* 001084 */ 									var __accu0__ = pending_nodes;
/* 001085 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001085 */ 								}) ();
/* 001085 */ 							}
/* 001087 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001088 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001088 */ 							}
/* 001089 */ 							var pending_nodes = [];
/* 001089 */ 							continue;
/* 001089 */ 						}
/* 001091 */ 						else {
/* 001094 */ 							var thenodes = [];
/* 001095 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001097 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001097 */ 							}
/* 001099 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001100 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001100 */ 							}
/* 001100 */ 							continue;
/* 001100 */ 						}
/* 001100 */ 					}
/* 001103 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001107 */ 						(function () {
/* 001107 */ 							var __accu0__ = pending_nodes;
/* 001107 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001107 */ 						}) ();
/* 001107 */ 						break;
/* 001107 */ 					}
/* 001109 */ 					else {
/* 001112 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001113 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001114 */ 							(function () {
/* 001114 */ 								var __accu0__ = pending_nodes;
/* 001115 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001115 */ 							}) ();
/* 001115 */ 						}
/* 001115 */ 						break;
/* 001115 */ 					}
/* 001115 */ 				}
/* 001115 */ 				continue;
/* 001115 */ 			}
/* 001124 */ 			(function () {
/* 001124 */ 				var __accu0__ = pending_nodes;
/* 001124 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001124 */ 			}) ();
/* 001124 */ 		}
/* 001126 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001127 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001127 */ 		}
/* 001129 */ 		return split_node_lists;
/* 001129 */ 	});},
/* 001132 */ 	get parse_keyval_content () {return __get__ (this, function (self, comma_sep_chars, eq_sep_chars, repeated_key_aggregate_action, default_value_nodelist, extract_value_group_contents, dict_type) {
/* 001132 */ 		if (typeof comma_sep_chars == 'undefined' || (comma_sep_chars != null && comma_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var comma_sep_chars = ',';
/* 001132 */ 		};
/* 001132 */ 		if (typeof eq_sep_chars == 'undefined' || (eq_sep_chars != null && eq_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var eq_sep_chars = '=';
/* 001132 */ 		};
/* 001132 */ 		if (typeof repeated_key_aggregate_action == 'undefined' || (repeated_key_aggregate_action != null && repeated_key_aggregate_action.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var repeated_key_aggregate_action = 'concatenate';
/* 001132 */ 		};
/* 001132 */ 		if (typeof default_value_nodelist == 'undefined' || (default_value_nodelist != null && default_value_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var default_value_nodelist = null;
/* 001132 */ 		};
/* 001132 */ 		if (typeof extract_value_group_contents == 'undefined' || (extract_value_group_contents != null && extract_value_group_contents.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var extract_value_group_contents = true;
/* 001132 */ 		};
/* 001132 */ 		if (typeof dict_type == 'undefined' || (dict_type != null && dict_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 001132 */ 			var dict_type = dict;
/* 001132 */ 		};
/* 001132 */ 		if (arguments.length) {
/* 001132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001132 */ 					switch (__attrib0__) {
/* 001132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'comma_sep_chars': var comma_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'eq_sep_chars': var eq_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'repeated_key_aggregate_action': var repeated_key_aggregate_action = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'default_value_nodelist': var default_value_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'extract_value_group_contents': var extract_value_group_contents = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 						case 'dict_type': var dict_type = __allkwargs0__ [__attrib0__]; break;
/* 001132 */ 					}
/* 001132 */ 				}
/* 001132 */ 			}
/* 001132 */ 		}
/* 001132 */ 		else {
/* 001132 */ 		}
/* 001175 */ 		var result_keyvals = __call__ (dict_type, null);
/* 001177 */ 		var lw = self.latex_walker;
/* 001178 */ 		if (__t__ (lw !== null)) {
/* 001179 */ 			var make_nodelist = lw.make_nodelist;
/* 001179 */ 		}
/* 001180 */ 		else {
/* 001181 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001181 */ 				var kwargs = dict ();
/* 001181 */ 				if (arguments.length) {
/* 001181 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001181 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001181 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001181 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001181 */ 							switch (__attrib0__) {
/* 001181 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001181 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001181 */ 							}
/* 001181 */ 						}
/* 001181 */ 						delete kwargs.__kwargtrans__;
/* 001181 */ 					}
/* 001181 */ 				}
/* 001181 */ 				else {
/* 001181 */ 				}
/* 001181 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001181 */ 			});
/* 001181 */ 		}
/* 001183 */ 		var comma_sep_parts = (function () {
/* 001183 */ 			var __accu0__ = self;
/* 001183 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, comma_sep_chars);
/* 001183 */ 		}) ();
/* 001184 */ 		var __iterable0__ = comma_sep_parts;
/* 001184 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001184 */ 			var part = __getitem__ (__iterable0__, __index0__);
/* 001185 */ 			var eq_sep_parts = (function () {
/* 001185 */ 				var __accu0__ = part;
/* 001185 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, eq_sep_chars, __kwargtrans__ ({max_split: 1}));
/* 001185 */ 			}) ();
/* 001186 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 0))) {
/* 001186 */ 				continue;
/* 001186 */ 			}
/* 001188 */ 			var key_nl = __getitem__ (eq_sep_parts, 0);
/* 001189 */ 			var value_nl = null;
/* 001190 */ 			if (__t__ (__gt__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001191 */ 				var __except0__ = __call__ (RuntimeError, null, '[internal error?] unexpected split length past max_split?');
/* 001191 */ 				__except0__.__cause__ = null;
/* 001191 */ 				throw __except0__;
/* 001191 */ 			}
/* 001192 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001193 */ 				var value_nl = __getitem__ (eq_sep_parts, 1);
/* 001195 */ 				if (__t__ (__t__ (extract_value_group_contents) && __t__ (value_nl !== null) && __t__ (__eq__ (__call__ (len, null, value_nl), 1)) && (function () {
/* 001195 */ 					var __accu0__ = __getitem__ (value_nl.nodelist, 0);
/* 001195 */ 					return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001195 */ 				}) ())) {
/* 001196 */ 					var value_nl = __getitem__ (value_nl.nodelist, 0).nodelist;
/* 001196 */ 				}
/* 001196 */ 			}
/* 001198 */ 			if (__t__ (value_nl === null)) {
/* 001199 */ 				var value_nl = default_value_nodelist;
/* 001199 */ 			}
/* 001201 */ 			if (__t__ (!__t__ ((__call__ (isinstance, null, value_nl, LatexNodeList))))) {
/* 001202 */ 				var value_nl = __call__ (make_nodelist, null, [value_nl], __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 001202 */ 			}
/* 001207 */ 			var key_s = (function () {
/* 001207 */ 				var __accu0__ = key_nl;
/* 001207 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 001207 */ 			}) ();
/* 001208 */ 			if (__t__ (__in__ (key_s, result_keyvals))) {
/* 001209 */ 				if (__t__ (__eq__ (repeated_key_aggregate_action, 'concatenate'))) {
/* 001212 */ 					var value_nl = __call__ (make_nodelist, null, __add__ (__getitem__ (result_keyvals, key_s).nodelist, (__t__ (__call__ (isinstance, null, value_nl, LatexNodeList)) ? value_nl.nodelist : [value_nl])), __kwargtrans__ ({parsing_state: self.parsing_state, pos: __getitem__ (result_keyvals, key_s).pos}));
/* 001212 */ 				}
/* 001218 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'error'))) {
/* 001219 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 001219 */ 						var __accu0__ = 'Repeated Key: ‘{}’';
/* 001219 */ 						return __call__ (__accu0__.format, __accu0__, key_s);
/* 001219 */ 					}) ());
/* 001219 */ 					__except0__.__cause__ = null;
/* 001219 */ 					throw __except0__;
/* 001219 */ 				}
/* 001220 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'first'))) {
/* 001221 */ 					var value_nl = __getitem__ (result_keyvals, key_s).nodelist;
/* 001221 */ 				}
/* 001222 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'last'))) {
/* 001223 */ 					// pass;
/* 001223 */ 				}
/* 001224 */ 				else {
/* 001225 */ 					var value_nl = __call__ (repeated_key_aggregate_action, null, key_s, __getitem__ (result_keyvals, key_s).nodelist, value_nl, __kwargtrans__ ({result_keyvals: result_keyvals}));
/* 001225 */ 				}
/* 001225 */ 			}
/* 001232 */ 			__setitem__ (result_keyvals, key_s, value_nl);
/* 001232 */ 		}
/* 001234 */ 		return result_keyvals;
/* 001234 */ 	});},
/* 001237 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001237 */ 		if (arguments.length) {
/* 001237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001237 */ 					switch (__attrib0__) {
/* 001237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001237 */ 					}
/* 001237 */ 				}
/* 001237 */ 			}
/* 001237 */ 		}
/* 001237 */ 		else {
/* 001237 */ 		}
/* 001252 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001252 */ 	});},
/* 001256 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001256 */ 		if (arguments.length) {
/* 001256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001256 */ 					switch (__attrib0__) {
/* 001256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001256 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001256 */ 					}
/* 001256 */ 				}
/* 001256 */ 			}
/* 001256 */ 		}
/* 001256 */ 		else {
/* 001256 */ 		}
/* 001257 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001258 */ 			return __eq__ (self.nodelist, other);
/* 001258 */ 		}
/* 001259 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001259 */ 	});},
/* 001268 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001268 */ 		if (arguments.length) {
/* 001268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001268 */ 					switch (__attrib0__) {
/* 001268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001268 */ 					}
/* 001268 */ 				}
/* 001268 */ 			}
/* 001268 */ 		}
/* 001268 */ 		else {
/* 001268 */ 		}
/* 001269 */ 		return self.nodelist;
/* 001269 */ 	});},
/* 001271 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001271 */ 		if (arguments.length) {
/* 001271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001271 */ 					switch (__attrib0__) {
/* 001271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001271 */ 					}
/* 001271 */ 				}
/* 001271 */ 			}
/* 001271 */ 		}
/* 001271 */ 		else {
/* 001271 */ 		}
/* 001272 */ 		return (function () {
/* 001272 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001272 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001272 */ 		}) ();
/* 001272 */ 	});}
/* 001272 */ });
/* 001272 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001280 */ export var _get_content_as_chars = function (nodelist) {
/* 001280 */ 	if (arguments.length) {
/* 001280 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001280 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001280 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001280 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001280 */ 				switch (__attrib0__) {
/* 001280 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001280 */ 				}
/* 001280 */ 			}
/* 001280 */ 		}
/* 001280 */ 	}
/* 001280 */ 	else {
/* 001280 */ 	}
/* 001286 */ 	if (__t__ (nodelist === null)) {
/* 001287 */ 		return '';
/* 001287 */ 	}
/* 001289 */ 	var charslist = [];
/* 001291 */ 	var __iterable0__ = nodelist;
/* 001291 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001291 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001293 */ 		if (__t__ (n === null)) {
/* 001293 */ 			continue;
/* 001293 */ 		}
/* 001296 */ 		if (__t__ ((function () {
/* 001296 */ 			var __accu0__ = n;
/* 001296 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001296 */ 		}) ())) {
/* 001296 */ 			continue;
/* 001296 */ 		}
/* 001300 */ 		if (__t__ ((function () {
/* 001300 */ 			var __accu0__ = n;
/* 001300 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001300 */ 		}) ())) {
/* 001302 */ 			(function () {
/* 001302 */ 				var __accu0__ = charslist;
/* 001302 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001302 */ 			}) ();
/* 001302 */ 			continue;
/* 001302 */ 		}
/* 001305 */ 		if (__t__ ((function () {
/* 001305 */ 			var __accu0__ = n;
/* 001305 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001305 */ 		}) ())) {
/* 001306 */ 			(function () {
/* 001306 */ 				var __accu0__ = charslist;
/* 001306 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001306 */ 			}) ();
/* 001306 */ 			continue;
/* 001306 */ 		}
/* 001310 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001310 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001310 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001310 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001310 */ 		__except0__.__cause__ = null;
/* 001310 */ 		throw __except0__;
/* 001310 */ 	}
/* 001314 */ 	return (function () {
/* 001314 */ 		var __accu0__ = '';
/* 001314 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001314 */ 	}) ();
/* 001314 */ };
/* 001321 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001321 */ 	if (arguments.length) {
/* 001321 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001321 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001321 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001321 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001321 */ 				switch (__attrib0__) {
/* 001321 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001321 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001321 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001321 */ 				}
/* 001321 */ 			}
/* 001321 */ 		}
/* 001321 */ 	}
/* 001321 */ 	else {
/* 001321 */ 	}
/* 001323 */ 	if (__t__ (pos === null)) {
/* 001324 */ 		var __break0__ = false;
/* 001324 */ 		var __iterable0__ = nodelist;
/* 001324 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001324 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001325 */ 			if (__t__ (n !== null)) {
/* 001326 */ 				var pos = n.pos;
/* 001326 */ 				__break0__ = true;
/* 001326 */ 				break;
/* 001326 */ 			}
/* 001326 */ 		}
/* 001328 */ 		if (!__break0__) {
/* 001329 */ 			var pos = null;
/* 001329 */ 		}
/* 001329 */ 	}
/* 001331 */ 	if (__t__ (pos_end === null)) {
/* 001332 */ 		var __break0__ = false;
/* 001332 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001332 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001332 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001333 */ 			if (__t__ (n !== null)) {
/* 001334 */ 				var pos_end = n.pos_end;
/* 001334 */ 				__break0__ = true;
/* 001334 */ 				break;
/* 001334 */ 			}
/* 001334 */ 		}
/* 001336 */ 		if (!__break0__) {
/* 001337 */ 			var pos_end = null;
/* 001337 */ 		}
/* 001337 */ 	}
/* 001339 */ 	return tuple ([pos, pos_end]);
/* 001339 */ };
/* 001349 */ export var _UseList =  __class__ ('_UseList', [object], {
/* 001349 */ 	__module__: __name__,
/* 001349 */ });
/* 001354 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001354 */ 	__module__: __name__,
/* 001398 */ 	get start () {return __get__ (this, function (self, node) {
/* 001398 */ 		if (arguments.length) {
/* 001398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001398 */ 					switch (__attrib0__) {
/* 001398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001398 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001398 */ 					}
/* 001398 */ 				}
/* 001398 */ 			}
/* 001398 */ 		}
/* 001398 */ 		else {
/* 001398 */ 		}
/* 001412 */ 		return (function () {
/* 001412 */ 			var __accu0__ = node;
/* 001412 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001412 */ 		}) ();
/* 001412 */ 	});},
/* 001419 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001419 */ 		var kwargs = dict ();
/* 001419 */ 		if (arguments.length) {
/* 001419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001419 */ 					switch (__attrib0__) {
/* 001419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001419 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001419 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001419 */ 					}
/* 001419 */ 				}
/* 001419 */ 				delete kwargs.__kwargtrans__;
/* 001419 */ 			}
/* 001419 */ 		}
/* 001419 */ 		else {
/* 001419 */ 		}
/* 001426 */ 		return null;
/* 001426 */ 	});},
/* 001428 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001428 */ 		var kwargs = dict ();
/* 001428 */ 		if (arguments.length) {
/* 001428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001428 */ 					switch (__attrib0__) {
/* 001428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001428 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001428 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001428 */ 					}
/* 001428 */ 				}
/* 001428 */ 				delete kwargs.__kwargtrans__;
/* 001428 */ 			}
/* 001428 */ 		}
/* 001428 */ 		else {
/* 001428 */ 		}
/* 001432 */ 		return (function () {
/* 001432 */ 			var __accu0__ = self;
/* 001432 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001432 */ 		}) ();
/* 001432 */ 	});},
/* 001434 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001434 */ 		var kwargs = dict ();
/* 001434 */ 		if (arguments.length) {
/* 001434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001434 */ 					switch (__attrib0__) {
/* 001434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001434 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001434 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001434 */ 					}
/* 001434 */ 				}
/* 001434 */ 				delete kwargs.__kwargtrans__;
/* 001434 */ 			}
/* 001434 */ 		}
/* 001434 */ 		else {
/* 001434 */ 		}
/* 001441 */ 		return (function () {
/* 001441 */ 			var __accu0__ = self;
/* 001441 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001441 */ 		}) ();
/* 001441 */ 	});},
/* 001443 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001443 */ 		var kwargs = dict ();
/* 001443 */ 		if (arguments.length) {
/* 001443 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001443 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001443 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001443 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001443 */ 					switch (__attrib0__) {
/* 001443 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001443 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001443 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001443 */ 					}
/* 001443 */ 				}
/* 001443 */ 				delete kwargs.__kwargtrans__;
/* 001443 */ 			}
/* 001443 */ 		}
/* 001443 */ 		else {
/* 001443 */ 		}
/* 001447 */ 		return (function () {
/* 001447 */ 			var __accu0__ = self;
/* 001447 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001447 */ 		}) ();
/* 001447 */ 	});},
/* 001449 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001449 */ 		var kwargs = dict ();
/* 001449 */ 		if (arguments.length) {
/* 001449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001449 */ 					switch (__attrib0__) {
/* 001449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001449 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001449 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001449 */ 					}
/* 001449 */ 				}
/* 001449 */ 				delete kwargs.__kwargtrans__;
/* 001449 */ 			}
/* 001449 */ 		}
/* 001449 */ 		else {
/* 001449 */ 		}
/* 001455 */ 		return (function () {
/* 001455 */ 			var __accu0__ = self;
/* 001455 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001455 */ 		}) ();
/* 001455 */ 	});},
/* 001457 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001457 */ 		var kwargs = dict ();
/* 001457 */ 		if (arguments.length) {
/* 001457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001457 */ 					switch (__attrib0__) {
/* 001457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001457 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001457 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001457 */ 					}
/* 001457 */ 				}
/* 001457 */ 				delete kwargs.__kwargtrans__;
/* 001457 */ 			}
/* 001457 */ 		}
/* 001457 */ 		else {
/* 001457 */ 		}
/* 001467 */ 		return (function () {
/* 001467 */ 			var __accu0__ = self;
/* 001467 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001467 */ 		}) ();
/* 001467 */ 	});},
/* 001469 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001469 */ 		var kwargs = dict ();
/* 001469 */ 		if (arguments.length) {
/* 001469 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001469 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001469 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001469 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001469 */ 					switch (__attrib0__) {
/* 001469 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001469 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001469 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001469 */ 					}
/* 001469 */ 				}
/* 001469 */ 				delete kwargs.__kwargtrans__;
/* 001469 */ 			}
/* 001469 */ 		}
/* 001469 */ 		else {
/* 001469 */ 		}
/* 001475 */ 		return (function () {
/* 001475 */ 			var __accu0__ = self;
/* 001475 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001475 */ 		}) ();
/* 001475 */ 	});},
/* 001477 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001477 */ 		var kwargs = dict ();
/* 001477 */ 		if (arguments.length) {
/* 001477 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001477 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001477 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001477 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001477 */ 					switch (__attrib0__) {
/* 001477 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001477 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001477 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001477 */ 					}
/* 001477 */ 				}
/* 001477 */ 				delete kwargs.__kwargtrans__;
/* 001477 */ 			}
/* 001477 */ 		}
/* 001477 */ 		else {
/* 001477 */ 		}
/* 001484 */ 		return (function () {
/* 001484 */ 			var __accu0__ = self;
/* 001484 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001484 */ 		}) ();
/* 001484 */ 	});},
/* 001486 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001486 */ 		var kwargs = dict ();
/* 001486 */ 		if (arguments.length) {
/* 001486 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001486 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001486 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001486 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001486 */ 					switch (__attrib0__) {
/* 001486 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001486 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001486 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001486 */ 					}
/* 001486 */ 				}
/* 001486 */ 				delete kwargs.__kwargtrans__;
/* 001486 */ 			}
/* 001486 */ 		}
/* 001486 */ 		else {
/* 001486 */ 		}
/* 001504 */ 		return (function () {
/* 001504 */ 			var __accu0__ = self;
/* 001504 */ 			return __call__ (__accu0__.visit, __accu0__, nodes, __kwargtrans__ (kwargs));
/* 001504 */ 		}) ();
/* 001504 */ 	});},
/* 001506 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001506 */ 		var kwargs = dict ();
/* 001506 */ 		if (arguments.length) {
/* 001506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001506 */ 					switch (__attrib0__) {
/* 001506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001506 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001506 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001506 */ 					}
/* 001506 */ 				}
/* 001506 */ 				delete kwargs.__kwargtrans__;
/* 001506 */ 			}
/* 001506 */ 		}
/* 001506 */ 		else {
/* 001506 */ 		}
/* 001513 */ 		return (function () {
/* 001513 */ 			var __accu0__ = self;
/* 001513 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args, __kwargtrans__ (kwargs));
/* 001513 */ 		}) ();
/* 001513 */ 	});},
/* 001516 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001516 */ 		var kwargs = dict ();
/* 001516 */ 		if (arguments.length) {
/* 001516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001516 */ 					switch (__attrib0__) {
/* 001516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001516 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001516 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001516 */ 					}
/* 001516 */ 				}
/* 001516 */ 				delete kwargs.__kwargtrans__;
/* 001516 */ 			}
/* 001516 */ 		}
/* 001516 */ 		else {
/* 001516 */ 		}
/* 001520 */ 		return (function () {
/* 001520 */ 			var __accu0__ = self;
/* 001520 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001520 */ 		}) ();
/* 001520 */ 	});},
/* 001527 */ 	get descend_into_nodelist () {return __get__ (this, function (self, nodelist, py_default) {
/* 001527 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 001527 */ 			var py_default = _UseList;
/* 001527 */ 		};
/* 001527 */ 		if (arguments.length) {
/* 001527 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001527 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001527 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001527 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001527 */ 					switch (__attrib0__) {
/* 001527 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001527 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001527 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 001527 */ 					}
/* 001527 */ 				}
/* 001527 */ 			}
/* 001527 */ 		}
/* 001527 */ 		else {
/* 001527 */ 		}
/* 001543 */ 		if (__t__ (nodelist === null)) {
/* 001544 */ 			if (__t__ (py_default === _UseList)) {
/* 001545 */ 				return [];
/* 001545 */ 			}
/* 001546 */ 			return py_default;
/* 001546 */ 		}
/* 001548 */ 		var visited_results_nodelist = [];
/* 001549 */ 		var __iterable0__ = nodelist;
/* 001549 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001549 */ 			var cnode = __getitem__ (__iterable0__, __index0__);
/* 001550 */ 			if (__t__ (cnode !== null)) {
/* 001551 */ 				(function () {
/* 001551 */ 					var __accu0__ = visited_results_nodelist;
/* 001552 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 001552 */ 						var __accu1__ = cnode;
/* 001552 */ 						return __call__ (__accu1__.accept_node_visitor, __accu1__, self);
/* 001552 */ 					}) ());
/* 001552 */ 				}) ();
/* 001552 */ 			}
/* 001553 */ 			else {
/* 001555 */ 				(function () {
/* 001555 */ 					var __accu0__ = visited_results_nodelist;
/* 001555 */ 					return __call__ (__accu0__.append, __accu0__, null);
/* 001555 */ 				}) ();
/* 001555 */ 			}
/* 001555 */ 		}
/* 001557 */ 		return visited_results_nodelist;
/* 001557 */ 	});},
/* 001559 */ 	get descend_into_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 001559 */ 		if (arguments.length) {
/* 001559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001559 */ 					switch (__attrib0__) {
/* 001559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001559 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 001559 */ 					}
/* 001559 */ 				}
/* 001559 */ 			}
/* 001559 */ 		}
/* 001559 */ 		else {
/* 001559 */ 		}
/* 001560 */ 		if (__t__ (parsed_arguments === null)) {
/* 001561 */ 			return '';
/* 001561 */ 		}
/* 001562 */ 		return (function () {
/* 001562 */ 			var __accu0__ = parsed_arguments;
/* 001562 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001562 */ 		}) ();
/* 001562 */ 	});},
/* 001567 */ 	get node_standard_process_unknown () {return __get__ (this, function (self, node) {
/* 001567 */ 		if (arguments.length) {
/* 001567 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001567 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001567 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001567 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001567 */ 					switch (__attrib0__) {
/* 001567 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001567 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001567 */ 					}
/* 001567 */ 				}
/* 001567 */ 			}
/* 001567 */ 		}
/* 001567 */ 		else {
/* 001567 */ 		}
/* 001568 */ 		return (function () {
/* 001568 */ 			var __accu0__ = self;
/* 001568 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, node);
/* 001568 */ 		}) ();
/* 001568 */ 	});},
/* 001570 */ 	get node_standard_process_chars () {return __get__ (this, function (self, node) {
/* 001570 */ 		if (arguments.length) {
/* 001570 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001570 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001570 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001570 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001570 */ 					switch (__attrib0__) {
/* 001570 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001570 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001570 */ 					}
/* 001570 */ 				}
/* 001570 */ 			}
/* 001570 */ 		}
/* 001570 */ 		else {
/* 001570 */ 		}
/* 001571 */ 		return (function () {
/* 001571 */ 			var __accu0__ = self;
/* 001571 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, node);
/* 001571 */ 		}) ();
/* 001571 */ 	});},
/* 001573 */ 	get node_standard_process_group () {return __get__ (this, function (self, node) {
/* 001573 */ 		if (arguments.length) {
/* 001573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001573 */ 					switch (__attrib0__) {
/* 001573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001573 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001573 */ 					}
/* 001573 */ 				}
/* 001573 */ 			}
/* 001573 */ 		}
/* 001573 */ 		else {
/* 001573 */ 		}
/* 001575 */ 		var visited_results_nodelist = (function () {
/* 001575 */ 			var __accu0__ = self;
/* 001575 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist);
/* 001575 */ 		}) ();
/* 001577 */ 		return (function () {
/* 001577 */ 			var __accu0__ = self;
/* 001577 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, node, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001577 */ 		}) ();
/* 001577 */ 	});},
/* 001582 */ 	get node_standard_process_comment () {return __get__ (this, function (self, node) {
/* 001582 */ 		if (arguments.length) {
/* 001582 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001582 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001582 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001582 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001582 */ 					switch (__attrib0__) {
/* 001582 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001582 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001582 */ 					}
/* 001582 */ 				}
/* 001582 */ 			}
/* 001582 */ 		}
/* 001582 */ 		else {
/* 001582 */ 		}
/* 001583 */ 		return (function () {
/* 001583 */ 			var __accu0__ = self;
/* 001583 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, node);
/* 001583 */ 		}) ();
/* 001583 */ 	});},
/* 001585 */ 	get node_standard_process_macro () {return __get__ (this, function (self, node) {
/* 001585 */ 		if (arguments.length) {
/* 001585 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001585 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001585 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001585 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001585 */ 					switch (__attrib0__) {
/* 001585 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001585 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001585 */ 					}
/* 001585 */ 				}
/* 001585 */ 			}
/* 001585 */ 		}
/* 001585 */ 		else {
/* 001585 */ 		}
/* 001587 */ 		var visited_results_arguments = (function () {
/* 001587 */ 			var __accu0__ = self;
/* 001587 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001587 */ 		}) ();
/* 001589 */ 		return (function () {
/* 001589 */ 			var __accu0__ = self;
/* 001589 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 001589 */ 		}) ();
/* 001589 */ 	});},
/* 001594 */ 	get node_standard_process_environment () {return __get__ (this, function (self, node) {
/* 001594 */ 		if (arguments.length) {
/* 001594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001594 */ 					switch (__attrib0__) {
/* 001594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001594 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001594 */ 					}
/* 001594 */ 				}
/* 001594 */ 			}
/* 001594 */ 		}
/* 001594 */ 		else {
/* 001594 */ 		}
/* 001596 */ 		var visited_results_arguments = (function () {
/* 001596 */ 			var __accu0__ = self;
/* 001596 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001596 */ 		}) ();
/* 001597 */ 		var visited_results_body = (function () {
/* 001597 */ 			var __accu0__ = self;
/* 001597 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist);
/* 001597 */ 		}) ();
/* 001599 */ 		return (function () {
/* 001599 */ 			var __accu0__ = self;
/* 001599 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments, visited_results_body: visited_results_body}));
/* 001599 */ 		}) ();
/* 001599 */ 	});},
/* 001605 */ 	get node_standard_process_specials () {return __get__ (this, function (self, node) {
/* 001605 */ 		if (arguments.length) {
/* 001605 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001605 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001605 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001605 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001605 */ 					switch (__attrib0__) {
/* 001605 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001605 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001605 */ 					}
/* 001605 */ 				}
/* 001605 */ 			}
/* 001605 */ 		}
/* 001605 */ 		else {
/* 001605 */ 		}
/* 001607 */ 		var visited_results_arguments = (function () {
/* 001607 */ 			var __accu0__ = self;
/* 001607 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001607 */ 		}) ();
/* 001609 */ 		return (function () {
/* 001609 */ 			var __accu0__ = self;
/* 001609 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 001609 */ 		}) ();
/* 001609 */ 	});},
/* 001614 */ 	get node_standard_process_math () {return __get__ (this, function (self, node) {
/* 001614 */ 		if (arguments.length) {
/* 001614 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001614 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001614 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001614 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001614 */ 					switch (__attrib0__) {
/* 001614 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					}
/* 001614 */ 				}
/* 001614 */ 			}
/* 001614 */ 		}
/* 001614 */ 		else {
/* 001614 */ 		}
/* 001616 */ 		var visited_results_nodelist = (function () {
/* 001616 */ 			var __accu0__ = self;
/* 001616 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist, __kwargtrans__ ({py_default: null}));
/* 001616 */ 		}) ();
/* 001621 */ 		return (function () {
/* 001621 */ 			var __accu0__ = self;
/* 001621 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, node, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001621 */ 		}) ();
/* 001621 */ 	});},
/* 001627 */ 	get node_standard_process_list () {return __get__ (this, function (self, nodelist) {
/* 001627 */ 		if (arguments.length) {
/* 001627 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001627 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001627 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001627 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001627 */ 					switch (__attrib0__) {
/* 001627 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001627 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001627 */ 					}
/* 001627 */ 				}
/* 001627 */ 			}
/* 001627 */ 		}
/* 001627 */ 		else {
/* 001627 */ 		}
/* 001629 */ 		var visited_results_nodelist = (function () {
/* 001629 */ 			var __accu0__ = self;
/* 001629 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, nodelist.nodelist);
/* 001629 */ 		}) ();
/* 001631 */ 		return (function () {
/* 001631 */ 			var __accu0__ = self;
/* 001631 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, nodelist, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001631 */ 		}) ();
/* 001631 */ 	});},
/* 001636 */ 	get node_standard_process_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 001636 */ 		if (arguments.length) {
/* 001636 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001636 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001636 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001636 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001636 */ 					switch (__attrib0__) {
/* 001636 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001636 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 001636 */ 					}
/* 001636 */ 				}
/* 001636 */ 			}
/* 001636 */ 		}
/* 001636 */ 		else {
/* 001636 */ 		}
/* 001638 */ 		var visited_results_argnlist = (function () {
/* 001638 */ 			var __accu0__ = self;
/* 001638 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, parsed_arguments.argnlist, __kwargtrans__ ({py_default: null}));
/* 001638 */ 		}) ();
/* 001643 */ 		return (function () {
/* 001643 */ 			var __accu0__ = self;
/* 001643 */ 			return __call__ (__accu0__.visit_parsed_arguments, __accu0__, parsed_arguments, __kwargtrans__ ({visited_results_argnlist: visited_results_argnlist}));
/* 001643 */ 		}) ();
/* 001643 */ 	});}
/* 001643 */ });
/* 001662 */ export var latex_node_types = tuple ([LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode]);
/* 001673 */ export var __all__ = __add__ ((function () {
/* 001673 */ 	var __accu0__ = [];
/* 001673 */ 	var __iterable0__ = latex_node_types;
/* 001673 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001673 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001673 */ 		(function () {
/* 001673 */ 			var __accu1__ = __accu0__;
/* 001673 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001673 */ 		}) ();
/* 001673 */ 	}
/* 001673 */ 	return __accu0__;
/* 001673 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map