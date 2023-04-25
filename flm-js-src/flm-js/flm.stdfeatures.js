/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 12:01:30
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {FeatureTheorems} from './flm.feature.theorems.js';
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
/* 000012 */ export {FeatureHref, FeatureEnumeration, FeatureEndnotes, FeatureVerbatim, FeatureRefs, FeatureBaseFormatting, FeatureSimplePathGraphicsResourceProvider, FeatureExternalPrefixedCitations, FeatureMath, FeatureTheorems, FeatureDefTerm, FeatureHeadings, FeatureFloats, EndnoteCategory};
/* 000001 */ var __name__ = 'flm.stdfeatures';
/* 000028 */ export var standard_features = function () {
/* 000028 */ 	var baseformatting = true;
/* 000028 */ 	var href = true;
/* 000028 */ 	var verbatim = true;
/* 000028 */ 	var math = true;
/* 000028 */ 	var headings = true;
/* 000028 */ 	var heading_section_commands_by_level = null;
/* 000028 */ 	var refs = true;
/* 000028 */ 	var external_ref_resolvers = null;
/* 000028 */ 	var enumeration_environments = true;
/* 000028 */ 	var enumeration_environments_dict = null;
/* 000028 */ 	var endnotes = true;
/* 000028 */ 	var citations = true;
/* 000028 */ 	var external_citations_providers = null;
/* 000028 */ 	var eq_counter_formatter = null;
/* 000028 */ 	var footnote_counter_formatter = null;
/* 000028 */ 	var citation_counter_formatter = null;
/* 000028 */ 	var use_simple_path_graphics_resource_provider = true;
/* 000028 */ 	var floats = true;
/* 000028 */ 	var float_types = null;
/* 000028 */ 	var defterm = true;
/* 000028 */ 	var theorems = false;
/* 000028 */ 	if (arguments.length) {
/* 000028 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 				switch (__attrib0__) {
/* 000028 */ 					case 'baseformatting': var baseformatting = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'math': var math = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'headings': var headings = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'heading_section_commands_by_level': var heading_section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'refs': var refs = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'enumeration_environments': var enumeration_environments = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'enumeration_environments_dict': var enumeration_environments_dict = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'endnotes': var endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'citations': var citations = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'footnote_counter_formatter': var footnote_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'citation_counter_formatter': var citation_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'use_simple_path_graphics_resource_provider': var use_simple_path_graphics_resource_provider = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'floats': var floats = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'defterm': var defterm = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					case 'theorems': var theorems = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 	}
/* 000028 */ 	else {
/* 000028 */ 	}
/* 000053 */ 	if (__t__ (footnote_counter_formatter === null)) {
/* 000054 */ 		var footnote_counter_formatter = 'alph';
/* 000054 */ 	}
/* 000055 */ 	if (__t__ (citation_counter_formatter === null)) {
/* 000056 */ 		var citation_counter_formatter = 'arabic';
/* 000056 */ 	}
/* 000058 */ 	var features = [];
/* 000060 */ 	if (__t__ (baseformatting)) {
/* 000061 */ 		(function () {
/* 000061 */ 			var __accu0__ = features;
/* 000062 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureBaseFormatting, null));
/* 000062 */ 		}) ();
/* 000062 */ 	}
/* 000065 */ 	if (__t__ (href)) {
/* 000066 */ 		(function () {
/* 000066 */ 			var __accu0__ = features;
/* 000067 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHref, null));
/* 000067 */ 		}) ();
/* 000067 */ 	}
/* 000070 */ 	if (__t__ (verbatim)) {
/* 000071 */ 		(function () {
/* 000071 */ 			var __accu0__ = features;
/* 000072 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureVerbatim, null));
/* 000072 */ 		}) ();
/* 000072 */ 	}
/* 000075 */ 	if (__t__ (math)) {
/* 000076 */ 		(function () {
/* 000076 */ 			var __accu0__ = features;
/* 000077 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureMath, null, __kwargtrans__ ({counter_formatter: eq_counter_formatter})));
/* 000077 */ 		}) ();
/* 000077 */ 	}
/* 000082 */ 	if (__t__ (enumeration_environments)) {
/* 000083 */ 		(function () {
/* 000083 */ 			var __accu0__ = features;
/* 000084 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEnumeration, null, __kwargtrans__ ({enumeration_environments: enumeration_environments_dict})));
/* 000084 */ 		}) ();
/* 000084 */ 	}
/* 000089 */ 	if (__t__ (headings)) {
/* 000090 */ 		(function () {
/* 000090 */ 			var __accu0__ = features;
/* 000091 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureHeadings, null, __kwargtrans__ ({section_commands_by_level: heading_section_commands_by_level})));
/* 000091 */ 		}) ();
/* 000091 */ 	}
/* 000096 */ 	if (__t__ (refs)) {
/* 000097 */ 		(function () {
/* 000097 */ 			var __accu0__ = features;
/* 000098 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureRefs, null, __kwargtrans__ ({external_ref_resolvers: external_ref_resolvers})));
/* 000098 */ 		}) ();
/* 000098 */ 	}
/* 000103 */ 	if (__t__ (endnotes)) {
/* 000105 */ 		var endnote_categories = [__call__ (EndnoteCategory, null, __kwargtrans__ ({category_name: 'footnote', counter_formatter: footnote_counter_formatter, heading_title: 'Footnotes', endnote_command: 'footnote'}))];
/* 000110 */ 		(function () {
/* 000110 */ 			var __accu0__ = features;
/* 000111 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureEndnotes, null, __kwargtrans__ ({categories: endnote_categories})));
/* 000111 */ 		}) ();
/* 000111 */ 	}
/* 000114 */ 	if (__t__ (__t__ (citations) && external_citations_providers !== null)) {
/* 000115 */ 		(function () {
/* 000115 */ 			var __accu0__ = features;
/* 000116 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureExternalPrefixedCitations, null, __kwargtrans__ ({external_citations_providers: external_citations_providers, counter_formatter: citation_counter_formatter, citation_delimiters: tuple (['[', ']'])})));
/* 000116 */ 		}) ();
/* 000116 */ 	}
/* 000123 */ 	if (__t__ (use_simple_path_graphics_resource_provider)) {
/* 000124 */ 		(function () {
/* 000124 */ 			var __accu0__ = features;
/* 000125 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureSimplePathGraphicsResourceProvider, null));
/* 000125 */ 		}) ();
/* 000125 */ 	}
/* 000129 */ 	if (__t__ (floats)) {
/* 000130 */ 		(function () {
/* 000130 */ 			var __accu0__ = features;
/* 000131 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureFloats, null, __kwargtrans__ ({float_types: float_types})));
/* 000131 */ 		}) ();
/* 000131 */ 	}
/* 000134 */ 	if (__t__ (defterm)) {
/* 000135 */ 		(function () {
/* 000135 */ 			var __accu0__ = features;
/* 000136 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureDefTerm, null));
/* 000136 */ 		}) ();
/* 000136 */ 	}
/* 000139 */ 	if (__t__ (theorems)) {
/* 000143 */ 		(function () {
/* 000143 */ 			var __accu0__ = features;
/* 000144 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FeatureTheorems, null, __kwargtrans__ ((__t__ (__call__ (isinstance, null, theorems, dict)) ? theorems : dict ({})))));
/* 000144 */ 		}) ();
/* 000144 */ 	}
/* 000147 */ 	return features;
/* 000147 */ };
/* 000012 */ 
//# sourceMappingURL=flm.stdfeatures.map