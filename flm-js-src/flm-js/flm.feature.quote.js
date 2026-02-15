/* 000001 */ // Transcrypt'ed from Python, 2026-02-15 18:37:43
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000029 */ import {Feature} from './flm.feature._base.js';
/* 000024 */ import {FLMEnvironmentSpecBase, text_arg} from './flm.flmspecinfo.js';
/* 000020 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000014 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {text_arg, FLMArgumentSpec, Feature, FLMEnvironmentSpecBase, ParsingStateDeltaExtendLatexContextDb, LatexEnvironmentBodyContentsParser, MacroSpec, latexnodes_nodes, LatexWalkerLocatedError, ParsedArgumentsInfo};
/* 000001 */ var __name__ = 'flm.feature.quote';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000064 */ export var _quote_section_macros = dict ({'text': __call__ (MacroSpec, null, 'text', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'lines': __call__ (MacroSpec, null, 'lines', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'macros': [__call__ (MacroSpec, null, '\\')]}), set_attributes: dict ({'is_block_level': false})}))}))]})), 'attributed': __call__ (MacroSpec, null, 'attributed', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'block': __call__ (MacroSpec, null, 'block', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}))]}))});
/* 000075 */ export var QuoteEnvironment =  __class__ ('QuoteEnvironment', [FLMEnvironmentSpecBase], {
/* 000075 */ 	__module__: __name__,
/* 000084 */ 	is_block_level: true,
/* 000086 */ 	body_contents_is_block_level: true,
/* 000088 */ 	get __init__ () {return __get__ (this, function (self, environmentname, enabled_quote_sections, content_is_block_level, auto_quote_section_bare_content) {
/* 000088 */ 		if (typeof enabled_quote_sections == 'undefined' || (enabled_quote_sections != null && enabled_quote_sections.hasOwnProperty ("__kwargtrans__"))) {;
/* 000088 */ 			var enabled_quote_sections = null;
/* 000088 */ 		};
/* 000088 */ 		if (typeof content_is_block_level == 'undefined' || (content_is_block_level != null && content_is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000088 */ 			var content_is_block_level = true;
/* 000088 */ 		};
/* 000088 */ 		if (typeof auto_quote_section_bare_content == 'undefined' || (auto_quote_section_bare_content != null && auto_quote_section_bare_content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000088 */ 			var auto_quote_section_bare_content = false;
/* 000088 */ 		};
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'enabled_quote_sections': var enabled_quote_sections = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'content_is_block_level': var content_is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'auto_quote_section_bare_content': var auto_quote_section_bare_content = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000092 */ 		__call__ (__call__ (__super__, null, QuoteEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: []}));
/* 000096 */ 		if (__t__ (__t__ (enabled_quote_sections) && __call__ (len, null, enabled_quote_sections))) {
/* 000097 */ 			self.enabled_quote_sections = __call__ (list, null, enabled_quote_sections);
/* 000097 */ 		}
/* 000098 */ 		else {
/* 000099 */ 			self.enabled_quote_sections = [];
/* 000099 */ 		}
/* 000100 */ 		self.auto_quote_section_bare_content = auto_quote_section_bare_content;
/* 000101 */ 		self.content_is_block_level = content_is_block_level;
/* 000103 */ 		if (__t__ (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines')) && self.content_is_block_level)) {
/* 000105 */ 			(function () {
/* 000105 */ 				var __accu0__ = logger;
/* 000105 */ 				return __call__ (__accu0__.warning, __accu0__, "Configuration of quote-type environment {}{}{} might be flawed: using '\\lines' for bare environment content (auto_quote_section_bare_content='lines') but content_is_block_level is set to True; consider setting it to False instead.".format ('{', environmentname, '}'));
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000105 */ 	});},
/* 000112 */ 	_fields: tuple (['enabled_quote_sections', 'content_is_block_level']),
/* 000114 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000116 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [], environments: [], specials: []}));
/* 000121 */ 		var __iterable0__ = self.enabled_quote_sections;
/* 000121 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000121 */ 			var quote_section = __getitem__ (__iterable0__, __index0__);
/* 000122 */ 			(function () {
/* 000122 */ 				var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000122 */ 				return __call__ (__accu0__.append, __accu0__, __getitem__ (_quote_section_macros, quote_section));
/* 000122 */ 			}) ();
/* 000122 */ 		}
/* 000126 */ 		if (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines'))) {
/* 000127 */ 			(function () {
/* 000127 */ 				var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000127 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MacroSpec, null, '\\'));
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000133 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.content_is_block_level}))}))}));
/* 000133 */ 	});},
/* 000137 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000142 */ 		var quote_section_nodes = [];
/* 000144 */ 		var auto_collecting_qs_nodelist = [];
/* 000146 */ 		var flush_auto_collecting_qs = function () {
/* 000146 */ 			if (arguments.length) {
/* 000146 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 			else {
/* 000146 */ 			}
/* 000147 */ 			if (__t__ (!__t__ ((self.auto_quote_section_bare_content)))) {
/* 000148 */ 				return ;
/* 000148 */ 			}
/* 000151 */ 			var has_content = false;
/* 000152 */ 			var __iterable0__ = auto_collecting_qs_nodelist;
/* 000152 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000152 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000153 */ 				if (__t__ ((function () {
/* 000153 */ 					var __accu0__ = n;
/* 000153 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000153 */ 				}) ())) {
/* 000153 */ 					continue;
/* 000153 */ 				}
/* 000155 */ 				if (__t__ (__t__ ((function () {
/* 000155 */ 					var __accu0__ = n;
/* 000155 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000155 */ 				}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000155 */ 					var __accu0__ = n.chars;
/* 000155 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000155 */ 				}) ()), 0))) {
/* 000155 */ 					continue;
/* 000155 */ 				}
/* 000157 */ 				var has_content = true;
/* 000157 */ 				break;
/* 000157 */ 			}
/* 000159 */ 			if (__t__ (!__t__ ((has_content)))) {
/* 000160 */ 				return ;
/* 000160 */ 			}
/* 000164 */ 			__call__ (finalize_and_push_qsn_info, null, self.auto_quote_section_bare_content, __kwargtrans__ ({node: null, text_arg_nodelist: (function () {
/* 000164 */ 				var __accu0__ = node.latex_walker;
/* 000165 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __call__ (list, null, auto_collecting_qs_nodelist), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000165 */ 			}) ()}));
/* 000169 */ 			(function () {
/* 000169 */ 				var __accu0__ = auto_collecting_qs_nodelist;
/* 000169 */ 				return __call__ (__accu0__.py_clear, __accu0__);
/* 000169 */ 			}) ();
/* 000169 */ 		};
/* 000171 */ 		var finalize_and_push_qsn_info = function (py_name, node, text_arg_nodelist) {
/* 000171 */ 			if (arguments.length) {
/* 000171 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 						switch (__attrib0__) {
/* 000171 */ 							case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 							case 'text_arg_nodelist': var text_arg_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						}
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 			else {
/* 000171 */ 			}
/* 000172 */ 			var qsn_info = dict ({'name': py_name, 'node': null, 'text_arg_nodelist': text_arg_nodelist});
/* 000178 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000180 */ 				var text_arg_lines_nodelists = (function () {
/* 000180 */ 					var __accu0__ = text_arg_nodelist;
/* 000180 */ 					return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000180 */ 						if (arguments.length) {
/* 000180 */ 							var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 								var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 								for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 									switch (__attrib0__) {
/* 000180 */ 										case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 									}
/* 000180 */ 								}
/* 000180 */ 							}
/* 000180 */ 						}
/* 000180 */ 						else {
/* 000180 */ 						}
/* 000182 */ 						return __t__ ((function () {
/* 000182 */ 							var __accu1__ = n;
/* 000182 */ 							return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000182 */ 						}) ()) && __eq__ (n.macroname, '\\');
/* 000182 */ 					}));
/* 000182 */ 				}) ();
/* 000186 */ 				var lines_iter_nodelists = [];
/* 000187 */ 				var __iterable0__ = text_arg_lines_nodelists;
/* 000187 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000187 */ 					var line_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000189 */ 					(function () {
/* 000189 */ 						var __accu0__ = lines_iter_nodelists;
/* 000190 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (nodelist_strip_surrounding_whitespace, null, line_nodelist));
/* 000190 */ 					}) ();
/* 000190 */ 				}
/* 000192 */ 				__setitem__ (qsn_info, 'lines_iter_nodelists', lines_iter_nodelists);
/* 000192 */ 			}
/* 000194 */ 			(function () {
/* 000194 */ 				var __accu0__ = quote_section_nodes;
/* 000194 */ 				return __call__ (__accu0__.append, __accu0__, qsn_info);
/* 000194 */ 			}) ();
/* 000194 */ 		};
/* 000196 */ 		var __iterable0__ = node.nodelist;
/* 000196 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000197 */ 			if (__t__ ((function () {
/* 000197 */ 				var __accu0__ = n;
/* 000197 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000197 */ 			}) ())) {
/* 000198 */ 				if (__t__ (__in__ (n.macroname, self.enabled_quote_sections))) {
/* 000203 */ 					__call__ (flush_auto_collecting_qs, null);
/* 000206 */ 					var text_arg_info = (function () {
/* 000206 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000206 */ 						return __call__ (__accu0__.get_argument_info, __accu0__, 'text');
/* 000206 */ 					}) ();
/* 000207 */ 					var text_arg_nodelist = (function () {
/* 000207 */ 						var __accu0__ = text_arg_info;
/* 000207 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000207 */ 					}) ();
/* 000208 */ 					__call__ (finalize_and_push_qsn_info, null, n.macroname, __kwargtrans__ ({node: n, text_arg_nodelist: text_arg_nodelist}));
/* 000208 */ 					continue;
/* 000208 */ 				}
/* 000208 */ 			}
/* 000215 */ 			if (__t__ ((function () {
/* 000215 */ 				var __accu0__ = n;
/* 000215 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000215 */ 			}) ())) {
/* 000215 */ 				continue;
/* 000215 */ 			}
/* 000219 */ 			if (__t__ (self.auto_quote_section_bare_content)) {
/* 000222 */ 				(function () {
/* 000222 */ 					var __accu0__ = auto_collecting_qs_nodelist;
/* 000222 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000222 */ 				}) ();
/* 000222 */ 				continue;
/* 000222 */ 			}
/* 000225 */ 			if (__t__ (__t__ ((function () {
/* 000225 */ 				var __accu0__ = n;
/* 000225 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000225 */ 			}) ()) && __eq__ ((function () {
/* 000225 */ 				var __accu0__ = n.chars;
/* 000225 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000225 */ 			}) (), ''))) {
/* 000225 */ 				continue;
/* 000225 */ 			}
/* 000232 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('All content in {}{}{} environments must be wrapped in an appropriate quote-section command ('.format ('{', self.environmentname, '}'), (function () {
/* 000232 */ 				var __accu0__ = ', ';
/* 000232 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000232 */ 					var __accu1__ = [];
/* 000232 */ 					var __iterable1__ = self.enabled_quote_sections;
/* 000232 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000232 */ 						var c = __getitem__ (__iterable1__, __index1__);
/* 000232 */ 						(function () {
/* 000232 */ 							var __accu2__ = __accu1__;
/* 000232 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('\\', __call__ (str, null, c)), '{}'));
/* 000232 */ 						}) ();
/* 000232 */ 					}
/* 000232 */ 					return __accu1__;
/* 000232 */ 				}) ());
/* 000233 */ 			}) ()), '); found content {}'.format (__call__ (str, null, n))));
/* 000233 */ 			__except0__.__cause__ = null;
/* 000233 */ 			throw __except0__;
/* 000233 */ 		}
/* 000236 */ 		__call__ (flush_auto_collecting_qs, null);
/* 000238 */ 		node.flm_quote_section_nodes = quote_section_nodes;
/* 000240 */ 		return node;
/* 000240 */ 	});},
/* 000242 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000244 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000248 */ 		var pieces = [];
/* 000250 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000250 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000250 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000252 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000253 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000254 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000255 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000256 */ 				(function () {
/* 000256 */ 					var __accu0__ = pieces;
/* 000257 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000257 */ 						var __accu1__ = fragment_renderer;
/* 000258 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000258 */ 							var __accu2__ = fragment_renderer;
/* 000258 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000258 */ 						}) (), __kwargtrans__ ({role: 'quote-text', render_context: render_context}));
/* 000258 */ 					}) ());
/* 000258 */ 				}) ();
/* 000258 */ 			}
/* 000263 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000264 */ 				(function () {
/* 000264 */ 					var __accu0__ = pieces;
/* 000265 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000265 */ 						var __accu1__ = fragment_renderer;
/* 000265 */ 						return __call__ (__accu1__.render_lines, __accu1__, __getitem__ (qsn, 'lines_iter_nodelists'), __kwargtrans__ ({role: 'quote-lines', render_context: render_context}));
/* 000265 */ 					}) ());
/* 000265 */ 				}) ();
/* 000265 */ 			}
/* 000271 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000272 */ 				(function () {
/* 000272 */ 					var __accu0__ = pieces;
/* 000273 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000273 */ 						var __accu1__ = fragment_renderer;
/* 000274 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000274 */ 							var __accu2__ = fragment_renderer;
/* 000274 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000274 */ 						}) (), __kwargtrans__ ({role: 'quote-attributed', render_context: render_context}));
/* 000274 */ 					}) ());
/* 000274 */ 				}) ();
/* 000274 */ 			}
/* 000279 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000280 */ 				(function () {
/* 000280 */ 					var __accu0__ = pieces;
/* 000281 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000281 */ 						var __accu1__ = fragment_renderer;
/* 000282 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000282 */ 							var __accu2__ = fragment_renderer;
/* 000282 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000282 */ 						}) (), __kwargtrans__ ({role: 'quote-block', render_context: render_context}));
/* 000282 */ 					}) ());
/* 000282 */ 				}) ();
/* 000282 */ 			}
/* 000285 */ 			else {
/* 000288 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000288 */ 				__except0__.__cause__ = null;
/* 000288 */ 				throw __except0__;
/* 000288 */ 			}
/* 000288 */ 		}
/* 000293 */ 		var rendered_contents = (function () {
/* 000293 */ 			var __accu0__ = fragment_renderer;
/* 000293 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, pieces, render_context);
/* 000293 */ 		}) ();
/* 000297 */ 		return (function () {
/* 000297 */ 			var __accu0__ = fragment_renderer;
/* 000297 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __kwargtrans__ ({role: self.environmentname, render_context: render_context}));
/* 000297 */ 		}) ();
/* 000297 */ 	});},
/* 000304 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000306 */ 		var recopt_quote = (function () {
/* 000306 */ 			var __accu0__ = recomposer;
/* 000306 */ 			return __call__ (__accu0__.get_options, __accu0__, 'quote');
/* 000306 */ 		}) ();
/* 000307 */ 		if (__t__ ((function () {
/* 000307 */ 			var __accu0__ = recopt_quote;
/* 000307 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000307 */ 		}) ())) {
/* 000308 */ 			return false;
/* 000308 */ 		}
/* 000310 */ 		var flm_quote_setup_macro = (function () {
/* 000310 */ 			var __accu0__ = recopt_quote;
/* 000310 */ 			return __call__ (__accu0__.py_get, __accu0__, 'setup_macro', 'flmQuoteSetup');
/* 000310 */ 		}) ();
/* 000311 */ 		var flm_text_macro = (function () {
/* 000311 */ 			var __accu0__ = recopt_quote;
/* 000311 */ 			return __call__ (__accu0__.py_get, __accu0__, 'text_macro', null);
/* 000311 */ 		}) ();
/* 000312 */ 		var flm_lines_macro = (function () {
/* 000312 */ 			var __accu0__ = recopt_quote;
/* 000312 */ 			return __call__ (__accu0__.py_get, __accu0__, 'lines_macro', null);
/* 000312 */ 		}) ();
/* 000313 */ 		var flm_attributed_macro = (function () {
/* 000313 */ 			var __accu0__ = recopt_quote;
/* 000313 */ 			return __call__ (__accu0__.py_get, __accu0__, 'attributed_macro', 'flmQuoteAttributed');
/* 000313 */ 		}) ();
/* 000314 */ 		var flm_block_macro = (function () {
/* 000314 */ 			var __accu0__ = recopt_quote;
/* 000314 */ 			return __call__ (__accu0__.py_get, __accu0__, 'block_macro', 'flmQuoteBlock');
/* 000314 */ 		}) ();
/* 000316 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', node.environmentname), '}'), '\n');
/* 000317 */ 		if (__t__ (__t__ (flm_quote_setup_macro !== null) && __call__ (len, null, flm_quote_setup_macro))) {
/* 000318 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', flm_quote_setup_macro), '{'), node.environmentname), '}%'), '\n'));
/* 000318 */ 		}
/* 000320 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000320 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000320 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000322 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000323 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000324 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000326 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000328 */ 				var content = (function () {
/* 000328 */ 					var __accu0__ = '\\\\\n';
/* 000328 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000328 */ 						var __accu1__ = [];
/* 000328 */ 						var __iterable1__ = __getitem__ (qsn, 'lines_iter_nodelists');
/* 000328 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000330 */ 							var line_nodelist = __getitem__ (__iterable1__, __index1__);
/* 000330 */ 							(function () {
/* 000330 */ 								var __accu2__ = __accu1__;
/* 000329 */ 								return __call__ (__accu2__.append, __accu2__, (function () {
/* 000329 */ 									var __accu3__ = recomposer;
/* 000329 */ 									return __call__ (__accu3__.recompose_nodelist, __accu3__, line_nodelist, node);
/* 000329 */ 								}) ());
/* 000329 */ 							}) ();
/* 000329 */ 						}
/* 000329 */ 						return __accu1__;
/* 000329 */ 					}) ());
/* 000329 */ 				}) ();
/* 000329 */ 			}
/* 000330 */ 			else {
/* 000333 */ 				var content = (function () {
/* 000333 */ 					var __accu0__ = (function () {
/* 000333 */ 						var __accu1__ = recomposer;
/* 000333 */ 						return __call__ (__accu1__.recompose_nodelist, __accu1__, text_arg_nodelist, node);
/* 000333 */ 					}) ();
/* 000333 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000333 */ 				}) ();
/* 000333 */ 			}
/* 000335 */ 			var wrap_macro = null;
/* 000336 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000337 */ 				if (__t__ (__t__ (flm_text_macro !== null) && __call__ (len, null, flm_text_macro))) {
/* 000338 */ 					var wrap_macro = flm_text_macro;
/* 000338 */ 				}
/* 000338 */ 			}
/* 000339 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000340 */ 				if (__t__ (__t__ (flm_lines_macro !== null) && __call__ (len, null, flm_lines_macro))) {
/* 000341 */ 					var wrap_macro = flm_lines_macro;
/* 000341 */ 				}
/* 000341 */ 			}
/* 000342 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000343 */ 				if (__t__ (__t__ (flm_attributed_macro !== null) && __call__ (len, null, flm_attributed_macro))) {
/* 000344 */ 					var wrap_macro = flm_attributed_macro;
/* 000344 */ 				}
/* 000344 */ 			}
/* 000345 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000346 */ 				if (__t__ (__t__ (flm_block_macro !== null) && __call__ (len, null, flm_block_macro))) {
/* 000347 */ 					var wrap_macro = flm_block_macro;
/* 000347 */ 				}
/* 000347 */ 			}
/* 000348 */ 			else {
/* 000349 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000349 */ 				__except0__.__cause__ = null;
/* 000349 */ 				throw __except0__;
/* 000349 */ 			}
/* 000353 */ 			if (__t__ (__t__ (wrap_macro !== null) && __call__ (len, null, wrap_macro))) {
/* 000354 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', wrap_macro), '{'), content), '}'), '\n'));
/* 000354 */ 			}
/* 000355 */ 			else {
/* 000356 */ 				var s = __call__ (__iadd__, null, s, __add__ (content, '\n'));
/* 000356 */ 			}
/* 000356 */ 		}
/* 000358 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000360 */ 		return s;
/* 000360 */ 	});}
/* 000360 */ });
/* 000366 */ export var nodelist_strip_surrounding_whitespace = function (nodelist) {
/* 000366 */ 	if (arguments.length) {
/* 000366 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 				switch (__attrib0__) {
/* 000366 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 	}
/* 000366 */ 	else {
/* 000366 */ 	}
/* 000367 */ 	if (__t__ (__t__ (!__t__ ((nodelist))) || !__t__ ((__call__ (len, null, nodelist))))) {
/* 000368 */ 		return nodelist;
/* 000368 */ 	}
/* 000370 */ 	var jfirst = 0;
/* 000371 */ 	var __iterable0__ = nodelist;
/* 000371 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000371 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 		if (__t__ ((function () {
/* 000372 */ 			var __accu0__ = n;
/* 000372 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000372 */ 		}) ())) {
/* 000373 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000373 */ 			continue;
/* 000373 */ 		}
/* 000373 */ 		break;
/* 000373 */ 	}
/* 000377 */ 	if (__t__ (__eq__ (jfirst, __call__ (len, null, nodelist)))) {
/* 000378 */ 		return nodelist;
/* 000378 */ 	}
/* 000380 */ 	var new_node_list = (function () {
/* 000380 */ 		var __accu0__ = [];
/* 000380 */ 		var __iterable0__ = nodelist;
/* 000380 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000381 */ 			var node = __getitem__ (__iterable0__, __index0__);
/* 000381 */ 			(function () {
/* 000381 */ 				var __accu1__ = __accu0__;
/* 000381 */ 				return __call__ (__accu1__.append, __accu1__, node);
/* 000381 */ 			}) ();
/* 000381 */ 		}
/* 000381 */ 		return __accu0__;
/* 000381 */ 	}) ();
/* 000383 */ 	var lw = nodelist.latex_walker;
/* 000385 */ 	var first_node = __getitem__ (new_node_list, jfirst);
/* 000386 */ 	if (__t__ ((function () {
/* 000386 */ 		var __accu0__ = first_node;
/* 000386 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000386 */ 	}) ())) {
/* 000387 */ 		if (__t__ ((function () {
/* 000387 */ 			var __accu0__ = __getitem__ (first_node.chars, 0);
/* 000387 */ 			return __call__ (__accu0__.isspace, __accu0__);
/* 000387 */ 		}) ())) {
/* 000389 */ 			var fixed_first_node = (function () {
/* 000389 */ 				var __accu0__ = lw;
/* 000391 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000391 */ 					var __accu1__ = first_node.chars;
/* 000391 */ 					return __call__ (__accu1__.lstrip, __accu1__);
/* 000391 */ 				}) (), pos: first_node.pos, pos_end: first_node.pos_end, parsing_state: first_node.parsing_state}));
/* 000391 */ 			}) ();
/* 000397 */ 			__setitem__ (new_node_list, jfirst, fixed_first_node);
/* 000397 */ 		}
/* 000397 */ 	}
/* 000398 */ 	else if (__t__ (__t__ (first_node.pre_space !== null) && __call__ (len, null, first_node.pre_space))) {
/* 000399 */ 		var d = dict ({});
/* 000400 */ 		var __iterable0__ = first_node._fields;
/* 000400 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000400 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000401 */ 			__setitem__ (d, fld, __call__ (getattr, null, first_node, fld));
/* 000401 */ 		}
/* 000402 */ 		__setitem__ (d, 'pre_space', '');
/* 000403 */ 		var fixed_first_node = (function () {
/* 000403 */ 			var __accu0__ = lw;
/* 000403 */ 			return __call__ (__accu0__.make_node, __accu0__, first_node.__class__, __kwargtrans__ (d));
/* 000403 */ 		}) ();
/* 000408 */ 		__setitem__ (new_node_list, jfirst, fixed_first_node);
/* 000408 */ 	}
/* 000411 */ 	var jlast = __sub__ (__call__ (len, null, nodelist), 1);
/* 000412 */ 	var last_node = __getitem__ (new_node_list, jlast);
/* 000413 */ 	if (__t__ (__t__ ((function () {
/* 000413 */ 		var __accu0__ = last_node;
/* 000413 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000414 */ 	}) ()) && (function () {
/* 000414 */ 		var __accu0__ = __getitem__ (last_node.chars, __sub__ (__call__ (len, null, last_node.chars), 1));
/* 000414 */ 		return __call__ (__accu0__.isspace, __accu0__);
/* 000414 */ 	}) ())) {
/* 000415 */ 		var fixed_last_node = (function () {
/* 000415 */ 			var __accu0__ = lw;
/* 000417 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000417 */ 				var __accu1__ = last_node.chars;
/* 000417 */ 				return __call__ (__accu1__.rstrip, __accu1__);
/* 000417 */ 			}) (), pos: last_node.pos, pos_end: last_node.pos_end, parsing_state: last_node.parsing_state}));
/* 000417 */ 		}) ();
/* 000423 */ 		__setitem__ (new_node_list, jlast, fixed_last_node);
/* 000423 */ 	}
/* 000425 */ 	return (function () {
/* 000425 */ 		var __accu0__ = lw;
/* 000425 */ 		return __call__ (__accu0__.make_nodelist, __accu0__, new_node_list, __kwargtrans__ ({parsing_state: nodelist.parsing_state}));
/* 000425 */ 	}) ();
/* 000425 */ };
/* 000429 */ export var default_quote_environments = dict ({'quote': dict ({'enabled_quote_sections': ['text', 'lines', 'attributed', 'block']}), 'address': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'lines', 'content_is_block_level': false}), 'blockquote': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'block'})});
/* 000447 */ export var FeatureQuote =  __class__ ('FeatureQuote', [Feature], {
/* 000447 */ 	__module__: __name__,
/* 000449 */ 	feature_name: 'quotation',
/* 000450 */ 	feature_title: "Quote other people's words, with attribution",
/* 000453 */ 	feature_flm_doc: '\n    Provides the \\verbcode+\\begin{quote} ... \\end{quote}+ environment to produce\n    block literary quotations.\n    ',
/* 000460 */ 	DocumentManager: null,
/* 000461 */ 	RenderManager: null,
/* 000463 */ 	get __init__ () {return __get__ (this, function (self, quote_environments) {
/* 000463 */ 		if (typeof quote_environments == 'undefined' || (quote_environments != null && quote_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000463 */ 			var quote_environments = null;
/* 000463 */ 		};
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'quote_environments': var quote_environments = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000464 */ 		__call__ (__call__ (__super__, null, FeatureQuote, '__init__'), null, self);
/* 000465 */ 		if (__t__ (quote_environments === null)) {
/* 000466 */ 			var quote_environments = default_quote_environments;
/* 000466 */ 		}
/* 000467 */ 		self.quote_environments = quote_environments;
/* 000467 */ 	});},
/* 000470 */ 	get _mk_quote_environment_spec () {return __get__ (this, function (self, qenvname, qenvspec) {
/* 000470 */ 		if (arguments.length) {
/* 000470 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 					switch (__attrib0__) {
/* 000470 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'qenvname': var qenvname = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'qenvspec': var qenvspec = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 		}
/* 000470 */ 		else {
/* 000470 */ 		}
/* 000471 */ 		if (__t__ (__call__ (isinstance, null, qenvspec, QuoteEnvironment))) {
/* 000472 */ 			if (__t__ (__ne__ (qenvname, qenvspec.environmentname))) {
/* 000476 */ 				var __except0__ = __call__ (ValueError, null, 'Misconfigured QuoteEnvironment instance with qenvname != qenvspec.environmentname : {} != {}'.format (__call__ (repr, null, qenvname), __call__ (repr, null, qenvspec.environmentname)));
/* 000476 */ 				__except0__.__cause__ = null;
/* 000476 */ 				throw __except0__;
/* 000476 */ 			}
/* 000478 */ 			return qenvspec;
/* 000478 */ 		}
/* 000479 */ 		return __call__ (QuoteEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: qenvname}, qenvspec)));
/* 000479 */ 	});},
/* 000481 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000483 */ 		var environments = (function () {
/* 000483 */ 			var __accu0__ = [];
/* 000485 */ 			var __iterable0__ = (function () {
/* 000485 */ 				var __accu1__ = self.quote_environments;
/* 000485 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000485 */ 			}) ();
/* 000485 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000485 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000485 */ 				var qenvname = __left0__ [0];
/* 000485 */ 				var qenvspec = __left0__ [1];
/* 000485 */ 				(function () {
/* 000485 */ 					var __accu1__ = __accu0__;
/* 000484 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000484 */ 						var __accu2__ = self;
/* 000484 */ 						return __call__ (__accu2__._mk_quote_environment_spec, __accu2__, qenvname, qenvspec);
/* 000484 */ 					}) ());
/* 000484 */ 				}) ();
/* 000484 */ 			}
/* 000484 */ 			return __accu0__;
/* 000484 */ 		}) ();
/* 000488 */ 		return dict ({'environments': environments});
/* 000488 */ 	});}
/* 000488 */ });
/* 000495 */ export var FeatureClass = FeatureQuote;
/* 000006 */ 
//# sourceMappingURL=flm.feature.quote.map