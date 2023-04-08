/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:36
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
/* 000006 */ export {LLMArgumentSpec, Feature, LatexWalkerParseError, LLMFragment, latexnodes_parsers, ParsedArgumentsInfo, LLMMacroSpecBase};
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
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_llm_text, target_href, counter_value) {
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
/* 000055 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000057 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000058 */ 		self.ref_type = ref_type;
/* 000059 */ 		self.ref_label = ref_label;
/* 000060 */ 		self.formatted_ref_llm_text = formatted_ref_llm_text;
/* 000061 */ 		self.target_href = target_href;
/* 000062 */ 		self.counter_value = counter_value;
/* 000064 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_llm_text', 'target_href', 'counter_value']);
/* 000064 */ 	});},
/* 000067 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000068 */ 		return (function () {
/* 000068 */ 			var __accu0__ = [];
/* 000068 */ 			var __iterable0__ = self._fields;
/* 000068 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000068 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000068 */ 				(function () {
/* 000068 */ 					var __accu1__ = __accu0__;
/* 000068 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000068 */ 				}) ();
/* 000068 */ 			}
/* 000068 */ 			return dict (__accu0__);
/* 000068 */ 		}) ();
/* 000068 */ 	});},
/* 000070 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000073 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000073 */ 			var __accu0__ = ', ';
/* 000073 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000073 */ 				var __accu1__ = [];
/* 000073 */ 				var __iterable0__ = self._fields;
/* 000073 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000073 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000073 */ 					(function () {
/* 000073 */ 						var __accu2__ = __accu1__;
/* 000073 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000073 */ 					}) ();
/* 000073 */ 				}
/* 000073 */ 				return py_iter (__accu1__);
/* 000073 */ 			}) ());
/* 000073 */ 		}) ()), ')');
/* 000073 */ 	});}
/* 000073 */ });
/* 000086 */ var hexstr = (v) => (+v).toString(16);
/* 000094 */ export var _rx_unsafe_char = (function () {
/* 000094 */ 	var __accu0__ = re;
/* 000094 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000094 */ }) ();
/* 000095 */ export var _rx_match_safechar = function (m) {
/* 000095 */ 	if (arguments.length) {
/* 000095 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 				switch (__attrib0__) {
/* 000095 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 	}
/* 000095 */ 	else {
/* 000095 */ 	}
/* 000096 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000096 */ 		var __accu0__ = m;
/* 000096 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000096 */ 	}) ())));
/* 000096 */ };
/* 000098 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000098 */ 	if (arguments.length) {
/* 000098 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 				switch (__attrib0__) {
/* 000098 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 	}
/* 000098 */ 	else {
/* 000098 */ 	}
/* 000099 */ 	var ref_type_safe = (function () {
/* 000099 */ 		var __accu0__ = _rx_unsafe_char;
/* 000099 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000099 */ 	}) ();
/* 000100 */ 	var ref_label_safe = (function () {
/* 000100 */ 		var __accu0__ = _rx_unsafe_char;
/* 000100 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000100 */ 	}) ();
/* 000101 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000101 */ };
/* 000106 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000106 */ 	__module__: __name__,
/* 000108 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000108 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000108 */ 			var add_external_ref_resolvers = null;
/* 000108 */ 		};
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		self.ref_labels = dict ({});
/* 000110 */ 		self.registered_references = dict ({});
/* 000111 */ 		self.external_ref_resolvers = [];
/* 000112 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000113 */ 			(function () {
/* 000113 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000113 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000114 */ 		(function () {
/* 000114 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000114 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000114 */ 		}) ();
/* 000116 */ 		self.registered_counter_formatters = dict ({});
/* 000116 */ 	});},
/* 000118 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000120 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000121 */ 			return ;
/* 000121 */ 		}
/* 000123 */ 		var target_href = __add__ ('#', (function () {
/* 000123 */ 			var __accu0__ = referenceable_info;
/* 000123 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000123 */ 		}) ());
/* 000125 */ 		var __iterable0__ = referenceable_info.labels;
/* 000125 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 			var ref_type = __left0__ [0];
/* 000125 */ 			var ref_label = __left0__ [1];
/* 000126 */ 			(function () {
/* 000126 */ 				var __accu0__ = self;
/* 000126 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_llm_text: referenceable_info.formatted_ref_llm_text, node: node, target_href: target_href}));
/* 000126 */ 			}) ();
/* 000126 */ 		}
/* 000126 */ 	});},
/* 000133 */ 	get register_counter_formatter () {return __get__ (this, function (self, ref_type, counter_formatter) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		if (__t__ (__in__ (ref_type, self.registered_counter_formatters))) {
/* 000135 */ 			(function () {
/* 000135 */ 				var __accu0__ = logger;
/* 000135 */ 				return __call__ (__accu0__.warning, __accu0__, "Counter formatter for ‘%s’ already registered in 'refs' feature!", ref_type);
/* 000135 */ 			}) ();
/* 000135 */ 		}
/* 000138 */ 		__setitem__ (self.registered_counter_formatters, ref_type, counter_formatter);
/* 000138 */ 	});},
/* 000140 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000140 */ 		var counter_value = null;
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'formatted_ref_llm_text': var formatted_ref_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000155 */ 		var node_id = (function () {
/* 000155 */ 			var __accu0__ = self;
/* 000155 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000155 */ 		}) ();
/* 000156 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000157 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000158 */ 			return self.registered_references;
/* 000158 */ 		}
/* 000160 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000161 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000161 */ 			__except0__.__cause__ = null;
/* 000161 */ 			throw __except0__;
/* 000161 */ 		}
/* 000165 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_llm_text: formatted_ref_llm_text, target_href: target_href, counter_value: counter_value}));
/* 000172 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000173 */ 		self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000174 */ 		// pass;
/* 000177 */ 		return refinstance;
/* 000177 */ 	});},
/* 000180 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000181 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000182 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000182 */ 		}
/* 000184 */ 		// pass;
/* 000190 */ 		// pass;
/* 000194 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000194 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 			// pass;
/* 000198 */ 			var ref = (function () {
/* 000198 */ 				var __accu0__ = resolver;
/* 000198 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000198 */ 			}) ();
/* 000204 */ 			// pass;
/* 000207 */ 			if (__t__ (ref !== null)) {
/* 000208 */ 				return ref;
/* 000208 */ 			}
/* 000208 */ 		}
/* 000210 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label));
/* 000210 */ 		__except0__.__cause__ = null;
/* 000210 */ 		throw __except0__;
/* 000210 */ 	});},
/* 000214 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_llm, resource_info, render_context, counter_prefix_variant, counter_with_prefix, counter_with_delimiters) {
/* 000214 */ 		if (typeof counter_prefix_variant == 'undefined' || (counter_prefix_variant != null && counter_prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var counter_prefix_variant = null;
/* 000214 */ 		};
/* 000214 */ 		if (typeof counter_with_prefix == 'undefined' || (counter_with_prefix != null && counter_with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var counter_with_prefix = true;
/* 000214 */ 		};
/* 000214 */ 		if (typeof counter_with_delimiters == 'undefined' || (counter_with_delimiters != null && counter_with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var counter_with_delimiters = true;
/* 000214 */ 		};
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'display_content_llm': var display_content_llm = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000219 */ 		var ref_instance = (function () {
/* 000219 */ 			var __accu0__ = self;
/* 000219 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000219 */ 		}) ();
/* 000221 */ 		return (function () {
/* 000221 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_llm, render_context, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000221 */ 		}) ();
/* 000221 */ 	});},
/* 000228 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_llm, render_context, counter_prefix_variant, counter_with_prefix, counter_with_delimiters) {
/* 000228 */ 		if (typeof counter_prefix_variant == 'undefined' || (counter_prefix_variant != null && counter_prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000228 */ 			var counter_prefix_variant = null;
/* 000228 */ 		};
/* 000228 */ 		if (typeof counter_with_prefix == 'undefined' || (counter_with_prefix != null && counter_with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000228 */ 			var counter_with_prefix = true;
/* 000228 */ 		};
/* 000228 */ 		if (typeof counter_with_delimiters == 'undefined' || (counter_with_delimiters != null && counter_with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000228 */ 			var counter_with_delimiters = true;
/* 000228 */ 		};
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'display_content_llm': var display_content_llm = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000232 */ 		if (__t__ (display_content_llm === null)) {
/* 000233 */ 			var display_content_llm = ref_instance.formatted_ref_llm_text;
/* 000233 */ 		}
/* 000235 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_llm, LLMFragment))))) {
/* 000236 */ 			var display_content_llm = (function () {
/* 000236 */ 				var __accu0__ = render_context.doc.environment;
/* 000236 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_llm, __kwargtrans__ ({standalone_mode: true}));
/* 000236 */ 			}) ();
/* 000236 */ 		}
/* 000241 */ 		var display_content_nodelist = display_content_llm.nodes;
/* 000243 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000245 */ 		return (function () {
/* 000245 */ 			var __accu0__ = fragment_renderer;
/* 000245 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000245 */ 		}) ();
/* 000245 */ 	});},
/* 000255 */ 	ref_many_use_llm_hyperref: true,
/* 000257 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info, render_context) {
/* 000257 */ 		var counter_prefix_variant = null;
/* 000257 */ 		var counter_with_delimiters = true;
/* 000257 */ 		var counter_with_prefix = true;
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000261 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000263 */ 		var ref_instances = (function () {
/* 000263 */ 			var __accu0__ = [];
/* 000263 */ 			var __iterable0__ = ref_type_label_list;
/* 000263 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000265 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000265 */ 				var ref_type = __left0__ [0];
/* 000265 */ 				var ref_label = __left0__ [1];
/* 000265 */ 				(function () {
/* 000265 */ 					var __accu1__ = __accu0__;
/* 000264 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000264 */ 						var __accu2__ = self;
/* 000264 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000264 */ 					}) ());
/* 000264 */ 				}) ();
/* 000264 */ 			}
/* 000264 */ 			return __accu0__;
/* 000264 */ 		}) ();
/* 000267 */ 		var ref_instances_by_counter_ref_type = dict ({});
/* 000268 */ 		var ref_instances_nocounter = [];
/* 000269 */ 		var __iterable0__ = ref_instances;
/* 000269 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000269 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000270 */ 			if (__t__ (__t__ (ri.counter_value === null) || !__in__ (ri.ref_type, self.registered_counter_formatters))) {
/* 000272 */ 				(function () {
/* 000272 */ 					var __accu0__ = ref_instances_nocounter;
/* 000272 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000272 */ 				}) ();
/* 000272 */ 				continue;
/* 000272 */ 			}
/* 000274 */ 			if (__t__ (!__in__ (ri.ref_type, ref_instances_by_counter_ref_type))) {
/* 000275 */ 				__setitem__ (ref_instances_by_counter_ref_type, ri.ref_type, dict ({}));
/* 000275 */ 			}
/* 000276 */ 			__setitem__ (__getitem__ (ref_instances_by_counter_ref_type, ri.ref_type), ri.counter_value, ri);
/* 000276 */ 		}
/* 000278 */ 		var s_final_blocks = [];
/* 000280 */ 		var __iterable0__ = (function () {
/* 000280 */ 			var __accu0__ = ref_instances_by_counter_ref_type;
/* 000280 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000280 */ 		}) ();
/* 000280 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 			var ref_type = __left0__ [0];
/* 000280 */ 			var rcdict = __left0__ [1];
/* 000282 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, ref_type);
/* 000284 */ 			var s_items = (function () {
/* 000284 */ 				var __accu0__ = counter_formatter;
/* 000285 */ 				return __call__ (__accu0__.format_many_llm, __accu0__, (function () {
/* 000285 */ 					var __accu1__ = rcdict;
/* 000285 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000285 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000285 */ 			}) ();
/* 000291 */ 			var s = '';
/* 000292 */ 			var __iterable1__ = s_items;
/* 000292 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000292 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000293 */ 				var s_frag = (function () {
/* 000293 */ 					var __accu0__ = render_context.doc.environment;
/* 000297 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, standalone_mode: true, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000297 */ 				}) ();
/* 000299 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000300 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000300 */ 						var __accu0__ = fragment_renderer;
/* 000300 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000300 */ 					}) ());
/* 000300 */ 				}
/* 000301 */ 				else {
/* 000302 */ 					var rinst = __getitem__ (rcdict, __getitem__ (sit, 'n'));
/* 000303 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000303 */ 						var __accu0__ = fragment_renderer;
/* 000303 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_type)]}));
/* 000303 */ 					}) ());
/* 000303 */ 				}
/* 000303 */ 			}
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = s_final_blocks;
/* 000311 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000311 */ 			}) ();
/* 000311 */ 		}
/* 000313 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000314 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000314 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000315 */ 				var s_final_blocks = __call__ (__iadd__, null, s_final_blocks, [(function () {
/* 000315 */ 					var __accu0__ = self;
/* 000315 */ 					return __call__ (__accu0__.render_ref_instance, __accu0__, ri, null, render_context);
/* 000315 */ 				}) ()]);
/* 000315 */ 			}
/* 000315 */ 		}
/* 000317 */ 		return (function () {
/* 000317 */ 			var __accu0__ = ', ';
/* 000317 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000317 */ 		}) ();
/* 000317 */ 	});},
/* 000321 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 		}
/* 000323 */ 		try {
/* 000324 */ 			return (function () {
/* 000324 */ 				var __accu0__ = self;
/* 000324 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000324 */ 			}) ();
/* 000324 */ 		}
/* 000324 */ 		catch (__except0__) {
/* 000324 */ 			if (isinstance (__except0__, Exception)) {
/* 000324 */ 				var e = __except0__;
/* 000326 */ 				// pass;
/* 000332 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000332 */ 				__except1__.__cause__ = null;
/* 000332 */ 				throw __except1__;
/* 000332 */ 			}
/* 000332 */ 			else {
/* 000332 */ 				throw __except0__;
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 	});}
/* 000332 */ });
/* 000340 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000340 */ 	__module__: __name__,
/* 000346 */ 	feature_name: 'refs',
/* 000347 */ 	feature_title: 'Labels and cross-references',
/* 000349 */ 	RenderManager: FeatureRefsRenderManager,
/* 000351 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000351 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000351 */ 			var external_ref_resolvers = null;
/* 000351 */ 		};
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000354 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000355 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000355 */ 		}
/* 000356 */ 		else {
/* 000357 */ 			self.external_ref_resolvers = [];
/* 000357 */ 		}
/* 000358 */ 		// pass;
/* 000358 */ 	});},
/* 000363 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000365 */ 			(function () {
/* 000365 */ 				var __accu0__ = logger;
/* 000365 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000365 */ 			}) ();
/* 000365 */ 		}
/* 000367 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000367 */ 	});},
/* 000369 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 		}
/* 000370 */ 		(function () {
/* 000370 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000370 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000370 */ 		}) ();
/* 000370 */ 	});},
/* 000372 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000379 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000379 */ 	});},
/* 000388 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000391 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000391 */ 	});}
/* 000391 */ });
/* 000396 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000396 */ 	var __accu0__ = latexnodes_parsers;
/* 000396 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000399 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (LLMArgumentSpec, null, (function () {
/* 000399 */ 	var __accu0__ = latexnodes_parsers;
/* 000399 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000404 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000408 */ export var RefMacro =  __class__ ('RefMacro', [LLMMacroSpecBase], {
/* 000408 */ 	__module__: __name__,
/* 000410 */ 	delayed_render: true,
/* 000412 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000412 */ 		var ref_type = 'ref';
/* 000412 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000421 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000421 */ 			var __accu0__ = self;
/* 000421 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000421 */ 		}) ()}));
/* 000423 */ 		self.ref_type = ref_type;
/* 000424 */ 		self.command_arguments = (function () {
/* 000424 */ 			var __accu0__ = [];
/* 000424 */ 			var __iterable0__ = command_arguments;
/* 000424 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000424 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000424 */ 				(function () {
/* 000424 */ 					var __accu1__ = __accu0__;
/* 000424 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000424 */ 						var __accu2__ = c;
/* 000424 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000424 */ 					}) ());
/* 000424 */ 				}) ();
/* 000424 */ 			}
/* 000424 */ 			return __accu0__;
/* 000424 */ 		}) ();
/* 000424 */ 	});},
/* 000427 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		return (function () {
/* 000428 */ 			var __accu0__ = [];
/* 000428 */ 			var __iterable0__ = command_arguments;
/* 000428 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000429 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000429 */ 				(function () {
/* 000429 */ 					var __accu1__ = __accu0__;
/* 000429 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000429 */ 				}) ();
/* 000429 */ 			}
/* 000429 */ 			return __accu0__;
/* 000429 */ 		}) ();
/* 000429 */ 	});},
/* 000431 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000433 */ 		var node_args = (function () {
/* 000433 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000433 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000433 */ 		}) ();
/* 000437 */ 		var ref_spec = (function () {
/* 000437 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000437 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000437 */ 		}) ();
/* 000438 */ 		var ref_pair_list = [];
/* 000439 */ 		var __iterable0__ = (function () {
/* 000439 */ 			var __accu0__ = ref_spec;
/* 000439 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000439 */ 		}) ();
/* 000439 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000439 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000440 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000440 */ 			var ref_type = __left0__ [0];
/* 000440 */ 			var ref_label = __left0__ [1];
/* 000441 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000442 */ 				var __left0__ = (function () {
/* 000442 */ 					var __accu0__ = ref_label;
/* 000442 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000442 */ 				}) ();
/* 000442 */ 				var ref_type = __left0__ [0];
/* 000442 */ 				var ref_label = __left0__ [1];
/* 000442 */ 			}
/* 000443 */ 			(function () {
/* 000443 */ 				var __accu0__ = ref_pair_list;
/* 000443 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000443 */ 			}) ();
/* 000443 */ 		}
/* 000445 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000446 */ 			var display_content_nodelist = (function () {
/* 000446 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000446 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000446 */ 			}) ();
/* 000446 */ 		}
/* 000447 */ 		else {
/* 000448 */ 			var display_content_nodelist = null;
/* 000448 */ 		}
/* 000450 */ 		node.llmarg_ref_list = ref_pair_list;
/* 000451 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000452 */ 			node.llmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000452 */ 		}
/* 000453 */ 		node.llm_ref_info = dict ({'ref_list': ref_pair_list, 'display_content_nodelist': display_content_nodelist});
/* 000453 */ 	});},
/* 000459 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 		}
/* 000460 */ 		// pass;
/* 000460 */ 	});},
/* 000462 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000464 */ 		var ref_list = __getitem__ (node.llm_ref_info, 'ref_list');
/* 000465 */ 		var display_content_nodelist = __getitem__ (node.llm_ref_info, 'display_content_nodelist');
/* 000467 */ 		var mgr = (function () {
/* 000467 */ 			var __accu0__ = render_context;
/* 000467 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000467 */ 		}) ();
/* 000468 */ 		var resource_info = node.latex_walker.resource_info;
/* 000470 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000471 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000471 */ 			var ref_type = __left0__ [0];
/* 000471 */ 			var ref_label = __left0__ [1];
/* 000472 */ 			try {
/* 000473 */ 				return (function () {
/* 000473 */ 					var __accu0__ = mgr;
/* 000473 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, render_context);
/* 000473 */ 				}) ();
/* 000473 */ 			}
/* 000473 */ 			catch (__except0__) {
/* 000473 */ 				if (isinstance (__except0__, Exception)) {
/* 000473 */ 					var e = __except0__;
/* 000477 */ 					(function () {
/* 000477 */ 						var __accu0__ = logger;
/* 000478 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000478 */ 							var __accu1__ = node;
/* 000478 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000478 */ 						}) (), (function () {
/* 000478 */ 							var __accu1__ = node;
/* 000478 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000478 */ 						}) ()));
/* 000478 */ 					}) ();
/* 000479 */ 					var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000479 */ 					__except1__.__cause__ = null;
/* 000479 */ 					throw __except1__;
/* 000479 */ 				}
/* 000479 */ 				else {
/* 000479 */ 					throw __except0__;
/* 000479 */ 				}
/* 000479 */ 			}
/* 000479 */ 		}
/* 000488 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000490 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000490 */ 			__except0__.__cause__ = null;
/* 000490 */ 			throw __except0__;
/* 000490 */ 		}
/* 000492 */ 		return (function () {
/* 000492 */ 			var __accu0__ = mgr;
/* 000492 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info, render_context);
/* 000492 */ 		}) ();
/* 000492 */ 	});}
/* 000492 */ });
/* 000497 */ export var FeatureClass = FeatureRefs;
/* 000006 */ 
//# sourceMappingURL=llm.feature.refs.map