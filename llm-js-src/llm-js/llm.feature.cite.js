/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:40
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
/* 000006 */ export {LLMMacroSpecBase, LLMArgumentSpec, latexnodes_parsers, EndnoteCategory, ParsedArgumentsInfo, latexnodes_nodes, Feature, fmthelpers, LLMFragment};
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
/* 000160 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_providers(): There are already external refs resolvers set.  They will be replaced.');
/* 000160 */ 			}) ();
/* 000160 */ 		}
/* 000164 */ 		self.external_citations_providers = external_citations_providers;
/* 000164 */ 	});},
/* 000166 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000169 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000169 */ 	});}
/* 000169 */ });
/* 000175 */ export var CiteMacro =  __class__ ('CiteMacro', [LLMMacroSpecBase], {
/* 000175 */ 	__module__: __name__,
/* 000177 */ 	allowed_in_standalone_mode: false,
/* 000179 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000188 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LLMArgumentSpec, null, (function () {
/* 000188 */ 			var __accu0__ = latexnodes_parsers;
/* 000188 */ 			return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000188 */ 		}) (), __kwargtrans__ ({argname: 'citekey'}))]}));
/* 000188 */ 	});},
/* 000196 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000198 */ 		var node_args = (function () {
/* 000198 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000198 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000198 */ 		}) ();
/* 000202 */ 		var optional_cite_extra_nodelist = null;
/* 000203 */ 		if (__t__ ((function () {
/* 000203 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000203 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000203 */ 		}) ())) {
/* 000205 */ 			var optional_cite_extra_nodelist = (function () {
/* 000205 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000205 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000205 */ 			}) ();
/* 000205 */ 		}
/* 000207 */ 		var citekeylist_nodelist = (function () {
/* 000207 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000207 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000207 */ 		}) ();
/* 000209 */ 		node.llmarg_optional_cite_extra_nodelist = optional_cite_extra_nodelist;
/* 000210 */ 		node.llmarg_citekeylist_nodelist = citekeylist_nodelist;
/* 000218 */ 		var cite_items = [];
/* 000219 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000219 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000219 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000221 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000221 */ 				continue;
/* 000221 */ 			}
/* 000224 */ 			var citekey_verbatim = (function () {
/* 000224 */ 				var __accu0__ = citekeygroupnode;
/* 000224 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000224 */ 			}) ();
/* 000225 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000227 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000227 */ 			}
/* 000229 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000231 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000231 */ 			}
/* 000236 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000237 */ 				var __left0__ = (function () {
/* 000237 */ 					var __accu0__ = citekey_verbatim;
/* 000237 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000237 */ 				}) ();
/* 000237 */ 				var citation_key_prefix = __left0__ [0];
/* 000237 */ 				var citation_key = __left0__ [1];
/* 000240 */ 				var citation_key_prefix = (function () {
/* 000240 */ 					var __accu0__ = (function () {
/* 000240 */ 						var __accu1__ = citation_key_prefix;
/* 000240 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000240 */ 					}) ();
/* 000240 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000240 */ 				}) ();
/* 000240 */ 			}
/* 000241 */ 			else {
/* 000242 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000242 */ 				var citation_key_prefix = __left0__ [0];
/* 000242 */ 				var citation_key = __left0__ [1];
/* 000242 */ 			}
/* 000244 */ 			(function () {
/* 000244 */ 				var __accu0__ = cite_items;
/* 000244 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key]));
/* 000244 */ 			}) ();
/* 000244 */ 		}
/* 000246 */ 		node.llmarg_cite_items = cite_items;
/* 000248 */ 		return node;
/* 000248 */ 	});},
/* 000251 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000251 */ 		if (arguments.length) {
/* 000251 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 					switch (__attrib0__) {
/* 000251 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 			}
/* 000251 */ 		}
/* 000251 */ 		else {
/* 000251 */ 		}
/* 000253 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000255 */ 		var optional_cite_extra_nodelist = node.llmarg_optional_cite_extra_nodelist;
/* 000257 */ 		var cite_mgr = (function () {
/* 000257 */ 			var __accu0__ = render_context;
/* 000257 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000257 */ 		}) ();
/* 000258 */ 		var citation_delimiters = cite_mgr.feature.citation_delimiters;
/* 000260 */ 		var resource_info = node.latex_walker.resource_info;
/* 000262 */ 		var s_items = [];
/* 000263 */ 		var __iterable0__ = node.llmarg_cite_items;
/* 000263 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 			var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000265 */ 			var __left0__ = cite_item;
/* 000265 */ 			var citation_key_prefix = __left0__ [0];
/* 000265 */ 			var citation_key = __left0__ [1];
/* 000267 */ 			if (__t__ (cite_mgr === null)) {
/* 000268 */ 				(function () {
/* 000268 */ 					var __accu0__ = s_items;
/* 000269 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000269 */ 						var __accu1__ = fragment_renderer;
/* 000271 */ 						return __call__ (__accu1__.render_text_format, __accu1__, __kwargtrans__ ({text_formats: ['cite'], content: (function () {
/* 000271 */ 							var __accu2__ = fragment_renderer;
/* 000271 */ 							return __call__ (__accu2__.render_value, __accu2__, '[{}:{}]'.format (citation_key_prefix, citation_key));
/* 000271 */ 						}) ()}));
/* 000271 */ 					}) ());
/* 000271 */ 				}) ();
/* 000271 */ 				continue;
/* 000271 */ 			}
/* 000278 */ 			var endnote = null;
/* 000279 */ 			var citation_content_llm = null;
/* 000280 */ 			var show_inline_content_llm = null;
/* 000281 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000282 */ 				var endnote = (function () {
/* 000282 */ 					var __accu0__ = cite_mgr;
/* 000282 */ 					return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000282 */ 				}) ();
/* 000287 */ 				var show_inline_content_llm = endnote.formatted_inner_counter_value_llm;
/* 000287 */ 			}
/* 000288 */ 			else {
/* 000289 */ 				var citation_content_llm = (function () {
/* 000289 */ 					var __accu0__ = cite_mgr;
/* 000289 */ 					return __call__ (__accu0__.get_citation_content_llm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000289 */ 				}) ();
/* 000294 */ 				var show_inline_content_llm = citation_content_llm;
/* 000294 */ 			}
/* 000299 */ 			var cite_content_list_of_nodes = [];
/* 000300 */ 			if (__t__ (__getitem__ (citation_delimiters, 0) !== null)) {
/* 000301 */ 				(function () {
/* 000301 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000302 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000302 */ 						var __accu1__ = node.latex_walker;
/* 000302 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000302 */ 					}) ());
/* 000302 */ 				}) ();
/* 000302 */ 			}
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = cite_content_list_of_nodes;
/* 000311 */ 				return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_llm.nodes));
/* 000311 */ 			}) ();
/* 000312 */ 			if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000313 */ 				(function () {
/* 000313 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000314 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000314 */ 						var __accu1__ = node.latex_walker;
/* 000314 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: cite_mgr.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000314 */ 					}) ());
/* 000314 */ 				}) ();
/* 000323 */ 				(function () {
/* 000323 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000323 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000323 */ 				}) ();
/* 000323 */ 			}
/* 000324 */ 			if (__t__ (__getitem__ (citation_delimiters, 1) !== null)) {
/* 000325 */ 				(function () {
/* 000325 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000326 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000326 */ 						var __accu1__ = node.latex_walker;
/* 000326 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000326 */ 					}) ());
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000335 */ 			var citation_nodes_parsing_state = (function () {
/* 000335 */ 				var __accu0__ = node.parsing_state;
/* 000335 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000335 */ 			}) ();
/* 000339 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000340 */ 				var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000341 */ 				var full_cite_mark = (function () {
/* 000341 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000344 */ 					return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: (function () {
/* 000344 */ 						var __accu1__ = node.latex_walker;
/* 000344 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000344 */ 					}) (), render_context: render_context, annotations: ['endnote', endnote.category_name]}));
/* 000344 */ 				}) ();
/* 000352 */ 				(function () {
/* 000352 */ 					var __accu0__ = s_items;
/* 000352 */ 					return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000352 */ 				}) ();
/* 000352 */ 			}
/* 000354 */ 			else {
/* 000356 */ 				var full_inline_citation = (function () {
/* 000356 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000357 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, (function () {
/* 000357 */ 						var __accu1__ = node.latex_walker;
/* 000357 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000357 */ 					}) (), render_context);
/* 000357 */ 				}) ();
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu0__ = s_items;
/* 000364 */ 					return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000364 */ 				}) ();
/* 000364 */ 			}
/* 000364 */ 		}
/* 000368 */ 		return (function () {
/* 000368 */ 			var __accu0__ = fragment_renderer;
/* 000368 */ 			return __call__ (__accu0__.render_join, __accu0__, s_items);
/* 000368 */ 		}) ();
/* 000368 */ 	});}
/* 000368 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.cite.map