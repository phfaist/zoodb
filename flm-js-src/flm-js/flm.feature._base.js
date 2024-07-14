/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:41
/* 000179 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'flm.feature._base';
/* 000008 */ export var Feature =  __class__ ('Feature', [object], {
/* 000008 */ 	__module__: __name__,
/* 000016 */ 	feature_name: null,
/* 000021 */ 	feature_dependencies: null,
/* 000029 */ 	feature_optional_dependencies: null,
/* 000051 */ 	feature_default_config: dict ({}),
/* 000051 */ 	DocumentManager: __class__ ('DocumentManager', [object], {
/* 000051 */ 		__module__: __name__,
/* 000061 */ 		get __init__ () {return __get__ (this, function (self, feature, doc) {
/* 000061 */ 			var kwargs = dict ();
/* 000061 */ 			if (arguments.length) {
/* 000061 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 						switch (__attrib0__) {
/* 000061 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 							case 'feature': var feature = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 							case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000061 */ 						}
/* 000061 */ 					}
/* 000061 */ 					delete kwargs.__kwargtrans__;
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 			else {
/* 000061 */ 			}
/* 000062 */ 			__call__ (__call__ (__super__, null, Feature.DocumentManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000063 */ 			self.feature = feature;
/* 000064 */ 			self.feature_name = self.feature.feature_name;
/* 000065 */ 			self.doc = doc;
/* 000066 */ 			self.RenderManager = self.feature.RenderManager;
/* 000066 */ 		});},
/* 000068 */ 		get initialize () {return __get__ (this, function (self) {
/* 000068 */ 			if (arguments.length) {
/* 000068 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 						switch (__attrib0__) {
/* 000068 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						}
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 			else {
/* 000068 */ 			}
/* 000073 */ 			// pass;
/* 000073 */ 		});},
/* 000075 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000075 */ 			if (arguments.length) {
/* 000075 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 						switch (__attrib0__) {
/* 000075 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						}
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 			else {
/* 000075 */ 			}
/* 000079 */ 			return (function () {
/* 000079 */ 				var __accu0__ = self.feature;
/* 000079 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000079 */ 			}) ();
/* 000079 */ 		});}
/* 000083 */ 	}),
/* 000083 */ 	RenderManager: __class__ ('RenderManager', [object], {
/* 000083 */ 		__module__: __name__,
/* 000095 */ 		get __init__ () {return __get__ (this, function (self, feature_document_manager, render_context) {
/* 000095 */ 			var kwargs = dict ();
/* 000095 */ 			if (arguments.length) {
/* 000095 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 						switch (__attrib0__) {
/* 000095 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 							case 'feature_document_manager': var feature_document_manager = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 							case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000095 */ 						}
/* 000095 */ 					}
/* 000095 */ 					delete kwargs.__kwargtrans__;
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 			else {
/* 000095 */ 			}
/* 000096 */ 			__call__ (__call__ (__super__, null, Feature.RenderManager, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000097 */ 			self.feature_document_manager = feature_document_manager;
/* 000098 */ 			self.feature = self.feature_document_manager.feature;
/* 000099 */ 			self.feature_name = self.feature.feature_name;
/* 000100 */ 			self.render_context = render_context;
/* 000100 */ 		});},
/* 000102 */ 		get initialize () {return __get__ (this, function (self) {
/* 000102 */ 			if (arguments.length) {
/* 000102 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 						switch (__attrib0__) {
/* 000102 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						}
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 			else {
/* 000102 */ 			}
/* 000111 */ 			// pass;
/* 000111 */ 		});},
/* 000113 */ 		get process () {return __get__ (this, function (self, first_pass_value) {
/* 000113 */ 			if (arguments.length) {
/* 000113 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 						switch (__attrib0__) {
/* 000113 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 							case 'first_pass_value': var first_pass_value = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						}
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 			else {
/* 000113 */ 			}
/* 000114 */ 			// pass;
/* 000114 */ 		});},
/* 000116 */ 		get postprocess () {return __get__ (this, function (self, final_value) {
/* 000116 */ 			if (arguments.length) {
/* 000116 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 						switch (__attrib0__) {
/* 000116 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 							case 'final_value': var final_value = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						}
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 			else {
/* 000116 */ 			}
/* 000117 */ 			// pass;
/* 000117 */ 		});},
/* 000119 */ 		get get_node_id () {return __get__ (this, function (self, node) {
/* 000119 */ 			if (arguments.length) {
/* 000119 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 						switch (__attrib0__) {
/* 000119 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						}
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 			else {
/* 000119 */ 			}
/* 000123 */ 			return (function () {
/* 000123 */ 				var __accu0__ = self.feature;
/* 000123 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000123 */ 			}) ();
/* 000123 */ 		});}
/* 000123 */ 	}),
/* 000128 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000133 */ 		return dict ({});
/* 000133 */ 	});},
/* 000138 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000151 */ 		if (__t__ (__call__ (isinstance, null, node, tuple))) {
/* 000154 */ 			return node;
/* 000154 */ 		}
/* 000155 */ 		return node._flm_node_id;
/* 000155 */ 	});}
/* 000155 */ });
/* 000161 */ export var SimpleLatexDefinitionsFeature =  __class__ ('SimpleLatexDefinitionsFeature', [Feature], {
/* 000161 */ 	__module__: __name__,
/* 000168 */ 	DocumentManager: null,
/* 000169 */ 	RenderManager: null,
/* 000171 */ 	latex_definitions: dict ({}),
/* 000178 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000179 */ 		return self.latex_definitions;
/* 000179 */ 	});}
/* 000179 */ });
/* 000179 */ 
//# sourceMappingURL=flm.feature._base.map