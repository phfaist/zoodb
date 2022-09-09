/* 000001 */ // Transcrypt'ed from Python, 2022-09-09 17:04:03
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
/* 000006 */ export {LLMArgumentSpec, ParsedArgumentsInfo, Feature, LLMMacroSpecBase, fmthelpers};
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
/* 000124 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000125 */ 			var __accu0__ = [];
/* 000125 */ 			var __iterable0__ = self._fields;
/* 000125 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 				(function () {
/* 000125 */ 					var __accu1__ = __accu0__;
/* 000125 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000125 */ 				}) ();
/* 000125 */ 			}
/* 000125 */ 			return dict (__accu0__);
/* 000125 */ 		}) ();
/* 000125 */ 	});},
/* 000127 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000128 */ 		return (function () {
/* 000128 */ 			var __accu0__ = '{}({})';
/* 000130 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000130 */ 				var __accu1__ = ', ';
/* 000130 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000130 */ 					var __accu2__ = [];
/* 000130 */ 					var __iterable0__ = self._fields;
/* 000130 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000130 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000130 */ 						(function () {
/* 000130 */ 							var __accu3__ = __accu2__;
/* 000130 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000130 */ 						}) ();
/* 000130 */ 					}
/* 000130 */ 					return __accu2__;
/* 000130 */ 				}) ());
/* 000130 */ 			}) ());
/* 000130 */ 		}) ();
/* 000130 */ 	});}
/* 000130 */ });
/* 000136 */ export var FeatureEndnotes =  __class__ ('FeatureEndnotes', [Feature], {
/* 000136 */ 	__module__: __name__,
/* 000138 */ 	feature_name: 'endnotes',
/* 000140 */ 	get __init__ () {return __get__ (this, function (self, categories, render_options) {
/* 000140 */ 		if (typeof render_options == 'undefined' || (render_options != null && render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var render_options = null;
/* 000140 */ 		};
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'categories': var categories = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'render_options': var render_options = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, FeatureEndnotes, '__init__'), null, self);
/* 000148 */ 		var _mkcatobj = function (x) {
/* 000148 */ 			if (arguments.length) {
/* 000148 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 						switch (__attrib0__) {
/* 000148 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						}
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 			else {
/* 000148 */ 			}
/* 000149 */ 			if (__t__ (__call__ (isinstance, null, x, EndnoteCategory))) {
/* 000150 */ 				return x;
/* 000150 */ 			}
/* 000151 */ 			return __call__ (EndnoteCategory, null, __kwargtrans__ (x));
/* 000151 */ 		};
/* 000153 */ 		if (__t__ (!__t__ ((categories)))) {
/* 000154 */ 			var categories = [];
/* 000154 */ 		}
/* 000156 */ 		self.base_categories = (function () {
/* 000156 */ 			var __accu0__ = [];
/* 000156 */ 			var __iterable0__ = categories;
/* 000156 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 				(function () {
/* 000158 */ 					var __accu1__ = __accu0__;
/* 000157 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkcatobj, null, x));
/* 000157 */ 				}) ();
/* 000157 */ 			}
/* 000157 */ 			return __accu0__;
/* 000157 */ 		}) ();
/* 000161 */ 		self.default_render_options = (__t__ (render_options) ? render_options : dict ({}));
/* 000161 */ 	});},
/* 000163 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000165 */ 		var macros = [];
/* 000166 */ 		var __iterable0__ = self.base_categories;
/* 000166 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 			var encat = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 			if (__t__ (encat.endnote_command)) {
/* 000168 */ 				(function () {
/* 000168 */ 					var __accu0__ = macros;
/* 000169 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (EndnoteMacro, null, encat.endnote_command, __kwargtrans__ ({endnote_category_name: encat.category_name})));
/* 000169 */ 				}) ();
/* 000169 */ 			}
/* 000169 */ 		}
/* 000175 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000177 */ 	});},
/* 000177 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000177 */ 		__module__: __name__,
/* 000178 */ 		get initialize () {return __get__ (this, function (self) {
/* 000178 */ 			if (arguments.length) {
/* 000178 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 						switch (__attrib0__) {
/* 000178 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						}
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 			else {
/* 000178 */ 			}
/* 000179 */ 			self.categories = __call__ (list, null, self.feature.base_categories);
/* 000180 */ 			self.categories_by_name = (function () {
/* 000180 */ 				var __accu0__ = [];
/* 000180 */ 				var __iterable0__ = self.categories;
/* 000180 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu1__ = __accu0__;
/* 000181 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, c]);
/* 000181 */ 					}) ();
/* 000181 */ 				}
/* 000181 */ 				return dict (__accu0__);
/* 000181 */ 			}) ();
/* 000181 */ 		});},
/* 000184 */ 		get add_endnote_category () {return __get__ (this, function (self, endnote_category) {
/* 000184 */ 			if (arguments.length) {
/* 000184 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 						switch (__attrib0__) {
/* 000184 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 							case 'endnote_category': var endnote_category = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						}
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 			else {
/* 000184 */ 			}
/* 000185 */ 			if (__t__ (__in__ (endnote_category.category_name, self.categories_by_name))) {
/* 000186 */ 				var __except0__ = __call__ (ValueError, null, 'Endnote category ‘{}’ is already a registered endnote category'.format (endnote_category.category_name));
/* 000186 */ 				__except0__.__cause__ = null;
/* 000186 */ 				throw __except0__;
/* 000186 */ 			}
/* 000190 */ 			(function () {
/* 000190 */ 				var __accu0__ = self.categories;
/* 000190 */ 				return __call__ (__accu0__.append, __accu0__, endnote_category);
/* 000190 */ 			}) ();
/* 000191 */ 			__setitem__ (self.categories_by_name, endnote_category.category_name, endnote_category);
/* 000191 */ 		});}
/* 000193 */ 	}),
/* 000193 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000193 */ 		__module__: __name__,
/* 000195 */ 		get initialize () {return __get__ (this, function (self) {
/* 000195 */ 			if (arguments.length) {
/* 000195 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 						switch (__attrib0__) {
/* 000195 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						}
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 			else {
/* 000195 */ 			}
/* 000196 */ 			self.endnotes = (function () {
/* 000196 */ 				var __accu0__ = [];
/* 000196 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000196 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 					(function () {
/* 000198 */ 						var __accu1__ = __accu0__;
/* 000198 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, []]);
/* 000198 */ 					}) ();
/* 000198 */ 				}
/* 000198 */ 				return dict (__accu0__);
/* 000198 */ 			}) ();
/* 000200 */ 			self.endnote_counters = (function () {
/* 000200 */ 				var __accu0__ = [];
/* 000200 */ 				var __iterable0__ = self.feature_document_manager.categories;
/* 000200 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 					(function () {
/* 000202 */ 						var __accu1__ = __accu0__;
/* 000202 */ 						return __call__ (__accu1__.append, __accu1__, [c.category_name, 1]);
/* 000202 */ 					}) ();
/* 000202 */ 				}
/* 000202 */ 				return dict (__accu0__);
/* 000202 */ 			}) ();
/* 000204 */ 			self.endnote_instances = dict ({});
/* 000204 */ 		});},
/* 000206 */ 		get add_endnote () {return __get__ (this, function (self, category_name, content_nodelist) {
/* 000206 */ 			var ref_label_prefix = null;
/* 000206 */ 			var ref_label = null;
/* 000206 */ 			if (arguments.length) {
/* 000206 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 						switch (__attrib0__) {
/* 000206 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						}
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 			else {
/* 000206 */ 			}
/* 000209 */ 			var node_id = (function () {
/* 000209 */ 				var __accu0__ = self;
/* 000209 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000209 */ 			}) ();
/* 000211 */ 			if (__t__ (__in__ (node_id, self.endnote_instances))) {
/* 000213 */ 				return __getitem__ (self.endnote_instances, node_id);
/* 000213 */ 			}
/* 000215 */ 			var endnote_category_info = __getitem__ (self.feature_document_manager.categories_by_name, category_name);
/* 000217 */ 			var fmtcounter = endnote_category_info.counter_formatter;
/* 000218 */ 			var number = __getitem__ (self.endnote_counters, category_name);
/* 000219 */ 			__setitem__ (self.endnote_counters, category_name, __call__ (__iadd__, null, __getitem__ (self.endnote_counters, category_name), 1));
/* 000221 */ 			var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000222 */ 			var fmtvalue_llm = (function () {
/* 000222 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000222 */ 				return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} counter'.format (category_name)}));
/* 000222 */ 			}) ();
/* 000228 */ 			var endnote = __call__ (EndnoteInstance, null, __kwargtrans__ ({category_name: category_name, number: number, formatted_counter_value_llm: fmtvalue_llm, content_nodelist: content_nodelist, ref_label_prefix: ref_label_prefix, ref_label: ref_label}));
/* 000236 */ 			(function () {
/* 000236 */ 				var __accu0__ = __getitem__ (self.endnotes, category_name);
/* 000236 */ 				return __call__ (__accu0__.append, __accu0__, endnote);
/* 000236 */ 			}) ();
/* 000238 */ 			if (__t__ (node_id !== null)) {
/* 000239 */ 				__setitem__ (self.endnote_instances, node_id, endnote);
/* 000239 */ 			}
/* 000241 */ 			return endnote;
/* 000241 */ 		});},
/* 000243 */ 		get render_endnote_mark () {return __get__ (this, function (self, endnote) {
/* 000243 */ 			if (arguments.length) {
/* 000243 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 						switch (__attrib0__) {
/* 000243 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 							case 'endnote': var endnote = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						}
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 			else {
/* 000243 */ 			}
/* 000244 */ 			var endnote_link_href = '#{}-{}'.format (endnote.category_name, endnote.number);
/* 000245 */ 			var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000246 */ 			return (function () {
/* 000246 */ 				var __accu0__ = self.render_context.fragment_renderer;
/* 000246 */ 				return __call__ (__accu0__.render_link, __accu0__, 'endnote', endnote_link_href, __kwargtrans__ ({display_nodelist: fmtvalue_llm.nodes, render_context: self.render_context, annotations: ['endnote', endnote.category_name]}));
/* 000246 */ 			}) ();
/* 000246 */ 		});},
/* 000255 */ 		get render_endnotes_category () {return __get__ (this, function (self, category_name) {
/* 000255 */ 			if (arguments.length) {
/* 000255 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 						switch (__attrib0__) {
/* 000255 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 							case 'category_name': var category_name = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						}
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 			else {
/* 000255 */ 			}
/* 000257 */ 			var render_context = self.render_context;
/* 000258 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000260 */ 			if (__t__ (__call__ (hasattr, null, category_name, 'category_name'))) {
/* 000261 */ 				var encat = category_name;
/* 000262 */ 				var category_name = encat.category_name;
/* 000262 */ 			}
/* 000266 */ 			var the_endnotes_enumeration_counter_formatter = function (n) {
/* 000266 */ 				if (arguments.length) {
/* 000266 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 							switch (__attrib0__) {
/* 000266 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 							}
/* 000266 */ 						}
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 				else {
/* 000266 */ 				}
/* 000267 */ 				var endnote = __getitem__ (__getitem__ (self.endnotes, category_name), __sub__ (n, 1));
/* 000268 */ 				var fmtvalue_llm = endnote.formatted_counter_value_llm;
/* 000269 */ 				return fmtvalue_llm.nodes;
/* 000269 */ 			};
/* 000271 */ 			var the_target_id_generator_fn = function (n) {
/* 000271 */ 				if (arguments.length) {
/* 000271 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 							switch (__attrib0__) {
/* 000271 */ 								case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 							}
/* 000271 */ 						}
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 				else {
/* 000271 */ 				}
/* 000272 */ 				return '{}-{}'.format (category_name, n);
/* 000272 */ 			};
/* 000278 */ 			var iterable_of_content_endnotes = (function () {
/* 000278 */ 				var __accu0__ = [];
/* 000278 */ 				var __iterable0__ = __getitem__ (self.endnotes, category_name);
/* 000278 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 					var en = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 					(function () {
/* 000280 */ 						var __accu1__ = __accu0__;
/* 000280 */ 						return __call__ (__accu1__.append, __accu1__, en.content_nodelist);
/* 000280 */ 					}) ();
/* 000280 */ 				}
/* 000280 */ 				return __accu0__;
/* 000280 */ 			}) ();
/* 000283 */ 			return (function () {
/* 000283 */ 				var __accu0__ = fragment_renderer;
/* 000283 */ 				return __call__ (__accu0__.render_enumeration, __accu0__, iterable_of_content_endnotes, __kwargtrans__ ({counter_formatter: the_endnotes_enumeration_counter_formatter, target_id_generator: the_target_id_generator_fn, render_context: self.render_context, annotations: [__add__ (category_name, '-list')]}));
/* 000283 */ 			}) ();
/* 000283 */ 		});},
/* 000292 */ 		get render_endnotes () {return __get__ (this, function (self, target_id, annotations, include_headings_at_level, set_headings_target_ids, endnotes_heading_title, endnotes_heading_level) {
/* 000292 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var target_id = 'endnotes';
/* 000292 */ 			};
/* 000292 */ 			if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var annotations = null;
/* 000292 */ 			};
/* 000292 */ 			if (typeof include_headings_at_level == 'undefined' || (include_headings_at_level != null && include_headings_at_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var include_headings_at_level = null;
/* 000292 */ 			};
/* 000292 */ 			if (typeof set_headings_target_ids == 'undefined' || (set_headings_target_ids != null && set_headings_target_ids.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var set_headings_target_ids = null;
/* 000292 */ 			};
/* 000292 */ 			if (typeof endnotes_heading_title == 'undefined' || (endnotes_heading_title != null && endnotes_heading_title.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var endnotes_heading_title = null;
/* 000292 */ 			};
/* 000292 */ 			if (typeof endnotes_heading_level == 'undefined' || (endnotes_heading_level != null && endnotes_heading_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000292 */ 				var endnotes_heading_level = null;
/* 000292 */ 			};
/* 000292 */ 			if (arguments.length) {
/* 000292 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 						switch (__attrib0__) {
/* 000292 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'include_headings_at_level': var include_headings_at_level = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'set_headings_target_ids': var set_headings_target_ids = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'endnotes_heading_title': var endnotes_heading_title = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 							case 'endnotes_heading_level': var endnotes_heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						}
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 			else {
/* 000292 */ 			}
/* 000301 */ 			if (__t__ (include_headings_at_level === null)) {
/* 000303 */ 				var include_heaings_at_level = (function () {
/* 000303 */ 					var __accu0__ = self.feature.default_render_options;
/* 000303 */ 					return __call__ (__accu0__.py_get, __accu0__, 'include_heaings_at_level', null);
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000304 */ 			if (__t__ (set_headings_target_ids === null)) {
/* 000306 */ 				var set_headings_target_ids = (function () {
/* 000306 */ 					var __accu0__ = self.feature.default_render_options;
/* 000306 */ 					return __call__ (__accu0__.py_get, __accu0__, 'set_headings_target_ids', false);
/* 000306 */ 				}) ();
/* 000306 */ 			}
/* 000307 */ 			if (__t__ (endnotes_heading_title === null)) {
/* 000309 */ 				var endnotes_heading_title = (function () {
/* 000309 */ 					var __accu0__ = self.feature.default_render_options;
/* 000309 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_title', null);
/* 000309 */ 				}) ();
/* 000309 */ 			}
/* 000310 */ 			if (__t__ (endnotes_heading_level === null)) {
/* 000312 */ 				var endnotes_heading_level = (function () {
/* 000312 */ 					var __accu0__ = self.feature.default_render_options;
/* 000312 */ 					return __call__ (__accu0__.py_get, __accu0__, 'endnotes_heading_level', 1);
/* 000312 */ 				}) ();
/* 000312 */ 			}
/* 000315 */ 			var render_context = self.render_context;
/* 000316 */ 			var fragment_renderer = render_context.fragment_renderer;
/* 000318 */ 			var has_endnotes = false;
/* 000320 */ 			var blocks = [];
/* 000321 */ 			var __iterable0__ = self.feature_document_manager.categories;
/* 000321 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000321 */ 				var encat = __getitem__ (__iterable0__, __index0__);
/* 000322 */ 				if (__t__ (!__t__ ((__call__ (len, null, __getitem__ (self.endnotes, encat.category_name)))))) {
/* 000322 */ 					continue;
/* 000322 */ 				}
/* 000326 */ 				var has_endnotes = true;
/* 000328 */ 				if (__t__ (include_headings_at_level !== null)) {
/* 000329 */ 					var heading_nodelist = (function () {
/* 000329 */ 						var __accu0__ = self.render_context.doc.environment;
/* 000329 */ 						return __call__ (__accu0__.make_fragment, __accu0__, encat.heading_title, __kwargtrans__ ({is_block_level: false, what: '{} heading title'.format (encat.category_name)}));
/* 000329 */ 					}) ();
/* 000334 */ 					var heading_target_id = null;
/* 000335 */ 					if (__t__ (set_headings_target_ids)) {
/* 000336 */ 						var heading_target_id = '{}-{}'.format (target_id, encat.category_name);
/* 000336 */ 					}
/* 000337 */ 					(function () {
/* 000337 */ 						var __accu0__ = blocks;
/* 000338 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000338 */ 							var __accu1__ = fragment_renderer;
/* 000338 */ 							return __call__ (__accu1__.render_heading, __accu1__, heading_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: include_headings_at_level, target_id: heading_target_id}));
/* 000338 */ 						}) ());
/* 000338 */ 					}) ();
/* 000338 */ 				}
/* 000345 */ 				(function () {
/* 000345 */ 					var __accu0__ = blocks;
/* 000346 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000346 */ 						var __accu1__ = self;
/* 000346 */ 						return __call__ (__accu1__.render_endnotes_category, __accu1__, encat);
/* 000346 */ 					}) ());
/* 000346 */ 				}) ();
/* 000346 */ 			}
/* 000349 */ 			if (__t__ (!__t__ ((has_endnotes)))) {
/* 000350 */ 				return (function () {
/* 000350 */ 					var __accu0__ = fragment_renderer;
/* 000350 */ 					return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['no-endnotes']}));
/* 000350 */ 				}) ();
/* 000350 */ 			}
/* 000354 */ 			if (__t__ (endnotes_heading_title !== null)) {
/* 000356 */ 				var heading_title_nodelist = (function () {
/* 000356 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000356 */ 					return __call__ (__accu0__.make_fragment, __accu0__, endnotes_heading_title, __kwargtrans__ ({is_block_level: false, what: 'endnotes heading title'.format ()}));
/* 000356 */ 				}) ();
/* 000361 */ 				(function () {
/* 000361 */ 					var __accu0__ = blocks;
/* 000363 */ 					return __call__ (__accu0__.insert, __accu0__, 0, (function () {
/* 000363 */ 						var __accu1__ = fragment_renderer;
/* 000363 */ 						return __call__ (__accu1__.render_heading, __accu1__, heading_title_nodelist.nodes, __kwargtrans__ ({render_context: self.render_context, heading_level: endnotes_heading_level}));
/* 000363 */ 					}) ());
/* 000363 */ 				}) ();
/* 000363 */ 			}
/* 000371 */ 			return (function () {
/* 000371 */ 				var __accu0__ = fragment_renderer;
/* 000372 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, (function () {
/* 000372 */ 					var __accu1__ = fragment_renderer;
/* 000372 */ 					return __call__ (__accu1__.render_join_blocks, __accu1__, blocks);
/* 000372 */ 				}) (), __kwargtrans__ ({role: 'endnotes', annotations: annotations, target_id: target_id}));
/* 000372 */ 			}) ();
/* 000372 */ 		});}
/* 000372 */ 	})
/* 000372 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.endnotes.map