/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:42
/* 000038 */ var logging = {};
/* 000038 */ var unique_object_id = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000211 */ 	_fields: tuple (['s', 'latex_context', 'in_math_mode', 'math_mode_delimiter', 'latex_group_delimiters', 'latex_inline_math_delimiters', 'latex_display_math_delimiters', 'enable_double_newline_paragraphs', 'enable_macros', 'enable_environments', 'enable_comments', 'enable_groups', 'enable_specials', 'enable_math', 'macro_alpha_chars', 'macro_escape_char', 'comment_start', 'forbidden_characters']),
/* 000232 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000232 */ 		var kwargs = dict ();
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 				delete kwargs.__kwargtrans__;
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		__call__ (__call__ (__super__, null, ParsingState, '__init__'), null, self);
/* 000237 */ 		self._parent_parsing_state_info = (function () {
/* 000237 */ 			var __accu0__ = kwargs;
/* 000237 */ 			return __call__ (__accu0__.py_pop, __accu0__, '_parent_parsing_state_info', tuple ([null, dict ({})]));
/* 000237 */ 		}) ();
/* 000239 */ 		(function () {
/* 000239 */ 			var __accu0__ = self;
/* 000239 */ 			return __call__ (__accu0__.set_fields, __accu0__, __kwargtrans__ (kwargs));
/* 000239 */ 		}) ();
/* 000241 */ 		(function () {
/* 000241 */ 			var __accu0__ = self;
/* 000241 */ 			return __call__ (__accu0__.finalize_state, __accu0__);
/* 000241 */ 		}) ();
/* 000241 */ 	});},
/* 000244 */ 	get set_fields () {return __get__ (this, function (self, s, latex_context, in_math_mode, math_mode_delimiter, latex_group_delimiters, latex_inline_math_delimiters, latex_display_math_delimiters, enable_double_newline_paragraphs, enable_macros, enable_environments, enable_comments, enable_groups, enable_specials, enable_math, macro_alpha_chars, macro_escape_char, comment_start, forbidden_characters) {
/* 000244 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var s = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var latex_context = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof in_math_mode == 'undefined' || (in_math_mode != null && in_math_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var in_math_mode = false;
/* 000244 */ 		};
/* 000244 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var math_mode_delimiter = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof latex_group_delimiters == 'undefined' || (latex_group_delimiters != null && latex_group_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var latex_group_delimiters = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof latex_inline_math_delimiters == 'undefined' || (latex_inline_math_delimiters != null && latex_inline_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var latex_inline_math_delimiters = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof latex_display_math_delimiters == 'undefined' || (latex_display_math_delimiters != null && latex_display_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var latex_display_math_delimiters = null;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_double_newline_paragraphs == 'undefined' || (enable_double_newline_paragraphs != null && enable_double_newline_paragraphs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_double_newline_paragraphs = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_macros == 'undefined' || (enable_macros != null && enable_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_macros = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_environments == 'undefined' || (enable_environments != null && enable_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_environments = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_comments = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_groups = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_specials == 'undefined' || (enable_specials != null && enable_specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_specials = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof enable_math == 'undefined' || (enable_math != null && enable_math.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var enable_math = true;
/* 000244 */ 		};
/* 000244 */ 		if (typeof macro_alpha_chars == 'undefined' || (macro_alpha_chars != null && macro_alpha_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var macro_alpha_chars = _default_macro_alpha_chars;
/* 000244 */ 		};
/* 000244 */ 		if (typeof macro_escape_char == 'undefined' || (macro_escape_char != null && macro_escape_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var macro_escape_char = '\\';
/* 000244 */ 		};
/* 000244 */ 		if (typeof comment_start == 'undefined' || (comment_start != null && comment_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var comment_start = '%';
/* 000244 */ 		};
/* 000244 */ 		if (typeof forbidden_characters == 'undefined' || (forbidden_characters != null && forbidden_characters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000244 */ 			var forbidden_characters = '';
/* 000244 */ 		};
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'in_math_mode': var in_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'latex_group_delimiters': var latex_group_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'latex_inline_math_delimiters': var latex_inline_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'latex_display_math_delimiters': var latex_display_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_double_newline_paragraphs': var enable_double_newline_paragraphs = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_macros': var enable_macros = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_environments': var enable_environments = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_specials': var enable_specials = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'enable_math': var enable_math = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'macro_alpha_chars': var macro_alpha_chars = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'macro_escape_char': var macro_escape_char = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'forbidden_characters': var forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000265 */ 		self.s = s;
/* 000267 */ 		self.latex_context = latex_context;
/* 000269 */ 		self.in_math_mode = in_math_mode;
/* 000270 */ 		self.math_mode_delimiter = math_mode_delimiter;
/* 000272 */ 		if (__t__ (__t__ (!__t__ ((self.in_math_mode))) && self.math_mode_delimiter)) {
/* 000273 */ 			(function () {
/* 000273 */ 				var __accu0__ = logger;
/* 000273 */ 				return __call__ (__accu0__.warning, __accu0__, 'ParsingState: You set math_mode_delimiter=%r but in_math_mode is False', self.math_mode_delimiter);
/* 000273 */ 			}) ();
/* 000277 */ 			self.math_mode_delimiter = null;
/* 000277 */ 		}
/* 000281 */ 		self.latex_group_delimiters = (__t__ (latex_group_delimiters !== null) ? latex_group_delimiters : [tuple (['{', '}'])]);
/* 000286 */ 		self.latex_inline_math_delimiters = (__t__ (latex_inline_math_delimiters !== null) ? latex_inline_math_delimiters : [tuple (['$', '$']), tuple (['\\(', '\\)'])]);
/* 000290 */ 		self.latex_display_math_delimiters = (__t__ (latex_display_math_delimiters !== null) ? latex_display_math_delimiters : [tuple (['$$', '$$']), tuple (['\\[', '\\]'])]);
/* 000294 */ 		self.enable_double_newline_paragraphs = enable_double_newline_paragraphs;
/* 000295 */ 		self.enable_macros = enable_macros;
/* 000296 */ 		self.enable_environments = enable_environments;
/* 000297 */ 		self.enable_comments = enable_comments;
/* 000298 */ 		self.enable_groups = enable_groups;
/* 000299 */ 		self.enable_specials = enable_specials;
/* 000300 */ 		self.enable_math = enable_math;
/* 000301 */ 		self.macro_alpha_chars = macro_alpha_chars;
/* 000305 */ 		self.macro_escape_char = macro_escape_char;
/* 000306 */ 		self.comment_start = comment_start;
/* 000308 */ 		self.forbidden_characters = forbidden_characters;
/* 000308 */ 	});},
/* 000311 */ 	get _finalize_state_latex_group_delimiters_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000313 */ 		if (__t__ (__t__ (parent !== null) && !__in__ ('latex_group_delimiters', kwargs))) {
/* 000316 */ 			self._latex_group_delimchars_by_open = parent._latex_group_delimchars_by_open;
/* 000317 */ 			self._latex_group_delimchars_close = parent._latex_group_delimchars_close;
/* 000318 */ 			return ;
/* 000318 */ 		}
/* 000321 */ 		var __left0__ = __call__ (zip, null, ...self.latex_group_delimiters);
/* 000321 */ 		var a = __left0__ [0];
/* 000321 */ 		var b = __left0__ [1];
/* 000322 */ 		self._latex_group_delimchars_by_open = __call__ (dict, null, self.latex_group_delimiters);
/* 000323 */ 		self._latex_group_delimchars_close = __call__ (set, null, b);
/* 000323 */ 	});},
/* 000326 */ 	get _finalize_state_latex_math_delim_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000328 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('latex_inline_math_delimiters', kwargs)) && !__in__ ('latex_display_math_delimiters', kwargs))) {
/* 000332 */ 			self._math_delims_info_startchars = parent._math_delims_info_startchars;
/* 000333 */ 			self._math_all_delims_by_len = parent._math_all_delims_by_len;
/* 000334 */ 			self._math_delims_info_by_open = parent._math_delims_info_by_open;
/* 000335 */ 			self._math_delims_close = parent._math_delims_close;
/* 000336 */ 			return ;
/* 000336 */ 		}
/* 000338 */ 		self._math_delims_info_startchars = (function () {
/* 000338 */ 			var __accu0__ = '';
/* 000338 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000338 */ 				var __accu1__ = [];
/* 000338 */ 				var __iterable0__ = __add__ (self.latex_inline_math_delimiters, self.latex_display_math_delimiters);
/* 000338 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000341 */ 					var pair = __getitem__ (__iterable0__, __index0__);
/* 000340 */ 					var __iterable1__ = pair;
/* 000340 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000342 */ 						var x = __getitem__ (__iterable1__, __index1__);
/* 000342 */ 						(function () {
/* 000342 */ 							var __accu2__ = __accu1__;
/* 000342 */ 							return __call__ (__accu2__.append, __accu2__, __getslice__ (x, 0, 1, 1));
/* 000342 */ 						}) ();
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 				return __accu1__;
/* 000342 */ 			}) ());
/* 000342 */ 		}) ();
/* 000344 */ 		self._math_all_delims_by_len = __call__ (sorted, null, (function () {
/* 000344 */ 			var __accu0__ = [];
/* 000345 */ 			var __iterable0__ = tuple ([tuple ([self.latex_inline_math_delimiters, 'mathmode_inline']), tuple ([self.latex_display_math_delimiters, 'mathmode_display'])]);
/* 000345 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000349 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000349 */ 				var delimlist = __left0__ [0];
/* 000349 */ 				var tok_type = __left0__ [1];
/* 000351 */ 				var __iterable1__ = __call__ (set, null, (function () {
/* 000351 */ 					var __accu1__ = [];
/* 000351 */ 					var __iterable2__ = delimlist;
/* 000351 */ 					for (var __index1__ = 0; __index1__ < len (__iterable2__); __index1__++) {
/* 000351 */ 						var dlmpair = __getitem__ (__iterable2__, __index1__);
/* 000351 */ 						var __iterable3__ = dlmpair;
/* 000351 */ 						for (var __index2__ = 0; __index2__ < len (__iterable3__); __index2__++) {
/* 000351 */ 							var dlm = __getitem__ (__iterable3__, __index2__);
/* 000351 */ 							(function () {
/* 000351 */ 								var __accu2__ = __accu1__;
/* 000351 */ 								return __call__ (__accu2__.append, __accu2__, dlm);
/* 000351 */ 							}) ();
/* 000351 */ 						}
/* 000351 */ 					}
/* 000351 */ 					return __accu1__;
/* 000351 */ 				}) ());
/* 000351 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000351 */ 					var delim = __getitem__ (__iterable1__, __index1__);
/* 000351 */ 					(function () {
/* 000351 */ 						var __accu1__ = __accu0__;
/* 000351 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([delim, tok_type]));
/* 000351 */ 					}) ();
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 			return __accu0__;
/* 000351 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000351 */ 			if (arguments.length) {
/* 000351 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 						switch (__attrib0__) {
/* 000351 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						}
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 			else {
/* 000351 */ 			}
/* 000353 */ 			return __call__ (len, null, __getitem__ (x, 0));
/* 000353 */ 		}), reverse: true}));
/* 000356 */ 		self._math_delims_info_by_open = __call__ (dict, null, __add__ ((function () {
/* 000356 */ 			var __accu0__ = [];
/* 000357 */ 			var __iterable0__ = self.latex_inline_math_delimiters;
/* 000357 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000358 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000358 */ 				var open_delim = __left0__ [0];
/* 000358 */ 				var close_delim = __left0__ [1];
/* 000358 */ 				(function () {
/* 000358 */ 					var __accu1__ = __accu0__;
/* 000357 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_inline'}))]));
/* 000357 */ 				}) ();
/* 000357 */ 			}
/* 000357 */ 			return __accu0__;
/* 000357 */ 		}) (), (function () {
/* 000357 */ 			var __accu0__ = [];
/* 000359 */ 			var __iterable0__ = self.latex_display_math_delimiters;
/* 000359 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000360 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000360 */ 				var open_delim = __left0__ [0];
/* 000360 */ 				var close_delim = __left0__ [1];
/* 000360 */ 				(function () {
/* 000360 */ 					var __accu1__ = __accu0__;
/* 000359 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_display'}))]));
/* 000359 */ 				}) ();
/* 000359 */ 			}
/* 000359 */ 			return __accu0__;
/* 000359 */ 		}) ()));
/* 000362 */ 		self._math_delims_close = __call__ (set, null, (function () {
/* 000362 */ 			var __accu0__ = [];
/* 000364 */ 			var __iterable0__ = (function () {
/* 000364 */ 				var __accu1__ = self._math_delims_info_by_open;
/* 000364 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000364 */ 			}) ();
/* 000364 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000364 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000364 */ 				var opendelim = __left0__ [0];
/* 000364 */ 				var info = __left0__ [1];
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu1__ = __accu0__;
/* 000364 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (info, 'close_delim'));
/* 000364 */ 				}) ();
/* 000364 */ 			}
/* 000364 */ 			return __accu0__;
/* 000364 */ 		}) ());
/* 000364 */ 	});},
/* 000367 */ 	get _finalize_state_inmathmode_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000369 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('in_math_mode', kwargs)) && !__in__ ('math_mode_delimiter', kwargs))) {
/* 000373 */ 			self._math_expecting_close_delim_info = parent._math_expecting_close_delim_info;
/* 000374 */ 			return ;
/* 000374 */ 		}
/* 000376 */ 		if (__t__ (!__t__ ((self.in_math_mode)))) {
/* 000377 */ 			self._math_expecting_close_delim_info = null;
/* 000377 */ 		}
/* 000378 */ 		else if (__t__ (__in__ (self.math_mode_delimiter, self._math_delims_info_by_open))) {
/* 000379 */ 			self._math_expecting_close_delim_info = __getitem__ (self._math_delims_info_by_open, self.math_mode_delimiter);
/* 000379 */ 		}
/* 000381 */ 		else {
/* 000385 */ 			self._math_expecting_close_delim_info = null;
/* 000385 */ 		}
/* 000385 */ 	});},
/* 000392 */ 	get finalize_state () {return __get__ (this, function (self) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000394 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000394 */ 		var parent = __left0__ [0];
/* 000394 */ 		var kwargs = __left0__ [1];
/* 000396 */ 		(function () {
/* 000396 */ 			var __accu0__ = self;
/* 000396 */ 			return __call__ (__accu0__._finalize_state_latex_group_delimiters_info, __accu0__, parent, kwargs);
/* 000396 */ 		}) ();
/* 000397 */ 		(function () {
/* 000397 */ 			var __accu0__ = self;
/* 000397 */ 			return __call__ (__accu0__._finalize_state_latex_math_delim_info, __accu0__, parent, kwargs);
/* 000397 */ 		}) ();
/* 000398 */ 		(function () {
/* 000398 */ 			var __accu0__ = self;
/* 000398 */ 			return __call__ (__accu0__._finalize_state_inmathmode_info, __accu0__, parent, kwargs);
/* 000398 */ 		}) ();
/* 000398 */ 	});},
/* 000405 */ 	get sub_context () {return __get__ (this, function (self) {
/* 000405 */ 		var kwargs = dict ();
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 				delete kwargs.__kwargtrans__;
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000422 */ 		var attrs = (function () {
/* 000422 */ 			var __accu0__ = self;
/* 000422 */ 			return __call__ (__accu0__.get_fields, __accu0__);
/* 000422 */ 		}) ();
/* 000423 */ 		var kwargs2 = (function () {
/* 000423 */ 			var __accu0__ = [];
/* 000425 */ 			var __iterable0__ = (function () {
/* 000425 */ 				var __accu1__ = kwargs;
/* 000425 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000425 */ 			}) ();
/* 000425 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000425 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000425 */ 				var k = __left0__ [0];
/* 000425 */ 				var v = __left0__ [1];
/* 000426 */ 				if (__t__ (!__t__ ((__call__ (_safe_eq, null, v, __getitem__ (attrs, k)))))) {
/* 000426 */ 					(function () {
/* 000426 */ 						var __accu1__ = __accu0__;
/* 000426 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000426 */ 					}) ();
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 			return dict (__accu0__);
/* 000426 */ 		}) ();
/* 000429 */ 		(function () {
/* 000429 */ 			var __accu0__ = attrs;
/* 000429 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs2);
/* 000429 */ 		}) ();
/* 000431 */ 		var p = (function () {
/* 000431 */ 			var __accu0__ = self;
/* 000431 */ 			return __call__ (__accu0__.__class__, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({_parent_parsing_state_info: tuple ([self, kwargs2])}, attrs)));
/* 000431 */ 		}) ();
/* 000434 */ 		// pass;
/* 000438 */ 		return p;
/* 000438 */ 	});},
/* 000441 */ 	get get_fields () {return __get__ (this, function (self) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000446 */ 		return __call__ (dict, null, (function () {
/* 000446 */ 			var __accu0__ = [];
/* 000446 */ 			var __iterable0__ = self._fields;
/* 000446 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 				(function () {
/* 000446 */ 					var __accu1__ = __accu0__;
/* 000446 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([f, __call__ (getattr, null, self, f)]));
/* 000446 */ 				}) ();
/* 000446 */ 			}
/* 000446 */ 			return __accu0__;
/* 000446 */ 		}) ());
/* 000446 */ 	});},
/* 000450 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000455 */ 		var clsname = self.__class__.__name__;
/* 000456 */ 		var pswid = (function () {
/* 000456 */ 			var __accu0__ = '{}<{:#x}>';
/* 000456 */ 			return __call__ (__accu0__.format, __accu0__, clsname, __call__ (fn_unique_object_id, null, self));
/* 000456 */ 		}) ();
/* 000458 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000458 */ 		var parent_obj = __left0__ [0];
/* 000458 */ 		var diff_kwargs = __left0__ [1];
/* 000460 */ 		if (__t__ (!__t__ ((parent_obj)))) {
/* 000463 */ 			return pswid;
/* 000463 */ 		}
/* 000467 */ 		return __add__ (__add__ (__add__ (pswid, (function () {
/* 000467 */ 			var __accu0__ = '(<{:#x}> {} ';
/* 000467 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, parent_obj), _unisafe_arrow_s);
/* 000468 */ 		}) ()), (function () {
/* 000468 */ 			var __accu0__ = ', ';
/* 000468 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000468 */ 				var __accu1__ = [];
/* 000470 */ 				var __iterable0__ = (function () {
/* 000470 */ 					var __accu2__ = diff_kwargs;
/* 000470 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000470 */ 				}) ();
/* 000470 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000470 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000470 */ 					var k = __left0__ [0];
/* 000470 */ 					var v = __left0__ [1];
/* 000470 */ 					if (__t__ (!__in__ (k, tuple (['s'])))) {
/* 000471 */ 						(function () {
/* 000471 */ 							var __accu2__ = __accu1__;
/* 000469 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000469 */ 								var __accu3__ = '{}={!r}';
/* 000469 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000469 */ 							}) ());
/* 000469 */ 						}) ();
/* 000469 */ 					}
/* 000469 */ 				}
/* 000469 */ 				return __accu1__;
/* 000469 */ 			}) ());
/* 000469 */ 		}) ()), ')');
/* 000469 */ 	});},
/* 000476 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000476 */ 		if (arguments.length) {
/* 000476 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000476 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000476 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000476 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000476 */ 					switch (__attrib0__) {
/* 000476 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 					}
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 		}
/* 000476 */ 		else {
/* 000476 */ 		}
/* 000477 */ 		return (function () {
/* 000477 */ 			var __accu0__ = [];
/* 000478 */ 			var __iterable0__ = (function () {
/* 000478 */ 				var __accu1__ = (function () {
/* 000478 */ 					var __accu2__ = self;
/* 000478 */ 					return __call__ (__accu2__.get_fields, __accu2__);
/* 000478 */ 				}) ();
/* 000478 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000478 */ 			}) ();
/* 000478 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000478 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000478 */ 				var k = __left0__ [0];
/* 000478 */ 				var v = __left0__ [1];
/* 000478 */ 				if (__t__ (!__in__ (k, tuple (['latex_context', 's'])))) {
/* 000479 */ 					(function () {
/* 000479 */ 						var __accu1__ = __accu0__;
/* 000479 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000479 */ 					}) ();
/* 000479 */ 				}
/* 000479 */ 			}
/* 000479 */ 			return dict (__accu0__);
/* 000479 */ 		}) ();
/* 000479 */ 	});}
/* 000479 */ });
/* 000483 */ export var _safe_eq = function (a, b) {
/* 000483 */ 	if (arguments.length) {
/* 000483 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000483 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000483 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000483 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000483 */ 				switch (__attrib0__) {
/* 000483 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 		}
/* 000483 */ 	}
/* 000483 */ 	else {
/* 000483 */ 	}
/* 000484 */ 	return __t__ (__t__ (a === null) && b === null) || __eq__ (a, b);
/* 000484 */ };
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstate.map