/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 17:30:21
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000009 */ import {LatexNodesVisitor} from './pylatexenc.latexnodes.nodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LatexNodesVisitor};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._latex_recomposer';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000011 */ export var LatexNodesLatexRecomposer =  __class__ ('LatexNodesLatexRecomposer', [LatexNodesVisitor], {
/* 000011 */ 	__module__: __name__,
/* 000031 */ 	get latex_recompose () {return __get__ (this, function (self, node) {
/* 000031 */ 		if (arguments.length) {
/* 000031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 					switch (__attrib0__) {
/* 000031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 					}
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 		else {
/* 000031 */ 		}
/* 000038 */ 		return (function () {
/* 000038 */ 			var __accu0__ = self;
/* 000038 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000038 */ 		}) ();
/* 000038 */ 	});},
/* 000044 */ 	get recompose_chars () {return __get__ (this, function (self, chars, n) {
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000048 */ 		if (__t__ (!__t__ ((chars)))) {
/* 000049 */ 			var chars = '';
/* 000049 */ 		}
/* 000050 */ 		return __call__ (str, null, chars);
/* 000050 */ 	});},
/* 000052 */ 	get recompose_nodelist () {return __get__ (this, function (self, recomposed_list, n) {
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'recomposed_list': var recomposed_list = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000058 */ 		return (function () {
/* 000058 */ 			var __accu0__ = '';
/* 000058 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000058 */ 				var __accu1__ = [];
/* 000058 */ 				var __iterable0__ = recomposed_list;
/* 000058 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000059 */ 					var recomposed = __getitem__ (__iterable0__, __index0__);
/* 000059 */ 					if (__t__ (recomposed !== null)) {
/* 000060 */ 						(function () {
/* 000060 */ 							var __accu2__ = __accu1__;
/* 000060 */ 							return __call__ (__accu2__.append, __accu2__, recomposed);
/* 000060 */ 						}) ();
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 				return __accu1__;
/* 000060 */ 			}) ());
/* 000060 */ 		}) ();
/* 000060 */ 	});},
/* 000063 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, recomposed_list, n) {
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'recomposed_list': var recomposed_list = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000070 */ 		if (__t__ (!__t__ ((delimiters)))) {
/* 000071 */ 			var delimiters = tuple (['', '']);
/* 000071 */ 		}
/* 000072 */ 		return __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000072 */ 			var __accu0__ = self;
/* 000072 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, recomposed_list, n);
/* 000072 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000072 */ 	});},
/* 000075 */ 	get recompose_comment () {return __get__ (this, function (self, comment, comment_post_space, n) {
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'comment_post_space': var comment_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000079 */ 		if (__t__ (!__t__ ((comment)))) {
/* 000080 */ 			var comment = '';
/* 000080 */ 		}
/* 000081 */ 		if (__t__ (!__t__ ((comment_post_space)))) {
/* 000082 */ 			var comment_post_space = '';
/* 000082 */ 		}
/* 000083 */ 		return __add__ (__add__ (n.parsing_state.comment_start, comment), comment_post_space);
/* 000083 */ 	});},
/* 000085 */ 	get recompose_macro_call () {return __get__ (this, function (self, macroname, macro_post_space, recomposed_arguments_list, n) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'macro_post_space': var macro_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'recomposed_arguments_list': var recomposed_arguments_list = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000091 */ 		if (__t__ (recomposed_arguments_list === null)) {
/* 000092 */ 			var recomposed_arguments_list = [];
/* 000092 */ 		}
/* 000095 */ 		return __add__ (__add__ (__add__ ('\\', macroname), macro_post_space), (function () {
/* 000095 */ 			var __accu0__ = self;
/* 000095 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, recomposed_arguments_list, n);
/* 000095 */ 		}) ());
/* 000095 */ 	});},
/* 000098 */ 	get recompose_environment_call () {return __get__ (this, function (self, environmentname, recomposed_arguments_list, recomposed_body_list, n) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'recomposed_arguments_list': var recomposed_arguments_list = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'recomposed_body_list': var recomposed_body_list = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000109 */ 		if (__t__ (recomposed_arguments_list === null)) {
/* 000110 */ 			var recomposed_arguments_list = [];
/* 000110 */ 		}
/* 000113 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', __call__ (str, null, environmentname)), '}'), (function () {
/* 000113 */ 			var __accu0__ = self;
/* 000113 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, recomposed_arguments_list, n);
/* 000114 */ 		}) ()), (function () {
/* 000114 */ 			var __accu0__ = self;
/* 000114 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, recomposed_body_list, n);
/* 000115 */ 		}) ()), '\\end{'), __call__ (str, null, environmentname)), '}');
/* 000115 */ 	});},
/* 000118 */ 	get recompose_specials_call () {return __get__ (this, function (self, specials_chars, recomposed_arguments_list, n) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'recomposed_arguments_list': var recomposed_arguments_list = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000125 */ 		if (__t__ (!__t__ ((recomposed_arguments_list)))) {
/* 000126 */ 			var recomposed_arguments_list = '';
/* 000126 */ 		}
/* 000127 */ 		return __add__ (specials_chars, recomposed_arguments_list);
/* 000127 */ 	});},
/* 000129 */ 	get recompose_math_content () {return __get__ (this, function (self, delimiters, recomposed_list, n) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'recomposed_list': var recomposed_list = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000136 */ 		return (function () {
/* 000136 */ 			var __accu0__ = self;
/* 000136 */ 			return __call__ (__accu0__.recompose_delimited_nodelist, __accu0__, delimiters, recomposed_list, n);
/* 000136 */ 		}) ();
/* 000136 */ 	});},
/* 000138 */ 	get recompose_parsed_arguments () {return __get__ (this, function (self, recomposed_list, pa) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'recomposed_list': var recomposed_list = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'pa': var pa = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000148 */ 		return recomposed_list;
/* 000148 */ 	});},
/* 000151 */ 	get recompose_unknown () {return __get__ (this, function (self, node) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000155 */ 		return __add__ (__add__ ('<<< UNKNOWN NODE: ', __call__ (repr, null, node)), ' >>>');
/* 000155 */ 	});},
/* 000161 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 000161 */ 		var kwargs = dict ();
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 				delete kwargs.__kwargtrans__;
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		return (function () {
/* 000162 */ 			var __accu0__ = self;
/* 000162 */ 			return __call__ (__accu0__.recompose_chars, __accu0__, node.chars, node);
/* 000162 */ 		}) ();
/* 000162 */ 	});},
/* 000164 */ 	get visit_group_node () {return __get__ (this, function (self, node, visited_results_nodelist) {
/* 000164 */ 		var kwargs = dict ();
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'visited_results_nodelist': var visited_results_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 				delete kwargs.__kwargtrans__;
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		return (function () {
/* 000165 */ 			var __accu0__ = self;
/* 000165 */ 			return __call__ (__accu0__.recompose_delimited_nodelist, __accu0__, node.delimiters, visited_results_nodelist, node);
/* 000165 */ 		}) ();
/* 000165 */ 	});},
/* 000169 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 000169 */ 		var kwargs = dict ();
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 				delete kwargs.__kwargtrans__;
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		return (function () {
/* 000170 */ 			var __accu0__ = self;
/* 000170 */ 			return __call__ (__accu0__.recompose_comment, __accu0__, node.comment, node.comment_post_space, node);
/* 000170 */ 		}) ();
/* 000170 */ 	});},
/* 000172 */ 	get visit_macro_node () {return __get__ (this, function (self, node, visited_results_arguments) {
/* 000172 */ 		var kwargs = dict ();
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 				delete kwargs.__kwargtrans__;
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		return (function () {
/* 000173 */ 			var __accu0__ = self;
/* 000173 */ 			return __call__ (__accu0__.recompose_macro_call, __accu0__, node.macroname, node.macro_post_space, visited_results_arguments, node);
/* 000173 */ 		}) ();
/* 000173 */ 	});},
/* 000177 */ 	get visit_environment_node () {return __get__ (this, function (self, node, visited_results_arguments, visited_results_body) {
/* 000177 */ 		var kwargs = dict ();
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 				delete kwargs.__kwargtrans__;
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = self;
/* 000179 */ 			return __call__ (__accu0__.recompose_environment_call, __accu0__, node.environmentname, visited_results_arguments, visited_results_body, node);
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000183 */ 	get visit_specials_node () {return __get__ (this, function (self, node, visited_results_arguments) {
/* 000183 */ 		var kwargs = dict ();
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 				delete kwargs.__kwargtrans__;
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.recompose_specials_call, __accu0__, node.specials_chars, visited_results_arguments, node);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000188 */ 	get visit_math_node () {return __get__ (this, function (self, node, visited_results_nodelist) {
/* 000188 */ 		var kwargs = dict ();
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'visited_results_nodelist': var visited_results_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 				delete kwargs.__kwargtrans__;
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000189 */ 		return (function () {
/* 000189 */ 			var __accu0__ = self;
/* 000189 */ 			return __call__ (__accu0__.recompose_math_content, __accu0__, node.delimiters, visited_results_nodelist, node);
/* 000189 */ 		}) ();
/* 000189 */ 	});},
/* 000191 */ 	get visit_node_list () {return __get__ (this, function (self, nodelist, visited_results_nodelist) {
/* 000191 */ 		var kwargs = dict ();
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'visited_results_nodelist': var visited_results_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 				delete kwargs.__kwargtrans__;
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000192 */ 		return (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, visited_results_nodelist, nodelist);
/* 000192 */ 		}) ();
/* 000192 */ 	});},
/* 000194 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args, visited_results_argnlist) {
/* 000194 */ 		var kwargs = dict ();
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'visited_results_argnlist': var visited_results_argnlist = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 				delete kwargs.__kwargtrans__;
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		return (function () {
/* 000195 */ 			var __accu0__ = self;
/* 000195 */ 			return __call__ (__accu0__.recompose_parsed_arguments, __accu0__, visited_results_argnlist, parsed_args);
/* 000195 */ 		}) ();
/* 000195 */ 	});},
/* 000197 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 000197 */ 		var kwargs = dict ();
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 				delete kwargs.__kwargtrans__;
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000198 */ 		return (function () {
/* 000198 */ 			var __accu0__ = self;
/* 000198 */ 			return __call__ (__accu0__.recompose_unknown, __accu0__, node);
/* 000198 */ 		}) ();
/* 000198 */ 	});}
/* 000198 */ });
/* 000006 */ 
//# sourceMappingURL=pylatexenc.latexnodes._latex_recomposer.map