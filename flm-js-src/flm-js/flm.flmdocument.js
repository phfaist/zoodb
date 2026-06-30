/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:23
/* 000025 */ var logging = {};
/* 000025 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000030 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000028 */ import {LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000025 */ import * as __module_logging__ from './logging.js';
/* 000025 */ __nest__ (logging, '', __module_logging__);
/* 000025 */ export {FLMRenderContext, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.flmdocument';
/* 000026 */ export var logger = (function () {
/* 000026 */ 	var __accu0__ = logging;
/* 000026 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000026 */ }) ();
/* 000033 */ export var FLMDocumentRenderContext =  __class__ ('FLMDocumentRenderContext', [FLMRenderContext], {
/* 000033 */ 	__module__: __name__,
/* 000039 */ 	get __init__ () {return __get__ (this, function (self, doc, fragment_renderer, feature_document_managers) {
/* 000039 */ 		var kwargs = dict ();
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'feature_document_managers': var feature_document_managers = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 				delete kwargs.__kwargtrans__;
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		__call__ (__call__ (__super__, null, FLMDocumentRenderContext, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({doc: doc, fragment_renderer: fragment_renderer}, kwargs)));
/* 000041 */ 		self.feature_document_managers = feature_document_managers;
/* 000042 */ 		self.feature_render_managers = (function () {
/* 000042 */ 			var __accu0__ = [];
/* 000042 */ 			var __iterable0__ = self.feature_document_managers;
/* 000042 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000046 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000046 */ 				var feature_name = __left0__ [0];
/* 000046 */ 				var fdm = __left0__ [1];
/* 000046 */ 				(function () {
/* 000046 */ 					var __accu1__ = __accu0__;
/* 000043 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (__t__ (fdm !== null) && fdm.RenderManager !== null) ? tuple ([feature_name, (function () {
/* 000043 */ 						var __accu2__ = fdm;
/* 000043 */ 						return __call__ (__accu2__.RenderManager, __accu2__, fdm, self);
/* 000043 */ 					}) ()]) : tuple ([feature_name, null])));
/* 000043 */ 				}) ();
/* 000043 */ 			}
/* 000043 */ 			return __accu0__;
/* 000043 */ 		}) ();
/* 000048 */ 		self.feature_render_managers_by_name = __call__ (dict, null, self.feature_render_managers);
/* 000052 */ 		self.is_first_pass = true;
/* 000053 */ 		self._delayed_render_nodes = dict ({});
/* 000054 */ 		self._delayed_render_content = dict ({});
/* 000063 */ 		self.data = dict ({});
/* 000063 */ 	});},
/* 000066 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000074 */ 		return __in__ (feature_name, self.feature_render_managers_by_name);
/* 000074 */ 	});},
/* 000076 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000087 */ 		return __getitem__ (self.feature_render_managers_by_name, feature_name);
/* 000087 */ 	});},
/* 000089 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000105 */ 		var key = node._flm_node_id;
/* 000106 */ 		__setitem__ (self._delayed_render_nodes, key, node);
/* 000107 */ 		return key;
/* 000107 */ 	});},
/* 000109 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000123 */ 		var key = node._flm_node_id;
/* 000124 */ 		return __getitem__ (self._delayed_render_content, key);
/* 000124 */ 	});},
/* 000126 */ 	get make_standalone_fragment () {return __get__ (this, function (self, flm_text) {
/* 000126 */ 		var kwargs = dict ();
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 				delete kwargs.__kwargtrans__;
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = self.doc.environment;
/* 000140 */ 			return __call__ (__accu0__.make_fragment, __accu0__, flm_text, __kwargtrans__ (__mergekwargtrans__ ({standalone_mode: true}, kwargs)));
/* 000140 */ 		}) ();
/* 000140 */ 	});}
/* 000140 */ });
/* 000149 */ export var FLMDocument =  __class__ ('FLMDocument', [object], {
/* 000149 */ 	__module__: __name__,
/* 000172 */ 	_flmtyping_is: 'FLMDocument',
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, render_callback, environment, enable_features, feature_document_options, metadata) {
/* 000174 */ 		if (typeof enable_features == 'undefined' || (enable_features != null && enable_features.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var enable_features = null;
/* 000174 */ 		};
/* 000174 */ 		if (typeof feature_document_options == 'undefined' || (feature_document_options != null && feature_document_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var feature_document_options = null;
/* 000174 */ 		};
/* 000174 */ 		if (typeof metadata == 'undefined' || (metadata != null && metadata.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var metadata = null;
/* 000174 */ 		};
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'feature_document_options': var feature_document_options = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'metadata': var metadata = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000182 */ 		__call__ (__call__ (__super__, null, FLMDocument, '__init__'), null, self);
/* 000185 */ 		self.environment = environment;
/* 000186 */ 		self.render_callback = render_callback;
/* 000189 */ 		self.metadata = metadata;
/* 000192 */ 		self.features = (function () {
/* 000192 */ 			var __accu0__ = self.environment;
/* 000192 */ 			return __call__ (__accu0__.get_features_selection, __accu0__, enable_features);
/* 000192 */ 		}) ();
/* 000196 */ 		if (__t__ (feature_document_options === null)) {
/* 000197 */ 			var feature_document_options = dict ({});
/* 000197 */ 		}
/* 000198 */ 		self.feature_document_options = __call__ (dict, null, feature_document_options);
/* 000200 */ 		self.feature_document_managers = (function () {
/* 000200 */ 			var __accu0__ = [];
/* 000200 */ 			var __iterable0__ = self.features;
/* 000200 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000204 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 				(function () {
/* 000204 */ 					var __accu1__ = __accu0__;
/* 000201 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (f.DocumentManager !== null) ? tuple ([f.feature_name, (function () {
/* 000201 */ 						var __accu2__ = f;
/* 000201 */ 						return __call__ (__accu2__.DocumentManager, __accu2__, f, self);
/* 000201 */ 					}) ()]) : tuple ([f.feature_name, null])));
/* 000201 */ 				}) ();
/* 000201 */ 			}
/* 000201 */ 			return __accu0__;
/* 000201 */ 		}) ();
/* 000206 */ 		self.feature_document_managers_by_name = __call__ (dict, null, self.feature_document_managers);
/* 000206 */ 	});},
/* 000211 */ 	get initialize () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000221 */ 		var __iterable0__ = self.feature_document_managers;
/* 000221 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000221 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000221 */ 			var feature_name = __left0__ [0];
/* 000221 */ 			var feature_document_manager = __left0__ [1];
/* 000222 */ 			if (__t__ (feature_document_manager !== null)) {
/* 000223 */ 				var feature_options = (function () {
/* 000223 */ 					var __accu0__ = self.feature_document_options;
/* 000223 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, dict ({}));
/* 000223 */ 				}) ();
/* 000224 */ 				(function () {
/* 000224 */ 					var __accu0__ = feature_document_manager;
/* 000224 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000224 */ 				}) ();
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 	});},
/* 000226 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000233 */ 		return __in__ (feature_name, self.feature_document_managers_by_name);
/* 000233 */ 	});},
/* 000235 */ 	get feature_document_manager () {return __get__ (this, function (self, feature_name) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000244 */ 		return __getitem__ (self.feature_document_managers_by_name, feature_name);
/* 000244 */ 	});},
/* 000246 */ 	get make_render_context () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000246 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000246 */ 			var feature_render_options = null;
/* 000246 */ 		};
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000260 */ 		var render_context = __call__ (FLMDocumentRenderContext, null, self, fragment_renderer, self.feature_document_managers);
/* 000266 */ 		if (__t__ (feature_render_options === null)) {
/* 000267 */ 			var feature_render_options = dict ({});
/* 000267 */ 		}
/* 000270 */ 		var feature_render_options = __call__ (dict, null, feature_render_options);
/* 000272 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000272 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000272 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000272 */ 			var feature_name = __left0__ [0];
/* 000272 */ 			var feature_render_manager = __left0__ [1];
/* 000273 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000274 */ 				var feature_options = (function () {
/* 000274 */ 					var __accu0__ = feature_render_options;
/* 000274 */ 					return __call__ (__accu0__.py_get, __accu0__, feature_name, __call__ (dict, null));
/* 000274 */ 				}) ();
/* 000275 */ 				(function () {
/* 000275 */ 					var __accu0__ = feature_render_manager;
/* 000275 */ 					return __call__ (__accu0__.initialize, __accu0__, __kwargtrans__ (feature_options));
/* 000275 */ 				}) ();
/* 000275 */ 			}
/* 000275 */ 		}
/* 000276 */ 		return render_context;
/* 000276 */ 	});},
/* 000278 */ 	get render () {return __get__ (this, function (self, fragment_renderer, feature_render_options) {
/* 000278 */ 		if (typeof feature_render_options == 'undefined' || (feature_render_options != null && feature_render_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000278 */ 			var feature_render_options = null;
/* 000278 */ 		};
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'feature_render_options': var feature_render_options = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000306 */ 		var render_context = (function () {
/* 000306 */ 			var __accu0__ = self;
/* 000306 */ 			return __call__ (__accu0__.make_render_context, __accu0__, fragment_renderer, __kwargtrans__ ({feature_render_options: feature_render_options}));
/* 000306 */ 		}) ();
/* 000311 */ 		(function () {
/* 000311 */ 			var __accu0__ = fragment_renderer;
/* 000311 */ 			return __call__ (__accu0__.document_render_start, __accu0__, render_context);
/* 000311 */ 		}) ();
/* 000314 */ 		var value = (function () {
/* 000314 */ 			var __accu0__ = self;
/* 000314 */ 			return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000314 */ 		}) ();
/* 000315 */ 		if (__t__ (value === null)) {
/* 000316 */ 			(function () {
/* 000316 */ 				var __accu0__ = logger;
/* 000316 */ 				return __call__ (__accu0__.warning, __accu0__, 'The FLM document render callback function returned `None`! Did you forget a ‘return ...’ instruction?');
/* 000316 */ 			}) ();
/* 000316 */ 		}
/* 000319 */ 		// pass;
/* 000326 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000326 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000326 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000326 */ 			var feature_name = __left0__ [0];
/* 000326 */ 			var feature_render_manager = __left0__ [1];
/* 000327 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000328 */ 				(function () {
/* 000328 */ 					var __accu0__ = feature_render_manager;
/* 000328 */ 					return __call__ (__accu0__.process, __accu0__, value);
/* 000328 */ 				}) ();
/* 000328 */ 			}
/* 000328 */ 		}
/* 000332 */ 		var __iterable0__ = (function () {
/* 000332 */ 			var __accu0__ = render_context._delayed_render_nodes;
/* 000332 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000332 */ 		}) ();
/* 000332 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000332 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000332 */ 			var key = __left0__ [0];
/* 000332 */ 			var node = __left0__ [1];
/* 000336 */ 			try {
/* 000338 */ 				__setitem__ (render_context._delayed_render_content, key, (function () {
/* 000338 */ 					var __accu0__ = node.flm_specinfo;
/* 000338 */ 					return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000338 */ 				}) ());
/* 000338 */ 			}
/* 000338 */ 			catch (__except0__) {
/* 000338 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000338 */ 					var e = __except0__;
/* 000340 */ 					(function () {
/* 000340 */ 						var __accu0__ = e;
/* 000342 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node, __kwargtrans__ ({what: '{} (delayed render)'.format ((function () {
/* 000342 */ 							var __accu1__ = node;
/* 000342 */ 							return __call__ (__accu1__.display_str, __accu1__);
/* 000342 */ 						}) ())}));
/* 000342 */ 					}) ();
/* 000344 */ 					if (__t__ (node.latex_walker.what)) {
/* 000345 */ 						(function () {
/* 000345 */ 							var __accu0__ = e;
/* 000345 */ 							return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node, __kwargtrans__ ({what: node.latex_walker.what}));
/* 000345 */ 						}) ();
/* 000345 */ 					}
/* 000349 */ 					var __except1__ = e;
/* 000349 */ 					__except1__.__cause__ = null;
/* 000349 */ 					throw __except1__;
/* 000349 */ 				}
/* 000349 */ 				else if (isinstance (__except0__, ValueError)) {
/* 000349 */ 					var e = __except0__;
/* 000351 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000351 */ 					__except1__.__cause__ = null;
/* 000351 */ 					throw __except1__;
/* 000351 */ 				}
/* 000351 */ 				else {
/* 000351 */ 					throw __except0__;
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000355 */ 		if (__t__ (fragment_renderer.supports_delayed_render_markers)) {
/* 000362 */ 			var fix_string_fn = (function __lambda__ (s) {
/* 000362 */ 				if (arguments.length) {
/* 000362 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 							switch (__attrib0__) {
/* 000362 */ 								case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 							}
/* 000362 */ 						}
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 				else {
/* 000362 */ 				}
/* 000363 */ 				return (function () {
/* 000363 */ 					var __accu0__ = fragment_renderer;
/* 000363 */ 					return __call__ (__accu0__.replace_delayed_markers_with_final_values, __accu0__, s, render_context._delayed_render_content);
/* 000363 */ 				}) ();
/* 000363 */ 			});
/* 000368 */ 			if (__t__ (__call__ (isinstance, null, value, dict))) {
/* 000370 */ 				var value = (function () {
/* 000370 */ 					var __accu0__ = [];
/* 000372 */ 					var __iterable0__ = (function () {
/* 000372 */ 						var __accu1__ = value;
/* 000372 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000372 */ 					}) ();
/* 000372 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 						var k = __left0__ [0];
/* 000372 */ 						var s = __left0__ [1];
/* 000372 */ 						(function () {
/* 000372 */ 							var __accu1__ = __accu0__;
/* 000371 */ 							return __call__ (__accu1__.append, __accu1__, [k, __call__ (fix_string_fn, null, s)]);
/* 000371 */ 						}) ();
/* 000371 */ 					}
/* 000371 */ 					return dict (__accu0__);
/* 000371 */ 				}) ();
/* 000371 */ 			}
/* 000374 */ 			else if (__t__ (__call__ (isinstance, null, value, list))) {
/* 000375 */ 				var value = (function () {
/* 000375 */ 					var __accu0__ = [];
/* 000375 */ 					var __iterable0__ = value;
/* 000375 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000375 */ 						var x = __getitem__ (__iterable0__, __index0__);
/* 000375 */ 						(function () {
/* 000375 */ 							var __accu1__ = __accu0__;
/* 000375 */ 							return __call__ (__accu1__.append, __accu1__, __call__ (fix_string_fn, null, x));
/* 000375 */ 						}) ();
/* 000375 */ 					}
/* 000375 */ 					return __accu0__;
/* 000375 */ 				}) ();
/* 000375 */ 			}
/* 000376 */ 			else {
/* 000377 */ 				var value = __call__ (fix_string_fn, null, value);
/* 000377 */ 			}
/* 000377 */ 		}
/* 000378 */ 		else {
/* 000382 */ 			(function () {
/* 000382 */ 				var __accu0__ = render_context;
/* 000382 */ 				return __call__ (__accu0__.set_render_pass, __accu0__, 'second-pass');
/* 000382 */ 			}) ();
/* 000383 */ 			var value = (function () {
/* 000383 */ 				var __accu0__ = self;
/* 000383 */ 				return __call__ (__accu0__.render_callback, __accu0__, render_context);
/* 000383 */ 			}) ();
/* 000383 */ 		}
/* 000387 */ 		var __iterable0__ = render_context.feature_render_managers;
/* 000387 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000387 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000387 */ 			var feature_name = __left0__ [0];
/* 000387 */ 			var feature_render_manager = __left0__ [1];
/* 000388 */ 			if (__t__ (feature_render_manager !== null)) {
/* 000389 */ 				(function () {
/* 000389 */ 					var __accu0__ = feature_render_manager;
/* 000389 */ 					return __call__ (__accu0__.postprocess, __accu0__, value);
/* 000389 */ 				}) ();
/* 000389 */ 			}
/* 000389 */ 		}
/* 000391 */ 		(function () {
/* 000391 */ 			var __accu0__ = fragment_renderer;
/* 000391 */ 			return __call__ (__accu0__.document_render_finish, __accu0__, render_context);
/* 000391 */ 		}) ();
/* 000393 */ 		// pass;
/* 000397 */ 		return tuple ([value, render_context]);
/* 000397 */ 	});}
/* 000397 */ });
/* 000025 */ 
//# sourceMappingURL=flm.flmdocument.map