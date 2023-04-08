/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:42
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import {Counter, build_counter_formatter} from './llm.counter.js';
/* 000016 */ import {Feature} from './llm.feature._base.js';
/* 000014 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000009 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMFragment, LLMArgumentSpec, build_counter_formatter, Feature, ParsedArgumentsInfo, Counter, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.endnotes';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000021 */ export var _default_endnote_counter_formatter_spec = dict ({'format_num': dict ({'template': '${roman}'}), 'prefix_display': null, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000030 */ export var EndnoteCategory =  __class__ ('EndnoteCategory', [object], {
/* 000030 */ 	__module__: __name__,
/* 000044 */ 	get __init__ () {return __get__ (this, function (self, category_name, counter_formatter, heading_title, endnote_command) {
/* 000044 */ 		if (typeof endnote_command == 'undefined' || (endnote_command != null && endnote_command.hasOwnProperty ("__kwargtrans__"))) {;
/* 000044 */ 			var endnote_command = null;
/* 000044 */ 		};
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'heading_title': var heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'endnote_command': var endnote_command = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000046 */ 		__call__ (__call__ (__super__, null, EndnoteCategory, '__init__'), null, self);
/* 000047 */ 		self.category_name = category_name;
/* 000048 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_endnote_counter_formatter_spec);
/* 000052 */ 		self.counter_formatter = counter_formatter;
/* 000053 */ 		self.heading_title = heading_title;
/* 000054 */ 		self.endnote_command = endnote_command;
/* 000054 */ 	});}
/* 000054 */ });
/* 000058 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [LLMMacroSpecBase], {
/* 000058 */ 	__module__: __name__,
/* 000060 */ 	allowed_in_standalone_mode: false,
/* 000062 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000066 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'endnote_content', llm_doc: 'The content of the endnote to place (e.g., the text of a footnote)'}))]}, kwargs)));
/* 000074 */ 		self.endnote_category_name = endnote_category_name;
/* 000074 */ 	});},
/* 000076 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000077 */ 		return 'Place an end note in the category ‘{}’ withthe given content.'.format (self.endnote_category_name);
/* 000077 */ 	});},
/* 000080 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000082 */ 		var mgr = (function () {
/* 000082 */ 			var __accu0__ = render_context;
/* 000082 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000082 */ 		}) ();
/* 000083 */ 		if (__t__ (mgr === null)) {
/* 000084 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your LLM environment");
/* 000084 */ 			__except0__.__cause__ = null;
/* 000084 */ 			throw __except0__;
/* 000084 */ 		}
/* 000088 */ 		var node_args = (function () {
/* 000088 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000088 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000088 */ 		}) ();
/* 000092 */ 		var content_nodelist = (function () {
/* 000092 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000092 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000092 */ 		}) ();
/* 000097 */ 		var endnote = (function () {
/* 000097 */ 			var __accu0__ = mgr;
/* 000097 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000097 */ 		}) ();
/* 000103 */ 		var rendered_endnote_mark = (function () {
/* 000103 */ 			var __accu0__ = mgr;
/* 000103 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000103 */ 		}) ();
/* 000104 */ 		return rendered_endnote_mark;
/* 000104 */ 	});}
/* 000104 */ });
/* 000109 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000109 */ 	__module__: __name__,
/* 000110 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_llm, content_nodelist, ref_label_prefix, ref_label) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000112 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000113 */ 		self.category_name = category_name;
/* 000114 */ 		self.number = number;
/* 000115 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000116 */ 		self.content_nodelist = content_nodelist;
/* 000117 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000118 */ 		self.ref_label = ref_label;
/* 000119 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_llm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000119 */ 	});},
/* 000122 */ 	get asdict () {return __get__ (this, function (self) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		return (function () {
/* 000123 */ 			var __accu0__ = [];
/* 000123 */ 			var __iterable0__ = self._fields;
/* 000123 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000123 */ 				(function () {
/* 000123 */ 					var __accu1__ = __accu0__;
/* 000123 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000123 */ 				}) ();
/* 000123 */ 			}
/* 000123 */ 			return dict (__accu0__);
/* 000123 */ 		}) ();
/* 000123 */ 	});},
/* 000125 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000126 */ 		return (function () {
/* 000126 */ 			var __accu0__ = '{}({})';
/* 000128 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000128 */ 				var __accu1__ = ', ';
/* 000128 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000128 */ 					var __accu2__ = [];
/* 000128 */ 					var __iterable0__ = self._fields;
/* 000128 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000128 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000128 */ 						(function () {
/* 000128 */ 							var __accu3__ = __accu2__;
/* 000128 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000128 */ 						}) ();
/* 000128 */ 					}
/* 000128 */ 					return __accu2__;
/* 000128 */ 				}) ());
/* 000128 */ 			}) ());
/* 000128 */ 		}) ();
/* 000128 */ 	});}
/* 000128 */ });
/* 000134 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000134 */ 	__module__: __name__,
/* 000136 */ 	feature_name: 'endnotes',
/* 000137 */ 	feature_title: 'Endnotes: footnotes, references, etc.',
/* 000139 */ 	get feature_llm_doc () {return __get__ (this, function (self) {
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
/* 000144 */ 		return __add__ ('Add footnotes and support for other endnotes (e.g., citations)\n            at the bottom of your pages or your document.  This environment\n            supports the base category(ies): ', (function () {
/* 000144 */ 			var __accu0__ = ',';
/* 000144 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000144 */ 				var __accu1__ = [];
/* 000144 */ 				var __iterable0__ = self.base_categories;
/* 000144 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000144 */ 					var cat = __getitem__ (__iterable0__, __index0__);
/* 000144 */ 					(function () {
/* 000144 */ 						var __accu2__ = __accu1__;
/* 000144 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (cat.category_name));
/* 000144 */ 					}) ();
/* 000144 */ 				}
/* 000144 */ 				return __accu1__;
/* 000144 */ 			}) ());
/* 000144 */ 		}) ());
/* 000144 */ 	});},
/* 000147 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000147 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000147 */ 			var render_options = null;
/* 000147 */ 		};
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000153 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000155 */ 		var _mkcatobj = function (x) {
/* 000155 */ 			if (arguments.length) {
/* 000155 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 						switch (__attrib0__) {
/* 000155 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						}
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 			else {
/* 000155 */ 			}
/* 000156 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000157 */ 				return x;
/* 000157 */ 			}
/* 000158 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000158 */ 		};
/* 000160 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000161 */ 			var categories = [];
/* 000161 */ 		}
/* 000163 */ 		self.base_categories = (function () {
/* 000163 */ 			var __accu0__ = [];
/* 000163 */ 			var __iterable0__ = categories;
/* 000163 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000165 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000165 */ 				(function () {
/* 000165 */ 					var __accu1__ = __accu0__;
/* 000164 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000164 */ 				}) ();
/* 000164 */ 			}
/* 000164 */ 			return __accu0__;
/* 000164 */ 		}) ();
/* 000168 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000168 */ 	});},
/* 000170 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000172 */ 		var macros = [];
/* 000173 */ 		var __iterable0__ = self.base_categories;
/* 000173 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000173 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000174 */ 			if (__t__ (encat.endnote_command)) {
/* 000175 */ 				(function () {
/* 000175 */ 					var __accu0__ = macros;
/* 000176 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000176 */ 				}) ();
/* 000176 */ 			}
/* 000176 */ 		}
/* 000182 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000184 */ 	});},
/* 000184 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000184 */ 		__module__: __name__,
/* 000185 */ 		get initialize () {return __get__ (this, function (self) {
/* 000185 */ 			if (arguments.length) {
/* 000185 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 						switch (__attrib0__) {
/* 000185 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						}
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 			else {
/* 000185 */ 			}
/* 000186 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000187 */ 			self.categories_by_name = (function () {
/* 000187 */ 				var __accu0__ = [];
/* 000187 */ 				var __iterable0__ = self.categories;
/* 000187 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000188 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000188 */ 					(function () {
/* 000188 */ 						var __accu1__ = __accu0__;
/* 000188 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000188 */ 					}) ();
/* 000188 */ 				}
/* 000188 */ 				return dict (__accu0__);
/* 000188 */ 			}) ();
/* 000188 */ 		});},
/* 000191 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000191 */ 			if (arguments.length) {
/* 000191 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 						switch (__attrib0__) {
/* 000191 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						}
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 			}
/* 000192 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000193 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000193 */ 				__except0__.__cause__ = null;
/* 000193 */ 				throw __except0__;
/* 000193 */ 			}
/* 000197 */ 			(function () {
/* 000197 */ 				var __accu0__ = self.categories;
/* 000197 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000197 */ 			}) ();
/* 000198 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000198 */ 		});}
/* 000200 */ 	}),
/* 000200 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000200 */ 		__module__: __name__,
/* 000202 */ 		get initialize () {return __get__ (this, function (self) {
/* 000202 */ 			if (arguments.length) {
/* 000202 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 						switch (__attrib0__) {
/* 000202 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						}
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 			else {
/* 000202 */ 			}
/* 000203 */ 			self.endnotes = (function () {
/* 000203 */ 				var __accu0__ = [];
/* 000203 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000203 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 					(function () {
/* 000205 */ 						var __accu1__ = __accu0__;
/* 000205 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000205 */ 					}) ();
/* 000205 */ 				}
/* 000205 */ 				return dict (__accu0__);
/* 000205 */ 			}) ();
/* 000207 */ 			self.endnote_counters = (function () {
/* 000207 */ 				var __accu0__ = [];
/* 000207 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000207 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000209 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 					(function () {
/* 000209 */ 						var __accu1__ = __accu0__;
/* 000208 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, __call__ (Counter, null, c.counter_formatter)]);
/* 000208 */ 					}) ();
/* 000208 */ 				}
/* 000208 */ 				return dict (__accu0__);
/* 000208 */ 			}) ();
/* 000211 */ 			self.endnote_instances = dict ({});
/* 000211 */ 		});},
/* 000213 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000213 */ 			var ref_label_prefix = null;
/* 000213 */ 			var ref_label = null;
/* 000213 */ 			if (arguments.length) {
/* 000213 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 						switch (__attrib0__) {
/* 000213 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						}
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 			else {
/* 000213 */ 			}
/* 000216 */ 			var node_id = (function () {
/* 000216 */ 				var __accu0__ = self;
/* 000216 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000216 */ 			}) ();
/* 000218 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000220 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000220 */ 			}
/* 000226 */ 			var __left0__ = (function () {
/* 000226 */ 				var __accu0__ = __getitem__ (self.endnote_counters, category_name);
/* 000226 */ 				return __call__ (__accu0__.step_and_format_llm, __accu0__);
/* 000226 */ 			}) ();
/* 000226 */ 			var number = __left0__ [0];
/* 000226 */ 			var fmtvalue_llm_text = __left0__ [1];
/* 000228 */ 			var fmtvalue_llm = (function () {
/* 000228 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000228 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000228 */ 			}) ();
/* 000234 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000242 */ 			(function () {
/* 000242 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000242 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000242 */ 			}) ();
/* 000244 */ 			if (__t__ (node_id !== null)) {
/* 000245 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000245 */ 			}
/* 000247 */ 			return endnote;
/* 000247 */ 		});},
/* 000249 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote, display_llm, wrap_with_semantic_span) {
/* 000249 */ 			if (typeof display_llm == 'undefined' || (display_llm != null && display_llm.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 				var display_llm = null;
/* 000249 */ 			};
/* 000249 */ 			if (typeof wrap_with_semantic_span == 'undefined' || (wrap_with_semantic_span != null && wrap_with_semantic_span.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 				var wrap_with_semantic_span = 'endnotes';
/* 000249 */ 			};
/* 000249 */ 			if (arguments.length) {
/* 000249 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 						switch (__attrib0__) {
/* 000249 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 							case 'display_llm': var display_llm = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						}
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 			else {
/* 000249 */ 			}
/* 000257 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000259 */ 			if (__t__ (display_llm === null)) {
/* 000260 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000260 */ 			}
/* 000261 */ 			else {
/* 000262 */ 				var fmtvalue_llm = display_llm;
/* 000262 */ 			}
/* 000264 */ 			if (__t__ (__call__ (isinstance, null, fmtvalue_llm, LLMFragment))) {
/* 000265 */ 				var fmtvalue_nodelist = fmtvalue_llm.nodes;
/* 000265 */ 			}
/* 000266 */ 			else {
/* 000267 */ 				var fmtvalue_nodelist = fmtvalue_llm;
/* 000267 */ 			}
/* 000269 */ 			var annotations = ['endnote', endnote.category_name];
/* 000270 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000271 */ 				(function () {
/* 000271 */ 					var __accu0__ = annotations;
/* 000271 */ 					return __call__ (__accu0__.append, __accu0__, wrap_with_semantic_span);
/* 000271 */ 				}) ();
/* 000271 */ 			}
/* 000273 */ 			var contents = (function () {
/* 000273 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000273 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_nodelist, render_context: self.render_context, annotations: annotations}));
/* 000273 */ 			}) ();
/* 000290 */ 			return contents;
/* 000290 */ 		});},
/* 000292 */ 		get render_endnote_mark_many () {return __get__ (this, function (self, endnote_list) {
/* 000292 */ 			var counter_prefix_variant = null;
/* 000292 */ 			var counter_with_delimiters = true;
/* 000292 */ 			var counter_with_prefix = false;
/* 000292 */ 			var wrap_with_semantic_span = 'endnotes';
/* 000292 */ 			if (arguments.length) {
/* 000292 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 						switch (__attrib0__) {
/* 000292 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'endnote_list': var endnote_list = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						}
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 			else {
/* 000292 */ 			}
/* 000298 */ 			var render_context = self.render_context;
/* 000299 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000301 */ 			var endnotes_by_category = dict ({});
/* 000302 */ 			var __iterable0__ = endnote_list;
/* 000302 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000302 */ 				var endnote = __getitem__ (__iterable0__, __index0__);
/* 000303 */ 				if (__t__ (!__in__ (endnote.category_name, endnotes_by_category))) {
/* 000304 */ 					__setitem__ (endnotes_by_category, endnote.category_name, []);
/* 000304 */ 				}
/* 000305 */ 				(function () {
/* 000305 */ 					var __accu0__ = __getitem__ (endnotes_by_category, endnote.category_name);
/* 000305 */ 					return __call__ (__accu0__.append, __accu0__, endnote);
/* 000305 */ 				}) ();
/* 000305 */ 			}
/* 000307 */ 			var s_final_blocks = [];
/* 000309 */ 			var __iterable0__ = (function () {
/* 000309 */ 				var __accu0__ = endnotes_by_category;
/* 000309 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000309 */ 			}) ();
/* 000309 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000309 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000309 */ 				var category_name = __left0__ [0];
/* 000309 */ 				var endnote_list = __left0__ [1];
/* 000311 */ 				var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, endnote.category_name);
/* 000314 */ 				var counter_formatter = endnote_category_info.counter_formatter;
/* 000316 */ 				var s_items = (function () {
/* 000316 */ 					var __accu0__ = counter_formatter;
/* 000316 */ 					return __call__ (__accu0__.format_many_llm, __accu0__, (function () {
/* 000316 */ 						var __accu1__ = [];
/* 000317 */ 						var __iterable1__ = endnote_list;
/* 000317 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000317 */ 							var e = __getitem__ (__iterable1__, __index1__);
/* 000317 */ 							(function () {
/* 000317 */ 								var __accu2__ = __accu1__;
/* 000317 */ 								return __call__ (__accu2__.append, __accu2__, e.number);
/* 000317 */ 							}) ();
/* 000317 */ 						}
/* 000317 */ 						return __accu1__;
/* 000317 */ 					}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000317 */ 				}) ();
/* 000323 */ 				var s = '';
/* 000324 */ 				var __iterable1__ = s_items;
/* 000324 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000324 */ 					var sit = __getitem__ (__iterable1__, __index1__);
/* 000325 */ 					var s_frag = (function () {
/* 000325 */ 						var __accu0__ = render_context.doc.environment;
/* 000329 */ 						return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered endnote mark(s) bit {}'.format (__call__ (repr, null, sit))}));
/* 000329 */ 					}) ();
/* 000331 */ 					if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000332 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000332 */ 							var __accu0__ = fragment_renderer;
/* 000332 */ 							return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000332 */ 						}) ());
/* 000332 */ 					}
/* 000333 */ 					else {
/* 000334 */ 						var endnote_link_href = '#{}-{}'.format (category_name, __getitem__ (sit, 'n'));
/* 000336 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000336 */ 							var __accu0__ = fragment_renderer;
/* 000336 */ 							return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['endnote', category_name]}));
/* 000336 */ 						}) ());
/* 000336 */ 					}
/* 000336 */ 				}
/* 000345 */ 				(function () {
/* 000345 */ 					var __accu0__ = s_final_blocks;
/* 000345 */ 					return __call__ (__accu0__.append, __accu0__, s);
/* 000345 */ 				}) ();
/* 000345 */ 			}
/* 000347 */ 			var contents = (function () {
/* 000347 */ 				var __accu0__ = fragment_renderer;
/* 000347 */ 				return __call__ (__accu0__.render_join, __accu0__, s_final_blocks, render_context);
/* 000347 */ 			}) ();
/* 000349 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000350 */ 				return (function () {
/* 000350 */ 					var __accu0__ = fragment_renderer;
/* 000350 */ 					return __call__ (__accu0__.render_semantic_span, __accu0__, contents, wrap_with_semantic_span, render_context);
/* 000350 */ 				}) ();
/* 000350 */ 			}
/* 000355 */ 			return contents;
/* 000355 */ 		});},
/* 000358 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000358 */ 			if (arguments.length) {
/* 000358 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 						switch (__attrib0__) {
/* 000358 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						}
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 			else {
/* 000358 */ 			}
/* 000360 */ 			var render_context = self.render_context;
/* 000361 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000363 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000364 */ 				var encat = category_name;
/* 000365 */ 				var category_name = encat.category_name;
/* 000365 */ 			}
/* 000367 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000367 */ 				if (arguments.length) {
/* 000367 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 							switch (__attrib0__) {
/* 000367 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 							}
/* 000367 */ 						}
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 				else {
/* 000367 */ 				}
/* 000368 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000369 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000370 */ 				return fmtvalue_llm.nodes;
/* 000370 */ 			};
/* 000372 */ 			var the_target_id_generator_fn = function (n) {
/* 000372 */ 				if (arguments.length) {
/* 000372 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 							switch (__attrib0__) {
/* 000372 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 							}
/* 000372 */ 						}
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 				else {
/* 000372 */ 				}
/* 000373 */ 				return '{}-{}'.format (category_name, n);
/* 000373 */ 			};
/* 000379 */ 			var iterable_of_content_endnotes = (function () {
/* 000379 */ 				var __accu0__ = [];
/* 000379 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000379 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000381 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000381 */ 					(function () {
/* 000381 */ 						var __accu1__ = __accu0__;
/* 000381 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000381 */ 					}) ();
/* 000381 */ 				}
/* 000381 */ 				return __accu0__;
/* 000381 */ 			}) ();
/* 000384 */ 			return (function () {
/* 000384 */ 				var __accu0__ = fragment_renderer;
/* 000384 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000384 */ 			}) ();
/* 000384 */ 		});},
/* 000393 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000393 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var target_id = 'endnotes';
/* 000393 */ 			};
/* 000393 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var annotations = null;
/* 000393 */ 			};
/* 000393 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var include_headings_at_level = null;
/* 000393 */ 			};
/* 000393 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var set_headings_target_ids = null;
/* 000393 */ 			};
/* 000393 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var endnotes_heading_title = null;
/* 000393 */ 			};
/* 000393 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000393 */ 				var endnotes_heading_level = null;
/* 000393 */ 			};
/* 000393 */ 			if (arguments.length) {
/* 000393 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 						switch (__attrib0__) {
/* 000393 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						}
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 			else {
/* 000393 */ 			}
/* 000402 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000404 */ 				var include_headings_at_level = (function () {
/* 000404 */ 					var __accu0__ = self.feature.default_render_options;
/* 000404 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_headings_at_level', null);
/* 000404 */ 				}) ();
/* 000404 */ 			}
/* 000405 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000407 */ 				var set_headings_target_ids = (function () {
/* 000407 */ 					var __accu0__ = self.feature.default_render_options;
/* 000407 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000407 */ 				}) ();
/* 000407 */ 			}
/* 000408 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000410 */ 				var endnotes_heading_title = (function () {
/* 000410 */ 					var __accu0__ = self.feature.default_render_options;
/* 000410 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000410 */ 				}) ();
/* 000410 */ 			}
/* 000411 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000413 */ 				var endnotes_heading_level = (function () {
/* 000413 */ 					var __accu0__ = self.feature.default_render_options;
/* 000413 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000413 */ 				}) ();
/* 000413 */ 			}
/* 000416 */ 			var render_context = self.render_context;
/* 000417 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000419 */ 			var has_endnotes = false;
/* 000421 */ 			var blocks = [];
/* 000422 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000422 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000422 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000423 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000423 */ 					continue;
/* 000423 */ 				}
/* 000427 */ 				var has_endnotes = true;
/* 000429 */ 				if (__t__ (__t__ (include_headings_at_level !== null) && include_headings_at_level !== false)) {
/* 000431 */ 					var heading_nodelist = (function () {
/* 000431 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000431 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000431 */ 					}) ();
/* 000436 */ 					var heading_target_id = null;
/* 000437 */ 					if (__t__ (set_headings_target_ids)) {
/* 000438 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000438 */ 					}
/* 000439 */ 					(function () {
/* 000439 */ 						var __accu0__ = blocks;
/* 000440 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000440 */ 							var __accu1__ = fragment_renderer;
/* 000440 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000440 */ 						}) ());
/* 000440 */ 					}) ();
/* 000440 */ 				}
/* 000447 */ 				(function () {
/* 000447 */ 					var __accu0__ = blocks;
/* 000448 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000448 */ 						var __accu1__ = self;
/* 000448 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000448 */ 					}) ());
/* 000448 */ 				}) ();
/* 000448 */ 			}
/* 000451 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000452 */ 				return (function () {
/* 000452 */ 					var __accu0__ = fragment_renderer;
/* 000452 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes'], render_context: render_context}));
/* 000452 */ 				}) ();
/* 000452 */ 			}
/* 000457 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000459 */ 				var heading_title_nodelist = (function () {
/* 000459 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000459 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000459 */ 				}) ();
/* 000464 */ 				(function () {
/* 000464 */ 					var __accu0__ = blocks;
/* 000466 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000466 */ 						var __accu1__ = fragment_renderer;
/* 000466 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000466 */ 					}) ());
/* 000466 */ 				}) ();
/* 000466 */ 			}
/* 000474 */ 			return (function () {
/* 000474 */ 				var __accu0__ = fragment_renderer;
/* 000475 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000475 */ 					var __accu1__ = fragment_renderer;
/* 000475 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks, render_context);
/* 000475 */ 				}) (), __kwargtrans__ ({role: 'endnotes', render_context: self.render_context, annotations: annotations, target_id: target_id}));
/* 000475 */ 			}) ();
/* 000475 */ 		});}
/* 000475 */ 	})
/* 000475 */ });
/* 000487 */ export var FeatureClass = FeatureEndnotes;
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map