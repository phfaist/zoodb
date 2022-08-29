/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 11:35:13
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000015 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000009 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMMacroSpecBase, ParsedArgumentsInfo, LLMArgumentSpec, Feature, fmthelpers};
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
/* 000116 */ 	get __init__ () {return __get__ (this, function (self, categories) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
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
/* 000133 */ 	});},
/* 000137 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000139 */ 		var macros = [];
/* 000140 */ 		var __iterable0__ = self.base_categories;
/* 000140 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000140 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000141 */ 			if (__t__ (encat.endnote_command)) {
/* 000142 */ 				(function () {
/* 000142 */ 					var __accu0__ = macros;
/* 000143 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000143 */ 				}) ();
/* 000143 */ 			}
/* 000143 */ 		}
/* 000149 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000151 */ 	});},
/* 000151 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000151 */ 		__module__: __name__,
/* 000152 */ 		get initialize () {return __get__ (this, function (self) {
/* 000152 */ 			if (arguments.length) {
/* 000152 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 						switch (__attrib0__) {
/* 000152 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						}
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 			else {
/* 000152 */ 			}
/* 000153 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000154 */ 			self.categories_by_name = (function () {
/* 000154 */ 				var __accu0__ = [];
/* 000154 */ 				var __iterable0__ = self.categories;
/* 000154 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 					(function () {
/* 000155 */ 						var __accu1__ = __accu0__;
/* 000155 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000155 */ 					}) ();
/* 000155 */ 				}
/* 000155 */ 				return dict (__accu0__);
/* 000155 */ 			}) ();
/* 000155 */ 		});},
/* 000158 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000158 */ 			if (arguments.length) {
/* 000158 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 						switch (__attrib0__) {
/* 000158 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						}
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 			else {
/* 000158 */ 			}
/* 000159 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000160 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000160 */ 				__except0__.__cause__ = null;
/* 000160 */ 				throw __except0__;
/* 000160 */ 			}
/* 000164 */ 			(function () {
/* 000164 */ 				var __accu0__ = self.categories;
/* 000164 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000164 */ 			}) ();
/* 000165 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000165 */ 		});}
/* 000167 */ 	}),
/* 000167 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000167 */ 		__module__: __name__,
/* 000169 */ 		get initialize () {return __get__ (this, function (self) {
/* 000169 */ 			if (arguments.length) {
/* 000169 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 						switch (__attrib0__) {
/* 000169 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						}
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 			else {
/* 000169 */ 			}
/* 000170 */ 			self.endnotes = (function () {
/* 000170 */ 				var __accu0__ = [];
/* 000170 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000170 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000172 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000172 */ 					(function () {
/* 000172 */ 						var __accu1__ = __accu0__;
/* 000172 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000172 */ 					}) ();
/* 000172 */ 				}
/* 000172 */ 				return dict (__accu0__);
/* 000172 */ 			}) ();
/* 000174 */ 			self.endnote_counters = (function () {
/* 000174 */ 				var __accu0__ = [];
/* 000174 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000174 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000176 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000176 */ 					(function () {
/* 000176 */ 						var __accu1__ = __accu0__;
/* 000176 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, 1]);
/* 000176 */ 					}) ();
/* 000176 */ 				}
/* 000176 */ 				return dict (__accu0__);
/* 000176 */ 			}) ();
/* 000178 */ 			self.endnote_instances = dict ({});
/* 000178 */ 		});},
/* 000180 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000180 */ 			var ref_label_prefix = null;
/* 000180 */ 			var ref_label = null;
/* 000180 */ 			if (arguments.length) {
/* 000180 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 						switch (__attrib0__) {
/* 000180 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						}
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 			else {
/* 000180 */ 			}
/* 000183 */ 			var node_id = (function () {
/* 000183 */ 				var __accu0__ = self;
/* 000183 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000183 */ 			}) ();
/* 000185 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000187 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000187 */ 			}
/* 000189 */ 			var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, category_name);
/* 000191 */ 			var fmtcounter = endnote_category_info.counter_formatter;
/* 000192 */ 			var number = __getitem__ (self.endnote_counters, category_name);
/* 000193 */ 			__setitem__ (self.endnote_counters, category_name, __call__ (__iadd__, null, __getitem__ (self.endnote_counters, category_name), 1));
/* 000195 */ 			var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000196 */ 			var fmtvalue_llm = (function () {
/* 000196 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000196 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000196 */ 			}) ();
/* 000202 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000210 */ 			(function () {
/* 000210 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000210 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000210 */ 			}) ();
/* 000212 */ 			if (__t__ (node_id !== null)) {
/* 000213 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000213 */ 			}
/* 000215 */ 			return endnote;
/* 000215 */ 		});},
/* 000217 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote) {
/* 000217 */ 			if (arguments.length) {
/* 000217 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 						switch (__attrib0__) {
/* 000217 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						}
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 			else {
/* 000217 */ 			}
/* 000218 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000219 */ 			var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000220 */ 			return (function () {
/* 000220 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000220 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_llm.nodes, render_context: self.render_context, annotations: ['endnote', endnote.category_name]}));
/* 000220 */ 			}) ();
/* 000220 */ 		});},
/* 000229 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000229 */ 			if (arguments.length) {
/* 000229 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 						switch (__attrib0__) {
/* 000229 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						}
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 			else {
/* 000229 */ 			}
/* 000231 */ 			var render_context = self.render_context;
/* 000232 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000234 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000235 */ 				var encat = category_name;
/* 000236 */ 				var category_name = encat.category_name;
/* 000236 */ 			}
/* 000240 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000240 */ 				if (arguments.length) {
/* 000240 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 							switch (__attrib0__) {
/* 000240 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 							}
/* 000240 */ 						}
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 				else {
/* 000240 */ 				}
/* 000241 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000242 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000243 */ 				return fmtvalue_llm.nodes;
/* 000243 */ 			};
/* 000245 */ 			var the_target_id_generator_fn = function (n) {
/* 000245 */ 				if (arguments.length) {
/* 000245 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 							switch (__attrib0__) {
/* 000245 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 							}
/* 000245 */ 						}
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 				else {
/* 000245 */ 				}
/* 000246 */ 				return '{}-{}'.format (category_name, n);
/* 000246 */ 			};
/* 000252 */ 			var iterable_of_content_endnotes = (function () {
/* 000252 */ 				var __accu0__ = [];
/* 000252 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000252 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000254 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 					(function () {
/* 000254 */ 						var __accu1__ = __accu0__;
/* 000254 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000254 */ 					}) ();
/* 000254 */ 				}
/* 000254 */ 				return __accu0__;
/* 000254 */ 			}) ();
/* 000257 */ 			return (function () {
/* 000257 */ 				var __accu0__ = fragment_renderer;
/* 000257 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000257 */ 			}) ();
/* 000257 */ 		});},
/* 000266 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000266 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var target_id = 'endnotes';
/* 000266 */ 			};
/* 000266 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var annotations = null;
/* 000266 */ 			};
/* 000266 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var include_headings_at_level = null;
/* 000266 */ 			};
/* 000266 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var set_headings_target_ids = false;
/* 000266 */ 			};
/* 000266 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var endnotes_heading_title = null;
/* 000266 */ 			};
/* 000266 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 				var endnotes_heading_level = 1;
/* 000266 */ 			};
/* 000266 */ 			if (arguments.length) {
/* 000266 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 						switch (__attrib0__) {
/* 000266 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						}
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 			else {
/* 000266 */ 			}
/* 000275 */ 			var render_context = self.render_context;
/* 000276 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000278 */ 			var has_endnotes = false;
/* 000280 */ 			var blocks = [];
/* 000281 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000281 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000281 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000282 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000282 */ 					continue;
/* 000282 */ 				}
/* 000286 */ 				var has_endnotes = true;
/* 000288 */ 				if (__t__ (include_headings_at_level !== null)) {
/* 000289 */ 					var heading_nodelist = (function () {
/* 000289 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000289 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000289 */ 					}) ();
/* 000294 */ 					var heading_target_id = null;
/* 000295 */ 					if (__t__ (set_headings_target_ids)) {
/* 000296 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000296 */ 					}
/* 000297 */ 					(function () {
/* 000297 */ 						var __accu0__ = blocks;
/* 000298 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000298 */ 							var __accu1__ = fragment_renderer;
/* 000298 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000298 */ 						}) ());
/* 000298 */ 					}) ();
/* 000298 */ 				}
/* 000305 */ 				(function () {
/* 000305 */ 					var __accu0__ = blocks;
/* 000306 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000306 */ 						var __accu1__ = self;
/* 000306 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000306 */ 					}) ());
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000309 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000310 */ 				return (function () {
/* 000310 */ 					var __accu0__ = fragment_renderer;
/* 000310 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes']}));
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000314 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000316 */ 				var heading_title_nodelist = (function () {
/* 000316 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000316 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000316 */ 				}) ();
/* 000321 */ 				(function () {
/* 000321 */ 					var __accu0__ = blocks;
/* 000323 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000323 */ 						var __accu1__ = fragment_renderer;
/* 000323 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000323 */ 					}) ());
/* 000323 */ 				}) ();
/* 000323 */ 			}
/* 000331 */ 			return (function () {
/* 000331 */ 				var __accu0__ = fragment_renderer;
/* 000332 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000332 */ 					var __accu1__ = fragment_renderer;
/* 000332 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks);
/* 000332 */ 				}) (), __kwargtrans__ ({role: 'endnotes', annotations: annotations, target_id: target_id}));
/* 000332 */ 			}) ();
/* 000332 */ 		});}
/* 000332 */ 	})
/* 000332 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map