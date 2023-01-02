/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:06:32
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
/* 000006 */ export {LLMArgumentSpec, LLMMacroSpecBase, latexnodes_parsers, ParsedArgumentsInfo, Feature, LLMFragment, LatexWalkerParseError};
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
/* 000105 */ 	get initialize () {return __get__ (this, function (self) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		self.ref_labels = dict ({});
/* 000107 */ 		self.registered_references = dict ({});
/* 000108 */ 		self.external_ref_resolvers = self.feature.external_ref_resolvers;
/* 000108 */ 	});},
/* 000110 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000112 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000113 */ 			return ;
/* 000113 */ 		}
/* 000115 */ 		var target_href = __add__ ('#', (function () {
/* 000115 */ 			var __accu0__ = referenceable_info;
/* 000115 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000115 */ 		}) ());
/* 000117 */ 		var __iterable0__ = referenceable_info.labels;
/* 000117 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000117 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000117 */ 			var ref_type = __left0__ [0];
/* 000117 */ 			var ref_label = __left0__ [1];
/* 000118 */ 			(function () {
/* 000118 */ 				var __accu0__ = self;
/* 000118 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text, node: node, target_href: target_href}));
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000118 */ 	});},
/* 000126 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000140 */ 		var node_id = (function () {
/* 000140 */ 			var __accu0__ = self;
/* 000140 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000140 */ 		}) ();
/* 000141 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000142 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000143 */ 			return self.registered_references;
/* 000143 */ 		}
/* 000145 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000146 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000146 */ 			__except0__.__cause__ = null;
/* 000146 */ 			throw __except0__;
/* 000146 */ 		}
/* 000150 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_llm_text: formatted_ref_llm_text, target_href: target_href}));
/* 000156 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000157 */ 		self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000158 */ 		// pass;
/* 000161 */ 		return refinstance;
/* 000161 */ 	});},
/* 000164 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000166 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000166 */ 		}
/* 000168 */ 		// pass;
/* 000174 */ 		// pass;
/* 000178 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000178 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000178 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000179 */ 			// pass;
/* 000182 */ 			var ref = (function () {
/* 000182 */ 				var __accu0__ = resolver;
/* 000182 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000182 */ 			}) ();
/* 000188 */ 			// pass;
/* 000191 */ 			if (__t__ (ref !== null)) {
/* 000192 */ 				return ref;
/* 000192 */ 			}
/* 000192 */ 		}
/* 000195 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label));
/* 000195 */ 		__except0__.__cause__ = null;
/* 000195 */ 		throw __except0__;
/* 000195 */ 	});},
/* 000199 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_llm, resource_info, render_context) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'display_content_llm': var display_content_llm = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000202 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000204 */ 		try {
/* 000205 */ 			var ref_instance = (function () {
/* 000205 */ 				var __accu0__ = self;
/* 000205 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000205 */ 			}) ();
/* 000205 */ 		}
/* 000205 */ 		catch (__except0__) {
/* 000205 */ 			if (isinstance (__except0__, Exception)) {
/* 000205 */ 				var e = __except0__;
/* 000207 */ 				// pass;
/* 000213 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000213 */ 				__except1__.__cause__ = null;
/* 000213 */ 				throw __except1__;
/* 000213 */ 			}
/* 000213 */ 			else {
/* 000213 */ 				throw __except0__;
/* 000213 */ 			}
/* 000213 */ 		}
/* 000216 */ 		if (__t__ (display_content_llm === null)) {
/* 000217 */ 			var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000217 */ 		}
/* 000219 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_llm, LLMFragment))))) {
/* 000220 */ 			var display_content_llm = (function () {
/* 000220 */ 				var __accu0__ = render_context.doc.environment;
/* 000220 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_llm, __kwargtrans__ ({standalone_mode: true}));
/* 000220 */ 			}) ();
/* 000220 */ 		}
/* 000225 */ 		var display_content_nodelist = display_content_llm.nodes;
/* 000227 */ 		return (function () {
/* 000227 */ 			var __accu0__ = fragment_renderer;
/* 000227 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000227 */ 		}) ();
/* 000227 */ 	});}
/* 000227 */ });
/* 000241 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000241 */ 	__module__: __name__,
/* 000247 */ 	feature_name: 'refs',
/* 000248 */ 	RenderManager: FeatureRefsRenderManager,
/* 000250 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000250 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000250 */ 			var external_ref_resolvers = null;
/* 000250 */ 		};
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000251 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000253 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000254 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000254 */ 		}
/* 000255 */ 		else {
/* 000256 */ 			self.external_ref_resolvers = [];
/* 000256 */ 		}
/* 000257 */ 		// pass;
/* 000257 */ 	});},
/* 000262 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000264 */ 			(function () {
/* 000264 */ 				var __accu0__ = logger;
/* 000264 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000264 */ 			}) ();
/* 000264 */ 		}
/* 000266 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000266 */ 	});},
/* 000268 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000269 */ 		(function () {
/* 000269 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000269 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000271 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000275 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000275 */ 	});},
/* 000284 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000287 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000287 */ 	});}
/* 000287 */ });
/* 000292 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000292 */ 	var __accu0__ = latexnodes_parsers;
/* 000292 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000295 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000295 */ 	var __accu0__ = latexnodes_parsers;
/* 000295 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000300 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000304 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000304 */ 	__module__: __name__,
/* 000306 */ 	delayed_render: true,
/* 000308 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000308 */ 		var ref_type = 'ref';
/* 000308 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000317 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000317 */ 			var __accu0__ = self;
/* 000317 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000317 */ 		}) ()}));
/* 000319 */ 		self.ref_type = ref_type;
/* 000320 */ 		self.command_arguments = (function () {
/* 000320 */ 			var __accu0__ = [];
/* 000320 */ 			var __iterable0__ = command_arguments;
/* 000320 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000320 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000320 */ 				(function () {
/* 000320 */ 					var __accu1__ = __accu0__;
/* 000320 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000320 */ 						var __accu2__ = c;
/* 000320 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000320 */ 					}) ());
/* 000320 */ 				}) ();
/* 000320 */ 			}
/* 000320 */ 			return __accu0__;
/* 000320 */ 		}) ();
/* 000320 */ 	});},
/* 000323 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = [];
/* 000324 */ 			var __iterable0__ = command_arguments;
/* 000324 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000325 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 				(function () {
/* 000325 */ 					var __accu1__ = __accu0__;
/* 000325 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000325 */ 				}) ();
/* 000325 */ 			}
/* 000325 */ 			return __accu0__;
/* 000325 */ 		}) ();
/* 000325 */ 	});},
/* 000327 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000329 */ 		var node_args = (function () {
/* 000329 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000329 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000329 */ 		}) ();
/* 000333 */ 		var ref_type = null;
/* 000334 */ 		var ref_label = (function () {
/* 000334 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000334 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000334 */ 		}) ();
/* 000335 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000336 */ 			var __left0__ = (function () {
/* 000336 */ 				var __accu0__ = ref_label;
/* 000336 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000336 */ 			}) ();
/* 000336 */ 			var ref_type = __left0__ [0];
/* 000336 */ 			var ref_label = __left0__ [1];
/* 000336 */ 		}
/* 000338 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000339 */ 			var display_content_nodelist = (function () {
/* 000339 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000339 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000339 */ 			}) ();
/* 000339 */ 		}
/* 000340 */ 		else {
/* 000341 */ 			var display_content_nodelist = null;
/* 000341 */ 		}
/* 000343 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000344 */ 		node.llm_ref_info = dict ({'ref_type_and_target': tuple ([ref_type, ref_label]), 'display_content_nodelist': display_content_nodelist});
/* 000344 */ 	});},
/* 000350 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		// pass;
/* 000351 */ 	});},
/* 000353 */ 	get render () {return __get__ (this, function (self, node, render_context) {
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
/* 000355 */ 		var __left0__ = __getitem__ (node.llm_ref_info, 'ref_type_and_target');
/* 000355 */ 		var ref_type = __left0__ [0];
/* 000355 */ 		var ref_label = __left0__ [1];
/* 000356 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000358 */ 		var mgr = (function () {
/* 000358 */ 			var __accu0__ = render_context;
/* 000358 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000358 */ 		}) ();
/* 000360 */ 		var resource_info = node.latex_walker.resource_info;
/* 000362 */ 		try {
/* 000363 */ 			return (function () {
/* 000363 */ 				var __accu0__ = mgr;
/* 000363 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, render_context);
/* 000363 */ 			}) ();
/* 000363 */ 		}
/* 000363 */ 		catch (__except0__) {
/* 000363 */ 			if (isinstance (__except0__, Exception)) {
/* 000363 */ 				var e = __except0__;
/* 000367 */ 				(function () {
/* 000367 */ 					var __accu0__ = logger;
/* 000368 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000368 */ 						var __accu1__ = node;
/* 000368 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000368 */ 					}) (), (function () {
/* 000368 */ 						var __accu1__ = node;
/* 000368 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000368 */ 					}) ()));
/* 000368 */ 				}) ();
/* 000369 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000369 */ 				__except1__.__cause__ = null;
/* 000369 */ 				throw __except1__;
/* 000369 */ 			}
/* 000369 */ 			else {
/* 000369 */ 				throw __except0__;
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 	});}
/* 000369 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map