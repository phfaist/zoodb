/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:41
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000038 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000037 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {LatexWalkerParseError, ParsedArguments};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.nodes';
/* 000042 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000042 */ 	if (arguments.length) {
/* 000042 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 				switch (__attrib0__) {
/* 000042 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 	}
/* 000042 */ 	else {
/* 000042 */ 	}
/* 000042 */ 	return x;
/* 000042 */ });
/* 000053 */ export var _display_abbrev_str = function (s, maxlen) {
/* 000053 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 		var maxlen = 40;
/* 000053 */ 	};
/* 000053 */ 	if (arguments.length) {
/* 000053 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 				switch (__attrib0__) {
/* 000053 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 	}
/* 000053 */ 	else {
/* 000053 */ 	}
/* 000054 */ 	if (__t__ (__t__ (!__t__ ((maxlen))) || __lt__ (maxlen, 2))) {
/* 000055 */ 		var maxlen = 2;
/* 000055 */ 	}
/* 000056 */ 	if (__t__ (__lt__ (__call__ (len, null, s), maxlen))) {
/* 000057 */ 		return s;
/* 000057 */ 	}
/* 000058 */ 	return __add__ (__getslice__ (s, 0, __sub__ (maxlen, 2), 1), '…');
/* 000058 */ };
/* 000061 */ export var _display_str_delimiters = function (delimiters) {
/* 000061 */ 	if (arguments.length) {
/* 000061 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 				switch (__attrib0__) {
/* 000061 */ 					case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 	}
/* 000061 */ 	else {
/* 000061 */ 	}
/* 000063 */ 	var open_delim = '<??>';
/* 000064 */ 	var close_delim = '<??>';
/* 000066 */ 	try {
/* 000067 */ 		var __left0__ = delimiters;
/* 000067 */ 		var open_delim = __left0__ [0];
/* 000067 */ 		var close_delim = __left0__ [1];
/* 000067 */ 	}
/* 000067 */ 	catch (__except0__) {
/* 000069 */ 		// pass;
/* 000069 */ 	}
/* 000071 */ 	if (__t__ (open_delim === null)) {
/* 000072 */ 		var open_delim = '';
/* 000072 */ 	}
/* 000073 */ 	if (__t__ (close_delim === null)) {
/* 000074 */ 		var close_delim = '';
/* 000074 */ 	}
/* 000076 */ 	return tuple ([open_delim, close_delim]);
/* 000076 */ };
/* 000088 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000088 */ 	__module__: __name__,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000156 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var _redundant_fields = null;
/* 000156 */ 		};
/* 000156 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var parsing_state = null;
/* 000156 */ 		};
/* 000156 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var pos = null;
/* 000156 */ 		};
/* 000156 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var pos_end = null;
/* 000156 */ 		};
/* 000156 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000156 */ 			var latex_walker = null;
/* 000156 */ 		};
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000160 */ 		var len_ = (function () {
/* 000160 */ 			var __accu0__ = kwargs;
/* 000160 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000160 */ 		}) ();
/* 000166 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000168 */ 		self.parsing_state = parsing_state;
/* 000169 */ 		self.latex_walker = latex_walker;
/* 000170 */ 		self.pos = pos;
/* 000171 */ 		self.pos_end = pos_end;
/* 000173 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000174 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000174 */ 		}
/* 000177 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000178 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000180 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000180 */ 		}
/* 000181 */ 		else {
/* 000182 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000182 */ 		}
/* 000182 */ 	});},
/* 000184 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000191 */ 		return LatexNode;
/* 000191 */ 	});},
/* 000193 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000199 */ 		return __call__ (isinstance, null, self, t);
/* 000199 */ 	});},
/* 000202 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000203 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000204 */ 			return null;
/* 000204 */ 		}
/* 000205 */ 		return __sub__ (self.pos_end, self.pos);
/* 000205 */ 	});},
/* 000207 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000213 */ 		if (__t__ (self.latex_walker === null)) {
/* 000214 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000214 */ 			__except0__.__cause__ = null;
/* 000214 */ 			throw __except0__;
/* 000214 */ 		}
/* 000216 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000216 */ 	});},
/* 000218 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000222 */ 		return __t__ (other !== null) && __t__ (__call__ (isinstance, null, other, LatexNode)) && __t__ ((function () {
/* 000222 */ 			var __accu0__ = self;
/* 000222 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000222 */ 		}) () === (function () {
/* 000222 */ 			var __accu0__ = other;
/* 000222 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000230 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000230 */ 			var __accu0__ = [];
/* 000231 */ 			var __iterable0__ = self._fields;
/* 000231 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000234 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000234 */ 				(function () {
/* 000234 */ 					var __accu1__ = __accu0__;
/* 000233 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000233 */ 				}) ();
/* 000233 */ 			}
/* 000233 */ 			return py_iter (__accu0__);
/* 000233 */ 		}) ());
/* 000233 */ 	});},
/* 000240 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000240 */ 		return NotImplemented;
/* 000240 */ 	});},
/* 000242 */ 	__hash__: null,
/* 000244 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000245 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000245 */ 			var __accu0__ = self;
/* 000245 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000245 */ 		}) ());
/* 000245 */ 	});},
/* 000246 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		return (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000247 */ 		}) ();
/* 000247 */ 	});},
/* 000248 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000250 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000251 */ 		}) ().__name__, '('), (function () {
/* 000251 */ 			var __accu0__ = ', ';
/* 000251 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000251 */ 				var __accu1__ = [];
/* 000251 */ 				var __iterable0__ = self._fields;
/* 000251 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000251 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000251 */ 					(function () {
/* 000251 */ 						var __accu2__ = __accu1__;
/* 000251 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000251 */ 							var __accu3__ = '{}={!r}';
/* 000251 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000251 */ 						}) ());
/* 000251 */ 					}) ();
/* 000251 */ 				}
/* 000251 */ 				return __accu1__;
/* 000251 */ 			}) ());
/* 000251 */ 		}) ()), ')');
/* 000251 */ 	});},
/* 000255 */ 	get display_str () {return __get__ (this, function (self) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000256 */ 		return __add__ ('<UNKNOWN NODE TYPE>: ', __call__ (repr, null, self));
/* 000256 */ 	});},
/* 000258 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		(function () {
/* 000259 */ 			var __accu0__ = visitor;
/* 000259 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000259 */ 		}) ();
/* 000259 */ 	});},
/* 000261 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000263 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000267 */ 		var __iterable0__ = self._fields;
/* 000267 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000267 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000268 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000270 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000270 */ 			}
/* 000271 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000273 */ 				// pass;
/* 000273 */ 			}
/* 000274 */ 			else {
/* 000275 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000275 */ 			}
/* 000275 */ 		}
/* 000276 */ 		(function () {
/* 000276 */ 			var __accu0__ = d;
/* 000276 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000276 */ 				var __accu1__ = latexwalker;
/* 000276 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000276 */ 			}) ());
/* 000276 */ 		}) ();
/* 000277 */ 		return d;
/* 000277 */ 	});},
/* 000279 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000280 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000281 */ 			return (function () {
/* 000281 */ 				var __accu0__ = self.latex_walker;
/* 000281 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000281 */ 			}) ();
/* 000281 */ 		}
/* 000282 */ 		return (function () {
/* 000282 */ 			var __accu0__ = '[@ pos {}]';
/* 000282 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000282 */ 		}) ();
/* 000282 */ 	});}
/* 000282 */ });
/* 000282 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000285 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000285 */ 	__module__: __name__,
/* 000294 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000294 */ 		var kwargs = dict ();
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				delete kwargs.__kwargtrans__;
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000295 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000299 */ 		self.chars = chars;
/* 000299 */ 	});},
/* 000301 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000302 */ 		return LatexCharsNode;
/* 000302 */ 	});},
/* 000304 */ 	get display_str () {return __get__ (this, function (self) {
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
/* 000305 */ 		return __add__ (__add__ ('chars ‘', __call__ (_display_abbrev_str, null, self.chars)), '’');
/* 000305 */ 	});},
/* 000307 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000307 */ 		if (arguments.length) {
/* 000307 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 					switch (__attrib0__) {
/* 000307 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 		}
/* 000307 */ 		else {
/* 000307 */ 		}
/* 000308 */ 		(function () {
/* 000308 */ 			var __accu0__ = visitor;
/* 000308 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000308 */ 		}) ();
/* 000308 */ 	});}
/* 000308 */ });
/* 000312 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000312 */ 	__module__: __name__,
/* 000337 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000337 */ 		var kwargs = dict ();
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 				delete kwargs.__kwargtrans__;
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000338 */ 		var delimiters = (function () {
/* 000338 */ 			var __accu0__ = kwargs;
/* 000338 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000338 */ 		}) ();
/* 000339 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000343 */ 		self.nodelist = nodelist;
/* 000344 */ 		self.delimiters = delimiters;
/* 000344 */ 	});},
/* 000346 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		return LatexGroupNode;
/* 000347 */ 	});},
/* 000349 */ 	get display_str () {return __get__ (this, function (self) {
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
/* 000350 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000350 */ 		var open_delim = __left0__ [0];
/* 000350 */ 		var close_delim = __left0__ [1];
/* 000351 */ 		return __add__ (__add__ (__add__ (__add__ ('group ‘', open_delim), '…'), close_delim), '’');
/* 000351 */ 	});},
/* 000353 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		if (__t__ (self.nodelist !== null)) {
/* 000355 */ 			var __iterable0__ = self.nodelist;
/* 000355 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000355 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000356 */ 				if (__t__ (node !== null)) {
/* 000357 */ 					(function () {
/* 000357 */ 						var __accu0__ = node;
/* 000357 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000357 */ 					}) ();
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000358 */ 		(function () {
/* 000358 */ 			var __accu0__ = visitor;
/* 000358 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
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
/* 000393 */ 		(function () {
/* 000393 */ 			var __accu0__ = visitor;
/* 000393 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
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
/* 000479 */ 		return __add__ (__add__ ('macro ‘\\', self.macroname), '’');
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
/* 000482 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000483 */ 			(function () {
/* 000483 */ 				var __accu0__ = self.nodeargd;
/* 000483 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000483 */ 			}) ();
/* 000483 */ 		}
/* 000484 */ 		(function () {
/* 000484 */ 			var __accu0__ = visitor;
/* 000484 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000484 */ 		}) ();
/* 000484 */ 	});}
/* 000484 */ });
/* 000507 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000507 */ 	__module__: __name__,
/* 000573 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000573 */ 		var kwargs = dict ();
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 				delete kwargs.__kwargtrans__;
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000574 */ 		var nodeargd = (function () {
/* 000574 */ 			var __accu0__ = kwargs;
/* 000574 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000574 */ 		}) ();
/* 000575 */ 		var spec = (function () {
/* 000575 */ 			var __accu0__ = kwargs;
/* 000575 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000575 */ 		}) ();
/* 000580 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000585 */ 		self.environmentname = environmentname;
/* 000586 */ 		self.spec = spec;
/* 000587 */ 		self.nodelist = nodelist;
/* 000588 */ 		self.nodeargd = nodeargd;
/* 000588 */ 	});},
/* 000604 */ 	get nodeType () {return __get__ (this, function (self) {
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
/* 000605 */ 		return LatexEnvironmentNode;
/* 000605 */ 	});},
/* 000607 */ 	get display_str () {return __get__ (this, function (self) {
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000608 */ 		return __add__ (__add__ ('environment ‘{', self.environmentname), '}’');
/* 000608 */ 	});},
/* 000610 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000610 */ 		if (arguments.length) {
/* 000610 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000610 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000610 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000610 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000610 */ 					switch (__attrib0__) {
/* 000610 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000610 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000610 */ 					}
/* 000610 */ 				}
/* 000610 */ 			}
/* 000610 */ 		}
/* 000610 */ 		else {
/* 000610 */ 		}
/* 000611 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000612 */ 			(function () {
/* 000612 */ 				var __accu0__ = self.nodeargd;
/* 000612 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000612 */ 			}) ();
/* 000612 */ 		}
/* 000613 */ 		if (__t__ (self.nodelist !== null)) {
/* 000614 */ 			var __iterable0__ = self.nodelist;
/* 000614 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000614 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000615 */ 				if (__t__ (node !== null)) {
/* 000616 */ 					(function () {
/* 000616 */ 						var __accu0__ = node;
/* 000616 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000616 */ 					}) ();
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000617 */ 		(function () {
/* 000617 */ 			var __accu0__ = visitor;
/* 000617 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000617 */ 		}) ();
/* 000617 */ 	});}
/* 000617 */ });
/* 000621 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000621 */ 	__module__: __name__,
/* 000659 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000659 */ 		var kwargs = dict ();
/* 000659 */ 		if (arguments.length) {
/* 000659 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000659 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000659 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000659 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000659 */ 					switch (__attrib0__) {
/* 000659 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000659 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000659 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000659 */ 					}
/* 000659 */ 				}
/* 000659 */ 				delete kwargs.__kwargtrans__;
/* 000659 */ 			}
/* 000659 */ 		}
/* 000659 */ 		else {
/* 000659 */ 		}
/* 000661 */ 		var spec = (function () {
/* 000661 */ 			var __accu0__ = kwargs;
/* 000661 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000661 */ 		}) ();
/* 000662 */ 		var nodeargd = (function () {
/* 000662 */ 			var __accu0__ = kwargs;
/* 000662 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000662 */ 		}) ();
/* 000664 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000668 */ 		self.specials_chars = specials_chars;
/* 000669 */ 		self.spec = spec;
/* 000670 */ 		self.nodeargd = nodeargd;
/* 000670 */ 	});},
/* 000672 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000672 */ 		if (arguments.length) {
/* 000672 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000672 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000672 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000672 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000672 */ 					switch (__attrib0__) {
/* 000672 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000672 */ 		}
/* 000672 */ 		else {
/* 000672 */ 		}
/* 000673 */ 		return LatexSpecialsNode;
/* 000673 */ 	});},
/* 000675 */ 	get display_str () {return __get__ (this, function (self) {
/* 000675 */ 		if (arguments.length) {
/* 000675 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000675 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000675 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000675 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000675 */ 					switch (__attrib0__) {
/* 000675 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 					}
/* 000675 */ 				}
/* 000675 */ 			}
/* 000675 */ 		}
/* 000675 */ 		else {
/* 000675 */ 		}
/* 000676 */ 		return __add__ (__add__ ('specials ‘', self.specials_chars), '’');
/* 000676 */ 	});},
/* 000678 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000678 */ 		if (arguments.length) {
/* 000678 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000678 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000678 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000678 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000678 */ 					switch (__attrib0__) {
/* 000678 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 					}
/* 000678 */ 				}
/* 000678 */ 			}
/* 000678 */ 		}
/* 000678 */ 		else {
/* 000678 */ 		}
/* 000679 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000680 */ 			(function () {
/* 000680 */ 				var __accu0__ = self.nodeargd;
/* 000680 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000680 */ 			}) ();
/* 000680 */ 		}
/* 000681 */ 		(function () {
/* 000681 */ 			var __accu0__ = visitor;
/* 000681 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000681 */ 		}) ();
/* 000681 */ 	});}
/* 000681 */ });
/* 000684 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000684 */ 	__module__: __name__,
/* 000710 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000710 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000710 */ 			var nodelist = [];
/* 000710 */ 		};
/* 000710 */ 		var kwargs = dict ();
/* 000710 */ 		if (arguments.length) {
/* 000710 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000710 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000710 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000710 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000710 */ 					switch (__attrib0__) {
/* 000710 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000710 */ 					}
/* 000710 */ 				}
/* 000710 */ 				delete kwargs.__kwargtrans__;
/* 000710 */ 			}
/* 000710 */ 		}
/* 000710 */ 		else {
/* 000710 */ 		}
/* 000711 */ 		var delimiters = (function () {
/* 000711 */ 			var __accu0__ = kwargs;
/* 000711 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000711 */ 		}) ();
/* 000713 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000718 */ 		self.displaytype = displaytype;
/* 000719 */ 		self.nodelist = nodelist;
/* 000720 */ 		self.delimiters = delimiters;
/* 000720 */ 	});},
/* 000722 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000722 */ 		if (arguments.length) {
/* 000722 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000722 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000722 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000722 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000722 */ 					switch (__attrib0__) {
/* 000722 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 					}
/* 000722 */ 				}
/* 000722 */ 			}
/* 000722 */ 		}
/* 000722 */ 		else {
/* 000722 */ 		}
/* 000723 */ 		return LatexMathNode;
/* 000723 */ 	});},
/* 000725 */ 	get display_str () {return __get__ (this, function (self) {
/* 000725 */ 		if (arguments.length) {
/* 000725 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000725 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000725 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000725 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000725 */ 					switch (__attrib0__) {
/* 000725 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000725 */ 					}
/* 000725 */ 				}
/* 000725 */ 			}
/* 000725 */ 		}
/* 000725 */ 		else {
/* 000725 */ 		}
/* 000726 */ 		var __left0__ = __call__ (_display_str_delimiters, null, self.delimiters);
/* 000726 */ 		var open_delim = __left0__ [0];
/* 000726 */ 		var close_delim = __left0__ [1];
/* 000727 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (self.displaytype, ' math ‘'), open_delim), '…'), close_delim), '’');
/* 000727 */ 	});},
/* 000729 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000729 */ 		if (arguments.length) {
/* 000729 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000729 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000729 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000729 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000729 */ 					switch (__attrib0__) {
/* 000729 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 					}
/* 000729 */ 				}
/* 000729 */ 			}
/* 000729 */ 		}
/* 000729 */ 		else {
/* 000729 */ 		}
/* 000730 */ 		if (__t__ (self.nodelist !== null)) {
/* 000731 */ 			var __iterable0__ = self.nodelist;
/* 000731 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000731 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000732 */ 				if (__t__ (node !== null)) {
/* 000733 */ 					(function () {
/* 000733 */ 						var __accu0__ = node;
/* 000733 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000733 */ 					}) ();
/* 000733 */ 				}
/* 000733 */ 			}
/* 000733 */ 		}
/* 000734 */ 		(function () {
/* 000734 */ 			var __accu0__ = visitor;
/* 000734 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000734 */ 		}) ();
/* 000734 */ 	});}
/* 000734 */ });
/* 000742 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000742 */ 	__module__: __name__,
/* 000784 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000784 */ 		var kwargs = dict ();
/* 000784 */ 		if (arguments.length) {
/* 000784 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000784 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000784 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000784 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000784 */ 					switch (__attrib0__) {
/* 000784 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000784 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000784 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000784 */ 					}
/* 000784 */ 				}
/* 000784 */ 				delete kwargs.__kwargtrans__;
/* 000784 */ 			}
/* 000784 */ 		}
/* 000784 */ 		else {
/* 000784 */ 		}
/* 000786 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000787 */ 			var obj = nodelist;
/* 000788 */ 			self.nodelist = obj.nodelist;
/* 000789 */ 			self.parsing_state = obj.parsing_state;
/* 000790 */ 			self.latex_walker = obj.latex_walker;
/* 000791 */ 			self.pos = obj.pos;
/* 000792 */ 			self.pos_end = obj.pos_end;
/* 000793 */ 			return ;
/* 000793 */ 		}
/* 000795 */ 		self.nodelist = nodelist;
/* 000797 */ 		if (__t__ (self.nodelist === null)) {
/* 000798 */ 			(function () {
/* 000798 */ 				var __accu0__ = logger;
/* 000798 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000798 */ 			}) ();
/* 000798 */ 		}
/* 000801 */ 		self.parsing_state = (function () {
/* 000801 */ 			var __accu0__ = kwargs;
/* 000801 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000801 */ 		}) ();
/* 000802 */ 		self.latex_walker = (function () {
/* 000802 */ 			var __accu0__ = kwargs;
/* 000802 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000802 */ 		}) ();
/* 000803 */ 		self.pos = (function () {
/* 000803 */ 			var __accu0__ = kwargs;
/* 000803 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000803 */ 		}) ();
/* 000804 */ 		self.pos_end = (function () {
/* 000804 */ 			var __accu0__ = kwargs;
/* 000804 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000804 */ 		}) ();
/* 000806 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000808 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000808 */ 			__except0__.__cause__ = null;
/* 000808 */ 			throw __except0__;
/* 000808 */ 		}
/* 000811 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000811 */ 		self.pos = __left0__ [0];
/* 000811 */ 		self.pos_end = __left0__ [1];
/* 000811 */ 	});},
/* 000814 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000818 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000818 */ 		if (arguments.length) {
/* 000818 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000818 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000818 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000818 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000818 */ 					switch (__attrib0__) {
/* 000818 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 			}
/* 000818 */ 		}
/* 000818 */ 		else {
/* 000818 */ 		}
/* 000819 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000820 */ 			return null;
/* 000820 */ 		}
/* 000821 */ 		return __sub__ (self.pos_end, self.pos);
/* 000821 */ 	});},
/* 000824 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000825 */ 		if (__t__ (self.nodelist === null)) {
/* 000826 */ 			return __call__ (py_iter, null, []);
/* 000826 */ 		}
/* 000827 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000827 */ 	});},
/* 000827 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000830 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000830 */ 		if (arguments.length) {
/* 000830 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000830 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000830 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000830 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000830 */ 					switch (__attrib0__) {
/* 000830 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 					}
/* 000830 */ 				}
/* 000830 */ 			}
/* 000830 */ 		}
/* 000830 */ 		else {
/* 000830 */ 		}
/* 000841 */ 		try {
/* 000842 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000843 */ 				var __left0__ = index;
/* 000843 */ 				var lower = __left0__ [0];
/* 000843 */ 				var upper = __left0__ [1];
/* 000843 */ 				var step = __left0__ [2];
/* 000844 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000844 */ 			}
/* 000844 */ 		}
/* 000844 */ 		catch (__except0__) {
/* 000846 */ 			// pass;
/* 000846 */ 		}
/* 000849 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000850 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000850 */ 		}
/* 000852 */ 		return __getitem__ (self.nodelist, index);
/* 000852 */ 	});},
/* 000855 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000855 */ 		if (arguments.length) {
/* 000855 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000855 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000855 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000855 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000855 */ 					switch (__attrib0__) {
/* 000855 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 					}
/* 000855 */ 				}
/* 000855 */ 			}
/* 000855 */ 		}
/* 000855 */ 		else {
/* 000855 */ 		}
/* 000856 */ 		return __call__ (len, null, self.nodelist);
/* 000856 */ 	});},
/* 000859 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000859 */ 		if (arguments.length) {
/* 000859 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000859 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000859 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000859 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000859 */ 					switch (__attrib0__) {
/* 000859 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 					}
/* 000859 */ 				}
/* 000859 */ 			}
/* 000859 */ 		}
/* 000859 */ 		else {
/* 000859 */ 		}
/* 000866 */ 		return (function () {
/* 000866 */ 			var __accu0__ = '';
/* 000866 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000866 */ 				var __accu1__ = [];
/* 000866 */ 				var __iterable0__ = self.nodelist;
/* 000866 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000868 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000868 */ 					if (__t__ (n !== null)) {
/* 000869 */ 						(function () {
/* 000869 */ 							var __accu2__ = __accu1__;
/* 000867 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000867 */ 								var __accu3__ = n;
/* 000867 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000867 */ 							}) ());
/* 000867 */ 						}) ();
/* 000867 */ 					}
/* 000867 */ 				}
/* 000867 */ 				return __accu1__;
/* 000867 */ 			}) ());
/* 000867 */ 		}) ();
/* 000867 */ 	});},
/* 000873 */ 	get display_str () {return __get__ (this, function (self) {
/* 000873 */ 		if (arguments.length) {
/* 000873 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000873 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000873 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000873 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000873 */ 					switch (__attrib0__) {
/* 000873 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 					}
/* 000873 */ 				}
/* 000873 */ 			}
/* 000873 */ 		}
/* 000873 */ 		else {
/* 000873 */ 		}
/* 000877 */ 		if (__t__ (self.nodelist === null)) {
/* 000878 */ 			var list_len = 'null list';
/* 000879 */ 			var list_preview = '';
/* 000879 */ 		}
/* 000880 */ 		else {
/* 000881 */ 			var list_len = __call__ (len, null, self.nodelist);
/* 000884 */ 			var list_preview = __add__ (__add__ (': ', (function () {
/* 000884 */ 				var __accu0__ = ', ';
/* 000884 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000884 */ 					var __accu1__ = [];
/* 000884 */ 					var __iterable0__ = __getslice__ (self.nodelist, 0, 2, 1);
/* 000884 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000886 */ 						var n = __getitem__ (__iterable0__, __index0__);
/* 000886 */ 						(function () {
/* 000886 */ 							var __accu2__ = __accu1__;
/* 000885 */ 							return __call__ (__accu2__.append, __accu2__, (__t__ (n !== null) ? (function () {
/* 000885 */ 								var __accu3__ = n;
/* 000885 */ 								return __call__ (__accu3__.display_str, __accu3__);
/* 000885 */ 							}) () : 'None'));
/* 000885 */ 						}) ();
/* 000885 */ 					}
/* 000885 */ 					return __accu1__;
/* 000885 */ 				}) ());
/* 000885 */ 			}) ()), (__t__ (__gt__ (list_len, 2)) ? ' …' : ''));
/* 000885 */ 		}
/* 000890 */ 		return __add__ (__add__ (__add__ ('list of nodes (', __call__ (str, null, list_len)), ')'), list_preview);
/* 000890 */ 	});},
/* 000892 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000892 */ 		if (arguments.length) {
/* 000892 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000892 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000892 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000892 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000892 */ 					switch (__attrib0__) {
/* 000892 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					}
/* 000892 */ 				}
/* 000892 */ 			}
/* 000892 */ 		}
/* 000892 */ 		else {
/* 000892 */ 		}
/* 000893 */ 		if (__t__ (self.nodelist !== null)) {
/* 000894 */ 			var __iterable0__ = self.nodelist;
/* 000894 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000894 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000895 */ 				if (__t__ (node !== null)) {
/* 000896 */ 					(function () {
/* 000896 */ 						var __accu0__ = node;
/* 000896 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000896 */ 					}) ();
/* 000896 */ 				}
/* 000896 */ 			}
/* 000896 */ 		}
/* 000897 */ 		(function () {
/* 000897 */ 			var __accu0__ = visitor;
/* 000897 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000897 */ 		}) ();
/* 000897 */ 	});},
/* 000900 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000900 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000900 */ 			var node_predicate_fn = null;
/* 000900 */ 		};
/* 000900 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000900 */ 			var skip_none = true;
/* 000900 */ 		};
/* 000900 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000900 */ 			var skip_comments = false;
/* 000900 */ 		};
/* 000900 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000900 */ 			var skip_whitespace_char_nodes = false;
/* 000900 */ 		};
/* 000900 */ 		if (arguments.length) {
/* 000900 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000900 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000900 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000900 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000900 */ 					switch (__attrib0__) {
/* 000900 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000900 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000900 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000900 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000900 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000900 */ 					}
/* 000900 */ 				}
/* 000900 */ 			}
/* 000900 */ 		}
/* 000900 */ 		else {
/* 000900 */ 		}
/* 000903 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000904 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000904 */ 		}
/* 000905 */ 		else {
/* 000906 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000906 */ 				var kwargs = dict ();
/* 000906 */ 				if (arguments.length) {
/* 000906 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000906 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000906 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000906 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000906 */ 							switch (__attrib0__) {
/* 000906 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000906 */ 							}
/* 000906 */ 						}
/* 000906 */ 						delete kwargs.__kwargtrans__;
/* 000906 */ 					}
/* 000906 */ 				}
/* 000906 */ 				else {
/* 000906 */ 				}
/* 000906 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000906 */ 			});
/* 000906 */ 		}
/* 000908 */ 		var filter_full_predicate_fn = function (n) {
/* 000908 */ 			if (arguments.length) {
/* 000908 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000908 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000908 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000908 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000908 */ 						switch (__attrib0__) {
/* 000908 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 						}
/* 000908 */ 					}
/* 000908 */ 				}
/* 000908 */ 			}
/* 000908 */ 			else {
/* 000908 */ 			}
/* 000909 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000910 */ 				return false;
/* 000910 */ 			}
/* 000911 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000911 */ 				var __accu0__ = n;
/* 000911 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000911 */ 			}) ())) {
/* 000912 */ 				return false;
/* 000912 */ 			}
/* 000913 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000913 */ 				var __accu0__ = n;
/* 000913 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000914 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000914 */ 				var __accu0__ = n.chars;
/* 000914 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000914 */ 			}) ()), 0))) {
/* 000915 */ 				return false;
/* 000915 */ 			}
/* 000916 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000917 */ 				return __call__ (node_predicate_fn, null, n);
/* 000917 */ 			}
/* 000918 */ 			return true;
/* 000918 */ 		};
/* 000920 */ 		var filtered_nodes = (function () {
/* 000920 */ 			var __accu0__ = [];
/* 000920 */ 			var __iterable0__ = self.nodelist;
/* 000920 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000922 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000923 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000923 */ 					(function () {
/* 000923 */ 						var __accu1__ = __accu0__;
/* 000923 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000923 */ 					}) ();
/* 000923 */ 				}
/* 000923 */ 			}
/* 000923 */ 			return __accu0__;
/* 000923 */ 		}) ();
/* 000932 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000932 */ 	});},
/* 000936 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000936 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000936 */ 			var skip_none = true;
/* 000936 */ 		};
/* 000936 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000936 */ 			var keep_separators = false;
/* 000936 */ 		};
/* 000936 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000936 */ 			var max_split = null;
/* 000936 */ 		};
/* 000936 */ 		if (arguments.length) {
/* 000936 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000936 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000936 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000936 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000936 */ 					switch (__attrib0__) {
/* 000936 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 					}
/* 000936 */ 				}
/* 000936 */ 			}
/* 000936 */ 		}
/* 000936 */ 		else {
/* 000936 */ 		}
/* 000939 */ 		var nodelists_list = [[]];
/* 000941 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000942 */ 			var no_more_splits = true;
/* 000942 */ 		}
/* 000943 */ 		else {
/* 000944 */ 			var no_more_splits = false;
/* 000944 */ 		}
/* 000946 */ 		var __iterable0__ = self.nodelist;
/* 000946 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000946 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000947 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000947 */ 				continue;
/* 000947 */ 			}
/* 000949 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000950 */ 				if (__t__ (keep_separators)) {
/* 000951 */ 					(function () {
/* 000951 */ 						var __accu0__ = nodelists_list;
/* 000951 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000951 */ 					}) ();
/* 000951 */ 				}
/* 000952 */ 				else {
/* 000953 */ 					(function () {
/* 000953 */ 						var __accu0__ = nodelists_list;
/* 000953 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000953 */ 					}) ();
/* 000953 */ 				}
/* 000955 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000956 */ 					var no_more_splits = true;
/* 000956 */ 				}
/* 000956 */ 			}
/* 000957 */ 			else {
/* 000958 */ 				(function () {
/* 000958 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000958 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000958 */ 				}) ();
/* 000958 */ 			}
/* 000958 */ 		}
/* 000960 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000961 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000961 */ 		}
/* 000962 */ 		else {
/* 000963 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000963 */ 				var kwargs = dict ();
/* 000963 */ 				if (arguments.length) {
/* 000963 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000963 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000963 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000963 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000963 */ 							switch (__attrib0__) {
/* 000963 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000963 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000963 */ 							}
/* 000963 */ 						}
/* 000963 */ 						delete kwargs.__kwargtrans__;
/* 000963 */ 					}
/* 000963 */ 				}
/* 000963 */ 				else {
/* 000963 */ 				}
/* 000963 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000963 */ 			});
/* 000963 */ 		}
/* 000965 */ 		return (function () {
/* 000965 */ 			var __accu0__ = [];
/* 000965 */ 			var __iterable0__ = nodelists_list;
/* 000965 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000967 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000967 */ 				(function () {
/* 000967 */ 					var __accu1__ = __accu0__;
/* 000966 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000966 */ 				}) ();
/* 000966 */ 			}
/* 000966 */ 			return __accu0__;
/* 000966 */ 		}) ();
/* 000966 */ 	});},
/* 000970 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000970 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000970 */ 			var max_split = null;
/* 000970 */ 		};
/* 000970 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000970 */ 			var keep_empty = false;
/* 000970 */ 		};
/* 000970 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000970 */ 			var skip_none = true;
/* 000970 */ 		};
/* 000970 */ 		if (arguments.length) {
/* 000970 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000970 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000970 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000970 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000970 */ 					switch (__attrib0__) {
/* 000970 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 					}
/* 000970 */ 				}
/* 000970 */ 			}
/* 000970 */ 		}
/* 000970 */ 		else {
/* 000970 */ 		}
/* 001009 */ 		var split_node_lists = [];
/* 001011 */ 		var get_split_match_start_end = function (m, offset) {
/* 001011 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 001011 */ 				var offset = 0;
/* 001011 */ 			};
/* 001011 */ 			if (arguments.length) {
/* 001011 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001011 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001011 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001011 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001011 */ 						switch (__attrib0__) {
/* 001011 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 001011 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 001011 */ 						}
/* 001011 */ 					}
/* 001011 */ 				}
/* 001011 */ 			}
/* 001011 */ 			else {
/* 001011 */ 			}
/* 001012 */ 			if (__t__ (m === null)) {
/* 001013 */ 				return tuple ([__neg__ (1), null]);
/* 001013 */ 			}
/* 001014 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 001015 */ 				return tuple ([__add__ (offset, (function () {
/* 001015 */ 					var __accu0__ = m;
/* 001015 */ 					return __call__ (__accu0__.start, __accu0__);
/* 001015 */ 				}) ()), __add__ (offset, (function () {
/* 001015 */ 					var __accu0__ = m;
/* 001015 */ 					return __call__ (__accu0__.end, __accu0__);
/* 001015 */ 				}) ())]);
/* 001015 */ 			}
/* 001016 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 001017 */ 				return tuple ([__neg__ (1), null]);
/* 001017 */ 			}
/* 001018 */ 			var __left0__ = m;
/* 001018 */ 			var start = __left0__ [0];
/* 001018 */ 			var end = __left0__ [1];
/* 001019 */ 			if (__t__ (start === null)) {
/* 001020 */ 				var start = __neg__ (1);
/* 001020 */ 			}
/* 001021 */ 			else {
/* 001022 */ 				var start = __add__ (offset, start);
/* 001022 */ 			}
/* 001023 */ 			var end = __add__ (offset, end);
/* 001024 */ 			return tuple ([start, end]);
/* 001024 */ 		};
/* 001026 */ 		var get_next_split = function (chars, pos) {
/* 001026 */ 			if (arguments.length) {
/* 001026 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001026 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001026 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001026 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001026 */ 						switch (__attrib0__) {
/* 001026 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001026 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001026 */ 						}
/* 001026 */ 					}
/* 001026 */ 				}
/* 001026 */ 			}
/* 001026 */ 			else {
/* 001026 */ 			}
/* 001028 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 001029 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 001029 */ 			}
/* 001031 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 001037 */ 				var m = (function () {
/* 001037 */ 					var __accu0__ = sep_chars;
/* 001037 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 001037 */ 				}) ();
/* 001038 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 001038 */ 			}
/* 001040 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 001041 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 001042 */ 				return __call__ (get_split_match_start_end, null, m);
/* 001042 */ 			}
/* 001044 */ 			var idx = (function () {
/* 001044 */ 				var __accu0__ = chars;
/* 001044 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 001044 */ 			}) ();
/* 001045 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 001046 */ 				return tuple ([__neg__ (1), null]);
/* 001046 */ 			}
/* 001047 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 001047 */ 		};
/* 001050 */ 		var lw = self.latex_walker;
/* 001051 */ 		if (__t__ (lw !== null)) {
/* 001052 */ 			var make_node = lw.make_node;
/* 001053 */ 			var make_nodelist = lw.make_nodelist;
/* 001053 */ 		}
/* 001054 */ 		else {
/* 001055 */ 			var make_node = (function __lambda__ (cls) {
/* 001055 */ 				var kwargs = dict ();
/* 001055 */ 				if (arguments.length) {
/* 001055 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001055 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001055 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001055 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001055 */ 							switch (__attrib0__) {
/* 001055 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001055 */ 							}
/* 001055 */ 						}
/* 001055 */ 						delete kwargs.__kwargtrans__;
/* 001055 */ 					}
/* 001055 */ 				}
/* 001055 */ 				else {
/* 001055 */ 				}
/* 001055 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 001055 */ 			});
/* 001056 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 001056 */ 				var kwargs = dict ();
/* 001056 */ 				if (arguments.length) {
/* 001056 */ 					var __ilastarg0__ = arguments.length - 1;
/* 001056 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001056 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001056 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 001056 */ 							switch (__attrib0__) {
/* 001056 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 001056 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001056 */ 							}
/* 001056 */ 						}
/* 001056 */ 						delete kwargs.__kwargtrans__;
/* 001056 */ 					}
/* 001056 */ 				}
/* 001056 */ 				else {
/* 001056 */ 				}
/* 001056 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 001056 */ 			});
/* 001056 */ 		}
/* 001058 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 001058 */ 			if (arguments.length) {
/* 001058 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001058 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001058 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001058 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001058 */ 						switch (__attrib0__) {
/* 001058 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 						}
/* 001058 */ 					}
/* 001058 */ 				}
/* 001058 */ 			}
/* 001058 */ 			else {
/* 001058 */ 			}
/* 001059 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 001059 */ 		};
/* 001065 */ 		var flush_nodes = function (nodes, pos_end) {
/* 001065 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 001065 */ 				var pos_end = null;
/* 001065 */ 			};
/* 001065 */ 			if (arguments.length) {
/* 001065 */ 				var __ilastarg0__ = arguments.length - 1;
/* 001065 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001065 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001065 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 001065 */ 						switch (__attrib0__) {
/* 001065 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001065 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001065 */ 						}
/* 001065 */ 					}
/* 001065 */ 				}
/* 001065 */ 			}
/* 001065 */ 			else {
/* 001065 */ 			}
/* 001069 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 001072 */ 			(function () {
/* 001072 */ 				var __accu0__ = split_node_lists;
/* 001072 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 001072 */ 			}) ();
/* 001072 */ 		};
/* 001074 */ 		var pending_nodes = [];
/* 001076 */ 		var __iterable0__ = self.nodelist;
/* 001076 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001076 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001078 */ 			if (__t__ (n === null)) {
/* 001079 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001080 */ 					(function () {
/* 001080 */ 						var __accu0__ = pending_nodes;
/* 001080 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001080 */ 					}) ();
/* 001080 */ 				}
/* 001080 */ 				continue;
/* 001080 */ 			}
/* 001083 */ 			if (__t__ ((function () {
/* 001083 */ 				var __accu0__ = n;
/* 001083 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001083 */ 			}) ())) {
/* 001085 */ 				var next_sep_end = 0;
/* 001087 */ 				while (__t__ (true)) {
/* 001088 */ 					var prev_sep_end = next_sep_end;
/* 001089 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001089 */ 					var next_sep_idx = __left0__ [0];
/* 001089 */ 					var next_sep_end = __left0__ [1];
/* 001091 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001092 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001093 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001102 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001103 */ 								(function () {
/* 001103 */ 									var __accu0__ = pending_nodes;
/* 001104 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001104 */ 								}) ();
/* 001104 */ 							}
/* 001106 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001107 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001107 */ 							}
/* 001108 */ 							var pending_nodes = [];
/* 001108 */ 							continue;
/* 001108 */ 						}
/* 001110 */ 						else {
/* 001113 */ 							var thenodes = [];
/* 001114 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001116 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001116 */ 							}
/* 001118 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001119 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001119 */ 							}
/* 001119 */ 							continue;
/* 001119 */ 						}
/* 001119 */ 					}
/* 001122 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001126 */ 						(function () {
/* 001126 */ 							var __accu0__ = pending_nodes;
/* 001126 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001126 */ 						}) ();
/* 001126 */ 						break;
/* 001126 */ 					}
/* 001128 */ 					else {
/* 001131 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001132 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001133 */ 							(function () {
/* 001133 */ 								var __accu0__ = pending_nodes;
/* 001134 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001134 */ 							}) ();
/* 001134 */ 						}
/* 001134 */ 						break;
/* 001134 */ 					}
/* 001134 */ 				}
/* 001134 */ 				continue;
/* 001134 */ 			}
/* 001143 */ 			(function () {
/* 001143 */ 				var __accu0__ = pending_nodes;
/* 001143 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001143 */ 			}) ();
/* 001143 */ 		}
/* 001145 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001146 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001146 */ 		}
/* 001148 */ 		return split_node_lists;
/* 001148 */ 	});},
/* 001152 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001152 */ 		if (arguments.length) {
/* 001152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001152 */ 					switch (__attrib0__) {
/* 001152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001152 */ 					}
/* 001152 */ 				}
/* 001152 */ 			}
/* 001152 */ 		}
/* 001152 */ 		else {
/* 001152 */ 		}
/* 001167 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001167 */ 	});},
/* 001171 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001171 */ 		if (arguments.length) {
/* 001171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001171 */ 					switch (__attrib0__) {
/* 001171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001171 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001171 */ 					}
/* 001171 */ 				}
/* 001171 */ 			}
/* 001171 */ 		}
/* 001171 */ 		else {
/* 001171 */ 		}
/* 001172 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001173 */ 			return __eq__ (self.nodelist, other);
/* 001173 */ 		}
/* 001174 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001174 */ 	});},
/* 001183 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001183 */ 		if (arguments.length) {
/* 001183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001183 */ 					switch (__attrib0__) {
/* 001183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001183 */ 					}
/* 001183 */ 				}
/* 001183 */ 			}
/* 001183 */ 		}
/* 001183 */ 		else {
/* 001183 */ 		}
/* 001184 */ 		return self.nodelist;
/* 001184 */ 	});},
/* 001186 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001186 */ 		if (arguments.length) {
/* 001186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001186 */ 					switch (__attrib0__) {
/* 001186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001186 */ 					}
/* 001186 */ 				}
/* 001186 */ 			}
/* 001186 */ 		}
/* 001186 */ 		else {
/* 001186 */ 		}
/* 001187 */ 		return (function () {
/* 001187 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001187 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001187 */ 		}) ();
/* 001187 */ 	});}
/* 001187 */ });
/* 001187 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001195 */ export var _get_content_as_chars = function (nodelist) {
/* 001195 */ 	if (arguments.length) {
/* 001195 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001195 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001195 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001195 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001195 */ 				switch (__attrib0__) {
/* 001195 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001195 */ 				}
/* 001195 */ 			}
/* 001195 */ 		}
/* 001195 */ 	}
/* 001195 */ 	else {
/* 001195 */ 	}
/* 001201 */ 	if (__t__ (nodelist === null)) {
/* 001202 */ 		return '';
/* 001202 */ 	}
/* 001204 */ 	var charslist = [];
/* 001206 */ 	var __iterable0__ = nodelist;
/* 001206 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001206 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001208 */ 		if (__t__ (n === null)) {
/* 001208 */ 			continue;
/* 001208 */ 		}
/* 001211 */ 		if (__t__ ((function () {
/* 001211 */ 			var __accu0__ = n;
/* 001211 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001211 */ 		}) ())) {
/* 001211 */ 			continue;
/* 001211 */ 		}
/* 001215 */ 		if (__t__ ((function () {
/* 001215 */ 			var __accu0__ = n;
/* 001215 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001215 */ 		}) ())) {
/* 001217 */ 			(function () {
/* 001217 */ 				var __accu0__ = charslist;
/* 001217 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001217 */ 			}) ();
/* 001217 */ 			continue;
/* 001217 */ 		}
/* 001220 */ 		if (__t__ ((function () {
/* 001220 */ 			var __accu0__ = n;
/* 001220 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001220 */ 		}) ())) {
/* 001221 */ 			(function () {
/* 001221 */ 				var __accu0__ = charslist;
/* 001221 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001221 */ 			}) ();
/* 001221 */ 			continue;
/* 001221 */ 		}
/* 001225 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001225 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001225 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001225 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001225 */ 		__except0__.__cause__ = null;
/* 001225 */ 		throw __except0__;
/* 001225 */ 	}
/* 001229 */ 	return (function () {
/* 001229 */ 		var __accu0__ = '';
/* 001229 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001229 */ 	}) ();
/* 001229 */ };
/* 001236 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001236 */ 	if (arguments.length) {
/* 001236 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001236 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001236 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001236 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001236 */ 				switch (__attrib0__) {
/* 001236 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001236 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001236 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001236 */ 				}
/* 001236 */ 			}
/* 001236 */ 		}
/* 001236 */ 	}
/* 001236 */ 	else {
/* 001236 */ 	}
/* 001238 */ 	if (__t__ (pos === null)) {
/* 001239 */ 		var __break0__ = false;
/* 001239 */ 		var __iterable0__ = nodelist;
/* 001239 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001239 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001240 */ 			if (__t__ (n !== null)) {
/* 001241 */ 				var pos = n.pos;
/* 001241 */ 				__break0__ = true;
/* 001241 */ 				break;
/* 001241 */ 			}
/* 001241 */ 		}
/* 001243 */ 		if (!__break0__) {
/* 001244 */ 			var pos = null;
/* 001244 */ 		}
/* 001244 */ 	}
/* 001246 */ 	if (__t__ (pos_end === null)) {
/* 001247 */ 		var __break0__ = false;
/* 001247 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001247 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001247 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001248 */ 			if (__t__ (n !== null)) {
/* 001249 */ 				var pos_end = n.pos_end;
/* 001249 */ 				__break0__ = true;
/* 001249 */ 				break;
/* 001249 */ 			}
/* 001249 */ 		}
/* 001251 */ 		if (!__break0__) {
/* 001252 */ 			var pos_end = null;
/* 001252 */ 		}
/* 001252 */ 	}
/* 001254 */ 	return tuple ([pos, pos_end]);
/* 001254 */ };
/* 001262 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001262 */ 	__module__: __name__,
/* 001273 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001273 */ 		if (arguments.length) {
/* 001273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001273 */ 					switch (__attrib0__) {
/* 001273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001273 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001273 */ 					}
/* 001273 */ 				}
/* 001273 */ 			}
/* 001273 */ 		}
/* 001273 */ 		else {
/* 001273 */ 		}
/* 001280 */ 		// pass;
/* 001280 */ 	});},
/* 001282 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001282 */ 		if (arguments.length) {
/* 001282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001282 */ 					switch (__attrib0__) {
/* 001282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001282 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001282 */ 					}
/* 001282 */ 				}
/* 001282 */ 			}
/* 001282 */ 		}
/* 001282 */ 		else {
/* 001282 */ 		}
/* 001283 */ 		(function () {
/* 001283 */ 			var __accu0__ = self;
/* 001283 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001283 */ 		}) ();
/* 001283 */ 	});},
/* 001285 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001285 */ 		if (arguments.length) {
/* 001285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001285 */ 					switch (__attrib0__) {
/* 001285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001285 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001285 */ 					}
/* 001285 */ 				}
/* 001285 */ 			}
/* 001285 */ 		}
/* 001285 */ 		else {
/* 001285 */ 		}
/* 001286 */ 		(function () {
/* 001286 */ 			var __accu0__ = self;
/* 001286 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001286 */ 		}) ();
/* 001286 */ 	});},
/* 001288 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001288 */ 		if (arguments.length) {
/* 001288 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001288 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001288 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001288 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001288 */ 					switch (__attrib0__) {
/* 001288 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001288 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001288 */ 					}
/* 001288 */ 				}
/* 001288 */ 			}
/* 001288 */ 		}
/* 001288 */ 		else {
/* 001288 */ 		}
/* 001289 */ 		(function () {
/* 001289 */ 			var __accu0__ = self;
/* 001289 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001289 */ 		}) ();
/* 001289 */ 	});},
/* 001291 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001291 */ 		if (arguments.length) {
/* 001291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001291 */ 					switch (__attrib0__) {
/* 001291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001291 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001291 */ 					}
/* 001291 */ 				}
/* 001291 */ 			}
/* 001291 */ 		}
/* 001291 */ 		else {
/* 001291 */ 		}
/* 001292 */ 		(function () {
/* 001292 */ 			var __accu0__ = self;
/* 001292 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001292 */ 		}) ();
/* 001292 */ 	});},
/* 001294 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001294 */ 		if (arguments.length) {
/* 001294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001294 */ 					switch (__attrib0__) {
/* 001294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001294 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001294 */ 					}
/* 001294 */ 				}
/* 001294 */ 			}
/* 001294 */ 		}
/* 001294 */ 		else {
/* 001294 */ 		}
/* 001295 */ 		(function () {
/* 001295 */ 			var __accu0__ = self;
/* 001295 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001295 */ 		}) ();
/* 001295 */ 	});},
/* 001297 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001297 */ 		if (arguments.length) {
/* 001297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001297 */ 					switch (__attrib0__) {
/* 001297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001297 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001297 */ 					}
/* 001297 */ 				}
/* 001297 */ 			}
/* 001297 */ 		}
/* 001297 */ 		else {
/* 001297 */ 		}
/* 001298 */ 		(function () {
/* 001298 */ 			var __accu0__ = self;
/* 001298 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001298 */ 		}) ();
/* 001298 */ 	});},
/* 001300 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001300 */ 		if (arguments.length) {
/* 001300 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001300 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001300 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001300 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001300 */ 					switch (__attrib0__) {
/* 001300 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001300 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001300 */ 					}
/* 001300 */ 				}
/* 001300 */ 			}
/* 001300 */ 		}
/* 001300 */ 		else {
/* 001300 */ 		}
/* 001301 */ 		(function () {
/* 001301 */ 			var __accu0__ = self;
/* 001301 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001301 */ 		}) ();
/* 001301 */ 	});},
/* 001303 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001303 */ 		if (arguments.length) {
/* 001303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001303 */ 					switch (__attrib0__) {
/* 001303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001303 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001303 */ 					}
/* 001303 */ 				}
/* 001303 */ 			}
/* 001303 */ 		}
/* 001303 */ 		else {
/* 001303 */ 		}
/* 001304 */ 		(function () {
/* 001304 */ 			var __accu0__ = self;
/* 001304 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001304 */ 		}) ();
/* 001304 */ 	});},
/* 001306 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001306 */ 		if (arguments.length) {
/* 001306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001306 */ 					switch (__attrib0__) {
/* 001306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001306 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001306 */ 					}
/* 001306 */ 				}
/* 001306 */ 			}
/* 001306 */ 		}
/* 001306 */ 		else {
/* 001306 */ 		}
/* 001307 */ 		(function () {
/* 001307 */ 			var __accu0__ = self;
/* 001307 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001307 */ 		}) ();
/* 001307 */ 	});},
/* 001310 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001310 */ 		if (arguments.length) {
/* 001310 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001310 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001310 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001310 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001310 */ 					switch (__attrib0__) {
/* 001310 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001310 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001310 */ 					}
/* 001310 */ 				}
/* 001310 */ 			}
/* 001310 */ 		}
/* 001310 */ 		else {
/* 001310 */ 		}
/* 001311 */ 		(function () {
/* 001311 */ 			var __accu0__ = self;
/* 001311 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001311 */ 		}) ();
/* 001311 */ 	});},
/* 001316 */ 	get start () {return __get__ (this, function (self, node) {
/* 001316 */ 		if (arguments.length) {
/* 001316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001316 */ 					switch (__attrib0__) {
/* 001316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001316 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001316 */ 					}
/* 001316 */ 				}
/* 001316 */ 			}
/* 001316 */ 		}
/* 001316 */ 		else {
/* 001316 */ 		}
/* 001328 */ 		(function () {
/* 001328 */ 			var __accu0__ = node;
/* 001328 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001328 */ 		}) ();
/* 001328 */ 	});}
/* 001328 */ });
/* 001341 */ export var latex_node_types = tuple ([LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode]);
/* 001352 */ export var __all__ = __add__ ((function () {
/* 001352 */ 	var __accu0__ = [];
/* 001352 */ 	var __iterable0__ = latex_node_types;
/* 001352 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001352 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001352 */ 		(function () {
/* 001352 */ 			var __accu1__ = __accu0__;
/* 001352 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001352 */ 		}) ();
/* 001352 */ 	}
/* 001352 */ 	return __accu0__;
/* 001352 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map