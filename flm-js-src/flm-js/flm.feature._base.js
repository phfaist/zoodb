/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:22
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000006 */ import {Mapping, Sequence, Set, Type, TypeDictWithLatexContextDefinitions, TypeNodeId} from './flm._typing_helpers.js';
/* 000006 */ export {TypeNodeId, TypeDictWithLatexContextDefinitions, Set, Sequence, Mapping, Type};
/* 000001 */ var __name__ = 'flm.feature._base';
/* 000011 */ export var FeatureDocumentManagerBase =  __class__ ('FeatureDocumentManagerBase', [object], {
/* 000011 */ 	__module__: __name__,
/* 000037 */ 	get __init__ () {return __get__ (this, function (self, feature, doc) {
/* 000037 */ 		var kwargs = dict ();
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'feature': var feature = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 				delete kwargs.__kwargtrans__;
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		__call__ (__call__ (__super__, null, FeatureDocumentManagerBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000039 */ 		self.feature = feature;
/* 000040 */ 		self.feature_name = self.feature.feature_name;
/* 000041 */ 		self.doc = doc;
/* 000042 */ 		self.RenderManager = self.feature.RenderManager;
/* 000042 */ 	});},
/* 000044 */ 	get initialize () {return __get__ (this, function (self) {
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000051 */ 		// pass;
/* 000051 */ 	});},
/* 000053 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000065 */ 		return (function () {
/* 000065 */ 			var __accu0__ = self.feature;
/* 000065 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000065 */ 		}) ();
/* 000065 */ 	});}
/* 000065 */ });
/* 000068 */ export var FeatureRenderManagerBase =  __class__ ('FeatureRenderManagerBase', [object], {
/* 000068 */ 	__module__: __name__,
/* 000102 */ 	get __init__ () {return __get__ (this, function (self, feature_document_manager, render_context) {
/* 000102 */ 		var kwargs = dict ();
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'feature_document_manager': var feature_document_manager = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 				delete kwargs.__kwargtrans__;
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000103 */ 		__call__ (__call__ (__super__, null, FeatureRenderManagerBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000104 */ 		self.feature_document_manager = feature_document_manager;
/* 000105 */ 		self.feature = self.feature_document_manager.feature;
/* 000106 */ 		self.feature_name = self.feature.feature_name;
/* 000107 */ 		self.render_context = render_context;
/* 000107 */ 	});},
/* 000109 */ 	get initialize () {return __get__ (this, function (self) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000118 */ 		// pass;
/* 000118 */ 	});},
/* 000120 */ 	get process () {return __get__ (this, function (self, first_pass_value) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'first_pass_value': var first_pass_value = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000128 */ 		// pass;
/* 000128 */ 	});},
/* 000130 */ 	get postprocess () {return __get__ (this, function (self, final_value) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'final_value': var final_value = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000137 */ 		// pass;
/* 000137 */ 	});},
/* 000139 */ 	get get_node_id () {return __get__ (this, function (self, node) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000151 */ 		return (function () {
/* 000151 */ 			var __accu0__ = self.feature;
/* 000151 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000151 */ 		}) ();
/* 000151 */ 	});}
/* 000151 */ });
/* 000155 */ export var Feature =  __class__ ('Feature', [object], {
/* 000155 */ 	__module__: __name__,
/* 000160 */ 	feature_name: null,
/* 000165 */ 	feature_dependencies: null,
/* 000173 */ 	feature_optional_dependencies: null,
/* 000180 */ 	feature_default_config: dict ({}),
/* 000194 */ 	DocumentManager: FeatureDocumentManagerBase,
/* 000206 */ 	RenderManager: FeatureRenderManagerBase,
/* 000220 */ 	feature_title: null,
/* 000228 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000241 */ 		return dict ({});
/* 000241 */ 	});},
/* 000247 */ 	get get_node_id () {return __getcm__ (this, function (cls, node) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000260 */ 		if (__t__ (__call__ (isinstance, null, node, tuple))) {
/* 000263 */ 			return node;
/* 000263 */ 		}
/* 000264 */ 		return node._flm_node_id;
/* 000264 */ 	});}
/* 000264 */ });
/* 000270 */ export var SimpleLatexDefinitionsFeature =  __class__ ('SimpleLatexDefinitionsFeature', [Feature], {
/* 000270 */ 	__module__: __name__,
/* 000279 */ 	DocumentManager: null,
/* 000280 */ 	RenderManager: null,
/* 000282 */ 	latex_definitions: dict ({}),
/* 000289 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		return self.latex_definitions;
/* 000290 */ 	});}
/* 000290 */ });
/* 000006 */ 
//# sourceMappingURL=flm.feature._base.map