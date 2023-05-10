/* 000001 */ // Transcrypt'ed from Python, 2023-05-11 01:03:03
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
/* 000006 */ export {pyltxenc_lenc_get_builtin, UnicodeToLatexEncoder, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.latex';
/* 000012 */ export var logger = (function () {
/* 000012 */ 	var __accu0__ = logging;
/* 000012 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000012 */ }) ();
/* 000017 */ export var LatexFragmentRenderer =  __class__ ('LatexFragmentRenderer', [FragmentRenderer], {
/* 000017 */ 	__module__: __name__,
/* 000028 */ 	supports_delayed_render_markers: true,
/* 000035 */ 	heading_commands_by_level: dict ({1: 'section', 2: 'subsection', 3: 'subsubsection', 4: 'paragraph', 5: 'subparagraph', 6: 'subsubparagraph', 'theorem': 'flmTheoremHeading'}),
/* 000047 */ 	text_format_cmds: dict ({'textit': 'textit', 'textbf': 'textbf', 'defterm-term': 'displayterm'}),
/* 000053 */ 	latex_semantic_block_environments: dict ({'defterm': 'defterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike'}),
/* 000063 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000063 */ 		var kwargs = dict ();
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 				delete kwargs.__kwargtrans__;
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000064 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000067 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000067 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000067 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000067 */ 		}) (), unknown_char_policy: 'unihex'}));
/* 000067 */ 	});},
/* 000073 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		return (function () {
/* 000074 */ 			var __accu0__ = self.latex_encoder;
/* 000074 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000074 */ 		}) ();
/* 000074 */ 	});},
/* 000077 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000079 */ 		var content = value;
/* 000081 */ 		var __iterable0__ = __getslice__ (__call__ (list, null, text_formats), 0, null, __neg__ (1));
/* 000081 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000081 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000083 */ 			var txtfmtcmd = (function () {
/* 000083 */ 				var __accu0__ = self.text_format_cmds;
/* 000083 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000083 */ 			}) ();
/* 000084 */ 			if (__t__ (txtfmtcmd)) {
/* 000085 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000085 */ 			}
/* 000085 */ 		}
/* 000087 */ 		return content;
/* 000087 */ 	});},
/* 000090 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, annotations, items_content, render_context) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000093 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{itemize}', '% '), (function () {
/* 000093 */ 			var __accu0__ = ',';
/* 000093 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000093 */ 				var __accu1__ = [];
/* 000093 */ 				var __iterable0__ = annotations;
/* 000093 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000093 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000093 */ 					(function () {
/* 000093 */ 						var __accu2__ = __accu1__;
/* 000093 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000093 */ 							var __accu3__ = a;
/* 000093 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000093 */ 						}) ());
/* 000093 */ 					}) ();
/* 000093 */ 				}
/* 000093 */ 				return __accu1__;
/* 000093 */ 			}) ());
/* 000094 */ 		}) ()), '\n'), (function () {
/* 000094 */ 			var __accu0__ = items_content;
/* 000094 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000094 */ 		}) ()), '%\n'), '\\end{itemize}');
/* 000094 */ 	});},
/* 000099 */ 	use_phantom_section: true,
/* 000100 */ 	latex_label_prefix: 'x:',
/* 000102 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000102 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000102 */ 			var insert_phantom_section = true;
/* 000102 */ 		};
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000103 */ 		var s = '';
/* 000104 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000105 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000105 */ 		}
/* 000106 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000107 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000108 */ 		return s;
/* 000108 */ 	});},
/* 000112 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000115 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000115 */ 			var __accu0__ = self;
/* 000115 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000115 */ 		}) ()), '\n\n');
/* 000115 */ 	});},
/* 000119 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000120 */ 		return (function () {
/* 000120 */ 			var __accu0__ = self;
/* 000120 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000120 */ 				var __accu1__ = [];
/* 000121 */ 				var __iterable0__ = nodelist;
/* 000121 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000121 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000121 */ 					(function () {
/* 000121 */ 						var __accu2__ = __accu1__;
/* 000121 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000121 */ 							var __accu3__ = self;
/* 000121 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000121 */ 						}) ());
/* 000121 */ 					}) ();
/* 000121 */ 				}
/* 000121 */ 				return __accu1__;
/* 000121 */ 			}) (), render_context);
/* 000121 */ 		}) ();
/* 000121 */ 	});},
/* 000125 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000135 */ 		var result = '';
/* 000136 */ 		var __iterable0__ = content_list;
/* 000136 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000136 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000137 */ 			var result = (function () {
/* 000137 */ 				var __accu0__ = self;
/* 000137 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000137 */ 			}) ();
/* 000137 */ 		}
/* 000138 */ 		return result;
/* 000138 */ 	});},
/* 000140 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000142 */ 			var __left0__ = (function () {
/* 000142 */ 				var __accu0__ = a;
/* 000142 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000142 */ 			}) ();
/* 000142 */ 			var _ = __left0__ [0];
/* 000142 */ 			var last_line = __left0__ [1];
/* 000142 */ 		}
/* 000143 */ 		else {
/* 000144 */ 			var last_line = a;
/* 000144 */ 		}
/* 000145 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000147 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000147 */ 		}
/* 000148 */ 		if (__t__ ((function () {
/* 000148 */ 			var __accu0__ = re;
/* 000148 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000148 */ 		}) () !== null)) {
/* 000150 */ 			return __add__ (__add__ (a, ' '), b);
/* 000150 */ 		}
/* 000151 */ 		return __add__ (a, b);
/* 000151 */ 	});},
/* 000153 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000161 */ 		return __add__ ((function () {
/* 000161 */ 			var __accu0__ = '\n\n';
/* 000161 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000161 */ 				var __accu1__ = [];
/* 000161 */ 				var __iterable0__ = content_list;
/* 000161 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000161 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 					(function () {
/* 000161 */ 						var __accu2__ = __accu1__;
/* 000161 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000161 */ 							var __accu3__ = c;
/* 000161 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000161 */ 						}) ());
/* 000161 */ 					}) ();
/* 000161 */ 				}
/* 000161 */ 				return __accu1__;
/* 000161 */ 			}) ());
/* 000161 */ 		}) (), '\n');
/* 000161 */ 	});},
/* 000166 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000167 */ 		return (function () {
/* 000167 */ 			var __accu0__ = self;
/* 000167 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000167 */ 		}) ();
/* 000167 */ 	});},
/* 000169 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000171 */ 		return __add__ (__add__ ('% ', (function () {
/* 000171 */ 			var __accu0__ = debug_str;
/* 000171 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000171 */ 		}) ()), '\n');
/* 000171 */ 	});},
/* 000173 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000173 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000173 */ 			var annotations = null;
/* 000173 */ 		};
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000175 */ 			var annotations = [];
/* 000175 */ 		}
/* 000176 */ 		else {
/* 000177 */ 			var annotations = (function () {
/* 000177 */ 				var __accu0__ = [];
/* 000177 */ 				var __iterable0__ = annotations;
/* 000177 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000177 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000177 */ 					(function () {
/* 000177 */ 						var __accu1__ = __accu0__;
/* 000177 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000177 */ 							var __accu2__ = a;
/* 000177 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000177 */ 						}) ());
/* 000177 */ 					}) ();
/* 000177 */ 				}
/* 000177 */ 				return __accu0__;
/* 000177 */ 			}) ();
/* 000177 */ 		}
/* 000179 */ 		return '% {}\n'.format ((function () {
/* 000179 */ 			var __accu0__ = ' ';
/* 000179 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000179 */ 		}) ());
/* 000179 */ 	});},
/* 000181 */ 	latex_wrap_verbatim_macro: null,
/* 000183 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000183 */ 		var is_block_level = false;
/* 000183 */ 		var annotations = null;
/* 000183 */ 		var target_id = null;
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000186 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000187 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000187 */ 			}) ()), '}');
/* 000187 */ 		}
/* 000188 */ 		return (function () {
/* 000188 */ 			var __accu0__ = self;
/* 000188 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000188 */ 		}) ();
/* 000188 */ 	});},
/* 000190 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000190 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000190 */ 			var environmentname = null;
/* 000190 */ 		};
/* 000190 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000190 */ 			var target_id = null;
/* 000190 */ 		};
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000199 */ 		return __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000199 */ 			var __accu0__ = nodelist;
/* 000199 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000199 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000199 */ 	});},
/* 000202 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000206 */ 		var content = (function () {
/* 000206 */ 			var __accu0__ = self;
/* 000206 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000206 */ 		}) ();
/* 000212 */ 		return (function () {
/* 000212 */ 			var __accu0__ = self;
/* 000212 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000212 */ 		}) ();
/* 000212 */ 	});},
/* 000215 */ 	use_endnote_latex_command: null,
/* 000216 */ 	use_citation_latex_command: null,
/* 000218 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000218 */ 		var annotations = null;
/* 000218 */ 		var target_id = null;
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000221 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000222 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000222 */ 		}
/* 000225 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000226 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000226 */ 		}
/* 000230 */ 		return content;
/* 000230 */ 	});},
/* 000233 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000233 */ 		var annotations = null;
/* 000233 */ 		var target_id = null;
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000236 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000237 */ 			var annotations = [];
/* 000237 */ 		}
/* 000238 */ 		else {
/* 000239 */ 			var annotations = (function () {
/* 000239 */ 				var __accu0__ = [];
/* 000239 */ 				var __iterable0__ = annotations;
/* 000239 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000239 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000239 */ 					(function () {
/* 000239 */ 						var __accu1__ = __accu0__;
/* 000239 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000239 */ 							var __accu2__ = a;
/* 000239 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000239 */ 						}) ());
/* 000239 */ 					}) ();
/* 000239 */ 				}
/* 000239 */ 				return __accu0__;
/* 000239 */ 			}) ();
/* 000239 */ 		}
/* 000243 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000243 */ 			var __accu0__ = ',';
/* 000243 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000243 */ 		}) ()), ' ---\n');
/* 000244 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000244 */ 			var __accu0__ = ',';
/* 000244 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000244 */ 		}) ()), ' ---\n');
/* 000246 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000247 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000248 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000249 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000249 */ 		}
/* 000251 */ 		var lblcmd = '';
/* 000252 */ 		if (__t__ (target_id)) {
/* 000253 */ 			var lblcmd = (function () {
/* 000253 */ 				var __accu0__ = self;
/* 000253 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000253 */ 			}) ();
/* 000253 */ 		}
/* 000258 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000258 */ 		}) ());
/* 000258 */ 	});},
/* 000262 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000262 */ 		var target_id_generator = null;
/* 000262 */ 		var annotations = null;
/* 000262 */ 		var nested_depth = null;
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000273 */ 		var s_items = [];
/* 000275 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000275 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 			var j = __left0__ [0];
/* 000275 */ 			var item_content_nodelist = __left0__ [1];
/* 000277 */ 			var use_block_level = true;
/* 000278 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000281 */ 				var use_block_level = false;
/* 000281 */ 			}
/* 000283 */ 			// pass;
/* 000287 */ 			// pass;
/* 000291 */ 			var item_content = (function () {
/* 000291 */ 				var __accu0__ = self;
/* 000291 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000291 */ 			}) ();
/* 000297 */ 			var enumno = __add__ (1, j);
/* 000299 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000300 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000301 */ 				var tag_content = (function () {
/* 000301 */ 					var __accu0__ = self;
/* 000301 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000301 */ 				}) ();
/* 000301 */ 			}
/* 000302 */ 			else {
/* 000303 */ 				var tag_content = (function () {
/* 000303 */ 					var __accu0__ = self;
/* 000303 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000309 */ 			var itemlabel = '';
/* 000310 */ 			if (__t__ (target_id_generator !== null)) {
/* 000311 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000312 */ 				var itemlabel = (function () {
/* 000312 */ 					var __accu0__ = self;
/* 000312 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000315 */ 			(function () {
/* 000315 */ 				var __accu0__ = s_items;
/* 000315 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000315 */ 			}) ();
/* 000315 */ 		}
/* 000321 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000322 */ 			var annotations = [];
/* 000322 */ 		}
/* 000323 */ 		else {
/* 000324 */ 			var annotations = (function () {
/* 000324 */ 				var __accu0__ = [];
/* 000324 */ 				var __iterable0__ = annotations;
/* 000324 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000324 */ 					(function () {
/* 000324 */ 						var __accu1__ = __accu0__;
/* 000324 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000324 */ 							var __accu2__ = a;
/* 000324 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000324 */ 						}) ());
/* 000324 */ 					}) ();
/* 000324 */ 				}
/* 000324 */ 				return __accu0__;
/* 000324 */ 			}) ();
/* 000324 */ 		}
/* 000326 */ 		return (function () {
/* 000326 */ 			var __accu0__ = self;
/* 000328 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, __add__ (['enumeration'], annotations), (function () {
/* 000328 */ 				var __accu1__ = self;
/* 000328 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000328 */ 			}) (), render_context);
/* 000328 */ 		}) ();
/* 000328 */ 	});},
/* 000333 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000333 */ 		var heading_level = 1;
/* 000333 */ 		var target_id = null;
/* 000333 */ 		var inline_heading = false;
/* 000333 */ 		var annotations = null;
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000337 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000339 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000339 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000339 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000339 */ 			}) ())));
/* 000339 */ 			__except0__.__cause__ = null;
/* 000339 */ 			throw __except0__;
/* 000339 */ 		}
/* 000341 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000343 */ 		var title_content = (function () {
/* 000343 */ 			var __accu0__ = self;
/* 000343 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000343 */ 		}) ();
/* 000345 */ 		var labelcmd = '';
/* 000346 */ 		if (__t__ (target_id)) {
/* 000347 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000347 */ 		}
/* 000349 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000349 */ 	});},
/* 000354 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000354 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000354 */ 			var annotations = null;
/* 000354 */ 		};
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000356 */ 		var display_content = (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000356 */ 		}) ();
/* 000362 */ 		var annotations = __t__ (annotations) || [];
/* 000364 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000365 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000365 */ 		}
/* 000368 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000369 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000369 */ 		}
/* 000373 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000374 */ 			return (function () {
/* 000374 */ 				var __accu0__ = self;
/* 000374 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000374 */ 			}) ();
/* 000374 */ 		}
/* 000378 */ 		return (function () {
/* 000378 */ 			var __accu0__ = self;
/* 000378 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000378 */ 		}) ();
/* 000378 */ 	});},
/* 000383 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000384 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}');
/* 000384 */ 	});},
/* 000389 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000390 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', (function () {
/* 000390 */ 			var __accu0__ = href;
/* 000390 */ 			return __call__ (__accu0__.py_replace, __accu0__, '%', '\\%');
/* 000390 */ 		}) ()), '}{'), display_content), '}');
/* 000390 */ 	});},
/* 000392 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000393 */ 	});},
/* 000395 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000396 */ 	});},
/* 000398 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		return (function () {
/* 000399 */ 			var __accu0__ = _rx_delayed_markers;
/* 000399 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000399 */ 				if (arguments.length) {
/* 000399 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 							switch (__attrib0__) {
/* 000399 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 							}
/* 000399 */ 						}
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 				else {
/* 000399 */ 				}
/* 000400 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000400 */ 					var __accu1__ = m;
/* 000400 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000400 */ 				}) ()));
/* 000400 */ 			}), content);
/* 000400 */ 		}) ();
/* 000400 */ 	});},
/* 000407 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000410 */ 		var full_figcaption_rendered_list = [];
/* 000411 */ 		var float_designator = null;
/* 000412 */ 		if (__t__ (float_instance.number !== null)) {
/* 000415 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000415 */ 				var __accu0__ = self;
/* 000415 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000420 */ 			}) (), '~'), (function () {
/* 000420 */ 				var __accu0__ = self;
/* 000420 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000420 */ 			}) ());
/* 000420 */ 		}
/* 000425 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000429 */ 			var float_designator = (function () {
/* 000429 */ 				var __accu0__ = self;
/* 000429 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000429 */ 			}) ();
/* 000429 */ 		}
/* 000432 */ 		else {
/* 000436 */ 			// pass;
/* 000436 */ 		}
/* 000438 */ 		var labelcmd = '';
/* 000439 */ 		if (__t__ (float_designator !== null)) {
/* 000440 */ 			(function () {
/* 000440 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000440 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000440 */ 			}) ();
/* 000442 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000443 */ 				var labelcmd = (function () {
/* 000443 */ 					var __accu0__ = self;
/* 000443 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000443 */ 				}) ();
/* 000443 */ 			}
/* 000443 */ 		}
/* 000447 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000451 */ 			(function () {
/* 000451 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000451 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000451 */ 			}) ();
/* 000454 */ 			(function () {
/* 000454 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000455 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000455 */ 					var __accu1__ = self;
/* 000455 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000455 */ 				}) ());
/* 000455 */ 			}) ();
/* 000455 */ 		}
/* 000461 */ 		var rendered_float_caption = null;
/* 000462 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000465 */ 			var rendered_float_caption = __add__ ('\\par', (function () {
/* 000465 */ 				var __accu0__ = self;
/* 000467 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000467 */ 					var __accu1__ = self;
/* 000467 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000467 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000467 */ 			}) ());
/* 000467 */ 		}
/* 000473 */ 		var float_content_block_content = (function () {
/* 000473 */ 			var __accu0__ = self;
/* 000473 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000473 */ 		}) ();
/* 000479 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000480 */ 			var float_content_with_caption = (function () {
/* 000480 */ 				var __accu0__ = self;
/* 000480 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000480 */ 			}) ();
/* 000480 */ 		}
/* 000484 */ 		else {
/* 000485 */ 			var float_content_with_caption = float_content_block;
/* 000485 */ 		}
/* 000487 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', float_instance.float_type), '}[h!]%\n'), '\\centering{}'), float_content_with_caption), '\\end{'), float_instance.float_type), '}');
/* 000487 */ 	});},
/* 000494 */ 	graphics_raster_magnification: 1,
/* 000495 */ 	graphics_vector_magnification: 1,
/* 000497 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000499 */ 		var __left0__ = (function () {
/* 000499 */ 			var __accu0__ = self;
/* 000499 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000499 */ 		}) ();
/* 000499 */ 		var src_url = __left0__ [0];
/* 000499 */ 		var incloptions = __left0__ [1];
/* 000501 */ 		var opts = '';
/* 000502 */ 		if (__t__ (incloptions !== null)) {
/* 000503 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000503 */ 		}
/* 000505 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000505 */ 	});},
/* 000507 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000507 */ 		if (arguments.length) {
/* 000507 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000507 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000507 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000507 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000507 */ 					switch (__attrib0__) {
/* 000507 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 					}
/* 000507 */ 				}
/* 000507 */ 			}
/* 000507 */ 		}
/* 000507 */ 		else {
/* 000507 */ 		}
/* 000511 */ 		var whoptc = null;
/* 000512 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000514 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000514 */ 			var width_pt = __left0__ [0];
/* 000514 */ 			var height_pt = __left0__ [1];
/* 000516 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000517 */ 				if (__t__ (width_pt !== null)) {
/* 000518 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000518 */ 				}
/* 000519 */ 				if (__t__ (height_pt !== null)) {
/* 000520 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000520 */ 				}
/* 000520 */ 			}
/* 000521 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000522 */ 				if (__t__ (width_pt !== null)) {
/* 000523 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000523 */ 				}
/* 000524 */ 				if (__t__ (height_pt !== null)) {
/* 000525 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000525 */ 				}
/* 000525 */ 			}
/* 000527 */ 			var whoptc = '';
/* 000528 */ 			if (__t__ (width_pt !== null)) {
/* 000529 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000529 */ 			}
/* 000530 */ 			if (__t__ (height_pt !== null)) {
/* 000531 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000531 */ 			}
/* 000531 */ 		}
/* 000533 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000533 */ 	});},
/* 000535 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000535 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000535 */ 			var target_id = null;
/* 000535 */ 		};
/* 000535 */ 		if (arguments.length) {
/* 000535 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000535 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000535 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000535 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000535 */ 					switch (__attrib0__) {
/* 000535 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000535 */ 					}
/* 000535 */ 				}
/* 000535 */ 			}
/* 000535 */ 		}
/* 000535 */ 		else {
/* 000535 */ 		}
/* 000540 */ 		var stab_contents = '';
/* 000542 */ 		var cell_spans_styles = '';
/* 000543 */ 		var cell_hlines = [];
/* 000544 */ 		var cell_vlines = [];
/* 000546 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000546 */ 		var tabheight = __left0__ [0];
/* 000546 */ 		var tabwidth = __left0__ [1];
/* 000548 */ 		var __iterable0__ = cells_model.grid_data;
/* 000548 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000548 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000549 */ 			var stab_rowitems = [];
/* 000551 */ 			var __iterable1__ = row;
/* 000551 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000551 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000552 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000555 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000556 */ 					var cell_content = (function () {
/* 000556 */ 						var __accu0__ = self;
/* 000556 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000556 */ 					}) ();
/* 000563 */ 					var thiscellspanopts = [];
/* 000564 */ 					var rowj = cell.placement.row_range.start;
/* 000565 */ 					var rowjend = cell.placement.row_range.end;
/* 000566 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000567 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000568 */ 						(function () {
/* 000568 */ 							var __accu0__ = thiscellspanopts;
/* 000568 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000568 */ 						}) ();
/* 000568 */ 					}
/* 000570 */ 					var colj = cell.placement.col_range.start;
/* 000571 */ 					var coljend = cell.placement.col_range.end;
/* 000572 */ 					var numcols = __sub__ (coljend, colj);
/* 000573 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000574 */ 						(function () {
/* 000574 */ 							var __accu0__ = thiscellspanopts;
/* 000574 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000574 */ 						}) ();
/* 000574 */ 					}
/* 000576 */ 					var thiscellstyles = 'm';
/* 000577 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000578 */ 						var thiscellstyles = 'l';
/* 000578 */ 					}
/* 000579 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000580 */ 						var thiscellstyles = 'c';
/* 000580 */ 					}
/* 000581 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000582 */ 						var thiscellstyles = 'r';
/* 000582 */ 					}
/* 000584 */ 					var bgcol = null;
/* 000585 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000586 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000586 */ 					}
/* 000587 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000588 */ 						var bgcol = 'flmTabCellColorRed';
/* 000588 */ 					}
/* 000589 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000590 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000590 */ 					}
/* 000591 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000592 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000592 */ 					}
/* 000594 */ 					if (__t__ (bgcol)) {
/* 000595 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000595 */ 					}
/* 000597 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000598 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000598 */ 					}
/* 000600 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000601 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000602 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000602 */ 						}
/* 000603 */ 						else {
/* 000604 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000604 */ 						}
/* 000607 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000608 */ 							(function () {
/* 000608 */ 								var __accu0__ = cell_hlines;
/* 000608 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000608 */ 							}) ();
/* 000608 */ 						}
/* 000608 */ 					}
/* 000610 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000611 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000612 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000612 */ 						}
/* 000613 */ 						else {
/* 000614 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000614 */ 						}
/* 000616 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000617 */ 							(function () {
/* 000617 */ 								var __accu0__ = cell_vlines;
/* 000617 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000617 */ 							}) ();
/* 000617 */ 						}
/* 000618 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000619 */ 							(function () {
/* 000619 */ 								var __accu0__ = cell_vlines;
/* 000619 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000619 */ 							}) ();
/* 000619 */ 						}
/* 000619 */ 					}
/* 000621 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000624 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000624 */ 							var __accu0__ = ',';
/* 000624 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000624 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000624 */ 					}
/* 000624 */ 				}
/* 000627 */ 				else {
/* 000629 */ 					var cell_content = '';
/* 000629 */ 				}
/* 000631 */ 				(function () {
/* 000631 */ 					var __accu0__ = stab_rowitems;
/* 000631 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000631 */ 				}) ();
/* 000631 */ 			}
/* 000633 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000633 */ 				var __accu0__ = '&';
/* 000633 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000633 */ 			}) (), '\\\\'), '\n'));
/* 000633 */ 		}
/* 000644 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{center}', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000644 */ 			var __accu0__ = '';
/* 000644 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000644 */ 				var __accu1__ = [];
/* 000644 */ 				var __iterable0__ = cell_hlines;
/* 000644 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000645 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000645 */ 					var rownrng = __left0__ [0];
/* 000645 */ 					var colnrng = __left0__ [1];
/* 000645 */ 					var lsty = __left0__ [2];
/* 000645 */ 					(function () {
/* 000645 */ 						var __accu2__ = __accu1__;
/* 000645 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000645 */ 					}) ();
/* 000645 */ 				}
/* 000645 */ 				return __accu1__;
/* 000645 */ 			}) ());
/* 000646 */ 		}) ()), (function () {
/* 000646 */ 			var __accu0__ = '';
/* 000646 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000646 */ 				var __accu1__ = [];
/* 000646 */ 				var __iterable0__ = cell_vlines;
/* 000646 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000647 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000647 */ 					var rownrng = __left0__ [0];
/* 000647 */ 					var colnrng = __left0__ [1];
/* 000647 */ 					var lsty = __left0__ [2];
/* 000647 */ 					(function () {
/* 000647 */ 						var __accu2__ = __accu1__;
/* 000647 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000647 */ 					}) ();
/* 000647 */ 				}
/* 000647 */ 				return __accu1__;
/* 000647 */ 			}) ());
/* 000647 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000652 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000653 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000654 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000655 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000657 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000668 */ 		var s = __call__ (__iadd__, null, s, '\\end{center}');
/* 000670 */ 		return s;
/* 000670 */ 	});},
/* 000672 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000672 */ });
/* 000677 */ export var _rx_delayed_markers = (function () {
/* 000677 */ 	var __accu0__ = re;
/* 000677 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000677 */ }) ();
/* 000686 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\defterm\\else\n\\newenvironment{defterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\itshape\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n\\providecommand\\displayterm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\n';
/* 000750 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000750 */ 	__module__: __name__,
/* 000751 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000754 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000754 */ 		if (arguments.length) {
/* 000754 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000754 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000754 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000754 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000754 */ 					switch (__attrib0__) {
/* 000754 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000754 */ 					}
/* 000754 */ 				}
/* 000754 */ 			}
/* 000754 */ 		}
/* 000754 */ 		else {
/* 000754 */ 		}
/* 000755 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000755 */ 	};},
/* 000759 */ 	format_name: 'latex'
/* 000759 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map