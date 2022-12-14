/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:09
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000016 */ import {Feature} from './llm.feature._base.js';
/* 000014 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000013 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000010 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {Feature, ParsedArgumentsInfo, fmthelpers, LLMArgumentSpec, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.endnotes';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000023 */ export var EndnoteCategory =  __class__ ('EndnoteCategory', [object], {
/* 000023 */ 	__module__: __name__,
/* 000037 */ 	get __init__ () {return __get__ (this, function (self, category_name, counter_formatter, heading_title, endnote_command) {
/* 000037 */ 		if (typeof endnote_command == 'undefined' || (endnote_command != null && endnote_command.hasOwnProperty ("__kwargtrans__"))) {;
/* 000037 */ 			var endnote_command = null;
/* 000037 */ 		};
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'heading_title': var heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'endnote_command': var endnote_command = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000039 */ 		__call__ (__call__ (__super__, null, EndnoteCategory, '__init__'), null, self);
/* 000040 */ 		self.category_name = category_name;
/* 000041 */ 		var counter_formatter = (function () {
/* 000041 */ 			var __accu0__ = fmthelpers;
/* 000041 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, counter_formatter);
/* 000041 */ 		}) ();
/* 000042 */ 		self.counter_formatter = counter_formatter;
/* 000043 */ 		self.heading_title = heading_title;
/* 000044 */ 		self.endnote_command = endnote_command;
/* 000044 */ 	});}
/* 000044 */ });
/* 000048 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [LLMMacroSpecBase], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	allowed_in_standalone_mode: false,
/* 000052 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000052 */ 		var kwargs = dict ();
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 				delete kwargs.__kwargtrans__;
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000056 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'endnote_content'}))]}, kwargs)));
/* 000060 */ 		self.endnote_category_name = endnote_category_name;
/* 000060 */ 	});},
/* 000062 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000064 */ 		var mgr = (function () {
/* 000064 */ 			var __accu0__ = render_context;
/* 000064 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000064 */ 		}) ();
/* 000065 */ 		if (__t__ (mgr === null)) {
/* 000066 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your LLM environment");
/* 000066 */ 			__except0__.__cause__ = null;
/* 000066 */ 			throw __except0__;
/* 000066 */ 		}
/* 000070 */ 		var node_args = (function () {
/* 000070 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000070 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000070 */ 		}) ();
/* 000074 */ 		var content_nodelist = (function () {
/* 000074 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000074 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000074 */ 		}) ();
/* 000079 */ 		var endnote = (function () {
/* 000079 */ 			var __accu0__ = mgr;
/* 000079 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000079 */ 		}) ();
/* 000085 */ 		var rendered_endnote_mark = (function () {
/* 000085 */ 			var __accu0__ = mgr;
/* 000085 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000085 */ 		}) ();
/* 000086 */ 		return rendered_endnote_mark;
/* 000086 */ 	});}
/* 000086 */ });
/* 000091 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000091 */ 	__module__: __name__,
/* 000092 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_llm, content_nodelist, ref_label_prefix, ref_label) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000094 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000095 */ 		self.category_name = category_name;
/* 000096 */ 		self.number = number;
/* 000097 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000098 */ 		self.content_nodelist = content_nodelist;
/* 000099 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000100 */ 		self.ref_label = ref_label;
/* 000101 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_llm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000101 */ 	});},
/* 000104 */ 	get asdict () {return __get__ (this, function (self) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		return (function () {
/* 000105 */ 			var __accu0__ = [];
/* 000105 */ 			var __iterable0__ = self._fields;
/* 000105 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000105 */ 				(function () {
/* 000105 */ 					var __accu1__ = __accu0__;
/* 000105 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000105 */ 				}) ();
/* 000105 */ 			}
/* 000105 */ 			return dict (__accu0__);
/* 000105 */ 		}) ();
/* 000105 */ 	});},
/* 000107 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		return (function () {
/* 000108 */ 			var __accu0__ = '{}({})';
/* 000110 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000110 */ 				var __accu1__ = ', ';
/* 000110 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000110 */ 					var __accu2__ = [];
/* 000110 */ 					var __iterable0__ = self._fields;
/* 000110 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000110 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000110 */ 						(function () {
/* 000110 */ 							var __accu3__ = __accu2__;
/* 000110 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000110 */ 						}) ();
/* 000110 */ 					}
/* 000110 */ 					return __accu2__;
/* 000110 */ 				}) ());
/* 000110 */ 			}) ());
/* 000110 */ 		}) ();
/* 000110 */ 	});}
/* 000110 */ });
/* 000116 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000116 */ 	__module__: __name__,
/* 000118 */ 	feature_name: 'endnotes',
/* 000120 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000120 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000120 */ 			var render_options = null;
/* 000120 */ 		};
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000126 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000128 */ 		var _mkcatobj = function (x) {
/* 000128 */ 			if (arguments.length) {
/* 000128 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 						switch (__attrib0__) {
/* 000128 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						}
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 			else {
/* 000128 */ 			}
/* 000129 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000130 */ 				return x;
/* 000130 */ 			}
/* 000131 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000131 */ 		};
/* 000133 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000134 */ 			var categories = [];
/* 000134 */ 		}
/* 000136 */ 		self.base_categories = (function () {
/* 000136 */ 			var __accu0__ = [];
/* 000136 */ 			var __iterable0__ = categories;
/* 000136 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000138 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000138 */ 				(function () {
/* 000138 */ 					var __accu1__ = __accu0__;
/* 000137 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000137 */ 				}) ();
/* 000137 */ 			}
/* 000137 */ 			return __accu0__;
/* 000137 */ 		}) ();
/* 000141 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000141 */ 	});},
/* 000143 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000145 */ 		var macros = [];
/* 000146 */ 		var __iterable0__ = self.base_categories;
/* 000146 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000146 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000147 */ 			if (__t__ (encat.endnote_command)) {
/* 000148 */ 				(function () {
/* 000148 */ 					var __accu0__ = macros;
/* 000149 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000149 */ 				}) ();
/* 000149 */ 			}
/* 000149 */ 		}
/* 000155 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000157 */ 	});},
/* 000157 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000157 */ 		__module__: __name__,
/* 000158 */ 		get initialize () {return __get__ (this, function (self) {
/* 000158 */ 			if (arguments.length) {
/* 000158 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 						switch (__attrib0__) {
/* 000158 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						}
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 			else {
/* 000158 */ 			}
/* 000159 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000160 */ 			self.categories_by_name = (function () {
/* 000160 */ 				var __accu0__ = [];
/* 000160 */ 				var __iterable0__ = self.categories;
/* 000160 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000161 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 					(function () {
/* 000161 */ 						var __accu1__ = __accu0__;
/* 000161 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000161 */ 					}) ();
/* 000161 */ 				}
/* 000161 */ 				return dict (__accu0__);
/* 000161 */ 			}) ();
/* 000161 */ 		});},
/* 000164 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000164 */ 			if (arguments.length) {
/* 000164 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 						switch (__attrib0__) {
/* 000164 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						}
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 			else {
/* 000164 */ 			}
/* 000165 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000166 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000166 */ 				__except0__.__cause__ = null;
/* 000166 */ 				throw __except0__;
/* 000166 */ 			}
/* 000170 */ 			(function () {
/* 000170 */ 				var __accu0__ = self.categories;
/* 000170 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000170 */ 			}) ();
/* 000171 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000171 */ 		});}
/* 000173 */ 	}),
/* 000173 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000173 */ 		__module__: __name__,
/* 000175 */ 		get initialize () {return __get__ (this, function (self) {
/* 000175 */ 			if (arguments.length) {
/* 000175 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 						switch (__attrib0__) {
/* 000175 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						}
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 			else {
/* 000175 */ 			}
/* 000176 */ 			self.endnotes = (function () {
/* 000176 */ 				var __accu0__ = [];
/* 000176 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000176 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu1__ = __accu0__;
/* 000178 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000178 */ 					}) ();
/* 000178 */ 				}
/* 000178 */ 				return dict (__accu0__);
/* 000178 */ 			}) ();
/* 000180 */ 			self.endnote_counters = (function () {
/* 000180 */ 				var __accu0__ = [];
/* 000180 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000180 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000182 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 					(function () {
/* 000182 */ 						var __accu1__ = __accu0__;
/* 000182 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, 1]);
/* 000182 */ 					}) ();
/* 000182 */ 				}
/* 000182 */ 				return dict (__accu0__);
/* 000182 */ 			}) ();
/* 000184 */ 			self.endnote_instances = dict ({});
/* 000184 */ 		});},
/* 000186 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000186 */ 			var ref_label_prefix = null;
/* 000186 */ 			var ref_label = null;
/* 000186 */ 			if (arguments.length) {
/* 000186 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 						switch (__attrib0__) {
/* 000186 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						}
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 			else {
/* 000186 */ 			}
/* 000189 */ 			var node_id = (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000189 */ 			}) ();
/* 000191 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000193 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000193 */ 			}
/* 000195 */ 			var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, category_name);
/* 000197 */ 			var fmtcounter = endnote_category_info.counter_formatter;
/* 000198 */ 			var number = __getitem__ (self.endnote_counters, category_name);
/* 000199 */ 			__setitem__ (self.endnote_counters, category_name, __call__ (__iadd__, null, __getitem__ (self.endnote_counters, category_name), 1));
/* 000201 */ 			var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000202 */ 			var fmtvalue_llm = (function () {
/* 000202 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000202 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000202 */ 			}) ();
/* 000208 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000216 */ 			(function () {
/* 000216 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000216 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000216 */ 			}) ();
/* 000218 */ 			if (__t__ (node_id !== null)) {
/* 000219 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000219 */ 			}
/* 000221 */ 			return endnote;
/* 000221 */ 		});},
/* 000223 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote) {
/* 000223 */ 			if (arguments.length) {
/* 000223 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 						switch (__attrib0__) {
/* 000223 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						}
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 			else {
/* 000223 */ 			}
/* 000224 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000225 */ 			var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000226 */ 			return (function () {
/* 000226 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000226 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_llm.nodes, render_context: self.render_context, annotations: ['endnote', endnote.category_name]}));
/* 000226 */ 			}) ();
/* 000226 */ 		});},
/* 000235 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000235 */ 			if (arguments.length) {
/* 000235 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 						switch (__attrib0__) {
/* 000235 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						}
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 			else {
/* 000235 */ 			}
/* 000237 */ 			var render_context = self.render_context;
/* 000238 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000240 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000241 */ 				var encat = category_name;
/* 000242 */ 				var category_name = encat.category_name;
/* 000242 */ 			}
/* 000246 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000246 */ 				if (arguments.length) {
/* 000246 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 							switch (__attrib0__) {
/* 000246 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 							}
/* 000246 */ 						}
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 				else {
/* 000246 */ 				}
/* 000247 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000248 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000249 */ 				return fmtvalue_llm.nodes;
/* 000249 */ 			};
/* 000251 */ 			var the_target_id_generator_fn = function (n) {
/* 000251 */ 				if (arguments.length) {
/* 000251 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 							switch (__attrib0__) {
/* 000251 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 							}
/* 000251 */ 						}
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 				else {
/* 000251 */ 				}
/* 000252 */ 				return '{}-{}'.format (category_name, n);
/* 000252 */ 			};
/* 000258 */ 			var iterable_of_content_endnotes = (function () {
/* 000258 */ 				var __accu0__ = [];
/* 000258 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000258 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000260 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000260 */ 					(function () {
/* 000260 */ 						var __accu1__ = __accu0__;
/* 000260 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000260 */ 					}) ();
/* 000260 */ 				}
/* 000260 */ 				return __accu0__;
/* 000260 */ 			}) ();
/* 000263 */ 			return (function () {
/* 000263 */ 				var __accu0__ = fragment_renderer;
/* 000263 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000263 */ 			}) ();
/* 000263 */ 		});},
/* 000272 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000272 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var target_id = 'endnotes';
/* 000272 */ 			};
/* 000272 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var annotations = null;
/* 000272 */ 			};
/* 000272 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var include_headings_at_level = null;
/* 000272 */ 			};
/* 000272 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var set_headings_target_ids = null;
/* 000272 */ 			};
/* 000272 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var endnotes_heading_title = null;
/* 000272 */ 			};
/* 000272 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 				var endnotes_heading_level = null;
/* 000272 */ 			};
/* 000272 */ 			if (arguments.length) {
/* 000272 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 						switch (__attrib0__) {
/* 000272 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						}
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 			else {
/* 000272 */ 			}
/* 000281 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000283 */ 				var include_headings_at_level = (function () {
/* 000283 */ 					var __accu0__ = self.feature.default_render_options;
/* 000283 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_heaings_at_level', null);
/* 000283 */ 				}) ();
/* 000283 */ 			}
/* 000284 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000286 */ 				var set_headings_target_ids = (function () {
/* 000286 */ 					var __accu0__ = self.feature.default_render_options;
/* 000286 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000286 */ 				}) ();
/* 000286 */ 			}
/* 000287 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000289 */ 				var endnotes_heading_title = (function () {
/* 000289 */ 					var __accu0__ = self.feature.default_render_options;
/* 000289 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000289 */ 				}) ();
/* 000289 */ 			}
/* 000290 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000292 */ 				var endnotes_heading_level = (function () {
/* 000292 */ 					var __accu0__ = self.feature.default_render_options;
/* 000292 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000292 */ 				}) ();
/* 000292 */ 			}
/* 000295 */ 			var render_context = self.render_context;
/* 000296 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000298 */ 			var has_endnotes = false;
/* 000300 */ 			var blocks = [];
/* 000301 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000301 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000301 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000302 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000302 */ 					continue;
/* 000302 */ 				}
/* 000306 */ 				var has_endnotes = true;
/* 000308 */ 				if (__t__ (include_headings_at_level !== null)) {
/* 000309 */ 					var heading_nodelist = (function () {
/* 000309 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000309 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000309 */ 					}) ();
/* 000314 */ 					var heading_target_id = null;
/* 000315 */ 					if (__t__ (set_headings_target_ids)) {
/* 000316 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000316 */ 					}
/* 000317 */ 					(function () {
/* 000317 */ 						var __accu0__ = blocks;
/* 000318 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000318 */ 							var __accu1__ = fragment_renderer;
/* 000318 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000318 */ 						}) ());
/* 000318 */ 					}) ();
/* 000318 */ 				}
/* 000325 */ 				(function () {
/* 000325 */ 					var __accu0__ = blocks;
/* 000326 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000326 */ 						var __accu1__ = self;
/* 000326 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000326 */ 					}) ());
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000329 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000330 */ 				return (function () {
/* 000330 */ 					var __accu0__ = fragment_renderer;
/* 000330 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes']}));
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000334 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000336 */ 				var heading_title_nodelist = (function () {
/* 000336 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000336 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000336 */ 				}) ();
/* 000341 */ 				(function () {
/* 000341 */ 					var __accu0__ = blocks;
/* 000343 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000343 */ 						var __accu1__ = fragment_renderer;
/* 000343 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000343 */ 					}) ());
/* 000343 */ 				}) ();
/* 000343 */ 			}
/* 000351 */ 			return (function () {
/* 000351 */ 				var __accu0__ = fragment_renderer;
/* 000352 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000352 */ 					var __accu1__ = fragment_renderer;
/* 000352 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks);
/* 000352 */ 				}) (), __kwargtrans__ ({role: 'endnotes', annotations: annotations, target_id: target_id}));
/* 000352 */ 			}) ();
/* 000352 */ 		});}
/* 000352 */ 	})
/* 000352 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map