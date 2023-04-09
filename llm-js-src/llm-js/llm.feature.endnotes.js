/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:28
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
/* 000006 */ export {Feature, LLMArgumentSpec, Counter, build_counter_formatter, ParsedArgumentsInfo, LLMMacroSpecBase, LLMFragment};
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
/* 000048 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_endnote_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'endnote'}));
/* 000053 */ 		self.counter_formatter = counter_formatter;
/* 000054 */ 		self.heading_title = heading_title;
/* 000055 */ 		self.endnote_command = endnote_command;
/* 000055 */ 	});}
/* 000055 */ });
/* 000059 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [LLMMacroSpecBase], {
/* 000059 */ 	__module__: __name__,
/* 000061 */ 	allowed_in_standalone_mode: false,
/* 000063 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000063 */ 		var kwargs = dict ();
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 				delete kwargs.__kwargtrans__;
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000067 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'endnote_content', llm_doc: 'The content of the endnote to place (e.g., the text of a footnote)'}))]}, kwargs)));
/* 000075 */ 		self.endnote_category_name = endnote_category_name;
/* 000075 */ 	});},
/* 000077 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		return 'Place an end note in the category ‘{}’ withthe given content.'.format (self.endnote_category_name);
/* 000078 */ 	});},
/* 000081 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000083 */ 		var mgr = (function () {
/* 000083 */ 			var __accu0__ = render_context;
/* 000083 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000083 */ 		}) ();
/* 000084 */ 		if (__t__ (mgr === null)) {
/* 000085 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your LLM environment");
/* 000085 */ 			__except0__.__cause__ = null;
/* 000085 */ 			throw __except0__;
/* 000085 */ 		}
/* 000089 */ 		var node_args = (function () {
/* 000089 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000089 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000089 */ 		}) ();
/* 000093 */ 		var content_nodelist = (function () {
/* 000093 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000093 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000093 */ 		}) ();
/* 000098 */ 		var endnote = (function () {
/* 000098 */ 			var __accu0__ = mgr;
/* 000098 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000098 */ 		}) ();
/* 000104 */ 		var rendered_endnote_mark = (function () {
/* 000104 */ 			var __accu0__ = mgr;
/* 000104 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000104 */ 		}) ();
/* 000105 */ 		return rendered_endnote_mark;
/* 000105 */ 	});}
/* 000105 */ });
/* 000110 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000110 */ 	__module__: __name__,
/* 000111 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_llm, content_nodelist, ref_label_prefix, ref_label) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000113 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000114 */ 		self.category_name = category_name;
/* 000115 */ 		self.number = number;
/* 000116 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000117 */ 		self.content_nodelist = content_nodelist;
/* 000118 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000119 */ 		self.ref_label = ref_label;
/* 000120 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_llm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000120 */ 	});},
/* 000123 */ 	get asdict () {return __get__ (this, function (self) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		return (function () {
/* 000124 */ 			var __accu0__ = [];
/* 000124 */ 			var __iterable0__ = self._fields;
/* 000124 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000124 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000124 */ 				(function () {
/* 000124 */ 					var __accu1__ = __accu0__;
/* 000124 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000124 */ 			return dict (__accu0__);
/* 000124 */ 		}) ();
/* 000124 */ 	});},
/* 000126 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		return (function () {
/* 000127 */ 			var __accu0__ = '{}({})';
/* 000129 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000129 */ 				var __accu1__ = ', ';
/* 000129 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000129 */ 					var __accu2__ = [];
/* 000129 */ 					var __iterable0__ = self._fields;
/* 000129 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000129 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000129 */ 						(function () {
/* 000129 */ 							var __accu3__ = __accu2__;
/* 000129 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000129 */ 						}) ();
/* 000129 */ 					}
/* 000129 */ 					return __accu2__;
/* 000129 */ 				}) ());
/* 000129 */ 			}) ());
/* 000129 */ 		}) ();
/* 000129 */ 	});}
/* 000129 */ });
/* 000135 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000135 */ 	__module__: __name__,
/* 000137 */ 	feature_name: 'endnotes',
/* 000138 */ 	feature_title: 'Endnotes: footnotes, references, etc.',
/* 000140 */ 	get feature_llm_doc () {return __get__ (this, function (self) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000145 */ 		return __add__ ('Add footnotes and support for other endnotes (e.g., citations)\n            at the bottom of your pages or your document.  This environment\n            supports the base category(ies): ', (function () {
/* 000145 */ 			var __accu0__ = ',';
/* 000145 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000145 */ 				var __accu1__ = [];
/* 000145 */ 				var __iterable0__ = self.base_categories;
/* 000145 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000145 */ 					var cat = __getitem__ (__iterable0__, __index0__);
/* 000145 */ 					(function () {
/* 000145 */ 						var __accu2__ = __accu1__;
/* 000145 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (cat.category_name));
/* 000145 */ 					}) ();
/* 000145 */ 				}
/* 000145 */ 				return __accu1__;
/* 000145 */ 			}) ());
/* 000145 */ 		}) ());
/* 000145 */ 	});},
/* 000148 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000148 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000148 */ 			var render_options = null;
/* 000148 */ 		};
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000154 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000156 */ 		var _mkcatobj = function (x) {
/* 000156 */ 			if (arguments.length) {
/* 000156 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 						switch (__attrib0__) {
/* 000156 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						}
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 			else {
/* 000156 */ 			}
/* 000157 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000158 */ 				return x;
/* 000158 */ 			}
/* 000159 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000159 */ 		};
/* 000161 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000162 */ 			var categories = [];
/* 000162 */ 		}
/* 000164 */ 		self.base_categories = (function () {
/* 000164 */ 			var __accu0__ = [];
/* 000164 */ 			var __iterable0__ = categories;
/* 000164 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000166 */ 				(function () {
/* 000166 */ 					var __accu1__ = __accu0__;
/* 000165 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000165 */ 				}) ();
/* 000165 */ 			}
/* 000165 */ 			return __accu0__;
/* 000165 */ 		}) ();
/* 000169 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000169 */ 	});},
/* 000171 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000173 */ 		var macros = [];
/* 000174 */ 		var __iterable0__ = self.base_categories;
/* 000174 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000174 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000175 */ 			if (__t__ (encat.endnote_command)) {
/* 000176 */ 				(function () {
/* 000176 */ 					var __accu0__ = macros;
/* 000177 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000177 */ 				}) ();
/* 000177 */ 			}
/* 000177 */ 		}
/* 000183 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000185 */ 	});},
/* 000185 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000185 */ 		__module__: __name__,
/* 000186 */ 		get initialize () {return __get__ (this, function (self) {
/* 000186 */ 			if (arguments.length) {
/* 000186 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 						switch (__attrib0__) {
/* 000186 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						}
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 			else {
/* 000186 */ 			}
/* 000187 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000188 */ 			self.categories_by_name = (function () {
/* 000188 */ 				var __accu0__ = [];
/* 000188 */ 				var __iterable0__ = self.categories;
/* 000188 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000189 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000189 */ 					(function () {
/* 000189 */ 						var __accu1__ = __accu0__;
/* 000189 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000189 */ 					}) ();
/* 000189 */ 				}
/* 000189 */ 				return dict (__accu0__);
/* 000189 */ 			}) ();
/* 000189 */ 		});},
/* 000192 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000192 */ 			if (arguments.length) {
/* 000192 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 						switch (__attrib0__) {
/* 000192 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						}
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 			else {
/* 000192 */ 			}
/* 000193 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000194 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000194 */ 				__except0__.__cause__ = null;
/* 000194 */ 				throw __except0__;
/* 000194 */ 			}
/* 000198 */ 			(function () {
/* 000198 */ 				var __accu0__ = self.categories;
/* 000198 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000198 */ 			}) ();
/* 000199 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000199 */ 		});}
/* 000201 */ 	}),
/* 000201 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000201 */ 		__module__: __name__,
/* 000203 */ 		get initialize () {return __get__ (this, function (self) {
/* 000203 */ 			if (arguments.length) {
/* 000203 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 						switch (__attrib0__) {
/* 000203 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						}
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 			else {
/* 000203 */ 			}
/* 000204 */ 			self.endnotes = (function () {
/* 000204 */ 				var __accu0__ = [];
/* 000204 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000204 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 					(function () {
/* 000206 */ 						var __accu1__ = __accu0__;
/* 000206 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000206 */ 					}) ();
/* 000206 */ 				}
/* 000206 */ 				return dict (__accu0__);
/* 000206 */ 			}) ();
/* 000208 */ 			self.endnote_counters = (function () {
/* 000208 */ 				var __accu0__ = [];
/* 000208 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000208 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000210 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000210 */ 					(function () {
/* 000210 */ 						var __accu1__ = __accu0__;
/* 000209 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, __call__ (Counter, null, c.counter_formatter)]);
/* 000209 */ 					}) ();
/* 000209 */ 				}
/* 000209 */ 				return dict (__accu0__);
/* 000209 */ 			}) ();
/* 000212 */ 			self.endnote_instances = dict ({});
/* 000212 */ 		});},
/* 000214 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000214 */ 			var ref_label_prefix = null;
/* 000214 */ 			var ref_label = null;
/* 000214 */ 			if (arguments.length) {
/* 000214 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 						switch (__attrib0__) {
/* 000214 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						}
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 			else {
/* 000214 */ 			}
/* 000217 */ 			var node_id = (function () {
/* 000217 */ 				var __accu0__ = self;
/* 000217 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000217 */ 			}) ();
/* 000219 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000221 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000221 */ 			}
/* 000227 */ 			var __left0__ = (function () {
/* 000227 */ 				var __accu0__ = __getitem__ (self.endnote_counters, category_name);
/* 000227 */ 				return __call__ (__accu0__.step_and_format_llm, __accu0__);
/* 000227 */ 			}) ();
/* 000227 */ 			var number = __left0__ [0];
/* 000227 */ 			var fmtvalue_llm_text = __left0__ [1];
/* 000229 */ 			var fmtvalue_llm = (function () {
/* 000229 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000229 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000229 */ 			}) ();
/* 000235 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000243 */ 			(function () {
/* 000243 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000243 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000243 */ 			}) ();
/* 000245 */ 			if (__t__ (node_id !== null)) {
/* 000246 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000246 */ 			}
/* 000248 */ 			return endnote;
/* 000248 */ 		});},
/* 000250 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote, display_llm, wrap_with_semantic_span) {
/* 000250 */ 			if (typeof display_llm == 'undefined' || (display_llm != null && display_llm.hasOwnProperty ("__kwargtrans__"))) {;
/* 000250 */ 				var display_llm = null;
/* 000250 */ 			};
/* 000250 */ 			if (typeof wrap_with_semantic_span == 'undefined' || (wrap_with_semantic_span != null && wrap_with_semantic_span.hasOwnProperty ("__kwargtrans__"))) {;
/* 000250 */ 				var wrap_with_semantic_span = 'endnotes';
/* 000250 */ 			};
/* 000250 */ 			if (arguments.length) {
/* 000250 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 						switch (__attrib0__) {
/* 000250 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 							case 'display_llm': var display_llm = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						}
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 			else {
/* 000250 */ 			}
/* 000258 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000260 */ 			if (__t__ (display_llm === null)) {
/* 000261 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000261 */ 			}
/* 000262 */ 			else {
/* 000263 */ 				var fmtvalue_llm = display_llm;
/* 000263 */ 			}
/* 000265 */ 			if (__t__ (__call__ (isinstance, null, fmtvalue_llm, LLMFragment))) {
/* 000266 */ 				var fmtvalue_nodelist = fmtvalue_llm.nodes;
/* 000266 */ 			}
/* 000267 */ 			else {
/* 000268 */ 				var fmtvalue_nodelist = fmtvalue_llm;
/* 000268 */ 			}
/* 000270 */ 			var annotations = ['endnote', endnote.category_name];
/* 000271 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000272 */ 				(function () {
/* 000272 */ 					var __accu0__ = annotations;
/* 000272 */ 					return __call__ (__accu0__.append, __accu0__, wrap_with_semantic_span);
/* 000272 */ 				}) ();
/* 000272 */ 			}
/* 000274 */ 			var contents = (function () {
/* 000274 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000274 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_nodelist, render_context: self.render_context, annotations: annotations}));
/* 000274 */ 			}) ();
/* 000291 */ 			return contents;
/* 000291 */ 		});},
/* 000293 */ 		get render_endnote_mark_many () {return __get__ (this, function (self, endnote_list) {
/* 000293 */ 			var counter_prefix_variant = null;
/* 000293 */ 			var counter_with_delimiters = true;
/* 000293 */ 			var counter_with_prefix = false;
/* 000293 */ 			var wrap_with_semantic_span = 'endnotes';
/* 000293 */ 			if (arguments.length) {
/* 000293 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 						switch (__attrib0__) {
/* 000293 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'endnote_list': var endnote_list = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						}
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 			else {
/* 000293 */ 			}
/* 000299 */ 			var render_context = self.render_context;
/* 000300 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000302 */ 			var endnotes_by_category = dict ({});
/* 000303 */ 			var __iterable0__ = endnote_list;
/* 000303 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000303 */ 				var endnote = __getitem__ (__iterable0__, __index0__);
/* 000304 */ 				if (__t__ (!__in__ (endnote.category_name, endnotes_by_category))) {
/* 000305 */ 					__setitem__ (endnotes_by_category, endnote.category_name, []);
/* 000305 */ 				}
/* 000306 */ 				(function () {
/* 000306 */ 					var __accu0__ = __getitem__ (endnotes_by_category, endnote.category_name);
/* 000306 */ 					return __call__ (__accu0__.append, __accu0__, endnote);
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000308 */ 			var s_final_blocks = [];
/* 000310 */ 			var __iterable0__ = (function () {
/* 000310 */ 				var __accu0__ = endnotes_by_category;
/* 000310 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000310 */ 			}) ();
/* 000310 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 				var category_name = __left0__ [0];
/* 000310 */ 				var endnote_list = __left0__ [1];
/* 000312 */ 				var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, endnote.category_name);
/* 000315 */ 				var counter_formatter = endnote_category_info.counter_formatter;
/* 000317 */ 				var s_items = (function () {
/* 000317 */ 					var __accu0__ = counter_formatter;
/* 000317 */ 					return __call__ (__accu0__.format_many_llm, __accu0__, (function () {
/* 000317 */ 						var __accu1__ = [];
/* 000318 */ 						var __iterable1__ = endnote_list;
/* 000318 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000318 */ 							var e = __getitem__ (__iterable1__, __index1__);
/* 000318 */ 							(function () {
/* 000318 */ 								var __accu2__ = __accu1__;
/* 000318 */ 								return __call__ (__accu2__.append, __accu2__, e.number);
/* 000318 */ 							}) ();
/* 000318 */ 						}
/* 000318 */ 						return __accu1__;
/* 000318 */ 					}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000318 */ 				}) ();
/* 000324 */ 				var s = '';
/* 000325 */ 				var __iterable1__ = s_items;
/* 000325 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000325 */ 					var sit = __getitem__ (__iterable1__, __index1__);
/* 000326 */ 					var s_frag = (function () {
/* 000326 */ 						var __accu0__ = render_context.doc.environment;
/* 000330 */ 						return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered endnote mark(s) bit {}'.format (__call__ (repr, null, sit))}));
/* 000330 */ 					}) ();
/* 000332 */ 					if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000333 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000333 */ 							var __accu0__ = fragment_renderer;
/* 000333 */ 							return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000333 */ 						}) ());
/* 000333 */ 					}
/* 000334 */ 					else {
/* 000335 */ 						var endnote_link_href = '#{}-{}'.format (category_name, __getitem__ (sit, 'n'));
/* 000337 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000337 */ 							var __accu0__ = fragment_renderer;
/* 000337 */ 							return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['endnote', category_name]}));
/* 000337 */ 						}) ());
/* 000337 */ 					}
/* 000337 */ 				}
/* 000346 */ 				(function () {
/* 000346 */ 					var __accu0__ = s_final_blocks;
/* 000346 */ 					return __call__ (__accu0__.append, __accu0__, s);
/* 000346 */ 				}) ();
/* 000346 */ 			}
/* 000348 */ 			var contents = (function () {
/* 000348 */ 				var __accu0__ = fragment_renderer;
/* 000348 */ 				return __call__ (__accu0__.render_join, __accu0__, s_final_blocks, render_context);
/* 000348 */ 			}) ();
/* 000350 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000351 */ 				return (function () {
/* 000351 */ 					var __accu0__ = fragment_renderer;
/* 000351 */ 					return __call__ (__accu0__.render_semantic_span, __accu0__, contents, wrap_with_semantic_span, render_context);
/* 000351 */ 				}) ();
/* 000351 */ 			}
/* 000356 */ 			return contents;
/* 000356 */ 		});},
/* 000359 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000359 */ 			if (arguments.length) {
/* 000359 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 						switch (__attrib0__) {
/* 000359 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						}
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 			else {
/* 000359 */ 			}
/* 000361 */ 			var render_context = self.render_context;
/* 000362 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000364 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000365 */ 				var encat = category_name;
/* 000366 */ 				var category_name = encat.category_name;
/* 000366 */ 			}
/* 000368 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000368 */ 				if (arguments.length) {
/* 000368 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 							switch (__attrib0__) {
/* 000368 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 							}
/* 000368 */ 						}
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 				else {
/* 000368 */ 				}
/* 000369 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000370 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000371 */ 				return fmtvalue_llm.nodes;
/* 000371 */ 			};
/* 000373 */ 			var the_target_id_generator_fn = function (n) {
/* 000373 */ 				if (arguments.length) {
/* 000373 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 							switch (__attrib0__) {
/* 000373 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 							}
/* 000373 */ 						}
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 				else {
/* 000373 */ 				}
/* 000374 */ 				return '{}-{}'.format (category_name, n);
/* 000374 */ 			};
/* 000380 */ 			var iterable_of_content_endnotes = (function () {
/* 000380 */ 				var __accu0__ = [];
/* 000380 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000380 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000382 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000382 */ 					(function () {
/* 000382 */ 						var __accu1__ = __accu0__;
/* 000382 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000382 */ 					}) ();
/* 000382 */ 				}
/* 000382 */ 				return __accu0__;
/* 000382 */ 			}) ();
/* 000385 */ 			return (function () {
/* 000385 */ 				var __accu0__ = fragment_renderer;
/* 000385 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000385 */ 			}) ();
/* 000385 */ 		});},
/* 000394 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000394 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var target_id = 'endnotes';
/* 000394 */ 			};
/* 000394 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var annotations = null;
/* 000394 */ 			};
/* 000394 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var include_headings_at_level = null;
/* 000394 */ 			};
/* 000394 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var set_headings_target_ids = null;
/* 000394 */ 			};
/* 000394 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var endnotes_heading_title = null;
/* 000394 */ 			};
/* 000394 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 				var endnotes_heading_level = null;
/* 000394 */ 			};
/* 000394 */ 			if (arguments.length) {
/* 000394 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 						switch (__attrib0__) {
/* 000394 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						}
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 			else {
/* 000394 */ 			}
/* 000403 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000405 */ 				var include_headings_at_level = (function () {
/* 000405 */ 					var __accu0__ = self.feature.default_render_options;
/* 000405 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_headings_at_level', null);
/* 000405 */ 				}) ();
/* 000405 */ 			}
/* 000406 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000408 */ 				var set_headings_target_ids = (function () {
/* 000408 */ 					var __accu0__ = self.feature.default_render_options;
/* 000408 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000408 */ 				}) ();
/* 000408 */ 			}
/* 000409 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000411 */ 				var endnotes_heading_title = (function () {
/* 000411 */ 					var __accu0__ = self.feature.default_render_options;
/* 000411 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000411 */ 				}) ();
/* 000411 */ 			}
/* 000412 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000414 */ 				var endnotes_heading_level = (function () {
/* 000414 */ 					var __accu0__ = self.feature.default_render_options;
/* 000414 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000414 */ 				}) ();
/* 000414 */ 			}
/* 000417 */ 			var render_context = self.render_context;
/* 000418 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000420 */ 			var has_endnotes = false;
/* 000422 */ 			var blocks = [];
/* 000423 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000423 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000423 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000424 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000424 */ 					continue;
/* 000424 */ 				}
/* 000428 */ 				var has_endnotes = true;
/* 000430 */ 				if (__t__ (__t__ (include_headings_at_level !== null) && include_headings_at_level !== false)) {
/* 000432 */ 					var heading_nodelist = (function () {
/* 000432 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000432 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000432 */ 					}) ();
/* 000437 */ 					var heading_target_id = null;
/* 000438 */ 					if (__t__ (set_headings_target_ids)) {
/* 000439 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000439 */ 					}
/* 000440 */ 					(function () {
/* 000440 */ 						var __accu0__ = blocks;
/* 000441 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000441 */ 							var __accu1__ = fragment_renderer;
/* 000441 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000441 */ 						}) ());
/* 000441 */ 					}) ();
/* 000441 */ 				}
/* 000448 */ 				(function () {
/* 000448 */ 					var __accu0__ = blocks;
/* 000449 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000449 */ 						var __accu1__ = self;
/* 000449 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000449 */ 					}) ());
/* 000449 */ 				}) ();
/* 000449 */ 			}
/* 000452 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000453 */ 				return (function () {
/* 000453 */ 					var __accu0__ = fragment_renderer;
/* 000453 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes'], render_context: render_context}));
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000458 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000460 */ 				var heading_title_nodelist = (function () {
/* 000460 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000460 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000460 */ 				}) ();
/* 000465 */ 				(function () {
/* 000465 */ 					var __accu0__ = blocks;
/* 000467 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000467 */ 						var __accu1__ = fragment_renderer;
/* 000467 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000467 */ 					}) ());
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000475 */ 			return (function () {
/* 000475 */ 				var __accu0__ = fragment_renderer;
/* 000476 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000476 */ 					var __accu1__ = fragment_renderer;
/* 000476 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks, render_context);
/* 000476 */ 				}) (), __kwargtrans__ ({role: 'endnotes', render_context: self.render_context, annotations: annotations, target_id: target_id}));
/* 000476 */ 			}) ();
/* 000476 */ 		});}
/* 000476 */ 	})
/* 000476 */ });
/* 000488 */ export var FeatureClass = FeatureEndnotes;
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map