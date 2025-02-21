/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:01
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000010 */ import {LatexNodesLatexRecomposer} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LatexNodesLatexRecomposer};
/* 000001 */ var __name__ = 'flm.flmrecomposer._recomposer';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000015 */ export var FLMNodesFlmRecomposer =  __class__ ('FLMNodesFlmRecomposer', [LatexNodesLatexRecomposer], {
/* 000015 */ 	__module__: __name__,
/* 000024 */ 	recompose_specinfo_method: 'recompose_flm_text',
/* 000026 */ 	get recompose_flm_text () {return __get__ (this, function (self, node) {
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000031 */ 		return (function () {
/* 000031 */ 			var __accu0__ = self;
/* 000031 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000031 */ 		}) ();
/* 000031 */ 	});},
/* 000034 */ 	rx_escape_chars_text: null,
/* 000036 */ 	recompose_escape_chars_if_specials_disabled: false,
/* 000038 */ 	get escape_chars () {return __get__ (this, function (self, chars, parsing_state) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		if (__t__ (self.rx_escape_chars_text === null)) {
/* 000040 */ 			return chars;
/* 000040 */ 		}
/* 000041 */ 		if (__t__ (__t__ (!__t__ ((parsing_state.enable_specials))) && !__t__ ((self.recompose_escape_chars_if_specials_disabled)))) {
/* 000043 */ 			return chars;
/* 000043 */ 		}
/* 000044 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000045 */ 			return chars;
/* 000045 */ 		}
/* 000046 */ 		return (function () {
/* 000046 */ 			var __accu0__ = self.rx_escape_chars_text;
/* 000046 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000046 */ 				if (arguments.length) {
/* 000046 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 							switch (__attrib0__) {
/* 000046 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 							}
/* 000046 */ 						}
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 				else {
/* 000046 */ 				}
/* 000046 */ 				return __add__ ('\\', (function () {
/* 000046 */ 					var __accu1__ = m;
/* 000046 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000046 */ 				}) ());
/* 000046 */ 			}), chars);
/* 000046 */ 		}) ();
/* 000046 */ 	});},
/* 000049 */ 	get subrecompose () {return __get__ (this, function (self, node) {
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000057 */ 		return (function () {
/* 000057 */ 			var __accu0__ = node;
/* 000057 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 000057 */ 		}) ();
/* 000057 */ 	});},
/* 000062 */ 	get _attempt_node_specinfo_recompose () {return __get__ (this, function (self, node) {
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000064 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_specinfo')) && __call__ (hasattr, null, node.flm_specinfo, self.recompose_specinfo_method))) {
/* 000065 */ 			return __call__ (__call__ (getattr, null, node.flm_specinfo, self.recompose_specinfo_method), null, __kwargtrans__ (__mergekwargtrans__ ({node: node, recomposer: self}, kwargs)));
/* 000065 */ 		}
/* 000070 */ 		return false;
/* 000070 */ 	});},
/* 000073 */ 	get recompose_chars () {return __get__ (this, function (self, chars, n) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		if (__t__ (!__t__ ((chars)))) {
/* 000075 */ 			var chars = '';
/* 000075 */ 		}
/* 000076 */ 		var chars = __call__ (str, null, chars);
/* 000077 */ 		return (function () {
/* 000077 */ 			var __accu0__ = self;
/* 000077 */ 			return __call__ (__accu0__.escape_chars, __accu0__, chars, n.parsing_state);
/* 000077 */ 		}) ();
/* 000077 */ 	});},
/* 000080 */ 	get node_standard_process_macro () {return __get__ (this, function (self, node) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000081 */ 		var recomposed = (function () {
/* 000081 */ 			var __accu0__ = self;
/* 000081 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000081 */ 		}) ();
/* 000082 */ 		if (__t__ (recomposed !== false)) {
/* 000083 */ 			return recomposed;
/* 000083 */ 		}
/* 000084 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_macro'), null, self, node);
/* 000084 */ 	});},
/* 000086 */ 	get node_standard_process_environment () {return __get__ (this, function (self, node) {
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000087 */ 		var recomposed = (function () {
/* 000087 */ 			var __accu0__ = self;
/* 000087 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000087 */ 		}) ();
/* 000088 */ 		if (__t__ (recomposed !== false)) {
/* 000089 */ 			return recomposed;
/* 000089 */ 		}
/* 000090 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_environment'), null, self, node);
/* 000090 */ 	});},
/* 000092 */ 	get node_standard_process_specials () {return __get__ (this, function (self, node) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		var recomposed = (function () {
/* 000093 */ 			var __accu0__ = self;
/* 000093 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000093 */ 		}) ();
/* 000094 */ 		if (__t__ (recomposed !== false)) {
/* 000095 */ 			return recomposed;
/* 000095 */ 		}
/* 000096 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_specials'), null, self, node);
/* 000096 */ 	});},
/* 000098 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 000098 */ 		var kwargs = dict ();
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 				delete kwargs.__kwargtrans__;
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000099 */ 		var recomposed = (function () {
/* 000099 */ 			var __accu0__ = self;
/* 000099 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000099 */ 		}) ();
/* 000100 */ 		if (__t__ (recomposed !== false)) {
/* 000101 */ 			return recomposed;
/* 000101 */ 		}
/* 000102 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_unknown_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000102 */ 	});}
/* 000102 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmrecomposer._recomposer.map