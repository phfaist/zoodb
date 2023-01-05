/* 000001 */ // Transcrypt'ed from Python, 2023-01-05 22:41:20
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
/* 000006 */ export {latexnodes_parsers, LLMFragment, LLMArgumentSpec, Feature, LLMMacroSpecBase, LatexWalkerParseError, ParsedArgumentsInfo};
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
/* 000083 */ var hexstr = (v) => (+v).toString(16);
/* 000091 */ export var _rx_unsafe_char = (function () {
/* 000091 */ 	var __accu0__ = re;
/* 000091 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000091 */ }) ();
/* 000092 */ export var _rx_match_safechar = function (m) {
/* 000092 */ 	if (arguments.length) {
/* 000092 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 				switch (__attrib0__) {
/* 000092 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 	}
/* 000092 */ 	else {
/* 000092 */ 	}
/* 000093 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000093 */ 		var __accu0__ = m;
/* 000093 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000093 */ 	}) ())));
/* 000093 */ };
/* 000095 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000095 */ 	if (arguments.length) {
/* 000095 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 				switch (__attrib0__) {
/* 000095 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 	}
/* 000095 */ 	else {
/* 000095 */ 	}
/* 000096 */ 	var ref_type_safe = (function () {
/* 000096 */ 		var __accu0__ = _rx_unsafe_char;
/* 000096 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000096 */ 	}) ();
/* 000097 */ 	var ref_label_safe = (function () {
/* 000097 */ 		var __accu0__ = _rx_unsafe_char;
/* 000097 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000097 */ 	}) ();
/* 000098 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000098 */ };
/* 000103 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000103 */ 	__module__: __name__,
/* 000105 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000105 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000105 */ 			var add_external_ref_resolvers = null;
/* 000105 */ 		};
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		self.ref_labels = dict ({});
/* 000107 */ 		self.registered_references = dict ({});
/* 000108 */ 		self.external_ref_resolvers = [];
/* 000109 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000110 */ 			(function () {
/* 000110 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000110 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000110 */ 			}) ();
/* 000110 */ 		}
/* 000111 */ 		(function () {
/* 000111 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000111 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000111 */ 		}) ();
/* 000111 */ 	});},
/* 000113 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000115 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000116 */ 			return ;
/* 000116 */ 		}
/* 000118 */ 		var target_href = __add__ ('#', (function () {
/* 000118 */ 			var __accu0__ = referenceable_info;
/* 000118 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000118 */ 		}) ());
/* 000120 */ 		var __iterable0__ = referenceable_info.labels;
/* 000120 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000120 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000120 */ 			var ref_type = __left0__ [0];
/* 000120 */ 			var ref_label = __left0__ [1];
/* 000121 */ 			(function () {
/* 000121 */ 				var __accu0__ = self;
/* 000121 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text, node: node, target_href: target_href}));
/* 000121 */ 			}) ();
/* 000121 */ 		}
/* 000121 */ 	});},
/* 000129 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000143 */ 		var node_id = (function () {
/* 000143 */ 			var __accu0__ = self;
/* 000143 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000143 */ 		}) ();
/* 000144 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000145 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000146 */ 			return self.registered_references;
/* 000146 */ 		}
/* 000148 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000149 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000149 */ 			__except0__.__cause__ = null;
/* 000149 */ 			throw __except0__;
/* 000149 */ 		}
/* 000153 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_llm_text: formatted_ref_llm_text, target_href: target_href}));
/* 000159 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000160 */ 		self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000161 */ 		// pass;
/* 000164 */ 		return refinstance;
/* 000164 */ 	});},
/* 000167 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000168 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000169 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000169 */ 		}
/* 000171 */ 		// pass;
/* 000177 */ 		// pass;
/* 000181 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000181 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 			// pass;
/* 000185 */ 			var ref = (function () {
/* 000185 */ 				var __accu0__ = resolver;
/* 000185 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000185 */ 			}) ();
/* 000191 */ 			// pass;
/* 000194 */ 			if (__t__ (ref !== null)) {
/* 000195 */ 				return ref;
/* 000195 */ 			}
/* 000195 */ 		}
/* 000198 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label));
/* 000198 */ 		__except0__.__cause__ = null;
/* 000198 */ 		throw __except0__;
/* 000198 */ 	});},
/* 000202 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_llm, resource_info, render_context) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'display_content_llm': var display_content_llm = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000205 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000207 */ 		try {
/* 000208 */ 			var ref_instance = (function () {
/* 000208 */ 				var __accu0__ = self;
/* 000208 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000208 */ 			}) ();
/* 000208 */ 		}
/* 000208 */ 		catch (__except0__) {
/* 000208 */ 			if (isinstance (__except0__, Exception)) {
/* 000208 */ 				var e = __except0__;
/* 000210 */ 				// pass;
/* 000216 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000216 */ 				__except1__.__cause__ = null;
/* 000216 */ 				throw __except1__;
/* 000216 */ 			}
/* 000216 */ 			else {
/* 000216 */ 				throw __except0__;
/* 000216 */ 			}
/* 000216 */ 		}
/* 000219 */ 		if (__t__ (display_content_llm === null)) {
/* 000220 */ 			var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000220 */ 		}
/* 000222 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_llm, LLMFragment))))) {
/* 000223 */ 			var display_content_llm = (function () {
/* 000223 */ 				var __accu0__ = render_context.doc.environment;
/* 000223 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_llm, __kwargtrans__ ({standalone_mode: true}));
/* 000223 */ 			}) ();
/* 000223 */ 		}
/* 000228 */ 		var display_content_nodelist = display_content_llm.nodes;
/* 000230 */ 		return (function () {
/* 000230 */ 			var __accu0__ = fragment_renderer;
/* 000230 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000230 */ 		}) ();
/* 000230 */ 	});}
/* 000230 */ });
/* 000244 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000244 */ 	__module__: __name__,
/* 000250 */ 	feature_name: 'refs',
/* 000251 */ 	RenderManager: FeatureRefsRenderManager,
/* 000253 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000253 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var external_ref_resolvers = null;
/* 000253 */ 		};
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000256 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000257 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000257 */ 		}
/* 000258 */ 		else {
/* 000259 */ 			self.external_ref_resolvers = [];
/* 000259 */ 		}
/* 000260 */ 		// pass;
/* 000260 */ 	});},
/* 000265 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000266 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000267 */ 			(function () {
/* 000267 */ 				var __accu0__ = logger;
/* 000267 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000269 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000269 */ 	});},
/* 000271 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		(function () {
/* 000272 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000272 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000272 */ 		}) ();
/* 000272 */ 	});},
/* 000274 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000278 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000278 */ 	});},
/* 000287 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000290 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000290 */ 	});}
/* 000290 */ });
/* 000295 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000295 */ 	var __accu0__ = latexnodes_parsers;
/* 000295 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000298 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000298 */ 	var __accu0__ = latexnodes_parsers;
/* 000298 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000303 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000307 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000307 */ 	__module__: __name__,
/* 000309 */ 	delayed_render: true,
/* 000311 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000311 */ 		var ref_type = 'ref';
/* 000311 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000320 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000320 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000320 */ 		}) ()}));
/* 000322 */ 		self.ref_type = ref_type;
/* 000323 */ 		self.command_arguments = (function () {
/* 000323 */ 			var __accu0__ = [];
/* 000323 */ 			var __iterable0__ = command_arguments;
/* 000323 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000323 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000323 */ 				(function () {
/* 000323 */ 					var __accu1__ = __accu0__;
/* 000323 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000323 */ 						var __accu2__ = c;
/* 000323 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000323 */ 					}) ());
/* 000323 */ 				}) ();
/* 000323 */ 			}
/* 000323 */ 			return __accu0__;
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000326 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000327 */ 		return (function () {
/* 000327 */ 			var __accu0__ = [];
/* 000327 */ 			var __iterable0__ = command_arguments;
/* 000327 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000328 */ 				(function () {
/* 000328 */ 					var __accu1__ = __accu0__;
/* 000328 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000328 */ 				}) ();
/* 000328 */ 			}
/* 000328 */ 			return __accu0__;
/* 000328 */ 		}) ();
/* 000328 */ 	});},
/* 000330 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000332 */ 		var node_args = (function () {
/* 000332 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000332 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000332 */ 		}) ();
/* 000336 */ 		var ref_type = null;
/* 000337 */ 		var ref_label = (function () {
/* 000337 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000337 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000337 */ 		}) ();
/* 000338 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000339 */ 			var __left0__ = (function () {
/* 000339 */ 				var __accu0__ = ref_label;
/* 000339 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000339 */ 			}) ();
/* 000339 */ 			var ref_type = __left0__ [0];
/* 000339 */ 			var ref_label = __left0__ [1];
/* 000339 */ 		}
/* 000341 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000342 */ 			var display_content_nodelist = (function () {
/* 000342 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000342 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000342 */ 			}) ();
/* 000342 */ 		}
/* 000343 */ 		else {
/* 000344 */ 			var display_content_nodelist = null;
/* 000344 */ 		}
/* 000346 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000347 */ 		node.llm_ref_info = dict ({'ref_type_and_target': tuple ([ref_type, ref_label]), 'display_content_nodelist': display_content_nodelist});
/* 000347 */ 	});},
/* 000353 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		// pass;
/* 000354 */ 	});},
/* 000356 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000358 */ 		var __left0__ = __getitem__ (node.llm_ref_info, 'ref_type_and_target');
/* 000358 */ 		var ref_type = __left0__ [0];
/* 000358 */ 		var ref_label = __left0__ [1];
/* 000359 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000361 */ 		var mgr = (function () {
/* 000361 */ 			var __accu0__ = render_context;
/* 000361 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000361 */ 		}) ();
/* 000363 */ 		var resource_info = node.latex_walker.resource_info;
/* 000365 */ 		try {
/* 000366 */ 			return (function () {
/* 000366 */ 				var __accu0__ = mgr;
/* 000366 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, render_context);
/* 000366 */ 			}) ();
/* 000366 */ 		}
/* 000366 */ 		catch (__except0__) {
/* 000366 */ 			if (isinstance (__except0__, Exception)) {
/* 000366 */ 				var e = __except0__;
/* 000370 */ 				(function () {
/* 000370 */ 					var __accu0__ = logger;
/* 000371 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000371 */ 						var __accu1__ = node;
/* 000371 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000371 */ 					}) (), (function () {
/* 000371 */ 						var __accu1__ = node;
/* 000371 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000371 */ 					}) ()));
/* 000371 */ 				}) ();
/* 000372 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000372 */ 				__except1__.__cause__ = null;
/* 000372 */ 				throw __except1__;
/* 000372 */ 			}
/* 000372 */ 			else {
/* 000372 */ 				throw __except0__;
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 	});}
/* 000372 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map