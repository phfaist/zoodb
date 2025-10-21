/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 17:57:23
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000012 */ export {EndnoteCategory, FeatureEndnotes, FeatureMath, FeatureBaseFormatting, FeatureTheorems, FeatureEnumeration, FeatureSubstMacros, FeatureExternalPrefixedCitations, FeatureRefs, FeatureVerbatim, FeatureSimplePathGraphicsResourceProvider, FeatureFloats, FeatureHref, FeatureDefTerm, FeatureHeadings};
/* 000001 */ var __name__ = 'flm.stdfeatures';
/* 000029 */ export var standard_features = function () {
/* 000029 */ 	var baseformatting = true;
/* 000029 */ 	var href = true;
/* 000029 */ 	var verbatim = true;
/* 000029 */ 	var math = true;
/* 000029 */ 	var headings = true;
/* 000029 */ 	var heading_section_commands_by_level = null;
/* 000029 */ 	var heading_numbering_section_depth = null;
/* 000029 */ 	var heading_section_numbering_by_level = null;
/* 000029 */ 	var heading_counter_formatter = null;
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
/* 000029 */ 					case 'heading_numbering_section_depth': var heading_numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'heading_section_numbering_by_level': var heading_section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					case 'heading_counter_formatter': var heading_counter_formatter = __allkwargs0__ [__attrib0__]; break;
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
/* 000065 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000066 */ 		var footnote_counter_formatter = 'alph';
/* 000066 */ 	}
/* 000067 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000068 */ 		var citation_counter_formatter = 'arabic';
/* 000068 */ 	}
/* 000070 */ 	var features = [];
/* 000072 */ 	if (__t__ (baseformatting)) {
/* 000073 */ 		(function () {
/* 000073 */ 			var __accu0__ = features;
/* 000074 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureBaseFormatting, null));
/* 000074 */ 		}) ();
/* 000074 */ 	}
/* 000077 */ 	if (__t__ (href)) {
/* 000078 */ 		(function () {
/* 000078 */ 			var __accu0__ = features;
/* 000079 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHref, null));
/* 000079 */ 		}) ();
/* 000079 */ 	}
/* 000082 */ 	if (__t__ (verbatim)) {
/* 000083 */ 		(function () {
/* 000083 */ 			var __accu0__ = features;
/* 000084 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureVerbatim, null));
/* 000084 */ 		}) ();
/* 000084 */ 	}
/* 000087 */ 	if (__t__ (math)) {
/* 000088 */ 		(function () {
/* 000088 */ 			var __accu0__ = features;
/* 000089 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({counter_formatter: eq_counter_formatter})));
/* 000089 */ 		}) ();
/* 000089 */ 	}
/* 000094 */ 	if (__t__ (enumeration_environments)) {
/* 000095 */ 		(function () {
/* 000095 */ 			var __accu0__ = features;
/* 000096 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000096 */ 		}) ();
/* 000096 */ 	}
/* 000101 */ 	if (__t__ (headings)) {
/* 000102 */ 		(function () {
/* 000102 */ 			var __accu0__ = features;
/* 000103 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level, numbering_section_depth: heading_numbering_section_depth, section_numbering_by_level: heading_section_numbering_by_level, counter_formatter: heading_counter_formatter})));
/* 000103 */ 		}) ();
/* 000103 */ 	}
/* 000111 */ 	if (__t__ (refs)) {
/* 000112 */ 		(function () {
/* 000112 */ 			var __accu0__ = features;
/* 000113 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000113 */ 		}) ();
/* 000113 */ 	}
/* 000118 */ 	if (__t__ (endnotes)) {
/* 000120 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000125 */ 		(function () {
/* 000125 */ 			var __accu0__ = features;
/* 000126 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000126 */ 		}) ();
/* 000126 */ 	}
/* 000129 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000130 */ 		(function () {
/* 000130 */ 			var __accu0__ = features;
/* 000131 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000131 */ 		}) ();
/* 000131 */ 	}
/* 000138 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000139 */ 		(function () {
/* 000139 */ 			var __accu0__ = features;
/* 000140 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000140 */ 		}) ();
/* 000140 */ 	}
/* 000144 */ 	if (__t__ (floats)) {
/* 000145 */ 		(function () {
/* 000145 */ 			var __accu0__ = features;
/* 000146 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000146 */ 		}) ();
/* 000146 */ 	}
/* 000149 */ 	if (__t__ (defterm)) {
/* 000150 */ 		(function () {
/* 000150 */ 			var __accu0__ = features;
/* 000151 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null, __kwargtrans__ ({render_defterm_with_term: render_defterm_with_term})));
/* 000151 */ 		}) ();
/* 000151 */ 	}
/* 000154 */ 	if (__t__ (theorems)) {
/* 000158 */ 		(function () {
/* 000158 */ 			var __accu0__ = features;
/* 000159 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureTheorems, null, __kwargtrans__ ((__t__ (__call__ (isinstance, null, theorems, dict)) ? theorems : dict ({})))));
/* 000159 */ 		}) ();
/* 000159 */ 	}
/* 000162 */ 	if (__t__ (substmacros_definitions)) {
/* 000163 */ 		(function () {
/* 000163 */ 			var __accu0__ = features;
/* 000164 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSubstMacros, null, substmacros_definitions));
/* 000164 */ 		}) ();
/* 000164 */ 	}
/* 000167 */ 	return features;
/* 000167 */ };
/* 000012 */ 
//# sourceMappingURL=flm.stdfeatures.map