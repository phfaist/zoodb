/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:26
/* 000013 */ var logging = {};
/* 000013 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000038 */ import {Feature} from './flm.feature._base.js';
/* 000036 */ import {Mapping, Sequence} from './flm._typing_helpers.js';
/* 000031 */ import {FLMEnvironmentSpecBase, text_arg} from './flm.flmspecinfo.js';
/* 000027 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000021 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000019 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000016 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000013 */ import * as __module_logging__ from './logging.js';
/* 000013 */ __nest__ (logging, '', __module_logging__);
/* 000013 */ export {latexnodes_nodes, ParsedArgumentsInfo, LatexEnvironmentBodyContentsParser, Feature, MacroSpec, FLMEnvironmentSpecBase, Sequence, Mapping, FLMArgumentSpec, text_arg, LatexWalkerLocatedError, ParsingStateDeltaExtendLatexContextDb};
/* 000001 */ var __name__ = 'flm.feature.quote';
/* 000014 */ export var logger = (function () {
/* 000014 */ 	var __accu0__ = logging;
/* 000014 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000014 */ }) ();
/* 000048 */ export var _quote_section_lines_environment = dict ({'macros': [__call__ (MacroSpec, null, '\\'), __call__ (MacroSpec, null, 'indent')], 'specials': []});
/* 000082 */ export var _quote_section_macros = dict ({'text': __call__ (MacroSpec, null, 'text', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'lines': __call__ (MacroSpec, null, 'lines', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: _quote_section_lines_environment, set_attributes: dict ({'is_block_level': false})}))}))]})), 'attributed': __call__ (MacroSpec, null, 'attributed', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'block': __call__ (MacroSpec, null, 'block', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}))]}))});
/* 000092 */ export var LineInfo =  __class__ ('LineInfo', [object], {
/* 000092 */ 	__module__: __name__,
/* 000093 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000093 */ 		var nodelist = null;
/* 000093 */ 		var align = null;
/* 000093 */ 		var indent_left = null;
/* 000093 */ 		var indent_right = null;
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'align': var align = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'indent_left': var indent_left = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'indent_right': var indent_right = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000100 */ 		__call__ (__call__ (__super__, null, LineInfo, '__init__'), null, self);
/* 000101 */ 		self.nodelist = nodelist;
/* 000102 */ 		self.align = align;
/* 000103 */ 		self.indent_left = indent_left;
/* 000104 */ 		self.indent_right = indent_right;
/* 000105 */ 		self._fields = tuple (['nodelist', 'align', 'indent_left', 'indent_right']);
/* 000105 */ 	});},
/* 000108 */ 	get asdict () {return __get__ (this, function (self) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		return (function () {
/* 000109 */ 			var __accu0__ = [];
/* 000109 */ 			var __iterable0__ = self._fields;
/* 000109 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000109 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000109 */ 				(function () {
/* 000109 */ 					var __accu1__ = __accu0__;
/* 000109 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000109 */ 				}) ();
/* 000109 */ 			}
/* 000109 */ 			return dict (__accu0__);
/* 000109 */ 		}) ();
/* 000109 */ 	});},
/* 000111 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		return (function () {
/* 000112 */ 			var __accu0__ = '{}({})';
/* 000114 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000114 */ 				var __accu1__ = ', ';
/* 000114 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000114 */ 					var __accu2__ = [];
/* 000114 */ 					var __iterable0__ = self._fields;
/* 000114 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000114 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000114 */ 						(function () {
/* 000114 */ 							var __accu3__ = __accu2__;
/* 000114 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000114 */ 						}) ();
/* 000114 */ 					}
/* 000114 */ 					return __accu2__;
/* 000114 */ 				}) ());
/* 000114 */ 			}) ());
/* 000114 */ 		}) ();
/* 000114 */ 	});}
/* 000114 */ });
/* 000120 */ export var QuoteEnvironment =  __class__ ('QuoteEnvironment', [FLMEnvironmentSpecBase], {
/* 000120 */ 	__module__: __name__,
/* 000129 */ 	is_block_level: true,
/* 000131 */ 	body_contents_is_block_level: true,
/* 000133 */ 	get __init__ () {return __get__ (this, function (self, environmentname, enabled_quote_sections, content_is_block_level, auto_quote_section_bare_content) {
/* 000133 */ 		if (typeof enabled_quote_sections == 'undefined' || (enabled_quote_sections != null && enabled_quote_sections.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var enabled_quote_sections = null;
/* 000133 */ 		};
/* 000133 */ 		if (typeof content_is_block_level == 'undefined' || (content_is_block_level != null && content_is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var content_is_block_level = true;
/* 000133 */ 		};
/* 000133 */ 		if (typeof auto_quote_section_bare_content == 'undefined' || (auto_quote_section_bare_content != null && auto_quote_section_bare_content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var auto_quote_section_bare_content = false;
/* 000133 */ 		};
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'enabled_quote_sections': var enabled_quote_sections = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'content_is_block_level': var content_is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'auto_quote_section_bare_content': var auto_quote_section_bare_content = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000137 */ 		__call__ (__call__ (__super__, null, QuoteEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: []}));
/* 000141 */ 		if (__t__ (__t__ (enabled_quote_sections) && __call__ (len, null, enabled_quote_sections))) {
/* 000142 */ 			self.enabled_quote_sections = __call__ (list, null, enabled_quote_sections);
/* 000142 */ 		}
/* 000143 */ 		else {
/* 000144 */ 			self.enabled_quote_sections = [];
/* 000144 */ 		}
/* 000145 */ 		self.auto_quote_section_bare_content = auto_quote_section_bare_content;
/* 000146 */ 		self.content_is_block_level = content_is_block_level;
/* 000148 */ 		if (__t__ (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines')) && self.content_is_block_level)) {
/* 000150 */ 			(function () {
/* 000150 */ 				var __accu0__ = logger;
/* 000150 */ 				return __call__ (__accu0__.warning, __accu0__, "Configuration of quote-type environment {}{}{} might be flawed: using '\\lines' for bare environment content (auto_quote_section_bare_content='lines') but content_is_block_level is set to True; consider setting it to False instead.".format ('{', environmentname, '}'));
/* 000150 */ 			}) ();
/* 000150 */ 		}
/* 000150 */ 	});},
/* 000157 */ 	_fields: tuple (['enabled_quote_sections', 'content_is_block_level']),
/* 000159 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000161 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [], environments: [], specials: []}));
/* 000166 */ 		var __iterable0__ = self.enabled_quote_sections;
/* 000166 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 			var quote_section = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 			(function () {
/* 000167 */ 				var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000167 */ 				return __call__ (__accu0__.append, __accu0__, __getitem__ (_quote_section_macros, quote_section));
/* 000167 */ 			}) ();
/* 000167 */ 		}
/* 000171 */ 		if (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines'))) {
/* 000172 */ 			var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000172 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000172 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000173 */ 				if (__t__ (__in__ (part, _quote_section_lines_environment))) {
/* 000174 */ 					(function () {
/* 000174 */ 						var __accu0__ = __getitem__ (extend_latex_context, part);
/* 000174 */ 						return __call__ (__accu0__.extend, __accu0__, __getitem__ (_quote_section_lines_environment, part));
/* 000174 */ 					}) ();
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000182 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.content_is_block_level}))}))}));
/* 000182 */ 	});},
/* 000186 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000191 */ 		var quote_section_nodes = [];
/* 000193 */ 		var auto_collecting_qs_nodelist = [];
/* 000195 */ 		var flush_auto_collecting_qs = function () {
/* 000195 */ 			if (arguments.length) {
/* 000195 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 			else {
/* 000195 */ 			}
/* 000196 */ 			if (__t__ (!__t__ ((self.auto_quote_section_bare_content)))) {
/* 000197 */ 				return ;
/* 000197 */ 			}
/* 000200 */ 			var has_content = false;
/* 000201 */ 			var __iterable0__ = auto_collecting_qs_nodelist;
/* 000201 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000201 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 				if (__t__ ((function () {
/* 000202 */ 					var __accu0__ = n;
/* 000202 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000202 */ 				}) ())) {
/* 000202 */ 					continue;
/* 000202 */ 				}
/* 000204 */ 				if (__t__ (__t__ ((function () {
/* 000204 */ 					var __accu0__ = n;
/* 000204 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000204 */ 				}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000204 */ 					var __accu0__ = n.chars;
/* 000204 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000204 */ 				}) ()), 0))) {
/* 000204 */ 					continue;
/* 000204 */ 				}
/* 000206 */ 				var has_content = true;
/* 000206 */ 				break;
/* 000206 */ 			}
/* 000208 */ 			if (__t__ (!__t__ ((has_content)))) {
/* 000209 */ 				return ;
/* 000209 */ 			}
/* 000213 */ 			__call__ (finalize_and_push_qsn_info, null, self.auto_quote_section_bare_content, __kwargtrans__ ({qsn_node: null, text_arg_nodelist: (function () {
/* 000213 */ 				var __accu0__ = node.latex_walker;
/* 000214 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __call__ (list, null, auto_collecting_qs_nodelist), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000214 */ 			}) ()}));
/* 000218 */ 			(function () {
/* 000218 */ 				var __accu0__ = auto_collecting_qs_nodelist;
/* 000218 */ 				return __call__ (__accu0__.py_clear, __accu0__);
/* 000218 */ 			}) ();
/* 000218 */ 		};
/* 000220 */ 		var finalize_and_push_qsn_info = function (py_name, qsn_node, text_arg_nodelist) {
/* 000220 */ 			if (arguments.length) {
/* 000220 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 						switch (__attrib0__) {
/* 000220 */ 							case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 							case 'qsn_node': var qsn_node = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 							case 'text_arg_nodelist': var text_arg_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						}
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 			else {
/* 000220 */ 			}
/* 000221 */ 			var qsn_info = dict ({'name': py_name, 'node': qsn_node, 'text_arg_nodelist': text_arg_nodelist});
/* 000227 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000229 */ 				var text_arg_lines_nodelists = (function () {
/* 000229 */ 					var __accu0__ = text_arg_nodelist;
/* 000229 */ 					return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000229 */ 						if (arguments.length) {
/* 000229 */ 							var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 								var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 								for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 									switch (__attrib0__) {
/* 000229 */ 										case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 									}
/* 000229 */ 								}
/* 000229 */ 							}
/* 000229 */ 						}
/* 000229 */ 						else {
/* 000229 */ 						}
/* 000231 */ 						return __t__ ((function () {
/* 000231 */ 							var __accu1__ = n;
/* 000231 */ 							return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000231 */ 						}) ()) && __eq__ (n.macroname, '\\');
/* 000231 */ 					}));
/* 000231 */ 				}) ();
/* 000235 */ 				var latex_walker = node.latex_walker;
/* 000236 */ 				var lines_info_list = [];
/* 000237 */ 				var __iterable0__ = text_arg_lines_nodelists;
/* 000237 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000237 */ 					var line_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000240 */ 					(function () {
/* 000240 */ 						var __accu0__ = lines_info_list;
/* 000241 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (quote_lines_process_line_nodelist_to_lineinfo, null, line_nodelist, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: line_nodelist.parsing_state})));
/* 000241 */ 					}) ();
/* 000241 */ 				}
/* 000248 */ 				__setitem__ (qsn_info, 'lines_info_list', lines_info_list);
/* 000248 */ 			}
/* 000250 */ 			(function () {
/* 000250 */ 				var __accu0__ = quote_section_nodes;
/* 000250 */ 				return __call__ (__accu0__.append, __accu0__, qsn_info);
/* 000250 */ 			}) ();
/* 000250 */ 		};
/* 000252 */ 		var __iterable0__ = node.nodelist;
/* 000252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000252 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000253 */ 			if (__t__ ((function () {
/* 000253 */ 				var __accu0__ = n;
/* 000253 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000253 */ 			}) ())) {
/* 000254 */ 				if (__t__ (__in__ (n.macroname, self.enabled_quote_sections))) {
/* 000259 */ 					__call__ (flush_auto_collecting_qs, null);
/* 000262 */ 					var text_arg_info = (function () {
/* 000262 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000262 */ 						return __call__ (__accu0__.get_argument_info, __accu0__, 'text');
/* 000262 */ 					}) ();
/* 000263 */ 					var text_arg_nodelist = (function () {
/* 000263 */ 						var __accu0__ = text_arg_info;
/* 000263 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000263 */ 					}) ();
/* 000264 */ 					__call__ (finalize_and_push_qsn_info, null, n.macroname, __kwargtrans__ ({qsn_node: n, text_arg_nodelist: text_arg_nodelist}));
/* 000264 */ 					continue;
/* 000264 */ 				}
/* 000264 */ 			}
/* 000271 */ 			if (__t__ ((function () {
/* 000271 */ 				var __accu0__ = n;
/* 000271 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000271 */ 			}) ())) {
/* 000271 */ 				continue;
/* 000271 */ 			}
/* 000275 */ 			if (__t__ (self.auto_quote_section_bare_content)) {
/* 000278 */ 				(function () {
/* 000278 */ 					var __accu0__ = auto_collecting_qs_nodelist;
/* 000278 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000278 */ 				}) ();
/* 000278 */ 				continue;
/* 000278 */ 			}
/* 000281 */ 			if (__t__ (__t__ ((function () {
/* 000281 */ 				var __accu0__ = n;
/* 000281 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000281 */ 			}) ()) && __eq__ ((function () {
/* 000281 */ 				var __accu0__ = n.chars;
/* 000281 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000281 */ 			}) (), ''))) {
/* 000281 */ 				continue;
/* 000281 */ 			}
/* 000288 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('All content in {}{}{} environments must be wrapped in an appropriate quote-section command ('.format ('{', self.environmentname, '}'), (function () {
/* 000288 */ 				var __accu0__ = ', ';
/* 000288 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000288 */ 					var __accu1__ = [];
/* 000288 */ 					var __iterable1__ = self.enabled_quote_sections;
/* 000288 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000288 */ 						var c = __getitem__ (__iterable1__, __index1__);
/* 000288 */ 						(function () {
/* 000288 */ 							var __accu2__ = __accu1__;
/* 000288 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('\\', __call__ (str, null, c)), '{}'));
/* 000288 */ 						}) ();
/* 000288 */ 					}
/* 000288 */ 					return __accu1__;
/* 000288 */ 				}) ());
/* 000289 */ 			}) ()), '); found content {}'.format (__call__ (str, null, n))), __kwargtrans__ ({pos: n.pos}));
/* 000289 */ 			__except0__.__cause__ = null;
/* 000289 */ 			throw __except0__;
/* 000289 */ 		}
/* 000293 */ 		__call__ (flush_auto_collecting_qs, null);
/* 000295 */ 		node.flm_quote_section_nodes = quote_section_nodes;
/* 000297 */ 		return node;
/* 000297 */ 	});},
/* 000299 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000301 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000305 */ 		var pieces = [];
/* 000307 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000307 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000307 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000309 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000310 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000311 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000312 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000313 */ 				(function () {
/* 000313 */ 					var __accu0__ = pieces;
/* 000314 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000314 */ 						var __accu1__ = fragment_renderer;
/* 000315 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000315 */ 							var __accu2__ = fragment_renderer;
/* 000315 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000315 */ 						}) (), __kwargtrans__ ({role: 'quote-text', render_context: render_context}));
/* 000315 */ 					}) ());
/* 000315 */ 				}) ();
/* 000315 */ 			}
/* 000320 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000321 */ 				(function () {
/* 000321 */ 					var __accu0__ = pieces;
/* 000322 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000322 */ 						var __accu1__ = fragment_renderer;
/* 000322 */ 						return __call__ (__accu1__.render_lines, __accu1__, __getitem__ (qsn, 'lines_info_list'), __kwargtrans__ ({role: 'quote-lines', render_context: render_context}));
/* 000322 */ 					}) ());
/* 000322 */ 				}) ();
/* 000322 */ 			}
/* 000328 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000329 */ 				(function () {
/* 000329 */ 					var __accu0__ = pieces;
/* 000330 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000330 */ 						var __accu1__ = fragment_renderer;
/* 000331 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000331 */ 							var __accu2__ = fragment_renderer;
/* 000331 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000331 */ 						}) (), __kwargtrans__ ({role: 'quote-attributed', render_context: render_context}));
/* 000331 */ 					}) ());
/* 000331 */ 				}) ();
/* 000331 */ 			}
/* 000336 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000337 */ 				(function () {
/* 000337 */ 					var __accu0__ = pieces;
/* 000338 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000338 */ 						var __accu1__ = fragment_renderer;
/* 000339 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000339 */ 							var __accu2__ = fragment_renderer;
/* 000339 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000339 */ 						}) (), __kwargtrans__ ({role: 'quote-block', render_context: render_context}));
/* 000339 */ 					}) ());
/* 000339 */ 				}) ();
/* 000339 */ 			}
/* 000342 */ 			else {
/* 000345 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000345 */ 				__except0__.__cause__ = null;
/* 000345 */ 				throw __except0__;
/* 000345 */ 			}
/* 000345 */ 		}
/* 000350 */ 		var rendered_contents = (function () {
/* 000350 */ 			var __accu0__ = fragment_renderer;
/* 000350 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, pieces, render_context);
/* 000350 */ 		}) ();
/* 000354 */ 		return (function () {
/* 000354 */ 			var __accu0__ = fragment_renderer;
/* 000354 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __kwargtrans__ ({role: self.environmentname, render_context: render_context}));
/* 000354 */ 		}) ();
/* 000354 */ 	});},
/* 000361 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000363 */ 		var recopt_quote = (function () {
/* 000363 */ 			var __accu0__ = recomposer;
/* 000363 */ 			return __call__ (__accu0__.get_options, __accu0__, 'quote');
/* 000363 */ 		}) ();
/* 000364 */ 		if (__t__ ((function () {
/* 000364 */ 			var __accu0__ = recopt_quote;
/* 000364 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000364 */ 		}) ())) {
/* 000365 */ 			return false;
/* 000365 */ 		}
/* 000367 */ 		var flm_quote_setup_macro = (function () {
/* 000367 */ 			var __accu0__ = recopt_quote;
/* 000367 */ 			return __call__ (__accu0__.py_get, __accu0__, 'setup_macro', 'flmQuoteSetup');
/* 000367 */ 		}) ();
/* 000368 */ 		var flm_text_macro = (function () {
/* 000368 */ 			var __accu0__ = recopt_quote;
/* 000368 */ 			return __call__ (__accu0__.py_get, __accu0__, 'text_macro', null);
/* 000368 */ 		}) ();
/* 000369 */ 		var flm_lines_macro = (function () {
/* 000369 */ 			var __accu0__ = recopt_quote;
/* 000369 */ 			return __call__ (__accu0__.py_get, __accu0__, 'lines_macro', null);
/* 000369 */ 		}) ();
/* 000370 */ 		var flm_attributed_macro = (function () {
/* 000370 */ 			var __accu0__ = recopt_quote;
/* 000370 */ 			return __call__ (__accu0__.py_get, __accu0__, 'attributed_macro', 'flmQuoteAttributed');
/* 000370 */ 		}) ();
/* 000371 */ 		var flm_block_macro = (function () {
/* 000371 */ 			var __accu0__ = recopt_quote;
/* 000371 */ 			return __call__ (__accu0__.py_get, __accu0__, 'block_macro', 'flmQuoteBlock');
/* 000371 */ 		}) ();
/* 000373 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', node.environmentname), '}'), '\n');
/* 000374 */ 		if (__t__ (__t__ (flm_quote_setup_macro !== null) && __call__ (len, null, flm_quote_setup_macro))) {
/* 000375 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', flm_quote_setup_macro), '{'), node.environmentname), '}%'), '\n'));
/* 000375 */ 		}
/* 000377 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000377 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000379 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000380 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000381 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000383 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000385 */ 				var content = (function () {
/* 000385 */ 					var __accu0__ = '\\\\\n';
/* 000385 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000385 */ 						var __accu1__ = [];
/* 000385 */ 						var __iterable1__ = __getitem__ (qsn, 'lines_info_list');
/* 000385 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000387 */ 							var lineinfo = __getitem__ (__iterable1__, __index1__);
/* 000387 */ 							(function () {
/* 000387 */ 								var __accu2__ = __accu1__;
/* 000386 */ 								return __call__ (__accu2__.append, __accu2__, __call__ (recompose_qs_line, null, lineinfo, node, recomposer));
/* 000386 */ 							}) ();
/* 000386 */ 						}
/* 000386 */ 						return __accu1__;
/* 000386 */ 					}) ());
/* 000386 */ 				}) ();
/* 000386 */ 			}
/* 000387 */ 			else {
/* 000390 */ 				var content = (function () {
/* 000390 */ 					var __accu0__ = (function () {
/* 000390 */ 						var __accu1__ = recomposer;
/* 000390 */ 						return __call__ (__accu1__.recompose_nodelist, __accu1__, text_arg_nodelist, node);
/* 000390 */ 					}) ();
/* 000390 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000390 */ 				}) ();
/* 000390 */ 			}
/* 000392 */ 			var wrap_macro = null;
/* 000393 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000394 */ 				if (__t__ (__t__ (flm_text_macro !== null) && __call__ (len, null, flm_text_macro))) {
/* 000395 */ 					var wrap_macro = flm_text_macro;
/* 000395 */ 				}
/* 000395 */ 			}
/* 000396 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000397 */ 				if (__t__ (__t__ (flm_lines_macro !== null) && __call__ (len, null, flm_lines_macro))) {
/* 000398 */ 					var wrap_macro = flm_lines_macro;
/* 000398 */ 				}
/* 000398 */ 			}
/* 000399 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000400 */ 				if (__t__ (__t__ (flm_attributed_macro !== null) && __call__ (len, null, flm_attributed_macro))) {
/* 000401 */ 					var wrap_macro = flm_attributed_macro;
/* 000401 */ 				}
/* 000401 */ 			}
/* 000402 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000403 */ 				if (__t__ (__t__ (flm_block_macro !== null) && __call__ (len, null, flm_block_macro))) {
/* 000404 */ 					var wrap_macro = flm_block_macro;
/* 000404 */ 				}
/* 000404 */ 			}
/* 000405 */ 			else {
/* 000406 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000406 */ 				__except0__.__cause__ = null;
/* 000406 */ 				throw __except0__;
/* 000406 */ 			}
/* 000410 */ 			if (__t__ (__t__ (wrap_macro !== null) && __call__ (len, null, wrap_macro))) {
/* 000411 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', wrap_macro), '{'), content), '}'), '\n'));
/* 000411 */ 			}
/* 000412 */ 			else {
/* 000413 */ 				var s = __call__ (__iadd__, null, s, __add__ (content, '\n'));
/* 000413 */ 			}
/* 000413 */ 		}
/* 000415 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000417 */ 		return s;
/* 000417 */ 	});}
/* 000417 */ });
/* 000421 */ export var recompose_qs_line = function (lineinfo, node, recomposer) {
/* 000421 */ 	if (arguments.length) {
/* 000421 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 				switch (__attrib0__) {
/* 000421 */ 					case 'lineinfo': var lineinfo = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 	}
/* 000421 */ 	else {
/* 000421 */ 	}
/* 000422 */ 	var s = '';
/* 000423 */ 	if (__t__ (lineinfo.indent_left !== null)) {
/* 000424 */ 		var s = __call__ (__iadd__, null, s, __mul__ ('\\indent ', lineinfo.indent_left));
/* 000424 */ 	}
/* 000425 */ 	var s = __call__ (__iadd__, null, s, (function () {
/* 000425 */ 		var __accu0__ = recomposer;
/* 000425 */ 		return __call__ (__accu0__.recompose_nodelist, __accu0__, lineinfo.nodelist, node);
/* 000425 */ 	}) ());
/* 000426 */ 	return s;
/* 000426 */ };
/* 000429 */ export var quote_lines_process_line_nodelist_to_lineinfo = function (nodelist, latex_walker, parsing_state) {
/* 000429 */ 	if (arguments.length) {
/* 000429 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 				switch (__attrib0__) {
/* 000429 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 	}
/* 000429 */ 	else {
/* 000429 */ 	}
/* 000432 */ 	var mk_line_info = function (new_node_list, indent_left) {
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'new_node_list': var new_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'indent_left': var indent_left = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000434 */ 		return __call__ (LineInfo, null, __kwargtrans__ ({nodelist: (function () {
/* 000434 */ 			var __accu0__ = latex_walker;
/* 000434 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, new_node_list, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000434 */ 		}) (), indent_left: indent_left}));
/* 000434 */ 	};
/* 000438 */ 	if (__t__ (__t__ (!__t__ ((nodelist))) || !__t__ ((__call__ (len, null, nodelist))))) {
/* 000439 */ 		return __call__ (mk_line_info, null, [], null);
/* 000439 */ 	}
/* 000442 */ 	var indent_left = null;
/* 000444 */ 	var jfirst = 0;
/* 000445 */ 	var __iterable0__ = nodelist;
/* 000445 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000445 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 		if (__t__ ((function () {
/* 000446 */ 			var __accu0__ = n;
/* 000446 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000446 */ 		}) ())) {
/* 000448 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000448 */ 			continue;
/* 000448 */ 		}
/* 000451 */ 		if (__t__ (__t__ ((function () {
/* 000451 */ 			var __accu0__ = n;
/* 000451 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000451 */ 		}) ()) && __eq__ ((function () {
/* 000451 */ 			var __accu0__ = n.chars;
/* 000451 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000451 */ 		}) (), ''))) {
/* 000453 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000453 */ 			continue;
/* 000453 */ 		}
/* 000456 */ 		if (__t__ (__t__ ((function () {
/* 000456 */ 			var __accu0__ = n;
/* 000456 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000456 */ 		}) ()) && __eq__ (n.macroname, 'indent'))) {
/* 000458 */ 			if (__t__ (indent_left === null)) {
/* 000459 */ 				var indent_left = 0;
/* 000459 */ 			}
/* 000460 */ 			var indent_left = __call__ (__iadd__, null, indent_left, 1);
/* 000463 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000463 */ 			continue;
/* 000463 */ 		}
/* 000463 */ 		break;
/* 000463 */ 	}
/* 000468 */ 	if (__t__ (__eq__ (jfirst, __call__ (len, null, nodelist)))) {
/* 000469 */ 		return __call__ (mk_line_info, null, [], indent_left);
/* 000469 */ 	}
/* 000471 */ 	var linfo_macronames = (function () {
/* 000471 */ 		var __accu0__ = [];
/* 000471 */ 		var __iterable0__ = __getitem__ (_quote_section_lines_environment, 'macros');
/* 000471 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000471 */ 			var m = __getitem__ (__iterable0__, __index0__);
/* 000471 */ 			(function () {
/* 000471 */ 				var __accu1__ = __accu0__;
/* 000471 */ 				return __call__ (__accu1__.append, __accu1__, m.macroname);
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000471 */ 		return __accu0__;
/* 000471 */ 	}) ();
/* 000472 */ 	var linfo_specials = (function () {
/* 000472 */ 		var __accu0__ = [];
/* 000472 */ 		var __iterable0__ = __getitem__ (_quote_section_lines_environment, 'specials');
/* 000472 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000472 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000472 */ 			(function () {
/* 000472 */ 				var __accu1__ = __accu0__;
/* 000472 */ 				return __call__ (__accu1__.append, __accu1__, s.specials_chars);
/* 000472 */ 			}) ();
/* 000472 */ 		}
/* 000472 */ 		return __accu0__;
/* 000472 */ 	}) ();
/* 000479 */ 	var __iterable0__ = __getslice__ (nodelist, jfirst, null, 1);
/* 000479 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000479 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000480 */ 		if (__t__ (__t__ ((function () {
/* 000480 */ 			var __accu0__ = n;
/* 000480 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000480 */ 		}) ()) && __in__ (n.macroname, linfo_macronames))) {
/* 000482 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Macro \\{} cannot appear mid-line in \\lines'.format (n.macroname), __kwargtrans__ ({pos: n.pos}));
/* 000482 */ 			__except0__.__cause__ = null;
/* 000482 */ 			throw __except0__;
/* 000482 */ 		}
/* 000486 */ 		if (__t__ (__t__ ((function () {
/* 000486 */ 			var __accu0__ = n;
/* 000486 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000486 */ 		}) ()) && __in__ (n.specials_chars, linfo_specials))) {
/* 000488 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Specials ‘\\{}’ cannot appear mid-line in \\lines'.format (n.specials_chars), __kwargtrans__ ({pos: n.pos}));
/* 000488 */ 			__except0__.__cause__ = null;
/* 000488 */ 			throw __except0__;
/* 000488 */ 		}
/* 000488 */ 	}
/* 000493 */ 	var new_node_list = (function () {
/* 000493 */ 		var __accu0__ = [];
/* 000493 */ 		var __iterable0__ = nodelist;
/* 000493 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000494 */ 			var node = __getitem__ (__iterable0__, __index0__);
/* 000494 */ 			(function () {
/* 000494 */ 				var __accu1__ = __accu0__;
/* 000494 */ 				return __call__ (__accu1__.append, __accu1__, node);
/* 000494 */ 			}) ();
/* 000494 */ 		}
/* 000494 */ 		return __accu0__;
/* 000494 */ 	}) ();
/* 000497 */ 	var first_node = __getitem__ (new_node_list, jfirst);
/* 000498 */ 	if (__t__ ((function () {
/* 000498 */ 		var __accu0__ = first_node;
/* 000498 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000498 */ 	}) ())) {
/* 000499 */ 		if (__t__ ((function () {
/* 000499 */ 			var __accu0__ = __getitem__ (first_node.chars, 0);
/* 000499 */ 			return __call__ (__accu0__.isspace, __accu0__);
/* 000499 */ 		}) ())) {
/* 000501 */ 			var fixed_first_node = (function () {
/* 000501 */ 				var __accu0__ = latex_walker;
/* 000503 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000503 */ 					var __accu1__ = first_node.chars;
/* 000503 */ 					return __call__ (__accu1__.lstrip, __accu1__);
/* 000503 */ 				}) (), pos: first_node.pos, pos_end: first_node.pos_end, parsing_state: first_node.parsing_state}));
/* 000503 */ 			}) ();
/* 000509 */ 			__setitem__ (new_node_list, jfirst, fixed_first_node);
/* 000509 */ 		}
/* 000509 */ 	}
/* 000512 */ 	var jlast = __sub__ (__call__ (len, null, nodelist), 1);
/* 000513 */ 	var last_node = __getitem__ (new_node_list, jlast);
/* 000514 */ 	if (__t__ (__t__ ((function () {
/* 000514 */ 		var __accu0__ = last_node;
/* 000514 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000515 */ 	}) ()) && (function () {
/* 000515 */ 		var __accu0__ = __getitem__ (last_node.chars, __sub__ (__call__ (len, null, last_node.chars), 1));
/* 000515 */ 		return __call__ (__accu0__.isspace, __accu0__);
/* 000515 */ 	}) ())) {
/* 000516 */ 		var fixed_last_node = (function () {
/* 000516 */ 			var __accu0__ = latex_walker;
/* 000518 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000518 */ 				var __accu1__ = last_node.chars;
/* 000518 */ 				return __call__ (__accu1__.rstrip, __accu1__);
/* 000518 */ 			}) (), pos: last_node.pos, pos_end: last_node.pos_end, parsing_state: last_node.parsing_state}));
/* 000518 */ 		}) ();
/* 000524 */ 		__setitem__ (new_node_list, jlast, fixed_last_node);
/* 000524 */ 	}
/* 000526 */ 	return __call__ (mk_line_info, null, __getslice__ (new_node_list, jfirst, null, 1), indent_left);
/* 000526 */ };
/* 000530 */ export var default_quote_environments = dict ({'quote': dict ({'enabled_quote_sections': ['text', 'lines', 'attributed', 'block']}), 'address': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'lines', 'content_is_block_level': false}), 'blockquote': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'block'})});
/* 000560 */ export var FeatureQuote =  __class__ ('FeatureQuote', [Feature], {
/* 000560 */ 	__module__: __name__,
/* 000568 */ 	feature_name: 'quotation',
/* 000569 */ 	feature_title: "Quote other people's words, with attribution",
/* 000572 */ 	feature_flm_doc: '\n    Provides the \\verbcode+\\begin{quote} ... \\end{quote}+ environment to produce\n    block literary quotations.\n    ',
/* 000579 */ 	DocumentManager: null,
/* 000580 */ 	RenderManager: null,
/* 000582 */ 	get __init__ () {return __get__ (this, function (self, quote_environments) {
/* 000582 */ 		if (typeof quote_environments == 'undefined' || (quote_environments != null && quote_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000582 */ 			var quote_environments = null;
/* 000582 */ 		};
/* 000582 */ 		if (arguments.length) {
/* 000582 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000582 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000582 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000582 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000582 */ 					switch (__attrib0__) {
/* 000582 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'quote_environments': var quote_environments = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 					}
/* 000582 */ 				}
/* 000582 */ 			}
/* 000582 */ 		}
/* 000582 */ 		else {
/* 000582 */ 		}
/* 000590 */ 		__call__ (__call__ (__super__, null, FeatureQuote, '__init__'), null, self);
/* 000591 */ 		if (__t__ (quote_environments === null)) {
/* 000592 */ 			var quote_environments = default_quote_environments;
/* 000592 */ 		}
/* 000593 */ 		self.quote_environments = quote_environments;
/* 000593 */ 	});},
/* 000596 */ 	get _mk_quote_environment_spec () {return __get__ (this, function (self, qenvname, qenvspec) {
/* 000596 */ 		if (arguments.length) {
/* 000596 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000596 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000596 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000596 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000596 */ 					switch (__attrib0__) {
/* 000596 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'qenvname': var qenvname = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'qenvspec': var qenvspec = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 					}
/* 000596 */ 				}
/* 000596 */ 			}
/* 000596 */ 		}
/* 000596 */ 		else {
/* 000596 */ 		}
/* 000597 */ 		if (__t__ (__call__ (isinstance, null, qenvspec, QuoteEnvironment))) {
/* 000598 */ 			if (__t__ (__ne__ (qenvname, qenvspec.environmentname))) {
/* 000602 */ 				var __except0__ = __call__ (ValueError, null, 'Misconfigured QuoteEnvironment instance with qenvname != qenvspec.environmentname : {} != {}'.format (__call__ (repr, null, qenvname), __call__ (repr, null, qenvspec.environmentname)));
/* 000602 */ 				__except0__.__cause__ = null;
/* 000602 */ 				throw __except0__;
/* 000602 */ 			}
/* 000604 */ 			return qenvspec;
/* 000604 */ 		}
/* 000605 */ 		return __call__ (QuoteEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: qenvname}, qenvspec)));
/* 000605 */ 	});},
/* 000607 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000609 */ 		var environments = (function () {
/* 000609 */ 			var __accu0__ = [];
/* 000611 */ 			var __iterable0__ = (function () {
/* 000611 */ 				var __accu1__ = self.quote_environments;
/* 000611 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000611 */ 			}) ();
/* 000611 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000611 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000611 */ 				var qenvname = __left0__ [0];
/* 000611 */ 				var qenvspec = __left0__ [1];
/* 000611 */ 				(function () {
/* 000611 */ 					var __accu1__ = __accu0__;
/* 000610 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000610 */ 						var __accu2__ = self;
/* 000610 */ 						return __call__ (__accu2__._mk_quote_environment_spec, __accu2__, qenvname, qenvspec);
/* 000610 */ 					}) ());
/* 000610 */ 				}) ();
/* 000610 */ 			}
/* 000610 */ 			return __accu0__;
/* 000610 */ 		}) ();
/* 000614 */ 		return dict ({'environments': environments});
/* 000614 */ 	});}
/* 000614 */ });
/* 000621 */ export var FeatureClass = FeatureQuote;
/* 000013 */ 
//# sourceMappingURL=flm.feature.quote.map