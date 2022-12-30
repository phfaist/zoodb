/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:40
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import {FeatureDefTerm} from './llm.feature.defterm.js';
/* 000032 */ import {FeatureSimplePathGraphicsResourceProvider} from './llm.feature.graphics.js';
/* 000031 */ import {FeatureFloats} from './llm.feature.floats.js';
/* 000030 */ import {FeatureHeadings} from './llm.feature.headings.js';
/* 000029 */ import {FeatureRefs} from './llm.feature.refs.js';
/* 000028 */ import {FeatureExternalPrefixedCitations} from './llm.feature.cite.js';
/* 000027 */ import {FeatureEnumeration} from './llm.feature.enumeration.js';
/* 000026 */ import {EndnoteCategory, FeatureEndnotes} from './llm.feature.endnotes.js';
/* 000025 */ import {FeatureMath} from './llm.feature.math.js';
/* 000016 */ import {ConstantValueMacro, ConstantValueSpecials, HrefHyperlinkMacro, ParagraphBreakSpecials, TextFormatMacro, VerbatimEnvironment} from './llm.llmspecinfo.js';
/* 000012 */ import {LLMEnvironment, LLMParsingState} from './llm.llmenvironment.js';
/* 000010 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000009 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {macrospec, FeatureSimplePathGraphicsResourceProvider, LLMEnvironment, TextFormatMacro, FeatureMath, LLMParsingState, HrefHyperlinkMacro, FeatureDefTerm, FeatureRefs, EndnoteCategory, VerbatimEnvironment, FeatureExternalPrefixedCitations, FeatureHeadings, FeatureFloats, FeatureEndnotes, latexnodes, ConstantValueMacro, FeatureEnumeration, ParagraphBreakSpecials, ConstantValueSpecials};
/* 000001 */ var __name__ = 'llm.llmstd';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000038 */ export var LLMLatexWalkerParsingStateEventHandler =  __class__ ('LLMLatexWalkerParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000038 */ 	__module__: __name__,
/* 000042 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000042 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var math_mode_delimiter = null;
/* 000042 */ 		};
/* 000042 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var trigger_token = null;
/* 000042 */ 		};
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000047 */ 		// pass;
/* 000052 */ 		return (function () {
/* 000052 */ 			var __accu0__ = macrospec;
/* 000055 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: (function () {
/* 000055 */ 				var __accu1__ = macrospec;
/* 000055 */ 				return __call__ (__accu1__.MacroSpec, __accu1__, '');
/* 000056 */ 			}) (), unknown_environment_spec: (function () {
/* 000056 */ 				var __accu1__ = macrospec;
/* 000056 */ 				return __call__ (__accu1__.EnvironmentSpec, __accu1__, '');
/* 000057 */ 			}) (), unknown_specials_spec: (function () {
/* 000057 */ 				var __accu1__ = macrospec;
/* 000057 */ 				return __call__ (__accu1__.SpecialsSpec, __accu1__, '');
/* 000057 */ 			}) ()}))}));
/* 000057 */ 		}) ();
/* 000057 */ 	});},
/* 000061 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000061 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000061 */ 			var trigger_token = null;
/* 000061 */ 		};
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000063 */ 		return (function () {
/* 000063 */ 			var __accu0__ = macrospec;
/* 000068 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000068 */ 		}) ();
/* 000068 */ 	});}
/* 000068 */ });
/* 000084 */ export var standard_latex_context_db = function () {
/* 000084 */ 	if (arguments.length) {
/* 000084 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 	}
/* 000084 */ 	else {
/* 000084 */ 	}
/* 000092 */ 	var lw_context = (function () {
/* 000092 */ 		var __accu0__ = macrospec;
/* 000092 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000092 */ 	}) ();
/* 000094 */ 	(function () {
/* 000094 */ 		var __accu0__ = lw_context;
/* 000123 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (ConstantValueMacro, null, 'textbackslash', __kwargtrans__ ({value: '\\'})), __call__ (ConstantValueMacro, null, '%', __kwargtrans__ ({value: '%'})), __call__ (ConstantValueMacro, null, '#', __kwargtrans__ ({value: '#'})), __call__ (ConstantValueMacro, null, '&', __kwargtrans__ ({value: '&'})), __call__ (ConstantValueMacro, null, '$', __kwargtrans__ ({value: '$'})), __call__ (ConstantValueMacro, null, ' ', __kwargtrans__ ({value: ' '})), __call__ (ConstantValueMacro, null, '{', __kwargtrans__ ({value: '{'})), __call__ (ConstantValueMacro, null, '}', __kwargtrans__ ({value: '}'})), __call__ (TextFormatMacro, null, 'emph', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textit', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textbf', __kwargtrans__ ({text_formats: tuple (['textbf'])}))], specials: [__call__ (ConstantValueSpecials, null, '~', __kwargtrans__ ({value: '\xa0'})), __call__ (ParagraphBreakSpecials, null, '\n\n')]}));
/* 000123 */ 	}) ();
/* 000128 */ 	(function () {
/* 000128 */ 		var __accu0__ = lw_context;
/* 000135 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'href', __kwargtrans__ ({macros: [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])}))]}));
/* 000135 */ 	}) ();
/* 000141 */ 	(function () {
/* 000141 */ 		var __accu0__ = lw_context;
/* 000144 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatimtext', __kwargtrans__ ({environments: new set ([__call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'}))])}));
/* 000144 */ 	}) ();
/* 000148 */ 	return lw_context;
/* 000148 */ };
/* 000152 */ export var standard_parsing_state = function () {
/* 000152 */ 	var force_block_level = null;
/* 000152 */ 	var enable_comments = true;
/* 000152 */ 	var comment_start = '%%';
/* 000152 */ 	var extra_forbidden_characters = '';
/* 000152 */ 	var dollar_inline_math_mode = false;
/* 000152 */ 	if (arguments.length) {
/* 000152 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 				switch (__attrib0__) {
/* 000152 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 	}
/* 000152 */ 	else {
/* 000152 */ 	}
/* 000170 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000171 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000172 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000172 */ 	}
/* 000173 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000175 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000175 */ 	}
/* 000177 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000179 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000180 */ 		(function () {
/* 000180 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000180 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000180 */ 		}) ();
/* 000180 */ 	}
/* 000182 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000182 */ };
/* 000196 */ export var standard_features = function () {
/* 000196 */ 	var math = true;
/* 000196 */ 	var headings = true;
/* 000196 */ 	var heading_section_commands_by_level = null;
/* 000196 */ 	var refs = true;
/* 000196 */ 	var external_ref_resolvers = null;
/* 000196 */ 	var enumeration_environments = true;
/* 000196 */ 	var enumeration_environments_dict = null;
/* 000196 */ 	var endnotes = true;
/* 000196 */ 	var citations = true;
/* 000196 */ 	var external_citations_providers = null;
/* 000196 */ 	var eq_counter_formatter = null;
/* 000196 */ 	var footnote_counter_formatter = null;
/* 000196 */ 	var citation_counter_formatter = null;
/* 000196 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000196 */ 	var floats = true;
/* 000196 */ 	var float_types = null;
/* 000196 */ 	var defterm = true;
/* 000196 */ 	if (arguments.length) {
/* 000196 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 				switch (__attrib0__) {
/* 000196 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 	}
/* 000196 */ 	else {
/* 000196 */ 	}
/* 000217 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000218 */ 		var footnote_counter_formatter = 'alph';
/* 000218 */ 	}
/* 000219 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000220 */ 		var citation_counter_formatter = 'arabic';
/* 000220 */ 	}
/* 000222 */ 	var features = [];
/* 000224 */ 	if (__t__ (math)) {
/* 000225 */ 		(function () {
/* 000225 */ 			var __accu0__ = features;
/* 000226 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({eq_counter_formatter: eq_counter_formatter})));
/* 000226 */ 		}) ();
/* 000226 */ 	}
/* 000231 */ 	if (__t__ (enumeration_environments)) {
/* 000232 */ 		(function () {
/* 000232 */ 			var __accu0__ = features;
/* 000233 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000233 */ 		}) ();
/* 000233 */ 	}
/* 000238 */ 	if (__t__ (headings)) {
/* 000239 */ 		(function () {
/* 000239 */ 			var __accu0__ = features;
/* 000240 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000240 */ 		}) ();
/* 000240 */ 	}
/* 000245 */ 	if (__t__ (refs)) {
/* 000246 */ 		(function () {
/* 000246 */ 			var __accu0__ = features;
/* 000247 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000247 */ 		}) ();
/* 000247 */ 	}
/* 000252 */ 	if (__t__ (endnotes)) {
/* 000254 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000259 */ 		(function () {
/* 000259 */ 			var __accu0__ = features;
/* 000260 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000260 */ 		}) ();
/* 000260 */ 	}
/* 000263 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000264 */ 		(function () {
/* 000264 */ 			var __accu0__ = features;
/* 000265 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000265 */ 		}) ();
/* 000265 */ 	}
/* 000272 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000273 */ 		(function () {
/* 000273 */ 			var __accu0__ = features;
/* 000274 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000274 */ 		}) ();
/* 000274 */ 	}
/* 000278 */ 	if (__t__ (floats)) {
/* 000279 */ 		(function () {
/* 000279 */ 			var __accu0__ = features;
/* 000280 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000280 */ 		}) ();
/* 000280 */ 	}
/* 000283 */ 	if (__t__ (defterm)) {
/* 000284 */ 		(function () {
/* 000284 */ 			var __accu0__ = features;
/* 000285 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000285 */ 		}) ();
/* 000285 */ 	}
/* 000288 */ 	return features;
/* 000288 */ };
/* 000295 */ export var LLMStandardEnvironment =  __class__ ('LLMStandardEnvironment', [LLMEnvironment], {
/* 000295 */ 	__module__: __name__,
/* 000296 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000296 */ 		if (typeof features == 'undefined' || (features != null && features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000296 */ 			var features = null;
/* 000296 */ 		};
/* 000296 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000296 */ 			var parsing_state = null;
/* 000296 */ 		};
/* 000296 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000296 */ 			var latex_context = null;
/* 000296 */ 		};
/* 000296 */ 		var kwargs = dict ();
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 				delete kwargs.__kwargtrans__;
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000302 */ 		if (__t__ (latex_context === null)) {
/* 000303 */ 			var latex_context = __call__ (standard_latex_context_db, null);
/* 000303 */ 		}
/* 000304 */ 		if (__t__ (parsing_state === null)) {
/* 000305 */ 			var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ ((function () {
/* 000305 */ 				var __accu0__ = [];
/* 000306 */ 				var __iterable0__ = tuple (['enable_comments', 'comment_start']);
/* 000306 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000307 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000307 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000308 */ 						(function () {
/* 000308 */ 							var __accu1__ = __accu0__;
/* 000306 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000306 */ 								var __accu2__ = kwargs;
/* 000306 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000306 */ 							}) ()]);
/* 000306 */ 						}) ();
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 				return dict (__accu0__);
/* 000306 */ 			}) ()));
/* 000306 */ 		}
/* 000310 */ 		if (__t__ (features === null)) {
/* 000311 */ 			var features = __call__ (standard_features, null, __kwargtrans__ ((function () {
/* 000311 */ 				var __accu0__ = [];
/* 000312 */ 				var __iterable0__ = tuple (['external_citations_providers', 'external_ref_resolvers', 'footnote_counter_formatter', 'citation_counter_formatter']);
/* 000312 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000316 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000313 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000317 */ 						(function () {
/* 000317 */ 							var __accu1__ = __accu0__;
/* 000312 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000312 */ 								var __accu2__ = kwargs;
/* 000312 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000312 */ 							}) ()]);
/* 000312 */ 						}) ();
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 				return dict (__accu0__);
/* 000312 */ 			}) ()));
/* 000312 */ 		}
/* 000320 */ 		__call__ (__call__ (__super__, null, LLMStandardEnvironment, '__init__'), null, self, features, parsing_state, latex_context, __kwargtrans__ (kwargs));
/* 000320 */ 	});},
/* 000328 */ 	parsing_state_event_handler: __call__ (LLMLatexWalkerParsingStateEventHandler, null),
/* 000330 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000331 */ 		var msg = null;
/* 000332 */ 		var error_type_info = exception_object.error_type_info;
/* 000333 */ 		if (__t__ (error_type_info)) {
/* 000334 */ 			var what = __getitem__ (error_type_info, 'what');
/* 000335 */ 			if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000336 */ 				if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000337 */ 					var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000337 */ 				}
/* 000341 */ 				else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000342 */ 					var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000347 */ 		if (__t__ (!__t__ ((msg)))) {
/* 000348 */ 			var msg = exception_object.msg;
/* 000348 */ 		}
/* 000350 */ 		var errfmt = (function () {
/* 000350 */ 			var __accu0__ = latexnodes;
/* 000350 */ 			return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000350 */ 		}) ();
/* 000352 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000352 */ 			var __accu0__ = errfmt;
/* 000352 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000352 */ 		}) ());
/* 000354 */ 		return msg;
/* 000354 */ 	});}
/* 000354 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmstd.map