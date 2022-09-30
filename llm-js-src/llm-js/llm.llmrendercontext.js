/* 000001 */ // Transcrypt'ed from Python, 2022-09-30 23:10:27
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'llm.llmrendercontext';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000012 */ export var LLMRenderContext =  __class__ ('LLMRenderContext', [object], {
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
/* 000019 */ 		__call__ (__call__ (__super__, null, LLMRenderContext, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000020 */ 		self.doc = doc;
/* 000021 */ 		self.fragment_renderer = fragment_renderer;
/* 000022 */ 		self.pass_name = null;
/* 000023 */ 		self.is_first_pass = true;
/* 000024 */ 		self._logical_state = dict ({});
/* 000024 */ 	});},
/* 000026 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000027 */ 		return false;
/* 000027 */ 	});},
/* 000029 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000029 */ 		if (arguments.length) {
/* 000029 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000029 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000029 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000029 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000029 */ 					switch (__attrib0__) {
/* 000029 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					}
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 		else {
/* 000029 */ 		}
/* 000030 */ 		return null;
/* 000030 */ 	});},
/* 000032 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000033 */ 		__except0__.__cause__ = null;
/* 000033 */ 		throw __except0__;
/* 000033 */ 	});},
/* 000035 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000036 */ 		__except0__.__cause__ = null;
/* 000036 */ 		throw __except0__;
/* 000036 */ 	});},
/* 000038 */ 	get set_render_pass () {return __get__ (this, function (self, pass_name) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'pass_name': var pass_name = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		self.pass_name = pass_name;
/* 000040 */ 		if (__t__ (pass_name === null)) {
/* 000041 */ 			self.is_first_pass = true;
/* 000041 */ 		}
/* 000042 */ 		else {
/* 000043 */ 			self.is_first_pass = false;
/* 000043 */ 		}
/* 000043 */ 	});},
/* 000045 */ 	get get_logical_state () {return __get__ (this, function (self, domainname) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000062 */ 		if (__t__ (!__in__ (domainname, self._logical_state))) {
/* 000063 */ 			__setitem__ (self._logical_state, domainname, dict ({}));
/* 000063 */ 		}
/* 000065 */ 		return __getitem__ (self._logical_state, domainname);
/* 000065 */ 	});},
/* 000067 */ 	get push_logical_state () {return __get__ (this, function (self, domainname, propname, value) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000074 */ 		return __call__ (_RenderContextPushLogicalState, null, self, domainname, propname, value);
/* 000074 */ 	});}
/* 000074 */ });
/* 000077 */ export var _RenderContextPushLogicalState =  __class__ ('_RenderContextPushLogicalState', [object], {
/* 000077 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, render_context, domainname, propname, value) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, _RenderContextPushLogicalState, '__init__'), null, self);
/* 000080 */ 		self.render_context = render_context;
/* 000081 */ 		self.domainname = domainname;
/* 000082 */ 		self.propname = propname;
/* 000083 */ 		self.value = value;
/* 000083 */ 	});},
/* 000085 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000086 */ 		var state = (function () {
/* 000086 */ 			var __accu0__ = self.render_context;
/* 000086 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000086 */ 		}) ();
/* 000087 */ 		if (__t__ (__in__ (self.propname, state))) {
/* 000088 */ 			self.old_value_exists = true;
/* 000089 */ 			self.old_value = __getitem__ (state, self.propname);
/* 000089 */ 		}
/* 000090 */ 		else {
/* 000091 */ 			self.old_value_exists = false;
/* 000092 */ 			self.old_value = null;
/* 000092 */ 		}
/* 000095 */ 		__setitem__ (state, self.propname, self.value);
/* 000095 */ 	});},
/* 000097 */ 	get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, traceback) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		var state = (function () {
/* 000098 */ 			var __accu0__ = self.render_context;
/* 000098 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000098 */ 		}) ();
/* 000099 */ 		if (__t__ (!__t__ ((self.old_value_exists)))) {
/* 000100 */ 			(function () {
/* 000100 */ 				var __accu0__ = state;
/* 000100 */ 				return __call__ (__accu0__.py_pop, __accu0__, self.propname);
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000101 */ 		else {
/* 000102 */ 			__setitem__ (state, self.propname, self.old_value);
/* 000102 */ 		}
/* 000102 */ 	});}
/* 000102 */ });
/* 000108 */ export var LLMStandaloneModeRenderContext =  __class__ ('LLMStandaloneModeRenderContext', [LLMRenderContext], {
/* 000108 */ 	__module__: __name__,
/* 000110 */ 	is_standalone_mode: true,
/* 000112 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000113 */ 		__call__ (__call__ (__super__, null, LLMStandaloneModeRenderContext, '__init__'), null, self, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
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
/* 000116 */ 		return false;
/* 000116 */ 	});},
/* 000118 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
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
/* 000119 */ 		var __except0__ = __call__ (ValueError, null, 'There are no document features when rendering LLM text in standalone mode (reqested ‘{}’)'.format (feature_name));
/* 000119 */ 		__except0__.__cause__ = null;
/* 000119 */ 		throw __except0__;
/* 000119 */ 	});},
/* 000124 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot render nodes with delayed content in standalone mode'.format ());
/* 000125 */ 		__except0__.__cause__ = null;
/* 000125 */ 		throw __except0__;
/* 000125 */ 	});},
/* 000129 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		var __except0__ = __call__ (ValueError, null, "There's no delayed render content in standalone mode".format ());
/* 000130 */ 		__except0__.__cause__ = null;
/* 000130 */ 		throw __except0__;
/* 000130 */ 	});}
/* 000130 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmrendercontext.map