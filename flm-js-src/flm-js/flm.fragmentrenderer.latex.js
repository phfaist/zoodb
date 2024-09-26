/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 17:30:25
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
/* 000203 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000204 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000204 */ 				var __accu0__ = self;
/* 000204 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000204 */ 			}) ()), '}');
/* 000204 */ 		}
/* 000205 */ 		return (function () {
/* 000205 */ 			var __accu0__ = self;
/* 000205 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000205 */ 		}) ();
/* 000205 */ 	});},
/* 000207 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000207 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000207 */ 			var environmentname = null;
/* 000207 */ 		};
/* 000207 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000207 */ 			var target_id = null;
/* 000207 */ 		};
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000215 */ 		var __left0__ = delimiters;
/* 000215 */ 		var begin_delim = __left0__ [0];
/* 000215 */ 		var end_delim = __left0__ [1];
/* 000216 */ 		if (__t__ (environmentname)) {
/* 000217 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000218 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000218 */ 		}
/* 000221 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000221 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000221 */ 		}) ()), end_delim);
/* 000221 */ 	});},
/* 000224 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000228 */ 		var content = (function () {
/* 000228 */ 			var __accu0__ = self;
/* 000228 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000228 */ 		}) ();
/* 000234 */ 		return (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000237 */ 	use_endnote_latex_command: null,
/* 000238 */ 	use_citation_latex_command: null,
/* 000240 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000240 */ 		var annotations = null;
/* 000240 */ 		var target_id = null;
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000243 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000244 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000244 */ 		}
/* 000247 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000248 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000248 */ 		}
/* 000252 */ 		return content;
/* 000252 */ 	});},
/* 000255 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000255 */ 		var annotations = null;
/* 000255 */ 		var target_id = null;
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000258 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000259 */ 			var annotations = [];
/* 000259 */ 		}
/* 000260 */ 		else {
/* 000261 */ 			var annotations = (function () {
/* 000261 */ 				var __accu0__ = [];
/* 000261 */ 				var __iterable0__ = annotations;
/* 000261 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000261 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000261 */ 					(function () {
/* 000261 */ 						var __accu1__ = __accu0__;
/* 000261 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000261 */ 							var __accu2__ = a;
/* 000261 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000261 */ 						}) ());
/* 000261 */ 					}) ();
/* 000261 */ 				}
/* 000261 */ 				return __accu0__;
/* 000261 */ 			}) ();
/* 000261 */ 		}
/* 000265 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000265 */ 			var __accu0__ = ',';
/* 000265 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000265 */ 		}) ()), ' ---\n');
/* 000266 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000266 */ 			var __accu0__ = ',';
/* 000266 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000266 */ 		}) ()), ' ---\n');
/* 000268 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000269 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000270 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000271 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000271 */ 		}
/* 000273 */ 		var lblcmd = '';
/* 000274 */ 		if (__t__ (target_id)) {
/* 000275 */ 			var lblcmd = (function () {
/* 000275 */ 				var __accu0__ = self;
/* 000275 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000275 */ 			}) ();
/* 000275 */ 		}
/* 000280 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000280 */ 			var __accu0__ = self;
/* 000280 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000280 */ 		}) ());
/* 000280 */ 	});},
/* 000284 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000284 */ 		var target_id_generator = null;
/* 000284 */ 		var annotations = null;
/* 000284 */ 		var nested_depth = null;
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000295 */ 		var s_items = [];
/* 000297 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000297 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000297 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000297 */ 			var j = __left0__ [0];
/* 000297 */ 			var item_content_nodelist = __left0__ [1];
/* 000299 */ 			var use_block_level = true;
/* 000300 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000303 */ 				var use_block_level = false;
/* 000303 */ 			}
/* 000305 */ 			// pass;
/* 000309 */ 			// pass;
/* 000313 */ 			var item_content = (function () {
/* 000313 */ 				var __accu0__ = self;
/* 000313 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000313 */ 			}) ();
/* 000319 */ 			var enumno = __add__ (1, j);
/* 000321 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000322 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000323 */ 				var tag_content = (function () {
/* 000323 */ 					var __accu0__ = self;
/* 000323 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000323 */ 				}) ();
/* 000323 */ 			}
/* 000324 */ 			else {
/* 000325 */ 				var tag_content = (function () {
/* 000325 */ 					var __accu0__ = self;
/* 000325 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000325 */ 				}) ();
/* 000325 */ 			}
/* 000331 */ 			var itemlabel = '';
/* 000332 */ 			if (__t__ (target_id_generator !== null)) {
/* 000333 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000334 */ 				if (__t__ (this_target_id !== null)) {
/* 000335 */ 					var itemlabel = (function () {
/* 000335 */ 						var __accu0__ = self;
/* 000335 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000335 */ 					}) ();
/* 000335 */ 				}
/* 000335 */ 			}
/* 000338 */ 			(function () {
/* 000338 */ 				var __accu0__ = s_items;
/* 000338 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000338 */ 			}) ();
/* 000338 */ 		}
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
/* 000349 */ 		var ltx_environment = 'itemize';
/* 000351 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000354 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000354 */ 		}
/* 000356 */ 		return (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000359 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000359 */ 				var __accu1__ = self;
/* 000359 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000359 */ 			}) (), render_context);
/* 000359 */ 		}) ();
/* 000359 */ 	});},
/* 000364 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000364 */ 		var heading_level = 1;
/* 000364 */ 		var inline_heading = false;
/* 000364 */ 		var target_id = null;
/* 000364 */ 		var annotations = null;
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000371 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000373 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000373 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000373 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000373 */ 			}) ())));
/* 000373 */ 			__except0__.__cause__ = null;
/* 000373 */ 			throw __except0__;
/* 000373 */ 		}
/* 000375 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000377 */ 		var title_content = (function () {
/* 000377 */ 			var __accu0__ = self;
/* 000377 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000377 */ 		}) ();
/* 000379 */ 		var labelcmd = '';
/* 000380 */ 		if (__t__ (target_id)) {
/* 000381 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000381 */ 		}
/* 000383 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000383 */ 	});},
/* 000388 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000388 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var annotations = null;
/* 000388 */ 		};
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000390 */ 		var display_content = (function () {
/* 000390 */ 			var __accu0__ = self;
/* 000390 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000390 */ 		}) ();
/* 000396 */ 		var annotations = __t__ (annotations) || [];
/* 000398 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000399 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000399 */ 		}
/* 000402 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000403 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000403 */ 		}
/* 000407 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000408 */ 			return (function () {
/* 000408 */ 				var __accu0__ = self;
/* 000408 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000408 */ 			}) ();
/* 000408 */ 		}
/* 000412 */ 		return (function () {
/* 000412 */ 			var __accu0__ = self;
/* 000412 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000412 */ 		}) ();
/* 000412 */ 	});},
/* 000417 */ 	debug_disable_link_hyperref: false,
/* 000419 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000419 */ 		if (arguments.length) {
/* 000419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 					switch (__attrib0__) {
/* 000419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 		}
/* 000419 */ 		else {
/* 000419 */ 		}
/* 000420 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000421 */ 			return display_content;
/* 000421 */ 		}
/* 000422 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}');
/* 000422 */ 	});},
/* 000427 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', (function () {
/* 000428 */ 			var __accu0__ = href;
/* 000428 */ 			return __call__ (__accu0__.py_replace, __accu0__, '%', '\\%');
/* 000428 */ 		}) ()), '}{'), display_content), '}');
/* 000428 */ 	});},
/* 000430 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000431 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000431 */ 	});},
/* 000433 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
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
/* 000434 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000434 */ 	});},
/* 000436 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		return (function () {
/* 000437 */ 			var __accu0__ = _rx_delayed_markers;
/* 000437 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000437 */ 				if (arguments.length) {
/* 000437 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 							switch (__attrib0__) {
/* 000437 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 							}
/* 000437 */ 						}
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 				else {
/* 000437 */ 				}
/* 000438 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000438 */ 					var __accu1__ = m;
/* 000438 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000438 */ 				}) ()));
/* 000438 */ 			}), content);
/* 000438 */ 		}) ();
/* 000438 */ 	});},
/* 000445 */ 	float_placement_policy: dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})}),
/* 000463 */ 	float_use_centering: '\\centering{}',
/* 000464 */ 	float_caption_join: ': ',
/* 000465 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000466 */ 	float_latex_after_caption: '}',
/* 000468 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000471 */ 		var has_number = false;
/* 000472 */ 		var has_caption = false;
/* 000474 */ 		var full_figcaption_rendered_list = [];
/* 000475 */ 		var float_designator = null;
/* 000476 */ 		if (__t__ (float_instance.number !== null)) {
/* 000477 */ 			var has_number = true;
/* 000480 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000480 */ 				var __accu0__ = self;
/* 000480 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000485 */ 			}) (), '~'), (function () {
/* 000485 */ 				var __accu0__ = self;
/* 000485 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000485 */ 			}) ());
/* 000485 */ 		}
/* 000490 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000494 */ 			var float_designator = (function () {
/* 000494 */ 				var __accu0__ = self;
/* 000494 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000494 */ 			}) ();
/* 000494 */ 		}
/* 000497 */ 		else {
/* 000501 */ 			// pass;
/* 000501 */ 		}
/* 000503 */ 		var labelcmd = '';
/* 000504 */ 		if (__t__ (float_designator !== null)) {
/* 000505 */ 			(function () {
/* 000505 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000505 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000505 */ 			}) ();
/* 000507 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000508 */ 				var labelcmd = (function () {
/* 000508 */ 					var __accu0__ = self;
/* 000508 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000508 */ 				}) ();
/* 000508 */ 			}
/* 000508 */ 		}
/* 000512 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000513 */ 			var has_caption = true;
/* 000517 */ 			(function () {
/* 000517 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000517 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000517 */ 			}) ();
/* 000521 */ 			(function () {
/* 000521 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000522 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000522 */ 					var __accu1__ = self;
/* 000522 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000522 */ 				}) ());
/* 000522 */ 			}) ();
/* 000522 */ 		}
/* 000528 */ 		var rendered_float_caption = null;
/* 000529 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000532 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000532 */ 				var __accu0__ = self;
/* 000534 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000534 */ 					var __accu1__ = self;
/* 000534 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000534 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000534 */ 			}) ()), self.float_latex_after_caption);
/* 000534 */ 		}
/* 000541 */ 		var float_content_block_content = (function () {
/* 000541 */ 			var __accu0__ = self;
/* 000541 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000541 */ 		}) ();
/* 000547 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000548 */ 			var float_content_with_caption = (function () {
/* 000548 */ 				var __accu0__ = self;
/* 000548 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000548 */ 			}) ();
/* 000548 */ 		}
/* 000552 */ 		else {
/* 000553 */ 			var float_content_with_caption = float_content_block_content;
/* 000553 */ 		}
/* 000555 */ 		var env_name = float_instance.float_type;
/* 000556 */ 		var env_options_str = '[h!]';
/* 000557 */ 		var centering = self.float_use_centering;
/* 000559 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000560 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000560 */ 		}
/* 000561 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000562 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000562 */ 		}
/* 000563 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000564 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000564 */ 		}
/* 000565 */ 		else {
/* 000566 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000566 */ 		}
/* 000568 */ 		if (__t__ (__in__ ('environment', pl_policy))) {
/* 000569 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000569 */ 		}
/* 000570 */ 		if (__t__ (__in__ ('environment_options_str', pl_policy))) {
/* 000571 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000571 */ 		}
/* 000572 */ 		if (__t__ (__in__ ('centering', pl_policy))) {
/* 000573 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000573 */ 		}
/* 000575 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000575 */ 	});},
/* 000583 */ 	graphics_raster_magnification: 1,
/* 000584 */ 	graphics_vector_magnification: 1,
/* 000586 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000586 */ 		if (arguments.length) {
/* 000586 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000586 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000586 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000586 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000586 */ 					switch (__attrib0__) {
/* 000586 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 					}
/* 000586 */ 				}
/* 000586 */ 			}
/* 000586 */ 		}
/* 000586 */ 		else {
/* 000586 */ 		}
/* 000589 */ 		var __left0__ = (function () {
/* 000589 */ 			var __accu0__ = self;
/* 000589 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000589 */ 		}) ();
/* 000589 */ 		var src_url = __left0__ [0];
/* 000589 */ 		var incloptions = __left0__ [1];
/* 000591 */ 		var opts = '';
/* 000592 */ 		if (__t__ (incloptions !== null)) {
/* 000593 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000593 */ 		}
/* 000595 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000595 */ 	});},
/* 000597 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000597 */ 		if (arguments.length) {
/* 000597 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000597 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000597 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000597 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000597 */ 					switch (__attrib0__) {
/* 000597 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000597 */ 					}
/* 000597 */ 				}
/* 000597 */ 			}
/* 000597 */ 		}
/* 000597 */ 		else {
/* 000597 */ 		}
/* 000599 */ 		var whoptc = null;
/* 000600 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000602 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000602 */ 			var width_pt = __left0__ [0];
/* 000602 */ 			var height_pt = __left0__ [1];
/* 000604 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000605 */ 				if (__t__ (width_pt !== null)) {
/* 000606 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000606 */ 				}
/* 000607 */ 				if (__t__ (height_pt !== null)) {
/* 000608 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000608 */ 				}
/* 000608 */ 			}
/* 000609 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000610 */ 				if (__t__ (width_pt !== null)) {
/* 000611 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000611 */ 				}
/* 000612 */ 				if (__t__ (height_pt !== null)) {
/* 000613 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000613 */ 				}
/* 000613 */ 			}
/* 000615 */ 			var whoptc = '';
/* 000616 */ 			if (__t__ (width_pt !== null)) {
/* 000617 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000617 */ 			}
/* 000618 */ 			if (__t__ (height_pt !== null)) {
/* 000619 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000619 */ 			}
/* 000619 */ 		}
/* 000621 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000621 */ 	});},
/* 000624 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000624 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000624 */ 			var target_id = null;
/* 000624 */ 		};
/* 000624 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000624 */ 			var render_cell_nodelist_contents_fn = null;
/* 000624 */ 		};
/* 000624 */ 		if (arguments.length) {
/* 000624 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000624 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000624 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000624 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000624 */ 					switch (__attrib0__) {
/* 000624 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 					}
/* 000624 */ 				}
/* 000624 */ 			}
/* 000624 */ 		}
/* 000624 */ 		else {
/* 000624 */ 		}
/* 000627 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000628 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000628 */ 				if (arguments.length) {
/* 000628 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000628 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000628 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000628 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000628 */ 							switch (__attrib0__) {
/* 000628 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000628 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000628 */ 							}
/* 000628 */ 						}
/* 000628 */ 					}
/* 000628 */ 				}
/* 000628 */ 				else {
/* 000628 */ 				}
/* 000629 */ 				return (function () {
/* 000629 */ 					var __accu0__ = self;
/* 000629 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000629 */ 				}) ();
/* 000629 */ 			});
/* 000629 */ 		}
/* 000631 */ 		var stab_contents = '';
/* 000633 */ 		var cell_spans_styles = '';
/* 000634 */ 		var cell_hlines = [];
/* 000635 */ 		var cell_vlines = [];
/* 000637 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000637 */ 		var tabheight = __left0__ [0];
/* 000637 */ 		var tabwidth = __left0__ [1];
/* 000639 */ 		var __iterable0__ = cells_model.grid_data;
/* 000639 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000639 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000640 */ 			var stab_rowitems = [];
/* 000642 */ 			var __iterable1__ = row;
/* 000642 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000642 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000643 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000646 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000647 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000654 */ 					var thiscellspanopts = [];
/* 000655 */ 					var rowj = cell.placement.row_range.start;
/* 000656 */ 					var rowjend = cell.placement.row_range.end;
/* 000657 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000658 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000659 */ 						(function () {
/* 000659 */ 							var __accu0__ = thiscellspanopts;
/* 000659 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000659 */ 						}) ();
/* 000659 */ 					}
/* 000661 */ 					var colj = cell.placement.col_range.start;
/* 000662 */ 					var coljend = cell.placement.col_range.end;
/* 000663 */ 					var numcols = __sub__ (coljend, colj);
/* 000664 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000665 */ 						(function () {
/* 000665 */ 							var __accu0__ = thiscellspanopts;
/* 000665 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000665 */ 						}) ();
/* 000665 */ 					}
/* 000667 */ 					var thiscellstyles = 'm';
/* 000668 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000669 */ 						var thiscellstyles = 'l';
/* 000669 */ 					}
/* 000670 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000671 */ 						var thiscellstyles = 'c';
/* 000671 */ 					}
/* 000672 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000673 */ 						var thiscellstyles = 'r';
/* 000673 */ 					}
/* 000675 */ 					var bgcol = null;
/* 000676 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000677 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000677 */ 					}
/* 000678 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000679 */ 						var bgcol = 'flmTabCellColorRed';
/* 000679 */ 					}
/* 000680 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000681 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000681 */ 					}
/* 000682 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000683 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000683 */ 					}
/* 000685 */ 					if (__t__ (bgcol)) {
/* 000686 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000686 */ 					}
/* 000688 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000689 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000689 */ 					}
/* 000691 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000692 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000693 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000693 */ 						}
/* 000694 */ 						else {
/* 000695 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000695 */ 						}
/* 000698 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000699 */ 							(function () {
/* 000699 */ 								var __accu0__ = cell_hlines;
/* 000699 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000699 */ 							}) ();
/* 000699 */ 						}
/* 000699 */ 					}
/* 000701 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000702 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000703 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000703 */ 						}
/* 000704 */ 						else {
/* 000705 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000705 */ 						}
/* 000707 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000708 */ 							(function () {
/* 000708 */ 								var __accu0__ = cell_vlines;
/* 000708 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000708 */ 							}) ();
/* 000708 */ 						}
/* 000709 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000710 */ 							(function () {
/* 000710 */ 								var __accu0__ = cell_vlines;
/* 000710 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000710 */ 							}) ();
/* 000710 */ 						}
/* 000710 */ 					}
/* 000712 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000715 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000715 */ 							var __accu0__ = ',';
/* 000715 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000715 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000715 */ 					}
/* 000715 */ 				}
/* 000718 */ 				else {
/* 000720 */ 					var cell_content = '';
/* 000720 */ 				}
/* 000722 */ 				(function () {
/* 000722 */ 					var __accu0__ = stab_rowitems;
/* 000722 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000722 */ 				}) ();
/* 000722 */ 			}
/* 000724 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000724 */ 				var __accu0__ = '&';
/* 000724 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000724 */ 			}) (), '\\\\'), '\n'));
/* 000724 */ 		}
/* 000735 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{center}', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000735 */ 			var __accu0__ = '';
/* 000735 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000735 */ 				var __accu1__ = [];
/* 000735 */ 				var __iterable0__ = cell_hlines;
/* 000735 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000736 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000736 */ 					var rownrng = __left0__ [0];
/* 000736 */ 					var colnrng = __left0__ [1];
/* 000736 */ 					var lsty = __left0__ [2];
/* 000736 */ 					(function () {
/* 000736 */ 						var __accu2__ = __accu1__;
/* 000736 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000736 */ 					}) ();
/* 000736 */ 				}
/* 000736 */ 				return __accu1__;
/* 000736 */ 			}) ());
/* 000737 */ 		}) ()), (function () {
/* 000737 */ 			var __accu0__ = '';
/* 000737 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000737 */ 				var __accu1__ = [];
/* 000737 */ 				var __iterable0__ = cell_vlines;
/* 000737 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000738 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000738 */ 					var rownrng = __left0__ [0];
/* 000738 */ 					var colnrng = __left0__ [1];
/* 000738 */ 					var lsty = __left0__ [2];
/* 000738 */ 					(function () {
/* 000738 */ 						var __accu2__ = __accu1__;
/* 000738 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000738 */ 					}) ();
/* 000738 */ 				}
/* 000738 */ 				return __accu1__;
/* 000738 */ 			}) ());
/* 000738 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000743 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000744 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000745 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000746 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000748 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000759 */ 		var s = __call__ (__iadd__, null, s, '\\end{center}');
/* 000761 */ 		return s;
/* 000761 */ 	});},
/* 000763 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000763 */ });
/* 000768 */ export var _rx_delayed_markers = (function () {
/* 000768 */ 	var __accu0__ = re;
/* 000768 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000768 */ }) ();
/* 000777 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n';
/* 000854 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000854 */ 	__module__: __name__,
/* 000855 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000858 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000858 */ 		if (arguments.length) {
/* 000858 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000858 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000858 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000858 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000858 */ 					switch (__attrib0__) {
/* 000858 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000858 */ 					}
/* 000858 */ 				}
/* 000858 */ 			}
/* 000858 */ 		}
/* 000858 */ 		else {
/* 000858 */ 		}
/* 000859 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000859 */ 	};},
/* 000863 */ 	format_name: 'latex'
/* 000863 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map