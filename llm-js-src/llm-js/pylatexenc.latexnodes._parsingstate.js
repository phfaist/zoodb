/* 000001 */ // Transcrypt'ed from Python, 2022-09-10 12:43:47
/* 000038 */ var logging = {};
/* 000038 */ var unique_object_id = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000086 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000086 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsingstate';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000045 */ export var _unisafe_arrow_s = '→';
/* 000076 */ export var _default_macro_alpha_chars = __add__ ((function () {
/* 000076 */ 	var __accu0__ = '';
/* 000076 */ 	return __call__ (__accu0__.join, __accu0__, (function () {
/* 000076 */ 		var __accu1__ = [];
/* 000076 */ 		for (var j = 0; j < 26; j++) {
/* 000077 */ 			(function () {
/* 000077 */ 				var __accu2__ = __accu1__;
/* 000077 */ 				return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'a'), j)));
/* 000077 */ 			}) ();
/* 000077 */ 		}
/* 000077 */ 		return __accu1__;
/* 000077 */ 	}) ());
/* 000078 */ }) (), (function () {
/* 000078 */ 	var __accu0__ = '';
/* 000078 */ 	return __call__ (__accu0__.join, __accu0__, (function () {
/* 000078 */ 		var __accu1__ = [];
/* 000078 */ 		for (var j = 0; j < 26; j++) {
/* 000079 */ 			(function () {
/* 000079 */ 				var __accu2__ = __accu1__;
/* 000079 */ 				return __call__ (__accu2__.append, __accu2__, __call__ (chr, null, __add__ (__call__ (ord, null, 'A'), j)));
/* 000079 */ 			}) ();
/* 000079 */ 		}
/* 000079 */ 		return __accu1__;
/* 000079 */ 	}) ());
/* 000079 */ }) ());
/* 000087 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000095 */ export var ParsingState =  __class__ ('ParsingState', [object], {
/* 000095 */ 	__module__: __name__,
/* 000223 */ 	_fields: tuple (['s', 'latex_context', 'in_math_mode', 'math_mode_delimiter', 'latex_group_delimiters', 'latex_inline_math_delimiters', 'latex_display_math_delimiters', 'enable_double_newline_paragraphs', 'enable_macros', 'enable_environments', 'enable_comments', 'enable_groups', 'enable_specials', 'enable_math', 'macro_alpha_chars', 'macro_escape_char', 'comment_char', 'forbidden_characters']),
/* 000244 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000244 */ 		var kwargs = dict ();
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 				delete kwargs.__kwargtrans__;
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000245 */ 		__call__ (__call__ (__super__, null, ParsingState, '__init__'), null, self);
/* 000249 */ 		self._parent_parsing_state_info = (function () {
/* 000249 */ 			var __accu0__ = kwargs;
/* 000249 */ 			return __call__ (__accu0__.py_pop, __accu0__, '_parent_parsing_state_info', tuple ([null, dict ({})]));
/* 000249 */ 		}) ();
/* 000251 */ 		(function () {
/* 000251 */ 			var __accu0__ = self;
/* 000251 */ 			return __call__ (__accu0__.set_fields, __accu0__, __kwargtrans__ (kwargs));
/* 000251 */ 		}) ();
/* 000253 */ 		(function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.finalize_state, __accu0__);
/* 000253 */ 		}) ();
/* 000253 */ 	});},
/* 000256 */ 	get set_fields () {return __get__ (this, function (self, s, latex_context, in_math_mode, math_mode_delimiter, latex_group_delimiters, latex_inline_math_delimiters, latex_display_math_delimiters, enable_double_newline_paragraphs, enable_macros, enable_environments, enable_comments, enable_groups, enable_specials, enable_math, macro_alpha_chars, macro_escape_char, comment_char, forbidden_characters) {
/* 000256 */ 		if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var s = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var latex_context = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof in_math_mode == 'undefined' || (in_math_mode != null && in_math_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var in_math_mode = false;
/* 000256 */ 		};
/* 000256 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var math_mode_delimiter = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof latex_group_delimiters == 'undefined' || (latex_group_delimiters != null && latex_group_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var latex_group_delimiters = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof latex_inline_math_delimiters == 'undefined' || (latex_inline_math_delimiters != null && latex_inline_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var latex_inline_math_delimiters = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof latex_display_math_delimiters == 'undefined' || (latex_display_math_delimiters != null && latex_display_math_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var latex_display_math_delimiters = null;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_double_newline_paragraphs == 'undefined' || (enable_double_newline_paragraphs != null && enable_double_newline_paragraphs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_double_newline_paragraphs = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_macros == 'undefined' || (enable_macros != null && enable_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_macros = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_environments == 'undefined' || (enable_environments != null && enable_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_environments = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_comments = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_groups = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_specials == 'undefined' || (enable_specials != null && enable_specials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_specials = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof enable_math == 'undefined' || (enable_math != null && enable_math.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var enable_math = true;
/* 000256 */ 		};
/* 000256 */ 		if (typeof macro_alpha_chars == 'undefined' || (macro_alpha_chars != null && macro_alpha_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var macro_alpha_chars = _default_macro_alpha_chars;
/* 000256 */ 		};
/* 000256 */ 		if (typeof macro_escape_char == 'undefined' || (macro_escape_char != null && macro_escape_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var macro_escape_char = '\\';
/* 000256 */ 		};
/* 000256 */ 		if (typeof comment_char == 'undefined' || (comment_char != null && comment_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var comment_char = '%';
/* 000256 */ 		};
/* 000256 */ 		if (typeof forbidden_characters == 'undefined' || (forbidden_characters != null && forbidden_characters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000256 */ 			var forbidden_characters = '';
/* 000256 */ 		};
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'in_math_mode': var in_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'latex_group_delimiters': var latex_group_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'latex_inline_math_delimiters': var latex_inline_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'latex_display_math_delimiters': var latex_display_math_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_double_newline_paragraphs': var enable_double_newline_paragraphs = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_macros': var enable_macros = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_environments': var enable_environments = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_specials': var enable_specials = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'enable_math': var enable_math = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'macro_alpha_chars': var macro_alpha_chars = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'macro_escape_char': var macro_escape_char = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'comment_char': var comment_char = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'forbidden_characters': var forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000277 */ 		self.s = s;
/* 000279 */ 		self.latex_context = latex_context;
/* 000281 */ 		self.in_math_mode = in_math_mode;
/* 000282 */ 		self.math_mode_delimiter = math_mode_delimiter;
/* 000284 */ 		if (__t__ (__t__ (!__t__ ((self.in_math_mode))) && self.math_mode_delimiter)) {
/* 000285 */ 			(function () {
/* 000285 */ 				var __accu0__ = logger;
/* 000285 */ 				return __call__ (__accu0__.warning, __accu0__, 'ParsingState: You set math_mode_delimiter=%r but in_math_mode is False', self.math_mode_delimiter);
/* 000285 */ 			}) ();
/* 000289 */ 			self.math_mode_delimiter = null;
/* 000289 */ 		}
/* 000293 */ 		self.latex_group_delimiters = (__t__ (latex_group_delimiters !== null) ? latex_group_delimiters : [tuple (['{', '}'])]);
/* 000298 */ 		self.latex_inline_math_delimiters = (__t__ (latex_inline_math_delimiters !== null) ? latex_inline_math_delimiters : [tuple (['$', '$']), tuple (['\\(', '\\)'])]);
/* 000302 */ 		self.latex_display_math_delimiters = (__t__ (latex_display_math_delimiters !== null) ? latex_display_math_delimiters : [tuple (['$$', '$$']), tuple (['\\[', '\\]'])]);
/* 000306 */ 		self.enable_double_newline_paragraphs = enable_double_newline_paragraphs;
/* 000307 */ 		self.enable_macros = enable_macros;
/* 000308 */ 		self.enable_environments = enable_environments;
/* 000309 */ 		self.enable_comments = enable_comments;
/* 000310 */ 		self.enable_groups = enable_groups;
/* 000311 */ 		self.enable_specials = enable_specials;
/* 000312 */ 		self.enable_math = enable_math;
/* 000313 */ 		self.macro_alpha_chars = macro_alpha_chars;
/* 000317 */ 		self.macro_escape_char = macro_escape_char;
/* 000318 */ 		self.comment_char = comment_char;
/* 000320 */ 		self.forbidden_characters = forbidden_characters;
/* 000320 */ 	});},
/* 000323 */ 	get _finalize_state_latex_group_delimiters_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000325 */ 		if (__t__ (__t__ (parent !== null) && !__in__ ('latex_group_delimiters', kwargs))) {
/* 000328 */ 			self._latex_group_delimchars_by_open = parent._latex_group_delimchars_by_open;
/* 000329 */ 			self._latex_group_delimchars_close = parent._latex_group_delimchars_close;
/* 000330 */ 			return ;
/* 000330 */ 		}
/* 000333 */ 		var __left0__ = __call__ (zip, null, ...self.latex_group_delimiters);
/* 000333 */ 		var a = __left0__ [0];
/* 000333 */ 		var b = __left0__ [1];
/* 000334 */ 		self._latex_group_delimchars_by_open = __call__ (dict, null, self.latex_group_delimiters);
/* 000335 */ 		self._latex_group_delimchars_close = __call__ (set, null, b);
/* 000335 */ 	});},
/* 000338 */ 	get _finalize_state_latex_math_delim_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000340 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('latex_inline_math_delimiters', kwargs)) && !__in__ ('latex_display_math_delimiters', kwargs))) {
/* 000344 */ 			self._math_delims_info_startchars = parent._math_delims_info_startchars;
/* 000345 */ 			self._math_all_delims_by_len = parent._math_all_delims_by_len;
/* 000346 */ 			self._math_delims_info_by_open = parent._math_delims_info_by_open;
/* 000347 */ 			self._math_delims_close = parent._math_delims_close;
/* 000348 */ 			return ;
/* 000348 */ 		}
/* 000350 */ 		self._math_delims_info_startchars = (function () {
/* 000350 */ 			var __accu0__ = '';
/* 000350 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000350 */ 				var __accu1__ = [];
/* 000350 */ 				var __iterable0__ = __add__ (self.latex_inline_math_delimiters, self.latex_display_math_delimiters);
/* 000350 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000353 */ 					var pair = __getitem__ (__iterable0__, __index0__);
/* 000352 */ 					var __iterable1__ = pair;
/* 000352 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000354 */ 						var x = __getitem__ (__iterable1__, __index1__);
/* 000354 */ 						(function () {
/* 000354 */ 							var __accu2__ = __accu1__;
/* 000354 */ 							return __call__ (__accu2__.append, __accu2__, __getslice__ (x, 0, 1, 1));
/* 000354 */ 						}) ();
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 				return __accu1__;
/* 000354 */ 			}) ());
/* 000354 */ 		}) ();
/* 000356 */ 		self._math_all_delims_by_len = __call__ (sorted, null, (function () {
/* 000356 */ 			var __accu0__ = [];
/* 000357 */ 			var __iterable0__ = tuple ([tuple ([self.latex_inline_math_delimiters, 'mathmode_inline']), tuple ([self.latex_display_math_delimiters, 'mathmode_display'])]);
/* 000357 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000361 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000361 */ 				var delimlist = __left0__ [0];
/* 000361 */ 				var tok_type = __left0__ [1];
/* 000363 */ 				var __iterable1__ = __call__ (set, null, (function () {
/* 000363 */ 					var __accu1__ = [];
/* 000363 */ 					var __iterable2__ = delimlist;
/* 000363 */ 					for (var __index1__ = 0; __index1__ < len (__iterable2__); __index1__++) {
/* 000363 */ 						var dlmpair = __getitem__ (__iterable2__, __index1__);
/* 000363 */ 						var __iterable3__ = dlmpair;
/* 000363 */ 						for (var __index2__ = 0; __index2__ < len (__iterable3__); __index2__++) {
/* 000363 */ 							var dlm = __getitem__ (__iterable3__, __index2__);
/* 000363 */ 							(function () {
/* 000363 */ 								var __accu2__ = __accu1__;
/* 000363 */ 								return __call__ (__accu2__.append, __accu2__, dlm);
/* 000363 */ 							}) ();
/* 000363 */ 						}
/* 000363 */ 					}
/* 000363 */ 					return __accu1__;
/* 000363 */ 				}) ());
/* 000363 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000363 */ 					var delim = __getitem__ (__iterable1__, __index1__);
/* 000363 */ 					(function () {
/* 000363 */ 						var __accu1__ = __accu0__;
/* 000363 */ 						return __call__ (__accu1__.append, __accu1__, tuple ([delim, tok_type]));
/* 000363 */ 					}) ();
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 			return __accu0__;
/* 000363 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (x) {
/* 000363 */ 			if (arguments.length) {
/* 000363 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 						switch (__attrib0__) {
/* 000363 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						}
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 			else {
/* 000363 */ 			}
/* 000365 */ 			return __call__ (len, null, __getitem__ (x, 0));
/* 000365 */ 		}), reverse: true}));
/* 000368 */ 		self._math_delims_info_by_open = __call__ (dict, null, __add__ ((function () {
/* 000368 */ 			var __accu0__ = [];
/* 000369 */ 			var __iterable0__ = self.latex_inline_math_delimiters;
/* 000369 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000370 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 				var open_delim = __left0__ [0];
/* 000370 */ 				var close_delim = __left0__ [1];
/* 000370 */ 				(function () {
/* 000370 */ 					var __accu1__ = __accu0__;
/* 000369 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_inline'}))]));
/* 000369 */ 				}) ();
/* 000369 */ 			}
/* 000369 */ 			return __accu0__;
/* 000369 */ 		}) (), (function () {
/* 000369 */ 			var __accu0__ = [];
/* 000371 */ 			var __iterable0__ = self.latex_display_math_delimiters;
/* 000371 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 				var open_delim = __left0__ [0];
/* 000372 */ 				var close_delim = __left0__ [1];
/* 000372 */ 				(function () {
/* 000372 */ 					var __accu1__ = __accu0__;
/* 000371 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([open_delim, __call__ (dict, null, __kwargtrans__ ({close_delim: close_delim, tok: 'mathmode_display'}))]));
/* 000371 */ 				}) ();
/* 000371 */ 			}
/* 000371 */ 			return __accu0__;
/* 000371 */ 		}) ()));
/* 000374 */ 		self._math_delims_close = __call__ (set, null, (function () {
/* 000374 */ 			var __accu0__ = [];
/* 000376 */ 			var __iterable0__ = (function () {
/* 000376 */ 				var __accu1__ = self._math_delims_info_by_open;
/* 000376 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000376 */ 			}) ();
/* 000376 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000376 */ 				var opendelim = __left0__ [0];
/* 000376 */ 				var info = __left0__ [1];
/* 000376 */ 				(function () {
/* 000376 */ 					var __accu1__ = __accu0__;
/* 000376 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (info, 'close_delim'));
/* 000376 */ 				}) ();
/* 000376 */ 			}
/* 000376 */ 			return __accu0__;
/* 000376 */ 		}) ());
/* 000376 */ 	});},
/* 000379 */ 	get _finalize_state_inmathmode_info () {return __get__ (this, function (self, parent, kwargs) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000381 */ 		if (__t__ (__t__ (parent !== null) && __t__ (!__in__ ('in_math_mode', kwargs)) && !__in__ ('math_mode_delimiter', kwargs))) {
/* 000385 */ 			self._math_expecting_close_delim_info = parent._math_expecting_close_delim_info;
/* 000386 */ 			return ;
/* 000386 */ 		}
/* 000388 */ 		if (__t__ (!__t__ ((self.in_math_mode)))) {
/* 000389 */ 			self._math_expecting_close_delim_info = null;
/* 000389 */ 		}
/* 000390 */ 		else if (__t__ (__in__ (self.math_mode_delimiter, self._math_delims_info_by_open))) {
/* 000391 */ 			self._math_expecting_close_delim_info = __getitem__ (self._math_delims_info_by_open, self.math_mode_delimiter);
/* 000391 */ 		}
/* 000393 */ 		else {
/* 000397 */ 			self._math_expecting_close_delim_info = null;
/* 000397 */ 		}
/* 000397 */ 	});},
/* 000404 */ 	get finalize_state () {return __get__ (this, function (self) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000406 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000406 */ 		var parent = __left0__ [0];
/* 000406 */ 		var kwargs = __left0__ [1];
/* 000408 */ 		(function () {
/* 000408 */ 			var __accu0__ = self;
/* 000408 */ 			return __call__ (__accu0__._finalize_state_latex_group_delimiters_info, __accu0__, parent, kwargs);
/* 000408 */ 		}) ();
/* 000409 */ 		(function () {
/* 000409 */ 			var __accu0__ = self;
/* 000409 */ 			return __call__ (__accu0__._finalize_state_latex_math_delim_info, __accu0__, parent, kwargs);
/* 000409 */ 		}) ();
/* 000410 */ 		(function () {
/* 000410 */ 			var __accu0__ = self;
/* 000410 */ 			return __call__ (__accu0__._finalize_state_inmathmode_info, __accu0__, parent, kwargs);
/* 000410 */ 		}) ();
/* 000410 */ 	});},
/* 000417 */ 	get sub_context () {return __get__ (this, function (self) {
/* 000417 */ 		var kwargs = dict ();
/* 000417 */ 		if (arguments.length) {
/* 000417 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000417 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000417 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000417 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000417 */ 					switch (__attrib0__) {
/* 000417 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000417 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000417 */ 					}
/* 000417 */ 				}
/* 000417 */ 				delete kwargs.__kwargtrans__;
/* 000417 */ 			}
/* 000417 */ 		}
/* 000417 */ 		else {
/* 000417 */ 		}
/* 000434 */ 		var attrs = (function () {
/* 000434 */ 			var __accu0__ = self;
/* 000434 */ 			return __call__ (__accu0__.get_fields, __accu0__);
/* 000434 */ 		}) ();
/* 000435 */ 		var kwargs2 = (function () {
/* 000435 */ 			var __accu0__ = [];
/* 000437 */ 			var __iterable0__ = (function () {
/* 000437 */ 				var __accu1__ = kwargs;
/* 000437 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000437 */ 			}) ();
/* 000437 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000437 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000437 */ 				var k = __left0__ [0];
/* 000437 */ 				var v = __left0__ [1];
/* 000438 */ 				if (__t__ (!__t__ ((__call__ (_safe_eq, null, v, __getitem__ (attrs, k)))))) {
/* 000438 */ 					(function () {
/* 000438 */ 						var __accu1__ = __accu0__;
/* 000438 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000438 */ 					}) ();
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 			return dict (__accu0__);
/* 000438 */ 		}) ();
/* 000441 */ 		(function () {
/* 000441 */ 			var __accu0__ = attrs;
/* 000441 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs2);
/* 000441 */ 		}) ();
/* 000443 */ 		var p = (function () {
/* 000443 */ 			var __accu0__ = self;
/* 000443 */ 			return __call__ (__accu0__.__class__, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({_parent_parsing_state_info: tuple ([self, kwargs2])}, attrs)));
/* 000443 */ 		}) ();
/* 000446 */ 		// pass;
/* 000450 */ 		return p;
/* 000450 */ 	});},
/* 000453 */ 	get get_fields () {return __get__ (this, function (self) {
/* 000453 */ 		if (arguments.length) {
/* 000453 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000453 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000453 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000453 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000453 */ 					switch (__attrib0__) {
/* 000453 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000453 */ 					}
/* 000453 */ 				}
/* 000453 */ 			}
/* 000453 */ 		}
/* 000453 */ 		else {
/* 000453 */ 		}
/* 000458 */ 		return __call__ (dict, null, (function () {
/* 000458 */ 			var __accu0__ = [];
/* 000458 */ 			var __iterable0__ = self._fields;
/* 000458 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000458 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000458 */ 				(function () {
/* 000458 */ 					var __accu1__ = __accu0__;
/* 000458 */ 					return __call__ (__accu1__.append, __accu1__, tuple ([f, __call__ (getattr, null, self, f)]));
/* 000458 */ 				}) ();
/* 000458 */ 			}
/* 000458 */ 			return __accu0__;
/* 000458 */ 		}) ());
/* 000458 */ 	});},
/* 000462 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000467 */ 		var clsname = self.__class__.__name__;
/* 000468 */ 		var pswid = (function () {
/* 000468 */ 			var __accu0__ = '{}<{:#x}>';
/* 000468 */ 			return __call__ (__accu0__.format, __accu0__, clsname, __call__ (fn_unique_object_id, null, self));
/* 000468 */ 		}) ();
/* 000470 */ 		var __left0__ = self._parent_parsing_state_info;
/* 000470 */ 		var parent_obj = __left0__ [0];
/* 000470 */ 		var diff_kwargs = __left0__ [1];
/* 000472 */ 		if (__t__ (!__t__ ((parent_obj)))) {
/* 000475 */ 			return pswid;
/* 000475 */ 		}
/* 000479 */ 		return __add__ (__add__ (__add__ (pswid, (function () {
/* 000479 */ 			var __accu0__ = '(<{:#x}> {} ';
/* 000479 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (fn_unique_object_id, null, parent_obj), _unisafe_arrow_s);
/* 000480 */ 		}) ()), (function () {
/* 000480 */ 			var __accu0__ = ', ';
/* 000480 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000480 */ 				var __accu1__ = [];
/* 000482 */ 				var __iterable0__ = (function () {
/* 000482 */ 					var __accu2__ = diff_kwargs;
/* 000482 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000482 */ 				}) ();
/* 000482 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000482 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000482 */ 					var k = __left0__ [0];
/* 000482 */ 					var v = __left0__ [1];
/* 000482 */ 					if (__t__ (!__in__ (k, tuple (['s'])))) {
/* 000483 */ 						(function () {
/* 000483 */ 							var __accu2__ = __accu1__;
/* 000481 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000481 */ 								var __accu3__ = '{}={!r}';
/* 000481 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000481 */ 							}) ());
/* 000481 */ 						}) ();
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 				return __accu1__;
/* 000481 */ 			}) ());
/* 000481 */ 		}) ()), ')');
/* 000481 */ 	});},
/* 000488 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000489 */ 		return (function () {
/* 000489 */ 			var __accu0__ = [];
/* 000490 */ 			var __iterable0__ = (function () {
/* 000490 */ 				var __accu1__ = (function () {
/* 000490 */ 					var __accu2__ = self;
/* 000490 */ 					return __call__ (__accu2__.get_fields, __accu2__);
/* 000490 */ 				}) ();
/* 000490 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000490 */ 			}) ();
/* 000490 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000490 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000490 */ 				var k = __left0__ [0];
/* 000490 */ 				var v = __left0__ [1];
/* 000490 */ 				if (__t__ (!__in__ (k, tuple (['latex_context', 's'])))) {
/* 000491 */ 					(function () {
/* 000491 */ 						var __accu1__ = __accu0__;
/* 000491 */ 						return __call__ (__accu1__.append, __accu1__, [k, v]);
/* 000491 */ 					}) ();
/* 000491 */ 				}
/* 000491 */ 			}
/* 000491 */ 			return dict (__accu0__);
/* 000491 */ 		}) ();
/* 000491 */ 	});}
/* 000491 */ });
/* 000495 */ export var _safe_eq = function (a, b) {
/* 000495 */ 	if (arguments.length) {
/* 000495 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 				switch (__attrib0__) {
/* 000495 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 	}
/* 000495 */ 	else {
/* 000495 */ 	}
/* 000496 */ 	return __t__ (__t__ (a === null) && b === null) || __eq__ (a, b);
/* 000496 */ };
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstate.map