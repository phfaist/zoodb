/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:42
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import {Counter} from './flm.feature.numbering.js';
/* 000017 */ import {build_counter_formatter} from './flm.counter.js';
/* 000016 */ import {Feature} from './flm.feature._base.js';
/* 000014 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000013 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000009 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsedArgumentsInfo, Counter, FLMArgumentSpec, build_counter_formatter, FLMFragment, FLMMacroSpecBase, Feature};
/* 000001 */ var __name__ = 'flm.feature.endnotes';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000022 */ export var _default_endnote_counter_formatter_spec = dict ({'format_num': dict ({'template': '${roman}'}), 'prefix_display': null, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000031 */ export var EndnoteCategory =  __class__ ('EndnoteCategory', [object], {
/* 000031 */ 	__module__: __name__,
/* 000045 */ 	get __init__ () {return __get__ (this, function (self, category_name, counter_formatter, heading_title, endnote_command) {
/* 000045 */ 		if (typeof endnote_command == 'undefined' || (endnote_command != null && endnote_command.hasOwnProperty ("__kwargtrans__"))) {;
/* 000045 */ 			var endnote_command = null;
/* 000045 */ 		};
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'heading_title': var heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'endnote_command': var endnote_command = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000047 */ 		__call__ (__call__ (__super__, null, EndnoteCategory, '__init__'), null, self);
/* 000048 */ 		self.category_name = category_name;
/* 000049 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_endnote_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'endnote'}));
/* 000054 */ 		self.counter_formatter = counter_formatter;
/* 000055 */ 		self.heading_title = heading_title;
/* 000056 */ 		self.endnote_command = endnote_command;
/* 000056 */ 	});}
/* 000056 */ });
/* 000060 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [FLMMacroSpecBase], {
/* 000060 */ 	__module__: __name__,
/* 000062 */ 	allowed_in_standalone_mode: false,
/* 000064 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000064 */ 		var kwargs = dict ();
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 				delete kwargs.__kwargtrans__;
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000068 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'endnote_content', flm_doc: 'The content of the endnote to place (e.g., the text of a footnote)'}))]}, kwargs)));
/* 000076 */ 		self.endnote_category_name = endnote_category_name;
/* 000076 */ 	});},
/* 000078 */ 	_fields: tuple (['macroname', 'endnote_category_name']),
/* 000080 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000081 */ 		return 'Place an end note in the category ‘{}’ withthe given content.'.format (self.endnote_category_name);
/* 000081 */ 	});},
/* 000084 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000086 */ 		var mgr = (function () {
/* 000086 */ 			var __accu0__ = render_context;
/* 000086 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000086 */ 		}) ();
/* 000087 */ 		if (__t__ (mgr === null)) {
/* 000088 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your FLM environment");
/* 000088 */ 			__except0__.__cause__ = null;
/* 000088 */ 			throw __except0__;
/* 000088 */ 		}
/* 000092 */ 		var node_args = (function () {
/* 000092 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000092 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000092 */ 		}) ();
/* 000096 */ 		var content_nodelist = (function () {
/* 000096 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000096 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000096 */ 		}) ();
/* 000101 */ 		var endnote = (function () {
/* 000101 */ 			var __accu0__ = mgr;
/* 000101 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000101 */ 		}) ();
/* 000107 */ 		var rendered_endnote_mark = (function () {
/* 000107 */ 			var __accu0__ = mgr;
/* 000107 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000107 */ 		}) ();
/* 000108 */ 		return rendered_endnote_mark;
/* 000108 */ 	});}
/* 000108 */ });
/* 000113 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000113 */ 	__module__: __name__,
/* 000114 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_flm, content_nodelist, ref_label_prefix, ref_label) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000116 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000117 */ 		self.category_name = category_name;
/* 000118 */ 		self.number = number;
/* 000119 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000120 */ 		self.content_nodelist = content_nodelist;
/* 000121 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000122 */ 		self.ref_label = ref_label;
/* 000123 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_flm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000123 */ 	});},
/* 000126 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000127 */ 			var __accu0__ = [];
/* 000127 */ 			var __iterable0__ = self._fields;
/* 000127 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000127 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000127 */ 				(function () {
/* 000127 */ 					var __accu1__ = __accu0__;
/* 000127 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000127 */ 				}) ();
/* 000127 */ 			}
/* 000127 */ 			return dict (__accu0__);
/* 000127 */ 		}) ();
/* 000127 */ 	});},
/* 000129 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		return (function () {
/* 000130 */ 			var __accu0__ = '{}({})';
/* 000132 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000132 */ 				var __accu1__ = ', ';
/* 000132 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000132 */ 					var __accu2__ = [];
/* 000132 */ 					var __iterable0__ = self._fields;
/* 000132 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000132 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000132 */ 						(function () {
/* 000132 */ 							var __accu3__ = __accu2__;
/* 000132 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000132 */ 						}) ();
/* 000132 */ 					}
/* 000132 */ 					return __accu2__;
/* 000132 */ 				}) ());
/* 000132 */ 			}) ());
/* 000132 */ 		}) ();
/* 000132 */ 	});}
/* 000132 */ });
/* 000138 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000138 */ 	__module__: __name__,
/* 000140 */ 	feature_name: 'endnotes',
/* 000141 */ 	feature_title: 'Endnotes: footnotes, references, etc.',
/* 000143 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
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
/* 000148 */ 		return __add__ ('Add footnotes and support for other endnotes (e.g., citations)\n            at the bottom of your pages or your document.  This environment\n            supports the base category(ies): ', (function () {
/* 000148 */ 			var __accu0__ = ',';
/* 000148 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000148 */ 				var __accu1__ = [];
/* 000148 */ 				var __iterable0__ = self.base_categories;
/* 000148 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000148 */ 					var cat = __getitem__ (__iterable0__, __index0__);
/* 000148 */ 					(function () {
/* 000148 */ 						var __accu2__ = __accu1__;
/* 000148 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (cat.category_name));
/* 000148 */ 					}) ();
/* 000148 */ 				}
/* 000148 */ 				return __accu1__;
/* 000148 */ 			}) ());
/* 000148 */ 		}) ());
/* 000148 */ 	});},
/* 000151 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000151 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 			var render_options = null;
/* 000151 */ 		};
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000157 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000159 */ 		var _mkcatobj = function (x) {
/* 000159 */ 			if (arguments.length) {
/* 000159 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 						switch (__attrib0__) {
/* 000159 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						}
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 			else {
/* 000159 */ 			}
/* 000160 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000161 */ 				return x;
/* 000161 */ 			}
/* 000162 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000162 */ 		};
/* 000164 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000165 */ 			var categories = [];
/* 000165 */ 		}
/* 000167 */ 		self.base_categories = (function () {
/* 000167 */ 			var __accu0__ = [];
/* 000167 */ 			var __iterable0__ = categories;
/* 000167 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000169 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000169 */ 				(function () {
/* 000169 */ 					var __accu1__ = __accu0__;
/* 000168 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000168 */ 				}) ();
/* 000168 */ 			}
/* 000168 */ 			return __accu0__;
/* 000168 */ 		}) ();
/* 000172 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000172 */ 	});},
/* 000174 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000176 */ 		var macros = [];
/* 000177 */ 		var __iterable0__ = self.base_categories;
/* 000177 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000177 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 			if (__t__ (encat.endnote_command)) {
/* 000179 */ 				(function () {
/* 000179 */ 					var __accu0__ = macros;
/* 000180 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000180 */ 				}) ();
/* 000180 */ 			}
/* 000180 */ 		}
/* 000186 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000188 */ 	});},
/* 000188 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000188 */ 		__module__: __name__,
/* 000189 */ 		get initialize () {return __get__ (this, function (self) {
/* 000189 */ 			if (arguments.length) {
/* 000189 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 						switch (__attrib0__) {
/* 000189 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						}
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 			else {
/* 000189 */ 			}
/* 000190 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000191 */ 			self.categories_by_name = (function () {
/* 000191 */ 				var __accu0__ = [];
/* 000191 */ 				var __iterable0__ = self.categories;
/* 000191 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 					(function () {
/* 000192 */ 						var __accu1__ = __accu0__;
/* 000192 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000192 */ 					}) ();
/* 000192 */ 				}
/* 000192 */ 				return dict (__accu0__);
/* 000192 */ 			}) ();
/* 000192 */ 		});},
/* 000195 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000195 */ 			if (arguments.length) {
/* 000195 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 						switch (__attrib0__) {
/* 000195 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						}
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 			else {
/* 000195 */ 			}
/* 000196 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000197 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000197 */ 				__except0__.__cause__ = null;
/* 000197 */ 				throw __except0__;
/* 000197 */ 			}
/* 000201 */ 			(function () {
/* 000201 */ 				var __accu0__ = self.categories;
/* 000201 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000201 */ 			}) ();
/* 000202 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000202 */ 		});}
/* 000204 */ 	}),
/* 000204 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000204 */ 		__module__: __name__,
/* 000206 */ 		get initialize () {return __get__ (this, function (self, inhibit_render_endnote_marks) {
/* 000206 */ 			if (typeof inhibit_render_endnote_marks == 'undefined' || (inhibit_render_endnote_marks != null && inhibit_render_endnote_marks.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 				var inhibit_render_endnote_marks = false;
/* 000206 */ 			};
/* 000206 */ 			if (arguments.length) {
/* 000206 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 						switch (__attrib0__) {
/* 000206 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'inhibit_render_endnote_marks': var inhibit_render_endnote_marks = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						}
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 			else {
/* 000206 */ 			}
/* 000207 */ 			self.endnotes = (function () {
/* 000207 */ 				var __accu0__ = [];
/* 000207 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000207 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000209 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 					(function () {
/* 000209 */ 						var __accu1__ = __accu0__;
/* 000209 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000209 */ 					}) ();
/* 000209 */ 				}
/* 000209 */ 				return dict (__accu0__);
/* 000209 */ 			}) ();
/* 000211 */ 			self.endnote_counters = (function () {
/* 000211 */ 				var __accu0__ = [];
/* 000211 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000211 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 					(function () {
/* 000213 */ 						var __accu1__ = __accu0__;
/* 000212 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, __call__ (Counter, null, c.counter_formatter)]);
/* 000212 */ 					}) ();
/* 000212 */ 				}
/* 000212 */ 				return dict (__accu0__);
/* 000212 */ 			}) ();
/* 000215 */ 			self.endnote_instances = dict ({});
/* 000216 */ 			self.inhibit_render_endnote_marks = inhibit_render_endnote_marks;
/* 000216 */ 		});},
/* 000218 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000218 */ 			var ref_label_prefix = null;
/* 000218 */ 			var ref_label = null;
/* 000218 */ 			if (arguments.length) {
/* 000218 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 						switch (__attrib0__) {
/* 000218 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						}
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 			else {
/* 000218 */ 			}
/* 000221 */ 			var node_id = (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000221 */ 			}) ();
/* 000223 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000225 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000225 */ 			}
/* 000231 */ 			var __left0__ = (function () {
/* 000231 */ 				var __accu0__ = __getitem__ (self.endnote_counters, category_name);
/* 000231 */ 				return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000231 */ 			}) ();
/* 000231 */ 			var number = __left0__ [0];
/* 000231 */ 			var fmtvalue_flm_text = __left0__ [1];
/* 000233 */ 			// pass;
/* 000238 */ 			var fmtvalue_flm = (function () {
/* 000238 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000238 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000238 */ 			}) ();
/* 000244 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_flm: fmtvalue_flm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000252 */ 			(function () {
/* 000252 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000252 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000252 */ 			}) ();
/* 000254 */ 			if (__t__ (node_id !== null)) {
/* 000255 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000255 */ 			}
/* 000257 */ 			return endnote;
/* 000257 */ 		});},
/* 000259 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote, display_flm, wrap_with_semantic_span) {
/* 000259 */ 			if (typeof display_flm == 'undefined' || (display_flm != null && display_flm.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 				var display_flm = null;
/* 000259 */ 			};
/* 000259 */ 			if (typeof wrap_with_semantic_span == 'undefined' || (wrap_with_semantic_span != null && wrap_with_semantic_span.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 				var wrap_with_semantic_span = 'endnote-marks';
/* 000259 */ 			};
/* 000259 */ 			if (arguments.length) {
/* 000259 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 						switch (__attrib0__) {
/* 000259 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 							case 'display_flm': var display_flm = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						}
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 			else {
/* 000259 */ 			}
/* 000268 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000269 */ 				return (function () {
/* 000269 */ 					var __accu0__ = self.render_context.fragment_renderer;
/* 000269 */ 					return __call__ (__accu0__.render_nothing, __accu0__, self.render_context);
/* 000269 */ 				}) ();
/* 000269 */ 			}
/* 000271 */ 			// pass;
/* 000275 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000277 */ 			if (__t__ (display_flm === null)) {
/* 000278 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000278 */ 			}
/* 000279 */ 			else {
/* 000280 */ 				var fmtvalue_flm = display_flm;
/* 000280 */ 			}
/* 000282 */ 			if (__t__ (__call__ (isinstance, null, fmtvalue_flm, FLMFragment))) {
/* 000283 */ 				var fmtvalue_nodelist = fmtvalue_flm.nodes;
/* 000283 */ 			}
/* 000284 */ 			else {
/* 000285 */ 				var fmtvalue_nodelist = fmtvalue_flm;
/* 000285 */ 			}
/* 000287 */ 			var annotations = ['endnote', endnote.category_name];
/* 000288 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000289 */ 				(function () {
/* 000289 */ 					var __accu0__ = annotations;
/* 000289 */ 					return __call__ (__accu0__.append, __accu0__, wrap_with_semantic_span);
/* 000289 */ 				}) ();
/* 000289 */ 			}
/* 000291 */ 			var contents = (function () {
/* 000291 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000291 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_nodelist, render_context: self.render_context, annotations: annotations}));
/* 000291 */ 			}) ();
/* 000302 */ 			return contents;
/* 000302 */ 		});},
/* 000304 */ 		get render_endnote_mark_many () {return __get__ (this, function (self, endnote_list) {
/* 000304 */ 			var counter_prefix_variant = null;
/* 000304 */ 			var counter_with_delimiters = true;
/* 000304 */ 			var counter_with_prefix = false;
/* 000304 */ 			var wrap_with_semantic_span = 'endnote-marks';
/* 000304 */ 			if (arguments.length) {
/* 000304 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 						switch (__attrib0__) {
/* 000304 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'endnote_list': var endnote_list = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						}
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 			else {
/* 000304 */ 			}
/* 000310 */ 			var render_context = self.render_context;
/* 000311 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000313 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000314 */ 				return (function () {
/* 000314 */ 					var __accu0__ = fragment_renderer;
/* 000314 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000314 */ 				}) ();
/* 000314 */ 			}
/* 000316 */ 			var endnotes_by_category = dict ({});
/* 000317 */ 			var __iterable0__ = endnote_list;
/* 000317 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000317 */ 				var endnote = __getitem__ (__iterable0__, __index0__);
/* 000318 */ 				if (__t__ (!__in__ (endnote.category_name, endnotes_by_category))) {
/* 000319 */ 					__setitem__ (endnotes_by_category, endnote.category_name, []);
/* 000319 */ 				}
/* 000320 */ 				(function () {
/* 000320 */ 					var __accu0__ = __getitem__ (endnotes_by_category, endnote.category_name);
/* 000320 */ 					return __call__ (__accu0__.append, __accu0__, endnote);
/* 000320 */ 				}) ();
/* 000320 */ 			}
/* 000322 */ 			var s_final_blocks = [];
/* 000324 */ 			var __iterable0__ = (function () {
/* 000324 */ 				var __accu0__ = endnotes_by_category;
/* 000324 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000324 */ 			}) ();
/* 000324 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000324 */ 				var category_name = __left0__ [0];
/* 000324 */ 				var endnote_list = __left0__ [1];
/* 000326 */ 				var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, endnote.category_name);
/* 000329 */ 				var counter_formatter = endnote_category_info.counter_formatter;
/* 000331 */ 				var s_items = (function () {
/* 000331 */ 					var __accu0__ = counter_formatter;
/* 000331 */ 					return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000331 */ 						var __accu1__ = [];
/* 000332 */ 						var __iterable1__ = endnote_list;
/* 000332 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000332 */ 							var e = __getitem__ (__iterable1__, __index1__);
/* 000332 */ 							(function () {
/* 000332 */ 								var __accu2__ = __accu1__;
/* 000332 */ 								return __call__ (__accu2__.append, __accu2__, e.number);
/* 000332 */ 							}) ();
/* 000332 */ 						}
/* 000332 */ 						return __accu1__;
/* 000332 */ 					}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000332 */ 				}) ();
/* 000338 */ 				var s = '';
/* 000339 */ 				var __iterable1__ = s_items;
/* 000339 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000339 */ 					var sit = __getitem__ (__iterable1__, __index1__);
/* 000340 */ 					var s_frag = (function () {
/* 000340 */ 						var __accu0__ = render_context.doc.environment;
/* 000344 */ 						return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered endnote mark(s) bit {}'.format (__call__ (repr, null, sit))}));
/* 000344 */ 					}) ();
/* 000346 */ 					if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000347 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000347 */ 							var __accu0__ = fragment_renderer;
/* 000347 */ 							return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000347 */ 						}) ());
/* 000347 */ 					}
/* 000348 */ 					else {
/* 000349 */ 						var endnote_link_href = '#{}-{}'.format (category_name, (function () {
/* 000349 */ 							var __accu0__ = __getitem__ (sit, 'n');
/* 000349 */ 							return __call__ (__accu0__.get_num, __accu0__);
/* 000349 */ 						}) ());
/* 000351 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000351 */ 							var __accu0__ = fragment_renderer;
/* 000351 */ 							return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['endnote', category_name]}));
/* 000351 */ 						}) ());
/* 000351 */ 					}
/* 000351 */ 				}
/* 000360 */ 				(function () {
/* 000360 */ 					var __accu0__ = s_final_blocks;
/* 000360 */ 					return __call__ (__accu0__.append, __accu0__, s);
/* 000360 */ 				}) ();
/* 000360 */ 			}
/* 000362 */ 			var contents = (function () {
/* 000362 */ 				var __accu0__ = fragment_renderer;
/* 000362 */ 				return __call__ (__accu0__.render_join, __accu0__, s_final_blocks, render_context);
/* 000362 */ 			}) ();
/* 000364 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000365 */ 				return (function () {
/* 000365 */ 					var __accu0__ = fragment_renderer;
/* 000365 */ 					return __call__ (__accu0__.render_semantic_span, __accu0__, contents, wrap_with_semantic_span, render_context);
/* 000365 */ 				}) ();
/* 000365 */ 			}
/* 000370 */ 			return contents;
/* 000370 */ 		});},
/* 000373 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000373 */ 			if (arguments.length) {
/* 000373 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 						switch (__attrib0__) {
/* 000373 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						}
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 			else {
/* 000373 */ 			}
/* 000375 */ 			var render_context = self.render_context;
/* 000376 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000378 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000379 */ 				var encat = category_name;
/* 000380 */ 				var category_name = encat.category_name;
/* 000380 */ 			}
/* 000382 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000382 */ 				if (arguments.length) {
/* 000382 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 							switch (__attrib0__) {
/* 000382 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 							}
/* 000382 */ 						}
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 				else {
/* 000382 */ 				}
/* 000383 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000384 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000385 */ 				return fmtvalue_flm.nodes;
/* 000385 */ 			};
/* 000387 */ 			var the_target_id_generator_fn = function (n) {
/* 000387 */ 				if (arguments.length) {
/* 000387 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 							switch (__attrib0__) {
/* 000387 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							}
/* 000387 */ 						}
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 				else {
/* 000387 */ 				}
/* 000388 */ 				return '{}-{}'.format (category_name, n);
/* 000388 */ 			};
/* 000394 */ 			var iterable_of_content_endnotes = (function () {
/* 000394 */ 				var __accu0__ = [];
/* 000394 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000394 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000396 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000396 */ 					(function () {
/* 000396 */ 						var __accu1__ = __accu0__;
/* 000396 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000396 */ 					}) ();
/* 000396 */ 				}
/* 000396 */ 				return __accu0__;
/* 000396 */ 			}) ();
/* 000399 */ 			return (function () {
/* 000399 */ 				var __accu0__ = fragment_renderer;
/* 000399 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000399 */ 			}) ();
/* 000399 */ 		});},
/* 000408 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000408 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var target_id = 'endnotes';
/* 000408 */ 			};
/* 000408 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var annotations = null;
/* 000408 */ 			};
/* 000408 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var include_headings_at_level = null;
/* 000408 */ 			};
/* 000408 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var set_headings_target_ids = null;
/* 000408 */ 			};
/* 000408 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var endnotes_heading_title = null;
/* 000408 */ 			};
/* 000408 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000408 */ 				var endnotes_heading_level = null;
/* 000408 */ 			};
/* 000408 */ 			if (arguments.length) {
/* 000408 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 						switch (__attrib0__) {
/* 000408 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						}
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 			else {
/* 000408 */ 			}
/* 000417 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000419 */ 				var include_headings_at_level = (function () {
/* 000419 */ 					var __accu0__ = self.feature.default_render_options;
/* 000419 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_headings_at_level', null);
/* 000419 */ 				}) ();
/* 000419 */ 			}
/* 000420 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000422 */ 				var set_headings_target_ids = (function () {
/* 000422 */ 					var __accu0__ = self.feature.default_render_options;
/* 000422 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000422 */ 				}) ();
/* 000422 */ 			}
/* 000423 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000425 */ 				var endnotes_heading_title = (function () {
/* 000425 */ 					var __accu0__ = self.feature.default_render_options;
/* 000425 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000425 */ 				}) ();
/* 000425 */ 			}
/* 000426 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000428 */ 				var endnotes_heading_level = (function () {
/* 000428 */ 					var __accu0__ = self.feature.default_render_options;
/* 000428 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000428 */ 				}) ();
/* 000428 */ 			}
/* 000431 */ 			var render_context = self.render_context;
/* 000432 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000434 */ 			var has_endnotes = false;
/* 000436 */ 			var blocks = [];
/* 000437 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000437 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000437 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000438 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000438 */ 					continue;
/* 000438 */ 				}
/* 000442 */ 				var has_endnotes = true;
/* 000444 */ 				if (__t__ (__t__ (include_headings_at_level !== null) && include_headings_at_level !== false)) {
/* 000446 */ 					var heading_nodelist = (function () {
/* 000446 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000446 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000446 */ 					}) ();
/* 000451 */ 					var heading_target_id = null;
/* 000452 */ 					if (__t__ (set_headings_target_ids)) {
/* 000453 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000453 */ 					}
/* 000454 */ 					(function () {
/* 000454 */ 						var __accu0__ = blocks;
/* 000455 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000455 */ 							var __accu1__ = fragment_renderer;
/* 000455 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000455 */ 						}) ());
/* 000455 */ 					}) ();
/* 000455 */ 				}
/* 000462 */ 				(function () {
/* 000462 */ 					var __accu0__ = blocks;
/* 000463 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000463 */ 						var __accu1__ = self;
/* 000463 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000463 */ 					}) ());
/* 000463 */ 				}) ();
/* 000463 */ 			}
/* 000466 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000467 */ 				return (function () {
/* 000467 */ 					var __accu0__ = fragment_renderer;
/* 000467 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes'], render_context: render_context}));
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000472 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000474 */ 				var heading_title_nodelist = (function () {
/* 000474 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000474 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000474 */ 				}) ();
/* 000479 */ 				(function () {
/* 000479 */ 					var __accu0__ = blocks;
/* 000481 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000481 */ 						var __accu1__ = fragment_renderer;
/* 000481 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000481 */ 					}) ());
/* 000481 */ 				}) ();
/* 000481 */ 			}
/* 000489 */ 			return (function () {
/* 000489 */ 				var __accu0__ = fragment_renderer;
/* 000490 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000490 */ 					var __accu1__ = fragment_renderer;
/* 000490 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks, render_context);
/* 000490 */ 				}) (), __kwargtrans__ ({role: 'endnotes', render_context: self.render_context, annotations: annotations, target_id: target_id}));
/* 000490 */ 			}) ();
/* 000490 */ 		});}
/* 000490 */ 	})
/* 000490 */ });
/* 000502 */ export var FeatureClass = FeatureEndnotes;
/* 000006 */ 
//# sourceMappingURL=flm.feature.endnotes.map