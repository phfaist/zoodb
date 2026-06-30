/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:23
/* 000019 */ var logging = {};
/* 000019 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000023 */ import {FeatureRenderManagerBase} from './flm.feature._base.js';
/* 000022 */ import {Hashable, Mapping, TypeFLMDocument, TypeFragmentRenderer, TypeNodeId} from './flm._typing_helpers.js';
/* 000019 */ import * as __module_logging__ from './logging.js';
/* 000019 */ __nest__ (logging, '', __module_logging__);
/* 000019 */ export {TypeFragmentRenderer, TypeNodeId, Hashable, FeatureRenderManagerBase, TypeFLMDocument, Mapping};
/* 000001 */ var __name__ = 'flm.flmrendercontext';
/* 000020 */ export var logger = (function () {
/* 000020 */ 	var __accu0__ = logging;
/* 000020 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000020 */ }) ();
/* 000026 */ export var FLMRenderContext =  __class__ ('FLMRenderContext', [object], {
/* 000026 */ 	__module__: __name__,
/* 000044 */ 	is_standalone_mode: false,
/* 000046 */ 	is_first_pass: true,
/* 000048 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000048 */ 		var doc = null;
/* 000048 */ 		var kwargs = dict ();
/* 000048 */ 		if (arguments.length) {
/* 000048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 					switch (__attrib0__) {
/* 000048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'doc': var doc = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000048 */ 					}
/* 000048 */ 				}
/* 000048 */ 				delete kwargs.__kwargtrans__;
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 		else {
/* 000048 */ 		}
/* 000064 */ 		__call__ (__call__ (__super__, null, FLMRenderContext, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000065 */ 		self.doc = doc;
/* 000066 */ 		self.fragment_renderer = fragment_renderer;
/* 000067 */ 		self.pass_name = null;
/* 000068 */ 		self.is_first_pass = true;
/* 000069 */ 		self._logical_state = dict ({});
/* 000071 */ 		self._nodes_determined_as_delayed = dict ({});
/* 000071 */ 	});},
/* 000074 */ 	_flmtyping_is: 'FLMRenderContext',
/* 000076 */ 	doc: null,
/* 000077 */ 	fragment_renderer: null,
/* 000078 */ 	pass_name: null,
/* 000079 */ 	_nodes_determined_as_delayed: dict ({}),
/* 000081 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000083 */ 		return false;
/* 000083 */ 	});},
/* 000085 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000087 */ 		return null;
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
/* 000091 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000091 */ 		__except0__.__cause__ = null;
/* 000091 */ 		throw __except0__;
/* 000091 */ 	});},
/* 000093 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000095 */ 		var __except0__ = __call__ (RuntimeError, null, 'This render context does not support delayed rendering');
/* 000095 */ 		__except0__.__cause__ = null;
/* 000095 */ 		throw __except0__;
/* 000095 */ 	});},
/* 000097 */ 	get get_is_delayed_render () {return __get__ (this, function (self, node) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000110 */ 		if (__t__ (__in__ (node._flm_node_id, self._nodes_determined_as_delayed))) {
/* 000111 */ 			return __getitem__ (self._nodes_determined_as_delayed, node._flm_node_id);
/* 000111 */ 		}
/* 000113 */ 		var yn = node.flm_specinfo.delayed_render;
/* 000114 */ 		if (__t__ (__call__ (callable, null, yn))) {
/* 000115 */ 			var yn = __call__ (bool, null, __call__ (yn, null, node, self));
/* 000116 */ 			__setitem__ (self._nodes_determined_as_delayed, node._flm_node_id, yn);
/* 000116 */ 		}
/* 000117 */ 		else {
/* 000118 */ 			var yn = __call__ (bool, null, yn);
/* 000118 */ 		}
/* 000120 */ 		return yn;
/* 000120 */ 	});},
/* 000122 */ 	get set_render_pass () {return __get__ (this, function (self, pass_name) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'pass_name': var pass_name = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000134 */ 		self.pass_name = pass_name;
/* 000135 */ 		if (__t__ (pass_name === null)) {
/* 000136 */ 			self.is_first_pass = true;
/* 000136 */ 		}
/* 000137 */ 		else {
/* 000138 */ 			self.is_first_pass = false;
/* 000138 */ 		}
/* 000138 */ 	});},
/* 000140 */ 	get get_logical_state () {return __get__ (this, function (self, domainname) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000157 */ 		if (__t__ (!__in__ (domainname, self._logical_state))) {
/* 000158 */ 			__setitem__ (self._logical_state, domainname, dict ({}));
/* 000158 */ 		}
/* 000160 */ 		return __getitem__ (self._logical_state, domainname);
/* 000160 */ 	});},
/* 000162 */ 	get push_logical_state () {return __get__ (this, function (self, domainname, propname, value) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000173 */ 		return __call__ (_RenderContextPushLogicalState, null, self, domainname, propname, value);
/* 000173 */ 	});}
/* 000173 */ });
/* 000176 */ export var _RenderContextPushLogicalState =  __class__ ('_RenderContextPushLogicalState', [object], {
/* 000176 */ 	__module__: __name__,
/* 000177 */ 	get __init__ () {return __get__ (this, function (self, render_context, domainname, propname, value) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'domainname': var domainname = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'propname': var propname = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		__call__ (__call__ (__super__, null, _RenderContextPushLogicalState, '__init__'), null, self);
/* 000179 */ 		self.render_context = render_context;
/* 000180 */ 		self.domainname = domainname;
/* 000181 */ 		self.propname = propname;
/* 000182 */ 		self.value = value;
/* 000182 */ 	});},
/* 000184 */ 	get __enter__ () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		var state = (function () {
/* 000185 */ 			var __accu0__ = self.render_context;
/* 000185 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000185 */ 		}) ();
/* 000186 */ 		if (__t__ (__in__ (self.propname, state))) {
/* 000187 */ 			self.old_value_exists = true;
/* 000188 */ 			self.old_value = __getitem__ (state, self.propname);
/* 000188 */ 		}
/* 000189 */ 		else {
/* 000190 */ 			self.old_value_exists = false;
/* 000191 */ 			self.old_value = null;
/* 000191 */ 		}
/* 000194 */ 		__setitem__ (state, self.propname, self.value);
/* 000194 */ 	});},
/* 000196 */ 	get __exit__ () {return __get__ (this, function (self, exc_type, exc_value, traceback) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'exc_type': var exc_type = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'exc_value': var exc_value = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'traceback': var traceback = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		var state = (function () {
/* 000197 */ 			var __accu0__ = self.render_context;
/* 000197 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, self.domainname);
/* 000197 */ 		}) ();
/* 000198 */ 		if (__t__ (!__t__ ((self.old_value_exists)))) {
/* 000199 */ 			(function () {
/* 000199 */ 				var __accu0__ = state;
/* 000199 */ 				return __call__ (__accu0__.py_pop, __accu0__, self.propname);
/* 000199 */ 			}) ();
/* 000199 */ 		}
/* 000200 */ 		else {
/* 000201 */ 			__setitem__ (state, self.propname, self.old_value);
/* 000201 */ 		}
/* 000201 */ 	});}
/* 000201 */ });
/* 000207 */ export var FLMStandaloneModeRenderContext =  __class__ ('FLMStandaloneModeRenderContext', [FLMRenderContext], {
/* 000207 */ 	__module__: __name__,
/* 000216 */ 	is_standalone_mode: true,
/* 000218 */ 	get __init__ () {return __get__ (this, function (self, fragment_renderer) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000219 */ 		__call__ (__call__ (__super__, null, FLMStandaloneModeRenderContext, '__init__'), null, self, __kwargtrans__ ({fragment_renderer: fragment_renderer}));
/* 000219 */ 	});},
/* 000221 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		return false;
/* 000222 */ 	});},
/* 000224 */ 	get feature_render_manager () {return __get__ (this, function (self, feature_name) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		var __except0__ = __call__ (ValueError, null, 'There are no document features when rendering FLM text in standalone mode (reqested ‘{}’)'.format (feature_name));
/* 000225 */ 		__except0__.__cause__ = null;
/* 000225 */ 		throw __except0__;
/* 000225 */ 	});},
/* 000230 */ 	get register_delayed_render () {return __get__ (this, function (self, node, fragment_renderer) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot render nodes with delayed content in standalone mode'.format ());
/* 000231 */ 		__except0__.__cause__ = null;
/* 000231 */ 		throw __except0__;
/* 000231 */ 	});},
/* 000235 */ 	get get_delayed_render_content () {return __get__ (this, function (self, node) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		var __except0__ = __call__ (ValueError, null, "There's no delayed render content in standalone mode".format ());
/* 000236 */ 		__except0__.__cause__ = null;
/* 000236 */ 		throw __except0__;
/* 000236 */ 	});}
/* 000236 */ });
/* 000019 */ 
//# sourceMappingURL=flm.flmrendercontext.map