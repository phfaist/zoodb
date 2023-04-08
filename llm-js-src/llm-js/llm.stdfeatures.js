/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:36
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000023 */ import {FeatureDefTerm} from './llm.feature.defterm.js';
/* 000022 */ import {FeatureSimplePathGraphicsResourceProvider} from './llm.feature.graphics.js';
/* 000021 */ import {FeatureFloats} from './llm.feature.floats.js';
/* 000020 */ import {FeatureHeadings} from './llm.feature.headings.js';
/* 000019 */ import {FeatureRefs} from './llm.feature.refs.js';
/* 000018 */ import {FeatureExternalPrefixedCitations} from './llm.feature.cite.js';
/* 000017 */ import {FeatureEnumeration} from './llm.feature.enumeration.js';
/* 000016 */ import {EndnoteCategory, FeatureEndnotes} from './llm.feature.endnotes.js';
/* 000015 */ import {FeatureMath} from './llm.feature.math.js';
/* 000014 */ import {FeatureVerbatim} from './llm.feature.verbatim.js';
/* 000013 */ import {FeatureHref} from './llm.feature.href.js';
/* 000012 */ import {FeatureBaseFormatting} from './llm.feature.baseformatting.js';
/* 000012 */ export {FeatureRefs, EndnoteCategory, FeatureEnumeration, FeatureMath, FeatureVerbatim, FeatureBaseFormatting, FeatureExternalPrefixedCitations, FeatureHref, FeatureHeadings, FeatureEndnotes, FeatureDefTerm, FeatureSimplePathGraphicsResourceProvider, FeatureFloats};
/* 000001 */ var __name__ = 'llm.stdfeatures';
/* 000026 */ export var standard_features = function () {
/* 000026 */ 	var baseformatting = true;
/* 000026 */ 	var href = true;
/* 000026 */ 	var verbatim = true;
/* 000026 */ 	var math = true;
/* 000026 */ 	var headings = true;
/* 000026 */ 	var heading_section_commands_by_level = null;
/* 000026 */ 	var refs = true;
/* 000026 */ 	var external_ref_resolvers = null;
/* 000026 */ 	var enumeration_environments = true;
/* 000026 */ 	var enumeration_environments_dict = null;
/* 000026 */ 	var endnotes = true;
/* 000026 */ 	var citations = true;
/* 000026 */ 	var external_citations_providers = null;
/* 000026 */ 	var eq_counter_formatter = null;
/* 000026 */ 	var footnote_counter_formatter = null;
/* 000026 */ 	var citation_counter_formatter = null;
/* 000026 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000026 */ 	var floats = true;
/* 000026 */ 	var float_types = null;
/* 000026 */ 	var defterm = true;
/* 000026 */ 	if (arguments.length) {
/* 000026 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 				switch (__attrib0__) {
/* 000026 */ 					case 'baseformatting': var baseformatting = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 	}
/* 000026 */ 	else {
/* 000026 */ 	}
/* 000050 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000051 */ 		var footnote_counter_formatter = 'alph';
/* 000051 */ 	}
/* 000052 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000053 */ 		var citation_counter_formatter = 'arabic';
/* 000053 */ 	}
/* 000055 */ 	var features = [];
/* 000057 */ 	if (__t__ (baseformatting)) {
/* 000058 */ 		(function () {
/* 000058 */ 			var __accu0__ = features;
/* 000059 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureBaseFormatting, null));
/* 000059 */ 		}) ();
/* 000059 */ 	}
/* 000062 */ 	if (__t__ (href)) {
/* 000063 */ 		(function () {
/* 000063 */ 			var __accu0__ = features;
/* 000064 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHref, null));
/* 000064 */ 		}) ();
/* 000064 */ 	}
/* 000067 */ 	if (__t__ (verbatim)) {
/* 000068 */ 		(function () {
/* 000068 */ 			var __accu0__ = features;
/* 000069 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureVerbatim, null));
/* 000069 */ 		}) ();
/* 000069 */ 	}
/* 000072 */ 	if (__t__ (math)) {
/* 000073 */ 		(function () {
/* 000073 */ 			var __accu0__ = features;
/* 000074 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({counter_formatter: eq_counter_formatter})));
/* 000074 */ 		}) ();
/* 000074 */ 	}
/* 000079 */ 	if (__t__ (enumeration_environments)) {
/* 000080 */ 		(function () {
/* 000080 */ 			var __accu0__ = features;
/* 000081 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000081 */ 		}) ();
/* 000081 */ 	}
/* 000086 */ 	if (__t__ (headings)) {
/* 000087 */ 		(function () {
/* 000087 */ 			var __accu0__ = features;
/* 000088 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000088 */ 		}) ();
/* 000088 */ 	}
/* 000093 */ 	if (__t__ (refs)) {
/* 000094 */ 		(function () {
/* 000094 */ 			var __accu0__ = features;
/* 000095 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000095 */ 		}) ();
/* 000095 */ 	}
/* 000100 */ 	if (__t__ (endnotes)) {
/* 000102 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000107 */ 		(function () {
/* 000107 */ 			var __accu0__ = features;
/* 000108 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000108 */ 		}) ();
/* 000108 */ 	}
/* 000111 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000112 */ 		(function () {
/* 000112 */ 			var __accu0__ = features;
/* 000113 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000113 */ 		}) ();
/* 000113 */ 	}
/* 000120 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000121 */ 		(function () {
/* 000121 */ 			var __accu0__ = features;
/* 000122 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000122 */ 		}) ();
/* 000122 */ 	}
/* 000126 */ 	if (__t__ (floats)) {
/* 000127 */ 		(function () {
/* 000127 */ 			var __accu0__ = features;
/* 000128 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000128 */ 		}) ();
/* 000128 */ 	}
/* 000131 */ 	if (__t__ (defterm)) {
/* 000132 */ 		(function () {
/* 000132 */ 			var __accu0__ = features;
/* 000133 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000133 */ 		}) ();
/* 000133 */ 	}
/* 000136 */ 	return features;
/* 000136 */ };
/* 000012 */ 
//# sourceMappingURL=llm.stdfeatures.map