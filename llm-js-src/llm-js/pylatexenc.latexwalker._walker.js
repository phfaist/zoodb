/* 000001 */ // Transcrypt'ed from Python, 2022-09-10 12:43:47
/* 000037 */ var logging = {};
/* 000037 */ var re = {};
/* 000037 */ var unique_object_id = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000071 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000071 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000061 */ import * as __module_logging__ from './logging.js';
/* 000061 */ __nest__ (logging, '', __module_logging__);
/* 000058 */ import {ParsingState} from './pylatexenc.latexnodes.js';
/* 000047 */ import * as parsers from './pylatexenc.latexnodes.parsers.js';
/* 000046 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000045 */ import {format_pos} from './pylatexenc.latexnodes._exctypes.js';
/* 000044 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, _basestring} from './pylatexenc.latexnodes._exctypes.js';
/* 000042 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000041 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000039 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ import * as __module_re__ from './re.js';
/* 000037 */ __nest__ (re, '', __module_re__);
/* 000037 */ export {_basestring, LatexGroupNode, LatexNode, LatexEnvironmentNode, format_pos, LatexWalkerParseError, LatexSpecialsNode, LatexCharsNode, LatexMathNode, LatexWalkerParseErrorFormatter, LatexNodesVisitor, LatexWalkerNodesParseError, LatexMacroNode, _update_posposend_from_nodelist, LatexNodeList, LatexWalkerError, LatexWalkerTokenParseError, _unicode_from_str, _util, ParsedArguments, __all__, ParsingState, LatexWalkerEndOfStream, latexnodes, parsers, _get_content_as_chars, LatexCommentNode, macrospec};
/* 000001 */ var __name__ = 'pylatexenc.latexwalker._walker';
/* 000051 */ export var get_default_latex_context_db = macrospec.LatexContextDb;
/* 000062 */ export var logger = (function () {
/* 000062 */ 	var __accu0__ = logging;
/* 000062 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000062 */ }) ();
/* 000065 */ export var _maketuple = (function __lambda__ () {
/* 000065 */ 	if (arguments.length) {
/* 000065 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000065 */ 	}
/* 000065 */ 	else {
/* 000065 */ 		var args = tuple ();
/* 000065 */ 	}
/* 000065 */ 	return __call__ (tuple, null, args);
/* 000065 */ });
/* 000072 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000079 */ export var _legacy_pyltxenc1_do = (function __lambda__ () {
/* 000079 */ 	if (arguments.length) {
/* 000079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 		var args = tuple ();
/* 000079 */ 	}
/* 000079 */ 	return null;
/* 000079 */ });
/* 000087 */ export var LatexWalker =  __class__ ('LatexWalker', [latexnodes.LatexWalkerBase], {
/* 000087 */ 	__module__: __name__,
/* 000197 */ 	get __init__ () {return __get__ (this, function (self, s, latex_context) {
/* 000197 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000197 */ 			var latex_context = null;
/* 000197 */ 		};
/* 000197 */ 		var kwargs = dict ();
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 				delete kwargs.__kwargtrans__;
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000199 */ 		var default_parsing_state = (function () {
/* 000199 */ 			var __accu0__ = kwargs;
/* 000199 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'default_parsing_state', null);
/* 000199 */ 		}) ();
/* 000201 */ 		self.s = s;
/* 000204 */ 		self._line_no_calc = null;
/* 000206 */ 		self.debug_nodes = false;
/* 000208 */ 		if (__t__ (default_parsing_state !== null)) {
/* 000209 */ 			self.default_parsing_state = default_parsing_state;
/* 000211 */ 			if (__t__ (latex_context !== null)) {
/* 000212 */ 				var __except0__ = __call__ (ValueError, null, 'You cannot specify both the default_parsing_state= and the latex_context= arguments');
/* 000212 */ 				__except0__.__cause__ = null;
/* 000212 */ 				throw __except0__;
/* 000212 */ 			}
/* 000212 */ 		}
/* 000213 */ 		else {
/* 000215 */ 			if (__t__ (latex_context === null)) {
/* 000217 */ 				var latex_context = __call__ (_legacy_pyltxenc1_do, null, 'LatexWalker_init_from_macro_dict', self, kwargs);
/* 000221 */ 				if (__t__ (latex_context === null)) {
/* 000223 */ 					var latex_context = __call__ (get_default_latex_context_db, null);
/* 000223 */ 				}
/* 000223 */ 			}
/* 000227 */ 			else if (__t__ (__in__ ('macro_dict', kwargs))) {
/* 000228 */ 				var __except0__ = __call__ (py_TypeError, null, 'Cannot specify both `latex_context=` and `macro_dict=` arguments');
/* 000228 */ 				__except0__.__cause__ = null;
/* 000228 */ 				throw __except0__;
/* 000228 */ 			}
/* 000235 */ 			if (__t__ (latex_context !== null)) {
/* 000236 */ 				(function () {
/* 000236 */ 					var __accu0__ = latex_context;
/* 000236 */ 					return __call__ (__accu0__.freeze, __accu0__);
/* 000236 */ 				}) ();
/* 000237 */ 				self.default_parsing_state = __call__ (ParsingState, null, __kwargtrans__ ({s: self.s, latex_context: latex_context}));
/* 000237 */ 			}
/* 000240 */ 			else {
/* 000244 */ 				self.default_parsing_state = null;
/* 000244 */ 			}
/* 000244 */ 		}
/* 000250 */ 		self.tolerant_parsing = (function () {
/* 000250 */ 			var __accu0__ = kwargs;
/* 000250 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', true);
/* 000250 */ 		}) ();
/* 000251 */ 		self.strict_braces = (function () {
/* 000251 */ 			var __accu0__ = kwargs;
/* 000251 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'strict_braces', false);
/* 000251 */ 		}) ();
/* 000253 */ 		if (__t__ (__in__ ('keep_inline_math', kwargs))) {
/* 000254 */ 			(function () {
/* 000254 */ 				var __accu0__ = _util;
/* 000254 */ 				return __call__ (__accu0__.pylatexenc_deprecated_2, __accu0__, 'The keep_inline_math=... option in LatexWalker() has no effect in pylatexenc 2.  Please consider using the more versatile option math_mode=... in LatexNodes2Text() instead.');
/* 000254 */ 			}) ();
/* 000254 */ 			delete __getitem__ (kwargs, 'keep_inline_math');
/* 000254 */ 		}
/* 000261 */ 		if (__t__ (kwargs)) {
/* 000263 */ 			(function () {
/* 000263 */ 				var __accu0__ = logger;
/* 000263 */ 				return __call__ (__accu0__.warning, __accu0__, 'LatexWalker(): Unknown flag(s) encountered: %r', (function () {
/* 000263 */ 					var __accu1__ = kwargs;
/* 000263 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000263 */ 				}) ());
/* 000263 */ 			}) ();
/* 000263 */ 		}
/* 000265 */ 		__call__ (__call__ (__super__, null, LatexWalker, '__init__'), null, self);
/* 000265 */ 	});},
/* 000268 */ 	make_latex_group_parser: parsers.LatexDelimitedGroupParser,
/* 000270 */ 	make_latex_math_parser: parsers.LatexMathParser,
/* 000273 */ 	get make_parsing_state () {return __get__ (this, function (self) {
/* 000273 */ 		var kwargs = dict ();
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 				delete kwargs.__kwargtrans__;
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000289 */ 		return (function () {
/* 000289 */ 			var __accu0__ = self.default_parsing_state;
/* 000289 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000289 */ 		}) ();
/* 000289 */ 	});},
/* 000291 */ 	get parse_flags () {return __get__ (this, function (self) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000302 */ 		return dict ({'tolerant_parsing': self.tolerant_parsing, 'strict_braces': self.strict_braces, 'keep_inline_math': null});
/* 000302 */ 	});},
/* 000309 */ 	get _report_ignore_parse_error () {return __get__ (this, function (self, exc) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000310 */ 		(function () {
/* 000310 */ 			var __accu0__ = logger;
/* 000310 */ 			return __call__ (__accu0__.info, __accu0__, 'Ignoring parse error (tolerant parsing mode): %s', exc);
/* 000310 */ 		}) ();
/* 000310 */ 	});},
/* 000313 */ 	get check_tolerant_parsing_ignore_error () {return __get__ (this, function (self, exc) {
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000328 */ 		if (__t__ (__t__ (!__t__ ((self.tolerant_parsing))) || !__t__ ((__call__ (isinstance, null, exc, LatexWalkerError))))) {
/* 000329 */ 			return exc;
/* 000329 */ 		}
/* 000332 */ 		(function () {
/* 000332 */ 			var __accu0__ = self;
/* 000332 */ 			return __call__ (__accu0__._report_ignore_parse_error, __accu0__, exc);
/* 000332 */ 		}) ();
/* 000334 */ 		return null;
/* 000337 */ 	});},
/* 000337 */ 	_ParsingContext: __class__ ('_ParsingContext', [object], {
/* 000337 */ 		__module__: __name__,
/* 000342 */ 		get __init__ () {return __get__ (this, function (self, latex_walker, open_context) {
/* 000342 */ 			if (arguments.length) {
/* 000342 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 						switch (__attrib0__) {
/* 000342 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 							case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						}
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 			else {
/* 000342 */ 			}
/* 000343 */ 			__call__ (__call__ (__super__, null, LatexWalker._ParsingContext, '__init__'), null, self);
/* 000345 */ 			self.latex_walker = latex_walker;
/* 000346 */ 			self.open_context = open_context;
/* 000348 */ 			self.recovery_from_exception = null;
/* 000348 */ 		});},
/* 000350 */ 		get __enter__ () {return __get__ (this, function (self) {
/* 000350 */ 			if (arguments.length) {
/* 000350 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 						switch (__attrib0__) {
/* 000350 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						}
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 			else {
/* 000350 */ 			}
/* 000351 */ 			return self;
/* 000351 */ 		});},
/* 000353 */ 		get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, exc_traceback) {
/* 000353 */ 			if (arguments.length) {
/* 000353 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 						switch (__attrib0__) {
/* 000353 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 							case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 							case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 							case 'exc_traceback': var exc_traceback = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						}
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 			else {
/* 000353 */ 			}
/* 000354 */ 			if (__t__ (__t__ (exc_value !== null) && __call__ (isinstance, null, exc_value, LatexWalkerParseError))) {
/* 000355 */ 				var e = exc_value;
/* 000356 */ 				if (__t__ (self.open_context)) {
/* 000357 */ 					var __left0__ = self.open_context;
/* 000357 */ 					var what = __left0__ [0];
/* 000357 */ 					var tok = __left0__ [1];
/* 000358 */ 					if (__t__ (what !== null)) {
/* 000359 */ 						if (__t__ (tok !== null)) {
/* 000360 */ 							(function () {
/* 000360 */ 								var __accu0__ = e.open_contexts;
/* 000362 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, tok.pos, ...(function () {
/* 000362 */ 									var __accu1__ = self.latex_walker;
/* 000362 */ 									return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, tok.pos);
/* 000362 */ 								}) ()));
/* 000362 */ 							}) ();
/* 000362 */ 						}
/* 000363 */ 						else {
/* 000365 */ 							(function () {
/* 000365 */ 								var __accu0__ = e.open_contexts;
/* 000366 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, null, __neg__ (1), __neg__ (1)));
/* 000366 */ 							}) ();
/* 000366 */ 						}
/* 000366 */ 					}
/* 000366 */ 				}
/* 000369 */ 				if (__t__ (__t__ (__call__ (hasattr, null, e, 'pos')) && __t__ (e.lineno === null) && e.colno === null)) {
/* 000370 */ 					var epos = __call__ (getattr, null, e, 'pos', null);
/* 000371 */ 					var __left0__ = (function () {
/* 000371 */ 						var __accu0__ = self.latex_walker;
/* 000371 */ 						return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, epos);
/* 000371 */ 					}) ();
/* 000371 */ 					e.lineno = __left0__ [0];
/* 000371 */ 					e.colno = __left0__ [1];
/* 000371 */ 				}
/* 000372 */ 				var e = (function () {
/* 000372 */ 					var __accu0__ = self.latex_walker;
/* 000372 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000372 */ 				}) ();
/* 000373 */ 				if (__t__ (e === null)) {
/* 000375 */ 					self.recovery_from_exception = e;
/* 000376 */ 					return true;
/* 000376 */ 				}
/* 000378 */ 				return null;
/* 000378 */ 			}
/* 000378 */ 		});},
/* 000380 */ 		get perform_recovery_nodes_and_parsing_state_delta () {return __get__ (this, function (self, token_reader) {
/* 000380 */ 			if (arguments.length) {
/* 000380 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 						switch (__attrib0__) {
/* 000380 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						}
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 			else {
/* 000380 */ 			}
/* 000381 */ 			if (__t__ (self.recovery_from_exception === null)) {
/* 000382 */ 				var __except0__ = __call__ (RuntimeError, null, 'No exception had happened to try to recover nodes from');
/* 000382 */ 				__except0__.__cause__ = null;
/* 000382 */ 				throw __except0__;
/* 000382 */ 			}
/* 000384 */ 			var nodes = null;
/* 000385 */ 			var parsing_state_delta = null;
/* 000386 */ 			var reset_at_tok = null;
/* 000389 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_nodes'))) {
/* 000391 */ 				var nodes = self.recovery_from_exception.recovery_nodes;
/* 000391 */ 			}
/* 000393 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_parsing_state_delta'))) {
/* 000394 */ 				var parsing_state_delta = self.recovery_from_exception.recovery_parsing_state_delta;
/* 000394 */ 			}
/* 000398 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_at_token'))) {
/* 000399 */ 				var reset_at_tok = self.recovery_from_exception.recovery_at_token;
/* 000399 */ 			}
/* 000401 */ 			if (__t__ (reset_at_tok !== null)) {
/* 000402 */ 				(function () {
/* 000402 */ 					var __accu0__ = token_reader;
/* 000402 */ 					return __call__ (__accu0__.move_to_token, __accu0__, reset_at_tok);
/* 000402 */ 				}) ();
/* 000402 */ 			}
/* 000403 */ 			else {
/* 000404 */ 				var reset_past_tok = null;
/* 000405 */ 				if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_past_token'))) {
/* 000406 */ 					var reset_past_tok = self.recovery_from_exception.recovery_past_token;
/* 000406 */ 				}
/* 000407 */ 				if (__t__ (reset_past_tok !== null)) {
/* 000408 */ 					(function () {
/* 000408 */ 						var __accu0__ = token_reader;
/* 000408 */ 						return __call__ (__accu0__.move_past_token, __accu0__, reset_past_tok);
/* 000408 */ 					}) ();
/* 000408 */ 				}
/* 000408 */ 			}
/* 000410 */ 			return tuple ([nodes, parsing_state_delta]);
/* 000410 */ 		});}
/* 000410 */ 	}),
/* 000412 */ 	get new_parsing_open_context () {return __get__ (this, function (self, open_context_name, open_context_token) {
/* 000412 */ 		if (typeof open_context_name == 'undefined' || (open_context_name != null && open_context_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000412 */ 			var open_context_name = null;
/* 000412 */ 		};
/* 000412 */ 		if (typeof open_context_token == 'undefined' || (open_context_token != null && open_context_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000412 */ 			var open_context_token = null;
/* 000412 */ 		};
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'open_context_name': var open_context_name = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'open_context_token': var open_context_token = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000446 */ 		return (function () {
/* 000446 */ 			var __accu0__ = LatexWalker;
/* 000446 */ 			return __call__ (__accu0__._ParsingContext, __accu0__, self, tuple ([open_context_name, open_context_token]));
/* 000446 */ 		}) ();
/* 000446 */ 	});},
/* 000448 */ 	get make_token_reader () {return __get__ (this, function (self, pos) {
/* 000448 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000448 */ 			var pos = null;
/* 000448 */ 		};
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000455 */ 		var token_reader = (function () {
/* 000455 */ 			var __accu0__ = latexnodes;
/* 000455 */ 			return __call__ (__accu0__.LatexTokenReader, __accu0__, self.s, __kwargtrans__ ({tolerant_parsing: self.tolerant_parsing}));
/* 000455 */ 		}) ();
/* 000457 */ 		if (__t__ (pos !== null)) {
/* 000458 */ 			(function () {
/* 000458 */ 				var __accu0__ = token_reader;
/* 000458 */ 				return __call__ (__accu0__.move_to_pos_chars, __accu0__, pos);
/* 000458 */ 			}) ();
/* 000458 */ 		}
/* 000459 */ 		return token_reader;
/* 000459 */ 	});},
/* 000461 */ 	get parse_content () {return __get__ (this, function (self, parser, token_reader, parsing_state, open_context) {
/* 000461 */ 		if (typeof token_reader == 'undefined' || (token_reader != null && token_reader.hasOwnProperty ("__kwargtrans__"))) {;
/* 000461 */ 			var token_reader = null;
/* 000461 */ 		};
/* 000461 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000461 */ 			var parsing_state = null;
/* 000461 */ 		};
/* 000461 */ 		if (typeof open_context == 'undefined' || (open_context != null && open_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000461 */ 			var open_context = null;
/* 000461 */ 		};
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000504 */ 		if (__t__ (token_reader === null)) {
/* 000505 */ 			var token_reader = (function () {
/* 000505 */ 				var __accu0__ = self;
/* 000505 */ 				return __call__ (__accu0__.make_token_reader, __accu0__);
/* 000505 */ 			}) ();
/* 000505 */ 		}
/* 000506 */ 		if (__t__ (parsing_state === null)) {
/* 000507 */ 			var parsing_state = (function () {
/* 000507 */ 				var __accu0__ = self;
/* 000507 */ 				return __call__ (__accu0__.make_parsing_state, __accu0__);
/* 000507 */ 			}) ();
/* 000507 */ 		}
/* 000509 */ 		var nodes = null;
/* 000510 */ 		var info = null;
/* 000512 */ 		var __left0__ = tuple ([null, null]);
/* 000512 */ 		var open_context_name = __left0__ [0];
/* 000512 */ 		var open_context_tok = __left0__ [1];
/* 000513 */ 		if (__t__ (open_context)) {
/* 000514 */ 			var __left0__ = open_context;
/* 000514 */ 			var open_context_name = __left0__ [0];
/* 000514 */ 			var open_context_tok = __left0__ [1];
/* 000514 */ 		}
/* 000516 */ 		var start_pos = (function () {
/* 000516 */ 			var __accu0__ = token_reader;
/* 000516 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000516 */ 		}) ();
/* 000517 */ 		// pass;
/* 000522 */ 		var pc = (function () {
/* 000522 */ 			var __accu0__ = self;
/* 000522 */ 			return __call__ (__accu0__.new_parsing_open_context, __accu0__, open_context_name, open_context_tok);
/* 000522 */ 		}) ();
/* 000522 */ 		try {
/* 000522 */ 			pc.__enter__ ();
/* 000524 */ 			try {
/* 000526 */ 				var __left0__ = (function () {
/* 000526 */ 					var __accu0__ = parser;
/* 000526 */ 					return __call__ (__accu0__.parse, __accu0__, __kwargtrans__ ({latex_walker: self, token_reader: token_reader, parsing_state: parsing_state}));
/* 000526 */ 				}) ();
/* 000526 */ 				var nodes = __left0__ [0];
/* 000526 */ 				var info = __left0__ [1];
/* 000526 */ 			}
/* 000526 */ 			catch (__except0__) {
/* 000526 */ 				if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000533 */ 					(function () {
/* 000533 */ 						var __accu0__ = logger;
/* 000533 */ 						return __call__ (__accu0__.warning, __accu0__, 'End of stream encountered when parsing content with %s (%s)', parser.__class__.__name__, open_context_name);
/* 000533 */ 					}) ();
/* 000535 */ 					var __left0__ = tuple ([null, null]);
/* 000535 */ 					var nodes = __left0__ [0];
/* 000535 */ 					var info = __left0__ [1];
/* 000535 */ 				}
/* 000535 */ 				else {
/* 000535 */ 					throw __except0__;
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 			pc.__exit__ ();
/* 000535 */ 		}
/* 000535 */ 		catch (__except0__) {
/* 000535 */ 			if (! (pc.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000535 */ 				throw __except0__;
/* 000535 */ 			}
/* 000535 */ 		}
/* 000537 */ 		if (__t__ (pc.recovery_from_exception !== null)) {
/* 000538 */ 			var __left0__ = (function () {
/* 000538 */ 				var __accu0__ = pc;
/* 000538 */ 				return __call__ (__accu0__.perform_recovery_nodes_info, __accu0__, token_reader);
/* 000538 */ 			}) ();
/* 000538 */ 			var nodes = __left0__ [0];
/* 000538 */ 			var info = __left0__ [1];
/* 000538 */ 		}
/* 000540 */ 		// pass;
/* 000545 */ 		return tuple ([nodes, info]);
/* 000545 */ 	});},
/* 000548 */ 	get make_nodes_collector () {return __get__ (this, function (self, token_reader, parsing_state) {
/* 000548 */ 		var kwargs = dict ();
/* 000548 */ 		if (arguments.length) {
/* 000548 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000548 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000548 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000548 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000548 */ 					switch (__attrib0__) {
/* 000548 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000548 */ 					}
/* 000548 */ 				}
/* 000548 */ 				delete kwargs.__kwargtrans__;
/* 000548 */ 			}
/* 000548 */ 		}
/* 000548 */ 		else {
/* 000548 */ 		}
/* 000552 */ 		return (function () {
/* 000552 */ 			var __accu0__ = latexnodes;
/* 000552 */ 			return __call__ (__accu0__.LatexNodesCollector, __accu0__, self, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000552 */ 		}) ();
/* 000552 */ 	});},
/* 000559 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000559 */ 		var kwargs = dict ();
/* 000559 */ 		if (arguments.length) {
/* 000559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000559 */ 					switch (__attrib0__) {
/* 000559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000559 */ 					}
/* 000559 */ 				}
/* 000559 */ 				delete kwargs.__kwargtrans__;
/* 000559 */ 			}
/* 000559 */ 		}
/* 000559 */ 		else {
/* 000559 */ 		}
/* 000588 */ 		var __left0__ = tuple ([(function () {
/* 000588 */ 			var __accu0__ = kwargs;
/* 000588 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos');
/* 000588 */ 		}) (), (function () {
/* 000588 */ 			var __accu0__ = kwargs;
/* 000588 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000588 */ 		}) (), (function () {
/* 000588 */ 			var __accu0__ = kwargs;
/* 000588 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000588 */ 		}) ()]);
/* 000588 */ 		var pos = __left0__ [0];
/* 000588 */ 		var pos_end = __left0__ [1];
/* 000588 */ 		var parsing_state = __left0__ [2];
/* 000590 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (pos !== null) && __in__ ('len', kwargs))) {
/* 000591 */ 			(function () {
/* 000591 */ 				var __accu0__ = _util;
/* 000591 */ 				return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, 'make_node(..., len=..., ...); use ‘pos_end=’ instead of ‘len=’');
/* 000591 */ 			}) ();
/* 000593 */ 			var len_ = __getitem__ (kwargs, 'len');
/* 000594 */ 			var pos_end = __add__ (pos, len_);
/* 000594 */ 		}
/* 000596 */ 		var node = __call__ (node_class, null, __kwargtrans__ (__mergekwargtrans__ ({pos: pos, pos_end: pos_end, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000598 */ 		if (__t__ (self.debug_nodes)) {
/* 000599 */ 			// pass;
/* 000599 */ 		}
/* 000602 */ 		return node;
/* 000602 */ 	});},
/* 000604 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000604 */ 		var kwargs = dict ();
/* 000604 */ 		if (arguments.length) {
/* 000604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 					switch (__attrib0__) {
/* 000604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000604 */ 					}
/* 000604 */ 				}
/* 000604 */ 				delete kwargs.__kwargtrans__;
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 		else {
/* 000604 */ 		}
/* 000615 */ 		var parsing_state = (function () {
/* 000615 */ 			var __accu0__ = kwargs;
/* 000615 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000615 */ 		}) ();
/* 000617 */ 		return __call__ (LatexNodeList, null, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000617 */ 	});},
/* 000624 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000624 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000624 */ 			var as_dict = false;
/* 000624 */ 		};
/* 000624 */ 		if (arguments.length) {
/* 000624 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000624 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000624 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000624 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000624 */ 					switch (__attrib0__) {
/* 000624 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 					}
/* 000624 */ 				}
/* 000624 */ 			}
/* 000624 */ 		}
/* 000624 */ 		else {
/* 000624 */ 		}
/* 000640 */ 		if (__t__ (self._line_no_calc === null)) {
/* 000641 */ 			self._line_no_calc = (function () {
/* 000641 */ 				var __accu0__ = _util;
/* 000641 */ 				return __call__ (__accu0__.LineNumbersCalculator, __accu0__, self.s);
/* 000641 */ 			}) ();
/* 000641 */ 		}
/* 000643 */ 		return (function () {
/* 000643 */ 			var __accu0__ = self._line_no_calc;
/* 000643 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: as_dict}));
/* 000643 */ 		}) ();
/* 000643 */ 	});},
/* 000646 */ 	get format_pos () {return __get__ (this, function (self, pos) {
/* 000646 */ 		if (arguments.length) {
/* 000646 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000646 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000646 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000646 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000646 */ 					switch (__attrib0__) {
/* 000646 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 					}
/* 000646 */ 				}
/* 000646 */ 			}
/* 000646 */ 		}
/* 000646 */ 		else {
/* 000646 */ 		}
/* 000647 */ 		return __call__ (format_pos, null, pos, __kwargtrans__ ((function () {
/* 000647 */ 			var __accu0__ = self;
/* 000647 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: true}));
/* 000647 */ 		}) ()));
/* 000647 */ 	});},
/* 000650 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000650 */ 		if (arguments.length) {
/* 000650 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000650 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000650 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000650 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000650 */ 					switch (__attrib0__) {
/* 000650 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 					}
/* 000650 */ 				}
/* 000650 */ 			}
/* 000650 */ 		}
/* 000650 */ 		else {
/* 000650 */ 		}
/* 000651 */ 		return (function () {
/* 000651 */ 			var __accu0__ = '<LatexWalker {}>';
/* 000651 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self));
/* 000651 */ 		}) ();
/* 000651 */ 	});}
/* 000651 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexwalker._walker.map