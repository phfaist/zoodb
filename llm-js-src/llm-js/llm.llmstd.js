/* 000001 */ // Transcrypt'ed from Python, 2022-09-09 15:10:07
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000034 */ import {FeatureDefTerm} from './llm.feature.defterm.js';
/* 000033 */ import {FeatureSimplePathGraphicsResourceProvider} from './llm.feature.graphics.js';
/* 000032 */ import {FeatureFloatsIncludeGraphicsOnly} from './llm.feature.floats.js';
/* 000031 */ import {FeatureHeadings} from './llm.feature.headings.js';
/* 000030 */ import {FeatureRefs} from './llm.feature.refs.js';
/* 000029 */ import {FeatureExternalPrefixedCitations} from './llm.feature.cite.js';
/* 000028 */ import {FeatureEnumeration} from './llm.feature.enumeration.js';
/* 000027 */ import {EndnoteCategory, FeatureEndnotes} from './llm.feature.endnotes.js';
/* 000025 */ import {MathEnvironment, MathEqrefViaMathContent} from './llm.math.js';
/* 000016 */ import {ConstantValueMacro, ConstantValueSpecials, HrefHyperlinkMacro, ParagraphBreakSpecials, TextFormatMacro, VerbatimEnvironment} from './llm.llmspecinfo.js';
/* 000012 */ import {LLMEnvironment, LLMParsingState} from './llm.llmenvironment.js';
/* 000010 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FeatureSimplePathGraphicsResourceProvider, FeatureEnumeration, latexnodes, FeatureRefs, FeatureEndnotes, ConstantValueMacro, LLMEnvironment, FeatureDefTerm, ConstantValueSpecials, FeatureHeadings, TextFormatMacro, FeatureFloatsIncludeGraphicsOnly, ParagraphBreakSpecials, VerbatimEnvironment, macrospec, MathEnvironment, LLMParsingState, HrefHyperlinkMacro, EndnoteCategory, MathEqrefViaMathContent, FeatureExternalPrefixedCitations};
/* 000001 */ var __name__ = 'llm.llmstd';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000039 */ export var LLMLatexWalkerParsingStateEventHandler =  __class__ ('LLMLatexWalkerParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000039 */ 	__module__: __name__,
/* 000043 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000043 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000043 */ 			var math_mode_delimiter = null;
/* 000043 */ 		};
/* 000043 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000043 */ 			var trigger_token = null;
/* 000043 */ 		};
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000045 */ 		return (function () {
/* 000045 */ 			var __accu0__ = macrospec;
/* 000051 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: (function () {
/* 000051 */ 				var __accu1__ = macrospec;
/* 000051 */ 				return __call__ (__accu1__.MacroSpec, __accu1__, '');
/* 000052 */ 			}) (), unknown_environment_spec: (function () {
/* 000052 */ 				var __accu1__ = macrospec;
/* 000052 */ 				return __call__ (__accu1__.EnvironmentSpec, __accu1__, '');
/* 000053 */ 			}) (), unknown_specials_spec: (function () {
/* 000053 */ 				var __accu1__ = macrospec;
/* 000053 */ 				return __call__ (__accu1__.SpecialsSpec, __accu1__, '');
/* 000053 */ 			}) ()}))}));
/* 000053 */ 		}) ();
/* 000053 */ 	});},
/* 000057 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000057 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 			var trigger_token = null;
/* 000057 */ 		};
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000059 */ 		return (function () {
/* 000059 */ 			var __accu0__ = macrospec;
/* 000064 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000064 */ 		}) ();
/* 000064 */ 	});}
/* 000064 */ });
/* 000073 */ export var _parsing_state_event_handler = __call__ (LLMLatexWalkerParsingStateEventHandler, null);
/* 000080 */ export var standard_latex_context_db = function () {
/* 000080 */ 	if (arguments.length) {
/* 000080 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 	}
/* 000080 */ 	else {
/* 000080 */ 	}
/* 000088 */ 	var lw_context = (function () {
/* 000088 */ 		var __accu0__ = macrospec;
/* 000088 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000088 */ 	}) ();
/* 000090 */ 	(function () {
/* 000090 */ 		var __accu0__ = lw_context;
/* 000119 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (ConstantValueMacro, null, 'textbackslash', __kwargtrans__ ({value: '\\'})), __call__ (ConstantValueMacro, null, '%', __kwargtrans__ ({value: '%'})), __call__ (ConstantValueMacro, null, '#', __kwargtrans__ ({value: '#'})), __call__ (ConstantValueMacro, null, '&', __kwargtrans__ ({value: '&'})), __call__ (ConstantValueMacro, null, '$', __kwargtrans__ ({value: '$'})), __call__ (ConstantValueMacro, null, ' ', __kwargtrans__ ({value: ' '})), __call__ (ConstantValueMacro, null, '{', __kwargtrans__ ({value: '{'})), __call__ (ConstantValueMacro, null, '}', __kwargtrans__ ({value: '}'})), __call__ (TextFormatMacro, null, 'emph', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textit', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textbf', __kwargtrans__ ({text_formats: tuple (['textbf'])}))], specials: [__call__ (ConstantValueSpecials, null, '~', __kwargtrans__ ({value: '\xa0'})), __call__ (ParagraphBreakSpecials, null, '\n\n')]}));
/* 000119 */ 	}) ();
/* 000124 */ 	(function () {
/* 000124 */ 		var __accu0__ = lw_context;
/* 000124 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'math-environments', __kwargtrans__ ({environments: (function () {
/* 000124 */ 			var __accu1__ = [];
/* 000126 */ 			var __iterable0__ = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*', 'split', 'split*']);
/* 000126 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000138 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000130 */ 				(function () {
/* 000130 */ 					var __accu2__ = __accu1__;
/* 000127 */ 					return __call__ (__accu2__.append, __accu2__, __call__ (MathEnvironment, null, math_environment_name));
/* 000127 */ 				}) ();
/* 000127 */ 			}
/* 000127 */ 			return __accu1__;
/* 000127 */ 		}) ()}));
/* 000127 */ 	}) ();
/* 000142 */ 	(function () {
/* 000142 */ 		var __accu0__ = lw_context;
/* 000145 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'math-eqref-via-math-content', __kwargtrans__ ({macros: [__call__ (MathEqrefViaMathContent, null, __kwargtrans__ ({macroname: 'eqref'}))]}));
/* 000145 */ 	}) ();
/* 000150 */ 	(function () {
/* 000150 */ 		var __accu0__ = lw_context;
/* 000157 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'href', __kwargtrans__ ({macros: [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])}))]}));
/* 000157 */ 	}) ();
/* 000163 */ 	(function () {
/* 000163 */ 		var __accu0__ = lw_context;
/* 000166 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatimtext', __kwargtrans__ ({environments: new set ([__call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'}))])}));
/* 000166 */ 	}) ();
/* 000170 */ 	return lw_context;
/* 000170 */ };
/* 000174 */ export var standard_parsing_state = function () {
/* 000174 */ 	var force_block_level = null;
/* 000174 */ 	var enable_comments = false;
/* 000174 */ 	var extra_forbidden_characters = '';
/* 000174 */ 	var dollar_inline_math_mode = false;
/* 000174 */ 	if (arguments.length) {
/* 000174 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 				switch (__attrib0__) {
/* 000174 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 	}
/* 000174 */ 	else {
/* 000174 */ 	}
/* 000191 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000192 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000193 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000193 */ 	}
/* 000194 */ 	if (__t__ (__t__ (!__t__ ((enable_comments))) && !__in__ ('%', forbidden_characters))) {
/* 000195 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000195 */ 	}
/* 000197 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000199 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000200 */ 		(function () {
/* 000200 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000200 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000200 */ 		}) ();
/* 000200 */ 	}
/* 000202 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000202 */ };
/* 000215 */ export var standard_features = function () {
/* 000215 */ 	var headings = true;
/* 000215 */ 	var heading_section_commands_by_level = null;
/* 000215 */ 	var refs = true;
/* 000215 */ 	var external_ref_resolvers = null;
/* 000215 */ 	var enumeration_environments = true;
/* 000215 */ 	var enumeration_environments_dict = null;
/* 000215 */ 	var endnotes = true;
/* 000215 */ 	var citations = true;
/* 000215 */ 	var external_citations_provider = null;
/* 000215 */ 	var footnote_counter_formatter = null;
/* 000215 */ 	var citation_counter_formatter = null;
/* 000215 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000215 */ 	var floats = true;
/* 000215 */ 	var float_types = null;
/* 000215 */ 	var defterm = true;
/* 000215 */ 	if (arguments.length) {
/* 000215 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 				switch (__attrib0__) {
/* 000215 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 	}
/* 000215 */ 	else {
/* 000215 */ 	}
/* 000234 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000235 */ 		var footnote_counter_formatter = 'alph';
/* 000235 */ 	}
/* 000236 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000237 */ 		var citation_counter_formatter = 'arabic';
/* 000237 */ 	}
/* 000239 */ 	var features = [];
/* 000240 */ 	if (__t__ (enumeration_environments)) {
/* 000241 */ 		(function () {
/* 000241 */ 			var __accu0__ = features;
/* 000242 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000242 */ 		}) ();
/* 000242 */ 	}
/* 000246 */ 	if (__t__ (headings)) {
/* 000247 */ 		(function () {
/* 000247 */ 			var __accu0__ = features;
/* 000248 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000248 */ 		}) ();
/* 000248 */ 	}
/* 000252 */ 	if (__t__ (refs)) {
/* 000253 */ 		(function () {
/* 000253 */ 			var __accu0__ = features;
/* 000254 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000254 */ 		}) ();
/* 000254 */ 	}
/* 000258 */ 	if (__t__ (endnotes)) {
/* 000260 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000265 */ 		(function () {
/* 000265 */ 			var __accu0__ = features;
/* 000266 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000266 */ 		}) ();
/* 000266 */ 	}
/* 000268 */ 	if (__t__ (__t__ (citations) && external_citations_provider !== null)) {
/* 000269 */ 		(function () {
/* 000269 */ 			var __accu0__ = features;
/* 000270 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_provider: external_citations_provider, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000270 */ 		}) ();
/* 000270 */ 	}
/* 000276 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000277 */ 		(function () {
/* 000277 */ 			var __accu0__ = features;
/* 000278 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000278 */ 		}) ();
/* 000278 */ 	}
/* 000281 */ 	if (__t__ (floats)) {
/* 000282 */ 		(function () {
/* 000282 */ 			var __accu0__ = features;
/* 000283 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloatsIncludeGraphicsOnly, null, __kwargtrans__ ({float_types: float_types})));
/* 000283 */ 		}) ();
/* 000283 */ 	}
/* 000285 */ 	if (__t__ (defterm)) {
/* 000286 */ 		(function () {
/* 000286 */ 			var __accu0__ = features;
/* 000287 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000287 */ 		}) ();
/* 000287 */ 	}
/* 000289 */ 	return features;
/* 000289 */ };
/* 000296 */ export var LLMStandardEnvironment =  __class__ ('LLMStandardEnvironment', [LLMEnvironment], {
/* 000296 */ 	__module__: __name__,
/* 000297 */ 	get __init__ () {return __get__ (this, function (self, latex_context, parsing_state, features) {
/* 000297 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var latex_context = null;
/* 000297 */ 		};
/* 000297 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var parsing_state = null;
/* 000297 */ 		};
/* 000297 */ 		if (typeof features == 'undefined' || (features != null && features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000297 */ 			var features = null;
/* 000297 */ 		};
/* 000297 */ 		var enable_comments = null;
/* 000297 */ 		var external_citations_provider = null;
/* 000297 */ 		var external_ref_resolvers = null;
/* 000297 */ 		var footnote_counter_formatter = null;
/* 000297 */ 		var citation_counter_formatter = null;
/* 000297 */ 		var kwargs = dict ();
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 				delete kwargs.__kwargtrans__;
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000309 */ 		if (__t__ (latex_context === null)) {
/* 000310 */ 			var latex_context = __call__ (standard_latex_context_db, null);
/* 000310 */ 		}
/* 000311 */ 		if (__t__ (parsing_state === null)) {
/* 000312 */ 			var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ ({enable_comments: enable_comments}));
/* 000312 */ 		}
/* 000315 */ 		if (__t__ (features === null)) {
/* 000316 */ 			var features = __call__ (standard_features, null, __kwargtrans__ ({external_citations_provider: external_citations_provider, external_ref_resolvers: external_ref_resolvers, footnote_counter_formatter: footnote_counter_formatter, citation_counter_formatter: citation_counter_formatter}));
/* 000316 */ 		}
/* 000323 */ 		__call__ (__call__ (__super__, null, LLMStandardEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({latex_context: latex_context, parsing_state: parsing_state, features: features}, kwargs)));
/* 000323 */ 	});},
/* 000331 */ 	parsing_state_event_handler: __call__ (LLMLatexWalkerParsingStateEventHandler, null),
/* 000333 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000334 */ 		var msg = null;
/* 000335 */ 		var error_type_info = exception_object.error_type_info;
/* 000336 */ 		if (__t__ (error_type_info)) {
/* 000337 */ 			var what = __getitem__ (error_type_info, 'what');
/* 000338 */ 			if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000339 */ 				if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000340 */ 					var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000340 */ 				}
/* 000344 */ 				else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000345 */ 					var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000350 */ 		if (__t__ (!__t__ ((msg)))) {
/* 000351 */ 			var msg = exception_object.msg;
/* 000351 */ 		}
/* 000353 */ 		var errfmt = (function () {
/* 000353 */ 			var __accu0__ = latexnodes;
/* 000353 */ 			return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000353 */ 		}) ();
/* 000355 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000355 */ 			var __accu0__ = errfmt;
/* 000355 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000355 */ 		}) ());
/* 000357 */ 		return msg;
/* 000357 */ 	});}
/* 000357 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmstd.map