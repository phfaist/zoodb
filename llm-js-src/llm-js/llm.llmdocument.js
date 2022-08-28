/* 000001 */ // Transcrypt'ed from Python, 2022-08-23 17:26:46
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
/* 000027 */ 		self._delayed_id_counter = 1;
/* 000028 */ 		self._delayed_render_nodes = dict ({});
/* 000029 */ 		self._delayed_render_content = dict ({});
/* 000029 */ 	});},
/* 000031 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000031 */ 		if (arguments.length) {
/* 000031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 					switch (__attrib0__) {
/* 000031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 					}
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 		else {
/* 000031 */ 		}
/* 000032 */ 		return __in__ (feature_name, self.feature_render_managers_by_name);
/* 000032 */ 	});},
/* 000034 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		return __getitem__ (self.feature_render_managers_by_name, feature_name);
/* 000035 */ 	});},
/* 000037 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000040 */ 		var key = self._delayed_id_counter;
/* 000041 */ 		self._delayed_id_counter = __call__ (__iadd__, null, self._delayed_id_counter, 1);
/* 000042 */ 		__setitem__ (self._delayed_render_nodes, key, node);
/* 000043 */ 		node.llm_delayed_render_key = key;
/* 000044 */ 		return key;
/* 000044 */ 	});},
/* 000046 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000047 */ 		return __getitem__ (self._delayed_render_content, node.llm_delayed_render_key);
/* 000047 */ 	});}
/* 000047 */ });
/* 000051 */ export var LLMDocument =  __class__ ('LLMDocument', [object], {
/* 000051 */ 	__module__: __name__,
/* 000053 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options) {
/* 000053 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var enable_features = null;
/* 000053 */ 		};
/* 000053 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var feature_document_options = null;
/* 000053 */ 		};
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000060 */ 		__call__ (__call__ (__super__, null, LLMDocument, '__init__'), null, self);
/* 000063 */ 		self.environment = environment;
/* 000064 */ 		self.render_callback = render_callback;
/* 000067 */ 		if (__t__ (enable_features === null)) {
/* 000068 */ 			self.features = __call__ (list, null, environment.features);
/* 000068 */ 		}
/* 000069 */ 		else {
/* 000070 */ 			self.features = (function () {
/* 000070 */ 				var __accu0__ = [];
/* 000070 */ 				var __iterable0__ = enable_features;
/* 000070 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000072 */ 					var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000072 */ 					(function () {
/* 000072 */ 						var __accu1__ = __accu0__;
/* 000071 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000071 */ 							var __accu2__ = environment;
/* 000071 */ 							return __call__ (__accu2__.feature, __accu2__, feature_name);
/* 000071 */ 						}) ());
/* 000071 */ 					}) ();
/* 000071 */ 				}
/* 000071 */ 				return __accu0__;
/* 000071 */ 			}) ();
/* 000071 */ 		}
/* 000077 */ 		if (__t__ (feature_document_options === null)) {
/* 000078 */ 			var feature_document_options = dict ({});
/* 000078 */ 		}
/* 000079 */ 		self.feature_document_options = feature_document_options;
/* 000081 */ 		self.feature_document_managers = (function () {
/* 000081 */ 			var __accu0__ = [];
/* 000081 */ 			var __iterable0__ = self.features;
/* 000081 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000085 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000085 */ 				(function () {
/* 000085 */ 					var __accu1__ = __accu0__;
/* 000082 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000082 */ 						var __accu2__ = f;
/* 000082 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000082 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000082 */ 				}) ();
/* 000082 */ 			}
/* 000082 */ 			return __accu0__;
/* 000082 */ 		}) ();
/* 000087 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000087 */ 	});},
/* 000092 */ 	get initialize () {return __get__ (this, function (self) {
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
/* 000095 */ 		var __iterable0__ = self.feature_document_managers;
/* 000095 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000095 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000095 */ 			var feature_name = __left0__ [0];
/* 000095 */ 			var feature_document_manager = __left0__ [1];
/* 000096 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000097 */ 				var feature_options = (function () {
/* 000097 */ 					var __accu0__ = self.feature_document_options;
/* 000097 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000097 */ 				}) ();
/* 000098 */ 				(function () {
/* 000098 */ 					var __accu0__ = feature_document_manager;
/* 000098 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000098 */ 				}) ();
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 	});},
/* 000100 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000101 */ 	});},
/* 000103 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000104 */ 	});},
/* 000106 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000106 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var feature_render_options = null;
/* 000106 */ 		};
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000108 */ 		var render_context = __call__ (LLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000114 */ 		if (__t__ (feature_render_options === null)) {
/* 000115 */ 			var feature_render_options = dict ({});
/* 000115 */ 		}
/* 000116 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000116 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000116 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000116 */ 			var feature_name = __left0__ [0];
/* 000116 */ 			var feature_render_manager = __left0__ [1];
/* 000117 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000118 */ 				var feature_options = (function () {
/* 000118 */ 					var __accu0__ = feature_render_options;
/* 000118 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000118 */ 				}) ();
/* 000119 */ 				(function () {
/* 000119 */ 					var __accu0__ = feature_render_manager;
/* 000119 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000119 */ 				}) ();
/* 000119 */ 			}
/* 000119 */ 		}
/* 000120 */ 		return render_context;
/* 000120 */ 	});},
/* 000122 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000122 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var feature_render_options = null;
/* 000122 */ 		};
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000128 */ 		var render_context = (function () {
/* 000128 */ 			var __accu0__ = self;
/* 000128 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000128 */ 		}) ();
/* 000134 */ 		var value = (function () {
/* 000134 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000134 */ 		}) ();
/* 000135 */ 		if (__t__ (value === null)) {
/* 000136 */ 			(function () {
/* 000136 */ 				var __accu0__ = logger;
/* 000136 */ 				return __call__ (__accu0__.warning, __accu0__, 'The LLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000136 */ 			}) ();
/* 000136 */ 		}
/* 000144 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000144 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000144 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000144 */ 			var feature_name = __left0__ [0];
/* 000144 */ 			var feature_render_manager = __left0__ [1];
/* 000145 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000146 */ 				(function () {
/* 000146 */ 					var __accu0__ = feature_render_manager;
/* 000146 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000146 */ 		}
/* 000150 */ 		var __iterable0__ = (function () {
/* 000150 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000150 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000150 */ 		}) ();
/* 000150 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000150 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000150 */ 			var key = __left0__ [0];
/* 000150 */ 			var node = __left0__ [1];
/* 000155 */ 			__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000155 */ 				var __accu0__ = node.llm_specinfo;
/* 000155 */ 				return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000155 */ 			}) ());
/* 000155 */ 		}
/* 000159 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000166 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000166 */ 				if (arguments.length) {
/* 000166 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 							switch (__attrib0__) {
/* 000166 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 							}
/* 000166 */ 						}
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 				else {
/* 000166 */ 				}
/* 000167 */ 				return (function () {
/* 000167 */ 					var __accu0__ = fragment_renderer;
/* 000167 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000167 */ 				}) ();
/* 000167 */ 			});
/* 000172 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000174 */ 				var value = (function () {
/* 000174 */ 					var __accu0__ = [];
/* 000176 */ 					var __iterable0__ = (function () {
/* 000176 */ 						var __accu1__ = value;
/* 000176 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000176 */ 					}) ();
/* 000176 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000176 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000176 */ 						var k = __left0__ [0];
/* 000176 */ 						var s = __left0__ [1];
/* 000176 */ 						(function () {
/* 000176 */ 							var __accu1__ = __accu0__;
/* 000175 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000175 */ 						}) ();
/* 000175 */ 					}
/* 000175 */ 					return dict (__accu0__);
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000178 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000179 */ 				var value = (function () {
/* 000179 */ 					var __accu0__ = [];
/* 000179 */ 					var __iterable0__ = value;
/* 000179 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000179 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000179 */ 						(function () {
/* 000179 */ 							var __accu1__ = __accu0__;
/* 000179 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000179 */ 						}) ();
/* 000179 */ 					}
/* 000179 */ 					return __accu0__;
/* 000179 */ 				}) ();
/* 000179 */ 			}
/* 000180 */ 			else {
/* 000181 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000181 */ 			}
/* 000181 */ 		}
/* 000182 */ 		else {
/* 000186 */ 			(function () {
/* 000186 */ 				var __accu0__ = render_context;
/* 000186 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000186 */ 			}) ();
/* 000187 */ 			var value = (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000187 */ 			}) ();
/* 000187 */ 		}
/* 000191 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000191 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000191 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000191 */ 			var feature_name = __left0__ [0];
/* 000191 */ 			var feature_render_manager = __left0__ [1];
/* 000192 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000193 */ 				(function () {
/* 000193 */ 					var __accu0__ = feature_render_manager;
/* 000193 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000193 */ 				}) ();
/* 000193 */ 			}
/* 000193 */ 		}
/* 000195 */ 		return tuple ([value, render_context]);
/* 000195 */ 	});}
/* 000195 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmdocument.map