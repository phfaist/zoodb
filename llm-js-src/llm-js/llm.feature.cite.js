/* 000001 */ // Transcrypt'ed from Python, 2022-12-31 14:28:56
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000022 */ import {EndnoteCategory} from './llm.feature.endnotes.js';
/* 000020 */ import {Feature} from './llm.feature._base.js';
/* 000017 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000015 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000014 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000013 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMArgumentSpec, EndnoteCategory, LLMMacroSpecBase, Feature, LLMFragment, latexnodes_parsers, ParsedArgumentsInfo, fmthelpers, latexnodes_nodes};
/* 000001 */ var __name__ = 'llm.feature.cite';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000025 */ export var CitationEndnoteCategory =  __class__ ('CitationEndnoteCategory', [EndnoteCategory], {
/* 000025 */ 	__module__: __name__,
/* 000026 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, citation_delimiters) {
/* 000026 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000026 */ 			var counter_formatter = 'arabic';
/* 000026 */ 		};
/* 000026 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000026 */ 			var citation_delimiters = tuple ([null, null]);
/* 000026 */ 		};
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000028 */ 		self.inner_counter_formatter_fn = counter_formatter;
/* 000029 */ 		if (__t__ (__in__ (self.inner_counter_formatter_fn, fmthelpers.standard_counter_formatters))) {
/* 000030 */ 			self.inner_counter_formatter_fn = __getitem__ (fmthelpers.standard_counter_formatters, self.inner_counter_formatter_fn);
/* 000030 */ 		}
/* 000033 */ 		self.citation_delimiters = citation_delimiters;
/* 000035 */ 		var full_counter_formatter = (function __lambda__ (x) {
/* 000035 */ 			if (arguments.length) {
/* 000035 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 						switch (__attrib0__) {
/* 000035 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						}
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 			else {
/* 000035 */ 			}
/* 000037 */ 			return __add__ (__add__ (__getitem__ (self.citation_delimiters, 0), (function () {
/* 000037 */ 				var __accu0__ = self;
/* 000037 */ 				return __call__ (__accu0__.inner_counter_formatter_fn, __accu0__, x);
/* 000037 */ 			}) ()), __getitem__ (self.citation_delimiters, 1));
/* 000037 */ 		});
/* 000041 */ 		__call__ (__call__ (__super__, null, CitationEndnoteCategory, '__init__'), null, self, 'citation', __kwargtrans__ ({counter_formatter: full_counter_formatter, heading_title: 'References'}));
/* 000041 */ 	});}
/* 000041 */ });
/* 000049 */ export var FeatureExternalPrefixedCitations =  __class__ ('FeatureExternalPrefixedCitations', [Feature], {
/* 000049 */ 	__module__: __name__,
/* 000051 */ 	feature_name: 'citations',
/* 000055 */ 	use_endnotes: true,
/* 000055 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000055 */ 		__module__: __name__,
/* 000056 */ 		get initialize () {return __get__ (this, function (self, use_endnotes) {
/* 000056 */ 			if (typeof use_endnotes == 'undefined' || (use_endnotes != null && use_endnotes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000056 */ 				var use_endnotes = null;
/* 000056 */ 			};
/* 000056 */ 			if (arguments.length) {
/* 000056 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 						switch (__attrib0__) {
/* 000056 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 							case 'use_endnotes': var use_endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						}
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 			else {
/* 000056 */ 			}
/* 000057 */ 			if (__t__ (use_endnotes !== null)) {
/* 000058 */ 				self.use_endnotes = use_endnotes;
/* 000058 */ 			}
/* 000059 */ 			else {
/* 000060 */ 				self.use_endnotes = self.feature.use_endnotes;
/* 000060 */ 			}
/* 000062 */ 			if (__t__ (self.use_endnotes)) {
/* 000063 */ 				var endnotes_mgr = (function () {
/* 000063 */ 					var __accu0__ = self.doc;
/* 000063 */ 					return __call__ (__accu0__.feature_document_manager, __accu0__, 'endnotes');
/* 000063 */ 				}) ();
/* 000064 */ 				self.endnote_category = __call__ (CitationEndnoteCategory, null, __kwargtrans__ ({counter_formatter: self.feature.counter_formatter, citation_delimiters: self.feature.citation_delimiters}));
/* 000068 */ 				(function () {
/* 000068 */ 					var __accu0__ = endnotes_mgr;
/* 000068 */ 					return __call__ (__accu0__.add_endnote_category, __accu0__, self.endnote_category);
/* 000068 */ 				}) ();
/* 000068 */ 			}
/* 000068 */ 		});}
/* 000070 */ 	}),
/* 000070 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000070 */ 		__module__: __name__,
/* 000072 */ 		get initialize () {return __get__ (this, function (self) {
/* 000072 */ 			if (arguments.length) {
/* 000072 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 						switch (__attrib0__) {
/* 000072 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						}
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 			else {
/* 000072 */ 			}
/* 000073 */ 			self.citation_endnotes = dict ({});
/* 000074 */ 			self.use_endnotes = self.feature_document_manager.use_endnotes;
/* 000075 */ 			self.external_citations_providers = self.feature.external_citations_providers;
/* 000075 */ 		});},
/* 000077 */ 		get get_citation_content_llm () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000077 */ 			if (arguments.length) {
/* 000077 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 						switch (__attrib0__) {
/* 000077 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						}
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 			else {
/* 000077 */ 			}
/* 000079 */ 			if (__t__ (self.external_citations_providers === null)) {
/* 000080 */ 				var __except0__ = __call__ (ValueError, null, 'No external citations providers are set!');
/* 000080 */ 				__except0__.__cause__ = null;
/* 000080 */ 				throw __except0__;
/* 000080 */ 			}
/* 000083 */ 			var citation_llm_text = null;
/* 000084 */ 			var __iterable0__ = self.external_citations_providers;
/* 000084 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 				var external_citations_provider = __getitem__ (__iterable0__, __index0__);
/* 000086 */ 				var citation_llm_text = (function () {
/* 000086 */ 					var __accu0__ = external_citations_provider;
/* 000086 */ 					return __call__ (__accu0__.get_citation_full_text_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000086 */ 				}) ();
/* 000090 */ 				if (__t__ (citation_llm_text)) {
/* 000090 */ 					break;
/* 000090 */ 				}
/* 000090 */ 			}
/* 000093 */ 			if (__t__ (__call__ (isinstance, null, citation_llm_text, LLMFragment))) {
/* 000094 */ 				var citation_llm = citation_llm_text;
/* 000094 */ 			}
/* 000095 */ 			else {
/* 000096 */ 				var citation_llm = (function () {
/* 000096 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000096 */ 					return __call__ (__accu0__.make_fragment, __accu0__, citation_llm_text, __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000096 */ 				}) ();
/* 000096 */ 			}
/* 000105 */ 			return citation_llm;
/* 000105 */ 		});},
/* 000108 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000108 */ 			if (arguments.length) {
/* 000108 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 						switch (__attrib0__) {
/* 000108 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						}
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 			else {
/* 000108 */ 			}
/* 000109 */ 			var endnotes_mgr = null;
/* 000110 */ 			if (__t__ (self.use_endnotes)) {
/* 000111 */ 				var endnotes_mgr = (function () {
/* 000111 */ 					var __accu0__ = self.render_context;
/* 000111 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000111 */ 				}) ();
/* 000111 */ 			}
/* 000113 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000114 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000114 */ 			}
/* 000116 */ 			var citation_llm = (function () {
/* 000116 */ 				var __accu0__ = self;
/* 000116 */ 				return __call__ (__accu0__.get_citation_content_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000116 */ 			}) ();
/* 000119 */ 			var endnote = (function () {
/* 000119 */ 				var __accu0__ = endnotes_mgr;
/* 000119 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_llm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000119 */ 			}) ();
/* 000131 */ 			endnote.formatted_inner_counter_value_llm = (function () {
/* 000131 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000132 */ 				return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000132 */ 					var __accu1__ = self.feature_document_manager.endnote_category;
/* 000132 */ 					return __call__ (__accu1__.inner_counter_formatter_fn, __accu1__, endnote.number);
/* 000132 */ 				}) (), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'citation counter (inner)'.format ()}));
/* 000132 */ 			}) ();
/* 000140 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000142 */ 			return endnote;
/* 000142 */ 		});}
/* 000142 */ 	}),
/* 000146 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator) {
/* 000146 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000146 */ 			var counter_formatter = 'arabic';
/* 000146 */ 		};
/* 000146 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000146 */ 			var citation_delimiters = tuple (['[', ']']);
/* 000146 */ 		};
/* 000146 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000146 */ 			var citation_optional_text_separator = '; ';
/* 000146 */ 		};
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000152 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000153 */ 		self.external_citations_providers = external_citations_providers;
/* 000154 */ 		self.counter_formatter = counter_formatter;
/* 000155 */ 		self.citation_delimiters = citation_delimiters;
/* 000156 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000156 */ 	});},
/* 000158 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000159 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000160 */ 			(function () {
/* 000160 */ 				var __accu0__ = logger;
/* 000160 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000160 */ 			}) ();
/* 000160 */ 		}
/* 000164 */ 		self.external_citations_providers = external_citations_providers;
/* 000164 */ 	});},
/* 000166 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000167 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000168 */ 			(function () {
/* 000168 */ 				var __accu0__ = logger;
/* 000168 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000168 */ 			}) ();
/* 000172 */ 			self.external_citaitons_providers = [];
/* 000172 */ 		}
/* 000174 */ 		(function () {
/* 000174 */ 			var __accu0__ = self.external_citaitons_providers;
/* 000174 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000174 */ 		}) ();
/* 000174 */ 	});},
/* 000176 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000179 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000179 */ 	});}
/* 000179 */ });
/* 000185 */ export var CiteMacro =  __class__ ('CiteMacro', [LLMMacroSpecBase], {
/* 000185 */ 	__module__: __name__,
/* 000187 */ 	allowed_in_standalone_mode: false,
/* 000189 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000198 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LLMArgumentSpec, null, (function () {
/* 000198 */ 			var __accu0__ = latexnodes_parsers;
/* 000198 */ 			return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000198 */ 		}) (), __kwargtrans__ ({argname: 'citekey'}))]}));
/* 000198 */ 	});},
/* 000206 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000208 */ 		var node_args = (function () {
/* 000208 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000208 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000208 */ 		}) ();
/* 000212 */ 		var optional_cite_extra_nodelist = null;
/* 000213 */ 		if (__t__ ((function () {
/* 000213 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000213 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000213 */ 		}) ())) {
/* 000215 */ 			var optional_cite_extra_nodelist = (function () {
/* 000215 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000215 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000215 */ 			}) ();
/* 000215 */ 		}
/* 000217 */ 		var citekeylist_nodelist = (function () {
/* 000217 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000217 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000217 */ 		}) ();
/* 000219 */ 		node.llmarg_optional_cite_extra_nodelist = optional_cite_extra_nodelist;
/* 000220 */ 		node.llmarg_citekeylist_nodelist = citekeylist_nodelist;
/* 000228 */ 		var cite_items = [];
/* 000229 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000229 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000229 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000231 */ 				continue;
/* 000231 */ 			}
/* 000234 */ 			var citekey_verbatim = (function () {
/* 000234 */ 				var __accu0__ = citekeygroupnode;
/* 000234 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000234 */ 			}) ();
/* 000235 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000237 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000237 */ 			}
/* 000239 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000241 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000241 */ 			}
/* 000246 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000247 */ 				var __left0__ = (function () {
/* 000247 */ 					var __accu0__ = citekey_verbatim;
/* 000247 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000247 */ 				}) ();
/* 000247 */ 				var citation_key_prefix = __left0__ [0];
/* 000247 */ 				var citation_key = __left0__ [1];
/* 000250 */ 				var citation_key_prefix = (function () {
/* 000250 */ 					var __accu0__ = (function () {
/* 000250 */ 						var __accu1__ = citation_key_prefix;
/* 000250 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000250 */ 					}) ();
/* 000250 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000250 */ 				}) ();
/* 000250 */ 			}
/* 000251 */ 			else {
/* 000252 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000252 */ 				var citation_key_prefix = __left0__ [0];
/* 000252 */ 				var citation_key = __left0__ [1];
/* 000252 */ 			}
/* 000254 */ 			(function () {
/* 000254 */ 				var __accu0__ = cite_items;
/* 000254 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key]));
/* 000254 */ 			}) ();
/* 000254 */ 		}
/* 000256 */ 		node.llmarg_cite_items = cite_items;
/* 000258 */ 		return node;
/* 000258 */ 	});},
/* 000261 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000263 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000265 */ 		var optional_cite_extra_nodelist = node.llmarg_optional_cite_extra_nodelist;
/* 000267 */ 		var cite_mgr = (function () {
/* 000267 */ 			var __accu0__ = render_context;
/* 000267 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000267 */ 		}) ();
/* 000268 */ 		var citation_delimiters = cite_mgr.feature.citation_delimiters;
/* 000270 */ 		var resource_info = node.latex_walker.resource_info;
/* 000272 */ 		var s_items = [];
/* 000273 */ 		var __iterable0__ = node.llmarg_cite_items;
/* 000273 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000273 */ 			var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 			var __left0__ = cite_item;
/* 000275 */ 			var citation_key_prefix = __left0__ [0];
/* 000275 */ 			var citation_key = __left0__ [1];
/* 000277 */ 			if (__t__ (cite_mgr === null)) {
/* 000278 */ 				(function () {
/* 000278 */ 					var __accu0__ = s_items;
/* 000279 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000279 */ 						var __accu1__ = fragment_renderer;
/* 000281 */ 						return __call__ (__accu1__.render_text_format, __accu1__, __kwargtrans__ ({text_formats: ['cite'], content: (function () {
/* 000281 */ 							var __accu2__ = fragment_renderer;
/* 000281 */ 							return __call__ (__accu2__.render_value, __accu2__, '[{}:{}]'.format (citation_key_prefix, citation_key));
/* 000281 */ 						}) ()}));
/* 000281 */ 					}) ());
/* 000281 */ 				}) ();
/* 000281 */ 				continue;
/* 000281 */ 			}
/* 000288 */ 			var endnote = null;
/* 000289 */ 			var citation_content_llm = null;
/* 000290 */ 			var show_inline_content_llm = null;
/* 000291 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000292 */ 				var endnote = (function () {
/* 000292 */ 					var __accu0__ = cite_mgr;
/* 000292 */ 					return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000292 */ 				}) ();
/* 000297 */ 				var show_inline_content_llm = endnote.formatted_inner_counter_value_llm;
/* 000297 */ 			}
/* 000298 */ 			else {
/* 000299 */ 				var citation_content_llm = (function () {
/* 000299 */ 					var __accu0__ = cite_mgr;
/* 000299 */ 					return __call__ (__accu0__.get_citation_content_llm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000299 */ 				}) ();
/* 000304 */ 				var show_inline_content_llm = citation_content_llm;
/* 000304 */ 			}
/* 000309 */ 			var cite_content_list_of_nodes = [];
/* 000310 */ 			if (__t__ (__getitem__ (citation_delimiters, 0) !== null)) {
/* 000311 */ 				(function () {
/* 000311 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000312 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000312 */ 						var __accu1__ = node.latex_walker;
/* 000312 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000312 */ 					}) ());
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000321 */ 			(function () {
/* 000321 */ 				var __accu0__ = cite_content_list_of_nodes;
/* 000321 */ 				return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_llm.nodes));
/* 000321 */ 			}) ();
/* 000322 */ 			if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000323 */ 				(function () {
/* 000323 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000324 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000324 */ 						var __accu1__ = node.latex_walker;
/* 000324 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: cite_mgr.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000324 */ 					}) ());
/* 000324 */ 				}) ();
/* 000333 */ 				(function () {
/* 000333 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000333 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000333 */ 				}) ();
/* 000333 */ 			}
/* 000334 */ 			if (__t__ (__getitem__ (citation_delimiters, 1) !== null)) {
/* 000335 */ 				(function () {
/* 000335 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000336 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000336 */ 						var __accu1__ = node.latex_walker;
/* 000336 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000336 */ 					}) ());
/* 000336 */ 				}) ();
/* 000336 */ 			}
/* 000345 */ 			var citation_nodes_parsing_state = (function () {
/* 000345 */ 				var __accu0__ = node.parsing_state;
/* 000345 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000345 */ 			}) ();
/* 000349 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000350 */ 				var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000351 */ 				var full_cite_mark = (function () {
/* 000351 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000354 */ 					return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: (function () {
/* 000354 */ 						var __accu1__ = node.latex_walker;
/* 000354 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000354 */ 					}) (), render_context: render_context, annotations: ['endnote', endnote.category_name]}));
/* 000354 */ 				}) ();
/* 000362 */ 				(function () {
/* 000362 */ 					var __accu0__ = s_items;
/* 000362 */ 					return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000362 */ 				}) ();
/* 000362 */ 			}
/* 000364 */ 			else {
/* 000366 */ 				var full_inline_citation = (function () {
/* 000366 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000367 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, (function () {
/* 000367 */ 						var __accu1__ = node.latex_walker;
/* 000367 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000367 */ 					}) (), render_context);
/* 000367 */ 				}) ();
/* 000374 */ 				(function () {
/* 000374 */ 					var __accu0__ = s_items;
/* 000374 */ 					return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000374 */ 				}) ();
/* 000374 */ 			}
/* 000374 */ 		}
/* 000378 */ 		return (function () {
/* 000378 */ 			var __accu0__ = fragment_renderer;
/* 000378 */ 			return __call__ (__accu0__.render_join, __accu0__, s_items);
/* 000378 */ 		}) ();
/* 000378 */ 	});}
/* 000378 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.cite.map