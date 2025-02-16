/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 15:49:16
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000021 */ import {Feature} from './flm.feature._base.js';
/* 000019 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000018 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000017 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000011 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {FLMMacroSpecBase, LatexWalkerLocatedError, ParsedArgumentsInfo, latexnodes_parsers, Feature, FLMArgumentSpec, FLMFragment};
/* 000001 */ var __name__ = 'flm.feature.refs';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var ReferenceableInfo =  __class__ ('ReferenceableInfo', [object], {
/* 000026 */ 	__module__: __name__,
/* 000038 */ 	get __init__ () {return __get__ (this, function (self, kind, formatted_ref_flm_text, labels) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'kind': var kind = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		__call__ (__call__ (__super__, null, ReferenceableInfo, '__init__'), null, self);
/* 000040 */ 		self.kind = kind;
/* 000041 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000042 */ 		self.labels = labels;
/* 000044 */ 		self._fields = tuple (['kind', 'formatted_ref_flm_text', 'labels']);
/* 000044 */ 	});},
/* 000046 */ 	get get_target_id () {return __get__ (this, function (self) {
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000048 */ 		if (__t__ (!__t__ ((self.labels)))) {
/* 000049 */ 			return null;
/* 000049 */ 		}
/* 000051 */ 		var __left0__ = __getitem__ (self.labels, 0);
/* 000051 */ 		var lbl_ref_type = __left0__ [0];
/* 000051 */ 		var lbl_ref_label = __left0__ [1];
/* 000052 */ 		return __call__ (get_safe_target_id, null, lbl_ref_type, lbl_ref_label);
/* 000052 */ 	});},
/* 000054 */ 	get asdict () {return __get__ (this, function (self) {
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000055 */ 		return (function () {
/* 000055 */ 			var __accu0__ = [];
/* 000055 */ 			var __iterable0__ = self._fields;
/* 000055 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000055 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000055 */ 				(function () {
/* 000055 */ 					var __accu1__ = __accu0__;
/* 000055 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000055 */ 				}) ();
/* 000055 */ 			}
/* 000055 */ 			return dict (__accu0__);
/* 000055 */ 		}) ();
/* 000055 */ 	});},
/* 000057 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000060 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000060 */ 			var __accu0__ = ', ';
/* 000060 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000060 */ 				var __accu1__ = [];
/* 000060 */ 				var __iterable0__ = self._fields;
/* 000060 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000060 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000060 */ 					(function () {
/* 000060 */ 						var __accu2__ = __accu1__;
/* 000060 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000060 */ 					}) ();
/* 000060 */ 				}
/* 000060 */ 				return py_iter (__accu1__);
/* 000060 */ 			}) ());
/* 000060 */ 		}) ()), ')');
/* 000060 */ 	});}
/* 000060 */ });
/* 000066 */ export var RefInstance =  __class__ ('RefInstance', [object], {
/* 000066 */ 	__module__: __name__,
/* 000067 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_flm_text, target_href, counter_value, counter_formatter_id) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000069 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000070 */ 		self.ref_type = ref_type;
/* 000071 */ 		self.ref_label = ref_label;
/* 000072 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000073 */ 		self.target_href = target_href;
/* 000074 */ 		self.counter_value = counter_value;
/* 000075 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000077 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_flm_text', 'target_href', 'counter_value', 'counter_formatter_id']);
/* 000077 */ 	});},
/* 000080 */ 	get asdict () {return __get__ (this, function (self) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000081 */ 		return (function () {
/* 000081 */ 			var __accu0__ = [];
/* 000081 */ 			var __iterable0__ = self._fields;
/* 000081 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000081 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000081 */ 				(function () {
/* 000081 */ 					var __accu1__ = __accu0__;
/* 000081 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000081 */ 				}) ();
/* 000081 */ 			}
/* 000081 */ 			return dict (__accu0__);
/* 000081 */ 		}) ();
/* 000081 */ 	});},
/* 000083 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000086 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000086 */ 			var __accu0__ = ', ';
/* 000086 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000086 */ 				var __accu1__ = [];
/* 000086 */ 				var __iterable0__ = self._fields;
/* 000086 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000086 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000086 */ 					(function () {
/* 000086 */ 						var __accu2__ = __accu1__;
/* 000086 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000086 */ 					}) ();
/* 000086 */ 				}
/* 000086 */ 				return py_iter (__accu1__);
/* 000086 */ 			}) ());
/* 000086 */ 		}) ()), ')');
/* 000086 */ 	});}
/* 000086 */ });
/* 000099 */ var hexstr = (v) => (+v).toString(16);
/* 000107 */ export var _rx_unsafe_char = (function () {
/* 000107 */ 	var __accu0__ = re;
/* 000107 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000107 */ }) ();
/* 000108 */ export var _rx_match_safechar = function (m) {
/* 000108 */ 	if (arguments.length) {
/* 000108 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 				switch (__attrib0__) {
/* 000108 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 	}
/* 000108 */ 	else {
/* 000108 */ 	}
/* 000109 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000109 */ 		var __accu0__ = m;
/* 000109 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000109 */ 	}) ())));
/* 000109 */ };
/* 000111 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000111 */ 	if (arguments.length) {
/* 000111 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 				switch (__attrib0__) {
/* 000111 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 	}
/* 000111 */ 	else {
/* 000111 */ 	}
/* 000112 */ 	var ref_type_safe = (function () {
/* 000112 */ 		var __accu0__ = _rx_unsafe_char;
/* 000112 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000112 */ 	}) ();
/* 000113 */ 	var ref_label_safe = (function () {
/* 000113 */ 		var __accu0__ = _rx_unsafe_char;
/* 000113 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000113 */ 	}) ();
/* 000114 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000114 */ };
/* 000119 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000119 */ 	__module__: __name__,
/* 000121 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000121 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000121 */ 			var add_external_ref_resolvers = null;
/* 000121 */ 		};
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000122 */ 		self.ref_labels = dict ({});
/* 000123 */ 		self.registered_references = dict ({});
/* 000124 */ 		self.external_ref_resolvers = [];
/* 000125 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000126 */ 			(function () {
/* 000126 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000126 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000126 */ 			}) ();
/* 000126 */ 		}
/* 000127 */ 		(function () {
/* 000127 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000127 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000127 */ 		}) ();
/* 000129 */ 		self.registered_counter_formatters = dict ({});
/* 000129 */ 	});},
/* 000131 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000133 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000134 */ 			return ;
/* 000134 */ 		}
/* 000136 */ 		var target_href = __add__ ('#', (function () {
/* 000136 */ 			var __accu0__ = referenceable_info;
/* 000136 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000136 */ 		}) ());
/* 000138 */ 		var __iterable0__ = referenceable_info.labels;
/* 000138 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000138 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000138 */ 			var ref_type = __left0__ [0];
/* 000138 */ 			var ref_label = __left0__ [1];
/* 000139 */ 			(function () {
/* 000139 */ 				var __accu0__ = self;
/* 000139 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text, node: node, target_href: target_href}));
/* 000139 */ 			}) ();
/* 000139 */ 		}
/* 000139 */ 	});},
/* 000146 */ 	get register_counter_formatter () {return __get__ (this, function (self) {
/* 000146 */ 		var counter_formatter_id = null;
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		if (__t__ (counter_formatter_id === null)) {
/* 000148 */ 			var counter_formatter_id = counter_formatter.counter_formatter_id;
/* 000148 */ 		}
/* 000149 */ 		if (__t__ (__in__ (counter_formatter_id, self.registered_counter_formatters))) {
/* 000150 */ 			var __except0__ = __call__ (ValueError, null, 'Counter formatter width ID ‘{}’ is already registered!'.format (counter_formatter_id));
/* 000150 */ 			__except0__.__cause__ = null;
/* 000150 */ 			throw __except0__;
/* 000150 */ 		}
/* 000153 */ 		__setitem__ (self.registered_counter_formatters, counter_formatter_id, counter_formatter);
/* 000153 */ 	});},
/* 000155 */ 	get register_reference_step_counter () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000155 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var ref_type = null;
/* 000155 */ 		};
/* 000155 */ 		if (typeof ref_label == 'undefined' || (ref_label != null && ref_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000155 */ 			var ref_label = null;
/* 000155 */ 		};
/* 000155 */ 		var target_href_fn = null;
/* 000155 */ 		var counter_with_prefix = true;
/* 000155 */ 		var counter_prefix_variant = null;
/* 000155 */ 		var counter_with_delimiters = true;
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'counter': var counter = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'target_href_fn': var target_href_fn = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000161 */ 		var node_id = (function () {
/* 000161 */ 			var __accu0__ = self;
/* 000161 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000161 */ 		}) ();
/* 000162 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000163 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000164 */ 			return __getitem__ (self.registered_references, kk);
/* 000164 */ 		}
/* 000166 */ 		(function () {
/* 000166 */ 			var __accu0__ = counter;
/* 000166 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000166 */ 		}) ();
/* 000168 */ 		var formatted_ref_flm_text = (function () {
/* 000168 */ 			var __accu0__ = counter;
/* 000168 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ ({with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000168 */ 		}) ();
/* 000174 */ 		if (__t__ (target_href_fn !== null)) {
/* 000175 */ 			var target_href = __call__ (target_href_fn, null, counter.value);
/* 000175 */ 		}
/* 000176 */ 		else {
/* 000177 */ 			var target_href = null;
/* 000177 */ 		}
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = self;
/* 000179 */ 			return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter.value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000189 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000189 */ 		var counter_value = null;
/* 000189 */ 		var counter_formatter_id = null;
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000204 */ 		var node_id = (function () {
/* 000204 */ 			var __accu0__ = self;
/* 000204 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000204 */ 		}) ();
/* 000205 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000206 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000207 */ 			return __getitem__ (self.registered_references, kk);
/* 000207 */ 		}
/* 000209 */ 		if (__t__ (__t__ (ref_type !== null) && __t__ (ref_label !== null) && __in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000211 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000211 */ 			__except0__.__cause__ = null;
/* 000211 */ 			throw __except0__;
/* 000211 */ 		}
/* 000215 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter_value, counter_formatter_id: counter_formatter_id}));
/* 000224 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000225 */ 		if (__t__ (__t__ (ref_type !== null) && ref_label !== null)) {
/* 000226 */ 			self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000226 */ 		}
/* 000227 */ 		// pass;
/* 000230 */ 		return refinstance;
/* 000230 */ 	});},
/* 000233 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000234 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000235 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000235 */ 		}
/* 000237 */ 		// pass;
/* 000243 */ 		// pass;
/* 000247 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000247 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000247 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000248 */ 			// pass;
/* 000251 */ 			var ref = (function () {
/* 000251 */ 				var __accu0__ = resolver;
/* 000251 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000251 */ 			}) ();
/* 000257 */ 			// pass;
/* 000260 */ 			if (__t__ (ref !== null)) {
/* 000261 */ 				return ref;
/* 000261 */ 			}
/* 000261 */ 		}
/* 000263 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label), __kwargtrans__ ({pos: null}));
/* 000263 */ 		__except0__.__cause__ = null;
/* 000263 */ 		throw __except0__;
/* 000263 */ 	});},
/* 000270 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_flm, resource_info) {
/* 000270 */ 		var counter_prefix_variant = null;
/* 000270 */ 		var counter_with_prefix = true;
/* 000270 */ 		var counter_with_delimiters = true;
/* 000270 */ 		if (arguments.length) {
/* 000270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 					switch (__attrib0__) {
/* 000270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 			}
/* 000270 */ 		}
/* 000270 */ 		else {
/* 000270 */ 		}
/* 000276 */ 		var ref_instance = (function () {
/* 000276 */ 			var __accu0__ = self;
/* 000276 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000276 */ 		}) ();
/* 000278 */ 		return (function () {
/* 000278 */ 			var __accu0__ = self;
/* 000278 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_flm, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000278 */ 		}) ();
/* 000278 */ 	});},
/* 000285 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_flm) {
/* 000285 */ 		var counter_prefix_variant = null;
/* 000285 */ 		var counter_with_prefix = true;
/* 000285 */ 		var counter_with_delimiters = true;
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000290 */ 		if (__t__ (display_content_flm === null)) {
/* 000291 */ 			var display_content_flm = ref_instance.formatted_ref_flm_text;
/* 000291 */ 		}
/* 000293 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_flm, FLMFragment))))) {
/* 000294 */ 			var display_content_flm = (function () {
/* 000294 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000294 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_flm, __kwargtrans__ ({standalone_mode: true}));
/* 000294 */ 			}) ();
/* 000294 */ 		}
/* 000299 */ 		var display_content_nodelist = display_content_flm.nodes;
/* 000301 */ 		var fragment_renderer = self.render_context.fragment_renderer;
/* 000303 */ 		return (function () {
/* 000303 */ 			var __accu0__ = fragment_renderer;
/* 000303 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: self.render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000303 */ 		}) ();
/* 000303 */ 	});},
/* 000313 */ 	ref_many_use_flm_hyperref: true,
/* 000315 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info) {
/* 000315 */ 		var counter_prefix_variant = null;
/* 000315 */ 		var counter_with_delimiters = true;
/* 000315 */ 		var counter_with_prefix = true;
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000320 */ 		var render_context = self.render_context;
/* 000321 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000323 */ 		var ref_instances = (function () {
/* 000323 */ 			var __accu0__ = [];
/* 000323 */ 			var __iterable0__ = ref_type_label_list;
/* 000323 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000325 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000325 */ 				var ref_type = __left0__ [0];
/* 000325 */ 				var ref_label = __left0__ [1];
/* 000325 */ 				(function () {
/* 000325 */ 					var __accu1__ = __accu0__;
/* 000324 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000324 */ 						var __accu2__ = self;
/* 000324 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000324 */ 					}) ());
/* 000324 */ 				}) ();
/* 000324 */ 			}
/* 000324 */ 			return __accu0__;
/* 000324 */ 		}) ();
/* 000327 */ 		var ref_instances_by_counter_formatter_id = dict ({});
/* 000328 */ 		var ref_instances_nocounter = [];
/* 000329 */ 		var __iterable0__ = ref_instances;
/* 000329 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000329 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000330 */ 			if (__t__ (__t__ (ri.counter_value === null) || ri.counter_formatter_id === null)) {
/* 000331 */ 				(function () {
/* 000331 */ 					var __accu0__ = ref_instances_nocounter;
/* 000331 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000331 */ 				}) ();
/* 000331 */ 				continue;
/* 000331 */ 			}
/* 000333 */ 			if (__t__ (!__in__ (ri.counter_formatter_id, ref_instances_by_counter_formatter_id))) {
/* 000334 */ 				__setitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id, dict ({}));
/* 000334 */ 			}
/* 000336 */ 			__setitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id), ri.counter_value, ri);
/* 000336 */ 		}
/* 000338 */ 		var s_final_blocks = [];
/* 000340 */ 		var __iterable0__ = (function () {
/* 000340 */ 			var __accu0__ = ref_instances_by_counter_formatter_id;
/* 000340 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000340 */ 		}) ();
/* 000340 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000340 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000340 */ 			var counter_formatter_id = __left0__ [0];
/* 000340 */ 			var rcdict = __left0__ [1];
/* 000342 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, counter_formatter_id);
/* 000344 */ 			var s_items = (function () {
/* 000344 */ 				var __accu0__ = counter_formatter;
/* 000345 */ 				return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000345 */ 					var __accu1__ = rcdict;
/* 000345 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000345 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000345 */ 			}) ();
/* 000351 */ 			var s = '';
/* 000352 */ 			var __iterable1__ = s_items;
/* 000352 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000352 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000353 */ 				var s_frag = (function () {
/* 000353 */ 					var __accu0__ = render_context;
/* 000356 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000356 */ 				}) ();
/* 000358 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000359 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000359 */ 						var __accu0__ = fragment_renderer;
/* 000359 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000359 */ 					}) ());
/* 000359 */ 				}
/* 000360 */ 				else {
/* 000361 */ 					var rinst = __getitem__ (rcdict, __getitem__ (sit, 'n'));
/* 000362 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000362 */ 						var __accu0__ = fragment_renderer;
/* 000362 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['refcnt-{}'.format (counter_formatter_id)]}));
/* 000362 */ 					}) ());
/* 000362 */ 				}
/* 000362 */ 			}
/* 000370 */ 			(function () {
/* 000370 */ 				var __accu0__ = s_final_blocks;
/* 000370 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000370 */ 			}) ();
/* 000370 */ 		}
/* 000372 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000373 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000373 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000373 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000374 */ 				var s_final_blocks = __call__ (__iadd__, null, s_final_blocks, [(function () {
/* 000374 */ 					var __accu0__ = self;
/* 000374 */ 					return __call__ (__accu0__.render_ref_instance, __accu0__, ri, null);
/* 000374 */ 				}) ()]);
/* 000374 */ 			}
/* 000374 */ 		}
/* 000376 */ 		return (function () {
/* 000376 */ 			var __accu0__ = ', ';
/* 000376 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000376 */ 		}) ();
/* 000376 */ 	});},
/* 000380 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000382 */ 		try {
/* 000383 */ 			return (function () {
/* 000383 */ 				var __accu0__ = self;
/* 000383 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000383 */ 			}) ();
/* 000383 */ 		}
/* 000383 */ 		catch (__except0__) {
/* 000383 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000383 */ 				var e = __except0__;
/* 000385 */ 				// pass;
/* 000390 */ 				__except0__.__cause__ = null;
/* 000390 */ 				throw __except0__;
/* 000390 */ 			}
/* 000390 */ 			else if (isinstance (__except0__, Exception)) {
/* 000390 */ 				var e = __except0__;
/* 000392 */ 				// pass;
/* 000398 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000398 */ 				__except1__.__cause__ = null;
/* 000398 */ 				throw __except1__;
/* 000398 */ 			}
/* 000398 */ 			else {
/* 000398 */ 				throw __except0__;
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 	});}
/* 000398 */ });
/* 000411 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000411 */ 	var __accu0__ = latexnodes_parsers;
/* 000411 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000415 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000415 */ 	var __accu0__ = latexnodes_parsers;
/* 000415 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000428 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'})), 'Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'ref_label'})), '[]Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: 'r[]', argname: 'ref_label'}))});
/* 000435 */ export var RefMacro =  __class__ ('RefMacro', [FLMMacroSpecBase], {
/* 000435 */ 	__module__: __name__,
/* 000437 */ 	delayed_render: true,
/* 000439 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000439 */ 		var ref_type = 'ref';
/* 000439 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000439 */ 		var counter_prefix_variant = null;
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000447 */ 		var arguments_spec_list = (function () {
/* 000447 */ 			var __accu0__ = self;
/* 000447 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000447 */ 		}) ();
/* 000448 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000452 */ 		self.ref_type = ref_type;
/* 000453 */ 		self.command_arguments = command_arguments;
/* 000454 */ 		self.counter_prefix_variant = counter_prefix_variant;
/* 000456 */ 		self.command_argnames = (function () {
/* 000456 */ 			var __accu0__ = [];
/* 000456 */ 			var __iterable0__ = arguments_spec_list;
/* 000456 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000456 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000456 */ 				(function () {
/* 000456 */ 					var __accu1__ = __accu0__;
/* 000456 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000456 */ 				}) ();
/* 000456 */ 			}
/* 000456 */ 			return __accu0__;
/* 000456 */ 		}) ();
/* 000456 */ 	});},
/* 000458 */ 	_fields: tuple (['macroname', 'ref_type', 'command_arguments', 'counter_prefix_variant']),
/* 000461 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000462 */ 		return (function () {
/* 000462 */ 			var __accu0__ = [];
/* 000462 */ 			var __iterable0__ = command_arguments;
/* 000462 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000462 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000462 */ 				(function () {
/* 000462 */ 					var __accu1__ = __accu0__;
/* 000462 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, a));
/* 000462 */ 				}) ();
/* 000462 */ 			}
/* 000462 */ 			return __accu0__;
/* 000462 */ 		}) ();
/* 000462 */ 	});},
/* 000464 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000464 */ 		if (arguments.length) {
/* 000464 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000464 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000464 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000464 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000464 */ 					switch (__attrib0__) {
/* 000464 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 					}
/* 000464 */ 				}
/* 000464 */ 			}
/* 000464 */ 		}
/* 000464 */ 		else {
/* 000464 */ 		}
/* 000466 */ 		var node_args = (function () {
/* 000466 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000466 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000466 */ 		}) ();
/* 000470 */ 		var ref_spec = (function () {
/* 000470 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000470 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000470 */ 		}) ();
/* 000471 */ 		var ref_pair_list = [];
/* 000472 */ 		var __iterable0__ = (function () {
/* 000472 */ 			var __accu0__ = ref_spec;
/* 000472 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000472 */ 		}) ();
/* 000472 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000472 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000473 */ 			var ref_type = __left0__ [0];
/* 000473 */ 			var ref_label = __left0__ [1];
/* 000474 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000475 */ 				var __left0__ = (function () {
/* 000475 */ 					var __accu0__ = ref_label;
/* 000475 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000475 */ 				}) ();
/* 000475 */ 				var ref_type = __left0__ [0];
/* 000475 */ 				var ref_label = __left0__ [1];
/* 000475 */ 			}
/* 000476 */ 			(function () {
/* 000476 */ 				var __accu0__ = ref_pair_list;
/* 000476 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000476 */ 			}) ();
/* 000476 */ 		}
/* 000478 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000479 */ 			var display_content_nodelist = (function () {
/* 000479 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000479 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000480 */ 		else {
/* 000481 */ 			var display_content_nodelist = null;
/* 000481 */ 		}
/* 000483 */ 		node.flmarg_ref_list = ref_pair_list;
/* 000484 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000485 */ 			node.flmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000485 */ 		}
/* 000486 */ 		node.flm_ref_info = dict ({'ref_list': ref_pair_list, 'display_content_nodelist': display_content_nodelist});
/* 000486 */ 	});},
/* 000492 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000493 */ 		// pass;
/* 000493 */ 	});},
/* 000495 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000497 */ 		var ref_list = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000498 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000500 */ 		var mgr = (function () {
/* 000500 */ 			var __accu0__ = render_context;
/* 000500 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000500 */ 		}) ();
/* 000501 */ 		var resource_info = node.latex_walker.resource_info;
/* 000503 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000504 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000504 */ 			var ref_type = __left0__ [0];
/* 000504 */ 			var ref_label = __left0__ [1];
/* 000505 */ 			try {
/* 000506 */ 				return (function () {
/* 000506 */ 					var __accu0__ = mgr;
/* 000506 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, __kwargtrans__ ({counter_prefix_variant: self.counter_prefix_variant}));
/* 000506 */ 				}) ();
/* 000506 */ 			}
/* 000506 */ 			catch (__except0__) {
/* 000506 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000506 */ 					var e = __except0__;
/* 000511 */ 					// pass;
/* 000517 */ 					(function () {
/* 000517 */ 						var __accu0__ = e;
/* 000517 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000517 */ 					}) ();
/* 000518 */ 					var __except1__ = e;
/* 000518 */ 					__except1__.__cause__ = null;
/* 000518 */ 					throw __except1__;
/* 000518 */ 				}
/* 000518 */ 				else if (isinstance (__except0__, Exception)) {
/* 000518 */ 					var e = __except0__;
/* 000520 */ 					(function () {
/* 000520 */ 						var __accu0__ = logger;
/* 000521 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ {}'.format (ref_type, ref_label, e, (function () {
/* 000521 */ 							var __accu1__ = node;
/* 000521 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000521 */ 						}) (), (function () {
/* 000521 */ 							var __accu1__ = node;
/* 000521 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000521 */ 						}) ()));
/* 000521 */ 					}) ();
/* 000522 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000522 */ 					__except1__.__cause__ = null;
/* 000522 */ 					throw __except1__;
/* 000522 */ 				}
/* 000522 */ 				else {
/* 000522 */ 					throw __except0__;
/* 000522 */ 				}
/* 000522 */ 			}
/* 000522 */ 		}
/* 000531 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000533 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000533 */ 			__except0__.__cause__ = null;
/* 000533 */ 			throw __except0__;
/* 000533 */ 		}
/* 000535 */ 		return (function () {
/* 000535 */ 			var __accu0__ = mgr;
/* 000535 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info);
/* 000535 */ 		}) ();
/* 000535 */ 	});},
/* 000540 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000540 */ 		var kwargs = dict ();
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 				delete kwargs.__kwargtrans__;
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000541 */ 		if (__t__ (node.flm_ref_info === null)) {
/* 000544 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid ref info in node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000544 */ 			__except0__.__cause__ = null;
/* 000544 */ 			throw __except0__;
/* 000544 */ 		}
/* 000547 */ 		var safe_ref_labels = [];
/* 000548 */ 		var __iterable0__ = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000548 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000548 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000548 */ 			var ref_type = __left0__ [0];
/* 000548 */ 			var ref_label = __left0__ [1];
/* 000549 */ 			(function () {
/* 000549 */ 				var __accu0__ = safe_ref_labels;
/* 000550 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000550 */ 					var __accu1__ = recomposer;
/* 000550 */ 					return __call__ (__accu1__.make_safe_label, __accu1__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000550 */ 				}) ());
/* 000550 */ 			}) ();
/* 000550 */ 		}
/* 000554 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000556 */ 		if (__t__ (__t__ (display_content_nodelist !== null) && __t__ (display_content_nodelist.nodelist) && __call__ (len, null, display_content_nodelist.nodelist))) {
/* 000557 */ 			if (__t__ (__gt__ (__call__ (len, null, safe_ref_labels), 1))) {
/* 000559 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Hyperref macro cannot have multiple ref targets because it specifies a custom display string.'.format (), __kwargtrans__ ({pos: node.pos}));
/* 000559 */ 				__except0__.__cause__ = null;
/* 000559 */ 				throw __except0__;
/* 000559 */ 			}
/* 000564 */ 			var safe_label = __getitem__ (__getitem__ (safe_ref_labels, 0), 'safe_label');
/* 000565 */ 			var disp_latex_info = (function () {
/* 000565 */ 				var __accu0__ = recomposer;
/* 000565 */ 				return __call__ (__accu0__.recompose_pure_latex, __accu0__, display_content_nodelist);
/* 000565 */ 			}) ();
/* 000566 */ 			var disp_latex = __getitem__ (disp_latex_info, 'latex');
/* 000571 */ 			return __add__ (__add__ (__add__ (__add__ ('\\NoCaseChange{\\protect\\hyperref[', __call__ (str, null, safe_label)), ']{'), __call__ (str, null, disp_latex)), '}}');
/* 000571 */ 		}
/* 000574 */ 		(function () {
/* 000574 */ 			var __accu0__ = recomposer;
/* 000574 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'cleveref');
/* 000574 */ 		}) ();
/* 000577 */ 		return __add__ (__add__ ('\\NoCaseChange{\\protect\\cref{', (function () {
/* 000577 */ 			var __accu0__ = ',';
/* 000577 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000577 */ 				var __accu1__ = [];
/* 000577 */ 				var __iterable0__ = safe_ref_labels;
/* 000577 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000578 */ 					var safe_label_info = __getitem__ (__iterable0__, __index0__);
/* 000578 */ 					(function () {
/* 000578 */ 						var __accu2__ = __accu1__;
/* 000578 */ 						return __call__ (__accu2__.append, __accu2__, __getitem__ (safe_label_info, 'safe_label'));
/* 000578 */ 					}) ();
/* 000578 */ 				}
/* 000578 */ 				return __accu1__;
/* 000578 */ 			}) ());
/* 000578 */ 		}) ()), '}}');
/* 000578 */ 	});}
/* 000578 */ });
/* 000589 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000589 */ 	__module__: __name__,
/* 000595 */ 	feature_name: 'refs',
/* 000596 */ 	feature_title: 'Labels and cross-references',
/* 000598 */ 	RenderManager: FeatureRefsRenderManager,
/* 000600 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000600 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000600 */ 			var external_ref_resolvers = null;
/* 000600 */ 		};
/* 000600 */ 		if (arguments.length) {
/* 000600 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000600 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000600 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000600 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000600 */ 					switch (__attrib0__) {
/* 000600 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000600 */ 					}
/* 000600 */ 				}
/* 000600 */ 			}
/* 000600 */ 		}
/* 000600 */ 		else {
/* 000600 */ 		}
/* 000601 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000603 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000604 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000604 */ 		}
/* 000605 */ 		else {
/* 000606 */ 			self.external_ref_resolvers = [];
/* 000606 */ 		}
/* 000607 */ 		// pass;
/* 000607 */ 	});},
/* 000612 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000612 */ 		if (arguments.length) {
/* 000612 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000612 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000612 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000612 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000612 */ 					switch (__attrib0__) {
/* 000612 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000612 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000612 */ 					}
/* 000612 */ 				}
/* 000612 */ 			}
/* 000612 */ 		}
/* 000612 */ 		else {
/* 000612 */ 		}
/* 000613 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000614 */ 			(function () {
/* 000614 */ 				var __accu0__ = logger;
/* 000614 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000614 */ 			}) ();
/* 000614 */ 		}
/* 000616 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000616 */ 	});},
/* 000618 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000618 */ 		if (arguments.length) {
/* 000618 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000618 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000618 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000618 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000618 */ 					switch (__attrib0__) {
/* 000618 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 					}
/* 000618 */ 				}
/* 000618 */ 			}
/* 000618 */ 		}
/* 000618 */ 		else {
/* 000618 */ 		}
/* 000619 */ 		(function () {
/* 000619 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000619 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000619 */ 		}) ();
/* 000619 */ 	});},
/* 000621 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000621 */ 		if (arguments.length) {
/* 000621 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000621 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000621 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000621 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000621 */ 					switch (__attrib0__) {
/* 000621 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000621 */ 					}
/* 000621 */ 				}
/* 000621 */ 			}
/* 000621 */ 		}
/* 000621 */ 		else {
/* 000621 */ 		}
/* 000624 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [(function () {
/* 000624 */ 			var __accu0__ = self;
/* 000624 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])}));
/* 000628 */ 		}) (), (function () {
/* 000628 */ 			var __accu0__ = self;
/* 000628 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}));
/* 000628 */ 		}) ()]}));
/* 000628 */ 	});},
/* 000635 */ 	RefMacroCls: RefMacro,
/* 000638 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000638 */ 		if (arguments.length) {
/* 000638 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000638 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000638 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000638 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000638 */ 					switch (__attrib0__) {
/* 000638 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 					}
/* 000638 */ 				}
/* 000638 */ 			}
/* 000638 */ 		}
/* 000638 */ 		else {
/* 000638 */ 		}
/* 000641 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000641 */ 	});}
/* 000641 */ });
/* 000650 */ export var FeatureClass = FeatureRefs;
/* 000006 */ 
//# sourceMappingURL=flm.feature.refs.map