/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:23:00
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
/* 000037 */ export {LatexWalkerTokenParseError, LatexTokenReaderBase, LatexToken, LatexWalkerEndOfStream};
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
/* 000220 */ 		// pass;
/* 000225 */ 		var s = self.s;
/* 000226 */ 		var len_s = __call__ (len, null, s);
/* 000227 */ 		var pos = self._pos;
/* 000230 */ 		var __left0__ = (function () {
/* 000230 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, pos, parsing_state);
/* 000230 */ 		}) ();
/* 000230 */ 		var pre_space = __left0__ [0];
/* 000230 */ 		var space_pos = __left0__ [1];
/* 000230 */ 		var space_pos_end = __left0__ [2];
/* 000233 */ 		if (__t__ (__t__ (parsing_state.enable_double_newline_paragraphs) && __ge__ ((function () {
/* 000233 */ 			var __accu0__ = pre_space;
/* 000233 */ 			return __call__ (__accu0__.count, __accu0__, '\n');
/* 000233 */ 		}) (), 2))) {
/* 000238 */ 			var newpar_rel_pos_start = (function () {
/* 000238 */ 				var __accu0__ = pre_space;
/* 000238 */ 				return __call__ (__accu0__.find, __accu0__, '\n');
/* 000238 */ 			}) ();
/* 000239 */ 			var newpar_rel_pos_end = __add__ ((function () {
/* 000239 */ 				var __accu0__ = pre_space;
/* 000239 */ 				return __call__ (__accu0__.rfind, __accu0__, '\n');
/* 000239 */ 			}) (), 1);
/* 000241 */ 			var pre_space = __getslice__ (pre_space, 0, newpar_rel_pos_start, 1);
/* 000242 */ 			var newpar_pos_start = __add__ (space_pos, newpar_rel_pos_start);
/* 000243 */ 			var newpar_pos_end = __add__ (space_pos, newpar_rel_pos_end);
/* 000245 */ 			if (__t__ (parsing_state.latex_context !== null)) {
/* 000246 */ 				try {
/* 000247 */ 					var sspec = (function () {
/* 000247 */ 						var __accu0__ = parsing_state.latex_context;
/* 000247 */ 						return __call__ (__accu0__.get_specials_spec, __accu0__, __kwargtrans__ ({specials_chars: '\n\n'}));
/* 000247 */ 					}) ();
/* 000247 */ 				}
/* 000247 */ 				catch (__except0__) {
/* 000247 */ 					if (isinstance (__except0__, KeyError)) {
/* 000251 */ 						var sspec = null;
/* 000251 */ 					}
/* 000251 */ 					else {
/* 000251 */ 						throw __except0__;
/* 000251 */ 					}
/* 000251 */ 				}
/* 000255 */ 				if (__t__ (__t__ (sspec !== null) && __eq__ (sspec.specials_chars, '\n\n'))) {
/* 000256 */ 					return (function () {
/* 000256 */ 						var __accu0__ = self;
/* 000256 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000256 */ 					}) ();
/* 000256 */ 				}
/* 000256 */ 			}
/* 000261 */ 			return (function () {
/* 000261 */ 				var __accu0__ = self;
/* 000261 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '\n\n', pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000261 */ 			}) ();
/* 000261 */ 		}
/* 000268 */ 		var pos = space_pos_end;
/* 000269 */ 		if (__t__ (__ge__ (pos, len_s))) {
/* 000270 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null, __kwargtrans__ ({final_space: pre_space}));
/* 000270 */ 			__except0__.__cause__ = null;
/* 000270 */ 			throw __except0__;
/* 000270 */ 		}
/* 000274 */ 		var c = __getitem__ (s, pos);
/* 000276 */ 		// pass;
/* 000281 */ 		if (__t__ (__t__ (__in__ (c, parsing_state._math_delims_info_startchars)) && parsing_state.enable_math)) {
/* 000282 */ 			var t = (function () {
/* 000282 */ 				var __accu0__ = self;
/* 000282 */ 				return __call__ (__accu0__.impl_maybe_read_math_mode_delimiter, __accu0__, s, pos, parsing_state, pre_space);
/* 000282 */ 			}) ();
/* 000283 */ 			if (__t__ (t !== null)) {
/* 000284 */ 				return t;
/* 000284 */ 			}
/* 000284 */ 		}
/* 000287 */ 		if (__t__ (__eq__ (c, parsing_state.macro_escape_char))) {
/* 000290 */ 			if (__t__ (parsing_state.enable_environments)) {
/* 000291 */ 				if (__t__ ((function () {
/* 000291 */ 					var __accu0__ = s;
/* 000291 */ 					return __call__ (__accu0__.startswith, __accu0__, 'begin', __add__ (pos, 1));
/* 000291 */ 				}) ())) {
/* 000292 */ 					var beginend = 'begin';
/* 000292 */ 				}
/* 000293 */ 				else if (__t__ ((function () {
/* 000293 */ 					var __accu0__ = s;
/* 000293 */ 					return __call__ (__accu0__.startswith, __accu0__, 'end', __add__ (pos, 1));
/* 000293 */ 				}) ())) {
/* 000294 */ 					var beginend = 'end';
/* 000294 */ 				}
/* 000295 */ 				else {
/* 000296 */ 					var beginend = null;
/* 000296 */ 				}
/* 000298 */ 				// pass;
/* 000303 */ 				if (__t__ (beginend)) {
/* 000304 */ 					var pastbeginendpos = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000305 */ 					if (__t__ (__t__ (__ge__ (pastbeginendpos, __call__ (len, null, s))) || !__in__ (__getitem__ (s, pastbeginendpos), parsing_state.macro_alpha_chars))) {
/* 000309 */ 						return (function () {
/* 000309 */ 							var __accu0__ = self;
/* 000309 */ 							return __call__ (__accu0__.impl_read_environment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, beginend: beginend, pre_space: pre_space}));
/* 000309 */ 						}) ();
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000316 */ 			if (__t__ (parsing_state.enable_macros)) {
/* 000317 */ 				return (function () {
/* 000317 */ 					var __accu0__ = self;
/* 000317 */ 					return __call__ (__accu0__.impl_read_macro, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000317 */ 				}) ();
/* 000317 */ 			}
/* 000317 */ 		}
/* 000322 */ 		if (__t__ (__t__ (__eq__ (c, parsing_state.comment_char)) && parsing_state.enable_comments)) {
/* 000323 */ 			return (function () {
/* 000323 */ 				var __accu0__ = self;
/* 000323 */ 				return __call__ (__accu0__.impl_read_comment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000323 */ 			}) ();
/* 000323 */ 		}
/* 000328 */ 		if (__t__ (parsing_state.enable_groups)) {
/* 000329 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_by_open))) {
/* 000330 */ 				return (function () {
/* 000330 */ 					var __accu0__ = self;
/* 000330 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_open', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000332 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_close))) {
/* 000333 */ 				return (function () {
/* 000333 */ 					var __accu0__ = self;
/* 000333 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_close', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000333 */ 				}) ();
/* 000333 */ 			}
/* 000333 */ 		}
/* 000336 */ 		if (__t__ (__t__ (parsing_state.latex_context !== null) && parsing_state.enable_specials)) {
/* 000337 */ 			var sspec = (function () {
/* 000337 */ 				var __accu0__ = parsing_state.latex_context;
/* 000337 */ 				return __call__ (__accu0__.test_for_specials, __accu0__, s, pos, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000337 */ 			}) ();
/* 000340 */ 			if (__t__ (sspec !== null)) {
/* 000341 */ 				return (function () {
/* 000341 */ 					var __accu0__ = self;
/* 000342 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, __call__ (len, null, sspec.specials_chars)), pre_space: pre_space}));
/* 000342 */ 				}) ();
/* 000342 */ 			}
/* 000342 */ 		}
/* 000347 */ 		return (function () {
/* 000347 */ 			var __accu0__ = self;
/* 000347 */ 			return __call__ (__accu0__.impl_char_token, __accu0__, c, pos, __add__ (pos, 1), parsing_state, pre_space);
/* 000347 */ 		}) ();
/* 000347 */ 	});},
/* 000350 */ 	get impl_peek_space_chars () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000365 */ 		var p2 = pos;
/* 000369 */ 		var space = '';
/* 000371 */ 		while (__t__ (true)) {
/* 000372 */ 			if (__t__ (__ge__ (p2, __call__ (len, null, s)))) {
/* 000372 */ 				break;
/* 000372 */ 			}
/* 000374 */ 			var c = __getitem__ (s, p2);
/* 000375 */ 			if (__t__ (!__t__ (((function () {
/* 000375 */ 				var __accu0__ = c;
/* 000375 */ 				return __call__ (__accu0__.isspace, __accu0__);
/* 000375 */ 			}) ())))) {
/* 000375 */ 				break;
/* 000375 */ 			}
/* 000377 */ 			var space = __call__ (__iadd__, null, space, c);
/* 000378 */ 			var p2 = __call__ (__iadd__, null, p2, 1);
/* 000378 */ 		}
/* 000390 */ 		return tuple ([space, pos, p2]);
/* 000390 */ 	});},
/* 000393 */ 	get impl_char_token () {return __get__ (this, function (self, c, pos, pos_end, parsing_state, pre_space) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000400 */ 		if (__t__ (__in__ (c, parsing_state.forbidden_characters))) {
/* 000404 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: self.s, pos: __add__ (pos, 1), msg: (function () {
/* 000404 */ 				var __accu0__ = 'Character is forbidden here: ‘{}’ ({:#x})';
/* 000404 */ 				return __call__ (__accu0__.format, __accu0__, c, __call__ (ord, null, c));
/* 000409 */ 			}) (), error_type_info: dict ({'what': 'token_forbidden_character', 'forbidden_character': c}), recovery_token_placeholder: (function () {
/* 000409 */ 				var __accu0__ = self;
/* 000409 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000409 */ 			}) (), recovery_token_at_pos: pos_end}));
/* 000409 */ 			__except0__.__cause__ = null;
/* 000409 */ 			throw __except0__;
/* 000409 */ 		}
/* 000418 */ 		return (function () {
/* 000418 */ 			var __accu0__ = self;
/* 000418 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000418 */ 		}) ();
/* 000418 */ 	});},
/* 000421 */ 	get impl_maybe_read_math_mode_delimiter () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000431 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000433 */ 			var expecting_close = parsing_state._math_expecting_close_delim_info;
/* 000436 */ 			if (__t__ (expecting_close !== null)) {
/* 000437 */ 				var expecting_close_delim = __getitem__ (expecting_close, 'close_delim');
/* 000438 */ 				var expecting_close_tok = __getitem__ (expecting_close, 'tok');
/* 000439 */ 				// pass;
/* 000443 */ 				if (__t__ ((function () {
/* 000443 */ 					var __accu0__ = s;
/* 000443 */ 					return __call__ (__accu0__.startswith, __accu0__, expecting_close_delim, pos);
/* 000443 */ 				}) ())) {
/* 000444 */ 					// pass;
/* 000449 */ 					return (function () {
/* 000449 */ 						var __accu0__ = self;
/* 000452 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: expecting_close_tok, arg: expecting_close_delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, expecting_close_delim)), pre_space: pre_space}));
/* 000452 */ 					}) ();
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 		}
/* 000464 */ 		var __iterable0__ = parsing_state._math_all_delims_by_len;
/* 000464 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000464 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000464 */ 			var delim = __left0__ [0];
/* 000464 */ 			var tok_type = __left0__ [1];
/* 000465 */ 			if (__t__ ((function () {
/* 000465 */ 				var __accu0__ = s;
/* 000465 */ 				return __call__ (__accu0__.startswith, __accu0__, delim, pos);
/* 000465 */ 			}) ())) {
/* 000466 */ 				// pass;
/* 000471 */ 				return (function () {
/* 000471 */ 					var __accu0__ = self;
/* 000472 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: tok_type, arg: delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, delim)), pre_space: pre_space}));
/* 000472 */ 				}) ();
/* 000472 */ 			}
/* 000472 */ 		}
/* 000475 */ 		return null;
/* 000475 */ 	});},
/* 000478 */ 	get impl_read_macro () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000478 */ 		if (arguments.length) {
/* 000478 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000478 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000478 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000478 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000478 */ 					switch (__attrib0__) {
/* 000478 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 					}
/* 000478 */ 				}
/* 000478 */ 			}
/* 000478 */ 		}
/* 000478 */ 		else {
/* 000478 */ 		}
/* 000490 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.macro_escape_char))) {
/* 000491 */ 			var __except0__ = __call__ (ValueError, null, "Internal error, expected '\\' in impl_read_macro()");
/* 000491 */ 			__except0__.__cause__ = null;
/* 000491 */ 			throw __except0__;
/* 000491 */ 		}
/* 000495 */ 		if (__t__ (__ge__ (__add__ (pos, 1), __call__ (len, null, s)))) {
/* 000500 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, pos: __add__ (pos, 1), msg: (function () {
/* 000500 */ 				var __accu0__ = 'Expected macro name after ‘{}’ escape character';
/* 000500 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char);
/* 000506 */ 			}) (), error_type_info: dict ({'what': 'token_end_of_stream_immediately_after_escape_character'}), recovery_token_placeholder: (function () {
/* 000506 */ 				var __accu0__ = self;
/* 000506 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pos: pos, pos_end: pos, pre_space: pre_space}));
/* 000513 */ 			}) (), recovery_token_at_pos: __call__ (len, null, s)}));
/* 000513 */ 			__except0__.__cause__ = null;
/* 000513 */ 			throw __except0__;
/* 000513 */ 		}
/* 000516 */ 		var c = __getitem__ (s, __add__ (pos, 1));
/* 000517 */ 		var macro = c;
/* 000520 */ 		var isalphamacro = __in__ (c, parsing_state.macro_alpha_chars);
/* 000521 */ 		var posi = __add__ (pos, 2);
/* 000522 */ 		if (__t__ (isalphamacro)) {
/* 000523 */ 			while (__t__ (__t__ (__lt__ (posi, __call__ (len, null, s))) && __in__ (__getitem__ (s, posi), parsing_state.macro_alpha_chars))) {
/* 000524 */ 				var macro = __call__ (__iadd__, null, macro, __getitem__ (s, posi));
/* 000525 */ 				var posi = __call__ (__iadd__, null, posi, 1);
/* 000525 */ 			}
/* 000525 */ 		}
/* 000528 */ 		var post_space = '';
/* 000529 */ 		if (__t__ (isalphamacro)) {
/* 000531 */ 			var __left0__ = (function () {
/* 000531 */ 				var __accu0__ = self;
/* 000531 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, posi, parsing_state);
/* 000531 */ 			}) ();
/* 000531 */ 			var post_space = __left0__ [0];
/* 000531 */ 			var post_space_pos = __left0__ [1];
/* 000531 */ 			var post_space_pos_end = __left0__ [2];
/* 000534 */ 			if (__t__ (__ge__ ((function () {
/* 000534 */ 				var __accu0__ = post_space;
/* 000534 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000534 */ 			}) (), 2))) {
/* 000536 */ 				var newline_rel_pos = (function () {
/* 000536 */ 					var __accu0__ = post_space;
/* 000536 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000536 */ 				}) ();
/* 000537 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000538 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000538 */ 			}
/* 000540 */ 			var posi = post_space_pos_end;
/* 000540 */ 		}
/* 000542 */ 		return (function () {
/* 000542 */ 			var __accu0__ = self;
/* 000542 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'macro', arg: macro, pos: pos, pos_end: posi, pre_space: pre_space, post_space: post_space}));
/* 000542 */ 		}) ();
/* 000542 */ 	});},
/* 000552 */ 	rx_environment_name: (function () {
/* 000552 */ 		var __accu0__ = re;
/* 000552 */ 		return __call__ (__accu0__.compile, __accu0__, '\\s*\\{(?P<environmentname>[A-Za-z0-9*._ :/!^()\\[\\]-]+)\\}');
/* 000551 */ 	}) (),
/* 000558 */ 	get parse_latex_environment_name () {return __get__ (this, function (self, pos, beginend, pos_envname) {
/* 000558 */ 		if (arguments.length) {
/* 000558 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000558 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000558 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000558 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000558 */ 					switch (__attrib0__) {
/* 000558 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 						case 'pos_envname': var pos_envname = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 					}
/* 000558 */ 				}
/* 000558 */ 			}
/* 000558 */ 		}
/* 000558 */ 		else {
/* 000558 */ 		}
/* 000579 */ 		var envmatch = (function () {
/* 000579 */ 			var __accu0__ = self.rx_environment_name;
/* 000579 */ 			return __call__ (__accu0__.match, __accu0__, __getslice__ (self.s, pos_envname, null, 1));
/* 000579 */ 		}) ();
/* 000580 */ 		if (__t__ (envmatch === null)) {
/* 000581 */ 			return tuple ([null, null]);
/* 000581 */ 		}
/* 000583 */ 		var envmatch_end_pos = __add__ (pos_envname, (function () {
/* 000583 */ 			var __accu0__ = envmatch;
/* 000583 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000583 */ 		}) ());
/* 000585 */ 		return tuple ([(function () {
/* 000585 */ 			var __accu0__ = envmatch;
/* 000585 */ 			return __call__ (__accu0__.group, __accu0__, 'environmentname');
/* 000585 */ 		}) (), envmatch_end_pos]);
/* 000585 */ 	});},
/* 000588 */ 	get impl_read_environment () {return __get__ (this, function (self, s, pos, parsing_state, beginend, pre_space) {
/* 000588 */ 		if (arguments.length) {
/* 000588 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000588 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000588 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000588 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000588 */ 					switch (__attrib0__) {
/* 000588 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 					}
/* 000588 */ 				}
/* 000588 */ 			}
/* 000588 */ 		}
/* 000588 */ 		else {
/* 000588 */ 		}
/* 000599 */ 		if (__t__ (__ne__ (__getslice__ (s, pos, __add__ (__add__ (pos, 1), __call__ (len, null, beginend)), 1), __add__ (parsing_state.macro_escape_char, beginend)))) {
/* 000601 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000601 */ 				var __accu0__ = 'Internal error, expected ‘{}{}’ in read_environment()';
/* 000601 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char, beginend);
/* 000601 */ 			}) ());
/* 000601 */ 			__except0__.__cause__ = null;
/* 000601 */ 			throw __except0__;
/* 000601 */ 		}
/* 000605 */ 		var pos_envname = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000608 */ 		var __left0__ = (function () {
/* 000608 */ 			var __accu0__ = self;
/* 000608 */ 			return __call__ (__accu0__.parse_latex_environment_name, __accu0__, pos, beginend, pos_envname);
/* 000608 */ 		}) ();
/* 000608 */ 		var environment_name = __left0__ [0];
/* 000608 */ 		var environment_pos_end = __left0__ [1];
/* 000610 */ 		// pass;
/* 000618 */ 		if (__t__ (environment_name === null)) {
/* 000619 */ 			var tokarg = __add__ (parsing_state.macro_escape_char, beginend);
/* 000622 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, msg: (function () {
/* 000622 */ 				var __accu0__ = 'Bad ‘\\{}’ call: expected {{environmentname}}';
/* 000622 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000636 */ 			}) (), pos: pos, error_type_info: dict ({'what': 'token_error_parse_beginend_environment_name', 'beginend': beginend, 'macro_beginend': tokarg}), recovery_token_placeholder: __call__ (LatexToken, null, __kwargtrans__ ({tok: 'char', arg: tokarg, pos: pos, pos_end: __add__ (pos, __call__ (len, null, tokarg)), pre_space: pre_space})), recovery_token_at_pos: __add__ (pos, __call__ (len, null, tokarg))}));
/* 000636 */ 			__except0__.__cause__ = null;
/* 000636 */ 			throw __except0__;
/* 000636 */ 		}
/* 000639 */ 		var env_token = (function () {
/* 000639 */ 			var __accu0__ = self;
/* 000639 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: __add__ (beginend, '_environment'), arg: environment_name, pos: pos, pos_end: environment_pos_end, pre_space: pre_space}));
/* 000639 */ 		}) ();
/* 000646 */ 		// pass;
/* 000649 */ 		return env_token;
/* 000649 */ 	});},
/* 000651 */ 	get impl_read_comment () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000651 */ 		if (arguments.length) {
/* 000651 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000651 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000651 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000651 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000651 */ 					switch (__attrib0__) {
/* 000651 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 					}
/* 000651 */ 				}
/* 000651 */ 			}
/* 000651 */ 		}
/* 000651 */ 		else {
/* 000651 */ 		}
/* 000660 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.comment_char))) {
/* 000661 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000661 */ 				var __accu0__ = 'Internal error, expected comment char ‘{}’ in read_comment()';
/* 000661 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.comment_char);
/* 000661 */ 			}) ());
/* 000661 */ 			__except0__.__cause__ = null;
/* 000661 */ 			throw __except0__;
/* 000661 */ 		}
/* 000664 */ 		var sppos = (function () {
/* 000664 */ 			var __accu0__ = s;
/* 000664 */ 			return __call__ (__accu0__.find, __accu0__, '\n', pos);
/* 000664 */ 		}) ();
/* 000665 */ 		if (__t__ (__eq__ (sppos, __neg__ (1)))) {
/* 000667 */ 			var comment_pos_end = __call__ (len, null, s);
/* 000668 */ 			var comment_with_whitespace_pos_end = __call__ (len, null, s);
/* 000669 */ 			var post_space = '';
/* 000669 */ 		}
/* 000670 */ 		else {
/* 000674 */ 			var __left0__ = (function () {
/* 000674 */ 				var __accu0__ = self;
/* 000674 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, sppos, parsing_state);
/* 000674 */ 			}) ();
/* 000674 */ 			var post_space = __left0__ [0];
/* 000674 */ 			var post_space_pos = __left0__ [1];
/* 000674 */ 			var post_space_pos_end = __left0__ [2];
/* 000677 */ 			if (__t__ (__ge__ ((function () {
/* 000677 */ 				var __accu0__ = post_space;
/* 000677 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000677 */ 			}) (), 2))) {
/* 000679 */ 				var newline_rel_pos = (function () {
/* 000679 */ 					var __accu0__ = post_space;
/* 000679 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000679 */ 				}) ();
/* 000680 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000681 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000681 */ 			}
/* 000683 */ 			var comment_pos_end = sppos;
/* 000684 */ 			var comment_with_whitespace_pos_end = post_space_pos_end;
/* 000684 */ 		}
/* 000686 */ 		return (function () {
/* 000686 */ 			var __accu0__ = self;
/* 000686 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'comment', arg: __getslice__ (s, __add__ (pos, 1), comment_pos_end, 1), pos: pos, pos_end: comment_with_whitespace_pos_end, pre_space: pre_space, post_space: post_space}));
/* 000686 */ 		}) ();
/* 000686 */ 	});}
/* 000686 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreader.map