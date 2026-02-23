/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:28
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
/* 000006 */ export {text_arg, ParsingStateDeltaExtendLatexContextDb, LatexWalkerLocatedError, Feature, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_nodes, MacroSpec, LatexEnvironmentBodyContentsParser, FLMEnvironmentSpecBase};
/* 000001 */ var __name__ = 'flm.feature.quote';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000039 */ export var _quote_section_lines_environment = dict ({'macros': [__call__ (MacroSpec, null, '\\'), __call__ (MacroSpec, null, 'indent')], 'specials': []});
/* 000073 */ export var _quote_section_macros = dict ({'text': __call__ (MacroSpec, null, 'text', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'lines': __call__ (MacroSpec, null, 'lines', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: _quote_section_lines_environment, set_attributes: dict ({'is_block_level': false})}))}))]})), 'attributed': __call__ (MacroSpec, null, 'attributed', __kwargtrans__ ({arguments_spec_list: [text_arg]})), 'block': __call__ (MacroSpec, null, 'block', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}))]}))});
/* 000083 */ export var LineInfo =  __class__ ('LineInfo', [object], {
/* 000083 */ 	__module__: __name__,
/* 000084 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000084 */ 		var nodelist = null;
/* 000084 */ 		var align = null;
/* 000084 */ 		var indent_left = null;
/* 000084 */ 		var indent_right = null;
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'align': var align = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'indent_left': var indent_left = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'indent_right': var indent_right = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000091 */ 		__call__ (__call__ (__super__, null, LineInfo, '__init__'), null, self);
/* 000092 */ 		self.nodelist = nodelist;
/* 000093 */ 		self.align = align;
/* 000094 */ 		self.indent_left = indent_left;
/* 000095 */ 		self.indent_right = indent_right;
/* 000096 */ 		self._fields = tuple (['nodelist', 'align', 'indent_left', 'indent_right']);
/* 000096 */ 	});},
/* 000099 */ 	get asdict () {return __get__ (this, function (self) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000100 */ 		return (function () {
/* 000100 */ 			var __accu0__ = [];
/* 000100 */ 			var __iterable0__ = self._fields;
/* 000100 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000100 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000100 */ 				(function () {
/* 000100 */ 					var __accu1__ = __accu0__;
/* 000100 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000100 */ 				}) ();
/* 000100 */ 			}
/* 000100 */ 			return dict (__accu0__);
/* 000100 */ 		}) ();
/* 000100 */ 	});},
/* 000102 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000103 */ 		return (function () {
/* 000103 */ 			var __accu0__ = '{}({})';
/* 000105 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000105 */ 				var __accu1__ = ', ';
/* 000105 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000105 */ 					var __accu2__ = [];
/* 000105 */ 					var __iterable0__ = self._fields;
/* 000105 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000105 */ 						(function () {
/* 000105 */ 							var __accu3__ = __accu2__;
/* 000105 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000105 */ 						}) ();
/* 000105 */ 					}
/* 000105 */ 					return __accu2__;
/* 000105 */ 				}) ());
/* 000105 */ 			}) ());
/* 000105 */ 		}) ();
/* 000105 */ 	});}
/* 000105 */ });
/* 000111 */ export var QuoteEnvironment =  __class__ ('QuoteEnvironment', [FLMEnvironmentSpecBase], {
/* 000111 */ 	__module__: __name__,
/* 000120 */ 	is_block_level: true,
/* 000122 */ 	body_contents_is_block_level: true,
/* 000124 */ 	get __init__ () {return __get__ (this, function (self, environmentname, enabled_quote_sections, content_is_block_level, auto_quote_section_bare_content) {
/* 000124 */ 		if (typeof enabled_quote_sections == 'undefined' || (enabled_quote_sections != null && enabled_quote_sections.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var enabled_quote_sections = null;
/* 000124 */ 		};
/* 000124 */ 		if (typeof content_is_block_level == 'undefined' || (content_is_block_level != null && content_is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var content_is_block_level = true;
/* 000124 */ 		};
/* 000124 */ 		if (typeof auto_quote_section_bare_content == 'undefined' || (auto_quote_section_bare_content != null && auto_quote_section_bare_content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000124 */ 			var auto_quote_section_bare_content = false;
/* 000124 */ 		};
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'enabled_quote_sections': var enabled_quote_sections = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'content_is_block_level': var content_is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'auto_quote_section_bare_content': var auto_quote_section_bare_content = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000128 */ 		__call__ (__call__ (__super__, null, QuoteEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: []}));
/* 000132 */ 		if (__t__ (__t__ (enabled_quote_sections) && __call__ (len, null, enabled_quote_sections))) {
/* 000133 */ 			self.enabled_quote_sections = __call__ (list, null, enabled_quote_sections);
/* 000133 */ 		}
/* 000134 */ 		else {
/* 000135 */ 			self.enabled_quote_sections = [];
/* 000135 */ 		}
/* 000136 */ 		self.auto_quote_section_bare_content = auto_quote_section_bare_content;
/* 000137 */ 		self.content_is_block_level = content_is_block_level;
/* 000139 */ 		if (__t__ (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines')) && self.content_is_block_level)) {
/* 000141 */ 			(function () {
/* 000141 */ 				var __accu0__ = logger;
/* 000141 */ 				return __call__ (__accu0__.warning, __accu0__, "Configuration of quote-type environment {}{}{} might be flawed: using '\\lines' for bare environment content (auto_quote_section_bare_content='lines') but content_is_block_level is set to True; consider setting it to False instead.".format ('{', environmentname, '}'));
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000141 */ 	});},
/* 000148 */ 	_fields: tuple (['enabled_quote_sections', 'content_is_block_level']),
/* 000150 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000152 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [], environments: [], specials: []}));
/* 000157 */ 		var __iterable0__ = self.enabled_quote_sections;
/* 000157 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000157 */ 			var quote_section = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 			(function () {
/* 000158 */ 				var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000158 */ 				return __call__ (__accu0__.append, __accu0__, __getitem__ (_quote_section_macros, quote_section));
/* 000158 */ 			}) ();
/* 000158 */ 		}
/* 000162 */ 		if (__t__ (__eq__ (self.auto_quote_section_bare_content, 'lines'))) {
/* 000163 */ 			var __iterable0__ = tuple (['macros', 'environments', 'specials']);
/* 000163 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000163 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000164 */ 				if (__t__ (__in__ (part, _quote_section_lines_environment))) {
/* 000165 */ 					(function () {
/* 000165 */ 						var __accu0__ = __getitem__ (extend_latex_context, part);
/* 000165 */ 						return __call__ (__accu0__.extend, __accu0__, __getitem__ (_quote_section_lines_environment, part));
/* 000165 */ 					}) ();
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000173 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.content_is_block_level}))}))}));
/* 000173 */ 	});},
/* 000177 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000182 */ 		var quote_section_nodes = [];
/* 000184 */ 		var auto_collecting_qs_nodelist = [];
/* 000186 */ 		var flush_auto_collecting_qs = function () {
/* 000186 */ 			if (arguments.length) {
/* 000186 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 			else {
/* 000186 */ 			}
/* 000187 */ 			if (__t__ (!__t__ ((self.auto_quote_section_bare_content)))) {
/* 000188 */ 				return ;
/* 000188 */ 			}
/* 000191 */ 			var has_content = false;
/* 000192 */ 			var __iterable0__ = auto_collecting_qs_nodelist;
/* 000192 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000193 */ 				if (__t__ ((function () {
/* 000193 */ 					var __accu0__ = n;
/* 000193 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000193 */ 				}) ())) {
/* 000193 */ 					continue;
/* 000193 */ 				}
/* 000195 */ 				if (__t__ (__t__ ((function () {
/* 000195 */ 					var __accu0__ = n;
/* 000195 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000195 */ 				}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000195 */ 					var __accu0__ = n.chars;
/* 000195 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000195 */ 				}) ()), 0))) {
/* 000195 */ 					continue;
/* 000195 */ 				}
/* 000197 */ 				var has_content = true;
/* 000197 */ 				break;
/* 000197 */ 			}
/* 000199 */ 			if (__t__ (!__t__ ((has_content)))) {
/* 000200 */ 				return ;
/* 000200 */ 			}
/* 000204 */ 			__call__ (finalize_and_push_qsn_info, null, self.auto_quote_section_bare_content, __kwargtrans__ ({qsn_node: null, text_arg_nodelist: (function () {
/* 000204 */ 				var __accu0__ = node.latex_walker;
/* 000205 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __call__ (list, null, auto_collecting_qs_nodelist), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000205 */ 			}) ()}));
/* 000209 */ 			(function () {
/* 000209 */ 				var __accu0__ = auto_collecting_qs_nodelist;
/* 000209 */ 				return __call__ (__accu0__.py_clear, __accu0__);
/* 000209 */ 			}) ();
/* 000209 */ 		};
/* 000211 */ 		var finalize_and_push_qsn_info = function (py_name, qsn_node, text_arg_nodelist) {
/* 000211 */ 			if (arguments.length) {
/* 000211 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 						switch (__attrib0__) {
/* 000211 */ 							case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 							case 'qsn_node': var qsn_node = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 							case 'text_arg_nodelist': var text_arg_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						}
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 			else {
/* 000211 */ 			}
/* 000212 */ 			var qsn_info = dict ({'name': py_name, 'node': qsn_node, 'text_arg_nodelist': text_arg_nodelist});
/* 000218 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000220 */ 				var text_arg_lines_nodelists = (function () {
/* 000220 */ 					var __accu0__ = text_arg_nodelist;
/* 000220 */ 					return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (n) {
/* 000220 */ 						if (arguments.length) {
/* 000220 */ 							var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 								var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 								for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 									switch (__attrib0__) {
/* 000220 */ 										case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 									}
/* 000220 */ 								}
/* 000220 */ 							}
/* 000220 */ 						}
/* 000220 */ 						else {
/* 000220 */ 						}
/* 000222 */ 						return __t__ ((function () {
/* 000222 */ 							var __accu1__ = n;
/* 000222 */ 							return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000222 */ 						}) ()) && __eq__ (n.macroname, '\\');
/* 000222 */ 					}));
/* 000222 */ 				}) ();
/* 000226 */ 				var latex_walker = node.latex_walker;
/* 000227 */ 				var lines_info_list = [];
/* 000228 */ 				var __iterable0__ = text_arg_lines_nodelists;
/* 000228 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000228 */ 					var line_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 					(function () {
/* 000231 */ 						var __accu0__ = lines_info_list;
/* 000232 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (quote_lines_process_line_nodelist_to_lineinfo, null, line_nodelist, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: line_nodelist.parsing_state})));
/* 000232 */ 					}) ();
/* 000232 */ 				}
/* 000239 */ 				__setitem__ (qsn_info, 'lines_info_list', lines_info_list);
/* 000239 */ 			}
/* 000241 */ 			(function () {
/* 000241 */ 				var __accu0__ = quote_section_nodes;
/* 000241 */ 				return __call__ (__accu0__.append, __accu0__, qsn_info);
/* 000241 */ 			}) ();
/* 000241 */ 		};
/* 000243 */ 		var __iterable0__ = node.nodelist;
/* 000243 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000243 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 			if (__t__ ((function () {
/* 000244 */ 				var __accu0__ = n;
/* 000244 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000244 */ 			}) ())) {
/* 000245 */ 				if (__t__ (__in__ (n.macroname, self.enabled_quote_sections))) {
/* 000250 */ 					__call__ (flush_auto_collecting_qs, null);
/* 000253 */ 					var text_arg_info = (function () {
/* 000253 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000253 */ 						return __call__ (__accu0__.get_argument_info, __accu0__, 'text');
/* 000253 */ 					}) ();
/* 000254 */ 					var text_arg_nodelist = (function () {
/* 000254 */ 						var __accu0__ = text_arg_info;
/* 000254 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000254 */ 					}) ();
/* 000255 */ 					__call__ (finalize_and_push_qsn_info, null, n.macroname, __kwargtrans__ ({qsn_node: n, text_arg_nodelist: text_arg_nodelist}));
/* 000255 */ 					continue;
/* 000255 */ 				}
/* 000255 */ 			}
/* 000262 */ 			if (__t__ ((function () {
/* 000262 */ 				var __accu0__ = n;
/* 000262 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000262 */ 			}) ())) {
/* 000262 */ 				continue;
/* 000262 */ 			}
/* 000266 */ 			if (__t__ (self.auto_quote_section_bare_content)) {
/* 000269 */ 				(function () {
/* 000269 */ 					var __accu0__ = auto_collecting_qs_nodelist;
/* 000269 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000269 */ 				}) ();
/* 000269 */ 				continue;
/* 000269 */ 			}
/* 000272 */ 			if (__t__ (__t__ ((function () {
/* 000272 */ 				var __accu0__ = n;
/* 000272 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000272 */ 			}) ()) && __eq__ ((function () {
/* 000272 */ 				var __accu0__ = n.chars;
/* 000272 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000272 */ 			}) (), ''))) {
/* 000272 */ 				continue;
/* 000272 */ 			}
/* 000279 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('All content in {}{}{} environments must be wrapped in an appropriate quote-section command ('.format ('{', self.environmentname, '}'), (function () {
/* 000279 */ 				var __accu0__ = ', ';
/* 000279 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000279 */ 					var __accu1__ = [];
/* 000279 */ 					var __iterable1__ = self.enabled_quote_sections;
/* 000279 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000279 */ 						var c = __getitem__ (__iterable1__, __index1__);
/* 000279 */ 						(function () {
/* 000279 */ 							var __accu2__ = __accu1__;
/* 000279 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('\\', __call__ (str, null, c)), '{}'));
/* 000279 */ 						}) ();
/* 000279 */ 					}
/* 000279 */ 					return __accu1__;
/* 000279 */ 				}) ());
/* 000280 */ 			}) ()), '); found content {}'.format (__call__ (str, null, n))), __kwargtrans__ ({pos: n.pos}));
/* 000280 */ 			__except0__.__cause__ = null;
/* 000280 */ 			throw __except0__;
/* 000280 */ 		}
/* 000284 */ 		__call__ (flush_auto_collecting_qs, null);
/* 000286 */ 		node.flm_quote_section_nodes = quote_section_nodes;
/* 000288 */ 		return node;
/* 000288 */ 	});},
/* 000290 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000292 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000296 */ 		var pieces = [];
/* 000298 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000298 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000298 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000300 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000301 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000302 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000303 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000304 */ 				(function () {
/* 000304 */ 					var __accu0__ = pieces;
/* 000305 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000305 */ 						var __accu1__ = fragment_renderer;
/* 000306 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000306 */ 							var __accu2__ = fragment_renderer;
/* 000306 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000306 */ 						}) (), __kwargtrans__ ({role: 'quote-text', render_context: render_context}));
/* 000306 */ 					}) ());
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000311 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000312 */ 				(function () {
/* 000312 */ 					var __accu0__ = pieces;
/* 000313 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000313 */ 						var __accu1__ = fragment_renderer;
/* 000313 */ 						return __call__ (__accu1__.render_lines, __accu1__, __getitem__ (qsn, 'lines_info_list'), __kwargtrans__ ({role: 'quote-lines', render_context: render_context}));
/* 000313 */ 					}) ());
/* 000313 */ 				}) ();
/* 000313 */ 			}
/* 000319 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000320 */ 				(function () {
/* 000320 */ 					var __accu0__ = pieces;
/* 000321 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000321 */ 						var __accu1__ = fragment_renderer;
/* 000322 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000322 */ 							var __accu2__ = fragment_renderer;
/* 000322 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000322 */ 						}) (), __kwargtrans__ ({role: 'quote-attributed', render_context: render_context}));
/* 000322 */ 					}) ());
/* 000322 */ 				}) ();
/* 000322 */ 			}
/* 000327 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000328 */ 				(function () {
/* 000328 */ 					var __accu0__ = pieces;
/* 000329 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000329 */ 						var __accu1__ = fragment_renderer;
/* 000330 */ 						return __call__ (__accu1__.render_semantic_block, __accu1__, (function () {
/* 000330 */ 							var __accu2__ = fragment_renderer;
/* 000330 */ 							return __call__ (__accu2__.render_nodelist, __accu2__, text_arg_nodelist, render_context);
/* 000330 */ 						}) (), __kwargtrans__ ({role: 'quote-block', render_context: render_context}));
/* 000330 */ 					}) ());
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000333 */ 			else {
/* 000336 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000336 */ 				__except0__.__cause__ = null;
/* 000336 */ 				throw __except0__;
/* 000336 */ 			}
/* 000336 */ 		}
/* 000341 */ 		var rendered_contents = (function () {
/* 000341 */ 			var __accu0__ = fragment_renderer;
/* 000341 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, pieces, render_context);
/* 000341 */ 		}) ();
/* 000345 */ 		return (function () {
/* 000345 */ 			var __accu0__ = fragment_renderer;
/* 000345 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __kwargtrans__ ({role: self.environmentname, render_context: render_context}));
/* 000345 */ 		}) ();
/* 000345 */ 	});},
/* 000352 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000354 */ 		var recopt_quote = (function () {
/* 000354 */ 			var __accu0__ = recomposer;
/* 000354 */ 			return __call__ (__accu0__.get_options, __accu0__, 'quote');
/* 000354 */ 		}) ();
/* 000355 */ 		if (__t__ ((function () {
/* 000355 */ 			var __accu0__ = recopt_quote;
/* 000355 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000355 */ 		}) ())) {
/* 000356 */ 			return false;
/* 000356 */ 		}
/* 000358 */ 		var flm_quote_setup_macro = (function () {
/* 000358 */ 			var __accu0__ = recopt_quote;
/* 000358 */ 			return __call__ (__accu0__.py_get, __accu0__, 'setup_macro', 'flmQuoteSetup');
/* 000358 */ 		}) ();
/* 000359 */ 		var flm_text_macro = (function () {
/* 000359 */ 			var __accu0__ = recopt_quote;
/* 000359 */ 			return __call__ (__accu0__.py_get, __accu0__, 'text_macro', null);
/* 000359 */ 		}) ();
/* 000360 */ 		var flm_lines_macro = (function () {
/* 000360 */ 			var __accu0__ = recopt_quote;
/* 000360 */ 			return __call__ (__accu0__.py_get, __accu0__, 'lines_macro', null);
/* 000360 */ 		}) ();
/* 000361 */ 		var flm_attributed_macro = (function () {
/* 000361 */ 			var __accu0__ = recopt_quote;
/* 000361 */ 			return __call__ (__accu0__.py_get, __accu0__, 'attributed_macro', 'flmQuoteAttributed');
/* 000361 */ 		}) ();
/* 000362 */ 		var flm_block_macro = (function () {
/* 000362 */ 			var __accu0__ = recopt_quote;
/* 000362 */ 			return __call__ (__accu0__.py_get, __accu0__, 'block_macro', 'flmQuoteBlock');
/* 000362 */ 		}) ();
/* 000364 */ 		var s = __add__ (__add__ (__add__ ('\\begin{', node.environmentname), '}'), '\n');
/* 000365 */ 		if (__t__ (__t__ (flm_quote_setup_macro !== null) && __call__ (len, null, flm_quote_setup_macro))) {
/* 000366 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', flm_quote_setup_macro), '{'), node.environmentname), '}%'), '\n'));
/* 000366 */ 		}
/* 000368 */ 		var __iterable0__ = node.flm_quote_section_nodes;
/* 000368 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000368 */ 			var qsn = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 			var py_name = __getitem__ (qsn, 'name');
/* 000371 */ 			var qsn_node = __getitem__ (qsn, 'node');
/* 000372 */ 			var text_arg_nodelist = __getitem__ (qsn, 'text_arg_nodelist');
/* 000374 */ 			if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000376 */ 				var content = (function () {
/* 000376 */ 					var __accu0__ = '\\\\\n';
/* 000376 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000376 */ 						var __accu1__ = [];
/* 000376 */ 						var __iterable1__ = __getitem__ (qsn, 'lines_info_list');
/* 000376 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000378 */ 							var lineinfo = __getitem__ (__iterable1__, __index1__);
/* 000378 */ 							(function () {
/* 000378 */ 								var __accu2__ = __accu1__;
/* 000377 */ 								return __call__ (__accu2__.append, __accu2__, __call__ (recompose_qs_line, null, lineinfo, node, recomposer));
/* 000377 */ 							}) ();
/* 000377 */ 						}
/* 000377 */ 						return __accu1__;
/* 000377 */ 					}) ());
/* 000377 */ 				}) ();
/* 000377 */ 			}
/* 000378 */ 			else {
/* 000381 */ 				var content = (function () {
/* 000381 */ 					var __accu0__ = (function () {
/* 000381 */ 						var __accu1__ = recomposer;
/* 000381 */ 						return __call__ (__accu1__.recompose_nodelist, __accu1__, text_arg_nodelist, node);
/* 000381 */ 					}) ();
/* 000381 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000381 */ 				}) ();
/* 000381 */ 			}
/* 000383 */ 			var wrap_macro = null;
/* 000384 */ 			if (__t__ (__eq__ (py_name, 'text'))) {
/* 000385 */ 				if (__t__ (__t__ (flm_text_macro !== null) && __call__ (len, null, flm_text_macro))) {
/* 000386 */ 					var wrap_macro = flm_text_macro;
/* 000386 */ 				}
/* 000386 */ 			}
/* 000387 */ 			else if (__t__ (__eq__ (py_name, 'lines'))) {
/* 000388 */ 				if (__t__ (__t__ (flm_lines_macro !== null) && __call__ (len, null, flm_lines_macro))) {
/* 000389 */ 					var wrap_macro = flm_lines_macro;
/* 000389 */ 				}
/* 000389 */ 			}
/* 000390 */ 			else if (__t__ (__eq__ (py_name, 'attributed'))) {
/* 000391 */ 				if (__t__ (__t__ (flm_attributed_macro !== null) && __call__ (len, null, flm_attributed_macro))) {
/* 000392 */ 					var wrap_macro = flm_attributed_macro;
/* 000392 */ 				}
/* 000392 */ 			}
/* 000393 */ 			else if (__t__ (__eq__ (py_name, 'block'))) {
/* 000394 */ 				if (__t__ (__t__ (flm_block_macro !== null) && __call__ (len, null, flm_block_macro))) {
/* 000395 */ 					var wrap_macro = flm_block_macro;
/* 000395 */ 				}
/* 000395 */ 			}
/* 000396 */ 			else {
/* 000397 */ 				var __except0__ = __call__ (ValueError, null, 'No idea how to render quote-section of type ‘{}’'.format (py_name));
/* 000397 */ 				__except0__.__cause__ = null;
/* 000397 */ 				throw __except0__;
/* 000397 */ 			}
/* 000401 */ 			if (__t__ (__t__ (wrap_macro !== null) && __call__ (len, null, wrap_macro))) {
/* 000402 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ (__add__ ('\\', wrap_macro), '{'), content), '}'), '\n'));
/* 000402 */ 			}
/* 000403 */ 			else {
/* 000404 */ 				var s = __call__ (__iadd__, null, s, __add__ (content, '\n'));
/* 000404 */ 			}
/* 000404 */ 		}
/* 000406 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000408 */ 		return s;
/* 000408 */ 	});}
/* 000408 */ });
/* 000412 */ export var recompose_qs_line = function (lineinfo, node, recomposer) {
/* 000412 */ 	if (arguments.length) {
/* 000412 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 				switch (__attrib0__) {
/* 000412 */ 					case 'lineinfo': var lineinfo = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 	}
/* 000412 */ 	else {
/* 000412 */ 	}
/* 000413 */ 	var s = '';
/* 000414 */ 	if (__t__ (lineinfo.indent_left !== null)) {
/* 000415 */ 		var s = __call__ (__iadd__, null, s, __mul__ ('\\indent ', lineinfo.indent_left));
/* 000415 */ 	}
/* 000416 */ 	var s = __call__ (__iadd__, null, s, (function () {
/* 000416 */ 		var __accu0__ = recomposer;
/* 000416 */ 		return __call__ (__accu0__.recompose_nodelist, __accu0__, lineinfo.nodelist, node);
/* 000416 */ 	}) ());
/* 000417 */ 	return s;
/* 000417 */ };
/* 000420 */ export var quote_lines_process_line_nodelist_to_lineinfo = function (nodelist, latex_walker, parsing_state) {
/* 000420 */ 	if (arguments.length) {
/* 000420 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000420 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000420 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000420 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000420 */ 				switch (__attrib0__) {
/* 000420 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 				}
/* 000420 */ 			}
/* 000420 */ 		}
/* 000420 */ 	}
/* 000420 */ 	else {
/* 000420 */ 	}
/* 000423 */ 	var mk_line_info = function (new_node_list, indent_left) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'new_node_list': var new_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'indent_left': var indent_left = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000425 */ 		return __call__ (LineInfo, null, __kwargtrans__ ({nodelist: (function () {
/* 000425 */ 			var __accu0__ = latex_walker;
/* 000425 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, new_node_list, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000425 */ 		}) (), indent_left: indent_left}));
/* 000425 */ 	};
/* 000429 */ 	if (__t__ (__t__ (!__t__ ((nodelist))) || !__t__ ((__call__ (len, null, nodelist))))) {
/* 000430 */ 		return __call__ (mk_line_info, null, [], null);
/* 000430 */ 	}
/* 000433 */ 	var indent_left = null;
/* 000435 */ 	var jfirst = 0;
/* 000436 */ 	var __iterable0__ = nodelist;
/* 000436 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000436 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000437 */ 		if (__t__ ((function () {
/* 000437 */ 			var __accu0__ = n;
/* 000437 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000437 */ 		}) ())) {
/* 000439 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000439 */ 			continue;
/* 000439 */ 		}
/* 000442 */ 		if (__t__ (__t__ ((function () {
/* 000442 */ 			var __accu0__ = n;
/* 000442 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000442 */ 		}) ()) && __eq__ ((function () {
/* 000442 */ 			var __accu0__ = n.chars;
/* 000442 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000442 */ 		}) (), ''))) {
/* 000444 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000444 */ 			continue;
/* 000444 */ 		}
/* 000447 */ 		if (__t__ (__t__ ((function () {
/* 000447 */ 			var __accu0__ = n;
/* 000447 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000447 */ 		}) ()) && __eq__ (n.macroname, 'indent'))) {
/* 000449 */ 			if (__t__ (indent_left === null)) {
/* 000450 */ 				var indent_left = 0;
/* 000450 */ 			}
/* 000451 */ 			var indent_left = __call__ (__iadd__, null, indent_left, 1);
/* 000454 */ 			var jfirst = __call__ (__iadd__, null, jfirst, 1);
/* 000454 */ 			continue;
/* 000454 */ 		}
/* 000454 */ 		break;
/* 000454 */ 	}
/* 000459 */ 	if (__t__ (__eq__ (jfirst, __call__ (len, null, nodelist)))) {
/* 000460 */ 		return __call__ (mk_line_info, null, [], indent_left);
/* 000460 */ 	}
/* 000462 */ 	var linfo_macronames = (function () {
/* 000462 */ 		var __accu0__ = [];
/* 000462 */ 		var __iterable0__ = __getitem__ (_quote_section_lines_environment, 'macros');
/* 000462 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000462 */ 			var m = __getitem__ (__iterable0__, __index0__);
/* 000462 */ 			(function () {
/* 000462 */ 				var __accu1__ = __accu0__;
/* 000462 */ 				return __call__ (__accu1__.append, __accu1__, m.macroname);
/* 000462 */ 			}) ();
/* 000462 */ 		}
/* 000462 */ 		return __accu0__;
/* 000462 */ 	}) ();
/* 000463 */ 	var linfo_specials = (function () {
/* 000463 */ 		var __accu0__ = [];
/* 000463 */ 		var __iterable0__ = __getitem__ (_quote_section_lines_environment, 'specials');
/* 000463 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000463 */ 			var s = __getitem__ (__iterable0__, __index0__);
/* 000463 */ 			(function () {
/* 000463 */ 				var __accu1__ = __accu0__;
/* 000463 */ 				return __call__ (__accu1__.append, __accu1__, s.specials_chars);
/* 000463 */ 			}) ();
/* 000463 */ 		}
/* 000463 */ 		return __accu0__;
/* 000463 */ 	}) ();
/* 000470 */ 	var __iterable0__ = __getslice__ (nodelist, jfirst, null, 1);
/* 000470 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000470 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000471 */ 		if (__t__ (__t__ ((function () {
/* 000471 */ 			var __accu0__ = n;
/* 000471 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000471 */ 		}) ()) && __in__ (n.macroname, linfo_macronames))) {
/* 000473 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Macro \\{} cannot appear mid-line in \\lines'.format (n.macroname), __kwargtrans__ ({pos: n.pos}));
/* 000473 */ 			__except0__.__cause__ = null;
/* 000473 */ 			throw __except0__;
/* 000473 */ 		}
/* 000477 */ 		if (__t__ (__t__ ((function () {
/* 000477 */ 			var __accu0__ = n;
/* 000477 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000477 */ 		}) ()) && __in__ (n.specials_chars, linfo_specials))) {
/* 000479 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Specials ‘\\{}’ cannot appear mid-line in \\lines'.format (n.specials_chars), __kwargtrans__ ({pos: n.pos}));
/* 000479 */ 			__except0__.__cause__ = null;
/* 000479 */ 			throw __except0__;
/* 000479 */ 		}
/* 000479 */ 	}
/* 000484 */ 	var new_node_list = (function () {
/* 000484 */ 		var __accu0__ = [];
/* 000484 */ 		var __iterable0__ = nodelist;
/* 000484 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000485 */ 			var node = __getitem__ (__iterable0__, __index0__);
/* 000485 */ 			(function () {
/* 000485 */ 				var __accu1__ = __accu0__;
/* 000485 */ 				return __call__ (__accu1__.append, __accu1__, node);
/* 000485 */ 			}) ();
/* 000485 */ 		}
/* 000485 */ 		return __accu0__;
/* 000485 */ 	}) ();
/* 000488 */ 	var first_node = __getitem__ (new_node_list, jfirst);
/* 000489 */ 	if (__t__ ((function () {
/* 000489 */ 		var __accu0__ = first_node;
/* 000489 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000489 */ 	}) ())) {
/* 000490 */ 		if (__t__ ((function () {
/* 000490 */ 			var __accu0__ = __getitem__ (first_node.chars, 0);
/* 000490 */ 			return __call__ (__accu0__.isspace, __accu0__);
/* 000490 */ 		}) ())) {
/* 000492 */ 			var fixed_first_node = (function () {
/* 000492 */ 				var __accu0__ = latex_walker;
/* 000494 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000494 */ 					var __accu1__ = first_node.chars;
/* 000494 */ 					return __call__ (__accu1__.lstrip, __accu1__);
/* 000494 */ 				}) (), pos: first_node.pos, pos_end: first_node.pos_end, parsing_state: first_node.parsing_state}));
/* 000494 */ 			}) ();
/* 000500 */ 			__setitem__ (new_node_list, jfirst, fixed_first_node);
/* 000500 */ 		}
/* 000500 */ 	}
/* 000503 */ 	var jlast = __sub__ (__call__ (len, null, nodelist), 1);
/* 000504 */ 	var last_node = __getitem__ (new_node_list, jlast);
/* 000505 */ 	if (__t__ (__t__ ((function () {
/* 000505 */ 		var __accu0__ = last_node;
/* 000505 */ 		return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000506 */ 	}) ()) && (function () {
/* 000506 */ 		var __accu0__ = __getitem__ (last_node.chars, __sub__ (__call__ (len, null, last_node.chars), 1));
/* 000506 */ 		return __call__ (__accu0__.isspace, __accu0__);
/* 000506 */ 	}) ())) {
/* 000507 */ 		var fixed_last_node = (function () {
/* 000507 */ 			var __accu0__ = latex_walker;
/* 000509 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: (function () {
/* 000509 */ 				var __accu1__ = last_node.chars;
/* 000509 */ 				return __call__ (__accu1__.rstrip, __accu1__);
/* 000509 */ 			}) (), pos: last_node.pos, pos_end: last_node.pos_end, parsing_state: last_node.parsing_state}));
/* 000509 */ 		}) ();
/* 000515 */ 		__setitem__ (new_node_list, jlast, fixed_last_node);
/* 000515 */ 	}
/* 000517 */ 	return __call__ (mk_line_info, null, __getslice__ (new_node_list, jfirst, null, 1), indent_left);
/* 000517 */ };
/* 000521 */ export var default_quote_environments = dict ({'quote': dict ({'enabled_quote_sections': ['text', 'lines', 'attributed', 'block']}), 'address': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'lines', 'content_is_block_level': false}), 'blockquote': dict ({'enabled_quote_sections': [], 'auto_quote_section_bare_content': 'block'})});
/* 000539 */ export var FeatureQuote =  __class__ ('FeatureQuote', [Feature], {
/* 000539 */ 	__module__: __name__,
/* 000541 */ 	feature_name: 'quotation',
/* 000542 */ 	feature_title: "Quote other people's words, with attribution",
/* 000545 */ 	feature_flm_doc: '\n    Provides the \\verbcode+\\begin{quote} ... \\end{quote}+ environment to produce\n    block literary quotations.\n    ',
/* 000552 */ 	DocumentManager: null,
/* 000553 */ 	RenderManager: null,
/* 000555 */ 	get __init__ () {return __get__ (this, function (self, quote_environments) {
/* 000555 */ 		if (typeof quote_environments == 'undefined' || (quote_environments != null && quote_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000555 */ 			var quote_environments = null;
/* 000555 */ 		};
/* 000555 */ 		if (arguments.length) {
/* 000555 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000555 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000555 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000555 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000555 */ 					switch (__attrib0__) {
/* 000555 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						case 'quote_environments': var quote_environments = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 					}
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 		}
/* 000555 */ 		else {
/* 000555 */ 		}
/* 000556 */ 		__call__ (__call__ (__super__, null, FeatureQuote, '__init__'), null, self);
/* 000557 */ 		if (__t__ (quote_environments === null)) {
/* 000558 */ 			var quote_environments = default_quote_environments;
/* 000558 */ 		}
/* 000559 */ 		self.quote_environments = quote_environments;
/* 000559 */ 	});},
/* 000562 */ 	get _mk_quote_environment_spec () {return __get__ (this, function (self, qenvname, qenvspec) {
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'qenvname': var qenvname = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'qenvspec': var qenvspec = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000563 */ 		if (__t__ (__call__ (isinstance, null, qenvspec, QuoteEnvironment))) {
/* 000564 */ 			if (__t__ (__ne__ (qenvname, qenvspec.environmentname))) {
/* 000568 */ 				var __except0__ = __call__ (ValueError, null, 'Misconfigured QuoteEnvironment instance with qenvname != qenvspec.environmentname : {} != {}'.format (__call__ (repr, null, qenvname), __call__ (repr, null, qenvspec.environmentname)));
/* 000568 */ 				__except0__.__cause__ = null;
/* 000568 */ 				throw __except0__;
/* 000568 */ 			}
/* 000570 */ 			return qenvspec;
/* 000570 */ 		}
/* 000571 */ 		return __call__ (QuoteEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: qenvname}, qenvspec)));
/* 000571 */ 	});},
/* 000573 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000575 */ 		var environments = (function () {
/* 000575 */ 			var __accu0__ = [];
/* 000577 */ 			var __iterable0__ = (function () {
/* 000577 */ 				var __accu1__ = self.quote_environments;
/* 000577 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000577 */ 			}) ();
/* 000577 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000577 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000577 */ 				var qenvname = __left0__ [0];
/* 000577 */ 				var qenvspec = __left0__ [1];
/* 000577 */ 				(function () {
/* 000577 */ 					var __accu1__ = __accu0__;
/* 000576 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000576 */ 						var __accu2__ = self;
/* 000576 */ 						return __call__ (__accu2__._mk_quote_environment_spec, __accu2__, qenvname, qenvspec);
/* 000576 */ 					}) ());
/* 000576 */ 				}) ();
/* 000576 */ 			}
/* 000576 */ 			return __accu0__;
/* 000576 */ 		}) ();
/* 000580 */ 		return dict ({'environments': environments});
/* 000580 */ 	});}
/* 000580 */ });
/* 000587 */ export var FeatureClass = FeatureQuote;
/* 000006 */ 
//# sourceMappingURL=flm.feature.quote.map