/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 15:23:29
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000015 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000009 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {fmthelpers, ParsedArgumentsInfo, LLMMacroSpecBase, Feature, LLMArgumentSpec};
/* 000001 */ var __name__ = 'llm.feature.endnotes';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000022 */ export var EndnoteCategory =  __class__ ('EndnoteCategory', [object], {
/* 000022 */ 	__module__: __name__,
/* 000036 */ 	get __init__ () {return __get__ (this, function (self, category_name, counter_formatter, heading_title, endnote_command) {
/* 000036 */ 		if (typeof endnote_command == 'undefined' || (endnote_command != null && endnote_command.hasOwnProperty ("__kwargtrans__"))) {;
/* 000036 */ 			var endnote_command = null;
/* 000036 */ 		};
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'heading_title': var heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'endnote_command': var endnote_command = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000038 */ 		__call__ (__call__ (__super__, null, EndnoteCategory, '__init__'), null, self);
/* 000039 */ 		self.category_name = category_name;
/* 000040 */ 		if (__t__ (!__t__ ((__call__ (callable, null, counter_formatter))))) {
/* 000041 */ 			var counter_formatter = __getitem__ (fmthelpers.standard_counter_formatters, counter_formatter);
/* 000041 */ 		}
/* 000042 */ 		self.counter_formatter = counter_formatter;
/* 000043 */ 		self.heading_title = heading_title;
/* 000044 */ 		self.endnote_command = endnote_command;
/* 000044 */ 	});}
/* 000044 */ });
/* 000047 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [LLMMacroSpecBase], {
/* 000047 */ 	__module__: __name__,
/* 000049 */ 	allowed_in_standalone_mode: false,
/* 000051 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000051 */ 		var kwargs = dict ();
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 				delete kwargs.__kwargtrans__;
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000055 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'endnote_content'}))]}, kwargs)));
/* 000059 */ 		self.endnote_category_name = endnote_category_name;
/* 000059 */ 	});},
/* 000061 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000063 */ 		var mgr = (function () {
/* 000063 */ 			var __accu0__ = render_context;
/* 000063 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000063 */ 		}) ();
/* 000064 */ 		if (__t__ (mgr === null)) {
/* 000065 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your LLM environment");
/* 000065 */ 			__except0__.__cause__ = null;
/* 000065 */ 			throw __except0__;
/* 000065 */ 		}
/* 000069 */ 		var node_args = (function () {
/* 000069 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000069 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000069 */ 		}) ();
/* 000073 */ 		var content_nodelist = (function () {
/* 000073 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000073 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000073 */ 		}) ();
/* 000078 */ 		var endnote = (function () {
/* 000078 */ 			var __accu0__ = mgr;
/* 000078 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000078 */ 		}) ();
/* 000084 */ 		var rendered_endnote_mark = (function () {
/* 000084 */ 			var __accu0__ = mgr;
/* 000084 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000084 */ 		}) ();
/* 000085 */ 		return rendered_endnote_mark;
/* 000085 */ 	});}
/* 000085 */ });
/* 000090 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000090 */ 	__module__: __name__,
/* 000091 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_llm, content_nodelist, ref_label_prefix, ref_label) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000093 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000094 */ 		self.category_name = category_name;
/* 000095 */ 		self.number = number;
/* 000096 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000097 */ 		self.content_nodelist = content_nodelist;
/* 000098 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000099 */ 		self.ref_label = ref_label;
/* 000100 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_llm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000100 */ 	});},
/* 000103 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return (function () {
/* 000104 */ 			var __accu0__ = '{}({})';
/* 000106 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000106 */ 				var __accu1__ = ', ';
/* 000106 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000106 */ 					var __accu2__ = [];
/* 000106 */ 					var __iterable0__ = self._fields;
/* 000106 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000106 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000106 */ 						(function () {
/* 000106 */ 							var __accu3__ = __accu2__;
/* 000106 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000106 */ 						}) ();
/* 000106 */ 					}
/* 000106 */ 					return __accu2__;
/* 000106 */ 				}) ());
/* 000106 */ 			}) ());
/* 000106 */ 		}) ();
/* 000106 */ 	});}
/* 000106 */ });
/* 000112 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000112 */ 	__module__: __name__,
/* 000114 */ 	feature_name: 'endnotes',
/* 000116 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000116 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000116 */ 			var render_options = null;
/* 000116 */ 		};
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000122 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000124 */ 		var _mkcatobj = function (x) {
/* 000124 */ 			if (arguments.length) {
/* 000124 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 						switch (__attrib0__) {
/* 000124 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						}
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 			else {
/* 000124 */ 			}
/* 000125 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000126 */ 				return x;
/* 000126 */ 			}
/* 000127 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000127 */ 		};
/* 000129 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000130 */ 			var categories = [];
/* 000130 */ 		}
/* 000132 */ 		self.base_categories = (function () {
/* 000132 */ 			var __accu0__ = [];
/* 000132 */ 			var __iterable0__ = categories;
/* 000132 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000134 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000134 */ 				(function () {
/* 000134 */ 					var __accu1__ = __accu0__;
/* 000133 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000133 */ 				}) ();
/* 000133 */ 			}
/* 000133 */ 			return __accu0__;
/* 000133 */ 		}) ();
/* 000137 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000137 */ 	});},
/* 000139 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000141 */ 		var macros = [];
/* 000142 */ 		var __iterable0__ = self.base_categories;
/* 000142 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000142 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000143 */ 			if (__t__ (encat.endnote_command)) {
/* 000144 */ 				(function () {
/* 000144 */ 					var __accu0__ = macros;
/* 000145 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000145 */ 				}) ();
/* 000145 */ 			}
/* 000145 */ 		}
/* 000151 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000153 */ 	});},
/* 000153 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000153 */ 		__module__: __name__,
/* 000154 */ 		get initialize () {return __get__ (this, function (self) {
/* 000154 */ 			if (arguments.length) {
/* 000154 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 						switch (__attrib0__) {
/* 000154 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						}
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 			else {
/* 000154 */ 			}
/* 000155 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000156 */ 			self.categories_by_name = (function () {
/* 000156 */ 				var __accu0__ = [];
/* 000156 */ 				var __iterable0__ = self.categories;
/* 000156 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000157 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000157 */ 					(function () {
/* 000157 */ 						var __accu1__ = __accu0__;
/* 000157 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000157 */ 					}) ();
/* 000157 */ 				}
/* 000157 */ 				return dict (__accu0__);
/* 000157 */ 			}) ();
/* 000157 */ 		});},
/* 000160 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000160 */ 			if (arguments.length) {
/* 000160 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 						switch (__attrib0__) {
/* 000160 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						}
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 			else {
/* 000160 */ 			}
/* 000161 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000162 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000162 */ 				__except0__.__cause__ = null;
/* 000162 */ 				throw __except0__;
/* 000162 */ 			}
/* 000166 */ 			(function () {
/* 000166 */ 				var __accu0__ = self.categories;
/* 000166 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000166 */ 			}) ();
/* 000167 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000167 */ 		});}
/* 000169 */ 	}),
/* 000169 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000169 */ 		__module__: __name__,
/* 000171 */ 		get initialize () {return __get__ (this, function (self) {
/* 000171 */ 			if (arguments.length) {
/* 000171 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 						switch (__attrib0__) {
/* 000171 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						}
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 			else {
/* 000171 */ 			}
/* 000172 */ 			self.endnotes = (function () {
/* 000172 */ 				var __accu0__ = [];
/* 000172 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000172 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000174 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000174 */ 					(function () {
/* 000174 */ 						var __accu1__ = __accu0__;
/* 000174 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000174 */ 					}) ();
/* 000174 */ 				}
/* 000174 */ 				return dict (__accu0__);
/* 000174 */ 			}) ();
/* 000176 */ 			self.endnote_counters = (function () {
/* 000176 */ 				var __accu0__ = [];
/* 000176 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000176 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu1__ = __accu0__;
/* 000178 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, 1]);
/* 000178 */ 					}) ();
/* 000178 */ 				}
/* 000178 */ 				return dict (__accu0__);
/* 000178 */ 			}) ();
/* 000180 */ 			self.endnote_instances = dict ({});
/* 000180 */ 		});},
/* 000182 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000182 */ 			var ref_label_prefix = null;
/* 000182 */ 			var ref_label = null;
/* 000182 */ 			if (arguments.length) {
/* 000182 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 						switch (__attrib0__) {
/* 000182 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						}
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 			else {
/* 000182 */ 			}
/* 000185 */ 			var node_id = (function () {
/* 000185 */ 				var __accu0__ = self;
/* 000185 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000185 */ 			}) ();
/* 000187 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000189 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000189 */ 			}
/* 000191 */ 			var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, category_name);
/* 000193 */ 			var fmtcounter = endnote_category_info.counter_formatter;
/* 000194 */ 			var number = __getitem__ (self.endnote_counters, category_name);
/* 000195 */ 			__setitem__ (self.endnote_counters, category_name, __call__ (__iadd__, null, __getitem__ (self.endnote_counters, category_name), 1));
/* 000197 */ 			var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000198 */ 			var fmtvalue_llm = (function () {
/* 000198 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000198 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000198 */ 			}) ();
/* 000204 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000212 */ 			(function () {
/* 000212 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000212 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000212 */ 			}) ();
/* 000214 */ 			if (__t__ (node_id !== null)) {
/* 000215 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000215 */ 			}
/* 000217 */ 			return endnote;
/* 000217 */ 		});},
/* 000219 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote) {
/* 000219 */ 			if (arguments.length) {
/* 000219 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 						switch (__attrib0__) {
/* 000219 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						}
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 			else {
/* 000219 */ 			}
/* 000220 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000221 */ 			var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000222 */ 			return (function () {
/* 000222 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000222 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_llm.nodes, render_context: self.render_context, annotations: ['endnote', endnote.category_name]}));
/* 000222 */ 			}) ();
/* 000222 */ 		});},
/* 000231 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000231 */ 			if (arguments.length) {
/* 000231 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 						switch (__attrib0__) {
/* 000231 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 						}
/* 000231 */ 					}
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 			else {
/* 000231 */ 			}
/* 000233 */ 			var render_context = self.render_context;
/* 000234 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000236 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000237 */ 				var encat = category_name;
/* 000238 */ 				var category_name = encat.category_name;
/* 000238 */ 			}
/* 000242 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000242 */ 				if (arguments.length) {
/* 000242 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 							switch (__attrib0__) {
/* 000242 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 							}
/* 000242 */ 						}
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 				else {
/* 000242 */ 				}
/* 000243 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000244 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000245 */ 				return fmtvalue_llm.nodes;
/* 000245 */ 			};
/* 000247 */ 			var the_target_id_generator_fn = function (n) {
/* 000247 */ 				if (arguments.length) {
/* 000247 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 							switch (__attrib0__) {
/* 000247 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 							}
/* 000247 */ 						}
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 				else {
/* 000247 */ 				}
/* 000248 */ 				return '{}-{}'.format (category_name, n);
/* 000248 */ 			};
/* 000254 */ 			var iterable_of_content_endnotes = (function () {
/* 000254 */ 				var __accu0__ = [];
/* 000254 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000254 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000256 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000256 */ 					(function () {
/* 000256 */ 						var __accu1__ = __accu0__;
/* 000256 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000256 */ 					}) ();
/* 000256 */ 				}
/* 000256 */ 				return __accu0__;
/* 000256 */ 			}) ();
/* 000259 */ 			return (function () {
/* 000259 */ 				var __accu0__ = fragment_renderer;
/* 000259 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000259 */ 			}) ();
/* 000259 */ 		});},
/* 000268 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000268 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var target_id = 'endnotes';
/* 000268 */ 			};
/* 000268 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var annotations = null;
/* 000268 */ 			};
/* 000268 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var include_headings_at_level = null;
/* 000268 */ 			};
/* 000268 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var set_headings_target_ids = null;
/* 000268 */ 			};
/* 000268 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var endnotes_heading_title = null;
/* 000268 */ 			};
/* 000268 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000268 */ 				var endnotes_heading_level = null;
/* 000268 */ 			};
/* 000268 */ 			if (arguments.length) {
/* 000268 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 						switch (__attrib0__) {
/* 000268 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						}
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 			else {
/* 000268 */ 			}
/* 000277 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000279 */ 				var include_heaings_at_level = (function () {
/* 000279 */ 					var __accu0__ = self.feature.default_render_options;
/* 000279 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_heaings_at_level', null);
/* 000279 */ 				}) ();
/* 000279 */ 			}
/* 000280 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000282 */ 				var set_headings_target_ids = (function () {
/* 000282 */ 					var __accu0__ = self.feature.default_render_options;
/* 000282 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000282 */ 				}) ();
/* 000282 */ 			}
/* 000283 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000285 */ 				var endnotes_heading_title = (function () {
/* 000285 */ 					var __accu0__ = self.feature.default_render_options;
/* 000285 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000285 */ 				}) ();
/* 000285 */ 			}
/* 000286 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000288 */ 				var endnotes_heading_level = (function () {
/* 000288 */ 					var __accu0__ = self.feature.default_render_options;
/* 000288 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000288 */ 				}) ();
/* 000288 */ 			}
/* 000291 */ 			var render_context = self.render_context;
/* 000292 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000294 */ 			var has_endnotes = false;
/* 000296 */ 			var blocks = [];
/* 000297 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000297 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000297 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000298 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000298 */ 					continue;
/* 000298 */ 				}
/* 000302 */ 				var has_endnotes = true;
/* 000304 */ 				if (__t__ (include_headings_at_level !== null)) {
/* 000305 */ 					var heading_nodelist = (function () {
/* 000305 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000305 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000305 */ 					}) ();
/* 000310 */ 					var heading_target_id = null;
/* 000311 */ 					if (__t__ (set_headings_target_ids)) {
/* 000312 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000312 */ 					}
/* 000313 */ 					(function () {
/* 000313 */ 						var __accu0__ = blocks;
/* 000314 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000314 */ 							var __accu1__ = fragment_renderer;
/* 000314 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000314 */ 						}) ());
/* 000314 */ 					}) ();
/* 000314 */ 				}
/* 000321 */ 				(function () {
/* 000321 */ 					var __accu0__ = blocks;
/* 000322 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000322 */ 						var __accu1__ = self;
/* 000322 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000322 */ 					}) ());
/* 000322 */ 				}) ();
/* 000322 */ 			}
/* 000325 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000326 */ 				return (function () {
/* 000326 */ 					var __accu0__ = fragment_renderer;
/* 000326 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes']}));
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000330 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000332 */ 				var heading_title_nodelist = (function () {
/* 000332 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000332 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000332 */ 				}) ();
/* 000337 */ 				(function () {
/* 000337 */ 					var __accu0__ = blocks;
/* 000339 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000339 */ 						var __accu1__ = fragment_renderer;
/* 000339 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000339 */ 					}) ());
/* 000339 */ 				}) ();
/* 000339 */ 			}
/* 000347 */ 			return (function () {
/* 000347 */ 				var __accu0__ = fragment_renderer;
/* 000348 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000348 */ 					var __accu1__ = fragment_renderer;
/* 000348 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks);
/* 000348 */ 				}) (), __kwargtrans__ ({role: 'endnotes', annotations: annotations, target_id: target_id}));
/* 000348 */ 			}) ();
/* 000348 */ 		});}
/* 000348 */ 	})
/* 000348 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map