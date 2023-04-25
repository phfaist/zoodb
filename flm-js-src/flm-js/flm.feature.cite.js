/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 09:47:59
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000022 */ import {EndnoteCategory} from './flm.feature.endnotes.js';
/* 000020 */ import {Feature} from './flm.feature._base.js';
/* 000018 */ import {build_counter_formatter} from './flm.counter.js';
/* 000016 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000015 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000014 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000012 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {macrospec, build_counter_formatter, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_parsers, Feature, FLMMacroSpecBase, latexnodes_nodes, EndnoteCategory, FLMFragment};
/* 000001 */ var __name__ = 'flm.feature.cite';
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
/* 000073 */ 		get get_citation_content_flm () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
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
/* 000079 */ 			var citation_flm_text = null;
/* 000080 */ 			var __iterable0__ = self.external_citations_providers;
/* 000080 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 				var external_citations_provider = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 				var citation_flm_text = (function () {
/* 000082 */ 					var __accu0__ = external_citations_provider;
/* 000082 */ 					return __call__ (__accu0__.get_citation_full_text_flm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000082 */ 				}) ();
/* 000086 */ 				if (__t__ (citation_flm_text)) {
/* 000086 */ 					break;
/* 000086 */ 				}
/* 000086 */ 			}
/* 000089 */ 			if (__t__ (citation_flm_text === null)) {
/* 000090 */ 				var __except0__ = __call__ (ValueError, null, 'Citation not found: ‘{}:{}’'.format (cite_prefix, cite_key));
/* 000090 */ 				__except0__.__cause__ = null;
/* 000090 */ 				throw __except0__;
/* 000090 */ 			}
/* 000092 */ 			if (__t__ (__call__ (isinstance, null, citation_flm_text, FLMFragment))) {
/* 000093 */ 				var citation_flm = citation_flm_text;
/* 000093 */ 			}
/* 000094 */ 			else {
/* 000095 */ 				var citation_flm = (function () {
/* 000095 */ 					var __accu0__ = self.render_context;
/* 000095 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, citation_flm_text, __kwargtrans__ ({is_block_level: false, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000103 */ 			return citation_flm;
/* 000103 */ 		});},
/* 000106 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000106 */ 			if (arguments.length) {
/* 000106 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 						switch (__attrib0__) {
/* 000106 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						}
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 			else {
/* 000106 */ 			}
/* 000107 */ 			var endnotes_mgr = null;
/* 000108 */ 			if (__t__ (!__t__ ((self.use_endnotes)))) {
/* 000109 */ 				return null;
/* 000109 */ 			}
/* 000111 */ 			var endnotes_mgr = (function () {
/* 000111 */ 				var __accu0__ = self.render_context;
/* 000111 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000111 */ 			}) ();
/* 000113 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000114 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000114 */ 			}
/* 000116 */ 			var citation_flm = (function () {
/* 000116 */ 				var __accu0__ = self;
/* 000116 */ 				return __call__ (__accu0__.get_citation_content_flm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000116 */ 			}) ();
/* 000119 */ 			var endnote = (function () {
/* 000119 */ 				var __accu0__ = endnotes_mgr;
/* 000119 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_flm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000119 */ 			}) ();
/* 000131 */ 			endnote.formatted_inner_counter_value_flm = (function () {
/* 000131 */ 				var __accu0__ = self.render_context;
/* 000132 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, (function () {
/* 000132 */ 					var __accu1__ = self.feature_document_manager.endnote_category.counter_formatter;
/* 000132 */ 					return __call__ (__accu1__.format_flm, __accu1__, endnote.number, __kwargtrans__ ({with_delimiters: false}));
/* 000132 */ 				}) (), __kwargtrans__ ({is_block_level: false, what: 'citation counter (inner)'.format ()}));
/* 000132 */ 			}) ();
/* 000140 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000142 */ 			return endnote;
/* 000142 */ 		});},
/* 000146 */ 		get render_citation_marks () {return __get__ (this, function (self, cite_items, node) {
/* 000146 */ 			if (arguments.length) {
/* 000146 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 						switch (__attrib0__) {
/* 000146 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 							case 'cite_items': var cite_items = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						}
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 			else {
/* 000146 */ 			}
/* 000148 */ 			var render_context = self.render_context;
/* 000149 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000151 */ 			var resource_info = node.latex_walker.resource_info;
/* 000157 */ 			var citations_compressible = [];
/* 000158 */ 			var citations_manual_render = [];
/* 000159 */ 			var __iterable0__ = cite_items;
/* 000159 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000159 */ 				var cd = __getitem__ (__iterable0__, __index0__);
/* 000160 */ 				var __left0__ = tuple ([__getitem__ (cd, 'prefix'), __getitem__ (cd, 'key'), __getitem__ (cd, 'extra')]);
/* 000160 */ 				var citation_key_prefix = __left0__ [0];
/* 000160 */ 				var citation_key = __left0__ [1];
/* 000160 */ 				var extra = __left0__ [2];
/* 000162 */ 				var endnote = null;
/* 000163 */ 				if (__t__ (self.use_endnotes)) {
/* 000164 */ 					var endnote = (function () {
/* 000164 */ 						var __accu0__ = self;
/* 000164 */ 						return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000164 */ 					}) ();
/* 000164 */ 				}
/* 000170 */ 				if (__t__ (extra === null)) {
/* 000171 */ 					(function () {
/* 000171 */ 						var __accu0__ = citations_compressible;
/* 000171 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000171 */ 					}) ();
/* 000171 */ 				}
/* 000174 */ 				if (__t__ (extra !== null)) {
/* 000175 */ 					(function () {
/* 000175 */ 						var __accu0__ = citations_manual_render;
/* 000175 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000175 */ 					}) ();
/* 000175 */ 				}
/* 000175 */ 			}
/* 000185 */ 			var s_items = [];
/* 000187 */ 			var endnotes_mgr = null;
/* 000188 */ 			if (__t__ ((function () {
/* 000188 */ 				var __accu0__ = render_context;
/* 000188 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'endnotes');
/* 000188 */ 			}) ())) {
/* 000189 */ 				var endnotes_mgr = (function () {
/* 000189 */ 					var __accu0__ = render_context;
/* 000189 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000189 */ 				}) ();
/* 000189 */ 			}
/* 000191 */ 			var delimiters_part_of_link = true;
/* 000193 */ 			if (__t__ (__t__ (self.use_endnotes) && self.sort_and_compress)) {
/* 000195 */ 				var endnote_numbers = (function () {
/* 000195 */ 					var __accu0__ = [];
/* 000195 */ 					var __iterable0__ = citations_compressible;
/* 000195 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 						var key_prefix = __left0__ [0];
/* 000196 */ 						var key = __left0__ [1];
/* 000196 */ 						var extra = __left0__ [2];
/* 000196 */ 						var endnote = __left0__ [3];
/* 000196 */ 						(function () {
/* 000196 */ 							var __accu1__ = __accu0__;
/* 000196 */ 							return __call__ (__accu1__.append, __accu1__, endnote);
/* 000196 */ 						}) ();
/* 000196 */ 					}
/* 000196 */ 					return __accu0__;
/* 000196 */ 				}) ();
/* 000198 */ 				if (__t__ (__gt__ (__call__ (len, null, endnote_numbers), 1))) {
/* 000199 */ 					var delimiters_part_of_link = false;
/* 000199 */ 				}
/* 000201 */ 				var rendered_citations_woextra = (function () {
/* 000201 */ 					var __accu0__ = endnotes_mgr;
/* 000201 */ 					return __call__ (__accu0__.render_endnote_mark_many, __accu0__, endnote_numbers, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000201 */ 				}) ();
/* 000206 */ 				// pass;
/* 000210 */ 				(function () {
/* 000210 */ 					var __accu0__ = s_items;
/* 000210 */ 					return __call__ (__accu0__.append, __accu0__, rendered_citations_woextra);
/* 000210 */ 				}) ();
/* 000210 */ 			}
/* 000211 */ 			else {
/* 000214 */ 				var citations_manual_render = __add__ (citations_compressible, citations_manual_render);
/* 000214 */ 			}
/* 000222 */ 			var citation_delimiters = self.feature.counter_formatter.delimiters;
/* 000224 */ 			var __iterable0__ = citations_manual_render;
/* 000224 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 				var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 				var __left0__ = cite_item;
/* 000226 */ 				var citation_key_prefix = __left0__ [0];
/* 000226 */ 				var citation_key = __left0__ [1];
/* 000226 */ 				var optional_cite_extra_nodelist = __left0__ [2];
/* 000226 */ 				var endnote = __left0__ [3];
/* 000229 */ 				var citation_content_flm = null;
/* 000230 */ 				var show_inline_content_flm = null;
/* 000231 */ 				if (__t__ (self.use_endnotes)) {
/* 000232 */ 					var show_inline_content_flm = endnote.formatted_inner_counter_value_flm;
/* 000232 */ 				}
/* 000233 */ 				else {
/* 000234 */ 					var citation_content_flm = (function () {
/* 000234 */ 						var __accu0__ = self;
/* 000234 */ 						return __call__ (__accu0__.get_citation_content_flm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000234 */ 					}) ();
/* 000239 */ 					var show_inline_content_flm = citation_content_flm;
/* 000239 */ 				}
/* 000244 */ 				var cite_content_list_of_nodes = [];
/* 000247 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 0) !== null)) {
/* 000248 */ 					(function () {
/* 000248 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000249 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000249 */ 							var __accu1__ = node.latex_walker;
/* 000249 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000249 */ 						}) ());
/* 000249 */ 					}) ();
/* 000249 */ 				}
/* 000259 */ 				(function () {
/* 000259 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000259 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_flm.nodes));
/* 000259 */ 				}) ();
/* 000260 */ 				if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000261 */ 					(function () {
/* 000261 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000262 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000262 */ 							var __accu1__ = node.latex_walker;
/* 000262 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: self.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000262 */ 						}) ());
/* 000262 */ 					}) ();
/* 000271 */ 					(function () {
/* 000271 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000271 */ 						return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000271 */ 					}) ();
/* 000271 */ 				}
/* 000274 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 1) !== null)) {
/* 000275 */ 					(function () {
/* 000275 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000276 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000276 */ 							var __accu1__ = node.latex_walker;
/* 000276 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000276 */ 						}) ());
/* 000276 */ 					}) ();
/* 000276 */ 				}
/* 000285 */ 				var citation_nodes_parsing_state = (function () {
/* 000285 */ 					var __accu0__ = node.parsing_state;
/* 000285 */ 					return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000285 */ 				}) ();
/* 000289 */ 				var display_nodelist = (function () {
/* 000289 */ 					var __accu0__ = node.latex_walker;
/* 000289 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000289 */ 				}) ();
/* 000294 */ 				if (__t__ (self.use_endnotes)) {
/* 000296 */ 					var full_cite_mark = (function () {
/* 000296 */ 						var __accu0__ = endnotes_mgr;
/* 000296 */ 						return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote, display_nodelist, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000296 */ 					}) ();
/* 000301 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000302 */ 						var full_cite_mark = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_cite_mark), __getitem__ (citation_delimiters, 1));
/* 000302 */ 					}
/* 000305 */ 					(function () {
/* 000305 */ 						var __accu0__ = s_items;
/* 000305 */ 						return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000305 */ 					}) ();
/* 000305 */ 				}
/* 000306 */ 				else {
/* 000309 */ 					var full_inline_citation = (function () {
/* 000309 */ 						var __accu0__ = fragment_renderer;
/* 000309 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000309 */ 					}) ();
/* 000314 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000315 */ 						var full_inline_citation = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_inline_citation), __getitem__ (citation_delimiters, 1));
/* 000315 */ 					}
/* 000320 */ 					(function () {
/* 000320 */ 						var __accu0__ = s_items;
/* 000320 */ 						return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000320 */ 					}) ();
/* 000320 */ 				}
/* 000320 */ 			}
/* 000322 */ 			return (function () {
/* 000322 */ 				var __accu0__ = fragment_renderer;
/* 000323 */ 				return __call__ (__accu0__.render_semantic_span, __accu0__, (function () {
/* 000323 */ 					var __accu1__ = fragment_renderer;
/* 000323 */ 					return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000323 */ 				}) (), 'citations', render_context);
/* 000323 */ 			}) ();
/* 000323 */ 		});}
/* 000323 */ 	}),
/* 000329 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator, references_heading_title, sort_and_compress) {
/* 000329 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000329 */ 			var counter_formatter = 'arabic';
/* 000329 */ 		};
/* 000329 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000329 */ 			var citation_delimiters = null;
/* 000329 */ 		};
/* 000329 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000329 */ 			var citation_optional_text_separator = '; ';
/* 000329 */ 		};
/* 000329 */ 		if (typeof references_heading_title == 'undefined' || (references_heading_title != null && references_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000329 */ 			var references_heading_title = 'References';
/* 000329 */ 		};
/* 000329 */ 		if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000329 */ 			var sort_and_compress = true;
/* 000329 */ 		};
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'references_heading_title': var references_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000337 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000338 */ 		self.external_citations_providers = external_citations_providers;
/* 000339 */ 		var dflt = __call__ (dict, null, _cite_default_counter_formatter_spec);
/* 000340 */ 		if (__t__ (citation_delimiters !== null)) {
/* 000341 */ 			__setitem__ (dflt, 'delimiters', citation_delimiters);
/* 000341 */ 		}
/* 000342 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, dflt, __kwargtrans__ ({counter_formatter_id: 'citation'}));
/* 000348 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000349 */ 		self.references_heading_title = references_heading_title;
/* 000350 */ 		self.sort_and_compress = sort_and_compress;
/* 000350 */ 	});},
/* 000352 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000354 */ 			(function () {
/* 000354 */ 				var __accu0__ = logger;
/* 000354 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000354 */ 			}) ();
/* 000354 */ 		}
/* 000358 */ 		self.external_citations_providers = external_citations_providers;
/* 000358 */ 	});},
/* 000360 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000362 */ 			(function () {
/* 000362 */ 				var __accu0__ = logger;
/* 000362 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000362 */ 			}) ();
/* 000366 */ 			self.external_citations_providers = [];
/* 000366 */ 		}
/* 000368 */ 		(function () {
/* 000368 */ 			var __accu0__ = self.external_citations_providers;
/* 000368 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000368 */ 		}) ();
/* 000368 */ 	});},
/* 000370 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000370 */ 		if (arguments.length) {
/* 000370 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 					switch (__attrib0__) {
/* 000370 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 		}
/* 000370 */ 		else {
/* 000370 */ 		}
/* 000373 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000373 */ 	});}
/* 000373 */ });
/* 000386 */ export var cite_macro_arguments = [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (FLMArgumentSpec, null, (function () {
/* 000386 */ 	var __accu0__ = latexnodes_parsers;
/* 000386 */ 	return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000386 */ }) (), __kwargtrans__ ({argname: 'citekey'}))];
/* 000395 */ export var CiteMoreArgsParser =  __class__ ('CiteMoreArgsParser', [macrospec.LatexArgumentsParser], {
/* 000395 */ 	__module__: __name__,
/* 000396 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000397 */ 		__call__ (__call__ (__super__, null, CiteMoreArgsParser, '__init__'), null, self, __kwargtrans__ ({arguments_spec_list: cite_macro_arguments}));
/* 000397 */ 	});},
/* 000398 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000398 */ 		var kwargs = dict ();
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 				delete kwargs.__kwargtrans__;
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000400 */ 		var __left0__ = __call__ (__call__ (__super__, null, CiteMoreArgsParser, 'parse'), null, self, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000400 */ 		var parsed = __left0__ [0];
/* 000400 */ 		var _ = __left0__ [1];
/* 000401 */ 		var n = (function () {
/* 000401 */ 			var __accu0__ = latex_walker;
/* 000401 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: '(MORE CITATION KEYS)', parsing_state: parsing_state, pos: null, pos_end: null}));
/* 000401 */ 		}) ();
/* 000405 */ 		n.cite_more_parsed_arguments = parsed;
/* 000406 */ 		return tuple ([n, null]);
/* 000406 */ 	});}
/* 000406 */ });
/* 000408 */ export var TackOnMultipleCiteCommandsMacroParser =  __class__ ('TackOnMultipleCiteCommandsMacroParser', [latexnodes_parsers.LatexTackOnInformationFieldMacrosParser], {
/* 000408 */ 	__module__: __name__,
/* 000411 */ 	get __init__ () {return __get__ (this, function (self, citemacronames) {
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'citemacronames': var citemacronames = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		__call__ (__call__ (__super__, null, TackOnMultipleCiteCommandsMacroParser, '__init__'), null, self, citemacronames, __kwargtrans__ ({allow_multiple: true}));
/* 000412 */ 	});},
/* 000413 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000414 */ 		return __call__ (CiteMoreArgsParser, null);
/* 000414 */ 	});}
/* 000414 */ });
/* 000418 */ export var CiteMacro =  __class__ ('CiteMacro', [FLMMacroSpecBase], {
/* 000418 */ 	__module__: __name__,
/* 000420 */ 	allowed_in_standalone_mode: false,
/* 000422 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000425 */ 		var arguments_spec_list = __add__ (__add__ ([], cite_macro_arguments), [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (TackOnMultipleCiteCommandsMacroParser, null, ['cite']), argname: 'cite_more', flm_doc: 'An immediately following \\verbcode+\\cite{…}+ macro call gets appended to the current batch of citations'}))]);
/* 000433 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000433 */ 	});},
/* 000438 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000440 */ 		var node_args = (function () {
/* 000440 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000440 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey', 'cite_more']));
/* 000440 */ 		}) ();
/* 000444 */ 		var optional_cite_extra_nodelist = null;
/* 000445 */ 		if (__t__ ((function () {
/* 000445 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000445 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000445 */ 		}) ())) {
/* 000447 */ 			var optional_cite_extra_nodelist = (function () {
/* 000447 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000447 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000447 */ 			}) ();
/* 000447 */ 		}
/* 000449 */ 		var citekeylist_nodelist = (function () {
/* 000449 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000449 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000449 */ 		}) ();
/* 000462 */ 		var _get_cite_items_from_key_nodelist = function (citekeylist_nodelist, optional_cite_extra_nodelist) {
/* 000462 */ 			if (arguments.length) {
/* 000462 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 						switch (__attrib0__) {
/* 000462 */ 							case 'citekeylist_nodelist': var citekeylist_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 							case 'optional_cite_extra_nodelist': var optional_cite_extra_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						}
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 			else {
/* 000462 */ 			}
/* 000466 */ 			var cite_items = [];
/* 000467 */ 			var __iterable0__ = citekeylist_nodelist;
/* 000467 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000467 */ 				var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000469 */ 				if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000469 */ 					continue;
/* 000469 */ 				}
/* 000472 */ 				var citekey_verbatim = (function () {
/* 000472 */ 					var __accu0__ = citekeygroupnode;
/* 000472 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000472 */ 				}) ();
/* 000473 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000475 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000475 */ 				}
/* 000477 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000479 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000479 */ 				}
/* 000484 */ 				if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000485 */ 					var __left0__ = (function () {
/* 000485 */ 						var __accu0__ = citekey_verbatim;
/* 000485 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000485 */ 					}) ();
/* 000485 */ 					var citation_key_prefix = __left0__ [0];
/* 000485 */ 					var citation_key = __left0__ [1];
/* 000488 */ 					var citation_key_prefix = (function () {
/* 000488 */ 						var __accu0__ = (function () {
/* 000488 */ 							var __accu1__ = citation_key_prefix;
/* 000488 */ 							return __call__ (__accu1__.strip, __accu1__);
/* 000488 */ 						}) ();
/* 000488 */ 						return __call__ (__accu0__.lower, __accu0__);
/* 000488 */ 					}) ();
/* 000488 */ 				}
/* 000489 */ 				else {
/* 000490 */ 					var __left0__ = tuple ([null, citekey_verbatim]);
/* 000490 */ 					var citation_key_prefix = __left0__ [0];
/* 000490 */ 					var citation_key = __left0__ [1];
/* 000490 */ 				}
/* 000492 */ 				(function () {
/* 000492 */ 					var __accu0__ = cite_items;
/* 000492 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'prefix': citation_key_prefix, 'key': citation_key, 'extra': optional_cite_extra_nodelist}));
/* 000492 */ 				}) ();
/* 000492 */ 			}
/* 000501 */ 			if (__t__ (__t__ (optional_cite_extra_nodelist !== null) && __gt__ (__call__ (len, null, cite_items), 1))) {
/* 000502 */ 				var __except0__ = __call__ (ValueError, null, 'When using the syntax \\cite[extra]{citekey}, you can only specify a single citation key.');
/* 000502 */ 				__except0__.__cause__ = null;
/* 000502 */ 				throw __except0__;
/* 000502 */ 			}
/* 000507 */ 			return cite_items;
/* 000507 */ 		};
/* 000510 */ 		var cite_items = __call__ (_get_cite_items_from_key_nodelist, null, citekeylist_nodelist, optional_cite_extra_nodelist);
/* 000515 */ 		var cite_more_macros_nodelist = (function () {
/* 000515 */ 			var __accu0__ = __getitem__ (node_args, 'cite_more');
/* 000515 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000515 */ 		}) ();
/* 000516 */ 		if (__t__ (cite_more_macros_nodelist !== null)) {
/* 000517 */ 			var __iterable0__ = cite_more_macros_nodelist;
/* 000517 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000517 */ 				var gn = __getitem__ (__iterable0__, __index0__);
/* 000518 */ 				assert ((function () {
/* 000518 */ 					var __accu0__ = gn;
/* 000518 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000518 */ 				}) ());
/* 000518 */ 				assert (__eq__ (__getitem__ (gn.delimiters, 0), __add__ ('\\', self.macroname)));
/* 000520 */ 				var gna = __getitem__ (gn.nodelist, 0);
/* 000521 */ 				var parsed_args = gna.cite_more_parsed_arguments;
/* 000521 */ 				assert (parsed_args !== null);
/* 000524 */ 				var more_node_args = (function () {
/* 000524 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({parsed_arguments: parsed_args}));
/* 000524 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000524 */ 				}) ();
/* 000527 */ 				var more_extra_nl = null;
/* 000528 */ 				if (__t__ ((function () {
/* 000528 */ 					var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000528 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000528 */ 				}) ())) {
/* 000529 */ 					var more_extra_nl = (function () {
/* 000529 */ 						var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000529 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000529 */ 					}) ();
/* 000529 */ 				}
/* 000530 */ 				var more_citekeylist_nl = (function () {
/* 000530 */ 					var __accu0__ = __getitem__ (more_node_args, 'citekey');
/* 000530 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000530 */ 				}) ();
/* 000532 */ 				var more_cite_items = __call__ (_get_cite_items_from_key_nodelist, null, more_citekeylist_nl, more_extra_nl);
/* 000535 */ 				(function () {
/* 000535 */ 					var __accu0__ = cite_items;
/* 000535 */ 					return __call__ (__accu0__.extend, __accu0__, more_cite_items);
/* 000535 */ 				}) ();
/* 000535 */ 			}
/* 000535 */ 		}
/* 000538 */ 		node.flmarg_cite_items = cite_items;
/* 000540 */ 		return node;
/* 000540 */ 	});},
/* 000543 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000543 */ 		if (arguments.length) {
/* 000543 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000543 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000543 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000543 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000543 */ 					switch (__attrib0__) {
/* 000543 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000543 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000543 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000543 */ 					}
/* 000543 */ 				}
/* 000543 */ 			}
/* 000543 */ 		}
/* 000543 */ 		else {
/* 000543 */ 		}
/* 000545 */ 		var cite_mgr = (function () {
/* 000545 */ 			var __accu0__ = render_context;
/* 000545 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000545 */ 		}) ();
/* 000547 */ 		return (function () {
/* 000547 */ 			var __accu0__ = cite_mgr;
/* 000547 */ 			return __call__ (__accu0__.render_citation_marks, __accu0__, node.flmarg_cite_items, node);
/* 000547 */ 		}) ();
/* 000547 */ 	});}
/* 000547 */ });
/* 000006 */ 
//# sourceMappingURL=flm.feature.cite.map