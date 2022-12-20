/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:35
/* 000035 */ var logging = {};
/* 000035 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexToken} from './pylatexenc.latexnodes._token.js';
/* 000039 */ import {LatexWalkerEndOfStream} from './pylatexenc.latexnodes._exctypes.js';
/* 000035 */ import * as __module_logging__ from './logging.js';
/* 000035 */ __nest__ (logging, '', __module_logging__);
/* 000035 */ export {LatexWalkerEndOfStream, LatexToken};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._tokenreaderbase';
/* 000036 */ export var logger = (function () {
/* 000036 */ 	var __accu0__ = logging;
/* 000036 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000036 */ }) ();
/* 000043 */ export var LatexTokenReaderBase =  __class__ ('LatexTokenReaderBase', [object], {
/* 000043 */ 	__module__: __name__,
/* 000069 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000069 */ 		var kwargs = dict ();
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 				delete kwargs.__kwargtrans__;
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000070 */ 		__call__ (__call__ (__super__, null, LatexTokenReaderBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000070 */ 	});},
/* 000072 */ 	get make_token () {return __get__ (this, function (self) {
/* 000072 */ 		var kwargs = dict ();
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 				delete kwargs.__kwargtrans__;
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000078 */ 		return __call__ (LatexToken, null, __kwargtrans__ (kwargs));
/* 000078 */ 	});},
/* 000080 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000080 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 			var rewind_pre_space = true;
/* 000080 */ 		};
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000094 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement rewind_to_token()');
/* 000094 */ 		__except0__.__cause__ = null;
/* 000094 */ 		throw __except0__;
/* 000094 */ 	});},
/* 000098 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000098 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var fastforward_post_space = true;
/* 000098 */ 		};
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000109 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement move_past_token()');
/* 000109 */ 		__except0__.__cause__ = null;
/* 000109 */ 		throw __except0__;
/* 000109 */ 	});},
/* 000113 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000127 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement peek_token()');
/* 000127 */ 		__except0__.__cause__ = null;
/* 000127 */ 		throw __except0__;
/* 000127 */ 	});},
/* 000131 */ 	get peek_token_or_none () {return __get__ (this, function (self, parsing_state) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000136 */ 		try {
/* 000137 */ 			return (function () {
/* 000137 */ 				var __accu0__ = self;
/* 000137 */ 				return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000137 */ 			}) ();
/* 000137 */ 		}
/* 000137 */ 		catch (__except0__) {
/* 000137 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000139 */ 				return null;
/* 000139 */ 			}
/* 000139 */ 			else {
/* 000139 */ 				throw __except0__;
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 	});},
/* 000141 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000146 */ 		var tok = (function () {
/* 000146 */ 			var __accu0__ = self;
/* 000146 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000146 */ 		}) ();
/* 000147 */ 		(function () {
/* 000147 */ 			var __accu0__ = self;
/* 000147 */ 			return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000147 */ 		}) ();
/* 000148 */ 		return tok;
/* 000148 */ 	});},
/* 000150 */ 	get cur_pos () {return __get__ (this, function (self) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000154 */ 		var __except0__ = __call__ (RuntimeError, null, 'LatexTokenReaderBase subclasses must reimplement cur_pos()');
/* 000154 */ 		__except0__.__cause__ = null;
/* 000154 */ 		throw __except0__;
/* 000154 */ 	});},
/* 000156 */ 	get peek_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000163 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000163 */ 		__except0__.__cause__ = null;
/* 000163 */ 		throw __except0__;
/* 000163 */ 	});},
/* 000165 */ 	get skip_space_chars () {return __get__ (this, function (self, parsing_state) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000175 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000175 */ 		__except0__.__cause__ = null;
/* 000175 */ 		throw __except0__;
/* 000175 */ 	});},
/* 000177 */ 	get peek_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000185 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000185 */ 		__except0__.__cause__ = null;
/* 000185 */ 		throw __except0__;
/* 000185 */ 	});},
/* 000187 */ 	get next_chars () {return __get__ (this, function (self, num_chars, parsing_state) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'num_chars': var num_chars = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000196 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000196 */ 		__except0__.__cause__ = null;
/* 000196 */ 		throw __except0__;
/* 000196 */ 	});},
/* 000198 */ 	get move_to_pos_chars () {return __get__ (this, function (self, pos) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000203 */ 		var __except0__ = __call__ (RuntimeError, null, 'This token reader does not support character-level access');
/* 000203 */ 		__except0__.__cause__ = null;
/* 000203 */ 		throw __except0__;
/* 000203 */ 	});}
/* 000203 */ });
/* 000211 */ export var LatexTokenListTokenReader =  __class__ ('LatexTokenListTokenReader', [LatexTokenReaderBase], {
/* 000211 */ 	__module__: __name__,
/* 000219 */ 	get __init__ () {return __get__ (this, function (self, token_list) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'token_list': var token_list = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		__call__ (__call__ (__super__, null, LatexTokenListTokenReader, '__init__'), null, self);
/* 000221 */ 		self.token_list = token_list;
/* 000222 */ 		self._idx = 0;
/* 000222 */ 	});},
/* 000224 */ 	get peek_token () {return __get__ (this, function (self, parsing_state) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		if (__t__ (__ge__ (self._idx, __call__ (len, null, self.token_list)))) {
/* 000226 */ 			var __except0__ = __call__ (LatexWalkerEndOfStream, null);
/* 000226 */ 			__except0__.__cause__ = null;
/* 000226 */ 			throw __except0__;
/* 000226 */ 		}
/* 000227 */ 		return __getitem__ (self.token_list, self._idx);
/* 000227 */ 	});},
/* 000229 */ 	get next_token () {return __get__ (this, function (self, parsing_state) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000233 */ 		var tok = (function () {
/* 000233 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.peek_token, __accu0__, parsing_state);
/* 000233 */ 		}) ();
/* 000234 */ 		self._idx = __call__ (__iadd__, null, self._idx, 1);
/* 000235 */ 		return tok;
/* 000235 */ 	});},
/* 000237 */ 	get _find_tok_idx () {return __get__ (this, function (self, tok, methname) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'methname': var methname = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		try {
/* 000240 */ 			var i = __call__ (py_next, null, (function () {
/* 000240 */ 				var __accu0__ = [];
/* 000240 */ 				var __iterable0__ = __call__ (enumerate, null, self.token_list);
/* 000240 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000240 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000240 */ 					var j = __left0__ [0];
/* 000240 */ 					var t = __left0__ [1];
/* 000240 */ 					if (__t__ (t === tok)) {
/* 000240 */ 						(function () {
/* 000240 */ 							var __accu1__ = __accu0__;
/* 000240 */ 							return __call__ (__accu1__.append, __accu1__, j);
/* 000240 */ 						}) ();
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 				return py_iter (__accu0__);
/* 000240 */ 			}) ());
/* 000240 */ 		}
/* 000240 */ 		catch (__except0__) {
/* 000240 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000242 */ 				var __except1__ = __call__ (IndexError, null, (function () {
/* 000242 */ 					var __accu0__ = '{}({!r}): no such token in list';
/* 000242 */ 					return __call__ (__accu0__.format, __accu0__, methname, tok);
/* 000242 */ 				}) ());
/* 000242 */ 				__except1__.__cause__ = null;
/* 000242 */ 				throw __except1__;
/* 000242 */ 			}
/* 000242 */ 			else {
/* 000242 */ 				throw __except0__;
/* 000242 */ 			}
/* 000242 */ 		}
/* 000243 */ 		return i;
/* 000243 */ 	});},
/* 000245 */ 	get move_to_token () {return __get__ (this, function (self, tok, rewind_pre_space) {
/* 000245 */ 		if (typeof rewind_pre_space == 'undefined' || (rewind_pre_space != null && rewind_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000245 */ 			var rewind_pre_space = true;
/* 000245 */ 		};
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'rewind_pre_space': var rewind_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000246 */ 		self._idx = (function () {
/* 000246 */ 			var __accu0__ = self;
/* 000246 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_to_token');
/* 000246 */ 		}) ();
/* 000246 */ 	});},
/* 000248 */ 	get move_past_token () {return __get__ (this, function (self, tok, fastforward_post_space) {
/* 000248 */ 		if (typeof fastforward_post_space == 'undefined' || (fastforward_post_space != null && fastforward_post_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var fastforward_post_space = true;
/* 000248 */ 		};
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'fastforward_post_space': var fastforward_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		self._idx = __add__ ((function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__._find_tok_idx, __accu0__, tok, 'move_past_token');
/* 000249 */ 		}) (), 1);
/* 000249 */ 	});},
/* 000251 */ 	get cur_pos () {return __get__ (this, function (self) {
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
/* 000252 */ 		return (function () {
/* 000252 */ 			var __accu0__ = self;
/* 000252 */ 			return __call__ (__accu0__.peek_token, __accu0__, null);
/* 000252 */ 		}) ().pos;
/* 000252 */ 	});},
/* 000254 */ 	get final_pos () {return __get__ (this, function (self) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000255 */ 		return __getitem__ (self.token_list, __sub__ (__call__ (len, null, self.token_list), 1)).pos_end;
/* 000255 */ 	});}
/* 000255 */ });
/* 000035 */ 
//# sourceMappingURL=pylatexenc.latexnodes._tokenreaderbase.map