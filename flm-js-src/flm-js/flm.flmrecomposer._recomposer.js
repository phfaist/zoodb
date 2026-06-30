/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:21
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000031 */ 	recompose_specinfo_method: 'recompose_flm_text',
/* 000033 */ 	get recompose_flm_text () {return __get__ (this, function (self, node) {
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000044 */ 		return (function () {
/* 000044 */ 			var __accu0__ = self;
/* 000044 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000044 */ 		}) ();
/* 000044 */ 	});},
/* 000047 */ 	rx_escape_chars_text: null,
/* 000049 */ 	recompose_escape_chars_if_specials_disabled: false,
/* 000051 */ 	get escape_chars () {return __get__ (this, function (self, chars, parsing_state) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000069 */ 		if (__t__ (self.rx_escape_chars_text === null)) {
/* 000070 */ 			return chars;
/* 000070 */ 		}
/* 000071 */ 		if (__t__ (__t__ (!__t__ ((parsing_state.enable_specials))) && !__t__ ((self.recompose_escape_chars_if_specials_disabled)))) {
/* 000073 */ 			return chars;
/* 000073 */ 		}
/* 000074 */ 		if (__t__ (parsing_state.in_math_mode)) {
/* 000075 */ 			return chars;
/* 000075 */ 		}
/* 000076 */ 		return (function () {
/* 000076 */ 			var __accu0__ = self.rx_escape_chars_text;
/* 000076 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000076 */ 				if (arguments.length) {
/* 000076 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 							switch (__attrib0__) {
/* 000076 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 							}
/* 000076 */ 						}
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 				else {
/* 000076 */ 				}
/* 000076 */ 				return __add__ ('\\', (function () {
/* 000076 */ 					var __accu1__ = m;
/* 000076 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000076 */ 				}) ());
/* 000076 */ 			}), chars);
/* 000076 */ 		}) ();
/* 000076 */ 	});},
/* 000079 */ 	get subrecompose () {return __get__ (this, function (self, node) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000091 */ 		return (function () {
/* 000091 */ 			var __accu0__ = node;
/* 000091 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 000091 */ 		}) ();
/* 000091 */ 	});},
/* 000096 */ 	get _attempt_node_specinfo_recompose () {return __get__ (this, function (self, node) {
/* 000096 */ 		var kwargs = dict ();
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 				delete kwargs.__kwargtrans__;
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000098 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_specinfo')) && __call__ (hasattr, null, node.flm_specinfo, self.recompose_specinfo_method))) {
/* 000099 */ 			return __call__ (__call__ (getattr, null, node.flm_specinfo, self.recompose_specinfo_method), null, __kwargtrans__ (__mergekwargtrans__ ({node: node, recomposer: self}, kwargs)));
/* 000099 */ 		}
/* 000104 */ 		return false;
/* 000104 */ 	});},
/* 000107 */ 	get recompose_chars () {return __get__ (this, function (self, chars, n) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000119 */ 		if (__t__ (!__t__ ((chars)))) {
/* 000120 */ 			var chars = '';
/* 000120 */ 		}
/* 000121 */ 		var chars = __call__ (str, null, chars);
/* 000122 */ 		return (function () {
/* 000122 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.escape_chars, __accu0__, chars, n.parsing_state);
/* 000122 */ 		}) ();
/* 000122 */ 	});},
/* 000125 */ 	get node_standard_process_macro () {return __get__ (this, function (self, node) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000136 */ 		var recomposed = (function () {
/* 000136 */ 			var __accu0__ = self;
/* 000136 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000136 */ 		}) ();
/* 000137 */ 		if (__t__ (recomposed !== false)) {
/* 000138 */ 			return recomposed;
/* 000138 */ 		}
/* 000139 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_macro'), null, self, node);
/* 000139 */ 	});},
/* 000141 */ 	get node_standard_process_environment () {return __get__ (this, function (self, node) {
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000152 */ 		var recomposed = (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000152 */ 		}) ();
/* 000153 */ 		if (__t__ (recomposed !== false)) {
/* 000154 */ 			return recomposed;
/* 000154 */ 		}
/* 000155 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_environment'), null, self, node);
/* 000155 */ 	});},
/* 000157 */ 	get node_standard_process_specials () {return __get__ (this, function (self, node) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000168 */ 		var recomposed = (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node);
/* 000168 */ 		}) ();
/* 000169 */ 		if (__t__ (recomposed !== false)) {
/* 000170 */ 			return recomposed;
/* 000170 */ 		}
/* 000171 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'node_standard_process_specials'), null, self, node);
/* 000171 */ 	});},
/* 000173 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 000173 */ 		var kwargs = dict ();
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 				delete kwargs.__kwargtrans__;
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000183 */ 		var recomposed = (function () {
/* 000183 */ 			var __accu0__ = self;
/* 000183 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000183 */ 		}) ();
/* 000184 */ 		if (__t__ (recomposed !== false)) {
/* 000185 */ 			return recomposed;
/* 000185 */ 		}
/* 000186 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_unknown_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000186 */ 	});}
/* 000186 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmrecomposer._recomposer.map