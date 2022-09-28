/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:14
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
/* 000053 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000053 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var enable_features = null;
/* 000053 */ 		};
/* 000053 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var feature_document_options = null;
/* 000053 */ 		};
/* 000053 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var metadata = null;
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
/* 000053 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, LLMDocument, '__init__'), null, self);
/* 000064 */ 		self.environment = environment;
/* 000065 */ 		self.render_callback = render_callback;
/* 000068 */ 		self.metadata = metadata;
/* 000071 */ 		if (__t__ (enable_features === null)) {
/* 000072 */ 			self.features = __call__ (list, null, environment.features);
/* 000072 */ 		}
/* 000073 */ 		else {
/* 000074 */ 			self.features = (function () {
/* 000074 */ 				var __accu0__ = [];
/* 000074 */ 				var __iterable0__ = enable_features;
/* 000074 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000076 */ 					var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000076 */ 					(function () {
/* 000076 */ 						var __accu1__ = __accu0__;
/* 000075 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000075 */ 							var __accu2__ = environment;
/* 000075 */ 							return __call__ (__accu2__.feature, __accu2__, feature_name);
/* 000075 */ 						}) ());
/* 000075 */ 					}) ();
/* 000075 */ 				}
/* 000075 */ 				return __accu0__;
/* 000075 */ 			}) ();
/* 000075 */ 		}
/* 000081 */ 		if (__t__ (feature_document_options === null)) {
/* 000082 */ 			var feature_document_options = dict ({});
/* 000082 */ 		}
/* 000083 */ 		self.feature_document_options = feature_document_options;
/* 000085 */ 		self.feature_document_managers = (function () {
/* 000085 */ 			var __accu0__ = [];
/* 000085 */ 			var __iterable0__ = self.features;
/* 000085 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000089 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000089 */ 				(function () {
/* 000089 */ 					var __accu1__ = __accu0__;
/* 000086 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000086 */ 						var __accu2__ = f;
/* 000086 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000086 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000086 */ 				}) ();
/* 000086 */ 			}
/* 000086 */ 			return __accu0__;
/* 000086 */ 		}) ();
/* 000091 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000091 */ 	});},
/* 000096 */ 	get initialize () {return __get__ (this, function (self) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000099 */ 		var __iterable0__ = self.feature_document_managers;
/* 000099 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000099 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000099 */ 			var feature_name = __left0__ [0];
/* 000099 */ 			var feature_document_manager = __left0__ [1];
/* 000100 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000101 */ 				var feature_options = (function () {
/* 000101 */ 					var __accu0__ = self.feature_document_options;
/* 000101 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000101 */ 				}) ();
/* 000102 */ 				(function () {
/* 000102 */ 					var __accu0__ = feature_document_manager;
/* 000102 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000102 */ 				}) ();
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 	});},
/* 000104 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
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
/* 000105 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000105 */ 	});},
/* 000107 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000108 */ 	});},
/* 000110 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000110 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var feature_render_options = null;
/* 000110 */ 		};
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000112 */ 		var render_context = __call__ (LLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000118 */ 		if (__t__ (feature_render_options === null)) {
/* 000119 */ 			var feature_render_options = dict ({});
/* 000119 */ 		}
/* 000120 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000120 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000120 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000120 */ 			var feature_name = __left0__ [0];
/* 000120 */ 			var feature_render_manager = __left0__ [1];
/* 000121 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000122 */ 				var feature_options = (function () {
/* 000122 */ 					var __accu0__ = feature_render_options;
/* 000122 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000122 */ 				}) ();
/* 000123 */ 				(function () {
/* 000123 */ 					var __accu0__ = feature_render_manager;
/* 000123 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000123 */ 				}) ();
/* 000123 */ 			}
/* 000123 */ 		}
/* 000124 */ 		return render_context;
/* 000124 */ 	});},
/* 000126 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000126 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000126 */ 			var feature_render_options = null;
/* 000126 */ 		};
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000132 */ 		var render_context = (function () {
/* 000132 */ 			var __accu0__ = self;
/* 000132 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000132 */ 		}) ();
/* 000138 */ 		var value = (function () {
/* 000138 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000138 */ 		}) ();
/* 000139 */ 		if (__t__ (value === null)) {
/* 000140 */ 			(function () {
/* 000140 */ 				var __accu0__ = logger;
/* 000140 */ 				return __call__ (__accu0__.warning, __accu0__, 'The LLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000140 */ 			}) ();
/* 000140 */ 		}
/* 000148 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000148 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000148 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000148 */ 			var feature_name = __left0__ [0];
/* 000148 */ 			var feature_render_manager = __left0__ [1];
/* 000149 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000150 */ 				(function () {
/* 000150 */ 					var __accu0__ = feature_render_manager;
/* 000150 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000150 */ 				}) ();
/* 000150 */ 			}
/* 000150 */ 		}
/* 000154 */ 		var __iterable0__ = (function () {
/* 000154 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000154 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000154 */ 		}) ();
/* 000154 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 			var key = __left0__ [0];
/* 000154 */ 			var node = __left0__ [1];
/* 000159 */ 			__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000159 */ 				var __accu0__ = node.llm_specinfo;
/* 000159 */ 				return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000159 */ 			}) ());
/* 000159 */ 		}
/* 000163 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000170 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000170 */ 				if (arguments.length) {
/* 000170 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 							switch (__attrib0__) {
/* 000170 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 							}
/* 000170 */ 						}
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 				else {
/* 000170 */ 				}
/* 000171 */ 				return (function () {
/* 000171 */ 					var __accu0__ = fragment_renderer;
/* 000171 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000171 */ 				}) ();
/* 000171 */ 			});
/* 000176 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000178 */ 				var value = (function () {
/* 000178 */ 					var __accu0__ = [];
/* 000180 */ 					var __iterable0__ = (function () {
/* 000180 */ 						var __accu1__ = value;
/* 000180 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000180 */ 					}) ();
/* 000180 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000180 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000180 */ 						var k = __left0__ [0];
/* 000180 */ 						var s = __left0__ [1];
/* 000180 */ 						(function () {
/* 000180 */ 							var __accu1__ = __accu0__;
/* 000179 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000179 */ 						}) ();
/* 000179 */ 					}
/* 000179 */ 					return dict (__accu0__);
/* 000179 */ 				}) ();
/* 000179 */ 			}
/* 000182 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000183 */ 				var value = (function () {
/* 000183 */ 					var __accu0__ = [];
/* 000183 */ 					var __iterable0__ = value;
/* 000183 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000183 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000183 */ 						(function () {
/* 000183 */ 							var __accu1__ = __accu0__;
/* 000183 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000183 */ 						}) ();
/* 000183 */ 					}
/* 000183 */ 					return __accu0__;
/* 000183 */ 				}) ();
/* 000183 */ 			}
/* 000184 */ 			else {
/* 000185 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000185 */ 			}
/* 000185 */ 		}
/* 000186 */ 		else {
/* 000190 */ 			(function () {
/* 000190 */ 				var __accu0__ = render_context;
/* 000190 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000190 */ 			}) ();
/* 000191 */ 			var value = (function () {
/* 000191 */ 				var __accu0__ = self;
/* 000191 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000191 */ 			}) ();
/* 000191 */ 		}
/* 000195 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000195 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 			var feature_name = __left0__ [0];
/* 000195 */ 			var feature_render_manager = __left0__ [1];
/* 000196 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000197 */ 				(function () {
/* 000197 */ 					var __accu0__ = feature_render_manager;
/* 000197 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000197 */ 				}) ();
/* 000197 */ 			}
/* 000197 */ 		}
/* 000199 */ 		return tuple ([value, render_context]);
/* 000199 */ 	});}
/* 000199 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmdocument.map