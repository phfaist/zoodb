/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000011 */ var logging = {};
/* 000011 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {Counter} from './flm.feature.numbering.js';
/* 000024 */ import {build_counter_formatter} from './flm.counter.js';
/* 000023 */ import {Feature} from './flm.feature._base.js';
/* 000021 */ import {Any, Mapping, Sequence, TypeCounterFormatterInput, TypeCounterFormatterSpecDict} from './flm._typing_helpers.js';
/* 000019 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000018 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000017 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000014 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000011 */ import * as __module_logging__ from './logging.js';
/* 000011 */ __nest__ (logging, '', __module_logging__);
/* 000011 */ export {FLMMacroSpecBase, ParsedArgumentsInfo, build_counter_formatter, Feature, TypeCounterFormatterSpecDict, Sequence, TypeCounterFormatterInput, Mapping, FLMArgumentSpec, Counter, Any, FLMFragment};
/* 000001 */ var __name__ = 'flm.feature.endnotes';
/* 000012 */ export var logger = (function () {
/* 000012 */ 	var __accu0__ = logging;
/* 000012 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000012 */ }) ();
/* 000029 */ var _default_endnote_counter_formatter_spec = dict ({'format_num': dict ({'template': '${roman}'}), 'prefix_display': null, 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000038 */ export var EndnoteCategory =  __class__ ('EndnoteCategory', [object], {
/* 000038 */ 	__module__: __name__,
/* 000052 */ 	get __init__ () {return __get__ (this, function (self, category_name, counter_formatter, heading_title, endnote_command) {
/* 000052 */ 		if (typeof endnote_command == 'undefined' || (endnote_command != null && endnote_command.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var endnote_command = null;
/* 000052 */ 		};
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'heading_title': var heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'endnote_command': var endnote_command = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000069 */ 		__call__ (__call__ (__super__, null, EndnoteCategory, '__init__'), null, self);
/* 000070 */ 		self.category_name = category_name;
/* 000071 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_endnote_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'endnote'}));
/* 000076 */ 		self.counter_formatter = counter_formatter;
/* 000077 */ 		self.heading_title = heading_title;
/* 000078 */ 		self.endnote_command = endnote_command;
/* 000078 */ 	});}
/* 000078 */ });
/* 000082 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [FLMMacroSpecBase], {
/* 000082 */ 	__module__: __name__,
/* 000091 */ 	allowed_in_standalone_mode: false,
/* 000093 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000093 */ 		var kwargs = dict ();
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 				delete kwargs.__kwargtrans__;
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000105 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'endnote_content', flm_doc: 'The content of the endnote to place (e.g., the text of a footnote)'}))]}, kwargs)));
/* 000113 */ 		self.endnote_category_name = endnote_category_name;
/* 000113 */ 	});},
/* 000115 */ 	_fields: tuple (['macroname', 'endnote_category_name']),
/* 000117 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		return 'Place an end note in the category ‘{}’ withthe given content.'.format (self.endnote_category_name);
/* 000118 */ 	});},
/* 000121 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000123 */ 		var mgr = (function () {
/* 000123 */ 			var __accu0__ = render_context;
/* 000123 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000123 */ 		}) ();
/* 000124 */ 		if (__t__ (mgr === null)) {
/* 000125 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your FLM environment");
/* 000125 */ 			__except0__.__cause__ = null;
/* 000125 */ 			throw __except0__;
/* 000125 */ 		}
/* 000129 */ 		var node_args = (function () {
/* 000129 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000129 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000129 */ 		}) ();
/* 000133 */ 		var content_nodelist = (function () {
/* 000133 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000133 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000133 */ 		}) ();
/* 000138 */ 		var endnote = (function () {
/* 000138 */ 			var __accu0__ = mgr;
/* 000138 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000138 */ 		}) ();
/* 000144 */ 		var rendered_endnote_mark = (function () {
/* 000144 */ 			var __accu0__ = mgr;
/* 000144 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000144 */ 		}) ();
/* 000145 */ 		return rendered_endnote_mark;
/* 000145 */ 	});}
/* 000145 */ });
/* 000150 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000150 */ 	__module__: __name__,
/* 000158 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_flm, content_nodelist, ref_label_prefix, ref_label) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'formatted_counter_value_flm': var formatted_counter_value_flm = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000171 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000172 */ 		self.category_name = category_name;
/* 000173 */ 		self.number = number;
/* 000174 */ 		self.formatted_counter_value_flm = formatted_counter_value_flm;
/* 000175 */ 		self.content_nodelist = content_nodelist;
/* 000176 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000177 */ 		self.ref_label = ref_label;
/* 000178 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_flm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000178 */ 	});},
/* 000181 */ 	get asdict () {return __get__ (this, function (self) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000182 */ 		return (function () {
/* 000182 */ 			var __accu0__ = [];
/* 000182 */ 			var __iterable0__ = self._fields;
/* 000182 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000182 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 				(function () {
/* 000182 */ 					var __accu1__ = __accu0__;
/* 000182 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000182 */ 				}) ();
/* 000182 */ 			}
/* 000182 */ 			return dict (__accu0__);
/* 000182 */ 		}) ();
/* 000182 */ 	});},
/* 000184 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		return (function () {
/* 000185 */ 			var __accu0__ = '{}({})';
/* 000187 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000187 */ 				var __accu1__ = ', ';
/* 000187 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000187 */ 					var __accu2__ = [];
/* 000187 */ 					var __iterable0__ = self._fields;
/* 000187 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000187 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000187 */ 						(function () {
/* 000187 */ 							var __accu3__ = __accu2__;
/* 000187 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000187 */ 						}) ();
/* 000187 */ 					}
/* 000187 */ 					return __accu2__;
/* 000187 */ 				}) ());
/* 000187 */ 			}) ());
/* 000187 */ 		}) ();
/* 000187 */ 	});}
/* 000187 */ });
/* 000206 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000206 */ 	__module__: __name__,
/* 000214 */ 	feature_name: 'endnotes',
/* 000215 */ 	feature_title: 'Endnotes: footnotes, references, etc.',
/* 000217 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000222 */ 		return __add__ ('Add footnotes and support for other endnotes (e.g., citations)\n            at the bottom of your pages or your document.  This environment\n            supports the base category(ies): ', (function () {
/* 000222 */ 			var __accu0__ = ',';
/* 000222 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000222 */ 				var __accu1__ = [];
/* 000222 */ 				var __iterable0__ = self.base_categories;
/* 000222 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000222 */ 					var cat = __getitem__ (__iterable0__, __index0__);
/* 000222 */ 					(function () {
/* 000222 */ 						var __accu2__ = __accu1__;
/* 000222 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (cat.category_name));
/* 000222 */ 					}) ();
/* 000222 */ 				}
/* 000222 */ 				return __accu1__;
/* 000222 */ 			}) ());
/* 000222 */ 		}) ());
/* 000222 */ 	});},
/* 000225 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000225 */ 		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
/* 000225 */ 			var categories = null;
/* 000225 */ 		};
/* 000225 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000225 */ 			var render_options = null;
/* 000225 */ 		};
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000232 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000234 */ 		var _mkcatobj = function (x) {
/* 000234 */ 			if (arguments.length) {
/* 000234 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 						switch (__attrib0__) {
/* 000234 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						}
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 			else {
/* 000234 */ 			}
/* 000235 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000236 */ 				return x;
/* 000236 */ 			}
/* 000237 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000237 */ 		};
/* 000239 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000240 */ 			var categories = [];
/* 000240 */ 		}
/* 000242 */ 		self.base_categories = (function () {
/* 000242 */ 			var __accu0__ = [];
/* 000242 */ 			var __iterable0__ = categories;
/* 000242 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 				(function () {
/* 000244 */ 					var __accu1__ = __accu0__;
/* 000243 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000243 */ 				}) ();
/* 000243 */ 			}
/* 000243 */ 			return __accu0__;
/* 000243 */ 		}) ();
/* 000247 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000247 */ 	});},
/* 000249 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000251 */ 		var macros = [];
/* 000252 */ 		var __iterable0__ = self.base_categories;
/* 000252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000252 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000253 */ 			if (__t__ (encat.endnote_command)) {
/* 000254 */ 				(function () {
/* 000254 */ 					var __accu0__ = macros;
/* 000255 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000255 */ 				}) ();
/* 000255 */ 			}
/* 000255 */ 		}
/* 000261 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000263 */ 	});},
/* 000263 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000263 */ 		__module__: __name__,
/* 000264 */ 		get initialize () {return __get__ (this, function (self) {
/* 000264 */ 			if (arguments.length) {
/* 000264 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 						switch (__attrib0__) {
/* 000264 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						}
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 			else {
/* 000264 */ 			}
/* 000265 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000266 */ 			self.categories_by_name = (function () {
/* 000266 */ 				var __accu0__ = [];
/* 000266 */ 				var __iterable0__ = self.categories;
/* 000266 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000267 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000267 */ 					(function () {
/* 000267 */ 						var __accu1__ = __accu0__;
/* 000267 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000267 */ 					}) ();
/* 000267 */ 				}
/* 000267 */ 				return dict (__accu0__);
/* 000267 */ 			}) ();
/* 000267 */ 		});},
/* 000270 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000270 */ 			if (arguments.length) {
/* 000270 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 						switch (__attrib0__) {
/* 000270 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						}
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 			}
/* 000270 */ 			else {
/* 000270 */ 			}
/* 000271 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000272 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000272 */ 				__except0__.__cause__ = null;
/* 000272 */ 				throw __except0__;
/* 000272 */ 			}
/* 000276 */ 			(function () {
/* 000276 */ 				var __accu0__ = self.categories;
/* 000276 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000276 */ 			}) ();
/* 000277 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000277 */ 		});}
/* 000279 */ 	}),
/* 000279 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000279 */ 		__module__: __name__,
/* 000281 */ 		get initialize () {return __get__ (this, function (self, inhibit_render_endnote_marks) {
/* 000281 */ 			if (typeof inhibit_render_endnote_marks == 'undefined' || (inhibit_render_endnote_marks != null && inhibit_render_endnote_marks.hasOwnProperty ("__kwargtrans__"))) {;
/* 000281 */ 				var inhibit_render_endnote_marks = false;
/* 000281 */ 			};
/* 000281 */ 			if (arguments.length) {
/* 000281 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 						switch (__attrib0__) {
/* 000281 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 							case 'inhibit_render_endnote_marks': var inhibit_render_endnote_marks = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						}
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 			else {
/* 000281 */ 			}
/* 000282 */ 			self.endnotes = (function () {
/* 000282 */ 				var __accu0__ = [];
/* 000282 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000282 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000284 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000284 */ 					(function () {
/* 000284 */ 						var __accu1__ = __accu0__;
/* 000284 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000284 */ 					}) ();
/* 000284 */ 				}
/* 000284 */ 				return dict (__accu0__);
/* 000284 */ 			}) ();
/* 000286 */ 			self.endnote_counters = (function () {
/* 000286 */ 				var __accu0__ = [];
/* 000286 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000286 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000288 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000288 */ 					(function () {
/* 000288 */ 						var __accu1__ = __accu0__;
/* 000287 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, __call__ (Counter, null, c.counter_formatter)]);
/* 000287 */ 					}) ();
/* 000287 */ 				}
/* 000287 */ 				return dict (__accu0__);
/* 000287 */ 			}) ();
/* 000290 */ 			self.endnote_instances = dict ({});
/* 000291 */ 			self.inhibit_render_endnote_marks = inhibit_render_endnote_marks;
/* 000291 */ 		});},
/* 000293 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000293 */ 			var ref_label_prefix = null;
/* 000293 */ 			var ref_label = null;
/* 000293 */ 			if (arguments.length) {
/* 000293 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 						switch (__attrib0__) {
/* 000293 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						}
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 			else {
/* 000293 */ 			}
/* 000296 */ 			var node_id = (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000296 */ 			}) ();
/* 000298 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000300 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000300 */ 			}
/* 000306 */ 			var __left0__ = (function () {
/* 000306 */ 				var __accu0__ = __getitem__ (self.endnote_counters, category_name);
/* 000306 */ 				return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000306 */ 			}) ();
/* 000306 */ 			var number = __left0__ [0];
/* 000306 */ 			var fmtvalue_flm_text = __left0__ [1];
/* 000308 */ 			// pass;
/* 000313 */ 			var fmtvalue_flm = (function () {
/* 000313 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000313 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_flm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000313 */ 			}) ();
/* 000319 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_flm: fmtvalue_flm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000327 */ 			(function () {
/* 000327 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000327 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000327 */ 			}) ();
/* 000329 */ 			if (__t__ (node_id !== null)) {
/* 000330 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000330 */ 			}
/* 000332 */ 			return endnote;
/* 000332 */ 		});},
/* 000334 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote, display_flm, wrap_with_semantic_span) {
/* 000334 */ 			if (typeof display_flm == 'undefined' || (display_flm != null && display_flm.hasOwnProperty ("__kwargtrans__"))) {;
/* 000334 */ 				var display_flm = null;
/* 000334 */ 			};
/* 000334 */ 			if (typeof wrap_with_semantic_span == 'undefined' || (wrap_with_semantic_span != null && wrap_with_semantic_span.hasOwnProperty ("__kwargtrans__"))) {;
/* 000334 */ 				var wrap_with_semantic_span = 'endnote-marks';
/* 000334 */ 			};
/* 000334 */ 			if (arguments.length) {
/* 000334 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 						switch (__attrib0__) {
/* 000334 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 							case 'display_flm': var display_flm = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						}
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 			else {
/* 000334 */ 			}
/* 000343 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000344 */ 				return (function () {
/* 000344 */ 					var __accu0__ = self.render_context.fragment_renderer;
/* 000344 */ 					return __call__ (__accu0__.render_nothing, __accu0__, self.render_context);
/* 000344 */ 				}) ();
/* 000344 */ 			}
/* 000346 */ 			// pass;
/* 000350 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000352 */ 			if (__t__ (display_flm === null)) {
/* 000353 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000353 */ 			}
/* 000354 */ 			else {
/* 000355 */ 				var fmtvalue_flm = display_flm;
/* 000355 */ 			}
/* 000357 */ 			if (__t__ (__call__ (isinstance, null, fmtvalue_flm, FLMFragment))) {
/* 000358 */ 				var fmtvalue_nodelist = fmtvalue_flm.nodes;
/* 000358 */ 			}
/* 000359 */ 			else {
/* 000360 */ 				var fmtvalue_nodelist = fmtvalue_flm;
/* 000360 */ 			}
/* 000362 */ 			var annotations = ['endnote', endnote.category_name];
/* 000363 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000364 */ 				(function () {
/* 000364 */ 					var __accu0__ = annotations;
/* 000364 */ 					return __call__ (__accu0__.append, __accu0__, wrap_with_semantic_span);
/* 000364 */ 				}) ();
/* 000364 */ 			}
/* 000366 */ 			var contents = (function () {
/* 000366 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000366 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_nodelist, render_context: self.render_context, annotations: annotations}));
/* 000366 */ 			}) ();
/* 000377 */ 			return contents;
/* 000377 */ 		});},
/* 000379 */ 		get render_endnote_mark_many () {return __get__ (this, function (self, endnote_list) {
/* 000379 */ 			var counter_prefix_variant = null;
/* 000379 */ 			var counter_with_delimiters = true;
/* 000379 */ 			var counter_with_prefix = false;
/* 000379 */ 			var wrap_with_semantic_span = 'endnote-marks';
/* 000379 */ 			if (arguments.length) {
/* 000379 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 						switch (__attrib0__) {
/* 000379 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							case 'endnote_list': var endnote_list = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 							case 'wrap_with_semantic_span': var wrap_with_semantic_span = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						}
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 			else {
/* 000379 */ 			}
/* 000385 */ 			var render_context = self.render_context;
/* 000386 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000388 */ 			if (__t__ (self.inhibit_render_endnote_marks)) {
/* 000389 */ 				return (function () {
/* 000389 */ 					var __accu0__ = fragment_renderer;
/* 000389 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000389 */ 				}) ();
/* 000389 */ 			}
/* 000391 */ 			var endnotes_by_category = dict ({});
/* 000392 */ 			var __iterable0__ = endnote_list;
/* 000392 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000392 */ 				var endnote = __getitem__ (__iterable0__, __index0__);
/* 000393 */ 				if (__t__ (!__in__ (endnote.category_name, endnotes_by_category))) {
/* 000394 */ 					__setitem__ (endnotes_by_category, endnote.category_name, []);
/* 000394 */ 				}
/* 000395 */ 				(function () {
/* 000395 */ 					var __accu0__ = __getitem__ (endnotes_by_category, endnote.category_name);
/* 000395 */ 					return __call__ (__accu0__.append, __accu0__, endnote);
/* 000395 */ 				}) ();
/* 000395 */ 			}
/* 000397 */ 			var s_final_blocks = [];
/* 000399 */ 			var __iterable0__ = (function () {
/* 000399 */ 				var __accu0__ = endnotes_by_category;
/* 000399 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000399 */ 			}) ();
/* 000399 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000399 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000399 */ 				var category_name = __left0__ [0];
/* 000399 */ 				var endnote_list = __left0__ [1];
/* 000401 */ 				var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, endnote.category_name);
/* 000404 */ 				var counter_formatter = endnote_category_info.counter_formatter;
/* 000406 */ 				var s_items = (function () {
/* 000406 */ 					var __accu0__ = counter_formatter;
/* 000406 */ 					return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000406 */ 						var __accu1__ = [];
/* 000407 */ 						var __iterable1__ = endnote_list;
/* 000407 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000407 */ 							var e = __getitem__ (__iterable1__, __index1__);
/* 000407 */ 							(function () {
/* 000407 */ 								var __accu2__ = __accu1__;
/* 000407 */ 								return __call__ (__accu2__.append, __accu2__, e.number);
/* 000407 */ 							}) ();
/* 000407 */ 						}
/* 000407 */ 						return __accu1__;
/* 000407 */ 					}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000407 */ 				}) ();
/* 000413 */ 				var s = '';
/* 000414 */ 				var __iterable1__ = s_items;
/* 000414 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000414 */ 					var sit = __getitem__ (__iterable1__, __index1__);
/* 000415 */ 					var s_frag = (function () {
/* 000415 */ 						var __accu0__ = render_context.doc.environment;
/* 000419 */ 						return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered endnote mark(s) bit {}'.format (__call__ (repr, null, sit))}));
/* 000419 */ 					}) ();
/* 000421 */ 					if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000422 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000422 */ 							var __accu0__ = fragment_renderer;
/* 000422 */ 							return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000422 */ 						}) ());
/* 000422 */ 					}
/* 000423 */ 					else {
/* 000424 */ 						var endnote_link_href = '#{}-{}'.format (category_name, (function () {
/* 000424 */ 							var __accu0__ = __getitem__ (sit, 'n');
/* 000424 */ 							return __call__ (__accu0__.get_num, __accu0__);
/* 000424 */ 						}) ());
/* 000426 */ 						var s = __call__ (__iadd__, null, s, (function () {
/* 000426 */ 							var __accu0__ = fragment_renderer;
/* 000426 */ 							return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['endnote', category_name]}));
/* 000426 */ 						}) ());
/* 000426 */ 					}
/* 000426 */ 				}
/* 000435 */ 				(function () {
/* 000435 */ 					var __accu0__ = s_final_blocks;
/* 000435 */ 					return __call__ (__accu0__.append, __accu0__, s);
/* 000435 */ 				}) ();
/* 000435 */ 			}
/* 000437 */ 			var contents = (function () {
/* 000437 */ 				var __accu0__ = fragment_renderer;
/* 000437 */ 				return __call__ (__accu0__.render_join, __accu0__, s_final_blocks, render_context);
/* 000437 */ 			}) ();
/* 000439 */ 			if (__t__ (wrap_with_semantic_span)) {
/* 000440 */ 				return (function () {
/* 000440 */ 					var __accu0__ = fragment_renderer;
/* 000440 */ 					return __call__ (__accu0__.render_semantic_span, __accu0__, contents, wrap_with_semantic_span, render_context);
/* 000440 */ 				}) ();
/* 000440 */ 			}
/* 000445 */ 			return contents;
/* 000445 */ 		});},
/* 000448 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000448 */ 			if (arguments.length) {
/* 000448 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 						switch (__attrib0__) {
/* 000448 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						}
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 			else {
/* 000448 */ 			}
/* 000450 */ 			var render_context = self.render_context;
/* 000451 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000453 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000454 */ 				var encat = category_name;
/* 000455 */ 				var category_name = encat.category_name;
/* 000455 */ 			}
/* 000457 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000457 */ 				if (arguments.length) {
/* 000457 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 							switch (__attrib0__) {
/* 000457 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 							}
/* 000457 */ 						}
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 				else {
/* 000457 */ 				}
/* 000458 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000459 */ 				var fmtvalue_flm = endnote.formatted_counter_value_flm;
/* 000460 */ 				return fmtvalue_flm.nodes;
/* 000460 */ 			};
/* 000462 */ 			var the_target_id_generator_fn = function (n) {
/* 000462 */ 				if (arguments.length) {
/* 000462 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 							switch (__attrib0__) {
/* 000462 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 							}
/* 000462 */ 						}
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 				else {
/* 000462 */ 				}
/* 000463 */ 				return '{}-{}'.format (category_name, n);
/* 000463 */ 			};
/* 000469 */ 			var iterable_of_content_endnotes = (function () {
/* 000469 */ 				var __accu0__ = [];
/* 000469 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000469 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000471 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000471 */ 					(function () {
/* 000471 */ 						var __accu1__ = __accu0__;
/* 000471 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000471 */ 					}) ();
/* 000471 */ 				}
/* 000471 */ 				return __accu0__;
/* 000471 */ 			}) ();
/* 000474 */ 			return (function () {
/* 000474 */ 				var __accu0__ = fragment_renderer;
/* 000474 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000474 */ 			}) ();
/* 000474 */ 		});},
/* 000483 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000483 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var target_id = 'endnotes';
/* 000483 */ 			};
/* 000483 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var annotations = null;
/* 000483 */ 			};
/* 000483 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var include_headings_at_level = null;
/* 000483 */ 			};
/* 000483 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var set_headings_target_ids = null;
/* 000483 */ 			};
/* 000483 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var endnotes_heading_title = null;
/* 000483 */ 			};
/* 000483 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 				var endnotes_heading_level = null;
/* 000483 */ 			};
/* 000483 */ 			if (arguments.length) {
/* 000483 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000483 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000483 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000483 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000483 */ 						switch (__attrib0__) {
/* 000483 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						}
/* 000483 */ 					}
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 			else {
/* 000483 */ 			}
/* 000492 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000494 */ 				var include_headings_at_level = (function () {
/* 000494 */ 					var __accu0__ = self.feature.default_render_options;
/* 000494 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_headings_at_level', null);
/* 000494 */ 				}) ();
/* 000494 */ 			}
/* 000495 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000497 */ 				var set_headings_target_ids = (function () {
/* 000497 */ 					var __accu0__ = self.feature.default_render_options;
/* 000497 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000497 */ 				}) ();
/* 000497 */ 			}
/* 000498 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000500 */ 				var endnotes_heading_title = (function () {
/* 000500 */ 					var __accu0__ = self.feature.default_render_options;
/* 000500 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000500 */ 				}) ();
/* 000500 */ 			}
/* 000501 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000503 */ 				var endnotes_heading_level = (function () {
/* 000503 */ 					var __accu0__ = self.feature.default_render_options;
/* 000503 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000503 */ 				}) ();
/* 000503 */ 			}
/* 000506 */ 			var render_context = self.render_context;
/* 000507 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000509 */ 			var has_endnotes = false;
/* 000511 */ 			var blocks = [];
/* 000512 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000512 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000512 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000513 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000513 */ 					continue;
/* 000513 */ 				}
/* 000517 */ 				var has_endnotes = true;
/* 000519 */ 				if (__t__ (__t__ (include_headings_at_level !== null) && include_headings_at_level !== false)) {
/* 000521 */ 					var heading_nodelist = (function () {
/* 000521 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000521 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000521 */ 					}) ();
/* 000526 */ 					var heading_target_id = null;
/* 000527 */ 					if (__t__ (set_headings_target_ids)) {
/* 000528 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000528 */ 					}
/* 000529 */ 					(function () {
/* 000529 */ 						var __accu0__ = blocks;
/* 000530 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000530 */ 							var __accu1__ = fragment_renderer;
/* 000530 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000530 */ 						}) ());
/* 000530 */ 					}) ();
/* 000530 */ 				}
/* 000537 */ 				(function () {
/* 000537 */ 					var __accu0__ = blocks;
/* 000538 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000538 */ 						var __accu1__ = self;
/* 000538 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000538 */ 					}) ());
/* 000538 */ 				}) ();
/* 000538 */ 			}
/* 000541 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000542 */ 				return (function () {
/* 000542 */ 					var __accu0__ = fragment_renderer;
/* 000542 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes'], render_context: render_context}));
/* 000542 */ 				}) ();
/* 000542 */ 			}
/* 000547 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000549 */ 				var heading_title_nodelist = (function () {
/* 000549 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000549 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000549 */ 				}) ();
/* 000554 */ 				(function () {
/* 000554 */ 					var __accu0__ = blocks;
/* 000556 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000556 */ 						var __accu1__ = fragment_renderer;
/* 000556 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000556 */ 					}) ());
/* 000556 */ 				}) ();
/* 000556 */ 			}
/* 000564 */ 			return (function () {
/* 000564 */ 				var __accu0__ = fragment_renderer;
/* 000565 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000565 */ 					var __accu1__ = fragment_renderer;
/* 000565 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks, render_context);
/* 000565 */ 				}) (), __kwargtrans__ ({role: 'endnotes', render_context: self.render_context, annotations: annotations, target_id: target_id}));
/* 000565 */ 			}) ();
/* 000565 */ 		});}
/* 000565 */ 	})
/* 000565 */ });
/* 000577 */ export var FeatureClass = FeatureEndnotes;
/* 000011 */ 
//# sourceMappingURL=flm.feature.endnotes.map