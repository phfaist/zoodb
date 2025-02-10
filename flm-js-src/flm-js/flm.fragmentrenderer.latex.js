/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 21:22:04
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000011 */ import * as __module_logging__ from './logging.js';
/* 000011 */ __nest__ (logging, '', __module_logging__);
/* 000009 */ import * as pyltxenc_lenc_get_builtin from './pylatexenc.latexencode.get_builtin_rules.js';
/* 000008 */ import {UnicodeToLatexEncoder} from './pylatexenc.latexencode.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {FragmentRenderer, UnicodeToLatexEncoder, pyltxenc_lenc_get_builtin};
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
/* 000205 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000206 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000206 */ 				var __accu0__ = self;
/* 000206 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000206 */ 			}) ()), '}');
/* 000206 */ 		}
/* 000207 */ 		return (function () {
/* 000207 */ 			var __accu0__ = self;
/* 000207 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000207 */ 		}) ();
/* 000207 */ 	});},
/* 000209 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000209 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var environmentname = null;
/* 000209 */ 		};
/* 000209 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var target_id = null;
/* 000209 */ 		};
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000217 */ 		var __left0__ = delimiters;
/* 000217 */ 		var begin_delim = __left0__ [0];
/* 000217 */ 		var end_delim = __left0__ [1];
/* 000218 */ 		if (__t__ (environmentname)) {
/* 000219 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000220 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000220 */ 		}
/* 000223 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000223 */ 			var __accu0__ = self;
/* 000223 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000223 */ 		}) ()), end_delim);
/* 000223 */ 	});},
/* 000226 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000230 */ 		var content = (function () {
/* 000230 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000230 */ 		}) ();
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000236 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000236 */ 		}) ();
/* 000236 */ 	});},
/* 000239 */ 	use_endnote_latex_command: null,
/* 000240 */ 	use_citation_latex_command: null,
/* 000242 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000242 */ 		var annotations = null;
/* 000242 */ 		var target_id = null;
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000245 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000246 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000246 */ 		}
/* 000249 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000250 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000250 */ 		}
/* 000254 */ 		return content;
/* 000254 */ 	});},
/* 000257 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000257 */ 		var annotations = null;
/* 000257 */ 		var target_id = null;
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000260 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000261 */ 			var annotations = [];
/* 000261 */ 		}
/* 000262 */ 		else {
/* 000263 */ 			var annotations = (function () {
/* 000263 */ 				var __accu0__ = [];
/* 000263 */ 				var __iterable0__ = annotations;
/* 000263 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000263 */ 					(function () {
/* 000263 */ 						var __accu1__ = __accu0__;
/* 000263 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000263 */ 							var __accu2__ = a;
/* 000263 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000263 */ 						}) ());
/* 000263 */ 					}) ();
/* 000263 */ 				}
/* 000263 */ 				return __accu0__;
/* 000263 */ 			}) ();
/* 000263 */ 		}
/* 000267 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000267 */ 			var __accu0__ = ',';
/* 000267 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000267 */ 		}) ()), ' ---\n');
/* 000268 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000268 */ 			var __accu0__ = ',';
/* 000268 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000268 */ 		}) ()), ' ---\n');
/* 000270 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000271 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000272 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000273 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000273 */ 		}
/* 000275 */ 		var lblcmd = '';
/* 000276 */ 		if (__t__ (target_id)) {
/* 000277 */ 			var lblcmd = (function () {
/* 000277 */ 				var __accu0__ = self;
/* 000277 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000277 */ 			}) ();
/* 000277 */ 		}
/* 000282 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000282 */ 			var __accu0__ = self;
/* 000282 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000282 */ 		}) ());
/* 000282 */ 	});},
/* 000286 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000286 */ 		var target_id_generator = null;
/* 000286 */ 		var annotations = null;
/* 000286 */ 		var nested_depth = null;
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000297 */ 		var s_items = [];
/* 000299 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000299 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000299 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000299 */ 			var j = __left0__ [0];
/* 000299 */ 			var item_content_nodelist = __left0__ [1];
/* 000301 */ 			var use_block_level = true;
/* 000302 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000305 */ 				var use_block_level = false;
/* 000305 */ 			}
/* 000307 */ 			// pass;
/* 000311 */ 			// pass;
/* 000315 */ 			var item_content = (function () {
/* 000315 */ 				var __accu0__ = self;
/* 000315 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000315 */ 			}) ();
/* 000321 */ 			var enumno = __add__ (1, j);
/* 000323 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000324 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000325 */ 				var tag_content = (function () {
/* 000325 */ 					var __accu0__ = self;
/* 000325 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000325 */ 				}) ();
/* 000325 */ 			}
/* 000326 */ 			else {
/* 000327 */ 				var tag_content = (function () {
/* 000327 */ 					var __accu0__ = self;
/* 000327 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000327 */ 				}) ();
/* 000327 */ 			}
/* 000333 */ 			var itemlabel = '';
/* 000334 */ 			if (__t__ (target_id_generator !== null)) {
/* 000335 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000336 */ 				if (__t__ (this_target_id !== null)) {
/* 000337 */ 					var itemlabel = (function () {
/* 000337 */ 						var __accu0__ = self;
/* 000337 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000337 */ 					}) ();
/* 000337 */ 				}
/* 000337 */ 			}
/* 000340 */ 			(function () {
/* 000340 */ 				var __accu0__ = s_items;
/* 000340 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000340 */ 			}) ();
/* 000340 */ 		}
/* 000346 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000347 */ 			var annotations = [];
/* 000347 */ 		}
/* 000348 */ 		else {
/* 000349 */ 			var annotations = (function () {
/* 000349 */ 				var __accu0__ = [];
/* 000349 */ 				var __iterable0__ = annotations;
/* 000349 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000349 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000349 */ 					(function () {
/* 000349 */ 						var __accu1__ = __accu0__;
/* 000349 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000349 */ 							var __accu2__ = a;
/* 000349 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000349 */ 						}) ());
/* 000349 */ 					}) ();
/* 000349 */ 				}
/* 000349 */ 				return __accu0__;
/* 000349 */ 			}) ();
/* 000349 */ 		}
/* 000351 */ 		var ltx_environment = 'itemize';
/* 000353 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000356 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000356 */ 		}
/* 000358 */ 		return (function () {
/* 000358 */ 			var __accu0__ = self;
/* 000361 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000361 */ 				var __accu1__ = self;
/* 000361 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000361 */ 			}) (), render_context);
/* 000361 */ 		}) ();
/* 000361 */ 	});},
/* 000366 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000366 */ 		var heading_level = 1;
/* 000366 */ 		var inline_heading = false;
/* 000366 */ 		var target_id = null;
/* 000366 */ 		var annotations = null;
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000373 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000375 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000375 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000375 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000375 */ 			}) ())));
/* 000375 */ 			__except0__.__cause__ = null;
/* 000375 */ 			throw __except0__;
/* 000375 */ 		}
/* 000377 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000379 */ 		var title_content = (function () {
/* 000379 */ 			var __accu0__ = self;
/* 000379 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000379 */ 		}) ();
/* 000381 */ 		var labelcmd = '';
/* 000382 */ 		if (__t__ (target_id)) {
/* 000383 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000383 */ 		}
/* 000385 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000385 */ 	});},
/* 000390 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000390 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000390 */ 			var annotations = null;
/* 000390 */ 		};
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000392 */ 		var display_content = (function () {
/* 000392 */ 			var __accu0__ = self;
/* 000392 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000392 */ 		}) ();
/* 000398 */ 		var annotations = __t__ (annotations) || [];
/* 000400 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000401 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000401 */ 		}
/* 000404 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000405 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000405 */ 		}
/* 000409 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000410 */ 			return (function () {
/* 000410 */ 				var __accu0__ = self;
/* 000410 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000410 */ 			}) ();
/* 000410 */ 		}
/* 000414 */ 		return (function () {
/* 000414 */ 			var __accu0__ = self;
/* 000414 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000414 */ 		}) ();
/* 000414 */ 	});},
/* 000419 */ 	debug_disable_link_hyperref: false,
/* 000421 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000423 */ 			return display_content;
/* 000423 */ 		}
/* 000424 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000424 */ 	});},
/* 000429 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000430 */ 		var escaped_url = (function () {
/* 000430 */ 			var __accu0__ = re;
/* 000430 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
/* 000430 */ 				if (arguments.length) {
/* 000430 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 							switch (__attrib0__) {
/* 000430 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 							}
/* 000430 */ 						}
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 				else {
/* 000430 */ 				}
/* 000430 */ 				return __add__ ('\\', (function () {
/* 000430 */ 					var __accu1__ = m;
/* 000430 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000430 */ 				}) ());
/* 000430 */ 			}), href);
/* 000430 */ 		}) ();
/* 000431 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}%\\n');
/* 000431 */ 	});},
/* 000433 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000434 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000434 */ 	});},
/* 000436 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000437 */ 	});},
/* 000439 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		return (function () {
/* 000440 */ 			var __accu0__ = _rx_delayed_markers;
/* 000440 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000440 */ 				if (arguments.length) {
/* 000440 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 							switch (__attrib0__) {
/* 000440 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 							}
/* 000440 */ 						}
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 				else {
/* 000440 */ 				}
/* 000441 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000441 */ 					var __accu1__ = m;
/* 000441 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000441 */ 				}) ()));
/* 000441 */ 			}), content);
/* 000441 */ 		}) ();
/* 000441 */ 	});},
/* 000448 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000466 */ 	float_use_centering: '\\centering{}',
/* 000467 */ 	float_caption_join: ': ',
/* 000468 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000469 */ 	float_latex_after_caption: '}',
/* 000471 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000474 */ 		var has_number = false;
/* 000475 */ 		var has_caption = false;
/* 000477 */ 		var full_figcaption_rendered_list = [];
/* 000478 */ 		var float_designator = null;
/* 000479 */ 		if (__t__ (float_instance.number !== null)) {
/* 000480 */ 			var has_number = true;
/* 000483 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000483 */ 				var __accu0__ = self;
/* 000483 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000488 */ 			}) (), '~'), (function () {
/* 000488 */ 				var __accu0__ = self;
/* 000488 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000488 */ 			}) ());
/* 000488 */ 		}
/* 000493 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000497 */ 			var float_designator = (function () {
/* 000497 */ 				var __accu0__ = self;
/* 000497 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000497 */ 			}) ();
/* 000497 */ 		}
/* 000500 */ 		else {
/* 000504 */ 			// pass;
/* 000504 */ 		}
/* 000506 */ 		var labelcmd = '';
/* 000507 */ 		if (__t__ (float_designator !== null)) {
/* 000508 */ 			(function () {
/* 000508 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000508 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000508 */ 			}) ();
/* 000510 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000511 */ 				var labelcmd = (function () {
/* 000511 */ 					var __accu0__ = self;
/* 000511 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000511 */ 				}) ();
/* 000511 */ 			}
/* 000511 */ 		}
/* 000515 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000516 */ 			var has_caption = true;
/* 000520 */ 			(function () {
/* 000520 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000520 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000520 */ 			}) ();
/* 000524 */ 			(function () {
/* 000524 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000525 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000525 */ 					var __accu1__ = self;
/* 000525 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000525 */ 				}) ());
/* 000525 */ 			}) ();
/* 000525 */ 		}
/* 000531 */ 		var rendered_float_caption = null;
/* 000532 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000535 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000535 */ 				var __accu0__ = self;
/* 000537 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000537 */ 					var __accu1__ = self;
/* 000537 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000537 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000537 */ 			}) ()), self.float_latex_after_caption);
/* 000537 */ 		}
/* 000544 */ 		var float_content_block_content = (function () {
/* 000544 */ 			var __accu0__ = self;
/* 000544 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000544 */ 		}) ();
/* 000550 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000551 */ 			var float_content_with_caption = (function () {
/* 000551 */ 				var __accu0__ = self;
/* 000551 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000551 */ 			}) ();
/* 000551 */ 		}
/* 000555 */ 		else {
/* 000556 */ 			var float_content_with_caption = float_content_block_content;
/* 000556 */ 		}
/* 000558 */ 		var env_name = float_instance.float_type;
/* 000559 */ 		var env_options_str = '[h!]';
/* 000560 */ 		var centering = self.float_use_centering;
/* 000562 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000563 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000563 */ 		}
/* 000564 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000565 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000565 */ 		}
/* 000566 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000567 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000567 */ 		}
/* 000568 */ 		else {
/* 000569 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000569 */ 		}
/* 000571 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000572 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000572 */ 		}
/* 000573 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000574 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000574 */ 		}
/* 000575 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000576 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000576 */ 		}
/* 000578 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000578 */ 	});},
/* 000586 */ 	graphics_raster_magnification: 1,
/* 000587 */ 	graphics_vector_magnification: 1,
/* 000589 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000589 */ 		if (arguments.length) {
/* 000589 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 					switch (__attrib0__) {
/* 000589 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 		}
/* 000589 */ 		else {
/* 000589 */ 		}
/* 000592 */ 		var __left0__ = (function () {
/* 000592 */ 			var __accu0__ = self;
/* 000592 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000592 */ 		}) ();
/* 000592 */ 		var src_url = __left0__ [0];
/* 000592 */ 		var incloptions = __left0__ [1];
/* 000594 */ 		var opts = '';
/* 000595 */ 		if (__t__ (incloptions !== null)) {
/* 000596 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000596 */ 		}
/* 000598 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000598 */ 	});},
/* 000600 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000600 */ 		if (arguments.length) {
/* 000600 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000600 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000600 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000600 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000600 */ 					switch (__attrib0__) {
/* 000600 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 					}
/* 000600 */ 				}
/* 000600 */ 			}
/* 000600 */ 		}
/* 000600 */ 		else {
/* 000600 */ 		}
/* 000602 */ 		var whoptc = null;
/* 000603 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000605 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000605 */ 			var width_pt = __left0__ [0];
/* 000605 */ 			var height_pt = __left0__ [1];
/* 000607 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000608 */ 				if (__t__ (width_pt !== null)) {
/* 000609 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000609 */ 				}
/* 000610 */ 				if (__t__ (height_pt !== null)) {
/* 000611 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000611 */ 				}
/* 000611 */ 			}
/* 000612 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000613 */ 				if (__t__ (width_pt !== null)) {
/* 000614 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000614 */ 				}
/* 000615 */ 				if (__t__ (height_pt !== null)) {
/* 000616 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000616 */ 				}
/* 000616 */ 			}
/* 000618 */ 			var whoptc = '';
/* 000619 */ 			if (__t__ (width_pt !== null)) {
/* 000620 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000620 */ 			}
/* 000621 */ 			if (__t__ (height_pt !== null)) {
/* 000622 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000622 */ 			}
/* 000622 */ 		}
/* 000624 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000624 */ 	});},
/* 000627 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000627 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000627 */ 			var target_id = null;
/* 000627 */ 		};
/* 000627 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000627 */ 			var render_cell_nodelist_contents_fn = null;
/* 000627 */ 		};
/* 000627 */ 		if (arguments.length) {
/* 000627 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000627 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000627 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000627 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000627 */ 					switch (__attrib0__) {
/* 000627 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 					}
/* 000627 */ 				}
/* 000627 */ 			}
/* 000627 */ 		}
/* 000627 */ 		else {
/* 000627 */ 		}
/* 000630 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000631 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000631 */ 				if (arguments.length) {
/* 000631 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000631 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000631 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000631 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000631 */ 							switch (__attrib0__) {
/* 000631 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000631 */ 							}
/* 000631 */ 						}
/* 000631 */ 					}
/* 000631 */ 				}
/* 000631 */ 				else {
/* 000631 */ 				}
/* 000632 */ 				return (function () {
/* 000632 */ 					var __accu0__ = self;
/* 000632 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000632 */ 				}) ();
/* 000632 */ 			});
/* 000632 */ 		}
/* 000634 */ 		var stab_contents = '';
/* 000636 */ 		var cell_spans_styles = '';
/* 000637 */ 		var cell_hlines = [];
/* 000638 */ 		var cell_vlines = [];
/* 000640 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000640 */ 		var tabheight = __left0__ [0];
/* 000640 */ 		var tabwidth = __left0__ [1];
/* 000642 */ 		var __iterable0__ = cells_model.grid_data;
/* 000642 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000642 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000643 */ 			var stab_rowitems = [];
/* 000645 */ 			var __iterable1__ = row;
/* 000645 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000645 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000646 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000649 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000650 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000657 */ 					var thiscellspanopts = [];
/* 000658 */ 					var rowj = cell.placement.row_range.start;
/* 000659 */ 					var rowjend = cell.placement.row_range.end;
/* 000660 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000661 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000662 */ 						(function () {
/* 000662 */ 							var __accu0__ = thiscellspanopts;
/* 000662 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000662 */ 						}) ();
/* 000662 */ 					}
/* 000664 */ 					var colj = cell.placement.col_range.start;
/* 000665 */ 					var coljend = cell.placement.col_range.end;
/* 000666 */ 					var numcols = __sub__ (coljend, colj);
/* 000667 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000668 */ 						(function () {
/* 000668 */ 							var __accu0__ = thiscellspanopts;
/* 000668 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000668 */ 						}) ();
/* 000668 */ 					}
/* 000670 */ 					var thiscellstyles = 'm';
/* 000671 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000672 */ 						var thiscellstyles = 'l';
/* 000672 */ 					}
/* 000673 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000674 */ 						var thiscellstyles = 'c';
/* 000674 */ 					}
/* 000675 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000676 */ 						var thiscellstyles = 'r';
/* 000676 */ 					}
/* 000678 */ 					var bgcol = null;
/* 000679 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000680 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000680 */ 					}
/* 000681 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000682 */ 						var bgcol = 'flmTabCellColorRed';
/* 000682 */ 					}
/* 000683 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000684 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000684 */ 					}
/* 000685 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000686 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000686 */ 					}
/* 000688 */ 					if (__t__ (bgcol)) {
/* 000689 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000689 */ 					}
/* 000691 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000692 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000692 */ 					}
/* 000694 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000695 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000696 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000696 */ 						}
/* 000697 */ 						else {
/* 000698 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000698 */ 						}
/* 000701 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000702 */ 							(function () {
/* 000702 */ 								var __accu0__ = cell_hlines;
/* 000702 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000702 */ 							}) ();
/* 000702 */ 						}
/* 000702 */ 					}
/* 000704 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000705 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000706 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000706 */ 						}
/* 000707 */ 						else {
/* 000708 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000708 */ 						}
/* 000710 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000711 */ 							(function () {
/* 000711 */ 								var __accu0__ = cell_vlines;
/* 000711 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000711 */ 							}) ();
/* 000711 */ 						}
/* 000712 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000713 */ 							(function () {
/* 000713 */ 								var __accu0__ = cell_vlines;
/* 000713 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000713 */ 							}) ();
/* 000713 */ 						}
/* 000713 */ 					}
/* 000715 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000718 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000718 */ 							var __accu0__ = ',';
/* 000718 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000718 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000718 */ 					}
/* 000718 */ 				}
/* 000721 */ 				else {
/* 000723 */ 					var cell_content = '';
/* 000723 */ 				}
/* 000725 */ 				(function () {
/* 000725 */ 					var __accu0__ = stab_rowitems;
/* 000725 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000725 */ 				}) ();
/* 000725 */ 			}
/* 000727 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000727 */ 				var __accu0__ = '&';
/* 000727 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000727 */ 			}) (), '\\\\'), '\n'));
/* 000727 */ 		}
/* 000738 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000738 */ 			var __accu0__ = '';
/* 000738 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000738 */ 				var __accu1__ = [];
/* 000738 */ 				var __iterable0__ = cell_hlines;
/* 000738 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000739 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000739 */ 					var rownrng = __left0__ [0];
/* 000739 */ 					var colnrng = __left0__ [1];
/* 000739 */ 					var lsty = __left0__ [2];
/* 000739 */ 					(function () {
/* 000739 */ 						var __accu2__ = __accu1__;
/* 000739 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000739 */ 					}) ();
/* 000739 */ 				}
/* 000739 */ 				return __accu1__;
/* 000739 */ 			}) ());
/* 000740 */ 		}) ()), (function () {
/* 000740 */ 			var __accu0__ = '';
/* 000740 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000740 */ 				var __accu1__ = [];
/* 000740 */ 				var __iterable0__ = cell_vlines;
/* 000740 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000741 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000741 */ 					var rownrng = __left0__ [0];
/* 000741 */ 					var colnrng = __left0__ [1];
/* 000741 */ 					var lsty = __left0__ [2];
/* 000741 */ 					(function () {
/* 000741 */ 						var __accu2__ = __accu1__;
/* 000741 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000741 */ 					}) ();
/* 000741 */ 				}
/* 000741 */ 				return __accu1__;
/* 000741 */ 			}) ());
/* 000741 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000746 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000747 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000748 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000749 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000751 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000762 */ 		var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 000764 */ 		return s;
/* 000764 */ 	});},
/* 000766 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000766 */ });
/* 000771 */ export var _rx_delayed_markers = (function () {
/* 000771 */ 	var __accu0__ = re;
/* 000771 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000771 */ }) ();
/* 000780 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n';
/* 000859 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000859 */ 	__module__: __name__,
/* 000860 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000863 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000863 */ 		if (arguments.length) {
/* 000863 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000863 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000863 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000863 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000863 */ 					switch (__attrib0__) {
/* 000863 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000863 */ 					}
/* 000863 */ 				}
/* 000863 */ 			}
/* 000863 */ 		}
/* 000863 */ 		else {
/* 000863 */ 		}
/* 000864 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000864 */ 	};},
/* 000868 */ 	format_name: 'latex'
/* 000868 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map