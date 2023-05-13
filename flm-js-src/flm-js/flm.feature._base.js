/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:29
/* 000136 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'flm.feature._base';
/* 000008 */ export var Feature =  __class__ ('Feature', [object], {
/* 000008 */ 	__module__: __name__,
/* 000012 */ 	feature_name: null,
/* 000017 */ 	feature_dependencies: null,
/* 000025 */ 	feature_optional_dependencies: null,
/* 000047 */ 	feature_default_config: dict ({}),
/* 000047 */ 	DocumentManager: __class__ ('DocumentManager', [object], {
/* 000047 */ 		__module__: __name__,
/* 000048 */ 		get __init__ () {return __get__ (this, function (self, feature, doc) {
/* 000048 */ 			var kwargs = dict ();
/* 000048 */ 			if (arguments.length) {
/* 000048 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 						switch (__attrib0__) {
/* 000048 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 							case 'feature': var feature = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 							case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000048 */ 						}
/* 000048 */ 					}
/* 000048 */ 					delete kwargs.__kwargtrans__;
/* 000048 */ 				}
/* 000048 */ 			}
/* 000048 */ 			else {
/* 000048 */ 			}
/* 000049 */ 			__call__ (__call__ (__super__, null, Feature.DocumentManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000050 */ 			self.feature = feature;
/* 000051 */ 			self.feature_name = self.feature.feature_name;
/* 000052 */ 			self.doc = doc;
/* 000053 */ 			self.RenderManager = self.feature.RenderManager;
/* 000053 */ 		});},
/* 000055 */ 		get initialize () {return __get__ (this, function (self) {
/* 000055 */ 			if (arguments.length) {
/* 000055 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 						switch (__attrib0__) {
/* 000055 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						}
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 			else {
/* 000055 */ 			}
/* 000056 */ 			// pass;
/* 000056 */ 		});},
/* 000058 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000058 */ 			if (arguments.length) {
/* 000058 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 						switch (__attrib0__) {
/* 000058 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						}
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 			else {
/* 000058 */ 			}
/* 000059 */ 			return (function () {
/* 000059 */ 				var __accu0__ = self.feature;
/* 000059 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000059 */ 			}) ();
/* 000059 */ 		});}
/* 000063 */ 	}),
/* 000063 */ 	RenderManager: __class__ ('RenderManager', [object], {
/* 000063 */ 		__module__: __name__,
/* 000064 */ 		get __init__ () {return __get__ (this, function (self, feature_document_manager, render_context) {
/* 000064 */ 			var kwargs = dict ();
/* 000064 */ 			if (arguments.length) {
/* 000064 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 						switch (__attrib0__) {
/* 000064 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 							case 'feature_document_manager': var feature_document_manager = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 							case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000064 */ 						}
/* 000064 */ 					}
/* 000064 */ 					delete kwargs.__kwargtrans__;
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 			else {
/* 000064 */ 			}
/* 000065 */ 			__call__ (__call__ (__super__, null, Feature.RenderManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000066 */ 			self.feature_document_manager = feature_document_manager;
/* 000067 */ 			self.feature = self.feature_document_manager.feature;
/* 000068 */ 			self.feature_name = self.feature.feature_name;
/* 000069 */ 			self.render_context = render_context;
/* 000069 */ 		});},
/* 000071 */ 		get initialize () {return __get__ (this, function (self) {
/* 000071 */ 			if (arguments.length) {
/* 000071 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 						switch (__attrib0__) {
/* 000071 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						}
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 			else {
/* 000071 */ 			}
/* 000078 */ 			// pass;
/* 000078 */ 		});},
/* 000080 */ 		get process () {return __get__ (this, function (self, first_pass_value) {
/* 000080 */ 			if (arguments.length) {
/* 000080 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 						switch (__attrib0__) {
/* 000080 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 							case 'first_pass_value': var first_pass_value = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						}
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 			else {
/* 000080 */ 			}
/* 000081 */ 			// pass;
/* 000081 */ 		});},
/* 000083 */ 		get postprocess () {return __get__ (this, function (self, final_value) {
/* 000083 */ 			if (arguments.length) {
/* 000083 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 						switch (__attrib0__) {
/* 000083 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 							case 'final_value': var final_value = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						}
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 			else {
/* 000083 */ 			}
/* 000084 */ 			// pass;
/* 000084 */ 		});},
/* 000086 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000086 */ 			if (arguments.length) {
/* 000086 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 						switch (__attrib0__) {
/* 000086 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						}
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 			else {
/* 000086 */ 			}
/* 000087 */ 			return (function () {
/* 000087 */ 				var __accu0__ = self.feature;
/* 000087 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000087 */ 			}) ();
/* 000087 */ 		});}
/* 000087 */ 	}),
/* 000092 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000097 */ 		return dict ({});
/* 000097 */ 	});},
/* 000102 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000115 */ 		if (__t__ (__call__ (isinstance, null, node, tuple))) {
/* 000118 */ 			return node;
/* 000118 */ 		}
/* 000119 */ 		return node.node_id;
/* 000119 */ 	});}
/* 000119 */ });
/* 000123 */ export var SimpleLatexDefinitionsFeature =  __class__ ('SimpleLatexDefinitionsFeature', [Feature], {
/* 000123 */ 	__module__: __name__,
/* 000125 */ 	DocumentManager: null,
/* 000126 */ 	RenderManager: null,
/* 000128 */ 	latex_definitions: dict ({}),
/* 000135 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		return self.latex_definitions;
/* 000136 */ 	});}
/* 000136 */ });
/* 000136 */ 
//# sourceMappingURL=flm.feature._base.map