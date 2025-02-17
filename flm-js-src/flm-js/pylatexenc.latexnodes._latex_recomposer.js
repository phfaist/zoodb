/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 13:55:25
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
/* 000052 */ 	get recompose_nodelist () {return __get__ (this, function (self, nodelist, n) {
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000060 */ 		var recomposed_list = (function () {
/* 000060 */ 			var __accu0__ = self;
/* 000060 */ 			return __call__ (__accu0__.descend_into_nodelist, __accu0__, nodelist);
/* 000060 */ 		}) ();
/* 000061 */ 		return (function () {
/* 000061 */ 			var __accu0__ = '';
/* 000061 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000061 */ 				var __accu1__ = [];
/* 000061 */ 				var __iterable0__ = recomposed_list;
/* 000061 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000062 */ 					var recomposed = __getitem__ (__iterable0__, __index0__);
/* 000062 */ 					if (__t__ (recomposed !== null)) {
/* 000063 */ 						(function () {
/* 000063 */ 							var __accu2__ = __accu1__;
/* 000063 */ 							return __call__ (__accu2__.append, __accu2__, recomposed);
/* 000063 */ 						}) ();
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 				return __accu1__;
/* 000063 */ 			}) ());
/* 000063 */ 		}) ();
/* 000063 */ 	});},
/* 000066 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000077 */ 		if (__t__ (!__t__ ((delimiters)))) {
/* 000078 */ 			var delimiters = tuple (['', '']);
/* 000078 */ 		}
/* 000079 */ 		return __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000079 */ 			var __accu0__ = self;
/* 000079 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, nodelist, n);
/* 000079 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000079 */ 	});},
/* 000082 */ 	get recompose_comment () {return __get__ (this, function (self, comment, comment_post_space, n) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'comment_post_space': var comment_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000086 */ 		if (__t__ (!__t__ ((comment)))) {
/* 000087 */ 			var comment = '';
/* 000087 */ 		}
/* 000088 */ 		if (__t__ (!__t__ ((comment_post_space)))) {
/* 000089 */ 			var comment_post_space = '';
/* 000089 */ 		}
/* 000090 */ 		return __add__ (__add__ (n.parsing_state.comment_start, comment), comment_post_space);
/* 000090 */ 	});},
/* 000092 */ 	get recompose_macro_call () {return __get__ (this, function (self, macroname, macro_post_space, parsed_arguments, n) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'macro_post_space': var macro_post_space = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000102 */ 		var recomposed_arguments = (function () {
/* 000102 */ 			var __accu0__ = self;
/* 000102 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, parsed_arguments);
/* 000102 */ 		}) ();
/* 000103 */ 		return __add__ (__add__ (__add__ ('\\', macroname), macro_post_space), recomposed_arguments);
/* 000103 */ 	});},
/* 000108 */ 	get recompose_environment_call () {return __get__ (this, function (self, environmentname, parsed_arguments, body_node_list, n) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'body_node_list': var body_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000121 */ 		var recomposed_arguments = (function () {
/* 000121 */ 			var __accu0__ = self;
/* 000121 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, parsed_arguments);
/* 000121 */ 		}) ();
/* 000122 */ 		var recomposed_body = (function () {
/* 000122 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, body_node_list, n);
/* 000122 */ 		}) ();
/* 000128 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\begin{', __call__ (str, null, environmentname)), '}'), recomposed_arguments), recomposed_body), '\\end{'), __call__ (str, null, environmentname)), '}');
/* 000128 */ 	});},
/* 000131 */ 	get recompose_specials_call () {return __get__ (this, function (self, specials_chars, parsed_arguments, n) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000141 */ 		var recomposed_arguments = (function () {
/* 000141 */ 			var __accu0__ = self;
/* 000141 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, parsed_arguments);
/* 000141 */ 		}) ();
/* 000142 */ 		return __add__ (specials_chars, recomposed_arguments);
/* 000142 */ 	});},
/* 000144 */ 	get recompose_math_content () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000154 */ 		return (function () {
/* 000154 */ 			var __accu0__ = self;
/* 000154 */ 			return __call__ (__accu0__.recompose_delimited_nodelist, __accu0__, delimiters, nodelist, n);
/* 000154 */ 		}) ();
/* 000154 */ 	});},
/* 000156 */ 	get recompose_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000170 */ 		return (function () {
/* 000170 */ 			var __accu0__ = self;
/* 000170 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, parsed_arguments.argnlist, null);
/* 000170 */ 		}) ();
/* 000170 */ 	});},
/* 000173 */ 	get recompose_unknown () {return __get__ (this, function (self, node) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000177 */ 		return __add__ (__add__ ('<<< UNKNOWN NODE: ', __call__ (repr, null, node)), ' >>>');
/* 000177 */ 	});},
/* 000183 */ 	get node_standard_process_chars () {return __get__ (this, function (self, node) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.recompose_chars, __accu0__, node.chars, node);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000186 */ 	get node_standard_process_group () {return __get__ (this, function (self, node) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		return (function () {
/* 000187 */ 			var __accu0__ = self;
/* 000187 */ 			return __call__ (__accu0__.recompose_delimited_nodelist, __accu0__, node.delimiters, node.nodelist, node);
/* 000187 */ 		}) ();
/* 000187 */ 	});},
/* 000193 */ 	get node_standard_process_comment () {return __get__ (this, function (self, node) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		return (function () {
/* 000194 */ 			var __accu0__ = self;
/* 000194 */ 			return __call__ (__accu0__.recompose_comment, __accu0__, node.comment, node.comment_post_space, node);
/* 000194 */ 		}) ();
/* 000194 */ 	});},
/* 000196 */ 	get node_standard_process_macro () {return __get__ (this, function (self, node) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		return (function () {
/* 000197 */ 			var __accu0__ = self;
/* 000197 */ 			return __call__ (__accu0__.recompose_macro_call, __accu0__, node.macroname, node.macro_post_space, node.nodeargd, node);
/* 000197 */ 		}) ();
/* 000197 */ 	});},
/* 000204 */ 	get node_standard_process_environment () {return __get__ (this, function (self, node) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000205 */ 		return (function () {
/* 000205 */ 			var __accu0__ = self;
/* 000205 */ 			return __call__ (__accu0__.recompose_environment_call, __accu0__, node.environmentname, node.nodeargd, node.nodelist, node);
/* 000205 */ 		}) ();
/* 000205 */ 	});},
/* 000212 */ 	get node_standard_process_specials () {return __get__ (this, function (self, node) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		return (function () {
/* 000213 */ 			var __accu0__ = self;
/* 000213 */ 			return __call__ (__accu0__.recompose_specials_call, __accu0__, node.specials_chars, node.nodeargd, node);
/* 000213 */ 		}) ();
/* 000213 */ 	});},
/* 000219 */ 	get node_standard_process_math () {return __get__ (this, function (self, node) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		return (function () {
/* 000220 */ 			var __accu0__ = self;
/* 000220 */ 			return __call__ (__accu0__.recompose_math_content, __accu0__, node.delimiters, node.nodelist, node);
/* 000220 */ 		}) ();
/* 000220 */ 	});},
/* 000226 */ 	get node_standard_process_list () {return __get__ (this, function (self, nodelist) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000227 */ 		return (function () {
/* 000227 */ 			var __accu0__ = self;
/* 000227 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, nodelist.nodelist, nodelist);
/* 000227 */ 		}) ();
/* 000227 */ 	});},
/* 000232 */ 	get node_standard_process_parsed_arguments () {return __get__ (this, function (self, parsed_arguments) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		return (function () {
/* 000233 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.recompose_parsed_arguments, __accu0__, parsed_arguments);
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000239 */ 	get visit () {return __get__ (this, function (self, node) {
/* 000239 */ 		var kwargs = dict ();
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 				delete kwargs.__kwargtrans__;
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		return (function () {
/* 000240 */ 			var __accu0__ = self;
/* 000240 */ 			return __call__ (__accu0__.recompose_unknown, __accu0__, node);
/* 000240 */ 		}) ();
/* 000240 */ 	});}
/* 000240 */ });
/* 000006 */ 
//# sourceMappingURL=pylatexenc.latexnodes._latex_recomposer.map