/* 000001 */ // Transcrypt'ed from Python, 2023-05-11 01:03:01
/* 000037 */ var logging = {};
/* 000037 */ var re = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {LatexTokenReaderBase} from './pylatexenc.latexnodes._tokenreaderbase.js';
/* 000043 */ import {LatexToken} from './pylatexenc.latexnodes._token.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ import * as __module_re__ from './re.js';
/* 000037 */ __nest__ (re, '', __module_re__);
/* 000037 */ export {LatexWalkerEndOfStream, LatexWalkerTokenParseError, LatexTokenReaderBase, LatexToken};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreader';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000048 */ export var LatexTokenReader =  __class__ ('LatexTokenReader', [LatexTokenReaderBase], {
/* 000048 */ 	__module__: __name__,
/* 000084 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000084 */ 		var kwargs = dict ();
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 				delete kwargs.__kwargtrans__;
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		__call__ (__call__ (__super__, null, LatexTokenReader, '__init__'), null, self);
/* 000086 */ 		self.s = s;
/* 000088 */ 		self.tolerant_parsing = (function () {
/* 000088 */ 			var __accu0__ = kwargs;
/* 000088 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', false);
/* 000088 */ 		}) ();
/* 000090 */ 		if (__t__ (kwargs)) {
/* 000091 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000091 */ 				var __accu0__ = 'Invalid argument(s) to LatexTokenReader: {!r}';
/* 000091 */ 				return __call__ (__accu0__.format, __accu0__, kwargs);
/* 000091 */ 			}) ());
/* 000091 */ 			__except0__.__cause__ = null;
/* 000091 */ 			throw __except0__;
/* 000091 */ 		}
/* 000094 */ 		self._pos = 0;
/* 000094 */ 	});},
/* 000096 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000096 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000096 */ 			var rewind_pre_space = true;
/* 000096 */ 		};
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000100 */ 		if (__t__ (rewind_pre_space)) {
/* 000101 */ 			var new_pos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000101 */ 		}
/* 000102 */ 		else {
/* 000103 */ 			var new_pos = tok.pos;
/* 000103 */ 		}
/* 000104 */ 		(function () {
/* 000104 */ 			var __accu0__ = self;
/* 000104 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000104 */ 		}) ();
/* 000104 */ 	});},
/* 000106 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000106 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var fastforward_post_space = true;
/* 000106 */ 		};
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000110 */ 		var new_pos = tok.pos_end;
/* 000113 */ 		if (__t__ (!__t__ ((fastforward_post_space)))) {
/* 000114 */ 			var post_space = __call__ (getattr, null, tok, 'post_space', null);
/* 000115 */ 			if (__t__ (post_space)) {
/* 000116 */ 				var new_pos = __call__ (__isub__, null, new_pos, __call__ (len, null, post_space));
/* 000116 */ 			}
/* 000116 */ 		}
/* 000118 */ 		(function () {
/* 000118 */ 			var __accu0__ = self;
/* 000118 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000118 */ 		}) ();
/* 000118 */ 	});},
/* 000121 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000125 */ 		if (__t__ (__ge__ (self._pos, __call__ (len, null, self.s)))) {
/* 000126 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000126 */ 			__except0__.__cause__ = null;
/* 000126 */ 			throw __except0__;
/* 000126 */ 		}
/* 000127 */ 		return __getslice__ (self.s, self._pos, __add__ (self._pos, num_chars), 1);
/* 000127 */ 	});},
/* 000129 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000133 */ 		var chars = (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.peek_chars, __accu0__, num_chars, parsing_state);
/* 000133 */ 		}) ();
/* 000134 */ 		self._pos = __call__ (__iadd__, null, self._pos, num_chars);
/* 000135 */ 		if (__t__ (__gt__ (self._pos, __call__ (len, null, self.s)))) {
/* 000136 */ 			self._pos = __call__ (len, null, self.s);
/* 000136 */ 		}
/* 000137 */ 		return chars;
/* 000137 */ 	});},
/* 000139 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000143 */ 		return self._pos;
/* 000143 */ 	});},
/* 000148 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000152 */ 		(function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, pos);
/* 000152 */ 		}) ();
/* 000152 */ 	});},
/* 000155 */ 	get _advance_to_pos () {return __get__ (this, function (self, pos) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000156 */ 		self._pos = pos;
/* 000156 */ 	});},
/* 000159 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000174 */ 		var __left0__ = (function () {
/* 000174 */ 			var __accu0__ = self;
/* 000174 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000174 */ 		}) ();
/* 000174 */ 		var space = __left0__ [0];
/* 000174 */ 		var space_pos = __left0__ [1];
/* 000174 */ 		var space_pos_end = __left0__ [2];
/* 000176 */ 		(function () {
/* 000176 */ 			var __accu0__ = self;
/* 000176 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, space_pos_end);
/* 000176 */ 		}) ();
/* 000178 */ 		return tuple ([space, space_pos, space_pos_end]);
/* 000178 */ 	});},
/* 000180 */ 	get peek_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000187 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000202 */ 		try {
/* 000204 */ 			return (function () {
/* 000204 */ 				var __accu0__ = self;
/* 000204 */ 				return __call__ (__accu0__.impl_peek_token, __accu0__, parsing_state);
/* 000204 */ 			}) ();
/* 000204 */ 		}
/* 000204 */ 		catch (__except0__) {
/* 000204 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000204 */ 				var exc = __except0__;
/* 000207 */ 				if (__t__ (self.tolerant_parsing)) {
/* 000209 */ 					(function () {
/* 000209 */ 						var __accu0__ = self;
/* 000209 */ 						return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000209 */ 					}) ();
/* 000210 */ 					return exc.recovery_token_placeholder;
/* 000210 */ 				}
/* 000211 */ 				else {
/* 000213 */ 					__except0__.__cause__ = null;
/* 000213 */ 					throw __except0__;
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 			else {
/* 000213 */ 				throw __except0__;
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 	});},
/* 000218 */ 	get impl_peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000226 */ 		(function () {
/* 000226 */ 			var __accu0__ = logger;
/* 000226 */ 			return __call__ (__accu0__.debug, __accu0__, 'impl_peek_token(): parsing_state = %r, pos=%r', parsing_state, self._pos);
/* 000226 */ 		}) ();
/* 000229 */ 		var s = self.s;
/* 000230 */ 		var len_s = __call__ (len, null, s);
/* 000231 */ 		var pos = self._pos;
/* 000234 */ 		var __left0__ = (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, pos, parsing_state);
/* 000234 */ 		}) ();
/* 000234 */ 		var pre_space = __left0__ [0];
/* 000234 */ 		var space_pos = __left0__ [1];
/* 000234 */ 		var space_pos_end = __left0__ [2];
/* 000237 */ 		if (__t__ (__t__ (parsing_state.enable_double_newline_paragraphs) && __ge__ ((function () {
/* 000237 */ 			var __accu0__ = pre_space;
/* 000237 */ 			return __call__ (__accu0__.count, __accu0__, '\n');
/* 000237 */ 		}) (), 2))) {
/* 000242 */ 			var newpar_rel_pos_start = (function () {
/* 000242 */ 				var __accu0__ = pre_space;
/* 000242 */ 				return __call__ (__accu0__.find, __accu0__, '\n');
/* 000242 */ 			}) ();
/* 000243 */ 			var newpar_rel_pos_end = __add__ ((function () {
/* 000243 */ 				var __accu0__ = pre_space;
/* 000243 */ 				return __call__ (__accu0__.rfind, __accu0__, '\n');
/* 000243 */ 			}) (), 1);
/* 000245 */ 			var pre_space = __getslice__ (pre_space, 0, newpar_rel_pos_start, 1);
/* 000246 */ 			var newpar_pos_start = __add__ (space_pos, newpar_rel_pos_start);
/* 000247 */ 			var newpar_pos_end = __add__ (space_pos, newpar_rel_pos_end);
/* 000249 */ 			if (__t__ (parsing_state.latex_context !== null)) {
/* 000250 */ 				try {
/* 000251 */ 					var sspec = (function () {
/* 000251 */ 						var __accu0__ = parsing_state.latex_context;
/* 000251 */ 						return __call__ (__accu0__.get_specials_spec, __accu0__, __kwargtrans__ ({specials_chars: '\n\n'}));
/* 000251 */ 					}) ();
/* 000251 */ 				}
/* 000251 */ 				catch (__except0__) {
/* 000251 */ 					if (isinstance (__except0__, KeyError)) {
/* 000255 */ 						var sspec = null;
/* 000255 */ 					}
/* 000255 */ 					else {
/* 000255 */ 						throw __except0__;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000259 */ 				if (__t__ (__t__ (sspec !== null) && __eq__ (sspec.specials_chars, '\n\n'))) {
/* 000260 */ 					return (function () {
/* 000260 */ 						var __accu0__ = self;
/* 000260 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000260 */ 					}) ();
/* 000260 */ 				}
/* 000260 */ 			}
/* 000266 */ 			var par_space_tokens = __getslice__ (s, newpar_pos_start, newpar_pos_end, 1);
/* 000267 */ 			return (function () {
/* 000267 */ 				var __accu0__ = self;
/* 000267 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: par_space_tokens, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000274 */ 		var pos = space_pos_end;
/* 000275 */ 		if (__t__ (__ge__ (pos, len_s))) {
/* 000276 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null, __kwargtrans__ ({final_space: pre_space}));
/* 000276 */ 			__except0__.__cause__ = null;
/* 000276 */ 			throw __except0__;
/* 000276 */ 		}
/* 000280 */ 		var c = __getitem__ (s, pos);
/* 000285 */ 		if (__t__ (__t__ (__in__ (c, parsing_state._math_delims_info_startchars)) && parsing_state.enable_math)) {
/* 000286 */ 			var t = (function () {
/* 000286 */ 				var __accu0__ = self;
/* 000286 */ 				return __call__ (__accu0__.impl_maybe_read_math_mode_delimiter, __accu0__, s, pos, parsing_state, pre_space);
/* 000286 */ 			}) ();
/* 000287 */ 			if (__t__ (t !== null)) {
/* 000288 */ 				return t;
/* 000288 */ 			}
/* 000288 */ 		}
/* 000291 */ 		if (__t__ (__eq__ (c, parsing_state.macro_escape_char))) {
/* 000294 */ 			if (__t__ (parsing_state.enable_environments)) {
/* 000295 */ 				if (__t__ ((function () {
/* 000295 */ 					var __accu0__ = s;
/* 000295 */ 					return __call__ (__accu0__.startswith, __accu0__, 'begin', __add__ (pos, 1));
/* 000295 */ 				}) ())) {
/* 000296 */ 					var beginend = 'begin';
/* 000296 */ 				}
/* 000297 */ 				else if (__t__ ((function () {
/* 000297 */ 					var __accu0__ = s;
/* 000297 */ 					return __call__ (__accu0__.startswith, __accu0__, 'end', __add__ (pos, 1));
/* 000297 */ 				}) ())) {
/* 000298 */ 					var beginend = 'end';
/* 000298 */ 				}
/* 000299 */ 				else {
/* 000300 */ 					var beginend = null;
/* 000300 */ 				}
/* 000305 */ 				if (__t__ (beginend)) {
/* 000306 */ 					var pastbeginendpos = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000307 */ 					if (__t__ (__t__ (__ge__ (pastbeginendpos, __call__ (len, null, s))) || !__in__ (__getitem__ (s, pastbeginendpos), parsing_state.macro_alpha_chars))) {
/* 000311 */ 						return (function () {
/* 000311 */ 							var __accu0__ = self;
/* 000311 */ 							return __call__ (__accu0__.impl_read_environment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, beginend: beginend, pre_space: pre_space}));
/* 000311 */ 						}) ();
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000318 */ 			if (__t__ (parsing_state.enable_macros)) {
/* 000319 */ 				return (function () {
/* 000319 */ 					var __accu0__ = self;
/* 000319 */ 					return __call__ (__accu0__.impl_read_macro, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000319 */ 				}) ();
/* 000319 */ 			}
/* 000319 */ 		}
/* 000326 */ 		if (__t__ (__t__ (parsing_state.enable_comments) && __t__ (__eq__ (c, __getitem__ (parsing_state.comment_start, 0))) && (function () {
/* 000326 */ 			var __accu0__ = s;
/* 000326 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000326 */ 		}) ())) {
/* 000328 */ 			return (function () {
/* 000328 */ 				var __accu0__ = self;
/* 000328 */ 				return __call__ (__accu0__.impl_read_comment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000328 */ 			}) ();
/* 000328 */ 		}
/* 000333 */ 		if (__t__ (parsing_state.enable_groups)) {
/* 000334 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_by_open))) {
/* 000335 */ 				return (function () {
/* 000335 */ 					var __accu0__ = self;
/* 000335 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_open', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000335 */ 				}) ();
/* 000335 */ 			}
/* 000337 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_close))) {
/* 000338 */ 				return (function () {
/* 000338 */ 					var __accu0__ = self;
/* 000338 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_close', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000338 */ 				}) ();
/* 000338 */ 			}
/* 000338 */ 		}
/* 000341 */ 		if (__t__ (__t__ (parsing_state.latex_context !== null) && parsing_state.enable_specials)) {
/* 000342 */ 			var sspec = (function () {
/* 000342 */ 				var __accu0__ = parsing_state.latex_context;
/* 000342 */ 				return __call__ (__accu0__.test_for_specials, __accu0__, s, pos, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000342 */ 			}) ();
/* 000347 */ 			if (__t__ (sspec !== null)) {
/* 000348 */ 				return (function () {
/* 000348 */ 					var __accu0__ = self;
/* 000349 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, __call__ (len, null, sspec.specials_chars)), pre_space: pre_space}));
/* 000349 */ 				}) ();
/* 000349 */ 			}
/* 000349 */ 		}
/* 000354 */ 		return (function () {
/* 000354 */ 			var __accu0__ = self;
/* 000354 */ 			return __call__ (__accu0__.impl_char_token, __accu0__, c, pos, __add__ (pos, 1), parsing_state, pre_space);
/* 000354 */ 		}) ();
/* 000354 */ 	});},
/* 000357 */ 	get impl_peek_space_chars () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000372 */ 		var p2 = pos;
/* 000376 */ 		var space = '';
/* 000378 */ 		while (__t__ (true)) {
/* 000379 */ 			if (__t__ (__ge__ (p2, __call__ (len, null, s)))) {
/* 000379 */ 				break;
/* 000379 */ 			}
/* 000381 */ 			var c = __getitem__ (s, p2);
/* 000382 */ 			if (__t__ (!__t__ (((function () {
/* 000382 */ 				var __accu0__ = c;
/* 000382 */ 				return __call__ (__accu0__.isspace, __accu0__);
/* 000382 */ 			}) ())))) {
/* 000382 */ 				break;
/* 000382 */ 			}
/* 000384 */ 			var space = __call__ (__iadd__, null, space, c);
/* 000385 */ 			var p2 = __call__ (__iadd__, null, p2, 1);
/* 000385 */ 		}
/* 000397 */ 		return tuple ([space, pos, p2]);
/* 000397 */ 	});},
/* 000400 */ 	get impl_char_token () {return __get__ (this, function (self, c, pos, pos_end, parsing_state, pre_space) {
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000407 */ 		if (__t__ (__in__ (c, parsing_state.forbidden_characters))) {
/* 000411 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: self.s, pos: pos, msg: (function () {
/* 000411 */ 				var __accu0__ = 'Character is forbidden here: ‘{}’ ({:#x})';
/* 000411 */ 				return __call__ (__accu0__.format, __accu0__, c, __call__ (ord, null, c));
/* 000416 */ 			}) (), error_type_info: dict ({'what': 'token_forbidden_character', 'forbidden_character': c}), recovery_token_placeholder: (function () {
/* 000416 */ 				var __accu0__ = self;
/* 000416 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000416 */ 			}) (), recovery_token_at_pos: pos_end}));
/* 000416 */ 			__except0__.__cause__ = null;
/* 000416 */ 			throw __except0__;
/* 000416 */ 		}
/* 000425 */ 		return (function () {
/* 000425 */ 			var __accu0__ = self;
/* 000425 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000425 */ 		}) ();
/* 000425 */ 	});},
/* 000428 */ 	get impl_maybe_read_math_mode_delimiter () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000428 */ 		if (arguments.length) {
/* 000428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 					switch (__attrib0__) {
/* 000428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		else {
/* 000428 */ 		}
/* 000438 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000440 */ 			var expecting_close = parsing_state._math_expecting_close_delim_info;
/* 000443 */ 			if (__t__ (expecting_close !== null)) {
/* 000444 */ 				var expecting_close_delim = __getitem__ (expecting_close, 'close_delim');
/* 000445 */ 				var expecting_close_tok = __getitem__ (expecting_close, 'tok');
/* 000446 */ 				(function () {
/* 000446 */ 					var __accu0__ = logger;
/* 000446 */ 					return __call__ (__accu0__.debug, __accu0__, 'expecting close math mode delimiter: delim %r, tok %r', expecting_close_delim, expecting_close_tok);
/* 000446 */ 				}) ();
/* 000448 */ 				if (__t__ ((function () {
/* 000448 */ 					var __accu0__ = s;
/* 000448 */ 					return __call__ (__accu0__.startswith, __accu0__, expecting_close_delim, pos);
/* 000448 */ 				}) ())) {
/* 000449 */ 					(function () {
/* 000449 */ 						var __accu0__ = logger;
/* 000449 */ 						return __call__ (__accu0__.debug, __accu0__, 'we did encounter that expected delim & tok at pos = %r;we have s[pos:pos+10]=%r', pos, __getslice__ (s, pos, __add__ (pos, 10), 1));
/* 000449 */ 					}) ();
/* 000452 */ 					return (function () {
/* 000452 */ 						var __accu0__ = self;
/* 000455 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: expecting_close_tok, arg: expecting_close_delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, expecting_close_delim)), pre_space: pre_space}));
/* 000455 */ 					}) ();
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000467 */ 		var __iterable0__ = parsing_state._math_all_delims_by_len;
/* 000467 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000467 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000467 */ 			var delim = __left0__ [0];
/* 000467 */ 			var tok_type = __left0__ [1];
/* 000468 */ 			if (__t__ ((function () {
/* 000468 */ 				var __accu0__ = s;
/* 000468 */ 				return __call__ (__accu0__.startswith, __accu0__, delim, pos);
/* 000468 */ 			}) ())) {
/* 000469 */ 				(function () {
/* 000469 */ 					var __accu0__ = logger;
/* 000469 */ 					return __call__ (__accu0__.debug, __accu0__, 'Encountered opening math delim %r (tok %r) at pos = %r;we have s[pos:pos+10]=%r', delim, tok_type, pos, __getslice__ (s, pos, __add__ (pos, 10), 1));
/* 000469 */ 				}) ();
/* 000472 */ 				return (function () {
/* 000472 */ 					var __accu0__ = self;
/* 000473 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: tok_type, arg: delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, delim)), pre_space: pre_space}));
/* 000473 */ 				}) ();
/* 000473 */ 			}
/* 000473 */ 		}
/* 000476 */ 		return null;
/* 000476 */ 	});},
/* 000479 */ 	get impl_read_macro () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000479 */ 		if (arguments.length) {
/* 000479 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000479 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000479 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000479 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000479 */ 					switch (__attrib0__) {
/* 000479 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 					}
/* 000479 */ 				}
/* 000479 */ 			}
/* 000479 */ 		}
/* 000479 */ 		else {
/* 000479 */ 		}
/* 000491 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.macro_escape_char))) {
/* 000492 */ 			var __except0__ = __call__ (ValueError, null, "Internal error, expected '\\' in impl_read_macro()");
/* 000492 */ 			__except0__.__cause__ = null;
/* 000492 */ 			throw __except0__;
/* 000492 */ 		}
/* 000496 */ 		if (__t__ (__ge__ (__add__ (pos, 1), __call__ (len, null, s)))) {
/* 000501 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, pos: __add__ (pos, 1), msg: (function () {
/* 000501 */ 				var __accu0__ = 'Expected macro name after ‘{}’ escape character';
/* 000501 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char);
/* 000507 */ 			}) (), error_type_info: dict ({'what': 'token_end_of_stream_immediately_after_escape_character'}), recovery_token_placeholder: (function () {
/* 000507 */ 				var __accu0__ = self;
/* 000507 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pos: pos, pos_end: pos, pre_space: pre_space}));
/* 000514 */ 			}) (), recovery_token_at_pos: __call__ (len, null, s)}));
/* 000514 */ 			__except0__.__cause__ = null;
/* 000514 */ 			throw __except0__;
/* 000514 */ 		}
/* 000517 */ 		var c = __getitem__ (s, __add__ (pos, 1));
/* 000518 */ 		var macro = c;
/* 000521 */ 		var isalphamacro = __in__ (c, parsing_state.macro_alpha_chars);
/* 000522 */ 		var posi = __add__ (pos, 2);
/* 000523 */ 		if (__t__ (isalphamacro)) {
/* 000524 */ 			while (__t__ (__t__ (__lt__ (posi, __call__ (len, null, s))) && __in__ (__getitem__ (s, posi), parsing_state.macro_alpha_chars))) {
/* 000525 */ 				var macro = __call__ (__iadd__, null, macro, __getitem__ (s, posi));
/* 000526 */ 				var posi = __call__ (__iadd__, null, posi, 1);
/* 000526 */ 			}
/* 000526 */ 		}
/* 000529 */ 		var post_space = '';
/* 000530 */ 		if (__t__ (isalphamacro)) {
/* 000532 */ 			var __left0__ = (function () {
/* 000532 */ 				var __accu0__ = self;
/* 000532 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, posi, parsing_state);
/* 000532 */ 			}) ();
/* 000532 */ 			var post_space = __left0__ [0];
/* 000532 */ 			var post_space_pos = __left0__ [1];
/* 000532 */ 			var post_space_pos_end = __left0__ [2];
/* 000535 */ 			if (__t__ (__ge__ ((function () {
/* 000535 */ 				var __accu0__ = post_space;
/* 000535 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000535 */ 			}) (), 2))) {
/* 000537 */ 				var newline_rel_pos = (function () {
/* 000537 */ 					var __accu0__ = post_space;
/* 000537 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000537 */ 				}) ();
/* 000538 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000539 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000539 */ 			}
/* 000541 */ 			var posi = post_space_pos_end;
/* 000541 */ 		}
/* 000543 */ 		return (function () {
/* 000543 */ 			var __accu0__ = self;
/* 000543 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'macro', arg: macro, pos: pos, pos_end: posi, pre_space: pre_space, post_space: post_space}));
/* 000543 */ 		}) ();
/* 000543 */ 	});},
/* 000553 */ 	rx_environment_name: (function () {
/* 000553 */ 		var __accu0__ = re;
/* 000553 */ 		return __call__ (__accu0__.compile, __accu0__, '\\s*\\{(?P<environmentname>[A-Za-z0-9*._ :/!^()\\[\\]-]+)\\}');
/* 000552 */ 	}) (),
/* 000559 */ 	get parse_latex_environment_name () {return __get__ (this, function (self, pos, beginend, pos_envname) {
/* 000559 */ 		if (arguments.length) {
/* 000559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000559 */ 					switch (__attrib0__) {
/* 000559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'pos_envname': var pos_envname = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 					}
/* 000559 */ 				}
/* 000559 */ 			}
/* 000559 */ 		}
/* 000559 */ 		else {
/* 000559 */ 		}
/* 000580 */ 		var envmatch = (function () {
/* 000580 */ 			var __accu0__ = self.rx_environment_name;
/* 000580 */ 			return __call__ (__accu0__.match, __accu0__, __getslice__ (self.s, pos_envname, null, 1));
/* 000580 */ 		}) ();
/* 000581 */ 		if (__t__ (envmatch === null)) {
/* 000582 */ 			return tuple ([null, null]);
/* 000582 */ 		}
/* 000584 */ 		var envmatch_end_pos = __add__ (pos_envname, (function () {
/* 000584 */ 			var __accu0__ = envmatch;
/* 000584 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000584 */ 		}) ());
/* 000586 */ 		return tuple ([(function () {
/* 000586 */ 			var __accu0__ = envmatch;
/* 000586 */ 			return __call__ (__accu0__.group, __accu0__, 'environmentname');
/* 000586 */ 		}) (), envmatch_end_pos]);
/* 000586 */ 	});},
/* 000589 */ 	get impl_read_environment () {return __get__ (this, function (self, s, pos, parsing_state, beginend, pre_space) {
/* 000589 */ 		if (arguments.length) {
/* 000589 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 					switch (__attrib0__) {
/* 000589 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 		}
/* 000589 */ 		else {
/* 000589 */ 		}
/* 000600 */ 		if (__t__ (__ne__ (__getslice__ (s, pos, __add__ (__add__ (pos, 1), __call__ (len, null, beginend)), 1), __add__ (parsing_state.macro_escape_char, beginend)))) {
/* 000602 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000602 */ 				var __accu0__ = 'Internal error, expected ‘{}{}’ in read_environment()';
/* 000602 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char, beginend);
/* 000602 */ 			}) ());
/* 000602 */ 			__except0__.__cause__ = null;
/* 000602 */ 			throw __except0__;
/* 000602 */ 		}
/* 000606 */ 		var pos_envname = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000609 */ 		var __left0__ = (function () {
/* 000609 */ 			var __accu0__ = self;
/* 000609 */ 			return __call__ (__accu0__.parse_latex_environment_name, __accu0__, pos, beginend, pos_envname);
/* 000609 */ 		}) ();
/* 000609 */ 		var environment_name = __left0__ [0];
/* 000609 */ 		var environment_pos_end = __left0__ [1];
/* 000611 */ 		(function () {
/* 000611 */ 			var __accu0__ = logger;
/* 000614 */ 			return __call__ (__accu0__.debug, __accu0__, 'Getting environment name at %r -> %r, is {align}?=%r', __add__ (__add__ ('...|', __getslice__ (s, pos_envname, __add__ (pos_envname, 35), 1)), '|...'), environment_pos_end, __eq__ (__getslice__ (s, pos_envname, __add__ (pos_envname, __call__ (len, null, '{align}')), 1), '{align}'));
/* 000614 */ 		}) ();
/* 000617 */ 		if (__t__ (environment_name === null)) {
/* 000618 */ 			var tokarg = __add__ (parsing_state.macro_escape_char, beginend);
/* 000621 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, msg: (function () {
/* 000621 */ 				var __accu0__ = 'Bad ‘\\{}’ call: expected {{environmentname}}';
/* 000621 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000635 */ 			}) (), pos: pos, error_type_info: dict ({'what': 'token_error_parse_beginend_environment_name', 'beginend': beginend, 'macro_beginend': tokarg}), recovery_token_placeholder: __call__ (LatexToken, null, __kwargtrans__ ({tok: 'char', arg: tokarg, pos: pos, pos_end: __add__ (pos, __call__ (len, null, tokarg)), pre_space: pre_space})), recovery_token_at_pos: __add__ (pos, __call__ (len, null, tokarg))}));
/* 000635 */ 			__except0__.__cause__ = null;
/* 000635 */ 			throw __except0__;
/* 000635 */ 		}
/* 000638 */ 		var env_token = (function () {
/* 000638 */ 			var __accu0__ = self;
/* 000638 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: __add__ (beginend, '_environment'), arg: environment_name, pos: pos, pos_end: environment_pos_end, pre_space: pre_space}));
/* 000638 */ 		}) ();
/* 000645 */ 		(function () {
/* 000645 */ 			var __accu0__ = logger;
/* 000645 */ 			return __call__ (__accu0__.debug, __accu0__, 'read environment token %r', env_token);
/* 000645 */ 		}) ();
/* 000646 */ 		return env_token;
/* 000646 */ 	});},
/* 000648 */ 	get impl_read_comment () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000648 */ 		if (arguments.length) {
/* 000648 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000648 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000648 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000648 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000648 */ 					switch (__attrib0__) {
/* 000648 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 					}
/* 000648 */ 				}
/* 000648 */ 			}
/* 000648 */ 		}
/* 000648 */ 		else {
/* 000648 */ 		}
/* 000657 */ 		if (__t__ (!__t__ (((function () {
/* 000657 */ 			var __accu0__ = s;
/* 000657 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000657 */ 		}) ())))) {
/* 000658 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000658 */ 				var __accu0__ = 'Internal error, expected comment start ‘{}’ in read_comment()';
/* 000658 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.comment_start);
/* 000658 */ 			}) ());
/* 000658 */ 			__except0__.__cause__ = null;
/* 000658 */ 			throw __except0__;
/* 000658 */ 		}
/* 000661 */ 		var pos_inner_start = __add__ (pos, __call__ (len, null, parsing_state.comment_start));
/* 000663 */ 		var sppos = (function () {
/* 000663 */ 			var __accu0__ = s;
/* 000663 */ 			return __call__ (__accu0__.find, __accu0__, '\n', pos_inner_start);
/* 000663 */ 		}) ();
/* 000664 */ 		if (__t__ (__eq__ (sppos, __neg__ (1)))) {
/* 000666 */ 			var comment_pos_end = __call__ (len, null, s);
/* 000667 */ 			var comment_with_whitespace_pos_end = __call__ (len, null, s);
/* 000668 */ 			var post_space = '';
/* 000668 */ 		}
/* 000669 */ 		else {
/* 000673 */ 			var __left0__ = (function () {
/* 000673 */ 				var __accu0__ = self;
/* 000673 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, sppos, parsing_state);
/* 000673 */ 			}) ();
/* 000673 */ 			var post_space = __left0__ [0];
/* 000673 */ 			var post_space_pos = __left0__ [1];
/* 000673 */ 			var post_space_pos_end = __left0__ [2];
/* 000676 */ 			if (__t__ (__ge__ ((function () {
/* 000676 */ 				var __accu0__ = post_space;
/* 000676 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000676 */ 			}) (), 2))) {
/* 000678 */ 				var newline_rel_pos = (function () {
/* 000678 */ 					var __accu0__ = post_space;
/* 000678 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000678 */ 				}) ();
/* 000679 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000680 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000680 */ 			}
/* 000682 */ 			var comment_pos_end = sppos;
/* 000683 */ 			var comment_with_whitespace_pos_end = post_space_pos_end;
/* 000683 */ 		}
/* 000685 */ 		return (function () {
/* 000685 */ 			var __accu0__ = self;
/* 000685 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'comment', arg: __getslice__ (s, pos_inner_start, comment_pos_end, 1), pos: pos, pos_end: comment_with_whitespace_pos_end, pre_space: pre_space, post_space: post_space}));
/* 000685 */ 		}) ();
/* 000685 */ 	});}
/* 000685 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreader.map