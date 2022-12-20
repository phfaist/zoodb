/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:17:39
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
/* 000006 */ export {ParagraphBreakSpecials, FeatureSimplePathGraphicsResourceProvider, LLMEnvironment, ConstantValueSpecials, TextFormatMacro, LLMParsingState, ConstantValueMacro, FeatureDefTerm, FeatureEnumeration, latexnodes, FeatureHeadings, EndnoteCategory, FeatureFloats, VerbatimEnvironment, macrospec, FeatureMath, HrefHyperlinkMacro, FeatureEndnotes, FeatureRefs, FeatureExternalPrefixedCitations};
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
/* 000044 */ 		return (function () {
/* 000044 */ 			var __accu0__ = macrospec;
/* 000050 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: (function () {
/* 000050 */ 				var __accu1__ = macrospec;
/* 000050 */ 				return __call__ (__accu1__.MacroSpec, __accu1__, '');
/* 000051 */ 			}) (), unknown_environment_spec: (function () {
/* 000051 */ 				var __accu1__ = macrospec;
/* 000051 */ 				return __call__ (__accu1__.EnvironmentSpec, __accu1__, '');
/* 000052 */ 			}) (), unknown_specials_spec: (function () {
/* 000052 */ 				var __accu1__ = macrospec;
/* 000052 */ 				return __call__ (__accu1__.SpecialsSpec, __accu1__, '');
/* 000052 */ 			}) ()}))}));
/* 000052 */ 		}) ();
/* 000052 */ 	});},
/* 000056 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000056 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000056 */ 			var trigger_token = null;
/* 000056 */ 		};
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000058 */ 		return (function () {
/* 000058 */ 			var __accu0__ = macrospec;
/* 000063 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000063 */ 		}) ();
/* 000063 */ 	});}
/* 000063 */ });
/* 000079 */ export var standard_latex_context_db = function () {
/* 000079 */ 	if (arguments.length) {
/* 000079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 	}
/* 000087 */ 	var lw_context = (function () {
/* 000087 */ 		var __accu0__ = macrospec;
/* 000087 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000087 */ 	}) ();
/* 000089 */ 	(function () {
/* 000089 */ 		var __accu0__ = lw_context;
/* 000118 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (ConstantValueMacro, null, 'textbackslash', __kwargtrans__ ({value: '\\'})), __call__ (ConstantValueMacro, null, '%', __kwargtrans__ ({value: '%'})), __call__ (ConstantValueMacro, null, '#', __kwargtrans__ ({value: '#'})), __call__ (ConstantValueMacro, null, '&', __kwargtrans__ ({value: '&'})), __call__ (ConstantValueMacro, null, '$', __kwargtrans__ ({value: '$'})), __call__ (ConstantValueMacro, null, ' ', __kwargtrans__ ({value: ' '})), __call__ (ConstantValueMacro, null, '{', __kwargtrans__ ({value: '{'})), __call__ (ConstantValueMacro, null, '}', __kwargtrans__ ({value: '}'})), __call__ (TextFormatMacro, null, 'emph', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textit', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textbf', __kwargtrans__ ({text_formats: tuple (['textbf'])}))], specials: [__call__ (ConstantValueSpecials, null, '~', __kwargtrans__ ({value: '\xa0'})), __call__ (ParagraphBreakSpecials, null, '\n\n')]}));
/* 000118 */ 	}) ();
/* 000123 */ 	(function () {
/* 000123 */ 		var __accu0__ = lw_context;
/* 000130 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'href', __kwargtrans__ ({macros: [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])}))]}));
/* 000130 */ 	}) ();
/* 000136 */ 	(function () {
/* 000136 */ 		var __accu0__ = lw_context;
/* 000139 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatimtext', __kwargtrans__ ({environments: new set ([__call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'}))])}));
/* 000139 */ 	}) ();
/* 000143 */ 	return lw_context;
/* 000143 */ };
/* 000147 */ export var standard_parsing_state = function () {
/* 000147 */ 	var force_block_level = null;
/* 000147 */ 	var enable_comments = true;
/* 000147 */ 	var comment_start = '%%';
/* 000147 */ 	var extra_forbidden_characters = '';
/* 000147 */ 	var dollar_inline_math_mode = false;
/* 000147 */ 	if (arguments.length) {
/* 000147 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 				switch (__attrib0__) {
/* 000147 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 	}
/* 000147 */ 	else {
/* 000147 */ 	}
/* 000165 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000166 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000167 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000167 */ 	}
/* 000168 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000170 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000170 */ 	}
/* 000172 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000174 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000175 */ 		(function () {
/* 000175 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000175 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000175 */ 		}) ();
/* 000175 */ 	}
/* 000177 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000177 */ };
/* 000191 */ export var standard_features = function () {
/* 000191 */ 	var math = true;
/* 000191 */ 	var headings = true;
/* 000191 */ 	var heading_section_commands_by_level = null;
/* 000191 */ 	var refs = true;
/* 000191 */ 	var external_ref_resolvers = null;
/* 000191 */ 	var enumeration_environments = true;
/* 000191 */ 	var enumeration_environments_dict = null;
/* 000191 */ 	var endnotes = true;
/* 000191 */ 	var citations = true;
/* 000191 */ 	var external_citations_provider = null;
/* 000191 */ 	var eq_counter_formatter = null;
/* 000191 */ 	var footnote_counter_formatter = null;
/* 000191 */ 	var citation_counter_formatter = null;
/* 000191 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000191 */ 	var floats = true;
/* 000191 */ 	var float_types = null;
/* 000191 */ 	var defterm = true;
/* 000191 */ 	if (arguments.length) {
/* 000191 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 				switch (__attrib0__) {
/* 000191 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 	}
/* 000191 */ 	else {
/* 000191 */ 	}
/* 000212 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000213 */ 		var footnote_counter_formatter = 'alph';
/* 000213 */ 	}
/* 000214 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000215 */ 		var citation_counter_formatter = 'arabic';
/* 000215 */ 	}
/* 000217 */ 	var features = [];
/* 000219 */ 	if (__t__ (math)) {
/* 000220 */ 		(function () {
/* 000220 */ 			var __accu0__ = features;
/* 000221 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({eq_counter_formatter: eq_counter_formatter})));
/* 000221 */ 		}) ();
/* 000221 */ 	}
/* 000226 */ 	if (__t__ (enumeration_environments)) {
/* 000227 */ 		(function () {
/* 000227 */ 			var __accu0__ = features;
/* 000228 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000228 */ 		}) ();
/* 000228 */ 	}
/* 000233 */ 	if (__t__ (headings)) {
/* 000234 */ 		(function () {
/* 000234 */ 			var __accu0__ = features;
/* 000235 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000235 */ 		}) ();
/* 000235 */ 	}
/* 000240 */ 	if (__t__ (refs)) {
/* 000241 */ 		(function () {
/* 000241 */ 			var __accu0__ = features;
/* 000242 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000242 */ 		}) ();
/* 000242 */ 	}
/* 000247 */ 	if (__t__ (endnotes)) {
/* 000249 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000254 */ 		(function () {
/* 000254 */ 			var __accu0__ = features;
/* 000255 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000255 */ 		}) ();
/* 000255 */ 	}
/* 000258 */ 	if (__t__ (__t__ (citations) && external_citations_provider !== null)) {
/* 000259 */ 		(function () {
/* 000259 */ 			var __accu0__ = features;
/* 000260 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_provider: external_citations_provider, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000260 */ 		}) ();
/* 000260 */ 	}
/* 000267 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000268 */ 		(function () {
/* 000268 */ 			var __accu0__ = features;
/* 000269 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000269 */ 		}) ();
/* 000269 */ 	}
/* 000273 */ 	if (__t__ (floats)) {
/* 000274 */ 		(function () {
/* 000274 */ 			var __accu0__ = features;
/* 000275 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000275 */ 		}) ();
/* 000275 */ 	}
/* 000278 */ 	if (__t__ (defterm)) {
/* 000279 */ 		(function () {
/* 000279 */ 			var __accu0__ = features;
/* 000280 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000280 */ 		}) ();
/* 000280 */ 	}
/* 000283 */ 	return features;
/* 000283 */ };
/* 000290 */ export var LLMStandardEnvironment =  __class__ ('LLMStandardEnvironment', [LLMEnvironment], {
/* 000290 */ 	__module__: __name__,
/* 000291 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000291 */ 		if (typeof features == 'undefined' || (features != null && features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var features = null;
/* 000291 */ 		};
/* 000291 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var parsing_state = null;
/* 000291 */ 		};
/* 000291 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var latex_context = null;
/* 000291 */ 		};
/* 000291 */ 		var kwargs = dict ();
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 				delete kwargs.__kwargtrans__;
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000297 */ 		if (__t__ (latex_context === null)) {
/* 000298 */ 			var latex_context = __call__ (standard_latex_context_db, null);
/* 000298 */ 		}
/* 000299 */ 		if (__t__ (parsing_state === null)) {
/* 000300 */ 			var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ ((function () {
/* 000300 */ 				var __accu0__ = [];
/* 000301 */ 				var __iterable0__ = tuple (['enable_comments', 'comment_start']);
/* 000301 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000302 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000302 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000303 */ 						(function () {
/* 000303 */ 							var __accu1__ = __accu0__;
/* 000301 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000301 */ 								var __accu2__ = kwargs;
/* 000301 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000301 */ 							}) ()]);
/* 000301 */ 						}) ();
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 				return dict (__accu0__);
/* 000301 */ 			}) ()));
/* 000301 */ 		}
/* 000305 */ 		if (__t__ (features === null)) {
/* 000306 */ 			var features = __call__ (standard_features, null, __kwargtrans__ ((function () {
/* 000306 */ 				var __accu0__ = [];
/* 000307 */ 				var __iterable0__ = tuple (['external_citations_provider', 'external_ref_resolvers', 'footnote_counter_formatter', 'citation_counter_formatter']);
/* 000307 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000311 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000308 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000312 */ 						(function () {
/* 000312 */ 							var __accu1__ = __accu0__;
/* 000307 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000307 */ 								var __accu2__ = kwargs;
/* 000307 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000307 */ 							}) ()]);
/* 000307 */ 						}) ();
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 				return dict (__accu0__);
/* 000307 */ 			}) ()));
/* 000307 */ 		}
/* 000315 */ 		__call__ (__call__ (__super__, null, LLMStandardEnvironment, '__init__'), null, self, features, parsing_state, latex_context, __kwargtrans__ (kwargs));
/* 000315 */ 	});},
/* 000323 */ 	parsing_state_event_handler: __call__ (LLMLatexWalkerParsingStateEventHandler, null),
/* 000325 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		var msg = null;
/* 000327 */ 		var error_type_info = exception_object.error_type_info;
/* 000328 */ 		if (__t__ (error_type_info)) {
/* 000329 */ 			var what = __getitem__ (error_type_info, 'what');
/* 000330 */ 			if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000331 */ 				if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000332 */ 					var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000332 */ 				}
/* 000336 */ 				else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000337 */ 					var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000342 */ 		if (__t__ (!__t__ ((msg)))) {
/* 000343 */ 			var msg = exception_object.msg;
/* 000343 */ 		}
/* 000345 */ 		var errfmt = (function () {
/* 000345 */ 			var __accu0__ = latexnodes;
/* 000345 */ 			return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000345 */ 		}) ();
/* 000347 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000347 */ 			var __accu0__ = errfmt;
/* 000347 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000347 */ 		}) ());
/* 000349 */ 		return msg;
/* 000349 */ 	});}
/* 000349 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmstd.map