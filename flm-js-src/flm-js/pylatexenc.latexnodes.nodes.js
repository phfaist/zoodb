/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 21:06:56
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000262 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
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
/* 000311 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
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
/* 000357 */ 		var visited_results_nodelist = [];
/* 000358 */ 		if (__t__ (self.nodelist !== null)) {
/* 000359 */ 			var __iterable0__ = self.nodelist;
/* 000359 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000359 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000360 */ 				if (__t__ (node !== null)) {
/* 000361 */ 					(function () {
/* 000361 */ 						var __accu0__ = visited_results_nodelist;
/* 000362 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000362 */ 							var __accu1__ = node;
/* 000362 */ 							return __call__ (__accu1__.accept_node_visitor, __accu1__, visitor);
/* 000362 */ 						}) ());
/* 000362 */ 					}) ();
/* 000362 */ 				}
/* 000363 */ 				else {
/* 000365 */ 					(function () {
/* 000365 */ 						var __accu0__ = visited_results_nodelist;
/* 000365 */ 						return __call__ (__accu0__.append, __accu0__, null);
/* 000365 */ 					}) ();
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000368 */ 		return (function () {
/* 000368 */ 			var __accu0__ = visitor;
/* 000368 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 000368 */ 		}) ();
/* 000368 */ 	});}
/* 000368 */ });
/* 000374 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000374 */ 	__module__: __name__,
/* 000388 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000388 */ 		var kwargs = dict ();
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 				delete kwargs.__kwargtrans__;
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000389 */ 		var comment_post_space = (function () {
/* 000389 */ 			var __accu0__ = kwargs;
/* 000389 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000389 */ 		}) ();
/* 000391 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000396 */ 		self.comment = comment;
/* 000397 */ 		self.comment_post_space = comment_post_space;
/* 000397 */ 	});},
/* 000399 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000400 */ 		return LatexCommentNode;
/* 000400 */ 	});},
/* 000402 */ 	get display_str () {return __get__ (this, function (self) {
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000403 */ 		return __add__ (__add__ ('comment ‘', __call__ (_display_abbrev_str, null, (function () {
/* 000403 */ 			var __accu0__ = self.comment;
/* 000403 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000403 */ 		}) ())), '’');
/* 000403 */ 	});},
/* 000405 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		return (function () {
/* 000406 */ 			var __accu0__ = visitor;
/* 000406 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000406 */ 		}) ();
/* 000406 */ 	});}
/* 000406 */ });
/* 000409 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000409 */ 	__module__: __name__,
/* 000473 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000473 */ 		var kwargs = dict ();
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 				delete kwargs.__kwargtrans__;
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000474 */ 		var nodeargd = (function () {
/* 000474 */ 			var __accu0__ = kwargs;
/* 000474 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000474 */ 		}) ();
/* 000475 */ 		var macro_post_space = (function () {
/* 000475 */ 			var __accu0__ = kwargs;
/* 000475 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000475 */ 		}) ();
/* 000476 */ 		var spec = (function () {
/* 000476 */ 			var __accu0__ = kwargs;
/* 000476 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000476 */ 		}) ();
/* 000478 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000483 */ 		self.macroname = macroname;
/* 000484 */ 		self.spec = spec;
/* 000485 */ 		self.nodeargd = nodeargd;
/* 000486 */ 		self.macro_post_space = macro_post_space;
/* 000486 */ 	});},
/* 000488 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000489 */ 		return LatexMacroNode;
/* 000489 */ 	});},
/* 000491 */ 	get display_str () {return __get__ (this, function (self) {
/* 000491 */ 		if (arguments.length) {
/* 000491 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 					switch (__attrib0__) {
/* 000491 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 			}
/* 000491 */ 		}
/* 000491 */ 		else {
/* 000491 */ 		}
/* 000492 */ 		return __add__ (__add__ ('macro ‘\\', self.macroname), '’');
/* 000492 */ 	});},
/* 000494 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000495 */ 		var visited_results_arguments = null;
/* 000496 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000497 */ 			var visited_results_arguments = (function () {
/* 000497 */ 				var __accu0__ = self.nodeargd;
/* 000497 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000497 */ 			}) ();
/* 000497 */ 		}
/* 000498 */ 		return (function () {
/* 000498 */ 			var __accu0__ = visitor;
/* 000498 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 000498 */ 		}) ();
/* 000498 */ 	});}
/* 000498 */ });
/* 000524 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000524 */ 	__module__: __name__,
/* 000590 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000590 */ 		var kwargs = dict ();
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 				delete kwargs.__kwargtrans__;
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000591 */ 		var nodeargd = (function () {
/* 000591 */ 			var __accu0__ = kwargs;
/* 000591 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000591 */ 		}) ();
/* 000592 */ 		var spec = (function () {
/* 000592 */ 			var __accu0__ = kwargs;
/* 000592 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000592 */ 		}) ();
/* 000597 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000602 */ 		self.environmentname = environmentname;
/* 000603 */ 		self.spec = spec;
/* 000604 */ 		self.nodelist = nodelist;
/* 000605 */ 		self.nodeargd = nodeargd;
/* 000605 */ 	});},
/* 000621 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000621 */ 		if (arguments.length) {
/* 000621 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000621 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000621 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000621 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000621 */ 					switch (__attrib0__) {
/* 000621 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000621 */ 					}
/* 000621 */ 				}
/* 000621 */ 			}
/* 000621 */ 		}
/* 000621 */ 		else {
/* 000621 */ 		}
/* 000622 */ 		return LatexEnvironmentNode;
/* 000622 */ 	});},
/* 000624 */ 	get display_str () {return __get__ (this, function (self) {
/* 000624 */ 		if (arguments.length) {
/* 000624 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000624 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000624 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000624 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000624 */ 					switch (__attrib0__) {
/* 000624 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 					}
/* 000624 */ 				}
/* 000624 */ 			}
/* 000624 */ 		}
/* 000624 */ 		else {
/* 000624 */ 		}
/* 000625 */ 		return __add__ (__add__ ('environment ‘{', self.environmentname), '}’');
/* 000625 */ 	});},
/* 000627 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000627 */ 		if (arguments.length) {
/* 000627 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000627 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000627 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000627 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000627 */ 					switch (__attrib0__) {
/* 000627 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 					}
/* 000627 */ 				}
/* 000627 */ 			}
/* 000627 */ 		}
/* 000627 */ 		else {
/* 000627 */ 		}
/* 000628 */ 		var visited_results_arguments = null;
/* 000629 */ 		var visited_results_body = null;
/* 000630 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000631 */ 			var visited_results_arguments = (function () {
/* 000631 */ 				var __accu0__ = self.nodeargd;
/* 000631 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000631 */ 			}) ();
/* 000631 */ 		}
/* 000632 */ 		if (__t__ (self.nodelist !== null)) {
/* 000633 */ 			var visited_results_body = [];
/* 000634 */ 			var __iterable0__ = self.nodelist;
/* 000634 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000635 */ 				if (__t__ (node !== null)) {
/* 000636 */ 					(function () {
/* 000636 */ 						var __accu0__ = visited_results_body;
/* 000637 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000637 */ 							var __accu1__ = node;
/* 000637 */ 							return __call__ (__accu1__.accept_node_visitor, __accu1__, visitor);
/* 000637 */ 						}) ());
/* 000637 */ 					}) ();
/* 000637 */ 				}
/* 000638 */ 				else {
/* 000640 */ 					(function () {
/* 000640 */ 						var __accu0__ = visited_results_body;
/* 000640 */ 						return __call__ (__accu0__.append, __accu0__, null);
/* 000640 */ 					}) ();
/* 000640 */ 				}
/* 000640 */ 			}
/* 000640 */ 		}
/* 000641 */ 		return (function () {
/* 000641 */ 			var __accu0__ = visitor;
/* 000641 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self, __kwargtrans__ ({visited_results_arguments: visited_results_arguments, visited_results_body: visited_results_body}));
/* 000641 */ 		}) ();
/* 000641 */ 	});}
/* 000641 */ });
/* 000649 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000649 */ 	__module__: __name__,
/* 000687 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000687 */ 		var kwargs = dict ();
/* 000687 */ 		if (arguments.length) {
/* 000687 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000687 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000687 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000687 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000687 */ 					switch (__attrib0__) {
/* 000687 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000687 */ 					}
/* 000687 */ 				}
/* 000687 */ 				delete kwargs.__kwargtrans__;
/* 000687 */ 			}
/* 000687 */ 		}
/* 000687 */ 		else {
/* 000687 */ 		}
/* 000689 */ 		var spec = (function () {
/* 000689 */ 			var __accu0__ = kwargs;
/* 000689 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000689 */ 		}) ();
/* 000690 */ 		var nodeargd = (function () {
/* 000690 */ 			var __accu0__ = kwargs;
/* 000690 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000690 */ 		}) ();
/* 000692 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000696 */ 		self.specials_chars = specials_chars;
/* 000697 */ 		self.spec = spec;
/* 000698 */ 		self.nodeargd = nodeargd;
/* 000698 */ 	});},
/* 000700 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000700 */ 		if (arguments.length) {
/* 000700 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000700 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000700 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000700 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000700 */ 					switch (__attrib0__) {
/* 000700 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000700 */ 					}
/* 000700 */ 				}
/* 000700 */ 			}
/* 000700 */ 		}
/* 000700 */ 		else {
/* 000700 */ 		}
/* 000701 */ 		return LatexSpecialsNode;
/* 000701 */ 	});},
/* 000703 */ 	get display_str () {return __get__ (this, function (self) {
/* 000703 */ 		if (arguments.length) {
/* 000703 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000703 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000703 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000703 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000703 */ 					switch (__attrib0__) {
/* 000703 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000703 */ 					}
/* 000703 */ 				}
/* 000703 */ 			}
/* 000703 */ 		}
/* 000703 */ 		else {
/* 000703 */ 		}
/* 000704 */ 		return __add__ (__add__ ('specials ‘', self.specials_chars), '’');
/* 000704 */ 	});},
/* 000706 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000706 */ 		if (arguments.length) {
/* 000706 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000706 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000706 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000706 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000706 */ 					switch (__attrib0__) {
/* 000706 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 					}
/* 000706 */ 				}
/* 000706 */ 			}
/* 000706 */ 		}
/* 000706 */ 		else {
/* 000706 */ 		}
/* 000707 */ 		var visited_results_arguments = null;
/* 000708 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000709 */ 			var visited_results_arguments = (function () {
/* 000709 */ 				var __accu0__ = self.nodeargd;
/* 000709 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000709 */ 			}) ();
/* 000709 */ 		}
/* 000710 */ 		return (function () {
/* 000710 */ 			var __accu0__ = visitor;
/* 000710 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self, __kwargtrans__ ({visited_results_arguments: visited_results_arguments}));
/* 000710 */ 		}) ();
/* 000710 */ 	});}
/* 000710 */ });
/* 000716 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000716 */ 	__module__: __name__,
/* 000742 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000742 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000742 */ 			var nodelist = [];
/* 000742 */ 		};
/* 000742 */ 		var kwargs = dict ();
/* 000742 */ 		if (arguments.length) {
/* 000742 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000742 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000742 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000742 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000742 */ 					switch (__attrib0__) {
/* 000742 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000742 */ 					}
/* 000742 */ 				}
/* 000742 */ 				delete kwargs.__kwargtrans__;
/* 000742 */ 			}
/* 000742 */ 		}
/* 000742 */ 		else {
/* 000742 */ 		}
/* 000743 */ 		var delimiters = (function () {
/* 000743 */ 			var __accu0__ = kwargs;
/* 000743 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000743 */ 		}) ();
/* 000745 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000750 */ 		self.displaytype = displaytype;
/* 000751 */ 		self.nodelist = nodelist;
/* 000752 */ 		self.delimiters = delimiters;
/* 000752 */ 	});},
/* 000754 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000754 */ 		if (arguments.length) {
/* 000754 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000754 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000754 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000754 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000754 */ 					switch (__attrib0__) {
/* 000754 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000754 */ 					}
/* 000754 */ 				}
/* 000754 */ 			}
/* 000754 */ 		}
/* 000754 */ 		else {
/* 000754 */ 		}
/* 000755 */ 		return LatexMathNode;
/* 000755 */ 	});},
/* 000757 */ 	get display_str () {return __get__ (this, function (self) {
/* 000757 */ 		if (arguments.length) {
/* 000757 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000757 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000757 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000757 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000757 */ 					switch (__attrib0__) {
/* 000757 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 					}
/* 000757 */ 				}
/* 000757 */ 			}
/* 000757 */ 		}
/* 000757 */ 		else {
/* 000757 */ 		}
/* 000758 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000758 */ 		var open_delim = __left0__ [0];
/* 000758 */ 		var close_delim = __left0__ [1];
/* 000759 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (self.displaytype, ' math ‘'), open_delim), '…'), close_delim), '’');
/* 000759 */ 	});},
/* 000761 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000761 */ 		if (arguments.length) {
/* 000761 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000761 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000761 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000761 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000761 */ 					switch (__attrib0__) {
/* 000761 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 					}
/* 000761 */ 				}
/* 000761 */ 			}
/* 000761 */ 		}
/* 000761 */ 		else {
/* 000761 */ 		}
/* 000762 */ 		var visited_results_nodelist = null;
/* 000763 */ 		if (__t__ (self.nodelist !== null)) {
/* 000764 */ 			var visited_results_nodelist = [];
/* 000765 */ 			var __iterable0__ = self.nodelist;
/* 000765 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000765 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000766 */ 				if (__t__ (node !== null)) {
/* 000767 */ 					(function () {
/* 000767 */ 						var __accu0__ = visited_results_nodelist;
/* 000768 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000768 */ 							var __accu1__ = node;
/* 000768 */ 							return __call__ (__accu1__.accept_node_visitor, __accu1__, visitor);
/* 000768 */ 						}) ());
/* 000768 */ 					}) ();
/* 000768 */ 				}
/* 000769 */ 				else {
/* 000771 */ 					(function () {
/* 000771 */ 						var __accu0__ = visited_results_nodelist;
/* 000771 */ 						return __call__ (__accu0__.append, __accu0__, null);
/* 000771 */ 					}) ();
/* 000771 */ 				}
/* 000771 */ 			}
/* 000771 */ 		}
/* 000772 */ 		return (function () {
/* 000772 */ 			var __accu0__ = visitor;
/* 000772 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 000772 */ 		}) ();
/* 000772 */ 	});}
/* 000772 */ });
/* 000783 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000783 */ 	__module__: __name__,
/* 000825 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000825 */ 		var kwargs = dict ();
/* 000825 */ 		if (arguments.length) {
/* 000825 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 					switch (__attrib0__) {
/* 000825 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 				delete kwargs.__kwargtrans__;
/* 000825 */ 			}
/* 000825 */ 		}
/* 000825 */ 		else {
/* 000825 */ 		}
/* 000827 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000828 */ 			var obj = nodelist;
/* 000829 */ 			self.nodelist = obj.nodelist;
/* 000830 */ 			self.parsing_state = obj.parsing_state;
/* 000831 */ 			self.latex_walker = obj.latex_walker;
/* 000832 */ 			self.pos = obj.pos;
/* 000833 */ 			self.pos_end = obj.pos_end;
/* 000834 */ 			return ;
/* 000834 */ 		}
/* 000836 */ 		self.nodelist = nodelist;
/* 000838 */ 		if (__t__ (self.nodelist === null)) {
/* 000839 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot create a LatexNodeList with nodelist=None');
/* 000839 */ 			__except0__.__cause__ = null;
/* 000839 */ 			throw __except0__;
/* 000839 */ 		}
/* 000841 */ 		self.parsing_state = (function () {
/* 000841 */ 			var __accu0__ = kwargs;
/* 000841 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000841 */ 		}) ();
/* 000842 */ 		self.latex_walker = (function () {
/* 000842 */ 			var __accu0__ = kwargs;
/* 000842 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000842 */ 		}) ();
/* 000843 */ 		self.pos = (function () {
/* 000843 */ 			var __accu0__ = kwargs;
/* 000843 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000843 */ 		}) ();
/* 000844 */ 		self.pos_end = (function () {
/* 000844 */ 			var __accu0__ = kwargs;
/* 000844 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000844 */ 		}) ();
/* 000846 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000848 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000848 */ 			__except0__.__cause__ = null;
/* 000848 */ 			throw __except0__;
/* 000848 */ 		}
/* 000851 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000851 */ 		self.pos = __left0__ [0];
/* 000851 */ 		self.pos_end = __left0__ [1];
/* 000851 */ 	});},
/* 000854 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000858 */ 	get _get_len () {return __get__ (this, function (self) {
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
/* 000859 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000860 */ 			return null;
/* 000860 */ 		}
/* 000861 */ 		return __sub__ (self.pos_end, self.pos);
/* 000861 */ 	});},
/* 000864 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000864 */ 		if (arguments.length) {
/* 000864 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000864 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000864 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000864 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000864 */ 					switch (__attrib0__) {
/* 000864 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000864 */ 					}
/* 000864 */ 				}
/* 000864 */ 			}
/* 000864 */ 		}
/* 000864 */ 		else {
/* 000864 */ 		}
/* 000865 */ 		if (__t__ (self.nodelist === null)) {
/* 000866 */ 			return __call__ (py_iter, null, []);
/* 000866 */ 		}
/* 000867 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000867 */ 	});},
/* 000867 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000870 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000870 */ 		if (arguments.length) {
/* 000870 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000870 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000870 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000870 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000870 */ 					switch (__attrib0__) {
/* 000870 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000870 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000870 */ 					}
/* 000870 */ 				}
/* 000870 */ 			}
/* 000870 */ 		}
/* 000870 */ 		else {
/* 000870 */ 		}
/* 000881 */ 		try {
/* 000882 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000883 */ 				var __left0__ = index;
/* 000883 */ 				var lower = __left0__ [0];
/* 000883 */ 				var upper = __left0__ [1];
/* 000883 */ 				var step = __left0__ [2];
/* 000884 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000884 */ 			}
/* 000884 */ 		}
/* 000884 */ 		catch (__except0__) {
/* 000886 */ 			// pass;
/* 000886 */ 		}
/* 000889 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000890 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000890 */ 		}
/* 000892 */ 		return __getitem__ (self.nodelist, index);
/* 000892 */ 	});},
/* 000895 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000895 */ 		if (arguments.length) {
/* 000895 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000895 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000895 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000895 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000895 */ 					switch (__attrib0__) {
/* 000895 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 					}
/* 000895 */ 				}
/* 000895 */ 			}
/* 000895 */ 		}
/* 000895 */ 		else {
/* 000895 */ 		}
/* 000896 */ 		return __call__ (len, null, self.nodelist);
/* 000896 */ 	});},
/* 000899 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000899 */ 		if (arguments.length) {
/* 000899 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000899 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000899 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000899 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000899 */ 					switch (__attrib0__) {
/* 000899 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 					}
/* 000899 */ 				}
/* 000899 */ 			}
/* 000899 */ 		}
/* 000899 */ 		else {
/* 000899 */ 		}
/* 000906 */ 		return (function () {
/* 000906 */ 			var __accu0__ = '';
/* 000906 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000906 */ 				var __accu1__ = [];
/* 000906 */ 				var __iterable0__ = self.nodelist;
/* 000906 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000908 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000908 */ 					if (__t__ (n !== null)) {
/* 000909 */ 						(function () {
/* 000909 */ 							var __accu2__ = __accu1__;
/* 000907 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000907 */ 								var __accu3__ = n;
/* 000907 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000907 */ 							}) ());
/* 000907 */ 						}) ();
/* 000907 */ 					}
/* 000907 */ 				}
/* 000907 */ 				return __accu1__;
/* 000907 */ 			}) ());
/* 000907 */ 		}) ();
/* 000907 */ 	});},
/* 000913 */ 	get display_str () {return __get__ (this, function (self) {
/* 000913 */ 		if (arguments.length) {
/* 000913 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000913 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000913 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000913 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000913 */ 					switch (__attrib0__) {
/* 000913 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 					}
/* 000913 */ 				}
/* 000913 */ 			}
/* 000913 */ 		}
/* 000913 */ 		else {
/* 000913 */ 		}
/* 000917 */ 		if (__t__ (self.nodelist === null)) {
/* 000918 */ 			var list_len = 'null list';
/* 000919 */ 			var list_preview = '';
/* 000919 */ 		}
/* 000920 */ 		else {
/* 000921 */ 			var list_len = __call__ (len, null, self.nodelist);
/* 000924 */ 			var list_preview = __add__ (__add__ (': ', (function () {
/* 000924 */ 				var __accu0__ = ', ';
/* 000924 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000924 */ 					var __accu1__ = [];
/* 000924 */ 					var __iterable0__ = __getslice__ (self.nodelist, 0, 2, 1);
/* 000924 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000926 */ 						var n = __getitem__ (__iterable0__, __index0__);
/* 000926 */ 						(function () {
/* 000926 */ 							var __accu2__ = __accu1__;
/* 000925 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (n !== null) ? (function () {
/* 000925 */ 								var __accu3__ = n;
/* 000925 */ 								return __call__ (__accu3__.display_str, __accu3__);
/* 000925 */ 							}) () : 'None'));
/* 000925 */ 						}) ();
/* 000925 */ 					}
/* 000925 */ 					return __accu1__;
/* 000925 */ 				}) ());
/* 000925 */ 			}) ()), (__t__ (__gt__ (list_len, 2)) ? ' …' : ''));
/* 000925 */ 		}
/* 000930 */ 		return __add__ (__add__ (__add__ ('list of nodes (', __call__ (str, null, list_len)), ')'), list_preview);
/* 000930 */ 	});},
/* 000932 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000932 */ 		if (arguments.length) {
/* 000932 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000932 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000932 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000932 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000932 */ 					switch (__attrib0__) {
/* 000932 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 					}
/* 000932 */ 				}
/* 000932 */ 			}
/* 000932 */ 		}
/* 000932 */ 		else {
/* 000932 */ 		}
/* 000933 */ 		var visited_results_nodelist = null;
/* 000934 */ 		if (__t__ (self.nodelist !== null)) {
/* 000935 */ 			var visited_results_nodelist = [];
/* 000936 */ 			var __iterable0__ = self.nodelist;
/* 000936 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000936 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000937 */ 				if (__t__ (node !== null)) {
/* 000938 */ 					(function () {
/* 000938 */ 						var __accu0__ = visited_results_nodelist;
/* 000939 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000939 */ 							var __accu1__ = node;
/* 000939 */ 							return __call__ (__accu1__.accept_node_visitor, __accu1__, visitor);
/* 000939 */ 						}) ());
/* 000939 */ 					}) ();
/* 000939 */ 				}
/* 000940 */ 				else {
/* 000942 */ 					(function () {
/* 000942 */ 						var __accu0__ = visited_results_nodelist;
/* 000942 */ 						return __call__ (__accu0__.append, __accu0__, null);
/* 000942 */ 					}) ();
/* 000942 */ 				}
/* 000942 */ 			}
/* 000942 */ 		}
/* 000943 */ 		return (function () {
/* 000943 */ 			var __accu0__ = visitor;
/* 000943 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self, __kwargtrans__ ({visited_results_nodelist: visited_results_nodelist}));
/* 000943 */ 		}) ();
/* 000943 */ 	});},
/* 000949 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000949 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000949 */ 			var node_predicate_fn = null;
/* 000949 */ 		};
/* 000949 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000949 */ 			var skip_none = true;
/* 000949 */ 		};
/* 000949 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000949 */ 			var skip_comments = false;
/* 000949 */ 		};
/* 000949 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000949 */ 			var skip_whitespace_char_nodes = false;
/* 000949 */ 		};
/* 000949 */ 		if (arguments.length) {
/* 000949 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000949 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000949 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000949 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000949 */ 					switch (__attrib0__) {
/* 000949 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 					}
/* 000949 */ 				}
/* 000949 */ 			}
/* 000949 */ 		}
/* 000949 */ 		else {
/* 000949 */ 		}
/* 000952 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000953 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000953 */ 		}
/* 000954 */ 		else {
/* 000955 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000955 */ 				var kwargs = dict ();
/* 000955 */ 				if (arguments.length) {
/* 000955 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000955 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000955 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000955 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000955 */ 							switch (__attrib0__) {
/* 000955 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000955 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000955 */ 							}
/* 000955 */ 						}
/* 000955 */ 						delete kwargs.__kwargtrans__;
/* 000955 */ 					}
/* 000955 */ 				}
/* 000955 */ 				else {
/* 000955 */ 				}
/* 000955 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000955 */ 			});
/* 000955 */ 		}
/* 000957 */ 		var filter_full_predicate_fn = function (n) {
/* 000957 */ 			if (arguments.length) {
/* 000957 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000957 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000957 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000957 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000957 */ 						switch (__attrib0__) {
/* 000957 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000957 */ 						}
/* 000957 */ 					}
/* 000957 */ 				}
/* 000957 */ 			}
/* 000957 */ 			else {
/* 000957 */ 			}
/* 000958 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000959 */ 				return false;
/* 000959 */ 			}
/* 000960 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000960 */ 				var __accu0__ = n;
/* 000960 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000960 */ 			}) ())) {
/* 000961 */ 				return false;
/* 000961 */ 			}
/* 000962 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000962 */ 				var __accu0__ = n;
/* 000962 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000963 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000963 */ 				var __accu0__ = n.chars;
/* 000963 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000963 */ 			}) ()), 0))) {
/* 000964 */ 				return false;
/* 000964 */ 			}
/* 000965 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000966 */ 				return __call__ (node_predicate_fn, null, n);
/* 000966 */ 			}
/* 000967 */ 			return true;
/* 000967 */ 		};
/* 000969 */ 		var filtered_nodes = (function () {
/* 000969 */ 			var __accu0__ = [];
/* 000969 */ 			var __iterable0__ = self.nodelist;
/* 000969 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000971 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000972 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000972 */ 					(function () {
/* 000972 */ 						var __accu1__ = __accu0__;
/* 000972 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000972 */ 					}) ();
/* 000972 */ 				}
/* 000972 */ 			}
/* 000972 */ 			return __accu0__;
/* 000972 */ 		}) ();
/* 000981 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000981 */ 	});},
/* 000985 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split, call_make_nodelist) {
/* 000985 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000985 */ 			var skip_none = true;
/* 000985 */ 		};
/* 000985 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000985 */ 			var keep_separators = false;
/* 000985 */ 		};
/* 000985 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000985 */ 			var max_split = null;
/* 000985 */ 		};
/* 000985 */ 		if (typeof call_make_nodelist == 'undefined' || (call_make_nodelist != null && call_make_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000985 */ 			var call_make_nodelist = true;
/* 000985 */ 		};
/* 000985 */ 		if (arguments.length) {
/* 000985 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000985 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000985 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000985 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000985 */ 					switch (__attrib0__) {
/* 000985 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 						case 'call_make_nodelist': var call_make_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000985 */ 					}
/* 000985 */ 				}
/* 000985 */ 			}
/* 000985 */ 		}
/* 000985 */ 		else {
/* 000985 */ 		}
/* 000988 */ 		var nodelists_list = [[]];
/* 000990 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000991 */ 			var no_more_splits = true;
/* 000991 */ 		}
/* 000992 */ 		else {
/* 000993 */ 			var no_more_splits = false;
/* 000993 */ 		}
/* 000995 */ 		var __iterable0__ = self.nodelist;
/* 000995 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000995 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000996 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000996 */ 				continue;
/* 000996 */ 			}
/* 000998 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000999 */ 				if (__t__ (keep_separators)) {
/* 001000 */ 					(function () {
/* 001000 */ 						var __accu0__ = nodelists_list;
/* 001000 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 001000 */ 					}) ();
/* 001000 */ 				}
/* 001001 */ 				else {
/* 001002 */ 					(function () {
/* 001002 */ 						var __accu0__ = nodelists_list;
/* 001002 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 001002 */ 					}) ();
/* 001002 */ 				}
/* 001004 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 001005 */ 					var no_more_splits = true;
/* 001005 */ 				}
/* 001005 */ 			}
/* 001006 */ 			else {
/* 001007 */ 				(function () {
/* 001007 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 001007 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 001007 */ 				}) ();
/* 001007 */ 			}
/* 001007 */ 		}
/* 001009 */ 		if (__t__ (__t__ (call_make_nodelist) && self.latex_walker !== null)) {
/* 001010 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 001010 */ 		}
/* 001011 */ 		else {
/* 001012 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 001012 */ 				var kwargs = dict ();
/* 001012 */ 				if (arguments.length) {
/* 001012 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001012 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001012 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001012 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001012 */ 							switch (__attrib0__) {
/* 001012 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001012 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001012 */ 							}
/* 001012 */ 						}
/* 001012 */ 						delete kwargs.__kwargtrans__;
/* 001012 */ 					}
/* 001012 */ 				}
/* 001012 */ 				else {
/* 001012 */ 				}
/* 001012 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001012 */ 			});
/* 001012 */ 		}
/* 001014 */ 		return (function () {
/* 001014 */ 			var __accu0__ = [];
/* 001014 */ 			var __iterable0__ = nodelists_list;
/* 001014 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001016 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 001016 */ 				(function () {
/* 001016 */ 					var __accu1__ = __accu0__;
/* 001015 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 001015 */ 				}) ();
/* 001015 */ 			}
/* 001015 */ 			return __accu0__;
/* 001015 */ 		}) ();
/* 001015 */ 	});},
/* 001019 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 001019 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 001019 */ 			var max_split = null;
/* 001019 */ 		};
/* 001019 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 001019 */ 			var keep_empty = false;
/* 001019 */ 		};
/* 001019 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 001019 */ 			var skip_none = true;
/* 001019 */ 		};
/* 001019 */ 		if (arguments.length) {
/* 001019 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001019 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001019 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001019 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001019 */ 					switch (__attrib0__) {
/* 001019 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 					}
/* 001019 */ 				}
/* 001019 */ 			}
/* 001019 */ 		}
/* 001019 */ 		else {
/* 001019 */ 		}
/* 001058 */ 		var split_node_lists = [];
/* 001060 */ 		var get_split_match_start_end = function (m, offset) {
/* 001060 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 001060 */ 				var offset = 0;
/* 001060 */ 			};
/* 001060 */ 			if (arguments.length) {
/* 001060 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001060 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001060 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001060 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001060 */ 						switch (__attrib0__) {
/* 001060 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 001060 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 001060 */ 						}
/* 001060 */ 					}
/* 001060 */ 				}
/* 001060 */ 			}
/* 001060 */ 			else {
/* 001060 */ 			}
/* 001061 */ 			if (__t__ (m === null)) {
/* 001062 */ 				return tuple ([__neg__ (1), null]);
/* 001062 */ 			}
/* 001063 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 001064 */ 				return tuple ([__add__ (offset, (function () {
/* 001064 */ 					var __accu0__ = m;
/* 001064 */ 					return __call__ (__accu0__.start, __accu0__);
/* 001064 */ 				}) ()), __add__ (offset, (function () {
/* 001064 */ 					var __accu0__ = m;
/* 001064 */ 					return __call__ (__accu0__.end, __accu0__);
/* 001064 */ 				}) ())]);
/* 001064 */ 			}
/* 001065 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 001066 */ 				return tuple ([__neg__ (1), null]);
/* 001066 */ 			}
/* 001067 */ 			var __left0__ = m;
/* 001067 */ 			var start = __left0__ [0];
/* 001067 */ 			var end = __left0__ [1];
/* 001068 */ 			if (__t__ (start === null)) {
/* 001069 */ 				var start = __neg__ (1);
/* 001069 */ 			}
/* 001070 */ 			else {
/* 001071 */ 				var start = __add__ (offset, start);
/* 001071 */ 			}
/* 001072 */ 			var end = __add__ (offset, end);
/* 001073 */ 			return tuple ([start, end]);
/* 001073 */ 		};
/* 001075 */ 		var get_next_split = function (chars, pos) {
/* 001075 */ 			if (arguments.length) {
/* 001075 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001075 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001075 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001075 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001075 */ 						switch (__attrib0__) {
/* 001075 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001075 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001075 */ 						}
/* 001075 */ 					}
/* 001075 */ 				}
/* 001075 */ 			}
/* 001075 */ 			else {
/* 001075 */ 			}
/* 001077 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 001078 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 001078 */ 			}
/* 001080 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 001086 */ 				var m = (function () {
/* 001086 */ 					var __accu0__ = sep_chars;
/* 001086 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 001086 */ 				}) ();
/* 001087 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 001087 */ 			}
/* 001089 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 001090 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 001091 */ 				return __call__ (get_split_match_start_end, null, m);
/* 001091 */ 			}
/* 001093 */ 			var idx = (function () {
/* 001093 */ 				var __accu0__ = chars;
/* 001093 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 001093 */ 			}) ();
/* 001094 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 001095 */ 				return tuple ([__neg__ (1), null]);
/* 001095 */ 			}
/* 001096 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 001096 */ 		};
/* 001099 */ 		var lw = self.latex_walker;
/* 001100 */ 		if (__t__ (lw !== null)) {
/* 001101 */ 			var make_node = lw.make_node;
/* 001102 */ 			var make_nodelist = lw.make_nodelist;
/* 001102 */ 		}
/* 001103 */ 		else {
/* 001104 */ 			var make_node = (function __lambda__ (cls) {
/* 001104 */ 				var kwargs = dict ();
/* 001104 */ 				if (arguments.length) {
/* 001104 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001104 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001104 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001104 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001104 */ 							switch (__attrib0__) {
/* 001104 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 001104 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001104 */ 							}
/* 001104 */ 						}
/* 001104 */ 						delete kwargs.__kwargtrans__;
/* 001104 */ 					}
/* 001104 */ 				}
/* 001104 */ 				else {
/* 001104 */ 				}
/* 001104 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 001104 */ 			});
/* 001105 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001105 */ 				var kwargs = dict ();
/* 001105 */ 				if (arguments.length) {
/* 001105 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001105 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001105 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001105 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001105 */ 							switch (__attrib0__) {
/* 001105 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001105 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001105 */ 							}
/* 001105 */ 						}
/* 001105 */ 						delete kwargs.__kwargtrans__;
/* 001105 */ 					}
/* 001105 */ 				}
/* 001105 */ 				else {
/* 001105 */ 				}
/* 001105 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001105 */ 			});
/* 001105 */ 		}
/* 001107 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 001107 */ 			if (arguments.length) {
/* 001107 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001107 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001107 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001107 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001107 */ 						switch (__attrib0__) {
/* 001107 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001107 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 001107 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 001107 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001107 */ 						}
/* 001107 */ 					}
/* 001107 */ 				}
/* 001107 */ 			}
/* 001107 */ 			else {
/* 001107 */ 			}
/* 001108 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 001108 */ 		};
/* 001114 */ 		var flush_nodes = function (nodes, pos_end) {
/* 001114 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 001114 */ 				var pos_end = null;
/* 001114 */ 			};
/* 001114 */ 			if (arguments.length) {
/* 001114 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001114 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001114 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001114 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001114 */ 						switch (__attrib0__) {
/* 001114 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001114 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001114 */ 						}
/* 001114 */ 					}
/* 001114 */ 				}
/* 001114 */ 			}
/* 001114 */ 			else {
/* 001114 */ 			}
/* 001118 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 001121 */ 			(function () {
/* 001121 */ 				var __accu0__ = split_node_lists;
/* 001121 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 001121 */ 			}) ();
/* 001121 */ 		};
/* 001123 */ 		var pending_nodes = [];
/* 001125 */ 		var __iterable0__ = self.nodelist;
/* 001125 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001125 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001127 */ 			if (__t__ (n === null)) {
/* 001128 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001129 */ 					(function () {
/* 001129 */ 						var __accu0__ = pending_nodes;
/* 001129 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001129 */ 					}) ();
/* 001129 */ 				}
/* 001129 */ 				continue;
/* 001129 */ 			}
/* 001132 */ 			if (__t__ ((function () {
/* 001132 */ 				var __accu0__ = n;
/* 001132 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001132 */ 			}) ())) {
/* 001134 */ 				var next_sep_end = 0;
/* 001136 */ 				while (__t__ (true)) {
/* 001137 */ 					var prev_sep_end = next_sep_end;
/* 001138 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001138 */ 					var next_sep_idx = __left0__ [0];
/* 001138 */ 					var next_sep_end = __left0__ [1];
/* 001140 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001141 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001142 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001151 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001152 */ 								(function () {
/* 001152 */ 									var __accu0__ = pending_nodes;
/* 001153 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001153 */ 								}) ();
/* 001153 */ 							}
/* 001155 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001156 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001156 */ 							}
/* 001157 */ 							var pending_nodes = [];
/* 001157 */ 							continue;
/* 001157 */ 						}
/* 001159 */ 						else {
/* 001162 */ 							var thenodes = [];
/* 001163 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001165 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001165 */ 							}
/* 001167 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001168 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001168 */ 							}
/* 001168 */ 							continue;
/* 001168 */ 						}
/* 001168 */ 					}
/* 001171 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001175 */ 						(function () {
/* 001175 */ 							var __accu0__ = pending_nodes;
/* 001175 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001175 */ 						}) ();
/* 001175 */ 						break;
/* 001175 */ 					}
/* 001177 */ 					else {
/* 001180 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001181 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001182 */ 							(function () {
/* 001182 */ 								var __accu0__ = pending_nodes;
/* 001183 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001183 */ 							}) ();
/* 001183 */ 						}
/* 001183 */ 						break;
/* 001183 */ 					}
/* 001183 */ 				}
/* 001183 */ 				continue;
/* 001183 */ 			}
/* 001192 */ 			(function () {
/* 001192 */ 				var __accu0__ = pending_nodes;
/* 001192 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001192 */ 			}) ();
/* 001192 */ 		}
/* 001194 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001195 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001195 */ 		}
/* 001197 */ 		return split_node_lists;
/* 001197 */ 	});},
/* 001200 */ 	get parse_keyval_content () {return __get__ (this, function (self, comma_sep_chars, eq_sep_chars, repeated_key_aggregate_action, default_value_nodelist, extract_value_group_contents, dict_type) {
/* 001200 */ 		if (typeof comma_sep_chars == 'undefined' || (comma_sep_chars != null && comma_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var comma_sep_chars = ',';
/* 001200 */ 		};
/* 001200 */ 		if (typeof eq_sep_chars == 'undefined' || (eq_sep_chars != null && eq_sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var eq_sep_chars = '=';
/* 001200 */ 		};
/* 001200 */ 		if (typeof repeated_key_aggregate_action == 'undefined' || (repeated_key_aggregate_action != null && repeated_key_aggregate_action.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var repeated_key_aggregate_action = 'concatenate';
/* 001200 */ 		};
/* 001200 */ 		if (typeof default_value_nodelist == 'undefined' || (default_value_nodelist != null && default_value_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var default_value_nodelist = null;
/* 001200 */ 		};
/* 001200 */ 		if (typeof extract_value_group_contents == 'undefined' || (extract_value_group_contents != null && extract_value_group_contents.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var extract_value_group_contents = true;
/* 001200 */ 		};
/* 001200 */ 		if (typeof dict_type == 'undefined' || (dict_type != null && dict_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 001200 */ 			var dict_type = dict;
/* 001200 */ 		};
/* 001200 */ 		if (arguments.length) {
/* 001200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001200 */ 					switch (__attrib0__) {
/* 001200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'comma_sep_chars': var comma_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'eq_sep_chars': var eq_sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'repeated_key_aggregate_action': var repeated_key_aggregate_action = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'default_value_nodelist': var default_value_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'extract_value_group_contents': var extract_value_group_contents = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'dict_type': var dict_type = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 					}
/* 001200 */ 				}
/* 001200 */ 			}
/* 001200 */ 		}
/* 001200 */ 		else {
/* 001200 */ 		}
/* 001243 */ 		var result_keyvals = __call__ (dict_type, null);
/* 001245 */ 		var lw = self.latex_walker;
/* 001246 */ 		if (__t__ (lw !== null)) {
/* 001247 */ 			var make_nodelist = lw.make_nodelist;
/* 001247 */ 		}
/* 001248 */ 		else {
/* 001249 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001249 */ 				var kwargs = dict ();
/* 001249 */ 				if (arguments.length) {
/* 001249 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001249 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001249 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001249 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001249 */ 							switch (__attrib0__) {
/* 001249 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001249 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001249 */ 							}
/* 001249 */ 						}
/* 001249 */ 						delete kwargs.__kwargtrans__;
/* 001249 */ 					}
/* 001249 */ 				}
/* 001249 */ 				else {
/* 001249 */ 				}
/* 001249 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001249 */ 			});
/* 001249 */ 		}
/* 001251 */ 		var comma_sep_parts = (function () {
/* 001251 */ 			var __accu0__ = self;
/* 001251 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, comma_sep_chars);
/* 001251 */ 		}) ();
/* 001252 */ 		var __iterable0__ = comma_sep_parts;
/* 001252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001252 */ 			var part = __getitem__ (__iterable0__, __index0__);
/* 001253 */ 			var eq_sep_parts = (function () {
/* 001253 */ 				var __accu0__ = part;
/* 001253 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, eq_sep_chars, __kwargtrans__ ({max_split: 1}));
/* 001253 */ 			}) ();
/* 001254 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 0))) {
/* 001254 */ 				continue;
/* 001254 */ 			}
/* 001256 */ 			var key_nl = __getitem__ (eq_sep_parts, 0);
/* 001257 */ 			var value_nl = null;
/* 001258 */ 			if (__t__ (__gt__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001259 */ 				var __except0__ = __call__ (RuntimeError, null, '[internal error?] unexpected split length past max_split?');
/* 001259 */ 				__except0__.__cause__ = null;
/* 001259 */ 				throw __except0__;
/* 001259 */ 			}
/* 001260 */ 			if (__t__ (__eq__ (__call__ (len, null, eq_sep_parts), 2))) {
/* 001261 */ 				var value_nl = __getitem__ (eq_sep_parts, 1);
/* 001263 */ 				if (__t__ (__t__ (extract_value_group_contents) && __t__ (value_nl !== null) && __t__ (__eq__ (__call__ (len, null, value_nl), 1)) && (function () {
/* 001263 */ 					var __accu0__ = __getitem__ (value_nl.nodelist, 0);
/* 001263 */ 					return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001263 */ 				}) ())) {
/* 001264 */ 					var value_nl = __getitem__ (value_nl.nodelist, 0).nodelist;
/* 001264 */ 				}
/* 001264 */ 			}
/* 001266 */ 			if (__t__ (value_nl === null)) {
/* 001267 */ 				var value_nl = default_value_nodelist;
/* 001267 */ 			}
/* 001269 */ 			if (__t__ (!__t__ ((__call__ (isinstance, null, value_nl, LatexNodeList))))) {
/* 001270 */ 				var value_nl = __call__ (make_nodelist, null, [value_nl], __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 001270 */ 			}
/* 001275 */ 			var key_s = (function () {
/* 001275 */ 				var __accu0__ = key_nl;
/* 001275 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 001275 */ 			}) ();
/* 001276 */ 			if (__t__ (__in__ (key_s, result_keyvals))) {
/* 001277 */ 				if (__t__ (__eq__ (repeated_key_aggregate_action, 'concatenate'))) {
/* 001280 */ 					var value_nl = __call__ (make_nodelist, null, __add__ (__getitem__ (result_keyvals, key_s).nodelist, (__t__ (__call__ (isinstance, null, value_nl, LatexNodeList)) ? value_nl.nodelist : [value_nl])), __kwargtrans__ ({parsing_state: self.parsing_state, pos: __getitem__ (result_keyvals, key_s).pos}));
/* 001280 */ 				}
/* 001286 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'error'))) {
/* 001287 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 001287 */ 						var __accu0__ = 'Repeated Key: ‘{}’';
/* 001287 */ 						return __call__ (__accu0__.format, __accu0__, key_s);
/* 001287 */ 					}) ());
/* 001287 */ 					__except0__.__cause__ = null;
/* 001287 */ 					throw __except0__;
/* 001287 */ 				}
/* 001288 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'first'))) {
/* 001289 */ 					var value_nl = __getitem__ (result_keyvals, key_s).nodelist;
/* 001289 */ 				}
/* 001290 */ 				else if (__t__ (__eq__ (repeated_key_aggregate_action, 'last'))) {
/* 001291 */ 					// pass;
/* 001291 */ 				}
/* 001292 */ 				else {
/* 001293 */ 					var value_nl = __call__ (repeated_key_aggregate_action, null, key_s, __getitem__ (result_keyvals, key_s).nodelist, value_nl, __kwargtrans__ ({result_keyvals: result_keyvals}));
/* 001293 */ 				}
/* 001293 */ 			}
/* 001300 */ 			__setitem__ (result_keyvals, key_s, value_nl);
/* 001300 */ 		}
/* 001302 */ 		return result_keyvals;
/* 001302 */ 	});},
/* 001305 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001305 */ 		if (arguments.length) {
/* 001305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001305 */ 					switch (__attrib0__) {
/* 001305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001305 */ 					}
/* 001305 */ 				}
/* 001305 */ 			}
/* 001305 */ 		}
/* 001305 */ 		else {
/* 001305 */ 		}
/* 001320 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001320 */ 	});},
/* 001324 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001324 */ 		if (arguments.length) {
/* 001324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001324 */ 					switch (__attrib0__) {
/* 001324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001324 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001324 */ 					}
/* 001324 */ 				}
/* 001324 */ 			}
/* 001324 */ 		}
/* 001324 */ 		else {
/* 001324 */ 		}
/* 001325 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001326 */ 			return __eq__ (self.nodelist, other);
/* 001326 */ 		}
/* 001327 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001327 */ 	});},
/* 001336 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001336 */ 		if (arguments.length) {
/* 001336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001336 */ 					switch (__attrib0__) {
/* 001336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001336 */ 					}
/* 001336 */ 				}
/* 001336 */ 			}
/* 001336 */ 		}
/* 001336 */ 		else {
/* 001336 */ 		}
/* 001337 */ 		return self.nodelist;
/* 001337 */ 	});},
/* 001339 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001339 */ 		if (arguments.length) {
/* 001339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001339 */ 					switch (__attrib0__) {
/* 001339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001339 */ 					}
/* 001339 */ 				}
/* 001339 */ 			}
/* 001339 */ 		}
/* 001339 */ 		else {
/* 001339 */ 		}
/* 001340 */ 		return (function () {
/* 001340 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001340 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001340 */ 		}) ();
/* 001340 */ 	});}
/* 001340 */ });
/* 001340 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001348 */ export var _get_content_as_chars = function (nodelist) {
/* 001348 */ 	if (arguments.length) {
/* 001348 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001348 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001348 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001348 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001348 */ 				switch (__attrib0__) {
/* 001348 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001348 */ 				}
/* 001348 */ 			}
/* 001348 */ 		}
/* 001348 */ 	}
/* 001348 */ 	else {
/* 001348 */ 	}
/* 001354 */ 	if (__t__ (nodelist === null)) {
/* 001355 */ 		return '';
/* 001355 */ 	}
/* 001357 */ 	var charslist = [];
/* 001359 */ 	var __iterable0__ = nodelist;
/* 001359 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001359 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001361 */ 		if (__t__ (n === null)) {
/* 001361 */ 			continue;
/* 001361 */ 		}
/* 001364 */ 		if (__t__ ((function () {
/* 001364 */ 			var __accu0__ = n;
/* 001364 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001364 */ 		}) ())) {
/* 001364 */ 			continue;
/* 001364 */ 		}
/* 001368 */ 		if (__t__ ((function () {
/* 001368 */ 			var __accu0__ = n;
/* 001368 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001368 */ 		}) ())) {
/* 001370 */ 			(function () {
/* 001370 */ 				var __accu0__ = charslist;
/* 001370 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001370 */ 			}) ();
/* 001370 */ 			continue;
/* 001370 */ 		}
/* 001373 */ 		if (__t__ ((function () {
/* 001373 */ 			var __accu0__ = n;
/* 001373 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001373 */ 		}) ())) {
/* 001374 */ 			(function () {
/* 001374 */ 				var __accu0__ = charslist;
/* 001374 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001374 */ 			}) ();
/* 001374 */ 			continue;
/* 001374 */ 		}
/* 001378 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001378 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001378 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001378 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001378 */ 		__except0__.__cause__ = null;
/* 001378 */ 		throw __except0__;
/* 001378 */ 	}
/* 001382 */ 	return (function () {
/* 001382 */ 		var __accu0__ = '';
/* 001382 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001382 */ 	}) ();
/* 001382 */ };
/* 001389 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001389 */ 	if (arguments.length) {
/* 001389 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001389 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001389 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001389 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001389 */ 				switch (__attrib0__) {
/* 001389 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001389 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001389 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001389 */ 				}
/* 001389 */ 			}
/* 001389 */ 		}
/* 001389 */ 	}
/* 001389 */ 	else {
/* 001389 */ 	}
/* 001391 */ 	if (__t__ (pos === null)) {
/* 001392 */ 		var __break0__ = false;
/* 001392 */ 		var __iterable0__ = nodelist;
/* 001392 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001392 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001393 */ 			if (__t__ (n !== null)) {
/* 001394 */ 				var pos = n.pos;
/* 001394 */ 				__break0__ = true;
/* 001394 */ 				break;
/* 001394 */ 			}
/* 001394 */ 		}
/* 001396 */ 		if (!__break0__) {
/* 001397 */ 			var pos = null;
/* 001397 */ 		}
/* 001397 */ 	}
/* 001399 */ 	if (__t__ (pos_end === null)) {
/* 001400 */ 		var __break0__ = false;
/* 001400 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001400 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001400 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001401 */ 			if (__t__ (n !== null)) {
/* 001402 */ 				var pos_end = n.pos_end;
/* 001402 */ 				__break0__ = true;
/* 001402 */ 				break;
/* 001402 */ 			}
/* 001402 */ 		}
/* 001404 */ 		if (!__break0__) {
/* 001405 */ 			var pos_end = null;
/* 001405 */ 		}
/* 001405 */ 	}
/* 001407 */ 	return tuple ([pos, pos_end]);
/* 001407 */ };
/* 001415 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001415 */ 	__module__: __name__,
/* 001457 */ 	get visit () {return __get__ (this, function (self, node) {
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
/* 001464 */ 		return null;
/* 001464 */ 	});},
/* 001466 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001466 */ 		var kwargs = dict ();
/* 001466 */ 		if (arguments.length) {
/* 001466 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001466 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001466 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001466 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001466 */ 					switch (__attrib0__) {
/* 001466 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001466 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001466 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001466 */ 					}
/* 001466 */ 				}
/* 001466 */ 				delete kwargs.__kwargtrans__;
/* 001466 */ 			}
/* 001466 */ 		}
/* 001466 */ 		else {
/* 001466 */ 		}
/* 001470 */ 		return (function () {
/* 001470 */ 			var __accu0__ = self;
/* 001470 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001470 */ 		}) ();
/* 001470 */ 	});},
/* 001472 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001472 */ 		var kwargs = dict ();
/* 001472 */ 		if (arguments.length) {
/* 001472 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001472 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001472 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001472 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001472 */ 					switch (__attrib0__) {
/* 001472 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001472 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001472 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001472 */ 					}
/* 001472 */ 				}
/* 001472 */ 				delete kwargs.__kwargtrans__;
/* 001472 */ 			}
/* 001472 */ 		}
/* 001472 */ 		else {
/* 001472 */ 		}
/* 001479 */ 		return (function () {
/* 001479 */ 			var __accu0__ = self;
/* 001479 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001479 */ 		}) ();
/* 001479 */ 	});},
/* 001481 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001481 */ 		var kwargs = dict ();
/* 001481 */ 		if (arguments.length) {
/* 001481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001481 */ 					switch (__attrib0__) {
/* 001481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001481 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001481 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001481 */ 					}
/* 001481 */ 				}
/* 001481 */ 				delete kwargs.__kwargtrans__;
/* 001481 */ 			}
/* 001481 */ 		}
/* 001481 */ 		else {
/* 001481 */ 		}
/* 001485 */ 		return (function () {
/* 001485 */ 			var __accu0__ = self;
/* 001485 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001485 */ 		}) ();
/* 001485 */ 	});},
/* 001487 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001487 */ 		var kwargs = dict ();
/* 001487 */ 		if (arguments.length) {
/* 001487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001487 */ 					switch (__attrib0__) {
/* 001487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001487 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001487 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001487 */ 					}
/* 001487 */ 				}
/* 001487 */ 				delete kwargs.__kwargtrans__;
/* 001487 */ 			}
/* 001487 */ 		}
/* 001487 */ 		else {
/* 001487 */ 		}
/* 001493 */ 		return (function () {
/* 001493 */ 			var __accu0__ = self;
/* 001493 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001493 */ 		}) ();
/* 001493 */ 	});},
/* 001495 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001495 */ 		var kwargs = dict ();
/* 001495 */ 		if (arguments.length) {
/* 001495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001495 */ 					switch (__attrib0__) {
/* 001495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001495 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001495 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001495 */ 					}
/* 001495 */ 				}
/* 001495 */ 				delete kwargs.__kwargtrans__;
/* 001495 */ 			}
/* 001495 */ 		}
/* 001495 */ 		else {
/* 001495 */ 		}
/* 001505 */ 		return (function () {
/* 001505 */ 			var __accu0__ = self;
/* 001505 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001505 */ 		}) ();
/* 001505 */ 	});},
/* 001507 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001507 */ 		var kwargs = dict ();
/* 001507 */ 		if (arguments.length) {
/* 001507 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001507 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001507 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001507 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001507 */ 					switch (__attrib0__) {
/* 001507 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001507 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001507 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001507 */ 					}
/* 001507 */ 				}
/* 001507 */ 				delete kwargs.__kwargtrans__;
/* 001507 */ 			}
/* 001507 */ 		}
/* 001507 */ 		else {
/* 001507 */ 		}
/* 001513 */ 		return (function () {
/* 001513 */ 			var __accu0__ = self;
/* 001513 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001513 */ 		}) ();
/* 001513 */ 	});},
/* 001515 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
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
/* 001522 */ 		return (function () {
/* 001522 */ 			var __accu0__ = self;
/* 001522 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001522 */ 		}) ();
/* 001522 */ 	});},
/* 001524 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001524 */ 		var kwargs = dict ();
/* 001524 */ 		if (arguments.length) {
/* 001524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001524 */ 					switch (__attrib0__) {
/* 001524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001524 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001524 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001524 */ 					}
/* 001524 */ 				}
/* 001524 */ 				delete kwargs.__kwargtrans__;
/* 001524 */ 			}
/* 001524 */ 		}
/* 001524 */ 		else {
/* 001524 */ 		}
/* 001542 */ 		return (function () {
/* 001542 */ 			var __accu0__ = self;
/* 001542 */ 			return __call__ (__accu0__.visit, __accu0__, nodes, __kwargtrans__ (kwargs));
/* 001542 */ 		}) ();
/* 001542 */ 	});},
/* 001544 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001544 */ 		var kwargs = dict ();
/* 001544 */ 		if (arguments.length) {
/* 001544 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001544 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001544 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001544 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001544 */ 					switch (__attrib0__) {
/* 001544 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001544 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001544 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001544 */ 					}
/* 001544 */ 				}
/* 001544 */ 				delete kwargs.__kwargtrans__;
/* 001544 */ 			}
/* 001544 */ 		}
/* 001544 */ 		else {
/* 001544 */ 		}
/* 001551 */ 		return (function () {
/* 001551 */ 			var __accu0__ = self;
/* 001551 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args, __kwargtrans__ (kwargs));
/* 001551 */ 		}) ();
/* 001551 */ 	});},
/* 001554 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001554 */ 		var kwargs = dict ();
/* 001554 */ 		if (arguments.length) {
/* 001554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001554 */ 					switch (__attrib0__) {
/* 001554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001554 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001554 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001554 */ 					}
/* 001554 */ 				}
/* 001554 */ 				delete kwargs.__kwargtrans__;
/* 001554 */ 			}
/* 001554 */ 		}
/* 001554 */ 		else {
/* 001554 */ 		}
/* 001558 */ 		return (function () {
/* 001558 */ 			var __accu0__ = self;
/* 001558 */ 			return __call__ (__accu0__.visit, __accu0__, node, __kwargtrans__ (kwargs));
/* 001558 */ 		}) ();
/* 001558 */ 	});},
/* 001563 */ 	get start () {return __get__ (this, function (self, node) {
/* 001563 */ 		if (arguments.length) {
/* 001563 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001563 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001563 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001563 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001563 */ 					switch (__attrib0__) {
/* 001563 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001563 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001563 */ 					}
/* 001563 */ 				}
/* 001563 */ 			}
/* 001563 */ 		}
/* 001563 */ 		else {
/* 001563 */ 		}
/* 001575 */ 		return (function () {
/* 001575 */ 			var __accu0__ = node;
/* 001575 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001575 */ 		}) ();
/* 001575 */ 	});}
/* 001575 */ });
/* 001588 */ export var latex_node_types = tuple ([LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode]);
/* 001599 */ export var __all__ = __add__ ((function () {
/* 001599 */ 	var __accu0__ = [];
/* 001599 */ 	var __iterable0__ = latex_node_types;
/* 001599 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001599 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001599 */ 		(function () {
/* 001599 */ 			var __accu1__ = __accu0__;
/* 001599 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001599 */ 		}) ();
/* 001599 */ 	}
/* 001599 */ 	return __accu0__;
/* 001599 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map