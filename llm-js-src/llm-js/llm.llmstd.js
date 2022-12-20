/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:36
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
/* 000006 */ export {FeatureFloats, VerbatimEnvironment, EndnoteCategory, FeatureSimplePathGraphicsResourceProvider, FeatureEnumeration, ConstantValueMacro, FeatureExternalPrefixedCitations, HrefHyperlinkMacro, FeatureMath, macrospec, latexnodes, FeatureHeadings, LLMEnvironment, ConstantValueSpecials, FeatureRefs, ParagraphBreakSpecials, FeatureEndnotes, LLMParsingState, FeatureDefTerm, TextFormatMacro};
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
/* 000047 */ 		(function () {
/* 000047 */ 			var __accu0__ = logger;
/* 000047 */ 			return __call__ (__accu0__.debug, __accu0__, 'LLMWalkerEventsParsingStateDeltasProvider.enter_math_mode ! math_mode_delimiter=%r, trigger_token=%r, set_attributes=%r', math_mode_delimiter, trigger_token, set_attributes);
/* 000047 */ 		}) ();
/* 000050 */ 		return (function () {
/* 000050 */ 			var __accu0__ = macrospec;
/* 000053 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: (function () {
/* 000053 */ 				var __accu1__ = macrospec;
/* 000053 */ 				return __call__ (__accu1__.MacroSpec, __accu1__, '');
/* 000054 */ 			}) (), unknown_environment_spec: (function () {
/* 000054 */ 				var __accu1__ = macrospec;
/* 000054 */ 				return __call__ (__accu1__.EnvironmentSpec, __accu1__, '');
/* 000055 */ 			}) (), unknown_specials_spec: (function () {
/* 000055 */ 				var __accu1__ = macrospec;
/* 000055 */ 				return __call__ (__accu1__.SpecialsSpec, __accu1__, '');
/* 000055 */ 			}) ()}))}));
/* 000055 */ 		}) ();
/* 000055 */ 	});},
/* 000059 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000059 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000059 */ 			var trigger_token = null;
/* 000059 */ 		};
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000061 */ 		return (function () {
/* 000061 */ 			var __accu0__ = macrospec;
/* 000066 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000066 */ 		}) ();
/* 000066 */ 	});}
/* 000066 */ });
/* 000082 */ export var standard_latex_context_db = function () {
/* 000082 */ 	if (arguments.length) {
/* 000082 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 	}
/* 000082 */ 	else {
/* 000082 */ 	}
/* 000090 */ 	var lw_context = (function () {
/* 000090 */ 		var __accu0__ = macrospec;
/* 000090 */ 		return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000090 */ 	}) ();
/* 000092 */ 	(function () {
/* 000092 */ 		var __accu0__ = lw_context;
/* 000121 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'base-formatting', __kwargtrans__ ({macros: [__call__ (ConstantValueMacro, null, 'textbackslash', __kwargtrans__ ({value: '\\'})), __call__ (ConstantValueMacro, null, '%', __kwargtrans__ ({value: '%'})), __call__ (ConstantValueMacro, null, '#', __kwargtrans__ ({value: '#'})), __call__ (ConstantValueMacro, null, '&', __kwargtrans__ ({value: '&'})), __call__ (ConstantValueMacro, null, '$', __kwargtrans__ ({value: '$'})), __call__ (ConstantValueMacro, null, ' ', __kwargtrans__ ({value: ' '})), __call__ (ConstantValueMacro, null, '{', __kwargtrans__ ({value: '{'})), __call__ (ConstantValueMacro, null, '}', __kwargtrans__ ({value: '}'})), __call__ (TextFormatMacro, null, 'emph', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textit', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textbf', __kwargtrans__ ({text_formats: tuple (['textbf'])}))], specials: [__call__ (ConstantValueSpecials, null, '~', __kwargtrans__ ({value: '\xa0'})), __call__ (ParagraphBreakSpecials, null, '\n\n')]}));
/* 000121 */ 	}) ();
/* 000126 */ 	(function () {
/* 000126 */ 		var __accu0__ = lw_context;
/* 000133 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'href', __kwargtrans__ ({macros: [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])}))]}));
/* 000133 */ 	}) ();
/* 000139 */ 	(function () {
/* 000139 */ 		var __accu0__ = lw_context;
/* 000142 */ 		return __call__ (__accu0__.add_context_category, __accu0__, 'verbatimtext', __kwargtrans__ ({environments: new set ([__call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'}))])}));
/* 000142 */ 	}) ();
/* 000146 */ 	return lw_context;
/* 000146 */ };
/* 000150 */ export var standard_parsing_state = function () {
/* 000150 */ 	var force_block_level = null;
/* 000150 */ 	var enable_comments = true;
/* 000150 */ 	var comment_start = '%%';
/* 000150 */ 	var extra_forbidden_characters = '';
/* 000150 */ 	var dollar_inline_math_mode = false;
/* 000150 */ 	if (arguments.length) {
/* 000150 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 				switch (__attrib0__) {
/* 000150 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 	}
/* 000150 */ 	else {
/* 000150 */ 	}
/* 000168 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000169 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000170 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000170 */ 	}
/* 000171 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000173 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000173 */ 	}
/* 000175 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000177 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000178 */ 		(function () {
/* 000178 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000178 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000178 */ 		}) ();
/* 000178 */ 	}
/* 000180 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000180 */ };
/* 000194 */ export var standard_features = function () {
/* 000194 */ 	var math = true;
/* 000194 */ 	var headings = true;
/* 000194 */ 	var heading_section_commands_by_level = null;
/* 000194 */ 	var refs = true;
/* 000194 */ 	var external_ref_resolvers = null;
/* 000194 */ 	var enumeration_environments = true;
/* 000194 */ 	var enumeration_environments_dict = null;
/* 000194 */ 	var endnotes = true;
/* 000194 */ 	var citations = true;
/* 000194 */ 	var external_citations_provider = null;
/* 000194 */ 	var eq_counter_formatter = null;
/* 000194 */ 	var footnote_counter_formatter = null;
/* 000194 */ 	var citation_counter_formatter = null;
/* 000194 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000194 */ 	var floats = true;
/* 000194 */ 	var float_types = null;
/* 000194 */ 	var defterm = true;
/* 000194 */ 	if (arguments.length) {
/* 000194 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 				switch (__attrib0__) {
/* 000194 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 	}
/* 000194 */ 	else {
/* 000194 */ 	}
/* 000215 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000216 */ 		var footnote_counter_formatter = 'alph';
/* 000216 */ 	}
/* 000217 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000218 */ 		var citation_counter_formatter = 'arabic';
/* 000218 */ 	}
/* 000220 */ 	var features = [];
/* 000222 */ 	if (__t__ (math)) {
/* 000223 */ 		(function () {
/* 000223 */ 			var __accu0__ = features;
/* 000224 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({eq_counter_formatter: eq_counter_formatter})));
/* 000224 */ 		}) ();
/* 000224 */ 	}
/* 000229 */ 	if (__t__ (enumeration_environments)) {
/* 000230 */ 		(function () {
/* 000230 */ 			var __accu0__ = features;
/* 000231 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000231 */ 		}) ();
/* 000231 */ 	}
/* 000236 */ 	if (__t__ (headings)) {
/* 000237 */ 		(function () {
/* 000237 */ 			var __accu0__ = features;
/* 000238 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000238 */ 		}) ();
/* 000238 */ 	}
/* 000243 */ 	if (__t__ (refs)) {
/* 000244 */ 		(function () {
/* 000244 */ 			var __accu0__ = features;
/* 000245 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000245 */ 		}) ();
/* 000245 */ 	}
/* 000250 */ 	if (__t__ (endnotes)) {
/* 000252 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000257 */ 		(function () {
/* 000257 */ 			var __accu0__ = features;
/* 000258 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000258 */ 		}) ();
/* 000258 */ 	}
/* 000261 */ 	if (__t__ (__t__ (citations) && external_citations_provider !== null)) {
/* 000262 */ 		(function () {
/* 000262 */ 			var __accu0__ = features;
/* 000263 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_provider: external_citations_provider, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000263 */ 		}) ();
/* 000263 */ 	}
/* 000270 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000271 */ 		(function () {
/* 000271 */ 			var __accu0__ = features;
/* 000272 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000272 */ 		}) ();
/* 000272 */ 	}
/* 000276 */ 	if (__t__ (floats)) {
/* 000277 */ 		(function () {
/* 000277 */ 			var __accu0__ = features;
/* 000278 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000278 */ 		}) ();
/* 000278 */ 	}
/* 000281 */ 	if (__t__ (defterm)) {
/* 000282 */ 		(function () {
/* 000282 */ 			var __accu0__ = features;
/* 000283 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000283 */ 		}) ();
/* 000283 */ 	}
/* 000286 */ 	return features;
/* 000286 */ };
/* 000293 */ export var LLMStandardEnvironment =  __class__ ('LLMStandardEnvironment', [LLMEnvironment], {
/* 000293 */ 	__module__: __name__,
/* 000294 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000294 */ 		if (typeof features == 'undefined' || (features != null && features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000294 */ 			var features = null;
/* 000294 */ 		};
/* 000294 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000294 */ 			var parsing_state = null;
/* 000294 */ 		};
/* 000294 */ 		if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000294 */ 			var latex_context = null;
/* 000294 */ 		};
/* 000294 */ 		var kwargs = dict ();
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				delete kwargs.__kwargtrans__;
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000300 */ 		if (__t__ (latex_context === null)) {
/* 000301 */ 			var latex_context = __call__ (standard_latex_context_db, null);
/* 000301 */ 		}
/* 000302 */ 		if (__t__ (parsing_state === null)) {
/* 000303 */ 			var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ ((function () {
/* 000303 */ 				var __accu0__ = [];
/* 000304 */ 				var __iterable0__ = tuple (['enable_comments', 'comment_start']);
/* 000304 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000305 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000305 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000306 */ 						(function () {
/* 000306 */ 							var __accu1__ = __accu0__;
/* 000304 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000304 */ 								var __accu2__ = kwargs;
/* 000304 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000304 */ 							}) ()]);
/* 000304 */ 						}) ();
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 				return dict (__accu0__);
/* 000304 */ 			}) ()));
/* 000304 */ 		}
/* 000308 */ 		if (__t__ (features === null)) {
/* 000309 */ 			var features = __call__ (standard_features, null, __kwargtrans__ ((function () {
/* 000309 */ 				var __accu0__ = [];
/* 000310 */ 				var __iterable0__ = tuple (['external_citations_provider', 'external_ref_resolvers', 'footnote_counter_formatter', 'citation_counter_formatter']);
/* 000310 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000311 */ 					if (__t__ (__in__ (k, kwargs))) {
/* 000315 */ 						(function () {
/* 000315 */ 							var __accu1__ = __accu0__;
/* 000310 */ 							return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000310 */ 								var __accu2__ = kwargs;
/* 000310 */ 								return __call__ (__accu2__.py_pop, __accu2__, k);
/* 000310 */ 							}) ()]);
/* 000310 */ 						}) ();
/* 000310 */ 					}
/* 000310 */ 				}
/* 000310 */ 				return dict (__accu0__);
/* 000310 */ 			}) ()));
/* 000310 */ 		}
/* 000318 */ 		__call__ (__call__ (__super__, null, LLMStandardEnvironment, '__init__'), null, self, features, parsing_state, latex_context, __kwargtrans__ (kwargs));
/* 000318 */ 	});},
/* 000326 */ 	parsing_state_event_handler: __call__ (LLMLatexWalkerParsingStateEventHandler, null),
/* 000328 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000329 */ 		var msg = null;
/* 000330 */ 		var error_type_info = exception_object.error_type_info;
/* 000331 */ 		if (__t__ (error_type_info)) {
/* 000332 */ 			var what = __getitem__ (error_type_info, 'what');
/* 000333 */ 			if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000334 */ 				if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000335 */ 					var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000335 */ 				}
/* 000339 */ 				else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000340 */ 					var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000345 */ 		if (__t__ (!__t__ ((msg)))) {
/* 000346 */ 			var msg = exception_object.msg;
/* 000346 */ 		}
/* 000348 */ 		var errfmt = (function () {
/* 000348 */ 			var __accu0__ = latexnodes;
/* 000348 */ 			return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000348 */ 		}) ();
/* 000350 */ 		var msg = __call__ (__iadd__, null, msg, (function () {
/* 000350 */ 			var __accu0__ = errfmt;
/* 000350 */ 			return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000350 */ 		}) ());
/* 000352 */ 		return msg;
/* 000352 */ 	});}
/* 000352 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmstd.map