/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:21
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
/* 000037 */ export {LatexWalkerTokenParseError, LatexWalkerEndOfStream, LatexToken, LatexTokenReaderBase};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreader';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000048 */ export var LatexTokenReader =  __class__ ('LatexTokenReader', [LatexTokenReaderBase], {
/* 000048 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000078 */ 		var kwargs = dict ();
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 				delete kwargs.__kwargtrans__;
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, LatexTokenReader, '__init__'), null, self);
/* 000080 */ 		self.s = s;
/* 000082 */ 		self.tolerant_parsing = (function () {
/* 000082 */ 			var __accu0__ = kwargs;
/* 000082 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', false);
/* 000082 */ 		}) ();
/* 000084 */ 		if (__t__ (kwargs)) {
/* 000085 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000085 */ 				var __accu0__ = 'Invalid argument(s) to LatexTokenReader: {!r}';
/* 000085 */ 				return __call__ (__accu0__.format, __accu0__, kwargs);
/* 000085 */ 			}) ());
/* 000085 */ 			__except0__.__cause__ = null;
/* 000085 */ 			throw __except0__;
/* 000085 */ 		}
/* 000088 */ 		self._pos = 0;
/* 000088 */ 	});},
/* 000090 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000090 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var rewind_pre_space = true;
/* 000090 */ 		};
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000094 */ 		if (__t__ (rewind_pre_space)) {
/* 000095 */ 			var new_pos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000095 */ 		}
/* 000096 */ 		else {
/* 000097 */ 			var new_pos = tok.pos;
/* 000097 */ 		}
/* 000098 */ 		(function () {
/* 000098 */ 			var __accu0__ = self;
/* 000098 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000098 */ 		}) ();
/* 000098 */ 	});},
/* 000100 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000100 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000100 */ 			var fastforward_post_space = true;
/* 000100 */ 		};
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000104 */ 		var new_pos = tok.pos_end;
/* 000107 */ 		if (__t__ (!__t__ ((fastforward_post_space)))) {
/* 000108 */ 			var post_space = __call__ (getattr, null, tok, 'post_space', null);
/* 000109 */ 			if (__t__ (post_space)) {
/* 000110 */ 				var new_pos = __call__ (__isub__, null, new_pos, __call__ (len, null, post_space));
/* 000110 */ 			}
/* 000110 */ 		}
/* 000112 */ 		(function () {
/* 000112 */ 			var __accu0__ = self;
/* 000112 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, new_pos);
/* 000112 */ 		}) ();
/* 000112 */ 	});},
/* 000115 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000119 */ 		if (__t__ (__ge__ (self._pos, __call__ (len, null, self.s)))) {
/* 000120 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000120 */ 			__except0__.__cause__ = null;
/* 000120 */ 			throw __except0__;
/* 000120 */ 		}
/* 000121 */ 		return __getslice__ (self.s, self._pos, __add__ (self._pos, num_chars), 1);
/* 000121 */ 	});},
/* 000123 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000127 */ 		var chars = (function () {
/* 000127 */ 			var __accu0__ = self;
/* 000127 */ 			return __call__ (__accu0__.peek_chars, __accu0__, num_chars, parsing_state);
/* 000127 */ 		}) ();
/* 000128 */ 		self._pos = __call__ (__iadd__, null, self._pos, num_chars);
/* 000129 */ 		if (__t__ (__gt__ (self._pos, __call__ (len, null, self.s)))) {
/* 000130 */ 			self._pos = __call__ (len, null, self.s);
/* 000130 */ 		}
/* 000131 */ 		return chars;
/* 000131 */ 	});},
/* 000133 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000137 */ 		return self._pos;
/* 000137 */ 	});},
/* 000142 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000146 */ 		(function () {
/* 000146 */ 			var __accu0__ = self;
/* 000146 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, pos);
/* 000146 */ 		}) ();
/* 000146 */ 	});},
/* 000149 */ 	get _advance_to_pos () {return __get__ (this, function (self, pos) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		self._pos = pos;
/* 000150 */ 	});},
/* 000153 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000168 */ 		var __left0__ = (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000168 */ 		}) ();
/* 000168 */ 		var space = __left0__ [0];
/* 000168 */ 		var space_pos = __left0__ [1];
/* 000168 */ 		var space_pos_end = __left0__ [2];
/* 000170 */ 		(function () {
/* 000170 */ 			var __accu0__ = self;
/* 000170 */ 			return __call__ (__accu0__._advance_to_pos, __accu0__, space_pos_end);
/* 000170 */ 		}) ();
/* 000172 */ 		return tuple ([space, space_pos, space_pos_end]);
/* 000172 */ 	});},
/* 000174 */ 	get peek_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000178 */ 		return (function () {
/* 000178 */ 			var __accu0__ = self;
/* 000178 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, self.s, self._pos, parsing_state);
/* 000178 */ 		}) ();
/* 000178 */ 	});},
/* 000181 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000196 */ 		try {
/* 000198 */ 			return (function () {
/* 000198 */ 				var __accu0__ = self;
/* 000198 */ 				return __call__ (__accu0__.impl_peek_token, __accu0__, parsing_state);
/* 000198 */ 			}) ();
/* 000198 */ 		}
/* 000198 */ 		catch (__except0__) {
/* 000198 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000198 */ 				var exc = __except0__;
/* 000201 */ 				if (__t__ (self.tolerant_parsing)) {
/* 000203 */ 					(function () {
/* 000203 */ 						var __accu0__ = self;
/* 000203 */ 						return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000203 */ 					}) ();
/* 000204 */ 					return exc.recovery_token_placeholder;
/* 000204 */ 				}
/* 000205 */ 				else {
/* 000207 */ 					__except0__.__cause__ = null;
/* 000207 */ 					throw __except0__;
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 			else {
/* 000207 */ 				throw __except0__;
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 	});},
/* 000212 */ 	get impl_peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000220 */ 		(function () {
/* 000220 */ 			var __accu0__ = logger;
/* 000220 */ 			return __call__ (__accu0__.debug, __accu0__, 'impl_peek_token(): parsing_state = %r, pos=%r', parsing_state, self._pos);
/* 000220 */ 		}) ();
/* 000223 */ 		var s = self.s;
/* 000224 */ 		var len_s = __call__ (len, null, s);
/* 000225 */ 		var pos = self._pos;
/* 000228 */ 		var __left0__ = (function () {
/* 000228 */ 			var __accu0__ = self;
/* 000228 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, pos, parsing_state);
/* 000228 */ 		}) ();
/* 000228 */ 		var pre_space = __left0__ [0];
/* 000228 */ 		var space_pos = __left0__ [1];
/* 000228 */ 		var space_pos_end = __left0__ [2];
/* 000231 */ 		if (__t__ (__t__ (parsing_state.enable_double_newline_paragraphs) && __ge__ ((function () {
/* 000231 */ 			var __accu0__ = pre_space;
/* 000231 */ 			return __call__ (__accu0__.count, __accu0__, '\n');
/* 000231 */ 		}) (), 2))) {
/* 000236 */ 			var newpar_rel_pos_start = (function () {
/* 000236 */ 				var __accu0__ = pre_space;
/* 000236 */ 				return __call__ (__accu0__.find, __accu0__, '\n');
/* 000236 */ 			}) ();
/* 000237 */ 			var newpar_rel_pos_end = __add__ ((function () {
/* 000237 */ 				var __accu0__ = pre_space;
/* 000237 */ 				return __call__ (__accu0__.rfind, __accu0__, '\n');
/* 000237 */ 			}) (), 1);
/* 000239 */ 			var pre_space = __getslice__ (pre_space, 0, newpar_rel_pos_start, 1);
/* 000240 */ 			var newpar_pos_start = __add__ (space_pos, newpar_rel_pos_start);
/* 000241 */ 			var newpar_pos_end = __add__ (space_pos, newpar_rel_pos_end);
/* 000243 */ 			if (__t__ (parsing_state.latex_context !== null)) {
/* 000244 */ 				try {
/* 000245 */ 					var sspec = (function () {
/* 000245 */ 						var __accu0__ = parsing_state.latex_context;
/* 000245 */ 						return __call__ (__accu0__.get_specials_spec, __accu0__, __kwargtrans__ ({specials_chars: '\n\n'}));
/* 000245 */ 					}) ();
/* 000245 */ 				}
/* 000245 */ 				catch (__except0__) {
/* 000245 */ 					if (isinstance (__except0__, KeyError)) {
/* 000249 */ 						var sspec = null;
/* 000249 */ 					}
/* 000249 */ 					else {
/* 000249 */ 						throw __except0__;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000253 */ 				if (__t__ (__t__ (sspec !== null) && __eq__ (sspec.specials_chars, '\n\n'))) {
/* 000254 */ 					return (function () {
/* 000254 */ 						var __accu0__ = self;
/* 000254 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000254 */ 					}) ();
/* 000254 */ 				}
/* 000254 */ 			}
/* 000259 */ 			return (function () {
/* 000259 */ 				var __accu0__ = self;
/* 000259 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '\n\n', pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000266 */ 		var pos = space_pos_end;
/* 000267 */ 		if (__t__ (__ge__ (pos, len_s))) {
/* 000268 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null, __kwargtrans__ ({final_space: pre_space}));
/* 000268 */ 			__except0__.__cause__ = null;
/* 000268 */ 			throw __except0__;
/* 000268 */ 		}
/* 000272 */ 		var c = __getitem__ (s, pos);
/* 000274 */ 		(function () {
/* 000274 */ 			var __accu0__ = logger;
/* 000274 */ 			return __call__ (__accu0__.debug, __accu0__, 'Char at %d: %r', pos, c);
/* 000274 */ 		}) ();
/* 000277 */ 		if (__t__ (__t__ (__in__ (c, parsing_state._math_delims_info_startchars)) && parsing_state.enable_math)) {
/* 000278 */ 			var t = (function () {
/* 000278 */ 				var __accu0__ = self;
/* 000278 */ 				return __call__ (__accu0__.impl_maybe_read_math_mode_delimiter, __accu0__, s, pos, parsing_state, pre_space);
/* 000278 */ 			}) ();
/* 000279 */ 			if (__t__ (t !== null)) {
/* 000280 */ 				return t;
/* 000280 */ 			}
/* 000280 */ 		}
/* 000283 */ 		if (__t__ (__eq__ (c, parsing_state.macro_escape_char))) {
/* 000286 */ 			if (__t__ (parsing_state.enable_environments)) {
/* 000287 */ 				if (__t__ ((function () {
/* 000287 */ 					var __accu0__ = s;
/* 000287 */ 					return __call__ (__accu0__.startswith, __accu0__, 'begin', __add__ (pos, 1));
/* 000287 */ 				}) ())) {
/* 000288 */ 					var beginend = 'begin';
/* 000288 */ 				}
/* 000289 */ 				else if (__t__ ((function () {
/* 000289 */ 					var __accu0__ = s;
/* 000289 */ 					return __call__ (__accu0__.startswith, __accu0__, 'end', __add__ (pos, 1));
/* 000289 */ 				}) ())) {
/* 000290 */ 					var beginend = 'end';
/* 000290 */ 				}
/* 000291 */ 				else {
/* 000292 */ 					var beginend = null;
/* 000292 */ 				}
/* 000294 */ 				(function () {
/* 000294 */ 					var __accu0__ = logger;
/* 000295 */ 					return __call__ (__accu0__.debug, __accu0__, "beginend=%r; s.startswith('begin',pos+1)=%r; s[pos+1:pos+7]=%r", beginend, (function () {
/* 000295 */ 						var __accu1__ = s;
/* 000295 */ 						return __call__ (__accu1__.startswith, __accu1__, 'begin', __add__ (pos, 1));
/* 000295 */ 					}) (), __getslice__ (s, __add__ (pos, 1), __add__ (pos, 7), 1));
/* 000295 */ 				}) ();
/* 000297 */ 				if (__t__ (beginend)) {
/* 000298 */ 					var pastbeginendpos = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000299 */ 					if (__t__ (__t__ (__ge__ (pastbeginendpos, __call__ (len, null, s))) || !__in__ (__getitem__ (s, pastbeginendpos), parsing_state.macro_alpha_chars))) {
/* 000303 */ 						return (function () {
/* 000303 */ 							var __accu0__ = self;
/* 000303 */ 							return __call__ (__accu0__.impl_read_environment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, beginend: beginend, pre_space: pre_space}));
/* 000303 */ 						}) ();
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000310 */ 			if (__t__ (parsing_state.enable_macros)) {
/* 000311 */ 				return (function () {
/* 000311 */ 					var __accu0__ = self;
/* 000311 */ 					return __call__ (__accu0__.impl_read_macro, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000311 */ 				}) ();
/* 000311 */ 			}
/* 000311 */ 		}
/* 000318 */ 		if (__t__ (__t__ (parsing_state.enable_comments) && __t__ (__eq__ (c, __getitem__ (parsing_state.comment_start, 0))) && (function () {
/* 000318 */ 			var __accu0__ = s;
/* 000318 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000318 */ 		}) ())) {
/* 000320 */ 			return (function () {
/* 000320 */ 				var __accu0__ = self;
/* 000320 */ 				return __call__ (__accu0__.impl_read_comment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000325 */ 		if (__t__ (parsing_state.enable_groups)) {
/* 000326 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_by_open))) {
/* 000327 */ 				return (function () {
/* 000327 */ 					var __accu0__ = self;
/* 000327 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_open', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000327 */ 				}) ();
/* 000327 */ 			}
/* 000329 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_close))) {
/* 000330 */ 				return (function () {
/* 000330 */ 					var __accu0__ = self;
/* 000330 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_close', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000330 */ 		}
/* 000333 */ 		if (__t__ (__t__ (parsing_state.latex_context !== null) && parsing_state.enable_specials)) {
/* 000334 */ 			var sspec = (function () {
/* 000334 */ 				var __accu0__ = parsing_state.latex_context;
/* 000334 */ 				return __call__ (__accu0__.test_for_specials, __accu0__, s, pos, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000334 */ 			}) ();
/* 000337 */ 			(function () {
/* 000337 */ 				var __accu0__ = logger;
/* 000337 */ 				return __call__ (__accu0__.debug, __accu0__, 'tested for specials at ‘%s’ -> %r', __add__ (__getslice__ (s, pos, __add__ (pos, 3), 1), '...'), sspec);
/* 000337 */ 			}) ();
/* 000339 */ 			if (__t__ (sspec !== null)) {
/* 000340 */ 				return (function () {
/* 000340 */ 					var __accu0__ = self;
/* 000341 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, __call__ (len, null, sspec.specials_chars)), pre_space: pre_space}));
/* 000341 */ 				}) ();
/* 000341 */ 			}
/* 000341 */ 		}
/* 000346 */ 		return (function () {
/* 000346 */ 			var __accu0__ = self;
/* 000346 */ 			return __call__ (__accu0__.impl_char_token, __accu0__, c, pos, __add__ (pos, 1), parsing_state, pre_space);
/* 000346 */ 		}) ();
/* 000346 */ 	});},
/* 000349 */ 	get impl_peek_space_chars () {return __get__ (this, function (self, s, pos, parsing_state) {
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
/* 000364 */ 		var p2 = pos;
/* 000368 */ 		var space = '';
/* 000370 */ 		while (__t__ (true)) {
/* 000371 */ 			if (__t__ (__ge__ (p2, __call__ (len, null, s)))) {
/* 000371 */ 				break;
/* 000371 */ 			}
/* 000373 */ 			var c = __getitem__ (s, p2);
/* 000374 */ 			if (__t__ (!__t__ (((function () {
/* 000374 */ 				var __accu0__ = c;
/* 000374 */ 				return __call__ (__accu0__.isspace, __accu0__);
/* 000374 */ 			}) ())))) {
/* 000374 */ 				break;
/* 000374 */ 			}
/* 000376 */ 			var space = __call__ (__iadd__, null, space, c);
/* 000377 */ 			var p2 = __call__ (__iadd__, null, p2, 1);
/* 000377 */ 		}
/* 000389 */ 		return tuple ([space, pos, p2]);
/* 000389 */ 	});},
/* 000392 */ 	get impl_char_token () {return __get__ (this, function (self, c, pos, pos_end, parsing_state, pre_space) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000399 */ 		if (__t__ (__in__ (c, parsing_state.forbidden_characters))) {
/* 000403 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: self.s, pos: pos, msg: (function () {
/* 000403 */ 				var __accu0__ = 'Character is forbidden here: ‘{}’ ({:#x})';
/* 000403 */ 				return __call__ (__accu0__.format, __accu0__, c, __call__ (ord, null, c));
/* 000408 */ 			}) (), error_type_info: dict ({'what': 'token_forbidden_character', 'forbidden_character': c}), recovery_token_placeholder: (function () {
/* 000408 */ 				var __accu0__ = self;
/* 000408 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000408 */ 			}) (), recovery_token_at_pos: pos_end}));
/* 000408 */ 			__except0__.__cause__ = null;
/* 000408 */ 			throw __except0__;
/* 000408 */ 		}
/* 000417 */ 		return (function () {
/* 000417 */ 			var __accu0__ = self;
/* 000417 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000417 */ 		}) ();
/* 000417 */ 	});},
/* 000420 */ 	get impl_maybe_read_math_mode_delimiter () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000420 */ 		if (arguments.length) {
/* 000420 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000420 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000420 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000420 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000420 */ 					switch (__attrib0__) {
/* 000420 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					}
/* 000420 */ 				}
/* 000420 */ 			}
/* 000420 */ 		}
/* 000420 */ 		else {
/* 000420 */ 		}
/* 000430 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000432 */ 			var expecting_close = parsing_state._math_expecting_close_delim_info;
/* 000435 */ 			if (__t__ (expecting_close !== null)) {
/* 000436 */ 				var expecting_close_delim = __getitem__ (expecting_close, 'close_delim');
/* 000437 */ 				var expecting_close_tok = __getitem__ (expecting_close, 'tok');
/* 000438 */ 				(function () {
/* 000438 */ 					var __accu0__ = logger;
/* 000438 */ 					return __call__ (__accu0__.debug, __accu0__, 'expecting close math mode delimiter: delim %r, tok %r', expecting_close_delim, expecting_close_tok);
/* 000438 */ 				}) ();
/* 000440 */ 				if (__t__ ((function () {
/* 000440 */ 					var __accu0__ = s;
/* 000440 */ 					return __call__ (__accu0__.startswith, __accu0__, expecting_close_delim, pos);
/* 000440 */ 				}) ())) {
/* 000441 */ 					(function () {
/* 000441 */ 						var __accu0__ = logger;
/* 000441 */ 						return __call__ (__accu0__.debug, __accu0__, 'we did encounter that expected delim & tok at pos = %r;we have s[pos:pos+10]=%r', pos, __getslice__ (s, pos, __add__ (pos, 10), 1));
/* 000441 */ 					}) ();
/* 000444 */ 					return (function () {
/* 000444 */ 						var __accu0__ = self;
/* 000447 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: expecting_close_tok, arg: expecting_close_delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, expecting_close_delim)), pre_space: pre_space}));
/* 000447 */ 					}) ();
/* 000447 */ 				}
/* 000447 */ 			}
/* 000447 */ 		}
/* 000459 */ 		var __iterable0__ = parsing_state._math_all_delims_by_len;
/* 000459 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000459 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000459 */ 			var delim = __left0__ [0];
/* 000459 */ 			var tok_type = __left0__ [1];
/* 000460 */ 			if (__t__ ((function () {
/* 000460 */ 				var __accu0__ = s;
/* 000460 */ 				return __call__ (__accu0__.startswith, __accu0__, delim, pos);
/* 000460 */ 			}) ())) {
/* 000461 */ 				(function () {
/* 000461 */ 					var __accu0__ = logger;
/* 000461 */ 					return __call__ (__accu0__.debug, __accu0__, 'Encountered opening math delim %r (tok %r) at pos = %r;we have s[pos:pos+10]=%r', delim, tok_type, pos, __getslice__ (s, pos, __add__ (pos, 10), 1));
/* 000461 */ 				}) ();
/* 000464 */ 				return (function () {
/* 000464 */ 					var __accu0__ = self;
/* 000465 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: tok_type, arg: delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, delim)), pre_space: pre_space}));
/* 000465 */ 				}) ();
/* 000465 */ 			}
/* 000465 */ 		}
/* 000468 */ 		return null;
/* 000468 */ 	});},
/* 000471 */ 	get impl_read_macro () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000483 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.macro_escape_char))) {
/* 000484 */ 			var __except0__ = __call__ (ValueError, null, "Internal error, expected '\\' in impl_read_macro()");
/* 000484 */ 			__except0__.__cause__ = null;
/* 000484 */ 			throw __except0__;
/* 000484 */ 		}
/* 000488 */ 		if (__t__ (__ge__ (__add__ (pos, 1), __call__ (len, null, s)))) {
/* 000493 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, pos: __add__ (pos, 1), msg: (function () {
/* 000493 */ 				var __accu0__ = 'Expected macro name after ‘{}’ escape character';
/* 000493 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char);
/* 000499 */ 			}) (), error_type_info: dict ({'what': 'token_end_of_stream_immediately_after_escape_character'}), recovery_token_placeholder: (function () {
/* 000499 */ 				var __accu0__ = self;
/* 000499 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pos: pos, pos_end: pos, pre_space: pre_space}));
/* 000506 */ 			}) (), recovery_token_at_pos: __call__ (len, null, s)}));
/* 000506 */ 			__except0__.__cause__ = null;
/* 000506 */ 			throw __except0__;
/* 000506 */ 		}
/* 000509 */ 		var c = __getitem__ (s, __add__ (pos, 1));
/* 000510 */ 		var macro = c;
/* 000513 */ 		var isalphamacro = __in__ (c, parsing_state.macro_alpha_chars);
/* 000514 */ 		var posi = __add__ (pos, 2);
/* 000515 */ 		if (__t__ (isalphamacro)) {
/* 000516 */ 			while (__t__ (__t__ (__lt__ (posi, __call__ (len, null, s))) && __in__ (__getitem__ (s, posi), parsing_state.macro_alpha_chars))) {
/* 000517 */ 				var macro = __call__ (__iadd__, null, macro, __getitem__ (s, posi));
/* 000518 */ 				var posi = __call__ (__iadd__, null, posi, 1);
/* 000518 */ 			}
/* 000518 */ 		}
/* 000521 */ 		var post_space = '';
/* 000522 */ 		if (__t__ (isalphamacro)) {
/* 000524 */ 			var __left0__ = (function () {
/* 000524 */ 				var __accu0__ = self;
/* 000524 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, posi, parsing_state);
/* 000524 */ 			}) ();
/* 000524 */ 			var post_space = __left0__ [0];
/* 000524 */ 			var post_space_pos = __left0__ [1];
/* 000524 */ 			var post_space_pos_end = __left0__ [2];
/* 000527 */ 			if (__t__ (__ge__ ((function () {
/* 000527 */ 				var __accu0__ = post_space;
/* 000527 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000527 */ 			}) (), 2))) {
/* 000529 */ 				var newline_rel_pos = (function () {
/* 000529 */ 					var __accu0__ = post_space;
/* 000529 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000529 */ 				}) ();
/* 000530 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000531 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000531 */ 			}
/* 000533 */ 			var posi = post_space_pos_end;
/* 000533 */ 		}
/* 000535 */ 		return (function () {
/* 000535 */ 			var __accu0__ = self;
/* 000535 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'macro', arg: macro, pos: pos, pos_end: posi, pre_space: pre_space, post_space: post_space}));
/* 000535 */ 		}) ();
/* 000535 */ 	});},
/* 000545 */ 	rx_environment_name: (function () {
/* 000545 */ 		var __accu0__ = re;
/* 000545 */ 		return __call__ (__accu0__.compile, __accu0__, '\\s*\\{(?P<environmentname>[A-Za-z0-9*._ :/!^()\\[\\]-]+)\\}');
/* 000544 */ 	}) (),
/* 000551 */ 	get parse_latex_environment_name () {return __get__ (this, function (self, pos, beginend, pos_envname) {
/* 000551 */ 		if (arguments.length) {
/* 000551 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000551 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000551 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000551 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000551 */ 					switch (__attrib0__) {
/* 000551 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'pos_envname': var pos_envname = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 					}
/* 000551 */ 				}
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 		else {
/* 000551 */ 		}
/* 000572 */ 		var envmatch = (function () {
/* 000572 */ 			var __accu0__ = self.rx_environment_name;
/* 000572 */ 			return __call__ (__accu0__.match, __accu0__, __getslice__ (self.s, pos_envname, null, 1));
/* 000572 */ 		}) ();
/* 000573 */ 		if (__t__ (envmatch === null)) {
/* 000574 */ 			return tuple ([null, null]);
/* 000574 */ 		}
/* 000576 */ 		var envmatch_end_pos = __add__ (pos_envname, (function () {
/* 000576 */ 			var __accu0__ = envmatch;
/* 000576 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000576 */ 		}) ());
/* 000578 */ 		return tuple ([(function () {
/* 000578 */ 			var __accu0__ = envmatch;
/* 000578 */ 			return __call__ (__accu0__.group, __accu0__, 'environmentname');
/* 000578 */ 		}) (), envmatch_end_pos]);
/* 000578 */ 	});},
/* 000581 */ 	get impl_read_environment () {return __get__ (this, function (self, s, pos, parsing_state, beginend, pre_space) {
/* 000581 */ 		if (arguments.length) {
/* 000581 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000581 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000581 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000581 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000581 */ 					switch (__attrib0__) {
/* 000581 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 					}
/* 000581 */ 				}
/* 000581 */ 			}
/* 000581 */ 		}
/* 000581 */ 		else {
/* 000581 */ 		}
/* 000592 */ 		if (__t__ (__ne__ (__getslice__ (s, pos, __add__ (__add__ (pos, 1), __call__ (len, null, beginend)), 1), __add__ (parsing_state.macro_escape_char, beginend)))) {
/* 000594 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000594 */ 				var __accu0__ = 'Internal error, expected ‘{}{}’ in read_environment()';
/* 000594 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char, beginend);
/* 000594 */ 			}) ());
/* 000594 */ 			__except0__.__cause__ = null;
/* 000594 */ 			throw __except0__;
/* 000594 */ 		}
/* 000598 */ 		var pos_envname = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000601 */ 		var __left0__ = (function () {
/* 000601 */ 			var __accu0__ = self;
/* 000601 */ 			return __call__ (__accu0__.parse_latex_environment_name, __accu0__, pos, beginend, pos_envname);
/* 000601 */ 		}) ();
/* 000601 */ 		var environment_name = __left0__ [0];
/* 000601 */ 		var environment_pos_end = __left0__ [1];
/* 000603 */ 		(function () {
/* 000603 */ 			var __accu0__ = logger;
/* 000606 */ 			return __call__ (__accu0__.debug, __accu0__, 'Getting environment name at %r -> %r, is {align}?=%r', __add__ (__add__ ('...|', __getslice__ (s, pos_envname, __add__ (pos_envname, 35), 1)), '|...'), environment_pos_end, __eq__ (__getslice__ (s, pos_envname, __add__ (pos_envname, __call__ (len, null, '{align}')), 1), '{align}'));
/* 000606 */ 		}) ();
/* 000609 */ 		if (__t__ (environment_name === null)) {
/* 000610 */ 			var tokarg = __add__ (parsing_state.macro_escape_char, beginend);
/* 000613 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, msg: (function () {
/* 000613 */ 				var __accu0__ = 'Bad ‘\\{}’ call: expected {{environmentname}}';
/* 000613 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000627 */ 			}) (), pos: pos, error_type_info: dict ({'what': 'token_error_parse_beginend_environment_name', 'beginend': beginend, 'macro_beginend': tokarg}), recovery_token_placeholder: __call__ (LatexToken, null, __kwargtrans__ ({tok: 'char', arg: tokarg, pos: pos, pos_end: __add__ (pos, __call__ (len, null, tokarg)), pre_space: pre_space})), recovery_token_at_pos: __add__ (pos, __call__ (len, null, tokarg))}));
/* 000627 */ 			__except0__.__cause__ = null;
/* 000627 */ 			throw __except0__;
/* 000627 */ 		}
/* 000630 */ 		var env_token = (function () {
/* 000630 */ 			var __accu0__ = self;
/* 000630 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: __add__ (beginend, '_environment'), arg: environment_name, pos: pos, pos_end: environment_pos_end, pre_space: pre_space}));
/* 000630 */ 		}) ();
/* 000637 */ 		(function () {
/* 000637 */ 			var __accu0__ = logger;
/* 000637 */ 			return __call__ (__accu0__.debug, __accu0__, 'read environment token %r', env_token);
/* 000637 */ 		}) ();
/* 000638 */ 		return env_token;
/* 000638 */ 	});},
/* 000640 */ 	get impl_read_comment () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000640 */ 		if (arguments.length) {
/* 000640 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000640 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000640 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000640 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000640 */ 					switch (__attrib0__) {
/* 000640 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 					}
/* 000640 */ 				}
/* 000640 */ 			}
/* 000640 */ 		}
/* 000640 */ 		else {
/* 000640 */ 		}
/* 000649 */ 		if (__t__ (!__t__ (((function () {
/* 000649 */ 			var __accu0__ = s;
/* 000649 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000649 */ 		}) ())))) {
/* 000650 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000650 */ 				var __accu0__ = 'Internal error, expected comment start ‘{}’ in read_comment()';
/* 000650 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.comment_start);
/* 000650 */ 			}) ());
/* 000650 */ 			__except0__.__cause__ = null;
/* 000650 */ 			throw __except0__;
/* 000650 */ 		}
/* 000653 */ 		var pos_inner_start = __add__ (pos, __call__ (len, null, parsing_state.comment_start));
/* 000655 */ 		var sppos = (function () {
/* 000655 */ 			var __accu0__ = s;
/* 000655 */ 			return __call__ (__accu0__.find, __accu0__, '\n', pos_inner_start);
/* 000655 */ 		}) ();
/* 000656 */ 		if (__t__ (__eq__ (sppos, __neg__ (1)))) {
/* 000658 */ 			var comment_pos_end = __call__ (len, null, s);
/* 000659 */ 			var comment_with_whitespace_pos_end = __call__ (len, null, s);
/* 000660 */ 			var post_space = '';
/* 000660 */ 		}
/* 000661 */ 		else {
/* 000665 */ 			var __left0__ = (function () {
/* 000665 */ 				var __accu0__ = self;
/* 000665 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, sppos, parsing_state);
/* 000665 */ 			}) ();
/* 000665 */ 			var post_space = __left0__ [0];
/* 000665 */ 			var post_space_pos = __left0__ [1];
/* 000665 */ 			var post_space_pos_end = __left0__ [2];
/* 000668 */ 			if (__t__ (__ge__ ((function () {
/* 000668 */ 				var __accu0__ = post_space;
/* 000668 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000668 */ 			}) (), 2))) {
/* 000670 */ 				var newline_rel_pos = (function () {
/* 000670 */ 					var __accu0__ = post_space;
/* 000670 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000670 */ 				}) ();
/* 000671 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000672 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000672 */ 			}
/* 000674 */ 			var comment_pos_end = sppos;
/* 000675 */ 			var comment_with_whitespace_pos_end = post_space_pos_end;
/* 000675 */ 		}
/* 000677 */ 		return (function () {
/* 000677 */ 			var __accu0__ = self;
/* 000677 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'comment', arg: __getslice__ (s, pos_inner_start, comment_pos_end, 1), pos: pos, pos_end: comment_with_whitespace_pos_end, pre_space: pre_space, post_space: post_space}));
/* 000677 */ 		}) ();
/* 000677 */ 	});}
/* 000677 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreader.map