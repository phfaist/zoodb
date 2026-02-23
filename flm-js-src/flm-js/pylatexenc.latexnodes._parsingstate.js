/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:45
/* 000038 */ var logging = {};
/* 000038 */ var unique_object_id = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000067 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000067 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsingstate';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000045 */ export var _unisafe_arrow_s = '→';
/* 000057 */ export var _default_macro_alpha_chars = __add__ ((function () {
/* 000057 */ 	var __accu0__ = '';
/* 000057 */ 	return __call__ (__accu0__.join, __accu0__, (function () {
/* 000057 */ 		var __accu1__ = [];
/* 000057 */ 		for (var j = 0; j < 26; j++) {
/* 000058 */ 			(function () {
/* 000058 */ 				var __accu2__ = __accu1__;
/* 000058 */ 				return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'a'), j)));
/* 000058 */ 			}) ();
/* 000058 */ 		}
/* 000058 */ 		return __accu1__;
/* 000058 */ 	}) ());
/* 000059 */ }) (), (function () {
/* 000059 */ 	var __accu0__ = '';
/* 000059 */ 	return __call__ (__accu0__.join, __accu0__, (function () {
/* 000059 */ 		var __accu1__ = [];
/* 000059 */ 		for (var j = 0; j < 26; j++) {
/* 000060 */ 			(function () {
/* 000060 */ 				var __accu2__ = __accu1__;
/* 000060 */ 				return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'A'), j)));
/* 000060 */ 			}) ();
/* 000060 */ 		}
/* 000060 */ 		return __accu1__;
/* 000060 */ 	}) ());
/* 000060 */ }) ());
/* 000068 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000076 */ export var ParsingState =  __class__ ('ParsingState', [object], {
/* 000076 */ 	__module__: __name__,
/* 000215 */ 	_fields: tuple (['s', 'latex_context', 'in_math_mode', 'math_mode_delimiter', 'latex_group_delimiters', 'latex_inline_math_delimiters', 'latex_display_math_delimiters', 'enable_double_newline_paragraphs', 'enable_macros', 'enable_environments', 'enable_comments', 'enable_groups', 'enable_specials', 'enable_math', 'macro_alpha_chars', 'macro_escape_char', 'comment_start', 'forbidden_characters']),
/* 000236 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000236 */ 		var kwargs = dict ();
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 				delete kwargs.__kwargtrans__;
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		__call__ (__call__ (__super__, null, ParsingState, '__init__'), null, self);
/* 000241 */ 		self._parent_parsing_state_info = (function () {
/* 000241 */ 			var __accu0__ = kwargs;
/* 000241 */ 			return __call__ (__accu0__.py_pop, __accu0__, '_parent_parsing_state_info', tuple ([null, dict ({})]));
/* 000241 */ 		}) ();
/* 000243 */ 		(function () {
/* 000243 */ 			var __accu0__ = self;
/* 000243 */ 			return __call__ (__accu0__.set_fields, __accu0__, __kwargtrans__ (kwargs));
/* 000243 */ 		}) ();
/* 000245 */ 		(function () {
/* 000245 */ 			var __accu0__ = self;
/* 000245 */ 			return __call__ (__accu0__.finalize_state, __accu0__);
/* 000245 */ 		}) ();
/* 000245 */ 	});},
/* 000248 */ 	get set_fields () {return __get__ (this, function (self, s, latex_context, in_math_mode, math_mode_delimiter, latex_group_delimiters, latex_inline_math_delimiters, latex_display_math_delimiters, enable_double_newline_paragraphs, enable_macros, enable_environments, enable_comments, enable_groups, enable_specials, enable_math, macro_alpha_chars, macro_escape_char, comment_start, forbidden_characters) {
/* 000248 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var s = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var latex_context = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof in_math_mode == 'undefined' || (in_math_mode != null && in_math_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var in_math_mode = false;
/* 000248 */ 		};
/* 000248 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var math_mode_delimiter = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof latex_group_delimiters == 'undefined' || (latex_group_delimiters != null && latex_group_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var latex_group_delimiters = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof latex_inline_math_delimiters == 'undefined' || (latex_inline_math_delimiters != null && latex_inline_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var latex_inline_math_delimiters = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof latex_display_math_delimiters == 'undefined' || (latex_display_math_delimiters != null && latex_display_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var latex_display_math_delimiters = null;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_double_newline_paragraphs == 'undefined' || (enable_double_newline_paragraphs != null && enable_double_newline_paragraphs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_double_newline_paragraphs = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_macros == 'undefined' || (enable_macros != null && enable_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_macros = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_environments == 'undefined' || (enable_environments != null && enable_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_environments = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_comments = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_groups = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_specials == 'undefined' || (enable_specials != null && enable_specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_specials = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof enable_math == 'undefined' || (enable_math != null && enable_math.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var enable_math = true;
/* 000248 */ 		};
/* 000248 */ 		if (typeof macro_alpha_chars == 'undefined' || (macro_alpha_chars != null && macro_alpha_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var macro_alpha_chars = _default_macro_alpha_chars;
/* 000248 */ 		};
/* 000248 */ 		if (typeof macro_escape_char == 'undefined' || (macro_escape_char != null && macro_escape_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var macro_escape_char = '\\';
/* 000248 */ 		};
/* 000248 */ 		if (typeof comment_start == 'undefined' || (comment_start != null && comment_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var comment_start = '%';
/* 000248 */ 		};
/* 000248 */ 		if (typeof forbidden_characters == 'undefined' || (forbidden_characters != null && forbidden_characters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000248 */ 			var forbidden_characters = '';
/* 000248 */ 		};
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'in_math_mode': var in_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'latex_group_delimiters': var latex_group_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'latex_inline_math_delimiters': var latex_inline_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'latex_display_math_delimiters': var latex_display_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_double_newline_paragraphs': var enable_double_newline_paragraphs = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_macros': var enable_macros = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_environments': var enable_environments = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_specials': var enable_specials = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'enable_math': var enable_math = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'macro_alpha_chars': var macro_alpha_chars = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'macro_escape_char': var macro_escape_char = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'forbidden_characters': var forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000269 */ 		self.s = s;
/* 000271 */ 		self.latex_context = latex_context;
/* 000273 */ 		self.in_math_mode = in_math_mode;
/* 000274 */ 		self.math_mode_delimiter = math_mode_delimiter;
/* 000276 */ 		if (__t__ (__t__ (!__t__ ((self.in_math_mode))) && self.math_mode_delimiter)) {
/* 000277 */ 			(function () {
/* 000277 */ 				var __accu0__ = logger;
/* 000277 */ 				return __call__ (__accu0__.warning, __accu0__, 'ParsingState: You set math_mode_delimiter=%r but in_math_mode is False', self.math_mode_delimiter);
/* 000277 */ 			}) ();
/* 000281 */ 			self.math_mode_delimiter = null;
/* 000281 */ 		}
/* 000285 */ 		self.latex_group_delimiters = (__t__ (latex_group_delimiters !== null) ? latex_group_delimiters : [tuple (['{', '}'])]);
/* 000290 */ 		self.latex_inline_math_delimiters = (__t__ (latex_inline_math_delimiters !== null) ? latex_inline_math_delimiters : [tuple (['$', '$']), tuple (['\\(', '\\)'])]);
/* 000294 */ 		self.latex_display_math_delimiters = (__t__ (latex_display_math_delimiters !== null) ? latex_display_math_delimiters : [tuple (['$$', '$$']), tuple (['\\[', '\\]'])]);
/* 000298 */ 		self.enable_double_newline_paragraphs = enable_double_newline_paragraphs;
/* 000299 */ 		self.enable_macros = enable_macros;
/* 000300 */ 		self.enable_environments = enable_environments;
/* 000301 */ 		self.enable_comments = enable_comments;
/* 000302 */ 		self.enable_groups = enable_groups;
/* 000303 */ 		self.enable_specials = enable_specials;
/* 000304 */ 		self.enable_math = enable_math;
/* 000305 */ 		self.macro_alpha_chars = macro_alpha_chars;
/* 000309 */ 		self.macro_escape_char = macro_escape_char;
/* 000310 */ 		self.comment_start = comment_start;
/* 000312 */ 		self.forbidden_characters = forbidden_characters;
/* 000312 */ 	});},
/* 000315 */ 	get _finalize_state_latex_group_delimiters_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000317 */ 		if (__t__ (__t__ (parent !== null) && !__in__ ('latex_group_delimiters', kwargs))) {
/* 000320 */ 			self._latex_group_delimchars_by_open = parent._latex_group_delimchars_by_open;
/* 000321 */ 			self._latex_group_delimchars_close = parent._latex_group_delimchars_close;
/* 000322 */ 			return ;
/* 000322 */ 		}
/* 000325 */ 		var __left0__ = __call__ (zip, null, ...self.latex_group_delimiters);
/* 000325 */ 		var a = __left0__ [0];
/* 000325 */ 		var b = __left0__ [1];
/* 000326 */ 		self._latex_group_delimchars_by_open = __call__ (dict, null, self.latex_group_delimiters);
/* 000327 */ 		self._latex_group_delimchars_close = __call__ (set, null, b);
/* 000327 */ 	});},
/* 000330 */ 	get _finalize_state_latex_math_delim_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000332 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('latex_inline_math_delimiters', kwargs)) && !__in__ ('latex_display_math_delimiters', kwargs))) {
/* 000336 */ 			self._math_delims_info_startchars = parent._math_delims_info_startchars;
/* 000337 */ 			self._math_all_delims_by_len = parent._math_all_delims_by_len;
/* 000338 */ 			self._math_delims_info_by_open = parent._math_delims_info_by_open;
/* 000339 */ 			self._math_delims_close = parent._math_delims_close;
/* 000340 */ 			return ;
/* 000340 */ 		}
/* 000342 */ 		self._math_delims_info_startchars = (function () {
/* 000342 */ 			var __accu0__ = '';
/* 000342 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000342 */ 				var __accu1__ = [];
/* 000342 */ 				var __iterable0__ = __add__ (self.latex_inline_math_delimiters, self.latex_display_math_delimiters);
/* 000342 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000345 */ 					var pair = __getitem__ (__iterable0__, __index0__);
/* 000344 */ 					var __iterable1__ = pair;
/* 000344 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000346 */ 						var x = __getitem__ (__iterable1__, __index1__);
/* 000346 */ 						(function () {
/* 000346 */ 							var __accu2__ = __accu1__;
/* 000346 */ 							return __call__ (__accu2__.append, __accu2__, __getslice__ (x, 0, 1, 1));
/* 000346 */ 						}) ();
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				return __accu1__;
/* 000346 */ 			}) ());
/* 000346 */ 		}) ();
/* 000348 */ 		self._math_all_delims_by_len = __call__ (sorted, null, (function () {
/* 000348 */ 			var __accu0__ = [];
/* 000349 */ 			var __iterable0__ = tuple ([tuple ([self.latex_inline_math_delimiters, 'mathmode_inline']), tuple ([self.latex_display_math_delimiters, 'mathmode_display'])]);
/* 000349 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000353 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000353 */ 				var delimlist = __left0__ [0];
/* 000353 */ 				var tok_type = __left0__ [1];
/* 000355 */ 				var __iterable1__ = __call__ (set, null, (function () {
/* 000355 */ 					var __accu1__ = [];
/* 000355 */ 					var __iterable2__ = delimlist;
/* 000355 */ 					for (var __index1__ = 0; __index1__ < len (__iterable2__); __index1__++) {
/* 000355 */ 						var dlmpair = __getitem__ (__iterable2__, __index1__);
/* 000355 */ 						var __iterable3__ = dlmpair;
/* 000355 */ 						for (var __index2__ = 0; __index2__ < len (__iterable3__); __index2__++) {
/* 000355 */ 							var dlm = __getitem__ (__iterable3__, __index2__);
/* 000355 */ 							(function () {
/* 000355 */ 								var __accu2__ = __accu1__;
/* 000355 */ 								return __call__ (__accu2__.append, __accu2__, dlm);
/* 000355 */ 							}) ();
/* 000355 */ 						}
/* 000355 */ 					}
/* 000355 */ 					return __accu1__;
/* 000355 */ 				}) ());
/* 000355 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000355 */ 					var delim = __getitem__ (__iterable1__, __index1__);
/* 000355 */ 					(function () {
/* 000355 */ 						var __accu1__ = __accu0__;
/* 000355 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([delim, tok_type]));
/* 000355 */ 					}) ();
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 			return __accu0__;
/* 000355 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000355 */ 			if (arguments.length) {
/* 000355 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 						switch (__attrib0__) {
/* 000355 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						}
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 			else {
/* 000355 */ 			}
/* 000357 */ 			return __call__ (len, null, __getitem__ (x, 0));
/* 000357 */ 		}), reverse: true}));
/* 000360 */ 		self._math_delims_info_by_open = __call__ (dict, null, __add__ ((function () {
/* 000360 */ 			var __accu0__ = [];
/* 000361 */ 			var __iterable0__ = self.latex_inline_math_delimiters;
/* 000361 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000362 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000362 */ 				var open_delim = __left0__ [0];
/* 000362 */ 				var close_delim = __left0__ [1];
/* 000362 */ 				(function () {
/* 000362 */ 					var __accu1__ = __accu0__;
/* 000361 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_inline'}))]));
/* 000361 */ 				}) ();
/* 000361 */ 			}
/* 000361 */ 			return __accu0__;
/* 000361 */ 		}) (), (function () {
/* 000361 */ 			var __accu0__ = [];
/* 000363 */ 			var __iterable0__ = self.latex_display_math_delimiters;
/* 000363 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000364 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000364 */ 				var open_delim = __left0__ [0];
/* 000364 */ 				var close_delim = __left0__ [1];
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu1__ = __accu0__;
/* 000363 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_display'}))]));
/* 000363 */ 				}) ();
/* 000363 */ 			}
/* 000363 */ 			return __accu0__;
/* 000363 */ 		}) ()));
/* 000366 */ 		self._math_delims_close = __call__ (set, null, (function () {
/* 000366 */ 			var __accu0__ = [];
/* 000368 */ 			var __iterable0__ = (function () {
/* 000368 */ 				var __accu1__ = self._math_delims_info_by_open;
/* 000368 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000368 */ 			}) ();
/* 000368 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000368 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000368 */ 				var opendelim = __left0__ [0];
/* 000368 */ 				var info = __left0__ [1];
/* 000368 */ 				(function () {
/* 000368 */ 					var __accu1__ = __accu0__;
/* 000368 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (info, 'close_delim'));
/* 000368 */ 				}) ();
/* 000368 */ 			}
/* 000368 */ 			return __accu0__;
/* 000368 */ 		}) ());
/* 000368 */ 	});},
/* 000371 */ 	get _finalize_state_inmathmode_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000373 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('in_math_mode', kwargs)) && !__in__ ('math_mode_delimiter', kwargs))) {
/* 000377 */ 			self._math_expecting_close_delim_info = parent._math_expecting_close_delim_info;
/* 000378 */ 			return ;
/* 000378 */ 		}
/* 000380 */ 		if (__t__ (!__t__ ((self.in_math_mode)))) {
/* 000381 */ 			self._math_expecting_close_delim_info = null;
/* 000381 */ 		}
/* 000382 */ 		else if (__t__ (__in__ (self.math_mode_delimiter, self._math_delims_info_by_open))) {
/* 000383 */ 			self._math_expecting_close_delim_info = __getitem__ (self._math_delims_info_by_open, self.math_mode_delimiter);
/* 000383 */ 		}
/* 000385 */ 		else {
/* 000389 */ 			self._math_expecting_close_delim_info = null;
/* 000389 */ 		}
/* 000389 */ 	});},
/* 000396 */ 	get finalize_state () {return __get__ (this, function (self) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000398 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000398 */ 		var parent = __left0__ [0];
/* 000398 */ 		var kwargs = __left0__ [1];
/* 000400 */ 		(function () {
/* 000400 */ 			var __accu0__ = self;
/* 000400 */ 			return __call__ (__accu0__._finalize_state_latex_group_delimiters_info, __accu0__, parent, kwargs);
/* 000400 */ 		}) ();
/* 000401 */ 		(function () {
/* 000401 */ 			var __accu0__ = self;
/* 000401 */ 			return __call__ (__accu0__._finalize_state_latex_math_delim_info, __accu0__, parent, kwargs);
/* 000401 */ 		}) ();
/* 000402 */ 		(function () {
/* 000402 */ 			var __accu0__ = self;
/* 000402 */ 			return __call__ (__accu0__._finalize_state_inmathmode_info, __accu0__, parent, kwargs);
/* 000402 */ 		}) ();
/* 000402 */ 	});},
/* 000409 */ 	get sub_context () {return __get__ (this, function (self) {
/* 000409 */ 		var kwargs = dict ();
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 				delete kwargs.__kwargtrans__;
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000426 */ 		var attrs = (function () {
/* 000426 */ 			var __accu0__ = self;
/* 000426 */ 			return __call__ (__accu0__.get_fields, __accu0__);
/* 000426 */ 		}) ();
/* 000427 */ 		var kwargs2 = (function () {
/* 000427 */ 			var __accu0__ = [];
/* 000429 */ 			var __iterable0__ = (function () {
/* 000429 */ 				var __accu1__ = kwargs;
/* 000429 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000429 */ 			}) ();
/* 000429 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000429 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000429 */ 				var k = __left0__ [0];
/* 000429 */ 				var v = __left0__ [1];
/* 000430 */ 				if (__t__ (!__t__ ((__call__ (_safe_eq, null, v, __getitem__ (attrs, k)))))) {
/* 000430 */ 					(function () {
/* 000430 */ 						var __accu1__ = __accu0__;
/* 000430 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000430 */ 					}) ();
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 			return dict (__accu0__);
/* 000430 */ 		}) ();
/* 000433 */ 		(function () {
/* 000433 */ 			var __accu0__ = attrs;
/* 000433 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs2);
/* 000433 */ 		}) ();
/* 000435 */ 		var p = (function () {
/* 000435 */ 			var __accu0__ = self;
/* 000435 */ 			return __call__ (__accu0__.__class__, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({_parent_parsing_state_info: tuple ([self, kwargs2])}, attrs)));
/* 000435 */ 		}) ();
/* 000438 */ 		// pass;
/* 000442 */ 		return p;
/* 000442 */ 	});},
/* 000445 */ 	get get_fields () {return __get__ (this, function (self) {
/* 000445 */ 		if (arguments.length) {
/* 000445 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000445 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000445 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000445 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000445 */ 					switch (__attrib0__) {
/* 000445 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 					}
/* 000445 */ 				}
/* 000445 */ 			}
/* 000445 */ 		}
/* 000445 */ 		else {
/* 000445 */ 		}
/* 000450 */ 		return __call__ (dict, null, (function () {
/* 000450 */ 			var __accu0__ = [];
/* 000450 */ 			var __iterable0__ = self._fields;
/* 000450 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000450 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000450 */ 				(function () {
/* 000450 */ 					var __accu1__ = __accu0__;
/* 000450 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([f, __call__ (getattr, null, self, f)]));
/* 000450 */ 				}) ();
/* 000450 */ 			}
/* 000450 */ 			return __accu0__;
/* 000450 */ 		}) ());
/* 000450 */ 	});},
/* 000454 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000454 */ 		if (arguments.length) {
/* 000454 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 					switch (__attrib0__) {
/* 000454 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		else {
/* 000454 */ 		}
/* 000459 */ 		var clsname = self.__class__.__name__;
/* 000460 */ 		var pswid = (function () {
/* 000460 */ 			var __accu0__ = '{}<{:#x}>';
/* 000460 */ 			return __call__ (__accu0__.format, __accu0__, clsname, __call__ (fn_unique_object_id, null, self));
/* 000460 */ 		}) ();
/* 000462 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000462 */ 		var parent_obj = __left0__ [0];
/* 000462 */ 		var diff_kwargs = __left0__ [1];
/* 000464 */ 		if (__t__ (!__t__ ((parent_obj)))) {
/* 000467 */ 			return pswid;
/* 000467 */ 		}
/* 000471 */ 		return __add__ (__add__ (__add__ (pswid, (function () {
/* 000471 */ 			var __accu0__ = '(<{:#x}> {} ';
/* 000471 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, parent_obj), _unisafe_arrow_s);
/* 000472 */ 		}) ()), (function () {
/* 000472 */ 			var __accu0__ = ', ';
/* 000472 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000472 */ 				var __accu1__ = [];
/* 000474 */ 				var __iterable0__ = (function () {
/* 000474 */ 					var __accu2__ = diff_kwargs;
/* 000474 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000474 */ 				}) ();
/* 000474 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000474 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000474 */ 					var k = __left0__ [0];
/* 000474 */ 					var v = __left0__ [1];
/* 000474 */ 					if (__t__ (!__in__ (k, tuple (['s'])))) {
/* 000475 */ 						(function () {
/* 000475 */ 							var __accu2__ = __accu1__;
/* 000473 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000473 */ 								var __accu3__ = '{}={!r}';
/* 000473 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000473 */ 							}) ());
/* 000473 */ 						}) ();
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 				return __accu1__;
/* 000473 */ 			}) ());
/* 000473 */ 		}) ()), ')');
/* 000473 */ 	});},
/* 000480 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000480 */ 		if (arguments.length) {
/* 000480 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000480 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000480 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000480 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000480 */ 					switch (__attrib0__) {
/* 000480 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 			}
/* 000480 */ 		}
/* 000480 */ 		else {
/* 000480 */ 		}
/* 000481 */ 		return (function () {
/* 000481 */ 			var __accu0__ = [];
/* 000482 */ 			var __iterable0__ = (function () {
/* 000482 */ 				var __accu1__ = (function () {
/* 000482 */ 					var __accu2__ = self;
/* 000482 */ 					return __call__ (__accu2__.get_fields, __accu2__);
/* 000482 */ 				}) ();
/* 000482 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000482 */ 			}) ();
/* 000482 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000482 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000482 */ 				var k = __left0__ [0];
/* 000482 */ 				var v = __left0__ [1];
/* 000482 */ 				if (__t__ (!__in__ (k, tuple (['latex_context', 's'])))) {
/* 000483 */ 					(function () {
/* 000483 */ 						var __accu1__ = __accu0__;
/* 000483 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000483 */ 					}) ();
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 			return dict (__accu0__);
/* 000483 */ 		}) ();
/* 000483 */ 	});}
/* 000483 */ });
/* 000487 */ export var _safe_eq = function (a, b) {
/* 000487 */ 	if (arguments.length) {
/* 000487 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 				switch (__attrib0__) {
/* 000487 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 	}
/* 000487 */ 	else {
/* 000487 */ 	}
/* 000488 */ 	return __t__ (__t__ (a === null) && b === null) || __eq__ (a, b);
/* 000488 */ };
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstate.map