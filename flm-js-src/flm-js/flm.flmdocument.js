/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 09:47:57
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000009 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FLMRenderContext};
/* 000001 */ var __name__ = 'flm.flmdocument';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000012 */ export var FLMDocumentRenderContext =  __class__ ('FLMDocumentRenderContext', [FLMRenderContext], {
/* 000012 */ 	__module__: __name__,
/* 000013 */ 	get __init__ () {return __get__ (this, function (self, doc, fragment_renderer, feature_document_managers) {
/* 000013 */ 		var kwargs = dict ();
/* 000013 */ 		if (arguments.length) {
/* 000013 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000013 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000013 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000013 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000013 */ 					switch (__attrib0__) {
/* 000013 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 						case 'feature_document_managers': var feature_document_managers = __allkwargs0__ [__attrib0__]; break;
/* 000013 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000013 */ 					}
/* 000013 */ 				}
/* 000013 */ 				delete kwargs.__kwargtrans__;
/* 000013 */ 			}
/* 000013 */ 		}
/* 000013 */ 		else {
/* 000013 */ 		}
/* 000014 */ 		__call__ (__call__ (__super__, null, FLMDocumentRenderContext, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({doc: doc, fragment_renderer: fragment_renderer}, kwargs)));
/* 000015 */ 		self.feature_document_managers = feature_document_managers;
/* 000016 */ 		self.feature_render_managers = (function () {
/* 000016 */ 			var __accu0__ = [];
/* 000016 */ 			var __iterable0__ = self.feature_document_managers;
/* 000016 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000020 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000020 */ 				var feature_name = __left0__ [0];
/* 000020 */ 				var fdm = __left0__ [1];
/* 000020 */ 				(function () {
/* 000020 */ 					var __accu1__ = __accu0__;
/* 000017 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__t__ (fdm !== null) && fdm.RenderManager !== null) ? tuple ([feature_name, (function () {
/* 000017 */ 						var __accu2__ = fdm;
/* 000017 */ 						return __call__ (__accu2__.RenderManager, __accu2__, fdm, self);
/* 000017 */ 					}) ()]) : tuple ([feature_name, null])));
/* 000017 */ 				}) ();
/* 000017 */ 			}
/* 000017 */ 			return __accu0__;
/* 000017 */ 		}) ();
/* 000022 */ 		self.feature_render_managers_by_name = __call__ (dict, null, self.feature_render_managers);
/* 000026 */ 		self.is_first_pass = true;
/* 000027 */ 		self._delayed_render_nodes = dict ({});
/* 000028 */ 		self._delayed_render_content = dict ({});
/* 000037 */ 		self.data = dict ({});
/* 000037 */ 	});},
/* 000040 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000040 */ 		if (arguments.length) {
/* 000040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 					switch (__attrib0__) {
/* 000040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 		else {
/* 000040 */ 		}
/* 000041 */ 		return __in__ (feature_name, self.feature_render_managers_by_name);
/* 000041 */ 	});},
/* 000043 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000044 */ 		return __getitem__ (self.feature_render_managers_by_name, feature_name);
/* 000044 */ 	});},
/* 000046 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000048 */ 		var key = node.node_id;
/* 000049 */ 		__setitem__ (self._delayed_render_nodes, key, node);
/* 000050 */ 		return key;
/* 000050 */ 	});},
/* 000052 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000053 */ 		var key = node.node_id;
/* 000054 */ 		return __getitem__ (self._delayed_render_content, key);
/* 000054 */ 	});},
/* 000056 */ 	get make_standalone_fragment () {return __get__ (this, function (self, flm_text) {
/* 000056 */ 		var kwargs = dict ();
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 				delete kwargs.__kwargtrans__;
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000057 */ 		return (function () {
/* 000057 */ 			var __accu0__ = self.doc.environment;
/* 000057 */ 			return __call__ (__accu0__.make_fragment, __accu0__, flm_text, __kwargtrans__ (__mergekwargtrans__ ({standalone_mode: true}, kwargs)));
/* 000057 */ 		}) ();
/* 000057 */ 	});}
/* 000057 */ });
/* 000066 */ export var FLMDocument =  __class__ ('FLMDocument', [object], {
/* 000066 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000068 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var enable_features = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var feature_document_options = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var metadata = null;
/* 000068 */ 		};
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000076 */ 		__call__ (__call__ (__super__, null, FLMDocument, '__init__'), null, self);
/* 000079 */ 		self.environment = environment;
/* 000080 */ 		self.render_callback = render_callback;
/* 000083 */ 		self.metadata = metadata;
/* 000086 */ 		self.features = (function () {
/* 000086 */ 			var __accu0__ = self.environment;
/* 000086 */ 			return __call__ (__accu0__.get_features_selection, __accu0__, enable_features);
/* 000086 */ 		}) ();
/* 000090 */ 		if (__t__ (feature_document_options === null)) {
/* 000091 */ 			var feature_document_options = dict ({});
/* 000091 */ 		}
/* 000092 */ 		self.feature_document_options = __call__ (dict, null, feature_document_options);
/* 000094 */ 		self.feature_document_managers = (function () {
/* 000094 */ 			var __accu0__ = [];
/* 000094 */ 			var __iterable0__ = self.features;
/* 000094 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000098 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000098 */ 				(function () {
/* 000098 */ 					var __accu1__ = __accu0__;
/* 000095 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000095 */ 						var __accu2__ = f;
/* 000095 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000095 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000095 */ 			return __accu0__;
/* 000095 */ 		}) ();
/* 000100 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000100 */ 	});},
/* 000105 */ 	get initialize () {return __get__ (this, function (self) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000108 */ 		var __iterable0__ = self.feature_document_managers;
/* 000108 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 			var feature_name = __left0__ [0];
/* 000108 */ 			var feature_document_manager = __left0__ [1];
/* 000109 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000110 */ 				var feature_options = (function () {
/* 000110 */ 					var __accu0__ = self.feature_document_options;
/* 000110 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000110 */ 				}) ();
/* 000111 */ 				(function () {
/* 000111 */ 					var __accu0__ = feature_document_manager;
/* 000111 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000111 */ 				}) ();
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 	});},
/* 000113 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000114 */ 	});},
/* 000116 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000117 */ 	});},
/* 000119 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000119 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000119 */ 			var feature_render_options = null;
/* 000119 */ 		};
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000121 */ 		var render_context = __call__ (FLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000127 */ 		if (__t__ (feature_render_options === null)) {
/* 000128 */ 			var feature_render_options = dict ({});
/* 000128 */ 		}
/* 000131 */ 		var feature_render_options = __call__ (dict, null, feature_render_options);
/* 000133 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000133 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000133 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000133 */ 			var feature_name = __left0__ [0];
/* 000133 */ 			var feature_render_manager = __left0__ [1];
/* 000134 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000135 */ 				var feature_options = (function () {
/* 000135 */ 					var __accu0__ = feature_render_options;
/* 000135 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, __call__ (dict, null));
/* 000135 */ 				}) ();
/* 000136 */ 				(function () {
/* 000136 */ 					var __accu0__ = feature_render_manager;
/* 000136 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000136 */ 				}) ();
/* 000136 */ 			}
/* 000136 */ 		}
/* 000137 */ 		return render_context;
/* 000137 */ 	});},
/* 000139 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000139 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000139 */ 			var feature_render_options = null;
/* 000139 */ 		};
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000145 */ 		var render_context = (function () {
/* 000145 */ 			var __accu0__ = self;
/* 000145 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000145 */ 		}) ();
/* 000150 */ 		(function () {
/* 000150 */ 			var __accu0__ = fragment_renderer;
/* 000150 */ 			return __call__ (__accu0__.document_render_start, __accu0__, render_context);
/* 000150 */ 		}) ();
/* 000153 */ 		var value = (function () {
/* 000153 */ 			var __accu0__ = self;
/* 000153 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000153 */ 		}) ();
/* 000154 */ 		if (__t__ (value === null)) {
/* 000155 */ 			(function () {
/* 000155 */ 				var __accu0__ = logger;
/* 000155 */ 				return __call__ (__accu0__.warning, __accu0__, 'The FLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000155 */ 			}) ();
/* 000155 */ 		}
/* 000158 */ 		// pass;
/* 000165 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000165 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000165 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000165 */ 			var feature_name = __left0__ [0];
/* 000165 */ 			var feature_render_manager = __left0__ [1];
/* 000166 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000167 */ 				(function () {
/* 000167 */ 					var __accu0__ = feature_render_manager;
/* 000167 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000167 */ 				}) ();
/* 000167 */ 			}
/* 000167 */ 		}
/* 000171 */ 		var __iterable0__ = (function () {
/* 000171 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000171 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000171 */ 		}) ();
/* 000171 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000171 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000171 */ 			var key = __left0__ [0];
/* 000171 */ 			var node = __left0__ [1];
/* 000176 */ 			__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000176 */ 				var __accu0__ = node.flm_specinfo;
/* 000176 */ 				return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000176 */ 			}) ());
/* 000176 */ 		}
/* 000180 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000187 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000187 */ 				if (arguments.length) {
/* 000187 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 							switch (__attrib0__) {
/* 000187 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 							}
/* 000187 */ 						}
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 				else {
/* 000187 */ 				}
/* 000188 */ 				return (function () {
/* 000188 */ 					var __accu0__ = fragment_renderer;
/* 000188 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000188 */ 				}) ();
/* 000188 */ 			});
/* 000193 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000195 */ 				var value = (function () {
/* 000195 */ 					var __accu0__ = [];
/* 000197 */ 					var __iterable0__ = (function () {
/* 000197 */ 						var __accu1__ = value;
/* 000197 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000197 */ 					}) ();
/* 000197 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000197 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000197 */ 						var k = __left0__ [0];
/* 000197 */ 						var s = __left0__ [1];
/* 000197 */ 						(function () {
/* 000197 */ 							var __accu1__ = __accu0__;
/* 000196 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000196 */ 						}) ();
/* 000196 */ 					}
/* 000196 */ 					return dict (__accu0__);
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000199 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000200 */ 				var value = (function () {
/* 000200 */ 					var __accu0__ = [];
/* 000200 */ 					var __iterable0__ = value;
/* 000200 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 						(function () {
/* 000200 */ 							var __accu1__ = __accu0__;
/* 000200 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000200 */ 						}) ();
/* 000200 */ 					}
/* 000200 */ 					return __accu0__;
/* 000200 */ 				}) ();
/* 000200 */ 			}
/* 000201 */ 			else {
/* 000202 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000202 */ 			}
/* 000202 */ 		}
/* 000203 */ 		else {
/* 000207 */ 			(function () {
/* 000207 */ 				var __accu0__ = render_context;
/* 000207 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000207 */ 			}) ();
/* 000208 */ 			var value = (function () {
/* 000208 */ 				var __accu0__ = self;
/* 000208 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000208 */ 			}) ();
/* 000208 */ 		}
/* 000212 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000212 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000212 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000212 */ 			var feature_name = __left0__ [0];
/* 000212 */ 			var feature_render_manager = __left0__ [1];
/* 000213 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000214 */ 				(function () {
/* 000214 */ 					var __accu0__ = feature_render_manager;
/* 000214 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000214 */ 				}) ();
/* 000214 */ 			}
/* 000214 */ 		}
/* 000216 */ 		(function () {
/* 000216 */ 			var __accu0__ = fragment_renderer;
/* 000216 */ 			return __call__ (__accu0__.document_render_finish, __accu0__, render_context);
/* 000216 */ 		}) ();
/* 000218 */ 		// pass;
/* 000222 */ 		return tuple ([value, render_context]);
/* 000222 */ 	});}
/* 000222 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmdocument.map