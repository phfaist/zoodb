/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:36
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000022 */ import {EndnoteCategory} from './llm.feature.endnotes.js';
/* 000020 */ import {Feature} from './llm.feature._base.js';
/* 000018 */ import {build_counter_formatter} from './llm.counter.js';
/* 000016 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000015 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000014 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000012 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMArgumentSpec, latexnodes_nodes, EndnoteCategory, build_counter_formatter, Feature, LLMFragment, latexnodes_parsers, macrospec, ParsedArgumentsInfo, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.cite';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000025 */ export var _cite_default_counter_formatter_spec = dict ({'format_num': 'arabic', 'prefix_display': null, 'delimiters': tuple (['[', ']']), 'join_spec': 'compact'});
/* 000035 */ export var FeatureExternalPrefixedCitations =  __class__ ('FeatureExternalPrefixedCitations', [Feature], {
/* 000035 */ 	__module__: __name__,
/* 000037 */ 	feature_name: 'citations',
/* 000038 */ 	feature_title: 'Citations',
/* 000040 */ 	feature_optional_dependencies: ['endnotes'],
/* 000044 */ 	use_endnotes: true,
/* 000044 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000044 */ 		__module__: __name__,
/* 000045 */ 		get initialize () {return __get__ (this, function (self, use_endnotes) {
/* 000045 */ 			if (typeof use_endnotes == 'undefined' || (use_endnotes != null && use_endnotes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000045 */ 				var use_endnotes = null;
/* 000045 */ 			};
/* 000045 */ 			if (arguments.length) {
/* 000045 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 						switch (__attrib0__) {
/* 000045 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 							case 'use_endnotes': var use_endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						}
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 			else {
/* 000045 */ 			}
/* 000046 */ 			if (__t__ (use_endnotes !== null)) {
/* 000047 */ 				self.use_endnotes = use_endnotes;
/* 000047 */ 			}
/* 000048 */ 			else {
/* 000049 */ 				self.use_endnotes = self.feature.use_endnotes;
/* 000049 */ 			}
/* 000051 */ 			if (__t__ (self.use_endnotes)) {
/* 000052 */ 				var endnotes_mgr = (function () {
/* 000052 */ 					var __accu0__ = self.doc;
/* 000052 */ 					return __call__ (__accu0__.feature_document_manager, __accu0__, 'endnotes');
/* 000052 */ 				}) ();
/* 000053 */ 				self.endnote_category = __call__ (EndnoteCategory, null, 'citation', __kwargtrans__ ({counter_formatter: self.feature.counter_formatter, heading_title: self.feature.references_heading_title}));
/* 000059 */ 				(function () {
/* 000059 */ 					var __accu0__ = endnotes_mgr;
/* 000059 */ 					return __call__ (__accu0__.add_endnote_category, __accu0__, self.endnote_category);
/* 000059 */ 				}) ();
/* 000059 */ 			}
/* 000059 */ 		});}
/* 000061 */ 	}),
/* 000061 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000061 */ 		__module__: __name__,
/* 000063 */ 		get initialize () {return __get__ (this, function (self, sort_and_compress) {
/* 000063 */ 			if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000063 */ 				var sort_and_compress = null;
/* 000063 */ 			};
/* 000063 */ 			if (arguments.length) {
/* 000063 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 						switch (__attrib0__) {
/* 000063 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 							case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						}
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 			else {
/* 000063 */ 			}
/* 000064 */ 			self.citation_endnotes = dict ({});
/* 000065 */ 			self.use_endnotes = self.feature_document_manager.use_endnotes;
/* 000066 */ 			self.external_citations_providers = self.feature.external_citations_providers;
/* 000068 */ 			if (__t__ (sort_and_compress !== null)) {
/* 000069 */ 				self.sort_and_compress = sort_and_compress;
/* 000069 */ 			}
/* 000070 */ 			else {
/* 000071 */ 				self.sort_and_compress = self.feature.sort_and_compress;
/* 000071 */ 			}
/* 000071 */ 		});},
/* 000073 */ 		get get_citation_content_llm () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000073 */ 			if (arguments.length) {
/* 000073 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 						switch (__attrib0__) {
/* 000073 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						}
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 			else {
/* 000073 */ 			}
/* 000075 */ 			if (__t__ (self.external_citations_providers === null)) {
/* 000076 */ 				var __except0__ = __call__ (ValueError, null, 'No external citations providers are set!');
/* 000076 */ 				__except0__.__cause__ = null;
/* 000076 */ 				throw __except0__;
/* 000076 */ 			}
/* 000079 */ 			var citation_llm_text = null;
/* 000080 */ 			var __iterable0__ = self.external_citations_providers;
/* 000080 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 				var external_citations_provider = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 				var citation_llm_text = (function () {
/* 000082 */ 					var __accu0__ = external_citations_provider;
/* 000082 */ 					return __call__ (__accu0__.get_citation_full_text_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000082 */ 				}) ();
/* 000086 */ 				if (__t__ (citation_llm_text)) {
/* 000086 */ 					break;
/* 000086 */ 				}
/* 000086 */ 			}
/* 000089 */ 			if (__t__ (citation_llm_text === null)) {
/* 000090 */ 				var __except0__ = __call__ (ValueError, null, 'Citation not found: ‘{}:{}’'.format (cite_prefix, cite_key));
/* 000090 */ 				__except0__.__cause__ = null;
/* 000090 */ 				throw __except0__;
/* 000090 */ 			}
/* 000092 */ 			if (__t__ (__call__ (isinstance, null, citation_llm_text, LLMFragment))) {
/* 000093 */ 				var citation_llm = citation_llm_text;
/* 000093 */ 			}
/* 000094 */ 			else {
/* 000095 */ 				var citation_llm = (function () {
/* 000095 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000095 */ 					return __call__ (__accu0__.make_fragment, __accu0__, citation_llm_text, __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000104 */ 			return citation_llm;
/* 000104 */ 		});},
/* 000107 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000107 */ 			if (arguments.length) {
/* 000107 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 						switch (__attrib0__) {
/* 000107 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						}
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 			else {
/* 000107 */ 			}
/* 000108 */ 			var endnotes_mgr = null;
/* 000109 */ 			if (__t__ (!__t__ ((self.use_endnotes)))) {
/* 000110 */ 				return null;
/* 000110 */ 			}
/* 000112 */ 			var endnotes_mgr = (function () {
/* 000112 */ 				var __accu0__ = self.render_context;
/* 000112 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000112 */ 			}) ();
/* 000114 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000115 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000115 */ 			}
/* 000117 */ 			var citation_llm = (function () {
/* 000117 */ 				var __accu0__ = self;
/* 000117 */ 				return __call__ (__accu0__.get_citation_content_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000117 */ 			}) ();
/* 000120 */ 			var endnote = (function () {
/* 000120 */ 				var __accu0__ = endnotes_mgr;
/* 000120 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_llm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000120 */ 			}) ();
/* 000132 */ 			endnote.formatted_inner_counter_value_llm = (function () {
/* 000132 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000133 */ 				return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000133 */ 					var __accu1__ = self.feature_document_manager.endnote_category.counter_formatter;
/* 000133 */ 					return __call__ (__accu1__.format_llm, __accu1__, endnote.number, __kwargtrans__ ({with_delimiters: false}));
/* 000133 */ 				}) (), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'citation counter (inner)'.format ()}));
/* 000133 */ 			}) ();
/* 000142 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000144 */ 			return endnote;
/* 000144 */ 		});},
/* 000148 */ 		get render_citation_marks () {return __get__ (this, function (self, cite_items, node) {
/* 000148 */ 			if (arguments.length) {
/* 000148 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 						switch (__attrib0__) {
/* 000148 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 							case 'cite_items': var cite_items = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						}
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 			else {
/* 000148 */ 			}
/* 000150 */ 			var render_context = self.render_context;
/* 000151 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000153 */ 			var resource_info = node.latex_walker.resource_info;
/* 000159 */ 			var citations_compressible = [];
/* 000160 */ 			var citations_manual_render = [];
/* 000161 */ 			var __iterable0__ = cite_items;
/* 000161 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000161 */ 				var cd = __getitem__ (__iterable0__, __index0__);
/* 000162 */ 				var __left0__ = tuple ([__getitem__ (cd, 'prefix'), __getitem__ (cd, 'key'), __getitem__ (cd, 'extra')]);
/* 000162 */ 				var citation_key_prefix = __left0__ [0];
/* 000162 */ 				var citation_key = __left0__ [1];
/* 000162 */ 				var extra = __left0__ [2];
/* 000164 */ 				var endnote = null;
/* 000165 */ 				if (__t__ (self.use_endnotes)) {
/* 000166 */ 					var endnote = (function () {
/* 000166 */ 						var __accu0__ = self;
/* 000166 */ 						return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000166 */ 					}) ();
/* 000166 */ 				}
/* 000172 */ 				if (__t__ (extra === null)) {
/* 000173 */ 					(function () {
/* 000173 */ 						var __accu0__ = citations_compressible;
/* 000173 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000173 */ 					}) ();
/* 000173 */ 				}
/* 000176 */ 				if (__t__ (extra !== null)) {
/* 000177 */ 					(function () {
/* 000177 */ 						var __accu0__ = citations_manual_render;
/* 000177 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000177 */ 					}) ();
/* 000177 */ 				}
/* 000177 */ 			}
/* 000187 */ 			var s_items = [];
/* 000189 */ 			var endnotes_mgr = null;
/* 000190 */ 			if (__t__ ((function () {
/* 000190 */ 				var __accu0__ = render_context;
/* 000190 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'endnotes');
/* 000190 */ 			}) ())) {
/* 000191 */ 				var endnotes_mgr = (function () {
/* 000191 */ 					var __accu0__ = render_context;
/* 000191 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000191 */ 				}) ();
/* 000191 */ 			}
/* 000193 */ 			var delimiters_part_of_link = true;
/* 000195 */ 			if (__t__ (__t__ (self.use_endnotes) && self.sort_and_compress)) {
/* 000197 */ 				var endnote_numbers = (function () {
/* 000197 */ 					var __accu0__ = [];
/* 000197 */ 					var __iterable0__ = citations_compressible;
/* 000197 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 						var key_prefix = __left0__ [0];
/* 000198 */ 						var key = __left0__ [1];
/* 000198 */ 						var extra = __left0__ [2];
/* 000198 */ 						var endnote = __left0__ [3];
/* 000198 */ 						(function () {
/* 000198 */ 							var __accu1__ = __accu0__;
/* 000198 */ 							return __call__ (__accu1__.append, __accu1__, endnote);
/* 000198 */ 						}) ();
/* 000198 */ 					}
/* 000198 */ 					return __accu0__;
/* 000198 */ 				}) ();
/* 000200 */ 				if (__t__ (__gt__ (__call__ (len, null, endnote_numbers), 1))) {
/* 000201 */ 					var delimiters_part_of_link = false;
/* 000201 */ 				}
/* 000203 */ 				var rendered_citations_woextra = (function () {
/* 000203 */ 					var __accu0__ = endnotes_mgr;
/* 000203 */ 					return __call__ (__accu0__.render_endnote_mark_many, __accu0__, endnote_numbers, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000203 */ 				}) ();
/* 000208 */ 				// pass;
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = s_items;
/* 000212 */ 					return __call__ (__accu0__.append, __accu0__, rendered_citations_woextra);
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000213 */ 			else {
/* 000216 */ 				var citations_manual_render = __add__ (citations_compressible, citations_manual_render);
/* 000216 */ 			}
/* 000224 */ 			var citation_delimiters = self.feature.counter_formatter.delimiters;
/* 000226 */ 			var __iterable0__ = citations_manual_render;
/* 000226 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 				var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000228 */ 				var __left0__ = cite_item;
/* 000228 */ 				var citation_key_prefix = __left0__ [0];
/* 000228 */ 				var citation_key = __left0__ [1];
/* 000228 */ 				var optional_cite_extra_nodelist = __left0__ [2];
/* 000228 */ 				var endnote = __left0__ [3];
/* 000231 */ 				var citation_content_llm = null;
/* 000232 */ 				var show_inline_content_llm = null;
/* 000233 */ 				if (__t__ (self.use_endnotes)) {
/* 000234 */ 					var show_inline_content_llm = endnote.formatted_inner_counter_value_llm;
/* 000234 */ 				}
/* 000235 */ 				else {
/* 000236 */ 					var citation_content_llm = (function () {
/* 000236 */ 						var __accu0__ = self;
/* 000236 */ 						return __call__ (__accu0__.get_citation_content_llm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000236 */ 					}) ();
/* 000241 */ 					var show_inline_content_llm = citation_content_llm;
/* 000241 */ 				}
/* 000246 */ 				var cite_content_list_of_nodes = [];
/* 000249 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 0) !== null)) {
/* 000250 */ 					(function () {
/* 000250 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000251 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000251 */ 							var __accu1__ = node.latex_walker;
/* 000251 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000251 */ 						}) ());
/* 000251 */ 					}) ();
/* 000251 */ 				}
/* 000261 */ 				(function () {
/* 000261 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000261 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_llm.nodes));
/* 000261 */ 				}) ();
/* 000262 */ 				if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000263 */ 					(function () {
/* 000263 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000264 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000264 */ 							var __accu1__ = node.latex_walker;
/* 000264 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: self.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000264 */ 						}) ());
/* 000264 */ 					}) ();
/* 000273 */ 					(function () {
/* 000273 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000273 */ 						return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000273 */ 					}) ();
/* 000273 */ 				}
/* 000276 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 1) !== null)) {
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000278 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000278 */ 							var __accu1__ = node.latex_walker;
/* 000278 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000278 */ 						}) ());
/* 000278 */ 					}) ();
/* 000278 */ 				}
/* 000287 */ 				var citation_nodes_parsing_state = (function () {
/* 000287 */ 					var __accu0__ = node.parsing_state;
/* 000287 */ 					return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000287 */ 				}) ();
/* 000291 */ 				var display_nodelist = (function () {
/* 000291 */ 					var __accu0__ = node.latex_walker;
/* 000291 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000291 */ 				}) ();
/* 000296 */ 				if (__t__ (self.use_endnotes)) {
/* 000298 */ 					var full_cite_mark = (function () {
/* 000298 */ 						var __accu0__ = endnotes_mgr;
/* 000298 */ 						return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote, display_nodelist, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000298 */ 					}) ();
/* 000303 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000304 */ 						var full_cite_mark = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_cite_mark), __getitem__ (citation_delimiters, 1));
/* 000304 */ 					}
/* 000307 */ 					(function () {
/* 000307 */ 						var __accu0__ = s_items;
/* 000307 */ 						return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000307 */ 					}) ();
/* 000307 */ 				}
/* 000308 */ 				else {
/* 000311 */ 					var full_inline_citation = (function () {
/* 000311 */ 						var __accu0__ = fragment_renderer;
/* 000311 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000311 */ 					}) ();
/* 000316 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000317 */ 						var full_inline_citation = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_inline_citation), __getitem__ (citation_delimiters, 1));
/* 000317 */ 					}
/* 000322 */ 					(function () {
/* 000322 */ 						var __accu0__ = s_items;
/* 000322 */ 						return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000322 */ 					}) ();
/* 000322 */ 				}
/* 000322 */ 			}
/* 000324 */ 			return (function () {
/* 000324 */ 				var __accu0__ = fragment_renderer;
/* 000325 */ 				return __call__ (__accu0__.render_semantic_span, __accu0__, (function () {
/* 000325 */ 					var __accu1__ = fragment_renderer;
/* 000325 */ 					return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000325 */ 				}) (), 'citations', render_context);
/* 000325 */ 			}) ();
/* 000325 */ 		});}
/* 000325 */ 	}),
/* 000331 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator, references_heading_title, sort_and_compress) {
/* 000331 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var counter_formatter = 'arabic';
/* 000331 */ 		};
/* 000331 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var citation_delimiters = null;
/* 000331 */ 		};
/* 000331 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var citation_optional_text_separator = '; ';
/* 000331 */ 		};
/* 000331 */ 		if (typeof references_heading_title == 'undefined' || (references_heading_title != null && references_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var references_heading_title = 'References';
/* 000331 */ 		};
/* 000331 */ 		if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var sort_and_compress = true;
/* 000331 */ 		};
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'references_heading_title': var references_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000339 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000340 */ 		self.external_citations_providers = external_citations_providers;
/* 000341 */ 		var dflt = __call__ (dict, null, _cite_default_counter_formatter_spec);
/* 000342 */ 		if (__t__ (citation_delimiters !== null)) {
/* 000343 */ 			__setitem__ (dflt, 'delimiters', citation_delimiters);
/* 000343 */ 		}
/* 000344 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, dflt);
/* 000349 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000350 */ 		self.references_heading_title = references_heading_title;
/* 000351 */ 		self.sort_and_compress = sort_and_compress;
/* 000351 */ 	});},
/* 000353 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000355 */ 			(function () {
/* 000355 */ 				var __accu0__ = logger;
/* 000355 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000355 */ 			}) ();
/* 000355 */ 		}
/* 000359 */ 		self.external_citations_providers = external_citations_providers;
/* 000359 */ 	});},
/* 000361 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000362 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000363 */ 			(function () {
/* 000363 */ 				var __accu0__ = logger;
/* 000363 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000363 */ 			}) ();
/* 000367 */ 			self.external_citations_providers = [];
/* 000367 */ 		}
/* 000369 */ 		(function () {
/* 000369 */ 			var __accu0__ = self.external_citations_providers;
/* 000369 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000369 */ 		}) ();
/* 000369 */ 	});},
/* 000371 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000374 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000374 */ 	});}
/* 000374 */ });
/* 000387 */ export var cite_macro_arguments = [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LLMArgumentSpec, null, (function () {
/* 000387 */ 	var __accu0__ = latexnodes_parsers;
/* 000387 */ 	return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000387 */ }) (), __kwargtrans__ ({argname: 'citekey'}))];
/* 000396 */ export var CiteMoreArgsParser =  __class__ ('CiteMoreArgsParser', [macrospec.LatexArgumentsParser], {
/* 000396 */ 	__module__: __name__,
/* 000397 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		__call__ (__call__ (__super__, null, CiteMoreArgsParser, '__init__'), null, self, __kwargtrans__ ({arguments_spec_list: cite_macro_arguments}));
/* 000398 */ 	});},
/* 000399 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000399 */ 		var kwargs = dict ();
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 				delete kwargs.__kwargtrans__;
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000401 */ 		var __left0__ = __call__ (__call__ (__super__, null, CiteMoreArgsParser, 'parse'), null, self, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000401 */ 		var parsed = __left0__ [0];
/* 000401 */ 		var _ = __left0__ [1];
/* 000402 */ 		var n = (function () {
/* 000402 */ 			var __accu0__ = latex_walker;
/* 000402 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: '(MORE CITATION KEYS)', parsing_state: parsing_state, pos: null, pos_end: null}));
/* 000402 */ 		}) ();
/* 000406 */ 		n.cite_more_parsed_arguments = parsed;
/* 000407 */ 		return tuple ([n, null]);
/* 000407 */ 	});}
/* 000407 */ });
/* 000409 */ export var TackOnMultipleCiteCommandsMacroParser =  __class__ ('TackOnMultipleCiteCommandsMacroParser', [latexnodes_parsers.LatexTackOnInformationFieldMacrosParser], {
/* 000409 */ 	__module__: __name__,
/* 000412 */ 	get __init__ () {return __get__ (this, function (self, citemacronames) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'citemacronames': var citemacronames = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000413 */ 		__call__ (__call__ (__super__, null, TackOnMultipleCiteCommandsMacroParser, '__init__'), null, self, citemacronames, __kwargtrans__ ({allow_multiple: true}));
/* 000413 */ 	});},
/* 000414 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000415 */ 		return __call__ (CiteMoreArgsParser, null);
/* 000415 */ 	});}
/* 000415 */ });
/* 000422 */ export var CiteMacro =  __class__ ('CiteMacro', [LLMMacroSpecBase], {
/* 000422 */ 	__module__: __name__,
/* 000424 */ 	allowed_in_standalone_mode: false,
/* 000426 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000426 */ 		if (arguments.length) {
/* 000426 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000426 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000426 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000426 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000426 */ 					switch (__attrib0__) {
/* 000426 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 					}
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		else {
/* 000426 */ 		}
/* 000429 */ 		var arguments_spec_list = __add__ (__add__ ([], cite_macro_arguments), [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (TackOnMultipleCiteCommandsMacroParser, null, ['cite']), argname: 'cite_more', llm_doc: 'An immediately following \\verbcode+\\cite{…}+ macro call gets appended to the current batch of citations'}))]);
/* 000437 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000437 */ 	});},
/* 000442 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000444 */ 		var node_args = (function () {
/* 000444 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000444 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey', 'cite_more']));
/* 000444 */ 		}) ();
/* 000448 */ 		var optional_cite_extra_nodelist = null;
/* 000449 */ 		if (__t__ ((function () {
/* 000449 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000449 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000449 */ 		}) ())) {
/* 000451 */ 			var optional_cite_extra_nodelist = (function () {
/* 000451 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000451 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000451 */ 			}) ();
/* 000451 */ 		}
/* 000453 */ 		var citekeylist_nodelist = (function () {
/* 000453 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000453 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000453 */ 		}) ();
/* 000466 */ 		var _get_cite_items_from_key_nodelist = function (citekeylist_nodelist, optional_cite_extra_nodelist) {
/* 000466 */ 			if (arguments.length) {
/* 000466 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000466 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000466 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000466 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000466 */ 						switch (__attrib0__) {
/* 000466 */ 							case 'citekeylist_nodelist': var citekeylist_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 							case 'optional_cite_extra_nodelist': var optional_cite_extra_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						}
/* 000466 */ 					}
/* 000466 */ 				}
/* 000466 */ 			}
/* 000466 */ 			else {
/* 000466 */ 			}
/* 000470 */ 			var cite_items = [];
/* 000471 */ 			var __iterable0__ = citekeylist_nodelist;
/* 000471 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000471 */ 				var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 				if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000473 */ 					continue;
/* 000473 */ 				}
/* 000476 */ 				var citekey_verbatim = (function () {
/* 000476 */ 					var __accu0__ = citekeygroupnode;
/* 000476 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000476 */ 				}) ();
/* 000477 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000479 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000479 */ 				}
/* 000481 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000483 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000483 */ 				}
/* 000488 */ 				if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000489 */ 					var __left0__ = (function () {
/* 000489 */ 						var __accu0__ = citekey_verbatim;
/* 000489 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000489 */ 					}) ();
/* 000489 */ 					var citation_key_prefix = __left0__ [0];
/* 000489 */ 					var citation_key = __left0__ [1];
/* 000492 */ 					var citation_key_prefix = (function () {
/* 000492 */ 						var __accu0__ = (function () {
/* 000492 */ 							var __accu1__ = citation_key_prefix;
/* 000492 */ 							return __call__ (__accu1__.strip, __accu1__);
/* 000492 */ 						}) ();
/* 000492 */ 						return __call__ (__accu0__.lower, __accu0__);
/* 000492 */ 					}) ();
/* 000492 */ 				}
/* 000493 */ 				else {
/* 000494 */ 					var __left0__ = tuple ([null, citekey_verbatim]);
/* 000494 */ 					var citation_key_prefix = __left0__ [0];
/* 000494 */ 					var citation_key = __left0__ [1];
/* 000494 */ 				}
/* 000496 */ 				(function () {
/* 000496 */ 					var __accu0__ = cite_items;
/* 000496 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'prefix': citation_key_prefix, 'key': citation_key, 'extra': optional_cite_extra_nodelist}));
/* 000496 */ 				}) ();
/* 000496 */ 			}
/* 000505 */ 			if (__t__ (__t__ (optional_cite_extra_nodelist !== null) && __gt__ (__call__ (len, null, cite_items), 1))) {
/* 000506 */ 				var __except0__ = __call__ (ValueError, null, 'When using the syntax \\cite[extra]{citekey}, you can only specify a single citation key.');
/* 000506 */ 				__except0__.__cause__ = null;
/* 000506 */ 				throw __except0__;
/* 000506 */ 			}
/* 000511 */ 			return cite_items;
/* 000511 */ 		};
/* 000514 */ 		var cite_items = __call__ (_get_cite_items_from_key_nodelist, null, citekeylist_nodelist, optional_cite_extra_nodelist);
/* 000519 */ 		var cite_more_macros_nodelist = (function () {
/* 000519 */ 			var __accu0__ = __getitem__ (node_args, 'cite_more');
/* 000519 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000519 */ 		}) ();
/* 000520 */ 		if (__t__ (cite_more_macros_nodelist !== null)) {
/* 000521 */ 			var __iterable0__ = cite_more_macros_nodelist;
/* 000521 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000521 */ 				var gn = __getitem__ (__iterable0__, __index0__);
/* 000522 */ 				assert ((function () {
/* 000522 */ 					var __accu0__ = gn;
/* 000522 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000522 */ 				}) ());
/* 000522 */ 				assert (__eq__ (__getitem__ (gn.delimiters, 0), __add__ ('\\', self.macroname)));
/* 000524 */ 				var gna = __getitem__ (gn.nodelist, 0);
/* 000525 */ 				var parsed_args = gna.cite_more_parsed_arguments;
/* 000525 */ 				assert (parsed_args !== null);
/* 000528 */ 				var more_node_args = (function () {
/* 000528 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({parsed_arguments: parsed_args}));
/* 000528 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000528 */ 				}) ();
/* 000531 */ 				var more_extra_nl = null;
/* 000532 */ 				if (__t__ ((function () {
/* 000532 */ 					var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000532 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000532 */ 				}) ())) {
/* 000533 */ 					var more_extra_nl = (function () {
/* 000533 */ 						var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000533 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000533 */ 					}) ();
/* 000533 */ 				}
/* 000534 */ 				var more_citekeylist_nl = (function () {
/* 000534 */ 					var __accu0__ = __getitem__ (more_node_args, 'citekey');
/* 000534 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000534 */ 				}) ();
/* 000536 */ 				var more_cite_items = __call__ (_get_cite_items_from_key_nodelist, null, more_citekeylist_nl, more_extra_nl);
/* 000539 */ 				(function () {
/* 000539 */ 					var __accu0__ = cite_items;
/* 000539 */ 					return __call__ (__accu0__.extend, __accu0__, more_cite_items);
/* 000539 */ 				}) ();
/* 000539 */ 			}
/* 000539 */ 		}
/* 000542 */ 		node.llmarg_cite_items = cite_items;
/* 000544 */ 		return node;
/* 000544 */ 	});},
/* 000547 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000547 */ 		if (arguments.length) {
/* 000547 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000547 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000547 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000547 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000547 */ 					switch (__attrib0__) {
/* 000547 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 					}
/* 000547 */ 				}
/* 000547 */ 			}
/* 000547 */ 		}
/* 000547 */ 		else {
/* 000547 */ 		}
/* 000549 */ 		var cite_mgr = (function () {
/* 000549 */ 			var __accu0__ = render_context;
/* 000549 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000549 */ 		}) ();
/* 000551 */ 		return (function () {
/* 000551 */ 			var __accu0__ = cite_mgr;
/* 000551 */ 			return __call__ (__accu0__.render_citation_marks, __accu0__, node.llmarg_cite_items, node);
/* 000551 */ 		}) ();
/* 000551 */ 	});}
/* 000551 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.cite.map