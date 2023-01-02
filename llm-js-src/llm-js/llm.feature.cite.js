/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:06:33
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
/* 000006 */ export {LLMArgumentSpec, fmthelpers, EndnoteCategory, latexnodes_parsers, ParsedArgumentsInfo, Feature, LLMFragment, LLMMacroSpecBase, latexnodes_nodes};
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
/* 000093 */ 			if (__t__ (citation_llm_text === null)) {
/* 000094 */ 				var __except0__ = __call__ (ValueError, null, 'Citation not found: ‘{}:{}’'.format (cite_prefix, cite_key));
/* 000094 */ 				__except0__.__cause__ = null;
/* 000094 */ 				throw __except0__;
/* 000094 */ 			}
/* 000096 */ 			if (__t__ (__call__ (isinstance, null, citation_llm_text, LLMFragment))) {
/* 000097 */ 				var citation_llm = citation_llm_text;
/* 000097 */ 			}
/* 000098 */ 			else {
/* 000099 */ 				var citation_llm = (function () {
/* 000099 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000099 */ 					return __call__ (__accu0__.make_fragment, __accu0__, citation_llm_text, __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000099 */ 				}) ();
/* 000099 */ 			}
/* 000108 */ 			return citation_llm;
/* 000108 */ 		});},
/* 000111 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000111 */ 			if (arguments.length) {
/* 000111 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 						switch (__attrib0__) {
/* 000111 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						}
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 			else {
/* 000111 */ 			}
/* 000112 */ 			var endnotes_mgr = null;
/* 000113 */ 			if (__t__ (self.use_endnotes)) {
/* 000114 */ 				var endnotes_mgr = (function () {
/* 000114 */ 					var __accu0__ = self.render_context;
/* 000114 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000114 */ 				}) ();
/* 000114 */ 			}
/* 000116 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000117 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000117 */ 			}
/* 000119 */ 			var citation_llm = (function () {
/* 000119 */ 				var __accu0__ = self;
/* 000119 */ 				return __call__ (__accu0__.get_citation_content_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000119 */ 			}) ();
/* 000122 */ 			var endnote = (function () {
/* 000122 */ 				var __accu0__ = endnotes_mgr;
/* 000122 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_llm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000122 */ 			}) ();
/* 000134 */ 			endnote.formatted_inner_counter_value_llm = (function () {
/* 000134 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000135 */ 				return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000135 */ 					var __accu1__ = self.feature_document_manager.endnote_category;
/* 000135 */ 					return __call__ (__accu1__.inner_counter_formatter_fn, __accu1__, endnote.number);
/* 000135 */ 				}) (), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'citation counter (inner)'.format ()}));
/* 000135 */ 			}) ();
/* 000143 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000145 */ 			return endnote;
/* 000145 */ 		});}
/* 000145 */ 	}),
/* 000149 */ 	get __init__ () {return __get__ (this, function (self, external_citations_providers, counter_formatter, citation_delimiters, citation_optional_text_separator) {
/* 000149 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000149 */ 			var counter_formatter = 'arabic';
/* 000149 */ 		};
/* 000149 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000149 */ 			var citation_delimiters = tuple (['[', ']']);
/* 000149 */ 		};
/* 000149 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000149 */ 			var citation_optional_text_separator = '; ';
/* 000149 */ 		};
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000155 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000156 */ 		self.external_citations_providers = external_citations_providers;
/* 000157 */ 		self.counter_formatter = counter_formatter;
/* 000158 */ 		self.citation_delimiters = citation_delimiters;
/* 000159 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000159 */ 	});},
/* 000161 */ 	get set_external_citations_providers () {return __get__ (this, function (self, external_citations_providers) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'external_citations_providers': var external_citations_providers = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		if (__t__ (self.external_citations_providers !== null)) {
/* 000163 */ 			(function () {
/* 000163 */ 				var __accu0__ = logger;
/* 000163 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external citation providers set.  They will be replaced.');
/* 000163 */ 			}) ();
/* 000163 */ 		}
/* 000167 */ 		self.external_citations_providers = external_citations_providers;
/* 000167 */ 	});},
/* 000169 */ 	get add_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		if (__t__ (self.external_citations_providers === null)) {
/* 000171 */ 			(function () {
/* 000171 */ 				var __accu0__ = logger;
/* 000171 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.add_external_citations_provider(): External citations provider list was not initialized, creating an empty list.');
/* 000171 */ 			}) ();
/* 000175 */ 			self.external_citations_providers = [];
/* 000175 */ 		}
/* 000177 */ 		(function () {
/* 000177 */ 			var __accu0__ = self.external_citations_providers;
/* 000177 */ 			return __call__ (__accu0__.append, __accu0__, external_citations_provider);
/* 000177 */ 		}) ();
/* 000177 */ 	});},
/* 000179 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000182 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000182 */ 	});}
/* 000182 */ });
/* 000188 */ export var CiteMacro =  __class__ ('CiteMacro', [LLMMacroSpecBase], {
/* 000188 */ 	__module__: __name__,
/* 000190 */ 	allowed_in_standalone_mode: false,
/* 000192 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000201 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LLMArgumentSpec, null, (function () {
/* 000201 */ 			var __accu0__ = latexnodes_parsers;
/* 000201 */ 			return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000201 */ 		}) (), __kwargtrans__ ({argname: 'citekey'}))]}));
/* 000201 */ 	});},
/* 000209 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000211 */ 		var node_args = (function () {
/* 000211 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000211 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000211 */ 		}) ();
/* 000215 */ 		var optional_cite_extra_nodelist = null;
/* 000216 */ 		if (__t__ ((function () {
/* 000216 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000216 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000216 */ 		}) ())) {
/* 000218 */ 			var optional_cite_extra_nodelist = (function () {
/* 000218 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000218 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000218 */ 			}) ();
/* 000218 */ 		}
/* 000220 */ 		var citekeylist_nodelist = (function () {
/* 000220 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000220 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000220 */ 		}) ();
/* 000222 */ 		node.llmarg_optional_cite_extra_nodelist = optional_cite_extra_nodelist;
/* 000223 */ 		node.llmarg_citekeylist_nodelist = citekeylist_nodelist;
/* 000231 */ 		var cite_items = [];
/* 000232 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000232 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000232 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000234 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000234 */ 				continue;
/* 000234 */ 			}
/* 000237 */ 			var citekey_verbatim = (function () {
/* 000237 */ 				var __accu0__ = citekeygroupnode;
/* 000237 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000237 */ 			}) ();
/* 000238 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000240 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000240 */ 			}
/* 000242 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000244 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000244 */ 			}
/* 000249 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000250 */ 				var __left0__ = (function () {
/* 000250 */ 					var __accu0__ = citekey_verbatim;
/* 000250 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000250 */ 				}) ();
/* 000250 */ 				var citation_key_prefix = __left0__ [0];
/* 000250 */ 				var citation_key = __left0__ [1];
/* 000253 */ 				var citation_key_prefix = (function () {
/* 000253 */ 					var __accu0__ = (function () {
/* 000253 */ 						var __accu1__ = citation_key_prefix;
/* 000253 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000253 */ 					}) ();
/* 000253 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000253 */ 				}) ();
/* 000253 */ 			}
/* 000254 */ 			else {
/* 000255 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000255 */ 				var citation_key_prefix = __left0__ [0];
/* 000255 */ 				var citation_key = __left0__ [1];
/* 000255 */ 			}
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = cite_items;
/* 000257 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key]));
/* 000257 */ 			}) ();
/* 000257 */ 		}
/* 000259 */ 		node.llmarg_cite_items = cite_items;
/* 000261 */ 		return node;
/* 000261 */ 	});},
/* 000264 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000266 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000268 */ 		var optional_cite_extra_nodelist = node.llmarg_optional_cite_extra_nodelist;
/* 000270 */ 		var cite_mgr = (function () {
/* 000270 */ 			var __accu0__ = render_context;
/* 000270 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000270 */ 		}) ();
/* 000271 */ 		var citation_delimiters = cite_mgr.feature.citation_delimiters;
/* 000273 */ 		var resource_info = node.latex_walker.resource_info;
/* 000275 */ 		var s_items = [];
/* 000276 */ 		var __iterable0__ = node.llmarg_cite_items;
/* 000276 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 			var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000278 */ 			var __left0__ = cite_item;
/* 000278 */ 			var citation_key_prefix = __left0__ [0];
/* 000278 */ 			var citation_key = __left0__ [1];
/* 000280 */ 			if (__t__ (cite_mgr === null)) {
/* 000281 */ 				(function () {
/* 000281 */ 					var __accu0__ = s_items;
/* 000282 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000282 */ 						var __accu1__ = fragment_renderer;
/* 000284 */ 						return __call__ (__accu1__.render_text_format, __accu1__, __kwargtrans__ ({text_formats: ['cite'], content: (function () {
/* 000284 */ 							var __accu2__ = fragment_renderer;
/* 000284 */ 							return __call__ (__accu2__.render_value, __accu2__, '[{}:{}]'.format (citation_key_prefix, citation_key));
/* 000284 */ 						}) ()}));
/* 000284 */ 					}) ());
/* 000284 */ 				}) ();
/* 000284 */ 				continue;
/* 000284 */ 			}
/* 000291 */ 			var endnote = null;
/* 000292 */ 			var citation_content_llm = null;
/* 000293 */ 			var show_inline_content_llm = null;
/* 000294 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000295 */ 				var endnote = (function () {
/* 000295 */ 					var __accu0__ = cite_mgr;
/* 000295 */ 					return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000295 */ 				}) ();
/* 000300 */ 				var show_inline_content_llm = endnote.formatted_inner_counter_value_llm;
/* 000300 */ 			}
/* 000301 */ 			else {
/* 000302 */ 				var citation_content_llm = (function () {
/* 000302 */ 					var __accu0__ = cite_mgr;
/* 000302 */ 					return __call__ (__accu0__.get_citation_content_llm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000302 */ 				}) ();
/* 000307 */ 				var show_inline_content_llm = citation_content_llm;
/* 000307 */ 			}
/* 000312 */ 			var cite_content_list_of_nodes = [];
/* 000313 */ 			if (__t__ (__getitem__ (citation_delimiters, 0) !== null)) {
/* 000314 */ 				(function () {
/* 000314 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000315 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000315 */ 						var __accu1__ = node.latex_walker;
/* 000315 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000315 */ 					}) ());
/* 000315 */ 				}) ();
/* 000315 */ 			}
/* 000324 */ 			(function () {
/* 000324 */ 				var __accu0__ = cite_content_list_of_nodes;
/* 000324 */ 				return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_llm.nodes));
/* 000324 */ 			}) ();
/* 000325 */ 			if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000326 */ 				(function () {
/* 000326 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000327 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000327 */ 						var __accu1__ = node.latex_walker;
/* 000327 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: cite_mgr.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000327 */ 					}) ());
/* 000327 */ 				}) ();
/* 000336 */ 				(function () {
/* 000336 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000336 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000336 */ 				}) ();
/* 000336 */ 			}
/* 000337 */ 			if (__t__ (__getitem__ (citation_delimiters, 1) !== null)) {
/* 000338 */ 				(function () {
/* 000338 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000339 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000339 */ 						var __accu1__ = node.latex_walker;
/* 000339 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000339 */ 					}) ());
/* 000339 */ 				}) ();
/* 000339 */ 			}
/* 000348 */ 			var citation_nodes_parsing_state = (function () {
/* 000348 */ 				var __accu0__ = node.parsing_state;
/* 000348 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000348 */ 			}) ();
/* 000352 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000353 */ 				var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000354 */ 				var full_cite_mark = (function () {
/* 000354 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000357 */ 					return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: (function () {
/* 000357 */ 						var __accu1__ = node.latex_walker;
/* 000357 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000357 */ 					}) (), render_context: render_context, annotations: ['endnote', endnote.category_name]}));
/* 000357 */ 				}) ();
/* 000365 */ 				(function () {
/* 000365 */ 					var __accu0__ = s_items;
/* 000365 */ 					return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000365 */ 				}) ();
/* 000365 */ 			}
/* 000367 */ 			else {
/* 000369 */ 				var full_inline_citation = (function () {
/* 000369 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000370 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, (function () {
/* 000370 */ 						var __accu1__ = node.latex_walker;
/* 000370 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000370 */ 					}) (), render_context);
/* 000370 */ 				}) ();
/* 000377 */ 				(function () {
/* 000377 */ 					var __accu0__ = s_items;
/* 000377 */ 					return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000377 */ 				}) ();
/* 000377 */ 			}
/* 000377 */ 		}
/* 000381 */ 		return (function () {
/* 000381 */ 			var __accu0__ = fragment_renderer;
/* 000381 */ 			return __call__ (__accu0__.render_join, __accu0__, s_items);
/* 000381 */ 		}) ();
/* 000381 */ 	});}
/* 000381 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.cite.map