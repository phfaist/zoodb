/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:09
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'flm.flmrendercontext';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000012 */ export var FLMRenderContext =  __class__ ('FLMRenderContext', [object], {
/* 000012 */ 	__module__: __name__,
/* 000014 */ 	is_standalone_mode: false,
/* 000016 */ 	is_first_pass: true,
/* 000018 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000018 */ 		var doc = null;
/* 000018 */ 		var kwargs = dict ();
/* 000018 */ 		if (arguments.length) {
/* 000018 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000018 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000018 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000018 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000018 */ 					switch (__attrib0__) {
/* 000018 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000018 */ 					}
/* 000018 */ 				}
/* 000018 */ 				delete kwargs.__kwargtrans__;
/* 000018 */ 			}
/* 000018 */ 		}
/* 000018 */ 		else {
/* 000018 */ 		}
/* 000019 */ 		__call__ (__call__ (__super__, null, FLMRenderContext, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000020 */ 		self.doc = doc;
/* 000021 */ 		self.fragment_renderer = fragment_renderer;
/* 000022 */ 		self.pass_name = null;
/* 000023 */ 		self.is_first_pass = true;
/* 000024 */ 		self._logical_state = dict ({});
/* 000026 */ 		self._nodes_determined_as_delayed = dict ({});
/* 000026 */ 	});},
/* 000028 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000029 */ 		return false;
/* 000029 */ 	});},
/* 000031 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
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
/* 000032 */ 		return null;
/* 000032 */ 	});},
/* 000034 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000035 */ 		__except0__.__cause__ = null;
/* 000035 */ 		throw __except0__;
/* 000035 */ 	});},
/* 000037 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000038 */ 		__except0__.__cause__ = null;
/* 000038 */ 		throw __except0__;
/* 000038 */ 	});},
/* 000040 */ 	get get_is_delayed_render () {return __get__ (this, function (self, node) {
/* 000040 */ 		if (arguments.length) {
/* 000040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 					switch (__attrib0__) {
/* 000040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 		else {
/* 000040 */ 		}
/* 000041 */ 		if (__t__ (__in__ (node._flm_node_id, self._nodes_determined_as_delayed))) {
/* 000042 */ 			return __getitem__ (self._nodes_determined_as_delayed, node._flm_node_id);
/* 000042 */ 		}
/* 000044 */ 		var yn = node.flm_specinfo.delayed_render;
/* 000045 */ 		if (__t__ (__call__ (callable, null, yn))) {
/* 000046 */ 			var yn = __call__ (yn, null, node, render_context);
/* 000047 */ 			__setitem__ (self._nodes_determined_as_delayed, node._flm_node_id, yn);
/* 000047 */ 		}
/* 000049 */ 		return yn;
/* 000049 */ 	});},
/* 000051 */ 	get set_render_pass () {return __get__ (this, function (self, pass_name) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'pass_name': var pass_name = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000052 */ 		self.pass_name = pass_name;
/* 000053 */ 		if (__t__ (pass_name === null)) {
/* 000054 */ 			self.is_first_pass = true;
/* 000054 */ 		}
/* 000055 */ 		else {
/* 000056 */ 			self.is_first_pass = false;
/* 000056 */ 		}
/* 000056 */ 	});},
/* 000058 */ 	get get_logical_state () {return __get__ (this, function (self, domainname) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000075 */ 		if (__t__ (!__in__ (domainname, self._logical_state))) {
/* 000076 */ 			__setitem__ (self._logical_state, domainname, dict ({}));
/* 000076 */ 		}
/* 000078 */ 		return __getitem__ (self._logical_state, domainname);
/* 000078 */ 	});},
/* 000080 */ 	get push_logical_state () {return __get__ (this, function (self, domainname, propname, value) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000091 */ 		return __call__ (_RenderContextPushLogicalState, null, self, domainname, propname, value);
/* 000091 */ 	});}
/* 000091 */ });
/* 000094 */ export var _RenderContextPushLogicalState =  __class__ ('_RenderContextPushLogicalState', [object], {
/* 000094 */ 	__module__: __name__,
/* 000095 */ 	get __init__ () {return __get__ (this, function (self, render_context, domainname, propname, value) {
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000096 */ 		__call__ (__call__ (__super__, null, _RenderContextPushLogicalState, '__init__'), null, self);
/* 000097 */ 		self.render_context = render_context;
/* 000098 */ 		self.domainname = domainname;
/* 000099 */ 		self.propname = propname;
/* 000100 */ 		self.value = value;
/* 000100 */ 	});},
/* 000102 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000103 */ 		var state = (function () {
/* 000103 */ 			var __accu0__ = self.render_context;
/* 000103 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000103 */ 		}) ();
/* 000104 */ 		if (__t__ (__in__ (self.propname, state))) {
/* 000105 */ 			self.old_value_exists = true;
/* 000106 */ 			self.old_value = __getitem__ (state, self.propname);
/* 000106 */ 		}
/* 000107 */ 		else {
/* 000108 */ 			self.old_value_exists = false;
/* 000109 */ 			self.old_value = null;
/* 000109 */ 		}
/* 000112 */ 		__setitem__ (state, self.propname, self.value);
/* 000112 */ 	});},
/* 000114 */ 	get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, traceback) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		var state = (function () {
/* 000115 */ 			var __accu0__ = self.render_context;
/* 000115 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000115 */ 		}) ();
/* 000116 */ 		if (__t__ (!__t__ ((self.old_value_exists)))) {
/* 000117 */ 			(function () {
/* 000117 */ 				var __accu0__ = state;
/* 000117 */ 				return __call__ (__accu0__.py_pop, __accu0__, self.propname);
/* 000117 */ 			}) ();
/* 000117 */ 		}
/* 000118 */ 		else {
/* 000119 */ 			__setitem__ (state, self.propname, self.old_value);
/* 000119 */ 		}
/* 000119 */ 	});}
/* 000119 */ });
/* 000125 */ export var FLMStandaloneModeRenderContext =  __class__ ('FLMStandaloneModeRenderContext', [FLMRenderContext], {
/* 000125 */ 	__module__: __name__,
/* 000127 */ 	is_standalone_mode: true,
/* 000129 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		__call__ (__call__ (__super__, null, FLMStandaloneModeRenderContext, '__init__'), null, self, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000130 */ 	});},
/* 000132 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		return false;
/* 000133 */ 	});},
/* 000135 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		var __except0__ = __call__ (ValueError, null, 'There are no document features when rendering FLM text in standalone mode (reqested ‘{}’)'.format (feature_name));
/* 000136 */ 		__except0__.__cause__ = null;
/* 000136 */ 		throw __except0__;
/* 000136 */ 	});},
/* 000141 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000142 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot render nodes with delayed content in standalone mode'.format ());
/* 000142 */ 		__except0__.__cause__ = null;
/* 000142 */ 		throw __except0__;
/* 000142 */ 	});},
/* 000146 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		var __except0__ = __call__ (ValueError, null, "There's no delayed render content in standalone mode".format ());
/* 000147 */ 		__except0__.__cause__ = null;
/* 000147 */ 		throw __except0__;
/* 000147 */ 	});}
/* 000147 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmrendercontext.map