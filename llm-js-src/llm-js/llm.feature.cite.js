/* 000001 */ // Transcrypt'ed from Python, 2022-12-10 23:30:56
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000021 */ import {EndnoteCategory} from './llm.feature.endnotes.js';
/* 000019 */ import {Feature} from './llm.feature._base.js';
/* 000016 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000014 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000013 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_parsers, Feature, latexnodes_nodes, ParsedArgumentsInfo, fmthelpers, EndnoteCategory, LLMArgumentSpec, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.cite';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000024 */ export var CitationEndnoteCategory =  __class__ ('CitationEndnoteCategory', [EndnoteCategory], {
/* 000024 */ 	__module__: __name__,
/* 000025 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, citation_delimiters) {
/* 000025 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000025 */ 			var counter_formatter = 'arabic';
/* 000025 */ 		};
/* 000025 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000025 */ 			var citation_delimiters = tuple ([null, null]);
/* 000025 */ 		};
/* 000025 */ 		if (arguments.length) {
/* 000025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 					switch (__attrib0__) {
/* 000025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 					}
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 		}
/* 000027 */ 		self.inner_counter_formatter_fn = counter_formatter;
/* 000028 */ 		if (__t__ (__in__ (self.inner_counter_formatter_fn, fmthelpers.standard_counter_formatters))) {
/* 000029 */ 			self.inner_counter_formatter_fn = __getitem__ (fmthelpers.standard_counter_formatters, self.inner_counter_formatter_fn);
/* 000029 */ 		}
/* 000032 */ 		self.citation_delimiters = citation_delimiters;
/* 000034 */ 		var full_counter_formatter = (function __lambda__ (x) {
/* 000034 */ 			if (arguments.length) {
/* 000034 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 						switch (__attrib0__) {
/* 000034 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						}
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 			else {
/* 000034 */ 			}
/* 000036 */ 			return __add__ (__add__ (__getitem__ (self.citation_delimiters, 0), (function () {
/* 000036 */ 				var __accu0__ = self;
/* 000036 */ 				return __call__ (__accu0__.inner_counter_formatter_fn, __accu0__, x);
/* 000036 */ 			}) ()), __getitem__ (self.citation_delimiters, 1));
/* 000036 */ 		});
/* 000040 */ 		__call__ (__call__ (__super__, null, CitationEndnoteCategory, '__init__'), null, self, 'citation', __kwargtrans__ ({counter_formatter: full_counter_formatter, heading_title: 'References'}));
/* 000040 */ 	});}
/* 000040 */ });
/* 000048 */ export var FeatureExternalPrefixedCitations =  __class__ ('FeatureExternalPrefixedCitations', [Feature], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	feature_name: 'citations',
/* 000054 */ 	use_endnotes: true,
/* 000054 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000054 */ 		__module__: __name__,
/* 000055 */ 		get initialize () {return __get__ (this, function (self, use_endnotes) {
/* 000055 */ 			if (typeof use_endnotes == 'undefined' || (use_endnotes != null && use_endnotes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000055 */ 				var use_endnotes = null;
/* 000055 */ 			};
/* 000055 */ 			if (arguments.length) {
/* 000055 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 						switch (__attrib0__) {
/* 000055 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 							case 'use_endnotes': var use_endnotes = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						}
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 			else {
/* 000055 */ 			}
/* 000056 */ 			if (__t__ (use_endnotes !== null)) {
/* 000057 */ 				self.use_endnotes = use_endnotes;
/* 000057 */ 			}
/* 000058 */ 			else {
/* 000059 */ 				self.use_endnotes = self.feature.use_endnotes;
/* 000059 */ 			}
/* 000061 */ 			if (__t__ (self.use_endnotes)) {
/* 000062 */ 				var endnotes_mgr = (function () {
/* 000062 */ 					var __accu0__ = self.doc;
/* 000062 */ 					return __call__ (__accu0__.feature_document_manager, __accu0__, 'endnotes');
/* 000062 */ 				}) ();
/* 000063 */ 				self.endnote_category = __call__ (CitationEndnoteCategory, null, __kwargtrans__ ({counter_formatter: self.feature.counter_formatter, citation_delimiters: self.feature.citation_delimiters}));
/* 000067 */ 				(function () {
/* 000067 */ 					var __accu0__ = endnotes_mgr;
/* 000067 */ 					return __call__ (__accu0__.add_endnote_category, __accu0__, self.endnote_category);
/* 000067 */ 				}) ();
/* 000067 */ 			}
/* 000067 */ 		});}
/* 000069 */ 	}),
/* 000069 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000069 */ 		__module__: __name__,
/* 000071 */ 		get initialize () {return __get__ (this, function (self) {
/* 000071 */ 			if (arguments.length) {
/* 000071 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 						switch (__attrib0__) {
/* 000071 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						}
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 			else {
/* 000071 */ 			}
/* 000072 */ 			self.citation_endnotes = dict ({});
/* 000073 */ 			self.use_endnotes = self.feature_document_manager.use_endnotes;
/* 000074 */ 			self.external_citations_provider = self.feature.external_citations_provider;
/* 000074 */ 		});},
/* 000076 */ 		get get_citation_content_llm () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000076 */ 			if (arguments.length) {
/* 000076 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 						switch (__attrib0__) {
/* 000076 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						}
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 			else {
/* 000076 */ 			}
/* 000080 */ 			var citation_llm_text = (function () {
/* 000080 */ 				var __accu0__ = self.external_citations_provider;
/* 000080 */ 				return __call__ (__accu0__.get_citation_full_text_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000080 */ 			}) ();
/* 000085 */ 			var citation_llm = (function () {
/* 000085 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000085 */ 				return __call__ (__accu0__.make_fragment, __accu0__, citation_llm_text, __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Citation text for {}:{}'.format (cite_prefix, cite_key)}));
/* 000085 */ 			}) ();
/* 000094 */ 			return citation_llm;
/* 000094 */ 		});},
/* 000097 */ 		get get_citation_endnote () {return __get__ (this, function (self, cite_prefix, cite_key, resource_info) {
/* 000097 */ 			if (arguments.length) {
/* 000097 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 						switch (__attrib0__) {
/* 000097 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 							case 'cite_prefix': var cite_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 							case 'cite_key': var cite_key = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						}
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 			else {
/* 000097 */ 			}
/* 000098 */ 			var endnotes_mgr = null;
/* 000099 */ 			if (__t__ (self.use_endnotes)) {
/* 000100 */ 				var endnotes_mgr = (function () {
/* 000100 */ 					var __accu0__ = self.render_context;
/* 000100 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000100 */ 				}) ();
/* 000100 */ 			}
/* 000102 */ 			if (__t__ (__in__ (tuple ([cite_prefix, cite_key]), self.citation_endnotes))) {
/* 000103 */ 				return self.citation_endnotes.__getitem__ ([cite_prefix, cite_key]);
/* 000103 */ 			}
/* 000105 */ 			var citation_llm = (function () {
/* 000105 */ 				var __accu0__ = self;
/* 000105 */ 				return __call__ (__accu0__.get_citation_content_llm, __accu0__, cite_prefix, cite_key, resource_info);
/* 000105 */ 			}) ();
/* 000108 */ 			var endnote = (function () {
/* 000108 */ 				var __accu0__ = endnotes_mgr;
/* 000108 */ 				return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: 'citation', content_nodelist: citation_llm.nodes, ref_label_prefix: cite_prefix, ref_label: cite_key, node: tuple ([cite_prefix, cite_key])}));
/* 000108 */ 			}) ();
/* 000120 */ 			endnote.formatted_inner_counter_value_llm = (function () {
/* 000120 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000121 */ 				return __call__ (__accu0__.make_fragment, __accu0__, (function () {
/* 000121 */ 					var __accu1__ = self.feature_document_manager.endnote_category;
/* 000121 */ 					return __call__ (__accu1__.inner_counter_formatter_fn, __accu1__, endnote.number);
/* 000121 */ 				}) (), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'citation counter (inner)'.format ()}));
/* 000121 */ 			}) ();
/* 000129 */ 			self.citation_endnotes.__setitem__ ([cite_prefix, cite_key], endnote);
/* 000131 */ 			return endnote;
/* 000131 */ 		});}
/* 000131 */ 	}),
/* 000135 */ 	get __init__ () {return __get__ (this, function (self, external_citations_provider, counter_formatter, citation_delimiters, citation_optional_text_separator) {
/* 000135 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 			var counter_formatter = 'arabic';
/* 000135 */ 		};
/* 000135 */ 		if (typeof citation_delimiters == 'undefined' || (citation_delimiters != null && citation_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 			var citation_delimiters = tuple (['[', ']']);
/* 000135 */ 		};
/* 000135 */ 		if (typeof citation_optional_text_separator == 'undefined' || (citation_optional_text_separator != null && citation_optional_text_separator.hasOwnProperty ("__kwargtrans__"))) {;
/* 000135 */ 			var citation_optional_text_separator = '; ';
/* 000135 */ 		};
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'citation_delimiters': var citation_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'citation_optional_text_separator': var citation_optional_text_separator = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000141 */ 		__call__ (__call__ (__super__, null, FeatureExternalPrefixedCitations, '__init__'), null, self);
/* 000142 */ 		self.external_citations_provider = external_citations_provider;
/* 000143 */ 		self.counter_formatter = counter_formatter;
/* 000144 */ 		self.citation_delimiters = citation_delimiters;
/* 000145 */ 		self.citation_optional_text_separator = citation_optional_text_separator;
/* 000145 */ 	});},
/* 000147 */ 	get set_external_citations_provider () {return __get__ (this, function (self, external_citations_provider) {
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'external_citations_provider': var external_citations_provider = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		if (__t__ (self.external_citations_provider !== null)) {
/* 000149 */ 			(function () {
/* 000149 */ 				var __accu0__ = logger;
/* 000149 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureExternalPrefixedCitations.set_external_citations_provider(): There is already an external refs resolver set.  It will be replaced.');
/* 000149 */ 			}) ();
/* 000149 */ 		}
/* 000153 */ 		self.external_citations_provider = external_citations_provider;
/* 000153 */ 	});},
/* 000155 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000158 */ 		return dict ({'macros': [__call__ (CiteMacro, null, 'cite')]});
/* 000158 */ 	});}
/* 000158 */ });
/* 000164 */ export var CiteMacro =  __class__ ('CiteMacro', [LLMMacroSpecBase], {
/* 000164 */ 	__module__: __name__,
/* 000166 */ 	allowed_in_standalone_mode: false,
/* 000168 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000177 */ 		__call__ (__call__ (__super__, null, CiteMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'cite_pre_text'})), __call__ (LLMArgumentSpec, null, (function () {
/* 000177 */ 			var __accu0__ = latexnodes_parsers;
/* 000177 */ 			return __call__ (__accu0__.LatexCharsCommaSeparatedListParser, __accu0__, __kwargtrans__ ({enable_comments: false}));
/* 000177 */ 		}) (), __kwargtrans__ ({argname: 'citekey'}))]}));
/* 000177 */ 	});},
/* 000185 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000187 */ 		var node_args = (function () {
/* 000187 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000187 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['cite_pre_text', 'citekey']));
/* 000187 */ 		}) ();
/* 000191 */ 		var optional_cite_extra_nodelist = null;
/* 000192 */ 		if (__t__ ((function () {
/* 000192 */ 			var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000192 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000192 */ 		}) ())) {
/* 000194 */ 			var optional_cite_extra_nodelist = (function () {
/* 000194 */ 				var __accu0__ = __getitem__ (node_args, 'cite_pre_text');
/* 000194 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000196 */ 		var citekeylist_nodelist = (function () {
/* 000196 */ 			var __accu0__ = __getitem__ (node_args, 'citekey');
/* 000196 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000196 */ 		}) ();
/* 000198 */ 		node.llmarg_optional_cite_extra_nodelist = optional_cite_extra_nodelist;
/* 000199 */ 		node.llmarg_citekeylist_nodelist = citekeylist_nodelist;
/* 000207 */ 		var cite_items = [];
/* 000208 */ 		var __iterable0__ = citekeylist_nodelist;
/* 000208 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 			var citekeygroupnode = __getitem__ (__iterable0__, __index0__);
/* 000210 */ 			if (__t__ (!__t__ ((citekeygroupnode)))) {
/* 000210 */ 				continue;
/* 000210 */ 			}
/* 000213 */ 			var citekey_verbatim = (function () {
/* 000213 */ 				var __accu0__ = citekeygroupnode;
/* 000213 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000213 */ 			}) ();
/* 000214 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 0))) {
/* 000216 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, __call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 0)), null, 1);
/* 000216 */ 			}
/* 000218 */ 			if (__t__ (__getitem__ (citekeygroupnode.delimiters, 1))) {
/* 000220 */ 				var citekey_verbatim = __getslice__ (citekey_verbatim, 0, __neg__ (__call__ (len, null, __getitem__ (citekeygroupnode.delimiters, 1))), 1);
/* 000220 */ 			}
/* 000225 */ 			if (__t__ (__in__ (':', citekey_verbatim))) {
/* 000226 */ 				var __left0__ = (function () {
/* 000226 */ 					var __accu0__ = citekey_verbatim;
/* 000226 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000226 */ 				}) ();
/* 000226 */ 				var citation_key_prefix = __left0__ [0];
/* 000226 */ 				var citation_key = __left0__ [1];
/* 000229 */ 				var citation_key_prefix = (function () {
/* 000229 */ 					var __accu0__ = (function () {
/* 000229 */ 						var __accu1__ = citation_key_prefix;
/* 000229 */ 						return __call__ (__accu1__.strip, __accu1__);
/* 000229 */ 					}) ();
/* 000229 */ 					return __call__ (__accu0__.lower, __accu0__);
/* 000229 */ 				}) ();
/* 000229 */ 			}
/* 000230 */ 			else {
/* 000231 */ 				var __left0__ = tuple ([null, citekey_verbatim]);
/* 000231 */ 				var citation_key_prefix = __left0__ [0];
/* 000231 */ 				var citation_key = __left0__ [1];
/* 000231 */ 			}
/* 000233 */ 			(function () {
/* 000233 */ 				var __accu0__ = cite_items;
/* 000233 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([citation_key_prefix, citation_key]));
/* 000233 */ 			}) ();
/* 000233 */ 		}
/* 000235 */ 		node.llmarg_cite_items = cite_items;
/* 000237 */ 		return node;
/* 000237 */ 	});},
/* 000240 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000242 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000244 */ 		var optional_cite_extra_nodelist = node.llmarg_optional_cite_extra_nodelist;
/* 000246 */ 		var cite_mgr = (function () {
/* 000246 */ 			var __accu0__ = render_context;
/* 000246 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'citations');
/* 000246 */ 		}) ();
/* 000247 */ 		var citation_delimiters = cite_mgr.feature.citation_delimiters;
/* 000249 */ 		var resource_info = node.latex_walker.resource_info;
/* 000251 */ 		var s_items = [];
/* 000252 */ 		var __iterable0__ = node.llmarg_cite_items;
/* 000252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000252 */ 			var cite_item = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 			var __left0__ = cite_item;
/* 000254 */ 			var citation_key_prefix = __left0__ [0];
/* 000254 */ 			var citation_key = __left0__ [1];
/* 000256 */ 			if (__t__ (cite_mgr === null)) {
/* 000257 */ 				(function () {
/* 000257 */ 					var __accu0__ = s_items;
/* 000258 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000258 */ 						var __accu1__ = fragment_renderer;
/* 000260 */ 						return __call__ (__accu1__.render_text_format, __accu1__, __kwargtrans__ ({text_formats: ['cite'], content: (function () {
/* 000260 */ 							var __accu2__ = fragment_renderer;
/* 000260 */ 							return __call__ (__accu2__.render_value, __accu2__, '[{}:{}]'.format (citation_key_prefix, citation_key));
/* 000260 */ 						}) ()}));
/* 000260 */ 					}) ());
/* 000260 */ 				}) ();
/* 000260 */ 				continue;
/* 000260 */ 			}
/* 000267 */ 			var endnote = null;
/* 000268 */ 			var citation_content_llm = null;
/* 000269 */ 			var show_inline_content_llm = null;
/* 000270 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000271 */ 				var endnote = (function () {
/* 000271 */ 					var __accu0__ = cite_mgr;
/* 000271 */ 					return __call__ (__accu0__.get_citation_endnote, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000271 */ 				}) ();
/* 000276 */ 				var show_inline_content_llm = endnote.formatted_inner_counter_value_llm;
/* 000276 */ 			}
/* 000277 */ 			else {
/* 000278 */ 				var citation_content_llm = (function () {
/* 000278 */ 					var __accu0__ = cite_mgr;
/* 000278 */ 					return __call__ (__accu0__.get_citation_content_llm, __accu0__, citation_key_prefix, citation_key, resource_info);
/* 000278 */ 				}) ();
/* 000283 */ 				var show_inline_content_llm = citation_content_llm;
/* 000283 */ 			}
/* 000288 */ 			var cite_content_list_of_nodes = [];
/* 000289 */ 			if (__t__ (__getitem__ (citation_delimiters, 0) !== null)) {
/* 000290 */ 				(function () {
/* 000290 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000291 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000291 */ 						var __accu1__ = node.latex_walker;
/* 000291 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 0), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000291 */ 					}) ());
/* 000291 */ 				}) ();
/* 000291 */ 			}
/* 000300 */ 			(function () {
/* 000300 */ 				var __accu0__ = cite_content_list_of_nodes;
/* 000300 */ 				return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, show_inline_content_llm.nodes));
/* 000300 */ 			}) ();
/* 000301 */ 			if (__t__ (optional_cite_extra_nodelist !== null)) {
/* 000302 */ 				(function () {
/* 000302 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000303 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000303 */ 						var __accu1__ = node.latex_walker;
/* 000303 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: cite_mgr.feature.citation_optional_text_separator, pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000303 */ 					}) ());
/* 000303 */ 				}) ();
/* 000312 */ 				(function () {
/* 000312 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000312 */ 					return __call__ (__accu0__.extend, __accu0__, __call__ (list, null, optional_cite_extra_nodelist));
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000313 */ 			if (__t__ (__getitem__ (citation_delimiters, 1) !== null)) {
/* 000314 */ 				(function () {
/* 000314 */ 					var __accu0__ = cite_content_list_of_nodes;
/* 000315 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000315 */ 						var __accu1__ = node.latex_walker;
/* 000315 */ 						return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (citation_delimiters, 1), pos: node.pos, pos_end: node.pos_end, parsing_state: node.parsing_state}));
/* 000315 */ 					}) ());
/* 000315 */ 				}) ();
/* 000315 */ 			}
/* 000324 */ 			var citation_nodes_parsing_state = (function () {
/* 000324 */ 				var __accu0__ = node.parsing_state;
/* 000324 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000324 */ 			}) ();
/* 000328 */ 			if (__t__ (cite_mgr.use_endnotes)) {
/* 000329 */ 				var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000330 */ 				var full_cite_mark = (function () {
/* 000330 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000333 */ 					return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: (function () {
/* 000333 */ 						var __accu1__ = node.latex_walker;
/* 000333 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000333 */ 					}) (), render_context: render_context, annotations: ['endnote', endnote.category_name]}));
/* 000333 */ 				}) ();
/* 000341 */ 				(function () {
/* 000341 */ 					var __accu0__ = s_items;
/* 000341 */ 					return __call__ (__accu0__.append, __accu0__, full_cite_mark);
/* 000341 */ 				}) ();
/* 000341 */ 			}
/* 000343 */ 			else {
/* 000345 */ 				var full_inline_citation = (function () {
/* 000345 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000346 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, (function () {
/* 000346 */ 						var __accu1__ = node.latex_walker;
/* 000346 */ 						return __call__ (__accu1__.make_nodelist, __accu1__, cite_content_list_of_nodes, __kwargtrans__ ({parsing_state: citation_nodes_parsing_state}));
/* 000346 */ 					}) (), render_context);
/* 000346 */ 				}) ();
/* 000353 */ 				(function () {
/* 000353 */ 					var __accu0__ = s_items;
/* 000353 */ 					return __call__ (__accu0__.append, __accu0__, full_inline_citation);
/* 000353 */ 				}) ();
/* 000353 */ 			}
/* 000353 */ 		}
/* 000357 */ 		return (function () {
/* 000357 */ 			var __accu0__ = fragment_renderer;
/* 000357 */ 			return __call__ (__accu0__.render_join, __accu0__, s_items);
/* 000357 */ 		}) ();
/* 000357 */ 	});}
/* 000357 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.cite.map