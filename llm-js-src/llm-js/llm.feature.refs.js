/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:22:59
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000021 */ import {Feature} from './llm.feature._base.js';
/* 000019 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000018 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000017 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000011 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LLMArgumentSpec, LatexWalkerParseError, LLMMacroSpecBase, ParsedArgumentsInfo, LLMFragment, latexnodes_parsers, Feature};
/* 000001 */ var __name__ = 'llm.feature.refs';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var ReferenceableInfo =  __class__ ('ReferenceableInfo', [object], {
/* 000026 */ 	__module__: __name__,
/* 000027 */ 	get __init__ () {return __get__ (this, function (self, formatted_ref_llm_text, labels) {
/* 000027 */ 		if (arguments.length) {
/* 000027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000027 */ 					switch (__attrib0__) {
/* 000027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 					}
/* 000027 */ 				}
/* 000027 */ 			}
/* 000027 */ 		}
/* 000027 */ 		else {
/* 000027 */ 		}
/* 000028 */ 		__call__ (__call__ (__super__, null, ReferenceableInfo, '__init__'), null, self);
/* 000029 */ 		self.formatted_ref_llm_text = formatted_ref_llm_text;
/* 000030 */ 		self.labels = labels;
/* 000032 */ 		self._fields = tuple (['formatted_ref_llm_text', 'labels']);
/* 000032 */ 	});},
/* 000034 */ 	get get_target_id () {return __get__ (this, function (self) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000036 */ 		if (__t__ (!__t__ ((self.labels)))) {
/* 000037 */ 			return null;
/* 000037 */ 		}
/* 000039 */ 		var __left0__ = __getitem__ (self.labels, 0);
/* 000039 */ 		var lbl_ref_type = __left0__ [0];
/* 000039 */ 		var lbl_ref_label = __left0__ [1];
/* 000040 */ 		return __call__ (get_safe_target_id, null, lbl_ref_type, lbl_ref_label);
/* 000040 */ 	});},
/* 000043 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000046 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000046 */ 			var __accu0__ = ', ';
/* 000046 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000046 */ 				var __accu1__ = [];
/* 000046 */ 				var __iterable0__ = self._fields;
/* 000046 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000046 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000046 */ 					(function () {
/* 000046 */ 						var __accu2__ = __accu1__;
/* 000046 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000046 */ 					}) ();
/* 000046 */ 				}
/* 000046 */ 				return py_iter (__accu1__);
/* 000046 */ 			}) ());
/* 000046 */ 		}) ()), ')');
/* 000046 */ 	});}
/* 000046 */ });
/* 000052 */ export var RefInstance =  __class__ ('RefInstance', [object], {
/* 000052 */ 	__module__: __name__,
/* 000053 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_llm_text, target_href) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000055 */ 		self.ref_type = ref_type;
/* 000056 */ 		self.ref_label = ref_label;
/* 000057 */ 		self.formatted_ref_llm_text = formatted_ref_llm_text;
/* 000058 */ 		self.target_href = target_href;
/* 000060 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_llm_text', 'target_href']);
/* 000060 */ 	});},
/* 000062 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000065 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000065 */ 			var __accu0__ = ', ';
/* 000065 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000065 */ 				var __accu1__ = [];
/* 000065 */ 				var __iterable0__ = self._fields;
/* 000065 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000065 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000065 */ 					(function () {
/* 000065 */ 						var __accu2__ = __accu1__;
/* 000065 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000065 */ 					}) ();
/* 000065 */ 				}
/* 000065 */ 				return py_iter (__accu1__);
/* 000065 */ 			}) ());
/* 000065 */ 		}) ()), ')');
/* 000065 */ 	});}
/* 000065 */ });
/* 000073 */ export var _rx_unsafe_char = (function () {
/* 000073 */ 	var __accu0__ = re;
/* 000073 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000073 */ }) ();
/* 000074 */ export var _rx_match_safechar = function (m) {
/* 000074 */ 	if (arguments.length) {
/* 000074 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 				switch (__attrib0__) {
/* 000074 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 	}
/* 000074 */ 	else {
/* 000074 */ 	}
/* 000075 */ 	return '_{}X'.format (__call__ (ord, null, (function () {
/* 000075 */ 		var __accu0__ = m;
/* 000075 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000075 */ 	}) ()));
/* 000075 */ };
/* 000077 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000077 */ 	if (arguments.length) {
/* 000077 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 				switch (__attrib0__) {
/* 000077 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 	}
/* 000077 */ 	else {
/* 000077 */ 	}
/* 000078 */ 	var ref_type_safe = (function () {
/* 000078 */ 		var __accu0__ = _rx_unsafe_char;
/* 000078 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000078 */ 	}) ();
/* 000079 */ 	var ref_label_safe = (function () {
/* 000079 */ 		var __accu0__ = _rx_unsafe_char;
/* 000079 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000079 */ 	}) ();
/* 000080 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000080 */ };
/* 000085 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000085 */ 	__module__: __name__,
/* 000087 */ 	get initialize () {return __get__ (this, function (self) {
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000088 */ 		self.ref_labels = dict ({});
/* 000089 */ 		self.registered_references = dict ({});
/* 000090 */ 		self.external_ref_resolvers = self.feature.external_ref_resolvers;
/* 000090 */ 	});},
/* 000092 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000094 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000095 */ 			return ;
/* 000095 */ 		}
/* 000097 */ 		var target_href = __add__ ('#', (function () {
/* 000097 */ 			var __accu0__ = referenceable_info;
/* 000097 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000097 */ 		}) ());
/* 000099 */ 		var __iterable0__ = referenceable_info.labels;
/* 000099 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000099 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000099 */ 			var ref_type = __left0__ [0];
/* 000099 */ 			var ref_label = __left0__ [1];
/* 000100 */ 			(function () {
/* 000100 */ 				var __accu0__ = self;
/* 000100 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text, node: node, target_href: target_href}));
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000100 */ 	});},
/* 000108 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000122 */ 		var node_id = (function () {
/* 000122 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000122 */ 		}) ();
/* 000123 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000124 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000125 */ 			return self.registered_references;
/* 000125 */ 		}
/* 000127 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000128 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000128 */ 			__except0__.__cause__ = null;
/* 000128 */ 			throw __except0__;
/* 000128 */ 		}
/* 000132 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_llm_text: formatted_ref_llm_text, target_href: target_href}));
/* 000138 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000139 */ 		self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000140 */ 		// pass;
/* 000143 */ 		return refinstance;
/* 000143 */ 	});},
/* 000146 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000148 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000148 */ 		}
/* 000150 */ 		// pass;
/* 000155 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000155 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000156 */ 			var ref = (function () {
/* 000156 */ 				var __accu0__ = resolver;
/* 000156 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000156 */ 			}) ();
/* 000161 */ 			if (__t__ (ref !== null)) {
/* 000162 */ 				return ref;
/* 000162 */ 			}
/* 000162 */ 		}
/* 000164 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target not found: ‘{}:{}’'.format (ref_type, ref_label));
/* 000164 */ 		__except0__.__cause__ = null;
/* 000164 */ 		throw __except0__;
/* 000164 */ 	});}
/* 000164 */ });
/* 000168 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000168 */ 	__module__: __name__,
/* 000174 */ 	feature_name: 'refs',
/* 000175 */ 	RenderManager: FeatureRefsRenderManager,
/* 000177 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000177 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000177 */ 			var external_ref_resolvers = null;
/* 000177 */ 		};
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000180 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000180 */ 	});},
/* 000182 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		if (__t__ (self.external_ref_resolvers !== null)) {
/* 000184 */ 			(function () {
/* 000184 */ 				var __accu0__ = logger;
/* 000184 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000184 */ 			}) ();
/* 000184 */ 		}
/* 000186 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000186 */ 	});},
/* 000188 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000189 */ 		(function () {
/* 000189 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000189 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000189 */ 		}) ();
/* 000189 */ 	});},
/* 000191 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000195 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000195 */ 	});}
/* 000195 */ });
/* 000204 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000204 */ 	var __accu0__ = latexnodes_parsers;
/* 000204 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000207 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000207 */ 	var __accu0__ = latexnodes_parsers;
/* 000207 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000212 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000216 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000216 */ 	__module__: __name__,
/* 000218 */ 	delayed_render: true,
/* 000220 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000220 */ 		var ref_type = 'ref';
/* 000220 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000229 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000229 */ 			var __accu0__ = self;
/* 000229 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000229 */ 		}) ()}));
/* 000231 */ 		self.ref_type = ref_type;
/* 000232 */ 		self.command_arguments = (function () {
/* 000232 */ 			var __accu0__ = [];
/* 000232 */ 			var __iterable0__ = command_arguments;
/* 000232 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000232 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000232 */ 				(function () {
/* 000232 */ 					var __accu1__ = __accu0__;
/* 000232 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000232 */ 						var __accu2__ = c;
/* 000232 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000232 */ 					}) ());
/* 000232 */ 				}) ();
/* 000232 */ 			}
/* 000232 */ 			return __accu0__;
/* 000232 */ 		}) ();
/* 000232 */ 	});},
/* 000235 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (self, command_arguments) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = [];
/* 000236 */ 			var __iterable0__ = command_arguments;
/* 000236 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000237 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu1__ = __accu0__;
/* 000237 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000237 */ 			return __accu0__;
/* 000237 */ 		}) ();
/* 000237 */ 	});},
/* 000239 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000241 */ 		var node_args = (function () {
/* 000241 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000241 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000241 */ 		}) ();
/* 000245 */ 		var ref_type = null;
/* 000246 */ 		var ref_label = (function () {
/* 000246 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000246 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000246 */ 		}) ();
/* 000247 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000248 */ 			var __left0__ = (function () {
/* 000248 */ 				var __accu0__ = ref_label;
/* 000248 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000248 */ 			}) ();
/* 000248 */ 			var ref_type = __left0__ [0];
/* 000248 */ 			var ref_label = __left0__ [1];
/* 000248 */ 		}
/* 000250 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000251 */ 			var display_content_nodelist = (function () {
/* 000251 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000251 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000251 */ 			}) ();
/* 000251 */ 		}
/* 000252 */ 		else {
/* 000253 */ 			var display_content_nodelist = null;
/* 000253 */ 		}
/* 000255 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000256 */ 		node.llm_ref_info = dict ({'ref_type_and_target': tuple ([ref_type, ref_label]), 'display_content_nodelist': display_content_nodelist});
/* 000256 */ 	});},
/* 000262 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		// pass;
/* 000263 */ 	});},
/* 000265 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000267 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000269 */ 		var __left0__ = __getitem__ (node.llm_ref_info, 'ref_type_and_target');
/* 000269 */ 		var ref_type = __left0__ [0];
/* 000269 */ 		var ref_label = __left0__ [1];
/* 000270 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000272 */ 		var mgr = (function () {
/* 000272 */ 			var __accu0__ = render_context;
/* 000272 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000272 */ 		}) ();
/* 000274 */ 		var resource_info = node.latex_walker.resource_info;
/* 000276 */ 		try {
/* 000277 */ 			var ref_instance = (function () {
/* 000277 */ 				var __accu0__ = mgr;
/* 000277 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000277 */ 			}) ();
/* 000277 */ 		}
/* 000277 */ 		catch (__except0__) {
/* 000277 */ 			if (isinstance (__except0__, Exception)) {
/* 000277 */ 				var e = __except0__;
/* 000279 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000279 */ 				__except1__.__cause__ = null;
/* 000279 */ 				throw __except1__;
/* 000279 */ 			}
/* 000279 */ 			else {
/* 000279 */ 				throw __except0__;
/* 000279 */ 			}
/* 000279 */ 		}
/* 000284 */ 		if (__t__ (display_content_nodelist === null)) {
/* 000285 */ 			if (__t__ (__call__ (isinstance, null, ref_instance.formatted_ref_llm_text, LLMFragment))) {
/* 000286 */ 				var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000286 */ 			}
/* 000287 */ 			else {
/* 000288 */ 				var display_content_llm = (function () {
/* 000288 */ 					var __accu0__ = render_context.doc.environment;
/* 000288 */ 					return __call__ (__accu0__.make_fragment, __accu0__, ref_instance.formatted_ref_llm_text, __kwargtrans__ ({standalone_mode: true}));
/* 000288 */ 				}) ();
/* 000288 */ 			}
/* 000292 */ 			var display_content_nodelist = display_content_llm.nodes;
/* 000292 */ 		}
/* 000295 */ 		return (function () {
/* 000295 */ 			var __accu0__ = fragment_renderer;
/* 000295 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000295 */ 		}) ();
/* 000295 */ 	});}
/* 000295 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map