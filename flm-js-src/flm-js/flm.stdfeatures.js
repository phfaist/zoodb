/* 000001 */ // Transcrypt'ed from Python, 2026-02-15 15:34:36
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000027 */ import {FeatureTheorems} from './flm.feature.theorems.js';
/* 000025 */ import {FeatureQuote} from './flm.feature.quote.js';
/* 000024 */ import {FeatureSubstMacros} from './flm.feature.substmacros.js';
/* 000023 */ import {FeatureDefTerm} from './flm.feature.defterm.js';
/* 000022 */ import {FeatureSimplePathGraphicsResourceProvider} from './flm.feature.graphics.js';
/* 000021 */ import {FeatureFloats} from './flm.feature.floats.js';
/* 000020 */ import {FeatureHeadings} from './flm.feature.headings.js';
/* 000019 */ import {FeatureRefs} from './flm.feature.refs.js';
/* 000018 */ import {FeatureExternalPrefixedCitations} from './flm.feature.cite.js';
/* 000017 */ import {FeatureEnumeration} from './flm.feature.enumeration.js';
/* 000016 */ import {EndnoteCategory, FeatureEndnotes} from './flm.feature.endnotes.js';
/* 000015 */ import {FeatureMath} from './flm.feature.math.js';
/* 000014 */ import {FeatureVerbatim} from './flm.feature.verbatim.js';
/* 000013 */ import {FeatureHref} from './flm.feature.href.js';
/* 000012 */ import {FeatureBaseFormatting} from './flm.feature.baseformatting.js';
/* 000012 */ export {FeatureSimplePathGraphicsResourceProvider, EndnoteCategory, FeatureMath, FeatureFloats, FeatureVerbatim, FeatureBaseFormatting, FeatureHeadings, FeatureSubstMacros, FeatureTheorems, FeatureDefTerm, FeatureRefs, FeatureEnumeration, FeatureEndnotes, FeatureHref, FeatureQuote, FeatureExternalPrefixedCitations};
/* 000001 */ var __name__ = 'flm.stdfeatures';
/* 000030 */ export var standard_features = function () {
/* 000030 */ 	var baseformatting = true;
/* 000030 */ 	var href = true;
/* 000030 */ 	var verbatim = true;
/* 000030 */ 	var math = true;
/* 000030 */ 	var headings = true;
/* 000030 */ 	var heading_section_commands_by_level = null;
/* 000030 */ 	var heading_numbering_section_depth = null;
/* 000030 */ 	var heading_section_numbering_by_level = null;
/* 000030 */ 	var heading_counter_formatter = null;
/* 000030 */ 	var refs = true;
/* 000030 */ 	var external_ref_resolvers = null;
/* 000030 */ 	var enumeration_environments = true;
/* 000030 */ 	var enumeration_environments_dict = null;
/* 000030 */ 	var endnotes = true;
/* 000030 */ 	var citations = true;
/* 000030 */ 	var external_citations_providers = null;
/* 000030 */ 	var eq_counter_formatter = null;
/* 000030 */ 	var footnote_counter_formatter = null;
/* 000030 */ 	var citation_counter_formatter = null;
/* 000030 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000030 */ 	var floats = true;
/* 000030 */ 	var float_types = null;
/* 000030 */ 	var defterm = true;
/* 000030 */ 	var render_defterm_with_term = true;
/* 000030 */ 	var theorems = false;
/* 000030 */ 	var substmacros_definitions = null;
/* 000030 */ 	var quote_environments = false;
/* 000030 */ 	if (arguments.length) {
/* 000030 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 				switch (__attrib0__) {
/* 000030 */ 					case 'baseformatting': var baseformatting = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'heading_numbering_section_depth': var heading_numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'heading_section_numbering_by_level': var heading_section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'heading_counter_formatter': var heading_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'theorems': var theorems = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'substmacros_definitions': var substmacros_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					case 'quote_environments': var quote_environments = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 	}
/* 000030 */ 	else {
/* 000030 */ 	}
/* 000067 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000068 */ 		var footnote_counter_formatter = 'alph';
/* 000068 */ 	}
/* 000069 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000070 */ 		var citation_counter_formatter = 'arabic';
/* 000070 */ 	}
/* 000072 */ 	var features = [];
/* 000074 */ 	if (__t__ (baseformatting)) {
/* 000075 */ 		(function () {
/* 000075 */ 			var __accu0__ = features;
/* 000076 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureBaseFormatting, null));
/* 000076 */ 		}) ();
/* 000076 */ 	}
/* 000079 */ 	if (__t__ (href)) {
/* 000080 */ 		(function () {
/* 000080 */ 			var __accu0__ = features;
/* 000081 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHref, null));
/* 000081 */ 		}) ();
/* 000081 */ 	}
/* 000084 */ 	if (__t__ (verbatim)) {
/* 000085 */ 		(function () {
/* 000085 */ 			var __accu0__ = features;
/* 000086 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureVerbatim, null));
/* 000086 */ 		}) ();
/* 000086 */ 	}
/* 000089 */ 	if (__t__ (math)) {
/* 000090 */ 		(function () {
/* 000090 */ 			var __accu0__ = features;
/* 000091 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({counter_formatter: eq_counter_formatter})));
/* 000091 */ 		}) ();
/* 000091 */ 	}
/* 000096 */ 	if (__t__ (enumeration_environments)) {
/* 000097 */ 		(function () {
/* 000097 */ 			var __accu0__ = features;
/* 000098 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000098 */ 		}) ();
/* 000098 */ 	}
/* 000103 */ 	if (__t__ (headings)) {
/* 000104 */ 		(function () {
/* 000104 */ 			var __accu0__ = features;
/* 000105 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level, numbering_section_depth: heading_numbering_section_depth, section_numbering_by_level: heading_section_numbering_by_level, counter_formatter: heading_counter_formatter})));
/* 000105 */ 		}) ();
/* 000105 */ 	}
/* 000113 */ 	if (__t__ (refs)) {
/* 000114 */ 		(function () {
/* 000114 */ 			var __accu0__ = features;
/* 000115 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000115 */ 		}) ();
/* 000115 */ 	}
/* 000120 */ 	if (__t__ (endnotes)) {
/* 000122 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000127 */ 		(function () {
/* 000127 */ 			var __accu0__ = features;
/* 000128 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000128 */ 		}) ();
/* 000128 */ 	}
/* 000131 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000132 */ 		(function () {
/* 000132 */ 			var __accu0__ = features;
/* 000133 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000133 */ 		}) ();
/* 000133 */ 	}
/* 000140 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000141 */ 		(function () {
/* 000141 */ 			var __accu0__ = features;
/* 000142 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000142 */ 		}) ();
/* 000142 */ 	}
/* 000146 */ 	if (__t__ (floats)) {
/* 000147 */ 		(function () {
/* 000147 */ 			var __accu0__ = features;
/* 000148 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000148 */ 		}) ();
/* 000148 */ 	}
/* 000151 */ 	if (__t__ (defterm)) {
/* 000152 */ 		(function () {
/* 000152 */ 			var __accu0__ = features;
/* 000153 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null, __kwargtrans__ ({render_defterm_with_term: render_defterm_with_term})));
/* 000153 */ 		}) ();
/* 000153 */ 	}
/* 000156 */ 	if (__t__ (theorems)) {
/* 000160 */ 		(function () {
/* 000160 */ 			var __accu0__ = features;
/* 000161 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureTheorems, null, __kwargtrans__ ((__t__ (__call__ (isinstance, null, theorems, dict)) ? theorems : dict ({})))));
/* 000161 */ 		}) ();
/* 000161 */ 	}
/* 000164 */ 	if (__t__ (substmacros_definitions)) {
/* 000165 */ 		(function () {
/* 000165 */ 			var __accu0__ = features;
/* 000166 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSubstMacros, null, substmacros_definitions));
/* 000166 */ 		}) ();
/* 000166 */ 	}
/* 000169 */ 	if (__t__ (quote_environments !== false)) {
/* 000170 */ 		var dargs = dict ({});
/* 000171 */ 		if (__t__ (__call__ (isinstance, null, quote_environments, dict))) {
/* 000172 */ 			(function () {
/* 000172 */ 				var __accu0__ = dargs;
/* 000172 */ 				return __call__ (__accu0__.py_update, __accu0__, quote_environments);
/* 000172 */ 			}) ();
/* 000172 */ 		}
/* 000173 */ 		(function () {
/* 000173 */ 			var __accu0__ = features;
/* 000174 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureQuotes, null, __kwargtrans__ (dargs)));
/* 000174 */ 		}) ();
/* 000174 */ 	}
/* 000177 */ 	return features;
/* 000177 */ };
/* 000012 */ 
//# sourceMappingURL=flm.stdfeatures.map