/* 000001 */ // Transcrypt'ed from Python, 2025-01-19 14:47:54
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
/* 000051 */ 	get _attempt_node_specinfo_recompose () {return __get__ (this, function (self, node) {
/* 000051 */ 		var kwargs = dict ();
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 				delete kwargs.__kwargtrans__;
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000053 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_specinfo')) && __call__ (hasattr, null, node.flm_specinfo, self.recompose_specinfo_method))) {
/* 000054 */ 			return __call__ (__call__ (getattr, null, node.flm_specinfo, self.recompose_specinfo_method), null, __kwargtrans__ (__mergekwargtrans__ ({node: node, recomposer: self}, kwargs)));
/* 000054 */ 		}
/* 000059 */ 		return false;
/* 000059 */ 	});},
/* 000062 */ 	get recompose_chars () {return __get__ (this, function (self, chars, n) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		if (__t__ (!__t__ ((chars)))) {
/* 000064 */ 			var chars = '';
/* 000064 */ 		}
/* 000065 */ 		var chars = __call__ (str, null, chars);
/* 000066 */ 		return (function () {
/* 000066 */ 			var __accu0__ = self;
/* 000066 */ 			return __call__ (__accu0__.escape_chars, __accu0__, chars, n.parsing_state);
/* 000066 */ 		}) ();
/* 000066 */ 	});},
/* 000069 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 000069 */ 		var kwargs = dict ();
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 				delete kwargs.__kwargtrans__;
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000070 */ 		var recomposed = (function () {
/* 000070 */ 			var __accu0__ = self;
/* 000070 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000070 */ 		}) ();
/* 000071 */ 		if (__t__ (recomposed !== false)) {
/* 000072 */ 			return recomposed;
/* 000072 */ 		}
/* 000073 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_macro_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000073 */ 	});},
/* 000075 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 000075 */ 		var kwargs = dict ();
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 				delete kwargs.__kwargtrans__;
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000076 */ 		var recomposed = (function () {
/* 000076 */ 			var __accu0__ = self;
/* 000076 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000076 */ 		}) ();
/* 000077 */ 		if (__t__ (recomposed !== false)) {
/* 000078 */ 			return recomposed;
/* 000078 */ 		}
/* 000079 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_environment_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000079 */ 	});},
/* 000081 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 000081 */ 		var kwargs = dict ();
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 				delete kwargs.__kwargtrans__;
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		var recomposed = (function () {
/* 000082 */ 			var __accu0__ = self;
/* 000082 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000082 */ 		}) ();
/* 000083 */ 		if (__t__ (recomposed !== false)) {
/* 000084 */ 			return recomposed;
/* 000084 */ 		}
/* 000085 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_specials_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000085 */ 	});},
/* 000087 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 000087 */ 		var kwargs = dict ();
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 				delete kwargs.__kwargtrans__;
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000088 */ 		var recomposed = (function () {
/* 000088 */ 			var __accu0__ = self;
/* 000088 */ 			return __call__ (__accu0__._attempt_node_specinfo_recompose, __accu0__, node, __kwargtrans__ (kwargs));
/* 000088 */ 		}) ();
/* 000089 */ 		if (__t__ (recomposed !== false)) {
/* 000090 */ 			return recomposed;
/* 000090 */ 		}
/* 000091 */ 		return __call__ (__call__ (__super__, null, FLMNodesFlmRecomposer, 'visit_unknown_node'), null, self, node, __kwargtrans__ (kwargs));
/* 000091 */ 	});}
/* 000091 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmrecomposer._recomposer.map