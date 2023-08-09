/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 15:47:08
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
/* 000037 */ export {LatexToken, LatexTokenReaderBase, LatexWalkerTokenParseError, LatexWalkerEndOfStream};
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
/* 000226 */ 		// pass;
/* 000231 */ 		var s = self.s;
/* 000232 */ 		var len_s = __call__ (len, null, s);
/* 000233 */ 		var pos = self._pos;
/* 000236 */ 		var __left0__ = (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000236 */ 			return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, pos, parsing_state);
/* 000236 */ 		}) ();
/* 000236 */ 		var pre_space = __left0__ [0];
/* 000236 */ 		var space_pos = __left0__ [1];
/* 000236 */ 		var space_pos_end = __left0__ [2];
/* 000239 */ 		if (__t__ (__t__ (parsing_state.enable_double_newline_paragraphs) && __ge__ ((function () {
/* 000239 */ 			var __accu0__ = pre_space;
/* 000239 */ 			return __call__ (__accu0__.count, __accu0__, '\n');
/* 000239 */ 		}) (), 2))) {
/* 000244 */ 			var newpar_rel_pos_start = (function () {
/* 000244 */ 				var __accu0__ = pre_space;
/* 000244 */ 				return __call__ (__accu0__.find, __accu0__, '\n');
/* 000244 */ 			}) ();
/* 000245 */ 			var newpar_rel_pos_end = __add__ ((function () {
/* 000245 */ 				var __accu0__ = pre_space;
/* 000245 */ 				return __call__ (__accu0__.rfind, __accu0__, '\n');
/* 000245 */ 			}) (), 1);
/* 000247 */ 			var pre_space = __getslice__ (pre_space, 0, newpar_rel_pos_start, 1);
/* 000248 */ 			var newpar_pos_start = __add__ (space_pos, newpar_rel_pos_start);
/* 000249 */ 			var newpar_pos_end = __add__ (space_pos, newpar_rel_pos_end);
/* 000251 */ 			if (__t__ (parsing_state.latex_context !== null)) {
/* 000252 */ 				try {
/* 000253 */ 					var sspec = (function () {
/* 000253 */ 						var __accu0__ = parsing_state.latex_context;
/* 000253 */ 						return __call__ (__accu0__.get_specials_spec, __accu0__, __kwargtrans__ ({specials_chars: '\n\n'}));
/* 000253 */ 					}) ();
/* 000253 */ 				}
/* 000253 */ 				catch (__except0__) {
/* 000253 */ 					if (isinstance (__except0__, KeyError)) {
/* 000257 */ 						var sspec = null;
/* 000257 */ 					}
/* 000257 */ 					else {
/* 000257 */ 						throw __except0__;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000261 */ 				if (__t__ (__t__ (sspec !== null) && __eq__ (sspec.specials_chars, '\n\n'))) {
/* 000262 */ 					return (function () {
/* 000262 */ 						var __accu0__ = self;
/* 000262 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000262 */ 					}) ();
/* 000262 */ 				}
/* 000262 */ 			}
/* 000268 */ 			var par_space_tokens = __getslice__ (s, newpar_pos_start, newpar_pos_end, 1);
/* 000269 */ 			return (function () {
/* 000269 */ 				var __accu0__ = self;
/* 000269 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: par_space_tokens, pos: newpar_pos_start, pos_end: newpar_pos_end, pre_space: pre_space}));
/* 000269 */ 			}) ();
/* 000269 */ 		}
/* 000276 */ 		var pos = space_pos_end;
/* 000277 */ 		if (__t__ (__ge__ (pos, len_s))) {
/* 000278 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null, __kwargtrans__ ({final_space: pre_space}));
/* 000278 */ 			__except0__.__cause__ = null;
/* 000278 */ 			throw __except0__;
/* 000278 */ 		}
/* 000282 */ 		var c = __getitem__ (s, pos);
/* 000287 */ 		if (__t__ (__t__ (__in__ (c, parsing_state._math_delims_info_startchars)) && parsing_state.enable_math)) {
/* 000288 */ 			var t = (function () {
/* 000288 */ 				var __accu0__ = self;
/* 000288 */ 				return __call__ (__accu0__.impl_maybe_read_math_mode_delimiter, __accu0__, s, pos, parsing_state, pre_space);
/* 000288 */ 			}) ();
/* 000289 */ 			if (__t__ (t !== null)) {
/* 000290 */ 				return t;
/* 000290 */ 			}
/* 000290 */ 		}
/* 000293 */ 		if (__t__ (__eq__ (c, parsing_state.macro_escape_char))) {
/* 000296 */ 			if (__t__ (parsing_state.enable_environments)) {
/* 000297 */ 				if (__t__ ((function () {
/* 000297 */ 					var __accu0__ = s;
/* 000297 */ 					return __call__ (__accu0__.startswith, __accu0__, 'begin', __add__ (pos, 1));
/* 000297 */ 				}) ())) {
/* 000298 */ 					var beginend = 'begin';
/* 000298 */ 				}
/* 000299 */ 				else if (__t__ ((function () {
/* 000299 */ 					var __accu0__ = s;
/* 000299 */ 					return __call__ (__accu0__.startswith, __accu0__, 'end', __add__ (pos, 1));
/* 000299 */ 				}) ())) {
/* 000300 */ 					var beginend = 'end';
/* 000300 */ 				}
/* 000301 */ 				else {
/* 000302 */ 					var beginend = null;
/* 000302 */ 				}
/* 000307 */ 				if (__t__ (beginend)) {
/* 000308 */ 					var pastbeginendpos = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000309 */ 					if (__t__ (__t__ (__ge__ (pastbeginendpos, __call__ (len, null, s))) || !__in__ (__getitem__ (s, pastbeginendpos), parsing_state.macro_alpha_chars))) {
/* 000313 */ 						return (function () {
/* 000313 */ 							var __accu0__ = self;
/* 000313 */ 							return __call__ (__accu0__.impl_read_environment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, beginend: beginend, pre_space: pre_space}));
/* 000313 */ 						}) ();
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000320 */ 			if (__t__ (parsing_state.enable_macros)) {
/* 000321 */ 				return (function () {
/* 000321 */ 					var __accu0__ = self;
/* 000321 */ 					return __call__ (__accu0__.impl_read_macro, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000321 */ 				}) ();
/* 000321 */ 			}
/* 000321 */ 		}
/* 000328 */ 		if (__t__ (__t__ (parsing_state.enable_comments) && __t__ (__eq__ (c, __getitem__ (parsing_state.comment_start, 0))) && (function () {
/* 000328 */ 			var __accu0__ = s;
/* 000328 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000328 */ 		}) ())) {
/* 000330 */ 			return (function () {
/* 000330 */ 				var __accu0__ = self;
/* 000330 */ 				return __call__ (__accu0__.impl_read_comment, __accu0__, __kwargtrans__ ({s: s, pos: pos, parsing_state: parsing_state, pre_space: pre_space}));
/* 000330 */ 			}) ();
/* 000330 */ 		}
/* 000335 */ 		if (__t__ (parsing_state.enable_groups)) {
/* 000336 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_by_open))) {
/* 000337 */ 				return (function () {
/* 000337 */ 					var __accu0__ = self;
/* 000337 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_open', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000337 */ 				}) ();
/* 000337 */ 			}
/* 000339 */ 			if (__t__ (__in__ (c, parsing_state._latex_group_delimchars_close))) {
/* 000340 */ 				return (function () {
/* 000340 */ 					var __accu0__ = self;
/* 000340 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'brace_close', arg: c, pos: pos, pos_end: __add__ (pos, 1), pre_space: pre_space}));
/* 000340 */ 				}) ();
/* 000340 */ 			}
/* 000340 */ 		}
/* 000343 */ 		if (__t__ (__t__ (parsing_state.latex_context !== null) && parsing_state.enable_specials)) {
/* 000344 */ 			var sspec = (function () {
/* 000344 */ 				var __accu0__ = parsing_state.latex_context;
/* 000344 */ 				return __call__ (__accu0__.test_for_specials, __accu0__, s, pos, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000344 */ 			}) ();
/* 000349 */ 			if (__t__ (sspec !== null)) {
/* 000350 */ 				return (function () {
/* 000350 */ 					var __accu0__ = self;
/* 000351 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'specials', arg: sspec, pos: pos, pos_end: __add__ (pos, __call__ (len, null, sspec.specials_chars)), pre_space: pre_space}));
/* 000351 */ 				}) ();
/* 000351 */ 			}
/* 000351 */ 		}
/* 000356 */ 		return (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__.impl_char_token, __accu0__, c, pos, __add__ (pos, 1), parsing_state, pre_space);
/* 000356 */ 		}) ();
/* 000356 */ 	});},
/* 000359 */ 	get impl_peek_space_chars () {return __get__ (this, function (self, s, pos, parsing_state) {
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000374 */ 		var p2 = pos;
/* 000378 */ 		var space = '';
/* 000380 */ 		while (__t__ (true)) {
/* 000381 */ 			if (__t__ (__ge__ (p2, __call__ (len, null, s)))) {
/* 000381 */ 				break;
/* 000381 */ 			}
/* 000383 */ 			var c = __getitem__ (s, p2);
/* 000384 */ 			if (__t__ (!__t__ (((function () {
/* 000384 */ 				var __accu0__ = c;
/* 000384 */ 				return __call__ (__accu0__.isspace, __accu0__);
/* 000384 */ 			}) ())))) {
/* 000384 */ 				break;
/* 000384 */ 			}
/* 000386 */ 			var space = __call__ (__iadd__, null, space, c);
/* 000387 */ 			var p2 = __call__ (__iadd__, null, p2, 1);
/* 000387 */ 		}
/* 000399 */ 		return tuple ([space, pos, p2]);
/* 000399 */ 	});},
/* 000402 */ 	get impl_char_token () {return __get__ (this, function (self, c, pos, pos_end, parsing_state, pre_space) {
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000409 */ 		if (__t__ (__in__ (c, parsing_state.forbidden_characters))) {
/* 000413 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: self.s, pos: pos, msg: (function () {
/* 000413 */ 				var __accu0__ = 'Character is forbidden here: ‘{}’ ({:#x})';
/* 000413 */ 				return __call__ (__accu0__.format, __accu0__, c, __call__ (ord, null, c));
/* 000418 */ 			}) (), error_type_info: dict ({'what': 'token_forbidden_character', 'forbidden_character': c}), recovery_token_placeholder: (function () {
/* 000418 */ 				var __accu0__ = self;
/* 000418 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000418 */ 			}) (), recovery_token_at_pos: pos_end}));
/* 000418 */ 			__except0__.__cause__ = null;
/* 000418 */ 			throw __except0__;
/* 000418 */ 		}
/* 000427 */ 		return (function () {
/* 000427 */ 			var __accu0__ = self;
/* 000427 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: c, pos: pos, pos_end: pos_end, pre_space: pre_space}));
/* 000427 */ 		}) ();
/* 000427 */ 	});},
/* 000430 */ 	get impl_maybe_read_math_mode_delimiter () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000440 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000442 */ 			var expecting_close = parsing_state._math_expecting_close_delim_info;
/* 000445 */ 			if (__t__ (expecting_close !== null)) {
/* 000446 */ 				var expecting_close_delim = __getitem__ (expecting_close, 'close_delim');
/* 000447 */ 				var expecting_close_tok = __getitem__ (expecting_close, 'tok');
/* 000448 */ 				// pass;
/* 000452 */ 				if (__t__ ((function () {
/* 000452 */ 					var __accu0__ = s;
/* 000452 */ 					return __call__ (__accu0__.startswith, __accu0__, expecting_close_delim, pos);
/* 000452 */ 				}) ())) {
/* 000453 */ 					// pass;
/* 000458 */ 					return (function () {
/* 000458 */ 						var __accu0__ = self;
/* 000461 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: expecting_close_tok, arg: expecting_close_delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, expecting_close_delim)), pre_space: pre_space}));
/* 000461 */ 					}) ();
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000473 */ 		var __iterable0__ = parsing_state._math_all_delims_by_len;
/* 000473 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000473 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 			var delim = __left0__ [0];
/* 000473 */ 			var tok_type = __left0__ [1];
/* 000474 */ 			if (__t__ ((function () {
/* 000474 */ 				var __accu0__ = s;
/* 000474 */ 				return __call__ (__accu0__.startswith, __accu0__, delim, pos);
/* 000474 */ 			}) ())) {
/* 000475 */ 				// pass;
/* 000480 */ 				return (function () {
/* 000480 */ 					var __accu0__ = self;
/* 000481 */ 					return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: tok_type, arg: delim, pos: pos, pos_end: __add__ (pos, __call__ (len, null, delim)), pre_space: pre_space}));
/* 000481 */ 				}) ();
/* 000481 */ 			}
/* 000481 */ 		}
/* 000484 */ 		return null;
/* 000484 */ 	});},
/* 000487 */ 	get impl_read_macro () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000499 */ 		if (__t__ (__ne__ (__getitem__ (s, pos), parsing_state.macro_escape_char))) {
/* 000500 */ 			var __except0__ = __call__ (ValueError, null, "Internal error, expected '\\' in impl_read_macro()");
/* 000500 */ 			__except0__.__cause__ = null;
/* 000500 */ 			throw __except0__;
/* 000500 */ 		}
/* 000504 */ 		if (__t__ (__ge__ (__add__ (pos, 1), __call__ (len, null, s)))) {
/* 000509 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, pos: __add__ (pos, 1), msg: (function () {
/* 000509 */ 				var __accu0__ = 'Expected macro name after ‘{}’ escape character';
/* 000509 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char);
/* 000515 */ 			}) (), error_type_info: dict ({'what': 'token_end_of_stream_immediately_after_escape_character'}), recovery_token_placeholder: (function () {
/* 000515 */ 				var __accu0__ = self;
/* 000515 */ 				return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pos: pos, pos_end: pos, pre_space: pre_space}));
/* 000522 */ 			}) (), recovery_token_at_pos: __call__ (len, null, s)}));
/* 000522 */ 			__except0__.__cause__ = null;
/* 000522 */ 			throw __except0__;
/* 000522 */ 		}
/* 000525 */ 		var c = __getitem__ (s, __add__ (pos, 1));
/* 000526 */ 		var macro = c;
/* 000529 */ 		var isalphamacro = __in__ (c, parsing_state.macro_alpha_chars);
/* 000530 */ 		var posi = __add__ (pos, 2);
/* 000531 */ 		if (__t__ (isalphamacro)) {
/* 000532 */ 			while (__t__ (__t__ (__lt__ (posi, __call__ (len, null, s))) && __in__ (__getitem__ (s, posi), parsing_state.macro_alpha_chars))) {
/* 000533 */ 				var macro = __call__ (__iadd__, null, macro, __getitem__ (s, posi));
/* 000534 */ 				var posi = __call__ (__iadd__, null, posi, 1);
/* 000534 */ 			}
/* 000534 */ 		}
/* 000537 */ 		var post_space = '';
/* 000538 */ 		if (__t__ (isalphamacro)) {
/* 000540 */ 			var __left0__ = (function () {
/* 000540 */ 				var __accu0__ = self;
/* 000540 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, posi, parsing_state);
/* 000540 */ 			}) ();
/* 000540 */ 			var post_space = __left0__ [0];
/* 000540 */ 			var post_space_pos = __left0__ [1];
/* 000540 */ 			var post_space_pos_end = __left0__ [2];
/* 000543 */ 			if (__t__ (__ge__ ((function () {
/* 000543 */ 				var __accu0__ = post_space;
/* 000543 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000543 */ 			}) (), 2))) {
/* 000545 */ 				var newline_rel_pos = (function () {
/* 000545 */ 					var __accu0__ = post_space;
/* 000545 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000545 */ 				}) ();
/* 000546 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000547 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000547 */ 			}
/* 000549 */ 			var posi = post_space_pos_end;
/* 000549 */ 		}
/* 000551 */ 		return (function () {
/* 000551 */ 			var __accu0__ = self;
/* 000551 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'macro', arg: macro, pos: pos, pos_end: posi, pre_space: pre_space, post_space: post_space}));
/* 000551 */ 		}) ();
/* 000551 */ 	});},
/* 000561 */ 	rx_environment_name: (function () {
/* 000561 */ 		var __accu0__ = re;
/* 000561 */ 		return __call__ (__accu0__.compile, __accu0__, '\\s*\\{(?P<environmentname>[A-Za-z0-9*._ :/!^()\\[\\]-]+)\\}');
/* 000560 */ 	}) (),
/* 000567 */ 	get parse_latex_environment_name () {return __get__ (this, function (self, pos, beginend, pos_envname) {
/* 000567 */ 		if (arguments.length) {
/* 000567 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 					switch (__attrib0__) {
/* 000567 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'pos_envname': var pos_envname = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 		}
/* 000567 */ 		else {
/* 000567 */ 		}
/* 000588 */ 		var envmatch = (function () {
/* 000588 */ 			var __accu0__ = self.rx_environment_name;
/* 000588 */ 			return __call__ (__accu0__.match, __accu0__, __getslice__ (self.s, pos_envname, null, 1));
/* 000588 */ 		}) ();
/* 000589 */ 		if (__t__ (envmatch === null)) {
/* 000590 */ 			return tuple ([null, null]);
/* 000590 */ 		}
/* 000592 */ 		var envmatch_end_pos = __add__ (pos_envname, (function () {
/* 000592 */ 			var __accu0__ = envmatch;
/* 000592 */ 			return __call__ (__accu0__.end, __accu0__);
/* 000592 */ 		}) ());
/* 000594 */ 		return tuple ([(function () {
/* 000594 */ 			var __accu0__ = envmatch;
/* 000594 */ 			return __call__ (__accu0__.group, __accu0__, 'environmentname');
/* 000594 */ 		}) (), envmatch_end_pos]);
/* 000594 */ 	});},
/* 000597 */ 	get impl_read_environment () {return __get__ (this, function (self, s, pos, parsing_state, beginend, pre_space) {
/* 000597 */ 		if (arguments.length) {
/* 000597 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000597 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000597 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000597 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000597 */ 					switch (__attrib0__) {
/* 000597 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'beginend': var beginend = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 					}
/* 000597 */ 				}
/* 000597 */ 			}
/* 000597 */ 		}
/* 000597 */ 		else {
/* 000597 */ 		}
/* 000608 */ 		if (__t__ (__ne__ (__getslice__ (s, pos, __add__ (__add__ (pos, 1), __call__ (len, null, beginend)), 1), __add__ (parsing_state.macro_escape_char, beginend)))) {
/* 000610 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000610 */ 				var __accu0__ = 'Internal error, expected ‘{}{}’ in read_environment()';
/* 000610 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.macro_escape_char, beginend);
/* 000610 */ 			}) ());
/* 000610 */ 			__except0__.__cause__ = null;
/* 000610 */ 			throw __except0__;
/* 000610 */ 		}
/* 000614 */ 		var pos_envname = __add__ (__add__ (pos, 1), __call__ (len, null, beginend));
/* 000617 */ 		var __left0__ = (function () {
/* 000617 */ 			var __accu0__ = self;
/* 000617 */ 			return __call__ (__accu0__.parse_latex_environment_name, __accu0__, pos, beginend, pos_envname);
/* 000617 */ 		}) ();
/* 000617 */ 		var environment_name = __left0__ [0];
/* 000617 */ 		var environment_pos_end = __left0__ [1];
/* 000619 */ 		// pass;
/* 000627 */ 		if (__t__ (environment_name === null)) {
/* 000628 */ 			var tokarg = __add__ (parsing_state.macro_escape_char, beginend);
/* 000631 */ 			var __except0__ = __call__ (LatexWalkerTokenParseError, null, __kwargtrans__ ({s: s, msg: (function () {
/* 000631 */ 				var __accu0__ = 'Bad ‘\\{}’ call: expected {{environmentname}}';
/* 000631 */ 				return __call__ (__accu0__.format, __accu0__, beginend);
/* 000645 */ 			}) (), pos: pos, error_type_info: dict ({'what': 'token_error_parse_beginend_environment_name', 'beginend': beginend, 'macro_beginend': tokarg}), recovery_token_placeholder: __call__ (LatexToken, null, __kwargtrans__ ({tok: 'char', arg: tokarg, pos: pos, pos_end: __add__ (pos, __call__ (len, null, tokarg)), pre_space: pre_space})), recovery_token_at_pos: __add__ (pos, __call__ (len, null, tokarg))}));
/* 000645 */ 			__except0__.__cause__ = null;
/* 000645 */ 			throw __except0__;
/* 000645 */ 		}
/* 000648 */ 		var env_token = (function () {
/* 000648 */ 			var __accu0__ = self;
/* 000648 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: __add__ (beginend, '_environment'), arg: environment_name, pos: pos, pos_end: environment_pos_end, pre_space: pre_space}));
/* 000648 */ 		}) ();
/* 000655 */ 		// pass;
/* 000658 */ 		return env_token;
/* 000658 */ 	});},
/* 000660 */ 	get impl_read_comment () {return __get__ (this, function (self, s, pos, parsing_state, pre_space) {
/* 000660 */ 		if (arguments.length) {
/* 000660 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000660 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000660 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000660 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000660 */ 					switch (__attrib0__) {
/* 000660 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 'pre_space': var pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 					}
/* 000660 */ 				}
/* 000660 */ 			}
/* 000660 */ 		}
/* 000660 */ 		else {
/* 000660 */ 		}
/* 000669 */ 		if (__t__ (!__t__ (((function () {
/* 000669 */ 			var __accu0__ = s;
/* 000669 */ 			return __call__ (__accu0__.startswith, __accu0__, parsing_state.comment_start, pos);
/* 000669 */ 		}) ())))) {
/* 000670 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000670 */ 				var __accu0__ = 'Internal error, expected comment start ‘{}’ in read_comment()';
/* 000670 */ 				return __call__ (__accu0__.format, __accu0__, parsing_state.comment_start);
/* 000670 */ 			}) ());
/* 000670 */ 			__except0__.__cause__ = null;
/* 000670 */ 			throw __except0__;
/* 000670 */ 		}
/* 000673 */ 		var pos_inner_start = __add__ (pos, __call__ (len, null, parsing_state.comment_start));
/* 000675 */ 		var sppos = (function () {
/* 000675 */ 			var __accu0__ = s;
/* 000675 */ 			return __call__ (__accu0__.find, __accu0__, '\n', pos_inner_start);
/* 000675 */ 		}) ();
/* 000676 */ 		if (__t__ (__eq__ (sppos, __neg__ (1)))) {
/* 000678 */ 			var comment_pos_end = __call__ (len, null, s);
/* 000679 */ 			var comment_with_whitespace_pos_end = __call__ (len, null, s);
/* 000680 */ 			var post_space = '';
/* 000680 */ 		}
/* 000681 */ 		else {
/* 000685 */ 			var __left0__ = (function () {
/* 000685 */ 				var __accu0__ = self;
/* 000685 */ 				return __call__ (__accu0__.impl_peek_space_chars, __accu0__, s, sppos, parsing_state);
/* 000685 */ 			}) ();
/* 000685 */ 			var post_space = __left0__ [0];
/* 000685 */ 			var post_space_pos = __left0__ [1];
/* 000685 */ 			var post_space_pos_end = __left0__ [2];
/* 000688 */ 			if (__t__ (__ge__ ((function () {
/* 000688 */ 				var __accu0__ = post_space;
/* 000688 */ 				return __call__ (__accu0__.count, __accu0__, '\n');
/* 000688 */ 			}) (), 2))) {
/* 000690 */ 				var newline_rel_pos = (function () {
/* 000690 */ 					var __accu0__ = post_space;
/* 000690 */ 					return __call__ (__accu0__.find, __accu0__, '\n');
/* 000690 */ 				}) ();
/* 000691 */ 				var post_space_pos_end = __add__ (post_space_pos, newline_rel_pos);
/* 000692 */ 				var post_space = __getslice__ (post_space, 0, newline_rel_pos, 1);
/* 000692 */ 			}
/* 000694 */ 			var comment_pos_end = sppos;
/* 000695 */ 			var comment_with_whitespace_pos_end = post_space_pos_end;
/* 000695 */ 		}
/* 000697 */ 		return (function () {
/* 000697 */ 			var __accu0__ = self;
/* 000697 */ 			return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'comment', arg: __getslice__ (s, pos_inner_start, comment_pos_end, 1), pos: pos, pos_end: comment_with_whitespace_pos_end, pre_space: pre_space, post_space: post_space}));
/* 000697 */ 		}) ();
/* 000697 */ 	});}
/* 000697 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreader.map