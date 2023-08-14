/* 000001 */ // Transcrypt'ed from Python, 2023-08-14 17:27:47
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
/* 000046 */ 	text_format_cmds: dict ({'textit': 'textit', 'textbf': 'textbf', 'defterm-term': 'displayterm'}),
/* 000052 */ 	latex_semantic_block_environments: dict ({'defterm': 'defterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike'}),
/* 000062 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000066 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000066 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000066 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000066 */ 		}) (), unknown_char_policy: 'unihex'}));
/* 000066 */ 	});},
/* 000072 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000073 */ 		return (function () {
/* 000073 */ 			var __accu0__ = self.latex_encoder;
/* 000073 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000073 */ 		}) ();
/* 000073 */ 	});},
/* 000076 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000078 */ 		var content = value;
/* 000080 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
/* 000080 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 			var txtfmtcmd = (function () {
/* 000082 */ 				var __accu0__ = self.text_format_cmds;
/* 000082 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000082 */ 			}) ();
/* 000083 */ 			if (__t__ (txtfmtcmd)) {
/* 000084 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000084 */ 			}
/* 000084 */ 		}
/* 000086 */ 		return content;
/* 000086 */ 	});},
/* 000089 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000093 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
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
/* 000094 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000094 */ 	});},
/* 000099 */ 	use_phantom_section: true,
/* 000100 */ 	latex_label_prefix: 'x:',
/* 000102 */ 	debug_disable_pin_labels: false,
/* 000104 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000104 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000104 */ 			var insert_phantom_section = true;
/* 000104 */ 		};
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000106 */ 			return '';
/* 000106 */ 		}
/* 000107 */ 		var s = '';
/* 000108 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000109 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000109 */ 		}
/* 000110 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000111 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000112 */ 		return s;
/* 000112 */ 	});},
/* 000116 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000119 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000119 */ 			var __accu0__ = self;
/* 000119 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000119 */ 		}) ()), '\n\n');
/* 000119 */ 	});},
/* 000123 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		return (function () {
/* 000124 */ 			var __accu0__ = self;
/* 000124 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000124 */ 				var __accu1__ = [];
/* 000125 */ 				var __iterable0__ = nodelist;
/* 000125 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 					(function () {
/* 000125 */ 						var __accu2__ = __accu1__;
/* 000125 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000125 */ 							var __accu3__ = self;
/* 000125 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000125 */ 						}) ());
/* 000125 */ 					}) ();
/* 000125 */ 				}
/* 000125 */ 				return __accu1__;
/* 000125 */ 			}) (), render_context);
/* 000125 */ 		}) ();
/* 000125 */ 	});},
/* 000129 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000139 */ 		var result = '';
/* 000140 */ 		var __iterable0__ = content_list;
/* 000140 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000140 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000141 */ 			var result = (function () {
/* 000141 */ 				var __accu0__ = self;
/* 000141 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000142 */ 		return result;
/* 000142 */ 	});},
/* 000144 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000146 */ 			var __left0__ = (function () {
/* 000146 */ 				var __accu0__ = a;
/* 000146 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000146 */ 			}) ();
/* 000146 */ 			var _ = __left0__ [0];
/* 000146 */ 			var last_line = __left0__ [1];
/* 000146 */ 		}
/* 000147 */ 		else {
/* 000148 */ 			var last_line = a;
/* 000148 */ 		}
/* 000149 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000151 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000151 */ 		}
/* 000152 */ 		if (__t__ ((function () {
/* 000152 */ 			var __accu0__ = re;
/* 000152 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000152 */ 		}) () !== null)) {
/* 000154 */ 			return __add__ (__add__ (a, ' '), b);
/* 000154 */ 		}
/* 000155 */ 		return __add__ (a, b);
/* 000155 */ 	});},
/* 000157 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000165 */ 		return __add__ ((function () {
/* 000165 */ 			var __accu0__ = '\n\n';
/* 000165 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000165 */ 				var __accu1__ = [];
/* 000165 */ 				var __iterable0__ = content_list;
/* 000165 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000165 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000165 */ 					(function () {
/* 000165 */ 						var __accu2__ = __accu1__;
/* 000165 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000165 */ 							var __accu3__ = c;
/* 000165 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000165 */ 						}) ());
/* 000165 */ 					}) ();
/* 000165 */ 				}
/* 000165 */ 				return __accu1__;
/* 000165 */ 			}) ());
/* 000165 */ 		}) (), '\n');
/* 000165 */ 	});},
/* 000170 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		return (function () {
/* 000171 */ 			var __accu0__ = self;
/* 000171 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000171 */ 		}) ();
/* 000171 */ 	});},
/* 000173 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000175 */ 		return __add__ (__add__ ('% ', (function () {
/* 000175 */ 			var __accu0__ = debug_str;
/* 000175 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000175 */ 		}) ()), '\n');
/* 000175 */ 	});},
/* 000177 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000177 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000177 */ 			var annotations = null;
/* 000177 */ 		};
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000179 */ 			var annotations = [];
/* 000179 */ 		}
/* 000180 */ 		else {
/* 000181 */ 			var annotations = (function () {
/* 000181 */ 				var __accu0__ = [];
/* 000181 */ 				var __iterable0__ = annotations;
/* 000181 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu1__ = __accu0__;
/* 000181 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000181 */ 							var __accu2__ = a;
/* 000181 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000181 */ 						}) ());
/* 000181 */ 					}) ();
/* 000181 */ 				}
/* 000181 */ 				return __accu0__;
/* 000181 */ 			}) ();
/* 000181 */ 		}
/* 000183 */ 		return '% {}\n'.format ((function () {
/* 000183 */ 			var __accu0__ = ' ';
/* 000183 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000183 */ 		}) ());
/* 000183 */ 	});},
/* 000185 */ 	latex_wrap_verbatim_macro: null,
/* 000187 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000187 */ 		var is_block_level = false;
/* 000187 */ 		var annotations = null;
/* 000187 */ 		var target_id = null;
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000190 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000191 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000191 */ 				var __accu0__ = self;
/* 000191 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000191 */ 			}) ()), '}');
/* 000191 */ 		}
/* 000192 */ 		return (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000192 */ 		}) ();
/* 000192 */ 	});},
/* 000194 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000194 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000194 */ 			var environmentname = null;
/* 000194 */ 		};
/* 000194 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000194 */ 			var target_id = null;
/* 000194 */ 		};
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000203 */ 		return __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000203 */ 			var __accu0__ = nodelist;
/* 000203 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000203 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000203 */ 	});},
/* 000206 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000210 */ 		var content = (function () {
/* 000210 */ 			var __accu0__ = self;
/* 000210 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000210 */ 		}) ();
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = self;
/* 000216 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000216 */ 		}) ();
/* 000216 */ 	});},
/* 000219 */ 	use_endnote_latex_command: null,
/* 000220 */ 	use_citation_latex_command: null,
/* 000222 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000222 */ 		var annotations = null;
/* 000222 */ 		var target_id = null;
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000225 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000226 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000226 */ 		}
/* 000229 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000230 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000230 */ 		}
/* 000234 */ 		return content;
/* 000234 */ 	});},
/* 000237 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000237 */ 		var annotations = null;
/* 000237 */ 		var target_id = null;
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000240 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000241 */ 			var annotations = [];
/* 000241 */ 		}
/* 000242 */ 		else {
/* 000243 */ 			var annotations = (function () {
/* 000243 */ 				var __accu0__ = [];
/* 000243 */ 				var __iterable0__ = annotations;
/* 000243 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000243 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000243 */ 					(function () {
/* 000243 */ 						var __accu1__ = __accu0__;
/* 000243 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000243 */ 							var __accu2__ = a;
/* 000243 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000243 */ 						}) ());
/* 000243 */ 					}) ();
/* 000243 */ 				}
/* 000243 */ 				return __accu0__;
/* 000243 */ 			}) ();
/* 000243 */ 		}
/* 000247 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000247 */ 			var __accu0__ = ',';
/* 000247 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000247 */ 		}) ()), ' ---\n');
/* 000248 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000248 */ 			var __accu0__ = ',';
/* 000248 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000248 */ 		}) ()), ' ---\n');
/* 000250 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000251 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000252 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000253 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000253 */ 		}
/* 000255 */ 		var lblcmd = '';
/* 000256 */ 		if (__t__ (target_id)) {
/* 000257 */ 			var lblcmd = (function () {
/* 000257 */ 				var __accu0__ = self;
/* 000257 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000257 */ 			}) ();
/* 000257 */ 		}
/* 000262 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000262 */ 			var __accu0__ = self;
/* 000262 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000262 */ 		}) ());
/* 000262 */ 	});},
/* 000266 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000266 */ 		var target_id_generator = null;
/* 000266 */ 		var annotations = null;
/* 000266 */ 		var nested_depth = null;
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000277 */ 		var s_items = [];
/* 000279 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000279 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000279 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000279 */ 			var j = __left0__ [0];
/* 000279 */ 			var item_content_nodelist = __left0__ [1];
/* 000281 */ 			var use_block_level = true;
/* 000282 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000285 */ 				var use_block_level = false;
/* 000285 */ 			}
/* 000287 */ 			// pass;
/* 000291 */ 			// pass;
/* 000295 */ 			var item_content = (function () {
/* 000295 */ 				var __accu0__ = self;
/* 000295 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000295 */ 			}) ();
/* 000301 */ 			var enumno = __add__ (1, j);
/* 000303 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000304 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000305 */ 				var tag_content = (function () {
/* 000305 */ 					var __accu0__ = self;
/* 000305 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000305 */ 				}) ();
/* 000305 */ 			}
/* 000306 */ 			else {
/* 000307 */ 				var tag_content = (function () {
/* 000307 */ 					var __accu0__ = self;
/* 000307 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000307 */ 				}) ();
/* 000307 */ 			}
/* 000313 */ 			var itemlabel = '';
/* 000314 */ 			if (__t__ (target_id_generator !== null)) {
/* 000315 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000316 */ 				var itemlabel = (function () {
/* 000316 */ 					var __accu0__ = self;
/* 000316 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000316 */ 				}) ();
/* 000316 */ 			}
/* 000319 */ 			(function () {
/* 000319 */ 				var __accu0__ = s_items;
/* 000319 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000319 */ 			}) ();
/* 000319 */ 		}
/* 000325 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000326 */ 			var annotations = [];
/* 000326 */ 		}
/* 000327 */ 		else {
/* 000328 */ 			var annotations = (function () {
/* 000328 */ 				var __accu0__ = [];
/* 000328 */ 				var __iterable0__ = annotations;
/* 000328 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000328 */ 					(function () {
/* 000328 */ 						var __accu1__ = __accu0__;
/* 000328 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000328 */ 							var __accu2__ = a;
/* 000328 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000328 */ 						}) ());
/* 000328 */ 					}) ();
/* 000328 */ 				}
/* 000328 */ 				return __accu0__;
/* 000328 */ 			}) ();
/* 000328 */ 		}
/* 000330 */ 		var ltx_environment = 'itemize';
/* 000332 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000335 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000335 */ 		}
/* 000337 */ 		return (function () {
/* 000337 */ 			var __accu0__ = self;
/* 000340 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000340 */ 				var __accu1__ = self;
/* 000340 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000340 */ 			}) (), render_context);
/* 000340 */ 		}) ();
/* 000340 */ 	});},
/* 000345 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000345 */ 		var heading_level = 1;
/* 000345 */ 		var target_id = null;
/* 000345 */ 		var inline_heading = false;
/* 000345 */ 		var annotations = null;
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000349 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000351 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000351 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000351 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000351 */ 			}) ())));
/* 000351 */ 			__except0__.__cause__ = null;
/* 000351 */ 			throw __except0__;
/* 000351 */ 		}
/* 000353 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000355 */ 		var title_content = (function () {
/* 000355 */ 			var __accu0__ = self;
/* 000355 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000355 */ 		}) ();
/* 000357 */ 		var labelcmd = '';
/* 000358 */ 		if (__t__ (target_id)) {
/* 000359 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000359 */ 		}
/* 000361 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000361 */ 	});},
/* 000366 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000366 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000366 */ 			var annotations = null;
/* 000366 */ 		};
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000368 */ 		var display_content = (function () {
/* 000368 */ 			var __accu0__ = self;
/* 000368 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000368 */ 		}) ();
/* 000374 */ 		var annotations = __t__ (annotations) || [];
/* 000376 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000377 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000377 */ 		}
/* 000380 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000381 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000381 */ 		}
/* 000385 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000386 */ 			return (function () {
/* 000386 */ 				var __accu0__ = self;
/* 000386 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000386 */ 			}) ();
/* 000386 */ 		}
/* 000390 */ 		return (function () {
/* 000390 */ 			var __accu0__ = self;
/* 000390 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000390 */ 		}) ();
/* 000390 */ 	});},
/* 000395 */ 	debug_disable_link_hyperref: false,
/* 000397 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000399 */ 			return display_content;
/* 000399 */ 		}
/* 000400 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}');
/* 000400 */ 	});},
/* 000405 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', (function () {
/* 000406 */ 			var __accu0__ = href;
/* 000406 */ 			return __call__ (__accu0__.py_replace, __accu0__, '%', '\\%');
/* 000406 */ 		}) ()), '}{'), display_content), '}');
/* 000406 */ 	});},
/* 000408 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000409 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000409 */ 	});},
/* 000411 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000412 */ 	});},
/* 000414 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000415 */ 		return (function () {
/* 000415 */ 			var __accu0__ = _rx_delayed_markers;
/* 000415 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000415 */ 				if (arguments.length) {
/* 000415 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 							switch (__attrib0__) {
/* 000415 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 							}
/* 000415 */ 						}
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 				else {
/* 000415 */ 				}
/* 000416 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000416 */ 					var __accu1__ = m;
/* 000416 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000416 */ 				}) ()));
/* 000416 */ 			}), content);
/* 000416 */ 		}) ();
/* 000416 */ 	});},
/* 000423 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000426 */ 		var full_figcaption_rendered_list = [];
/* 000427 */ 		var float_designator = null;
/* 000428 */ 		if (__t__ (float_instance.number !== null)) {
/* 000431 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000431 */ 				var __accu0__ = self;
/* 000431 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000436 */ 			}) (), '~'), (function () {
/* 000436 */ 				var __accu0__ = self;
/* 000436 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000436 */ 			}) ());
/* 000436 */ 		}
/* 000441 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000445 */ 			var float_designator = (function () {
/* 000445 */ 				var __accu0__ = self;
/* 000445 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000445 */ 			}) ();
/* 000445 */ 		}
/* 000448 */ 		else {
/* 000452 */ 			// pass;
/* 000452 */ 		}
/* 000454 */ 		var labelcmd = '';
/* 000455 */ 		if (__t__ (float_designator !== null)) {
/* 000456 */ 			(function () {
/* 000456 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000456 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000456 */ 			}) ();
/* 000458 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000459 */ 				var labelcmd = (function () {
/* 000459 */ 					var __accu0__ = self;
/* 000459 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000459 */ 				}) ();
/* 000459 */ 			}
/* 000459 */ 		}
/* 000463 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000467 */ 			(function () {
/* 000467 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000467 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000467 */ 			}) ();
/* 000470 */ 			(function () {
/* 000470 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000471 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000471 */ 					var __accu1__ = self;
/* 000471 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000471 */ 				}) ());
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000477 */ 		var rendered_float_caption = null;
/* 000478 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000481 */ 			var rendered_float_caption = __add__ ('\\par', (function () {
/* 000481 */ 				var __accu0__ = self;
/* 000483 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000483 */ 					var __accu1__ = self;
/* 000483 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000483 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000483 */ 			}) ());
/* 000483 */ 		}
/* 000489 */ 		var float_content_block_content = (function () {
/* 000489 */ 			var __accu0__ = self;
/* 000489 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000489 */ 		}) ();
/* 000495 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000496 */ 			var float_content_with_caption = (function () {
/* 000496 */ 				var __accu0__ = self;
/* 000496 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000496 */ 			}) ();
/* 000496 */ 		}
/* 000500 */ 		else {
/* 000501 */ 			var float_content_with_caption = float_content_block_content;
/* 000501 */ 		}
/* 000503 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', float_instance.float_type), '}[h!]%\n'), '\\centering{}'), float_content_with_caption), '\\end{'), float_instance.float_type), '}');
/* 000503 */ 	});},
/* 000510 */ 	graphics_raster_magnification: 1,
/* 000511 */ 	graphics_vector_magnification: 1,
/* 000513 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000515 */ 		var __left0__ = (function () {
/* 000515 */ 			var __accu0__ = self;
/* 000515 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000515 */ 		}) ();
/* 000515 */ 		var src_url = __left0__ [0];
/* 000515 */ 		var incloptions = __left0__ [1];
/* 000517 */ 		var opts = '';
/* 000518 */ 		if (__t__ (incloptions !== null)) {
/* 000519 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000519 */ 		}
/* 000521 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000521 */ 	});},
/* 000523 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000523 */ 		if (arguments.length) {
/* 000523 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000523 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000523 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000523 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000523 */ 					switch (__attrib0__) {
/* 000523 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 					}
/* 000523 */ 				}
/* 000523 */ 			}
/* 000523 */ 		}
/* 000523 */ 		else {
/* 000523 */ 		}
/* 000527 */ 		var whoptc = null;
/* 000528 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000530 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000530 */ 			var width_pt = __left0__ [0];
/* 000530 */ 			var height_pt = __left0__ [1];
/* 000532 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000533 */ 				if (__t__ (width_pt !== null)) {
/* 000534 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000534 */ 				}
/* 000535 */ 				if (__t__ (height_pt !== null)) {
/* 000536 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000536 */ 				}
/* 000536 */ 			}
/* 000537 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000538 */ 				if (__t__ (width_pt !== null)) {
/* 000539 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000539 */ 				}
/* 000540 */ 				if (__t__ (height_pt !== null)) {
/* 000541 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000541 */ 				}
/* 000541 */ 			}
/* 000543 */ 			var whoptc = '';
/* 000544 */ 			if (__t__ (width_pt !== null)) {
/* 000545 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000545 */ 			}
/* 000546 */ 			if (__t__ (height_pt !== null)) {
/* 000547 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000547 */ 			}
/* 000547 */ 		}
/* 000549 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000549 */ 	});},
/* 000551 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000551 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000551 */ 			var target_id = null;
/* 000551 */ 		};
/* 000551 */ 		if (arguments.length) {
/* 000551 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000551 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000551 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000551 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000551 */ 					switch (__attrib0__) {
/* 000551 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 					}
/* 000551 */ 				}
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 		else {
/* 000551 */ 		}
/* 000556 */ 		var stab_contents = '';
/* 000558 */ 		var cell_spans_styles = '';
/* 000559 */ 		var cell_hlines = [];
/* 000560 */ 		var cell_vlines = [];
/* 000562 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000562 */ 		var tabheight = __left0__ [0];
/* 000562 */ 		var tabwidth = __left0__ [1];
/* 000564 */ 		var __iterable0__ = cells_model.grid_data;
/* 000564 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000564 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000565 */ 			var stab_rowitems = [];
/* 000567 */ 			var __iterable1__ = row;
/* 000567 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000567 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000568 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000571 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000572 */ 					var cell_content = (function () {
/* 000572 */ 						var __accu0__ = self;
/* 000572 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000572 */ 					}) ();
/* 000579 */ 					var thiscellspanopts = [];
/* 000580 */ 					var rowj = cell.placement.row_range.start;
/* 000581 */ 					var rowjend = cell.placement.row_range.end;
/* 000582 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000583 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000584 */ 						(function () {
/* 000584 */ 							var __accu0__ = thiscellspanopts;
/* 000584 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000584 */ 						}) ();
/* 000584 */ 					}
/* 000586 */ 					var colj = cell.placement.col_range.start;
/* 000587 */ 					var coljend = cell.placement.col_range.end;
/* 000588 */ 					var numcols = __sub__ (coljend, colj);
/* 000589 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000590 */ 						(function () {
/* 000590 */ 							var __accu0__ = thiscellspanopts;
/* 000590 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000590 */ 						}) ();
/* 000590 */ 					}
/* 000592 */ 					var thiscellstyles = 'm';
/* 000593 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000594 */ 						var thiscellstyles = 'l';
/* 000594 */ 					}
/* 000595 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000596 */ 						var thiscellstyles = 'c';
/* 000596 */ 					}
/* 000597 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000598 */ 						var thiscellstyles = 'r';
/* 000598 */ 					}
/* 000600 */ 					var bgcol = null;
/* 000601 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000602 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000602 */ 					}
/* 000603 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000604 */ 						var bgcol = 'flmTabCellColorRed';
/* 000604 */ 					}
/* 000605 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000606 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000606 */ 					}
/* 000607 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000608 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000608 */ 					}
/* 000610 */ 					if (__t__ (bgcol)) {
/* 000611 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000611 */ 					}
/* 000613 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000614 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000614 */ 					}
/* 000616 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000617 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000618 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000618 */ 						}
/* 000619 */ 						else {
/* 000620 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000620 */ 						}
/* 000623 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000624 */ 							(function () {
/* 000624 */ 								var __accu0__ = cell_hlines;
/* 000624 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000624 */ 							}) ();
/* 000624 */ 						}
/* 000624 */ 					}
/* 000626 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000627 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000628 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000628 */ 						}
/* 000629 */ 						else {
/* 000630 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000630 */ 						}
/* 000632 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000633 */ 							(function () {
/* 000633 */ 								var __accu0__ = cell_vlines;
/* 000633 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000633 */ 							}) ();
/* 000633 */ 						}
/* 000634 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000635 */ 							(function () {
/* 000635 */ 								var __accu0__ = cell_vlines;
/* 000635 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000635 */ 							}) ();
/* 000635 */ 						}
/* 000635 */ 					}
/* 000637 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000640 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000640 */ 							var __accu0__ = ',';
/* 000640 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000640 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000640 */ 					}
/* 000640 */ 				}
/* 000643 */ 				else {
/* 000645 */ 					var cell_content = '';
/* 000645 */ 				}
/* 000647 */ 				(function () {
/* 000647 */ 					var __accu0__ = stab_rowitems;
/* 000647 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000647 */ 				}) ();
/* 000647 */ 			}
/* 000649 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000649 */ 				var __accu0__ = '&';
/* 000649 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000649 */ 			}) (), '\\\\'), '\n'));
/* 000649 */ 		}
/* 000660 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{center}', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000660 */ 			var __accu0__ = '';
/* 000660 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000660 */ 				var __accu1__ = [];
/* 000660 */ 				var __iterable0__ = cell_hlines;
/* 000660 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000661 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000661 */ 					var rownrng = __left0__ [0];
/* 000661 */ 					var colnrng = __left0__ [1];
/* 000661 */ 					var lsty = __left0__ [2];
/* 000661 */ 					(function () {
/* 000661 */ 						var __accu2__ = __accu1__;
/* 000661 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000661 */ 					}) ();
/* 000661 */ 				}
/* 000661 */ 				return __accu1__;
/* 000661 */ 			}) ());
/* 000662 */ 		}) ()), (function () {
/* 000662 */ 			var __accu0__ = '';
/* 000662 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000662 */ 				var __accu1__ = [];
/* 000662 */ 				var __iterable0__ = cell_vlines;
/* 000662 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000663 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000663 */ 					var rownrng = __left0__ [0];
/* 000663 */ 					var colnrng = __left0__ [1];
/* 000663 */ 					var lsty = __left0__ [2];
/* 000663 */ 					(function () {
/* 000663 */ 						var __accu2__ = __accu1__;
/* 000663 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000663 */ 					}) ();
/* 000663 */ 				}
/* 000663 */ 				return __accu1__;
/* 000663 */ 			}) ());
/* 000663 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000668 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000669 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000670 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000671 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000673 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000684 */ 		var s = __call__ (__iadd__, null, s, '\\end{center}');
/* 000686 */ 		return s;
/* 000686 */ 	});},
/* 000688 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000688 */ });
/* 000693 */ export var _rx_delayed_markers = (function () {
/* 000693 */ 	var __accu0__ = re;
/* 000693 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000693 */ }) ();
/* 000702 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\defterm\\else\n\\newenvironment{defterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\itshape\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n\\providecommand\\displayterm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\n';
/* 000766 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000766 */ 	__module__: __name__,
/* 000767 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000770 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000770 */ 		if (arguments.length) {
/* 000770 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000770 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000770 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000770 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000770 */ 					switch (__attrib0__) {
/* 000770 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000770 */ 					}
/* 000770 */ 				}
/* 000770 */ 			}
/* 000770 */ 		}
/* 000770 */ 		else {
/* 000770 */ 		}
/* 000771 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000771 */ 	};},
/* 000775 */ 	format_name: 'latex'
/* 000775 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map