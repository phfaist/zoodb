/* 000001 */ // Transcrypt'ed from Python, 2026-02-13 22:15:44
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
/* 000006 */ export {pyltxenc_lenc_get_builtin, FragmentRenderer, UnicodeToLatexEncoder};
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
/* 000303 */ 	get render_lines () {return __get__ (this, function (self, iter_lines_nodelists, render_context) {
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
/* 000303 */ 						case 'iter_lines_nodelists': var iter_lines_nodelists = __allkwargs0__ [__attrib0__]; break;
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
/* 000314 */ 		var __iterable0__ = iter_lines_nodelists;
/* 000314 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 			var line_content_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000316 */ 			var line_content = (function () {
/* 000316 */ 				var __accu0__ = self;
/* 000316 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000316 */ 			}) ();
/* 000322 */ 			(function () {
/* 000322 */ 				var __accu0__ = s_lines;
/* 000322 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000322 */ 			}) ();
/* 000322 */ 		}
/* 000325 */ 		var s_lines = (function () {
/* 000325 */ 			var __accu0__ = [];
/* 000329 */ 			var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000329 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000329 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000329 */ 				var j = __left0__ [0];
/* 000329 */ 				var line_content = __left0__ [1];
/* 000329 */ 				(function () {
/* 000329 */ 					var __accu1__ = __accu0__;
/* 000327 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (__add__ (line_content, '%\n'), '\\\\\n') : line_content));
/* 000327 */ 				}) ();
/* 000327 */ 			}
/* 000327 */ 			return __accu0__;
/* 000327 */ 		}) ();
/* 000332 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000333 */ 			var annotations = [];
/* 000333 */ 		}
/* 000334 */ 		else {
/* 000335 */ 			var annotations = (function () {
/* 000335 */ 				var __accu0__ = [];
/* 000335 */ 				var __iterable0__ = annotations;
/* 000335 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000335 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000335 */ 					(function () {
/* 000335 */ 						var __accu1__ = __accu0__;
/* 000335 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000335 */ 							var __accu2__ = a;
/* 000335 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000335 */ 						}) ());
/* 000335 */ 					}) ();
/* 000335 */ 				}
/* 000335 */ 				return __accu0__;
/* 000335 */ 			}) ();
/* 000335 */ 		}
/* 000337 */ 		var ltx_environment = 'flmLines';
/* 000338 */ 		if (__t__ (__t__ (role !== null) && __in__ (role, self.latex_lines_environments))) {
/* 000339 */ 			var ltx_environment = __getitem__ (self.latex_lines_environments, role);
/* 000339 */ 		}
/* 000341 */ 		return (function () {
/* 000341 */ 			var __accu0__ = self;
/* 000344 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, annotations, (function () {
/* 000344 */ 				var __accu1__ = self;
/* 000344 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000344 */ 			}) (), render_context);
/* 000344 */ 		}) ();
/* 000344 */ 	});},
/* 000352 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000352 */ 		var target_id_generator = null;
/* 000352 */ 		var annotations = null;
/* 000352 */ 		var nested_depth = null;
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000363 */ 		var s_items = [];
/* 000365 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000365 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000365 */ 			var j = __left0__ [0];
/* 000365 */ 			var item_content_nodelist = __left0__ [1];
/* 000367 */ 			var use_block_level = true;
/* 000368 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000371 */ 				var use_block_level = false;
/* 000371 */ 			}
/* 000373 */ 			// pass;
/* 000377 */ 			// pass;
/* 000381 */ 			var item_content = (function () {
/* 000381 */ 				var __accu0__ = self;
/* 000381 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000381 */ 			}) ();
/* 000387 */ 			var enumno = __add__ (1, j);
/* 000389 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000390 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000391 */ 				var tag_content = (function () {
/* 000391 */ 					var __accu0__ = self;
/* 000391 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000391 */ 				}) ();
/* 000391 */ 			}
/* 000392 */ 			else {
/* 000393 */ 				var tag_content = (function () {
/* 000393 */ 					var __accu0__ = self;
/* 000393 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000393 */ 				}) ();
/* 000393 */ 			}
/* 000399 */ 			var itemlabel = '';
/* 000400 */ 			if (__t__ (target_id_generator !== null)) {
/* 000401 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000402 */ 				if (__t__ (this_target_id !== null)) {
/* 000403 */ 					var itemlabel = (function () {
/* 000403 */ 						var __accu0__ = self;
/* 000403 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000403 */ 					}) ();
/* 000403 */ 				}
/* 000403 */ 			}
/* 000406 */ 			(function () {
/* 000406 */ 				var __accu0__ = s_items;
/* 000406 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000406 */ 			}) ();
/* 000406 */ 		}
/* 000412 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000413 */ 			var annotations = [];
/* 000413 */ 		}
/* 000414 */ 		else {
/* 000415 */ 			var annotations = (function () {
/* 000415 */ 				var __accu0__ = [];
/* 000415 */ 				var __iterable0__ = annotations;
/* 000415 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000415 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000415 */ 					(function () {
/* 000415 */ 						var __accu1__ = __accu0__;
/* 000415 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000415 */ 							var __accu2__ = a;
/* 000415 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000415 */ 						}) ());
/* 000415 */ 					}) ();
/* 000415 */ 				}
/* 000415 */ 				return __accu0__;
/* 000415 */ 			}) ();
/* 000415 */ 		}
/* 000417 */ 		var ltx_environment = 'itemize';
/* 000419 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000422 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000422 */ 		}
/* 000424 */ 		return (function () {
/* 000424 */ 			var __accu0__ = self;
/* 000427 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000427 */ 				var __accu1__ = self;
/* 000427 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000427 */ 			}) (), render_context);
/* 000427 */ 		}) ();
/* 000427 */ 	});},
/* 000432 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000432 */ 		var heading_level = 1;
/* 000432 */ 		var inline_heading = false;
/* 000432 */ 		var target_id = null;
/* 000432 */ 		var annotations = null;
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000439 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000442 */ 			var __except0__ = __call__ (ValueError, null, "Heading level ‘{}’ undefined for latex rendering, expected one of {}.\nPlease make sure the corresponding heading level is set to a latex command name in the latex fragment renderer's configuration (flm: renderer: latex: heading_commands_by_level: <LEVEL>: <command-name>)".format (heading_level, __call__ (list, null, (function () {
/* 000442 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000442 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000442 */ 			}) ())));
/* 000442 */ 			__except0__.__cause__ = null;
/* 000442 */ 			throw __except0__;
/* 000442 */ 		}
/* 000448 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000450 */ 		var title_content = (function () {
/* 000450 */ 			var __accu0__ = self;
/* 000450 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000450 */ 		}) ();
/* 000452 */ 		var labelcmd = '';
/* 000453 */ 		if (__t__ (target_id)) {
/* 000454 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000454 */ 		}
/* 000456 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000456 */ 	});},
/* 000461 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000461 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000461 */ 			var annotations = null;
/* 000461 */ 		};
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000463 */ 		var display_content = (function () {
/* 000463 */ 			var __accu0__ = self;
/* 000463 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000463 */ 		}) ();
/* 000469 */ 		var annotations = __t__ (annotations) || [];
/* 000471 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000472 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000472 */ 		}
/* 000475 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000476 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000476 */ 		}
/* 000480 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000481 */ 			return (function () {
/* 000481 */ 				var __accu0__ = self;
/* 000481 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000481 */ 			}) ();
/* 000481 */ 		}
/* 000485 */ 		return (function () {
/* 000485 */ 			var __accu0__ = self;
/* 000485 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000485 */ 		}) ();
/* 000485 */ 	});},
/* 000490 */ 	debug_disable_link_hyperref: false,
/* 000492 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000493 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000494 */ 			return display_content;
/* 000494 */ 		}
/* 000495 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000495 */ 	});},
/* 000500 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000500 */ 		if (arguments.length) {
/* 000500 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 					switch (__attrib0__) {
/* 000500 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 			}
/* 000500 */ 		}
/* 000500 */ 		else {
/* 000500 */ 		}
/* 000501 */ 		var escaped_url = (function () {
/* 000501 */ 			var __accu0__ = re;
/* 000501 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
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
/* 000501 */ 				return __add__ ('\\', (function () {
/* 000501 */ 					var __accu1__ = m;
/* 000501 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000501 */ 				}) ());
/* 000501 */ 			}), href);
/* 000501 */ 		}) ();
/* 000502 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}%\\n');
/* 000502 */ 	});},
/* 000504 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000505 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000505 */ 	});},
/* 000507 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000507 */ 		if (arguments.length) {
/* 000507 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000507 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000507 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000507 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000507 */ 					switch (__attrib0__) {
/* 000507 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 					}
/* 000507 */ 				}
/* 000507 */ 			}
/* 000507 */ 		}
/* 000507 */ 		else {
/* 000507 */ 		}
/* 000508 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000508 */ 	});},
/* 000510 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000510 */ 		if (arguments.length) {
/* 000510 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000510 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000510 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000510 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000510 */ 					switch (__attrib0__) {
/* 000510 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 					}
/* 000510 */ 				}
/* 000510 */ 			}
/* 000510 */ 		}
/* 000510 */ 		else {
/* 000510 */ 		}
/* 000511 */ 		return (function () {
/* 000511 */ 			var __accu0__ = _rx_delayed_markers;
/* 000511 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000511 */ 				if (arguments.length) {
/* 000511 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 							switch (__attrib0__) {
/* 000511 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 							}
/* 000511 */ 						}
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 				else {
/* 000511 */ 				}
/* 000512 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000512 */ 					var __accu1__ = m;
/* 000512 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000512 */ 				}) ()));
/* 000512 */ 			}), content);
/* 000512 */ 		}) ();
/* 000512 */ 	});},
/* 000519 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000537 */ 	float_use_centering: '\\centering{}',
/* 000538 */ 	float_caption_join: ': ',
/* 000539 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000540 */ 	float_latex_after_caption: '}',
/* 000542 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000542 */ 		if (arguments.length) {
/* 000542 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000542 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000542 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000542 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000542 */ 					switch (__attrib0__) {
/* 000542 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 					}
/* 000542 */ 				}
/* 000542 */ 			}
/* 000542 */ 		}
/* 000542 */ 		else {
/* 000542 */ 		}
/* 000545 */ 		var has_number = false;
/* 000546 */ 		var has_caption = false;
/* 000548 */ 		var full_figcaption_rendered_list = [];
/* 000549 */ 		var float_designator = null;
/* 000550 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000551 */ 			var has_number = true;
/* 000554 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000554 */ 				var __accu0__ = self;
/* 000554 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000559 */ 			}) (), '~'), (function () {
/* 000559 */ 				var __accu0__ = self;
/* 000559 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000559 */ 			}) ());
/* 000559 */ 		}
/* 000564 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000568 */ 			var float_designator = (function () {
/* 000568 */ 				var __accu0__ = self;
/* 000568 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000568 */ 			}) ();
/* 000568 */ 		}
/* 000571 */ 		else {
/* 000575 */ 			// pass;
/* 000575 */ 		}
/* 000577 */ 		var labelcmd = '';
/* 000578 */ 		if (__t__ (float_designator !== null)) {
/* 000579 */ 			(function () {
/* 000579 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000579 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000579 */ 			}) ();
/* 000581 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000582 */ 				var labelcmd = (function () {
/* 000582 */ 					var __accu0__ = self;
/* 000582 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000582 */ 				}) ();
/* 000582 */ 			}
/* 000582 */ 		}
/* 000586 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000587 */ 			var has_caption = true;
/* 000591 */ 			(function () {
/* 000591 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000591 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000591 */ 			}) ();
/* 000595 */ 			(function () {
/* 000595 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000596 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000596 */ 					var __accu1__ = self;
/* 000596 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000596 */ 				}) ());
/* 000596 */ 			}) ();
/* 000596 */ 		}
/* 000602 */ 		var rendered_float_caption = null;
/* 000603 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000606 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000606 */ 				var __accu0__ = self;
/* 000608 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000608 */ 					var __accu1__ = self;
/* 000608 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000608 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000608 */ 			}) ()), self.float_latex_after_caption);
/* 000608 */ 		}
/* 000615 */ 		var float_content_block_content = (function () {
/* 000615 */ 			var __accu0__ = self;
/* 000615 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000615 */ 		}) ();
/* 000621 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000622 */ 			var float_content_with_caption = (function () {
/* 000622 */ 				var __accu0__ = self;
/* 000622 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000622 */ 			}) ();
/* 000622 */ 		}
/* 000626 */ 		else {
/* 000627 */ 			var float_content_with_caption = float_content_block_content;
/* 000627 */ 		}
/* 000629 */ 		var env_name = float_instance.float_type;
/* 000630 */ 		var env_options_str = '[h!]';
/* 000631 */ 		var centering = self.float_use_centering;
/* 000633 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000634 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000634 */ 		}
/* 000635 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000636 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000636 */ 		}
/* 000637 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000638 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000638 */ 		}
/* 000639 */ 		else {
/* 000640 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000640 */ 		}
/* 000642 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000643 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000643 */ 		}
/* 000644 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000645 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000645 */ 		}
/* 000646 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000647 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000647 */ 		}
/* 000649 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000649 */ 	});},
/* 000657 */ 	graphics_raster_magnification: 1,
/* 000658 */ 	graphics_vector_magnification: 1,
/* 000660 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000660 */ 		if (arguments.length) {
/* 000660 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000660 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000660 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000660 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000660 */ 					switch (__attrib0__) {
/* 000660 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000660 */ 					}
/* 000660 */ 				}
/* 000660 */ 			}
/* 000660 */ 		}
/* 000660 */ 		else {
/* 000660 */ 		}
/* 000663 */ 		var __left0__ = (function () {
/* 000663 */ 			var __accu0__ = self;
/* 000663 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000663 */ 		}) ();
/* 000663 */ 		var src_url = __left0__ [0];
/* 000663 */ 		var incloptions = __left0__ [1];
/* 000665 */ 		var opts = '';
/* 000666 */ 		if (__t__ (incloptions !== null)) {
/* 000667 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000667 */ 		}
/* 000669 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000669 */ 	});},
/* 000671 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000671 */ 		if (arguments.length) {
/* 000671 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000671 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000671 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000671 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000671 */ 					switch (__attrib0__) {
/* 000671 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 					}
/* 000671 */ 				}
/* 000671 */ 			}
/* 000671 */ 		}
/* 000671 */ 		else {
/* 000671 */ 		}
/* 000673 */ 		var whoptc = null;
/* 000674 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000676 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000676 */ 			var width_pt = __left0__ [0];
/* 000676 */ 			var height_pt = __left0__ [1];
/* 000678 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000679 */ 				if (__t__ (width_pt !== null)) {
/* 000680 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000680 */ 				}
/* 000681 */ 				if (__t__ (height_pt !== null)) {
/* 000682 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000682 */ 				}
/* 000682 */ 			}
/* 000683 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000684 */ 				if (__t__ (width_pt !== null)) {
/* 000685 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000685 */ 				}
/* 000686 */ 				if (__t__ (height_pt !== null)) {
/* 000687 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000687 */ 				}
/* 000687 */ 			}
/* 000689 */ 			var whoptc = '';
/* 000690 */ 			if (__t__ (width_pt !== null)) {
/* 000691 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000691 */ 			}
/* 000692 */ 			if (__t__ (height_pt !== null)) {
/* 000693 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000693 */ 			}
/* 000693 */ 		}
/* 000695 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000695 */ 	});},
/* 000698 */ 	cells_max_width_latexdim: '0.96\\linewidth',
/* 000699 */ 	cells_render_method: 'fit_width_test',
/* 000701 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000701 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000701 */ 			var target_id = null;
/* 000701 */ 		};
/* 000701 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000701 */ 			var render_cell_nodelist_contents_fn = null;
/* 000701 */ 		};
/* 000701 */ 		if (arguments.length) {
/* 000701 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000701 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000701 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000701 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000701 */ 					switch (__attrib0__) {
/* 000701 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 					}
/* 000701 */ 				}
/* 000701 */ 			}
/* 000701 */ 		}
/* 000701 */ 		else {
/* 000701 */ 		}
/* 000704 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000705 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000705 */ 				if (arguments.length) {
/* 000705 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 							switch (__attrib0__) {
/* 000705 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 							}
/* 000705 */ 						}
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 				else {
/* 000705 */ 				}
/* 000706 */ 				return (function () {
/* 000706 */ 					var __accu0__ = self;
/* 000706 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000706 */ 				}) ();
/* 000706 */ 			});
/* 000706 */ 		}
/* 000708 */ 		var stab_contents = '';
/* 000710 */ 		var cell_spans_styles = '';
/* 000711 */ 		var cell_hlines = [];
/* 000712 */ 		var cell_vlines = [];
/* 000714 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000714 */ 		var tabheight = __left0__ [0];
/* 000714 */ 		var tabwidth = __left0__ [1];
/* 000716 */ 		var __iterable0__ = cells_model.grid_data;
/* 000716 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000716 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000717 */ 			var stab_rowitems = [];
/* 000719 */ 			var __iterable1__ = row;
/* 000719 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000719 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000720 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000723 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000724 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000731 */ 					var thiscellspanopts = [];
/* 000732 */ 					var rowj = cell.placement.row_range.start;
/* 000733 */ 					var rowjend = cell.placement.row_range.end;
/* 000734 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000735 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000736 */ 						(function () {
/* 000736 */ 							var __accu0__ = thiscellspanopts;
/* 000736 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000736 */ 						}) ();
/* 000736 */ 					}
/* 000738 */ 					var colj = cell.placement.col_range.start;
/* 000739 */ 					var coljend = cell.placement.col_range.end;
/* 000740 */ 					var numcols = __sub__ (coljend, colj);
/* 000741 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000742 */ 						(function () {
/* 000742 */ 							var __accu0__ = thiscellspanopts;
/* 000742 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000742 */ 						}) ();
/* 000742 */ 					}
/* 000744 */ 					var thiscellstyles = 'm';
/* 000745 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000746 */ 						var thiscellstyles = 'l';
/* 000746 */ 					}
/* 000747 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000748 */ 						var thiscellstyles = 'c';
/* 000748 */ 					}
/* 000749 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000750 */ 						var thiscellstyles = 'r';
/* 000750 */ 					}
/* 000752 */ 					var bgcol = null;
/* 000753 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000754 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000754 */ 					}
/* 000755 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000756 */ 						var bgcol = 'flmTabCellColorRed';
/* 000756 */ 					}
/* 000757 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000758 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000758 */ 					}
/* 000759 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000760 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000760 */ 					}
/* 000762 */ 					if (__t__ (bgcol)) {
/* 000763 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000763 */ 					}
/* 000765 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000766 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000766 */ 					}
/* 000768 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000769 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000770 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000770 */ 						}
/* 000771 */ 						else {
/* 000772 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000772 */ 						}
/* 000775 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000776 */ 							(function () {
/* 000776 */ 								var __accu0__ = cell_hlines;
/* 000776 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000776 */ 							}) ();
/* 000776 */ 						}
/* 000776 */ 					}
/* 000778 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000779 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000780 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000780 */ 						}
/* 000781 */ 						else {
/* 000782 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000782 */ 						}
/* 000784 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000785 */ 							(function () {
/* 000785 */ 								var __accu0__ = cell_vlines;
/* 000785 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000785 */ 							}) ();
/* 000785 */ 						}
/* 000786 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000787 */ 							(function () {
/* 000787 */ 								var __accu0__ = cell_vlines;
/* 000787 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000787 */ 							}) ();
/* 000787 */ 						}
/* 000787 */ 					}
/* 000789 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000792 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000792 */ 							var __accu0__ = ',';
/* 000792 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000792 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000792 */ 					}
/* 000792 */ 				}
/* 000795 */ 				else {
/* 000797 */ 					var cell_content = '';
/* 000797 */ 				}
/* 000799 */ 				(function () {
/* 000799 */ 					var __accu0__ = stab_rowitems;
/* 000799 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000799 */ 				}) ();
/* 000799 */ 			}
/* 000801 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000801 */ 				var __accu0__ = '&';
/* 000801 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000801 */ 			}) (), '\\\\'), '\n'));
/* 000801 */ 		}
/* 000803 */ 		var _typeset_table_contents = function (raw_args, colspec_one) {
/* 000803 */ 			if (typeof raw_args == 'undefined' || (raw_args != null && raw_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000803 */ 				var raw_args = null;
/* 000803 */ 			};
/* 000803 */ 			if (typeof colspec_one == 'undefined' || (colspec_one != null && colspec_one.hasOwnProperty ("__kwargtrans__"))) {;
/* 000803 */ 				var colspec_one = null;
/* 000803 */ 			};
/* 000803 */ 			if (arguments.length) {
/* 000803 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000803 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000803 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000803 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000803 */ 						switch (__attrib0__) {
/* 000803 */ 							case 'raw_args': var raw_args = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 							case 'colspec_one': var colspec_one = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						}
/* 000803 */ 					}
/* 000803 */ 				}
/* 000803 */ 			}
/* 000803 */ 			else {
/* 000803 */ 			}
/* 000804 */ 			if (__t__ (raw_args !== null)) {
/* 000805 */ 				var tblrargs = raw_args;
/* 000805 */ 			}
/* 000806 */ 			else {
/* 000807 */ 				var tblrargs = __add__ (__add__ ('colspec={', __mul__ (colspec_one, tabwidth)), '}');
/* 000807 */ 			}
/* 000812 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{tblr}{', tblrargs), ','), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000812 */ 				var __accu0__ = '';
/* 000812 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000812 */ 					var __accu1__ = [];
/* 000812 */ 					var __iterable0__ = cell_hlines;
/* 000812 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000813 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000813 */ 						var rownrng = __left0__ [0];
/* 000813 */ 						var colnrng = __left0__ [1];
/* 000813 */ 						var lsty = __left0__ [2];
/* 000813 */ 						(function () {
/* 000813 */ 							var __accu2__ = __accu1__;
/* 000813 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000813 */ 						}) ();
/* 000813 */ 					}
/* 000813 */ 					return __accu1__;
/* 000813 */ 				}) ());
/* 000814 */ 			}) ()), (function () {
/* 000814 */ 				var __accu0__ = '';
/* 000814 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000814 */ 					var __accu1__ = [];
/* 000814 */ 					var __iterable0__ = cell_vlines;
/* 000814 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000815 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000815 */ 						var rownrng = __left0__ [0];
/* 000815 */ 						var colnrng = __left0__ [1];
/* 000815 */ 						var lsty = __left0__ [2];
/* 000815 */ 						(function () {
/* 000815 */ 							var __accu2__ = __accu1__;
/* 000815 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000815 */ 						}) ();
/* 000815 */ 					}
/* 000815 */ 					return __accu1__;
/* 000815 */ 				}) ());
/* 000815 */ 			}) ()), '}%'), '\n'), '\\toprule'), '\n'), stab_contents), '\\bottomrule'), '\n'), '\\end{tblr}%'), '\n');
/* 000815 */ 		};
/* 000824 */ 		if (__t__ (__eq__ (self.cells_render_method, 'simple'))) {
/* 000827 */ 			var s = __add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\flmCellsEndCenter ');
/* 000830 */ 			return s;
/* 000830 */ 		}
/* 000832 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test'))) {
/* 000840 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\long\\def\\flmTempTypesetThisTable#1{%'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({raw_args: '#1'}))), '}%'), '\n');
/* 000844 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000856 */ 			var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 000857 */ 			return s;
/* 000857 */ 		}
/* 000859 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test_dupl'))) {
/* 000882 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\def\\flmTmpMaxW{\\dimexpr '), self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox\\bgroup'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\egroup'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'X[-1]'}))), '\\fi'), '\n'), '\\flmCellsEndCenter ');
/* 000886 */ 			return s;
/* 000886 */ 		}
/* 000888 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid cells_render_method: ', __call__ (repr, null, self.cells_render_method)));
/* 000888 */ 		__except0__.__cause__ = null;
/* 000888 */ 		throw __except0__;
/* 000888 */ 	});}
/* 000888 */ });
/* 000895 */ export var _rx_delayed_markers = (function () {
/* 000895 */ 	var __accu0__ = re;
/* 000895 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000895 */ }) ();
/* 000904 */ export var _latex_preamble_suggested_defs = '\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{amsmath}\n\\flmRequirePackage{amssymb}\n\n\\flmRequirePackage{graphicx}\n\\flmRequirePackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% lines; quotes, addresses, blockquotes\n\\providecommand\\flmLinesParSkip{1ex plus 0.3ex minus 0.2ex}\n\\ifdefined\\flmLines\\else\n\\newenvironment{flmLines}{%\n  \\par\\begingroup\n  \\parindent=0pt\\relax\n  \\parskip=\\flmLinesParSkip\\relax\n}{%\n  \\par\\endgroup\n}\n\\fi\n\\ifdefined\\flmAddress\\else\n\\newenvironment{flmAddress}{%\n  \\par\n  \\begingroup\n  \\small\n}{%\n  \\par\n  \\endgroup\n}\n\\fi\n\\ifdefined\\flmBlockquote\\else\n\\newenvironment{flmBlockquote}{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n}{%\n  \\endlist\n}\n\\fi\n\n% for cells/tables\n\\flmRequirePackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n';
/* 001020 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001020 */ 	__module__: __name__,
/* 001021 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 001024 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001024 */ 		if (arguments.length) {
/* 001024 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001024 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001024 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001024 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001024 */ 					switch (__attrib0__) {
/* 001024 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001024 */ 					}
/* 001024 */ 				}
/* 001024 */ 			}
/* 001024 */ 		}
/* 001024 */ 		else {
/* 001024 */ 		}
/* 001025 */ 		return dict ({'package_suggested_defs': _latex_preamble_suggested_defs, 'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 001025 */ 	};},
/* 001030 */ 	format_name: 'latex'
/* 001030 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map