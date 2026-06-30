/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000014 */ import {Any, Callable, Mapping} from './flm._typing_helpers.js';
/* 000011 */ import * as __module_logging__ from './logging.js';
/* 000011 */ __nest__ (logging, '', __module_logging__);
/* 000009 */ import * as pyltxenc_lenc_get_builtin from './pylatexenc.latexencode.get_builtin_rules.js';
/* 000008 */ import {UnicodeToLatexEncoder} from './pylatexenc.latexencode.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {Callable, pyltxenc_lenc_get_builtin, UnicodeToLatexEncoder, Mapping, Any, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.latex';
/* 000012 */ export var logger = (function () {
/* 000012 */ 	var __accu0__ = logging;
/* 000012 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000012 */ }) ();
/* 000039 */ var _default_float_placement_policy = dict ({'nothing': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'captiononly': dict ({'environment': 'center', 'environment_options_str': '', 'centering': ''}), 'numberonly': dict ({'environment_options_str': '[hbtp]'}), 'numbercaption': dict ({'environment_options_str': '[hbtp]'})});
/* 000059 */ export var LatexFragmentRenderer =  __class__ ('LatexFragmentRenderer', [FragmentRenderer], {
/* 000059 */ 	__module__: __name__,
/* 000077 */ 	supports_delayed_render_markers: true,
/* 000086 */ 	heading_commands_by_level: dict ({1: 'section', 2: 'subsection', 3: 'subsubsection', 4: 'paragraph', 5: 'subparagraph', 6: 'subsubparagraph', 'theorem': 'flmTheoremHeading'}),
/* 000098 */ 	text_format_cmds: dict ({'textit': 'textit', 'textbf': 'textbf', 'defterm-term': 'flmDisplayTerm', 'term-in-defining-defterm': null}),
/* 000105 */ 	latex_semantic_block_environments: dict ({'defterm': 'flmDefterm', 'theoremlike': 'flmThmTheoremLike', 'definitionlike': 'flmThmDefinitionLike', 'prooflike': 'flmThmProofLike', 'quotation': 'quotation', 'quote': 'quote', 'address': 'flmAddress', 'blockquote': 'flmBlockquote'}),
/* 000121 */ 	latex_lines_environments: dict ({'quote': 'quote'}),
/* 000126 */ 	latex_macro_no_extra_space_after_dot: '\\@',
/* 000128 */ 	use_phantom_section: true,
/* 000129 */ 	latex_label_prefix: 'x:',
/* 000131 */ 	debug_disable_pin_labels: false,
/* 000132 */ 	debug_disable_link_hyperref: false,
/* 000134 */ 	use_flm_macro_for_pinning_labels: true,
/* 000138 */ 	latex_wrap_verbatim_macro: null,
/* 000140 */ 	use_endnote_latex_command: null,
/* 000141 */ 	use_citation_latex_command: null,
/* 000143 */ 	float_placement_policy: _default_float_placement_policy,
/* 000145 */ 	float_use_centering: '\\centering{}',
/* 000146 */ 	float_caption_join: ': ',
/* 000147 */ 	float_latex_before_caption: '\\flmFloatCaption{',
/* 000148 */ 	float_latex_after_caption: '}',
/* 000150 */ 	graphics_raster_magnification: 1,
/* 000151 */ 	graphics_vector_magnification: 1,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		__call__ (__call__ (__super__, null, LatexFragmentRenderer, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000160 */ 		self.latex_encoder = __call__ (UnicodeToLatexEncoder, null, __kwargtrans__ ({conversion_rules: (function () {
/* 000160 */ 			var __accu0__ = pyltxenc_lenc_get_builtin;
/* 000160 */ 			return __call__ (__accu0__.get_builtin_conversion_rules, __accu0__, 'defaults');
/* 000160 */ 		}) (), unknown_char_policy: 'keep'}));
/* 000160 */ 	});},
/* 000166 */ 	get latexescape () {return __get__ (this, function (self, value) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = self.latex_encoder;
/* 000179 */ 			return __call__ (__accu0__.unicode_to_latex, __accu0__, value);
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000182 */ 	get wrap_in_text_format_macro () {return __get__ (this, function (self, value, text_formats, render_context) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000200 */ 		var content = value;
/* 000202 */ 		var __iterable0__ = __call__ (py_reversed, null, __call__ (list, null, text_formats));
/* 000202 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 			var txtfmt = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 			var txtfmtcmd = (function () {
/* 000204 */ 				var __accu0__ = self.text_format_cmds;
/* 000204 */ 				return __call__ (__accu0__.py_get, __accu0__, txtfmt, null);
/* 000204 */ 			}) ();
/* 000205 */ 			if (__t__ (txtfmtcmd)) {
/* 000206 */ 				var content = __add__ (__add__ (__add__ (__add__ ('\\', txtfmtcmd), '{'), content), '}');
/* 000206 */ 			}
/* 000206 */ 		}
/* 000208 */ 		return content;
/* 000208 */ 	});},
/* 000211 */ 	get wrap_in_latex_enumeration_environment () {return __get__ (this, function (self, ltx_environment, annotations, items_content, render_context) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'ltx_environment': var ltx_environment = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'items_content': var items_content = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000230 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', ltx_environment), '}'), '% '), (function () {
/* 000230 */ 			var __accu0__ = ',';
/* 000230 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000230 */ 				var __accu1__ = [];
/* 000230 */ 				var __iterable0__ = annotations;
/* 000230 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000230 */ 					(function () {
/* 000230 */ 						var __accu2__ = __accu1__;
/* 000230 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000230 */ 							var __accu3__ = a;
/* 000230 */ 							return __call__ (__accu3__.py_replace, __accu3__, '\n', ' ');
/* 000230 */ 						}) ());
/* 000230 */ 					}) ();
/* 000230 */ 				}
/* 000230 */ 				return __accu1__;
/* 000230 */ 			}) ());
/* 000231 */ 		}) ()), '\n'), (function () {
/* 000231 */ 			var __accu0__ = items_content;
/* 000231 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000231 */ 		}) ()), '%\n'), '\\end{'), ltx_environment), '}');
/* 000231 */ 	});},
/* 000236 */ 	get pin_label_here () {return __get__ (this, function (self, target_id, display_latex, insert_phantom_section) {
/* 000236 */ 		if (typeof insert_phantom_section == 'undefined' || (insert_phantom_section != null && insert_phantom_section.hasOwnProperty ("__kwargtrans__"))) {;
/* 000236 */ 			var insert_phantom_section = true;
/* 000236 */ 		};
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'display_latex': var display_latex = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'insert_phantom_section': var insert_phantom_section = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000258 */ 		if (__t__ (self.debug_disable_pin_labels)) {
/* 000259 */ 			return '';
/* 000259 */ 		}
/* 000260 */ 		var s = '';
/* 000261 */ 		if (__t__ (__t__ (insert_phantom_section) && self.use_phantom_section)) {
/* 000262 */ 			var s = __call__ (__iadd__, null, s, '\\phantomsection ');
/* 000262 */ 		}
/* 000263 */ 		if (__t__ (self.use_flm_macro_for_pinning_labels)) {
/* 000264 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\flmPinLabelHereWithDisplayText{', self.latex_label_prefix), target_id), '}{'), display_latex), '}'));
/* 000264 */ 		}
/* 000268 */ 		else {
/* 000270 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\expandafter\\def\\csname @currentlabel\\endcsname{', display_latex), '}'));
/* 000271 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}'));
/* 000271 */ 		}
/* 000272 */ 		return s;
/* 000272 */ 	});},
/* 000276 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000279 */ 		return __add__ (__add__ ('\n\n', (function () {
/* 000279 */ 			var __accu0__ = self;
/* 000279 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000279 */ 		}) ()), '\n\n');
/* 000279 */ 	});},
/* 000283 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000284 */ 		return (function () {
/* 000284 */ 			var __accu0__ = self;
/* 000284 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000284 */ 				var __accu1__ = [];
/* 000285 */ 				var __iterable0__ = nodelist;
/* 000285 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000285 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000285 */ 					(function () {
/* 000285 */ 						var __accu2__ = __accu1__;
/* 000285 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000285 */ 							var __accu3__ = self;
/* 000285 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000285 */ 						}) ());
/* 000285 */ 					}) ();
/* 000285 */ 				}
/* 000285 */ 				return __accu1__;
/* 000285 */ 			}) (), render_context);
/* 000285 */ 		}) ();
/* 000285 */ 	});},
/* 000289 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000299 */ 		var result = '';
/* 000300 */ 		var __iterable0__ = content_list;
/* 000300 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000300 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000301 */ 			var result = (function () {
/* 000301 */ 				var __accu0__ = self;
/* 000301 */ 				return __call__ (__accu0__._latex_join, __accu0__, result, __call__ (str, null, s));
/* 000301 */ 			}) ();
/* 000301 */ 		}
/* 000302 */ 		return result;
/* 000302 */ 	});},
/* 000304 */ 	get _latex_join () {return __get__ (this, function (self, a, b) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		if (__t__ (__in__ ('\n', a))) {
/* 000306 */ 			var __left0__ = (function () {
/* 000306 */ 				var __accu0__ = a;
/* 000306 */ 				return __call__ (__accu0__.rsplit, __accu0__, '\n', 1);
/* 000306 */ 			}) ();
/* 000306 */ 			var _ = __left0__ [0];
/* 000306 */ 			var last_line = __left0__ [1];
/* 000306 */ 		}
/* 000307 */ 		else {
/* 000308 */ 			var last_line = a;
/* 000308 */ 		}
/* 000309 */ 		if (__t__ (__in__ ('%', last_line))) {
/* 000311 */ 			return __add__ (__add__ (a, '\n'), b);
/* 000311 */ 		}
/* 000312 */ 		if (__t__ ((function () {
/* 000312 */ 			var __accu0__ = re;
/* 000312 */ 			return __call__ (__accu0__.search, __accu0__, '\\\\[a-zA-Z]+$', a);
/* 000312 */ 		}) () !== null)) {
/* 000314 */ 			return __add__ (__add__ (a, ' '), b);
/* 000314 */ 		}
/* 000315 */ 		return __add__ (a, b);
/* 000315 */ 	});},
/* 000317 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000325 */ 		return __add__ ((function () {
/* 000325 */ 			var __accu0__ = '\n\n';
/* 000325 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000325 */ 				var __accu1__ = [];
/* 000325 */ 				var __iterable0__ = content_list;
/* 000325 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000325 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 					(function () {
/* 000325 */ 						var __accu2__ = __accu1__;
/* 000325 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000325 */ 							var __accu3__ = c;
/* 000325 */ 							return __call__ (__accu3__.strip, __accu3__);
/* 000325 */ 						}) ());
/* 000325 */ 					}) ();
/* 000325 */ 				}
/* 000325 */ 				return __accu1__;
/* 000325 */ 			}) ());
/* 000325 */ 		}) (), '\n');
/* 000325 */ 	});},
/* 000330 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000331 */ 		return (function () {
/* 000331 */ 			var __accu0__ = self;
/* 000331 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000331 */ 		}) ();
/* 000331 */ 	});},
/* 000333 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000335 */ 		return __add__ (__add__ ('% ', (function () {
/* 000335 */ 			var __accu0__ = debug_str;
/* 000335 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000335 */ 		}) ()), '\n');
/* 000335 */ 	});},
/* 000337 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000337 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000337 */ 			var annotations = null;
/* 000337 */ 		};
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000338 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000339 */ 			var annotations = [];
/* 000339 */ 		}
/* 000340 */ 		else {
/* 000341 */ 			var annotations = (function () {
/* 000341 */ 				var __accu0__ = [];
/* 000341 */ 				var __iterable0__ = annotations;
/* 000341 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000341 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000341 */ 					(function () {
/* 000341 */ 						var __accu1__ = __accu0__;
/* 000341 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000341 */ 							var __accu2__ = a;
/* 000341 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000341 */ 						}) ());
/* 000341 */ 					}) ();
/* 000341 */ 				}
/* 000341 */ 				return __accu0__;
/* 000341 */ 			}) ();
/* 000341 */ 		}
/* 000343 */ 		return '% {}\n'.format ((function () {
/* 000343 */ 			var __accu0__ = ' ';
/* 000343 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000343 */ 		}) ());
/* 000343 */ 	});},
/* 000345 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000345 */ 		var is_block_level = false;
/* 000345 */ 		var annotations = null;
/* 000345 */ 		var target_id = null;
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000347 */ 		if (__t__ (__t__ (is_block_level) && __in__ ('verbatimcode', annotations))) {
/* 000348 */ 			return __add__ (__add__ (__add__ ('\\begin{verbatim}', '\n'), value), '\\end{verbatim}');
/* 000348 */ 		}
/* 000351 */ 		if (__t__ (self.latex_wrap_verbatim_macro)) {
/* 000352 */ 			return __add__ (__add__ (__add__ (__add__ ('\\', self.latex_wrap_verbatim_macro), '{'), (function () {
/* 000352 */ 				var __accu0__ = self;
/* 000352 */ 				return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000352 */ 			}) ()), '}');
/* 000352 */ 		}
/* 000353 */ 		return (function () {
/* 000353 */ 			var __accu0__ = self;
/* 000353 */ 			return __call__ (__accu0__.latexescape, __accu0__, value);
/* 000353 */ 		}) ();
/* 000353 */ 	});},
/* 000355 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000355 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var environmentname = null;
/* 000355 */ 		};
/* 000355 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var target_id = null;
/* 000355 */ 		};
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000363 */ 		var __left0__ = delimiters;
/* 000363 */ 		var begin_delim = __left0__ [0];
/* 000363 */ 		var end_delim = __left0__ [1];
/* 000364 */ 		if (__t__ (environmentname)) {
/* 000365 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000366 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000366 */ 		}
/* 000369 */ 		return __add__ (__add__ (begin_delim, (function () {
/* 000369 */ 			var __accu0__ = self;
/* 000369 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000369 */ 		}) ()), end_delim);
/* 000369 */ 	});},
/* 000372 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000376 */ 		var content = (function () {
/* 000376 */ 			var __accu0__ = self;
/* 000376 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000376 */ 		}) ();
/* 000382 */ 		return (function () {
/* 000382 */ 			var __accu0__ = self;
/* 000382 */ 			return __call__ (__accu0__.wrap_in_text_format_macro, __accu0__, content, text_formats, render_context);
/* 000382 */ 		}) ();
/* 000382 */ 	});},
/* 000385 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000385 */ 		var annotations = null;
/* 000385 */ 		var target_id = null;
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000388 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __eq__ (role, 'endnotes'))) {
/* 000389 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), content), '}');
/* 000389 */ 		}
/* 000392 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __eq__ (role, 'citations'))) {
/* 000393 */ 			var content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), content), '}');
/* 000393 */ 		}
/* 000397 */ 		return content;
/* 000397 */ 	});},
/* 000400 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000400 */ 		var annotations = null;
/* 000400 */ 		var target_id = null;
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000403 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000404 */ 			var annotations = [];
/* 000404 */ 		}
/* 000405 */ 		else {
/* 000406 */ 			var annotations = (function () {
/* 000406 */ 				var __accu0__ = [];
/* 000406 */ 				var __iterable0__ = annotations;
/* 000406 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000406 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000406 */ 					(function () {
/* 000406 */ 						var __accu1__ = __accu0__;
/* 000406 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000406 */ 							var __accu2__ = a;
/* 000406 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000406 */ 						}) ());
/* 000406 */ 					}) ();
/* 000406 */ 				}
/* 000406 */ 				return __accu0__;
/* 000406 */ 			}) ();
/* 000406 */ 		}
/* 000410 */ 		var begincmd = __add__ (__add__ ('% --- begin ', (function () {
/* 000410 */ 			var __accu0__ = ',';
/* 000410 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000410 */ 		}) ()), ' ---\n');
/* 000411 */ 		var endcmd = __add__ (__add__ ('% --- end ', (function () {
/* 000411 */ 			var __accu0__ = ',';
/* 000411 */ 			return __call__ (__accu0__.join, __accu0__, annotations);
/* 000411 */ 		}) ()), ' ---\n');
/* 000413 */ 		if (__t__ (__t__ (role) && __in__ (role, self.latex_semantic_block_environments))) {
/* 000414 */ 			var envname = __getitem__ (self.latex_semantic_block_environments, role);
/* 000415 */ 			var begincmd = __add__ (__add__ ('\\begin{', envname), '}');
/* 000416 */ 			var endcmd = __add__ (__add__ (__add__ ('\\end{', envname), '}'), '%\n');
/* 000416 */ 		}
/* 000418 */ 		var lblcmd = '';
/* 000419 */ 		if (__t__ (target_id)) {
/* 000424 */ 			var lblcmd = (function () {
/* 000424 */ 				var __accu0__ = self;
/* 000424 */ 				return __call__ (__accu0__.pin_label_here, __accu0__, target_id, '<block>', __kwargtrans__ ({insert_phantom_section: true}));
/* 000424 */ 			}) ();
/* 000424 */ 		}
/* 000429 */ 		return __add__ (__add__ (begincmd, lblcmd), (function () {
/* 000429 */ 			var __accu0__ = self;
/* 000429 */ 			return __call__ (__accu0__._latex_join, __accu0__, content, endcmd);
/* 000429 */ 		}) ());
/* 000429 */ 	});},
/* 000434 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000434 */ 		var role = null;
/* 000434 */ 		var annotations = null;
/* 000434 */ 		var target_id = null;
/* 000434 */ 		if (arguments.length) {
/* 000434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 					switch (__attrib0__) {
/* 000434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		else {
/* 000434 */ 		}
/* 000443 */ 		var s_lines = [];
/* 000445 */ 		var __iterable0__ = lines_info_list;
/* 000445 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000445 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 			var line_content_nodelist = line_info.nodelist;
/* 000448 */ 			var line_content = (function () {
/* 000448 */ 				var __accu0__ = self;
/* 000448 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000448 */ 			}) ();
/* 000454 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000455 */ 				var line_content = __add__ (__mul__ ('\\indent ', line_info.indent_left), line_content);
/* 000455 */ 			}
/* 000460 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000461 */ 				(function () {
/* 000461 */ 					var __accu0__ = logger;
/* 000461 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in latex renderer');
/* 000461 */ 				}) ();
/* 000461 */ 			}
/* 000462 */ 			if (__t__ (line_info.align !== null)) {
/* 000463 */ 				(function () {
/* 000463 */ 					var __accu0__ = logger;
/* 000463 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in latex renderer');
/* 000463 */ 				}) ();
/* 000463 */ 			}
/* 000465 */ 			(function () {
/* 000465 */ 				var __accu0__ = s_lines;
/* 000465 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000465 */ 			}) ();
/* 000465 */ 		}
/* 000468 */ 		var s_lines = (function () {
/* 000468 */ 			var __accu0__ = [];
/* 000472 */ 			var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000472 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000472 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000472 */ 				var j = __left0__ [0];
/* 000472 */ 				var line_content = __left0__ [1];
/* 000472 */ 				(function () {
/* 000472 */ 					var __accu1__ = __accu0__;
/* 000470 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (__add__ (line_content, '%\n'), '\\\\\n') : line_content));
/* 000470 */ 				}) ();
/* 000470 */ 			}
/* 000470 */ 			return __accu0__;
/* 000470 */ 		}) ();
/* 000475 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000476 */ 			var annotations = [];
/* 000476 */ 		}
/* 000477 */ 		else {
/* 000478 */ 			var annotations = (function () {
/* 000478 */ 				var __accu0__ = [];
/* 000478 */ 				var __iterable0__ = annotations;
/* 000478 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000478 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000478 */ 					(function () {
/* 000478 */ 						var __accu1__ = __accu0__;
/* 000478 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000478 */ 							var __accu2__ = a;
/* 000478 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000478 */ 						}) ());
/* 000478 */ 					}) ();
/* 000478 */ 				}
/* 000478 */ 				return __accu0__;
/* 000478 */ 			}) ();
/* 000478 */ 		}
/* 000480 */ 		var ltx_environment = 'flmLines';
/* 000481 */ 		if (__t__ (__t__ (role !== null) && __in__ (role, self.latex_lines_environments))) {
/* 000482 */ 			var ltx_environment = __getitem__ (self.latex_lines_environments, role);
/* 000482 */ 		}
/* 000484 */ 		return (function () {
/* 000484 */ 			var __accu0__ = self;
/* 000487 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, annotations, (function () {
/* 000487 */ 				var __accu1__ = self;
/* 000487 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000487 */ 			}) (), render_context);
/* 000487 */ 		}) ();
/* 000487 */ 	});},
/* 000495 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000495 */ 		var target_id_generator = null;
/* 000495 */ 		var annotations = null;
/* 000495 */ 		var nested_depth = null;
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000506 */ 		var s_items = [];
/* 000508 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000508 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000508 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000508 */ 			var j = __left0__ [0];
/* 000508 */ 			var item_content_nodelist = __left0__ [1];
/* 000510 */ 			var use_block_level = true;
/* 000511 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000514 */ 				var use_block_level = false;
/* 000514 */ 			}
/* 000516 */ 			// pass;
/* 000520 */ 			// pass;
/* 000524 */ 			var item_content = (function () {
/* 000524 */ 				var __accu0__ = self;
/* 000524 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000524 */ 			}) ();
/* 000530 */ 			var enumno = __add__ (1, j);
/* 000532 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000533 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000534 */ 				var tag_content = (function () {
/* 000534 */ 					var __accu0__ = self;
/* 000534 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000534 */ 				}) ();
/* 000534 */ 			}
/* 000535 */ 			else {
/* 000536 */ 				var tag_content = (function () {
/* 000536 */ 					var __accu0__ = self;
/* 000536 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000536 */ 				}) ();
/* 000536 */ 			}
/* 000542 */ 			var itemlabel = '';
/* 000543 */ 			if (__t__ (target_id_generator !== null)) {
/* 000544 */ 				var this_target_id = __call__ (target_id_generator, null, enumno);
/* 000545 */ 				if (__t__ (this_target_id !== null)) {
/* 000546 */ 					var itemlabel = (function () {
/* 000546 */ 						var __accu0__ = self;
/* 000546 */ 						return __call__ (__accu0__.pin_label_here, __accu0__, this_target_id, tag_content, __kwargtrans__ ({insert_phantom_section: true}));
/* 000546 */ 					}) ();
/* 000546 */ 				}
/* 000546 */ 			}
/* 000549 */ 			(function () {
/* 000549 */ 				var __accu0__ = s_items;
/* 000549 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (__add__ (__add__ ('%\n', '\\item[{'), tag_content), '}]'), itemlabel), item_content));
/* 000549 */ 			}) ();
/* 000549 */ 		}
/* 000555 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000556 */ 			var annotations = [];
/* 000556 */ 		}
/* 000557 */ 		else {
/* 000558 */ 			var annotations = (function () {
/* 000558 */ 				var __accu0__ = [];
/* 000558 */ 				var __iterable0__ = annotations;
/* 000558 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000558 */ 					var a = __getitem__ (__iterable0__, __index0__);
/* 000558 */ 					(function () {
/* 000558 */ 						var __accu1__ = __accu0__;
/* 000558 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000558 */ 							var __accu2__ = a;
/* 000558 */ 							return __call__ (__accu2__.py_replace, __accu2__, '\n', ' ');
/* 000558 */ 						}) ());
/* 000558 */ 					}) ();
/* 000558 */ 				}
/* 000558 */ 				return __accu0__;
/* 000558 */ 			}) ();
/* 000558 */ 		}
/* 000560 */ 		var ltx_environment = 'itemize';
/* 000562 */ 		if (__t__ (__t__ (__ge__ (__call__ (len, null, annotations), 1)) && __in__ (__getitem__ (annotations, 0), tuple (['enumerate', 'description', 'itemize'])))) {
/* 000565 */ 			var ltx_environment = __getitem__ (annotations, 0);
/* 000565 */ 		}
/* 000567 */ 		return (function () {
/* 000567 */ 			var __accu0__ = self;
/* 000570 */ 			return __call__ (__accu0__.wrap_in_latex_enumeration_environment, __accu0__, ltx_environment, __add__ (['enumeration'], annotations), (function () {
/* 000570 */ 				var __accu1__ = self;
/* 000570 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000570 */ 			}) (), render_context);
/* 000570 */ 		}) ();
/* 000570 */ 	});},
/* 000575 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000575 */ 		var heading_level = 1;
/* 000575 */ 		var inline_heading = false;
/* 000575 */ 		var target_id = null;
/* 000575 */ 		var annotations = null;
/* 000575 */ 		if (arguments.length) {
/* 000575 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000575 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000575 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000575 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000575 */ 					switch (__attrib0__) {
/* 000575 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 					}
/* 000575 */ 				}
/* 000575 */ 			}
/* 000575 */ 		}
/* 000575 */ 		else {
/* 000575 */ 		}
/* 000582 */ 		if (__t__ (!__in__ (heading_level, self.heading_commands_by_level))) {
/* 000585 */ 			var __except0__ = __call__ (ValueError, null, "Heading level ‘{}’ undefined for latex rendering, expected one of {}.\nPlease make sure the corresponding heading level is set to a latex command name in the latex fragment renderer's configuration (flm: renderer: latex: heading_commands_by_level: <LEVEL>: <command-name>)".format (heading_level, __call__ (list, null, (function () {
/* 000585 */ 				var __accu0__ = __call__ (dict, null, self.heading_commands_by_level);
/* 000585 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000585 */ 			}) ())));
/* 000585 */ 			__except0__.__cause__ = null;
/* 000585 */ 			throw __except0__;
/* 000585 */ 		}
/* 000591 */ 		var heading_command = __getitem__ (self.heading_commands_by_level, heading_level);
/* 000593 */ 		var title_content = (function () {
/* 000593 */ 			var __accu0__ = self;
/* 000593 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000593 */ 		}) ();
/* 000595 */ 		var labelcmd = '';
/* 000596 */ 		if (__t__ (target_id)) {
/* 000597 */ 			var labelcmd = __add__ (__add__ (__add__ ('\\label{', self.latex_label_prefix), target_id), '}%\n');
/* 000597 */ 		}
/* 000599 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\', heading_command), '{'), title_content), '}'), '%\n'), labelcmd);
/* 000599 */ 	});},
/* 000604 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000604 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000604 */ 			var annotations = null;
/* 000604 */ 		};
/* 000604 */ 		if (arguments.length) {
/* 000604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 					switch (__attrib0__) {
/* 000604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 					}
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 		else {
/* 000604 */ 		}
/* 000606 */ 		var display_content = (function () {
/* 000606 */ 			var __accu0__ = self;
/* 000606 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000606 */ 		}) ();
/* 000612 */ 		var annotations = __t__ (annotations) || [];
/* 000614 */ 		if (__t__ (__t__ (self.use_endnote_latex_command !== null) && __in__ ('endnotes', annotations))) {
/* 000615 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_endnote_latex_command), '{'), display_content), '}');
/* 000615 */ 		}
/* 000618 */ 		if (__t__ (__t__ (self.use_citation_latex_command !== null) && __in__ ('citations', annotations))) {
/* 000619 */ 			var display_content = __add__ (__add__ (__add__ (__add__ ('\\', self.use_citation_latex_command), '{'), display_content), '}');
/* 000619 */ 		}
/* 000623 */ 		if (__t__ (__eq__ (__getslice__ (href, 0, 1, 1), '#'))) {
/* 000624 */ 			return (function () {
/* 000624 */ 				var __accu0__ = self;
/* 000624 */ 				return __call__ (__accu0__.render_latex_link_hyperref, __accu0__, display_content, __getslice__ (href, 1, null, 1));
/* 000624 */ 			}) ();
/* 000624 */ 		}
/* 000628 */ 		return (function () {
/* 000628 */ 			var __accu0__ = self;
/* 000628 */ 			return __call__ (__accu0__.render_latex_link_href, __accu0__, display_content, href);
/* 000628 */ 		}) ();
/* 000628 */ 	});},
/* 000633 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000633 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000633 */ 			var is_block_level = false;
/* 000633 */ 		};
/* 000633 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000633 */ 			var color_index = 0;
/* 000633 */ 		};
/* 000633 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000633 */ 			var initials = null;
/* 000633 */ 		};
/* 000633 */ 		if (arguments.length) {
/* 000633 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 					switch (__attrib0__) {
/* 000633 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 			}
/* 000633 */ 		}
/* 000633 */ 		else {
/* 000633 */ 		}
/* 000641 */ 		var s = __add__ (__add__ (__add__ ('\\flmAnnotationComment', '{'), __call__ (str, null, color_index)), '}');
/* 000642 */ 		if (__t__ (initials)) {
/* 000643 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000643 */ 				var __accu0__ = self;
/* 000643 */ 				return __call__ (__accu0__.render_value, __accu0__, initials, render_context);
/* 000643 */ 			}) ()), '}'));
/* 000643 */ 		}
/* 000645 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000645 */ 			var __accu0__ = self;
/* 000645 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000645 */ 		}) ()), '}'));
/* 000647 */ 		return s;
/* 000647 */ 	});},
/* 000649 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000649 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000649 */ 			var is_block_level = false;
/* 000649 */ 		};
/* 000649 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000649 */ 			var color_index = 0;
/* 000649 */ 		};
/* 000649 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000649 */ 			var initials = null;
/* 000649 */ 		};
/* 000649 */ 		if (arguments.length) {
/* 000649 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000649 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000649 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000649 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000649 */ 					switch (__attrib0__) {
/* 000649 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 					}
/* 000649 */ 				}
/* 000649 */ 			}
/* 000649 */ 		}
/* 000649 */ 		else {
/* 000649 */ 		}
/* 000657 */ 		var s = __add__ (__add__ (__add__ ('\\flmAnnotationHighlight', '{'), __call__ (str, null, color_index)), '}');
/* 000658 */ 		if (__t__ (initials)) {
/* 000659 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000659 */ 				var __accu0__ = self;
/* 000659 */ 				return __call__ (__accu0__.render_value, __accu0__, initials, render_context);
/* 000659 */ 			}) ()), '}'));
/* 000659 */ 		}
/* 000661 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', (function () {
/* 000661 */ 			var __accu0__ = self;
/* 000661 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000661 */ 		}) ()), '}'));
/* 000663 */ 		return s;
/* 000663 */ 	});},
/* 000666 */ 	get render_latex_link_hyperref () {return __get__ (this, function (self, display_content, to_target_id) {
/* 000666 */ 		if (arguments.length) {
/* 000666 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000666 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000666 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000666 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000666 */ 					switch (__attrib0__) {
/* 000666 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 						case 'to_target_id': var to_target_id = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 					}
/* 000666 */ 				}
/* 000666 */ 			}
/* 000666 */ 		}
/* 000666 */ 		else {
/* 000666 */ 		}
/* 000667 */ 		if (__t__ (self.debug_disable_link_hyperref)) {
/* 000668 */ 			return display_content;
/* 000668 */ 		}
/* 000669 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ ('\\hyperref[{', self.latex_label_prefix), to_target_id), '}]{'), display_content), '}%\n');
/* 000669 */ 	});},
/* 000674 */ 	get render_latex_link_href () {return __get__ (this, function (self, display_content, href) {
/* 000674 */ 		if (arguments.length) {
/* 000674 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000674 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000674 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000674 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000674 */ 					switch (__attrib0__) {
/* 000674 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 						case 'display_content': var display_content = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 					}
/* 000674 */ 				}
/* 000674 */ 			}
/* 000674 */ 		}
/* 000674 */ 		else {
/* 000674 */ 		}
/* 000675 */ 		var escaped_url = (function () {
/* 000675 */ 			var __accu0__ = re;
/* 000675 */ 			return __call__ (__accu0__.sub, __accu0__, '[#%{}\\\\]', (function __lambda__ (m) {
/* 000675 */ 				if (arguments.length) {
/* 000675 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000675 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000675 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000675 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000675 */ 							switch (__attrib0__) {
/* 000675 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 							}
/* 000675 */ 						}
/* 000675 */ 					}
/* 000675 */ 				}
/* 000675 */ 				else {
/* 000675 */ 				}
/* 000675 */ 				return __add__ ('\\', (function () {
/* 000675 */ 					var __accu1__ = m;
/* 000675 */ 					return __call__ (__accu1__.group, __accu1__, 0);
/* 000675 */ 				}) ());
/* 000675 */ 			}), href);
/* 000675 */ 		}) ();
/* 000676 */ 		return __add__ (__add__ (__add__ (__add__ ('\\href{', escaped_url), '}{'), display_content), '}');
/* 000676 */ 	});},
/* 000678 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000678 */ 		if (arguments.length) {
/* 000678 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000678 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000678 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000678 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000678 */ 					switch (__attrib0__) {
/* 000678 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 					}
/* 000678 */ 				}
/* 000678 */ 			}
/* 000678 */ 		}
/* 000678 */ 		else {
/* 000678 */ 		}
/* 000679 */ 		return __add__ (__add__ ('\\FLMDLYD{', __call__ (str, null, delayed_key)), '}');
/* 000679 */ 	});},
/* 000681 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000681 */ 		if (arguments.length) {
/* 000681 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000681 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000681 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000681 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000681 */ 					switch (__attrib0__) {
/* 000681 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 					}
/* 000681 */ 				}
/* 000681 */ 			}
/* 000681 */ 		}
/* 000681 */ 		else {
/* 000681 */ 		}
/* 000682 */ 		return '% delayed:{}\n'.format (delayed_key);
/* 000682 */ 	});},
/* 000684 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000684 */ 		if (arguments.length) {
/* 000684 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000684 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000684 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000684 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000684 */ 					switch (__attrib0__) {
/* 000684 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 					}
/* 000684 */ 				}
/* 000684 */ 			}
/* 000684 */ 		}
/* 000684 */ 		else {
/* 000684 */ 		}
/* 000685 */ 		return (function () {
/* 000685 */ 			var __accu0__ = _rx_delayed_markers;
/* 000685 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000685 */ 				if (arguments.length) {
/* 000685 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000685 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000685 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000685 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000685 */ 							switch (__attrib0__) {
/* 000685 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 							}
/* 000685 */ 						}
/* 000685 */ 					}
/* 000685 */ 				}
/* 000685 */ 				else {
/* 000685 */ 				}
/* 000686 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000686 */ 					var __accu1__ = m;
/* 000686 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000686 */ 				}) ()));
/* 000686 */ 			}), content);
/* 000686 */ 		}) ();
/* 000686 */ 	});},
/* 000693 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000693 */ 		if (arguments.length) {
/* 000693 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000693 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000693 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000693 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000693 */ 					switch (__attrib0__) {
/* 000693 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 					}
/* 000693 */ 				}
/* 000693 */ 			}
/* 000693 */ 		}
/* 000693 */ 		else {
/* 000693 */ 		}
/* 000696 */ 		var has_number = false;
/* 000697 */ 		var has_caption = false;
/* 000699 */ 		var full_figcaption_rendered_list = [];
/* 000700 */ 		var float_designator = null;
/* 000701 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000702 */ 			var has_number = true;
/* 000705 */ 			var float_designator = __add__ (__add__ ((function () {
/* 000705 */ 				var __accu0__ = self;
/* 000705 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000710 */ 			}) (), '~'), (function () {
/* 000710 */ 				var __accu0__ = self;
/* 000710 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000710 */ 			}) ());
/* 000710 */ 		}
/* 000715 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000719 */ 			var float_designator = (function () {
/* 000719 */ 				var __accu0__ = self;
/* 000719 */ 				return __call__ (__accu0__.render_value, __accu0__, float_instance.float_type_info.float_caption_name, render_context);
/* 000719 */ 			}) ();
/* 000719 */ 		}
/* 000722 */ 		else {
/* 000726 */ 			// pass;
/* 000726 */ 		}
/* 000728 */ 		var labelcmd = '';
/* 000729 */ 		if (__t__ (float_designator !== null)) {
/* 000730 */ 			(function () {
/* 000730 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000730 */ 				return __call__ (__accu0__.append, __accu0__, float_designator);
/* 000730 */ 			}) ();
/* 000732 */ 			if (__t__ (float_instance.target_id !== null)) {
/* 000733 */ 				var labelcmd = (function () {
/* 000733 */ 					var __accu0__ = self;
/* 000733 */ 					return __call__ (__accu0__.pin_label_here, __accu0__, float_instance.target_id, float_designator, __kwargtrans__ ({insert_phantom_section: true}));
/* 000733 */ 				}) ();
/* 000733 */ 			}
/* 000733 */ 		}
/* 000737 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000738 */ 			var has_caption = true;
/* 000742 */ 			(function () {
/* 000742 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000742 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_join);
/* 000742 */ 			}) ();
/* 000746 */ 			(function () {
/* 000746 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000747 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000747 */ 					var __accu1__ = self;
/* 000747 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000747 */ 				}) ());
/* 000747 */ 			}) ();
/* 000747 */ 		}
/* 000753 */ 		var rendered_float_caption = null;
/* 000754 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000757 */ 			var rendered_float_caption = __add__ (__add__ (self.float_latex_before_caption, (function () {
/* 000757 */ 				var __accu0__ = self;
/* 000759 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __add__ (labelcmd, (function () {
/* 000759 */ 					var __accu1__ = self;
/* 000759 */ 					return __call__ (__accu1__.render_join, __accu1__, full_figcaption_rendered_list, render_context);
/* 000759 */ 				}) ()), __kwargtrans__ ({role: 'figure_caption', render_context: render_context}));
/* 000759 */ 			}) ()), self.float_latex_after_caption);
/* 000759 */ 		}
/* 000766 */ 		var float_content_block_content = (function () {
/* 000766 */ 			var __accu0__ = self;
/* 000766 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000766 */ 		}) ();
/* 000772 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000773 */ 			var float_content_with_caption = (function () {
/* 000773 */ 				var __accu0__ = self;
/* 000773 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block_content, rendered_float_caption], render_context);
/* 000773 */ 			}) ();
/* 000773 */ 		}
/* 000777 */ 		else {
/* 000778 */ 			var float_content_with_caption = float_content_block_content;
/* 000778 */ 		}
/* 000780 */ 		var env_name = float_instance.float_type;
/* 000781 */ 		var env_options_str = '[h!]';
/* 000782 */ 		var centering = self.float_use_centering;
/* 000784 */ 		if (__t__ (__t__ (!__t__ ((has_number))) && !__t__ ((has_caption)))) {
/* 000785 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'nothing');
/* 000785 */ 		}
/* 000786 */ 		else if (__t__ (__t__ (has_number) && !__t__ ((has_caption)))) {
/* 000787 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numberonly');
/* 000787 */ 		}
/* 000788 */ 		else if (__t__ (__t__ (!__t__ ((has_number))) && has_caption)) {
/* 000789 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'captiononly');
/* 000789 */ 		}
/* 000790 */ 		else {
/* 000791 */ 			var pl_policy = __getitem__ (self.float_placement_policy, 'numbercaption');
/* 000791 */ 		}
/* 000793 */ 		if (__t__ (__t__ (__in__ ('environment', pl_policy)) && __getitem__ (pl_policy, 'environment') !== null)) {
/* 000794 */ 			var env_name = __getitem__ (pl_policy, 'environment');
/* 000794 */ 		}
/* 000795 */ 		if (__t__ (__t__ (__in__ ('environment_options_str', pl_policy)) && __getitem__ (pl_policy, 'environment_options_str') !== null)) {
/* 000796 */ 			var env_options_str = __getitem__ (pl_policy, 'environment_options_str');
/* 000796 */ 		}
/* 000797 */ 		if (__t__ (__t__ (__in__ ('centering', pl_policy)) && __getitem__ (pl_policy, 'centering') !== null)) {
/* 000798 */ 			var centering = __getitem__ (pl_policy, 'centering');
/* 000798 */ 		}
/* 000800 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', env_name), '}'), env_options_str), '%\n'), centering), float_content_with_caption), '\\end{'), env_name), '}');
/* 000800 */ 	});},
/* 000808 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000808 */ 		if (arguments.length) {
/* 000808 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000808 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000808 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000808 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000808 */ 					switch (__attrib0__) {
/* 000808 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000808 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000808 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000808 */ 					}
/* 000808 */ 				}
/* 000808 */ 			}
/* 000808 */ 		}
/* 000808 */ 		else {
/* 000808 */ 		}
/* 000811 */ 		var __left0__ = (function () {
/* 000811 */ 			var __accu0__ = self;
/* 000811 */ 			return __call__ (__accu0__.collect_graphics_resource, __accu0__, graphics_resource, render_context);
/* 000811 */ 		}) ();
/* 000811 */ 		var src_url = __left0__ [0];
/* 000811 */ 		var incloptions = __left0__ [1];
/* 000813 */ 		var opts = '';
/* 000814 */ 		if (__t__ (incloptions !== null)) {
/* 000815 */ 			var opts = __add__ (__add__ ('[', incloptions), ']');
/* 000815 */ 		}
/* 000817 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', opts), '{'), src_url), '}');
/* 000817 */ 	});},
/* 000819 */ 	get collect_graphics_resource () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000819 */ 		if (arguments.length) {
/* 000819 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000819 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000819 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000819 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000819 */ 					switch (__attrib0__) {
/* 000819 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 					}
/* 000819 */ 				}
/* 000819 */ 			}
/* 000819 */ 		}
/* 000819 */ 		else {
/* 000819 */ 		}
/* 000821 */ 		var whoptc = null;
/* 000822 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000824 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000824 */ 			var width_pt = __left0__ [0];
/* 000824 */ 			var height_pt = __left0__ [1];
/* 000826 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000827 */ 				if (__t__ (width_pt !== null)) {
/* 000828 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000828 */ 				}
/* 000829 */ 				if (__t__ (height_pt !== null)) {
/* 000830 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000830 */ 				}
/* 000830 */ 			}
/* 000831 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000832 */ 				if (__t__ (width_pt !== null)) {
/* 000833 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000833 */ 				}
/* 000834 */ 				if (__t__ (height_pt !== null)) {
/* 000835 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000835 */ 				}
/* 000835 */ 			}
/* 000837 */ 			var whoptc = '';
/* 000838 */ 			if (__t__ (width_pt !== null)) {
/* 000839 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'width={}pt,'.format (width_pt));
/* 000839 */ 			}
/* 000840 */ 			if (__t__ (height_pt !== null)) {
/* 000841 */ 				var whoptc = __call__ (__iadd__, null, whoptc, 'height={}pt,'.format (height_pt));
/* 000841 */ 			}
/* 000841 */ 		}
/* 000843 */ 		return tuple ([graphics_resource.src_url, whoptc]);
/* 000843 */ 	});},
/* 000846 */ 	cells_max_width_latexdim: '0.96\\linewidth',
/* 000847 */ 	cells_render_method: 'fit_width_test',
/* 000849 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id, render_cell_nodelist_contents_fn) {
/* 000849 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000849 */ 			var target_id = null;
/* 000849 */ 		};
/* 000849 */ 		if (typeof render_cell_nodelist_contents_fn == 'undefined' || (render_cell_nodelist_contents_fn != null && render_cell_nodelist_contents_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000849 */ 			var render_cell_nodelist_contents_fn = null;
/* 000849 */ 		};
/* 000849 */ 		if (arguments.length) {
/* 000849 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000849 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000849 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000849 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000849 */ 					switch (__attrib0__) {
/* 000849 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'render_cell_nodelist_contents_fn': var render_cell_nodelist_contents_fn = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 					}
/* 000849 */ 				}
/* 000849 */ 			}
/* 000849 */ 		}
/* 000849 */ 		else {
/* 000849 */ 		}
/* 000852 */ 		if (__t__ (render_cell_nodelist_contents_fn === null)) {
/* 000853 */ 			var render_cell_nodelist_contents_fn = (function __lambda__ (nodes, render_context) {
/* 000853 */ 				if (arguments.length) {
/* 000853 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000853 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000853 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000853 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000853 */ 							switch (__attrib0__) {
/* 000853 */ 								case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 							}
/* 000853 */ 						}
/* 000853 */ 					}
/* 000853 */ 				}
/* 000853 */ 				else {
/* 000853 */ 				}
/* 000854 */ 				return (function () {
/* 000854 */ 					var __accu0__ = self;
/* 000854 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, nodes, __kwargtrans__ ({render_context: render_context}));
/* 000854 */ 				}) ();
/* 000854 */ 			});
/* 000854 */ 		}
/* 000856 */ 		var stab_contents = '';
/* 000858 */ 		var cell_spans_styles = '';
/* 000859 */ 		var cell_hlines = [];
/* 000860 */ 		var cell_vlines = [];
/* 000862 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000862 */ 		var tabheight = __left0__ [0];
/* 000862 */ 		var tabwidth = __left0__ [1];
/* 000864 */ 		var __iterable0__ = cells_model.grid_data;
/* 000864 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000864 */ 			var row = __getitem__ (__iterable0__, __index0__);
/* 000865 */ 			var stab_rowitems = [];
/* 000867 */ 			var __iterable1__ = row;
/* 000867 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000867 */ 				var cellinfo = __getitem__ (__iterable1__, __index1__);
/* 000868 */ 				if (__t__ (__t__ (cellinfo !== null) && __t__ (__getitem__ (cellinfo, 'cell') !== null) && __getitem__ (cellinfo, 'is_topleft'))) {
/* 000871 */ 					var cell = __getitem__ (cellinfo, 'cell');
/* 000872 */ 					var cell_content = __call__ (render_cell_nodelist_contents_fn, null, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000879 */ 					var thiscellspanopts = [];
/* 000880 */ 					var rowj = cell.placement.row_range.start;
/* 000881 */ 					var rowjend = cell.placement.row_range.end;
/* 000882 */ 					var numrows = __sub__ (rowjend, rowj);
/* 000883 */ 					if (__t__ (__gt__ (numrows, 1))) {
/* 000884 */ 						(function () {
/* 000884 */ 							var __accu0__ = thiscellspanopts;
/* 000884 */ 							return __call__ (__accu0__.append, __accu0__, 'r={}'.format (numrows));
/* 000884 */ 						}) ();
/* 000884 */ 					}
/* 000886 */ 					var colj = cell.placement.col_range.start;
/* 000887 */ 					var coljend = cell.placement.col_range.end;
/* 000888 */ 					var numcols = __sub__ (coljend, colj);
/* 000889 */ 					if (__t__ (__gt__ (numcols, 1))) {
/* 000890 */ 						(function () {
/* 000890 */ 							var __accu0__ = thiscellspanopts;
/* 000890 */ 							return __call__ (__accu0__.append, __accu0__, 'c={}'.format (numcols));
/* 000890 */ 						}) ();
/* 000890 */ 					}
/* 000892 */ 					var thiscellstyles = 'm';
/* 000893 */ 					if (__t__ (__in__ ('l', cell.styles))) {
/* 000894 */ 						var thiscellstyles = 'l';
/* 000894 */ 					}
/* 000895 */ 					else if (__t__ (__in__ ('c', cell.styles))) {
/* 000896 */ 						var thiscellstyles = 'c';
/* 000896 */ 					}
/* 000897 */ 					else if (__t__ (__in__ ('r', cell.styles))) {
/* 000898 */ 						var thiscellstyles = 'r';
/* 000898 */ 					}
/* 000900 */ 					var bgcol = null;
/* 000901 */ 					if (__t__ (__in__ ('green', cell.styles))) {
/* 000902 */ 						var bgcol = 'flmTabCellColorGreen';
/* 000902 */ 					}
/* 000903 */ 					else if (__t__ (__in__ ('red', cell.styles))) {
/* 000904 */ 						var bgcol = 'flmTabCellColorRed';
/* 000904 */ 					}
/* 000905 */ 					else if (__t__ (__in__ ('blue', cell.styles))) {
/* 000906 */ 						var bgcol = 'flmTabCellColorBlue';
/* 000906 */ 					}
/* 000907 */ 					else if (__t__ (__in__ ('yellow', cell.styles))) {
/* 000908 */ 						var bgcol = 'flmTabCellColorYellow';
/* 000908 */ 					}
/* 000910 */ 					if (__t__ (bgcol)) {
/* 000911 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', bg={}'.format (bgcol));
/* 000911 */ 					}
/* 000913 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000914 */ 						var thiscellstyles = __call__ (__iadd__, null, thiscellstyles, ', font={\\flmCellsHeaderFont}');
/* 000914 */ 					}
/* 000916 */ 					if (__t__ (__in__ ('H', cell.styles))) {
/* 000917 */ 						if (__t__ (__eq__ (coljend, __add__ (colj, 1)))) {
/* 000918 */ 							var colnstr = '{}'.format (__add__ (1, colj));
/* 000918 */ 						}
/* 000919 */ 						else {
/* 000920 */ 							var colnstr = '{}-{}'.format (__add__ (1, colj), coljend);
/* 000920 */ 						}
/* 000923 */ 						if (__t__ (__lt__ (rowjend, tabheight))) {
/* 000924 */ 							(function () {
/* 000924 */ 								var __accu0__ = cell_hlines;
/* 000924 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([__call__ (str, null, __add__ (1, rowjend)), colnstr, '.4pt,solid']));
/* 000924 */ 							}) ();
/* 000924 */ 						}
/* 000924 */ 					}
/* 000926 */ 					if (__t__ (__t__ (__in__ ('lvert', cell.styles)) || __in__ ('rvert', cell.styles))) {
/* 000927 */ 						if (__t__ (__eq__ (rowjend, __add__ (rowj, 1)))) {
/* 000928 */ 							var rownstr = '{}'.format (__add__ (1, rowj));
/* 000928 */ 						}
/* 000929 */ 						else {
/* 000930 */ 							var rownstr = '{}-{}'.format (__add__ (1, rowj), rowjend);
/* 000930 */ 						}
/* 000932 */ 						if (__t__ (__in__ ('lvert', cell.styles))) {
/* 000933 */ 							(function () {
/* 000933 */ 								var __accu0__ = cell_vlines;
/* 000933 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (1, colj)), '.4pt,solid']));
/* 000933 */ 							}) ();
/* 000933 */ 						}
/* 000934 */ 						if (__t__ (__in__ ('rvert', cell.styles))) {
/* 000935 */ 							(function () {
/* 000935 */ 								var __accu0__ = cell_vlines;
/* 000935 */ 								return __call__ (__accu0__.append, __accu0__, tuple ([rownstr, __call__ (str, null, __add__ (2, colj)), '.4pt,solid']));
/* 000935 */ 							}) ();
/* 000935 */ 						}
/* 000935 */ 					}
/* 000937 */ 					if (__t__ (__t__ (__gt__ (__call__ (len, null, thiscellspanopts), 0)) || __ne__ (thiscellstyles, 'm'))) {
/* 000940 */ 						var cell_spans_styles = __call__ (__iadd__, null, cell_spans_styles, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  cell{', __call__ (str, null, __add__ (1, rowj))), '}{'), __call__ (str, null, __add__ (1, colj))), '}='), '{'), (function () {
/* 000940 */ 							var __accu0__ = ',';
/* 000940 */ 							return __call__ (__accu0__.join, __accu0__, thiscellspanopts);
/* 000940 */ 						}) ()), '}{'), thiscellstyles), '}'));
/* 000940 */ 					}
/* 000940 */ 				}
/* 000943 */ 				else {
/* 000945 */ 					var cell_content = '';
/* 000945 */ 				}
/* 000947 */ 				(function () {
/* 000947 */ 					var __accu0__ = stab_rowitems;
/* 000947 */ 					return __call__ (__accu0__.append, __accu0__, cell_content);
/* 000947 */ 				}) ();
/* 000947 */ 			}
/* 000949 */ 			var stab_contents = __call__ (__iadd__, null, stab_contents, __add__ (__add__ ((function () {
/* 000949 */ 				var __accu0__ = '&';
/* 000949 */ 				return __call__ (__accu0__.join, __accu0__, stab_rowitems);
/* 000949 */ 			}) (), '\\\\'), '\n'));
/* 000949 */ 		}
/* 000951 */ 		var _typeset_table_contents = function (raw_args, colspec_one) {
/* 000951 */ 			if (typeof raw_args == 'undefined' || (raw_args != null && raw_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000951 */ 				var raw_args = null;
/* 000951 */ 			};
/* 000951 */ 			if (typeof colspec_one == 'undefined' || (colspec_one != null && colspec_one.hasOwnProperty ("__kwargtrans__"))) {;
/* 000951 */ 				var colspec_one = null;
/* 000951 */ 			};
/* 000951 */ 			if (arguments.length) {
/* 000951 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000951 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000951 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000951 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000951 */ 						switch (__attrib0__) {
/* 000951 */ 							case 'raw_args': var raw_args = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 							case 'colspec_one': var colspec_one = __allkwargs0__ [__attrib0__]; break;
/* 000951 */ 						}
/* 000951 */ 					}
/* 000951 */ 				}
/* 000951 */ 			}
/* 000951 */ 			else {
/* 000951 */ 			}
/* 000952 */ 			if (__t__ (raw_args !== null)) {
/* 000953 */ 				var tblrargs = raw_args;
/* 000953 */ 			}
/* 000954 */ 			else {
/* 000955 */ 				var tblrargs = __add__ (__add__ ('colspec={', __mul__ (colspec_one, tabwidth)), '}');
/* 000955 */ 			}
/* 000960 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{tblr}{', tblrargs), ','), '\n'), '  hspan=minimal'), cell_spans_styles), (function () {
/* 000960 */ 				var __accu0__ = '';
/* 000960 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000960 */ 					var __accu1__ = [];
/* 000960 */ 					var __iterable0__ = cell_hlines;
/* 000960 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000961 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000961 */ 						var rownrng = __left0__ [0];
/* 000961 */ 						var colnrng = __left0__ [1];
/* 000961 */ 						var lsty = __left0__ [2];
/* 000961 */ 						(function () {
/* 000961 */ 							var __accu2__ = __accu1__;
/* 000961 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  hline{', rownrng), '}={'), colnrng), '}{'), lsty), '}'));
/* 000961 */ 						}) ();
/* 000961 */ 					}
/* 000961 */ 					return __accu1__;
/* 000961 */ 				}) ());
/* 000962 */ 			}) ()), (function () {
/* 000962 */ 				var __accu0__ = '';
/* 000962 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000962 */ 					var __accu1__ = [];
/* 000962 */ 					var __iterable0__ = cell_vlines;
/* 000962 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000963 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000963 */ 						var rownrng = __left0__ [0];
/* 000963 */ 						var colnrng = __left0__ [1];
/* 000963 */ 						var lsty = __left0__ [2];
/* 000963 */ 						(function () {
/* 000963 */ 							var __accu2__ = __accu1__;
/* 000963 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (',\n  vline{', colnrng), '}={'), rownrng), '}{'), lsty), '}'));
/* 000963 */ 						}) ();
/* 000963 */ 					}
/* 000963 */ 					return __accu1__;
/* 000963 */ 				}) ());
/* 000963 */ 			}) ()), '}%'), '\n'), '\\toprule'), '\n'), stab_contents), '\\bottomrule'), '\n'), '\\end{tblr}%'), '\n');
/* 000963 */ 		};
/* 000972 */ 		if (__t__ (__eq__ (self.cells_render_method, 'simple'))) {
/* 000975 */ 			var s = __add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\flmCellsEndCenter ');
/* 000978 */ 			return s;
/* 000978 */ 		}
/* 000980 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test'))) {
/* 000988 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\long\\def\\flmTempTypesetThisTable#1{%'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({raw_args: '#1'}))), '}%'), '\n');
/* 000992 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\def\\flmTmpMaxW{\\dimexpr ', self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox{\\flmTempTypesetThisTable{colspec={'), __mul__ ('c', tabwidth)), '}}}%'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), '  \\flmTempTypesetThisTable{width=\\flmTmpMaxW,colspec={'), __mul__ ('X[-1]', tabwidth)), '}}'), '\n'), '\\fi'), '\n'));
/* 001004 */ 			var s = __call__ (__iadd__, null, s, '\\flmCellsEndCenter ');
/* 001005 */ 			return s;
/* 001005 */ 		}
/* 001007 */ 		if (__t__ (__eq__ (self.cells_render_method, 'fit_width_test_dupl'))) {
/* 001030 */ 			var s = __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmCellsBeginCenter', '\n'), '\\def\\flmTmpMaxW{\\dimexpr '), self.cells_max_width_latexdim), '\\relax}%'), '\n'), '\\setbox0=\\hbox\\bgroup'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'c'}))), '\\egroup'), '\n'), '\\ifdim\\wd0<\\flmTmpMaxW\\relax'), '\n'), '  \\leavevmode\\box0 '), '\n'), '\\else'), '\n'), __call__ (_typeset_table_contents, null, __kwargtrans__ ({colspec_one: 'X[-1]'}))), '\\fi'), '\n'), '\\flmCellsEndCenter ');
/* 001034 */ 			return s;
/* 001034 */ 		}
/* 001036 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid cells_render_method: ', __call__ (repr, null, self.cells_render_method)));
/* 001036 */ 		__except0__.__cause__ = null;
/* 001036 */ 		throw __except0__;
/* 001036 */ 	});}
/* 001036 */ });
/* 001043 */ export var _rx_delayed_markers = (function () {
/* 001043 */ 	var __accu0__ = re;
/* 001043 */ 	return __call__ (__accu0__.compile, __accu0__, '\\\\FLMDLYD\\{(?P<key>\\d+)\\}');
/* 001043 */ }) ();
/* 001052 */ export var _latex_preamble_suggested_defs = '\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{amsmath}\n\\flmRequirePackage{amssymb}\n\n\\flmRequirePackage{graphicx}\n\\flmRequirePackage{xcolor}\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n\\providecommand\\phantomsection{}\n\n\\ifdefined\\flmDefterm\\else\n\\newenvironment{flmDefterm}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\begingroup\\flmDeftermFormat\n}{%\n  \\endgroup\\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\providecommand\\flmDeftermFormat{\\itshape}\n\n\\providecommand\\flmDisplayTerm[1]{\\textbf{#1}}\n\n\\providecommand\\flmThmHeadingTheoremLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingDefinitionLike[1]{\\textbf{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmThmHeadingProofLike[1]{\\textit{#1}.\\hspace{.8em}\\ignorespaces}\n\\providecommand\\flmTheoremHeading{\\flmThmHeadingTheoremLike}\n\\ifdefined\\flmThmTheoremLike\\else\n\\newenvironment{flmThmTheoremLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingTheoremLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmDefinitionLike\\else\n\\newenvironment{flmThmDefinitionLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingDefinitionLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\\ifdefined\\flmThmProofLike\\else\n\\newenvironment{flmThmProofLike}{%\n  \\par\\vspace{0.5ex plus 0.5ex}\\noindent\n  \\let\\flmTheoremHeading\\flmThmHeadingProofLike\n}{%\n  \\par\\vspace{0.5ex plus 0.5ex}%\n}\n\\fi\n\n% lines; quotes, addresses, blockquotes\n\\providecommand\\flmLinesParSkip{1ex plus 0.3ex minus 0.2ex}\n\\ifdefined\\flmLines\\else\n\\newenvironment{flmLines}{%\n  \\par\\begingroup\n  \\parindent=0pt\\relax\n  \\parskip=\\flmLinesParSkip\\relax\n}{%\n  \\par\\endgroup\n}\n\\fi\n\\ifdefined\\flmAddress\\else\n\\newenvironment{flmAddress}{%\n  \\par\n  \\begingroup\n  \\small\n}{%\n  \\par\n  \\endgroup\n}\n\\fi\n\\ifdefined\\flmBlockquote\\else\n\\newenvironment{flmBlockquote}{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n}{%\n  \\endlist\n}\n\\fi\n\n% for cells/tables\n\\flmRequirePackage{tabularray}\n\\UseTblrLibrary{booktabs}\n\\definecolor{flmTabCellColorGreen}{RGB}{200,255,200}\n\\definecolor{flmTabCellColorBlue}{RGB}{200,220,255}\n\\definecolor{flmTabCellColorYellow}{RGB}{255,255,200}\n\\definecolor{flmTabCellColorRed}{RGB}{255,200,200}\n\\providecommand\\flmCellsHeaderFont{\\bfseries}\n\\providecommand\\flmCellsBeginCenter{\\begin{center}}\n\\providecommand\\flmCellsEndCenter{\\end{center}}\n\n\n\\providecommand\\flmFloatCaption[1]{%\n  \\par\\vspace{\\abovecaptionskip}\\relax\n  #1\\par\n}\n\\providecommand\\flmPinLabelHereWithDisplayText[2]{%\n  \\expandafter\\def\\csname @currentlabel\\endcsname{#2}%\n  \\label{#1}%\n}\n\n\n\\definecolor{flmAnnotationColor0}{RGB}{148,7,24} % dark red / burgundy\n\\definecolor{flmAnnotationColor1}{RGB}{0,148,240} % blue-y\n\\definecolor{flmAnnotationColor2}{RGB}{242,108,13} % orange-brown-y\n\\definecolor{flmAnnotationColor3}{RGB}{65,149,42} % green-y\n\\definecolor{flmAnnotationColor4}{RGB}{128,55,134} % purple-y\n\\definecolor{flmAnnotationColor5}{RGB}{0,129,129} % blue-green-y\n\\definecolor{flmAnnotationColor6}{RGB}{160,120,0} % brownish\n\\definecolor{flmAnnotationColor7}{RGB}{35,195,155} % aqua-ish\n\n\\providecommand\\flmAnnotationHighlight[3]{% {colorindex}{initials}{content}\n  \\textcolor{flmAnnotationColor#1}{%\n    \\if\\relax\\detokenize{#2}\\relax\\else\\textsf{\\footnotesize [#2]}~\\fi\n    #3}%\n}\n\\providecommand\\flmAnnotationComment[3]{% {colorindex}{initials}{content}\n  \\textcolor{flmAnnotationColor#1}{\\textsf{[%\n    \\if\\relax\\detokenize{#2}\\relax\\else{\\footnotesize #2:}~\\fi\n    #3]}}%\n}\n\n\n';
/* 001190 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001190 */ 	__module__: __name__,
/* 001199 */ 	FragmentRendererClass: LatexFragmentRenderer,
/* 001202 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001202 */ 		if (arguments.length) {
/* 001202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001202 */ 					switch (__attrib0__) {
/* 001202 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001202 */ 					}
/* 001202 */ 				}
/* 001202 */ 			}
/* 001202 */ 		}
/* 001202 */ 		else {
/* 001202 */ 		}
/* 001204 */ 		return dict ({'package_suggested_defs': _latex_preamble_suggested_defs, 'preamble_suggested_defs': _latex_preamble_suggested_defs});
/* 001204 */ 	};},
/* 001209 */ 	format_name: 'latex'
/* 001209 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.latex.map