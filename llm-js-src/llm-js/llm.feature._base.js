/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:15:54
/* 000073 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'llm.feature._base';
/* 000008 */ export var Feature =  __class__ ('Feature', [object], {
/* 000008 */ 	__module__: __name__,
/* 000012 */ 	feature_name: null,
/* 000012 */ 	DocumentManager: __class__ ('DocumentManager', [object], {
/* 000012 */ 		__module__: __name__,
/* 000013 */ 		get __init__ () {return __get__ (this, function (self, feature, doc) {
/* 000013 */ 			var kwargs = dict ();
/* 000013 */ 			if (arguments.length) {
/* 000013 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000013 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000013 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000013 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000013 */ 						switch (__attrib0__) {
/* 000013 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 							case 'feature': var feature = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 							case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000013 */ 						}
/* 000013 */ 					}
/* 000013 */ 					delete kwargs.__kwargtrans__;
/* 000013 */ 				}
/* 000013 */ 			}
/* 000013 */ 			else {
/* 000013 */ 			}
/* 000014 */ 			__call__ (__call__ (__super__, null, Feature.DocumentManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000015 */ 			self.feature = feature;
/* 000016 */ 			self.feature_name = self.feature.feature_name;
/* 000017 */ 			self.doc = doc;
/* 000018 */ 			self.RenderManager = self.feature.RenderManager;
/* 000018 */ 		});},
/* 000020 */ 		get initialize () {return __get__ (this, function (self) {
/* 000020 */ 			if (arguments.length) {
/* 000020 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000020 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000020 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000020 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000020 */ 						switch (__attrib0__) {
/* 000020 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 						}
/* 000020 */ 					}
/* 000020 */ 				}
/* 000020 */ 			}
/* 000020 */ 			else {
/* 000020 */ 			}
/* 000021 */ 			// pass;
/* 000021 */ 		});},
/* 000023 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000023 */ 			if (arguments.length) {
/* 000023 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000023 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000023 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000023 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000023 */ 						switch (__attrib0__) {
/* 000023 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 						}
/* 000023 */ 					}
/* 000023 */ 				}
/* 000023 */ 			}
/* 000023 */ 			else {
/* 000023 */ 			}
/* 000024 */ 			return (function () {
/* 000024 */ 				var __accu0__ = self.feature;
/* 000024 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000024 */ 			}) ();
/* 000024 */ 		});}
/* 000026 */ 	}),
/* 000026 */ 	RenderManager: __class__ ('RenderManager', [object], {
/* 000026 */ 		__module__: __name__,
/* 000027 */ 		get __init__ () {return __get__ (this, function (self, feature_document_manager, render_context) {
/* 000027 */ 			var kwargs = dict ();
/* 000027 */ 			if (arguments.length) {
/* 000027 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000027 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000027 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000027 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000027 */ 						switch (__attrib0__) {
/* 000027 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 							case 'feature_document_manager': var feature_document_manager = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 							case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000027 */ 						}
/* 000027 */ 					}
/* 000027 */ 					delete kwargs.__kwargtrans__;
/* 000027 */ 				}
/* 000027 */ 			}
/* 000027 */ 			else {
/* 000027 */ 			}
/* 000028 */ 			__call__ (__call__ (__super__, null, Feature.RenderManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000029 */ 			self.feature_document_manager = feature_document_manager;
/* 000030 */ 			self.feature = self.feature_document_manager.feature;
/* 000031 */ 			self.feature_name = self.feature.feature_name;
/* 000032 */ 			self.render_context = render_context;
/* 000032 */ 		});},
/* 000034 */ 		get initialize () {return __get__ (this, function (self) {
/* 000034 */ 			if (arguments.length) {
/* 000034 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 						switch (__attrib0__) {
/* 000034 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						}
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 			else {
/* 000034 */ 			}
/* 000035 */ 			// pass;
/* 000035 */ 		});},
/* 000037 */ 		get process () {return __get__ (this, function (self, first_pass_value) {
/* 000037 */ 			if (arguments.length) {
/* 000037 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 						switch (__attrib0__) {
/* 000037 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 							case 'first_pass_value': var first_pass_value = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						}
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 			else {
/* 000037 */ 			}
/* 000038 */ 			// pass;
/* 000038 */ 		});},
/* 000040 */ 		get postprocess () {return __get__ (this, function (self, final_value) {
/* 000040 */ 			if (arguments.length) {
/* 000040 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 						switch (__attrib0__) {
/* 000040 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 							case 'final_value': var final_value = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						}
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 			else {
/* 000040 */ 			}
/* 000041 */ 			// pass;
/* 000041 */ 		});},
/* 000043 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000043 */ 			if (arguments.length) {
/* 000043 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 						switch (__attrib0__) {
/* 000043 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						}
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 			else {
/* 000043 */ 			}
/* 000044 */ 			return (function () {
/* 000044 */ 				var __accu0__ = self.feature;
/* 000044 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000044 */ 			}) ();
/* 000044 */ 		});}
/* 000044 */ 	}),
/* 000047 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000051 */ 		return dict ({});
/* 000051 */ 	});},
/* 000056 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000069 */ 		if (__t__ (__call__ (isinstance, null, node, tuple))) {
/* 000072 */ 			return node;
/* 000072 */ 		}
/* 000073 */ 		return node.node_id;
/* 000073 */ 	});}
/* 000073 */ });
/* 000073 */ 
//# sourceMappingURL=llm.feature._base.map