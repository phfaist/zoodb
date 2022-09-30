/* 000001 */ // Transcrypt'ed from Python, 2022-09-30 23:10:29
/* 000011 */ var unique_object_id = {};
/* 000011 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000011 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000011 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000001 */ var __name__ = 'llm.feature._base';
/* 000012 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000018 */ export var Feature =  __class__ ('Feature', [object], {
/* 000018 */ 	__module__: __name__,
/* 000022 */ 	feature_name: null,
/* 000022 */ 	DocumentManager: __class__ ('DocumentManager', [object], {
/* 000022 */ 		__module__: __name__,
/* 000023 */ 		get __init__ () {return __get__ (this, function (self, feature, doc) {
/* 000023 */ 			var kwargs = dict ();
/* 000023 */ 			if (arguments.length) {
/* 000023 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000023 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000023 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000023 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000023 */ 						switch (__attrib0__) {
/* 000023 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 							case 'feature': var feature = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 							case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000023 */ 						}
/* 000023 */ 					}
/* 000023 */ 					delete kwargs.__kwargtrans__;
/* 000023 */ 				}
/* 000023 */ 			}
/* 000023 */ 			else {
/* 000023 */ 			}
/* 000024 */ 			__call__ (__call__ (__super__, null, Feature.DocumentManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000025 */ 			self.feature = feature;
/* 000026 */ 			self.feature_name = self.feature.feature_name;
/* 000027 */ 			self.doc = doc;
/* 000028 */ 			self.RenderManager = self.feature.RenderManager;
/* 000028 */ 		});},
/* 000030 */ 		get initialize () {return __get__ (this, function (self) {
/* 000030 */ 			if (arguments.length) {
/* 000030 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 						switch (__attrib0__) {
/* 000030 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						}
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 			else {
/* 000030 */ 			}
/* 000031 */ 			// pass;
/* 000031 */ 		});},
/* 000033 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000033 */ 			if (arguments.length) {
/* 000033 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 						switch (__attrib0__) {
/* 000033 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						}
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 			else {
/* 000033 */ 			}
/* 000034 */ 			return (function () {
/* 000034 */ 				var __accu0__ = self.feature;
/* 000034 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000034 */ 			}) ();
/* 000034 */ 		});}
/* 000036 */ 	}),
/* 000036 */ 	RenderManager: __class__ ('RenderManager', [object], {
/* 000036 */ 		__module__: __name__,
/* 000037 */ 		get __init__ () {return __get__ (this, function (self, feature_document_manager, render_context) {
/* 000037 */ 			var kwargs = dict ();
/* 000037 */ 			if (arguments.length) {
/* 000037 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 						switch (__attrib0__) {
/* 000037 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 							case 'feature_document_manager': var feature_document_manager = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 							case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000037 */ 						}
/* 000037 */ 					}
/* 000037 */ 					delete kwargs.__kwargtrans__;
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 			else {
/* 000037 */ 			}
/* 000038 */ 			__call__ (__call__ (__super__, null, Feature.RenderManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000039 */ 			self.feature_document_manager = feature_document_manager;
/* 000040 */ 			self.feature = self.feature_document_manager.feature;
/* 000041 */ 			self.feature_name = self.feature.feature_name;
/* 000042 */ 			self.render_context = render_context;
/* 000042 */ 		});},
/* 000044 */ 		get initialize () {return __get__ (this, function (self) {
/* 000044 */ 			if (arguments.length) {
/* 000044 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 						switch (__attrib0__) {
/* 000044 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						}
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 			else {
/* 000044 */ 			}
/* 000045 */ 			// pass;
/* 000045 */ 		});},
/* 000047 */ 		get process () {return __get__ (this, function (self, first_pass_value) {
/* 000047 */ 			if (arguments.length) {
/* 000047 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 						switch (__attrib0__) {
/* 000047 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 							case 'first_pass_value': var first_pass_value = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						}
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 			else {
/* 000047 */ 			}
/* 000048 */ 			// pass;
/* 000048 */ 		});},
/* 000050 */ 		get postprocess () {return __get__ (this, function (self, final_value) {
/* 000050 */ 			if (arguments.length) {
/* 000050 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 						switch (__attrib0__) {
/* 000050 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 							case 'final_value': var final_value = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						}
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 			else {
/* 000050 */ 			}
/* 000051 */ 			// pass;
/* 000051 */ 		});},
/* 000053 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000053 */ 			if (arguments.length) {
/* 000053 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 						switch (__attrib0__) {
/* 000053 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						}
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 			else {
/* 000053 */ 			}
/* 000054 */ 			return (function () {
/* 000054 */ 				var __accu0__ = self.feature;
/* 000054 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000054 */ 			}) ();
/* 000054 */ 		});}
/* 000054 */ 	}),
/* 000057 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000061 */ 		return dict ({});
/* 000061 */ 	});},
/* 000066 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000079 */ 		if (__t__ (__call__ (isinstance, null, node, tuple))) {
/* 000082 */ 			return node;
/* 000082 */ 		}
/* 000083 */ 		return __call__ (fn_unique_object_id, null, node);
/* 000083 */ 	});}
/* 000083 */ });
/* 000011 */ 
//# sourceMappingURL=llm.feature._base.map