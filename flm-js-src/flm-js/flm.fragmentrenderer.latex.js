/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:23
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
/* 000006 */ export {FragmentRenderer, pyltxenc_lenc_get_builtin, UnicodeToLatexEncoder};
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
/* 000081 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
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
/* 000090 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000094 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
/* 000094 */ 			var __accu0__ = ',';
/* 000094 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000094 */ 				var __accu1__ = [];
/* 000094 */ 				var __iterable0__ = annotations;
/* 000094 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000094 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000094 */ 					(function () {
/* 000094 */ 						var __accu2__ = __accu1__;
/* 000094 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000094 */ 							var __accu3__ = a;
/* 000094 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000094 */ 						}) ());
/* 000094 */ 					}) ();
/* 000094 */ 				}
/* 000094 */ 				return __accu1__;
/* 000094 */ 			}) ());
/* 000095 */ 		}) ()), '\n'), (function () {
/* 000095 */ 			var __accu0__ = items_content;
/* 000095 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000095 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000095 */ 	});},
/* 000100 */ 	use_phantom_section: true,
/* 000101 */ 	latex_label_prefix: 'x:',
/* 000103 */ 	debug_disable_pin_labels: false,
/* 000105 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000105 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000105 */ 			var insert_phantom_section = true;
/* 000105 */ 		};
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000107 */ 			return '';
/* 000107 */ 		}
/* 000108 */ 		var s = '';
/* 000109 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000110 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000110 */ 		}
/* 000111 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000112 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000113 */ 		return s;
/* 000113 */ 	});},
/* 000117 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000120 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000120 */ 			var __accu0__ = self;
/* 000120 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000120 */ 		}) ()), '\n\n');
/* 000120 */ 	});},
/* 000124 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		return (function () {
/* 000125 */ 			var __accu0__ = self;
/* 000125 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000125 */ 				var __accu1__ = [];
/* 000126 */ 				var __iterable0__ = nodelist;
/* 000126 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000126 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 					(function () {
/* 000126 */ 						var __accu2__ = __accu1__;
/* 000126 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000126 */ 							var __accu3__ = self;
/* 000126 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000126 */ 						}) ());
/* 000126 */ 					}) ();
/* 000126 */ 				}
/* 000126 */ 				return __accu1__;
/* 000126 */ 			}) (), render_context);
/* 000126 */ 		}) ();
/* 000126 */ 	});},
/* 000130 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000140 */ 		var result = '';
/* 000141 */ 		var __iterable0__ = content_list;
/* 000141 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000141 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000142 */ 			var result = (function () {
/* 000142 */ 				var __accu0__ = self;
/* 000142 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000142 */ 			}) ();
/* 000142 */ 		}
/* 000143 */ 		return result;
/* 000143 */ 	});},
/* 000145 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000147 */ 			var __left0__ = (function () {
/* 000147 */ 				var __accu0__ = a;
/* 000147 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000147 */ 			}) ();
/* 000147 */ 			var _ = __left0__ [0];
/* 000147 */ 			var last_line = __left0__ [1];
/* 000147 */ 		}
/* 000148 */ 		else {
/* 000149 */ 			var last_line = a;
/* 000149 */ 		}
/* 000150 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000152 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000152 */ 		}
/* 000153 */ 		if (__t__ ((function () {
/* 000153 */ 			var __accu0__ = re;
/* 000153 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000153 */ 		}) () !== null)) {
/* 000155 */ 			return __add__ (__add__ (a, ' '), b);
/* 000155 */ 		}
/* 000156 */ 		return __add__ (a, b);
/* 000156 */ 	});},
/* 000158 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
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
/* 000166 */ 		return __add__ ((function () {
/* 000166 */ 			var __accu0__ = '\n\n';
/* 000166 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000166 */ 				var __accu1__ = [];
/* 000166 */ 				var __iterable0__ = content_list;
/* 000166 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000166 */ 					(function () {
/* 000166 */ 						var __accu2__ = __accu1__;
/* 000166 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000166 */ 							var __accu3__ = c;
/* 000166 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000166 */ 						}) ());
/* 000166 */ 					}) ();
/* 000166 */ 				}
/* 000166 */ 				return __accu1__;
/* 000166 */ 			}) ());
/* 000166 */ 		}) (), '\n');
/* 000166 */ 	});},
/* 000171 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000172 */ 		return (function () {
/* 000172 */ 			var __accu0__ = self;
/* 000172 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000172 */ 		}) ();
/* 000172 */ 	});},
/* 000174 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000176 */ 		return __add__ (__add__ ('% ', (function () {
/* 000176 */ 			var __accu0__ = debug_str;
/* 000176 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000176 */ 		}) ()), '\n');
/* 000176 */ 	});},
/* 000178 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000178 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000178 */ 			var annotations = null;
/* 000178 */ 		};
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000179 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000180 */ 			var annotations = [];
/* 000180 */ 		}
/* 000181 */ 		else {
/* 000182 */ 			var annotations = (function () {
/* 000182 */ 				var __accu0__ = [];
/* 000182 */ 				var __iterable0__ = annotations;
/* 000182 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000182 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 					(function () {
/* 000182 */ 						var __accu1__ = __accu0__;
/* 000182 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000182 */ 							var __accu2__ = a;
/* 000182 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000182 */ 						}) ());
/* 000182 */ 					}) ();
/* 000182 */ 				}
/* 000182 */ 				return __accu0__;
/* 000182 */ 			}) ();
/* 000182 */ 		}
/* 000184 */ 		return '% {}\n'.format ((function () {
/* 000184 */ 			var __accu0__ = ' ';
/* 000184 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000184 */ 		}) ());
/* 000184 */ 	});},
/* 000186 */ 	latex_wrap_verbatim_macro: null,
/* 000188 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000188 */ 		var is_block_level = false;
/* 000188 */ 		var annotations = null;
/* 000188 */ 		var target_id = null;
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000191 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000192 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000192 */ 				var __accu0__ = self;
/* 000192 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000192 */ 			}) ()), '}');
/* 000192 */ 		}
/* 000193 */ 		return (function () {
/* 000193 */ 			var __accu0__ = self;
/* 000193 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000193 */ 		}) ();
/* 000193 */ 	});},
/* 000195 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000195 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000195 */ 			var environmentname = null;
/* 000195 */ 		};
/* 000195 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000195 */ 			var target_id = null;
/* 000195 */ 		};
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000204 */ 		return __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000204 */ 			var __accu0__ = nodelist;
/* 000204 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000204 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000204 */ 	});},
/* 000207 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000211 */ 		var content = (function () {
/* 000211 */ 			var __accu0__ = self;
/* 000211 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000211 */ 		}) ();
/* 000217 */ 		return (function () {
/* 000217 */ 			var __accu0__ = self;
/* 000217 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000217 */ 		}) ();
/* 000217 */ 	});},
/* 000220 */ 	use_endnote_latex_command: null,
/* 000221 */ 	use_citation_latex_command: null,
/* 000223 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000223 */ 		var annotations = null;
/* 000223 */ 		var target_id = null;
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000226 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000227 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000227 */ 		}
/* 000230 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000231 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000231 */ 		}
/* 000235 */ 		return content;
/* 000235 */ 	});},
/* 000238 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000238 */ 		var annotations = null;
/* 000238 */ 		var target_id = null;
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000241 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000242 */ 			var annotations = [];
/* 000242 */ 		}
/* 000243 */ 		else {
/* 000244 */ 			var annotations = (function () {
/* 000244 */ 				var __accu0__ = [];
/* 000244 */ 				var __iterable0__ = annotations;
/* 000244 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 					(function () {
/* 000244 */ 						var __accu1__ = __accu0__;
/* 000244 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000244 */ 							var __accu2__ = a;
/* 000244 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000244 */ 						}) ());
/* 000244 */ 					}) ();
/* 000244 */ 				}
/* 000244 */ 				return __accu0__;
/* 000244 */ 			}) ();
/* 000244 */ 		}
/* 000248 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000248 */ 			var __accu0__ = ',';
/* 000248 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000248 */ 		}) ()), ' ---\n');
/* 000249 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000249 */ 			var __accu0__ = ',';
/* 000249 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000249 */ 		}) ()), ' ---\n');
/* 000251 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000252 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000253 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000254 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000254 */ 		}
/* 000256 */ 		var lblcmd = '';
/* 000257 */ 		if (__t__ (target_id)) {
/* 000258 */ 			var lblcmd = (function () {
/* 000258 */ 				var __accu0__ = self;
/* 000258 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000263 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000263 */ 			var __accu0__ = self;
/* 000263 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000263 */ 		}) ());
/* 000263 */ 	});},
/* 000267 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000267 */ 		var target_id_generator = null;
/* 000267 */ 		var annotations = null;
/* 000267 */ 		var nested_depth = null;
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000278 */ 		var s_items = [];
/* 000280 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000280 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 			var j = __left0__ [0];
/* 000280 */ 			var item_content_nodelist = __left0__ [1];
/* 000282 */ 			var use_block_level = true;
/* 000283 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000286 */ 				var use_block_level = false;
/* 000286 */ 			}
/* 000288 */ 			// pass;
/* 000292 */ 			// pass;
/* 000296 */ 			var item_content = (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000296 */ 			}) ();
/* 000302 */ 			var enumno = __add__ (1, j);
/* 000304 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000305 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000306 */ 				var tag_content = (function () {
/* 000306 */ 					var __accu0__ = self;
/* 000306 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000307 */ 			else {
/* 000308 */ 				var tag_content = (function () {
/* 000308 */ 					var __accu0__ = self;
/* 000308 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000308 */ 				}) ();
/* 000308 */ 			}
/* 000314 */ 			var itemlabel = '';
/* 000315 */ 			if (__t__ (target_id_generator !== null)) {
/* 000316 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000317 */ 				var itemlabel = (function () {
/* 000317 */ 					var __accu0__ = self;
/* 000317 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000317 */ 				}) ();
/* 000317 */ 			}
/* 000320 */ 			(function () {
/* 000320 */ 				var __accu0__ = s_items;
/* 000320 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000326 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000327 */ 			var annotations = [];
/* 000327 */ 		}
/* 000328 */ 		else {
/* 000329 */ 			var annotations = (function () {
/* 000329 */ 				var __accu0__ = [];
/* 000329 */ 				var __iterable0__ = annotations;
/* 000329 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000329 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000329 */ 					(function () {
/* 000329 */ 						var __accu1__ = __accu0__;
/* 000329 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000329 */ 							var __accu2__ = a;
/* 000329 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000329 */ 						}) ());
/* 000329 */ 					}) ();
/* 000329 */ 				}
/* 000329 */ 				return __accu0__;
/* 000329 */ 			}) ();
/* 000329 */ 		}
/* 000331 */ 		var ltx_environment = 'itemize';
/* 000333 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000336 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000336 */ 		}
/* 000338 */ 		return (function () {
/* 000338 */ 			var __accu0__ = self;
/* 000341 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000341 */ 				var __accu1__ = self;
/* 000341 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000341 */ 			}) (), render_context);
/* 000341 */ 		}) ();
/* 000341 */ 	});},
/* 000346 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000346 */ 		var heading_level = 1;
/* 000346 */ 		var target_id = null;
/* 000346 */ 		var inline_heading = false;
/* 000346 */ 		var annotations = null;
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000350 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000352 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000352 */ 				var __accu0__ = self.heading_commands_by_level;
/* 000352 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000352 */ 			}) ())));
/* 000352 */ 			__except0__.__cause__ = null;
/* 000352 */ 			throw __except0__;
/* 000352 */ 		}
/* 000354 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000356 */ 		var title_content = (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000356 */ 		}) ();
/* 000358 */ 		var labelcmd = '';
/* 000359 */ 		if (__t__ (target_id)) {
/* 000360 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000360 */ 		}
/* 000362 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000362 */ 	});},
/* 000367 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000367 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000367 */ 			var annotations = null;
/* 000367 */ 		};
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000369 */ 		var display_content = (function () {
/* 000369 */ 			var __accu0__ = self;
/* 000369 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000369 */ 		}) ();
/* 000375 */ 		var annotations = __t__ (annotations) || [];
/* 000377 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000378 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000378 */ 		}
/* 000381 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000382 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000382 */ 		}
/* 000386 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000387 */ 			return (function () {
/* 000387 */ 				var __accu0__ = self;
/* 000387 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000387 */ 			}) ();
/* 000387 */ 		}
/* 000391 */ 		return (function () {
/* 000391 */ 			var __accu0__ = self;
/* 000391 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000391 */ 		}) ();
/* 000391 */ 	});},
/* 000396 */ 	debug_disable_link_hyperref: false,
/* 000398 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000400 */ 			return display_content;
/* 000400 */ 		}
/* 000401 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}');
/* 000401 */ 	});},
/* 000406 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000407 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', (function () {
/* 000407 */ 			var __accu0__ = href;
/* 000407 */ 			return __call__ (__accu0__.py_replace, __accu0__, '%', '\\%');
/* 000407 */ 		}) ()), '}{'), display_content), '}');
/* 000407 */ 	});},
/* 000409 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000410 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000410 */ 	});},
/* 000412 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000413 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000413 */ 	});},
/* 000415 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000416 */ 		return (function () {
/* 000416 */ 			var __accu0__ = _rx_delayed_markers;
/* 000416 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000416 */ 				if (arguments.length) {
/* 000416 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 							switch (__attrib0__) {
/* 000416 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 							}
/* 000416 */ 						}
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 				else {
/* 000416 */ 				}
/* 000417 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000417 */ 					var __accu1__ = m;
/* 000417 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000417 */ 				}) ()));
/* 000417 */ 			}), content);
/* 000417 */ 		}) ();
/* 000417 */ 	});},
/* 000424 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000427 */ 		var full_figcaption_rendered_list = [];
/* 000428 */ 		var float_designator = null;
/* 000429 */ 		if (__t__ (float_instance.number !== null)) {
/* 000432 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000432 */ 				var __accu0__ = self;
/* 000432 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000437 */ 			}) (), '~'), (function () {
/* 000437 */ 				var __accu0__ = self;
/* 000437 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000437 */ 			}) ());
/* 000437 */ 		}
/* 000442 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000446 */ 			var float_designator = (function () {
/* 000446 */ 				var __accu0__ = self;
/* 000446 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000446 */ 			}) ();
/* 000446 */ 		}
/* 000449 */ 		else {
/* 000453 */ 			// pass;
/* 000453 */ 		}
/* 000455 */ 		var labelcmd = '';
/* 000456 */ 		if (__t__ (float_designator !== null)) {
/* 000457 */ 			(function () {
/* 000457 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000457 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000457 */ 			}) ();
/* 000459 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000460 */ 				var labelcmd = (function () {
/* 000460 */ 					var __accu0__ = self;
/* 000460 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000460 */ 				}) ();
/* 000460 */ 			}
/* 000460 */ 		}
/* 000464 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000468 */ 			(function () {
/* 000468 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000468 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000468 */ 			}) ();
/* 000471 */ 			(function () {
/* 000471 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000472 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000472 */ 					var __accu1__ = self;
/* 000472 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000472 */ 				}) ());
/* 000472 */ 			}) ();
/* 000472 */ 		}
/* 000478 */ 		var rendered_float_caption = null;
/* 000479 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000482 */ 			var rendered_float_caption = __add__ ('\\par', (function () {
/* 000482 */ 				var __accu0__ = self;
/* 000484 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000484 */ 					var __accu1__ = self;
/* 000484 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000484 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000484 */ 			}) ());
/* 000484 */ 		}
/* 000490 */ 		var float_content_block_content = (function () {
/* 000490 */ 			var __accu0__ = self;
/* 000490 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000490 */ 		}) ();
/* 000496 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000497 */ 			var float_content_with_caption = (function () {
/* 000497 */ 				var __accu0__ = self;
/* 000497 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000497 */ 			}) ();
/* 000497 */ 		}
/* 000501 */ 		else {
/* 000502 */ 			var float_content_with_caption = float_content_block_content;
/* 000502 */ 		}
/* 000504 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', float_instance.float_type), '}[h!]%\n'), '\\centering{}'), float_content_with_caption), '\\end{'), float_instance.float_type), '}');
/* 000504 */ 	});},
/* 000511 */ 	graphics_raster_magnification: 1,
/* 000512 */ 	graphics_vector_magnification: 1,
/* 000514 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000514 */ 		if (arguments.length) {
/* 000514 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000514 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000514 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000514 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000514 */ 					switch (__attrib0__) {
/* 000514 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 					}
/* 000514 */ 				}
/* 000514 */ 			}
/* 000514 */ 		}
/* 000514 */ 		else {
/* 000514 */ 		}
/* 000516 */ 		var __left0__ = (function () {
/* 000516 */ 			var __accu0__ = self;
/* 000516 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000516 */ 		}) ();
/* 000516 */ 		var src_url = __left0__ [0];
/* 000516 */ 		var incloptions = __left0__ [1];
/* 000518 */ 		var opts = '';
/* 000519 */ 		if (__t__ (incloptions !== null)) {
/* 000520 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000520 */ 		}
/* 000522 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000522 */ 	});},
/* 000524 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000524 */ 		if (arguments.length) {
/* 000524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000524 */ 					switch (__attrib0__) {
/* 000524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 					}
/* 000524 */ 				}
/* 000524 */ 			}
/* 000524 */ 		}
/* 000524 */ 		else {
/* 000524 */ 		}
/* 000528 */ 		var whoptc = null;
/* 000529 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000531 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000531 */ 			var width_pt = __left0__ [0];
/* 000531 */ 			var height_pt = __left0__ [1];
/* 000533 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000534 */ 				if (__t__ (width_pt !== null)) {
/* 000535 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000535 */ 				}
/* 000536 */ 				if (__t__ (height_pt !== null)) {
/* 000537 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000537 */ 				}
/* 000537 */ 			}
/* 000538 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000539 */ 				if (__t__ (width_pt !== null)) {
/* 000540 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000540 */ 				}
/* 000541 */ 				if (__t__ (height_pt !== null)) {
/* 000542 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000542 */ 				}
/* 000542 */ 			}
/* 000544 */ 			var whoptc = '';
/* 000545 */ 			if (__t__ (width_pt !== null)) {
/* 000546 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000546 */ 			}
/* 000547 */ 			if (__t__ (height_pt !== null)) {
/* 000548 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000548 */ 			}
/* 000548 */ 		}
/* 000550 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000550 */ 	});},
/* 000552 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000552 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000552 */ 			var target_id = null;
/* 000552 */ 		};
/* 000552 */ 		if (arguments.length) {
/* 000552 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000552 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000552 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000552 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000552 */ 					switch (__attrib0__) {
/* 000552 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 					}
/* 000552 */ 				}
/* 000552 */ 			}
/* 000552 */ 		}
/* 000552 */ 		else {
/* 000552 */ 		}
/* 000557 */ 		var stab_contents = '';
/* 000559 */ 		var cell_spans_styles = '';
/* 000560 */ 		var cell_hlines = [];
/* 000561 */ 		var cell_vlines = [];
/* 000563 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000563 */ 		var tabheight = __left0__ [0];
/* 000563 */ 		var tabwidth = __left0__ [1];
/* 000565 */ 		var __iterable0__ = cells_model.grid_data;
/* 000565 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000565 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000566 */ 			var stab_rowitems = [];
/* 000568 */ 			var __iterable1__ = row;
/* 000568 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000568 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000569 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000572 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000573 */ 					var cell_content = (function () {
/* 000573 */ 						var __accu0__ = self;
/* 000573 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000573 */ 					}) ();
/* 000580 */ 					var thiscellspanopts = [];
/* 000581 */ 					var rowj = cell.placement.row_range.start;
/* 000582 */ 					var rowjend = cell.placement.row_range.end;
/* 000583 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000584 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000585 */ 						(function () {
/* 000585 */ 							var __accu0__ = thiscellspanopts;
/* 000585 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000585 */ 						}) ();
/* 000585 */ 					}
/* 000587 */ 					var colj = cell.placement.col_range.start;
/* 000588 */ 					var coljend = cell.placement.col_range.end;
/* 000589 */ 					var numcols = __sub__ (coljend, colj);
/* 000590 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000591 */ 						(function () {
/* 000591 */ 							var __accu0__ = thiscellspanopts;
/* 000591 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000591 */ 						}) ();
/* 000591 */ 					}
/* 000593 */ 					var thiscellstyles = 'm';
/* 000594 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000595 */ 						var thiscellstyles = 'l';
/* 000595 */ 					}
/* 000596 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000597 */ 						var thiscellstyles = 'c';
/* 000597 */ 					}
/* 000598 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000599 */ 						var thiscellstyles = 'r';
/* 000599 */ 					}
/* 000601 */ 					var bgcol = null;
/* 000602 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000603 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000603 */ 					}
/* 000604 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000605 */ 						var bgcol = 'flmTabCellColorRed';
/* 000605 */ 					}
/* 000606 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000607 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000607 */ 					}
/* 000608 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000609 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000609 */ 					}
/* 000611 */ 					if (__t__ (bgcol)) {
/* 000612 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000612 */ 					}
/* 000614 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000615 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000615 */ 					}
/* 000617 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000618 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000619 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000619 */ 						}
/* 000620 */ 						else {
/* 000621 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000621 */ 						}
/* 000624 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000625 */ 							(function () {
/* 000625 */ 								var __accu0__ = cell_hlines;
/* 000625 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000625 */ 							}) ();
/* 000625 */ 						}
/* 000625 */ 					}
/* 000627 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000628 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000629 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000629 */ 						}
/* 000630 */ 						else {
/* 000631 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000631 */ 						}
/* 000633 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000634 */ 							(function () {
/* 000634 */ 								var __accu0__ = cell_vlines;
/* 000634 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000634 */ 							}) ();
/* 000634 */ 						}
/* 000635 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000636 */ 							(function () {
/* 000636 */ 								var __accu0__ = cell_vlines;
/* 000636 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000636 */ 							}) ();
/* 000636 */ 						}
/* 000636 */ 					}
/* 000638 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000641 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000641 */ 							var __accu0__ = ',';
/* 000641 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000641 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000641 */ 					}
/* 000641 */ 				}
/* 000644 */ 				else {
/* 000646 */ 					var cell_content = '';
/* 000646 */ 				}
/* 000648 */ 				(function () {
/* 000648 */ 					var __accu0__ = stab_rowitems;
/* 000648 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000648 */ 				}) ();
/* 000648 */ 			}
/* 000650 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000650 */ 				var __accu0__ = '&';
/* 000650 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000650 */ 			}) (), '\\\\'), '\n'));
/* 000650 */ 		}
/* 000661 */ 		var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{center}', '\n\\long\\def\\flmTempTypesetThisTable#1{%'), '\n\\begin{tblr}{#1,'), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000661 */ 			var __accu0__ = '';
/* 000661 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000661 */ 				var __accu1__ = [];
/* 000661 */ 				var __iterable0__ = cell_hlines;
/* 000661 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000662 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000662 */ 					var rownrng = __left0__ [0];
/* 000662 */ 					var colnrng = __left0__ [1];
/* 000662 */ 					var lsty = __left0__ [2];
/* 000662 */ 					(function () {
/* 000662 */ 						var __accu2__ = __accu1__;
/* 000662 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000662 */ 					}) ();
/* 000662 */ 				}
/* 000662 */ 				return __accu1__;
/* 000662 */ 			}) ());
/* 000663 */ 		}) ()), (function () {
/* 000663 */ 			var __accu0__ = '';
/* 000663 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000663 */ 				var __accu1__ = [];
/* 000663 */ 				var __iterable0__ = cell_vlines;
/* 000663 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000664 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000664 */ 					var rownrng = __left0__ [0];
/* 000664 */ 					var colnrng = __left0__ [1];
/* 000664 */ 					var lsty = __left0__ [2];
/* 000664 */ 					(function () {
/* 000664 */ 						var __accu2__ = __accu1__;
/* 000664 */ 						return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000664 */ 					}) ();
/* 000664 */ 				}
/* 000664 */ 				return __accu1__;
/* 000664 */ 			}) ());
/* 000664 */ 		}) ()), '}'), '\n'), '\\toprule'), '\n');
/* 000669 */ 		var s = __call__ (__iadd__, null, s, stab_contents);
/* 000670 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\bottomrule', '\n'));
/* 000671 */ 		var s = __call__ (__iadd__, null, s, __add__ ('\\end{tblr}%', '\n'));
/* 000672 */ 		var s = __call__ (__iadd__, null, s, __add__ ('}%', '\n'));
/* 000674 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.max_table_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 000685 */ 		var s = __call__ (__iadd__, null, s, '\\end{center}');
/* 000687 */ 		return s;
/* 000687 */ 	});},
/* 000689 */ 	max_table_width_latexdim: '0.96\\linewidth'
/* 000689 */ });
/* 000694 */ export var _rx_delayed_markers = (function () {
/* 000694 */ 	var __accu0__ = re;
/* 000694 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 000694 */ }) ();
/* 000703 */ export var _latex_preamble_suggested_defs = '\n\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\defterm\\else\n\\newenvironment{defterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\itshape\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n\\providecommand\\displayterm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% for cells/tables\n\\usepackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\n';
/* 000767 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000767 */ 	__module__: __name__,
/* 000768 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 000771 */ 	get get_style_information () {return function (fragment_renderer) {
/* 000771 */ 		if (arguments.length) {
/* 000771 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000771 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000771 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000771 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000771 */ 					switch (__attrib0__) {
/* 000771 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 					}
/* 000771 */ 				}
/* 000771 */ 			}
/* 000771 */ 		}
/* 000771 */ 		else {
/* 000771 */ 		}
/* 000772 */ 		return dict ({'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 000772 */ 	};},
/* 000776 */ 	format_name: 'latex'
/* 000776 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map