/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 15:49:14
/* 000035 */ var logging = {};
/* 000035 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexToken} from './pylatexenc.latexnodes._token.js';
/* 000039 */ import {LatexWalkerEndOfStream} from './pylatexenc.latexnodes._exctypes.js';
/* 000035 */ import * as __module_logging__ from './logging.js';
/* 000035 */ __nest__ (logging, '', __module_logging__);
/* 000035 */ export {LatexToken, LatexWalkerEndOfStream};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreaderbase';
/* 000036 */ export var logger = (function () {
/* 000036 */ 	var __accu0__ = logging;
/* 000036 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000036 */ }) ();
/* 000043 */ export var LatexTokenReaderBase =  __class__ ('LatexTokenReaderBase', [object], {
/* 000043 */ 	__module__: __name__,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000073 */ 		var kwargs = dict ();
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 				delete kwargs.__kwargtrans__;
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, LatexTokenReaderBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000074 */ 	});},
/* 000076 */ 	get make_token () {return __get__ (this, function (self) {
/* 000076 */ 		var kwargs = dict ();
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 				delete kwargs.__kwargtrans__;
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000082 */ 		return __call__ (LatexToken, null, __kwargtrans__ (kwargs));
/* 000082 */ 	});},
/* 000084 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000084 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var rewind_pre_space = true;
/* 000084 */ 		};
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000098 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement rewind_to_token()');
/* 000098 */ 		__except0__.__cause__ = null;
/* 000098 */ 		throw __except0__;
/* 000098 */ 	});},
/* 000102 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000102 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000102 */ 			var fastforward_post_space = true;
/* 000102 */ 		};
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000113 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement move_past_token()');
/* 000113 */ 		__except0__.__cause__ = null;
/* 000113 */ 		throw __except0__;
/* 000113 */ 	});},
/* 000117 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000131 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement peek_token()');
/* 000131 */ 		__except0__.__cause__ = null;
/* 000131 */ 		throw __except0__;
/* 000131 */ 	});},
/* 000135 */ 	get peek_token_or_none () {return __get__ (this, function (self, parsing_state) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000140 */ 		try {
/* 000141 */ 			return (function () {
/* 000141 */ 				var __accu0__ = self;
/* 000141 */ 				return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000141 */ 		catch (__except0__) {
/* 000141 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000143 */ 				return null;
/* 000143 */ 			}
/* 000143 */ 			else {
/* 000143 */ 				throw __except0__;
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 	});},
/* 000145 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000150 */ 		var tok = (function () {
/* 000150 */ 			var __accu0__ = self;
/* 000150 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000150 */ 		}) ();
/* 000151 */ 		(function () {
/* 000151 */ 			var __accu0__ = self;
/* 000151 */ 			return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000151 */ 		}) ();
/* 000152 */ 		return tok;
/* 000152 */ 	});},
/* 000154 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000158 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement cur_pos()');
/* 000158 */ 		__except0__.__cause__ = null;
/* 000158 */ 		throw __except0__;
/* 000158 */ 	});},
/* 000160 */ 	get peek_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000167 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000167 */ 		__except0__.__cause__ = null;
/* 000167 */ 		throw __except0__;
/* 000167 */ 	});},
/* 000169 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000179 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000179 */ 		__except0__.__cause__ = null;
/* 000179 */ 		throw __except0__;
/* 000179 */ 	});},
/* 000181 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000189 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000189 */ 		__except0__.__cause__ = null;
/* 000189 */ 		throw __except0__;
/* 000189 */ 	});},
/* 000191 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000200 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000200 */ 		__except0__.__cause__ = null;
/* 000200 */ 		throw __except0__;
/* 000200 */ 	});},
/* 000202 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000207 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000207 */ 		__except0__.__cause__ = null;
/* 000207 */ 		throw __except0__;
/* 000207 */ 	});}
/* 000207 */ });
/* 000215 */ export var LatexTokenListTokenReader =  __class__ ('LatexTokenListTokenReader', [LatexTokenReaderBase], {
/* 000215 */ 	__module__: __name__,
/* 000223 */ 	get __init__ () {return __get__ (this, function (self, token_list) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'token_list': var token_list = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000224 */ 		__call__ (__call__ (__super__, null, LatexTokenListTokenReader, '__init__'), null, self);
/* 000225 */ 		self.token_list = token_list;
/* 000226 */ 		self._idx = 0;
/* 000226 */ 	});},
/* 000228 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000229 */ 		if (__t__ (__ge__ (self._idx, __call__ (len, null, self.token_list)))) {
/* 000230 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000230 */ 			__except0__.__cause__ = null;
/* 000230 */ 			throw __except0__;
/* 000230 */ 		}
/* 000231 */ 		return __getitem__ (self.token_list, self._idx);
/* 000231 */ 	});},
/* 000233 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000237 */ 		var tok = (function () {
/* 000237 */ 			var __accu0__ = self;
/* 000237 */ 			return __call__ (__accu0__.peek_token, __accu0__, parsing_state);
/* 000237 */ 		}) ();
/* 000238 */ 		self._idx = __call__ (__iadd__, null, self._idx, 1);
/* 000239 */ 		return tok;
/* 000239 */ 	});},
/* 000241 */ 	get _find_tok_idx () {return __get__ (this, function (self, tok, methname) {
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'methname': var methname = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000242 */ 		try {
/* 000244 */ 			var i = __call__ (py_next, null, (function () {
/* 000244 */ 				var __accu0__ = [];
/* 000244 */ 				var __iterable0__ = __call__ (enumerate, null, self.token_list);
/* 000244 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 					var j = __left0__ [0];
/* 000244 */ 					var t = __left0__ [1];
/* 000244 */ 					if (__t__ (t === tok)) {
/* 000244 */ 						(function () {
/* 000244 */ 							var __accu1__ = __accu0__;
/* 000244 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000244 */ 						}) ();
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 				return py_iter (__accu0__);
/* 000244 */ 			}) ());
/* 000244 */ 		}
/* 000244 */ 		catch (__except0__) {
/* 000244 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000246 */ 				var __except1__ = __call__ (IndexError, null, (function () {
/* 000246 */ 					var __accu0__ = '{}({!r}): no such token in list';
/* 000246 */ 					return __call__ (__accu0__.format, __accu0__, methname, tok);
/* 000246 */ 				}) ());
/* 000246 */ 				__except1__.__cause__ = null;
/* 000246 */ 				throw __except1__;
/* 000246 */ 			}
/* 000246 */ 			else {
/* 000246 */ 				throw __except0__;
/* 000246 */ 			}
/* 000246 */ 		}
/* 000247 */ 		return i;
/* 000247 */ 	});},
/* 000249 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000249 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 			var rewind_pre_space = true;
/* 000249 */ 		};
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		self._idx = (function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_to_token');
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000252 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000252 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000252 */ 			var fastforward_post_space = true;
/* 000252 */ 		};
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		self._idx = __add__ ((function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_past_token');
/* 000253 */ 		}) (), 1);
/* 000253 */ 	});},
/* 000255 */ 	get cur_pos () {return __get__ (this, function (self) {
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
/* 000256 */ 		return (function () {
/* 000256 */ 			var __accu0__ = self;
/* 000256 */ 			return __call__ (__accu0__.peek_token, __accu0__, null);
/* 000256 */ 		}) ().pos;
/* 000256 */ 	});},
/* 000258 */ 	get final_pos () {return __get__ (this, function (self) {
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
/* 000259 */ 		return __getitem__ (self.token_list, __sub__ (__call__ (len, null, self.token_list), 1)).pos_end;
/* 000259 */ 	});}
/* 000259 */ });
/* 000035 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreaderbase.map