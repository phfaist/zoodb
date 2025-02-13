/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:50
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
/* 000046 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000045 */ import {format_pos} from './pylatexenc.latexnodes._exctypes.js';
/* 000044 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000042 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000041 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000039 */ import * as _util from './pylatexenc._util.js';
/* 000037 */ import * as __module_re__ from './re.js';
/* 000037 */ __nest__ (re, '', __module_re__);
/* 000037 */ export {_unicode_from_str, LatexCommentNode, LatexMacroNode, _display_abbrev_str, ParsedArguments, to_str, LatexMathNode, format_pos, LatexGroupNode, _basestring, latex_node_types, LatexWalkerNodesParseError, LatexWalkerTokenParseError, LatexWalkerEndOfStream, latexnodes, LatexNode, _update_posposend_from_nodelist, LatexEnvironmentNode, LatexCharsNode, LatexWalkerError, LatexNodeList, _get_content_as_chars, LatexNodesVisitor, _display_str_delimiters, LatexWalkerLocatedErrorFormatter, LatexWalkerLocatedError, ParsingState, __all__, _util, LatexWalkerParseError, parsers, LatexSpecialsNode, _UseList, macrospec};
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
/* 000205 */ 		self.line_number_offset = (function () {
/* 000205 */ 			var __accu0__ = kwargs;
/* 000205 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'line_number_offset', null);
/* 000205 */ 		}) ();
/* 000206 */ 		self.first_line_column_offset = (function () {
/* 000206 */ 			var __accu0__ = kwargs;
/* 000206 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'first_line_column_offset', null);
/* 000206 */ 		}) ();
/* 000207 */ 		self.column_offset = (function () {
/* 000207 */ 			var __accu0__ = kwargs;
/* 000207 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'column_offset', null);
/* 000207 */ 		}) ();
/* 000209 */ 		if (__t__ (self.line_number_offset === null)) {
/* 000210 */ 			self.line_number_offset = 1;
/* 000210 */ 		}
/* 000211 */ 		if (__t__ (self.first_line_column_offset === null)) {
/* 000212 */ 			self.first_line_column_offset = 0;
/* 000212 */ 		}
/* 000213 */ 		if (__t__ (self.column_offset === null)) {
/* 000214 */ 			self.column_offset = 0;
/* 000214 */ 		}
/* 000217 */ 		self._line_no_calc = null;
/* 000219 */ 		self.debug_nodes = false;
/* 000221 */ 		if (__t__ (default_parsing_state !== null)) {
/* 000222 */ 			self.default_parsing_state = default_parsing_state;
/* 000224 */ 			if (__t__ (latex_context !== null)) {
/* 000225 */ 				var __except0__ = __call__ (ValueError, null, 'You cannot specify both the default_parsing_state= and the latex_context= arguments');
/* 000225 */ 				__except0__.__cause__ = null;
/* 000225 */ 				throw __except0__;
/* 000225 */ 			}
/* 000225 */ 		}
/* 000226 */ 		else {
/* 000228 */ 			if (__t__ (latex_context === null)) {
/* 000230 */ 				var latex_context = __call__ (_legacy_pyltxenc1_do, null, 'LatexWalker_init_from_macro_dict', self, kwargs);
/* 000234 */ 				if (__t__ (latex_context === null)) {
/* 000236 */ 					var latex_context = __call__ (get_default_latex_context_db, null);
/* 000236 */ 				}
/* 000236 */ 			}
/* 000240 */ 			else if (__t__ (__in__ ('macro_dict', kwargs))) {
/* 000241 */ 				var __except0__ = __call__ (py_TypeError, null, 'Cannot specify both `latex_context=` and `macro_dict=` arguments');
/* 000241 */ 				__except0__.__cause__ = null;
/* 000241 */ 				throw __except0__;
/* 000241 */ 			}
/* 000248 */ 			if (__t__ (latex_context !== null)) {
/* 000249 */ 				(function () {
/* 000249 */ 					var __accu0__ = latex_context;
/* 000249 */ 					return __call__ (__accu0__.freeze, __accu0__);
/* 000249 */ 				}) ();
/* 000250 */ 				self.default_parsing_state = __call__ (ParsingState, null, __kwargtrans__ ({s: self.s, latex_context: latex_context}));
/* 000250 */ 			}
/* 000253 */ 			else {
/* 000257 */ 				self.default_parsing_state = null;
/* 000257 */ 			}
/* 000257 */ 		}
/* 000263 */ 		self.tolerant_parsing = (function () {
/* 000263 */ 			var __accu0__ = kwargs;
/* 000263 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'tolerant_parsing', true);
/* 000263 */ 		}) ();
/* 000264 */ 		self.strict_braces = (function () {
/* 000264 */ 			var __accu0__ = kwargs;
/* 000264 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'strict_braces', false);
/* 000264 */ 		}) ();
/* 000266 */ 		if (__t__ (__in__ ('keep_inline_math', kwargs))) {
/* 000267 */ 			(function () {
/* 000267 */ 				var __accu0__ = _util;
/* 000267 */ 				return __call__ (__accu0__.pylatexenc_deprecated_2, __accu0__, 'The keep_inline_math=... option in LatexWalker() has no effect in pylatexenc 2.  Please consider using the more versatile option math_mode=... in LatexNodes2Text() instead.');
/* 000267 */ 			}) ();
/* 000267 */ 			delete __getitem__ (kwargs, 'keep_inline_math');
/* 000267 */ 		}
/* 000274 */ 		if (__t__ (kwargs)) {
/* 000276 */ 			(function () {
/* 000276 */ 				var __accu0__ = logger;
/* 000276 */ 				return __call__ (__accu0__.warning, __accu0__, 'LatexWalker(): Unknown flag(s) encountered: %r', (function () {
/* 000276 */ 					var __accu1__ = kwargs;
/* 000276 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000276 */ 				}) ());
/* 000276 */ 			}) ();
/* 000276 */ 		}
/* 000278 */ 		__call__ (__call__ (__super__, null, LatexWalker, '__init__'), null, self);
/* 000278 */ 	});},
/* 000281 */ 	make_latex_group_parser: parsers.LatexDelimitedGroupParser,
/* 000283 */ 	make_latex_math_parser: parsers.LatexMathParser,
/* 000286 */ 	get make_parsing_state () {return __get__ (this, function (self) {
/* 000286 */ 		var kwargs = dict ();
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 				delete kwargs.__kwargtrans__;
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = self.default_parsing_state;
/* 000302 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000304 */ 	get parse_flags () {return __get__ (this, function (self) {
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
/* 000315 */ 		return dict ({'tolerant_parsing': self.tolerant_parsing, 'strict_braces': self.strict_braces, 'keep_inline_math': null});
/* 000315 */ 	});},
/* 000322 */ 	get _report_ignore_parse_error () {return __get__ (this, function (self, exc) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000323 */ 		(function () {
/* 000323 */ 			var __accu0__ = logger;
/* 000323 */ 			return __call__ (__accu0__.info, __accu0__, 'Ignoring parse error (tolerant parsing mode): %s', exc);
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000326 */ 	get check_tolerant_parsing_ignore_error () {return __get__ (this, function (self, exc) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'exc': var exc = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000341 */ 		if (__t__ (__t__ (!__t__ ((self.tolerant_parsing))) || !__t__ ((__call__ (isinstance, null, exc, LatexWalkerError))))) {
/* 000342 */ 			return exc;
/* 000342 */ 		}
/* 000345 */ 		(function () {
/* 000345 */ 			var __accu0__ = self;
/* 000345 */ 			return __call__ (__accu0__._report_ignore_parse_error, __accu0__, exc);
/* 000345 */ 		}) ();
/* 000347 */ 		return null;
/* 000350 */ 	});},
/* 000350 */ 	_ParsingContext: __class__ ('_ParsingContext', [object], {
/* 000350 */ 		__module__: __name__,
/* 000355 */ 		get __init__ () {return __get__ (this, function (self, latex_walker, open_context) {
/* 000355 */ 			if (arguments.length) {
/* 000355 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 						switch (__attrib0__) {
/* 000355 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 							case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						}
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 			else {
/* 000355 */ 			}
/* 000356 */ 			__call__ (__call__ (__super__, null, LatexWalker._ParsingContext, '__init__'), null, self);
/* 000358 */ 			self.latex_walker = latex_walker;
/* 000359 */ 			self.open_context = open_context;
/* 000361 */ 			self.recovery_from_exception = null;
/* 000361 */ 		});},
/* 000363 */ 		get __enter__ () {return __get__ (this, function (self) {
/* 000363 */ 			if (arguments.length) {
/* 000363 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 						switch (__attrib0__) {
/* 000363 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						}
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 			else {
/* 000363 */ 			}
/* 000364 */ 			return self;
/* 000364 */ 		});},
/* 000366 */ 		get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, exc_traceback) {
/* 000366 */ 			if (arguments.length) {
/* 000366 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 						switch (__attrib0__) {
/* 000366 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 							case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 							case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 							case 'exc_traceback': var exc_traceback = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						}
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 			else {
/* 000366 */ 			}
/* 000367 */ 			if (__t__ (__t__ (exc_value !== null) && __call__ (isinstance, null, exc_value, LatexWalkerParseError))) {
/* 000368 */ 				var e = exc_value;
/* 000369 */ 				if (__t__ (self.open_context)) {
/* 000370 */ 					var __left0__ = self.open_context;
/* 000370 */ 					var what = __left0__ [0];
/* 000370 */ 					var tok = __left0__ [1];
/* 000371 */ 					if (__t__ (what !== null)) {
/* 000372 */ 						if (__t__ (tok !== null)) {
/* 000373 */ 							(function () {
/* 000373 */ 								var __accu0__ = e.open_contexts;
/* 000375 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, tok.pos, ...(function () {
/* 000375 */ 									var __accu1__ = self.latex_walker;
/* 000375 */ 									return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, tok.pos);
/* 000375 */ 								}) ()));
/* 000375 */ 							}) ();
/* 000375 */ 						}
/* 000376 */ 						else {
/* 000378 */ 							(function () {
/* 000378 */ 								var __accu0__ = e.open_contexts;
/* 000379 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (_maketuple, null, what, null, __neg__ (1), __neg__ (1)));
/* 000379 */ 							}) ();
/* 000379 */ 						}
/* 000379 */ 					}
/* 000379 */ 				}
/* 000382 */ 				if (__t__ (__t__ (__call__ (hasattr, null, e, 'pos')) && __t__ (e.lineno === null) && e.colno === null)) {
/* 000383 */ 					var epos = __call__ (getattr, null, e, 'pos');
/* 000384 */ 					var __left0__ = (function () {
/* 000384 */ 						var __accu0__ = self.latex_walker;
/* 000384 */ 						return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, epos);
/* 000384 */ 					}) ();
/* 000384 */ 					e.lineno = __left0__ [0];
/* 000384 */ 					e.colno = __left0__ [1];
/* 000384 */ 				}
/* 000385 */ 				var e = (function () {
/* 000385 */ 					var __accu0__ = self.latex_walker;
/* 000385 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000385 */ 				}) ();
/* 000386 */ 				if (__t__ (e === null)) {
/* 000388 */ 					self.recovery_from_exception = e;
/* 000389 */ 					return true;
/* 000389 */ 				}
/* 000391 */ 				return null;
/* 000391 */ 			}
/* 000391 */ 		});},
/* 000393 */ 		get perform_recovery_nodes_and_parsing_state_delta () {return __get__ (this, function (self, token_reader) {
/* 000393 */ 			if (arguments.length) {
/* 000393 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 						switch (__attrib0__) {
/* 000393 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						}
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 			else {
/* 000393 */ 			}
/* 000394 */ 			if (__t__ (self.recovery_from_exception === null)) {
/* 000395 */ 				var __except0__ = __call__ (RuntimeError, null, 'No exception had happened to try to recover nodes from');
/* 000395 */ 				__except0__.__cause__ = null;
/* 000395 */ 				throw __except0__;
/* 000395 */ 			}
/* 000397 */ 			var nodes = null;
/* 000398 */ 			var parsing_state_delta = null;
/* 000399 */ 			var reset_at_tok = null;
/* 000402 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_nodes'))) {
/* 000404 */ 				var nodes = self.recovery_from_exception.recovery_nodes;
/* 000404 */ 			}
/* 000406 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_parsing_state_delta'))) {
/* 000407 */ 				var parsing_state_delta = self.recovery_from_exception.recovery_parsing_state_delta;
/* 000407 */ 			}
/* 000411 */ 			if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_at_token'))) {
/* 000412 */ 				var reset_at_tok = self.recovery_from_exception.recovery_at_token;
/* 000412 */ 			}
/* 000414 */ 			if (__t__ (reset_at_tok !== null)) {
/* 000415 */ 				(function () {
/* 000415 */ 					var __accu0__ = token_reader;
/* 000415 */ 					return __call__ (__accu0__.move_to_token, __accu0__, reset_at_tok);
/* 000415 */ 				}) ();
/* 000415 */ 			}
/* 000416 */ 			else {
/* 000417 */ 				var reset_past_tok = null;
/* 000418 */ 				if (__t__ (__call__ (hasattr, null, self.recovery_from_exception, 'recovery_past_token'))) {
/* 000419 */ 					var reset_past_tok = self.recovery_from_exception.recovery_past_token;
/* 000419 */ 				}
/* 000420 */ 				if (__t__ (reset_past_tok !== null)) {
/* 000421 */ 					(function () {
/* 000421 */ 						var __accu0__ = token_reader;
/* 000421 */ 						return __call__ (__accu0__.move_past_token, __accu0__, reset_past_tok);
/* 000421 */ 					}) ();
/* 000421 */ 				}
/* 000421 */ 			}
/* 000423 */ 			return tuple ([nodes, parsing_state_delta]);
/* 000423 */ 		});}
/* 000423 */ 	}),
/* 000425 */ 	get new_parsing_open_context () {return __get__ (this, function (self, open_context_name, open_context_token) {
/* 000425 */ 		if (typeof open_context_name == 'undefined' || (open_context_name != null && open_context_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000425 */ 			var open_context_name = null;
/* 000425 */ 		};
/* 000425 */ 		if (typeof open_context_token == 'undefined' || (open_context_token != null && open_context_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000425 */ 			var open_context_token = null;
/* 000425 */ 		};
/* 000425 */ 		if (arguments.length) {
/* 000425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 					switch (__attrib0__) {
/* 000425 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'open_context_name': var open_context_name = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'open_context_token': var open_context_token = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 			}
/* 000425 */ 		}
/* 000425 */ 		else {
/* 000425 */ 		}
/* 000459 */ 		return (function () {
/* 000459 */ 			var __accu0__ = LatexWalker;
/* 000459 */ 			return __call__ (__accu0__._ParsingContext, __accu0__, self, tuple ([open_context_name, open_context_token]));
/* 000459 */ 		}) ();
/* 000459 */ 	});},
/* 000461 */ 	get make_token_reader () {return __get__ (this, function (self, pos) {
/* 000461 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000461 */ 			var pos = null;
/* 000461 */ 		};
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000468 */ 		var token_reader = (function () {
/* 000468 */ 			var __accu0__ = latexnodes;
/* 000468 */ 			return __call__ (__accu0__.LatexTokenReader, __accu0__, self.s, __kwargtrans__ ({tolerant_parsing: self.tolerant_parsing}));
/* 000468 */ 		}) ();
/* 000470 */ 		if (__t__ (pos !== null)) {
/* 000471 */ 			(function () {
/* 000471 */ 				var __accu0__ = token_reader;
/* 000471 */ 				return __call__ (__accu0__.move_to_pos_chars, __accu0__, pos);
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000472 */ 		return token_reader;
/* 000472 */ 	});},
/* 000474 */ 	get parse_content () {return __get__ (this, function (self, parser, token_reader, parsing_state, open_context) {
/* 000474 */ 		if (typeof token_reader == 'undefined' || (token_reader != null && token_reader.hasOwnProperty ("__kwargtrans__"))) {;
/* 000474 */ 			var token_reader = null;
/* 000474 */ 		};
/* 000474 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000474 */ 			var parsing_state = null;
/* 000474 */ 		};
/* 000474 */ 		if (typeof open_context == 'undefined' || (open_context != null && open_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000474 */ 			var open_context = null;
/* 000474 */ 		};
/* 000474 */ 		if (arguments.length) {
/* 000474 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000474 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000474 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000474 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000474 */ 					switch (__attrib0__) {
/* 000474 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'open_context': var open_context = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 					}
/* 000474 */ 				}
/* 000474 */ 			}
/* 000474 */ 		}
/* 000474 */ 		else {
/* 000474 */ 		}
/* 000510 */ 		var the_token_reader = null;
/* 000511 */ 		var the_parsing_state = null;
/* 000513 */ 		if (__t__ (token_reader === null)) {
/* 000514 */ 			var the_token_reader = (function () {
/* 000514 */ 				var __accu0__ = self;
/* 000514 */ 				return __call__ (__accu0__.make_token_reader, __accu0__);
/* 000514 */ 			}) ();
/* 000514 */ 		}
/* 000515 */ 		else {
/* 000516 */ 			var the_token_reader = token_reader;
/* 000516 */ 		}
/* 000518 */ 		if (__t__ (parsing_state === null)) {
/* 000519 */ 			var the_parsing_state = (function () {
/* 000519 */ 				var __accu0__ = self;
/* 000519 */ 				return __call__ (__accu0__.make_parsing_state, __accu0__);
/* 000519 */ 			}) ();
/* 000519 */ 		}
/* 000520 */ 		else {
/* 000521 */ 			var the_parsing_state = parsing_state;
/* 000521 */ 		}
/* 000523 */ 		var nodes = null;
/* 000524 */ 		var info = null;
/* 000526 */ 		var __left0__ = tuple ([null, null]);
/* 000526 */ 		var open_context_name = __left0__ [0];
/* 000526 */ 		var open_context_tok = __left0__ [1];
/* 000527 */ 		if (__t__ (open_context)) {
/* 000528 */ 			var __left0__ = open_context;
/* 000528 */ 			var open_context_name = __left0__ [0];
/* 000528 */ 			var open_context_tok = __left0__ [1];
/* 000528 */ 		}
/* 000530 */ 		var start_pos = (function () {
/* 000530 */ 			var __accu0__ = the_token_reader;
/* 000530 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000530 */ 		}) ();
/* 000531 */ 		// pass;
/* 000536 */ 		var pc = (function () {
/* 000536 */ 			var __accu0__ = self;
/* 000536 */ 			return __call__ (__accu0__.new_parsing_open_context, __accu0__, open_context_name, open_context_tok);
/* 000536 */ 		}) ();
/* 000536 */ 		try {
/* 000536 */ 			pc.__enter__ ();
/* 000538 */ 			try {
/* 000540 */ 				var __left0__ = (function () {
/* 000540 */ 					var __accu0__ = parser;
/* 000540 */ 					return __call__ (__accu0__.parse, __accu0__, __kwargtrans__ ({latex_walker: self, token_reader: the_token_reader, parsing_state: the_parsing_state}));
/* 000540 */ 				}) ();
/* 000540 */ 				var nodes = __left0__ [0];
/* 000540 */ 				var info = __left0__ [1];
/* 000540 */ 			}
/* 000540 */ 			catch (__except0__) {
/* 000540 */ 				if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000547 */ 					(function () {
/* 000547 */ 						var __accu0__ = logger;
/* 000547 */ 						return __call__ (__accu0__.warning, __accu0__, 'End of stream encountered when parsing content with %s (%s)', parser.__class__.__name__, open_context_name);
/* 000547 */ 					}) ();
/* 000549 */ 					var __left0__ = tuple ([null, null]);
/* 000549 */ 					var nodes = __left0__ [0];
/* 000549 */ 					var info = __left0__ [1];
/* 000549 */ 				}
/* 000549 */ 				else {
/* 000549 */ 					throw __except0__;
/* 000549 */ 				}
/* 000549 */ 			}
/* 000549 */ 			pc.__exit__ ();
/* 000549 */ 		}
/* 000549 */ 		catch (__except0__) {
/* 000549 */ 			if (! (pc.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000549 */ 				throw __except0__;
/* 000549 */ 			}
/* 000549 */ 		}
/* 000551 */ 		if (__t__ (pc.recovery_from_exception !== null)) {
/* 000552 */ 			var __left0__ = (function () {
/* 000552 */ 				var __accu0__ = pc;
/* 000552 */ 				return __call__ (__accu0__.perform_recovery_nodes_info, __accu0__, the_token_reader);
/* 000552 */ 			}) ();
/* 000552 */ 			var nodes = __left0__ [0];
/* 000552 */ 			var info = __left0__ [1];
/* 000552 */ 		}
/* 000554 */ 		// pass;
/* 000559 */ 		return tuple ([nodes, info]);
/* 000559 */ 	});},
/* 000562 */ 	get make_nodes_collector () {return __get__ (this, function (self, token_reader, parsing_state) {
/* 000562 */ 		var kwargs = dict ();
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 				delete kwargs.__kwargtrans__;
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000566 */ 		return (function () {
/* 000566 */ 			var __accu0__ = latexnodes;
/* 000566 */ 			return __call__ (__accu0__.LatexNodesCollector, __accu0__, self, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000566 */ 		}) ();
/* 000566 */ 	});},
/* 000573 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000573 */ 		var kwargs = dict ();
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 				delete kwargs.__kwargtrans__;
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000602 */ 		var __left0__ = tuple ([(function () {
/* 000602 */ 			var __accu0__ = kwargs;
/* 000602 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos');
/* 000602 */ 		}) (), (function () {
/* 000602 */ 			var __accu0__ = kwargs;
/* 000602 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000602 */ 		}) (), (function () {
/* 000602 */ 			var __accu0__ = kwargs;
/* 000602 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000602 */ 		}) ()]);
/* 000602 */ 		var pos = __left0__ [0];
/* 000602 */ 		var pos_end = __left0__ [1];
/* 000602 */ 		var parsing_state = __left0__ [2];
/* 000604 */ 		if (__t__ (__t__ (pos_end === null) && __t__ (pos !== null) && __in__ ('len', kwargs))) {
/* 000605 */ 			(function () {
/* 000605 */ 				var __accu0__ = _util;
/* 000605 */ 				return __call__ (__accu0__.pylatexenc_deprecated_3, __accu0__, 'make_node(..., len=..., ...); use ‘pos_end=’ instead of ‘len=’');
/* 000605 */ 			}) ();
/* 000607 */ 			var len_ = __getitem__ (kwargs, 'len');
/* 000608 */ 			var pos_end = __add__ (pos, len_);
/* 000608 */ 		}
/* 000610 */ 		var node = __call__ (node_class, null, __kwargtrans__ (__mergekwargtrans__ ({pos: pos, pos_end: pos_end, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000612 */ 		if (__t__ (self.debug_nodes)) {
/* 000613 */ 			// pass;
/* 000613 */ 		}
/* 000616 */ 		return node;
/* 000616 */ 	});},
/* 000618 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000618 */ 		var kwargs = dict ();
/* 000618 */ 		if (arguments.length) {
/* 000618 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000618 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000618 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000618 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000618 */ 					switch (__attrib0__) {
/* 000618 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000618 */ 					}
/* 000618 */ 				}
/* 000618 */ 				delete kwargs.__kwargtrans__;
/* 000618 */ 			}
/* 000618 */ 		}
/* 000618 */ 		else {
/* 000618 */ 		}
/* 000629 */ 		var parsing_state = (function () {
/* 000629 */ 			var __accu0__ = kwargs;
/* 000629 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state');
/* 000629 */ 		}) ();
/* 000631 */ 		return __call__ (LatexNodeList, null, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state, latex_walker: self}, kwargs)));
/* 000631 */ 	});},
/* 000639 */ 	get format_pos () {return __get__ (this, function (self, pos) {
/* 000639 */ 		if (arguments.length) {
/* 000639 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000639 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000639 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000639 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000639 */ 					switch (__attrib0__) {
/* 000639 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 					}
/* 000639 */ 				}
/* 000639 */ 			}
/* 000639 */ 		}
/* 000639 */ 		else {
/* 000639 */ 		}
/* 000640 */ 		if (__t__ (pos === null)) {
/* 000641 */ 			return '(location unknown)';
/* 000641 */ 		}
/* 000642 */ 		var __left0__ = (function () {
/* 000642 */ 			var __accu0__ = self;
/* 000642 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos);
/* 000642 */ 		}) ();
/* 000642 */ 		var lineno = __left0__ [0];
/* 000642 */ 		var colno = __left0__ [1];
/* 000643 */ 		return __call__ (format_pos, null, pos, lineno, colno);
/* 000643 */ 	});},
/* 000646 */ 	get pos_to_lineno_colno () {return __get__ (this, function (self, pos, as_dict) {
/* 000646 */ 		if (typeof as_dict == 'undefined' || (as_dict != null && as_dict.hasOwnProperty ("__kwargtrans__"))) {;
/* 000646 */ 			var as_dict = false;
/* 000646 */ 		};
/* 000646 */ 		if (arguments.length) {
/* 000646 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000646 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000646 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000646 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000646 */ 					switch (__attrib0__) {
/* 000646 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 						case 'as_dict': var as_dict = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 					}
/* 000646 */ 				}
/* 000646 */ 			}
/* 000646 */ 		}
/* 000646 */ 		else {
/* 000646 */ 		}
/* 000662 */ 		if (__t__ (self._line_no_calc === null)) {
/* 000663 */ 			self._line_no_calc = (function () {
/* 000663 */ 				var __accu0__ = _util;
/* 000663 */ 				return __call__ (__accu0__.LineNumbersCalculator, __accu0__, self.s, __kwargtrans__ ({line_number_offset: self.line_number_offset, first_line_column_offset: self.first_line_column_offset, column_offset: self.column_offset}));
/* 000663 */ 			}) ();
/* 000663 */ 		}
/* 000670 */ 		return (function () {
/* 000670 */ 			var __accu0__ = self._line_no_calc;
/* 000670 */ 			return __call__ (__accu0__.pos_to_lineno_colno, __accu0__, pos, __kwargtrans__ ({as_dict: as_dict}));
/* 000670 */ 		}) ();
/* 000670 */ 	});},
/* 000673 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000673 */ 		if (arguments.length) {
/* 000673 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000673 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000673 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000673 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000673 */ 					switch (__attrib0__) {
/* 000673 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 					}
/* 000673 */ 				}
/* 000673 */ 			}
/* 000673 */ 		}
/* 000673 */ 		else {
/* 000673 */ 		}
/* 000674 */ 		return (function () {
/* 000674 */ 			var __accu0__ = '<LatexWalker {}>';
/* 000674 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, self));
/* 000674 */ 		}) ();
/* 000674 */ 	});}
/* 000674 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexwalker._walker.map