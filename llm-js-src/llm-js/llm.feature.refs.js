/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:09
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
/* 000006 */ export {Feature, LatexWalkerParseError, ParsedArgumentsInfo, latexnodes_parsers, LLMFragment, LLMArgumentSpec, LLMMacroSpecBase};
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
/* 000158 */ 		(function () {
/* 000158 */ 			var __accu0__ = logger;
/* 000158 */ 			return __call__ (__accu0__.debug, __accu0__, 'Registered reference: %r', refinstance);
/* 000158 */ 		}) ();
/* 000159 */ 		return refinstance;
/* 000159 */ 	});},
/* 000162 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000163 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000164 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000164 */ 		}
/* 000166 */ 		(function () {
/* 000166 */ 			var __accu0__ = logger;
/* 000166 */ 			return __call__ (__accu0__.debug, __accu0__, "Couldn't find {} in current document labels; will query external ref resolvers.  self.ref_labels={}".format (tuple ([ref_type, ref_label]), self.ref_labels));
/* 000166 */ 		}) ();
/* 000169 */ 		(function () {
/* 000169 */ 			var __accu0__ = logger;
/* 000169 */ 			return __call__ (__accu0__.debug, __accu0__, 'external ref resolvers are {}'.format (__call__ (repr, null, self.external_ref_resolvers)));
/* 000169 */ 		}) ();
/* 000171 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000171 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000171 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000172 */ 			(function () {
/* 000172 */ 				var __accu0__ = logger;
/* 000172 */ 				return __call__ (__accu0__.debug, __accu0__, 'Trying external ref resolver ... {}'.format (__call__ (repr, null, resolver)));
/* 000172 */ 			}) ();
/* 000173 */ 			var ref = (function () {
/* 000173 */ 				var __accu0__ = resolver;
/* 000173 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000173 */ 			}) ();
/* 000179 */ 			(function () {
/* 000179 */ 				var __accu0__ = logger;
/* 000179 */ 				return __call__ (__accu0__.debug, __accu0__, 'Tried external ref resolver, ref={}'.format (ref));
/* 000179 */ 			}) ();
/* 000180 */ 			if (__t__ (ref !== null)) {
/* 000181 */ 				return ref;
/* 000181 */ 			}
/* 000181 */ 		}
/* 000184 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label));
/* 000184 */ 		__except0__.__cause__ = null;
/* 000184 */ 		throw __except0__;
/* 000184 */ 	});},
/* 000188 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_llm, resource_info, render_context) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'display_content_llm': var display_content_llm = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000191 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000193 */ 		try {
/* 000194 */ 			var ref_instance = (function () {
/* 000194 */ 				var __accu0__ = self;
/* 000194 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000194 */ 		catch (__except0__) {
/* 000194 */ 			if (isinstance (__except0__, Exception)) {
/* 000194 */ 				var e = __except0__;
/* 000196 */ 				(function () {
/* 000196 */ 					var __accu0__ = logger;
/* 000196 */ 					return __call__ (__accu0__.debug, __accu0__, 'render_ref({}, {}): self.get_ref() failed: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({exc_info: true}));
/* 000196 */ 				}) ();
/* 000200 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000200 */ 				__except1__.__cause__ = null;
/* 000200 */ 				throw __except1__;
/* 000200 */ 			}
/* 000200 */ 			else {
/* 000200 */ 				throw __except0__;
/* 000200 */ 			}
/* 000200 */ 		}
/* 000203 */ 		if (__t__ (display_content_llm === null)) {
/* 000204 */ 			var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000204 */ 		}
/* 000206 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_llm, LLMFragment))))) {
/* 000207 */ 			var display_content_llm = (function () {
/* 000207 */ 				var __accu0__ = render_context.doc.environment;
/* 000207 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_llm, __kwargtrans__ ({standalone_mode: true}));
/* 000207 */ 			}) ();
/* 000207 */ 		}
/* 000212 */ 		var display_content_nodelist = display_content_llm.nodes;
/* 000214 */ 		return (function () {
/* 000214 */ 			var __accu0__ = fragment_renderer;
/* 000214 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000214 */ 		}) ();
/* 000214 */ 	});}
/* 000214 */ });
/* 000228 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000228 */ 	__module__: __name__,
/* 000234 */ 	feature_name: 'refs',
/* 000235 */ 	RenderManager: FeatureRefsRenderManager,
/* 000237 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000237 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000237 */ 			var external_ref_resolvers = null;
/* 000237 */ 		};
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000240 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000241 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000241 */ 		}
/* 000242 */ 		else {
/* 000243 */ 			self.external_ref_resolvers = [];
/* 000243 */ 		}
/* 000244 */ 		(function () {
/* 000244 */ 			var __accu0__ = logger;
/* 000245 */ 			return __call__ (__accu0__.debug, __accu0__, 'Created FeatureRefs with external_ref_resolvers = {}'.format (__call__ (repr, null, external_ref_resolvers)));
/* 000245 */ 		}) ();
/* 000245 */ 	});},
/* 000247 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000248 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000249 */ 			(function () {
/* 000249 */ 				var __accu0__ = logger;
/* 000249 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000249 */ 			}) ();
/* 000249 */ 		}
/* 000251 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000251 */ 	});},
/* 000253 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		(function () {
/* 000254 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000254 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000254 */ 		}) ();
/* 000254 */ 	});},
/* 000256 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000260 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000260 */ 	});},
/* 000269 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000272 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000272 */ 	});}
/* 000272 */ });
/* 000277 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000277 */ 	var __accu0__ = latexnodes_parsers;
/* 000277 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000280 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000280 */ 	var __accu0__ = latexnodes_parsers;
/* 000280 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000285 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000289 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000289 */ 	__module__: __name__,
/* 000291 */ 	delayed_render: true,
/* 000293 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000293 */ 		var ref_type = 'ref';
/* 000293 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000302 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000302 */ 		}) ()}));
/* 000304 */ 		self.ref_type = ref_type;
/* 000305 */ 		self.command_arguments = (function () {
/* 000305 */ 			var __accu0__ = [];
/* 000305 */ 			var __iterable0__ = command_arguments;
/* 000305 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000305 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000305 */ 				(function () {
/* 000305 */ 					var __accu1__ = __accu0__;
/* 000305 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000305 */ 						var __accu2__ = c;
/* 000305 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000305 */ 					}) ());
/* 000305 */ 				}) ();
/* 000305 */ 			}
/* 000305 */ 			return __accu0__;
/* 000305 */ 		}) ();
/* 000305 */ 	});},
/* 000308 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = [];
/* 000309 */ 			var __iterable0__ = command_arguments;
/* 000309 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 				(function () {
/* 000310 */ 					var __accu1__ = __accu0__;
/* 000310 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000310 */ 			return __accu0__;
/* 000310 */ 		}) ();
/* 000310 */ 	});},
/* 000312 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000312 */ 		if (arguments.length) {
/* 000312 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 					switch (__attrib0__) {
/* 000312 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 		else {
/* 000312 */ 		}
/* 000314 */ 		var node_args = (function () {
/* 000314 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000314 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000314 */ 		}) ();
/* 000318 */ 		var ref_type = null;
/* 000319 */ 		var ref_label = (function () {
/* 000319 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000319 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000319 */ 		}) ();
/* 000320 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000321 */ 			var __left0__ = (function () {
/* 000321 */ 				var __accu0__ = ref_label;
/* 000321 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000321 */ 			}) ();
/* 000321 */ 			var ref_type = __left0__ [0];
/* 000321 */ 			var ref_label = __left0__ [1];
/* 000321 */ 		}
/* 000323 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000324 */ 			var display_content_nodelist = (function () {
/* 000324 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000324 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000324 */ 			}) ();
/* 000324 */ 		}
/* 000325 */ 		else {
/* 000326 */ 			var display_content_nodelist = null;
/* 000326 */ 		}
/* 000328 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000329 */ 		node.llm_ref_info = dict ({'ref_type_and_target': tuple ([ref_type, ref_label]), 'display_content_nodelist': display_content_nodelist});
/* 000329 */ 	});},
/* 000335 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000336 */ 		// pass;
/* 000336 */ 	});},
/* 000338 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000340 */ 		var __left0__ = __getitem__ (node.llm_ref_info, 'ref_type_and_target');
/* 000340 */ 		var ref_type = __left0__ [0];
/* 000340 */ 		var ref_label = __left0__ [1];
/* 000341 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000343 */ 		var mgr = (function () {
/* 000343 */ 			var __accu0__ = render_context;
/* 000343 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000343 */ 		}) ();
/* 000345 */ 		var resource_info = node.latex_walker.resource_info;
/* 000347 */ 		try {
/* 000348 */ 			return (function () {
/* 000348 */ 				var __accu0__ = mgr;
/* 000348 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, render_context);
/* 000348 */ 			}) ();
/* 000348 */ 		}
/* 000348 */ 		catch (__except0__) {
/* 000348 */ 			if (isinstance (__except0__, Exception)) {
/* 000348 */ 				var e = __except0__;
/* 000352 */ 				(function () {
/* 000352 */ 					var __accu0__ = logger;
/* 000353 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000353 */ 						var __accu1__ = node;
/* 000353 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000353 */ 					}) (), (function () {
/* 000353 */ 						var __accu1__ = node;
/* 000353 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000353 */ 					}) ()));
/* 000353 */ 				}) ();
/* 000354 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000354 */ 				__except1__.__cause__ = null;
/* 000354 */ 				throw __except1__;
/* 000354 */ 			}
/* 000354 */ 			else {
/* 000354 */ 				throw __except0__;
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 	});}
/* 000354 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map