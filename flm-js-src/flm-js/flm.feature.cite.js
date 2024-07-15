/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:39
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
/* 000006 */ export {EndnoteCategory, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_nodes, macrospec, FLMFragment, Feature, FLMMacroSpecBase, latexnodes_parsers, build_counter_formatter};
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
/* 000151 */ 			var endnotes_mgr = null;
/* 000152 */ 			if (__t__ ((function () {
/* 000152 */ 				var __accu0__ = render_context;
/* 000152 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'endnotes');
/* 000152 */ 			}) ())) {
/* 000153 */ 				var endnotes_mgr = (function () {
/* 000153 */ 					var __accu0__ = render_context;
/* 000153 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000153 */ 				}) ();
/* 000153 */ 			}
/* 000155 */ 			if (__t__ (__t__ (self.use_endnotes) && __t__ (endnotes_mgr !== null) && endnotes_mgr.inhibit_render_endnote_marks)) {
/* 000158 */ 				return (function () {
/* 000158 */ 					var __accu0__ = fragment_renderer;
/* 000158 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000158 */ 				}) ();
/* 000158 */ 			}
/* 000161 */ 			var resource_info = node.latex_walker.resource_info;
/* 000167 */ 			var citations_compressible = [];
/* 000168 */ 			var citations_manual_render = [];
/* 000169 */ 			var __iterable0__ = cite_items;
/* 000169 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000169 */ 				var cd = __getitem__ (__iterable0__, __index0__);
/* 000170 */ 				var __left0__ = tuple ([__getitem__ (cd, 'prefix'), __getitem__ (cd, 'key'), __getitem__ (cd, 'extra')]);
/* 000170 */ 				var citation_key_prefix = __left0__ [0];
/* 000170 */ 				var citation_key = __left0__ [1];
/* 000170 */ 				var extra = __left0__ [2];
/* 000172 */ 				var endnote = null;
/* 000173 */ 				if (__t__ (self.use_endnotes)) {
/* 000174 */ 					var endnote = (function () {
/* 000174 */ 						var __accu0__ = self;
/* 000174 */ 						return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000174 */ 					}) ();
/* 000174 */ 				}
/* 000180 */ 				if (__t__ (extra === null)) {
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu0__ = citations_compressible;
/* 000181 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000181 */ 					}) ();
/* 000181 */ 				}
/* 000184 */ 				if (__t__ (extra !== null)) {
/* 000185 */ 					(function () {
/* 000185 */ 						var __accu0__ = citations_manual_render;
/* 000185 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000185 */ 					}) ();
/* 000185 */ 				}
/* 000185 */ 			}
/* 000195 */ 			var s_items = [];
/* 000197 */ 			var delimiters_part_of_link = true;
/* 000199 */ 			if (__t__ (__t__ (self.use_endnotes) && self.sort_and_compress)) {
/* 000201 */ 				var endnote_numbers = (function () {
/* 000201 */ 					var __accu0__ = [];
/* 000201 */ 					var __iterable0__ = citations_compressible;
/* 000201 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 						var key_prefix = __left0__ [0];
/* 000202 */ 						var key = __left0__ [1];
/* 000202 */ 						var extra = __left0__ [2];
/* 000202 */ 						var endnote = __left0__ [3];
/* 000202 */ 						(function () {
/* 000202 */ 							var __accu1__ = __accu0__;
/* 000202 */ 							return __call__ (__accu1__.append, __accu1__, endnote);
/* 000202 */ 						}) ();
/* 000202 */ 					}
/* 000202 */ 					return __accu0__;
/* 000202 */ 				}) ();
/* 000204 */ 				if (__t__ (__gt__ (__call__ (len, null, endnote_numbers), 1))) {
/* 000205 */ 					var delimiters_part_of_link = false;
/* 000205 */ 				}
/* 000207 */ 				var rendered_citations_woextra = (function () {
/* 000207 */ 					var __accu0__ = endnotes_mgr;
/* 000207 */ 					return __call__ (__accu0__.render_endnote_mark_many, __accu0__, endnote_numbers, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000207 */ 				}) ();
/* 000212 */ 				// pass;
/* 000216 */ 				(function () {
/* 000216 */ 					var __accu0__ = s_items;
/* 000216 */ 					return __call__ (__accu0__.append, __accu0__, rendered_citations_woextra);
/* 000216 */ 				}) ();
/* 000216 */ 			}
/* 000217 */ 			else {
/* 000220 */ 				var citations_manual_render = __add__ (citations_compressible, citations_manual_render);
/* 000220 */ 			}
/* 000228 */ 			var citation_delimiters = self.feature.counter_formatter.delimiters;
/* 000230 */ 			var __iterable0__ = citations_manual_render;
/* 000230 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 				var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000232 */ 				var __left0__ = cite_item;
/* 000232 */ 				var citation_key_prefix = __left0__ [0];
/* 000232 */ 				var citation_key = __left0__ [1];
/* 000232 */ 				var optional_cite_extra_nodelist = __left0__ [2];
/* 000232 */ 				var endnote = __left0__ [3];
/* 000235 */ 				var citation_content_flm = null;
/* 000236 */ 				var show_inline_content_flm = null;
/* 000237 */ 				if (__t__ (self.use_endnotes)) {
/* 000238 */ 					var show_inline_content_flm = endnote.formatted_inner_counter_value_flm;
/* 000238 */ 				}
/* 000239 */ 				else {
/* 000240 */ 					var citation_content_flm = (function () {
/* 000240 */ 						var __accu0__ = self;
/* 000240 */ 						return __call__ (__accu0__.get_citation_content_flm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000240 */ 					}) ();
/* 000245 */ 					var show_inline_content_flm = citation_content_flm;
/* 000245 */ 				}
/* 000250 */ 				var cite_content_list_of_nodes = [];
/* 000253 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 0) !== null)) {
/* 000254 */ 					(function () {
/* 000254 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000255 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000255 */ 							var __accu1__ = node.latex_walker;
/* 000255 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000255 */ 						}) ());
/* 000255 */ 					}) ();
/* 000255 */ 				}
/* 000265 */ 				(function () {
/* 000265 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000265 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_flm.nodes));
/* 000265 */ 				}) ();
/* 000266 */ 				if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000267 */ 					(function () {
/* 000267 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000268 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000268 */ 							var __accu1__ = node.latex_walker;
/* 000268 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: self.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000268 */ 						}) ());
/* 000268 */ 					}) ();
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000277 */ 						return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000277 */ 					}) ();
/* 000277 */ 				}
/* 000280 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 1) !== null)) {
/* 000281 */ 					(function () {
/* 000281 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000282 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000282 */ 							var __accu1__ = node.latex_walker;
/* 000282 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000282 */ 						}) ());
/* 000282 */ 					}) ();
/* 000282 */ 				}
/* 000291 */ 				var citation_nodes_parsing_state = (function () {
/* 000291 */ 					var __accu0__ = node.parsing_state;
/* 000291 */ 					return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000291 */ 				}) ();
/* 000295 */ 				var display_nodelist = (function () {
/* 000295 */ 					var __accu0__ = node.latex_walker;
/* 000295 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000295 */ 				}) ();
/* 000300 */ 				if (__t__ (self.use_endnotes)) {
/* 000302 */ 					var full_cite_mark = (function () {
/* 000302 */ 						var __accu0__ = endnotes_mgr;
/* 000302 */ 						return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote, display_nodelist, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000302 */ 					}) ();
/* 000307 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000308 */ 						var full_cite_mark = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_cite_mark), __getitem__ (citation_delimiters, 1));
/* 000308 */ 					}
/* 000311 */ 					(function () {
/* 000311 */ 						var __accu0__ = s_items;
/* 000311 */ 						return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000311 */ 					}) ();
/* 000311 */ 				}
/* 000312 */ 				else {
/* 000315 */ 					var full_inline_citation = (function () {
/* 000315 */ 						var __accu0__ = fragment_renderer;
/* 000315 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000315 */ 					}) ();
/* 000320 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000321 */ 						var full_inline_citation = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_inline_citation), __getitem__ (citation_delimiters, 1));
/* 000321 */ 					}
/* 000326 */ 					(function () {
/* 000326 */ 						var __accu0__ = s_items;
/* 000326 */ 						return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000326 */ 					}) ();
/* 000326 */ 				}
/* 000326 */ 			}
/* 000328 */ 			return (function () {
/* 000328 */ 				var __accu0__ = fragment_renderer;
/* 000329 */ 				return __call__ (__accu0__.render_semantic_span, __accu0__, (function () {
/* 000329 */ 					var __accu1__ = fragment_renderer;
/* 000329 */ 					return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000329 */ 				}) (), 'citation-marks', render_context);
/* 000329 */ 			}) ();
/* 000329 */ 		});}
/* 000329 */ 	}),
/* 000335 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator, references_heading_title, sort_and_compress) {
/* 000335 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var counter_formatter = 'arabic';
/* 000335 */ 		};
/* 000335 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var citation_delimiters = null;
/* 000335 */ 		};
/* 000335 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var citation_optional_text_separator = '; ';
/* 000335 */ 		};
/* 000335 */ 		if (typeof references_heading_title == 'undefined' || (references_heading_title != null && references_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var references_heading_title = 'References';
/* 000335 */ 		};
/* 000335 */ 		if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var sort_and_compress = true;
/* 000335 */ 		};
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'references_heading_title': var references_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000343 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000344 */ 		self.external_citations_providers = external_citations_providers;
/* 000345 */ 		var dflt = __call__ (dict, null, _cite_default_counter_formatter_spec);
/* 000346 */ 		if (__t__ (citation_delimiters !== null)) {
/* 000347 */ 			__setitem__ (dflt, 'delimiters', citation_delimiters);
/* 000347 */ 		}
/* 000348 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, dflt, __kwargtrans__ ({counter_formatter_id: 'citation'}));
/* 000354 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000355 */ 		self.references_heading_title = references_heading_title;
/* 000356 */ 		self.sort_and_compress = sort_and_compress;
/* 000356 */ 	});},
/* 000358 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000359 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000360 */ 			(function () {
/* 000360 */ 				var __accu0__ = logger;
/* 000360 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000360 */ 			}) ();
/* 000360 */ 		}
/* 000364 */ 		self.external_citations_providers = external_citations_providers;
/* 000364 */ 	});},
/* 000366 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000368 */ 			(function () {
/* 000368 */ 				var __accu0__ = logger;
/* 000368 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000368 */ 			}) ();
/* 000372 */ 			self.external_citations_providers = [];
/* 000372 */ 		}
/* 000374 */ 		(function () {
/* 000374 */ 			var __accu0__ = self.external_citations_providers;
/* 000374 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000374 */ 		}) ();
/* 000374 */ 	});},
/* 000376 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 					}
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 		}
/* 000376 */ 		else {
/* 000376 */ 		}
/* 000379 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000379 */ 	});}
/* 000379 */ });
/* 000392 */ export var cite_macro_arguments = [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (FLMArgumentSpec, null, (function () {
/* 000392 */ 	var __accu0__ = latexnodes_parsers;
/* 000392 */ 	return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000392 */ }) (), __kwargtrans__ ({argname: 'citekey'}))];
/* 000401 */ export var CiteMoreArgsParser =  __class__ ('CiteMoreArgsParser', [macrospec.LatexArgumentsParser], {
/* 000401 */ 	__module__: __name__,
/* 000402 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000403 */ 		__call__ (__call__ (__super__, null, CiteMoreArgsParser, '__init__'), null, self, __kwargtrans__ ({arguments_spec_list: cite_macro_arguments}));
/* 000403 */ 	});},
/* 000404 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000404 */ 		var kwargs = dict ();
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 				delete kwargs.__kwargtrans__;
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000406 */ 		var __left0__ = __call__ (__call__ (__super__, null, CiteMoreArgsParser, 'parse'), null, self, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000406 */ 		var parsed = __left0__ [0];
/* 000406 */ 		var _ = __left0__ [1];
/* 000407 */ 		var n = (function () {
/* 000407 */ 			var __accu0__ = latex_walker;
/* 000407 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: '(MORE CITATION KEYS)', parsing_state: parsing_state, pos: null, pos_end: null}));
/* 000407 */ 		}) ();
/* 000411 */ 		n.cite_more_parsed_arguments = parsed;
/* 000412 */ 		return tuple ([n, null]);
/* 000412 */ 	});}
/* 000412 */ });
/* 000414 */ export var TackOnMultipleCiteCommandsMacroParser =  __class__ ('TackOnMultipleCiteCommandsMacroParser', [latexnodes_parsers.LatexTackOnInformationFieldMacrosParser], {
/* 000414 */ 	__module__: __name__,
/* 000417 */ 	get __init__ () {return __get__ (this, function (self, citemacronames) {
/* 000417 */ 		if (arguments.length) {
/* 000417 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000417 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000417 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000417 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000417 */ 					switch (__attrib0__) {
/* 000417 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000417 */ 						case 'citemacronames': var citemacronames = __allkwargs0__ [__attrib0__]; break;
/* 000417 */ 					}
/* 000417 */ 				}
/* 000417 */ 			}
/* 000417 */ 		}
/* 000417 */ 		else {
/* 000417 */ 		}
/* 000418 */ 		__call__ (__call__ (__super__, null, TackOnMultipleCiteCommandsMacroParser, '__init__'), null, self, citemacronames, __kwargtrans__ ({allow_multiple: true}));
/* 000418 */ 	});},
/* 000419 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000419 */ 		if (arguments.length) {
/* 000419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 					switch (__attrib0__) {
/* 000419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 		}
/* 000419 */ 		else {
/* 000419 */ 		}
/* 000420 */ 		return __call__ (CiteMoreArgsParser, null);
/* 000420 */ 	});}
/* 000420 */ });
/* 000424 */ export var CiteMacro =  __class__ ('CiteMacro', [FLMMacroSpecBase], {
/* 000424 */ 	__module__: __name__,
/* 000426 */ 	allowed_in_standalone_mode: false,
/* 000428 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000428 */ 		if (arguments.length) {
/* 000428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 					switch (__attrib0__) {
/* 000428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		else {
/* 000428 */ 		}
/* 000431 */ 		var arguments_spec_list = __add__ (__add__ ([], cite_macro_arguments), [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (TackOnMultipleCiteCommandsMacroParser, null, ['cite']), argname: 'cite_more', flm_doc: 'An immediately following \\verbcode+\\cite{…}+ macro call gets appended to the current batch of citations'}))]);
/* 000439 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000439 */ 	});},
/* 000444 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000446 */ 		var node_args = (function () {
/* 000446 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000446 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey', 'cite_more']));
/* 000446 */ 		}) ();
/* 000450 */ 		var optional_cite_extra_nodelist = null;
/* 000451 */ 		if (__t__ ((function () {
/* 000451 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000451 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000451 */ 		}) ())) {
/* 000453 */ 			var optional_cite_extra_nodelist = (function () {
/* 000453 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000453 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000453 */ 			}) ();
/* 000453 */ 		}
/* 000455 */ 		var citekeylist_nodelist = (function () {
/* 000455 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000455 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000455 */ 		}) ();
/* 000468 */ 		var _get_cite_items_from_key_nodelist = function (citekeylist_nodelist, optional_cite_extra_nodelist) {
/* 000468 */ 			if (arguments.length) {
/* 000468 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 						switch (__attrib0__) {
/* 000468 */ 							case 'citekeylist_nodelist': var citekeylist_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 							case 'optional_cite_extra_nodelist': var optional_cite_extra_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						}
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 			else {
/* 000468 */ 			}
/* 000472 */ 			var cite_items = [];
/* 000473 */ 			var __iterable0__ = citekeylist_nodelist;
/* 000473 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000473 */ 				var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000475 */ 				if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000475 */ 					continue;
/* 000475 */ 				}
/* 000478 */ 				var citekey_verbatim = (function () {
/* 000478 */ 					var __accu0__ = citekeygroupnode;
/* 000478 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000478 */ 				}) ();
/* 000479 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000481 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000481 */ 				}
/* 000483 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000485 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000485 */ 				}
/* 000490 */ 				if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000491 */ 					var __left0__ = (function () {
/* 000491 */ 						var __accu0__ = citekey_verbatim;
/* 000491 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000491 */ 					}) ();
/* 000491 */ 					var citation_key_prefix = __left0__ [0];
/* 000491 */ 					var citation_key = __left0__ [1];
/* 000494 */ 					var citation_key_prefix = (function () {
/* 000494 */ 						var __accu0__ = (function () {
/* 000494 */ 							var __accu1__ = citation_key_prefix;
/* 000494 */ 							return __call__ (__accu1__.strip, __accu1__);
/* 000494 */ 						}) ();
/* 000494 */ 						return __call__ (__accu0__.lower, __accu0__);
/* 000494 */ 					}) ();
/* 000494 */ 				}
/* 000495 */ 				else {
/* 000496 */ 					var __left0__ = tuple ([null, citekey_verbatim]);
/* 000496 */ 					var citation_key_prefix = __left0__ [0];
/* 000496 */ 					var citation_key = __left0__ [1];
/* 000496 */ 				}
/* 000498 */ 				(function () {
/* 000498 */ 					var __accu0__ = cite_items;
/* 000498 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'prefix': citation_key_prefix, 'key': citation_key, 'extra': optional_cite_extra_nodelist}));
/* 000498 */ 				}) ();
/* 000498 */ 			}
/* 000507 */ 			if (__t__ (__t__ (optional_cite_extra_nodelist !== null) && __gt__ (__call__ (len, null, cite_items), 1))) {
/* 000508 */ 				var __except0__ = __call__ (ValueError, null, 'When using the syntax \\cite[extra]{citekey}, you can only specify a single citation key.');
/* 000508 */ 				__except0__.__cause__ = null;
/* 000508 */ 				throw __except0__;
/* 000508 */ 			}
/* 000513 */ 			return cite_items;
/* 000513 */ 		};
/* 000516 */ 		var cite_items = __call__ (_get_cite_items_from_key_nodelist, null, citekeylist_nodelist, optional_cite_extra_nodelist);
/* 000521 */ 		var cite_more_macros_nodelist = (function () {
/* 000521 */ 			var __accu0__ = __getitem__ (node_args, 'cite_more');
/* 000521 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000521 */ 		}) ();
/* 000522 */ 		if (__t__ (cite_more_macros_nodelist !== null)) {
/* 000523 */ 			var __iterable0__ = cite_more_macros_nodelist;
/* 000523 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000523 */ 				var gn = __getitem__ (__iterable0__, __index0__);
/* 000524 */ 				assert ((function () {
/* 000524 */ 					var __accu0__ = gn;
/* 000524 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000524 */ 				}) ());
/* 000524 */ 				assert (__eq__ (__getitem__ (gn.delimiters, 0), __add__ ('\\', self.macroname)));
/* 000526 */ 				var gna = __getitem__ (gn.nodelist, 0);
/* 000527 */ 				var parsed_args = gna.cite_more_parsed_arguments;
/* 000527 */ 				assert (parsed_args !== null);
/* 000530 */ 				var more_node_args = (function () {
/* 000530 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({parsed_arguments: parsed_args}));
/* 000530 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000530 */ 				}) ();
/* 000533 */ 				var more_extra_nl = null;
/* 000534 */ 				if (__t__ ((function () {
/* 000534 */ 					var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000534 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000534 */ 				}) ())) {
/* 000535 */ 					var more_extra_nl = (function () {
/* 000535 */ 						var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000535 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000535 */ 					}) ();
/* 000535 */ 				}
/* 000536 */ 				var more_citekeylist_nl = (function () {
/* 000536 */ 					var __accu0__ = __getitem__ (more_node_args, 'citekey');
/* 000536 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000536 */ 				}) ();
/* 000538 */ 				var more_cite_items = __call__ (_get_cite_items_from_key_nodelist, null, more_citekeylist_nl, more_extra_nl);
/* 000541 */ 				(function () {
/* 000541 */ 					var __accu0__ = cite_items;
/* 000541 */ 					return __call__ (__accu0__.extend, __accu0__, more_cite_items);
/* 000541 */ 				}) ();
/* 000541 */ 			}
/* 000541 */ 		}
/* 000544 */ 		node.flmarg_cite_items = cite_items;
/* 000546 */ 		return node;
/* 000546 */ 	});},
/* 000549 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000549 */ 		if (arguments.length) {
/* 000549 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000549 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000549 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000549 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000549 */ 					switch (__attrib0__) {
/* 000549 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 					}
/* 000549 */ 				}
/* 000549 */ 			}
/* 000549 */ 		}
/* 000549 */ 		else {
/* 000549 */ 		}
/* 000551 */ 		var cite_mgr = (function () {
/* 000551 */ 			var __accu0__ = render_context;
/* 000551 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000551 */ 		}) ();
/* 000553 */ 		return (function () {
/* 000553 */ 			var __accu0__ = cite_mgr;
/* 000553 */ 			return __call__ (__accu0__.render_citation_marks, __accu0__, node.flmarg_cite_items, node);
/* 000553 */ 		}) ();
/* 000553 */ 	});}
/* 000553 */ });
/* 000006 */ 
//# sourceMappingURL=flm.feature.cite.map