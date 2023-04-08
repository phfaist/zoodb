/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:35
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000009 */ import {LLMRenderContext} from './llm.llmrendercontext.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMRenderContext};
/* 000001 */ var __name__ = 'llm.llmdocument';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000012 */ export var LLMDocumentRenderContext =  __class__ ('LLMDocumentRenderContext', [LLMRenderContext], {
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
/* 000014 */ 		__call__ (__call__ (__super__, null, LLMDocumentRenderContext, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({doc: doc, fragment_renderer: fragment_renderer}, kwargs)));
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
/* 000054 */ 	});}
/* 000054 */ });
/* 000064 */ export var LLMDocument =  __class__ ('LLMDocument', [object], {
/* 000064 */ 	__module__: __name__,
/* 000066 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000066 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var enable_features = null;
/* 000066 */ 		};
/* 000066 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var feature_document_options = null;
/* 000066 */ 		};
/* 000066 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var metadata = null;
/* 000066 */ 		};
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, LLMDocument, '__init__'), null, self);
/* 000077 */ 		self.environment = environment;
/* 000078 */ 		self.render_callback = render_callback;
/* 000081 */ 		self.metadata = metadata;
/* 000084 */ 		self.features = (function () {
/* 000084 */ 			var __accu0__ = self.environment;
/* 000084 */ 			return __call__ (__accu0__.get_features_selection, __accu0__, enable_features);
/* 000084 */ 		}) ();
/* 000088 */ 		if (__t__ (feature_document_options === null)) {
/* 000089 */ 			var feature_document_options = dict ({});
/* 000089 */ 		}
/* 000090 */ 		self.feature_document_options = __call__ (dict, null, feature_document_options);
/* 000092 */ 		self.feature_document_managers = (function () {
/* 000092 */ 			var __accu0__ = [];
/* 000092 */ 			var __iterable0__ = self.features;
/* 000092 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000096 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000096 */ 				(function () {
/* 000096 */ 					var __accu1__ = __accu0__;
/* 000093 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000093 */ 						var __accu2__ = f;
/* 000093 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000093 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000093 */ 				}) ();
/* 000093 */ 			}
/* 000093 */ 			return __accu0__;
/* 000093 */ 		}) ();
/* 000098 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000098 */ 	});},
/* 000103 */ 	get initialize () {return __get__ (this, function (self) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000106 */ 		var __iterable0__ = self.feature_document_managers;
/* 000106 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000106 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000106 */ 			var feature_name = __left0__ [0];
/* 000106 */ 			var feature_document_manager = __left0__ [1];
/* 000107 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000108 */ 				var feature_options = (function () {
/* 000108 */ 					var __accu0__ = self.feature_document_options;
/* 000108 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000108 */ 				}) ();
/* 000109 */ 				(function () {
/* 000109 */ 					var __accu0__ = feature_document_manager;
/* 000109 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000109 */ 				}) ();
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 	});},
/* 000111 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000112 */ 	});},
/* 000114 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000115 */ 	});},
/* 000117 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000117 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000117 */ 			var feature_render_options = null;
/* 000117 */ 		};
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000119 */ 		var render_context = __call__ (LLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000125 */ 		if (__t__ (feature_render_options === null)) {
/* 000126 */ 			var feature_render_options = dict ({});
/* 000126 */ 		}
/* 000129 */ 		var feature_render_options = __call__ (dict, null, feature_render_options);
/* 000131 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000131 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000131 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000131 */ 			var feature_name = __left0__ [0];
/* 000131 */ 			var feature_render_manager = __left0__ [1];
/* 000132 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000133 */ 				var feature_options = (function () {
/* 000133 */ 					var __accu0__ = feature_render_options;
/* 000133 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, __call__ (dict, null));
/* 000133 */ 				}) ();
/* 000134 */ 				(function () {
/* 000134 */ 					var __accu0__ = feature_render_manager;
/* 000134 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000134 */ 				}) ();
/* 000134 */ 			}
/* 000134 */ 		}
/* 000135 */ 		return render_context;
/* 000135 */ 	});},
/* 000137 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000137 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000137 */ 			var feature_render_options = null;
/* 000137 */ 		};
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000143 */ 		var render_context = (function () {
/* 000143 */ 			var __accu0__ = self;
/* 000143 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000143 */ 		}) ();
/* 000148 */ 		(function () {
/* 000148 */ 			var __accu0__ = fragment_renderer;
/* 000148 */ 			return __call__ (__accu0__.document_render_start, __accu0__, render_context);
/* 000148 */ 		}) ();
/* 000151 */ 		var value = (function () {
/* 000151 */ 			var __accu0__ = self;
/* 000151 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000151 */ 		}) ();
/* 000152 */ 		if (__t__ (value === null)) {
/* 000153 */ 			(function () {
/* 000153 */ 				var __accu0__ = logger;
/* 000153 */ 				return __call__ (__accu0__.warning, __accu0__, 'The LLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000153 */ 			}) ();
/* 000153 */ 		}
/* 000156 */ 		// pass;
/* 000163 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000163 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000163 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000163 */ 			var feature_name = __left0__ [0];
/* 000163 */ 			var feature_render_manager = __left0__ [1];
/* 000164 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000165 */ 				(function () {
/* 000165 */ 					var __accu0__ = feature_render_manager;
/* 000165 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000165 */ 				}) ();
/* 000165 */ 			}
/* 000165 */ 		}
/* 000169 */ 		var __iterable0__ = (function () {
/* 000169 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000169 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000169 */ 		}) ();
/* 000169 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000169 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000169 */ 			var key = __left0__ [0];
/* 000169 */ 			var node = __left0__ [1];
/* 000174 */ 			__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000174 */ 				var __accu0__ = node.llm_specinfo;
/* 000174 */ 				return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000174 */ 			}) ());
/* 000174 */ 		}
/* 000178 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000185 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000185 */ 				if (arguments.length) {
/* 000185 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 							switch (__attrib0__) {
/* 000185 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 							}
/* 000185 */ 						}
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 				else {
/* 000185 */ 				}
/* 000186 */ 				return (function () {
/* 000186 */ 					var __accu0__ = fragment_renderer;
/* 000186 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000186 */ 				}) ();
/* 000186 */ 			});
/* 000191 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000193 */ 				var value = (function () {
/* 000193 */ 					var __accu0__ = [];
/* 000195 */ 					var __iterable0__ = (function () {
/* 000195 */ 						var __accu1__ = value;
/* 000195 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000195 */ 					}) ();
/* 000195 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 						var k = __left0__ [0];
/* 000195 */ 						var s = __left0__ [1];
/* 000195 */ 						(function () {
/* 000195 */ 							var __accu1__ = __accu0__;
/* 000194 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000194 */ 						}) ();
/* 000194 */ 					}
/* 000194 */ 					return dict (__accu0__);
/* 000194 */ 				}) ();
/* 000194 */ 			}
/* 000197 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000198 */ 				var value = (function () {
/* 000198 */ 					var __accu0__ = [];
/* 000198 */ 					var __iterable0__ = value;
/* 000198 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 						(function () {
/* 000198 */ 							var __accu1__ = __accu0__;
/* 000198 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000198 */ 						}) ();
/* 000198 */ 					}
/* 000198 */ 					return __accu0__;
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000199 */ 			else {
/* 000200 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000200 */ 			}
/* 000200 */ 		}
/* 000201 */ 		else {
/* 000205 */ 			(function () {
/* 000205 */ 				var __accu0__ = render_context;
/* 000205 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000205 */ 			}) ();
/* 000206 */ 			var value = (function () {
/* 000206 */ 				var __accu0__ = self;
/* 000206 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000206 */ 			}) ();
/* 000206 */ 		}
/* 000210 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000210 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000210 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000210 */ 			var feature_name = __left0__ [0];
/* 000210 */ 			var feature_render_manager = __left0__ [1];
/* 000211 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = feature_render_manager;
/* 000212 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000212 */ 		}
/* 000214 */ 		(function () {
/* 000214 */ 			var __accu0__ = fragment_renderer;
/* 000214 */ 			return __call__ (__accu0__.document_render_finish, __accu0__, render_context);
/* 000214 */ 		}) ();
/* 000216 */ 		// pass;
/* 000220 */ 		return tuple ([value, render_context]);
/* 000220 */ 	});}
/* 000220 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmdocument.map