/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:46
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000011 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000009 */ import {LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FLMRenderContext, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.flmdocument';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000014 */ export var FLMDocumentRenderContext =  __class__ ('FLMDocumentRenderContext', [FLMRenderContext], {
/* 000014 */ 	__module__: __name__,
/* 000015 */ 	get __init__ () {return __get__ (this, function (self, doc, fragment_renderer, feature_document_managers) {
/* 000015 */ 		var kwargs = dict ();
/* 000015 */ 		if (arguments.length) {
/* 000015 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000015 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000015 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000015 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000015 */ 					switch (__attrib0__) {
/* 000015 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 						case 'feature_document_managers': var feature_document_managers = __allkwargs0__ [__attrib0__]; break;
/* 000015 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000015 */ 					}
/* 000015 */ 				}
/* 000015 */ 				delete kwargs.__kwargtrans__;
/* 000015 */ 			}
/* 000015 */ 		}
/* 000015 */ 		else {
/* 000015 */ 		}
/* 000016 */ 		__call__ (__call__ (__super__, null, FLMDocumentRenderContext, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({doc: doc, fragment_renderer: fragment_renderer}, kwargs)));
/* 000017 */ 		self.feature_document_managers = feature_document_managers;
/* 000018 */ 		self.feature_render_managers = (function () {
/* 000018 */ 			var __accu0__ = [];
/* 000018 */ 			var __iterable0__ = self.feature_document_managers;
/* 000018 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000022 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000022 */ 				var feature_name = __left0__ [0];
/* 000022 */ 				var fdm = __left0__ [1];
/* 000022 */ 				(function () {
/* 000022 */ 					var __accu1__ = __accu0__;
/* 000019 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__t__ (fdm !== null) && fdm.RenderManager !== null) ? tuple ([feature_name, (function () {
/* 000019 */ 						var __accu2__ = fdm;
/* 000019 */ 						return __call__ (__accu2__.RenderManager, __accu2__, fdm, self);
/* 000019 */ 					}) ()]) : tuple ([feature_name, null])));
/* 000019 */ 				}) ();
/* 000019 */ 			}
/* 000019 */ 			return __accu0__;
/* 000019 */ 		}) ();
/* 000024 */ 		self.feature_render_managers_by_name = __call__ (dict, null, self.feature_render_managers);
/* 000028 */ 		self.is_first_pass = true;
/* 000029 */ 		self._delayed_render_nodes = dict ({});
/* 000030 */ 		self._delayed_render_content = dict ({});
/* 000039 */ 		self.data = dict ({});
/* 000039 */ 	});},
/* 000042 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		return __in__ (feature_name, self.feature_render_managers_by_name);
/* 000043 */ 	});},
/* 000045 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		return __getitem__ (self.feature_render_managers_by_name, feature_name);
/* 000046 */ 	});},
/* 000048 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000048 */ 		if (arguments.length) {
/* 000048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 					switch (__attrib0__) {
/* 000048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 					}
/* 000048 */ 				}
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 		else {
/* 000048 */ 		}
/* 000050 */ 		var key = node._flm_node_id;
/* 000051 */ 		__setitem__ (self._delayed_render_nodes, key, node);
/* 000052 */ 		return key;
/* 000052 */ 	});},
/* 000054 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000055 */ 		var key = node._flm_node_id;
/* 000056 */ 		return __getitem__ (self._delayed_render_content, key);
/* 000056 */ 	});},
/* 000058 */ 	get make_standalone_fragment () {return __get__ (this, function (self, flm_text) {
/* 000058 */ 		var kwargs = dict ();
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 				delete kwargs.__kwargtrans__;
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		return (function () {
/* 000059 */ 			var __accu0__ = self.doc.environment;
/* 000059 */ 			return __call__ (__accu0__.make_fragment, __accu0__, flm_text, __kwargtrans__ (__mergekwargtrans__ ({standalone_mode: true}, kwargs)));
/* 000059 */ 		}) ();
/* 000059 */ 	});}
/* 000059 */ });
/* 000068 */ export var FLMDocument =  __class__ ('FLMDocument', [object], {
/* 000068 */ 	__module__: __name__,
/* 000070 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000070 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000070 */ 			var enable_features = null;
/* 000070 */ 		};
/* 000070 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000070 */ 			var feature_document_options = null;
/* 000070 */ 		};
/* 000070 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000070 */ 			var metadata = null;
/* 000070 */ 		};
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000078 */ 		__call__ (__call__ (__super__, null, FLMDocument, '__init__'), null, self);
/* 000081 */ 		self.environment = environment;
/* 000082 */ 		self.render_callback = render_callback;
/* 000085 */ 		self.metadata = metadata;
/* 000088 */ 		self.features = (function () {
/* 000088 */ 			var __accu0__ = self.environment;
/* 000088 */ 			return __call__ (__accu0__.get_features_selection, __accu0__, enable_features);
/* 000088 */ 		}) ();
/* 000092 */ 		if (__t__ (feature_document_options === null)) {
/* 000093 */ 			var feature_document_options = dict ({});
/* 000093 */ 		}
/* 000094 */ 		self.feature_document_options = __call__ (dict, null, feature_document_options);
/* 000096 */ 		self.feature_document_managers = (function () {
/* 000096 */ 			var __accu0__ = [];
/* 000096 */ 			var __iterable0__ = self.features;
/* 000096 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000100 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000100 */ 				(function () {
/* 000100 */ 					var __accu1__ = __accu0__;
/* 000097 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000097 */ 						var __accu2__ = f;
/* 000097 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000097 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000097 */ 				}) ();
/* 000097 */ 			}
/* 000097 */ 			return __accu0__;
/* 000097 */ 		}) ();
/* 000102 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000102 */ 	});},
/* 000107 */ 	get initialize () {return __get__ (this, function (self) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000110 */ 		var __iterable0__ = self.feature_document_managers;
/* 000110 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000110 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000110 */ 			var feature_name = __left0__ [0];
/* 000110 */ 			var feature_document_manager = __left0__ [1];
/* 000111 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000112 */ 				var feature_options = (function () {
/* 000112 */ 					var __accu0__ = self.feature_document_options;
/* 000112 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000112 */ 				}) ();
/* 000113 */ 				(function () {
/* 000113 */ 					var __accu0__ = feature_document_manager;
/* 000113 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000113 */ 				}) ();
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 	});},
/* 000115 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000116 */ 	});},
/* 000118 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000119 */ 	});},
/* 000121 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000121 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000121 */ 			var feature_render_options = null;
/* 000121 */ 		};
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000123 */ 		var render_context = __call__ (FLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000129 */ 		if (__t__ (feature_render_options === null)) {
/* 000130 */ 			var feature_render_options = dict ({});
/* 000130 */ 		}
/* 000133 */ 		var feature_render_options = __call__ (dict, null, feature_render_options);
/* 000135 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000135 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000135 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000135 */ 			var feature_name = __left0__ [0];
/* 000135 */ 			var feature_render_manager = __left0__ [1];
/* 000136 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000137 */ 				var feature_options = (function () {
/* 000137 */ 					var __accu0__ = feature_render_options;
/* 000137 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, __call__ (dict, null));
/* 000137 */ 				}) ();
/* 000138 */ 				(function () {
/* 000138 */ 					var __accu0__ = feature_render_manager;
/* 000138 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000138 */ 				}) ();
/* 000138 */ 			}
/* 000138 */ 		}
/* 000139 */ 		return render_context;
/* 000139 */ 	});},
/* 000141 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000141 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000141 */ 			var feature_render_options = null;
/* 000141 */ 		};
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000147 */ 		var render_context = (function () {
/* 000147 */ 			var __accu0__ = self;
/* 000147 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000147 */ 		}) ();
/* 000152 */ 		(function () {
/* 000152 */ 			var __accu0__ = fragment_renderer;
/* 000152 */ 			return __call__ (__accu0__.document_render_start, __accu0__, render_context);
/* 000152 */ 		}) ();
/* 000155 */ 		var value = (function () {
/* 000155 */ 			var __accu0__ = self;
/* 000155 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000155 */ 		}) ();
/* 000156 */ 		if (__t__ (value === null)) {
/* 000157 */ 			(function () {
/* 000157 */ 				var __accu0__ = logger;
/* 000157 */ 				return __call__ (__accu0__.warning, __accu0__, 'The FLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000157 */ 			}) ();
/* 000157 */ 		}
/* 000160 */ 		// pass;
/* 000167 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000167 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000167 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 			var feature_name = __left0__ [0];
/* 000167 */ 			var feature_render_manager = __left0__ [1];
/* 000168 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000169 */ 				(function () {
/* 000169 */ 					var __accu0__ = feature_render_manager;
/* 000169 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000169 */ 				}) ();
/* 000169 */ 			}
/* 000169 */ 		}
/* 000173 */ 		var __iterable0__ = (function () {
/* 000173 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000173 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000173 */ 		}) ();
/* 000173 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000173 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000173 */ 			var key = __left0__ [0];
/* 000173 */ 			var node = __left0__ [1];
/* 000177 */ 			try {
/* 000179 */ 				__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000179 */ 					var __accu0__ = node.flm_specinfo;
/* 000179 */ 					return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000179 */ 				}) ());
/* 000179 */ 			}
/* 000179 */ 			catch (__except0__) {
/* 000179 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000179 */ 					var e = __except0__;
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu0__ = e;
/* 000183 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node, __kwargtrans__ ({what: '{} (delayed render)'.format ((function () {
/* 000183 */ 							var __accu1__ = node;
/* 000183 */ 							return __call__ (__accu1__.display_str, __accu1__);
/* 000183 */ 						}) ())}));
/* 000183 */ 					}) ();
/* 000185 */ 					if (__t__ (node.latex_walker.what)) {
/* 000186 */ 						(function () {
/* 000186 */ 							var __accu0__ = e;
/* 000186 */ 							return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node, __kwargtrans__ ({what: node.latex_walker.what}));
/* 000186 */ 						}) ();
/* 000186 */ 					}
/* 000190 */ 					var __except1__ = e;
/* 000190 */ 					__except1__.__cause__ = null;
/* 000190 */ 					throw __except1__;
/* 000190 */ 				}
/* 000190 */ 				else if (isinstance (__except0__, ValueError)) {
/* 000190 */ 					var e = __except0__;
/* 000192 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000192 */ 					__except1__.__cause__ = null;
/* 000192 */ 					throw __except1__;
/* 000192 */ 				}
/* 000192 */ 				else {
/* 000192 */ 					throw __except0__;
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000196 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000203 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000203 */ 				if (arguments.length) {
/* 000203 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 							switch (__attrib0__) {
/* 000203 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 							}
/* 000203 */ 						}
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 				else {
/* 000203 */ 				}
/* 000204 */ 				return (function () {
/* 000204 */ 					var __accu0__ = fragment_renderer;
/* 000204 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000204 */ 				}) ();
/* 000204 */ 			});
/* 000209 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000211 */ 				var value = (function () {
/* 000211 */ 					var __accu0__ = [];
/* 000213 */ 					var __iterable0__ = (function () {
/* 000213 */ 						var __accu1__ = value;
/* 000213 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000213 */ 					}) ();
/* 000213 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 						var k = __left0__ [0];
/* 000213 */ 						var s = __left0__ [1];
/* 000213 */ 						(function () {
/* 000213 */ 							var __accu1__ = __accu0__;
/* 000212 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000212 */ 						}) ();
/* 000212 */ 					}
/* 000212 */ 					return dict (__accu0__);
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000215 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000216 */ 				var value = (function () {
/* 000216 */ 					var __accu0__ = [];
/* 000216 */ 					var __iterable0__ = value;
/* 000216 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000216 */ 						(function () {
/* 000216 */ 							var __accu1__ = __accu0__;
/* 000216 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000216 */ 						}) ();
/* 000216 */ 					}
/* 000216 */ 					return __accu0__;
/* 000216 */ 				}) ();
/* 000216 */ 			}
/* 000217 */ 			else {
/* 000218 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000218 */ 			}
/* 000218 */ 		}
/* 000219 */ 		else {
/* 000223 */ 			(function () {
/* 000223 */ 				var __accu0__ = render_context;
/* 000223 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000223 */ 			}) ();
/* 000224 */ 			var value = (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000224 */ 			}) ();
/* 000224 */ 		}
/* 000228 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000228 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000228 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000228 */ 			var feature_name = __left0__ [0];
/* 000228 */ 			var feature_render_manager = __left0__ [1];
/* 000229 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000230 */ 				(function () {
/* 000230 */ 					var __accu0__ = feature_render_manager;
/* 000230 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000230 */ 				}) ();
/* 000230 */ 			}
/* 000230 */ 		}
/* 000232 */ 		(function () {
/* 000232 */ 			var __accu0__ = fragment_renderer;
/* 000232 */ 			return __call__ (__accu0__.document_render_finish, __accu0__, render_context);
/* 000232 */ 		}) ();
/* 000234 */ 		// pass;
/* 000238 */ 		return tuple ([value, render_context]);
/* 000238 */ 	});}
/* 000238 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmdocument.map