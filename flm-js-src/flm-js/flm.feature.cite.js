/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000015 */ var logging = {};
/* 000015 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import {EndnoteCategory} from './flm.feature.endnotes.js';
/* 000031 */ import {Feature} from './flm.feature._base.js';
/* 000029 */ import {Any, Mapping, Sequence} from './flm._typing_helpers.js';
/* 000027 */ import {TypeCounterFormatterInput, TypeCounterFormatterSpecDict, build_counter_formatter} from './flm.counter.js';
/* 000025 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000024 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000023 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000021 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000020 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000019 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000018 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000015 */ import * as __module_logging__ from './logging.js';
/* 000015 */ __nest__ (logging, '', __module_logging__);
/* 000015 */ export {FLMMacroSpecBase, latexnodes_nodes, ParsedArgumentsInfo, build_counter_formatter, Feature, latexnodes_parsers, TypeCounterFormatterSpecDict, macrospec, Sequence, TypeCounterFormatterInput, Mapping, FLMArgumentSpec, Any, EndnoteCategory, FLMFragment};
/* 000001 */ var __name__ = 'flm.feature.cite';
/* 000016 */ export var logger = (function () {
/* 000016 */ 	var __accu0__ = logging;
/* 000016 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000016 */ }) ();
/* 000036 */ var _cite_default_counter_formatter_spec = dict ({'format_num': 'arabic', 'prefix_display': null, 'delimiters': tuple (['[', ']']), 'join_spec': 'compact'});
/* 000046 */ export var FeatureExternalPrefixedCitations =  __class__ ('FeatureExternalPrefixedCitations', [Feature], {
/* 000046 */ 	__module__: __name__,
/* 000054 */ 	feature_name: 'citations',
/* 000055 */ 	feature_title: 'Citations',
/* 000057 */ 	feature_optional_dependencies: ['endnotes'],
/* 000061 */ 	use_endnotes: true,
/* 000061 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000061 */ 		__module__: __name__,
/* 000062 */ 		get initialize () {return __get__ (this, function (self, use_endnotes) {
/* 000062 */ 			if (typeof use_endnotes == 'undefined' || (use_endnotes != null && use_endnotes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000062 */ 				var use_endnotes = null;
/* 000062 */ 			};
/* 000062 */ 			if (arguments.length) {
/* 000062 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 						switch (__attrib0__) {
/* 000062 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 							case 'use_endnotes': var use_endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						}
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 			else {
/* 000062 */ 			}
/* 000063 */ 			if (__t__ (use_endnotes !== null)) {
/* 000064 */ 				self.use_endnotes = use_endnotes;
/* 000064 */ 			}
/* 000065 */ 			else {
/* 000066 */ 				self.use_endnotes = self.feature.use_endnotes;
/* 000066 */ 			}
/* 000068 */ 			if (__t__ (self.use_endnotes)) {
/* 000069 */ 				var endnotes_mgr = (function () {
/* 000069 */ 					var __accu0__ = self.doc;
/* 000069 */ 					return __call__ (__accu0__.feature_document_manager, __accu0__, 'endnotes');
/* 000069 */ 				}) ();
/* 000070 */ 				self.endnote_category = __call__ (EndnoteCategory, null, 'citation', __kwargtrans__ ({counter_formatter: self.feature.counter_formatter, heading_title: self.feature.references_heading_title}));
/* 000076 */ 				(function () {
/* 000076 */ 					var __accu0__ = endnotes_mgr;
/* 000076 */ 					return __call__ (__accu0__.add_endnote_category, __accu0__, self.endnote_category);
/* 000076 */ 				}) ();
/* 000076 */ 			}
/* 000076 */ 		});}
/* 000078 */ 	}),
/* 000078 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000078 */ 		__module__: __name__,
/* 000080 */ 		get initialize () {return __get__ (this, function (self, sort_and_compress) {
/* 000080 */ 			if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 				var sort_and_compress = null;
/* 000080 */ 			};
/* 000080 */ 			if (arguments.length) {
/* 000080 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 						switch (__attrib0__) {
/* 000080 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 							case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						}
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 			else {
/* 000080 */ 			}
/* 000081 */ 			self.citation_endnotes = dict ({});
/* 000082 */ 			self.use_endnotes = self.feature_document_manager.use_endnotes;
/* 000083 */ 			self.external_citations_providers = self.feature.external_citations_providers;
/* 000085 */ 			if (__t__ (sort_and_compress !== null)) {
/* 000086 */ 				self.sort_and_compress = sort_and_compress;
/* 000086 */ 			}
/* 000087 */ 			else {
/* 000088 */ 				self.sort_and_compress = self.feature.sort_and_compress;
/* 000088 */ 			}
/* 000088 */ 		});},
/* 000090 */ 		get get_citation_content_flm () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000090 */ 			if (arguments.length) {
/* 000090 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 						switch (__attrib0__) {
/* 000090 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						}
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 			else {
/* 000090 */ 			}
/* 000092 */ 			if (__t__ (self.external_citations_providers === null)) {
/* 000093 */ 				var __except0__ = __call__ (ValueError, null, 'No external citations providers are set!');
/* 000093 */ 				__except0__.__cause__ = null;
/* 000093 */ 				throw __except0__;
/* 000093 */ 			}
/* 000096 */ 			var citation_flm_text = null;
/* 000097 */ 			var __iterable0__ = self.external_citations_providers;
/* 000097 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000097 */ 				var external_citations_provider = __getitem__ (__iterable0__, __index0__);
/* 000099 */ 				var citation_flm_text = (function () {
/* 000099 */ 					var __accu0__ = external_citations_provider;
/* 000099 */ 					return __call__ (__accu0__.get_citation_full_text_flm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000099 */ 				}) ();
/* 000103 */ 				if (__t__ (citation_flm_text)) {
/* 000103 */ 					break;
/* 000103 */ 				}
/* 000103 */ 			}
/* 000106 */ 			if (__t__ (citation_flm_text === null)) {
/* 000107 */ 				var __except0__ = __call__ (ValueError, null, 'Citation not found: ‘{}:{}’'.format (cite_prefix, cite_key));
/* 000107 */ 				__except0__.__cause__ = null;
/* 000107 */ 				throw __except0__;
/* 000107 */ 			}
/* 000109 */ 			if (__t__ (__call__ (isinstance, null, citation_flm_text, FLMFragment))) {
/* 000110 */ 				var citation_flm = citation_flm_text;
/* 000110 */ 			}
/* 000111 */ 			else {
/* 000112 */ 				var citation_flm = (function () {
/* 000112 */ 					var __accu0__ = self.render_context;
/* 000112 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, citation_flm_text, __kwargtrans__ ({is_block_level: false, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000112 */ 				}) ();
/* 000112 */ 			}
/* 000120 */ 			return citation_flm;
/* 000120 */ 		});},
/* 000123 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000123 */ 			if (arguments.length) {
/* 000123 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 						switch (__attrib0__) {
/* 000123 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						}
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 			else {
/* 000123 */ 			}
/* 000124 */ 			var endnotes_mgr = null;
/* 000125 */ 			if (__t__ (!__t__ ((self.use_endnotes)))) {
/* 000126 */ 				return null;
/* 000126 */ 			}
/* 000128 */ 			var endnotes_mgr = (function () {
/* 000128 */ 				var __accu0__ = self.render_context;
/* 000128 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000128 */ 			}) ();
/* 000130 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000131 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000131 */ 			}
/* 000133 */ 			var citation_flm = (function () {
/* 000133 */ 				var __accu0__ = self;
/* 000133 */ 				return __call__ (__accu0__.get_citation_content_flm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000133 */ 			}) ();
/* 000136 */ 			var endnote = (function () {
/* 000136 */ 				var __accu0__ = endnotes_mgr;
/* 000136 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_flm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000136 */ 			}) ();
/* 000148 */ 			endnote.formatted_inner_counter_value_flm = (function () {
/* 000148 */ 				var __accu0__ = self.render_context;
/* 000149 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, (function () {
/* 000149 */ 					var __accu1__ = self.feature_document_manager.endnote_category.counter_formatter;
/* 000149 */ 					return __call__ (__accu1__.format_flm, __accu1__, endnote.number, __kwargtrans__ ({with_delimiters: false}));
/* 000149 */ 				}) (), __kwargtrans__ ({is_block_level: false, what: 'citation counter (inner)'.format ()}));
/* 000149 */ 			}) ();
/* 000157 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000159 */ 			return endnote;
/* 000159 */ 		});},
/* 000163 */ 		get render_citation_marks () {return __get__ (this, function (self, cite_items, node) {
/* 000163 */ 			if (arguments.length) {
/* 000163 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 						switch (__attrib0__) {
/* 000163 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 							case 'cite_items': var cite_items = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						}
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 			else {
/* 000163 */ 			}
/* 000165 */ 			var render_context = self.render_context;
/* 000166 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000168 */ 			var endnotes_mgr = null;
/* 000169 */ 			if (__t__ ((function () {
/* 000169 */ 				var __accu0__ = render_context;
/* 000169 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'endnotes');
/* 000169 */ 			}) ())) {
/* 000170 */ 				var endnotes_mgr = (function () {
/* 000170 */ 					var __accu0__ = render_context;
/* 000170 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000170 */ 				}) ();
/* 000170 */ 			}
/* 000172 */ 			if (__t__ (__t__ (self.use_endnotes) && __t__ (endnotes_mgr !== null) && endnotes_mgr.inhibit_render_endnote_marks)) {
/* 000175 */ 				return (function () {
/* 000175 */ 					var __accu0__ = fragment_renderer;
/* 000175 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000178 */ 			var resource_info = node.latex_walker.resource_info;
/* 000184 */ 			var citations_compressible = [];
/* 000185 */ 			var citations_manual_render = [];
/* 000186 */ 			var __iterable0__ = cite_items;
/* 000186 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000186 */ 				var cd = __getitem__ (__iterable0__, __index0__);
/* 000187 */ 				var __left0__ = tuple ([__getitem__ (cd, 'prefix'), __getitem__ (cd, 'key'), __getitem__ (cd, 'extra')]);
/* 000187 */ 				var citation_key_prefix = __left0__ [0];
/* 000187 */ 				var citation_key = __left0__ [1];
/* 000187 */ 				var extra = __left0__ [2];
/* 000189 */ 				var endnote = null;
/* 000190 */ 				if (__t__ (self.use_endnotes)) {
/* 000191 */ 					var endnote = (function () {
/* 000191 */ 						var __accu0__ = self;
/* 000191 */ 						return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000191 */ 					}) ();
/* 000191 */ 				}
/* 000197 */ 				if (__t__ (extra === null)) {
/* 000198 */ 					(function () {
/* 000198 */ 						var __accu0__ = citations_compressible;
/* 000198 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000198 */ 					}) ();
/* 000198 */ 				}
/* 000201 */ 				if (__t__ (extra !== null)) {
/* 000202 */ 					(function () {
/* 000202 */ 						var __accu0__ = citations_manual_render;
/* 000202 */ 						return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key, extra, endnote]));
/* 000202 */ 					}) ();
/* 000202 */ 				}
/* 000202 */ 			}
/* 000212 */ 			var s_items = [];
/* 000214 */ 			var delimiters_part_of_link = true;
/* 000216 */ 			if (__t__ (__t__ (self.use_endnotes) && self.sort_and_compress)) {
/* 000218 */ 				var endnote_numbers = (function () {
/* 000218 */ 					var __accu0__ = [];
/* 000218 */ 					var __iterable0__ = citations_compressible;
/* 000218 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000219 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000219 */ 						var key_prefix = __left0__ [0];
/* 000219 */ 						var key = __left0__ [1];
/* 000219 */ 						var extra = __left0__ [2];
/* 000219 */ 						var endnote = __left0__ [3];
/* 000219 */ 						(function () {
/* 000219 */ 							var __accu1__ = __accu0__;
/* 000219 */ 							return __call__ (__accu1__.append, __accu1__, endnote);
/* 000219 */ 						}) ();
/* 000219 */ 					}
/* 000219 */ 					return __accu0__;
/* 000219 */ 				}) ();
/* 000221 */ 				if (__t__ (__gt__ (__call__ (len, null, endnote_numbers), 1))) {
/* 000222 */ 					var delimiters_part_of_link = false;
/* 000222 */ 				}
/* 000224 */ 				var rendered_citations_woextra = (function () {
/* 000224 */ 					var __accu0__ = endnotes_mgr;
/* 000224 */ 					return __call__ (__accu0__.render_endnote_mark_many, __accu0__, endnote_numbers, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000224 */ 				}) ();
/* 000229 */ 				// pass;
/* 000233 */ 				(function () {
/* 000233 */ 					var __accu0__ = s_items;
/* 000233 */ 					return __call__ (__accu0__.append, __accu0__, rendered_citations_woextra);
/* 000233 */ 				}) ();
/* 000233 */ 			}
/* 000234 */ 			else {
/* 000237 */ 				var citations_manual_render = __add__ (citations_compressible, citations_manual_render);
/* 000237 */ 			}
/* 000245 */ 			var citation_delimiters = self.feature.counter_formatter.delimiters;
/* 000247 */ 			var __iterable0__ = citations_manual_render;
/* 000247 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000247 */ 				var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000249 */ 				var __left0__ = cite_item;
/* 000249 */ 				var citation_key_prefix = __left0__ [0];
/* 000249 */ 				var citation_key = __left0__ [1];
/* 000249 */ 				var optional_cite_extra_nodelist = __left0__ [2];
/* 000249 */ 				var endnote = __left0__ [3];
/* 000252 */ 				var citation_content_flm = null;
/* 000253 */ 				var show_inline_content_flm = null;
/* 000254 */ 				if (__t__ (self.use_endnotes)) {
/* 000255 */ 					var show_inline_content_flm = endnote.formatted_inner_counter_value_flm;
/* 000255 */ 				}
/* 000256 */ 				else {
/* 000257 */ 					var citation_content_flm = (function () {
/* 000257 */ 						var __accu0__ = self;
/* 000257 */ 						return __call__ (__accu0__.get_citation_content_flm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000257 */ 					}) ();
/* 000262 */ 					var show_inline_content_flm = citation_content_flm;
/* 000262 */ 				}
/* 000267 */ 				var cite_content_list_of_nodes = [];
/* 000270 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 0) !== null)) {
/* 000271 */ 					(function () {
/* 000271 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000272 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000272 */ 							var __accu1__ = node.latex_walker;
/* 000272 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000272 */ 						}) ());
/* 000272 */ 					}) ();
/* 000272 */ 				}
/* 000282 */ 				(function () {
/* 000282 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000282 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_flm.nodes));
/* 000282 */ 				}) ();
/* 000283 */ 				if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000284 */ 					(function () {
/* 000284 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000285 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000285 */ 							var __accu1__ = node.latex_walker;
/* 000285 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: self.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000285 */ 						}) ());
/* 000285 */ 					}) ();
/* 000294 */ 					(function () {
/* 000294 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000294 */ 						return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000294 */ 					}) ();
/* 000294 */ 				}
/* 000297 */ 				if (__t__ (__t__ (delimiters_part_of_link) && __getitem__ (citation_delimiters, 1) !== null)) {
/* 000298 */ 					(function () {
/* 000298 */ 						var __accu0__ = cite_content_list_of_nodes;
/* 000299 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000299 */ 							var __accu1__ = node.latex_walker;
/* 000299 */ 							return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000299 */ 						}) ());
/* 000299 */ 					}) ();
/* 000299 */ 				}
/* 000308 */ 				var citation_nodes_parsing_state = (function () {
/* 000308 */ 					var __accu0__ = node.parsing_state;
/* 000308 */ 					return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000308 */ 				}) ();
/* 000312 */ 				var display_nodelist = (function () {
/* 000312 */ 					var __accu0__ = node.latex_walker;
/* 000312 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000312 */ 				}) ();
/* 000317 */ 				if (__t__ (self.use_endnotes)) {
/* 000319 */ 					var full_cite_mark = (function () {
/* 000319 */ 						var __accu0__ = endnotes_mgr;
/* 000319 */ 						return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote, display_nodelist, __kwargtrans__ ({wrap_with_semantic_span: false}));
/* 000319 */ 					}) ();
/* 000324 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000325 */ 						var full_cite_mark = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_cite_mark), __getitem__ (citation_delimiters, 1));
/* 000325 */ 					}
/* 000328 */ 					(function () {
/* 000328 */ 						var __accu0__ = s_items;
/* 000328 */ 						return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000328 */ 					}) ();
/* 000328 */ 				}
/* 000329 */ 				else {
/* 000332 */ 					var full_inline_citation = (function () {
/* 000332 */ 						var __accu0__ = fragment_renderer;
/* 000332 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000332 */ 					}) ();
/* 000337 */ 					if (__t__ (!__t__ ((delimiters_part_of_link)))) {
/* 000338 */ 						var full_inline_citation = __add__ (__add__ (__getitem__ (citation_delimiters, 0), full_inline_citation), __getitem__ (citation_delimiters, 1));
/* 000338 */ 					}
/* 000343 */ 					(function () {
/* 000343 */ 						var __accu0__ = s_items;
/* 000343 */ 						return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000343 */ 					}) ();
/* 000343 */ 				}
/* 000343 */ 			}
/* 000345 */ 			return (function () {
/* 000345 */ 				var __accu0__ = fragment_renderer;
/* 000346 */ 				return __call__ (__accu0__.render_semantic_span, __accu0__, (function () {
/* 000346 */ 					var __accu1__ = fragment_renderer;
/* 000346 */ 					return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000346 */ 				}) (), 'citation-marks', render_context);
/* 000346 */ 			}) ();
/* 000346 */ 		});}
/* 000346 */ 	}),
/* 000352 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator, references_heading_title, sort_and_compress) {
/* 000352 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000352 */ 			var counter_formatter = 'arabic';
/* 000352 */ 		};
/* 000352 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000352 */ 			var citation_delimiters = null;
/* 000352 */ 		};
/* 000352 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000352 */ 			var citation_optional_text_separator = '; ';
/* 000352 */ 		};
/* 000352 */ 		if (typeof references_heading_title == 'undefined' || (references_heading_title != null && references_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000352 */ 			var references_heading_title = 'References';
/* 000352 */ 		};
/* 000352 */ 		if (typeof sort_and_compress == 'undefined' || (sort_and_compress != null && sort_and_compress.hasOwnProperty ("__kwargtrans__"))) {;
/* 000352 */ 			var sort_and_compress = true;
/* 000352 */ 		};
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'references_heading_title': var references_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'sort_and_compress': var sort_and_compress = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000381 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000382 */ 		self.external_citations_providers = external_citations_providers;
/* 000383 */ 		var dflt = __call__ (dict, null, _cite_default_counter_formatter_spec);
/* 000384 */ 		if (__t__ (citation_delimiters !== null)) {
/* 000385 */ 			__setitem__ (dflt, 'delimiters', citation_delimiters);
/* 000385 */ 		}
/* 000386 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, dflt, __kwargtrans__ ({counter_formatter_id: 'citation'}));
/* 000392 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000393 */ 		self.references_heading_title = references_heading_title;
/* 000394 */ 		self.sort_and_compress = sort_and_compress;
/* 000394 */ 	});},
/* 000396 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000397 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000398 */ 			(function () {
/* 000398 */ 				var __accu0__ = logger;
/* 000398 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000398 */ 			}) ();
/* 000398 */ 		}
/* 000402 */ 		self.external_citations_providers = external_citations_providers;
/* 000402 */ 	});},
/* 000404 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000405 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000406 */ 			(function () {
/* 000406 */ 				var __accu0__ = logger;
/* 000406 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000406 */ 			}) ();
/* 000410 */ 			self.external_citations_providers = [];
/* 000410 */ 		}
/* 000412 */ 		(function () {
/* 000412 */ 			var __accu0__ = self.external_citations_providers;
/* 000412 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000412 */ 		}) ();
/* 000412 */ 	});},
/* 000414 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000417 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000417 */ 	});}
/* 000417 */ });
/* 000430 */ export var cite_macro_arguments = [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (FLMArgumentSpec, null, (function () {
/* 000430 */ 	var __accu0__ = latexnodes_parsers;
/* 000430 */ 	return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000430 */ }) (), __kwargtrans__ ({argname: 'citekey'}))];
/* 000439 */ export var CiteMoreArgsParser =  __class__ ('CiteMoreArgsParser', [macrospec.LatexArgumentsParser], {
/* 000439 */ 	__module__: __name__,
/* 000440 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000441 */ 		__call__ (__call__ (__super__, null, CiteMoreArgsParser, '__init__'), null, self, __kwargtrans__ ({arguments_spec_list: cite_macro_arguments}));
/* 000441 */ 	});},
/* 000442 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000442 */ 		var kwargs = dict ();
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 				delete kwargs.__kwargtrans__;
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000444 */ 		var __left0__ = __call__ (__call__ (__super__, null, CiteMoreArgsParser, 'parse'), null, self, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000444 */ 		var parsed = __left0__ [0];
/* 000444 */ 		var _ = __left0__ [1];
/* 000445 */ 		var n = (function () {
/* 000445 */ 			var __accu0__ = latex_walker;
/* 000445 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: '(MORE CITATION KEYS)', parsing_state: parsing_state, pos: null, pos_end: null}));
/* 000445 */ 		}) ();
/* 000449 */ 		n.cite_more_parsed_arguments = parsed;
/* 000450 */ 		return tuple ([n, null]);
/* 000450 */ 	});}
/* 000450 */ });
/* 000452 */ export var TackOnMultipleCiteCommandsMacroParser =  __class__ ('TackOnMultipleCiteCommandsMacroParser', [latexnodes_parsers.LatexTackOnInformationFieldMacrosParser], {
/* 000452 */ 	__module__: __name__,
/* 000455 */ 	get __init__ () {return __get__ (this, function (self, citemacronames) {
/* 000455 */ 		if (arguments.length) {
/* 000455 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000455 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000455 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000455 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000455 */ 					switch (__attrib0__) {
/* 000455 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 						case 'citemacronames': var citemacronames = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 					}
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		else {
/* 000455 */ 		}
/* 000456 */ 		__call__ (__call__ (__super__, null, TackOnMultipleCiteCommandsMacroParser, '__init__'), null, self, citemacronames, __kwargtrans__ ({allow_multiple: true}));
/* 000456 */ 	});},
/* 000457 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000458 */ 		return __call__ (CiteMoreArgsParser, null);
/* 000458 */ 	});}
/* 000458 */ });
/* 000462 */ export var CiteMacro =  __class__ ('CiteMacro', [FLMMacroSpecBase], {
/* 000462 */ 	__module__: __name__,
/* 000474 */ 	allowed_in_standalone_mode: false,
/* 000476 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000476 */ 		if (arguments.length) {
/* 000476 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000476 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000476 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000476 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000476 */ 					switch (__attrib0__) {
/* 000476 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 					}
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 		}
/* 000476 */ 		else {
/* 000476 */ 		}
/* 000483 */ 		var arguments_spec_list = __add__ (__add__ ([], cite_macro_arguments), [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (TackOnMultipleCiteCommandsMacroParser, null, ['cite']), argname: 'cite_more', flm_doc: 'An immediately following \\verbcode+\\cite{…}+ macro call gets appended to the current batch of citations'}))]);
/* 000491 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000491 */ 	});},
/* 000496 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000496 */ 		if (arguments.length) {
/* 000496 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000496 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000496 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000496 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000496 */ 					switch (__attrib0__) {
/* 000496 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 					}
/* 000496 */ 				}
/* 000496 */ 			}
/* 000496 */ 		}
/* 000496 */ 		else {
/* 000496 */ 		}
/* 000498 */ 		var node_args = (function () {
/* 000498 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000498 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey', 'cite_more']));
/* 000498 */ 		}) ();
/* 000502 */ 		var optional_cite_extra_nodelist = null;
/* 000503 */ 		if (__t__ ((function () {
/* 000503 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000503 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000503 */ 		}) ())) {
/* 000505 */ 			var optional_cite_extra_nodelist = (function () {
/* 000505 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000505 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000505 */ 			}) ();
/* 000505 */ 		}
/* 000511 */ 		var citekeylist_nodelist = (function () {
/* 000511 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000511 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__, __kwargtrans__ ({unwrap_double_group: false}));
/* 000511 */ 		}) ();
/* 000517 */ 		var _get_cite_items_from_key_nodelist = function (citekeylist_nodelist, optional_cite_extra_nodelist) {
/* 000517 */ 			if (arguments.length) {
/* 000517 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 						switch (__attrib0__) {
/* 000517 */ 							case 'citekeylist_nodelist': var citekeylist_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 							case 'optional_cite_extra_nodelist': var optional_cite_extra_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						}
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 			else {
/* 000517 */ 			}
/* 000521 */ 			var cite_items = [];
/* 000522 */ 			var __iterable0__ = citekeylist_nodelist;
/* 000522 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000522 */ 				var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000524 */ 				if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000524 */ 					continue;
/* 000524 */ 				}
/* 000527 */ 				var citekey_verbatim = (function () {
/* 000527 */ 					var __accu0__ = citekeygroupnode;
/* 000527 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000527 */ 				}) ();
/* 000528 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000530 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000530 */ 				}
/* 000532 */ 				if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000534 */ 					var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000534 */ 				}
/* 000539 */ 				if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000540 */ 					var __left0__ = (function () {
/* 000540 */ 						var __accu0__ = citekey_verbatim;
/* 000540 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000540 */ 					}) ();
/* 000540 */ 					var citation_key_prefix = __left0__ [0];
/* 000540 */ 					var citation_key = __left0__ [1];
/* 000543 */ 					var citation_key_prefix = (function () {
/* 000543 */ 						var __accu0__ = (function () {
/* 000543 */ 							var __accu1__ = citation_key_prefix;
/* 000543 */ 							return __call__ (__accu1__.strip, __accu1__);
/* 000543 */ 						}) ();
/* 000543 */ 						return __call__ (__accu0__.lower, __accu0__);
/* 000543 */ 					}) ();
/* 000543 */ 				}
/* 000544 */ 				else {
/* 000545 */ 					var __left0__ = tuple ([null, citekey_verbatim]);
/* 000545 */ 					var citation_key_prefix = __left0__ [0];
/* 000545 */ 					var citation_key = __left0__ [1];
/* 000545 */ 				}
/* 000547 */ 				(function () {
/* 000547 */ 					var __accu0__ = cite_items;
/* 000547 */ 					return __call__ (__accu0__.append, __accu0__, dict ({'prefix': citation_key_prefix, 'key': citation_key, 'extra': optional_cite_extra_nodelist}));
/* 000547 */ 				}) ();
/* 000547 */ 			}
/* 000556 */ 			if (__t__ (__t__ (optional_cite_extra_nodelist !== null) && __gt__ (__call__ (len, null, cite_items), 1))) {
/* 000557 */ 				var __except0__ = __call__ (ValueError, null, 'When using the syntax \\cite[extra]{citekey}, you can only specify a single citation key.');
/* 000557 */ 				__except0__.__cause__ = null;
/* 000557 */ 				throw __except0__;
/* 000557 */ 			}
/* 000562 */ 			return cite_items;
/* 000562 */ 		};
/* 000565 */ 		var cite_items = __call__ (_get_cite_items_from_key_nodelist, null, citekeylist_nodelist, optional_cite_extra_nodelist);
/* 000570 */ 		var cite_more_macros_nodelist = (function () {
/* 000570 */ 			var __accu0__ = __getitem__ (node_args, 'cite_more');
/* 000570 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__, __kwargtrans__ ({unwrap_double_group: false}));
/* 000570 */ 		}) ();
/* 000573 */ 		if (__t__ (cite_more_macros_nodelist !== null)) {
/* 000574 */ 			var __iterable0__ = cite_more_macros_nodelist;
/* 000574 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000574 */ 				var gn = __getitem__ (__iterable0__, __index0__);
/* 000575 */ 				assert ((function () {
/* 000575 */ 					var __accu0__ = gn;
/* 000575 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexGroupNode);
/* 000575 */ 				}) ());
/* 000575 */ 				assert (__eq__ (__getitem__ (gn.delimiters, 0), __add__ ('\\', self.macroname)));
/* 000577 */ 				var gna = __getitem__ (gn.nodelist, 0);
/* 000578 */ 				var parsed_args = gna.cite_more_parsed_arguments;
/* 000578 */ 				assert (parsed_args !== null);
/* 000581 */ 				var more_node_args = (function () {
/* 000581 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({parsed_arguments: parsed_args}));
/* 000581 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000581 */ 				}) ();
/* 000584 */ 				var more_extra_nl = null;
/* 000585 */ 				if (__t__ ((function () {
/* 000585 */ 					var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000585 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000585 */ 				}) ())) {
/* 000586 */ 					var more_extra_nl = (function () {
/* 000586 */ 						var __accu0__ = __getitem__ (more_node_args, 'cite_pre_text');
/* 000586 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000586 */ 					}) ();
/* 000586 */ 				}
/* 000587 */ 				var more_citekeylist_nl = (function () {
/* 000587 */ 					var __accu0__ = __getitem__ (more_node_args, 'citekey');
/* 000587 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__, __kwargtrans__ ({unwrap_double_group: false}));
/* 000587 */ 				}) ();
/* 000591 */ 				var more_cite_items = __call__ (_get_cite_items_from_key_nodelist, null, more_citekeylist_nl, more_extra_nl);
/* 000594 */ 				(function () {
/* 000594 */ 					var __accu0__ = cite_items;
/* 000594 */ 					return __call__ (__accu0__.extend, __accu0__, more_cite_items);
/* 000594 */ 				}) ();
/* 000594 */ 			}
/* 000594 */ 		}
/* 000597 */ 		node.flmarg_cite_items = cite_items;
/* 000599 */ 		return node;
/* 000599 */ 	});},
/* 000602 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000602 */ 		if (arguments.length) {
/* 000602 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000602 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000602 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000602 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000602 */ 					switch (__attrib0__) {
/* 000602 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 					}
/* 000602 */ 				}
/* 000602 */ 			}
/* 000602 */ 		}
/* 000602 */ 		else {
/* 000602 */ 		}
/* 000604 */ 		var cite_mgr = (function () {
/* 000604 */ 			var __accu0__ = render_context;
/* 000604 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000604 */ 		}) ();
/* 000606 */ 		return (function () {
/* 000606 */ 			var __accu0__ = cite_mgr;
/* 000606 */ 			return __call__ (__accu0__.render_citation_marks, __accu0__, node.flmarg_cite_items, node);
/* 000606 */ 		}) ();
/* 000606 */ 	});},
/* 000611 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000611 */ 		if (arguments.length) {
/* 000611 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000611 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000611 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000611 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000611 */ 					switch (__attrib0__) {
/* 000611 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000611 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000611 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000611 */ 					}
/* 000611 */ 				}
/* 000611 */ 			}
/* 000611 */ 		}
/* 000611 */ 		else {
/* 000611 */ 		}
/* 000614 */ 		var cite_items = node.flmarg_cite_items;
/* 000616 */ 		if (__t__ (!__t__ ((__call__ (len, null, cite_items))))) {
/* 000617 */ 			return '';
/* 000617 */ 		}
/* 000619 */ 		var recopt_cite = (function () {
/* 000619 */ 			var __accu0__ = recomposer;
/* 000619 */ 			return __call__ (__accu0__.get_options, __accu0__, 'cite');
/* 000619 */ 		}) ();
/* 000620 */ 		// pass;
/* 000627 */ 		var use_safe_labels = (function () {
/* 000627 */ 			var __accu0__ = recopt_cite;
/* 000627 */ 			return __call__ (__accu0__.py_get, __accu0__, 'safe_labels', false);
/* 000627 */ 		}) ();
/* 000630 */ 		var cite_bare = [];
/* 000631 */ 		var cite_extras = [];
/* 000632 */ 		var __iterable0__ = cite_items;
/* 000632 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000632 */ 			var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000633 */ 			var extra = __getitem__ (cite_item, 'extra');
/* 000635 */ 			var cite_prefix = __getitem__ (cite_item, 'prefix');
/* 000636 */ 			var cite_key = __getitem__ (cite_item, 'key');
/* 000637 */ 			var cite_label = '{}:{}'.format (cite_prefix, cite_key);
/* 000639 */ 			if (__t__ (use_safe_labels)) {
/* 000640 */ 				var safe_info = (function () {
/* 000640 */ 					var __accu0__ = recomposer;
/* 000640 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'cite', cite_prefix, cite_key, node.latex_walker.resource_info);
/* 000640 */ 				}) ();
/* 000644 */ 				var cite_label = __getitem__ (safe_info, 'safe_label');
/* 000644 */ 			}
/* 000647 */ 			if (__t__ (__t__ (extra !== null) && __t__ (extra) && __t__ (extra.nodelist !== null) && __call__ (len, null, extra.nodelist))) {
/* 000648 */ 				(function () {
/* 000648 */ 					var __accu0__ = cite_extras;
/* 000648 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([cite_label, extra]));
/* 000648 */ 				}) ();
/* 000648 */ 			}
/* 000649 */ 			else {
/* 000650 */ 				(function () {
/* 000650 */ 					var __accu0__ = cite_bare;
/* 000650 */ 					return __call__ (__accu0__.append, __accu0__, cite_label);
/* 000650 */ 				}) ();
/* 000650 */ 			}
/* 000650 */ 		}
/* 000652 */ 		var s = '\\NoCaseChange{';
/* 000654 */ 		if (__t__ (__call__ (len, null, cite_bare))) {
/* 000655 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\protect\\cite{', (function () {
/* 000655 */ 				var __accu0__ = ',';
/* 000655 */ 				return __call__ (__accu0__.join, __accu0__, cite_bare);
/* 000655 */ 			}) ()), '}'));
/* 000655 */ 		}
/* 000657 */ 		if (__t__ (__call__ (len, null, cite_extras))) {
/* 000658 */ 			var __iterable0__ = cite_extras;
/* 000658 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000658 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000658 */ 				var safe_label = __left0__ [0];
/* 000658 */ 				var extra = __left0__ [1];
/* 000659 */ 				var extra_latex_info = (function () {
/* 000659 */ 					var __accu0__ = recomposer;
/* 000659 */ 					return __call__ (__accu0__.subrecompose, __accu0__, extra);
/* 000659 */ 				}) ();
/* 000660 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (__add__ (__add__ ('\\protect\\cite[{', extra_latex_info), '}]{'), safe_label), '}'));
/* 000660 */ 			}
/* 000660 */ 		}
/* 000665 */ 		var s = __call__ (__iadd__, null, s, '}');
/* 000666 */ 		return s;
/* 000666 */ 	});}
/* 000666 */ });
/* 000015 */ 
//# sourceMappingURL=flm.feature.cite.map