/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 11:35:12
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
/* 000037 */ export {LatexCommentNode, ParsingState, LatexSpecialsNode, format_pos, LatexWalkerNodesParseError, __all__, LatexCharsNode, _util, LatexGroupNode, LatexWalkerError, LatexNodesVisitor, LatexNodeList, macrospec, _basestring, LatexMathNode, LatexWalkerParseErrorFormatter, _get_content_as_chars, LatexEnvironmentNode, LatexWalkerTokenParseError, LatexMacroNode, LatexNode, LatexWalkerEndOfStream, latexnodes, parsers, _unicode_from_str, _update_posposend_from_nodelist, LatexWalkerParseError, ParsedArguments};
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
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, s, latex_context) {
/* 000170 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000170 */ 			var latex_context = null;
/* 000170 */ 		};
/* 000170 */ 		var kwargs = dict ();
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 				delete kwargs.__kwargtrans__;
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000172 */ 		self.s = s;
/* 000175 */ 		self._line_no_calc = null;
/* 000177 */ 		self.debug_nodes = false;
/* 000179 */ 		if (__t__ (latex_context === null)) {
/* 000181 */ 			var latex_context = __call__ (_legacy_pyltxenc1_do, null, 'LatexWalker_init_from_macro_dict', self, kwargs);
/* 000185 */ 			if (__t__ (latex_context === null)) {
/* 000187 */ 				var latex_context = __call__ (get_default_latex_context_db, null);
/* 000187 */ 			}
/* 000187 */ 		}
/* 000191 */ 		else if (__t__ (__in__ ('macro_dict', kwargs))) {
/* 000192 */ 			var __except0__ = __call__ (py_TypeError, null, 'Cannot specify both `latex_context=` and `macro_dict=` arguments');
/* 000192 */ 			__except0__.__cause__ = null;
/* 000192 */ 			throw __except0__;
/* 000192 */ 		}
/* 000200 */ 		if (__t__ (latex_context !== null)) {
/* 000201 */ 			(function () {
/* 000201 */ 				var __accu0__ = latex_context;
/* 000201 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000201 */ 			}) ();
/* 000202 */ 			self.default_parsing_state = __call__ (ParsingState, null, __kwargtrans__ ({s: self.s, latex_context: latex_context}));
/* 000202 */ 		}
/* 000205 */ 		else {
/* 000209 */ 			self.default_parsing_state = null;
/* 000209 */ 		}
/* 000215 */ 		self.tolerant_parsing = (function () {
/* 000215 */ 			var __accu0__ = kwargs;
/* 000215 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', true);
/* 000215 */ 		}) ();
/* 000216 */ 		self.strict_braces = (function () {
/* 000216 */ 			var __accu0__ = kwargs;
/* 000216 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'strict_braces', false);
/* 000216 */ 		}) ();
/* 000218 */ 		if (__t__ (__in__ ('keep_inline_math', kwargs))) {
/* 000219 */ 			(function () {
/* 000219 */ 				var __accu0__ = _util;
/* 000219 */ 				return __call__ (__accu0__.pylatexenc_deprecated_2, __accu0__, 'The keep_inline_math=... option in LatexWalker() has no effect in pylatexenc 2.  Please consider using the more versatile option math_mode=... in LatexNodes2Text() instead.');
/* 000219 */ 			}) ();
/* 000219 */ 			delete __getitem__ (kwargs, 'keep_inline_math');
/* 000219 */ 		}
/* 000226 */ 		if (__t__ (kwargs)) {
/* 000228 */ 			(function () {
/* 000228 */ 				var __accu0__ = logger;
/* 000228 */ 				return __call__ (__accu0__.warning, __accu0__, 'LatexWalker(): Unknown flag(s) encountered: %r', (function () {
/* 000228 */ 					var __accu1__ = kwargs;
/* 000228 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000228 */ 				}) ());
/* 000228 */ 			}) ();
/* 000228 */ 		}
/* 000230 */ 		__call__ (__call__ (__super__, null, LatexWalker, '__init__'), null, self);
/* 000230 */ 	});},
/* 000233 */ 	make_latex_group_parser: parsers.LatexDelimitedGroupParser,
/* 000235 */ 	make_latex_math_parser: parsers.LatexMathParser,
/* 000238 */ 	get make_parsing_state () {return __get__ (this, function (self) {
/* 000238 */ 		var kwargs = dict ();
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 				delete kwargs.__kwargtrans__;
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000254 */ 		return (function () {
/* 000254 */ 			var __accu0__ = self.default_parsing_state;
/* 000254 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000254 */ 		}) ();
/* 000254 */ 	});},
/* 000256 */ 	get parse_flags () {return __get__ (this, function (self) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000267 */ 		return dict ({'tolerant_parsing': self.tolerant_parsing, 'strict_braces': self.strict_braces, 'keep_inline_math': null});
/* 000267 */ 	});},
/* 000274 */ 	get _report_ignore_parse_error () {return __get__ (this, function (self, exc) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000275 */ 		(function () {
/* 000275 */ 			var __accu0__ = logger;
/* 000275 */ 			return __call__ (__accu0__.info, __accu0__, 'Ignoring parse error (tolerant parsing mode): %s', exc);
/* 000275 */ 		}) ();
/* 000275 */ 	});},
/* 000278 */ 	get check_tolerant_parsing_ignore_error () {return __get__ (this, function (self, exc) {
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000293 */ 		if (__t__ (__t__ (!__t__ ((self.tolerant_parsing))) || !__t__ ((__call__ (isinstance, null, exc, LatexWalkerError))))) {
/* 000294 */ 			return exc;
/* 000294 */ 		}
/* 000297 */ 		(function () {
/* 000297 */ 			var __accu0__ = self;
/* 000297 */ 			return __call__ (__accu0__._report_ignore_parse_error, __accu0__, exc);
/* 000297 */ 		}) ();
/* 000299 */ 		return null;
/* 000302 */ 	});},
/* 000302 */ 	_ParsingContext: __class__ ('_ParsingContext', [object], {
/* 000302 */ 		__module__: __name__,
/* 000307 */ 		get __init__ () {return __get__ (this, function (self, latex_walker, open_context) {
/* 000307 */ 			if (arguments.length) {
/* 000307 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 						switch (__attrib0__) {
/* 000307 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 							case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						}
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 			else {
/* 000307 */ 			}
/* 000308 */ 			__call__ (__call__ (__super__, null, LatexWalker._ParsingContext, '__init__'), null, self);
/* 000310 */ 			self.latex_walker = latex_walker;
/* 000311 */ 			self.open_context = open_context;
/* 000313 */ 			self.recovery_from_exception = null;
/* 000313 */ 		});},
/* 000315 */ 		get __enter__ () {return __get__ (this, function (self) {
/* 000315 */ 			if (arguments.length) {
/* 000315 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 						switch (__attrib0__) {
/* 000315 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						}
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 			else {
/* 000315 */ 			}
/* 000316 */ 			return self;
/* 000316 */ 		});},
/* 000318 */ 		get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, exc_traceback) {
/* 000318 */ 			if (arguments.length) {
/* 000318 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 						switch (__attrib0__) {
/* 000318 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 							case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 							case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 							case 'exc_traceback': var exc_traceback = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						}
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 			else {
/* 000318 */ 			}
/* 000319 */ 			if (__t__ (__t__ (exc_value !== null) && __call__ (isinstance, null, exc_value, LatexWalkerParseError))) {
/* 000320 */ 				var e = exc_value;
/* 000321 */ 				if (__t__ (self.open_context)) {
/* 000322 */ 					var __left0__ = self.open_context;
/* 000322 */ 					var what = __left0__ [0];
/* 000322 */ 					var tok = __left0__ [1];
/* 000323 */ 					if (__t__ (what !== null)) {
/* 000324 */ 						if (__t__ (tok !== null)) {
/* 000325 */ 							(function () {
/* 000325 */ 								var __accu0__ = e.open_contexts;
/* 000327 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, tok.pos, ...(function () {
/* 000327 */ 									var __accu1__ = self.latex_walker;
/* 000327 */ 									return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, tok.pos);
/* 000327 */ 								}) ()));
/* 000327 */ 							}) ();
/* 000327 */ 						}
/* 000328 */ 						else {
/* 000330 */ 							(function () {
/* 000330 */ 								var __accu0__ = e.open_contexts;
/* 000331 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, null, __neg__ (1), __neg__ (1)));
/* 000331 */ 							}) ();
/* 000331 */ 						}
/* 000331 */ 					}
/* 000331 */ 				}
/* 000334 */ 				if (__t__ (__t__ (__call__ (hasattr, null, e, 'pos')) && __t__ (e.lineno === null) && e.colno === null)) {
/* 000335 */ 					var epos = __call__ (getattr, null, e, 'pos', null);
/* 000336 */ 					var __left0__ = (function () {
/* 000336 */ 						var __accu0__ = self.latex_walker;
/* 000336 */ 						return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, epos);
/* 000336 */ 					}) ();
/* 000336 */ 					e.lineno = __left0__ [0];
/* 000336 */ 					e.colno = __left0__ [1];
/* 000336 */ 				}
/* 000337 */ 				var e = (function () {
/* 000337 */ 					var __accu0__ = self.latex_walker;
/* 000337 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000337 */ 				}) ();
/* 000338 */ 				if (__t__ (e === null)) {
/* 000340 */ 					self.recovery_from_exception = e;
/* 000341 */ 					return true;
/* 000341 */ 				}
/* 000343 */ 				return null;
/* 000343 */ 			}
/* 000343 */ 		});},
/* 000345 */ 		get perform_recovery_nodes_and_parsing_state_delta () {return __get__ (this, function (self, token_reader) {
/* 000345 */ 			if (arguments.length) {
/* 000345 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 						switch (__attrib0__) {
/* 000345 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						}
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 			else {
/* 000345 */ 			}
/* 000346 */ 			if (__t__ (self.recovery_from_exception === null)) {
/* 000347 */ 				var __except0__ = __call__ (RuntimeError, null, 'No exception had happened to try to recover nodes from');
/* 000347 */ 				__except0__.__cause__ = null;
/* 000347 */ 				throw __except0__;
/* 000347 */ 			}
/* 000349 */ 			var nodes = null;
/* 000350 */ 			var parsing_state_delta = null;
/* 000351 */ 			var reset_at_tok = null;
/* 000354 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_nodes'))) {
/* 000356 */ 				var nodes = self.recovery_from_exception.recovery_nodes;
/* 000356 */ 			}
/* 000358 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_parsing_state_delta'))) {
/* 000359 */ 				var parsing_state_delta = self.recovery_from_exception.recovery_parsing_state_delta;
/* 000359 */ 			}
/* 000363 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_at_token'))) {
/* 000364 */ 				var reset_at_tok = self.recovery_from_exception.recovery_at_token;
/* 000364 */ 			}
/* 000366 */ 			if (__t__ (reset_at_tok !== null)) {
/* 000367 */ 				(function () {
/* 000367 */ 					var __accu0__ = token_reader;
/* 000367 */ 					return __call__ (__accu0__.move_to_token, __accu0__, reset_at_tok);
/* 000367 */ 				}) ();
/* 000367 */ 			}
/* 000368 */ 			else {
/* 000369 */ 				var reset_past_tok = null;
/* 000370 */ 				if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_past_token'))) {
/* 000371 */ 					var reset_past_tok = self.recovery_from_exception.recovery_past_token;
/* 000371 */ 				}
/* 000372 */ 				if (__t__ (reset_past_tok !== null)) {
/* 000373 */ 					(function () {
/* 000373 */ 						var __accu0__ = token_reader;
/* 000373 */ 						return __call__ (__accu0__.move_past_token, __accu0__, reset_past_tok);
/* 000373 */ 					}) ();
/* 000373 */ 				}
/* 000373 */ 			}
/* 000375 */ 			return tuple ([nodes, parsing_state_delta]);
/* 000375 */ 		});}
/* 000375 */ 	}),
/* 000377 */ 	get new_parsing_open_context () {return __get__ (this, function (self, open_context_name, open_context_token) {
/* 000377 */ 		if (typeof open_context_name == 'undefined' || (open_context_name != null && open_context_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000377 */ 			var open_context_name = null;
/* 000377 */ 		};
/* 000377 */ 		if (typeof open_context_token == 'undefined' || (open_context_token != null && open_context_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000377 */ 			var open_context_token = null;
/* 000377 */ 		};
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'open_context_name': var open_context_name = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'open_context_token': var open_context_token = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000411 */ 		return (function () {
/* 000411 */ 			var __accu0__ = LatexWalker;
/* 000411 */ 			return __call__ (__accu0__._ParsingContext, __accu0__, self, tuple ([open_context_name, open_context_token]));
/* 000411 */ 		}) ();
/* 000411 */ 	});},
/* 000413 */ 	get make_token_reader () {return __get__ (this, function (self, pos) {
/* 000413 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000413 */ 			var pos = null;
/* 000413 */ 		};
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000420 */ 		var token_reader = (function () {
/* 000420 */ 			var __accu0__ = latexnodes;
/* 000420 */ 			return __call__ (__accu0__.LatexTokenReader, __accu0__, self.s, __kwargtrans__ ({tolerant_parsing: self.tolerant_parsing}));
/* 000420 */ 		}) ();
/* 000422 */ 		if (__t__ (pos !== null)) {
/* 000423 */ 			(function () {
/* 000423 */ 				var __accu0__ = token_reader;
/* 000423 */ 				return __call__ (__accu0__.move_to_pos_chars, __accu0__, pos);
/* 000423 */ 			}) ();
/* 000423 */ 		}
/* 000424 */ 		return token_reader;
/* 000424 */ 	});},
/* 000426 */ 	get parse_content () {return __get__ (this, function (self, parser, token_reader, parsing_state, open_context) {
/* 000426 */ 		if (typeof token_reader == 'undefined' || (token_reader != null && token_reader.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var token_reader = null;
/* 000426 */ 		};
/* 000426 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var parsing_state = null;
/* 000426 */ 		};
/* 000426 */ 		if (typeof open_context == 'undefined' || (open_context != null && open_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000426 */ 			var open_context = null;
/* 000426 */ 		};
/* 000426 */ 		if (arguments.length) {
/* 000426 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000426 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000426 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000426 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000426 */ 					switch (__attrib0__) {
/* 000426 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 					}
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		else {
/* 000426 */ 		}
/* 000469 */ 		if (__t__ (token_reader === null)) {
/* 000470 */ 			var token_reader = (function () {
/* 000470 */ 				var __accu0__ = self;
/* 000470 */ 				return __call__ (__accu0__.make_token_reader, __accu0__);
/* 000470 */ 			}) ();
/* 000470 */ 		}
/* 000471 */ 		if (__t__ (parsing_state === null)) {
/* 000472 */ 			var parsing_state = (function () {
/* 000472 */ 				var __accu0__ = self;
/* 000472 */ 				return __call__ (__accu0__.make_parsing_state, __accu0__);
/* 000472 */ 			}) ();
/* 000472 */ 		}
/* 000474 */ 		var nodes = null;
/* 000475 */ 		var info = null;
/* 000477 */ 		var __left0__ = tuple ([null, null]);
/* 000477 */ 		var open_context_name = __left0__ [0];
/* 000477 */ 		var open_context_tok = __left0__ [1];
/* 000478 */ 		if (__t__ (open_context)) {
/* 000479 */ 			var __left0__ = open_context;
/* 000479 */ 			var open_context_name = __left0__ [0];
/* 000479 */ 			var open_context_tok = __left0__ [1];
/* 000479 */ 		}
/* 000481 */ 		var start_pos = (function () {
/* 000481 */ 			var __accu0__ = token_reader;
/* 000481 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000481 */ 		}) ();
/* 000482 */ 		// pass;
/* 000487 */ 		var pc = (function () {
/* 000487 */ 			var __accu0__ = self;
/* 000487 */ 			return __call__ (__accu0__.new_parsing_open_context, __accu0__, open_context_name, open_context_tok);
/* 000487 */ 		}) ();
/* 000487 */ 		try {
/* 000487 */ 			pc.__enter__ ();
/* 000489 */ 			try {
/* 000491 */ 				var __left0__ = (function () {
/* 000491 */ 					var __accu0__ = parser;
/* 000491 */ 					return __call__ (__accu0__.parse, __accu0__, __kwargtrans__ ({latex_walker: self, token_reader: token_reader, parsing_state: parsing_state}));
/* 000491 */ 				}) ();
/* 000491 */ 				var nodes = __left0__ [0];
/* 000491 */ 				var info = __left0__ [1];
/* 000491 */ 			}
/* 000491 */ 			catch (__except0__) {
/* 000491 */ 				if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000498 */ 					(function () {
/* 000498 */ 						var __accu0__ = logger;
/* 000498 */ 						return __call__ (__accu0__.warning, __accu0__, 'End of stream encountered when parsing content with %s (%s)', parser.__class__.__name__, open_context_name);
/* 000498 */ 					}) ();
/* 000500 */ 					var __left0__ = tuple ([null, null]);
/* 000500 */ 					var nodes = __left0__ [0];
/* 000500 */ 					var info = __left0__ [1];
/* 000500 */ 				}
/* 000500 */ 				else {
/* 000500 */ 					throw __except0__;
/* 000500 */ 				}
/* 000500 */ 			}
/* 000500 */ 			pc.__exit__ ();
/* 000500 */ 		}
/* 000500 */ 		catch (__except0__) {
/* 000500 */ 			if (! (pc.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000500 */ 				throw __except0__;
/* 000500 */ 			}
/* 000500 */ 		}
/* 000502 */ 		if (__t__ (pc.recovery_from_exception !== null)) {
/* 000503 */ 			var __left0__ = (function () {
/* 000503 */ 				var __accu0__ = pc;
/* 000503 */ 				return __call__ (__accu0__.perform_recovery_nodes_info, __accu0__, token_reader);
/* 000503 */ 			}) ();
/* 000503 */ 			var nodes = __left0__ [0];
/* 000503 */ 			var info = __left0__ [1];
/* 000503 */ 		}
/* 000505 */ 		// pass;
/* 000510 */ 		return tuple ([nodes, info]);
/* 000510 */ 	});},
/* 000513 */ 	get make_nodes_collector () {return __get__ (this, function (self, token_reader, parsing_state) {
/* 000513 */ 		var kwargs = dict ();
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 				delete kwargs.__kwargtrans__;
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000517 */ 		return (function () {
/* 000517 */ 			var __accu0__ = latexnodes;
/* 000517 */ 			return __call__ (__accu0__.LatexNodesCollector, __accu0__, self, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000517 */ 		}) ();
/* 000517 */ 	});},
/* 000524 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000524 */ 		var kwargs = dict ();
/* 000524 */ 		if (arguments.length) {
/* 000524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000524 */ 					switch (__attrib0__) {
/* 000524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000524 */ 					}
/* 000524 */ 				}
/* 000524 */ 				delete kwargs.__kwargtrans__;
/* 000524 */ 			}
/* 000524 */ 		}
/* 000524 */ 		else {
/* 000524 */ 		}
/* 000553 */ 		var __left0__ = tuple ([(function () {
/* 000553 */ 			var __accu0__ = kwargs;
/* 000553 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos');
/* 000553 */ 		}) (), (function () {
/* 000553 */ 			var __accu0__ = kwargs;
/* 000553 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000553 */ 		}) (), (function () {
/* 000553 */ 			var __accu0__ = kwargs;
/* 000553 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000553 */ 		}) ()]);
/* 000553 */ 		var pos = __left0__ [0];
/* 000553 */ 		var pos_end = __left0__ [1];
/* 000553 */ 		var parsing_state = __left0__ [2];
/* 000555 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (pos !== null) && __in__ ('len', kwargs))) {
/* 000556 */ 			(function () {
/* 000556 */ 				var __accu0__ = _util;
/* 000556 */ 				return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, 'make_node(..., len=..., ...); use ‘pos_end=’ instead of ‘len=’');
/* 000556 */ 			}) ();
/* 000558 */ 			var len_ = __getitem__ (kwargs, 'len');
/* 000559 */ 			var pos_end = __add__ (pos, len_);
/* 000559 */ 		}
/* 000561 */ 		var node = __call__ (node_class, null, __kwargtrans__ (__mergekwargtrans__ ({pos: pos, pos_end: pos_end, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000563 */ 		if (__t__ (self.debug_nodes)) {
/* 000564 */ 			// pass;
/* 000564 */ 		}
/* 000567 */ 		return node;
/* 000567 */ 	});},
/* 000569 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000569 */ 		var kwargs = dict ();
/* 000569 */ 		if (arguments.length) {
/* 000569 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000569 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000569 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000569 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000569 */ 					switch (__attrib0__) {
/* 000569 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000569 */ 					}
/* 000569 */ 				}
/* 000569 */ 				delete kwargs.__kwargtrans__;
/* 000569 */ 			}
/* 000569 */ 		}
/* 000569 */ 		else {
/* 000569 */ 		}
/* 000580 */ 		var parsing_state = (function () {
/* 000580 */ 			var __accu0__ = kwargs;
/* 000580 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000580 */ 		}) ();
/* 000582 */ 		return __call__ (LatexNodeList, null, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000582 */ 	});},
/* 000589 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000589 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000589 */ 			var as_dict = false;
/* 000589 */ 		};
/* 000589 */ 		if (arguments.length) {
/* 000589 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 					switch (__attrib0__) {
/* 000589 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 		}
/* 000589 */ 		else {
/* 000589 */ 		}
/* 000605 */ 		if (__t__ (self._line_no_calc === null)) {
/* 000606 */ 			self._line_no_calc = (function () {
/* 000606 */ 				var __accu0__ = _util;
/* 000606 */ 				return __call__ (__accu0__.LineNumbersCalculator, __accu0__, self.s);
/* 000606 */ 			}) ();
/* 000606 */ 		}
/* 000608 */ 		return (function () {
/* 000608 */ 			var __accu0__ = self._line_no_calc;
/* 000608 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: as_dict}));
/* 000608 */ 		}) ();
/* 000608 */ 	});},
/* 000611 */ 	get format_pos () {return __get__ (this, function (self, pos) {
/* 000611 */ 		if (arguments.length) {
/* 000611 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000611 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000611 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000611 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000611 */ 					switch (__attrib0__) {
/* 000611 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000611 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000611 */ 					}
/* 000611 */ 				}
/* 000611 */ 			}
/* 000611 */ 		}
/* 000611 */ 		else {
/* 000611 */ 		}
/* 000612 */ 		return __call__ (format_pos, null, pos, __kwargtrans__ ((function () {
/* 000612 */ 			var __accu0__ = self;
/* 000612 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: true}));
/* 000612 */ 		}) ()));
/* 000612 */ 	});},
/* 000615 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000615 */ 		if (arguments.length) {
/* 000615 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000615 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000615 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000615 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000615 */ 					switch (__attrib0__) {
/* 000615 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000615 */ 					}
/* 000615 */ 				}
/* 000615 */ 			}
/* 000615 */ 		}
/* 000615 */ 		else {
/* 000615 */ 		}
/* 000616 */ 		return (function () {
/* 000616 */ 			var __accu0__ = '<LatexWalker {}>';
/* 000616 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self));
/* 000616 */ 		}) ();
/* 000616 */ 	});}
/* 000616 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexwalker._walker.map