/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 21:22:00
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000040 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerParseError, ParsedArguments};
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
/* 000057 */ 	if (__t__ (__t__ (!__t__ ((maxlen))) || __lt__ (maxlen, 2))) {
/* 000058 */ 		var maxlen = 2;
/* 000058 */ 	}
/* 000059 */ 	if (__t__ (__lt__ (__call__ (len, null, s), maxlen))) {
/* 000060 */ 		return s;
/* 000060 */ 	}
/* 000061 */ 	return __add__ (__getslice__ (s, 0, __sub__ (maxlen, 2), 1), '…');
/* 000061 */ };
/* 000064 */ export var _display_str_delimiters = function (delimiters) {
/* 000064 */ 	if (arguments.length) {
/* 000064 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 				switch (__attrib0__) {
/* 000064 */ 					case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 	}
/* 000064 */ 	else {
/* 000064 */ 	}
/* 000066 */ 	var open_delim = '<??>';
/* 000067 */ 	var close_delim = '<??>';
/* 000069 */ 	try {
/* 000070 */ 		var __left0__ = delimiters;
/* 000070 */ 		var open_delim = __left0__ [0];
/* 000070 */ 		var close_delim = __left0__ [1];
/* 000070 */ 	}
/* 000070 */ 	catch (__except0__) {
/* 000072 */ 		// pass;
/* 000072 */ 	}
/* 000074 */ 	if (__t__ (open_delim === null)) {
/* 000075 */ 		var open_delim = '';
/* 000075 */ 	}
/* 000076 */ 	if (__t__ (close_delim === null)) {
/* 000077 */ 		var close_delim = '';
/* 000077 */ 	}
/* 000079 */ 	return tuple ([open_delim, close_delim]);
/* 000079 */ };
/* 000091 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000091 */ 	__module__: __name__,
/* 000159 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000159 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var _redundant_fields = null;
/* 000159 */ 		};
/* 000159 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var parsing_state = null;
/* 000159 */ 		};
/* 000159 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var pos = null;
/* 000159 */ 		};
/* 000159 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var pos_end = null;
/* 000159 */ 		};
/* 000159 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var latex_walker = null;
/* 000159 */ 		};
/* 000159 */ 		var kwargs = dict ();
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 				delete kwargs.__kwargtrans__;
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000163 */ 		var len_ = (function () {
/* 000163 */ 			var __accu0__ = kwargs;
/* 000163 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000163 */ 		}) ();
/* 000169 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000171 */ 		self.parsing_state = parsing_state;
/* 000172 */ 		self.latex_walker = latex_walker;
/* 000173 */ 		self.pos = pos;
/* 000174 */ 		self.pos_end = pos_end;
/* 000176 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000177 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000177 */ 		}
/* 000180 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000181 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000183 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000183 */ 		}
/* 000184 */ 		else {
/* 000185 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000185 */ 		}
/* 000185 */ 	});},
/* 000187 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000194 */ 		return LatexNode;
/* 000194 */ 	});},
/* 000196 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000202 */ 		return __call__ (isinstance, null, self, t);
/* 000202 */ 	});},
/* 000205 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000206 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000207 */ 			return null;
/* 000207 */ 		}
/* 000208 */ 		return __sub__ (self.pos_end, self.pos);
/* 000208 */ 	});},
/* 000210 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000216 */ 		if (__t__ (self.latex_walker === null)) {
/* 000217 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000217 */ 			__except0__.__cause__ = null;
/* 000217 */ 			throw __except0__;
/* 000217 */ 		}
/* 000219 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000219 */ 	});},
/* 000221 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000225 */ 		return __t__ (other !== null) && __t__ (__call__ (isinstance, null, other, LatexNode)) && __t__ ((function () {
/* 000225 */ 			var __accu0__ = self;
/* 000225 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000225 */ 		}) () === (function () {
/* 000225 */ 			var __accu0__ = other;
/* 000225 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000233 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000233 */ 			var __accu0__ = [];
/* 000234 */ 			var __iterable0__ = self._fields;
/* 000234 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000237 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu1__ = __accu0__;
/* 000236 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000236 */ 				}) ();
/* 000236 */ 			}
/* 000236 */ 			return py_iter (__accu0__);
/* 000236 */ 		}) ());
/* 000236 */ 	});},
/* 000243 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000243 */ 		return NotImplemented;
/* 000243 */ 	});},
/* 000245 */ 	__hash__: null,
/* 000247 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000248 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000248 */ 			var __accu0__ = self;
/* 000248 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000248 */ 		}) ());
/* 000248 */ 	});},
/* 000249 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		return (function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000251 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000251 */ 		if (arguments.length) {
/* 000251 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 					switch (__attrib0__) {
/* 000251 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 			}
/* 000251 */ 		}
/* 000251 */ 		else {
/* 000251 */ 		}
/* 000253 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000254 */ 		}) ().__name__, '('), (function () {
/* 000254 */ 			var __accu0__ = ', ';
/* 000254 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000254 */ 				var __accu1__ = [];
/* 000254 */ 				var __iterable0__ = self._fields;
/* 000254 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000254 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 					(function () {
/* 000254 */ 						var __accu2__ = __accu1__;
/* 000254 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000254 */ 							var __accu3__ = '{}={!r}';
/* 000254 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000254 */ 						}) ());
/* 000254 */ 					}) ();
/* 000254 */ 				}
/* 000254 */ 				return __accu1__;
/* 000254 */ 			}) ());
/* 000254 */ 		}) ()), ')');
/* 000254 */ 	});},
/* 000258 */ 	get display_str () {return __get__ (this, function (self) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		return __add__ ('<UNKNOWN NODE TYPE>: ', __call__ (repr, null, self));
/* 000259 */ 	});},
/* 000261 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000262 */ 		return (function () {
/* 000262 */ 			var __accu0__ = visitor;
/* 000262 */ 			return __call__ (__accu0__.node_standard_process_unknown, __accu0__, self);
/* 000262 */ 		}) ();
/* 000262 */ 	});},
/* 000264 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000266 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000270 */ 		var __iterable0__ = self._fields;
/* 000270 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000270 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000271 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000273 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000273 */ 			}
/* 000274 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000276 */ 				// pass;
/* 000276 */ 			}
/* 000277 */ 			else {
/* 000278 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000278 */ 			}
/* 000278 */ 		}
/* 000279 */ 		(function () {
/* 000279 */ 			var __accu0__ = d;
/* 000279 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000279 */ 				var __accu1__ = latexwalker;
/* 000279 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000279 */ 			}) ());
/* 000279 */ 		}) ();
/* 000280 */ 		return d;
/* 000280 */ 	});},
/* 000282 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000283 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000284 */ 			return (function () {
/* 000284 */ 				var __accu0__ = self.latex_walker;
/* 000284 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000284 */ 			}) ();
/* 000284 */ 		}
/* 000285 */ 		return (function () {
/* 000285 */ 			var __accu0__ = '[@ pos {}]';
/* 000285 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000285 */ 		}) ();
/* 000285 */ 	});}
/* 000285 */ });
/* 000285 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000288 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000288 */ 	__module__: __name__,
/* 000297 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000297 */ 		var kwargs = dict ();
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 				delete kwargs.__kwargtrans__;
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000298 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000302 */ 		self.chars = chars;
/* 000302 */ 	});},
/* 000304 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		return LatexCharsNode;
/* 000305 */ 	});},
/* 000307 */ 	get display_str () {return __get__ (this, function (self) {
/* 000307 */ 		if (arguments.length) {
/* 000307 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 					switch (__attrib0__) {
/* 000307 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 		}
/* 000307 */ 		else {
/* 000307 */ 		}
/* 000308 */ 		return __add__ (__add__ ('chars ‘', __call__ (_display_abbrev_str, null, self.chars)), '’');
/* 000308 */ 	});},
/* 000310 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000310 */ 		if (arguments.length) {
/* 000310 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000310 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000310 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000310 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000310 */ 					switch (__attrib0__) {
/* 000310 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 					}
/* 000310 */ 				}
/* 000310 */ 			}
/* 000310 */ 		}
/* 000310 */ 		else {
/* 000310 */ 		}
/* 000311 */ 		return (function () {
/* 000311 */ 			var __accu0__ = visitor;
/* 000311 */ 			return __call__ (__accu0__.node_standard_process_chars, __accu0__, self);
/* 000311 */ 		}) ();
/* 000311 */ 	});}
/* 000311 */ });
/* 000315 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000315 */ 	__module__: __name__,
/* 000340 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000340 */ 		var kwargs = dict ();
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 				delete kwargs.__kwargtrans__;
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		var delimiters = (function () {
/* 000341 */ 			var __accu0__ = kwargs;
/* 000341 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000341 */ 		}) ();
/* 000342 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000346 */ 		self.nodelist = nodelist;
/* 000347 */ 		self.delimiters = delimiters;
/* 000347 */ 	});},
/* 000349 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000350 */ 		return LatexGroupNode;
/* 000350 */ 	});},
/* 000352 */ 	get display_str () {return __get__ (this, function (self) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000353 */ 		var open_delim = __left0__ [0];
/* 000353 */ 		var close_delim = __left0__ [1];
/* 000354 */ 		return __add__ (__add__ (__add__ (__add__ ('group ‘', open_delim), '…'), close_delim), '’');
/* 000354 */ 	});},
/* 000356 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		return (function () {
/* 000357 */ 			var __accu0__ = visitor;
/* 000357 */ 			return __call__ (__accu0__.node_standard_process_group, __accu0__, self);
/* 000357 */ 		}) ();
/* 000357 */ 	});}
/* 000357 */ });
/* 000360 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000360 */ 	__module__: __name__,
/* 000374 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000374 */ 		var kwargs = dict ();
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 				delete kwargs.__kwargtrans__;
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		var comment_post_space = (function () {
/* 000375 */ 			var __accu0__ = kwargs;
/* 000375 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000375 */ 		}) ();
/* 000377 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000382 */ 		self.comment = comment;
/* 000383 */ 		self.comment_post_space = comment_post_space;
/* 000383 */ 	});},
/* 000385 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		return LatexCommentNode;
/* 000386 */ 	});},
/* 000388 */ 	get display_str () {return __get__ (this, function (self) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000389 */ 		return __add__ (__add__ ('comment ‘', __call__ (_display_abbrev_str, null, (function () {
/* 000389 */ 			var __accu0__ = self.comment;
/* 000389 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000389 */ 		}) ())), '’');
/* 000389 */ 	});},
/* 000391 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000392 */ 		return (function () {
/* 000392 */ 			var __accu0__ = visitor;
/* 000392 */ 			return __call__ (__accu0__.node_standard_process_comment, __accu0__, self);
/* 000392 */ 		}) ();
/* 000392 */ 	});}
/* 000392 */ });
/* 000395 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000395 */ 	__module__: __name__,
/* 000459 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000459 */ 		var kwargs = dict ();
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 				delete kwargs.__kwargtrans__;
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 		}
/* 000460 */ 		var nodeargd = (function () {
/* 000460 */ 			var __accu0__ = kwargs;
/* 000460 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000460 */ 		}) ();
/* 000461 */ 		var macro_post_space = (function () {
/* 000461 */ 			var __accu0__ = kwargs;
/* 000461 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000461 */ 		}) ();
/* 000462 */ 		var spec = (function () {
/* 000462 */ 			var __accu0__ = kwargs;
/* 000462 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000462 */ 		}) ();
/* 000464 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000469 */ 		self.macroname = macroname;
/* 000470 */ 		self.spec = spec;
/* 000471 */ 		self.nodeargd = nodeargd;
/* 000472 */ 		self.macro_post_space = macro_post_space;
/* 000472 */ 	});},
/* 000474 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000474 */ 		if (arguments.length) {
/* 000474 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000474 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000474 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000474 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000474 */ 					switch (__attrib0__) {
/* 000474 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 					}
/* 000474 */ 				}
/* 000474 */ 			}
/* 000474 */ 		}
/* 000474 */ 		else {
/* 000474 */ 		}
/* 000475 */ 		return LatexMacroNode;
/* 000475 */ 	});},
/* 000477 */ 	get display_str () {return __get__ (this, function (self) {
/* 000477 */ 		if (arguments.length) {
/* 000477 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000477 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000477 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000477 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000477 */ 					switch (__attrib0__) {
/* 000477 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 					}
/* 000477 */ 				}
/* 000477 */ 			}
/* 000477 */ 		}
/* 000477 */ 		else {
/* 000477 */ 		}
/* 000478 */ 		return __add__ (__add__ ('macro ‘\\', self.macroname), '’');
/* 000478 */ 	});},
/* 000480 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000480 */ 		if (arguments.length) {
/* 000480 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000480 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000480 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000480 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000480 */ 					switch (__attrib0__) {
/* 000480 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 			}
/* 000480 */ 		}
/* 000480 */ 		else {
/* 000480 */ 		}
/* 000481 */ 		return (function () {
/* 000481 */ 			var __accu0__ = visitor;
/* 000481 */ 			return __call__ (__accu0__.node_standard_process_macro, __accu0__, self);
/* 000481 */ 		}) ();
/* 000481 */ 	});}
/* 000481 */ });
/* 000504 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000504 */ 	__module__: __name__,
/* 000570 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000570 */ 		var kwargs = dict ();
/* 000570 */ 		if (arguments.length) {
/* 000570 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000570 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000570 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000570 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000570 */ 					switch (__attrib0__) {
/* 000570 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000570 */ 					}
/* 000570 */ 				}
/* 000570 */ 				delete kwargs.__kwargtrans__;
/* 000570 */ 			}
/* 000570 */ 		}
/* 000570 */ 		else {
/* 000570 */ 		}
/* 000571 */ 		var nodeargd = (function () {
/* 000571 */ 			var __accu0__ = kwargs;
/* 000571 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000571 */ 		}) ();
/* 000572 */ 		var spec = (function () {
/* 000572 */ 			var __accu0__ = kwargs;
/* 000572 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000572 */ 		}) ();
/* 000577 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000582 */ 		self.environmentname = environmentname;
/* 000583 */ 		self.spec = spec;
/* 000584 */ 		self.nodelist = nodelist;
/* 000585 */ 		self.nodeargd = nodeargd;
/* 000585 */ 	});},
/* 000601 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000601 */ 		if (arguments.length) {
/* 000601 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000601 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000601 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000601 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000601 */ 					switch (__attrib0__) {
/* 000601 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 					}
/* 000601 */ 				}
/* 000601 */ 			}
/* 000601 */ 		}
/* 000601 */ 		else {
/* 000601 */ 		}
/* 000602 */ 		return LatexEnvironmentNode;
/* 000602 */ 	});},
/* 000604 */ 	get display_str () {return __get__ (this, function (self) {
/* 000604 */ 		if (arguments.length) {
/* 000604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 					switch (__attrib0__) {
/* 000604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 					}
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 		else {
/* 000604 */ 		}
/* 000605 */ 		return __add__ (__add__ ('environment ‘{', self.environmentname), '}’');
/* 000605 */ 	});},
/* 000607 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000608 */ 		return (function () {
/* 000608 */ 			var __accu0__ = visitor;
/* 000608 */ 			return __call__ (__accu0__.node_standard_process_environment, __accu0__, self);
/* 000608 */ 		}) ();
/* 000608 */ 	});}
/* 000608 */ });
/* 000612 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000612 */ 	__module__: __name__,
/* 000650 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000650 */ 		var kwargs = dict ();
/* 000650 */ 		if (arguments.length) {
/* 000650 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000650 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000650 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000650 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000650 */ 					switch (__attrib0__) {
/* 000650 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000650 */ 					}
/* 000650 */ 				}
/* 000650 */ 				delete kwargs.__kwargtrans__;
/* 000650 */ 			}
/* 000650 */ 		}
/* 000650 */ 		else {
/* 000650 */ 		}
/* 000652 */ 		var spec = (function () {
/* 000652 */ 			var __accu0__ = kwargs;
/* 000652 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000652 */ 		}) ();
/* 000653 */ 		var nodeargd = (function () {
/* 000653 */ 			var __accu0__ = kwargs;
/* 000653 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000653 */ 		}) ();
/* 000655 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000659 */ 		self.specials_chars = specials_chars;
/* 000660 */ 		self.spec = spec;
/* 000661 */ 		self.nodeargd = nodeargd;
/* 000661 */ 	});},
/* 000663 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000663 */ 		if (arguments.length) {
/* 000663 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000663 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000663 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000663 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000663 */ 					switch (__attrib0__) {
/* 000663 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 					}
/* 000663 */ 				}
/* 000663 */ 			}
/* 000663 */ 		}
/* 000663 */ 		else {
/* 000663 */ 		}
/* 000664 */ 		return LatexSpecialsNode;
/* 000664 */ 	});},
/* 000666 */ 	get display_str () {return __get__ (this, function (self) {
/* 000666 */ 		if (arguments.length) {
/* 000666 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000666 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000666 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000666 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000666 */ 					switch (__attrib0__) {
/* 000666 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 					}
/* 000666 */ 				}
/* 000666 */ 			}
/* 000666 */ 		}
/* 000666 */ 		else {
/* 000666 */ 		}
/* 000667 */ 		return __add__ (__add__ ('specials ‘', self.specials_chars), '’');
/* 000667 */ 	});},
/* 000669 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000670 */ 		return (function () {
/* 000670 */ 			var __accu0__ = visitor;
/* 000670 */ 			return __call__ (__accu0__.node_standard_process_specials, __accu0__, self);
/* 000670 */ 		}) ();
/* 000670 */ 	});}
/* 000670 */ });
/* 000673 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000673 */ 	__module__: __name__,
/* 000699 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000699 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000699 */ 			var nodelist = [];
/* 000699 */ 		};
/* 000699 */ 		var kwargs = dict ();
/* 000699 */ 		if (arguments.length) {
/* 000699 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000699 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000699 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000699 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000699 */ 					switch (__attrib0__) {
/* 000699 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000699 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000699 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000699 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000699 */ 					}
/* 000699 */ 				}
/* 000699 */ 				delete kwargs.__kwargtrans__;
/* 000699 */ 			}
/* 000699 */ 		}
/* 000699 */ 		else {
/* 000699 */ 		}
/* 000700 */ 		var delimiters = (function () {
/* 000700 */ 			var __accu0__ = kwargs;
/* 000700 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000700 */ 		}) ();
/* 000702 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000707 */ 		self.displaytype = displaytype;
/* 000708 */ 		self.nodelist = nodelist;
/* 000709 */ 		self.delimiters = delimiters;
/* 000709 */ 	});},
/* 000711 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000711 */ 		if (arguments.length) {
/* 000711 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000711 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000711 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000711 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000711 */ 					switch (__attrib0__) {
/* 000711 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 					}
/* 000711 */ 				}
/* 000711 */ 			}
/* 000711 */ 		}
/* 000711 */ 		else {
/* 000711 */ 		}
/* 000712 */ 		return LatexMathNode;
/* 000712 */ 	});},
/* 000714 */ 	get display_str () {return __get__ (this, function (self) {
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000715 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000715 */ 		var open_delim = __left0__ [0];
/* 000715 */ 		var close_delim = __left0__ [1];
/* 000716 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (self.displaytype, ' math ‘'), open_delim), '…'), close_delim), '’');
/* 000716 */ 	});},
/* 000718 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000718 */ 		if (arguments.length) {
/* 000718 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000718 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000718 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000718 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000718 */ 					switch (__attrib0__) {
/* 000718 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 					}
/* 000718 */ 				}
/* 000718 */ 			}
/* 000718 */ 		}
/* 000718 */ 		else {
/* 000718 */ 		}
/* 000719 */ 		return (function () {
/* 000719 */ 			var __accu0__ = visitor;
/* 000719 */ 			return __call__ (__accu0__.node_standard_process_math, __accu0__, self);
/* 000719 */ 		}) ();
/* 000719 */ 	});}
/* 000719 */ });
/* 000727 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000727 */ 	__module__: __name__,
/* 000769 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000769 */ 		var kwargs = dict ();
/* 000769 */ 		if (arguments.length) {
/* 000769 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000769 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000769 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000769 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000769 */ 					switch (__attrib0__) {
/* 000769 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000769 */ 					}
/* 000769 */ 				}
/* 000769 */ 				delete kwargs.__kwargtrans__;
/* 000769 */ 			}
/* 000769 */ 		}
/* 000769 */ 		else {
/* 000769 */ 		}
/* 000771 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000772 */ 			var obj = nodelist;
/* 000773 */ 			self.nodelist = obj.nodelist;
/* 000774 */ 			self.parsing_state = obj.parsing_state;
/* 000775 */ 			self.latex_walker = obj.latex_walker;
/* 000776 */ 			self.pos = obj.pos;
/* 000777 */ 			self.pos_end = obj.pos_end;
/* 000778 */ 			return ;
/* 000778 */ 		}
/* 000780 */ 		self.nodelist = nodelist;
/* 000782 */ 		if (__t__ (self.nodelist === null)) {
/* 000783 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot create a LatexNodeList with nodelist=None');
/* 000783 */ 			__except0__.__cause__ = null;
/* 000783 */ 			throw __except0__;
/* 000783 */ 		}
/* 000785 */ 		self.parsing_state = (function () {
/* 000785 */ 			var __accu0__ = kwargs;
/* 000785 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000785 */ 		}) ();
/* 000786 */ 		self.latex_walker = (function () {
/* 000786 */ 			var __accu0__ = kwargs;
/* 000786 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000786 */ 		}) ();
/* 000787 */ 		self.pos = (function () {
/* 000787 */ 			var __accu0__ = kwargs;
/* 000787 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000787 */ 		}) ();
/* 000788 */ 		self.pos_end = (function () {
/* 000788 */ 			var __accu0__ = kwargs;
/* 000788 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000788 */ 		}) ();
/* 000790 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000792 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000792 */ 			__except0__.__cause__ = null;
/* 000792 */ 			throw __except0__;
/* 000792 */ 		}
/* 000795 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000795 */ 		self.pos = __left0__ [0];
/* 000795 */ 		self.pos_end = __left0__ [1];
/* 000795 */ 	});},
/* 000798 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000802 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000802 */ 		if (arguments.length) {
/* 000802 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000802 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000802 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000802 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000802 */ 					switch (__attrib0__) {
/* 000802 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 					}
/* 000802 */ 				}
/* 000802 */ 			}
/* 000802 */ 		}
/* 000802 */ 		else {
/* 000802 */ 		}
/* 000803 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000804 */ 			return null;
/* 000804 */ 		}
/* 000805 */ 		return __sub__ (self.pos_end, self.pos);
/* 000805 */ 	});},
/* 000808 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000808 */ 		if (arguments.length) {
/* 000808 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000808 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000808 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000808 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000808 */ 					switch (__attrib0__) {
/* 000808 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000808 */ 					}
/* 000808 */ 				}
/* 000808 */ 			}
/* 000808 */ 		}
/* 000808 */ 		else {
/* 000808 */ 		}
/* 000809 */ 		if (__t__ (self.nodelist === null)) {
/* 000810 */ 			return __call__ (py_iter, null, []);
/* 000810 */ 		}
/* 000811 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000811 */ 	});},
/* 000811 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000814 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000814 */ 		if (arguments.length) {
/* 000814 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000814 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000814 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000814 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000814 */ 					switch (__attrib0__) {
/* 000814 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 					}
/* 000814 */ 				}
/* 000814 */ 			}
/* 000814 */ 		}
/* 000814 */ 		else {
/* 000814 */ 		}
/* 000825 */ 		try {
/* 000826 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000827 */ 				var __left0__ = index;
/* 000827 */ 				var lower = __left0__ [0];
/* 000827 */ 				var upper = __left0__ [1];
/* 000827 */ 				var step = __left0__ [2];
/* 000828 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000828 */ 			}
/* 000828 */ 		}
/* 000828 */ 		catch (__except0__) {
/* 000830 */ 			// pass;
/* 000830 */ 		}
/* 000833 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000834 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000834 */ 		}
/* 000836 */ 		return __getitem__ (self.nodelist, index);
/* 000836 */ 	});},
/* 000839 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000839 */ 		if (arguments.length) {
/* 000839 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000839 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000839 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000839 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000839 */ 					switch (__attrib0__) {
/* 000839 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000839 */ 					}
/* 000839 */ 				}
/* 000839 */ 			}
/* 000839 */ 		}
/* 000839 */ 		else {
/* 000839 */ 		}
/* 000840 */ 		return __call__ (len, null, self.nodelist);
/* 000840 */ 	});},
/* 000843 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000843 */ 		if (arguments.length) {
/* 000843 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000843 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000843 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000843 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000843 */ 					switch (__attrib0__) {
/* 000843 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000843 */ 					}
/* 000843 */ 				}
/* 000843 */ 			}
/* 000843 */ 		}
/* 000843 */ 		else {
/* 000843 */ 		}
/* 000850 */ 		return (function () {
/* 000850 */ 			var __accu0__ = '';
/* 000850 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000850 */ 				var __accu1__ = [];
/* 000850 */ 				var __iterable0__ = self.nodelist;
/* 000850 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000852 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000852 */ 					if (__t__ (n !== null)) {
/* 000853 */ 						(function () {
/* 000853 */ 							var __accu2__ = __accu1__;
/* 000851 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000851 */ 								var __accu3__ = n;
/* 000851 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000851 */ 							}) ());
/* 000851 */ 						}) ();
/* 000851 */ 					}
/* 000851 */ 				}
/* 000851 */ 				return __accu1__;
/* 000851 */ 			}) ());
/* 000851 */ 		}) ();
/* 000851 */ 	});},
/* 000857 */ 	get display_str () {return __get__ (this, function (self) {
/* 000857 */ 		if (arguments.length) {
/* 000857 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000857 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000857 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000857 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000857 */ 					switch (__attrib0__) {
/* 000857 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000857 */ 					}
/* 000857 */ 				}
/* 000857 */ 			}
/* 000857 */ 		}
/* 000857 */ 		else {
/* 000857 */ 		}
/* 000861 */ 		if (__t__ (self.nodelist === null)) {
/* 000862 */ 			var list_len = 'null list';
/* 000863 */ 			var list_preview = '';
/* 000863 */ 		}
/* 000864 */ 		else {
/* 000865 */ 			var list_len = __call__ (len, null, self.nodelist);
/* 000868 */ 			var list_preview = __add__ (__add__ (': ', (function () {
/* 000868 */ 				var __accu0__ = ', ';
/* 000868 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000868 */ 					var __accu1__ = [];
/* 000868 */ 					var __iterable0__ = __getslice__ (self.nodelist, 0, 2, 1);
/* 000868 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000870 */ 						var n = __getitem__ (__iterable0__, __index0__);
/* 000870 */ 						(function () {
/* 000870 */ 							var __accu2__ = __accu1__;
/* 000869 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (n !== null) ? (function () {
/* 000869 */ 								var __accu3__ = n;
/* 000869 */ 								return __call__ (__accu3__.display_str, __accu3__);
/* 000869 */ 							}) () : 'None'));
/* 000869 */ 						}) ();
/* 000869 */ 					}
/* 000869 */ 					return __accu1__;
/* 000869 */ 				}) ());
/* 000869 */ 			}) ()), (__t__ (__gt__ (list_len, 2)) ? ' …' : ''));
/* 000869 */ 		}
/* 000874 */ 		return __add__ (__add__ (__add__ ('list of nodes (', __call__ (str, null, list_len)), ')'), list_preview);
/* 000874 */ 	});},
/* 000876 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000876 */ 		if (arguments.length) {
/* 000876 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000876 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000876 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000876 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000876 */ 					switch (__attrib0__) {
/* 000876 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 					}
/* 000876 */ 				}
/* 000876 */ 			}
/* 000876 */ 		}
/* 000876 */ 		else {
/* 000876 */ 		}
/* 000877 */ 		return (function () {
/* 000877 */ 			var __accu0__ = visitor;
/* 000877 */ 			return __call__ (__accu0__.node_standard_process_list, __accu0__, self);
/* 000877 */ 		}) ();
/* 000877 */ 	});},
/* 000880 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000880 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000880 */ 			var node_predicate_fn = null;
/* 000880 */ 		};
/* 000880 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000880 */ 			var skip_none = true;
/* 000880 */ 		};
/* 000880 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000880 */ 			var skip_comments = false;
/* 000880 */ 		};
/* 000880 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000880 */ 			var skip_whitespace_char_nodes = false;
/* 000880 */ 		};
/* 000880 */ 		if (arguments.length) {
/* 000880 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000880 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000880 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000880 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000880 */ 					switch (__attrib0__) {
/* 000880 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 					}
/* 000880 */ 				}
/* 000880 */ 			}
/* 000880 */ 		}
/* 000880 */ 		else {
/* 000880 */ 		}
/* 000883 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000884 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000884 */ 		}
/* 000885 */ 		else {
/* 000886 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000886 */ 				var kwargs = dict ();
/* 000886 */ 				if (arguments.length) {
/* 000886 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000886 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000886 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000886 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000886 */ 							switch (__attrib0__) {
/* 000886 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000886 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000886 */ 							}
/* 000886 */ 						}
/* 000886 */ 						delete kwargs.__kwargtrans__;
/* 000886 */ 					}
/* 000886 */ 				}
/* 000886 */ 				else {
/* 000886 */ 				}
/* 000886 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000886 */ 			});
/* 000886 */ 		}
/* 000888 */ 		var filter_full_predicate_fn = function (n) {
/* 000888 */ 			if (arguments.length) {
/* 000888 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000888 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000888 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000888 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000888 */ 						switch (__attrib0__) {
/* 000888 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000888 */ 						}
/* 000888 */ 					}
/* 000888 */ 				}
/* 000888 */ 			}
/* 000888 */ 			else {
/* 000888 */ 			}
/* 000889 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000890 */ 				return false;
/* 000890 */ 			}
/* 000891 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000891 */ 				var __accu0__ = n;
/* 000891 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000891 */ 			}) ())) {
/* 000892 */ 				return false;
/* 000892 */ 			}
/* 000893 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000893 */ 				var __accu0__ = n;
/* 000893 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000894 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000894 */ 				var __accu0__ = n.chars;
/* 000894 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000894 */ 			}) ()), 0))) {
/* 000895 */ 				return false;
/* 000895 */ 			}
/* 000896 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000897 */ 				return __call__ (node_predicate_fn, null, n);
/* 000897 */ 			}
/* 000898 */ 			return true;
/* 000898 */ 		};
/* 000900 */ 		var filtered_nodes = (function () {
/* 000900 */ 			var __accu0__ = [];
/* 000900 */ 			var __iterable0__ = self.nodelist;
/* 000900 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000902 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000903 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000903 */ 					(function () {
/* 000903 */ 						var __accu1__ = __accu0__;
/* 000903 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000903 */ 					}) ();
/* 000903 */ 				}
/* 000903 */ 			}
/* 000903 */ 			return __accu0__;
/* 000903 */ 		}) ();
/* 000912 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000912 */ 	});},
/* 000916 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split, call_make_nodelist) {
/* 000916 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000916 */ 			var skip_none = true;
/* 000916 */ 		};
/* 000916 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000916 */ 			var keep_separators = false;
/* 000916 */ 		};
/* 000916 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000916 */ 			var max_split = null;
/* 000916 */ 		};
/* 000916 */ 		if (typeof call_make_nodelist == 'undefined' || (call_make_nodelist != null && call_make_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000916 */ 			var call_make_nodelist = true;
/* 000916 */ 		};
/* 000916 */ 		if (arguments.length) {
/* 000916 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000916 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000916 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000916 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000916 */ 					switch (__attrib0__) {
/* 000916 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'call_make_nodelist': var call_make_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 					}
/* 000916 */ 				}
/* 000916 */ 			}
/* 000916 */ 		}
/* 000916 */ 		else {
/* 000916 */ 		}
/* 000919 */ 		var nodelists_list = [[]];
/* 000921 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000922 */ 			var no_more_splits = true;
/* 000922 */ 		}
/* 000923 */ 		else {
/* 000924 */ 			var no_more_splits = false;
/* 000924 */ 		}
/* 000926 */ 		var __iterable0__ = self.nodelist;
/* 000926 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000926 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000927 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000927 */ 				continue;
/* 000927 */ 			}
/* 000929 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000930 */ 				if (__t__ (keep_separators)) {
/* 000931 */ 					(function () {
/* 000931 */ 						var __accu0__ = nodelists_list;
/* 000931 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000931 */ 					}) ();
/* 000931 */ 				}
/* 000932 */ 				else {
/* 000933 */ 					(function () {
/* 000933 */ 						var __accu0__ = nodelists_list;
/* 000933 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000933 */ 					}) ();
/* 000933 */ 				}
/* 000935 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000936 */ 					var no_more_splits = true;
/* 000936 */ 				}
/* 000936 */ 			}
/* 000937 */ 			else {
/* 000938 */ 				(function () {
/* 000938 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000938 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000938 */ 				}) ();
/* 000938 */ 			}
/* 000938 */ 		}
/* 000940 */ 		if (__t__ (__t__ (call_make_nodelist) && self.latex_walker !== null)) {
/* 000941 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000941 */ 		}
/* 000942 */ 		else {
/* 000943 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000943 */ 				var kwargs = dict ();
/* 000943 */ 				if (arguments.length) {
/* 000943 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000943 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000943 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000943 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000943 */ 							switch (__attrib0__) {
/* 000943 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000943 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000943 */ 							}
/* 000943 */ 						}
/* 000943 */ 						delete kwargs.__kwargtrans__;
/* 000943 */ 					}
/* 000943 */ 				}
/* 000943 */ 				else {
/* 000943 */ 				}
/* 000943 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000943 */ 			});
/* 000943 */ 		}
/* 000945 */ 		return (function () {
/* 000945 */ 			var __accu0__ = [];
/* 000945 */ 			var __iterable0__ = nodelists_list;
/* 000945 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000947 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000947 */ 				(function () {
/* 000947 */ 					var __accu1__ = __accu0__;
/* 000946 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000946 */ 				}) ();
/* 000946 */ 			}
/* 000946 */ 			return __accu0__;
/* 000946 */ 		}) ();
/* 000946 */ 	});},
/* 000950 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000950 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000950 */ 			var max_split = null;
/* 000950 */ 		};
/* 000950 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000950 */ 			var keep_empty = false;
/* 000950 */ 		};
/* 000950 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000950 */ 			var skip_none = true;
/* 000950 */ 		};
/* 000950 */ 		if (arguments.length) {
/* 000950 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000950 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000950 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000950 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000950 */ 					switch (__attrib0__) {
/* 000950 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 					}
/* 000950 */ 				}
/* 000950 */ 			}
/* 000950 */ 		}
/* 000950 */ 		else {
/* 000950 */ 		}
/* 000989 */ 		var split_node_lists = [];
/* 000991 */ 		var get_split_match_start_end = function (m, offset) {
/* 000991 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000991 */ 				var offset = 0;
/* 000991 */ 			};
/* 000991 */ 			if (arguments.length) {
/* 000991 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000991 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000991 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000991 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000991 */ 						switch (__attrib0__) {
/* 000991 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000991 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000991 */ 						}
/* 000991 */ 					}
/* 000991 */ 				}
/* 000991 */ 			}
/* 000991 */ 			else {
/* 000991 */ 			}
/* 000992 */ 			if (__t__ (m === null)) {
/* 000993 */ 				return tuple ([__neg__ (1), null]);
/* 000993 */ 			}
/* 000994 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000995 */ 				return tuple ([__add__ (offset, (function () {
/* 000995 */ 					var __accu0__ = m;
/* 000995 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000995 */ 				}) ()), __add__ (offset, (function () {
/* 000995 */ 					var __accu0__ = m;
/* 000995 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000995 */ 				}) ())]);
/* 000995 */ 			}
/* 000996 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000997 */ 				return tuple ([__neg__ (1), null]);
/* 000997 */ 			}
/* 000998 */ 			var __left0__ = m;
/* 000998 */ 			var start = __left0__ [0];
/* 000998 */ 			var end = __left0__ [1];
/* 000999 */ 			if (__t__ (start === null)) {
/* 001000 */ 				var start = __neg__ (1);
/* 001000 */ 			}
/* 001001 */ 			else {
/* 001002 */ 				var start = __add__ (offset, start);
/* 001002 */ 			}
/* 001003 */ 			var end = __add__ (offset, end);
/* 001004 */ 			return tuple ([start, end]);
/* 001004 */ 		};
/* 001006 */ 		var get_next_split = function (chars, pos) {
/* 001006 */ 			if (arguments.length) {
/* 001006 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001006 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001006 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001006 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001006 */ 						switch (__attrib0__) {
/* 001006 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						}
/* 001006 */ 					}
/* 001006 */ 				}
/* 001006 */ 			}
/* 001006 */ 			else {
/* 001006 */ 			}
/* 001008 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 001009 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 001009 */ 			}
/* 001011 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 001017 */ 				var m = (function () {
/* 001017 */ 					var __accu0__ = sep_chars;
/* 001017 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 001017 */ 				}) ();
/* 001018 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 001018 */ 			}
/* 001020 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 001021 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 001022 */ 				return __call__ (get_split_match_start_end, null, m);
/* 001022 */ 			}
/* 001024 */ 			var idx = (function () {
/* 001024 */ 				var __accu0__ = chars;
/* 001024 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 001024 */ 			}) ();
/* 001025 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 001026 */ 				return tuple ([__neg__ (1), null]);
/* 001026 */ 			}
/* 001027 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 001027 */ 		};
/* 001030 */ 		var lw = self.latex_walker;
/* 001031 */ 		if (__t__ (lw !== null)) {
/* 001032 */ 			var make_node = lw.make_node;
/* 001033 */ 			var make_nodelist = lw.make_nodelist;
/* 001033 */ 		}
/* 001034 */ 		else {
/* 001035 */ 			var make_node = (function __lambda__ (cls) {
/* 001035 */ 				var kwargs = dict ();
/* 001035 */ 				if (arguments.length) {
/* 001035 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001035 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001035 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001035 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001035 */ 							switch (__attrib0__) {
/* 001035 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001035 */ 							}
/* 001035 */ 						}
/* 001035 */ 						delete kwargs.__kwargtrans__;
/* 001035 */ 					}
/* 001035 */ 				}
/* 001035 */ 				else {
/* 001035 */ 				}
/* 001035 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 001035 */ 			});
/* 001036 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001036 */ 				var kwargs = dict ();
/* 001036 */ 				if (arguments.length) {
/* 001036 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001036 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001036 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001036 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001036 */ 							switch (__attrib0__) {
/* 001036 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001036 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001036 */ 							}
/* 001036 */ 						}
/* 001036 */ 						delete kwargs.__kwargtrans__;
/* 001036 */ 					}
/* 001036 */ 				}
/* 001036 */ 				else {
/* 001036 */ 				}
/* 001036 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001036 */ 			});
/* 001036 */ 		}
/* 001038 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 001038 */ 			if (arguments.length) {
/* 001038 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001038 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001038 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001038 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001038 */ 						switch (__attrib0__) {
/* 001038 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 						}
/* 001038 */ 					}
/* 001038 */ 				}
/* 001038 */ 			}
/* 001038 */ 			else {
/* 001038 */ 			}
/* 001039 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 001039 */ 		};
/* 001045 */ 		var flush_nodes = function (nodes, pos_end) {
/* 001045 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 001045 */ 				var pos_end = null;
/* 001045 */ 			};
/* 001045 */ 			if (arguments.length) {
/* 001045 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001045 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001045 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001045 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001045 */ 						switch (__attrib0__) {
/* 001045 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001045 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001045 */ 						}
/* 001045 */ 					}
/* 001045 */ 				}
/* 001045 */ 			}
/* 001045 */ 			else {
/* 001045 */ 			}
/* 001049 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 001052 */ 			(function () {
/* 001052 */ 				var __accu0__ = split_node_lists;
/* 001052 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 001052 */ 			}) ();
/* 001052 */ 		};
/* 001054 */ 		var pending_nodes = [];
/* 001056 */ 		var __iterable0__ = self.nodelist;
/* 001056 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001056 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001058 */ 			if (__t__ (n === null)) {
/* 001059 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001060 */ 					(function () {
/* 001060 */ 						var __accu0__ = pending_nodes;
/* 001060 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001060 */ 					}) ();
/* 001060 */ 				}
/* 001060 */ 				continue;
/* 001060 */ 			}
/* 001063 */ 			if (__t__ ((function () {
/* 001063 */ 				var __accu0__ = n;
/* 001063 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001063 */ 			}) ())) {
/* 001065 */ 				var next_sep_end = 0;
/* 001067 */ 				while (__t__ (true)) {
/* 001068 */ 					var prev_sep_end = next_sep_end;
/* 001069 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001069 */ 					var next_sep_idx = __left0__ [0];
/* 001069 */ 					var next_sep_end = __left0__ [1];
/* 001071 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001072 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001073 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001082 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001083 */ 								(function () {
/* 001083 */ 									var __accu0__ = pending_nodes;
/* 001084 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001084 */ 								}) ();
/* 001084 */ 							}
/* 001086 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001087 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001087 */ 							}
/* 001088 */ 							var pending_nodes = [];
/* 001088 */ 							continue;
/* 001088 */ 						}
/* 001090 */ 						else {
/* 001093 */ 							var thenodes = [];
/* 001094 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001096 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001096 */ 							}
/* 001098 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001099 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001099 */ 							}
/* 001099 */ 							continue;
/* 001099 */ 						}
/* 001099 */ 					}
/* 001102 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001106 */ 						(function () {
/* 001106 */ 							var __accu0__ = pending_nodes;
/* 001106 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001106 */ 						}) ();
/* 001106 */ 						break;
/* 001106 */ 					}
/* 001108 */ 					else {
/* 001111 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001112 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001113 */ 							(function () {
/* 001113 */ 								var __accu0__ = pending_nodes;
/* 001114 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001114 */ 							}) ();
/* 001114 */ 						}
/* 001114 */ 						break;
/* 001114 */ 					}
/* 001114 */ 				}
/* 001114 */ 				continue;
/* 001114 */ 			}
/* 001123 */ 			(function () {
/* 001123 */ 				var __accu0__ = pending_nodes;
/* 001123 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001123 */ 			}) ();
/* 001123 */ 		}
/* 001125 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001126 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001126 */ 		}
/* 001128 */ 		return split_node_lists;
/* 001128 */ 	});},
/* 001131 */ 	get parse_keyval_content () {return __get__ (this, function (self, comma_sep_chars, eq_sep_chars, repeated_key_aggregate_action, default_value_nodelist, extract_value_group_contents, dict_type) {
/* 001131 */ 		if (typeof comma_sep_chars == 'undefined' || (comma_sep_chars != null && comma_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var comma_sep_chars = ',';
/* 001131 */ 		};
/* 001131 */ 		if (typeof eq_sep_chars == 'undefined' || (eq_sep_chars != null && eq_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var eq_sep_chars = '=';
/* 001131 */ 		};
/* 001131 */ 		if (typeof repeated_key_aggregate_action == 'undefined' || (repeated_key_aggregate_action != null && repeated_key_aggregate_action.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var repeated_key_aggregate_action = 'concatenate';
/* 001131 */ 		};
/* 001131 */ 		if (typeof default_value_nodelist == 'undefined' || (default_value_nodelist != null && default_value_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var default_value_nodelist = null;
/* 001131 */ 		};
/* 001131 */ 		if (typeof extract_value_group_contents == 'undefined' || (extract_value_group_contents != null && extract_value_group_contents.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var extract_value_group_contents = true;
/* 001131 */ 		};
/* 001131 */ 		if (typeof dict_type == 'undefined' || (dict_type != null && dict_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 001131 */ 			var dict_type = dict;
/* 001131 */ 		};
/* 001131 */ 		if (arguments.length) {
/* 001131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001131 */ 					switch (__attrib0__) {
/* 001131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'comma_sep_chars': var comma_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'eq_sep_chars': var eq_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'repeated_key_aggregate_action': var repeated_key_aggregate_action = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'default_value_nodelist': var default_value_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'extract_value_group_contents': var extract_value_group_contents = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 						case 'dict_type': var dict_type = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 					}
/* 001131 */ 				}
/* 001131 */ 			}
/* 001131 */ 		}
/* 001131 */ 		else {
/* 001131 */ 		}
/* 001174 */ 		var result_keyvals = __call__ (dict_type, null);
/* 001176 */ 		var lw = self.latex_walker;
/* 001177 */ 		if (__t__ (lw !== null)) {
/* 001178 */ 			var make_nodelist = lw.make_nodelist;
/* 001178 */ 		}
/* 001179 */ 		else {
/* 001180 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001180 */ 				var kwargs = dict ();
/* 001180 */ 				if (arguments.length) {
/* 001180 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001180 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001180 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001180 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001180 */ 							switch (__attrib0__) {
/* 001180 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001180 */ 							}
/* 001180 */ 						}
/* 001180 */ 						delete kwargs.__kwargtrans__;
/* 001180 */ 					}
/* 001180 */ 				}
/* 001180 */ 				else {
/* 001180 */ 				}
/* 001180 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001180 */ 			});
/* 001180 */ 		}
/* 001182 */ 		var comma_sep_parts = (function () {
/* 001182 */ 			var __accu0__ = self;
/* 001182 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, comma_sep_chars);
/* 001182 */ 		}) ();
/* 001183 */ 		var __iterable0__ = comma_sep_parts;
/* 001183 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001183 */ 			var part = __getitem__ (__iterable0__, __index0__);
/* 001184 */ 			var eq_sep_parts = (function () {
/* 001184 */ 				var __accu0__ = part;
/* 001184 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, eq_sep_chars, __kwargtrans__ ({max_split: 1}));
/* 001184 */ 			}) ();
/* 001185 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 0))) {
/* 001185 */ 				continue;
/* 001185 */ 			}
/* 001187 */ 			var key_nl = __getitem__ (eq_sep_parts, 0);
/* 001188 */ 			var value_nl = null;
/* 001189 */ 			if (__t__ (__gt__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001190 */ 				var __except0__ = __call__ (RuntimeError, null, '[internal error?] unexpected split length past max_split?');
/* 001190 */ 				__except0__.__cause__ = null;
/* 001190 */ 				throw __except0__;
/* 001190 */ 			}
/* 001191 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001192 */ 				var value_nl = __getitem__ (eq_sep_parts, 1);
/* 001194 */ 				if (__t__ (__t__ (extract_value_group_contents) && __t__ (value_nl !== null) && __t__ (__eq__ (__call__ (len, null, value_nl), 1)) && (function () {
/* 001194 */ 					var __accu0__ = __getitem__ (value_nl.nodelist, 0);
/* 001194 */ 					return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001194 */ 				}) ())) {
/* 001195 */ 					var value_nl = __getitem__ (value_nl.nodelist, 0).nodelist;
/* 001195 */ 				}
/* 001195 */ 			}
/* 001197 */ 			if (__t__ (value_nl === null)) {
/* 001198 */ 				var value_nl = default_value_nodelist;
/* 001198 */ 			}
/* 001200 */ 			if (__t__ (!__t__ ((__call__ (isinstance, null, value_nl, LatexNodeList))))) {
/* 001201 */ 				var value_nl = __call__ (make_nodelist, null, [value_nl], __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 001201 */ 			}
/* 001206 */ 			var key_s = (function () {
/* 001206 */ 				var __accu0__ = key_nl;
/* 001206 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 001206 */ 			}) ();
/* 001207 */ 			if (__t__ (__in__ (key_s, result_keyvals))) {
/* 001208 */ 				if (__t__ (__eq__ (repeated_key_aggregate_action, 'concatenate'))) {
/* 001211 */ 					var value_nl = __call__ (make_nodelist, null, __add__ (__getitem__ (result_keyvals, key_s).nodelist, (__t__ (__call__ (isinstance, null, value_nl, LatexNodeList)) ? value_nl.nodelist : [value_nl])), __kwargtrans__ ({parsing_state: self.parsing_state, pos: __getitem__ (result_keyvals, key_s).pos}));
/* 001211 */ 				}
/* 001217 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'error'))) {
/* 001218 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 001218 */ 						var __accu0__ = 'Repeated Key: ‘{}’';
/* 001218 */ 						return __call__ (__accu0__.format, __accu0__, key_s);
/* 001218 */ 					}) ());
/* 001218 */ 					__except0__.__cause__ = null;
/* 001218 */ 					throw __except0__;
/* 001218 */ 				}
/* 001219 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'first'))) {
/* 001220 */ 					var value_nl = __getitem__ (result_keyvals, key_s).nodelist;
/* 001220 */ 				}
/* 001221 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'last'))) {
/* 001222 */ 					// pass;
/* 001222 */ 				}
/* 001223 */ 				else {
/* 001224 */ 					var value_nl = __call__ (repeated_key_aggregate_action, null, key_s, __getitem__ (result_keyvals, key_s).nodelist, value_nl, __kwargtrans__ ({result_keyvals: result_keyvals}));
/* 001224 */ 				}
/* 001224 */ 			}
/* 001231 */ 			__setitem__ (result_keyvals, key_s, value_nl);
/* 001231 */ 		}
/* 001233 */ 		return result_keyvals;
/* 001233 */ 	});},
/* 001236 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001236 */ 		if (arguments.length) {
/* 001236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001236 */ 					switch (__attrib0__) {
/* 001236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001236 */ 					}
/* 001236 */ 				}
/* 001236 */ 			}
/* 001236 */ 		}
/* 001236 */ 		else {
/* 001236 */ 		}
/* 001251 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001251 */ 	});},
/* 001255 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001255 */ 		if (arguments.length) {
/* 001255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001255 */ 					switch (__attrib0__) {
/* 001255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001255 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001255 */ 					}
/* 001255 */ 				}
/* 001255 */ 			}
/* 001255 */ 		}
/* 001255 */ 		else {
/* 001255 */ 		}
/* 001256 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001257 */ 			return __eq__ (self.nodelist, other);
/* 001257 */ 		}
/* 001258 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001258 */ 	});},
/* 001267 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001267 */ 		if (arguments.length) {
/* 001267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001267 */ 					switch (__attrib0__) {
/* 001267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001267 */ 					}
/* 001267 */ 				}
/* 001267 */ 			}
/* 001267 */ 		}
/* 001267 */ 		else {
/* 001267 */ 		}
/* 001268 */ 		return self.nodelist;
/* 001268 */ 	});},
/* 001270 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001270 */ 		if (arguments.length) {
/* 001270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001270 */ 					switch (__attrib0__) {
/* 001270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001270 */ 					}
/* 001270 */ 				}
/* 001270 */ 			}
/* 001270 */ 		}
/* 001270 */ 		else {
/* 001270 */ 		}
/* 001271 */ 		return (function () {
/* 001271 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001271 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001271 */ 		}) ();
/* 001271 */ 	});}
/* 001271 */ });
/* 001271 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001279 */ export var _get_content_as_chars = function (nodelist) {
/* 001279 */ 	if (arguments.length) {
/* 001279 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001279 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001279 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001279 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001279 */ 				switch (__attrib0__) {
/* 001279 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001279 */ 				}
/* 001279 */ 			}
/* 001279 */ 		}
/* 001279 */ 	}
/* 001279 */ 	else {
/* 001279 */ 	}
/* 001285 */ 	if (__t__ (nodelist === null)) {
/* 001286 */ 		return '';
/* 001286 */ 	}
/* 001288 */ 	var charslist = [];
/* 001290 */ 	var __iterable0__ = nodelist;
/* 001290 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001290 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001292 */ 		if (__t__ (n === null)) {
/* 001292 */ 			continue;
/* 001292 */ 		}
/* 001295 */ 		if (__t__ ((function () {
/* 001295 */ 			var __accu0__ = n;
/* 001295 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001295 */ 		}) ())) {
/* 001295 */ 			continue;
/* 001295 */ 		}
/* 001299 */ 		if (__t__ ((function () {
/* 001299 */ 			var __accu0__ = n;
/* 001299 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001299 */ 		}) ())) {
/* 001301 */ 			(function () {
/* 001301 */ 				var __accu0__ = charslist;
/* 001301 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001301 */ 			}) ();
/* 001301 */ 			continue;
/* 001301 */ 		}
/* 001304 */ 		if (__t__ ((function () {
/* 001304 */ 			var __accu0__ = n;
/* 001304 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001304 */ 		}) ())) {
/* 001305 */ 			(function () {
/* 001305 */ 				var __accu0__ = charslist;
/* 001305 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001305 */ 			}) ();
/* 001305 */ 			continue;
/* 001305 */ 		}
/* 001309 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001309 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001309 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001309 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001309 */ 		__except0__.__cause__ = null;
/* 001309 */ 		throw __except0__;
/* 001309 */ 	}
/* 001313 */ 	return (function () {
/* 001313 */ 		var __accu0__ = '';
/* 001313 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001313 */ 	}) ();
/* 001313 */ };
/* 001320 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001320 */ 	if (arguments.length) {
/* 001320 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001320 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001320 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001320 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001320 */ 				switch (__attrib0__) {
/* 001320 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001320 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001320 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001320 */ 				}
/* 001320 */ 			}
/* 001320 */ 		}
/* 001320 */ 	}
/* 001320 */ 	else {
/* 001320 */ 	}
/* 001322 */ 	if (__t__ (pos === null)) {
/* 001323 */ 		var __break0__ = false;
/* 001323 */ 		var __iterable0__ = nodelist;
/* 001323 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001323 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001324 */ 			if (__t__ (n !== null)) {
/* 001325 */ 				var pos = n.pos;
/* 001325 */ 				__break0__ = true;
/* 001325 */ 				break;
/* 001325 */ 			}
/* 001325 */ 		}
/* 001327 */ 		if (!__break0__) {
/* 001328 */ 			var pos = null;
/* 001328 */ 		}
/* 001328 */ 	}
/* 001330 */ 	if (__t__ (pos_end === null)) {
/* 001331 */ 		var __break0__ = false;
/* 001331 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001331 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001331 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001332 */ 			if (__t__ (n !== null)) {
/* 001333 */ 				var pos_end = n.pos_end;
/* 001333 */ 				__break0__ = true;
/* 001333 */ 				break;
/* 001333 */ 			}
/* 001333 */ 		}
/* 001335 */ 		if (!__break0__) {
/* 001336 */ 			var pos_end = null;
/* 001336 */ 		}
/* 001336 */ 	}
/* 001338 */ 	return tuple ([pos, pos_end]);
/* 001338 */ };
/* 001348 */ export var _UseList =  __class__ ('_UseList', [object], {
/* 001348 */ 	__module__: __name__,
/* 001348 */ });
/* 001353 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001353 */ 	__module__: __name__,
/* 001397 */ 	get start () {return __get__ (this, function (self, node) {
/* 001397 */ 		if (arguments.length) {
/* 001397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001397 */ 					switch (__attrib0__) {
/* 001397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001397 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001397 */ 					}
/* 001397 */ 				}
/* 001397 */ 			}
/* 001397 */ 		}
/* 001397 */ 		else {
/* 001397 */ 		}
/* 001411 */ 		return (function () {
/* 001411 */ 			var __accu0__ = node;
/* 001411 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001411 */ 		}) ();
/* 001411 */ 	});},
/* 001418 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001418 */ 		var kwargs = dict ();
/* 001418 */ 		if (arguments.length) {
/* 001418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001418 */ 					switch (__attrib0__) {
/* 001418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001418 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001418 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001418 */ 					}
/* 001418 */ 				}
/* 001418 */ 				delete kwargs.__kwargtrans__;
/* 001418 */ 			}
/* 001418 */ 		}
/* 001418 */ 		else {
/* 001418 */ 		}
/* 001425 */ 		return null;
/* 001425 */ 	});},
/* 001427 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001427 */ 		var kwargs = dict ();
/* 001427 */ 		if (arguments.length) {
/* 001427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001427 */ 					switch (__attrib0__) {
/* 001427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001427 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001427 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001427 */ 					}
/* 001427 */ 				}
/* 001427 */ 				delete kwargs.__kwargtrans__;
/* 001427 */ 			}
/* 001427 */ 		}
/* 001427 */ 		else {
/* 001427 */ 		}
/* 001431 */ 		return (function () {
/* 001431 */ 			var __accu0__ = self;
/* 001431 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001431 */ 		}) ();
/* 001431 */ 	});},
/* 001433 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001433 */ 		var kwargs = dict ();
/* 001433 */ 		if (arguments.length) {
/* 001433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001433 */ 					switch (__attrib0__) {
/* 001433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001433 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001433 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001433 */ 					}
/* 001433 */ 				}
/* 001433 */ 				delete kwargs.__kwargtrans__;
/* 001433 */ 			}
/* 001433 */ 		}
/* 001433 */ 		else {
/* 001433 */ 		}
/* 001440 */ 		return (function () {
/* 001440 */ 			var __accu0__ = self;
/* 001440 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001440 */ 		}) ();
/* 001440 */ 	});},
/* 001442 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001442 */ 		var kwargs = dict ();
/* 001442 */ 		if (arguments.length) {
/* 001442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001442 */ 					switch (__attrib0__) {
/* 001442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001442 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001442 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001442 */ 					}
/* 001442 */ 				}
/* 001442 */ 				delete kwargs.__kwargtrans__;
/* 001442 */ 			}
/* 001442 */ 		}
/* 001442 */ 		else {
/* 001442 */ 		}
/* 001446 */ 		return (function () {
/* 001446 */ 			var __accu0__ = self;
/* 001446 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001446 */ 		}) ();
/* 001446 */ 	});},
/* 001448 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001448 */ 		var kwargs = dict ();
/* 001448 */ 		if (arguments.length) {
/* 001448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001448 */ 					switch (__attrib0__) {
/* 001448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001448 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001448 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001448 */ 					}
/* 001448 */ 				}
/* 001448 */ 				delete kwargs.__kwargtrans__;
/* 001448 */ 			}
/* 001448 */ 		}
/* 001448 */ 		else {
/* 001448 */ 		}
/* 001454 */ 		return (function () {
/* 001454 */ 			var __accu0__ = self;
/* 001454 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001454 */ 		}) ();
/* 001454 */ 	});},
/* 001456 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001456 */ 		var kwargs = dict ();
/* 001456 */ 		if (arguments.length) {
/* 001456 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001456 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001456 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001456 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001456 */ 					switch (__attrib0__) {
/* 001456 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001456 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001456 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001456 */ 					}
/* 001456 */ 				}
/* 001456 */ 				delete kwargs.__kwargtrans__;
/* 001456 */ 			}
/* 001456 */ 		}
/* 001456 */ 		else {
/* 001456 */ 		}
/* 001466 */ 		return (function () {
/* 001466 */ 			var __accu0__ = self;
/* 001466 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001466 */ 		}) ();
/* 001466 */ 	});},
/* 001468 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001468 */ 		var kwargs = dict ();
/* 001468 */ 		if (arguments.length) {
/* 001468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001468 */ 					switch (__attrib0__) {
/* 001468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001468 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001468 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001468 */ 					}
/* 001468 */ 				}
/* 001468 */ 				delete kwargs.__kwargtrans__;
/* 001468 */ 			}
/* 001468 */ 		}
/* 001468 */ 		else {
/* 001468 */ 		}
/* 001474 */ 		return (function () {
/* 001474 */ 			var __accu0__ = self;
/* 001474 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001474 */ 		}) ();
/* 001474 */ 	});},
/* 001476 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001476 */ 		var kwargs = dict ();
/* 001476 */ 		if (arguments.length) {
/* 001476 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001476 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001476 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001476 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001476 */ 					switch (__attrib0__) {
/* 001476 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001476 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001476 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001476 */ 					}
/* 001476 */ 				}
/* 001476 */ 				delete kwargs.__kwargtrans__;
/* 001476 */ 			}
/* 001476 */ 		}
/* 001476 */ 		else {
/* 001476 */ 		}
/* 001483 */ 		return (function () {
/* 001483 */ 			var __accu0__ = self;
/* 001483 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001483 */ 		}) ();
/* 001483 */ 	});},
/* 001485 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001485 */ 		var kwargs = dict ();
/* 001485 */ 		if (arguments.length) {
/* 001485 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001485 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001485 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001485 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001485 */ 					switch (__attrib0__) {
/* 001485 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001485 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001485 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001485 */ 					}
/* 001485 */ 				}
/* 001485 */ 				delete kwargs.__kwargtrans__;
/* 001485 */ 			}
/* 001485 */ 		}
/* 001485 */ 		else {
/* 001485 */ 		}
/* 001503 */ 		return (function () {
/* 001503 */ 			var __accu0__ = self;
/* 001503 */ 			return __call__ (__accu0__.visit, __accu0__, nodes, __kwargtrans__ (kwargs));
/* 001503 */ 		}) ();
/* 001503 */ 	});},
/* 001505 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001505 */ 		var kwargs = dict ();
/* 001505 */ 		if (arguments.length) {
/* 001505 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001505 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001505 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001505 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001505 */ 					switch (__attrib0__) {
/* 001505 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001505 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001505 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001505 */ 					}
/* 001505 */ 				}
/* 001505 */ 				delete kwargs.__kwargtrans__;
/* 001505 */ 			}
/* 001505 */ 		}
/* 001505 */ 		else {
/* 001505 */ 		}
/* 001512 */ 		return (function () {
/* 001512 */ 			var __accu0__ = self;
/* 001512 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args, __kwargtrans__ (kwargs));
/* 001512 */ 		}) ();
/* 001512 */ 	});},
/* 001515 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001515 */ 		var kwargs = dict ();
/* 001515 */ 		if (arguments.length) {
/* 001515 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001515 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001515 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001515 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001515 */ 					switch (__attrib0__) {
/* 001515 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001515 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001515 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001515 */ 					}
/* 001515 */ 				}
/* 001515 */ 				delete kwargs.__kwargtrans__;
/* 001515 */ 			}
/* 001515 */ 		}
/* 001515 */ 		else {
/* 001515 */ 		}
/* 001519 */ 		return (function () {
/* 001519 */ 			var __accu0__ = self;
/* 001519 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001519 */ 		}) ();
/* 001519 */ 	});},
/* 001526 */ 	get descend_into_nodelist () {return __get__ (this, function (self, nodelist, py_default) {
/* 001526 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 001526 */ 			var py_default = _UseList;
/* 001526 */ 		};
/* 001526 */ 		if (arguments.length) {
/* 001526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001526 */ 					switch (__attrib0__) {
/* 001526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001526 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001526 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 001526 */ 					}
/* 001526 */ 				}
/* 001526 */ 			}
/* 001526 */ 		}
/* 001526 */ 		else {
/* 001526 */ 		}
/* 001542 */ 		if (__t__ (nodelist === null)) {
/* 001543 */ 			if (__t__ (py_default === _UseList)) {
/* 001544 */ 				return [];
/* 001544 */ 			}
/* 001545 */ 			return py_default;
/* 001545 */ 		}
/* 001547 */ 		var visited_results_nodelist = [];
/* 001548 */ 		var __iterable0__ = nodelist;
/* 001548 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001548 */ 			var cnode = __getitem__ (__iterable0__, __index0__);
/* 001549 */ 			if (__t__ (cnode !== null)) {
/* 001550 */ 				(function () {
/* 001550 */ 					var __accu0__ = visited_results_nodelist;
/* 001551 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 001551 */ 						var __accu1__ = cnode;
/* 001551 */ 						return __call__ (__accu1__.accept_node_visitor, __accu1__, self);
/* 001551 */ 					}) ());
/* 001551 */ 				}) ();
/* 001551 */ 			}
/* 001552 */ 			else {
/* 001554 */ 				(function () {
/* 001554 */ 					var __accu0__ = visited_results_nodelist;
/* 001554 */ 					return __call__ (__accu0__.append, __accu0__, null);
/* 001554 */ 				}) ();
/* 001554 */ 			}
/* 001554 */ 		}
/* 001556 */ 		return visited_results_nodelist;
/* 001556 */ 	});},
/* 001558 */ 	get descend_into_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 001558 */ 		if (arguments.length) {
/* 001558 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001558 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001558 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001558 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001558 */ 					switch (__attrib0__) {
/* 001558 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001558 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 001558 */ 					}
/* 001558 */ 				}
/* 001558 */ 			}
/* 001558 */ 		}
/* 001558 */ 		else {
/* 001558 */ 		}
/* 001559 */ 		if (__t__ (parsed_arguments === null)) {
/* 001560 */ 			return '';
/* 001560 */ 		}
/* 001561 */ 		return (function () {
/* 001561 */ 			var __accu0__ = parsed_arguments;
/* 001561 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001561 */ 		}) ();
/* 001561 */ 	});},
/* 001566 */ 	get node_standard_process_unknown () {return __get__ (this, function (self, node) {
/* 001566 */ 		if (arguments.length) {
/* 001566 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001566 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001566 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001566 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001566 */ 					switch (__attrib0__) {
/* 001566 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001566 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001566 */ 					}
/* 001566 */ 				}
/* 001566 */ 			}
/* 001566 */ 		}
/* 001566 */ 		else {
/* 001566 */ 		}
/* 001567 */ 		return (function () {
/* 001567 */ 			var __accu0__ = self;
/* 001567 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, node);
/* 001567 */ 		}) ();
/* 001567 */ 	});},
/* 001569 */ 	get node_standard_process_chars () {return __get__ (this, function (self, node) {
/* 001569 */ 		if (arguments.length) {
/* 001569 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001569 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001569 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001569 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001569 */ 					switch (__attrib0__) {
/* 001569 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001569 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001569 */ 					}
/* 001569 */ 				}
/* 001569 */ 			}
/* 001569 */ 		}
/* 001569 */ 		else {
/* 001569 */ 		}
/* 001570 */ 		return (function () {
/* 001570 */ 			var __accu0__ = self;
/* 001570 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, node);
/* 001570 */ 		}) ();
/* 001570 */ 	});},
/* 001572 */ 	get node_standard_process_group () {return __get__ (this, function (self, node) {
/* 001572 */ 		if (arguments.length) {
/* 001572 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001572 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001572 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001572 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001572 */ 					switch (__attrib0__) {
/* 001572 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001572 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001572 */ 					}
/* 001572 */ 				}
/* 001572 */ 			}
/* 001572 */ 		}
/* 001572 */ 		else {
/* 001572 */ 		}
/* 001574 */ 		var visited_results_nodelist = (function () {
/* 001574 */ 			var __accu0__ = self;
/* 001574 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist);
/* 001574 */ 		}) ();
/* 001576 */ 		return (function () {
/* 001576 */ 			var __accu0__ = self;
/* 001576 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, node, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001576 */ 		}) ();
/* 001576 */ 	});},
/* 001581 */ 	get node_standard_process_comment () {return __get__ (this, function (self, node) {
/* 001581 */ 		if (arguments.length) {
/* 001581 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001581 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001581 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001581 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001581 */ 					switch (__attrib0__) {
/* 001581 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001581 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001581 */ 					}
/* 001581 */ 				}
/* 001581 */ 			}
/* 001581 */ 		}
/* 001581 */ 		else {
/* 001581 */ 		}
/* 001582 */ 		return (function () {
/* 001582 */ 			var __accu0__ = self;
/* 001582 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, node);
/* 001582 */ 		}) ();
/* 001582 */ 	});},
/* 001584 */ 	get node_standard_process_macro () {return __get__ (this, function (self, node) {
/* 001584 */ 		if (arguments.length) {
/* 001584 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001584 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001584 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001584 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001584 */ 					switch (__attrib0__) {
/* 001584 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001584 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001584 */ 					}
/* 001584 */ 				}
/* 001584 */ 			}
/* 001584 */ 		}
/* 001584 */ 		else {
/* 001584 */ 		}
/* 001586 */ 		var visited_results_arguments = (function () {
/* 001586 */ 			var __accu0__ = self;
/* 001586 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001586 */ 		}) ();
/* 001588 */ 		return (function () {
/* 001588 */ 			var __accu0__ = self;
/* 001588 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 001588 */ 		}) ();
/* 001588 */ 	});},
/* 001593 */ 	get node_standard_process_environment () {return __get__ (this, function (self, node) {
/* 001593 */ 		if (arguments.length) {
/* 001593 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001593 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001593 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001593 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001593 */ 					switch (__attrib0__) {
/* 001593 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001593 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001593 */ 					}
/* 001593 */ 				}
/* 001593 */ 			}
/* 001593 */ 		}
/* 001593 */ 		else {
/* 001593 */ 		}
/* 001595 */ 		var visited_results_arguments = (function () {
/* 001595 */ 			var __accu0__ = self;
/* 001595 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001595 */ 		}) ();
/* 001596 */ 		var visited_results_body = (function () {
/* 001596 */ 			var __accu0__ = self;
/* 001596 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist);
/* 001596 */ 		}) ();
/* 001598 */ 		return (function () {
/* 001598 */ 			var __accu0__ = self;
/* 001598 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments, visited_results_body: visited_results_body}));
/* 001598 */ 		}) ();
/* 001598 */ 	});},
/* 001604 */ 	get node_standard_process_specials () {return __get__ (this, function (self, node) {
/* 001604 */ 		if (arguments.length) {
/* 001604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001604 */ 					switch (__attrib0__) {
/* 001604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001604 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001604 */ 					}
/* 001604 */ 				}
/* 001604 */ 			}
/* 001604 */ 		}
/* 001604 */ 		else {
/* 001604 */ 		}
/* 001606 */ 		var visited_results_arguments = (function () {
/* 001606 */ 			var __accu0__ = self;
/* 001606 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 001606 */ 		}) ();
/* 001608 */ 		return (function () {
/* 001608 */ 			var __accu0__ = self;
/* 001608 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, node, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 001608 */ 		}) ();
/* 001608 */ 	});},
/* 001613 */ 	get node_standard_process_math () {return __get__ (this, function (self, node) {
/* 001613 */ 		if (arguments.length) {
/* 001613 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001613 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001613 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001613 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001613 */ 					switch (__attrib0__) {
/* 001613 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001613 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001613 */ 					}
/* 001613 */ 				}
/* 001613 */ 			}
/* 001613 */ 		}
/* 001613 */ 		else {
/* 001613 */ 		}
/* 001615 */ 		var visited_results_nodelist = (function () {
/* 001615 */ 			var __accu0__ = self;
/* 001615 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, node.nodelist, __kwargtrans__ ({py_default: null}));
/* 001615 */ 		}) ();
/* 001620 */ 		return (function () {
/* 001620 */ 			var __accu0__ = self;
/* 001620 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, node, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001620 */ 		}) ();
/* 001620 */ 	});},
/* 001626 */ 	get node_standard_process_list () {return __get__ (this, function (self, nodelist) {
/* 001626 */ 		if (arguments.length) {
/* 001626 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001626 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001626 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001626 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001626 */ 					switch (__attrib0__) {
/* 001626 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001626 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001626 */ 					}
/* 001626 */ 				}
/* 001626 */ 			}
/* 001626 */ 		}
/* 001626 */ 		else {
/* 001626 */ 		}
/* 001628 */ 		var visited_results_nodelist = (function () {
/* 001628 */ 			var __accu0__ = self;
/* 001628 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, nodelist.nodelist);
/* 001628 */ 		}) ();
/* 001630 */ 		return (function () {
/* 001630 */ 			var __accu0__ = self;
/* 001630 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, nodelist, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 001630 */ 		}) ();
/* 001630 */ 	});},
/* 001635 */ 	get node_standard_process_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 001635 */ 		if (arguments.length) {
/* 001635 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001635 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001635 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001635 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001635 */ 					switch (__attrib0__) {
/* 001635 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001635 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 001635 */ 					}
/* 001635 */ 				}
/* 001635 */ 			}
/* 001635 */ 		}
/* 001635 */ 		else {
/* 001635 */ 		}
/* 001637 */ 		var visited_results_argnlist = (function () {
/* 001637 */ 			var __accu0__ = self;
/* 001637 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, parsed_arguments.argnlist, __kwargtrans__ ({py_default: null}));
/* 001637 */ 		}) ();
/* 001642 */ 		return (function () {
/* 001642 */ 			var __accu0__ = self;
/* 001642 */ 			return __call__ (__accu0__.visit_parsed_arguments, __accu0__, parsed_arguments, __kwargtrans__ ({visited_results_argnlist: visited_results_argnlist}));
/* 001642 */ 		}) ();
/* 001642 */ 	});}
/* 001642 */ });
/* 001661 */ export var latex_node_types = tuple ([LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode]);
/* 001672 */ export var __all__ = __add__ ((function () {
/* 001672 */ 	var __accu0__ = [];
/* 001672 */ 	var __iterable0__ = latex_node_types;
/* 001672 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001672 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001672 */ 		(function () {
/* 001672 */ 			var __accu1__ = __accu0__;
/* 001672 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001672 */ 		}) ();
/* 001672 */ 	}
/* 001672 */ 	return __accu0__;
/* 001672 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map