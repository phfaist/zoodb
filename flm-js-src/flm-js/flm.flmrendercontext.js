/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:21
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000041 */ 		if (__t__ (__in__ (node.node_id, self._nodes_determined_as_delayed))) {
/* 000042 */ 			return __getitem__ (self._nodes_determined_as_delayed, node.node_id);
/* 000042 */ 		}
/* 000044 */ 		var yn = node.flm_specinfo.delayed_render;
/* 000045 */ 		if (__t__ (__call__ (callable, null, yn))) {
/* 000046 */ 			var yn = __call__ (yn, null, node, render_context);
/* 000047 */ 			__setitem__ (self._nodes_determined_as_delayed, node.node_id, yn);
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
/* 000087 */ 		return __call__ (_RenderContextPushLogicalState, null, self, domainname, propname, value);
/* 000087 */ 	});}
/* 000087 */ });
/* 000090 */ export var _RenderContextPushLogicalState =  __class__ ('_RenderContextPushLogicalState', [object], {
/* 000090 */ 	__module__: __name__,
/* 000091 */ 	get __init__ () {return __get__ (this, function (self, render_context, domainname, propname, value) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000092 */ 		__call__ (__call__ (__super__, null, _RenderContextPushLogicalState, '__init__'), null, self);
/* 000093 */ 		self.render_context = render_context;
/* 000094 */ 		self.domainname = domainname;
/* 000095 */ 		self.propname = propname;
/* 000096 */ 		self.value = value;
/* 000096 */ 	});},
/* 000098 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000099 */ 		var state = (function () {
/* 000099 */ 			var __accu0__ = self.render_context;
/* 000099 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000099 */ 		}) ();
/* 000100 */ 		if (__t__ (__in__ (self.propname, state))) {
/* 000101 */ 			self.old_value_exists = true;
/* 000102 */ 			self.old_value = __getitem__ (state, self.propname);
/* 000102 */ 		}
/* 000103 */ 		else {
/* 000104 */ 			self.old_value_exists = false;
/* 000105 */ 			self.old_value = null;
/* 000105 */ 		}
/* 000108 */ 		__setitem__ (state, self.propname, self.value);
/* 000108 */ 	});},
/* 000110 */ 	get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, traceback) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		var state = (function () {
/* 000111 */ 			var __accu0__ = self.render_context;
/* 000111 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000111 */ 		}) ();
/* 000112 */ 		if (__t__ (!__t__ ((self.old_value_exists)))) {
/* 000113 */ 			(function () {
/* 000113 */ 				var __accu0__ = state;
/* 000113 */ 				return __call__ (__accu0__.py_pop, __accu0__, self.propname);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000114 */ 		else {
/* 000115 */ 			__setitem__ (state, self.propname, self.old_value);
/* 000115 */ 		}
/* 000115 */ 	});}
/* 000115 */ });
/* 000121 */ export var FLMStandaloneModeRenderContext =  __class__ ('FLMStandaloneModeRenderContext', [FLMRenderContext], {
/* 000121 */ 	__module__: __name__,
/* 000123 */ 	is_standalone_mode: true,
/* 000125 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000126 */ 		__call__ (__call__ (__super__, null, FLMStandaloneModeRenderContext, '__init__'), null, self, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000126 */ 	});},
/* 000128 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		return false;
/* 000129 */ 	});},
/* 000131 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		var __except0__ = __call__ (ValueError, null, 'There are no document features when rendering FLM text in standalone mode (reqested ‘{}’)'.format (feature_name));
/* 000132 */ 		__except0__.__cause__ = null;
/* 000132 */ 		throw __except0__;
/* 000132 */ 	});},
/* 000137 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot render nodes with delayed content in standalone mode'.format ());
/* 000138 */ 		__except0__.__cause__ = null;
/* 000138 */ 		throw __except0__;
/* 000138 */ 	});},
/* 000142 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000143 */ 		var __except0__ = __call__ (ValueError, null, "There's no delayed render content in standalone mode".format ());
/* 000143 */ 		__except0__.__cause__ = null;
/* 000143 */ 		throw __except0__;
/* 000143 */ 	});}
/* 000143 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmrendercontext.map