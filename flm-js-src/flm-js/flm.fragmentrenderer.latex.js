/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:44
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
/* 000202 */ 		var __left0__ = delimiters;
/* 000202 */ 		var begin_delim = __left0__ [0];
/* 000202 */ 		var end_delim = __left0__ [1];
/* 000203 */ 		if (__t__ (environmentname)) {
/* 000204 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000205 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000205 */ 		}
/* 000208 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000208 */ 			var __accu0__ = nodelist;
/* 000208 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000208 */ 		}) ()), end_delim);
/* 000208 */ 	});},
/* 000211 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000215 */ 		var content = (function () {
/* 000215 */ 			var __accu0__ = self;
/* 000215 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000215 */ 		}) ();
/* 000221 */ 		return (function () {
/* 000221 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000221 */ 		}) ();
/* 000221 */ 	});},
/* 000224 */ 	use_endnote_latex_command: null,
/* 000225 */ 	use_citation_latex_command: null,
/* 000227 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000227 */ 		var annotations = null;
/* 000227 */ 		var target_id = null;
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000230 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000231 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000231 */ 		}
/* 000234 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000235 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000235 */ 		}
/* 000239 */ 		return content;
/* 000239 */ 	});},
/* 000242 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
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
/* 000245 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000246 */ 			var annotations = [];
/* 000246 */ 		}
/* 000247 */ 		else {
/* 000248 */ 			var annotations = (function () {
/* 000248 */ 				var __accu0__ = [];
/* 000248 */ 				var __iterable0__ = annotations;
/* 000248 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000248 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000248 */ 					(function () {
/* 000248 */ 						var __accu1__ = __accu0__;
/* 000248 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000248 */ 							var __accu2__ = a;
/* 000248 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000248 */ 						}) ());
/* 000248 */ 					}) ();
/* 000248 */ 				}
/* 000248 */ 				return __accu0__;
/* 000248 */ 			}) ();
/* 000248 */ 		}
/* 000252 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000252 */ 			var __accu0__ = ',';
/* 000252 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000252 */ 		}) ()), ' ---\n');
/* 000253 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000253 */ 			var __accu0__ = ',';
/* 000253 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000253 */ 		}) ()), ' ---\n');
/* 000255 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000256 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000257 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000258 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000258 */ 		}
/* 000260 */ 		var lblcmd = '';
/* 000261 */ 		if (__t__ (target_id)) {
/* 000262 */ 			var lblcmd = (function () {
/* 000262 */ 				var __accu0__ = self;
/* 000262 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000262 */ 			}) ();
/* 000262 */ 		}
/* 000267 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000267 */ 			var __accu0__ = self;
/* 000267 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000267 */ 		}) ());
/* 000267 */ 	});},
/* 000271 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000271 */ 		var target_id_generator = null;
/* 000271 */ 		var annotations = null;
/* 000271 */ 		var nested_depth = null;
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000282 */ 		var s_items = [];
/* 000284 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000284 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000284 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000284 */ 			var j = __left0__ [0];
/* 000284 */ 			var item_content_nodelist = __left0__ [1];
/* 000286 */ 			var use_block_level = true;
/* 000287 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000290 */ 				var use_block_level = false;
/* 000290 */ 			}
/* 000292 */ 			// pass;
/* 000296 */ 			// pass;
/* 000300 */ 			var item_content = (function () {
/* 000300 */ 				var __accu0__ = self;
/* 000300 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000300 */ 			}) ();
/* 000306 */ 			var enumno = __add__ (1, j);
/* 000308 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000309 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000310 */ 				var tag_content = (function () {
/* 000310 */ 					var __accu0__ = self;
/* 000310 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000311 */ 			else {
/* 000312 */ 				var tag_content = (function () {
/* 000312 */ 					var __accu0__ = self;
/* 000312 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000318 */ 			var itemlabel = '';
/* 000319 */ 			if (__t__ (target_id_generator !== null)) {
/* 000320 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000321 */ 				var itemlabel = (function () {
/* 000321 */ 					var __accu0__ = self;
/* 000321 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000321 */ 				}) ();
/* 000321 */ 			}
/* 000324 */ 			(function () {
/* 000324 */ 				var __accu0__ = s_items;
/* 000324 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000324 */ 			}) ();
/* 000324 */ 		}
/* 000330 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000331 */ 			var annotations = [];
/* 000331 */ 		}
/* 000332 */ 		else {
/* 000333 */ 			var annotations = (function () {
/* 000333 */ 				var __accu0__ = [];
/* 000333 */ 				var __iterable0__ = annotations;
/* 000333 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000333 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000333 */ 					(function () {
/* 000333 */ 						var __accu1__ = __accu0__;
/* 000333 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000333 */ 							var __accu2__ = a;
/* 000333 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000333 */ 						}) ());
/* 000333 */ 					}) ();
/* 000333 */ 				}
/* 000333 */ 				return __accu0__;
/* 000333 */ 			}) ();
/* 000333 */ 		}
/* 000335 */ 		var ltx_environment = 'itemize';
/* 000337 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000340 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000340 */ 		}
/* 000342 */ 		return (function () {
/* 000342 */ 			var __accu0__ = self;
/* 000345 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000345 */ 				var __accu1__ = self;
/* 000345 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000345 */ 			}) (), render_context);
/* 000345 */ 		}) ();
/* 000345 */ 	});},
/* 000350 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000350 */ 		var heading_level = 1;
/* 000350 */ 		var inline_heading = false;
/* 000350 */ 		var target_id = null;
/* 000350 */ 		var annotations = null;
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000357 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000359 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000359 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000359 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000359 */ 			}) ())));
/* 000359 */ 			__except0__.__cause__ = null;
/* 000359 */ 			throw __except0__;
/* 000359 */ 		}
/* 000361 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000363 */ 		var title_content = (function () {
/* 000363 */ 			var __accu0__ = self;
/* 000363 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000363 */ 		}) ();
/* 000365 */ 		var labelcmd = '';
/* 000366 */ 		if (__t__ (target_id)) {
/* 000367 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000367 */ 		}
/* 000369 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000369 */ 	});},
/* 000374 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000374 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000374 */ 			var annotations = null;
/* 000374 */ 		};
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000376 */ 		var display_content = (function () {
/* 000376 */ 			var __accu0__ = self;
/* 000376 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000376 */ 		}) ();
/* 000382 */ 		var annotations = __t__ (annotations) || [];
/* 000384 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000385 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000385 */ 		}
/* 000388 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000389 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000389 */ 		}
/* 000393 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000394 */ 			return (function () {
/* 000394 */ 				var __accu0__ = self;
/* 000394 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000394 */ 			}) ();
/* 000394 */ 		}
/* 000398 */ 		return (function () {
/* 000398 */ 			var __accu0__ = self;
/* 000398 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000398 */ 		}) ();
/* 000398 */ 	});},
/* 000403 */ 	debug_disable_link_hyperref: false,
/* 000405 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000407 */ 			return display_content;
/* 000407 */ 		}
/* 000408 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}');
/* 000408 */ 	});},
/* 000413 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000414 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', (function () {
/* 000414 */ 			var __accu0__ = href;
/* 000414 */ 			return __call__ (__accu0__.py_replace, __accu0__, '%', '\\%');
/* 000414 */ 		}) ()), '}{'), display_content), '}');
/* 000414 */ 	});},
/* 000416 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000416 */ 		if (arguments.length) {
/* 000416 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 					switch (__attrib0__) {
/* 000416 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 		}
/* 000416 */ 		else {
/* 000416 */ 		}
/* 000417 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000417 */ 	});},
/* 000419 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000419 */ 		if (arguments.length) {
/* 000419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 					switch (__attrib0__) {
/* 000419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 		}
/* 000419 */ 		else {
/* 000419 */ 		}
/* 000420 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000420 */ 	});},
/* 000422 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000423 */ 		return (function () {
/* 000423 */ 			var __accu0__ = _rx_delayed_markers;
/* 000423 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000423 */ 				if (arguments.length) {
/* 000423 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 							switch (__attrib0__) {
/* 000423 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 							}
/* 000423 */ 						}
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 				else {
/* 000423 */ 				}
/* 000424 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000424 */ 					var __accu1__ = m;
/* 000424 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000424 */ 				}) ()));
/* 000424 */ 			}), content);
/* 000424 */ 		}) ();
/* 000424 */ 	});},
/* 000431 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000434 */ 		var full_figcaption_rendered_list = [];
/* 000435 */ 		var float_designator = null;
/* 000436 */ 		if (__t__ (float_instance.number !== null)) {
/* 000439 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000439 */ 				var __accu0__ = self;
/* 000439 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000444 */ 			}) (), '~'), (function () {
/* 000444 */ 				var __accu0__ = self;
/* 000444 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000444 */ 			}) ());
/* 000444 */ 		}
/* 000449 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000453 */ 			var float_designator = (function () {
/* 000453 */ 				var __accu0__ = self;
/* 000453 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000453 */ 			}) ();
/* 000453 */ 		}
/* 000456 */ 		else {
/* 000460 */ 			// pass;
/* 000460 */ 		}
/* 000462 */ 		var labelcmd = '';
/* 000463 */ 		if (__t__ (float_designator !== null)) {
/* 000464 */ 			(function () {
/* 000464 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000464 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000464 */ 			}) ();
/* 000466 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000467 */ 				var labelcmd = (function () {
/* 000467 */ 					var __accu0__ = self;
/* 000467 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000467 */ 		}
/* 000471 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000475 */ 			(function () {
/* 000475 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000475 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000475 */ 			}) ();
/* 000478 */ 			(function () {
/* 000478 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000479 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000479 */ 					var __accu1__ = self;
/* 000479 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000479 */ 				}) ());
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000485 */ 		var rendered_float_caption = null;
/* 000486 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000489 */ 			var rendered_float_caption = __add__ ('\\par', (function () {
/* 000489 */ 				var __accu0__ = self;
/* 000491 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000491 */ 					var __accu1__ = self;
/* 000491 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000491 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000491 */ 			}) ());
/* 000491 */ 		}
/* 000497 */ 		var float_content_block_content = (function () {
/* 000497 */ 			var __accu0__ = self;
/* 000497 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000497 */ 		}) ();
/* 000503 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000504 */ 			var float_content_with_caption = (function () {
/* 000504 */ 				var __accu0__ = self;
/* 000504 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000504 */ 			}) ();
/* 000504 */ 		}
/* 000508 */ 		else {
/* 000509 */ 			var float_content_with_caption = float_content_block_content;
/* 000509 */ 		}
/* 000511 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', float_instance.float_type), '}[h!]%\n'), '\\centering{}'), float_content_with_caption), '\\end{'), float_instance.float_type), '}');
/* 000511 */ 	});},
/* 000518 */ 	graphics_raster_magnification: 1,
/* 000519 */ 	graphics_vector_magnification: 1,
/* 000521 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000523 */ 		var __left0__ = (function () {
/* 000523 */ 			var __accu0__ = self;
/* 000523 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000523 */ 		}) ();
/* 000523 */ 		var src_url = __left0__ [0];
/* 000523 */ 		var incloptions = __left0__ [1];
/* 000525 */ 		var opts = '';
/* 000526 */ 		if (__t__ (incloptions !== null)) {
/* 000527 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000527 */ 		}
/* 000529 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000529 */ 	});},
/* 000531 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000535 */ 		var whoptc = null;
/* 000536 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000538 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000538 */ 			var width_pt = __left0__ [0];
/* 000538 */ 			var height_pt = __left0__ [1];
/* 000540 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000541 */ 				if (__t__ (width_pt !== null)) {
/* 000542 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000542 */ 				}
/* 000543 */ 				if (__t__ (height_pt !== null)) {
/* 000544 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000544 */ 				}
/* 000544 */ 			}
/* 000545 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000546 */ 				if (__t__ (width_pt !== null)) {
/* 000547 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000547 */ 				}
/* 000548 */ 				if (__t__ (height_pt !== null)) {
/* 000549 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000549 */ 				}
/* 000549 */ 			}
/* 000551 */ 			var whoptc = '';
/* 000552 */ 			if (__t__ (width_pt !== null)) {
/* 000553 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000553 */ 			}
/* 000554 */ 			if (__t__ (height_pt !== null)) {
/* 000555 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000555 */ 			}
/* 000555 */ 		}
/* 000557 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000557 */ 	});},
/* 000559 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000559 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000559 */ 			var target_id = null;
/* 000559 */ 		};
/* 000559 */ 		if (arguments.length) {
/* 000559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000559 */ 					switch (__attrib0__) {
/* 000559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 					}
/* 000559 */ 				}
/* 000559 */ 			}
/* 000559 */ 		}
/* 000559 */ 		else {
/* 000559 */ 		}
/* 000564 */ 		var stab_contents = '';
/* 000566 */ 		var cell_spans_styles = '';
/* 000567 */ 		var cell_hlines = [];
/* 000568 */ 		var cell_vlines = [];
/* 000570 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000570 */ 		var tabheight = __left0__ [0];
/* 000570 */ 		var tabwidth = __left0__ [1];
/* 000572 */ 		var __iterable0__ = cells_model.grid_data;
/* 000572 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000572 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000573 */ 			var stab_rowitems = [];
/* 000575 */ 			var __iterable1__ = row;
/* 000575 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000575 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000576 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000579 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000580 */ 					var cell_content = (function () {
/* 000580 */ 						var __accu0__ = self;
/* 000580 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000580 */ 					}) ();
/* 000587 */ 					var thiscellspanopts = [];
/* 000588 */ 					var rowj = cell.placement.row_range.start;
/* 000589 */ 					var rowjend = cell.placement.row_range.end;
/* 000590 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000591 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000592 */ 						(function () {
/* 000592 */ 							var __accu0__ = thiscellspanopts;
/* 000592 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000592 */ 						}) ();
/* 000592 */ 					}
/* 000594 */ 					var colj = cell.placement.col_range.start;
/* 000595 */ 					var coljend = cell.placement.col_range.end;
/* 000596 */ 					var numcols = __sub__ (coljend, colj);
/* 000597 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000598 */ 						(function () {
/* 000598 */ 							var __accu0__ = thiscellspanopts;
/* 000598 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000598 */ 						}) ();
/* 000598 */ 					}
/* 000600 */ 					var thiscellstyles = 'm';
/* 000601 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000602 */ 						var thiscellstyles = 'l';
/* 000602 */ 					}
/* 000603 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000604 */ 						var thiscellstyles = 'c';
/* 000604 */ 					}
/* 000605 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000606 */ 						var thiscellstyles = 'r';
/* 000606 */ 					}
/* 000608 */ 					var bgcol = null;
/* 000609 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000610 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000610 */ 					}
/* 000611 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000612 */ 						var bgcol = 'flmTabCellColorRed';
/* 000612 */ 					}
/* 000613 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000614 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000614 */ 					}
/* 000615 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000616 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000616 */ 					}
/* 000618 */ 					if (__t__ (bgcol)) {
/* 000619 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000619 */ 					}
/* 000621 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000622 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000622 */ 					}
/* 000624 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000625 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000626 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000626 */ 						}
/* 000627 */ 						else {
/* 000628 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000628 */ 						}
/* 000631 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000632 */ 							(function () {
/* 000632 */ 								var __accu0__ = cell_hlines;
/* 000632 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000632 */ 							}) ();
/* 000632 */ 						}
/* 000632 */ 					}
/* 000634 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000635 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000636 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000636 */ 						}
/* 000637 */ 						else {
/* 000638 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000638 */ 						}
/* 000640 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000641 */ 							(function () {
/* 000641 */ 								var __accu0__ = cell_vlines;
/* 000641 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000641 */ 							}) ();
/* 000641 */ 						}
/* 000642 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000643 */ 							(function () {
/* 000643 */ 								var __accu0__ = cell_vlines;
/* 000643 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000643 */ 							}) ();
/* 000643 */ 						}
/* 000643 */ 					}
/* 000645 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000648 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000648 */ 							var __accu0__ = ',';
/* 000648 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000648 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000648 */ 					}
/* 000648 */ 				}
/* 000651 */ 				else {
/* 000653 */ 					var cell_content = '';
/* 000653 */ 				}
/* 000655 */ 				(function () {
/* 000655 */ 					var __accu0__ = stab_rowitems;
/* 000655 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000655 */ 				}) ();
/* 000655 */ 			}
/* 000657 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000657 */ 				var __accu0__ = '&';
/* 000657 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000657 */ 			}) (), '\\\\'), '\n'));
/* 000657 */ 		}
/* 000668 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{center}', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000668 */ 			var __accu0__ = '';
/* 000668 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000668 */ 				var __accu1__ = [];
/* 000668 */ 				var __iterable0__ = cell_hlines;
/* 000668 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000669 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000669 */ 					var rownrng = __left0__ [0];
/* 000669 */ 					var colnrng = __left0__ [1];
/* 000669 */ 					var lsty = __left0__ [2];
/* 000669 */ 					(function () {
/* 000669 */ 						var __accu2__ = __accu1__;
/* 000669 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000669 */ 					}) ();
/* 000669 */ 				}
/* 000669 */ 				return __accu1__;
/* 000669 */ 			}) ());
/* 000670 */ 		}) ()), (function () {
/* 000670 */ 			var __accu0__ = '';
/* 000670 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000670 */ 				var __accu1__ = [];
/* 000670 */ 				var __iterable0__ = cell_vlines;
/* 000670 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000671 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000671 */ 					var rownrng = __left0__ [0];
/* 000671 */ 					var colnrng = __left0__ [1];
/* 000671 */ 					var lsty = __left0__ [2];
/* 000671 */ 					(function () {
/* 000671 */ 						var __accu2__ = __accu1__;
/* 000671 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000671 */ 					}) ();
/* 000671 */ 				}
/* 000671 */ 				return __accu1__;
/* 000671 */ 			}) ());
/* 000671 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000676 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000677 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000678 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000679 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000681 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000692 */ 		var s = __call__ (__iadd__, null, s, '\\end{center}');
/* 000694 */ 		return s;
/* 000694 */ 	});},
/* 000696 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000696 */ });
/* 000701 */ export var _rx_delayed_markers = (function () {
/* 000701 */ 	var __accu0__ = re;
/* 000701 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000701 */ }) ();
/* 000710 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\defterm\\else\n\\newenvironment{defterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\itshape\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n\\providecommand\\displayterm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\n';
/* 000774 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000774 */ 	__module__: __name__,
/* 000775 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000778 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000778 */ 		if (arguments.length) {
/* 000778 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000778 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000778 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000778 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000778 */ 					switch (__attrib0__) {
/* 000778 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000778 */ 					}
/* 000778 */ 				}
/* 000778 */ 			}
/* 000778 */ 		}
/* 000778 */ 		else {
/* 000778 */ 		}
/* 000779 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000779 */ 	};},
/* 000783 */ 	format_name: 'latex'
/* 000783 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map