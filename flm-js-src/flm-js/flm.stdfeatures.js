/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 09:47:11
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000026 */ import {FeatureTheorems} from './flm.feature.theorems.js';
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
/* 000012 */ export {FeatureExternalPrefixedCitations, EndnoteCategory, FeatureSubstMacros, FeatureDefTerm, FeatureFloats, FeatureSimplePathGraphicsResourceProvider, FeatureRefs, FeatureHref, FeatureMath, FeatureBaseFormatting, FeatureHeadings, FeatureEnumeration, FeatureVerbatim, FeatureTheorems, FeatureEndnotes};
/* 000001 */ var __name__ = 'flm.stdfeatures';
/* 000029 */ export var standard_features = function () {
/* 000029 */ 	var baseformatting = true;
/* 000029 */ 	var href = true;
/* 000029 */ 	var verbatim = true;
/* 000029 */ 	var math = true;
/* 000029 */ 	var headings = true;
/* 000029 */ 	var heading_section_commands_by_level = null;
/* 000029 */ 	var refs = true;
/* 000029 */ 	var external_ref_resolvers = null;
/* 000029 */ 	var enumeration_environments = true;
/* 000029 */ 	var enumeration_environments_dict = null;
/* 000029 */ 	var endnotes = true;
/* 000029 */ 	var citations = true;
/* 000029 */ 	var external_citations_providers = null;
/* 000029 */ 	var eq_counter_formatter = null;
/* 000029 */ 	var footnote_counter_formatter = null;
/* 000029 */ 	var citation_counter_formatter = null;
/* 000029 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000029 */ 	var floats = true;
/* 000029 */ 	var float_types = null;
/* 000029 */ 	var defterm = true;
/* 000029 */ 	var render_defterm_with_term = true;
/* 000029 */ 	var theorems = false;
/* 000029 */ 	var substmacros_definitions = null;
/* 000029 */ 	if (arguments.length) {
/* 000029 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000029 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000029 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000029 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000029 */ 				switch (__attrib0__) {
/* 000029 */ 					case 'baseformatting': var baseformatting = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'theorems': var theorems = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'substmacros_definitions': var substmacros_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 	}
/* 000029 */ 	else {
/* 000029 */ 	}
/* 000062 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000063 */ 		var footnote_counter_formatter = 'alph';
/* 000063 */ 	}
/* 000064 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000065 */ 		var citation_counter_formatter = 'arabic';
/* 000065 */ 	}
/* 000067 */ 	var features = [];
/* 000069 */ 	if (__t__ (baseformatting)) {
/* 000070 */ 		(function () {
/* 000070 */ 			var __accu0__ = features;
/* 000071 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureBaseFormatting, null));
/* 000071 */ 		}) ();
/* 000071 */ 	}
/* 000074 */ 	if (__t__ (href)) {
/* 000075 */ 		(function () {
/* 000075 */ 			var __accu0__ = features;
/* 000076 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHref, null));
/* 000076 */ 		}) ();
/* 000076 */ 	}
/* 000079 */ 	if (__t__ (verbatim)) {
/* 000080 */ 		(function () {
/* 000080 */ 			var __accu0__ = features;
/* 000081 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureVerbatim, null));
/* 000081 */ 		}) ();
/* 000081 */ 	}
/* 000084 */ 	if (__t__ (math)) {
/* 000085 */ 		(function () {
/* 000085 */ 			var __accu0__ = features;
/* 000086 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({counter_formatter: eq_counter_formatter})));
/* 000086 */ 		}) ();
/* 000086 */ 	}
/* 000091 */ 	if (__t__ (enumeration_environments)) {
/* 000092 */ 		(function () {
/* 000092 */ 			var __accu0__ = features;
/* 000093 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000093 */ 		}) ();
/* 000093 */ 	}
/* 000098 */ 	if (__t__ (headings)) {
/* 000099 */ 		(function () {
/* 000099 */ 			var __accu0__ = features;
/* 000100 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000100 */ 		}) ();
/* 000100 */ 	}
/* 000105 */ 	if (__t__ (refs)) {
/* 000106 */ 		(function () {
/* 000106 */ 			var __accu0__ = features;
/* 000107 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000107 */ 		}) ();
/* 000107 */ 	}
/* 000112 */ 	if (__t__ (endnotes)) {
/* 000114 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000119 */ 		(function () {
/* 000119 */ 			var __accu0__ = features;
/* 000120 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000120 */ 		}) ();
/* 000120 */ 	}
/* 000123 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000124 */ 		(function () {
/* 000124 */ 			var __accu0__ = features;
/* 000125 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000125 */ 		}) ();
/* 000125 */ 	}
/* 000132 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000133 */ 		(function () {
/* 000133 */ 			var __accu0__ = features;
/* 000134 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000134 */ 		}) ();
/* 000134 */ 	}
/* 000138 */ 	if (__t__ (floats)) {
/* 000139 */ 		(function () {
/* 000139 */ 			var __accu0__ = features;
/* 000140 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000140 */ 		}) ();
/* 000140 */ 	}
/* 000143 */ 	if (__t__ (defterm)) {
/* 000144 */ 		(function () {
/* 000144 */ 			var __accu0__ = features;
/* 000145 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null, __kwargtrans__ ({render_defterm_with_term: render_defterm_with_term})));
/* 000145 */ 		}) ();
/* 000145 */ 	}
/* 000148 */ 	if (__t__ (theorems)) {
/* 000152 */ 		(function () {
/* 000152 */ 			var __accu0__ = features;
/* 000153 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureTheorems, null, __kwargtrans__ ((__t__ (__call__ (isinstance, null, theorems, dict)) ? theorems : dict ({})))));
/* 000153 */ 		}) ();
/* 000153 */ 	}
/* 000156 */ 	if (__t__ (substmacros_definitions)) {
/* 000157 */ 		(function () {
/* 000157 */ 			var __accu0__ = features;
/* 000158 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSubstMacros, null, substmacros_definitions));
/* 000158 */ 		}) ();
/* 000158 */ 	}
/* 000161 */ 	return features;
/* 000161 */ };
/* 000012 */ 
//# sourceMappingURL=flm.stdfeatures.map