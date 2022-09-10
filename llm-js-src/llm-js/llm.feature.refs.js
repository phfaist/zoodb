/* 000001 */ // Transcrypt'ed from Python, 2022-09-10 12:43:46
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
/* 000006 */ export {LLMFragment, latexnodes_parsers, ParsedArgumentsInfo, Feature, LatexWalkerParseError, LLMArgumentSpec, LLMMacroSpecBase};
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
/* 000042 */ 	get asdict () {return __get__ (this, function (self) {
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		return (function () {
/* 000043 */ 			var __accu0__ = [];
/* 000043 */ 			var __iterable0__ = self._fields;
/* 000043 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000043 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000043 */ 				(function () {
/* 000043 */ 					var __accu1__ = __accu0__;
/* 000043 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000043 */ 				}) ();
/* 000043 */ 			}
/* 000043 */ 			return dict (__accu0__);
/* 000043 */ 		}) ();
/* 000043 */ 	});},
/* 000045 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000048 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000048 */ 			var __accu0__ = ', ';
/* 000048 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000048 */ 				var __accu1__ = [];
/* 000048 */ 				var __iterable0__ = self._fields;
/* 000048 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000048 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000048 */ 					(function () {
/* 000048 */ 						var __accu2__ = __accu1__;
/* 000048 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000048 */ 					}) ();
/* 000048 */ 				}
/* 000048 */ 				return py_iter (__accu1__);
/* 000048 */ 			}) ());
/* 000048 */ 		}) ()), ')');
/* 000048 */ 	});}
/* 000048 */ });
/* 000054 */ export var RefInstance =  __class__ ('RefInstance', [object], {
/* 000054 */ 	__module__: __name__,
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_llm_text, target_href) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000056 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000057 */ 		self.ref_type = ref_type;
/* 000058 */ 		self.ref_label = ref_label;
/* 000059 */ 		self.formatted_ref_llm_text = formatted_ref_llm_text;
/* 000060 */ 		self.target_href = target_href;
/* 000062 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_llm_text', 'target_href']);
/* 000062 */ 	});},
/* 000064 */ 	get asdict () {return __get__ (this, function (self) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000065 */ 		return (function () {
/* 000065 */ 			var __accu0__ = [];
/* 000065 */ 			var __iterable0__ = self._fields;
/* 000065 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000065 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000065 */ 				(function () {
/* 000065 */ 					var __accu1__ = __accu0__;
/* 000065 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000065 */ 				}) ();
/* 000065 */ 			}
/* 000065 */ 			return dict (__accu0__);
/* 000065 */ 		}) ();
/* 000065 */ 	});},
/* 000067 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000070 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000070 */ 			var __accu0__ = ', ';
/* 000070 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000070 */ 				var __accu1__ = [];
/* 000070 */ 				var __iterable0__ = self._fields;
/* 000070 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000070 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000070 */ 					(function () {
/* 000070 */ 						var __accu2__ = __accu1__;
/* 000070 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000070 */ 					}) ();
/* 000070 */ 				}
/* 000070 */ 				return py_iter (__accu1__);
/* 000070 */ 			}) ());
/* 000070 */ 		}) ()), ')');
/* 000070 */ 	});}
/* 000070 */ });
/* 000078 */ export var _rx_unsafe_char = (function () {
/* 000078 */ 	var __accu0__ = re;
/* 000078 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000078 */ }) ();
/* 000079 */ export var _rx_match_safechar = function (m) {
/* 000079 */ 	if (arguments.length) {
/* 000079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 				switch (__attrib0__) {
/* 000079 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 	}
/* 000080 */ 	return '_{}X'.format (__call__ (ord, null, (function () {
/* 000080 */ 		var __accu0__ = m;
/* 000080 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000080 */ 	}) ()));
/* 000080 */ };
/* 000082 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000082 */ 	if (arguments.length) {
/* 000082 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 				switch (__attrib0__) {
/* 000082 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 	}
/* 000082 */ 	else {
/* 000082 */ 	}
/* 000083 */ 	var ref_type_safe = (function () {
/* 000083 */ 		var __accu0__ = _rx_unsafe_char;
/* 000083 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000083 */ 	}) ();
/* 000084 */ 	var ref_label_safe = (function () {
/* 000084 */ 		var __accu0__ = _rx_unsafe_char;
/* 000084 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000084 */ 	}) ();
/* 000085 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000085 */ };
/* 000090 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000090 */ 	__module__: __name__,
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
/* 000093 */ 		self.ref_labels = dict ({});
/* 000094 */ 		self.registered_references = dict ({});
/* 000095 */ 		self.external_ref_resolvers = self.feature.external_ref_resolvers;
/* 000095 */ 	});},
/* 000097 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000099 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000100 */ 			return ;
/* 000100 */ 		}
/* 000102 */ 		var target_href = __add__ ('#', (function () {
/* 000102 */ 			var __accu0__ = referenceable_info;
/* 000102 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000102 */ 		}) ());
/* 000104 */ 		var __iterable0__ = referenceable_info.labels;
/* 000104 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000104 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000104 */ 			var ref_type = __left0__ [0];
/* 000104 */ 			var ref_label = __left0__ [1];
/* 000105 */ 			(function () {
/* 000105 */ 				var __accu0__ = self;
/* 000105 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text, node: node, target_href: target_href}));
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000105 */ 	});},
/* 000113 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000127 */ 		var node_id = (function () {
/* 000127 */ 			var __accu0__ = self;
/* 000127 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000127 */ 		}) ();
/* 000128 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000129 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000130 */ 			return self.registered_references;
/* 000130 */ 		}
/* 000132 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000133 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000133 */ 			__except0__.__cause__ = null;
/* 000133 */ 			throw __except0__;
/* 000133 */ 		}
/* 000137 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_llm_text: formatted_ref_llm_text, target_href: target_href}));
/* 000143 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000144 */ 		self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000145 */ 		// pass;
/* 000148 */ 		return refinstance;
/* 000148 */ 	});},
/* 000151 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000152 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000153 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000153 */ 		}
/* 000155 */ 		// pass;
/* 000160 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000160 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000160 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 			var ref = (function () {
/* 000161 */ 				var __accu0__ = resolver;
/* 000161 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000161 */ 			}) ();
/* 000166 */ 			if (__t__ (ref !== null)) {
/* 000167 */ 				return ref;
/* 000167 */ 			}
/* 000167 */ 		}
/* 000169 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target not found: ‘{}:{}’'.format (ref_type, ref_label));
/* 000169 */ 		__except0__.__cause__ = null;
/* 000169 */ 		throw __except0__;
/* 000169 */ 	});}
/* 000169 */ });
/* 000173 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000173 */ 	__module__: __name__,
/* 000179 */ 	feature_name: 'refs',
/* 000180 */ 	RenderManager: FeatureRefsRenderManager,
/* 000182 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000182 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000182 */ 			var external_ref_resolvers = null;
/* 000182 */ 		};
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
/* 000183 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000185 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000185 */ 	});},
/* 000187 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000188 */ 		if (__t__ (self.external_ref_resolvers !== null)) {
/* 000189 */ 			(function () {
/* 000189 */ 				var __accu0__ = logger;
/* 000189 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000189 */ 			}) ();
/* 000189 */ 		}
/* 000191 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000191 */ 	});},
/* 000193 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		(function () {
/* 000194 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000194 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000194 */ 		}) ();
/* 000194 */ 	});},
/* 000196 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000200 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000200 */ 	});}
/* 000200 */ });
/* 000209 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000209 */ 	var __accu0__ = latexnodes_parsers;
/* 000209 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000212 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000212 */ 	var __accu0__ = latexnodes_parsers;
/* 000212 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000217 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000221 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000221 */ 	__module__: __name__,
/* 000223 */ 	delayed_render: true,
/* 000225 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000225 */ 		var ref_type = 'ref';
/* 000225 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000234 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000234 */ 		}) ()}));
/* 000236 */ 		self.ref_type = ref_type;
/* 000237 */ 		self.command_arguments = (function () {
/* 000237 */ 			var __accu0__ = [];
/* 000237 */ 			var __iterable0__ = command_arguments;
/* 000237 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000237 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu1__ = __accu0__;
/* 000237 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000237 */ 						var __accu2__ = c;
/* 000237 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000237 */ 					}) ());
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000237 */ 			return __accu0__;
/* 000237 */ 		}) ();
/* 000237 */ 	});},
/* 000240 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (self, command_arguments) {
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000241 */ 		return (function () {
/* 000241 */ 			var __accu0__ = [];
/* 000241 */ 			var __iterable0__ = command_arguments;
/* 000241 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000242 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000242 */ 				(function () {
/* 000242 */ 					var __accu1__ = __accu0__;
/* 000242 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000242 */ 				}) ();
/* 000242 */ 			}
/* 000242 */ 			return __accu0__;
/* 000242 */ 		}) ();
/* 000242 */ 	});},
/* 000244 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000246 */ 		var node_args = (function () {
/* 000246 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000246 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000246 */ 		}) ();
/* 000250 */ 		var ref_type = null;
/* 000251 */ 		var ref_label = (function () {
/* 000251 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000251 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000251 */ 		}) ();
/* 000252 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000253 */ 			var __left0__ = (function () {
/* 000253 */ 				var __accu0__ = ref_label;
/* 000253 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000253 */ 			}) ();
/* 000253 */ 			var ref_type = __left0__ [0];
/* 000253 */ 			var ref_label = __left0__ [1];
/* 000253 */ 		}
/* 000255 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000256 */ 			var display_content_nodelist = (function () {
/* 000256 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000256 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000256 */ 			}) ();
/* 000256 */ 		}
/* 000257 */ 		else {
/* 000258 */ 			var display_content_nodelist = null;
/* 000258 */ 		}
/* 000260 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000261 */ 		node.llm_ref_info = dict ({'ref_type_and_target': tuple ([ref_type, ref_label]), 'display_content_nodelist': display_content_nodelist});
/* 000261 */ 	});},
/* 000267 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		// pass;
/* 000268 */ 	});},
/* 000270 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000270 */ 		if (arguments.length) {
/* 000270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 					switch (__attrib0__) {
/* 000270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 			}
/* 000270 */ 		}
/* 000270 */ 		else {
/* 000270 */ 		}
/* 000272 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000274 */ 		var __left0__ = __getitem__ (node.llm_ref_info, 'ref_type_and_target');
/* 000274 */ 		var ref_type = __left0__ [0];
/* 000274 */ 		var ref_label = __left0__ [1];
/* 000275 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000277 */ 		var mgr = (function () {
/* 000277 */ 			var __accu0__ = render_context;
/* 000277 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000277 */ 		}) ();
/* 000279 */ 		var resource_info = node.latex_walker.resource_info;
/* 000281 */ 		try {
/* 000282 */ 			var ref_instance = (function () {
/* 000282 */ 				var __accu0__ = mgr;
/* 000282 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000282 */ 			}) ();
/* 000282 */ 		}
/* 000282 */ 		catch (__except0__) {
/* 000282 */ 			if (isinstance (__except0__, Exception)) {
/* 000282 */ 				var e = __except0__;
/* 000284 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000284 */ 				__except1__.__cause__ = null;
/* 000284 */ 				throw __except1__;
/* 000284 */ 			}
/* 000284 */ 			else {
/* 000284 */ 				throw __except0__;
/* 000284 */ 			}
/* 000284 */ 		}
/* 000289 */ 		if (__t__ (display_content_nodelist === null)) {
/* 000290 */ 			if (__t__ (__call__ (isinstance, null, ref_instance.formatted_ref_llm_text, LLMFragment))) {
/* 000291 */ 				var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000291 */ 			}
/* 000292 */ 			else {
/* 000293 */ 				var display_content_llm = (function () {
/* 000293 */ 					var __accu0__ = render_context.doc.environment;
/* 000293 */ 					return __call__ (__accu0__.make_fragment, __accu0__, ref_instance.formatted_ref_llm_text, __kwargtrans__ ({standalone_mode: true}));
/* 000293 */ 				}) ();
/* 000293 */ 			}
/* 000297 */ 			var display_content_nodelist = display_content_llm.nodes;
/* 000297 */ 		}
/* 000300 */ 		return (function () {
/* 000300 */ 			var __accu0__ = fragment_renderer;
/* 000300 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000300 */ 		}) ();
/* 000300 */ 	});}
/* 000300 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map