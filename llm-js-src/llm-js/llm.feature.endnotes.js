/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:23:01
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
/* 000006 */ export {LLMArgumentSpec, LLMMacroSpecBase, ParsedArgumentsInfo, fmthelpers, Feature};
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
/* 000041 */ 		var counter_formatter = __call__ (_parse_counter_formatter, null, counter_formatter);
/* 000042 */ 		self.counter_formatter = counter_formatter;
/* 000043 */ 		self.heading_title = heading_title;
/* 000044 */ 		self.endnote_command = endnote_command;
/* 000044 */ 	});}
/* 000044 */ });
/* 000047 */ export var _parse_counter_formatter = function (counter_formatter) {
/* 000047 */ 	if (arguments.length) {
/* 000047 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 				switch (__attrib0__) {
/* 000047 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 	}
/* 000047 */ 	else {
/* 000047 */ 	}
/* 000048 */ 	if (__t__ (__call__ (callable, null, counter_formatter))) {
/* 000049 */ 		return counter_formatter;
/* 000049 */ 	}
/* 000050 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, str))) {
/* 000051 */ 		return __getitem__ (fmthelpers.standard_counter_formatters, counter_formatter);
/* 000051 */ 	}
/* 000052 */ 	if (__t__ (__call__ (isinstance, null, counter_formatter, dict))) {
/* 000053 */ 		if (__t__ (__in__ ('template', counter_formatter))) {
/* 000054 */ 			var tmpl = __getitem__ (counter_formatter, 'template');
/* 000056 */ 			var pat = (function () {
/* 000056 */ 				var __accu0__ = '|';
/* 000056 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000056 */ 					var __accu1__ = [];
/* 000056 */ 					var __iterable0__ = (function () {
/* 000056 */ 						var __accu2__ = fmthelpers.standard_counter_formatters;
/* 000056 */ 						return __call__ (__accu2__.py_keys, __accu2__);
/* 000056 */ 					}) ();
/* 000056 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000056 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000056 */ 						(function () {
/* 000056 */ 							var __accu2__ = __accu1__;
/* 000056 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000056 */ 								var __accu3__ = re;
/* 000056 */ 								return __call__ (__accu3__.escape, __accu3__, k);
/* 000056 */ 							}) ());
/* 000056 */ 						}) ();
/* 000056 */ 					}
/* 000056 */ 					return py_iter (__accu1__);
/* 000056 */ 				}) ());
/* 000056 */ 			}) ();
/* 000057 */ 			var _rx_counter = (function () {
/* 000057 */ 				var __accu0__ = re;
/* 000057 */ 				return __call__ (__accu0__.compile, __accu0__, __add__ (__add__ ('\\$\\{(', pat), ')\\}'));
/* 000057 */ 			}) ();
/* 000058 */ 			return (function __lambda__ (n) {
/* 000058 */ 				if (arguments.length) {
/* 000058 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 							switch (__attrib0__) {
/* 000058 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 							}
/* 000058 */ 						}
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 				else {
/* 000058 */ 				}
/* 000059 */ 				return (function () {
/* 000059 */ 					var __accu0__ = _rx_counter;
/* 000059 */ 					return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000059 */ 						if (arguments.length) {
/* 000059 */ 							var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 								var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 								for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 									switch (__attrib0__) {
/* 000059 */ 										case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 									}
/* 000059 */ 								}
/* 000059 */ 							}
/* 000059 */ 						}
/* 000059 */ 						else {
/* 000059 */ 						}
/* 000060 */ 						return __call__ (__getitem__ (fmthelpers.standard_counter_formatters, (function () {
/* 000060 */ 							var __accu1__ = m;
/* 000060 */ 							return __call__ (__accu1__.group, __accu1__, 1);
/* 000060 */ 						}) ()), null, n);
/* 000060 */ 					}), tmpl);
/* 000060 */ 				}) ();
/* 000060 */ 			});
/* 000060 */ 		}
/* 000060 */ 	}
/* 000064 */ 	var __except0__ = __call__ (ValueError, null, 'Invalid counter_formatter: ‘{}’'.format (counter_formatter));
/* 000064 */ 	__except0__.__cause__ = null;
/* 000064 */ 	throw __except0__;
/* 000064 */ };
/* 000068 */ export var EndnoteMacro =  __class__ ('EndnoteMacro', [LLMMacroSpecBase], {
/* 000068 */ 	__module__: __name__,
/* 000070 */ 	allowed_in_standalone_mode: false,
/* 000072 */ 	get __init__ () {return __get__ (this, function (self, macroname, endnote_category_name) {
/* 000072 */ 		var kwargs = dict ();
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'endnote_category_name': var endnote_category_name = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 				delete kwargs.__kwargtrans__;
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000076 */ 		__call__ (__call__ (__super__, null, EndnoteMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'endnote_content'}))]}, kwargs)));
/* 000080 */ 		self.endnote_category_name = endnote_category_name;
/* 000080 */ 	});},
/* 000082 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var mgr = (function () {
/* 000084 */ 			var __accu0__ = render_context;
/* 000084 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'endnotes');
/* 000084 */ 		}) ();
/* 000085 */ 		if (__t__ (mgr === null)) {
/* 000086 */ 			var __except0__ = __call__ (RuntimeError, null, "You did not set up the feature 'endnotes' in your LLM environment");
/* 000086 */ 			__except0__.__cause__ = null;
/* 000086 */ 			throw __except0__;
/* 000086 */ 		}
/* 000090 */ 		var node_args = (function () {
/* 000090 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000090 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['endnote_content']));
/* 000090 */ 		}) ();
/* 000094 */ 		var content_nodelist = (function () {
/* 000094 */ 			var __accu0__ = __getitem__ (node_args, 'endnote_content');
/* 000094 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000094 */ 		}) ();
/* 000099 */ 		var endnote = (function () {
/* 000099 */ 			var __accu0__ = mgr;
/* 000099 */ 			return __call__ (__accu0__.add_endnote, __accu0__, __kwargtrans__ ({category_name: self.endnote_category_name, content_nodelist: content_nodelist, node: node}));
/* 000099 */ 		}) ();
/* 000105 */ 		var rendered_endnote_mark = (function () {
/* 000105 */ 			var __accu0__ = mgr;
/* 000105 */ 			return __call__ (__accu0__.render_endnote_mark, __accu0__, endnote);
/* 000105 */ 		}) ();
/* 000106 */ 		return rendered_endnote_mark;
/* 000106 */ 	});}
/* 000106 */ });
/* 000111 */ export var EndnoteInstance =  __class__ ('EndnoteInstance', [object], {
/* 000111 */ 	__module__: __name__,
/* 000112 */ 	get __init__ () {return __get__ (this, function (self, category_name, number, formatted_counter_value_llm, content_nodelist, ref_label_prefix, ref_label) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000114 */ 		__call__ (__call__ (__super__, null, EndnoteInstance, '__init__'), null, self);
/* 000115 */ 		self.category_name = category_name;
/* 000116 */ 		self.number = number;
/* 000117 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000118 */ 		self.content_nodelist = content_nodelist;
/* 000119 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000120 */ 		self.ref_label = ref_label;
/* 000121 */ 		self._fields = tuple (['category_name', 'number', 'formatted_counter_value_llm', 'content_nodelist', 'ref_label_prefix', 'ref_label']);
/* 000121 */ 	});},
/* 000124 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		return (function () {
/* 000125 */ 			var __accu0__ = '{}({})';
/* 000127 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000127 */ 				var __accu1__ = ', ';
/* 000127 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000127 */ 					var __accu2__ = [];
/* 000127 */ 					var __iterable0__ = self._fields;
/* 000127 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000127 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000127 */ 						(function () {
/* 000127 */ 							var __accu3__ = __accu2__;
/* 000127 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000127 */ 						}) ();
/* 000127 */ 					}
/* 000127 */ 					return __accu2__;
/* 000127 */ 				}) ());
/* 000127 */ 			}) ());
/* 000127 */ 		}) ();
/* 000127 */ 	});}
/* 000127 */ });
/* 000133 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000133 */ 	__module__: __name__,
/* 000135 */ 	feature_name: 'endnotes',
/* 000137 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000137 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000137 */ 			var render_options = null;
/* 000137 */ 		};
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000143 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000145 */ 		var _mkcatobj = function (x) {
/* 000145 */ 			if (arguments.length) {
/* 000145 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 						switch (__attrib0__) {
/* 000145 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						}
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 			else {
/* 000145 */ 			}
/* 000146 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000147 */ 				return x;
/* 000147 */ 			}
/* 000148 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000148 */ 		};
/* 000150 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000151 */ 			var categories = [];
/* 000151 */ 		}
/* 000153 */ 		self.base_categories = (function () {
/* 000153 */ 			var __accu0__ = [];
/* 000153 */ 			var __iterable0__ = categories;
/* 000153 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 				(function () {
/* 000155 */ 					var __accu1__ = __accu0__;
/* 000154 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000154 */ 				}) ();
/* 000154 */ 			}
/* 000154 */ 			return __accu0__;
/* 000154 */ 		}) ();
/* 000158 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000158 */ 	});},
/* 000160 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000162 */ 		var macros = [];
/* 000163 */ 		var __iterable0__ = self.base_categories;
/* 000163 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000163 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000164 */ 			if (__t__ (encat.endnote_command)) {
/* 000165 */ 				(function () {
/* 000165 */ 					var __accu0__ = macros;
/* 000166 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000166 */ 				}) ();
/* 000166 */ 			}
/* 000166 */ 		}
/* 000172 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000174 */ 	});},
/* 000174 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000174 */ 		__module__: __name__,
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
/* 000176 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000177 */ 			self.categories_by_name = (function () {
/* 000177 */ 				var __accu0__ = [];
/* 000177 */ 				var __iterable0__ = self.categories;
/* 000177 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu1__ = __accu0__;
/* 000178 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000178 */ 					}) ();
/* 000178 */ 				}
/* 000178 */ 				return dict (__accu0__);
/* 000178 */ 			}) ();
/* 000178 */ 		});},
/* 000181 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000181 */ 			if (arguments.length) {
/* 000181 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 						switch (__attrib0__) {
/* 000181 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						}
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 			else {
/* 000181 */ 			}
/* 000182 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000183 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000183 */ 				__except0__.__cause__ = null;
/* 000183 */ 				throw __except0__;
/* 000183 */ 			}
/* 000187 */ 			(function () {
/* 000187 */ 				var __accu0__ = self.categories;
/* 000187 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000187 */ 			}) ();
/* 000188 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000188 */ 		});}
/* 000190 */ 	}),
/* 000190 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000190 */ 		__module__: __name__,
/* 000192 */ 		get initialize () {return __get__ (this, function (self) {
/* 000192 */ 			if (arguments.length) {
/* 000192 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 						switch (__attrib0__) {
/* 000192 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						}
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 			else {
/* 000192 */ 			}
/* 000193 */ 			self.endnotes = (function () {
/* 000193 */ 				var __accu0__ = [];
/* 000193 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000193 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 					(function () {
/* 000195 */ 						var __accu1__ = __accu0__;
/* 000195 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000195 */ 					}) ();
/* 000195 */ 				}
/* 000195 */ 				return dict (__accu0__);
/* 000195 */ 			}) ();
/* 000197 */ 			self.endnote_counters = (function () {
/* 000197 */ 				var __accu0__ = [];
/* 000197 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000197 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 					(function () {
/* 000199 */ 						var __accu1__ = __accu0__;
/* 000199 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, 1]);
/* 000199 */ 					}) ();
/* 000199 */ 				}
/* 000199 */ 				return dict (__accu0__);
/* 000199 */ 			}) ();
/* 000201 */ 			self.endnote_instances = dict ({});
/* 000201 */ 		});},
/* 000203 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000203 */ 			var ref_label_prefix = null;
/* 000203 */ 			var ref_label = null;
/* 000203 */ 			if (arguments.length) {
/* 000203 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 						switch (__attrib0__) {
/* 000203 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						}
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 			else {
/* 000203 */ 			}
/* 000206 */ 			var node_id = (function () {
/* 000206 */ 				var __accu0__ = self;
/* 000206 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000206 */ 			}) ();
/* 000208 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000210 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000210 */ 			}
/* 000212 */ 			var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, category_name);
/* 000214 */ 			var fmtcounter = endnote_category_info.counter_formatter;
/* 000215 */ 			var number = __getitem__ (self.endnote_counters, category_name);
/* 000216 */ 			__setitem__ (self.endnote_counters, category_name, __call__ (__iadd__, null, __getitem__ (self.endnote_counters, category_name), 1));
/* 000218 */ 			var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000219 */ 			var fmtvalue_llm = (function () {
/* 000219 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000219 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000219 */ 			}) ();
/* 000225 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000233 */ 			(function () {
/* 000233 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000233 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000233 */ 			}) ();
/* 000235 */ 			if (__t__ (node_id !== null)) {
/* 000236 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000236 */ 			}
/* 000238 */ 			return endnote;
/* 000238 */ 		});},
/* 000240 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote) {
/* 000240 */ 			if (arguments.length) {
/* 000240 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 						switch (__attrib0__) {
/* 000240 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						}
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 			else {
/* 000240 */ 			}
/* 000241 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000242 */ 			var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000243 */ 			return (function () {
/* 000243 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000243 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_llm.nodes, render_context: self.render_context, annotations: ['endnote', endnote.category_name]}));
/* 000243 */ 			}) ();
/* 000243 */ 		});},
/* 000252 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000252 */ 			if (arguments.length) {
/* 000252 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 						switch (__attrib0__) {
/* 000252 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						}
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 			else {
/* 000252 */ 			}
/* 000254 */ 			var render_context = self.render_context;
/* 000255 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000257 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000258 */ 				var encat = category_name;
/* 000259 */ 				var category_name = encat.category_name;
/* 000259 */ 			}
/* 000263 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000263 */ 				if (arguments.length) {
/* 000263 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 							switch (__attrib0__) {
/* 000263 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 							}
/* 000263 */ 						}
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 				else {
/* 000263 */ 				}
/* 000264 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000265 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000266 */ 				return fmtvalue_llm.nodes;
/* 000266 */ 			};
/* 000268 */ 			var the_target_id_generator_fn = function (n) {
/* 000268 */ 				if (arguments.length) {
/* 000268 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 							switch (__attrib0__) {
/* 000268 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 							}
/* 000268 */ 						}
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 				else {
/* 000268 */ 				}
/* 000269 */ 				return '{}-{}'.format (category_name, n);
/* 000269 */ 			};
/* 000275 */ 			var iterable_of_content_endnotes = (function () {
/* 000275 */ 				var __accu0__ = [];
/* 000275 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000275 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000277 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu1__ = __accu0__;
/* 000277 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000277 */ 					}) ();
/* 000277 */ 				}
/* 000277 */ 				return __accu0__;
/* 000277 */ 			}) ();
/* 000280 */ 			return (function () {
/* 000280 */ 				var __accu0__ = fragment_renderer;
/* 000280 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000280 */ 			}) ();
/* 000280 */ 		});},
/* 000289 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000289 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var target_id = 'endnotes';
/* 000289 */ 			};
/* 000289 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var annotations = null;
/* 000289 */ 			};
/* 000289 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var include_headings_at_level = null;
/* 000289 */ 			};
/* 000289 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var set_headings_target_ids = null;
/* 000289 */ 			};
/* 000289 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var endnotes_heading_title = null;
/* 000289 */ 			};
/* 000289 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 				var endnotes_heading_level = null;
/* 000289 */ 			};
/* 000289 */ 			if (arguments.length) {
/* 000289 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 						switch (__attrib0__) {
/* 000289 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						}
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 			else {
/* 000289 */ 			}
/* 000298 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000300 */ 				var include_heaings_at_level = (function () {
/* 000300 */ 					var __accu0__ = self.feature.default_render_options;
/* 000300 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_heaings_at_level', null);
/* 000300 */ 				}) ();
/* 000300 */ 			}
/* 000301 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000303 */ 				var set_headings_target_ids = (function () {
/* 000303 */ 					var __accu0__ = self.feature.default_render_options;
/* 000303 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000304 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000306 */ 				var endnotes_heading_title = (function () {
/* 000306 */ 					var __accu0__ = self.feature.default_render_options;
/* 000306 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000307 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000309 */ 				var endnotes_heading_level = (function () {
/* 000309 */ 					var __accu0__ = self.feature.default_render_options;
/* 000309 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000309 */ 				}) ();
/* 000309 */ 			}
/* 000312 */ 			var render_context = self.render_context;
/* 000313 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000315 */ 			var has_endnotes = false;
/* 000317 */ 			var blocks = [];
/* 000318 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000318 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000318 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000319 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000319 */ 					continue;
/* 000319 */ 				}
/* 000323 */ 				var has_endnotes = true;
/* 000325 */ 				if (__t__ (include_headings_at_level !== null)) {
/* 000326 */ 					var heading_nodelist = (function () {
/* 000326 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000326 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000326 */ 					}) ();
/* 000331 */ 					var heading_target_id = null;
/* 000332 */ 					if (__t__ (set_headings_target_ids)) {
/* 000333 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000333 */ 					}
/* 000334 */ 					(function () {
/* 000334 */ 						var __accu0__ = blocks;
/* 000335 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000335 */ 							var __accu1__ = fragment_renderer;
/* 000335 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000335 */ 						}) ());
/* 000335 */ 					}) ();
/* 000335 */ 				}
/* 000342 */ 				(function () {
/* 000342 */ 					var __accu0__ = blocks;
/* 000343 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000343 */ 						var __accu1__ = self;
/* 000343 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000343 */ 					}) ());
/* 000343 */ 				}) ();
/* 000343 */ 			}
/* 000346 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000347 */ 				return (function () {
/* 000347 */ 					var __accu0__ = fragment_renderer;
/* 000347 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes']}));
/* 000347 */ 				}) ();
/* 000347 */ 			}
/* 000351 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000353 */ 				var heading_title_nodelist = (function () {
/* 000353 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000353 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000353 */ 				}) ();
/* 000358 */ 				(function () {
/* 000358 */ 					var __accu0__ = blocks;
/* 000360 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000360 */ 						var __accu1__ = fragment_renderer;
/* 000360 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000360 */ 					}) ());
/* 000360 */ 				}) ();
/* 000360 */ 			}
/* 000368 */ 			return (function () {
/* 000368 */ 				var __accu0__ = fragment_renderer;
/* 000369 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000369 */ 					var __accu1__ = fragment_renderer;
/* 000369 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks);
/* 000369 */ 				}) (), __kwargtrans__ ({role: 'endnotes', annotations: annotations, target_id: target_id}));
/* 000369 */ 			}) ();
/* 000369 */ 		});}
/* 000369 */ 	})
/* 000369 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map