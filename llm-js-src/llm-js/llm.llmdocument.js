/* 000001 */ // Transcrypt'ed from Python, 2023-01-05 22:41:19
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
/* 000028 */ 	});},
/* 000030 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000031 */ 		return __in__ (feature_name, self.feature_render_managers_by_name);
/* 000031 */ 	});},
/* 000033 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000034 */ 		return __getitem__ (self.feature_render_managers_by_name, feature_name);
/* 000034 */ 	});},
/* 000036 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000038 */ 		var key = node.node_id;
/* 000039 */ 		__setitem__ (self._delayed_render_nodes, key, node);
/* 000040 */ 		return key;
/* 000040 */ 	});},
/* 000042 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		var key = node.node_id;
/* 000044 */ 		return __getitem__ (self._delayed_render_content, key);
/* 000044 */ 	});}
/* 000044 */ });
/* 000048 */ export var LLMDocument =  __class__ ('LLMDocument', [object], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000050 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000050 */ 			var enable_features = null;
/* 000050 */ 		};
/* 000050 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000050 */ 			var feature_document_options = null;
/* 000050 */ 		};
/* 000050 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000050 */ 			var metadata = null;
/* 000050 */ 		};
/* 000050 */ 		if (arguments.length) {
/* 000050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 					switch (__attrib0__) {
/* 000050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000058 */ 		__call__ (__call__ (__super__, null, LLMDocument, '__init__'), null, self);
/* 000061 */ 		self.environment = environment;
/* 000062 */ 		self.render_callback = render_callback;
/* 000065 */ 		self.metadata = metadata;
/* 000068 */ 		if (__t__ (enable_features === null)) {
/* 000069 */ 			self.features = __call__ (list, null, environment.features);
/* 000069 */ 		}
/* 000070 */ 		else {
/* 000071 */ 			self.features = (function () {
/* 000071 */ 				var __accu0__ = [];
/* 000071 */ 				var __iterable0__ = enable_features;
/* 000071 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000073 */ 					var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000073 */ 					(function () {
/* 000073 */ 						var __accu1__ = __accu0__;
/* 000072 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000072 */ 							var __accu2__ = environment;
/* 000072 */ 							return __call__ (__accu2__.feature, __accu2__, feature_name);
/* 000072 */ 						}) ());
/* 000072 */ 					}) ();
/* 000072 */ 				}
/* 000072 */ 				return __accu0__;
/* 000072 */ 			}) ();
/* 000072 */ 		}
/* 000078 */ 		if (__t__ (feature_document_options === null)) {
/* 000079 */ 			var feature_document_options = dict ({});
/* 000079 */ 		}
/* 000080 */ 		self.feature_document_options = __call__ (dict, null, feature_document_options);
/* 000082 */ 		self.feature_document_managers = (function () {
/* 000082 */ 			var __accu0__ = [];
/* 000082 */ 			var __iterable0__ = self.features;
/* 000082 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000086 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000086 */ 				(function () {
/* 000086 */ 					var __accu1__ = __accu0__;
/* 000083 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000083 */ 						var __accu2__ = f;
/* 000083 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000083 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000083 */ 				}) ();
/* 000083 */ 			}
/* 000083 */ 			return __accu0__;
/* 000083 */ 		}) ();
/* 000088 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000088 */ 	});},
/* 000093 */ 	get initialize () {return __get__ (this, function (self) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000096 */ 		var __iterable0__ = self.feature_document_managers;
/* 000096 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000096 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000096 */ 			var feature_name = __left0__ [0];
/* 000096 */ 			var feature_document_manager = __left0__ [1];
/* 000097 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000098 */ 				var feature_options = (function () {
/* 000098 */ 					var __accu0__ = self.feature_document_options;
/* 000098 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000098 */ 				}) ();
/* 000099 */ 				(function () {
/* 000099 */ 					var __accu0__ = feature_document_manager;
/* 000099 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000099 */ 				}) ();
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 	});},
/* 000101 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000102 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000102 */ 	});},
/* 000104 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000105 */ 	});},
/* 000107 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000107 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000107 */ 			var feature_render_options = null;
/* 000107 */ 		};
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000109 */ 		var render_context = __call__ (LLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000115 */ 		if (__t__ (feature_render_options === null)) {
/* 000116 */ 			var feature_render_options = dict ({});
/* 000116 */ 		}
/* 000119 */ 		var feature_render_options = __call__ (dict, null, feature_render_options);
/* 000121 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000121 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000121 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000121 */ 			var feature_name = __left0__ [0];
/* 000121 */ 			var feature_render_manager = __left0__ [1];
/* 000122 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000123 */ 				var feature_options = (function () {
/* 000123 */ 					var __accu0__ = feature_render_options;
/* 000123 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, __call__ (dict, null));
/* 000123 */ 				}) ();
/* 000124 */ 				(function () {
/* 000124 */ 					var __accu0__ = feature_render_manager;
/* 000124 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000124 */ 		}
/* 000125 */ 		return render_context;
/* 000125 */ 	});},
/* 000127 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000127 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000127 */ 			var feature_render_options = null;
/* 000127 */ 		};
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000133 */ 		var render_context = (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000133 */ 		}) ();
/* 000139 */ 		var value = (function () {
/* 000139 */ 			var __accu0__ = self;
/* 000139 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000139 */ 		}) ();
/* 000140 */ 		if (__t__ (value === null)) {
/* 000141 */ 			(function () {
/* 000141 */ 				var __accu0__ = logger;
/* 000141 */ 				return __call__ (__accu0__.warning, __accu0__, 'The LLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000149 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000149 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000149 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000149 */ 			var feature_name = __left0__ [0];
/* 000149 */ 			var feature_render_manager = __left0__ [1];
/* 000150 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000151 */ 				(function () {
/* 000151 */ 					var __accu0__ = feature_render_manager;
/* 000151 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000151 */ 				}) ();
/* 000151 */ 			}
/* 000151 */ 		}
/* 000155 */ 		var __iterable0__ = (function () {
/* 000155 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000155 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000155 */ 		}) ();
/* 000155 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 			var key = __left0__ [0];
/* 000155 */ 			var node = __left0__ [1];
/* 000160 */ 			__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000160 */ 				var __accu0__ = node.llm_specinfo;
/* 000160 */ 				return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000160 */ 			}) ());
/* 000160 */ 		}
/* 000164 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000171 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000171 */ 				if (arguments.length) {
/* 000171 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 							switch (__attrib0__) {
/* 000171 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 							}
/* 000171 */ 						}
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 				else {
/* 000171 */ 				}
/* 000172 */ 				return (function () {
/* 000172 */ 					var __accu0__ = fragment_renderer;
/* 000172 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000172 */ 				}) ();
/* 000172 */ 			});
/* 000177 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000179 */ 				var value = (function () {
/* 000179 */ 					var __accu0__ = [];
/* 000181 */ 					var __iterable0__ = (function () {
/* 000181 */ 						var __accu1__ = value;
/* 000181 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000181 */ 					}) ();
/* 000181 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 						var k = __left0__ [0];
/* 000181 */ 						var s = __left0__ [1];
/* 000181 */ 						(function () {
/* 000181 */ 							var __accu1__ = __accu0__;
/* 000180 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000180 */ 						}) ();
/* 000180 */ 					}
/* 000180 */ 					return dict (__accu0__);
/* 000180 */ 				}) ();
/* 000180 */ 			}
/* 000183 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000184 */ 				var value = (function () {
/* 000184 */ 					var __accu0__ = [];
/* 000184 */ 					var __iterable0__ = value;
/* 000184 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000184 */ 						(function () {
/* 000184 */ 							var __accu1__ = __accu0__;
/* 000184 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000184 */ 						}) ();
/* 000184 */ 					}
/* 000184 */ 					return __accu0__;
/* 000184 */ 				}) ();
/* 000184 */ 			}
/* 000185 */ 			else {
/* 000186 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000186 */ 			}
/* 000186 */ 		}
/* 000187 */ 		else {
/* 000191 */ 			(function () {
/* 000191 */ 				var __accu0__ = render_context;
/* 000191 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000191 */ 			}) ();
/* 000192 */ 			var value = (function () {
/* 000192 */ 				var __accu0__ = self;
/* 000192 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000192 */ 			}) ();
/* 000192 */ 		}
/* 000196 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000196 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 			var feature_name = __left0__ [0];
/* 000196 */ 			var feature_render_manager = __left0__ [1];
/* 000197 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000198 */ 				(function () {
/* 000198 */ 					var __accu0__ = feature_render_manager;
/* 000198 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000198 */ 		}
/* 000200 */ 		return tuple ([value, render_context]);
/* 000200 */ 	});}
/* 000200 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmdocument.map