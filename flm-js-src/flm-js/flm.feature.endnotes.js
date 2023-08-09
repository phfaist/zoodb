/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 15:47:09
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import {Counter, build_counter_formatter} from './flm.counter.js';
/* 000016 */ import {Feature} from './flm.feature._base.js';
/* 000014 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000013 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000009 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {Counter, FLMArgumentSpec, build_counter_formatter, FLMMacroSpecBase, ParsedArgumentsInfo, Feature, FLMFragment};
/* 000001 */ var __name__ = 'flm.feature.endnotes';
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
/* 000059 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [FLMMacroSpecBase], {
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
/* 000067 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'endnote_content', flm_doc: 'The content of the endnote to place (e.g., the text of a footnote)'}))]}, kwargs)));
/* 000075 */ 		self.endnote_category_name = endnote_category_name;
/* 000075 */ 	});},
/* 000077 */ 	_fields: tuple (['macroname', 'endnote_category_name']),
/* 000079 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000080 */ 		return 'Place an end note in the category ‘{}’ withthe given content.'.format (self.endnote_category_name);
/* 000080 */ 	});},
/* 000083 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000085 */ 		var mgr = (function () {
/* 000085 */ 			var __accu0__ = render_context;
/* 000085 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000085 */ 		}) ();
/* 000086 */ 		if (__t__ (mgr === null)) {
/* 000087 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your FLM environment");
/* 000087 */ 			__except0__.__cause__ = null;
/* 000087 */ 			throw __except0__;
/* 000087 */ 		}
/* 000091 */ 		var node_args = (function () {
/* 000091 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000091 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000091 */ 		}) ();
/* 000095 */ 		var content_nodelist = (function () {
/* 000095 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000095 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000095 */ 		}) ();
/* 000100 */ 		var endnote = (function () {
/* 000100 */ 			var __accu0__ = mgr;
/* 000100 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000100 */ 		}) ();
/* 000106 */ 		var rendered_endnote_mark = (function () {
/* 000106 */ 			var __accu0__ = mgr;
/* 000106 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000106 */ 		}) ();
/* 000107 */ 		return rendered_endnote_mark;
/* 000107 */ 	});}
/* 000107 */ });
/* 000112 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000112 */ 	__module__: __name__,
/* 000113 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_flm, content_nodelist, ref_label_prefix, ref_label) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000115 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000116 */ 		self.category_name = category_name;
/* 000117 */ 		self.number = number;
/* 000118 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000119 */ 		self.content_nodelist = content_nodelist;
/* 000120 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000121 */ 		self.ref_label = ref_label;
/* 000122 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_flm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000122 */ 	});},
/* 000125 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000126 */ 			var __accu0__ = [];
/* 000126 */ 			var __iterable0__ = self._fields;
/* 000126 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000126 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 				(function () {
/* 000126 */ 					var __accu1__ = __accu0__;
/* 000126 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000126 */ 				}) ();
/* 000126 */ 			}
/* 000126 */ 			return dict (__accu0__);
/* 000126 */ 		}) ();
/* 000126 */ 	});},
/* 000128 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		return (function () {
/* 000129 */ 			var __accu0__ = '{}({})';
/* 000131 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000131 */ 				var __accu1__ = ', ';
/* 000131 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000131 */ 					var __accu2__ = [];
/* 000131 */ 					var __iterable0__ = self._fields;
/* 000131 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000131 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000131 */ 						(function () {
/* 000131 */ 							var __accu3__ = __accu2__;
/* 000131 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000131 */ 						}) ();
/* 000131 */ 					}
/* 000131 */ 					return __accu2__;
/* 000131 */ 				}) ());
/* 000131 */ 			}) ());
/* 000131 */ 		}) ();
/* 000131 */ 	});}
/* 000131 */ });
/* 000137 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000137 */ 	__module__: __name__,
/* 000139 */ 	feature_name: 'endnotes',
/* 000140 */ 	feature_title: 'Endnotes: footnotes, references, etc.',
/* 000142 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000147 */ 		return __add__ ('Add footnotes and support for other endnotes (e.g., citations)\n            at the bottom of your pages or your document.  This environment\n            supports the base category(ies): ', (function () {
/* 000147 */ 			var __accu0__ = ',';
/* 000147 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000147 */ 				var __accu1__ = [];
/* 000147 */ 				var __iterable0__ = self.base_categories;
/* 000147 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000147 */ 					var cat = __getitem__ (__iterable0__, __index0__);
/* 000147 */ 					(function () {
/* 000147 */ 						var __accu2__ = __accu1__;
/* 000147 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (cat.category_name));
/* 000147 */ 					}) ();
/* 000147 */ 				}
/* 000147 */ 				return __accu1__;
/* 000147 */ 			}) ());
/* 000147 */ 		}) ());
/* 000147 */ 	});},
/* 000150 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000150 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000150 */ 			var render_options = null;
/* 000150 */ 		};
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000156 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000158 */ 		var _mkcatobj = function (x) {
/* 000158 */ 			if (arguments.length) {
/* 000158 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 						switch (__attrib0__) {
/* 000158 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						}
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 			else {
/* 000158 */ 			}
/* 000159 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000160 */ 				return x;
/* 000160 */ 			}
/* 000161 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000161 */ 		};
/* 000163 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000164 */ 			var categories = [];
/* 000164 */ 		}
/* 000166 */ 		self.base_categories = (function () {
/* 000166 */ 			var __accu0__ = [];
/* 000166 */ 			var __iterable0__ = categories;
/* 000166 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000168 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000168 */ 				(function () {
/* 000168 */ 					var __accu1__ = __accu0__;
/* 000167 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000167 */ 				}) ();
/* 000167 */ 			}
/* 000167 */ 			return __accu0__;
/* 000167 */ 		}) ();
/* 000171 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000171 */ 	});},
/* 000173 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000175 */ 		var macros = [];
/* 000176 */ 		var __iterable0__ = self.base_categories;
/* 000176 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000176 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000177 */ 			if (__t__ (encat.endnote_command)) {
/* 000178 */ 				(function () {
/* 000178 */ 					var __accu0__ = macros;
/* 000179 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000179 */ 				}) ();
/* 000179 */ 			}
/* 000179 */ 		}
/* 000185 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000187 */ 	});},
/* 000187 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000187 */ 		__module__: __name__,
/* 000188 */ 		get initialize () {return __get__ (this, function (self) {
/* 000188 */ 			if (arguments.length) {
/* 000188 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 						switch (__attrib0__) {
/* 000188 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						}
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 			else {
/* 000188 */ 			}
/* 000189 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000190 */ 			self.categories_by_name = (function () {
/* 000190 */ 				var __accu0__ = [];
/* 000190 */ 				var __iterable0__ = self.categories;
/* 000190 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000191 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000191 */ 					(function () {
/* 000191 */ 						var __accu1__ = __accu0__;
/* 000191 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000191 */ 					}) ();
/* 000191 */ 				}
/* 000191 */ 				return dict (__accu0__);
/* 000191 */ 			}) ();
/* 000191 */ 		});},
/* 000194 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000194 */ 			if (arguments.length) {
/* 000194 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 						switch (__attrib0__) {
/* 000194 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						}
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 			else {
/* 000194 */ 			}
/* 000195 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000196 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000196 */ 				__except0__.__cause__ = null;
/* 000196 */ 				throw __except0__;
/* 000196 */ 			}
/* 000200 */ 			(function () {
/* 000200 */ 				var __accu0__ = self.categories;
/* 000200 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000200 */ 			}) ();
/* 000201 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000201 */ 		});}
/* 000203 */ 	}),
/* 000203 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000203 */ 		__module__: __name__,
/* 000205 */ 		get initialize () {return __get__ (this, function (self, inhibit_render_endnote_marks) {
/* 000205 */ 			if (typeof inhibit_render_endnote_marks == 'undefined' || (inhibit_render_endnote_marks != null && inhibit_render_endnote_marks.hasOwnProperty ("__kwargtrans__"))) {;
/* 000205 */ 				var inhibit_render_endnote_marks = false;
/* 000205 */ 			};
/* 000205 */ 			if (arguments.length) {
/* 000205 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 						switch (__attrib0__) {
/* 000205 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 							case 'inhibit_render_endnote_marks': var inhibit_render_endnote_marks = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						}
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 			else {
/* 000205 */ 			}
/* 000206 */ 			self.endnotes = (function () {
/* 000206 */ 				var __accu0__ = [];
/* 000206 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000206 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000208 */ 					(function () {
/* 000208 */ 						var __accu1__ = __accu0__;
/* 000208 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000208 */ 					}) ();
/* 000208 */ 				}
/* 000208 */ 				return dict (__accu0__);
/* 000208 */ 			}) ();
/* 000210 */ 			self.endnote_counters = (function () {
/* 000210 */ 				var __accu0__ = [];
/* 000210 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000210 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000212 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000212 */ 					(function () {
/* 000212 */ 						var __accu1__ = __accu0__;
/* 000211 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, __call__ (Counter, null, c.counter_formatter)]);
/* 000211 */ 					}) ();
/* 000211 */ 				}
/* 000211 */ 				return dict (__accu0__);
/* 000211 */ 			}) ();
/* 000214 */ 			self.endnote_instances = dict ({});
/* 000215 */ 			self.inhibit_render_endnote_marks = inhibit_render_endnote_marks;
/* 000215 */ 		});},
/* 000217 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000217 */ 			var ref_label_prefix = null;
/* 000217 */ 			var ref_label = null;
/* 000217 */ 			if (arguments.length) {
/* 000217 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 						switch (__attrib0__) {
/* 000217 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						}
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 			else {
/* 000217 */ 			}
/* 000220 */ 			var node_id = (function () {
/* 000220 */ 				var __accu0__ = self;
/* 000220 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000220 */ 			}) ();
/* 000222 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000224 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000224 */ 			}
/* 000230 */ 			var __left0__ = (function () {
/* 000230 */ 				var __accu0__ = __getitem__ (self.endnote_counters, category_name);
/* 000230 */ 				return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000230 */ 			}) ();
/* 000230 */ 			var number = __left0__ [0];
/* 000230 */ 			var fmtvalue_flm_text = __left0__ [1];
/* 000232 */ 			var fmtvalue_flm = (function () {
/* 000232 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000232 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000232 */ 			}) ();
/* 000238 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_flm: fmtvalue_flm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000246 */ 			(function () {
/* 000246 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000246 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000246 */ 			}) ();
/* 000248 */ 			if (__t__ (node_id !== null)) {
/* 000249 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000249 */ 			}
/* 000251 */ 			return endnote;
/* 000251 */ 		});},
/* 000253 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote, display_flm, wrap_with_semantic_span) {
/* 000253 */ 			if (typeof display_flm == 'undefined' || (display_flm != null && display_flm.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 				var display_flm = null;
/* 000253 */ 			};
/* 000253 */ 			if (typeof wrap_with_semantic_span == 'undefined' || (wrap_with_semantic_span != null && wrap_with_semantic_span.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 				var wrap_with_semantic_span = 'endnotes';
/* 000253 */ 			};
/* 000253 */ 			if (arguments.length) {
/* 000253 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 						switch (__attrib0__) {
/* 000253 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 							case 'display_flm': var display_flm = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						}
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 			else {
/* 000253 */ 			}
/* 000262 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000263 */ 				return (function () {
/* 000263 */ 					var __accu0__ = self.render_context.fragment_renderer;
/* 000263 */ 					return __call__ (__accu0__.render_nothing, __accu0__, self.render_context);
/* 000263 */ 				}) ();
/* 000263 */ 			}
/* 000265 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000267 */ 			if (__t__ (display_flm === null)) {
/* 000268 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000268 */ 			}
/* 000269 */ 			else {
/* 000270 */ 				var fmtvalue_flm = display_flm;
/* 000270 */ 			}
/* 000272 */ 			if (__t__ (__call__ (isinstance, null, fmtvalue_flm, FLMFragment))) {
/* 000273 */ 				var fmtvalue_nodelist = fmtvalue_flm.nodes;
/* 000273 */ 			}
/* 000274 */ 			else {
/* 000275 */ 				var fmtvalue_nodelist = fmtvalue_flm;
/* 000275 */ 			}
/* 000277 */ 			var annotations = ['endnote', endnote.category_name];
/* 000278 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000279 */ 				(function () {
/* 000279 */ 					var __accu0__ = annotations;
/* 000279 */ 					return __call__ (__accu0__.append, __accu0__, wrap_with_semantic_span);
/* 000279 */ 				}) ();
/* 000279 */ 			}
/* 000281 */ 			var contents = (function () {
/* 000281 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000281 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_nodelist, render_context: self.render_context, annotations: annotations}));
/* 000281 */ 			}) ();
/* 000292 */ 			return contents;
/* 000292 */ 		});},
/* 000294 */ 		get render_endnote_mark_many () {return __get__ (this, function (self, endnote_list) {
/* 000294 */ 			var counter_prefix_variant = null;
/* 000294 */ 			var counter_with_delimiters = true;
/* 000294 */ 			var counter_with_prefix = false;
/* 000294 */ 			var wrap_with_semantic_span = 'endnotes';
/* 000294 */ 			if (arguments.length) {
/* 000294 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 						switch (__attrib0__) {
/* 000294 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 							case 'endnote_list': var endnote_list = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 							case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 							case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 							case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						}
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 			else {
/* 000294 */ 			}
/* 000300 */ 			var render_context = self.render_context;
/* 000301 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000303 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000304 */ 				return (function () {
/* 000304 */ 					var __accu0__ = fragment_renderer;
/* 000304 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000304 */ 				}) ();
/* 000304 */ 			}
/* 000306 */ 			var endnotes_by_category = dict ({});
/* 000307 */ 			var __iterable0__ = endnote_list;
/* 000307 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000307 */ 				var endnote = __getitem__ (__iterable0__, __index0__);
/* 000308 */ 				if (__t__ (!__in__ (endnote.category_name, endnotes_by_category))) {
/* 000309 */ 					__setitem__ (endnotes_by_category, endnote.category_name, []);
/* 000309 */ 				}
/* 000310 */ 				(function () {
/* 000310 */ 					var __accu0__ = __getitem__ (endnotes_by_category, endnote.category_name);
/* 000310 */ 					return __call__ (__accu0__.append, __accu0__, endnote);
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000312 */ 			var s_final_blocks = [];
/* 000314 */ 			var __iterable0__ = (function () {
/* 000314 */ 				var __accu0__ = endnotes_by_category;
/* 000314 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000314 */ 			}) ();
/* 000314 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000314 */ 				var category_name = __left0__ [0];
/* 000314 */ 				var endnote_list = __left0__ [1];
/* 000316 */ 				var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, endnote.category_name);
/* 000319 */ 				var counter_formatter = endnote_category_info.counter_formatter;
/* 000321 */ 				var s_items = (function () {
/* 000321 */ 					var __accu0__ = counter_formatter;
/* 000321 */ 					return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000321 */ 						var __accu1__ = [];
/* 000322 */ 						var __iterable1__ = endnote_list;
/* 000322 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000322 */ 							var e = __getitem__ (__iterable1__, __index1__);
/* 000322 */ 							(function () {
/* 000322 */ 								var __accu2__ = __accu1__;
/* 000322 */ 								return __call__ (__accu2__.append, __accu2__, e.number);
/* 000322 */ 							}) ();
/* 000322 */ 						}
/* 000322 */ 						return __accu1__;
/* 000322 */ 					}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000322 */ 				}) ();
/* 000328 */ 				var s = '';
/* 000329 */ 				var __iterable1__ = s_items;
/* 000329 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000329 */ 					var sit = __getitem__ (__iterable1__, __index1__);
/* 000330 */ 					var s_frag = (function () {
/* 000330 */ 						var __accu0__ = render_context.doc.environment;
/* 000334 */ 						return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered endnote mark(s) bit {}'.format (__call__ (repr, null, sit))}));
/* 000334 */ 					}) ();
/* 000336 */ 					if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000337 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000337 */ 							var __accu0__ = fragment_renderer;
/* 000337 */ 							return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000337 */ 						}) ());
/* 000337 */ 					}
/* 000338 */ 					else {
/* 000339 */ 						var endnote_link_href = '#{}-{}'.format (category_name, __getitem__ (sit, 'n'));
/* 000341 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000341 */ 							var __accu0__ = fragment_renderer;
/* 000341 */ 							return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['endnote', category_name]}));
/* 000341 */ 						}) ());
/* 000341 */ 					}
/* 000341 */ 				}
/* 000350 */ 				(function () {
/* 000350 */ 					var __accu0__ = s_final_blocks;
/* 000350 */ 					return __call__ (__accu0__.append, __accu0__, s);
/* 000350 */ 				}) ();
/* 000350 */ 			}
/* 000352 */ 			var contents = (function () {
/* 000352 */ 				var __accu0__ = fragment_renderer;
/* 000352 */ 				return __call__ (__accu0__.render_join, __accu0__, s_final_blocks, render_context);
/* 000352 */ 			}) ();
/* 000354 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000355 */ 				return (function () {
/* 000355 */ 					var __accu0__ = fragment_renderer;
/* 000355 */ 					return __call__ (__accu0__.render_semantic_span, __accu0__, contents, wrap_with_semantic_span, render_context);
/* 000355 */ 				}) ();
/* 000355 */ 			}
/* 000360 */ 			return contents;
/* 000360 */ 		});},
/* 000363 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000363 */ 			if (arguments.length) {
/* 000363 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 						switch (__attrib0__) {
/* 000363 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						}
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 			else {
/* 000363 */ 			}
/* 000365 */ 			var render_context = self.render_context;
/* 000366 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000368 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000369 */ 				var encat = category_name;
/* 000370 */ 				var category_name = encat.category_name;
/* 000370 */ 			}
/* 000372 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
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
/* 000373 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000374 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000375 */ 				return fmtvalue_flm.nodes;
/* 000375 */ 			};
/* 000377 */ 			var the_target_id_generator_fn = function (n) {
/* 000377 */ 				if (arguments.length) {
/* 000377 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 							switch (__attrib0__) {
/* 000377 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 							}
/* 000377 */ 						}
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 				else {
/* 000377 */ 				}
/* 000378 */ 				return '{}-{}'.format (category_name, n);
/* 000378 */ 			};
/* 000384 */ 			var iterable_of_content_endnotes = (function () {
/* 000384 */ 				var __accu0__ = [];
/* 000384 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000384 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000386 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000386 */ 					(function () {
/* 000386 */ 						var __accu1__ = __accu0__;
/* 000386 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000386 */ 					}) ();
/* 000386 */ 				}
/* 000386 */ 				return __accu0__;
/* 000386 */ 			}) ();
/* 000389 */ 			return (function () {
/* 000389 */ 				var __accu0__ = fragment_renderer;
/* 000389 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000389 */ 			}) ();
/* 000389 */ 		});},
/* 000398 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000398 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var target_id = 'endnotes';
/* 000398 */ 			};
/* 000398 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var annotations = null;
/* 000398 */ 			};
/* 000398 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var include_headings_at_level = null;
/* 000398 */ 			};
/* 000398 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var set_headings_target_ids = null;
/* 000398 */ 			};
/* 000398 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var endnotes_heading_title = null;
/* 000398 */ 			};
/* 000398 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 				var endnotes_heading_level = null;
/* 000398 */ 			};
/* 000398 */ 			if (arguments.length) {
/* 000398 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 						switch (__attrib0__) {
/* 000398 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						}
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 			else {
/* 000398 */ 			}
/* 000407 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000409 */ 				var include_headings_at_level = (function () {
/* 000409 */ 					var __accu0__ = self.feature.default_render_options;
/* 000409 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_headings_at_level', null);
/* 000409 */ 				}) ();
/* 000409 */ 			}
/* 000410 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000412 */ 				var set_headings_target_ids = (function () {
/* 000412 */ 					var __accu0__ = self.feature.default_render_options;
/* 000412 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000412 */ 				}) ();
/* 000412 */ 			}
/* 000413 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000415 */ 				var endnotes_heading_title = (function () {
/* 000415 */ 					var __accu0__ = self.feature.default_render_options;
/* 000415 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000415 */ 				}) ();
/* 000415 */ 			}
/* 000416 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000418 */ 				var endnotes_heading_level = (function () {
/* 000418 */ 					var __accu0__ = self.feature.default_render_options;
/* 000418 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000418 */ 				}) ();
/* 000418 */ 			}
/* 000421 */ 			var render_context = self.render_context;
/* 000422 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000424 */ 			var has_endnotes = false;
/* 000426 */ 			var blocks = [];
/* 000427 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000427 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000427 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000428 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000428 */ 					continue;
/* 000428 */ 				}
/* 000432 */ 				var has_endnotes = true;
/* 000434 */ 				if (__t__ (__t__ (include_headings_at_level !== null) && include_headings_at_level !== false)) {
/* 000436 */ 					var heading_nodelist = (function () {
/* 000436 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000436 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000436 */ 					}) ();
/* 000441 */ 					var heading_target_id = null;
/* 000442 */ 					if (__t__ (set_headings_target_ids)) {
/* 000443 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000443 */ 					}
/* 000444 */ 					(function () {
/* 000444 */ 						var __accu0__ = blocks;
/* 000445 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000445 */ 							var __accu1__ = fragment_renderer;
/* 000445 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000445 */ 						}) ());
/* 000445 */ 					}) ();
/* 000445 */ 				}
/* 000452 */ 				(function () {
/* 000452 */ 					var __accu0__ = blocks;
/* 000453 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000453 */ 						var __accu1__ = self;
/* 000453 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000453 */ 					}) ());
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000456 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000457 */ 				return (function () {
/* 000457 */ 					var __accu0__ = fragment_renderer;
/* 000457 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes'], render_context: render_context}));
/* 000457 */ 				}) ();
/* 000457 */ 			}
/* 000462 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000464 */ 				var heading_title_nodelist = (function () {
/* 000464 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000464 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000464 */ 				}) ();
/* 000469 */ 				(function () {
/* 000469 */ 					var __accu0__ = blocks;
/* 000471 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000471 */ 						var __accu1__ = fragment_renderer;
/* 000471 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000471 */ 					}) ());
/* 000471 */ 				}) ();
/* 000471 */ 			}
/* 000479 */ 			return (function () {
/* 000479 */ 				var __accu0__ = fragment_renderer;
/* 000480 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000480 */ 					var __accu1__ = fragment_renderer;
/* 000480 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks, render_context);
/* 000480 */ 				}) (), __kwargtrans__ ({role: 'endnotes', render_context: self.render_context, annotations: annotations, target_id: target_id}));
/* 000480 */ 			}) ();
/* 000480 */ 		});}
/* 000480 */ 	})
/* 000480 */ });
/* 000492 */ export var FeatureClass = FeatureEndnotes;
/* 000006 */ 
//# sourceMappingURL=flm.feature.endnotes.map