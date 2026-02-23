/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:27
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
/* 000006 */ export {FragmentRenderer, pyltxenc_lenc_get_builtin, UnicodeToLatexEncoder};
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
/* 000053 */ 	latex_semantic_block_environments: dict ({'defterm': 'flmDefterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike', 'quotation': 'quotation', 'quote': 'quote', 'address': 'flmAddress', 'blockquote': 'flmBlockquote'}),
/* 000069 */ 	latex_lines_environments: dict ({'quote': 'quote'}),
/* 000074 */ 	latex_macro_no_extra_space_after_dot: '\\@',
/* 000076 */ 	use_phantom_section: true,
/* 000077 */ 	latex_label_prefix: 'x:',
/* 000079 */ 	debug_disable_pin_labels: false,
/* 000081 */ 	use_flm_macro_for_pinning_labels: true,
/* 000085 */ 	latex_wrap_verbatim_macro: null,
/* 000087 */ 	use_endnote_latex_command: null,
/* 000088 */ 	use_citation_latex_command: null,
/* 000093 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000093 */ 		var kwargs = dict ();
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 				delete kwargs.__kwargtrans__;
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000094 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000097 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000097 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000097 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000097 */ 		}) (), unknown_char_policy: 'keep'}));
/* 000097 */ 	});},
/* 000103 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return (function () {
/* 000104 */ 			var __accu0__ = self.latex_encoder;
/* 000104 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000104 */ 		}) ();
/* 000104 */ 	});},
/* 000107 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000109 */ 		var content = value;
/* 000111 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
/* 000111 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000111 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000113 */ 			var txtfmtcmd = (function () {
/* 000113 */ 				var __accu0__ = self.text_format_cmds;
/* 000113 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000113 */ 			}) ();
/* 000114 */ 			if (__t__ (txtfmtcmd)) {
/* 000115 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000115 */ 			}
/* 000115 */ 		}
/* 000117 */ 		return content;
/* 000117 */ 	});},
/* 000120 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000124 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
/* 000124 */ 			var __accu0__ = ',';
/* 000124 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000124 */ 				var __accu1__ = [];
/* 000124 */ 				var __iterable0__ = annotations;
/* 000124 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000124 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000124 */ 					(function () {
/* 000124 */ 						var __accu2__ = __accu1__;
/* 000124 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000124 */ 							var __accu3__ = a;
/* 000124 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000124 */ 						}) ());
/* 000124 */ 					}) ();
/* 000124 */ 				}
/* 000124 */ 				return __accu1__;
/* 000124 */ 			}) ());
/* 000125 */ 		}) ()), '\n'), (function () {
/* 000125 */ 			var __accu0__ = items_content;
/* 000125 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000125 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000125 */ 	});},
/* 000130 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000130 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var insert_phantom_section = true;
/* 000130 */ 		};
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000131 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000132 */ 			return '';
/* 000132 */ 		}
/* 000133 */ 		var s = '';
/* 000134 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000135 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000135 */ 		}
/* 000136 */ 		if (__t__ (self.use_flm_macro_for_pinning_labels)) {
/* 000137 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\flmPinLabelHereWithDisplayText{', self.latex_label_prefix), target_id), '}{'), display_latex), '}'));
/* 000137 */ 		}
/* 000141 */ 		else {
/* 000143 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000144 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000144 */ 		}
/* 000145 */ 		return s;
/* 000145 */ 	});},
/* 000149 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000152 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000152 */ 		}) ()), '\n\n');
/* 000152 */ 	});},
/* 000156 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		return (function () {
/* 000157 */ 			var __accu0__ = self;
/* 000157 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000157 */ 				var __accu1__ = [];
/* 000158 */ 				var __iterable0__ = nodelist;
/* 000158 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 					(function () {
/* 000158 */ 						var __accu2__ = __accu1__;
/* 000158 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000158 */ 							var __accu3__ = self;
/* 000158 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000158 */ 						}) ());
/* 000158 */ 					}) ();
/* 000158 */ 				}
/* 000158 */ 				return __accu1__;
/* 000158 */ 			}) (), render_context);
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000162 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000172 */ 		var result = '';
/* 000173 */ 		var __iterable0__ = content_list;
/* 000173 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000173 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000174 */ 			var result = (function () {
/* 000174 */ 				var __accu0__ = self;
/* 000174 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000174 */ 			}) ();
/* 000174 */ 		}
/* 000175 */ 		return result;
/* 000175 */ 	});},
/* 000177 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000179 */ 			var __left0__ = (function () {
/* 000179 */ 				var __accu0__ = a;
/* 000179 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000179 */ 			}) ();
/* 000179 */ 			var _ = __left0__ [0];
/* 000179 */ 			var last_line = __left0__ [1];
/* 000179 */ 		}
/* 000180 */ 		else {
/* 000181 */ 			var last_line = a;
/* 000181 */ 		}
/* 000182 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000184 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000184 */ 		}
/* 000185 */ 		if (__t__ ((function () {
/* 000185 */ 			var __accu0__ = re;
/* 000185 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000185 */ 		}) () !== null)) {
/* 000187 */ 			return __add__ (__add__ (a, ' '), b);
/* 000187 */ 		}
/* 000188 */ 		return __add__ (a, b);
/* 000188 */ 	});},
/* 000190 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000198 */ 		return __add__ ((function () {
/* 000198 */ 			var __accu0__ = '\n\n';
/* 000198 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000198 */ 				var __accu1__ = [];
/* 000198 */ 				var __iterable0__ = content_list;
/* 000198 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 					(function () {
/* 000198 */ 						var __accu2__ = __accu1__;
/* 000198 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000198 */ 							var __accu3__ = c;
/* 000198 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000198 */ 						}) ());
/* 000198 */ 					}) ();
/* 000198 */ 				}
/* 000198 */ 				return __accu1__;
/* 000198 */ 			}) ());
/* 000198 */ 		}) (), '\n');
/* 000198 */ 	});},
/* 000203 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		return (function () {
/* 000204 */ 			var __accu0__ = self;
/* 000204 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000204 */ 		}) ();
/* 000204 */ 	});},
/* 000206 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000208 */ 		return __add__ (__add__ ('% ', (function () {
/* 000208 */ 			var __accu0__ = debug_str;
/* 000208 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000208 */ 		}) ()), '\n');
/* 000208 */ 	});},
/* 000210 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000210 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000210 */ 			var annotations = null;
/* 000210 */ 		};
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000212 */ 			var annotations = [];
/* 000212 */ 		}
/* 000213 */ 		else {
/* 000214 */ 			var annotations = (function () {
/* 000214 */ 				var __accu0__ = [];
/* 000214 */ 				var __iterable0__ = annotations;
/* 000214 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000214 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000214 */ 					(function () {
/* 000214 */ 						var __accu1__ = __accu0__;
/* 000214 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000214 */ 							var __accu2__ = a;
/* 000214 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000214 */ 						}) ());
/* 000214 */ 					}) ();
/* 000214 */ 				}
/* 000214 */ 				return __accu0__;
/* 000214 */ 			}) ();
/* 000214 */ 		}
/* 000216 */ 		return '% {}\n'.format ((function () {
/* 000216 */ 			var __accu0__ = ' ';
/* 000216 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000216 */ 		}) ());
/* 000216 */ 	});},
/* 000218 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000218 */ 		var is_block_level = false;
/* 000218 */ 		var annotations = null;
/* 000218 */ 		var target_id = null;
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000220 */ 		if (__t__ (__in__ ('verbatimcode', annotations))) {
/* 000221 */ 			return __add__ (__add__ (__add__ ('\\begin{verbatim}', '\n'), value), '\\end{verbatim}');
/* 000221 */ 		}
/* 000224 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000225 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000225 */ 			}) ()), '}');
/* 000225 */ 		}
/* 000226 */ 		return (function () {
/* 000226 */ 			var __accu0__ = self;
/* 000226 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000226 */ 		}) ();
/* 000226 */ 	});},
/* 000228 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000228 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000228 */ 			var environmentname = null;
/* 000228 */ 		};
/* 000228 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000228 */ 			var target_id = null;
/* 000228 */ 		};
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000236 */ 		var __left0__ = delimiters;
/* 000236 */ 		var begin_delim = __left0__ [0];
/* 000236 */ 		var end_delim = __left0__ [1];
/* 000237 */ 		if (__t__ (environmentname)) {
/* 000238 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000239 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000239 */ 		}
/* 000242 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000242 */ 			var __accu0__ = self;
/* 000242 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000242 */ 		}) ()), end_delim);
/* 000242 */ 	});},
/* 000245 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000249 */ 		var content = (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000249 */ 		}) ();
/* 000255 */ 		return (function () {
/* 000255 */ 			var __accu0__ = self;
/* 000255 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000255 */ 		}) ();
/* 000255 */ 	});},
/* 000258 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
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
/* 000261 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000262 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000262 */ 		}
/* 000265 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000266 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000266 */ 		}
/* 000270 */ 		return content;
/* 000270 */ 	});},
/* 000273 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000273 */ 		var annotations = null;
/* 000273 */ 		var target_id = null;
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000276 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000277 */ 			var annotations = [];
/* 000277 */ 		}
/* 000278 */ 		else {
/* 000279 */ 			var annotations = (function () {
/* 000279 */ 				var __accu0__ = [];
/* 000279 */ 				var __iterable0__ = annotations;
/* 000279 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000279 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000279 */ 					(function () {
/* 000279 */ 						var __accu1__ = __accu0__;
/* 000279 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000279 */ 							var __accu2__ = a;
/* 000279 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000279 */ 						}) ());
/* 000279 */ 					}) ();
/* 000279 */ 				}
/* 000279 */ 				return __accu0__;
/* 000279 */ 			}) ();
/* 000279 */ 		}
/* 000283 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000283 */ 			var __accu0__ = ',';
/* 000283 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000283 */ 		}) ()), ' ---\n');
/* 000284 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000284 */ 			var __accu0__ = ',';
/* 000284 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000284 */ 		}) ()), ' ---\n');
/* 000286 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000287 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000288 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000289 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000289 */ 		}
/* 000291 */ 		var lblcmd = '';
/* 000292 */ 		if (__t__ (target_id)) {
/* 000293 */ 			var lblcmd = (function () {
/* 000293 */ 				var __accu0__ = self;
/* 000293 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000293 */ 			}) ();
/* 000293 */ 		}
/* 000298 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000298 */ 			var __accu0__ = self;
/* 000298 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000298 */ 		}) ());
/* 000298 */ 	});},
/* 000303 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000303 */ 		var role = null;
/* 000303 */ 		var annotations = null;
/* 000303 */ 		var target_id = null;
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000312 */ 		var s_lines = [];
/* 000314 */ 		var __iterable0__ = lines_info_list;
/* 000314 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000315 */ 			var line_content_nodelist = line_info.nodelist;
/* 000317 */ 			var line_content = (function () {
/* 000317 */ 				var __accu0__ = self;
/* 000317 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000317 */ 			}) ();
/* 000323 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000324 */ 				var line_content = __add__ (__mul__ ('\\indent ', line_info.indent_left), line_content);
/* 000324 */ 			}
/* 000329 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000330 */ 				(function () {
/* 000330 */ 					var __accu0__ = logger;
/* 000330 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in latex renderer');
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000331 */ 			if (__t__ (line_info.align !== null)) {
/* 000332 */ 				(function () {
/* 000332 */ 					var __accu0__ = logger;
/* 000332 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in latex renderer');
/* 000332 */ 				}) ();
/* 000332 */ 			}
/* 000334 */ 			(function () {
/* 000334 */ 				var __accu0__ = s_lines;
/* 000334 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000334 */ 			}) ();
/* 000334 */ 		}
/* 000337 */ 		var s_lines = (function () {
/* 000337 */ 			var __accu0__ = [];
/* 000341 */ 			var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000341 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000341 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000341 */ 				var j = __left0__ [0];
/* 000341 */ 				var line_content = __left0__ [1];
/* 000341 */ 				(function () {
/* 000341 */ 					var __accu1__ = __accu0__;
/* 000339 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (__add__ (line_content, '%\n'), '\\\\\n') : line_content));
/* 000339 */ 				}) ();
/* 000339 */ 			}
/* 000339 */ 			return __accu0__;
/* 000339 */ 		}) ();
/* 000344 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000345 */ 			var annotations = [];
/* 000345 */ 		}
/* 000346 */ 		else {
/* 000347 */ 			var annotations = (function () {
/* 000347 */ 				var __accu0__ = [];
/* 000347 */ 				var __iterable0__ = annotations;
/* 000347 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000347 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 					(function () {
/* 000347 */ 						var __accu1__ = __accu0__;
/* 000347 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000347 */ 							var __accu2__ = a;
/* 000347 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000347 */ 						}) ());
/* 000347 */ 					}) ();
/* 000347 */ 				}
/* 000347 */ 				return __accu0__;
/* 000347 */ 			}) ();
/* 000347 */ 		}
/* 000349 */ 		var ltx_environment = 'flmLines';
/* 000350 */ 		if (__t__ (__t__ (role !== null) && __in__ (role, self.latex_lines_environments))) {
/* 000351 */ 			var ltx_environment = __getitem__ (self.latex_lines_environments, role);
/* 000351 */ 		}
/* 000353 */ 		return (function () {
/* 000353 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, annotations, (function () {
/* 000356 */ 				var __accu1__ = self;
/* 000356 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000356 */ 			}) (), render_context);
/* 000356 */ 		}) ();
/* 000356 */ 	});},
/* 000364 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000364 */ 		var target_id_generator = null;
/* 000364 */ 		var annotations = null;
/* 000364 */ 		var nested_depth = null;
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000375 */ 		var s_items = [];
/* 000377 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000377 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 			var j = __left0__ [0];
/* 000377 */ 			var item_content_nodelist = __left0__ [1];
/* 000379 */ 			var use_block_level = true;
/* 000380 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000383 */ 				var use_block_level = false;
/* 000383 */ 			}
/* 000385 */ 			// pass;
/* 000389 */ 			// pass;
/* 000393 */ 			var item_content = (function () {
/* 000393 */ 				var __accu0__ = self;
/* 000393 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000393 */ 			}) ();
/* 000399 */ 			var enumno = __add__ (1, j);
/* 000401 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000402 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000403 */ 				var tag_content = (function () {
/* 000403 */ 					var __accu0__ = self;
/* 000403 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000403 */ 				}) ();
/* 000403 */ 			}
/* 000404 */ 			else {
/* 000405 */ 				var tag_content = (function () {
/* 000405 */ 					var __accu0__ = self;
/* 000405 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000405 */ 				}) ();
/* 000405 */ 			}
/* 000411 */ 			var itemlabel = '';
/* 000412 */ 			if (__t__ (target_id_generator !== null)) {
/* 000413 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000414 */ 				if (__t__ (this_target_id !== null)) {
/* 000415 */ 					var itemlabel = (function () {
/* 000415 */ 						var __accu0__ = self;
/* 000415 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000415 */ 					}) ();
/* 000415 */ 				}
/* 000415 */ 			}
/* 000418 */ 			(function () {
/* 000418 */ 				var __accu0__ = s_items;
/* 000418 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000418 */ 			}) ();
/* 000418 */ 		}
/* 000424 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000425 */ 			var annotations = [];
/* 000425 */ 		}
/* 000426 */ 		else {
/* 000427 */ 			var annotations = (function () {
/* 000427 */ 				var __accu0__ = [];
/* 000427 */ 				var __iterable0__ = annotations;
/* 000427 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000427 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000427 */ 					(function () {
/* 000427 */ 						var __accu1__ = __accu0__;
/* 000427 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000427 */ 							var __accu2__ = a;
/* 000427 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000427 */ 						}) ());
/* 000427 */ 					}) ();
/* 000427 */ 				}
/* 000427 */ 				return __accu0__;
/* 000427 */ 			}) ();
/* 000427 */ 		}
/* 000429 */ 		var ltx_environment = 'itemize';
/* 000431 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000434 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000434 */ 		}
/* 000436 */ 		return (function () {
/* 000436 */ 			var __accu0__ = self;
/* 000439 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000439 */ 				var __accu1__ = self;
/* 000439 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000439 */ 			}) (), render_context);
/* 000439 */ 		}) ();
/* 000439 */ 	});},
/* 000444 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000444 */ 		var heading_level = 1;
/* 000444 */ 		var inline_heading = false;
/* 000444 */ 		var target_id = null;
/* 000444 */ 		var annotations = null;
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000451 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000454 */ 			var __except0__ = __call__ (ValueError, null, "Heading level ‘{}’ undefined for latex rendering, expected one of {}.\nPlease make sure the corresponding heading level is set to a latex command name in the latex fragment renderer's configuration (flm: renderer: latex: heading_commands_by_level: <LEVEL>: <command-name>)".format (heading_level, __call__ (list, null, (function () {
/* 000454 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000454 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000454 */ 			}) ())));
/* 000454 */ 			__except0__.__cause__ = null;
/* 000454 */ 			throw __except0__;
/* 000454 */ 		}
/* 000460 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000462 */ 		var title_content = (function () {
/* 000462 */ 			var __accu0__ = self;
/* 000462 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000462 */ 		}) ();
/* 000464 */ 		var labelcmd = '';
/* 000465 */ 		if (__t__ (target_id)) {
/* 000466 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000466 */ 		}
/* 000468 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000468 */ 	});},
/* 000473 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000473 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000473 */ 			var annotations = null;
/* 000473 */ 		};
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000475 */ 		var display_content = (function () {
/* 000475 */ 			var __accu0__ = self;
/* 000475 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000475 */ 		}) ();
/* 000481 */ 		var annotations = __t__ (annotations) || [];
/* 000483 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000484 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000484 */ 		}
/* 000487 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000488 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000488 */ 		}
/* 000492 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000493 */ 			return (function () {
/* 000493 */ 				var __accu0__ = self;
/* 000493 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000493 */ 			}) ();
/* 000493 */ 		}
/* 000497 */ 		return (function () {
/* 000497 */ 			var __accu0__ = self;
/* 000497 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000497 */ 		}) ();
/* 000497 */ 	});},
/* 000502 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000502 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000502 */ 			var is_block_level = false;
/* 000502 */ 		};
/* 000502 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000502 */ 			var color_index = 0;
/* 000502 */ 		};
/* 000502 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000502 */ 			var initials = null;
/* 000502 */ 		};
/* 000502 */ 		if (arguments.length) {
/* 000502 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000502 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000502 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000502 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000502 */ 					switch (__attrib0__) {
/* 000502 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 					}
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 		}
/* 000502 */ 		else {
/* 000502 */ 		}
/* 000510 */ 		var s = __add__ (__add__ (__add__ ('\\flmAnnotationComment', '{'), __call__ (str, null, color_index)), '}');
/* 000511 */ 		if (__t__ (initials)) {
/* 000512 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000512 */ 				var __accu0__ = self;
/* 000512 */ 				return __call__ (__accu0__.render_value, __accu0__, initials, render_context);
/* 000512 */ 			}) ()), '}'));
/* 000512 */ 		}
/* 000514 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000514 */ 			var __accu0__ = self;
/* 000514 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000514 */ 		}) ()), '}'));
/* 000516 */ 		return s;
/* 000516 */ 	});},
/* 000518 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000518 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 			var is_block_level = false;
/* 000518 */ 		};
/* 000518 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 			var color_index = 0;
/* 000518 */ 		};
/* 000518 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 			var initials = null;
/* 000518 */ 		};
/* 000518 */ 		if (arguments.length) {
/* 000518 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 					switch (__attrib0__) {
/* 000518 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 			}
/* 000518 */ 		}
/* 000518 */ 		else {
/* 000518 */ 		}
/* 000526 */ 		var s = __add__ (__add__ (__add__ ('\\flmAnnotationHighlight', '{'), __call__ (str, null, color_index)), '}');
/* 000527 */ 		if (__t__ (initials)) {
/* 000528 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000528 */ 				var __accu0__ = self;
/* 000528 */ 				return __call__ (__accu0__.render_value, __accu0__, initials, render_context);
/* 000528 */ 			}) ()), '}'));
/* 000528 */ 		}
/* 000530 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000530 */ 			var __accu0__ = self;
/* 000530 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000530 */ 		}) ()), '}'));
/* 000532 */ 		return s;
/* 000532 */ 	});},
/* 000535 */ 	debug_disable_link_hyperref: false,
/* 000537 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000538 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000539 */ 			return display_content;
/* 000539 */ 		}
/* 000540 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000540 */ 	});},
/* 000545 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000545 */ 		if (arguments.length) {
/* 000545 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000545 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000545 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000545 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000545 */ 					switch (__attrib0__) {
/* 000545 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 					}
/* 000545 */ 				}
/* 000545 */ 			}
/* 000545 */ 		}
/* 000545 */ 		else {
/* 000545 */ 		}
/* 000546 */ 		var escaped_url = (function () {
/* 000546 */ 			var __accu0__ = re;
/* 000546 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
/* 000546 */ 				if (arguments.length) {
/* 000546 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000546 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000546 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000546 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000546 */ 							switch (__attrib0__) {
/* 000546 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000546 */ 							}
/* 000546 */ 						}
/* 000546 */ 					}
/* 000546 */ 				}
/* 000546 */ 				else {
/* 000546 */ 				}
/* 000546 */ 				return __add__ ('\\', (function () {
/* 000546 */ 					var __accu1__ = m;
/* 000546 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000546 */ 				}) ());
/* 000546 */ 			}), href);
/* 000546 */ 		}) ();
/* 000547 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}');
/* 000547 */ 	});},
/* 000549 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000549 */ 		if (arguments.length) {
/* 000549 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000549 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000549 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000549 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000549 */ 					switch (__attrib0__) {
/* 000549 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 					}
/* 000549 */ 				}
/* 000549 */ 			}
/* 000549 */ 		}
/* 000549 */ 		else {
/* 000549 */ 		}
/* 000550 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000550 */ 	});},
/* 000552 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000552 */ 		if (arguments.length) {
/* 000552 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000552 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000552 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000552 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000552 */ 					switch (__attrib0__) {
/* 000552 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 					}
/* 000552 */ 				}
/* 000552 */ 			}
/* 000552 */ 		}
/* 000552 */ 		else {
/* 000552 */ 		}
/* 000553 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000553 */ 	});},
/* 000555 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000555 */ 		if (arguments.length) {
/* 000555 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000555 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000555 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000555 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000555 */ 					switch (__attrib0__) {
/* 000555 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 					}
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 		}
/* 000555 */ 		else {
/* 000555 */ 		}
/* 000556 */ 		return (function () {
/* 000556 */ 			var __accu0__ = _rx_delayed_markers;
/* 000556 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000556 */ 				if (arguments.length) {
/* 000556 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 							switch (__attrib0__) {
/* 000556 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 							}
/* 000556 */ 						}
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 				else {
/* 000556 */ 				}
/* 000557 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000557 */ 					var __accu1__ = m;
/* 000557 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000557 */ 				}) ()));
/* 000557 */ 			}), content);
/* 000557 */ 		}) ();
/* 000557 */ 	});},
/* 000564 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000582 */ 	float_use_centering: '\\centering{}',
/* 000583 */ 	float_caption_join: ': ',
/* 000584 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000585 */ 	float_latex_after_caption: '}',
/* 000587 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000587 */ 		if (arguments.length) {
/* 000587 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000587 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000587 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000587 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000587 */ 					switch (__attrib0__) {
/* 000587 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 					}
/* 000587 */ 				}
/* 000587 */ 			}
/* 000587 */ 		}
/* 000587 */ 		else {
/* 000587 */ 		}
/* 000590 */ 		var has_number = false;
/* 000591 */ 		var has_caption = false;
/* 000593 */ 		var full_figcaption_rendered_list = [];
/* 000594 */ 		var float_designator = null;
/* 000595 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000596 */ 			var has_number = true;
/* 000599 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000599 */ 				var __accu0__ = self;
/* 000599 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000604 */ 			}) (), '~'), (function () {
/* 000604 */ 				var __accu0__ = self;
/* 000604 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000604 */ 			}) ());
/* 000604 */ 		}
/* 000609 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000613 */ 			var float_designator = (function () {
/* 000613 */ 				var __accu0__ = self;
/* 000613 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000613 */ 			}) ();
/* 000613 */ 		}
/* 000616 */ 		else {
/* 000620 */ 			// pass;
/* 000620 */ 		}
/* 000622 */ 		var labelcmd = '';
/* 000623 */ 		if (__t__ (float_designator !== null)) {
/* 000624 */ 			(function () {
/* 000624 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000624 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000624 */ 			}) ();
/* 000626 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000627 */ 				var labelcmd = (function () {
/* 000627 */ 					var __accu0__ = self;
/* 000627 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000627 */ 				}) ();
/* 000627 */ 			}
/* 000627 */ 		}
/* 000631 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000632 */ 			var has_caption = true;
/* 000636 */ 			(function () {
/* 000636 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000636 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000636 */ 			}) ();
/* 000640 */ 			(function () {
/* 000640 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000641 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000641 */ 					var __accu1__ = self;
/* 000641 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000641 */ 				}) ());
/* 000641 */ 			}) ();
/* 000641 */ 		}
/* 000647 */ 		var rendered_float_caption = null;
/* 000648 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000651 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000651 */ 				var __accu0__ = self;
/* 000653 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000653 */ 					var __accu1__ = self;
/* 000653 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000653 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000653 */ 			}) ()), self.float_latex_after_caption);
/* 000653 */ 		}
/* 000660 */ 		var float_content_block_content = (function () {
/* 000660 */ 			var __accu0__ = self;
/* 000660 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000660 */ 		}) ();
/* 000666 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000667 */ 			var float_content_with_caption = (function () {
/* 000667 */ 				var __accu0__ = self;
/* 000667 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000667 */ 			}) ();
/* 000667 */ 		}
/* 000671 */ 		else {
/* 000672 */ 			var float_content_with_caption = float_content_block_content;
/* 000672 */ 		}
/* 000674 */ 		var env_name = float_instance.float_type;
/* 000675 */ 		var env_options_str = '[h!]';
/* 000676 */ 		var centering = self.float_use_centering;
/* 000678 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000679 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000679 */ 		}
/* 000680 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000681 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000681 */ 		}
/* 000682 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000683 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000683 */ 		}
/* 000684 */ 		else {
/* 000685 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000685 */ 		}
/* 000687 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000688 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000688 */ 		}
/* 000689 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000690 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000690 */ 		}
/* 000691 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000692 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000692 */ 		}
/* 000694 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000694 */ 	});},
/* 000702 */ 	graphics_raster_magnification: 1,
/* 000703 */ 	graphics_vector_magnification: 1,
/* 000705 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000705 */ 		if (arguments.length) {
/* 000705 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 					switch (__attrib0__) {
/* 000705 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 			}
/* 000705 */ 		}
/* 000705 */ 		else {
/* 000705 */ 		}
/* 000708 */ 		var __left0__ = (function () {
/* 000708 */ 			var __accu0__ = self;
/* 000708 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000708 */ 		}) ();
/* 000708 */ 		var src_url = __left0__ [0];
/* 000708 */ 		var incloptions = __left0__ [1];
/* 000710 */ 		var opts = '';
/* 000711 */ 		if (__t__ (incloptions !== null)) {
/* 000712 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000712 */ 		}
/* 000714 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000714 */ 	});},
/* 000716 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000716 */ 		if (arguments.length) {
/* 000716 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000716 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000716 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000716 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000716 */ 					switch (__attrib0__) {
/* 000716 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000716 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000716 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000716 */ 					}
/* 000716 */ 				}
/* 000716 */ 			}
/* 000716 */ 		}
/* 000716 */ 		else {
/* 000716 */ 		}
/* 000718 */ 		var whoptc = null;
/* 000719 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000721 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000721 */ 			var width_pt = __left0__ [0];
/* 000721 */ 			var height_pt = __left0__ [1];
/* 000723 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000724 */ 				if (__t__ (width_pt !== null)) {
/* 000725 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000725 */ 				}
/* 000726 */ 				if (__t__ (height_pt !== null)) {
/* 000727 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000727 */ 				}
/* 000727 */ 			}
/* 000728 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000729 */ 				if (__t__ (width_pt !== null)) {
/* 000730 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000730 */ 				}
/* 000731 */ 				if (__t__ (height_pt !== null)) {
/* 000732 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000732 */ 				}
/* 000732 */ 			}
/* 000734 */ 			var whoptc = '';
/* 000735 */ 			if (__t__ (width_pt !== null)) {
/* 000736 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000736 */ 			}
/* 000737 */ 			if (__t__ (height_pt !== null)) {
/* 000738 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000738 */ 			}
/* 000738 */ 		}
/* 000740 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000740 */ 	});},
/* 000743 */ 	cells_max_width_latexdim: '0.96\\linewidth',
/* 000744 */ 	cells_render_method: 'fit_width_test',
/* 000746 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000746 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000746 */ 			var target_id = null;
/* 000746 */ 		};
/* 000746 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000746 */ 			var render_cell_nodelist_contents_fn = null;
/* 000746 */ 		};
/* 000746 */ 		if (arguments.length) {
/* 000746 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000746 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000746 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000746 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000746 */ 					switch (__attrib0__) {
/* 000746 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 					}
/* 000746 */ 				}
/* 000746 */ 			}
/* 000746 */ 		}
/* 000746 */ 		else {
/* 000746 */ 		}
/* 000749 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000750 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000750 */ 				if (arguments.length) {
/* 000750 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000750 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000750 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000750 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000750 */ 							switch (__attrib0__) {
/* 000750 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 							}
/* 000750 */ 						}
/* 000750 */ 					}
/* 000750 */ 				}
/* 000750 */ 				else {
/* 000750 */ 				}
/* 000751 */ 				return (function () {
/* 000751 */ 					var __accu0__ = self;
/* 000751 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000751 */ 				}) ();
/* 000751 */ 			});
/* 000751 */ 		}
/* 000753 */ 		var stab_contents = '';
/* 000755 */ 		var cell_spans_styles = '';
/* 000756 */ 		var cell_hlines = [];
/* 000757 */ 		var cell_vlines = [];
/* 000759 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000759 */ 		var tabheight = __left0__ [0];
/* 000759 */ 		var tabwidth = __left0__ [1];
/* 000761 */ 		var __iterable0__ = cells_model.grid_data;
/* 000761 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000761 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000762 */ 			var stab_rowitems = [];
/* 000764 */ 			var __iterable1__ = row;
/* 000764 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000764 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000765 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000768 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000769 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000776 */ 					var thiscellspanopts = [];
/* 000777 */ 					var rowj = cell.placement.row_range.start;
/* 000778 */ 					var rowjend = cell.placement.row_range.end;
/* 000779 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000780 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000781 */ 						(function () {
/* 000781 */ 							var __accu0__ = thiscellspanopts;
/* 000781 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000781 */ 						}) ();
/* 000781 */ 					}
/* 000783 */ 					var colj = cell.placement.col_range.start;
/* 000784 */ 					var coljend = cell.placement.col_range.end;
/* 000785 */ 					var numcols = __sub__ (coljend, colj);
/* 000786 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000787 */ 						(function () {
/* 000787 */ 							var __accu0__ = thiscellspanopts;
/* 000787 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000787 */ 						}) ();
/* 000787 */ 					}
/* 000789 */ 					var thiscellstyles = 'm';
/* 000790 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000791 */ 						var thiscellstyles = 'l';
/* 000791 */ 					}
/* 000792 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000793 */ 						var thiscellstyles = 'c';
/* 000793 */ 					}
/* 000794 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000795 */ 						var thiscellstyles = 'r';
/* 000795 */ 					}
/* 000797 */ 					var bgcol = null;
/* 000798 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000799 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000799 */ 					}
/* 000800 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000801 */ 						var bgcol = 'flmTabCellColorRed';
/* 000801 */ 					}
/* 000802 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000803 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000803 */ 					}
/* 000804 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000805 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000805 */ 					}
/* 000807 */ 					if (__t__ (bgcol)) {
/* 000808 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000808 */ 					}
/* 000810 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000811 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000811 */ 					}
/* 000813 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000814 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000815 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000815 */ 						}
/* 000816 */ 						else {
/* 000817 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000817 */ 						}
/* 000820 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000821 */ 							(function () {
/* 000821 */ 								var __accu0__ = cell_hlines;
/* 000821 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000821 */ 							}) ();
/* 000821 */ 						}
/* 000821 */ 					}
/* 000823 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000824 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000825 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000825 */ 						}
/* 000826 */ 						else {
/* 000827 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000827 */ 						}
/* 000829 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000830 */ 							(function () {
/* 000830 */ 								var __accu0__ = cell_vlines;
/* 000830 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000830 */ 							}) ();
/* 000830 */ 						}
/* 000831 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000832 */ 							(function () {
/* 000832 */ 								var __accu0__ = cell_vlines;
/* 000832 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000832 */ 							}) ();
/* 000832 */ 						}
/* 000832 */ 					}
/* 000834 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000837 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000837 */ 							var __accu0__ = ',';
/* 000837 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000837 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000837 */ 					}
/* 000837 */ 				}
/* 000840 */ 				else {
/* 000842 */ 					var cell_content = '';
/* 000842 */ 				}
/* 000844 */ 				(function () {
/* 000844 */ 					var __accu0__ = stab_rowitems;
/* 000844 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000844 */ 				}) ();
/* 000844 */ 			}
/* 000846 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000846 */ 				var __accu0__ = '&';
/* 000846 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000846 */ 			}) (), '\\\\'), '\n'));
/* 000846 */ 		}
/* 000848 */ 		var _typeset_table_contents = function (raw_args, colspec_one) {
/* 000848 */ 			if (typeof raw_args == 'undefined' || (raw_args != null && raw_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000848 */ 				var raw_args = null;
/* 000848 */ 			};
/* 000848 */ 			if (typeof colspec_one == 'undefined' || (colspec_one != null && colspec_one.hasOwnProperty ("__kwargtrans__"))) {;
/* 000848 */ 				var colspec_one = null;
/* 000848 */ 			};
/* 000848 */ 			if (arguments.length) {
/* 000848 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000848 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000848 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000848 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000848 */ 						switch (__attrib0__) {
/* 000848 */ 							case 'raw_args': var raw_args = __allkwargs0__ [__attrib0__]; break;
/* 000848 */ 							case 'colspec_one': var colspec_one = __allkwargs0__ [__attrib0__]; break;
/* 000848 */ 						}
/* 000848 */ 					}
/* 000848 */ 				}
/* 000848 */ 			}
/* 000848 */ 			else {
/* 000848 */ 			}
/* 000849 */ 			if (__t__ (raw_args !== null)) {
/* 000850 */ 				var tblrargs = raw_args;
/* 000850 */ 			}
/* 000851 */ 			else {
/* 000852 */ 				var tblrargs = __add__ (__add__ ('colspec={', __mul__ (colspec_one, tabwidth)), '}');
/* 000852 */ 			}
/* 000857 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{tblr}{', tblrargs), ','), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000857 */ 				var __accu0__ = '';
/* 000857 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000857 */ 					var __accu1__ = [];
/* 000857 */ 					var __iterable0__ = cell_hlines;
/* 000857 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000858 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000858 */ 						var rownrng = __left0__ [0];
/* 000858 */ 						var colnrng = __left0__ [1];
/* 000858 */ 						var lsty = __left0__ [2];
/* 000858 */ 						(function () {
/* 000858 */ 							var __accu2__ = __accu1__;
/* 000858 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000858 */ 						}) ();
/* 000858 */ 					}
/* 000858 */ 					return __accu1__;
/* 000858 */ 				}) ());
/* 000859 */ 			}) ()), (function () {
/* 000859 */ 				var __accu0__ = '';
/* 000859 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000859 */ 					var __accu1__ = [];
/* 000859 */ 					var __iterable0__ = cell_vlines;
/* 000859 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000860 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000860 */ 						var rownrng = __left0__ [0];
/* 000860 */ 						var colnrng = __left0__ [1];
/* 000860 */ 						var lsty = __left0__ [2];
/* 000860 */ 						(function () {
/* 000860 */ 							var __accu2__ = __accu1__;
/* 000860 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000860 */ 						}) ();
/* 000860 */ 					}
/* 000860 */ 					return __accu1__;
/* 000860 */ 				}) ());
/* 000860 */ 			}) ()), '}%'), '\n'), '\\toprule'), '\n'), stab_contents), '\\bottomrule'), '\n'), '\\end{tblr}%'), '\n');
/* 000860 */ 		};
/* 000869 */ 		if (__t__ (__eq__ (self.cells_render_method, 'simple'))) {
/* 000872 */ 			var s = __add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\flmCellsEndCenter ');
/* 000875 */ 			return s;
/* 000875 */ 		}
/* 000877 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test'))) {
/* 000885 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\long\\def\\flmTempTypesetThisTable#1{%'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({raw_args: '#1'}))), '}%'), '\n');
/* 000889 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000901 */ 			var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 000902 */ 			return s;
/* 000902 */ 		}
/* 000904 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test_dupl'))) {
/* 000927 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\def\\flmTmpMaxW{\\dimexpr '), self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox\\bgroup'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\egroup'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'X[-1]'}))), '\\fi'), '\n'), '\\flmCellsEndCenter ');
/* 000931 */ 			return s;
/* 000931 */ 		}
/* 000933 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid cells_render_method: ', __call__ (repr, null, self.cells_render_method)));
/* 000933 */ 		__except0__.__cause__ = null;
/* 000933 */ 		throw __except0__;
/* 000933 */ 	});}
/* 000933 */ });
/* 000940 */ export var _rx_delayed_markers = (function () {
/* 000940 */ 	var __accu0__ = re;
/* 000940 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000940 */ }) ();
/* 000949 */ export var _latex_preamble_suggested_defs = '\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{amsmath}\n\\flmRequirePackage{amssymb}\n\n\\flmRequirePackage{graphicx}\n\\flmRequirePackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% lines; quotes, addresses, blockquotes\n\\providecommand\\flmLinesParSkip{1ex plus 0.3ex minus 0.2ex}\n\\ifdefined\\flmLines\\else\n\\newenvironment{flmLines}{%\n  \\par\\begingroup\n  \\parindent=0pt\\relax\n  \\parskip=\\flmLinesParSkip\\relax\n}{%\n  \\par\\endgroup\n}\n\\fi\n\\ifdefined\\flmAddress\\else\n\\newenvironment{flmAddress}{%\n  \\par\n  \\begingroup\n  \\small\n}{%\n  \\par\n  \\endgroup\n}\n\\fi\n\\ifdefined\\flmBlockquote\\else\n\\newenvironment{flmBlockquote}{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n}{%\n  \\endlist\n}\n\\fi\n\n% for cells/tables\n\\flmRequirePackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n\n\\definecolor{flmAnnotationColor0}{RGB}{148,7,24} % dark red / burgundy\n\\definecolor{flmAnnotationColor1}{RGB}{0,148,240} % blue-y\n\\definecolor{flmAnnotationColor2}{RGB}{242,108,13} % orange-brown-y\n\\definecolor{flmAnnotationColor3}{RGB}{65,149,42} % green-y\n\\definecolor{flmAnnotationColor4}{RGB}{128,55,134} % purple-y\n\\definecolor{flmAnnotationColor5}{RGB}{0,129,129} % blue-green-y\n\\definecolor{flmAnnotationColor6}{RGB}{160,120,0} % brownish\n\\definecolor{flmAnnotationColor7}{RGB}{35,195,155} % aqua-ish\n\n\\providecommand\\flmAnnotationHighlight[3]{% {colorindex}{initials}{content}\n  \\textcolor{flmAnnotationColor#1}{%\n    \\if\\relax\\detokenize{#2}\\relax\\else\\textsf{\\footnotesize [#2]}~\\fi\n    #3}%\n}\n\\providecommand\\flmAnnotationComment[3]{% {colorindex}{initials}{content}\n  \\textcolor{flmAnnotationColor#1}{\\textsf{[%\n    \\if\\relax\\detokenize{#2}\\relax\\else{\\footnotesize #2:}~\\fi\n    #3]}}%\n}\n\n\n';
/* 001087 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001087 */ 	__module__: __name__,
/* 001088 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 001091 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001091 */ 		if (arguments.length) {
/* 001091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001091 */ 					switch (__attrib0__) {
/* 001091 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001091 */ 					}
/* 001091 */ 				}
/* 001091 */ 			}
/* 001091 */ 		}
/* 001091 */ 		else {
/* 001091 */ 		}
/* 001092 */ 		return dict ({'package_suggested_defs': _latex_preamble_suggested_defs, 'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 001092 */ 	};},
/* 001097 */ 	format_name: 'latex'
/* 001097 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map