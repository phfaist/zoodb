/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:43
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
/* 000053 */ 	latex_semantic_block_environments: dict ({'defterm': 'flmDefterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike', 'quotation': 'quotation'}),
/* 000065 */ 	latex_lines_environments: dict ({'quote': 'quotation'}),
/* 000070 */ 	latex_macro_no_extra_space_after_dot: '\\@',
/* 000072 */ 	use_phantom_section: true,
/* 000073 */ 	latex_label_prefix: 'x:',
/* 000075 */ 	debug_disable_pin_labels: false,
/* 000077 */ 	use_flm_macro_for_pinning_labels: true,
/* 000081 */ 	latex_wrap_verbatim_macro: null,
/* 000083 */ 	use_endnote_latex_command: null,
/* 000084 */ 	use_citation_latex_command: null,
/* 000089 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000089 */ 		var kwargs = dict ();
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 				delete kwargs.__kwargtrans__;
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000090 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000093 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000093 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000093 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000093 */ 		}) (), unknown_char_policy: 'keep'}));
/* 000093 */ 	});},
/* 000099 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000100 */ 		return (function () {
/* 000100 */ 			var __accu0__ = self.latex_encoder;
/* 000100 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000100 */ 		}) ();
/* 000100 */ 	});},
/* 000103 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000105 */ 		var content = value;
/* 000107 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
/* 000107 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000107 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000109 */ 			var txtfmtcmd = (function () {
/* 000109 */ 				var __accu0__ = self.text_format_cmds;
/* 000109 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000109 */ 			}) ();
/* 000110 */ 			if (__t__ (txtfmtcmd)) {
/* 000111 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000111 */ 			}
/* 000111 */ 		}
/* 000113 */ 		return content;
/* 000113 */ 	});},
/* 000116 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000120 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
/* 000120 */ 			var __accu0__ = ',';
/* 000120 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000120 */ 				var __accu1__ = [];
/* 000120 */ 				var __iterable0__ = annotations;
/* 000120 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000120 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000120 */ 					(function () {
/* 000120 */ 						var __accu2__ = __accu1__;
/* 000120 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000120 */ 							var __accu3__ = a;
/* 000120 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000120 */ 						}) ());
/* 000120 */ 					}) ();
/* 000120 */ 				}
/* 000120 */ 				return __accu1__;
/* 000120 */ 			}) ());
/* 000121 */ 		}) ()), '\n'), (function () {
/* 000121 */ 			var __accu0__ = items_content;
/* 000121 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000121 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000121 */ 	});},
/* 000126 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000126 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000126 */ 			var insert_phantom_section = true;
/* 000126 */ 		};
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000128 */ 			return '';
/* 000128 */ 		}
/* 000129 */ 		var s = '';
/* 000130 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000131 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000131 */ 		}
/* 000132 */ 		if (__t__ (self.use_flm_macro_for_pinning_labels)) {
/* 000133 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\flmPinLabelHereWithDisplayText{', self.latex_label_prefix), target_id), '}{'), display_latex), '}'));
/* 000133 */ 		}
/* 000137 */ 		else {
/* 000139 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000140 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000140 */ 		}
/* 000141 */ 		return s;
/* 000141 */ 	});},
/* 000145 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000148 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000148 */ 			var __accu0__ = self;
/* 000148 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000148 */ 		}) ()), '\n\n');
/* 000148 */ 	});},
/* 000152 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = self;
/* 000153 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000153 */ 				var __accu1__ = [];
/* 000154 */ 				var __iterable0__ = nodelist;
/* 000154 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 					(function () {
/* 000154 */ 						var __accu2__ = __accu1__;
/* 000154 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000154 */ 							var __accu3__ = self;
/* 000154 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000154 */ 						}) ());
/* 000154 */ 					}) ();
/* 000154 */ 				}
/* 000154 */ 				return __accu1__;
/* 000154 */ 			}) (), render_context);
/* 000154 */ 		}) ();
/* 000154 */ 	});},
/* 000158 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000168 */ 		var result = '';
/* 000169 */ 		var __iterable0__ = content_list;
/* 000169 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000169 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000170 */ 			var result = (function () {
/* 000170 */ 				var __accu0__ = self;
/* 000170 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000170 */ 			}) ();
/* 000170 */ 		}
/* 000171 */ 		return result;
/* 000171 */ 	});},
/* 000173 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000175 */ 			var __left0__ = (function () {
/* 000175 */ 				var __accu0__ = a;
/* 000175 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000175 */ 			}) ();
/* 000175 */ 			var _ = __left0__ [0];
/* 000175 */ 			var last_line = __left0__ [1];
/* 000175 */ 		}
/* 000176 */ 		else {
/* 000177 */ 			var last_line = a;
/* 000177 */ 		}
/* 000178 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000180 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000180 */ 		}
/* 000181 */ 		if (__t__ ((function () {
/* 000181 */ 			var __accu0__ = re;
/* 000181 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000181 */ 		}) () !== null)) {
/* 000183 */ 			return __add__ (__add__ (a, ' '), b);
/* 000183 */ 		}
/* 000184 */ 		return __add__ (a, b);
/* 000184 */ 	});},
/* 000186 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000194 */ 		return __add__ ((function () {
/* 000194 */ 			var __accu0__ = '\n\n';
/* 000194 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000194 */ 				var __accu1__ = [];
/* 000194 */ 				var __iterable0__ = content_list;
/* 000194 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 					(function () {
/* 000194 */ 						var __accu2__ = __accu1__;
/* 000194 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000194 */ 							var __accu3__ = c;
/* 000194 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000194 */ 						}) ());
/* 000194 */ 					}) ();
/* 000194 */ 				}
/* 000194 */ 				return __accu1__;
/* 000194 */ 			}) ());
/* 000194 */ 		}) (), '\n');
/* 000194 */ 	});},
/* 000199 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000200 */ 		return (function () {
/* 000200 */ 			var __accu0__ = self;
/* 000200 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000200 */ 		}) ();
/* 000200 */ 	});},
/* 000202 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000204 */ 		return __add__ (__add__ ('% ', (function () {
/* 000204 */ 			var __accu0__ = debug_str;
/* 000204 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000204 */ 		}) ()), '\n');
/* 000204 */ 	});},
/* 000206 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000206 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 			var annotations = null;
/* 000206 */ 		};
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000207 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000208 */ 			var annotations = [];
/* 000208 */ 		}
/* 000209 */ 		else {
/* 000210 */ 			var annotations = (function () {
/* 000210 */ 				var __accu0__ = [];
/* 000210 */ 				var __iterable0__ = annotations;
/* 000210 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000210 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000210 */ 					(function () {
/* 000210 */ 						var __accu1__ = __accu0__;
/* 000210 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000210 */ 							var __accu2__ = a;
/* 000210 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000210 */ 						}) ());
/* 000210 */ 					}) ();
/* 000210 */ 				}
/* 000210 */ 				return __accu0__;
/* 000210 */ 			}) ();
/* 000210 */ 		}
/* 000212 */ 		return '% {}\n'.format ((function () {
/* 000212 */ 			var __accu0__ = ' ';
/* 000212 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000212 */ 		}) ());
/* 000212 */ 	});},
/* 000214 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000214 */ 		var is_block_level = false;
/* 000214 */ 		var annotations = null;
/* 000214 */ 		var target_id = null;
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000216 */ 		if (__t__ (__in__ ('verbatimcode', annotations))) {
/* 000217 */ 			return __add__ (__add__ (__add__ ('\\begin{verbatim}', '\n'), value), '\\end{verbatim}');
/* 000217 */ 		}
/* 000220 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000221 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000221 */ 			}) ()), '}');
/* 000221 */ 		}
/* 000222 */ 		return (function () {
/* 000222 */ 			var __accu0__ = self;
/* 000222 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000222 */ 		}) ();
/* 000222 */ 	});},
/* 000224 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000224 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 			var environmentname = null;
/* 000224 */ 		};
/* 000224 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 			var target_id = null;
/* 000224 */ 		};
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000232 */ 		var __left0__ = delimiters;
/* 000232 */ 		var begin_delim = __left0__ [0];
/* 000232 */ 		var end_delim = __left0__ [1];
/* 000233 */ 		if (__t__ (environmentname)) {
/* 000234 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000235 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000235 */ 		}
/* 000238 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000238 */ 			var __accu0__ = self;
/* 000238 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000238 */ 		}) ()), end_delim);
/* 000238 */ 	});},
/* 000241 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000245 */ 		var content = (function () {
/* 000245 */ 			var __accu0__ = self;
/* 000245 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000245 */ 		}) ();
/* 000251 */ 		return (function () {
/* 000251 */ 			var __accu0__ = self;
/* 000251 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000251 */ 		}) ();
/* 000251 */ 	});},
/* 000254 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000254 */ 		var annotations = null;
/* 000254 */ 		var target_id = null;
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000257 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000258 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000258 */ 		}
/* 000261 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000262 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000262 */ 		}
/* 000266 */ 		return content;
/* 000266 */ 	});},
/* 000269 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000269 */ 		var annotations = null;
/* 000269 */ 		var target_id = null;
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000272 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000273 */ 			var annotations = [];
/* 000273 */ 		}
/* 000274 */ 		else {
/* 000275 */ 			var annotations = (function () {
/* 000275 */ 				var __accu0__ = [];
/* 000275 */ 				var __iterable0__ = annotations;
/* 000275 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 					(function () {
/* 000275 */ 						var __accu1__ = __accu0__;
/* 000275 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000275 */ 							var __accu2__ = a;
/* 000275 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000275 */ 						}) ());
/* 000275 */ 					}) ();
/* 000275 */ 				}
/* 000275 */ 				return __accu0__;
/* 000275 */ 			}) ();
/* 000275 */ 		}
/* 000279 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000279 */ 			var __accu0__ = ',';
/* 000279 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000279 */ 		}) ()), ' ---\n');
/* 000280 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000280 */ 			var __accu0__ = ',';
/* 000280 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000280 */ 		}) ()), ' ---\n');
/* 000282 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000283 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000284 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000285 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000285 */ 		}
/* 000287 */ 		var lblcmd = '';
/* 000288 */ 		if (__t__ (target_id)) {
/* 000289 */ 			var lblcmd = (function () {
/* 000289 */ 				var __accu0__ = self;
/* 000289 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000289 */ 			}) ();
/* 000289 */ 		}
/* 000294 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000294 */ 			var __accu0__ = self;
/* 000294 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000294 */ 		}) ());
/* 000294 */ 	});},
/* 000299 */ 	get render_lines () {return __get__ (this, function (self, iter_lines_nodelists, render_context) {
/* 000299 */ 		var role = null;
/* 000299 */ 		var annotations = null;
/* 000299 */ 		var target_id = null;
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'iter_lines_nodelists': var iter_lines_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000308 */ 		var s_lines = [];
/* 000310 */ 		var __iterable0__ = iter_lines_nodelists;
/* 000310 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 			var line_content_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000312 */ 			var line_content = (function () {
/* 000312 */ 				var __accu0__ = self;
/* 000312 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000312 */ 			}) ();
/* 000318 */ 			(function () {
/* 000318 */ 				var __accu0__ = s_lines;
/* 000318 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (line_content, '%\n'), '\\\n'));
/* 000318 */ 			}) ();
/* 000318 */ 		}
/* 000322 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000323 */ 			var annotations = [];
/* 000323 */ 		}
/* 000324 */ 		else {
/* 000325 */ 			var annotations = (function () {
/* 000325 */ 				var __accu0__ = [];
/* 000325 */ 				var __iterable0__ = annotations;
/* 000325 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000325 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 					(function () {
/* 000325 */ 						var __accu1__ = __accu0__;
/* 000325 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000325 */ 							var __accu2__ = a;
/* 000325 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000325 */ 						}) ());
/* 000325 */ 					}) ();
/* 000325 */ 				}
/* 000325 */ 				return __accu0__;
/* 000325 */ 			}) ();
/* 000325 */ 		}
/* 000327 */ 		var ltx_environment = 'flmLines';
/* 000328 */ 		if (__t__ (__t__ (role !== null) && __in__ (role, self.latex_lines_environments))) {
/* 000329 */ 			var ltx_environment = __getitem__ (self.latex_lines_environments, role);
/* 000329 */ 		}
/* 000331 */ 		return (function () {
/* 000331 */ 			var __accu0__ = self;
/* 000334 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, annotations, (function () {
/* 000334 */ 				var __accu1__ = self;
/* 000334 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000334 */ 			}) (), render_context);
/* 000334 */ 		}) ();
/* 000334 */ 	});},
/* 000342 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000342 */ 		var target_id_generator = null;
/* 000342 */ 		var annotations = null;
/* 000342 */ 		var nested_depth = null;
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000353 */ 		var s_items = [];
/* 000355 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000355 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000355 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000355 */ 			var j = __left0__ [0];
/* 000355 */ 			var item_content_nodelist = __left0__ [1];
/* 000357 */ 			var use_block_level = true;
/* 000358 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000361 */ 				var use_block_level = false;
/* 000361 */ 			}
/* 000363 */ 			// pass;
/* 000367 */ 			// pass;
/* 000371 */ 			var item_content = (function () {
/* 000371 */ 				var __accu0__ = self;
/* 000371 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000371 */ 			}) ();
/* 000377 */ 			var enumno = __add__ (1, j);
/* 000379 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000380 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000381 */ 				var tag_content = (function () {
/* 000381 */ 					var __accu0__ = self;
/* 000381 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000381 */ 				}) ();
/* 000381 */ 			}
/* 000382 */ 			else {
/* 000383 */ 				var tag_content = (function () {
/* 000383 */ 					var __accu0__ = self;
/* 000383 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000383 */ 				}) ();
/* 000383 */ 			}
/* 000389 */ 			var itemlabel = '';
/* 000390 */ 			if (__t__ (target_id_generator !== null)) {
/* 000391 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000392 */ 				if (__t__ (this_target_id !== null)) {
/* 000393 */ 					var itemlabel = (function () {
/* 000393 */ 						var __accu0__ = self;
/* 000393 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000393 */ 					}) ();
/* 000393 */ 				}
/* 000393 */ 			}
/* 000396 */ 			(function () {
/* 000396 */ 				var __accu0__ = s_items;
/* 000396 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000396 */ 			}) ();
/* 000396 */ 		}
/* 000402 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000403 */ 			var annotations = [];
/* 000403 */ 		}
/* 000404 */ 		else {
/* 000405 */ 			var annotations = (function () {
/* 000405 */ 				var __accu0__ = [];
/* 000405 */ 				var __iterable0__ = annotations;
/* 000405 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000405 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000405 */ 					(function () {
/* 000405 */ 						var __accu1__ = __accu0__;
/* 000405 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000405 */ 							var __accu2__ = a;
/* 000405 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000405 */ 						}) ());
/* 000405 */ 					}) ();
/* 000405 */ 				}
/* 000405 */ 				return __accu0__;
/* 000405 */ 			}) ();
/* 000405 */ 		}
/* 000407 */ 		var ltx_environment = 'itemize';
/* 000409 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000412 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000412 */ 		}
/* 000414 */ 		return (function () {
/* 000414 */ 			var __accu0__ = self;
/* 000417 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000417 */ 				var __accu1__ = self;
/* 000417 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000417 */ 			}) (), render_context);
/* 000417 */ 		}) ();
/* 000417 */ 	});},
/* 000422 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000422 */ 		var heading_level = 1;
/* 000422 */ 		var inline_heading = false;
/* 000422 */ 		var target_id = null;
/* 000422 */ 		var annotations = null;
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000429 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000432 */ 			var __except0__ = __call__ (ValueError, null, "Heading level ‘{}’ undefined for latex rendering, expected one of {}.\nPlease make sure the corresponding heading level is set to a latex command name in the latex fragment renderer's configuration (flm: renderer: latex: heading_commands_by_level: <LEVEL>: <command-name>)".format (heading_level, __call__ (list, null, (function () {
/* 000432 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000432 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000432 */ 			}) ())));
/* 000432 */ 			__except0__.__cause__ = null;
/* 000432 */ 			throw __except0__;
/* 000432 */ 		}
/* 000438 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000440 */ 		var title_content = (function () {
/* 000440 */ 			var __accu0__ = self;
/* 000440 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000440 */ 		}) ();
/* 000442 */ 		var labelcmd = '';
/* 000443 */ 		if (__t__ (target_id)) {
/* 000444 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000444 */ 		}
/* 000446 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000446 */ 	});},
/* 000451 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000451 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000451 */ 			var annotations = null;
/* 000451 */ 		};
/* 000451 */ 		if (arguments.length) {
/* 000451 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000451 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000451 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000451 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000451 */ 					switch (__attrib0__) {
/* 000451 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000451 */ 					}
/* 000451 */ 				}
/* 000451 */ 			}
/* 000451 */ 		}
/* 000451 */ 		else {
/* 000451 */ 		}
/* 000453 */ 		var display_content = (function () {
/* 000453 */ 			var __accu0__ = self;
/* 000453 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000453 */ 		}) ();
/* 000459 */ 		var annotations = __t__ (annotations) || [];
/* 000461 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000462 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000462 */ 		}
/* 000465 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000466 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000466 */ 		}
/* 000470 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000471 */ 			return (function () {
/* 000471 */ 				var __accu0__ = self;
/* 000471 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000475 */ 		return (function () {
/* 000475 */ 			var __accu0__ = self;
/* 000475 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000475 */ 		}) ();
/* 000475 */ 	});},
/* 000480 */ 	debug_disable_link_hyperref: false,
/* 000482 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000482 */ 		if (arguments.length) {
/* 000482 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 					switch (__attrib0__) {
/* 000482 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 			}
/* 000482 */ 		}
/* 000482 */ 		else {
/* 000482 */ 		}
/* 000483 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000484 */ 			return display_content;
/* 000484 */ 		}
/* 000485 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000485 */ 	});},
/* 000490 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000490 */ 		if (arguments.length) {
/* 000490 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000490 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000490 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000490 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000490 */ 					switch (__attrib0__) {
/* 000490 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 					}
/* 000490 */ 				}
/* 000490 */ 			}
/* 000490 */ 		}
/* 000490 */ 		else {
/* 000490 */ 		}
/* 000491 */ 		var escaped_url = (function () {
/* 000491 */ 			var __accu0__ = re;
/* 000491 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
/* 000491 */ 				if (arguments.length) {
/* 000491 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 							switch (__attrib0__) {
/* 000491 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							}
/* 000491 */ 						}
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 				else {
/* 000491 */ 				}
/* 000491 */ 				return __add__ ('\\', (function () {
/* 000491 */ 					var __accu1__ = m;
/* 000491 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000491 */ 				}) ());
/* 000491 */ 			}), href);
/* 000491 */ 		}) ();
/* 000492 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}%\\n');
/* 000492 */ 	});},
/* 000494 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000495 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000495 */ 	});},
/* 000497 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000498 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000498 */ 	});},
/* 000500 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000500 */ 		if (arguments.length) {
/* 000500 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 					switch (__attrib0__) {
/* 000500 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 			}
/* 000500 */ 		}
/* 000500 */ 		else {
/* 000500 */ 		}
/* 000501 */ 		return (function () {
/* 000501 */ 			var __accu0__ = _rx_delayed_markers;
/* 000501 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000501 */ 				if (arguments.length) {
/* 000501 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000501 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000501 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000501 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000501 */ 							switch (__attrib0__) {
/* 000501 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000501 */ 							}
/* 000501 */ 						}
/* 000501 */ 					}
/* 000501 */ 				}
/* 000501 */ 				else {
/* 000501 */ 				}
/* 000502 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000502 */ 					var __accu1__ = m;
/* 000502 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000502 */ 				}) ()));
/* 000502 */ 			}), content);
/* 000502 */ 		}) ();
/* 000502 */ 	});},
/* 000509 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000527 */ 	float_use_centering: '\\centering{}',
/* 000528 */ 	float_caption_join: ': ',
/* 000529 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000530 */ 	float_latex_after_caption: '}',
/* 000532 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000535 */ 		var has_number = false;
/* 000536 */ 		var has_caption = false;
/* 000538 */ 		var full_figcaption_rendered_list = [];
/* 000539 */ 		var float_designator = null;
/* 000540 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000541 */ 			var has_number = true;
/* 000544 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000544 */ 				var __accu0__ = self;
/* 000544 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000549 */ 			}) (), '~'), (function () {
/* 000549 */ 				var __accu0__ = self;
/* 000549 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000549 */ 			}) ());
/* 000549 */ 		}
/* 000554 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000558 */ 			var float_designator = (function () {
/* 000558 */ 				var __accu0__ = self;
/* 000558 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000558 */ 			}) ();
/* 000558 */ 		}
/* 000561 */ 		else {
/* 000565 */ 			// pass;
/* 000565 */ 		}
/* 000567 */ 		var labelcmd = '';
/* 000568 */ 		if (__t__ (float_designator !== null)) {
/* 000569 */ 			(function () {
/* 000569 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000569 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000569 */ 			}) ();
/* 000571 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000572 */ 				var labelcmd = (function () {
/* 000572 */ 					var __accu0__ = self;
/* 000572 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000572 */ 				}) ();
/* 000572 */ 			}
/* 000572 */ 		}
/* 000576 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000577 */ 			var has_caption = true;
/* 000581 */ 			(function () {
/* 000581 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000581 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000581 */ 			}) ();
/* 000585 */ 			(function () {
/* 000585 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000586 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000586 */ 					var __accu1__ = self;
/* 000586 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000586 */ 				}) ());
/* 000586 */ 			}) ();
/* 000586 */ 		}
/* 000592 */ 		var rendered_float_caption = null;
/* 000593 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000596 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000596 */ 				var __accu0__ = self;
/* 000598 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000598 */ 					var __accu1__ = self;
/* 000598 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000598 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000598 */ 			}) ()), self.float_latex_after_caption);
/* 000598 */ 		}
/* 000605 */ 		var float_content_block_content = (function () {
/* 000605 */ 			var __accu0__ = self;
/* 000605 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000605 */ 		}) ();
/* 000611 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000612 */ 			var float_content_with_caption = (function () {
/* 000612 */ 				var __accu0__ = self;
/* 000612 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000612 */ 			}) ();
/* 000612 */ 		}
/* 000616 */ 		else {
/* 000617 */ 			var float_content_with_caption = float_content_block_content;
/* 000617 */ 		}
/* 000619 */ 		var env_name = float_instance.float_type;
/* 000620 */ 		var env_options_str = '[h!]';
/* 000621 */ 		var centering = self.float_use_centering;
/* 000623 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000624 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000624 */ 		}
/* 000625 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000626 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000626 */ 		}
/* 000627 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000628 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000628 */ 		}
/* 000629 */ 		else {
/* 000630 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000630 */ 		}
/* 000632 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000633 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000633 */ 		}
/* 000634 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000635 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000635 */ 		}
/* 000636 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000637 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000637 */ 		}
/* 000639 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000639 */ 	});},
/* 000647 */ 	graphics_raster_magnification: 1,
/* 000648 */ 	graphics_vector_magnification: 1,
/* 000650 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000650 */ 		if (arguments.length) {
/* 000650 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000650 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000650 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000650 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000650 */ 					switch (__attrib0__) {
/* 000650 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 					}
/* 000650 */ 				}
/* 000650 */ 			}
/* 000650 */ 		}
/* 000650 */ 		else {
/* 000650 */ 		}
/* 000653 */ 		var __left0__ = (function () {
/* 000653 */ 			var __accu0__ = self;
/* 000653 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000653 */ 		}) ();
/* 000653 */ 		var src_url = __left0__ [0];
/* 000653 */ 		var incloptions = __left0__ [1];
/* 000655 */ 		var opts = '';
/* 000656 */ 		if (__t__ (incloptions !== null)) {
/* 000657 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000657 */ 		}
/* 000659 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000659 */ 	});},
/* 000661 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000661 */ 		if (arguments.length) {
/* 000661 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000661 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000661 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000661 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000661 */ 					switch (__attrib0__) {
/* 000661 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 					}
/* 000661 */ 				}
/* 000661 */ 			}
/* 000661 */ 		}
/* 000661 */ 		else {
/* 000661 */ 		}
/* 000663 */ 		var whoptc = null;
/* 000664 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000666 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000666 */ 			var width_pt = __left0__ [0];
/* 000666 */ 			var height_pt = __left0__ [1];
/* 000668 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000669 */ 				if (__t__ (width_pt !== null)) {
/* 000670 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000670 */ 				}
/* 000671 */ 				if (__t__ (height_pt !== null)) {
/* 000672 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000672 */ 				}
/* 000672 */ 			}
/* 000673 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000674 */ 				if (__t__ (width_pt !== null)) {
/* 000675 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000675 */ 				}
/* 000676 */ 				if (__t__ (height_pt !== null)) {
/* 000677 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000677 */ 				}
/* 000677 */ 			}
/* 000679 */ 			var whoptc = '';
/* 000680 */ 			if (__t__ (width_pt !== null)) {
/* 000681 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000681 */ 			}
/* 000682 */ 			if (__t__ (height_pt !== null)) {
/* 000683 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000683 */ 			}
/* 000683 */ 		}
/* 000685 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000685 */ 	});},
/* 000688 */ 	cells_max_width_latexdim: '0.96\\linewidth',
/* 000689 */ 	cells_render_method: 'fit_width_test',
/* 000691 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000691 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000691 */ 			var target_id = null;
/* 000691 */ 		};
/* 000691 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000691 */ 			var render_cell_nodelist_contents_fn = null;
/* 000691 */ 		};
/* 000691 */ 		if (arguments.length) {
/* 000691 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000691 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000691 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000691 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000691 */ 					switch (__attrib0__) {
/* 000691 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 					}
/* 000691 */ 				}
/* 000691 */ 			}
/* 000691 */ 		}
/* 000691 */ 		else {
/* 000691 */ 		}
/* 000694 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000695 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000695 */ 				if (arguments.length) {
/* 000695 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000695 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000695 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000695 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000695 */ 							switch (__attrib0__) {
/* 000695 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 							}
/* 000695 */ 						}
/* 000695 */ 					}
/* 000695 */ 				}
/* 000695 */ 				else {
/* 000695 */ 				}
/* 000696 */ 				return (function () {
/* 000696 */ 					var __accu0__ = self;
/* 000696 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000696 */ 				}) ();
/* 000696 */ 			});
/* 000696 */ 		}
/* 000698 */ 		var stab_contents = '';
/* 000700 */ 		var cell_spans_styles = '';
/* 000701 */ 		var cell_hlines = [];
/* 000702 */ 		var cell_vlines = [];
/* 000704 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000704 */ 		var tabheight = __left0__ [0];
/* 000704 */ 		var tabwidth = __left0__ [1];
/* 000706 */ 		var __iterable0__ = cells_model.grid_data;
/* 000706 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000706 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000707 */ 			var stab_rowitems = [];
/* 000709 */ 			var __iterable1__ = row;
/* 000709 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000709 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000710 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000713 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000714 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000721 */ 					var thiscellspanopts = [];
/* 000722 */ 					var rowj = cell.placement.row_range.start;
/* 000723 */ 					var rowjend = cell.placement.row_range.end;
/* 000724 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000725 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000726 */ 						(function () {
/* 000726 */ 							var __accu0__ = thiscellspanopts;
/* 000726 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000726 */ 						}) ();
/* 000726 */ 					}
/* 000728 */ 					var colj = cell.placement.col_range.start;
/* 000729 */ 					var coljend = cell.placement.col_range.end;
/* 000730 */ 					var numcols = __sub__ (coljend, colj);
/* 000731 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000732 */ 						(function () {
/* 000732 */ 							var __accu0__ = thiscellspanopts;
/* 000732 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000732 */ 						}) ();
/* 000732 */ 					}
/* 000734 */ 					var thiscellstyles = 'm';
/* 000735 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000736 */ 						var thiscellstyles = 'l';
/* 000736 */ 					}
/* 000737 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000738 */ 						var thiscellstyles = 'c';
/* 000738 */ 					}
/* 000739 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000740 */ 						var thiscellstyles = 'r';
/* 000740 */ 					}
/* 000742 */ 					var bgcol = null;
/* 000743 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000744 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000744 */ 					}
/* 000745 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000746 */ 						var bgcol = 'flmTabCellColorRed';
/* 000746 */ 					}
/* 000747 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000748 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000748 */ 					}
/* 000749 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000750 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000750 */ 					}
/* 000752 */ 					if (__t__ (bgcol)) {
/* 000753 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000753 */ 					}
/* 000755 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000756 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000756 */ 					}
/* 000758 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000759 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000760 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000760 */ 						}
/* 000761 */ 						else {
/* 000762 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000762 */ 						}
/* 000765 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000766 */ 							(function () {
/* 000766 */ 								var __accu0__ = cell_hlines;
/* 000766 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000766 */ 							}) ();
/* 000766 */ 						}
/* 000766 */ 					}
/* 000768 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000769 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000770 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000770 */ 						}
/* 000771 */ 						else {
/* 000772 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000772 */ 						}
/* 000774 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000775 */ 							(function () {
/* 000775 */ 								var __accu0__ = cell_vlines;
/* 000775 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000775 */ 							}) ();
/* 000775 */ 						}
/* 000776 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000777 */ 							(function () {
/* 000777 */ 								var __accu0__ = cell_vlines;
/* 000777 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000777 */ 							}) ();
/* 000777 */ 						}
/* 000777 */ 					}
/* 000779 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000782 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000782 */ 							var __accu0__ = ',';
/* 000782 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000782 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000782 */ 					}
/* 000782 */ 				}
/* 000785 */ 				else {
/* 000787 */ 					var cell_content = '';
/* 000787 */ 				}
/* 000789 */ 				(function () {
/* 000789 */ 					var __accu0__ = stab_rowitems;
/* 000789 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000789 */ 				}) ();
/* 000789 */ 			}
/* 000791 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000791 */ 				var __accu0__ = '&';
/* 000791 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000791 */ 			}) (), '\\\\'), '\n'));
/* 000791 */ 		}
/* 000793 */ 		var _typeset_table_contents = function (raw_args, colspec_one) {
/* 000793 */ 			if (typeof raw_args == 'undefined' || (raw_args != null && raw_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000793 */ 				var raw_args = null;
/* 000793 */ 			};
/* 000793 */ 			if (typeof colspec_one == 'undefined' || (colspec_one != null && colspec_one.hasOwnProperty ("__kwargtrans__"))) {;
/* 000793 */ 				var colspec_one = null;
/* 000793 */ 			};
/* 000793 */ 			if (arguments.length) {
/* 000793 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000793 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000793 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000793 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000793 */ 						switch (__attrib0__) {
/* 000793 */ 							case 'raw_args': var raw_args = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 							case 'colspec_one': var colspec_one = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 						}
/* 000793 */ 					}
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 			else {
/* 000793 */ 			}
/* 000794 */ 			if (__t__ (raw_args !== null)) {
/* 000795 */ 				var tblrargs = raw_args;
/* 000795 */ 			}
/* 000796 */ 			else {
/* 000797 */ 				var tblrargs = __add__ (__add__ ('colspec={', __mul__ (colspec_one, tabwidth)), '}');
/* 000797 */ 			}
/* 000802 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{tblr}{', tblrargs), ','), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000802 */ 				var __accu0__ = '';
/* 000802 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000802 */ 					var __accu1__ = [];
/* 000802 */ 					var __iterable0__ = cell_hlines;
/* 000802 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000803 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000803 */ 						var rownrng = __left0__ [0];
/* 000803 */ 						var colnrng = __left0__ [1];
/* 000803 */ 						var lsty = __left0__ [2];
/* 000803 */ 						(function () {
/* 000803 */ 							var __accu2__ = __accu1__;
/* 000803 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000803 */ 						}) ();
/* 000803 */ 					}
/* 000803 */ 					return __accu1__;
/* 000803 */ 				}) ());
/* 000804 */ 			}) ()), (function () {
/* 000804 */ 				var __accu0__ = '';
/* 000804 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000804 */ 					var __accu1__ = [];
/* 000804 */ 					var __iterable0__ = cell_vlines;
/* 000804 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000805 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000805 */ 						var rownrng = __left0__ [0];
/* 000805 */ 						var colnrng = __left0__ [1];
/* 000805 */ 						var lsty = __left0__ [2];
/* 000805 */ 						(function () {
/* 000805 */ 							var __accu2__ = __accu1__;
/* 000805 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000805 */ 						}) ();
/* 000805 */ 					}
/* 000805 */ 					return __accu1__;
/* 000805 */ 				}) ());
/* 000805 */ 			}) ()), '}%'), '\n'), '\\toprule'), '\n'), stab_contents), '\\bottomrule'), '\n'), '\\end{tblr}%'), '\n');
/* 000805 */ 		};
/* 000814 */ 		if (__t__ (__eq__ (self.cells_render_method, 'simple'))) {
/* 000817 */ 			var s = __add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\flmCellsEndCenter ');
/* 000820 */ 			return s;
/* 000820 */ 		}
/* 000822 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test'))) {
/* 000830 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\long\\def\\flmTempTypesetThisTable#1{%'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({raw_args: '#1'}))), '}%'), '\n');
/* 000834 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000846 */ 			var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 000847 */ 			return s;
/* 000847 */ 		}
/* 000849 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test_dupl'))) {
/* 000872 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\def\\flmTmpMaxW{\\dimexpr '), self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox\\bgroup'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\egroup'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'X[-1]'}))), '\\fi'), '\n'), '\\flmCellsEndCenter ');
/* 000876 */ 			return s;
/* 000876 */ 		}
/* 000878 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid cells_render_method: ', __call__ (repr, null, self.cells_render_method)));
/* 000878 */ 		__except0__.__cause__ = null;
/* 000878 */ 		throw __except0__;
/* 000878 */ 	});}
/* 000878 */ });
/* 000885 */ export var _rx_delayed_markers = (function () {
/* 000885 */ 	var __accu0__ = re;
/* 000885 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000885 */ }) ();
/* 000894 */ export var _latex_preamble_suggested_defs = '\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{amsmath}\n\\flmRequirePackage{amssymb}\n\n\\flmRequirePackage{graphicx}\n\\flmRequirePackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% lines\n\\providecommand\\flmLinesParSkip{1ex plus 0.3ex minus 0.2ex}\n\\ifdefined\\flmLines\\else\n\\newenvironment{flmLines}{%\n  \\par\\begingroup\n  \\parindent=0pt\\relax\n  \\parskip=\\flmLinesParSkip\\relax\n}{%\n  \\par\\endgroup\n}\n\\fi\n\n% for cells/tables\n\\flmRequirePackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n';
/* 000987 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000987 */ 	__module__: __name__,
/* 000988 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000991 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000991 */ 		if (arguments.length) {
/* 000991 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000991 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000991 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000991 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000991 */ 					switch (__attrib0__) {
/* 000991 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000991 */ 					}
/* 000991 */ 				}
/* 000991 */ 			}
/* 000991 */ 		}
/* 000991 */ 		else {
/* 000991 */ 		}
/* 000992 */ 		return dict ({'package_suggested_defs': _latex_preamble_suggested_defs, 'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000992 */ 	};},
/* 000997 */ 	format_name: 'latex'
/* 000997 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map