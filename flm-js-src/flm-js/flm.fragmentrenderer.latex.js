/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:11
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000011 */ import * as __module_logging__ from './logging.js';
/* 000011 */ __nest__ (logging, '', __module_logging__);
/* 000009 */ import * as pyltxenc_lenc_get_builtin from './pylatexenc.latexencode.get_builtin_rules.js';
/* 000008 */ import {UnicodeToLatexEncoder} from './pylatexenc.latexencode.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {UnicodeToLatexEncoder, pyltxenc_lenc_get_builtin, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.latex';
/* 000012 */ export var logger = (function () {
/* 000012 */ 	var __accu0__ = logging;
/* 000012 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000012 */ }) ();
/* 000017 */ export var LatexFragmentRenderer =  __class__ ('LatexFragmentRenderer', [FragmentRenderer], {
/* 000017 */ 	__module__: __name__,
/* 000027 */ 	supports_delayed_render_markers: true,
/* 000034 */ 	heading_commands_by_level: dict ({1: 'section', 2: 'subsection', 3: 'subsubsection', 4: 'paragraph', 5: 'subparagraph', 6: 'subsubparagraph', 'theorem': 'flmTheoremHeading'}),
/* 000046 */ 	text_format_cmds: dict ({'textit': 'textit', 'textbf': 'textbf', 'defterm-term': 'flmDisplayTerm', 'term-in-defining-defterm': null}),
/* 000053 */ 	latex_semantic_block_environments: dict ({'defterm': 'flmDefterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike'}),
/* 000062 */ 	latex_macro_no_extra_space_after_dot: '\\@',
/* 000066 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000066 */ 		var kwargs = dict ();
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 				delete kwargs.__kwargtrans__;
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000067 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000070 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000070 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000070 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000070 */ 		}) (), unknown_char_policy: 'keep'}));
/* 000070 */ 	});},
/* 000076 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000077 */ 		return (function () {
/* 000077 */ 			var __accu0__ = self.latex_encoder;
/* 000077 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000077 */ 		}) ();
/* 000077 */ 	});},
/* 000080 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000082 */ 		var content = value;
/* 000084 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
/* 000084 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000086 */ 			var txtfmtcmd = (function () {
/* 000086 */ 				var __accu0__ = self.text_format_cmds;
/* 000086 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000086 */ 			}) ();
/* 000087 */ 			if (__t__ (txtfmtcmd)) {
/* 000088 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000088 */ 			}
/* 000088 */ 		}
/* 000090 */ 		return content;
/* 000090 */ 	});},
/* 000093 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000097 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
/* 000097 */ 			var __accu0__ = ',';
/* 000097 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000097 */ 				var __accu1__ = [];
/* 000097 */ 				var __iterable0__ = annotations;
/* 000097 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000097 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000097 */ 					(function () {
/* 000097 */ 						var __accu2__ = __accu1__;
/* 000097 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000097 */ 							var __accu3__ = a;
/* 000097 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000097 */ 						}) ());
/* 000097 */ 					}) ();
/* 000097 */ 				}
/* 000097 */ 				return __accu1__;
/* 000097 */ 			}) ());
/* 000098 */ 		}) ()), '\n'), (function () {
/* 000098 */ 			var __accu0__ = items_content;
/* 000098 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000098 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000098 */ 	});},
/* 000103 */ 	use_phantom_section: true,
/* 000104 */ 	latex_label_prefix: 'x:',
/* 000106 */ 	debug_disable_pin_labels: false,
/* 000108 */ 	use_flm_macro_for_pinning_labels: true,
/* 000110 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000110 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var insert_phantom_section = true;
/* 000110 */ 		};
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000112 */ 			return '';
/* 000112 */ 		}
/* 000113 */ 		var s = '';
/* 000114 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000115 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000115 */ 		}
/* 000116 */ 		if (__t__ (self.use_flm_macro_for_pinning_labels)) {
/* 000117 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\flmPinLabelHereWithDisplayText{', self.latex_label_prefix), target_id), '}{'), display_latex), '}'));
/* 000117 */ 		}
/* 000121 */ 		else {
/* 000123 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000124 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000124 */ 		}
/* 000125 */ 		return s;
/* 000125 */ 	});},
/* 000129 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000132 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000132 */ 			var __accu0__ = self;
/* 000132 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000132 */ 		}) ()), '\n\n');
/* 000132 */ 	});},
/* 000136 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000137 */ 		return (function () {
/* 000137 */ 			var __accu0__ = self;
/* 000137 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000137 */ 				var __accu1__ = [];
/* 000138 */ 				var __iterable0__ = nodelist;
/* 000138 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000138 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000138 */ 					(function () {
/* 000138 */ 						var __accu2__ = __accu1__;
/* 000138 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000138 */ 							var __accu3__ = self;
/* 000138 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000138 */ 						}) ());
/* 000138 */ 					}) ();
/* 000138 */ 				}
/* 000138 */ 				return __accu1__;
/* 000138 */ 			}) (), render_context);
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000142 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000152 */ 		var result = '';
/* 000153 */ 		var __iterable0__ = content_list;
/* 000153 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000153 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 			var result = (function () {
/* 000154 */ 				var __accu0__ = self;
/* 000154 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000154 */ 			}) ();
/* 000154 */ 		}
/* 000155 */ 		return result;
/* 000155 */ 	});},
/* 000157 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000159 */ 			var __left0__ = (function () {
/* 000159 */ 				var __accu0__ = a;
/* 000159 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000159 */ 			}) ();
/* 000159 */ 			var _ = __left0__ [0];
/* 000159 */ 			var last_line = __left0__ [1];
/* 000159 */ 		}
/* 000160 */ 		else {
/* 000161 */ 			var last_line = a;
/* 000161 */ 		}
/* 000162 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000164 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000164 */ 		}
/* 000165 */ 		if (__t__ ((function () {
/* 000165 */ 			var __accu0__ = re;
/* 000165 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000165 */ 		}) () !== null)) {
/* 000167 */ 			return __add__ (__add__ (a, ' '), b);
/* 000167 */ 		}
/* 000168 */ 		return __add__ (a, b);
/* 000168 */ 	});},
/* 000170 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000178 */ 		return __add__ ((function () {
/* 000178 */ 			var __accu0__ = '\n\n';
/* 000178 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000178 */ 				var __accu1__ = [];
/* 000178 */ 				var __iterable0__ = content_list;
/* 000178 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu2__ = __accu1__;
/* 000178 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000178 */ 							var __accu3__ = c;
/* 000178 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000178 */ 						}) ());
/* 000178 */ 					}) ();
/* 000178 */ 				}
/* 000178 */ 				return __accu1__;
/* 000178 */ 			}) ());
/* 000178 */ 		}) (), '\n');
/* 000178 */ 	});},
/* 000183 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000186 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000188 */ 		return __add__ (__add__ ('% ', (function () {
/* 000188 */ 			var __accu0__ = debug_str;
/* 000188 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000188 */ 		}) ()), '\n');
/* 000188 */ 	});},
/* 000190 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000190 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000190 */ 			var annotations = null;
/* 000190 */ 		};
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000191 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000192 */ 			var annotations = [];
/* 000192 */ 		}
/* 000193 */ 		else {
/* 000194 */ 			var annotations = (function () {
/* 000194 */ 				var __accu0__ = [];
/* 000194 */ 				var __iterable0__ = annotations;
/* 000194 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 					(function () {
/* 000194 */ 						var __accu1__ = __accu0__;
/* 000194 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000194 */ 							var __accu2__ = a;
/* 000194 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000194 */ 						}) ());
/* 000194 */ 					}) ();
/* 000194 */ 				}
/* 000194 */ 				return __accu0__;
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000196 */ 		return '% {}\n'.format ((function () {
/* 000196 */ 			var __accu0__ = ' ';
/* 000196 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000196 */ 		}) ());
/* 000196 */ 	});},
/* 000198 */ 	latex_wrap_verbatim_macro: null,
/* 000200 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000200 */ 		var is_block_level = false;
/* 000200 */ 		var annotations = null;
/* 000200 */ 		var target_id = null;
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000202 */ 		if (__t__ (__in__ ('verbatimcode', annotations))) {
/* 000203 */ 			return __add__ (__add__ (__add__ ('\\begin{verbatim}', '\n'), value), '\\end{verbatim}');
/* 000203 */ 		}
/* 000206 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000207 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000207 */ 				var __accu0__ = self;
/* 000207 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000207 */ 			}) ()), '}');
/* 000207 */ 		}
/* 000208 */ 		return (function () {
/* 000208 */ 			var __accu0__ = self;
/* 000208 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000208 */ 		}) ();
/* 000208 */ 	});},
/* 000210 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000210 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000210 */ 			var environmentname = null;
/* 000210 */ 		};
/* 000210 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000210 */ 			var target_id = null;
/* 000210 */ 		};
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000218 */ 		var __left0__ = delimiters;
/* 000218 */ 		var begin_delim = __left0__ [0];
/* 000218 */ 		var end_delim = __left0__ [1];
/* 000219 */ 		if (__t__ (environmentname)) {
/* 000220 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000221 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000221 */ 		}
/* 000224 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000224 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000224 */ 		}) ()), end_delim);
/* 000224 */ 	});},
/* 000227 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000231 */ 		var content = (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000231 */ 		}) ();
/* 000237 */ 		return (function () {
/* 000237 */ 			var __accu0__ = self;
/* 000237 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000237 */ 		}) ();
/* 000237 */ 	});},
/* 000240 */ 	use_endnote_latex_command: null,
/* 000241 */ 	use_citation_latex_command: null,
/* 000243 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000243 */ 		var annotations = null;
/* 000243 */ 		var target_id = null;
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000246 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000247 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000247 */ 		}
/* 000250 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000251 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000251 */ 		}
/* 000255 */ 		return content;
/* 000255 */ 	});},
/* 000258 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000258 */ 		var annotations = null;
/* 000258 */ 		var target_id = null;
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000261 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000262 */ 			var annotations = [];
/* 000262 */ 		}
/* 000263 */ 		else {
/* 000264 */ 			var annotations = (function () {
/* 000264 */ 				var __accu0__ = [];
/* 000264 */ 				var __iterable0__ = annotations;
/* 000264 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000264 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000264 */ 					(function () {
/* 000264 */ 						var __accu1__ = __accu0__;
/* 000264 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000264 */ 							var __accu2__ = a;
/* 000264 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000264 */ 						}) ());
/* 000264 */ 					}) ();
/* 000264 */ 				}
/* 000264 */ 				return __accu0__;
/* 000264 */ 			}) ();
/* 000264 */ 		}
/* 000268 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000268 */ 			var __accu0__ = ',';
/* 000268 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000268 */ 		}) ()), ' ---\n');
/* 000269 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000269 */ 			var __accu0__ = ',';
/* 000269 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000269 */ 		}) ()), ' ---\n');
/* 000271 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000272 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000273 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000274 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000274 */ 		}
/* 000276 */ 		var lblcmd = '';
/* 000277 */ 		if (__t__ (target_id)) {
/* 000278 */ 			var lblcmd = (function () {
/* 000278 */ 				var __accu0__ = self;
/* 000278 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000283 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000283 */ 			var __accu0__ = self;
/* 000283 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000283 */ 		}) ());
/* 000283 */ 	});},
/* 000287 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000287 */ 		var target_id_generator = null;
/* 000287 */ 		var annotations = null;
/* 000287 */ 		var nested_depth = null;
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000298 */ 		var s_items = [];
/* 000300 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000300 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000300 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000300 */ 			var j = __left0__ [0];
/* 000300 */ 			var item_content_nodelist = __left0__ [1];
/* 000302 */ 			var use_block_level = true;
/* 000303 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000306 */ 				var use_block_level = false;
/* 000306 */ 			}
/* 000308 */ 			// pass;
/* 000312 */ 			// pass;
/* 000316 */ 			var item_content = (function () {
/* 000316 */ 				var __accu0__ = self;
/* 000316 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000316 */ 			}) ();
/* 000322 */ 			var enumno = __add__ (1, j);
/* 000324 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000325 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000326 */ 				var tag_content = (function () {
/* 000326 */ 					var __accu0__ = self;
/* 000326 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000327 */ 			else {
/* 000328 */ 				var tag_content = (function () {
/* 000328 */ 					var __accu0__ = self;
/* 000328 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000328 */ 				}) ();
/* 000328 */ 			}
/* 000334 */ 			var itemlabel = '';
/* 000335 */ 			if (__t__ (target_id_generator !== null)) {
/* 000336 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000337 */ 				if (__t__ (this_target_id !== null)) {
/* 000338 */ 					var itemlabel = (function () {
/* 000338 */ 						var __accu0__ = self;
/* 000338 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000338 */ 					}) ();
/* 000338 */ 				}
/* 000338 */ 			}
/* 000341 */ 			(function () {
/* 000341 */ 				var __accu0__ = s_items;
/* 000341 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000341 */ 			}) ();
/* 000341 */ 		}
/* 000347 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000348 */ 			var annotations = [];
/* 000348 */ 		}
/* 000349 */ 		else {
/* 000350 */ 			var annotations = (function () {
/* 000350 */ 				var __accu0__ = [];
/* 000350 */ 				var __iterable0__ = annotations;
/* 000350 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000350 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000350 */ 					(function () {
/* 000350 */ 						var __accu1__ = __accu0__;
/* 000350 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000350 */ 							var __accu2__ = a;
/* 000350 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000350 */ 						}) ());
/* 000350 */ 					}) ();
/* 000350 */ 				}
/* 000350 */ 				return __accu0__;
/* 000350 */ 			}) ();
/* 000350 */ 		}
/* 000352 */ 		var ltx_environment = 'itemize';
/* 000354 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000357 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000357 */ 		}
/* 000359 */ 		return (function () {
/* 000359 */ 			var __accu0__ = self;
/* 000362 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000362 */ 				var __accu1__ = self;
/* 000362 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000362 */ 			}) (), render_context);
/* 000362 */ 		}) ();
/* 000362 */ 	});},
/* 000367 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000367 */ 		var heading_level = 1;
/* 000367 */ 		var inline_heading = false;
/* 000367 */ 		var target_id = null;
/* 000367 */ 		var annotations = null;
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000374 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000376 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000376 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000376 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000376 */ 			}) ())));
/* 000376 */ 			__except0__.__cause__ = null;
/* 000376 */ 			throw __except0__;
/* 000376 */ 		}
/* 000378 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000380 */ 		var title_content = (function () {
/* 000380 */ 			var __accu0__ = self;
/* 000380 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000380 */ 		}) ();
/* 000382 */ 		var labelcmd = '';
/* 000383 */ 		if (__t__ (target_id)) {
/* 000384 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000384 */ 		}
/* 000386 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000386 */ 	});},
/* 000391 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000391 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000391 */ 			var annotations = null;
/* 000391 */ 		};
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000393 */ 		var display_content = (function () {
/* 000393 */ 			var __accu0__ = self;
/* 000393 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000393 */ 		}) ();
/* 000399 */ 		var annotations = __t__ (annotations) || [];
/* 000401 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000402 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000402 */ 		}
/* 000405 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000406 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000406 */ 		}
/* 000410 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000411 */ 			return (function () {
/* 000411 */ 				var __accu0__ = self;
/* 000411 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000411 */ 			}) ();
/* 000411 */ 		}
/* 000415 */ 		return (function () {
/* 000415 */ 			var __accu0__ = self;
/* 000415 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000415 */ 		}) ();
/* 000415 */ 	});},
/* 000420 */ 	debug_disable_link_hyperref: false,
/* 000422 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000423 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000424 */ 			return display_content;
/* 000424 */ 		}
/* 000425 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000425 */ 	});},
/* 000430 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000431 */ 		var escaped_url = (function () {
/* 000431 */ 			var __accu0__ = re;
/* 000431 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
/* 000431 */ 				if (arguments.length) {
/* 000431 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 							switch (__attrib0__) {
/* 000431 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 							}
/* 000431 */ 						}
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 				else {
/* 000431 */ 				}
/* 000431 */ 				return __add__ ('\\', (function () {
/* 000431 */ 					var __accu1__ = m;
/* 000431 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000431 */ 				}) ());
/* 000431 */ 			}), href);
/* 000431 */ 		}) ();
/* 000432 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}%\\n');
/* 000432 */ 	});},
/* 000434 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000434 */ 		if (arguments.length) {
/* 000434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 					switch (__attrib0__) {
/* 000434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		else {
/* 000434 */ 		}
/* 000435 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000435 */ 	});},
/* 000437 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000438 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000438 */ 	});},
/* 000440 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000441 */ 		return (function () {
/* 000441 */ 			var __accu0__ = _rx_delayed_markers;
/* 000441 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000441 */ 				if (arguments.length) {
/* 000441 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 							switch (__attrib0__) {
/* 000441 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 							}
/* 000441 */ 						}
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 				else {
/* 000441 */ 				}
/* 000442 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000442 */ 					var __accu1__ = m;
/* 000442 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000442 */ 				}) ()));
/* 000442 */ 			}), content);
/* 000442 */ 		}) ();
/* 000442 */ 	});},
/* 000449 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000467 */ 	float_use_centering: '\\centering{}',
/* 000468 */ 	float_caption_join: ': ',
/* 000469 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000470 */ 	float_latex_after_caption: '}',
/* 000472 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000472 */ 		if (arguments.length) {
/* 000472 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000472 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000472 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000472 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000472 */ 					switch (__attrib0__) {
/* 000472 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000472 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000472 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000472 */ 					}
/* 000472 */ 				}
/* 000472 */ 			}
/* 000472 */ 		}
/* 000472 */ 		else {
/* 000472 */ 		}
/* 000475 */ 		var has_number = false;
/* 000476 */ 		var has_caption = false;
/* 000478 */ 		var full_figcaption_rendered_list = [];
/* 000479 */ 		var float_designator = null;
/* 000480 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000481 */ 			var has_number = true;
/* 000484 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000484 */ 				var __accu0__ = self;
/* 000484 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000489 */ 			}) (), '~'), (function () {
/* 000489 */ 				var __accu0__ = self;
/* 000489 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000489 */ 			}) ());
/* 000489 */ 		}
/* 000494 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000498 */ 			var float_designator = (function () {
/* 000498 */ 				var __accu0__ = self;
/* 000498 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000498 */ 			}) ();
/* 000498 */ 		}
/* 000501 */ 		else {
/* 000505 */ 			// pass;
/* 000505 */ 		}
/* 000507 */ 		var labelcmd = '';
/* 000508 */ 		if (__t__ (float_designator !== null)) {
/* 000509 */ 			(function () {
/* 000509 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000509 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000509 */ 			}) ();
/* 000511 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000512 */ 				var labelcmd = (function () {
/* 000512 */ 					var __accu0__ = self;
/* 000512 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000512 */ 				}) ();
/* 000512 */ 			}
/* 000512 */ 		}
/* 000516 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000517 */ 			var has_caption = true;
/* 000521 */ 			(function () {
/* 000521 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000521 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000521 */ 			}) ();
/* 000525 */ 			(function () {
/* 000525 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000526 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000526 */ 					var __accu1__ = self;
/* 000526 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000526 */ 				}) ());
/* 000526 */ 			}) ();
/* 000526 */ 		}
/* 000532 */ 		var rendered_float_caption = null;
/* 000533 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000536 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000536 */ 				var __accu0__ = self;
/* 000538 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000538 */ 					var __accu1__ = self;
/* 000538 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000538 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000538 */ 			}) ()), self.float_latex_after_caption);
/* 000538 */ 		}
/* 000545 */ 		var float_content_block_content = (function () {
/* 000545 */ 			var __accu0__ = self;
/* 000545 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000545 */ 		}) ();
/* 000551 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000552 */ 			var float_content_with_caption = (function () {
/* 000552 */ 				var __accu0__ = self;
/* 000552 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000552 */ 			}) ();
/* 000552 */ 		}
/* 000556 */ 		else {
/* 000557 */ 			var float_content_with_caption = float_content_block_content;
/* 000557 */ 		}
/* 000559 */ 		var env_name = float_instance.float_type;
/* 000560 */ 		var env_options_str = '[h!]';
/* 000561 */ 		var centering = self.float_use_centering;
/* 000563 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000564 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000564 */ 		}
/* 000565 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000566 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000566 */ 		}
/* 000567 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000568 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000568 */ 		}
/* 000569 */ 		else {
/* 000570 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000570 */ 		}
/* 000572 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000573 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000573 */ 		}
/* 000574 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000575 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000575 */ 		}
/* 000576 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000577 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000577 */ 		}
/* 000579 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000579 */ 	});},
/* 000587 */ 	graphics_raster_magnification: 1,
/* 000588 */ 	graphics_vector_magnification: 1,
/* 000590 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000593 */ 		var __left0__ = (function () {
/* 000593 */ 			var __accu0__ = self;
/* 000593 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000593 */ 		}) ();
/* 000593 */ 		var src_url = __left0__ [0];
/* 000593 */ 		var incloptions = __left0__ [1];
/* 000595 */ 		var opts = '';
/* 000596 */ 		if (__t__ (incloptions !== null)) {
/* 000597 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000597 */ 		}
/* 000599 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000599 */ 	});},
/* 000601 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000601 */ 		if (arguments.length) {
/* 000601 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000601 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000601 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000601 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000601 */ 					switch (__attrib0__) {
/* 000601 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 					}
/* 000601 */ 				}
/* 000601 */ 			}
/* 000601 */ 		}
/* 000601 */ 		else {
/* 000601 */ 		}
/* 000603 */ 		var whoptc = null;
/* 000604 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000606 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000606 */ 			var width_pt = __left0__ [0];
/* 000606 */ 			var height_pt = __left0__ [1];
/* 000608 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000609 */ 				if (__t__ (width_pt !== null)) {
/* 000610 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000610 */ 				}
/* 000611 */ 				if (__t__ (height_pt !== null)) {
/* 000612 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000612 */ 				}
/* 000612 */ 			}
/* 000613 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000614 */ 				if (__t__ (width_pt !== null)) {
/* 000615 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000615 */ 				}
/* 000616 */ 				if (__t__ (height_pt !== null)) {
/* 000617 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000617 */ 				}
/* 000617 */ 			}
/* 000619 */ 			var whoptc = '';
/* 000620 */ 			if (__t__ (width_pt !== null)) {
/* 000621 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000621 */ 			}
/* 000622 */ 			if (__t__ (height_pt !== null)) {
/* 000623 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000623 */ 			}
/* 000623 */ 		}
/* 000625 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000625 */ 	});},
/* 000628 */ 	cells_max_width_latexdim: '0.96\\linewidth',
/* 000629 */ 	cells_render_method: 'fit_width_test',
/* 000631 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000631 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000631 */ 			var target_id = null;
/* 000631 */ 		};
/* 000631 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000631 */ 			var render_cell_nodelist_contents_fn = null;
/* 000631 */ 		};
/* 000631 */ 		if (arguments.length) {
/* 000631 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000631 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000631 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000631 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000631 */ 					switch (__attrib0__) {
/* 000631 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 					}
/* 000631 */ 				}
/* 000631 */ 			}
/* 000631 */ 		}
/* 000631 */ 		else {
/* 000631 */ 		}
/* 000634 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000635 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000635 */ 				if (arguments.length) {
/* 000635 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000635 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000635 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000635 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000635 */ 							switch (__attrib0__) {
/* 000635 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000635 */ 							}
/* 000635 */ 						}
/* 000635 */ 					}
/* 000635 */ 				}
/* 000635 */ 				else {
/* 000635 */ 				}
/* 000636 */ 				return (function () {
/* 000636 */ 					var __accu0__ = self;
/* 000636 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000636 */ 				}) ();
/* 000636 */ 			});
/* 000636 */ 		}
/* 000638 */ 		var stab_contents = '';
/* 000640 */ 		var cell_spans_styles = '';
/* 000641 */ 		var cell_hlines = [];
/* 000642 */ 		var cell_vlines = [];
/* 000644 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000644 */ 		var tabheight = __left0__ [0];
/* 000644 */ 		var tabwidth = __left0__ [1];
/* 000646 */ 		var __iterable0__ = cells_model.grid_data;
/* 000646 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000646 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000647 */ 			var stab_rowitems = [];
/* 000649 */ 			var __iterable1__ = row;
/* 000649 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000649 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000650 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000653 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000654 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000661 */ 					var thiscellspanopts = [];
/* 000662 */ 					var rowj = cell.placement.row_range.start;
/* 000663 */ 					var rowjend = cell.placement.row_range.end;
/* 000664 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000665 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000666 */ 						(function () {
/* 000666 */ 							var __accu0__ = thiscellspanopts;
/* 000666 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000666 */ 						}) ();
/* 000666 */ 					}
/* 000668 */ 					var colj = cell.placement.col_range.start;
/* 000669 */ 					var coljend = cell.placement.col_range.end;
/* 000670 */ 					var numcols = __sub__ (coljend, colj);
/* 000671 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000672 */ 						(function () {
/* 000672 */ 							var __accu0__ = thiscellspanopts;
/* 000672 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000672 */ 						}) ();
/* 000672 */ 					}
/* 000674 */ 					var thiscellstyles = 'm';
/* 000675 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000676 */ 						var thiscellstyles = 'l';
/* 000676 */ 					}
/* 000677 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000678 */ 						var thiscellstyles = 'c';
/* 000678 */ 					}
/* 000679 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000680 */ 						var thiscellstyles = 'r';
/* 000680 */ 					}
/* 000682 */ 					var bgcol = null;
/* 000683 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000684 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000684 */ 					}
/* 000685 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000686 */ 						var bgcol = 'flmTabCellColorRed';
/* 000686 */ 					}
/* 000687 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000688 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000688 */ 					}
/* 000689 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000690 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000690 */ 					}
/* 000692 */ 					if (__t__ (bgcol)) {
/* 000693 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000693 */ 					}
/* 000695 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000696 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000696 */ 					}
/* 000698 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000699 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000700 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000700 */ 						}
/* 000701 */ 						else {
/* 000702 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000702 */ 						}
/* 000705 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000706 */ 							(function () {
/* 000706 */ 								var __accu0__ = cell_hlines;
/* 000706 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000706 */ 							}) ();
/* 000706 */ 						}
/* 000706 */ 					}
/* 000708 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000709 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000710 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000710 */ 						}
/* 000711 */ 						else {
/* 000712 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000712 */ 						}
/* 000714 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000715 */ 							(function () {
/* 000715 */ 								var __accu0__ = cell_vlines;
/* 000715 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000715 */ 							}) ();
/* 000715 */ 						}
/* 000716 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000717 */ 							(function () {
/* 000717 */ 								var __accu0__ = cell_vlines;
/* 000717 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000717 */ 							}) ();
/* 000717 */ 						}
/* 000717 */ 					}
/* 000719 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000722 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000722 */ 							var __accu0__ = ',';
/* 000722 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000722 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000722 */ 					}
/* 000722 */ 				}
/* 000725 */ 				else {
/* 000727 */ 					var cell_content = '';
/* 000727 */ 				}
/* 000729 */ 				(function () {
/* 000729 */ 					var __accu0__ = stab_rowitems;
/* 000729 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000729 */ 				}) ();
/* 000729 */ 			}
/* 000731 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000731 */ 				var __accu0__ = '&';
/* 000731 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000731 */ 			}) (), '\\\\'), '\n'));
/* 000731 */ 		}
/* 000733 */ 		var _typeset_table_contents = function (raw_args, colspec_one) {
/* 000733 */ 			if (typeof raw_args == 'undefined' || (raw_args != null && raw_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000733 */ 				var raw_args = null;
/* 000733 */ 			};
/* 000733 */ 			if (typeof colspec_one == 'undefined' || (colspec_one != null && colspec_one.hasOwnProperty ("__kwargtrans__"))) {;
/* 000733 */ 				var colspec_one = null;
/* 000733 */ 			};
/* 000733 */ 			if (arguments.length) {
/* 000733 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000733 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000733 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000733 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000733 */ 						switch (__attrib0__) {
/* 000733 */ 							case 'raw_args': var raw_args = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 							case 'colspec_one': var colspec_one = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 						}
/* 000733 */ 					}
/* 000733 */ 				}
/* 000733 */ 			}
/* 000733 */ 			else {
/* 000733 */ 			}
/* 000734 */ 			if (__t__ (raw_args !== null)) {
/* 000735 */ 				var tblrargs = raw_args;
/* 000735 */ 			}
/* 000736 */ 			else {
/* 000737 */ 				var tblrargs = __add__ (__add__ ('colspec={', __mul__ (colspec_one, tabwidth)), '}');
/* 000737 */ 			}
/* 000742 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{tblr}{', tblrargs), ','), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000742 */ 				var __accu0__ = '';
/* 000742 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000742 */ 					var __accu1__ = [];
/* 000742 */ 					var __iterable0__ = cell_hlines;
/* 000742 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000743 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000743 */ 						var rownrng = __left0__ [0];
/* 000743 */ 						var colnrng = __left0__ [1];
/* 000743 */ 						var lsty = __left0__ [2];
/* 000743 */ 						(function () {
/* 000743 */ 							var __accu2__ = __accu1__;
/* 000743 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000743 */ 						}) ();
/* 000743 */ 					}
/* 000743 */ 					return __accu1__;
/* 000743 */ 				}) ());
/* 000744 */ 			}) ()), (function () {
/* 000744 */ 				var __accu0__ = '';
/* 000744 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000744 */ 					var __accu1__ = [];
/* 000744 */ 					var __iterable0__ = cell_vlines;
/* 000744 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000745 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000745 */ 						var rownrng = __left0__ [0];
/* 000745 */ 						var colnrng = __left0__ [1];
/* 000745 */ 						var lsty = __left0__ [2];
/* 000745 */ 						(function () {
/* 000745 */ 							var __accu2__ = __accu1__;
/* 000745 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000745 */ 						}) ();
/* 000745 */ 					}
/* 000745 */ 					return __accu1__;
/* 000745 */ 				}) ());
/* 000745 */ 			}) ()), '}%'), '\n'), '\\toprule'), '\n'), stab_contents), '\\bottomrule'), '\n'), '\\end{tblr}%'), '\n');
/* 000745 */ 		};
/* 000754 */ 		if (__t__ (__eq__ (self.cells_render_method, 'simple'))) {
/* 000757 */ 			var s = __add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\flmCellsEndCenter ');
/* 000760 */ 			return s;
/* 000760 */ 		}
/* 000762 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test'))) {
/* 000770 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\long\\def\\flmTempTypesetThisTable#1{%'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({raw_args: '#1'}))), '}%'), '\n');
/* 000774 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000786 */ 			var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 000787 */ 			return s;
/* 000787 */ 		}
/* 000789 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test_dupl'))) {
/* 000812 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\def\\flmTmpMaxW{\\dimexpr '), self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox\\bgroup'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\egroup'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'X[-1]'}))), '\\fi'), '\n'), '\\flmCellsEndCenter ');
/* 000816 */ 			return s;
/* 000816 */ 		}
/* 000818 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid cells_render_method: ', __call__ (repr, null, self.cells_render_method)));
/* 000818 */ 		__except0__.__cause__ = null;
/* 000818 */ 		throw __except0__;
/* 000818 */ 	});}
/* 000818 */ });
/* 000825 */ export var _rx_delayed_markers = (function () {
/* 000825 */ 	var __accu0__ = re;
/* 000825 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000825 */ }) ();
/* 000834 */ export var _latex_preamble_suggested_defs = '\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{amsmath}\n\\flmRequirePackage{amssymb}\n\n\\flmRequirePackage{graphicx}\n\\flmRequirePackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\flmRequirePackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n';
/* 000915 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000915 */ 	__module__: __name__,
/* 000916 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000919 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000919 */ 		if (arguments.length) {
/* 000919 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000919 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000919 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000919 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000919 */ 					switch (__attrib0__) {
/* 000919 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000919 */ 					}
/* 000919 */ 				}
/* 000919 */ 			}
/* 000919 */ 		}
/* 000919 */ 		else {
/* 000919 */ 		}
/* 000920 */ 		return dict ({'package_suggested_defs': _latex_preamble_suggested_defs, 'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000920 */ 	};},
/* 000925 */ 	format_name: 'latex'
/* 000925 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map